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
  Zap,
  Target,
  Smile,
  BarChart3,
  Coffee,
  Globe,
  Star,
  Clock
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

export default function CorporateEventsPage() {
  const { openModal } = useModal();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 pt-0">
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 md:pt-32">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/corporate-hero.png" 
              alt="Corporate Excellence" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#002D62]/90 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
             
             {/* Abstract energy lines */}
             <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-1/3 right-0 w-2/3 h-[1px] bg-accent rotate-[-10deg]" />
                <div className="absolute top-2/3 right-0 w-1/2 h-[1px] bg-accent rotate-[-10deg]" />
             </div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-white">
            <div className="max-w-4xl">
              <motion.div
                initial="hidden"
                animate="visible"
                custom={0}
                variants={fadeIn}
                className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent px-4 py-2 rounded-full mb-8 backdrop-blur-md"
              >
                <Briefcase className="w-4 h-4" />
                <span className="text-sm font-bold tracking-wider uppercase">Strategic Corporate Solutions</span>
              </motion.div>
              
              <motion.h1
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold leading-[1.1] mb-8 tracking-tight italic"
              >
                Corporate Events That <br />
                <span className="text-accent underline decoration-4 underline-offset-8">Engage, Energize & Inspire</span>
              </motion.h1>
              
              <motion.p
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeIn}
                className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-2xl"
              >
                From team building activities to large-scale corporate gatherings, Sprintz Events creates experiences that strengthen teams and drive engagement.
              </motion.p>
              
              <motion.div
                initial="hidden"
                animate="visible"
                custom={3}
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-2xl h-16 px-10 text-lg" onClick={openModal}>
                  Plan Your Event
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary h-16 px-10 text-lg" onClick={openModal}>
                  Get a Quote
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. INTRO SECTION */}
        <section className="py-24 bg-white border-b border-zinc-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <div className="absolute -left-12 top-0 text-accent opacity-20 hidden md:block italic text-9xl font-serif">“</div>
              <p className="text-2xl md:text-3xl text-zinc-700 leading-relaxed font-medium italic">
                We design and execute corporate events that go beyond just activities. Our focus is on creating <span className="text-primary font-bold">meaningful experiences</span> that improve team collaboration, boost morale, and leave a lasting impact on your organization.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. TYPES OF CORPORATE EVENTS */}
        <section className="py-24 bg-subtle-grey">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-accent font-black tracking-[0.2em] uppercase text-sm block mb-4">What We Offer</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary italic tracking-tight uppercase">Corporate Event Portfolios</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Team Building Activities",
                  icon: Layers,
                  list: ["Outdoor & indoor games", "Fun challenges", "Interactive group experiences"],
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  title: "Offsites & Retreats",
                  icon: Globe,
                  list: ["1-day & multi-day offsites", "Resort-based experiences", "Activity-driven engagement"],
                  color: "bg-orange-50 text-accent"
                },
                {
                  title: "Employee Engagement",
                  icon: Users,
                  list: ["Annual day events", "Sports days", "Cultural & fun events"],
                  color: "bg-primary text-white"
                },
                {
                  title: "Corporate Sports Days",
                  icon: Trophy,
                  list: ["Multi-sport setups", "Structured competitions", "Leaderboards & awards"],
                  color: "bg-zinc-900 text-white"
                }
              ].map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-zinc-100 group h-full flex flex-col"
                >
                  <div className={`w-16 h-16 ${type.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <type.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-6 leading-tight uppercase tracking-tighter">{type.title}</h3>
                  <ul className="space-y-4 mb-8 flex-1">
                    {type.list.map((item, id) => (
                      <li key={id} className="flex items-center gap-3 text-sm text-zinc-500">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full border-zinc-200 group-hover:border-accent group-hover:text-accent transition-colors italic">
                    Learn More
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WHY CORPORATE EVENTS MATTER */}
        <section className="py-24 bg-white overflow-hidden relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2">
                <span className="text-accent font-black tracking-[0.2em] uppercase text-sm block mb-4 italic">Strategic Value</span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight italic uppercase tracking-tighter">
                  Why Corporate <br />Events Matter
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Improves Team Collaboration", desc: "Break down silos and foster real connection.", icon: Target },
                    { title: "Boosts Employee Morale", desc: "Recognize hard work and re-energize your workforce.", icon: Smile },
                    { title: "Encourages Healthy Competition", desc: "Drive performance through fun and gaming.", icon: BarChart3 },
                    { title: "Enhances Company Culture", desc: "Live your brand values through shared memories.", icon: Star }
                  ].map((benefit, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-6 p-6 rounded-2xl hover:bg-subtle-grey transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shrink-0">
                        <benefit.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-primary uppercase tracking-tighter">{benefit.title}</h4>
                        <p className="text-zinc-500 text-sm">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
                  {/* Using standard Next/Image approach, placeholder for corporate team visual */}
                   <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                      <Users className="w-40 h-40 text-primary opacity-20" />
                   </div>
                   <Image 
                      src="/corporate-hero.png" 
                      alt="Corporate Team Building" 
                      fill 
                      className="object-cover"
                   />
                </div>
                {/* Floating Stat Card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[2rem] shadow-2xl border border-zinc-100 max-w-[200px]"
                >
                  <div className="text-4xl font-black text-accent mb-2">95%</div>
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest leading-tight">Client Retention Rate</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OUR APPROACH */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          {/* Animated background element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 translate-x-1/2" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="text-accent font-black tracking-[0.2em] uppercase text-sm block mb-4 italic">The Process</span>
              <h2 className="text-4xl md:text-5xl font-bold italic uppercase tracking-tighter">Our Approach</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { step: "01", title: "Objective Analysis", desc: "We align with your goals, team size, and expectations.", icon: Target },
                { step: "02", title: "Planning & Design", desc: "We curate the right format, activities, and experience.", icon: Layers },
                { step: "03", title: "Seamless Execution", desc: "Our team handles end-to-end coordination.", icon: Settings },
                { step: "04", title: "On-Ground Management", desc: "Ensuring smooth flow and high engagement.", icon: Play }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative space-y-6"
                >
                  <div className="text-4xl md:text-5xl font-black text-white/10 italic absolute -top-8 -left-4">
                    {step.step}
                  </div>
                  <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center relative z-10">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold italic uppercase tracking-tighter text-accent">{step.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHAT WE HANDLE */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <span className="text-accent font-black tracking-[0.2em] uppercase text-sm block mb-4 italic">Operations</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary italic uppercase tracking-tighter leading-tight">
                Leave the <span className="text-accent">Heavy Lifting</span> to Us
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { title: "Venue Sourcing", icon: MapPin },
                { title: "Activity Planning", icon: Rocket },
                { title: "Equipment Setup", icon: Settings },
                { title: "Logistics Coordination", icon: Layers },
                { title: "Food & Refreshments", icon: Coffee },
                { title: "On-ground Execution", icon: Play }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col p-8 rounded-[2rem] bg-subtle-grey border border-zinc-50 group transition-all"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-primary uppercase tracking-tighter">{item.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. SAMPLE EVENT FORMAT */}
        <section className="py-24 bg-subtle-grey">
          <div className="container mx-auto px-6">
            <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row shadow-accent/5 overflow-hidden"
            >
              <div className="lg:w-2/5 bg-primary p-12 md:p-16 text-white flex flex-col justify-center">
                 <h2 className="text-4xl font-bold mb-6 italic uppercase tracking-tighter">Sample <br />Success Format</h2>
                 <p className="text-white/60 mb-8 italic">Visualization helps in better planning. Here's a typical team building day layout.</p>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <Clock className="w-5 h-5 text-accent" />
                       <span className="font-bold">Full Day Engagement</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Users className="w-5 h-5 text-accent" />
                       <span className="font-bold">Managed by 10+ Experts</span>
                    </div>
                 </div>
              </div>
              <div className="lg:w-3/5 p-12 md:p-16">
                 <h4 className="text-2xl font-bold text-primary mb-10 italic uppercase tracking-tighter flex items-center gap-4">
                    <Calendar className="w-6 h-6 text-accent" />
                    Corporate Team Building Day
                 </h4>
                 <div className="space-y-8 relative">
                    <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-zinc-100" />
                    {[
                      { time: "09:00 AM", event: "Ice-breaker Sessions", desc: "Energy-lifting introductory games." },
                      { time: "11:00 AM", event: "Team Challenges", desc: "Strategic problem-solving activities." },
                      { time: "02:00 PM", event: "Mini Competitions", desc: "High-energy inter-team contests." },
                      { time: "04:30 PM", event: "Awards & Closing", desc: "Recognition and memory-building wrap-up." }
                    ].map((item, id) => (
                      <div key={id} className="relative pl-12">
                        <div className="absolute left-2.5 top-2.5 w-3.5 h-3.5 bg-accent rounded-full border-4 border-white shadow-sm" />
                        <div className="text-accent font-black text-xs uppercase tracking-widest mb-1">{item.time}</div>
                        <h5 className="font-bold text-primary">{item.event}</h5>
                        <p className="text-sm text-zinc-400">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 8. OUR TRACK RECORD */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { num: "50+", label: "Corporate Events Executed" },
                { num: "1000+", label: "Active Participants" },
                { num: "25+", label: "Corporate Clients" }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-black text-accent mb-4 italic tracking-tighter">
                    {stat.num}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
                    {stat.label}
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
               <div className="absolute inset-0 bg-primary/10" />
               <div className="relative z-10 max-w-4xl mx-auto">
                 <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter">Plan a Corporate Event Your Team Will <br /><span className="underline italic">Actually</span> Enjoy</h2>
                 <p className="text-xl text-white/80 mb-12">
                   Tell us your requirements and we’ll create a customized experience for your team.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                   <Button size="lg" className="bg-white text-accent hover:bg-zinc-100 h-16 px-12 rounded-2xl text-xl font-bold italic shadow-2xl" onClick={openModal}>
                     Get a Quote
                   </Button>
                   <Button size="lg" className="bg-primary hover:bg-primary/90 h-16 px-12 rounded-2xl text-xl font-bold italic shadow-2xl" onClick={openModal}>
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
