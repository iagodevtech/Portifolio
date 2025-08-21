import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaProjectDiagram } from 'react-icons/fa'
import MiniGame from '../components/MiniGame'
import './Home.css'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [currentText, setCurrentText] = useState('')
  const [fullText] = useState('Desenvolvedor FullStack apaixonado por criar soluções inovadoras')
  const [textIndex, setTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (textIndex < fullText.length && isTyping) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, textIndex + 1))
        setTextIndex(textIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else if (textIndex === fullText.length) {
      setTimeout(() => setIsTyping(false), 2000)
    }
  }, [textIndex, isTyping, fullText])

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/iagodevtech', label: 'GitHub' },


    { icon: <FaTwitter />, url: 'https://x.com/iagodevtech', label: 'Twitter' }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Olá, eu sou <span className="highlight">Iago Alves Medeiros</span>
            </motion.h1>
            
            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {currentText}
              <span className="cursor">|</span>
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Formado em Análise e Desenvolvimento de Sistemas, cursando pós-graduação em 
              Administração de Banco de Dados. Apaixonado por desenvolvimento Front-end e 
              explorando as vertentes de Back-end para me tornar um futuro FullStack.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/projetos')}
              >
                <FaProjectDiagram />Projetos
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://www.linkedin.com/in/iago-alves-b502a518b/', '_blank')}
              >
                <FaLinkedin /> LinkedIn
              </motion.button>
            </motion.div>

            <motion.div
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  {social.icon}
                  <span className="social-label">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

                      <motion.div
              className="hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="profile-photo"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/profile-photo.png" 
                  alt="Iago - Desenvolvedor FullStack" 
                  className="profile-image"
                />
              </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Mini Game Section */}
      <section className="game-section">
        <motion.div
          className="game-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">🎮 Mini Jogo - Teste suas Habilidades!</h2>
          <p className="section-description">
            Enquanto explora meu portfólio, que tal jogar um pouco? 
            Este é um jogo de memória que testa sua capacidade de concentração!
          </p>
          <MiniGame />
        </motion.div>
      </section>

      {/* Skills Preview */}
      <section className="skills-preview">
        <motion.div
          className="skills-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">🛠️ Tecnologias & Ferramentas</h2>
          <div className="skills-grid">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'Java', 'Flutter',
              'MongoDB', 'PostgreSQL', 'MySQL', 'Git', 'Docker', 'AWS'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
