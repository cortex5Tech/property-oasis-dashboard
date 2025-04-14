
import { useState } from "react";
import { Building, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";

const PropertyPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProperties = properties.filter((property) =>
    property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Properties</h1>
            <p className="text-muted-foreground">
              Manage your property portfolio
            </p>
          </div>
          <Button className="bg-accent hover:bg-accent/90 sm:self-start">
            <Plus className="mr-2 h-4 w-4" />
            Add Property
          </Button>
        </div>

        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white"
          />
          <Button type="submit" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="h-40 bg-muted relative">
                  {property.imageUrl ? (
                    <img 
                      src={property.imageUrl} 
                      alt={property.address} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Building className="h-16 w-16 text-muted-foreground opacity-30" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1">{property.address}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">{property.type}</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">
                      {property.tenanted ? "Tenanted" : "Vacant"}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Bedrooms:</span>
                      <span className="font-medium">{property.bedrooms}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Bathrooms:</span>
                      <span className="font-medium">{property.bathrooms}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Monthly Rent:</span>
                      <span className="font-medium">£{property.rent}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Current Tenant:</span>
                      <span className="font-medium">{property.currentTenant || "None"}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">Details</Button>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

// Sample data for properties
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
  },
];

export default PropertyPage;
