# inspiniaDS

Design system do nosso sistema, baseado no **INSPINIA v4.8.0** (HTML + CSS, Bootstrap 5).
Todo componente que o sistema precisar está aqui — as páginas de referência ficam em `app/` e são navegáveis pela sidebar do dashboard.

## Estrutura

```
app/
  login.html      → página de login (sem backend; sessão no navegador)
  index.html      → home / dashboard (protegida por login)
  *.html          → ~220 páginas de referência com todos os componentes do DS
  assets/         → css, js, imagens e plugins do design system
ds-source/        → pacote original completo (local, fora do git)
```

## Como rodar

Qualquer servidor estático serve. Exemplo:

```
python -m http.server 8123 --directory app
```

Abra `http://localhost:8123/login.html`, entre com qualquer e-mail/senha e você cai na home.
O logout fica no menu do usuário (sidebar ou topbar).

## Login

Sem banco de dados: o login guarda `inspinia_auth` no `sessionStorage` (ou `localStorage`
se "Manter conectado" estiver marcado) e o `index.html` redireciona para `login.html`
quando a sessão não existe.
