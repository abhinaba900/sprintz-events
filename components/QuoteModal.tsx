"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { ContactForm } from "./ContactForm";

export const QuoteModal = () => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 italic">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-primary/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Sidebar / Info */}
            <div className="md:w-1/3 bg-primary text-white p-10 flex flex-col justify-between relative overflow-hidden hidden md:flex">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
               
               <div className="relative z-10">
                  <div className="bg-accent/40 backdrop-blur-md p-4 rounded-3xl w-fit mb-8 shadow-2xl">
                     <Image 
                       src="/Sprintz full logo.svg" 
                       alt="Sprintz" 
                       width={100} 
                       height={28} 
                       className="h-7 w-auto object-contain brightness-0 invert"
                     />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-6">
                    Plan Your <br /><span className="text-accent underline decoration-2">Next Event</span>
                  </h3>
                  <p className="text-white/60 text-sm font-medium leading-relaxed mb-8">
                    Share your requirements and we’ll get back to you with a structured event brief within 24 hours.
                  </p>
                  
                  <div className="space-y-4">
                     <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-accent">
                        <Sparkles size={14} />
                        <span>Elite Execution</span>
                     </div>
                     <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-accent">
                        <Sparkles size={14} />
                        <span>Structured Planning</span>
                     </div>
                  </div>
               </div>

               <div className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                  SPRINTZ EVENTS © 2024
               </div>
            </div>

            {/* Form Section */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar">
               <div className="flex justify-between items-center mb-10">
                  <h2 className="text-2xl font-black text-primary uppercase tracking-tighter italic">Enquiry Form</h2>
                  <button 
                    onClick={closeModal}
                    className="w-10 h-10 rounded-full bg-subtle-grey flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all shadow-sm"
                  >
                    <X size={20} />
                  </button>
               </div>
               
               <ContactForm isModal onSuccess={closeModal} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
