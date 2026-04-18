import { Link } from "react-router-dom";
import CollegeHeader from "@/components/CollegeHeader";

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
      <FloatingIcon className="top-1/3 right-4 hidden md:block" delay="2.5s">💡</FloatingIcon>

      <CollegeHeader />

      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 md:py-20 min-h-[calc(100vh-80px)]">
        <div className="inline-block bg-white/30 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/40 shadow-soft">
          <span className="text-sm md:text-base font-semibold text-white">
            ✨ Science Park Exhibit ✨
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.15)] leading-tight max-w-4xl">
          Welcome to <span className="block text-[hsl(var(--sunshine))]">PCCOE Science Park</span>
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
    </main>
  );
};

export default Index;
