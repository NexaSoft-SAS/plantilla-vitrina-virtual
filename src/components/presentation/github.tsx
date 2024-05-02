import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

export function AstroSection() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          color="red"
          shadow={false}
          className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8"
        >
          <CardBody className="py-20 px-14 md:w-7/12">
            <Typography color="white" className="font-normal opacity-70">
              Vitrina virtual
            </Typography>
            <Typography variant="h2" color="white" className="mb-5 font-normal">
              Enseñamos tus mejores productos exhibidos directamente en la web!
            </Typography>
            <Typography variant="lead" color="white">
              Nuestro potente equipo de diseño nos permite crear sitios web de
              comercio electrónico que encantarán a sus usuarios.
            </Typography>
            <a href="/astro-showcase/about">
              <Button
                color="white"
                size="sm"
                variant="outlined"
                className="flex items-center mt-5"
              >
                Nosotros
              </Button>
            </a>
          </CardBody>
          <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
            <img
              src="/astro-showcase/github.png"
              alt="github"
              className="h-full w-full object-cover md:absolute"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default AstroSection;
