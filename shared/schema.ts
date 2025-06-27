import { pgTable, text, serial, timestamp, json, boolean, varchar, date, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactInquiries = pgTable("contact_inquiries", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  destination: text("destination"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactInquirySchema = createInsertSchema(contactInquiries).omit({
  id: true,
  createdAt: true,
});

export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;

export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  phone: text("phone"),
  dateOfBirth: text("date_of_birth"),
  nationality: text("nationality"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertStudentSchema = createInsertSchema(students).omit({
  id: true,
  createdAt: true,
});

export type InsertStudent = z.infer<typeof insertStudentSchema>;
export type Student = typeof students.$inferSelect;

export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  studentId: serial("student_id").references(() => students.id),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  preferredDate: text("preferred_date").notNull(),
  preferredTime: text("preferred_time").notNull(),
  serviceType: text("service_type").notNull(),
  destination: text("destination"),
  message: text("message"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertAppointmentSchema = createInsertSchema(appointments).omit({
  id: true,
  createdAt: true,
  studentId: true,
  status: true,
});

export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type Appointment = typeof appointments.$inferSelect;

export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  studentId: serial("student_id").references(() => students.id),
  universityName: text("university_name").notNull(),
  program: text("program").notNull(),
  country: text("country").notNull(),
  intake: text("intake").notNull(),
  status: text("status").notNull().default("draft"),
  documents: json("documents").$type<string[]>().default([]),
  requirements: json("requirements").$type<{
    academicRequirements: string[];
    languageRequirements: string[];
    financialRequirements: string[];
    documentRequirements: string[];
  }>(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertApplicationSchema = createInsertSchema(applications).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertApplication = z.infer<typeof insertApplicationSchema>;
export type Application = typeof applications.$inferSelect;

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 50 }).notNull().unique(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  firstName: varchar("first_name", { length: 50 }),
  lastName: varchar("last_name", { length: 50 }),
  role: varchar("role", { length: 20 }).notNull().default("user"),
  isActive: boolean("is_active").default(true),
  profileImageUrl: varchar("profile_image_url", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type LoginUser = z.infer<typeof loginSchema>;
export type RegisterUser = z.infer<typeof registerSchema>;

// Student Application Form Schema
export const studentApplications = pgTable("student_applications", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  // Personal Information
  fullName: varchar("full_name", { length: 100 }).notNull(),
  gender: varchar("gender", { length: 20 }).notNull(),
  dateOfBirth: date("date_of_birth").notNull(),
  nationality: varchar("nationality", { length: 50 }).notNull(),
  maritalStatus: varchar("marital_status", { length: 30 }).notNull(),
  passportNumber: varchar("passport_number", { length: 50 }).notNull(),
  passportExpiry: date("passport_expiry").notNull(),
  nationalId: varchar("national_id", { length: 50 }),
  currentAddress: text("current_address").notNull(),
  permanentAddress: text("permanent_address").notNull(),
  contactNumber: varchar("contact_number", { length: 20 }).notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  emergencyContactName: varchar("emergency_contact_name", { length: 100 }).notNull(),
  emergencyContactRelation: varchar("emergency_contact_relation", { length: 50 }).notNull(),
  emergencyContactPhone: varchar("emergency_contact_phone", { length: 20 }).notNull(),
  
  // Educational Background (JSON for multiple entries)
  educationHistory: jsonb("education_history").notNull(),
  
  // Study Abroad Preferences
  preferredCountries: text("preferred_countries").notNull(),
  preferredCity: varchar("preferred_city", { length: 100 }),
  preferredCourse: varchar("preferred_course", { length: 200 }).notNull(),
  preferredIntake: varchar("preferred_intake", { length: 50 }).notNull(),
  studyLevel: varchar("study_level", { length: 50 }).notNull(),
  budget: integer("budget").notNull(),
  budgetCurrency: varchar("budget_currency", { length: 10 }).notNull(),
  fundingSource: varchar("funding_source", { length: 100 }).notNull(),
  openToScholarships: boolean("open_to_scholarships").notNull(),
  institutionType: varchar("institution_type", { length: 100 }).notNull(),
  studyMode: varchar("study_mode", { length: 50 }).notNull(),
  
  // Language Proficiency
  hasEnglishTest: boolean("has_english_test").notNull(),
  testType: varchar("test_type", { length: 50 }),
  testDate: date("test_date"),
  overallScore: varchar("overall_score", { length: 20 }),
  listeningScore: varchar("listening_score", { length: 20 }),
  readingScore: varchar("reading_score", { length: 20 }),
  writingScore: varchar("writing_score", { length: 20 }),
  speakingScore: varchar("speaking_score", { length: 20 }),
  planningTestDate: date("planning_test_date"),
  
  // Work Experience (JSON for multiple entries)
  workExperience: jsonb("work_experience"),
  
  // Visa & Travel History
  previousStudentVisa: boolean("previous_student_visa").notNull(),
  countriesVisited: text("countries_visited"),
  visaRefusals: boolean("visa_refusals").notNull(),
  visaRefusalDetails: text("visa_refusal_details"),
  familyInDestination: boolean("family_in_destination").notNull(),
  familyRelationship: varchar("family_relationship", { length: 100 }),
  familyVisaType: varchar("family_visa_type", { length: 50 }),
  
  // Additional Information
  additionalInfo: text("additional_info"),
  
  // Document Upload Fields
  passportDocument: text("passport_document"),
  academicDocuments: text("academic_documents"),
  englishTestScore: text("english_test_score"),
  cvResume: text("cv_resume"),
  statementOfPurpose: text("statement_of_purpose"),
  experienceLetters: text("experience_letters"),
  nationalIdDoc: text("national_id_doc"),
  passportPhoto: text("passport_photo"),
  birthCertificate: text("birth_certificate"),
  financialDocuments: text("financial_documents"),
  
  // Declaration & Consent Fields
  dataConsent: boolean("data_consent").default(false),
  truthDeclaration: boolean("truth_declaration").default(false),
  termsAcceptance: boolean("terms_acceptance").default(false),
  digitalSignature: text("digital_signature"),
  signatureDate: text("signature_date"),
  
  // Status and Timestamps
  status: varchar("status", { length: 30 }).default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertStudentApplicationSchema = createInsertSchema(studentApplications).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertStudentApplication = z.infer<typeof insertStudentApplicationSchema>;
export type StudentApplication = typeof studentApplications.$inferSelect;
