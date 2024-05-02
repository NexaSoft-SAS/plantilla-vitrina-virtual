/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, g as addAttribute, h as renderComponent, m as maybeRenderHead } from '../astro_xBftOPcq.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://nexasoft.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, metaDescription } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/astro-showcase/favicon.svg"><link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Noto+Sans:300,400,500,600,700,800|PT+Mono:300,400,500,600,700" rel="stylesheet"><title>', '</title><meta name="description"', '><meta name="generator"', '><link rel="canonical" href="https://www.creative-tim.com/astro/"><!-- Google Tag Manager --><!-- <script>\n      (function (w, d, s, l, i) {\n        w[l] = w[l] || [];\n        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });\n        var f = d.getElementsByTagName(s)[0],\n          j = d.createElement(s),\n          dl = l != "dataLayer" ? "&l=" + l : "";\n        j.async = true;\n        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;\n        f.parentNode.insertBefore(j, f);\n      })(window, document, "script", "dataLayer", "GTM-NKDMSK6");\n    <\/script> --><!-- End Google Tag Manager -->', '</head> <body class="overflow-x-hidden"> <!-- Google Tag Manager (noscript) --> <!-- <noscript>\n      <iframe\n        src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6"\n        height="0"\n        width="0"\n        style="display:none;visibility:hidden">\n      </iframe>\n    </noscript> --> <!-- End Google Tag Manager (noscript) --> ', ' <script src="https://kit.fontawesome.com/349ee9c857.js" crossOrigin="anonymous"><\/script> <!-- Bootstrap JavaScript Bundle with Popper --> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"><\/script> <!-- Product JavaScript -->  </body> </html>'])), title, addAttribute(metaDescription, "content"), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://nexasoft.github.io");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Error Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Content404", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/404/content", "client:component-export": "default" })} </main> ` })}`;
}, "/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/404.astro", void 0);

const $$file = "/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/404.astro";
const $$url = "/astro-showcase/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
