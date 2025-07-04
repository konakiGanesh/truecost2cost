import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, AlertTriangle, Trophy, House } from "lucide-react";

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Registration",
      traditional: { status: "warning", text: "On Builder's Name", icon: AlertTriangle },
      truecost: { status: "success", text: "100% in Your Name", icon: CheckCircle }
    },
    {
      feature: "Hidden Costs",
      traditional: { status: "warning", text: "Inevitable", icon: AlertTriangle },
      truecost: { status: "error", text: "None", icon: XCircle }
    },
    {
      feature: "GST on Construction", 
      traditional: { status: "warning", text: "Added to Cost", icon: AlertTriangle },
      truecost: { status: "error", text: "Avoided", icon: XCircle }
    },
    {
      feature: "Developer Profit",
      traditional: { status: "warning", text: "Added to Cost", icon: AlertTriangle },
      truecost: { status: "success", text: "₹200 / sq.ft (Fixed Fee)", icon: CheckCircle }
    },
    {
      feature: "Material Control",
      traditional: { status: "error", text: "No Control", icon: XCircle },
      truecost: { status: "success", text: "Direct by Customer", icon: CheckCircle }
    },
    {
      feature: "Guardian Oversight",
      traditional: { status: "error", text: "Not Allowed", icon: XCircle },
      truecost: { status: "success", text: "Optional", icon: CheckCircle }
    },
    {
      feature: "Final Ownership",
      traditional: { status: "warning", text: "Delayed", icon: Trophy },
      truecost: { status: "success", text: "From the Start", icon: CheckCircle }
    }
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "success":
        return "text-success bg-success/10 border-success/20";
      case "error":
        return "text-destructive bg-destructive/10 border-destructive/20";
      case "warning":
        return "text-warning bg-warning/10 border-warning/20";
      default:
        return "text-muted-foreground bg-muted border-border";
    }
  };

  return (
    <section id="comparison" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-foreground">
            Why Choose TrueCost2Cost?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-poppins">
            See how we compare with traditional builders and why transparency makes all the difference
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-elegant">
            <CardHeader className="bg-gradient-primary text-primary-foreground">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <CardTitle className="text-xl font-poppins">Feature</CardTitle>
                </div>
                <div className="text-center">
                  <CardTitle className="text-xl font-poppins">Traditional Builders</CardTitle>
                </div>
                <div className="text-center bg-secondary rounded-lg py-2">
                  <CardTitle className="text-xl font-poppins text-secondary-foreground">
                    TRUE COST2COST
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              {comparisonData.map((row, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-3 gap-4 p-6 border-b border-border/50 ${
                    index % 2 === 0 ? 'bg-background' : 'bg-muted/20'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="font-semibold font-poppins text-foreground">
                      {row.feature}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg border ${getStatusStyles(row.traditional.status)}`}>
                      <row.traditional.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{row.traditional.text}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg border ${getStatusStyles(row.truecost.status)}`}>
                      <row.truecost.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{row.truecost.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Key Benefits Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center p-6 bg-success/5 border-success/20">
              <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="font-semibold font-poppins text-lg mb-2">100% Transparency</h3>
              <p className="text-muted-foreground text-sm">No hidden costs or surprise charges</p>
            </Card>
            
            <Card className="text-center p-6 bg-primary/5 border-primary/20">
              <House className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold font-poppins text-lg mb-2">Complete Control</h3>
              <p className="text-muted-foreground text-sm">You choose every material and finish</p>
            </Card>
            
            <Card className="text-center p-6 bg-secondary/5 border-secondary/20">
              <Trophy className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold font-poppins text-lg mb-2">Immediate Ownership</h3>
              <p className="text-muted-foreground text-sm">Land registered in your name from day 1</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;