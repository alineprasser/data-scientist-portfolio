import ProjectTab from "./ProjectTab";
import ProjectContent from "./ProjectContent";

export default function ProjectsSection() {
  return (
    <section className="container min-h-screen w-full flex flex-col gap-10 items-center px-2 sm:px-4 lg:px-6 py-12">
      <h2 className="text-4xl font-bold text-center">Projetos</h2>

      <div className="tabs tabs-box transition-all duration-300 w-full text-primary">
        <ProjectTab
          title="Tradutor de Imagem"
          defaultChecked>
          <ProjectContent
            image="/image-translator.png"
            alt="Image translator example"
            title="Tradutor de Imagem"
            badge="Python"
            githubLink="https://github.com/melottii/tradutor_imagem"
            description={
              <p>
                Este projeto é um sistema de processamento de imagens que
                realiza a detecção, extração, classificação e tradução de textos
                presentes em imagens. O sistema é capaz de identificar textos em
                inglês, japonês e chinês, traduzindo-os para português
                brasileiro e substituindo o texto original na imagem.
              </p>
            }
            features={
              <ol className="list-decimal list-inside flex flex-col gap-4 ml-2">
                <li>
                  Detecção de Texto
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      Utiliza o modelo doctr para detectar e extrair texto de
                      imagens
                    </li>
                    <li>Identifica a posição exata de cada texto na imagem</li>
                    <li>Agrupa textos próximos em balões de fala</li>
                  </ul>
                </li>

                <li>
                  Classificação de Idioma
                  <ul className="list-disc list-inside ml-4">
                    <li>Identifica o idioma do texto detectado</li>
                    <li>Suporta inglês, japonês e chinês</li>
                    <li>Utiliza o modelo XLM-RoBERTa para classificação</li>
                  </ul>
                </li>

                <li>
                  Tradução
                  <ul className="list-disc list-inside ml-4">
                    <li>Traduz o texto para português brasileiro</li>
                    <li>Utiliza a API do Google Translate</li>
                    <li>
                      Implementa tratamento especial para nomes próprios e
                      expressões
                    </li>
                  </ul>
                </li>

                <li>
                  Substituição de Texto
                  <ul className="list-disc list-inside ml-4">
                    <li>Mascara o texto original com uma caixa</li>
                    <li>Insere o texto traduzido na posição original</li>
                    <li>Mantém a formatação e estilo do texto original</li>
                  </ul>
                </li>
              </ol>
            }
          />
        </ProjectTab>

        <ProjectTab title="Ghouls, Goblins and Ghosts...">
          <ProjectContent
            image="/ghouls-goblins-ghosts.png"
            alt="Ghouls, Goblins and Ghosts example"
            title="Ghouls, Goblins and Ghosts..."
            badge="Jupyter Notebook"
            githubLink="https://github.com/melottii/ggg_kaggle"
            description={
              <>
                <p>
                  Este notebook apresenta a solução para o desafio "Ghouls,
                  Goblins and Ghosts..." da Kaggle.
                </p>
                <p>
                  Link do desafio:{" "}
                  <a
                    href="https://www.kaggle.com/competitions/ghouls-goblins-and-ghosts-boo/overview"
                    target="_blank"
                    className="underline text-accent break-words">
                    https://www.kaggle.com/competitions/ghouls-goblins-and-ghosts-boo/overview
                  </a>
                </p>
              </>
            }
          />
        </ProjectTab>
      </div>
    </section>
  );
}
