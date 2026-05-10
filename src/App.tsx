import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "./hooks/use-auth";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Services from "./pages/Services.tsx";
import IndustriesPage from "./pages/IndustriesPage.tsx";
import ProcessPage from "./pages/ProcessPage.tsx";
import WorkPage from "./pages/WorkPage.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import BookConsultationPage from "./pages/BookConsultationPage.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsPage from "./pages/TermsPage.tsx";
import LoginPage from "./pages/admin/LoginPage.tsx";
import SignupPage from "./pages/admin/SignupPage.tsx";
import DashboardPage from "./pages/admin/DashboardPage.tsx";
import { ConsultationModal } from "./components/site/ConsultationModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ConsultationModal />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-consultation" element={<BookConsultationPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/admin/signup" element={<SignupPage />} />
            <Route path="/admin/dashboard" element={<DashboardPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
