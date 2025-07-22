import { Star, MapPin } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";

const TestimonialsSection = () => {
  const { selectedCountry } = useCountry();

  const testimonials = [
  {
    name: "Blessing",
    location: "Lagos, Nigeria",
    flag: "🇳🇬",
    quote: "I save 40% of my salary in USD so my money doesn't melt away. Konlo made it so simple!",
    rating: 5,
    savings: `${selectedCountry.currencySymbol}2.5M saved`
  },
  {
    name: "Carlos",
    location: "Buenos Aires, Argentina",
    flag: "🇦🇷",
    quote: "I trust Konlo's USDT wallet when my peso loses value overnight. It's my financial lifeline.",
    rating: 5,
    savings: "$8,400 saved"
  },
  {
    name: "Amina",
    location: "Nairobi, Kenya",
    flag: "🇰🇪",
    quote: "It's like having a dollar account without the stress. My business savings are finally secure.",
    rating: 5,
    savings: "KSh 1.2M saved"
  }
];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How People Use{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Konlo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from people protecting their money and building their future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                      <span className="ml-1">{testimonial.flag}</span>
                    </div>
                  </div>
                </div>
                
                {/* Savings Badge */}
                <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.savings}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-4 relative">
                <span className="text-primary text-4xl absolute -top-2 -left-1 opacity-30">"</span>
                <p className="italic leading-relaxed pl-6">
                  {testimonial.quote}
                </p>
              </blockquote>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-accent text-accent" 
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  {testimonial.rating}.0
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Stats */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                15,000+
              </div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
                $12M+
              </div>
              <div className="text-sm text-muted-foreground">Protected</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                25+
              </div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection };