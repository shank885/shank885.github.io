import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Education & Publications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-accent mb-6">Education</h3>

            <div className="bg-secondary/50 p-6 rounded-lg border border-secondary">
              <h4 className="text-xl font-bold mb-2">B.Tech. Computer Science & Engineering</h4>
              <p className="text-gray-400 mb-2">Tezpur University, Assam</p>
              <p className="text-accent font-semibold">GPA: 7.71/10</p>
              <p className="text-gray-300 text-sm mt-2">Graduated: April 2019</p>
            </div>
          </motion.div>

          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-accent mb-6">Publications</h3>

            <div className="bg-secondary/50 p-6 rounded-lg border border-secondary">
              <h4 className="text-lg font-bold mb-2">PKNN-MIFS: A Parallel KNN Classifier over an Optimal Subset of Features</h4>
              <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                Research publication on machine learning classification techniques with focus on feature optimization
                and parallel processing.
              </p>
              <div className="space-y-2">
                <p className="text-gray-400">
                  <span className="text-accent font-semibold">DOI:</span>{' '}
                  <a
                    href="https://doi.org/10.1016/j.iswa.2022.200073"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-blue-300 break-all"
                  >
                    https://doi.org/10.1016/j.iswa.2022.200073
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
