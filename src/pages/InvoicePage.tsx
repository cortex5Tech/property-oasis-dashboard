
import { useState } from "react";
import { ChevronDown, Download, FileText, Plus, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import DashboardLayout from "@/components/DashboardLayout";

const InvoicePage = () => {
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredInvoices = invoices.filter((invoice) => {
    return statusFilter === "all" || invoice.status === statusFilter;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Invoices</h1>
            <p className="text-muted-foreground">
              Manage and generate rental invoices
            </p>
          </div>
          <Button className="bg-accent hover:bg-accent/90 sm:self-start">
            <Plus className="mr-2 h-4 w-4" />
            Generate Invoice
          </Button>
        </div>

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
              <SelectItem value="unpaid">Unpaid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-white rounded-lg border shadow-sm">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice #</TableHead>
                  <TableHead>Tenant</TableHead>
                  <TableHead>Property</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInvoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>INV-{invoice.id.toString().padStart(4, '0')}</span>
                      </div>
                    </TableCell>
                    <TableCell>{invoice.tenant}</TableCell>
                    <TableCell>{invoice.property}</TableCell>
                    <TableCell>£{invoice.amount}</TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>
                      <span className={`status-badge status-${invoice.status === "Paid" ? "paid" : "overdue"}`}>
                        {invoice.status}
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
                            <Download className="mr-2 h-4 w-4" />
                            <span>Download PDF</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center">
                            <Printer className="mr-2 h-4 w-4" />
                            <span>Print</span>
                          </DropdownMenuItem>
                          {invoice.status === "Unpaid" && (
                            <DropdownMenuItem className="flex items-center">
                              <Plus className="mr-2 h-4 w-4" />
                              <span>Mark as Paid</span>
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Invoice Preview Card */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Invoice Preview</h2>
          <div className="bg-white rounded-lg border shadow-sm p-8 max-w-3xl mx-auto">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-navy">Property Oasis</h2>
                <p className="text-sm text-muted-foreground">Property Management</p>
                <div className="mt-4">
                  <p className="text-sm">123 Business Street</p>
                  <p className="text-sm">London, W1A 1AA</p>
                  <p className="text-sm">United Kingdom</p>
                  <p className="text-sm">info@propertyoasis.com</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-navy">INVOICE</div>
                <div className="text-sm mt-2">
                  <p><span className="font-medium">Invoice #:</span> INV-0001</p>
                  <p><span className="font-medium">Date:</span> 15 April 2025</p>
                  <p><span className="font-medium">Due Date:</span> 30 April 2025</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="text-sm font-medium">Bill To:</div>
              <div className="text-sm mt-1">
                <p className="font-medium">Sarah Johnson</p>
                <p>123 High Street, Flat 2</p>
                <p>London, E1 6AN</p>
                <p>sarah.johnson@example.com</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Monthly Rent (May 2025)</TableCell>
                    <TableCell className="text-right">£1,200.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Utilities (Water, Electricity, Gas)</TableCell>
                    <TableCell className="text-right">£150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Internet Service</TableCell>
                    <TableCell className="text-right">£45.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Total</TableCell>
                    <TableCell className="text-right font-medium">£1,395.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-8 pt-4 border-t text-sm">
              <p className="font-medium mb-2">Payment Methods:</p>
              <p>Bank Transfer to: Property Oasis Ltd</p>
              <p>Account: 12345678</p>
              <p>Sort Code: 12-34-56</p>
              <p>Reference: INV-0001</p>
            </div>
            
            <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
              <p>Thank you for your business!</p>
              <p>If you have any questions, please contact us at support@propertyoasis.com</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

// Sample data for invoices
const invoices = [
  {
    id: 1,
    tenant: "Sarah Johnson",
    property: "123 High Street, Flat 2",
    amount: 1395,
    date: "15 April 2025",
    status: "Unpaid",
  },
  {
    id: 2,
    tenant: "David Williams",
    property: "45 Park Avenue",
    amount: 1050,
    date: "10 April 2025",
    status: "Unpaid",
  },
  {
    id: 3,
    tenant: "Emma Thompson",
    property: "8 Queen's Road, Apt 5",
    amount: 1620,
    date: "5 April 2025",
    status: "Paid",
  },
  {
    id: 4,
    tenant: "Michael Brown",
    property: "123 High Street, Flat 3",
    amount: 1275,
    date: "1 April 2025",
    status: "Paid",
  },
  {
    id: 5,
    tenant: "Jennifer Davis",
    property: "45 Park Avenue, Basement",
    amount: 975,
    date: "28 March 2025",
    status: "Paid",
  },
  {
    id: 6,
    tenant: "Robert Wilson",
    property: "8 Queen's Road, Apt 2",
    amount: 1450,
    date: "20 March 2025",
    status: "Paid",
  },
];

export default InvoicePage;
