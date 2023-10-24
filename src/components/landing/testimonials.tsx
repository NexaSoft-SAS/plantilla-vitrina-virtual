import { Card, CardBody, Typography } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

export function TestimonialSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          shadow={false}
          className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8 bg-dark"
        >
          <CardBody className="py-20 px-14 md:w-7/12">
            <div className="mb-6 flex items-center">
              {[...Array(5).keys()].map((el, key) => (
                <StarIcon className="h-6 w-6 text-yellow-600" key={key} />
              ))}
            </div>
            <Typography
              variant="h3"
              color="white"
              className="mb-10 font-medium leading-normal"
            >
              &quot; No siempre estamos en la posición que queremos estar.
              Estamos en constante crecimiento. Constantemente cometemos
              errores. Estamos constantemente tratando de expresarnos y hacer
              realidad nuestros sueños. &quot;
            </Typography>
            <Typography variant="lead" color="white" className="font-medium">
              Marcela Glock
            </Typography>
            <Typography color="white" className="font-normal opacity-70">
              Directora ejecutiva de Spotify
            </Typography>
          </CardBody>
          <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12 m-12">
            <img
              src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80"
              alt="testimonial image"
              className="h-full w-full object-cover md:absolute rounded-2xl"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default TestimonialSectionOne;
