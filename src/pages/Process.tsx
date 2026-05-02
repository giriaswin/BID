import { PageTransition } from "@/components/layout/PageTransition";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Layers, Box, Compass, Code2, Zap } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Deconstruction",
    subtitle: "The Foundation",
    icon: Compass,
    tags: ["Research", "User Psychology", "Business Alignment"],
    text: "We begin by dismantling assumptions. We break down the product's intent to its absolute fundamentals, establishing absolute clarity on the core business objectives and user psychology before any interfaces are drawn."
  },
  {
    id: "02",
    title: "Architecture & Logic",
    subtitle: "The Blueprint",
    icon: Box,
    tags: ["System Thinking", "Data Flow", "Wireframing"],
    text: "Translating the raw foundation into rigorous systems. We map out data flows, information architecture, and the logic that will govern the entire digital experience. This is where the structural integrity is forged."
  },
  {
    id: "03",
    title: "Structural Aesthetics",
    subtitle: "The Visual Narrative",
    icon: Layers,
    tags: ["Typography", "Whitespace", "Design Language"],
    text: "We introduce our signature design language. Moving past wireframes, we layer in typography, intentional whitespace, and interaction models that transform pure function into an elegant, cohesive visual narrative."
  },
  {
    id: "04",
    title: "Precision Engineering",
    subtitle: "The Build",
    icon: Code2,
    tags: ["Performance", "Scalable Tech", "Integration"],
    text: "The blueprint becomes reality. We build using modern, scalable tech stacks, ensuring the underlying code is as beautiful and organized as the surface visual layer. Everything is optimized for speed, security, and growth."
  },
  {
    id: "05",
    title: "Refinement & Polish",
    subtitle: "The Final Pass",
    icon: Zap,
    tags: ["Motion", "QA Testing", "Launch"],
    text: "We scrutinize every micro-interaction, refine the motion choreography, and meticulously test performance until the system feels flawless and alive. Only then do we ship."
  }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <Helmet>
        <title>Process | BID</title>
        <meta name="description" content="Our engineered approach: from deconstruction to structured aesthetics and deployment. See how BID builds digital products reliably." />
        <link rel="canonical" href="https://bidstudio.vercel.app/process" />
      </Helmet>
      <PageTransition className="px-4 sm:px-6 pt-32 pb-32 mx-auto max-w-7xl overflow-hidden">
      <div className="max-w-3xl mb-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-bid-muted text-sm tracking-widest uppercase mb-6 block drop-shadow-md">Methodology</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 text-bid-ivory drop-shadow-lg">How We Work</h1>
          <p className="font-sans text-xl sm:text-2xl text-bid-muted leading-relaxed font-light">
            A meticulous, structured journey. We don't rely on sudden inspiration; we rely on <span className="text-transparent bg-clip-text bg-gradient-to-r from-bid-gold to-bid-ivory italic font-medium">engineering reliable outcomes</span>.
          </p>
        </motion.div>
      </div>

      <div ref={containerRef} className="relative max-w-5xl mx-auto">
        {/* Background Track */}
        <div className="absolute left-[30px] md:left-[50%] top-0 bottom-0 w-[1px] bg-white/5 md:-translate-x-1/2" />
        
        {/* Animated Fill Line */}
        <motion.div 
          className="absolute left-[30px] md:left-[50%] top-0 w-[2px] bg-gradient-to-b from-bid-gold via-bid-gold/50 to-transparent md:-translate-x-1/2 shadow-[0_0_15px_rgba(224,176,75,0.5)] origin-top" 
          style={{ height: lineHeight }}
        />

        <div className="flex flex-col gap-24 md:gap-32 relative z-10 py-10">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col md:flex-row items-start md:items-center w-full group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              
              {/* Spacing for staggered layout on desktop */}
              <div className="hidden md:block md:w-1/2" />
              
              {/* Node wrapper to create the glowing intersection */}
              <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center -translate-x-1/2 md:translate-x-0 mt-8 md:mt-0">
                <div className="absolute inset-0 w-10 h-10 rounded-full bg-bid-gold/0 group-hover:bg-bid-gold/10 blur-md transition-all duration-500" />
                <div className="relative w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] z-10 group-hover:border-bid-gold/50 group-hover:shadow-[0_0_15px_rgba(224,176,75,0.4)] transition-all duration-500 overflow-hidden">
                   <step.icon className="w-4 h-4 text-bid-muted group-hover:text-bid-gold group-hover:scale-110 transition-all duration-500 relative z-10" />
                   <div className="absolute inset-0 bg-transparent group-hover:bg-bid-gold/10 transition-colors duration-500 pointer-events-none" />
                </div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-20 md:pl-0 pt-2 md:pt-0 ${idx % 2 === 0 ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'}`}>
                <div className="relative">
                  {/* Huge background number */}
                  <span className={`absolute top-1/2 -translate-y-1/2 ${idx % 2 === 0 ? 'right-0 origin-right -mr-16' : 'left-0 origin-left -ml-16'} font-serif text-[140px] text-white/[0.015] font-bold tracking-tighter leading-none pointer-events-none group-hover:text-bid-gold/[0.03] group-hover:scale-110 transition-all duration-1000 ease-out`}>
                    {step.id}
                  </span>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center gap-4 mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-bid-gold font-bold">{step.subtitle}</span>
                      <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-bid-gold/40 to-transparent block" />
                    </div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-bid-ivory mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-bid-ivory group-hover:to-bid-gold/80 transition-all duration-500 drop-shadow-md">
                      {step.title}
                    </h3>
                    
                    <div className={`relative bg-[#06070a]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl group-hover:border-bid-gold/20 transition-all duration-500 shadow-2xl inline-block ${idx % 2 === 0 ? 'text-left' : 'text-left'} overflow-hidden`}>
                      {/* Subtle card glow */}
                      <div className="absolute -top-[50px] -right-[50px] w-[100px] h-[100px] bg-bid-gold/0 blur-[50px] rounded-full group-hover:bg-bid-gold/10 transition-all duration-700 pointer-events-none" />
                      
                      <p className="font-sans text-bid-muted leading-relaxed text-sm sm:text-base font-light mb-6">
                        {step.text}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-[10px] uppercase tracking-wider text-bid-muted/80 font-medium group-hover:border-white/10 group-hover:text-bid-ivory/80 transition-colors duration-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
    </>
  );
}
