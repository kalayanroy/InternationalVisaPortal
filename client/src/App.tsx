import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import USAUniversities from "@/pages/usa-universities-fixed";
import UKUniversities from "@/pages/uk-universities";
import CanadaUniversities from "@/pages/canada-universities";
import AustraliaUniversities from "@/pages/australia-universities";
import GermanyUniversities from "@/pages/germany-universities";
import SingaporeUniversities from "@/pages/singapore-universities";
import HarvardUniversity from "@/pages/harvard-university";
import UniversityDetail from "@/pages/university-detail";
import CountryUniversities from "@/pages/country-universities";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/usa-universities" component={USAUniversities} />
      <Route path="/uk-universities" component={UKUniversities} />
      <Route path="/canada-universities" component={CanadaUniversities} />
      <Route path="/australia-universities" component={AustraliaUniversities} />
      <Route path="/germany-universities" component={GermanyUniversities} />
      <Route path="/singapore-universities" component={SingaporeUniversities} />
      <Route path="/harvard-university" component={HarvardUniversity} />
      <Route path="/university/:id" component={UniversityDetail} />
      <Route path="/country/:id" component={CountryUniversities} />
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
