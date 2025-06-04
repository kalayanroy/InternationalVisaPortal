import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Globe } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(30, 41, 59, 0.7) 50%, rgba(255, 215, 0, 0.1) 100%), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-sm font-medium mb-8">
              <Award className="h-4 w-4 mr-2" />
              Premium Education Consultancy Since 2010
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
              Your Gateway to
              <span className="block text-gold">World-Class Education</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Unlock exclusive access to prestigious universities worldwide. Our expert consultants provide personalized guidance for your academic journey to success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-gold text-white px-8 py-4 text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 luxury-shadow group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("universities")}
                variant="outline"
                className="border-2 border-white/20 text-white px-8 py-4 text-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Explore Universities
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="h-6 w-6 text-gold mr-2" />
                  <div className="text-3xl font-playfair font-bold text-white">15,000+</div>
                </div>
                <div className="text-white/70 text-sm">Success Stories</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Award className="h-6 w-6 text-gold mr-2" />
                  <div className="text-3xl font-playfair font-bold text-white">99%</div>
                </div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Globe className="h-6 w-6 text-gold mr-2" />
                  <div className="text-3xl font-playfair font-bold text-white">40+</div>
                </div>
                <div className="text-white/70 text-sm">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Content - University Logos Grid */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="grid grid-cols-3 gap-6 opacity-90">
                {/* Top Row */}
                <div className="bg-white/10 backdrop-blur-sm luxury-border rounded-xl p-6 flex items-center justify-center h-24 hover:bg-white/20 transition-all">
                  <span className="text-white font-semibold text-sm">Harvard</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm luxury-border rounded-xl p-6 flex items-center justify-center h-24 hover:bg-white/20 transition-all">
                  <span className="text-white font-semibold text-sm">Oxford</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm luxury-border rounded-xl p-6 flex items-center justify-center h-24 hover:bg-white/20 transition-all">
                  <span className="text-white font-semibold text-sm">MIT</span>
                </div>
                
                {/* Middle Row */}
                <div className="bg-white/10 backdrop-blur-sm luxury-border rounded-xl p-6 flex items-center justify-center h-24 hover:bg-white/20 transition-all">
                  <span className="text-white font-semibold text-sm">Stanford</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm luxury-border rounded-xl p-6 flex items-center justify-center h-24 hover:bg-white/20 transition-all">
                  <span className="text-white font-semibold text-sm">Cambridge</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm luxury-border rounded-xl p-6 flex items-center justify-center h-24 hover:bg-white/20 transition-all">
                  <span className="text-white font-semibold text-sm">Yale</span>
                </div>
                
                {/* Bottom Row */}
                <div className="bg-white/10 backdrop-blur-sm luxury-border rounded-xl p-6 flex items-center justify-center h-24 hover:bg-white/20 transition-all">
                  <span className="text-white font-semibold text-sm">UBC</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm luxury-border rounded-xl p-6 flex items-center justify-center h-24 hover:bg-white/20 transition-all">
                  <span className="text-white font-semibold text-sm">Imperial</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm luxury-border rounded-xl p-6 flex items-center justify-center h-24 hover:bg-white/20 transition-all">
                  <span className="text-white font-semibold text-sm">NYU</span>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold rounded-full opacity-60 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
