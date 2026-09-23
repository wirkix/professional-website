// Translation dictionaries for the site's two supported languages. English
// is authored as the source of truth (`en`); `es` is typed against it
// (`satisfies typeof en` below) so a key added to one and forgotten in the
// other fails the build instead of silently rendering blank/English text
// on the Spanish site or vice versa.
//
// This is a plain object dictionary, not a translation API/library --
// deliberately, for a site this size: no runtime dependency, no per-request
// cost, and full control over technical-term accuracy (e.g. "esquema
// estrella" -> "star schema", not a literal word-for-word machine
// translation) that matters for a CV a recruiter actually reads.

const en = {
  meta: {
    title: "Professional Portfolio",
    description: "Professional portfolio - Résumé, work experience, and featured projects",
  },

  header: {
    home: "Home",
    cv: "CV",
    portfolio: "Portfolio",
  },

  home: {
    specialty: "Senior Software Engineer · Business Intelligence & Data",
    availableBadge: "Available for remote work",
    description:
      "I'm a Business Intelligence and data engineering specialist with 10+ years of experience turning data from diverse sources into actionable insights and dashboards. My core expertise spans databases and data warehouses (Oracle, PostgreSQL, MySQL), ETLs (OWB, PDI), and building queries and analysis (PL/SQL) for visualization in BI suites (OBI, Tableau, Power BI) — increasingly complemented by AWS, Python, and dbt. I also have experience leading teams and BI projects, and I'm currently focused on integrating AI into data and BI workflows, alongside growing my project management skills. Explore my professional experience and portfolio of featured projects.",
    viewCvButton: "View CV",
    viewPortfolioButton: "View Portfolio",
    connectHeading: "Let's Connect",
  },

  cv: {
    pageTitle: "Curriculum Vitae",
    subtitle: "Alois Wirkes — Senior Software Engineer · Business Intelligence & Data",
    downloadButton: "Download CV as PDF",
    summary:
      "I'm a Business Intelligence and data engineering specialist with 10+ years of experience turning data from diverse sources into actionable insights and dashboards. My core expertise spans databases and data warehouses (Oracle, PostgreSQL, MySQL), ETLs (OWB, PDI), and building queries and analysis (PL/SQL) for visualization in BI suites (OBI, Tableau, Power BI) — increasingly complemented by AWS, Python, and dbt. I also have experience leading teams and BI projects, and I'm currently focused on integrating AI into data and BI workflows, alongside growing my project management skills.",
    personalInfoHeading: "Personal Information",
    labels: {
      name: "Name",
      currentRole: "Current Role",
      specialty: "Specialty",
      location: "Location",
      availability: "Availability",
      phone: "Phone",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      upwork: "Upwork",
      viewProfile: "View Profile",
    },
    locationValue: "Lerma, State of Mexico, Mexico",
    availabilityValue: "Available for remote work",
    experienceHeading: "Professional Experience",
    experience: [
      {
        role: "Senior Software Engineer",
        companyLine: "KAVAK.com · Caracas, Venezuela · June 2020 - Present",
        bullets: [
          "Built NetSuite extraction from scratch: after a native Workato connector failed, engineered a custom pipeline on AWS Glue using NetSuite's JDBC driver; it now runs stably across three instances (Global: Mexico and the UAE, with legacy EMEA data; Hispanic South America: mainly Argentina and Chile; and a dedicated Brazil instance)",
          "Independently led the migration of the Global NetSuite instance to the new NetSuite2.com data source, remapping renamed tables/columns with no disruption to downstream models",
          "Built the Salesforce extraction pipeline (AWS AppFlow; Global and Hispanic South America instances), introduced to take load off NetSuite as client-facing workflows scaled with company growth",
          "Own 15+ third-party data integrations end-to-end (Twilio, Amplitude, Slack, Jira, Vapi, Workday, among others), having built Reclame Aqui, Incent, and Repsly fully from scratch",
          // TODO: quantify with a concrete % once available (Glue cost reduction from the dbt migration)
          "Contributed to the team's shift from hand-rolled Glue+Athena/Redshift queries to dbt (led by then-manager) by standing up a dedicated Redshift sandbox repository, helping both new and experienced engineers onboard onto the new workflow quickly",
          "Played a hands-on engineering role in migrating the data platform from Redshift to Databricks (evaluated against Snowflake, led by current manager) to unify dashboards, integrated AI (Genie), and MLflow-based model training: migrated dbt models into the new Databricks repos and built the first automation \"skills\" to accelerate that migration",
          // TODO: quantify with concrete numbers once available (S3 request/storage reduction from the Parquet compaction)
          "Implemented Parquet compaction across the NetSuite and Salesforce landing zones to cut S3 request volume and free up storage; maintain Airflow-orchestrated extraction pipelines and their credential/table lifecycle",
          "Adopted AI-assisted engineering tooling (Cursor, Claude Code) into daily workflows and built internal data tools and skills to streamline other developers' work",
        ],
      },
      {
        role: "BI Specialist",
        companyLine: "e-ABC Learning (Buenos Aires, Argentina) · Caracas, Venezuela · May 2019 - May 2020",
        bullets: [
          "Study and propose improvements for the internal ELSA tool",
          "Develop KPI dashboards for clients and specific topics, such as Mutual de Seguridad CChC (Chile)",
          "Orchestrate and develop a Machine Learning pilot project aimed at delivering a commercial product",
        ],
      },
      {
        role: "Data Integrator",
        companyLine: "Matrix CPM Solutions C.A. · Caracas, Venezuela · August 2018 - October 2018",
        bullets: [
          "Participate in a BI project at Claro Colombia",
          "Develop skills and gain knowledge in ODI and Tableau",
          "Develop skills and gain knowledge in the HortonWorks tool suite",
        ],
      },
      {
        role: "Demand Management Lead",
        companyLine: "Veconinter C.A. · Caracas, Venezuela · May 2017 - January 2018",
        bullets: [
          "Manage demand for IT incidents, requirements, and projects",
          "Lead the company website renewal project",
          "Lead the HR system upgrade project",
        ],
      },
      {
        role: "Instructor",
        companyLine: "Universidad Central de Venezuela · Caracas, Venezuela · October 2015 - May 2017",
        bullets: [
          "Teach the General Database Lab course",
          "Prepare course teaching materials",
          "Install and configure the Oracle server used for the course",
        ],
      },
      {
        role: "Consultant",
        companyLine: "Tian Consultores C.A. · Caracas, Venezuela · November 2012 - March 2017",
        bullets: [
          "Build a functional Android app prototype for surveys",
          "Lead OWB/OBI BI projects at Seguros Mercantil",
          "Lead PDI/OBI BI projects at the Central Bank of Venezuela",
        ],
      },
    ],
    educationHeading: "Education",
    education: [
      { degree: "Master of Business Administration (MBA)", schoolLine: "IESA · April 2016 - February 2022" },
      {
        degree: "Bachelor's Degree in Computer Science, Databases",
        schoolLine: "Universidad Central de Venezuela · 2008 - 2015",
      },
    ],
    certificationsHeading: "Relevant Certifications",
    certifications: [
      "SCRUM Foundation Professional Certificate (SFPC)",
      "Apache Kafka Series — Kafka Connect Hands-on Learning",
      "Big Data Without Mysteries — edX (March 2020)",
      "Complete Power BI Desktop Course — Udemy (November 2019)",
      "PartnerWorks Accredited Technical Track 1 and 2 Professional — HortonWorks PartnerWorks (August - October 2018)",
    ],
    skillsHeading: "Technical Skills",
    skillCategories: {
      biEtl: "BI & ETL",
      databases: "Databases",
      devTools: "Development & Tools",
      webStack: "Web Stack",
      ai: "AI",
      aws: "AWS",
      os: "Operating Systems",
      pm: "Project Management",
    },
    languagesHeading: "Languages",
    languages: ["Spanish — Native", "English — Professional"],
    interestsHeading: "Interests",
    interests: [
      "Artificial Intelligence",
      "Big Data",
      "Machine Learning",
      "Internet of Things",
      "Project Management",
      "High-Performance Teams",
      "NoSQL",
      "Open Data",
    ],
  },

  portfolio: {
    pageTitle: "Project Portfolio",
    summary:
      "A selection of featured projects demonstrating experience in data engineering, data warehouse architecture, and Business Intelligence, built with different technologies depending on each project's needs.",
    featuredBadge: "Featured Project",
    inProgressBadge: "In Progress",
    otherProjectsHeading: "Other Projects",
    imagePlaceholder: "Project image",
    livePreviewAlt: (title: string) => `Live preview of ${title}`,
    codeButton: "Code",
    demoButton: "Demo",
    reportButton: "View Report",
    pbixButton: "Download .pbix",
    twbButton: "Download .twb",
    twbNote:
      "Note: this file uses local connections -- reconnect them to your own copy of the repository when opening it in Tableau Desktop.",
    projects: {
      1: {
        title: "Arte y Esencia",
        description:
          "Web system for managing a small business's inventory, orders, and catalog: a public catalog with search and filters, an admin panel for supply control, product recipes, and inventory auditable by stock movements",
      },
      2: {
        title: "Job Market Radar",
        description:
          "Scrapes remote data engineering job postings from We Work Remotely, analyzing which skills employers demand most, modeled in a classic star-schema data warehouse and enriched with AI",
      },
      3: {
        title: "Used Car Analytics (Wide Table)",
        description:
          'A denormalized analytical table built on Kaggle\'s "Craigslist Cars/Trucks Data" dataset (used cars listed on Craigslist), designed for an AI assistant to explore directly through natural-language chat. Note: Streamlit puts the app to sleep after 12h with no visits -- if it appears asleep, click "Yes, get this app back up!" to wake it (takes under a minute)',
      },
      4: {
        title: "Ecobici CDMX Pulse",
        description:
          "Real-time streaming of Mexico City's Ecobici bike-share availability via Kafka, visualized on a live map with stations colored by occupancy level",
      },
      5: {
        title: "Economic Indicators Lakehouse",
        description:
          "Medallion pipeline (bronze/silver/gold) over Mexico's public economic indicators (Banxico, INEGI), using MinIO, PySpark, and DuckDB as a local stack equivalent to S3/Glue/Athena, orchestrated with Airflow",
      },
      6: {
        title: "ELT Warehouse with Continuous Integration",
        description:
          "Modern warehouse on Databricks Free Edition with tested and documented dbt models, deployed through a continuous-integration pipeline in GitHub Actions, visualized in a self-hosted Metabase dashboard",
      },
      7: {
        title: "Demand Forecasting Lab",
        description:
          "Feature engineering and time-series forecasting on data generated by other portfolio projects, published as a reproducible notebook report",
      },
    },
  },

  expandableText: {
    showMore: "Show more",
    showLess: "Show less",
  },

  techTags: {
    showMoreAria: (n: number) => `Show ${n} more technologies`,
    showLessAria: "Show fewer technologies",
  },

  jobMarketRadarReport: {
    headerTitle: "Job Market Radar",
    headerSubtitle: "Power BI report · static excerpt from the exported PDF",
    backToPortfolio: "← Portfolio",
    downloadPbix: "Download .pbix",
    tabs: {
      summary: "Summary",
      skills: "Skills",
      companies: "Companies",
    },
    kpis: {
      totalPostings: "Total Postings",
      confirmedDataRoles: "Confirmed Data Roles",
      enrichmentCoverage: "Enrichment Coverage",
    },
    postingsByDateTitle: "Total Postings by Date",
    postingsByDateCaption: "Approximate weekly trend reconstructed from the exported PDF — exact values in the .pbix.",
    trendAxisLabels: ["Jul 19", "Jul 26", "Aug 02", "Aug 09", "Aug 16"],
    postingsBySeniorityTitle: "Total Postings by Seniority",
    postingsBySkillTitle: "Total Postings by Skill (top 20, confirmed data roles)",
    postingsByCompanyTitle: "Total Postings by Company (top 17)",
    jobTitlesCardTitle: "Job Titles & Apply URLs (sample)",
    jobSampleCaption: "Sample of 8 out of 110 registered postings — the .pbix contains the full table.",
    applyLink: "Apply ↗",
    // Not a (v: number) => string function -- see TechTags.tsx's comment
    // on why a formatter can't be a Client Component prop. The client
    // builds `${v} ${postingsTooltipSuffix}` itself; the point values only
    // exist there (trendPoints is computed in Report.tsx).
    postingsTooltipSuffix: "postings",
  },
};

const es = {
  meta: {
    title: "Portafolio Profesional",
    description: "Portafolio profesional - Currículum, experiencia laboral y proyectos destacados",
  },

  header: {
    home: "Inicio",
    cv: "CV",
    portfolio: "Portafolio",
  },

  home: {
    specialty: "Senior Software Engineer · Business Intelligence & Datos",
    availableBadge: "Disponible para trabajo remoto",
    description:
      "Soy especialista en Business Intelligence e ingeniería de datos con más de 10 años de experiencia transformando datos de diversas fuentes en insights y dashboards accionables. Mi experiencia principal abarca bases de datos y data warehouses (Oracle, PostgreSQL, MySQL), ETLs (OWB, PDI) y construcción de consultas y análisis (PL/SQL) para su visualización en suites de Business Intelligence (OBI, Tableau, Power BI), cada vez más complementada con AWS, Python y dbt. También tengo experiencia liderando equipos de trabajo y proyectos BI, y actualmente me enfoco en integrar IA en flujos de trabajo de datos y BI, además de desarrollar habilidades de gerencia de proyectos. Explora mi experiencia profesional y mi portafolio de proyectos destacados.",
    viewCvButton: "Ver Currículum",
    viewPortfolioButton: "Ver Portafolio",
    connectHeading: "¿Conectamos?",
  },

  cv: {
    pageTitle: "Currículum Vitae",
    subtitle: "Alois Wirkes — Senior Software Engineer · Business Intelligence & Datos",
    downloadButton: "Descargar CV en PDF",
    summary:
      "Soy especialista en Business Intelligence e ingeniería de datos con más de 10 años de experiencia transformando datos de diversas fuentes en insights y dashboards accionables. Mi experiencia principal abarca bases de datos y data warehouses (Oracle, PostgreSQL, MySQL), ETLs (OWB, PDI) y construcción de consultas y análisis (PL/SQL) para su visualización en suites de Business Intelligence (OBI, Tableau, Power BI), cada vez más complementada con AWS, Python y dbt. También tengo experiencia liderando equipos de trabajo y proyectos BI, y actualmente me enfoco en integrar IA en flujos de trabajo de datos y BI, además de desarrollar habilidades de gerencia de proyectos.",
    personalInfoHeading: "Información Personal",
    labels: {
      name: "Nombre",
      currentRole: "Cargo Actual",
      specialty: "Especialidad",
      location: "Ubicación",
      availability: "Disponibilidad",
      phone: "Teléfono",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      upwork: "Upwork",
      viewProfile: "Ver Perfil",
    },
    locationValue: "Lerma, Estado de México, México",
    availabilityValue: "Disponible para trabajo remoto",
    experienceHeading: "Experiencia Profesional",
    experience: [
      {
        role: "Senior Software Engineer",
        companyLine: "KAVAK.com · Caracas, Venezuela · Junio 2020 - Presente",
        bullets: [
          "Construí la extracción de NetSuite desde cero: tras el fallo de un conector nativo de Workato, diseñé un pipeline personalizado en AWS Glue usando el driver JDBC de NetSuite; hoy corre de forma estable en tres instancias (Global: México y Emiratos Árabes, con datos legacy de EMEA; Hispanoamérica Sur: principalmente Argentina y Chile; y una instancia dedicada para Brasil)",
          "Lideré en solitario la migración de la instancia Global de NetSuite al nuevo datasource NetSuite2.com, remapeando tablas y columnas renombradas sin interrumpir los modelos downstream",
          "Construí el pipeline de extracción de Salesforce (AWS AppFlow; instancias Global e Hispanoamérica Sur), introducido para descongestionar a NetSuite a medida que los flujos orientados a clientes escalaban con el crecimiento de la empresa",
          "Soy dueño de 15+ integraciones de fuentes externas de principio a fin (Twilio, Amplitude, Slack, Jira, Vapi, Workday, entre otras), habiendo construido Reclame Aqui, Incent y Repsly totalmente desde cero",
          // TODO: cuantificar con un % concreto cuando esté disponible (reducción de costo de Glue tras la migración a dbt)
          "Contribuí al cambio del equipo de queries manuales sobre Glue+Athena/Redshift hacia dbt (liderado por mi jefe de ese momento) montando un repositorio de playground dedicado en Redshift, facilitando que tanto desarrolladores nuevos como experimentados adoptaran el nuevo flujo rápidamente",
          "Tuve un rol técnico protagónico en la migración de la plataforma de datos de Redshift a Databricks (evaluado frente a Snowflake, liderado por mi jefe actual) para unificar dashboards, IA integrada (Genie) y entrenamiento de modelos con MLflow: migré los modelos de dbt a los nuevos repositorios de Databricks y desarrollé las primeras \"skills\" de automatización para acelerar esa migración",
          // TODO: cuantificar con números concretos cuando estén disponibles (reducción de peticiones/almacenamiento en S3 tras la compactación a Parquet)
          "Implementé compactación a Parquet en las capas landing de NetSuite y Salesforce para reducir peticiones a S3 y liberar almacenamiento; mantengo la orquestación de las extracciones con Airflow y el ciclo de vida de credenciales/tablas",
          "Adopté herramientas de desarrollo asistidas por IA (Cursor, Claude Code) en el flujo de trabajo diario y construí herramientas y skills internas de datos para facilitar el trabajo de otros desarrolladores",
        ],
      },
      {
        role: "Especialista BI",
        companyLine: "e-ABC Learning (Buenos Aires, Argentina) · Caracas, Venezuela · Mayo 2019 - Mayo 2020",
        bullets: [
          "Estudiar y proponer mejoras para la herramienta interna ELSA",
          "Desarrollar dashboards de indicadores para clientes y temáticas puntuales, como Mutual de Seguridad CChC (Chile)",
          "Orquestar y desarrollar un proyecto piloto de Machine Learning con fines de obtener un producto comercial",
        ],
      },
      {
        role: "Integrador de Datos",
        companyLine: "Matrix CPM Solutions C.A. · Caracas, Venezuela · Agosto 2018 - Octubre 2018",
        bullets: [
          "Participar en proyecto BI en Claro Colombia",
          "Desarrollar habilidades y obtener conocimientos sobre ODI y Tableau",
          "Desarrollar habilidades y obtener conocimientos sobre la suite de herramientas HortonWorks",
        ],
      },
      {
        role: "Líder de Gestión de la Demanda",
        companyLine: "Veconinter C.A. · Caracas, Venezuela · Mayo 2017 - Enero 2018",
        bullets: [
          "Gestionar demanda de incidentes, requisitos y proyectos IT",
          "Liderar proyecto de renovación de página web de la empresa",
          "Liderar proyecto de actualización del sistema de RR.HH.",
        ],
      },
      {
        role: "Docente Instructor",
        companyLine: "Universidad Central de Venezuela · Caracas, Venezuela · Octubre 2015 - Mayo 2017",
        bullets: [
          "Impartir clases de Laboratorio General de Bases de Datos",
          "Preparar material didáctico para la materia",
          "Instalar y configurar el servidor de Oracle para dar la materia",
        ],
      },
      {
        role: "Consultor",
        companyLine: "Tian Consultores C.A. · Caracas, Venezuela · Noviembre 2012 - Marzo 2017",
        bullets: [
          "Realizar prototipo funcional de app Android para encuestas",
          "Liderar proyectos BI OWB/OBI en Seguros Mercantil",
          "Liderar proyectos BI PDI/OBI en Banco Central de Venezuela",
        ],
      },
    ],
    educationHeading: "Educación",
    education: [
      { degree: "Master of Business Administration (MBA)", schoolLine: "IESA · Abril 2016 - Febrero 2022" },
      {
        degree: "Licenciatura en Computación, Bases de Datos",
        schoolLine: "Universidad Central de Venezuela · 2008 - 2015",
      },
    ],
    certificationsHeading: "Certificaciones Relevantes",
    certifications: [
      "SCRUM Foundation Professional Certificate (SFPC)",
      "Apache Kafka Series — Kafka Connect Hands-on Learning",
      "Big Data sin Misterios — edX (Marzo 2020)",
      "Curso Completo Power BI Desktop — Udemy (Noviembre 2019)",
      "PartnerWorks Accredited Technical Track 1 y 2 Professional — HortonWorks PartnerWorks (Agosto - Octubre 2018)",
    ],
    skillsHeading: "Habilidades Técnicas",
    skillCategories: {
      biEtl: "BI & ETL",
      databases: "Bases de Datos",
      devTools: "Desarrollo & Herramientas",
      webStack: "Stack Web",
      ai: "IA",
      aws: "AWS",
      os: "Sistemas Operativos",
      pm: "Gestión de Proyectos",
    },
    languagesHeading: "Idiomas",
    languages: ["Español — Nativo", "Inglés — Profesional"],
    interestsHeading: "Intereses",
    interests: [
      "Inteligencia Artificial",
      "Big Data",
      "Aprendizaje Automático",
      "Internet de las Cosas",
      "Gerencia de Proyectos",
      "Equipos de Alto Desempeño",
      "NoSQL",
      "Datos Abiertos",
    ],
  },

  portfolio: {
    pageTitle: "Portafolio de Proyectos",
    summary:
      "Selección de proyectos destacados que demuestran experiencia en ingeniería de datos, arquitectura de data warehouses y Business Intelligence, construidos con distintas tecnologías según las necesidades de cada proyecto.",
    featuredBadge: "Proyecto Destacado",
    inProgressBadge: "En Desarrollo",
    otherProjectsHeading: "Otros Proyectos",
    imagePlaceholder: "Imagen del proyecto",
    livePreviewAlt: (title: string) => `Vista previa en vivo de ${title}`,
    codeButton: "Código",
    demoButton: "Demo",
    reportButton: "Ver reporte",
    pbixButton: "Descargar .pbix",
    twbButton: "Descargar .twb",
    twbNote:
      "Nota: el archivo usa conexiones locales -- reconéctalas a tu propia copia del repositorio al abrirlo en Tableau Desktop.",
    projects: {
      1: {
        title: "Arte y Esencia",
        description:
          "Sistema web para gestionar inventario, pedidos y catálogo de un emprendimiento: catálogo público con búsqueda y filtros, panel admin con control de insumos, recetas de producto e inventario auditable por movimientos",
      },
      2: {
        title: "Radar del Mercado Laboral",
        description:
          "Scraping de vacantes remotas de ingeniería de datos publicadas en We Work Remotely, con análisis para detectar qué habilidades demandan más los empleadores, modelado en un data warehouse clásico (esquema estrella) y enriquecido con IA",
      },
      3: {
        title: "Analítica de Autos Usados (Tabla Ancha)",
        description:
          'Tabla analítica desnormalizada sobre el dataset de Kaggle "Craigslist Cars/Trucks Data" (autos usados listados en Craigslist), pensada para que un asistente de IA la explore directamente vía chat en lenguaje natural. Nota: Streamlit pone la app a dormir tras 12h sin visitas -- si aparece dormida, haz clic en "Yes, get this app back up!" para despertarla (tarda menos de un minuto)',
      },
      4: {
        title: "Pulso de Ecobici CDMX",
        description:
          "Streaming en tiempo real de la disponibilidad de bicis y anclajes de Ecobici Ciudad de México mediante Kafka, visualizado en un mapa en vivo con estaciones coloreadas según su nivel de ocupación",
      },
      5: {
        title: "Lakehouse de Indicadores Económicos",
        description:
          "Pipeline medallion (bronze/silver/gold) sobre indicadores económicos públicos de México (Banxico, INEGI), con MinIO, PySpark y DuckDB como stack local equivalente a S3/Glue/Athena, orquestado con Airflow",
      },
      6: {
        title: "Warehouse ELT con Integración Continua",
        description:
          "Warehouse moderno en Databricks Free Edition con modelos dbt probados y documentados, desplegado mediante un pipeline de integración continua en GitHub Actions, visualizado en un dashboard de Metabase autoalojado",
      },
      7: {
        title: "Laboratorio de Pronóstico de Demanda",
        description:
          "Ingeniería de características y pronóstico de series de tiempo sobre datos generados por otros proyectos del portafolio, publicado como reporte reproducible en notebooks",
      },
    },
  },

  expandableText: {
    showMore: "Mostrar más",
    showLess: "Mostrar menos",
  },

  techTags: {
    showMoreAria: (n: number) => `Mostrar ${n} tecnologías más`,
    showLessAria: "Mostrar menos tecnologías",
  },

  jobMarketRadarReport: {
    headerTitle: "Radar del Mercado Laboral",
    headerSubtitle: "Reporte Power BI · extracto estático del PDF exportado",
    backToPortfolio: "← Portafolio",
    downloadPbix: "Descargar .pbix",
    tabs: {
      summary: "Resumen",
      skills: "Habilidades",
      companies: "Empresas",
    },
    kpis: {
      totalPostings: "Total Postings",
      confirmedDataRoles: "Confirmed Data Roles",
      enrichmentCoverage: "Enrichment Coverage",
    },
    postingsByDateTitle: "Total Postings by Date",
    postingsByDateCaption: "Tendencia semanal aproximada a partir del PDF exportado — valores exactos en el .pbix.",
    trendAxisLabels: ["Jul 19", "Jul 26", "Ago 02", "Ago 09", "Ago 16"],
    postingsBySeniorityTitle: "Total Postings by Seniority",
    postingsBySkillTitle: "Total Postings by Skill (top 20, roles de datos confirmados)",
    postingsByCompanyTitle: "Total Postings by Company (top 17)",
    jobTitlesCardTitle: "Job Titles & Apply URLs (muestra)",
    jobSampleCaption: "Muestra de 8 de 110 vacantes registradas — el .pbix contiene la tabla completa.",
    applyLink: "Aplicar ↗",
    postingsTooltipSuffix: "vacantes",
  },
} satisfies typeof en;

export type Dictionary = typeof en;

export const dictionaries = { en, es };
