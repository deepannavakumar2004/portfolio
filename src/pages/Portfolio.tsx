import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Research from "@/components/portfolio/Research";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Contact />
      <Footer />
    </main>
  );
};

export default Portfolio;