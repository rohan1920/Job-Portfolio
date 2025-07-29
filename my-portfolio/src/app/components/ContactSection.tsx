export default function ContactSection() {
  const socialLinks = [
    { name: 'GitHub', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
      </svg>
    ), url: 'https://github.com/rohan1920' },
    { name: 'LinkedIn', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
      </svg>
    ), url: 'https://www.linkedin.com/in/rohan-majeed-604a2b289/' },
    { name: 'Instagram', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm6.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      </svg>
    ), url: 'https://www.instagram.com/itsrohxn_01/?hl=en' },
  ];

  return (
    <section 
      id="contact" 
      className="relative py-20 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)',
      }}
    >
      {/* Abstract Blurred Shapes with Subtle Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[10%] w-[32vw] h-[32vw] bg-gradient-to-bl from-purple-200/40 via-indigo-200/30 to-blue-200/40 rounded-full blur-3xl opacity-50 shadow-[0_0_60px_15px_#ec4899] animate-blob1" />
        <div className="absolute bottom-[5%] left-[5%] w-[38vw] h-[38vw] bg-gradient-to-tr from-blue-200/40 via-indigo-200/30 to-purple-200/40 rounded-full blur-3xl opacity-45 shadow-[0_0_60px_15px_#8b5cf6] animate-blob2" />
        <div className="absolute top-1/2 left-1/3 w-[22vw] h-[22vw] bg-gradient-to-br from-indigo-100/35 via-blue-100/25 to-purple-100/35 rounded-full blur-2xl opacity-40 shadow-[0_0_40px_10px_#3b82f6] animate-blob3" />
        {/* Subtle Light Particles */}
        {[...Array(8)].map((_, i) => (
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

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg animate-float">
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent animate-pulse">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Let's connect!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form with Glassmorphism */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/60 shadow-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send me a message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500" 
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500" 
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500" 
              />
              <textarea 
                rows={6} 
                placeholder="Your Message" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500 resize-none" 
              />
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 transition-all duration-200 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Info with Glassmorphism */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/60 shadow-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Let's connect</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              I'm currently available for freelance work and full-time opportunities. Feel free to reach out if you'd like to discuss a project or just say hello!
            </p>
            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-white/60">
                <span className="text-2xl mr-4 text-gray-600">📍</span>
                <div>
                  <div className="text-sm text-gray-600">Location</div>
                  <div className="font-medium text-gray-800">Gujranwala, Pakistan</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-white/60">
                <span className="text-2xl mr-4 text-gray-600">📧</span>
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <div className="font-medium text-gray-800">rohanmajeed7@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-white/60">
                <span className="text-2xl mr-4 text-gray-600">📱</span>
                <div>
                  <div className="text-sm text-gray-600">Phone</div>
                  <div className="font-medium text-gray-800">+92 334 7905592</div>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Follow me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white text-xl shadow-lg hover:shadow-xl hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 transition-all duration-200 hover:scale-110 border border-white/50"
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 