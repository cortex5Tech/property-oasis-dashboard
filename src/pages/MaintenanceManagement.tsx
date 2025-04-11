
import { useState } from "react";
import { 
  AlertCircle, 
  CheckCircle2, 
  ChevronDown, 
  Clock, 
  Plus, 
  Search, 
  Wrench 
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
import DashboardLayout from "@/components/DashboardLayout";

const MaintenanceManagement = () => {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRequests = maintenanceRequests.filter((request) => {
    const statusMatch = statusFilter === "all" || request.status === statusFilter;
    const searchMatch = 
      request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.property.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.tenantName.toLowerCase().includes(searchQuery.toLowerCase());
    
    return statusMatch && searchMatch;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Maintenance Requests</h1>
            <p className="text-muted-foreground">
              Manage and track property maintenance issues
            </p>
          </div>
          <Button className="bg-accent hover:bg-accent/90 sm:self-start">
            <Plus className="mr-2 h-4 w-4" />
            New Request
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Status:</span>
            <Select
              value={statusFilter}
              onValueChange={(value) => setStatusFilter(value)}
            >
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="text"
              placeholder="Search requests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white"
            />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredRequests.map((request) => (
            <Card key={request.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{request.title}</CardTitle>
                    <CardDescription>{request.property}</CardDescription>
                  </div>
                  <StatusIndicator status={request.status} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Reported by:</span>
                      <span className="font-medium">{request.tenantName}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Date raised:</span>
                      <span className="font-medium">{request.dateRaised}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Assigned to:</span>
                      <span className="font-medium">{request.assignedTo || "Unassigned"}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{request.description}</p>
                  <div className="pt-2 flex items-center justify-between">
                    <Button variant="ghost" size="sm">View Details</Button>
                    <Button variant="outline" size="sm">
                      {request.status === "Open" ? "Assign" : 
                       request.status === "In Progress" ? "Mark Resolved" : "Reopen"}
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

// Status indicator component
const StatusIndicator = ({ status }: { status: string }) => {
  let icon;
  let statusClass;

  switch (status) {
    case "Open":
      icon = <AlertCircle className="h-4 w-4" />;
      statusClass = "status-open";
      break;
    case "In Progress":
      icon = <Clock className="h-4 w-4" />;
      statusClass = "status-in-progress";
      break;
    case "Resolved":
      icon = <CheckCircle2 className="h-4 w-4" />;
      statusClass = "status-resolved";
      break;
  }

  return (
    <div className={`flex items-center gap-1 ${statusClass} px-2 py-1 rounded-full`}>
      {icon}
      <span className="text-xs font-medium">{status}</span>
    </div>
  );
};

// Sample data for maintenance management
const maintenanceRequests = [
  {
    id: 1,
    title: "Broken boiler",
    property: "123 High Street, Flat 2",
    tenantName: "Sarah Johnson",
    dateRaised: "10 April 2025",
    status: "Open",
    description: "The boiler is not producing hot water and there's no heating. Tenant reports cold water only.",
    assignedTo: null,
  },
  {
    id: 2,
    title: "Leaking tap",
    property: "45 Park Avenue",
    tenantName: "David Williams",
    dateRaised: "5 April 2025",
    status: "In Progress",
    description: "Kitchen sink tap is constantly dripping, wasting water and making noise.",
    assignedTo: "City Plumbing Ltd",
  },
  {
    id: 3,
    title: "Lock replacement",
    property: "8 Queen's Road, Apt 5",
    tenantName: "Emma Thompson",
    dateRaised: "2 April 2025",
    status: "Resolved",
    description: "Front door lock is sticking and difficult to open. Tenant concerned about security.",
    assignedTo: "Secure Locks Co",
  },
  {
    id: 4,
    title: "Mold in bathroom",
    property: "123 High Street, Flat 3",
    tenantName: "Michael Brown",
    dateRaised: "8 April 2025",
    status: "Open",
    description: "Black mold appearing on bathroom ceiling and around shower area. Ventilation may be inadequate.",
    assignedTo: null,
  },
  {
    id: 5,
    title: "Broken window",
    property: "45 Park Avenue, Basement",
    tenantName: "Jennifer Davis",
    dateRaised: "6 April 2025",
    status: "In Progress",
    description: "Window in living room has cracked glass. Urgent repair needed as it's affecting heating.",
    assignedTo: "GlassFix Ltd",
  },
  {
    id: 6,
    title: "Faulty smoke alarm",
    property: "8 Queen's Road, Apt 2",
    tenantName: "Robert Wilson",
    dateRaised: "1 April 2025",
    status: "Resolved",
    description: "Smoke alarm beeping intermittently even with new batteries. May need replacement.",
    assignedTo: "Safety First Services",
  },
];

export default MaintenanceManagement;
