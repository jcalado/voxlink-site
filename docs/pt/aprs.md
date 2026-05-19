# APRS

O VoxLink inclui um cliente APRS-IS completo. Veja estações num mapa em tempo real, troque mensagens APRS e envie a sua própria posição — tudo em paralelo com a operação normal no reflector.

O APRS está protegido por um interruptor principal. Ative-o em **Definições > APRS > Ativar APRS**.

## Ligar-se

O APRS-IS exige o seu indicativo e um passcode (um número derivado do indicativo — pesquise "APRS passcode generator" se ainda não tiver um).

Em **Definições > APRS**:

1. Introduza o **Indicativo** e escolha um **SSID** (ex.: `-7` para portátil, `-9` para móvel, `-5` para uma app de telemóvel — ou deixe em branco).
2. Introduza o **Passcode**. Deixá-lo em `-1` mantém-no em modo só-receção.
3. Escolha um **Servidor** — o rotate global, um conjunto regional (Europa, América do Norte, Ásia, etc.) ou um host personalizado.

Depois de ativado e configurado, o VoxLink liga-se automaticamente e mantém-se ligado em segundo plano.

## Mapa e Lista de Estações

O ecrã APRS tem três separadores:

- **Mapa** — OpenStreetMap com marcadores para cada estação. Toque num marcador para abrir a folha da estação. Os símbolos APRS comuns são desenhados com ícones Material.
- **Estações** — uma lista ordenável (por **distância** ou **último contacto**). Toque numa linha para a mesma folha de detalhe, com path, status, rumo / velocidade / altitude e última posição.
- **Mensagens** — as suas conversas APRS (ver abaixo).

O alcance do filtro de receção é configurável em **Definições > APRS > Receção**.

## Mensagens

O VoxLink envia e recebe mensagens APRS com confirmações.

- Abra o separador **Mensagens** para ver as conversas.
- Toque numa estação no mapa ou na lista para iniciar uma nova conversa.
- As mensagens enviadas mostram o estado de entrega (enviada / confirmada / falhada).
- As mensagens recebidas chegam em segundo plano e aparecem como notificações quando a app não está aberta.

## Beaconing

Envie a sua posição pelo APRS-IS. Ative em **Definições > APRS > Beacon**.

O VoxLink oferece três **modos de posicionamento**:

| Modo | O que faz | Quando usar |
|---|---|---|
| **Smart** | Envia posição com base em movimento, velocidade e ângulo de viragem (SmartBeaconing) | Operação móvel / portátil |
| **Auto** | Beacons em intervalos fixos a partir do GPS | Quer ter um intervalo previsível |
| **Manual** | Envia uma posição fixa que define uma vez | Estação fixa / shack |

### Smart beaconing

Ajuste os intervalos **em movimento** e **parado** — o VoxLink limita a frequência com base no movimento real. Quando a velocidade do GPS não é fiável (fixes de baixa qualidade, paragens breves), recorre a distância sobre tempo para manter os beacons sensatos.

### Auto

Escolha um intervalo, uma distância mínima entre beacons e uma classe de precisão GPS (**Alta**, **Média**, **Baixa** ou **Equilibrada**). Mais precisão consome mais bateria.

### Manual

Defina a sua posição de uma de três formas:

- **Coordenadas** — escreva diretamente latitude / longitude
- **Escolha no mapa** — largue um pino no mapa
- **Último GPS** — captura a localização atual uma vez

Útil para shacks, estações de clube ou qualquer sítio onde não queira ter o GPS ligado.

### Símbolo e comentário

Defina o **símbolo** APRS (casa, carro, bicicleta, etc.) e um **comentário** opcional que sai com cada beacon. Toque em **Enviar beacon agora** para mandar uma posição imediata.

> O VoxLink envia beacons com o tocall oficialmente atribuído **APVOXL**, para que o seu tráfego seja identificado na rede APRS como vindo desta app.

## Operação em Segundo Plano

Com o APRS ativo, o VoxLink mantém a ligação, as atualizações de posição e a receção de mensagens a funcionar em segundo plano. Ver [Operação em Segundo Plano](/docs/background-operation) para o comportamento do serviço em primeiro plano.

## O Que é Descodificado

O VoxLink descodifica os tipos de pacote APRS mais comuns:

- Posições padrão e **comprimidas**
- Posições codificadas **Mic-E**
- Rumo, velocidade, altitude
- **Objects** e **items**
- Mensagens de status
- Mensagens de texto (com tratamento de acks)

## Dicas

- Só-receção é perfeitamente válido — deixe o passcode em `-1` e continua a ver o mapa e a lista de estações por inteiro, apenas não transmite.
- Um **alcance de filtro** razoável mantém a lista de estações gerível e poupa bateria. Comece nos 100 km e ajuste.
- Se os seus beacons não aparecem no aprs.fi, confirme o passcode e que **Ativar APRS** e o interruptor do beacon estão ambos ligados.
