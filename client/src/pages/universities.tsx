import Header from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Users, GraduationCap, Star, BookOpen, Search, Filter, Globe, Award } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const universities = [
  {
    id: "harvard",
    name: "Harvard University",
    location: "Cambridge, Massachusetts, USA",
    country: "USA",
    ranking: "#1",
    acceptance: "3.4%",
    tuition: "$59,076",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&auto=format",
    students: "23,000",
    programs: "200+",
    rating: "4.9",
    specialties: ["Medicine", "Law", "Business", "Engineering"],
    description:
      "Harvard University is a private Ivy League research university in Cambridge, Massachusetts, with about 6,800 undergraduate students and about 14,000 postgraduate students.",
    topCourses: [
      "Medicine",
      "Law",
      "Business Administration",
      "Computer Science",
      "Economics",
    ],
  },
  {
    id: "stanford",
    name: "Stanford University",
    location: "Stanford, California, USA",
    country: "USA",
    ranking: "#2",
    acceptance: "4.3%",
    tuition: "$58,416",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop&auto=format",
    students: "17,000",
    programs: "180+",
    rating: "4.8",
    specialties: ["Engineering", "Computer Science", "Business", "Medicine"],
    description:
      "Stanford University is a private research university in Stanford, California, known for its academic strength, proximity to Silicon Valley, and ranking as one of the world's top universities.",
    topCourses: [
      "Computer Science",
      "Engineering",
      "Business School",
      "Medicine",
      "Law",
    ],
  },
  {
    id: "mit",
    name: "MIT",
    location: "Cambridge, Massachusetts, USA",
    country: "USA",
    ranking: "#3",
    acceptance: "6.7%",
    tuition: "$57,986",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&h=400&fit=crop&auto=format",
    students: "11,500",
    programs: "150+",
    rating: "4.9",
    specialties: ["Engineering", "Computer Science", "Physics", "Economics"],
    description:
      "MIT is a private research university in Cambridge, Massachusetts, that has played a key role in the development of modern technology and science.",
    topCourses: [
      "Engineering",
      "Computer Science",
      "Medicine",
    ],
  },
  {
    id: "toronto",
    name: "University of Toronto",
    location: "Toronto, Ontario, Canada",
    country: "Canada",
    ranking: "#21",
    acceptance: "43%",
    tuition: "CAD $58,160",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&h=400&fit=crop&auto=format",
    students: "97,000",
    programs: "700+",
    rating: "4.7",
    specialties: ["Medicine", "Engineering", "Business", "Arts"],
    description:
      "Canada's top university with world-class research and diverse academic programs.",
    topCourses: [
      "Engineering",
      "Medicine",
      "Business School",
      "Computing",
      "Physics",
    ],
  },
  {
    id: "melbourne",
    name: "University of Melbourne",
    location: "Melbourne, Victoria, Australia",
    country: "Australia",
    ranking: "#33",
    acceptance: "70%",
    tuition: "AUD $45,824",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&auto=format",
    students: "50,000",
    programs: "400+",
    rating: "4.6",
    specialties: ["Medicine", "Law", "Engineering", "Business"],
    description:
      "Australia's premier university with outstanding research and student outcomes.",
    topCourses: [
      "Medicine",
      "Engineering",
      "Business",
      "Computer Science",
      "Law",
    ],
  },
];

export default function Universities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === "All" || uni.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  const countries = ["All", ...Array.from(new Set(universities.map(uni => uni.country)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <div className="relative pt-24 pb-20 bg-gradient-to-br from-navy via-navy/95 to-navy/90 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent)] opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.08),transparent)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-full px-4 py-2 mb-6">
              <Globe className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-gold">Global Education Partners</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              World-Class
              <span className="block bg-gradient-to-r from-gold to-gold/80 bg-clip-text text-transparent">
                Universities
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover prestigious universities worldwide and find the perfect institution 
              for your academic journey with expert guidance
            </p>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search universities or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/90 border-white/30 focus:border-gold focus:ring-gold text-navy"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-white/90 border border-white/30 rounded-md focus:border-gold focus:ring-gold text-navy min-w-[150px]"
                  >
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-20 bg-gradient-to-r from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.05),transparent)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Global Education Impact
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Trusted by thousands of students worldwide for their higher education journey
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Partner Universities", icon: GraduationCap },
              { number: "50+", label: "Countries", icon: Globe },
              { number: "10,000+", label: "Students Placed", icon: Users },
              { number: "98%", label: "Success Rate", icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-navy to-navy/80 rounded-xl mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-navy mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Universities Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2 mb-6">
              <GraduationCap className="h-4 w-4 text-navy" />
              <span className="text-sm font-medium text-navy">Featured Institutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Top Universities Worldwide
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover prestigious institutions that have shaped global leaders and innovators
            </p>
            
            {filteredUniversities.length > 0 && (
              <div className="mt-8 text-sm text-slate-500">
                Showing {filteredUniversities.length} of {universities.length} universities
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.map((university, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-gold/30 bg-white hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Country Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-navy font-semibold backdrop-blur-sm">
                      {university.country}
                    </Badge>
                  </div>
                  
                  {/* Ranking Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-gold to-gold/80 text-navy px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {university.ranking}
                    </div>
                  </div>

                  {/* University Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {university.name}
                    </h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{university.location}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Key Statistics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-10 h-10 bg-navy/10 rounded-lg mb-2 mx-auto">
                        <Users className="h-5 w-5 text-navy" />
                      </div>
                      <div className="text-lg font-bold text-navy">{university.students}</div>
                      <div className="text-xs text-slate-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-10 h-10 bg-navy/10 rounded-lg mb-2 mx-auto">
                        <BookOpen className="h-5 w-5 text-navy" />
                      </div>
                      <div className="text-lg font-bold text-navy">{university.programs}</div>
                      <div className="text-xs text-slate-600">Programs</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-10 h-10 bg-navy/10 rounded-lg mb-2 mx-auto">
                        <Star className="h-5 w-5 text-navy" />
                      </div>
                      <div className="text-lg font-bold text-navy">{university.rating}</div>
                      <div className="text-xs text-slate-600">Rating</div>
                    </div>
                  </div>

                  {/* Acceptance & Tuition */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                      <div className="text-sm text-green-700 font-medium mb-1">Acceptance Rate</div>
                      <div className="text-xl font-bold text-green-800">{university.acceptance}</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                      <div className="text-sm text-blue-700 font-medium mb-1">Annual Tuition</div>
                      <div className="text-xl font-bold text-blue-800">{university.tuition}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {university.description}
                  </p>

                  {/* Top Courses */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-3 text-sm">Top Courses</h4>
                    <div className="flex flex-wrap gap-2">
                      {university.topCourses.slice(0, 3).map((course, idx) => (
                        <Badge
                          key={idx}
                          className="bg-navy/10 text-navy hover:bg-navy/20 text-xs px-3 py-1"
                        >
                          {course}
                        </Badge>
                      ))}
                      {university.topCourses.length > 3 && (
                        <Badge className="bg-slate-100 text-slate-600 text-xs px-3 py-1">
                          +{university.topCourses.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link href={`/university/${university.id}`}>
                    <Button className="w-full bg-gradient-to-r from-navy to-navy/90 hover:from-navy/90 hover:to-navy text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      View University Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredUniversities.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4">
                <Search className="h-12 w-12 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">No universities found</h3>
              <p className="text-slate-500">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-br from-navy to-navy/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Get personalized guidance from our education experts and find the perfect university for your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-4 text-lg rounded-lg shadow-lg">
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 text-lg rounded-lg">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}