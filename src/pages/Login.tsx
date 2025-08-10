/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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
import { useLoginMutation } from "@/redux/fetures/auth/auth.api";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { setUser } from "@/redux/fetures/auth/auth.slice";
import { useAppDispatch } from "@/redux/hook";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const res = await login(data).unwrap();

      Cookies.set("accessToken", res.data.accessToken, {
        expires: 7,
        sameSite: "strict",
      });
      Cookies.set("refreshToken", res.data.refreshToken, {
        expires: 7,
        sameSite: "strict",
      });

      // Assume res.data.user contains full user info including name
      dispatch(setUser({ user: res.data.user, token: res.data.accessToken }));

      toast.success("Login Successful");
      navigate("/exam");
    } catch (error) {
      toast.error("Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-background cyber-grid">
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                noValidate
              >
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10  border-primary/20 focus:border-primary/40 focus:ring-primary/20"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                          message: "Invalid email address",
                        },
                      })}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10  border-primary/20 focus:border-primary/40 focus:ring-primary/20"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      aria-invalid={errors.password ? "true" : "false"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
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
