import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, BarChart3, GraduationCap, Search, Trophy } from "lucide-react";

export default function Resources() {
  const englishTestResources = [
    {
      icon: BookOpen,
      title: "IELTS Preparation Guide",
      description: "Complete IELTS study guide with practice tests, tips, and strategies for all four skills.",
      actionText: "Download PDF →",
      actionLink: "#",
      bgColor: "bg-teal-500"
    },
    {
      icon: FileText,
      title: "TOEFL Practice Tests",
      description: "Full-length TOEFL practice tests with detailed explanations and scoring guides.",
      actionText: "Access Tests →",
      actionLink: "#",
      bgColor: "bg-teal-500"
    },
    {
      icon: BarChart3,
      title: "PTE Study Materials",
      description: "Comprehensive PTE Academic preparation materials and mock tests.",
      actionText: "Download Materials →",
      actionLink: "#",
      bgColor: "bg-teal-500"
    }
  ];

  const universityResources = [
    {
      icon: GraduationCap,
      title: "University Rankings Guide",
      description: "Comprehensive guide to world university rankings and how to choose the right institution.",
      actionText: "View Guide →",
      actionLink: "#",
      bgColor: "bg-teal-500"
    },
    {
      icon: Search,
      title: "Course Comparison Tool",
      description: "Interactive tool to compare courses, fees, and requirements across different universities.",
      actionText: "Use Tool →",
      actionLink: "#",
      bgColor: "bg-teal-500"
    },
    {
      icon: Trophy,
      title: "Scholarship Database",
      description: "Extensive database of scholarships and funding opportunities for international students.",
      actionText: "Browse Scholarships →",
      actionLink: "#",
      bgColor: "bg-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Resources</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access valuable resources, guides, and tools to help your business grow and succeed.
              </p>
            </div>
          </div>
        </div>

        {/* English Test Resources Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">English Test Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {englishTestResources.map((resource, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg ${resource.bgColor} flex items-center justify-center mb-4`}>
                      <resource.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{resource.description}</p>
                    <a 
                      href={resource.actionLink}
                      className="text-teal-500 hover:text-teal-600 font-medium text-sm inline-flex items-center"
                    >
                      {resource.actionText}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* University Resources Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">University Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {universityResources.map((resource, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg ${resource.bgColor} flex items-center justify-center mb-4`}>
                      <resource.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{resource.description}</p>
                    <a 
                      href={resource.actionLink}
                      className="text-teal-500 hover:text-teal-600 font-medium text-sm inline-flex items-center"
                    >
                      {resource.actionText}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="py-16 bg-teal-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Newsletter Subscription</h2>
            <p className="text-xl text-teal-100 mb-8">
              Stay updated with our latest resources, insights, and industry news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-white border-0 focus:ring-2 focus:ring-teal-300"
              />
              <Button className="bg-teal-600 hover:bg-teal-700 text-white border-0 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}