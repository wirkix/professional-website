import Header from "@/components/Header";

export default function CV() {
  return (
    <div className="min-h-screen bg-brand-50 text-brand-950">
      <Header />

      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-brand-900 mb-8 text-center">
            Currículum Vitae
          </h1>

          {/* Personal Info */}
          <div className="bg-white/5 rounded-xl p-6 mb-12">
            <h2 className="text-xl font-semibold text-brand-700 mb-4">
              Información Personal
            </h2>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <p><span className="font-medium text-brand-800">Nombre:</span> <span className="text-brand-900">Tu Nombre</span></p>
                <p><span className="font-medium text-brand-800">Especialidad:</span> <span className="text-brand-900">Desarrollo Web Full-Stack</span></p>
                <p><span className="font-medium text-brand-800">Ubicación:</span> <span className="text-brand-900">Tu Ciudad</span></p>
                <p><span className="font-medium text-brand-800">Disponibilidad:</span> <span className="text-brand-900">Disponible para nuevos proyectos</span></p>
              </div>
              <div>
                <p><span className="font-medium text-brand-800">Teléfono:</span> <span className="text-brand-900">+XX XXXX XXXX</span></p>
                <p><span className="font-medium text-brand-800">Email:</span> <span className="text-brand-900"><a href="mailto:tu@email.com" className="text-brand-500 hover:underline">tu@email.com</a></span></p>
                <p><span className="font-medium text-brand-800">LinkedIn:</span> <span className="text-brand-900"><a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">linkedin.com/in/your-profile</a></span></p>
                <p><span className="font-medium text-brand-800">GitHub:</span> <span className="text-brand-900"><a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">github.com/your-github</a></span></p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-700 mb-6">
              Experiencia Profesional
            </h2>

            {/* Experience Item */}
            <div className="mb-10">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center">
                  <span className="text-brand-700 font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-brand-800">Desarrollador Senior</h3>
                  <p className="text-sm text-brand-500 mb-2">Empresa XYZ • Enero 2022 - Presente</p>
                  <ul className="list-disc list-inside space-y-2 text-brand-900">
                    <li>Desarrollo de aplicaciones web con React, Next.js y Node.js</li>
                    <li>Implementación de APIs RESTful y GraphQL con Supabase</li>
                    <li>Optimización de rendimiento y escalabilidad de sistemas</li>
                    <li>Colaboración con equipos multidisciplinarios en metodologías ágiles</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience Item */}
            <div className="mb-10">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center">
                  <span className="text-brand-700 font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-brand-800">Desarrollador Frontend</h3>
                  <p className="text-sm text-brand-500 mb-2">Startup ABC • Junio 2020 - Diciembre 2021</p>
                  <ul className="list-disc list-inside space-y-2 text-brand-900">
                    <li>Desarrollo de interfaces de usuario con React y TypeScript</li>
                    <li>Implementación de animaciones y microinteracciones avanzadas</li>
                    <li>Integración con APIs externas y servicios de terceros</li>
                    <li>Participación en código reviews y mejores prácticas de frontend</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-700 mb-6">
              Educación
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-brand-800">Licenciatura en Sistemas</h3>
                <p className="text-sm text-brand-500">Universidad Nacional • 2016 - 2020</p>
                <p className="text-brand-700">Enfoque: Desarrollo de Software y Base de Datos</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-brand-800">Certificaciones Relevantes</h3>
                <p className="text-sm text-brand-500 mb-2">2020 - 2023</p>
                <ul className="list-disc list-inside space-y-1 text-brand-900">
                  <li>AWS Certified Developer Associate</li>
                  <li>Google Cloud Professional Developer</li>
                  <li>MongoDB Certified Developer</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-700 mb-6">
              Habilidades Técnicas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">Frontend</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>React • Next.js • TypeScript • Tailwind CSS</li>
                  <li>HTML5 • CSS3 • JavaScript ES6+</li>
                  <li>Redux • Context API • Zustand</li>
                  <li>Framer Motion • Chart.js • D3.js</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">Backend</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>Node.js • Python • Java</li>
                  <li>Express • FastAPI • Spring Boot</li>
                  <li>Supabase • PostgreSQL • MongoDB</li>
                  <li>GraphQL • REST API • WebSockets</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">DevOps & Tools</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>Git • GitHub • Docker • Vercel</li>
                  <li>CI/CD • Jest • Testing Library • Cypress</li>
                  <li>Figma • Adobe XD • Notion • Linear</li>
                  <li>Linux • AWS • Google Cloud</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
