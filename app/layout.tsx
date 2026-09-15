import type { Metadata } from "next";
import { business } from "@/src/config/business";
import "./globals.css";
const title = "SRX 3D | Impressão 3D e Produtos Personalizados";
const description =
  "Impressão 3D personalizada, produtos para empresas, presentes, decoração e desenvolvimento de peças sob medida. Conheça a SRX 3D e solicite seu orçamento.";
export const metadata: Metadata = {
  title,
  description,
  ...(business.canonical
    ? {
        metadataBase: new URL(business.canonical),
        alternates: { canonical: business.canonical },
      }
    : {}),
  openGraph: {
    title,
    description,
    siteName: business.name,
    locale: "pt_BR",
    type: "website",
    ...(business.canonical ? { url: business.canonical } : {}),
  },
  twitter: { card: "summary", title, description },
  robots: {
    index: Boolean(business.canonical),
    follow: Boolean(business.canonical),
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
