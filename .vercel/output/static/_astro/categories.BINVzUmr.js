import{j as a}from"./jsx-runtime.TnhE-556.js";import{r as e}from"./index.Brj7ED4N.js";import"./index.CaMdTeyJ.js";import"./index.BSloTDlv.js";function o({img:s,category:r}){return a.jsxs(e.Card,{shadow:!1,className:"relative grid h-[25rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center",children:[a.jsx(e.CardHeader,{floated:!1,shadow:!1,color:"transparent",className:"absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center",style:{backgroundImage:`url(${s})`},children:a.jsx("div",{className:"to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"})}),a.jsx(e.CardBody,{className:"relative py-14 px-6 md:px-12",children:a.jsx(e.Typography,{variant:"h4",color:"white",className:"mb-6 font-medium leading-[1.5]",children:r})})]})}const t=[{img:"https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",category:"Electrónica"},{img:"https://images.unsplash.com/photo-1542845476-351174c0a0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",category:"Ver productos nuevos"},{img:"https://images.unsplash.com/photo-1554116154-e733de92fe4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",category:"Accesorios"},{img:"https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",category:"Promociones"}];function n(){return a.jsx("section",{className:"py-8 px-8 lg:py-16",children:a.jsxs("div",{className:"container mx-auto",children:[a.jsxs("div",{className:"mb-24 w-1/2",children:[a.jsx(e.Typography,{variant:"h2",color:"blue-gray",className:"mb-4",children:"Compra por categoría"}),a.jsx(e.Typography,{variant:"lead",className:"l:px-20 text-blue-gray-800",children:"Ajustamos cada detalle según tus necesidades para mantener a tus usuarios interesados de manera significativa."})]}),a.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:t.map((s,r)=>a.jsx(o,{...s},r))})]})})}export{n as default};