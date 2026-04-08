"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Users, 
  Trophy, 
  Target, 
  ShieldCheck, 
  Rocket, 
  Search, 
  Award, 
  Heart, 
  Layout, 
  Briefcase,
  TrendingUp,
  MapPin,
  Clock,
  Sparkles,
  Send,
  Mail,
  Globe
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

export default function AboutPage() {
  const { openModal } = useModal();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 pt-0">
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary pt-20">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image 
              src="/corporate-hero.png" 
              alt="About Us" 
              fill 
              className="object-cover grayscale"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-white">
            <div className="max-w-4xl">
              <motion.div
                initial="hidden"
                animate="visible"
                custom={0}
                variants={fadeIn}
                className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent px-4 py-1.5 rounded-full mb-8 backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-black tracking-[0.2em] uppercase text-white">The People Behind the Energy</span>
              </motion.div>
              
              <motion.h1
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeIn}
                className="text-4xl md:text-5xl font-black leading-[0.9] mb-8 tracking-tighter italic uppercase"
              >
                Built for <br />
                <span className="text-accent underline decoration-8 underline-offset-10">Seamless Events</span> <br />
                & Powerful Experiences
              </motion.h1>
              
              <motion.p
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeIn}
                className="text-xl md:text-2xl text-white/70 max-w-2xl font-medium italic"
              >
                At Sprintz Events, we specialize in creating high-quality corporate and sports experiences that are structured, engaging, and professionally executed.
              </motion.p>
            </div>
          </div>
        </section>

        {/* 2. WHO WE ARE */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
              >
                  <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block mb-4 italic">Our Story</span>
                  <h2 className="text-4xl md:text-5xl font-black text-primary italic uppercase tracking-tighter mb-8 leading-none">Who We Are</h2>
                  <div className="w-20 h-2 bg-accent mb-8" />
                  <p className="text-xl text-zinc-600 leading-relaxed font-medium mb-8">
                     Sprintz Events is an end-to-end event management company focused on delivering seamless corporate and sports events. 
                  </p>
                  <p className="text-xl text-zinc-900 leading-relaxed font-bold italic border-l-4 border-accent pl-8 py-2 bg-accent/5 rounded-r-2xl">
                     From planning to execution, we handle every detail so our clients can focus on the experience.
                  </p>
              </motion.div>
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="relative"
              >
                 <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative">
                    <Image src="/sports-hero.png" alt="Team Spirit" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                 </div>
                 <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-accent p-8 rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-4 border-white animate-pulse">
                     <span className="text-4xl font-black italic">PRO</span>
                     <span className="text-[10px] font-bold uppercase tracking-widest">Team</span>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. OUR APPROACH */}
        <section className="py-24 bg-subtle-grey">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block mb-4">Methodology</span>
              <h2 className="text-5xl font-black text-primary italic tracking-tight uppercase leading-none">Our Approach</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Structured Planning", icon: Layout, desc: "Nothing is left to chance. We map every single logistical detail." },
                { title: "Professional Execution", icon: Award, desc: "On-ground management that is sharp, punctual, and reliable." },
                { title: "Attention to Detail", icon: Search, desc: "From branding to ball-by-ball management, we see the small things." },
                { title: "Client-First Approach", icon: Heart, desc: "Your goals are our benchmarks. We execute until you're satisfied." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-12 rounded-[3.5rem] bg-white border border-zinc-100 group transition-all duration-500 shadow-sm hover:shadow-2xl"
                >
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:rotate-12 transition-all duration-500">
                    <item.icon size={32} />
                  </div>
                  <h4 className="text-xl font-black text-primary italic uppercase tracking-tighter mb-4">{item.title}</h4>
                  <p className="text-sm text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. EXPERIENCE SECTION */}
        <section className="py-32 bg-white relative overflow-hidden">
           {/* Abstract energy shapes */}
           <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/5 skew-x-12 -translate-x-1/2" />
           
           <div className="container mx-auto px-6 max-w-5xl relative z-10">
              <div className="flex flex-col md:flex-row gap-20 items-center">
                 <div className="md:w-1/2">
                    <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block mb-4 italic">The Track Record</span>
                    <h2 className="text-4xl md:text-5xl font-black text-primary italic uppercase tracking-tighter leading-[0.85] mb-12">
                       Our <br /><span className="text-accent underline decoration-8 decoration-accent/30">Experience</span>
                    </h2>
                    <div className="space-y-6 text-xl text-zinc-600 font-medium leading-relaxed italic">
                       <p>
                          With hands-on experience in organizing corporate sports tournaments, team-building activities, and large-scale events, Sprintz Events brings both operational expertise and on-ground execution capability.
                       </p>
                       <p className="text-zinc-900 font-black tracking-tight">
                          We understand the challenges of managing participants, logistics, and timelines — and ensure everything runs smoothly from start to finish.
                       </p>
                    </div>
                 </div>
                 <div className="md:w-1/2 relative">
                    <div className="p-8 md:p-16 rounded-[4rem] bg-primary text-white shadow-2xl relative overflow-hidden">
                       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                       <div className="relative z-10">
                          <Rocket className="w-12 h-12 text-accent mb-8 animate-bounce" />
                          <h4 className="text-3xl font-black italic uppercase tracking-tighter mb-6">Built for Scaling</h4>
                          <p className="text-white/60 font-medium leading-relaxed mb-8">
                             Whether you have 50 employees or 5,000 participants, our systems are built to scale without losing the personal touch.
                          </p>
                          <div className="flex gap-4">
                              <div className="w-3 h-3 rounded-full bg-accent" />
                              <div className="w-3 h-3 rounded-full bg-white/20" />
                              <div className="w-3 h-3 rounded-full bg-white/20" />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 5. NUMBERS / CREDIBILITY */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-6">
            <div className="overflow-hidden mb-24">
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-[0.5em] text-center text-white/5 whitespace-nowrap py-4">
                 Proven Impact • Proven Impact • Proven Impact
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10 max-w-7xl mx-auto">
              {[
                { num: "50+", label: "Events Managed", icon: MapPin },
                { num: "1000+", label: "Participants Engaged", icon: Users },
                { num: "25+", label: "Corporate Clients", icon: Briefcase }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-12 border border-white/10 rounded-[4rem] group hover:bg-white transition-all duration-500"
                >
                  <div className="text-accent group-hover:text-primary mb-8 transition-colors">
                     <stat.icon size={48} className="mx-auto" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-accent mb-4 italic tracking-tighter group-hover:text-primary transition-colors">
                    {stat.num}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-primary/40 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHAT WE DO */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center max-w-6xl mx-auto">
               <div className="lg:w-1/2">
                  <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block mb-4">Portfolio</span>
                  <h2 className="text-5xl font-black text-primary italic uppercase tracking-tighter mb-12">Core Operations</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {[
                        { title: "Corporate Events", icon: Briefcase },
                        { title: "Sports Events", icon: Trophy },
                        { title: "Team Building", icon: Users },
                        { title: "Tournament Management", icon: ShieldCheck },
                        { title: "End-to-End Execution", icon: Rocket }
                     ].map((item, id) => (
                        <div key={id} className="flex items-center gap-4 p-6 rounded-3xl bg-subtle-grey border border-zinc-50 hover:border-accent/40 transition-all cursor-default">
                           <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent">
                              <item.icon size={20} />
                           </div>
                           <span className="font-bold text-primary italic uppercase tracking-tighter text-sm">{item.title}</span>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="lg:w-1/2 relative bg-subtle-grey p-16 rounded-[4rem]">
                  <h3 className="text-3xl font-black text-primary italic uppercase tracking-tighter mb-8 leading-tight">Why Sprintz Events?</h3>
                  <p className="text-lg text-zinc-500 font-medium leading-relaxed italic mb-8 border-l-4 border-primary pl-8">
                     What sets us apart is our ability to combine structured planning with seamless execution. 
                  </p>
                  <p className="text-lg text-zinc-700 font-bold italic">
                     We don’t just organize events — we create well-managed experiences that reflect professionalism and precision. We take ownership of every single attendee's experience.
                  </p>
               </div>
            </div>
          </div>
        </section>

        {/* 8. TEAM SECTION (Optional) */}
        <section className="py-24 bg-white relative">
           <div className="container mx-auto px-6">
              <div className="text-center mb-20">
                 <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block mb-4">The Leadership</span>
                 <h2 className="text-5xl font-black text-primary italic uppercase tracking-tighter">Our Team</h2>
              </div>
              
              {/* Founder Profile - Center Highlighted */}
              <div className="max-w-2xl mx-auto">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="p-10 md:p-16 rounded-[4rem] bg-white border border-zinc-100 shadow-2xl relative group overflow-hidden"
                 >
                    <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                       <div className="w-48 h-48 rounded-[3rem] overflow-hidden relative shrink-0 shadow-xl border-4 border-white">
                          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-white">
                             <Users size={64} className="opacity-20" />
                          </div>
                          {/* Placeholder image approach */}
                          <div className="absolute inset-0 bg-zinc-200" />
                       </div>
                       <div className="flex-1 text-center md:text-left">
                          <h4 className="text-3xl font-black text-primary italic uppercase tracking-tighter mb-2">Abhishek S</h4>
                          <span className="text-accent font-black italic uppercase tracking-widest text-xs block mb-6">Founder & Head of Operations</span>
                          <p className="text-zinc-500 font-medium leading-relaxed mb-8">
                             Passionate about high-energy sports and high-stakes corporate execution. Leading Sprintz Events with a focus on precision and operational excellence.
                          </p>
                          <div className="flex gap-4 justify-center md:justify-start">
                             <Link href="#" className="w-10 h-10 rounded-full bg-subtle-grey flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"><Mail size={18} /></Link>
                             <Link href="#" className="w-10 h-10 rounded-full bg-subtle-grey flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"><Globe size={18} /></Link>
                          </div>
                       </div>
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* 9. CTA SECTION */}
        <section className="py-24 bg-white pb-32">
          <div className="container mx-auto px-6">
            <motion.div 
               whileHover={{ scale: 1.01 }}
               className="bg-accent rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center text-white shadow-[0_40px_100px_rgba(255,93,0,0.3)]"
            >
               <div className="absolute inset-0 bg-primary/20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 hover:opacity-40 transition-opacity pointer-events-none" />
               <div className="relative z-10 max-w-4xl mx-auto">
                 <h2 className="text-4xl md:text-5xl font-black mb-10 italic uppercase tracking-tighter leading-[0.9]">Let's Work Together</h2>
                 <p className="text-xl md:text-2xl text-white/80 mb-12 font-medium max-w-2xl mx-auto italic">
                    Looking to plan your next event? We’re here to help you turn vision into flawless execution.
                 </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button size="lg" className="bg-white text-accent hover:bg-zinc-100 h-20 px-16 rounded-3xl text-3xl font-black italic shadow-2xl uppercase" onClick={openModal}>
                      Contact Us
                    </Button>
                    <Button size="lg" className="bg-primary hover:bg-primary/95 h-20 px-16 rounded-3xl text-3xl font-black italic shadow-2xl uppercase" onClick={openModal}>
                      Plan Your Event
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
