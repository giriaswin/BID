import { PageTransition } from "@/components/layout/PageTransition";
import { Helmet } from "react-helmet-async";
import { ChevronDown, Clock, Briefcase } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const services = [
  {
    title: "UI/UX Systems",
    desc: "Interfaces engineered for absolute clarity, eliminating cognitive friction at every touchpoint.",
    timeline: "2-6 Weeks",
    engagement: "Project-Based",
    details: [
      { label: "The Philosophy", value: "We treat interfaces as living systems. Every state, transition, and interaction is intentionally crafted to guide users naturally. We map complex requirements into elegant, predictable experiences." },
      { label: "What we deliver?", value: "High-fidelity layouts, interactive prototypes, and production-ready component libraries that maintain structural integrity across all breakpoints." },
      { label: "Who it's for?", value: "Founders and product teams requiring a premium, meticulously crafted interface that sets them apart from generic templates." }
    ]
  },
  {
    title: "Product Experience",
    desc: "We architect the deeper logic behind the interface, ensuring the entire product feels cohesive and intuitive.",
    timeline: "4-8 Weeks",
    engagement: "Retainer / Project",
    details: [
      { label: "The Approach", value: "Going beyond surface-level visuals to connect user psychology with system behavior, ensuring every interaction feels purposeful and rewarding." },
      { label: "What we deliver?", value: "Comprehensive user journey maps, wireframe architectures, usability testing reports, and strategic product roadmaps." },
      { label: "Who it's for?", value: "Complex products, platforms, and SaaS businesses struggling with user retention, complicated workflows, or fragmented experiences." }
    ]
  },
  {
    title: "Full Stack Systems",
    desc: "Modern digital architectures built strictly for performance, security, and long-term scalability.",
    timeline: "4-12 Weeks",
    engagement: "Project-Based",
    details: [
      { label: "The Workflow", value: "We meticulously select the ideal tech stack, establish robust state management, and build out efficient, clean APIs that power frontend experiences seamlessly." },
      { label: "What we deliver?", value: "Production-ready, maintainable codebases, securely deployed infrastructure, and well-documented API endpoints." },
      { label: "Who it's for?", value: "Startups and enterprises needing robust, scalable applications capable of handling rapid growth without buckling." }
    ]
  },
  {
    title: "MVP Prototyping",
    desc: "Rapid, high-value builds to test core assumptions and validate your most critical product theories.",
    timeline: "2-4 Weeks",
    engagement: "Sprint Build",
    details: [
      { label: "The Methodology", value: "We focus solely on the primary value proposition, stripping away secondary features to deliver a functioning, testable product in record time without sacrificing quality." },
      { label: "What we deliver?", value: "A tangible, functioning prototype deployed live—built to attract early adopters, secure investment, or pivot decisively based on real-world feedback." },
      { label: "Who it's for?", value: "Early-stage founders, stealth startups, and internal innovation teams needing proof-of-concept before heavy investment." }
    ]
  },
  {
    title: "Digital Identity",
    desc: "Cohesive visual directions designed specifically for the digital realm, breathing life into your brand.",
    timeline: "2-4 Weeks",
    engagement: "Project-Based",
    details: [
      { label: "The Elements", value: "Typographic systems, layout rhythms, color palettes, and motion guidelines that extend effortlessly from a simple logo to a comprehensive web application." },
      { label: "What we deliver?", value: "Digital-first brand guidelines, logo systems, typography selection, and core asset libraries ready for immediate UI integration." },
      { label: "Who it's for?", value: "New companies establishing their presence, or existing brands pivoting completely into software and digital products." }
    ]
  },
  {
    title: "Design Systems",
    desc: "Comprehensive, modular design languages that empower engineering teams to scale without friction.",
    timeline: "4-8 Weeks",
    engagement: "Project-Based",
    details: [
      { label: "The Structure", value: "We define the atomic elements—design tokens, components, and layout behaviors—documenting them rigorously for seamless developer handoff." },
      { label: "What we deliver?", value: "A centralized component library (e.g., Storybook), defined design tokens, and comprehensive documentation for usage constraints." },
      { label: "Who it's for?", value: "Scaling engineering and design teams suffering from visual inconsistency, technical debt, and slow deployment cycles." }
    ]
  },
  {
    title: "Technical Writing",
    desc: "Clear, structured, and developer-centric documentation that decodes complex architecture.",
    timeline: "1-3 Weeks",
    engagement: "Project-Based",
    details: [
      { label: "The Focus", value: "Crafting pristine API documentation, high-level system overview flows, and deeply technical guides that engineers can actually understand and rely on." },
      { label: "What we deliver?", value: "Interactive API references, beautifully formatted onboarding guides, and architectural decision records." },
      { label: "Who it's for?", value: "Dev-first SaaS tools, open-source frameworks, and platforms needing to onboard external developers." }
    ]
  },
  {
    title: "Data Visualization",
    desc: "Transforming dense data streams into elegant, digestible visual stories that instantly communicate value.",
    timeline: "3-6 Weeks",
    engagement: "Project-Based",
    details: [
      { label: "The Integration", value: "We design bespoke interactive charts, analytical dashboards, and real-time metric trackers that make data exploration intuitive rather than overwhelming." },
      { label: "What we deliver?", value: "Custom-coded charting sequences, interactive D3/Canvas components, and specialized reporting dashboards." },
      { label: "Who it's for?", value: "Analytics platforms, fintech applications, and B2B software where dense data must be made actionable and beautiful." }
    ]
  }
];

const ServiceCard: React.FC<{ service: typeof services[0] }> = ({ service }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const isAnyOpen = openIdx !== null;

  // Handle clicking outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setOpenIdx(null);
      }
    }
    
    if (isAnyOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAnyOpen]);

  return (
    <div ref={cardRef} className="bg-bid-surface border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col group hover:border-white/10 transition-colors overflow-hidden">
      
      {/* Top Section */}
      <div className={`transition-all duration-500 ease-[0.16,1,0.3,1] flex-grow flex flex-col ${isAnyOpen ? 'blur-sm opacity-20 pointer-events-none translate-y-2' : 'blur-0 opacity-100 translate-y-0'}`}>
        
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/5 text-[10px] uppercase tracking-wider text-bid-muted font-medium">
            <Clock className="w-3 h-3 text-bid-gold" />
            {service.timeline}
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/5 text-[10px] uppercase tracking-wider text-bid-muted font-medium">
            <Briefcase className="w-3 h-3 text-bid-gold" />
            {service.engagement}
          </div>
        </div>

        <div className="flex items-start justify-between mb-4">
           <h3 className="font-serif text-2xl text-bid-ivory group-hover:text-bid-gold transition-colors duration-500">{service.title}</h3>
        </div>
        <p className="font-sans text-sm text-bid-muted leading-relaxed flex-grow">{service.desc}</p>
      </div>
      
      {/* Accordion Section */}
      <div className="flex flex-col gap-3 font-sans text-sm mt-8 border-t border-white/10 pt-6 relative z-10 w-full">
        {service.details.map((detail, dIdx) => {
          const isOpen = openIdx === dIdx;
          const isOtherOpen = isAnyOpen && !isOpen;
          return (
            <div key={dIdx} className="w-full">
              <button 
                onClick={() => setOpenIdx(isOpen ? null : dIdx)}
                className={`w-full flex items-center justify-between cursor-pointer list-none text-[11px] uppercase tracking-wider font-semibold outline-none transition-all duration-500 ease-[0.16,1,0.3,1] ${isOtherOpen ? 'blur-[3px] opacity-30 pointer-events-none' : 'text-bid-ivory/80 hover:text-bid-gold'}`}
              >
                {detail.label}
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-bid-gold' : ''}`} />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, y: -10 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-bid-ivory/90 leading-relaxed text-sm pt-4 pb-2 font-light">
                      {detail.value}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <>
      <Helmet>
        <title>Services | BID</title>
        <meta name="description" content="Discover BID's capabilities in UI/UX systems, product experience, technical architecture, and web development." />
        <link rel="canonical" href="https://breakitdown.vercel.app/services" />
      </Helmet>
      <PageTransition className="px-4 sm:px-6 pt-32 pb-24 mx-auto max-w-7xl">
      <div className="max-w-3xl mb-24 relative">
        <span className="font-sans text-bid-muted text-sm tracking-widest uppercase mb-6 block drop-shadow-md">Capabilities</span>
        <h1 className="font-serif text-5xl md:text-7xl mb-6">Expertise & Artifacts</h1>
        <p className="font-sans text-xl text-bid-muted leading-relaxed">
          What we build, why we build it, and what you actually receive. No fluff, no jargon. Just clear outcomes and structured systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
    </PageTransition>
    </>
  );
}
