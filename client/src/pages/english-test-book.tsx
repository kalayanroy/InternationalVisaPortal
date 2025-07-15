import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  BarChart3,
  CheckCircle,
  Star,
  Download,
  FileText,
  Award,
  Clock,
} from "lucide-react";
import Header from "@/components/header";

export default function EnglishTestBook() {
  const availableTests = [
    {
      name: "IELTS",
      description:
        "International English Language Testing System for academic and general purposes worldwide",
      icon: <BookOpen className="h-8 w-8" />,
      color: "bg-cyan-500",
    },
    {
      name: "PTE Academic",
      description:
        "Pearson Test of English Academic for university admissions and visa applications",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "bg-cyan-500",
    },
    {
      name: "TOEFL",
      description:
        "Test of English as a Foreign Language for academic institutions worldwide",
      icon: <CheckCircle className="h-8 w-8" />,
      color: "bg-cyan-500",
    },
    {
      name: "Duolingo English Test",
      description:
        "Convenient online English proficiency test accepted by universities globally",
      icon: <Star className="h-8 w-8" />,
      color: "bg-cyan-500",
    },
  ];

  const freeResources = [
    {
      title: "IELTS Prep Kit",
      description:
        "Complete practice tests, writing samples, and speaking tips for all modules",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: "PTE Study Guide",
      description: "Comprehensive guide with mock tests and proven strategies",
      icon: <Star className="h-8 w-8" />,
    },
    {
      title: "TOEFL Essentials",
      description:
        "Essential vocabulary lists and practice questions for all sections",
      icon: <BookOpen className="h-8 w-8" />,
    },
    {
      title: "Duolingo Prep",
      description: "Quick preparation guide and sample tests for fast results",
      icon: <CheckCircle className="h-8 w-8" />,
    },
  ];

  const paidCourses = [
    {
      title: "IELTS Express Crash Course",
      description:
        "Intensive 2-week course covering all four skills with personalized feedback and expert guidance",
      price: "$50",
      color: "bg-cyan-50 border-cyan-200",
    },
    {
      title: "PTE Academic Masterclass",
      description:
        "Comprehensive course with AI-powered practice sessions and expert guidance for guaranteed results",
      price: "$45",
      color: "bg-cyan-50 border-cyan-200",
    },
    {
      title: "TOEFL iBT Intensive Prep",
      description:
        "Complete preparation with full-length practice tests and proven strategies for high scores",
      price: "$55",
      color: "bg-cyan-50 border-cyan-200",
    },
    {
      title: "Duolingo 7-Day Challenge",
      description:
        "Fast-track preparation with daily practice sessions, tips, and mock tests for quick success",
      price: "$35",
      color: "bg-cyan-50 border-cyan-200",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      test: "IELTS Score: 8.5",
      initial: "S",
      color: "bg-cyan-500",
      feedback:
        "DTR Consultancy's preparation course was exceptional. The personalized feedback and comprehensive practice tests helped me achieve my target score for university admission in just 3 weeks!",
    },
    {
      name: "M Arafat",
      test: "PTE Score: 79",
      initial: "M",
      color: "bg-cyan-500",
      feedback:
        "The PTE Masterclass was incredibly comprehensive and well-structured. I improved my score by 20 points and successfully got my visa approved. The AI-powered practice was a game-changer!",
    },
    {
      name: "Aisha Patel",
      test: "TOEFL Score: 110",
      initial: "A",
      color: "bg-cyan-500",
      feedback:
        "The TOEFL intensive prep course exceeded my expectations. The strategies and practice materials were top-notch, and I achieved my dream score of 110. Highly recommended for serious students!",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-20 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book Your English Test &
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-500 mb-6">
              Prepare with Confidence
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose your test, access free and premium preparation resources,
              and get ready to succeed.
            </p>
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg font-semibold"
            >
              Book a Test Now
            </Button>
          </div>
        </div>

        {/* Available English Tests Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available English Tests
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of internationally recognized
              English proficiency tests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {availableTests.slice(0, 4).map((test, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:shadow-lg transition-shadow text-center"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 ${test.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    {test.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {test.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-6">
                    {test.description}
                  </p>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Duolingo Test - Single card in second row */}
          {/*<div className="flex justify-center mt-6">
            <div className="w-full max-w-sm">
              <Card className="border-gray-200 hover:shadow-lg transition-shadow text-center">
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 ${availableTests[3].color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    {availableTests[3].icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {availableTests[3].name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-6">
                    {availableTests[3].description}
                  </p>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>*/}
        </div>

        {/* Free Preparation Resources Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Free Preparation Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access our comprehensive collection of free study materials,
                practice tests, and expert tips
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {freeResources.map((resource, index) => (
                <Card
                  key={index}
                  className="border-gray-200 hover:shadow-lg transition-shadow text-center"
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {resource.icon}
                    </div>
                    <CardTitle className="text-lg text-gray-900">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-6">
                      {resource.description}
                    </p>
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Paid Preparation Courses Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Join a Paid Preparation Course
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Accelerate your preparation with our expert-led premium courses
                and personalized guidance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paidCourses.map((course, index) => (
                <Card
                  key={index}
                  className={`${course.color} hover:shadow-lg transition-shadow`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 text-center">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-gray-600 mb-6">
                      {course.description}
                    </p>
                    <div className="text-3xl font-bold text-cyan-500 mb-4">
                      {course.price}
                    </div>
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Students Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Success stories from students who achieved their goals with DTR
                Consultancy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}
                      >
                        {testimonial.initial}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-cyan-500 font-medium">
                          {testimonial.test}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      "{testimonial.feedback}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your English Test Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book your test today and access our comprehensive preparation
              resources
            </p>
            <div className="space-x-4">
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Book a Test Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 text-lg font-semibold"
              >
                View Free Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
