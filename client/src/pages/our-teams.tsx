import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function OurTeams() {
  const teamMembers = [
    {
      name: "Forhad Hossain",
      position: "CEO & Founder",
      initials: "FH",
      description: "With over 15 years of experience in education consultation, Forhad leads our team with vision and expertise in guiding students toward academic success.",
      bgColor: "bg-teal-500"
    },
    {
      name: "Mohammed Rafi",
      position: "Marketing Manager",
      initials: "MR",
      description: "Mohammed specializes in educational marketing strategies and has helped numerous students discover the right academic opportunities.",
      bgColor: "bg-teal-500"
    },
    {
      name: "Arafat Hossain",
      position: "Account Manager",
      initials: "AH",
      description: "Arafat manages student accounts and ensures smooth application processes with dedication and professionalism.",
      bgColor: "bg-teal-500"
    },
    {
      name: "Sarah Wilson",
      position: "Financial Advisor",
      initials: "SW",
      description: "Sarah provides expert financial guidance and helps clients optimize their financial strategies.",
      bgColor: "bg-teal-500"
    },
    {
      name: "Robert Taylor",
      position: "Technology Consultant",
      initials: "RT",
      description: "Robert leads our technology initiatives and helps clients leverage digital solutions for growth.",
      bgColor: "bg-teal-500"
    },
    {
      name: "Lisa Davis",
      position: "Marketing Specialist",
      initials: "LD",
      description: "Lisa develops comprehensive marketing strategies that drive brand awareness and customer engagement.",
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
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Teams</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet our dedicated team of professionals who bring expertise, innovation, and passion 
                to every project.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    {/* Avatar Circle */}
                    <div className={`w-20 h-20 rounded-full ${member.bgColor} flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white text-xl font-bold">{member.initials}</span>
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    
                    {/* Position */}
                    <p className="text-teal-500 font-medium mb-4">{member.position}</p>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Join Our Team Section */}
        <div className="py-16 bg-teal-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing team.
            </p>
            <Button className="bg-white text-teal-600 hover:bg-teal-50 font-semibold px-8 py-3">
              View Opportunities
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}