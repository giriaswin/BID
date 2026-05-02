import { PageTransition } from "@/components/layout/PageTransition";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

export function Work() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: "tripmate",
      name: "TripMate",
      sub: "Travel Planning Assistant",
      summary: "A modern travel planning platform designed around clarity and flexibility.",
      image: "/Tripmate.webp",
      context: "Planning a trip involves multiple steps such as choosing destinations, estimating costs, and organizing routes. These steps are often handled separately, which makes the process time-consuming.",
      challenge: "Travelers lack a unified workflow to make key decisions synchronously.",
      approach: "I built an application that combines these steps into a single workflow. Based on user input, the system suggests destinations, estimates budgets, and outlines possible travel routes.",
      outcome: "Reduces the effort required to plan a trip by bringing key decisions into one place, providing a starting point that users can cleanly refine.",
      stack: ["JavaScript", "Python", "Flask", "Node.js", "APIs"]
    },
    {
      id: "medora",
      name: "Medora",
      sub: "Medical Information Retrieval System",
      summary: "System for retrieving relevant medical information from documents with high contextual accuracy.",
      image: "/Medora.webp",
      context: "Standard search systems often return results that are too broad or not directly useful.",
      challenge: "Medical information requires extreme accuracy and context that standard keyword matching fails to deliver.",
      approach: "Built a system using vector-based retrieval to find content that is contextually related to the query, generating responses directly from verified medical documents.",
      outcome: "Improves the relevance of search results and provides more focused answers, helping users get closer to the critical information they actually need.",
      stack: ["Python", "LangChain", "ChromaDB", "Flask", "LLMs"]
    },
    {
      id: "vexel",
      name: "Vexel",
      sub: "AI Website Builder",
      summary: "Website builder with prompt and voice-based input designed for immediate visual feedback.",
      image: "/Vexel.webp",
      context: "Creating websites requires technical knowledge, creating a barrier for non-developers.",
      challenge: "Existing builders are either too complex (high learning curve) or too rigid (templates).",
      approach: "Developed a web-based builder allowing layout generation via text or voice. Converts input into structured components rendered in real-time, coupled with a visual drag-and-drop editor.",
      outcome: "Makes website creation significantly more accessible by reducing technical barriers, allowing extremely rapid iteration.",
      stack: ["TypeScript", "React", "Node.js", "Express", "Firebase"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Work | BID</title>
        <meta name="description" content="Explore BID's portfolio of engineering and design projects. Case studies spanning platforms, ML integration, and scalable interfaces." />
        <link rel="canonical" href="https://bidstudio.vercel.app/work" />
      </Helmet>
      <PageTransition className="px-4 sm:px-6 pt-32 pb-24 mx-auto max-w-7xl">
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-10 cursor-default"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-bid-ivory" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              src={selectedImage}
              alt="Fullscreen view"
              className="max-w-full max-h-full rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mb-32 relative"
      >
        <span className="font-sans text-bid-muted text-sm tracking-widest uppercase mb-6 block drop-shadow-md">Portfolio</span>
        <h1 className="font-serif text-5xl md:text-7xl mb-6">Selected Works</h1>
        <p className="font-sans text-xl sm:text-2xl text-bid-muted leading-relaxed font-light">
          Proof before promises. A collection of digital systems, interfaces, and tools designed around clarity and utility.
        </p>

        {/* Decorative Grid Line */}
        <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-bid-gold/20 to-transparent" />
      </motion.div>

      <div className="flex flex-col gap-32 sm:gap-48 relative">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative group`}
          >
            {/* Visual Offset Shadow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-bid-gold/5 blur-[120px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            {/* Visual block */}
            <div 
              className={`col-span-12 lg:col-span-7 ${idx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'} rounded-3xl overflow-hidden bg-bid-surface border border-white/5 aspect-[4/3] lg:aspect-auto lg:h-[600px] relative w-full cursor-default`}
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="absolute inset-0 bg-bid-navy/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10 pointer-events-none" />
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                }}
              />
              {/* Overlay hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-bid-base/90 via-bid-base/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />
              
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <ArrowUpRight className="w-5 h-5 text-bid-ivory" />
              </div>
            </div>

            {/* Content block */}
            <div className={`col-span-12 lg:col-span-5 flex flex-col ${idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="mb-10 relative">
                {/* Number structural indicator */}
                <span className="absolute -top-12 -left-6 text-[100px] font-serif font-bold text-white/[0.02] select-none pointer-events-none z-0">
                  0{idx + 1}
                </span>

                <span className="font-sans text-bid-gold text-xs font-semibold tracking-widest uppercase mb-4 inline-block px-3 py-1 rounded-full border border-bid-gold/20 bg-bid-gold/5 backdrop-blur-md relative z-10">{project.sub}</span>
                <h2 className="font-serif text-5xl mb-4 text-bid-ivory relative z-10">{project.name}</h2>
                <p className="font-sans text-xl text-bid-muted relative z-10">{project.summary}</p>
              </div>

              <div className="grid gap-8 font-sans text-sm text-bid-muted border-l border-white/10 pl-6 relative">
                {/* Active line indicator on hover */}
                <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-bid-gold scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-700 ease-[0.16,1,0.3,1]" />
                
                <div>
                  <h4 className="text-bid-ivory font-medium mb-2 uppercase tracking-wide text-xs">Context</h4>
                  <p className="leading-relaxed text-bid-muted/80">{project.context}</p>
                </div>
                <div>
                  <h4 className="text-bid-ivory font-medium mb-2 uppercase tracking-wide text-xs">Approach</h4>
                  <p className="leading-relaxed text-bid-muted/80">{project.approach}</p>
                </div>
                <div>
                  <h4 className="text-bid-ivory font-medium mb-2 uppercase tracking-wide text-xs">Outcome</h4>
                  <p className="leading-relaxed text-bid-muted/80">{project.outcome}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-lg border border-white/5 bg-bid-surface/50 text-xs font-medium text-bid-ivory/70 hover:text-bid-gold hover:border-bid-gold/30 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </PageTransition>
    </>
  );
}
