import Navigation from "@/components/navigation-fixed";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { 
  Calendar,
  Clock,
  Phone,
  Video,
  MessageCircle,
  CheckCircle,
  User,
  GraduationCap,
  Globe,
  Star
} from "lucide-react";

const consultationTypes = [
  {
    id: "free",
    title: "Free Initial Consultation",
    duration: "30 minutes",
    price: "Free",
    description: "Perfect for first-time consultation to understand your goals and how we can help",
    features: [
      "Academic profile assessment",
      "University recommendations",
      "Eligibility evaluation",
      "Pathway planning overview"
    ],
    popular: true
  },
  {
    id: "comprehensive",
    title: "Comprehensive Consultation", 
    duration: "60 minutes",
    price: "$99",
    description: "Detailed consultation with personalized university list and application strategy",
    features: [
      "In-depth profile analysis",
      "Detailed university shortlist",
      "Application timeline",
      "Scholarship opportunities",
      "Test preparation guidance"
    ],
    popular: false
  },
  {
    id: "premium",
    title: "Premium Strategy Session",
    duration: "90 minutes", 
    price: "$199",
    description: "Comprehensive session with multiple experts and detailed action plan",
    features: [
      "Multi-expert consultation",
      "Complete application strategy",
      "Financial planning guidance",
      "Career pathway mapping",
      "Priority support access"
    ],
    popular: false
  }
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

const consultants = [
  {
    name: "Dr. Sarah Johnson",
    title: "Senior Education Consultant",
    specialization: "USA & Canada Universities",
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b6c5?w=100&h=100&fit=crop&crop=face&auto=format",
    rating: 4.9,
    sessions: "2000+"
  },
  {
    name: "Michael Chen",
    title: "Visa & Immigration Expert",
    specialization: "UK & Australia Programs",
    experience: "12+ years", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format",
    rating: 4.8,
    sessions: "1500+"
  },
  {
    name: "Dr. Priya Patel",
    title: "STEM Programs Specialist",
    specialization: "Engineering & Technology",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format",
    rating: 4.9,
    sessions: "1200+"
  }
];

export default function Consultation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentEducation: "",
    interestedCountries: [] as string[],
    preferredProgram: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    consultationMode: "",
    preferredConsultant: "",
    message: "",
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Consultation booked:", formData);
      setIsSubmitting(false);
      alert("Consultation booked successfully! We'll send you a confirmation email shortly.");
    }, 1000);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCountrySelect = (country: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interestedCountries: checked 
        ? [...prev.interestedCountries, country]
        : prev.interestedCountries.filter(c => c !== country)
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Book Your Consultation
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get personalized guidance from our expert counselors and take the first step towards your international education journey
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Consultation Types */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-navy mb-6">Choose Your Consultation</h2>
            <div className="space-y-4">
              {consultationTypes.map((type) => (
                <Card 
                  key={type.id} 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    formData.consultationType === type.id ? 'ring-2 ring-navy border-navy' : ''
                  } ${type.popular ? 'border-gold border-2' : ''}`}
                  onClick={() => handleInputChange('consultationType', type.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-navy">{type.title}</h3>
                        <div className="text-sm text-slate-600 flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {type.duration}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-navy">{type.price}</div>
                        {type.popular && (
                          <div className="text-xs bg-gold text-navy px-2 py-1 rounded">Popular</div>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">{type.description}</p>
                    <div className="space-y-1">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-slate-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Consultation Modes */}
            <div className="mt-8">
              <h3 className="font-semibold text-navy mb-4">Consultation Mode</h3>
              <div className="space-y-2">
                {[
                  { id: "video", label: "Video Call", icon: Video },
                  { id: "phone", label: "Phone Call", icon: Phone },
                  { id: "office", label: "In-Person (Office)", icon: User }
                ].map((mode) => {
                  const IconComponent = mode.icon;
                  return (
                    <Card 
                      key={mode.id}
                      className={`cursor-pointer transition-all duration-300 ${
                        formData.consultationMode === mode.id ? 'ring-2 ring-navy border-navy' : ''
                      }`}
                      onClick={() => handleInputChange('consultationMode', mode.id)}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center">
                          <IconComponent className="h-5 w-5 text-navy mr-3" />
                          <span className="font-medium text-navy">{mode.label}</span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">Book Your Session</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div>
                    <Label htmlFor="currentEducation">Current Education Level *</Label>
                    <Select onValueChange={(value) => handleInputChange("currentEducation", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your current education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">High School</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="professional">Professional Degree</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="preferredProgram">Preferred Program *</Label>
                    <Select onValueChange={(value) => handleInputChange("preferredProgram", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preferred program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD Program</SelectItem>
                        <SelectItem value="diploma">Diploma/Certificate</SelectItem>
                        <SelectItem value="foundation">Foundation Program</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Interested Countries */}
                  <div>
                    <Label>Interested Countries *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {["USA", "UK", "Canada", "Australia", "Germany", "Singapore"].map((country) => (
                        <div key={country} className="flex items-center space-x-2">
                          <Checkbox
                            id={country}
                            checked={formData.interestedCountries.includes(country)}
                            onCheckedChange={(checked) => handleCountrySelect(country, checked as boolean)}
                          />
                          <Label htmlFor={country} className="text-sm">{country}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Consultant */}
                  <div>
                    <Label>Preferred Consultant (Optional)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                      {consultants.map((consultant) => (
                        <Card 
                          key={consultant.name}
                          className={`cursor-pointer transition-all duration-300 ${
                            formData.preferredConsultant === consultant.name ? 'ring-2 ring-navy border-navy' : ''
                          }`}
                          onClick={() => handleInputChange('preferredConsultant', consultant.name)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3 mb-2">
                              <img
                                src={consultant.image}
                                alt={consultant.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <div className="flex-1">
                                <h4 className="font-semibold text-navy text-sm">{consultant.name}</h4>
                                <p className="text-xs text-slate-600">{consultant.title}</p>
                              </div>
                            </div>
                            <div className="text-xs text-slate-600 space-y-1">
                              <div>{consultant.specialization}</div>
                              <div className="flex items-center justify-between">
                                <span>{consultant.experience}</span>
                                <div className="flex items-center">
                                  <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                                  {consultant.rating}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredDate">Preferred Date *</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTime">Preferred Time *</Label>
                      <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <Label htmlFor="message">Additional Information (Optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      placeholder="Tell us about your specific goals, concerns, or any questions you have..."
                    />
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked)}
                    />
                    <Label htmlFor="terms" className="text-sm text-slate-600">
                      I agree to the Terms of Service and Privacy Policy. I consent to being contacted by StudyBridge regarding my consultation.
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-navy hover:bg-navy/90 text-white py-3"
                    disabled={isSubmitting || !formData.agreeToTerms}
                  >
                    {isSubmitting ? "Booking Consultation..." : "Book Consultation"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help Booking?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Our support team is here to assist you with any questions about booking your consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-6 py-3">
              <Phone className="h-4 w-4 mr-2" />
              Call Us: +1 (555) 123-4567
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-6 py-3">
              <MessageCircle className="h-4 w-4 mr-2" />
              Live Chat Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}