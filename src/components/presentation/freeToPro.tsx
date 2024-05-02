import React from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

function StatsCard({ count, title, desc }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h1" className="mb-4 text-5xl text-dark">
        {count}
      </Typography>
      <Typography variant="h5" color="blue-gray">
        {title}
      </Typography>
      <Typography color="gray">{desc}</Typography>
    </Card>
  );
}

const stats = [
  {
    count: "+",
    title: "Vitrina Virtual",
    desc: "Enseña tus catalogos de productos de una forma creativa.",
  },
  {
    count: "+",
    title: "Blog",
    desc: "Redacta entradas para atraer nuevos publicos cautivos.",
  },
  {
    count: "+",
    title: "Acerca de nosotros",
    desc: "Una presentación sobre los aspectos más significativos de Tu Marca.",
  },
  {
    count: "+",
    title: "Autentificación de usuarios",
    desc: "Gestión de cuentas de usuarios listo para ser usado.",
  },
];

export function FigmaPresentation() {
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto relative">
          <div className="text-left">
            <Typography color="blue" className="font-bold text-lg mb-5">
              Componentes codificados basados en Astro
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Tu Marca
            </Typography>
            <Typography color="blue-gray" className="mb-5 lg:w-[30rem]">
              Todas las secciones y páginas serán totalmente responsivas y se
              ajustaran a todo tipo de pantallas, incluidos teléfonos, tabletas
              o computadoras de escritorio.
            </Typography>
          </div>
          <div className="lg:flex relative">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div className="grid gap-y-16 gap-x-8 grid-cols-2 md:grid-cols-2 mb-8">
                  {stats.map((props, key) => (
                    <StatsCard key={key} {...props} />
                  ))}
                </div>
                <a
                  href="/astro-showcase/landing"
                  target="_blank"
                >
                  <Button color="dark" className="flex items-center">
                    Tienda
                  </Button>
                </a>
              </div>
            </div>
            <img
              src="/astro-showcase/components.png"
              alt="iphone"
              className="lg:w-1/2 rounded-3xl hidden md:flex ml-auto lg:absolute -right-32 -top-24"
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FigmaPresentation;
