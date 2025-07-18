import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CheckCircle,
  Users,
  Scale,
  Shield,
  Calendar,
  FileText,
  Globe,
  Phone,
  Mail,
  MapPin,
  X,
} from "lucide-react";
import Header from "@/components/header";
import { useState } from "react";

export default function MigrationService() {
  const [isENSModalOpen, setIsENSModalOpen] = useState(false);
  const [isNIVModalOpen, setIsNIVModalOpen] = useState(false);

  const employerServices = [
    {
      name: "Employer Nomination Scheme",
      tag: "POPULAR",
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Labour Agreement",
      tag: "TRENDING",
      color: "bg-green-100 text-green-800",
    },
    { name: "Regional Sponsored Migration Scheme", tag: "", color: "" },
    {
      name: "Temporary Skill Shortage",
      tag: "POPULAR",
      color: "bg-blue-100 text-blue-800",
    },
    { name: "Global Talent Program", tag: "", color: "" },
    { name: "Business Innovation and Investment", tag: "", color: "" },
    { name: "Regional Skilled Migration", tag: "", color: "" },
    { name: "Skilled Work - Skilled Work Short Stay", tag: "", color: "" },
    { name: "Temporary Graduate Visa", tag: "", color: "" },
    { name: "Priority Allocation List", tag: "", color: "" },
  ];

  const skilledMigrationServices = [
    {
      name: "General Skilled Migration",
      tag: "POPULAR",
      color: "bg-blue-100 text-blue-800",
    },
    { name: "Points Test", tag: "", color: "" },
    { name: "Skilled Independent Visa", tag: "", color: "" },
    { name: "Skilled Nominated Visa", tag: "", color: "" },
    { name: "Skilled Work Regional", tag: "", color: "" },
    { name: "Graduate Temporary Visa", tag: "", color: "" },
    { name: "Regional Skilled Work", tag: "", color: "" },
    { name: "Skilled Independent in Priority", tag: "", color: "" },
  ];

  const legalAssistanceServices = [
    { name: "Visa Cancellation", tag: "", color: "" },
    {
      name: "Administrative Appeals Tribunal",
      tag: "POPULAR",
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Federal Circuit Court",
      tag: "TRENDING",
      color: "bg-green-100 text-green-800",
    },
    { name: "Migration Review Tribunal", tag: "", color: "" },
    { name: "Character Issues", tag: "", color: "" },
    { name: "Deportation", tag: "", color: "" },
  ];

  const childrenVisaServices = [
    {
      name: "Adoption (Hague)",
      tag: "POPULAR",
      color: "bg-blue-100 text-blue-800",
    },
    { name: "Child Visa", tag: "", color: "" },
    {
      name: "Dependent Child Visa",
      tag: "TRENDING",
      color: "bg-green-100 text-green-800",
    },
    { name: "Orphan Relative Visa", tag: "", color: "" },
    { name: "Remaining Relative Visa", tag: "", color: "" },
    { name: "Contributory Child Visa", tag: "", color: "" },
    { name: "Skilled Migration", tag: "", color: "" },
    { name: "Student Visa", tag: "", color: "" },
    { name: "Working Holiday", tag: "", color: "" },
  ];

  const parentPartnerServices = [
    {
      name: "Aged Parent (Resident)",
      tag: "POPULAR",
      color: "bg-blue-100 text-blue-800",
    },
    { name: "Contributory Parent", tag: "", color: "" },
    {
      name: "Parent Visa",
      tag: "TRENDING",
      color: "bg-green-100 text-green-800",
    },
    { name: "Prospective Marriage", tag: "", color: "" },
    { name: "Partner Visa", tag: "", color: "" },
    { name: "Prospective Parent", tag: "", color: "" },
    { name: "Spouse Visa", tag: "", color: "" },
  ];

  const otherServices = [
    {
      name: "Permanent Residence & Citizenship",
      tag: "POPULAR",
      color: "bg-blue-100 text-blue-800",
    },
    { name: "Business Visa", tag: "", color: "" },
    {
      name: "Student Visa",
      tag: "TRENDING",
      color: "bg-green-100 text-green-800",
    },
    { name: "Visitor Visa", tag: "", color: "" },
    { name: "Working Holiday/Working Visa", tag: "", color: "" },
    { name: "Resident Status", tag: "", color: "" },
    {
      name: "National Innovation Visa",
      tag: "NEW",
      color: "bg-purple-100 text-purple-800",
    },
  ];

  const visitorVisaServices = [
    {
      name: "Visitor Visa 600",
      tag: "POPULAR",
      color: "bg-blue-100 text-blue-800",
    },
    { name: "Electronic Travel Authority", tag: "", color: "" },
    {
      name: "Visitor Visa 651",
      tag: "TRENDING",
      color: "bg-green-100 text-green-800",
    },
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
    "Law and Protection Lawyer",
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
    "Drug Offences",
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
    "Speeding and Steep Racing",
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-20 mt-20">
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
              <p className="text-lg mb-1">
                Senior Immigration & Legal Consultant
              </p>
              <p className="text-sm mb-2">Licensed Australian Lawyer</p>
              <p className="text-sm">
                Registered Migration Agent - MARN 1234567
              </p>
            </div>
          </div>
        </div>

        {/* Immigration Law Services */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Immigration Law Services
            </h2>
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
                    <div
                      key={index}
                      className={`flex items-center justify-between ${
                        service.name === "Employer Nomination Scheme"
                          ? "cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                          : ""
                      }`}
                      onClick={() => {
                        if (service.name === "Employer Nomination Scheme") {
                          setIsENSModalOpen(true);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">
                          {service.name}
                        </span>
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
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">
                          {service.name}
                        </span>
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
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">
                          {service.name}
                        </span>
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
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">
                          {service.name}
                        </span>
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
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">
                          {service.name}
                        </span>
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
                    <div
                      key={index}
                      className={`flex items-center justify-between ${
                        service.name === "National Innovation Visa" 
                          ? "cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors" 
                          : ""
                      }`}
                      onClick={() => 
                        service.name === "National Innovation Visa" 
                          ? setIsNIVModalOpen(true) 
                          : undefined
                      }
                    >
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">
                          {service.name}
                        </span>
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
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-cyan-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">
                          {service.name}
                        </span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Legal Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive legal representation across multiple practice
                areas
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
              <h2 className="text-3xl font-bold mb-4">
                Get Professional Legal Assistance
              </h2>
              <p className="text-xl max-w-3xl mx-auto">
                Contact our experienced team for a consultation tailored to your
                specific needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Phone Consultation
                </h3>
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

      {/* Employer Nomination Scheme Modal */}
      <Dialog open={isENSModalOpen} onOpenChange={setIsENSModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-blue-600 mb-4">
              Employer Nomination Scheme (Subclass 186) Visa
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Stream 1: Direct Entry Stream */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                #1. Direct Entry Stream
              </h3>
              <p className="text-gray-700 mb-4">
                This stream is designed for skilled workers whose occupations
                are on the eligible skilled occupation list.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 max-w-md">
                  <h4 className="font-semibold text-blue-600 mb-2">
                    Eligibility:
                  </h4>
                  <p className="text-sm text-gray-600 text-justify">
                    Applicants need at least three years of relevant work
                    experience and a positive skills assessment unless exempt.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 max-w-md">
                  <h4 className="font-semibold text-blue-600 mb-2">
                    Stay Duration:
                  </h4>
                  <p className="text-sm text-gray-600">Permanent.</p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 max-w-md">
                  <h4 className="font-semibold text-blue-600 mb-2">
                    Benefits:
                  </h4>
                  <p className="text-sm text-gray-600 text-justify">
                    Provides a pathway to permanent residency, the ability to
                    work and study indefinitely, and the option to sponsor
                    family members.
                  </p>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-md">
                <p className="text-sm italic text-blue-800">
                  This is ideal for skilled professionals ready to make
                  Australia their long-term home.
                </p>
              </div>
            </div>

            {/* Stream 2: Labour Agreement Stream */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-600 mb-4">
                #2. Labour Agreement Stream
              </h3>
              <p className="text-gray-700 mb-4">
                This stream supports workers employed under a labour agreement
                tailored to specific workforce shortages.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 max-w-md">
                  <h4 className="font-semibold text-green-600 mb-2">
                    Eligibility:
                  </h4>
                  <p className="text-sm text-gray-600">
                    Workers must meet the age, skills, and English language
                    requirements specified in the agreement.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 max-w-md">
                  <h4 className="font-semibold text-green-600 mb-2">
                    Stay Duration:
                  </h4>
                  <p className="text-sm text-gray-600">Permanent.</p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 max-w-md">
                  <h4 className="font-semibold text-green-600 mb-2">
                    Benefits:
                  </h4>
                  <p className="text-sm text-gray-600">
                    Offers flexibility for niche industries or roles where local
                    talent is unavailable, ensuring employers access specialized
                    skills.
                  </p>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-md">
                <p className="text-sm italic text-green-800">
                  For employers facing unique challenges, this stream fills
                  workforce gaps effectively.
                </p>
              </div>
            </div>

            {/* Stream 3: Temporary Residence Transition Stream */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-600 mb-4">
                #3. Temporary Residence Transition Stream
              </h3>
              <p className="text-gray-700 mb-4">
                This stream is for workers already in Australia on specific
                temporary visas, such as the 457 or TSS visa, who have worked
                for their nominating employer for a specified period.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 max-w-md">
                  <h4 className="font-semibold text-purple-600 mb-2">
                    Eligibility:
                  </h4>
                  <p className="text-sm text-gray-600">
                    Applicants must have worked full-time with their sponsoring
                    employer for at least two years. The employer's nomination
                    should be approved within six months of applying.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 max-w-md">
                  <h4 className="font-semibold text-purple-600 mb-2">
                    Stay Duration:
                  </h4>
                  <p className="text-sm text-gray-600">Permanent.</p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 max-w-md">
                  <h4 className="font-semibold text-purple-600 mb-2">
                    Benefits:
                  </h4>
                  <p className="text-sm text-gray-600">
                    Enables continuity for employees and businesses, allowing
                    applicants to live and work permanently while reuniting with
                    family.
                  </p>
                </div>
              </div>

              <div className="space-y-3 mt-4 bg-white shadow-md rounded-xl p-4 border border-gray-200">
                <h4 className="font-semibold text-purple-600">
                  Detailed Requirements:
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>
                    <strong>• Visa Status:</strong> You must hold a Subclass
                    457, TSS, or related Bridging visa A, B, or C
                  </div>
                  <div>
                    <strong>• Work Duration:</strong> You must usually have
                    worked for your employer full-time for at least two years
                    while holding your temporary visa
                  </div>
                  <div>
                    <strong>• Nomination Approval:</strong> Your employer's
                    nomination must be approved within six months before lodging
                    your visa application
                  </div>
                  <div>
                    <strong>• English Proficiency:</strong> Competent English
                    skills are required unless exempt
                  </div>
                  <div>
                    <strong>• Health and Character Requirements:</strong> You
                    must meet Australia's health and character standards
                  </div>
                </div>
              </div>

              <div className="bg-purple-100 p-4 rounded-md mt-4">
                <p className="text-sm italic text-purple-800">
                  This stream is perfect for workers already contributing to
                  Australian industries who wish to stay permanently.
                </p>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Eligibility Criteria
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 max-w-md">
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">
                    Direct Entry Stream Requirements:
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        Occupation must be on the eligible skilled occupations
                        list
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        At least 3 years of relevant work experience (unless
                        exempt)
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Positive skills assessment (unless exempt)</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Australian employer nomination required</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Competent English language skills</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Under 45 years old (unless exempt)</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Meet health and character requirements</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 max-w-md">
                  <h4 className="text-lg font-semibold text-green-600 mb-4">
                    Labour Agreement Stream Requirements:
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Work for employer with labour agreement</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Employer nomination for specified role</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Skills and age requirements per agreement</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>English language requirements per agreement</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Meet health and character standards</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-md mt-6">
                <p className="text-sm text-gray-700">
                  Each stream caters to different pathways, so it's essential to
                  understand which one applies to your situation. If you're
                  unsure about the requirements, seeking professional advice can
                  help clarify the process and ensure your application is
                  accurate.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions (FAQ)
              </h3>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Q: What are the three streams of the Subclass 186 visa?
                  </h4>
                  <p className="text-sm text-gray-600">
                    A: The three streams are Direct Entry, Labour Agreement, and
                    Temporary Residence Transition. Each has unique requirements
                    tailored to different circumstances.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Q: How much does the Subclass 186 visa cost?
                  </h4>
                  <p className="text-sm text-gray-600">
                    A: The application fee starts at AUD 4,770. Additional costs
                    may apply for health checks, police certificates, or
                    dependents.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Q: Can I include my family members in this visa?
                  </h4>
                  <p className="text-sm text-gray-600">
                    A: Yes, you can include eligible family members in your
                    application, providing them with permanent residency as
                    well.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Q: Is this visa permanent?
                  </h4>
                  <p className="text-sm text-gray-600">
                    A: Yes, the Subclass 186 visa grants permanent residency,
                    allowing you to stay in Australia indefinitely.
                  </p>
                </div>

                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Q: Do I need an employer nomination for this visa?
                  </h4>
                  <p className="text-sm text-gray-600">
                    A: Yes, nomination by an eligible Australian employer is a
                    mandatory requirement for all streams of this visa.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Q: How long does the visa processing take?
                  </h4>
                  <p className="text-sm text-gray-600">
                    A: Processing times vary based on factors like the stream
                    and the volume of applications. Check the visa processing
                    time guide for estimates.
                  </p>
                </div>
              </div>

              <div className="bg-blue-600 text-white p-6 rounded-lg mt-8">
                <div className="text-center">
                  <p className="text-lg mb-4">
                    Each stream under the Employer Nomination Scheme (Subclass
                    186) offers clear pathways for skilled professionals and
                    their families to settle in Australia while providing
                    employers with reliable access to global talent.
                  </p>
                  <Button
                    className="bg-white text-blue-600 hover:bg-gray-100"
                    onClick={() => setIsENSModalOpen(false)}
                  >
                    Contact Us for More Information
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* National Innovation Visa Modal */}
      <Dialog open={isNIVModalOpen} onOpenChange={setIsNIVModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="border-b pb-4">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold text-green-700">
                National Innovation Visa (Subclass 858)
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsNIVModalOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>
          
          <div className="space-y-8 py-6">
            {/* Introduction */}
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4">
                What Is the National Innovation Visa?
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  The National Innovation visa (Subclass 858) is a permanent residency visa for individuals with an 
                  internationally recognised record of exceptional achievement in a specific area. It replaced the Global Talent 
                  visa in December 2024.
                </p>
                <p>
                  It's designed for the high achievers—the kind of people who've made a significant impact in their field and are 
                  ready to contribute their talents to Australia.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="italic text-green-800 font-medium">
                    This visa is not for everyone. It's for those who've gone above and beyond, and have the recognition to prove it.
                  </p>
                </div>
              </div>
            </div>

            {/* At a Glance Table */}
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4">
                National Innovation Visa (Subclass 858) – At a Glance
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="border border-gray-300 p-3 text-left font-semibold text-green-800">Facts</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold text-green-800">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Eligible Fields</td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>– A recognised profession</li>
                          <li>– Sport</li>
                          <li>– The arts</li>
                          <li>– Academia and research</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Who Can Apply</td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>– Lodge an Expression of Interest (EOI)</li>
                          <li>– Wait for invitation to apply</li>
                          <li>– Apply within 60 days of invitation</li>
                          <li>– Apply from inside or outside Australia (not in immigration clearance)</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Nominator Requirements</td>
                      <td className="border border-gray-300 p-3">
                        <div className="space-y-2">
                          <p>– Must have a national reputation in your field</p>
                          <p>– Can be:</p>
                          <ul className="ml-4 space-y-1">
                            <li>• Australian citizen</li>
                            <li>• Permanent resident</li>
                            <li>• Eligible NZ citizen</li>
                            <li>• Australian organisation</li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Visa Benefits</td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>– Live permanently in Australia</li>
                          <li>– Work and study freely</li>
                          <li>– Access Medicare</li>
                          <li>– Sponsor eligible relatives</li>
                          <li>– Travel for 5 years</li>
                          <li>– Pathway to Australian citizenship</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Required Documents</td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>– Proof of international achievements</li>
                          <li>– Career and qualification details</li>
                          <li>– Nominator's statement</li>
                          <li>– ID and current visa documents (if applicable)</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Eligible Fields */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Eligible Fields</h3>
              <p className="text-gray-700 mb-4">
                To apply for this visa, you must have an exceptional record in one of the following areas:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span>A recognised profession</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span>Sport</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span>The arts</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span>Academia and research</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg mt-4">
                <p className="italic text-blue-800">
                  Your achievements must be recognised not just locally, but internationally.
                </p>
              </div>
            </div>

            {/* Who Can Apply */}
            <div>
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                Who Can Apply for the National Innovation Visa?
              </h3>
              <p className="text-gray-700 mb-4">
                Not everyone can just fill out a form and send it off. The process starts with an invitation from the Department 
                of Home Affairs.
              </p>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-3">Here's what you need:</h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>You must lodge an Expression of Interest (EOI)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>You must wait to be invited to apply</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>Once invited, you have 60 days to submit your application</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>You can apply from inside or outside Australia, as long as you're not in immigration clearance at the time</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>You must have a nominator with a national reputation in your area of talent</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-purple-700 mb-3">Your nominator can be:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span>An Australian citizen</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span>A permanent resident</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span>An eligible New Zealand citizen</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span>An Australian organisation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg mt-4">
                <p className="italic text-purple-800">
                  Most importantly, your track record of achievement must be ongoing. It's not about one good project years 
                  ago—it's about consistent excellence.
                </p>
              </div>
            </div>

            {/* What You Can Do */}
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-700 mb-4">What You Can Do With This Visa</h3>
              <p className="text-gray-700 mb-4">
                The National Innovation visa is one of the most generous pathways to live and work in Australia.
              </p>
              
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">With this visa, you can:</h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                    <span>Live permanently in Australia</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                    <span>Work and study freely</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                    <span>Enrol in Medicare</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                    <span>Sponsor eligible relatives to come to Australia</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                    <span>Travel in and out of the country for five years</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                    <span>If you meet the requirements, apply for Australian citizenship in the future</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-100 p-4 rounded-lg mt-4">
                <p className="italic text-orange-800">
                  It gives you stability and freedom to continue your work without limitations.
                </p>
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-700 mb-4">What Documents You'll Need</h3>
              <p className="text-gray-700 mb-4">Paperwork matters. A lot.</p>
              <p className="text-gray-700 mb-4">
                When it comes to the National Innovation visa, a strong application is built on clear, detailed proof of your 
                achievements and identity.
              </p>
              <p className="text-gray-700 mb-6">
                You can't just say you've done amazing things — you need to show it.
              </p>

              {/* Document Categories */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-red-700 mb-3">
                    1. Proof of international achievements
                  </h4>
                  <p className="text-gray-700 mb-3">
                    This is the most important part. The Department of Home Affairs wants to see that your work has been recognised 
                    worldwide.
                  </p>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="font-medium text-gray-800 mb-2">You can include:</p>
                    <div className="space-y-1">
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                        <span>Awards and honours</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                        <span>International press or media coverage</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                        <span>Invitations to speak at major events</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                        <span>Publications, patents, or research with global impact</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-700 mb-3">
                    2. Career and qualification details
                  </h4>
                  <p className="text-gray-700">
                    Share your career history — where you've worked, what you've done, and how long you've done it. Also include your 
                    qualifications, especially if they relate to your area of expertise.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-700 mb-3">
                    3. A nominator's statement
                  </h4>
                  <p className="text-gray-700">
                    Your nominator plays a key role. They need to write a detailed statement backing your achievements and reputation. This 
                    must come from someone (or an organisation) with a national reputation in your field.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-700 mb-3">
                    4. Personal documents
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Don't forget the basics. You'll need to prove your identity and visa status. This might include:
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                      <span>Passport or travel document</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                      <span>Birth certificate</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                      <span>Current Australian visa (if you're applying from inside the country)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-700 mb-3">
                    5. Other supporting material
                  </h4>
                  <p className="text-gray-700 mb-3">Depending on your field, you might also need:</p>
                  <div className="space-y-1">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                      <span>Portfolio of work</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                      <span>Reference letters</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                      <span>Links to published articles, performances, or exhibitions</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                      <span>Media mentions or interviews</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg mt-6 border-l-4 border-yellow-500">
                <p className="text-sm text-gray-700">
                  <strong>Expert tip:</strong> Remember — the more evidence, the better. But it must be relevant and clearly presented. If something's 
                  hard to understand or looks incomplete, it could delay things.
                </p>
              </div>

              <div className="bg-red-100 p-4 rounded-lg mt-4">
                <p className="italic text-red-800">
                  Not sure if your documents are enough? That's what we're here for.
                </p>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                FAQs About the National Innovation Visa
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Do I need to be in Australia to apply?
                  </h4>
                  <p className="text-gray-700">
                    A: No. You can be inside or outside Australia when you apply and when the visa is granted. You just can't 
                    be in immigration clearance at the time.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Can I include family members in my application?
                  </h4>
                  <p className="text-gray-700">
                    A: Yes, eligible family members can be included in your application. They can also enjoy the same 
                    benefits once the visa is granted.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: What if I'm not sure I meet the 'internationally recognised' criteria?
                  </h4>
                  <p className="text-gray-700">
                    A: We recommend booking a FREE consultation so we can assess your case. Every situation is different, 
                    and we'll give you clear advice based on your unique achievements.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Can CIA Lawyers help with gathering documents and submitting the EOI?
                  </h4>
                  <p className="text-gray-700">
                    A: Absolutely. We handle everything from checking your eligibility to preparing your application and 
                    working with your nominator.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: What if my application is refused?
                  </h4>
                  <p className="text-gray-700">
                    A: We can advise you on possible review options, depending on the reason for the refusal. Having expert 
                    legal help from the beginning reduces the risk of refusal.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-green-600 text-white p-6 rounded-lg">
              <div className="text-center">
                <p className="text-lg mb-4">
                  The National Innovation visa is designed for exceptional individuals who have made significant 
                  international contributions to their field and are ready to bring their talents to Australia.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-white text-green-600 hover:bg-gray-100">
                    <FileText className="h-4 w-4 mr-2" />
                    Apply Now
                  </Button>
                  <Button className="bg-yellow-500 text-green-900 hover:bg-yellow-400">
                    <Phone className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => setIsNIVModalOpen(false)}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
