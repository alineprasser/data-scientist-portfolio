import type { Project } from '../types/projetc';

export const projects: Project[] = [
  {
    title: 'Tradutor de Imagem',
    description: 'Este projeto é um sistema de processamento de imagens que realiza a detecção, extração, classificação e tradução de textos presentes em imagens. O sistema é capaz de identificar textos em inglês, japonês e chinês, traduzindo-os para português brasileiro e substituindo o texto original na imagem.',
    image: '/image-translator.png',
    githubLink: 'https://github.com/melottii/tradutor_imagem',
    category: 'Python',
    technologies: ['doctr', 'XLM-RoBERTa', 'Google Translate API', 'OpenCV'],
    featured: true,
    features: `
      <div class="space-y-4">
        <div>
          <h4 class="font-semibold text-gray-900 mb-2">1. Detecção de Texto</h4>
          <ul class="list-disc list-inside ml-4 space-y-1 text-sm text-gray-600">
            <li>Utiliza o modelo doctr para detectar e extrair texto de imagens</li>
            <li>Identifica a posição exata de cada texto na imagem</li>
            <li>Agrupa textos próximos em balões de fala</li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold text-gray-900 mb-2">2. Classificação de Idioma</h4>
          <ul class="list-disc list-inside ml-4 space-y-1 text-sm text-gray-600">
            <li>Identifica o idioma do texto detectado</li>
            <li>Suporta inglês, japonês e chinês</li>
            <li>Utiliza o modelo XLM-RoBERTa para classificação</li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold text-gray-900 mb-2">3. Tradução</h4>
          <ul class="list-disc list-inside ml-4 space-y-1 text-sm text-gray-600">
            <li>Traduz o texto para português brasileiro</li>
            <li>Utiliza a API do Google Translate</li>
            <li>Implementa tratamento especial para nomes próprios e expressões</li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold text-gray-900 mb-2">4. Substituição de Texto</h4>
          <ul class="list-disc list-inside ml-4 space-y-1 text-sm text-gray-600">
            <li>Mascara o texto original com uma caixa</li>
            <li>Insere o texto traduzido na posição original</li>
            <li>Mantém a formatação e estilo do texto original</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: 'Ghouls, Goblins and Ghosts...',
    description: 'Este notebook apresenta a solução para o desafio "Ghouls, Goblins and Ghosts..." da Kaggle. Um projeto de machine learning focado em classificação de criaturas místicas usando técnicas avançadas de análise de dados.',
    image: '/ghouls-goblins-ghosts.png',
    githubLink: 'https://github.com/melottii/ggg_kaggle',
    category: 'Python',
    technologies: ['Pandas', 'Scikit-learn', 'Jupyter', 'Kaggle API'],
    features: `
      <div class="space-y-3">
        <p class="text-sm text-gray-600">
          Link do desafio: 
          <a href="https://www.kaggle.com/competitions/ghouls-goblins-and-ghosts-boo/overview" 
             target="_blank" 
             class="text-blue-600 hover:text-blue-800 underline break-all">
            kaggle.com/competitions/ghouls-goblins-and-ghosts-boo
          </a>
        </p>
        <div class="bg-gray-50 p-3 rounded-lg">
          <p class="text-sm text-gray-700">
            Competição de machine learning focada em classificação de criaturas místicas 
            baseada em características físicas e comportamentais.
          </p>
        </div>
      </div>
    `
  }
];

export const categories = ['Todos', 'Tradutor de Imagem', 'Ghouls, Goblins and Ghosts...'];