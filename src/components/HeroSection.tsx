import { PiGithubLogo } from "react-icons/pi";
import { Button } from "./ui/button";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useRef } from "react";
import TypewriterComponent from "typewriter-effect";
import AnimatedSection from "./AnimatedSection";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-primary text-muted">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-screen h-screen opacity-30"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full py-16 lg:py-0">
          <div className="flex flex-col gap-6 lg:gap-8 relative z-10 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <AnimatedSection>
              <div className="flex flex-col gap-4 items-center lg:items-start">
                <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold animate-fade-in leading-tight">
                  Olá, sou o <br />
                  <span className="text-accent animate-gradient bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text">
                    Matheus Melotti 🖥️
                  </span>
                </h1>
                <div className="text-base sm:text-lg lg:text-xl text-muted/90 animate-slide-up max-w-xl mx-auto lg:mx-0">
                  Combino ciência de dados, engenharia e visão prática para
                  criar soluções inteligentes e escaláveis.{" "}
                  <span className="font-sedan text-accent relative ">
                    <TypewriterComponent
                      options={{
                        strings: [
                          "Tecnologia para resolver, não complicar.",
                          "Ciência de dados na prática, com propósito.",
                          "Dados bem trabalhados resolvem grandes problemas.",
                          "Tecnologia com propósito, dados com direção.",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        deleteSpeed: 10,
                      }}
                    />
                  </span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up-delayed mt-4">
                <a
                  href="https://www.linkedin.com/in/matheusmelotti/"
                  target="_blank"
                  className="flex items-center justify-center gap-2">
                  <Button className="bg-accent text-primary px-5 py-2.5 sm:px-6 sm:py-3 rounded-md hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group w-full sm:w-auto">
                    <FaLinkedin className="text-lg sm:text-xl group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </Button>
                </a>
                <a
                  href="https://github.com/melottii"
                  target="_blank"
                  className="flex items-center justify-center gap-2">
                  <Button className="bg-accent text-primary px-5 py-2.5 sm:px-6 sm:py-3 rounded-md hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group w-full sm:w-auto">
                    <PiGithubLogo className="text-lg sm:text-xl group-hover:scale-110 transition-transform" />
                    GitHub
                  </Button>
                </a>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="relative flex items-center justify-center lg:justify-end mb-8 lg:mb-0">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent rounded-full animate-rotate-slow"></div>
                <img
                  ref={imageRef}
                  src="/matheus.jpeg"
                  alt="Matheus Melotti"
                  className="relative w-full h-full rounded-full object-cover border-4 border-accent/20 shadow-2xl animate-float-slow hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
