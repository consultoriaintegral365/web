# Benchmarking web para CI365 — consultoría senior

Fecha: 2026-10-08 · Alcance: top 100 sitios del mundo + 20 sitios de servicios de desarrollo de software · Objetivo: rediseñar la web de CI365.

## 0. Lo que debes saber antes de leer (límites honestos)

1. **Las cifras de tráfico son estimaciones.** El ranking de 100 sitios sale de un artículo de WsCube Tech (17-jul-2026) que cita Similarweb (junio 2026). Es de segunda mano, no está bien ordenado en algunos puestos (Bing/TikTok, Claude/Canva) y ~30 filas son "est.". Úsalo como **mapa de categorías**, no como dato contable. Cruce con Statista (may-2026): Google 101 B, YouTube 53 B, Facebook 9,4 B, ChatGPT 5,6 B.
2. **No analicé 100 sitios uno por uno.** Los visité de forma directa 6 (Thoughtworks, Endava, Toptal, Netguru, SoftServe, Accenture). Globant y EPAM devolvieron 403; Perficient, 429. El resto de patrones del top 100 proviene de conocimiento general de esos productos y **debe verificarse** antes de citarlos como dato. Las observaciones de color/tipografía no se pudieron extraer en ningún caso (solo estructura y copy).
3. **"Más visitadas" no aplica bien a consultoras.** Ninguna consultora entra al top 100 (la más cercana es Microsoft.com, #31, y GitHub #48). Para el panel de 20 usé **criterio de relevancia + tamaño**, no tráfico: Globant, por ejemplo, ronda ~334 mil visitas/mes (Semrush, sept-2025) y Thoughtworks ~293 mil (dic-2025) — ni de lejos comparable con los gigantes del top 100.
4. **Tu web no es una web de marketing típica** (memoria del proyecto): nació para desbloquear Entra ID y Partner Center. Eso implica que la credibilidad verificable (razón social, RUC, legales, contacto real) ya es parte del diseño. Un rediseño no debe romper las URLs legales ni inventar prueba social.

## 1. Top 100 — qué se repite, por categoría (qué sirve y qué no)

| Bloque (posiciones aprox.) | Ejemplos | Patrón de diseño transferible a CI365 |
|---|---|---|
| Buscadores (1, 9, 15, 18, 20, 42) | Google, Bing, Yandex, Baidu, Naver, DuckDuckGo | Una sola acción dominante, mucho aire, carga mínima. **Lección: un CTA, cero ruido.** |
| Video/social/comunidad (2-8, 10, 17, 21, 32, 46) | YouTube, Facebook, Instagram, X, Reddit, TikTok, LinkedIn, Discord | Contenido como protagonista, navegación persistente, modo oscuro nativo. **Poco transferible** (producto, no servicio). |
| IA (5, 12, 34, 81, 82) | ChatGPT, Gemini, Claude.ai, Perplexity, DeepSeek | Interfaz sobria, tipografía grande, un campo/acción central, tono neutro, modo oscuro. **Es la estética que hoy marca "tecnología seria".** |
| Referencia/medios (11, 45, 51-55, 85-89) | Wikipedia, BBC, NYT, CNN, Reuters | Jerarquía tipográfica estricta, legibilidad, densidad informativa ordenada. |
| E-commerce (16, 28, 47, 60-67, 93-98) | Amazon, eBay, Walmart, Temu, Mercado Libre | Búsqueda + filtros + confianza (reseñas, garantías, devoluciones). **Lo transferible: señales de confianza junto a la acción.** |
| Software/SaaS (23, 31, 36, 68, 70-73) | Microsoft, Canva, Zoom, Adobe, Salesforce, Office, Apple | Hero con valor en una frase + captura de producto + prueba social + CTA doble (probar / hablar). **El patrón más cercano a ti.** |
| Dev (48, 49, 91) | GitHub, StackOverflow | Código/terminal como imagen, credibilidad técnica sin marketing. |
| Streaming/gaming/viajes/finanzas (22, 57-59, 50, 78-80, 74) | Netflix, Spotify, Booking, PayPal | Confianza transaccional (PayPal), claridad de precio (Booking). |

**Cinco tendencias transversales del top 100 (aplican a CI365):**
1. **Modo oscuro de primera clase** (IA, dev, streaming). Ya lo tienes: mantenerlo.
2. **Un mensaje, una acción** en el primer pantallazo.
3. **Rendimiento como diseño**: las webs líderes cargan casi instantáneo; Astro te favorece.
4. **Señales de confianza pegadas al CTA** (logos, cifras, certificaciones, reseñas).
5. **Accesibilidad y multilenguaje sin fricción** (selector visible, contraste alto, teclado).

Lista completa de los 100 sitios y sus visitas: ver artículo fuente (enlace al final). No la copio entera aquí porque su orden es poco fiable.

## 2. Panel de 20 sitios de servicios de desarrollo de software

**Verificados directamente (estructura real de la home):**

| Sitio | Hero | Prueba social | Qué hacen bien | Qué evitar |
|---|---|---|---|---|
| **Thoughtworks** | "We don't just do AI / We do AI that works." + CTA "Explore AI/works" | Logos de partners (AWS, Azure, GCP, Databricks, Snowflake…), casos, informe CIO 2026, Great Place to Work | Copy corto y con personalidad; cierre con "Get in touch" | Sin menú extraíble en la home; mucho concepto de marca |
| **Endava** | "Technology is our how. And people are our why." | 25 años, logos monocromos (Bain, FNZ, Navy Federal), casos, 13 industrias | Una sección = un mensaje = un CTA; franja de contacto antes del footer; modo oscuro | 13 industrias es mucho para una consultora pequeña |
| **Netguru** | "AI-native commerce" (foco en un vertical) | NPS 73, 2.500+ proyectos, 400+ personas, 17+ años, 6 citas con foto y cargo; Clutch/Forbes/B Corp | **Cifras grandes**, citas con rostro, banda final oscura con "Estimate project" | Hero sin CTA propio |
| **Toptal** | "Hire the Top 3% of Freelance Talent®" | 35.000+ clientes, 4,9/5 (42.832 reseñas), 98% trial-to-hire, prensa | Selector "Busco: talento / consultoría"; 3 pasos numerados; promesa de prueba sin pago | No muestra precios; página larguísima |
| **SoftServe** | "Technology Elevated" + 3 tiles (IA, Cloud, Data) | Testimonios con logo y ejecutivo; niveles de partner (AWS Premier, NVIDIA Elite, GCP Premier, 20+ años con Microsoft) | **Insignias de partner explícitas y con nivel** | Imagen genérica de banco de fotos |
| **Accenture** | "Together We Reinvented." (sin CTA) | Casos (McDonald's, BMS…), Gartner, GPTW #4, feed de noticias fechadas | Mega-menú de 20 capacidades + 21 industrias | Es un portal corporativo; **no copiar** a esta escala |

**Por analizar en la fase 2 (no verificados aún; lo que sigue es conocimiento previo, no observación):** Globant, EPAM, Perficient, Slalom, DataArt, Grid Dynamics, Intellias, Cognizant, Infosys, TCS, Capgemini, Wipro, IBM Consulting, **Avanade** (la más parecida a tu nicho: Microsoft-first). Marcados para verificación con navegador, porque varios bloquean fetchers.

### Patrones comunes del panel (los 6 verificados)
- **H1 de 4–10 palabras** con postura, no descripción genérica.
- **Un único CTA primario repetido** ("Let's connect", "Get in touch", "Contact us"); formulario o HubSpot, no solo `mailto:`.
- **Prueba social en bloques**: logos monocromos → cifras → citas con nombre/cargo → casos.
- **Credenciales de partner visibles** y con nivel (SoftServe). Para ti: solo las que realmente tengas.
- **Estructura servicio → industria → casos → insights → carreras → contacto.**
- **Footer legal completo** (privacidad, términos, cookies, accesibilidad). Aquí **ya estás bien**.

## 3. Diagnóstico de la web actual de CI365 (leído del código, `HomePage.astro`)

**Fortalezas:** hero con panel de datos, tema semántico claro/oscuro, franja de tecnologías (profundo vs. amplio), 4 servicios con iconos, método en 3 pasos, trilingüe (ES/EN/PT), legal sólido, rendimiento (Astro).

**Brechas frente al benchmark:**
1. **Cero prueba social visible** (sin logos, cifras, casos, citas). Es la brecha nº 1 frente a los 6 sitios. *Restricción: no inventar nada; ver recomendación.*
2. **Contacto = `mailto:`** sin formulario ni selector de motivo. Los líderes bajan la fricción con formulario corto.
3. **Sin sección de casos de uso/resultados.** AGI/AGO es un caso real (aprobación de compras para minería), pero requiere permiso de Alpayana para nombrarlo.
4. **Sin señales de pertenencia a Microsoft** (si aplicara: Partner/verified publisher cuando se obtenga).
5. **Sin contenido de autoridad** (artículos, guías, plantillas Power BI/DAX).
6. **Hero con 3 mensajes compitiendo** (eyebrow + título + subtítulo + frase-principio + 2 CTA). Los referentes dejan 1–2.
7. **Sin precios/rangos/formato de engagement** (Toptal tampoco, pero sí explican el proceso en 3 pasos y el período de prueba).

## 4. Recomendaciones priorizadas

**Alta (impacto alto, bajo riesgo):**
1. Reducir el hero a: H1 de ≤10 palabras + 1 subtítulo + 1 CTA primario + 1 secundario. Mover la "frase principio" a la sección Nosotros.
2. Añadir banda de **cifras reales** (años de experiencia, tecnologías, proyectos entregados) — solo si son verificables.
3. Sustituir `mailto:` por **formulario corto** (nombre, empresa, necesidad en 4 opciones, mensaje) con alternativa de correo.
4. Sección **"Qué entregamos"** con 2–3 casos anonimizados ("Sistema de aprobación de compras para el sector minero") previa autorización del cliente.
5. Franja final de contacto oscura (patrón Endava/Netguru) antes del footer.

**Media:**
6. Selector tipo Toptal: "Necesito: analítica / automatización / desarrollo / Microsoft 365" que preseleccione el formulario.
7. Insignias de partner **solo cuando existan** (Partner Center, verified publisher).
8. Sección "Cómo trabajamos" con entregables y tiempos (reducir incertidumbre).
9. Blog/recursos con 3–5 guías (Power BI, DAX, Power Automate) para SEO y autoridad.

**Baja / futura:**
10. Prueba social con citas con foto y cargo (cuando haya autorizaciones).
11. Mega-menú: no. Tu oferta cabe en 4 servicios; mantener nav corto.

**No hacer:** logos de clientes sin permiso, cifras o insignias inventadas, ratings falsos, "Top 3%" sin respaldo, cambiar rutas legales (rompería los enlaces registrados en Microsoft).

## 5. Prompt final para enviar a otro chat

```
Actúa como director de diseño web y consultor senior de conversión B2B con experiencia
en consultoras de software. Te paso el contexto y quiero un REDISEÑO concreto, no ideas sueltas.

EMPRESA
Consultoría Integral 365 E.I.R.L. (CI365), Lima, Perú. Consultora pequeña, equipo reducido.
Servicios: analítica de datos (Power BI/DAX), automatización de procesos (Power Automate,
Python, RPA), desarrollo de software a medida, y soluciones sobre Microsoft 365.
Cliente de referencia (sin nombrar sin permiso): sistema de aprobación de compras para minería.
Idiomas: ES (raíz), EN (/en), PT (/pt). Dominio: consultoriaintegral365.com.

STACK
Astro + Tailwind, GitHub Pages, tema claro/oscuro con tokens semánticos (--ci-*).
El sitio también sirve como identidad de editor para Entra ID/Partner Center: NO cambiar las
URLs legales (/politica-de-privacidad, /terminos-de-servicio, /anexo-tratamiento-datos-agi-ago).

AUDIENCIA
Gerentes de TI, finanzas y operaciones en medianas empresas LATAM (minería, industria, servicios)
que necesitan resolver un problema de datos o procesos y evaluar si somos confiables.

OBJETIVOS
1) Que un visitante entienda en 5 segundos qué hacemos y para quién.
2) Generar consultas cualificadas (formulario corto).
3) Transmitir credibilidad sin inventar prueba social.

RESTRICCIONES (OBLIGATORIAS)
- Prohibido inventar clientes, logos, cifras, certificaciones, insignias Microsoft o reseñas.
  Si falta un dato, deja un marcador [POR CONFIRMAR].
- Mantener rendimiento (Lighthouse ≥ 95), accesibilidad AA y soporte de modo oscuro.
- Mantener ES/EN/PT.

BENCHMARK QUE DEBES USAR (hallazgos ya verificados)
- Hero corto con postura: Thoughtworks ("AI that works"), Endava (1 mensaje + 1 CTA por sección).
- Cifras grandes + citas con nombre y cargo: Netguru.
- Proceso en 3 pasos y selector "busco X": Toptal.
- Insignias de partner con nivel: SoftServe.
- Banda de contacto oscura antes del footer: Endava, Netguru.
- Del top 100 mundial: un mensaje, una acción, modo oscuro, rendimiento y señales de confianza
  junto al CTA.

ENTREGABLES
A) Arquitectura de información de la home (secciones en orden, objetivo y CTA de cada una).
B) Copy completo del hero y de cada sección en ES (con variantes EN y PT del hero).
C) Wireframe textual por sección (desktop y móvil).
D) Sistema visual: paleta con tokens claro/oscuro, tipografías (con fuente y licencia),
   escala tipográfica, espaciado, botones, tarjetas, iconografía.
E) Especificación del formulario de contacto (campos, validación, anti-spam, a dónde llega).
F) Lista de pruebas sociales que necesitamos conseguir, con plantilla para pedir autorización.
G) Plan de implementación por fases en Astro (archivos a tocar, orden, riesgos).
H) Checklist de QA (rendimiento, accesibilidad, SEO, i18n, enlaces legales intactos).

FORMATO
Español. Tablas donde convenga. Para cada decisión de diseño, indica en una línea
el sitio del benchmark que la respalda y por qué aplica a una consultora pequeña.
Antes de empezar, hazme las preguntas que bloqueen el diseño (máx. 5).
```

## Fuentes
- [WsCube Tech — Top 100 Most Visited Websites (Similarweb, jun-2026)](https://www.wscubetech.com/blog/most-visited-websites/)
- [Statista vía The Star — sitios más populares, mayo 2026](https://the-star.co.ke/news/infographics/2026-07-22-most-popular-websites-worldwide-as-of-may-2026)
- [Semrush — Thoughtworks](https://de.semrush.com/website/thoughtworks.com/overview) · [Semrush — Globant](https://nl.semrush.com/website/globant.com/overview)
- Homes visitadas el 2026-10-08: thoughtworks.com, endava.com, toptal.com, netguru.com, softserveinc.com, accenture.com/us-en
