import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    'React', 'Node.js', 'JavaScript', 'HTML/CSS', 
    'Python', 'MongoDB', 'SQL', 'Git', 
    'AzureAD', 'Docker', 'Express', 'ServiceNow', 'Testing',
    'Automation',
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card"
          >
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 flex items-center justify-center shadow-lg">
              <img 
                src="/Dish_Image.jpg" 
                alt="Dish Dudhat" 
                className="object-cover w-full h-full" 
                style={{ objectPosition: "center" }} 
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
            Hi, I'm Dish Dudhat, an aspiring software developer passionate about building impactful, user-focused solutions.
With experience in IT support, automation, and testing, I bring a detail-oriented and adaptable mindset to development.
I’m constantly learning, growing, and ready to contribute to meaningful tech projects.
            </p>
            
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Key Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="px-4 py-2 rounded-lg text-sm font-medium border"
                    style={{ 
                      backgroundColor: 'var(--color-bg-secondary)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text-secondary)'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About