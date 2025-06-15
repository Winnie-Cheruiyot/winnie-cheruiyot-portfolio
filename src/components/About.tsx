
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Winnbarn Innovative Solutions</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/lovable-uploads/a6162e09-b32b-4810-8495-7b47e16bce78.png" 
                alt="Winnbarn Innovative Solutions" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Winnbarn Innovative Solutions is your trusted local IT service provider in Lodwar, Turkana County. 
                We specialize in comprehensive computer repair, mobile device solutions, printer services, 
                and professional website design.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team is dedicated to providing reliable, affordable, and efficient technology solutions 
                for both individuals and businesses. With years of experience in the IT industry, 
                we ensure your devices are running at their best.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold text-blue-600">100+</CardTitle>
                    <CardDescription>Devices Repaired</CardDescription>
                  </CardHeader>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold text-green-600">24/7</CardTitle>
                    <CardDescription>Customer Support</CardDescription>
                  </CardHeader>
                </Card>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Expert technicians with years of experience</li>
                  <li>• Affordable and transparent pricing</li>
                  <li>• Quick turnaround times</li>
                  <li>• Quality parts and components</li>
                  <li>• Local business serving Turkana County</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
