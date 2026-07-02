# inspiniaDS

Monorepo com o design system e o **SISLOG** (o sistema real — todo desenvolvimento novo acontece aqui).

## Estrutura

```
index.html        → redireciona para o SISLOG
SISLOG/           → o sistema (login + home); usa os assets de ../ds
  login.html      → login (admin / admin, sem backend)
  index.html      → home protegida por login
ds/               → design system INSPINIA v4.8.0 (referência)
  *.html          → ~220 páginas com todos os componentes do DS
  assets/         → css, js, imagens e plugins compartilhados
ds-source/        → pacote original completo (local, fora do git)
```

No header das homes há um dropdown (ao lado do idioma) que alterna entre **InspiniaDS** e **SISLOG**.

## Como rodar

```
python -m http.server 8123
```

Abra `http://localhost:8123/` — redireciona para o login do SISLOG. Credenciais: `admin` / `admin`.

## Deploy

GitHub Pages servindo a branch `main` (raiz): https://felippeissa.github.io/inspiniaDS/

## Login

Sem banco de dados: valida `admin`/`admin` no navegador e guarda `inspinia_auth` no
`sessionStorage` (ou `localStorage` com "Manter conectado"). O `index.html` de cada
sistema redireciona para o login quando a sessão não existe.
