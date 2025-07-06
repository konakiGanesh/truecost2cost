import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { House, Construction, MapPin } from "lucide-react";
import amenityRoad from "@/assets/amenity-road.jpg";
import amenityPark from "@/assets/amenity-park.jpg";
import amenityHall from "@/assets/amenity-hall.jpg";
import amenityPool from "@/assets/amenity-pool.jpg";

const AmenitiesSection = () => {
  const amenities = [
    {
      icon: MapPin,
      title: "20m Internal Road", 
      description: "Wide, well-paved roads for easy vehicle access to all villas",
      color: "from-primary/20 to-primary/10",
      image: amenityRoad,
      detailedInfo: "Our premium 20-meter wide internal roads are constructed with high-quality asphalt and proper drainage systems. These roads ensure smooth vehicle movement and are designed to handle all weather conditions. The roads are lined with beautiful landscaping and LED street lighting for enhanced safety and aesthetics."
    },
    {
      icon: Construction,
      title: "Community Park",
      description: "Landscaped green spaces for recreation and children's play area",
      color: "from-accent/30 to-accent/20",
      image: amenityPark,
      detailedInfo: "Our community park spans over 5000 sq.ft with dedicated areas for children's playground, walking paths, jogging tracks, and beautifully manicured gardens. The park includes modern play equipment, seating areas, and is designed to promote a healthy lifestyle for all residents."
    },
    {
      icon: House,
      title: "Community Hall",
      description: "Multi-purpose hall for events, gatherings, and celebrations",
      color: "from-muted/40 to-muted/30",
      image: amenityHall,
      detailedInfo: "The community hall is a 3000 sq.ft modern facility equipped with air conditioning, sound system, stage area, and comfortable seating for 200 people. Perfect for weddings, birthday parties, cultural events, and community meetings. The hall includes modern kitchen facilities and ample parking space."
    },
    {
      icon: MapPin,
      title: "Swimming Pool",
      description: "Resort-style swimming pool with separate kids' section",
      color: "from-primary/15 to-primary/5",
      image: amenityPool,
      detailedInfo: "Our resort-style swimming pool features a 25-meter main pool for adults and a separate shallow area for children. The pool area includes poolside deck, lounging chairs, changing rooms, and is surrounded by beautiful landscaping. Professional maintenance ensures crystal clear water year-round."
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
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card 
                    className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 cursor-pointer"
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
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold font-poppins flex items-center gap-3">
                      <Icon className="w-6 h-6 text-primary" />
                      {amenity.title}
                    </DialogTitle>
                    <DialogDescription asChild>
                      <div className="space-y-4">
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <img
                            src={amenity.image}
                            alt={amenity.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {amenity.detailedInfo}
                        </p>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
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