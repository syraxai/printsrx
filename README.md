# SRX 3D

Site institucional e catálogo em português, com orçamento por WhatsApp. Next.js App Router, TypeScript e Tailwind CSS, com build nativo do Next.js para publicação na Netlify. A prévia local usa Vinext. Sem checkout, backend ou painel administrativo.

## Executar

Use Node.js 22.13 ou superior.

```sh
npm ci
npm run dev
```

Abra o endereço exibido pelo terminal (normalmente http://localhost:5173).

## Contatos, marca e SEO

Edite `src/config/business.ts`. O WhatsApp deve conter código do país, DDD e telefone, somente dígitos: `5571993549291`. As mensagens são codificadas por `src/lib/whatsapp.ts`.

Altere Instagram, TikTok e Shopee no mesmo arquivo. O Google Maps utiliza uma busca por PrintsRX até recebermos o link exato do estabelecimento. Região e horário ficam ocultos enquanto estiverem vazios. Configure `canonical` com o endereço público definitivo antes de indexar o site.

Para a logo, coloque o arquivo em `public/images/logo-srx3d.png` e altere `hasLogo` para `true`. O texto SRX 3D funciona como identificação temporária; não é uma nova logo definitiva.

## Adicionar produto

Edite `src/data/products.ts`. Cada produto possui `id`, `name`, `category`, `description`, `images`, `startingPrice` opcional, `customizable`, `featured` e `whatsappMessage`. Omitir preço exibe “Consulte orçamento”. Valores são em reais, sem strings formatadas. Não cadastre preços ou promessas sem confirmação.

Coloque fotografias em `public/images/products/` e referencie caminhos como `/images/products/placa-pix.webp`. Prefira WebP, proporção 4:3 e arquivos abaixo de 300 KB. Cada imagem inclui `src`, `alt` e `illustrative`. Use `illustrative: false` somente em fotografias reais e autorizadas dos produtos. Não remova os avisos de exemplo dos mockups.

## Portfólio e categorias

Edite `src/data/projects.ts` para adicionar projetos. Use uma categoria válida: Empresas, Personalizados, Decoração ou Funcionais. Salve as fotos em `public/images/projects/`. Marque `example: false` somente para um trabalho realmente realizado. Projetos de exemplo ficam claramente identificados.

As categorias estão em `src/data/categories.ts`; textos institucionais, perguntas frequentes e etapas estão em `src/data/content.ts`.

## Verificações e produção

```sh
npm run lint
npm run typecheck
npm run build
```

O script de build usa `next build` e produz a pasta `.next`, esperada pelo adaptador Next.js da Netlify. O arquivo `netlify.toml` define o comando `npm run build`, a pasta de publicação `.next` e Node.js 22. Conecte o repositório `syraxai/printsrx`, branch `main`, na Netlify. Novos commits acionam a publicação automática quando essa opção está habilitada. Para verificar a produção localmente após o build, execute `npm start`.

## Dados que faltam

- Logo oficial e fotografias reais dos produtos e projetos.
- Link exato do estabelecimento no Google Maps; o link atual é uma busca.
- Região atendida e horário de atendimento.
- Preços iniciais, se desejar exibi-los.
- Domínio/endereço público definitivo para canonical e sitemap.
- Avaliações reais, caso deseje ativar a seção atualmente oculta.

Os perfis sociais foram configurados com o usuário informado, @printsrx. A existência e conteúdo dos perfis não puderam ser confirmados automaticamente.
