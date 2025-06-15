
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
                I'm Winnie Cheruiyot, a passionate Data Analyst dedicated to transforming raw data 
                into meaningful insights that drive business decisions. With expertise in statistical 
                analysis, data visualization, and predictive modeling, I help organizations unlock 
                the power of their data.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                My analytical approach combines technical skills with business acumen to deliver 
                actionable recommendations. I specialize in identifying trends, patterns, and 
                opportunities that contribute to organizational growth and efficiency.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold text-blue-600">50+</CardTitle>
                    <CardDescription>Projects Completed</CardDescription>
                  </CardHeader>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold text-green-600">3+</CardTitle>
                    <CardDescription>Years Experience</CardDescription>
                  </CardHeader>
                </Card>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">What I Offer</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Data Analysis & Statistical Modeling</li>
                  <li>• Business Intelligence & Reporting</li>
                  <li>• Data Visualization & Dashboard Creation</li>
                  <li>• Predictive Analytics & Forecasting</li>
                  <li>• Database Management & Optimization</li>
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
