import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const experiences = [
  {
    company: 'Jio Platforms Limited',
    position: 'Intern Java Developer',
    period: 'May 2025 - Aug 2025',
    location: 'Mumbai',
    type: 'Intern',
    description: 'Development of scalable web applications using React, Java.',
    achievements: [
      'Built 1 internal project from scratch',
      'Added Modules to alredy exsisting deployed project',
    ],
    tech: ['React', 'Java', 'MySQL', 'Docker']
  },
  {
    company: 'DigiPharm',
    position: 'Full-Stack Developer',
    period: 'Jan 2024 - Present',
    location: 'Bhubaneswar',
    type: 'Full-time',
    description: 'Developed E-Commerce website with user and admin dashboards using modern web technologies.',
    achievements: [
      'Built responsive web applications from scratch',
      'Increased User experiance by 80%',
      'Managed 25,000+ Products'
    ],
    tech: ['React', 'Node.js', 'MongoDB', "Express", 'Git']
  },
]

const education = [
  {
    institution: 'Atomic Energy of Central School-2 Mumbai',
    degree: 'Class 10 CBSE',
    period: '2020',
    location: 'Mumbai',
    description: '',
    highlights: null
  },
  {
    institution: 'Kendria Vidayalaya Mankhurd',
    degree: 'Class 12 CBSE',
    period: '2020 - 2022',
    location: 'Mumbai',
    description: '',
    highlights: null
  },
  {
    institution: 'Kalinga Institute of Industrial Tecnology',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    period: '2022 - 2026',
    location: 'Bhubaneswar',
    description: '',
    highlights: null
  }
]

export function Experience() {
  return (
    <Section id="experience">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          My <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A timeline of my professional experience and educational background that shaped my career.
        </p>
      </div>


      <div className="slide-in-left mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-6 w-6 text-primary">🎓</div>
          <h3 className="text-2xl font-semibold">Education</h3>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="glass-card p-6 neon-border hover:glow-purple transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-1">{edu.degree}</h4>
                  <h5 className="text-lg font-medium mb-1">{edu.institution}</h5>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{edu.description}</p>

              {edu.highlights && (<div>
                <h6 className="font-medium mb-2">Highlights:</h6>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>)}
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-3 mb-8 slide-in-left">
          <Briefcase className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-semibold">Professional Experience</h3>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card p-6 neon-border hover:glow-purple transition-all duration-300 slide-in-right">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-1">{exp.position}</h4>
                  <h5 className="text-lg font-medium mb-2">{exp.company}</h5>
                </div>
                <div className="flex flex-col lg:items-end gap-2">
                  <Badge variant="outline" className="neon-border w-fit">
                    {exp.type}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <div className="mb-4">
                <h6 className="font-medium mb-2">Key Achievements:</h6>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="glass-card">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}