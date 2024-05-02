
import { Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

const SOCIAL_MEDIA = [
  {
    icon: "fab fa-twitter",
    link: "https://www.twitter.com/",
  },
  {
    icon: "fab fa-facebook-square",
    link: "https://www.facebook.com/profile.php?id=100089606313657",
  },
  {
    icon: "fab fa-instagram-square",
    link: "https://www.instagram.com/nexa_soft",
  },
  // {
  //   icon: "fab fa-github",
  //   link: "https://www.github.com/",
  // },
  // {
  //   icon: "fab fa-discord",
  //   link: "https://discord.com/invite/",
  // },
];

const COMPANY = [
  {
    name: "Nosotros",
    link: "/astro-showcase/about",
  },
  {
    name: "Soluciones",
    link: "/astro-showcase/",
  },
  {
    name: "Tutoriales",
    link: "/astro-showcase/",
  },
  {
    name: "Lanzamientos",
    link: "/astro-showcase/",
  },
];

const HELP = [  
  {
    name: "Contáctenos",
    link: "/#",
  },
  {
    name: "Soporte",
    link: "/#",
  },
  {
    name: "Ayuda",
    link: "/#",
  },
];

const RESOURCES = [
  {
    name: "Blog",
    link: "/astro-showcase/blog",
  },
  {
    name: "Boletín Informativo",
    link: "/astro-showcase/blog",
  },
  {
    name: "Eventos",
    link: "/astro-showcase/blog",
  },
  {
    name: "Ayuda",
    link: "/astro-showcase/blog",
  },
  {
    name: "Tutoriales",
    link: "/astro-showcase/blog",
  },
  {
    name: "Soporte",
    link: "/astro-showcase/blog",
  },
];

export function Footer() {
  return (
    <footer className="relative z-50 bg-white px-8 pt-12 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <Typography
              variant="h4"
              className="mb-2 !font-semibold !text-primary"
            >
              Tu Marca
            </Typography>
            <Typography className="text-md mt-0 mb-2 font-normal !text-gray-600">
              Con la fácilidad de enseñar tus mejores productos.
            </Typography>
            <div className="mt-6">
              {SOCIAL_MEDIA.map(({ icon, link }, key) => (
                <a key={key} href={link} target="_blank" rel="noreferrer">
                  <i
                    className={`${icon} font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none`}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="ml-auto w-full px-4 md:w-7/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Marca
                </span>
                <ul className="list-unstyled">
                  {COMPANY.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Soporte
                </span>
                <ul className="list-unstyled">
                  {HELP.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        rel="noreferrer"
                        target={name === "Pricing" ? "_self" : "_blank"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Recursos
                </span>
                <ul className="list-unstyled">
                  {RESOURCES.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        rel="noreferrer"
                        target={name === "Documentation" ? "_self" : "_blank"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blue-gray-50" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="text-center lg:text-left">
            <div className="text-md mt-2 py-1 font-normal text-gray-600">
              Copyright &copy; {YEAR}{" "}              
              <a
                href="https://www.nexasoft.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit transition-all font-semibold text-primary "
              >
                NexaSoft SAS.
              </a>
            </div>
          </div>
          <div className="ml-auto w-full px-4 text-center md:w-4/12 md:px-0 md:text-right">
            <a href="https://nepcha.com?ref=astrolaunch-ui">
              <img
                src="https://nepcha.com/img/media/badges/analytics-by-nepcha-black-transparent.png"
                className="mx-auto lg:mr-0 lg:ml-auto"
                alt="nepcha"
                width={250}
                height={250}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
