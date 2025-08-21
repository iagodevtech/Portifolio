import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaLaptopCode, FaDatabase, FaTools, FaRocket } from 'react-icons/fa'
import './About.css'

const About: React.FC = () => {
  const education = [
    {
      degree: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Faculdade de Tecnologia',
      year: '2020-2023',
      description: 'Formação completa em desenvolvimento de software e sistemas'
    },
    {
      degree: 'Pós-graduação em Administração de Banco de Dados',
      institution: 'Instituto de Tecnologia',
      year: '2025-2026',
      description: 'Especialização em gestão e administração de bancos de dados'
    }
  ]

  const skills = [
    {
      category: 'Frontend',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Flutter']
    },
    {
      category: 'Backend',
      technologies: ['Python', 'Java', 'C++', 'Ruby', 'Node.js']
    },
    {
      category: 'Banco de Dados',
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Oracle', 'SQL Server']
    },
    {
      category: 'Ferramentas',
      technologies: ['Git', 'GitHub', 'GitLab', 'Docker', 'PowerApps', 'FlutterFlow']
    },
    {
      category: 'Outras',
      technologies: ['ETL/ELT', 'Excel Avançado', 'Pacote Office', 'Lucidchart']
    }
  ]

  const experiences = [
    {
      title: 'Gerente de Desenvolvimento',
      company: 'Probelle',
      period: '2020 - 2025',
      description: 'Gestão de equipe de equipe de desenvolvimento, Business Intelligence. Implementação dos sistemas: MEGA ERP - Silt WMS Senior - ORGM - AlterData - Análise de Big Data - Aplicações de scripts com C++ / Python. Desenvolvimento web. '
    },
    {
      title: 'Desenvolvedor Frontend',
      company: 'Autônomo',
      period: '2021 - Presente',
      description: 'Desenvolvimento de aplicações web responsivas e modernas'
    },
    {
      title: 'Analista de Dados',
      company: 'Consultoria Digital',
      period: '2020 - Presente',
      description: 'Análise e processamento de dados com ferramentas ETL/ELT'
    },
    {
      title: 'Desenvolvedor Mobile',
      company: 'Autônomo',
      period: '2024 - Presente',
      description: 'Desenvolvimento de aplicativos mobile com Flutter'
    }
  ]

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="about-title">Sobre Mim</h1>
          <p className="about-subtitle">
            Desenvolvedor apaixonado por tecnologia e inovação
          </p>
        </motion.div>
      </section>

      {/* Personal Info */}
      <section className="personal-info">
        <div className="container">
          <motion.div
            className="info-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="info-text">
              <h2>Quem sou eu?</h2>
              <p>
                Olá! Sou Iago Alves Medeiros, um desenvolvedor apaixonado por criar 
                soluções inovadoras e impactantes. Minha jornada na tecnologia começou 
                com a curiosidade de entender como as coisas funcionam e evoluiu para 
                uma paixão por desenvolvimento.
              </p>
              <p>
                Sou formado em Análise e Desenvolvimento de Sistemas e atualmente 
                estou cursando pós-graduação em Administração de Banco de Dados. 
                Minha especialidade está no desenvolvimento Frontend, mas estou 
                constantemente explorando as vertentes de Backend para me tornar 
                um desenvolvedor FullStack completo.
              </p>
              <p>
                Acredito que a tecnologia deve ser acessível e útil para todos, 
                e por isso me dedico a criar experiências digitais intuitivas e 
                funcionais que realmente fazem a diferença na vida das pessoas.
              </p>
            </div>
                          <div className="info-image">
                <motion.div
                  className="profile-photo"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="/profile-photo.png" 
                    alt="Iago - Desenvolvedor FullStack" 
                    className="profile-image"
                  />
                </motion.div>
              </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="education">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaGraduationCap /> Formação Acadêmica
          </motion.h2>
          
          <div className="education-grid">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="education-icon">
                  <FaGraduationCap />
                </div>
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="year">{edu.year}</p>
                <p className="description">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaLaptopCode /> Habilidades e Tecnologias
          </motion.h2>
          
          <div className="skills-container">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="skill-group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="skill-category">{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="experience">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaRocket /> Experiência Profissional
          </motion.h2>
          
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="experience-content">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="period">{exp.period}</p>
                  <p className="description">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="goals">
        <div className="container">
          <motion.div
            className="goals-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Meus Objetivos</h2>
            <div className="goals-grid">
              <motion.div
                className="goal-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <FaRocket className="goal-icon" />
                <h3>Desenvolvimento FullStack</h3>
                <p>Expandir meus conhecimentos em Backend para me tornar um desenvolvedor completo</p>
              </motion.div>
              
              <motion.div
                className="goal-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <FaDatabase className="goal-icon" />
                <h3>Especialização em Dados</h3>
                <p>Profundizar conhecimentos em administração e análise de bancos de dados</p>
              </motion.div>
              
              <motion.div
                className="goal-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <FaTools className="goal-icon" />
                <h3>Inovação Tecnológica</h3>
                <p>Criar soluções inovadoras que impactem positivamente a sociedade</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
