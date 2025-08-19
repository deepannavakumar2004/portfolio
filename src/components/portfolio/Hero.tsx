import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import deepanPortrait from "@/assets/deepan-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="gradient-text">Deepan</span> 👋
              </h1>
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-secondary">
                  AI/ML Developer & Innovator
                </h2>
                <p className="text-xl sm:text-2xl text-text-muted max-w-2xl text-balance">
                  Passionate about building intelligent systems that make life easier
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* View Resume Button */}
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-hover shadow-custom-lg group"
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  View Resume
                </a>
              </Button>

              {/* Contact Me Button */}
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-custom group"
              >
                <a href="mailto:deepannavakumar2004@gmail.com">
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
              <img
                src={deepanPortrait}
                alt="Deepan A N - AI/ML Developer"
                className="relative w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-full shadow-custom-xl hover-lift glow-border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
