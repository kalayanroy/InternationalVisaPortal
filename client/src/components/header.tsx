import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, User, LogOut, Settings } from "lucide-react";
import { useAuthState } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import websiteLogo from "@assets/logoForWebsite.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { user, isAuthenticated, logout } = useAuthState();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  // Check if we're on migration service page or english test book page
  const isMigrationPage = location === "/migration-service";
  const isEnglishTestBookPage = location === "/english-test-book";
  const isAUUniversityPage = location === "/australia-universities";
  const isFindCourseUndergraduatePage = location === "/courses/undergraduate";
  const isFindCoursePostgraduatePage = location === "/courses/postgraduate";
  const isFindCoursePhdPage = location === "/courses/phd";
  const isFindCourseDiplomaPage = location === "/courses/diploma";
  const isLoginPage = location === "/login";
  const isStudentApplicationPage = location === "/student-application";

  // Determine header background
  const getHeaderBg = () => {
    if (isMigrationPage) return "bg-[#06b6d4]";
    if (isEnglishTestBookPage) return "bg-[#e5e7eb]";
    if (isAUUniversityPage) return "bg-[#0891b2]";
    if (isScrolled) return "bg-white shadow-lg";
    if (isFindCourseUndergraduatePage) return "bg-[#2dd4bf]";
    if (isFindCoursePostgraduatePage) return "bg-[#2dd4bf]";
    if (isFindCoursePhdPage) return "bg-[#2dd4bf]";
    if (isFindCourseDiplomaPage) return "bg-[#2dd4bf]";
    if (isLoginPage) return "bg-[#0891b2]";
    if (isStudentApplicationPage) return "bg-[#0891b2]";
    return "bg-transparent";
  };

  // Determine text color
  const getTextColor = () => {
    if (isMigrationPage) return "text-white";
    if (isEnglishTestBookPage) return "text-black";
    if (isAUUniversityPage) return "text-white";
    if (isScrolled) return "text-navy";
    if (isFindCourseUndergraduatePage) return "text-white";
    if (isFindCoursePostgraduatePage) return "text-white";
    if (isFindCoursePhdPage) return "text-white";
    if (isFindCourseDiplomaPage) return "text-white";
    if (isLoginPage) return "text-white";
    if (isStudentApplicationPage) return "text-white";
    return "text-white";
  };

  // Determine button hover styles
  const getButtonHoverStyle = () => {
    if (isMigrationPage) return "hover:bg-black/10";
    if (isEnglishTestBookPage) return "hover:bg-black/10";
    if (isAUUniversityPage) return "hover:bg-black/10";
    if (isFindCourseUndergraduatePage) return "hover:bg-black/10";
    if (isFindCoursePostgraduatePage) return "hover:bg-black/10";
    if (isFindCoursePhdPage) return "hover:bg-black/10";
    if (isFindCourseDiplomaPage) return "hover:bg-black/10";
    if (isLoginPage) return "hover:bg-black/10";
    if (isScrolled) return "hover:bg-navy/10";
    if (isStudentApplicationPage) return "hover:bg-black/10";
    return "hover:bg-white/10";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderBg()}`}
    >
      <nav className="max-w-1xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <img
                src={websiteLogo}
                alt="EduVisa Global Logo"
                className="h-20 w-auto transition-all duration-300"
              />
              <span
                className={`text-lg font-bold transition-colors ${getTextColor()}`}
              >
                DTR Consultation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <nav className="flex items-center space-x-1">
              {/* 1. Offers in Australia */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`flex items-center space-x-1 font-medium transition-colors hover:scale-105 px-2 py-1 h-auto text-sm ${getTextColor()} hover:text-main ${getButtonHoverStyle()}`}
                  >
                    <span>Offers in Australia</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem>
                    <Link href="/migration-service" className="w-full">
                      Migration Service
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/english-test-book" className="w-full">
                      English Test Book
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* 2. Study Destination */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`flex items-center space-x-1 font-medium transition-colors hover:scale-105 px-2 py-1 h-auto text-sm ${getTextColor()} hover:text-main ${getButtonHoverStyle()}`}
                  >
                    <span>Study Destination</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem>
                    <Link href="/australia-universities" className="w-full">
                      Australia
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/uk-university" className="w-full">
                      UK
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/usa-university" className="w-full">
                      USA
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Link href="/canada-universities" className="w-full">
                      Canada
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Link href="/ireland-universities" className="w-full">
                      Ireland
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/universities" className="w-full">
                      View All Countries
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* 3. Find Course */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`flex items-center space-x-1 font-medium transition-colors hover:scale-105 px-2 py-1 h-auto text-sm ${getTextColor()} hover:text-main ${getButtonHoverStyle()}`}
                  >
                    <span>Find Course</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem>
                    <Link href="/courses/undergraduate" className="w-full">
                      Undergraduate
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/courses/postgraduate" className="w-full">
                      Postgraduate
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/courses/phd" className="w-full">
                      PhD
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/courses/diploma" className="w-full">
                      Diploma
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* 4. Our Services */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`flex items-center space-x-1 font-medium transition-colors hover:scale-105 px-2 py-1 h-auto text-sm ${getTextColor()} hover:text-main ${getButtonHoverStyle()}`}
                  >
                    <span>Our Services</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem>
                    <Link href="/consultation" className="w-full">
                      Book Counselling Session
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/english-test" className="w-full">
                      English Test
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/insurance" className="w-full">
                      Insurance
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="relative">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full text-left flex items-center justify-between">
                        Visa Services
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-48" side="right">
                        <DropdownMenuItem>
                          <Link href="/visa/student" className="w-full">
                            Student Visa
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/visa/182" className="w-full">
                            182 Visa
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/visa/186" className="w-full">
                            186 Visa
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            href="/visa/student-extension"
                            className="w-full"
                          >
                            Student Visa Extension
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/e-ticketing" className="w-full">
                      E-Ticketing
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="relative">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full text-left flex items-center justify-between">
                        Migration Service
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-48" side="right">
                        <DropdownMenuItem>
                          <Link href="/migration/skilled" className="w-full">
                            Skilled Migration
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/migration/family" className="w-full">
                            Family Migration
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* 5. Apply Now */}
              <Link
                href="/student-application"
                className={`font-medium transition-colors hover:scale-105 px-2 py-1 text-sm ${getTextColor()} hover:text-main ${location === "/student-application" ? "border-b-2 border-main" : ""}`}
              >
                Apply Now
              </Link>

              {/* 6. About Us */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`flex items-center space-x-1 font-medium transition-colors hover:scale-105 px-2 py-1 h-auto text-sm ${getTextColor()} hover:text-main ${getButtonHoverStyle()}`}
                  >
                    <span>About Us</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem>
                    <Link href="/contact" className="w-full">
                      Contact Us
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/our-office" className="w-full">
                      Our Office
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/our-teams" className="w-full">
                      Our Teams
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/faqs" className="w-full">
                      FAQs
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/resources" className="w-full">
                      Resources
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/events" className="w-full">
                      Events
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`flex items-center space-x-2 ${
                      isScrolled
                        ? "text-navy hover:text-main hover:bg-navy/10"
                        : "text-white hover:text-main hover:bg-white/10"
                    }`}
                  >
                    <User className="h-4 w-4" />
                    <span>{user?.firstName || user?.username}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  {user?.role === "admin" && (
                    <DropdownMenuItem>
                      <Link
                        href="/admin-dashboard"
                        className="flex items-center w-full"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Admin Dashboard
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-red-600"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-4">
                {/*<Link href="/consultation">
                  <Button
                    className={`font-semibold px-6 py-2 rounded-lg transition-all duration-300 ${
                      isScrolled
                        ? "bg-main text-navy hover:bg-main/90 hover:scale-105"
                        : "bg-main text-navy hover:bg-main/90 hover:scale-105"
                    }`}
                  >
                    Book Consultation
                  </Button>
                </Link>*/}
                <Link href="/login">
                  <Button
                    variant="outline"
                    className={`border-2 font-semibold px-6 py-2 rounded-lg transition-all duration-300 ${
                      isScrolled
                        ? "border-navy text-black hover:bg-navy hover:text-white"
                        : "border-white text-black hover:bg-white hover:text-navy"
                    }`}
                  >
                    Login
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? "text-navy" : "text-white"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
              {/* Offers in Australia */}
              <div className="px-3 py-2">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Offers in Australia
                </span>
                <div className="mt-1 space-y-1">
                  <Link
                    href="/migration-service"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                  >
                    Migration Service
                  </Link>

                  <Link
                    href="/english-test-book"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    English Test Book
                  </Link>
                </div>
              </div>

              {/* Study Destination */}
              <div className="px-3 py-2">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Study Destination
                </span>
                <div className="mt-1 space-y-1">
                  <Link
                    href="/usa-universities"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    USA
                  </Link>
                  <Link
                    href="/uk-universities"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    United Kingdom
                  </Link>
                  <Link
                    href="/canada-universities"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Canada
                  </Link>
                  <Link
                    href="/australia-universities"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Australia
                  </Link>
                  <Link
                    href="/germany-universities"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Germany
                  </Link>
                  <Link
                    href="/universities"
                    className="block px-3 py-2 text-main font-medium text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All Countries
                  </Link>
                </div>
              </div>

              {/* Find Course */}
              <div className="px-3 py-2">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Find Course
                </span>
                <div className="mt-1 space-y-1">
                  <Link
                    href="/courses/undergraduate"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Undergraduate
                  </Link>
                  <Link
                    href="/courses/postgraduate"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Postgraduate
                  </Link>
                  <Link
                    href="/courses/phd"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    PhD
                  </Link>
                  <Link
                    href="/courses/diploma"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Diploma
                  </Link>
                </div>
              </div>

              {/* Our Services */}
              <div className="px-3 py-2">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Our Services
                </span>
                <div className="mt-1 space-y-1">
                  <Link
                    href="/consultation"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Counselling Session
                  </Link>
                  <Link
                    href="/english-test"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    English Test
                  </Link>
                  <Link
                    href="/insurance"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Insurance
                  </Link>
                  <div className="px-3 py-1">
                    <span className="text-xs font-medium text-gray-400">
                      Visa Services
                    </span>
                    <div className="ml-2 space-y-1">
                      <Link
                        href="/visa/student"
                        className="block px-2 py-1 text-navy hover:text-main text-xs"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Student Visa
                      </Link>
                      <Link
                        href="/visa/182"
                        className="block px-2 py-1 text-navy hover:text-main text-xs"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        182 Visa
                      </Link>
                      <Link
                        href="/visa/186"
                        className="block px-2 py-1 text-navy hover:text-main text-xs"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        186 Visa
                      </Link>
                      <Link
                        href="/visa/student-extension"
                        className="block px-2 py-1 text-navy hover:text-main text-xs"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Student Visa Extension
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="/e-ticketing"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    E-Ticketing
                  </Link>
                  <div className="px-3 py-1">
                    <span className="text-xs font-medium text-gray-400">
                      Migration Service
                    </span>
                    <div className="ml-2 space-y-1">
                      <Link
                        href="/migration/skilled"
                        className="block px-2 py-1 text-navy hover:text-main text-xs"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Skilled Migration
                      </Link>
                      <Link
                        href="/migration/family"
                        className="block px-2 py-1 text-navy hover:text-main text-xs"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Family Migration
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apply Now */}
              <Link
                href="/student-application"
                className="block px-3 py-2 text-main font-semibold hover:bg-main/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </Link>

              {/* About Us */}
              <div className="px-3 py-2">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  About Us
                </span>
                <div className="mt-1 space-y-1">
                  <Link
                    href="/contact"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/our-office"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Office
                  </Link>
                  <Link
                    href="/our-teams"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Teams
                  </Link>
                  <Link
                    href="/faqs"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/resources"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Resources
                  </Link>
                  <Link
                    href="/events"
                    className="block px-3 py-2 text-navy hover:text-main text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Events
                  </Link>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 pb-3">
                {isAuthenticated ? (
                  <div className="flex items-center justify-between px-3">
                    <span className="text-navy font-medium">
                      {user?.firstName || user?.username}
                    </span>
                    <div className="flex items-center space-x-2">
                      {user?.role === "admin" && (
                        <Link href="/admin-dashboard">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-navy"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Settings className="h-4 w-4 mr-1" />
                            Admin
                          </Button>
                        </Link>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={handleLogout}
                      >
                        <LogOut className="h-4 w-4 mr-1" />
                        Logout
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3 px-3">
                    {/*<Link href="/consultation">
                      <Button
                        className="w-full bg-main text-navy hover:bg-main/90"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Book Consultation
                      </Button>
                    </Link>*/}
                    <Link href="/login">
                      <Button
                        variant="outline"
                        className="w-full border-navy text-navy hover:bg-navy hover:text-white"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Login
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
