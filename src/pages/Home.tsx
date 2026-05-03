import { PageTransition } from "@/components/layout/PageTransition";
import SEO from "@/lib/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Layers, CircleDotDashed } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <SEO
        title="BID | Break It Down"
        description="BID is a student-led studio building high-impact digital products — specializing in UI/UX, web development, and rapid MVP prototyping."
        path="/"
      />
      <PageTransition className="w-full">
      {/* Hero Section */}
      <section ref={containerRef} className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden px-4 sm:px-6">
        
        {/* Abstract Background Doodles */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] border-[1px] border-white/5 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[0%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] border-[1px] border-bid-gold/10 rounded-full border-dashed"
          />
          {/* Glow blob */}
          <motion.div 
            style={{ y }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-bid-navy/30 blur-[100px] rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">
          
          {/* Left: Typography & Intent */}
          <motion.div style={{ opacity }} className="lg:col-span-6 xl:col-span-7 flex flex-col items-start px-2 sm:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <Sparkles className="w-4 h-4 text-bid-gold" />
              <span className="font-sans text-bid-ivory text-xs sm:text-sm tracking-wide">
                We design digital products & systems
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[12vw] sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px] leading-[1.05] tracking-tight mb-8"
            >
              Modern digital <br className="hidden md:block"/>
              experiences,<br />
              <span className="text-bid-gold inline-flex items-center gap-4">
                <span className="italic relative">
                  built with clarity.
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-bid-gold/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <motion.path 
                      initial={{ pathLength: 0 }} 
                      animate={{ pathLength: 1 }} 
                      transition={{ delay: 1, duration: 1.5 }}
                      d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="2" fill="none"
                    />
                  </svg>
                </span>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-sans text-lg sm:text-xl text-bid-muted max-w-xl leading-relaxed mb-10"
            >
              BREAK IT DOWN is a student-led digital initiative focused on thoughtful interfaces, product experiences, and modern web architectures. We turn ambiguity into structure.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link 
                to="/work" 
                className="px-8 py-4 bg-bid-ivory text-bid-base font-semibold rounded-full hover:bg-bid-gold hover:text-bid-base transition-all active:scale-95 shadow-[0_0_20px_rgba(243,239,231,0.2)] flex items-center gap-2 group overflow-hidden relative"
              >
                <span className="relative z-10">View Selected Work</span>
                <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center">
                   <div className="absolute flex transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-[150%] pr-1">
                     <ArrowRight className="w-5 h-5" />
                   </div>
                   <div className="absolute flex transition-transform duration-500 ease-[0.16,1,0.3,1] -translate-x-[150%] group-hover:translate-x-0 pr-1">
                     <ArrowRight className="w-5 h-5" />
                   </div>
                </div>
              </Link>
              <Link 
                to="/services" 
                className="font-sans text-sm sm:text-base font-medium text-bid-muted hover:text-bid-ivory transition-colors flex items-center gap-2 group"
              >
                <span>Explore Services</span>
                <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-bid-gold transition-all duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Visual Centerpiece */}
          <div className="lg:col-span-6 xl:col-span-5 relative mt-16 lg:mt-0 h-[450px] sm:h-[550px] lg:h-[600px] w-full flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: "1200px" }}
              className="relative w-full h-full max-w-[500px]"
            >
              {/* Decorative background blur shape */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-bid-gold/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative w-full h-full rounded-[2.5rem] bg-[#0A0C10] border border-white/5 overflow-hidden group shadow-[0_0_80px_-20px_rgba(0,0,0,0.8)]">
                {/* Subtle noise/texture overlay if you want, or just a sleek gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <img 
                  src="/og-image.webp" 
                  alt="Design structural integrity" 
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-[1.5s] ease-[0.16,1,0.3,1] scale-105 group-hover:scale-100"
                />

                {/* Gradient shadow to pop text */}
                <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/80 to-transparent pointer-events-none" />
                
                {/* Text content inside the card */}
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 flex flex-col items-start pointer-events-none">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bid-gold opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-bid-gold"></span>
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#5d6773] font-sans">Elevated Systems</span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-bid-ivory leading-[1.1] mb-2 tracking-tight group-hover:text-bid-gold transition-colors duration-500">
                    Crafting clarity <br />from complexity
                  </h3>
                </div>

                {/* Top right icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                   <Sparkles className="w-5 h-5 text-bid-gold" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secondary Ribbon section */}
      <section className="border-y border-white/5 bg-bid-base py-6 sm:py-10 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-bid-base to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-bid-base to-transparent z-10 pointer-events-none" />
        <div className="flex items-center whitespace-nowrap w-fit">
           <motion.div 
             animate={{ x: ["0%", "-50%"] }} 
             transition={{ duration: 40, ease: "linear", repeat: Infinity }}
             className="flex flex-nowrap items-center gap-10 sm:gap-16 font-serif text-4xl sm:text-6xl lg:text-[80px] text-white/[0.05] uppercase tracking-wider pr-10 sm:pr-16"
           >
             <span className="hover:text-bid-gold/80 transition-colors duration-500 cursor-default">STRATEGY</span> <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-bid-gold/30" />
             <span className="font-sans font-black text-transparent hover:text-transparent transition-colors duration-500 cursor-default" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }} onMouseEnter={(e) => e.currentTarget.style.WebkitTextStroke = '2px rgba(224,176,75,0.5)'} onMouseLeave={(e) => e.currentTarget.style.WebkitTextStroke = '2px rgba(255,255,255,0.1)'}>DESIGN</span> <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-bid-gold/30" />
             <span className="italic hover:text-bid-gold/80 transition-colors duration-500 cursor-default">DEVELOPMENT</span> <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-bid-gold/30" />
             <span className="font-sans font-black text-transparent hover:text-transparent transition-colors duration-500 cursor-default" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }} onMouseEnter={(e) => e.currentTarget.style.WebkitTextStroke = '2px rgba(224,176,75,0.5)'} onMouseLeave={(e) => e.currentTarget.style.WebkitTextStroke = '2px rgba(255,255,255,0.1)'}>MOTION</span> <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-bid-gold/30" />
             <span className="hover:text-bid-gold/80 transition-colors duration-500 cursor-default">ARCHITECTURE</span> <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-bid-gold/30" />
             <span className="font-sans font-black text-transparent hover:text-transparent transition-colors duration-500 cursor-default" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }} onMouseEnter={(e) => e.currentTarget.style.WebkitTextStroke = '2px rgba(224,176,75,0.5)'} onMouseLeave={(e) => e.currentTarget.style.WebkitTextStroke = '2px rgba(255,255,255,0.1)'}>SYSTEMS</span> <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-bid-gold/30" />
             <span className="hover:text-bid-gold/80 transition-colors duration-500 cursor-default">STRATEGY</span> <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-bid-gold/30" />
             <span className="font-sans font-black text-transparent hover:text-transparent transition-colors duration-500 cursor-default" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }} onMouseEnter={(e) => e.currentTarget.style.WebkitTextStroke = '2px rgba(224,176,75,0.5)'} onMouseLeave={(e) => e.currentTarget.style.WebkitTextStroke = '2px rgba(255,255,255,0.1)'}>DESIGN</span> <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-bid-gold/30" />
             <span className="italic hover:text-bid-gold/80 transition-colors duration-500 cursor-default">DEVELOPMENT</span> <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-bid-gold/30" />
             <span className="font-sans font-black text-transparent hover:text-transparent transition-colors duration-500 cursor-default" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }} onMouseEnter={(e) => e.currentTarget.style.WebkitTextStroke = '2px rgba(224,176,75,0.5)'} onMouseLeave={(e) => e.currentTarget.style.WebkitTextStroke = '2px rgba(255,255,255,0.1)'}>MOTION</span> <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-bid-gold/30" />
             <span className="hover:text-bid-gold/80 transition-colors duration-500 cursor-default">ARCHITECTURE</span> <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-bid-gold/30" />
             <span className="font-sans font-black text-transparent hover:text-transparent transition-colors duration-500 cursor-default" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }} onMouseEnter={(e) => e.currentTarget.style.WebkitTextStroke = '2px rgba(224,176,75,0.5)'} onMouseLeave={(e) => e.currentTarget.style.WebkitTextStroke = '2px rgba(255,255,255,0.1)'}>SYSTEMS</span> <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-bid-gold/30" />
           </motion.div>
        </div>
      </section>
      
      {/* Short manifest or philosophy block */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-bid-ivory leading-tight mx-auto mb-8">
            We don't just push pixels.<br className="hidden sm:block"/> We engineer <span className="text-bid-gold font-normal italic">intent and purpose.</span>
          </h2>
          <p className="font-sans text-bid-muted text-lg max-w-2xl mx-auto leading-relaxed">
            By merging brutal functionality with refined aesthetics, we create interfaces that don't just look pretty, but perform exceptionally. Our projects are living ecosystems built to scale.
          </p>
        </motion.div>
      </section>

    </PageTransition>
    </>
  );
}
