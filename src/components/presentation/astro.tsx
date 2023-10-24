import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

export function AstroSection() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          color="blue"
          shadow={false}
          className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8"
        >
          <CardBody className="md:py-20 md:px-14 md:w-7/12">
            <Typography color="white" className="font-bold">
              Arquitectura web
            </Typography>
            <Typography
              variant="h2"
              color="white"
              className="mb-5 font-normal"
            >
              ¿Qué es Astro?
            </Typography>
            <Typography variant="lead" color="white">
              Astro es un framework web todo en uno para crear sitios web rápidos y centrados en el contenido. El marco se basa en la arquitectura Astro Islands, que representa un cambio de paradigma líder para arquitecturas web.
            </Typography>
            <a href="/astro-launch-ui/about">
              <Button color="white" size="sm" variant="outlined" className="flex items-center mt-12">
                Nosotros
              </Button>
            </a>
          </CardBody>
          <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
            <img
              src="astro.png"
              alt="astro"
              className="h-full w-full object-cover md:absolute"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default AstroSection;
