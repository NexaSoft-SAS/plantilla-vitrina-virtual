import{j as e}from"./jsx-runtime.TnhE-556.js";function o(a){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"row mt-5",children:[e.jsxs("div",{className:"col-12 col-lg-6 mb-4 mb-lg-0",children:[a?e.jsx("h6",{className:"w-100 pb-3 border-bottom",children:" Tienda "}):e.jsxs("h6",{className:"w-100 pb-3 border-bottom",children:[" ",a," "]}),e.jsxs("div",{className:"d-flex pt-2",children:[e.jsxs("ul",{className:"nav flex-column ms-n3",children:[e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:"nav-link text-body text-sm",href:"#",target:"_blank",children:"Tops"})}),e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:"nav-link text-body text-sm",href:"#",target:"_blank",children:"Diseñadores"})}),e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:"nav-link text-body text-sm",href:"#",target:"_blank",children:"Colección"})}),e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:"nav-link text-body text-sm",href:"#",target:"_blank",children:"Liquidación"})})]}),e.jsxs("ul",{className:"nav flex-column ms-6 ms-md-11 ms-lg-10",children:[e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:"nav-link text-body text-sm",href:"#",target:"_blank",children:"Prints"})}),e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:"nav-link text-body text-sm",href:"#",target:"_blank",children:"Marcas"})}),e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:"nav-link text-body text-sm",href:"#",target:"_blank",children:"Demostración"})}),e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:"nav-link text-body text-sm",href:"#",target:"_blank",children:"Showroom"})})]})]})]}),e.jsxs("div",{className:"col-12 col-lg-6 mb-4 mb-lg-0",children:[e.jsx("h6",{className:"w-100 pb-3 border-bottom",children:"Categorías"}),e.jsxs("div",{className:"d-flex pt-2",children:[e.jsxs("ul",{className:"nav flex-column ms-n3",children:[e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:"nav-link text-body text-sm",href:"#",target:"_blank",children:"Tops"})}),e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:"nav-link text-body text-sm",href:"#",target:"_blank",children:"Diseñadores"})}),e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:"nav-link text-body text-sm",href:"#",target:"_blank",children:"Colección"})}),e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:"nav-link text-body text-sm",href:"#",target:"_blank",children:"Liquidación"})})]}),e.jsxs("ul",{className:"nav flex-column ms-6 ms-md-11 ms-lg-10",children:[e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:"nav-link text-body text-sm",href:"#",target:"_blank",children:"Prints"})}),e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:"nav-link text-body text-sm",href:"#",target:"_blank",children:"Marcas"})}),e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:"nav-link text-body text-sm",href:"#",target:"_blank",children:"Demostración"})}),e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:"nav-link text-body text-sm",href:"#",target:"_blank",children:"Showroom"})})]})]})]})]})})}function d({colors:a}){return e.jsx(e.Fragment,{children:e.jsx("div",{children:a.map(s=>x(s))})})}function x(a){const s="badge filter rounded-4 bg-"+a;return e.jsx("span",{className:s})}function b({thumb_src:a,thumb_alt:s,title:l,description:t,price:i,color:n,colors:c,position:r}){const m="card-body text-"+r;return e.jsx(e.Fragment,{children:e.jsx("div",{className:"card card-product border mb-5 shadow-xs border-radius-lg",children:e.jsxs("a",{href:"#",children:[e.jsx("div",{className:"height-350",children:e.jsx("img",{className:"w-100 h-100 p-4 rounded-top",src:`/astro-showcase${a}`,alt:s})}),e.jsxs("div",{className:m,children:[n&&e.jsx("h6",{className:"text-md mb-1 text-body",children:n}),l&&e.jsx("h4",{className:"font-weight-bold",children:l}),t&&e.jsx("p",{className:"text-body",children:t}),c&&e.jsx(d,{colors:c}),i&&e.jsxs("h4",{className:"mb-0 text-lg mt-1 mb-3",children:["$",i.toLocaleString()]}),!(t||c||n)&&e.jsx("a",{href:"#",className:"font-weight-normal text-body text-sm",children:"Shop Now"})]})]})})})}export{b as C,d as P,o as S};
