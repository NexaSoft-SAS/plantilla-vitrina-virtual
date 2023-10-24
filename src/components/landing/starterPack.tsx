import { Typography, Button } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function ContentSectionOne() {
  return (
    <ThemeProvider>
      <section className="py-16 px-8 lg:py-28">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="row-start-2 mt-12 lg:row-auto lg:mt-0 lg:pr-12">
            <Typography variant="h2" color="blue-gray" className="mb-6">
              Plantilla construida con Astro
            </Typography>
            <Typography variant="lead" color="gray" className="mb-12">
              Siempre sentí que podía hacer cualquier cosa. ¡Eso es lo principal
              que controla a la gente! Están ralentizados por{" "}
              <a
                href="#"
                className="underline underline-offset-4 transition-colors hover:text-blue-500"
              >
                su percepción de sí mismos
              </a>
              . Si te enseñan que no puedes hacer nada, no harás nada. Me
              enseñaron que podía hacer de todo.
              <br />
              <br />
              Ahora es el momento de que todo esté bien y sea grandioso. Por ser
              un color brillante. Por destacar. Pero ahora es el momento de
              estar bien{" "}
              <a
                href="#"
                className="underline underline-offset-4 transition-colors hover:text-blue-500"
              >
                se tu mejor versión
              </a>
              . ¿Creerías en lo que crees, si fueras el único que lo cree?
              <br />
              <br />
              No siempre estamos en la posición que queremos estar. Estamos en
              constante crecimiento. Constantemente cometemos errores. Estamos
              constantemente tratando de expresarnos y hacer realidad nuestros
              sueños.
            </Typography>
            <div className="inline-flex flex-wrap gap-3">
              <Button variant="outlined" color="dark" size="lg">
                Ponerse en contacto
              </Button>
              <Button color="dark" size="lg">
                Nosotros
              </Button>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1680285251132-e1c238bf5e75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="team work"
            className="max-h-[50vh] w-full rounded-xl object-cover object-center md:max-h-[75vh]"
          />
        </div>
      </section>
    </ThemeProvider>
  );
}

export default ContentSectionOne;
