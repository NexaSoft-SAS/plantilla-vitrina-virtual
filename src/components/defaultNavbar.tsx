import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

import ThemeProvider from "./theme-provider";
import ProfileMenu from "./profileMenu";

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};

// account pages menu
const accountItems = [
  {
    title: "Ingresa",
    href: "/astro-showcase/login",
  },
  {
    title: "Crea tu cuenta",
    href: "/astro-showcase/signup",
  },
];

function AccountListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const renderItems = accountItems.map(({ title, href }) => (
    <a href={href} key={title}>
      <MenuItem>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mb-1 font-normal"
        >
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-normal outline-none focus:outline-none"
          >
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Cuenta{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <ul className="col-span-12 flex w-full flex-col gap-1 outline-none focus:outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Cuenta{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "Nosotros",
    href: "/astro-showcase/about",
  },
  {
    title: "Web Informativa",
    href: "/astro-showcase/landing",
  },
  {
    title: "Producto",
    href: "/astro-showcase/product",
  },
  {
    title: "Carro de compras",
    href: "/astro-showcase/shopping-cart",
  },
  {
    title: "Tienda",
    href: "/astro-showcase/store",
  },
  {
    title: "Componentes",
    href: "/astro-showcase/all-components",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const renderItems = navListMenuItems.map(({ title, href }) => (
    <a href={href} key={title}>
      <MenuItem>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mb-1 font-normal"
        >
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-normal outline-none focus:outline-none"
          >
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Paginas{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <ul className="col-span-12 flex w-full flex-col gap-1 outline-none focus:outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Paginas{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavListMenu />
      <AccountListMenu />
      <Typography
        as="a"
        href="https://www.creative-tim.com/learning-lab/astro/quick-start/astro-showcase/"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Square3Stack3DIcon className="h-[18px] w-[18px]" />
          Blog
        </ListItem>
      </Typography>
    </List>
  );
}

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isUserAuth, setIsUserAuth] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsUserAuth(!isUserAuth);
    }, 8000);
  }, [isUserAuth]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <ThemeProvider>
      <Navbar className="absolute mx-auto left-0 right-0 top-3 max-w-screen-xl px-4 py-2 z-10">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/astro-showcase/"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            Tu Marca
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          {isUserAuth ? (
            <ProfileMenu />
          ) : (
            <div className="hidden gap-2 lg:flex">
              <a href="./login">
                <Button variant="text" size="sm" color="blue-gray">
                  Ingresa
                </Button>
              </a>
              <a href="/astro-showcase/signup">
                <Button size="sm" color="dark">
                  Crea tu cuenta
                </Button>
              </a>
            </div>
          )}

          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          {isUserAuth ? (
            <ProfileMenu />
          ) : (
            <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
              <a href="/astro-showcase/login">
                <Button variant="outlined" size="sm" color="dark" fullWidth>
                  Ingresa
                </Button>
              </a>
              <a href="/astro-showcase/signup">
                <Button size="sm" fullWidth color="dark">
                  Crea tu cuenta
                </Button>
              </a>
            </div>
          )}
        </Collapse>
      </Navbar>
    </ThemeProvider>
  );
}
