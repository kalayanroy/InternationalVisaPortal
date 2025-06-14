import Navigation from "@/components/navigation-fixed";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
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
  Plane
} from "lucide-react";

const services = [
  {
    id: "university-selection",
    title: "University Selection",
    description: "Expert guidance to find the perfect university match based on your academic profile, career goals, and preferences.",
    icon: GraduationCap,
    features: [
      "Personalized university recommendations",
      "Course comparison and analysis", 
      "Admission requirements assessment",
      "Scholarship opportunity identification"
    ],
    pricing: "Free with consultation"
  },
  {
    id: "application-assistance",
    title: "Application Assistance",
    description: "Complete support through the university application process to maximize your chances of acceptance.",
    icon: FileText,
    features: [
      "Application form completion",
      "Statement of purpose writing",
      "Letter of recommendation guidance",
      "Portfolio development support"
    ],
    pricing: "Starting from $299"
  },
  {
    id: "visa-processing",
    title: "Visa Processing",
    description: "End-to-end visa application support with 98% success rate and expert guidance through complex requirements.",
    icon: Shield,
    features: [
      "Complete visa documentation",
      "Interview preparation",
      "Application tracking",
      "Embassy liaison support"
    ],
    pricing: "Starting from $499"
  },
  {
    id: "test-preparation",
    title: "Test Preparation",
    description: "Comprehensive preparation for IELTS, TOEFL, GRE, GMAT, and other standardized tests.",
    icon: BookOpen,
    features: [
      "One-on-one coaching sessions",
      "Practice tests and materials",
      "Score improvement guarantee",
      "Flexible scheduling options"
    ],
    pricing: "Starting from $199"
  },
  {
    id: "scholarship-guidance",
    title: "Scholarship Guidance",
    description: "Identify and apply for scholarships, grants, and financial aid opportunities to reduce education costs.",
    icon: Award,
    features: [
      "Scholarship database access",
      "Application strategy planning",
      "Essay writing assistance",
      "Merit scholarship optimization"
    ],
    pricing: "Starting from $149"
  },
  {
    id: "pre-departure",
    title: "Pre-Departure Support",
    description: "Essential preparation for your journey abroad including accommodation, travel, and cultural orientation.",
    icon: Plane,
    features: [
      "Accommodation arrangements",
      "Travel planning assistance",
      "Cultural orientation sessions",
      "Airport pickup coordination"
    ],
    pricing: "Starting from $99"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "Free assessment of your academic profile and career aspirations"
  },
  {
    step: 2,
    title: "University Selection", 
    description: "Personalized recommendations based on your preferences and goals"
  },
  {
    step: 3,
    title: "Application Support",
    description: "Complete assistance with applications and documentation"
  },
  {
    step: 4,
    title: "Visa Processing",
    description: "Expert guidance through visa application and approval"
  },
  {
    step: 5,
    title: "Pre-Departure",
    description: "Final preparations for your international education journey"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Comprehensive support for your international education journey from university selection to visa approval
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Complete Educational Solutions</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From initial consultation to successful visa approval, we provide end-to-end support for your study abroad dreams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-navy/10 rounded-lg mr-4">
                        <IconComponent className="h-6 w-6 text-navy" />
                      </div>
                      <h3 className="text-xl font-bold text-navy">{service.title}</h3>
                    </div>
                    
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-600">Starting from</div>
                        <div className="font-semibold text-navy">{service.pricing}</div>
                      </div>
                      <Button className="bg-gold hover:bg-gold/90 text-navy">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
              A streamlined 5-step process to ensure your success in international education
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
            <h2 className="text-3xl font-bold text-navy mb-4">Why Choose StudyBridge?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Trusted by thousands of students for exceptional service and guaranteed results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4 bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-navy" />
              </div>
              <h3 className="font-bold text-navy mb-2">98% Success Rate</h3>
              <p className="text-slate-600 text-sm">Highest visa approval rate in the industry</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-navy" />
              </div>
              <h3 className="font-bold text-navy mb-2">10,000+ Students</h3>
              <p className="text-slate-600 text-sm">Successfully placed in top universities</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-navy" />
              </div>
              <h3 className="font-bold text-navy mb-2">50+ Countries</h3>
              <p className="text-slate-600 text-sm">Global network of partner institutions</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-navy" />
              </div>
              <h3 className="font-bold text-navy mb-2">15+ Years</h3>
              <p className="text-slate-600 text-sm">Experience in international education</p>
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
            Book a free consultation with our expert counselors and take the first step towards your international education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button className="bg-gold hover:bg-gold/90 text-navy px-8 py-3">
                Book Free Consultation
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-8 py-3">
              Download Service Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}