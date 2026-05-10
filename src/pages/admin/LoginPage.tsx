import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { Lock, Mail, ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { toast } from "sonner";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await login(email, password);
      toast.success("Welcome back!");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error("Invalid credentials. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-paper relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="absolute inset-0 bg-gradient-radial-brand opacity-20" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand/10 blur-[100px]" />

      <div className="w-full max-w-md p-8 relative z-10">
        <div className="text-center mb-10 animate-fade-up">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-paper font-display font-bold text-lg transition-transform group-hover:scale-110">E</span>
            <span className="font-display text-xl font-bold tracking-tight">EWAG<span className="text-brand">.</span></span>
          </Link>
          <h1 className="text-3xl font-display font-bold text-ink mb-2">Admin Login</h1>
          <p className="text-ink/60">Enter your credentials to access the portal</p>
        </div>

        <div className="bg-paper border border-ink/10 rounded-3xl p-8 shadow-card animate-fade-up" style={{ animationDelay: "100ms" }}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-ink/40 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/30 transition-colors group-focus-within:text-brand" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@ewag.com"
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-ink/5 border border-ink/5 text-ink placeholder:text-ink/30 focus:bg-paper focus:border-brand/30 focus:outline-none focus:ring-4 focus:ring-brand/5 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold uppercase tracking-widest text-ink/40">Password</label>
                <a href="#" className="text-xs font-semibold text-brand hover:underline">Forgot?</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/30 transition-colors group-focus-within:text-brand" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-ink/5 border border-ink/5 text-ink placeholder:text-ink/30 focus:bg-paper focus:border-brand/30 focus:outline-none focus:ring-4 focus:ring-brand/5 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-brand py-4 flex items-center justify-center gap-2 relative overflow-hidden group"
            >
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-ink/5 text-center">
            <p className="text-sm text-ink/50">
              Don't have an account?{" "}
              <Link to="/admin/signup" className="font-bold text-brand hover:underline">Request Access</Link>
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center animate-fade-up" style={{ animationDelay: "200ms" }}>
          <p className="text-xs text-ink/30 flex items-center justify-center gap-1.5">
            <Sparkles className="h-3 w-3" />
            Secure Admin Portal for EWAG Digital Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
