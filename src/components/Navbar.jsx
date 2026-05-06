import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, GitBranch, Mail, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed w-full bg-primary/95 backdrop-blur-md z-50 border-b border-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent"
          >
            SS
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-accent transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
