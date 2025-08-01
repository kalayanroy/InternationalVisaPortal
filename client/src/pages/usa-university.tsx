import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Laptop,
  Heart,
  Plane,
  FileText,
  CreditCard,
  Languages,
  DollarSign,
  GraduationCap,
  CheckCircle,
  Trophy,
  Briefcase,
  Clock,
  Users,
  Globe,
  MapPin,
  Star,
  Award,
  Camera,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/header";

export default function USAUniversity() {
  const popularCourses = [
    {
      title: "Business Administration",
      duration: "",
      tuition: "",
      ielts: "6.5+",
      icon: <BookOpen className="h-8 w-8" />,
    },
    {
      title: "Computer Science & IT",
      duration: "",
      tuition: "",
      ielts: "90+",
      icon: <Laptop className="h-8 w-8" />,
    },
    {
      title: "Data Science & AI",
      duration: "",
      tuition: "",
      ielts: "320+",
      icon: <Heart className="h-8 w-8" />,
    },
    {
      title: "Engineering",
      duration: "",
      tuition: "",
      ielts: "85+",
      icon: <Plane className="h-8 w-8" />,
    },
    {
      title: "Public Health",
      duration: "",
      tuition: "",
      ielts: "7.0+",
      icon: <Plane className="h-8 w-8" />,
    },
    {
      title: "Finance & Accounting",
      duration: "",
      tuition: "",
      ielts: "650+",
      icon: <Plane className="h-8 w-8" />,
    },
    {
      title: "Law",
      duration: "",
      tuition: "",
      ielts: "160+",
      icon: <Plane className="h-8 w-8" />,
    },
    {
      title: "Film & Media Studies",
      duration: "",
      tuition: "",
      ielts: "Portfolio Required",
      icon: <Plane className="h-8 w-8" />,
    },
  ];

  const admissionRequirements = [
    {
      title: "Valid Passport",
      description: "Current passport copy",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: "Academic Certificates",
      description: "Completed academic records",
      icon: <CreditCard className="h-8 w-8" />,
    },
    {
      title: "English Language Proficiency",
      description: "IELTS/TOEFL/PTE/Duolingo",
      icon: <Languages className="h-8 w-8" />,
    },
    {
      title: "Statement of Purpose (SOP)",
      description: "Statement of Purpose (SOP)",
      icon: <DollarSign className="h-8 w-8" />,
    },
    {
      title: "CV/Resume",
      description: "Letters of recommendation (if required)",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: "Financial Proof",
      description: "",
      icon: <GraduationCap className="h-8 w-8" />,
    },
    {
      title: "Visa Application Form (DS-160)",
      description: "",
      icon: <GraduationCap className="h-8 w-8" />,
    },
    {
      title: "SEVIS Fee Payment",
      description: "",
      icon: <GraduationCap className="h-8 w-8" />,
    },
  ];

  const topUniversities = [
    {
      name: "University of Oxford",
      location: "Oxford, England",
      code: "UO",
      ranking: "#1",
      fees: "£9,250 - £58,600/year",
      color: "bg-blue-50 border-blue-200",
      codeColor: "bg-blue-500 text-white",
    },
    {
      name: "University of Cambridge",
      location: "Cambridge, England",
      code: "UC",
      ranking: "#2",
      fees: "£9,250 - £61,000/year",
      color: "bg-purple-50 border-purple-200",
      codeColor: "bg-purple-500 text-white",
    },
    {
      name: "University of Manchester",
      location: "Manchester, England",
      code: "UM",
      ranking: "#6",
      fees: "£9,250 - £47,000/year",
      color: "bg-red-50 border-red-200",
      codeColor: "bg-red-500 text-white",
    },
    {
      name: "University of Edinburgh",
      location: "Edinburgh, Scotland",
      code: "UE",
      ranking: "#5",
      fees: "£9,250 - £34,800/year",
      color: "bg-green-50 border-green-200",
      codeColor: "bg-green-500 text-white",
    },
    {
      name: "King's College London",
      location: "London, England",
      code: "KCL",
      ranking: "#7",
      fees: "£9,250 - £46,650/year",
      color: "bg-orange-50 border-orange-200",
      codeColor: "bg-orange-500 text-white",
    },
    {
      name: "University of Birmingham",
      location: "Birmingham, England",
      code: "UTS",
      ranking: "#13",
      fees: " £9,250 - £25,860/year",
      color: "bg-cyan-50 border-cyan-200",
      codeColor: "bg-cyan-500 text-white",
    },
  ];

  const whyChoosePoints = [
    "Innovative teaching methods and cutting-edge research facilities",
    "Strong industry connections and practical learning opportunities",
    "Globally recognized degrees and qualifications",
    "English-speaking environment for international students",
  ];

  const workRightsPoints = [
    "Work up to 20 hours per week during studies",
    "Full-time work during semester breaks",
    "Post-study work visa for 2-4 years after graduation",
    "Pathway to permanent residency for skilled graduates",
  ];

  const lifestylePoints = [
    "Safe and welcoming environment for international students",
    "Multicultural society with students from 200+ countries",
    "Beautiful beaches, national parks, and outdoor activities",
    "Modern cities with excellent public transport and healthcare",
  ];

  const visaGuidance = [
    {
      title: "F-1 Student Visa",
      decription:
        "For full-time academic studies at accredited US institutions. Allows part-time work on campus and practical training opportunities.",
    },
    {
      title: "J-1 Exchange Visitor Visa",
      decription:
        "For educational and cultural exchange programs, including research scholars, professors, and short-term students.",
    },
    {
      title: "M-1 Vocational Visa",
      decription:
        "For vocational and technical training programs. Ideal for students pursuing non-academic or vocational studies.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-20 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Study in USA with
                  <br />
                  DTR Consultancy
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Your trusted partner for international education and migration
                  services in United States. Turn your dreams into reality with
                  world-class education.
                </p>
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg font-semibold rounded-full"
                >
                  🌟 Get Free Consultation
                </Button>
              </div>
              <div className="flex justify-center">
                <Card className="bg-white text-black p-8 text-center max-w-sm">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">
                    USA
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    United States Awaits
                  </h3>
                  <p className="text-gray-600">
                    Join 700,000+ international students
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Courses Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular Courses in United States(USA)
              </h2>
              <p className="text-lg text-gray-600">
                Discover the most sought-after programs for international
                students
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCourses.map((course, index) => (
                <Card
                  key={index}
                  className="border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 text-cyan-600">
                      {course.icon}
                    </div>
                    <CardTitle className="text-lg text-gray-900">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Duration: {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Tuition: {course.tuition}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="h-4 w-4 mr-2" />
                      IELTS: {course.ielts}
                    </div>
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white mt-4">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Admission Requirements Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Admission Requirements
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know for your application
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {admissionRequirements.map((requirement, index) => (
                <Card
                  key={index}
                  className="border-gray-200 hover:shadow-lg transition-shadow text-center"
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-gray-600">
                      {requirement.icon}
                    </div>
                    <CardTitle className="text-lg text-gray-900">
                      {requirement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      {requirement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Top Universities Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Top United States(USA) Universities
              </h2>
              <p className="text-lg text-gray-600">
                Partner with world-renowned institutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topUniversities.map((university, index) => (
                <Card
                  key={index}
                  className={`${university.color} hover:shadow-lg transition-shadow`}
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 ${university.codeColor} rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl font-bold`}
                    >
                      {university.code}
                    </div>
                    <CardTitle className="text-lg text-gray-900">
                      {university.name}
                    </CardTitle>
                    <p className="text-sm text-gray-600">
                      {university.location}
                    </p>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    <div className="flex items-center justify-center text-sm text-cyan-600">
                      <Award className="h-4 w-4 mr-1" />
                      QS Ranking: {university.ranking}
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 mr-1" />
                      Fees: {university.fees}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose United States Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* World-Class Education System - Left Side */}
              <div className="bg-teal-50 rounded-2xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      World-Class Education System
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  United States(USA) is home to 8 of the world's top 100
                  universities and offers internationally recognized
                  qualifications that are valued by employers worldwide.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Innovative teaching methods and cutting-edge research
                      facilities
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Strong industry connections and practical learning
                      opportunities
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Globally recognized degrees and qualifications
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      English-speaking environment for international students
                    </span>
                  </div>
                </div>
              </div>

              {/* Education Excellence Card - Right Side */}
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                  <div className="flex items-center justify-between mb-6">
                    <Trophy className="h-16 w-16 text-yellow-500" />
                    <div className="text-right">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Education Excellence
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-600 mb-2">
                        #3
                      </div>
                      <div className="text-sm text-gray-600 leading-tight">
                        Most Popular Study Destination
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-600 mb-2">
                        8/100
                      </div>
                      <div className="text-sm text-gray-600 leading-tight">
                        Top Universities Globally
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work & Career Opportunities Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Work & Career Opportunities - Left Side */}
              <div className="bg-gray-100 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Work & Career Opportunities
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      20 hours/week
                    </div>
                    <div className="text-gray-600">
                      Part-time work while studying
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      2-4 years
                    </div>
                    <div className="text-gray-600">Post-study work visa</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      $25.41/hour
                    </div>
                    <div className="text-gray-600">Minimum wage rate</div>
                  </div>
                </div>
              </div>

              {/* Work Rights & Financial Benefits - Right Side */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Work Rights & Financial Benefits
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  United States(USA) offers excellent work opportunities for
                  international students, helping you gain experience and
                  support your studies financially.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Work up to 20 hours per week during studies
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Full-time work during semester breaks
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Post-study work visa for 2-4 years after graduation
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Pathway to permanent residency for skilled graduates
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lifestyle & Quality of Life Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Lifestyle & Cultural Experience - Left Side */}
              <div className="bg-teal-50 rounded-2xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Lifestyle & Cultural Experience
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Experience United States's unique blend of stunning natural
                  beauty, vibrant cities, and multicultural society that
                  welcomes students from around the world.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Safe and welcoming environment for international students
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Multicultural society with students from 200+ countries
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Beautiful beaches, national parks, and outdoor activities
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Modern cities with excellent public transport and
                      healthcare
                    </span>
                  </div>
                </div>
              </div>

              {/* Quality of Life Card - Right Side */}
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Quality of Life
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        #4
                      </div>
                      <div className="text-sm text-gray-600 leading-tight">
                        Safest Country in the World
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        300+
                      </div>
                      <div className="text-sm text-gray-600 leading-tight">
                        Days of Sunshine
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        7/10
                      </div>
                      <div className="text-sm text-gray-600 leading-tight">
                        Most Liveable Cities
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Visa Guidance Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visa Guidance
              </h2>
              <p className="text-lg text-gray-600">
                Understanding US visa categories for students
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visaGuidance.map((course, index) => (
                <Card
                  key={index}
                  className="border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-gray-900">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <p className="text-sm text-gray-600">
                        {course.decription}
                      </p>
                    </div>
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white mt-4">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Your Future Starts Here Section */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              🚀 Your Future Starts Here
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
              Join the thousands of successful graduates who started their
              journey in United States. With world-class education, work
              opportunities, and an incredible lifestyle, United States is your
              gateway to a bright future.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">700K+</div>
                <div className="text-lg opacity-90">International Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-lg opacity-90">
                  Graduate Employment Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-lg opacity-90">Countries Represented</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$65K</div>
                <div className="text-lg opacity-90">
                  Average Graduate Salary
                </div>
              </div>
            </div>

            <div className="space-x-4">
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Start Your Application
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-cyan-600 hover:bg-white hover:text-cyan-600 px-8 py-3 text-lg font-semibold"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
