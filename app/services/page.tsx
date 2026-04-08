"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Users, 
  Trophy, 
  Settings, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Calendar,
  Layers,
  ShoppingBag,
  UserPlus,
  Play,
  Briefcase,
  Zap
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
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export default function ServicesPage() {
  const { openModal } = useModal();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 pt-0">
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
             {/* Abstract energy lines */}
             <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-1/2 h-[1px] bg-accent rotate-[-15deg]" />
                <div className="absolute top-2/4 right-0 w-1/3 h-[2px] bg-accent rotate-[-15deg]" />
             </div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-white text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeIn}
              className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
            >
              <Zap className="w-4 h-4 fill-accent" />
              <span className="text-sm font-bold tracking-wider uppercase italic">Excellence in Execution</span>
            </motion.div>
            
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight italic"
            >
              End-to-End Event Solutions, <br />
              <span className="text-accent">Designed for Impact</span>
            </motion.h1>
            
            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeIn}
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              From corporate engagements to high-energy sports tournaments, we plan and execute events that deliver results.
            </motion.p>
          </div>
        </section>

        {/* 2. INTRO SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-medium"
            >
              At <span className="text-primary font-bold">Sprintz Events</span>, we offer a comprehensive range of event solutions tailored for modern organizations. Whether it’s engaging your team, hosting a tournament, or managing large-scale events, we handle everything from planning to execution.
            </motion.p>
          </div>
        </section>

        {/* 3. CORE SERVICES (MAIN SECTION) */}
        <section className="py-24 bg-subtle-grey">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* CORPORATE EVENTS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[3rem] p-12 shadow-xl border border-zinc-100 flex flex-col group transition-all duration-500"
              >
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <Briefcase className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-6 italic uppercase tracking-tighter">Corporate Events</h3>
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    "Team building activities",
                    "Offsites & retreats",
                    "Annual day & employee engagement"
                  ].map((item, id) => (
                    <li key={id} className="flex items-center gap-3 text-zinc-600">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-500 mb-10 leading-relaxed">
                  Create meaningful experiences that strengthen teams and boost engagement.
                </p>
                <Link href="/corporate-events" className="w-full">
                  <Button variant="primary" className="w-full h-14 text-lg font-bold">
                    Explore Corporate Events
                  </Button>
                </Link>
              </motion.div>

              {/* SPORTS EVENTS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[3rem] p-12 shadow-xl border border-accent/20 flex flex-col group transition-all duration-500 relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-accent/10 transition-colors" />
                
                <div className="w-20 h-20 bg-orange-50 text-accent rounded-3xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                  <Trophy className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-6 italic uppercase tracking-tighter">Sports Events</h3>
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    "Cricket tournaments",
                    "Multi-sport events",
                    "Corporate leagues"
                  ].map((item, id) => (
                    <li key={id} className="flex items-center gap-3 text-zinc-600">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-500 mb-10 leading-relaxed">
                  High-energy sporting experiences designed for competition, fun, and team bonding.
                </p>
                <Link href="/sports-events" className="w-full">
                  <Button variant="primary" className="w-full h-14 text-lg font-bold bg-accent hover:bg-accent/90">
                    Explore Sports Events
                  </Button>
                </Link>
              </motion.div>

              {/* END-TO-END MANAGEMENT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[3rem] p-12 shadow-xl border border-zinc-100 flex flex-col group transition-all duration-500"
              >
                <div className="w-20 h-20 bg-zinc-50 text-zinc-600 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500">
                  <Settings className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-6 italic uppercase tracking-tighter leading-none">End-to-End <br />Management</h3>
                <ul className="grid grid-cols-1 gap-4 mb-8 flex-1">
                  {[
                    "Venue & ground booking",
                    "Equipment & setup",
                    "Umpires / referees",
                    "Food & logistics",
                    "On-ground execution"
                  ].map((item, id) => (
                    <li key={id} className="flex items-center gap-3 text-sm text-zinc-600">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-500 mb-10 leading-relaxed">
                  We handle every detail so you can focus on the experience.
                </p>
                <Link href="/management" className="w-full">
                  <Button variant="primary" className="w-full h-14 text-lg font-bold border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white transition-all">
                    Explore Management Services
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. DETAILED CAPABILITIES (GRID SECTION) */}
        <section className="py-24 bg-white overflow-hidden relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
               <span className="text-accent font-black tracking-[0.2em] uppercase text-sm block mb-4 italic">Our Expertise</span>
               <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 italic uppercase tracking-tighter">Detailed Capabilities</h2>
               <div className="w-24 h-2 bg-accent mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { title: "Venue Sourcing", icon: MapPin },
                { title: "Event Planning", icon: Rocket },
                { title: "Logistics Management", icon: Layers },
                { title: "Equipment Setup", icon: Settings },
                { title: "Match Management", icon: Trophy },
                { title: "Catering Coordination", icon: ShoppingBag },
                { title: "Staffing & Officials", icon: UserPlus },
                { title: "On-ground Execution", icon: Play }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center p-8 rounded-3xl bg-subtle-grey hover:bg-white hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-primary text-lg leading-snug">{item.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. HOW WE ADD VALUE */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             {[...Array(20)].map((_, i) => (
               <div key={i} className="absolute bg-white w-1 h-32 rotate-45" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
             ))}
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Seamless Execution", desc: "We focus on the details so you don't have to." },
                { title: "Time-efficient Planning", desc: "Years of experience mean faster turnaround." },
                { title: "Customizable Solutions", desc: "Events tailored specifically to your needs." },
                { title: "Scalable for Any Team", desc: "From small groups to massive tournaments." }
              ].map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-2 bg-accent rounded-full" />
                  <h4 className="text-2xl font-bold italic">{val.title}</h4>
                  <p className="text-white/60 leading-relaxed text-sm">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA SECTION (IMPORTANT) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
               whileHover={{ scale: 1.01 }}
               className="bg-accent rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center text-white"
            >
               <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
               <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] pointer-events-none" />

               <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter">Let’s Plan Your <br />Next Event</h2>
                 <p className="text-xl text-white/80 mb-12">
                   Tell us your requirement and we’ll take care of the rest.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                   <Button size="lg" className="bg-white text-accent hover:bg-zinc-100 h-16 px-10 rounded-2xl text-xl font-bold italic shadow-2xl" onClick={openModal}>
                     Get a Quote
                   </Button>
                   <Link href="/contact" className="w-full sm:w-auto">
                     <Button size="lg" className="bg-primary hover:bg-primary/90 h-16 px-10 rounded-2xl text-xl font-bold italic shadow-2xl w-full">
                       Contact Us
                     </Button>
                   </Link>
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
