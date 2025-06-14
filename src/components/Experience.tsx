
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
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

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      {exp.company && <CardDescription className="text-lg font-medium text-gray-700">{exp.company}</CardDescription>}
                    </div>
                    <Badge variant="outline" className="text-sm">{exp.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
