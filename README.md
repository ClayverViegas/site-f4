# F4 Consultoria e Treinamentos — Site institucional

Site institucional da F4 Consultoria e Treinamentos, especializada em
Segurança e Saúde no Trabalho (SST).

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- GSAP + ScrollTrigger
- lucide-react

## Rodando localmente

```bash
npm install
npm run dev
```

O dev server sobe em <http://localhost:5173>.

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── components/     Header, Hero, About, Services, WhyF4, ProgramSection,
│                   FinalCTA, Footer, Logo, ServiceCard, WhatsAppFab
├── data/           services.ts (dados dos cards) e contatos
├── hooks/          useGsap.ts (registro do ScrollTrigger + helper de layout effect)
├── App.tsx
├── main.tsx
└── index.css       tokens de cor, componentes utilitários e reset

public/
├── videos/epi.mp4          vídeo do hero
├── images/logo-f4-*.png    logos oficiais
├── images/capacete-f4.jpg  seção Sobre
├── images/trabalhador-f4.jpg destaque em Serviços
└── images/obra.jpg         seção Por que escolher a F4 / fundo do CTA
```
