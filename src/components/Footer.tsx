export default function Footer() {
  return (
    <footer className="w-full flex items-center bg-background h-10 justify-center">
      <p className="text-sm text-muted-foreground">
        &copy; 2025 Matheus Melotti. Todos os direitos reservados.{" "}
        <a
          href="https://www.linkedin.com/in/aline-bravin-prasser/"
          target="_blank"
          className="hover:underline transition-all duration-300">
          Feito com ❤️
        </a>
      </p>
    </footer>
  );
}
