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
  ShieldCheck, 
  Clock, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  TrendingUp,
  MapPin,
  Calendar
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

export default function Home() {
  const { openModal } = useModal();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 pt-0">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Image with Parallax effect (simulated) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.png"
              alt="High-Energy Events"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#002D62]/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#002D62] via-[#002D62]/40 to-transparent" />
            
            {/* Energy Lines Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-20 pointer-events-none">
              <div className="absolute top-1/2 right-[-10%] w-[120%] h-[1px] bg-accent rotate-[-35deg]" />
              <div className="absolute top-1/3 right-[-10%] w-[120%] h-[2px] bg-accent rotate-[-35deg]" />
              <div className="absolute top-2/3 right-[-10%] w-[120%] h-[1px] bg-accent rotate-[-35deg]" />
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-white">
            <div className="max-w-3xl">
              <motion.div
                initial="hidden"
                animate="visible"
                custom={0}
                variants={fadeIn}
                className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
              >
                <Zap className="w-4 h-4 fill-accent" />
                <span className="text-sm font-bold tracking-wider uppercase italic">Dynamic & Professional</span>
              </motion.div>
              
              <motion.h1
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 tracking-tight italic"
              >
                High-Energy Corporate & <br />
                <span className="text-accent underline decoration-4 underline-offset-8">Sports Events</span>
              </motion.h1>
              
              <motion.p
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeIn}
                className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl"
              >
                From corporate offsites to large-scale sports tournaments, Sprintz Events delivers end-to-end event experiences with precision and energy.
              </motion.p>
              
              <motion.div
                initial="hidden"
                animate="visible"
                custom={3}
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" variant="primary" className="group" onClick={openModal}>
                  Plan Your Event
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
                  View Our Work
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-accent rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* SERVICES OVERVIEW */}
        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-accent font-black tracking-[0.2em] uppercase text-sm block mb-4"
              >
                What We Do
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-primary mb-6"
              >
                Comprehensive Event Solutions
              </motion.h2>
              <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Corporate Events",
                  desc: "Team building, offsites, and employee engagement experiences tailored to your brand values.",
                  icon: Users,
                  color: "bg-blue-50 text-blue-600",
                  href: "/corporate-events"
                },
                {
                  title: "Sports Events",
                  desc: "Cricket, football, and multi-sport corporate tournaments organized with professional standards.",
                  icon: Trophy,
                  color: "bg-orange-50 text-orange-600",
                  href: "/sports-events"
                },
                {
                  title: "End-to-End Management",
                  desc: "We handle venues, logistics, equipment, and flawless execution so you can focus on the experience.",
                  icon: Settings,
                  color: "bg-zinc-50 text-zinc-600",
                  href: "/management"
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-10 bg-white border border-zinc-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-500 group"
                >
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-zinc-500 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <Link href={service.href} className="flex items-center gap-2 text-accent font-bold group-hover:gap-4 transition-all uppercase text-xs tracking-widest">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY SPRINTZ EVENTS */}
        <section id="why-us" className="py-24 bg-subtle-grey overflow-hidden relative">
          <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-8">
                <span className="text-accent font-black tracking-[0.2em] uppercase text-sm block">Why Choose Us</span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                  Elevating the <br /> 
                  <span className="italic">Standard of Excellence</span>
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  We don't just organize events; we curate high-energy environments that foster connection, competition, and celebration.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Seamless Execution", desc: "Precision in every detail." },
                    { title: "Experienced Team", desc: "50+ years of collective experience." },
                    { title: "End-to-End Solutions", desc: "Logistics to venue to trophies." },
                    { title: "High-Energy Vibes", desc: "Unmatched enthusiasm & scale." }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex gap-4 p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm"
                    >
                      <div className="shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">{item.title}</h4>
                        <p className="text-sm text-zinc-500">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className="relative z-10 bg-primary rounded-[3rem] p-4 shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-10"
                  >
                    <div className="w-full h-full border-2 border-dashed border-white rounded-full scale-150" />
                  </motion.div>
                  <Rocket className="w-40 h-40 text-accent animate-pulse" />
                </div>

                {/* Floating Metric Card - Moved Outside to prevent clipping */}
                <motion.div 
                  initial={{ x: -20, y: 20 }}
                  whileInView={{ x: 0, y: 0 }}
                  className="absolute bottom-10 -left-4 md:-left-10 z-20 bg-white text-primary p-6 rounded-3xl shadow-2xl border border-zinc-100 hidden md:block"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-bold">100%</div>
                    <span className="font-bold uppercase text-[10px] tracking-widest text-zinc-400">Success Rate</span>
                  </div>
                  <div className="text-sm font-semibold italic text-zinc-500">Excellence in Execution</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED EVENTS / HIGHLIGHTS */}
        <section id="events" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-accent font-black tracking-[0.2em] uppercase text-sm block mb-4">Our Showcase</span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary">Featured Event Highlights</h2>
              </div>
              <Button variant="outline">View All Gallery</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  img: "/cricket.png", 
                  title: "Corporate Cricket League", 
                  tag: "Sports",
                  date: "March 2024",
                  venue: "Professional Stadium"
                },
                { 
                  img: "/offsite.png", 
                  title: "Leadership Offsite", 
                  tag: "Corporate",
                  date: "Jan 2024",
                  venue: "Hill Station Resort"
                },
                { 
                  img: "/sports-day.png", 
                  title: "Annual Sports Day", 
                  tag: "Multi-Sport",
                  date: "Dec 2023",
                  venue: "Corporate Campus"
                }
              ].map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative h-[450px] overflow-hidden rounded-[2.5rem] shadow-lg border border-zinc-100"
                >
                  <Image
                    src={event.img}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent" />
                  
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-accent text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                      {event.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex flex-col gap-1 text-white/60 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" /> {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" /> {event.venue}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRACK RECORD (NUMBERS SECTION) */}
        <section id="stats" className="py-24 bg-primary text-white overflow-hidden relative">
          {/* Animated Speed Lines */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i} 
                className="absolute bg-white h-[1px]" 
                style={{ 
                  top: `${i * 10}%`, 
                  left: 0, 
                  width: `${50 + Math.random() * 50}%`,
                  opacity: Math.random() * 0.5,
                  transform: 'rotate(-45deg)'
                }} 
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { num: "50+", label: "Events Executed" },
                { num: "1000+", label: "Participants" },
                { num: "25+", label: "Corporate Clients" },
                { num: "10+", label: "Elite Venues" }
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
                  <div className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-white/60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-subtle-grey">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-accent font-black tracking-[0.2em] uppercase text-sm block mb-4 italic">Social Proof</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Client Experience</h2>
              <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "Sprintz Events transformed our annual sports day into a professional league experience. The energy was electric from start to finish.",
                  author: "HR Director, Tech Giant",
                  company: "Fortune 500 Co."
                },
                {
                  quote: "Their attention to detail in logistics and venue management allowed our team to fully immerse in the team-building activities.",
                  author: "COO, Retail Services",
                  company: "Global Logistics"
                },
                {
                  quote: "Scale and execution. Sprintz knows how to handle 500+ participants with absolute precision. Highly recommended for corporate cricket tournaments.",
                  author: "Managing Director",
                  company: "Investment Bank"
                }
              ].map((t, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-10 rounded-3xl shadow-sm border border-zinc-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1 mb-8">
                      {[1, 2, 3, 4, 5].map(s => (
                        <Zap key={s} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-lg text-primary/80 font-medium leading-relaxed italic mb-8">
                      "{t.quote}"
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{t.author}</h4>
                    <p className="text-sm text-zinc-400">{t.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
        <section id="contact" className="py-24 bg-white px-6">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-accent rounded-[3rem] p-12 md:p-24 overflow-hidden relative text-white text-center flex flex-col items-center"
            >
              {/* Energy Background Pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <Rocket className="w-[500px] h-[500px] absolute bottom-[-100px] right-[-100px] rotate-[15deg]" />
              </div>

              <div className="relative z-10 max-w-2xl">
                <motion.span 
                  whileInView={{ x: [-10, 10, -10] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-white/20 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 inline-block animate-pulse"
                >
                  Let's Launch Your Event
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Ready to Plan Your Next <span className="italic underline underline-offset-4 decoration-2">High-Octane</span> Event?
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                  <Button size="lg" className="bg-white text-accent hover:bg-white/90 shadow-2xl" onClick={openModal}>
                    Get a Free Quote
                  </Button>
                  <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={openModal}>
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
