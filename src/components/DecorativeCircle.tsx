import { cn } from "@/lib/utils";

interface DecorativeCircleProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const DecorativeCircle = ({ className, size = "md" }: DecorativeCircleProps) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-48 h-48",
    xl: "w-64 h-64",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full bg-gradient-primary opacity-20 blur-3xl animate-pulse",
        sizeClasses[size],
        className
      )}
    />
  );
};

export default DecorativeCircle;