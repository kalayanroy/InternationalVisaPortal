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

export default function USAUniversities() {
  const topUniversities = [
    {
      name: "Harvard University",
      location: "Cambridge, Massachusetts",
      worldRanking: 1,
      usRanking: 1,
      acceptanceRate: "3.4%",
      tuitionFee: "$59,076",
      averageSAT: "1520-1580",
      averageGPA: "4.0",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop&auto=format",
      specialties: ["Business", "Medicine", "Law", "Engineering"],
      founded: 1636,
      students: 23000,
      internationalStudents: "22%"
    },
    {
      name: "Stanford University",
      location: "Stanford, California",
      worldRanking: 2,
      usRanking: 3,
      acceptanceRate: "3.9%",
      tuitionFee: "$61,731",
      averageSAT: "1510-1570",
      averageGPA: "3.96",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=300&fit=crop&auto=format",
      specialties: ["Computer Science", "Engineering", "Business", "Medicine"],
      founded: 1885,
      students: 17000,
      internationalStudents: "23%"
    },
    {
      name: "Massachusetts Institute of Technology",
      location: "Cambridge, Massachusetts",
      worldRanking: 1,
      usRanking: 2,
      acceptanceRate: "4.1%",
      tuitionFee: "$59,750",
      averageSAT: "1540-1580",
      averageGPA: "4.0",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=300&fit=crop&auto=format",
      specialties: ["Engineering", "Computer Science", "Physics", "Economics"],
      founded: 1861,
      students: 11000,
      internationalStudents: "33%"
    },
    {
      name: "California Institute of Technology",
      location: "Pasadena, California",
      worldRanking: 6,
      usRanking: 9,
      acceptanceRate: "3.9%",
      tuitionFee: "$63,255",
      averageSAT: "1530-1580",
      averageGPA: "4.0",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
      specialties: ["Engineering", "Physics", "Chemistry", "Mathematics"],
      founded: 1891,
      students: 2200,
      internationalStudents: "27%"
    },
    {
      name: "University of Chicago",
      location: "Chicago, Illinois",
      worldRanking: 10,
      usRanking: 6,
      acceptanceRate: "5.4%",
      tuitionFee: "$64,965",
      averageSAT: "1520-1580",
      averageGPA: "4.0",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&auto=format",
      specialties: ["Economics", "Business", "Political Science", "Physics"],
      founded: 1890,
      students: 17000,
      internationalStudents: "25%"
    },
    {
      name: "Princeton University",
      location: "Princeton, New Jersey",
      worldRanking: 12,
      usRanking: 1,
      acceptanceRate: "4.4%",
      tuitionFee: "$59,710",
      averageSAT: "1510-1570",
      averageGPA: "3.95",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
      specialties: ["Engineering", "Economics", "Computer Science", "Politics"],
      founded: 1746,
      students: 5400,
      internationalStudents: "24%"
    }
  ];

  const popularCourses = {
    "Engineering": [
      "Computer Science & Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Biomedical Engineering",
      "Chemical Engineering"
    ],
    "Business": [
      "Master of Business Administration (MBA)",
      "Finance",
      "Marketing",
      "International Business",
      "Management",
      "Entrepreneurship"
    ],
    "Medicine & Health": [
      "Doctor of Medicine (MD)",
      "Nursing",
      "Public Health",
      "Pharmacy",
      "Dentistry",
      "Physical Therapy"
    ],
    "Liberal Arts": [
      "Psychology",
      "Political Science",
      "Economics",
      "International Relations",
      "English Literature",
      "History"
    ],
    "Sciences": [
      "Biology",
      "Chemistry",
      "Physics",
      "Mathematics",
      "Environmental Science",
      "Data Science"
    ]
  };

  const visaRequirements = [
    {
      type: "F-1 Student Visa",
      description: "Most common visa for international students",
      requirements: [
        "Form I-20 from US institution",
        "SEVIS fee payment ($350)",
        "DS-160 application form",
        "Visa interview at US embassy",
        "Financial proof (bank statements)",
        "Academic transcripts",
        "English proficiency test scores"
      ]
    },
    {
      type: "J-1 Exchange Visitor",
      description: "For exchange programs and research",
      requirements: [
        "Form DS-2019 from sponsor",
        "SEVIS fee payment ($220)",
        "DS-160 application form",
        "Program sponsor approval",
        "Financial documentation",
        "Health insurance requirement"
      ]
    }
  ];

  const costBreakdown = [
    {
      category: "Tuition & Fees",
      range: "$30,000 - $65,000",
      description: "Annual tuition varies by institution type and program"
    },
    {
      category: "Living Expenses",
      range: "$15,000 - $25,000",
      description: "Room, board, and personal expenses"
    },
    {
      category: "Books & Supplies",
      range: "$1,500 - $3,000",
      description: "Textbooks and academic materials"
    },
    {
      category: "Health Insurance",
      range: "$2,000 - $4,000",
      description: "Mandatory health coverage for students"
    },
    {
      category: "Transportation",
      range: "$1,000 - $3,000",
      description: "Local travel and flights home"
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
            <span className="text-6xl">🇺🇸</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                Study in United States
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl">
                Explore world-renowned universities, cutting-edge research opportunities, and diverse academic programs in the land of innovation and opportunity.
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
              <div className="text-3xl font-playfair font-bold text-navy mb-2">4,000+</div>
              <div className="text-slate-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">1M+</div>
              <div className="text-slate-600">International Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">15,000+</div>
              <div className="text-slate-600">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">50+</div>
              <div className="text-slate-600">States</div>
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
              Visa Requirements
            </TabsTrigger>
            <TabsTrigger value="costs" className="data-[state=active]:bg-navy data-[state=active]:text-white">
              Cost Information
            </TabsTrigger>
          </TabsList>

          <TabsContent value="universities" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-navy mb-4">
                Top US Universities
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Discover America's most prestigious institutions with world-class faculty, cutting-edge research, and exceptional career outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {topUniversities.map((university, index) => {
                const universityRoutes = {
                  "Harvard University": "/harvard-university",
                  "Stanford University": "/stanford-university",
                  "Massachusetts Institute of Technology": "/mit-university",
                  "California Institute of Technology": "/caltech-university",
                  "University of Chicago": "/chicago-university",
                  "Princeton University": "/princeton-university"
                };
                
                const route = universityRoutes[university.name as keyof typeof universityRoutes];
                
                return (
                  <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-white to-slate-50">
                    <div>
                      {route ? (
                        <Link href={route}>
                          <div className="relative h-48">
                            <img
                              src={university.image}
                              alt={university.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute top-4 right-4">
                              <Badge className="bg-gold text-navy shadow-lg">
                                #{university.worldRanking} World
                              </Badge>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-xl font-playfair font-bold text-white mb-1 group-hover:text-gold transition-colors">
                                {university.name}
                              </h3>
                              <p className="text-white/90 text-sm flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {university.location}
                              </p>
                            </div>
                            <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-300" />
                          </div>
                        </Link>
                      ) : (
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
                      )}
                    
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
                                SAT: {university.averageSAT}
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-navy mb-2">Popular Specialties</h4>
                            <div className="flex flex-wrap gap-2">
                              {university.specialties.map((specialty: string, idx: number) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-navy mb-4">
                Popular Academic Programs
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Explore diverse academic opportunities across top fields of study in American universities.
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
                Everything you need to know about obtaining a student visa for the United States.
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
                    <h3 className="font-semibold text-blue-900 mb-2">Important Notes</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Visa processing time: 2-8 weeks</li>
                      <li>• Interview scheduling may take additional weeks</li>
                      <li>• Start the process at least 3-4 months before program start date</li>
                      <li>• F-1 visa allows on-campus work and optional practical training (OPT)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="costs" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-navy mb-4">
                Cost of Studying in USA
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive breakdown of expenses for international students studying in the United States.
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
                  <div className="text-4xl font-bold text-navy mb-4">$50,000 - $100,000</div>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    This includes all expenses for one academic year. Costs vary significantly by location, 
                    institution type (public vs private), and lifestyle choices.
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
                      <span>Merit-based scholarships available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>Need-based financial aid</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>Graduate assistantships</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>External scholarship opportunities</span>
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
                      <span>On-campus work (20 hrs/week)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>Curricular Practical Training (CPT)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>Optional Practical Training (OPT)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>STEM OPT extension (24 months)</span>
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
                Ready to Start Your American Dream?
              </h3>
              <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
                Our expert counselors will guide you through every step of the application process, 
                from university selection to visa approval.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gold text-navy hover:bg-gold/90 px-8 py-3">
                  Schedule Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-8 py-3">
                  Download USA Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}