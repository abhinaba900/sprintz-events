"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const Navbar = () => {
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Events", href: "/services" },
    { name: "Corporate", href: "/corporate-events" },
    { name: "Sports", href: "/sports-events" },
    { name: "Execution", href: "/management" },
    { name: "Process", href: "/how-it-works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6",
        mobileMenuOpen && "bg-primary backdrop-blur-none"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className={cn(
            "transition-all duration-500",
            (!isScrolled && !mobileMenuOpen) ? "brightness-0 invert" : "",
            mobileMenuOpen ? "brightness-0 invert" : ""
          )}
        >
          <Image 
            src="/Sprintz full logo.svg" 
            alt="Sprintz Events" 
            width={180} 
            height={50} 
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs font-black uppercase tracking-widest hover:text-accent transition-colors italic shrink-0",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            variant="primary" 
            size="sm" 
            className="font-bold italic uppercase px-6"
            onClick={openModal}
          >
            Plan Your Event
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-[60]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="text-white w-8 h-8" />
          ) : (
            <Menu className={cn("w-8 h-8", isScrolled ? "text-primary" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-primary z-40 transition-all duration-500 lg:hidden flex flex-col items-center justify-center gap-8",
          mobileMenuOpen 
            ? "translate-y-0 opacity-100 visible" 
            : "-translate-y-full opacity-0 invisible pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-3xl font-black text-white hover:text-accent transition-colors uppercase italic italic tracking-tighter"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Button 
          variant="primary" 
          size="lg" 
          className="mt-4 font-black italic uppercase text-lg px-12"
          onClick={() => {
            setMobileMenuOpen(false);
            openModal();
          }}
        >
          Plan Your Event
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
