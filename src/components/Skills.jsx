import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'AI & Machine Learning',
      skills: [
        'AI System Architecture & Design',
        'End-to-End ML Lifecycle',
        'Vision Model Training/FineTuning',
        'Deep Learning (CNNs, GANs, RNNs)',
        'Computer Vision',
        'Model Optimization & Quantization'
      ]
    },
    {
      category: 'Computer Vision Expertise',
      skills: [
        '3D Scene Reconstruction',
        'Camera Geometry & Pose Estimation',
        'Optical Flow Analysis',
        'Object Detection & Tracking',
        'Semantic Segmentation',
        'Face Recognition & Anonymization'
      ]
    },
    {
      category: 'Engineering & Deployment',
      skills: [
        'Research to Production Execution',
        'Docker & Containerized Deployments',
        'Model Serving & Inference Optimization',
        'Real-time Processing',
        'System Architecture Design',
        'Performance Optimization'
      ]
    },
    {
      category: 'Leadership & Soft Skills',
      skills: [
        'Technical Leadership',
        'Team Mentorship',
        'Client Collaboration',
        'Stakeholder Management',
        'Cross-functional Communication',
        'Problem Solving'
      ]
    },
    {
      category: 'Technologies & Tools',
      skills: [
        'Python, CUDA, C++',
        'PyTorch, TensorFlow, OpenCV',
        'Git, Linux, Cloud Platforms',
        'Jupyter, VS Code',
        'CI/CD Pipelines',
        'Agile/Scrum'
      ]
    },
    {
      category: 'Specialized Domains',
      skills: [
        'In-Scene Ad Placement',
        'License Plate Recognition',
        'Driver Attention Detection',
        'Hand Hygiene Monitoring',
        'Real-time Video Processing',
        'Edge AI Deployment'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-primary/50 p-6 rounded-lg border border-secondary hover:border-accent/50 transition-colors"
            >
              <h3 className="text-accent font-bold mb-4 text-lg">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
