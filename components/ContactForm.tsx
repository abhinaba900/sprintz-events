"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  isModal?: boolean;
  onSuccess?: () => void;
}

export const ContactForm = ({ isModal = false, onSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    eventType: "Corporate Event",
    participants: "",
    date: "",
    location: "",
    budget: "",
    requirements: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your enquiry has been sent. Our team will contact you shortly.");
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className={`grid grid-cols-1 ${isModal ? "md:grid-cols-2" : "md:grid-cols-2"} gap-6`}>
        {/* Name */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">Contact Name</label>
          <input 
            type="text" 
            required
            placeholder="Ex. Abhishek S"
            className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary placeholder:text-zinc-300"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        {/* Company */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">Company Name</label>
          <input 
            type="text" 
            required
            placeholder="Ex. Sprintz Events"
            className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary placeholder:text-zinc-300"
            onChange={(e) => setFormData({...formData, company: e.target.value})}
          />
        </div>
        {/* Phone */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">Phone Number</label>
          <input 
            type="tel" 
            required
            placeholder="+91 98765 43210"
            className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary placeholder:text-zinc-300"
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        {/* Email */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">Work Email</label>
          <input 
            type="email" 
            required
            placeholder="hello@company.com"
            className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary placeholder:text-zinc-300"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        {/* Event Type */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">Event Type</label>
          <select 
            className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary appearance-none cursor-pointer"
            onChange={(e) => setFormData({...formData, eventType: e.target.value})}
          >
            <option>Corporate Event</option>
            <option>Sports Event</option>
            <option>Team Building</option>
            <option>Tournament</option>
            <option>Other</option>
          </select>
        </div>
        {/* Participants */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">Expected Participants</label>
          <input 
            type="text" 
            placeholder="Ex. 100 - 500"
            className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary placeholder:text-zinc-300"
            onChange={(e) => setFormData({...formData, participants: e.target.value})}
          />
        </div>
        {/* Date */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">Preferred Date</label>
          <input 
            type="text" 
            placeholder="Ex. Next Month / Oct 2024"
            className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary placeholder:text-zinc-300"
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
        </div>
        {/* Location */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">Event Location</label>
          <input 
            type="text" 
            placeholder="Ex. Bangalore / Goa"
            className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary placeholder:text-zinc-300"
            onChange={(e) => setFormData({...formData, location: e.target.value})}
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">Budget Range (Optional)</label>
          <input 
            type="text" 
            placeholder="Ex. 5L - 10L"
            className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary placeholder:text-zinc-300"
            onChange={(e) => setFormData({...formData, budget: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">Requirements / Message</label>
          <textarea 
            rows={isModal ? 3 : 4}
            placeholder="Tell us a bit more about your objective..."
            className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary placeholder:text-zinc-300 resize-none"
            onChange={(e) => setFormData({...formData, requirements: e.target.value})}
          />
        </div>
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-accent hover:bg-accent/95 text-white h-16 rounded-2xl text-xl font-black italic uppercase shadow-[0_15px_40px_rgba(255,93,0,0.2)] group mt-2 transition-all hover:scale-[1.01]"
      >
        <span className="flex items-center gap-3">
          Get a Quote <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </span>
      </Button>
    </form>
  );
};
