import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Leaf, Factory } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
            Transforming Waste Into
            <br />
            <span className="text-primary">Bio-Aromatics</span>
          </h1>
          
          {/* Supporting text */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Carboform is on a mission to decarbonize the hard-to-abate chemicals and fuels sectors 
            through innovative waste transformation technology.
          </p>
          
          {/* Key points */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10 text-sm md:text-base">
            <div className="flex items-center gap-2 text-foreground">
              <Recycle className="w-5 h-5 text-primary" />
              <span>Waste to Value</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Leaf className="w-5 h-5 text-accent" />
              <span>Carbon Reduction</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Factory className="w-5 h-5 text-earth" />
              <span>Industrial Innovation</span>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 animate-glow-pulse"
            >
              Discover Our Technology
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              Our Environmental Impact
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}