"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ShieldCheck } from "lucide-react";
import { services } from "@/data/services";
import Button from "@/components/ui/Button";

type NavLink = { label: string; href: string };

export default function MobileNav({ navLinks }: { navLinks: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const closeMenu = () => setOpen(false);

  const drawer = (
    <AnimatePresence>
      {open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 999 }}>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-label="Close menu"
            onClick={closeMenu}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(5,7,13,0.5)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              border: "none",
              cursor: "pointer",
            }}
          />

          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "78px",
              right: "16px",
              left: "16px",
              maxWidth: "380px",
              marginLeft: "auto",
              maxHeight: "calc(100vh - 100px)",
              overflowY: "auto",
              backgroundColor: "rgba(13,18,32,0.85)",
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
              border: "1px solid rgba(148,163,184,0.18)",
              borderRadius: "24px",
              boxShadow: "0 24px 60px -12px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.03) inset",
              padding: "20px",
            }}
          >
            <div className="mb-5 flex items-center justify-between border-b border-border/40 pb-4">
              <span className="flex items-center gap-2 font-display text-base font-bold text-text">
                <ShieldCheck className="h-5 w-5 text-primary-light" aria-hidden="true" />
                Menu
              </span>
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="rounded-full border border-border/60 p-1.5 text-text-muted hover:border-primary-light hover:text-primary-light"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.label === "Services" ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setServicesExpanded((v) => !v)}
                      aria-expanded={servicesExpanded}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-text hover:bg-white/5"
                    >
                      Services
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${servicesExpanded ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence>
                      {servicesExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ overflow: "hidden" }}
                          className="ml-3 flex flex-col gap-1 border-l border-border/50 pl-3 pt-1"
                        >
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services#${s.slug}`}
                              onClick={closeMenu}
                              className="rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-white/5 hover:text-text"
                            >
                              {s.title}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-2 text-sm font-semibold text-primary-light hover:bg-white/5"
                          >
                            View All Services
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-3 py-2.5 text-sm font-medium text-text hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            <div className="mt-5 border-t border-border/40 pt-4">
              <Button href="/contact" className="w-full" size="md">
                Get Started
              </Button>
            </div>
          </motion.nav>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="rounded-lg p-2 text-text hover:bg-surface-light"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {mounted && createPortal(drawer, document.body)}
    </div>
  );
}