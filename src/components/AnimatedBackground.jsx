import { motion } from 'framer-motion'

/**
 * Subtle Animated Background
 * Creates a very soft, minimal animated effect that doesn't distract from content
 */
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Very subtle blue gradient orb - minimal effect */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-400 rounded-full blur-3xl"
      />
      {/* Subtle grey gradient orb */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gray-400 dark:bg-blue-500 rounded-full blur-3xl"
      />
    </div>
  )
}

export default AnimatedBackground