import Header from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Crown,
  FileCheck,
  ArrowRight,
  Sparkles,
  GraduationCap,
  FileText,
  MapPin,
  Users,
  CheckCircle,
  Clock,
  Star,
  Shield,
  Globe,
  BookOpen,
  Award,
  Plane,
} from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Premium University Selection",
    description:
      "Personalized guidance to prestigious institutions with our exclusive partnerships and insider knowledge of admission requirements.",
    tier: "Signature Service",
    color: "bg-gold/10 text-gold",
    highlights: [
      "Ivy League Access",
      "Merit Scholarships",
      "Priority Applications",
    ],
  },
  {
    icon: FileCheck,
    title: "Elite Application Support",
    description:
      "Expert crafting of compelling applications, essays, and documentation that showcase your unique potential to admissions committees.",
    tier: "Premium Service",
    color: "bg-navy/10 text-navy",
    highlights: ["Personal Statement", "LOR Strategy", "Portfolio Review"],
  },
  {
    icon: Users,
    title: "Executive Mentorship",
    description:
      "One-on-one guidance from education consultants with proven track records at top-tier universities worldwide.",
    tier: "Exclusive Service",
    color: "bg-secondary/10 text-secondary",
    highlights: ["Former Admissions", "Industry Experts", "Dedicated Support"],
  },
  {
    icon: BookOpen,
    title: "Academic Pathway Planning",
    description:
      "Strategic academic roadmapping aligned with your career aspirations and global opportunities in your chosen field.",
    tier: "Strategic Service",
    color: "bg-purple-100 text-purple-600",
    highlights: ["Career Alignment", "Skill Mapping", "Future Planning"],
  },
  {
    icon: Plane,
    title: "Global Visa Excellence",
    description:
      "Comprehensive visa assistance with our 99% success rate, ensuring smooth transitions to your dream destination.",
    tier: "Essential Service",
    color: "bg-green-100 text-green-600",
    highlights: ["99% Success Rate", "Fast Processing", "Interview Prep"],
  },
  {
    icon: Shield,
    title: "Concierge Support",
    description:
      "End-to-end support including accommodation, banking, insurance, and orientation for a seamless transition abroad.",
    tier: "Luxury Service",
    color: "bg-red-100 text-red-600",
    highlights: ["24/7 Support", "Local Assistance", "Emergency Help"],
  },
];

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "Free assessment of your academic profile and career aspirations",
  },
  {
    step: 2,
    title: "University Selection",
    description:
      "Personalized recommendations based on your preferences and goals",
  },
  {
    step: 3,
    title: "Application Support",
    description: "Complete assistance with applications and documentation",
  },
  {
    step: 4,
    title: "Visa Processing",
    description: "Expert guidance through visa application and approval",
  },
  {
    step: 5,
    title: "Pre-Departure",
    description: "Final preparations for your international education journey",
  },
];
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Comprehensive support for your international education journey from
            university selection to visa approval
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Complete Educational Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From initial consultation to successful visa approval, we provide
              end-to-end support for your study abroad dreams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <div
                  key={index}
                  className="
                    group relative 
                    bg-gradient-to-br from-white via-slate-50 to-white 
                    rounded-2xl p-6 
                    border border-transparent 
                    shadow-[0_10px_30px_rgba(0,0,0,0.05)] 
                    hover:shadow-[0_15px_40px_rgba(218,165,32,0.2)] 
                    hover:border-gold/20 
                    transition-all duration-500 
                    transform hover:-translate-y-2
                  "
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${service.color} shadow-md group-hover:scale-110 transition-all duration-300`}
                      >
                        <IconComponent className="h-7 w-7" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-navy rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20 uppercase">
                      {service.tier}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 mb-6">
                    <h3 className="text-xl font-playfair font-bold text-navy group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      Expert guidance for {service.title.toLowerCase()} with
                      personalized support.
                    </p>

                    {/* Compact features */}
                    <div className="space-y-2">
                      {service.highlights.slice(0, 3).map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-xs text-slate-700"
                        >
                          <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                          <span className="font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-navy text-white hover:bg-gold hover:text-navy py-3 rounded-xl font-semibold text-sm transition-all duration-300 group/btn"
                  >
                    <span className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/20 rounded-2xl transition-all duration-300 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Process</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A streamlined 5-step process to ensure your success in
              international education
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-navy/20 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 relative z-10">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-navy mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Why Choose StudyBridge?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Trusted by thousands of students for exceptional service and
              guaranteed results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4 bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-navy" />
              </div>
              <h3 className="font-bold text-navy mb-2">98% Success Rate</h3>
              <p className="text-slate-600 text-sm">
                Highest visa approval rate in the industry
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-navy" />
              </div>
              <h3 className="font-bold text-navy mb-2">10,000+ Students</h3>
              <p className="text-slate-600 text-sm">
                Successfully placed in top universities
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-navy" />
              </div>
              <h3 className="font-bold text-navy mb-2">50+ Countries</h3>
              <p className="text-slate-600 text-sm">
                Global network of partner institutions
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-navy" />
              </div>
              <h3 className="font-bold text-navy mb-2">15+ Years</h3>
              <p className="text-slate-600 text-sm">
                Experience in international education
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Book a free consultation with our expert counselors and take the
            first step towards your international education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button className="bg-gold hover:bg-gold/90 text-navy px-8 py-3">
                Book Free Consultation
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy px-8 py-3"
            >
              Download Service Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
