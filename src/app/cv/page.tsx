import Image from "next/image";
import Header from "@/components/Header";

export default function CV() {
  return (
    <div className="min-h-screen bg-brand-50 text-brand-950">
      <Header />

      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 ring-4 ring-brand-200">
              <Image
                src="/images/alois-wirkes.jpg"
                alt="Alois Wirkes"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold text-brand-900">
              Currículum Vitae
            </h1>
            <p className="text-brand-600 mt-1">
              Alois Wirkes — Senior Software Engineer · Business Intelligence &amp; Datos
            </p>
            <a
              href="/cv/alois-wirkes-cv.pdf"
              download="Alois-Wirkes-CV.pdf"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-brand-50 rounded-lg font-medium transition duration-200 hover:bg-accent-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="M7 10l5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              Descargar CV en PDF
            </a>
          </div>

          {/* Summary */}
          <div className="bg-white/5 rounded-xl p-6 mb-12">
            <p className="text-brand-800 leading-relaxed">
              Más de 10 años de experiencia en bases de datos y data warehouses
              (Oracle, PostgreSQL, MySQL), ETLs (OWB, PDI) y construcción de
              consultas y análisis (PL/SQL) para su visualización en suites
              de Business Intelligence (OBI, Tableau, Power BI). Experiencia
              liderando equipos de trabajo y proyectos BI, con interés en
              gerencia de proyectos y tecnologías emergentes como Inteligencia
              Artificial, Big Data, NoSQL y Machine Learning.
            </p>
          </div>

          {/* Personal Info */}
          <div className="bg-white/5 rounded-xl p-6 mb-12">
            <h2 className="text-xl font-semibold text-brand-700 mb-4">
              Información Personal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p><span className="font-medium text-brand-800">Nombre:</span> <span className="text-brand-900">Alois Wirkes</span></p>
                <p><span className="font-medium text-brand-800">Cargo Actual:</span> <span className="text-brand-900">Senior Software Engineer</span></p>
                <p><span className="font-medium text-brand-800">Especialidad:</span> <span className="text-brand-900">Business Intelligence &amp; Datos</span></p>
                <p><span className="font-medium text-brand-800">Ubicación:</span> <span className="text-brand-900">Lerma, Estado de México, México</span></p>
                <p><span className="font-medium text-brand-800">Disponibilidad:</span> <span className="text-brand-900">Disponible para trabajo remoto</span></p>
              </div>
              <div>
                <p><span className="font-medium text-brand-800">Teléfono:</span> <span className="text-brand-900">+52 722 5570964</span></p>
                <p><span className="font-medium text-brand-800">Email:</span> <span className="text-brand-900"><a href="mailto:alois.wirkes@gmail.com" className="text-brand-500 hover:underline">alois.wirkes@gmail.com</a></span></p>
                <p><span className="font-medium text-brand-800">LinkedIn:</span> <span className="text-brand-900"><a href="https://www.linkedin.com/in/alois-wirkes/" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">Ver Perfil</a></span></p>
                <p><span className="font-medium text-brand-800">GitHub:</span> <span className="text-brand-900"><a href="https://github.com/wirkix" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">Ver Perfil</a></span></p>
                <p><span className="font-medium text-brand-800">Upwork:</span> <span className="text-brand-900"><a href="https://www.upwork.com/freelancers/~01e9f20bfb142f07cb" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">Ver Perfil</a></span></p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-700 mb-6">
              Experiencia Profesional
            </h2>

            <div className="space-y-10">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-brand-200 flex items-center justify-center">
                  <span className="text-brand-700 font-medium">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-brand-800">Senior Software Engineer</h3>
                  <p className="text-sm text-brand-500 mb-2">KAVAK.com · Caracas, Venezuela · Junio 2020 - Presente</p>
                  <ul className="list-disc list-inside space-y-2 text-brand-900">
                    <li>Ingeniería de datos y Business Intelligence: transformación de datos diversos en insights y dashboards mediante AWS, Python y DBT</li>
                    <li>Integración de soluciones de IA en los flujos de análisis para incrementar el impacto de los productos de datos</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-brand-200 flex items-center justify-center">
                  <span className="text-brand-700 font-medium">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-brand-800">Especialista BI</h3>
                  <p className="text-sm text-brand-500 mb-2">e-ABC Learning (Buenos Aires, Argentina) · Caracas, Venezuela · Mayo 2019 - Mayo 2020</p>
                  <ul className="list-disc list-inside space-y-2 text-brand-900">
                    <li>Estudiar y proponer mejoras para la herramienta interna ELSA</li>
                    <li>Desarrollar dashboards de indicadores para clientes y temáticas puntuales, como Mutual de Seguridad CChC (Chile)</li>
                    <li>Orquestar y desarrollar un proyecto piloto de Machine Learning con fines de obtener un producto comercial</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-brand-200 flex items-center justify-center">
                  <span className="text-brand-700 font-medium">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-brand-800">Integrador de Datos</h3>
                  <p className="text-sm text-brand-500 mb-2">Matrix CPM Solutions C.A. · Caracas, Venezuela · Agosto 2018 - Octubre 2018</p>
                  <ul className="list-disc list-inside space-y-2 text-brand-900">
                    <li>Participar en proyecto BI en Claro Colombia</li>
                    <li>Desarrollar habilidades y obtener conocimientos sobre ODI y Tableau</li>
                    <li>Desarrollar habilidades y obtener conocimientos sobre la suite de herramientas HortonWorks</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-brand-200 flex items-center justify-center">
                  <span className="text-brand-700 font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-brand-800">Líder de Gestión de la Demanda</h3>
                  <p className="text-sm text-brand-500 mb-2">Veconinter C.A. · Caracas, Venezuela · Mayo 2017 - Enero 2018</p>
                  <ul className="list-disc list-inside space-y-2 text-brand-900">
                    <li>Gestionar demanda de incidentes, requisitos y proyectos IT</li>
                    <li>Liderar proyecto de renovación de página web de la empresa</li>
                    <li>Liderar proyecto de actualización del sistema de RR.HH.</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-brand-200 flex items-center justify-center">
                  <span className="text-brand-700 font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-brand-800">Docente Instructor</h3>
                  <p className="text-sm text-brand-500 mb-2">Universidad Central de Venezuela · Caracas, Venezuela · Octubre 2015 - Mayo 2017</p>
                  <ul className="list-disc list-inside space-y-2 text-brand-900">
                    <li>Impartir clases de Laboratorio General de Bases de Datos</li>
                    <li>Preparar material didáctico para la materia</li>
                    <li>Instalar y configurar el servidor de Oracle para dar la materia</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-brand-200 flex items-center justify-center">
                  <span className="text-brand-700 font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-brand-800">Consultor</h3>
                  <p className="text-sm text-brand-500 mb-2">Tian Consultores C.A. · Caracas, Venezuela · Noviembre 2012 - Marzo 2017</p>
                  <ul className="list-disc list-inside space-y-2 text-brand-900">
                    <li>Realizar prototipo funcional de app Android para encuestas</li>
                    <li>Liderar proyectos BI OWB/OBI en Seguros Mercantil</li>
                    <li>Liderar proyectos BI PDI/OBI en Banco Central de Venezuela</li>
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
                <h3 className="text-xl font-medium text-brand-800">Master of Business Administration (MBA)</h3>
                <p className="text-sm text-brand-500">IESA · Abril 2016 - Febrero 2022</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-brand-800">Licenciatura en Computación, Bases de Datos</h3>
                <p className="text-sm text-brand-500">Universidad Central de Venezuela · 2008 - 2015</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-brand-800">Certificaciones Relevantes</h3>
                <ul className="list-disc list-inside space-y-1 text-brand-900 mt-2">
                  <li>SCRUM Foundation Professional Certificate (SFPC)</li>
                  <li>Apache Kafka Series — Kafka Connect Hands-on Learning</li>
                  <li>Big Data sin Misterios — edX (Marzo 2020)</li>
                  <li>Curso Completo Power BI Desktop — Udemy (Noviembre 2019)</li>
                  <li>PartnerWorks Accredited Technical Track 1 y 2 Professional — HortonWorks PartnerWorks (Agosto - Octubre 2018)</li>
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
                <h3 className="text-lg font-semibold text-brand-700 mb-3">BI &amp; ETL</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>Oracle BI (OBI) • Tableau • Power BI</li>
                  <li>ODI • PDI (Pentaho) • OWB</li>
                  <li>dbt • Snowflake • Databricks</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">Bases de Datos</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>Oracle • PostgreSQL • MySQL</li>
                  <li>SQL Server • DBeaver</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">Desarrollo &amp; Herramientas</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>Python • VS Code • Cursor</li>
                  <li>Git (GitHub, GitLab) • VirtualBox</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">Stack Web</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>TypeScript • JavaScript</li>
                  <li>HTML5 • CSS • Supabase • Vercel</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">IA</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>Claude Code • Codex • Ollama</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">AWS</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>IAM • S3 • Glue • DynamoDB</li>
                  <li>Lambda • EC2 • ECR/ECS • EMR</li>
                  <li>MWAA • DMS • Secrets Manager</li>
                  <li>CloudFormation • LakeFormation</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">Sistemas Operativos</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>Windows • macOS</li>
                  <li>Linux (Ubuntu, Debian, ChromeOS)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Languages & Interests */}
          <section className="mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">Idiomas</h3>
                <ul className="text-brand-900 space-y-1">
                  <li>Español — Nativo</li>
                  <li>Inglés — Profesional</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">Intereses</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Inteligencia Artificial",
                    "Big Data",
                    "Aprendizaje Automático",
                    "Internet de las Cosas",
                    "Gerencia de Proyectos",
                    "Equipos de Alto Desempeño",
                    "NoSQL",
                    "Datos Abiertos",
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="px-2 py-1 bg-brand-100 text-brand-600 rounded text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
