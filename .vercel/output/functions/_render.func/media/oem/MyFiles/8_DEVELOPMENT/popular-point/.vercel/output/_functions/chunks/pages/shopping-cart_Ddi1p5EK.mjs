/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_xBftOPcq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_Gc9TFN7o.mjs';

const $$Astro = createAstro("https://nexasoft.github.io");
const $$ShoppingCart = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ShoppingCart;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Carro de la compras" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Shoppings", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/shoppings", "client:component-export": "default" })} </main> ` })}`;
}, "/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/shopping-cart.astro", void 0);

const $$file = "/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/shopping-cart.astro";
const $$url = "/astro-showcase/shopping-cart";

export { $$ShoppingCart as default, $$file as file, $$url as url };
