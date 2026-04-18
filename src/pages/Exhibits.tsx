import { Link } from "react-router-dom";
import CollegeHeader from "@/components/CollegeHeader";

type Exhibit = {
  title: string;
  emoji: string;
  description: string;
  gradient: string;
};

const exhibits: Exhibit[] = [
  {
    title: "Solar Energy",
    emoji: "☀️",
    description: "See how sunlight turns into electricity!",
    gradient: "bg-gradient-card-1",
  },
  {
    title: "Steam Power",
    emoji: "🚂",
    description: "Discover how steam creates powerful motion!",
    gradient: "bg-gradient-card-2",
  },
  {
    title: "Electricity Generation",
    emoji: "⚡",
    description: "Learn how electricity is produced and used!",
    gradient: "bg-gradient-card-3",
  },
];

const Exhibits = () => {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="relative">
        <CollegeHeader />
        <div className="px-4 sm:px-8 pt-2 pb-6 flex justify-between items-center max-w-6xl mx-auto w-full">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white text-foreground font-semibold px-5 py-2.5 rounded-full shadow-soft hover:shadow-pop hover:-translate-x-1 transition-all duration-300 border-2 border-[hsl(var(--sky))]"
          >
            <span>⬅️</span> Back to Home
          </Link>
          <span className="hidden sm:inline-block text-2xl animate-spin-slow">🔬</span>
        </div>
      </header>

      {/* Title */}
      <section className="text-center px-6 py-8 md:py-12">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[hsl(var(--grape))] drop-shadow-sm">
          Explore Science Exhibits
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/70 font-medium">
          Pick an exhibit and start your adventure! 🎈
        </p>
      </section>

      {/* Cards Grid */}
      <section className="flex-1 px-4 sm:px-8 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibits.map((ex, i) => (
            <article
              key={ex.title}
              className={`${ex.gradient} rounded-3xl p-8 shadow-soft hover:shadow-pop hover:-translate-y-3 hover:scale-[1.03] transition-all duration-300 border-4 border-white/40`}
              style={{ animation: `float ${5 + i}s ease-in-out infinite` }}
            >
              <div className="text-7xl mb-4 text-center drop-shadow-md">
                {ex.emoji}
              </div>
              <h2 className="font-display text-3xl font-bold text-white text-center drop-shadow">
                {ex.title}
              </h2>
              <p className="mt-3 text-white/95 text-center text-lg font-medium leading-relaxed">
                {ex.description}
              </p>
              <div className="mt-6 flex justify-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-white text-foreground font-bold px-6 py-3 rounded-full shadow-soft hover:scale-110 active:scale-95 transition-transform duration-200"
                >
                  Open Exhibit ✨
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8 px-6 text-center">
        <p className="font-display text-lg font-semibold">
          🎓 Pimpri Chinchwad College of Engineering
        </p>
        <p className="mt-2 text-white/70 text-sm">
          Made for interactive learning 💡
        </p>
      </footer>
    </main>
  );
};

export default Exhibits;
