import{j as e}from"./jsx-runtime.TnhE-556.js";import{r}from"./index.Brj7ED4N.js";import{T as l}from"./theme-provider.BHkZBQD4.js";import"./index.CaMdTeyJ.js";import"./index.BSloTDlv.js";const o=["Información general","Características","Soluciones","Tutoriales","Lanzamientos","Ayuda"],t=["Terminos de uso","Políticas de Privacidad","Cookies"],c=new Date().getFullYear();function p(){return e.jsx(l,{children:e.jsx("footer",{className:"mt-10 px-8 pt-20",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsxs("div",{className:"flex flex-wrap items-end justify-center gap-8 md:justify-between",children:[e.jsxs("div",{className:"text-center md:text-left",children:[e.jsx(r.Typography,{variant:"h4",className:"mb-6",children:"Tu Marca"}),e.jsx("ul",{className:"flex flex-wrap items-center justify-center md:justify-start",children:o.map((s,a)=>e.jsx("li",{children:e.jsx(r.Typography,{as:"a",href:"#",color:"gray",className:`py-1 font-normal transition-colors hover:text-blue-gray-900 ${a===0?"pr-3":"px-3"}`,children:s})},s))})]}),e.jsxs("div",{className:"w-full sm:w-[24rem] sm:min-w-[24rem]",children:[e.jsx(r.Typography,{variant:"h6",color:"blue-gray",className:"mb-3",children:"Permanece al día"}),e.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row",children:[e.jsx(r.Input,{color:"black",label:"Introduce tu correo electrónico"}),e.jsx(r.Button,{color:"dark",children:"subscribirse"})]})]})]}),e.jsxs("div",{className:"mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between",children:[e.jsxs(r.Typography,{color:"gray",className:"text-center font-normal",children:["© ",c," NexaSoft SAS, todos los derechos reservados."]}),e.jsx("ul",{className:"flex items-center",children:t.map((s,a)=>e.jsx("li",{children:e.jsx(r.Typography,{as:"a",href:"#",color:"gray",className:`py-1 font-normal transition-colors hover:text-blue-gray-900 ${a===t.length-1?"pl-2":"px-2"}`,children:s})},s))})]})]})})})}export{p as default};