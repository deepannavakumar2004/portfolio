import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Import images
import trafficSystemImg from "@/assets/traffic-system-project.jpg";
import foodSystemImg from "@/assets/food insecurity.png"; // replace if you have correct image
import deepfakeImg from "@/assets/deepfake.jpg"; // replace if needed

import sentimentAnalysisImg from "@/assets/sentimental analysis.png";


const Projects = () => {
  const topProjects = [
    {
      title: "AI-Based Traffic Management System",
      description:
        "Smart traffic signal control system using YOLOv8 and Streamlit for real-time vehicle detection, congestion analysis, and emergency prioritization.",
      image: trafficSystemImg,
      technologies: ["Python", "YOLOv8", "Streamlit", "Computer Vision"],
      category: "Smart Cities",
      repoLink: "https://github.com/deepannavakumar2004/traffic_density_detection",
      demoLink: "https://trafficdensitydetection.streamlit.app/"
    },
    {
      title: "Food Insecurity Risk & Trust Estimation System",
      description:
        "AI system for predicting food insecurity and ensuring fair aid distribution using ML models, clustering, and real-time tracking.",
      image: foodSystemImg,
      technologies: ["Python", "Machine Learning", "Streamlit", "Clustering"],
      category: "Social Impact AI",
      repoLink: "https://github.com/deepannavakumar2004/foodinsecuritypsnahackathon",
      demoLink: "#"
    },
    {
      title: "Deep Fake Detection",
      description:
        "Deep learning model to detect manipulated media with high accuracy, addressing misinformation challenges.",
      image: deepfakeImg,
      technologies: ["Python", "Deep Learning", "CNN", "Computer Vision"],
      category: "AI Security",
      repoLink: "https://github.com/deepannavakumar2004/deepfakedetectionusingcnn"
    }
  ];

  const otherProjects = [
    {
      title: "Sentimental Analysis using NLP",
      description:
        "Sentimetal analysis using NLP",
      image: sentimentAnalysisImg,
      technologies: ["Python","Tf-Idf" , "NLP"],
      category: "NLP",
      repoLink: "https://github.com/deepannavakumar2004/sentimentalanalysisusingnlp",
      demoLink: "#"
    }
  ];

  const renderProjects = (projects: any[]) =>
    projects.map((project, index) => (
      <Card
        key={index}
        className="overflow-hidden hover-lift shadow-custom-lg border-0 bg-surface-elevated group"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-text-secondary">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, i: number) => (
              <Badge key={i}>{tech}</Badge>
            ))}
          </div>

          <div className="flex gap-3">
            <Button asChild size="sm" className="flex-1">
              <a href={project.repoLink} target="_blank">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>

            {project.demoLink && project.demoLink !== "#" && (
  <Button asChild size="sm" variant="outline" className="flex-1">
    <a href={project.demoLink} target="_blank">
      <ExternalLink className="w-4 h-4 mr-2" />
      Demo
    </a>
  </Button>
)}
          </div>
        </div>
      </Card>
    ));

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">

        {/* Top Projects */}
        <h2 className="text-3xl font-bold mb-6 text-center">
          🔥 Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {renderProjects(topProjects)}
        </div>

        {/* Other Projects */}
        <h2 className="text-3xl font-bold mb-6 text-center">
          🚀 Other Projects
        </h2>

        <div className="flex justify-center">
  <div className="w-full md:w-1/2 lg:w-1/3">
    {renderProjects(otherProjects)}
  </div>
</div>

      </div>
    </section>
  );
};

export default Projects;