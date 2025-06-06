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
  GraduationCap
} from "lucide-react";
import { Link } from "wouter";

export default function AustraliaUniversities() {
  const topUniversities = [
    {
      name: "University of Melbourne",
      location: "Melbourne, Victoria",
      worldRanking: 14,
      australiaRanking: 1,
      acceptanceRate: "70-80%",
      tuitionFee: "AUD $45,824",
      averageIELTS: "6.5-7.0",
      averageGPA: "3.0+",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop&auto=format",
      specialties: ["Medicine", "Law", "Engineering", "Business"],
      founded: 1853,
      students: 50000,
      internationalStudents: "45%"
    },
    {
      name: "Australian National University",
      location: "Canberra, ACT",
      worldRanking: 27,
      australiaRanking: 2,
      acceptanceRate: "35%",
      tuitionFee: "AUD $46,910",
      averageIELTS: "6.5-7.0",
      averageGPA: "3.5+",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop&auto=format",
      specialties: ["Politics", "International Relations", "Economics", "Sciences"],
      founded: 1946,
      students: 25000,
      internationalStudents: "42%"
    },
    {
      name: "University of Sydney",
      location: "Sydney, New South Wales",
      worldRanking: 41,
      australiaRanking: 3,
      acceptanceRate: "30%",
      tuitionFee: "AUD $50,000",
      averageIELTS: "6.5-7.5",
      averageGPA: "3.2+",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop&auto=format",
      specialties: ["Medicine", "Engineering", "Architecture", "Business"],
      founded: 1850,
      students: 73000,
      internationalStudents: "40%"
    },
    {
      name: "University of New South Wales",
      location: "Sydney, New South Wales",
      worldRanking: 45,
      australiaRanking: 4,
      acceptanceRate: "25%",
      tuitionFee: "AUD $47,760",
      averageIELTS: "6.5-7.0",
      averageGPA: "3.0+",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop&auto=format",
      specialties: ["Engineering", "Business", "Medicine", "Art & Design"],
      founded: 1949,
      students: 65000,
      internationalStudents: "38%"
    },
    {
      name: "University of Queensland",
      location: "Brisbane, Queensland",
      worldRanking: 50,
      australiaRanking: 5,
      acceptanceRate: "63%",
      tuitionFee: "AUD $45,120",
      averageIELTS: "6.5",
      averageGPA: "3.0+",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop&auto=format",
      specialties: ["Mining Engineering", "Agriculture", "Veterinary Science", "Business"],
      founded: 1909,
      students: 53000,
      internationalStudents: "37%"
    },
    {
      name: "Monash University",
      location: "Melbourne, Victoria",
      worldRanking: 57,
      australiaRanking: 6,
      acceptanceRate: "40%",
      tuitionFee: "AUD $45,800",
      averageIELTS: "6.5",
      averageGPA: "3.0+",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop&auto=format",
      specialties: ["Medicine", "Pharmacy", "Engineering", "Business"],
      founded: 1958,
      students: 86000,
      internationalStudents: "44%"
    }
  ];

  const popularCourses = {
    "Engineering & Technology": [
      "Computer Science & IT",
      "Civil Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Mining Engineering",
      "Software Engineering"
    ],
    "Business & Management": [
      "Master of Business Administration (MBA)",
      "Accounting",
      "Finance",
      "Marketing",
      "International Business",
      "Project Management"
    ],
    "Health Sciences": [
      "Medicine",
      "Nursing",
      "Dentistry",
      "Pharmacy",
      "Public Health",
      "Physiotherapy"
    ],
    "Natural Sciences": [
      "Environmental Science",
      "Marine Biology",
      "Agriculture",
      "Veterinary Science",
      "Geology",
      "Biotechnology"
    ],
    "Liberal Arts": [
      "Psychology",
      "Education",
      "Communications",
      "International Relations",
      "Social Work",
      "Criminology"
    ]
  };

  const visaRequirements = [
    {
      type: "Student Visa (Subclass 500)",
      description: "Primary visa for international students",
      requirements: [
        "Confirmation of Enrolment (CoE)",
        "Genuine Temporary Entrant (GTE) statement",
        "Financial evidence (AUD $21,041 + tuition)",
        "English proficiency (IELTS/TOEFL/PTE)",
        "Health insurance (OSHC)",
        "Health examination",
        "Character requirements",
        "Visa application fee (AUD $650)"
      ]
    },
    {
      type: "Student Guardian Visa (Subclass 590)",
      description: "For guardians of students under 18",
      requirements: [
        "Relationship evidence with student",
        "Financial capacity evidence",
        "Health insurance",
        "Character requirements",
        "Adequate welfare arrangements",
        "Visa application fee (AUD $650)"
      ]
    }
  ];

  const costBreakdown = [
    {
      category: "Tuition Fees",
      range: "AUD $30,000 - $55,000",
      description: "Annual fees vary by program and university"
    },
    {
      category: "Living Expenses",
      range: "AUD $21,041 - $25,000",
      description: "Government minimum requirement plus comfortable living"
    },
    {
      category: "Health Insurance (OSHC)",
      range: "AUD $500 - $700",
      description: "Mandatory Overseas Student Health Cover"
    },
    {
      category: "Books & Materials",
      range: "AUD $1,000 - $2,000",
      description: "Textbooks and academic supplies"
    },
    {
      category: "Transportation",
      range: "AUD $1,500 - $3,000",
      description: "Public transport and domestic travel"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <div className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-gold mb-6 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center space-x-6">
            <span className="text-6xl">🇦🇺</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                Study in Australia
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl">
                Experience world-class education in a vibrant multicultural environment with excellent work opportunities and beautiful cities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Banner */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">43</div>
              <div className="text-slate-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">400K+</div>
              <div className="text-slate-600">International Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">22,000+</div>
              <div className="text-slate-600">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">2-4</div>
              <div className="text-slate-600">Years Work Rights</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="universities" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-slate-100">
            <TabsTrigger value="universities" className="data-[state=active]:bg-navy data-[state=active]:text-white">
              Top Universities
            </TabsTrigger>
            <TabsTrigger value="courses" className="data-[state=active]:bg-navy data-[state=active]:text-white">
              Popular Courses
            </TabsTrigger>
            <TabsTrigger value="visa" className="data-[state=active]:bg-navy data-[state=active]:text-white">
              Student Visa
            </TabsTrigger>
            <TabsTrigger value="costs" className="data-[state=active]:bg-navy data-[state=active]:text-white">
              Cost Information
            </TabsTrigger>
          </TabsList>

          <TabsContent value="universities" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-navy mb-4">
                Top Australian Universities
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Discover Australia's leading institutions known for research excellence, innovation, and strong industry connections.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {topUniversities.map((university, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gold text-navy">
                        #{university.worldRanking} World
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-playfair font-bold text-white mb-1">
                        {university.name}
                      </h3>
                      <p className="text-white/90 text-sm flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {university.location}
                      </p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <div className="text-lg font-bold text-navy">{university.acceptanceRate}</div>
                        <div className="text-sm text-slate-600">Acceptance Rate</div>
                      </div>
                      <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <div className="text-lg font-bold text-navy">{university.tuitionFee}</div>
                        <div className="text-sm text-slate-600">Annual Tuition</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Key Information</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-slate-500" />
                            {university.students.toLocaleString()} students
                          </div>
                          <div className="flex items-center">
                            <Globe className="h-4 w-4 mr-2 text-slate-500" />
                            {university.internationalStudents} international
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-slate-500" />
                            Founded {university.founded}
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 mr-2 text-slate-500" />
                            IELTS: {university.averageIELTS}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-navy mb-2">Popular Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {university.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-navy mb-4">
                Popular Academic Programs
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Explore diverse academic opportunities across top fields of study in Australian universities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(popularCourses).map(([category, courses], index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-navy">{category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {courses.map((course, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                          <GraduationCap className="h-4 w-4 text-gold flex-shrink-0" />
                          <span className="text-sm text-slate-700">{course}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="visa" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-navy mb-4">
                Student Visa Requirements
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Complete guide to obtaining a student visa for studying in Australia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visaRequirements.map((visa, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-navy" />
                      <span>{visa.type}</span>
                    </CardTitle>
                    <p className="text-slate-600">{visa.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-navy mb-4">Required Documents:</h4>
                    <div className="space-y-3">
                      {visa.requirements.map((requirement, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Work & Post-Study Benefits</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Work 48 hours/fortnight during studies</li>
                      <li>• Post-Study Work Visa: 2-4 years</li>
                      <li>• Pathway to permanent residency</li>
                      <li>• Partner can work full-time with dependent visa</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="costs" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-navy mb-4">
                Cost of Studying in Australia
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive breakdown of expenses for international students studying in Australia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {costBreakdown.map((cost, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-playfair font-bold text-navy mb-2">{cost.category}</h3>
                    <div className="text-2xl font-bold text-gold mb-3">{cost.range}</div>
                    <p className="text-sm text-slate-600">{cost.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gold/10 border-gold/20">
              <CardContent className="p-8">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-playfair font-bold text-navy mb-4">
                    Total Estimated Annual Cost
                  </h3>
                  <div className="text-4xl font-bold text-navy mb-4">AUD $55,000 - $85,000</div>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    This includes all expenses for one academic year. Sydney and Melbourne are more expensive than other cities.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-navy">Scholarships & Financial Aid</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>Australia Awards Scholarships</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>University merit scholarships</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>Research Training Program</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>Industry-specific funding</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-navy">Work Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>48 hrs/fortnight during studies</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>Unlimited during breaks</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>Post-Study Work Visa (2-4 years)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>Skilled migration pathways</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-navy text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-playfair font-bold mb-6 text-gold">
                Ready to Start Your Australian Adventure?
              </h3>
              <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
                Our expert counselors will guide you through every step, from university selection to post-study work opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gold text-navy hover:bg-gold/90 px-8 py-3">
                  Schedule Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-8 py-3">
                  Download Australia Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}