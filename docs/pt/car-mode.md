# Modo Carro

O Modo Carro é uma face de condução em ecrã inteiro: um **painel de instrumentos**, não um ecrã de aplicação. Tipo de letra grande, geometria fixa, alto contraste — tudo legível à distância de um braço e nada que se mexa enquanto conduz. O ecrã mantém-se ligado durante todo o tempo.

![Modo Carro](/docs/car-mode-panel.webp)

## Entrar no Modo Carro

Pode abrir o Modo Carro de várias formas:

- **A partir do ecrã PTT** — toque no **ícone do carro** na barra superior.
- **A partir do menu de navegação** — abra o menu (☰) e escolha **Modo Carro**.
- **Com uma tecla de hardware** — associe uma tecla em **Definições > Controlos de hardware > Tecla de alternância do Modo Carro** para entrar e sair instantaneamente.
- **Automaticamente** — o Modo Carro pode abrir sozinho quando liga um carregador, quando um dispositivo Bluetooth escolhido se liga, ou quando a aplicação arranca. Consulte as [Definições](#definicoes) abaixo.

## Duas faces, os mesmos instrumentos

O Modo Carro desenha-se de forma diferente consoante o espaço disponível, mas os instrumentos e as suas regras nunca mudam:

| | Telemóveis, tablets, suportes de tablier | Rádios compactos (classe Hytera P50) |
|---|---|---|
| **Talkgroups** | Um **banco de canais** — todos os favoritos desenhados de uma vez, um toque cada | Um **seletor** — ‹ e › percorrem os seus presets |
| **Atividade** | Uma banda de registo própria, o mais recente no topo | Integrada na zona principal, que mostra a última estação ouvida quando em espera |
| **Medidores** | RX e MIC empilhados, ambos visíveis ao mesmo tempo | Uma única barra que alterna entre RX e MIC |

Em modo paisagem, a face grande divide-se em duas colunas — instrumentos à esquerda, controlos à direita, tal como sempre se dispôs a frente de um rádio.

## Ler o painel

### A régua de legendas

No topo fica uma régua fixa de legendas — **NET**, **SCAN**, **VOX**, **APRS** — desenhadas quer estejam ativas ou não, tal como as marcações serigrafadas de um rádio. Apagada significa "este rádio tem essa função e ela não está ligada", o que também é informação.

| Legenda | Acende quando | Notas |
|---|---|---|
| **NET** | Ligado ao refletor | Pisca durante a reconexão e fica **vermelha** se a ligação cair — um refletor perdido é uma avaria, não um canal silencioso |
| **SCAN** | O [scan](/docs/auto-switch) está ativo | Pisca enquanto procura alguém a falar |
| **VOX** | O VOX está armado | Fica **vermelha** enquanto o VOX o está efetivamente a colocar em transmissão |
| **APRS** | O envio de balizas APRS está ativado | |

Apenas duas cores têm significado: **âmbar** para tudo o que está ativo, e **vermelho** reservado exclusivamente à transmissão e à perda de ligação. Os estados do scan distinguem-se pela legenda, pelo piscar e pela contagem decrescente, e não pela cor — como sempre fizeram os rádios com pesquisa, e é o que sobrevive num painel de baixa densidade à luz do dia.

### A banda de estado

Logo abaixo da régua, uma linha diz o que o rádio está a fazer neste momento: **A MONITORIZAR**, **A RECEBER**, **NO AR** (com um cronómetro enquanto transmite), **A pesquisar**, **Em espera**, ou **VOX armado**.

### A zona principal

O maior elemento do painel muda conforme o estado, para que um indicativo antigo nunca ocupe o lugar de destaque:

| Estado | Mostra |
|---|---|
| Em espera | **Canal** — o número do talkgroup e a sua etiqueta |
| A receber | **Quem chama** — quem está a transmitir agora |
| A transmitir | **A transmitir em** — o talkgroup em que está a transmitir |
| Retenção de scan | **Retido em** — o talkgroup mantido após uma chamada |

Nos rádios compactos, a zona principal traz ainda uma linha esbatida de **Última escuta** quando em espera, já que não há espaço para um registo próprio.

### Medidores

**RX** e **MIC** são medidores de barras segmentadas com um sinalizador **PEAK**. O PEAK acende quando o limitador está realmente a atuar, e não por estimativa — dispara ao mesmo nível que o limitador, pelo que significa exatamente uma coisa. Enquanto transmite com um temporizador de tempo máximo definido, o painel conta também o tempo que lhe resta.

## Transmitir

Transmita exatamente como faria no ecrã principal — o Modo Carro respeita o [modo PTT](/docs/ptt-modes) que escolheu:

- **Latch** — toque no botão grande para começar, toque novamente para parar.
- **Hold** — mantenha premido para transmitir, largue para parar.
- **VOX** — basta falar; não é preciso botão.
- **PTT por hardware** — uma tecla de PTT associada também funciona aqui.

Se desativou o botão de PTT nas definições de PTT, ele também permanece oculto aqui.

## Mudar de talkgroup

- Em telemóveis e tablets, toque num mosaico do **banco de canais** para mudar instantaneamente. O talkgroup ativo é o que está aceso.
- Em rádios compactos, use o **seletor** ‹ e › para percorrer os seus presets.

A mudança de talkgroup fica desativada enquanto transmite (os controlos esbatem).

## Pesquisa (scan)

Quando o [scan](/docs/auto-switch) está ativo, a banda de estado serve também de indicador de pesquisa — **A pesquisar** enquanto procura, **Em espera** enquanto permanece após terminar uma chamada, com a contagem decrescente a correr. Toque nela para parar a pesquisa e ficar no talkgroup atual.

O Modo Carro respeita também a [mudança automática](/docs/auto-switch): se um talkgroup monitorizado assumir o comando, a zona principal e o canal acompanham-no.

## A face compacta

![Modo Carro num rádio compacto](/docs/car-mode-compact.webp)

Num rádio de 240 × 320 não há espaço para uma disposição de aplicação, por isso o Modo Carro torna-se um painel a sério. Cada banda reserva a sua altura, de modo que nada se reorganiza quando as chamadas começam e terminam — o número que está a ler nunca salta enquanto olha para ele.

## Sair do Modo Carro

- Toque no **fechar (✕)** no fim da régua de legendas.
- Prima a **tecla de alternância do Modo Carro**, se a tiver configurado.

Ao sair do Modo Carro, o brilho do ecrã e as definições de manutenção do ecrã ligado voltam ao normal.

## Definições

As opções do Modo Carro vivem em **Definições > Modo Carro**.

| Definição | O que faz |
|---|---|
| **Brilho máximo** | Força o brilho máximo do ecrã no Modo Carro para visibilidade à luz do dia. |
| **Entrar ao carregar** | Abre o Modo Carro automaticamente quando liga um carregador. |
| **Entrar no arranque** | Abre o Modo Carro automaticamente quando a aplicação arranca. |
| **Entrar por Bluetooth** | Abre o Modo Carro quando um dispositivo escolhido se liga (por exemplo, o rádio do carro). |
| **Dispositivos de ativação** | Escolha que dispositivos Bluetooth emparelhados servem de gatilho para a opção acima. |

A **tecla de alternância do Modo Carro** é associada em **Definições > Controlos de hardware**, juntamente com as restantes associações de teclas.

> Combine **Entrar por Bluetooth** com o rádio do seu carro para que o VoxLink entre em Modo Carro assim que liga o motor — e saia quando se vai embora.
