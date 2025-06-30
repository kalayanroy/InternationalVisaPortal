import Header from "@/components/header";
import { useEffect, useMemo } from "react";
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
  Building,
} from "lucide-react";
import { Link, useLocation } from "wouter";

// Country data with university details
const countryData = {
  australia: {
    id: "australia",
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    description:
      "World-class education in a vibrant multicultural environment with great weather.",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stats: {
      universities: "4,000+",
      internationalStudents: "1M+",
      programs: "15,000+",
      states: "50",
    },
    topUniversities: [
      "Australian National University",
      "Bond University",
      "University of Sydney",
      "More +",
    ],
    keyBenefits: [
      //"Silicon Valley Access",
      //"Research Excellence",
      //"Career Opportunities",
    ],
    universities: [
      {
        id: "nationalUniversity",
        name: "Australian National University",
        location: "Canberra, the capital city of Australia",
        ranking: "#32",
        acceptance: "35%",
        tuition: "AUD 27,916",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        specialties: ["Business", "Medicine", "Law", "Engineering"],
        topCourses: [
          "Undergraduate",
          "Postgraduate",
          "PhD (HDR)",
          "OSHC (Health Cover)",
        ],
        description: "Leading Australian university with world-class research and academic programs.",
        students: "25,000+",
        international: "40%",
        founded: 1946,
      },
      {
        id: "bond",
        name: "Bond University",
        location: "Robina on the Gold Coast in Queensland, Australia",
        ranking: "#600",
        acceptance: "60-70%",
        tuition: "AUD 33,000",
        image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=300&fit=crop&auto=format",
        specialties: [
          "Computer Science",
          "Engineering",
          "Business",
          "Medicine",
        ],
        topCourses: ["Undergraduate", "Postgraduate", "MBA Program"],
        description: "Private university known for small class sizes and personalized education.",
        students: "5,000+",
        international: "50%",
        founded: 1989,
      },
    ],
  },
  usa: {
    id: "usa",
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    description:
      "Home to the world's most prestigious institutions with cutting-edge research and innovation.",
    image:
      "https://images.unsplash.com/photo-1626157150198-4cdec90f15a8?q=80&w=2069&auto=format&fit=crop",
    stats: {
      universities: "4,000+",
      internationalStudents: "1M+",
      programs: "15,000+",
      states: "50",
    },
    universities: [
      {
        id: "harvard",
        name: "Harvard University",
        location: "Cambridge, Massachusetts",
        ranking: "#1",
        acceptance: "3.4%",
        tuition: "$59,076",
        students: "23,000",
        country: "USA",
        programs: "200+",
        image:
          "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop&auto=format",
        specialties: ["Business", "Medicine", "Law", "Engineering"],
        topCourses: [
          "MBA Program",
          "Medical School",
          "Law School",
          "Computer Science",
          "Economics",
          "Machine Learning",
        ],
        description:
          "World's leading research university with exceptional academic programs and distinguished faculty.",
        international: "22%",
        founded: 1636,
      },
      {
        id: "stanford",
        name: "Stanford University",
        location: "Stanford, California",
        ranking: "#2",
        acceptance: "3.9%",
        tuition: "$61,731",
        students: "23,000",
        country: "USA",
        programs: "200+",
        image:
          "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=300&fit=crop&auto=format",
        specialties: [
          "Computer Science",
          "Engineering",
          "Business",
          "Medicine",
        ],
        topCourses: [
          "Computer Science",
          "Artificial Intelligence",
          "Engineering",
          "MBA Program",
          "Data Science",
        ],
        description:
          "World's leading research university with exceptional academic programs and distinguished faculty.",
        international: "24%",
        founded: 1885,
      },
      {
        id: "mit",
        name: "Massachusetts Institute of Technology",
        location: "Cambridge, Massachusetts",
        ranking: "#3",
        acceptance: "4.1%",
        tuition: "$59,750",
        students: "23,000",
        country: "USA",
        programs: "200+",
        image:
          "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=300&fit=crop&auto=format",
        specialties: [
          "Engineering",
          "Computer Science",
          "Physics",
          "Economics",
        ],
        topCourses: [
          "Electrical Engineering",
          "Computer Science",
          "Physics",
          "Mathematics",
          "Aerospace Engineering",
        ],
        description:
          "World's leading research university with exceptional academic programs and distinguished faculty.",
        international: "35%",
        founded: 1861,
      },
    ],
  },
  uk: {
    id: "uk",
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    description:
      "Rich academic heritage with world-renowned universities and shorter degree programs.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2069&auto=format&fit=crop",
    stats: {
      universities: "500+",
      internationalStudents: "500K+",
      programs: "50,000+",
      cities: "100+",
    },
    universities: [
      {
        id: "oxford",
        name: "Oxford University",
        location: "Oxford, England",
        ranking: "#1",
        acceptance: "17.5%",
        tuition: "£28,950",
        students: "23,000",
        country: "UK",
        programs: "200+",
        image:
          "https://images.unsplash.com/photo-1566408669057-4cd39b3bb1a0?w=400&h=300&fit=crop&auto=format",
        specialties: ["Philosophy", "Politics", "Economics", "Medicine"],
        topCourses: ["PPE", "Medicine", "Law", "History", "English Literature"],
        description:
          "World's leading research university with exceptional academic programs and distinguished faculty.",
        international: "45%",
        founded: 1096,
      },
      {
        id: "cambridge",
        name: "Cambridge University",
        location: "Cambridge, England",
        ranking: "#2",
        acceptance: "21%",
        tuition: "£28,950",
        students: "23,000",
        country: "UK",
        programs: "200+",
        image:
          "https://images.unsplash.com/photo-1559409030-0b0fb6d6b23e?w=400&h=300&fit=crop&auto=format",
        specialties: [
          "Mathematics",
          "Physics",
          "Engineering",
          "Natural Sciences",
        ],
        topCourses: [
          "Mathematics",
          "Natural Sciences",
          "Engineering",
          "Computer Science",
          "Medicine",
        ],
        description:
          "World's leading research university with exceptional academic programs and distinguished faculty.",
        international: "38%",
        founded: 1209,
      },
      {
        id: "imperial",
        name: "Imperial College London",
        location: "London, England",
        ranking: "#8",
        acceptance: "14.3%",
        tuition: "£32,000",
        students: "23,000",
        country: "UK",
        programs: "200+",
        image:
          "https://images.unsplash.com/photo-1551740952-9ba0661ba9be?w=400&h=300&fit=crop&auto=format",
        specialties: ["Engineering", "Medicine", "Business", "Science"],
        topCourses: [
          "Engineering",
          "Medicine",
          "Business School",
          "Computing",
          "Physics",
        ],
        description:
          "World's leading research university with exceptional academic programs and distinguished faculty.",
        international: "59%",
        founded: 1907,
      },
    ],
  },
  canada: {
    id: "canada",
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    description:
      "High-quality education with affordable tuition and post-graduation work opportunities.",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2069&auto=format&fit=crop",
    stats: {
      universities: "400+",
      internationalStudents: "650K+",
      programs: "25,000+",
      provinces: "10",
    },
    universities: [
      {
        id: "toronto",
        name: "University of Toronto",
        location: "Toronto, Ontario",
        ranking: "#21",
        acceptance: "43%",
        tuition: "CAD $58,160",
        students: "23,000",
        country: "CA",
        programs: "200+",
        image:
          "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=300&fit=crop&auto=format",
        specialties: ["Medicine", "Engineering", "Business", "Arts"],
        topCourses: [
          "Medicine",
          "Engineering",
          "Business",
          "Computer Science",
          "Law",
        ],
        description:
          "World's leading research university with exceptional academic programs and distinguished faculty.",
        international: "25%",
        founded: 1827,
      },
      {
        id: "mcgill",
        name: "McGill University",
        location: "Montreal, Quebec",
        ranking: "#31",
        acceptance: "46%",
        tuition: "CAD $50,000",
        students: "23,000",
        country: "CA",
        programs: "200+",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
        specialties: ["Medicine", "Engineering", "Arts", "Science"],
        topCourses: [
          "Medicine",
          "Engineering",
          "Arts",
          "Management",
          "Science",
        ],
        description:
          "World's leading research university with exceptional academic programs and distinguished faculty.",
        international: "30%",
        founded: 1821,
      },
    ],
  },
};

export default function UniversityDetail() {
  const [location] = useLocation();
  
  // Extract university and country from URL path
  const universityData = useMemo(() => {
    // Parse URL like /university/harvard/usa or /university/nationalUniversity/australia
    const pathParts = location.split('/');
    if (pathParts.length >= 4 && pathParts[1] === 'university') {
      const universityId = pathParts[2];
      const countryId = pathParts[3];
      
      const country = (countryData as any)[countryId];
      if (country && country.universities) {
        const university = country.universities.find((u: any) => u.id === universityId);
        if (university) {
          return { university, country };
        }
      }
    }
    
    // Default fallback to Harvard
    return {
      university: countryData.usa.universities[0],
      country: countryData.usa
    };
  }, [location]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const { university, country } = universityData;

  // Generate school programs based on university specialties
  const schools = university.specialties.map((specialty: string, index: number) => ({
    name: `${university.name} - ${specialty}`,
    tuition: university.tuition,
    duration: index % 2 === 0 ? "4 years" : "2 years",
    requirements: specialty === "Medicine" ? "MCAT, Pre-med courses" : 
                  specialty === "Business" ? "GMAT/GRE, Work experience" :
                  specialty === "Law" ? "LSAT, Bachelor's degree" :
                  "SAT/ACT, Strong academic background",
    deadline: "Application deadlines vary by program",
  }));

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
        "Biometric appointment if required",
      ],
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
        "Program sponsor verification",
      ],
    },
  };

  const costs = {
    undergraduate: {
      tuition: "$59,076",
      fees: "$4,195",
      roomBoard: "$20,374",
      books: "$1,000",
      personal: "$2,500",
      total: "$87,145",
    },
    graduate: {
      tuition: "$55,272 - $73,440",
      fees: "$3,500 - $5,000",
      roomBoard: "$18,000 - $25,000",
      books: "$1,200",
      personal: "$3,000",
      total: "$80,972 - $107,640",
    },
  };

  const scholarships = [
    {
      name: "Harvard Financial Aid",
      amount: "Up to full tuition",
      criteria: "Need-based, family income under $85,000",
      coverage: "100% of families earning less than $85,000 pay nothing",
    },
    {
      name: "Harvard Merit Scholarships",
      amount: "$5,000 - $25,000",
      criteria: "Academic excellence, leadership",
      coverage: "Various partial awards",
    },
    {
      name: "International Student Aid",
      amount: "Variable",
      criteria: "Financial need demonstration",
      coverage: "Same aid policy as domestic students",
    },
  ];

  const admissionTimeline = [
    { date: "August - October", task: "Prepare application materials" },
    { date: "November 1", task: "Early Action deadline" },
    { date: "January 1", task: "Regular Decision deadline" },
    { date: "Mid-December", task: "Early Action results" },
    { date: "Late March", task: "Regular Decision results" },
    { date: "May 1", task: "Enrollment deposit deadline" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white ">
      <Header />

      {/* Hero Section */}
      <div className="relative pt-20 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={university.image}
            alt={university.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        <div className="absolute bottom-8 left-8 text-white z-10">
          <h1 className="text-4xl font-bold">{university.name}</h1>
          <p className="text-lg">{university.location}</p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.15),transparent)] opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.1),transparent)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/universities"
              className="inline-flex items-center text-gold hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
            >
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
                <Badge
                  variant="outline"
                  className="border-white text-white bg-white/10 backdrop-blur-sm"
                >
                  Founded {university.founded}
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {university.name}
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                America's oldest institution of higher education, renowned for
                academic excellence, groundbreaking research, and producing
                world leaders across all fields.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 text-white">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-gold" />
                  <span>{university.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-gold" />
                  <span>
                    {university.students.toLocaleString()} students
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-navy mb-6">
                    Statistics
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Acceptance Rate</span>
                      <span className="font-bold text-navy">
                        {university.acceptance}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">
                        Student-Faculty Ratio
                      </span>
                      <span className="font-bold text-navy">
                        {university.facultyRatio}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">
                        International Students
                      </span>
                      <span className="font-bold text-navy">
                        {university.international}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Endowment</span>
                      <span className="font-bold text-navy">
                        {university.endowment}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent)]">
        <Tabs defaultValue="schools" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg rounded-2xl p-1 md:p-2 border border-slate-200 gap-1 md:gap-2">
            <TabsTrigger
              value="schools"
              className="data-[state=active]:bg-[#ffc105] data-[state=active]:text-black rounded-lg font-medium text-[10px] md:text-sm px-1 py-1 md:px-2 md:py-2"
            >
              <span className="block md:hidden">Schools</span>
              <span className="hidden md:block">Schools & Programs</span>
            </TabsTrigger>
            <TabsTrigger
              value="admissions"
              className="data-[state=active]:bg-[#ffc105] data-[state=active]:text-black rounded-lg font-medium text-[10px] md:text-sm px-1 py-1 md:px-2 md:py-2"
            >
              <span className="block md:hidden">Apply</span>
              <span className="hidden md:block">Admissions</span>
            </TabsTrigger>
            <TabsTrigger
              value="visa"
              className="data-[state=active]:bg-[#ffc105] data-[state=active]:text-black rounded-lg font-medium text-[10px] md:text-sm px-1 py-1 md:px-2 md:py-2"
            >
              <span className="block md:hidden">Visa</span>
              <span className="hidden md:block">Visa Process</span>
            </TabsTrigger>
            <TabsTrigger
              value="costs"
              className="data-[state=active]:bg-[#ffc105] data-[state=active]:text-black rounded-lg font-medium text-[10px] md:text-sm px-1 py-1 md:px-2 md:py-2"
            >
              <span className="block md:hidden">Aid</span>
              <span className="hidden md:block">Costs & Aid</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="schools" className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2 mb-6">
                <GraduationCap className="h-4 w-4 text-navy" />
                <span className="text-sm font-medium text-navy">
                  Academic Excellence
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Schools & Programs
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Harvard offers undergraduate and graduate programs across
                multiple schools, each with specific requirements and costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {schools.map((school, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-gold/40 bg-gradient-to-br from-white via-white to-slate-50/30 hover:-translate-y-3 hover:scale-105"
                >
                  <div className="relative">
                    {/* Decorative Gradient */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-gold/30 via-gold/20 to-transparent rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-navy/20 via-navy/10 to-transparent rounded-full blur-xl opacity-40" />

                    <CardHeader className="relative pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-navy/10 via-navy/5 to-transparent rounded-2xl border border-navy/10 group-hover:border-gold/30 transition-all duration-300">
                          <Building className="h-7 w-7 text-navy group-hover:text-gold transition-colors duration-300" />
                        </div>
                        <Badge className="bg-[#ffc105] text-navy font-bold border border-navy/20 px-3 py-1 text-xs">
                          {school.duration}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-bold text-navy group-hover:text-gold transition-colors duration-300 leading-tight">
                        {school.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-5 relative">
                      <div className="grid grid-cols-1 gap-3">
                        <div className="text-center p-4 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100/80 rounded-2xl border border-emerald-200/60 hover:border-emerald-300 transition-all duration-300 group-hover:shadow-lg">
                          <div className="text-lg font-bold text-emerald-800">
                            {school.tuition}
                          </div>
                          <div className="text-xs text-emerald-700 font-medium">
                            Annual Tuition
                          </div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100/80 rounded-2xl border border-blue-200/60 hover:border-blue-300 transition-all duration-300 group-hover:shadow-lg">
                          <div className="text-sm font-bold text-blue-800">
                            {school.deadline}
                          </div>
                          <div className="text-xs text-blue-700 font-medium">
                            Application Deadline
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <h4 className="font-bold text-navy flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-gold" />
                          Requirements
                        </h4>
                        <p className="text-slate-600 text-xs leading-relaxed bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                          {school.requirements}
                        </p>
                      </div>

                      {/*<div className="pt-2">
                        <Button className="w-full bg-gradient-to-r from-navy via-navy to-navy/90 hover:from-navy/90 hover:via-navy/80 hover:to-navy/70 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                          View Program Details
                        </Button>
                      </div>*/}
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
                <span className="text-sm font-medium text-navy">
                  Application Process
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Admission Requirements
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Harvard maintains the highest academic standards with holistic
                evaluation of candidates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 via-white to-blue-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100/50 rounded-2xl mr-4 border border-blue-200/50 group-hover:border-blue-300 transition-all duration-300">
                      <GraduationCap className="h-7 w-7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-navy group-hover:text-blue-700 transition-colors duration-300">
                      Undergraduate
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <div className="space-y-3">
                    {[
                      "Common Application or Coalition Application",
                      "SAT or ACT scores",
                      "High school transcript",
                      "Teacher recommendations (2)",
                      "Personal essays",
                      "Extracurricular activities",
                    ].map((requirement, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 rounded-lg hover:bg-blue-50/50 transition-colors duration-200"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 flex-shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">
                          {requirement}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                      Apply as Undergraduate
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 via-white to-purple-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-purple-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100/50 rounded-2xl mr-4 border border-purple-200/50 group-hover:border-purple-300 transition-all duration-300">
                      <Award className="h-7 w-7 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-navy group-hover:text-purple-700 transition-colors duration-300">
                      Graduate
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <div className="space-y-3">
                    {[
                      "Bachelor's degree from accredited institution",
                      "GRE/GMAT/LSAT/MCAT (program specific)",
                      "Official transcripts",
                      "Letters of recommendation (3)",
                      "Statement of purpose",
                      "Research experience (preferred)",
                    ].map((requirement, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 rounded-lg hover:bg-purple-50/50 transition-colors duration-200"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 flex-shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">
                          {requirement}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                      Apply as Graduate
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-emerald-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-100 via-emerald-50 to-emerald-100/50 rounded-2xl mr-4 border border-emerald-200/50 group-hover:border-emerald-300 transition-all duration-300">
                      <BookOpen className="h-7 w-7 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-navy group-hover:text-emerald-700 transition-colors duration-300">
                      International
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <div className="space-y-3">
                    {[
                      "TOEFL/IELTS English proficiency",
                      "Financial documentation required",
                      "Passport and visa requirements",
                      "Academic credential evaluation",
                      "Statement of financial support",
                      "Additional country-specific documents",
                    ].map((requirement, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 rounded-lg hover:bg-emerald-50/50 transition-colors duration-200"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 flex-shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">
                          {requirement}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                      International Application
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-gold/10 via-white to-gold/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-gold/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gold/20 via-gold/10 to-gold/20 rounded-2xl mr-4 border border-gold/30 group-hover:border-gold/50 transition-all duration-300">
                      <Calendar className="h-7 w-7 text-navy group-hover:text-gold transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-navy group-hover:text-gold transition-colors duration-300">
                      Timeline
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <div className="space-y-3">
                    {admissionTimeline.slice(0, 6).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 rounded-lg hover:bg-gold/5 transition-colors duration-200"
                      >
                        <div className="w-6 h-6 bg-navy rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-white text-xs font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy">
                            {item.date}
                          </div>
                          <div className="text-xs text-slate-600">
                            {item.task}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                      View Full Timeline
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="visa" className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2 mb-6">
                <Globe className="h-4 w-4 text-navy" />
                <span className="text-sm font-medium text-navy">
                  International Students
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Visa Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Complete guide to obtaining your student visa for studying at
                Harvard University.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 via-white to-green-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-green-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardTitle className="text-xl font-bold text-navy flex items-center group-hover:text-green-700 transition-colors duration-300">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-100 via-green-50 to-green-100/50 rounded-2xl mr-4 border border-green-200/50 group-hover:border-green-300 transition-all duration-300">
                      <FileText className="h-7 w-7 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
                    </div>
                    F-1 Student Visa
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-4 bg-gradient-to-br from-green-100/80 to-green-50 rounded-2xl border border-green-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-green-800">
                        {visaRequirements.f1Visa.processing}
                      </div>
                      <div className="text-xs text-green-700 font-medium">
                        Processing Time
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-emerald-100/80 to-emerald-50 rounded-2xl border border-emerald-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-emerald-800">
                        {visaRequirements.f1Visa.fee}
                      </div>
                      <div className="text-xs text-emerald-700 font-medium">
                        Visa Fee
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-teal-100/80 to-teal-50 rounded-2xl border border-teal-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-teal-800">Required</div>
                      <div className="text-xs text-teal-700 font-medium">
                        Interview
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-navy mb-3 text-sm">
                      Requirements:
                    </h4>
                    <ul className="space-y-2 max-h-40 overflow-y-auto">
                      {visaRequirements.f1Visa.requirements
                        .slice(0, 4)
                        .map((req, index) => (
                          <li
                            key={index}
                            className="flex items-start text-xs text-slate-600 p-2 rounded-lg hover:bg-green-50/50 transition-colors duration-200"
                          >
                            <CheckCircle className="h-3 w-3 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                    Apply for F-1 Visa
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 via-white to-blue-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardTitle className="text-xl font-bold text-navy flex items-center group-hover:text-blue-700 transition-colors duration-300">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100/50 rounded-2xl mr-4 border border-blue-200/50 group-hover:border-blue-300 transition-all duration-300">
                      <FileText className="h-7 w-7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                    </div>
                    J-1 Exchange Visa
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-4 bg-gradient-to-br from-blue-100/80 to-blue-50 rounded-2xl border border-blue-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-blue-800">
                        {visaRequirements.j1Visa.processing}
                      </div>
                      <div className="text-xs text-blue-700 font-medium">
                        Processing Time
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-sky-100/80 to-sky-50 rounded-2xl border border-sky-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-sky-800">
                        {visaRequirements.j1Visa.fee}
                      </div>
                      <div className="text-xs text-sky-700 font-medium">
                        Visa Fee
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-cyan-100/80 to-cyan-50 rounded-2xl border border-cyan-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-cyan-800">Required</div>
                      <div className="text-xs text-cyan-700 font-medium">
                        Interview
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-navy mb-3 text-sm">
                      Requirements:
                    </h4>
                    <ul className="space-y-2 max-h-40 overflow-y-auto">
                      {visaRequirements.j1Visa.requirements.map(
                        (req, index) => (
                          <li
                            key={index}
                            className="flex items-start text-xs text-slate-600 p-2 rounded-lg hover:bg-blue-50/50 transition-colors duration-200"
                          >
                            <CheckCircle className="h-3 w-3 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                    Apply for J-1 Visa
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 via-white to-purple-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-purple-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardTitle className="text-xl font-bold text-navy flex items-center group-hover:text-purple-700 transition-colors duration-300">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100/50 rounded-2xl mr-4 border border-purple-200/50 group-hover:border-purple-300 transition-all duration-300">
                      <Globe className="h-7 w-7 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                    </div>
                    Visa Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-4 bg-gradient-to-br from-purple-100/80 to-purple-50 rounded-2xl border border-purple-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-purple-800">1-2 Weeks</div>
                      <div className="text-xs text-purple-700 font-medium">
                        Document Prep
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-violet-100/80 to-violet-50 rounded-2xl border border-violet-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-violet-800">$350-$450</div>
                      <div className="text-xs text-violet-700 font-medium">
                        SEVIS Fee
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-indigo-100/80 to-indigo-50 rounded-2xl border border-indigo-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-indigo-800">Required</div>
                      <div className="text-xs text-indigo-700 font-medium">
                        Financial Proof
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-navy mb-3 text-sm">
                      Essential Documents:
                    </h4>
                    <ul className="space-y-2 max-h-40 overflow-y-auto">
                      {[
                        "Valid passport (6+ months)",
                        "I-20 or DS-2019 form",
                        "Financial statements",
                        "Academic transcripts",
                        "English proficiency scores",
                      ].map((doc, index) => (
                        <li
                          key={index}
                          className="flex items-start text-xs text-slate-600 p-2 rounded-lg hover:bg-purple-50/50 transition-colors duration-200"
                        >
                          <CheckCircle className="h-3 w-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                    Document Checklist
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 via-white to-orange-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-orange-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardTitle className="text-xl font-bold text-navy flex items-center group-hover:text-orange-700 transition-colors duration-300">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-100 via-orange-50 to-orange-100/50 rounded-2xl mr-4 border border-orange-200/50 group-hover:border-orange-300 transition-all duration-300">
                      <Clock className="h-7 w-7 text-orange-600 group-hover:text-orange-700 transition-colors duration-300" />
                    </div>
                    Visa Interview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-4 bg-gradient-to-br from-orange-100/80 to-orange-50 rounded-2xl border border-orange-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-orange-800">15-30 Min</div>
                      <div className="text-xs text-orange-700 font-medium">
                        Interview Duration
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-amber-100/80 to-amber-50 rounded-2xl border border-amber-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-amber-800">2-4 Weeks</div>
                      <div className="text-xs text-amber-700 font-medium">
                        Wait Time
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-yellow-100/80 to-yellow-50 rounded-2xl border border-yellow-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-yellow-800">Embassy</div>
                      <div className="text-xs text-yellow-700 font-medium">
                        Location
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-navy mb-3 text-sm">
                      Interview Tips:
                    </h4>
                    <ul className="space-y-2 max-h-40 overflow-y-auto">
                      {[
                        "Dress professionally",
                        "Bring all required documents",
                        "Practice common questions",
                        "Show ties to home country",
                        "Be honest and confident",
                      ].map((tip, index) => (
                        <li
                          key={index}
                          className="flex items-start text-xs text-slate-600 p-2 rounded-lg hover:bg-orange-50/50 transition-colors duration-200"
                        >
                          <CheckCircle className="h-3 w-3 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                    Interview Preparation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="costs" className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2 mb-6">
                <DollarSign className="h-4 w-4 text-navy" />
                <span className="text-sm font-medium text-navy">
                  Financial Planning
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Costs & Financial Aid
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive breakdown of costs and available financial aid
                opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 via-white to-blue-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardTitle className="text-xl font-bold text-navy group-hover:text-blue-700 transition-colors duration-300 flex items-center">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100/50 rounded-2xl mr-4 border border-blue-200/50 group-hover:border-blue-300 transition-all duration-300">
                      <GraduationCap className="h-7 w-7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                    </div>
                    Undergraduate Costs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  {Object.entries(costs.undergraduate).map(([key, value]) => (
                    <div
                      key={key}
                      className={`flex justify-between items-center py-3 px-4 rounded-xl border transition-all duration-300 ${
                        key === "total"
                          ? "bg-gradient-to-r from-blue-100 to-blue-50 border-blue-200 hover:shadow-lg"
                          : "bg-slate-50/70 border-slate-100 hover:bg-blue-50/50"
                      }`}
                    >
                      <span className="text-slate-700 capitalize font-medium text-sm">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span
                        className={`font-bold ${key === "total" ? "text-xl text-blue-800" : "text-slate-800"}`}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm mt-4">
                    Calculate Undergraduate Costs
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 via-white to-purple-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-purple-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardTitle className="text-xl font-bold text-navy group-hover:text-purple-700 transition-colors duration-300 flex items-center">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100/50 rounded-2xl mr-4 border border-purple-200/50 group-hover:border-purple-300 transition-all duration-300">
                      <Award className="h-7 w-7 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                    </div>
                    Graduate Costs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  {Object.entries(costs.graduate).map(([key, value]) => (
                    <div
                      key={key}
                      className={`flex justify-between items-center py-3 px-4 rounded-xl border transition-all duration-300 ${
                        key === "total"
                          ? "bg-gradient-to-r from-purple-100 to-purple-50 border-purple-200 hover:shadow-lg"
                          : "bg-slate-50/70 border-slate-100 hover:bg-purple-50/50"
                      }`}
                    >
                      <span className="text-slate-700 capitalize font-medium text-sm">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span
                        className={`font-bold ${key === "total" ? "text-ls text-purple-800" : "text-slate-800"}`}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm mt-4">
                    Calculate Graduate Costs
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-gold/10 via-white to-gold/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-gold/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardTitle className="text-xl font-bold text-navy group-hover:text-gold transition-colors duration-300 flex items-center">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gold/20 via-gold/10 to-gold/20 rounded-2xl mr-4 border border-gold/30 group-hover:border-gold/50 transition-all duration-300">
                      <DollarSign className="h-7 w-7 text-navy group-hover:text-gold transition-colors duration-300" />
                    </div>
                    Financial Aid
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <div className="space-y-3">
                    {scholarships.map((scholarship, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="text-sm font-bold text-navy mb-1">
                          {scholarship.name}
                        </div>
                        <div className="text-xs font-bold text-gold mb-2">
                          {scholarship.amount}
                        </div>
                        <div className="text-xs text-slate-600">
                          {scholarship.criteria}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm mt-4">
                    Apply for Financial Aid
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-emerald-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardTitle className="text-xl font-bold text-navy group-hover:text-emerald-700 transition-colors duration-300 flex items-center">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-100 via-emerald-50 to-emerald-100/50 rounded-2xl mr-4 border border-emerald-200/50 group-hover:border-emerald-300 transition-all duration-300">
                      <TrendingUp className="h-7 w-7 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" />
                    </div>
                    Cost Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <div className="space-y-3">
                    <div className="p-4 bg-gradient-to-br from-emerald-100/80 to-emerald-50 rounded-2xl border border-emerald-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-emerald-800">
                        Total 4 Years
                      </div>
                      <div className="text-2xl font-bold text-emerald-900">
                        $348,580
                      </div>
                      <div className="text-xs text-emerald-700 font-medium">
                        Undergraduate
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-teal-100/80 to-teal-50 rounded-2xl border border-teal-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-teal-800">
                        Total 2 Years
                      </div>
                      <div className="text-2xl font-bold text-teal-900">
                        $215,280
                      </div>
                      <div className="text-xs text-teal-700 font-medium">
                        Graduate
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-cyan-100/80 to-cyan-50 rounded-2xl border border-cyan-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-cyan-800">Average Aid</div>
                      <div className="text-2xl font-bold text-cyan-900">
                        $65,000
                      </div>
                      <div className="text-xs text-cyan-700 font-medium">
                        Per Year
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                    Personalized Calculator
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-br from-navy to-navy/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Apply to Harvard?
          </h2>
          <p className="text-xl text-black/90 mb-10 leading-relaxed">
            Get expert guidance on your Harvard University application with our
            comprehensive consultation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-4 text-lg rounded-lg shadow-lg">
                Book Application Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-[#ffc105] hover:text-black font-semibold px-8 py-4 text-lg rounded-lg"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
