
import { useState } from "react";
import { ArrowUpDown, ChevronDown, Download, Plus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DashboardLayout from "@/components/DashboardLayout";

const RentTracker = () => {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [propertyFilter, setPropertyFilter] = useState<string>("all");

  const filteredRents = rents.filter((rent) => {
    const statusMatch = statusFilter === "all" || rent.status === statusFilter;
    const propertyMatch = propertyFilter === "all" || rent.property === propertyFilter;
    return statusMatch && propertyMatch;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Rent Tracker</h1>
            <p className="text-muted-foreground">
              Monitor and manage all rental payments
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-accent hover:bg-accent/90">
              <Plus className="mr-2 h-4 w-4" />
              Add Manual Payment
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm">
          <div className="p-4 border-b flex flex-col sm:flex-row gap-4">
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
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Property:</span>
              <Select
                value={propertyFilter}
                onValueChange={(value) => setPropertyFilter(value)}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select property" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Properties</SelectItem>
                  <SelectItem value="123 High Street">123 High Street</SelectItem>
                  <SelectItem value="45 Park Avenue">45 Park Avenue</SelectItem>
                  <SelectItem value="8 Queen's Road">8 Queen's Road</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tenant Name</TableHead>
                  <TableHead>Property</TableHead>
                  <TableHead>Rent Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRents.map((rent) => (
                  <TableRow key={rent.id}>
                    <TableCell className="font-medium">{rent.tenantName}</TableCell>
                    <TableCell>{rent.property}</TableCell>
                    <TableCell>£{rent.amount}</TableCell>
                    <TableCell>{rent.dueDate}</TableCell>
                    <TableCell>
                      <span className={`status-badge status-${rent.status.toLowerCase()}`}>
                        {rent.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <ChevronDown className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="flex items-center">
                            <Send className="mr-2 h-4 w-4" />
                            <span>Send Reminder</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center">
                            <Plus className="mr-2 h-4 w-4" />
                            <span>Log Payment</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

// Sample data for rent tracker
const rents = [
  {
    id: 1,
    tenantName: "Sarah Johnson",
    property: "123 High Street",
    amount: 1200,
    dueDate: "15 April 2025",
    status: "Pending",
  },
  {
    id: 2,
    tenantName: "David Williams",
    property: "45 Park Avenue",
    amount: 950,
    dueDate: "18 April 2025",
    status: "Pending",
  },
  {
    id: 3,
    tenantName: "Emma Thompson",
    property: "8 Queen's Road",
    amount: 1450,
    dueDate: "22 April 2025",
    status: "Pending",
  },
  {
    id: 4,
    tenantName: "Michael Brown",
    property: "123 High Street",
    amount: 1100,
    dueDate: "10 April 2025",
    status: "Paid",
  },
  {
    id: 5,
    tenantName: "Jennifer Davis",
    property: "45 Park Avenue",
    amount: 850,
    dueDate: "05 April 2025",
    status: "Paid",
  },
  {
    id: 6,
    tenantName: "Robert Wilson",
    property: "8 Queen's Road",
    amount: 1300,
    dueDate: "01 April 2025",
    status: "Paid",
  },
  {
    id: 7,
    tenantName: "Jessica Clark",
    property: "123 High Street",
    amount: 750,
    dueDate: "25 March 2025",
    status: "Overdue",
  },
];

export default RentTracker;
