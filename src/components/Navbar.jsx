import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, GitBranch, Mail, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const sectionLinks = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Experience', section: 'experience' },
    { name: 'Skills', section: 'skills' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' },
  ]

  function scrollToSection(id) {
    setIsOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      // wait for navigation then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function goToBlog() {
    setIsOpen(false)
    navigate('/blog')
  }

  return (
    <nav className="fixed w-full bg-primary/95 backdrop-blur-md z-50 border-b border-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent cursor-pointer"
          >
            SS
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {sectionLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.section)}
                className="text-gray-300 hover:text-accent transition-colors text-sm font-medium"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={goToBlog}
              className="text-gray-300 hover:text-accent transition-colors text-sm font-medium"
            >
              Blog
            </button>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/shank885" target="_blank" rel="noopener noreferrer"
              className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <GitBranch size={20} className="text-gray-300 hover:text-accent" />
            </a>
            <a href="https://linkedin.com/in/shank885" target="_blank" rel="noopener noreferrer"
              className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <Share2 size={20} className="text-gray-300 hover:text-accent" />
            </a>
            <a href="mailto:shashankshekhar885@gmail.com"
              className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <Mail size={20} className="text-gray-300 hover:text-accent" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 border-t border-secondary"
          >
            {sectionLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.section)}
                className="block w-full text-left py-2 text-gray-300 hover:text-accent transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={goToBlog}
              className="block w-full text-left py-2 text-gray-300 hover:text-accent transition-colors"
            >
              Blog
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
