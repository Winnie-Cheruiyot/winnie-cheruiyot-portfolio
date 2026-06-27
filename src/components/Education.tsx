import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "MBA Financial Engineering",
    institution: "WorldQuant University",
    status: "Currently Studying",
    description: "Advanced studies in financial modeling, quantitative analysis, and engineering principles applied to finance.",
    type: "Graduate Degree"
  },
  {
    degree: "Software Development Program",
    institution: "PLP (Power Learn Project)",
    status: "Scholar",
    description: "Comprehensive software development training covering modern programming languages and frameworks.",
    type: "Professional Development"
  },
  {
    degree: "Data Science and AI Badge",
    institution: "WorldQuant University",
    status: "Completed",
    description: "Specialized certification in data science methodologies, machine learning algorithms, and artificial intelligence applications.",
    type: "Certification"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Education & Certifications
          </motion.h2>
          
          <motion.div
            className="grid md:grid-cols-1 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-transparent hover:border-primary/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-medium text-foreground/80">{edu.institution}</CardDescription>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant={edu.status === "Currently Studying" ? "default" : "secondary"}>
                          {edu.status}
                        </Badge>
                        <Badge variant="outline">{edu.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
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

export default Education;
