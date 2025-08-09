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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  Shield,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
      });
      return;
    }

    if (!agreed) {
      toast({
        variant: "destructive",
        title: "Terms Required",
        description: "Please agree to the terms and conditions.",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Registration Successful!",
      description: "Welcome to Test_School. Please verify your email to begin.",
    });

    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const features = [
    "Access to all 3 assessment levels (A1-C2)",
    "Secure, timed testing environment",
    "Instant digital certification",
    "Performance analytics and insights",
    "Mobile-optimized interface",
  ];

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex p-4 rounded-xl bg-gradient-primary  ">
              <Shield className="w-8 h-8 text-[#6bdaff]" />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold glow-text">
                Start Your Assessment Journey
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Create your account and begin testing your digital competencies
                across 132 assessment questions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Registration Form */}
            <Card className=" border-primary/20">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl text-center text-primary-glow">
                  Create Account
                </CardTitle>
                <CardDescription className="text-center">
                  Join thousands of professionals certifying their digital
                  skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-foreground">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="pl-10  border-primary/20 focus:border-primary/40 focus:ring-primary/20"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

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
                        placeholder="Create a strong password"
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

                  <div className="space-y-2">
                    <Label
                      htmlFor="confirmPassword"
                      className="text-foreground"
                    >
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        className="pl-10 pr-10  border-primary/20 focus:border-primary/40 focus:ring-primary/20"
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={agreed}
                      onCheckedChange={(checked) =>
                        setAgreed(checked as boolean)
                      }
                      className="border-primary/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label
                      htmlFor="terms"
                      className="text-sm text-muted-foreground cursor-pointer"
                    >
                      I agree to the{" "}
                      <Link
                        to="/terms"
                        className="text-primary hover:text-primary-glow"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy"
                        className="text-primary hover:text-primary-glow"
                      >
                        Privacy Policy
                      </Link>
                    </Label>
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
                        Creating Account...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        Create Account
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-primary/20">
                  <p className="text-center text-muted-foreground">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-primary hover:text-primary-glow transition-colors font-medium"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Features Panel */}
            <div className="space-y-8">
              <div className=" p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary-glow">
                    What You'll Get
                  </h3>
                  <p className="text-muted-foreground">
                    Comprehensive digital competency assessment with
                    professional certification
                  </p>
                </div>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success-glow flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className=" p-8 space-y-6 text-center">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary-glow">
                    Assessment Overview
                  </h3>
                  <p className="text-muted-foreground">
                    Structured 3-step certification process
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-success-glow">
                      A1-A2
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Foundation
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary-glow">
                      B1-B2
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Intermediate
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-accent-glow">
                      C1-C2
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Advanced
                    </div>
                  </div>
                </div>

                <Button variant="exam" size="lg" className="w-full" asChild>
                  <Link to="/exam">View Sample Assessment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
