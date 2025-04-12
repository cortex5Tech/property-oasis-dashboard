
import { Home, Banknote, Users, Wrench, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const location = useLocation();
  
  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      path: "/",
    },
    {
      title: "Rent Tracker",
      icon: Banknote,
      path: "/rent",
    },
    {
      title: "Tenants",
      icon: Users,
      path: "/tenants",
    },
    {
      title: "Maintenance",
      icon: Wrench,
      path: "/maintenance",
    },
    {
      title: "Invoices",
      icon: FileText,
      path: "/invoices",
    },
  ];

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 w-64 bg-white border-r border-border transition-transform z-30 md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="h-full flex flex-col">
        <div className="h-16 border-b flex items-center justify-center">
          <span className="text-xl font-bold text-navy">Property Oasis</span>
        </div>
        <div className="flex-1 py-6">
          <nav className="px-2 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  location.pathname === item.path
                    ? "bg-navy text-white"
                    : "text-navy hover:bg-softgrey"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t">
          <div className="text-sm text-muted-foreground">
            Property Oasis Dashboard
            <div className="mt-1">v1.0.0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
