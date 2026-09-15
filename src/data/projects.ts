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
    image: "/images/hero-products.webp",
    alt: "Mockup de porta-cartão branco",
    position: "card",
    example: true,
  },
  {
    id: "ex-chaveiro",
    name: "Um detalhe com sua identidade",
    category: "Personalizados",
    description: "Referência ilustrativa para personalizar um chaveiro.",
    image: "/images/hero-products.webp",
    alt: "Mockup de chaveiro laranja",
    position: "key",
    example: true,
  },
  {
    id: "ex-vaso",
    name: "Texturas para decorar",
    category: "Decoração",
    description:
      "Exemplo ilustrativo de forma e textura em uma peça decorativa.",
    image: "/images/hero-products.webp",
    alt: "Mockup de vaso laranja com textura",
    position: "vase",
    example: true,
  },
  {
    id: "ex-suporte",
    name: "Funcionalidade na mesa",
    category: "Funcionais",
    description: "Referência de suporte para organizar o uso do celular.",
    image: "/images/hero-products.webp",
    alt: "Mockup de suporte preto para celular",
    position: "phone",
    example: true,
  },
];
