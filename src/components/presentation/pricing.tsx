import React, { useEffect } from "react";
// import Script from "next/script";

import {
  Typography,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";

function PaddleLoader() {
  useEffect(() => {
    // Check if we are in the browser environment
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://cdn.paddle.com/paddle/paddle.js";
      script.onload = () => {
        // Access the Paddle global object from the script
        window.Paddle.Setup({
          vendor: Number(102023),
        });
      };
      document.body.appendChild(script);
    }
  }, []);

  return null;
}

const include = [
  {
    title: "Transcripción de Textos",
  },
  {
    title: "Personalización de componentes",
  },
  {
    title: "Optimización de imagenes",
  },
];

export function PricingSectionOne() {
  return (
    <>
      <PaddleLoader />
      <section id="pricing" className="py-24 px-8">
        <div className="container mx-auto text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Elige el mejor plan para ti
          </Typography>
          <Typography className="mb-8 font-normal !text-gray-500">
            Tienes derecho a actualizaciones ilimitadas y soporte premium en cada paquete.
          </Typography>
        </div>
        <div className="mt-12">
          <div className="container mx-auto md:flex justify-center gap-10">
            <Card
              color="transparent"
              className="border border-blue-gray-100 w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="!m-0 pt-6 text-center"
              >
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="capitalize mb-2 text-center"
                >
                  Vitrina virtual
                </Typography>

                <Typography
                  variant="h3"
                  color="blue-gray"
                  className="flex gap-1 justify-center"
                >
                  $1 799 900
                </Typography>
              </CardHeader>
              <CardBody className="text-center">
                <ul className="flex flex-col mb-8 px-5">
                  {include.map(({ title }) => (
                    <li
                      key={title}
                      className="flex items-center justify-center gap-3 border-b py-4 text-gray-700"
                    >
                      <Typography
                        variant="small"
                        className="font-normal text-inherit"
                      >
                        {title}
                      </Typography>
                    </li>
                  ))}
                </ul>
                <a
                  href="/astro-showcase/login"
                  target="_blank"
                >
                  <Button
                    size="sm"
                    variant="gradient"
                    color="blue-gray"
                    className="from-blue-gray-900 to-blue-gray-800"
                  >
                    Acceder
                  </Button>
                </a>
              </CardBody>
            </Card>

            <Card
              color="blue-gray"
              className="bg-dark w-full md:w-1/2 lg:w-1/4"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="!m-0 pt-6 text-center"
              >
                <Typography
                  variant="h5"
                  color="white"
                  className="capitalize mb-2 text-center"
                >
                  Entradas de Blog x3
                </Typography>

                <Typography
                  variant="h3"
                  color="white"
                  className="flex gap-1 justify-center"
                >
                  $150 000
                </Typography>
              </CardHeader>
              <CardBody className="text-center">
                <ul className="flex flex-col mb-8 px-5">
                {include.map(({ title }) => (
                    <li
                      key={title}
                      className="flex items-center justify-center gap-3 border-b py-4 text-gray-700"
                    >
                      <Typography
                        variant="small"
                        className="font-normal text-inherit"
                      >
                        {title}
                      </Typography>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  onClick={() => {
                    Paddle.Checkout.open({ product: 847482 });
                  }}
                >
                  <Button
                    id="847482"
                    size="sm"
                    variant="gradient"
                    color="white"
                  >
                    Solicitar
                  </Button>
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingSectionOne;
