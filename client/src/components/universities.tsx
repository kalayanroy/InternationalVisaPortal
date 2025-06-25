import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Trophy, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Universities() {
  const countries = [
    {
      id: "australia",
      name: "Australia",
      flag: "🇦🇺",
      topUniversities: [
        "Australian National University",
        "Bond University",
        "University of Sydney",
        "More +",
      ],
      programs: "22,000+ Programs",
      students: "400K+ International Students",
      image:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "World-class education in a vibrant multicultural environment with great weather.",
      highlights: [], //"Work Rights", "Beautiful Cities", "Research Focus"
    },
    {
      id: "canada",
      name: "Canada",
      flag: "🇨🇦",
      topUniversities: [
        "University of Toronto",
        "Brandon University",
        "McGill University",
      ],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image:
        "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: [], //"Work Permits", "Immigration Path", "Quality of Life"
    },
    {
      id: "china",
      name: "China",
      flag: "🇨🇳",
      topUniversities: [
        "China Medical University(Shenyang)",
        "Fudan University (Shanghai)",
        "Jiangsu University (Zhenjiang)",
      ],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image:
        "https://images.unsplash.com/photo-1509195070461-b99ef33ceb67?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: [], //"Work Permits", "Immigration Path", "Quality of Life"
    },
    {
      id: "Denmark",
      name: "Denmark",
      flag: "🇩🇰",
      topUniversities: [
        "Aalborg University",
        "Aarhus University",
        "Copenhagen University",
      ],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image:
        "https://images.unsplash.com/photo-1552560880-2482cef14240?q=80&w=743&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: [], //"Work Permits", "Immigration Path", "Quality of Life"
    },
    {
      id: "Dubai",
      name: "Dubai",
      flag: "🇦🇪",
      topUniversities: [
        "American University in Dubai (AUD)",
        "Amity University Dubai",
        "BITS Pilani Dubai Campus",
      ],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image:
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: [], //"Work Permits", "Immigration Path", "Quality of Life"
    },
    {
      id: "france",
      name: "France",
      flag: "🇫🇷",
      topUniversities: [
        "École Polytechnique",
        "HEC Paris",
        "Sorbonne University",
      ],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image:
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: [], //"Work Permits", "Immigration Path", "Quality of Life"
    },
    {
      id: "germany",
      name: "Germany",
      flag: "🇩🇪",
      topUniversities: [
        "Free University of Berlin",
        "Heidelberg University",
        "Humboldt University of Berlin",
      ],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image:
        "https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: [], //"Work Permits", "Immigration Path", "Quality of Life"
    }, //
    {
      id: "hungary",
      name: "Hungary",
      flag: "🇭🇺",
      topUniversities: [
        "Budapest University of Technology and Economics (BME)",
        "Corvinus University of Budapest",
        "Eötvös Loránd University (ELTE, Budapest)",
      ],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image:
        "https://images.unsplash.com/photo-1616432902940-b7a1acbc60b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: [], //"Work Permits", "Immigration Path", "Quality of Life"
    },
    {
      id: "india",
      name: "India",
      flag: "🇮🇳",
      topUniversities: [],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: [], //"Work Permits", "Immigration Path", "Quality of Life"
    },
    {
      id: "japan",
      name: "Japan",
      flag: "🇯🇵",
      topUniversities: [],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image:
        "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: [], //"Work Permits", "Immigration Path", "Quality of Life"
    },
    {
      id: "malaysia",
      name: "Malaysia",
      flag: "🇲🇾",
      topUniversities: [],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image:
        "https://plus.unsplash.com/premium_photo-1678303397238-76250a5ebf73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: [], //"Work Permits", "Immigration Path", "Quality of Life"
    },
    {
      id: "New Zealand",
      name: "New Zealand",
      flag: "🇳🇿",
      topUniversities: [],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image:
        "https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: [], //"Work Permits", "Immigration Path", "Quality of Life"
    },
    {
      id: "norway",
      name: "Norway",
      flag: "🇳🇴",
      topUniversities: [],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image:
        "https://images.unsplash.com/photo-1544085311-11a028465b03?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: [], //"Work Permits", "Immigration Path", "Quality of Life"
    },
    {
      id: "poland",
      name: "Poland",
      flag: "🇵🇱",
      topUniversities: [],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image:
        "https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: [], //"Work Permits", "Immigration Path", "Quality of Life"
    },
    {
      id: "qatar",
      name: "Qatar",
      flag: "🇶🇦",
      topUniversities: [],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image:
        "https://images.unsplash.com/photo-1539475314840-751cecc1dacd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: [], //"Work Permits", "Immigration Path", "Quality of Life"
    },
    {
      id: "south Korea",
      name: "South Korea",
      flag: "🇰🇷",
      topUniversities: [],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image:
        "https://plus.unsplash.com/premium_photo-1661886333708-877148b43ae1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: [], //"Work Permits", "Immigration Path", "Quality of Life"
    },
    {
      id: "sweden",
      name: "Sweden",
      flag: "🇸🇪",
      topUniversities: [],
      programs: "25,000+ Programs",
      students: "350K+ International Students",
      image:
        "https://images.unsplash.com/photo-1579359565489-8e65439e6d1c?q=80&w=1170&auto=format&fait=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Excellent education quality with post-study work opportunities and pathway to PR.",
      highlights: [], //"Work Permits", "Immigration Path", "Quality of Life"
    },
    {
      id: "uk",
      name: "United Kingdom",
      flag: "🇬🇧",
      topUniversities: [
        "Oxford University",
        "Cambridge University",
        "Imperial College",
      ],
      programs: "50,000+ Programs",
      students: "500K+ International Students",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Rich academic heritage with world-renowned universities and shorter degree programs.",
      highlights: ["Historic Excellence", "Shorter Degrees", "Global Network"],
    },
    {
      id: "usa",
      name: "United States",
      flag: "🇺🇸",
      topUniversities: ["Harvard University", "Stanford University", "MIT"],
      programs: "15,000+ Programs",
      students: "1M+ International Students",
      image:
        "https://images.unsplash.com/photo-1626157150198-4cdec90f15a8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
      description:
        "Home to the world's most prestigious institutions with cutting-edge research and innovation.",
      highlights: [
        "Silicon Valley Access",
        "Research Excellence",
        "Career Opportunities",
      ],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="universities"
      className="py-24 pb-0 bg-gradient-to-br from-muted/30 to-background"
    >
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
            Discover exceptional opportunities across six premium education
            destinations, each offering unique advantages for your academic and
            career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden luxury-shadow hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 h-full">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={country.image}
                    alt={`Study in ${country.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />

                  {/* Country Header */}
                  <div className="absolute top-6 left-6 right-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-4xl filter drop-shadow-2xl">
                        {country.flag}
                      </span>
                      <div>
                        <h3
                          className={`font-playfair font-bold text-white break-words ${
                            country.name.length > 12 ? "text-lg" : "text-2xl"
                          }`}
                          style={{
                            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                            wordBreak: "break-word",
                            whiteSpace: "normal",
                          }}
                        >
                          {country.name}
                        </h3>

                        <div className="flex items-center space-x-4 mt-1">
                          <div
                            className="flex items-center space-x-1 text-white text-sm font-medium"
                            style={{
                              textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                            }}
                          >
                            <Users className="h-4 w-4 drop-shadow-lg" />
                            <span>{country.students}</span>
                          </div>
                          <div
                            className="flex items-center space-x-1 text-white text-sm font-medium"
                            style={{
                              textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                            }}
                          >
                            <Trophy className="h-4 w-4 drop-shadow-lg" />
                            <span>{country.programs}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gold accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {country.description}
                    </p>

                    <div>
                      <h4 className="font-playfair font-semibold text-navy mb-3 flex items-center">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                        Top Universities
                      </h4>
                      <div className="space-y-2">
                        {country.topUniversities.map((uni, idx) => (
                          <div key={idx} className="text-sm text-navy/70 pl-5">
                            • {uni}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    {(() => {
                      const countryRoutes = {
                        "United States": "/usa-universities",
                        "United Kingdom": "/uk-universities",
                        Canada: "/canada-universities",
                        Australia: "/australia-universities",
                        Germany: "/germany-universities",
                        Singapore: "/singapore-universities",
                      };

                      const route =
                        countryRoutes[
                          country.name as keyof typeof countryRoutes
                        ];

                      return route ? (
                        <Link href={`/country/${country.id}`}>
                          <Button className="w-full bg-navy text-white hover:bg-gold hover:text-navy transition-all duration-300 py-3 font-semibold group">
                            Explore {country.name}
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          onClick={() => scrollToSection("contact")}
                          className="w-full bg-navy text-white hover:bg-gold hover:text-navy transition-all duration-300 py-3 font-semibold group"
                        >
                          Explore {country.name}
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 px-4">
          <div className="bg-[#001F3F] rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-4 leading-snug text-[#FFD700]">
              Can't decide which destination suits you best?
            </h3>
            <p className="mb-6 max-w-xl mx-auto text-sm sm:text-base text-gray-200">
              Our expert counselors will help you choose the perfect country and
              university based on your academic goals, budget, and career
              aspirations.
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFC300] px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold"
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
