import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Camera, Trash2, Upload } from 'lucide-react'

export default function Hero() {
  const [photo, setPhoto] = useState(null)
  const [showMenu, setShowMenu] = useState(false)
  const fileInputRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const saved = localStorage.getItem('profilePhoto')
    if (saved) setPhoto(saved)
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleFileChange(e) {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const dataUrl = ev.target.result
      setPhoto(dataUrl)
      localStorage.setItem('profilePhoto', dataUrl)
    }
    reader.readAsDataURL(file)
    setShowMenu(false)
    e.target.value = ''
  }

  function handleDelete() {
    setPhoto(null)
    localStorage.removeItem('profilePhoto')
    setShowMenu(false)
  }

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Avatar with photo controls */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block relative"
            ref={menuRef}
          >
            {/* Avatar ring */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-blue-400 p-1">
              <div className="w-full h-full rounded-full bg-primary flex items-center justify-center overflow-hidden">
                {photo
                  ? <img src={photo} alt="Profile" className="w-full h-full object-cover" />
                  : <span className="text-4xl font-bold">SS</span>
                }
              </div>
            </div>

            {/* Camera button */}
            <button
              onClick={() => setShowMenu(v => !v)}
              className="absolute bottom-0 right-0 w-9 h-9 bg-accent hover:bg-accentDark rounded-full flex items-center justify-center border-2 border-primary transition-colors shadow-lg"
              title="Change photo"
            >
              <Camera size={15} className="text-white" />
            </button>

            {/* Dropdown menu */}
            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 mt-3 w-44 bg-secondary border border-secondary/50 rounded-xl shadow-xl overflow-hidden z-50"
                  style={{ transform: 'translateX(-50%)' }}
                >
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-accent/10 hover:text-white transition-colors"
                  >
                    <Upload size={15} className="text-accent" />
                    {photo ? 'Change photo' : 'Upload photo'}
                  </button>
                  {photo && (
                    <button
                      onClick={handleDelete}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors border-t border-secondary/50"
                    >
                      <Trash2 size={15} />
                      Remove photo
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
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
