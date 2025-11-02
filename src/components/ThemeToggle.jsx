import { motion } from 'framer-motion'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-20 right-4 md:right-8 z-50 rounded-full p-3 shadow-lg border transition-all duration-300"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border)',
        color: 'var(--color-text-primary)'
      }}
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <FaSun className="text-xl" style={{ color: '#fbbf24' }} />
      ) : (
        <FaMoon className="text-xl" style={{ color: 'var(--color-accent)' }} />
      )}
    </motion.button>
  )
}

export default ThemeToggle