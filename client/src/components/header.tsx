import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, LogIn, UserPlus } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Universities", id: "universities" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Success Stories", id: "testimonials" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white border-b border-gray-200 luxury-shadow"
          : "bg-transparent border-b border-white/20"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
              <GraduationCap
                className={`h-6 w-6 transition-colors duration-300 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              />
            </div>
            <div>
              <h1
                className={`text-2xl font-playfair font-bold cursor-pointer transition-colors duration-300 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
                onClick={() => scrollToSection("home")}
              >
                Prestige Global
              </h1>
              <p className="text-xs text-gold font-medium tracking-wide">
                EDUCATION CONSULTANCY
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-300 relative group ${
                    isScrolled
                      ? "text-black hover:text-navy"
                      : "text-white hover:text-gold"
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Student Login
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className={`border border-[#ffc105] transition-all duration-300 luxury-shadow ${
                isScrolled
                  ? "bg-[#ffc105] text-black"
                  : "bg-transparent text-[#ffc105] hover:bg-[#ffc105] hover:text-white"
              }`}
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Book Consultation
            </Button>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors duration-300 ${
                isScrolled ? "text-[#ffc105]" : "text-[#ffc105]"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div
              className={`px-2 pt-4 pb-6 space-y-2 shadow-lg transition-all duration-300 ${
                isScrolled
                  ? "bg-white border-t border-gray-200"
                  : "bg-white/95 backdrop-blur-lg border-t border-white/20"
              }`}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-4 py-3 text-base font-medium text-navy/80 hover:text-navy hover:bg-muted rounded-lg w-full text-left transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-navy text-navy hover:bg-navy hover:text-white"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Student Login
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-transparent border border-[#ffc105] text-[#ffc105] hover:bg-[#ffc105] hover:text-white transition-all duration-300"
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
