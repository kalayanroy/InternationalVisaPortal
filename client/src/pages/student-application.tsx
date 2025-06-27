import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Plus, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import Header from "@/components/header";
import { useAuthState } from "@/hooks/useAuth";

interface EducationEntry {
  level: string;
  institution: string;
  country: string;
  board: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  grade: string;
  mediumOfInstruction: string;
  hasGap: boolean;
  gapExplanation?: string;
}

interface WorkEntry {
  jobTitle: string;
  organization: string;
  startDate: string;
  endDate: string;
  employmentType: string;
  responsibilities: string;
  relevantToStudy: boolean;
}

export default function StudentApplication() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, user } = useAuthState();

  // Form state
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    gender: "",
    dateOfBirth: "",
    nationality: "",
    maritalStatus: "",
    passportNumber: "",
    passportExpiry: "",
    nationalId: "",
    currentAddress: "",
    permanentAddress: "",
    contactNumber: "",
    email: user?.email || "",
    emergencyContactName: "",
    emergencyContactRelation: "",
    emergencyContactPhone: "",

    // Study Abroad Preferences
    preferredCountries: "",
    preferredCity: "",
    preferredCourse: "",
    preferredIntake: "",
    studyLevel: "",
    budget: "",
    budgetCurrency: "USD",
    fundingSource: "",
    openToScholarships: false,
    institutionType: "",
    studyMode: "",

    // Language Proficiency
    hasEnglishTest: false,
    testType: "",
    testDate: "",
    overallScore: "",
    listeningScore: "",
    readingScore: "",
    writingScore: "",
    speakingScore: "",
    planningTestDate: "",

    // Visa & Travel History
    previousStudentVisa: false,
    countriesVisited: "",
    visaRefusals: false,
    visaRefusalDetails: "",
    familyInDestination: false,
    familyRelationship: "",
    familyVisaType: "",

    // Additional Information
    additionalInfo: "",
  });

  const [educationHistory, setEducationHistory] = useState<EducationEntry[]>([
    {
      level: "",
      institution: "",
      country: "",
      board: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      grade: "",
      mediumOfInstruction: "",
      hasGap: false,
      gapExplanation: "",
    },
  ]);

  const [workExperience, setWorkExperience] = useState<WorkEntry[]>([
    {
      jobTitle: "",
      organization: "",
      startDate: "",
      endDate: "",
      employmentType: "",
      responsibilities: "",
      relevantToStudy: false,
    },
  ]);

  // Check authentication
  useEffect(() => {
    console.log(isAuthenticated);
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please log in to submit an application.",
        variant: "destructive",
      });
      setLocation("/login");
    }
  }, [isAuthenticated, setLocation, toast]);

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/student-applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit application");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted Successfully",
        description:
          "Your student application has been submitted. We will contact you soon.",
      });
      resetForm();
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description:
          error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const resetForm = () => {
    setFormData({
      fullName: "",
      gender: "",
      dateOfBirth: "",
      nationality: "",
      maritalStatus: "",
      passportNumber: "",
      passportExpiry: "",
      nationalId: "",
      currentAddress: "",
      permanentAddress: "",
      contactNumber: "",
      email: user?.email || "",
      emergencyContactName: "",
      emergencyContactRelation: "",
      emergencyContactPhone: "",
      preferredCountries: "",
      preferredCity: "",
      preferredCourse: "",
      preferredIntake: "",
      studyLevel: "",
      budget: "",
      budgetCurrency: "USD",
      fundingSource: "",
      openToScholarships: false,
      institutionType: "",
      studyMode: "",
      hasEnglishTest: false,
      testType: "",
      testDate: "",
      overallScore: "",
      listeningScore: "",
      readingScore: "",
      writingScore: "",
      speakingScore: "",
      planningTestDate: "",
      previousStudentVisa: false,
      countriesVisited: "",
      visaRefusals: false,
      visaRefusalDetails: "",
      familyInDestination: false,
      familyRelationship: "",
      familyVisaType: "",
      additionalInfo: "",
    });
    setEducationHistory([
      {
        level: "",
        institution: "",
        country: "",
        board: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
        grade: "",
        mediumOfInstruction: "",
        hasGap: false,
        gapExplanation: "",
      },
    ]);
    setWorkExperience([
      {
        jobTitle: "",
        organization: "",
        startDate: "",
        endDate: "",
        employmentType: "",
        responsibilities: "",
        relevantToStudy: false,
      },
    ]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Prepare the data
      const applicationData = {
        ...formData,
        educationHistory: JSON.stringify(educationHistory),
        workExperience: JSON.stringify(workExperience),
        userId: user?.id,
      };

      await mutation.mutateAsync(applicationData);
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "Failed to submit application",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const addEducationEntry = () => {
    setEducationHistory([
      ...educationHistory,
      {
        level: "",
        institution: "",
        country: "",
        board: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
        grade: "",
        mediumOfInstruction: "",
        hasGap: false,
        gapExplanation: "",
      },
    ]);
  };

  const removeEducationEntry = (index: number) => {
    setEducationHistory(educationHistory.filter((_, i) => i !== index));
  };

  const updateEducationEntry = (index: number, field: string, value: any) => {
    const updated = [...educationHistory];
    updated[index] = { ...updated[index], [field]: value };
    setEducationHistory(updated);
  };

  const addWorkEntry = () => {
    setWorkExperience([
      ...workExperience,
      {
        jobTitle: "",
        organization: "",
        startDate: "",
        endDate: "",
        employmentType: "",
        responsibilities: "",
        relevantToStudy: false,
      },
    ]);
  };

  const removeWorkEntry = (index: number) => {
    setWorkExperience(workExperience.filter((_, i) => i !== index));
  };

  const updateWorkEntry = (index: number, field: string, value: any) => {
    const updated = [...workExperience];
    updated[index] = { ...updated[index], [field]: value };
    setWorkExperience(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-navy mb-4">
              Student Application Form
            </h1>
            <p className="text-lg text-gray-600">
              Complete your study abroad application
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy">
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">
                      Full Name (as per passport) *
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender *</Label>
                    <Select
                      value={formData.gender}
                      onValueChange={(value) =>
                        setFormData({ ...formData, gender: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dateOfBirth: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="nationality">Nationality *</Label>
                    <Input
                      id="nationality"
                      value={formData.nationality}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          nationality: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="maritalStatus">Marital Status *</Label>
                    <Select
                      value={formData.maritalStatus}
                      onValueChange={(value) =>
                        setFormData({ ...formData, maritalStatus: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="married">Married</SelectItem>
                        <SelectItem value="divorced">Divorced</SelectItem>
                        <SelectItem value="widowed">Widowed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="passportNumber">Passport Number *</Label>
                    <Input
                      id="passportNumber"
                      value={formData.passportNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          passportNumber: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="passportExpiry">
                      Passport Expiry Date *
                    </Label>
                    <Input
                      id="passportExpiry"
                      type="date"
                      value={formData.passportExpiry}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          passportExpiry: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="nationalId">National ID Number</Label>
                    <Input
                      id="nationalId"
                      value={formData.nationalId}
                      onChange={(e) =>
                        setFormData({ ...formData, nationalId: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="currentAddress">Current Address *</Label>
                    <Textarea
                      id="currentAddress"
                      value={formData.currentAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          currentAddress: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="permanentAddress">
                      Permanent Address *
                    </Label>
                    <Textarea
                      id="permanentAddress"
                      value={formData.permanentAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          permanentAddress: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="contactNumber">Contact Number *</Label>
                    <Input
                      id="contactNumber"
                      value={formData.contactNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactNumber: e.target.value,
                        })
                      }
                      placeholder="+1234567890"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <Separator />
                <h3 className="text-lg font-semibold text-navy">
                  Emergency Contact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="emergencyContactName">Name *</Label>
                    <Input
                      id="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          emergencyContactName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyContactRelation">Relation *</Label>
                    <Input
                      id="emergencyContactRelation"
                      value={formData.emergencyContactRelation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          emergencyContactRelation: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyContactPhone">
                      Phone Number *
                    </Label>
                    <Input
                      id="emergencyContactPhone"
                      value={formData.emergencyContactPhone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          emergencyContactPhone: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Educational Background */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy flex items-center justify-between">
                  Educational Background
                  <Button
                    type="button"
                    onClick={addEducationEntry}
                    variant="outline"
                    size="sm"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Education
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {educationHistory.map((edu, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">Education {index + 1}</h4>
                      {educationHistory.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeEducationEntry(index)}
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Level of Education *</Label>
                        <Select
                          value={edu.level}
                          onValueChange={(value) =>
                            updateEducationEntry(index, "level", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ssc">SSC</SelectItem>
                            <SelectItem value="hsc">HSC</SelectItem>
                            <SelectItem value="diploma">Diploma</SelectItem>
                            <SelectItem value="bachelor">Bachelor's</SelectItem>
                            <SelectItem value="master">Master's</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Institution Name *</Label>
                        <Input
                          value={edu.institution}
                          onChange={(e) =>
                            updateEducationEntry(
                              index,
                              "institution",
                              e.target.value,
                            )
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label>Country *</Label>
                        <Input
                          value={edu.country}
                          onChange={(e) =>
                            updateEducationEntry(
                              index,
                              "country",
                              e.target.value,
                            )
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label>Board/University *</Label>
                        <Input
                          value={edu.board}
                          onChange={(e) =>
                            updateEducationEntry(index, "board", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label>Field of Study *</Label>
                        <Input
                          value={edu.fieldOfStudy}
                          onChange={(e) =>
                            updateEducationEntry(
                              index,
                              "fieldOfStudy",
                              e.target.value,
                            )
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label>GPA/Percentage/Grade *</Label>
                        <Input
                          value={edu.grade}
                          onChange={(e) =>
                            updateEducationEntry(index, "grade", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label>Start Date *</Label>
                        <Input
                          type="date"
                          value={edu.startDate}
                          onChange={(e) =>
                            updateEducationEntry(
                              index,
                              "startDate",
                              e.target.value,
                            )
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label>End Date *</Label>
                        <Input
                          type="date"
                          value={edu.endDate}
                          onChange={(e) =>
                            updateEducationEntry(
                              index,
                              "endDate",
                              e.target.value,
                            )
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label>Medium of Instruction *</Label>
                        <Select
                          value={edu.mediumOfInstruction}
                          onValueChange={(value) =>
                            updateEducationEntry(
                              index,
                              "mediumOfInstruction",
                              value,
                            )
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select medium" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="local">
                              Local Language
                            </SelectItem>
                            <SelectItem value="bilingual">Bilingual</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`hasGap-${index}`}
                        checked={edu.hasGap}
                        onCheckedChange={(checked) =>
                          updateEducationEntry(index, "hasGap", checked)
                        }
                      />
                      <Label htmlFor={`hasGap-${index}`}>
                        Did you have any education gap?
                      </Label>
                    </div>

                    {edu.hasGap && (
                      <div>
                        <Label>Gap Explanation</Label>
                        <Textarea
                          value={edu.gapExplanation}
                          onChange={(e) =>
                            updateEducationEntry(
                              index,
                              "gapExplanation",
                              e.target.value,
                            )
                          }
                          placeholder="Please explain the reason for the gap"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Study Abroad Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy">
                  Study Abroad Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="preferredCountries">
                      Preferred Countries *
                    </Label>
                    <Input
                      id="preferredCountries"
                      value={formData.preferredCountries}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredCountries: e.target.value,
                        })
                      }
                      placeholder="e.g., USA, Canada, UK"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredCity">Preferred City</Label>
                    <Input
                      id="preferredCity"
                      value={formData.preferredCity}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredCity: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredCourse">
                      Preferred Course/Program *
                    </Label>
                    <Input
                      id="preferredCourse"
                      value={formData.preferredCourse}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredCourse: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredIntake">Preferred Intake *</Label>
                    <Select
                      value={formData.preferredIntake}
                      onValueChange={(value) =>
                        setFormData({ ...formData, preferredIntake: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select intake" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="september-2025">
                          September 2025
                        </SelectItem>
                        <SelectItem value="january-2026">
                          January 2026
                        </SelectItem>
                        <SelectItem value="may-2026">May 2026</SelectItem>
                        <SelectItem value="september-2026">
                          September 2026
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="studyLevel">Study Level *</Label>
                    <Select
                      value={formData.studyLevel}
                      onValueChange={(value) =>
                        setFormData({ ...formData, studyLevel: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="bachelor">Bachelor's</SelectItem>
                        <SelectItem value="master">Master's</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="budget">Budget per year *</Label>
                        <Input
                          id="budget"
                          type="number"
                          value={formData.budget}
                          onChange={(e) =>
                            setFormData({ ...formData, budget: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="budgetCurrency">Currency *</Label>
                        <Select
                          value={formData.budgetCurrency}
                          onValueChange={(value) =>
                            setFormData({ ...formData, budgetCurrency: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USD">USD</SelectItem>
                            <SelectItem value="CAD">CAD</SelectItem>
                            <SelectItem value="GBP">GBP</SelectItem>
                            <SelectItem value="AUD">AUD</SelectItem>
                            <SelectItem value="EUR">EUR</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="fundingSource">Funding Source *</Label>
                        <Select
                          value={formData.fundingSource}
                          onValueChange={(value) =>
                            setFormData({ ...formData, fundingSource: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select source" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="self">Self</SelectItem>
                            <SelectItem value="parents">Parents</SelectItem>
                            <SelectItem value="scholarship">
                              Scholarship
                            </SelectItem>
                            <SelectItem value="sponsor">Sponsor</SelectItem>
                            <SelectItem value="bank-loan">Bank Loan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="institutionType">Institution Type *</Label>
                    <Select
                      value={formData.institutionType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, institutionType: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="university">University</SelectItem>
                        <SelectItem value="college">College</SelectItem>
                        <SelectItem value="tafe">TAFE</SelectItem>
                        <SelectItem value="community-college">
                          Community College
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="studyMode">Study Mode *</Label>
                    <Select
                      value={formData.studyMode}
                      onValueChange={(value) =>
                        setFormData({ ...formData, studyMode: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="on-campus">On-campus</SelectItem>
                        <SelectItem value="online">Online</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="openToScholarships"
                    checked={formData.openToScholarships}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        openToScholarships: !!checked,
                      })
                    }
                  />
                  <Label htmlFor="openToScholarships">
                    Are you open to scholarships?
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Language Proficiency */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy">
                  Language Proficiency
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasEnglishTest"
                    checked={formData.hasEnglishTest}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, hasEnglishTest: !!checked })
                    }
                  />
                  <Label htmlFor="hasEnglishTest">
                    Have you taken any English test?
                  </Label>
                </div>

                {formData.hasEnglishTest && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="testType">Test Type</Label>
                        <Select
                          value={formData.testType}
                          onValueChange={(value) =>
                            setFormData({ ...formData, testType: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select test" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ielts">IELTS</SelectItem>
                            <SelectItem value="pte">PTE</SelectItem>
                            <SelectItem value="toefl">TOEFL</SelectItem>
                            <SelectItem value="duolingo">Duolingo</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="testDate">Test Date</Label>
                        <Input
                          id="testDate"
                          type="date"
                          value={formData.testDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              testDate: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="overallScore">Overall Score</Label>
                        <Input
                          id="overallScore"
                          value={formData.overallScore}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              overallScore: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <Label htmlFor="listeningScore">Listening</Label>
                        <Input
                          id="listeningScore"
                          value={formData.listeningScore}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              listeningScore: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="readingScore">Reading</Label>
                        <Input
                          id="readingScore"
                          value={formData.readingScore}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              readingScore: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="writingScore">Writing</Label>
                        <Input
                          id="writingScore"
                          value={formData.writingScore}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              writingScore: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="speakingScore">Speaking</Label>
                        <Input
                          id="speakingScore"
                          value={formData.speakingScore}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              speakingScore: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </>
                )}

                {!formData.hasEnglishTest && (
                  <div>
                    <Label htmlFor="planningTestDate">
                      Planning to take an English test? When?
                    </Label>
                    <Input
                      id="planningTestDate"
                      type="date"
                      value={formData.planningTestDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          planningTestDate: e.target.value,
                        })
                      }
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy flex items-center justify-between">
                  Work Experience (Optional)
                  <Button
                    type="button"
                    onClick={addWorkEntry}
                    variant="outline"
                    size="sm"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Work Experience
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {workExperience.map((work, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">
                        Work Experience {index + 1}
                      </h4>
                      {workExperience.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeWorkEntry(index)}
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Job Title</Label>
                        <Input
                          value={work.jobTitle}
                          onChange={(e) =>
                            updateWorkEntry(index, "jobTitle", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Label>Organization</Label>
                        <Input
                          value={work.organization}
                          onChange={(e) =>
                            updateWorkEntry(
                              index,
                              "organization",
                              e.target.value,
                            )
                          }
                        />
                      </div>
                      <div>
                        <Label>Start Date</Label>
                        <Input
                          type="date"
                          value={work.startDate}
                          onChange={(e) =>
                            updateWorkEntry(index, "startDate", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Label>End Date</Label>
                        <Input
                          type="date"
                          value={work.endDate}
                          onChange={(e) =>
                            updateWorkEntry(index, "endDate", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Label>Employment Type</Label>
                        <Select
                          value={work.employmentType}
                          onValueChange={(value) =>
                            updateWorkEntry(index, "employmentType", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time">Full-time</SelectItem>
                            <SelectItem value="part-time">Part-time</SelectItem>
                            <SelectItem value="internship">
                              Internship
                            </SelectItem>
                            <SelectItem value="freelance">Freelance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label>Job Responsibilities</Label>
                      <Textarea
                        value={work.responsibilities}
                        onChange={(e) =>
                          updateWorkEntry(
                            index,
                            "responsibilities",
                            e.target.value,
                          )
                        }
                        placeholder="Describe your key responsibilities"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`relevantToStudy-${index}`}
                        checked={work.relevantToStudy}
                        onCheckedChange={(checked) =>
                          updateWorkEntry(index, "relevantToStudy", checked)
                        }
                      />
                      <Label htmlFor={`relevantToStudy-${index}`}>
                        Is this relevant to your intended study?
                      </Label>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Visa & Travel History */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy">
                  Visa & Travel History
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="previousStudentVisa"
                    checked={formData.previousStudentVisa}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        previousStudentVisa: !!checked,
                      })
                    }
                  />
                  <Label htmlFor="previousStudentVisa">
                    Have you ever applied for a student visa before?
                  </Label>
                </div>

                <div>
                  <Label htmlFor="countriesVisited">Countries Visited</Label>
                  <Textarea
                    id="countriesVisited"
                    value={formData.countriesVisited}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        countriesVisited: e.target.value,
                      })
                    }
                    placeholder="List countries you have visited"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="visaRefusals"
                    checked={formData.visaRefusals}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, visaRefusals: !!checked })
                    }
                  />
                  <Label htmlFor="visaRefusals">
                    Any previous visa refusals?
                  </Label>
                </div>

                {formData.visaRefusals && (
                  <div>
                    <Label htmlFor="visaRefusalDetails">
                      Visa Refusal Details
                    </Label>
                    <Textarea
                      id="visaRefusalDetails"
                      value={formData.visaRefusalDetails}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          visaRefusalDetails: e.target.value,
                        })
                      }
                      placeholder="Please provide details about visa refusals"
                    />
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="familyInDestination"
                    checked={formData.familyInDestination}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        familyInDestination: !!checked,
                      })
                    }
                  />
                  <Label htmlFor="familyInDestination">
                    Any relatives/family in the destination country?
                  </Label>
                </div>

                {formData.familyInDestination && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="familyRelationship">Relationship</Label>
                      <Input
                        id="familyRelationship"
                        value={formData.familyRelationship}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            familyRelationship: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="familyVisaType">Their Visa Type</Label>
                      <Input
                        id="familyVisaType"
                        value={formData.familyVisaType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            familyVisaType: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy">
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="additionalInfo">
                    Any additional information you'd like to share
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        additionalInfo: e.target.value,
                      })
                    }
                    placeholder="Share any additional information that might be relevant to your application"
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Document Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy">
                  Document Upload
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600 mb-4">
                    Please upload the following documents. All documents should
                    be in PDF, JPG, or PNG format (max 5MB each).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="block text-sm font-medium text-gray-700 mb-2">
                        Passport (Front and Back Page) *
                      </Label>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <Label className="block text-sm font-medium text-gray-700 mb-2">
                        Academic Certificates and Transcripts *
                      </Label>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <Label className="block text-sm font-medium text-gray-700 mb-2">
                        English Test Score Report
                      </Label>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <Label className="block text-sm font-medium text-gray-700 mb-2">
                        CV/Resume *
                      </Label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <Label className="block text-sm font-medium text-gray-700 mb-2">
                        Statement of Purpose (SOP) or Motivation Letter *
                      </Label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <Label className="block text-sm font-medium text-gray-700 mb-2">
                        Experience Letter (if applicable)
                      </Label>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <Label className="block text-sm font-medium text-gray-700 mb-2">
                        National ID *
                      </Label>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <Label className="block text-sm font-medium text-gray-700 mb-2">
                        Passport-size Photo *
                      </Label>
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <Label className="block text-sm font-medium text-gray-700 mb-2">
                        Birth Certificate (if required by country)
                      </Label>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <Label className="block text-sm font-medium text-gray-700 mb-2">
                        Financial Documents (if available or required)
                      </Label>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-4">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> All documents must be clear and
                      legible. Documents in languages other than English must be
                      accompanied by certified translations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Declaration & Consent Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy">
                  Declaration & Consent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox id="dataConsent" className="mt-1" required />
                      <Label
                        htmlFor="dataConsent"
                        className="text-sm text-gray-700"
                      >
                        I consent to the use of the provided data for
                        consultation and application purposes. I understand that
                        my personal information will be used to process my
                        application and provide educational consultancy
                        services.
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="truthDeclaration"
                        className="mt-1"
                        required
                      />
                      <Label
                        htmlFor="truthDeclaration"
                        className="text-sm text-gray-700"
                      >
                        I declare that all the information provided in this
                        application form is true, complete, and accurate to the
                        best of my knowledge. I understand that providing false
                        or misleading information may result in the rejection of
                        my application.
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="termsAcceptance"
                        className="mt-1"
                        required
                      />
                      <Label
                        htmlFor="termsAcceptance"
                        className="text-sm text-gray-700"
                      >
                        I accept the terms and conditions of the consultancy
                        services and understand the application process
                        requirements.
                      </Label>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="digitalSignature"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Digital Signature (Type your full name) *
                        </Label>
                        <Input
                          id="digitalSignature"
                          placeholder="Type your full name as digital signature"
                          required
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="signatureDate"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Date *
                        </Label>
                        <Input
                          id="signatureDate"
                          type="date"
                          defaultValue={new Date().toISOString().split("T")[0]}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-navy to-blue-700 hover:from-navy/90 hover:to-blue-700/90 text-white px-12 py-6 text-lg font-semibold"
                disabled={isLoading || mutation.isPending}
                type="submit"
              >
                {isLoading || mutation.isPending
                  ? "Submitting..."
                  : "Submit Application"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
