import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuthState } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  FileText, 
  TrendingUp, 
  LogOut,
  Settings,
  BarChart3,
  Globe,
  Award,
  Mail,
  Phone,
  MapPin,
  Clock
} from "lucide-react";
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

interface Application {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  university: string;
  program: string;
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

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { user, logout, isAdmin } = useAuthState();
  const { toast } = useToast();
  const [stats, setStats] = useState<DashboardStats>({
    totalInquiries: 0,
    totalStudents: 0,
    totalAppointments: 0,
    totalApplications: 0,
  });
  const [recentInquiries, setRecentInquiries] = useState<ContactInquiry[]>([]);
  const [recentAppointments, setRecentAppointments] = useState<Appointment[]>([]);
  const [recentApplications, setRecentApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
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

    fetchDashboardData();
  }, [user, isAdmin]);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setLocation("/login");
        return;
      }

      const response = await fetch('/api/admin/dashboard', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          logout();
          setLocation("/login");
          return;
        }
        throw new Error('Failed to fetch dashboard data');
      }

      const data = await response.json();
      setStats(data.stats);
      setRecentInquiries(data.recentInquiries || []);
      setRecentAppointments(data.recentAppointments || []);
      setRecentApplications(data.recentApplications || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load dashboard data",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    setLocation("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <Header />
        <div className="pt-24 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      
      {/* Dashboard Header */}
      <div className="pt-24 pb-8 bg-gradient-to-br from-navy via-navy/95 to-navy/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
              <p className="text-white/90">Welcome back, {user?.firstName || user?.username}</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-4">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-navy"
                onClick={() => setLocation("/settings")}
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-navy"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Contact Inquiries</p>
                  <p className="text-3xl font-bold text-blue-900">{stats.totalInquiries}</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Appointments</p>
                  <p className="text-3xl font-bold text-green-900">{stats.totalAppointments}</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600">Applications</p>
                  <p className="text-3xl font-bold text-purple-900">{stats.totalApplications}</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Students</p>
                  <p className="text-3xl font-bold text-orange-900">{stats.totalStudents}</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Recent Inquiries */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-navy">
                <MessageSquare className="h-5 w-5 mr-2" />
                Recent Inquiries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInquiries.length > 0 ? (
                  recentInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-navy">
                          {inquiry.firstName} {inquiry.lastName}
                        </h4>
                        <Badge variant="outline" className="text-xs">
                          {new Date(inquiry.createdAt).toLocaleDateString()}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-slate-600 mb-1">
                        <Mail className="h-3 w-3 mr-1" />
                        {inquiry.email}
                      </div>
                      {inquiry.destination && (
                        <div className="flex items-center text-sm text-slate-600">
                          <MapPin className="h-3 w-3 mr-1" />
                          {inquiry.destination}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-slate-500 text-center py-4">No recent inquiries</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Recent Appointments */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-navy">
                <Calendar className="h-5 w-5 mr-2" />
                Recent Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAppointments.length > 0 ? (
                  recentAppointments.map((appointment) => (
                    <div key={appointment.id} className="border-l-4 border-green-500 pl-4 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-navy">
                          {appointment.firstName} {appointment.lastName}
                        </h4>
                        <Badge 
                          variant={appointment.status === 'confirmed' ? 'default' : 'outline'}
                          className="text-xs"
                        >
                          {appointment.status}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-slate-600 mb-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {appointment.preferredDate} at {appointment.preferredTime}
                      </div>
                      <div className="text-sm text-slate-600">
                        {appointment.consultationType}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-500 text-center py-4">No recent appointments</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Recent Applications */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-navy">
                <FileText className="h-5 w-5 mr-2" />
                Recent Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.length > 0 ? (
                  recentApplications.map((application) => (
                    <div key={application.id} className="border-l-4 border-purple-500 pl-4 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-navy">
                          {application.firstName} {application.lastName}
                        </h4>
                        <Badge 
                          variant={application.status === 'approved' ? 'default' : 'outline'}
                          className="text-xs"
                        >
                          {application.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-slate-600 mb-1">
                        {application.university}
                      </div>
                      <div className="text-sm text-slate-600">
                        {application.program}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-500 text-center py-4">No recent applications</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-navy">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button 
                  variant="outline" 
                  className="h-20 flex-col space-y-2 border-slate-200 hover:border-navy hover:bg-navy/5"
                  onClick={() => window.location.href = '/api/contact'}
                >
                  <MessageSquare className="h-6 w-6" />
                  <span className="text-sm">View Inquiries</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-20 flex-col space-y-2 border-slate-200 hover:border-navy hover:bg-navy/5"
                  onClick={() => window.location.href = '/api/appointments'}
                >
                  <Calendar className="h-6 w-6" />
                  <span className="text-sm">Manage Appointments</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-20 flex-col space-y-2 border-slate-200 hover:border-navy hover:bg-navy/5"
                  onClick={() => window.location.href = '/api/applications'}
                >
                  <FileText className="h-6 w-6" />
                  <span className="text-sm">Review Applications</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-20 flex-col space-y-2 border-slate-200 hover:border-navy hover:bg-navy/5"
                  onClick={() => window.location.href = '/api/users'}
                >
                  <Users className="h-6 w-6" />
                  <span className="text-sm">Manage Users</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}