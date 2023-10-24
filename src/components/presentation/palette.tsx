import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function PalettePresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="hidden lg:flex">
            <img src="palette.png" alt="iphone" className="max-w-xl rounded-3xl mx-auto" />
          </div>
          
          <div className="text-center lg:text-left">
            <Typography
              color="blue"
              className="flex items-center justify-center lg:justify-start !font-bold text-lg mb-5"
            >
              Atención al diseño funcional.
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Impresionante gama de colores, variables y diseño de elementos.
            </Typography>
            <Typography color="gray" className="lg:pr-20">
              Personalizamos los colores, logos e imagenes de diversos tamaños, espacioados, incluso la tipografía en minutos para que se ajusten perfectamente a la identidad de tu marca. Dedicando tiempo a crear herramientas que destacan.
            </Typography>            
          </div>
          
        </div>
      </div>
    </ThemeProvider>
  );
}

export default PalettePresentation;
