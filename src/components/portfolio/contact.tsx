import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sumedh.it@gmail.com',
    href: 'mailto:sumedh.it@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9321589913',
    href: 'tel:+919321589913'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mumbai',
    href: '#'
  }
]

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/SumedhTi',
    color: 'hover:text-white'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: '#',
    color: 'hover:text-blue-400'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/sumedh_4587',
    color: 'hover:text-blue-400'
  }
]

export function Contact() {
  return (
    <Section id="contact" className="bg-gradient-secondary">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities and exciting projects. 
          Let's create something amazing together!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="slide-in-left">
          <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
          <p className="text-muted-foreground mb-8">
            Whether you have a project in mind, want to collaborate, or just want to say hello, 
            I'd love to hear from you. Feel free to reach out through any of these channels.
          </p>

          <div className="space-y-6 mb-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="glass-card p-3 rounded-full neon-border">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{info.label}</div>
                  <a 
                    href={info.href} 
                    className="font-medium hover:text-primary transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-medium mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`glass-card p-3 rounded-full neon-border hover:glow-purple transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <Card className="glass-card p-6 mt-8 neon-border">
            <h4 className="font-semibold mb-3">Current Status</h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <Badge variant="outline" className="neon-border">Available for Work</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Open to new opportunities and interesting projects. Let's discuss how we can work together!
            </p>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="slide-in-right">
          <Card className="glass-card p-8 neon-border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input 
                    placeholder="First" 
                    className="glass border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input 
                    placeholder="Last" 
                    className="glass border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input 
                  type="email"
                  placeholder="example@example.com" 
                  className="glass border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input 
                  placeholder="Project Collaboration" 
                  className="glass border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or idea..." 
                  rows={6}
                  className="glass border-border focus:border-primary resize-none"
                />
              </div>

              <Button className="w-full glow-purple hover:glow-pink transition-all duration-300">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  )
}