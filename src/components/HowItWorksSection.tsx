import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, House, Construction } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Vision & Plotting",
      description: "Your journey begins with a site visit to select the perfect plot that aligns with your lifestyle and vision.",
      customerRole: "Choose your land.",
      icon: MapPin,
      color: "from-primary/20 to-primary/10"
    },
    {
      number: "2", 
      title: "Ownership & Legality",
      description: "We facilitate the registration of the land 100% in your name, giving you indisputable ownership from day one.",
      customerRole: "Secure legal ownership.",
      icon: House,
      color: "from-accent/30 to-accent/20"
    },
    {
      number: "3",
      title: "Design & Approvals", 
      description: "Your taste dictates the architectural plans. We manage the complex process of securing all building approvals in your name.",
      customerRole: "Finalize your dream design.",
      icon: Construction,
      color: "from-muted/40 to-muted/30"
    },
    {
      number: "4",
      title: "Construction & Control",
      description: "You pay for materials directly to vendors at actual cost. You choose everything from tiles to fittings, based on your budget and taste.",
      customerRole: "Control all finances and material choices.",
      icon: Construction,
      color: "from-primary/15 to-primary/5"
    },
    {
      number: "5", 
      title: "Supervision & Quality",
      description: "Our expert team supervises the construction, ensuring the highest quality standards are met while adhering to timelines.",
      customerRole: "Manage project execution.",
      icon: House,
      color: "from-accent/25 to-accent/15"
    },
    {
      number: "6",
      title: "Completion & Handover",
      description: "We manage the finishing touches and quality checks, culminating in you receiving the keys to your dream home, built your way.",
      customerRole: "Move into your finished villa.",
      icon: MapPin,
      color: "from-muted/35 to-muted/25"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-poppins">
            Our transparent 6-step process puts you in complete control of your villa construction journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-50`} />
                <CardContent className="relative p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold font-poppins">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <Icon className="w-6 h-6 text-primary mr-2" />
                        <h3 className="text-xl font-semibold font-poppins text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="bg-primary/10 rounded-lg p-3 border-l-4 border-primary">
                        <p className="text-sm font-medium text-foreground">
                          <span className="text-primary font-semibold">YOUR ROLE:</span> {step.customerRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;