import { useEffect, useState } from "react";
import { useAuthState } from "@/hooks/useAuth";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Users, FileText, Calendar, GraduationCap, Eye, Download, MessageSquare, CheckCircle, XCircle, Clock, AlertCircle, Send, FolderOpen, User } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import type { StudentApplication, User as UserType, Notification, DocumentMessage } from "@shared/schema";

export default function AdminDashboard() {
  const { user, isAuthenticated, isAdmin, isLoading } = useAuthState();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [selectedApplication, setSelectedApplication] = useState<StudentApplication | null>(null);
  const [statusUpdateData, setStatusUpdateData] = useState({ status: "", message: "" });
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [documentRequestData, setDocumentRequestData] = useState({
    subject: "",
    message: "",
    requestedDocuments: [] as string[]
  });
  const [userDocuments, setUserDocuments] = useState<any>(null);
  
  // User Management States
  const [userSearchTerm, setUserSearchTerm] = useState("");
  const [selectedUserRole, setSelectedUserRole] = useState("all");
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<UserType | null>(null);
  const [isPasswordResetOpen, setIsPasswordResetOpen] = useState(false);
  const [passwordResetUser, setPasswordResetUser] = useState<UserType | null>(null);
  const [newUserData, setNewUserData] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "user"
  });
  const [editUserData, setEditUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: ""
  });
  const [passwordResetData, setPasswordResetData] = useState({
    newPassword: "",
    confirmPassword: ""
  });

  // Notification History States
  const [notificationSearchTerm, setNotificationSearchTerm] = useState("");
  const [selectedNotificationType, setSelectedNotificationType] = useState("all");
  const [selectedNotificationStatus, setSelectedNotificationStatus] = useState("all");
  const [selectedDateRange, setSelectedDateRange] = useState("all");
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
  const [isNotificationDetailsOpen, setIsNotificationDetailsOpen] = useState(false);

  // Fetch all student applications
  const { data: applications = [], isLoading: applicationsLoading } = useQuery<StudentApplication[]>({
    queryKey: ["/api/admin/applications"],
    enabled: isAuthenticated && isAdmin,
  });

  // Fetch dashboard statistics  
  const { data: stats = { users: 0, applications: 0, pendingApplications: 0, notifications: 0 } } = useQuery<{
    users: number;
    applications: number;
    pendingApplications: number;
    notifications: number;
  }>({
    queryKey: ["/api/admin/stats"],
    enabled: isAuthenticated && isAdmin,
  });

  // Fetch all users for user management
  const { data: allUsers = [] } = useQuery<UserType[]>({
    queryKey: ["/api/admin/users"],
    enabled: isAuthenticated && isAdmin,
  });

  // Fetch document messages
  const { data: documentMessages = [] } = useQuery<DocumentMessage[]>({
    queryKey: ["/api/admin/document-messages"],
    enabled: isAuthenticated && isAdmin,
  });

  // Fetch all consultations for admin management
  const { data: consultations = [] } = useQuery<any[]>({
    queryKey: ["/api/admin/consultations"],
    enabled: isAuthenticated && isAdmin,
  });

  // Fetch all notices for admin management
  const { data: notices = [] } = useQuery<any[]>({
    queryKey: ["/api/admin/notices"],
    enabled: isAuthenticated && isAdmin,
  });

  // Fetch notification history for admin management
  const { data: notificationHistory = [] } = useQuery<Notification[]>({
    queryKey: ["/api/admin/notifications"],
    enabled: isAuthenticated && isAdmin,
  });

  const [selectedConsultation, setSelectedConsultation] = useState<any>(null);
  const [consultationUpdate, setConsultationUpdate] = useState({
    status: "",
    meetingLink: "",
    meetingNotes: ""
  });

  // Notice board state
  const [newNotice, setNewNotice] = useState({
    title: "",
    message: "",
    type: "info"
  });
  const [editingNotice, setEditingNotice] = useState<any>(null);

  // Update application status mutation
  const updateStatusMutation = useMutation({
    mutationFn: async ({ applicationId, status, message }: { applicationId: number; status: string; message: string }) => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/admin/applications/${applicationId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status, message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update status");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Status Updated",
        description: "Application status updated and user notified successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/applications"] });
      setSelectedApplication(null);
      setStatusUpdateData({ status: "", message: "" });
    },
    onError: (error: Error) => {
      toast({
        title: "Update Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Send document request mutation
  const sendDocumentRequestMutation = useMutation({
    mutationFn: async ({ userId, applicationId, subject, message, requestedDocuments }: {
      userId: number;
      applicationId?: number;
      subject: string;
      message: string;
      requestedDocuments: string[];
    }) => {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/admin/document-messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId,
          applicationId,
          subject,
          message,
          requestedDocuments,
          messageType: "document_request"
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send document request");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Document Request Sent",
        description: "Document request sent successfully and user notified.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/document-messages"] });
      setSelectedUser(null);
      setDocumentRequestData({ subject: "", message: "", requestedDocuments: [] });
    },
    onError: (error: Error) => {
      toast({
        title: "Request Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Fetch user documents mutation
  const fetchUserDocumentsMutation = useMutation({
    mutationFn: async (userId: number) => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/admin/users/${userId}/documents`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch user documents");
      }

      return response.json();
    },
    onSuccess: (data) => {
      setUserDocuments(data);
    },
    onError: (error: Error) => {
      toast({
        title: "Fetch Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Update document message status mutation
  const updateMessageStatusMutation = useMutation({
    mutationFn: async ({ messageId, status }: { messageId: number; status: string }) => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/admin/document-messages/${messageId}/status`, {
        method: "PATCH",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error("Failed to update message status");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Status Updated",
        description: "Document message status updated successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/document-messages"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Update Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Update consultation mutation
  const updateConsultationMutation = useMutation({
    mutationFn: async ({ consultationId, status, meetingLink, meetingNotes }: {
      consultationId: number;
      status: string;
      meetingLink: string;
      meetingNotes: string;
    }) => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/admin/consultations/${consultationId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          status,
          meetingLink,
          meetingNotes,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update consultation");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Consultation updated successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/consultations"] });
      setSelectedConsultation(null);
      setConsultationUpdate({ status: "", meetingLink: "", meetingNotes: "" });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // User Management Mutations
  const createUserMutation = useMutation({
    mutationFn: async (userData: any) => {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/admin/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create user");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "User created successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/stats"] });
      setIsCreateUserOpen(false);
      setNewUserData({
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        role: "user"
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: async ({ userId, userData }: { userId: number; userData: any }) => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update user");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "User updated successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      setIsEditUserOpen(false);
      setEditingUser(null);
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteUserMutation = useMutation({
    mutationFn: async (userId: number) => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete user");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "User deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/stats"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const resetPasswordMutation = useMutation({
    mutationFn: async ({ userId, password }: { userId: number; password: string }) => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/admin/users/${userId}/reset-password`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to reset password");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Password reset successfully",
      });
      setIsPasswordResetOpen(false);
      setPasswordResetUser(null);
      setPasswordResetData({ newPassword: "", confirmPassword: "" });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Create notice mutation
  const createNoticeMutation = useMutation({
    mutationFn: async (noticeData: { title: string; message: string; type: string }) => {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/admin/notices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(noticeData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create notice");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Notice created successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/notices"] });
      setNewNotice({ title: "", message: "", type: "info" });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Update notice mutation
  const updateNoticeMutation = useMutation({
    mutationFn: async ({ noticeId, updates }: { noticeId: number; updates: any }) => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/admin/notices/${noticeId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update notice");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Notice updated successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/notices"] });
      setEditingNotice(null);
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Delete notice mutation
  const deleteNoticeMutation = useMutation({
    mutationFn: async (noticeId: number) => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/admin/notices/${noticeId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete notice");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Notice deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/notices"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Helper function to get status badge variant
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "approved": return "default";
      case "pending": return "secondary";
      case "under_review": return "outline";
      case "rejected": return "destructive";
      case "documents_required": return "secondary";
      default: return "secondary";
    }
  };

  // Helper function to get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved": return <CheckCircle className="h-4 w-4" />;
      case "pending": return <Clock className="h-4 w-4" />;
      case "under_review": return <AlertCircle className="h-4 w-4" />;
      case "rejected": return <XCircle className="h-4 w-4" />;
      case "documents_required": return <FileText className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  // Redirect to login if not authenticated or not admin
  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !isAdmin)) {
      toast({
        title: "Access Denied",
        description: "You need admin privileges to access this page.",
        variant: "destructive",
      });
      setLocation("/login");
      return;
    }
  }, [isAuthenticated, isAdmin, isLoading, toast, setLocation]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // User management helper functions
  const filteredUsers = allUsers.filter(user => {
    const matchesSearch = userSearchTerm === "" || 
      user.firstName?.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
      user.lastName?.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(userSearchTerm.toLowerCase());
    
    const matchesRole = selectedUserRole === "all" || user.role === selectedUserRole;
    
    return matchesSearch && matchesRole;
  });

  const handleEditUser = (user: UserType) => {
    setEditingUser(user);
    setEditUserData({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email,
      role: user.role
    });
    setIsEditUserOpen(true);
  };

  const handlePasswordReset = (user: UserType) => {
    setPasswordResetUser(user);
    setIsPasswordResetOpen(true);
  };

  const handleDeleteUser = (user: UserType) => {
    if (user.id === 1) {
      toast({
        title: "Cannot Delete",
        description: "Cannot delete the main admin account",
        variant: "destructive",
      });
      return;
    }
    
    if (window.confirm(`Are you sure you want to delete user ${user.firstName} ${user.lastName}? This action cannot be undone.`)) {
      deleteUserMutation.mutate(user.id);
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "user":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Notification history helper functions
  const getNotificationTypeColor = (type: string) => {
    switch (type) {
      case "application_status":
        return "bg-blue-100 text-blue-800";
      case "appointment":
        return "bg-green-100 text-green-800";
      case "document_request":
        return "bg-orange-100 text-orange-800";
      case "general":
        return "bg-purple-100 text-purple-800";
      case "system":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getNotificationStatusColor = (read: boolean) => {
    return read ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  };

  const filterNotificationsByDateRange = (notifications: Notification[], range: string) => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    switch (range) {
      case "today":
        return notifications.filter(notification => 
          new Date(notification.createdAt) >= startOfDay
        );
      case "week":
        const weekAgo = new Date(startOfDay.getTime() - 7 * 24 * 60 * 60 * 1000);
        return notifications.filter(notification => 
          new Date(notification.createdAt) >= weekAgo
        );
      case "month":
        const monthAgo = new Date(startOfDay.getTime() - 30 * 24 * 60 * 60 * 1000);
        return notifications.filter(notification => 
          new Date(notification.createdAt) >= monthAgo
        );
      case "all":
      default:
        return notifications;
    }
  };

  const filteredNotifications = filterNotificationsByDateRange(notificationHistory, selectedDateRange)
    .filter(notification => {
      const matchesSearch = notificationSearchTerm === "" || 
        notification.title.toLowerCase().includes(notificationSearchTerm.toLowerCase()) ||
        notification.message.toLowerCase().includes(notificationSearchTerm.toLowerCase());
      
      const matchesType = selectedNotificationType === "all" || notification.type === selectedNotificationType;
      const matchesStatus = selectedNotificationStatus === "all" || 
        (selectedNotificationStatus === "read" && notification.read) ||
        (selectedNotificationStatus === "unread" && !notification.read);
      
      return matchesSearch && matchesType && matchesStatus;
    });

  const handleViewNotificationDetails = (notification: Notification) => {
    setSelectedNotification(notification);
    setIsNotificationDetailsOpen(true);
  };

  // Mark notification as read mutation
  const markNotificationReadMutation = useMutation({
    mutationFn: async (notificationId: number) => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/admin/notifications/${notificationId}/read`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to mark notification as read");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/notifications"] });
      toast({
        title: "Success",
        description: "Notification marked as read",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Delete notification mutation
  const deleteNotificationMutation = useMutation({
    mutationFn: async (notificationId: number) => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/admin/notifications/${notificationId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete notification");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/notifications"] });
      toast({
        title: "Success",
        description: "Notification deleted successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Don't render anything if not authenticated or not admin
  if (!isAuthenticated || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="mt-2 text-gray-600">
                Welcome back, {user?.username}! Manage applications and user notifications.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.users}</div>
                  <p className="text-xs text-muted-foreground">Registered users</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.applications}</div>
                  <p className="text-xs text-muted-foreground">All submitted applications</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.pendingApplications}</div>
                  <p className="text-xs text-muted-foreground">Awaiting review</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Notifications Sent</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.notifications || 0}</div>
                  <p className="text-xs text-muted-foreground">User notifications</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="applications" className="space-y-6">
              <TabsList>
                <TabsTrigger value="applications">Student Applications</TabsTrigger>
                <TabsTrigger value="consultations">Consultations</TabsTrigger>
                <TabsTrigger value="documents">Document Management</TabsTrigger>
                <TabsTrigger value="users">User Management</TabsTrigger>
                <TabsTrigger value="notices">Notice Board</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>

              <TabsContent value="applications" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Applications</CardTitle>
                    <CardDescription>
                      Manage and review all student applications with uploaded documents
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {applicationsLoading ? (
                      <div className="text-center py-8">
                        <div className="text-lg">Loading applications...</div>
                      </div>
                    ) : applications.length === 0 ? (
                      <div className="text-center py-8">
                        <FileText className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No applications</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          No student applications have been submitted yet.
                        </p>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Student Name</TableHead>
                              <TableHead>Email</TableHead>
                              <TableHead>Preferred Course</TableHead>
                              <TableHead>Country</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Submitted</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {applications.map((application: StudentApplication) => (
                              <TableRow key={application.id}>
                                <TableCell className="font-medium">
                                  {application.fullName}
                                </TableCell>
                                <TableCell>{application.email}</TableCell>
                                <TableCell>{application.preferredCourse}</TableCell>
                                <TableCell>{application.preferredCountries}</TableCell>
                                <TableCell>
                                  <Badge variant={getStatusVariant(application.status)}>
                                    <div className="flex items-center gap-1">
                                      {getStatusIcon(application.status)}
                                      {application.status?.replace('_', ' ').toUpperCase()}
                                    </div>
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  {application.createdAt ? format(new Date(application.createdAt), "MMM dd, yyyy") : "N/A"}
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Dialog>
                                      <DialogTrigger asChild>
                                        <Button 
                                          variant="outline" 
                                          size="sm"
                                          onClick={() => setSelectedApplication(application)}
                                        >
                                          <Eye className="h-4 w-4" />
                                          View
                                        </Button>
                                      </DialogTrigger>
                                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                        <DialogHeader>
                                          <DialogTitle>Application Details - {application.fullName}</DialogTitle>
                                          <DialogDescription>
                                            Complete application information and uploaded documents
                                          </DialogDescription>
                                        </DialogHeader>
                                        {selectedApplication && (
                                          <ApplicationDetailsView application={selectedApplication} />
                                        )}
                                      </DialogContent>
                                    </Dialog>
                                    
                                    <Dialog>
                                      <DialogTrigger asChild>
                                        <Button 
                                          variant="default" 
                                          size="sm"
                                          onClick={() => {
                                            setSelectedApplication(application);
                                            setStatusUpdateData({ status: application.status || "", message: "" });
                                          }}
                                        >
                                          <MessageSquare className="h-4 w-4" />
                                          Update
                                        </Button>
                                      </DialogTrigger>
                                      <DialogContent>
                                        <DialogHeader>
                                          <DialogTitle>Update Application Status</DialogTitle>
                                          <DialogDescription>
                                            Update the status and send a notification to {application.fullName}
                                          </DialogDescription>
                                        </DialogHeader>
                                        <div className="space-y-4">
                                          <div>
                                            <Label htmlFor="status">Status</Label>
                                            <Select 
                                              value={statusUpdateData.status} 
                                              onValueChange={(value) => setStatusUpdateData(prev => ({ ...prev, status: value }))}
                                            >
                                              <SelectTrigger>
                                                <SelectValue placeholder="Select status" />
                                              </SelectTrigger>
                                              <SelectContent>
                                                <SelectItem value="pending">Pending</SelectItem>
                                                <SelectItem value="under_review">Under Review</SelectItem>
                                                <SelectItem value="documents_required">Documents Required</SelectItem>
                                                <SelectItem value="approved">Approved</SelectItem>
                                                <SelectItem value="rejected">Rejected</SelectItem>
                                              </SelectContent>
                                            </Select>
                                          </div>
                                          <div>
                                            <Label htmlFor="message">Notification Message</Label>
                                            <Textarea
                                              id="message"
                                              placeholder="Enter a message to send to the student..."
                                              value={statusUpdateData.message}
                                              onChange={(e) => setStatusUpdateData(prev => ({ ...prev, message: e.target.value }))}
                                              rows={4}
                                            />
                                          </div>
                                          <div className="flex justify-end gap-2">
                                            <Button variant="outline" onClick={() => setSelectedApplication(null)}>
                                              Cancel
                                            </Button>
                                            <Button 
                                              onClick={() => updateStatusMutation.mutate({
                                                applicationId: application.id,
                                                status: statusUpdateData.status,
                                                message: statusUpdateData.message
                                              })}
                                              disabled={updateStatusMutation.isPending || !statusUpdateData.status}
                                            >
                                              {updateStatusMutation.isPending ? "Updating..." : "Update & Notify"}
                                            </Button>
                                          </div>
                                        </div>
                                      </DialogContent>
                                    </Dialog>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="consultations" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Consultation Management</CardTitle>
                    <CardDescription>
                      Manage student consultations, add meeting links, and update status
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {consultations.length === 0 ? (
                      <div className="text-center py-8">
                        <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No consultations</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          No consultation bookings have been made yet.
                        </p>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Student</TableHead>
                              <TableHead>Type</TableHead>
                              <TableHead>Date & Time</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Meeting Link</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {consultations.map((consultation: any) => (
                              <TableRow key={consultation.id}>
                                <TableCell>
                                  <div>
                                    <p className="font-medium">{consultation.user?.firstName} {consultation.user?.lastName}</p>
                                    <p className="text-sm text-gray-500">{consultation.user?.email}</p>
                                  </div>
                                </TableCell>
                                <TableCell className="capitalize">{consultation.consultationType}</TableCell>
                                <TableCell>
                                  <div>
                                    <p className="font-medium">{consultation.preferredDate}</p>
                                    <p className="text-sm text-gray-500">{consultation.preferredTime}</p>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <Badge variant={
                                    consultation.status === 'confirmed' ? 'default' :
                                    consultation.status === 'completed' ? 'secondary' :
                                    consultation.status === 'cancelled' ? 'destructive' : 'outline'
                                  }>
                                    {consultation.status.charAt(0).toUpperCase() + consultation.status.slice(1)}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  {consultation.meetingLink ? (
                                    <a 
                                      href={consultation.meetingLink} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 text-sm"
                                    >
                                      Meeting Link
                                    </a>
                                  ) : (
                                    <span className="text-gray-400 text-sm">No link</span>
                                  )}
                                </TableCell>
                                <TableCell>
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button 
                                        variant="outline" 
                                        size="sm"
                                        onClick={() => {
                                          setSelectedConsultation(consultation);
                                          setConsultationUpdate({
                                            status: consultation.status,
                                            meetingLink: consultation.meetingLink || "",
                                            meetingNotes: consultation.meetingNotes || ""
                                          });
                                        }}
                                      >
                                        <Calendar className="h-4 w-4 mr-1" />
                                        Manage
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                      <DialogHeader>
                                        <DialogTitle>Manage Consultation</DialogTitle>
                                        <DialogDescription>
                                          Update consultation status and provide meeting details
                                        </DialogDescription>
                                      </DialogHeader>
                                      <div className="space-y-4">
                                        <div>
                                          <Label htmlFor="status">Status</Label>
                                          <Select 
                                            value={consultationUpdate.status} 
                                            onValueChange={(value) => setConsultationUpdate(prev => ({ ...prev, status: value }))}
                                          >
                                            <SelectTrigger>
                                              <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                              <SelectItem value="pending">Pending</SelectItem>
                                              <SelectItem value="confirmed">Confirmed</SelectItem>
                                              <SelectItem value="completed">Completed</SelectItem>
                                              <SelectItem value="cancelled">Cancelled</SelectItem>
                                            </SelectContent>
                                          </Select>
                                        </div>
                                        <div>
                                          <Label htmlFor="meetingLink">Meeting Link</Label>
                                          <Input
                                            id="meetingLink"
                                            placeholder="https://zoom.us/j/... or https://meet.google.com/..."
                                            value={consultationUpdate.meetingLink}
                                            onChange={(e) => setConsultationUpdate(prev => ({ ...prev, meetingLink: e.target.value }))}
                                          />
                                        </div>
                                        <div>
                                          <Label htmlFor="meetingNotes">Meeting Notes</Label>
                                          <Textarea
                                            id="meetingNotes"
                                            placeholder="Add any notes or instructions for the student..."
                                            value={consultationUpdate.meetingNotes}
                                            onChange={(e) => setConsultationUpdate(prev => ({ ...prev, meetingNotes: e.target.value }))}
                                            rows={4}
                                          />
                                        </div>
                                        <div className="flex justify-end gap-2">
                                          <Button 
                                            variant="outline" 
                                            onClick={() => {
                                              setSelectedConsultation(null);
                                              setConsultationUpdate({ status: "", meetingLink: "", meetingNotes: "" });
                                            }}
                                          >
                                            Cancel
                                          </Button>
                                          <Button 
                                            onClick={() => updateConsultationMutation.mutate({
                                              consultationId: consultation.id,
                                              status: consultationUpdate.status,
                                              meetingLink: consultationUpdate.meetingLink,
                                              meetingNotes: consultationUpdate.meetingNotes
                                            })}
                                            disabled={updateConsultationMutation.isPending || !consultationUpdate.status}
                                          >
                                            {updateConsultationMutation.isPending ? "Updating..." : "Update Consultation"}
                                          </Button>
                                        </div>
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Document Management</CardTitle>
                    <CardDescription>
                      View all user documents and send document requests to students
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Users with Documents Section */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <FolderOpen className="h-5 w-5" />
                          Users & Documents
                        </h3>
                        <div className="space-y-3">
                          {allUsers
                            .filter(user => user.role === 'user')
                            .map((user) => (
                              <div key={user.id} className="border rounded-lg p-4 space-y-3">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <User className="h-5 w-5 text-gray-500" />
                                    <div>
                                      <p className="font-medium">{user.firstName} {user.lastName}</p>
                                      <p className="text-sm text-gray-500">{user.email}</p>
                                    </div>
                                  </div>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => fetchUserDocumentsMutation.mutate(user.id)}
                                    disabled={fetchUserDocumentsMutation.isPending}
                                  >
                                    <Eye className="h-4 w-4 mr-1" />
                                    View Documents
                                  </Button>
                                </div>
                                
                                <div className="flex items-center justify-between">
                                  <div className="text-sm text-gray-600">
                                    {applications.filter(app => app.userId === user.id).length} application(s)
                                  </div>
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button
                                        variant="default"
                                        size="sm"
                                        onClick={() => setSelectedUser(user)}
                                      >
                                        <Send className="h-4 w-4 mr-1" />
                                        Request Documents
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-md">
                                      <DialogHeader>
                                        <DialogTitle>Request Documents from {user.firstName}</DialogTitle>
                                        <DialogDescription>
                                          Send a document request to the user with specific requirements
                                        </DialogDescription>
                                      </DialogHeader>
                                      <div className="space-y-4">
                                        <div>
                                          <Label htmlFor="subject">Subject</Label>
                                          <Input
                                            id="subject"
                                            placeholder="Document Request Subject"
                                            value={documentRequestData.subject}
                                            onChange={(e) => setDocumentRequestData(prev => ({
                                              ...prev, subject: e.target.value
                                            }))}
                                          />
                                        </div>
                                        <div>
                                          <Label htmlFor="message">Message</Label>
                                          <Textarea
                                            id="message"
                                            placeholder="Please describe what documents are needed..."
                                            value={documentRequestData.message}
                                            onChange={(e) => setDocumentRequestData(prev => ({
                                              ...prev, message: e.target.value
                                            }))}
                                            rows={4}
                                          />
                                        </div>
                                        <div>
                                          <Label>Requested Documents</Label>
                                          <div className="grid grid-cols-1 gap-2 mt-2">
                                            {[
                                              'Passport Document',
                                              'Academic Transcripts',
                                              'English Test Score',
                                              'CV/Resume',
                                              'Statement of Purpose',
                                              'Financial Documents',
                                              'Other'
                                            ].map((doc) => (
                                              <label key={doc} className="flex items-center space-x-2">
                                                <input
                                                  type="checkbox"
                                                  checked={documentRequestData.requestedDocuments.includes(doc)}
                                                  onChange={(e) => {
                                                    if (e.target.checked) {
                                                      setDocumentRequestData(prev => ({
                                                        ...prev,
                                                        requestedDocuments: [...prev.requestedDocuments, doc]
                                                      }));
                                                    } else {
                                                      setDocumentRequestData(prev => ({
                                                        ...prev,
                                                        requestedDocuments: prev.requestedDocuments.filter(d => d !== doc)
                                                      }));
                                                    }
                                                  }}
                                                />
                                                <span className="text-sm">{doc}</span>
                                              </label>
                                            ))}
                                          </div>
                                        </div>
                                        <div className="flex justify-end gap-2">
                                          <Button
                                            variant="outline"
                                            onClick={() => {
                                              setSelectedUser(null);
                                              setDocumentRequestData({ subject: "", message: "", requestedDocuments: [] });
                                            }}
                                          >
                                            Cancel
                                          </Button>
                                          <Button
                                            onClick={() => sendDocumentRequestMutation.mutate({
                                              userId: user.id,
                                              subject: documentRequestData.subject,
                                              message: documentRequestData.message,
                                              requestedDocuments: documentRequestData.requestedDocuments
                                            })}
                                            disabled={sendDocumentRequestMutation.isPending || !documentRequestData.subject || !documentRequestData.message}
                                          >
                                            {sendDocumentRequestMutation.isPending ? "Sending..." : "Send Request"}
                                          </Button>
                                        </div>
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* User Documents View Section */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          Document Details
                        </h3>
                        
                        {userDocuments ? (
                          <div className="border rounded-lg p-4 space-y-4">
                            <div className="flex items-center gap-3">
                              <User className="h-6 w-6 text-gray-500" />
                              <div>
                                <p className="font-medium">{userDocuments.user?.firstName} {userDocuments.user?.lastName}</p>
                                <p className="text-sm text-gray-500">{userDocuments.user?.email}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-gray-600">
                                <p>{userDocuments.applications.length} application(s)</p>
                                <p>{userDocuments.totalDocuments} documents uploaded</p>
                              </div>
                              
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  // Collect all missing documents
                                  const missingDocs: string[] = [];
                                  userDocuments.applications.forEach((app: StudentApplication) => {
                                    [
                                      { key: 'passportDocument', label: 'Passport Document' },
                                      { key: 'academicDocuments', label: 'Academic Documents' },
                                      { key: 'cvResume', label: 'CV/Resume' },
                                      { key: 'statementOfPurpose', label: 'Statement of Purpose' },
                                      { key: 'experienceLetters', label: 'Experience Letters' },
                                      { key: 'englishTestScore', label: 'English Test Score' },
                                      { key: 'nationalIdDoc', label: 'National ID Document' },
                                      { key: 'passportPhoto', label: 'Passport Photo' },
                                      { key: 'birthCertificate', label: 'Birth Certificate' },
                                      { key: 'financialDocuments', label: 'Financial Documents' },
                                      { key: 'additionalDocuments', label: 'Additional Documents' },
                                    ].forEach((field) => {
                                      const hasDocument = app[field.key as keyof StudentApplication];
                                      if (!hasDocument && !missingDocs.includes(field.label)) {
                                        missingDocs.push(field.label);
                                      }
                                    });
                                  });
                                  
                                  if (missingDocs.length > 0) {
                                    // Send the document request immediately
                                    sendDocumentRequestMutation.mutate({
                                      userId: userDocuments.user.id,
                                      applicationId: userDocuments.applications[0]?.id,
                                      subject: `Missing Documents Required - ${missingDocs.length} documents`,
                                      message: `We have reviewed your application and found that the following documents are missing: ${missingDocs.join(', ')}. Please upload these documents to proceed with your application process.`,
                                      requestedDocuments: missingDocs
                                    });
                                  } else {
                                    toast({
                                      title: "All Documents Present",
                                      description: "This user has uploaded all required documents.",
                                    });
                                  }
                                }}
                                className="flex items-center gap-2"
                                disabled={sendDocumentRequestMutation.isPending}
                              >
                                <Send className="h-3 w-3" />
                                {sendDocumentRequestMutation.isPending ? "Sending..." : "Request Missing Documents"}
                              </Button>
                            </div>

                            <ScrollArea className="h-96">
                              <div className="space-y-4">
                                {userDocuments.applications.map((app: StudentApplication) => (
                                  <div key={app.id} className="border rounded-lg p-3 space-y-3">
                                    <div className="flex items-center justify-between">
                                      <h4 className="font-medium">{app.preferredCourse}</h4>
                                      <Badge variant={getStatusVariant(app.status)}>
                                        {app.status?.replace('_', ' ').toUpperCase()}
                                      </Badge>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 gap-2">
                                      {[
                                        { key: 'passportDocument', label: 'Passport Document' },
                                        { key: 'academicDocuments', label: 'Academic Documents' },
                                        { key: 'cvResume', label: 'CV/Resume' },
                                        { key: 'statementOfPurpose', label: 'Statement of Purpose' },
                                        { key: 'experienceLetters', label: 'Experience Letters' },
                                        { key: 'englishTestScore', label: 'English Test Score' },
                                        { key: 'nationalIdDoc', label: 'National ID Document' },
                                        { key: 'passportPhoto', label: 'Passport Photo' },
                                        { key: 'birthCertificate', label: 'Birth Certificate' },
                                        { key: 'financialDocuments', label: 'Financial Documents' },
                                        { key: 'additionalDocuments', label: 'Additional Documents' },
                                      ].map((field) => {
                                        const hasDocument = app[field.key as keyof StudentApplication];
                                        return (
                                          <div key={field.key} className="flex items-center justify-between text-sm">
                                            <span>{field.label}</span>
                                            {hasDocument ? (
                                              <div className="flex items-center gap-2">
                                                <Badge variant="default" className="text-xs">
                                                  <CheckCircle className="h-3 w-3 mr-1" />
                                                  Uploaded
                                                </Badge>
                                                <Button 
                                                  variant="outline" 
                                                  size="sm"
                                                  onClick={() => {
                                                    const token = localStorage.getItem("token");
                                                    const fileUrl = `/api/files/applications/${app.userId}/${encodeURIComponent(String(hasDocument))}`;
                                                    window.open(`${fileUrl}?token=${token}`, '_blank');
                                                  }}
                                                >
                                                  <Download className="h-3 w-3" />
                                                </Button>
                                              </div>
                                            ) : (
                                              <div className="flex items-center gap-2">
                                                <Badge variant="secondary" className="text-xs">
                                                  <XCircle className="h-3 w-3 mr-1" />
                                                  Missing
                                                </Badge>
                                                <Button
                                                  variant="outline"
                                                  size="sm"
                                                  className="text-xs h-6"
                                                  onClick={() => {
                                                    // Send individual document request immediately
                                                    sendDocumentRequestMutation.mutate({
                                                      userId: userDocuments.user.id,
                                                      applicationId: app.id,
                                                      subject: `Missing Document Request: ${field.label}`,
                                                      message: `We noticed that your ${field.label} is missing from your application. Please upload this document at your earliest convenience to proceed with your application.`,
                                                      requestedDocuments: [field.label]
                                                    });
                                                  }}
                                                  disabled={sendDocumentRequestMutation.isPending}
                                                >
                                                  {sendDocumentRequestMutation.isPending ? "..." : "Request"}
                                                </Button>
                                              </div>
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </ScrollArea>
                          </div>
                        ) : (
                          <div className="border rounded-lg p-8 text-center text-gray-500">
                            <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                            <p>Select a user to view their documents</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Document Messages History */}
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <MessageSquare className="h-5 w-5" />
                        Document Messages History
                      </h3>
                      
                      {documentMessages.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                          <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                          <p>No document messages sent yet</p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {/* Admin Requests Section */}
                          <div>
                            <h4 className="text-md font-medium mb-3 flex items-center gap-2">
                              <Send className="h-4 w-4" />
                              Admin Requests
                            </h4>
                            <div className="space-y-3 max-h-96 overflow-y-auto">
                              {documentMessages
                                .filter(message => message.senderType === 'admin')
                                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                                .slice(0, 10)
                                .map((message) => (
                                <div key={message.id} className="border rounded-lg p-3 bg-gray-50">
                                  <div className="flex items-center justify-between mb-2">
                                    <h5 className="font-medium text-sm">{message.subject}</h5>
                                    <div className="flex items-center gap-1">
                                      <Badge variant={message.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                                        {message.status}
                                      </Badge>
                                      <span className="text-xs text-gray-500">
                                        {format(new Date(message.createdAt), "MMM dd")}
                                      </span>
                                    </div>
                                  </div>
                                  <p className="text-xs text-gray-600 mb-2">{message.message}</p>
                                  {message.requestedDocuments && message.requestedDocuments.length > 0 && (
                                    <div className="text-xs text-gray-500">
                                      <strong>Requested:</strong> {message.requestedDocuments.join(', ')}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* User Responses Section */}
                          <div>
                            <h4 className="text-md font-medium mb-3 flex items-center gap-2">
                              <User className="h-4 w-4" />
                              User Responses
                            </h4>
                            <div className="space-y-3 max-h-96 overflow-y-auto">
                              {documentMessages
                                .filter(message => message.senderType === 'user')
                                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                                .slice(0, 10)
                                .map((message) => (
                                <div key={message.id} className="border rounded-lg p-3 bg-blue-50 border-blue-200">
                                  <div className="flex items-center justify-between mb-2">
                                    <h5 className="font-medium text-sm">{message.subject}</h5>
                                    <div className="flex items-center gap-1">
                                      <Badge variant="outline" className="text-xs">
                                        Response
                                      </Badge>
                                      <span className="text-xs text-gray-500">
                                        {format(new Date(message.createdAt), "MMM dd")}
                                      </span>
                                    </div>
                                  </div>
                                  <p className="text-xs text-gray-700 mb-2">{message.message}</p>
                                  
                                  {/* Show uploaded files for user responses */}
                                  {message.attachments && message.attachments.length > 0 && (
                                    <div className="text-xs text-green-700 bg-green-50 p-2 rounded mt-2">
                                      <strong>Uploaded Files ({message.attachments.length}):</strong>
                                      <div className="mt-1 space-y-1">
                                        {message.attachments.map((file, index) => (
                                          <div key={index} className="flex items-center gap-2">
                                            <FileText className="h-3 w-3" />
                                            <span className="text-xs">{file}</span>
                                            <Button 
                                              variant="ghost" 
                                              size="sm"
                                              className="h-4 w-4 p-0"
                                              onClick={() => {
                                                const token = localStorage.getItem("token");
                                                const fileUrl = `/api/files/applications/${message.userId}/${encodeURIComponent(file)}`;
                                                window.open(`${fileUrl}?token=${token}`, '_blank');
                                              }}
                                            >
                                              <Download className="h-3 w-3" />
                                            </Button>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  
                                  {/* Action buttons for user responses */}
                                  <div className="flex justify-end gap-2 mt-2">
                                    {message.status !== 'completed' && (
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-xs h-6"
                                        onClick={() => updateMessageStatusMutation.mutate({ 
                                          messageId: message.id, 
                                          status: 'viewed' 
                                        })}
                                      >
                                        <Eye className="h-3 w-3 mr-1" />
                                        Mark as Viewed
                                      </Button>
                                    )}
                                    {message.status === 'viewed' && (
                                      <Button
                                        variant="default"
                                        size="sm"
                                        className="text-xs h-6"
                                        onClick={() => updateMessageStatusMutation.mutate({ 
                                          messageId: message.id, 
                                          status: 'completed' 
                                        })}
                                      >
                                        <CheckCircle className="h-3 w-3 mr-1" />
                                        Mark as Complete
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="users" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        User Management
                      </span>
                      <Dialog open={isCreateUserOpen} onOpenChange={setIsCreateUserOpen}>
                        <DialogTrigger asChild>
                          <Button>
                            <User className="h-4 w-4 mr-2" />
                            Create User
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Create New User</DialogTitle>
                            <DialogDescription>
                              Add a new user to the system with appropriate role and permissions.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                  id="firstName"
                                  value={newUserData.firstName}
                                  onChange={(e) => setNewUserData({ ...newUserData, firstName: e.target.value })}
                                  placeholder="Enter first name"
                                />
                              </div>
                              <div>
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input
                                  id="lastName"
                                  value={newUserData.lastName}
                                  onChange={(e) => setNewUserData({ ...newUserData, lastName: e.target.value })}
                                  placeholder="Enter last name"
                                />
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="username">Username</Label>
                              <Input
                                id="username"
                                value={newUserData.username}
                                onChange={(e) => setNewUserData({ ...newUserData, username: e.target.value })}
                                placeholder="Enter username"
                              />
                            </div>
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                type="email"
                                value={newUserData.email}
                                onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
                                placeholder="Enter email address"
                              />
                            </div>
                            <div>
                              <Label htmlFor="password">Password</Label>
                              <Input
                                id="password"
                                type="password"
                                value={newUserData.password}
                                onChange={(e) => setNewUserData({ ...newUserData, password: e.target.value })}
                                placeholder="Enter password"
                              />
                            </div>
                            <div>
                              <Label htmlFor="role">Role</Label>
                              <Select value={newUserData.role} onValueChange={(value) => setNewUserData({ ...newUserData, role: value })}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="user">User</SelectItem>
                                  <SelectItem value="admin">Admin</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" onClick={() => setIsCreateUserOpen(false)}>
                                Cancel
                              </Button>
                              <Button
                                onClick={() => createUserMutation.mutate(newUserData)}
                                disabled={createUserMutation.isPending}
                              >
                                {createUserMutation.isPending ? "Creating..." : "Create User"}
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardTitle>
                    <CardDescription>
                      Manage registered users, their roles, and account settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Search and Filter Controls */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                      <div className="flex-1">
                        <Input
                          placeholder="Search users by name, email, or username..."
                          value={userSearchTerm}
                          onChange={(e) => setUserSearchTerm(e.target.value)}
                          className="w-full"
                        />
                      </div>
                      <div className="w-full sm:w-48">
                        <Select value={selectedUserRole} onValueChange={setSelectedUserRole}>
                          <SelectTrigger>
                            <SelectValue placeholder="Filter by role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Roles</SelectItem>
                            <SelectItem value="user">Users</SelectItem>
                            <SelectItem value="admin">Admins</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Users Table */}
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Username</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Joined</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredUsers.map((user) => (
                            <TableRow key={user.id}>
                              <TableCell className="font-medium">
                                {user.firstName} {user.lastName}
                              </TableCell>
                              <TableCell>{user.email}</TableCell>
                              <TableCell>{user.username}</TableCell>
                              <TableCell>
                                <Badge className={getRoleColor(user.role)}>
                                  {user.role}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className={user.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                                  {user.isActive ? "Active" : "Inactive"}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                {user.createdAt ? format(new Date(user.createdAt), "MMM dd, yyyy") : "Unknown"}
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleEditUser(user)}
                                  >
                                    Edit
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handlePasswordReset(user)}
                                  >
                                    Reset Password
                                  </Button>
                                  {user.id !== 1 && (
                                    <Button
                                      variant="destructive"
                                      size="sm"
                                      onClick={() => handleDeleteUser(user)}
                                      disabled={deleteUserMutation.isPending}
                                    >
                                      Delete
                                    </Button>
                                  )}
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      {filteredUsers.length === 0 && (
                        <div className="text-center py-8">
                          <Users className="mx-auto h-12 w-12 text-gray-400" />
                          <p className="mt-2 text-sm text-gray-500">
                            {userSearchTerm || selectedUserRole !== "all" 
                              ? "No users match your search criteria" 
                              : "No users found"
                            }
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Edit User Dialog */}
                <Dialog open={isEditUserOpen} onOpenChange={setIsEditUserOpen}>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit User</DialogTitle>
                      <DialogDescription>
                        Update user information and role settings.
                      </DialogDescription>
                    </DialogHeader>
                    {editingUser && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="editFirstName">First Name</Label>
                            <Input
                              id="editFirstName"
                              value={editUserData.firstName}
                              onChange={(e) => setEditUserData({ ...editUserData, firstName: e.target.value })}
                            />
                          </div>
                          <div>
                            <Label htmlFor="editLastName">Last Name</Label>
                            <Input
                              id="editLastName"
                              value={editUserData.lastName}
                              onChange={(e) => setEditUserData({ ...editUserData, lastName: e.target.value })}
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="editEmail">Email</Label>
                          <Input
                            id="editEmail"
                            type="email"
                            value={editUserData.email}
                            onChange={(e) => setEditUserData({ ...editUserData, email: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="editRole">Role</Label>
                          <Select value={editUserData.role} onValueChange={(value) => setEditUserData({ ...editUserData, role: value })}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="user">User</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => setIsEditUserOpen(false)}>
                            Cancel
                          </Button>
                          <Button
                            onClick={() => updateUserMutation.mutate({ userId: editingUser.id, userData: editUserData })}
                            disabled={updateUserMutation.isPending}
                          >
                            {updateUserMutation.isPending ? "Updating..." : "Update User"}
                          </Button>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>

                {/* Password Reset Dialog */}
                <Dialog open={isPasswordResetOpen} onOpenChange={setIsPasswordResetOpen}>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Reset User Password</DialogTitle>
                      <DialogDescription>
                        Set a new password for {passwordResetUser?.firstName} {passwordResetUser?.lastName}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          value={passwordResetData.newPassword}
                          onChange={(e) => setPasswordResetData({ ...passwordResetData, newPassword: e.target.value })}
                          placeholder="Enter new password"
                        />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={passwordResetData.confirmPassword}
                          onChange={(e) => setPasswordResetData({ ...passwordResetData, confirmPassword: e.target.value })}
                          placeholder="Confirm new password"
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setIsPasswordResetOpen(false)}>
                          Cancel
                        </Button>
                        <Button
                          onClick={() => {
                            if (passwordResetData.newPassword !== passwordResetData.confirmPassword) {
                              toast({
                                title: "Error",
                                description: "Passwords do not match",
                                variant: "destructive",
                              });
                              return;
                            }
                            if (passwordResetUser) {
                              resetPasswordMutation.mutate({ 
                                userId: passwordResetUser.id, 
                                password: passwordResetData.newPassword 
                              });
                            }
                          }}
                          disabled={resetPasswordMutation.isPending || !passwordResetData.newPassword || !passwordResetData.confirmPassword}
                        >
                          {resetPasswordMutation.isPending ? "Resetting..." : "Reset Password"}
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </TabsContent>

              <TabsContent value="notices" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Notice Board Management</CardTitle>
                    <CardDescription>Create and manage notices visible to all users</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Create New Notice Form */}
                    <div className="border rounded-lg p-4">
                      <h3 className="text-lg font-medium mb-4">Create New Notice</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="notice-title">Title</Label>
                          <Input
                            id="notice-title"
                            value={newNotice.title}
                            onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                            placeholder="Enter notice title"
                          />
                        </div>
                        <div>
                          <Label htmlFor="notice-message">Message</Label>
                          <Textarea
                            id="notice-message"
                            value={newNotice.message}
                            onChange={(e) => setNewNotice({ ...newNotice, message: e.target.value })}
                            placeholder="Enter notice message"
                            rows={4}
                          />
                        </div>
                        <div>
                          <Label htmlFor="notice-type">Type</Label>
                          <Select
                            value={newNotice.type}
                            onValueChange={(value) => setNewNotice({ ...newNotice, type: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select notice type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="info">Info</SelectItem>
                              <SelectItem value="warning">Warning</SelectItem>
                              <SelectItem value="success">Success</SelectItem>
                              <SelectItem value="urgent">Urgent</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button
                          onClick={() => createNoticeMutation.mutate(newNotice)}
                          disabled={!newNotice.title || !newNotice.message || createNoticeMutation.isPending}
                          className="w-full"
                        >
                          {createNoticeMutation.isPending ? "Creating..." : "Create Notice"}
                        </Button>
                      </div>
                    </div>

                    {/* Existing Notices */}
                    <div>
                      <h3 className="text-lg font-medium mb-4">Existing Notices</h3>
                      {notices.length === 0 ? (
                        <div className="text-center py-8">
                          <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                          <p className="mt-1 text-sm text-gray-500">No notices created yet</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {notices.map((notice: any) => (
                            <Card key={notice.id} className="relative">
                              <CardContent className="pt-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-2">
                                      <h4 className="font-semibold">{notice.title}</h4>
                                      <Badge
                                        variant={
                                          notice.type === "urgent" ? "destructive" :
                                          notice.type === "warning" ? "secondary" :
                                          notice.type === "success" ? "default" : "outline"
                                        }
                                      >
                                        {notice.type}
                                      </Badge>
                                      {notice.isActive && (
                                        <Badge variant="outline" className="text-green-600">Active</Badge>
                                      )}
                                    </div>
                                    <p className="text-gray-600 mb-2">{notice.message}</p>
                                    <p className="text-xs text-gray-500">
                                      Created: {new Date(notice.createdAt).toLocaleDateString()}
                                    </p>
                                  </div>
                                  <div className="flex space-x-2">
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => setEditingNotice(notice)}
                                    >
                                      Edit
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => updateNoticeMutation.mutate({
                                        noticeId: notice.id,
                                        updates: { isActive: !notice.isActive }
                                      })}
                                      disabled={updateNoticeMutation.isPending}
                                    >
                                      {notice.isActive ? "Hide" : "Show"}
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="destructive"
                                      onClick={() => {
                                        if (confirm("Are you sure you want to delete this notice?")) {
                                          deleteNoticeMutation.mutate(notice.id);
                                        }
                                      }}
                                      disabled={deleteNoticeMutation.isPending}
                                    >
                                      Delete
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Edit Notice Dialog */}
                {editingNotice && (
                  <Dialog open={!!editingNotice} onOpenChange={() => setEditingNotice(null)}>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Notice</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="edit-title">Title</Label>
                          <Input
                            id="edit-title"
                            value={editingNotice.title}
                            onChange={(e) => setEditingNotice({ ...editingNotice, title: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="edit-message">Message</Label>
                          <Textarea
                            id="edit-message"
                            value={editingNotice.message}
                            onChange={(e) => setEditingNotice({ ...editingNotice, message: e.target.value })}
                            rows={4}
                          />
                        </div>
                        <div>
                          <Label htmlFor="edit-type">Type</Label>
                          <Select
                            value={editingNotice.type}
                            onValueChange={(value) => setEditingNotice({ ...editingNotice, type: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="info">Info</SelectItem>
                              <SelectItem value="warning">Warning</SelectItem>
                              <SelectItem value="success">Success</SelectItem>
                              <SelectItem value="urgent">Urgent</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            onClick={() => updateNoticeMutation.mutate({
                              noticeId: editingNotice.id,
                              updates: {
                                title: editingNotice.title,
                                message: editingNotice.message,
                                type: editingNotice.type
                              }
                            })}
                            disabled={updateNoticeMutation.isPending}
                            className="flex-1"
                          >
                            {updateNoticeMutation.isPending ? "Updating..." : "Update Notice"}
                          </Button>
                          <Button variant="outline" onClick={() => setEditingNotice(null)}>
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      Notification History
                    </CardTitle>
                    <CardDescription>
                      View and manage all system notifications and user communications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Filters and Search */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div>
                        <Input
                          placeholder="Search notifications..."
                          value={notificationSearchTerm}
                          onChange={(e) => setNotificationSearchTerm(e.target.value)}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Select value={selectedNotificationType} onValueChange={setSelectedNotificationType}>
                          <SelectTrigger>
                            <SelectValue placeholder="Filter by type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Types</SelectItem>
                            <SelectItem value="application_status">Application Status</SelectItem>
                            <SelectItem value="appointment">Appointment</SelectItem>
                            <SelectItem value="document_request">Document Request</SelectItem>
                            <SelectItem value="general">General</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Select value={selectedNotificationStatus} onValueChange={setSelectedNotificationStatus}>
                          <SelectTrigger>
                            <SelectValue placeholder="Filter by status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="read">Read</SelectItem>
                            <SelectItem value="unread">Unread</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Date range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Time</SelectItem>
                            <SelectItem value="today">Today</SelectItem>
                            <SelectItem value="week">Last Week</SelectItem>
                            <SelectItem value="month">Last Month</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Notification Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{notificationHistory.length}</div>
                            <div className="text-sm text-gray-500">Total Notifications</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-red-600">
                              {notificationHistory.filter(n => !n.read).length}
                            </div>
                            <div className="text-sm text-gray-500">Unread</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">
                              {notificationHistory.filter(n => n.read).length}
                            </div>
                            <div className="text-sm text-gray-500">Read</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-orange-600">
                              {notificationHistory.filter(n => n.type === "application_status").length}
                            </div>
                            <div className="text-sm text-gray-500">Application Updates</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Notifications Table */}
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>User</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredNotifications.map((notification) => {
                            const user = allUsers.find(u => u.id === notification.userId);
                            return (
                              <TableRow key={notification.id} className={!notification.read ? "bg-blue-50" : ""}>
                                <TableCell className="font-medium">
                                  <div className="max-w-xs truncate" title={notification.title}>
                                    {notification.title}
                                  </div>
                                  {!notification.read && (
                                    <Badge className="bg-red-100 text-red-800 text-xs ml-2">New</Badge>
                                  )}
                                </TableCell>
                                <TableCell>
                                  <Badge className={getNotificationTypeColor(notification.type)}>
                                    {notification.type.replace('_', ' ').toUpperCase()}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  {user ? `${user.firstName} ${user.lastName}` : `User ID: ${notification.userId}`}
                                </TableCell>
                                <TableCell>
                                  <Badge className={getNotificationStatusColor(notification.read)}>
                                    {notification.read ? "Read" : "Unread"}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  {format(new Date(notification.createdAt), "MMM dd, yyyy HH:mm")}
                                </TableCell>
                                <TableCell className="text-right">
                                  <div className="flex justify-end gap-2">
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => handleViewNotificationDetails(notification)}
                                    >
                                      View
                                    </Button>
                                    {!notification.read && (
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => markNotificationReadMutation.mutate(notification.id)}
                                        disabled={markNotificationReadMutation.isPending}
                                      >
                                        Mark Read
                                      </Button>
                                    )}
                                    <Button
                                      variant="destructive"
                                      size="sm"
                                      onClick={() => {
                                        if (window.confirm("Are you sure you want to delete this notification?")) {
                                          deleteNotificationMutation.mutate(notification.id);
                                        }
                                      }}
                                      disabled={deleteNotificationMutation.isPending}
                                    >
                                      Delete
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                      {filteredNotifications.length === 0 && (
                        <div className="text-center py-8">
                          <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                          <p className="mt-2 text-sm text-gray-500">
                            {notificationSearchTerm || selectedNotificationType !== "all" || selectedNotificationStatus !== "all" || selectedDateRange !== "all"
                              ? "No notifications match your search criteria"
                              : "No notifications found"
                            }
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Notification Details Dialog */}
                <Dialog open={isNotificationDetailsOpen} onOpenChange={setIsNotificationDetailsOpen}>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Notification Details</DialogTitle>
                      <DialogDescription>
                        Full notification information and context
                      </DialogDescription>
                    </DialogHeader>
                    {selectedNotification && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm font-medium text-gray-500">Type</Label>
                            <div className="mt-1">
                              <Badge className={getNotificationTypeColor(selectedNotification.type)}>
                                {selectedNotification.type.replace('_', ' ').toUpperCase()}
                              </Badge>
                            </div>
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-gray-500">Status</Label>
                            <div className="mt-1">
                              <Badge className={getNotificationStatusColor(selectedNotification.read)}>
                                {selectedNotification.read ? "Read" : "Unread"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <Label className="text-sm font-medium text-gray-500">Recipient</Label>
                          <div className="mt-1 text-sm">
                            {(() => {
                              const user = allUsers.find(u => u.id === selectedNotification.userId);
                              return user ? `${user.firstName} ${user.lastName} (${user.email})` : `User ID: ${selectedNotification.userId}`;
                            })()}
                          </div>
                        </div>

                        <div>
                          <Label className="text-sm font-medium text-gray-500">Title</Label>
                          <div className="mt-1 text-sm font-medium">{selectedNotification.title}</div>
                        </div>

                        <div>
                          <Label className="text-sm font-medium text-gray-500">Message</Label>
                          <div className="mt-1 p-4 bg-gray-50 rounded-lg text-sm whitespace-pre-wrap">
                            {selectedNotification.message}
                          </div>
                        </div>

                        {selectedNotification.relatedEntityId && selectedNotification.relatedEntityType && (
                          <div>
                            <Label className="text-sm font-medium text-gray-500">Related Entity</Label>
                            <div className="mt-1 text-sm">
                              {selectedNotification.relatedEntityType.charAt(0).toUpperCase() + selectedNotification.relatedEntityType.slice(1)} ID: {selectedNotification.relatedEntityId}
                            </div>
                          </div>
                        )}

                        <div>
                          <Label className="text-sm font-medium text-gray-500">Created</Label>
                          <div className="mt-1 text-sm">
                            {format(new Date(selectedNotification.createdAt), "MMMM dd, yyyy 'at' HH:mm")}
                          </div>
                        </div>

                        <div className="flex justify-end gap-2 pt-4">
                          {!selectedNotification.read && (
                            <Button
                              variant="outline"
                              onClick={() => {
                                markNotificationReadMutation.mutate(selectedNotification.id);
                                setIsNotificationDetailsOpen(false);
                              }}
                              disabled={markNotificationReadMutation.isPending}
                            >
                              Mark as Read
                            </Button>
                          )}
                          <Button
                            variant="destructive"
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this notification?")) {
                                deleteNotificationMutation.mutate(selectedNotification.id);
                                setIsNotificationDetailsOpen(false);
                              }
                            }}
                            disabled={deleteNotificationMutation.isPending}
                          >
                            Delete Notification
                          </Button>
                          <Button onClick={() => setIsNotificationDetailsOpen(false)}>
                            Close
                          </Button>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}

// Component to display detailed application information
function ApplicationDetailsView({ application }: { application: StudentApplication }) {
  const documentFields = [
    { key: 'passportDocument', label: 'Passport Document' },
    { key: 'academicDocuments', label: 'Academic Documents' },
    { key: 'cvResume', label: 'CV/Resume' },
    { key: 'statementOfPurpose', label: 'Statement of Purpose' },
    { key: 'experienceLetters', label: 'Experience Letters' },
    { key: 'englishTestScore', label: 'English Test Score' },
    { key: 'nationalIdDoc', label: 'National ID Document' },
    { key: 'passportPhoto', label: 'Passport Photo' },
    { key: 'birthCertificate', label: 'Birth Certificate' },
    { key: 'financialDocuments', label: 'Financial Documents' },
    { key: 'additionalDocuments', label: 'Additional Documents' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-lg mb-3">Personal Information</h3>
          <div className="space-y-2 text-sm">
            <div><strong>Full Name:</strong> {application.fullName}</div>
            <div><strong>Email:</strong> {application.email}</div>
            <div><strong>Phone:</strong> {application.contactNumber}</div>
            <div><strong>Date of Birth:</strong> {application.dateOfBirth}</div>
            <div><strong>Nationality:</strong> {application.nationality}</div>
            <div><strong>Passport Number:</strong> {application.passportNumber}</div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-3">Study Preferences</h3>
          <div className="space-y-2 text-sm">
            <div><strong>Preferred Course:</strong> {application.preferredCourse}</div>
            <div><strong>Countries:</strong> {application.preferredCountries}</div>
            <div><strong>City:</strong> {application.preferredCity}</div>
            <div><strong>Study Level:</strong> {application.studyLevel}</div>
            <div><strong>Budget:</strong> {application.budget} {application.budgetCurrency}</div>
            <div><strong>Intake:</strong> {application.preferredIntake}</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-3">Uploaded Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {documentFields.map((field) => {
            const hasDocument = application[field.key as keyof StudentApplication];
            
            // Special handling for additional documents
            if (field.key === 'additionalDocuments') {
              const metadata = application.additionalDocumentsMetadata;
              
              return (
                <div key={field.key} className="col-span-full border rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-4 w-4" />
                    <span className="text-sm font-medium">{field.label}</span>
                  </div>
                  {metadata && Array.isArray(metadata) && metadata.length > 0 ? (
                    <div className="space-y-2">
                      {metadata.map((doc: any, index: number) => (
                        <div key={index} className="bg-gray-50 p-2 rounded text-sm">
                          <div className="font-medium">{doc.name}</div>
                          {doc.notes && <div className="text-gray-600 text-xs mt-1">{doc.notes}</div>}
                          <div className="text-xs text-gray-500 mt-1">
                            {doc.files?.length || 0} file(s) uploaded
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : hasDocument ? (
                    <div className="text-sm text-gray-600">Files uploaded but metadata unavailable</div>
                  ) : (
                    <div className="text-sm text-gray-500">No additional documents</div>
                  )}
                </div>
              );
            }
            
            return (
              <div key={field.key} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">{field.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {hasDocument ? (
                    <>
                      <Badge variant="default">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Uploaded
                      </Badge>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          const token = localStorage.getItem("token");
                          // Handle comma-separated filenames for multiple files
                          const filenames = hasDocument.toString().split(',');
                          const fileUrl = `/api/files/applications/${application.userId}/${encodeURIComponent(filenames[0])}`;
                          window.open(`${fileUrl}?token=${token}`, '_blank');
                        }}
                      >
                        <Download className="h-3 w-3" />
                      </Button>
                    </>
                  ) : (
                    <Badge variant="secondary">
                      <XCircle className="h-3 w-3 mr-1" />
                      Not Uploaded
                    </Badge>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {application.additionalInfo && (
        <div>
          <h3 className="font-semibold text-lg mb-3">Additional Information</h3>
          <div className="p-3 bg-gray-50 rounded-lg text-sm">
            {application.additionalInfo}
          </div>
        </div>
      )}
    </div>
  );
}