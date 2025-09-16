import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Enterprise Dashboard Platform',
      description: 'A comprehensive analytics dashboard for Fortune 500 company with real-time data visualization, advanced filtering, and responsive design. Built with React, TypeScript, and D3.js.',
      image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTY4NDY5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://dashboard-demo.com',
      githubUrl: 'https://github.com/alexchen/dashboard',
      featured: true,
      metrics: ['99.9% Uptime', '2M+ Daily Users', '40% Performance Boost']
    },
    {
      title: 'Mobile-First E-commerce Platform',
      description: 'A modern e-commerce solution with progressive web app features, seamless checkout experience, and advanced product filtering. Optimized for mobile performance.',
      image: 'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8ZS1jb21tZXJjZSUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzU2Nzg5MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'Prisma', 'Vercel'],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/alexchen/ecommerce',
      featured: true,
      metrics: ['150% Conversion Rate', '50% Faster Load Time', '4.9★ User Rating']
    },
    {
      title: 'Cross-Platform Mobile App',
      description: 'A React Native application for task management with offline capabilities, real-time sync, and intuitive user interface. Features custom animations and gestures.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU2ODU0Mjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React Native', 'Expo', 'Redux', 'Firebase', 'AsyncStorage'],
      liveUrl: 'https://app.taskmanager.com',
      githubUrl: 'https://github.com/alexchen/mobile-app',
      featured: false,
      metrics: ['100K+ Downloads', '4.8★ App Store', '95% User Retention']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Featured Work</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Projects That
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Make Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern frontend technologies 
            and user-centered design principles.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 ${
                project.featured ? 'border-primary/20 shadow-lg' : ''
              }`}
            >
              <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} relative overflow-hidden`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary">
                      Featured Project
                    </Badge>
                  )}
                </div>
                
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl lg:text-3xl mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center p-3 bg-background rounded-lg">
                        <div className="text-sm text-primary">{metric}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-none">
            <h3 className="text-2xl mb-4">Interested in Working Together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create exceptional digital experiences. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <Button 
              size="lg" 
              className="px-8"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}