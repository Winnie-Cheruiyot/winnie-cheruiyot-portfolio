import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import winnieAsset from "@/assets/winnie-about.jpeg.asset.json";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src={winnieAsset.url}
                alt="Winnie Cheruiyot" 
                className="rounded-lg shadow-lg w-full h-96 object-cover hover:shadow-2xl transition-shadow duration-300"
              />
            </motion.div>
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Winnie Cheruiyot, a passionate Data Analyst dedicated to transforming raw data 
                into meaningful insights that drive business decisions. With expertise in statistical 
                analysis, data visualization, and predictive modeling, I help organizations unlock 
                the power of their data.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My analytical approach combines technical skills with business acumen to deliver 
                actionable recommendations. I specialize in identifying trends, patterns, and 
                opportunities that contribute to organizational growth and efficiency.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Card className="hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold text-primary">50+</CardTitle>
                      <CardDescription>Projects Completed</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
                
                <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Card className="hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold text-green-600">5+</CardTitle>
                      <CardDescription>Years Experience</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </div>
              
              <motion.div
                className="bg-muted p-6 rounded-lg"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-semibold text-foreground mb-2">What I Offer</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Data Analysis & Statistical Modeling</li>
                  <li>• Business Intelligence & Reporting</li>
                  <li>• Data Visualization & Dashboard Creation</li>
                  <li>• Predictive Analytics & Forecasting</li>
                  <li>• Database Management & Optimization</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
