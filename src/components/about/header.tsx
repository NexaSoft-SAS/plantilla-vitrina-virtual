import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import {
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

export function HeroSectionTwo() {
 
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white px-8 py-28">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-flex items-center rounded-lg border border-dark/30 py-1 pl-1 pr-3">
              <Typography
                variant="small"
                className="mr-3 rounded-md bg-dark py-0.5 px-3 font-medium text-white"
              >
                Nuevo
              </Typography>
              <Typography
                color="dark"
                variant="small"
                className="!flex !items-center !font-semibold"
              >
                Plantilla construida con Astro
                <ArrowSmallRightIcon
                  className="ml-1.5 h-4 w-4"
                  strokeWidth={3}
                />
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 leading-tight lg:text-6xl"
            >
              La misión de nuestra empresa es liderar la transformación digital de tu negocio.
            </Typography>
            <Typography variant="lead" className="lg:pr-20 text-blue-gray-800">
             Nuestro potente equipo de diseño nos permite crear sitios web de comercio electrónico que encantarán a sus usuarios.
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button color="dark" className="flex items-center">
                {/* <img
                  src="/astro-showcase/logos/logo-ios.svg"
                  alt="ios"
                  className="-mt-1 mr-1.5 h-6 w-6"
                /> */}
                Ver Tienda
              </Button>
              <Button color="dark" className="flex items-center">
                {/* <img
                  src="/astro-showcase/logos/logo-android.svg"
                  alt="ios"
                  className="-mt-0.5 mr-1.5 h-6 w-6"
                /> */}
                Web Informativa
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex">
            <img src="https://images.unsplash.com/photo-1650615567023-0721bceeecb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt="iphone" className="max-w-md rounded-3xl ml-auto" />
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
