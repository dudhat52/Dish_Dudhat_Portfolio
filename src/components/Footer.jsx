import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: FaEnvelope, url: 'mailto:dish.dudhat@example.com', label: 'Email' },
  ]

  return (
    <footer className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-center md:text-left" style={{ color: 'var(--color-text-secondary)' }}>
              © {new Date().getFullYear()} Dish Dudhat. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-lg border transition-all duration-300 hover:shadow-md"
                    style={{
                      backgroundColor: 'var(--color-bg-primary)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-accent)'
                    }}
                    aria-label={social.label}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer