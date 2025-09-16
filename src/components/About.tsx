import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const achievements = [
    { number: '8+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Delivered' },
    { number: '15+', label: 'Team Members Led' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Building the Future of 
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Web Development</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Lead Frontend Engineer with over 8 years of experience in creating 
              scalable, performant, and user-centric web applications. My expertise spans across 
              modern JavaScript frameworks, design systems, and frontend architecture.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a frontend architect, I've led cross-functional teams to deliver complex projects 
              for Fortune 500 companies, focusing on performance optimization, accessibility, and 
              maintainable code architecture. I'm passionate about mentoring developers and 
              establishing best practices that drive innovation.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'React & Next.js',
                  'TypeScript',
                  'Frontend Architecture',
                  'Design Systems',
                  'Performance Optimization',
                  'Team Leadership',
                  'Agile Development',
                  'Web Accessibility'
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737574107736-9e02ca5d5387?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHNvZnR3YXJlJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc1NjkwNDk0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Alex Chen - Lead Frontend Engineer"
                className="relative w-80 h-80 rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
              <div className="text-muted-foreground">{achievement.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}