import { Shield, Lock, CheckCircle, Award, Globe, Users } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Local bank partnerships",
    description: "Seamless deposits and withdrawals through trusted banking networks",
    color: "text-primary"
  },
  {
    icon: CheckCircle,
    title: "Regulated stablecoin rails",
    description: "Built on Aptos and other institutional-grade blockchain networks",
    color: "text-secondary"
  },
  {
    icon: Award,
    title: "Industry-grade KYC & anti-fraud",
    description: "Advanced identity verification and fraud prevention systems",
    color: "text-accent"
  },
  {
    icon: Lock,
    title: "Encrypted vaults",
    description: "Your funds are secured with bank-level encryption and custody",
    color: "text-primary"
  }
];

const complianceBadges = [
  { name: "SOC 2 Type II", icon: Award },
  { name: "PCI DSS", icon: Shield },
  { name: "ISO 27001", icon: Lock },
  { name: "GDPR", icon: Users }
];

export const SecuritySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Savings.{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Fort Knox Secure.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We use the same security standards as major banks to protect your money.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group animate-fade-in-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-subtle rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <IconComponent className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Compliance Section */}
        <div className="bg-card rounded-2xl p-8 shadow-card animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Regulatory Compliance
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Konlo is fully compliant with international financial regulations and maintains the highest standards of data protection and financial security.
              </p>
              
              {/* Compliance Badges */}
              <div className="grid grid-cols-2 gap-4">
                {complianceBadges.map((badge, index) => {
                  const IconComponent = badge.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gradient-subtle rounded-lg hover:shadow-card transition-all duration-300"
                    >
                      <IconComponent className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-foreground">
                        {badge.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="w-full h-64 bg-gradient-hero rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Animated Shield */}
                <Shield className="w-24 h-24 text-white animate-pulse-glow" />
                
                {/* Floating Security Icons */}
                <Lock className="absolute top-4 left-4 w-6 h-6 text-white/70 animate-float" />
                <CheckCircle className="absolute top-4 right-4 w-6 h-6 text-white/70 animate-float" style={{ animationDelay: '1s' }} />
                <Award className="absolute bottom-4 left-4 w-6 h-6 text-white/70 animate-float" style={{ animationDelay: '2s' }} />
                <Globe className="absolute bottom-4 right-4 w-6 h-6 text-white/70 animate-float" style={{ animationDelay: '1.5s' }} />
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                    {[...Array(64)].map((_, i) => (
                      <div 
                        key={i} 
                        className="border border-white/20 animate-pulse-glow" 
                        style={{ animationDelay: `${i * 0.05}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-3 shadow-elegant">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse-glow"></div>
                  <span className="text-sm font-semibold text-foreground">100% Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};