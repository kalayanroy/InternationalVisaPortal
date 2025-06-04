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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white via-slate-50/50 to-white rounded-3xl overflow-hidden luxury-shadow hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-slate-100/50"
              >
                {/* Luxury layered background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-navy/5 opacity-40" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-navy/10 to-transparent rounded-full blur-2xl" />
                
                <div className="relative z-10 p-8">
                  {/* Premium Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      {/* Icon with luxury backdrop */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-navy/20 rounded-2xl blur-lg transform rotate-6" />
                      <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center ${service.color} luxury-shadow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <IconComponent className="h-7 w-7" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2">
                      <span className="text-xs font-bold text-gold bg-gradient-to-r from-gold/15 to-gold/5 px-4 py-2 rounded-full border border-gold/30 backdrop-blur-sm">
                        {service.tier}
                      </span>
                      {/* Luxury corner ornament */}
                      <div className="w-8 h-8 bg-gradient-to-br from-gold/20 to-navy/20 rounded-lg transform rotate-45 opacity-60" />
                    </div>
                  </div>

                  {/* Content with premium typography */}
                  <div className="space-y-6">
                    <div className="relative">
                      <h3 className="text-2xl font-playfair font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-500 leading-tight">
                        {service.title}
                      </h3>
                      {/* Underline accent */}
                      <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-navy rounded-full group-hover:w-20 transition-all duration-500" />
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed text-base font-medium">
                      {service.description}
                    </p>

                    {/* Elegant feature list */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-navy text-sm flex items-center uppercase tracking-wider">
                        <div className="w-3 h-3 bg-gradient-to-r from-gold to-navy rounded-full mr-3" />
                        Key Features
                      </h4>
                      <div className="space-y-3 pl-6 border-l-2 border-gradient-to-b from-gold/30 to-navy/30">
                        {service.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-sm group/item">
                            <div className="w-2 h-2 bg-gradient-to-r from-gold to-navy rounded-full mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                            <span className="font-semibold text-slate-700 group-hover/item:text-navy transition-colors">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Premium CTA */}
                    <div className="pt-6">
                      <Button
                        onClick={() => scrollToSection("contact")}
                        className="w-full bg-gradient-to-r from-navy via-navy to-slate-800 text-white hover:from-gold hover:via-gold/90 hover:to-amber-600 transition-all duration-700 py-4 rounded-2xl font-bold text-base luxury-shadow group/btn relative overflow-hidden"
                      >
                        {/* Button shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                        <span className="relative flex items-center justify-center">
                          Discover More
                          <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Premium border effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-gold/30 via-transparent to-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  maskImage: 'linear-gradient(white, white)',
                  WebkitMaskImage: 'linear-gradient(white, white)',
                  maskComposite: 'xor',
                  WebkitMaskComposite: 'xor'
                }} />
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
