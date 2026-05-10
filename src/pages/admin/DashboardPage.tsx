import { AdminLayout } from "@/components/admin/AdminLayout";
import { 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Clock,
  ArrowUpRight,
  ChevronRight,
  MoreVertical
} from "lucide-react";

const DashboardPage = () => {
  const stats = [
    { label: "Total Inquiries", value: "84", trend: "+12.5%", icon: MessageSquare, color: "text-brand", bg: "bg-brand/10" },
    { label: "Active Clients", value: "32", trend: "+4.2%", icon: Users, color: "text-blue-600", bg: "bg-blue-600/10" },
    { label: "Growth Rate", value: "24%", trend: "+2.1%", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-600/10" },
    { label: "Avg Response", value: "1.4h", trend: "-15min", icon: Clock, color: "text-orange-600", bg: "bg-orange-600/10" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8 animate-fade-up">
        {/* Welcome Section */}
        <div>
          <h1 className="text-2xl font-display font-bold text-ink">Dashboard Overview</h1>
          <p className="text-ink/50 mt-1">Here's what's happening with EWAG today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-paper border border-ink/5 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className={`h-12 w-12 rounded-2xl ${stat.bg} flex items-center justify-center ${stat.color} transition-transform group-hover:scale-110`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-[10px] font-bold px-2 py-1 bg-ink/5 rounded-full text-ink/40 flex items-center gap-1">
                  {stat.trend} <ArrowUpRight className="h-2 w-2" />
                </div>
              </div>
              <div className="text-2xl font-display font-bold text-ink">{stat.value}</div>
              <div className="text-sm font-medium text-ink/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Activity & Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-paper border border-ink/5 rounded-3xl p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold text-ink">Recent Inquiries</h3>
              <button className="text-xs font-bold text-brand hover:underline flex items-center gap-1">
                View All <ChevronRight className="h-3 w-3" />
              </button>
            </div>
            
            <div className="space-y-6">
              {[
                { name: "Rahul Sharma", company: "Astra Tech", service: "Marketing Automation", status: "New", time: "2m ago" },
                { name: "Priya Patel", company: "Glow & Co", service: "Website Design", status: "Contacted", time: "1h ago" },
                { name: "Kevin V.", company: "BuildIt Ltd", service: "Lead Generation", status: "In Progress", time: "4h ago" },
                { name: "Ananya K.", company: "Design Studio", service: "AI Content", status: "Completed", time: "1d ago" },
              ].map((inquiry, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-ink/5 flex items-center justify-center font-bold text-ink/40">
                      {inquiry.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-ink group-hover:text-brand transition-colors">{inquiry.name}</div>
                      <div className="text-xs text-ink/40">{inquiry.company} · {inquiry.service}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      inquiry.status === "New" ? "bg-brand/10 text-brand" : "bg-ink/5 text-ink/40"
                    }`}>
                      {inquiry.status}
                    </span>
                    <div className="text-right min-w-[60px]">
                      <div className="text-xs font-medium text-ink/30">{inquiry.time}</div>
                    </div>
                    <button className="h-8 w-8 rounded-lg hover:bg-ink/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical className="h-4 w-4 text-ink/30" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand to-indigo-700 rounded-3xl p-8 text-paper relative overflow-hidden">
            <div className="absolute inset-0 grid-lines opacity-10" />
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-xl font-display font-bold mb-2">Service Status</h3>
              <p className="text-paper/60 text-sm mb-8">All systems are running smoothly.</p>
              
              <div className="space-y-4 mt-auto">
                <div className="flex justify-between items-center bg-paper/10 backdrop-blur-sm p-4 rounded-2xl border border-paper/10">
                  <span className="text-sm font-medium">Website Hosting</span>
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>
                <div className="flex justify-between items-center bg-paper/10 backdrop-blur-sm p-4 rounded-2xl border border-paper/10">
                  <span className="text-sm font-medium">AI API Services</span>
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Optimal
                  </span>
                </div>
                <div className="flex justify-between items-center bg-paper/10 backdrop-blur-sm p-4 rounded-2xl border border-paper/10">
                  <span className="text-sm font-medium">Lead Sync</span>
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
