import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, User, GraduationCap, Target, Star, Trophy, Activity, Heart, FileText, Download, Sparkles, Clock, Users } from "lucide-react";
import Header from "@/components/header";
import { useToast } from "@/hooks/use-toast";

interface SOPFormData {
  // Personal Information
  fullName: string;
  email: string;
  contactNumber: string;
  applyingCountry: string;
  
  // Academic Information
  universityName: string;
  programName: string;
  academicBackground: string;
  
  // Experience & Goals
  workExperience: string;
  careerGoals: string;
  
  // Motivations
  whyUniversity: string;
  whyCountry: string;
  whyCourse: string;
  
  // Future Plans & Achievements
  futurePlans: string;
  achievements: string;
  extracurricular: string;
  personalInterests: string;
}

const countries = [
  "Select Country",
  "Australia",
  "Canada", 
  "Germany",
  "Singapore",
  "UK",
  "USA"
];

export default function SOPGenerator() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<SOPFormData>({
    fullName: "",
    email: "",
    contactNumber: "",
    applyingCountry: "",
    universityName: "",
    programName: "",
    academicBackground: "",
    workExperience: "",
    careerGoals: "",
    whyUniversity: "",
    whyCountry: "",
    whyCourse: "",
    futurePlans: "",
    achievements: "",
    extracurricular: "",
    personalInterests: ""
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleInputChange = (field: keyof SOPFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateProgress = () => {
    const requiredFields = Object.values(formData).filter(value => value.trim() !== "");
    return Math.round((requiredFields.length / Object.keys(formData).length) * 100);
  };

  const [generatedSOP, setGeneratedSOP] = useState<string>("");
  const [showSOP, setShowSOP] = useState(false);

  const handleGenerateSOP = async () => {
    const progressValue = calculateProgress();
    if (progressValue < 80) {
      toast({
        title: "Incomplete Form",
        description: "Please fill out at least 80% of the form to generate your SOP.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    setProgress(0);

    try {
      // Start progress animation
      const progressInterval = setInterval(() => {
        setProgress(prev => prev < 90 ? prev + 15 : prev);
      }, 500);

      // Call the API to generate SOP
      const response = await fetch('/api/generate-sop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          aiProvider: 'gemini' // or 'openai'
        }),
      });

      const result = await response.json();
      
      clearInterval(progressInterval);
      setProgress(100);

      if (result.success) {
        setGeneratedSOP(result.sopText);
        setShowSOP(true);
        toast({
          title: "SOP Generated Successfully!",
          description: "Your Statement of Purpose has been created and is ready for download.",
        });
      } else {
        throw new Error(result.message || 'Failed to generate SOP');
      }
    } catch (error) {
      setProgress(0);
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate SOP. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadSOP = async (format: 'docx' | 'pdf' = 'docx') => {
    try {
      const response = await fetch('/api/generate-sop-document', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sopText: generatedSOP,
          studentName: formData.fullName,
          format
        }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `${formData.fullName.replace(/\s+/g, '_')}_SOP.${format}`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        toast({
          title: "Download Started",
          description: `Your SOP ${format.toUpperCase()} file is being downloaded.`,
        });
      } else {
        throw new Error('Failed to download SOP document');
      }
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to download SOP document. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-400 to-cyan-500 py-16">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Sparkles className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">AI-Powered SOP Generator</h1>
          <p className="text-lg mb-2">Powered by</p>
          <h2 className="text-2xl font-semibold mb-4">DTR Consultation</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Create your Statement of Purpose in minutes by providing your details below.
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Progress</span>
            </div>
            <span className="text-sm font-medium text-gray-900">
              {calculateProgress()}% Complete
            </span>
          </div>
          <Progress value={calculateProgress()} className="h-2" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Instructions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Let's Create Your SOP</span>
            </CardTitle>
            <CardDescription>
              Fill out the form below step by step. Don't worry - you can always come back and edit!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start space-x-2">
                <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900 mb-2">Quick Tip:</p>
                  <p className="text-blue-800 text-sm">
                    The more details you provide, the better your SOP will be. Take your time!
                  </p>
                </div>
              </div>
            </div>
            
            {/* Pro Tips */}
            <div className="mt-4 bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Star className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900">Pro Tips</h4>
              </div>
              <ul className="space-y-1 text-sm text-purple-800">
                <li>• Be specific about your achievements and experiences</li>
                <li>• Research the university and program thoroughly</li>
                <li>• Connect your past experiences to future goals</li>
                <li>• Show genuine passion for your chosen field</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5 text-blue-600" />
              <span>Personal Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="e.g., John Smith"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                />
                <p className="text-xs text-gray-500">Use your full legal name as it appears on documents</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.smith@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
                <p className="text-xs text-gray-500">Use your primary email address</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input
                  id="contactNumber"
                  placeholder="+1 (555) 123-4567"
                  value={formData.contactNumber}
                  onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                />
                <p className="text-xs text-gray-500">Include country code for international numbers</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="applyingCountry">Applying Country</Label>
                <Select value={formData.applyingCountry} onValueChange={(value) => handleInputChange("applyingCountry", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">Choose where you want to study</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Academic Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GraduationCap className="h-5 w-5 text-teal-600" />
              <span>Academic Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="universityName">University Name</Label>
                <Input
                  id="universityName"
                  placeholder="e.g., Harvard University, MIT, Oxford"
                  value={formData.universityName}
                  onChange={(e) => handleInputChange("universityName", e.target.value)}
                />
                <p className="text-xs text-gray-500">Enter the full official name of your target university</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="programName">Program Name</Label>
                <Input
                  id="programName"
                  placeholder="e.g., Master of Computer Science, MBA"
                  value={formData.programName}
                  onChange={(e) => handleInputChange("programName", e.target.value)}
                />
                <p className="text-xs text-gray-500">Be specific about the degree and field of study</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="academicBackground">Academic Background</Label>
              <Textarea
                id="academicBackground"
                placeholder="Example: Bachelor's in Engineering from XYZ University (2020-2024), GPA: 3.8/4.0, Dean's List for 3 semesters, relevant coursework in..."
                value={formData.academicBackground}
                onChange={(e) => handleInputChange("academicBackground", e.target.value)}
                className="min-h-[100px]"
              />
              <p className="text-xs text-gray-500">Include your degrees, university names, honors, and relevant coursework</p>
            </div>
          </CardContent>
        </Card>

        {/* Experience & Goals */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-green-600" />
              <span>Experience & Goals</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="workExperience">Work/Internship Experience</Label>
              <Textarea
                id="workExperience"
                placeholder="Describe your work experience, internships, or projects"
                value={formData.workExperience}
                onChange={(e) => handleInputChange("workExperience", e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="careerGoals">Career Goals</Label>
              <Textarea
                id="careerGoals"
                placeholder="What are your long-term career aspirations?"
                value={formData.careerGoals}
                onChange={(e) => handleInputChange("careerGoals", e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Motivations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-pink-600" />
              <span>Motivations</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="whyUniversity">Why this University?</Label>
              <Textarea
                id="whyUniversity"
                placeholder="What attracts you to this specific university?"
                value={formData.whyUniversity}
                onChange={(e) => handleInputChange("whyUniversity", e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whyCountry">Why this Country?</Label>
              <Textarea
                id="whyCountry"
                placeholder="Why did you choose to study in this country?"
                value={formData.whyCountry}
                onChange={(e) => handleInputChange("whyCountry", e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whyCourse">Why this Course?</Label>
              <Textarea
                id="whyCourse"
                placeholder="How does this course align with your goals?"
                value={formData.whyCourse}
                onChange={(e) => handleInputChange("whyCourse", e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Future Plans & Achievements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-yellow-600" />
              <span>Future Plans & Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="futurePlans">Future Plans after Graduation</Label>
              <Textarea
                id="futurePlans"
                placeholder="What are your post-graduation plans?"
                value={formData.futurePlans}
                onChange={(e) => handleInputChange("futurePlans", e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="achievements">Scholarships, Awards, or Achievements</Label>
              <Textarea
                id="achievements"
                placeholder="List any notable achievements, awards, or scholarships"
                value={formData.achievements}
                onChange={(e) => handleInputChange("achievements", e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="extracurricular">Extra-Curricular Activities</Label>
              <Textarea
                id="extracurricular"
                placeholder="Clubs, sports, volunteering, leadership roles"
                value={formData.extracurricular}
                onChange={(e) => handleInputChange("extracurricular", e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="personalInterests">Personal Interests & Hobbies</Label>
              <Textarea
                id="personalInterests"
                placeholder="What do you enjoy doing in your free time?"
                value={formData.personalInterests}
                onChange={(e) => handleInputChange("personalInterests", e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Generate SOP Section */}
        <Card className="mb-8 bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-teal-600 p-3 rounded-full">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Ready to Generate Your SOP?
            </h3>
            <p className="text-gray-600 mb-6">
              Click the button below to create your personalized Statement of Purpose
            </p>
            
            {isGenerating ? (
              <div className="space-y-4">
                <Progress value={progress} className="max-w-md mx-auto" />
                <p className="text-sm text-gray-600">Generating your SOP... {progress}%</p>
                <div className="flex justify-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>Takes less than 5 seconds</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FileText className="h-3 w-3" />
                    <span>Professional format</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-3 w-3" />
                    <span>Ready to use</span>
                  </div>
                </div>
              </div>
            ) : showSOP ? (
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 border-green-300">
                  SOP Generated Successfully!
                </Badge>
                <div className="flex justify-center space-x-4">
                  <Button
                    onClick={() => handleDownloadSOP('docx')}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download DOCX
                  </Button>
                  <Button
                    onClick={() => setShowSOP(false)}
                    variant="outline"
                  >
                    Generate New SOP
                  </Button>
                </div>
              </div>
            ) : (
              <Button
                onClick={handleGenerateSOP}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
                size="lg"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Generate My SOP Now!
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Generated SOP Display */}
        {showSOP && generatedSOP && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-green-600" />
                <span>Your Generated Statement of Purpose</span>
              </CardTitle>
              <CardDescription>
                Preview of your generated SOP. You can download it as a DOCX file.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border max-h-96 overflow-y-auto">
                <div className="prose prose-sm max-w-none">
                  {generatedSOP.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-800 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-4 space-x-4">
                <Button
                  onClick={() => handleDownloadSOP('docx')}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download as DOCX
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Testimonials */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>What Students Say</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                    S
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600">Admitted to MIT</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  "This tool helped me create a compelling SOP that got me into my dream university. The AI suggestions were spot-on!"
                </p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                    R
                  </div>
                  <div>
                    <h4 className="font-semibold">Raj Patel</h4>
                    <p className="text-sm text-gray-600">Admitted to Oxford</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  "Saved me weeks of writing and editing. The generated SOP was professional and perfectly structured."
                </p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}