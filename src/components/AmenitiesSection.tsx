import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { House, Construction, MapPin } from "lucide-react";

const AmenitiesSection = () => {
  const amenities = [
    {
      icon: MapPin,
      title: "20m Internal Road", 
      description: "Wide, well-paved roads for easy vehicle access to all villas",
      color: "from-primary/20 to-primary/10"
    },
    {
      icon: Construction,
      title: "Community Park",
      description: "Landscaped green spaces for recreation and children's play area",
      color: "from-accent/30 to-accent/20"
    },
    {
      icon: House,
      title: "Community Hall",
      description: "Multi-purpose hall for events, gatherings, and celebrations",
      color: "from-muted/40 to-muted/30"
    },
    {
      icon: MapPin,
      title: "Swimming Pool",
      description: "Resort-style swimming pool with separate kids' section",
      color: "from-primary/15 to-primary/5"
    }
  ];

  const additionalFeatures = [
    "24x7 Security with CCTV surveillance",
    "Power backup for common areas", 
    "Rainwater harvesting system",
    "Waste management facility",
    "Underground electrical cabling",
    "Street lighting throughout",
    "Boundary wall with landscaping",
    "Visitor parking area"
  ];

  return (
    <section id="amenities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-foreground">
            Premium Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-poppins">
            Enjoy resort-style living with carefully planned amenities that enhance your lifestyle
          </p>
        </div>

        {/* Main Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <Card 
                key={index}
                className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${amenity.color} opacity-50`} />
                <CardContent className="relative p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold font-poppins mb-3 text-foreground">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-background shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold font-poppins mb-6 text-center text-foreground">
                Additional Features & Infrastructure
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {additionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lifestyle Promise */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-primary rounded-lg p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold font-poppins mb-4">
              More Than Just a Home
            </h3>
            <p className="text-lg leading-relaxed opacity-90">
              Every amenity is designed to create a complete lifestyle experience. 
              From morning walks in the park to evening gatherings in the community hall, 
              your villa project becomes a vibrant neighborhood where memories are made.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;