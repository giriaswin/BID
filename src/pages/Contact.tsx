import { PageTransition } from "@/components/layout/PageTransition";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Scan, X, Youtube, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import QRCode from "react-qr-code";
import { motion, AnimatePresence } from "motion/react";

export function Contact() {
  const [fullscreenQR, setFullscreenQR] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>Contact | BID</title>
        <meta name="description" content="Get in touch with BID. Whether you need absolute clarity in your product's architecture or digital presence, the dialogue starts here." />
        <link rel="canonical" href="https://breakitdown.vercel.app/contact" />
      </Helmet>
      <PageTransition className="px-4 sm:px-6 pt-32 pb-24 mx-auto max-w-7xl min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Lightbox for QR Code */}
      <AnimatePresence>
        {fullscreenQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-10 cursor-default"
            onClick={() => setFullscreenQR(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              onClick={() => setFullscreenQR(null)}
            >
              <X className="w-6 h-6 text-bid-ivory" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white p-6 sm:p-10 rounded-[32px] sm:rounded-[48px] shadow-2xl flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <QRCode 
                value={fullscreenQR} 
                size={300} 
                bgColor="#ffffff"
                fgColor="#151922"
              />
              <p className="mt-8 text-bid-surface font-sans text-lg font-medium text-center">Scan to Connect</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background massive typography */}
      <div className="absolute top-20 -left-10 md:-left-20 pointer-events-none opacity-[0.02] mix-blend-overlay z-0 select-none">
        <h1 className="font-serif text-[150px] md:text-[300px] leading-none whitespace-nowrap">CONTACT</h1>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Column: Form & Title */}
        <div className="lg:col-span-7 flex flex-col pt-10 h-full">
          
          <div className="mb-16 lg:mb-0 relative">
            {/* Subtle diagrammatic lines behind text */}
            <div className="absolute top-0 right-10 w-[1px] h-full bg-gradient-to-b from-transparent via-bid-gold/20 to-transparent pointer-events-none hidden sm:block" />
            <div className="absolute bottom-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bid-gold/20 to-transparent pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-gradient-to-r from-bid-gold to-transparent" />
              <span className="font-sans text-bid-gold text-[10px] tracking-[0.2em] uppercase font-bold">Initiate Connection</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-[12vw] sm:text-7xl lg:text-[90px] mb-8 tracking-tighter leading-[0.85] relative z-10"
            >
              Let's build<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bid-gold via-bid-ivory to-bid-muted italic font-light drop-shadow-sm">something</span><br />
              exceptional.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-lg sm:text-xl text-bid-muted font-light max-w-md leading-relaxed mt-10 relative pl-6 border-l border-bid-gold/20"
            >
              Whether you need absolute clarity in your product's architecture or a fundamental re-engineering of your digital presence, the dialogue starts here.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-auto w-full pr-0 lg:pr-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-white/10" />
              <span className="font-sans text-bid-muted text-[10px] tracking-[0.2em] uppercase font-semibold">Digital Presence</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              {[
                { name: 'YouTube', url: 'https://www.youtube.com/@thebidofficial', desc: 'Engineering Breakdowns', icon: Youtube },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/bidbreakitdown', desc: 'Corporate Milestones', icon: Linkedin },
                { name: 'Instagram', url: 'https://instagram.com/bidbreakitdown', desc: 'Visual Archives', icon: Instagram }
              ].map((social, idx) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#0A0C10] border border-white/[0.08] p-6 rounded-[24px] flex flex-col justify-between group hover:border-white/[0.15] hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-all duration-500 shadow-[0_4px_20px_rgb(0,0,0,0.2)] relative overflow-hidden h-44 sm:h-48"
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bid-gold/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="flex items-start justify-between relative z-10 w-full">
                     <social.icon className="w-5 h-5 text-bid-muted group-hover:text-bid-gold transition-colors duration-500" strokeWidth={1.5} />
                     <div className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:bg-bid-gold/10 group-hover:border-bid-gold/30 transition-all duration-500">
                       <ArrowUpRight className="w-3.5 h-3.5 text-bid-muted group-hover:text-bid-gold transition-colors duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                     </div>
                  </div>
                  
                  <div className="relative z-10 mt-6">
                     <h3 className="font-serif text-xl sm:text-2xl text-bid-ivory group-hover:text-bid-gold transition-colors duration-500 tracking-tight font-light">{social.name}</h3>
                     <p className="font-sans text-[10px] sm:text-xs text-bid-muted mt-2 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">{social.desc}</p>
                  </div>
                  
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-bid-gold/5 blur-[40px] rounded-full pointer-events-none group-hover:bg-bid-gold/15 transition-all duration-700" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Maverick Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-6 pt-10 lg:pt-32">
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#0A0C10] border border-white/[0.08] p-8 sm:p-12 rounded-[32px] relative group hover:border-white/[0.15] hover:shadow-[0_8px_40px_rgb(0,0,0,0.6)] transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
          >
            {/* Subtle Top Edge Highlight */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bid-gold/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="flex items-center gap-4 mb-12">
              <div className="w-1.5 h-1.5 rounded-full bg-bid-gold shadow-[0_0_10px_rgba(224,176,75,0.6)]" />
              <h4 className="font-serif text-2xl sm:text-3xl text-bid-ivory tracking-wide">Direct Lines</h4>
            </div>
            
            <ul className="flex flex-col gap-10 font-sans">
              <li>
                <span className="text-[10px] text-bid-muted uppercase tracking-[0.2em] mb-3 block font-semibold">General Inquiry</span>
                <a href="mailto:thebidchannel@gmail.com" className="text-xl sm:text-2xl text-bid-ivory/90 hover:text-bid-gold transition-colors inline-block font-light tracking-tight group/link">
                  thebidchannel@gmail.com
                  <span className="block h-[1px] w-0 bg-bid-gold/50 transition-all duration-500 group-hover/link:w-full mt-1" />
                </a>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-white/5">
                <div>
                  <span className="text-[10px] text-bid-muted uppercase tracking-[0.2em] mb-3 block font-semibold">Aswin</span>
                  <a href="mailto:giriaswin0104@gmail.com" className="text-lg text-bid-ivory/90 hover:text-bid-gold transition-colors inline-block font-light tracking-tight break-all group/link">
                    giriaswin0104@gmail.com
                    <span className="block h-[1px] w-0 bg-bid-gold/50 transition-all duration-500 group-hover/link:w-full mt-1" />
                  </a>
                </div>
                <div>
                  <span className="text-[10px] text-bid-muted uppercase tracking-[0.2em] mb-3 block font-semibold">Srijayasimmanithi</span>
                  <a href="mailto:srijayasimmanithi@gmail.com" className="text-lg text-bid-ivory/90 hover:text-bid-gold transition-colors inline-block font-light tracking-tight break-all group/link">
                    srijayasimmanithi@gmail.com
                    <span className="block h-[1px] w-0 bg-bid-gold/50 transition-all duration-500 group-hover/link:w-full mt-1" />
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Socials & WhatsApp dual QR Scanner */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* WhatsApp QR 1 */}
            <div 
              className="bg-[#0A0C10] border border-white/[0.08] p-8 rounded-[32px] flex flex-col items-center justify-center gap-6 group hover:border-white/[0.15] hover:shadow-[0_8px_40px_rgb(0,0,0,0.6)] transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.4)] cursor-pointer relative"
              onClick={() => setFullscreenQR("https://wa.me/917339691814")}
            >
               <div className="absolute top-5 right-5 text-bid-muted group-hover:text-bid-gold transition-colors duration-500">
                 <Scan className="w-5 h-5" />
               </div>
               
               <div className="bg-white p-3 rounded-2xl shadow-xl mt-4">
                 <QRCode 
                   value="https://wa.me/917339691814" 
                   size={120} 
                   bgColor="#ffffff"
                   fgColor="#0a0a0a"
                 />
               </div>
               <div className="text-center w-full">
                 <span className="block font-serif text-xl text-bid-ivory group-hover:text-bid-gold transition-colors duration-500 tracking-tight">Aswin</span>
                 <div className="h-[1px] w-8 bg-white/10 mx-auto my-3 group-hover:bg-bid-gold/30 transition-colors" />
                 <span className="block text-[11px] font-mono text-bid-muted uppercase tracking-[0.1em]">+91 73396 91814</span>
               </div>
            </div>

            {/* WhatsApp QR 2 */}
            <div 
              className="bg-[#0A0C10] border border-white/[0.08] p-8 rounded-[32px] flex flex-col items-center justify-center gap-6 group hover:border-white/[0.15] hover:shadow-[0_8px_40px_rgb(0,0,0,0.6)] transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.4)] cursor-pointer relative"
              onClick={() => setFullscreenQR("https://wa.me/918838854258")}
            >
               <div className="absolute top-5 right-5 text-bid-muted group-hover:text-bid-gold transition-colors duration-500">
                 <Scan className="w-5 h-5" />
               </div>

               <div className="bg-white p-3 rounded-2xl shadow-xl mt-4">
                 <QRCode 
                   value="https://wa.me/918838854258" 
                   size={120} 
                   bgColor="#ffffff"
                   fgColor="#0a0a0a"
                 />
               </div>
               <div className="text-center w-full">
                 <span className="block font-serif text-xl text-bid-ivory group-hover:text-bid-gold transition-colors duration-500 tracking-tight">Srijayasimmanithi</span>
                 <div className="h-[1px] w-8 bg-white/10 mx-auto my-3 group-hover:bg-bid-gold/30 transition-colors" />
                 <span className="block text-[11px] font-mono text-bid-muted uppercase tracking-[0.1em]">+91 88388 54258</span>
               </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </PageTransition>
    </>
  );
}
