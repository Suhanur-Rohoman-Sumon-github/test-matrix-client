import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Code, Shield, Award } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Zap },
    { path: "/about", label: "About", icon: Code },
    { path: "/services", label: "Services", icon: Shield },
    { path: "/exam", label: "Exam", icon: Award },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50  border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 rounded-lg bg-primary transition-all duration-300">
              <Award className="w-6 h-6 text-[#6bdaff]" />
            </div>
            <span className="text-xl font-bold text-white">Test_School</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(path)
                    ? "bg-primary/20 text-primary "
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="cyber" size="sm" asChild>
              <Link to="/register">Start Assessment</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-primary/20">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(path)
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button variant="cyber" size="sm" className="w-full" asChild>
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  Start Assessment
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
