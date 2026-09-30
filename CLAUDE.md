# Protótipo: site do Caminhos da Neve Clube de Tiro

Protótipo da home do **Clube Recreativo Caça e Tiro Caminhos da Neve** (nome curto: Caminhos da Neve Clube de Tiro), clube de tiro esportivo em **São Joaquim, SC**, fundado em 2016. O clube fica **só em São Joaquim**: não citar Lages nem outras cidades como sede ou local de provas.

Todo o conteúdo é em português do Brasil.

## Arquivos

- `index.html`: a home, página única com âncoras.
- `css/style.css`: todo o estilo, com os tokens em `:root` no topo.
- `js/main.js`: menu mobile, contagem de dias até o próximo evento (`data-countdown`) e destaque no menu da seção visível.
- `img/`: todas as fotos são locais e já otimizadas.
  - Fotos reais do clube:
    - `sede.jpg`: 1200×960, recortada em 5:4.
    - `pista-de-ar.jpg`: 900×1200, retrato.
    - `tiro-ao-prato.jpg`: 1024×768.
  - Fotos de banco (Unsplash, licença de uso comercial livre, sem crédito obrigatório). Não mostram o clube:
    - `hero.jpg`: 1920×1080, de William Isted, espelhada para a arma ficar à direita, longe do título.
    - `noticia-*.jpg`: as três fotos das notícias.
    - `cartaz-*.jpg`: fundos dos cartazes das competições.
    - `galeria-*.jpg`: as seis fotos da galeria, a maioria paisagens de serra com araucárias.
- `_v1/`: versão antiga, feita em Tailwind com outras fontes. Serve só de referência: não editar nem copiar estilos dela.

O site é estático: HTML, CSS e JS puros, sem build, framework ou dependências. Para ver, basta abrir o `index.html` no navegador.

## Ordem da home

1. **Hero** (`#inicio`): foto, nome em caixa alta condensada e texto de apoio. Na base, a faixa do próximo evento (`#proximo-evento`).
   - Até 899px, a foto vira uma faixa no topo e o texto desce para o verde liso; a primeira linha do nome fica sobre a borda escurecida da foto.
   - Até 639px, o texto de apoio mostra só a primeira frase (a segunda fica em `.hero__lead-more`) e a data do próximo evento fica empilhada.
2. **Próximas competições** (`#competicoes`): lista de provas, no padrão data | cartaz | texto | status.
   - O cartaz (`.poster`) é HTML: foto escurecida, filete de ouro em cima, modalidade em ouro e o nome curto da prova em caixa alta condensada. É decorativo (`aria-hidden`) e some até 899px, como a foto que ocupava o lugar.
3. **Faixa "Faça parte"** (`#faca-parte`, verde-escura): dois caminhos lado a lado, "Quero ser atleta (CAC)" e "Quero me filiar ao clube". Os botões ficam alinhados na mesma linha.
4. **Nossa estrutura** (`#sobre`, no menu aparece como "O clube"), em duas camadas:
   - em cima, foto da sede, texto de abertura, lista de fatos e os botões "Agende uma visita" (leva a `#contato`) e "Estatuto social (PDF)";
   - embaixo, pista de ar e tiro ao prato em duas colunas iguais, as duas fotos em 4:3.
   - Até 899px, o título abre a seção, antes da foto (áreas da grade em `.about`).
5. **Últimas notícias** (`#noticias`).
6. **Galeria** (`#galeria`).
7. **Fale conosco** (`#contato`): contatos, mapa e "Como chegar".
8. **Rodapé**: navegação, modalidades, horário e o lema "Brasil acima de tudo! Deus acima de todos!".

## Sistema visual (manter)

- **Cores**, tiradas do brasão:
  - `--pinho` #1A4E3D;
  - `--pinho-900` #0E2C22 (hero, faixa, rodapé);
  - `--ouro` #E3A210 (botões principais e detalhes);
  - `--ouro-texto` #7F5A05 (ouro sobre fundo claro);
  - `--geada` #F1F3F0 (fundo da página);
  - `--liquen` #55635C (texto secundário);
  - `--linha` #D3DAD5.

  Não criar cores novas sem necessidade.
- **Fonte:** só Archivo (variável), mudando a largura:
  - títulos condensados, com `font-stretch: var(--condensada)` (68%) e peso 750;
  - subtítulos com `var(--semi)` (84%);
  - texto normal com largura 100%.

  A escala de tamanhos está em `--step-*`.
- **Forma:** raio de 2px (`--radius`) e fios finos (`--linha`) separando itens em listas. Nada de cards com sombra.
- **Seções:** alternam entre fundo `--geada` (`.section`) e branco (`.section--white`). As faixas escuras são o hero, a "Faça parte" e o rodapé.
- **Ícones:** sprite SVG inline no topo do `index.html`, usado com `<svg class="icon"><use href="#i-nome"/></svg>`.
- **Classes:** no estilo BEM (`bloco__elemento--variante`). Os comentários do CSS são em português, curtos, e explicam o porquê.
- **Movimento:** uma única entrada animada, no hero, que respeita `prefers-reduced-motion`. Não espalhar animações nas outras seções.
- **Responsivo:** os pontos de quebra usados são 1099, 899, 719, 639 e 479px. Todo layout novo precisa funcionar em 390px, sem rolagem lateral.

## Textos

- Títulos e rótulos com só a primeira letra maiúscula. Caixa alta só no nome do hero, na marca, nos cartazes das competições e no lema do rodapé.
- Botões dizem aonde levam: "Como obter o CR" e "Como se filiar", nunca dois "Saiba mais".
- Nos textos enviados pelo cliente, fazer só correções (ortografia, pontuação, unidades como "10 m"). Não reescrever.
- Textos curtos e diretos, sem enchimento nem dados inventados (altitude, número de atletas, "segurança em primeiro lugar", "tradição serrana" etc.).

## Fatos confirmados pelo clube

- Pistas outdoor para tiro esportivo ou tático.
- Pista indoor de tiro de ar de 10 m, com 5 baias e transportador de alvo automático.
- Tiro ao prato (trap americano), em estande coberto.
- Pista de **100 m** para tiro de precisão. Não usar 300 m: essa informação foi removida do site.
- Para ser sócio é preciso concluir o curso de tiro. O clube cuida da burocracia do CR para quem quer ser atleta CAC.

## Ainda são conteúdo provisório (confirmar antes de publicar)

- Todas as provas da lista de competições, as notícias e o próximo evento (18/10/2026).
- Imagens:
  - o hero, as notícias, os cartazes e a galeria usam fotos de banco, não do clube. O ideal é trocar por fotos reais, principalmente na galeria ("Momentos do Caminhos da Neve");
  - o brasão no cabeçalho e no rodapé ainda vem de `lh3.googleusercontent.com/aida-public/...`, mas é o logo real. Vale salvar uma cópia em `img/`.
- Contatos: telefones, e-mail, endereço (SC-114, km 28) e horário de atendimento.
- Links apontando para `#`:
  - "Como obter o CR";
  - "Como se filiar";
  - "Estatuto social (PDF)";
  - "Área do atleta";
  - "Calendário completo";
  - notícias e redes sociais.
- O texto do tiro ao prato tem uma frase só. Uma linha a mais (número de postos, dias de treino) equilibraria a coluna.

## Como conferir mudanças

Tirar screenshots com o Chrome headless:

```
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --hide-scrollbars \
  --virtual-time-budget=10000 --window-size=1440,7600 --screenshot=saida.png \
  "file:///C:/Users/Kaue%20Kluska/Documents/Prototipo/index.html"
```

No Windows, o Chrome headless não aceita janela com menos de ~500px de largura. Para testar em 390px, abrir o `index.html` dentro de um `<iframe width="390">` num HTML temporário e tirar a screenshot desse HTML. A faixa de foto do hero depende da altura da tela (`svh`): para avaliar o hero, usar um iframe com altura de celular (por exemplo 390×740), não um da altura da página inteira. O Python com Pillow está instalado e serve para recortar as imagens.

## Fluxo de trabalho

- Quando o usuário pedir opções, apresentar alternativas com prévia do layout em ASCII antes de construir.
- O usuário faz os próprios commits. Não commitar sem ele pedir.
