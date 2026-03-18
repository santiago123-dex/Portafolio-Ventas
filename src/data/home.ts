import type { HomePageContent } from "../types/types";

export const homePageContent: HomePageContent = {
  seo: {
    title: "Landing Studio | Landing pages para microempresas y negocios",
    description:
      "Disenamos landing pages para microempresas y negocios que buscan verse profesionales, ganar confianza y captar mas clientes desde Google, redes y anuncios.",
  },
  hero: {
    eyebrow: "Crecimiento Digital",
    title: ["Sitio web para impulsar tu", "negocio."],
    description:
      "Disenamos sitios web informativos personalizados hechos para ayudarte a obtener mayor visibilidad y llegar a mas clientes. Ideal para emprendedores y negocios locales que quieren expandir su presencia en internet.",
    primaryCta: {
      href: "#contact",
      label: "Quiero mi sitio web",
    },
    secondaryCta: {
      href: "#projects",
      label: "Ver ejemplos",
    },
    cardTitle: "Tu negocio en movimiento",
    cardDescription:
      "Un sitio web bien estructurado te ayuda a mostrar confianza, atraer nuevos clientes y mantener un avance constante.",
  },
  reviews: [
    {
      quote:
        "Ahora explicamos mejor lo que hacemos y la gente nos contacta mas.",
      author: "Laura Pineda",
      role: "Spa estetico",
    },
    {
      quote:
        "La pagina se ve profesional y nos ayuda mucho cuando enviamos trafico.",
      author: "Diego Parra",
      role: "Consultoria contable",
    },
    {
      quote: "Quedo clara, bonita y lista para mostrar nuestros servicios.",
      author: "Mariana Gil",
      role: "Reposteria",
    },
  ],
  projects: [
    {
      name: "SoundHealth",
      type: "Bienestar",
      url: "https://soundhealth.vercel.app",
      description:
        "Pagina informativa para una microempresa de poder terapeutico, enfocada en mostrar como el yoga, el sonido y la vibracion pueden ayudar a recuperar la armonia del cuerpo y la mente.",
    },
    {
      name: "Barber Studio",
      type: "Servicios",
      url: "https://barber-topaz-chi.vercel.app/",
      description:
        "Landing page para una barberia, con un diseno moderno y masculino, enfocada en mostrar los servicios, precios y generar confianza para convertir visitantes en clientes.",
    },
    {
      name: "Landing Mecanic",
      type: "Servicios",
      url: "https://landing-nasa-mecanic.vercel.app/",
      description:
        "Landing page para un negocio del sector mecanico, pensada para presentar servicios de forma clara, transmitir confianza y facilitar el contacto con nuevos clientes.",
    },
  ],
  contact: {
    email: "santiagofajardomorales17@gmail.com",
    phoneLabel: "Telefono",
    phone: "+57 3136728159",
  },
};
