import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce web app for decor and lifestyle products with customer/employee logins, product management, and email confirmation.',
      tech: ['EJS', 'Node.js', 'MongoDB', 'Express', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/dudhat52/Closio-Clothing_store',
      live: 'https://closio-clothing-store-dish-dudhats-projects.vercel.app/',
      image: '/image.png',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      github: 'https://github.com/dudhat52/online-store-cpp',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media platforms with data visualization and reporting tools.',
      tech: ['React', 'Python', 'Chart.js', 'REST API'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application with location-based forecasts and beautiful UI animations.',
      tech: ['React', 'OpenWeather API', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    },
    {
      title: 'Blog CMS Platform',
      description: 'Content management system for bloggers with markdown support, SEO optimization, and analytics.',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
    },
    {
      title: 'Fitness Tracking App',
      description: 'Personal fitness tracker with workout plans, progress tracking, and nutrition logging.',
      tech: ['React Native', 'Firebase', 'GraphQL', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card group"
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded text-xs font-medium border"
                    style={{
                      backgroundColor: 'var(--color-bg-primary)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text-secondary)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center gap-2 text-sm px-4 py-2"
                >
                  <FaGithub /> Code
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2 text-sm px-4 py-2"
                >
                  <FaExternalLinkAlt /> Live
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects