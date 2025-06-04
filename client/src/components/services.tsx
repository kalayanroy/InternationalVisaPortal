import { Crown, FileCheck, Users, BookOpen, Plane, Shield, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      icon: Crown,
      title: "Premium University Selection",
      description: "Personalized guidance to prestigious institutions with our exclusive partnerships and insider knowledge of admission requirements.",
      tier: "Signature Service",
      color: "bg-gold/10 text-gold",
      highlights: ["Ivy League Access", "Merit Scholarships", "Priority Applications"]
    },
    {
      icon: FileCheck,
      title: "Elite Application Support",
      description: "Expert crafting of compelling applications, essays, and documentation that showcase your unique potential to admissions committees.",
      tier: "Premium Service",
      color: "bg-navy/10 text-navy",
      highlights: ["Personal Statement", "LOR Strategy", "Portfolio Review"]
    },
    {
      icon: Users,
      title: "Executive Mentorship",
      description: "One-on-one guidance from education consultants with proven track records at top-tier universities worldwide.",
      tier: "Exclusive Service",
      color: "bg-secondary/10 text-secondary",
      highlights: ["Former Admissions", "Industry Experts", "Dedicated Support"]
    },
    {
      icon: BookOpen,
      title: "Academic Pathway Planning",
      description: "Strategic academic roadmapping aligned with your career aspirations and global opportunities in your chosen field.",
      tier: "Strategic Service",
      color: "bg-purple-100 text-purple-600",
      highlights: ["Career Alignment", "Skill Mapping", "Future Planning"]
    },
    {
      icon: Plane,
      title: "Global Visa Excellence",
      description: "Comprehensive visa assistance with our 99% success rate, ensuring smooth transitions to your dream destination.",
      tier: "Essential Service",
      color: "bg-green-100 text-green-600",
      highlights: ["99% Success Rate", "Fast Processing", "Interview Prep"]
    },
    {
      icon: Shield,
      title: "Concierge Support",
      description: "End-to-end support including accommodation, banking, insurance, and orientation for a seamless transition abroad.",
      tier: "Luxury Service",
      color: "bg-red-100 text-red-600",
      highlights: ["24/7 Support", "Local Assistance", "Emergency Help"]
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Premium Education Services
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
            Bespoke Educational Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of premium services ensures your academic journey 
            exceeds expectations at every milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-slate-100 hover:border-gold/30 hover:shadow-2xl transition-all duration-700 overflow-hidden"
              >
                {/* Premium header with gradient */}
                <div className="relative h-32 bg-gradient-to-br from-navy to-slate-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
                  
                  {/* Service number */}
                  <div className="absolute top-4 left-6">
                    <span className="text-4xl font-playfair font-bold text-white/30">
                      0{index + 1}
                    </span>
                  </div>
                  
                  {/* Service tier badge */}
                  <div className="absolute top-4 right-6">
                    <span className="text-xs font-bold text-gold bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 uppercase tracking-wider">
                      {service.tier}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute bottom-6 left-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.color} luxury-shadow group-hover:scale-110 transition-all duration-500`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/20 to-transparent rounded-full blur-2xl" />
                </div>
                
                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Title */}
                  <h3 className="text-2xl font-playfair font-bold text-navy group-hover:text-gold transition-colors duration-500 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-navy uppercase tracking-wider border-b border-slate-100 pb-2">
                      Key Features
                    </h4>
                    <div className="space-y-3">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start space-x-3 group/item">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-gold to-navy flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                          </div>
                          <span className="text-sm text-slate-700 font-medium leading-relaxed group-hover/item:text-navy transition-colors">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="w-full bg-navy text-white hover:bg-gold hover:text-navy transition-all duration-500 py-3 rounded-xl font-semibold group/btn"
                    >
                      <span className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </div>
                
                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/20 rounded-2xl transition-all duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-navy rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }} />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Ready to Begin Your Premium Education Journey?
            </h3>
            <p className="text-white/90 mb-8 text-lg">
              Schedule a complimentary consultation with our senior education consultants 
              and discover personalized pathways to your academic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-gold text-white hover:opacity-90 px-8 py-4 text-lg font-semibold luxury-shadow"
              >
                <Crown className="h-5 w-5 mr-2" />
                Book Premium Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
              >
                View Success Stories
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
