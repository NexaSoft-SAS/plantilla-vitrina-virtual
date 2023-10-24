import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  EyeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BoltIcon,
  FaceSmileIcon,
  LinkIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-dark p-2.5 text-white">
          {icon}
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
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
    icon: <EyeIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Equipo experto",
    description:
      "Ahora es el momento de destacar y mostrar porque eres único.",
  },
  {
    icon: (
      <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" strokeWidth={2} />
    ),
    title: "Soporte 24/7",
    description:
      "Chatea con nuestro amigable equipo las 24 horas del día, los 7 días de la semana, cuando necesites ayuda.",
  },
  {
    icon: <BoltIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Revisión de cambios",
    description:
      "Estamos aquí para echarte una mano con esos ajustes finos.",
  },
  {
    icon: <FaceSmileIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Funcionalidad de pagos",
    description:
      "Gestionamos una pasarela de pagos completa para facilitar tus ventas en linea.",
  },
  {
    icon: <LinkIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Plataforma optimizada",
    description:
      "Con la rapidez y desempeño que inspira a continuar la interacción.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Personalización de componentes",
    description:
      "Extendemos el diseño y la funcionalidad para ajustarnos a la identidad de Tu Marca.",
  },
];

export function FeatureSectionOne() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="dark" className="mb-2 font-bold text-lg">
          Análisis sociales de tendencias
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Convierte tu negocio a la era digital
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 text-blue-gray-800 md:w-10/12 lg:w-7/12 lg:px-8"
        >
          Estamos constantemente tratando de expresarnos y hacer realidad nuestros sueños
        </Typography>
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

export default FeatureSectionOne;
