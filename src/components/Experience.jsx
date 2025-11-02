import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Internal Store Analyst',
      company: 'MLSE - Sports & Entertainment',
      period: 'Feb 2025 - Oct 2025',
      description: [
        'Improved incident resolution time by 35% by troubleshooting hardware, software, and POS issues via ServiceNow.',
        'Configured and deployed 200+ devices using Intune and SCCM, ensuring compliance and smooth operations.',
        'OAuthored SOPs in Confluence, reducing repeat issues by 20% across support teams.',
        'Collaborated on cross-functional rollouts, ensuring zero downtime and seamless user adoption.',
      ],
    },
    {
      title: 'IT Support Analyst',
      company: 'Seneca College ITS Service',
      period: 'Jan 2024 - Apr 2025',
      description: [
        'Resolved 500+ technical tickets via ServiceNow, ensuring high SLA compliance.',
        'Delivered Microsoft 365 and VPN onboarding, improving adoption by 30%.',
        'Conducted testing for patches and system updates, ensuring end-user readiness.',
        'Authored troubleshooting guides and QA docs, standardizing support and reducing escalations.',

      ],
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line - minimal navy/blue */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: 'var(--color-accent)', opacity: 0.3 }} />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-20 pb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-2 w-4 h-4 rounded-full border-4 shadow-sm" 
                   style={{ backgroundColor: 'var(--color-accent)', borderColor: 'var(--color-bg-primary)' }} />
              
              <div className="glass-card">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <FaBriefcase className="text-xl" style={{ color: 'var(--color-accent)' }} />
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                        {exp.title}
                      </h3>
                      <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium border"
                        style={{
                          backgroundColor: 'var(--color-bg-primary)',
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-text-secondary)'
                        }}>
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                      <span className="mt-1" style={{ color: 'var(--color-accent)' }}>▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience