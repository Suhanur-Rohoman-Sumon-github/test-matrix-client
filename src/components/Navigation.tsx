import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Zap, Code, Shield, Award, User, LogOut } from "lucide-react";
import { useAppDispatch } from "@/redux/hook";
import { logOut } from "@/redux/fetures/auth/auth.slice";
import { useCurrentUser } from "@/utils/getCurrentUser";
import Cookies from "js-cookie";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true); // loading state for user data
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useCurrentUser();
  const token = Cookies.get("accessToken");

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    dispatch(logOut());
    navigate("/login");
  };

  // Simulate loading or wait until user is ready
  useEffect(() => {
    // If user is null, maybe still loading or no user
    if (user) {
      setLoadingUser(false);
    } else {
      // Optional: if you fetch user async, set loading true here or handle accordingly
      setLoadingUser(false);
    }
  }, [user]);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-primary/20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 rounded-lg bg-primary transition-all duration-300">
              <Award className="w-6 h-6 " />
            </div>
            <span className="text-xl font-bold text-white">Test_Matrix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: "/", label: "Home", icon: Zap },
              { path: "/about", label: "About", icon: Code },
              { path: "/services", label: "Services", icon: Shield },
              { path: "/exam", label: "Exam", icon: Award },
            ].map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(path)
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons or Avatar with Dropdown */}
          <div className="hidden md:flex items-center space-x-4 relative">
            {loadingUser ? (
              // Show some loading placeholder while user loads
              <div className="w-10 h-10 rounded-full bg-primary animate-pulse" />
            ) : token ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-2 cursor-pointer focus:outline-none">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg select-none">
                      <img
                        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                        alt=""
                      />
                    </div>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  className="w-48 bg-black border border-primary/20"
                >
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      My Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={handleLogout}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="cyber" size="sm" asChild>
                  <Link to="/register">Start Assessment</Link>
                </Button>
              </>
            )}
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
            {[
              { path: "/", label: "Home", icon: Zap },
              { path: "/about", label: "About", icon: Code },
              { path: "/services", label: "Services", icon: Shield },
              { path: "/exam", label: "Exam", icon: Award },
            ].map(({ path, label, icon: Icon }) => (
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
              {user ? (
                <div className="flex items-center space-x-2 px-4 py-3 text-primary font-medium"></div>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button variant="cyber" size="sm" className="w-full" asChild>
                    <Link to="/register" onClick={() => setIsOpen(false)}>
                      Start Assessment
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
