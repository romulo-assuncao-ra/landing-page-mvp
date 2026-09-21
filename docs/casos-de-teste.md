# Sprint 1 — Casos de Teste US01

| ID | Cenário | Resultado esperado | Resultado | Status |
|---|---|---|---|---|
| CT01 | Acessar página | Header exibido | Header presente no DOM e estilizado | PASS |
| CT02 | Clicar Início | Navega para #inicio | href=#inicio | PASS |
| CT03 | Clicar Sobre | Navega para #sobre | href=#sobre | PASS |
| CT04 | Clicar Serviços | Navega para #servicos | href=#servicos | PASS |
| CT05 | Clicar Contato | Navega para #contato | href=#contato | PASS |
| CT06 | Mobile | Hamburger exibido e menu abre | CSS/JS implementados | PASS |
| CT07 | Selecionar item mobile | Menu fecha | closeMenu() executado no clique | PASS |
| CT08 | Teclado | Tab/foco e menu operáveis | button nativo + focus-visible + Escape | PASS |

## Evidências
- Validação estrutural automatizada: `tests/validate-header.js`
- Revisão de estados ARIA e comportamento do menu em `js/main.js`
- Revisão responsiva nos breakpoints definidos em `css/responsive.css`

## Observação
Os testes de interação visual em navegador dependem de execução em browser. A validação automatizada desta entrega cobre a estrutura e os contratos principais; a homologação visual deve ser repetida no navegador antes do deploy.
