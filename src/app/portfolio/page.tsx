import Header from "@/components/Header";

const projects = [
  {
    id: 1,
    title: "E-commerce Full Stack",
    description: "Plataforma completa de comercio electrónico con carrito, pagos y panel de administración",
    technologies: ["Next.js", "Supabase", "Stripe", "Tailwind"],
    image: "/projects/ecommerce.jpg",
    github: "https://github.com/your-github/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Panel de métricas en tiempo real con gráficos interactivos y exportación de datos",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    image: "/projects/dashboard.jpg",
    github: "https://github.com/your-github/dashboard",
    demo: "https://dashboard-demo.vercel.app",
    featured: false,
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Aplicación de gestión de tareas colaborativa con drag & drop y notificaciones",
    technologies: ["Next.js", "Supabase", "React Beautiful DND", "Socket.io"],
    image: "/projects/tasks.jpg",
    github: "https://github.com/your-github/tasks",
    demo: "https://tasks-demo.vercel.app",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Personal",
    description: "Este mismo sitio web - portafolio profesional con Next.js 15, Tailwind y Supabase",
    technologies: ["Next.js", "Supabase", "Tailwind", "Vercel"],
    image: "/projects/portfolio.jpg",
    github: "https://github.com/your-github/portfolio",
    demo: "https://portfolio-demo.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "API Gateway Service",
    description: "Microservicio de gateway API con rate limiting, autenticación y logging",
    technologies: ["Go", "Docker", "Kubernetes", "Redis"],
    image: "/projects/api-gateway.jpg",
    github: "https://github.com/your-github/api-gateway",
    demo: null,
    featured: false,
  },
  {
    id: 6,
    title: "Real-time Chat App",
    description: "Aplicación de mensajería en tiempo real con salas, archivos y reacciones",
    technologies: ["React", "Supabase Realtime", "TypeScript", "Tailwind"],
    image: "/projects/chat.jpg",
    github: "https://github.com/your-github/chat",
    demo: "https://chat-demo.vercel.app",
    featured: false,
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-brand-50 text-brand-950">
      <Header />

      <section className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Portafolio de Proyectos
            </h1>
            <p className="text-brand-600 max-w-2xl mx-auto">
              Selección de proyectos destacados que demuestran experiencia en desarrollo
              full-stack, arquitectura de sistemas y diseño de productos digitales.
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-16">
            {projects.filter(p => p.featured).map(project => (
              <article key={project.id} className="grid md:grid-cols-2 gap-8 items-center">
                <div className="w-full aspect-video bg-brand-200 rounded-xl flex items-center justify-center">
                  <span className="text-brand-500 text-lg">Imagen del proyecto</span>
                </div>
                <div>
                  <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-3 inline-block">
                    Proyecto Destacado
                  </span>
                  <h2 className="text-2xl font-bold text-brand-800 mb-3">{project.title}</h2>
                  <p className="text-brand-700 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-brand-100 text-brand-600 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-brand-500 text-brand-700 rounded-lg font-medium hover:bg-brand-100 transition"
                      >
                        Código
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-brand-700 text-brand-50 rounded-lg font-medium hover:bg-brand-800 transition"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Other Projects */}
          <h2 className="text-2xl font-semibold text-brand-700 mb-8">Otros Proyectos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map(project => (
              <article key={project.id} className="bg-white/5 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-full aspect-video bg-brand-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-brand-500 text-sm">Imagen del proyecto</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-800 mb-2">{project.title}</h3>
                <p className="text-brand-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 bg-brand-100 text-brand-500 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand-500 hover:text-brand-700 font-medium"
                    >
                      Código
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand-500 hover:text-brand-700 font-medium"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}