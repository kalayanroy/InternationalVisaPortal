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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <span
                className={`text-2xl font-bold transition-colors ${
                  isScrolled ? "text-navy" : "text-white"
                }`}
              >
                EduVisa Global
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link
                href="/"
                className={`font-medium transition-colors hover:scale-105 ${
                  isScrolled
                    ? "text-navy hover:text-gold"
                    : "text-white hover:text-gold"
                } ${location === "/" ? "border-b-2 border-gold" : ""}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`font-medium transition-colors hover:scale-105 ${
                  isScrolled
                    ? "text-navy hover:text-gold"
                    : "text-white hover:text-gold"
                } ${location === "/about" ? "border-b-2 border-gold" : ""}`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`font-medium transition-colors hover:scale-105 ${
                  isScrolled
                    ? "text-navy hover:text-gold"
                    : "text-white hover:text-gold"
                } ${location === "/services" ? "border-b-2 border-gold" : ""}`}
              >
                Services
              </Link>
              <Link
                href="/universities"
                className={`font-medium transition-colors hover:scale-105 ${
                  isScrolled
                    ? "text-navy hover:text-gold"
                    : "text-white hover:text-gold"
                } ${location === "/universities" ? "border-b-2 border-gold" : ""}`}
              >
                Universities
              </Link>
              <Link
                href="/success-stories"
                className={`font-medium transition-colors hover:scale-105 ${
                  isScrolled
                    ? "text-navy hover:text-gold"
                    : "text-white hover:text-gold"
                } ${location === "/success-stories" ? "border-b-2 border-gold" : ""}`}
              >
                Success Stories
              </Link>
            </nav>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`flex items-center space-x-2 ${
                      isScrolled
                        ? "text-navy hover:text-gold hover:bg-navy/10"
                        : "text-white hover:text-gold hover:bg-white/10"
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
                <Link href="/consultation">
                  <Button
                    className={`font-semibold px-6 py-2 rounded-lg transition-all duration-300 ${
                      isScrolled
                        ? "bg-gold text-navy hover:bg-gold/90 hover:scale-105"
                        : "bg-gold text-navy hover:bg-gold/90 hover:scale-105"
                    }`}
                  >
                    Book Consultation
                  </Button>
                </Link>
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
          <div className="md:hidden">
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
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-navy hover:text-gold font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-navy hover:text-gold font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-navy hover:text-gold font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/universities"
                className="block px-3 py-2 text-navy hover:text-gold font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Universities
              </Link>
              <Link
                href="/success-stories"
                className="block px-3 py-2 text-navy hover:text-gold font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </Link>
            </div>

            <div className="border-t border-gray-200 pt-4 pb-3">
              {isAuthenticated ? (
                <div className="flex items-center justify-between px-3">
                  <span className="text-navy font-medium">
                    {user?.firstName || user?.username}
                  </span>
                  <div className="flex items-center space-x-2">
                    {user?.role === "admin" && (
                      <Link href="/admin">
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
                  <Link href="/consultation">
                    <Button
                      className="w-full bg-gold text-navy hover:bg-gold/90"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Book Consultation
                    </Button>
                  </Link>
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
        )}
      </nav>
    </header>
  );
}
