import { 
  users, 
  contactInquiries, 
  students, 
  appointments, 
  applications,
  studentApplications,
  universities,
  type User, 
  type InsertUser, 
  type ContactInquiry, 
  type InsertContactInquiry,
  type Student,
  type InsertStudent,
  type Appointment,
  type InsertAppointment,
  type Application,
  type InsertApplication,
  type StudentApplication,
  type InsertStudentApplication,
  type University,
  type InsertUniversity,
  type LoginUser,
  type RegisterUser,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";
import bcrypt from "bcryptjs";

export interface IStorage {
  // Authentication
  getUserById(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  registerUser(userData: RegisterUser): Promise<User>;
  authenticateUser(credentials: LoginUser): Promise<User | null>;
  
  getStudent(id: number): Promise<Student | undefined>;
  getStudentByEmail(email: string): Promise<Student | undefined>;
  createStudent(student: InsertStudent): Promise<Student>;
  
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointments(): Promise<Appointment[]>;
  getStudentAppointments(studentId: number): Promise<Appointment[]>;
  
  createApplication(application: InsertApplication): Promise<Application>;
  getApplications(): Promise<Application[]>;
  getStudentApplications(studentId: number): Promise<Application[]>;
  updateApplication(id: number, updates: Partial<Application>): Promise<Application | undefined>;
  
  // Student Application Methods  
  createStudentApplication(application: InsertStudentApplication): Promise<StudentApplication>;
  getAllStudentApplications(): Promise<StudentApplication[]>;
  getStudentApplication(id: number): Promise<StudentApplication | undefined>;
  getStudentApplicationsByUserId(userId: number): Promise<StudentApplication[]>;
  updateStudentApplicationStatus(id: number, status: string): Promise<StudentApplication | undefined>;

  // Admin methods
  getAllUsers(): Promise<User[]>;
  updateUserRole(id: number, role: string): Promise<User | undefined>;
  updateUser(id: number, updates: Partial<Pick<User, 'firstName' | 'lastName' | 'username' | 'email' | 'role'>>): Promise<User | undefined>;
  resetUserPassword(id: number, newPassword: string): Promise<User | undefined>;
  deleteUser(id: number): Promise<User | undefined>;
  
  // University management
  getAllUniversities(): Promise<University[]>;
  createUniversity(university: InsertUniversity): Promise<University>;
  updateUniversity(id: number, updates: Partial<University>): Promise<University | undefined>;
  deleteUniversity(id: number): Promise<University | undefined>;
  
  // Attachment/Text System methods
  // Schools
  getAllSchools(): Promise<School[]>;
  createSchool(school: InsertSchool): Promise<School>;
  updateSchool(id: number, updates: Partial<School>): Promise<School | undefined>;
  deleteSchool(id: number): Promise<School | undefined>;
  
  // Visa Requirements
  getAllVisaRequirements(): Promise<VisaRequirement[]>;
  createVisaRequirement(visaReq: InsertVisaRequirement): Promise<VisaRequirement>;
  updateVisaRequirement(id: number, updates: Partial<VisaRequirement>): Promise<VisaRequirement | undefined>;
  deleteVisaRequirement(id: number): Promise<VisaRequirement | undefined>;
  
  // Costs
  getAllCosts(): Promise<Cost[]>;
  createCost(cost: InsertCost): Promise<Cost>;
  updateCost(id: number, updates: Partial<Cost>): Promise<Cost | undefined>;
  deleteCost(id: number): Promise<Cost | undefined>;
  
  // Scholarships
  getAllScholarships(): Promise<Scholarship[]>;
  createScholarship(scholarship: InsertScholarship): Promise<Scholarship>;
  updateScholarship(id: number, updates: Partial<Scholarship>): Promise<Scholarship | undefined>;
  deleteScholarship(id: number): Promise<Scholarship | undefined>;
  
  // Admission Timeline
  getAllAdmissionTimeline(): Promise<AdmissionTimeline[]>;
  createAdmissionTimeline(timeline: InsertAdmissionTimeline): Promise<AdmissionTimeline>;
  updateAdmissionTimeline(id: number, updates: Partial<AdmissionTimeline>): Promise<AdmissionTimeline | undefined>;
  deleteAdmissionTimeline(id: number): Promise<AdmissionTimeline | undefined>;
}

export class DatabaseStorage implements IStorage {
  // Authentication methods
  async getUserById(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const hashedPassword = await bcrypt.hash(insertUser.password, 12);
    const [user] = await db
      .insert(users)
      .values({
        ...insertUser,
        password: hashedPassword,
      })
      .returning();
    return user;
  }

  async registerUser(userData: RegisterUser): Promise<User> {
    const hashedPassword = await bcrypt.hash(userData.password, 12);
    const [user] = await db
      .insert(users)
      .values({
        ...userData,
        password: hashedPassword,
        role: "user",
        isActive: true,
      })
      .returning();
    return user;
  }

  async authenticateUser(credentials: LoginUser): Promise<User | null> {
    const user = await this.getUserByUsername(credentials.username);
    if (!user || !user.isActive) {
      return null;
    }

    const isValidPassword = await bcrypt.compare(credentials.password, user.password);
    if (!isValidPassword) {
      return null;
    }

    return user;
  }

  async getStudent(id: number): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.id, id));
    return student || undefined;
  }

  async getStudentByEmail(email: string): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.email, email));
    return student || undefined;
  }

  async createStudent(insertStudent: InsertStudent): Promise<Student> {
    const [student] = await db
      .insert(students)
      .values({
        ...insertStudent,
        phone: insertStudent.phone || null,
        dateOfBirth: insertStudent.dateOfBirth || null,
        nationality: insertStudent.nationality || null
      })
      .returning();
    return student;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const [inquiry] = await db
      .insert(contactInquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return await db.select().from(contactInquiries).orderBy(contactInquiries.createdAt);
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const [appointment] = await db
      .insert(appointments)
      .values(insertAppointment)
      .returning();
    return appointment;
  }

  async getAppointments(): Promise<Appointment[]> {
    return await db.select().from(appointments).orderBy(appointments.createdAt);
  }

  async getStudentAppointments(studentId: number): Promise<Appointment[]> {
    return await db
      .select()
      .from(appointments)
      .where(eq(appointments.studentId, studentId))
      .orderBy(appointments.createdAt);
  }

  async createApplication(insertApplication: InsertApplication): Promise<Application> {
    const [application] = await db
      .insert(applications)
      .values({
        ...insertApplication,
        studentId: insertApplication.studentId || 1,
        documents: insertApplication.documents || [],
        requirements: insertApplication.requirements || {
          academicRequirements: [],
          languageRequirements: [],
          financialRequirements: [],
          documentRequirements: []
        }
      })
      .returning();
    return application;
  }

  async getApplications(): Promise<Application[]> {
    return await db.select().from(applications).orderBy(applications.createdAt);
  }

  async getStudentApplications(studentId: number): Promise<Application[]> {
    return await db
      .select()
      .from(applications)
      .where(eq(applications.studentId, studentId))
      .orderBy(applications.createdAt);
  }

  async updateApplication(id: number, updates: Partial<Application>): Promise<Application | undefined> {
    const [application] = await db
      .update(applications)
      .set(updates)
      .where(eq(applications.id, id))
      .returning();
    return application || undefined;
  }

  // Student Application Methods
  async createStudentApplication(insertApplication: InsertStudentApplication): Promise<StudentApplication> {
    const [application] = await db
      .insert(studentApplications)
      .values({
        ...insertApplication,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();
    return application;
  }

  async getAllStudentApplications(): Promise<StudentApplication[]> {
    return await db.select().from(studentApplications).orderBy(desc(studentApplications.createdAt));
  }

  async getStudentApplication(id: number): Promise<StudentApplication | undefined> {
    const [application] = await db.select().from(studentApplications).where(eq(studentApplications.id, id));
    return application || undefined;
  }

  async getStudentApplicationsByUserId(userId: number): Promise<StudentApplication[]> {
    return await db.select().from(studentApplications).where(eq(studentApplications.userId, userId));
  }

  async updateStudentApplicationStatus(id: number, status: string): Promise<StudentApplication | undefined> {
    const [application] = await db
      .update(studentApplications)
      .set({ 
        status, 
        updatedAt: new Date() 
      })
      .where(eq(studentApplications.id, id))
      .returning();
    return application || undefined;
  }

  // Admin methods
  async getAllUsers(): Promise<User[]> {
    return await db.select().from(users).orderBy(users.createdAt);
  }

  async updateUserRole(id: number, role: string): Promise<User | undefined> {
    const [user] = await db
      .update(users)
      .set({ role })
      .where(eq(users.id, id))
      .returning();
    return user || undefined;
  }

  async updateUser(id: number, updates: Partial<Pick<User, 'firstName' | 'lastName' | 'username' | 'email' | 'role'>>): Promise<User | undefined> {
    const updateData = {
      ...updates,
      updatedAt: new Date()
    };
    
    const [updatedUser] = await db
      .update(users)
      .set(updateData)
      .where(eq(users.id, id))
      .returning();
    return updatedUser;
  }

  async resetUserPassword(id: number, newPassword: string): Promise<User | undefined> {
    const bcrypt = await import('bcryptjs');
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    
    const [updatedUser] = await db
      .update(users)
      .set({ 
        password: hashedPassword,
        updatedAt: new Date()
      })
      .where(eq(users.id, id))
      .returning();
    return updatedUser;
  }

  async getAllUniversities(): Promise<University[]> {
    const allUniversities = await db.select().from(universities);
    return allUniversities;
  }

  async createUniversity(insertUniversity: InsertUniversity): Promise<University> {
    const [university] = await db
      .insert(universities)
      .values({
        ...insertUniversity,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();
    return university;
  }

  async updateUniversity(id: number, updates: Partial<University>): Promise<University | undefined> {
    const [university] = await db
      .update(universities)
      .set({
        ...updates,
        updatedAt: new Date(),
      })
      .where(eq(universities.id, id))
      .returning();
    return university;
  }

  async deleteUniversity(id: number): Promise<University | undefined> {
    const [deletedUniversity] = await db
      .delete(universities)
      .where(eq(universities.id, id))
      .returning();
    return deletedUniversity;
  }
}

export const storage = new DatabaseStorage();
