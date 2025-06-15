
import { Badge } from "@/components/ui/badge";
import { Github, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Winnbarn Innovative Solutions</h3>
          <p className="text-gray-300 mb-6">
            IT Solutions • Computer Repair • Mobile Services • Website Design
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary">Expert Technicians</Badge>
            <Badge variant="secondary">Local Business</Badge>
            <Badge variant="secondary">24/7 Support</Badge>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
            <div>
              <h4 className="font-semibold mb-3">Contact Info</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>📧 winnbarn01@gmail.com</p>
                <p>📱 0737731566</p>
                <p>📍 Lodwar Town, Turkana County</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>Computer Troubleshooting</p>
                <p>Laptop & Mobile Repair</p>
                <p>Printer Services</p>
                <p>Website Design</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Business Hours</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>Mon-Fri: 8AM - 6PM</p>
                <p>Saturday: 9AM - 4PM</p>
                <p>Sunday: Emergency only</p>
                <p className="text-blue-400">24/7 Customer Support</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:winnbarn01@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              title="Email Us"
            >
              <Github size={24} />
            </a>
            <a 
              href="tel:0737731566" 
              className="text-gray-400 hover:text-white transition-colors"
              title="Call Us"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              title="Follow Us"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              title="Subscribe"
            >
              <Youtube size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2025 Winnbarn Innovative Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
