export const projectFilters = [
  "Todos",
  "Empresas",
  "Personalizados",
  "Decoração",
  "Funcionais",
] as const;
export type ProjectCategory = Exclude<(typeof projectFilters)[number], "Todos">;
export type Project = {
  id: string;
  name: string;
  category: ProjectCategory;
  description: string;
  image: string;
  alt: string;
  position?: string;
  example: boolean;
};
export const projects: Project[] = [
  {
    id: "ex-balcao",
    name: "Organização de balcão",
    category: "Empresas",
    description: "Exemplo de aplicação de um porta-cartão para empresas.",
    image: "/images/products/porta-cartao-catalogo.webp", alt: "Porta-cartão branco com figuras de gato e cachorro", position: "generated",
    example: true,
  },
  {
    id: "ex-chaveiro",
    name: "Um detalhe com sua identidade",
    category: "Personalizados",
    description: "Referência ilustrativa para personalizar um chaveiro.",
    image: "/images/products/chaveiro-nfc-catalogo.webp", alt: "Chaveiros com Instagram e NFC", position: "generated",
    example: true,
  },
  {
    id: "ex-vaso",
    name: "Luz e formas para decorar",
    category: "Decoração",
    description:
      "Referência demonstrativa de luminária com blocos geométricos.",
    image: "/images/products/luminaria-cubo-demonstrativo.webp",
    alt: "Luminária cubo geométrico iluminada",
    position: "generated",
    example: true,
  },
  {
    id: "ex-suporte",
    name: "Funcionalidade na mesa",
    category: "Funcionais",
    description: "Referência de suporte para organizar o uso do celular.",
    image: "/images/products/suporte-celular-catalogo.webp", alt: "Suporte ajustável para celular com engrenagens", position: "generated",
    example: true,
  },
];
