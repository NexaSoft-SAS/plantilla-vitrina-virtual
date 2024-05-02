/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_xBftOPcq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_Gc9TFN7o.mjs';

const $$Astro = createAstro("https://nexasoft.github.io");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Acerca de nosotros p\xE1gina" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeaderAbout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/about/header", "client:component-export": "default" })} ${renderComponent($$result2, "FeaturesAbout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/about/features", "client:component-export": "default" })} ${renderComponent($$result2, "TestimonialAbout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/about/testimonials", "client:component-export": "default" })} ${renderComponent($$result2, "TeamAbout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/about/team", "client:component-export": "default" })} ${renderComponent($$result2, "FooterAbout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/about/footer", "client:component-export": "default" })} </main> ` })}`;
}, "/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/about.astro", void 0);

const $$file = "/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/about.astro";
const $$url = "/astro-showcase/about";

export { $$About as default, $$file as file, $$url as url };
