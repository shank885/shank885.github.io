import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-blue-400 p-1">
              <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
                <span className="text-4xl font-bold">SS</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-accent via-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Shashank Shekhar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-300 mb-4"
          >
            Lead AI Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Building enterprise-scale AI solutions with 7+ years of experience in computer vision,
            deep learning, and AI system architecture. Specialized in deploying production-grade vision models
            and leading technical teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accentDark text-white font-semibold rounded-lg transition-colors"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-accent text-accent hover:bg-accent/10 font-semibold rounded-lg transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            className="mt-16"
          >
            <p className="text-gray-400 mb-4">Scroll to explore</p>
            <svg className="w-6 h-6 mx-auto text-accent animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
