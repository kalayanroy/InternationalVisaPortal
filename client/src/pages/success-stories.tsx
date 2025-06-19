import Header from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Quote, Star, MapPin, GraduationCap, Trophy } from "lucide-react";

const successStories = [
  {
    id: 1,
    name: "Priya Sharma",
    age: 24,
    from: "Mumbai, India",
    university: "Stanford University",
    program: "Master's in Computer Science",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b6c5?w=400&h=400&fit=crop&crop=face&auto=format",
    story:
      "Coming from a middle-class family, I never thought I could afford Stanford. StudyBridge not only helped me with the application process but also secured a 75% scholarship. Their visa guidance was exceptional, and I got approved on my first attempt.",
    achievement: "75% Scholarship + First Attempt Visa Approval",
    rating: 5,
    beforeGPA: "8.2/10",
    testScores: "GRE: 330, TOEFL: 110",
    currentRole: "Software Engineer at Google",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    age: 26,
    from: "Cairo, Egypt",
    university: "University of Oxford",
    program: "PhD in Engineering",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format",
    story:
      "The application process for Oxford seemed impossible until I found StudyBridge. They helped me craft a compelling research proposal and connected me with potential supervisors. The visa interview preparation was thorough and gave me confidence.",
    achievement: "Full PhD Funding + Research Grant",
    rating: 5,
    beforeGPA: "3.8/4.0",
    testScores: "IELTS: 8.5, GRE: 325",
    currentRole: "PhD Researcher at Oxford",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    age: 22,
    from: "Mexico City, Mexico",
    university: "University of Toronto",
    program: "Bachelor's in Business",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format",
    story:
      "As a first-generation college student, navigating international applications was overwhelming. StudyBridge's counselors became my mentors, guiding me through every step from university selection to securing housing in Toronto.",
    achievement: "Merit Scholarship + Dean's List",
    rating: 5,
    beforeGPA: "95/100",
    testScores: "TOEFL: 105, SAT: 1450",
    currentRole: "Business Student & Student Ambassador",
  },
  {
    id: 4,
    name: "Chen Wei",
    age: 25,
    from: "Beijing, China",
    university: "University of Melbourne",
    program: "Master's in Data Science",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format",
    story:
      "After three rejections from other consultants, StudyBridge took a different approach. They identified gaps in my profile and helped me strengthen my application. The result? Acceptance to my dream program with a scholarship.",
    achievement: "50% Tuition Scholarship + Paid Internship",
    rating: 5,
    beforeGPA: "3.6/4.0",
    testScores: "IELTS: 7.5, GRE: 320",
    currentRole: "Data Scientist at Microsoft Australia",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    age: 23,
    from: "Lagos, Nigeria",
    university: "Harvard University",
    program: "Master's in Public Health",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face&auto=format",
    story:
      "StudyBridge helped me secure admission to Harvard with a full scholarship. Their comprehensive support included GMAT preparation, essay writing, and interview coaching. The visa process was seamless with their expert guidance.",
    achievement: "Full Harvard Scholarship + Visa in 2 Weeks",
    rating: 5,
    beforeGPA: "First Class Honours",
    testScores: "GMAT: 720, TOEFL: 115",
    currentRole: "WHO Public Health Consultant",
  },
  {
    id: 6,
    name: "Raj Patel",
    age: 27,
    from: "Gujarat, India",
    university: "University of Cambridge",
    program: "Master's in Finance",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format",
    story:
      "With a background in engineering, transitioning to finance seemed challenging. StudyBridge helped me build a compelling narrative for my career change and prepared me thoroughly for Cambridge's rigorous interview process.",
    achievement: "Career Change Success + Investment Banking Offer",
    rating: 5,
    beforeGPA: "8.5/10",
    testScores: "GMAT: 750, IELTS: 8.0",
    currentRole: "Investment Banker at Goldman Sachs London",
  },
];

const statistics = [
  {
    number: "10,000+",
    label: "Success Stories",
    description: "Students successfully placed worldwide",
  },
  {
    number: "98%",
    label: "Visa Approval Rate",
    description: "Industry-leading success rate",
  },
  {
    number: "$50M+",
    label: "Scholarships Secured",
    description: "Total funding obtained for students",
  },
  {
    number: "500+",
    label: "Top Universities",
    description: "Partner institutions globally",
  },
];

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <div className="relative pt-24 pb-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://bpb-us-w1.wpmucdn.com/sites.usc.edu/dist/2/852/files/2024/04/USC_GSL_Commencement_GIP_20230512_0465-9007c1e1293b0d0f-1024x683.jpg')`,
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Real students, real dreams achieved. Discover how we've helped
            thousands of students reach their international education goals
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statistics.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-slate-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Grid */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From first-generation college students to career changers, read
              how we've helped students from diverse backgrounds achieve their
              dreams
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <Card
                key={story.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-slate-50"
              >
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Left side - Student Info */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={story.image}
                          alt={story.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-navy mb-1">
                            {story.name}
                          </h3>
                          <p className="text-slate-600 text-sm mb-1">
                            {story.age} years old
                          </p>
                          <p className="text-slate-500 text-sm flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {story.from}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center mb-1">
                            {[...Array(story.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 text-yellow-400 fill-current"
                              />
                            ))}
                          </div>
                          <Badge className="bg-gold text-navy text-xs">
                            Class of {story.year}
                          </Badge>
                        </div>
                      </div>

                      {/* University & Program */}
                      <div className="mb-4 p-3 bg-navy/5 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <GraduationCap className="h-4 w-4 text-navy" />
                          <span className="font-semibold text-navy">
                            {story.university}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">
                          {story.program}
                        </p>
                      </div>

                      {/* Achievement */}
                      <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 mb-1">
                          <Trophy className="h-4 w-4 text-green-600" />
                          <span className="font-semibold text-green-800">
                            Key Achievement
                          </span>
                        </div>
                        <p className="text-sm text-green-700">
                          {story.achievement}
                        </p>
                      </div>

                      {/* Academic Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-slate-600">Previous GPA:</span>
                          <div className="font-semibold text-navy">
                            {story.beforeGPA}
                          </div>
                        </div>
                        <div>
                          <span className="text-slate-600">Test Scores:</span>
                          <div className="font-semibold text-navy text-xs">
                            {story.testScores}
                          </div>
                        </div>
                      </div>

                      {/* Current Role */}
                      <div className="mb-4">
                        <span className="text-slate-600 text-sm">
                          Current Role:
                        </span>
                        <div className="font-semibold text-navy">
                          {story.currentRole}
                        </div>
                      </div>

                      {/* Story Quote */}
                      <div className="relative">
                        <Quote className="h-6 w-6 text-gold absolute -top-2 -left-2" />
                        <p className="text-slate-700 italic leading-relaxed pl-4">
                          "{story.story}"
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Video Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Video Testimonials
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Hear directly from our students about their journey and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-navy/20 to-gold/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 mx-auto">
                      <div className="w-0 h-0 border-l-[8px] border-l-navy border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                    </div>
                    <p className="text-slate-600 text-sm">
                      Video Testimonial {index}
                    </p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-navy mb-2">
                    Student Success Story {index}
                  </h3>
                  <p className="text-sm text-slate-600">
                    Watch how our guidance helped achieve remarkable results
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Your Success Story Starts Here
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Join thousands of successful students who achieved their
            international education dreams with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button className="bg-gold hover:bg-gold/90 text-navy px-8 py-3">
                Start Your Journey Today
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-navy px-8 py-3"
            >
              Download Success Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
