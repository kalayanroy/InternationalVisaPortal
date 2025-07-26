import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  ExternalLink,
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

interface DocumentRequest {
  id: number;
  userId: number;
  applicationId?: number;
  subject: string;
  message: string;
  requestedDocuments: string[];
  status: string;
  createdAt: string;
  senderId: number;
  senderType: string;
  messageType: string;
  read: boolean;
  attachments?: string[];
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

  const [documentRequestFiles, setDocumentRequestFiles] = useState<{[key: number]: File[]}>({});
  const [documentRequestMessages, setDocumentRequestMessages] = useState<{[key: number]: string}>({});
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

  // Mark notice as read mutation
  const markNoticeAsReadMutation = useMutation({
    mutationFn: async (noticeId: number) => {
      console.log("Calling API to mark notice as read:", noticeId);
      return await apiRequest(`/api/user/notices/${noticeId}/mark-read`, "POST");
    },
    onSuccess: (data, noticeId) => {
      console.log("Successfully marked notice as read:", noticeId);
      queryClient.invalidateQueries({ queryKey: ["/api/user/notices"] });
      queryClient.invalidateQueries({ queryKey: ["/api/user/notices/unread-count"] });
    },
    onError: (error, noticeId) => {
      console.error("Error marking notice as read:", error, noticeId);
      toast({
        title: "Error",
        description: "Failed to mark notice as read",
        variant: "destructive",
      });
    },
  });

  // Mark all notices as read mutation
  const markAllNoticesAsReadMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest("/api/user/notices/mark-all-read", "POST");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/user/notices"] });
      queryClient.invalidateQueries({ queryKey: ["/api/user/notices/unread-count"] });
      toast({
        title: "Success",
        description: "All notices marked as read",
      });
    },
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

  // Get unread notice count
  const { data: unreadNoticeData } = useQuery<{ count: number }>({
    queryKey: ["/api/user/notices/unread-count"],
    retry: false,
  });

  const unreadNoticeCount = unreadNoticeData?.count || 0;

  // Get document requests
  const { data: documentRequests = [], isLoading: documentRequestsLoading } = useQuery<DocumentRequest[]>({
    queryKey: ["/api/user/document-requests"],
    retry: false,
  });

  // Get user consultations
  const { data: consultations = [], isLoading: consultationsLoading } = useQuery<any[]>({
    queryKey: ["/api/user/consultations"],
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
      return await apiRequest("POST", "/api/user/book-consultation", data);
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
      queryClient.invalidateQueries({ queryKey: ["/api/user/consultations"] });
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
      return await apiRequest("PUT", "/api/user/profile", data);
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
      return await apiRequest("POST", "/api/user/create-sample-applications", {});
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

  // Upload documents for document request mutation
  const uploadDocumentRequestMutation = useMutation({
    mutationFn: async ({ requestId, files, message }: { requestId: number; files: File[]; message: string }) => {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      
      files.forEach(file => {
        formData.append('documents', file);
      });
      formData.append('message', message);

      const response = await fetch(`/api/user/document-requests/${requestId}/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to upload documents");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Documents uploaded successfully!",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/user/document-requests"] });
      setDocumentRequestFiles({});
      setDocumentRequestMessages({});
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to upload documents",
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

  const handleDownloadApplication = async (applicationId: number) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/user/applications/${applicationId}/download`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to download application");
      }

      // Get the filename from the response headers
      const contentDisposition = response.headers.get("content-disposition");
      const filename = contentDisposition 
        ? contentDisposition.split("filename=")[1]?.replace(/"/g, "") 
        : `application-${applicationId}.pdf`;

      // Create blob and download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Success",
        description: "Application downloaded successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to download application",
        variant: "destructive",
      });
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
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="consultation">Book Consultation</TabsTrigger>
              <TabsTrigger value="applications">Application Status</TabsTrigger>
              <TabsTrigger value="document-requests">Document Requests</TabsTrigger>
              <TabsTrigger value="notices" className="relative">
                Notice Board
                {unreadNoticeCount > 0 && (
                  <Badge className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0.5 min-w-[20px] h-5 rounded-full">
                    {unreadNoticeCount}
                  </Badge>
                )}
              </TabsTrigger>
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
              {/* Book New Consultation */}
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

              {/* My Consultations List */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>My Consultations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {consultationsLoading ? (
                    <div className="flex items-center justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
                    </div>
                  ) : consultations.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>No consultations booked yet.</p>
                      <p className="text-sm">Book your first consultation above!</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consultations.map((consultation: any) => (
                        <div key={consultation.id} className="border rounded-lg p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  consultation.status === 'confirmed' 
                                    ? 'bg-green-100 text-green-800'
                                    : consultation.status === 'completed'
                                    ? 'bg-blue-100 text-blue-800'
                                    : consultation.status === 'cancelled'
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {consultation.status.charAt(0).toUpperCase() + consultation.status.slice(1)}
                                </span>
                                <span className="text-sm text-gray-500">
                                  {consultation.consultationType.charAt(0).toUpperCase() + consultation.consultationType.slice(1)}
                                </span>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                                <div className="flex items-center space-x-2">
                                  <Calendar className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm">{consultation.preferredDate}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Clock className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm">{consultation.preferredTime}</span>
                                </div>
                              </div>

                              {consultation.message && (
                                <p className="text-sm text-gray-600 mb-3">
                                  <strong>Message:</strong> {consultation.message}
                                </p>
                              )}

                              {consultation.meetingNotes && (
                                <p className="text-sm text-gray-600 mb-3">
                                  <strong>Admin Notes:</strong> {consultation.meetingNotes}
                                </p>
                              )}

                              {consultation.meetingLink && (
                                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <p className="text-sm font-medium text-green-800 mb-1">
                                        Meeting Link Available
                                      </p>
                                      <p className="text-xs text-green-600">
                                        Click to join your consultation meeting
                                      </p>
                                    </div>
                                    <a
                                      href={consultation.meetingLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors"
                                    >
                                      Join Meeting
                                      <ExternalLink className="ml-2 h-4 w-4" />
                                    </a>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <p className="text-xs text-gray-500">
                              Booked on {new Date(consultation.createdAt).toLocaleDateString()}
                              {consultation.confirmedAt && (
                                <span> • Confirmed on {new Date(consultation.confirmedAt).toLocaleDateString()}</span>
                              )}
                              {consultation.completedAt && (
                                <span> • Completed on {new Date(consultation.completedAt).toLocaleDateString()}</span>
                              )}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
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
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => setSelectedApplication(application)}
                                >
                                  <Eye className="h-4 w-4 mr-1" />
                                  View Details
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleDownloadApplication(application.id)}
                                >
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

            {/* Document Requests Tab */}
            <TabsContent value="document-requests" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Document Requests from Admin</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {documentRequestsLoading ? (
                    <div className="text-center py-4">Loading document requests...</div>
                  ) : documentRequests.length === 0 ? (
                    <div className="text-center py-8">
                      <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No document requests</p>
                      <p className="text-sm text-gray-500">When admin requests additional documents, they will appear here.</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {documentRequests.map((request: DocumentRequest) => (
                        <div key={request.id} className="border rounded-lg p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-semibold text-lg">{request.subject}</h3>
                              <p className="text-sm text-gray-500">
                                Requested on {new Date(request.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                            <Badge 
                              className={
                                request.status === 'completed' ? 'bg-green-100 text-green-800' :
                                request.read ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }
                            >
                              {request.status === 'completed' ? 'Completed' :
                               request.read ? 'Viewed' : 'New'}
                            </Badge>
                          </div>

                          <div className="mb-4">
                            <p className="text-gray-700 mb-3">{request.message}</p>
                            
                            {request.requestedDocuments && request.requestedDocuments.length > 0 && (
                              <div>
                                <h4 className="font-medium mb-2">Requested Documents:</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600">
                                  {request.requestedDocuments.map((doc, index) => (
                                    <li key={index}>{doc}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          {request.status !== 'completed' && request.messageType === 'document_request' && (
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium mb-3">Upload Documents</h4>
                              
                              <div className="space-y-4">
                                <div>
                                  <Label htmlFor={`files-${request.id}`}>Select Documents</Label>
                                  <Input
                                    id={`files-${request.id}`}
                                    type="file"
                                    multiple
                                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.txt"
                                    onChange={(e) => {
                                      if (e.target.files) {
                                        setDocumentRequestFiles(prev => ({
                                          ...prev,
                                          [request.id]: Array.from(e.target.files!)
                                        }));
                                      }
                                    }}
                                    className="mt-1"
                                  />
                                  <p className="text-xs text-gray-500 mt-1">
                                    Supported formats: PDF, JPG, PNG, DOC, DOCX, TXT (Max 10MB each)
                                  </p>
                                </div>

                                <div>
                                  <Label htmlFor={`message-${request.id}`}>Additional Message (Optional)</Label>
                                  <Textarea
                                    id={`message-${request.id}`}
                                    placeholder="Any additional information about the uploaded documents..."
                                    value={documentRequestMessages[request.id] || ''}
                                    onChange={(e) => {
                                      setDocumentRequestMessages(prev => ({
                                        ...prev,
                                        [request.id]: e.target.value
                                      }));
                                    }}
                                    className="mt-1"
                                  />
                                </div>

                                <Button
                                  onClick={() => {
                                    const files = documentRequestFiles[request.id];
                                    const message = documentRequestMessages[request.id] || '';
                                    
                                    if (!files || files.length === 0) {
                                      toast({
                                        title: "Error",
                                        description: "Please select at least one document to upload",
                                        variant: "destructive",
                                      });
                                      return;
                                    }

                                    uploadDocumentRequestMutation.mutate({
                                      requestId: request.id,
                                      files,
                                      message
                                    });
                                  }}
                                  disabled={uploadDocumentRequestMutation.isPending}
                                  className="bg-teal-600 hover:bg-teal-700"
                                >
                                  {uploadDocumentRequestMutation.isPending ? 'Uploading...' : 'Upload Documents'}
                                </Button>

                                {documentRequestFiles[request.id] && documentRequestFiles[request.id].length > 0 && (
                                  <div className="mt-2">
                                    <p className="text-sm text-gray-600">
                                      Selected files: {documentRequestFiles[request.id].map(f => f.name).join(', ')}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {request.attachments && request.attachments.length > 0 && (
                            <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400">
                              <p className="text-sm text-blue-700">
                                <strong>Uploaded Documents:</strong> {request.attachments.length} file(s) uploaded
                              </p>
                            </div>
                          )}
                        </div>
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
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <Bell className="h-5 w-5" />
                      <span>Notice Board</span>
                      {unreadNoticeCount > 0 && (
                        <Badge className="bg-red-500 text-white">
                          {unreadNoticeCount} unread
                        </Badge>
                      )}
                    </CardTitle>
                    {unreadNoticeCount > 0 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => markAllNoticesAsReadMutation.mutate()}
                        disabled={markAllNoticesAsReadMutation.isPending}
                      >
                        Mark All as Read
                      </Button>
                    )}
                  </div>
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
                      {unreadNoticeCount > 0 && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                          <p className="text-sm text-blue-700">
                            💡 <strong>Tip:</strong> Click on unread notices (highlighted in blue) to mark them as read.
                          </p>
                        </div>
                      )}
                      {notices.map((notice: Notice) => (
                        <Card 
                          key={notice.id} 
                          className={`cursor-pointer transition-colors hover:bg-gray-50 ${
                            !notice.isRead ? "border-l-4 border-l-blue-500 bg-blue-50/30" : ""
                          }`}
                          onClick={() => {
                            console.log("Notice clicked:", notice.id, "isRead:", notice.isRead);
                            if (!notice.isRead) {
                              console.log("Marking notice as read:", notice.id);
                              markNoticeAsReadMutation.mutate(notice.id);
                            }
                          }}
                        >
                          <CardContent className="pt-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <h4 className={`font-semibold ${!notice.isRead ? "text-blue-800" : ""}`}>
                                    {notice.title}
                                  </h4>
                                  {!notice.isRead && (
                                    <Badge className="bg-blue-500 text-white text-xs">New</Badge>
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

      {/* Application Details Dialog */}
      {selectedApplication && (
        <Dialog open={!!selectedApplication} onOpenChange={() => setSelectedApplication(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Application Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Full Name:</span>
                    <p className="text-gray-600">{selectedApplication.fullName}</p>
                  </div>
                  <div>
                    <span className="font-medium">Email:</span>
                    <p className="text-gray-600">{selectedApplication.email}</p>
                  </div>
                  <div>
                    <span className="font-medium">Contact Number:</span>
                    <p className="text-gray-600">{selectedApplication.contactNumber}</p>
                  </div>
                  <div>
                    <span className="font-medium">Status:</span>
                    <Badge className={getStatusColor(selectedApplication.status)}>
                      {getStatusIcon(selectedApplication.status)}
                      <span className="ml-1 capitalize">{selectedApplication.status}</span>
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Academic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Preferred Countries:</span>
                    <p className="text-gray-600">{selectedApplication.preferredCountries}</p>
                  </div>
                  <div>
                    <span className="font-medium">Preferred Course:</span>
                    <p className="text-gray-600">{selectedApplication.preferredCourse}</p>
                  </div>
                  <div>
                    <span className="font-medium">Study Level:</span>
                    <p className="text-gray-600">{selectedApplication.studyLevel}</p>
                  </div>
                  <div>
                    <span className="font-medium">Preferred Intake:</span>
                    <p className="text-gray-600">{selectedApplication.preferredIntake}</p>
                  </div>
                  <div>
                    <span className="font-medium">Budget:</span>
                    <p className="text-gray-600">{selectedApplication.budgetCurrency} {selectedApplication.budget?.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="font-medium">Application Date:</span>
                    <p className="text-gray-600">{new Date(selectedApplication.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>

              {/* Submitted Documents */}
              {selectedApplication.submittedDocuments && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Submitted Documents</h3>
                  <div className="text-sm">
                    <p className="text-gray-600">{selectedApplication.submittedDocuments}</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-end space-x-2 pt-4 border-t">
                <Button variant="outline" onClick={() => setSelectedApplication(null)}>
                  Close
                </Button>
                <Button onClick={() => handleDownloadApplication(selectedApplication.id)}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Application
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}