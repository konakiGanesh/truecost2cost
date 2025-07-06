import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin } from "lucide-react";

const CTASection = () => {
  const handleBookSiteVisit = () => {
    // This would open a booking form or redirect to booking page
    const phone = "tel:+919876543210";
    window.open(phone, '_self');
  };

  const handleCallExpert = () => {
    const phone = "tel:+919876543210";
    window.open(phone, '_self');
  };

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-primary-foreground">
            Ready to Build Your Dream Villa?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto font-poppins font-light">
            Take the first step towards owning your perfect villa in the beautiful hills. 
            Our experts are ready to guide you through the entire process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-white/95 backdrop-blur-sm shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-3 text-foreground">
                  Book a Site Visit
                </h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Experience the location firsthand. See the plots, understand the surroundings, 
                  and visualize your future home.
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:bg-primary/90"
                  onClick={handleBookSiteVisit}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Book Site Visit
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-3 text-foreground">
                  Call Our Expert
                </h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Have questions? Our villa construction experts are available to discuss 
                  your requirements and provide personalized guidance.
                </p>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={handleCallExpert}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Our Expert
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-primary-foreground">
            <div>
              <div className="text-3xl md:text-4xl font-bold font-poppins mb-2">50+</div>
              <div className="text-sm opacity-90">Happy Families</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold font-poppins mb-2">100%</div>
              <div className="text-sm opacity-90">Transparency</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold font-poppins mb-2">₹200</div>
              <div className="text-sm opacity-90">Per Sq.Ft Fixed Fee</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold font-poppins mb-2">0</div>
              <div className="text-sm opacity-90">Hidden Costs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;