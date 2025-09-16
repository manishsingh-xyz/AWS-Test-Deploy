import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/alexchen',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/alexchen',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:alex@example.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <button 
              onClick={scrollToTop}
              className="font-bold text-2xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hover:from-primary/80 hover:to-primary/50 transition-all duration-200"
            >
              Alex Chen
            </button>
            <p className="text-muted-foreground">
              Lead Frontend Engineer & Architect crafting exceptional digital experiences 
              with modern technologies and user-centered design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>San Francisco, CA</p>
              <a 
                href="mailto:alex@example.com"
                className="hover:text-foreground transition-colors duration-200"
              >
                alex@example.com
              </a>
              <a 
                href="tel:+15551234567"
                className="hover:text-foreground transition-colors duration-200"
              >
                +1 (555) 123-4567
              </a>
            </div>
            <div className="pt-4">
              <div className="flex items-center space-x-2 text-sm text-primary">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for new projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>© {currentYear} Alex Chen. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and React</span>
          </div>
          
          <div className="mt-4 sm:mt-0 text-sm text-muted-foreground">
            <span>Designed & Built by Alex Chen</span>
          </div>
        </div>
      </div>
    </footer>
  );
}