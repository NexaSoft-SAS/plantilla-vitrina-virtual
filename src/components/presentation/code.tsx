import React from "react";
import {
  Button,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import {
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export function CodePresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Typography
              color="blue"
              className="flex items-center justify-center lg:justify-start font-bold text-lg mb-5"
            >
              Desarrolla tu modelo de negocios en la era digital.
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Escribimos tu código sobre esta plantilla de Tienda Virtual.
            </Typography>
            <Typography color="blue-gray" className="lg:pr-20">
              Comerciar de forma electrónica le ahorrará mucho tiempo, ya que proporciona una base sólida para la venta en línea, lo que le permitirá a su equipo concentrarse en dar atención personalizada y agregar características específicas para satisfacer las necesidades de su cliente.
            </Typography>
            <a href="https://www.creative-tim.com/learning-lab/astro/overview/astro-showcase">
              <Button color="dark" variant="text" size="sm" className="flex items-center mx-auto md:mr-auto lg:ml-0 gap-2 mt-4">
                Blog <ArrowRightIcon strokeWidth={2} className="h-5 w-5" />
              </Button>
            </a>
          </div>
            <img src="/astro-showcase/code.png" alt="iphone" className="max-w-2xl rounded-3xl hidden md:flex mx-auto" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CodePresentation;
