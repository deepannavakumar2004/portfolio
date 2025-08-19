import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python (AI/ML)", "Java (OOPs)"],
      gradient: "from-accent-purple to-primary"
    },
    {
      title: "AI/ML Frameworks", 
      icon: <Brain className="w-6 h-6" />,
      skills: ["TensorFlow", "Scikit-learn", "OpenCV", "LSTM", "CNNs"],
      gradient: "from-primary to-accent-teal"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Streamlit", "Google Colab", "Jupyter Notebook", "Git & GitHub", "Power BI"],
      gradient: "from-accent-teal to-accent-purple"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-text-muted text-lg mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems and data-driven solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-8 hover-lift shadow-custom-lg border-0 bg-surface-elevated group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center space-y-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-primary">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-3 py-1 text-sm font-medium bg-gradient-subtle hover:bg-gradient-primary hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;