
import { FileUp, Plus, Search, User, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import DashboardLayout from "@/components/DashboardLayout";
import { useState } from "react";

const TenantManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTenants = tenants.filter((tenant) =>
    tenant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tenant.property.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tenant.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Tenant Management</h1>
            <p className="text-muted-foreground">
              View and manage all your tenant information
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-accent hover:bg-accent/90">
              <UserPlus className="mr-2 h-4 w-4" />
              Add Tenant
            </Button>
            <Button variant="outline">
              <FileUp className="mr-2 h-4 w-4" />
              Upload Documents
            </Button>
          </div>
        </div>

        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="Search tenants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white"
          />
          <Button type="submit" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTenants.map((tenant) => (
            <Card key={tenant.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-navy h-8"></div>
                <div className="p-6 pt-0 -mt-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16 border-4 border-white bg-navy">
                      <AvatarFallback className="bg-navy text-white text-xl">
                        {tenant.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{tenant.name}</h3>
                      <p className="text-sm text-muted-foreground">Since {tenant.moveInDate}</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Property:</span>
                      <span className="font-medium">{tenant.property}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Rent:</span>
                      <span className="font-medium">£{tenant.rent}/month</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Phone:</span>
                      <span className="font-medium">{tenant.phone}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Email:</span>
                      <span className="font-medium truncate max-w-[200px]">{tenant.email}</span>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="outline" size="sm">
                      View Agreement
                    </Button>
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

// Sample data for tenant management
const tenants = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "07700 900123",
    property: "123 High Street, Flat 2",
    rent: 1200,
    moveInDate: "15 Jan 2025",
  },
  {
    id: 2,
    name: "David Williams",
    email: "david.williams@example.com",
    phone: "07700 900124",
    property: "45 Park Avenue",
    rent: 950,
    moveInDate: "01 Feb 2025",
  },
  {
    id: 3,
    name: "Emma Thompson",
    email: "emma.thompson@example.com",
    phone: "07700 900125",
    property: "8 Queen's Road, Apt 5",
    rent: 1450,
    moveInDate: "12 Mar 2025",
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "07700 900126",
    property: "123 High Street, Flat 3",
    rent: 1100,
    moveInDate: "05 Jan 2025",
  },
  {
    id: 5,
    name: "Jennifer Davis",
    email: "jennifer.davis@example.com",
    phone: "07700 900127",
    property: "45 Park Avenue, Basement",
    rent: 850,
    moveInDate: "20 Feb 2025",
  },
  {
    id: 6,
    name: "Robert Wilson",
    email: "robert.wilson@example.com",
    phone: "07700 900128",
    property: "8 Queen's Road, Apt 2",
    rent: 1300,
    moveInDate: "10 Jan 2025",
  },
];

export default TenantManagement;
