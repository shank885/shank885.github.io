import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a Lead AI Engineer with 7+ years of experience building enterprise-scale AI solutions.
              My journey spans from developing innovative computer vision systems to architecting complex
              AI platforms for real-world applications.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Currently at Gyrus AI, I lead the development of an In-Scene Ad Placement platform using
              custom vision models (Depth, Normal, etc.). I specialize in translating research into
              production-grade solutions, bridging the gap between theoretical AI and practical deployment.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond engineering, I'm passionate about mentoring teams, collaborating with leadership,
              and pushing the boundaries of what's possible with AI. When I'm not coding, you might find
              me exploring new research papers or contributing to the AI community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-primary/50 p-6 rounded-lg border border-secondary">
              <h3 className="text-accent font-semibold mb-2 text-lg">📍 Location</h3>
              <p className="text-gray-300">Bengaluru, India</p>
            </div>

            <div className="bg-primary/50 p-6 rounded-lg border border-secondary">
              <h3 className="text-accent font-semibold mb-2 text-lg">📧 Email</h3>
              <a href="mailto:shashankshekhar885@gmail.com" className="text-accent hover:text-blue-300">
                shashankshekhar885@gmail.com
              </a>
            </div>

            <div className="bg-primary/50 p-6 rounded-lg border border-secondary">
              <h3 className="text-accent font-semibold mb-2 text-lg">📱 Phone</h3>
              <a href="tel:7086834114" className="text-accent hover:text-blue-300">
                +91 70868 34114
              </a>
            </div>

            <div className="bg-primary/50 p-6 rounded-lg border border-secondary">
              <h3 className="text-accent font-semibold mb-2 text-lg">🎯 Experience</h3>
              <p className="text-gray-300">7+ years in AI Engineering</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
