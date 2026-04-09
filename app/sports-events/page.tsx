"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Activity, 
  Users, 
  Target, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Calendar,
  Clock,
  Flag,
  Zap,
  Award,
  Play,
  Settings,
  Coffee,
  BarChart3,
  Star,
  Camera,
  ClipboardCheck,
  LayoutGrid
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
      ease: "easeOut",
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function SportsEventsPage() {
  const { openModal } = useModal();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 pt-0">
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 md:pt-32">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/sports-hero.png" 
              alt="High-Energy Sports Events" 
              fill 
              className="object-cover scale-105"
              priority
            />
            {/* Dynamic Overlays */}
            <div className="absolute inset-0 bg-[#002D62]/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
            
            {/* Animated Energy Lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
              <motion.div 
                animate={{ 
                  x: [-1000, 1000], 
                  opacity: [0, 1, 0] 
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 left-0 w-[500px] h-[2px] bg-accent rotate-[20deg]"
              />
              <motion.div 
                animate={{ 
                  x: [1000, -1000], 
                  opacity: [0, 1, 0] 
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                className="absolute top-3/4 left-0 w-[500px] h-[2px] bg-accent rotate-[-20deg]"
              />
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-white">
            <div className="max-w-4xl">
              <motion.div
                initial="hidden"
                animate="visible"
                custom={0}
                variants={fadeIn}
                className="inline-flex items-center gap-2 bg-accent/30 border border-accent/50 text-accent px-5 py-2 rounded-full mb-8 backdrop-blur-md"
              >
                <Zap className="w-5 h-5 fill-accent" />
                <span className="text-xs font-black tracking-[0.2em] uppercase">High-Energy Experiences</span>
              </motion.div>
              
              <motion.h1
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeIn}
                className="text-4xl md:text-5xl font-black leading-[0.9] mb-8 tracking-tighter italic uppercase"
              >
                High-Energy <br />
                <span className="text-accent underline decoration-8 underline-offset-10">Sports Events</span>
              </motion.h1>
              
              <motion.p
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeIn}
                className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-2xl font-medium"
              >
                From cricket tournaments to multi-sport competitions, Sprintz Events delivers structured, engaging, and seamless sporting experiences for organizations.
              </motion.p>
              
              <motion.div
                initial="hidden"
                animate="visible"
                custom={3}
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-[0_20px_50px_rgba(255,93,0,0.3)] h-16 px-12 text-xl font-black italic uppercase" onClick={openModal}>
                  Organize a Tournament
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary h-16 px-12 text-xl font-black italic uppercase" onClick={openModal}>
                  Get a Quote
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold">Explore Arena</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
          </motion.div>
        </section>

        {/* 2. INTRO SECTION */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Background watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-black/[0.02] uppercase italic pointer-events-none select-none tracking-tighter">
            Arena
          </div>
          
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-5xl text-zinc-800 leading-tight font-black italic uppercase tracking-tighter mb-12">
                We specialize in planning and executing sports events that combine <span className="text-accent underline decoration-4 underline-offset-4">competition, fun, and seamless management</span>.
              </h2>
              <p className="text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto font-medium">
                Whether it’s a high-stakes cricket league or a vibrant multi-sport day, we ensure every detail — from the first whistle to the final trophy — is handled with professional precision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. TYPES OF SPORTS EVENTS */}
        <section className="py-24 bg-subtle-grey">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block mb-4">The Playbook</span>
              <h2 className="text-4xl md:text-5xl font-black text-primary italic tracking-tight uppercase leading-none">Sports Portfolios</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Cricket Tournaments",
                  icon: Target,
                  details: ["Corporate Leagues", "Knockout Tournaments", "Box Cricket Formats"],
                  color: "bg-blue-600 text-white",
                  img: "/cricket.png"
                },
                {
                  title: "Multi-Sport Events",
                  icon: LayoutGrid,
                  details: ["Football Leagues", "Badminton Opens", "Indoor Game Ops"],
                  color: "bg-orange-500 text-white",
                  img: "/sports-day.png"
                },
                {
                  title: "Corporate Sports Days",
                  icon: Trophy,
                  details: ["Mixed Formats", "Team Competitions", "Leaderboards"],
                  color: "bg-zinc-900 text-white",
                  img: "/offsite.png"
                },
                {
                  title: "Custom Sports Events",
                  icon: Activity,
                  details: ["Tailored Formats", "Goal-Based Planning", "Inclusive Games"],
                  color: "bg-primary text-white",
                  img: "/hero.png"
                }
              ].map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -15 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-zinc-100 group flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image src={type.img} alt={type.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                    <div className={`absolute top-6 right-6 w-12 h-12 ${type.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <type.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-black text-primary mb-6 uppercase italic tracking-tighter leading-tight">{type.title}</h3>
                    <ul className="space-y-4 mb-8 flex-1">
                      {type.details.map((item, id) => (
                        <li key={id} className="flex items-center gap-3 text-sm font-bold text-zinc-500 italic">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-zinc-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all font-black italic uppercase text-xs tracking-widest">
                      View Format
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. EVENT FORMATS */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-accent opacity-5 skew-x-[-20deg] translate-x-1/2" />
           
           <div className="container mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div>
                    <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block mb-4 italic">Flexibility</span>
                    <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-[0.9] mb-8">
                       Battle-Ready <br />Formats
                    </h2>
                    <p className="text-white/60 text-lg mb-12 font-medium">
                       We understand that every organization has different goals. Our formats are designed to accommodate teams of all sizes and skill levels.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                       {[
                         { title: "Knockout", desc: "High stakes, one winner" },
                         { title: "League", desc: "Maximum engagement" },
                         { title: "One-Day", desc: "Quick & intensive" },
                         { title: "Multi-Day", desc: "Complete seasonal feel" }
                       ].map((format, idx) => (
                         <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                            <h4 className="text-accent font-black italic uppercase mb-2">{format.title}</h4>
                            <p className="text-xs text-white/40 font-bold uppercase">{format.desc}</p>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="relative">
                    <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl relative">
                       <Image src="/sports-hero.png" alt="Tournament Chart" fill className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
                       <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
                       <div className="absolute inset-0 flex items-center justify-center p-12">
                          <div className="w-full h-full border-2 border-white/20 rounded-2xl flex flex-col items-center justify-center text-center">
                             <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-6 shadow-2xl">
                                <Flag className="w-10 h-10 text-white" />
                             </div>
                             <h3 className="text-3xl font-black italic uppercase leading-none mb-4">Professional <br />Fixtures</h3>
                             <p className="text-sm font-bold opacity-70 italic tracking-widest uppercase">Software Managed Schedules</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 5. WHAT WE HANDLE (CORE STRENGTH) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block mb-4">Core Strength</span>
              <h2 className="text-5xl font-black text-primary italic uppercase tracking-tighter leading-none">
                End-to-End <span className="text-accent">Execution</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Ground Booking", icon: MapPin },
                { title: "Umpires & Referees", icon: Users },
                { title: "Equipment & Kits", icon: Settings },
                { title: "Fixtures & Scheduling", icon: Calendar },
                { title: "Match Management", icon: ClipboardCheck },
                { title: "Scoring & Stats", icon: BarChart3 },
                { title: "Refreshments", icon: Coffee },
                { title: "Coordination", icon: Play }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col p-8 rounded-[2rem] bg-subtle-grey border border-zinc-50 group transition-all"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-black text-primary uppercase tracking-tighter italic leading-none">{item.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. MATCH EXPERIENCE */}
        <section className="py-24 bg-zinc-900 border-y border-white/5">
           <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                 <div className="lg:w-1/2 order-2 lg:order-1">
                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-4 pt-12">
                          <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
                             <Image src="/cricket.png" alt="Experience" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                          </div>
                          <div className="bg-accent p-8 rounded-3xl text-white">
                             <h4 className="text-2xl font-black italic uppercase leading-none mb-2">Live Scores</h4>
                             <p className="text-xs font-bold opacity-80 uppercase tracking-widest">Digital scorekeeping</p>
                          </div>
                       </div>
                       <div className="space-y-4">
                          <div className="bg-primary p-8 rounded-3xl text-white">
                             <CheckCircle2 className="w-8 h-8 text-accent mb-4" />
                             <h4 className="text-xl font-bold italic uppercase tracking-tighter">Pro Setup</h4>
                          </div>
                          <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
                             <Image src="/sports-day.png" alt="Experience" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="lg:w-1/2 order-1 lg:order-2">
                    <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block mb-4 italic">The Atmosphere</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-[0.85] mb-8">
                       The Complete <br /><span className="text-accent">Tournament Experience</span>
                    </h2>
                    <p className="text-white/50 text-xl font-medium mb-12">
                       We don't just organize matches — we create an arena. From professional commentary and digital scoring to structured gameplay and awards, we bring the pro-sports feel to life.
                    </p>
                    <ul className="space-y-6">
                       {[
                         "Professional match broadcasting (Announcements)",
                         "Real-time digital scoring & leaderboards",
                         "Expert officiating with qualified umpires",
                         "Structured opening & closing ceremonies"
                       ].map((item, id) => (
                         <li key={id} className="flex items-center gap-4 text-white text-sm font-bold italic uppercase tracking-wide">
                            <div className="w-2 h-2 bg-accent rotate-45" />
                            {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. OUR TRACK RECORD */}
        <section className="py-24 bg-primary text-white overflow-hidden relative border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { num: "50+", label: "Sports Events Executed", icon: Trophy },
                { num: "1000+", label: "Players Engaged", icon: Users },
                { num: "25+", label: "Tournament Formats", icon: Target }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative p-10 bg-white/5 rounded-[3rem] border border-white/10"
                >
                  <stat.icon className="w-12 h-12 text-accent mx-auto mb-6 opacity-40" />
                  <div className="text-4xl md:text-5xl font-black text-accent mb-4 italic tracking-tighter">
                    {stat.num}
                  </div>
                  <div className="text-xs font-black uppercase tracking-[0.3em] text-white/40">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. GALLERY PREVIEW */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
             <div className="flex items-end justify-between mb-16">
                <div>
                   <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block mb-4 italic">Action Shots</span>
                   <h2 className="text-5xl font-black text-primary italic uppercase tracking-tighter leading-none text-left">The Arena Gallery</h2>
                </div>
                <Button variant="outline" className="hidden md:flex border-zinc-200 font-black italic uppercase gap-2 px-8">
                   View All Moments <Camera className="w-4 h-4" />
                </Button>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {[
                  { span: "md:col-span-2 md:row-span-2 aspect-square", img: "/sports-hero.png" },
                  { span: "aspect-square", img: "/cricket.png" },
                  { span: "aspect-square", img: "/sports-day.png" },
                  { span: "md:col-span-2 aspect-video md:aspect-auto", img: "/offsite.png" },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className={`${item.span} relative rounded-[2rem] overflow-hidden group shadow-xl min-h-[200px]`}
                  >
                     <Image src={item.img} alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex items-end">
                        <div className="text-white">
                           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">Live Moment</p>
                           <h4 className="font-bold italic uppercase tracking-tighter">Match Intensity</h4>
                        </div>
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 9. CTA SECTION */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
               whileHover={{ scale: 1.01 }}
               className="bg-accent rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center text-white"
            >
               <div className="absolute inset-0 bg-primary/20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
               <div className="relative z-10 max-w-4xl mx-auto">
                 <h2 className="text-5xl font-black mb-10 italic uppercase tracking-tighter leading-[0.9]">Ready to Host Your Next <br />Sports Event?</h2>
                 <p className="text-xl text-white/80 mb-12 font-medium max-w-2xl mx-auto">
                   Let us take care of everything — from ground booking and staffing to digital scoring and catering. Your team plays, we manage.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button size="lg" className="bg-white text-accent hover:bg-zinc-100 h-16 px-12 rounded-2xl text-2xl font-black italic shadow-2xl uppercase" onClick={openModal}>
                      Plan a Sports Event
                    </Button>
                    <Button size="lg" className="bg-primary hover:bg-primary/95 h-16 px-12 rounded-2xl text-2xl font-black italic shadow-2xl uppercase" onClick={openModal}>
                      Get a Quote
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
