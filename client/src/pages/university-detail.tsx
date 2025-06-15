import Header from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Star, 
  DollarSign, 
  FileText, 
  Users, 
  MapPin, 
  Clock,
  Award,
  TrendingUp,
  Globe,
  BookOpen,
  GraduationCap,
  Calendar,
  CheckCircle,
  Building
} from "lucide-react";
import { Link } from "wouter";

export default function UniversityDetail() {
  const universityInfo = {
    name: "Harvard University",
    location: "Cambridge, Massachusetts, USA",
    founded: 1636,
    worldRanking: 1,
    usRanking: 1,
    acceptance: "3.4%",
    students: 23000,
    international: "22%",
    endowment: "$53.2 billion",
    facultyRatio: "6:1",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&auto=format"
  };

  const schools = [
    {
      name: "Harvard Medical School",
      tuition: "$69,300",
      duration: "4 years",
      requirements: "MCAT, Pre-med courses",
      deadline: "October 15"
    },
    {
      name: "Harvard Business School",
      tuition: "$73,440",
      duration: "2 years",
      requirements: "GMAT/GRE, Work experience",
      deadline: "April 2"
    },
    {
      name: "Harvard Law School",
      tuition: "$70,430",
      duration: "3 years",
      requirements: "LSAT, Bachelor's degree",
      deadline: "February 15"
    },
    {
      name: "School of Engineering",
      tuition: "$59,076",
      duration: "4 years",
      requirements: "SAT/ACT, Strong math/science",
      deadline: "January 1"
    },
    {
      name: "Graduate School of Education",
      tuition: "$55,272",
      duration: "1-2 years",
      requirements: "GRE, Teaching experience preferred",
      deadline: "January 2"
    },
    {
      name: "Kennedy School of Government",
      tuition: "$65,875",
      duration: "2 years",
      requirements: "GRE/GMAT, Policy experience",
      deadline: "December 1"
    }
  ];

  const visaRequirements = {
    f1Visa: {
      processing: "3-5 weeks",
      fee: "$185",
      interview: "Required",
      requirements: [
        "Form I-20 from Harvard University",
        "SEVIS fee payment ($350)",
        "DS-160 application completed online",
        "Valid passport (6+ months validity)",
        "Financial documentation ($85,000+ for first year)",
        "Academic transcripts and test scores",
        "Visa interview at US Embassy/Consulate",
        "Biometric appointment if required"
      ]
    },
    j1Visa: {
      processing: "2-4 weeks", 
      fee: "$185",
      interview: "Required",
      requirements: [
        "Form DS-2019 from Harvard",
        "SEVIS fee payment ($220)",
        "Two-year home residency requirement",
        "Health insurance mandatory",
        "Program sponsor verification"
      ]
    }
  };

  const costs = {
    undergraduate: {
      tuition: "$59,076",
      fees: "$4,195",
      roomBoard: "$20,374",
      books: "$1,000",
      personal: "$2,500",
      total: "$87,145"
    },
    graduate: {
      tuition: "$55,272 - $73,440",
      fees: "$3,500 - $5,000",
      roomBoard: "$18,000 - $25,000",
      books: "$1,200",
      personal: "$3,000",
      total: "$80,972 - $107,640"
    }
  };

  const scholarships = [
    {
      name: "Harvard Financial Aid",
      amount: "Up to full tuition",
      criteria: "Need-based, family income under $85,000",
      coverage: "100% of families earning less than $85,000 pay nothing"
    },
    {
      name: "Harvard Merit Scholarships",
      amount: "$5,000 - $25,000",
      criteria: "Academic excellence, leadership",
      coverage: "Various partial awards"
    },
    {
      name: "International Student Aid",
      amount: "Variable",
      criteria: "Financial need demonstration",
      coverage: "Same aid policy as domestic students"
    }
  ];

  const admissionTimeline = [
    { date: "August - October", task: "Prepare application materials" },
    { date: "November 1", task: "Early Action deadline" },
    { date: "January 1", task: "Regular Decision deadline" },
    { date: "Mid-December", task: "Early Action results" },
    { date: "Late March", task: "Regular Decision results" },
    { date: "May 1", task: "Enrollment deposit deadline" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <div className="relative pt-20 pb-20 bg-gradient-to-br from-navy via-navy/95 to-navy/90 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent)] opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.08),transparent)]"></div>
        
        <div className="absolute inset-0">
          <img 
            src={universityInfo.image} 
            alt="Harvard University" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/80" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/universities" className="inline-flex items-center text-gold hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Universities
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Badge className="bg-gold text-navy px-4 py-2 text-lg font-bold">
                  #1 World Ranking
                </Badge>
                <Badge variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm">
                  Founded {universityInfo.founded}
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {universityInfo.name}
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                America's oldest institution of higher education, renowned for academic excellence, 
                groundbreaking research, and producing world leaders across all fields.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 text-white">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-gold" />
                  <span>{universityInfo.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-gold" />
                  <span>{universityInfo.students.toLocaleString()} students</span>
                </div>
              </div>
            </div>
            
            <div className="lg:justify-self-end">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-navy mb-6">Key Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Acceptance Rate</span>
                      <span className="font-bold text-navy">{universityInfo.acceptance}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Student-Faculty Ratio</span>
                      <span className="font-bold text-navy">{universityInfo.facultyRatio}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">International Students</span>
                      <span className="font-bold text-navy">{universityInfo.international}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Endowment</span>
                      <span className="font-bold text-navy">{universityInfo.endowment}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="schools" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white shadow-lg rounded-2xl p-2 border border-slate-200">
            <TabsTrigger value="schools" className="data-[state=active]:bg-navy data-[state=active]:text-white rounded-xl font-semibold">
              Schools & Programs
            </TabsTrigger>
            <TabsTrigger value="admissions" className="data-[state=active]:bg-navy data-[state=active]:text-white rounded-xl font-semibold">
              Admissions
            </TabsTrigger>
            <TabsTrigger value="visa" className="data-[state=active]:bg-navy data-[state=active]:text-white rounded-xl font-semibold">
              Visa Process
            </TabsTrigger>
            <TabsTrigger value="costs" className="data-[state=active]:bg-navy data-[state=active]:text-white rounded-xl font-semibold">
              Costs & Aid
            </TabsTrigger>
            <TabsTrigger value="timeline" className="data-[state=active]:bg-navy data-[state=active]:text-white rounded-xl font-semibold">
              Timeline
            </TabsTrigger>
          </TabsList>

          <TabsContent value="schools" className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2 mb-6">
                <GraduationCap className="h-4 w-4 text-navy" />
                <span className="text-sm font-medium text-navy">Academic Excellence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Schools & Programs
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Harvard offers undergraduate and graduate programs across multiple schools, each with specific requirements and costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {schools.map((school, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-gold/30 bg-white hover:-translate-y-2">
                  <div className="relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/20 to-transparent rounded-full blur-xl" />
                    <CardHeader className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-navy/10 rounded-xl">
                          <Building className="h-6 w-6 text-navy" />
                        </div>
                        <Badge className="bg-navy/10 text-navy font-semibold">{school.duration}</Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-navy group-hover:text-gold transition-colors">
                        {school.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                          <div className="text-xl font-bold text-green-800">{school.tuition}</div>
                          <div className="text-sm text-green-700">Annual Tuition</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                          <div className="text-sm font-bold text-blue-800">{school.deadline}</div>
                          <div className="text-sm text-blue-700">Application Deadline</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-navy flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-gold" />
                          Requirements
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{school.requirements}</p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="admissions" className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2 mb-6">
                <FileText className="h-4 w-4 text-navy" />
                <span className="text-sm font-medium text-navy">Application Process</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Admission Requirements
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Harvard maintains the highest academic standards with holistic evaluation of candidates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mr-4">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-navy">Undergraduate</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Common Application or Coalition Application</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">SAT or ACT scores</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">High school transcript</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Teacher recommendations (2)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Personal essays</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Extracurricular activities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-white hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mr-4">
                      <Award className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-navy">Graduate</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Bachelor's degree from accredited institution</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">GRE/GMAT/LSAT/MCAT (program specific)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Official transcripts</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Letters of recommendation (3)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Statement of purpose</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Research experience (preferred)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="visa" className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2 mb-6">
                <Globe className="h-4 w-4 text-navy" />
                <span className="text-sm font-medium text-navy">International Students</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Visa Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Complete guide to obtaining your student visa for studying at Harvard University.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-navy flex items-center">
                    <FileText className="h-6 w-6 mr-3 text-green-600" />
                    F-1 Student Visa
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <div className="font-bold text-green-800">{visaRequirements.f1Visa.processing}</div>
                      <div className="text-xs text-green-700">Processing Time</div>
                    </div>
                    <div className="p-3 bg-green-100 rounded-lg">
                      <div className="font-bold text-green-800">{visaRequirements.f1Visa.fee}</div>
                      <div className="text-xs text-green-700">Visa Fee</div>
                    </div>
                    <div className="p-3 bg-green-100 rounded-lg">
                      <div className="font-bold text-green-800">Required</div>
                      <div className="text-xs text-green-700">Interview</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {visaRequirements.f1Visa.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-navy flex items-center">
                    <FileText className="h-6 w-6 mr-3 text-blue-600" />
                    J-1 Exchange Visa
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <div className="font-bold text-blue-800">{visaRequirements.j1Visa.processing}</div>
                      <div className="text-xs text-blue-700">Processing Time</div>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <div className="font-bold text-blue-800">{visaRequirements.j1Visa.fee}</div>
                      <div className="text-xs text-blue-700">Visa Fee</div>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <div className="font-bold text-blue-800">Required</div>
                      <div className="text-xs text-blue-700">Interview</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {visaRequirements.j1Visa.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="costs" className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2 mb-6">
                <DollarSign className="h-4 w-4 text-navy" />
                <span className="text-sm font-medium text-navy">Financial Planning</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Costs & Financial Aid
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive breakdown of costs and available financial aid opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-navy">Undergraduate Costs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(costs.undergraduate).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                      <span className="text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className={`font-bold ${key === 'total' ? 'text-xl text-navy' : 'text-slate-800'}`}>
                        {value}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-navy">Graduate Costs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(costs.graduate).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                      <span className="text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className={`font-bold ${key === 'total' ? 'text-xl text-navy' : 'text-slate-800'}`}>
                        {value}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">Scholarships & Financial Aid</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {scholarships.map((scholarship, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-gold/5 to-white hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-navy">{scholarship.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-center p-4 bg-gold/10 rounded-xl">
                        <div className="font-bold text-navy">{scholarship.amount}</div>
                        <div className="text-sm text-slate-600">Award Amount</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Criteria:</h4>
                        <p className="text-sm text-slate-600">{scholarship.criteria}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Coverage:</h4>
                        <p className="text-sm text-slate-600">{scholarship.coverage}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2 mb-6">
                <Calendar className="h-4 w-4 text-navy" />
                <span className="text-sm font-medium text-navy">Application Timeline</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Admission Timeline
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Important dates and deadlines for your Harvard University application.
              </p>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-white">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {admissionTimeline.map((item, index) => (
                    <div key={index} className="flex items-center space-x-6 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-navy">{item.date}</h3>
                            <p className="text-slate-600">{item.task}</p>
                          </div>
                          <div className="mt-2 sm:mt-0">
                            <Calendar className="h-5 w-5 text-gold" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-br from-navy to-navy/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Apply to Harvard?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Get expert guidance on your Harvard University application with our comprehensive consultation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-4 text-lg rounded-lg shadow-lg">
                Book Application Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 text-lg rounded-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}