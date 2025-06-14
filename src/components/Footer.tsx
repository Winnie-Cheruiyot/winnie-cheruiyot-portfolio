
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Winnie Cheruiyot</h3>
          <p className="text-gray-300 mb-6">
            Data Analyst • Project Manager • Educator • AI Enthusiast
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary">Available for Freelance</Badge>
            <Badge variant="secondary">Open to Opportunities</Badge>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 Winnie Cheruiyot. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
