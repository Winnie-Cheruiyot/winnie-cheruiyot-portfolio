
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Data Analyst & Software Developer";
  
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-rose-50 to-red-100 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-red-100 text-red-800 inline-flex items-center">
            <span className="typing-text">{displayText}</span>
            <span className="animate-pulse ml-1">|</span>
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Winnie Cheruiyot
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experienced Data Analyst with 5+ years in freelancing, project management, and education. 
            Passionate about transforming data into actionable insights and building innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8 py-3"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-3"
            >
              Contact Me
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Badge variant="secondary">Data Science</Badge>
            <Badge variant="secondary">Machine Learning</Badge>
            <Badge variant="secondary">Project Management</Badge>
            <Badge variant="secondary">Education</Badge>
            <Badge variant="secondary">Software Development</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
