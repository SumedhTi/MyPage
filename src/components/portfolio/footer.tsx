import { Github, Linkedin, Mail, Heart, Instagram } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/SumedhTi/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sumedh-tiwari-99b20b2a0', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sumedh.it@gmail.com', label: 'Email' },
  { icon: Instagram, href: 'https://www.instagram.com/sumedh_4587', label: 'Instagram' }
]

export function Footer() {
  return (
    <footer className="glass-card border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Sumedh Tiwari
            </div>
            <p className="text-muted-foreground">
              Building digital experiences with passion and precision
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="glass-card p-3 rounded-full neon-border hover:glow-purple transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> using React & TypeScript
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2025 Sumedh Tiwari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}