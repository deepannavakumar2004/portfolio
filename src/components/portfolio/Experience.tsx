import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experienceData = {
    title: "Machine Learning Intern",
    company: "Teachnook",
    duration: "Sep–Oct 2023",
    location: "Remote",
    description: "Gained hands-on experience in supervised and unsupervised learning, NLP, and computer vision technologies.",
    achievements: [
      "Built ML models for healthcare AI applications",
      "Developed sentiment analysis systems using NLP techniques", 
      "Created automation solutions using machine learning",
      "Worked with real-world datasets and deployment pipelines"
    ],
    technologies: ["Python", "TensorFlow", "Scikit-learn", "NLP", "Computer Vision", "Healthcare AI"]
  };

  return (
    <section id="experience" className="py-20 px-4 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 hover-lift shadow-custom-lg border-0 bg-surface-elevated animate-slide-up">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-primary text-white">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary">
                        {experienceData.title}
                      </h3>
                      <p className="text-lg font-semibold text-primary">
                        {experienceData.company}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:items-end gap-2">
                  <div className="flex items-center gap-2 text-text-secondary">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{experienceData.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary">
                    <MapPin className="w-4 h-4" />
                    <span>{experienceData.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed text-lg">
                {experienceData.description}
              </p>

              {/* Achievements */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-text-primary">
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {experienceData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                      <span className="text-text-secondary leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-text-primary">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experienceData.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary" 
                      className="px-3 py-1 bg-gradient-subtle hover:bg-gradient-primary hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;