import type { Locale } from './config';

/** Textos de la interfaz y de la página institucional, por idioma.
 *  El contenido legal largo vive en cada página .astro, no aquí. */
export const ui = {
  es: {
    meta: {
      homeTitle: 'Consultoría Integral 365 — Consultoría tecnológica',
      homeDescription:
        'Consultoría tecnológica especializada en inteligencia de negocios, automatización de procesos y soluciones sobre el ecosistema Microsoft. Convertimos datos dispersos en decisiones.',
      termsTitle: 'Términos de Servicio',
      termsDescription:
        'Términos y condiciones que rigen el uso del sitio web y los servicios de Consultoría Integral 365.',
      privacyTitle: 'Política de Privacidad',
      privacyDescription:
        'Cómo Consultoría Integral 365 recopila, usa y protege los datos personales, conforme a la Ley N° 29733 del Perú.',
    },
    nav: {
      services: 'Servicios',
      approach: 'Cómo trabajamos',
      about: 'Nosotros',
      contact: 'Contacto',
      skipToContent: 'Saltar al contenido principal',
      language: 'Idioma',
      changeLanguage: 'Cambiar idioma',
      home: 'Inicio',
    },
    hero: {
      eyebrow: 'Consultoría tecnológica',
      title: 'Tecnología que ordena la operación y sostiene la decisión',
      subtitle:
        'Acompañamos a las empresas a convertir datos dispersos en información confiable, a eliminar el trabajo manual repetitivo y a construir soluciones que se integran con lo que ya usan.',
      ctaPrimary: 'Conversemos',
      ctaSecondary: 'Ver servicios',
    },
    services: {
      title: 'Servicios',
      subtitle: 'Cuatro frentes de trabajo que se refuerzan entre sí.',
      items: [
        {
          title: 'Inteligencia de negocios y analítica',
          description:
            'Modelos semánticos, tableros e indicadores en Power BI. Diseñamos la capa de datos —modelo, relaciones, métricas— para que los números cuadren y el reporte sobreviva al crecimiento.',
        },
        {
          title: 'Automatización de procesos',
          description:
            'Identificamos el trabajo repetitivo y lo eliminamos con flujos automatizados, integraciones y scripts. Menos tareas manuales, menos errores, más tiempo del equipo en lo que importa.',
        },
        {
          title: 'Desarrollo de software e integraciones',
          description:
            'Aplicaciones a medida, APIs y conectores entre sistemas que hoy no se hablan. Desarrollamos sobre estándares abiertos y documentamos para que el código no dependa de nosotros.',
        },
        {
          title: 'Ecosistema Microsoft 365 y Azure',
          description:
            'Arquitectura, gobierno e implementación sobre la plataforma Microsoft: identidad con Entra ID, servicios de datos, y aplicaciones integradas al entorno que la organización ya tiene.',
        },
      ],
    },
    approach: {
      title: 'Cómo trabajamos',
      subtitle: 'Tres principios que sostienen cada proyecto.',
      items: [
        {
          title: 'Entender antes de construir',
          description:
            'Ningún proyecto empieza con una herramienta. Empieza mapeando el proceso real, con las personas que lo ejecutan todos los días.',
        },
        {
          title: 'Entregas cortas y verificables',
          description:
            'Avanzamos en incrementos que se pueden usar y medir desde temprano, en vez de un gran entregable final que llega tarde y sorprende.',
        },
        {
          title: 'Sin dependencia del proveedor',
          description:
            'Documentamos, transferimos conocimiento y dejamos el control en manos del cliente. El éxito es que puedan seguir sin nosotros.',
        },
      ],
    },
    about: {
      title: 'Nosotros',
      body: [
        'Consultoría Integral 365 es una consultora de tecnología que acompaña a organizaciones en el diseño y la implementación de soluciones de datos, automatización y software.',
        'Trabajamos con equipos pequeños y multidisciplinarios, cerca de la operación del cliente. Nuestra práctica combina experiencia en ingeniería de datos, desarrollo de software y conocimiento profundo del ecosistema Microsoft.',
      ],
    },
    contact: {
      title: 'Conversemos',
      subtitle:
        'Cuéntanos qué problema estás tratando de resolver. Respondemos a todas las consultas.',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      locationLabel: 'Ubicación',
      cta: 'Escribir un correo',
    },
    footer: {
      tagline: 'Consultoría tecnológica en datos, automatización y software.',
      legal: 'Legal',
      company: 'Empresa',
      terms: 'Términos de Servicio',
      privacy: 'Política de Privacidad',
      rights: 'Todos los derechos reservados.',
      taxIdLabel: 'RUC',
    },
    legal: {
      lastUpdated: 'Última actualización',
      backHome: 'Volver al inicio',
      tableOfContents: 'Contenido',
    },
  },

  en: {
    meta: {
      homeTitle: 'Consultoría Integral 365 — Technology consulting',
      homeDescription:
        'Technology consulting specialised in business intelligence, process automation and solutions built on the Microsoft ecosystem. We turn scattered data into decisions.',
      termsTitle: 'Terms of Service',
      termsDescription:
        'Terms and conditions governing the use of the Consultoría Integral 365 website and services.',
      privacyTitle: 'Privacy Policy',
      privacyDescription:
        'How Consultoría Integral 365 collects, uses and protects personal data, in accordance with Peruvian Law No. 29733.',
    },
    nav: {
      services: 'Services',
      approach: 'How we work',
      about: 'About',
      contact: 'Contact',
      skipToContent: 'Skip to main content',
      language: 'Language',
      changeLanguage: 'Change language',
      home: 'Home',
    },
    hero: {
      eyebrow: 'Technology consulting',
      title: 'Technology that organises operations and supports decisions',
      subtitle:
        'We help companies turn scattered data into reliable information, eliminate repetitive manual work, and build solutions that integrate with what they already use.',
      ctaPrimary: 'Let us talk',
      ctaSecondary: 'See services',
    },
    services: {
      title: 'Services',
      subtitle: 'Four practice areas that reinforce one another.',
      items: [
        {
          title: 'Business intelligence and analytics',
          description:
            'Semantic models, dashboards and KPIs in Power BI. We design the data layer — model, relationships, metrics — so the numbers reconcile and the reporting survives growth.',
        },
        {
          title: 'Process automation',
          description:
            'We identify repetitive work and remove it with automated flows, integrations and scripts. Fewer manual tasks, fewer errors, more of your team on what matters.',
        },
        {
          title: 'Software development and integrations',
          description:
            'Custom applications, APIs and connectors between systems that do not talk to each other today. We build on open standards and document so the code never depends on us.',
        },
        {
          title: 'Microsoft 365 and Azure ecosystem',
          description:
            'Architecture, governance and implementation on the Microsoft platform: identity with Entra ID, data services, and applications integrated into the environment the organisation already runs.',
        },
      ],
    },
    approach: {
      title: 'How we work',
      subtitle: 'Three principles behind every project.',
      items: [
        {
          title: 'Understand before building',
          description:
            'No project starts with a tool. It starts by mapping the real process, alongside the people who run it every day.',
        },
        {
          title: 'Short, verifiable deliveries',
          description:
            'We progress in increments you can use and measure early, instead of one large final deliverable that arrives late and surprises everyone.',
        },
        {
          title: 'No vendor lock-in',
          description:
            'We document, transfer knowledge and leave control with the client. Success means they can carry on without us.',
        },
      ],
    },
    about: {
      title: 'About us',
      body: [
        'Consultoría Integral 365 is a technology consultancy that helps organisations design and implement data, automation and software solutions.',
        'We work in small, multidisciplinary teams, close to the operation of each client. Our practice combines data engineering experience, software development and deep knowledge of the Microsoft ecosystem.',
      ],
    },
    contact: {
      title: 'Let us talk',
      subtitle: 'Tell us what problem you are trying to solve. We reply to every enquiry.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      cta: 'Send an email',
    },
    footer: {
      tagline: 'Technology consulting in data, automation and software.',
      legal: 'Legal',
      company: 'Company',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      rights: 'All rights reserved.',
      taxIdLabel: 'Tax ID',
    },
    legal: {
      lastUpdated: 'Last updated',
      backHome: 'Back to home',
      tableOfContents: 'Contents',
    },
  },

  pt: {
    meta: {
      homeTitle: 'Consultoría Integral 365 — Consultoria de tecnologia',
      homeDescription:
        'Consultoria de tecnologia especializada em inteligência de negócios, automação de processos e soluções no ecossistema Microsoft. Transformamos dados dispersos em decisões.',
      termsTitle: 'Termos de Serviço',
      termsDescription:
        'Termos e condições que regem o uso do site e dos serviços da Consultoría Integral 365.',
      privacyTitle: 'Política de Privacidade',
      privacyDescription:
        'Como a Consultoría Integral 365 coleta, usa e protege dados pessoais, conforme a Lei N.° 29733 do Peru.',
    },
    nav: {
      services: 'Serviços',
      approach: 'Como trabalhamos',
      about: 'Sobre nós',
      contact: 'Contato',
      skipToContent: 'Ir para o conteúdo principal',
      language: 'Idioma',
      changeLanguage: 'Mudar idioma',
      home: 'Início',
    },
    hero: {
      eyebrow: 'Consultoria de tecnologia',
      title: 'Tecnologia que organiza a operação e sustenta a decisão',
      subtitle:
        'Ajudamos empresas a transformar dados dispersos em informação confiável, a eliminar o trabalho manual repetitivo e a construir soluções que se integram ao que já utilizam.',
      ctaPrimary: 'Vamos conversar',
      ctaSecondary: 'Ver serviços',
    },
    services: {
      title: 'Serviços',
      subtitle: 'Quatro frentes de trabalho que se reforçam mutuamente.',
      items: [
        {
          title: 'Inteligência de negócios e analytics',
          description:
            'Modelos semânticos, painéis e indicadores em Power BI. Desenhamos a camada de dados — modelo, relacionamentos, métricas — para que os números fechem e o relatório sobreviva ao crescimento.',
        },
        {
          title: 'Automação de processos',
          description:
            'Identificamos o trabalho repetitivo e o eliminamos com fluxos automatizados, integrações e scripts. Menos tarefas manuais, menos erros, mais tempo da equipe no que importa.',
        },
        {
          title: 'Desenvolvimento de software e integrações',
          description:
            'Aplicações sob medida, APIs e conectores entre sistemas que hoje não se comunicam. Desenvolvemos sobre padrões abertos e documentamos para que o código nunca dependa de nós.',
        },
        {
          title: 'Ecossistema Microsoft 365 e Azure',
          description:
            'Arquitetura, governança e implementação na plataforma Microsoft: identidade com Entra ID, serviços de dados e aplicações integradas ao ambiente que a organização já possui.',
        },
      ],
    },
    approach: {
      title: 'Como trabalhamos',
      subtitle: 'Três princípios por trás de cada projeto.',
      items: [
        {
          title: 'Entender antes de construir',
          description:
            'Nenhum projeto começa por uma ferramenta. Começa mapeando o processo real, junto das pessoas que o executam todos os dias.',
        },
        {
          title: 'Entregas curtas e verificáveis',
          description:
            'Avançamos em incrementos que podem ser usados e medidos desde cedo, em vez de uma grande entrega final que chega tarde e surpreende.',
        },
        {
          title: 'Sem dependência do fornecedor',
          description:
            'Documentamos, transferimos conhecimento e deixamos o controle com o cliente. O sucesso é que possam seguir sem nós.',
        },
      ],
    },
    about: {
      title: 'Sobre nós',
      body: [
        'A Consultoría Integral 365 é uma consultoria de tecnologia que acompanha organizações no desenho e na implementação de soluções de dados, automação e software.',
        'Trabalhamos com equipes pequenas e multidisciplinares, próximas à operação do cliente. Nossa prática combina experiência em engenharia de dados, desenvolvimento de software e conhecimento profundo do ecossistema Microsoft.',
      ],
    },
    contact: {
      title: 'Vamos conversar',
      subtitle:
        'Conte-nos qual problema você está tentando resolver. Respondemos a todas as consultas.',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefone',
      locationLabel: 'Localização',
      cta: 'Enviar um e-mail',
    },
    footer: {
      tagline: 'Consultoria de tecnologia em dados, automação e software.',
      legal: 'Legal',
      company: 'Empresa',
      terms: 'Termos de Serviço',
      privacy: 'Política de Privacidade',
      rights: 'Todos os direitos reservados.',
      taxIdLabel: 'RUC',
    },
    legal: {
      lastUpdated: 'Última atualização',
      backHome: 'Voltar ao início',
      tableOfContents: 'Conteúdo',
    },
  },
} as const;

export function t(locale: Locale) {
  return ui[locale];
}
