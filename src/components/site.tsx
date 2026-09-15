"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Menu, X, MessageCircle } from "lucide-react";
import { business } from "@/src/config/business";
import { whatsappUrl } from "@/src/lib/whatsapp";
export const navigation = [
  ["Início", "inicio"],
  ["Produtos", "produtos"],
  ["Para empresas", "empresas"],
  ["Projetos", "projetos"],
  ["Como funciona", "como-funciona"],
  ["Sobre", "sobre"],
  ["Contato", "contato"],
];
export function QuoteLink({
  children = "Solicitar orçamento",
  message,
  className = "button",
}: {
  children?: React.ReactNode;
  message?: string;
  className?: string;
}) {
  const href = whatsappUrl(message);
  if (!href) return <span role="status">WhatsApp ainda não configurado.</span>;
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
export function Brand() {
  const [failed, setFailed] = useState(false);
  return (
    <a className="brand" href="#inicio" aria-label="SRX 3D — início">
      {business.hasLogo && !failed ? (
        <Image
          unoptimized
          src={business.logo}
          onError={() => setFailed(true)}
          alt="SRX 3D"
          width={116}
          height={34}
        />
      ) : (
        <span>
          SRX <b>3D</b>
        </span>
      )}
    </a>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <QuoteLink className="button header-quote" />
        <button
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="mobile-nav container"
          aria-label="Navegação no celular"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <QuoteLink />
        </nav>
      )}
    </header>
  );
}
export function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">
          <span />
          IMPRESSÃO 3D · PERSONALIZAÇÃO · SOLUÇÕES
        </p>
        <h1>
          Transformamos
          <br />
          ideias em <em>peças reais.</em>
        </h1>
        <h2>
          Impressão 3D personalizada para pessoas, empresas e projetos sob
          medida.
        </h2>
        <p>
          Da ideia à peça pronta, desenvolvemos soluções para decoração,
          presentes, negócios, organização e necessidades específicas.
        </p>
        <div className="hero-actions">
          <QuoteLink />
          <a className="text-link" href="#projetos">
            Conhecer nossos trabalhos <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="hero-note">
          <MessageCircle size={17} />
          <span>Atendimento direto. Orçamento antes da produção.</span>
        </div>
      </div>
      <figure className="hero-visual">
        <div className="visual-space">
          <Image
            unoptimized
            src="/images/hero-products.webp"
            width={1536}
            height={1024}
            alt="Mockup ilustrativo de vaso laranja, suporte para celular, porta-cartão e chaveiro com textura de impressão 3D"
            fetchPriority="high"
          />
          <span className="visual-index">DA IDEIA À PEÇA PRONTA</span>
        </div>
        <figcaption>
          Mockup ilustrativo · Não representa trabalhos realizados.
        </figcaption>
      </figure>
    </section>
  );
}
