import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "arnavakumar1973@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:arnavakumar1973@gmail.com",
      gradient: "from-red-500 to-pink-600"
    },
    {
      type: "Phone", 
      value: "6379041944",
      icon: <Phone className="w-6 h-6" />,
      href: "tel:6379041944",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      type: "LinkedIn",
      value: "deepan-a-n-6b77b0256",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/deepan-a-n-6b77b0256",
      gradient: "from-blue-600 to-blue-700"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-text-muted text-lg mt-6 max-w-2xl mx-auto">
            Let's collaborate on exciting AI/ML projects or discuss opportunities in artificial intelligence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index}
                className="p-8 text-center hover-lift shadow-custom-lg border-0 bg-surface-elevated group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${contact.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {contact.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {contact.type}
                    </h3>
                    <p className="text-text-secondary text-sm break-all">
                      {contact.value}
                    </p>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary hover:bg-primary-hover"
                  >
                    <a 
                      href={contact.href}
                      target={contact.type === "LinkedIn" ? "_blank" : undefined}
                      rel={contact.type === "LinkedIn" ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2"
                    >
                      Contact
                      {contact.type === "LinkedIn" && <ExternalLink className="w-4 h-4" />}
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="p-12 text-center bg-gradient-subtle border-0 shadow-custom-xl animate-fade-in">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">
                Ready to build the future with AI?
              </h3>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Whether you're looking for a passionate AI/ML developer, research collaborator, 
                or someone to bring your intelligent system ideas to life, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-primary hover:bg-primary-hover shadow-custom-lg"
                >
                  <a href="mailto:arnavakumar1973@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-custom"
                >
                  <a 
                    href="https://www.linkedin.com/in/deepan-a-n-6b77b0256" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;