import Image from "next/image";
import Header from "@/components/Header";
import LivePreview from "@/components/LivePreview";
import ExpandableText from "@/components/ExpandableText";
import TechTags from "@/components/TechTags";

const projects = [
  {
    id: 1,
    title: "Arte y Esencia",
    description: "Sistema web para gestionar inventario, pedidos y catálogo de un emprendimiento: catálogo público con búsqueda y filtros, panel admin con control de insumos, recetas de producto e inventario auditable por movimientos",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel"],
    image: "/projects/arte-y-esencia.jpg",
    github: "https://github.com/wirkix/arte_y_esencia",
    demo: "https://arteyesencia-zeta.vercel.app/",
    featured: true,
    livePreview: true,
    // Still actively being built (inventory/orders flow is real and live,
    // but not everything planned for it is done) -- not "finished and
    // demoing" like the site's other featured-style badges imply.
    inProgress: true,
  },
  {
    id: 2,
    title: "Radar del Mercado Laboral",
    description: "Scraping de vacantes remotas de ingeniería de datos publicadas en We Work Remotely, con análisis para detectar qué habilidades demandan más los empleadores, modelado en un data warehouse clásico (esquema estrella) y enriquecido con IA",
    technologies: ["Python", "Airflow", "PostgreSQL", "dbt", "Power BI", "BeautifulSoup", "Docker", "Claude API"],
    image: "/projects/job-market-radar.jpg",
    github: "https://github.com/wirkix/job-market-radar",
    demo: null,
    report: "/projects/job-market-radar",
    pbix: "/files/job-market-radar.pbix",
    featured: false,
    livePreview: true,
  },
  {
    id: 3,
    title: "Analítica de Autos Usados (Tabla Ancha)",
    description: "Tabla analítica desnormalizada sobre el dataset de Kaggle \"Craigslist Cars/Trucks Data\" (autos usados listados en Craigslist), pensada para que un asistente de IA la explore directamente vía chat en lenguaje natural. Nota: Streamlit pone la app a dormir tras 12h sin visitas -- si aparece dormida, haz clic en \"Yes, get this app back up!\" para despertarla (tarda menos de un minuto)",
    technologies: ["Python", "Pandas", "dbt", "DuckDB", "Kaggle", "Banxico API", "Claude API", "Streamlit"],
    image: "/projects/motor-analytics.jpg",
    // Real file, unlike every other project's `image` (see "Known gotchas"
    // in CLAUDE.md) -- a screenshot of the live app, captured via headless
    // Chrome with a throwaway incognito profile (no stored login) so it
    // shows what an actual public visitor sees, not an authenticated-owner
    // view. hasImage gates rendering it vs. the "Imagen del proyecto"
    // placeholder -- don't add this flag to another project until its
    // `image` file actually exists in public/, or it'll render broken.
    hasImage: true,
    github: "https://github.com/wirkix/motor-analytics",
    // Demo link works fine (verified live) but NOT wrapped in <LivePreview>:
    // Streamlit Community Cloud's own viewer-auth redirect
    // (share.streamlit.io/-/auth/app) 503s when loaded inside a cross-origin
    // iframe -- third-party-cookie blocking breaks its auth handshake there,
    // even though the same URL renders fine on direct/top-level navigation.
    // Confirmed by embedding it locally: the iframe never got past the
    // redirect. Falls back to the plain "Imagen del proyecto" placeholder
    // (hasImage above) instead.
    demo: "https://motor-analytics-naksohgdk2zwoxk5buo2va.streamlit.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Pulso de Ecobici CDMX",
    description: "Streaming en tiempo real de la disponibilidad de bicis y anclajes de Ecobici Ciudad de México mediante Kafka, visualizado en un mapa en vivo con estaciones coloreadas según su nivel de ocupación",
    technologies: ["Kafka", "Docker", "TimescaleDB", "Next.js", "Python", "GBFS API", "React", "TypeScript", "Tailwind CSS", "MapLibre GL", "Supabase Realtime", "Oracle Cloud", "Vercel"],
    image: "/projects/ecobici-pulse.jpg",
    github: "https://github.com/wirkix/ecobici-pulse",
    demo: "https://ecobici-pulse-three.vercel.app/",
    // Confirmed embeddable: the deployed page sends no X-Frame-Options or
    // frame-ancestors CSP. Preferred over a static `hasImage` screenshot
    // here specifically because it's a live map -- a still image of a
    // "live pulse" project undersells the point of it.
    livePreview: true,
    featured: false,
  },
  {
    id: 5,
    title: "Lakehouse de Indicadores Económicos",
    description: "Pipeline medallion (bronze/silver/gold) sobre indicadores económicos públicos de México (Banxico, INEGI), con MinIO, PySpark y DuckDB como stack local equivalente a S3/Glue/Athena, orquestado con Airflow",
    technologies: ["Python", "Airflow", "PySpark", "MinIO", "Docker", "DuckDB", "Banxico API", "INEGI API", "Tableau"],
    image: "/projects/economic-lakehouse.jpg",
    github: "https://github.com/wirkix/economic-pulse-lakehouse",
    // Published to Tableau Public. Deliberately NOT the plain share link
    // (public.tableau.com/views/.../EconomicPulseMxico?:language=es-ES&...
    // &:redirect=auth) copied from the "Share" button -- that one 302s to
    // the app/profile/.../viz/... page, which sends X-Frame-Options:
    // SAMEORIGIN and can't be embedded (confirmed via curl -I). The
    // `?:embed=y` viz URL below is the one Tableau's own embed snippet's
    // <object> loads under the hood; it 200s with no X-Frame-Options/CSP
    // frame-ancestors (confirmed via curl -I), so it works directly as an
    // <iframe src> and is still a fully interactive standalone dashboard
    // when opened directly via the Demo button.
    demo: "https://public.tableau.com/views/EconomicPulse-Mexico/EconomicPulseMxico?:language=es-ES&:showVizHome=no&:embed=y",
    livePreview: true,
    // Same idea as job-market-radar's pbix download -- the underlying
    // workbook file, not just the published viz. Its Text File
    // connections point at this machine's absolute tableau/extract/ path
    // (see economic-pulse-lakehouse's own tableau/REPORT_SPEC.md "Connect"
    // section), so anyone opening it will need to repoint those two
    // connections to their own copy of that repo's CSVs before it renders.
    twb: "/files/economic-pulse-lakehouse.twb",
    featured: false,
  },
  {
    id: 6,
    title: "Warehouse ELT con Integración Continua",
    description: "Warehouse moderno en Databricks Community Edition con modelos dbt probados y documentados, desplegado mediante un pipeline de integración continua en GitHub Actions",
    technologies: ["dbt", "Databricks", "GitHub Actions", "Metabase"],
    image: "/projects/elt-warehouse-ci.jpg",
    // No repo yet -- github.com/wirkix/elt-warehouse-ci doesn't exist
    // (confirmed via `gh repo view`: 404). Roadmap card, not a published
    // project; leave github null until the repo is real, or the "Código"
    // button would link to a 404.
    github: null,
    demo: null,
    featured: false,
  },
  {
    id: 7,
    title: "Laboratorio de Pronóstico de Demanda",
    description: "Ingeniería de características y pronóstico de series de tiempo sobre datos generados por otros proyectos del portafolio, publicado como reporte reproducible en notebooks",
    technologies: ["Jupyter", "scikit-learn", "Prophet", "SQL Server", "Plotly"],
    image: "/projects/demand-forecasting.jpg",
    // Same as elt-warehouse-ci above -- github.com/wirkix/demand-forecasting
    // doesn't exist yet either (confirmed via `gh repo view`: 404).
    github: null,
    demo: null,
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
              Selección de proyectos destacados que demuestran experiencia en ingeniería
              de datos, arquitectura de data warehouses y Business Intelligence,
              construidos con distintas tecnologías según las necesidades de cada proyecto.
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-16">
            {projects.filter(p => p.featured).map(project => (
              <article key={project.id} className="grid md:grid-cols-2 gap-8 items-center">
                {project.livePreview && (project.demo ?? project.report) ? (
                  <LivePreview
                    src={(project.demo ?? project.report) as string}
                    title={`Vista previa en vivo de ${project.title}`}
                  />
                ) : project.hasImage ? (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`Captura de pantalla de ${project.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-video bg-brand-200 rounded-xl flex items-center justify-center">
                    <span className="text-brand-500 text-lg">Imagen del proyecto</span>
                  </div>
                )}
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium inline-block">
                      Proyecto Destacado
                    </span>
                    {project.inProgress && (
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium inline-block">
                        En Desarrollo
                      </span>
                    )}
                  </div>
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
                    {project.report && (
                      <a
                        href={project.report}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-brand-700 text-brand-50 rounded-lg font-medium hover:bg-brand-800 transition"
                      >
                        Ver reporte
                      </a>
                    )}
                    {project.pbix && (
                      <a
                        href={project.pbix}
                        download
                        className="px-4 py-2 border border-brand-500 text-brand-700 rounded-lg font-medium hover:bg-brand-100 transition"
                      >
                        Descargar .pbix
                      </a>
                    )}
                    {project.twb && (
                      <a
                        href={project.twb}
                        download
                        className="px-4 py-2 border border-brand-500 text-brand-700 rounded-lg font-medium hover:bg-brand-100 transition"
                      >
                        Descargar .twb
                      </a>
                    )}
                  </div>
                  {project.twb && (
                    <p className="text-sm text-brand-500 mt-2">
                      Nota: el archivo usa conexiones locales -- al abrirlo en Tableau Desktop
                      tendrás que reconectarlas a tu propia copia del repositorio.
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Other Projects */}
          <h2 className="text-2xl font-semibold text-brand-700 mb-8">Otros Proyectos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map(project => (
              <article key={project.id} className="bg-white/5 rounded-xl p-6 hover:shadow-lg transition-shadow">
                {project.livePreview && (project.demo ?? project.report) ? (
                  <div className="mb-4">
                    <LivePreview
                      src={(project.demo ?? project.report) as string}
                      title={`Vista previa en vivo de ${project.title}`}
                    />
                  </div>
                ) : project.hasImage ? (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src={project.image}
                      alt={`Captura de pantalla de ${project.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-video bg-brand-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-brand-500 text-sm">Imagen del proyecto</span>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-brand-800 mb-2">{project.title}</h3>
                <ExpandableText text={project.description} className="text-brand-600 text-sm" />
                <TechTags technologies={project.technologies} className="flex flex-wrap gap-1 mb-4 mt-4" />
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
                  {project.report && (
                    <a
                      href={project.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand-500 hover:text-brand-700 font-medium"
                    >
                      Ver reporte
                    </a>
                  )}
                  {project.pbix && (
                    <a
                      href={project.pbix}
                      download
                      className="text-sm text-brand-500 hover:text-brand-700 font-medium"
                    >
                      Descargar .pbix
                    </a>
                  )}
                  {project.twb && (
                    <a
                      href={project.twb}
                      download
                      className="text-sm text-brand-500 hover:text-brand-700 font-medium"
                    >
                      Descargar .twb
                    </a>
                  )}
                </div>
                {project.twb && (
                  <p className="text-xs text-brand-500 mt-2">
                    Nota: usa conexiones locales -- reconéctalas a tu propia copia del
                    repositorio al abrirlo en Tableau Desktop.
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}