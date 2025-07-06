import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, House, Construction, ChevronLeft, ChevronRight } from "lucide-react";
import aerialView from "@/assets/project-aerial-view.jpg";
import sampleVilla1 from "@/assets/sample-villa-1.jpg";
import sampleVilla2 from "@/assets/sample-villa-2.jpg";
import indoorPool from "@/assets/indoor-pool.jpg";
import outdoorPool from "@/assets/outdoor-pool.jpg";
import luxuryVillaNight from "@/assets/luxury-villa-night.jpg";
// Gallery slide images
import galleryAerial1 from "@/assets/gallery-aerial-1.jpg";
import galleryAerial2 from "@/assets/gallery-aerial-2.jpg";
import galleryAerial3 from "@/assets/gallery-aerial-3.jpg";
import galleryVilla11 from "@/assets/gallery-villa-1-1.jpg";
import galleryVilla12 from "@/assets/gallery-villa-1-2.jpg";
import galleryVilla13 from "@/assets/gallery-villa-1-3.jpg";
import galleryVilla21 from "@/assets/gallery-villa-2-1.jpg";
import galleryVilla22 from "@/assets/gallery-villa-2-2.jpg";
import galleryVilla23 from "@/assets/gallery-villa-2-3.jpg";
import galleryPool11 from "@/assets/gallery-pool-1-1.jpg";
import galleryPool12 from "@/assets/gallery-pool-1-2.jpg";
import galleryPool13 from "@/assets/gallery-pool-1-3.jpg";
import galleryPool21 from "@/assets/gallery-pool-2-1.jpg";
import galleryPool22 from "@/assets/gallery-pool-2-2.jpg";
import galleryPool23 from "@/assets/gallery-pool-2-3.jpg";
import galleryNight1 from "@/assets/gallery-night-1.jpg";
import galleryNight2 from "@/assets/gallery-night-2.jpg";
import galleryNight3 from "@/assets/gallery-night-3.jpg";

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState<{[key: number]: number}>({});

  const nextSlide = (galleryIndex: number, totalSlides: number) => {
    setCurrentSlide(prev => ({
      ...prev,
      [galleryIndex]: ((prev[galleryIndex] || 0) + 1) % totalSlides
    }));
  };

  const prevSlide = (galleryIndex: number, totalSlides: number) => {
    setCurrentSlide(prev => ({
      ...prev,
      [galleryIndex]: ((prev[galleryIndex] || 0) - 1 + totalSlides) % totalSlides
    }));
  };
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
              { 
                image: aerialView, 
                title: "Aerial Site View", 
                description: "Bird's eye view of the villa complex layout",
                slides: [galleryAerial1, galleryAerial2, galleryAerial3],
                slideDescriptions: [
                  "Master plan overview showing complete villa layout",
                  "Construction progress from aerial perspective", 
                  "Completed villa complex with all amenities"
                ]
              },
              { 
                image: sampleVilla1, 
                title: "Modern Villa Design", 
                description: "Contemporary architecture with premium finishes",
                slides: [galleryVilla11, galleryVilla12, galleryVilla13],
                slideDescriptions: [
                  "Premium exterior with modern architectural design",
                  "Spacious living areas with high-end interiors",
                  "Modern kitchen with premium appliances and finishes"
                ]
              },
              { 
                image: sampleVilla2, 
                title: "Elegant Villa Model", 
                description: "Two-story luxury villa with beautiful landscaping",
                slides: [galleryVilla21, galleryVilla22, galleryVilla23],
                slideDescriptions: [
                  "Two-story villa with elegant exterior design",
                  "Master bedroom with luxury finishes",
                  "Outdoor terrace with garden views"
                ]
              },
              { 
                image: indoorPool, 
                title: "Indoor Swimming Pool", 
                description: "Luxurious indoor pool with modern amenities",
                slides: [galleryPool11, galleryPool12, galleryPool13],
                slideDescriptions: [
                  "Premium indoor pool with mood lighting",
                  "Changing rooms and spa facilities",
                  "Recreation area with entertainment zone"
                ]
              },
              { 
                image: outdoorPool, 
                title: "Outdoor Pool Area", 
                description: "Beautiful outdoor swimming pool and lounging area",
                slides: [galleryPool21, galleryPool22, galleryPool23],
                slideDescriptions: [
                  "Infinity edge pool with villa complex view",
                  "Poolside deck with cabanas and bar area",
                  "Evening ambiance with underwater lighting"
                ]
              },
              { 
                image: luxuryVillaNight, 
                title: "Luxury Villa Evening", 
                description: "Premium villa with elegant night lighting",
                slides: [galleryNight1, galleryNight2, galleryNight3],
                slideDescriptions: [
                  "Exterior architectural lighting and landscaping",
                  "Warm interior lighting and cozy ambiance",
                  "Complete villa complex night illumination"
                ]
              }
            ].map((item, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
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
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold font-poppins">
                      {item.title}
                    </DialogTitle>
                    <DialogDescription asChild>
                      <div className="space-y-4">
                        <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src={item.slides[currentSlide[index] || 0]}
                            alt={`${item.title} - Slide ${(currentSlide[index] || 0) + 1}`}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Navigation buttons */}
                          <button
                            onClick={() => prevSlide(index, item.slides.length)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => nextSlide(index, item.slides.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                          
                          {/* Slide indicators */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                            {item.slides.map((_, slideIndex) => (
                              <button
                                key={slideIndex}
                                onClick={() => setCurrentSlide(prev => ({ ...prev, [index]: slideIndex }))}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                  (currentSlide[index] || 0) === slideIndex 
                                    ? 'bg-white' 
                                    : 'bg-white/50 hover:bg-white/75'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {item.slideDescriptions[currentSlide[index] || 0]}
                          </p>
                          <p className="text-sm text-muted-foreground/75 mt-2">
                            Image {(currentSlide[index] || 0) + 1} of {item.slides.length}
                          </p>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
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