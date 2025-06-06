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

export default function GermanyUniversities() {
  const topUniversities = [
    {
      name: "Technical University of Munich",
      location: "Munich, Bavaria",
      worldRanking: 50,
      germanyRanking: 1,
      acceptanceRate: "8%",
      tuitionFee: "€150-350",
      averageIELTS: "6.5",
      averageGPA: "2.5+",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop&auto=format",
      specialties: ["Engineering", "Technology", "Natural Sciences", "Medicine"],
      founded: 1868,
      students: 45000,
      internationalStudents: "26%"
    },
    {
      name: "LMU Munich",
      location: "Munich, Bavaria",
      worldRanking: 59,
      germanyRanking: 2,
      acceptanceRate: "15%",
      tuitionFee: "€150-350",
      averageIELTS: "6.5",
      averageGPA: "2.5+",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop&auto=format",
      specialties: ["Medicine", "Law", "Economics", "Liberal Arts"],
      founded: 1472,
      students: 52000,
      internationalStudents: "17%"
    },
    {
      name: "Heidelberg University",
      location: "Heidelberg, Baden-Württemberg",
      worldRanking: 64,
      germanyRanking: 3,
      acceptanceRate: "19%",
      tuitionFee: "€150-350",
      averageIELTS: "6.5",
      averageGPA: "2.5+",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop&auto=format",
      specialties: ["Medicine", "Natural Sciences", "Law", "Philosophy"],
      founded: 1386,
      students: 30000,
      internationalStudents: "20%"
    },
    {
      name: "KIT Karlsruhe",
      location: "Karlsruhe, Baden-Württemberg",
      worldRanking: 141,
      germanyRanking: 4,
      acceptanceRate: "25%",
      tuitionFee: "€150-350",
      averageIELTS: "6.5",
      averageGPA: "2.5+",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop&auto=format",
      specialties: ["Engineering", "Computer Science", "Physics", "Chemistry"],
      founded: 1825,
      students: 25000,
      internationalStudents: "22%"
    },
    {
      name: "Humboldt University Berlin",
      location: "Berlin",
      worldRanking: 131,
      germanyRanking: 5,
      acceptanceRate: "18%",
      tuitionFee: "€150-350",
      averageIELTS: "6.5",
      averageGPA: "2.5+",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop&auto=format",
      specialties: ["Philosophy", "Social Sciences", "Medicine", "Law"],
      founded: 1810,
      students: 35000,
      internationalStudents: "19%"
    },
    {
      name: "RWTH Aachen University",
      location: "Aachen, North Rhine-Westphalia",
      worldRanking: 106,
      germanyRanking: 6,
      acceptanceRate: "10%",
      tuitionFee: "€150-350",
      averageIELTS: "6.5",
      averageGPA: "2.5+",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop&auto=format",
      specialties: ["Engineering", "Technology", "Natural Sciences", "Medicine"],
      founded: 1870,
      students: 47000,
      internationalStudents: "23%"
    }
  ];

  const popularCourses = {
    "Engineering & Technology": [
      "Mechanical Engineering",
      "Computer Science",
      "Electrical Engineering",
      "Automotive Engineering",
      "Industrial Engineering",
      "Chemical Engineering"
    ],
    "Business & Economics": [
      "Business Administration",
      "Economics",
      "International Business",
      "Finance",
      "Management",
      "Marketing"
    ],
    "Natural Sciences": [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "Environmental Science",
      "Materials Science"
    ],
    "Medicine & Health": [
      "Medicine",
      "Dentistry",
      "Pharmacy",
      "Public Health",
      "Biomedical Engineering",
      "Health Management"
    ],
    "Liberal Arts": [
      "Philosophy",
      "History",
      "German Studies",
      "Political Science",
      "Psychology",
      "International Relations"
    ]
  };

  const visaRequirements = [
    {
      type: "National Visa (Type D)",
      description: "For programs longer than 90 days",
      requirements: [
        "University admission letter",
        "Proof of financial resources (€11,208/year)",
        "Valid passport",
        "Academic qualifications",
        "German or English proficiency",
        "Health insurance",
        "Biometric photo",
        "Visa application fee (€75)"
      ]
    },
    {
      type: "EU Blue Card",
      description: "For highly qualified professionals",
      requirements: [
        "University degree",
        "Job offer with minimum salary",
        "German proficiency (B1 level)",
        "Health insurance",
        "Clean criminal record",
        "Valid passport",
        "Application fee (€140)"
      ]
    }
  ];

  const costBreakdown = [
    {
      category: "Tuition Fees (Public)",
      range: "€150 - €350",
      description: "Semester fees at public universities"
    },
    {
      category: "Tuition Fees (Private)",
      range: "€20,000 - €40,000",
      description: "Annual fees at private institutions"
    },
    {
      category: "Living Expenses",
      range: "€850 - €1,200",
      description: "Monthly living costs including accommodation"
    },
    {
      category: "Health Insurance",
      range: "€110 - €120",
      description: "Mandatory monthly health insurance"
    },
    {
      category: "Books & Materials",
      range: "€600 - €1,000",
      description: "Annual cost for academic materials"
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
            <span className="text-6xl">🇩🇪</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                Study in Germany
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl">
                Experience world-class engineering education with low tuition costs, strong industry connections, and excellent career opportunities in Europe's economic powerhouse.
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
              <div className="text-3xl font-playfair font-bold text-navy mb-2">400+</div>
              <div className="text-slate-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">300K+</div>
              <div className="text-slate-600">International Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">17,000+</div>
              <div className="text-slate-600">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">18</div>
              <div className="text-slate-600">Months Job Search</div>
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
                Top German Universities
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Discover Germany's leading institutions renowned for engineering excellence, research innovation, and strong industry partnerships.
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
                        <div className="text-sm text-slate-600">Semester Fee</div>
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
                Explore diverse academic opportunities across top fields of study in German universities.
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
                Visa Requirements
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Complete guide to obtaining a visa for studying in Germany.
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
                      <li>• Work 120 full days or 240 half days per year</li>
                      <li>• 18-month job search visa after graduation</li>
                      <li>• EU Blue Card for skilled professionals</li>
                      <li>• Path to permanent residency after 5 years</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="costs" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-navy mb-4">
                Cost of Studying in Germany
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive breakdown of expenses for international students studying in Germany.
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
                  <div className="text-4xl font-bold text-navy mb-4">€11,000 - €15,000</div>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    This includes all expenses for one academic year at public universities. Private universities cost significantly more.
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
                      <span>DAAD Scholarships</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>Erasmus+ Program</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>Heinrich Böll Foundation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>University-specific scholarships</span>
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
                      <span>120 full days work/year</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>Unlimited student assistant work</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>18-month job search visa</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>EU Blue Card pathway</span>
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
                Ready to Experience German Excellence?
              </h3>
              <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
                Our expert counselors will guide you through every step, from university selection to career opportunities in Germany.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gold text-navy hover:bg-gold/90 px-8 py-3">
                  Schedule Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-8 py-3">
                  Download Germany Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}