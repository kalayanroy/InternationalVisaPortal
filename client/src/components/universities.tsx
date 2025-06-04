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
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-white via-white to-muted/20 luxury-shadow hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2"
            >
              {/* Premium border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold/50 to-navy p-[2px] rounded-xl">
                <div className="bg-white rounded-xl h-full w-full" />
              </div>
              
              <div className="relative z-10">
                <div className="relative h-56 overflow-hidden rounded-t-xl">
                  <img
                    src={country.image}
                    alt={`Study in ${country.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                  
                  {/* Country badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/95 backdrop-blur-md rounded-xl px-4 py-2 flex items-center space-x-3 luxury-shadow">
                      <span className="text-2xl">{country.flag}</span>
                      <div>
                        <span className="font-playfair font-bold text-navy text-lg">{country.name}</span>
                      </div>
                    </div>
                  </div>

                  {/* Statistics overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <div className="grid grid-cols-2 gap-4 text-white">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gold" />
                          <div>
                            <div className="text-sm font-semibold">{country.students}</div>
                            <div className="text-xs opacity-80">Students</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Trophy className="h-4 w-4 text-gold" />
                          <div>
                            <div className="text-sm font-semibold">{country.programs}</div>
                            <div className="text-xs opacity-80">Programs</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Premium corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-gold opacity-10 rounded-bl-full" />
                </div>

                <CardContent className="p-8 space-y-6">
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      {country.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-playfair font-semibold text-navy mb-3">Prestigious Universities</h4>
                      <div className="space-y-2">
                        {country.topUniversities.map((uni, idx) => (
                          <div key={idx} className="flex items-center space-x-3 text-sm text-navy/80">
                            <div className="w-2 h-2 bg-gradient-gold rounded-full flex-shrink-0" />
                            <span className="font-medium">{uni}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-playfair font-semibold text-navy mb-3">Key Advantages</h4>
                      <div className="flex flex-wrap gap-2">
                        {country.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="bg-gradient-to-r from-gold/10 to-navy/5 text-navy px-3 py-1.5 rounded-full text-xs font-medium border border-gold/20"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-gradient-to-r from-navy to-navy/90 text-white hover:from-gold hover:to-gold/90 transition-all duration-500 py-4 rounded-xl font-semibold luxury-shadow group"
                  >
                    <MapPin className="h-5 w-5 mr-2" />
                    Explore Opportunities
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
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