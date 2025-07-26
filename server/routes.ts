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
  insertConsultationSchema,
} from "@shared/schema";
import { z } from "zod";
import { upload, uploadApplicationDocuments, handleUploadError, getFileUrl } from "./uploads";
import path from "path";
import fs from "fs";
import jwt from "jsonwebtoken";

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

  // File serving endpoint with token support in query params
  app.get("/api/files/applications/:userId/:filename(*)", async (req, res) => {
    try {
      const { userId } = req.params;
      const filename = decodeURIComponent(req.params.filename);
      const token = req.headers.authorization?.replace('Bearer ', '') || req.query.token as string;
      
      console.log(`File download request - userId: ${userId}, filename: ${filename}, token: ${token ? 'provided' : 'missing'}`);
      
      if (!token) {
        console.log("No token provided");
        return res.status(401).json({ message: "Authentication required" });
      }

      // Verify token
      let decoded;
      try {
        const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
        decoded = jwt.verify(token, JWT_SECRET) as any;
        console.log(`Token decoded successfully - user ID: ${decoded.id}, role: ${decoded.role}`);
      } catch (tokenError) {
        console.log("Token verification failed:", tokenError);
        return res.status(401).json({ message: "Invalid token" });
      }
      
      // Check if user has permission to access the file (own files or admin)
      if (decoded.id !== parseInt(userId) && decoded.role !== 'admin') {
        console.log(`Access denied - decoded.id: ${decoded.id}, userId: ${userId}, role: ${decoded.role}`);
        return res.status(403).json({ message: "Access denied" });
      }

      const filePath = path.join(process.cwd(), 'uploads', 'applications', `user_${userId}`, filename);
      console.log(`Looking for file at: ${filePath}`);
      
      // Check if file exists
      if (!fs.existsSync(filePath)) {
        console.log(`File not found at path: ${filePath}`);
        
        // List directory contents for debugging
        const userDir = path.join(process.cwd(), 'uploads', 'applications', `user_${userId}`);
        if (fs.existsSync(userDir)) {
          const files = fs.readdirSync(userDir);
          console.log(`Files in user directory: ${files.join(', ')}`);
        } else {
          console.log(`User directory does not exist: ${userDir}`);
        }
        
        return res.status(404).json({ message: "File not found" });
      }
      
      console.log(`Serving file: ${filePath}`);
      
      // Set proper headers for file download
      const stat = fs.statSync(filePath);
      res.setHeader('Content-Length', stat.size);
      res.setHeader('Content-Type', 'application/octet-stream');
      res.setHeader('Content-Disposition', `attachment; filename="${path.basename(filename)}"`);
      
      // Stream the file
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
      
    } catch (error) {
      console.error("Error serving file:", error);
      res.status(500).json({ message: "Failed to serve file" });
    }
  });

  // Student Application routes with file upload
  app.post(
    "/api/student-applications",
    authenticateToken,
    uploadApplicationDocuments,
    handleUploadError,
    async (req: AuthRequest, res) => {
      try {
        const files = req.files as { [fieldname: string]: Express.Multer.File[] };
        const userId = req.user?.id!;
        
        // Process uploaded files and map to database field names
        const fileData: Record<string, string> = {};
        
        // Map form field names to database field names
        const fieldMapping = {
          'passport': 'passportDocument',
          'transcript': 'academicDocuments', 
          'testScore': 'englishTestScore',
          'cv': 'cvResume',
          'sop': 'statementOfPurpose',
          'experience': 'experienceLetters',
          'nationalId': 'nationalIdDoc',
          'photo': 'passportPhoto',
          'birth': 'birthCertificate',
          'financial': 'financialDocuments',
          'additionalDocuments': 'additionalDocuments'
        };
        
        if (files) {
          Object.keys(files).forEach(fieldName => {
            const fieldFiles = files[fieldName];
            if (fieldFiles && fieldFiles.length > 0) {
              const dbFieldName = fieldMapping[fieldName as keyof typeof fieldMapping] || fieldName;
              
              // For single file fields, store just the filename
              if (fieldFiles.length === 1) {
                fileData[dbFieldName] = fieldFiles[0].filename;
              } else {
                // For multiple files, store as comma-separated filenames
                fileData[dbFieldName] = fieldFiles.map(f => f.filename).join(',');
              }
            }
          });
        }

        // Handle additional documents metadata
        if (req.body.additionalDocumentsMetadata) {
          try {
            const metadata = JSON.parse(req.body.additionalDocumentsMetadata);
            const additionalFiles = files['additionalDocuments'] || [];
            
            // Match files to metadata entries
            let fileIndex = 0;
            const processedMetadata = metadata.map((docMeta: any) => {
              const docFiles = additionalFiles.slice(fileIndex, fileIndex + docMeta.fileCount);
              fileIndex += docMeta.fileCount;
              
              return {
                name: docMeta.name,
                notes: docMeta.notes,
                files: docFiles.map(f => f.filename)
              };
            });
            
            fileData['additionalDocumentsMetadata'] = JSON.stringify(processedMetadata);
          } catch (error) {
            console.error('Error processing additional documents metadata:', error);
          }
        }

        const applicationData = {
          ...req.body,
          ...fileData, // Add uploaded file references
          userId,
        };
        
        if (!applicationData.planningTestDate) {
          applicationData.planningTestDate = new Date();
        }
        
        console.log("Creating student application with files:", applicationData);

        const application = await storage.createStudentApplication(applicationData);
        res.status(201).json({
          ...application,
          message: "Application submitted successfully with documents"
        });
      } catch (error) {
        console.error("Error creating student application:", error);
        res.status(500).json({ message: "Failed to create student application" });
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
      const universityId = req.query.universityId as string;
      const visaReqs = await storage.getVisaRequirementsByUniversity(parseInt(universityId));
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
      const universityId = req.query.universityId as string;
      const costs = await storage.getCostsByUniversity(parseInt(universityId));
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
      const universityId = req.query.universityId as string;
      const scholarships = await storage.getScholarshipsByUniversity(parseInt(universityId));
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
      const universityId = req.query.universityId as string;
      const timeline = await storage.getAdmissionTimelineByUniversity(parseInt(universityId));
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

  // SOP Generation routes
  app.post("/api/generate-sop", async (req, res) => {
    try {
      const { generateSOPWithAI, generateSOPDocument } = await import("./sopGenerator");
      const { formData, aiProvider = 'gemini' } = req.body;
      
      if (!formData) {
        return res.status(400).json({ 
          success: false, 
          message: "Form data is required" 
        });
      }

      // Generate SOP text using AI
      const sopText = await generateSOPWithAI(formData, aiProvider);
      
      res.json({
        success: true,
        sopText: sopText,
        message: "SOP generated successfully"
      });
    } catch (error) {
      console.error("Error generating SOP:", error);
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : "Failed to generate SOP"
      });
    }
  });

  app.post("/api/generate-sop-document", async (req, res) => {
    try {
      const { generateSOPDocument } = await import("./sopGenerator");
      const { sopText, studentName, format = 'docx' } = req.body;
      
      if (!sopText || !studentName) {
        return res.status(400).json({ 
          success: false, 
          message: "SOP text and student name are required" 
        });
      }

      if (format === 'docx') {
        const docBuffer = await generateSOPDocument(sopText, studentName);
        
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        res.setHeader('Content-Disposition', `attachment; filename="${studentName.replace(/\s+/g, '_')}_SOP.docx"`);
        res.send(docBuffer);
      } else {
        res.status(400).json({
          success: false,
          message: "Currently only DOCX format is supported"
        });
      }
    } catch (error) {
      console.error("Error generating SOP document:", error);
      res.status(500).json({
        success: false,
        message: "Failed to generate SOP document"
      });
    }
  });

  // User Dashboard API endpoints
  app.get("/api/user/applications", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const applications = await storage.getUserApplications(userId);
      res.json(applications);
    } catch (error) {
      console.error("Error fetching user applications:", error);
      res.status(500).json({ message: "Failed to fetch applications" });
    }
  });

  app.get("/api/user/applications/:applicationId/download", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      const applicationId = parseInt(req.params.applicationId);
      
      if (!userId || !applicationId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // Get the application and verify ownership
      const applications = await storage.getUserApplications(userId);
      const application = applications.find(app => app.id === applicationId);
      
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }

      // For now, we'll generate a simple PDF with application details
      // In a real implementation, you might want to use a PDF library like jsPDF or puppeteer
      const applicationData = {
        fullName: application.fullName,
        email: application.email,
        contactNumber: application.contactNumber,
        preferredCountries: application.preferredCountries,
        preferredCourse: application.preferredCourse,
        studyLevel: application.studyLevel,
        preferredIntake: application.preferredIntake,
        budget: `${application.budgetCurrency} ${application.budget?.toLocaleString()}`,
        status: application.status,
        submittedDocuments: application.submittedDocuments || "No documents submitted",
        applicationDate: new Date(application.createdAt).toLocaleDateString()
      };

      // Create a simple text file for now (you can implement proper PDF generation later)
      const content = `
APPLICATION DETAILS
==================

Personal Information:
- Full Name: ${applicationData.fullName}
- Email: ${applicationData.email}
- Contact Number: ${applicationData.contactNumber}

Academic Information:
- Preferred Countries: ${applicationData.preferredCountries}
- Preferred Course: ${applicationData.preferredCourse}
- Study Level: ${applicationData.studyLevel}
- Preferred Intake: ${applicationData.preferredIntake}
- Budget: ${applicationData.budget}

Application Status: ${applicationData.status}
Application Date: ${applicationData.applicationDate}

Submitted Documents:
${applicationData.submittedDocuments}

Generated on: ${new Date().toLocaleString()}
      `.trim();

      const filename = `application-${applicationId}-${application.fullName.replace(/\s+/g, '_')}.txt`;
      
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.send(content);
    } catch (error) {
      console.error("Error downloading application:", error);
      res.status(500).json({ message: "Failed to download application" });
    }
  });

  app.get("/api/user/notices", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const notices = await storage.getNoticesWithReadStatus(userId);
      res.json(notices);
    } catch (error) {
      console.error("Error fetching user notices:", error);
      res.status(500).json({ message: "Failed to fetch notices" });
    }
  });

  // Get unread notice count
  app.get("/api/user/notices/unread-count", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "User not authenticated" });
      }

      const count = await storage.getUnreadNoticeCount(userId);
      res.json({ count });
    } catch (error) {
      console.error("Error fetching unread notice count:", error);
      res.status(500).json({ message: "Failed to fetch unread notice count" });
    }
  });

  // Mark notice as read
  app.post("/api/user/notices/:id/mark-read", authenticateToken, async (req: AuthRequest, res) => {
    try {
      console.log("Mark notice as read request received");
      console.log("User:", req.user?.id);
      console.log("Notice ID param:", req.params.id);
      
      const userId = req.user?.id;
      const noticeId = parseInt(req.params.id);

      if (!userId) {
        console.log("User not authenticated");
        return res.status(401).json({ message: "User not authenticated" });
      }

      if (!noticeId || isNaN(noticeId)) {
        console.log("Invalid notice ID:", req.params.id);
        return res.status(400).json({ message: "Invalid notice ID" });
      }

      console.log("Calling storage.markNoticeAsRead with userId:", userId, "noticeId:", noticeId);
      const result = await storage.markNoticeAsRead(userId, noticeId);
      console.log("Mark notice as read result:", result);
      
      res.json({ message: "Notice marked as read" });
    } catch (error) {
      console.error("Error marking notice as read:", error);
      res.status(500).json({ message: "Failed to mark notice as read" });
    }
  });

  // Mark all notices as read
  app.post("/api/user/notices/mark-all-read", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({ message: "User not authenticated" });
      }

      await storage.markAllNoticesAsRead(userId);
      res.json({ message: "All notices marked as read" });
    } catch (error) {
      console.error("Error marking all notices as read:", error);
      res.status(500).json({ message: "Failed to mark all notices as read" });
    }
  });

  // Get unread document requests count
  app.get("/api/user/document-requests/unread-count", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "User not authenticated" });
      }

      const count = await storage.getUnreadDocumentRequestsCount(userId);
      res.json({ count });
    } catch (error) {
      console.error("Error fetching unread document requests count:", error);
      res.status(500).json({ message: "Failed to fetch unread document requests count" });
    }
  });

  // Get pending document requests count (viewed but not uploaded)
  app.get("/api/user/document-requests/pending-count", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "User not authenticated" });
      }

      const pendingCount = await storage.getViewedPendingDocumentRequestsCount(userId);
      const totalPendingCount = await storage.getTotalPendingDocumentRequestsCount(userId);
      
      res.json({ 
        viewedPending: pendingCount,
        totalPending: totalPendingCount 
      });
    } catch (error) {
      console.error("Error fetching pending document requests count:", error);
      res.status(500).json({ message: "Failed to fetch pending document requests count" });
    }
  });

  // Mark document request as read
  app.post("/api/user/document-requests/:id/mark-read", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      const messageId = parseInt(req.params.id);

      if (!userId) {
        return res.status(401).json({ message: "User not authenticated" });
      }

      if (!messageId || isNaN(messageId)) {
        return res.status(400).json({ message: "Invalid message ID" });
      }

      await storage.markDocumentRequestAsRead(userId, messageId);
      res.json({ message: "Document request marked as read" });
    } catch (error) {
      console.error("Error marking document request as read:", error);
      res.status(500).json({ message: "Failed to mark document request as read" });
    }
  });

  // Mark all document requests as read
  app.post("/api/user/document-requests/mark-all-read", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({ message: "User not authenticated" });
      }

      await storage.markAllDocumentRequestsAsRead(userId);
      res.json({ message: "All document requests marked as read" });
    } catch (error) {
      console.error("Error marking all document requests as read:", error);
      res.status(500).json({ message: "Failed to mark all document requests as read" });
    }
  });

  app.post("/api/user/book-consultation", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const { preferredDate, preferredTime, consultationType, message } = req.body;

      if (!preferredDate || !preferredTime) {
        return res.status(400).json({ message: "Preferred date and time are required" });
      }

      // Validate consultation data
      const consultationData = insertConsultationSchema.parse({
        userId,
        preferredDate,
        preferredTime,
        consultationType: consultationType || "general",
        message: message || ""
      });

      // Create consultation in database
      const consultation = await storage.createConsultation(consultationData);

      res.status(201).json({
        message: "Consultation booked successfully",
        consultation
      });
    } catch (error) {
      console.error("Error booking consultation:", error);
      res.status(500).json({ message: "Failed to book consultation" });
    }
  });

  // Get user consultations
  app.get("/api/user/consultations", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const consultations = await storage.getUserConsultations(userId);
      res.json(consultations);
    } catch (error) {
      console.error("Error fetching user consultations:", error);
      res.status(500).json({ message: "Failed to fetch consultations" });
    }
  });

  app.put("/api/user/profile", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const { firstName, lastName, email } = req.body;

      if (!firstName || !lastName || !email) {
        return res.status(400).json({ message: "First name, last name, and email are required" });
      }

      const updatedUser = await storage.updateUserProfile(userId, {
        firstName,
        lastName,
        email
      });

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({
        message: "Profile updated successfully",
        user: updatedUser
      });
    } catch (error) {
      console.error("Error updating user profile:", error);
      res.status(500).json({ message: "Failed to update profile" });
    }
  });

  // User document requests endpoints (reusing document messages)
  app.get("/api/user/document-requests", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // Get document messages that are document requests
      const documentRequests = await storage.getUserDocumentMessages(userId);
      // Filter only document request type messages
      const filteredRequests = documentRequests.filter(msg => msg.messageType === 'document_request');
      res.json(filteredRequests);
    } catch (error) {
      console.error("Error fetching user document requests:", error);
      res.status(500).json({ message: "Failed to fetch document requests" });
    }
  });

  // Upload documents for a document request
  app.post(
    "/api/user/document-requests/:id/upload",
    authenticateToken,
    upload.array('documents', 10),
    handleUploadError,
    async (req: AuthRequest, res) => {
      try {
        const requestId = parseInt(req.params.id);
        const userId = req.user?.id!;
        const files = req.files as Express.Multer.File[];
        const { message } = req.body;

        if (!files || files.length === 0) {
          return res.status(400).json({ message: "No files uploaded" });
        }

        // Get the document request (message)
        const documentMessage = await storage.getDocumentMessageById(requestId);
        if (!documentMessage || documentMessage.userId !== userId) {
          return res.status(404).json({ message: "Document request not found" });
        }

        // Store file information
        const uploadedFiles = files.map(file => file.filename);
        
        // Update document message with uploaded files and user response
        await storage.updateDocumentMessageStatus(requestId, 'completed');
        
        // Update the application record with the uploaded documents
        if (documentMessage.applicationId && documentMessage.requestedDocuments) {
          // Map requested document types to application field names
          const documentFieldMapping: Record<string, string> = {
            'Passport Document': 'passportDocument',
            'Academic Documents': 'academicDocuments',
            'CV/Resume': 'cvResume',
            'Statement of Purpose': 'statementOfPurpose',
            'Experience Letters': 'experienceLetters',
            'English Test Score': 'englishTestScore',
            'National ID Document': 'nationalIdDoc',
            'Passport Photo': 'passportPhoto',
            'Birth Certificate': 'birthCertificate',
            'Financial Documents': 'financialDocuments',
            'Additional Documents': 'additionalDocuments'
          };

          // Get the current application
          const application = await storage.getStudentApplication(documentMessage.applicationId);
          if (application) {
            // Create update object with the uploaded files
            const updateData: Record<string, string> = {};
            
            // For each requested document type, update the corresponding field
            documentMessage.requestedDocuments.forEach((docType: string) => {
              const fieldName = documentFieldMapping[docType];
              if (fieldName && uploadedFiles.length > 0) {
                // Use the first uploaded file for each document type
                updateData[fieldName] = uploadedFiles[0];
              }
            });

            // Update the application with the new document information
            if (Object.keys(updateData).length > 0) {
              await storage.updateStudentApplicationDocuments(documentMessage.applicationId, updateData);
            }
          }
        }
        
        // Create a response message from user to admin
        await storage.createDocumentMessage({
          userId,
          applicationId: documentMessage.applicationId,
          senderId: userId,
          senderType: "user",
          messageType: "document_upload",
          subject: `Re: ${documentMessage.subject}`,
          message: message || `Uploaded ${uploadedFiles.length} document(s) in response to your request.`,
          requestedDocuments: [],
          attachments: uploadedFiles,
          status: "completed",
          read: false
        });

        res.json({
          message: "Documents uploaded successfully",
          uploadedFiles: uploadedFiles
        });
      } catch (error) {
        console.error("Error uploading documents for request:", error);
        res.status(500).json({ message: "Failed to upload documents" });
      }
    }
  );

  // Create sample applications for testing
  app.post("/api/user/create-sample-applications", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // Check if user already has applications
      const existingApps = await storage.getUserApplications(userId);
      if (existingApps.length > 0) {
        return res.json({ message: "Sample applications already exist" });
      }

      // Create sample applications
      const sampleApplications = [
        {
          userId,
          fullName: "John Doe",
          gender: "Male",
          dateOfBirth: "1998-05-15",
          nationality: "Bangladesh",
          maritalStatus: "Single",
          passportNumber: "BD1234567",
          passportExpiry: "2028-05-15",
          nationalId: "1234567890123",
          currentAddress: "123 Main St, Dhaka, Bangladesh",
          permanentAddress: "123 Main St, Dhaka, Bangladesh",
          contactNumber: "+8801712345678",
          email: "john.doe@example.com",
          emergencyContactName: "Jane Doe",
          emergencyContactRelation: "Mother",
          emergencyContactPhone: "+8801987654321",
          educationHistory: JSON.stringify([
            {
              level: "Bachelor's",
              institution: "University of Dhaka",
              field: "Computer Science",
              graduationYear: "2020",
              cgpa: "3.8"
            }
          ]),
          preferredCountries: "USA, Canada",
          preferredCity: "Boston",
          preferredCourse: "Master of Science in Computer Science",
          preferredIntake: "Fall 2024",
          studyLevel: "Master's",
          budget: 50000,
          budgetCurrency: "USD",
          fundingSource: "Family Savings",
          openToScholarships: true,
          institutionType: "Public University",
          studyMode: "Full-time",
          hasEnglishTest: true,
          testType: "IELTS",
          testDate: "2023-12-01",
          overallScore: "7.5",
          listeningScore: "7.0",
          readingScore: "8.0",
          writingScore: "7.0",
          speakingScore: "8.0",
          planningTestDate: null,
          workExperience: JSON.stringify([
            {
              company: "Tech Solutions Ltd",
              position: "Software Developer",
              duration: "2020-2023",
              description: "Full-stack web development"
            }
          ]),
          previousStudentVisa: false,
          countriesVisited: "India, Thailand",
          visaRefusals: false,
          visaRefusalDetails: null,
          familyInDestination: false,
          familyRelationship: null,
          familyVisaType: null,
          specialRequirements: null,
          status: "Under Review",
          submittedDocuments: JSON.stringify(["Passport", "Transcripts", "IELTS Certificate"]),
          additionalInfo: "Interested in AI and Machine Learning specialization"
        },
        {
          userId,
          fullName: "John Doe",
          gender: "Male",
          dateOfBirth: "1998-05-15",
          nationality: "Bangladesh",
          maritalStatus: "Single",
          passportNumber: "BD1234567",
          passportExpiry: "2028-05-15",
          nationalId: "1234567890123",
          currentAddress: "123 Main St, Dhaka, Bangladesh",
          permanentAddress: "123 Main St, Dhaka, Bangladesh",
          contactNumber: "+8801712345678",
          email: "john.doe@example.com",
          emergencyContactName: "Jane Doe",
          emergencyContactRelation: "Mother",
          emergencyContactPhone: "+8801987654321",
          educationHistory: JSON.stringify([
            {
              level: "Bachelor's",
              institution: "University of Dhaka",
              field: "Computer Science",
              graduationYear: "2020",
              cgpa: "3.8"
            }
          ]),
          preferredCountries: "UK",
          preferredCity: "London",
          preferredCourse: "Master of Business Administration",
          preferredIntake: "Spring 2024",
          studyLevel: "Master's",
          budget: 45000,
          budgetCurrency: "GBP",
          fundingSource: "Bank Loan",
          openToScholarships: true,
          institutionType: "Private University",
          studyMode: "Full-time",
          hasEnglishTest: true,
          testType: "TOEFL",
          testDate: "2023-11-15",
          overallScore: "105",
          listeningScore: "28",
          readingScore: "29",
          writingScore: "24",
          speakingScore: "24",
          planningTestDate: null,
          workExperience: JSON.stringify([
            {
              company: "Business Corp",
              position: "Business Analyst",
              duration: "2021-2023",
              description: "Market research and data analysis"
            }
          ]),
          previousStudentVisa: false,
          countriesVisited: "India, Singapore",
          visaRefusals: false,
          visaRefusalDetails: null,
          familyInDestination: true,
          familyRelationship: "Uncle",
          familyVisaType: "Work Permit",
          specialRequirements: null,
          status: "Accepted",
          submittedDocuments: JSON.stringify(["Passport", "Transcripts", "TOEFL Certificate", "Work Experience Letter"]),
          additionalInfo: "Looking for MBA with focus on International Business"
        }
      ];

      for (const app of sampleApplications) {
        await storage.createStudentApplication(app);
      }

      res.json({ 
        message: "Sample applications created successfully",
        count: sampleApplications.length
      });
    } catch (error) {
      console.error("Error creating sample applications:", error);
      res.status(500).json({ message: "Failed to create sample applications" });
    }
  });

  // Admin API routes for applications and notifications management
  app.get("/api/admin/applications", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const applications = await storage.getAllStudentApplications();
      res.json(applications);
    } catch (error) {
      console.error("Error fetching admin applications:", error);
      res.status(500).json({ message: "Failed to fetch applications" });
    }
  });

  app.get("/api/admin/stats", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const stats = await storage.getAdminStats();
      res.json(stats);
    } catch (error) {
      console.error("Error fetching admin stats:", error);
      res.status(500).json({ message: "Failed to fetch statistics" });
    }
  });

  app.patch("/api/admin/applications/:id/status", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const applicationId = parseInt(req.params.id);
      const { status, message } = req.body;

      if (!status) {
        return res.status(400).json({ message: "Status is required" });
      }

      // Get the application to find the user
      const application = await storage.getStudentApplication(applicationId);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }

      // Update application status
      const updatedApplication = await storage.updateStudentApplicationStatus(applicationId, status);
      if (!updatedApplication) {
        return res.status(404).json({ message: "Failed to update application" });
      }

      // Create notification for user if message is provided
      if (message && application.userId) {
        await storage.createNotification({
          userId: application.userId,
          title: `Application Status Update`,
          message: message,
          type: "application_status",
          read: false,
          relatedEntityId: applicationId,
          relatedEntityType: "application"
        });
      }

      res.json({
        message: "Application status updated successfully",
        application: updatedApplication
      });
    } catch (error) {
      console.error("Error updating application status:", error);
      res.status(500).json({ message: "Failed to update application status" });
    }
  });

  app.get("/api/admin/notifications", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const notifications = await storage.getAllNotifications();
      res.json(notifications);
    } catch (error) {
      console.error("Error fetching admin notifications:", error);
      res.status(500).json({ message: "Failed to fetch notifications" });
    }
  });

  // Admin mark notification as read
  app.patch("/api/admin/notifications/:id/read", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const notificationId = parseInt(req.params.id);
      const notification = await storage.markNotificationAsRead(notificationId);
      
      if (!notification) {
        return res.status(404).json({ message: "Notification not found" });
      }

      res.json({ message: "Notification marked as read successfully" });
    } catch (error) {
      console.error("Error marking notification as read:", error);
      res.status(500).json({ message: "Failed to mark notification as read" });
    }
  });

  // Admin delete notification
  app.delete("/api/admin/notifications/:id", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const notificationId = parseInt(req.params.id);
      const result = await storage.deleteNotification(notificationId);
      
      if (!result) {
        return res.status(404).json({ message: "Notification not found" });
      }

      res.json({ message: "Notification deleted successfully" });
    } catch (error) {
      console.error("Error deleting notification:", error);
      res.status(500).json({ message: "Failed to delete notification" });
    }
  });

  // User notifications endpoint
  app.get("/api/user/notifications", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const notifications = await storage.getUserNotifications(userId);
      res.json(notifications);
    } catch (error) {
      console.error("Error fetching user notifications:", error);
      res.status(500).json({ message: "Failed to fetch notifications" });
    }
  });

  app.patch("/api/user/notifications/:id/read", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const notificationId = parseInt(req.params.id);
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const notification = await storage.markNotificationAsRead(notificationId);
      if (!notification) {
        return res.status(404).json({ message: "Notification not found" });
      }

      res.json({ message: "Notification marked as read" });
    } catch (error) {
      console.error("Error marking notification as read:", error);
      res.status(500).json({ message: "Failed to mark notification as read" });
    }
  });

  // Document Messages API routes
  app.get("/api/admin/document-messages", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const messages = await storage.getAllDocumentMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching document messages:", error);
      res.status(500).json({ message: "Failed to fetch document messages" });
    }
  });

  app.post("/api/admin/document-messages", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const adminUser = req.user;
      if (!adminUser) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const { userId, applicationId, subject, message, requestedDocuments, messageType } = req.body;

      if (!subject || !message || !userId) {
        return res.status(400).json({ message: "Subject, message, and userId are required" });
      }

      const documentMessage = await storage.createDocumentMessage({
        userId,
        applicationId: applicationId || null,
        senderId: adminUser.id,
        senderType: "admin",
        messageType: messageType || "document_request",
        subject,
        message,
        requestedDocuments: requestedDocuments || [],
        attachments: [],
        status: "pending",
        read: false
      });

      // Also create a notification for the user
      await storage.createNotification({
        userId,
        title: `Document Request: ${subject}`,
        message: `Admin has requested additional documents. Please check your messages.`,
        type: "document_request",
        read: false,
        relatedEntityId: documentMessage.id,
        relatedEntityType: "document_message"
      });

      res.status(201).json({
        message: "Document request sent successfully",
        documentMessage
      });
    } catch (error) {
      console.error("Error creating document message:", error);
      res.status(500).json({ message: "Failed to send document request" });
    }
  });

  app.get("/api/admin/users/:userId/documents", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const userDocuments = await storage.getUserDocumentsByApplication(userId);
      res.json(userDocuments);
    } catch (error) {
      console.error("Error fetching user documents:", error);
      res.status(500).json({ message: "Failed to fetch user documents" });
    }
  });

  // User document messages endpoints
  app.get("/api/user/document-messages", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const messages = await storage.getUserDocumentMessages(userId);
      res.json(messages);
    } catch (error) {
      console.error("Error fetching user document messages:", error);
      res.status(500).json({ message: "Failed to fetch document messages" });
    }
  });

  app.patch("/api/user/document-messages/:id/read", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const messageId = parseInt(req.params.id);
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const message = await storage.markDocumentMessageAsRead(messageId);
      if (!message) {
        return res.status(404).json({ message: "Message not found" });
      }

      res.json({ message: "Message marked as read" });
    } catch (error) {
      console.error("Error marking message as read:", error);
      res.status(500).json({ message: "Failed to mark message as read" });
    }
  });

  // Admin endpoint to mark document messages as viewed/completed
  app.patch("/api/admin/document-messages/:id/status", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const messageId = parseInt(req.params.id);
      const { status } = req.body;

      if (!status || !['pending', 'viewed', 'completed'].includes(status)) {
        return res.status(400).json({ message: "Valid status (pending, viewed, completed) is required" });
      }

      const updatedMessage = await storage.updateDocumentMessageStatus(messageId, status);
      if (!updatedMessage) {
        return res.status(404).json({ message: "Message not found" });
      }

      res.json({ 
        message: `Document message marked as ${status}`,
        documentMessage: updatedMessage 
      });
    } catch (error) {
      console.error("Error updating document message status:", error);
      res.status(500).json({ message: "Failed to update message status" });
    }
  });

  // Admin endpoint to retrieve missing documents and update status automatically
  app.post("/api/admin/retrieve-missing-documents", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const { userId, missingDocuments } = req.body;

      if (!userId || !missingDocuments || !Array.isArray(missingDocuments)) {
        return res.status(400).json({ message: "User ID and missing documents array are required" });
      }

      // Create a document request for missing documents
      const adminUser = req.user;
      if (!adminUser) {
        return res.status(401).json({ message: "Admin user not found" });
      }
      
      const documentMessage = await storage.createDocumentMessage({
        userId: parseInt(userId),
        applicationId: null,
        senderId: adminUser.id,
        senderType: "admin",
        messageType: "document_request",
        subject: "Missing Documents Required",
        message: `The following documents are missing from your application and need to be uploaded: ${missingDocuments.join(', ')}. Please upload these documents to complete your application.`,
        requestedDocuments: missingDocuments,
        attachments: [],
        status: "pending",
        read: false
      });

      // Create notification for user
      await storage.createNotification({
        userId: parseInt(userId),
        title: "Missing Documents Request",
        message: "We need additional documents from you. Please check your document requests tab.",
        type: "document_request",
        read: false,
        relatedEntityId: documentMessage.id,
        relatedEntityType: "document_message"
      });

      res.json({
        message: "Missing documents request sent successfully",
        documentMessage
      });
    } catch (error) {
      console.error("Error retrieving missing documents:", error);
      res.status(500).json({ message: "Failed to retrieve missing documents" });
    }
  });

  // Admin consultation routes
  app.get("/api/admin/consultations", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const consultations = await storage.getAllConsultations();
      res.json(consultations);
    } catch (error) {
      console.error("Error fetching admin consultations:", error);
      res.status(500).json({ message: "Failed to fetch consultations" });
    }
  });

  app.patch("/api/admin/consultations/:id", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const consultationId = parseInt(req.params.id);
      const { status, meetingLink, meetingNotes } = req.body;

      if (!consultationId || isNaN(consultationId)) {
        return res.status(400).json({ message: "Invalid consultation ID" });
      }

      if (!status) {
        return res.status(400).json({ message: "Status is required" });
      }

      const updatedConsultation = await storage.updateConsultationStatus(
        consultationId, 
        status, 
        meetingLink || undefined, 
        meetingNotes || undefined
      );

      res.json({
        message: "Consultation updated successfully",
        consultation: updatedConsultation
      });
    } catch (error) {
      console.error("Error updating consultation:", error);
      res.status(500).json({ message: "Failed to update consultation" });
    }
  });

  // Admin notice board routes
  app.get("/api/admin/notices", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const notices = await storage.getAllNotices();
      res.json(notices);
    } catch (error) {
      console.error("Error fetching admin notices:", error);
      res.status(500).json({ message: "Failed to fetch notices" });
    }
  });

  app.post("/api/admin/notices", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const { title, message, type } = req.body;
      const adminId = req.user?.id;

      if (!title || !message) {
        return res.status(400).json({ message: "Title and message are required" });
      }

      if (!adminId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const noticeData = {
        title,
        message,
        type: type || "info",
        publishedBy: adminId,
        isActive: true
      };

      const notice = await storage.createNotice(noticeData);
      res.status(201).json({
        message: "Notice created successfully",
        notice
      });
    } catch (error) {
      console.error("Error creating notice:", error);
      res.status(500).json({ message: "Failed to create notice" });
    }
  });

  app.patch("/api/admin/notices/:id", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const noticeId = parseInt(req.params.id);
      const updates = req.body;

      if (!noticeId || isNaN(noticeId)) {
        return res.status(400).json({ message: "Invalid notice ID" });
      }

      const updatedNotice = await storage.updateNotice(noticeId, updates);
      if (!updatedNotice) {
        return res.status(404).json({ message: "Notice not found" });
      }

      res.json({
        message: "Notice updated successfully",
        notice: updatedNotice
      });
    } catch (error) {
      console.error("Error updating notice:", error);
      res.status(500).json({ message: "Failed to update notice" });
    }
  });

  app.delete("/api/admin/notices/:id", authenticateToken, requireAdmin, async (req: AuthRequest, res) => {
    try {
      const noticeId = parseInt(req.params.id);

      if (!noticeId || isNaN(noticeId)) {
        return res.status(400).json({ message: "Invalid notice ID" });
      }

      const deletedNotice = await storage.deleteNotice(noticeId);
      if (!deletedNotice) {
        return res.status(404).json({ message: "Notice not found" });
      }

      res.json({ message: "Notice deleted successfully" });
    } catch (error) {
      console.error("Error deleting notice:", error);
      res.status(500).json({ message: "Failed to delete notice" });
    }
  });

  // Profile Management Routes
  
  // Update user profile (name, username)
  app.put("/api/user/profile", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "User not authenticated" });
      }

      const { firstName, lastName, username } = req.body;
      
      const updatedUser = await storage.updateUserProfile(userId, {
        firstName,
        lastName,
        username,
      });

      res.json(updatedUser);
    } catch (error: any) {
      console.error("Error updating user profile:", error);
      res.status(400).json({ message: error.message || "Failed to update profile" });
    }
  });

  // Change user password
  app.put("/api/user/password", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "User not authenticated" });
      }

      const { currentPassword, newPassword } = req.body;
      
      if (!currentPassword || !newPassword) {
        return res.status(400).json({ message: "Current password and new password are required" });
      }

      if (newPassword.length < 6) {
        return res.status(400).json({ message: "New password must be at least 6 characters long" });
      }

      await storage.changeUserPassword(userId, currentPassword, newPassword);

      res.json({ message: "Password changed successfully" });
    } catch (error: any) {
      console.error("Error changing password:", error);
      res.status(400).json({ message: error.message || "Failed to change password" });
    }
  });

  // Update user email
  app.put("/api/user/email", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "User not authenticated" });
      }

      const { newEmail } = req.body;
      
      if (!newEmail) {
        return res.status(400).json({ message: "New email is required" });
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(newEmail)) {
        return res.status(400).json({ message: "Invalid email format" });
      }

      const updatedUser = await storage.updateUserEmail(userId, newEmail);

      res.json(updatedUser);
    } catch (error: any) {
      console.error("Error updating email:", error);
      res.status(400).json({ message: error.message || "Failed to update email" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
