import { PiGithubLogo } from "react-icons/pi";
import { Button } from "./ui/button";
import { FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center w-screen bg-primary text-muted min-h-screen">
      <div className="flex h-full flex-col gap-5 items-start px-20 py-32">
        <h1 className="text-4xl text-start font-bold">
          Hey, I&apos;m a <br />
          <span className="text-accent">Data Scientist</span>
        </h1>
        <p className="text-start text-lg text-muted">
          I love turning messy data into beautiful insights! When I'm not coding
          in Python, I'm probably discovering cool patterns with machine
          learning or creating stunning visualizations.
        </p>
        <div className="flex gap-4">
          <Button className="bg-accent text-primary px-4 py-2 rounded-md">
            <a
              href="https://www.linkedin.com/in/matheusmelotti/"
              target="_blank"
              className="flex items-center gap-2">
              <FaLinkedin />
              Let&apos;s connect
            </a>
          </Button>
          <Button className="bg-accent text-primary px-4 py-2 rounded-md">
            <PiGithubLogo />
            Check out my work
          </Button>
        </div>
      </div>
      <div className="flex relative h-full flex-col items-center justify-center">
        <img
          src="/matheus.jpeg"
          alt="Matheus Melotti"
          className="w-1/2 z-10 rounded-full object-contain"
        />
      </div>
    </section>
  );
}
