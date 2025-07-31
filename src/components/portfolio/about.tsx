import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Code, BookCopy, Zap, Users } from 'lucide-react'
import aboutImage from '@/assets/about-bg.jpg'
import { useIsMobile } from '@/hooks/use-mobile';

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following best practices.'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed, efficiency, and seamless user experience.'
  },
  {
    icon: BookCopy,
    title: 'Always Curious',
    description: 'Ready to learn new things in no time.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in teams using agile methodologies and modern tools.'
  }
];

export function About() {
  const isMobile = useIsMobile();

  return (
    <Section id="about" className="bg-gradient-secondary">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Hi, I’m Sumedh Tiwari, a passionate and detail-oriented Computer Science undergraduate at KIIT University,
              with a strong focus on building reliable and scalable software solutions. I specialize in full-stack development,
              Java-based backend systems, and have hands-on experience in embedded systems and telecom platforms.
            </p>
            
            <p>
              I’ve worked as a Java Developer intern at Reliance Industries Limited, where I contributed to the development
              two internal projets in 5G infrastructure. I also had the opportunity to work with Digipharm as a MERN stack developer,
              helping build a dynamic and responsive marketplace platform.
            </p>
            
            <p>
              With proficiency in languages like Python, C, Java, and frameworks like React, Node.js, and Express,
              I enjoy solving real-world problems through clean code, structured architecture, and thoughtful design.
              I'm also deeply curious about data systems, and continuously explore opportunities to expand my skill set.
            </p>

            <p>
              I value consistency, integrity, and learning by doing. Whether it’s a solo project
              or a collaborative team effort, I strive to deliver quality work and learn something new along the way.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card p-6 neon-border hover:glow-purple transition-all duration-300">
                <feature.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {isMobile
        ?<></>
        :<div className="slide-in-right">
          <div className="relative">
            <div 
              className="rounded-2xl glass-card p-1 glow-purple"
              style={{
                backgroundImage: `url(${aboutImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                aspectRatio: '4/3'
              }}
            >
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl"></div>
            </div>
            
            {/* Floating Stats */}
            <Card className="absolute -bottom-6 -left-6 glass-card p-4 neon-border">
              <div className="text-2xl font-bold text-primary">1+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </Card>
            
            <Card className="absolute -top-6 -right-6 glass-card p-4 neon-border">
              <div className="text-2xl font-bold text-accent">5+</div>
              <div className="text-sm text-muted-foreground">Projects Done</div>
            </Card>
          </div>
        </div>
        }
      </div>
    </Section>
  )
}