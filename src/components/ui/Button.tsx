"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer tracking-wide";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm md:text-base px-6 py-3 gap-2",
    lg: "text-base md:text-lg px-8 py-3.5 gap-2.5 shadow-primary",
  };

  const variantStyles = {
    primary:
      "bg-brand-primary text-white hover:bg-brand-primary-hover shadow-md shadow-brand-primary/25 focus-visible:ring-brand-primary",
    secondary:
      "bg-brand-secondary text-white hover:bg-brand-secondary-light shadow-md shadow-brand-secondary/20 focus-visible:ring-brand-secondary",
    outline:
      "bg-transparent text-brand-primary border-2 border-brand-primary hover:bg-brand-primary hover:text-white focus-visible:ring-brand-primary",
    white:
      "bg-white text-brand-primary hover:bg-primary-50 shadow-md shadow-black/10 focus-visible:ring-white",
    ghost:
      "bg-transparent text-gray-700 hover:text-brand-primary hover:bg-primary-50/50 focus-visible:ring-brand-primary",
  };

  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
};
