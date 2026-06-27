import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Freelance Data Analyst",
    duration: "2019 - Present",
    description: "5+ years of experience providing data analysis services to various clients, specializing in data visualization, statistical analysis, and business intelligence solutions.",
    skills: ["Data Analysis", "Python", "R", "SQL", "Tableau", "Power BI"]
  },
  {
    title: "Project Manager",
    company: "Lokichar Vocational Training Centre",
    duration: "2021 - 2024",
    description: "Led multiple educational and infrastructure projects, managing teams and ensuring successful project delivery within budget and timeline constraints.",
    skills: ["Project Management", "Team Leadership", "Budget Management", "Strategic Planning"]
  },
  {
    title: "ICT Instructor",
    company: "Turkana County",
    duration: "2016 - 2021",
    description: "Taught ICT courses and developed curriculum for various educational programs, mentoring students in computer literacy and basic programming concepts.",
    skills: ["Education", "Curriculum Development", "ICT Training", "Mentoring"]
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Professional Experience
          </motion.h2>
          
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{exp.title}</CardTitle>
                        {exp.company && <CardDescription className="text-lg font-medium text-foreground/80">{exp.company}</CardDescription>}
                      </div>
                      <Badge variant="outline" className="text-sm">{exp.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                      ))}
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

export default Experience;
