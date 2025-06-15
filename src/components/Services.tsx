
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Computer, Smartphone, Printer, Wrench, Laptop, Website } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Computer Troubleshooting",
      description: "Expert diagnosis and repair of desktop computers, including hardware and software issues, virus removal, and performance optimization.",
      icon: Computer,
      features: ["Hardware Diagnostics", "Software Issues", "Virus Removal", "Performance Tuning"],
      color: "text-blue-600"
    },
    {
      title: "Laptop Repair",
      description: "Professional laptop repair services including screen replacement, keyboard fixes, battery issues, and motherboard repairs.",
      icon: Laptop,
      features: ["Screen Replacement", "Keyboard Repair", "Battery Service", "Motherboard Repair"],
      color: "text-green-600"
    },
    {
      title: "Mobile Device Repair",
      description: "Comprehensive mobile phone and tablet repair services for all major brands and models.",
      icon: Smartphone,
      features: ["Screen Repair", "Battery Replacement", "Water Damage", "Software Issues"],
      color: "text-purple-600"
    },
    {
      title: "Printer Services",
      description: "Complete printer repair and maintenance services for all types of printers, including setup and troubleshooting.",
      icon: Printer,
      features: ["Printer Repair", "Maintenance", "Setup & Install", "Troubleshooting"],
      color: "text-orange-600"
    },
    {
      title: "Website Design",
      description: "Custom website design and development services to help your business establish a strong online presence.",
      icon: Website,
      features: ["Custom Design", "Responsive Layout", "SEO Optimization", "Maintenance"],
      color: "text-red-600"
    },
    {
      title: "IT Support",
      description: "General IT support and consulting services to keep your technology running smoothly.",
      icon: Wrench,
      features: ["Technical Support", "System Setup", "Data Recovery", "IT Consulting"],
      color: "text-teal-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive IT solutions and repair services to keep your technology running smoothly. 
              From computers to mobile devices, we've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className={`h-8 w-8 ${service.color}`} />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="mr-2 mb-2">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
