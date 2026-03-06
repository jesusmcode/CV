import React from "react";

// --- ICONOS DEFINIDOS INLINE (Para evitar errores de carpeta vacía) ---
const GitHubIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedInIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const XIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m2.46-2.46L20 4"></path>
  </svg>
);

// --- DATOS DEL CURRÍCULO ---
export const RESUME_DATA = {
  name: "Analista CX",
  initials: "JM",
  location: "Soacha, Cundinamarca",
  locationLink: "https://www.google.com/maps/search/Soacha",
  about: "Brian Jesús Molina Castro",
  summary:
    "Profesional con sólida trayectoria en el sector BPO, especializado en la optimización de la Experiencia del Cliente (CX) mediante el análisis estratégico de datos. Con capacidad probada para liderar proyectos transformando métricas complejas en planes de acción efectivos.",
  avatarUrl: "https://avatars.githubusercontent.com/u/78837869?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "jesusmcode@gmail.com",
    tel: "+57 3168093325",
    social: [
      {
        name: "LinkedIn",
        url: "http://www.linkedin.com/in/jesus-molina-castro",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/JesusMolinaCastro", // Ajusta tu usuario si es diferente
        icon: GitHubIcon,
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
    }
  ],
  work: [
    {
      company: "Apex América CO",
      badges: ["Híbrido"],
      title: "Analista de Procesos",
      start: "Dic 2025",
      end: "Marzo 2026",
      description: "Lideré el levantamiento de procesos y documentación para la auditoría internas ISO 27001.",
    },
    {
      company: "Apex América CO",
      badges: ["Híbrido"],
      title: "Analista de Calidad",
      start: "Jun 2024",
      end: "Presente",
      description: "Gestión de calidad para la campaña WOM SAC Colombia. Automatización con Python y Google Sheets.",
    },
    {
      company: "Apex América CO",
      badges: ["Híbrido"],
      title: "Datamarshall / BackOffice",
      start: "Feb 2024",
      end: "Jun 2024",
      description: "Desarrollo de Dashboards en Looker Studio para control de NPS y TMO.",
    }
  ],
  skills: [
    "Power BI", "Excel", "Python", "SQL", "Looker Studio", "Liderazgo", "Comunicación asertiva"
  ],
  projects: [
    {
      title: "Análisis de Ventas - Xsales",
      techStack: ["Power BI", "DAX"],
      description: "Dashboard financiero detallado.",
      link: {
        label: "Power BI",
        href: "https://app.powerbi.com/view?r=eyJrIjoiYTBmYzAxMTQtNDllMS00YTA0LThkZGEtNjdjYmFlZmIzYzQ5IiwidCI6IjJkZTRkNzgwLTEyY2EtNGJkOC05NDVkLWVkYTYzYmRmMTU3ZSIsImMiOjR9",
      },
    }
  ],
} as const;