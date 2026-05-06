import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function Publications() {
  const publications = [
    {
      title: 'PKNN-MIFS: A Parallel KNN Classifier over an Optimal Subset of Features',
      authors: 'Shashank Shekhar et al.',
      journal: 'Intelligent Systems with Applications',
      year: 2022,
      doi: '10.1016/j.iswa.2022.200073',
      abstract: 'This paper presents a novel approach to feature selection and classification using Parallel KNN with optimal feature subset selection. The PKNN-MIFS algorithm demonstrates improved classification accuracy and computational efficiency.',
      keywords: ['Machine Learning', 'Feature Selection', 'KNN Classification', 'Parallel Processing']
    }
  ]

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Research & Publications
        </motion.h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-secondary/50 p-8 rounded-lg border border-secondary hover:border-accent/50 transition-colors"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-accent mb-2">{pub.title}</h3>
                <p className="text-gray-400">{pub.authors}</p>
                <p className="text-gray-400 text-sm">
                  {pub.journal} • {pub.year}
                </p>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {pub.abstract}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {pub.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/30"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-secondary">
                <div className="flex-1">
                  <p className="text-gray-400 text-sm mb-2">
                    <span className="text-accent font-semibold">DOI: </span>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-blue-300 break-all"
                    >
                      {pub.doi}
                    </a>
                  </p>
                </div>
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 text-accent hover:bg-accent hover:text-white rounded font-medium transition-colors whitespace-nowrap"
                >
                  <ExternalLink size={16} />
                  Read Paper
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 p-6 bg-primary/50 rounded-lg border border-secondary text-center"
        >
          <p className="text-gray-300 mb-2">
            Passionate about contributing to the scientific community and advancing AI research through publications and open-source contributions.
          </p>
          <p className="text-gray-400 text-sm">
            Check out my <a href="https://github.com/shank885" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-blue-300">GitHub</a> for research code and implementations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
