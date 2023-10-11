import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent text-secondary-foreground hover:bg-secondary/80",
        third: "border-transparent text-third-foreground hover:bg-third/80",
        fourth: "border-transparent text-fourth-foreground hover:bg-fourth/80",
        destructive: "border-transparent text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, style, ...props }: BadgeProps) {
  const bgColorStyle = variant === "default" ? { backgroundColor: "#9446F8" } : variant === "secondary" ? { backgroundColor: "#BADFFC" } : variant === "third" ? { backgroundColor: "#FF7B69" } : variant === "fourth" ? { backgroundColor: "#8895FF" } : {};

  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      style={{ ...style, ...bgColorStyle }}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
