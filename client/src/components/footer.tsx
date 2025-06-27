import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">EduVisa Global</h3>
            <p className="text-gray-300 mb-6">
              Your trusted partner for international education visa services with over a decade of expertise and thousands of success stories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection("testimonials")} className="hover:text-white transition-colors">Success Stories</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Student Visa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Document Preparation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interview Coaching</a></li>
              <li><a href="#" className="hover:text-white transition-colors">University Selection</a></li>
              <li><Link href="/student-application" className="hover:text-white transition-colors text-gold font-semibold">Apply Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <span className="mr-3 text-primary">📞</span>
                <span>1800-123-4567</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-primary">✉️</span>
                <span>info@eduvisaglobal.com</span>
              </div>
              <div className="flex items-start">
                <span className="mr-3 text-primary mt-1">📍</span>
                <span>Connaught Place, New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 EduVisa Global. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
