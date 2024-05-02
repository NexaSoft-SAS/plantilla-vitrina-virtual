/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_xBftOPcq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_Gc9TFN7o.mjs';

const $$Astro = createAstro("https://nexasoft.github.io");
const $$Landing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Landing;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Landing Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeaderLanding", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/landing/header", "client:component-export": "default" })} ${renderComponent($$result2, "CategoriesSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/landing/categories", "client:component-export": "default" })} ${renderComponent($$result2, "ContentSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/landing/content", "client:component-export": "default" })} ${renderComponent($$result2, "BasicSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/landing/starterPack", "client:component-export": "default" })} ${renderComponent($$result2, "TestimonialSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/landing/testimonials", "client:component-export": "default" })} ${renderComponent($$result2, "FooterSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/landing/footer", "client:component-export": "default" })} </main> ` })}`;
}, "/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/landing.astro", void 0);

const $$file = "/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/landing.astro";
const $$url = "/astro-showcase/landing";

export { $$Landing as default, $$file as file, $$url as url };
