
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Index";
import RentTracker from "./pages/RentTracker";
import TenantManagement from "./pages/TenantManagement";
import MaintenanceManagement from "./pages/MaintenanceManagement";
import InvoicePage from "./pages/InvoicePage";
import PropertyPage from "./pages/PropertyPage";
import CompliancePage from "./pages/CompliancePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rent" element={<RentTracker />} />
          <Route path="/tenants" element={<TenantManagement />} />
          <Route path="/maintenance" element={<MaintenanceManagement />} />
          <Route path="/properties" element={<PropertyPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/invoices" element={<InvoicePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
