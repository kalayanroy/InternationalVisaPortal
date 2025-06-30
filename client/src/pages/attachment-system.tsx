import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ArrowLeft, Download, Upload, Plus, School, FileText, DollarSign, Award, Calendar } from "lucide-react";

export default function AttachmentSystem() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedUniversityId, setSelectedUniversityId] = useState<string>("");

  // Fetch universities for the selector
  const { data: universities = [] } = useQuery({
    queryKey: ["/api/admin/universities"],
  });

  // Fetch all attachment data (now filtered by university)
  const { data: schools = [], isLoading: schoolsLoading } = useQuery({
    queryKey: ["/api/admin/schools", selectedUniversityId],
    enabled: !!selectedUniversityId,
  });

  const { data: visaRequirements = [], isLoading: visaLoading } = useQuery({
    queryKey: ["/api/admin/visa-requirements", selectedUniversityId],
    enabled: !!selectedUniversityId,
  });

  const { data: costs = [], isLoading: costsLoading } = useQuery({
    queryKey: ["/api/admin/costs", selectedUniversityId],
    enabled: !!selectedUniversityId,
  });

  const { data: scholarships = [], isLoading: scholarshipsLoading } = useQuery({
    queryKey: ["/api/admin/scholarships", selectedUniversityId],
    enabled: !!selectedUniversityId,
  });

  const { data: admissionTimeline = [], isLoading: timelineLoading } = useQuery({
    queryKey: ["/api/admin/admission-timeline", selectedUniversityId],
    enabled: !!selectedUniversityId,
  });

  // Import Harvard data mutation
  const importHarvardData = useMutation({
    mutationFn: async () => {
      const response = await apiRequest('POST', '/api/admin/import-harvard-data', {});
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/schools"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/visa-requirements"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/costs"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/scholarships"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/admission-timeline"] });
      toast({
        title: "Success",
        description: `Harvard data imported: ${data.imported.schools} schools, ${data.imported.visaRequirements} visa types, ${data.imported.costs} cost categories, ${data.imported.scholarships} scholarships, ${data.imported.timeline} timeline items`,
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const isLoading = schoolsLoading || visaLoading || costsLoading || scholarshipsLoading || timelineLoading;

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
            <h1 className="text-xl font-semibold text-white">Attachment Text System</h1>
            <Button
              onClick={() => importHarvardData.mutate()}
              disabled={importHarvardData.isPending}
              className="bg-gold hover:bg-gold/90 text-navy"
            >
              {importHarvardData.isPending ? (
                "Importing..."
              ) : (
                <>
                  <Upload className="h-4 w-4 mr-2" />
                  Import Harvard Data
                </>
              )}
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-navy flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Attachment Text Management System
            </CardTitle>
            <CardDescription className="text-gray-600">
              Manage and organize all attachment text data with separated database tables
            </CardDescription>
          </CardHeader>

          <CardContent>
            {/* University Selector */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-gray-700">Select University:</label>
                <Select value={selectedUniversityId} onValueChange={setSelectedUniversityId}>
                  <SelectTrigger className="w-64">
                    <SelectValue placeholder="Choose a university..." />
                  </SelectTrigger>
                  <SelectContent>
                    {universities.map((university: any) => (
                      <SelectItem key={university.id} value={university.id.toString()}>
                        {university.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {!selectedUniversityId && (
                <p className="text-sm text-gray-500 mt-2">
                  Please select a university to view and manage its attachment data.
                </p>
              )}
            </div>

            <Tabs defaultValue="schools" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="schools" className="flex items-center gap-2">
                  <School className="h-4 w-4" />
                  Schools
                </TabsTrigger>
                <TabsTrigger value="visa" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Visa Requirements
                </TabsTrigger>
                <TabsTrigger value="costs" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Costs
                </TabsTrigger>
                <TabsTrigger value="scholarships" className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Scholarships
                </TabsTrigger>
                <TabsTrigger value="timeline" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Timeline
                </TabsTrigger>
              </TabsList>

              {/* Schools Tab */}
              <TabsContent value="schools" className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-navy">Schools & Programs</h3>
                    <p className="text-gray-600">Harvard University schools and programs</p>
                  </div>
                  <Badge variant="secondary">{schools.length} Schools</Badge>
                </div>

                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold">School Name</TableHead>
                        <TableHead className="font-semibold">Category</TableHead>
                        <TableHead className="font-semibold">Tuition</TableHead>
                        <TableHead className="font-semibold">Duration</TableHead>
                        <TableHead className="font-semibold">Deadline</TableHead>
                        <TableHead className="font-semibold">Requirements</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {isLoading ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8">
                            Loading schools...
                          </TableCell>
                        </TableRow>
                      ) : schools.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8">
                            No schools found. Import Harvard data to populate.
                          </TableCell>
                        </TableRow>
                      ) : (
                        schools.map((school: any) => (
                          <TableRow key={school.id}>
                            <TableCell className="font-medium">{school.name}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{school.category}</Badge>
                            </TableCell>
                            <TableCell className="text-green-600 font-semibold">{school.tuition}</TableCell>
                            <TableCell>{school.duration}</TableCell>
                            <TableCell className="text-red-600">{school.deadline}</TableCell>
                            <TableCell className="max-w-xs truncate">{school.requirements}</TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              {/* Visa Requirements Tab */}
              <TabsContent value="visa" className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-navy">Visa Requirements</h3>
                    <p className="text-gray-600">Student visa types and requirements</p>
                  </div>
                  <Badge variant="secondary">{visaRequirements.length} Visa Types</Badge>
                </div>

                <div className="grid gap-6">
                  {isLoading ? (
                    <div className="text-center py-8">Loading visa requirements...</div>
                  ) : visaRequirements.length === 0 ? (
                    <div className="text-center py-8">
                      No visa requirements found. Import Harvard data to populate.
                    </div>
                  ) : (
                    visaRequirements.map((visa: any) => (
                      <Card key={visa.id} className="border border-gray-200">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-navy">{visa.visaType}</CardTitle>
                              <CardDescription>
                                Processing: {visa.processing} • Fee: {visa.fee} • Interview: {visa.interview}
                              </CardDescription>
                            </div>
                            <Badge variant="outline">Visa Type</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div>
                            <h4 className="font-semibold mb-2">Requirements:</h4>
                            <ul className="space-y-1">
                              {visa.requirements?.map((req: string, index: number) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="w-2 h-2 bg-navy rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="text-sm">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </TabsContent>

              {/* Costs Tab */}
              <TabsContent value="costs" className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-navy">Cost Breakdown</h3>
                    <p className="text-gray-600">Annual costs for different study levels</p>
                  </div>
                  <Badge variant="secondary">{costs.length} Cost Categories</Badge>
                </div>

                <div className="grid gap-6">
                  {isLoading ? (
                    <div className="text-center py-8">Loading costs...</div>
                  ) : costs.length === 0 ? (
                    <div className="text-center py-8">
                      No costs found. Import Harvard data to populate.
                    </div>
                  ) : (
                    costs.map((cost: any) => (
                      <Card key={cost.id} className="border border-gray-200">
                        <CardHeader>
                          <CardTitle className="text-navy capitalize">{cost.category} Costs</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-gray-600">Tuition</p>
                              <p className="font-semibold text-green-600">{cost.tuition}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Fees</p>
                              <p className="font-semibold">{cost.fees}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Room & Board</p>
                              <p className="font-semibold">{cost.roomBoard}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Books</p>
                              <p className="font-semibold">{cost.books}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Personal</p>
                              <p className="font-semibold">{cost.personal}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Total</p>
                              <p className="font-bold text-lg text-navy">{cost.total}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </TabsContent>

              {/* Scholarships Tab */}
              <TabsContent value="scholarships" className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-navy">Scholarships & Financial Aid</h3>
                    <p className="text-gray-600">Available funding opportunities</p>
                  </div>
                  <Badge variant="secondary">{scholarships.length} Scholarships</Badge>
                </div>

                <div className="grid gap-4">
                  {isLoading ? (
                    <div className="text-center py-8">Loading scholarships...</div>
                  ) : scholarships.length === 0 ? (
                    <div className="text-center py-8">
                      No scholarships found. Import Harvard data to populate.
                    </div>
                  ) : (
                    scholarships.map((scholarship: any) => (
                      <Card key={scholarship.id} className="border border-gray-200">
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="font-semibold text-navy">{scholarship.name}</h4>
                            <Badge className="bg-gold text-navy">{scholarship.amount}</Badge>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <p className="text-sm text-gray-600">Criteria:</p>
                              <p className="text-sm">{scholarship.criteria}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Coverage:</p>
                              <p className="text-sm">{scholarship.coverage}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </TabsContent>

              {/* Timeline Tab */}
              <TabsContent value="timeline" className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-navy">Admission Timeline</h3>
                    <p className="text-gray-600">Important dates and deadlines</p>
                  </div>
                  <Badge variant="secondary">{admissionTimeline.length} Timeline Items</Badge>
                </div>

                <div className="space-y-4">
                  {isLoading ? (
                    <div className="text-center py-8">Loading timeline...</div>
                  ) : admissionTimeline.length === 0 ? (
                    <div className="text-center py-8">
                      No timeline found. Import Harvard data to populate.
                    </div>
                  ) : (
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                      {admissionTimeline.map((item: any, index: number) => (
                        <div key={item.id} className="relative flex items-start gap-4 pb-8">
                          <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center text-white text-sm font-semibold relative z-10">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="bg-white border border-gray-200 rounded-lg p-4">
                              <p className="font-semibold text-navy">{item.date}</p>
                              <p className="text-gray-700">{item.task}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}