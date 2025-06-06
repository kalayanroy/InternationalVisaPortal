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

export default function SingaporeUniversities() {
  const topUniversities = [
    {
      name: "National University of Singapore",
      location: "Singapore",
      worldRanking: 11,
      singaporeRanking: 1,
      acceptanceRate: "5%",
      tuitionFee: "S$37,550",
      averageIELTS: "6.5-7.0",
      averageGPA: "3.6+",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop&auto=format",
      specialties: ["Engineering", "Business", "Medicine", "Computer Science"],
      founded: 1905,
      students: 40000,
      internationalStudents: "30%"
    },
    {
      name: "Nanyang Technological University",
      location: "Singapore",
      worldRanking: 26,
      singaporeRanking: 2,
      acceptanceRate: "8%",
      tuitionFee: "S$35,700",
      averageIELTS: "6.5",
      averageGPA: "3.5+",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop&auto=format",
      specialties: ["Engineering", "Business", "Sciences", "Education"],
      founded: 1991,
      students: 33000,
      internationalStudents: "25%"
    },
    {
      name: "Singapore Management University",
      location: "Singapore",
      worldRanking: 545,
      singaporeRanking: 3,
      acceptanceRate: "25%",
      tuitionFee: "S$39,000",
      averageIELTS: "7.0",
      averageGPA: "3.4+",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop&auto=format",
      specialties: ["Business", "Economics", "Accountancy", "Law"],
      founded: 2000,
      students: 11000,
      internationalStudents: "20%"
    },
    {
      name: "Singapore University of Technology and Design",
      location: "Singapore",
      worldRanking: 651,
      singaporeRanking: 4,
      acceptanceRate: "15%",
      tuitionFee: "S$35,450",
      averageIELTS: "6.5",
      averageGPA: "3.3+",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop&auto=format",
      specialties: ["Engineering", "Architecture", "Design", "Technology"],
      founded: 2009,
      students: 6000,
      internationalStudents: "35%"
    },
    {
      name: "Singapore Institute of Technology",
      location: "Singapore",
      worldRanking: 801,
      singaporeRanking: 5,
      acceptanceRate: "30%",
      tuitionFee: "S$33,000",
      averageIELTS: "6.0",
      averageGPA: "3.0+",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop&auto=format",
      specialties: ["Applied Learning", "Engineering", "Health Sciences", "ICT"],
      founded: 2009,
      students: 11000,
      internationalStudents: "15%"
    },
    {
      name: "Singapore University of Social Sciences",
      location: "Singapore",
      worldRanking: 1001,
      singaporeRanking: 6,
      acceptanceRate: "40%",
      tuitionFee: "S$30,000",
      averageIELTS: "6.0",
      averageGPA: "2.8+",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop&auto=format",
      specialties: ["Social Sciences", "Business", "Human Development", "Law"],
      founded: 2017,
      students: 15000,
      internationalStudents: "12%"
    }
  ];

  const popularCourses = {
    "Engineering & Technology": [
      "Computer Science",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Chemical Engineering",
      "Biomedical Engineering",
      "Data Science & Analytics"
    ],
    "Business & Finance": [
      "Business Administration",
      "Finance",
      "Accounting",
      "International Business",
      "Supply Chain Management",
      "Digital Marketing"
    ],
    "Life Sciences": [
      "Medicine",
      "Pharmacy",
      "Biomedical Sciences",
      "Biotechnology",
      "Public Health",
      "Nursing"
    ],
    "Design & Architecture": [
      "Architecture",
      "Industrial Design",
      "Product Design",
      "Urban Planning",
      "Interior Design",
      "Digital Media"
    ],
    "Liberal Arts": [
      "Economics",
      "Psychology",
      "Political Science",
      "Communications",
      "Sociology",
      "International Relations"
    ]
  };

  const visaRequirements = [
    {
      type: "Student Pass",
      description: "Required for all international students",
      requirements: [
        "Letter of acceptance from Singapore institution",
        "Student Pass application form",
        "Valid passport (minimum 6 months)",
        "Recent passport-sized photographs",
        "Academic transcripts and certificates",
        "English proficiency test results",
        "Financial proof (S$15,000 minimum)",
        "Medical examination",
        "Application fee (S$30)"
      ]
    },
    {
      type: "Dependant's Pass",
      description: "For family members of students",
      requirements: [
        "Valid Student Pass holder",
        "Marriage/birth certificate",
        "Financial proof (S$6,000/month income)",
        "Medical insurance",
        "Sponsor declaration",
        "Valid passport",
        "Application fee (S$30)"
      ]
    }
  ];

  const costBreakdown = [
    {
      category: "Tuition Fees",
      range: "S$30,000 - S$40,000",
      description: "Annual fees for international students"
    },
    {
      category: "Living Expenses",
      range: "S$12,000 - S$18,000",
      description: "Accommodation, food, and personal expenses"
    },
    {
      category: "Healthcare",
      range: "S$150 - S$300",
      description: "Medical insurance and healthcare costs"
    },
    {
      category: "Books & Materials",
      range: "S$500 - S$1,000",
      description: "Textbooks and academic supplies"
    },
    {
      category: "Transportation",
      range: "S$1,200 - S$1,800",
      description: "Public transport and travel expenses"
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
            <span className="text-6xl">🇸🇬</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                Study in Singapore
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl">
                Experience Asia's premier education hub with world-class universities, multicultural environment, and strong connections to global industries.
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
              <div className="text-3xl font-playfair font-bold text-navy mb-2">6</div>
              <div className="text-slate-600">Public Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">80K+</div>
              <div className="text-slate-600">International Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">1,000+</div>
              <div className="text-slate-600">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-navy mb-2">1</div>
              <div className="text-slate-600">Year Job Search</div>
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
              Student Pass
            </TabsTrigger>
            <TabsTrigger value="costs" className="data-[state=active]:bg-navy data-[state=active]:text-white">
              Cost Information
            </TabsTrigger>
          </TabsList>

          <TabsContent value="universities" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-navy mb-4">
                Top Singapore Universities
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Discover Singapore's world-renowned institutions known for academic excellence, innovation, and strong industry partnerships in Asia's education hub.
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
                Explore diverse academic opportunities across top fields of study in Singapore's universities.
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
                Student Pass Requirements
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Complete guide to obtaining a Student Pass for studying in Singapore.
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
                      <li>• Work 16 hours/week during studies</li>
                      <li>• Full-time work during vacation</li>
                      <li>• 1-year job search after graduation</li>
                      <li>• Fast-track to permanent residency</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="costs" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-navy mb-4">
                Cost of Studying in Singapore
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive breakdown of expenses for international students studying in Singapore.
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
                  <div className="text-4xl font-bold text-navy mb-4">S$45,000 - S$60,000</div>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    This includes all expenses for one academic year. Singapore is a premium education destination with world-class facilities.
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
                      <span>Singapore Government Scholarships</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>University merit awards</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>ASEAN scholarships</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gold" />
                      <span>Industry-sponsored programs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-navy">Career Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>16 hrs/week during studies</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>1-year job search period</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>Tech Pass for entrepreneurs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gold" />
                      <span>Fast PR application process</span>
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
                Ready to Thrive in Asia's Education Hub?
              </h3>
              <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
                Our expert counselors will guide you through every step, from university selection to career opportunities in Singapore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gold text-navy hover:bg-gold/90 px-8 py-3">
                  Schedule Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-8 py-3">
                  Download Singapore Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}