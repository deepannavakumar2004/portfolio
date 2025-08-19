import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-surface border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-text-secondary">
            <span>© {currentYear} Deepan A N | Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>and AI</span>
          </div>
          <p className="text-text-muted text-sm">
            Passionate about creating intelligent systems that make a difference
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;