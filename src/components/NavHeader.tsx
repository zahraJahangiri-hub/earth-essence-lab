import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export function NavHeader() {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Carboform</span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#mission" className="text-foreground hover:text-primary transition-colors">
            Mission
          </a>
          <a href="#technology" className="text-foreground hover:text-primary transition-colors">
            Technology
          </a>
          <a href="#impact" className="text-foreground hover:text-primary transition-colors">
            Impact
          </a>
          <a href="#partners" className="text-foreground hover:text-primary transition-colors">
            Partners
          </a>
        </nav>

        {/* CTA Button */}
        <Button variant="hero" className="hidden md:inline-flex">
          Get in Touch
        </Button>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
}