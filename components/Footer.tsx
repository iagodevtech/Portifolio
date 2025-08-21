import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaArrowUp, FaLink, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/iagodevtech', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/iago-alves-b502a518b/', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://x.com/iagodevtech', label: 'Twitter' },
    { icon: <FaWhatsapp />, url: 'https://w.app/iagodevtech', label: 'Whatsapp'}
  ]

  const quickLinks = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/projetos', label: 'Projetos' },
    { path: '/contato', label: 'Contato' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <motion.div
              className="footer-brand"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="footer-logo">
                <span className="logo-text">Iago</span>
                <span className="logo-subtitle">Dev</span>
              </div>
              <p className="footer-description">
                Desenvolvedor FullStack apaixonado por criar soluções inovadoras 
                e experiências digitais excepcionais.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="footer-links"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4>Links Rápidos</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link to={link.path}>{link.label}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              className="footer-services"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>Serviços</h4>
              <ul>
                <li>Desenvolvimento Web</li>
                <li>Desenvolvimento Mobile</li>
                <li>Consultoria em TI</li>
                <li>Análise de Dados</li>
                <li>Manutenção de Sistemas</li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="footer-contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>Contato</h4>
              <div className="contact-info">
                <p>📧 iagodevtech@gmail.com</p>
                <p>📱 +55 (21) 95922-0456</p>
                <p>📍 Rio de Janeiro, RJ - Brasil</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="footer-bottom-content">
              <p className="copyright">
                © 2024 Iago Alves Medeiros. Todos os direitos reservados.
              </p>
              <p className="made-with">
                Feito com <FaHeart className="heart-icon" /> usando React & TypeScript
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="scroll-to-top"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  )
}

export default Footer
