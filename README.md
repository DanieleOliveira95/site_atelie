yarn dev

## site_atelie

Landing page do ateliê construída com Next.js + TypeScript para apresentar produtos, galeria e contato.

### Status
- Em desenvolvimento — branch: `feat/ux-design`

### Preview
- Adicione capturas em `img/` e substitua o link abaixo (opcional):
	![Preview](/img/preview.png)

### Principais funcionalidades
- Página inicial responsiva
- Galeria de produtos com visualização de imagens
- Página de contato com botão para WhatsApp
- Componentes reutilizáveis (navbar, banner, gallery)
- Estilização com Tailwind CSS

### Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Node.js >= 16

### Pré-requisitos
- Node.js (versão compatível com o projeto)
- npm, pnpm ou yarn

### Instalação
1. Clone o repositório:
```bash
git clone <repo-url>
cd site_atelie
```
2. Instale dependências:
```bash
npm install
# ou
pnpm install
# ou
yarn
```

### Executar localmente
- Desenvolvimento:
```bash
npm run dev
```
- Build e produção local:
```bash
npm run build
npm run start
```

### Scripts úteis (verifique o `package.json`)
- dev — inicia em modo desenvolvimento
- build — gera build de produção
- start — executa build em produção
- lint — executa ESLint
- format — executa Prettier (se configurado)

### Estrutura do projeto (resumo)
- `src/app/` — rotas e páginas (App Router)
- `src/components/` — componentes (navbar, gallery, banner, whatsappButton)
- `public/` — assets públicos
- `img/` — fotos dos produtos
- `minha-landing-page/` — (subprojeto / variante) — 

### Variáveis de ambiente
Crie um `.env.local` (não commitar). Exemplos:
```
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
```
### Deploy
- Recomendado: Vercel — conectar o repositório e usar `npm run build`.
- Configure variáveis de ambiente no painel do Vercel.

### Como contribuir
1. Abra uma issue descrevendo a mudança.
2. Crie uma branch `feat/<descricao>` ou `fix/<descricao>`.
3. Abra um pull request referenciando a issue.
4. Rode `npm run lint` e `npm run format` antes do PR.


### Contato
- Autor: Daniele Oliveira
- GitHub: @DanieleOliveira95


---


