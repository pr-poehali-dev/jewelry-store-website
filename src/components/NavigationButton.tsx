import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NavigationButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const NavigationButton = ({
  to,
  children,
  variant = "primary",
  className = "",
}: NavigationButtonProps) => {
  return (
    <Link to={to}>
      <Button
        className={`
          transition-all duration-300 transform hover:scale-105 
          ${
            variant === "primary"
              ? "bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl"
              : "bg-white border-2 border-amber-400 text-amber-600 hover:bg-amber-50"
          }
          ${className}
        `}
      >
        {children}
      </Button>
    </Link>
  );
};

export default NavigationButton;
