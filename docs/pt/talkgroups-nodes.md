# Talkgroups e Nós

![Ecrã de nós](/docs/nodes-screen.webp)

## Talkgroups

Um talkgroup é um canal lógico no refletor. Estações no mesmo talkgroup podem ouvir-se mutuamente; estações em talkgroups diferentes não.

### Definir um Talkgroup

O talkgroup é configurado por perfil de servidor (ver [Perfis de Servidor](/docs/server-profiles)). Quando o VoxLink liga, junta-se automaticamente ao talkgroup configurado.

### Mudar de Talkgroup Durante uma Sessão

1. Abra o separador **PTT** ou o ecrã principal de ligação.
2. Toque no **seletor de Talkgroup** (mostra o número do talkgroup atual).
3. Selecione um novo talkgroup da lista fornecida pelo refletor.
4. O VoxLink muda imediatamente — sem necessidade de reconexão.

> Confirme o novo talkgroup com uma chamada curta antes de transmitir uma mensagem longa. Alguns talkgroups estão ligados a repetidores ou outras redes e o tráfego pode ser retransmitido amplamente.

### Presets de Talkgroup

Cada perfil de servidor pode ter uma lista de **presets** — talkgroups guardados com etiquetas personalizadas. Gerencie-os no formulário de edição do servidor em **Presets**.

- **Adicione** um preset com um número de talkgroup e etiqueta (ex.: `1` → "Local", `2` → "ARES")
- **Reordene** presets arrastando-os
- **Edite ou elimine** presets existentes

Quando toca no seletor de talkgroup no ecrã PTT, os seus presets aparecem como uma lista de seleção rápida com as suas etiquetas. Pode também introduzir um número de talkgroup manualmente.

### Monitorização

O VoxLink pode **monitorizar** talkgroups adicionais enquanto permanece no seu principal. O áudio dos talkgroups monitorizados reproduz juntamente com o seu TG principal — ouve tudo sem mudar.

Para configurar a monitorização:

1. Toque no **seletor de talkgroup** no ecrã PTT.
2. Ative o interruptor de **monitorização** junto a qualquer talkgroup que queira ouvir.
3. Os talkgroups monitorizados aparecem no ecrã PTT abaixo do indicador do talkgroup principal.

Transmite no seu talkgroup principal apenas. A monitorização é apenas de receção.

> A monitorização é útil para manter um ouvido numa rede ou canal de emergência enquanto trabalha num talkgroup diferente.

---

## Nós Ligados

O separador **Estações** lista todos os nós atualmente ligados ao seu talkgroup no refletor. Cada entrada mostra o identificador do nó conforme reportado pelo servidor.

A lista atualiza em tempo real à medida que nós ligam e desligam. Uma lista vazia significa que é a única estação ligada a esse talkgroup.

Nós inativos (ligados mas não recentemente ativos) são agrupados numa secção **Inativos** recolhível no fundo da lista.

---

## Operador Ativo

Enquanto uma estação transmite, o VoxLink mostra a seguinte informação acima do medidor RX no ecrã **PTT**:

| Campo | Exemplo |
|---|---|
| Indicativo | `CT2GNH-M` |
| Nome | `Paulo` |
| Localização | `Aveiro, Portugal` |

Esta informação é transmitida pelo refletor e proveniente dos detalhes de registo da estação transmissora. Nem todos os refletores preenchem todos os campos — alguns podem mostrar apenas o indicativo.
