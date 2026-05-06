import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Plus, Trash2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Blog() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Building Production-Ready Vision Models',
      excerpt: 'A deep dive into the challenges and solutions for deploying computer vision models in production environments.',
      content: `# Building Production-Ready Vision Models

## Introduction
Deploying vision models in production is significantly different from training them in a research environment...

## Key Challenges
1. **Latency Constraints**: Real-time inference requirements
2. **Resource Optimization**: GPU memory and inference costs
3. **Model Robustness**: Handling edge cases and data variations
4. **Scalability**: Managing multiple concurrent requests

## Solutions & Best Practices
- Quantization and pruning for faster inference
- Model distillation for smaller model sizes
- Async processing for high throughput
- Comprehensive testing and validation

## Conclusion
Building production vision systems requires careful consideration of multiple factors beyond just model accuracy.`,
      author: 'Shashank Shekhar',
      date: 'May 1, 2024',
      readTime: '8 min read',
      category: 'AI Engineering'
    },
    {
      id: 2,
      title: 'Understanding 3D Camera Geometry',
      excerpt: 'Exploring camera intrinsics, extrinsics, and their applications in computer vision projects.',
      content: `# Understanding 3D Camera Geometry

## The Basics
Camera geometry is fundamental to understanding how 2D images relate to 3D scenes...

## Camera Parameters
- **Intrinsic Parameters**: Focal length, principal point, distortion coefficients
- **Extrinsic Parameters**: Rotation and translation matrices

## Practical Applications
- 3D reconstruction
- Image rectification
- Depth estimation
- Object positioning in 3D space

## Implementation Tips
Working with camera geometry requires careful matrix operations and coordinate transformations.`,
      author: 'Shashank Shekhar',
      date: 'April 15, 2024',
      readTime: '6 min read',
      category: 'Computer Vision'
    }
  ])

  const [showForm, setShowForm] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'AI Engineering'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAddBlog = (e) => {
    e.preventDefault()
    if (formData.title.trim() && formData.excerpt.trim() && formData.content.trim()) {
      const newBlog = {
        id: blogs.length + 1,
        ...formData,
        author: 'Shashank Shekhar',
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        readTime: `${Math.ceil(formData.content.split(' ').length / 200)} min read`
      }
      setBlogs([newBlog, ...blogs])
      setFormData({ title: '', excerpt: '', content: '', category: 'AI Engineering' })
      setShowForm(false)
    }
  }

  const handleDeleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id))
    setSelectedBlog(null)
  }

  if (selectedBlog) {
    const blog = blogs.find(b => b.id === selectedBlog)
    return (
      <>
        <Navbar />
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedBlog(null)}
              className="flex items-center gap-2 text-accent hover:text-blue-300 mb-8"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </button>

            <article className="bg-secondary/50 rounded-lg border border-secondary p-8 sm:p-12">
              <header className="mb-8">
                <p className="text-accent text-sm font-semibold mb-2">{blog.category}</p>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">{blog.title}</h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 text-sm">
                  <span>{blog.author}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
              </header>

              <div className="prose prose-invert max-w-none">
                {blog.content.split('\n').map((line, idx) => {
                  if (line.startsWith('# ')) {
                    return <h2 key={idx} className="text-3xl font-bold mt-8 mb-4 text-white">{line.substring(2)}</h2>
                  } else if (line.startsWith('## ')) {
                    return <h3 key={idx} className="text-2xl font-bold mt-6 mb-3 text-accent">{line.substring(3)}</h3>
                  } else if (line.startsWith('- ')) {
                    return <li key={idx} className="text-gray-300 ml-6 mb-2">{line.substring(2)}</li>
                  } else if (line.trim()) {
                    return <p key={idx} className="text-gray-300 mb-4 leading-relaxed">{line}</p>
                  }
                  return null
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-secondary flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-sm mb-2">Written by</p>
                  <p className="text-white font-semibold">{blog.author}</p>
                </div>
                <button
                  onClick={() => handleDeleteBlog(blog.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded transition-colors"
                >
                  <Trash2 size={18} />
                  Delete
                </button>
              </div>
            </article>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2">Blog</h1>
              <p className="text-gray-400">Thoughts on AI, Computer Vision, and Engineering</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accentDark text-white rounded-lg transition-colors"
            >
              <Plus size={20} />
              New Post
            </button>
          </div>

          {/* Add Blog Form */}
          {showForm && (
            <motion.form
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleAddBlog}
              className="bg-secondary/50 rounded-lg border border-secondary p-8 mb-12"
            >
              <h2 className="text-2xl font-bold mb-6">Write a New Post</h2>

              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  name="title"
                  placeholder="Post Title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-primary rounded border border-secondary text-white placeholder-gray-500 focus:outline-none focus:border-accent"
                  required
                />

                <input
                  type="text"
                  name="excerpt"
                  placeholder="Brief excerpt (appears in list)"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-primary rounded border border-secondary text-white placeholder-gray-500 focus:outline-none focus:border-accent"
                  required
                />

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-primary rounded border border-secondary text-white focus:outline-none focus:border-accent"
                >
                  <option>AI Engineering</option>
                  <option>Computer Vision</option>
                  <option>Machine Learning</option>
                  <option>Leadership</option>
                  <option>General</option>
                </select>

                <textarea
                  name="content"
                  placeholder="Post content (supports markdown)"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows="10"
                  className="w-full px-4 py-3 bg-primary rounded border border-secondary text-white placeholder-gray-500 focus:outline-none focus:border-accent font-mono text-sm"
                  required
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-accent hover:bg-accentDark text-white font-semibold rounded transition-colors"
                >
                  Publish Post
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-3 bg-secondary hover:bg-secondary/80 text-white font-semibold rounded transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.form>
          )}

          {/* Blog List */}
          <div className="space-y-6">
            {blogs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 mb-4">No blog posts yet. Create one to get started!</p>
              </div>
            ) : (
              blogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedBlog(blog.id)}
                  className="bg-secondary/50 rounded-lg border border-secondary p-6 hover:border-accent/50 transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <p className="text-accent text-sm font-semibold mb-1">{blog.category}</p>
                      <h2 className="text-2xl font-bold group-hover:text-accent transition-colors">{blog.title}</h2>
                    </div>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-accent transition-colors mt-1 ml-4 flex-shrink-0" />
                  </div>

                  <p className="text-gray-300 mb-4">{blog.excerpt}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <span>{blog.author}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                </motion.article>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
