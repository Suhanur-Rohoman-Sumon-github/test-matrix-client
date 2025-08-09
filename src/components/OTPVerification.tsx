import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, RefreshCw, Mail, Clock } from "lucide-react";

interface OTPVerificationProps {
  email: string;
  onVerificationSuccess: () => void;
  onResendOTP: () => void;
}

const OTPVerification = ({
  email,
  onVerificationSuccess,
  onResendOTP,
}: OTPVerificationProps) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isVerifying, setIsVerifying] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { toast } = useToast();

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

    // Auto-focus next input
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
      toast({
        title: "Invalid OTP",
        description: "Please enter the complete 6-digit code.",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);

    // Simulate API call
    setTimeout(() => {
      if (otpValue === "123456") {
        // Mock success
        toast({
          title: "Verification Successful",
          description: "Your email has been verified successfully!",
        });
        onVerificationSuccess();
      } else {
        toast({
          title: "Invalid OTP",
          description: "The code you entered is incorrect. Please try again.",
          variant: "destructive",
        });
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
    onResendOTP();
    toast({
      title: "OTP Resent",
      description: "A new verification code has been sent to your email.",
    });
  };

  return (
    <div className="min-h-screen bg-background cyber-grid flex items-center justify-center p-4">
      <Card className="w-full max-w-md  glow-border">
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
          {/* OTP Input */}
          <div className="space-y-4">
            <div className="flex justify-center space-x-2">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-xl font-semibold  border-primary/30 focus:border-primary text-white"
                  disabled={isVerifying}
                />
              ))}
            </div>

            {/* Timer */}
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

          {/* Verify Button */}
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

          {/* Resend Section */}
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

          {/* Help Text */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
            <p className="text-xs text-muted-foreground text-center">
              For testing purposes, use code:{" "}
              <Badge variant="outline" className="ml-1 text-primary">
                123456
              </Badge>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OTPVerification;
