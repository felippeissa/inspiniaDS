# SISLOG (branch SISLOG)

Sistema de Logística e Contratações — módulo **Contratações / Credenciamento de Fornecedores**.
Construído em HTML/CSS/JS sobre o design system INSPINIA (branch `main`, pasta `ds/`).

## Estrutura

```
index.html          → redireciona para o SISLOG
SISLOG/
  login.html        → login (admin / admin, sem backend)
  index.html        → home com indicadores e processos recentes
  contratacoes.html → consulta de processos + novo processo (RF01)
  processo.html     → processo de credenciamento: Processo, Configuração e
                      Seleção de fornecedor (RF02–RF18)
  fluxo.html        → fases legais, jornada do usuário e status
  js/sislog.js      → estado da aplicação (localStorage, dados de exemplo)
  assets/           → design system (css, js, imagens, plugins)
```

## Como rodar

```
python -m http.server 8123
```

Abra `http://localhost:8123/` — credenciais `admin` / `admin`.

## Funcionalidades (base: requisitos de credenciamento)

- Modalidade **Credenciamento** no cadastro de contratação; processo criado em **Fase Preparatória**
- Publicação do edital move o processo para **Em Andamento**
- Campos de disputa/lance removidos (Dados, Itens, Publicação) conforme RF04/RF05/RF08
- Habilitação alimenta a **Lista de Credenciados**; diligências nas hipóteses da RN07
- Avisos, esclarecimentos, impugnações, recursos (em validação), encerramento e status item/lote
- Pendências de negócio (P02–P07) sinalizadas nas próprias telas

Sem banco de dados: estado em `localStorage` com dados de exemplo.
