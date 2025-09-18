import { Card, CardContent } from "@/components/ui/card";
import { Atom, Beaker, Zap, Leaf } from "lucide-react";

export function MissionSection() {
  return (
    <section id="mission" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're pioneering breakthrough technology to transform industrial waste into valuable bio-aromatics, 
            creating a sustainable circular economy that benefits both industry and environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-scale-in">
          {/* Innovation Card */}
          <Card className="group hover:shadow-green transition-all duration-300 hover:-translate-y-2 border-border/50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-float">
                <Atom className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Advanced Chemistry</h3>
              <p className="text-muted-foreground">
                Cutting-edge molecular transformation processes that convert complex waste streams into high-value chemicals.
              </p>
            </CardContent>
          </Card>

          {/* Sustainability Card */}
          <Card className="group hover:shadow-green transition-all duration-300 hover:-translate-y-2 border-border/50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-earth rounded-full flex items-center justify-center group-hover:animate-float">
                <Leaf className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Sustainability</h3>
              <p className="text-muted-foreground">
                Dramatically reducing carbon footprint while creating economic value from previously discarded materials.
              </p>
            </CardContent>
          </Card>

          {/* Technology Card */}
          <Card className="group hover:shadow-green transition-all duration-300 hover:-translate-y-2 border-border/50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/90 rounded-full flex items-center justify-center group-hover:animate-float">
                <Beaker className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Bio-Processing</h3>
              <p className="text-muted-foreground">
                Proprietary bio-processing technology that efficiently converts waste into premium aromatic compounds.
              </p>
            </CardContent>
          </Card>

          {/* Scale Card */}
          <Card className="group hover:shadow-green transition-all duration-300 hover:-translate-y-2 border-border/50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-earth/90 rounded-full flex items-center justify-center group-hover:animate-float">
                <Zap className="w-8 h-8 text-earth-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Industrial Scale</h3>
              <p className="text-muted-foreground">
                Scalable solutions designed for industrial implementation across multiple sectors and waste streams.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}