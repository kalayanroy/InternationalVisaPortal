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

export default function UKUniversities() {
  const topUniversities = [
    {
      name: "University of Oxford",
      location: "Oxford, England",
      worldRanking: 1,
      ukRanking: 1,
      acceptanceRate: "17.5%",
      tuitionFee: "£28,370",
      averageIELTS: "7.0-7.5",
      averageGPA: "3.7+",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop&auto=format",
      specialties: ["Philosophy", "Politics", "Economics", "Medicine"],
      founded: 1096,
      students: 24000,
      internationalStudents: "45%"
    },
    {
      name: "University of Cambridge",
      location: "Cambridge, England",
      worldRanking: 2,
      ukRanking: 2,
      acceptanceRate: "21%",
      tuitionFee: "£25,734",
      averageIELTS: "7.0-7.5",
      averageGPA: "3.7+",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=400&h=300&fit=crop&auto=format",
      specialties: ["Mathematics", "Engineering", "Natural Sciences", "Computer Science"],
      founded: 1209,
      students: 21000,
      internationalStudents: "39%"
    },
    {
      name: "Imperial College London",
      location: "London, England",
      worldRanking: 6,
      ukRanking: 3,
      acceptanceRate: "14.3%",
      tuitionFee: "£37,900",
      averageIELTS: "6.5-7.0",
      averageGPA: "3.5+",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&auto=format",
      specialties: ["Engineering", "Medicine", "Business", "Natural Sciences"],
      founded: 1907,
      students: 17000,
      internationalStudents: "59%"
    },
    {
      name: "London School of Economics",
      location: "London, England",
      worldRanking: 45,
      ukRanking: 4,
      acceptanceRate: "8.9%",
      tuitionFee: "£25,728",
      averageIELTS: "7.0",
      averageGPA: "3.5+",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&auto=format",
      specialties: ["Economics", "Politics", "Sociology", "Law"],
      founded: 1895,
      students: 12000,
      internationalStudents: "70%"
    },
    {
      name: "University College London",
      location: "London, England",
      worldRanking: 8,
      ukRanking: 5,
      acceptanceRate: "63%",
      tuitionFee: "£31,200",
      averageIELTS: "6.5-7.5",
      averageGPA: "3.3+",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&auto=format",
      specialties: ["Medicine", "Engineering", "Architecture", "Psychology"],
      founded: 1826,
      students: 42000,
      internationalStudents: "48%"
    },
    {
      name: "King's College London",
      location: "London, England",
      worldRanking: 31,
      ukRanking: 6,
      acceptanceRate: "13%",
      tuitionFee: "£31,260",
      averageIELTS: "6.5-7.0",
      averageGPA: "3.3+",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&auto=format",
      specialties: ["Medicine", "Law", "Dentistry", "International Relations"],
      founded: 1829,
      students: 31000,
      internationalStudents: "40%"
    }
  ];

  const popularCourses = {
    "Business & Management": [
      "Master of Business Administration (MBA)",
      "Finance",
      "International Business",
      "Marketing",
      "Management Studies",
      "Accounting & Finance"
    ],
    "Engineering & Technology": [
      "Computer Science",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Aerospace Engineering",
      "Chemical Engineering"
    ],
    "Medicine & Health": [
      "Medicine (MBBS)",
      "Dentistry",
      "Nursing",
      "Pharmacy",
      "Public Health",
      "Biomedical Sciences"
    ],
    "Liberal Arts & Humanities": [
      "English Literature",
      "History",
      "Philosophy",
      "Politics & International Relations",
      "Law (LLB/LLM)",
      "Modern Languages"
    ],
    "Sciences": [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Psychology",
      "Environmental Science"
    ]
  };

  const visaRequirements = [
    {
      type: "Student Visa (Tier 4)",
      description: "Main visa for international students studying in the UK",
      requirements: [
        "Confirmation of Acceptance for Studies (CAS)",
        "Valid passport",
        "Financial evidence (£1,334/month for London, £1,023/month outside London)",
        "English language proficiency (IELTS/TOEFL)",
        "Academic qualifications",
        "Tuberculosis test (if from certain countries)",
        "Visa application form and fee (£348)"
      ]
    },
    {
      type: "Short-term Study Visa",
      description: "For courses lasting 6-11 months",
      requirements: [
        "Letter of acceptance from institution",
        "Financial evidence",
        "Valid passport",
        "Return travel arrangements",
        "No work permitted on this visa",
        "Visa fee (£186)"
      ]
    }
  ];

  const costBreakdown = [
    {
      category: "Tuition Fees",
      range: "£15,000 - £38,000",
      description: "Annual fees vary by university and program type"
    },
    {
      category: "Living Expenses (London)",
      range: "£15,000 - £18,000",
      description: "Accommodation, food, and personal expenses in London"
    },
    {
      category: "Living Expenses (Outside London)",
      range: "£12,000 - £15,000",
      description: "Accommodation and living costs in other UK cities"
    },
    {
      category: "Books & Materials",
      range: "£500 - £1,000",
      description: "Textbooks and academic supplies"
    },
    {
      category: "Visa & Immigration",
      range: "£348 - £1,220",
      description: "Visa fees and Immigration Health Surcharge"
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
            <span className="text-6xl">🇬🇧</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                Study in United Kingdom
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl">
                Experience world-class education with rich academic traditions, shorter degree programs, and access to Europe's leading universities.
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
              <div className="text-3xl font-playfair font-bold text-navy mb-2">160+</div>
              <div className="text-slate-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">500K+</div>
              <div className="text-slate-600">International Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">50,000+</div>
              <div className="text-slate-600">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">1-3</div>
              <div className="text-slate-600">Years Duration</div>
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
                Top UK Universities
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Discover Britain's most prestigious institutions with centuries of academic excellence and global recognition.
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
                Explore diverse academic opportunities across top fields of study in British universities.
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
                Complete guide to obtaining a student visa for studying in the United Kingdom.
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
                      <li>• Visa processing time: 3-8 weeks</li>
                      <li>• Can work 20 hours/week during studies</li>
                      <li>• Graduate visa available for 2 years post-graduation</li>
                      <li>• Immigration Health Surcharge required (£624/year)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="costs" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-navy mb-4">
                Cost of Studying in UK
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive breakdown of expenses for international students studying in the United Kingdom.
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
                  <div className="text-4xl font-bold text-navy mb-4">£30,000 - £55,000</div>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    This includes all expenses for one academic year. London universities typically cost more than those in other UK cities.
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
                      <span>Chevening Scholarships</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>Commonwealth Scholarships</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>University-specific scholarships</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>Subject-specific funding</span>
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
                      <span>20 hours/week during studies</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>Full-time during holidays</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>Graduate visa (2 years)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>PhD graduates (3 years)</span>
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
                Ready to Begin Your British Education Journey?
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
                  Download UK Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}