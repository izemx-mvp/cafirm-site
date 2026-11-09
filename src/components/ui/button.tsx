import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "gold" | "outline" | "light" | "outline-light";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  to?: string;
  href?: string;
  className?: string;
  external?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 rounded-[2px] cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-steel hover:shadow-[0_14px_30px_-14px_rgba(14,42,71,0.6)]",
  gold: "bg-gold text-white hover:brightness-110 hover:shadow-[0_14px_30px_-14px_rgba(184,146,90,0.7)]",
  outline: "border border-navy/25 text-navy hover:border-gold hover:text-gold",
  light: "bg-white text-navy hover:bg-ivory",
  "outline-light": "border border-white/30 text-white hover:border-gold hover:text-gold",
};

export function Button({
  children,
  variant = "primary",
  to,
  href,
  className = "",
  external,
  type = "button",
  onClick,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
