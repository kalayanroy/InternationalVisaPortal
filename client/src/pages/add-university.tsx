import { useState } from "react";
import { useLocation } from "wouter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Plus, Save } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

export default function AddUniversity() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [universityData, setUniversityData] = useState({
    countryId: "",
    name: "",
    country: "",
    flag: "",
    city: "",
    ranking: "",
    tuitionFee: "",
    requirements: "",
    programs: "",
    students: "",
    image: "",
    description: "",
    highlights: "",
    topUniversities: "",
  });

  // Create university mutation
  const createUniversityMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest(
        "POST",
        "/api/admin/universities",
        JSON.stringify(data),
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/universities"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/dashboard"] });
      toast({
        title: "Success",
        description: "University created successfully",
      });
      setLocation("/admin-dashboard");
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Fill Australia example data
  const fillAustraliaData = () => {
    setUniversityData({
      countryId: "australia",
      name: "Australia",
      country: "Australia",
      flag: "🇦🇺",
      city: "",
      ranking: "",
      tuitionFee: "",
      requirements: "",
      programs: "22,000+ Programs",
      students: "400K+ International Students",
      image:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "World-class education in a vibrant multicultural environment with great weather.",
      highlights: "Work Rights, Beautiful Cities, Research Focus",
      topUniversities:
        "Australian National University, Bond University, University of Sydney, More +",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !universityData.countryId ||
      !universityData.name ||
      !universityData.country
    ) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Prepare data for submission
    const submitData = {
      ...universityData,
      ranking: universityData.ranking ? parseInt(universityData.ranking) : null,
      highlights: universityData.highlights
        ? universityData.highlights
            .split(",")
            .map((h) => h.trim())
            .filter((h) => h)
        : [],
      topUniversities: universityData.topUniversities
        ? universityData.topUniversities
            .split(",")
            .map((u) => u.trim())
            .filter((u) => u)
        : [],
    };

    createUniversityMutation.mutate(submitData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy/95 to-purple-900">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Button
              variant="ghost"
              onClick={() => setLocation("/admin-dashboard")}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-xl font-semibold text-white">
              Add New University
            </h1>
            <div className="w-24"></div> {/* Spacer for center alignment */}
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl text-navy">
                  Create University Entry
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  Fill in comprehensive university information for the database
                </CardDescription>
              </div>
              <Button
                onClick={fillAustraliaData}
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white"
              >
                <Plus className="h-4 w-4 mr-2" />
                Fill Australia Example
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-navy border-b border-gray-200 pb-2">
                  Basic Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="countryId"
                      className="text-sm font-medium text-gray-700"
                    >
                      Country ID *{" "}
                      <span className="text-gray-500">(e.g., australia)</span>
                    </Label>
                    <Input
                      id="countryId"
                      value={universityData.countryId}
                      onChange={(e) =>
                        setUniversityData((prev) => ({
                          ...prev,
                          countryId: e.target.value,
                        }))
                      }
                      placeholder="australia"
                      required
                      className="border-gray-300 focus:border-navy focus:ring-navy"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="country"
                      className="text-sm font-medium text-gray-700"
                    >
                      Country Name *{" "}
                      <span className="text-gray-500">(e.g., Australia)</span>
                    </Label>
                    <Input
                      id="country"
                      value={universityData.country}
                      onChange={(e) =>
                        setUniversityData((prev) => ({
                          ...prev,
                          country: e.target.value,
                        }))
                      }
                      placeholder="Australia"
                      required
                      className="border-gray-300 focus:border-navy focus:ring-navy"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    University/Country Name *{" "}
                    <span className="text-gray-500">(Display name)</span>
                  </Label>
                  <Input
                    id="name"
                    value={universityData.name}
                    onChange={(e) =>
                      setUniversityData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Australia"
                    required
                    className="border-gray-300 focus:border-navy focus:ring-navy"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="flag"
                      className="text-sm font-medium text-gray-700"
                    >
                      Flag Emoji
                    </Label>
                    <Input
                      id="flag"
                      value={universityData.flag}
                      onChange={(e) =>
                        setUniversityData((prev) => ({
                          ...prev,
                          flag: e.target.value,
                        }))
                      }
                      placeholder="🇦🇺"
                      className="border-gray-300 focus:border-navy focus:ring-navy"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="city"
                      className="text-sm font-medium text-gray-700"
                    >
                      City
                    </Label>
                    <Input
                      id="city"
                      value={universityData.city}
                      onChange={(e) =>
                        setUniversityData((prev) => ({
                          ...prev,
                          city: e.target.value,
                        }))
                      }
                      placeholder="Sydney"
                      className="border-gray-300 focus:border-navy focus:ring-navy"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="ranking"
                      className="text-sm font-medium text-gray-700"
                    >
                      Ranking
                    </Label>
                    <Input
                      id="ranking"
                      type="number"
                      value={universityData.ranking}
                      onChange={(e) =>
                        setUniversityData((prev) => ({
                          ...prev,
                          ranking: e.target.value,
                        }))
                      }
                      placeholder="1"
                      className="border-gray-300 focus:border-navy focus:ring-navy"
                    />
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-navy border-b border-gray-200 pb-2">
                  Statistics & Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="programs"
                      className="text-sm font-medium text-gray-700"
                    >
                      Programs
                    </Label>
                    <Input
                      id="programs"
                      value={universityData.programs}
                      onChange={(e) =>
                        setUniversityData((prev) => ({
                          ...prev,
                          programs: e.target.value,
                        }))
                      }
                      placeholder="22,000+ Programs"
                      className="border-gray-300 focus:border-navy focus:ring-navy"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="students"
                      className="text-sm font-medium text-gray-700"
                    >
                      International Students
                    </Label>
                    <Input
                      id="students"
                      value={universityData.students}
                      onChange={(e) =>
                        setUniversityData((prev) => ({
                          ...prev,
                          students: e.target.value,
                        }))
                      }
                      placeholder="400K+ International Students"
                      className="border-gray-300 focus:border-navy focus:ring-navy"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="tuitionFee"
                    className="text-sm font-medium text-gray-700"
                  >
                    Tuition Fee
                  </Label>
                  <Input
                    id="tuitionFee"
                    value={universityData.tuitionFee}
                    onChange={(e) =>
                      setUniversityData((prev) => ({
                        ...prev,
                        tuitionFee: e.target.value,
                      }))
                    }
                    placeholder="$50,000/year"
                    className="border-gray-300 focus:border-navy focus:ring-navy"
                  />
                </div>
              </div>

              {/* Visual & Content */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-navy border-b border-gray-200 pb-2">
                  Visual & Content
                </h3>

                <div className="space-y-2">
                  <Label
                    htmlFor="image"
                    className="text-sm font-medium text-gray-700"
                  >
                    Image URL
                  </Label>
                  <Input
                    id="image"
                    value={universityData.image}
                    onChange={(e) =>
                      setUniversityData((prev) => ({
                        ...prev,
                        image: e.target.value,
                      }))
                    }
                    placeholder="https://images.unsplash.com/photo-..."
                    className="border-gray-300 focus:border-navy focus:ring-navy"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="description"
                    className="text-sm font-medium text-gray-700"
                  >
                    Description
                  </Label>
                  <textarea
                    id="description"
                    className="w-full p-3 border border-gray-300 rounded-md resize-none focus:border-navy focus:ring-navy"
                    rows={4}
                    value={universityData.description}
                    onChange={(e) =>
                      setUniversityData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="World-class education in a vibrant multicultural environment with great weather."
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="topUniversities"
                    className="text-sm font-medium text-gray-700"
                  >
                    Top Universities{" "}
                    <span className="text-gray-500">(comma-separated)</span>
                  </Label>
                  <Input
                    id="topUniversities"
                    value={universityData.topUniversities}
                    onChange={(e) =>
                      setUniversityData((prev) => ({
                        ...prev,
                        topUniversities: e.target.value,
                      }))
                    }
                    placeholder="Australian National University, Bond University, University of Sydney"
                    className="border-gray-300 focus:border-navy focus:ring-navy"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="highlights"
                    className="text-sm font-medium text-gray-700"
                  >
                    Highlights{" "}
                    <span className="text-gray-500">(comma-separated)</span>
                  </Label>
                  <Input
                    id="highlights"
                    value={universityData.highlights}
                    onChange={(e) =>
                      setUniversityData((prev) => ({
                        ...prev,
                        highlights: e.target.value,
                      }))
                    }
                    placeholder="Work Rights, Beautiful Cities, Research Focus"
                    className="border-gray-300 focus:border-navy focus:ring-navy"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="requirements"
                    className="text-sm font-medium text-gray-700"
                  >
                    Requirements
                  </Label>
                  <textarea
                    id="requirements"
                    className="w-full p-3 border border-gray-300 rounded-md resize-none focus:border-navy focus:ring-navy"
                    rows={3}
                    value={universityData.requirements}
                    onChange={(e) =>
                      setUniversityData((prev) => ({
                        ...prev,
                        requirements: e.target.value,
                      }))
                    }
                    placeholder="IELTS: 6.5+, GPA: 3.0+, Bachelor's degree required"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setLocation("/admin-dashboard")}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={createUniversityMutation.isPending}
                  className="bg-navy hover:bg-navy/90 text-white px-8"
                >
                  {createUniversityMutation.isPending ? (
                    "Creating..."
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Create University
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
