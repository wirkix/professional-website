import Image from "next/image";
import Header from "@/components/Header";
import LivePreview from "@/components/LivePreview";
import ExpandableText from "@/components/ExpandableText";
import TechTags from "@/components/TechTags";
import { getDictionary } from "@/lib/i18n";

// Everything here is locale-invariant metadata (links, flags, tech names --
// tech/tool names are proper nouns, identical in both languages). Title and
// description text live in the i18n dictionary instead, keyed by `id`, so
// this array doesn't need a Spanish/English copy of itself.
const projects = [
  {
    id: 1 as const,
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
    id: 2 as const,
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
    id: 3 as const,
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
    id: 4 as const,
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
    id: 5 as const,
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
    id: 6 as const,
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
    id: 7 as const,
    technologies: ["Jupyter", "scikit-learn", "Prophet", "SQL Server", "Plotly"],
    image: "/projects/demand-forecasting.jpg",
    // Same as elt-warehouse-ci above -- github.com/wirkix/demand-forecasting
    // doesn't exist yet either (confirmed via `gh repo view`: 404).
    github: null,
    demo: null,
    featured: false,
  },
];

export default async function Portfolio() {
  const { t } = await getDictionary();
  const p = t.portfolio;

  return (
    <div className="min-h-screen bg-brand-50 text-brand-950">
      <Header />

      <section className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              {p.pageTitle}
            </h1>
            <p className="text-brand-600 max-w-2xl mx-auto">
              {p.summary}
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-16">
            {projects.filter(project => project.featured).map(project => {
              const copy = p.projects[project.id];
              return (
              <article key={project.id} className="grid md:grid-cols-2 gap-8 items-center">
                {project.livePreview && (project.demo ?? project.report) ? (
                  <LivePreview
                    src={(project.demo ?? project.report) as string}
                    title={p.livePreviewAlt(copy.title)}
                  />
                ) : project.hasImage ? (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={copy.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-video bg-brand-200 rounded-xl flex items-center justify-center">
                    <span className="text-brand-500 text-lg">{p.imagePlaceholder}</span>
                  </div>
                )}
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium inline-block">
                      {p.featuredBadge}
                    </span>
                    {project.inProgress && (
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium inline-block">
                        {p.inProgressBadge}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-brand-800 mb-3">{copy.title}</h2>
                  <p className="text-brand-700 mb-6">{copy.description}</p>
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
                        {p.codeButton}
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-brand-700 text-brand-50 rounded-lg font-medium hover:bg-brand-800 transition"
                      >
                        {p.demoButton}
                      </a>
                    )}
                    {project.report && (
                      <a
                        href={project.report}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-brand-700 text-brand-50 rounded-lg font-medium hover:bg-brand-800 transition"
                      >
                        {p.reportButton}
                      </a>
                    )}
                    {project.pbix && (
                      <a
                        href={project.pbix}
                        download
                        className="px-4 py-2 border border-brand-500 text-brand-700 rounded-lg font-medium hover:bg-brand-100 transition"
                      >
                        {p.pbixButton}
                      </a>
                    )}
                    {project.twb && (
                      <a
                        href={project.twb}
                        download
                        className="px-4 py-2 border border-brand-500 text-brand-700 rounded-lg font-medium hover:bg-brand-100 transition"
                      >
                        {p.twbButton}
                      </a>
                    )}
                  </div>
                  {project.twb && (
                    <p className="text-sm text-brand-500 mt-2">
                      {p.twbNote}
                    </p>
                  )}
                </div>
              </article>
              );
            })}
          </div>

          {/* Other Projects */}
          <h2 className="text-2xl font-semibold text-brand-700 mb-8">{p.otherProjectsHeading}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map(project => {
              const copy = p.projects[project.id];
              return (
              <article key={project.id} className="bg-white/5 rounded-xl p-6 hover:shadow-lg transition-shadow">
                {project.livePreview && (project.demo ?? project.report) ? (
                  <div className="mb-4">
                    <LivePreview
                      src={(project.demo ?? project.report) as string}
                      title={p.livePreviewAlt(copy.title)}
                    />
                  </div>
                ) : project.hasImage ? (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src={project.image}
                      alt={copy.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-video bg-brand-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-brand-500 text-sm">{p.imagePlaceholder}</span>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-brand-800 mb-2">{copy.title}</h3>
                <ExpandableText
                  text={copy.description}
                  className="text-brand-600 text-sm"
                  showMoreLabel={t.expandableText.showMore}
                  showLessLabel={t.expandableText.showLess}
                />
                <TechTags
                  technologies={project.technologies}
                  initialCount={4}
                  className="flex flex-wrap gap-1 mb-4 mt-4"
                  showMoreAriaLabel={t.techTags.showMoreAria(project.technologies.length - 4)}
                  showLessAriaLabel={t.techTags.showLessAria}
                />
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand-500 hover:text-brand-700 font-medium"
                    >
                      {p.codeButton}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand-500 hover:text-brand-700 font-medium"
                    >
                      {p.demoButton}
                    </a>
                  )}
                  {project.report && (
                    <a
                      href={project.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand-500 hover:text-brand-700 font-medium"
                    >
                      {p.reportButton}
                    </a>
                  )}
                  {project.pbix && (
                    <a
                      href={project.pbix}
                      download
                      className="text-sm text-brand-500 hover:text-brand-700 font-medium"
                    >
                      {p.pbixButton}
                    </a>
                  )}
                  {project.twb && (
                    <a
                      href={project.twb}
                      download
                      className="text-sm text-brand-500 hover:text-brand-700 font-medium"
                    >
                      {p.twbButton}
                    </a>
                  )}
                </div>
                {project.twb && (
                  <p className="text-xs text-brand-500 mt-2">
                    {p.twbNote}
                  </p>
                )}
              </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
