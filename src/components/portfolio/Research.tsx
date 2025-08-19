import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, FileText, Users } from "lucide-react";

const Research = () => {
  const achievements = [
    {
      type: "Research Achievement",
      title: "Runner-up in Aisthetica 2K25",
      description: "Recognized for outstanding AI Healthcare research paper presentation, demonstrating innovative applications of machine learning in medical diagnostics.",
      icon: <Trophy className="w-6 h-6" />,
      highlight: "AI Healthcare Paper",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      type: "Competition Success", 
      title: "Top 10 in 24-hr Hackathon",
      description: "Achieved top 10 position at Kalasalingam University hackathon and received IBM Consolation Prize for innovative AI solution development.",
      icon: <Award className="w-6 h-6" />,
      highlight: "IBM Consolation Prize",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      type: "Publication Record",
      title: "Published AIML Research Papers",
      description: "Successfully published multiple research papers in the field of AI and Machine Learning, contributing to academic knowledge and industry insights.",
      icon: <FileText className="w-6 h-6" />,
      highlight: "Multiple Publications",
      gradient: "from-green-500 to-teal-600"
    },
    {
      type: "Project Portfolio",
      title: "6+ ML Projects Deployed",
      description: "Successfully developed and deployed over 6 machine learning projects, ranging from healthcare AI to traffic management systems with real-world applications.",
      icon: <Users className="w-6 h-6" />,
      highlight: "Real-world Impact",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="research" className="py-20 px-4 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Research & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-text-muted text-lg mt-6 max-w-2xl mx-auto">
            Recognition and contributions to the AI/ML research community through competitions, publications, and innovative projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="p-8 hover-lift shadow-custom-lg border-0 bg-surface-elevated group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1 space-y-2">
                    <Badge variant="secondary" className="text-xs font-medium bg-gradient-subtle">
                      {achievement.type}
                    </Badge>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed">
                  {achievement.description}
                </p>

                {/* Highlight */}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-primary font-semibold text-sm">
                    {achievement.highlight}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "6+", label: "Projects Deployed" },
            { number: "2+", label: "Research Papers" },
            { number: "1", label: "Hackathon Award" },
            { number: "1", label: "Research Recognition" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center space-y-2 animate-fade-in"
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text">
                {stat.number}
              </div>
              <div className="text-text-secondary font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;