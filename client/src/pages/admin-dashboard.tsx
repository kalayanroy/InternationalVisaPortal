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
                <TabsTrigger value="documents">Document Management</TabsTrigger>
                <TabsTrigger value="users">User Management</TabsTrigger>
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
                            
                            <div className="text-sm text-gray-600">
                              <p>{userDocuments.applications.length} application(s)</p>
                              <p>{userDocuments.totalDocuments} documents uploaded</p>
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
                                                    const fileUrl = `/api/files/applications/${app.userId}/${encodeURIComponent(hasDocument)}`;
                                                    window.open(`${fileUrl}?token=${token}`, '_blank');
                                                  }}
                                                >
                                                  <Download className="h-3 w-3" />
                                                </Button>
                                              </div>
                                            ) : (
                                              <Badge variant="secondary" className="text-xs">
                                                <XCircle className="h-3 w-3 mr-1" />
                                                Missing
                                              </Badge>
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
                        <div className="space-y-4">
                          {documentMessages.slice(0, 10).map((message) => (
                            <div key={message.id} className="border rounded-lg p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium">{message.subject}</h4>
                                <div className="flex items-center gap-2">
                                  <Badge variant={message.status === 'completed' ? 'default' : 'secondary'}>
                                    {message.status}
                                  </Badge>
                                  <span className="text-sm text-gray-500">
                                    {format(new Date(message.createdAt), "MMM dd, yyyy")}
                                  </span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{message.message}</p>
                              {message.requestedDocuments && message.requestedDocuments.length > 0 && (
                                <div className="text-xs text-gray-500">
                                  Requested: {message.requestedDocuments.join(', ')}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="users">
                <Card>
                  <CardHeader>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage registered users and their roles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Users className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-1 text-sm text-gray-500">User management interface coming soon</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification History</CardTitle>
                    <CardDescription>View all sent notifications and user communications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-1 text-sm text-gray-500">Notification history coming soon</p>
                    </div>
                  </CardContent>
                </Card>
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