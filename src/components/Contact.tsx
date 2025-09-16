import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex@example.com',
      href: 'mailto:alex@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com/?q=San+Francisco,CA'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/alexchen',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/alexchen',
      color: 'hover:text-gray-700'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/alexchen',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Let's Build Something
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Amazing Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, 
            or just having a chat about frontend development and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello!"
                  rows={6}
                  required
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.label === 'Location' ? '_blank' : undefined}
                    rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.label}</div>
                      <div className="text-sm">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 bg-background border border-border rounded-lg transition-all duration-200 hover:shadow-md ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Connect with me on social media for updates on my latest projects and insights 
                into frontend development trends.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-none">
              <h3 className="text-xl mb-4">Quick Response</h3>
              <p className="text-muted-foreground mb-4">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to reach out via LinkedIn or phone.
              </p>
              <div className="flex items-center space-x-2 text-sm text-primary">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for new projects</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <h3 className="text-2xl mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need a complete frontend architecture overhaul, a new web application, 
              or just want to discuss best practices, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:alex@example.com">
                  Schedule a Call
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://calendly.com/alexchen" target="_blank" rel="noopener noreferrer">
                  Book Meeting
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}