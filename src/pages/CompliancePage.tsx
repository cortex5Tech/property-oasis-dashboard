
import { useState } from "react";
import { 
  AlertTriangle, 
  Building, 
  CheckCircle, 
  FileUp, 
  Search, 
  ShieldCheck, 
  XCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import DashboardLayout from "@/components/DashboardLayout";

// Helper function to get certificate status
const getCertificateStatus = (expiryDate: string) => {
  const today = new Date();
  const expiry = new Date(expiryDate);
  const daysDiff = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  if (daysDiff < 0) {
    return "expired";
  } else if (daysDiff <= 30) {
    return "expiring";
  } else {
    return "valid";
  }
};

// Certificate status indicator component
const CertificateStatus = ({ status }: { status: string }) => {
  switch (status) {
    case "valid":
      return (
        <div className="flex items-center gap-1 text-success">
          <CheckCircle className="h-4 w-4" />
          <span className="text-xs font-medium">Valid</span>
        </div>
      );
    case "expiring":
      return (
        <div className="flex items-center gap-1 text-warning">
          <AlertTriangle className="h-4 w-4" />
          <span className="text-xs font-medium">Expiring Soon</span>
        </div>
      );
    case "expired":
      return (
        <div className="flex items-center gap-1 text-destructive">
          <XCircle className="h-4 w-4" />
          <span className="text-xs font-medium">Expired</span>
        </div>
      );
    default:
      return null;
  }
};

const CompliancePage = () => {
  const [propertyFilter, setPropertyFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter certificates based on property, status, and search query
  const filteredCertificates = certificates.filter((cert) => {
    const propertyMatch = propertyFilter === "all" || cert.propertyId.toString() === propertyFilter;
    
    const status = getCertificateStatus(cert.expiryDate);
    const statusMatch = statusFilter === "all" || status === statusFilter;
    
    const searchMatch = 
      cert.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      properties.find(p => p.id === cert.propertyId)?.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    return propertyMatch && statusMatch && searchMatch;
  });

  // Get certificate counts by status
  const validCount = certificates.filter(cert => getCertificateStatus(cert.expiryDate) === "valid").length;
  const expiringCount = certificates.filter(cert => getCertificateStatus(cert.expiryDate) === "expiring").length;
  const expiredCount = certificates.filter(cert => getCertificateStatus(cert.expiryDate) === "expired").length;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Compliance Tracker</h1>
            <p className="text-muted-foreground">
              Monitor and manage property compliance certificates
            </p>
          </div>
          <Button className="bg-accent hover:bg-accent/90 sm:self-start">
            <FileUp className="mr-2 h-4 w-4" />
            Upload Certificate
          </Button>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-success">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Valid</span>
                </div>
                <span className="text-2xl font-bold">{validCount}</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-warning">
                  <AlertTriangle className="h-5 w-5" />
                  <span className="font-medium">Expiring Soon</span>
                </div>
                <span className="text-2xl font-bold">{expiringCount}</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-destructive">
                  <XCircle className="h-5 w-5" />
                  <span className="font-medium">Expired</span>
                </div>
                <span className="text-2xl font-bold">{expiredCount}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="all">All Certificates</TabsTrigger>
            <TabsTrigger value="valid">Valid</TabsTrigger>
            <TabsTrigger value="expiring">Expiring Soon</TabsTrigger>
            <TabsTrigger value="expired">Expired</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Property:</span>
                <Select
                  value={propertyFilter}
                  onValueChange={(value) => setPropertyFilter(value)}
                >
                  <SelectTrigger className="w-52">
                    <SelectValue placeholder="Select property" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Properties</SelectItem>
                    {properties.map((property) => (
                      <SelectItem key={property.id} value={property.id.toString()}>
                        {property.address.split(',')[0]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Search certificates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white"
                />
                <Button type="submit" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredCertificates.map((certificate) => {
                const property = properties.find(p => p.id === certificate.propertyId);
                const status = getCertificateStatus(certificate.expiryDate);
                
                return (
                  <Card key={certificate.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle className="text-lg">{certificate.type}</CardTitle>
                          <CardDescription>
                            {property?.address.split(',')[0]}
                          </CardDescription>
                        </div>
                        <CertificateStatus status={status} />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Issue Date:</span>
                          <span className="font-medium">{certificate.issueDate}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Expiry Date:</span>
                          <span className="font-medium">{certificate.expiryDate}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Reference:</span>
                          <span className="font-medium">{certificate.reference}</span>
                        </div>
                      </div>
                      <div className="pt-2 flex justify-between">
                        <Button variant="outline" size="sm">View</Button>
                        <Button variant="outline" size="sm">Replace</Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="valid" className="space-y-4">
            {/* Content for Valid tab - filtered to only show valid certificates */}
          </TabsContent>
          <TabsContent value="expiring" className="space-y-4">
            {/* Content for Expiring tab - filtered to only show certificates expiring soon */}
          </TabsContent>
          <TabsContent value="expired" className="space-y-4">
            {/* Content for Expired tab - filtered to only show expired certificates */}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

// Sample data for properties (same as in PropertyPage)
const properties = [
  {
    id: 1,
    address: "123 High Street, London, E1 6BT",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 1,
    rent: 1500,
    tenanted: true,
    currentTenant: "Sarah Johnson",
  },
  {
    id: 2,
    address: "45 Park Avenue, Manchester, M1 4NQ",
    type: "House",
    bedrooms: 3,
    bathrooms: 2,
    rent: 1800,
    tenanted: true,
    currentTenant: "David Williams",
  },
  {
    id: 3,
    address: "8 Queen's Road, Birmingham, B1 1AA",
    type: "House",
    bedrooms: 4,
    bathrooms: 2,
    rent: 2200,
    tenanted: true,
    currentTenant: "Emma Thompson",
  },
  {
    id: 4,
    address: "27 Seaside Avenue, Brighton, BN1 3XF",
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    rent: 950,
    tenanted: false,
    currentTenant: null,
  },
  {
    id: 5,
    address: "14 Castle Road, Edinburgh, EH1 2NG",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 1,
    rent: 1300,
    tenanted: true,
    currentTenant: "Robert Wilson",
  },
  {
    id: 6,
    address: "92 River Lane, Leeds, LS1 5TR",
    type: "House",
    bedrooms: 3,
    bathrooms: 2,
    rent: 1600,
    tenanted: false,
    currentTenant: null,
  },
];

// Sample data for certificates
const certificates = [
  {
    id: 1,
    propertyId: 1,
    type: "Gas Safety Certificate",
    issueDate: "15 May 2024",
    expiryDate: "14 May 2025",
    reference: "GSC-12345-A",
    fileUrl: "#",
  },
  {
    id: 2,
    propertyId: 1,
    type: "Electrical Installation (EICR)",
    issueDate: "20 January 2023",
    expiryDate: "19 January 2028",
    reference: "EICR-34521-B",
    fileUrl: "#",
  },
  {
    id: 3,
    propertyId: 1,
    type: "Energy Performance (EPC)",
    issueDate: "10 June 2022",
    expiryDate: "9 June 2032",
    reference: "EPC-78912-C",
    fileUrl: "#",
  },
  {
    id: 4,
    propertyId: 2,
    type: "Gas Safety Certificate",
    issueDate: "05 April 2024",
    expiryDate: "04 April 2025",
    reference: "GSC-45678-A",
    fileUrl: "#",
  },
  {
    id: 5,
    propertyId: 2,
    type: "Electrical Installation (EICR)",
    issueDate: "12 March 2021",
    expiryDate: "11 March 2026",
    reference: "EICR-98765-B",
    fileUrl: "#",
  },
  {
    id: 6,
    propertyId: 2,
    type: "Energy Performance (EPC)",
    issueDate: "22 May 2023",
    expiryDate: "21 May 2033",
    reference: "EPC-12378-C",
    fileUrl: "#",
  },
  {
    id: 7,
    propertyId: 3,
    type: "Gas Safety Certificate",
    issueDate: "30 March 2024",
    expiryDate: "29 March 2025",
    reference: "GSC-78901-A",
    fileUrl: "#",
  },
  {
    id: 8,
    propertyId: 3,
    type: "Fire Safety Assessment",
    issueDate: "15 January 2024",
    expiryDate: "14 May 2024",
    reference: "FSA-23456-D",
    fileUrl: "#",
  },
  {
    id: 9,
    propertyId: 4,
    type: "Electrical Installation (EICR)",
    issueDate: "18 February 2024",
    expiryDate: "17 February 2029",
    reference: "EICR-67890-B",
    fileUrl: "#",
  },
  {
    id: 10,
    propertyId: 4,
    type: "Energy Performance (EPC)",
    issueDate: "09 August 2019",
    expiryDate: "08 August 2024",
    reference: "EPC-34567-C",
    fileUrl: "#",
  },
  {
    id: 11,
    propertyId: 5,
    type: "Gas Safety Certificate",
    issueDate: "25 February 2024",
    expiryDate: "24 February 2025",
    reference: "GSC-56789-A",
    fileUrl: "#",
  },
  {
    id: 12,
    propertyId: 6,
    type: "Energy Performance (EPC)",
    issueDate: "14 October 2023",
    expiryDate: "13 October 2033",
    reference: "EPC-89012-C",
    fileUrl: "#",
  },
];

export default CompliancePage;
