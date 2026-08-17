"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Image as ImageIcon,
  Video,
  X,
  ChevronLeft,
  ChevronRight,
  Mountain,
  Compass,
  Calendar,
  Sparkles,
  Users
} from "lucide-react";

export interface MediaItem {
  id: number;
  type: "video" | "image";
  src: string;
  title: string;
  subtitle: string;
}

const hikingMedia: MediaItem[] = [
  {
    id: 1,
    type: "video",
    src: "/WhatsApp Video 2026-08-17 at 11.54.38 AM (1).mp4",
    title: "Summit Victory & Team Energy",
    subtitle: "High energy trail experience",
  },
  {
    id: 2,
    type: "video",
    src: "/WhatsApp Video 2026-08-17 at 11.54.38 AM.mp4",
    title: "Trail Journey & Mountain Vistas",
    subtitle: "Group trekking highlight",
  },
  {
    id: 3,
    type: "image",
    src: "/WhatsApp Image 2026-08-17 at 11.54.36 AM (1).jpeg",
    title: "Base Camp Prep & Briefing",
    subtitle: "Morning kickoff",
  },
  {
    id: 4,
    type: "image",
    src: "/WhatsApp Image 2026-08-17 at 11.54.36 AM (2).jpeg",
    title: "Ascending the Ridge",
    subtitle: "Trekking through nature",
  },
  {
    id: 5,
    type: "image",
    src: "/WhatsApp Image 2026-08-17 at 11.54.36 AM.jpeg",
    title: "Panoramic Mountain Lookout",
    subtitle: "Scenic summit stop",
  },
  {
    id: 6,
    type: "image",
    src: "/WhatsApp Image 2026-08-17 at 11.54.37 AM (1).jpeg",
    title: "Team Bonding on the Trail",
    subtitle: "Sprintz hikers in action",
  },
  {
    id: 7,
    type: "image",
    src: "/WhatsApp Image 2026-08-17 at 11.54.37 AM (2).jpeg",
    title: "Conquering Rocky Terrain",
    subtitle: "Endurance & determination",
  },
  {
    id: 8,
    type: "image",
    src: "/WhatsApp Image 2026-08-17 at 11.54.37 AM (3).jpeg",
    title: "Peak Horizon Snapshot",
    subtitle: "Nature & adventure",
  },
  {
    id: 9,
    type: "image",
    src: "/WhatsApp Image 2026-08-17 at 11.54.37 AM.jpeg",
    title: "Group Summit Celebration",
    subtitle: "Shared achievement",
  },
  {
    id: 10,
    type: "image",
    src: "/WhatsApp Image 2026-08-17 at 11.54.38 AM (1).jpeg",
    title: "Trail Companion Moments",
    subtitle: "Unforgettable memories",
  },
  {
    id: 11,
    type: "image",
    src: "/WhatsApp Image 2026-08-17 at 11.54.38 AM.jpeg",
    title: "Victory Flag & Team Pride",
    subtitle: "Sprintz Events Hiking Crew",
  },
];

export default function HikingEventSection() {
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredMedia = hikingMedia.filter((item) =>
    filter === "all" ? true : item.type === filter
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredMedia.length]);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === 0 ? filteredMedia.length - 1 : (prev as number) - 1
    );
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === filteredMedia.length - 1 ? 0 : (prev as number) + 1
    );
  };

  const activeMedia = selectedIndex !== null ? filteredMedia[selectedIndex] : null;

  return (
    <section className="py-24 bg-gradient-to-b from-subtle-grey via-white to-subtle-grey relative overflow-hidden">
      {/* Background ambient light blur */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full mb-6"
          >
            <Compass className="w-4 h-4" />
            <span className="text-xs font-black uppercase tracking-widest italic">
              Outdoor Adventure & Trekking
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-primary mb-6 leading-tight"
          >
            Recent Hiking Event Organised by <br className="hidden md:inline" />
            <span className="text-accent underline decoration-4 underline-offset-8">
              Sprintz Events
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 text-lg leading-relaxed"
          >
            Capturing the thrilling moments, scenic trail journeys, and high-octane team spirit from our recent outdoor hiking expedition.
          </motion.p>

          {/* Quick stats pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-zinc-100 text-xs font-bold text-primary">
              <Calendar className="w-4 h-4 text-accent" />
              <span>Recent Expedition</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-zinc-100 text-xs font-bold text-primary">
              <Mountain className="w-4 h-4 text-accent" />
              <span>Peak Altitude Trek</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-zinc-100 text-xs font-bold text-primary">
              <Users className="w-4 h-4 text-accent" />
              <span>Sprintz Outdoor Team</span>
            </div>
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="flex justify-center items-center gap-3 mb-12 flex-wrap">
          {[
            { key: "all", label: "All Media", count: hikingMedia.length, icon: Sparkles },
            {
              key: "image",
              label: "Photos",
              count: hikingMedia.filter((m) => m.type === "image").length,
              icon: ImageIcon,
            },
            {
              key: "video",
              label: "Videos",
              count: hikingMedia.filter((m) => m.type === "video").length,
              icon: Video,
            },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = filter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-accent text-white shadow-lg shadow-accent/30 scale-105"
                    : "bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-[10px] font-black ${
                    isActive ? "bg-white text-accent" : "bg-zinc-100 text-zinc-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* MEDIA GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredMedia.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => setSelectedIndex(idx)}
                className="group relative h-72 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-zinc-200/80 cursor-pointer bg-zinc-900 transition-all duration-500"
              >
                {item.type === "image" ? (
                  <Image
                    src={encodeURI(item.src)}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src={encodeURI(item.src)}
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] group-hover:bg-primary/20 transition-all" />
                  </div>
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-md ${
                      item.type === "video" ? "bg-accent" : "bg-primary/80 backdrop-blur-md"
                    }`}
                  >
                    {item.type === "video" ? (
                      <>
                        <Video className="w-3 h-3" /> Video
                      </>
                    ) : (
                      <>
                        <ImageIcon className="w-3 h-3" /> Photo
                      </>
                    )}
                  </span>
                </div>

                {/* Center Play Button for Video */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-115 transition-transform duration-300 border-2 border-white/40">
                      <Play className="w-7 h-7 fill-white ml-1" />
                    </div>
                  </div>
                )}

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h4 className="text-white font-bold text-base mb-1 group-hover:text-accent transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-white/70 text-xs italic">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-8"
          >
            {/* Header / Controls bar */}
            <div className="w-full flex items-center justify-between z-20 text-white max-w-6xl">
              <div className="flex items-center gap-3">
                <span className="bg-accent px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest text-white">
                  {activeMedia.type}
                </span>
                <span className="text-white/60 text-xs font-bold">
                  {selectedIndex + 1} of {filteredMedia.length}
                </span>
              </div>

              <button
                onClick={() => setSelectedIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Media Display Area */}
            <div className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh] flex items-center justify-center my-auto">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-30 w-12 h-12 rounded-full bg-black/60 border border-white/20 hover:bg-accent text-white flex items-center justify-center transition-all shadow-xl"
                aria-label="Previous media"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Media Content */}
              <div className="relative w-full h-full flex items-center justify-center">
                {activeMedia.type === "image" ? (
                  <div className="relative w-full h-full max-h-full flex items-center justify-center">
                    <Image
                      src={encodeURI(activeMedia.src)}
                      alt={activeMedia.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full max-h-full flex items-center justify-center">
                    <video
                      src={encodeURI(activeMedia.src)}
                      controls
                      autoPlay
                      className="w-full h-full max-h-full rounded-2xl object-contain shadow-2xl"
                    />
                  </div>
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-30 w-12 h-12 rounded-full bg-black/60 border border-white/20 hover:bg-accent text-white flex items-center justify-center transition-all shadow-xl"
                aria-label="Next media"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption & Description */}
            <div className="w-full max-w-2xl text-center z-20 text-white pb-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {activeMedia.title}
              </h3>
              <p className="text-white/70 text-sm italic mb-2">
                {activeMedia.subtitle} — Sprintz Events Outdoor Hiking Showcase
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
