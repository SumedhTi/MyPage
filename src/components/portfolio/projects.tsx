import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    company:"DigiPharm",
    description: 'A full-stack e-commerce solution with React, Node.js, and Mongodb. Features include user authentication, payment processing, admin and user dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Electronjs'],
    github: null,
    live: "https://digipharm.in/",
    featured: true
  },
  {
    title: 'Policy Insights and Managenet Servises(PIMS)',
    company:"Jio Platforms Limited",
    description: 'A full-stack Managment Dashboard solution with React, Java, and MySQL. Features include managing telecomunication secervies and rule engine across India.',
    image: "/src/assets/5G.png",
    tech: ['React', 'Java', 'Jetty Server', 'MySQL', 'MUI', 'Docker'],
    github: null,
    live: null,
    featured: true
  },
  {
    title: 'Online Charging Service (OCS) Insights',
    company:"Jio Platforms Limited",
    description: 'A full-stack Charging Dashboard solution with React, Java, and MySQL. Used to manage and process charges for services used by subscribers across India.',
    image: "/src/assets/side_img.png",
    tech: ['React', 'Java', 'Jetty Server', 'MySQL', 'MUI', 'Docker'],
    github: null,
    live: null,
    featured: true
  },
  {
    title: 'Low Light Image Enhance using Deep Learning',
    company:null,
    description: 'A simple DL model which takes input of a low light image and enhanses it by brightning the overall image without noise and losses.',
    image: '/src/assets/diff.png',
    tech: ['Python', 'TenserFlow'],
    github: "https://github.com/NiceNewton/lol",
    live: null,
    featured: false
  },
  {
    title: 'Mental Health Chatbot',
    company: null,
    description: 'A chatbot made with huggingface and Ml model which is trained to give sentiments to the llm and reply to make user feel happy and positive.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tech: ['React', 'Flask', 'Pyhon', 'TenserFlow', 'CUDA'],
    github: "https://github.com/SumedhTi/mental_health_chatbot",
    live: null,
    featured: false
  },
  {
    title: 'BattleShip Game',
    company: null,
    description: 'A famous 2 player game "BattleShip" developed using pygame and played over newtwork using soket connection.',
    image: '/src/assets/ship.png',
    tech: ['Python', 'PyGame', 'Socket'],
    github: "https://github.com/SumedhTi/battleship_python",
    live: null,
    featured: false
  },
  {
    title: 'Poems website',
    company:"Jio Platforms Limited",
    description: 'A simple webpage to showcase all the poems and stories written by my mother.',
    image: "https://i.ibb.co/phLZ2YX/IMG-20241008-WA0013.jpg",
    tech: ['React', 'MongoDB'],
    github: "https://github.com/SumedhTi/site",
    live: "https://sumedhti.github.io/site/",
    featured: false
  },
];

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <Section id="projects" className="bg-gradient-secondary">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="space-y-16 mb-16">
        {featuredProjects.map((project, index) => (
          <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
            <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} slide-in-left`}>
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full rounded-2xl glass-card transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} slide-in-right`}>
              <Badge variant="outline" className="mb-4 neon-border">Featured</Badge>
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <h6 className="text-lg mb-4">{project.company}</h6>
              <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="glass-card text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (<Button variant="outline" className="neon-border glass" onClick={() => window.open(project.github, '_blank')}>
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>)}
                {project.live && (<Button className="glow-purple" onClick={() => window.open(project.live, '_blank')}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects Grid */}
      <div className="fade-in">
        <h3 className="text-2xl font-semibold text-center mb-8">Other Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <Card key={index} className="glass-card neon-border hover:glow-purple transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs glass-card">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="text-xs glass-card">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  {project.github && (<Button size="sm" variant="outline" className="flex-1 neon-border glass" onClick={() => window.open(project.github, '_blank')}>
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </Button>)}
                  {project.live && (<Button size="sm" className="flex-1 glass" onClick={() => window.open(project.live, '_blank')}>
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Demo
                  </Button>)}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
