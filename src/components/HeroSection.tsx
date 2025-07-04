import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import heroVilla1 from '@/assets/hero-villa-1.jpg';
import heroFamily from '@/assets/hero-family.jpg';
import heroProject from '@/assets/hero-project.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: heroVilla1,
      title: "Smart Villas. Transparent Pricing.",
      subtitle: "Build your dream villa with complete transparency and control"
    },
    {
      image: heroFamily,
      title: "Your Dream Home Awaits",
      subtitle: "Join hundreds of satisfied families in Kasauli"
    },
    {
      image: heroProject,
      title: "Premium Villa Projects",
      subtitle: "4 or 8 villas per acre with world-class amenities"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToPlans = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToComparison = () => {
    const element = document.getElementById('comparison');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-poppins font-light animate-fade-in">
            {slides[currentSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold shadow-glow"
              onClick={scrollToPlans}
            >
              View Plans
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-secondary px-8 py-6 text-lg font-semibold"
              onClick={scrollToComparison}
            >
              Compare With Others
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;