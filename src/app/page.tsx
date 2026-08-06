import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-50 text-brand-950">
      {/* Header with external profile links */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Profile image placeholder */}
          <div className="w-32 h-32 rounded-full bg-brand-200 mb-6 flex items-center justify-center">
            <span className="text-3xl text-brand-700 font-bold">AP</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">
            Currículum Profesional Portafolio
          </h1>
          <p className="text-brand-600 text-lg max-w-2xl mb-8">
            Desarrollador web full-stack especializado en soluciones escalables
            con Next.js, Supabase y Tailwind CSS. Explora mi experiencia
            profesional y mi portafolio de proyectos destacados.
          </p>

          <div className="flex gap-4">
            <a
              href="/cv"
              className="px-6 py-3 bg-brand-700 text-brand-50 rounded-lg font-medium transition duration-200 hover:bg-brand-800"
            >
              Ver Currículum
            </a>
            <a
              href="/portfolio"
              className="px-6 py-3 border border-brand-500 text-brand-700 rounded-lg font-medium transition duration-200 hover:bg-brand-100"
            >
              Ver Portafolio
            </a>
          </div>
        </div>
      </section>

      {/* Social/External Links */}
      <section className="bg-brand-950 text-brand-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-8 text-brand-100">
            ¿Conectemos?
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-100 hover:text-accent-400 transition duration-200 flex items-center gap-2"
            >
              LinkedIn →
            </a>
            <a
              href="https://www.upwork.com/freelancer/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-100 hover:text-accent-400 transition duration-200 flex items-center gap-2"
            >
              Upwork →
            </a>
            <a
              href="https://github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-100 hover:text-accent-400 transition duration-200 flex items-center gap-2"
            >
              GitHub →
            </a>
            <a
              href="mailto:tu-email@ejemplo.com"
              rel="noopener noreferrer"
              className="text-brand-100 hover:text-accent-400 transition duration-200 flex items-center gap-2"
            >
              Email →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
