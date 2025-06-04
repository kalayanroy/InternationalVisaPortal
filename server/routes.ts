import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactInquirySchema, 
  insertStudentSchema, 
  insertAppointmentSchema,
  insertApplicationSchema 
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
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

  const httpServer = createServer(app);
  return httpServer;
}
