# Especificação de Layout: Método Perfect

Esta é a especificação exaustiva para a landing page. Nenhuma simplificação é permitida durante o desenvolvimento.

---

## Linguagem Visual Global

- **Paleta de Cores**:
  - Primária: `#84003b` (Rubi Profundo)
  - Primária Escura: `#4a0021`
  - Acento/Brilho: `#5febe6` (Ciano Glow)
  - Fundo: `#FAFAFA`
  - Texto: `#1a1a1a` (Dark) / `#ffffff` (Light)
- **Tipografia**:
  - Heading: `Philosopher`, serif (Elegante, Fluida)
  - Body: `Outfit`, sans-serif (Moderna, Limpa)
- **Espaçamento**: Seções com `padding: 100px 0` desktop, `60px 0` mobile.

---

## Seção 1: Hero (A Arte de Criar Essências)

### Arquetipo e Constraints
- Arquetipo: `Hero Dominante` + `Parallax Layers`
- Constraints: `Headline >150px` (Tipografia), `Parallax` (Midia), `Mouse Parallax` (Interação), `Scroll Progress` (Movimento)
- Justificativa: O Hero precisa ser imersivo e premium. O efeito de parallax e o perfume transparente criam uma experiência sensorial imediata.

### Conteúdo
- Eyebrow: "A Arte de Criar Essências"
- Headline: "Transforme o Poder da Natureza em sua Independência"
- Subheadline: "Descubra como criar fragrâncias que curam e construa um negócio lucrativo com sua própria linha de perfumes naturais."
- CTA: "Quero Começar Agora"

### Layout
- Grid 2 colunas: Esquerda (Conteúdo), Direita (Visual).
- Hero height: `min-height: 100vh`.

### Elementos Visuais Específicos
- **Perfume Transparente (O PEDIDO)**: Um frasco de perfume em PNG transparente posicionado no fundo do Hero (`position: absolute; right: 10%; bottom: 10%; z-index: 1`).
- **Efeito Scroll**: Ao scrollar para baixo, o perfume deve aumentar de opacidade (de 0.1 para 0.4) e subir levemente (`translateY`). Use `animation-timeline: scroll()` no CSS.
- **Parallax**: A imagem principal do Hero (redonda orgânica) deve mover-se a 0.5x da velocidade do scroll. As partículas/sparks atuais devem flutuar com `mouse parallax`.

---

## Seção 2: O Desafio

### Arquetipo e Constraints
- Arquetipo: `Single Focus`
- Constraints: `High Contrast` (Cor), `Image with Overlay` (Midia)
- Justificativa: Foco total na dor/desafio para criar conexão emocional.

### Conteúdo
- Título: "O Desafio do Artesanato de Valor"
- Texto: "O segredo não está apenas no talento, mas em um método que une tradição ancestral e ciência emocional..."
- Citação: "O saber não se separa do sentir."

---

## Seção 3: O Método (Bento Box)

### Arquetipo e Constraints
- Arquetipo: `Bento Box`
- Constraints: `Grid Assimetrico` (Layout), `Hover Lift` (Interação)
- Justificativa: Organiza múltiplos pilares do método de forma moderna e visualmente rica.

### Conteúdo
- Cards com os itens:
  1. "Criação de perfumes que impactam o emocional profundo."
  2. "Domínio da conexão entre olfato, memória e personalidade."
  3. "Ciência das plantas: tinturas, óleos essenciais e macerados."
  4. "Desenvolvimento de produtos com alta fixação e valor de mercado."

---

## Seção 4: O Que Você Vai Aprender (Carrossel)

### Arquetipo e Constraints
- Arquetipo: `Carousel 3D` (ou `Infinite Carousel`)
- Constraints: `Carousel Standard` (Estrutura), `Stagger` (Movimento)
- Justificativa: Mostrar a variedade do aprendizado de forma dinâmica e interativa.

### Layout do Carrossel (O PEDIDO)
- **Estrutura**: Swiper.js ou Glide.js. Cards com imagens de alta qualidade (baseadas na Unsplash).
- **Conteúdo dos Cards**:
  - Bases da Perfumaria.
  - Psicologia do Olfato.
  - Técnicas Exclusivas (Fruit Fire).
  - Storytelling de Vendas.
- **Interação**: Navegação por arraste (drag) e setas elegantes customizadas.

---

## Seção 5: Sobre a Mentora (Palmira Margarida)

### Arquetipo e Constraints
- Arquetipo: `Split Horizontal` (com imagem sobreposta)
- Constraints: `Text on Path` (Tipografia), `Glassmorphism` (Efeitos)
- Justificativa: Transmite autoridade e sabedoria através de um layout sofisticado.

---

## Seção 6: CTA Final

### Arquetipo e Constraints
- Arquetipo: `Hero Dominante` (Variação Fim)
- Constraints: `Color Blocking` (Cor), `Pulse Loop` (Movimento no CTA)
- Justificativa: Fechar com energia e foco total na conversão.

---

## Especificações Técnicas de Implementação

- **AOS**: `data-aos="fade-up"` em todas as seções (excepto Hero). `disableMutationObserver: true`.
- **Imagens**: Utilizar Netlify CDN: `/.netlify/images?url=...&w=800&q=80`.
- **Perfume no Hero**: PNG transparente com `mix-blend-mode: soft-light` ou `overlay` para efeito sutil.
- **Animação Parallax**: CSS Nativo `view-timeline` ou GSAP para máxima performance.
- **Carrossel**: Carregar apenas quando visível (IntersectionObserver).
