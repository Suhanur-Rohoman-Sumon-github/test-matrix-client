import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Login Successful",
      description: "Welcome back to Test_School platform",
    });

    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-8">
            <div className="inline-flex p-4 rounded-xl bg-gradient-primary  ">
              <Shield className="w-8 h-8 text-[#6bdaff]" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold glow-text">
                Welcome Back
              </h1>
              <p className="text-muted-foreground">
                Sign in to access your assessment dashboard
              </p>
            </div>
          </div>

          <Card className=" border-primary/20">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl text-center text-primary-glow">
                Sign In
              </CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to continue your digital competency
                journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="pl-10  border-primary/20 focus:border-primary/40 focus:ring-primary/20"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="pl-10 pr-10  border-primary/20 focus:border-primary/40 focus:ring-primary/20"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:text-primary-glow transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  variant="cyber"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                      Signing In...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Sign In
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-primary/20">
                <p className="text-center text-muted-foreground">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-primary hover:text-primary-glow transition-colors font-medium"
                  >
                    Create Account
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Secure authentication with JWT tokens and OTP verification
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
