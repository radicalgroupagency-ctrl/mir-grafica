# Arquitetura e Estrutura: MIR Gráfica

## Visão Geral
Este documento cobre a arquitetura geral do frontend React construído para MIR Gráfica.

## Pilha de Tecnologias
- React 18
- Vite
- TypeScript
- Tailwind CSS
- Shadcn UI (Componentes acessíveis de base)

## Estrutura de Diretórios
- `/src/components` - Componentes fracionados baseados no HTML Oficial.
- `/src/data` - Concentrador de dados como o `mockData.ts` (Textos e Imagens da Landign Page).
- `/src/lib` - Utilitários, como o merge de classes para o Tailwind (cn helper).
- `/src/index.css` - CSS global contendo:
  - Variáveis do Tailwind CSS
  - Tokens de tema Dark e Light baseados na especificação do Design (ver `DESIGN.md`)
  - Utilitários globais de marcação/animação (.animate-marquee, .text-outline)

## Componentes da Landing Page
O Ponto principal da aplicação (`App.tsx`) renderiza os seguintes componentes sequencialmente:
1. `Navigation`: Cabeçalho global com menu de scrolling
2. `Hero`: Destaque de capa
3. `FeaturesBar`: Seção rápida de vantagens
4. `AboutUs`: Seção de sobre a empresa e apresentação 
5. `Services`: Grid com cards dos serviços oferecidos
6. `ConsumablesB2B`: Combinação das áreas "Consumíveis" e "Pedido em Massa"
7. `Portfolio`: Visualização paralela dos trabalhos realizados
8. `Footer`: Seção final com links e formulário

## Práticas e Regras de Manutenção
1. Todo o texto deverá ser editado e manipulado através de `src/data/mockData.ts`. NUNCA modifique conteúdo diretamente nos arquivos TSX.
2. Toda a regra visual que extrapole o modelo utilitário do Tailwind deverá ser configurada em `index.css` (para escopo global) ou no atributo `extend` em `tailwind.config.ts`. 
3. Toda criação/alteração de sub-páginas deve reaproveitar os contêineres e larguras definidas nos componentes base (e.g `max-w-7xl mx-auto px-6`).
