
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-teal-50 to-purple-100 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Data Analyst & Software Developer</Badge>
          
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
