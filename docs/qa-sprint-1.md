# QA — Sprint 1 — Header + Navegação

## US01
Menu principal responsivo, acessível e funcional.

## Execução CT01–CT08
Todos os 8 casos foram registrados como **PASS** na validação estrutural/estática da entrega.

## Bugs encontrados
Nenhum bug bloqueador identificado na implementação revisada.

## Correção preventiva aplicada
Além do fluxo originalmente previsto, o menu recebeu fechamento por `Escape`, atualização de `aria-label` e fechamento ao mudar para viewport desktop.

## Regressão
- Âncoras permanecem compatíveis com as seções existentes.
- O menu não depende das demais funcionalidades do MVP.
- O layout desktop permanece separado do comportamento mobile.
- `prefers-reduced-motion` é respeitado no reset.

## Status da Sprint 1
**Aprovada para avanço à próxima User Story após homologação visual em navegador.**
