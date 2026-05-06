import { motion } from 'framer-motion'
import { ExternalLink, Code } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'In-Scene Ad Placement Platform',
      company: 'Gyrus AI',
      period: '2024 - Present',
      description: 'Enterprise-scale AI-powered platform for intelligent ad placement within video scenes using custom vision models.',
      technologies: ['Python', 'PyTorch', 'Computer Vision', 'Depth Estimation', 'Normal Estimation', 'Real-time Inference'],
      highlights: [
        'Led architecture design for production deployment',
        'Implemented custom vision models for surface normal and depth estimation',
        'Achieved real-time, cost-efficient model deployment',
        'Collaborated with CTOs and senior engineering leadership'
      ],
      link: '#'
    },
    {
      title: 'License Plate Recognition System',
      company: 'Gyrus AI',
      period: '2021 - 2024',
      description: 'End-to-end license plate detection and recognition system achieving high accuracy for real-time applications.',
      technologies: ['Python', 'OpenCV', 'Deep Learning', 'OCR', 'Real-time Processing'],
      highlights: [
        '95% accuracy on license plate detection',
        'Reduced processing time for real-time applications',
        'Optimized for edge deployment',
        'Handles various lighting and angle conditions'
      ],
      link: '#'
    },
    {
      title: 'Face Identity Transfer & Anonymization',
      company: 'Gyrus AI',
      period: '2021 - 2023',
      description: 'Advanced face identity transfer model for consistent video face anonymization, enhancing data privacy and compliance.',
      technologies: ['PyTorch', 'GANs', 'Video Processing', 'Face Recognition', 'Privacy Tech'],
      highlights: [
        'Consistent face anonymization across video frames',
        'Maintains video quality and naturalness',
        'Enhanced data privacy and GDPR compliance',
        'Real-time processing capabilities'
      ],
      link: '#'
    },
    {
      title: 'Driver Attention Detection System',
      company: 'Gyrus AI',
      period: '2021 - 2023',
      description: 'AI system for monitoring driver behavior and issuing alerts for dangerous driving patterns and overspeeding.',
      technologies: ['Computer Vision', 'Pose Estimation', 'Real-time Analysis', 'Alert Systems'],
      highlights: [
        'Detects critical driving behaviors in real-time',
        'Issues timely alerts for overspeeding',
        'Decreased near-miss incidents by significant margin',
        'Integrated with vehicle systems'
      ],
      link: '#'
    },
    {
      title: 'Hand Hygiene Monitoring System',
      company: 'Gyrus AI',
      period: '2019 - 2021',
      description: 'AI-powered system to ensure healthcare professionals meet WHO handwashing standards, boosting compliance.',
      technologies: ['Python', 'Computer Vision', 'OpenCV', 'Edge AI', 'Healthcare Tech'],
      highlights: [
        'Automated compliance monitoring',
        '40% increase in compliance within 3 months',
        'Real-time alerts for non-compliance',
        'Deployed in healthcare facilities'
      ],
      link: '#'
    },
    {
      title: 'Camera Parameter Estimation Model',
      company: 'Gyrus AI',
      period: '2022 - 2023',
      description: 'Custom model inspired by NeRF for accurate camera pose, intrinsic/extrinsic parameter recovery for 3D ad alignment.',
      technologies: ['PyTorch', 'NeRF', '3D Geometry', 'Camera Calibration', 'Scene Reconstruction'],
      highlights: [
        'Accurate pose and parameter estimation',
        'Enables consistent 3D ad alignment across frames',
        'Handles dynamic camera motion',
        'Production-ready implementation'
      ],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="bg-primary/50 rounded-lg border border-secondary hover:border-accent/50 overflow-hidden transition-colors group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-accent group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.company}</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{project.period}</span>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex gap-2">
                        <span className="text-accent">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-400 text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-secondary">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-accent/10 text-accent hover:bg-accent hover:text-white rounded text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
