import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "Process", path: "/process" },
  { name: "About", path: "/about" },
];

export function Navbar() {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 }
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-6 pointer-events-none"
      >
        <div className="w-full max-w-7xl flex items-center justify-between pointer-events-none">
          
          {/* Logo - Fixed on left */}
          <div className="pointer-events-auto">
            <Link to="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-serif font-medium tracking-wide text-xl relative overflow-hidden h-7">
                <span className="flex items-center group-hover:-translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1] text-bid-ivory">Break It Down<span className="text-bid-gold ml-1">.</span></span>
                <span className="absolute left-0 top-0 flex items-center translate-y-full group-hover:translate-y-0 text-bid-gold transition-transform duration-500 ease-[0.16,1,0.3,1]">Break It Down<span className="text-bid-ivory ml-1">.</span></span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links - Center floating pill */}
          <nav 
            className={cn(
              "hidden md:flex items-center gap-1 px-3 py-2 rounded-full pointer-events-auto transition-all duration-700 ease-[0.16,1,0.3,1]",
              scrolled 
                ? "bg-bid-surface/60 backdrop-blur-xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.2)]" 
                : "bg-transparent border border-transparent"
            )}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname.startsWith(link.path) && link.path !== "/";
              const isHomeActive = location.pathname === "/" && link.path === "/";
              const trulyActive = isActive || isHomeActive;
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative px-5 py-2.5 text-sm font-medium transition-colors rounded-full",
                    trulyActive ? "text-bid-ivory" : "text-bid-muted hover:text-bid-ivory"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  {trulyActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/5 rounded-full"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                    />
                  )}
                  {trulyActive && scrolled && (
                     <motion.div
                       layoutId="nav-indicator"
                       className="absolute inset-x-5 -bottom-[1px] h-[1px] bg-bid-gold shadow-[0_0_8px_rgba(224,176,75,0.8)]"
                       initial={false}
                       transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                     />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Let's Talk CTA & Mobile Toggle - Right */}
          <div className="pointer-events-auto flex items-center gap-4">
             <Link
               to="/contact"
               className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-bid-base bg-bid-ivory rounded-full hover:bg-bid-gold transition-all duration-500 shadow-[0_0_20px_rgba(243,239,231,0.1)] hover:shadow-[0_0_20px_rgba(224,176,75,0.3)] group overflow-hidden relative"
             >
               <span className="relative z-10">Let's Talk</span>
               <div className="relative w-4 h-4 overflow-hidden rounded-full font-bold flex items-center justify-center">
                 <div className="absolute flex transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-full pr-1">
                   <ArrowRight className="w-3.5 h-3.5" />
                 </div>
                 <div className="absolute flex transition-transform duration-500 ease-[0.16,1,0.3,1] -translate-x-full group-hover:translate-x-0 pr-1">
                   <ArrowRight className="w-3.5 h-3.5" />
                 </div>
               </div>
             </Link>

             {/* Mobile Menu Toggle */}
             <button 
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               className="md:hidden relative z-[60] w-11 h-11 flex items-center justify-center rounded-xl bg-bid-surface border border-white/5 text-bid-ivory hover:text-bid-gold hover:border-bid-gold/30 transition-colors focus:outline-none shadow-[0_0_20px_rgba(0,0,0,0.5)]"
               aria-label="Toggle Menu"
             >
               {mobileMenuOpen ? <X className="w-5 h-5 absolute" /> : <Menu className="w-5 h-5 absolute" />}
             </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-bid-base flex flex-col pt-32 px-6 pb-8 md:hidden overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-20 right-[-20%] w-[60%] h-[60%] bg-bid-navy/10 blur-[100px] rounded-full pointer-events-none" />
            
            {/* Background Typography */}
            <div className="absolute top-40 -left-10 pointer-events-none opacity-[0.02] mix-blend-overlay z-0 select-none">
              <span className="font-serif text-[120px] leading-none whitespace-nowrap">MENU</span>
            </div>

            <nav className="flex flex-col gap-8 relative z-10 mt-8">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname.startsWith(link.path) && link.path !== "/";
                const isHomeActive = location.pathname === "/" && link.path === "/";
                const trulyActive = isActive || isHomeActive;

                return (
                  <motion.div 
                    key={link.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center gap-6"
                    >
                      <span className={cn("text-xs font-sans tracking-widest transition-colors", trulyActive ? "text-bid-gold" : "text-bid-muted group-hover:text-bid-gold")}>0{idx + 1}</span>
                      <span className={cn("text-5xl font-serif transition-colors", trulyActive ? "text-bid-ivory" : "text-bid-muted group-hover:text-bid-ivory")}>
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-auto relative z-10"
            >
              <div className="flex gap-4 mb-4" />
              <div className="w-full h-px bg-white/5 mb-6" />
              
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between w-full p-5 rounded-2xl bg-bid-surface border border-white/5 text-bid-ivory group hover:border-bid-gold/30 transition-all duration-300"
              >
                <span className="text-xl font-serif">Start a Project</span>
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-bid-gold/20 group-hover:text-bid-gold transition-colors">
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
