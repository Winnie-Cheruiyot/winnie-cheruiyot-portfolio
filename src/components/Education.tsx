
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
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

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Education & Certifications</h2>
          
          <div className="grid md:grid-cols-1 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">{edu.institution}</CardDescription>
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
                  <p className="text-gray-600">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
