#!/usr/bin/env node
/**
 * Auditoría de consistencia de diseño (estática, sin navegador).
 *
 * Cuenta lo que se aparta del sistema de diseño (docs/SISTEMA-DE-DISENO.md):
 * tamaños de letra y radios escritos a mano, colores sueltos, etiquetas en
 * mayúsculas o monoespaciadas, flechas y acentos en cursiva.
 *
 *   node scripts/audit-design.mjs            compara con la línea base: falla si EMPEORA
 *   node scripts/audit-design.mjs --strict   falla si hay cualquier desvío (meta de V4)
 *   node scripts/audit-design.mjs --update   guarda el recuento actual como nueva línea base
 *   node scripts/audit-design.mjs --list     muestra cada hallazgo con archivo y línea
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(import.meta.url), '..', '..');
const baselineFile = join(root, 'scripts', 'audit-design.baseline.json');
const args = new Set(process.argv.slice(2));

/* Archivos donde SÍ se definen los valores del sistema o hay un objeto de marca
   (el logotipo y el recibo del MVP tienen colores propios por diseño). */
const allow = {
  hex: ['src/styles/global.css', 'src/styles/tech.css', 'src/components/Logo.astro', 'src/layouts/Base.astro'], // Base: <meta theme-color> exige el valor literal
  tamano: ['src/components/Logo.astro'], // el eslogan del logotipo es parte de la marca
  definiciones: ['src/styles/global.css', 'src/styles/tech.css'], // aquí se DEFINEN las clases; se cuentan sus usos
};

const rules = [
  { id: 'tamano-arbitrario', texto: 'Tamaños de letra escritos a mano (text-[…])', re: /\btext-\[[\d.]+(?:rem|px|em)\]/g, files: ['.astro'], skip: allow.tamano },
  { id: 'radio-arbitrario', texto: 'Radios escritos a mano (rounded-[…])', re: /\brounded-\[[^\]]+\]/g, files: ['.astro'] },
  { id: 'color-suelto', texto: 'Colores hexadecimales fuera de global.css y el logotipo', re: /#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b(?![0-9a-fA-F])/g, files: ['.astro'], skip: allow.hex, ignoreLine: /href=|&#|id=|url\(#|#(?:main|top|sistema|camino|servicios|mvp|metodo|nosotros|contacto|[a-z-]+)\b[^0-9a-fA-F]/ },
  { id: 'mayusculas', texto: 'Texto en mayúsculas (uppercase)', re: /\buppercase\b|text-transform:\s*uppercase/g, files: ['.astro', '.css'], skip: allow.definiciones },
  { id: 'monoespaciada', texto: 'Texto monoespaciado (font-mono, .mono-label, .eyebrow)', re: /\bfont-mono\b|\bmono-label\b|(?<![.\w])eyebrow\b/g, files: ['.astro', '.css'], skip: allow.definiciones },
  { id: 'flechas', texto: 'Flechas en la interfaz (→ ↗ ↓ ←)', re: /[→↗↓←]|&rarr;|&nearr;/g, files: ['.astro'] },
  { id: 'acento-cursiva', texto: 'Acento en cursiva serif (.accent, font-serif)', re: /(?<![\w-])accent(?![\w-])|\bfont-serif\b/g, files: ['.astro'] },
];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = walk(join(root, 'src')).filter((p) => ['.astro', '.css'].includes(extname(p)));
const found = Object.fromEntries(rules.map((r) => [r.id, []]));

for (const file of files) {
  const rel = relative(root, file).split(sep).join('/');
  const lines = readFileSync(file, 'utf8').split(/\r?\n/);
  for (const r of rules) {
    if (!r.files.includes(extname(file))) continue;
    if (r.skip?.includes(rel)) continue;
    lines.forEach((line, i) => {
      if (line.includes('audit-ok')) return; // excepción declarada en el propio código
      if (r.ignoreLine?.test(line) && !/#[0-9a-fA-F]{6}\b/.test(line)) return;
      const m = line.match(r.re);
      if (m) found[r.id].push(...m.map((x) => ({ rel, line: i + 1, text: x })));
    });
  }
}

const counts = Object.fromEntries(Object.entries(found).map(([k, v]) => [k, v.length]));

if (args.has('--list')) {
  for (const r of rules) {
    console.log(`\n# ${r.texto} (${counts[r.id]})`);
    for (const h of found[r.id]) console.log(`  ${h.rel}:${h.line}  ${h.text}`);
  }
}

if (args.has('--update')) {
  writeFileSync(baselineFile, JSON.stringify(counts, null, 2) + '\n');
  console.log('Línea base guardada:', counts);
  process.exit(0);
}

const baseline = existsSync(baselineFile) ? JSON.parse(readFileSync(baselineFile, 'utf8')) : null;
let worse = 0;
console.log('\nAuditoría de diseño — desvíos del sistema\n');
for (const r of rules) {
  const now = counts[r.id];
  const base = baseline?.[r.id];
  const delta = base === undefined ? '' : now > base ? `  ▲ empeora (+${now - base})` : now < base ? `  ▼ mejora (${now - base})` : '  = igual';
  if (base !== undefined && now > base) worse++;
  console.log(`${String(now).padStart(4)}  ${r.texto}${delta}`);
}
const total = Object.values(counts).reduce((a, b) => a + b, 0);
console.log(`\nTotal: ${total}${baseline ? ` (línea base: ${Object.values(baseline).reduce((a, b) => a + b, 0)})` : ''}`);

if (args.has('--strict')) {
  if (total > 0) { console.error('\nFALLA (--strict): hay desvíos del sistema de diseño.'); process.exit(1); }
} else if (worse > 0) {
  console.error('\nFALLA: algún desvío empeoró respecto de la línea base. Corrígelo, o usa --update si es intencional y está aprobado.');
  process.exit(1);
}
console.log('OK');
