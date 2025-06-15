import { Badge } from "@/components/ui/badge";
import { Github, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Winnie Cheruiyot</h3>
          <p className="text-gray-300 mb-6">
            Data Analyst • Business Intelligence • Data Visualization
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary">Data Analysis</Badge>
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">SQL</Badge>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
            <div>
              <h4 className="font-semibold mb-3">Contact Info</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>📧 winnbarn01@gmail.com</p>
                <p>📱 +254737731566</p>
                <p>📍 Nairobi, Kenya</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>Data Analysis</p>
                <p>Business Intelligence</p>
                <p>Data Visualization</p>
                <p>Statistical Modeling</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Availability</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>Mon-Fri: 9AM - 6PM</p>
                <p>Weekend: By appointment</p>
                <p className="text-blue-400">Remote work available</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:winnbarn01@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              title="Email Me"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              title="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              title="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2025 Winnie Cheruiyot. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
