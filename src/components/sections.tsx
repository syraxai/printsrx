"use client";
import Image from "next/image";

import {
  ArrowUpRight,
  Check,
  Gift,
  KeyRound,
  Layers3,
  PencilRuler,
  QrCode,
  Settings2,
  Store,
  Camera,
  MessageCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brand, navigation, QuoteLink } from "./site";
import { products, type Product, type ProductImage } from "@/src/data/products";
import { categories } from "@/src/data/categories";
import { projects, projectFilters } from "@/src/data/projects";
import {
  about,
  enterpriseExamples,
  faq,
  personalizations,
  reviews,
  steps,
} from "@/src/data/content";
import { business } from "@/src/config/business";
import { whatsappUrl } from "@/src/lib/whatsapp";

const icons = {
  qr: QrCode,
  store: Store,
  key: KeyRound,
  gift: Gift,
  layers: Layers3,
  settings: Settings2,
  pencil: PencilRuler,
};

export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}

export function Categories() {
  return (
    <section
      className="section section-border"
      aria-labelledby="categories-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">
            <span />
            POSSIBILIDADES EM 3D
          </p>
          <h2 id="categories-title">O que podemos criar para você?</h2>
        </div>
        <div className="category-grid">
          {categories.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article className="category-card" key={item.id}>
                <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <QuoteLink
                  className="text-link"
                  message={`Olá! Tenho interesse em ${item.name.toLowerCase()} e gostaria de solicitar um orçamento.`}
                >
                  Pedir orçamento
                </QuoteLink>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BusinessSection() {
  return (
    <section id="empresas" className="section enterprise">
      <div className="container enterprise-layout">
        <div>
          <p className="eyebrow">
            <span />
            PARA QUEM EMPREENDE
          </p>
          <h2>
            Soluções 3D para
            <br />
            <em>o seu negócio.</em>
          </h2>
          <p>
            A SRX 3D também desenvolve produtos personalizados para lojas,
            restaurantes, salões, escritórios, profissionais autônomos e outros
            estabelecimentos.
          </p>
          <QuoteLink message="Olá! Tenho uma empresa e gostaria de solicitar um orçamento de produtos ou soluções personalizadas em impressão 3D para o meu negócio.">
            Quero uma solução para minha empresa
          </QuoteLink>
        </div>
        <div className="enterprise-panel">
          <span className="panel-caption">SUA MARCA. NOS DETALHES.</span>
          <h3>
            Do balcão à rotina
            <br />
            da sua empresa.
          </h3>
          <ul>
            {enterpriseExamples.map((item) => (
              <li key={item}>
                <Check size={16} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p>Personalização conforme a necessidade de cada projeto.</p>
        </div>
      </div>
    </section>
  );
}

export function ProductPhoto({
  image,
  name,
  index,
}: {
  image?: ProductImage;
  name: string;
  index?: number;
}) {
  if (!image)
    return (
      <div
        className="product-placeholder"
        aria-label={`Espaço reservado para fotografia: ${name}`}
      >
        <span className="placeholder-index">
          SRX / {String((index ?? 0) + 1).padStart(2, "0")}
        </span>
        <span className="placeholder-name">{name}</span>
        <span className="placeholder-caption">FOTOGRAFIA EM BREVE</span>
      </div>
    );
  return (
    <div className={`image-frame crop-${image.position ?? "none"}`}>
      <Image
        unoptimized
        src={image.src}
        alt={image.alt}
        width={1536}
        height={1024}
        loading="lazy"
      />
      {image.illustrative && (
        <span className="image-badge">Imagem demonstrativa</span>
      )}
    </div>
  );
}

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <article className="product-card">
      <ProductPhoto
        image={product.images[0]}
        name={product.name}
        index={index}
      />
      <div className="product-info">
        <div className="product-meta">
          <span>{product.category}</span>
          {product.customizable && <span>Personalizável</span>}
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-bottom">
          <span>
            {product.startingPrice !== undefined
              ? `A partir de ${new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.startingPrice)}`
              : "Consulte orçamento"}
          </span>
          {product.purchaseUrl ? (
            <a
              className="product-quote"
              href={product.purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar na Shopee
              <span className="sr-only">: {product.name}</span>
            </a>
          ) : (
            <QuoteLink
              className="product-quote"
              message={product.whatsappMessage}
            >
              Pedir orçamento<span className="sr-only">: </span>
              <span className="sr-only">{product.name} pelo WhatsApp</span>
            </QuoteLink>
          )}
        </div>
      </div>
    </article>
  );
}

export function Products() {
  return (
    <section id="produtos" className="section section-border">
      <div className="container">
        <div className="heading-row">
          <SectionHeading
            eyebrow="EXPLORE O CATÁLOGO"
            title="Produtos em destaque"
            text="Um ponto de partida para criar algo com a sua identidade."
          />
          <span className="catalog-note">
            Feitos sob encomenda
            <br />
            Personalização sob consulta
          </span>
        </div>
        <div className="product-grid">
          {[...products]
            .sort((a, b) => Number(b.featured) - Number(a.featured))
            .map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <section id="projetos" className="section portfolio-section">
      <div className="container">
        <SectionHeading
          eyebrow="FORMAS, IDEIAS E APLICAÇÕES"
          title="Projetos que já saíram da impressora"
          text="Este espaço receberá fotos dos nossos trabalhos. Por enquanto, explore exemplos ilustrativos de aplicações."
        />
        <Tabs defaultValue="Todos" className="portfolio-tabs">
          <TabsList
            className="portfolio-filters"
            aria-label="Filtrar projetos por categoria"
          >
            {projectFilters.map((filter) => (
              <TabsTrigger key={filter} value={filter}>
                {filter}
              </TabsTrigger>
            ))}
          </TabsList>
          {projectFilters.map((filter) => (
            <TabsContent key={filter} value={filter}>
              <div className="project-grid">
                {projects
                  .filter((p) => filter === "Todos" || p.category === filter)
                  .map((project) => (
                    <article className="project-card" key={project.id}>
                      <ProductPhoto
                        image={{
                          src: project.image,
                          alt: project.alt,
                          illustrative: project.example,
                          position: project.position,
                        }}
                        name={project.name}
                      />
                      <div className="project-caption">
                        <span>
                          {project.category}
                          {project.example && " · Exemplo ilustrativo"}
                        </span>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                      </div>
                    </article>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section section-border">
      <div className="container">
        <SectionHeading
          eyebrow="SIMPLES, DO COMEÇO AO FIM"
          title="Da sua ideia à peça pronta"
        />
        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CustomProjects() {
  return (
    <section className="section custom-section">
      <div className="container custom-layout">
        <div>
          <p className="eyebrow">
            <span />
            PROJETOS SOB MEDIDA
          </p>
          <h2>
            Não encontrou o que precisa?
            <br />
            <em>Podemos desenvolver.</em>
          </h2>
          <p>
            Nem todo projeto começa com um produto pronto. Se você precisa de um
            suporte, organizador, adaptação, peça personalizada ou tem apenas
            uma ideia, envie as informações para avaliarmos a possibilidade de
            fabricação.
          </p>
          <QuoteLink message="Olá! Tenho uma ideia/projeto e gostaria de verificar se é possível produzir em impressão 3D.">
            Enviar minha ideia
          </QuoteLink>
        </div>
        <div className="personalization">
          <span className="panel-caption">CADA DETALHE PODE SER SEU</span>
          <h3>
            Personalização <br />
            que faz sentido.
          </h3>
          <div className="personalization-options">
            {personalizations.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
          <p>
            As possibilidades de personalização dependem do produto e da análise
            de cada projeto.
          </p>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="section section-border">
      <div className="container about-layout">
        <div>
          <p className="eyebrow">
            <span />
            SOBRE A SRX 3D
          </p>
          <h2>
            Ideias em
            <br />
            <em>forma real.</em>
          </h2>
        </div>
        <div>
          <p className="about-text">{about}</p>
          <div className="about-values">
            <span>
              <Check size={16} />
              Fabricação personalizada
            </span>
            <span>
              <Check size={16} />
              Atendimento direto
            </span>
            <span>
              <Check size={16} />
              Atenção ao acabamento
            </span>
            <span>
              <Check size={16} />
              Orçamento antes da produção
            </span>
          </div>
          <p className="fdm-note">
            Na impressão 3D FDM, a peça ganha forma camada por camada.
            Dimensões, material e aplicação são avaliados em cada projeto.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="section faq-section">
      <div className="container faq-layout">
        <SectionHeading
          eyebrow="ANTES DE COMEÇAR"
          title="Alguma dúvida?"
          text="Entenda as possibilidades e saiba como pedir sua peça."
        />
        <Accordion type="single" collapsible className="faq-list">
          {faq.map((item, index) => (
            <AccordionItem value={`faq-${index}`} key={item.question}>
              <AccordionTrigger className="faq-question">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="faq-answer">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function Reviews() {
  if (!reviews.length) return null;
  return (
    <section className="section container">
      <h2>Quem já criou com a SRX 3D</h2>
      {reviews.map((review) => (
        <blockquote key={review.name}>
          <p>{review.quote}</p>
          <cite>{review.name}</cite>
        </blockquote>
      ))}
    </section>
  );
}

export function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">
            <span />
            VAMOS CONVERSAR
          </p>
          <h2>
            Vamos tirar sua
            <br />
            ideia do papel?
          </h2>
          <p>
            Conte o que você precisa. A próxima peça pode começar com uma
            conversa.
          </p>
          <QuoteLink className="button contact-button">
            Solicitar orçamento pelo WhatsApp
          </QuoteLink>
        </div>
        <div className="contact-details">
          <span>ATENDIMENTO DIRETO</span>
          <a
            className="phone"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            {business.whatsapp.replace(
              /^55(\d{2})(\d{5})(\d{4})$/,
              "($1) $2-$3",
            )}{" "}
            <ArrowUpRight size={22} />
          </a>
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Camera size={19} /> @printsrx
          </a>
          {business.location && <p>{business.location}</p>}
          {business.businessHours && <p>{business.businessHours}</p>}
          <a
            className="maps-link"
            href={business.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buscar PrintsRX no Google Maps <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Brand />
            <p>{business.slogan}</p>
          </div>
          <nav aria-label="Links do rodapé">
            {navigation.slice(1).map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <div className="social-links">
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <ArrowUpRight size={14} />
            </a>
            <a href={business.tiktok} target="_blank" rel="noopener noreferrer">
              TikTok <ArrowUpRight size={14} />
            </a>
            <a href={business.shopee} target="_blank" rel="noopener noreferrer">
              Shopee <ArrowUpRight size={14} />
            </a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              WhatsApp <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} SRX 3D. Todos os direitos reservados.
          </span>
          <span>Impressão 3D · Produtos personalizados</span>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
