# Gamezone - Landing Page em React

Landing page do Gamezone feita em React (Vite), unindo a página inicial do site do grupo com a minha página de Lojas Parceiras.

## Autor
[Thalles henrique lima galdino braz] - GitHub: Thallesxz

## Links
- Site (Netlify): [(https://benevolent-cocada-275be7.netlify.app/)]
- Repositório: https://github.com/Thallesxz/landing-gamezone

## Origem
O site original é o trabalho em grupo Gamezone (HTML, CSS e JavaScript). Esta landing page reúne o conteúdo da página inicial (menu, banner, lançamentos, gêneros, estatísticas e rodapé) com a minha página de Lojas Parceiras, em uma única página. Os HTMLs originais estão na pasta `referencia-html/`.

## O que foi feito
- Cada seção é um componente React (src/components).
- Dados repetidos (jogos, gêneros, estatísticas, lojas, menu) ficam em arrays e são exibidos com map().
- useState: menu aberto/fechado e filtro de lojas por estado. useRef: rolagem do carrossel.
- Menu com âncoras para cada seção; um único menu, um único rodapé e um único H1.
- CSS do grupo mantido (Bootstrap 4, style.css e lojaf.css).

## Créditos
- Bootstrap, Bootstrap Icons e Google Fonts (Bebas Neue, Rajdhani, Tektur).
- Imagens e CSS do projeto do grupo Gamezone: [nomes do grupo].
- [Claude foi usado com apoio]

## Como rodar
1. npm install
2. npm run dev (abre em http://localhost:5173)
3. npm run build (gera a pasta dist para publicação)