
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdf2f2] via-white to-[#f5e6e6]" />
      <div className="blob bg-primary/20 w-72 h-72 top-20 -left-20 animate-float-slow" />
      <div className="blob bg-primary/15 w-96 h-96 bottom-20 -right-20 animate-float" />
      <div className="blob bg-secondary/30 w-56 h-56 top-1/2 left-1/3 animate-pulse-glow" />
      <div className="blob bg-primary/10 w-80 h-80 top-10 right-1/4 animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="blob bg-secondary/20 w-64 h-64 bottom-10 left-1/4 animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <span className="typing-text">Data Analyst & Insights Specialist</span>
            </Badge>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Winnie Cheruiyot
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Transforming data into actionable insights to drive business decisions and growth.
            Passionate about uncovering patterns and stories hidden in data.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
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
              Get In Touch
            </Button>
          </motion.div>
          
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">SQL</Badge>
            <Badge variant="secondary">Power BI</Badge>
            <Badge variant="secondary">Excel</Badge>
            <Badge variant="secondary">Data Visualization</Badge>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
