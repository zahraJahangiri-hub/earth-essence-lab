import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function PartnersSection() {

  return (
    <section id="partners" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Supported <span className="text-primary">By</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Backed by leading research institutions and innovation organizations driving sustainable transformation.
          </p>
        </div>

        {/* Supporter logos grid */}
        <div className="flex justify-center items-center gap-16 mb-16 flex-wrap">
          <div className="group flex flex-col items-center justify-center p-8 border border-border rounded-lg hover:border-primary/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              🏛️
            </div>
            <span className="text-lg font-semibold text-center text-muted-foreground group-hover:text-primary transition-colors">
              University of Toronto
            </span>
          </div>
          <div className="group flex flex-col items-center justify-center p-8 border border-border rounded-lg hover:border-primary/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              💫
            </div>
            <span className="text-lg font-semibold text-center text-muted-foreground group-hover:text-primary transition-colors">
              Impact Zero
            </span>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-subtle p-12 rounded-2xl border border-border/50 animate-scale-in">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Transform Your Waste Streams?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in creating a more sustainable future. Let's discuss how Carboform's technology 
            can help decarbonize your operations while creating new revenue streams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Download Our Whitepaper
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}