# Grimório - System Reference Document (SRD)

Este documento descreve as especificações técnicas, regras de formatação e comportamento da aplicação SPA **Grimório**.

## 1. Visão Geral
O **Grimório** é uma Single Page Application (SPA) minimalista e responsiva projetada para jogadores e mestres de RPG (como *Old Dragon*). Ele permite gerenciar magias conhecidas e controlar o uso de espaços de magias (slots) diários usando checkboxes persistentes.

A aplicação possui dois modos principais:
- **Modo Editor**: Edição em texto puro de categorias e magias. Não há necessidade de digitar números de slots.
- **Modo Jogo (Grimório)**: Visualização interativa para marcar o uso de magias e círculos, com controles dinâmicos de +/- para alocar slots em tempo real.

---

## 2. Formato de Dados (Parser)
O editor interpreta uma estrutura baseada em texto simples (Markdown simplificado):

1. **Seções / Círculos**: Linhas que começam com `#`.
   - Exemplo: `# 1º Círculo` -> Cria um cabeçalho para o primeiro círculo de magias.

2. **Itens / Magias**: Linhas normais sob uma seção.
   - Exemplo: `Mísseis Mágicos` -> Adiciona a magia ao círculo correspondente.

### Exemplo de Entrada Válida:
```text
# 1º Círculo
Abrir
Cerrar Portas
Disco Flutuante
Escudo Arcano
Mísseis Mágicos

# 2º Círculo
Invisibilidade
Mão Espectral
```

---

## 3. Estado e Persistência
- **Dados do Grimório**: O texto bruto de magias é salvo no `localStorage` sob a chave `grimorio_raw_text`.
- **Nível do Personagem**: O nível do conjurador é salvo no `localStorage` sob a chave `grimorio_char_level` e calcula automaticamente dados de dano, duração, alcance e bônus de magias escalonáveis (ex: *Bola de Fogo*, *Cone Glacial*, *Mísseis Mágicos*, *Pele Rochosa*, *Identificação*, etc.).
- **Carga/Alocação de Slots**: O número de slots alocados a círculos e magias individuais é controlado diretamente via botões de `+` e `−` na tela de jogo e é salvo no `localStorage` sob o mapa `grimorio_slots`.
- **Estado de Jogo (Checkboxes)**: O estado marcado (`checked`) de cada slot de uso é salvo no `localStorage` usando um ID único baseado na assinatura da seção/posição do item.
- **Botão de Reset**: Permite desmarcar todos os slots (limpar preparação/gastos) ao iniciar um novo dia de descanso (Descanso Longo).

---

## 4. Categorias e Sub-Abas
- **Magias Arcanas**: Círculos arcanos de 1º a 9º.
- **Magias de Necromante**: Magias exclusivas e especializadas de necromancia.
- **Magias Divinas**: Preces e milagres para clérigos de 1º a 7º círculo.

---

## 5. Design e Estética
- **Tema Escuro Místico**: Paleta inspirada em fantasia dark medieval.
- **Responsividade**: Layout adaptado para uso em smartphones e tablets na mesa de jogo.
- **Tipografia**: Uso de fontes serifadas elegantes para títulos RPG clássicos e fontes limpas para leitura.
