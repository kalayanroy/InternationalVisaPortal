import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  generateToken,
  authenticateToken,
  requireAdmin,
  type AuthRequest,
} from "./auth";
import { loginSchema, registerSchema } from "@shared/schema";
import {
  insertContactInquirySchema,
  insertStudentSchema,
  insertAppointmentSchema,
  insertApplicationSchema,
} from "@shared/schema";
import { z } from "zod";
// It's good practice to have password complexity requirements here.
const passwordResetSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters long"),
});
export async function registerRoutes(app: Express): Promise<Server> {
  // Authentication routes
  app.post("/api/auth/register", async (req, res) => {
    try {
      const userData = registerSchema.parse(req.body);

      // Check if user already exists
      const existingUserByUsername = await storage.getUserByUsername(
        userData.username,
      );
      if (existingUserByUsername) {
        return res.status(400).json({ message: "Username already exists" });
      }

      const existingUserByEmail = await storage.getUserByEmail(userData.email);
      if (existingUserByEmail) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const user = await storage.registerUser(userData);
      const token = generateToken(
        user.id,
        user.username,
        user.email || "",
        user.role,
      );

      res.status(201).json({
        message: "User registered successfully",
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
      console.error("Registration error:", error);
      if (error.name === "ZodError") {
        return res
          .status(400)
          .json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const credentials = loginSchema.parse(req.body);

      const user = await storage.authenticateUser(credentials);
      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      const token = generateToken(
        user.id,
        user.username,
        user.email || "",
        user.role,
      );

      res.json({
        message: "Login successful",
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
      console.error("Login error:", error);
      if (error.name === "ZodError") {
        return res
          .status(400)
          .json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/auth/me", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const user = await storage.getUserById(req.user!.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
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
      console.error("Get user error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/auth/logout", authenticateToken, (req, res) => {
    res.json({ message: "Logged out successfully" });
  });

  // Admin routes
  app.get(
    "/api/admin/dashboard",
    authenticateToken,
    requireAdmin,
    async (req, res) => {
      try {
        const [contactInquiries, students, appointments, applications] =
          await Promise.all([
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
        console.error("Dashboard error:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    },
  );

  // Initialize admin user
  app.post("/api/init-admin", async (req, res) => {
    try {
      const existingAdmin = await storage.getUserByUsername("admin");
      if (existingAdmin) {
        return res.status(400).json({ message: "Admin user already exists" });
      }

      await storage.createUser({
        username: "admin",
        email: "admin@eduvisa.com",
        password: "admin123",
        firstName: "Admin",
        lastName: "User",
        role: "admin",
        isActive: true,
      });

      res.json({ message: "Admin user created successfully" });
    } catch (error) {
      console.error("Init admin error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);

      res.json({
        success: true,
        message:
          "Thank you for your inquiry! We will contact you within 24 hours.",
        inquiry: inquiry,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error",
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
        message: "Failed to fetch inquiries",
      });
    }
  });

  // Student registration
  app.post("/api/students/register", async (req, res) => {
    try {
      const validatedData = insertStudentSchema.parse(req.body);

      // Check if student already exists
      const existingStudent = await storage.getStudentByEmail(
        validatedData.email,
      );
      if (existingStudent) {
        return res.status(400).json({
          success: false,
          message: "A student with this email already exists",
        });
      }

      const student = await storage.createStudent(validatedData);

      res.json({
        success: true,
        message: "Registration successful! Welcome to our education platform.",
        student: { ...student, password: undefined }, // Don't send password back
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid registration data",
          errors: error.errors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error",
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
          message: "Email and password are required",
        });
      }

      const student = await storage.getStudentByEmail(email);
      if (!student || student.password !== password) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      res.json({
        success: true,
        message: "Login successful",
        student: { ...student, password: undefined },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
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
        message:
          "Appointment booked successfully! We will contact you to confirm the details.",
        appointment: appointment,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid appointment data",
          errors: error.errors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error",
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
        message: "Failed to fetch appointments",
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
        application: application,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid application data",
          errors: error.errors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error",
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
        message: "Failed to fetch applications",
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
        message: "Failed to fetch applications",
      });
    }
  });

  // Student Application routes
  app.post(
    "/api/student-applications",
    authenticateToken,
    async (req: AuthRequest, res) => {
      try {
        const applicationData = {
          ...req.body,
          userId: req.user?.id, // Use the authenticated user's ID
        };
        if (!applicationData.planningTestDate) {
          applicationData.planningTestDate = new Date();
        }
        console.log("Creating student application with data:", applicationData);

        const application =
          await storage.createStudentApplication(applicationData);
        res.status(201).json(application);
      } catch (error) {
        console.error("Error creating student application:", error);
        res
          .status(500)
          .json({ message: "Failed to create student application" });
      }
    },
  );

  app.get(
    "/api/student-applications",
    authenticateToken,
    async (req: any, res) => {
      try {
        const applications = await storage.getAllStudentApplications();
        res.json(applications);
      } catch (error) {
        console.error("Error fetching student applications:", error);
        res
          .status(500)
          .json({ message: "Failed to fetch student applications" });
      }
    },
  );

  app.get(
    "/api/student-applications/:id",
    authenticateToken,
    async (req: any, res) => {
      try {
        const application = await storage.getStudentApplication(
          parseInt(req.params.id),
        );
        if (!application) {
          return res.status(404).json({ message: "Application not found" });
        }
        res.json(application);
      } catch (error) {
        console.error("Error fetching student application:", error);
        res
          .status(500)
          .json({ message: "Failed to fetch student application" });
      }
    },
  );

  app.patch(
    "/api/student-applications/:id/status",
    authenticateToken,
    async (req: AuthRequest, res) => {
      try {
        const { status } = req.body;
        const application = await storage.updateStudentApplicationStatus(
          parseInt(req.params.id),
          status,
        );
        if (!application) {
          return res.status(404).json({ message: "Application not found" });
        }
        res.json(application);
      } catch (error) {
        console.error("Error updating application status:", error);
        res
          .status(500)
          .json({ message: "Failed to update application status" });
      }
    },
  );

  // Admin student applications
  app.get(
    "/api/admin/student-applications",
    authenticateToken,
    requireAdmin,
    async (req: AuthRequest, res) => {
      try {
        const applications = await storage.getAllStudentApplications();
        res.json(applications);
      } catch (error) {
        console.error("Error fetching student applications:", error);
        res
          .status(500)
          .json({ message: "Failed to fetch student applications" });
      }
    },
  );

  app.patch(
    "/api/admin/student-applications/:id",
    authenticateToken,
    requireAdmin,
    async (req: AuthRequest, res) => {
      try {
        const applicationId = parseInt(req.params.id);
        const { status } = req.body;

        const updatedApplication = await storage.updateStudentApplicationStatus(
          applicationId,
          status,
        );
        if (!updatedApplication) {
          return res.status(404).json({ message: "Application not found" });
        }

        res.json(updatedApplication);
      } catch (error) {
        console.error("Error updating application:", error);
        res.status(500).json({ message: "Failed to update application" });
      }
    },
  );

  // Admin universities
  app.get(
    "/api/admin/universities",
    authenticateToken,
    requireAdmin,
    async (req: AuthRequest, res) => {
      try {
        const universities = await storage.getAllUniversities();
        res.json(universities);
      } catch (error) {
        console.error("Error fetching universities:", error);
        res.status(500).json({ message: "Failed to fetch universities" });
      }
    },
  );

  app.post(
    "/api/admin/universities",
    authenticateToken,
    requireAdmin,
    async (req: AuthRequest, res) => {
      try {
        const universityData = req.body;
        console.log('Creating university:', universityData);
        
        const newUniversity = await storage.createUniversity(universityData);
        res.status(201).json(newUniversity);
      } catch (error) {
        console.error("Error creating university:", error);
        res.status(500).json({ message: "Failed to create university" });
      }
    },
  );

  app.patch(
    "/api/admin/universities/:id",
    authenticateToken,
    requireAdmin,
    async (req: AuthRequest, res) => {
      try {
        const universityId = parseInt(req.params.id);
        const updates = req.body;
        
        const updatedUniversity = await storage.updateUniversity(universityId, updates);
        if (!updatedUniversity) {
          return res.status(404).json({ message: "University not found" });
        }
        
        res.json(updatedUniversity);
      } catch (error) {
        console.error("Error updating university:", error);
        res.status(500).json({ message: "Failed to update university" });
      }
    },
  );

  app.delete(
    "/api/admin/universities/:id",
    authenticateToken,
    requireAdmin,
    async (req: AuthRequest, res) => {
      try {
        const universityId = parseInt(req.params.id);
        
        const deletedUniversity = await storage.deleteUniversity(universityId);
        if (!deletedUniversity) {
          return res.status(404).json({ message: "University not found" });
        }
        
        res.json({ message: "University deleted successfully" });
      } catch (error) {
        console.error("Error deleting university:", error);
        res.status(500).json({ message: "Failed to delete university" });
      }
    },
  );

  // Admin user management routes
  app.get(
    "/api/admin/users",
    authenticateToken,
    requireAdmin,
    async (req: AuthRequest, res) => {
      try {
        const users = await storage.getAllUsers();
        console.log(users);
        res.json(users);
      } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Failed to fetch users" });
      }
    },
  );

  app.post(
    "/api/admin/users",
    authenticateToken,
    requireAdmin,
    async (req: AuthRequest, res) => {
      try {
        const { username, email, password, firstName, lastName, role } =
          req.body;

        // Check if user already exists
        const existingUser = await storage.getUserByUsername(username);
        if (existingUser) {
          return res.status(400).json({ message: "Username already exists" });
        }

        const existingEmail = await storage.getUserByEmail(email);
        if (existingEmail) {
          return res.status(400).json({ message: "Email already exists" });
        }

        const newUser = await storage.registerUser({
          username,
          email,
          password,
          firstName,
          lastName,
          role: role || "user",
        });

        res.status(201).json(newUser);
      } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Failed to create user" });
      }
    },
  );

  app.patch(
    "/api/admin/users/:id",
    authenticateToken,
    requireAdmin,
    async (req: AuthRequest, res) => {
      try {
        const userId = parseInt(req.params.id);
        const { role } = req.body;

        const updatedUser = await storage.updateUserRole(userId, role);
        if (!updatedUser) {
          return res.status(404).json({ message: "User not found" });
        }

        res.json(updatedUser);
      } catch (error) {
        console.error("Error updating user role:", error);
        res.status(500).json({ message: "Failed to update user role" });
      }
    },
  );

  // New endpoint for resetting user password
  app.patch(
    "/api/admin/users/:id/reset-password", // Correct endpoint path
    authenticateToken,
    requireAdmin,
    async (req: AuthRequest, res) => {
      try {
        const userId = parseInt(req.params.id);
        // Validate the new password using Zod schema
        const { password } = passwordResetSchema.parse(req.body);

        // Assume storage.updateUserPassword handles hashing and database update
        const updatedUser = await storage.resetUserPassword(userId, password);

        if (!updatedUser) {
          return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "Password reset successfully" });
      } catch (error) {
        console.error("Error resetting user password:", error);
        if (error instanceof z.ZodError) {
          // Handle Zod validation errors
          return res
            .status(400)
            .json({ message: "Validation error", errors: error.errors });
        }
        res.status(500).json({ message: "Failed to reset user password" });
      }
    },
  );

  app.delete(
    "/api/admin/users/:id",
    authenticateToken,
    requireAdmin,
    async (req: AuthRequest, res) => {
      try {
        const userId = parseInt(req.params.id);

        // Don't allow deleting own account
        if (req.user && req.user.id === userId) {
          return res
            .status(400)
            .json({ message: "Cannot delete your own account" });
        }

        const deletedUser = await storage.deleteUser(userId);
        if (!deletedUser) {
          return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User deleted successfully" });
      } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Failed to delete user" });
      }
    },
  );

  // Attachment System API Routes
  
  // Schools routes
  app.get('/api/admin/schools', authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const universityId = req.query.universityId as string;
      const schools = await storage.getSchoolsByUniversity(parseInt(universityId));
      res.json(schools);
    } catch (error) {
      console.error("Error fetching schools:", error);
      res.status(500).json({ message: "Failed to fetch schools" });
    }
  });

  app.post('/api/admin/schools', authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const schoolData = req.body;
      const newSchool = await storage.createSchool(schoolData);
      res.status(201).json(newSchool);
    } catch (error) {
      console.error("Error creating school:", error);
      res.status(500).json({ message: "Failed to create school" });
    }
  });

  // Visa Requirements routes
  app.get('/api/admin/visa-requirements', authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const visaReqs = await storage.getAllVisaRequirements();
      res.json(visaReqs);
    } catch (error) {
      console.error("Error fetching visa requirements:", error);
      res.status(500).json({ message: "Failed to fetch visa requirements" });
    }
  });

  app.post('/api/admin/visa-requirements', authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const visaReqData = req.body;
      const newVisaReq = await storage.createVisaRequirement(visaReqData);
      res.status(201).json(newVisaReq);
    } catch (error) {
      console.error("Error creating visa requirement:", error);
      res.status(500).json({ message: "Failed to create visa requirement" });
    }
  });

  // Costs routes
  app.get('/api/admin/costs', authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const costs = await storage.getAllCosts();
      res.json(costs);
    } catch (error) {
      console.error("Error fetching costs:", error);
      res.status(500).json({ message: "Failed to fetch costs" });
    }
  });

  app.post('/api/admin/costs', authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const costData = req.body;
      const newCost = await storage.createCost(costData);
      res.status(201).json(newCost);
    } catch (error) {
      console.error("Error creating cost:", error);
      res.status(500).json({ message: "Failed to create cost" });
    }
  });

  // Scholarships routes
  app.get('/api/admin/scholarships', authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const scholarships = await storage.getAllScholarships();
      res.json(scholarships);
    } catch (error) {
      console.error("Error fetching scholarships:", error);
      res.status(500).json({ message: "Failed to fetch scholarships" });
    }
  });

  app.post('/api/admin/scholarships', authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const scholarshipData = req.body;
      const newScholarship = await storage.createScholarship(scholarshipData);
      res.status(201).json(newScholarship);
    } catch (error) {
      console.error("Error creating scholarship:", error);
      res.status(500).json({ message: "Failed to create scholarship" });
    }
  });

  // Admission Timeline routes
  app.get('/api/admin/admission-timeline', authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const timeline = await storage.getAllAdmissionTimeline();
      res.json(timeline);
    } catch (error) {
      console.error("Error fetching admission timeline:", error);
      res.status(500).json({ message: "Failed to fetch admission timeline" });
    }
  });

  app.post('/api/admin/admission-timeline', authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const timelineData = req.body;
      const newTimeline = await storage.createAdmissionTimeline(timelineData);
      res.status(201).json(newTimeline);
    } catch (error) {
      console.error("Error creating admission timeline:", error);
      res.status(500).json({ message: "Failed to create admission timeline" });
    }
  });

  // Bulk import route for Harvard data
  app.post('/api/admin/import-harvard-data', authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      console.log("Importing Harvard data...");

      // Import Schools
      const harvardSchools = [
        { name: "Harvard Medical School", tuition: "$69,300", duration: "4 years", requirements: "MCAT, Pre-med courses", deadline: "October 15", category: "medical" },
        { name: "Harvard Business School", tuition: "$73,440", duration: "2 years", requirements: "GMAT/GRE, Work experience", deadline: "April 2", category: "business" },
        { name: "Harvard Law School", tuition: "$70,430", duration: "3 years", requirements: "LSAT, Bachelor's degree", deadline: "February 15", category: "law" },
        { name: "School of Engineering", tuition: "$59,076", duration: "4 years", requirements: "SAT/ACT, Strong math/science", deadline: "January 1", category: "engineering" },
        { name: "Graduate School of Education", tuition: "$55,272", duration: "1-2 years", requirements: "GRE, Teaching experience preferred", deadline: "January 2", category: "education" },
        { name: "Kennedy School of Government", tuition: "$65,875", duration: "2 years", requirements: "GRE/GMAT, Policy experience", deadline: "December 1", category: "government" },
      ];

      for (const school of harvardSchools) {
        await storage.createSchool({ ...school, universityId: 1 }); // Harvard University ID
      }

      // Import Visa Requirements
      const f1Visa = {
        visaType: "F1 Visa",
        processing: "3-5 weeks",
        fee: "$185",
        interview: "Required",
        requirements: [
          "Form I-20 from Harvard University",
          "SEVIS fee payment ($350)",
          "DS-160 application completed online",
          "Valid passport (6+ months validity)",
          "Financial documentation ($85,000+ for first year)",
          "Academic transcripts and test scores",
          "Visa interview at US Embassy/Consulate",
          "Biometric appointment if required"
        ]
      };

      const j1Visa = {
        visaType: "J1 Visa",
        processing: "2-4 weeks",
        fee: "$185",
        interview: "Required",
        requirements: [
          "Form DS-2019 from Harvard",
          "SEVIS fee payment ($220)",
          "Two-year home residency requirement",
          "Health insurance mandatory",
          "Program sponsor verification"
        ]
      };

      await storage.createVisaRequirement({ ...f1Visa, universityId: 1 });
      await storage.createVisaRequirement({ ...j1Visa, universityId: 1 });

      // Import Costs
      const undergraduateCosts = {
        category: "undergraduate",
        tuition: "$59,076",
        fees: "$4,195",
        roomBoard: "$20,374",
        books: "$1,000",
        personal: "$2,500",
        total: "$87,145"
      };

      const graduateCosts = {
        category: "graduate",
        tuition: "$55,272 - $73,440",
        fees: "$3,500 - $5,000",
        roomBoard: "$18,000 - $25,000",
        books: "$1,200",
        personal: "$3,000",
        total: "$80,972 - $107,640"
      };

      await storage.createCost({ ...undergraduateCosts, universityId: 1 });
      await storage.createCost({ ...graduateCosts, universityId: 1 });

      // Import Scholarships
      const harvardScholarships = [
        { name: "Harvard Financial Aid", amount: "Up to full tuition", criteria: "Need-based, family income under $85,000", coverage: "100% of families earning less than $85,000 pay nothing" },
        { name: "Harvard Merit Scholarships", amount: "$5,000 - $25,000", criteria: "Academic excellence, leadership", coverage: "Various partial awards" },
        { name: "International Student Aid", amount: "Variable", criteria: "Financial need demonstration", coverage: "Same aid policy as domestic students" }
      ];

      for (const scholarship of harvardScholarships) {
        await storage.createScholarship({ ...scholarship, universityId: 1 });
      }

      // Import Admission Timeline
      const timeline = [
        { date: "August - October", task: "Prepare application materials" },
        { date: "November 1", task: "Early Action deadline" },
        { date: "January 1", task: "Regular Decision deadline" },
        { date: "Mid-December", task: "Early Action results" },
        { date: "Late March", task: "Regular Decision results" },
        { date: "May 1", task: "Enrollment deposit deadline" }
      ];

      for (const item of timeline) {
        await storage.createAdmissionTimeline({ ...item, universityId: 1 });
      }

      res.json({ message: "Harvard data imported successfully", imported: { schools: 6, visaRequirements: 2, costs: 2, scholarships: 3, timeline: 6 } });
    } catch (error) {
      console.error("Error importing Harvard data:", error);
      res.status(500).json({ message: "Failed to import Harvard data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
