import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
export default function CountryCards() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-navy mb-4">
          Explore Universities by Country
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Discover world-class universities across different countries with
          unique academic programs and opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {countries.map((country) => (
          <Card
            key={country.id}
            className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-slate-50"
          >
            <div className="flex h-80">
              {/* Left side - Country Image */}
              <div className="relative w-64 flex-shrink-0">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-3xl">{country.flag}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl mb-1">
                    {country.name}
                  </h3>
                  <div className="text-white/90 text-sm">{country.code}</div>
                  <div className="flex gap-2 mt-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 text-white text-xs">
                      {country.stats.students} International Students
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Country Details */}
              <div className="flex-1 p-6 flex flex-col">
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {country.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 bg-slate-50 rounded-lg">
                    <div className="text-sm font-bold text-navy">
                      {country.stats.universities}
                    </div>
                    <div className="text-xs text-slate-600">Universities</div>
                  </div>
                  <div className="text-center p-2 bg-slate-50 rounded-lg">
                    <div className="text-sm font-bold text-navy">
                      {country.stats.students}
                    </div>
                    <div className="text-xs text-slate-600">Students</div>
                  </div>
                  <div className="text-center p-2 bg-slate-50 rounded-lg">
                    <div className="text-sm font-bold text-navy">
                      {country.stats.programs}
                    </div>
                    <div className="text-xs text-slate-600">Programs</div>
                  </div>
                </div>

                {/* Top Universities */}
                <div className="mb-4">
                  <h4 className="font-semibold text-navy mb-2 text-sm">
                    Top Universities
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {country.topUniversities.map((uni, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-gold rounded-full mr-2"></span>
                        {uni}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-2 text-sm">
                    Key Benefits
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {country.keyBenefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gold/10 text-navy px-2 py-1 rounded border border-gold/20"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explore Button */}
                <div className="mt-auto">
                  <Link href={`/country/${country.id}`}>
                    <Button className="w-full bg-navy hover:bg-navy/90 text-white flex items-center justify-center">
                      Explore {country.name}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
