import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Import project images
import sentimentAnalysisImg from "@/assets/sentiment-analysis-project.jpg";
import fruitDetectionImg from "@/assets/fruit-detection-project.jpg";
import cropFertilizerImg from "@/assets/crop-fertilizer-project.jpg";
import emotionDetectionImg from "@/assets/emotion-detection-project.jpg";
import trafficSystemImg from "@/assets/traffic-system-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Sentiment Analysis using NLP",
      description:
        "Advanced sentiment analysis system using LSTM networks, Word2Vec embeddings, and TF-IDF with integrated chatbot functionality for real-time text analysis.",
      image: sentimentAnalysisImg,
      technologies: ["Python", "LSTM", "Word2Vec", "TF-IDF", "NLP", "Chatbot"],
      category: "Natural Language Processing",
      repoLink: "https://github.com/deepannavakumar2004/sentiment-analysis",
      demoLink: "https://deepan-sentiment-demo.netlify.app"
    },
    {
      title: "Rotten Fruit Detection using CNNs & OpenCV",
      description:
        "Computer vision system that accurately detects and classifies rotten fruits using Convolutional Neural Networks and OpenCV for real-time image processing.",
      image: fruitDetectionImg,
      technologies: ["Python", "CNNs", "OpenCV", "Computer Vision", "Image Processing"],
      category: "Computer Vision",
      repoLink: "https://github.com/deepannavakumar2004/rotten-fruit-detection",
      demoLink: "#"
    },
    {
      title: "Crop & Fertilizer Detection",
      description:
        "Smart agriculture solution using Random Forest and SVM algorithms with a Streamlit web interface for crop analysis and fertilizer recommendations.",
      image: cropFertilizerImg,
      technologies: ["Python", "Random Forest", "SVM", "Streamlit", "Agriculture AI"],
      category: "Agricultural AI",
      repoLink: "https://github.com/deepannavakumar2004/crop-fertilizer-detection",
      demoLink: "#"
    },
    {
      title: "Real-Time Emotion Detection",
      description:
        "CNN-based facial emotion recognition system using OpenCV for real-time detection and classification of human emotions with high accuracy.",
      image: emotionDetectionImg,
      technologies: ["Python", "CNNs", "OpenCV", "Facial Recognition", "Real-time Processing"],
      category: "Computer Vision",
      repoLink: "https://github.com/deepannavakumar2004/emotion-detection",
      demoLink: "#"
    },
    {
      title: "AI-Based Traffic Management System",
      description:
        "Intelligent traffic management solution combining LSTM networks, ARIMA models, and computer vision for traffic flow optimization and prediction.",
      image: trafficSystemImg,
      technologies: ["Python", "LSTM", "ARIMA", "Computer Vision", "Traffic Analysis"],
      category: "Smart Cities",
      repoLink: "https://github.com/deepannavakumar2004/traffic-management-system",
      demoLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-text-muted text-lg mt-6 max-w-2xl mx-auto">
            Innovative AI/ML solutions addressing real-world challenges across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover-lift shadow-custom-lg border-0 bg-surface-elevated group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/70 text-white border-0 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs px-2 py-1 bg-gradient-subtle hover:bg-gradient-primary hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs px-2 py-1 bg-muted">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button 
                    asChild
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary-hover text-xs"
                  >
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    asChild
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white text-xs"
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
