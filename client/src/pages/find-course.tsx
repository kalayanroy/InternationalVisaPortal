import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Search,
  Clock,
  MapPin,
  GraduationCap,
  DollarSign,
  X,
  Download,
  MessageCircle,
  Award,
  BookOpen,
  FileText,
} from "lucide-react";
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
    description:
      "Comprehensive MBA program focusing on leadership, strategy, and global business practices.",
    ranking: "#1 in Australia",
    logo: "🎓",
    about:
      "The Melbourne Business School MBA is designed for ambitious professionals seeking to accelerate their careers and make a meaningful impact in the business world.",
    requirements: [
      "Bachelor's degree",
      "GMAT 650+",
      "Work experience 2+ years",
    ],
    scholarships: [
      { name: "Merit Scholarship", amount: "Up to $20,000" },
      { name: "International Excellence Award", amount: "$15,000" },
    ],
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
    description:
      "Advanced computer science program with specializations in AI, machine learning, and software engineering.",
    ranking: "#1 in USA",
    logo: "🖥️",
    about:
      "Advanced computer science program with specializations in AI, machine learning, and software engineering.",
    requirements: [
      "Bachelor's in CS or related field",
      "GRE 320+",
      "Programming experience",
    ],
    scholarships: [
      { name: "Stanford Fellowship", amount: "Full tuition" },
      { name: "Merit Award", amount: "$25,000" },
    ],
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
    description:
      "Prestigious engineering program with focus on innovation and practical application.",
    ranking: "#2 in UK",
    logo: "⚙️",
    about:
      "Prestigious engineering program with focus on innovation and practical application.",
    requirements: ["A-levels or equivalent", "Mathematics A*", "Physics A"],
    scholarships: [
      { name: "Cambridge Scholarship", amount: "£20,000" },
      { name: "Engineering Excellence", amount: "£10,000" },
    ],
  },
  {
    id: "4",
    name: "Master of Public Health",
    university: "Harvard University",
    country: "USA",
    level: "Master",
    field: "Public Health",
    duration: "2 years",
    fee: "65,000",
    currency: "USD",
    description:
      "Leading public health program addressing global health challenges and policy.",
    ranking: "#1 in Public Health",
    logo: "🏥",
    about:
      "Leading public health program addressing global health challenges and policy.",
    requirements: [
      "Bachelor's degree",
      "GRE 310+",
      "Health-related experience",
    ],
    scholarships: [
      { name: "Harvard Fellowship", amount: "Full tuition" },
      { name: "Public Health Award", amount: "$30,000" },
    ],
  },
  {
    id: "5",
    name: "PhD in Astrophysics",
    university: "University of Toronto",
    country: "Canada",
    level: "PhD",
    field: "Astrophysics",
    duration: "5-6 years",
    fee: "12,000",
    currency: "CAD",
    description:
      "Research-intensive program in theoretical and observational astrophysics.",
    ranking: "#3 in Canada",
    logo: "🌌",
    about:
      "Research-intensive program in theoretical and observational astrophysics.",
    requirements: [
      "Master's in Physics or related field",
      "Research experience",
      "Strong academic record",
    ],
    scholarships: [
      { name: "Research Fellowship", amount: "Full funding" },
      { name: "International Scholarship", amount: "CAD $20,000" },
    ],
  },
  {
    id: "6",
    name: "Master of Fine Arts",
    university: "Sorbonne University",
    country: "France",
    level: "Master",
    field: "Fine Arts",
    duration: "2 years",
    fee: "3,770",
    currency: "EUR",
    description:
      "Prestigious arts program in the heart of Paris with focus on contemporary practices.",
    ranking: "#1 in France",
    logo: "🎨",
    about:
      "Prestigious arts program in the heart of Paris with focus on contemporary practices.",
    requirements: [
      "Bachelor's in Arts or related field",
      "Portfolio submission",
      "French language proficiency",
    ],
    scholarships: [
      { name: "Excellence Scholarship", amount: "€5,000" },
      { name: "International Grant", amount: "€3,000" },
    ],
  },
];

const countries = [
  "All Countries",
  "Australia",
  "USA",
  "UK",
  "Canada",
  "France",
];
const levels = ["All Levels", "Bachelor", "Master", "PhD"];
const fields = [
  "All Fields",
  "Business",
  "Computer Science",
  "Engineering",
  "Public Health",
  "Astrophysics",
  "Fine Arts",
];

export default function FindCourse() {
  const [location] = useLocation();
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(sampleCourses);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    country: "All Countries",
    level: "All Levels",
    field: "All Fields",
    courseName: "",
  });

  useEffect(() => {
    let filtered = sampleCourses;

    if (filters.country !== "All Countries") {
      filtered = filtered.filter(
        (course) => course.country === filters.country,
      );
    }

    if (filters.level !== "All Levels") {
      filtered = filtered.filter((course) => course.level === filters.level);
    }

    if (filters.field !== "All Fields") {
      filtered = filtered.filter((course) => course.field === filters.field);
    }

    if (filters.courseName) {
      filtered = filtered.filter(
        (course) =>
          course.name
            .toLowerCase()
            .includes(filters.courseName.toLowerCase()) ||
          course.university
            .toLowerCase()
            .includes(filters.courseName.toLowerCase()),
      );
    }

    setFilteredCourses(filtered);
  }, [filters]);

  const handleViewDetails = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="pt-20">
        {/* DTR Consultation Header */}
        <div className="bg-gradient-to-r from-teal-400 to-teal-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-3">
                <div className="text-2xl font-bold text-teal-600">DTR</div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  DTR Consultation
                </h1>
                <p className="text-white/90 text-lg">
                  Dream to Reality ✨ Kindle
                </p>
                <p className="text-white/80 text-sm mt-1">
                  Turn your education dreams into reality with trusted consultation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search courses, universities, or programs..."
                  value={filters.courseName}
                  onChange={(e) =>
                    setFilters({ ...filters, courseName: e.target.value })
                  }
                  className="pl-10"
                />
              </div>
              <Select
                value={filters.country}
                onValueChange={(value) =>
                  setFilters({ ...filters, country: value })
                }
              >
                <SelectTrigger className="w-full md:w-48">
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
              <Select
                value={filters.level}
                onValueChange={(value) =>
                  setFilters({ ...filters, level: value })
                }
              >
                <SelectTrigger className="w-full md:w-48">
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
              <Select
                value={filters.field}
                onValueChange={(value) =>
                  setFilters({ ...filters, field: value })
                }
              >
                <SelectTrigger className="w-full md:w-48">
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
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-2">
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                className="bg-white hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                          {course.name}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-sm">
                          {course.university}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs px-2 py-1 ${
                        course.level === 'Master' ? 'bg-blue-100 text-blue-800' : 
                        course.level === 'Bachelor' ? 'bg-green-100 text-green-800' : 
                        'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {course.level.toLowerCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    {course.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span className="font-bold text-orange-600">
                        {course.currency} {course.fee} per year
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-teal-600">
                        {course.ranking}
                      </span>
                      <span className="text-sm text-gray-500">
                        {course.country}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleViewDetails(course)}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Course Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  {selectedCourse?.name}
                </DialogTitle>
                <Button
                  variant="ghost"
                  onClick={handleCloseModal}
                  className="h-6 w-6 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </DialogHeader>

            {selectedCourse && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {selectedCourse.university}
                    </h3>
                    <p className="text-gray-600">{selectedCourse.country}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {selectedCourse.level}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {selectedCourse.field}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">About the Program</h4>
                    <p className="text-gray-700 text-sm">{selectedCourse.about}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Program Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Duration: {selectedCourse.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Fee: {selectedCourse.currency} {selectedCourse.fee} per year</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Ranking: {selectedCourse.ranking}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Entry Requirements</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {selectedCourse.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Available Scholarships</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedCourse.scholarships.map((scholarship, index) => (
                      <div key={index} className="bg-teal-50 p-3 rounded-lg">
                        <p className="font-medium text-teal-900">{scholarship.name}</p>
                        <p className="text-sm text-teal-700">{scholarship.amount}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                    <FileText className="h-4 w-4 mr-2" />
                    Apply Now
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Brochure
                  </Button>
                  <Button variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Advisor
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}