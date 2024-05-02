import React from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function DevPresentation() {
  return (
    <ThemeProvider>
      <div className="flex place-items-center bg-white py-20">
        <div className="container mx-auto items-center flex">
          <div className="text-left mb-8 md:w-1/2">
            <Typography
              color="blue"
              className="flex items-center font-bold text-lg mb-5"
            >
              Atención a código de alta calidad
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 leading-tight"
            >
              Desarrollo consistente utilizando principios de arquitectura.
            </Typography>
            <Typography color="blue-gray" className="lg:pr-64">
              Con la interfaz de usuario para Tu Marca, obtienes todo lo que
              necesitas para comenzar a vender en internet con tu propio sitio
              web de comercio electrónico totalmente funcional y responsivo en
              días, no en meses.
            </Typography>
          </div>
          <img
            src="/astro-showcase/consistenly.png"
            alt="components"
            className="mx-auto hidden md:flex md:w-1/2"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DevPresentation;
