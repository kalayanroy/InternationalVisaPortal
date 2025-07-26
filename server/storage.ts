import {
  users,
  contactInquiries,
  students,
  appointments,
  applications,
  studentApplications,
  universities,
  notifications,
  documentMessages,
  consultations,
  notices,
  userNoticeReads,
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
  schools,
  type School,
  type InsertSchool,
  visaRequirements,
  type VisaRequirement,
  type InsertVisaRequirement,
  costs,
  type Cost,
  type InsertCost,
  scholarships,
  type Scholarship,
  type InsertScholarship,
  admissionTimeline,
  type AdmissionTimeline,
  type InsertAdmissionTimeline,
  type Notification,
  type InsertNotification,
  type DocumentMessage,
  type InsertDocumentMessage,
  type Consultation,
  type InsertConsultation,
  type Notice,
  type InsertNotice,
  type UserNoticeRead,
  type InsertUserNoticeRead,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, not, sql, and, isNull } from "drizzle-orm";
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
  updateApplication(
    id: number,
    updates: Partial<Application>,
  ): Promise<Application | undefined>;

  // Student Application Methods
  createStudentApplication(
    application: InsertStudentApplication,
  ): Promise<StudentApplication>;
  getAllStudentApplications(): Promise<StudentApplication[]>;
  getStudentApplication(id: number): Promise<StudentApplication | undefined>;
  getStudentApplicationsByUserId(userId: number): Promise<StudentApplication[]>;
  updateStudentApplicationStatus(
    id: number,
    status: string,
  ): Promise<StudentApplication | undefined>;

  // Admin methods
  getAllUsers(): Promise<User[]>;
  updateUserRole(id: number, role: string): Promise<User | undefined>;
  updateUser(
    id: number,
    updates: Partial<
      Pick<User, "firstName" | "lastName" | "username" | "email" | "role">
    >,
  ): Promise<User | undefined>;
  resetUserPassword(id: number, newPassword: string): Promise<User | undefined>;
  deleteUser(id: number): Promise<User | undefined>;

  // University management
  getAllUniversities(): Promise<University[]>;
  createUniversity(university: InsertUniversity): Promise<University>;
  updateUniversity(
    id: number,
    updates: Partial<University>,
  ): Promise<University | undefined>;
  deleteUniversity(id: number): Promise<University | undefined>;

  // Attachment/Text System methods
  // Schools
  getAllSchools(): Promise<School[]>;
  getSchoolsByUniversity(universityId: number): Promise<School[]>;
  createSchool(school: InsertSchool): Promise<School>;
  updateSchool(
    id: number,
    updates: Partial<School>,
  ): Promise<School | undefined>;
  deleteSchool(id: number): Promise<School | undefined>;

  // Visa Requirements
  getAllVisaRequirements(): Promise<VisaRequirement[]>;
  getVisaRequirementsByUniversity(
    universityId: number,
  ): Promise<VisaRequirement[]>;
  createVisaRequirement(
    visaReq: InsertVisaRequirement,
  ): Promise<VisaRequirement>;
  updateVisaRequirement(
    id: number,
    updates: Partial<VisaRequirement>,
  ): Promise<VisaRequirement | undefined>;
  deleteVisaRequirement(id: number): Promise<VisaRequirement | undefined>;

  // Costs
  getAllCosts(): Promise<Cost[]>;
  getCostsByUniversity(universityId: number): Promise<Cost[]>;
  createCost(cost: InsertCost): Promise<Cost>;
  updateCost(id: number, updates: Partial<Cost>): Promise<Cost | undefined>;
  deleteCost(id: number): Promise<Cost | undefined>;

  // Scholarships
  getAllScholarships(): Promise<Scholarship[]>;
  getScholarshipsByUniversity(universityId: number): Promise<Scholarship[]>;
  createScholarship(scholarship: InsertScholarship): Promise<Scholarship>;
  updateScholarship(
    id: number,
    updates: Partial<Scholarship>,
  ): Promise<Scholarship | undefined>;
  deleteScholarship(id: number): Promise<Scholarship | undefined>;

  // Admission Timeline
  getAllAdmissionTimeline(): Promise<AdmissionTimeline[]>;
  getAdmissionTimelineByUniversity(
    universityId: number,
  ): Promise<AdmissionTimeline[]>;
  createAdmissionTimeline(
    timeline: InsertAdmissionTimeline,
  ): Promise<AdmissionTimeline>;
  updateAdmissionTimeline(
    id: number,
    updates: Partial<AdmissionTimeline>,
  ): Promise<AdmissionTimeline | undefined>;
  deleteAdmissionTimeline(id: number): Promise<AdmissionTimeline | undefined>;

  // User Dashboard methods
  getUserApplications(userId: number): Promise<StudentApplication[]>;
  updateUserProfile(userId: number, updates: { firstName: string; lastName: string; email: string }): Promise<User | undefined>;
  getUserDocumentsByApplication(userId: number): Promise<{
    user: User | undefined;
    applications: StudentApplication[];
    totalDocuments: number;
  }>;

  // Notification methods
  createNotification(notification: InsertNotification): Promise<Notification>;
  getUserNotifications(userId: number): Promise<Notification[]>;
  getAllNotifications(): Promise<Notification[]>;
  markNotificationAsRead(id: number): Promise<Notification | undefined>;

  // Admin statistics
  getAdminStats(): Promise<{
    users: number;
    applications: number;
    pendingApplications: number;
    notifications: number;
  }>;

  // Consultation booking methods
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  getUserConsultations(userId: number): Promise<Consultation[]>;
  getAllConsultations(): Promise<Consultation[]>;
  updateConsultationStatus(id: number, status: string, meetingLink?: string, meetingNotes?: string): Promise<Consultation | undefined>;
  deleteConsultation(id: number): Promise<Consultation | undefined>;

  // Notice board methods
  getAllNotices(): Promise<Notice[]>;
  createNotice(notice: InsertNotice): Promise<Notice>;
  updateNotice(id: number, updates: Partial<InsertNotice>): Promise<Notice | undefined>;
  deleteNotice(id: number): Promise<Notice | undefined>;
}

export class DatabaseStorage implements IStorage {
  // Authentication methods
  async getUserById(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.username, username));
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

    const isValidPassword = await bcrypt.compare(
      credentials.password,
      user.password,
    );
    if (!isValidPassword) {
      return null;
    }

    return user;
  }

  async getStudent(id: number): Promise<Student | undefined> {
    const [student] = await db
      .select()
      .from(students)
      .where(eq(students.id, id));
    return student || undefined;
  }

  async getStudentByEmail(email: string): Promise<Student | undefined> {
    const [student] = await db
      .select()
      .from(students)
      .where(eq(students.email, email));
    return student || undefined;
  }

  async createStudent(insertStudent: InsertStudent): Promise<Student> {
    const [student] = await db
      .insert(students)
      .values({
        ...insertStudent,
        phone: insertStudent.phone || null,
        dateOfBirth: insertStudent.dateOfBirth || null,
        nationality: insertStudent.nationality || null,
      })
      .returning();
    return student;
  }

  async createContactInquiry(
    insertInquiry: InsertContactInquiry,
  ): Promise<ContactInquiry> {
    const [inquiry] = await db
      .insert(contactInquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return await db
      .select()
      .from(contactInquiries)
      .orderBy(contactInquiries.createdAt);
  }

  async createAppointment(
    insertAppointment: InsertAppointment,
  ): Promise<Appointment> {
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

  async createApplication(
    insertApplication: InsertApplication,
  ): Promise<Application> {
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
          documentRequirements: [],
        },
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

  async updateApplication(
    id: number,
    updates: Partial<Application>,
  ): Promise<Application | undefined> {
    const [application] = await db
      .update(applications)
      .set(updates)
      .where(eq(applications.id, id))
      .returning();
    return application || undefined;
  }

  // Student Application Methods
  async createStudentApplication(
    insertApplication: InsertStudentApplication,
  ): Promise<StudentApplication> {
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
    return await db
      .select()
      .from(studentApplications)
      .orderBy(desc(studentApplications.createdAt));
  }

  async getStudentApplication(
    id: number,
  ): Promise<StudentApplication | undefined> {
    const [application] = await db
      .select()
      .from(studentApplications)
      .where(eq(studentApplications.id, id));
    return application || undefined;
  }

  async getStudentApplicationsByUserId(
    userId: number,
  ): Promise<StudentApplication[]> {
    return await db
      .select()
      .from(studentApplications)
      .where(eq(studentApplications.userId, userId));
  }

  async updateStudentApplicationStatus(
    id: number,
    status: string,
  ): Promise<StudentApplication | undefined> {
    const [application] = await db
      .update(studentApplications)
      .set({
        status,
        updatedAt: new Date(),
      })
      .where(eq(studentApplications.id, id))
      .returning();
    return application || undefined;
  }

  async updateStudentApplicationDocuments(
    id: number,
    documentUpdates: Record<string, string>,
  ): Promise<StudentApplication | undefined> {
    const [application] = await db
      .update(studentApplications)
      .set({
        ...documentUpdates,
        updatedAt: new Date(),
      })
      .where(eq(studentApplications.id, id))
      .returning();
    return application || undefined;
  }

  // Admin methods
  async getAllUsers(): Promise<User[]> {
    return await db
      .select()
      .from(users)
      //.where(not(eq(users.id, 1)))
      .orderBy(users.createdAt);
  }

  async updateUserRole(id: number, role: string): Promise<User | undefined> {
    const [user] = await db
      .update(users)
      .set({ role })
      .where(eq(users.id, id))
      .returning();
    return user || undefined;
  }

  async updateUser(
    id: number,
    updates: Partial<
      Pick<User, "firstName" | "lastName" | "username" | "email" | "role">
    >,
  ): Promise<User | undefined> {
    const updateData = {
      ...updates,
      updatedAt: new Date(),
    };

    const [updatedUser] = await db
      .update(users)
      .set(updateData)
      .where(eq(users.id, id))
      .returning();
    return updatedUser;
  }

  async resetUserPassword(
    id: number,
    newPassword: string,
  ): Promise<User | undefined> {
    const bcrypt = await import("bcryptjs");
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    const [updatedUser] = await db
      .update(users)
      .set({
        password: hashedPassword,
        updatedAt: new Date(),
      })
      .where(eq(users.id, id))
      .returning();
    return updatedUser;
  }

  async getAllUniversities(): Promise<University[]> {
    const allUniversities = await db.select().from(universities);
    return allUniversities;
  }

  async createUniversity(
    insertUniversity: InsertUniversity,
  ): Promise<University> {
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

  async updateUniversity(
    id: number,
    updates: Partial<University>,
  ): Promise<University | undefined> {
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

  // Attachment/Text System implementations

  // Schools methods
  async getAllSchools(): Promise<School[]> {
    return await db.select().from(schools).orderBy(desc(schools.createdAt));
  }

  async getSchoolsByUniversity(universityId: number): Promise<School[]> {
    return await db
      .select()
      .from(schools)
      .where(eq(schools.universityId, universityId))
      .orderBy(desc(schools.createdAt));
  }

  async createSchool(insertSchool: InsertSchool): Promise<School> {
    const [school] = await db.insert(schools).values(insertSchool).returning();
    return school;
  }

  async updateSchool(
    id: number,
    updates: Partial<School>,
  ): Promise<School | undefined> {
    const [updated] = await db
      .update(schools)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(schools.id, id))
      .returning();
    return updated;
  }

  async deleteSchool(id: number): Promise<School | undefined> {
    const [deleted] = await db
      .delete(schools)
      .where(eq(schools.id, id))
      .returning();
    return deleted;
  }

  // Visa Requirements methods
  async getAllVisaRequirements(): Promise<VisaRequirement[]> {
    return await db
      .select()
      .from(visaRequirements)
      .orderBy(desc(visaRequirements.createdAt));
  }

  async getVisaRequirementsByUniversity(
    universityId: number,
  ): Promise<VisaRequirement[]> {
    return await db
      .select()
      .from(visaRequirements)
      .where(eq(visaRequirements.universityId, universityId))
      .orderBy(desc(visaRequirements.createdAt));
  }

  async createVisaRequirement(
    insertVisaReq: InsertVisaRequirement,
  ): Promise<VisaRequirement> {
    const [visaReq] = await db
      .insert(visaRequirements)
      .values(insertVisaReq)
      .returning();
    return visaReq;
  }

  async updateVisaRequirement(
    id: number,
    updates: Partial<VisaRequirement>,
  ): Promise<VisaRequirement | undefined> {
    const [updated] = await db
      .update(visaRequirements)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(visaRequirements.id, id))
      .returning();
    return updated;
  }

  async deleteVisaRequirement(
    id: number,
  ): Promise<VisaRequirement | undefined> {
    const [deleted] = await db
      .delete(visaRequirements)
      .where(eq(visaRequirements.id, id))
      .returning();
    return deleted;
  }

  // Costs methods
  async getAllCosts(): Promise<Cost[]> {
    return await db.select().from(costs).orderBy(desc(costs.createdAt));
  }

  async getCostsByUniversity(universityId: number): Promise<Cost[]> {
    return await db
      .select()
      .from(costs)
      .where(eq(costs.universityId, universityId))
      .orderBy(desc(costs.createdAt));
  }

  async createCost(insertCost: InsertCost): Promise<Cost> {
    const [cost] = await db.insert(costs).values(insertCost).returning();
    return cost;
  }

  async updateCost(
    id: number,
    updates: Partial<Cost>,
  ): Promise<Cost | undefined> {
    const [updated] = await db
      .update(costs)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(costs.id, id))
      .returning();
    return updated;
  }

  async deleteCost(id: number): Promise<Cost | undefined> {
    const [deleted] = await db
      .delete(costs)
      .where(eq(costs.id, id))
      .returning();
    return deleted;
  }

  // Scholarships methods
  async getAllScholarships(): Promise<Scholarship[]> {
    return await db
      .select()
      .from(scholarships)
      .orderBy(desc(scholarships.createdAt));
  }

  async getScholarshipsByUniversity(
    universityId: number,
  ): Promise<Scholarship[]> {
    return await db
      .select()
      .from(scholarships)
      .where(eq(scholarships.universityId, universityId))
      .orderBy(desc(scholarships.createdAt));
  }

  async createScholarship(
    insertScholarship: InsertScholarship,
  ): Promise<Scholarship> {
    const [scholarship] = await db
      .insert(scholarships)
      .values(insertScholarship)
      .returning();
    return scholarship;
  }

  async updateScholarship(
    id: number,
    updates: Partial<Scholarship>,
  ): Promise<Scholarship | undefined> {
    const [updated] = await db
      .update(scholarships)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(scholarships.id, id))
      .returning();
    return updated;
  }

  async deleteScholarship(id: number): Promise<Scholarship | undefined> {
    const [deleted] = await db
      .delete(scholarships)
      .where(eq(scholarships.id, id))
      .returning();
    return deleted;
  }

  // Admission Timeline methods
  async getAllAdmissionTimeline(): Promise<AdmissionTimeline[]> {
    return await db
      .select()
      .from(admissionTimeline)
      .orderBy(desc(admissionTimeline.createdAt));
  }

  async getAdmissionTimelineByUniversity(
    universityId: number,
  ): Promise<AdmissionTimeline[]> {
    return await db
      .select()
      .from(admissionTimeline)
      .where(eq(admissionTimeline.universityId, universityId))
      .orderBy(desc(admissionTimeline.createdAt));
  }

  async createAdmissionTimeline(
    insertTimeline: InsertAdmissionTimeline,
  ): Promise<AdmissionTimeline> {
    const [timeline] = await db
      .insert(admissionTimeline)
      .values(insertTimeline)
      .returning();
    return timeline;
  }

  async updateAdmissionTimeline(
    id: number,
    updates: Partial<AdmissionTimeline>,
  ): Promise<AdmissionTimeline | undefined> {
    const [updated] = await db
      .update(admissionTimeline)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(admissionTimeline.id, id))
      .returning();
    return updated;
  }

  async deleteAdmissionTimeline(
    id: number,
  ): Promise<AdmissionTimeline | undefined> {
    const [deleted] = await db
      .delete(admissionTimeline)
      .where(eq(admissionTimeline.id, id))
      .returning();
    return deleted;
  }

  // Missing deleteUser method to fix interface error
  async deleteUser(id: number): Promise<User | undefined> {
    const [deleted] = await db
      .delete(users)
      .where(eq(users.id, id))
      .returning();
    return deleted;
  }

  // User Dashboard methods
  async getUserApplications(userId: number): Promise<StudentApplication[]> {
    return await db
      .select()
      .from(studentApplications)
      .where(eq(studentApplications.userId, userId))
      .orderBy(desc(studentApplications.createdAt));
  }

  async updateUserProfile(userId: number, updates: { firstName: string; lastName: string; email: string }): Promise<User | undefined> {
    const [updated] = await db
      .update(users)
      .set({ 
        firstName: updates.firstName,
        lastName: updates.lastName,
        email: updates.email,
        updatedAt: new Date()
      })
      .where(eq(users.id, userId))
      .returning();
    return updated;
  }

  // Notification methods
  async createNotification(notification: InsertNotification): Promise<Notification> {
    const [created] = await db
      .insert(notifications)
      .values(notification)
      .returning();
    return created;
  }

  async getUserNotifications(userId: number): Promise<Notification[]> {
    return await db
      .select()
      .from(notifications)
      .where(eq(notifications.userId, userId))
      .orderBy(desc(notifications.createdAt));
  }

  async getAllNotifications(): Promise<Notification[]> {
    return await db
      .select()
      .from(notifications)
      .orderBy(desc(notifications.createdAt));
  }

  async markNotificationAsRead(id: number): Promise<Notification | undefined> {
    const [updated] = await db
      .update(notifications)
      .set({ read: true })
      .where(eq(notifications.id, id))
      .returning();
    return updated;
  }

  // Admin statistics
  async getAdminStats(): Promise<{
    users: number;
    applications: number;
    pendingApplications: number;
    notifications: number;
  }> {
    const [usersCount] = await db.select({ count: eq(users.id, users.id) }).from(users);
    const [applicationsCount] = await db.select({ count: eq(studentApplications.id, studentApplications.id) }).from(studentApplications);
    const [pendingCount] = await db.select({ count: eq(studentApplications.id, studentApplications.id) }).from(studentApplications).where(eq(studentApplications.status, 'pending'));
    const [notificationsCount] = await db.select({ count: eq(notifications.id, notifications.id) }).from(notifications);

    // Count rows properly
    const totalUsers = await db.select().from(users);
    const totalApplications = await db.select().from(studentApplications);
    const pendingApplications = await db.select().from(studentApplications).where(eq(studentApplications.status, 'pending'));
    const totalNotifications = await db.select().from(notifications);

    return {
      users: totalUsers.length,
      applications: totalApplications.length,
      pendingApplications: pendingApplications.length,
      notifications: totalNotifications.length,
    };
  }

  // Document Messages methods
  async createDocumentMessage(message: InsertDocumentMessage): Promise<DocumentMessage> {
    const [created] = await db
      .insert(documentMessages)
      .values(message)
      .returning();
    return created;
  }

  async getUserDocumentMessages(userId: number): Promise<DocumentMessage[]> {
    return await db
      .select()
      .from(documentMessages)
      .where(eq(documentMessages.userId, userId))
      .orderBy(desc(documentMessages.createdAt));
  }

  async getApplicationDocumentMessages(applicationId: number): Promise<DocumentMessage[]> {
    return await db
      .select()
      .from(documentMessages)
      .where(eq(documentMessages.applicationId, applicationId))
      .orderBy(desc(documentMessages.createdAt));
  }

  async getAllDocumentMessages(): Promise<DocumentMessage[]> {
    return await db
      .select()
      .from(documentMessages)
      .orderBy(desc(documentMessages.createdAt));
  }

  async getDocumentMessageById(id: number): Promise<DocumentMessage | undefined> {
    const [message] = await db
      .select()
      .from(documentMessages)
      .where(eq(documentMessages.id, id));
    return message;
  }

  async markDocumentMessageAsRead(id: number): Promise<DocumentMessage | undefined> {
    const [updated] = await db
      .update(documentMessages)
      .set({ read: true })
      .where(eq(documentMessages.id, id))
      .returning();
    return updated;
  }

  async updateDocumentMessageStatus(id: number, status: string): Promise<DocumentMessage | undefined> {
    const [updated] = await db
      .update(documentMessages)
      .set({ status, updatedAt: new Date() })
      .where(eq(documentMessages.id, id))
      .returning();
    return updated;
  }

  // Get unread document requests count for user
  async getUnreadDocumentRequestsCount(userId: number): Promise<number> {
    const result = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(documentMessages)
      .where(
        and(
          eq(documentMessages.userId, userId),
          eq(documentMessages.read, false),
          eq(documentMessages.messageType, "document_request") // Only count admin requests, not user responses
        )
      );
    
    return result[0]?.count || 0;
  }

  // Mark document request as read
  async markDocumentRequestAsRead(userId: number, messageId: number): Promise<DocumentMessage | undefined> {
    const [updated] = await db
      .update(documentMessages)
      .set({ read: true, updatedAt: new Date() })
      .where(
        and(
          eq(documentMessages.id, messageId),
          eq(documentMessages.userId, userId)
        )
      )
      .returning();
    return updated;
  }

  // Mark all document requests as read for user
  async markAllDocumentRequestsAsRead(userId: number): Promise<void> {
    await db
      .update(documentMessages)
      .set({ read: true, updatedAt: new Date() })
      .where(
        and(
          eq(documentMessages.userId, userId),
          eq(documentMessages.read, false),
          eq(documentMessages.messageType, "document_request")
        )
      );
  }

  // Get user documents by application
  async getUserDocumentsByApplication(userId: number): Promise<{
    user: User | undefined;
    applications: StudentApplication[];
    totalDocuments: number;
  }> {
    const user = await this.getUserById(userId);
    const applications = await this.getUserApplications(userId);
    
    // Count uploaded documents
    let totalDocuments = 0;
    applications.forEach(app => {
      const documentFields = [
        app.passportDocument, app.academicDocuments, app.englishTestScore,
        app.cvResume, app.statementOfPurpose, app.experienceLetters,
        app.nationalIdDoc, app.passportPhoto, app.birthCertificate, app.financialDocuments
      ];
      totalDocuments += documentFields.filter(doc => doc && doc.trim() !== '').length;
    });

    return {
      user,
      applications,
      totalDocuments
    };
  }

  // Consultation booking methods
  async createConsultation(consultation: InsertConsultation): Promise<Consultation> {
    const [created] = await db.insert(consultations).values(consultation).returning();
    return created;
  }

  async getUserConsultations(userId: number): Promise<Consultation[]> {
    return await db.select().from(consultations).where(eq(consultations.userId, userId)).orderBy(desc(consultations.createdAt));
  }

  async getAllConsultations(): Promise<Consultation[]> {
    return await db
      .select({
        id: consultations.id,
        userId: consultations.userId,
        preferredDate: consultations.preferredDate,
        preferredTime: consultations.preferredTime,
        consultationType: consultations.consultationType,
        message: consultations.message,
        status: consultations.status,
        meetingLink: consultations.meetingLink,
        meetingNotes: consultations.meetingNotes,
        createdAt: consultations.createdAt,
        confirmedAt: consultations.confirmedAt,
        completedAt: consultations.completedAt,
        updatedAt: consultations.updatedAt,
        user: {
          id: users.id,
          firstName: users.firstName,
          lastName: users.lastName,
          email: users.email
        }
      })
      .from(consultations)
      .leftJoin(users, eq(consultations.userId, users.id))
      .orderBy(desc(consultations.createdAt));
  }

  async updateConsultationStatus(id: number, status: string, meetingLink?: string, meetingNotes?: string): Promise<Consultation | undefined> {
    const updates: any = { 
      status, 
      updatedAt: new Date() 
    };
    
    if (meetingLink) {
      updates.meetingLink = meetingLink;
    }
    
    if (meetingNotes) {
      updates.meetingNotes = meetingNotes;
    }
    
    if (status === 'confirmed') {
      updates.confirmedAt = new Date();
    } else if (status === 'completed') {
      updates.completedAt = new Date();
    }

    const [updated] = await db
      .update(consultations)
      .set(updates)
      .where(eq(consultations.id, id))
      .returning();
    return updated;
  }

  async deleteConsultation(id: number): Promise<Consultation | undefined> {
    const [deleted] = await db.delete(consultations).where(eq(consultations.id, id)).returning();
    return deleted;
  }

  // Notice board methods
  async getAllNotices(): Promise<Notice[]> {
    return await db
      .select()
      .from(notices)
      .where(eq(notices.isActive, true))
      .orderBy(desc(notices.createdAt));
  }

  async createNotice(notice: InsertNotice): Promise<Notice> {
    const [created] = await db.insert(notices).values(notice).returning();
    return created;
  }

  async updateNotice(id: number, updates: Partial<InsertNotice>): Promise<Notice | undefined> {
    const [updated] = await db
      .update(notices)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(notices.id, id))
      .returning();
    return updated;
  }

  async deleteNotice(id: number): Promise<Notice | undefined> {
    const [deleted] = await db.delete(notices).where(eq(notices.id, id)).returning();
    return deleted;
  }

  async getNoticesWithReadStatus(userId: number): Promise<(Notice & { isRead: boolean })[]> {
    const result = await db
      .select({
        id: notices.id,
        title: notices.title,
        message: notices.message,
        type: notices.type,
        isActive: notices.isActive,
        publishedBy: notices.publishedBy,
        createdAt: notices.createdAt,
        updatedAt: notices.updatedAt,
        isRead: sql<boolean>`CASE WHEN ${userNoticeReads.userId} IS NOT NULL THEN true ELSE false END`,
      })
      .from(notices)
      .leftJoin(
        userNoticeReads,
        and(
          eq(userNoticeReads.noticeId, notices.id),
          eq(userNoticeReads.userId, userId)
        )
      )
      .where(eq(notices.isActive, true))
      .orderBy(desc(notices.createdAt));

    return result;
  }

  async getUnreadNoticeCount(userId: number): Promise<number> {
    const result = await db
      .select({ count: sql<number>`count(*)` })
      .from(notices)
      .leftJoin(
        userNoticeReads,
        and(
          eq(userNoticeReads.noticeId, notices.id),
          eq(userNoticeReads.userId, userId)
        )
      )
      .where(
        and(
          eq(notices.isActive, true),
          isNull(userNoticeReads.userId)
        )
      );

    return result[0]?.count || 0;
  }

  async markNoticeAsRead(userId: number, noticeId: number): Promise<UserNoticeRead> {
    console.log("Storage: markNoticeAsRead called with userId:", userId, "noticeId:", noticeId);
    try {
      const [userRead] = await db
        .insert(userNoticeReads)
        .values({ userId, noticeId })
        .onConflictDoNothing()
        .returning();
      console.log("Storage: markNoticeAsRead result:", userRead);
      return userRead;
    } catch (error) {
      console.error("Storage: markNoticeAsRead error:", error);
      throw error;
    }
  }

  async markAllNoticesAsRead(userId: number): Promise<void> {
    // Get all active notices that the user hasn't read
    const unreadNotices = await db
      .select({ id: notices.id })
      .from(notices)
      .leftJoin(
        userNoticeReads,
        and(
          eq(userNoticeReads.noticeId, notices.id),
          eq(userNoticeReads.userId, userId)
        )
      )
      .where(
        and(
          eq(notices.isActive, true),
          isNull(userNoticeReads.userId)
        )
      );

    if (unreadNotices.length > 0) {
      const readEntries = unreadNotices.map(notice => ({
        userId,
        noticeId: notice.id,
      }));

      await db.insert(userNoticeReads).values(readEntries).onConflictDoNothing();
    }
  }
}

export const storage = new DatabaseStorage();
