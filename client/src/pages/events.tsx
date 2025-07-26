import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export default function Events() {
  const newsItems = [
    {
      category: "Breaking News",
      categoryColor: "bg-red-100 text-red-600",
      time: "30 minutes ago",
      title: "Germany Launches New AI & Tech Scholarship Initiative",
      description: "German universities announce €100M funding for international students in artificial intelligence, robotics, and sustainable technology programs.",
      readMore: "Read More →"
    },
    {
      category: "Visa Update",
      categoryColor: "bg-blue-100 text-blue-600",
      time: "1 hour ago",
      title: "New Zealand Simplifies Student Visa Process",
      description: "Immigration New Zealand introduces digital-first visa applications with 40% faster processing times for international students.",
      readMore: "Read More →"
    },
    {
      category: "Breaking News",
      categoryColor: "bg-red-100 text-red-600",
      time: "2 hours ago",
      title: "Australia Announces New Student Visa Changes for 2024",
      description: "The Australian government has introduced streamlined visa processing for international students, reducing wait times by up to 30%.",
      readMore: "Read More →"
    },
    {
      category: "Scholarships",
      categoryColor: "bg-green-100 text-green-600",
      time: "3 hours ago",
      title: "New $50M Scholarship Program Launched for International Students",
      description: "Major universities across Canada announce expanded scholarship opportunities for students from developing countries.",
      readMore: "Read More →"
    },
    {
      category: "Test Updates",
      categoryColor: "bg-cyan-100 text-cyan-600",
      time: "4 hours ago",
      title: "IELTS Introduces New Computer-Based Speaking Test",
      description: "British Council announces pilot program for AI-assisted IELTS speaking tests, offering more flexible scheduling options.",
      readMore: "Read More →"
    },
    {
      category: "Healthcare",
      categoryColor: "bg-purple-100 text-purple-600",
      time: "5 hours ago",
      title: "US Medical Schools Expand International Student Intake",
      description: "Top American medical schools increase international student quotas by 25% for 2024-2025 academic year.",
      readMore: "Read More →"
    },
    {
      category: "Rankings",
      categoryColor: "bg-indigo-100 text-indigo-600",
      time: "6 hours ago",
      title: "QS World University Rankings 2024 Released",
      description: "MIT retains top position while several Asian universities climb in the latest global university rankings.",
      readMore: "Read More →"
    },
    {
      category: "Policy Update",
      categoryColor: "bg-orange-100 text-orange-600",
      time: "8 hours ago",
      title: "UK Extends Post-Study Work Visa Duration",
      description: "International graduates can now stay and work in the UK for up to 3 years after completing their studies.",
      readMore: "Read More →"
    }
  ];

  const upcomingSeminars = [
    {
      title: "Study in Australia - Information Session",
      description: "Learn about Australian universities, visa requirements, and scholarship opportunities. Meet with university representatives.",
      date: "March 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "DTR Office, Barangaroo",
      buttonText: "Book Seat",
      buttonColor: "bg-teal-500 hover:bg-teal-600"
    },
    {
      title: "IELTS Preparation Workshop",
      description: "Intensive IELTS preparation workshop covering all four skills with expert trainers and practice tests.",
      date: "March 28, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Online Webinar",
      buttonText: "Register Now",
      buttonColor: "bg-teal-500 hover:bg-teal-600"
    },
    {
      title: "Canada Study Visa Seminar",
      description: "Complete guide to Canadian student visa application process, requirements, and tips for success.",
      date: "April 10, 2024",
      time: "3:00 PM - 6:00 PM",
      location: "DTR Office, Barangaroo",
      buttonText: "Book Seat",
      buttonColor: "bg-teal-500 hover:bg-teal-600"
    }
  ];

  const pastEvents = [
    {
      title: "UK Universities Fair 2024",
      description: "February 2024 - Representatives from 25+ UK universities met with prospective students for direct admissions.",
      actionText: "View Recordings →",
      actionColor: "text-teal-500 hover:text-teal-600"
    },
    {
      title: "Scholarship Success Workshop",
      description: "January 2024 - Intensive workshop on scholarship applications with tips from successful recipients.",
      actionText: "Download Guide →",
      actionColor: "text-teal-500 hover:text-teal-600"
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
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Events & News</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay updated with the latest education news and join our seminars and workshops for 
                study abroad guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Today's Education News */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Today's Education News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsItems.map((news, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`${news.categoryColor} font-medium`}>
                        {news.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{news.time}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {news.description}
                    </p>
                    <a 
                      href="#"
                      className="text-teal-500 hover:text-teal-600 font-medium text-sm inline-flex items-center"
                    >
                      {news.readMore}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Seminars & Workshops */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Seminars & Workshops</h2>
            <div className="space-y-6">
              {upcomingSeminars.map((seminar, index) => (
                <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{seminar.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{seminar.description}</p>
                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {seminar.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {seminar.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {seminar.location}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0 lg:ml-6">
                        <Button className={`${seminar.buttonColor} text-white px-6 py-2`}>
                          {seminar.buttonText}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Past Events */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map((event, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{event.description}</p>
                    <a 
                      href="#"
                      className={`${event.actionColor} font-medium text-sm inline-flex items-center`}
                    >
                      {event.actionText}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="py-16 bg-teal-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Study Abroad News</h2>
            <p className="text-xl text-teal-100 mb-8">
              Subscribe to our newsletter for the latest education news, visa updates, and seminar announcements.
            </p>
            <Button className="bg-white text-teal-600 hover:bg-teal-50 font-semibold px-8 py-3">
              Subscribe Now
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}