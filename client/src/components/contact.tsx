import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock, Twitter, Linkedin, AlertTriangle } from "lucide-react";
import type { InsertContactInquiry } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredCountry: "",
    subject: "",
    message: "",
    agreeToReceiveComms: false,
  });

  const contactMutation = useMutation({
    mutationFn: async (data: any) => {
      // Convert form data to match backend schema
      const contactData: InsertContactInquiry = {
        firstName: data.fullName.split(' ')[0] || data.fullName,
        lastName: data.fullName.split(' ').slice(1).join(' ') || '',
        email: data.email,
        phone: data.phone,
        destination: data.preferredCountry,
        message: `Subject: ${data.subject}\n\n${data.message}`,
      };
      const response = await apiRequest("POST", "/api/contact", contactData);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        preferredCountry: "",
        subject: "",
        message: "",
        agreeToReceiveComms: false,
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToReceiveComms) {
      toast({
        title: "Please confirm",
        description: "You must agree to receive communications to proceed.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Panel - Teal Contact Information */}
          <div className="bg-teal-500 text-white p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
              <p className="text-teal-100 mb-8 text-lg">
                Ready to start your study abroad journey? Get in touch with our expert consultants today.
              </p>

              <div className="space-y-6">
                {/* Call Us */}
                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                    <p className="text-teal-100">+61 420 959 371</p>
                    <p className="text-teal-200 text-sm">Mon-Fri: 9AM-6PM AEST</p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                    <p className="text-teal-100">Application@dtrconsultation.com</p>
                    <p className="text-teal-200 text-sm">We reply within 24 hours</p>
                  </div>
                </div>

                {/* Visit Our Office */}
                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Visit Our Office</h4>
                    <p className="text-teal-100">Tower One, International Towers</p>
                    <p className="text-teal-100">100 Barangaroo Ave</p>
                    <p className="text-teal-100">Barangaroo NSW 2000</p>
                    <p className="text-teal-100">Sydney, Australia</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Office Hours</h4>
                    <p className="text-teal-100">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-teal-100">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-teal-100">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-teal-200 text-sm mb-4">Follow us on social media</p>
              <div className="flex space-x-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-lg hover:bg-opacity-30 transition-all cursor-pointer">
                  <Twitter className="h-5 w-5" />
                </div>
                <div className="bg-white bg-opacity-20 p-2 rounded-lg hover:bg-opacity-30 transition-all cursor-pointer">
                  <Twitter className="h-5 w-5" />
                </div>
                <div className="bg-white bg-opacity-20 p-2 rounded-lg hover:bg-opacity-30 transition-all cursor-pointer">
                  <Linkedin className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - White Contact Form */}
          <div className="p-8 lg:p-12 bg-white flex flex-col justify-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              {/* Demo Form Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-800 text-sm">
                    <strong>Demo Form:</strong> This is a sample contact form for demonstration purposes. In a real 
                    implementation, messages would be sent to Application@dtrconsultation.com
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <Label htmlFor="fullName" className="text-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="mt-2 border-gray-300"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="mt-2 border-gray-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+61 xxx xxx xxx"
                      className="mt-2 border-gray-300"
                    />
                  </div>

                  {/* Preferred Country */}
                  <div>
                    <Label htmlFor="preferredCountry" className="text-gray-700 font-medium">
                      Preferred Country
                    </Label>
                    <Select value={formData.preferredCountry} onValueChange={(value) => handleInputChange("preferredCountry", value)}>
                      <SelectTrigger className="mt-2 border-gray-300">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="germany">Germany</SelectItem>
                        <SelectItem value="singapore">Singapore</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <Label htmlFor="subject" className="text-gray-700 font-medium">
                    Subject *
                  </Label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                    <SelectTrigger className="mt-2 border-gray-300">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student-visa">Student Visa Inquiry</SelectItem>
                      <SelectItem value="university-application">University Application</SelectItem>
                      <SelectItem value="course-selection">Course Selection</SelectItem>
                      <SelectItem value="documentation">Documentation Help</SelectItem>
                      <SelectItem value="consultation">Consultation Booking</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your study abroad goals, preferred courses, or any specific questions you have..."
                    rows={4}
                    required
                    className="mt-2 border-gray-300"
                  />
                </div>

                {/* Agreement Checkbox */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agree"
                    checked={formData.agreeToReceiveComms}
                    onCheckedChange={(checked) => handleInputChange("agreeToReceiveComms", checked)}
                    className="mt-1"
                  />
                  <Label htmlFor="agree" className="text-sm text-gray-600 leading-relaxed">
                    I agree to receive communications from DTR Consultation regarding my inquiry and study abroad opportunities.
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 text-lg font-semibold"
                >
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  We typically respond within 24 hours during business days
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
