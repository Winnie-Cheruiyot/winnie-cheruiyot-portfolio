import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Cryptocurrency Chatbot",
    description: "Developed an intelligent chatbot for cryptocurrency trading guidance and market analysis using natural language processing and real-time data integration.",
    technologies: ["Python", "NLP", "API Integration", "Machine Learning"],
    category: "AI/ML"
  },
  {
    title: "AI Student Dropout Detection",
    description: "Created a predictive model to identify students at risk of dropping out using machine learning algorithms and educational data analytics.",
    technologies: ["Python", "Scikit-learn", "Data Analysis", "Predictive Modeling"],
    category: "Education AI"
  },
  {
    title: "Advanced Calculator Application",
    description: "Built a comprehensive calculator with advanced mathematical functions, statistical analysis capabilities, and data visualization features.",
    technologies: ["JavaScript", "React", "Mathematical Libraries"],
    category: "Web Application"
  },
  {
    title: "Amazon Reviews Analyzer",
    description: "Developed a sentiment analysis tool to process and analyze Amazon product reviews, providing insights into customer satisfaction and product performance.",
    technologies: ["Python", "Sentiment Analysis", "Data Mining", "Visualization"],
    category: "Data Analysis"
  },
  {
    title: "Plant Disease Detection AI",
    description: "Implemented a computer vision solution to detect and classify plant diseases using deep learning models and image processing techniques.",
    technologies: ["Python", "TensorFlow", "Computer Vision", "Image Processing"],
    category: "AI/Agriculture"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group border border-transparent hover:border-primary/20">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="group-hover:bg-primary/10 transition-colors duration-300">{project.category}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 mt-auto">
                      <Button variant="outline" className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        View Details
                      </Button>
                      <Button variant="default" className="flex-1">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
