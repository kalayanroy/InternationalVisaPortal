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
            
            // Service-specific background patterns
            const backgroundImages = [
              'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23B8860B" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E',
              'data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%231e293b" fill-opacity="0.03"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20zm0 0c11.046 0 20 8.954 20 20H20V20z"/%3E%3C/g%3E%3C/svg%3E',
              'data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23B8860B" fill-opacity="0.04"%3E%3Cpath d="M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z" fill-rule="evenodd"/%3E%3C/g%3E%3C/svg%3E',
              'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%231e293b" fill-opacity="0.04"%3E%3Cpath d="M30 0l30 30-30 30L0 30 30 0zm0 6L6 30l24 24 24-24L30 6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'
            ];
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl border border-slate-100/50 hover:border-gold/30 transition-all duration-700 overflow-hidden"
                style={{
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 4px 25px rgba(0, 0, 0, 0.05)',
                  transform: 'translateY(0px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.15), 0 10px 40px rgba(184, 134, 11, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1), 0 4px 25px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0px)';
                }}
              >
                {/* Background pattern */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url("${backgroundImages[index]}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white/90 to-slate-50/80 group-hover:from-slate-50/60 group-hover:via-white/80 group-hover:to-gold/5 transition-all duration-700" />
                
                {/* Premium header with gradient */}
                <div className="relative h-40 bg-gradient-to-br from-navy via-slate-800 to-navy overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-gold/10 to-transparent group-hover:from-gold/40 group-hover:to-gold/20 transition-all duration-700" />
                  
                  {/* Animated particles */}
                  <div className="absolute top-4 right-12 w-2 h-2 bg-gold rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
                  <div className="absolute top-8 right-20 w-1 h-1 bg-white rounded-full opacity-40 group-hover:opacity-80 group-hover:scale-125 transition-all duration-500" />
                  <div className="absolute top-12 right-8 w-1.5 h-1.5 bg-gold/70 rounded-full opacity-50 group-hover:opacity-90 group-hover:scale-110 transition-all duration-600" />
                  
                  {/* Service number with animation */}
                  <div className="absolute top-6 left-6 transform group-hover:scale-110 transition-transform duration-500">
                    <span className="text-5xl font-playfair font-bold text-white/40 group-hover:text-white/60 transition-colors duration-500">
                      0{index + 1}
                    </span>
                  </div>
                  
                  {/* Service tier badge with pulse animation */}
                  <div className="absolute top-6 right-6 transform group-hover:scale-105 transition-transform duration-500">
                    <span className="text-xs font-bold text-gold bg-white/15 backdrop-blur-md px-4 py-2 rounded-full border border-gold/30 uppercase tracking-wider group-hover:bg-white/20 group-hover:border-gold/50 transition-all duration-500">
                      {service.tier}
                    </span>
                  </div>
                  
                  {/* Icon with enhanced animation */}
                  <div className="absolute bottom-6 left-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <div className={`w-18 h-18 rounded-2xl flex items-center justify-center ${service.color} shadow-xl group-hover:shadow-2xl transition-all duration-500`}
                         style={{
                           boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15), 0 4px 15px rgba(184, 134, 11, 0.1)',
                         }}>
                      <IconComponent className="h-9 w-9 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Enhanced decorative elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/30 to-transparent rounded-full blur-2xl group-hover:blur-xl group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-all duration-500" />
                </div>
                
                {/* Content with enhanced spacing */}
                <div className="relative p-8 space-y-6">
                  {/* Title with underline animation */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-playfair font-bold text-navy group-hover:text-gold transition-colors duration-500 leading-tight">
                      {service.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-navy rounded-full group-hover:w-24 transition-all duration-500" />
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Features with staggered animations */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-navy uppercase tracking-wider border-b border-slate-100 pb-2 group-hover:border-gold/30 transition-colors duration-300">
                      Key Features
                    </h4>
                    <div className="space-y-3">
                      {service.highlights.map((highlight, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start space-x-3 group/item transform transition-all duration-300"
                          style={{
                            transitionDelay: `${idx * 50}ms`
                          }}
                        >
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-gold to-navy flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                            <div className="w-1.5 h-1.5 bg-white rounded-full group-hover/item:scale-125 transition-transform duration-200" />
                          </div>
                          <span className="text-sm text-slate-700 font-medium leading-relaxed group-hover/item:text-navy group-hover/item:translate-x-1 transition-all duration-300">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button with enhanced animation */}
                  <div className="pt-4">
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="w-full bg-navy text-white hover:bg-gold hover:text-navy transition-all duration-500 py-4 rounded-xl font-semibold group/btn shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
                
                {/* Enhanced hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 rounded-3xl transition-all duration-500 pointer-events-none" />
                
                {/* Floating elements on hover */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000 pointer-events-none" />
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
