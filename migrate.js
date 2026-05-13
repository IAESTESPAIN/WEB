const fs = require("fs");
const path = require("path");

const pages = [
  // Spanish pages
  { src: "index.html", dest: "src/es/index.njk", title: "IAESTE – Work. Experience. Discover.", lang: "es", nav: "inicio", bodyClass: "home wp-singular page-template-default page page-id-10 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-es_ES ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-theme-transparent-header ast-hfb-header ast-full-width-primary-header" },
  { src: "sobre-iaeste/index.html", dest: "src/es/sobre-iaeste/index.njk", title: "Sobre IAESTE", lang: "es", nav: "sobre-iaeste", bodyClass: "wp-singular page-template-default page page-id-2 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-es_ES ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "mision-y-valores/index.html", dest: "src/es/mision-y-valores/index.njk", title: "Misión y valores", lang: "es", nav: "mision-y-valores", bodyClass: "wp-singular page-template-default page page-id-142 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-es_ES ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "estudiantes/index.html", dest: "src/es/estudiantes/index.njk", title: "Estudiantes", lang: "es", nav: "estudiantes", bodyClass: "wp-singular page-template-default page page-id-60 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-es_ES ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "experiencias/index.html", dest: "src/es/experiencias/index.njk", title: "Experiencias", lang: "es", nav: "experiencias", bodyClass: "wp-singular page-template-default page page-id-62 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-es_ES ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "ventajas/index.html", dest: "src/es/ventajas/index.njk", title: "Ventajas", lang: "es", nav: "ventajas", bodyClass: "wp-singular page-template-default page page-id-64 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-es_ES ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "empresas/index.html", dest: "src/es/empresas/index.njk", title: "Empresas", lang: "es", nav: "empresas", bodyClass: "wp-singular page-template-default page page-id-68 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-es_ES ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "entidades-patrocinadoras/index.html", dest: "src/es/entidades-patrocinadoras/index.njk", title: "Entidades patrocinadoras", lang: "es", nav: "entidades-patrocinadoras", bodyClass: "wp-singular page-template-default page page-id-70 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-es_ES ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "universidades/index.html", dest: "src/es/universidades/index.njk", title: "Universidades", lang: "es", nav: "universidades", bodyClass: "wp-singular page-template-default page page-id-83 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-es_ES ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "unete-a-iaeste/index.html", dest: "src/es/unete-a-iaeste/index.njk", title: "Únete a IAESTE", lang: "es", nav: "unete-a-iaeste", bodyClass: "wp-singular page-template-default page page-id-85 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-es_ES ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "union-entre-universidades-y-extranjero/index.html", dest: "src/es/union-entre-universidades-y-extranjero/index.njk", title: "Unión entre universidades y extranjero", lang: "es", nav: "union-entre-universidades-y-extranjero", bodyClass: "wp-singular page-template-default page page-id-87 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-es_ES ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "contacto/index.html", dest: "src/es/contacto/index.njk", title: "Contacto", lang: "es", nav: "contacto", bodyClass: "wp-singular page-template-default page page-id-89 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-es_ES ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "faq/index.html", dest: "src/es/faq/index.njk", title: "FAQ", lang: "es", nav: "faq", bodyClass: "wp-singular page-template-default page page-id-91 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-es_ES ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "sus-datos-seguros/index.html", dest: "src/es/sus-datos-seguros/index.njk", title: "Sus datos seguros", lang: "es", nav: "", bodyClass: "wp-singular page-template-default page page-id-3 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-es_ES ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "politica-de-proteccion-de-datos/index.html", dest: "src/es/politica-de-proteccion-de-datos/index.njk", title: "Política de protección de datos", lang: "es", nav: "", bodyClass: "wp-singular page-template-default page page-id-3 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-es_ES ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "politica-de-cookies/index.html", dest: "src/es/politica-de-cookies/index.njk", title: "Política de cookies", lang: "es", nav: "", bodyClass: "wp-singular page-template-default page page-id-3 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-es_ES ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  // English pages
  { src: "en/index.html", dest: "src/en/index.njk", title: "IAESTE – Work. Experience. Discover.", lang: "en", nav: "home", bodyClass: "home wp-singular page-template-default page page-id-10 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-en_US ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-theme-transparent-header ast-hfb-header ast-full-width-primary-header" },
  { src: "en/sobre-iaeste/index.html", dest: "src/en/sobre-iaeste/index.njk", title: "About IAESTE", lang: "en", nav: "sobre-iaeste", bodyClass: "wp-singular page-template-default page page-id-2 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-en_US ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "en/mision-y-valores/index.html", dest: "src/en/mision-y-valores/index.njk", title: "Mission and values", lang: "en", nav: "mision-y-valores", bodyClass: "wp-singular page-template-default page page-id-142 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-en_US ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "en/estudiantes/index.html", dest: "src/en/estudiantes/index.njk", title: "Students", lang: "en", nav: "estudiantes", bodyClass: "wp-singular page-template-default page page-id-60 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-en_US ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "en/experiencias/index.html", dest: "src/en/experiencias/index.njk", title: "Experiences", lang: "en", nav: "experiencias", bodyClass: "wp-singular page-template-default page page-id-62 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-en_US ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "en/ventajas/index.html", dest: "src/en/ventajas/index.njk", title: "Advantages", lang: "en", nav: "ventajas", bodyClass: "wp-singular page-template-default page page-id-64 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-en_US ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "en/empresas/index.html", dest: "src/en/empresas/index.njk", title: "Companies", lang: "en", nav: "empresas", bodyClass: "wp-singular page-template-default page page-id-68 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-en_US ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "en/entidades-patrocinadoras/index.html", dest: "src/en/entidades-patrocinadoras/index.njk", title: "Sponsoring entities", lang: "en", nav: "entidades-patrocinadoras", bodyClass: "wp-singular page-template-default page page-id-70 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-en_US ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "en/universidades/index.html", dest: "src/en/universidades/index.njk", title: "Universities", lang: "en", nav: "universidades", bodyClass: "wp-singular page-template-default page page-id-83 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-en_US ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "en/unete-a-iaeste/index.html", dest: "src/en/unete-a-iaeste/index.njk", title: "Join IAESTE", lang: "en", nav: "unete-a-iaeste", bodyClass: "wp-singular page-template-default page page-id-85 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-en_US ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "en/union-entre-universidades-y-extranjero/index.html", dest: "src/en/union-entre-universidades-y-extranjero/index.njk", title: "Bridge between universities and abroad", lang: "en", nav: "union-entre-universidades-y-extranjero", bodyClass: "wp-singular page-template-default page page-id-87 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-en_US ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "en/contacto/index.html", dest: "src/en/contacto/index.njk", title: "Contact", lang: "en", nav: "contacto", bodyClass: "wp-singular page-template-default page page-id-89 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-en_US ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "en/faq/index.html", dest: "src/en/faq/index.njk", title: "FAQ", lang: "en", nav: "faq", bodyClass: "wp-singular page-template-default page page-id-91 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-en_US ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "en/sus-datos-seguros/index.html", dest: "src/en/sus-datos-seguros/index.njk", title: "Your data secure", lang: "en", nav: "", bodyClass: "wp-singular page-template-default page page-id-3 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-en_US ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "en/politica-de-proteccion-de-datos/index.html", dest: "src/en/politica-de-proteccion-de-datos/index.njk", title: "Data protection policy", lang: "en", nav: "", bodyClass: "wp-singular page-template-default page page-id-3 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-en_US ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
  { src: "en/politica-de-cookies/index.html", dest: "src/en/politica-de-cookies/index.njk", title: "Cookie policy", lang: "en", nav: "", bodyClass: "wp-singular page-template-default page page-id-3 wp-custom-logo wp-embed-responsive wp-theme-astra translatepress-en_US ast-desktop ast-plain-container ast-no-sidebar astra-4.13.1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-full-width-primary-header" },
];

function extractEntryContent(html, srcPath) {
  const startMarker = '<div class="entry-content clear"';
  const endMarker = '</article>';
  const startIdx = html.indexOf(startMarker);
  if (startIdx === -1) {
    console.error(`  [ERROR] No entry-content start found in ${srcPath}`);
    return null;
  }
  const contentStart = html.indexOf(">", startIdx) + 1;
  const endIdx = html.indexOf(endMarker, contentStart);
  if (endIdx === -1) {
    console.error(`  [ERROR] No </article> found in ${srcPath}`);
    return null;
  }
  return html.slice(contentStart, endIdx).trim();
}

function extractInlineStyles(html) {
  const startMarker = '<style id="core-block-supports-inline-css">';
  const endMarker = "</style>";
  const startIdx = html.indexOf(startMarker);
  if (startIdx === -1) return "";
  const contentStart = startIdx + startMarker.length;
  const endIdx = html.indexOf(endMarker, contentStart);
  if (endIdx === -1) return "";
  return html.slice(contentStart, endIdx).trim();
}

function fixImagePaths(content) {
  return content
    .replace(/\.\/wp-content\/uploads\//g, "/assets/images/")
    .replace(/\.\.\/wp-content\/uploads\//g, "/assets/images/")
    .replace(/\.\/\.\.\/wp-content\/uploads\//g, "/assets/images/");
}

function makePermalink(src) {
  if (src === "index.html") return "/index.html";
  if (src === "en/index.html") return "/en/index.html";
  if (src.startsWith("en/")) {
    const folder = src.replace("en/", "").replace("/index.html", "");
    return `/en/${folder}/index.html`;
  }
  const folder = src.replace("/index.html", "");
  return `/${folder}/index.html`;
}

for (const p of pages) {
  const srcFull = path.join(__dirname, p.src);
  if (!fs.existsSync(srcFull)) {
    console.error(`  [SKIP] ${srcFull} not found`);
    continue;
  }
  const html = fs.readFileSync(srcFull, "utf8");
  let content = extractEntryContent(html, p.src);
  if (!content) continue;

  content = fixImagePaths(content);

  const inlineStyles = extractInlineStyles(html);
  const destDir = path.dirname(path.join(__dirname, p.dest));
  fs.mkdirSync(destDir, { recursive: true });

  // Remove existing files that were manually created
  if (p.src === "index.html" || p.src === "en/index.html") {
    console.log(`  [SKIP] ${p.dest} already manually created`);
    continue;
  }

  const frontMatter = [
    "---",
    `layout: layouts/base.njk`,
    `title: "${p.title}"`,
    `lang: ${p.lang}`,
    p.nav ? `activeNav: "${p.nav}"` : '',
    `bodyClasses: "${p.bodyClass}"`,
    inlineStyles ? `pageInlineStyles: "${inlineStyles.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ')}"` : '',
    `permalink: "${makePermalink(p.src)}"`,
    "---",
    "",
    '<div class="entry-content clear" data-ast-blocks-layout="true" itemprop="text">',
    content,
    "</div>",
  ].filter(line => line !== '').join("\n");

  fs.writeFileSync(path.join(__dirname, p.dest), frontMatter);
  console.log(`  [OK] ${p.dest}`);
}

console.log("\nDone!");
