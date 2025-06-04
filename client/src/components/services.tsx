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

        <div className="relative">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-slate-900 p-1 rounded-3xl overflow-hidden">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div
                  key={index}
                  className="group relative bg-white p-12 hover:bg-slate-50 transition-all duration-700 cursor-pointer"
                >
                  {/* Minimal accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-navy" />
                  
                  {/* Header Section */}
                  <div className="mb-8 space-y-6">
                    {/* Icon and tier badge row */}
                    <div className="flex items-start justify-between">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${service.color} transform group-hover:scale-110 transition-transform duration-500`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      
                      <span className="text-xs font-black text-gold/80 bg-gold/10 px-3 py-1 rounded-full border border-gold/20 uppercase tracking-widest">
                        {service.tier}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-playfair font-black text-navy leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-8">
                    {/* Description */}
                    <p className="text-slate-700 text-lg leading-relaxed font-medium">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-2 h-2 bg-gold rounded-full" />
                        <span className="text-sm font-black text-navy uppercase tracking-widest">Features</span>
                      </div>
                      
                      <div className="space-y-3">
                        {service.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start space-x-3 group/item">
                            <div className="w-1 h-1 bg-navy rounded-full mt-2 flex-shrink-0 group-hover/item:bg-gold transition-colors" />
                            <span className="text-slate-600 font-semibold text-base leading-relaxed group-hover/item:text-navy transition-colors">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action */}
                    <div className="pt-6">
                      <button
                        onClick={() => scrollToSection("contact")}
                        className="group/btn flex items-center space-x-2 text-navy font-black text-base hover:text-gold transition-colors duration-300"
                      >
                        <span>Explore Service</span>
                        <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-gold/20 rounded-lg transition-all duration-300 pointer-events-none" />
                </div>
              );
            })}
          </div>
          
          {/* Bottom accent */}
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
          </div>
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
