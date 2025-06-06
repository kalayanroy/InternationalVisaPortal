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

export default function HarvardUniversity() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/80" />
        <img 
          src={universityInfo.image} 
          alt="Harvard University" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Link href="/usa-universities" className="inline-flex items-center text-gold mb-8 hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to USA Universities
          </Link>
          
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
              
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
                {universityInfo.name}
              </h1>
              
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                America's oldest institution of higher education, renowned for academic excellence, 
                groundbreaking research, and producing world leaders across all fields.
              </p>
              
              <div className="flex items-center space-x-6 text-white">
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
                  <h3 className="text-2xl font-playfair font-bold text-navy mb-6">Key Statistics</h3>
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
              <h2 className="text-4xl font-playfair font-bold text-navy mb-4">
                Schools & Programs
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Harvard offers undergraduate and graduate programs across multiple schools, each with specific requirements and costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {schools.map((school, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-slate-50 overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/20 to-transparent rounded-full blur-xl" />
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <Building className="h-8 w-8 text-navy" />
                      <Badge className="bg-navy/10 text-navy">{school.duration}</Badge>
                    </div>
                    <CardTitle className="text-xl font-playfair text-navy group-hover:text-gold transition-colors">
                      {school.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-navy/5 rounded-xl">
                        <div className="text-2xl font-bold text-navy">{school.tuition}</div>
                        <div className="text-sm text-slate-600">Annual Tuition</div>
                      </div>
                      <div className="text-center p-4 bg-gold/10 rounded-xl">
                        <div className="text-sm font-semibold text-navy">{school.deadline}</div>
                        <div className="text-sm text-slate-600">Application Deadline</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-navy">Requirements:</h4>
                      <p className="text-slate-600 text-sm">{school.requirements}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="admissions" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-navy mb-4">
                Admission Requirements
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Harvard maintains the highest academic standards with holistic evaluation of candidates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-navy">
                    <GraduationCap className="h-6 w-6" />
                    <span>Undergraduate Admissions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">SAT: 1520-1580 (middle 50%)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">ACT: 34-36 (middle 50%)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">GPA: 4.0+ (unweighted)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">TOEFL: 100+ / IELTS: 7.0+</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Strong extracurricular activities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">2 Teacher recommendations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-navy">
                    <BookOpen className="h-6 w-6" />
                    <span>Graduate Admissions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">GRE/GMAT (varies by program)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Bachelor's degree (GPA 3.7+)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">TOEFL: 100+ / IELTS: 7.0+</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">3 Academic recommendations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Statement of purpose</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Research experience preferred</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="visa" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-navy mb-4">
                Harvard Visa Process
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Detailed visa requirements and process specifically for Harvard University students.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-navy">
                    <FileText className="h-6 w-6" />
                    <span>F-1 Student Visa</span>
                  </CardTitle>
                  <p className="text-slate-600">For degree-seeking students at Harvard</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="font-bold text-navy">{visaRequirements.f1Visa.processing}</div>
                          <div className="text-sm text-slate-600">Processing</div>
                        </div>
                        <div>
                          <div className="font-bold text-navy">{visaRequirements.f1Visa.fee}</div>
                          <div className="text-sm text-slate-600">Visa Fee</div>
                        </div>
                        <div>
                          <div className="font-bold text-navy">{visaRequirements.f1Visa.interview}</div>
                          <div className="text-sm text-slate-600">Interview</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-navy mb-3">Required Documents:</h4>
                      <div className="space-y-2">
                        {visaRequirements.f1Visa.requirements.map((req, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-slate-700">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-navy">
                    <FileText className="h-6 w-6" />
                    <span>J-1 Exchange Visa</span>
                  </CardTitle>
                  <p className="text-slate-600">For exchange and research programs</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="font-bold text-navy">{visaRequirements.j1Visa.processing}</div>
                          <div className="text-sm text-slate-600">Processing</div>
                        </div>
                        <div>
                          <div className="font-bold text-navy">{visaRequirements.j1Visa.fee}</div>
                          <div className="text-sm text-slate-600">Visa Fee</div>
                        </div>
                        <div>
                          <div className="font-bold text-navy">{visaRequirements.j1Visa.interview}</div>
                          <div className="text-sm text-slate-600">Interview</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-navy mb-3">Required Documents:</h4>
                      <div className="space-y-2">
                        {visaRequirements.j1Visa.requirements.map((req, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-slate-700">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="costs" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-navy mb-4">
                Harvard Costs & Financial Aid
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive cost breakdown and generous financial aid opportunities at Harvard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-navy">Undergraduate Costs (Annual)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(costs.undergraduate).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="font-bold text-navy">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-white">
                <CardHeader>
                  <CardTitle className="text-navy">Graduate Costs (Annual)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(costs.graduate).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="font-bold text-navy">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-playfair font-bold text-navy mb-6 text-center">
                Harvard Financial Aid & Scholarships
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {scholarships.map((scholarship, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                        <Award className="h-6 w-6 text-gold" />
                      </div>
                      <CardTitle className="text-navy">{scholarship.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <span className="text-sm text-slate-600">Amount: </span>
                        <span className="font-bold text-navy">{scholarship.amount}</span>
                      </div>
                      <div>
                        <span className="text-sm text-slate-600">Criteria: </span>
                        <span className="text-sm">{scholarship.criteria}</span>
                      </div>
                      <div>
                        <span className="text-sm text-slate-600">Coverage: </span>
                        <span className="text-sm">{scholarship.coverage}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-navy mb-4">
                Harvard Application Timeline
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Important dates and deadlines for Harvard University applications.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy via-gold to-navy"></div>
                
                {admissionTimeline.map((item, index) => (
                  <div key={index} className="relative flex items-center mb-8">
                    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <Card className="ml-8 flex-1 border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-bold text-navy mb-2">{item.task}</h3>
                            <p className="text-slate-600">{item.date}</p>
                          </div>
                          <Badge className="bg-gold/20 text-navy">
                            Step {index + 1}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-20">
          <Card className="border-0 bg-gradient-to-r from-navy via-slate-800 to-navy text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10" />
            <CardContent className="relative p-12 text-center">
              <h3 className="text-4xl font-playfair font-bold mb-6 text-gold">
                Ready to Join Harvard's Legacy?
              </h3>
              <p className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto">
                Start your journey to one of the world's most prestigious universities. 
                Our expert counselors will guide you through every step of the Harvard application process.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-gold text-navy hover:bg-gold/90 px-8 py-4 text-lg font-semibold">
                  Start Harvard Application Process
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-8 py-4 text-lg font-semibold">
                  Download Harvard Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}