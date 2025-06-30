import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import logo from "@/assets/college.png";

const navItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "countries", label: "Countries", path: "/countries" },
  { id: "services", label: "Services", path: "/services" },
  { id: "about", label: "About Us", path: "/about" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with real auth later

  const mockUser = {
    name: "Jane Doe",
    initials: "JD",
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("Logged out");
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 shadow backdrop-blur" : "bg-transparent"}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <span className="font-bold text-navy text-lg">StudyBridge</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className={`text-sm font-medium transition-colors duration-200 hover:text-gold ${location === item.path ? "text-gold font-semibold" : "text-navy"}`}
            >
              {item.label}
            </Link>
          ))}

          <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold text-sm px-4 py-2 rounded-md">
            Book Consultation
          </Button>

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0">
                  <Avatar>
                    <AvatarFallback className="bg-navy text-white">
                      {mockUser.initials}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="ml-1 h-4 w-4 text-navy" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button variant="outline" className="text-black border-navy">
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t px-4 py-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.id} href={item.path}>
                <a
                  onClick={closeMenu}
                  className={`text-base font-medium transition-colors duration-200 ${location === item.path ? "text-gold font-semibold" : "text-navy"}`}
                >
                  {item.label}
                </a>
              </Link>
            ))}

            <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold text-sm w-full">
              Book Consultation
            </Button>

            {isLoggedIn ? (
              <>
                <div className="flex items-center gap-3 mt-4">
                  <Avatar>
                    <AvatarFallback className="bg-navy text-white">
                      {mockUser.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{mockUser.name}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      closeMenu();
                      console.log("Go to dashboard");
                    }}
                  >
                    Dashboard
                  </Button>
                  <Button variant="outline" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <Link href="/login">
                <Button
                  variant="outline"
                  className="text-blacks border-navy w-full mt-4"
                  onClick={closeMenu}
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
