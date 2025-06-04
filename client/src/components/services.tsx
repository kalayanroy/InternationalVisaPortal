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

        <div className="relative mb-20">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-navy/5 rounded-full blur-3xl" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Main card */}
                  <div className="relative bg-white rounded-3xl p-10 border border-slate-100/80 hover:border-gold/40 transition-all duration-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-3">
                    
                    {/* Top section with icon and number */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="relative">
                        <div className={`w-20 h-20 rounded-3xl flex items-center justify-center ${service.color} shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                          <IconComponent className="h-10 w-10" />
                        </div>
                        
                        {/* Floating number */}
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-navy rounded-full flex items-center justify-center shadow-md">
                          <span className="text-sm font-bold text-white">{index + 1}</span>
                        </div>
                      </div>
                      
                      {/* Service tier */}
                      <div className="bg-gradient-to-r from-gold/10 to-navy/10 rounded-2xl px-4 py-2 border border-gold/20">
                        <span className="text-xs font-bold text-navy uppercase tracking-wider">
                          {service.tier}
                        </span>
                      </div>
                    </div>
                    
                    {/* Title and description */}
                    <div className="space-y-6 mb-8">
                      <h3 className="text-2xl font-playfair font-bold text-navy group-hover:text-gold transition-colors duration-500 leading-tight">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed font-medium">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Features with enhanced styling */}
                    <div className="space-y-6 mb-8">
                      <h4 className="text-sm font-bold text-navy uppercase tracking-widest flex items-center">
                        <div className="w-4 h-0.5 bg-gold mr-3" />
                        Key Features
                      </h4>
                      
                      <div className="space-y-4">
                        {service.highlights.map((highlight, idx) => (
                          <div key={idx} className="group/item flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-300">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-gold to-navy flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                <div className="w-2 h-2 bg-white rounded-full" />
                              </div>
                            </div>
                            <span className="text-slate-700 font-medium leading-relaxed group-hover/item:text-navy transition-colors">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Enhanced CTA button */}
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="w-full bg-gradient-to-r from-navy to-slate-800 text-white hover:from-gold hover:to-amber-600 transition-all duration-500 py-4 rounded-2xl font-bold text-base group/btn shadow-lg hover:shadow-xl relative overflow-hidden"
                    >
                      {/* Button highlight effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                      
                      <span className="relative flex items-center justify-center">
                        Start Journey
                        <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </span>
                    </Button>
                    
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-navy/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Floating background element */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-gold/5 via-transparent to-navy/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                </div>
              );
            })}
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
