import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PartnersSection() {
  const partners = [
    { name: "GreenTech Innovations", logo: "🌱" },
    { name: "Sustainable Futures Fund", logo: "♻️" },
    { name: "BioChemical Alliance", logo: "⚗️" },
    { name: "Carbon Neutral Initiative", logo: "🌍" },
    { name: "CleanTech Accelerator", logo: "⚡" },
    { name: "Circular Economy Foundation", logo: "🔄" }
  ];

  return (
    <section id="partners" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Collaborating with leading organizations to accelerate the transition to sustainable industrial processes.
          </p>
        </div>

        {/* Partner logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center p-6 border border-border rounded-lg hover:border-primary/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              <span className="text-sm text-center text-muted-foreground group-hover:text-primary transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
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
            <Button variant="hero" size="lg" className="text-lg px-8">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Download Our Whitepaper
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}