import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com sistema de pagamentos, gestão de produtos, painel administrativo e sistema de usuários. Inclui funcionalidades de carrinho, checkout, histórico de pedidos e dashboard de vendas.',
    image: '/projects/ecommerce.svg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TypeScript', 'Express', 'JWT', 'Redux'],
    category: 'fullstack',
    githubUrl: 'https://github.com/iago-alves-medeiros/ecommerce-platform',
    liveUrl: 'https://ecommerce-iago.vercel.app',
    featured: true,
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'TaskFlow - Gerenciador de Tarefas',
    description: 'Aplicativo completo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real. Inclui sistema de projetos, equipes, notificações, calendário integrado e relatórios de produtividade.',
    image: '/projects/task-app.svg',
    technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript', 'Framer Motion', 'React Query', 'PWA'],
    category: 'frontend',
    githubUrl: 'https://github.com/iago-alves-medeiros/taskflow-app',
    liveUrl: 'https://taskflow-iago.netlify.app',
    featured: true,
    date: '2023-12-20'
  },
  {
    id: '3',
    title: 'DataMaster - Sistema de Gestão de Bancos',
    description: 'Sistema completo de gerenciamento de bancos de dados com interface web intuitiva. Inclui monitoramento de performance, backup automático, análise de queries, relatórios personalizados e alertas em tempo real.',
    image: '/projects/database-system.svg',
    technologies: ['Python', 'PostgreSQL', 'Flask', 'SQLAlchemy', 'Bootstrap', 'Redis', 'Celery', 'Docker'],
    category: 'database',
    githubUrl: 'https://github.com/iago-alves-medeiros/datamaster-db',
    liveUrl: 'https://datamaster-demo.herokuapp.com',
    featured: false,
    date: '2023-11-10'
  },
  {
    id: '4',
    title: 'EventHub - App de Gestão de Eventos',
    description: 'Aplicativo móvel completo para gestão de eventos e conferências desenvolvido com FlutterFlow. Inclui sistema de inscrições, check-in, networking, agenda personalizada, notificações push e integração com redes sociais.',
    image: '/projects/mobile-app.svg',
    technologies: ['FlutterFlow', 'Firebase', 'Google Cloud', 'JavaScript', 'Firestore', 'Cloud Functions', 'PWA'],
    category: 'mobile',
    githubUrl: 'https://github.com/iago-alves-medeiros/eventhub-app',
    liveUrl: 'https://eventhub-iago.web.app',
    featured: true,
    date: '2023-10-05'
  },
  {
    id: '5',
    title: 'BusinessInsight - Dashboard Executivo',
    description: 'Dashboard executivo completo desenvolvido com PowerApps para análise de dados empresariais em tempo real. Inclui KPIs personalizáveis, relatórios interativos, alertas automáticos e integração com múltiplas fontes de dados.',
    image: '/projects/powerapps-dashboard.svg',
    technologies: ['PowerApps', 'Power BI', 'SharePoint', 'Excel', 'Power Automate', 'Power Query', 'DAX', 'Azure'],
    category: 'tools',
    githubUrl: 'https://github.com/iago-alves-medeiros/business-insight-dashboard',
    liveUrl: 'https://businessinsight-iago.powerapps.com',
    featured: false,
    date: '2023-09-15'
  },
  {
    id: '6',
    title: 'UserHub - API REST Completa',
    description: 'API REST robusta e escalável para sistema de gestão de usuários com autenticação JWT, autorização baseada em roles, validação de dados, rate limiting, logging estruturado e documentação Swagger completa.',
    image: '/projects/api-rest.svg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger', 'Redis', 'Joi', 'Winston', 'Helmet'],
    category: 'backend',
    githubUrl: 'https://github.com/iago-alves-medeiros/userhub-api',
    liveUrl: 'https://userhub-api.herokuapp.com/api-docs',
    featured: false,
    date: '2023-08-20'
  },
  {
    id: '7',
    title: 'DataFlow - Pipeline ETL Inteligente',
    description: 'Pipeline de dados ETL completo e inteligente para processamento e transformação de dados empresariais. Inclui orquestração com Airflow, transformações com Pandas, armazenamento em data warehouse e monitoramento em tempo real.',
    image: '/projects/etl-pipeline.svg',
    technologies: ['Python', 'Apache Airflow', 'PostgreSQL', 'Pandas', 'Docker', 'Kubernetes', 'Apache Kafka', 'dbt'],
    category: 'database',
    githubUrl: 'https://github.com/iago-alves-medeiros/dataflow-etl',
    liveUrl: 'https://dataflow-demo.airflow.com',
    featured: false,
    date: '2023-07-10'
  },
  {
    id: '8',
    title: 'Portfolio Profissional Interativo',
    description: 'Website de portfolio pessoal com design responsivo e funcionalidades interativas avançadas. Inclui mini-game da memória, animações fluidas, tema escuro/claro, PWA e deploy automático via GitHub Actions.',
    image: '/projects/portfolio.svg',
    technologies: ['React', 'TypeScript', 'CSS3', 'Framer Motion', 'Vite', 'PWA', 'GitHub Actions', 'Responsive Design'],
    category: 'frontend',
    githubUrl: 'https://github.com/iago-alves-medeiros/portfolio',
    liveUrl: 'https://iago-alves-medeiros.github.io/iago-portfolio',
    featured: true,
    date: '2023-06-01'
  }
];
