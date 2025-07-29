export default function AboutSection() {
  const skills = [
    { name: 'Frontend', icon: '🎨', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', icon: '⚙️', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { name: 'Tools', icon: '🛠️', items: ['Git', 'Docker', 'AWS', 'Figma'] },
  ];

  return (
    <section 
      id="about" 
      className="relative py-20 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)',
      }}
    >
      {/* Abstract Blurred Shapes with Subtle Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] bg-gradient-to-bl from-purple-200/40 via-indigo-200/30 to-blue-200/40 rounded-full blur-3xl opacity-45 shadow-[0_0_60px_15px_#ec4899] animate-blob1" />
        <div className="absolute bottom-[15%] left-[10%] w-[40vw] h-[40vw] bg-gradient-to-tr from-blue-200/40 via-indigo-200/30 to-purple-200/40 rounded-full blur-3xl opacity-40 shadow-[0_0_60px_15px_#8b5cf6] animate-blob2" />
        <div className="absolute top-1/3 left-1/4 w-[25vw] h-[25vw] bg-gradient-to-br from-indigo-100/35 via-blue-100/25 to-purple-100/35 rounded-full blur-2xl opacity-35 shadow-[0_0_40px_10px_#3b82f6] animate-blob3" />
        {/* Subtle Light Particles */}
        {[...Array(12)].map((_, i) => (
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

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg animate-float">
            <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
              About Me
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm Rohan Majeed, a passionate developer who loves turning ideas into reality through code. With expertise in modern web technologies, I create seamless digital experiences that users love to interact with.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Stats Card with Glassmorphism */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/60 shadow-2xl p-8 flex flex-col items-center mb-8 md:mb-0">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-5xl mb-4 shadow-lg border-4 border-white/50">
              👨‍💻
            </div>
            <div className="flex gap-8 mt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
          {/* Skills Card with Glassmorphism */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/60 shadow-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center mb-2">
                    <span className="text-xl mr-2">{skill.icon}</span>
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-xs font-medium border border-white/60 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 