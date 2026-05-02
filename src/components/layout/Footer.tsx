import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full px-6 pt-20 pb-8 md:pt-28 md:pb-10 overflow-hidden border-t border-white/10 bg-[#020305]">
      {/* Heavy textured background */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      
      {/* Deep ambient glows */}
      <div className="absolute top-[-30%] right-[-10%] w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bid-gold/5 via-transparent to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.02] via-transparent to-transparent blur-[120px] pointer-events-none" />
      
      {/* Structured Grid lines */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black_70%,transparent)]" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-bid-gold/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-bid-gold/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        
        {/* Typography Drop */}
        <motion.div 
          initial={{ opacity: 0, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center mb-10 md:mb-16 relative flex flex-col items-center justify-center py-2 md:py-6"
        >
          {/* Layered Typography effect for depth */}
          <h2 className="text-[10vw] leading-none font-serif tracking-tighter text-white/[0.04] select-none absolute inset-0 flex items-center justify-center blur-[4px] whitespace-nowrap pointer-events-none translate-y-1">
            BREAK IT DOWN
          </h2>
          <h2 className="text-[10vw] leading-none font-serif tracking-tighter text-bid-gold/[0.06] select-none absolute inset-0 flex items-center justify-center blur-sm whitespace-nowrap pointer-events-none -translate-y-1">
            BREAK IT DOWN
          </h2>
          <h2 className="relative text-[9vw] sm:text-[8vw] md:text-[65px] lg:text-[85px] leading-none font-serif tracking-tighter text-bid-ivory drop-shadow-[0_0_40px_rgba(255,255,255,0.08)] select-none whitespace-nowrap z-10 hover:scale-[1.01] transition-transform duration-1000 ease-[0.16,1,0.3,1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-bid-ivory to-white/40">BREAK IT</span> <span className="text-transparent bg-clip-text bg-gradient-to-b from-bid-gold to-bid-gold/40">DOWN</span>
          </h2>
        </motion.div>

        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 border-t border-white/10 pt-16 mt-8 relative">
          
          {/* Subtle node marker at the intersection */}
          <div className="absolute top-0 left-0 w-2 h-2 -mt-[4px] -ml-[1px] bg-bid-gold/20 border border-bid-gold/50 rounded-full" />
          <div className="absolute top-0 right-0 w-2 h-2 -mt-[4px] -mr-[1px] bg-bid-gold/20 border border-bid-gold/50 rounded-full" />
          <div className="absolute top-0 left-1/2 w-1.5 h-1.5 -mt-[3px] -ml-[0.5px] bg-white/20 rounded-full hidden md:block" />

          {/* Manifesto text */}
          <div className="col-span-1 md:col-span-8 lg:col-span-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-bid-gold/40" />
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-bid-gold font-bold">Studio Manifesto</span>
              </div>
              <p className="font-sans text-bid-muted sm:text-lg leading-relaxed max-w-xl mix-blend-plus-lighter font-light">
                Built with strict clarity, engineered with decisive intention, and measured against brutal digital truths. A studio unconditionally committed to <span className="text-bid-ivory font-medium border-b border-bid-gold/30">absolute structural integrity.</span>
              </p>
            </div>
          </div>

          {/* Socials & Contact */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50 mb-6 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full border border-bid-gold bg-bid-gold/10" />
              Connect & Build
            </h4>
            <ul className="flex flex-col gap-1 relative before:absolute before:left-[3px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/5">
              {[
                { name: 'YouTube', url: 'https://www.youtube.com/@thebidofficial' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/bidbreakitdown' },
                { name: 'Instagram', url: 'https://instagram.com/bidbreakitdown' },
                { name: 'Email', url: 'mailto:thebidchannel@gmail.com' }
              ].map((link) => (
                <li key={link.name} className="relative">
                  <div className="absolute left-[2px] top-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-white/20 transition-all duration-300 group-hover:bg-bid-gold group-hover:shadow-[0_0_8px_rgba(224,176,75,0.8)]" />
                  <a href={link.url} target="_blank" rel="noreferrer" className="text-bid-muted hover:text-bid-ivory transition-all duration-300 text-sm font-sans flex items-center justify-between group py-3 rounded-lg hover:bg-white/[0.02]" style={{ paddingLeft: '16px', paddingRight: '8px' }} onMouseEnter={(e) => e.currentTarget.style.paddingLeft = '24px'} onMouseLeave={(e) => e.currentTarget.style.paddingLeft = '16px'}>
                    <span className="relative overflow-hidden block">
                      <span className="block transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-[120%]">{link.name}</span>
                      <span className="block absolute inset-0 text-bid-gold transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-[120%] group-hover:translate-y-0 tracking-wide">{link.name}</span>
                    </span>
                    <div className="w-7 h-7 rounded-full border border-white/5 bg-black/20 flex items-center justify-center group-hover:bg-bid-gold/20 group-hover:border-bid-gold/30 transition-all duration-500 shadow-inner">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-bid-gold transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="w-full mt-12 pt-6 border-t border-white/5 flex flex-col-reverse sm:flex-row items-center justify-between text-[11px] text-bid-muted font-sans font-medium gap-6 sm:gap-0 relative">
          
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-bid-gold/50 animate-pulse" />
            <p className="tracking-wide">© {new Date().getFullYear()} Break It Down Studio. All rights reserved.</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-bid-muted hover:text-bid-ivory transition-colors"
          >
            <span className="uppercase tracking-[0.2em] text-[10px] font-bold group-hover:text-bid-gold transition-colors duration-500">Back to top</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-bid-gold/50 group-hover:bg-bid-gold/10 transition-all duration-500 bg-white/5 relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(224,176,75,0.2)]">
               <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                 <div className="absolute flex transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-[150%]">
                   <ArrowUp className="w-4 h-4" />
                 </div>
                 <div className="absolute flex transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-[150%] group-hover:translate-y-0 text-bid-gold">
                   <ArrowUp className="w-4 h-4" />
                 </div>
               </div>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
