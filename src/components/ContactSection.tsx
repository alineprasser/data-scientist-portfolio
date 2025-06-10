import {
  PiCoffee,
  PiEnvelope,
  PiGithubLogo,
  PiMapPin,
  PiPhone,
} from "react-icons/pi";
import { Button } from "./ui/button";
import { FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="min-h-screen w-full flex flex-col gap-10 items-center justify-center px-2 sm:px-4 lg:px-6 py-12">
      <h2 className="text-4xl font-bold text-center">Vamos conversar?</h2>
      <div className="flex flex-col gap-6 w-full sm:w-lg items-center justify-center shadow-lg bg-background rounded-md p-10">
        <div className="flex items-center justify-center w-20 h-20 bg-primary/30 text-primary rounded-full">
          <PiCoffee size={32} />
        </div>
        <p className="text-lg text-center text-primary">
          Aberto a conexões, colaborações e boas conversas — com ou sem café!
        </p>

        <div className="flex flex-col items-center justify-between w-full gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <PiMapPin
              className="text-primary"
              size={20}
            />
            <span>Serra, ES - Brasil</span>
          </div>
          <div className="flex items-center gap-2">
            <PiPhone
              className="text-primary"
              size={20}
            />
            <a
              href="tel:+5527998621197"
              className="hover:underline transition-all duration-300">
              +55 27 99862-1197
            </a>
          </div>
          <div className="flex items-center gap-2">
            <PiEnvelope
              className="text-primary"
              size={20}
            />
            <a
              href="mailto:matheusmelotti@gmail.com"
              className="hover:underline transition-all duration-300">
              matheusmelotti@gmail.com
            </a>
          </div>
        </div>

        <div className="flex w-full gap-4">
          <a
            href="https://www.linkedin.com/in/matheusmelotti/"
            target="_blank"
            className="flex w-full items-center justify-center gap-2">
            <Button className="w-full">
              <FaLinkedin className="text-lg sm:text-xl group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
          </a>
          <a
            href="https://github.com/matheusmelotti"
            target="_blank"
            className="flex w-full items-center justify-center gap-2">
            <Button className="w-full">
              <PiGithubLogo className="text-lg sm:text-xl group-hover:scale-110 transition-transform" />
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
