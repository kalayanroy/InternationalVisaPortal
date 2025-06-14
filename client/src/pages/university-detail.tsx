import { useState } from 'react';
import { useLocation, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  MapPin, 
  Users, 
  GraduationCap, 
  DollarSign, 
  FileText,
  BookOpen,
  Calendar,
  Globe,
  Award,
  Building,
  Star,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

// University data - in a real app this would come from an API
const universityData = {
  'harvard': {
    id: 'harvard',
    name: 'Harvard University',
    country: 'United States',
    countryCode: 'US',
    city: 'Cambridge, MA',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2069&auto=format&fit=crop',
    description: 'Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636, Harvard is the oldest institution of higher education in the United States.',
    ranking: '#1 in National Universities',
    acceptance: '3.4%',
    tuition: '$57,261',
    intlStudents: '25%',
    totalStudents: '23,000+',
    programs: '3,700+',
    founded: '1636',
    type: 'Private Research University',
    accreditation: 'New England Commission of Higher Education',
    topCourses: [
      'Business Administration',
      'Computer Science',
      'Medicine',
      'Law',
      'Economics'
    ],
    specialties: [
      'Research Excellence',
      'Ivy League Institution',
      'World-Class Faculty',
      'Alumni Network',
      'Innovation Hub'
    ],
    admissionRequirements: [
      'High School Diploma or equivalent',
      'SAT/ACT scores',
      'English proficiency (TOEFL/IELTS)',
      'Letters of recommendation',
      'Personal statement',
      'Academic transcripts'
    ],
    costs: {
      tuition: '$57,261',
      housing: '$18,389',
      meals: '$7,025',
      total: '$82,675'
    },
    scholarships: [
      'Need-based financial aid',
      'Merit scholarships',
      'International student grants',
      'Research assistantships'
    ],
    campusLife: [
      '400+ student organizations',
      'Division I athletics',
      'Historic campus',
      'World-class libraries',
      'Research opportunities'
    ]
  },
  'stanford': {
    id: 'stanford',
    name: 'Stanford University',
    country: 'United States',
    countryCode: 'US',
    city: 'Stanford, CA',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2074&auto=format&fit=crop',
    description: 'Stanford University is a private research university in Stanford, California. Known for academic excellence and proximity to Silicon Valley.',
    ranking: '#6 in National Universities',
    acceptance: '3.9%',
    tuition: '$56,169',
    intlStudents: '22%',
    totalStudents: '17,000+',
    programs: '3,000+',
    founded: '1885',
    type: 'Private Research University',
    accreditation: 'WASC Senior College and University Commission',
    topCourses: [
      'Computer Science',
      'Engineering',
      'Business',
      'Medicine',
      'Education'
    ],
    specialties: [
      'Silicon Valley Connections',
      'Entrepreneurship',
      'Technology Innovation',
      'Research Excellence',
      'Startup Culture'
    ],
    admissionRequirements: [
      'High School Diploma or equivalent',
      'SAT/ACT scores',
      'English proficiency (TOEFL/IELTS)',
      'Letters of recommendation',
      'Personal statement',
      'Academic transcripts'
    ],
    costs: {
      tuition: '$56,169',
      housing: '$17,255',
      meals: '$16,433',
      total: '$89,857'
    },
    scholarships: [
      'Knight-Hennessy Scholars',
      'Need-based aid',
      'Merit scholarships',
      'Research grants'
    ],
    campusLife: [
      '650+ student groups',
      'Cardinal athletics',
      'Beautiful campus',
      'Innovation spaces',
      'Tech incubators'
    ]
  },
  'mit': {
    id: 'mit',
    name: 'Massachusetts Institute of Technology',
    country: 'United States',
    countryCode: 'US',
    city: 'Cambridge, MA',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=2074&auto=format&fit=crop',
    description: 'MIT is a private research university in Cambridge, Massachusetts, known for its innovation in science and technology.',
    ranking: '#2 in National Universities',
    acceptance: '6.7%',
    tuition: '$57,986',
    intlStudents: '33%',
    totalStudents: '11,500+',
    programs: '2,800+',
    founded: '1861',
    type: 'Private Research University',
    accreditation: 'New England Commission of Higher Education',
    topCourses: [
      'Computer Science',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Physics',
      'Mathematics'
    ],
    specialties: [
      'STEM Excellence',
      'Innovation Lab',
      'Research Leadership',
      'Technology Transfer',
      'Entrepreneurship'
    ],
    admissionRequirements: [
      'High School Diploma or equivalent',
      'SAT/ACT scores',
      'English proficiency (TOEFL/IELTS)',
      'Letters of recommendation',
      'Personal statement',
      'Academic transcripts'
    ],
    costs: {
      tuition: '$57,986',
      housing: '$16,390',
      meals: '$15,510',
      total: '$89,886'
    },
    scholarships: [
      'Need-based financial aid',
      'Merit scholarships',
      'Research assistantships',
      'International fellowships'
    ],
    campusLife: [
      '500+ activities',
      'Engineers athletics',
      'Innovative labs',
      'Maker spaces',
      'Tech competitions'
    ]
  }
};

export default function UniversityDetail() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Extract university ID from URL path
  const pathParts = location.split('/');
  const universityId = pathParts[pathParts.length - 1];
  
  const university = universityData[universityId as keyof typeof universityData];
  
  if (!university) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy mb-4">University Not Found</h1>
          <p className="text-slate-600 mb-6">The university you're looking for doesn't exist.</p>
          <Link href="/usa-universities">
            <Button className="bg-gold hover:bg-gold/90 text-navy">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Universities
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-navy">EduConsult</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-navy transition-colors">Home</Link>
              <Link href="/usa-universities" className="text-navy font-semibold">USA</Link>
              <Link href="/uk-universities" className="text-slate-700 hover:text-navy transition-colors">UK</Link>
              <Link href="/canada-universities" className="text-slate-700 hover:text-navy transition-colors">Canada</Link>
              <Link href="/australia-universities" className="text-slate-700 hover:text-navy transition-colors">Australia</Link>
              <Button className="bg-gold hover:bg-gold/90 text-navy px-6 py-2 rounded-md font-medium">
                Get Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-navy"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
                <Link href="/" className="block px-3 py-2 text-slate-700 hover:text-navy">Home</Link>
                <Link href="/usa-universities" className="block px-3 py-2 text-navy font-semibold">USA</Link>
                <Link href="/uk-universities" className="block px-3 py-2 text-slate-700 hover:text-navy">UK</Link>
                <Link href="/canada-universities" className="block px-3 py-2 text-slate-700 hover:text-navy">Canada</Link>
                <Link href="/australia-universities" className="block px-3 py-2 text-slate-700 hover:text-navy">Australia</Link>
                <Button className="w-full mt-4 bg-gold hover:bg-gold/90 text-navy">Get Consultation</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/usa-universities">
          <Button variant="ghost" className="text-navy hover:bg-navy/5">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Universities
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={university.image}
            alt={university.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-6xl">{university.flag}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {university.name}
                </h1>
                <div className="flex items-center text-white/90 text-lg">
                  <MapPin className="h-5 w-5 mr-2" />
                  {university.city}, {university.country}
                </div>
              </div>
            </div>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              {university.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-gold text-navy text-lg px-4 py-2">
                {university.ranking}
              </Badge>
              <Badge variant="outline" className="border-white text-white text-lg px-4 py-2">
                {university.acceptance} Acceptance Rate
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-navy">{university.totalStudents}</div>
              <div className="text-slate-600">Total Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">{university.intlStudents}</div>
              <div className="text-slate-600">International Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">{university.programs}</div>
              <div className="text-slate-600">Programs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">{university.founded}</div>
              <div className="text-slate-600">Founded</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Information */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center">
                  <Building className="h-6 w-6 mr-3" />
                  About {university.name}
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  {university.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-navy mb-3">Institution Details</h3>
                    <div className="space-y-2 text-slate-600">
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span>{university.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Founded:</span>
                        <span>{university.founded}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Accreditation:</span>
                        <span className="text-right text-sm">{university.accreditation}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-3">Student Body</h3>
                    <div className="space-y-2 text-slate-600">
                      <div className="flex justify-between">
                        <span>Total Students:</span>
                        <span>{university.totalStudents}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>International:</span>
                        <span>{university.intlStudents}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Acceptance Rate:</span>
                        <span>{university.acceptance}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Courses */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center">
                  <BookOpen className="h-6 w-6 mr-3" />
                  Top Courses
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {university.topCourses.map((course, index) => (
                    <div key={index} className="flex items-center p-4 bg-gold/10 rounded-lg border border-gold/20">
                      <GraduationCap className="h-5 w-5 text-gold mr-3" />
                      <span className="font-medium text-navy">{course}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Admission Requirements */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center">
                  <FileText className="h-6 w-6 mr-3" />
                  Admission Requirements
                </h2>
                <div className="space-y-3">
                  {university.admissionRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Campus Life */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center">
                  <Users className="h-6 w-6 mr-3" />
                  Campus Life
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {university.campusLife.map((feature, index) => (
                    <div key={index} className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <Star className="h-4 w-4 text-gold mr-3" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Info */}
          <div className="space-y-8">
            {/* Costs */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Annual Costs
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Tuition:</span>
                    <span className="font-semibold text-navy">{university.costs.tuition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Housing:</span>
                    <span className="font-semibold text-navy">{university.costs.housing}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Meals:</span>
                    <span className="font-semibold text-navy">{university.costs.meals}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-navy">Total:</span>
                      <span className="font-bold text-navy text-lg">{university.costs.total}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Key Specialties
                </h3>
                <div className="space-y-2">
                  {university.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="w-full justify-start p-2 border-navy/20 text-navy">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Scholarships */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Scholarships
                </h3>
                <div className="space-y-3">
                  {university.scholarships.map((scholarship, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{scholarship}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Apply Now */}
            <Card className="bg-gradient-to-br from-navy to-navy/90 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                <p className="text-white/90 mb-6">Get expert guidance for your application process</p>
                <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold">
                  Start Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}