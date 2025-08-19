import { Card } from "@/components/ui/card";
import { GraduationCap, Award, TrendingUp } from "lucide-react";

const About = () => {
  const educationData = [
    {
      degree: "B.Tech Information Technology",
      institution: "KLN College of Engineering",
      score: "CGPA 8.35",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "High School",
      score: "86.4%",
      icon: <Award className="w-6 h-6" />
    },
    {
      degree: "Secondary School Certificate", 
      institution: "Secondary School",
      score: "87.8%",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8 animate-slide-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-text-secondary leading-relaxed text-lg">
                I'm a 3rd-year B.Tech IT student with hands-on experience in Machine Learning, 
                Deep Learning, and AI-powered applications. I've worked on projects ranging from 
                healthcare AI to traffic management systems and I love turning complex data into 
                smart, real-world solutions.
              </p>
              <p className="text-text-muted leading-relaxed">
                My journey in AI/ML has been driven by curiosity and a passion for creating 
                technology that makes a meaningful impact. From sentiment analysis to computer 
                vision, I enjoy exploring the endless possibilities of artificial intelligence.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Education Highlights
            </h3>
            <div className="space-y-4">
              {educationData.map((item, index) => (
                <Card key={index} className="p-6 hover-lift shadow-custom border-0 bg-surface-elevated">
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">
                      {item.icon}
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-semibold text-text-primary">
                        {item.degree}
                      </h4>
                      <p className="text-text-secondary text-sm">
                        {item.institution}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-subtle text-primary font-medium text-sm">
                        {item.score}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;