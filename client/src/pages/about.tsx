import Navigation from "@/components/navigation-fixed";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Users, 
  Globe, 
  Award, 
  Target,
  Heart,
  Lightbulb,
  Shield,
  TrendingUp
} from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Founder & CEO",
    experience: "15+ years",
    specialization: "International Education Strategy",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b6c5?w=300&h=300&fit=crop&crop=face&auto=format",
    bio: "Former university admissions director with extensive experience in global education partnerships."
  },
  {
    name: "Michael Chen",
    role: "Director of Visa Services",
    experience: "12+ years",
    specialization: "Immigration Law & Visa Processing",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&auto=format",
    bio: "Certified immigration consultant with exceptional visa approval success rates."
  },
  {
    name: "Dr. Priya Patel",
    role: "Academic Counselor",
    experience: "10+ years",
    specialization: "STEM Programs & Research",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face&auto=format",
    bio: "PhD in Engineering with deep knowledge of technical program requirements worldwide."
  },
  {
    name: "James Wilson",
    role: "Test Prep Coordinator",
    experience: "8+ years",
    specialization: "IELTS, TOEFL, GRE, GMAT",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format",
    bio: "Master trainer with proven track record of helping students achieve target scores."
  }
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do, ensuring exceptional outcomes for our students."
  },
  {
    icon: Heart,
    title: "Student-Centric",
    description: "Every decision we make is guided by what's best for our students' academic and personal growth."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest ethical standards and transparency in all our interactions and processes."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously evolve our services to provide cutting-edge solutions for modern education challenges."
  }
];

const milestones = [
  {
    year: "2008",
    title: "Company Founded",
    description: "Started with a vision to make international education accessible to all students"
  },
  {
    year: "2012",
    title: "1,000 Students Milestone",
    description: "Successfully placed our 1,000th student in a top international university"
  },
  {
    year: "2016",
    title: "Global Expansion",
    description: "Expanded operations to serve students across 25 countries"
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched comprehensive online consultation and application tracking platform"
  },
  {
    year: "2024",
    title: "10,000+ Success Stories",
    description: "Reached milestone of 10,000+ students successfully placed with 98% visa approval rate"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About StudyBridge
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Empowering students worldwide to achieve their international education dreams through expert guidance and unwavering support
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-lg text-slate-700 mb-6">
                To bridge the gap between ambitious students and world-class educational opportunities by providing 
                comprehensive, personalized guidance through every step of the international education journey.
              </p>
              <p className="text-slate-600">
                We believe that quality education should be accessible to every deserving student, regardless of their 
                background or geographical location. Our mission is to make this vision a reality through expert guidance, 
                innovative solutions, and unwavering commitment to student success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-navy/10 to-gold/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-slate-700">
                To be the world's most trusted partner in international education, known for our exceptional success rates, 
                personalized approach, and transformative impact on students' lives and careers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as an organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="p-4 bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-navy" />
                    </div>
                    <h3 className="font-bold text-navy mb-3">{value.title}</h3>
                    <p className="text-slate-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to helping you achieve your international education goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-navy mb-1">{member.name}</h3>
                  <div className="text-gold font-semibold mb-2">{member.role}</div>
                  <div className="text-sm text-slate-600 mb-2">{member.experience} Experience</div>
                  <div className="text-xs text-slate-500 mb-3">{member.specialization}</div>
                  <p className="text-sm text-slate-700">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Company Timeline */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Journey</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              15+ years of excellence in international education consulting
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-navy/20 transform -translate-x-1/2"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="font-bold text-gold text-lg mb-2">{milestone.year}</div>
                        <h3 className="font-bold text-navy mb-2">{milestone.title}</h3>
                        <p className="text-slate-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="hidden md:flex w-4 h-4 bg-navy rounded-full relative z-10 mx-4"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-slate-200">Proven track record of student success</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gold mb-2">10,000+</div>
              <div className="text-slate-200">Students Placed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">98%</div>
              <div className="text-slate-200">Visa Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">500+</div>
              <div className="text-slate-200">Partner Universities</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">50+</div>
              <div className="text-slate-200">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of successful students who trusted us with their international education dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button className="bg-gold hover:bg-gold/90 text-navy px-8 py-3">
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/success-stories">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-3">
                Read Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}