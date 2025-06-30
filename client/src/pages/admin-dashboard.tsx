import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Users,
  FileText,
  Calendar,
  GraduationCap,
  Eye,
  Plus,
  Edit,
  Trash2,
  School,
  UserCheck,
  Clock,
  AlertCircle,
  Activity,
  TrendingUp,
  Settings,
  Search,
  Filter,
  Download,
  Bell,
  UserPlus,
  BarChart3,
  Globe,
  Mail,
  Key, // Add Key here
} from "lucide-react";
import { useAuthState } from "@/hooks/useAuth";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/header";

interface DashboardStats {
  totalInquiries: number;
  totalStudents: number;
  totalAppointments: number;
  totalApplications: number;
}

interface ContactInquiry {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination?: string;
  message?: string;
  createdAt: string;
}

interface Appointment {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  consultationType: string;
  message?: string;
  status: string;
  createdAt: string;
}

interface User {
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: string;
  createdAt: string;
}

interface University {
  id: number;
  name: string;
  country: string;
  city: string;
  ranking: number;
  tuitionFee: string;
  requirements: string;
  createdAt: string;
}

interface StudentApplication {
  id: number;
  fullName: string;
  email: string;
  preferredCountries: string;
  studyLevel: string;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const { user, isAuthenticated, isAdmin } = useAuthState();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Mutation for creating university
  const createUniversityMutation = useMutation({
    mutationFn: async (universityData: any) => {
      const token = localStorage.getItem("token");
      const response = await fetch('/api/admin/universities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(universityData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create university');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/universities"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/dashboard"] });
      toast({
        title: "Success",
        description: "University created successfully",
      });
      setIsAddUniversityDialogOpen(false);
      setNewUniversity({
        countryId: "",
        name: "",
        country: "",
        flag: "",
        city: "",
        ranking: "",
        tuitionFee: "",
        requirements: "",
        programs: "",
        students: "",
        image: "",
        description: "",
        highlights: "",
        topUniversities: "",
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
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedUniversity, setSelectedUniversity] =
    useState<University | null>(null);
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false);
  const [isUniversityDialogOpen, setIsUniversityDialogOpen] = useState(false);
  // [cite_start]; // [cite: 16] Add these new state variables below your existing ones
  const [isResetPasswordDialogOpen, setIsResetPasswordDialogOpen] =
    useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [selectedUserForPasswordReset, setSelectedUserForPasswordReset] =
    useState<User | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "user",
  });

  // Authentication check
  useEffect(() => {
    if (!isAuthenticated) {
      setLocation("/login");
      return;
    }
    if (!isAdmin) {
      toast({
        title: "Access Denied",
        description: "You don't have permission to access the admin dashboard.",
        variant: "destructive",
      });
      setLocation("/");
      return;
    }
  }, [isAuthenticated, isAdmin, setLocation, toast]);

  // Fetch dashboard data
  const { data: dashboardData, isLoading } = useQuery({
    queryKey: ["/api/admin/dashboard"],
    enabled: isAuthenticated && isAdmin,
    retry: false,
  });

  // Fetch users
  const { data: users = [], isLoading: usersLoading } = useQuery<User[]>({
    queryKey: ["/api/admin/users"],
    enabled: isAuthenticated && isAdmin,
    retry: false,
  });

  // Fetch universities
  const { data: universities = [] } = useQuery<University[]>({
    queryKey: ["/api/admin/universities"],
    enabled: isAuthenticated && isAdmin,
    retry: false,
  });

  // Fetch student applications
  const { data: studentApplications = [] } = useQuery<StudentApplication[]>({
    queryKey: ["/api/admin/student-applications"],
    enabled: isAuthenticated && isAdmin,
    retry: false,
  });

  const stats = (dashboardData as any)?.stats || {
    totalInquiries: 0,
    totalStudents: 0,
    totalAppointments: 0,
    totalApplications: 0,
  };

  const inquiries = (dashboardData as any)?.inquiries || [];
  const appointments = (dashboardData as any)?.appointments || [];

  console.log("Dashboard render state:", {
    isLoading,
    isAuthenticated,
    isAdmin,
    hasStats: !!stats,
    hasUsers: users.length,
    hasUniversities: universities.length,
    hasApplications: studentApplications.length,
  });

  // Mutations for user management
  const updateUserMutation = useMutation({
    mutationFn: async (userData: { id: number; role: string }) => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/admin/users/${userData.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ role: userData.role }),
      });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      toast({
        title: "Success",
        description: "User updated successfully",
      });
      setIsUserDialogOpen(false);
      setSelectedUser(null);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update user",
        variant: "destructive",
      });
    },
  });

  // Mutations for application status updates
  const updateApplicationMutation = useMutation({
    mutationFn: async (data: { id: number; status: string }) => {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `/api/admin/student-applications/${data.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: data.status }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to update application");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["/api/admin/student-applications"],
      });
      toast({
        title: "Success",
        description: "Application status updated successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update application status",
        variant: "destructive",
      });
    },
  });

  // Mutation for creating new user
  const createUserMutation = useMutation({
    mutationFn: async (userData: typeof newUser) => {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/admin/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create user");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/dashboard"] });
      toast({
        title: "Success",
        description: "User created successfully",
      });
      setIsAddUserDialogOpen(false);
      setNewUser({
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        role: "user",
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

  // Mutation for deleting user
  const deleteUserMutation = useMutation({
    mutationFn: async (userId: number) => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to delete user");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/dashboard"] });
      toast({
        title: "Success",
        description: "User deleted successfully",
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

  //[cite_start]// [cite: 1] Below your existing mutations
  const resetPasswordMutation = useMutation({
    mutationFn: async (data: { id: number; password: string }) => {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `/api/admin/users/${data.id}/reset-password`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ password: data.password }),
        },
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to reset password");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      toast({
        title: "Success", // [cite: 30]
        description: "User password reset successfully",
      });
      setIsResetPasswordDialogOpen(false);
      setNewPassword("");
      setConfirmNewPassword("");
      setSelectedUserForPasswordReset(null);
    },
    onError: (error: Error) => {
      toast({
        title: "Error", // [cite: 31]
        description: error.message,
        variant: "destructive", // [cite: 31]
      });
    },
  });

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user: User) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.firstName &&
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.lastName &&
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <div className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Dashboard Header */}
      <div className="pt-24 pb-8 bg-gradient-to-r from-navy via-blue-900 to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h1 className="text-4xl font-bold text-white mb-2">
                Admin Dashboard
              </h1>
              <p className="text-blue-100 text-lg">
                Welcome back, {user?.firstName || user?.username}
              </p>
              <p className="text-blue-200 text-sm mt-1">
                Manage your education platform with comprehensive tools
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <TabsList className="grid w-full sm:w-auto grid-cols-2 lg:grid-cols-4 bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="users" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Users
              </TabsTrigger>
              <TabsTrigger
                value="applications"
                className="flex items-center gap-2"
              >
                <GraduationCap className="h-4 w-4" />
                Applications
              </TabsTrigger>
              <TabsTrigger
                value="universities"
                className="flex items-center gap-2"
              >
                <School className="h-4 w-4" />
                Universities
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/80 backdrop-blur-sm border-gray-200"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/80 backdrop-blur-sm"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="overview" className="space-y-8">
            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-6 translate-x-6"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm font-medium">
                        Contact Inquiries
                      </p>
                      <p className="text-3xl font-bold">
                        {stats.totalInquiries}
                      </p>
                      <p className="text-blue-200 text-xs mt-1">
                        +12% from last month
                      </p>
                    </div>
                    <div className="p-3 bg-white/20 rounded-xl">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-6 translate-x-6"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm font-medium">
                        Total Users
                      </p>
                      <p className="text-3xl font-bold">{users.length}</p>
                      <p className="text-green-200 text-xs mt-1">
                        +5% from last month
                      </p>
                    </div>
                    <div className="p-3 bg-white/20 rounded-xl">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-6 translate-x-6"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm font-medium">
                        Appointments
                      </p>
                      <p className="text-3xl font-bold">
                        {stats.totalAppointments}
                      </p>
                      <p className="text-orange-200 text-xs mt-1">
                        +8% from last month
                      </p>
                    </div>
                    <div className="p-3 bg-white/20 rounded-xl">
                      <Calendar className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-6 translate-x-6"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm font-medium">
                        Applications
                      </p>
                      <p className="text-3xl font-bold">
                        {studentApplications.length}
                      </p>
                      <p className="text-purple-200 text-xs mt-1">
                        +15% from last month
                      </p>
                    </div>
                    <div className="p-3 bg-white/20 rounded-xl">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-navy">
                  <Activity className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
                <CardDescription>
                  Frequently used administrative actions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button
                    variant="outline"
                    className="h-24 flex flex-col items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 border-blue-200"
                    onClick={() => setActiveTab("users")}
                  >
                    <UserPlus className="h-6 w-6 text-blue-600" />
                    <span className="text-sm font-medium">Manage Users</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-24 flex flex-col items-center justify-center gap-2 bg-green-50 hover:bg-green-100 border-green-200"
                    onClick={() => setActiveTab("applications")}
                  >
                    <FileText className="h-6 w-6 text-green-600" />
                    <span className="text-sm font-medium">
                      Review Applications
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-24 flex flex-col items-center justify-center gap-2 bg-orange-50 hover:bg-orange-100 border-orange-200"
                  >
                    <Calendar className="h-6 w-6 text-orange-600" />
                    <span className="text-sm font-medium">
                      View Appointments
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-24 flex flex-col items-center justify-center gap-2 bg-purple-50 hover:bg-purple-100 border-purple-200"
                    onClick={() => setActiveTab("universities")}
                  >
                    <School className="h-6 w-6 text-purple-600" />
                    <span className="text-sm font-medium">
                      Manage Universities
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Inquiries */}
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-navy">
                    <Mail className="h-5 w-5" />
                    Recent Contact Inquiries
                  </CardTitle>
                  <CardDescription>
                    Latest contact form submissions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {inquiries.length > 0 ? (
                      inquiries.slice(0, 5).map((inquiry: ContactInquiry) => (
                        <div
                          key={inquiry.id}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-navy">
                                {inquiry.firstName} {inquiry.lastName}
                              </h4>
                              <Badge variant="outline" className="text-xs">
                                New
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">
                              {inquiry.email}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(inquiry.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <Mail className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                        <p>No recent inquiries</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Appointments */}
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-navy">
                    <Calendar className="h-5 w-5" />
                    Recent Appointments
                  </CardTitle>
                  <CardDescription>
                    Latest consultation bookings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {appointments.length > 0 ? (
                      appointments
                        .slice(0, 5)
                        .map((appointment: Appointment) => (
                          <div
                            key={appointment.id}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-navy">
                                  {appointment.firstName} {appointment.lastName}
                                </h4>
                                <Badge
                                  variant={
                                    appointment.status === "confirmed"
                                      ? "default"
                                      : appointment.status === "pending"
                                        ? "secondary"
                                        : "destructive"
                                  }
                                  className="text-xs"
                                >
                                  {appointment.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600">
                                {appointment.consultationType}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {appointment.preferredDate} at{" "}
                                {appointment.preferredTime}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-blue-600 hover:text-blue-700"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        ))
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                        <p>No recent appointments</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-navy">
                      <Users className="h-5 w-5" />
                      User Management
                    </CardTitle>
                    <CardDescription>
                      Manage user accounts and permissions
                    </CardDescription>
                  </div>
                  <Dialog
                    open={isAddUserDialogOpen}
                    onOpenChange={setIsAddUserDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button className="bg-navy hover:bg-navy/90">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Add User
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Add New User</DialogTitle>
                        <DialogDescription>
                          Create a new user account with specified role and
                          permissions
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              value={newUser.firstName}
                              onChange={(e) =>
                                setNewUser((prev) => ({
                                  ...prev,
                                  firstName: e.target.value,
                                }))
                              }
                              placeholder="John"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              value={newUser.lastName}
                              onChange={(e) =>
                                setNewUser((prev) => ({
                                  ...prev,
                                  lastName: e.target.value,
                                }))
                              }
                              placeholder="Doe"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <Input
                            id="username"
                            value={newUser.username}
                            onChange={(e) =>
                              setNewUser((prev) => ({
                                ...prev,
                                username: e.target.value,
                              }))
                            }
                            placeholder="john.doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={newUser.email}
                            onChange={(e) =>
                              setNewUser((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            placeholder="john.doe@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <Input
                            id="password"
                            type="password"
                            value={newUser.password}
                            onChange={(e) =>
                              setNewUser((prev) => ({
                                ...prev,
                                password: e.target.value,
                              }))
                            }
                            placeholder="Enter password"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Role</Label>
                          <Select
                            value={newUser.role}
                            onValueChange={(value) =>
                              setNewUser((prev) => ({ ...prev, role: value }))
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="user">User</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex justify-end gap-3 pt-4">
                          <Button
                            variant="outline"
                            onClick={() => {
                              setIsAddUserDialogOpen(false);
                              setNewUser({
                                username: "",
                                email: "",
                                password: "",
                                firstName: "",
                                lastName: "",
                                role: "user",
                              });
                            }}
                          >
                            Cancel
                          </Button>
                          <Button
                            className="bg-navy hover:bg-navy/90"
                            onClick={() => createUserMutation.mutate(newUser)}
                            disabled={
                              createUserMutation.isPending ||
                              !newUser.username ||
                              !newUser.email ||
                              !newUser.password
                            }
                          >
                            {createUserMutation.isPending
                              ? "Creating..."
                              : "Create User"}
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                {usersLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy"></div>
                  </div>
                ) : (
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="font-semibold">Name</TableHead>
                          <TableHead className="font-semibold">Email</TableHead>
                          <TableHead className="font-semibold">
                            Username
                          </TableHead>
                          <TableHead className="font-semibold">Role</TableHead>
                          <TableHead className="font-semibold">
                            Joined
                          </TableHead>
                          <TableHead className="font-semibold text-center">
                            Actions
                          </TableHead>
                          <TableHead className="font-semibold text-center">
                            Reset Password
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredUsers.length > 0 ? (
                          filteredUsers.map((user: User) => (
                            <TableRow
                              key={user.id}
                              className="hover:bg-gray-50"
                            >
                              <TableCell>
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                    {(
                                      user.firstName?.charAt(0) ||
                                      user.username.charAt(0)
                                    ).toUpperCase()}
                                  </div>
                                  <div className="font-medium">
                                    {user.firstName && user.lastName
                                      ? `${user.firstName} ${user.lastName}`
                                      : user.username}
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="text-gray-600">
                                {user.email}
                              </TableCell>
                              <TableCell className="text-gray-600">
                                {user.username}
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    user.role === "admin"
                                      ? "default"
                                      : "secondary"
                                  }
                                  className={
                                    user.role === "admin" ? "bg-navy" : ""
                                  }
                                >
                                  {user.role}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-gray-600">
                                {new Date(user.createdAt).toLocaleDateString()}
                              </TableCell>
                              <TableCell>
                                <div className="flex justify-center gap-2">
                                  <Dialog
                                    open={
                                      isUserDialogOpen &&
                                      selectedUser?.id === user.id
                                    }
                                    onOpenChange={(open) => {
                                      setIsUserDialogOpen(open);
                                      if (!open) setSelectedUser(null);
                                    }}
                                  >
                                    <DialogTrigger asChild>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        className="hover:bg-blue-50"
                                        onClick={() => setSelectedUser(user)}
                                      >
                                        <Edit className="h-4 w-4" />
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                      <DialogHeader>
                                        <DialogTitle>Edit User</DialogTitle>
                                        <DialogDescription>
                                          Update user details and permissions.
                                        </DialogDescription>
                                      </DialogHeader>
                                      <div className="space-y-4 py-4">
                                        <div className="grid grid-cols-2 gap-4">
                                          <div className="space-y-2">
                                            <Label htmlFor="editFirstName">
                                              First Name
                                            </Label>
                                            <Input
                                              id="editFirstName"
                                              value={
                                                selectedUser?.firstName || ""
                                              }
                                              onChange={(e) =>
                                                setSelectedUser((prev) =>
                                                  prev
                                                    ? {
                                                        ...prev,
                                                        firstName:
                                                          e.target.value,
                                                      }
                                                    : null,
                                                )
                                              }
                                              placeholder="John"
                                            />
                                          </div>
                                          <div className="space-y-2">
                                            <Label htmlFor="editLastName">
                                              Last Name
                                            </Label>
                                            <Input
                                              id="editLastName"
                                              value={
                                                selectedUser?.lastName || ""
                                              }
                                              onChange={(e) =>
                                                setSelectedUser((prev) =>
                                                  prev
                                                    ? {
                                                        ...prev,
                                                        lastName:
                                                          e.target.value,
                                                      }
                                                    : null,
                                                )
                                              }
                                              placeholder="Doe"
                                            />
                                          </div>
                                        </div>
                                        <div className="space-y-2">
                                          <Label htmlFor="editUsername">
                                            Username
                                          </Label>
                                          <Input
                                            id="editUsername"
                                            value={selectedUser?.username || ""}
                                            onChange={(e) =>
                                              setSelectedUser((prev) =>
                                                prev
                                                  ? {
                                                      ...prev,
                                                      username: e.target.value,
                                                    }
                                                  : null,
                                              )
                                            }
                                            placeholder="john.doe"
                                          />
                                        </div>
                                        <div className="space-y-2">
                                          <Label htmlFor="editEmail">
                                            Email
                                          </Label>
                                          <Input
                                            id="editEmail"
                                            type="email"
                                            value={selectedUser?.email || ""}
                                            onChange={(e) =>
                                              setSelectedUser((prev) =>
                                                prev
                                                  ? {
                                                      ...prev,
                                                      email: e.target.value,
                                                    }
                                                  : null,
                                              )
                                            }
                                            placeholder="john.doe@example.com"
                                          />
                                        </div>
                                        <div className="space-y-2">
                                          <Label htmlFor="editRole">
                                            User Role
                                          </Label>
                                          <Select
                                            value={selectedUser?.role || "user"}
                                            onValueChange={(value) =>
                                              setSelectedUser((prev) =>
                                                prev
                                                  ? { ...prev, role: value }
                                                  : null,
                                              )
                                            }
                                          >
                                            <SelectTrigger id="editRole">
                                              <SelectValue placeholder="Select role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                              <SelectItem value="user">
                                                User
                                              </SelectItem>
                                              <SelectItem value="admin">
                                                Admin
                                              </SelectItem>
                                            </SelectContent>
                                          </Select>
                                        </div>
                                        <div className="flex justify-end gap-3 pt-4">
                                          <Button
                                            variant="outline"
                                            onClick={() => {
                                              setIsUserDialogOpen(false);
                                              setSelectedUser(null);
                                            }}
                                          >
                                            Cancel
                                          </Button>
                                          <Button
                                            className="bg-navy hover:bg-navy/90"
                                            onClick={() =>
                                              selectedUser &&
                                              updateUserMutation.mutate({
                                                id: selectedUser.id,
                                                firstName:
                                                  selectedUser.firstName, // Add these
                                                lastName: selectedUser.lastName, // Add these
                                                email: selectedUser.email, // Add these
                                                username: selectedUser.username, // Add these
                                                role: selectedUser.role,
                                              })
                                            }
                                            disabled={
                                              updateUserMutation.isPending
                                            }
                                          >
                                            {updateUserMutation.isPending
                                              ? "Updating..."
                                              : "Update User"}
                                          </Button>
                                        </div>
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                  {user.role !== "admin" && (
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="hover:bg-red-50 text-red-600"
                                      onClick={() => {
                                        if (
                                          window.confirm(
                                            `Are you sure you want to delete user ${user.username}?`,
                                          )
                                        ) {
                                          deleteUserMutation.mutate(user.id);
                                        }
                                      }}
                                      disabled={deleteUserMutation.isPending}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  )}
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex justify-center gap-2">
                                  {/* Existing Edit Button Dialog */}
                                  {/* ... [cite: 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179] */}

                                  {/* New Reset Password Dialog Trigger */}
                                  <Dialog
                                    open={
                                      isResetPasswordDialogOpen &&
                                      selectedUserForPasswordReset?.id ===
                                        user.id
                                    }
                                    onOpenChange={(open) => {
                                      setIsResetPasswordDialogOpen(open);
                                      if (!open) {
                                        setSelectedUserForPasswordReset(null);
                                        setNewPassword("");
                                        setConfirmNewPassword("");
                                      }
                                    }}
                                  >
                                    <DialogTrigger asChild>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        className="hover:bg-orange-50 text-orange-600"
                                        onClick={() =>
                                          setSelectedUserForPasswordReset(user)
                                        }
                                      >
                                        <Key className="h-4 w-4" />{" "}
                                        {/* You'll need to import 'Key' icon from 'lucide-react' [cite: 7] */}
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                      <DialogHeader>
                                        <DialogTitle>
                                          Reset Password for{" "}
                                          {
                                            selectedUserForPasswordReset?.username
                                          }
                                        </DialogTitle>
                                        <DialogDescription>
                                          Enter a new password for this user.
                                        </DialogDescription>
                                      </DialogHeader>
                                      <div className="space-y-4 py-4">
                                        <div className="space-y-2">
                                          <Label htmlFor="newPassword">
                                            New Password
                                          </Label>
                                          <Input
                                            id="newPassword"
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) =>
                                              setNewPassword(e.target.value)
                                            }
                                            placeholder="Enter new password"
                                          />
                                        </div>
                                        <div className="space-y-2">
                                          <Label htmlFor="confirmNewPassword">
                                            Confirm New Password
                                          </Label>
                                          <Input
                                            id="confirmNewPassword"
                                            type="password"
                                            value={confirmNewPassword}
                                            onChange={(e) =>
                                              setConfirmNewPassword(
                                                e.target.value,
                                              )
                                            }
                                            placeholder="Confirm new password"
                                          />
                                        </div>
                                        <div className="flex justify-end gap-3 pt-4">
                                          <Button
                                            variant="outline"
                                            onClick={() => {
                                              setIsResetPasswordDialogOpen(
                                                false,
                                              );
                                              setNewPassword("");
                                              setConfirmNewPassword("");
                                              setSelectedUserForPasswordReset(
                                                null,
                                              );
                                            }}
                                          >
                                            Cancel
                                          </Button>
                                          <Button
                                            className="bg-navy hover:bg-navy/90"
                                            onClick={() => {
                                              if (
                                                newPassword !==
                                                confirmNewPassword
                                              ) {
                                                toast({
                                                  title: "Error",
                                                  description:
                                                    "Passwords do not match",
                                                  variant: "destructive",
                                                });
                                                return;
                                              }
                                              if (
                                                selectedUserForPasswordReset
                                              ) {
                                                resetPasswordMutation.mutate({
                                                  id: selectedUserForPasswordReset.id,
                                                  password: newPassword,
                                                });
                                              }
                                            }}
                                            disabled={
                                              resetPasswordMutation.isPending ||
                                              !newPassword ||
                                              newPassword !== confirmNewPassword
                                            }
                                          >
                                            {resetPasswordMutation.isPending
                                              ? "Resetting..."
                                              : "Reset Password"}
                                          </Button>
                                        </div>
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell
                              colSpan={6}
                              className="text-center py-12 text-gray-500"
                            >
                              <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                              {searchTerm
                                ? "No users found matching your search"
                                : "No users found"}
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-navy">
                  <GraduationCap className="h-5 w-5" />
                  Student Applications
                </CardTitle>
                <CardDescription>
                  Review and manage student applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold">
                          Student Name
                        </TableHead>
                        <TableHead className="font-semibold">Email</TableHead>
                        <TableHead className="font-semibold">
                          Preferred Countries
                        </TableHead>
                        <TableHead className="font-semibold">
                          Study Level
                        </TableHead>
                        <TableHead className="font-semibold">Status</TableHead>
                        <TableHead className="font-semibold">
                          Submitted
                        </TableHead>
                        <TableHead className="font-semibold text-center">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {studentApplications.length > 0 ? (
                        studentApplications.map(
                          (application: StudentApplication) => (
                            <TableRow
                              key={application.id}
                              className="hover:bg-gray-50"
                            >
                              <TableCell>
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                    {application.fullName
                                      .charAt(0)
                                      .toUpperCase()}
                                  </div>
                                  <div className="font-medium">
                                    {application.fullName}
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="text-gray-600">
                                {application.email}
                              </TableCell>
                              <TableCell className="text-gray-600">
                                {application.preferredCountries}
                              </TableCell>
                              <TableCell className="text-gray-600">
                                {application.studyLevel}
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    application.status === "approved"
                                      ? "default"
                                      : application.status === "pending"
                                        ? "secondary"
                                        : application.status === "rejected"
                                          ? "destructive"
                                          : "outline"
                                  }
                                  className={
                                    application.status === "approved"
                                      ? "bg-green-600"
                                      : application.status === "pending"
                                        ? "bg-yellow-600"
                                        : ""
                                  }
                                >
                                  {application.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-gray-600">
                                {new Date(
                                  application.createdAt,
                                ).toLocaleDateString()}
                              </TableCell>
                              <TableCell>
                                <div className="flex justify-center gap-2">
                                  <Select
                                    value={application.status}
                                    onValueChange={(value) =>
                                      updateApplicationMutation.mutate({
                                        id: application.id,
                                        status: value,
                                      })
                                    }
                                  >
                                    <SelectTrigger className="w-32">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="pending">
                                        Pending
                                      </SelectItem>
                                      <SelectItem value="approved">
                                        Approved
                                      </SelectItem>
                                      <SelectItem value="rejected">
                                        Rejected
                                      </SelectItem>
                                      <SelectItem value="under_review">
                                        Under Review
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="hover:bg-blue-50"
                                  >
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ),
                        )
                      ) : (
                        <TableRow>
                          <TableCell
                            colSpan={7}
                            className="text-center py-12 text-gray-500"
                          >
                            <GraduationCap className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                            <p>No applications found</p>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="universities" className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-navy">
                      <School className="h-5 w-5" />
                      University Management
                    </CardTitle>
                    <CardDescription>
                      Manage university listings and information
                    </CardDescription>
                  </div>
                  <Button 
                    className="bg-navy hover:bg-navy/90"
                    onClick={() => setLocation("/add-university")}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add University
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold">
                          University Name
                        </TableHead>
                        <TableHead className="font-semibold">Country</TableHead>
                        <TableHead className="font-semibold">City</TableHead>
                        <TableHead className="font-semibold">Ranking</TableHead>
                        <TableHead className="font-semibold">
                          Tuition Fee
                        </TableHead>
                        <TableHead className="font-semibold text-center">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {universities && universities.length > 0 ? (
                        universities.map((university: any) => (
                          <TableRow
                            key={university.id}
                            className="hover:bg-gray-50"
                          >
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                  {university.name ? university.name.charAt(0) : 'U'}
                                </div>
                                <div className="font-medium">
                                  {university.name || 'Unknown University'}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="text-gray-600">
                              <div className="flex items-center gap-2">
                                {university.flag && <span className="text-lg">{university.flag}</span>}
                                <Globe className="h-4 w-4 text-gray-400" />
                                {university.country || 'Unknown'}
                              </div>
                            </TableCell>
                            <TableCell className="text-gray-600">
                              {university.city || 'N/A'}
                            </TableCell>
                            <TableCell>
                              {university.ranking ? (
                                <Badge variant="outline" className="font-medium">
                                  #{university.ranking}
                                </Badge>
                              ) : (
                                <span className="text-gray-400">N/A</span>
                              )}
                            </TableCell>
                            <TableCell className="text-gray-600 font-medium">
                              {university.tuitionFee || 'N/A'}
                            </TableCell>
                            <TableCell>
                              <div className="flex justify-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="hover:bg-blue-50"
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="hover:bg-red-50 text-red-600"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell
                            colSpan={6}
                            className="text-center py-12 text-gray-500"
                          >
                            <School className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                            <p>No universities found</p>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
