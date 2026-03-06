import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Analista CX",
  initials: "JM",
  location: "Soacha, Cundinamarca",
  locationLink: "https://maps.app.goo.gl/bhQ5b52TFhCBbHks9",
  about:
    "Brian Jesús Molina Castro",
  summary:
    "Profesional con sólida trayectoria en el sector BPO, especializado en la optimización de la Experiencia del Cliente (CX) mediante el análisis estratégico de datos. Con capacidad probada para liderar proyectos transformando métricas complejas en planes de acción efectivos. Soy una persona proactiva enfocada en la mejora continua que se adapta fácilmente a los cambios.",
  avatarUrl: "https://avatars.githubusercontent.com/u/78837869?s=400&u=5e1f27717caffbcecc2c7845f4225a276895965f&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "jesusmcode@gmail.com",
    tel: "+57 3168093325",
    social: [
      {
        name: "LinkedIn",
        url: "http://www.linkedin.com/in/jesus-molina-castro",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [

    {
      school: "Universidad Francisco de Paula Santander",
      degree: "Ingeniero Industrial",
      start: "Feb 2019",
      end: "Nov 2024",
    },

          {
      school: "Daxus LATAM",
      degree: "Master en Power BI",
      start: "Ene 2026",
      end: "Presente",
    },

        {
      school: "Google Cloud Skills Boost",
      degree: "Data Analyst",
      start: "Oct 2024",
      end: "Ene 2025",
    },

    {
      school: "MinTic",
      degree: "Análisis y Visualización de datos",
      start: "Ago 2024",
      end: "Oct 2024",
    },

    {
      school: "Compensar",
      degree: "Power BI para la Gestión Administrativa",
      start: "Nov 2023",
      end: "Dic 2023",
    },

  ],
  work: [

    {
      company: "Apex América CO",
      badges: ["Híbrido"],
      title: "Analista de Calidad",
      logo: ConsultlyLogo,
      start: "Jun 2024",
      end: "Presente",
      description:
        "Responsable de la gestión de calidad para la campaña WOM SAC Colombia. Transformé la auditoría de interacciones telefónicas en un proceso pedagógico, identificando brechas de conocimiento y ejecutando sesiones de feedback constructivo orientadas a la mejora continua. Además, automaticé reportes con Python y Google Sheets que optimizaron la entrega de resultados a los cientes y las operaciones",
    },

    {
      company: "Apex América CO",
      badges: ["Híbrido"],
      title: "Analista de Procesos",
      logo: ConsultlyLogo,
      start: "Dic 2025",
      end: "Marzo 2026",
      description:
        "Líderé el levantamiento de procesos y documentación para la auditoría internas ISO 27001, garantizando la integridad y calidad operativa. Especialista en el diseño y seguimiento de Planes de Acción para la resolución de no conformidades",
    },

    {
      company: "Apex América CO",
      badges: ["Híbrido"],
      title: "Datamarshall / BackOffice",
      logo: ParabolLogo,
      start: "Feb 2024",
      end: "Jun 2024",
      description:
        "Desarrollé Dashboards en Google Looker Studio para la medición y control del Nivel de Satisfacción del Cliente (NPS), optimizando el análisis del indicador y reduciendo los tiempos de evaluación atravez de visualizaciones efectivas. Además, Automatice en Excel el tablero de control utilizado para el seguimiento de los indicadores clave de la operación como el Tiempo Medio de Operación (TMO), Llamadas Cortas (SC) y Tipificación (TP).",
    },
    {
      company: "Apex América CO",
      badges: ["Presencial"],
      title: "Analista de Procesos - Practicante",
      logo: ClevertechLogo,
      start: "Ago 2023",
      end: "Feb 2024",
      description:
        "Lideré el levantamiento de procesos y la estandarización en el departamento de Finanzas y Control, desarrollando políticas, formatos, procedimientos e instructivos para asegurar una gestión eficiente y ordenada de la información. Además, creé dashboards para los departamentos de Relaciones Laborales y Nómina, que miden los indicadores generales e individuales de cada miembro del equipo.",
    },
    {
      company: "Papelería Nuevo Milenio",
      badges: ["Presencial"],
      title: "Asesor de Ventas - Cajero",
      logo: JojoMobileLogo,
      start: "Oct 2021",
      end: "Jul 2023",
      description:
        "Responsable del manejo de inventarios, caja y elaboración de facturas, la recepción y despacho de pedidos, así como el empaquetado y etiquetado de productos.",
    },
    {
      company: "Licorera Azteca",
      badges: ["Presencial"],
      title: "Mesero - Barra",
      logo: NSNLogo,
      start: "Oct 2022",
      end: "Jul 2023",
      description: "Empleo de fines de semana donde proporcioné un excelente servicio al cliente, gestionando la toma de pedidos ofreciendo asesoramiento sobre productos, control de inventarios y manejo de caja.",
    },
  ],
  skills: [
    "Power BI",
    "Excel",
    "Power Query",
    "Looker Studio",
    "Google Sheets",
    "Apps Script",
    "Python",
    "SQL - Básico",
    "Gcloud - Básico"
  ],

  Habilidades: [
    "Liderazgo Inspirador",
    "Comunicación asertiva",
    "Trabajo en equipo",
    "Escucha activa",
    "Resolución de Conflictos",
    "Pensamiento crítico",  
    "Adaptación al cambio",

  ],
  projects: [
    {
      title: "Análisis de Ventas - Xsales",
      techStack: [
        "Power BI",
        "DAX",
        "Power Query",
      ],
      description: "Dashboard para el análisis detallado de los costos, el lucro, y el rendimiento financiero de la empresa Xsales",
      logo: ConsultlyLogo,
      link: {
        label: "app.powerbi.com",
        href: "https://app.powerbi.com/view?r=eyJrIjoiYTBmYzAxMTQtNDllMS00YTA0LThkZGEtNjdjYmFlZmIzYzQ5IiwidCI6IjJkZTRkNzgwLTEyY2EtNGJkOC05NDVkLWVkYTYzYmRmMTU3ZSIsImMiOjR9",
      },
    },
    {
      title: "Control NPS",
      techStack: [
        "Google Looker Studio",
        "Power Query",
      ],
      description:
        "Dashboard para el seguimiento y control del NPS de la campañan WOM SAC",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://lookerstudio.google.com/s/jyfYTYQ3blY",
      },
    },
    {
      title: "Seguimiento de Ventas",
      techStack: [
        "Power BI",
        "DAX",
        "Power Query",
      ],
      description:
        "Dashboard para el acompañamiento de ventas realizado para una tienda en Colombia",
      logo: EvercastLogo,
      link: {
        label: "app.powerbi.com",
        href: "https://app.powerbi.com/view?r=eyJrIjoiMjc2Y2RiY2YtYmM0OS00MDNkLWE2MWMtMjAyNDNlYjk4MzIwIiwidCI6IjJkZTRkNzgwLTEyY2EtNGJkOC05NDVkLWVkYTYzYmRmMTU3ZSIsImMiOjR9",
      },
    },
  ],
} as const;
