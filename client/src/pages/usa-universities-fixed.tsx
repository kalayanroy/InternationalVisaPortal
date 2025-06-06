import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Menu,
  X
} from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function USAUniversities() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      topCourses: ["MBA Program", "Medical School", "Law School", "Computer Science", "Economics", "Public Policy", "Psychology"],
      founded: 1636,
      students: 23000,
      internationalStudents: "22%",
      visaRequirements: {
        f1ProcessingTime: "3-5 weeks",
        sevisFee: "$350",
        visaFee: "$185",
        documentsRequired: ["I-20 form", "Financial statements", "Academic transcripts", "Passport", "SEVIS receipt"],
        financialProof: "$89,450"
      },
      specificCosts: {
        tuitionUgrad: "$59,076",
        tuitionGrad: "$53,760",
        roomBoard: "$20,374",
        books: "$1,000",
        personal: "$2,500",
        healthInsurance: "$4,500"
      }
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
      topCourses: ["Computer Science", "Artificial Intelligence", "Engineering", "MBA Program", "Data Science", "Machine Learning", "Bioengineering"],
      founded: 1885,
      students: 17000,
      internationalStudents: "23%",
      visaRequirements: {
        f1ProcessingTime: "2-4 weeks",
        sevisFee: "$350",
        visaFee: "$185",
        documentsRequired: ["I-20 form", "Bank statements", "Academic records", "Passport", "SEVIS fee receipt"],
        financialProof: "$92,130"
      },
      specificCosts: {
        tuitionUgrad: "$61,731",
        tuitionGrad: "$58,416",
        roomBoard: "$19,922",
        books: "$1,245",
        personal: "$2,745",
        healthInsurance: "$6,571"
      }
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
      topCourses: ["Electrical Engineering", "Computer Science", "Physics", "Mathematics", "Aerospace Engineering"],
      founded: 1861,
      students: 11000,
      internationalStudents: "33%",
      visaRequirements: {
        f1ProcessingTime: "3-6 weeks",
        sevisFee: "$350",
        visaFee: "$185",
        documentsRequired: ["I-20 form", "Financial documents", "Academic transcripts", "Passport", "SEVIS payment"],
        financialProof: "$89,750"
      },
      specificCosts: {
        tuitionUgrad: "$59,750",
        tuitionGrad: "$59,750",
        roomBoard: "$17,800",
        books: "$820",
        personal: "$2,260",
        healthInsurance: "$3,350"
      }
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
      topCourses: ["Chemical Engineering", "Physics", "Astronomy", "Biology", "Mathematics"],
      founded: 1891,
      students: 2200,
      internationalStudents: "27%",
      visaRequirements: {
        f1ProcessingTime: "4-7 weeks",
        sevisFee: "$350",
        visaFee: "$185",
        documentsRequired: ["I-20 form", "Financial proof", "Transcripts", "Passport", "SEVIS receipt"],
        financialProof: "$95,250"
      },
      specificCosts: {
        tuitionUgrad: "$63,255",
        tuitionGrad: "$63,255",
        roomBoard: "$19,884",
        books: "$1,428",
        personal: "$2,091",
        healthInsurance: "$8,592"
      }
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
      topCourses: ["Economics", "MBA Program", "Political Science", "Psychology", "Statistics"],
      founded: 1890,
      students: 17000,
      internationalStudents: "25%",
      visaRequirements: {
        f1ProcessingTime: "3-5 weeks",
        sevisFee: "$350",
        visaFee: "$185",
        documentsRequired: ["I-20 form", "Bank statements", "Academic records", "Passport", "SEVIS confirmation"],
        financialProof: "$94,965"
      },
      specificCosts: {
        tuitionUgrad: "$64,965",
        tuitionGrad: "$62,640",
        roomBoard: "$18,900",
        books: "$1,800",
        personal: "$3,000",
        healthInsurance: "$6,300"
      }
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
      topCourses: ["Engineering", "Economics", "Computer Science", "Politics", "Mathematics"],
      founded: 1746,
      students: 5400,
      internationalStudents: "24%",
      visaRequirements: {
        f1ProcessingTime: "2-4 weeks",
        sevisFee: "$350",
        visaFee: "$185",
        documentsRequired: ["I-20 form", "Financial documentation", "Transcripts", "Passport", "SEVIS payment proof"],
        financialProof: "$89,710"
      },
      specificCosts: {
        tuitionUgrad: "$59,710",
        tuitionGrad: "$56,040",
        roomBoard: "$18,630",
        books: "$1,050",
        personal: "$2,550",
        healthInsurance: "$7,770"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-playfair font-bold text-navy">EduConsult</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-600 hover:text-navy transition-colors">Home</Link>
              <Link href="/usa-universities" className="text-navy font-semibold">USA</Link>
              <Link href="/uk-universities" className="text-slate-600 hover:text-navy transition-colors">UK</Link>
              <Link href="/canada-universities" className="text-slate-600 hover:text-navy transition-colors">Canada</Link>
              <Link href="/australia-universities" className="text-slate-600 hover:text-navy transition-colors">Australia</Link>
              <Button className="bg-gold hover:bg-gold/90 text-navy">Get Consultation</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-navy"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
                <Link href="/" className="block px-3 py-2 text-slate-600 hover:text-navy">Home</Link>
                <Link href="/usa-universities" className="block px-3 py-2 text-navy font-semibold">USA</Link>
                <Link href="/uk-universities" className="block px-3 py-2 text-slate-600 hover:text-navy">UK</Link>
                <Link href="/canada-universities" className="block px-3 py-2 text-slate-600 hover:text-navy">Canada</Link>
                <Link href="/australia-universities" className="block px-3 py-2 text-slate-600 hover:text-navy">Australia</Link>
                <Button className="w-full mt-4 bg-gold hover:bg-gold/90 text-navy">Get Consultation</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1626157150198-4cdec90f15a8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop"
            alt="USA Universities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-6xl">🇺🇸</span>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white">
                Study in United States
              </h1>
            </div>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Explore world-renowned universities with cutting-edge research opportunities, diverse academic programs, and unique visa requirements for international students.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-semibold">
                Explore Universities
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                View Visa Requirements
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Banner */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-navy">4,000+</div>
              <div className="text-slate-600">Universities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">1M+</div>
              <div className="text-slate-600">International Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">15,000+</div>
              <div className="text-slate-600">Programs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">50</div>
              <div className="text-slate-600">States</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Universities Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-navy mb-4">
              Top US Universities with Unique Requirements & Courses
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Each university has specific visa requirements, costs, and top-rated programs. View detailed information for each institution below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-slate-50">
                  {/* University Header */}
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
                      <h3 className="text-xl font-playfair font-bold text-white mb-1">
                        {university.name}
                      </h3>
                      <p className="text-white/90 text-sm flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {university.location}
                      </p>
                    </div>
                  </div>
                  
                  <CardContent className="p-0">
                    <div className="flex">
                      {/* Left side - Summarized content */}
                      <div className="flex-1 p-4">
                        {/* Basic Stats */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="text-center p-2 bg-slate-50 rounded-lg">
                            <div className="text-base font-bold text-navy">{university.acceptanceRate}</div>
                            <div className="text-xs text-slate-600">Acceptance</div>
                          </div>
                          <div className="text-center p-2 bg-slate-50 rounded-lg">
                            <div className="text-base font-bold text-navy">{university.tuitionFee}</div>
                            <div className="text-xs text-slate-600">Tuition</div>
                          </div>
                        </div>

                        {/* Quick Info */}
                        <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-navy mb-2 text-sm flex items-center">
                            <FileText className="h-3 w-3 mr-1" />
                            Visa & Costs Summary
                          </h4>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>
                              <span className="font-medium text-slate-700">Processing:</span>
                              <span className="ml-1 text-navy">{university.visaRequirements.f1ProcessingTime}</span>
                            </div>
                            <div>
                              <span className="font-medium text-slate-700">Proof:</span>
                              <span className="ml-1 text-navy">{university.visaRequirements.financialProof}</span>
                            </div>
                            <div>
                              <span className="font-medium text-slate-700">Room:</span>
                              <span className="ml-1 text-navy">{university.specificCosts.roomBoard}</span>
                            </div>
                            <div>
                              <span className="font-medium text-slate-700">Insurance:</span>
                              <span className="ml-1 text-navy">{university.specificCosts.healthInsurance}</span>
                            </div>
                          </div>
                        </div>

                        {/* Key Stats */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-navy mb-2 text-sm">Quick Facts</h4>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center">
                              <Users className="h-3 w-3 mr-1 text-slate-500" />
                              {university.students.toLocaleString()} students
                            </div>
                            <div className="flex items-center">
                              <Globe className="h-3 w-3 mr-1 text-slate-500" />
                              {university.internationalStudents} international
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1 text-slate-500" />
                              Est. {university.founded}
                            </div>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 mr-1 text-slate-500" />
                              SAT: {university.averageSAT}
                            </div>
                          </div>
                        </div>

                        {/* Specialties */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-navy mb-2 text-sm">Specialties</h4>
                          <div className="flex flex-wrap gap-1">
                            {university.specialties.slice(0, 3).map((specialty: string, idx: number) => (
                              <Badge key={idx} variant="outline" className="text-xs px-2 py-1">
                                {specialty}
                              </Badge>
                            ))}
                            {university.specialties.length > 3 && (
                              <Badge variant="outline" className="text-xs px-2 py-1">
                                +{university.specialties.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>

                        {route && (
                          <div className="pt-3 border-t border-slate-200">
                            <Link href={route}>
                              <Button size="sm" className="w-full bg-navy hover:bg-navy/90 text-white text-xs">
                                View Details
                              </Button>
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* Right side - Top 5 Courses */}
                      <div className="w-64 bg-gradient-to-b from-yellow-50 to-gold/10 p-4 border-l border-yellow-200">
                        <h4 className="font-semibold text-navy mb-3 flex items-center">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Top 5 Courses
                        </h4>
                        <div className="space-y-3">
                          {/* First row - 2 courses */}
                          <div className="grid grid-cols-2 gap-2">
                            {university.topCourses.slice(0, 2).map((course: string, idx: number) => (
                              <Button
                                key={idx}
                                variant="outline"
                                size="sm"
                                className="text-left justify-start bg-gold hover:bg-gold/90 border-gold text-navy hover:text-navy font-medium text-xs px-2 py-2 h-auto"
                              >
                                {course}
                              </Button>
                            ))}
                          </div>
                          
                          {/* Second row - 3 courses */}
                          <div className="grid grid-cols-3 gap-2">
                            {university.topCourses.slice(2, 5).map((course: string, idx: number) => (
                              <Button
                                key={idx + 2}
                                variant="outline"
                                size="sm"
                                className="text-left justify-start bg-gold hover:bg-gold/90 border-gold text-navy hover:text-navy font-medium text-xs px-2 py-2 h-auto"
                              >
                                {course}
                              </Button>
                            ))}
                          </div>
                          
                          {/* More Courses button if there are more than 5 */}
                          {university.topCourses.length > 5 && (
                            <div className="pt-2 border-t border-yellow-300">
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full text-center bg-yellow-100 hover:bg-yellow-200 border-yellow-300 text-navy hover:text-navy font-medium text-xs px-3 py-2 h-auto"
                              >
                                More Courses
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-navy text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-playfair font-bold mb-6 text-gold">
                Ready to Start Your American Dream?
              </h3>
              <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
                Our expert counselors will guide you through each university's unique requirements, from application to visa approval.
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