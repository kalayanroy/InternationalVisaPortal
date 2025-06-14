import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Menu, 
  X, 
  User, 
  Settings, 
  Bell, 
  LayoutDashboard, 
  LogOut,
  ChevronDown
} from 'lucide-react';

// Mock user data - in real app this would come from auth context
const mockUser = {
  name: "John Smith",
  email: "john.smith@example.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format"
};

// For demo purposes - in real app this would be managed by auth context
const isLoggedIn = true; // Change to false to test logged out state

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  // Determine active page for navigation highlighting
  const getPageFromPath = (path: string) => {
    if (path === '/') return 'home';
    if (path.includes('/country/usa')) return 'usa';
    if (path.includes('/country/uk')) return 'uk';
    if (path.includes('/country/canada')) return 'canada';
    if (path.includes('/country/australia')) return 'australia';
    return '';
  };

  const currentPage = getPageFromPath(location);

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logging out...');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-navy">EduConsult</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                currentPage === 'home' 
                  ? 'text-navy font-semibold' 
                  : 'text-slate-700 hover:text-navy'
              }`}
            >
              Home
            </Link>
            <Link
              href="/country/usa"
              className={`transition-colors ${
                currentPage === 'usa' 
                  ? 'text-navy font-semibold' 
                  : 'text-slate-700 hover:text-navy'
              }`}
            >
              USA
            </Link>
            <Link
              href="/country/uk"
              className={`transition-colors ${
                currentPage === 'uk' 
                  ? 'text-navy font-semibold' 
                  : 'text-slate-700 hover:text-navy'
              }`}
            >
              UK
            </Link>
            <Link
              href="/country/canada"
              className={`transition-colors ${
                currentPage === 'canada' 
                  ? 'text-navy font-semibold' 
                  : 'text-slate-700 hover:text-navy'
              }`}
            >
              Canada
            </Link>
            <Link
              href="/country/australia"
              className={`transition-colors ${
                currentPage === 'australia' 
                  ? 'text-navy font-semibold' 
                  : 'text-slate-700 hover:text-navy'
              }`}
            >
              Australia
            </Link>

            {/* User Authentication Section */}
            {isLoggedIn ? (
              /* Logged In User Dropdown */
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-slate-100">
                    <img
                      src={mockUser.avatar}
                      alt={mockUser.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-slate-700 font-medium">{mockUser.name}</span>
                    <ChevronDown className="h-4 w-4 text-slate-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-3 py-2 border-b">
                    <p className="text-sm font-medium text-slate-900">{mockUser.name}</p>
                    <p className="text-xs text-slate-500">{mockUser.email}</p>
                  </div>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="flex items-center w-full">
                      <LayoutDashboard className="h-4 w-4 mr-2" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/notifications" className="flex items-center w-full">
                      <Bell className="h-4 w-4 mr-2" />
                      Notifications
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="flex items-center w-full">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              /* Not Logged In - Show Get Consultation Button */
              <Button className="bg-gold hover:bg-gold/90 text-navy px-6 py-2 rounded-md font-medium">
                Get Consultation
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
              <Link
                href="/"
                className="block px-3 py-2 text-slate-700 hover:text-navy"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/country/usa"
                className="block px-3 py-2 text-slate-700 hover:text-navy"
                onClick={() => setIsMenuOpen(false)}
              >
                USA
              </Link>
              <Link
                href="/country/uk"
                className="block px-3 py-2 text-slate-700 hover:text-navy"
                onClick={() => setIsMenuOpen(false)}
              >
                UK
              </Link>
              <Link
                href="/country/canada"
                className="block px-3 py-2 text-slate-700 hover:text-navy"
                onClick={() => setIsMenuOpen(false)}
              >
                Canada
              </Link>
              <Link
                href="/country/australia"
                className="block px-3 py-2 text-slate-700 hover:text-navy"
                onClick={() => setIsMenuOpen(false)}
              >
                Australia
              </Link>

              {/* Mobile User Section */}
              {isLoggedIn ? (
                <div className="border-t border-slate-200 pt-3 mt-3">
                  <div className="flex items-center px-3 py-2 mb-2">
                    <img
                      src={mockUser.avatar}
                      alt={mockUser.name}
                      className="w-8 h-8 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium text-slate-900">{mockUser.name}</p>
                      <p className="text-xs text-slate-500">{mockUser.email}</p>
                    </div>
                  </div>
                  <Link
                    href="/dashboard"
                    className="flex items-center px-3 py-2 text-slate-700 hover:text-navy"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LayoutDashboard className="h-4 w-4 mr-3" />
                    Dashboard
                  </Link>
                  <Link
                    href="/notifications"
                    className="flex items-center px-3 py-2 text-slate-700 hover:text-navy"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Bell className="h-4 w-4 mr-3" />
                    Notifications
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center px-3 py-2 text-slate-700 hover:text-navy"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Settings className="h-4 w-4 mr-3" />
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full px-3 py-2 text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4 mr-3" />
                    Logout
                  </button>
                </div>
              ) : (
                <Button 
                  className="w-full mt-4 bg-gold hover:bg-gold/90 text-navy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Consultation
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}