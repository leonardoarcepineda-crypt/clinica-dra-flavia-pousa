# Clínica Odontológica Dra. Flavia Pousa — Design System

Sistema de design da **Clínica Odontológica Dra. Flavia Pousa**: odontologia humanizada
(ortodontia, DTM) e harmonização facial, em torno de uma ideia — dissolver o medo do
consultório através de acolhimento, escuta e transparência.

> Missão: promover saúde bucal com excelência, acolhimento e ética, com tratamentos
> personalizados que transformam o sorriso e a autoestima.
> Visão: ser referência em odontologia humanizada na região.
> Valores: escuta ativa, atualização constante, integridade, transparência, respeito ao
> tempo do paciente, precisão com carinho.

A fundadora, Dra. Flavia Pousa, abriu a clínica para fugir do atendimento convencional e
frio — o cuidado deve ser "como o dedicado a um membro da família". Isso não é copy de
marketing: é a régua para toda decisão de design aqui. Se um componente, uma cor ou uma
frase parece "consultório tradicional intimidador", está errado.

---

## Fontes (sources)

Tudo neste sistema foi derivado de dois PDFs enviados pelo cliente. Não houve acesso a
código, Figma ou site publicado.

| Fonte | Caminho | O que forneceu |
|---|---|---|
| Kit de Identidade Visual | `uploads/Identidade visual clínica odontológica Dra Flavia Pousa.pdf` (cópia ASCII: `uploads/identidade-visual.pdf`) | Logo em 4 lockups, 3 propostas de paleta (A/B/C), tipografia aplicada |
| Cultura e História | `uploads/cultura e historia, flavia pousa (1).pdf` (cópia: `uploads/cultura-historia.pdf`) | Missão, visão, valores, história da fundadora, tom de voz |
| Briefing do cliente | mensagem de chat | Paleta escolhida (A), símbolo, tipografia, estilo visual, tom de voz, lista de "evitar" |

Os assets de logo em `assets/` foram **extraídos programaticamente** das imagens embutidas
no PDF do kit (recorte + remoção de fundo) — não foram redesenhados. Páginas brutas do PDF
ficaram em `scraps/` para referência.

**Paleta escolhida: A — "Clássica refinada"** (`#F8DDE1` / `#6E1423` / `#C9A24B`).
As paletas B ("Nude rosé") e C ("Vinho & Sálvia") foram descartadas; o verde-sálvia de C
sobrevive apenas como cor de estado `--sage-500`, nunca como cor de marca.

---

## CONTENT FUNDAMENTALS

### A voz

Conversa com alguém de confiança — não com "o dentista". Sofisticada, mas nunca fria.
O paciente é uma pessoa inteira, não um caso clínico.

**Pessoa gramatical.** "A gente" e "você". Primeira pessoa do plural coloquial
("a gente explica", "a gente cuida"), nunca "nós oferecemos" nem terceira pessoa
institucional ("a clínica dispõe de"). A Dra. Flavia aparece em primeira pessoa só em
textos assinados por ela.

**Português do Brasil**, informal-respeitoso. Contrações naturais ("pra", "tá") são
aceitáveis em redes sociais e WhatsApp; em site e documentos, português corrente sem
gíria.

**Casing.** Sentence case em títulos, botões e labels de formulário. CAIXA ALTA só em
dois lugares: o eyebrow (rótulo acima do título, com tracking de 0.20em) e o texto de
botão. Nunca CAIXA ALTA em frase inteira de conteúdo.

**Sem emoji.** Nem no site, nem em slides, nem em e-mail. Em redes sociais, no máximo um
por legenda e nunca no primeiro parágrafo. O tom vem das palavras, não dos ícones.

**Sem ponto de exclamação múltiplo, sem urgência fabricada.** Nada de "Vagas limitadas",
"Últimas unidades", "Agende JÁ". A marca não empurra.

### Exemplos

| Assim | Assim não |
|---|---|
| "Sem pressa. Na primeira conversa a gente só escuta e explica — você decide depois." | "Agende já sua avaliação odontológica multidisciplinar. Vagas limitadas!" |
| "Agendar avaliação" | "Enviar formulário" / "Submeter" |
| "Só usamos para confirmar o horário." | "Campo obrigatório." |
| "Confere pra gente? Faltou o @." | "E-mail inválido." |
| "O que está te incomodando?" | "Descreva a queixa principal." |
| "Alinhamento planejado no seu tempo." | "Tratamento ortodôntico com aparelho autoligado de última geração." |
| "Tudo certo! Sua avaliação está reservada." | "Solicitação processada com sucesso." |

### Regras de escrita

- **Frases curtas.** Uma ideia por frase. Parágrafo de 2–3 linhas no máximo.
- **Explique antes de nomear.** "Dor na articulação da mandíbula (DTM)", não "DTM".
- **Nunca prometa resultado.** "O que dá pra fazer", não "o sorriso perfeito".
- **Transparência é copy.** Preço, duração e o que está incluso aparecem escritos, não em
  asterisco.
- **Erros nunca culpam o paciente.** O texto de erro diz qual é o próximo passo e oferece
  uma saída ("Se preferir, chama no WhatsApp").
- **Ofereça a saída "ainda não sei".** Formulários não exigem certeza clínica de quem
  ainda não foi atendido.
- **Números** com espaço não-quebrável antes da unidade ("40 minutos", "R$ 250").
  Horários no formato "14h" / "14h30".

---

## VISUAL FOUNDATIONS

### Cor

Três cores de marca, uma família de neutros quentes, e nada de frio. **Azul e verde
clínicos estão banidos** — a única exceção é o sálvia `#7C8B6C`, herdado da paleta C e
usado só como "sucesso".

- **Rosa claro `#F8DDE1`** (`--blush-200`) — o fundo do acolhimento. Grandes áreas,
  chips, cards suaves. É a cor que mais aparece em superfície.
- **Vinho `#6E1423`** (`--wine-700`) — texto de destaque, CTA primário, uma superfície de
  ênfase por seção. É a autoridade calma da marca.
- **Dourado `#C9A24B`** (`--gold-500`) — **sempre detalhe, nunca massa**: o gradiente do
  símbolo, o anel de foco, o filete de 2–3px, um botão de herói por tela. Nunca texto
  corrido em dourado.

Proporção alvo por tela: ~70% neutro claro (ivory/sand/white), ~20% rosa, ~7% vinho,
~3% dourado.

Neutros são **quentes** (`--sand-*`, `--stone-*`, `--ink #2E2422`). Nenhum cinza puro,
nenhum `#000`. Texto corpo é `--stone-700 #574B48`, não preto.

### Tipografia

Duas famílias. Substituições do Google Fonts (o cliente não enviou arquivos — ver
*Caveats*):

- **Cormorant Garamond** — display serifado, peso 300/400. Títulos e a assinatura em
  itálico "Dra. Flavia Pousa". Tracking negativo (-0.012em) em tamanhos grandes.
- **Poppins** — sans geométrica, peso 300/400/500. Corpo, labels, eyebrows, botões.
  Corpo em **Light (300)** — é o que dá a leveza; nunca 400 para parágrafos longos.

O contraste do sistema é o salto: display de 48–82px ao lado de corpo de 16px, sem
tamanhos intermediários no meio. Medida máxima de linha: 68 caracteres. Entrelinha do
corpo generosa (1.72).

Hierarquia canônica de uma seção: **eyebrow dourado em caixa alta espaçada → título
serifado light → parágrafo Poppins light**.

### Espaço

Base 4px. A régua real do sistema é o **espaço em branco**: seções respiram 104px
verticais no desktop, cards têm 32–40px de padding interno, e nunca se aperta conteúdo
para caber. Se algo não cabe, corta-se conteúdo — não o espaço.

Container: 1200px máximo; coluna de leitura 720px.

### Cantos e bordas

Nada de canto vivo em lugar nenhum. Cards 20px, campos 14px, controles são **pílula
completa** (999px), imagens 28px. Bordas são hairline de 1px em `--sand-200`; não existe
borda grossa, nem borda colorida só de um lado (exceto o filete dourado de 3px do
`goldEdge`, que marca um item recomendado por lista — no máximo um).

### Sombras

Sombras **tingidas de vinho** (`rgba(110,20,35,…)`), nunca pretas, sempre difusas e de
baixa opacidade (5–12%). Elas sugerem profundidade de papel, não de interface.
`--shadow-gold` existe só para o botão dourado. Não há sombra interna (inset) além do
hairline `--shadow-inset-hairline`.

### Cards

Fundo branco (ou rosa-50), hairline `--sand-200`, raio 20px, `--shadow-sm` em repouso.
Card clicável ganha `interactive`: sobe 3px e vai para `--shadow-lg` em 260ms. Nunca
escala, nunca gira, nunca ganha borda colorida no hover.

### Fundos, imagens e texturas

- Fundo padrão de página: **ivory `#FDFBFA`**, não branco puro.
- Seções alternam entre ivory e `--gradient-blush` (rosa muito suave, vertical).
- **Sem padrões repetidos, sem texturas, sem ruído/grain, sem ilustrações desenhadas.**
  O kit não fornece nenhum — e inventar contraria o minimalismo da marca.
- **Fotografia**: luz natural quente, tons de pele reais, pouca saturação, sem flash
  clínico. Preferência por enquadramentos de gesto e olhar (mão, sorriso, conversa) em
  vez de "equipamento". Sem stock de dentista de jaleco apontando para raio-X.
  O kit não incluiu fotos: **todas as imagens deste sistema são placeholders declarados**.
- Imagem full-bleed só no herói. Nas demais seções, imagem em card com raio 28px.
- Sobre foto com texto, use `--gradient-veil` (véu ivory de baixo para cima) — nunca uma
  cápsula escura sólida, nunca um overlay preto.

### Transparência e blur

Usados com parcimônia: só no scrim de modal (`--surface-overlay` + `--blur-scrim`, 3px) e
na barra de navegação fixa quando rola (fundo ivory a 88% + `--blur-veil`). Em nenhum
outro lugar. Nada de "glassmorphism".

### Movimento

Fade e deslocamento curto. Nunca bounce, nunca escala, nunca spring.
Curva única: `cubic-bezier(.22,.61,.36,1)` — sai rápido, chega devagar.
Durações: 160ms (controles), 260ms (cards, painéis), 420ms (entrada de página).
Entrada de seção: opacidade 0→1 + `translateY(12px→0)`. Respeita `prefers-reduced-motion`.

### Estados

- **Hover** (botão): fundo um passo mais escuro (`wine-700 → wine-600`) + `translateY(-1px)`
  + sombra um degrau acima. O dourado usa `brightness(1.06)` em vez de troca de cor.
- **Press**: volta a `translateY(0)` e escurece (`wine-800`). Nunca `scale(0.97)`.
- **Focus**: anel dourado de 2px com halo `rgba(201,162,75,.30)` de 4px. Sempre visível,
  nunca removido.
- **Disabled**: opacidade 0.45, cursor `not-allowed`, sem mudança de cor.
- **Selected** (Tag/Tabs): preenchimento vinho, ou filete dourado de 2px sob a aba ativa.

### Layout

- Header fixo no topo com fundo translúcido ao rolar; altura 76px desktop / 64px mobile.
- CTA de WhatsApp fixo no canto inferior direito no mobile (56px, pílula).
- Grid de 12 colunas, gutter 24px.
- Alinhamento: títulos de seção centrados nas páginas institucionais, à esquerda em telas
  de tarefa (agendamento, formulários).

---

## ICONOGRAPHY

**O kit de identidade não inclui nenhum conjunto de ícones.** Não foi encontrado icon
font, sprite SVG nem PNGs de ícone nos PDFs — apenas o símbolo do dente.

- **Substituição declarada:** usamos **Lucide** (`lucide-static@0.454.0`, via CDN unpkg),
  por ser o conjunto de traço fino uniforme mais próximo do desenho do símbolo — linha
  contínua, cantos arredondados, sem preenchimento. **Peça ao cliente um conjunto próprio
  se houver.**
- Os ícones são renderizados pelo componente `Icon` como **CSS mask** com
  `background-color: currentColor`, então herdam a cor do texto e podem receber o vinho ou
  o dourado sem editar SVG.
- Tamanhos: 16px inline, 20px padrão de UI, 24px dentro de botão, 28–32px como glifo de
  destaque de seção (nesse caso em `--gold-600`).
- **Nunca**: emoji como ícone, caractere unicode (✓, ★, →) como ícone, ícone preenchido,
  ícone com duas cores, ícone desenhado à mão em SVG.
- Setas e chevrons são sempre Lucide (`arrow-right`, `chevron-down`), nunca "›" ou "→".
- O **símbolo da marca** (`assets/logo-symbol.png`) não é um ícone: não use dentro de
  botões, listas ou como bullet. Ele é favicon, avatar social e marca d'água (a 6–8% de
  opacidade, no máximo).

Glifos recorrentes da clínica: `calendar-heart`, `message-circle`, `phone`, `map-pin`,
`clock`, `smile`, `sparkles`, `shield-check`, `heart-handshake`, `stethoscope`.

---

## Índice

### Raiz
- `styles.css` — ponto de entrada único (só `@import`s). É o arquivo que projetos
  consumidores linkam.
- `thumbnail.html` — tile do sistema.
- `SKILL.md` — wrapper para uso como Agent Skill.
- `readme.md` — este arquivo.

### `tokens/`
`fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius.css` ·
`elevation.css` · `motion.css` · `base.css` (reset + elementos base + estilos de link)

### `assets/`
`logo-horizontal.png` · `logo-vertical.png` · `logo-symbol.png` · `logo-symbol-mono.png`
(todos extraídos do PDF original, fundo transparente)

### `components/`
| Grupo | Componentes |
|---|---|
| `brand/` | **Logo**, **Icon** |
| `core/` | **Button**, **IconButton**, **Card**, **Badge**, **Tag**, **Divider** |
| `forms/` | **Field**, **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch** |
| `feedback/` | **Dialog**, **Toast**, **Tooltip** |
| `navigation/` | **Tabs** |

Cada componente tem `.jsx`, `.d.ts` (contrato de props) e `.prompt.md` (quando usar).

**Intentional additions** — o cliente não forneceu biblioteca de componentes, então o
conjunto padrão foi autorado do zero para as necessidades da clínica. Duas adições não
padrão, ambas justificadas:
- `Logo` — encapsula os arquivos reais do lockup para que ninguém redesenhe o símbolo.
- `Icon` — wrapper do conjunto substituto (Lucide) para que a troca por um conjunto
  licenciado seja feita em um único arquivo.

### `guidelines/`
23 cards de fundação (Colors, Type, Spacing, Brand) exibidos na aba Design System.

### `ui_kits/`
- `site/` — site institucional da clínica (Home, Serviços, A Clínica, Agendamento)
- `social/` — templates de Instagram (feed, carrossel, story)

### `slides/`
Modelos de apresentação no estilo do kit de identidade (capa, seção, grade de cards,
citação).

---

## Caveats

1. **Fontes substituídas.** Nenhum arquivo de fonte foi enviado. Cormorant Garamond e
   Poppins são as correspondências mais próximas do que aparece renderizado no PDF, mas
   não são necessariamente as fontes originais do projeto de identidade. Envie os
   arquivos (ou o nome das famílias) para trocarmos.
2. **Ícones substituídos.** Lucide, via CDN. Ver ICONOGRAPHY.
3. **Sem fotografia.** Nenhuma imagem além do logo foi fornecida. Todas as áreas de
   imagem nos UI kits são placeholders rotulados.
4. **Sem site/app existente.** Os UI kits são a primeira materialização da marca em tela,
   construídos a partir das fundações — não são recriação de um produto existente.
