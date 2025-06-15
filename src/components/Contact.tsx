import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Winnie Cheruiyot</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Looking for data insights to drive your business forward? I'd love to discuss 
                how we can work together to unlock the potential in your data. Let's connect 
                and explore opportunities for collaboration.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Contact Information</h4>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📧</span>
                      <div>
                        <p className="font-medium">Email</p>
                        <p>winnbarn01@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📱</span>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p>+254737731566</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📍</span>
                      <div>
                        <p className="font-medium">Location</p>
                        <p>Nairobi, Kenya</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Data Analysis</Badge>
                    <Badge>Python</Badge>
                    <Badge>SQL</Badge>
                    <Badge>Power BI</Badge>
                    <Badge>Excel</Badge>
                    <Badge>Statistics</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Availability</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Weekend: By appointment</p>
                    <p className="text-sm text-blue-600 font-medium">Remote work available</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your full name" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+254 7xx xxx xxx" />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Project Type</Label>
                    <Input id="service" placeholder="e.g., Data analysis, Dashboard creation" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or data needs..." 
                      className="min-h-[120px]" 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
