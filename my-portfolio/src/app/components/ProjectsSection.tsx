export default function ProjectsSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '🛒',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📋',
      tech: ['Next.js', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot powered by OpenAI API with natural language processing and context-aware responses.',
      image: '🤖',
      tech: ['React', 'OpenAI API', 'Node.js', 'Express'],
      link: '#',
      github: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations and interactive elements built with Next.js and Framer Motion.',
      image: '🎨',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <section 
      id="projects" 
      className="relative py-20 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)',
      }}
    >
      {/* Abstract Blurred Shapes with Subtle Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[5%] w-[30vw] h-[30vw] bg-gradient-to-br from-blue-200/40 via-indigo-200/30 to-purple-200/40 rounded-full blur-3xl opacity-50 shadow-[0_0_60px_15px_#3b82f6] animate-blob1" />
        <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] bg-gradient-to-tl from-purple-200/40 via-indigo-200/30 to-blue-200/40 rounded-full blur-3xl opacity-45 shadow-[0_0_60px_15px_#ec4899] animate-blob2" />
        <div className="absolute top-1/2 right-1/3 w-[20vw] h-[20vw] bg-gradient-to-br from-indigo-100/35 via-blue-100/25 to-purple-100/35 rounded-full blur-2xl opacity-40 shadow-[0_0_40px_10px_#8b5cf6] animate-blob3" />
        {/* Subtle Light Particles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-white/50 shadow-lg animate-particle${i % 3 + 1}`}
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.4 + Math.random() * 0.3,
              filter: 'blur(2px) drop-shadow(0 0 8px #fff8)',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg animate-float">
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 bg-clip-text text-transparent animate-pulse">
              My Projects
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Each one represents a unique challenge and showcases different aspects of my development skills.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/60 shadow-2xl p-6 flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{project.image}</div>
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
              </div>
              <p className="text-gray-700 mb-3 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-xs font-medium border border-white/60 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <a href={project.link} className="px-4 py-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 transition-all duration-200 hover:scale-105">Live Demo</a>
                <a href={project.github} className="px-4 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-full bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-gray-50 hover:to-indigo-50 hover:border-indigo-300 hover:text-indigo-700 transition-all duration-200">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 