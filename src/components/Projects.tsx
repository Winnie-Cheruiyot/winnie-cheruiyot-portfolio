
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
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

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-auto">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
