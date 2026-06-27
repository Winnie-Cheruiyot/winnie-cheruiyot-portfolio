
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "Python", level: 95 },
  { name: "SQL", level: 90 },
  { name: "Power BI", level: 88 },
  { name: "Excel / Google Sheets", level: 92 },
  { name: "Data Visualization", level: 90 },
  { name: "Statistical Analysis", level: 85 },
  { name: "Machine Learning", level: 80 },
  { name: "R Programming", level: 75 },
  { name: "Tableau", level: 78 },
  { name: "Project Management", level: 85 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedProgress = ({ value }: { value: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative h-2.5 w-full overflow-hidden rounded-full bg-secondary">
      <motion.div
        className="h-full bg-primary rounded-full"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Proficiency across data analysis, visualization, and software development tools.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-none shadow-sm">
                  <CardContent className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <AnimatedProgress value={skill.level} />
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

export default Skills;
