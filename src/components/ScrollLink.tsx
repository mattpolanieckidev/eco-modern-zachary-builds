import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children, className, onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick();

    // If it's a root hash link (e.g., /#services)
    if (to.startsWith("/#")) {
      e.preventDefault();
      const hash = to.replace("/#", "");

      if (location.pathname === "/") {
        // Already on homepage, just scroll
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to homepage, then scroll after render
        navigate("/", { replace: false });
        // Scroll after a short delay to allow navigation
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  // Handle direct navigation via URL hash
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace("#", "");
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollLink;
