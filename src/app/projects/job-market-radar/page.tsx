"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Static recreation of the "Radar del Mercado Laboral" Power BI report.
 *
 * There's no live embed here — the report was never published to the Power
 * BI service (see job-market-radar/power_bi/REPORT_SPEC.md, "Publish"), so
 * this page rebuilds its three pages as plain HTML/SVG from the numbers in
 * the exported PDF (job_market_radar.pdf). It doubles as both:
 *   - the page opened in a new tab from the "Ver reporte" button, and
 *   - the source embedded (via <LivePreview>) as the project's thumbnail
 *     on /portfolio, the same way Arte y Esencia embeds its live homepage.
 *
 * Numbers on this page are exact where the PDF shows exact totals (KPIs,
 * donut, both bar charts). The weekly trend line is reconstructed from the
 * individual point labels visible in the PDF, which don't all sum to the
 * KPI total (Power BI hides overlapping labels) — it's an approximation of
 * the shape, flagged as such under the chart. The job-title table is a
 * sample of real scraped postings, not the full 110 rows.
 */

const skillsTop20 = [
  { name: "Python", count: 33 },
  { name: "DBT", count: 16 },
  { name: "SQL", count: 16 },
  { name: "Snowflake", count: 15 },
  { name: "AWS", count: 5 },
  { name: "PostgreSQL", count: 5 },
  { name: "Go", count: 4 },
  { name: "Java", count: 4 },
  { name: "Databricks", count: 3 },
  { name: "Kafka", count: 3 },
  { name: ".NET", count: 2 },
  { name: "Airflow", count: 2 },
  { name: "Azure", count: 2 },
  { name: "Golang", count: 2 },
  { name: "Kubernetes", count: 2 },
  { name: "MongoDB", count: 2 },
  { name: "PyTorch", count: 2 },
  { name: "TensorFlow", count: 2 },
  { name: "TypeScript", count: 2 },
  { name: "TypeScript/Node.js", count: 2 },
];

const companiesTop = [
  { name: "Coinbase", count: 15 },
  { name: "Stripe", count: 14 },
  { name: "Toptal", count: 8 },
  { name: "Proxify AB", count: 6 },
  { name: "Twilio", count: 5 },
  { name: "Azumo", count: 3 },
  { name: "Dropbox", count: 3 },
  { name: "Airtable", count: 2 },
  { name: "ClickHouse", count: 2 },
  { name: "Collaboration.Ai", count: 2 },
  { name: "Confluent", count: 2 },
  { name: "Doximity", count: 2 },
  { name: "Hightouch", count: 2 },
  { name: "Instacart", count: 2 },
  { name: "Lemon.io", count: 2 },
  { name: "Lithic", count: 2 },
  { name: "OnTheGoSystems", count: 2 },
];

const jobSample = [
  {
    title: "Location Services Engineer | Maps Platform (Remote in Europe)",
    url: "https://weworkremotely.com/remote-jobs/maptiler-location-services-engineer-maps-platform-remote-in-europe",
  },
  { title: "Accountant", url: "https://weworkremotely.com/remote-jobs/fivetran-accountant" },
  {
    title: "Ads AI Analytics Lead II",
    url: "https://weworkremotely.com/remote-jobs/instacart-ads-ai-analytics-lead-ii",
  },
  {
    title: "Ads Conversion Modeling, Machine Learning Engineering Manager",
    url: "https://weworkremotely.com/remote-jobs/reddit-ads-conversion-modeling-machine-learning-engineering-manager",
  },
  {
    title: "AI Engagement Manager",
    url: "https://weworkremotely.com/remote-jobs/instacart-ai-engagement-manager",
  },
  {
    title: "AI Product Engineer - ClickStack",
    url: "https://weworkremotely.com/remote-jobs/clickhouse-ai-product-engineer-clickstack",
  },
  {
    title: "AI Strategy Consultant",
    url: "https://weworkremotely.com/remote-jobs/hightouch-ai-strategy-consultant",
  },
  {
    title: "AI/ML Engineer for an AI-Driven E-Commerce Platform",
    url: "https://weworkremotely.com/remote-jobs/toptal-ai-ml-engineer-for-an-ai-driven-e-commerce-platform",
  },
];

// Weekly trend, reconstructed from the point labels visible in the PDF line
// chart (see file header comment) — shape is faithful, exact values aren't.
const trendValues = [1, 8, 24, 3, 6, 12, 4, 5, 1, 2, 1, 4, 1, 3, 2];
const trendMax = Math.max(...trendValues);
const chartW = 580;
const chartTop = 16;
const chartBottom = 190;
const trendPoints = trendValues.map((v, i) => {
  const x = 10 + (i * (chartW - 20)) / (trendValues.length - 1);
  const y = chartBottom - (v / trendMax) * (chartBottom - chartTop);
  return { x, y, v };
});
const trendPath = trendPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
const trendAxisLabels = ["Jul 19", "Jul 26", "Ago 02", "Ago 09", "Ago 16"];

const SENIOR_COLOR = "#2563eb"; // accent-500
const UNKNOWN_COLOR = "#d97706"; // amber-600
const seniorPct = 95.45;

const tabs = [
  { id: "resumen", label: "Resumen" },
  { id: "habilidades", label: "Habilidades" },
  { id: "empresas", label: "Empresas" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function Card({ title, children, className = "" }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white border border-brand-200 rounded-xl p-5 ${className}`}>
      {title && <h3 className="text-brand-700 font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
}

function BarList({ data }: { data: { name: string; count: number }[] }) {
  const max = Math.max(...data.map((d) => d.count));
  return (
    <div className="space-y-2.5">
      {data.map((d) => (
        <div key={d.name} className="flex items-center gap-3" title={`${d.name}: ${d.count}`}>
          <span className="w-32 sm:w-40 shrink-0 text-sm text-brand-700 truncate">{d.name}</span>
          <div className="flex-1 h-2 bg-brand-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent-500 rounded-full"
              style={{ width: `${Math.max((d.count / max) * 100, 3)}%` }}
            />
          </div>
          <span className="w-6 shrink-0 text-sm text-brand-500 text-right">{d.count}</span>
        </div>
      ))}
    </div>
  );
}

export default function JobMarketRadarReport() {
  const [tab, setTab] = useState<TabId>("resumen");

  return (
    <div className="min-h-screen bg-brand-50 text-brand-950">
      {/* Compact chrome — kept short on purpose so the charts below sit in
          the first ~900px, which is what the portfolio thumbnail crops to. */}
      <header className="bg-white border-b border-brand-200">
        <div className="px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-brand-900 font-semibold leading-tight">Radar del Mercado Laboral</p>
            <p className="text-brand-500 text-xs leading-tight">
              Reporte Power BI · extracto estático del PDF exportado
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/portfolio" className="text-sm text-brand-500 hover:text-brand-700 font-medium">
              ← Portafolio
            </Link>
            <a
              href="/files/job-market-radar.pbix"
              download="job-market-radar.pbix"
              className="text-sm px-3 py-1.5 bg-brand-700 text-brand-50 rounded-lg font-medium hover:bg-brand-800 transition"
            >
              Descargar .pbix
            </a>
          </div>
        </div>
        <nav className="px-6 flex gap-1 border-t border-brand-100">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition ${
                tab === t.id
                  ? "border-accent-500 text-brand-900"
                  : "border-transparent text-brand-500 hover:text-brand-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="p-6 max-w-6xl mx-auto">
        {tab === "resumen" && (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <p className="text-brand-500 text-sm mb-1">Total Postings</p>
                <p className="text-3xl font-bold text-brand-900">110</p>
              </Card>
              <Card>
                <p className="text-brand-500 text-sm mb-1">Confirmed Data Roles</p>
                <p className="text-3xl font-bold text-brand-900">73</p>
              </Card>
              <Card>
                <p className="text-brand-500 text-sm mb-1">Enrichment Coverage</p>
                <p className="text-3xl font-bold text-brand-900">100%</p>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Card title="Total Postings by Date">
                <svg viewBox={`0 0 ${chartW} 210`} className="w-full h-auto">
                  <path d={trendPath} fill="none" stroke={SENIOR_COLOR} strokeWidth={2} />
                  {trendPoints.map((p, i) => (
                    <circle key={i} cx={p.x} cy={p.y} r={3} fill={SENIOR_COLOR}>
                      <title>{`${p.v} vacantes`}</title>
                    </circle>
                  ))}
                  {trendAxisLabels.map((label, i) => (
                    <text
                      key={label}
                      x={10 + (i * (chartW - 20)) / (trendAxisLabels.length - 1)}
                      y={205}
                      fontSize={10}
                      fill="#5a7a8c"
                      textAnchor={i === 0 ? "start" : i === trendAxisLabels.length - 1 ? "end" : "middle"}
                    >
                      {label}
                    </text>
                  ))}
                </svg>
                <p className="text-xs text-brand-400 mt-2">
                  Tendencia semanal aproximada a partir del PDF exportado — valores exactos en el .pbix.
                </p>
              </Card>

              <Card title="Total Postings by Seniority">
                <div className="flex items-center gap-6">
                  <div
                    className="relative w-36 h-36 rounded-full shrink-0"
                    style={{
                      background: `conic-gradient(${SENIOR_COLOR} 0% ${seniorPct}%, ${UNKNOWN_COLOR} ${seniorPct}% 100%)`,
                    }}
                  >
                    <div className="absolute inset-[14px] bg-white rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-brand-900">110</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: SENIOR_COLOR }} />
                      <span className="text-brand-700">senior</span>
                      <span className="text-brand-400">105 (95.45%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: UNKNOWN_COLOR }} />
                      <span className="text-brand-700">unknown</span>
                      <span className="text-brand-400">5 (4.55%)</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {tab === "habilidades" && (
          <Card title="Total Postings by Skill (top 20, roles de datos confirmados)">
            <BarList data={skillsTop20} />
          </Card>
        )}

        {tab === "empresas" && (
          <div className="space-y-6">
            <Card title="Total Postings by Company (top 17)">
              <BarList data={companiesTop} />
            </Card>
            <Card title="Job Titles & Apply URLs (muestra)">
              <p className="text-xs text-brand-400 mb-3">
                Muestra de 8 de 110 vacantes registradas — el .pbix contiene la tabla completa.
              </p>
              <div className="divide-y divide-brand-100">
                {jobSample.map((j) => (
                  <div key={j.url} className="flex items-center justify-between gap-4 py-2 text-sm">
                    <span className="text-brand-700">{j.title}</span>
                    <a
                      href={j.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-accent-500 hover:text-accent-600 font-medium"
                    >
                      Aplicar ↗
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
