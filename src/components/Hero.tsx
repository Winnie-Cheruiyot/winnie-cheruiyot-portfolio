
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "IT Solutions & Computer Repair Services";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-800 inline-flex items-center">
            <span className="typing-text">{displayText}</span>
            <span className="animate-pulse ml-1">|</span>
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Winnbarn Innovative Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your trusted partner for computer repair, mobile device solutions, printer services, 
            and professional website design in Lodwar, Turkana County.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('services')}
              className="text-lg px-8 py-3"
            >
              Our Services
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-3"
            >
              Get Support
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Badge variant="secondary">Computer Repair</Badge>
            <Badge variant="secondary">Mobile Repair</Badge>
            <Badge variant="secondary">Printer Services</Badge>
            <Badge variant="secondary">Website Design</Badge>
            <Badge variant="secondary">IT Troubleshooting</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
