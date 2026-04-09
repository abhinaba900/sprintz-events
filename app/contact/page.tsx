"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Zap, 
  Layout, 
  Rocket, 
  Users, 
  ChevronRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

const fadeIn: any = {
  hidden: { opacity: 0, y: 20 },
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

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 pt-0">
        {/* 1. HERO SECTION */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-primary pt-24 md:pt-32">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[100px]" />
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
              <span className="text-xs font-black tracking-[0.2em] uppercase text-white">Let's build something elite</span>
            </motion.div>
            
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeIn}
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tighter italic uppercase"
            >
              Let’s Plan Your <br />
              <span className="text-accent underline decoration-4 underline-offset-8">Next Event</span>
            </motion.h1>
            
            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeIn}
              className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-medium"
            >
              Tell us what you have in mind, and we’ll take care of the rest.
            </motion.p>
          </div>
        </section>

        {/* 2. MAIN CONTENT GRID (FORM + QUICK CONTACT) */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 max-w-7xl mx-auto">
              
              {/* CONTACT FORM */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-2/3"
              >
                <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-zinc-100 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <h2 className="text-3xl font-black text-primary italic uppercase tracking-tighter mb-10 pb-6 border-b border-zinc-50">
                    Tell Us About Your Event
                  </h2>

                  <ContactForm />
                </div>
              </motion.div>

              {/* QUICK CONTACT & TRUST */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/3 space-y-12"
              >
                {/* QUICK OPTIONS */}
                <div className="space-y-6">
                   <h3 className="text-xl font-black text-primary italic uppercase tracking-tighter ml-2">Quick Contact</h3>
                   <div className="space-y-4">
                      <a href="tel:+919876543210" className="flex items-center gap-6 p-6 rounded-[2.5rem] bg-subtle-grey border border-zinc-100 group hover:border-accent/40 transition-all">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all">
                           <Phone size={24} />
                        </div>
                        <div>
                           <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Call Us</div>
                           <div className="text-lg font-black text-primary italic uppercase tracking-tighter">+91 98765 43210</div>
                        </div>
                      </a>
                      <a href="mailto:hello@sprintzevents.com" className="flex items-center gap-6 p-6 rounded-[2.5rem] bg-subtle-grey border border-zinc-100 group hover:border-accent/40 transition-all">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all">
                           <Mail size={24} />
                        </div>
                        <div>
                           <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Email Us</div>
                           <div className="text-lg font-black text-primary italic uppercase tracking-tighter underline">hello@sprintzevents.com</div>
                        </div>
                      </a>
                      <a href="https://wa.me/919876543210" className="flex items-center gap-6 p-8 rounded-[3rem] bg-primary text-white group hover:bg-accent transition-all shadow-xl">
                        <div className="w-16 h-16 rounded-[1.5rem] bg-white/10 flex items-center justify-center text-white mb-0">
                           <MessageCircle size={32} />
                        </div>
                        <div className="flex-1">
                           <div className="text-xs font-black text-white/50 uppercase tracking-[0.2em] mb-1">Priority WhatsApp</div>
                           <div className="text-2xl font-black italic uppercase tracking-tighter">Chat Now</div>
                        </div>
                        <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                      </a>
                   </div>
                </div>

                {/* TRUST POINTS */}
                <div className="p-10 rounded-[4rem] bg-zinc-50 border border-zinc-100">
                  <h3 className="text-xl font-black text-primary italic uppercase tracking-tighter mb-8 border-b border-zinc-200 pb-4">Why Contact Us?</h3>
                  <div className="space-y-8">
                     {[
                       { title: "Quick Response", icon: Zap, desc: "We revert within 24 hours with a structured brief." },
                       { title: "Structured Planning", icon: Layout, desc: "Detailed roadmaps that leave zero room for error." },
                       { title: "Elite Execution", icon: Rocket, desc: "Experienced team for high-stakes events." },
                       { title: "Hands-on Team", icon: Users, desc: "Direct channel with project leads throughout." }
                     ].map((point, idx) => (
                       <div key={idx} className="flex gap-6 items-start">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-accent shrink-0 shadow-sm">
                             <point.icon size={20} />
                          </div>
                          <div>
                             <div className="font-black text-primary italic uppercase tracking-tighter mb-1 text-sm">{point.title}</div>
                             <p className="text-zinc-500 text-xs font-medium leading-relaxed">{point.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. MAP SECTION (Centered) */}
        <section className="py-24 bg-subtle-grey overflow-hidden">
           <div className="container mx-auto px-6">
              <div className="max-w-7xl mx-auto rounded-[5rem] overflow-hidden bg-white shadow-2xl flex flex-col md:flex-row relative">
                 <div className="md:w-1/2 p-12 md:p-20 relative z-10">
                    <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block mb-4 italic">Our Base</span>
                    <h2 className="text-5xl font-black text-primary italic uppercase tracking-tighter mb-8">Visit Our <br />Office</h2>
                    <div className="space-y-8">
                       <div className="flex gap-6 items-start">
                          <MapPin className="text-accent w-8 h-8 shrink-0" />
                          <div className="text-xl font-bold text-zinc-600 italic">
                             123 Event Lane, Suite 456, <br />
                             Indiranagar, Bangalore, <br />
                             Karnataka 560038
                          </div>
                       </div>
                       <Button variant="outline" className="h-14 px-8 border-primary text-primary hover:bg-primary hover:text-white rounded-2xl font-black italic uppercase">
                          Get Directions
                       </Button>
                    </div>
                 </div>
                 <div className="md:w-1/2 h-[400px] md:h-auto bg-zinc-200 relative grayscale hover:grayscale-0 transition-all duration-1000">
                    {/* Placeholder for Static Maps or Embed */}
                    <div className="absolute inset-0 bg-[#f3f4f6]" />
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                       <MapPin size={200} className="text-primary" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. CTA REINFORCEMENT */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="space-y-8"
            >
               <h2 className="text-4xl md:text-5xl font-black text-primary italic uppercase tracking-tighter leading-none mb-8">
                 Ready to Get <span className="text-accent underline">Started?</span>
               </h2>
               <p className="text-xl text-zinc-500 font-medium italic mb-12">
                 Share your requirements and we’ll get back to you shortly with a personalized event roadmap.
               </p>
               <CheckCircle2 className="w-16 h-16 text-accent mx-auto animate-bounce" />
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
