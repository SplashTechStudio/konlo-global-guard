import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-secondary rounded-lg rotate-45 animate-pulse-glow"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 border border-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Save in your{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  local currency.
                </span>
                <br />
                Hold in{" "}
                <span className="bg-gradient-secondary bg-clip-text text-transparent">
                  USD & USDT.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Konlo protects your savings from local currency inflation and unlocks borderless withdrawals.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Bank-grade security
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-secondary" />
                Global access
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                Beat inflation
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                className="group"
              >
                Start Saving Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('how-it-works')}
              >
                How It Works
              </Button>
            </div>

            {/* Social Proof */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground mb-2">
                Trusted by thousands across Nigeria, Ghana, Kenya, Brazil & more
              </p>
              <div className="flex items-center gap-1 justify-center lg:justify-start">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
                <span className="ml-2 text-sm font-semibold text-accent">4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Konlo currency conversion visualization showing local money transforming into USD and USDT"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-card animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span className="text-sm font-semibold text-foreground">+2.4% today</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-card animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">₦ → $</span>
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse-glow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};