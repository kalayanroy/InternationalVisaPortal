import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation-fixed";
import { ArrowLeft, MapPin, BookOpen } from "lucide-react";

// Country data - in a real app this would come from an API
const countryData = {
  usa: {
    id: "usa",
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    description:
      "Home to the world's most prestigious institutions with cutting-edge research and innovation.",
    image:
      "https://images.unsplash.com/photo-1626157150198-4cdec90f15a8?q=80&w=2069&auto=format&fit=crop",
    stats: {
      universities: "4,000+",
      internationalStudents: "1M+",
      programs: "15,000+",
      states: "50",
    },
    universities: [
      {
        id: "harvard",
        name: "Harvard University",
        location: "Cambridge, Massachusetts",
        ranking: "#1",
        acceptance: "3.4%",
        tuition: "$59,076",
        image:
          "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop&auto=format",
        specialties: ["Business", "Medicine", "Law", "Engineering"],
        topCourses: [
          "MBA Program",
          "Medical School",
          "Law School",
          "Computer Science",
          "Economics",
        ],
      },
      {
        id: "stanford",
        name: "Stanford University",
        location: "Stanford, California",
        ranking: "#2",
        acceptance: "3.9%",
        tuition: "$61,731",
        image:
          "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=300&fit=crop&auto=format",
        specialties: [
          "Computer Science",
          "Engineering",
          "Business",
          "Medicine",
        ],
        topCourses: [
          "Computer Science",
          "Artificial Intelligence",
          "Engineering",
          "MBA Program",
          "Data Science",
        ],
      },
      {
        id: "mit",
        name: "Massachusetts Institute of Technology",
        location: "Cambridge, Massachusetts",
        ranking: "#3",
        acceptance: "4.1%",
        tuition: "$59,750",
        image:
          "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=300&fit=crop&auto=format",
        specialties: [
          "Engineering",
          "Computer Science",
          "Physics",
          "Economics",
        ],
        topCourses: [
          "Electrical Engineering",
          "Computer Science",
          "Physics",
          "Mathematics",
          "Aerospace Engineering",
        ],
      },
    ],
  },
  uk: {
    id: "uk",
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    description:
      "Rich academic heritage with world-renowned universities and shorter degree programs.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2069&auto=format&fit=crop",
    stats: {
      universities: "500+",
      internationalStudents: "500K+",
      programs: "50,000+",
      cities: "100+",
    },
    universities: [
      {
        id: "oxford",
        name: "Oxford University",
        location: "Oxford, England",
        ranking: "#1",
        acceptance: "17.5%",
        tuition: "£28,950",
        image:
          "https://images.unsplash.com/photo-1566408669057-4cd39b3bb1a0?w=400&h=300&fit=crop&auto=format",
        specialties: ["Philosophy", "Politics", "Economics", "Medicine"],
        topCourses: ["PPE", "Medicine", "Law", "History", "English Literature"],
      },
      {
        id: "cambridge",
        name: "Cambridge University",
        location: "Cambridge, England",
        ranking: "#2",
        acceptance: "21%",
        tuition: "£28,950",
        image:
          "https://images.unsplash.com/photo-1559409030-0b0fb6d6b23e?w=400&h=300&fit=crop&auto=format",
        specialties: [
          "Mathematics",
          "Physics",
          "Engineering",
          "Natural Sciences",
        ],
        topCourses: [
          "Mathematics",
          "Natural Sciences",
          "Engineering",
          "Computer Science",
          "Medicine",
        ],
      },
      {
        id: "imperial",
        name: "Imperial College London",
        location: "London, England",
        ranking: "#8",
        acceptance: "14.3%",
        tuition: "£32,000",
        image:
          "https://images.unsplash.com/photo-1551740952-9ba0661ba9be?w=400&h=300&fit=crop&auto=format",
        specialties: ["Engineering", "Medicine", "Business", "Science"],
        topCourses: [
          "Engineering",
          "Medicine",
          "Business School",
          "Computing",
          "Physics",
        ],
      },
    ],
  },
  canada: {
    id: "canada",
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    description:
      "High-quality education with affordable tuition and post-graduation work opportunities.",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2069&auto=format&fit=crop",
    stats: {
      universities: "400+",
      internationalStudents: "650K+",
      programs: "25,000+",
      provinces: "10",
    },
    universities: [
      {
        id: "toronto",
        name: "University of Toronto",
        location: "Toronto, Ontario",
        ranking: "#21",
        acceptance: "43%",
        tuition: "CAD $58,160",
        image:
          "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=300&fit=crop&auto=format",
        specialties: ["Medicine", "Engineering", "Business", "Arts"],
        topCourses: [
          "Medicine",
          "Engineering",
          "Business",
          "Computer Science",
          "Law",
        ],
      },
      {
        id: "mcgill",
        name: "McGill University",
        location: "Montreal, Quebec",
        ranking: "#31",
        acceptance: "46%",
        tuition: "CAD $50,000",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
        specialties: ["Medicine", "Engineering", "Arts", "Science"],
        topCourses: [
          "Medicine",
          "Engineering",
          "Arts",
          "Management",
          "Science",
        ],
      },
    ],
  },
};

export default function CountryUniversities() {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const pathParts = location.split("/");
  const countryId = pathParts[pathParts.length - 1];
  const country = countryData[countryId as keyof typeof countryData];

  if (!country) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy mb-4">
            Country Not Found
          </h1>
          <p className="text-slate-600 mb-6">
            The country you're looking for doesn't exist.
          </p>
          <Link href="/">
            <Button className="bg-gold hover:bg-gold/90 text-navy">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white overflow-y-auto">
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden bg-slate-100">
        <div className="absolute inset-0">
          <img
            src={country.image}
            alt={`${country.name} Universities`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              {country.code}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              {country.description}
            </p>
            <div className="mb-8">
              <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-3 rounded-md">
                Explore Universities
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="relative bg-gradient-to-r from-slate-50 to-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {Object.entries(country.stats).map(([key, value], index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                  {value}
                </div>
                <div className="text-slate-700 font-medium capitalize">
                  {key === "internationalStudents"
                    ? "International Students"
                    : key.replace(/([A-Z])/g, " $1").trim()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Universities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Top Universities in {country.name}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore world-class universities with excellent academic programs
            and research opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {country.universities.map((university, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-slate-50"
            >
              <div className="relative h-48">
                <img
                  src={university.image}
                  alt={university.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gold text-navy shadow-lg">
                    {university.ranking} Ranking
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {university.name}
                  </h3>
                  <p className="text-white/90 text-sm flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {university.location}
                  </p>
                </div>
              </div>

              <CardContent className="p-0">
                <div className="flex">
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-2 bg-slate-50 rounded-lg">
                        <div className="text-base font-bold text-navy">
                          {university.acceptance}
                        </div>
                        <div className="text-xs text-slate-600">Acceptance</div>
                      </div>
                      <div className="text-center p-2 bg-slate-50 rounded-lg">
                        <div className="text-base font-bold text-navy">
                          {university.tuition}
                        </div>
                        <div className="text-xs text-slate-600">Tuition</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-navy mb-2 text-sm">
                        Key Specialties
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {university.specialties
                          .slice(0, 3)
                          .map((specialty, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs px-2 py-1 border-navy/20 text-navy"
                            >
                              {specialty}
                            </Badge>
                          ))}
                        {university.specialties.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs px-2 py-1 border-slate-300 text-slate-600"
                          >
                            +{university.specialties.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Link href={`/university/${university.id}`}>
                        <Button className="w-full bg-navy hover:bg-navy/90 text-white">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="w-64 bg-gradient-to-b from-yellow-50 to-gold/10 p-4 border-l border-yellow-200">
                    <h4 className="font-semibold text-navy mb-3 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Top Courses
                    </h4>
                    <div className="space-y-2">
                      {university.topCourses.slice(0, 5).map((course, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          size="sm"
                          className="w-full text-left justify-start bg-gold hover:bg-gold/90 border-gold text-navy hover:text-navy font-medium text-xs px-3 py-2 h-auto"
                        >
                          {course}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-navy text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6 text-gold">
                Ready to Study in {country.name}?
              </h3>
              <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
                Our expert counselors will guide you through each university's
                unique requirements, from application to visa approval.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gold text-navy hover:bg-gold/90 px-8 py-3">
                  Schedule Free Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-navy px-8 py-3"
                >
                  Download {country.name} Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
