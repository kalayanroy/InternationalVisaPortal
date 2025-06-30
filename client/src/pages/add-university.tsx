import { useState } from "react";
import { useLocation } from "wouter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Plus, Save, School, FileText, DollarSign } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

export default function AddUniversity() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [universityData, setUniversityData] = useState({
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

  // Attachment form states
  const [schoolData, setSchoolData] = useState({
    name: "",
    category: "",
    tuition: "",
    duration: "",
    deadline: "",
    requirements: "",
  });

  const [visaData, setVisaData] = useState({
    visaType: "",
    fee: "",
    processing: "",
    interview: "",
    requirements: "",
  });

  const [costData, setCostData] = useState({
    category: "",
    tuition: "",
    fees: "",
    roomBoard: "",
    books: "",
    personal: "",
    total: "",
  });

  const [scholarshipData, setScholarshipData] = useState({
    name: "",
    amount: "",
    criteria: "",
    coverage: "",
  });

  // Create university mutation
  const createUniversityMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest('POST', '/api/admin/universities', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/universities"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/dashboard"] });
      toast({
        title: "Success",
        description: "University created successfully",
      });
      setLocation("/admin-dashboard");
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Attachment mutations
  const createSchoolMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest('POST', '/api/admin/schools', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/schools"] });
      setSchoolData({ name: "", category: "", tuition: "", duration: "", deadline: "", requirements: "" });
      toast({
        title: "Success",
        description: "School program added successfully",
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

  const createVisaMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest('POST', '/api/admin/visa-requirements', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/visa-requirements"] });
      setVisaData({ visaType: "", fee: "", processing: "", interview: "", requirements: "" });
      toast({
        title: "Success",
        description: "Visa requirement added successfully",
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

  const createCostMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest('POST', '/api/admin/costs', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/costs"] });
      setCostData({ category: "", tuition: "", fees: "", roomBoard: "", books: "", personal: "", total: "" });
      toast({
        title: "Success",
        description: "Cost information added successfully",
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

  const createScholarshipMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest('POST', '/api/admin/scholarships', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/scholarships"] });
      setScholarshipData({ name: "", amount: "", criteria: "", coverage: "" });
      toast({
        title: "Success",
        description: "Scholarship added successfully",
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

  // Fill Australia example data
  const fillAustraliaData = () => {
    setUniversityData({
      countryId: "australia",
      name: "Australia",
      country: "Australia",
      flag: "🇦🇺",
      city: "",
      ranking: "",
      tuitionFee: "",
      requirements: "",
      programs: "22,000+ Programs",
      students: "400K+ International Students",
      image:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "World-class education in a vibrant multicultural environment with great weather.",
      highlights: "Work Rights, Beautiful Cities, Research Focus",
      topUniversities:
        "Australian National University, Bond University, University of Sydney, More +",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !universityData.countryId ||
      !universityData.name ||
      !universityData.country
    ) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Prepare data for submission
    const submitData = {
      ...universityData,
      ranking: universityData.ranking ? parseInt(universityData.ranking) : null,
      highlights: universityData.highlights
        ? universityData.highlights
            .split(",")
            .map((h) => h.trim())
            .filter((h) => h)
        : [],
      topUniversities: universityData.topUniversities
        ? universityData.topUniversities
            .split(",")
            .map((u) => u.trim())
            .filter((u) => u)
        : [],
    };
    console.log("Submitting university data:", submitData);
    createUniversityMutation.mutate(submitData);
  };

  // Handle attachment form submissions
  const handleSchoolSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!schoolData.name || !schoolData.category) {
      toast({
        title: "Error",
        description: "Please fill in required fields",
        variant: "destructive",
      });
      return;
    }
    createSchoolMutation.mutate(schoolData);
  };

  const handleVisaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visaData.visaType) {
      toast({
        title: "Error",
        description: "Please fill in visa type",
        variant: "destructive",
      });
      return;
    }
    
    const submitData = {
      ...visaData,
      requirements: visaData.requirements 
        ? visaData.requirements.split(',').map(req => req.trim()).filter(req => req)
        : [],
    };
    
    createVisaMutation.mutate(submitData);
  };

  const handleCostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!costData.category) {
      toast({
        title: "Error",
        description: "Please fill in cost category",
        variant: "destructive",
      });
      return;
    }
    createCostMutation.mutate(costData);
  };

  const handleScholarshipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scholarshipData.name) {
      toast({
        title: "Error",
        description: "Please fill in scholarship name",
        variant: "destructive",
      });
      return;
    }
    createScholarshipMutation.mutate(scholarshipData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy/95 to-purple-900">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Button
              variant="ghost"
              onClick={() => setLocation("/admin-dashboard")}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-xl font-semibold text-white">
              Add New University
            </h1>
            <div className="w-24"></div> {/* Spacer for center alignment */}
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl text-navy">
                  Create University Entry
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  Fill in comprehensive university information for the database
                </CardDescription>
              </div>
              <Button
                onClick={fillAustraliaData}
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white"
              >
                <Plus className="h-4 w-4 mr-2" />
                Fill Australia Example
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="university" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="university" className="flex items-center gap-2">
                  <School className="h-4 w-4" />
                  University Info
                </TabsTrigger>
                <TabsTrigger value="attachments" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Attachments
                </TabsTrigger>
                <TabsTrigger value="costs" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Cost Details
                </TabsTrigger>
              </TabsList>

              <TabsContent value="university">
                <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-navy border-b border-gray-200 pb-2">
                  Basic Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="countryId"
                      className="text-sm font-medium text-gray-700"
                    >
                      Country ID *{" "}
                      <span className="text-gray-500">(e.g., australia)</span>
                    </Label>
                    <Input
                      id="countryId"
                      value={universityData.countryId}
                      onChange={(e) =>
                        setUniversityData((prev) => ({
                          ...prev,
                          countryId: e.target.value,
                        }))
                      }
                      placeholder="australia"
                      required
                      className="border-gray-300 focus:border-navy focus:ring-navy"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="country"
                      className="text-sm font-medium text-gray-700"
                    >
                      Country Name *{" "}
                      <span className="text-gray-500">(e.g., Australia)</span>
                    </Label>
                    <Input
                      id="country"
                      value={universityData.country}
                      onChange={(e) =>
                        setUniversityData((prev) => ({
                          ...prev,
                          country: e.target.value,
                        }))
                      }
                      placeholder="Australia"
                      required
                      className="border-gray-300 focus:border-navy focus:ring-navy"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    University/Country Name *{" "}
                    <span className="text-gray-500">(Display name)</span>
                  </Label>
                  <Input
                    id="name"
                    value={universityData.name}
                    onChange={(e) =>
                      setUniversityData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Australia"
                    required
                    className="border-gray-300 focus:border-navy focus:ring-navy"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="flag"
                      className="text-sm font-medium text-gray-700"
                    >
                      Flag Emoji
                    </Label>
                    <Input
                      id="flag"
                      value={universityData.flag}
                      onChange={(e) =>
                        setUniversityData((prev) => ({
                          ...prev,
                          flag: e.target.value,
                        }))
                      }
                      placeholder="🇦🇺"
                      className="border-gray-300 focus:border-navy focus:ring-navy"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="city"
                      className="text-sm font-medium text-gray-700"
                    >
                      City
                    </Label>
                    <Input
                      id="city"
                      value={universityData.city}
                      onChange={(e) =>
                        setUniversityData((prev) => ({
                          ...prev,
                          city: e.target.value,
                        }))
                      }
                      placeholder="Sydney"
                      className="border-gray-300 focus:border-navy focus:ring-navy"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="ranking"
                      className="text-sm font-medium text-gray-700"
                    >
                      Ranking
                    </Label>
                    <Input
                      id="ranking"
                      type="number"
                      value={universityData.ranking}
                      onChange={(e) =>
                        setUniversityData((prev) => ({
                          ...prev,
                          ranking: e.target.value,
                        }))
                      }
                      placeholder="1"
                      className="border-gray-300 focus:border-navy focus:ring-navy"
                    />
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-navy border-b border-gray-200 pb-2">
                  Statistics & Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="programs"
                      className="text-sm font-medium text-gray-700"
                    >
                      Programs
                    </Label>
                    <Input
                      id="programs"
                      value={universityData.programs}
                      onChange={(e) =>
                        setUniversityData((prev) => ({
                          ...prev,
                          programs: e.target.value,
                        }))
                      }
                      placeholder="22,000+ Programs"
                      className="border-gray-300 focus:border-navy focus:ring-navy"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="students"
                      className="text-sm font-medium text-gray-700"
                    >
                      International Students
                    </Label>
                    <Input
                      id="students"
                      value={universityData.students}
                      onChange={(e) =>
                        setUniversityData((prev) => ({
                          ...prev,
                          students: e.target.value,
                        }))
                      }
                      placeholder="400K+ International Students"
                      className="border-gray-300 focus:border-navy focus:ring-navy"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="tuitionFee"
                    className="text-sm font-medium text-gray-700"
                  >
                    Tuition Fee
                  </Label>
                  <Input
                    id="tuitionFee"
                    value={universityData.tuitionFee}
                    onChange={(e) =>
                      setUniversityData((prev) => ({
                        ...prev,
                        tuitionFee: e.target.value,
                      }))
                    }
                    placeholder="$50,000/year"
                    className="border-gray-300 focus:border-navy focus:ring-navy"
                  />
                </div>
              </div>

              {/* Visual & Content */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-navy border-b border-gray-200 pb-2">
                  Visual & Content
                </h3>

                <div className="space-y-2">
                  <Label
                    htmlFor="image"
                    className="text-sm font-medium text-gray-700"
                  >
                    Image URL
                  </Label>
                  <Input
                    id="image"
                    value={universityData.image}
                    onChange={(e) =>
                      setUniversityData((prev) => ({
                        ...prev,
                        image: e.target.value,
                      }))
                    }
                    placeholder="https://images.unsplash.com/photo-..."
                    className="border-gray-300 focus:border-navy focus:ring-navy"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="description"
                    className="text-sm font-medium text-gray-700"
                  >
                    Description
                  </Label>
                  <textarea
                    id="description"
                    className="w-full p-3 border border-gray-300 rounded-md resize-none focus:border-navy focus:ring-navy"
                    rows={4}
                    value={universityData.description}
                    onChange={(e) =>
                      setUniversityData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="World-class education in a vibrant multicultural environment with great weather."
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="topUniversities"
                    className="text-sm font-medium text-gray-700"
                  >
                    Top Universities{" "}
                    <span className="text-gray-500">(comma-separated)</span>
                  </Label>
                  <Input
                    id="topUniversities"
                    value={universityData.topUniversities}
                    onChange={(e) =>
                      setUniversityData((prev) => ({
                        ...prev,
                        topUniversities: e.target.value,
                      }))
                    }
                    placeholder="Australian National University, Bond University, University of Sydney"
                    className="border-gray-300 focus:border-navy focus:ring-navy"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="highlights"
                    className="text-sm font-medium text-gray-700"
                  >
                    Highlights{" "}
                    <span className="text-gray-500">(comma-separated)</span>
                  </Label>
                  <Input
                    id="highlights"
                    value={universityData.highlights}
                    onChange={(e) =>
                      setUniversityData((prev) => ({
                        ...prev,
                        highlights: e.target.value,
                      }))
                    }
                    placeholder="Work Rights, Beautiful Cities, Research Focus"
                    className="border-gray-300 focus:border-navy focus:ring-navy"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="requirements"
                    className="text-sm font-medium text-gray-700"
                  >
                    Requirements
                  </Label>
                  <textarea
                    id="requirements"
                    className="w-full p-3 border border-gray-300 rounded-md resize-none focus:border-navy focus:ring-navy"
                    rows={3}
                    value={universityData.requirements}
                    onChange={(e) =>
                      setUniversityData((prev) => ({
                        ...prev,
                        requirements: e.target.value,
                      }))
                    }
                    placeholder="IELTS: 6.5+, GPA: 3.0+, Bachelor's degree required"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setLocation("/admin-dashboard")}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={createUniversityMutation.isPending}
                  className="bg-navy hover:bg-navy/90 text-white px-8"
                >
                  {createUniversityMutation.isPending ? (
                    "Creating..."
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Create University
                    </>
                  )}
                </Button>
              </div>
                </form>
              </TabsContent>

              {/* Attachments Tab */}
              <TabsContent value="attachments" className="space-y-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-navy border-b border-gray-200 pb-2">
                    Attachment Text System
                  </h3>
                  
                  <div className="grid gap-6">
                    <Card className="border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-navy">School Programs</CardTitle>
                        <CardDescription>
                          Manage school programs and course information
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="schoolName" className="text-sm font-medium text-gray-700">
                                School Name
                              </Label>
                              <Input
                                id="schoolName"
                                value={schoolData.name}
                                onChange={(e) => setSchoolData(prev => ({ ...prev, name: e.target.value }))}
                                placeholder="e.g., Harvard Medical School"
                                className="border-gray-300 focus:border-navy focus:ring-navy"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="schoolCategory" className="text-sm font-medium text-gray-700">
                                Category
                              </Label>
                              <Input
                                id="schoolCategory"
                                value={schoolData.category}
                                onChange={(e) => setSchoolData(prev => ({ ...prev, category: e.target.value }))}
                                placeholder="e.g., medical, business, law"
                                className="border-gray-300 focus:border-navy focus:ring-navy"
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="schoolTuition" className="text-sm font-medium text-gray-700">
                                Tuition
                              </Label>
                              <Input
                                id="schoolTuition"
                                value={schoolData.tuition}
                                onChange={(e) => setSchoolData(prev => ({ ...prev, tuition: e.target.value }))}
                                placeholder="e.g., $69,300"
                                className="border-gray-300 focus:border-navy focus:ring-navy"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="schoolDuration" className="text-sm font-medium text-gray-700">
                                Duration
                              </Label>
                              <Input
                                id="schoolDuration"
                                value={schoolData.duration}
                                onChange={(e) => setSchoolData(prev => ({ ...prev, duration: e.target.value }))}
                                placeholder="e.g., 4 years"
                                className="border-gray-300 focus:border-navy focus:ring-navy"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="schoolDeadline" className="text-sm font-medium text-gray-700">
                                Deadline
                              </Label>
                              <Input
                                id="schoolDeadline"
                                value={schoolData.deadline}
                                onChange={(e) => setSchoolData(prev => ({ ...prev, deadline: e.target.value }))}
                                placeholder="e.g., October 15"
                                className="border-gray-300 focus:border-navy focus:ring-navy"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="schoolRequirements" className="text-sm font-medium text-gray-700">
                              Requirements
                            </Label>
                            <textarea
                              id="schoolRequirements"
                              value={schoolData.requirements}
                              onChange={(e) => setSchoolData(prev => ({ ...prev, requirements: e.target.value }))}
                              className="w-full p-3 border border-gray-300 rounded-md resize-none focus:border-navy focus:ring-navy"
                              rows={3}
                              placeholder="e.g., MCAT, Pre-med courses, GPA requirements"
                            />
                          </div>
                          
                          <Button 
                            onClick={handleSchoolSubmit}
                            disabled={createSchoolMutation.isPending}
                            className="bg-navy hover:bg-navy/90 text-white"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            {createSchoolMutation.isPending ? "Adding..." : "Add School Program"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-navy">Visa Requirements</CardTitle>
                        <CardDescription>
                          Manage student visa requirements and documentation
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="visaType" className="text-sm font-medium text-gray-700">
                                Visa Type
                              </Label>
                              <Input
                                id="visaType"
                                value={visaData.visaType}
                                onChange={(e) => setVisaData(prev => ({ ...prev, visaType: e.target.value }))}
                                placeholder="e.g., F1 Visa, J1 Visa"
                                className="border-gray-300 focus:border-navy focus:ring-navy"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="visaFee" className="text-sm font-medium text-gray-700">
                                Fee
                              </Label>
                              <Input
                                id="visaFee"
                                value={visaData.fee}
                                onChange={(e) => setVisaData(prev => ({ ...prev, fee: e.target.value }))}
                                placeholder="e.g., $185"
                                className="border-gray-300 focus:border-navy focus:ring-navy"
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="visaProcessing" className="text-sm font-medium text-gray-700">
                                Processing Time
                              </Label>
                              <Input
                                id="visaProcessing"
                                value={visaData.processing}
                                onChange={(e) => setVisaData(prev => ({ ...prev, processing: e.target.value }))}
                                placeholder="e.g., 3-5 weeks"
                                className="border-gray-300 focus:border-navy focus:ring-navy"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="visaInterview" className="text-sm font-medium text-gray-700">
                                Interview Required
                              </Label>
                              <Input
                                id="visaInterview"
                                value={visaData.interview}
                                onChange={(e) => setVisaData(prev => ({ ...prev, interview: e.target.value }))}
                                placeholder="e.g., Required"
                                className="border-gray-300 focus:border-navy focus:ring-navy"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="visaRequirements" className="text-sm font-medium text-gray-700">
                              Requirements <span className="text-gray-500">(comma-separated)</span>
                            </Label>
                            <textarea
                              id="visaRequirements"
                              value={visaData.requirements}
                              onChange={(e) => setVisaData(prev => ({ ...prev, requirements: e.target.value }))}
                              className="w-full p-3 border border-gray-300 rounded-md resize-none focus:border-navy focus:ring-navy"
                              rows={4}
                              placeholder="Form I-20, SEVIS fee payment, DS-160 application, Valid passport, Financial documentation"
                            />
                          </div>
                          
                          <Button 
                            onClick={handleVisaSubmit}
                            disabled={createVisaMutation.isPending}
                            className="bg-navy hover:bg-navy/90 text-white"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            {createVisaMutation.isPending ? "Adding..." : "Add Visa Requirement"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Costs Tab */}
              <TabsContent value="costs" className="space-y-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-navy border-b border-gray-200 pb-2">
                    Cost Information
                  </h3>
                  
                  <Card className="border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-navy">Annual Cost Breakdown</CardTitle>
                      <CardDescription>
                        Detailed cost information for different study levels
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="costCategory" className="text-sm font-medium text-gray-700">
                            Category
                          </Label>
                          <Input
                            id="costCategory"
                            value={costData.category}
                            onChange={(e) => setCostData(prev => ({ ...prev, category: e.target.value }))}
                            placeholder="e.g., undergraduate, graduate"
                            className="border-gray-300 focus:border-navy focus:ring-navy"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="costTuition" className="text-sm font-medium text-gray-700">
                              Tuition
                            </Label>
                            <Input
                              id="costTuition"
                              value={costData.tuition}
                              onChange={(e) => setCostData(prev => ({ ...prev, tuition: e.target.value }))}
                              placeholder="e.g., $59,076"
                              className="border-gray-300 focus:border-navy focus:ring-navy"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="costFees" className="text-sm font-medium text-gray-700">
                              Fees
                            </Label>
                            <Input
                              id="costFees"
                              value={costData.fees}
                              onChange={(e) => setCostData(prev => ({ ...prev, fees: e.target.value }))}
                              placeholder="e.g., $4,195"
                              className="border-gray-300 focus:border-navy focus:ring-navy"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="costRoomBoard" className="text-sm font-medium text-gray-700">
                              Room & Board
                            </Label>
                            <Input
                              id="costRoomBoard"
                              value={costData.roomBoard}
                              onChange={(e) => setCostData(prev => ({ ...prev, roomBoard: e.target.value }))}
                              placeholder="e.g., $20,374"
                              className="border-gray-300 focus:border-navy focus:ring-navy"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="costBooks" className="text-sm font-medium text-gray-700">
                              Books
                            </Label>
                            <Input
                              id="costBooks"
                              value={costData.books}
                              onChange={(e) => setCostData(prev => ({ ...prev, books: e.target.value }))}
                              placeholder="e.g., $1,000"
                              className="border-gray-300 focus:border-navy focus:ring-navy"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="costPersonal" className="text-sm font-medium text-gray-700">
                              Personal
                            </Label>
                            <Input
                              id="costPersonal"
                              value={costData.personal}
                              onChange={(e) => setCostData(prev => ({ ...prev, personal: e.target.value }))}
                              placeholder="e.g., $2,500"
                              className="border-gray-300 focus:border-navy focus:ring-navy"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="costTotal" className="text-sm font-medium text-gray-700">
                            Total Annual Cost
                          </Label>
                          <Input
                            id="costTotal"
                            value={costData.total}
                            onChange={(e) => setCostData(prev => ({ ...prev, total: e.target.value }))}
                            placeholder="e.g., $87,145"
                            className="border-gray-300 focus:border-navy focus:ring-navy font-semibold"
                          />
                        </div>
                        
                        <Button 
                          onClick={handleCostSubmit}
                          disabled={createCostMutation.isPending}
                          className="bg-navy hover:bg-navy/90 text-white"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          {createCostMutation.isPending ? "Adding..." : "Add Cost Information"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-navy">Scholarships & Financial Aid</CardTitle>
                      <CardDescription>
                        Available funding opportunities for students
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="scholarshipName" className="text-sm font-medium text-gray-700">
                              Scholarship Name
                            </Label>
                            <Input
                              id="scholarshipName"
                              value={scholarshipData.name}
                              onChange={(e) => setScholarshipData(prev => ({ ...prev, name: e.target.value }))}
                              placeholder="e.g., Harvard Financial Aid"
                              className="border-gray-300 focus:border-navy focus:ring-navy"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="scholarshipAmount" className="text-sm font-medium text-gray-700">
                              Amount
                            </Label>
                            <Input
                              id="scholarshipAmount"
                              value={scholarshipData.amount}
                              onChange={(e) => setScholarshipData(prev => ({ ...prev, amount: e.target.value }))}
                              placeholder="e.g., Up to full tuition"
                              className="border-gray-300 focus:border-navy focus:ring-navy"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="scholarshipCriteria" className="text-sm font-medium text-gray-700">
                            Criteria
                          </Label>
                          <textarea
                            id="scholarshipCriteria"
                            value={scholarshipData.criteria}
                            onChange={(e) => setScholarshipData(prev => ({ ...prev, criteria: e.target.value }))}
                            className="w-full p-3 border border-gray-300 rounded-md resize-none focus:border-navy focus:ring-navy"
                            rows={2}
                            placeholder="e.g., Need-based, family income under $85,000"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="scholarshipCoverage" className="text-sm font-medium text-gray-700">
                            Coverage Details
                          </Label>
                          <textarea
                            id="scholarshipCoverage"
                            value={scholarshipData.coverage}
                            onChange={(e) => setScholarshipData(prev => ({ ...prev, coverage: e.target.value }))}
                            className="w-full p-3 border border-gray-300 rounded-md resize-none focus:border-navy focus:ring-navy"
                            rows={2}
                            placeholder="e.g., 100% of families earning less than $85,000 pay nothing"
                          />
                        </div>
                        
                        <Button 
                          onClick={handleScholarshipSubmit}
                          disabled={createScholarshipMutation.isPending}
                          className="bg-navy hover:bg-navy/90 text-white"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          {createScholarshipMutation.isPending ? "Adding..." : "Add Scholarship"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
