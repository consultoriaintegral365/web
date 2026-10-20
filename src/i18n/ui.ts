import type { Locale } from './config';

/** Textos de la interfaz y de la página institucional, por idioma.
 *  El contenido legal largo vive en cada página .astro, no aquí. */
export const ui = {
  es: {
    meta: {
      homeTitle: 'Consultoría Integral 365 — Automatización, datos y software a medida',
      homeDescription:
        'Automatizamos procesos, convertimos los datos en decisiones y construimos el software que falta, como un solo sistema. Solicita tu MVP sin costo y comprueba la viabilidad de tu proyecto.',
      termsTitle: 'Términos de Servicio',
      termsDescription:
        'Términos y condiciones que rigen el uso del sitio web y los servicios de Consultoría Integral 365.',
      privacyTitle: 'Política de Privacidad',
      privacyDescription:
        'Cómo Consultoría Integral 365 recopila, usa y protege los datos personales, conforme a la Ley N° 29733 del Perú.',
    },
    nav: {
      services: 'Servicios',
      system: 'El sistema',
      approach: 'Método',
      about: 'Nosotros',
      mvp: 'Solicita tu MVP',
      contact: 'Contacto',
      skipToContent: 'Saltar al contenido principal',
      menu: 'Menú',
      toggleTheme: 'Cambiar entre tema claro y oscuro',
      language: 'Idioma',
      changeLanguage: 'Cambiar idioma',
      home: 'Inicio',
    },
    hero: {
      eyebrow: 'Procesos · Datos · Software',
      titleBefore: 'Procesos, datos y software,',
      titleAccent: 'como un solo sistema.',
      subtitle:
        'Automatizamos lo repetitivo, medimos lo que importa y construimos lo que falta. Tres disciplinas que se refuerzan entre sí, en lugar de tres proyectos sueltos.',
      principle: 'Primero el problema. Después la herramienta.',
      badge: 'MVP sin costo',
      ctaPrimary: 'Solicita tu MVP sin costo',
      ctaSecondary: 'Cómo funciona',
    },
    facts: {
      since: 'Desde',
      registered: 'E.I.R.L. inscrita en SUNAT',
      location: 'Lima, Perú',
      law: 'Datos personales: Ley N.° 29733',
      platform: 'Microsoft 365 · Power Platform · Azure',
    },
    pipeline: {
      status: 'en ejecución',
      caption: 'Ejemplo ilustrativo',
      lanes: ['Automatiza', 'Mide', 'Construye'],
      steps: ['solicitud', 'validar', 'notificar', 'registrar'],
      kpi: 'tiempo de ciclo',
      kpis: ['tiempo de ciclo', 'errores', 'volumen'],
      appTitle: 'Solicitud de compra',
      reject: 'Rechazar',
      approve: 'Aprobar',
      approved: 'Aprobado',
      loop: 'mejora continua',
    },
    system: {
      eyebrow: 'El sistema',
      title: 'Cada pieza alimenta a la siguiente.',
      subtitle:
        'Un proceso automatizado produce datos. Esos datos, bien medidos, muestran qué construir. Y lo que se construye mejora el proceso. Por eso las tres disciplinas viven juntas.',
      stages: [
        {
          label: 'Automatiza',
          title: 'Quitamos el trabajo manual entre sistemas.',
          body: 'Aprobaciones, conciliaciones, cargas y avisos que hoy dependen de personas copiando y pegando pasan a ejecutarse solos, con reglas claras y trazabilidad.',
          points: [
            'Flujos con Power Automate y código a medida',
            'Integraciones entre sistemas que hoy no se hablan',
            'Controles y registro de cada paso',
          ],
        },
        {
          label: 'Mide',
          title: 'Convertimos cada ejecución en una cifra confiable.',
          body: 'Lo que el proceso produce se modela una sola vez y se muestra donde se decide: un tablero en el que todos ven el mismo número.',
          points: [
            'Modelos semánticos y tableros en Power BI',
            'Calidad y trazabilidad del dato',
            'Cada indicador con una única definición',
          ],
        },
        {
          label: 'Construye',
          title: 'Desarrollamos lo que ninguna herramienta resuelve.',
          body: 'Cuando el proceso necesita una pantalla, una regla o una integración que no existe, la escribimos a medida, sobre lo que ya funciona.',
          points: [
            'Aplicaciones web y APIs a medida',
            'Interfaces pensadas para quien opera el proceso',
            'Código documentado, que no depende de nosotros',
          ],
        },
      ],
      loopLabel: 'Mejora continua',
      loopText: 'Y el ciclo vuelve a empezar: cada vuelta parte de un proceso mejor que el anterior.',
    },
    mvp: {
      eyebrow: 'Solicita tu MVP',
      badge: 'Sin costo',
      titleBefore: 'Antes de invertir,',
      titleAccent: 'míralo funcionando.',
      lead: 'Construimos un MVP acotado de tu proyecto para que su viabilidad deje de ser una opinión y se convierta en algo tangible: algo que puedes abrir, probar y evaluar con tu equipo.',
      receiptTitle: 'Resumen del MVP',
      receiptLines: [
        ['MVP funcional del flujo clave', 'S/ 0'],
        ['Evaluación de viabilidad', 'S/ 0'],
        ['Compromiso de contratación', 'Ninguno'],
      ],
      totalLabel: 'Costo total',
      totalValue: 'S/ 0',
      stepsTitle: 'Cómo funciona',
      steps: [
        'Nos cuentas el problema',
        'Acordamos por escrito un alcance mínimo',
        'Construimos algo que funciona',
        'Lo pruebas y decides',
      ],
      cta: 'Solicitar mi MVP',
      note: 'Sin costo ni compromiso. El alcance se acota antes de empezar: un flujo clave, no el sistema completo.',
      mailSubject: 'Solicitud de MVP sin costo',
      mailBody: 'Hola, quiero solicitar un MVP sin costo.\n\nEmpresa:\nProblema que queremos resolver:\n',
    },
    services: {
      eyebrow: 'Servicios',
      title: 'Lo que hacemos, por separado y en conjunto.',
      items: [
        {
          tag: 'Automatiza',
          title: 'Automatización de procesos',
          description:
            'Power Automate, integraciones y código a medida que eliminan el trabajo repetitivo. Menos tareas manuales, menos errores, más tiempo del equipo en lo que importa.',
        },
        {
          tag: 'Mide',
          title: 'Inteligencia de negocios y analítica',
          description:
            'Modelos semánticos, tableros e indicadores en Power BI. Diseñamos la capa de datos para que los números cuadren y el reporte sobreviva al crecimiento.',
        },
        {
          tag: 'Construye',
          title: 'Desarrollo de software e integraciones',
          description:
            'Aplicaciones, APIs y conectores a medida entre sistemas que hoy no se hablan, documentados para que el código no dependa de nosotros.',
        },
        {
          tag: 'Base',
          title: 'Ecosistema Microsoft 365 y Azure',
          description:
            'Identidad con Entra ID, servicios de datos y aplicaciones integradas al entorno que la organización ya tiene.',
        },
      ],
    },
    approach: {
      eyebrow: 'Método',
      title: 'Tres principios que sostienen cada proyecto.',
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
          title: 'Sin dependencia, ni de nosotros ni de un fabricante',
          description:
            'Documentamos, transferimos conocimiento y dejamos el control en manos del cliente. Y como no vendemos licencias de nadie, elegimos la tecnología que resuelve el problema, no la que nos conviene.',
        },
      ],
    },
    about: {
      eyebrow: 'Nosotros',
      title: 'Equipos pequeños, cerca de la operación.',
      body: [
        'Consultoría Integral 365 es una consultora de tecnología que acompaña a organizaciones en el diseño y la implementación de soluciones de datos, automatización y software.',
        'Trabajamos con equipos pequeños y multidisciplinarios, cerca de la operación del cliente. Nuestra práctica combina experiencia en ingeniería de datos, desarrollo de software y conocimiento profundo del ecosistema Microsoft.',
      ],
      quote: 'No vendemos licencias de nadie: elegimos lo que resuelve el problema.',
    },
    contact: {
      title: 'Conversemos',
      subtitle:
        'Cuéntanos qué problema estás tratando de resolver. Respondemos a todas las consultas.',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      locationLabel: 'Ubicación',
      cta: 'Escribir un correo',
      mvpHint: 'o empieza por el MVP sin costo',
    },
    footer: {
      tagline: 'Procesos, datos y software, como un solo sistema.',
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
      homeTitle: 'Consultoría Integral 365 — Automation, data and custom software',
      homeDescription:
        'We automate processes, turn data into decisions and build the software that is missing, as one system. Request your free MVP and prove your project is viable.',
      termsTitle: 'Terms of Service',
      termsDescription:
        'Terms and conditions governing the use of the Consultoría Integral 365 website and services.',
      privacyTitle: 'Privacy Policy',
      privacyDescription:
        'How Consultoría Integral 365 collects, uses and protects personal data, in accordance with Peruvian Law No. 29733.',
    },
    nav: {
      services: 'Services',
      system: 'The system',
      approach: 'Method',
      about: 'About',
      mvp: 'Request your MVP',
      contact: 'Contact',
      skipToContent: 'Skip to main content',
      menu: 'Menu',
      toggleTheme: 'Switch between light and dark theme',
      language: 'Language',
      changeLanguage: 'Change language',
      home: 'Home',
    },
    hero: {
      eyebrow: 'Processes · Data · Software',
      titleBefore: 'Processes, data and software,',
      titleAccent: 'working as one system.',
      subtitle:
        'We automate the repetitive, measure what matters and build what is missing. Three disciplines that reinforce each other, instead of three separate projects.',
      principle: 'Problem first. Tool second.',
      badge: 'Free MVP',
      ctaPrimary: 'Request your free MVP',
      ctaSecondary: 'How it works',
    },
    facts: {
      since: 'Since',
      registered: 'E.I.R.L. registered with SUNAT',
      location: 'Lima, Peru',
      law: 'Personal data: Law No. 29733',
      platform: 'Microsoft 365 · Power Platform · Azure',
    },
    pipeline: {
      status: 'running',
      caption: 'Illustrative example',
      lanes: ['Automate', 'Measure', 'Build'],
      steps: ['request', 'validate', 'notify', 'log'],
      kpi: 'cycle time',
      kpis: ['cycle time', 'errors', 'volume'],
      appTitle: 'Purchase request',
      reject: 'Reject',
      approve: 'Approve',
      approved: 'Approved',
      loop: 'continuous improvement',
    },
    system: {
      eyebrow: 'The system',
      title: 'Each piece feeds the next.',
      subtitle:
        'An automated process produces data. That data, well measured, shows what to build. And what gets built improves the process. That is why the three disciplines live together.',
      stages: [
        {
          label: 'Automate',
          title: 'We remove manual work between systems.',
          body: 'Approvals, reconciliations, uploads and alerts that today depend on people copying and pasting start running on their own, with clear rules and traceability.',
          points: [
            'Flows with Power Automate and custom code',
            'Integrations between systems that do not talk today',
            'Controls and a record of every step',
          ],
        },
        {
          label: 'Measure',
          title: 'We turn every run into a figure you can trust.',
          body: 'What the process produces is modelled once and shown where decisions are made: a dashboard where everyone sees the same number.',
          points: [
            'Semantic models and dashboards in Power BI',
            'Data quality and traceability',
            'Every indicator with a single definition',
          ],
        },
        {
          label: 'Build',
          title: 'We develop what no tool solves on its own.',
          body: 'When the process needs a screen, a rule or an integration that does not exist, we write it to measure, on top of what already works.',
          points: [
            'Custom web applications and APIs',
            'Interfaces designed for the people who run the process',
            'Documented code that does not depend on us',
          ],
        },
      ],
      loopLabel: 'Continuous improvement',
      loopText: 'And the cycle starts again: every turn begins from a better process than the last.',
    },
    mvp: {
      eyebrow: 'Request your MVP',
      badge: 'No cost',
      titleBefore: 'See it working',
      titleAccent: 'before you invest.',
      lead: 'We build a scoped MVP of your project so its viability stops being an opinion and becomes something tangible: something you can open, try and assess with your team.',
      receiptTitle: 'MVP summary',
      receiptLines: [
        ['Working MVP of the key flow', 'S/ 0'],
        ['Feasibility assessment', 'S/ 0'],
        ['Hiring commitment', 'None'],
      ],
      totalLabel: 'Total cost',
      totalValue: 'S/ 0',
      stepsTitle: 'How it works',
      steps: [
        'You tell us the problem',
        'We agree a minimal scope in writing',
        'We build something that works',
        'You try it and decide',
      ],
      cta: 'Request my MVP',
      note: 'No cost, no commitment. Scope is agreed before we start: one key flow, not the whole system.',
      mailSubject: 'Free MVP request',
      mailBody: 'Hello, I would like to request a free MVP.\n\nCompany:\nProblem we want to solve:\n',
    },
    services: {
      eyebrow: 'Services',
      title: 'What we do, separately and together.',
      items: [
        {
          tag: 'Automate',
          title: 'Process automation',
          description:
            'Power Automate, integrations and custom code that remove repetitive work. Fewer manual tasks, fewer errors, more of your team on what matters.',
        },
        {
          tag: 'Measure',
          title: 'Business intelligence and analytics',
          description:
            'Semantic models, dashboards and KPIs in Power BI. We design the data layer so the numbers reconcile and the reporting survives growth.',
        },
        {
          tag: 'Build',
          title: 'Software development and integrations',
          description:
            'Custom applications, APIs and connectors between systems that do not talk today, documented so the code never depends on us.',
        },
        {
          tag: 'Base',
          title: 'Microsoft 365 and Azure ecosystem',
          description:
            'Identity with Entra ID, data services and applications integrated into the environment the organisation already runs.',
        },
      ],
    },
    approach: {
      eyebrow: 'Method',
      title: 'Three principles behind every project.',
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
          title: 'No lock-in, to us or to a vendor',
          description:
            'We document, transfer knowledge and leave control with the client. And since we resell nobody’s licences, we choose the technology that solves the problem, not the one that suits us.',
        },
      ],
    },
    about: {
      eyebrow: 'About us',
      title: 'Small teams, close to the operation.',
      body: [
        'Consultoría Integral 365 is a technology consultancy that helps organisations design and implement data, automation and software solutions.',
        'We work in small, multidisciplinary teams, close to the operation of each client. Our practice combines data engineering experience, software development and deep knowledge of the Microsoft ecosystem.',
      ],
      quote: 'We resell nobody’s licences: we choose what solves the problem.',
    },
    contact: {
      title: 'Let us talk',
      subtitle: 'Tell us what problem you are trying to solve. We reply to every enquiry.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      cta: 'Send an email',
      mvpHint: 'or start with the free MVP',
    },
    footer: {
      tagline: 'Processes, data and software, working as one system.',
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
      homeTitle: 'Consultoría Integral 365 — Automação, dados e software sob medida',
      homeDescription:
        'Automatizamos processos, transformamos dados em decisões e construímos o software que falta, como um só sistema. Solicite seu MVP sem custo e comprove a viabilidade do seu projeto.',
      termsTitle: 'Termos de Serviço',
      termsDescription:
        'Termos e condições que regem o uso do site e dos serviços da Consultoría Integral 365.',
      privacyTitle: 'Política de Privacidade',
      privacyDescription:
        'Como a Consultoría Integral 365 coleta, usa e protege dados pessoais, conforme a Lei N.° 29733 do Peru.',
    },
    nav: {
      services: 'Serviços',
      system: 'O sistema',
      approach: 'Método',
      about: 'Sobre nós',
      mvp: 'Solicite seu MVP',
      contact: 'Contato',
      skipToContent: 'Ir para o conteúdo principal',
      menu: 'Menu',
      toggleTheme: 'Alternar entre tema claro e escuro',
      language: 'Idioma',
      changeLanguage: 'Mudar idioma',
      home: 'Início',
    },
    hero: {
      eyebrow: 'Processos · Dados · Software',
      titleBefore: 'Processos, dados e software,',
      titleAccent: 'como um só sistema.',
      subtitle:
        'Automatizamos o repetitivo, medimos o que importa e construímos o que falta. Três disciplinas que se reforçam entre si, em vez de três projetos soltos.',
      principle: 'Primeiro o problema. Depois a ferramenta.',
      badge: 'MVP sem custo',
      ctaPrimary: 'Solicite seu MVP sem custo',
      ctaSecondary: 'Como funciona',
    },
    facts: {
      since: 'Desde',
      registered: 'E.I.R.L. registrada na SUNAT',
      location: 'Lima, Peru',
      law: 'Dados pessoais: Lei N.° 29733',
      platform: 'Microsoft 365 · Power Platform · Azure',
    },
    pipeline: {
      status: 'em execução',
      caption: 'Exemplo ilustrativo',
      lanes: ['Automatiza', 'Mede', 'Constrói'],
      steps: ['solicitação', 'validar', 'notificar', 'registrar'],
      kpi: 'tempo de ciclo',
      kpis: ['tempo de ciclo', 'erros', 'volume'],
      appTitle: 'Solicitação de compra',
      reject: 'Rejeitar',
      approve: 'Aprovar',
      approved: 'Aprovado',
      loop: 'melhoria contínua',
    },
    system: {
      eyebrow: 'O sistema',
      title: 'Cada peça alimenta a seguinte.',
      subtitle:
        'Um processo automatizado produz dados. Esses dados, bem medidos, mostram o que construir. E o que se constrói melhora o processo. Por isso as três disciplinas vivem juntas.',
      stages: [
        {
          label: 'Automatiza',
          title: 'Tiramos o trabalho manual entre sistemas.',
          body: 'Aprovações, conciliações, cargas e avisos que hoje dependem de pessoas copiando e colando passam a rodar sozinhos, com regras claras e rastreabilidade.',
          points: [
            'Fluxos com Power Automate e código sob medida',
            'Integrações entre sistemas que hoje não se comunicam',
            'Controles e registro de cada etapa',
          ],
        },
        {
          label: 'Mede',
          title: 'Transformamos cada execução em um número confiável.',
          body: 'O que o processo produz é modelado uma única vez e mostrado onde se decide: um painel em que todos veem o mesmo número.',
          points: [
            'Modelos semânticos e painéis em Power BI',
            'Qualidade e rastreabilidade do dado',
            'Cada indicador com uma única definição',
          ],
        },
        {
          label: 'Constrói',
          title: 'Desenvolvemos o que nenhuma ferramenta resolve.',
          body: 'Quando o processo precisa de uma tela, uma regra ou uma integração que não existe, nós a escrevemos sob medida, sobre o que já funciona.',
          points: [
            'Aplicações web e APIs sob medida',
            'Interfaces pensadas para quem opera o processo',
            'Código documentado, que não depende de nós',
          ],
        },
      ],
      loopLabel: 'Melhoria contínua',
      loopText: 'E o ciclo recomeça: cada volta parte de um processo melhor que o anterior.',
    },
    mvp: {
      eyebrow: 'Solicite seu MVP',
      badge: 'Sem custo',
      titleBefore: 'Veja funcionando',
      titleAccent: 'antes de investir.',
      lead: 'Construímos um MVP delimitado do seu projeto para que a viabilidade deixe de ser uma opinião e se torne algo tangível: algo que você pode abrir, testar e avaliar com sua equipe.',
      receiptTitle: 'Resumo do MVP',
      receiptLines: [
        ['MVP funcional do fluxo-chave', 'S/ 0'],
        ['Avaliação de viabilidade', 'S/ 0'],
        ['Compromisso de contratação', 'Nenhum'],
      ],
      totalLabel: 'Custo total',
      totalValue: 'S/ 0',
      stepsTitle: 'Como funciona',
      steps: [
        'Você nos conta o problema',
        'Combinamos por escrito um escopo mínimo',
        'Construímos algo que funciona',
        'Você testa e decide',
      ],
      cta: 'Solicitar meu MVP',
      note: 'Sem custo e sem compromisso. O escopo é combinado antes de começar: um fluxo-chave, não o sistema completo.',
      mailSubject: 'Solicitação de MVP sem custo',
      mailBody: 'Olá, gostaria de solicitar um MVP sem custo.\n\nEmpresa:\nProblema que queremos resolver:\n',
    },
    services: {
      eyebrow: 'Serviços',
      title: 'O que fazemos, separadamente e em conjunto.',
      items: [
        {
          tag: 'Automatiza',
          title: 'Automação de processos',
          description:
            'Power Automate, integrações e código sob medida que eliminam o trabalho repetitivo. Menos tarefas manuais, menos erros, mais tempo da equipe no que importa.',
        },
        {
          tag: 'Mede',
          title: 'Inteligência de negócios e analytics',
          description:
            'Modelos semânticos, painéis e indicadores em Power BI. Desenhamos a camada de dados para que os números fechem e o relatório sobreviva ao crescimento.',
        },
        {
          tag: 'Constrói',
          title: 'Desenvolvimento de software e integrações',
          description:
            'Aplicações, APIs e conectores sob medida entre sistemas que hoje não se comunicam, documentados para que o código nunca dependa de nós.',
        },
        {
          tag: 'Base',
          title: 'Ecossistema Microsoft 365 e Azure',
          description:
            'Identidade com Entra ID, serviços de dados e aplicações integradas ao ambiente que a organização já possui.',
        },
      ],
    },
    approach: {
      eyebrow: 'Método',
      title: 'Três princípios por trás de cada projeto.',
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
          title: 'Sem dependência, nem de nós nem de um fabricante',
          description:
            'Documentamos, transferimos conhecimento e deixamos o controle com o cliente. E como não vendemos licenças de ninguém, escolhemos a tecnologia que resolve o problema, não a que nos convém.',
        },
      ],
    },
    about: {
      eyebrow: 'Sobre nós',
      title: 'Equipes pequenas, perto da operação.',
      body: [
        'A Consultoría Integral 365 é uma consultoria de tecnologia que acompanha organizações no desenho e na implementação de soluções de dados, automação e software.',
        'Trabalhamos com equipes pequenas e multidisciplinares, próximas à operação do cliente. Nossa prática combina experiência em engenharia de dados, desenvolvimento de software e conhecimento profundo do ecossistema Microsoft.',
      ],
      quote: 'Não vendemos licenças de ninguém: escolhemos o que resolve o problema.',
    },
    contact: {
      title: 'Vamos conversar',
      subtitle:
        'Conte-nos qual problema você está tentando resolver. Respondemos a todas as consultas.',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefone',
      locationLabel: 'Localização',
      cta: 'Enviar um e-mail',
      mvpHint: 'ou comece pelo MVP sem custo',
    },
    footer: {
      tagline: 'Processos, dados e software, como um só sistema.',
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
