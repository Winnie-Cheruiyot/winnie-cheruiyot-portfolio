
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Winnbarn Solutions</h1>
        
        <nav className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-gray-600 hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <Button onClick={() => scrollToSection('contact')} className="hidden md:block">
          Get Support
        </Button>
      </div>
    </header>
  );
};

export default Header;
