"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  PencilRuler, 
  FileCheck, 
  Play, 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall, 
  Layout, 
  Award, 
  ShieldCheck,
  ArrowRight,
  Zap,
  Target,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useModal } from "@/context/ModalContext";

// Animation Variants
const fadeIn: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function HowItWorksPage() {
  const { openModal } = useModal();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 pt-0">
        {/* 1. HERO SECTION */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary pt-20">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeIn}
              className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent px-4 py-1.5 rounded-full mb-8 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-black tracking-[0.2em] uppercase">The Roadmap to Success</span>
            </motion.div>
            
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeIn}
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-8 tracking-tighter italic uppercase"
            >
              A Simple, Seamless Process <br />
              <span className="text-accent underline decoration-4 underline-offset-8">From Start to Finish</span>
            </motion.h1>
            
            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeIn}
              className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium"
            >
              We’ve designed our process to ensure every event is planned efficiently and executed flawlessly.
            </motion.p>
          </div>
        </section>

        {/* 2. INTRO SECTION */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="relative p-12 rounded-[4rem] bg-subtle-grey border border-zinc-100"
            >
                <p className="text-2xl md:text-3xl text-zinc-700 leading-relaxed font-bold italic tracking-tight">
                  At Sprintz Events, we believe great events come from <span className="text-primary font-black">structured planning</span> and <span className="text-accent font-black">seamless execution</span>. Our step-by-step approach ensures clarity, efficiency, and a smooth experience for every client.
                </p>
            </motion.div>
          </div>
        </section>

        {/* 3. PROCESS STEPS (CORE SECTION) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto space-y-12">
              {[
                {
                  step: "01",
                  title: "Requirement & Brief",
                  list: ["Understand your goals", "Team size & event type", "Budget & timeline"],
                  icon: MessageSquare,
                  desc: "We start by listening. Tell us your vision, and we'll translate it into a structured event brief."
                },
                {
                  step: "02",
                  title: "Planning & Concept",
                  list: ["Event format design", "Activity planning", "Venue & logistics alignment"],
                  icon: PencilRuler,
                  desc: "Our creative team builds the engine. We map out every interaction to maximize engagement."
                },
                {
                  step: "03",
                  title: "Proposal & Finalization",
                  list: ["Share plan & structure", "Finalize details", "Confirm execution roadmap"],
                  icon: FileCheck,
                  desc: "Transparency is key. We present a clear, detailed roadmap for your approval before we move."
                },
                {
                  step: "04",
                  title: "Execution & Management",
                  list: ["On-ground coordination", "Team handling", "Real-time management"],
                  icon: Play,
                  desc: "This is where the magic happens. Our experienced team takes over the ground with military precision."
                },
                {
                  step: "05",
                  title: "Event Completion",
                  list: ["Smooth wrap-up", "Feedback collection", "Post-event support"],
                  icon: CheckCircle2,
                  desc: "We don't leave until the last participant has a smile. We wrap up, collect feedback, and ensure value."
                }
              ].map((process, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-12 items-center group"
                >
                  <div className={`w-full md:w-1/2 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                     <div className="relative p-12 rounded-[3.5rem] bg-white border border-zinc-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />
                        <div className="text-xs font-black text-accent tracking-[0.4em] uppercase mb-4">Step {process.step}</div>
                        <h3 className="text-3xl font-black text-primary mb-6 italic uppercase tracking-tighter leading-tight">{process.title}</h3>
                        <p className="text-zinc-500 mb-8 font-medium">{process.desc}</p>
                        <ul className="space-y-4">
                           {process.list.map((item, id) => (
                             <li key={id} className="flex items-center gap-3 text-sm font-bold text-primary italic uppercase tracking-tighter">
                               <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                               {item}
                             </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className="hidden md:flex flex-col items-center gap-4 relative">
                     <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white border-8 border-white shadow-xl z-10 group-hover:bg-accent transition-colors duration-500">
                        <process.icon className="w-8 h-8" />
                     </div>
                     {idx < 4 && <div className="absolute top-20 bottom-[-48px] w-0.5 bg-zinc-100" />}
                  </div>
                  <div className={`w-full md:w-1/2 ${idx % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                     <div className="text-5xl font-black text-zinc-50 select-none pointer-events-none group-hover:text-accent/5 transition-colors">
                        {process.step}
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. VISUAL FLOW SECTION */}
        <section className="py-24 bg-subtle-grey">
           <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto rounded-[4rem] bg-white p-12 md:p-20 shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />
                 <h2 className="text-4xl font-black text-primary italic uppercase tracking-tighter text-center mb-16">The Visual Flow</h2>
                 
                 <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                    {[
                      { label: "Brief", icon: MessageSquare },
                      { label: "Plan", icon: PencilRuler },
                      { label: "Execute", icon: Rocket },
                      { label: "Deliver", icon: Sparkles }
                    ].map((step, idx) => (
                      <React.Fragment key={idx}>
                         <div className="flex flex-col items-center gap-4 group">
                            <div className="w-24 h-24 rounded-3xl bg-primary text-white flex items-center justify-center shadow-2xl group-hover:bg-accent group-hover:rotate-12 transition-all duration-300">
                               <step.icon size={36} />
                            </div>
                            <span className="font-black italic uppercase tracking-widest text-primary">{step.label}</span>
                         </div>
                         {idx < 3 && (
                            <ChevronRight className="hidden md:block w-8 h-8 text-zinc-200 animate-pulse" />
                         )}
                      </React.Fragment>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 5. WHAT YOU CAN EXPECT */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block mb-4">The Standard</span>
              <h2 className="text-5xl font-black text-primary italic tracking-tight uppercase leading-none">What You Can Expect</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Clear Communication", icon: PhoneCall, desc: "Direct channel with our core team. Always updated." },
                { title: "Structured Planning", icon: Layout, desc: "Detailed roadmaps that leave zero room for error." },
                { title: "Professional Execution", icon: Award, desc: "Managed by industry vets on-the-ground." },
                { title: "Zero Hassle", icon: ShieldCheck, desc: "We take the friction, you take the credit." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-10 rounded-[3rem] bg-subtle-grey border border-zinc-50 group transition-all"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 text-primary group-hover:bg-accent group-hover:text-white transition-all">
                    <item.icon size={32} />
                  </div>
                  <h4 className="text-xl font-black text-primary italic uppercase tracking-tighter mb-4">{item.title}</h4>
                  <p className="text-sm text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHY THIS PROCESS WORKS */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
             <div className="mb-12">
                <Zap className="w-16 h-16 text-accent mx-auto mb-8 animate-bounce" />
                <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-8">Why This Process Works</h2>
                <p className="text-xl text-white/60 mb-12 font-medium leading-relaxed">
                   Our structured approach ensures that every detail is accounted for, minimizing last-minute issues and delivering a seamless experience from start to finish. We've refined this through 50+ successful corporate and sports events.
                </p>
                <div className="flex flex-wrap justify-center gap-12">
                   <div className="text-center">
                      <div className="text-4xl font-black text-accent mb-2 italic">0%</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-white/40">Friction Rate</div>
                   </div>
                   <div className="text-center">
                      <div className="text-4xl font-black text-accent mb-2 italic">100%</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-white/40">Reliability</div>
                   </div>
                   <div className="text-center">
                      <div className="text-4xl font-black text-accent mb-2 italic">50+</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-white/40">Proved Executions</div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 7. CTA SECTION */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
               whileHover={{ scale: 1.01 }}
               className="bg-accent rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center text-white"
            >
               <div className="absolute inset-0 bg-primary/20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 hover:opacity-40 transition-opacity pointer-events-none" />
               <div className="relative z-10 max-w-4xl mx-auto">
                 <h2 className="text-4xl md:text-5xl font-black mb-10 italic uppercase tracking-tighter leading-[0.9]">Let's Get Started</h2>
                 <p className="text-xl text-white/80 mb-12 font-medium max-w-2xl mx-auto">
                   Share your requirements and we’ll guide you through the process. Your journey from a simple brief to a flawlessly executed event starts here.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button size="lg" className="bg-white text-accent hover:bg-zinc-100 h-16 px-12 rounded-2xl text-2xl font-black italic shadow-2xl uppercase" onClick={openModal}>
                      Plan Your Event
                    </Button>
                    <Button size="lg" className="bg-primary hover:bg-primary/95 h-16 px-12 rounded-2xl text-2xl font-black italic shadow-2xl uppercase" onClick={openModal}>
                      Contact Us
                    </Button>
                 </div>
               </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

// Fixed Lucide icon that I accidentally didn't import
const Rocket = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-rocket"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
    <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
  </svg>
);
