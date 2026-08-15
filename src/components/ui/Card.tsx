import { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-border bg-surface p-6 sm:p-7",
        hover &&
          "transition-all duration-200 hover:border-primary-light/50 hover:shadow-glow",
        className
      )}
    >
      {children}
    </div>
  );
}