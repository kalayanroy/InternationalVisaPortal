import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Scale, Shield, Calendar, FileText, Globe, Phone, Mail, MapPin } from "lucide-react";

export default function MigrationService() {
  const employerServices = [
    { name: "Employer Nomination Scheme", tag: "POPULAR", color: "bg-blue-100 text-blue-800" },
    { name: "Labour Agreement", tag: "TRENDING", color: "bg-green-100 text-green-800" },
    { name: "Regional Sponsored Migration Scheme", tag: "", color: "" },
    { name: "Temporary Skill Shortage", tag: "POPULAR", color: "bg-blue-100 text-blue-800" },
    { name: "Global Talent Program", tag: "", color: "" },
    { name: "Business Innovation and Investment", tag: "", color: "" },
    { name: "Regional Skilled Migration", tag: "", color: "" },
    { name: "Skilled Work - Skilled Work Short Stay", tag: "", color: "" },
    { name: "Temporary Graduate Visa", tag: "", color: "" },
    { name: "Priority Allocation List", tag: "", color: "" }
  ];

  const skilledMigrationServices = [
    { name: "General Skilled Migration", tag: "POPULAR", color: "bg-blue-100 text-blue-800" },
    { name: "Points Test", tag: "", color: "" },
    { name: "Skilled Independent Visa", tag: "", color: "" },
    { name: "Skilled Nominated Visa", tag: "", color: "" },
    { name: "Skilled Work Regional", tag: "", color: "" },
    { name: "Graduate Temporary Visa", tag: "", color: "" },
    { name: "Regional Skilled Work", tag: "", color: "" },
    { name: "Skilled Independent in Priority", tag: "", color: "" }
  ];

  const legalAssistanceServices = [
    { name: "Visa Cancellation", tag: "", color: "" },
    { name: "Administrative Appeals Tribunal", tag: "POPULAR", color: "bg-blue-100 text-blue-800" },
    { name: "Federal Circuit Court", tag: "TRENDING", color: "bg-green-100 text-green-800" },
    { name: "Migration Review Tribunal", tag: "", color: "" },
    { name: "Character Issues", tag: "", color: "" },
    { name: "Deportation", tag: "", color: "" }
  ];

  const childrenVisaServices = [
    { name: "Adoption (Hague)", tag: "POPULAR", color: "bg-blue-100 text-blue-800" },
    { name: "Child Visa", tag: "", color: "" },
    { name: "Dependent Child Visa", tag: "TRENDING", color: "bg-green-100 text-green-800" },
    { name: "Orphan Relative Visa", tag: "", color: "" },
    { name: "Remaining Relative Visa", tag: "", color: "" },
    { name: "Contributory Child Visa", tag: "", color: "" },
    { name: "Skilled Migration", tag: "", color: "" },
    { name: "Student Visa", tag: "", color: "" },
    { name: "Working Holiday", tag: "", color: "" }
  ];

  const parentPartnerServices = [
    { name: "Aged Parent (Resident)", tag: "POPULAR", color: "bg-blue-100 text-blue-800" },
    { name: "Contributory Parent", tag: "", color: "" },
    { name: "Parent Visa", tag: "TRENDING", color: "bg-green-100 text-green-800" },
    { name: "Prospective Marriage", tag: "", color: "" },
    { name: "Partner Visa", tag: "", color: "" },
    { name: "Prospective Parent", tag: "", color: "" },
    { name: "Spouse Visa", tag: "", color: "" }
  ];

  const otherServices = [
    { name: "Permanent Residence & Citizenship", tag: "POPULAR", color: "bg-blue-100 text-blue-800" },
    { name: "Business Visa", tag: "", color: "" },
    { name: "Student Visa", tag: "TRENDING", color: "bg-green-100 text-green-800" },
    { name: "Visitor Visa", tag: "", color: "" },
    { name: "Working Holiday/Working Visa", tag: "", color: "" },
    { name: "Resident Status", tag: "", color: "" }
  ];

  const visitorVisaServices = [
    { name: "Visitor Visa 600", tag: "POPULAR", color: "bg-blue-100 text-blue-800" },
    { name: "Electronic Travel Authority", tag: "", color: "" },
    { name: "Visitor Visa 651", tag: "TRENDING", color: "bg-green-100 text-green-800" }
  ];

  const familyLawServices = [
    "Adoption",
    "Surrogacy/Family Law Court Orders",
    "Divorce/Property Settlement",
    "Binding Financial Agreements",
    "Parenting Orders",
    "Child Support",
    "Family Law Court Litigation",
    "Consent Orders",
    "Domestic Violence Protection",
    "Domestic Violence",
    "Law and Protection Lawyer"
  ];

  const criminalOffencesServices = [
    "AVO (apprehended violence order)",
    "Fraud Charges",
    "Assault Offences",
    "Assault Offences",
    "Drink Driving",
    "Assault Charges",
    "Assault Offences",
    "Drug Charges and Offences",
    "Drink Driving and Intimidation",
    "Assault Help Around",
    "Drink Driving Offences",
    "Assault Offences",
    "Drug Charges and Offences",
    "Drink Driving and Intimidation",
    "Violent Offences",
    "Sexual Offences",
    "Drug Offences"
  ];

  const trafficLawServices = [
    "Dangerous Driving",
    "Licence Suspension",
    "Drink Driving",
    "Negligent Driving",
    "Advice Penalty",
    "Driving Offences Appeal",
    "Drink Suspension",
    "Driving Recklessly",
    "Liability for Accident",
    "Driving WITHOUT Suspended",
    "Appeal Current",
    "Habitual Offender Get Services",
    "Speeding and Steep Racing"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Migration & Legal Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Expert guidance for your Australian immigration and legal needs
          </p>
          
          {/* Expert Profile */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
                <Scale className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Ishraque Ahmad</h3>
            <p className="text-lg mb-1">Senior Immigration & Legal Consultant</p>
            <p className="text-sm mb-2">Licensed Australian Lawyer</p>
            <p className="text-sm">Registered Migration Agent - MARN 1234567</p>
          </div>
        </div>
      </div>

      {/* Immigration Law Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Immigration Law Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive immigration solutions for individuals and employers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Employers */}
          <Card className="border-teal-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700 flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Employers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {employerServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{service.name}</span>
                    </div>
                    {service.tag && (
                      <Badge className={`text-xs ${service.color}`}>
                        {service.tag}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skilled Migration */}
          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-orange-700 flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                Skilled Migration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {skilledMigrationServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{service.name}</span>
                    </div>
                    {service.tag && (
                      <Badge className={`text-xs ${service.color}`}>
                        {service.tag}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Legal Assistance */}
          <Card className="border-red-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-red-700 flex items-center">
                <Scale className="h-6 w-6 mr-2" />
                Legal Assistance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {legalAssistanceServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{service.name}</span>
                    </div>
                    {service.tag && (
                      <Badge className={`text-xs ${service.color}`}>
                        {service.tag}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Children Visa */}
          <Card className="border-purple-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-purple-700 flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Children Visa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {childrenVisaServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{service.name}</span>
                    </div>
                    {service.tag && (
                      <Badge className={`text-xs ${service.color}`}>
                        {service.tag}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Parents/Partners */}
          <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-indigo-700 flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Parents / Partners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {parentPartnerServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{service.name}</span>
                    </div>
                    {service.tag && (
                      <Badge className={`text-xs ${service.color}`}>
                        {service.tag}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Other Services */}
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-green-700 flex items-center">
                <FileText className="h-6 w-6 mr-2" />
                Other Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {otherServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{service.name}</span>
                    </div>
                    {service.tag && (
                      <Badge className={`text-xs ${service.color}`}>
                        {service.tag}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Visitor Visa */}
          <Card className="border-cyan-200 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl text-cyan-700 flex items-center">
                <Globe className="h-6 w-6 mr-2" />
                Visitor Visa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {visitorVisaServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-cyan-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{service.name}</span>
                    </div>
                    {service.tag && (
                      <Badge className={`text-xs ${service.color}`}>
                        {service.tag}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Legal Services */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal representation across multiple practice areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Family Law */}
            <Card className="border-pink-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-pink-700 flex items-center">
                  <Users className="h-6 w-6 mr-2" />
                  Family Law
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {familyLawServices.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Criminal Offences */}
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-red-700 flex items-center">
                  <Shield className="h-6 w-6 mr-2" />
                  Criminal Offences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {criminalOffencesServices.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Traffic Law */}
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-700 flex items-center">
                  <Scale className="h-6 w-6 mr-2" />
                  Traffic Law
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {trafficLawServices.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get Professional Legal Assistance</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Contact our experienced team for a consultation tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone Consultation</h3>
              <p className="text-white/90">+61 2 1234 5678</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-white/90">info@migration-legal.com.au</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Office Location</h3>
              <p className="text-white/90">Sydney, Australia</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-white text-teal-600 hover:bg-white/90 px-8 py-3 text-lg font-semibold"
            >
              Schedule Your Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}