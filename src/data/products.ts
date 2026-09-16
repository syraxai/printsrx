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
export const products: Product[] = [
  {
    id: "placa-pix",
    name: "Placa Pix personalizada",
    category: "Para empresas",
    description:
      "Sua chave Pix em uma placa para o balcão, com a identidade do seu negócio.",
    images: [{src: "/images/products/placa-pix-real.webp", alt: "Placa Pix PRINTSRX preta e amarela com QR Codes de WhatsApp, Pix e Instagram", illustrative: false, position: "pix"}],
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
    images: [{ src: "/images/products/placa-qr-catalogo.webp", alt: "Placa de cardápio com QR Code preta e branca", illustrative: true, position: "generated" }],
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
    images: [{"src": "/images/products/chaveiro-demonstrativo.webp", "alt": "Imagem demonstrativa: Chaveiro personalizado", "illustrative": true, "position": "generated"}],
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
    images: [{ src: "/images/products/chaveiro-nfc-catalogo.webp", alt: "Chaveiros laranja com símbolos de Instagram e NFC", illustrative: true, position: "generated" }],
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
    images: [{ src: "/images/products/porta-cartao-catalogo.webp", alt: "Porta-cartão branco com figuras de gato e cachorro", illustrative: true, position: "generated" }],
    customizable: true,
    featured: true,
    whatsappMessage:
      "Olá! Vi o Porta-cartão no site da SRX 3D e gostaria de solicitar um orçamento.",
  },
  {
    id: "display",
    name: "Display de preço",
    category: "Para empresas",
    description: "Destaque os preços dos seus produtos. Os valores na imagem são exemplos, não o preço desta peça.",
    images: [{"src": "/images/products/display-demonstrativo.webp", "alt": "Imagem demonstrativa: Display de preço", "illustrative": true, "position": "generated"}],
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
    images: [{ src: "/images/products/plaquinha-catalogo.webp", alt: "Plaquinha de mesa marrom com detalhes dourados", illustrative: true, position: "generated" }],
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
    images: [{ src: "/images/products/suporte-celular-catalogo.webp", alt: "Suporte para celular com engrenagens e ajuste de inclinação", illustrative: true, position: "generated" }],
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
    images: [{ src: "/images/products/porta-retrato-aprimorado.webp", alt: "Imagem aprimorada de porta-retratos brancos personalizados com nomes em rosa e figuras douradas", illustrative: true, position: "generated" }],
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
    images: [{ src: "/images/products/sob-medida-illustrative.webp", alt: "Mockup ilustrativo: Exemplos de peças funcionais sob medida", illustrative: true, position: "generated" }],
    customizable: true,
    featured: false,
    whatsappMessage:
      "Olá! Tenho uma ideia/projeto e gostaria de verificar se é possível produzir em impressão 3D.",
  },

  { id: "suporte-dobravel", name: "Suporte dobrável para celular", category: "Funcionais", description: "Um apoio compacto para o celular, com opção de chaveiro para levar com você.", images: [{ src: "/images/products/suporte-dobravel-catalogo.webp", alt: "Suportes dobráveis para celular em várias cores", illustrative: true, position: "generated" }], customizable: true, featured: false, whatsappMessage: "Olá! Gostaria de um orçamento para um suporte dobrável para celular." },
{
  "id": "luminaria-cubo",
  "name": "Luminária cubo geométrico",
  "category": "Decoração",
  "description": "Referência de luminária com blocos geométricos e luz entre os relevos. Consulte opções e viabilidade pelo WhatsApp.",
  "images": [
    {
      "src": "/images/products/luminaria-cubo-demonstrativo.webp",
      "alt": "Imagem demonstrativa: Luminária cubo geométrico",
      "illustrative": true,
      "position": "generated"
    }
  ],
  "customizable": true,
  "featured": false,
  "whatsappMessage": "Olá! Vi a referência Luminária cubo geométrico no site da SRX 3D e gostaria de consultar opções e orçamento."
},
{
  "id": "luminaria-mesa",
  "name": "Luminária de mesa",
  "category": "Decoração",
  "description": "Referência de luminária com linhas curvas para compor seu ambiente. Consulte opções e viabilidade pelo WhatsApp.",
  "images": [
    {
      "src": "/images/products/luminaria-mesa-demonstrativo.webp",
      "alt": "Imagem demonstrativa: Luminária de mesa",
      "illustrative": true,
      "position": "generated"
    }
  ],
  "customizable": true,
  "featured": false,
  "whatsappMessage": "Olá! Vi a referência Luminária de mesa no site da SRX 3D e gostaria de consultar opções e orçamento."
},
{
  "id": "luminaria-bonsai",
  "name": "Bonsai decorativo iluminado",
  "category": "Decoração",
  "description": "Referência de árvore decorativa com base iluminada. Consulte opções e viabilidade pelo WhatsApp.",
  "images": [
    {
      "src": "/images/products/luminaria-bonsai-demonstrativo.webp",
      "alt": "Imagem demonstrativa: Bonsai decorativo iluminado",
      "illustrative": true,
      "position": "generated"
    }
  ],
  "customizable": true,
  "featured": false,
  "whatsappMessage": "Olá! Vi a referência Bonsai decorativo iluminado no site da SRX 3D e gostaria de consultar opções e orçamento."
},
{
  "id": "escultura-encontro",
  "name": "Escultura Encontro",
  "category": "Decoração",
  "description": "Referência de escultura com dois rostos e formas delicadas. Consulte opções e viabilidade pelo WhatsApp.",
  "images": [
    {
      "src": "/images/products/escultura-encontro-demonstrativo.webp",
      "alt": "Imagem demonstrativa: Escultura Encontro",
      "illustrative": true,
      "position": "generated"
    }
  ],
  "customizable": true,
  "featured": false,
  "whatsappMessage": "Olá! Vi a referência Escultura Encontro no site da SRX 3D e gostaria de consultar opções e orçamento."
},
{
  "id": "escultura-lua",
  "name": "Escultura Balanço na Lua",
  "category": "Decoração",
  "description": "Referência de escultura de uma figura em um balanço ligado à lua. Consulte opções e viabilidade pelo WhatsApp.",
  "images": [
    {
      "src": "/images/products/escultura-lua-demonstrativo.webp",
      "alt": "Imagem demonstrativa: Escultura Balanço na Lua",
      "illustrative": true,
      "position": "generated"
    }
  ],
  "customizable": true,
  "featured": false,
  "whatsappMessage": "Olá! Vi a referência Escultura Balanço na Lua no site da SRX 3D e gostaria de consultar opções e orçamento."
},
];
