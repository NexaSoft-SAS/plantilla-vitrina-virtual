import {
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

interface TeamCardPropsType {
  img: string;
  name: string;
  title: string;
  desc: string;
}

function TeamCard({ img, name, title, desc }: TeamCardPropsType) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} shadow={false} className="!m-0 !mb-6 h-64">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover object-top"
        />
      </CardHeader>
      <Typography variant="h4" color="blue-gray" className="mb-1">
        {name}
      </Typography>
      <Typography color="gray" className="mb-3 font-normal">
        {title}
      </Typography>
      <Typography color="gray" className="mb-4 font-normal">
        {desc}
      </Typography>
      <div className="flex items-center">
        <IconButton variant="text" color="light-blue">
          <i className="fa-brands fa-twitter text-lg not-italic" />
        </IconButton>
        <IconButton variant="text" color="blue">
          <i className="fa-brands fa-linkedin text-lg not-italic" />
        </IconButton>
        {/* <IconButton variant="text" color="pink">
          <i className="fa-brands fa-dribbble text-lg not-italic" />
        </IconButton> */}
        <IconButton variant="text" color="pink">
          <i className="fa-brands fa-instagram text-lg not-italic" />
        </IconButton>
      </div>
    </Card>
  );
}

const members = [
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    name: "Sebastian Hernandez",
    title: "Fundador y Director ejecutivo",
    desc: "¡Hoy eres tú! ¡Eso es más cierto que cierto! ¡No hay nadie vivo!",
  },
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "Martha Silvino",
    title: "Directora de Ingeniería",
    desc: "Y te amo como Kanye ama a Kanye. Necesitamos reiniciar eso.",
  },
  {
    img: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    name: "Lina Sepulveda",
    title: "Lider de producto",
    desc: "Artista es un término aplicado a una persona que se dedica a una actividad.",
  },
  {
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    name: "Valentina Cardozo",
    title: "Desarrolladora web",
    desc: "El éxito no es definitivo, el fracaso no es fatal: es el coraje de continuar",
  },
];

export function TeamSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <Typography color="dark" className="mb-2 !font-semibold text-lg">
            Nuestro talento
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Hacemos un gran equipo
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto lg:w-8/12 lg:px-20 text-blue-gray-800"
          >
            Escribe aquí más detalles sobre tu equipo de trabajo.
          </Typography>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSectionOne;
