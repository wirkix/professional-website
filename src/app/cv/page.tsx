import Image from "next/image";
import Header from "@/components/Header";
import { getDictionary } from "@/lib/i18n";

export default async function CV() {
  const { locale, t } = await getDictionary();
  const c = t.cv;

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
              {c.pageTitle}
            </h1>
            <p className="text-brand-600 mt-1">
              {c.subtitle}
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
              {c.downloadButton}
            </a>
            {locale === "en" && (
              <p className="text-xs text-brand-400 mt-2">{c.downloadNote}</p>
            )}
          </div>

          {/* Summary */}
          <div className="bg-white/5 rounded-xl p-6 mb-12">
            <p className="text-brand-800 leading-relaxed">
              {c.summary}
            </p>
          </div>

          {/* Personal Info */}
          <div className="bg-white/5 rounded-xl p-6 mb-12">
            <h2 className="text-xl font-semibold text-brand-700 mb-4">
              {c.personalInfoHeading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p><span className="font-medium text-brand-800">{c.labels.name}:</span> <span className="text-brand-900">Alois Wirkes</span></p>
                <p><span className="font-medium text-brand-800">{c.labels.currentRole}:</span> <span className="text-brand-900">Senior Software Engineer</span></p>
                <p><span className="font-medium text-brand-800">{c.labels.specialty}:</span> <span className="text-brand-900">Business Intelligence &amp; {locale === "en" ? "Data" : "Datos"}</span></p>
                <p><span className="font-medium text-brand-800">{c.labels.location}:</span> <span className="text-brand-900">{c.locationValue}</span></p>
                <p><span className="font-medium text-brand-800">{c.labels.availability}:</span> <span className="text-brand-900">{c.availabilityValue}</span></p>
              </div>
              <div>
                <p><span className="font-medium text-brand-800">{c.labels.phone}:</span> <span className="text-brand-900">+52 722 5570964</span></p>
                <p><span className="font-medium text-brand-800">{c.labels.email}:</span> <span className="text-brand-900"><a href="mailto:alois.wirkes@gmail.com" className="text-brand-500 hover:underline">alois.wirkes@gmail.com</a></span></p>
                <p><span className="font-medium text-brand-800">{c.labels.linkedin}:</span> <span className="text-brand-900"><a href="https://www.linkedin.com/in/alois-wirkes/" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">{c.labels.viewProfile}</a></span></p>
                <p><span className="font-medium text-brand-800">{c.labels.github}:</span> <span className="text-brand-900"><a href="https://github.com/wirkix" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">{c.labels.viewProfile}</a></span></p>
                <p><span className="font-medium text-brand-800">{c.labels.upwork}:</span> <span className="text-brand-900"><a href="https://www.upwork.com/freelancers/~01e9f20bfb142f07cb" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">{c.labels.viewProfile}</a></span></p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-700 mb-6">
              {c.experienceHeading}
            </h2>

            <div className="space-y-10">
              {c.experience.map((job, i) => (
                <div key={job.role + i} className="flex items-start space-x-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-brand-200 flex items-center justify-center">
                    <span className="text-brand-700 font-medium">{c.experience.length - i}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-brand-800">{job.role}</h3>
                    <p className="text-sm text-brand-500 mb-2">{job.companyLine}</p>
                    <ul className="list-disc list-inside space-y-2 text-brand-900">
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-700 mb-6">
              {c.educationHeading}
            </h2>
            <div className="space-y-6">
              {c.education.map((edu) => (
                <div key={edu.degree}>
                  <h3 className="text-xl font-medium text-brand-800">{edu.degree}</h3>
                  <p className="text-sm text-brand-500">{edu.schoolLine}</p>
                </div>
              ))}
              <div>
                <h3 className="text-xl font-medium text-brand-800">{c.certificationsHeading}</h3>
                <ul className="list-disc list-inside space-y-1 text-brand-900 mt-2">
                  {c.certifications.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-700 mb-6">
              {c.skillsHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">{c.skillCategories.biEtl}</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>Oracle BI (OBI) • Tableau • Power BI</li>
                  <li>ODI • PDI (Pentaho) • OWB</li>
                  <li>dbt • Snowflake • Databricks</li>
                  <li>Apache Kafka • Apache Airflow</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">{c.skillCategories.databases}</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>Oracle • PostgreSQL • MySQL</li>
                  <li>SQL Server • DBeaver</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">{c.skillCategories.devTools}</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>Python • VS Code • Cursor</li>
                  <li>Git (GitHub, GitLab) • GitHub Actions</li>
                  <li>Docker • Jupyter • VirtualBox</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">{c.skillCategories.webStack}</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>TypeScript • JavaScript</li>
                  <li>HTML5 • CSS • Supabase • Vercel</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">{c.skillCategories.ai}</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>Claude Code • Codex • Ollama</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">{c.skillCategories.aws}</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>IAM • S3 • Glue • DynamoDB</li>
                  <li>Lambda • EC2 • ECR/ECS • EMR</li>
                  <li>MWAA • DMS • Secrets Manager</li>
                  <li>CloudFormation • LakeFormation</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">{c.skillCategories.os}</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>Windows • macOS</li>
                  <li>Linux (Ubuntu, Debian, ChromeOS)</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">{c.skillCategories.pm}</h3>
                <ul className="text-brand-900 space-y-2">
                  <li>Jira • Confluence</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Languages & Interests */}
          <section className="mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">{c.languagesHeading}</h3>
                <ul className="text-brand-900 space-y-1">
                  {c.languages.map((lang) => (
                    <li key={lang}>{lang}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-700 mb-3">{c.interestsHeading}</h3>
                <div className="flex flex-wrap gap-2">
                  {c.interests.map((interest) => (
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
