/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_xBftOPcq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_Gc9TFN7o.mjs';
/* empty css                            */

const $$Astro = createAstro("https://nexasoft.github.io");
const $$Product = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Product;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "P\xE1gina del producto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Navbar", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/navbar", "client:component-export": "default" })} ${renderComponent($$result2, "ProductOverview", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/products/productOverview", "client:component-export": "default" })} </main> ` })}`;
}, "/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/product.astro", void 0);

const $$file = "/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/product.astro";
const $$url = "/astro-showcase/product";

export { $$Product as default, $$file as file, $$url as url };
