import Image from 'next/image';

export default function MainPane() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)',
      }}
    >
      {/* Abstract Blurred Shapes with Subtle Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-gradient-to-br from-blue-200/40 via-indigo-200/30 to-purple-200/40 rounded-full blur-3xl opacity-50 shadow-[0_0_60px_15px_#8b5cf6] animate-blob1" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-gradient-to-tr from-purple-200/40 via-indigo-200/30 to-blue-200/40 rounded-full blur-3xl opacity-45 shadow-[0_0_60px_15px_#ec4899] animate-blob2" />
        <div className="absolute top-1/2 left-1/2 w-[30vw] h-[30vw] bg-gradient-to-br from-indigo-100/35 via-blue-100/25 to-purple-100/35 rounded-full blur-2xl opacity-40 shadow-[0_0_40px_10px_#3b82f6] animate-blob3" />
        {/* Subtle Light Particles */}
        {[...Array(15)].map((_, i) => (
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

      {/* Main Content with Glassmorphism */}
      <div className="relative z-10 w-full max-w-4xl">
        <div className="mb-12 flex flex-col items-center">
          {/* Professional Avatar */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white/50 backdrop-blur-xl flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
              <Image
                src="/astronaut.jpg"
                alt="Profile Avatar"
                width={128}
                height={128}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            {/* Subtle Glow */}
            <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-blue-400/20 animate-pulse pointer-events-none"></div>
          </div>
          {/* Name with Glassmorphism */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 shadow-2xl mb-6 animate-fade-in delay-100">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-gray-800 drop-shadow-lg">
              Rohan Majeed
            </h1>
            <div className="text-gray-600 text-lg md:text-xl font-medium animate-fade-in delay-200">
              Full-Stack Developer | AI-Driven Interfaces | Clean Code & Modern UI
            </div>
          </div>
        </div>
        {/* Description with Glassmorphism */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 shadow-lg mb-12 animate-fade-in delay-300">
          <p className="text-gray-700 text-xl md:text-2xl mx-auto leading-relaxed">
            Crafting fast, responsive web apps with React, Next.js, and Tailwind. Passionate about blending design with AI to build smart digital experiences.
          </p>
        </div>
        {/* Action Buttons */}
        <div className="flex justify-center items-center animate-fade-in delay-400">
          <button className="px-10 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
            Download CV
          </button>
        </div>
        {/* Tech Stack Pills */}
        <div className="mt-16 flex justify-center gap-4 flex-wrap animate-fade-in delay-500">
          {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'AI/ML'].map((tech, index) => (
            <div
              key={tech}
              className="px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-white/60 text-gray-700 text-sm font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 hover:scale-105 shadow-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
