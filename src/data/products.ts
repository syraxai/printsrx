export type ProductImage = {
  src: string;
  alt: string;
  illustrative: boolean;
  position?: string;
};
export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  images: ProductImage[];
  startingPrice?: number;
  customizable: boolean;
  featured: boolean;
  whatsappMessage: string;
};
const mockup = (alt: string, position: string): ProductImage => ({
  src: "/images/hero-products.webp",
  alt,
  illustrative: true,
  position,
});
export const products: Product[] = [
  {
    id: "placa-pix",
    name: "Placa Pix personalizada",
    category: "Para empresas",
    description:
      "Sua chave Pix em uma placa para o balcão, com a identidade do seu negócio.",
    images: [],
    customizable: true,
    featured: true,
    whatsappMessage:
      "Olá! Vi a Placa Pix personalizada no site da SRX 3D e gostaria de solicitar um orçamento.",
  },
  {
    id: "placa-qr",
    name: "Placa QR Code",
    category: "Para empresas",
    description:
      "Facilite o acesso ao cardápio, às redes sociais ou à avaliação no Google.",
    images: [],
    customizable: true,
    featured: true,
    whatsappMessage:
      "Olá! Gostaria de um orçamento para uma Placa QR Code personalizada.",
  },
  {
    id: "chaveiro",
    name: "Chaveiro personalizado",
    category: "Personalizados",
    description:
      "Um pequeno presente com nome, texto ou logo para levar sua marca junto.",
    images: [
      mockup(
        "Mockup ilustrativo de chaveiro laranja sem personalização",
        "key",
      ),
    ],
    customizable: true,
    featured: true,
    whatsappMessage:
      "Olá! Vi o Chaveiro personalizado no site da SRX 3D e gostaria de solicitar um orçamento.",
  },
  {
    id: "chaveiro-nfc",
    name: "Chaveiro NFC",
    category: "Personalizados",
    description:
      "Um chaveiro com NFC para compartilhar um link por aproximação em celulares compatíveis.",
    images: [],
    customizable: true,
    featured: true,
    whatsappMessage:
      "Olá! Gostaria de saber as opções e solicitar orçamento de um Chaveiro NFC.",
  },
  {
    id: "porta-cartao",
    name: "Porta-cartão",
    category: "Para empresas",
    description:
      "Organize seus cartões de visita e valorize a apresentação do seu balcão.",
    images: [mockup("Mockup ilustrativo de porta-cartão branco", "card")],
    customizable: true,
    featured: true,
    whatsappMessage:
      "Olá! Vi o Porta-cartão no site da SRX 3D e gostaria de solicitar um orçamento.",
  },
  {
    id: "display",
    name: "Display de preço",
    category: "Para empresas",
    description:
      "Destaque informações e preços dos seus produtos com um display sob medida.",
    images: [],
    customizable: true,
    featured: true,
    whatsappMessage:
      "Olá! Gostaria de solicitar um orçamento para um Display de preço.",
  },
  {
    id: "plaquinha",
    name: "Plaquinha de mesa",
    category: "Personalizados",
    description: "Identificação para sua mesa, recepção ou espaço de trabalho.",
    images: [],
    customizable: true,
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de um orçamento para uma Plaquinha de mesa personalizada.",
  },
  {
    id: "suporte-celular",
    name: "Suporte para celular",
    category: "Funcionais",
    description:
      "Uma peça prática para apoiar seu celular na mesa e organizar sua rotina.",
    images: [
      mockup("Mockup ilustrativo de suporte preto para celular", "phone"),
    ],
    customizable: true,
    featured: false,
    whatsappMessage:
      "Olá! Vi o Suporte para celular no site da SRX 3D e gostaria de solicitar um orçamento.",
  },
  {
    id: "porta-retrato",
    name: "Porta-retrato personalizado",
    category: "Decoração",
    description:
      "Dê uma forma especial às suas memórias, com detalhes escolhidos por você.",
    images: [],
    customizable: true,
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de um orçamento para um Porta-retrato personalizado.",
  },
  {
    id: "sob-medida",
    name: "Projeto sob medida",
    category: "Sob medida",
    description:
      "Envie sua ideia, medidas ou referência para avaliarmos uma solução específica.",
    images: [],
    customizable: true,
    featured: false,
    whatsappMessage:
      "Olá! Tenho uma ideia/projeto e gostaria de verificar se é possível produzir em impressão 3D.",
  },
];
