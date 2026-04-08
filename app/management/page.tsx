"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Users, 
  MapPin, 
  Settings, 
  Calendar, 
  Coffee, 
  Play, 
  CheckCircle2, 
  Rocket, 
  Search, 
  PencilLine, 
  Briefcase,
  Zap,
  Target,
  Clock,
  LayoutGrid,
  BarChart3,
  Award,
  ShieldCheck,
  Building2
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

export default function ManagementPage() {
  const { openModal } = useModal();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 pt-0">
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            {/* Fallback pattern in case image is missing */}
            <div className="absolute inset-0 bg-[#002D62] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <Image 
              src="/management-hero.png" 
              alt="Professional Management" 
              fill 
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
            
            {/* Structural grid lines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="h-full w-[1px] bg-white absolute left-1/4" />
                <div className="h-full w-[1px] bg-white absolute left-2/4" />
                <div className="h-full w-[1px] bg-white absolute left-3/4" />
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-white">
            <div className="max-w-4xl">
              <motion.div
                initial="hidden"
                animate="visible"
                custom={0}
                variants={fadeIn}
                className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent px-5 py-2 rounded-full mb-8 backdrop-blur-md"
              >
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-black tracking-[0.2em] uppercase">Built for Reliability</span>
              </motion.div>
              
              <motion.h1
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeIn}
                className="text-4xl md:text-5xl font-black leading-[1.4] mb-8 tracking-tighter italic uppercase"
              >
                We Handle <br /> 
                <span className="text-accent underline decoration-8 underline-offset-10 italic">Everything.</span> <br />
                You Just Show Up.
              </motion.h1>
              
              <motion.p
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeIn}
                className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-2xl font-medium"
              >
                From planning to execution, Sprintz Events manages every detail — ensuring a seamless, stress-free event experience.
              </motion.p>
              
              <motion.div
                initial="hidden"
                animate="visible"
                custom={3}
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-[0_20px_50px_rgba(255,93,0,0.3)] h-16 px-12 text-xl font-black italic uppercase" onClick={openModal}>
                  Plan Your Event
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary h-16 px-12 text-xl font-black italic uppercase" onClick={openModal}>
                  Get a Quote
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. INTRO SECTION */}
        <section className="py-32 bg-white relative">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-subtle-grey rounded-full -z-10" />
                <h2 className="text-4xl md:text-5xl text-zinc-900 leading-tight font-black italic uppercase tracking-tighter mb-8">
                  The Power of <br />Single-Sourced <br /><span className="text-accent">Execution</span>
                </h2>
                <div className="w-20 h-2 bg-accent mb-8" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <p className="text-xl text-zinc-500 leading-relaxed font-medium">
                  Managing an event involves multiple moving parts — from sourcing venues to coordinating logistics and handling on-ground execution. 
                </p>
                <p className="text-xl text-zinc-700 leading-relaxed font-bold italic">
                  At Sprintz Events, we bring everything together, ensuring your event runs smoothly from start to finish. Stop managing 10+ vendors—we handle everything while you focus on the result.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. WHAT WE MANAGE (CORE SECTION) */}
        <section className="py-24 bg-subtle-grey">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block mb-4">Total Coverage</span>
              <h2 className="text-4xl md:text-5xl font-black text-primary italic tracking-tight uppercase leading-none">What We Manage</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Venue & Ground Sourcing",
                  desc: "We identify and secure the perfect venue based on your requirements, ensuring all logistical needs are met.",
                  icon: MapPin,
                  tag: "Sourcing"
                },
                {
                  title: "Equipment & Setup",
                  desc: "All necessary equipment, infrastructure, and event setup handled professionally — from AV to staging.",
                  icon: Settings,
                  tag: "Infrastructure"
                },
                {
                  title: "Officials & Staffing",
                  desc: "Experienced umpires, referees, and on-ground staff vetted for high-stakes corporate and sports operations.",
                  icon: Users,
                  tag: "Staffing"
                },
                {
                  title: "Planning & Scheduling",
                  desc: "Structured timelines, fixtures, and event planning managed through our internal digital playbook.",
                  icon: Calendar,
                  tag: "Strategy"
                },
                {
                  title: "Food & Logistics",
                  desc: "Catering coordination and logistics management for participants, ensuring high energy and high satisfaction.",
                  icon: Coffee,
                  tag: "Hospitality"
                },
                {
                  title: "On-Ground Execution",
                  desc: "Real-time coordination ensuring everything runs without disruptions. We handle the friction, you see the result.",
                  icon: Play,
                  tag: "Live Operations"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-zinc-100 group"
                >
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-16 h-16 bg-primary text-white rounded-[1.5rem] flex items-center justify-center group-hover:bg-accent group-hover:rotate-12 transition-all duration-500 shadow-xl">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">{item.tag}</span>
                  </div>
                  <h3 className="text-2xl font-black text-primary mb-6 uppercase italic tracking-tighter leading-tight">{item.title}</h3>
                  <p className="text-zinc-500 leading-relaxed font-medium mb-10">
                    {item.desc}
                  </p>
                  <div className="w-12 h-1 bg-zinc-100 group-hover:w-full group-hover:bg-accent transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW WE WORK (PROCESS SECTION) */}
        <section className="py-32 bg-primary text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-2xl">
                <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block mb-4 italic">Execution Blueprint</span>
                <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none mb-0">The Sprintz Operating Model</h2>
              </div>
              <div className="text-white/40 font-black italic uppercase text-5xl hidden lg:block select-none pointer-events-none">
                01-04
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { 
                  step: "01", 
                  title: "Requirement Understanding", 
                  desc: "We gather all key details — objectives, scale, and expectations to ensure absolute alignment.",
                  icon: Search
                },
                { 
                  step: "02", 
                  title: "Planning & Coordination", 
                  desc: "We design the event, source vendors, and align all resources through a single unified plan.",
                  icon: PencilLine
                },
                { 
                  step: "03", 
                  title: "Execution & Management", 
                  desc: "Our high-impact team manages every aspect on-ground with military precision and high energy.",
                  icon: Rocket 
                },
                { 
                  step: "04", 
                  title: "Completion & Wrap-Up", 
                  desc: "Smooth closure, asset returns, and detailed reporting with zero hassle for your organization.",
                  icon: CheckCircle2
                }
              ].map((process, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="text-4xl md:text-5xl font-black text-white/5 italic absolute -top-12 left-0 group-hover:text-accent/10 transition-colors">
                    {process.step}
                  </div>
                  <div className="mb-8 w-16 h-16 rounded-2xl border-2 border-white/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                    <process.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black italic uppercase tracking-tighter mb-4 text-white group-hover:text-accent transition-colors">{process.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed font-medium">{process.desc}</p>
                  
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-8 -right-6 w-12 h-[2px] bg-gradient-to-r from-white/20 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. WHY CHOOSE SPRINTZ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="aspect-square rounded-[4rem] overflow-hidden relative shadow-2xl">
                  <Image src="/corporate-hero.png" alt="Excellence" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
                </div>
                {/* Achievement Badge */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full flex flex-col items-center justify-center text-white p-6 text-center shadow-2xl border-8 border-white"
                >
                  <Award className="w-10 h-10 mb-2" />
                  <span className="text-[10px] font-black uppercase tracking-tight">Zero-Vendor Headache</span>
                </motion.div>
              </div>

              <div>
                <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block mb-4">Elite Outsourcing</span>
                <h2 className="text-4xl md:text-5xl font-black text-primary italic uppercase tracking-tighter leading-[0.85] mb-12">
                  Why Leading <br />Companies <br /><span className="text-accent underline decoration-8 decoration-accent/30">Choose Us</span>
                </h2>
                
                <div className="space-y-8">
                  {[
                    "Single point of contact (Stop managing 10+ vendors)",
                    "End-to-End ownership from venue to wrap-up",
                    "Time-efficient execution with a dedicated project head",
                    "Professional on-ground management with zero client friction",
                    "Highly scalable models for 50 to 5000+ participants"
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-6 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-subtle-grey flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <span className="text-lg font-bold text-zinc-700 italic uppercase tracking-tighter">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. EXPERIENCE SECTION (Reuse Consistency) */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-6">
            <div className="overflow-hidden mb-20">
              <h2 className="text-2xl md:text-5xl font-black italic uppercase tracking-[0.3em] text-center text-white/30 whitespace-nowrap py-4">
                 Track Record • Track Record • Track Record • Track Record
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
              {[
                { num: "50+", label: "Events Executed", icon: Rocket },
                { num: "1000+", label: "Participants Managed", icon: Users },
                { num: "25+", label: "Corporate Clients", icon: Building2 }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-sm group hover:bg-white transition-all duration-500"
                >
                  <div className="text-accent group-hover:text-primary mb-8 transition-colors">
                    <stat.icon size={48} className="mx-auto" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-accent mb-4 italic tracking-tighter group-hover:text-primary transition-colors">
                    {stat.num}
                  </div>
                  <div className="text-xs font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-primary/40 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. VALUE PROPOSITION BLOCK (VERY IMPORTANT) */}
        <section className="py-32 bg-white relative">
           <div className="container mx-auto px-6">
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="max-w-6xl mx-auto rounded-[5rem] bg-accent/5 border border-accent/10 p-16 md:p-32 text-center relative overflow-hidden"
              >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-5 blur-[100px] -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                      <Zap className="w-16 h-16 text-accent mx-auto mb-12 animate-pulse" />
                      <h2 className="text-4xl md:text-5xl font-black text-primary italic uppercase tracking-tighter leading-tight mb-12">
                         With Sprintz Events, you don’t just get event organizers — 
                         <span className="text-accent italic"> you get a dedicated team </span> 
                         that ensures every detail is planned, managed, and executed with precision.
                      </h2>
                      <div className="flex justify-center gap-4">
                         <div className="w-3 h-3 rounded-full bg-accent" />
                         <div className="w-3 h-3 rounded-full bg-primary" />
                         <div className="w-3 h-3 rounded-full bg-accent" />
                      </div>
                  </div>
              </motion.div>
           </div>
        </section>

        {/* 8. CTA SECTION (STRONG CLOSE) */}
        <section className="py-24 bg-white pb-32">
          <div className="container mx-auto px-6">
            <motion.div 
               whileHover={{ scale: 1.01 }}
               className="bg-accent rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center text-white shadow-[0_40px_100px_rgba(255,93,0,0.3)]"
            >
               <div className="absolute inset-0 bg-primary/20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 hover:opacity-40 transition-opacity pointer-events-none" />
               <div className="relative z-10 max-w-4xl mx-auto">
                 <h2 className="text-5xl md:text-5xl font-black mb-10 italic uppercase tracking-tighter leading-[0.9]">Focus on the Experience. <br />We’ll Handle the Rest.</h2>
                 <p className="text-xl md:text-2xl text-white/80 mb-12 font-medium max-w-2xl mx-auto italic">
                   Tell us what you need — we’ll take care of everything else. Sit back and watch your event unfold perfectly.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button size="lg" className="bg-white text-accent hover:bg-zinc-100 h-20 px-16 rounded-3xl text-3xl font-black italic shadow-2xl uppercase" onClick={openModal}>
                      Get a Quote
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
