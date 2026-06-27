import { motion } from "framer-motion";
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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Winnie Cheruiyot</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Looking for data insights to drive your business forward? I'd love to discuss 
                how we can work together to unlock the potential in your data. Let's connect 
                and explore opportunities for collaboration.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Contact Information</h4>
                  <div className="space-y-3 text-muted-foreground">
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
                        <p>Lodwar, Turkana County, Kenya</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Specializations</h4>
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
                  <h4 className="font-semibold text-foreground mb-3">Availability</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Weekend: By appointment</p>
                    <p className="text-sm text-primary font-medium">Remote work available</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Card className="hover:shadow-xl transition-shadow duration-300">
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
                    
                    <Button type="submit" className="w-full hover:shadow-lg transition-shadow duration-300">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
