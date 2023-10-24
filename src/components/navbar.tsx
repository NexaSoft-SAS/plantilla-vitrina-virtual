import React, { useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
 
import ProfileMenu from "./profileMenu";
 
// account pages menu
const accountItems = [
  {
    title: "Ingresa",
    href: "/astro-launch-ui/login"
  },
  {
    title: "Crea tu cuenta",
    href: "/astro-launch-ui/signup"
  }
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
        <Typography variant="paragraph" color="blue-gray" className="mb-1 font-normal">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal outline-none focus:outline-none">
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
    href: "/astro-launch-ui/about"
  },
  {
    title: "Web Informativa",
    href: "/astro-launch-ui/landing"
  },
  {
    title: "Producto",
    href: "/astro-launch-ui/product"
  },
  {
    title: "Carro de compras",
    href: "/astro-launch-ui/shopping-cart"
  },
  {
    title: "Tienda",
    href: "/astro-launch-ui/store"
  },
  {
    title: "Home2",
    href: "/astro-launch-ui/index2"
  }
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
        <Typography variant="paragraph" color="blue-gray" className="mb-1 font-normal">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal outline-none focus:outline-none">
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
 
// nav list component
const navListItems = [
  {
    label: "Blog",
    icon: Square3Stack3DIcon,
    route: "/astro-launch-ui/blog"
  }
];
 
function NavList() {
  const [isUserAuth, setIsUserAuth] = React.useState(false);

  useEffect(() => {
    setTimeout( () => {setIsUserAuth(!isUserAuth)}, 8000)
  }, [isUserAuth])

  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">      
      {navListItems.map(({ label, icon, route }, key) => (
        <Typography
          key={label}
          as="a"
          href={route}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>
        </Typography>
      ))}
      <NavListMenu />
      { isUserAuth? (
        <ProfileMenu />
      ):(
        <AccountListMenu />
      )}
    </ul>
  );
}
 
export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [shouldShowBorder, setShouldShowBorder] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShouldShowBorder(true);
      } else {
        setShouldShowBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
 
  return (
    <Navbar
      className={`sticky inset-0 z-10 mx-auto max-w-screen-2xl p-2 lg:pl-6 mt-4 transition-shadow ${
        shouldShowBorder ? "border-b border-gray-300 shadow-none" : ""
      }`}
    >
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Tu Marca
        </Typography>
        <div className="hidden lg:flex ml-auto pe-3">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      
        {/* Active Redes Sociales
        <a href="https://discord.gg/WCvQWMwT" target="_blank">
          <Button size="sm" color="dark" variant="text">
            <i className="fab fa-discord text-lg leading-none" aria-hidden="true"></i>
          </Button>
        </a>
        <a href="https://github.com/creativetimofficial/astro-launch-ui" target="_blank">
          <Button size="sm" color="dark" variant="text">
            <i className="fab fa-github text-xl leading-none" aria-hidden="true"></i>
          </Button>
        </a> */}
        <a href="/astro-launch-ui/landing">
          <Button color="dark">Ver Tienda</Button>
        </a>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}