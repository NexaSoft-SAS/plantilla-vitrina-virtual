import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

function FeatureCard({ icon, title, children }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        {icon}
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          color="blue-gray"
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: <img className="w-32 mx-auto mb-4" src="icon3.png" />,
    title: "Para tus clientes",
    description:
      "Un lugar repleto de componentes atractivos, información de utilidad y gestor de compras en linea.",
  },
  {
    icon: <img className="w-32 mx-auto mb-4" src="icon1.png" />,
    title: "Para tu negocio",
    description:
      "Ahorre tiempo y dinero ayudando a su equipo a centrarse en atención personalizada y en mejorar las funciones de tu producto.",
  },
  {
    icon: <img className="w-32 mx-auto mb-4" src="icon2.png" />,
    title: "Para ti",
    description:
      "Ahorre meses de trabajo cuando utilices tareas automatizadas en nuestras páginas completamente codificadas.",
  },
];

export function FeatureLanding() {
  return (
    <section className="px-4 mt-12">
      <div className="container mx-auto mb-20 text-center">
        <div className="flex justify-center align-center relative z-5">
          <Typography color="blue-gray" className="text-xl mr-2 font-extrabold">
            Experimenta Mejores Características
          </Typography>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureLanding;
