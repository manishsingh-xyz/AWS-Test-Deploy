import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function Experience() {
  const experiences = [
    {
      title: 'Lead Frontend Engineer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Leading a team of 8 frontend developers in building scalable web applications for enterprise clients. Architected micro-frontend solutions that improved development velocity by 40%.',
      achievements: [
        'Architected and implemented a design system used across 15+ applications',
        'Led migration from legacy AngularJS to React, reducing bundle size by 60%',
        'Established frontend best practices and code review processes',
        'Mentored junior developers and conducted technical interviews'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AWS', 'Docker']
    },
    {
      title: 'Senior Frontend Developer',
      company: 'InnovateLabs',
      period: '2020 - 2022',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Developed high-performance web applications for fintech clients, focusing on real-time data visualization and complex user interfaces.',
      achievements: [
        'Built real-time trading dashboard handling 1M+ transactions per day',
        'Optimized application performance, reducing load times by 50%',
        'Implemented comprehensive testing strategy with 95% code coverage',
        'Collaborated with UX team to improve user engagement by 30%'
      ],
      technologies: ['React', 'Redux', 'D3.js', 'WebSocket', 'Jest', 'Cypress']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Dynamics',
      period: '2018 - 2020',
      location: 'Austin, TX',
      type: 'Full-time',
      description: 'Developed responsive web applications for various clients across different industries, from e-commerce to healthcare.',
      achievements: [
        'Delivered 20+ client projects with 100% on-time completion rate',
        'Implemented accessibility standards achieving WCAG 2.1 AA compliance',
        'Built reusable component library adopted by entire development team',
        'Participated in agile development process and sprint planning'
      ],
      technologies: ['Vue.js', 'JavaScript', 'SASS', 'Webpack', 'Node.js']
    },
    {
      title: 'Junior Frontend Developer',
      company: 'StartupXYZ',
      period: '2016 - 2018',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      description: 'Started my frontend development journey at a fast-paced startup, learning modern development practices and contributing to product growth.',
      achievements: [
        'Contributed to MVP development that secured $2M in Series A funding',
        'Learned React and modern JavaScript ecosystem',
        'Collaborated with design team to implement pixel-perfect interfaces',
        'Participated in code reviews and pair programming sessions'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Git', 'Figma']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Professional Journey</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Career
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through my professional experience, showcasing growth from junior developer 
            to lead frontend architect.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/30 hover:border-l-primary">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left Side - Basic Info */}
                <div className="lg:w-1/3 space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-xl">{experience.title}</h3>
                    <div className="text-primary font-medium">{experience.company}</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">{experience.period}</Badge>
                      <Badge variant="outline" className="text-xs">{experience.type}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">{experience.location}</div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Description & Achievements */}
                <div className="lg:w-2/3 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Key Achievements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="text-sm text-muted-foreground flex items-start bg-muted/30 rounded-md p-3">
                          <span className="text-primary mr-2 mt-0.5 font-bold">•</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Education & Certifications - More Compact */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h3 className="text-lg mb-4 flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              Education
            </h3>
            <div className="space-y-2">
              <div className="font-medium">Bachelor of Science in Computer Science</div>
              <div className="text-muted-foreground">University of California, Berkeley</div>
              <Badge variant="secondary" className="text-xs mt-2">2012 - 2016</Badge>
            </div>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <h3 className="text-lg mb-4 flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
              Recent Certifications
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {[
                'AWS Certified Developer - Associate (2023)',
                'Google Cloud Professional Cloud Architect (2022)',
                'Certified Scrum Master (2021)',
                'React Advanced Patterns Certificate (2023)'
              ].map((cert, index) => (
                <div key={index} className="text-sm text-muted-foreground bg-background/50 rounded p-2">
                  {cert}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}