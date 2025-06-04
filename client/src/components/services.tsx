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

        <div className="space-y-12 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-none border-b border-slate-100 last:border-b-0 hover:bg-gradient-to-r hover:from-slate-50/50 hover:to-white transition-all duration-700"
              >
                <div className="py-16 px-8 grid md:grid-cols-12 gap-12 items-start">
                  {/* Service Number & Icon */}
                  <div className="md:col-span-2 flex flex-col items-center space-y-6">
                    <div className="text-6xl font-playfair font-bold text-gold/20 group-hover:text-gold/40 transition-colors">
                      0{index + 1}
                    </div>
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center ${service.color} luxury-shadow group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                      <IconComponent className="h-10 w-10" />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:col-span-7 space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-4xl font-playfair font-bold text-navy group-hover:text-gold transition-colors duration-500">
                          {service.title}
                        </h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-gold/50 to-transparent" />
                      </div>
                      
                      <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start space-x-3 group/item">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-gold to-navy flex items-center justify-center flex-shrink-0 mt-1">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                          <span className="text-slate-700 font-medium leading-relaxed group-hover/item:text-navy transition-colors">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Section */}
                  <div className="md:col-span-3 flex flex-col items-start space-y-6">
                    <div className="bg-gradient-to-r from-gold/10 to-navy/10 rounded-2xl p-6 w-full">
                      <span className="text-sm font-bold text-navy uppercase tracking-widest mb-4 block">
                        Service Tier
                      </span>
                      <span className="text-2xl font-playfair font-bold text-gold">
                        {service.tier}
                      </span>
                    </div>
                    
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="w-full bg-navy text-white hover:bg-gold hover:text-navy transition-all duration-500 py-4 rounded-2xl font-semibold text-base group/btn"
                    >
                      <span className="flex items-center justify-center">
                        Inquire Now
                        <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </div>
                
                {/* Decorative line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
