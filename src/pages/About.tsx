import { PageTransition } from "@/components/layout/PageTransition";
import { Helmet } from "react-helmet-async";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function About() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const privacyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (privacyRef.current && !privacyRef.current.contains(event.target as Node)) {
        setIsPrivacyOpen(false);
      }
    }

    if (isPrivacyOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPrivacyOpen]);

  return (
    <>
      <Helmet>
        <title>About | BID</title>
        <meta name="description" content="BID is a student-led initiative focused on UI/UX engineering, web development, and digital growth. Learn more about our mission and approach." />
        <link rel="canonical" href="https://bidstudio.vercel.app/about" />
      </Helmet>
      <PageTransition className="px-4 sm:px-6 pt-32 pb-24 mx-auto max-w-7xl">
      <div className="max-w-4xl mb-24">
        <span className="font-sans text-bid-muted text-sm tracking-widest uppercase mb-6 block drop-shadow-md">PURPOSE</span>
        <h1 className="font-serif text-5xl md:text-7xl mb-6">About Us</h1>
        <p className="font-sans text-xl text-bid-gold italic leading-relaxed">
          We're not going to settle for less.
        </p>
      </div>

      <div className="space-y-24 font-sans text-lg text-bid-muted leading-relaxed">
        
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl text-bid-ivory sticky top-32">Who we're</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="mb-6 max-w-2xl text-xl">
              BID is a student-led digital and technology initiative focused on building modern, high-impact digital experiences while making tech more accessible to the next generation of creators.
            </p>
            <p className="mb-6 max-w-2xl text-xl">
              We work across UI/UX engineering, web development, portfolio systems, data visualization, and rapid MVP prototyping - helping ideas move from concept to execution with clarity and speed.
            </p>
            <p className="mb-8 max-w-2xl text-xl">
              Beyond building, BID operates as a knowledge and opportunity hub - sharing technical insights, real-world learning, hiring updates, and practical resources for developers, students, and emerging talent.
            </p>
            <p className="max-w-2xl text-xl text-bid-ivory/90 border-l border-bid-gold/50 pl-6 py-2">
              Our mission is simple: break down technology, design, and digital growth into systems that are understandable, usable, and impactful.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-white/5 pt-24">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl text-bid-ivory sticky top-32">Why we exist</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="mb-6 max-w-2xl text-xl">
              BID started from a simple frustration: the digital world is full of noise. Products are often overcomplicated, confusing, or just built without care. 
            </p>
            <p className="max-w-2xl text-xl">
              We exist to break things down. To strip away the unnecessary and leave only what is clear, useful, and meticulously designed. The web doesn't need more clutter; it needs intention.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-white/5 pt-24">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl text-bid-ivory sticky top-32">What we value</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-bid-surface border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
              <h4 className="text-bid-ivory font-serif text-xl mb-3">Restraint</h4>
              <p className="text-base text-bid-muted">Knowing what to leave out is harder than knowing what to put in. We design with quiet confidence.</p>
            </div>
            <div className="bg-bid-surface border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
              <h4 className="text-bid-ivory font-serif text-xl mb-3">Structural Integrity</h4>
              <p className="text-base text-bid-muted">We don't do frontend facade. Our engineering is as rigorous as our typography.</p>
            </div>
            <div className="bg-bid-surface border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
              <h4 className="text-bid-ivory font-serif text-xl mb-3">Clarity</h4>
              <p className="text-base text-bid-muted">If it takes more than a glance to understand, it needs to be broken down further.</p>
            </div>
            <div className="bg-bid-surface border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
              <h4 className="text-bid-ivory font-serif text-xl mb-3">Craftsmanship</h4>
              <p className="text-base text-bid-muted">We care about line heights, subtle animations, and edges. Details are the product.</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-white/5 pt-24">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl text-bid-ivory sticky top-32">Legal</h2>
          </div>
          <div className="lg:col-span-8">
            <div ref={privacyRef} className="bg-bid-surface border border-white/5 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setIsPrivacyOpen(!isPrivacyOpen)}
                className="w-full flex items-center justify-between p-8 outline-none text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-serif text-2xl text-bid-ivory">Privacy Policy</span>
                <motion.div animate={{ rotate: isPrivacyOpen ? 180 : 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                  <ChevronDown className={`w-6 h-6 transition-colors duration-500 ${isPrivacyOpen ? 'text-bid-gold' : 'text-bid-muted'}`} />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {isPrivacyOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 border-t border-white/5 mt-4 ml-8 mr-8 text-base text-bid-muted/80 leading-relaxed space-y-6">
                      <p>
                        Break It Down ("BID", "we", "us", or "our") respects your privacy. This policy outlines how we handle data when you engage with us, our digital products, or our services. We believe in taking only what is necessary and being transparent about it.
                      </p>
                      
                      <div>
                        <h5 className="text-bid-ivory font-medium mb-2">1. Data Collection</h5>
                        <p>We collect minimal information required to communicate with you or provide our services. This includes email addresses, names, and any project-specific details you explicitly share. We do not use sneaky trackers or invisible analytics to harvest your personal browsing data.</p>
                      </div>

                      <div>
                        <h5 className="text-bid-ivory font-medium mb-2">2. Usage of Information</h5>
                        <p>Any data we do collect is strictly used to deliver our services, process communications, or improve the structural integrity of our products. We do not sell, rent, or lease any client data to third parties under any circumstances.</p>
                      </div>

                      <div>
                        <h5 className="text-bid-ivory font-medium mb-2">3. Security Context</h5>
                        <p>We deploy modern security standards to protect your data during transmission and storage. However, no internet-based transmission system is entirely flawless. By communicating with us, you acknowledge and accept these inherent structural risks.</p>
                      </div>

                      <div>
                        <h5 className="text-bid-ivory font-medium mb-2">4. Your Rights</h5>
                        <p>You may request insights into what data we hold about you, or request its complete deletion at any time. Address all basic inquiries or removal requests directly to our contact email.</p>
                      </div>
                      
                      <p className="text-sm pt-4 border-t border-white/5 text-bid-muted/50 font-medium">Last updated: May 2026</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
    </>
  );
}
