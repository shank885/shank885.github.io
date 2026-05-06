import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: 'Lead AI Engineer',
      company: 'Gyrus AI Pvt Ltd',
      location: 'Bengaluru, India',
      period: '04/2024 - Present',
      highlights: [
        'Led end-to-end architecture, research, and production deployment of enterprise-scale AI-powered In-Scene Ad Placement platform',
        'Acted as technical lead and client-facing AI architect, collaborating with CTOs and senior engineering leadership',
        'Owned model architecture design, training surface normal and depth estimation models for real-time inference',
        'Mentored teams and integrated solutions with In-Scene Ad Placement systems'
      ]
    },
    {
      title: 'Senior AI Engineer',
      company: 'Gyrus AI Pvt Ltd',
      location: 'Bengaluru, India',
      period: '11/2021 - 03/2024',
      highlights: [
        'Developed end-to-end license plate recognition system achieving 95% accuracy',
        'Built 2D in-scene advertising placement system using RAFT-based optical flow and homography estimation',
        'Engineered Face Identity Transfer model for consistent video face anonymization',
        'Architected custom camera-parameter estimation model inspired by NeRF for 3D ad alignment',
        'Engineered Driver Attention Detection system, decreasing near-miss incidents'
      ]
    },
    {
      title: 'AI Engineer',
      company: 'Gyrus AI Pvt Ltd',
      location: 'Bengaluru, India',
      period: '05/2019 - 08/2021',
      highlights: [
        'Developed and deployed hand hygiene monitoring system, boosting compliance by 40%',
        'Gained strong hands-on experience in computer vision fundamentals (GANs, optical flow, pose estimation)',
        'Developed and quantized age & gender estimation model for real-time edge inference'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-secondary/50 p-8 rounded-lg border border-secondary hover:border-accent/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-accent">{exp.title}</h3>
                  <p className="text-gray-400">{exp.company} • {exp.location}</p>
                </div>
                <span className="text-sm text-gray-400 whitespace-nowrap md:text-right">{exp.period}</span>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-300 flex gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
