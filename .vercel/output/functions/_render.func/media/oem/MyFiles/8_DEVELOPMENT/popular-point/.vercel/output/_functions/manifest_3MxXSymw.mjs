import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_ezFdQpf3.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"all-components/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/all-components","isIndex":false,"type":"page","pattern":"^\\/all-components\\/?$","segments":[[{"content":"all-components","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/all-components.astro","pathname":"/all-components","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"landing/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/landing","isIndex":false,"type":"page","pattern":"^\\/landing\\/?$","segments":[[{"content":"landing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing.astro","pathname":"/landing","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"login/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"product/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/product","isIndex":false,"type":"page","pattern":"^\\/product\\/?$","segments":[[{"content":"product","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/product.astro","pathname":"/product","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"shopping-cart/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/shopping-cart","isIndex":false,"type":"page","pattern":"^\\/shopping-cart\\/?$","segments":[[{"content":"shopping-cart","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/shopping-cart.astro","pathname":"/shopping-cart","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"signup/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/signup","isIndex":false,"type":"page","pattern":"^\\/signup\\/?$","segments":[[{"content":"signup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signup.astro","pathname":"/signup","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"store/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/store","isIndex":false,"type":"page","pattern":"^\\/store\\/?$","segments":[[{"content":"store","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/store.astro","pathname":"/store","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/astro-showcase/_astro/page.BG5lM7_G.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.7.1_sass@1.76.0_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://nexasoft.github.io","base":"/astro-showcase","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/all-components.astro",{"propagation":"none","containsHead":true}],["/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/landing.astro",{"propagation":"none","containsHead":true}],["/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/login.astro",{"propagation":"none","containsHead":true}],["/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/product.astro",{"propagation":"none","containsHead":true}],["/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/shopping-cart.astro",{"propagation":"none","containsHead":true}],["/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/signup.astro",{"propagation":"none","containsHead":true}],["/media/oem/MyFiles/8_DEVELOPMENT/popular-point/src/pages/store.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/.pnpm/astro@4.7.1_sass@1.76.0_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_GXRefN3i.mjs","\u0000@astrojs-manifest":"manifest_3MxXSymw.mjs","/media/oem/MyFiles/8_DEVELOPMENT/popular-point/node_modules/.pnpm/@astrojs+react@3.3.2_@types+react-dom@18.3.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3._aphe34liprwgdyo5wk4ayaompe/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.7.1_sass@1.76.0_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_Clvavcou.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_oXlCoUlo.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_qbT0vziU.mjs","\u0000@astro-page:src/pages/all-components@_@astro":"chunks/all-components_DLsnOhKg.mjs","\u0000@astro-page:src/pages/landing@_@astro":"chunks/landing_DXip9AvI.mjs","\u0000@astro-page:src/pages/login@_@astro":"chunks/login_9tlpusfw.mjs","\u0000@astro-page:src/pages/product@_@astro":"chunks/product_D5vC2WzT.mjs","\u0000@astro-page:src/pages/shopping-cart@_@astro":"chunks/shopping-cart_DrCjD15R.mjs","\u0000@astro-page:src/pages/signup@_@astro":"chunks/signup_B6bzoW8E.mjs","\u0000@astro-page:src/pages/store@_@astro":"chunks/store_DbZOUvvD.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Cz-HzUYJ.mjs","@/components/presentation/logos.tsx":"_astro/logos.DLo3fIYm.js","@/components/landing/categories":"_astro/categories.CruxGUZS.js","@/components/presentation/pagesFree.tsx":"_astro/pagesFree.DBwRWbX_.js","@/components/about/team":"_astro/team.DJ8OzRfo.js","@/components/about/testimonials":"_astro/testimonials.D_hhO_1r.js","@/components/about/header":"_astro/header.BfbYMS1C.js","@/components/presentation/developerFree.tsx":"_astro/developerFree.Bprpo-oH.js","@/components/landing/content":"_astro/content.oUE8zNsD.js","@/components/about/footer":"_astro/footer.DVM8T7VQ.js","@/components/shoppings":"_astro/shoppings.ClgHWYx9.js","@/components/products/productOverview":"_astro/productOverview.D8nToQS9.js","astro:scripts/page.js":"_astro/page.BG5lM7_G.js","@/components/signin":"_astro/signin.DLTHzGAP.js","@/components/landing/footer":"_astro/footer.jZmkQFUR.js","@/components/presentation/header.tsx":"_astro/header.B_84JoJ-.js","@/components/landing/header":"_astro/header.BK4QHzIu.js","@/components/landing/starterPack":"_astro/starterPack.mHEWxaHm.js","@/components/store/storeShowcase":"_astro/storeShowcase.Pe9hC8SW.js","@/components/presentation/palette.tsx":"_astro/palette.D30cFWqB.js","@/components/404/content":"_astro/content.DxWY1hOd.js","@/components/signup":"_astro/signup.ByF4ry-q.js","@/components/presentation/feature.tsx":"_astro/feature.DlG7UoyH.js","@/components/about/features":"_astro/features.BNNy5002.js","@/components/presentation/code.tsx":"_astro/code.DCipjb47.js","@/components/presentation/astro.tsx":"_astro/astro.4YXPEljc.js","@/components/presentation/github.tsx":"_astro/github.us_qZ4cV.js","@/components/landing/testimonials":"_astro/testimonials.BKo9ikGm.js","@/components/presentation/freeToPro.tsx":"_astro/freeToPro.BPhjLkjJ.js","@/components/presentation/footerFree.tsx":"_astro/footerFree.DsGgZaza.js","@/components/presentation/pricing.tsx":"_astro/pricing.D4yBi4YB.js","/astro/hoisted.js?q=0":"_astro/hoisted.h4hf5ScJ.js","@astrojs/react/client.js":"_astro/client.CPJ6xLZI.js","@/components/navbar":"_astro/navbar.BpMyGRWM.js","@/components/storeOverview":"_astro/storeOverview.7_P4cxWe.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/astro-showcase/_astro/about.Mgj3uvji.css","/astro-showcase/_astro/product.ps_tUVvK.css","/astro-showcase/404.jpg","/astro-showcase/aboutus.jpg","/astro-showcase/astro.png","/astro-showcase/bg-billing.jpg","/astro-showcase/billing-page.jpg","/astro-showcase/blocks.png","/astro-showcase/blog1.jpg","/astro-showcase/blog2.jpg","/astro-showcase/blog3.jpg","/astro-showcase/blog4.jpg","/astro-showcase/blog5.jpg","/astro-showcase/blog6.jpg","/astro-showcase/checkout.jpg","/astro-showcase/code.png","/astro-showcase/components.png","/astro-showcase/consistenly.png","/astro-showcase/content1.jpg","/astro-showcase/dashboard-page.jpg","/astro-showcase/data.json","/astro-showcase/down-arrow-dark.svg","/astro-showcase/down-arrow.svg","/astro-showcase/error-500.png","/astro-showcase/favicon.png","/astro-showcase/favicon.svg","/astro-showcase/features1.jpg","/astro-showcase/features2.jpg","/astro-showcase/features3.jpg","/astro-showcase/features4.jpg","/astro-showcase/github.png","/astro-showcase/header-blue-purple.jpg","/astro-showcase/header.png","/astro-showcase/icon1.png","/astro-showcase/icon2.png","/astro-showcase/icon3.png","/astro-showcase/image-devs.png","/astro-showcase/landing-page.jpg","/astro-showcase/logo-ct-dark.png","/astro-showcase/palette.png","/astro-showcase/signin.jpg","/astro-showcase/store-bg.jpg","/astro-showcase/stores-bg.jpg","/astro-showcase/volant-unsplash.jpg","/astro-showcase/_astro/astro.4YXPEljc.js","/astro-showcase/_astro/cardProduct.D-8TvOTb.js","/astro-showcase/_astro/categories.CruxGUZS.js","/astro-showcase/_astro/client.CPJ6xLZI.js","/astro-showcase/_astro/code.DCipjb47.js","/astro-showcase/_astro/content.DxWY1hOd.js","/astro-showcase/_astro/content.oUE8zNsD.js","/astro-showcase/_astro/data.DotMYp5L.js","/astro-showcase/_astro/defaultNavbar.BvO9MoMB.js","/astro-showcase/_astro/developerFree.Bprpo-oH.js","/astro-showcase/_astro/feature.DlG7UoyH.js","/astro-showcase/_astro/features.BNNy5002.js","/astro-showcase/_astro/footer.DVM8T7VQ.js","/astro-showcase/_astro/footer.jZmkQFUR.js","/astro-showcase/_astro/footerFree.DsGgZaza.js","/astro-showcase/_astro/freeToPro.BPhjLkjJ.js","/astro-showcase/_astro/github.us_qZ4cV.js","/astro-showcase/_astro/header.BK4QHzIu.js","/astro-showcase/_astro/header.B_84JoJ-.js","/astro-showcase/_astro/header.BfbYMS1C.js","/astro-showcase/_astro/hoisted.h4hf5ScJ.js","/astro-showcase/_astro/index.BSloTDlv.js","/astro-showcase/_astro/index.CaMdTeyJ.js","/astro-showcase/_astro/index.CqGi9CFt.js","/astro-showcase/_astro/jsx-runtime.TnhE-556.js","/astro-showcase/_astro/logos.DLo3fIYm.js","/astro-showcase/_astro/navbar.BpMyGRWM.js","/astro-showcase/_astro/page.BG5lM7_G.js","/astro-showcase/_astro/pagesFree.DBwRWbX_.js","/astro-showcase/_astro/palette.D30cFWqB.js","/astro-showcase/_astro/pricing.D4yBi4YB.js","/astro-showcase/_astro/productOverview.D8nToQS9.js","/astro-showcase/_astro/profileMenu.q-Xjc7_1.js","/astro-showcase/_astro/promoSectionLarge.BgtKNJFw.js","/astro-showcase/_astro/reviewRating.BzNa9hof.js","/astro-showcase/_astro/reviewSummaryChart.BDNogJ1t.js","/astro-showcase/_astro/shoppingCart.Qk-aINGs.js","/astro-showcase/_astro/shoppings.ClgHWYx9.js","/astro-showcase/_astro/signin.DLTHzGAP.js","/astro-showcase/_astro/signup.ByF4ry-q.js","/astro-showcase/_astro/starterPack.mHEWxaHm.js","/astro-showcase/_astro/storeOverview.7_P4cxWe.js","/astro-showcase/_astro/storeShowcase.Pe9hC8SW.js","/astro-showcase/_astro/team.DJ8OzRfo.js","/astro-showcase/_astro/testimonials.BKo9ikGm.js","/astro-showcase/_astro/testimonials.D_hhO_1r.js","/astro-showcase/_astro/theme-provider.DCpQN3nm.js","/astro-showcase/avatars/avatar1.jpg","/astro-showcase/avatars/avatar2.jpg","/astro-showcase/avatars/avatar3.jpg","/astro-showcase/avatars/avatar4.jpg","/astro-showcase/avatars/avatar5.jpg","/astro-showcase/avatars/avatar6.jpg","/astro-showcase/logo/logo-spotify.svg","/astro-showcase/images/bg1.jpg","/astro-showcase/images/bg2.jpg","/astro-showcase/images/category1.jpg","/astro-showcase/images/category2.jpg","/astro-showcase/images/category3.jpg","/astro-showcase/images/category4.jpg","/astro-showcase/images/category5.jpg","/astro-showcase/images/mirror.png","/astro-showcase/images/product1.jpg","/astro-showcase/images/product10.jpg","/astro-showcase/images/product11.jpg","/astro-showcase/images/product12.jpg","/astro-showcase/images/product13.jpg","/astro-showcase/images/product2.jpg","/astro-showcase/images/product3.jpg","/astro-showcase/images/product4.jpg","/astro-showcase/images/product5.jpg","/astro-showcase/images/product6.jpg","/astro-showcase/images/product7.jpg","/astro-showcase/images/product8.jpg","/astro-showcase/images/product9.jpg","/astro-showcase/images/suit-1.jpg","/astro-showcase/images/suit-2.jpg","/astro-showcase/images/suit-3.jpg","/astro-showcase/images/suit-4.jpg","/astro-showcase/images/suit-5.jpg","/astro-showcase/images/suit-6.jpg","/astro-showcase/images/team-1.jpg","/astro-showcase/images/team-2.jpg","/astro-showcase/logos/logo-amazon-old.svg","/astro-showcase/logos/logo-amazons.svg","/astro-showcase/logos/logo-android.svg","/astro-showcase/logos/logo-apple.png","/astro-showcase/logos/logo-cisco.svg","/astro-showcase/logos/logo-coinbase.svg","/astro-showcase/logos/logo-facebook.png","/astro-showcase/logos/logo-google-play.svg","/astro-showcase/logos/logo-google.png","/astro-showcase/logos/logo-google.svg","/astro-showcase/logos/logo-ibm.svg","/astro-showcase/logos/logo-ios.svg","/astro-showcase/logos/logo-microsoft.svg","/astro-showcase/logos/logo-netflix.svg","/astro-showcase/logos/logo-pinterest.svg","/astro-showcase/logos/logo-salesforce.svg","/astro-showcase/logos/logo-spotify.svg","/astro-showcase/logos/logo-united-nations.svg","/astro-showcase/logos/logo-vodafone.svg","/astro-showcase/_astro/page.BG5lM7_G.js","/astro-showcase/404.html","/astro-showcase/about/index.html","/astro-showcase/all-components/index.html","/astro-showcase/landing/index.html","/astro-showcase/login/index.html","/astro-showcase/product/index.html","/astro-showcase/shopping-cart/index.html","/astro-showcase/signup/index.html","/astro-showcase/store/index.html","/astro-showcase/index.html"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
