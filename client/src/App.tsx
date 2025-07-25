import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Universities from "@/pages/universities";
import Services from "@/pages/services";
import About from "@/pages/about";
import SuccessStories from "@/pages/success-stories";
import Consultation from "@/pages/consultation";
import USAUniversities from "@/pages/usa-university";
import UKUniversities from "@/pages/uk-university";
import CanadaUniversities from "@/pages/canada-universities";
import AustraliaUniversities from "@/pages/australia-universities";
import GermanyUniversities from "@/pages/germany-universities";
import SingaporeUniversities from "@/pages/singapore-universities";
import HarvardUniversity from "@/pages/harvard-university";
import UniversityDetail from "@/pages/university-detail";
import CountryUniversities from "@/pages/country-universities-fixed";
import NotFound from "@/pages/not-found";
import Login from "@/pages/login";
import Register from "@/pages/register";
import AdminDashboard from "@/pages/admin-dashboard";
import UserDashboard from "@/pages/user-dashboard";
import StudentApplication from "@/pages/student-application";
import AddUniversity from "@/pages/add-university";
import AttachmentSystem from "@/pages/attachment-system";
import FindCourse from "@/pages/find-course";
import SOPGenerator from "@/pages/sop-generator";
import MigrationService from "@/pages/migration-service";
import EnglishTestBook from "@/pages/english-test-book";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/universities" component={Universities} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/success-stories" component={SuccessStories} />
      <Route path="/consultation" component={Consultation} />
      <Route path="/usa-university" component={USAUniversities} />
      <Route path="/uk-universities" component={UKUniversities} />
      <Route path="/uk-university" component={UKUniversities} />
      <Route path="/canada-universities" component={CanadaUniversities} />
      <Route path="/australia-universities" component={AustraliaUniversities} />
      <Route path="/germany-universities" component={GermanyUniversities} />
      <Route path="/singapore-universities" component={SingaporeUniversities} />
      <Route path="/harvard-university" component={HarvardUniversity} />
      <Route path="/university/:id" component={UniversityDetail} />
      <Route path="/country/:id" component={CountryUniversities} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/admin-dashboard" component={AdminDashboard} />
      <Route path="/user-dashboard" component={UserDashboard} />
      <Route path="/student-application" component={StudentApplication} />
      <Route path="/add-university" component={AddUniversity} />
      <Route path="/attachment-system" component={AttachmentSystem} />
      <Route path="/find-course" component={FindCourse} />
      <Route path="/courses" component={FindCourse} />
      <Route path="/courses/:level" component={FindCourse} />
      <Route path="/sop-generator" component={SOPGenerator} />
      <Route path="/migration-service" component={MigrationService} />
      <Route path="/english-test-book" component={EnglishTestBook} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
