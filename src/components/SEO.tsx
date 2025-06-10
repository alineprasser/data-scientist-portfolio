import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title = "Matheus Melotti | Data Scientist",
  description = "Portfólio profissional de Data Scientist com projetos e experiências em análise de dados, machine learning e visualização de dados.",
  keywords = "data scientist, cientista de dados, análise de dados, machine learning, portfolio, data analysis, python, R, SQL",
  image = "/og-image.jpg",
  url = typeof window !== "undefined" ? window.location.href : "",
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="title"
        content={title}
      />
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:url"
        content={url}
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="twitter:card"
        content="summary_large_image"
      />
      <meta
        property="twitter:url"
        content={url}
      />
      <meta
        property="twitter:title"
        content={title}
      />
      <meta
        property="twitter:description"
        content={description}
      />
      <meta
        property="twitter:image"
        content={image}
      />
    </Helmet>
  );
}
