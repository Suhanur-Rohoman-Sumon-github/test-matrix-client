import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-dark shadow-sm hover:shadow-md transform hover:-translate-y-1",
        neon: "bg-primary text-[#000] font-semibold border-0 shadow-sm hover:shadow-md transform hover:-translate-y-1",
        cyber:
          "bg-primary text-[#000] font-semibold shadow-sm hover:shadow-md transform hover:-translate-y-1 border border-primary/20",
        glass:
          " text-primary backdrop-blur-md border border-primary/20 hover:border-primary/40 hover:shadow-md",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm hover:shadow-md",
        outline:
          "border-2 border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:border-primary/50 hover:shadow-md",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-primary/20 hover:border-primary/40",
        ghost: "text-primary hover:bg-primary/10 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary",
        exam: "bg-accent text-accent-foreground font-semibold shadow-sm hover:shadow-md transform hover:-translate-y-1",
      },
      size: {
        default: "h-12 px-6 py-3 text-sm",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-14 rounded-xl px-8 text-base",
        xl: "h-16 rounded-xl px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
