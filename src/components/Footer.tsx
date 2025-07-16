import { Globe, Mail, Twitter, Linkedin, Github, Shield, Award } from "lucide-react";

const footerLinks = {
  product: [
    { name: "How it Works", href: "#how-it-works" },
    { name: "Security", href: "#security" },
    { name: "Pricing", href: "#pricing" },
    { name: "Mobile App", href: "#app" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" }
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "API Docs", href: "/docs" },
    { name: "Status", href: "/status" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Compliance", href: "/compliance" }
  ]
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/konlo" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/konlo" },
  { name: "GitHub", icon: Github, href: "https://github.com/konlo" }
];

const partnerLogos = [
  { name: "SOC 2", icon: Shield },
  { name: "PCI DSS", icon: Award },
  { name: "ISO 27001", icon: Shield }
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                Konlo
              </h3>
              <p className="text-muted-foreground text-lg font-medium mb-2">
                Save Smart. Grow Globally.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Protect your money from local currency inflation with USD and USDT savings. 
                Access your funds anywhere in the world.
              </p>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  aria-label="Email address for newsletter"
                />
                <button className="px-6 py-2 bg-gradient-hero text-primary-foreground rounded-lg font-semibold hover:shadow-elegant hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get updates on new features and market insights. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@konlo.io</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span className="text-sm">24/7 Global Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="border-t border-border pt-8 mb-8">
          <h4 className="text-sm font-semibold text-foreground mb-4 text-center">
            Trusted & Compliant
          </h4>
          <div className="flex justify-center gap-8">
            {partnerLogos.map((partner, index) => {
              const IconComponent = partner.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="text-sm font-medium">{partner.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              {footerLinks.legal.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-card transition-all duration-300"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 Konlo. All rights reserved. • Made with ❤️ for global financial freedom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};