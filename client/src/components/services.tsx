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

        <div className="space-y-16 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`group flex items-center gap-16 ${!isEven ? 'flex-row-reverse' : ''}`}
              >
                {/* Visual Section */}
                <div className="flex-1 relative">
                  <div className="relative h-80 bg-gradient-to-br from-slate-50 to-white rounded-3xl overflow-hidden border border-slate-100/50 luxury-shadow group-hover:shadow-2xl transition-all duration-700">
                    {/* Sophisticated background pattern */}
                    <div className="absolute inset-0 opacity-30">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#B8860B', stopOpacity: 0.1}} />
                            <stop offset="50%" style={{stopColor: 'transparent'}} />
                            <stop offset="100%" style={{stopColor: '#1e293b', stopOpacity: 0.1}} />
                          </linearGradient>
                        </defs>
                        <path d="M0,20 Q50,0 100,20 L100,80 Q50,100 0,80 Z" fill={`url(#grad-${index})`} />
                      </svg>
                    </div>
                    
                    {/* Floating icon design */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Icon backdrop rings */}
                        <div className="absolute inset-0 w-32 h-32 border-2 border-gold/20 rounded-full animate-pulse" />
                        <div className="absolute inset-4 w-24 h-24 border border-navy/20 rounded-full" />
                        
                        {/* Main icon */}
                        <div className={`relative w-24 h-24 rounded-full flex items-center justify-center ${service.color} luxury-shadow group-hover:scale-110 transition-all duration-700`}>
                          <IconComponent className="h-12 w-12" />
                        </div>
                        
                        {/* Floating elements */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full opacity-80 group-hover:scale-125 transition-transform duration-500" />
                        <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-navy rounded-full opacity-60 group-hover:scale-125 transition-transform duration-700" />
                      </div>
                    </div>
                    
                    {/* Service tier badge */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-white/90 backdrop-blur-md border border-gold/30 rounded-2xl px-4 py-2 luxury-shadow">
                        <span className="text-xs font-bold text-gold uppercase tracking-wider">
                          {service.tier}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-8">
                  {/* Header */}
                  <div className="space-y-4">
                    <h3 className="text-4xl font-playfair font-bold text-navy leading-tight group-hover:text-gold transition-colors duration-500">
                      {service.title}
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold to-navy rounded-full" />
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  {/* Premium feature grid */}
                  <div className="space-y-6">
                    <h4 className="text-sm font-bold text-navy uppercase tracking-widest border-b border-slate-200 pb-2">
                      Excellence Standards
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="group/feature flex items-start space-x-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-3 h-3 bg-gradient-to-r from-gold to-navy rounded-full group-hover/feature:scale-125 transition-transform" />
                          </div>
                          <span className="text-base font-semibold text-slate-700 group-hover/feature:text-navy transition-colors">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Elegant CTA */}
                  <div className="pt-4">
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 rounded-2xl font-bold text-base transition-all duration-500 group/btn"
                    >
                      <span className="flex items-center">
                        Learn More
                        <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
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
