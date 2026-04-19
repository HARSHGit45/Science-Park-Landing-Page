import { Link } from "react-router-dom";
import CollegeHeader from "@/components/CollegeHeader";
import pccoeLogo from "@/assets/pccoe-logo.png";

const FloatingIcon = ({
  children,
  className = "",
  delay = "0s",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) => (
  <span
    className={`absolute text-4xl sm:text-5xl md:text-6xl select-none animate-float ${className}`}
    style={{ animationDelay: delay }}
    aria-hidden="true"
  >
    {children}
  </span>
);

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-hero animate-bg-pan">
      {/* Decorative floating icons */}
      <FloatingIcon className="top-24 left-6 md:top-28 md:left-16" delay="0s">⚡</FloatingIcon>
      <FloatingIcon className="top-40 right-8 md:top-32 md:right-24" delay="1s">☀️</FloatingIcon>
      <FloatingIcon className="bottom-32 left-10 md:bottom-24 md:left-32" delay="0.5s">🔬</FloatingIcon>
      <FloatingIcon className="bottom-40 right-12 md:bottom-28 md:right-40" delay="1.5s">🚀</FloatingIcon>
      <FloatingIcon className="top-1/2 left-4 hidden md:block" delay="2s">🧪</FloatingIcon>
      <FloatingIcon className="top-1/2 right-4 hidden md:block" delay="2.5s">💡</FloatingIcon>

      <CollegeHeader />

      <section className="relative z-10 flex flex-col items-center justify-start text-center px-6 pt-4 pb-12 md:pt-6 md:pb-20 min-h-[calc(100vh-80px)]">
        <img
          src={pccoeLogo}
          alt="PCCOE - Pimpri Chinchwad College of Engineering logo"
          className="mx-auto w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mb-6 drop-shadow-lg rounded-full bg-white/90 p-2"
        />

        <div className="inline-block bg-white/30 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/40 shadow-soft">
          <span className="text-sm md:text-base font-semibold text-white">
            ✨ Science Park Exhibit ✨
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.15)] leading-tight max-w-4xl">
          Welcome to <span className="block text-[hsl(var(--sunshine))]">Science Park</span>
        </h1>

        <p className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display">
          Learn Science the Fun Way! 🎉
        </p>

        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/95 font-medium leading-relaxed">
          Explore exciting science exhibits designed to make learning
          interactive and fun. Discover how energy, power, and electricity work
          in real life!
        </p>

        <Link
          to="/exhibits"
          className="group mt-10 inline-flex items-center gap-3 bg-gradient-sun text-[hsl(var(--sunshine-foreground))] font-display font-bold text-xl sm:text-2xl px-10 py-5 rounded-full shadow-pop animate-glow-pulse hover:scale-110 active:scale-95 transition-transform duration-300"
        >
          Explore Exhibits
          <span className="inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
            🚀
          </span>
        </Link>

      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-sm mb-12">
            Interactive Learning Features 🎓
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* AI Generated Videos */}
            <div className="bg-gradient-to-br from-purple-400/20 to-purple-600/20 border-2 border-purple-300/30 rounded-2xl p-8 shadow-soft hover:shadow-pop transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">AI Generated Videos</h3>
              <p className="text-white/85 leading-relaxed">
                Personalized videos tailored to different age groups for better understanding and engagement.
              </p>
            </div>

            {/* 3D Models */}
            <div className="bg-gradient-to-br from-blue-400/20 to-blue-600/20 border-2 border-blue-300/30 rounded-2xl p-8 shadow-soft hover:shadow-pop transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Explore via 3D Models</h3>
              <p className="text-white/85 leading-relaxed">
                Interactive 3D visualizations to explore scientific concepts from every angle.
              </p>
            </div>

            {/* VR Labs */}
            <div className="bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 border-2 border-cyan-300/30 rounded-2xl p-8 shadow-soft hover:shadow-pop transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-4">🥽</div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">3D DIY VR Labs</h3>
              <p className="text-white/85 leading-relaxed">
                Hands-on virtual reality experiments for immersive DIY learning experiences.
              </p>
            </div>

            {/* Admin Dashboard */}
            <div className="bg-gradient-to-br from-green-400/20 to-green-600/20 border-2 border-green-300/30 rounded-2xl p-8 shadow-soft hover:shadow-pop transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Admin Dashboard</h3>
              <p className="text-white/85 leading-relaxed">
                Track and analyze feedback from visitors to continuously improve the science park experience.
              </p>
            </div>

            {/* RAG Chatbot */}
            <div className="bg-gradient-to-br from-pink-400/20 to-pink-600/20 border-2 border-pink-300/30 rounded-2xl p-8 shadow-soft hover:shadow-pop transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">RAG Chatbot</h3>
              <p className="text-white/85 leading-relaxed">
                Intelligent assistant powered by AI to answer questions about science and experiments.
              </p>
            </div>

            {/* More to Come */}
            <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border-2 border-yellow-300/30 rounded-2xl p-8 shadow-soft hover:shadow-pop transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">More Coming Soon</h3>
              <p className="text-white/85 leading-relaxed">
                Stay tuned for additional interactive features and enhancements to the science park.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
