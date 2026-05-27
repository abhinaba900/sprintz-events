import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-block brightness-0 invert opacity-90 hover:opacity-100 transition-opacity">
              <Image 
                src="/Sprintz full logo.svg" 
                alt="Sprintz Events" 
                width={160} 
                height={45} 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-white/70 leading-relaxed">
              Elevating corporate and sports events with precision, energy, and end-to-end management solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/sprintzevents26/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61590459778813" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 italic uppercase tracking-tighter">Quick Links</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><Link href="/" className="hover:text-accent transition-colors italic">Home</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors italic">Events Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors italic">About Us</Link></li>
              <li><Link href="/how-it-works" className="hover:text-accent transition-colors italic">How It Works</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors italic">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 italic uppercase tracking-tighter">Our Expertise</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><Link href="/corporate-events" className="hover:text-accent transition-colors italic">Corporate Events</Link></li>
              <li><Link href="/sports-events" className="hover:text-accent transition-colors italic">Sports Tournaments</Link></li>
              <li><Link href="/management" className="hover:text-accent transition-colors italic">End-to-End Execution</Link></li>
              <li><Link href="/corporate-events" className="hover:text-accent transition-colors italic">Team Engagement</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors italic">Vendor Management</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-6 text-white/70">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>#303, Janani, 15th Cross, Balaji Layout, Mallathalli, Bengaluru - 560056</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+919148777814" className="hover:text-accent transition-colors font-medium">+91 91 487 778 14</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>hello@sprintzevents.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Sprintz Events Management Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
