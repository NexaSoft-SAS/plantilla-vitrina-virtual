import ThemeProvider from "./theme-provider";
import Navbar from "./defaultNavbar"
 
import { Typography, Input, Button } from "@material-tailwind/react";

export function SignUp() {
  return (
    <ThemeProvider>
      <Navbar />
      <section className="grid h-screen items-center p-8">
        <div className="text-center">
          <Typography variant="h3" color="blue-gray" className="mb-2">
            Crea tu cuenta
          </Typography>
          <Typography className="font-normal mb-12 text-blue-gray-800">
           Ingresa tu correo electrónico y contraseña para registrarte.
          </Typography>
          <form action="#" className="mx-auto max-w-[24rem] text-left">
            <Input color="black" size="lg" label="Correo electrónico" type="email" name="email" />
            <Button color="dark" size="lg" className="mt-4" fullWidth>
              Continuar
            </Button>
            <div className="my-6 flex w-full items-center gap-2">
              <hr className="w-full bg-blue-gray-50" />
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium opacity-50"
              >
                O
              </Typography>
              <hr className="w-full bg-blue-gray-50" />
            </div>
            <Button
              variant="outlined"
              color="blue-gray"
              size="lg"
              className="mt-4 flex h-12 items-center justify-center gap-2"
              fullWidth
            >
              <img
                src="/astro-showcase/logos/logo-google.png"
                alt="google"
                className="h-6 w-6"
              />{" "}
              Crea tu cuenta usando Google
            </Button>
            <Button
              variant="outlined"
              color="blue-gray"
              size="lg"
              className="mt-4 flex h-12 items-center justify-center gap-2"
              fullWidth
            >
              <img
                src="/astro-showcase/logos/logo-facebook.png"
                alt="facebook"
                className="-mt-0.5 h-7 w-7"
              />
              Crea tu cuenta usando facebook
            </Button>
            <Button
              variant="outlined"
              color="blue-gray"
              size="lg"
              className="mt-4 flex h-12 items-center justify-center gap-2"
              fullWidth
            >
              <img
                src="/astro-showcase/logos/logo-apple.png"
                alt="apple"
                className="-mt-1 h-7 w-7"
              />
              Crea tu cuenta usando apple
            </Button>
            <Typography
              color="gray"
              className="mt-6 text-center font-normal"
            >
              ¿Ya tienes una cuenta?{" "}
              <a
                href="/astro-showcase/login"
                className="font-medium text-dark transition-colors hover:text-blue-700"
              >
                Ingresa
              </a>
            </Typography>
          </form>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default SignUp;

