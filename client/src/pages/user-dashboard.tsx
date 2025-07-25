import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { apiRequest } from "@/lib/queryClient";
import { useAuthState } from "@/hooks/useAuth";
import { useLocation } from "wouter";
import Header from "@/components/header";
import {
  Calendar,
  FileText,
  Bell,
  User,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  BookOpen,
  MapPin,
  GraduationCap,
  Settings,
  Save,
  Eye,
  Download,
} from "lucide-react";

interface Application {
  id: number;
  userId: number;
  fullName: string;
  email: string;
  contactNumber: string;
  preferredCountries: string;
  preferredCourse: string;
  status: string;
  createdAt: string;
  submittedDocuments?: string;
  studyLevel: string;
  preferredIntake: string;
  budget: number;
  budgetCurrency: string;
}

interface Notice {
  id: number;
  title: string;
  message: string;
  type: "info" | "warning" | "success";
  createdAt: string;
  isRead: boolean;
}

interface UserProfile {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  profileImageUrl?: string;
}

export default function UserDashboard() {
  const { toast } = useToast();
  const { user: authUser, isAuthenticated, isLoading } = useAuthState();
  const [, setLocation] = useLocation();
  const [user, setUser] = useState<UserProfile | null>(null);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Access Denied",
        description: "Please log in to access your dashboard.",
        variant: "destructive",
      });
      setLocation("/login");
      return;
    }
  }, [isAuthenticated, isLoading, toast, setLocation]);
  const [consultationForm, setConsultationForm] = useState({
    preferredDate: "",
    preferredTime: "",
    consultationType: "general",
    message: "",
  });

  // Get user profile
  const { data: profileData, isLoading: profileLoading } = useQuery({
    queryKey: ["/api/auth/user"],
    retry: false,
  });

  // Get user applications
  const { data: applications = [], isLoading: applicationsLoading } = useQuery<Application[]>({
    queryKey: ["/api/user/applications"],
    retry: false,
  });

  // Get notices
  const { data: notices = [], isLoading: noticesLoading } = useQuery<Notice[]>({
    queryKey: ["/api/user/notices"],
    retry: false,
  });

  useEffect(() => {
    if (profileData) {
      setUser(profileData as UserProfile);
    }
  }, [profileData]);

  // Book consultation mutation
  const bookConsultationMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest("/api/user/book-consultation", "POST", data);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Consultation booked successfully!",
      });
      setConsultationForm({
        preferredDate: "",
        preferredTime: "",
        consultationType: "general",
        message: "",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to book consultation",
        variant: "destructive",
      });
    },
  });

  // Update profile mutation
  const updateProfileMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest("/api/user/profile", "PUT", data);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Profile updated successfully!",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/auth/user"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update profile",
        variant: "destructive",
      });
    },
  });

  // Create sample applications mutation
  const createSampleApplicationsMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest("/api/user/create-sample-applications", "POST", {});
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Sample applications created successfully!",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/user/applications"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to create sample applications",
        variant: "destructive",
      });
    },
  });

  const handleBookConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultationForm.preferredDate || !consultationForm.preferredTime) {
      toast({
        title: "Error",
        description: "Please select preferred date and time",
        variant: "destructive",
      });
      return;
    }
    bookConsultationMutation.mutate(consultationForm);
  };

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    updateProfileMutation.mutate({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "under_review":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status?.toLowerCase()) {
      case "approved":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "rejected":
        return <AlertCircle className="h-4 w-4" />;
      case "under_review":
        return <Eye className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  if (profileLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading dashboard...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.firstName}!
            </h1>
            <p className="text-gray-600">
              Manage your applications, book consultations, and stay updated with your education journey.
            </p>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="consultation">Book Consultation</TabsTrigger>
              <TabsTrigger value="applications">Application Status</TabsTrigger>
              <TabsTrigger value="notices">Notice Board</TabsTrigger>
              <TabsTrigger value="profile">Profile Settings</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{applications.length}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {applications.filter((app: Application) => app.status === "pending").length}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Approved Applications</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {applications.filter((app: Application) => app.status === "approved").length}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Unread Notices</CardTitle>
                    <Bell className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {notices.filter((notice: Notice) => !notice.isRead).length}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Applications */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  {applicationsLoading ? (
                    <div className="text-center py-4">Loading applications...</div>
                  ) : applications.length === 0 ? (
                    <div className="text-center py-8">
                      <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No applications yet</p>
                      <div className="flex flex-col space-y-2 mt-4">
                        <Button className="bg-teal-600 hover:bg-teal-700">
                          Start New Application
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => createSampleApplicationsMutation.mutate()}
                          disabled={createSampleApplicationsMutation.isPending}
                        >
                          {createSampleApplicationsMutation.isPending ? "Creating..." : "Create Sample Applications"}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {applications.slice(0, 3).map((application: Application) => (
                        <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <GraduationCap className="h-8 w-8 text-teal-600" />
                            <div>
                              <h4 className="font-medium">{application.preferredCourse}</h4>
                              <p className="text-sm text-gray-600">{application.preferredCountries}</p>
                            </div>
                          </div>
                          <Badge className={getStatusColor(application.status)}>
                            {getStatusIcon(application.status)}
                            <span className="ml-1 capitalize">{application.status}</span>
                          </Badge>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Book Consultation Tab */}
            <TabsContent value="consultation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Book a Consultation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBookConsultation} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="preferredDate">Preferred Date</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={consultationForm.preferredDate}
                          onChange={(e) =>
                            setConsultationForm({ ...consultationForm, preferredDate: e.target.value })
                          }
                          min={new Date().toISOString().split("T")[0]}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredTime">Preferred Time</Label>
                        <Input
                          id="preferredTime"
                          type="time"
                          value={consultationForm.preferredTime}
                          onChange={(e) =>
                            setConsultationForm({ ...consultationForm, preferredTime: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="consultationType">Consultation Type</Label>
                      <select
                        id="consultationType"
                        value={consultationForm.consultationType}
                        onChange={(e) =>
                          setConsultationForm({ ...consultationForm, consultationType: e.target.value })
                        }
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      >
                        <option value="general">General Consultation</option>
                        <option value="university">University Selection</option>
                        <option value="visa">Visa Guidance</option>
                        <option value="application">Application Review</option>
                        <option value="document">Document Preparation</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your specific needs or questions..."
                        value={consultationForm.message}
                        onChange={(e) =>
                          setConsultationForm({ ...consultationForm, message: e.target.value })
                        }
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700"
                      disabled={bookConsultationMutation.isPending}
                    >
                      {bookConsultationMutation.isPending ? "Booking..." : "Book Consultation"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Application Status Tab */}
            <TabsContent value="applications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Application Status</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {applicationsLoading ? (
                    <div className="text-center py-8">Loading applications...</div>
                  ) : applications.length === 0 ? (
                    <div className="text-center py-8">
                      <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">No applications submitted yet</p>
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        Start New Application
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {applications.map((application: Application) => (
                        <Card key={application.id} className="border-l-4 border-l-teal-500">
                          <CardContent className="pt-6">
                            <div className="flex items-start justify-between">
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <h4 className="font-semibold text-lg">{application.preferredCourse}</h4>
                                  <Badge className={getStatusColor(application.status)}>
                                    {getStatusIcon(application.status)}
                                    <span className="ml-1 capitalize">{application.status}</span>
                                  </Badge>
                                </div>
                                <div className="flex items-center text-sm text-gray-600 space-x-4">
                                  <div className="flex items-center space-x-1">
                                    <MapPin className="h-4 w-4" />
                                    <span>{application.preferredCountries}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>Applied on {new Date(application.createdAt).toLocaleDateString()}</span>
                                  </div>
                                </div>
                                {application.submittedDocuments && application.submittedDocuments.length > 0 && (
                                  <div className="flex items-center space-x-1 text-sm text-green-600">
                                    <CheckCircle className="h-4 w-4" />
                                    <span>{application.submittedDocuments.length} documents submitted</span>
                                  </div>
                                )}
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="h-4 w-4 mr-1" />
                                  View Details
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Download className="h-4 w-4 mr-1" />
                                  Download
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notice Board Tab */}
            <TabsContent value="notices" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Notice Board</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {noticesLoading ? (
                    <div className="text-center py-8">Loading notices...</div>
                  ) : notices.length === 0 ? (
                    <div className="text-center py-8">
                      <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No notices available</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {notices.map((notice: Notice) => (
                        <Card key={notice.id} className={`${!notice.isRead ? "border-l-4 border-l-blue-500" : ""}`}>
                          <CardContent className="pt-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <h4 className="font-semibold">{notice.title}</h4>
                                  {!notice.isRead && (
                                    <Badge className="bg-blue-100 text-blue-800 text-xs">New</Badge>
                                  )}
                                </div>
                                <p className="text-gray-600 mb-2">{notice.message}</p>
                                <p className="text-xs text-gray-500">
                                  {new Date(notice.createdAt).toLocaleDateString()}
                                </p>
                              </div>
                              {notice.type === "warning" && (
                                <AlertCircle className="h-5 w-5 text-yellow-500 mt-1" />
                              )}
                              {notice.type === "success" && (
                                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                              )}
                              {notice.type === "info" && (
                                <Bell className="h-5 w-5 text-blue-500 mt-1" />
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Settings Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5" />
                    <span>Profile Settings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {user && (
                    <form onSubmit={handleUpdateProfile} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={user.firstName}
                            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={user.lastName}
                            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={user.email}
                          onChange={(e) => setUser({ ...user, email: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="username">Username</Label>
                        <Input
                          id="username"
                          value={user.username}
                          disabled
                          className="bg-gray-100"
                        />
                        <p className="text-xs text-gray-500 mt-1">Username cannot be changed</p>
                      </div>

                      <Button
                        type="submit"
                        className="bg-teal-600 hover:bg-teal-700"
                        disabled={updateProfileMutation.isPending}
                      >
                        <Save className="h-4 w-4 mr-2" />
                        {updateProfileMutation.isPending ? "Saving..." : "Save Changes"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}