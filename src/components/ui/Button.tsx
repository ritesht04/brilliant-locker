import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-light hover:shadow-glow",
  secondary:
    "bg-surface-light text-text border border-border hover:border-primary-light",
  ghost: "text-text hover:text-primary-light",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  showArrow = false,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx(classes, "group")}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(classes, "group")}
    >
      {content}
    </button>
  );
}