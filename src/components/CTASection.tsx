import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";

export const CTASection = () => {
  const { selectedCountry } = useCountry();
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-lg rotate-45 animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border border-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 border border-white rounded-lg rotate-12 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Currency Icons */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">
            $
          </div>
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {selectedCountry.currencySymbol}
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">
            ₵
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-white animate-pulse-glow" />
            <span className="text-white/90 font-semibold">Ready to Beat Inflation?</span>
            <Sparkles className="w-6 h-6 text-white animate-pulse-glow" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Join thousands already{" "}
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              saving smarter
            </span>
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Protect your money from local currency inflation. Hold value in USD & USDT. 
            Withdraw anywhere in the world. Start your financial freedom journey today.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap gap-6 justify-center mb-10 text-white/90">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Beat inflation daily</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              <span>Setup in 2 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>No monthly fees</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary hover:shadow-elegant group"
            >
              Open Your Konlo Wallet Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="xl"
              className="text-white border-2 border-white/30 hover:bg-white/10 hover:border-white"
            >
              Watch Demo Video
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse-glow"></div>
              <span>Trusted by 15,000+ users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
              <span>$12M+ protected from inflation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
              <span>Active in 25+ countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};