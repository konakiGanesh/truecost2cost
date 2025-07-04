import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, House, Construction } from "lucide-react";
import aerialView from "@/assets/project-aerial-view.jpg";
import sampleVilla1 from "@/assets/sample-villa-1.jpg";
import sampleVilla2 from "@/assets/sample-villa-2.jpg";
import indoorPool from "@/assets/indoor-pool.jpg";
import outdoorPool from "@/assets/outdoor-pool.jpg";
import luxuryVillaNight from "@/assets/luxury-villa-night.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: "4-villas",
      title: "4 Villas in 1 Acre",
      description: "Spacious luxury villas with maximum privacy and large individual plots",
      features: [
        "2400-3000 sq.ft villas",
        "6000 sq.ft individual plots", 
        "Private gardens",
        "Ample parking space",
        "Maximum privacy"
      ],
      highlight: "Best for Large Families",
      price: "₹85-95 Lakhs*",
      icon: House
    },
    {
      id: "8-villas", 
      title: "8 Villas in 1 Acre",
      description: "Well-designed villas optimizing space with modern amenities and community living",
      features: [
        "1800-2200 sq.ft villas",
        "3000 sq.ft individual plots",
        "Shared community spaces", 
        "Optimized layouts",
        "Community living"
      ],
      highlight: "Best Value Option",
      price: "₹55-65 Lakhs*",
      icon: Construction
    }
  ];

  const handleViewDetails = (projectId: string) => {
    // This would navigate to project detail page
    console.log(`Viewing details for ${projectId}`);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-foreground">
            Project Models
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-poppins">
            Choose from our carefully planned villa layouts designed for different family sizes and budgets
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.id}
                className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <CardHeader className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary rounded-lg">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold font-poppins text-foreground">
                          {project.title}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {project.highlight}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary font-poppins">
                        {project.price}
                      </div>
                      <div className="text-xs text-muted-foreground">*Estimated range</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold font-poppins mb-3 text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 space-y-3">
                    <Button 
                      className="w-full bg-gradient-primary hover:bg-primary/90"
                      onClick={() => handleViewDetails(project.id)}
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      View Master Plan & Floor Plans
                    </Button>
                    <Button variant="outline" className="w-full">
                      Schedule Site Visit
                    </Button>
                  </div>
                </CardContent>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-10 rounded-bl-full" />
              </Card>
            );
          })}
        </div>

        {/* Project Gallery */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-foreground">
              Project Gallery
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
              Explore our luxury villa designs, premium amenities, and stunning site views
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { image: aerialView, title: "Aerial Site View", description: "Bird's eye view of the villa complex layout" },
              { image: sampleVilla1, title: "Modern Villa Design", description: "Contemporary architecture with premium finishes" },
              { image: sampleVilla2, title: "Elegant Villa Model", description: "Two-story luxury villa with beautiful landscaping" },
              { image: indoorPool, title: "Indoor Swimming Pool", description: "Luxurious indoor pool with modern amenities" },
              { image: outdoorPool, title: "Outdoor Pool Area", description: "Beautiful outdoor swimming pool and lounging area" },
              { image: luxuryVillaNight, title: "Luxury Villa Evening", description: "Premium villa with elegant night lighting" }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold font-poppins text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-muted/30">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold font-poppins mb-4 text-foreground">
                All Projects Include
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Prime Location</p>
                  <p className="text-xs text-muted-foreground">Tirupati Hills</p>
                </div>
                <div className="text-center">
                  <House className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Modern Design</p>
                  <p className="text-xs text-muted-foreground">Contemporary Architecture</p>
                </div>
                <div className="text-center">
                  <Construction className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Quality Build</p>
                  <p className="text-xs text-muted-foreground">Premium Materials</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Full Amenities</p>
                  <p className="text-xs text-muted-foreground">Complete Infrastructure</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;