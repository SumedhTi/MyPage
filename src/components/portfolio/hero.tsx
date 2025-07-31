import { ArrowDown } from 'lucide-react'
import { TypewriterText } from '@/components/animations/typewriter-text'
import { AdvancedScroll } from '@/components/animations/advanced-scroll'
import { BlobBackground } from '@/components/animations/blob-background'
import { motion } from 'framer-motion'
import heroImage from '@/assets/hero-bg.jpg'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Animated Blob Background */}
      <BlobBackground />

      {/* Advanced Floating Elements */}
      <div className="absolute inset-0 z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${2 + (i % 3)} h-${2 + (i % 3)} bg-gradient-to-r from-primary to-accent rounded-full opacity-${30 + (i % 3) * 20}`}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <div className="space-y-8">
          <AdvancedScroll animation="scale" delay={0.2}>
            <h5 className="text-lg md:text-xl font-bold mb-4">Hi I'am</h5>
            <h1 className="text-5xl md:text-6xl font-bold mb-7">
              <TypewriterText 
                text="Sumedh Tiwari" 
                className="bg-gradient-primary bg-clip-text text-transparent text-glow inline-block"
                speed={150}
              />
              <br />
              <span className="text-foreground">
                <TypewriterText 
                  text="Developer" 
                  className="inline-block"
                  delay={800}
                  speed={120}
                />
              </span>
            </h1>
          </AdvancedScroll>

          <AdvancedScroll animation="fadeUp" delay={0.4}>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--foreground)), hsl(var(--primary)))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              I build scalable web apps and backend systems with clean
              architecture and modern technologies.
            </motion.p>
          </AdvancedScroll>

          {/* <AdvancedScroll animation="fadeUp" delay={0.6}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <MagneticElement strength={0.2}>
                <Button size="lg" className="glass-card glow-purple neon-border group morph-button hover-lift">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </MagneticElement>
              <MagneticElement strength={0.2}>
                <Button variant="outline" size="lg" className="glass neon-border hover-glow">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </MagneticElement>
            </div>
          </AdvancedScroll>

          <AdvancedScroll animation="fadeUp" delay={0.8}>
            <div className="flex justify-center space-x-6">
              {[
                { Icon: Github, link: "#" },
                { Icon: Linkedin, link: "#" },
                { Icon: Mail, link: "#" }
              ].map(({ Icon }, index) => (
                <MagneticElement key={index} strength={0.3}>
                  <motion.a
                    href="#"
                    className="glass-card p-3 rounded-full neon-border group"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      boxShadow: '0 0 20px hsl(var(--primary) / 0.5)'
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-6 w-6 group-hover:text-primary" />
                  </motion.a>
                </MagneticElement>
              ))}
            </div>
          </AdvancedScroll> */}
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </div>
    </section>
  )
}