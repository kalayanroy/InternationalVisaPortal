import { GraduationCap, FileText, MessageCircle, University, Globe, Headphones, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: "Student Visa",
      description: "Complete assistance for F-1, M-1, and other student visa categories with document preparation and interview coaching.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: FileText,
      title: "Document Preparation",
      description: "Expert review and preparation of all required documents, ensuring compliance with latest embassy requirements.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: MessageCircle,
      title: "Interview Coaching",
      description: "Personalized interview preparation with mock sessions and expert tips to boost your confidence.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: University,
      title: "University Selection",
      description: "Guidance on choosing the right university and program that aligns with your career goals and visa requirements.",
      color: "bg-success/10 text-success",
    },
    {
      icon: Globe,
      title: "Country-Specific Guidance",
      description: "Specialized knowledge of visa requirements for USA, Canada, UK, Australia, and 20+ other countries.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your visa application process with dedicated case managers.",
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Visa Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From application to approval, we provide end-to-end support for your
            international education journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${service.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center text-primary font-medium hover:text-primary/80 cursor-pointer group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
