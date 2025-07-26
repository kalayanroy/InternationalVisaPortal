import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Monitor, MapPin, Clock, Navigation, Calendar } from "lucide-react";

export default function OurOffice() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Office</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit our modern office space in the heart of Sydney's business district. We've created 
              an environment that fosters collaboration, innovation, and success for our clients.
            </p>
          </div>
        </div>

        {/* Office Features */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Reception Area */}
              <Card className="bg-teal-500 text-white border-0">
                <CardContent className="p-8 text-center">
                  <Building2 className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Reception Area</h3>
                  <p className="text-teal-100">Welcoming entrance with modern design</p>
                </CardContent>
              </Card>

              {/* Meeting Rooms */}
              <Card className="bg-blue-600 text-white border-0">
                <CardContent className="p-8 text-center">
                  <Users className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Meeting Rooms</h3>
                  <p className="text-blue-100">Private consultation spaces</p>
                </CardContent>
              </Card>

              {/* Work Spaces */}
              <Card className="bg-green-600 text-white border-0">
                <CardContent className="p-8 text-center">
                  <Monitor className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Work Spaces</h3>
                  <p className="text-green-100">Collaborative open areas</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Location & Map Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Location Details */}
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="h-8 w-8 text-teal-500 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Visit Our Location</h2>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <Building2 className="h-5 w-5 text-teal-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        Tower One, International Towers<br />
                        100 Barangaroo Ave<br />
                        Barangaroo NSW 2000<br />
                        Sydney, Australia
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-teal-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  {/* Getting Here */}
                  <div className="flex items-start space-x-3">
                    <Navigation className="h-5 w-5 text-teal-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Getting Here</h3>
                      <p className="text-gray-600">
                        Located in the prestigious Barangaroo precinct with excellent 
                        transport links. Wynyard Station is nearby with easy access to 
                        trains, buses, and ferries. Parking available in the building.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule a Visit
                </Button>
              </div>

              {/* Map */}
              <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-teal-500" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-sm">Tower One, Barangaroo NSW 2000</p>
                    <Button variant="outline" className="mt-4 text-teal-600 border-teal-600 hover:bg-teal-50">
                      View larger map
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Virtual Tour Section */}
        <div className="py-16 bg-teal-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Take a Virtual Tour</h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Experience our office space from the comfort of your home with our interactive virtual tour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="bg-white text-teal-600 border-white hover:bg-teal-50">
                <Monitor className="h-4 w-4 mr-2" />
                Start Virtual Tour
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white border-2 border-teal-600">
                <Calendar className="h-4 w-4 mr-2" />
                Book a Visit
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}