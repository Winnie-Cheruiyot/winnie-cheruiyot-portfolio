
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/lovable-uploads/a6162e09-b32b-4810-8495-7b47e16bce78.png" 
                alt="Winnie Cheruiyot" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate Data Analyst with over 5 years of experience in transforming complex data 
                into meaningful insights. My journey spans across freelancing, project management, and education, 
                giving me a unique perspective on problem-solving and team leadership.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Currently pursuing an MBA in Financial Engineering at WorldQuant University while being 
                a scholar at PLP for software development. I believe in continuous learning and applying 
                cutting-edge technologies to solve real-world problems.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold text-blue-600">5+</CardTitle>
                    <CardDescription>Years Experience</CardDescription>
                  </CardHeader>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold text-green-600">15+</CardTitle>
                    <CardDescription>Projects Completed</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
