import { 
  users, 
  contactInquiries, 
  students, 
  appointments, 
  applications,
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
  type LoginUser,
  type RegisterUser,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
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
}

export const storage = new DatabaseStorage();
