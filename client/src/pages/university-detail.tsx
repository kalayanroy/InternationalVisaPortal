import Header from "@/components/header";
import { useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Star,
  DollarSign,
  FileText,
  Users,
  MapPin,
  Clock,
  Award,
  TrendingUp,
  Globe,
  BookOpen,
  GraduationCap,
  Calendar,
  CheckCircle,
  Building,
  Download,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import ausNationUniversity from "@assets/audNationUniversity1.png";
import bondUniversity from "@assets/BondUniversity.jpg";
import cqUniversity from "@assets/CNSUniversity.jpg";
import cduUniversity from "@assets/CDU.jpg";
import courseGuidePdf from "@assets/Client Enquiry Form (1)_1751003185657.pdf";
// Country data with university details
const countryData = {
  australia: {
    id: "australia",
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    description:
      "World-class education in a vibrant multicultural environment with great weather.",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stats: {
      universities: "4,000+",
      internationalStudents: "1M+",
      programs: "15,000+",
      states: "50",
    },
    topUniversities: [
      "Australian National University",
      "Bond University",
      "University of Sydney",
      "More +",
    ],
    keyBenefits: [
      //"Silicon Valley Access",
      //"Research Excellence",
      //"Career Opportunities",
    ],
    universities: [
      {
        id: "nationalUniversity",
        name: "Australian National University",
        location: "Canberra, the capital city of Australia",
        ranking: "32",
        acceptance: "35%",
        tuition: "AUD 27,916",
        image: ausNationUniversity,
        specialties: ["Business", "Medicine", "Law", "Engineering"],
        courseGuid:
          "https://drive.google.com/file/d/1l-fM7BaCIeH4UZUZpJYUcJUl_6BXmqyA/view?usp=sharing",
        topCourses: [
          {
            Name: "Undergraduate",
            amount: "A$39,000 – A$49,000/year",
            criteria:
              "depending on program (e.g., bachelor’s degrees A$39K–48.9K)",
          },
          {
            Name: "Postgraduate",
            amount: "A$38,000 – A$50,400/year",
            criteria: "masters and professional degrees on higher end",
          },
          {
            Name: "PhD (HDR)",
            amount: "~A$40,000/year",
            criteria: "(often scholarship-subsidized)",
          },
          {
            Name: "OSHC (Health Cover)",
            amount: "A$600 – 700/year",
            criteria: "",
          },
        ],
        description:
          "Leading Australian university with world-class research and academic programs.",
        students: "25,000+",
        international: "40%",
        founded: 1946,
        scholarships: [
          {
            name: "Chancellor’s International Scholarship",
            amount: "",
            criteria: "",
            coverage:
              "25–50% tuition reduction for high-achieving undergrad/postgrad applicants",
          },
          {
            name: "Higher Degrees by Research (HDR)",
            amount: "",
            criteria: "",
            coverage:
              "Fee merit scholarships often include stipend for research students",
          },
          {
            name: "Tuckwell Scholarship",
            amount: "",
            criteria: "",
            coverage:
              "Prestigious award (~A $76K–136K total) covering accommodation, living allowance, mentorship, and more        study.anu.edu.au",
          },
          {
            name: "Specialised Scholarships",
            amount: "",
            criteria: "",
            coverage:
              "Regional (e.g., Indonesian), discipline-based (Law, Business, Engineering), Indigenous support",
          },
        ],
        whyChoose: [
          {
            name: "Australia’s National University",
            description:
              "Founded in 1946 and ranked among the top 30 globally in QS 2025, ANU is recognized for academic and research excellence .",
          },
          {
            name: "Elite Group of Eight Member",
            description:
              "ANU is part of Australia’s leading research universities with strong global partnerships (Oxford, Harvard, Yale, MIT).",
          },
          {
            name: "Outstanding Academic Environment",
            description:
              "13 disciplines rank #1 nationally; boasts a 5-star student‑staff ratio of 11:1, ensuring small classes and close faculty interaction.",
          },
          {
            name: "Capitol-Based Opportunities",
            description:
              "Located in Canberra, ANU students benefit from internships and engagement with government, embassies, NGOs, and policy-making bodies.",
          },
          {
            name: "Supportive & Vibrant Campus Life",
            description:
              "With 110+ student clubs, residential colleges, and strong welfare programs, ANU fosters a welcoming environment.",
          },
          {
            name: "Graduate Employability",
            description:
              "ANU graduates are ranked #1 in Australia for employability; graduate employment rates are ~81% undergrad and ~88% postgrad.",
          },
        ],
      },
      {
        id: "bond",
        name: "Bond University",
        location: "Robina on the Gold Coast in Queensland, Australia",
        ranking: "600",
        acceptance: "60%",
        tuition: "AUD 33,000",
        image: bondUniversity,
        courseGuid:
          "https://drive.google.com/file/d/1nOA_u-y-5vGydxx7UoNeaK1nCkF2HQrO/view?usp=sharing",
        specialties: [
          "Computer Science",
          "Engineering",
          "Business",
          "Medicine",
        ],
        topCourses: [
          {
            Name: "Undergraduate",
            amount: "A$30,000–A$35,000/year",
            criteria:
              "Approximately AUD $30,000–$35,000 per year for international students",
          },
          {
            Name: "Postgraduate",
            amount: "A$58,000 for 16 units",
            criteria:
              "the Master of Business Administration (MBA) is AUD $58,000 for 16 units",
          },
        ],
        description:
          "Leading Australian university with world-class research and academic programs.",
        students: "25,000+",
        international: "40%",
        founded: 1946,
        scholarships: [
          {
            name: "International Undergraduate Excellence Scholarship",
            amount: "",
            criteria: "",
            coverage:
              "50% tuition fee remission for high-achieving undergraduate students",
          },
          {
            name: "International Stand Out Scholarship",
            amount: "",
            criteria: "",
            coverage:
              "25% tuition fee remission for standout students applying to study at an undergraduate or postgraduate level",
          },
          {
            name: "Transformer Scholarship",
            amount: "",
            criteria: "",
            coverage:
              "50% tuition fee remission for students demonstrating strong leadership skills and community involvement.",
          },
          {
            name: "Student Loyalty Discount",
            amount: "",
            criteria: "",
            coverage:
              "10% discount for students with direct family members attending Bond University or alumni graduates.bond.edu.au",
          },
        ],
        whyChoose: [
          {
            name: "Accelerated Learning Model",
            description:
              "Bond operates on a three-semester-per-year schedule, allowing students to complete their degrees faster—up to a year ahead of peers at traditional universities. ",
          },
          {
            name: "High Graduate Employment Rates",
            description:
              "Bond boasts a full-time employment rate of 79.2% for undergraduates and 89.1% for postgraduates, surpassing the national average.",
          },
          {
            name: "Exceptional Student Satisfaction",
            description:
              "Undergraduate students rate their overall educational experience at 89.2%, well above the national average of 76.7%.",
          },
          {
            name: "Small Class Sizes",
            description:
              "With an average student-to-teacher ratio of 11:1, Bond ensures personalized attention and a supportive learning environment.",
          },
          {
            name: "State-of-the-Art Facilities",
            description:
              "The campus features modern amenities, including the Bond Institute of Health and Sport, Moot Courtrooms, and extensive sports facilities.",
          },
        ],
      },
      {
        id: "cq",
        name: "Central Queensland University(CQ)",
        location: "Rockhampton, Norman Gardens Australia",
        ranking: "499",
        acceptance: "65%",
        tuition: "AUD 23,000",
        image: cqUniversity,
        courseGuid:
          "https://drive.google.com/file/d/15bAsAW7lFi92A9k2XzJF8e8sHPVP8HkU/view?usp=sharing",
        specialties: [
          "Business and Accounting",
          "Creative",
          "Engineering",
          "Built Environment and Aviation",
        ],
        topCourses: [
          {
            Name: "Undergraduate",
            amount: "A$36,960–≈A$40,000/year",
            criteria: "",
          },
          {
            Name: "Postgraduate",
            amount: "A$28,000–40,000/year",
            criteria: "",
          },
          {
            Name: "Living Expenses",
            amount: "A$55,000 total",
            criteria: "",
          },
        ],
        description:
          "Leading Australian university with world-class research and academic programs.",
        students: "25,000+",
        international: "40%",
        founded: 1946,
        scholarships: [
          {
            name: "International Merit Scholarship",
            amount: "",
            criteria: "",
            coverage: "up to 25% tuition award",
          },
          {
            name: "Research Training (RTP) Stipend",
            amount: "",
            criteria: "",
            coverage: "up to A$36,000/year for HDR candidates ",
          },
          {
            name: "Australia Awards & LPDP Scholarships",
            amount: "",
            criteria: "",
            coverage: " full funding via government schemes ",
          },
          {
            name: "Destination Australia Scholarship",
            amount: "",
            criteria: "",
            coverage: "A$15,000/year + 25% tuition for regional campuses ",
          },
          {
            name: "A$20 million annual scholarship pool",
            amount: "",
            criteria: "",
            coverage: "diverse awards and auto-consideration",
          },
        ],
        whyChoose: [
          {
            name: "Nationally Vast and Unique",
            description:
              "The only Australian university with campuses in every mainland state, including Rockhampton (main), Brisbane, Sydney, Melbourne, Cairns, Bundaberg, Townsville, and more",
          },
          {
            name: "Growing Global Reputation",
            description:
              "Ranked #495 globally (QS 2025) and in the top 2% worldwide for graduate employability . Rated five stars for teaching, employability, global engagement, facilities, and student support (QS Stars 2024) ",
          },
          {
            name: "Outstanding Graduate Outcomes",
            description:
              "Among top 4 in Australia for undergraduate employment rates and #1 for postgraduate starting salaries ",
          },
          {
            name: "Work‑Integrated, Practical Teaching",
            description:
              "Courses co-developed with industry, offering internships, career workshops, volunteering, and the unique Graduate Guarantee—free graduate certificate if you don’t secure a job within 6 months",
          },
          {
            name: "Supportive and Inclusive Community",
            description:
              "Welcomes ~33,500 students, including ~5,200 international from 50+ countries (16%); ranked #1 for social equity nationally. Offers robust academic support, welfare, mentoring, and career services",
          },
        ],
      },
      {
        id: "cdu",
        name: "Charles Darwin University",
        location: "Casuarina, Northern Territory, Australia",
        ranking: "436",
        acceptance: "59%",
        tuition: "AUD 20,000",
        image: cduUniversity,
        courseGuid:
          "https://drive.google.com/file/d/1j-beQhJ6aHu_6FBweBH9cSY2ubiZYsdn/view?usp=sharing",
        specialties: ["Health", "Engineering", "Indigenous Studies"],
        topCourses: [
          {
            Name: "Undergraduate",
            amount: "A$24,000–29,000/year",
            criteria: "",
          },
          {
            Name: "Postgraduate",
            amount: "A$25,000–32,000/year",
            criteria: "",
          },
          {
            Name: "VET/TAFE",
            amount: "A$8,000–15,000",
            criteria: "(program-dependent)",
          },
          {
            Name: "Living Expenses",
            amount: "Around A$21,000/year",
            criteria:
              "Around A$21,000/year in Darwin, covering accommodation, food, and transport; somewhat lower in regional centres",
          },
        ],
        description:
          "Leading Australian university with world-class research and academic programs.",
        students: "25,000+",
        international: "40%",
        founded: 1946,
        scholarships: [
          {
            name: "Vice-Chancellor’s International High Achievers",
            amount: "",
            criteria: "",
            coverage: "50% tuition waiver",
          },
          {
            name: "Global Merit Scholarship",
            amount: "",
            criteria: "",
            coverage: "30% off fees",
          },
          {
            name: "Bachelor of Nursing Scholarship",
            amount: "",
            criteria: "",
            coverage: "20% off tuition",
          },
          {
            name: "International College Pathway Scholarship",
            amount: "",
            criteria: "",
            coverage: "20–30% for selected pathway courses",
          },
          {
            name: "Dili International School Scholarship",
            amount: "",
            criteria: "",
            coverage: "A$12,900/year + accommodation support",
          },
          {
            name: "Destination Australia",
            amount: "",
            criteria: "",
            coverage: "A$15,000/year for regional campus study",
          },
          {
            name: "General region & research scholarships",
            amount: "",
            criteria: "",
            coverage: "Including RTP for HDR students",
          },
        ],
        whyChoose: [
          {
            name: "Unique Location & Campuses",
            description:
              "As the only university based in Australia’s Northern Territory, CDU serves a vast region. Its main campus is in Casuarina (Darwin), with additional study sites in the Darwin Waterfront (Danala Precinct), Palmerston, Alice Springs, Tennant Creek, Katherine, Nhulunbuy, plus urban learning hubs in Sydney and Brisbane ",
          },
          {
            name: "Dual-Sector Focus & Cultural Links",
            description:
              "Established in 2003 through a merger of university, VET, and research institutions, CDU offers everything from TAFE to PhD. It’s deeply connected with Northern Territory’s Indigenous communities and tropical savanna ecosystems .",
          },
          {
            name: "Strong Graduate Outcomes & Practical Focus",
            description:
              "Ranked in the global top 2%, with QS putting CDU in the #621–630 band. Notably, 86% of employers rate CDU grads positively, and around 85% of students find full-time employment within 4 months post-graduation .",
          },
          {
            name: "Modern Campus & Urban Expansion",
            description:
              "The newly opened Danala Education & Community Precinct is equipped with contemporary learning spaces and integrated with Darwin CBD, emphasizing community engagement and climate-sensitive design .",
          },
        ],
      },
    ],
  },
};

export default function UniversityDetail() {
  const [location] = useLocation();

  // Extract university and country from URL path
  const universityData = useMemo(() => {
    // Parse URL like /university/harvard/usa or /university/nationalUniversity/australia
    // Parse URL like /university/harvard?country=usa
    const [path, queryString] = location.split("?");
    const pathParts = path.split("/");
    if (pathParts.length >= 3 && pathParts[1] === "university") {
      const universityId = pathParts[2];
      // Parse query parameters
      const urlParams = new URLSearchParams(window.location.search);
      const countryId = urlParams.get("country");
      console.log("Country ID:", countryId);

      if (countryId) {
        const country = (countryData as any)[countryId];
        if (country && country.universities) {
          const university = country.universities.find(
            (u: any) => u.id === universityId,
          );
          if (university) {
            console.log("Found university:", university.name);
            return { university, country };
          }
        }
      }
    }

    // Default fallback to Harvard
    return {
      university: countryData.australia.universities[0],
      country: countryData.australia,
    };
  }, [location]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const { university, country } = universityData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white ">
      <Header />

      {/* Hero Section */}
      <div className="relative pt-20 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={university.image}
            alt={university.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        <div className="absolute bottom-8 left-8 text-white z-10">
          <h1 className="text-4xl font-bold">{university.name}</h1>
          <p className="text-lg">{university.location}</p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.15),transparent)] opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.1),transparent)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/universities"
              className="inline-flex items-center text-main hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Universities
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Badge className="bg-main text-white px-4 py-2 text-lg font-bold">
                  #{university.ranking} World Ranking
                </Badge>
                <Badge
                  variant="outline"
                  className="border-white text-white bg-white/10 backdrop-blur-sm"
                >
                  Founded {university.founded}
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {university.name}
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                America's oldest institution of higher education, renowned for
                academic excellence, groundbreaking research, and producing
                world leaders across all fields.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 text-white mb-8">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-main" />
                  <span>{university.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-main" />
                  <span>{university.students.toLocaleString()} students</span>
                </div>
              </div>

              {/* Course Guide Button */}
              <div className="flex gap-4">
                <Button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.target = "_blank";
                    link.href = `${university.courseGuid}`;
                    link.download = `${university.name}-Course-Guide.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="bg-main hover:bg-main/90 text-white px-6 py-3 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Course Guide
                </Button>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-navy mb-6">
                    Statistics
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Acceptance Rate</span>
                      <span className="font-bold text-navy">
                        {university.acceptance}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">
                        Student-Faculty Ratio
                      </span>
                      <span className="font-bold text-navy">
                        {university.facultyRatio}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">
                        International Students
                      </span>
                      <span className="font-bold text-navy">
                        {university.international}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Endowment</span>
                      <span className="font-bold text-navy">
                        {university.endowment}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-16 inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent)]">
        <Tabs defaultValue="schools" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg rounded-2xl p-1 md:p-2 border border-slate-200 gap-1 md:gap-2">
            <TabsTrigger
              value="schools"
              className="data-[state=active]:bg-[#ffc105] data-[state=active]:text-black rounded-lg font-medium text-[10px] md:text-sm px-1 py-1 md:px-2 md:py-2"
            >
              <span className="block md:hidden">Schools</span>
              <span className="hidden md:block">Scholarships & Financial</span>
            </TabsTrigger>
            <TabsTrigger
              value="admissions"
              className="data-[state=active]:bg-[#ffc105] data-[state=active]:text-black rounded-lg font-medium text-[10px] md:text-sm px-1 py-1 md:px-2 md:py-2"
            >
              <span className="block md:hidden">Apply</span>
              <span className="hidden md:block">Admissions</span>
            </TabsTrigger>
            {/*<TabsTrigger
              value="visa"
              className="data-[state=active]:bg-[#ffc105] data-[state=active]:text-black rounded-lg font-medium text-[10px] md:text-sm px-1 py-1 md:px-2 md:py-2"
            >
              <span className="block md:hidden">Visa</span>
              <span className="hidden md:block">Visa Process</span>
            </TabsTrigger>*/}
            <TabsTrigger
              value="costs"
              className="data-[state=active]:bg-[#ffc105] data-[state=active]:text-black rounded-lg font-medium text-[10px] md:text-sm px-1 py-1 md:px-2 md:py-2"
            >
              <span className="block md:hidden">Aid</span>
              <span className="hidden md:block">Costs & Aid</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="schools" className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2 mb-6">
                <GraduationCap className="h-4 w-4 text-navy" />
                <span className="text-sm font-medium text-navy">
                  Academic Excellence
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Scholarships & Financial Aid
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Harvard offers undergraduate and graduate programs across
                multiple schools, each with specific requirements and costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {university.scholarships?.map(
                (scholarship: any, index: number) => (
                  <Card
                    key={index}
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-main/40 bg-gradient-to-br from-white via-white to-slate-50/30 hover:-translate-y-3 hover:scale-105"
                  >
                    <div className="relative">
                      {/* Decorative Gradient */}
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-gold/30 via-gold/20 to-transparent rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-navy/20 via-navy/10 to-transparent rounded-full blur-xl opacity-40" />

                      <CardHeader className="relative pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-navy/10 via-navy/5 to-transparent rounded-2xl border border-navy/10 group-hover:border-main/30 transition-all duration-300">
                            <Building className="h-7 w-7 text-navy group-hover:text-main transition-colors duration-300" />
                          </div>
                          <Badge className="bg-[#ffc105] text-navy font-bold border border-navy/20 px-3 py-1 text-xs">
                            {/*{scholarship.duration}*/}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-bold text-navy group-hover:text-main transition-colors duration-300 leading-tight">
                          {scholarship.name}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-5 relative">
                        <div className="grid grid-cols-1 gap-3">
                          <div className="text-center p-4 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100/80 rounded-2xl border border-emerald-200/60 hover:border-emerald-300 transition-all duration-300 group-hover:shadow-lg">
                            <div className="text-lg font-bold text-emerald-800">
                              {/*{school.tuition}*/}
                            </div>
                            <div className="text-xs text-emerald-700 font-medium">
                              {scholarship.coverage}
                            </div>
                          </div>
                          {/*<div className="text-center p-4 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100/80 rounded-2xl border border-blue-200/60 hover:border-blue-300 transition-all duration-300 group-hover:shadow-lg">
                            <div className="text-sm font-bold text-blue-800">
                              {/*{school.deadline}*
                            </div>
                            <div className="text-xs text-blue-700 font-medium">
                              Application Deadline
                            </div>
                          </div>*/}
                        </div>

                        <div className="space-y-3 pt-2">
                          <h4 className="font-bold text-navy flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 mr-2 text-main" />
                            Requirements
                          </h4>
                          <p className="text-slate-600 text-xs leading-relaxed bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                            {/*{school.requirements}*/}
                          </p>
                        </div>

                        {/*<div className="pt-2">
                        <Button className="w-full bg-gradient-to-r from-navy via-navy to-navy/90 hover:from-navy/90 hover:via-navy/80 hover:to-navy/70 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                          View Program Details
                        </Button>
                      </div>*/}
                      </CardContent>
                    </div>
                  </Card>
                ),
              )}
            </div>
          </TabsContent>

          <TabsContent value="admissions" className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2 mb-6">
                <FileText className="h-4 w-4 text-navy" />
                <span className="text-sm font-medium text-navy">
                  Application Process
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Admission Requirements
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Harvard maintains the highest academic standards with holistic
                evaluation of candidates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {university.topCourses?.map((topCourse: any, index: number) => (
                <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 via-white to-blue-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                  <CardHeader className="relative">
                    <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100/50 rounded-2xl mr-4 border border-blue-200/50 group-hover:border-blue-300 transition-all duration-300">
                        <GraduationCap className="h-7 w-7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl font-bold text-navy group-hover:text-blue-700 transition-colors duration-300">
                        {topCourse.Name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 relative">
                    <div className="space-y-3">
                      {[
                        "Common Application or Coalition Application",
                        "SAT or ACT scores",
                        "High school transcript",
                        "Teacher recommendations (2)",
                        "Personal essays",
                        "Extracurricular activities",
                      ].map((requirement, index) => (
                        <div
                          key={index}
                          className="flex items-center p-2 rounded-lg hover:bg-blue-50/50 transition-colors duration-200"
                        >
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 flex-shrink-0" />
                          <span className="text-sm text-slate-700 font-medium">
                            {requirement}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                        Apply as {topCourse.Name}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/*<Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 via-white to-purple-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-purple-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100/50 rounded-2xl mr-4 border border-purple-200/50 group-hover:border-purple-300 transition-all duration-300">
                      <Award className="h-7 w-7 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-navy group-hover:text-purple-700 transition-colors duration-300">
                      Graduate
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <div className="space-y-3">
                    {[
                      "Bachelor's degree from accredited institution",
                      "GRE/GMAT/LSAT/MCAT (program specific)",
                      "Official transcripts",
                      "Letters of recommendation (3)",
                      "Statement of purpose",
                      "Research experience (preferred)",
                    ].map((requirement, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 rounded-lg hover:bg-purple-50/50 transition-colors duration-200"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 flex-shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">
                          {requirement}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                      Apply as Graduate
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-emerald-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-100 via-emerald-50 to-emerald-100/50 rounded-2xl mr-4 border border-emerald-200/50 group-hover:border-emerald-300 transition-all duration-300">
                      <BookOpen className="h-7 w-7 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-navy group-hover:text-emerald-700 transition-colors duration-300">
                      International
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <div className="space-y-3">
                    {[
                      "TOEFL/IELTS English proficiency",
                      "Financial documentation required",
                      "Passport and visa requirements",
                      "Academic credential evaluation",
                      "Statement of financial support",
                      "Additional country-specific documents",
                    ].map((requirement, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 rounded-lg hover:bg-emerald-50/50 transition-colors duration-200"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 flex-shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">
                          {requirement}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                      International Application
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-gold/10 via-white to-gold/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-gold/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gold/20 via-gold/10 to-gold/20 rounded-2xl mr-4 border border-main/30 group-hover:border-main/50 transition-all duration-300">
                      <Calendar className="h-7 w-7 text-navy group-hover:text-main transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-navy group-hover:text-main transition-colors duration-300">
                      Timeline
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <div className="space-y-3">
                    {admissionTimeline.slice(0, 6).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 rounded-lg hover:bg-main/5 transition-colors duration-200"
                      >
                        <div className="w-6 h-6 bg-navy rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-white text-xs font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy">
                            {item.date}
                          </div>
                          <div className="text-xs text-slate-600">
                            {item.task}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                      View Full Timeline
                    </Button>
                  </div>
                </CardContent>
              </Card>*/}
            </div>
          </TabsContent>

          <TabsContent value="visa" className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2 mb-6">
                <Globe className="h-4 w-4 text-navy" />
                <span className="text-sm font-medium text-navy">
                  International Students
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Visa Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Complete guide to obtaining your student visa for studying at
                Harvard University.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 via-white to-green-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-green-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardTitle className="text-xl font-bold text-navy flex items-center group-hover:text-green-700 transition-colors duration-300">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-100 via-green-50 to-green-100/50 rounded-2xl mr-4 border border-green-200/50 group-hover:border-green-300 transition-all duration-300">
                      <FileText className="h-7 w-7 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
                    </div>
                    F-1 Student Visa
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-4 bg-gradient-to-br from-green-100/80 to-green-50 rounded-2xl border border-green-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-green-800">
                        {/*{visaRequirements.f1Visa.processing}*/}
                      </div>
                      <div className="text-xs text-green-700 font-medium">
                        Processing Time
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-emerald-100/80 to-emerald-50 rounded-2xl border border-emerald-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-emerald-800">
                        {/*{visaRequirements.f1Visa.fee}*/}
                      </div>
                      <div className="text-xs text-emerald-700 font-medium">
                        Visa Fee
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-teal-100/80 to-teal-50 rounded-2xl border border-teal-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-teal-800">Required</div>
                      <div className="text-xs text-teal-700 font-medium">
                        Interview
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-navy mb-3 text-sm">
                      Requirements:
                    </h4>
                    <ul className="space-y-2 max-h-40 overflow-y-auto">
                      {/*{visaRequirements.f1Visa.requirements
                        .slice(0, 4)
                        .map((req, index) => (
                          <li
                            key={index}
                            className="flex items-start text-xs text-slate-600 p-2 rounded-lg hover:bg-green-50/50 transition-colors duration-200"
                          >
                            <CheckCircle className="h-3 w-3 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}*/}
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                    Apply for F-1 Visa
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 via-white to-blue-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardTitle className="text-xl font-bold text-navy flex items-center group-hover:text-blue-700 transition-colors duration-300">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100/50 rounded-2xl mr-4 border border-blue-200/50 group-hover:border-blue-300 transition-all duration-300">
                      <FileText className="h-7 w-7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                    </div>
                    J-1 Exchange Visa
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-4 bg-gradient-to-br from-blue-100/80 to-blue-50 rounded-2xl border border-blue-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-blue-800">
                        {/*{visaRequirements.j1Visa.processing}*/}
                      </div>
                      <div className="text-xs text-blue-700 font-medium">
                        Processing Time
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-sky-100/80 to-sky-50 rounded-2xl border border-sky-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-sky-800">
                        {/* {visaRequirements.j1Visa.fee}*/}
                      </div>
                      <div className="text-xs text-sky-700 font-medium">
                        Visa Fee
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-cyan-100/80 to-cyan-50 rounded-2xl border border-cyan-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-cyan-800">Required</div>
                      <div className="text-xs text-cyan-700 font-medium">
                        Interview
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-navy mb-3 text-sm">
                      Requirements:
                    </h4>
                    <ul className="space-y-2 max-h-40 overflow-y-auto">
                      {/* {visaRequirements.j1Visa.requirements.map(
                        (req, index) => (
                          <li
                            key={index}
                            className="flex items-start text-xs text-slate-600 p-2 rounded-lg hover:bg-blue-50/50 transition-colors duration-200"
                          >
                            <CheckCircle className="h-3 w-3 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ),
                      )}*/}
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                    Apply for J-1 Visa
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 via-white to-purple-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-purple-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardTitle className="text-xl font-bold text-navy flex items-center group-hover:text-purple-700 transition-colors duration-300">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100/50 rounded-2xl mr-4 border border-purple-200/50 group-hover:border-purple-300 transition-all duration-300">
                      <Globe className="h-7 w-7 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                    </div>
                    Visa Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-4 bg-gradient-to-br from-purple-100/80 to-purple-50 rounded-2xl border border-purple-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-purple-800">1-2 Weeks</div>
                      <div className="text-xs text-purple-700 font-medium">
                        Document Prep
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-violet-100/80 to-violet-50 rounded-2xl border border-violet-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-violet-800">$350-$450</div>
                      <div className="text-xs text-violet-700 font-medium">
                        SEVIS Fee
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-indigo-100/80 to-indigo-50 rounded-2xl border border-indigo-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-indigo-800">Required</div>
                      <div className="text-xs text-indigo-700 font-medium">
                        Financial Proof
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-navy mb-3 text-sm">
                      Essential Documents:
                    </h4>
                    <ul className="space-y-2 max-h-40 overflow-y-auto">
                      {[
                        "Valid passport (6+ months)",
                        "I-20 or DS-2019 form",
                        "Financial statements",
                        "Academic transcripts",
                        "English proficiency scores",
                      ].map((doc, index) => (
                        <li
                          key={index}
                          className="flex items-start text-xs text-slate-600 p-2 rounded-lg hover:bg-purple-50/50 transition-colors duration-200"
                        >
                          <CheckCircle className="h-3 w-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                    Document Checklist
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 via-white to-orange-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-orange-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardTitle className="text-xl font-bold text-navy flex items-center group-hover:text-orange-700 transition-colors duration-300">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-100 via-orange-50 to-orange-100/50 rounded-2xl mr-4 border border-orange-200/50 group-hover:border-orange-300 transition-all duration-300">
                      <Clock className="h-7 w-7 text-orange-600 group-hover:text-orange-700 transition-colors duration-300" />
                    </div>
                    Visa Interview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-4 bg-gradient-to-br from-orange-100/80 to-orange-50 rounded-2xl border border-orange-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-orange-800">15-30 Min</div>
                      <div className="text-xs text-orange-700 font-medium">
                        Interview Duration
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-amber-100/80 to-amber-50 rounded-2xl border border-amber-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-amber-800">2-4 Weeks</div>
                      <div className="text-xs text-amber-700 font-medium">
                        Wait Time
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-yellow-100/80 to-yellow-50 rounded-2xl border border-yellow-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-yellow-800">Embassy</div>
                      <div className="text-xs text-yellow-700 font-medium">
                        Location
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-navy mb-3 text-sm">
                      Interview Tips:
                    </h4>
                    <ul className="space-y-2 max-h-40 overflow-y-auto">
                      {[
                        "Dress professionally",
                        "Bring all required documents",
                        "Practice common questions",
                        "Show ties to home country",
                        "Be honest and confident",
                      ].map((tip, index) => (
                        <li
                          key={index}
                          className="flex items-start text-xs text-slate-600 p-2 rounded-lg hover:bg-orange-50/50 transition-colors duration-200"
                        >
                          <CheckCircle className="h-3 w-3 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                    Interview Preparation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="costs" className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2 mb-6">
                <DollarSign className="h-4 w-4 text-navy" />
                <span className="text-sm font-medium text-navy">
                  Financial Planning
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Costs & Financial Aid
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive breakdown of costs and available financial aid
                opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {university.topCourses?.map((topCourse: any, index: number) => (
                <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 via-white to-blue-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                  <CardHeader className="relative">
                    <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardTitle className="text-xl font-bold text-navy group-hover:text-blue-700 transition-colors duration-300 flex items-center">
                      <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100/50 rounded-2xl mr-4 border border-blue-200/50 group-hover:border-blue-300 transition-all duration-300">
                        <GraduationCap className="h-7 w-7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                      </div>
                      {topCourse.Name} Costs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 relative">
                    <div
                      className={`flex justify-between items-center py-3 px-4 rounded-xl border transition-all duration-300 `}
                    >
                      <span className="text-slate-700 capitalize font-medium text-sm"></span>
                      <span className={`font-bold text-slate-800`}>
                        {topCourse.amount}
                      </span>
                    </div>
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl border border-main/20 hover:border-main/40 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="text-sm font-bold text-navy mb-1">
                        {topCourse.criteria}
                      </div>
                    </div>
                    {/*<Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm mt-4">
                      Calculate Undergraduate Costs
                    </Button>*/}
                  </CardContent>
                </Card>
              ))}

              {/*<Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 via-white to-purple-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-purple-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardTitle className="text-xl font-bold text-navy group-hover:text-purple-700 transition-colors duration-300 flex items-center">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100/50 rounded-2xl mr-4 border border-purple-200/50 group-hover:border-purple-300 transition-all duration-300">
                      <Award className="h-7 w-7 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                    </div>
                    Graduate Costs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  {Object.entries(costs.graduate).map(([key, value]) => (
                    <div
                      key={key}
                      className={`flex justify-between items-center py-3 px-4 rounded-xl border transition-all duration-300 ${
                        key === "total"
                          ? "bg-gradient-to-r from-purple-100 to-purple-50 border-purple-200 hover:shadow-lg"
                          : "bg-slate-50/70 border-slate-100 hover:bg-purple-50/50"
                      }`}
                    >
                      <span className="text-slate-700 capitalize font-medium text-sm">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span
                        className={`font-bold ${key === "total" ? "text-ls text-purple-800" : "text-slate-800"}`}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm mt-4">
                    Calculate Graduate Costs
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-gold/10 via-white to-gold/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-gold/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardTitle className="text-xl font-bold text-navy group-hover:text-main transition-colors duration-300 flex items-center">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gold/20 via-gold/10 to-gold/20 rounded-2xl mr-4 border border-main/30 group-hover:border-main/50 transition-all duration-300">
                      <DollarSign className="h-7 w-7 text-navy group-hover:text-main transition-colors duration-300" />
                    </div>
                    Financial Aid
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <div className="space-y-3">
                    {scholarships.map((scholarship, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl border border-main/20 hover:border-main/40 transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="text-sm font-bold text-navy mb-1">
                          {scholarship.name}
                        </div>
                        <div className="text-xs font-bold text-main mb-2">
                          {scholarship.amount}
                        </div>
                        <div className="text-xs text-slate-600">
                          {scholarship.criteria}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm mt-4">
                    Apply for Financial Aid
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <CardHeader className="relative">
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-emerald-300/30 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardTitle className="text-xl font-bold text-navy group-hover:text-emerald-700 transition-colors duration-300 flex items-center">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-100 via-emerald-50 to-emerald-100/50 rounded-2xl mr-4 border border-emerald-200/50 group-hover:border-emerald-300 transition-all duration-300">
                      <TrendingUp className="h-7 w-7 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" />
                    </div>
                    Cost Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <div className="space-y-3">
                    <div className="p-4 bg-gradient-to-br from-emerald-100/80 to-emerald-50 rounded-2xl border border-emerald-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-emerald-800">
                        Total 4 Years
                      </div>
                      <div className="text-2xl font-bold text-emerald-900">
                        $348,580
                      </div>
                      <div className="text-xs text-emerald-700 font-medium">
                        Undergraduate
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-teal-100/80 to-teal-50 rounded-2xl border border-teal-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-teal-800">
                        Total 2 Years
                      </div>
                      <div className="text-2xl font-bold text-teal-900">
                        $215,280
                      </div>
                      <div className="text-xs text-teal-700 font-medium">
                        Graduate
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-cyan-100/80 to-cyan-50 rounded-2xl border border-cyan-200/60 text-center hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-cyan-800">Average Aid</div>
                      <div className="text-2xl font-bold text-cyan-900">
                        $65,000
                      </div>
                      <div className="text-xs text-cyan-700 font-medium">
                        Per Year
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                    Personalized Calculator
                  </Button>
                </CardContent>
              </Card>*/}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* Why Choose Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-main/10 rounded-full px-6 py-3 mb-6">
            <Award className="h-5 w-5 text-main" />
            <span className="text-sm font-medium text-main">
              Excellence in Education
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Why Choose {university.name}?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes {university.name} a world-class destination for
            international students seeking academic excellence and career
            opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {university.whyChoose?.map((choose: any, index: number) => (
            <Card className="group hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-main/20 bg-gradient-to-br from-white via-white to-slate-50/30">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-main/20 via-main/10 to-transparent" />
                <div className="relative p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-main/10 rounded-2xl mb-6 group-hover:bg-main/20 transition-colors">
                    <Globe className="h-8 w-8 text-main" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">
                    {choose.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {choose.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-br from-navy to-navy/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Apply to Harvard?
          </h2>
          <p className="text-xl text-black/90 mb-10 leading-relaxed">
            Get expert guidance on your Harvard University application with our
            comprehensive consultation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button className="bg-main hover:bg-main/90 text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg">
                Book Application Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-[#ffc105] hover:text-black font-semibold px-8 py-4 text-lg rounded-lg"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
