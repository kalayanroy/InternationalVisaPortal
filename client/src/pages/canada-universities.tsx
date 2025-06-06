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

export default function CanadaUniversities() {
  const topUniversities = [
    {
      name: "University of Toronto",
      location: "Toronto, Ontario",
      worldRanking: 18,
      canadaRanking: 1,
      acceptanceRate: "43%",
      tuitionFee: "CAD $61,690",
      averageIELTS: "6.5-7.0",
      averageGPA: "3.6+",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop&auto=format",
      specialties: ["Engineering", "Medicine", "Business", "Computer Science"],
      founded: 1827,
      students: 97000,
      internationalStudents: "25%"
    },
    {
      name: "University of British Columbia",
      location: "Vancouver, British Columbia",
      worldRanking: 34,
      canadaRanking: 2,
      acceptanceRate: "52.4%",
      tuitionFee: "CAD $55,534",
      averageIELTS: "6.5",
      averageGPA: "3.5+",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop&auto=format",
      specialties: ["Engineering", "Sciences", "Forestry", "Arts"],
      founded: 1908,
      students: 68000,
      internationalStudents: "30%"
    },
    {
      name: "McGill University",
      location: "Montreal, Quebec",
      worldRanking: 30,
      canadaRanking: 3,
      acceptanceRate: "46%",
      tuitionFee: "CAD $45,256",
      averageIELTS: "6.5-7.0",
      averageGPA: "3.5+",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop&auto=format",
      specialties: ["Medicine", "Engineering", "Arts", "Sciences"],
      founded: 1821,
      students: 40000,
      internationalStudents: "27%"
    },
    {
      name: "University of Waterloo",
      location: "Waterloo, Ontario",
      worldRanking: 154,
      canadaRanking: 4,
      acceptanceRate: "53%",
      tuitionFee: "CAD $58,200",
      averageIELTS: "6.5-7.0",
      averageGPA: "3.5+",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop&auto=format",
      specialties: ["Computer Science", "Engineering", "Mathematics", "Co-op Programs"],
      founded: 1957,
      students: 42000,
      internationalStudents: "35%"
    },
    {
      name: "University of Alberta",
      location: "Edmonton, Alberta",
      worldRanking: 110,
      canadaRanking: 5,
      acceptanceRate: "58%",
      tuitionFee: "CAD $37,650",
      averageIELTS: "6.5",
      averageGPA: "3.0+",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop&auto=format",
      specialties: ["Engineering", "Medicine", "Business", "Agriculture"],
      founded: 1908,
      students: 39000,
      internationalStudents: "22%"
    },
    {
      name: "McMaster University",
      location: "Hamilton, Ontario",
      worldRanking: 152,
      canadaRanking: 6,
      acceptanceRate: "58.7%",
      tuitionFee: "CAD $50,130",
      averageIELTS: "6.5",
      averageGPA: "3.5+",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop&auto=format",
      specialties: ["Health Sciences", "Engineering", "Business", "Social Sciences"],
      founded: 1887,
      students: 31000,
      internationalStudents: "20%"
    }
  ];

  const popularCourses = {
    "Engineering & Technology": [
      "Computer Science & Engineering",
      "Software Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Biomedical Engineering"
    ],
    "Business & Management": [
      "Master of Business Administration (MBA)",
      "Finance",
      "International Business",
      "Marketing",
      "Supply Chain Management",
      "Project Management"
    ],
    "Health Sciences": [
      "Medicine",
      "Nursing",
      "Pharmacy",
      "Public Health",
      "Physiotherapy",
      "Health Administration"
    ],
    "Natural Sciences": [
      "Biology",
      "Chemistry",
      "Physics",
      "Environmental Science",
      "Mathematics",
      "Statistics"
    ],
    "Liberal Arts": [
      "Psychology",
      "Political Science",
      "Economics",
      "International Relations",
      "Sociology",
      "History"
    ]
  };

  const visaRequirements = [
    {
      type: "Study Permit",
      description: "Required for programs longer than 6 months",
      requirements: [
        "Letter of acceptance from Canadian institution",
        "Proof of financial support (CAD $10,000 + tuition)",
        "Valid passport or travel document",
        "Letter of explanation",
        "Medical exam (if required)",
        "Police certificate",
        "Biometrics",
        "Application fee (CAD $150)"
      ]
    },
    {
      type: "Student Direct Stream (SDS)",
      description: "Faster processing for eligible countries",
      requirements: [
        "Letter of acceptance",
        "IELTS overall band 6.0",
        "GIC of CAD $10,000",
        "First year tuition payment",
        "Medical exam (if required)",
        "Valid passport",
        "SDS application fee (CAD $150)"
      ]
    }
  ];

  const costBreakdown = [
    {
      category: "Tuition Fees",
      range: "CAD $20,000 - $60,000",
      description: "Annual fees vary by program and university"
    },
    {
      category: "Living Expenses",
      range: "CAD $12,000 - $18,000",
      description: "Accommodation, food, and personal expenses"
    },
    {
      category: "Health Insurance",
      range: "CAD $600 - $1,000",
      description: "Mandatory provincial health coverage"
    },
    {
      category: "Books & Supplies",
      range: "CAD $1,000 - $2,000",
      description: "Textbooks and academic materials"
    },
    {
      category: "Transportation",
      range: "CAD $1,200 - $2,400",
      description: "Local transit and travel expenses"
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
            <span className="text-6xl">🇨🇦</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                Study in Canada
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl">
                Experience world-class education with excellent post-study work opportunities, pathway to permanent residency, and high quality of life.
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
              <div className="text-3xl font-playfair font-bold text-navy mb-2">100+</div>
              <div className="text-slate-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">350K+</div>
              <div className="text-slate-600">International Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">25,000+</div>
              <div className="text-slate-600">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">3</div>
              <div className="text-slate-600">Years PGWP</div>
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
              Study Permit
            </TabsTrigger>
            <TabsTrigger value="costs" className="data-[state=active]:bg-navy data-[state=active]:text-white">
              Cost Information
            </TabsTrigger>
          </TabsList>

          <TabsContent value="universities" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-navy mb-4">
                Top Canadian Universities
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Discover Canada's premier institutions known for research excellence, innovation, and strong industry connections.
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
                Explore diverse academic opportunities across top fields of study in Canadian universities.
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
                Study Permit Requirements
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Everything you need to know about obtaining a study permit for Canada.
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
                    <h3 className="font-semibold text-blue-900 mb-2">Important Benefits</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Work 20 hours/week during studies</li>
                      <li>• Post-Graduation Work Permit (PGWP) up to 3 years</li>
                      <li>• Pathway to permanent residency</li>
                      <li>• Spouse can apply for open work permit</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="costs" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-navy mb-4">
                Cost of Studying in Canada
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive breakdown of expenses for international students studying in Canada.
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
                  <div className="text-4xl font-bold text-navy mb-4">CAD $35,000 - $80,000</div>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    This includes all expenses for one academic year. Costs vary by province, with Toronto and Vancouver being more expensive.
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
                      <span>Vanier Canada Graduate Scholarships</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>University entrance scholarships</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>Provincial funding programs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>Research assistantships</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-navy">Work & Immigration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>Work 20 hrs/week during studies</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>PGWP up to 3 years</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>Express Entry pathway</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>Provincial Nominee Programs</span>
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
                Ready to Start Your Canadian Dream?
              </h3>
              <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
                Our expert counselors will guide you through every step, from university selection to permanent residency pathways.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gold text-navy hover:bg-gold/90 px-8 py-3">
                  Schedule Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-8 py-3">
                  Download Canada Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}