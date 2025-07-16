import { Button } from "@/components/ui/button";
import { Banknote, DollarSign, ArrowLeftRight, Shield } from "lucide-react";

const steps = [
  {
    icon: Banknote,
    title: "Deposit your local currency easily",
    description: "Add money from your local bank account in ₦, ₵, R$, or any supported currency",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: DollarSign,
    title: "See your money secured in USD & USDT instantly",
    description: "Your local currency is converted and held in stable USD and USDT at real-time rates",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: ArrowLeftRight,
    title: "Withdraw to local banks, USD accounts, or any USDT wallet",
    description: "Access your money anywhere - local banks, international USD accounts, or crypto wallets",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Shield,
    title: "Beat inflation, save smart, stay free",
    description: "Your savings maintain their value while you enjoy complete financial freedom",
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Local Savings.{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Dollar Power.
            </span>{" "}
            Total Control.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to protect your money from inflation and unlock global financial freedom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="relative group animate-fade-in-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0"></div>
                )}
                
                <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 ${step.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${step.color}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Button variant="secondary" size="lg" className="group">
            Get Started in 2 Minutes
            <ArrowLeftRight className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};