import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Trophy, ArrowRight } from "lucide-react";

export default function Universities() {
  const countries = [
    {
      name: "United States",
      flag: "🇺🇸",
      topUniversities: ["Harvard University", "Stanford University", "MIT"],
      programs: "15,000+ Programs",
      students: "1M+ International Students",
      image: "https://images.unsplash.com/photo-1570975408637-a57fa4158495?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Home to the world's most prestigious institutions with cutting-edge research and innovation.",
      highlights: ["Silicon Valley Access", "Research Excellence", "Career Opportunities"]
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      topUniversities: ["Oxford University", "Cambridge University", "Imperial College"],
      programs: "50,000+ Programs",
      students: "500K+ International Students",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Rich academic heritage with world-renowned universities and shorter degree programs.",
      highlights: ["Historic Excellence", "Shorter Degrees", "Global Network"]
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      topUniversities: ["University of Toronto", "UBC", "McGill University"],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: ["Work Permits", "Immigration Path", "Quality of Life"]
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      topUniversities: ["University of Melbourne", "ANU", "University of Sydney"],
      programs: "22,000+ Programs",
      students: "400K+ International Students",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "World-class education in a vibrant multicultural environment with great weather.",
      highlights: ["Work Rights", "Beautiful Cities", "Research Focus"]
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      topUniversities: ["Technical University Munich", "Heidelberg University", "LMU Munich"],
      programs: "17,000+ Programs",
      students: "300K+ International Students",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Engineering excellence and tuition-free education at public universities.",
      highlights: ["Low Tuition", "Engineering Hub", "EU Access"]
    },
    {
      name: "Singapore",
      flag: "🇸🇬",
      topUniversities: ["NUS", "NTU", "SMU"],
      programs: "1,000+ Programs",
      students: "80K+ International Students",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Gateway to Asia with world-class universities and strong industry connections.",
      highlights: ["Asian Hub", "Tech Innovation", "Safe Environment"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="universities" className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-sm font-medium mb-6">
            <Trophy className="h-4 w-4 mr-2" />
            Explore Top Destinations
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
            Study at World's Best Universities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover exceptional opportunities across six premium education destinations, 
            each offering unique advantages for your academic and career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <Card
              key={index}
              className="group hover:luxury-shadow transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={country.image}
                  alt={`Study in ${country.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
                    <span className="text-lg">{country.flag}</span>
                    <span className="font-semibold text-navy text-sm">{country.name}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-2 gap-2 text-white text-xs">
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {country.students}
                    </div>
                    <div className="flex items-center">
                      <Trophy className="h-3 w-3 mr-1" />
                      {country.programs}
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {country.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-navy mb-2 text-sm">Top Universities:</h4>
                  <div className="space-y-1">
                    {country.topUniversities.map((uni, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-gold rounded-full mr-2" />
                        {uni}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-2 text-sm">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {country.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-navy text-white hover:bg-navy/90 transition-all group"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Explore Programs
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-navy rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Can't decide which destination suits you best?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our expert counselors will help you choose the perfect country and university 
              based on your academic goals, budget, and career aspirations.
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-gold text-white hover:opacity-90 px-8 py-3"
            >
              Get Personalized Guidance
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}