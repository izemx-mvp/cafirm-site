import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav, site } from "@/config/site";
import { services } from "@/data/services";
import { Star8 } from "@/components/decor/Star8";

const linkBase =
  "text-[13px] font-medium tracking-wide transition-colors duration-200 hover:text-gold";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer les menus à chaque navigation
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Verrouiller le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Fermer le dropdown au clic extérieur / Échap
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-line shadow-[0_8px_30px_-18px_rgba(14,42,71,0.25)]" : "bg-transparent"
        }`}
      >
        <div className="container-site flex h-[72px] items-center justify-between gap-6">
          <Link to="/" aria-label="CAFIRM — Accueil" className="shrink-0">
            <img src="/logo-cafirm-navy.png" alt="CAFIRM" className="h-9 w-auto sm:h-10" width={132} height={44} />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
            {nav.map((item) =>
              item.hasChildren ? (
                <div key={item.to} ref={servicesRef} className="relative">
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen((v) => !v)}
                    className={`${linkBase} flex items-center gap-1.5 ${
                      location.pathname.startsWith("/services") ? "text-gold" : "text-ink"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                        transition={{ duration: 0.22 }}
                        className="absolute left-1/2 top-full z-50 mt-4 w-80 -translate-x-1/2 rounded-md border border-line bg-white p-2 shadow-[0_30px_60px_-20px_rgba(14,42,71,0.3)]"
                      >
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="group flex items-start gap-3 rounded-sm px-3 py-3 transition-colors hover:bg-ivory"
                          >
                            <span className="mt-0.5 font-display text-sm font-semibold text-gold">{s.number}</span>
                            <span>
                              <span className="block text-sm font-medium text-navy group-hover:text-gold">{s.name}</span>
                              <span className="mt-0.5 block text-xs text-muted">{s.menuHint}</span>
                            </span>
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="mt-1 flex items-center gap-2 border-t border-line px-3 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy transition-colors hover:text-gold"
                        >
                          <Star8 className="h-3 w-3 text-gold" /> Tous nos services
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => `${linkBase} ${isActive ? "text-gold" : "text-ink"}`}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/prendre-rendez-vous"
              className="hidden rounded-[2px] bg-navy px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-steel md:inline-flex"
            >
              Prendre rendez-vous
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center rounded-[2px] border border-line text-navy lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-navy lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
          >
            <div className="container-site flex h-[72px] shrink-0 items-center justify-between">
              <img src="/logo-cafirm-white.png" alt="CAFIRM" className="h-9 w-auto" width={132} height={44} />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Fermer le menu"
                className="flex h-11 w-11 items-center justify-center rounded-[2px] border border-white/20 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="container-site flex flex-1 flex-col justify-center gap-1 overflow-y-auto py-6" aria-label="Navigation mobile">
              {[...nav.filter((n) => !n.hasChildren).slice(0, 2), ...nav.filter((n) => n.hasChildren), ...nav.filter((n) => !n.hasChildren).slice(2)].map(
                (item, i) => (
                  <motion.div
                    key={item.to}
                    initial={reduce ? false : { opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `block py-3 font-display text-3xl font-semibold transition-colors ${
                          isActive ? "text-gold" : "text-white hover:text-gold"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                    {item.hasChildren && (
                      <div className="mb-2 ml-1 flex flex-col border-l border-white/15 pl-4">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="py-1.5 text-sm text-white/65 transition-colors hover:text-gold"
                          >
                            <span className="mr-2 text-gold">{s.number}</span>
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ),
              )}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.45 }}
                className="mt-8"
              >
                <Link
                  to="/prendre-rendez-vous"
                  className="inline-flex rounded-[2px] bg-gold px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-white"
                >
                  Prendre rendez-vous
                </Link>
                <p className="mt-6 text-sm text-white/55">
                  {site.phoneDisplay} · {site.email}
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
