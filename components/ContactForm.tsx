"use client";

import React, { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

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
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatZohoDate = (dateStr: string) => {
    if (!dateStr) return "";
    const dateObj = new Date(dateStr);
    if (isNaN(dateObj.getTime())) return "";

    const day = String(dateObj.getDate()).padStart(2, "0");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const formDataObj = new FormData(formElement);

    try {
      console.log("Submitting to Zoho Form via Fetch...");
      const response = await fetch(formElement.action, {
        method: "POST",
        body: formDataObj,
        mode: "no-cors",
      });

      console.log("Zoho Form Response Object:", response);
      setIsSubmitted(true);

      if (isModal && onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 6000);
      }
    } catch (error) {
      console.error("Zoho Form Submission Error:", error);
      alert("There was an error submitting your enquiry. Please try again.");
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center p-8 md:p-12 space-y-6 bg-emerald-50/50 rounded-[2.5rem] border border-emerald-100/80 shadow-inner italic"
      >
        <div className="relative">
          <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
            <svg
              className="w-10 h-10 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping-slow -z-10" />
        </div>
        <h3 className="text-3xl font-black text-emerald-950 uppercase tracking-tighter">
          Enquiry Received!
        </h3>
        <p className="text-emerald-800/80 font-medium text-sm leading-relaxed max-w-md">
          Thank you for reaching out to Sprintz Events. Your details have been submitted to our CRM. Our event specialists will get back to you with a custom event roadmap within 24 hours.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href="https://wa.me/919148777814?text=Hi%20Sprintz%20Events%2C%20I%20just%20submitted%20an%20enquiry%20and%20would%20like%20to%20chat!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-[#128C7E] transition-all shadow-md group"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            Priority WhatsApp Chat
          </a>
          {isModal && (
            <Button
              variant="outline"
              onClick={onSuccess}
              className="border-emerald-600 text-emerald-800 hover:bg-emerald-600 hover:text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider text-xs"
            >
              Close
            </Button>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <form
        action="https://forms.zohopublic.in/sathishsprint1/form/Enquiry/formperma/iut9dP8x8KE34_sfGnimU7ZxjdfFvRmJg4g7Ss5la3Q/htmlRecords/submit"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        id="form"
      >
        {/* Zoho Hidden Referrals / Config */}
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />
        
        {/* Zoho Form Input fields mapping */}
        <input type="hidden" name="Date" value={formatZohoDate(formData.date)} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">
              Contact Name
            </label>
            <input
              type="text"
              name="SingleLine"
              required
              placeholder="Ex. Abhishek S"
              className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary placeholder:text-zinc-300"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          {/* Company */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">
              Company Name
            </label>
            <input
              type="text"
              name="SingleLine1"
              required
              placeholder="Ex. Sprintz Events"
              className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary placeholder:text-zinc-300"
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>
          {/* Phone */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="PhoneNumber_countrycode"
              required
              placeholder="+91 91487 77814"
              className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary placeholder:text-zinc-300"
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          {/* Email */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">
              Work Email
            </label>
            <input
              type="email"
              name="Email"
              required
              placeholder="hello@company.com"
              className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary placeholder:text-zinc-300"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          {/* Event Type */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">
              Event Type
            </label>
            <select
              name="Dropdown"
              className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary appearance-none cursor-pointer"
              onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
            >
              <option value="Corporate Event">Corporate Event</option>
              <option value="Sports Event">Sports Event</option>
              <option value="Team Building">Team Building</option>
              <option value="Tournament">Tournament</option>
              <option value="Yoga &amp; Wellness">Yoga & Wellness</option>
            </select>
          </div>
          {/* Participants */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">
              Expected Participants
            </label>
            <input
              type="text"
              name="SingleLine2"
              placeholder="Ex. 100 - 500"
              className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary placeholder:text-zinc-300"
              onChange={(e) =>
                setFormData({ ...formData, participants: e.target.value })
              }
            />
          </div>
          {/* Date */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">
              Preferred Date
            </label>
            <input
              type="date"
              required
              className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary placeholder:text-zinc-300"
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
          {/* Location */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block ml-1">
              Event Location
            </label>
            <input
              type="text"
              name="SingleLine3"
              placeholder="Ex. Bangalore / Goa"
              className="w-full bg-subtle-grey border-2 border-transparent focus:border-accent focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-primary placeholder:text-zinc-300"
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-accent hover:bg-accent/95 text-white h-16 rounded-2xl text-xl font-black italic uppercase shadow-[0_15px_40px_rgba(255,93,0,0.2)] group mt-2 transition-all hover:scale-[1.01]"
        >
          <span className="flex items-center gap-3">
            Get a Quote{" "}
            <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </span>
        </Button>
      </form>

    </>
  );
};

