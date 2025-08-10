import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, RefreshCw, Mail, Clock } from "lucide-react";
import {
  useUpdateVerifiedUserMutation,
  useVerifyEmailQuery,
} from "@/redux/fetures/auth/auth.api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface OTPVerificationProps {
  email: string;
}

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(300);
  const [isVerifying, setIsVerifying] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const emailFromQuery = params.get("email");
      if (emailFromQuery) setEmail(emailFromQuery);
    }
  }, []);

  const { data, isLoading } = useVerifyEmailQuery(email, {
    skip: !email, // skip the query if email is falsy
  });

  const [verifyEmail] = useUpdateVerifiedUserMutation();

  if (isLoading) {
    <p>loading.....</p>;
  }
  const verificationCode = data?.data?.emailVerificationCode ?? "";

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      toast.error("invlid otp");
      return;
    }

    if (!verificationCode) {
      toast.warning("Waiting for verification code");
      return;
    }

    setIsVerifying(true);

    setTimeout(() => {
      if (otpValue === verificationCode) {
        verifyEmail(verificationCode);
        navigate("/login");
        toast.success("Your email has been verified successfully!");
        // You can call a callback or redirect here
      } else {
        toast.error("Invalid OTP");
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
      setIsVerifying(false);
    }, 2000);
  };

  const handleResend = () => {
    setTimeLeft(300);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);

    toast.success("OTP Resent");
  };

  return (
    <div className="min-h-screen bg-background cyber-grid flex items-center justify-center p-4">
      <Card className="w-full max-w-md glow-border">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-white">
              Verify Your Email
            </CardTitle>
            <CardDescription className="mt-2">
              We've sent a 6-digit verification code to
              <br />
              <span className="text-primary font-medium">{email}</span>
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-center space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-xl font-semibold border-primary/30 focus:border-primary text-white bg-transparent border rounded"
                  disabled={isVerifying}
                />
              ))}
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Code expires in:{" "}
                <span className="text-primary font-medium">
                  {formatTime(timeLeft)}
                </span>
              </span>
            </div>
          </div>

          <Button
            onClick={handleVerify}
            disabled={otp.join("").length !== 6 || isVerifying}
            className="w-full"
            variant="neon"
          >
            {isVerifying ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Verify Code
              </>
            )}
          </Button>

          <div className="text-center space-y-3">
            <p className="text-sm text-muted-foreground">
              Didn't receive the code?
            </p>
            <Button
              variant="ghost"
              onClick={handleResend}
              disabled={!canResend}
              className="text-primary hover:text-primary"
            >
              {canResend
                ? "Resend Code"
                : "Resend available in " + formatTime(timeLeft)}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OTPVerification;
