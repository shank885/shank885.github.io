import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link
    const mailtoLink = `mailto:shashankshekhar885@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'shashankshekhar885@gmail.com',
      link: 'mailto:shashankshekhar885@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 70868 34114',
      link: 'tel:+917086834114'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bengaluru, India',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/shank885',
      color: 'hover:bg-gray-700'
    },
    {
      icon: FaLinkedinIn,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/shank885',
      color: 'hover:bg-blue-600'
    },
    {
      icon: FaXTwitter,
      name: 'X (Twitter)',
      url: 'https://x.com/shank885',
      color: 'hover:bg-black'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4 text-center"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          I'm always interested in hearing about new projects, collaborations, and opportunities.
          Feel free to reach out through any of the methods below.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <a
                    key={index}
                    href={method.link}
                    className="flex items-start gap-4 p-4 bg-primary/50 rounded-lg border border-secondary hover:border-accent/50 transition-colors group"
                  >
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                      <p className="text-gray-400 group-hover:text-accent transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="pt-4">
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-primary/50 rounded-lg border border-secondary ${social.color} hover:border-transparent text-gray-300 hover:text-white transition-all`}
                      title={social.name}
                    >
                      <Icon size={22} />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-primary/50 p-8 rounded-lg border border-secondary space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary rounded border border-secondary/50 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary rounded border border-secondary/50 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary rounded border border-secondary/50 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-secondary rounded border border-secondary/50 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
              />

              <button
                type="submit"
                disabled={submitted}
                className="w-full px-6 py-3 bg-accent hover:bg-accentDark disabled:opacity-50 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>✓ Message Sent</>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-gray-400 text-xs text-center">
                I'll get back to you as soon as possible!
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
