import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, Clock, MapPin, GraduationCap, DollarSign, X, Download, MessageCircle, Award, BookOpen, FileText } from "lucide-react";
import Header from "@/components/header";

interface Course {
  id: string;
  name: string;
  university: string;
  country: string;
  level: string;
  field: string;
  duration: string;
  fee: string;
  currency: string;
  description: string;
  ranking: string;
  logo: string;
  about: string;
  requirements: string[];
  scholarships: Array<{
    name: string;
    amount: string;
  }>;
}

const sampleCourses: Course[] = [
  {
    id: "1",
    name: "Master of Business Administration",
    university: "University of Melbourne",
    country: "Australia",
    level: "Master",
    field: "Business",
    duration: "2 years",
    fee: "45,000",
    currency: "AUD",
    description: "Comprehensive MBA program focusing on leadership, strategy, and global business practices.",
    ranking: "#1 in Australia",
    logo: "🎓",
    about: "The Melbourne Business School MBA is designed for ambitious professionals seeking to accelerate their careers and make a meaningful impact in the business world.",
    requirements: ["Bachelor's degree", "GMAT 650+", "Work experience 2+ years"],
    scholarships: [
      { name: "Merit Scholarship", amount: "Up to $20,000" },
      { name: "International Excellence Award", amount: "$15,000" }
    ]
  },
  {
    id: "2",
    name: "Master of Science in Computer Science",
    university: "Stanford University",
    country: "USA",
    level: "Master",
    field: "Computer Science",
    duration: "2 years",
    fee: "58,000",
    currency: "USD",
    description: "Advanced computer science program with specializations in AI, machine learning, and software engineering.",
    ranking: "#1 in USA",
    logo: "🖥️",
    about: "Advanced computer science program with specializations in AI, machine learning, and software engineering.",
    requirements: ["Bachelor's in CS or related field", "GRE 320+", "Programming experience"],
    scholarships: [
      { name: "Stanford Fellowship", amount: "Full tuition" },
      { name: "Merit Award", amount: "$25,000" }
    ]
  },
  {
    id: "3",
    name: "Bachelor of Engineering",
    university: "University of Cambridge",
    country: "UK",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years",
    fee: "35,000",
    currency: "GBP",
    description: "Prestigious engineering program with focus on innovation and practical application.",
    ranking: "#2 in UK",
    logo: "⚙️",
    about: "Prestigious engineering program with focus on innovation and practical application.",
    requirements: ["A-levels or equivalent", "Mathematics A*", "Physics A"],
    scholarships: [
      { name: "Cambridge Scholarship", amount: "£20,000" },
      { name: "Engineering Excellence", amount: "£10,000" }
    ]
  },
  {
    id: "4",
    name: "Bachelor of Business Administration",
    university: "University of Toronto",
    country: "Canada",
    level: "Bachelor",
    field: "Business",
    duration: "4 years",
    fee: "28,000",
    currency: "CAD",
    description: "Comprehensive business program with emphasis on entrepreneurship and global markets.",
    ranking: "#1 in Canada",
    logo: "💼",
    about: "Comprehensive business program with emphasis on entrepreneurship and global markets.",
    requirements: ["High school diploma", "SAT 1200+", "English proficiency"],
    scholarships: [
      { name: "International Scholarship", amount: "CAD $15,000" },
      { name: "Merit Award", amount: "CAD $8,000" }
    ]
  },
  {
    id: "5",
    name: "Master of Data Science",
    university: "Technical University of Munich",
    country: "Germany",
    level: "Master",
    field: "Data Science",
    duration: "2 years",
    fee: "15,000",
    currency: "EUR",
    description: "Advanced data science program with focus on machine learning and big data analytics.",
    ranking: "#1 in Germany",
    logo: "📊",
    about: "Advanced data science program with focus on machine learning and big data analytics.",
    requirements: ["Bachelor's in CS/Math", "GRE required", "Programming skills"],
    scholarships: [
      { name: "DAAD Scholarship", amount: "€12,000" },
      { name: "Excellence Grant", amount: "€5,000" }
    ]
  },
  {
    id: "6",
    name: "Bachelor of Computer Science",
    university: "National University of Singapore",
    country: "Singapore",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years",
    fee: "25,000",
    currency: "SGD",
    description: "Comprehensive computer science program with emphasis on software development and AI.",
    ranking: "#1 in Singapore",
    logo: "💻",
    about: "Comprehensive computer science program with emphasis on software development and AI.",
    requirements: ["A-levels", "Mathematics H2", "Strong academic record"],
    scholarships: [
      { name: "NUS Scholarship", amount: "SGD $20,000" },
      { name: "Tech Excellence", amount: "SGD $12,000" }
    ]
  },
  {
    id: "7",
    name: "Master of Public Health",
    university: "Harvard University",
    country: "USA",
    level: "Master",
    field: "Health Sciences",
    duration: "2 years",
    fee: "65,000",
    currency: "USD",
    description: "Leading public health program focusing on global health challenges and policy.",
    ranking: "#1 in USA",
    logo: "🏥",
    about: "Leading public health program focusing on global health challenges and policy.",
    requirements: ["Bachelor's degree", "GRE 310+", "Health-related experience"],
    scholarships: [
      { name: "Harvard Fellowship", amount: "Full tuition" },
      { name: "Public Health Award", amount: "$30,000" }
    ]
  },
  {
    id: "8",
    name: "Bachelor of Arts in Psychology",
    university: "University of Oxford",
    country: "UK",
    level: "Bachelor",
    field: "Psychology",
    duration: "3 years",
    fee: "32,000",
    currency: "GBP",
    description: "Comprehensive psychology program with focus on research and clinical applications.",
    ranking: "#1 in UK",
    logo: "🧠",
    about: "Comprehensive psychology program with focus on research and clinical applications.",
    requirements: ["A-levels AAA", "Psychology A-level", "Interview required"],
    scholarships: [
      { name: "Oxford Scholarship", amount: "£25,000" },
      { name: "Psychology Excellence", amount: "£15,000" }
    ]
  }
];

const countries = ["All Countries", "Australia", "USA", "UK", "Canada", "Germany", "Singapore"];
const levels = ["All Levels", "Bachelor", "Master", "PhD", "Diploma"];
const fields = ["All Fields", "Business", "Computer Science", "Engineering", "Data Science", "Health Sciences", "Psychology"];

export default function FindCourse() {
  const [location] = useLocation();
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(sampleCourses);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    country: "All Countries",
    level: "All Levels",
    field: "All Fields",
    courseName: ""
  });

  // Check if we're filtering by a specific level from the navigation
  useEffect(() => {
    const pathSegments = location.split('/');
    if (pathSegments.length > 2) {
      const levelFromPath = pathSegments[2];
      if (levelFromPath === 'undergraduate') {
        setFilters(prev => ({ ...prev, level: "Bachelor" }));
      } else if (levelFromPath === 'postgraduate') {
        setFilters(prev => ({ ...prev, level: "Master" }));
      } else if (levelFromPath === 'phd') {
        setFilters(prev => ({ ...prev, level: "PhD" }));
      } else if (levelFromPath === 'diploma') {
        setFilters(prev => ({ ...prev, level: "Diploma" }));
      }
    }
  }, [location]);

  useEffect(() => {
    let filtered = sampleCourses;

    if (filters.country !== "All Countries") {
      filtered = filtered.filter(course => course.country === filters.country);
    }

    if (filters.level !== "All Levels") {
      filtered = filtered.filter(course => course.level === filters.level);
    }

    if (filters.field !== "All Fields") {
      filtered = filtered.filter(course => course.field === filters.field);
    }

    if (filters.courseName) {
      filtered = filtered.filter(course =>
        course.name.toLowerCase().includes(filters.courseName.toLowerCase()) ||
        course.university.toLowerCase().includes(filters.courseName.toLowerCase())
      );
    }

    setFilteredCourses(filtered);
  }, [filters]);

  const handleSearch = () => {
    // Filter is already applied through useEffect
    console.log("Searching with filters:", filters);
  };

  const handleViewDetails = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-navy to-main py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Find Your Perfect Course
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Discover thousands of courses from top universities worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Advanced Search Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8 -mt-8 relative z-10">
            <div className="flex items-center justify-center mb-8">
              <Search className="h-6 w-6 text-main mr-2" />
              <h2 className="text-2xl font-bold text-navy">Advanced Course Search</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <Select value={filters.country} onValueChange={(value) => setFilters({...filters, country: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Countries" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Level of Study
                </label>
                <Select value={filters.level} onValueChange={(value) => setFilters({...filters, level: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Field of Study
                </label>
                <Select value={filters.field} onValueChange={(value) => setFilters({...filters, field: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Fields" />
                  </SelectTrigger>
                  <SelectContent>
                    {fields.map((field) => (
                      <SelectItem key={field} value={field}>
                        {field}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Name
                </label>
                <Input
                  placeholder="e.g., Master Business"
                  value={filters.courseName}
                  onChange={(e) => setFilters({...filters, courseName: e.target.value})}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={handleSearch}
                className="bg-main hover:bg-main/90 text-navy px-8 py-3 text-lg font-semibold rounded-lg"
              >
                <Search className="h-5 w-5 mr-2" />
                Search Courses
              </Button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-navy mb-2">
              Search Results ({filteredCourses.length} courses found)
            </h3>
            <p className="text-gray-600">
              {filters.level !== "All Levels" && `Showing ${filters.level} courses`}
              {filters.country !== "All Countries" && ` in ${filters.country}`}
              {filters.field !== "All Fields" && ` for ${filters.field}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-main">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{course.logo}</div>
                      <div>
                        <CardTitle className="text-lg font-bold text-navy leading-tight">
                          {course.name}
                        </CardTitle>
                        <CardDescription className="text-main font-semibold">
                          {course.university}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-main border-main">
                      {course.level}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-main" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2 text-main" />
                      {course.fee} {course.currency} per year
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-main" />
                      {course.country}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-main/10 text-main">
                      {course.ranking}
                    </Badge>
                    <Button
                      size="sm"
                      className="bg-main hover:bg-main/90 text-navy"
                      onClick={() => handleViewDetails(course)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <GraduationCap className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No courses found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search filters to find more courses
              </p>
            </div>
          )}
        </div>

        {/* Course Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedCourse && (
              <>
                <DialogHeader className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{selectedCourse.logo}</div>
                      <div>
                        <DialogTitle className="text-xl font-bold text-navy">
                          {selectedCourse.name}
                        </DialogTitle>
                        <p className="text-main font-semibold">
                          {selectedCourse.university}
                        </p>
                        <Badge variant="secondary" className="bg-main/10 text-main mt-1">
                          {selectedCourse.ranking}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  {/* About the Program */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <BookOpen className="h-5 w-5 text-main" />
                      <h3 className="text-lg font-semibold text-navy">About the Program</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedCourse.about}
                    </p>
                  </div>

                  {/* Fees & Duration and Requirements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Fees & Duration */}
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <DollarSign className="h-5 w-5 text-yellow-600" />
                        <h4 className="font-semibold text-gray-800">Fees & Duration</h4>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-600">Tuition: </span>
                          <span className="font-medium">
                            {selectedCourse.fee} {selectedCourse.currency} per year
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Duration: </span>
                          <span className="font-medium">{selectedCourse.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <GraduationCap className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-gray-800">Requirements</h4>
                      </div>
                      <ul className="space-y-1 text-sm">
                        {selectedCourse.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-green-600 mt-1">•</span>
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Available Scholarships */}
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Award className="h-5 w-5 text-purple-600" />
                      <h4 className="font-semibold text-gray-800">Available Scholarships</h4>
                    </div>
                    <div className="space-y-2">
                      {selectedCourse.scholarships.map((scholarship, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">{scholarship.name}</span>
                          <span className="font-medium text-purple-700">{scholarship.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-4">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Explain How
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Download Brochure
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                      <Award className="h-4 w-4 mr-2" />
                      Scholarships
                    </Button>
                    <Link href="/sop-generator" onClick={handleCloseModal}>
                      <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full">
                        <FileText className="h-4 w-4 mr-2" />
                        SOP Generate
                      </Button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}