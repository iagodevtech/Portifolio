import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa'
import './Navbar.css'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { path: '/', label: 'INÍCIO', icon: <FaHome /> },
    { path: '/sobre', label: 'SOBRE', icon: <FaUser /> },
    { path: '/projetos', label: 'PROJETOS', icon: <FaCode /> },
    { path: '/contato', label: 'CONTATO', icon: <FaEnvelope /> }
  ]

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/">
            <span className="logo-text">Iago</span>
            <span className="logo-subtitle">Dev</span>
          </Link>
        </motion.div>

        <div className="nav-menu">
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <motion.div
            key={item.path}
            whileHover={{ x: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={item.path}
              className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <span className="mobile-nav-icon">{item.icon}</span>
              <span className="mobile-nav-label">{item.label}</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
