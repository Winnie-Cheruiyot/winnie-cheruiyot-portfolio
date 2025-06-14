
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
              <h3 className="text-2xl font-semibold mb-6">Let's Collaborate</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need data analysis, AI solutions, or project management expertise, 
                I'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Contact Information</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>📧 winnbarn01@gmail.com</p>
                    <p>📱 +254737731566</p>
                    <p>📍 Lodwar, Turkana County, Kenya</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Expertise Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Data Analysis</Badge>
                    <Badge>Machine Learning</Badge>
                    <Badge>Project Management</Badge>
                    <Badge>AI Development</Badge>
                    <Badge>Financial Engineering</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Available For</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Freelance Data Analysis Projects</li>
                    <li>• AI/ML Consulting</li>
                    <li>• Project Management Roles</li>
                    <li>• Educational Content Creation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project inquiry" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or opportunity..." 
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
