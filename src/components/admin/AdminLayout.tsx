import { ReactNode } from "react";
import { Navigate, Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  Bell,
  Search,
  ChevronRight,
  MessageSquare,
  BarChart3
} from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { user, logout, isLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-paper">Loading...</div>;
  if (!user) return <Navigate to="/admin/login" replace />;

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { label: "Consultations", icon: MessageSquare, path: "/admin/consultations" },
    { label: "Analytics", icon: BarChart3, path: "/admin/analytics" },
    { label: "Team", icon: Users, path: "/admin/team" },
    { label: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FD] flex text-ink">
      {/* Sidebar */}
      <aside className="w-64 border-r border-ink/5 bg-paper flex flex-col sticky top-0 h-screen">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 mb-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-paper font-display font-bold text-base">E</span>
            <span className="font-display text-lg font-bold tracking-tight">EWAG<span className="text-brand">.</span></span>
          </Link>
          <div className="text-[10px] font-bold uppercase tracking-widest text-ink/30 px-1">Admin Portal</div>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                  isActive 
                    ? "bg-brand text-paper shadow-brand font-semibold" 
                    : "text-ink/60 hover:bg-ink/5 hover:text-ink"
                }`}
              >
                <item.icon className={`h-4 w-4 ${isActive ? "text-paper" : "text-ink/40 group-hover:text-brand"}`} />
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-ink/5">
          <button
            onClick={() => {
              logout();
              navigate("/admin/login");
            }}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-ink/60 hover:bg-destructive/5 hover:text-destructive transition-all group"
          >
            <LogOut className="h-4 w-4 text-ink/40 group-hover:text-destructive" />
            <span className="text-sm">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-20 bg-paper/80 backdrop-blur-md border-bottom border-ink/5 sticky top-0 z-20 px-8 flex items-center justify-between">
          <div className="relative w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/30 group-focus-within:text-brand transition-colors" />
            <input 
              type="text" 
              placeholder="Search data, users, settings..." 
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-ink/5 border border-transparent focus:bg-paper focus:border-brand/20 focus:outline-none transition-all text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="h-10 w-10 rounded-xl bg-ink/5 flex items-center justify-center hover:bg-ink/10 transition-colors relative">
              <Bell className="h-4 w-4 text-ink/60" />
              <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-brand ring-2 ring-paper" />
            </button>
            <div className="h-8 w-px bg-ink/10 mx-2" />
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-bold text-ink">{user.name}</div>
                <div className="text-[10px] font-bold text-brand uppercase tracking-wider">Super Admin</div>
              </div>
              <div className="h-10 w-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};
