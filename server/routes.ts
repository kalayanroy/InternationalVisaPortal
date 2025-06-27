import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateToken, authenticateToken, requireAdmin, type AuthRequest } from "./auth";
import { loginSchema, registerSchema } from "@shared/schema";
import { 
  insertContactInquirySchema, 
  insertStudentSchema, 
  insertAppointmentSchema,
  insertApplicationSchema 
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Authentication routes
  app.post('/api/auth/register', async (req, res) => {
    try {
      const userData = registerSchema.parse(req.body);
      
      // Check if user already exists
      const existingUserByUsername = await storage.getUserByUsername(userData.username);
      if (existingUserByUsername) {
        return res.status(400).json({ message: 'Username already exists' });
      }

      const existingUserByEmail = await storage.getUserByEmail(userData.email);
      if (existingUserByEmail) {
        return res.status(400).json({ message: 'Email already exists' });
      }

      const user = await storage.registerUser(userData);
      const token = generateToken(user.id, user.username, user.email || '', user.role);

      res.status(201).json({
        message: 'User registered successfully',
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        },
      });
    } catch (error) {
      console.error('Registration error:', error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ message: 'Validation error', errors: error.errors });
      }
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.post('/api/auth/login', async (req, res) => {
    try {
      const credentials = loginSchema.parse(req.body);
      
      const user = await storage.authenticateUser(credentials);
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      const token = generateToken(user.id, user.username, user.email || '', user.role);

      res.json({
        message: 'Login successful',
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        },
      });
    } catch (error) {
      console.error('Login error:', error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ message: 'Validation error', errors: error.errors });
      }
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.get('/api/auth/me', authenticateToken, async (req: AuthRequest, res) => {
    try {
      const user = await storage.getUserById(req.user!.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({
        id: user.id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      });
    } catch (error) {
      console.error('Get user error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.post('/api/auth/logout', authenticateToken, (req, res) => {
    res.json({ message: 'Logged out successfully' });
  });

  // Admin routes
  app.get('/api/admin/dashboard', authenticateToken, requireAdmin, async (req, res) => {
    try {
      const [contactInquiries, students, appointments, applications] = await Promise.all([
        storage.getContactInquiries(),
        [],
        storage.getAppointments(),
        storage.getApplications(),
      ]);

      res.json({
        stats: {
          totalInquiries: contactInquiries.length,
          totalStudents: students.length,
          totalAppointments: appointments.length,
          totalApplications: applications.length,
        },
        recentInquiries: contactInquiries.slice(0, 5),
        recentAppointments: appointments.slice(0, 5),
        recentApplications: applications.slice(0, 5),
      });
    } catch (error) {
      console.error('Dashboard error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Initialize admin user
  app.post('/api/init-admin', async (req, res) => {
    try {
      const existingAdmin = await storage.getUserByUsername('admin');
      if (existingAdmin) {
        return res.status(400).json({ message: 'Admin user already exists' });
      }

      await storage.createUser({
        username: 'admin',
        email: 'admin@eduvisa.com',
        password: 'admin123',
        firstName: 'Admin',
        lastName: 'User',
        role: 'admin',
        isActive: true,
      });

      res.json({ message: 'Admin user created successfully' });
    } catch (error) {
      console.error('Init admin error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      res.json({ 
        success: true, 
        message: "Thank you for your inquiry! We will contact you within 24 hours.",
        inquiry: inquiry
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contact inquiries (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch inquiries" 
      });
    }
  });

  // Student registration
  app.post("/api/students/register", async (req, res) => {
    try {
      const validatedData = insertStudentSchema.parse(req.body);
      
      // Check if student already exists
      const existingStudent = await storage.getStudentByEmail(validatedData.email);
      if (existingStudent) {
        return res.status(400).json({
          success: false,
          message: "A student with this email already exists"
        });
      }

      const student = await storage.createStudent(validatedData);
      
      res.json({
        success: true,
        message: "Registration successful! Welcome to our education platform.",
        student: { ...student, password: undefined } // Don't send password back
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid registration data",
          errors: error.errors
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  // Student login
  app.post("/api/students/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Email and password are required"
        });
      }

      const student = await storage.getStudentByEmail(email);
      if (!student || student.password !== password) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password"
        });
      }

      res.json({
        success: true,
        message: "Login successful",
        student: { ...student, password: undefined }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  // Appointment booking
  app.post("/api/appointments", async (req, res) => {
    try {
      const validatedData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(validatedData);
      
      res.json({
        success: true,
        message: "Appointment booked successfully! We will contact you to confirm the details.",
        appointment: appointment
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid appointment data",
          errors: error.errors
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  // Get all appointments (for admin)
  app.get("/api/appointments", async (req, res) => {
    try {
      const appointments = await storage.getAppointments();
      res.json(appointments);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch appointments"
      });
    }
  });

  // Application management
  app.post("/api/applications", async (req, res) => {
    try {
      const validatedData = insertApplicationSchema.parse(req.body);
      const application = await storage.createApplication(validatedData);
      
      res.json({
        success: true,
        message: "Application created successfully",
        application: application
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid application data",
          errors: error.errors
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  // Get student applications
  app.get("/api/students/:studentId/applications", async (req, res) => {
    try {
      const studentId = parseInt(req.params.studentId);
      const applications = await storage.getStudentApplications(studentId);
      res.json(applications);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch applications"
      });
    }
  });

  // Get all applications (for admin)
  app.get("/api/applications", async (req, res) => {
    try {
      const applications = await storage.getApplications();
      res.json(applications);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch applications"
      });
    }
  });

  // Student Application routes
  app.post('/api/student-applications', async (req, res) => {
    try {
      const applicationData = req.body;
      const application = await storage.createStudentApplication(applicationData);
      res.status(201).json(application);
    } catch (error) {
      console.error("Error creating student application:", error);
      res.status(500).json({ message: "Failed to create student application" });
    }
  });

  app.get('/api/student-applications', authenticateToken, async (req: any, res) => {
    try {
      const applications = await storage.getAllStudentApplications();
      res.json(applications);
    } catch (error) {
      console.error("Error fetching student applications:", error);
      res.status(500).json({ message: "Failed to fetch student applications" });
    }
  });

  app.get('/api/student-applications/:id', authenticateToken, async (req: any, res) => {
    try {
      const application = await storage.getStudentApplication(parseInt(req.params.id));
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      res.json(application);
    } catch (error) {
      console.error("Error fetching student application:", error);
      res.status(500).json({ message: "Failed to fetch student application" });
    }
  });

  app.patch('/api/student-applications/:id/status', authenticateToken, async (req: any, res) => {
    try {
      const { status } = req.body;
      const application = await storage.updateStudentApplicationStatus(parseInt(req.params.id), status);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      res.json(application);
    } catch (error) {
      console.error("Error updating application status:", error);
      res.status(500).json({ message: "Failed to update application status" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
