import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How is my local money converted to USD/USDT?",
    answer: "When you deposit local currency, we use real-time exchange rates from multiple sources to ensure you get the best conversion rates. Your money is instantly converted and held in USD and USDT stablecoins for maximum stability and protection against inflation."
  },
  {
    question: "How do I withdraw my savings?",
    answer: "You have three withdrawal options: (1) Transfer back to your local bank account in your local currency, (2) Withdraw to any USD bank account globally, or (3) Send to any USDT wallet address. All withdrawals are processed within 24 hours."
  },
  {
    question: "What networks do you use for USDT?",
    answer: "We primarily use the Aptos blockchain for USDT transactions due to its speed, security, and low fees. We also support other major networks including Ethereum, Polygon, and Binance Smart Chain based on your preferences and needs."
  },
  {
    question: "Is Konlo regulated?",
    answer: "Yes, Konlo operates under strict financial regulations in all jurisdictions where we provide services. We maintain partnerships with licensed banks, comply with KYC/AML requirements, and follow international standards for financial data protection."
  },
  {
    question: "What fees will I pay?",
    answer: "We keep fees transparent and minimal: 0.5% for currency conversion, no monthly maintenance fees, free deposits from partner banks, and withdrawal fees starting from $2 for local transfers and $5 for international transfers."
  },
  {
    question: "How safe are my funds?",
    answer: "Your funds are protected through multiple layers of security: bank-grade encryption, cold storage for crypto assets, FDIC insurance for USD holdings, regulatory compliance, and 24/7 fraud monitoring. We use the same security standards as major financial institutions."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Got Questions?{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              We've Got Answers.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about protecting your savings with Konlo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-xl shadow-card hover:shadow-elegant transition-all duration-300">
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-300 rounded-xl"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 animate-fade-in"
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@konlo.io"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              Email Support
            </a>
            <a 
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Live Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};