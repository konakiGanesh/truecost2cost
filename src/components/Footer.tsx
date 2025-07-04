import React from 'react';
import { House, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <House className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold font-poppins">TrueCost2Cost</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md leading-relaxed">
              Building transparent, customer-controlled villa projects in the beautiful hills of Kasauli. 
              Your dream home with complete ownership and no hidden costs.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold">Smart Villas. Transparent Pricing.</p>
              <p className="text-sm text-secondary-foreground/70">₹200/sq.ft Fixed Fee • 100% Land Ownership</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                >
                  Project Models
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('comparison')}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('amenities')}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-secondary-foreground/80">
                  <p>Kasauli, Himachal Pradesh</p>
                  <p>India - 173204</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="text-sm text-secondary-foreground/80">
                  <p>+91 98765 43210</p>
                  <p className="text-xs opacity-70">9 AM - 7 PM (Mon-Sat)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-sm text-secondary-foreground/80">info@truecost2cost.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/70">
              © {currentYear} TrueCost2Cost. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-secondary-foreground/70">
              <a href="#" className="hover:text-secondary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary-foreground transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;