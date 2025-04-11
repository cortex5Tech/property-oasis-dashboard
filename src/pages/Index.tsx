
import { ArrowRight, Plus, UserPlus, Eye, Wrench } from "lucide-react";
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
            Overview of your property management activities
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Rent Overview Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-navy">Rent Overview</CardTitle>
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
              <CardTitle className="text-navy">Tenant Overview</CardTitle>
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

          {/* Maintenance Requests Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-navy">Maintenance Requests</CardTitle>
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
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/tenants/add" className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                <span>Add Tenant</span>
              </Link>
            </Button>
            <Button variant="outline" className="border-navy text-navy" asChild>
              <Link to="/rent" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>View Rent Status</span>
              </Link>
            </Button>
            <Button variant="outline" className="border-navy text-navy" asChild>
              <Link to="/maintenance/add" className="flex items-center gap-2">
                <Wrench className="h-4 w-4" />
                <span>Log Maintenance</span>
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
