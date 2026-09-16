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
    <section className="hero container pix-hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <span />
          EM DESTAQUE · PLACA PIX PERSONALIZADA
        </p>
        <h1>
          Seu negócio,
          <br />
          pronto para <em>receber com Pix.</em>
        </h1>
        <h2>
          Pix e redes sociais em uma placa com a identidade do seu negócio.
        </h2>
        <p>
          Dê destaque ao seu balcão com uma placa personalizada em impressão 3D. Compre pela Shopee ou fale conosco pelo WhatsApp para escolher os detalhes.
        </p>
        <div className="hero-actions">
          <QuoteLink message="Olá! Vi a Placa Pix em destaque no site da SRX 3D e quero comprar uma placa personalizada. Pode me informar as opções e o valor?">Pedir pelo WhatsApp</QuoteLink>
          <a className="button button-shopee" href="https://shopee.com.br/product/323780327/23699675983/" target="_blank" rel="noopener noreferrer">Comprar na Shopee <ArrowUpRight size={17} /></a>
          <a className="text-link" href="#produtos">Ver catálogo completo <ArrowUpRight size={17} /></a>
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
            src="/images/products/placa-pix-real.webp"
            width={941}
            height={1672}
            alt="Placa Pix PRINTSRX preta e amarela com QR Codes de Pix, WhatsApp e Instagram"
            fetchPriority="high"
          />
          <span className="visual-index">PERSONALIZADA PARA O SEU NEGÓCIO</span>
        </div>
        <figcaption>
          Foto do produto · Personalização sob consulta.
        </figcaption>
      </figure>
    </section>
  );
}
