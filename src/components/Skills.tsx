import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Frameworks',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-blue-600' },
        { name: 'Next.js', level: 90, color: 'from-gray-700 to-gray-800' },
        { name: 'Vue.js', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'Angular', level: 80, color: 'from-red-500 to-red-600' },
      ]
    },
    {
      title: 'Languages & Core',
      skills: [
        { name: 'TypeScript', level: 95, color: 'from-blue-600 to-blue-700' },
        { name: 'JavaScript', level: 98, color: 'from-yellow-500 to-yellow-600' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-orange-600' },
        { name: 'GraphQL', level: 85, color: 'from-pink-500 to-pink-600' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 95, color: 'from-gray-600 to-gray-700' },
        { name: 'Docker', level: 80, color: 'from-blue-500 to-blue-600' },
        { name: 'AWS', level: 85, color: 'from-orange-500 to-orange-600' },
        { name: 'Jest/Testing', level: 90, color: 'from-green-500 to-green-600' },
      ]
    },
    {
      title: 'Design & UX',
      skills: [
        { name: 'Figma', level: 90, color: 'from-purple-500 to-purple-600' },
        { name: 'Design Systems', level: 95, color: 'from-indigo-500 to-indigo-600' },
        { name: 'Tailwind CSS', level: 95, color: 'from-teal-500 to-teal-600' },
        { name: 'Accessibility', level: 90, color: 'from-emerald-500 to-emerald-600' },
      ]
    }
  ];

  const certifications = [
    'AWS Certified Developer',
    'Google Cloud Professional',
    'Certified Scrum Master',
    'React Advanced Patterns'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Skills & Expertise</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Technical
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Proficiency</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various technologies and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-2" />
                      <div 
                        className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="p-8 text-center">
          <h3 className="text-2xl mb-6">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {cert}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Philosophy */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-none">
            <blockquote className="text-xl italic text-muted-foreground mb-4">
              "Great frontend architecture is not about the latest framework, 
              but about creating maintainable, scalable, and accessible solutions 
              that stand the test of time."
            </blockquote>
            <cite className="text-primary">— Alex Chen</cite>
          </Card>
        </div>
      </div>
    </section>
  );
}