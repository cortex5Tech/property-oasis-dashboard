
import { 
  ArrowRight, 
  Building, 
  User, 
  UserPlus, 
  Eye, 
  Wrench, 
  ShieldCheck, 
  FileUp 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to LetHaven - your property management solution
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Rent Overview Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-primary">Rent Overview</CardTitle>
              <CardDescription>
                Summary of your rental income
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Due</p>
                    <p className="text-2xl font-bold">£5,850</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Overdue</p>
                    <p className="text-2xl font-bold text-destructive">£750</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Upcoming Payments</h4>
                  <div className="space-y-2">
                    {upcomingPayments.map((payment) => (
                      <div
                        key={payment.tenant}
                        className="flex items-center justify-between py-1 border-b border-border"
                      >
                        <div>
                          <p className="text-sm font-medium">{payment.tenant}</p>
                          <p className="text-xs text-muted-foreground">Due: {payment.dueDate}</p>
                        </div>
                        <p className="font-medium">£{payment.amount}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/rent" className="flex items-center justify-center gap-1">
                      <span>View All</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tenant Overview Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-primary">Tenant Overview</CardTitle>
              <CardDescription>
                Summary of your tenancies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Active</p>
                    <p className="text-2xl font-bold">10</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Vacancies</p>
                    <p className="text-2xl font-bold">2</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Recent Tenants</h4>
                  <div className="space-y-2">
                    {recentTenants.map((tenant) => (
                      <div
                        key={tenant.name}
                        className="flex items-center justify-between py-1 border-b border-border"
                      >
                        <div>
                          <p className="text-sm font-medium">{tenant.name}</p>
                          <p className="text-xs text-muted-foreground">{tenant.property}</p>
                        </div>
                        <p className="text-xs font-medium text-muted-foreground">
                          Since: {tenant.moveInDate}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/tenants" className="flex items-center justify-center gap-1">
                      <span>View All</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Properties Overview Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-primary">Properties</CardTitle>
              <CardDescription>
                Your property portfolio overview
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="text-2xl font-bold">6</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Occupied</p>
                    <p className="text-2xl font-bold">4</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Vacant</p>
                    <p className="text-2xl font-bold">2</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Property Types</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between py-1 border-b border-border">
                      <p className="text-sm font-medium">Apartments</p>
                      <p className="font-medium">3</p>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-border">
                      <p className="text-sm font-medium">Houses</p>
                      <p className="font-medium">3</p>
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/properties" className="flex items-center justify-center gap-1">
                      <span>View Properties</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Maintenance Requests Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-primary">Maintenance Requests</CardTitle>
              <CardDescription>
                Summary of maintenance issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Open</p>
                    <p className="text-2xl font-bold text-blue-600">3</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">In Progress</p>
                    <p className="text-2xl font-bold text-purple-600">2</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Resolved</p>
                    <p className="text-2xl font-bold text-success">8</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Recent Issues</h4>
                  <div className="space-y-2">
                    {recentIssues.map((issue) => (
                      <div
                        key={issue.title}
                        className="flex items-center justify-between py-1 border-b border-border"
                      >
                        <div>
                          <p className="text-sm font-medium">{issue.title}</p>
                          <p className="text-xs text-muted-foreground">{issue.property}</p>
                        </div>
                        <span className={`status-badge status-${issue.status.toLowerCase()}`}>
                          {issue.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/maintenance" className="flex items-center justify-center gap-1">
                      <span>View All</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compliance Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-primary">Compliance</CardTitle>
              <CardDescription>
                Property compliance overview
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Valid</p>
                    <p className="text-2xl font-bold text-success">8</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Expiring</p>
                    <p className="text-2xl font-bold text-warning">2</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Expired</p>
                    <p className="text-2xl font-bold text-destructive">2</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Expiring Soon</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between py-1 border-b border-border">
                      <div>
                        <p className="text-sm font-medium">Gas Safety Certificate</p>
                        <p className="text-xs text-muted-foreground">123 High Street</p>
                      </div>
                      <p className="text-xs font-medium text-warning">Expires in 14 days</p>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-border">
                      <div>
                        <p className="text-sm font-medium">Fire Safety Assessment</p>
                        <p className="text-xs text-muted-foreground">8 Queen's Road</p>
                      </div>
                      <p className="text-xs font-medium text-warning">Expires in 30 days</p>
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/compliance" className="flex items-center justify-center gap-1">
                      <span>View Compliance</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Financial Summary Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-primary">Financial Summary</CardTitle>
              <CardDescription>
                Your rental income at a glance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Monthly Income</p>
                    <p className="text-2xl font-bold">£9,400</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Annual Estimate</p>
                    <p className="text-2xl font-bold">£112,800</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Rent Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between py-1 border-b border-border">
                      <p className="text-sm font-medium">Received (MTD)</p>
                      <p className="font-medium">£3,800</p>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-border">
                      <p className="text-sm font-medium">Outstanding</p>
                      <p className="font-medium text-destructive">£5,600</p>
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/invoices" className="flex items-center justify-center gap-1">
                      <span>View Invoices</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/tenants" className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                <span>Add Tenant</span>
              </Link>
            </Button>
            <Button variant="outline" className="border-primary text-primary" asChild>
              <Link to="/rent" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>View Rent Status</span>
              </Link>
            </Button>
            <Button variant="outline" className="border-primary text-primary" asChild>
              <Link to="/maintenance/add" className="flex items-center gap-2">
                <Wrench className="h-4 w-4" />
                <span>Log Maintenance</span>
              </Link>
            </Button>
            <Button variant="outline" className="border-primary text-primary" asChild>
              <Link to="/properties/add" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                <span>Add Property</span>
              </Link>
            </Button>
            <Button variant="outline" className="border-primary text-primary" asChild>
              <Link to="/compliance" className="flex items-center gap-2">
                <FileUp className="h-4 w-4" />
                <span>Upload Certificate</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

// Sample data for dashboard cards
const upcomingPayments = [
  { tenant: "Sarah Johnson", amount: 1200, dueDate: "15 April" },
  { tenant: "David Williams", amount: 950, dueDate: "18 April" },
  { tenant: "Emma Thompson", amount: 1450, dueDate: "22 April" },
];

const recentTenants = [
  { name: "Mark Davis", property: "123 High Street, Flat 2", moveInDate: "12 Mar 2025" },
  { name: "Jessica Brown", property: "45 Park Avenue", moveInDate: "01 Feb 2025" },
  { name: "Robert Wilson", property: "8 Queen's Road, Apt 5", moveInDate: "15 Jan 2025" },
];

const recentIssues = [
  { title: "Broken boiler", property: "123 High Street, Flat 2", status: "Open" },
  { title: "Leaking tap", property: "45 Park Avenue", status: "In-Progress" },
  { title: "Lock replacement", property: "8 Queen's Road, Apt 5", status: "Resolved" },
];

export default Dashboard;
