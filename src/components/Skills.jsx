import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaReact,
  FaNode,
  FaJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaCloud,
} from 'react-icons/fa'
import {
  SiMongodb,
  SiExpress,
  SiMicrosoftazure,
  SiCplusplus,
  SiC,
} from 'react-icons/si'
import { BsDatabase, BsGearFill, BsCheckCircleFill } from 'react-icons/bs'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: FaJs },
        { name: 'Python', icon: FaPython },
        { name: 'C++', icon: SiCplusplus },
        { name: 'C', icon: SiC },
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3Alt },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNode },
        { name: 'Express', icon: SiExpress },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'SQL', icon: BsDatabase },
        { name: 'Git', icon: FaGitAlt },
        { name: 'Docker', icon: FaDocker },
        { name: 'AzureAD', icon: SiMicrosoftazure },
        { name: 'ServiceNow', icon: FaCloud },
        { name: 'Testing', icon: BsCheckCircleFill },
        { name: 'Automation', icon: BsGearFill },
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-card"
            >
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--color-text-primary)' }}>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="p-4 rounded-lg text-center cursor-pointer border transition-all duration-300"
                      style={{
                        backgroundColor: 'var(--color-bg-primary)',
                        borderColor: 'var(--color-border)',
                      }}
                    >
                      <Icon className="text-3xl mx-auto mb-2" style={{ color: 'var(--color-accent)' }} />
                      <p className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                        {skill.name}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills