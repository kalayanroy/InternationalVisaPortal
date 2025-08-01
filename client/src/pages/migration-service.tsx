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
  const [isLabourAgreementModalOpen, setIsLabourAgreementModalOpen] =
    useState(false);
  const [isSubclass494ModalOpen, setIsSubclass494ModalOpen] = useState(false);
  const [isSubclass400ModalOpen, setIsSubclass400ModalOpen] = useState(false);
  const [isSubclass407ModalOpen, setIsSubclass407ModalOpen] = useState(false);
  const [isSubclass482ModalOpen, setIsSubclass482ModalOpen] = useState(false);
  const [isNationalInnovationModalOpen, setIsNationalInnovationModalOpen] =
    useState(false);
  const [isSubclass190ModalOpen, setIsSubclass190ModalOpen] = useState(false);
  const [isSubclass491ModalOpen, setIsSubclass491ModalOpen] = useState(false);
  const [isSubclass189ModalOpen, setIsSubclass189ModalOpen] = useState(false);

  const employerServices = [
    {
      name: "Employer Nomination Scheme",
      tag: "POPULAR",
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "National Innovation Visa 858",
      tag: "TRENDING",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Labour Agreement",
      tag: "TRENDING",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Skilled Employer Sponsored Regional (Subclass 494) Visa",
      tag: "TRENDING",
      color: "bg-green-100 text-green-800",
    },
    { name: "Skills in Demand Visa (Subclass 482)", tag: "", color: "" },
    {
      name: "Temporary Work (Short Stay Specialist) Visa (Subclass 400)",
      tag: "POPULAR",
      color: "bg-blue-100 text-blue-800",
    },
    { name: "Training Visa (Subclass 407)", tag: "", color: "" },
  ];

  const skilledMigrationServices = [
    {
      name: "General Skilled Migration",
      tag: "POPULAR",
      color: "bg-blue-100 text-blue-800",
    },

    { name: "Skilled Nominated Visa (Subclass 190)", tag: "", color: "" },
    {
      name: "Skilled Work Regional (Provisional) Visa (Subclass 491)",
      tag: "",
      color: "",
    },
    { name: "Skilled Independent Visa (Subclass 189)", tag: "", color: "" },
    ,
  ];

  const legalAssistanceServices = [
    { name: "Visa Cancellation", tag: "", color: "" },
    {
      name: "Administrative Appeals Tribunal",
      tag: "POPULAR",
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Visa Refusals",
      tag: "TRENDING",
      color: "bg-green-100 text-green-800",
    },
    { name: "Judicial Review", tag: "", color: "" },
    { name: "Legal Assistance", tag: "", color: "" },
  ];

  const childrenVisaServices = [
    {
      name: "Adoption (Subclass 102) visa",
      tag: "POPULAR",
      color: "bg-blue-100 text-blue-800",
    },
    { name: "Child (subclass 101) visas", tag: "", color: "" },
    {
      name: "Child (subclass 802) visas",
      tag: "TRENDING",
      color: "bg-green-100 text-green-800",
    },
    { name: "Dependent Child (Subclass 445) visa", tag: "", color: "" },
    { name: "Orphan Relative (Subclass 117) visas", tag: "", color: "" },
    { name: "Orphan Relative (Subclass 837) visas", tag: "", color: "" },
  ];

  const parentPartnerServices = [
    {
      name: "Aged Parent (Subclass 804) visa",
      tag: "POPULAR",
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Contributory Aged Parent (Subclass 884) visas",
      tag: "",
      color: "",
    },
    {
      name: "Sponsored Parent (Subclass 870) visa",
      tag: "TRENDING",
      color: "bg-green-100 text-green-800",
    },
    { name: "Partner visa", tag: "", color: "" },
    { name: "Family visa", tag: "", color: "" },
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
    { name: "Graduates", tag: "", color: "" },
    { name: "Refugee and Humanitarian", tag: "", color: "" },
    { name: "Resident Return", tag: "", color: "" },
  ];

  const visitorVisaServices = [
    {
      name: "Visitor Visa 600",
      tag: "POPULAR",
      color: "bg-blue-100 text-blue-800",
    },
    { name: "Visitors Visa 601", tag: "", color: "" },
    {
      name: "Visitor Visa 651",
      tag: "TRENDING",
      color: "bg-green-100 text-green-800",
    },
  ];

  const familyLawServices = [
    "Adoption",
    "Breaching Family Law Court Orders",
    "Binding Financial Agreements",
    "Making an offer",
    "Child Custody",
    "Family Law Court Litigation",
    "Child Support",
    "Divorce proceedings",
    "Domestic Violence",
    "Care and Protection Lawyer",
  ];

  const criminalOffencesServices = [
    "AVOs (Apprehended violence order)",
    "Fraud Charges",
    "ARSON offences",
    "Move on Direction",
    "Assault Charges",
    "Bail",
    "Manslaughter and Murder",
    "Stalking and Intimidation",
    "Cruelty to Animals",
    "Public Order Offences",
    "Cybercrime",
    "Robbery",
    "Damage to Property",
    "Sexual Offences",
    "Drug Offences",
  ];

  const trafficLawServices = [
    "Dangerous Driving",
    "Mobile Phone Camera",
    "Drink Driving",
    "Negligent Driving",
    "Police Pursuits",
    "Driving Offences Appeal",
    "Predatory Driving",
    "Driving Recklessly",
    "Red Light Camera",
    "Driving Whilst Suspended",
    "Speed Camera",
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
                      className={`flex items-center justify-between  ${
                        service.name === "Employer Nomination Scheme" ||
                        service.name === "National Innovation Visa 858" ||
                        service.name === "Labour Agreement" ||
                        service.name ===
                          "Skilled Employer Sponsored Regional (Subclass 494) Visa" ||
                        service.name ===
                          "Temporary Work (Short Stay Specialist) Visa (Subclass 400)" ||
                        service.name === "Training Visa (Subclass 407)" ||
                        service.name === "Skills in Demand Visa (Subclass 482)"
                          ? "cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                          : ""
                      }`}
                      onClick={() => {
                        if (service.name === "Employer Nomination Scheme") {
                          setIsENSModalOpen(true);
                        } else if (
                          service.name === "National Innovation Visa 858"
                        ) {
                          setIsNationalInnovationModalOpen(true);
                        } else if (service.name === "Labour Agreement") {
                          setIsLabourAgreementModalOpen(true);
                        } else if (
                          service.name ===
                          "Skilled Employer Sponsored Regional (Subclass 494) Visa"
                        ) {
                          setIsSubclass494ModalOpen(true);
                        } else if (
                          service.name ===
                          "Temporary Work (Short Stay Specialist) Visa (Subclass 400)"
                        ) {
                          setIsSubclass400ModalOpen(true);
                        } else if (
                          service.name === "Training Visa (Subclass 407)"
                        ) {
                          setIsSubclass407ModalOpen(true);
                        } else if (
                          service.name ===
                          "Skills in Demand Visa (Subclass 482)"
                        ) {
                          setIsSubclass482ModalOpen(true);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700 underline">
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
                      className={`flex items-center justify-between ${
                        service.name ===
                          "Skilled Nominated Visa (Subclass 190)" ||
                        service.name ===
                          "Skilled Work Regional (Provisional) Visa (Subclass 491)" ||
                        service.name ===
                          "Skilled Independent Visa (Subclass 189)"
                          ? "cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                          : ""
                      }`}
                      onClick={() => {
                        if (
                          service.name ===
                          "Skilled Nominated Visa (Subclass 190)"
                        ) {
                          setIsSubclass190ModalOpen(true);
                        } else if (
                          service.name ===
                          "Skilled Work Regional (Provisional) Visa (Subclass 491)"
                        ) {
                          setIsSubclass491ModalOpen(true);
                        } else if (
                          service.name ===
                          "Skilled Independent Visa (Subclass 189)"
                        ) {
                          setIsSubclass189ModalOpen(true);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700 underline">
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
                      className="flex items-center justify-between"
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
                  The National Innovation visa (Subclass 858) is a permanent
                  residency visa for individuals with an internationally
                  recognised record of exceptional achievement in a specific
                  area. It replaced the Global Talent visa in December 2024.
                </p>
                <p>
                  It's designed for the high achievers—the kind of people who've
                  made a significant impact in their field and are ready to
                  contribute their talents to Australia.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="italic text-green-800 font-medium">
                    This visa is not for everyone. It's for those who've gone
                    above and beyond, and have the recognition to prove it.
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
                      <th className="border border-gray-300 p-3 text-left font-semibold text-green-800">
                        Facts
                      </th>
                      <th className="border border-gray-300 p-3 text-left font-semibold text-green-800">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">
                        Eligible Fields
                      </td>
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
                      <td className="border border-gray-300 p-3 font-medium">
                        Who Can Apply
                      </td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>– Lodge an Expression of Interest (EOI)</li>
                          <li>– Wait for invitation to apply</li>
                          <li>– Apply within 60 days of invitation</li>
                          <li>
                            – Apply from inside or outside Australia (not in
                            immigration clearance)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">
                        Nominator Requirements
                      </td>
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
                      <td className="border border-gray-300 p-3 font-medium">
                        Visa Benefits
                      </td>
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
                      <td className="border border-gray-300 p-3 font-medium">
                        Required Documents
                      </td>
                      <td className="border border-gray-300 p-3">
                        <ul className="space-y-1">
                          <li>– Proof of international achievements</li>
                          <li>– Career and qualification details</li>
                          <li>– Nominator's statement</li>
                          <li>
                            – ID and current visa documents (if applicable)
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Eligible Fields */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                Eligible Fields
              </h3>
              <p className="text-gray-700 mb-4">
                To apply for this visa, you must have an exceptional record in
                one of the following areas:
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
                  Your achievements must be recognised not just locally, but
                  internationally.
                </p>
              </div>
            </div>

            {/* Who Can Apply */}
            <div>
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                Who Can Apply for the National Innovation Visa?
              </h3>
              <p className="text-gray-700 mb-4">
                Not everyone can just fill out a form and send it off. The
                process starts with an invitation from the Department of Home
                Affairs.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-3">
                  Here's what you need:
                </h4>
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
                    <span>
                      Once invited, you have 60 days to submit your application
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>
                      You can apply from inside or outside Australia, as long as
                      you're not in immigration clearance at the time
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>
                      You must have a nominator with a national reputation in
                      your area of talent
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-purple-700 mb-3">
                    Your nominator can be:
                  </h4>
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
                  Most importantly, your track record of achievement must be
                  ongoing. It's not about one good project years ago—it's about
                  consistent excellence.
                </p>
              </div>
            </div>

            {/* What You Can Do */}
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-700 mb-4">
                What You Can Do With This Visa
              </h3>
              <p className="text-gray-700 mb-4">
                The National Innovation visa is one of the most generous
                pathways to live and work in Australia.
              </p>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">
                  With this visa, you can:
                </h4>
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
                    <span>
                      If you meet the requirements, apply for Australian
                      citizenship in the future
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-100 p-4 rounded-lg mt-4">
                <p className="italic text-orange-800">
                  It gives you stability and freedom to continue your work
                  without limitations.
                </p>
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-700 mb-4">
                What Documents You'll Need
              </h3>
              <p className="text-gray-700 mb-4">Paperwork matters. A lot.</p>
              <p className="text-gray-700 mb-4">
                When it comes to the National Innovation visa, a strong
                application is built on clear, detailed proof of your
                achievements and identity.
              </p>
              <p className="text-gray-700 mb-6">
                You can't just say you've done amazing things — you need to show
                it.
              </p>

              {/* Document Categories */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-red-700 mb-3">
                    1. Proof of international achievements
                  </h4>
                  <p className="text-gray-700 mb-3">
                    This is the most important part. The Department of Home
                    Affairs wants to see that your work has been recognised
                    worldwide.
                  </p>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="font-medium text-gray-800 mb-2">
                      You can include:
                    </p>
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
                        <span>
                          Publications, patents, or research with global impact
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-700 mb-3">
                    2. Career and qualification details
                  </h4>
                  <p className="text-gray-700">
                    Share your career history — where you've worked, what you've
                    done, and how long you've done it. Also include your
                    qualifications, especially if they relate to your area of
                    expertise.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-700 mb-3">
                    3. A nominator's statement
                  </h4>
                  <p className="text-gray-700">
                    Your nominator plays a key role. They need to write a
                    detailed statement backing your achievements and reputation.
                    This must come from someone (or an organisation) with a
                    national reputation in your field.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-700 mb-3">
                    4. Personal documents
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Don't forget the basics. You'll need to prove your identity
                    and visa status. This might include:
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
                      <span>
                        Current Australian visa (if you're applying from inside
                        the country)
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-700 mb-3">
                    5. Other supporting material
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Depending on your field, you might also need:
                  </p>
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
                      <span>
                        Links to published articles, performances, or
                        exhibitions
                      </span>
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
                  <strong>Expert tip:</strong> Remember — the more evidence, the
                  better. But it must be relevant and clearly presented. If
                  something's hard to understand or looks incomplete, it could
                  delay things.
                </p>
              </div>

              <div className="bg-red-100 p-4 rounded-lg mt-4">
                <p className="italic text-red-800">
                  Not sure if your documents are enough? That's what we're here
                  for.
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
                    A: No. You can be inside or outside Australia when you apply
                    and when the visa is granted. You just can't be in
                    immigration clearance at the time.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Can I include family members in my application?
                  </h4>
                  <p className="text-gray-700">
                    A: Yes, eligible family members can be included in your
                    application. They can also enjoy the same benefits once the
                    visa is granted.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: What if I'm not sure I meet the 'internationally
                    recognised' criteria?
                  </h4>
                  <p className="text-gray-700">
                    A: We recommend booking a FREE consultation so we can assess
                    your case. Every situation is different, and we'll give you
                    clear advice based on your unique achievements.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Can CIA Lawyers help with gathering documents and
                    submitting the EOI?
                  </h4>
                  <p className="text-gray-700">
                    A: Absolutely. We handle everything from checking your
                    eligibility to preparing your application and working with
                    your nominator.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: What if my application is refused?
                  </h4>
                  <p className="text-gray-700">
                    A: We can advise you on possible review options, depending
                    on the reason for the refusal. Having expert legal help from
                    the beginning reduces the risk of refusal.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-green-600 text-white p-6 rounded-lg">
              <div className="text-center">
                <p className="text-lg mb-4">
                  The National Innovation visa is designed for exceptional
                  individuals who have made significant international
                  contributions to their field and are ready to bring their
                  talents to Australia.
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
                    className="border-white text-black hover:bg-white/10"
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

      {/* Labour Agreement Modal */}
      <Dialog
        open={isLabourAgreementModalOpen}
        onOpenChange={setIsLabourAgreementModalOpen}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="border-b pb-4">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold text-amber-700">
                Labour Agreements
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLabourAgreementModalOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-8 py-6">
            {/* What Are Labour Agreements */}
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-amber-700 mb-4">
                What Are Labour Agreements?
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Labour agreements are legally binding contracts between the
                  Australian Government (via the Department of Home Affairs) and
                  employers.
                </p>
                <p>
                  They let approved businesses sponsor overseas workers for
                  roles that can't be filled by Australian citizens or permanent
                  residents.
                </p>
              </div>
            </div>

            {/* Types of Labour Agreements */}
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                Types of Labour Agreements
              </h3>
              <p className="text-gray-700 mb-6">
                Not all agreements are the same. Here are the five key types of
                labour agreements in Australia:
              </p>

              <div className="space-y-6">
                {/* Company-Specific Labour Agreements */}
                <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">
                    1. Company-Specific Labour Agreements
                  </h4>
                  <p className="text-blue-800 font-medium mb-3">
                    Tailored for individual businesses with unique skill needs.
                  </p>
                  <p className="text-gray-700">
                    These are customised agreements negotiated between your
                    business and the government. You'll need to show there's a
                    genuine need for the roles and that you've tried to fill
                    local talent first.
                  </p>
                </div>

                {/* Industry Labour Agreements */}
                <div className="border-l-4 border-green-500 pl-6 bg-green-50 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">
                    2. Industry Labour Agreements
                  </h4>
                  <p className="text-green-800 font-medium mb-3">
                    Designed for whole industries experiencing long-term skill
                    shortages.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Industries currently with standardised agreements include:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="space-y-1">
                      <div>• Aged Care</div>
                      <div>• Fishing</div>
                      <div>• Meat Processing</div>
                      <div>• Dairy</div>
                      <div>• Advertising</div>
                    </div>
                    <div className="space-y-1">
                      <div>• Horticulture</div>
                      <div>• On-hire Labour</div>
                      <div>• Pork</div>
                      <div>• Premium Dining Restaurants</div>
                      <div>• Minister of Religion</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-3">
                    Each industry has specific terms and approved occupations
                    listed.
                  </p>
                </div>

                {/* Designated Area Migration Agreements */}
                <div className="border-l-4 border-purple-500 pl-6 bg-purple-50 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">
                    3. Designated Area Migration Agreements (DAMA)
                  </h4>
                  <p className="text-purple-800 font-medium mb-3">
                    Great if you're in a regional or remote area.
                  </p>
                  <p className="text-gray-700">
                    These agreements are made between the federal government and
                    state, territory, or regional authorities. DAMAs target
                    specific areas with labour shortages and usually offer
                    access to more occupations and concessions.
                  </p>
                </div>

                {/* Project Agreements */}
                <div className="border-l-4 border-red-500 pl-6 bg-red-50 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-red-700 mb-3">
                    4. Project Agreements
                  </h4>
                  <p className="text-red-800 font-medium mb-3">
                    Ideal for large-scale infrastructure or resource projects.
                  </p>
                  <p className="text-gray-700">
                    Project agreements are linked to major development projects
                    that need a rapid influx of skilled labour. They complement
                    other government initiatives to support local job creation
                    while meeting the urgent needs of industry.
                  </p>
                </div>

                {/* Global Talent Employer Sponsored (GTES) Agreements */}
                <div className="border-l-4 border-teal-500 pl-6 bg-teal-50 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-teal-700 mb-3">
                    5. Global Talent Employer Sponsored (GTES) Agreements
                  </h4>
                  <p className="text-teal-800 font-medium mb-3">
                    For businesses hiring highly skilled and specialised
                    overseas talent.
                  </p>
                  <p className="text-gray-700">
                    This stream supports tech and innovation sectors needing
                    talent that's just not available in Australia. It offers
                    flexible conditions and faster processing for eligible
                    companies.
                  </p>
                </div>
              </div>
            </div>

            {/* When and Why You Need a Labour Agreement */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-amber-700 mb-4">
                When and Why You Need a Labour Agreement
              </h3>
              <p className="text-gray-700 mb-4">
                If you've hit a hiring wall trying to find Australians for
                specific roles, a labour agreement could be your solution.
              </p>

              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-amber-700 mb-3">
                  Here's when it might be right for you:
                </h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></span>
                    <span>
                      You've advertised extensively and can't find suitable
                      local candidates.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></span>
                    <span>
                      Your industry has a documented, ongoing shortage.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></span>
                    <span>
                      You need to fill roles quickly to keep your business
                      running or growing.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></span>
                    <span>
                      You require overseas workers under special conditions not
                      available through standard visa programs.
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-yellow-200 mt-4">
                <h4 className="font-semibold text-amber-700 mb-3">
                  And what's in it for you?
                </h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></span>
                    <span>
                      Access to skilled workers to meet your business needs.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></span>
                    <span>
                      Streamlined visa sponsorship under pre-agreed terms.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2"></span>
                    <span>
                      Flexibility in meeting workforce demands — especially for
                      niche roles.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* The Labour Agreement Application Process */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                The Labour Agreement Application Process
              </h3>
              <p className="text-gray-700 mb-6">
                Applying for a labour agreement isn't a quick tick-and-flick. It
                involves steps — and paperwork.
              </p>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-3">
                  Here's how it works:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      1
                    </span>
                    <span className="text-gray-700">
                      Read the guidelines and confirm you meet the requirements.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      2
                    </span>
                    <span className="text-gray-700">
                      Apply online via ImmiAccount with all required documents.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      3
                    </span>
                    <span className="text-gray-700">
                      Submit supporting evidence, including proof of recruitment
                      efforts and workforce planning.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      4
                    </span>
                    <span className="text-gray-700">
                      The Department will assess your request and may ask for
                      more details.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      5
                    </span>
                    <span className="text-gray-700">
                      If approved, you'll receive a draft agreement. Once it's
                      signed by all parties, the agreement takes effect.
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mt-4">
                <p className="italic text-blue-800">
                  <strong>
                    This process can take time, especially if documentation is
                    missing or you don't respond promptly to requests for more
                    info.
                  </strong>
                </p>
              </div>
            </div>

            {/* How Nominations and Visas Work Under Labour Agreements */}
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-700 mb-4">
                How Nominations and Visas Work Under Labour Agreements
              </h3>
              <p className="text-gray-700 mb-4">
                Once your agreement is active:
              </p>

              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  <span>
                    You can nominate overseas workers for approved roles through
                    ImmiAccount.
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  <span>
                    Each nomination gives you a Transaction Reference Number
                    (TRN).
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  <span>
                    Your selected worker will use that TRN to apply for a visa
                    under the labour agreement stream.
                  </span>
                </div>
              </div>

              <div className="bg-red-100 p-4 rounded-lg mt-4">
                <p className="italic text-red-800">
                  <strong>
                    Remember, your agreement outlines how many workers you can
                    nominate each year and which visa subclasses apply.
                  </strong>
                </p>
              </div>
            </div>

            {/* Employer Obligations */}
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-700 mb-4">
                Employer Obligations
              </h3>
              <p className="text-gray-700 mb-4">
                A labour agreement isn't just a free pass to hire from overseas.
                You must:
              </p>

              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  <span>
                    Comply with all contract terms and Australian employment
                    laws
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  <span>Pay market salary rates</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  <span>Meet workplace standards and protections</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  <span>
                    Keep records and cooperate with any monitoring (yes, they do
                    audits)
                  </span>
                </div>
              </div>

              <div className="bg-red-100 p-4 rounded-lg mt-4">
                <p className="italic text-red-800">
                  <strong>
                    Failure to meet your obligations can result in penalties or
                    cancellation of your agreement.
                  </strong>
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions (FAQ)
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Do I need a labour agreement to sponsor someone on a 482
                    visa?
                  </h4>
                  <p className="text-gray-700">
                    A: Not always. A labour agreement is only needed when
                    standard sponsorship options aren't suitable for your
                    business needs.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Can I apply for a labour agreement if I'm a small
                    business?
                  </h4>
                  <p className="text-gray-700">
                    A: Yes, if you meet the criteria and can demonstrate a
                    genuine skills shortage. Labour agreements are not just for
                    large companies.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: How long does it take to get a labour agreement approved?
                  </h4>
                  <p className="text-gray-700">
                    A: It depends. A complete application with all supporting
                    documents may take several months. Missing information can
                    delay things further.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-amber-600 text-white p-6 rounded-lg">
              <div className="text-center">
                <p className="text-lg mb-4">
                  Labour agreements provide a pathway for businesses to access
                  international talent when local options are exhausted,
                  ensuring compliance with Australian employment standards while
                  meeting critical business needs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-white text-amber-600 hover:bg-gray-100">
                    <FileText className="h-4 w-4 mr-2" />
                    Apply for Labour Agreement
                  </Button>
                  <Button className="bg-yellow-500 text-amber-900 hover:bg-yellow-400">
                    <Phone className="h-4 w-4 mr-2" />
                    Get Expert Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-black hover:bg-white/10"
                    onClick={() => setIsLabourAgreementModalOpen(false)}
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

      {/* Skilled Employer Sponsored Regional (Subclass 494) Visa Modal */}
      <Dialog
        open={isSubclass494ModalOpen}
        onOpenChange={setIsSubclass494ModalOpen}
      >
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-3xl font-bold text-blue-700">
                Skilled Employer Sponsored Regional (Subclass 494) Visa
              </DialogTitle>
              <Button
                variant="ghost"
                onClick={() => setIsSubclass494ModalOpen(false)}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-8 py-6">
            {/* Detailed Breakdown of Each Stream */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                Detailed Breakdown of Each Stream
              </h3>
              <p className="text-gray-700 mb-4">
                Understanding the different streams of the Skilled Employer
                Sponsored Regional (Provisional) visa (Subclass 494) is key to
                choosing the right path. Here's how each stream works:
              </p>

              <div className="bg-white rounded-lg overflow-hidden border border-blue-200">
                <table className="w-full">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-blue-800">
                        Stream
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-blue-800">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-100">
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-800">
                        Employer-Sponsored
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        For regional employers who cannot find suitably skilled
                        Australian workers. Employers nominate workers for
                        specific roles.
                      </td>
                    </tr>
                    <tr className="bg-blue-25">
                      <td className="px-4 py-3 font-medium text-gray-800">
                        Labour Agreement
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        For skilled workers nominated under a labour agreement
                        between the employer and the Australian Government.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-800">
                        Subsequent Entrant
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        For family members of Subclass 494 visa holders,
                        allowing them to join their loved ones in regional
                        Australia.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Stream Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Employer-Sponsored Stream */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-4">
                  #1. Employer-Sponsored Stream
                </h3>
                <p className="text-gray-700 mb-4">
                  This stream is designed for regional businesses facing
                  challenges in finding skilled Australian workers. Employers
                  can nominate overseas workers for roles that meet genuine
                  business needs.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">
                      Eligibility:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Employers must prove the position is genuine and matches
                      the skill level required.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">
                      Stay Duration:
                    </h4>
                    <p className="text-gray-700 text-sm">Up to five years.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">
                      Benefits:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Successful applicants can work, live, and study in
                      designated regional areas and may be eligible to apply for
                      permanent residency after three years.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-100 p-3 rounded-md mt-4">
                  <p className="text-blue-800 text-sm italic">
                    If your business needs highly skilled professionals for
                    critical roles, this stream ensures the right talent is
                    available to support regional growth.
                  </p>
                </div>
              </div>

              {/* Labour Agreement Stream */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  #2. Labour Agreement Stream
                </h3>
                <p className="text-gray-700 mb-4">
                  This stream is tailored for skilled workers nominated under a
                  labour agreement. These agreements are contracts between
                  regional employers and the Australian Government to address
                  unique workforce needs.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">
                      Eligibility:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Employers must have a formal labour agreement with the
                      Government.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">
                      Stay Duration:
                    </h4>
                    <p className="text-gray-700 text-sm">Up to five years.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">
                      Benefits:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Ideal for niche industries or roles with specific
                      requirements, ensuring access to international talent
                      where local skills are unavailable.
                    </p>
                  </div>
                </div>

                <div className="bg-green-100 p-3 rounded-md mt-4">
                  <p className="text-green-800 text-sm italic">
                    If you're an employer needing specialised workers, this
                    stream can bridge the gap effectively.
                  </p>
                </div>
              </div>

              {/* Subsequent Entrant Stream */}
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-700 mb-4">
                  #3. Subsequent Entrant Stream
                </h3>
                <p className="text-gray-700 mb-4">
                  Family members of Subclass 494 visa holders can join their
                  loved ones in regional Australia through this stream.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-purple-700 mb-2">
                      Eligibility:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Applicants must be members of the family unit of an
                      existing Subclass 494 visa holder.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-700 mb-2">
                      Stay Duration:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Matches the primary visa holder's remaining validity.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-700 mb-2">
                      Benefits:
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Families can enjoy the same work, study, and lifestyle
                      opportunities in regional Australia, excellent job
                      opportunities, and a great work-life balance.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-100 p-3 rounded-md mt-4">
                  <p className="text-purple-800 text-sm italic">
                    This stream ensures families can stay together while
                    contributing to regional communities. With these streams,
                    the Subclass 494 visa is a comprehensive solution for
                    regional employers and skilled overseas workers alike.
                  </p>
                </div>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Eligibility Criteria for the Skilled Employer Sponsored Regional
                Visa Subclass 494
              </h3>
              <p className="text-gray-700 mb-4">
                The Skilled Employer Sponsored Regional (Provisional) visa
                (Subclass 494) offers two main visa streams: Employer-Sponsored
                Stream and Labour Agreement Stream, along with an option for
                Subsequent Entrants (family members).
              </p>
              <p className="text-gray-700 mb-6">
                Here's an overview of the eligibility criteria for workers and
                employers under these streams.
              </p>

              {/* For Workers */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-blue-700 mb-4">
                  For Workers
                </h4>

                {/* Employer-Sponsored Stream */}
                <div className="bg-blue-50 p-6 rounded-lg mb-6 border border-blue-200">
                  <h5 className="text-md font-bold text-blue-700 mb-4">
                    Employer-Sponsored Stream:
                  </h5>

                  <div className="space-y-4">
                    <div>
                      <h6 className="font-semibold text-blue-600 mb-2">
                        Nominated Occupation:
                      </h6>
                      <p className="text-gray-700 text-sm">
                        Your occupation must be on the relevant skilled
                        occupation list.
                      </p>
                    </div>

                    <div>
                      <h6 className="font-semibold text-blue-600 mb-2">
                        Skills and Experience:
                      </h6>
                      <p className="text-gray-700 text-sm">
                        A positive skills assessment is mandatory. You need at
                        least three years of work experience in your nominated
                        occupation.
                      </p>
                    </div>

                    <div>
                      <h6 className="font-semibold text-blue-600 mb-2">Age:</h6>
                      <p className="text-gray-700 text-sm">
                        You must be under 45 years old unless an exemption
                        applies.
                      </p>
                    </div>

                    <div>
                      <h6 className="font-semibold text-blue-600 mb-2">
                        Language:
                      </h6>
                      <p className="text-gray-700 text-sm">
                        You need to meet the minimum English language
                        proficiency requirement unless exemptions apply.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Labour Agreement Stream */}
                <div className="bg-green-50 p-6 rounded-lg mb-6 border border-green-200">
                  <h5 className="text-md font-bold text-green-700 mb-4">
                    Labour Agreement Stream:
                  </h5>

                  <div className="space-y-4">
                    <div>
                      <h6 className="font-semibold text-green-600 mb-2">
                        Nominated Occupation:
                      </h6>
                      <p className="text-gray-700 text-sm">
                        You must be nominated under the terms of a labour
                        agreement between your employer and the Australian
                        Government.
                      </p>
                    </div>

                    <div>
                      <h6 className="font-semibold text-green-600 mb-2">
                        Skills and Experience:
                      </h6>
                      <p className="text-gray-700 text-sm">
                        You must have at least three years of relevant work
                        experience in your nominated occupation.
                      </p>
                    </div>

                    <div>
                      <h6 className="font-semibold text-green-600 mb-2">
                        Skills Assessment:
                      </h6>
                      <p className="text-gray-700 text-sm">
                        A relevant skills assessment is required, but exemptions
                        can apply depending on the labour agreement.
                      </p>
                    </div>

                    <div>
                      <h6 className="font-semibold text-green-600 mb-2">
                        Age:
                      </h6>
                      <p className="text-gray-700 text-sm">
                        You must be under 45 years of age unless the labour
                        agreement specifies otherwise.
                      </p>
                    </div>

                    <div>
                      <h6 className="font-semibold text-green-600 mb-2">
                        Language:
                      </h6>
                      <p className="text-gray-700 text-sm">
                        You must meet minimum English language proficiency.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subsequent Entrant Stream */}
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h5 className="text-md font-bold text-purple-700 mb-4">
                    Subsequent Entrant Stream:
                  </h5>

                  <div className="space-y-4">
                    <div>
                      <h6 className="font-semibold text-purple-600 mb-2">
                        Family Unit:
                      </h6>
                      <p className="text-gray-700 text-sm">
                        You must be a member of the family unit of a primary
                        SESR visa holder applying separately to join them in
                        Australia.
                      </p>
                    </div>

                    <div>
                      <h6 className="font-semibold text-purple-600 mb-2">
                        Family Relationship:
                      </h6>
                      <p className="text-gray-700 text-sm">
                        You should be able to demonstrate your relationship to
                        the primary visa holder (such as being a spouse or
                        dependent child).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Employers */}
              <div>
                <h4 className="text-lg font-bold text-red-700 mb-4">
                  For Employers
                </h4>

                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <div className="space-y-4">
                    <div>
                      <h6 className="font-semibold text-red-600 mb-2">
                        Location:
                      </h6>
                      <p className="text-gray-700 text-sm">
                        Your business must be located in a designated regional
                        area of Australia.
                      </p>
                    </div>

                    <div>
                      <h6 className="font-semibold text-red-600 mb-2">
                        Genuine Need:
                      </h6>
                      <p className="text-gray-700 text-sm">
                        You must demonstrate that there is a genuine need for
                        the overseas worker and the role is critical for your
                        business operations.
                      </p>
                    </div>

                    <div>
                      <h6 className="font-semibold text-red-600 mb-2">
                        Fair Pay:
                      </h6>
                      <p className="text-gray-700 text-sm">
                        You must offer the worker at least the Australian Market
                        Salary Rate (AMSR) and meet the Temporary Skilled
                        Migration Income Threshold (TSMIT).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg mt-6">
                <p className="text-yellow-800 text-sm">
                  <strong>
                    By meeting these eligibility requirements, businesses and
                    skilled workers can access the many benefits the Subclass
                    494 visa has to offer, including a pathway to permanent
                    residency after three years of holding the visa.
                  </strong>
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-700 mb-4">
                Benefits of the Skilled Employer Sponsored Regional Visa
                Subclass 494
              </h3>
              <p className="text-gray-700 mb-4">
                The Skilled Employer Sponsored Regional (Provisional) Visa
                (Subclass 494) offers significant advantages for skilled workers
                and regional employers in Australia.
              </p>
              <p className="text-gray-700 mb-6">
                Here's how it benefits both parties:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Address Skill Shortages */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-700 mb-3">
                    Address Skill Shortages in Regional Areas
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Employers in regional Australia often struggle to find
                    workers with the right skills. The Subclass 494 visa allows
                    businesses to sponsor skilled overseas workers to fill
                    critical roles, ensuring their operations run smoothly and
                    thrive.
                  </p>
                </div>

                {/* Pathway to Permanent Residency */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3">
                    Pathway to Permanent Residency
                  </h4>
                  <p className="text-gray-700 text-sm">
                    After holding the Subclass 494 visa for three years, skilled
                    workers can apply for the Subclass 191 visa, which provides
                    a pathway to permanent residency.
                  </p>
                </div>

                {/* Work and Study in Regional Australia */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3">
                    Work and Study in Regional Australia
                  </h4>
                  <p className="text-gray-700 text-sm">
                    As a Subclass 494 visa holder, you can live, work, and study
                    in designated regional areas of Australia for up to five
                    years. Regional Australia is known for its vibrant
                    communities, excellent job opportunities, and a great
                    work-life balance.
                  </p>
                </div>

                {/* Family Inclusion */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-3">
                    Family Inclusion
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Under the Subsequent Entrant Stream, the Subclass 494 visa
                    allows workers to bring their family members to Australia.
                    This is an excellent opportunity for families to reunite and
                    enjoy the benefits of living in a regional area together.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <div className="text-center">
                <p className="text-lg mb-4">
                  The Skilled Employer Sponsored Regional (Subclass 494) Visa
                  offers a comprehensive pathway for regional employers to
                  access international talent while providing skilled workers
                  with opportunities for permanent residency and regional
                  lifestyle benefits.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    <FileText className="h-4 w-4 mr-2" />
                    Apply for Subclass 494 Visa
                  </Button>
                  <Button className="bg-yellow-500 text-blue-900 hover:bg-yellow-400">
                    <Phone className="h-4 w-4 mr-2" />
                    Get Expert Assessment
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-black hover:bg-white/10"
                    onClick={() => setIsSubclass494ModalOpen(false)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Our Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Temporary Work (Short Stay Specialist) Visa (Subclass 400) Modal */}
      <Dialog
        open={isSubclass400ModalOpen}
        onOpenChange={setIsSubclass400ModalOpen}
      >
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-3xl font-bold text-purple-700">
                Temporary Work (Short Stay Specialist) Visa (Subclass 400)
              </DialogTitle>
              <Button
                variant="ghost"
                onClick={() => setIsSubclass400ModalOpen(false)}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-8 py-6">
            {/* Costs & Details */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                Costs & Details of the Temporary Work (Short Stay Specialist)
                Visa (Subclass 400)
              </h3>
              <p className="text-gray-700 mb-6">
                The Temporary Work (Short Stay Specialist) Visa (Subclass 400)
                provides a great opportunity for specialised workers to come to
                Australia for short-term assignments. Here's a quick breakdown
                of the key details:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Application Fee */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-3">
                    Application Fee:
                  </h4>
                  <p className="text-gray-700">
                    The application fee for the Subclass 400 Visa is AUD 415.
                    This fee applies to most applicants unless specific
                    exemptions are in place.
                  </p>
                </div>

                {/* Visa Duration */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3">
                    Visa Duration:
                  </h4>
                  <p className="text-gray-700">
                    This visa is valid for up to 6 months, depending on your
                    specific situation. If you plan to stay for longer than 3
                    months, you'll need to provide a strong business case to
                    justify the extension.
                  </p>
                </div>

                {/* No Extensions */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 mb-3">
                    No Extensions:
                  </h4>
                  <p className="text-gray-700">
                    Once granted, the Subclass 400 visa cannot be extended. If
                    you wish to stay longer or continue working in Australia,
                    you'll need to apply for a different visa.
                  </p>
                </div>

                {/* Processing Times */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3">
                    Processing Times:
                  </h4>
                  <p className="text-gray-700">
                    Processing times for this visa can vary. It's a good idea to
                    check the Australian Government's processing tool for the
                    most up-to-date information on how long your application
                    might take.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Summary */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                Quick Summary
              </h3>

              <div className="bg-white rounded-lg overflow-hidden border border-purple-200">
                <table className="w-full">
                  <thead className="bg-purple-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-purple-800">
                        Visa Detail
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-purple-800">
                        Information
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-100">
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-800">
                        Application Fee
                      </td>
                      <td className="px-4 py-3 text-gray-700">AUD 415</td>
                    </tr>
                    <tr className="bg-purple-25">
                      <td className="px-4 py-3 font-medium text-gray-800">
                        Visa Duration
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Up to 6 months
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-800">
                        Visa Extension
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Not extendable
                      </td>
                    </tr>
                    <tr className="bg-purple-25">
                      <td className="px-4 py-3 font-medium text-gray-800">
                        Processing Times
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Check the Australian Government tool
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg mt-6">
                <p className="text-purple-800 text-sm">
                  <strong>
                    With this visa, you can work in Australia for a short
                    period, but remember: make sure your work is genuinely
                    specialised and temporary.
                  </strong>
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                Benefits of the Temporary Work (Short Stay Specialist) Visa
                (Subclass 400)
              </h3>
              <p className="text-gray-700 mb-6">
                The Temporary Work (Short Stay Specialist) Visa (Subclass 400)
                opens the door to a range of opportunities for experts looking
                to work in Australia for short-term, highly specialised roles.
                Here's why it's a great option:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Specialised Work Opportunities */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3">
                    Specialised Work Opportunities:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    This visa lets you take on roles that require niche skills
                    not available locally, making it perfect for specialists who
                    can't be easily replaced.
                  </p>
                </div>

                {/* Flexible Duration */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3">
                    Flexible Duration:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Whether you're working on a short-term project or a more
                    extended task, you can stay in Australia for up to 6 months,
                    with flexibility to match your work needs.
                  </p>
                </div>

                {/* No Long-Term Commitment */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-3">
                    No Long-Term Commitment:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    If you're looking to share your expertise without committing
                    to a permanent stay, this visa offers the perfect solution.
                  </p>
                </div>

                {/* Multiple Entries */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-700 mb-3">
                    Multiple Entries:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    You're free to enter and exit Australia as needed during the
                    visa's validity period, though the duration won't reset with
                    each re-entry.
                  </p>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mt-6">
                <p className="text-blue-800 text-sm">
                  <strong>
                    These benefits make the Temporary Work (Short Stay
                    Specialist) Visa (Subclass 400) a win for both skilled
                    professionals and Australian businesses, allowing expertise
                    to flow where it's needed most.
                  </strong>
                </p>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                Eligibility Criteria for the Temporary Work (Short Stay
                Specialist) Visa (Subclass 400)
              </h3>
              <p className="text-gray-700 mb-6">
                To qualify for the Temporary Work (Short Stay Specialist) Visa
                (Subclass 400), you'll need to meet a few essential criteria.
                Here's what you need:
              </p>

              <div className="space-y-6">
                {/* Highly Specialised Skills */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3">
                    Highly Specialised Skills:
                  </h4>
                  <p className="text-gray-700">
                    You must possess expertise or experience that is not readily
                    available in Australia, making your skills critical for the
                    role.
                  </p>
                </div>

                {/* Non-Ongoing Work */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3">
                    Non-Ongoing Work:
                  </h4>
                  <p className="text-gray-700">
                    The work you will perform must be short-term and
                    project-based, rather than a long-term, ongoing position.
                  </p>
                </div>

                {/* Genuine Need */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-3">
                    Genuine Need:
                  </h4>
                  <p className="text-gray-700">
                    The business requesting your services must demonstrate a
                    real need for your specific skills, ensuring that your
                    expertise benefits their operations.
                  </p>
                </div>

                {/* Visa-Specific Work */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-700 mb-3">
                    Visa-Specific Work:
                  </h4>
                  <p className="text-gray-700">
                    You are only authorised to carry out the tasks outlined in
                    your visa approval, ensuring your role aligns with the
                    visa's conditions.
                  </p>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mt-6">
                <p className="text-green-800 text-sm">
                  <strong>
                    By meeting these criteria, you'll be well-positioned to
                    apply for this visa. Make sure you've ticked all the boxes
                    before you get started!
                  </strong>
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions (FAQ)
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Which is the easiest work visa in Australia?
                  </h4>
                  <p className="text-gray-700">
                    <strong>Ans:</strong> The Subclass 400 visa is often
                    considered one of the easier work visa options for skilled
                    workers, allowing short-term, specialised roles without
                    long-term commitments.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: What is a Subclass 400 visa in Australia?
                  </h4>
                  <p className="text-gray-700">
                    <strong>Ans:</strong> The Subclass 400 visa allows skilled
                    workers to come to Australia for short-term, specialised
                    work that can't be filled by local workers, typically for up
                    to 6 months.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: How do you qualify for a temporary work visa in
                    Australia?
                  </h4>
                  <p className="text-gray-700">
                    <strong>Ans:</strong> To qualify, you must have specialised
                    skills that aren't available locally, and the work must be
                    short- term and project-specific.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: What is the difference between the 400 and 482 visas?
                  </h4>
                  <p className="text-gray-700">
                    <strong>Ans:</strong> Subclass 400 is for short-term
                    specialised work, while Subclass 482 is for longer-term
                    employment with employer sponsorship, often leading to
                    permanent residency.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: How much bank balance is required for an Australia work
                    visa?
                  </h4>
                  <p className="text-gray-700">
                    <strong>Ans:</strong> The required bank balance depends on
                    the visa type, but you'll need to show you can support
                    yourself financially during your stay. For specifics, it's
                    best to consult with a professional.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-purple-600 text-white p-6 rounded-lg">
              <div className="text-center">
                <p className="text-lg mb-4">
                  The Temporary Work (Short Stay Specialist) Visa (Subclass 400)
                  provides a streamlined pathway for specialised professionals
                  to contribute their expertise to Australian businesses for
                  short-term projects and assignments.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100">
                    <FileText className="h-4 w-4 mr-2" />
                    Apply for Subclass 400 Visa
                  </Button>
                  <Button className="bg-yellow-500 text-purple-900 hover:bg-yellow-400">
                    <Phone className="h-4 w-4 mr-2" />
                    Get Specialist Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-black hover:bg-white/10"
                    onClick={() => setIsSubclass400ModalOpen(false)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Expert Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Training Visa (Subclass 407) Modal */}
      <Dialog
        open={isSubclass407ModalOpen}
        onOpenChange={setIsSubclass407ModalOpen}
      >
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-3xl font-bold text-green-700">
                Training Visa (Subclass 407)
              </DialogTitle>
              <Button
                variant="ghost"
                onClick={() => setIsSubclass407ModalOpen(false)}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-8 py-6">
            {/* Costs & Details */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                Costs & Details of the Training Visa (Subclass 407)
              </h3>
              <p className="text-gray-700 mb-6">
                Wondering about the costs and details of the Training Visa
                (Subclass 407)? Let's break it down simply!
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-green-700 mb-4">
                  Visa Fees and Processing Times:
                </h4>

                <div className="bg-white rounded-lg overflow-hidden border border-green-200">
                  <table className="w-full">
                    <thead className="bg-green-100">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-green-800">
                          Item
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-green-800">
                          Cost
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-green-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-800">
                          Base application fee
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          AUD 415 (main applicant)
                        </td>
                      </tr>
                      <tr className="bg-green-25">
                        <td className="px-4 py-3 font-medium text-gray-800">
                          Additional charges for dependents
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          Varies (check individual circumstances)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-800">
                          Processing time
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          2 to 4 months (average)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700">
                  The base application fee for the Training Visa starts at AUD
                  415 for the main applicant. Keep in mind that if you have
                  family members applying as dependents, there may be extra
                  costs involved.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h5 className="font-bold text-blue-700 mb-2">
                    Processing Times:
                  </h5>
                  <p className="text-blue-700 text-sm">
                    It usually takes between 2 to 4 months to process your
                    application. Planning is key, as some applications can take
                    a bit longer based on your unique situation.
                  </p>
                </div>

                <p className="text-gray-700">
                  This temporary visa lets you stay in Australia for up to 2
                  years, providing you plenty of time to finish your training.
                  However, if you have family members on your visa, they may
                  only be allowed to work 20 hours per week.
                </p>

                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="text-green-800 text-sm italic">
                    <strong>
                      Getting your Training Visa is a step closer to enhancing
                      your skills while enjoying everything Australia has to
                      offer!
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Occupational Training Covered */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                Occupational Training Covered by Training Visa (Subclass 407)
              </h3>
              <p className="text-gray-700 mb-6">
                Are you curious about the types of training included in the
                Training Visa (Subclass 407)? Let's break it down into three
                main streams:
              </p>

              <div className="space-y-6">
                {/* Stream 1 */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-lg font-bold text-blue-700 mb-3">
                    #1. Occupational Training for Registration
                  </h4>
                  <p className="text-gray-700">
                    This stream is designed for individuals who need specific
                    registration, membership, or a licence to work in their
                    field. Whether you're aiming for qualifications in Australia
                    or your home country, this hands-on training will help you
                    meet those requirements.
                  </p>
                </div>

                {/* Stream 2 */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-lg font-bold text-green-700 mb-3">
                    #2. Skills Improvement
                  </h4>
                  <p className="text-gray-700">
                    Looking to sharpen your skills? The skills improvement
                    stream allows you to join a structured workplace training
                    program. This training focuses on enhancing your abilities
                    in occupations listed on the skilled occupation list for the
                    407 visa. It's a fantastic opportunity to gain practical
                    experience while boosting your employability.
                  </p>
                </div>

                {/* Stream 3 */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="text-lg font-bold text-purple-700 mb-3">
                    #3. Capacity Building Overseas
                  </h4>
                  <p className="text-gray-700">
                    This stream caters to those needing training as part of
                    their overseas studies or professionals supported by a
                    government organisation. If you're a manager or professional
                    wanting to develop your skills further, this stream offers a
                    pathway to gain valuable training in Australia.
                  </p>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mt-6">
                <p className="text-blue-800 text-sm">
                  <strong>
                    Training Visa (Subclass 407) provides various opportunities
                    for occupational training. Whether you're looking to meet
                    registration requirements, enhance your skills, or build
                    capacity overseas, there's a stream that can fit your needs.
                    This visa is a stepping stone to advancing your career while
                    experiencing life in Australia!
                  </strong>
                </p>
              </div>
            </div>

            {/* What This Visa Lets You Do */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                What This Visa Lets You Do
              </h3>
              <p className="text-gray-700 mb-6">
                The Training Visa (Subclass 407) opens up a world of
                opportunities for you in Australia. Here's what you can do with
                this visa:
              </p>

              <div className="space-y-6">
                {/* Live and Work */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3">
                    Live and Work:
                  </h4>
                  <p className="text-gray-700">
                    You'll have the chance to live in Australia while completing
                    your training program. This hands-on experience is
                    invaluable for your career.
                  </p>
                </div>

                {/* Stay for Up to 2 Years */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3">
                    Stay for Up to 2 Years:
                  </h4>
                  <p className="text-gray-700">
                    Depending on the length of your training, you can enjoy your
                    time in Australia for up to two years. It's plenty of time
                    to soak in the culture and gain skills.
                  </p>
                </div>

                {/* Bring Your Family */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-3">
                    Bring Your Family:
                  </h4>
                  <p className="text-gray-700">
                    You can include your spouse and children in your
                    application. Just remember, while your family can join you,
                    they may face work restrictions. They can work up to 20
                    hours a week.
                  </p>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mt-6">
                <p className="text-green-800 text-sm">
                  <strong>
                    Overall, this visa is an excellent way to gain experience in
                    your field while exploring everything Australia has to
                    offer—from its stunning beaches to vibrant cities. It's not
                    just about work; it's about living and thriving in a
                    fantastic environment!
                  </strong>
                </p>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-700 mb-4">
                Eligibility Criteria for the Training Visa (Subclass 407)
              </h3>
              <p className="text-gray-700 mb-6">
                To qualify for the Training Visa (Subclass 407), you'll need to
                meet several important criteria. Here's what you need to know to
                ensure your application goes smoothly:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Have an Approved Sponsor */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-700 mb-3">
                    Have an Approved Sponsor:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    You must be sponsored by an organisation that is approved as
                    a temporary activities sponsor in Australia. This sponsor
                    will play a crucial role in supporting your training.
                  </p>
                </div>

                {/* Be Nominated */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3">
                    Be Nominated:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Your sponsor needs to nominate you for the visa. If they are
                    an Australian Commonwealth Government agency, this
                    requirement may differ. It's essential to understand that
                    the nomination must be for a specific type of occupational
                    training.
                  </p>
                </div>

                {/* Age Requirement */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3">
                    Age Requirement:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Generally, you should be at least 18 years old at the time
                    your visa application is decided. This age requirement is
                    standard and helps ensure you are prepared for the
                    responsibilities of the visa.
                  </p>
                </div>

                {/* Hold a Valid Visa */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-3">
                    Hold a Valid Visa:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    If you are applying from within Australia, you must
                    currently hold a valid temporary substantive visa. Certain
                    visas, like the Subclass 403 (Temporary Work) or Subclass
                    771 (Transit) visas, are not eligible.
                  </p>
                </div>

                {/* Meet Health Requirements */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 mb-3">
                    Meet Health Requirements:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    You and any family members applying with you must meet the
                    health requirements set by the Australian government. This
                    may involve a health examination.
                  </p>
                </div>

                {/* Meet Character Requirements */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-600 mb-3">
                    Meet Character Requirements:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    All applicants aged 16 years and over must meet character
                    criteria. This usually involves providing a police clearance
                    or similar documentation.
                  </p>
                </div>

                {/* Adequate Health Insurance */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-bold text-pink-700 mb-3">
                    Adequate Health Insurance:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    You must maintain adequate health insurance for the entire
                    duration of your stay. This ensures you are covered for any
                    medical treatment you may require while in Australia.
                  </p>
                </div>

                {/* Genuine Temporary Entrant */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-700 mb-3">
                    Genuine Temporary Entrant:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    You must intend to stay in Australia temporarily and comply
                    with the conditions of the visa. It's crucial to demonstrate
                    that you plan to return to your home country after your
                    training.
                  </p>
                </div>

                {/* Functional English */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-700 mb-3">
                    Functional English:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    A good level of English is required to ensure you can engage
                    effectively in your training program. This is essential for
                    meeting the safety and training standards.
                  </p>
                </div>

                {/* Sign the Australian Values Statement */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-700">
                  <h4 className="font-bold text-blue-700 mb-3">
                    Sign the Australian Values Statement:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    If you're over 18, you'll need to read the Life in Australia
                    booklet and sign an Australian Values Statement. This shows
                    your commitment to respecting Australian laws and values.
                  </p>
                </div>

                {/* No Previous Visa Issues */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-gray-500">
                  <h4 className="font-bold text-gray-700 mb-3">
                    No Previous Visa Issues:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    If you've had a visa cancelled or an application refused in
                    the past, it may affect your eligibility for this visa. Your
                    immigration history is taken into consideration.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg mt-6">
                <p className="text-yellow-800 text-sm">
                  <strong>
                    With these criteria in mind, don't worry if you're not a
                    superstar in your field yet! This visa is all about helping
                    you improve your skills and gain valuable experience in
                    Australia. If you meet the requirements, you could be well
                    on your way to enhancing your career!
                  </strong>
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions (FAQ)
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Can you apply for PR after a 407 visa?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> Yes, you can apply for Permanent
                    Residency (PR) after holding a 407 visa, but you must meet
                    specific criteria and apply for an eligible PR pathway that
                    suits your circumstances.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: How many hours can I work with a 407 visa in Australia?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> As a holder of a 407 visa, your work
                    hours are capped at 40 hours per fortnight. However, if you
                    are a secondary applicant, you may also face similar
                    restrictions.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: What is the difference between a 407 visa and a 482 visa?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> The 407 visa is for training and skill
                    development, while the 482 visa (Temporary Skill Shortage
                    visa) allows skilled workers to work in Australia in a
                    specific occupation. The 482 visa generally leads to more
                    direct pathways to PR.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Can you apply for a 482 after a 407?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> Yes, you can apply for a 482 visa after
                    holding a 407 visa, provided you meet the eligibility
                    criteria for the 482 visa, including sponsorship by an
                    approved employer.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Who can sponsor a 407 visa?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> To sponsor a 407 visa, the sponsor must
                    be an approved business or organisation in Australia. They
                    should be willing to provide training and support to the
                    visa applicant throughout their stay.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-green-600 text-white p-6 rounded-lg">
              <div className="text-center">
                <p className="text-lg mb-4">
                  The Training Visa (Subclass 407) offers an excellent pathway
                  for professional development and skill enhancement in
                  Australia, providing valuable hands-on experience in your
                  chosen field while experiencing Australian culture and
                  lifestyle.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-white text-green-600 hover:bg-gray-100">
                    <FileText className="h-4 w-4 mr-2" />
                    Apply for Training Visa
                  </Button>
                  <Button className="bg-yellow-500 text-green-900 hover:bg-yellow-400">
                    <Phone className="h-4 w-4 mr-2" />
                    Get Training Assessment
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-black hover:bg-white/10"
                    onClick={() => setIsSubclass407ModalOpen(false)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Training Experts
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Skills in Demand Visa (Subclass 482) Modal */}
      <Dialog
        open={isSubclass482ModalOpen}
        onOpenChange={setIsSubclass482ModalOpen}
      >
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-3xl font-bold text-blue-700">
                Skills in Demand Visa (Subclass 482)
              </DialogTitle>
              <Button
                variant="ghost"
                onClick={() => setIsSubclass482ModalOpen(false)}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-8 py-6">
            {/* What Is the Skills in Demand Visa */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                What Is the Skills in Demand Visa?
              </h3>

              <div className="space-y-4">
                <p className="text-gray-700">
                  The Skills in Demand (SID) visa (Subclass 482) is a temporary
                  work visa that allows skilled workers to come to Australia and
                  work for an approved employer for up to four years.
                </p>

                <p className="text-gray-700">
                  This visa replaced the Temporary Skill Shortage (TSS) visa and
                  is designed to help Australian employers fill genuine skill
                  shortages in their workforce when they cannot find suitable
                  Australian workers.
                </p>

                <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-blue-800 italic">
                    <strong>
                      It's a pathway that benefits both employers needing
                      skilled workers and international professionals seeking
                      opportunities in Australia.
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Breakdown of Each Stream */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Detailed Breakdown of Each Stream
              </h3>
              <p className="text-gray-700 mb-6">
                The Skills in Demand Visa (subclass 482) offers four distinct
                streams, each designed to cater to different needs.
                Understanding which stream suits your situation will help you
                take the best step towards working in Australia.
              </p>
              <p className="text-gray-700 mb-6">
                Let's break down each stream:
              </p>

              <div className="space-y-8">
                {/* Stream 1: Core Skills */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">
                    #1. Core Skills Stream
                  </h4>
                  <p className="text-gray-700 mb-6">
                    This stream is tailored for workers in occupations listed on
                    the Core Skills Occupation List. If your role matches one of
                    these in-demand positions, you can be sponsored by an
                    Australian employer facing a local talent shortage.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-bold text-blue-700 mb-2">
                        Duration:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        Up to 4 years (5 years for Hong Kong passport holders)
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-bold text-green-700 mb-2">
                        Eligibility:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        You must have the required skills and meet English
                        language proficiency standards.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-700 mb-2">
                      Why Choose This Stream?
                    </h5>
                    <p className="text-blue-700 text-sm">
                      If your occupation is crucial to filling a gap in the
                      Australian workforce, this is your path to a fulfilling
                      career in Australia. Employers in need of your skills can
                      sponsor you, opening doors to permanent residency
                      opportunities.
                    </p>
                  </div>
                </div>

                {/* Stream 2: Specialist Skills */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-xl font-bold text-green-700 mb-4">
                    #2. Specialist Skills Stream
                  </h4>
                  <p className="text-gray-700 mb-6">
                    Designed for workers with expertise in specific occupations
                    (from the ANZSCO list, excluding Major Groups 3, 7, or 8),
                    this stream allows you to be sponsored by an Australian
                    employer in fields where skilled workers are in short
                    supply.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-bold text-green-700 mb-2">
                        Duration:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        Up to 4 years (5 years for Hong Kong passport holders)
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-bold text-blue-700 mb-2">
                        Eligibility:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        You must meet the salary threshold and possess the
                        necessary skills and qualifications for the nominated
                        role.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-100 p-4 rounded-lg">
                    <h5 className="font-bold text-green-700 mb-2">
                      Why Choose This Stream?
                    </h5>
                    <p className="text-green-700 text-sm">
                      If you have specialised skills that are crucial to
                      Australia's growth, this visa stream is your ticket. It
                      ensures your expertise meets a pressing industry demand,
                      while also offering an attractive salary package.
                    </p>
                  </div>
                </div>

                {/* Stream 3: Labour Agreement */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="text-xl font-bold text-orange-700 mb-4">
                    #3. Labour Agreement Stream
                  </h4>
                  <p className="text-gray-700 mb-6">
                    This stream is for workers nominated by employers who have a
                    formal Labour Agreement with the Australian Government.
                    These agreements are typically designed to fill niche skill
                    shortages in specific industries.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-bold text-orange-700 mb-2">
                        Duration:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        Up to 4 years (5 years for Hong Kong passport holders)
                      </p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-bold text-red-700 mb-2">
                        Eligibility:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        Your employer must have an active Labour Agreement in
                        place with the Australian Government.
                      </p>
                    </div>
                  </div>

                  <div className="bg-orange-100 p-4 rounded-lg">
                    <h5 className="font-bold text-orange-700 mb-2">
                      Why Choose This Stream?
                    </h5>
                    <p className="text-orange-700 text-sm">
                      If your employer operates under a Labour Agreement with
                      the government, this stream allows you to access exclusive
                      opportunities. It's ideal for those with niche skills
                      required in unique industries, ensuring employers can
                      bring in the right talent.
                    </p>
                  </div>
                </div>

                {/* Stream 4: Subsequent Entrant */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="text-xl font-bold text-purple-700 mb-4">
                    #4. Subsequent Entrant Stream
                  </h4>
                  <p className="text-gray-700 mb-6">
                    For family members of Subclass 482 visa holders, this stream
                    allows you to join your loved ones in Australia and enjoy
                    the same work, study, and lifestyle benefits.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-bold text-purple-700 mb-2">
                        Duration:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        As long as the primary visa holder's visa is valid
                      </p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h5 className="font-bold text-pink-700 mb-2">
                        Eligibility:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        You must be a family member (spouse, child, etc.) of a
                        Subclass 482 or 457 visa holder.
                      </p>
                    </div>
                  </div>

                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-700 mb-2">
                      Why Choose This Stream?
                    </h5>
                    <p className="text-purple-700 text-sm">
                      This stream is perfect if you're looking to reunite with
                      your family in Australia. It ensures that you can live,
                      work, and study together in a dynamic and supportive
                      environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg mt-6 border border-yellow-300">
                <p className="text-yellow-800 text-sm">
                  <strong>
                    These four streams of the Subclass 482 visa cater to a
                    variety of skill sets and personal circumstances. Whether
                    you're a specialist, an essential worker, or looking to
                    bring your family along, the Skills in Demand visa opens
                    doors to incredible opportunities in Australia.
                  </strong>
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                Benefits of the Skills in Demand Visa (Subclass 482)
              </h3>
              <p className="text-gray-700 mb-6">
                The Skills in Demand Visa (subclass 482) is a great opportunity
                for both skilled workers and employers looking to address
                critical workforce gaps. Here's how it benefits both parties:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* For Employers */}
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-lg font-bold text-blue-700 mb-4">
                    For Employers:
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-blue-600 mb-2">
                        • Access to Global Talent:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        When local candidates are scarce, employers can tap into
                        a global pool of skilled workers.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-bold text-blue-600 mb-2">
                        • Fill Critical Roles:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        The visa helps businesses address urgent skill
                        shortages, ensuring they can keep operations running
                        smoothly.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-bold text-blue-600 mb-2">
                        • Labour Agreement Flexibility:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        Employers with a Labour Agreement can hire workers for
                        highly specialised roles that are hard to fill locally.
                      </p>
                    </div>
                  </div>
                </div>

                {/* For Workers */}
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-lg font-bold text-green-700 mb-4">
                    For Workers:
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-green-600 mb-2">
                        • Work in Australia:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        This visa offers the chance to live and work in
                        Australia for up to four years, with the potential for a
                        longer stay depending on your situation.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-bold text-green-600 mb-2">
                        • Pathway to Permanent Residency:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        After holding the 482 visa for three years, skilled
                        workers may be eligible to apply for permanent
                        residency, providing a route to long-term settlement.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-bold text-green-600 mb-2">
                        • Family Inclusion:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        Workers can bring their immediate family members to
                        Australia under the Subsequent Entrant Stream, so their
                        loved ones can join them in this exciting journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mt-6">
                <p className="text-blue-800 text-sm">
                  <strong>
                    Whether you're a skilled worker looking to make a move or an
                    employer needing specialised talent, the Subclass 482 visa
                    is a fantastic option to explore. Ready to get started? Let
                    CIA Lawyers guide you through the process!
                  </strong>
                </p>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                Eligibility Criteria for the Skills in Demand Visa (Subclass
                482)
              </h3>
              <p className="text-gray-700 mb-6">
                To be considered for the Skills in Demand Visa (subclass 482),
                you need to meet specific eligibility criteria based on the
                stream you're applying for. Here's a simple breakdown to help
                you understand what's required:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* For Workers */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="text-lg font-bold text-purple-700 mb-4">
                    For Workers
                  </h4>

                  <div className="space-y-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-bold text-purple-700 mb-2">
                        Nomination:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        You must be nominated by an approved employer for a
                        skilled position. This means an Australian business must
                        sponsor you for the role.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-bold text-blue-700 mb-2">Skills:</h5>
                      <p className="text-gray-700 text-sm">
                        You'll need the relevant qualifications and experience
                        to fill the position. Make sure your skills align with
                        the requirements for the job.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-bold text-orange-700 mb-2">
                        English Language Proficiency:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        You must meet the English language requirements unless
                        you qualify for an exemption. This is essential to
                        ensure you can communicate effectively in the workplace.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-bold text-green-700 mb-2">Age:</h5>
                      <p className="text-gray-700 text-sm">
                        Generally, applicants must be under 45 years old, though
                        exceptions may apply depending on the role and
                        situation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* For Employers */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="text-lg font-bold text-orange-700 mb-4">
                    For Employers
                  </h4>

                  <div className="space-y-6">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-bold text-orange-700 mb-2">
                        Sponsorship:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        Your employer needs to be approved by the Australian
                        Department of Home Affairs to sponsor overseas workers.
                      </p>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-bold text-red-700 mb-2">
                        Labour Market Testing:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        Employers must prove they couldn't find a suitable
                        Australian worker for the role, highlighting the need to
                        bring in skilled international talent.
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-bold text-yellow-700 mb-2">
                        Salary:
                      </h5>
                      <p className="text-gray-700 text-sm">
                        The salary offered must align with the market rate and
                        meet specific thresholds, such as the Specialist Skills
                        Income Threshold for certain positions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg mt-6">
                <p className="text-purple-800 text-sm">
                  <strong>
                    If you meet these criteria, you could be on the path to
                    securing a Skills in Demand Visa (subclass 482) and working
                    in Australia. Getting the right advice and guidance is key
                    to ensuring your application meets all the requirements.
                  </strong>
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions (FAQ)
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: How long can I stay in Australia with an 189 visa?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> The Skilled Independent Visa (subclass
                    189) allows you to live and work in Australia permanently.
                    There's no time limit on your stay, and you can enjoy all
                    the benefits of permanent residency.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Does an 189 visa require sponsorship?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> No, the 189 visa doesn't require
                    sponsorship from an employer, family member, or state
                    government. You can apply independently based on your skills
                    and qualifications.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Is 75 points enough for an 189 visa?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> While the minimum points required for
                    the 189 visa is 65, scoring 75 points will increase your
                    chances of receiving an invitation to apply. The higher your
                    points, the better your chances.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: What is the difference between visas 189 and 190?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> The 189 visa is for independent
                    applicants, whereas the 190 visa requires a nomination from
                    a state or territory. The 190 visa may offer additional
                    points but has a residency condition tied to the nominating
                    state.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: What happens after the 189 visa expires?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> The 189 visa is a permanent residency
                    visa, meaning it doesn't expire in terms of your stay.
                    However, if you wish to travel outside Australia after five
                    years, you'll need a Resident Return Visa.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Can I apply for 190 and 189 together?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> Yes, you can apply for both the 189 and
                    190 visas simultaneously. However, you'll need to carefully
                    manage the requirements for each and decide which is more
                    beneficial for your situation.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <div className="text-center">
                <p className="text-lg mb-4">
                  The Skills in Demand Visa (Subclass 482) provides excellent
                  opportunities for skilled professionals to work in Australia
                  while contributing to the country's economic growth. With
                  multiple streams available, there's likely a pathway that fits
                  your specific situation and career goals.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    <FileText className="h-4 w-4 mr-2" />
                    Apply for Skills in Demand Visa
                  </Button>
                  <Button className="bg-yellow-500 text-blue-900 hover:bg-yellow-400">
                    <Phone className="h-4 w-4 mr-2" />
                    Get Skills Assessment
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => setIsSubclass482ModalOpen(false)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Migration Experts
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* National Innovation Visa (Subclass 858) Modal */}
      <Dialog
        open={isNationalInnovationModalOpen}
        onOpenChange={setIsNationalInnovationModalOpen}
      >
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-3xl font-bold text-green-700">
                National Innovation Visa (Subclass 858)
              </DialogTitle>
              <Button
                variant="ghost"
                onClick={() => setIsNationalInnovationModalOpen(false)}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-8 py-6">
            {/* What Is the National Innovation Visa */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                What Is the National Innovation Visa?
              </h3>

              <div className="space-y-4">
                <p className="text-gray-700">
                  The National Innovation visa (Subclass 858) is a permanent
                  residency visa for individuals with an internationally
                  recognised record of exceptional achievement in a specific
                  area. It replaced the Global Talent visa in December 2024.
                </p>

                <p className="text-gray-700">
                  It's designed for the high achievers—the kind of people who've
                  made a significant impact in their field and are ready to
                  contribute their talents to Australia.
                </p>

                <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-green-800 italic">
                    <strong>
                      This visa is not for everyone. It's for those who've gone
                      above and beyond, and have the recognition to prove it.
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* At a Glance Table */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                National Innovation Visa (Subclass 858) – At a Glance
              </h3>

              <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                <table className="w-full">
                  <thead className="bg-green-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-green-800">
                        Facts
                      </th>
                      <th className="px-6 py-4 text-left font-semibold text-green-800">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-800">
                        Eligible Fields
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        <div className="space-y-1">
                          <div>– A recognised profession</div>
                          <div>– Sport</div>
                          <div>– The arts</div>
                          <div>– Academia and research</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-25">
                      <td className="px-6 py-4 font-medium text-gray-800">
                        Who Can Apply
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        <div className="space-y-1">
                          <div>– Lodge an Expression of Interest (EOI)</div>
                          <div>– Wait for invitation to apply</div>
                          <div>– Apply within 60 days of invitation</div>
                          <div>
                            – Apply from inside or outside Australia (not in
                            immigration clearance)
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-800">
                        Nominator Requirements
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        <div className="space-y-1">
                          <div>
                            – Must have a national reputation in your field
                          </div>
                          <div>– Can be:</div>
                          <div className="ml-4">• Australian citizen</div>
                          <div className="ml-4">• Permanent resident</div>
                          <div className="ml-4">• Eligible NZ citizen</div>
                          <div className="ml-4">• Australian organisation</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-25">
                      <td className="px-6 py-4 font-medium text-gray-800">
                        Visa Benefits
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        <div className="space-y-1">
                          <div>– Live permanently in Australia</div>
                          <div>– Work and study freely</div>
                          <div>– Access Medicare</div>
                          <div>– Sponsor eligible relatives</div>
                          <div>– Travel for 5 years</div>
                          <div>– Pathway to Australian citizenship</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-800">
                        Required Documents
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        <div className="space-y-1">
                          <div>– Proof of international achievements</div>
                          <div>– Career and qualification details</div>
                          <div>– Nominator's statement</div>
                          <div>
                            – ID and current visa documents (if applicable)
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Eligible Fields */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                Eligible Fields
              </h3>
              <p className="text-gray-700 mb-6">
                To apply for this visa, you must have an exceptional record in
                one of the following areas:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-2">
                    • A recognised profession
                  </h4>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-2">• The arts</h4>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-2">• Sport</h4>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-700 mb-2">
                    • Academia and research
                  </h4>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mt-6">
                <p className="text-blue-800 text-sm italic">
                  <strong>
                    Your achievements must be recognised not just locally, but
                    internationally.
                  </strong>
                </p>
              </div>
            </div>

            {/* Who Can Apply */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                Who Can Apply for the National Innovation Visa?
              </h3>
              <p className="text-gray-700 mb-6">
                Not everyone can just fill out a form and send it off. The
                process starts with an invitation from the Department of Home
                Affairs.
              </p>

              <div className="bg-white p-6 rounded-lg border border-purple-200 mb-6">
                <h4 className="font-bold text-purple-700 mb-4">
                  Here's what you need:
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      You must lodge an Expression of Interest (EOI)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      You must wait to be invited to apply
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Once invited, you have 60 days to submit your application
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      You can apply from inside or outside Australia, as long as
                      you're not in immigration clearance at the time
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      You must have a nominator with a national reputation in
                      your area of talent
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-700 mb-4">
                  Your nominator can be:
                </h4>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">An Australian citizen</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">A permanent resident</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      An eligible New Zealand citizen
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">An Australian organisation</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg mt-6">
                <p className="text-purple-800 text-sm italic">
                  <strong>
                    Most importantly, your track record of achievement must be
                    ongoing. It's not about one good project years ago—it's
                    about consistent excellence.
                  </strong>
                </p>
              </div>
            </div>

            {/* What You Can Do With This Visa */}
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-700 mb-4">
                What You Can Do With This Visa
              </h3>
              <p className="text-gray-700 mb-6">
                The National Innovation visa is one of the most generous
                pathways to live and work in Australia.
              </p>

              <div className="bg-white p-6 rounded-lg border border-orange-200 mb-6">
                <h4 className="font-bold text-orange-700 mb-4">
                  With this visa, you can:
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Live permanently in Australia
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">Work and study freely</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">Enrol in Medicare</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Sponsor eligible relatives to come to Australia
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Travel in and out of the country for five years
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      If you meet the requirements, apply for Australian
                      citizenship in the future
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-100 p-4 rounded-lg">
                <p className="text-orange-800 text-sm italic">
                  <strong>
                    It gives you stability and freedom to continue your work
                    without limitations.
                  </strong>
                </p>
              </div>
            </div>

            {/* What Documents You'll Need */}
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-pink-700 mb-4">
                What Documents You'll Need
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Paperwork matters. A lot.</strong>
              </p>
              <p className="text-gray-700 mb-6">
                When it comes to the National Innovation visa, a strong
                application is built on clear, detailed proof of your
                achievements and identity.
              </p>
              <p className="text-gray-700 mb-6">
                You can't just say you've done amazing things — you need to show
                it.
              </p>

              <div className="space-y-6">
                {/* 1. Proof of International Achievements */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-bold text-pink-700 mb-3">
                    1. Proof of international achievements
                  </h4>
                  <p className="text-gray-700 mb-4">
                    This is the most important part. The Department of Home
                    Affairs wants to see that your work has been recognised
                    worldwide.
                  </p>
                  <p className="text-gray-700 mb-4">You can include:</p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Awards and honours</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        International press or media coverage
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        Invitations to speak at major events
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        Publications, patents, or research with global impact
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Career and Qualification Details */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-700 mb-3">
                    2. Career and qualification details
                  </h4>
                  <p className="text-gray-700">
                    Share your career history — where you've worked, what you've
                    done, and how long you've done it. Also include your
                    qualifications, especially if they relate to your area of
                    expertise.
                  </p>
                </div>

                {/* 3. A Nominator's Statement */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3">
                    3. A nominator's statement
                  </h4>
                  <p className="text-gray-700">
                    Your nominator plays a key role. They need to write a
                    detailed statement backing your achievements and reputation.
                    This must come from someone (or an organisation) with a
                    national reputation in your field.
                  </p>
                </div>

                {/* 4. Personal Documents */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3">
                    4. Personal documents
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Don't forget the basics. You'll need to prove your identity
                    and visa status. This might include:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        Passport or travel document
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Birth certificate</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        Current Australian visa (if you're applying from inside
                        the country)
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5. Other Supporting Material */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-3">
                    5. Other supporting material
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Depending on your field, you might also need:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Portfolio of work</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Reference letters</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        Links to published articles, performances, or
                        exhibitions
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        Media mentions or interviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg mt-6 border border-yellow-300">
                <p className="text-yellow-800 text-sm">
                  <strong>Expert tip:</strong> Remember — the more evidence, the
                  better. But it must be relevant and clearly presented. If
                  something's hard to understand or looks incomplete, it could
                  delay things.
                </p>
              </div>

              <div className="bg-pink-100 p-4 rounded-lg mt-4">
                <p className="text-pink-800 text-sm italic">
                  <strong>
                    Not sure if your documents are enough? That's what we're
                    here for.
                  </strong>
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                FAQs About the National Innovation Visa
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Do I need to be in Australia to apply?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> No. You can be inside or outside
                    Australia when you apply and when the visa is granted. You
                    just can't be in immigration clearance at the time.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Can I include family members in my application?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> Yes, eligible family members can be
                    included in your application. They can also enjoy the same
                    benefits once the visa is granted.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: What if I'm not sure I meet the 'internationally
                    recognised' criteria?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> We recommend booking a FREE consultation
                    so we can assess your case. Every situation is different,
                    and we'll give you clear advice based on your unique
                    achievements.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Can CIA Lawyers help with gathering documents and
                    submitting the EOI?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> Absolutely. We handle everything from
                    checking your eligibility to preparing your application and
                    working with your nominator.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: What if my application is refused?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> We can advise you on possible review
                    options, depending on the reason for the refusal. Having
                    expert legal help from the beginning reduces the risk of
                    refusal.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-green-600 text-white p-6 rounded-lg">
              <div className="text-center">
                <p className="text-lg mb-4">
                  The National Innovation Visa (Subclass 858) is designed for
                  individuals with exceptional international achievements who
                  can contribute significantly to Australia's innovation
                  landscape. This permanent residency pathway offers
                  unparalleled opportunities for global talent.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-white text-green-600 hover:bg-gray-100">
                    <FileText className="h-4 w-4 mr-2" />
                    Apply for National Innovation Visa
                  </Button>
                  <Button className="bg-yellow-500 text-green-900 hover:bg-yellow-400">
                    <Phone className="h-4 w-4 mr-2" />
                    Get Eligibility Assessment
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-black hover:bg-white/10"
                    onClick={() => setIsNationalInnovationModalOpen(false)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Innovation Experts
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Skilled Nominated Visa (Subclass 190) Modal */}
      <Dialog
        open={isSubclass190ModalOpen}
        onOpenChange={setIsSubclass190ModalOpen}
      >
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-3xl font-bold text-blue-700">
                Skilled Nominated Visa (Subclass 190)
              </DialogTitle>
              <Button
                variant="ghost"
                onClick={() => setIsSubclass190ModalOpen(false)}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-8 py-6">
            {/* Benefits Section */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Benefits of the Skilled Nominated Visa (subclass 190)
              </h3>

              <p className="text-gray-700 mb-6">
                The Skilled Nominated Visa (subclass 190) offers a range of
                benefits that make it a great option for skilled professionals
                looking to settle in Australia. Here's what you can expect:
              </p>

              <div className="space-y-6">
                {/* Permanent Residency */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-700 mb-3">
                    Permanent Residency:
                  </h4>
                  <p className="text-gray-700">
                    This visa allows you to live and work permanently anywhere
                    in Australia without the need for renewals.
                  </p>
                </div>

                {/* Access to Medicare */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3">
                    Access to Medicare:
                  </h4>
                  <p className="text-gray-700">
                    As a permanent resident, you'll enjoy free or low-cost
                    medical services through Australia's world-class healthcare
                    system.
                  </p>
                </div>

                {/* Pathway to Citizenship */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3">
                    Pathway to Citizenship:
                  </h4>
                  <p className="text-gray-700">
                    After meeting residency requirements, you can apply for
                    Australian citizenship, opening doors to more rights and
                    privileges.
                  </p>
                </div>

                {/* Sponsorship for Family */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-3">
                    Sponsorship for Family:
                  </h4>
                  <p className="text-gray-700">
                    Once settled, you can sponsor your family members to join
                    you in Australia, making reunification easier.
                  </p>
                </div>
              </div>

              <div className="bg-teal-100 p-4 rounded-lg mt-6 border border-teal-300">
                <p className="text-teal-800 text-center italic">
                  <strong>
                    The Skilled Nominated Visa (subclass 190) not only secures
                    your future in Australia but also gives you the freedom to
                    live, work, and enjoy the benefits of permanent residency.
                  </strong>
                </p>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Eligibility Criteria for the Skilled Nominated Visa (subclass
                190)
              </h3>

              <p className="text-gray-700 mb-6">
                To apply for the Skilled Nominated Visa (subclass 190), there
                are several key criteria you must meet. Here's what you need to
                know:
              </p>

              <div className="space-y-6">
                {/* Age */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3">Age:</h4>
                  <p className="text-gray-700">
                    You must be under 45 years old when you apply for the visa.
                  </p>
                </div>

                {/* Occupation */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3">Occupation:</h4>
                  <p className="text-gray-700">
                    Your occupation should be listed on Australia's Skilled
                    Occupation List (SOL). Make sure your profession aligns with
                    the needs of Australian employers.
                  </p>
                </div>

                {/* English Language Skills */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-3">
                    English Language Skills:
                  </h4>
                  <p className="text-gray-700">
                    You'll need to prove your English proficiency. Typically,
                    this means achieving a minimum of 6.0 in each band of the
                    IELTS exam (or equivalent, depending on the test you take).
                  </p>
                </div>

                {/* Points Test */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-700 mb-3">
                    Points Test:
                  </h4>
                  <p className="text-gray-700">
                    To be eligible, you must score at least 65 points. Points
                    are awarded based on factors such as your age, education,
                    work experience, and English language skills.
                  </p>
                </div>

                {/* Skills Assessment */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 mb-3">
                    Skills Assessment:
                  </h4>
                  <p className="text-gray-700">
                    You will need to undergo a skills assessment by the relevant
                    assessing authority for your occupation. This verifies that
                    your skills meet Australian standards.
                  </p>
                </div>

                {/* State or Territory Nomination */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-700 mb-3">
                    State or Territory Nomination:
                  </h4>
                  <p className="text-gray-700">
                    You must be nominated by an Australian state or territory.
                    Each state has its criteria and may select candidates based
                    on local labour needs.
                  </p>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mt-6 border border-blue-300">
                <p className="text-blue-800 text-center">
                  <strong>
                    Meeting these requirements is crucial to your visa
                    application. It's important to ensure that your
                    qualifications and skills align with Australia's current
                    labour market needs.
                  </strong>
                </p>
              </div>
            </div>

            {/* How CIA Lawyers Will Help You */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                How CIA Lawyers Will Help You Get the Skilled Nominated Visa
                (subclass 190)
              </h3>

              <p className="text-gray-700 mb-6">
                We know that applying for the Skilled Nominated Visa (subclass
                190) can be complex and overwhelming. That's why we're here to
                ensure your application is as smooth and stress-free as
                possible.
              </p>

              <div className="bg-white p-4 rounded-lg mb-6 border border-green-200">
                <h4 className="font-bold text-green-700 mb-4">
                  Here's how we can help:
                </h4>
              </div>

              <div className="space-y-6">
                {/* Expert Advice at Every Step */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3">
                    Expert Advice at Every Step:
                  </h4>
                  <p className="text-gray-700">
                    From submitting your Expression of Interest (EOI) to
                    securing your state or territory nomination, we provide
                    clear, expert guidance to help you at each stage of your
                    application.
                  </p>
                </div>

                {/* Skills Assessment Support */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3">
                    Skills Assessment Support:
                  </h4>
                  <p className="text-gray-700">
                    We'll make sure you're fully prepared for the skills
                    assessment, helping you gather and submit the right
                    documents to ensure everything is in order.
                  </p>
                </div>

                {/* English Language Support */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-3">
                    English Language Support:
                  </h4>
                  <p className="text-gray-700">
                    Not sure if your English proficiency meets the requirements?
                    We'll offer practical advice on how to improve your score
                    and make sure you meet the necessary standards.
                  </p>
                </div>

                {/* Document Organisation */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-700 mb-3">
                    Document Organisation:
                  </h4>
                  <p className="text-gray-700">
                    We help you prepare and organise all your documents, making
                    sure nothing is overlooked or missing. This ensures your
                    application isn't delayed by missing paperwork.
                  </p>
                </div>

                {/* State Nomination Assistance */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 mb-3">
                    State Nomination Assistance:
                  </h4>
                  <p className="text-gray-700">
                    Choosing the right state or territory is crucial. We'll help
                    you decide which one is best for your situation and guide
                    you through the nomination process to ensure approval.
                  </p>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mt-6 border border-green-300">
                <p className="text-green-800 text-center italic">
                  <strong>
                    With our expertise and support, you can focus on your future
                    in Australia, knowing that your application is in safe
                    hands.
                  </strong>
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions (FAQ)
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Does a 190 visa lead to PR?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> Yes, the Subclass 190 Skilled Nominated
                    Visa grants you permanent residency in Australia, allowing
                    you to live, work, and study anywhere in the country.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: What's the difference between an 189 and a 190 visa?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> The main difference is that the 190 visa
                    requires state or territory nomination, while the 189 visa
                    is for individuals who meet the points test without needing
                    any state nomination.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: How long can I stay in Australia with a 190 visa?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> With a 190 visa, you are granted
                    permanent residency, which means you can stay in Australia
                    indefinitely.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: How long after a 190 visa can I apply for citizenship?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> You can apply for Australian citizenship
                    after holding permanent residency for 4 years, including at
                    least 12 months as a permanent resident.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: How long does it take to get PR after nomination?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> After receiving a state nomination, the
                    processing time for the 190 visa can range from 6 to 12
                    months, depending on individual circumstances and
                    application completeness.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <div className="text-center">
                <p className="text-lg mb-4">
                  The Skilled Nominated Visa (Subclass 190) offers a direct
                  pathway to permanent residency in Australia for skilled
                  professionals. With state nomination and comprehensive
                  benefits, this visa provides the stability and opportunities
                  you need to build your future in Australia.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    <FileText className="h-4 w-4 mr-2" />
                    Apply for Subclass 190 Visa
                  </Button>
                  <Button className="bg-yellow-500 text-blue-900 hover:bg-yellow-400">
                    <Phone className="h-4 w-4 mr-2" />
                    Check Your Eligibility
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-black hover:bg-white/10"
                    onClick={() => setIsSubclass190ModalOpen(false)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Get State Nomination Help
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Skilled Work Regional (Provisional) Visa (Subclass 491) Modal */}
      <Dialog
        open={isSubclass491ModalOpen}
        onOpenChange={setIsSubclass491ModalOpen}
      >
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-3xl font-bold text-teal-700">
                Skilled Work Regional (Provisional) Visa (Subclass 491)
              </DialogTitle>
              <Button
                variant="ghost"
                onClick={() => setIsSubclass491ModalOpen(false)}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-8 py-6">
            {/* Benefits Section */}
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                Benefits of the Skilled Work Regional (Provisional) Visa
                (Subclass 491)
              </h3>

              <p className="text-gray-700 mb-6">
                The Skilled Work Regional (Provisional) Visa (Subclass 491)
                offers several advantages for skilled professionals looking to
                settle in Australia's regional areas.
              </p>

              <p className="text-gray-700 mb-6">
                <strong>
                  Let's take a closer look at how this visa can benefit you:
                </strong>
              </p>

              <div className="space-y-6">
                {/* Work and Study in Regional Areas */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-700 mb-3">
                    Work and Study in Regional Areas:
                  </h4>
                  <p className="text-gray-700">
                    With this visa, you can live, work, and study in regional
                    Australia for up to five years. It's an excellent
                    opportunity to experience different parts of Australia, all
                    while advancing your career in a thriving workforce.
                  </p>
                </div>

                {/* Pathway to Permanent Residency */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3">
                    Pathway to Permanent Residency:
                  </h4>
                  <p className="text-gray-700">
                    The Subclass 491 visa is your gateway to permanent residency
                    in Australia. After holding the visa for three years, you
                    may be eligible to apply for permanent residency under the
                    Skilled Regional (Permanent) Visa (Subclass 191), bringing
                    long-term security and stability for you and your family.
                  </p>
                </div>

                {/* Family Sponsorship */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3">
                    Family Sponsorship:
                  </h4>
                  <p className="text-gray-700">
                    This visa allows you to include your family members in your
                    application. If approved, they can join you in Australia,
                    work, study, and enjoy all the benefits that come with
                    living in this beautiful country.
                  </p>
                </div>

                {/* Access to Medicare */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-3">
                    Access to Medicare:
                  </h4>
                  <p className="text-gray-700">
                    As a Subclass 491 visa holder, you'll be eligible for
                    Medicare, Australia's public healthcare system. This means
                    you'll have access to essential healthcare services at
                    little or no cost, giving you peace of mind when it comes to
                    medical needs.
                  </p>
                </div>

                {/* Opportunities in Regional Areas */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-700 mb-3">
                    Opportunities in Regional Areas:
                  </h4>
                  <p className="text-gray-700">
                    Living and working in regional Australia can be a fantastic
                    opportunity. The job market in these areas is often less
                    competitive, increasing your chances of finding a stable
                    job.
                  </p>
                </div>
              </div>

              <div className="bg-teal-100 p-4 rounded-lg mt-6 border border-teal-300">
                <p className="text-teal-800 text-center italic">
                  <strong>
                    This visa not only opens doors to a fulfilling life in
                    Australia but also provides a clear pathway to permanent
                    residency, making it an attractive option for skilled
                    professionals.
                  </strong>
                </p>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Eligibility Criteria for the Skilled Work Regional (Provisional)
                Visa (Subclass 491)
              </h3>

              <p className="text-gray-700 mb-6">
                To successfully apply for the Skilled Work Regional
                (Provisional) Visa (Subclass 491), you'll need to meet several
                important eligibility requirements. Let's break down what you
                need to qualify for this visa:
              </p>

              <div className="space-y-6">
                {/* Age Requirement */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3">
                    Age Requirement:
                  </h4>
                  <p className="text-gray-700">
                    You must be under 45 years of age at the time of your
                    application. This age limit ensures that you are within the
                    working age bracket and can contribute to the regional
                    workforce in Australia.
                  </p>
                </div>

                {/* Skills and Qualifications */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3">
                    Skills and Qualifications:
                  </h4>
                  <p className="text-gray-700">
                    You must have a valid skills assessment for a position on
                    Australia's skilled occupation list. This means you need to
                    demonstrate that your qualifications and work experience
                    meet the requirements for a specific occupation in demand in
                    regional areas.
                  </p>
                </div>

                {/* English Language Proficiency */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-3">
                    English Language Proficiency:
                  </h4>
                  <p className="text-gray-700">
                    To apply, you must prove your proficiency in English by
                    meeting the required score in a recognised English test such
                    as IELTS, TOEFL, or PTE.
                  </p>
                </div>

                {/* Sponsorship or Nomination */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-700 mb-3">
                    Sponsorship or Nomination:
                  </h4>
                  <p className="text-gray-700">
                    You must be sponsored by an eligible family member or
                    nominated by a State or Territory government. The
                    sponsorship or nomination ensures that you will live and
                    work in a regional area of Australia.
                  </p>
                </div>

                {/* Points Test */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 mb-3">Points Test:</h4>
                  <p className="text-gray-700">
                    You must pass the points test, which awards points for
                    factors like age, English language skills, education, and
                    work experience. You need a minimum score of 65 points to be
                    eligible to apply for the visa.
                  </p>
                </div>

                {/* Health and Character Requirements */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-700 mb-3">
                    Health and Character Requirements:
                  </h4>
                  <p className="text-gray-700">
                    You and any family members included in your application must
                    meet Australian health and character standards. This
                    involves undergoing health examinations and providing police
                    checks to ensure you don't have any significant criminal
                    history.
                  </p>
                </div>

                {/* Commitment to Regional Australia */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-700 mb-3">
                    Commitment to Regional Australia:
                  </h4>
                  <p className="text-gray-700">
                    You must be willing to live, work, and study in a designated
                    regional area of Australia for the duration of your visa.
                    This ensures that you contribute to the growth and
                    development of regional communities.
                  </p>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mt-6 border border-blue-300">
                <p className="text-blue-800 text-center">
                  <strong>
                    Meeting these eligibility criteria is crucial for a
                    successful application. If you're unsure about any of the
                    requirements or need assistance, seeking advice from an
                    immigration lawyer can help you navigate the process and
                    ensure everything is in order.
                  </strong>
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions (FAQ)
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Can I move to another state after receiving the 491 visa?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> While you can move to another state,
                    your visa conditions may require you to live and work in the
                    nominated regional area. It's important to comply with these
                    conditions to avoid complications.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: How do I apply for the Subclass 491 visa?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> To apply, submit an Expression of
                    Interest (EOI) through SkillSelect. You must score at least
                    65 points, and once invited, you can apply with the
                    necessary documentation like skills assessments.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: Is there a pathway to permanent residency from the
                    Subclass 491 visa?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> Yes, after holding the Subclass 491 visa
                    for three years, you may apply for permanent residency
                    through the Subclass 191 visa if you meet specific work and
                    residency conditions.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4 bg-white p-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Q: What happens if my Expression of Interest (EOI) is not
                    selected?
                  </h4>
                  <p className="text-gray-700">
                    <strong>A:</strong> If your EOI isn't selected, you'll need
                    to wait for a future invitation. You may increase your
                    chances by improving your points score or adjusting your
                    nominated occupation.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-teal-600 text-white p-6 rounded-lg">
              <div className="text-center">
                <p className="text-lg mb-4">
                  The Skilled Work Regional (Provisional) Visa (Subclass 491)
                  offers an excellent pathway to live and work in regional
                  Australia while building towards permanent residency. With
                  comprehensive benefits including Medicare access, family
                  sponsorship opportunities, and a clear pathway to permanent
                  residency after three years, this visa opens doors to a
                  fulfilling future in Australia's thriving regional
                  communities.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-white text-teal-600 hover:bg-gray-100">
                    <FileText className="h-4 w-4 mr-2" />
                    Apply for Subclass 491 Visa
                  </Button>
                  <Button className="bg-yellow-500 text-teal-900 hover:bg-yellow-400">
                    <Phone className="h-4 w-4 mr-2" />
                    Check Regional Opportunities
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-black hover:bg-white/10"
                    onClick={() => setIsSubclass491ModalOpen(false)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Get Regional Nomination Help
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Skilled Independent Visa (Subclass 189) Modal */}
      <Dialog
        open={isSubclass189ModalOpen}
        onOpenChange={setIsSubclass189ModalOpen}
      >
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-3xl font-bold text-purple-700">
                Skilled Independent Visa (Subclass 189)
              </DialogTitle>
              <Button
                variant="ghost"
                onClick={() => setIsSubclass189ModalOpen(false)}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-8 py-6">
            {/* Detailed Breakdown of Each Stream */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                Detailed Breakdown of Each Stream
              </h3>

              <p className="text-gray-700 mb-6">
                The Skilled Independent Visa (Subclass 189) offers multiple
                streams designed to meet the needs of different applicants. Each
                stream has specific eligibility criteria, and at CIA Lawyers,
                we'll guide you through the details to ensure the right pathway
                for you.
              </p>

              {/* Points Tested Stream */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-purple-700 mb-4">
                  #1. Points tested stream
                </h4>
                <p className="text-gray-700 mb-4">
                  The Points Tested Stream is the most common and flexible
                  option for skilled workers. If you have the right
                  qualifications, work experience, and English skills, you can
                  submit an Expression of Interest (EOI) and be invited to apply
                  for the visa.
                </p>

                <div className="bg-white p-6 rounded-lg border border-purple-200 mb-4">
                  <h5 className="font-bold text-purple-700 mb-3">
                    Requirements:
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Skilled Occupation:</strong> Your profession
                        must be on the Medium and Long-term Strategic Skills
                        List (MLTSSL).
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Age:</strong> You must be under 45 years old at
                        the time of invitation.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>English Proficiency:</strong> You must meet the
                        required English language level.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Points:</strong> You need a minimum of 65
                        points, but the higher your score, the better your
                        chances.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
                  <p className="text-blue-800 italic">
                    <strong>
                      At CIA Lawyers, we'll help you calculate your points and
                      advise on how to maximise your score. Whether it's through
                      your English test results or work experience, we ensure
                      you submit a top-tier application.
                    </strong>
                  </p>
                </div>
              </div>

              {/* Hong Kong & British National Stream */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-green-700 mb-4">
                  #2. Hong Kong & British National (Overseas) Stream
                </h4>
                <p className="text-gray-700 mb-4">
                  If you hold a Hong Kong or British National (Overseas)
                  passport, this stream provides an excellent opportunity for
                  you to apply for permanent residency in Australia.
                </p>

                <div className="bg-white p-6 rounded-lg border border-green-200 mb-4">
                  <h5 className="font-bold text-green-700 mb-3">
                    Requirements:
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        You must meet specific residency and commitment
                        requirements to Australia, including demonstrating your
                        intention to stay long-term.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        You also need to meet health and character standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                  <p className="text-green-800 italic">
                    <strong>
                      If you qualify for this stream, CIA Lawyers can assist you
                      with the application process, ensuring you meet all
                      requirements and increasing your chances of success.
                    </strong>
                  </p>
                </div>
              </div>

              {/* New Zealand Stream */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-red-700 mb-4">
                  #3. New Zealand Stream
                </h4>
                <p className="text-gray-700 mb-4">
                  Please note, the New Zealand Stream for the Subclass 189 visa
                  closed on 1 July 2023. This option was previously available
                  for New Zealand citizens living in Australia, but if you're a
                  New Zealand citizen now seeking permanent residency, there are
                  other visa pathways we can explore for you.
                </p>

                <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                  <p className="text-red-800 italic">
                    <strong>
                      Whether you are a New Zealand citizen or looking for a
                      different visa option, our team at CIA Lawyers can help
                      you explore the best alternatives available for your
                      specific situation.
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Eligibility Criteria for the Skilled Independent Visa (Subclass
                189)
              </h3>

              <p className="text-gray-700 mb-6">
                To successfully apply for the Skilled Independent Visa (subclass
                189), here's what you need to meet. Our team at CIA Lawyers will
                guide you through every step:
              </p>

              <div className="space-y-6">
                {/* Age Requirement */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3">
                    Age Requirement:
                  </h4>
                  <p className="text-gray-700">
                    You must be under 45 years old when you're invited to apply.
                    This is a strict age limit for eligibility.
                  </p>
                </div>

                {/* Nominated Occupation */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3">
                    Nominated Occupation:
                  </h4>
                  <p className="text-gray-700">
                    Your occupation must be on the Medium and Long-term
                    Strategic Skills List (MLTSSL). We'll help you confirm if
                    your occupation is eligible.
                  </p>
                </div>

                {/* Skills Assessment */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-3">
                    Skills Assessment:
                  </h4>
                  <p className="text-gray-700">
                    You must have your qualifications and work experience
                    assessed by the appropriate authority. We'll guide you to
                    the right assessing body and ensure everything is done
                    correctly.
                  </p>
                </div>

                {/* English Language Proficiency */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-700 mb-3">
                    English Language Proficiency:
                  </h4>
                  <p className="text-gray-700">
                    You need to prove your English skills with an approved test,
                    like IELTS or PTE. We'll make sure you're prepared for the
                    test and meet the language requirements.
                  </p>
                </div>

                {/* Points Test */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 mb-3">Points Test:</h4>
                  <p className="text-gray-700">
                    You must score at least 65 points on the points test. We'll
                    help you maximise your points and explore ways to boost your
                    score.
                  </p>
                </div>

                {/* Health and Character */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-700 mb-3">
                    Health and Character:
                  </h4>
                  <p className="text-gray-700">
                    You must meet the health and character requirements,
                    including a medical check-up and police clearance. We'll
                    ensure you're fully prepared for these steps.
                  </p>
                </div>

                {/* Invitation to Apply */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-700 mb-3">
                    Invitation to Apply:
                  </h4>
                  <p className="text-gray-700">
                    You can only apply after receiving an invitation through
                    your Expression of Interest (EOI). We'll help you submit
                    your EOI and increase your chances of getting invited.
                  </p>
                </div>

                {/* New Zealand and Hong Kong Stream */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-bold text-pink-700 mb-3">
                    New Zealand and Hong Kong Stream (If Applicable):
                  </h4>
                  <p className="text-gray-700">
                    New Zealand citizens and Hong Kong passport holders may have
                    additional pathways. We'll help you navigate these streams
                    if you're eligible.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Benefits of the Skilled Independent Visa (Subclass 189)
              </h3>

              <p className="text-gray-700 mb-6">
                The Skilled Independent Visa (Subclass 189) offers numerous
                benefits that can significantly enhance your lifestyle and
                opportunities in Australia. Here's what you can expect:
              </p>

              <div className="space-y-6">
                {/* Permanent Residency */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-700 mb-3">
                    Permanent Residency:
                  </h4>
                  <p className="text-gray-700">
                    Once granted, the Subclass 189 visa allows you to live and
                    work permanently anywhere in Australia. This means you have
                    full rights to reside in the country without the need for
                    constant renewals or restrictions on your stay.
                  </p>
                </div>

                {/* Access to Medicare */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3">
                    Access to Medicare:
                  </h4>
                  <p className="text-gray-700">
                    As a permanent resident, you'll be eligible for Medicare,
                    Australia's public healthcare system. This provides you and
                    your family access to free or low-cost medical services,
                    making healthcare more affordable while you live in
                    Australia.
                  </p>
                </div>

                {/* Pathway to Australian Citizenship */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-3">
                    Pathway to Australian Citizenship:
                  </h4>
                  <p className="text-gray-700">
                    After meeting the residency requirements, you may apply for
                    Australian citizenship. This opens up voting opportunities,
                    working in government jobs, and other privileges that come
                    with full citizenship status.
                  </p>
                </div>

                {/* Sponsorship of Family Members */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-700 mb-3">
                    Sponsorship of Family Members:
                  </h4>
                  <p className="text-gray-700">
                    Once you hold the Skilled Independent Visa (Subclass 189),
                    you can sponsor eligible family members for their permanent
                    residency. This is a great opportunity for reunification
                    with loved ones in Australia.
                  </p>
                </div>

                {/* Travel Flexibility */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-teal-600">
                  <h4 className="font-bold text-teal-700 mb-3">
                    Travel Flexibility:
                  </h4>
                  <p className="text-gray-700">
                    The Subclass 189 visa gives you the freedom to leave and
                    re-enter Australia for up to five years. This travel
                    flexibility means you can explore other parts of the world
                    while still having your home base in Australia.
                  </p>
                </div>

                {/* No Need for Sponsorship or Nomination */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
                  <h4 className="font-bold text-purple-700 mb-3">
                    No Need for Sponsorship or Nomination:
                  </h4>
                  <p className="text-gray-700">
                    Unlike other work visas, you don't need an employer, family
                    member, or state government to sponsor or nominate you. This
                    independence gives you the freedom to move and work anywhere
                    in Australia without restrictions.
                  </p>
                </div>

                {/* Work Anywhere in Australia */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 mb-3">
                    Work Anywhere in Australia:
                  </h4>
                  <p className="text-gray-700">
                    With the Subclass 189 visa, you are not tied to any specific
                    employer or region. You have the freedom to choose where you
                    want to live and work, giving you the flexibility to pursue
                    a variety of career opportunities across the country.
                  </p>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mt-6 border border-green-300">
                <p className="text-green-800 text-center italic">
                  <strong>
                    We are here to help you understand and maximise the benefits
                    of this visa. Let us guide you through the application
                    process, ensuring everything is in place for a smooth
                    transition to your new life in Australia.
                  </strong>
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-purple-600 text-white p-6 rounded-lg">
              <div className="text-center">
                <p className="text-lg mb-4">
                  The Skilled Independent Visa (Subclass 189) represents the
                  ultimate pathway to permanent residency in Australia, offering
                  complete independence from employers or state nominations.
                  With comprehensive benefits including permanent residency,
                  Medicare access, pathway to citizenship, and complete work
                  flexibility across Australia, this visa provides the freedom
                  and security to build your future anywhere in the country.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100">
                    <FileText className="h-4 w-4 mr-2" />
                    Apply for Subclass 189 Visa
                  </Button>
                  <Button className="bg-yellow-500 text-purple-900 hover:bg-yellow-400">
                    <Phone className="h-4 w-4 mr-2" />
                    Calculate Your Points Score
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-black hover:bg-white/10"
                    onClick={() => setIsSubclass189ModalOpen(false)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Get Independent Visa Assessment
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
