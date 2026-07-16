# Modo Carro

O Modo Carro é uma interface de condução em ecrã inteiro, ampla e legível de relance. Texto grande, alto contraste e um botão de PTT amplo — tudo o que precisa de ver à distância de um braço e nada mais. O ecrã mantém-se ligado durante todo o tempo.

## Entrar no Modo Carro

Pode abrir o Modo Carro de várias formas:

- **A partir do ecrã PTT** — toque no **ícone do carro** na barra superior.
- **A partir do menu de navegação** — abra o menu (☰) e escolha **Modo Carro**.
- **Com uma tecla de hardware** — associe uma tecla em **Definições > Modo Carro > Tecla de alternância do Modo Carro** para entrar e sair instantaneamente.
- **Automaticamente** — o Modo Carro pode abrir sozinho quando liga um carregador, quando um dispositivo Bluetooth escolhido se liga, ou quando a aplicação arranca. Consulte as [Definições](#definicoes) abaixo.

## O ecrã

O Modo Carro usa três posições fixas que nunca mudam de sítio, para que a disposição se mantenha estável enquanto conduz:

- **Indicador de estado** — mostra **NO AR** com um cronómetro enquanto transmite, **A RECEBER** enquanto outra pessoa fala, ou o estado da pesquisa quando o [scan](/docs/talkgroups-nodes) está ativo.
- **Indicativo** — a linha grande e dominante. Mostra quem está a transmitir agora, ou a última estação ouvida. Apresenta **A escutar…** até chegar a primeira transmissão.
- **Linha de detalhe** — o nome ou localização de quem fala (obtido da lista de estações) e, quando em espera, há quanto tempo foi ouvido pela última vez (por exemplo *há 12s*, *há 3m*).

O fundo passa a vermelho-escuro enquanto transmite, dando-lhe uma indicação de TX inequívoca e imediata.

Por baixo da zona principal encontra o **botão de PTT grande** e o seletor de talkgroup. Se desativou o botão de PTT nas definições de PTT, ele também permanece oculto aqui.

## Transmitir

Transmita exatamente como faria no ecrã principal — o Modo Carro respeita o [modo PTT](/docs/ptt-modes) que escolheu:

- **Latch** — toque no botão grande para começar, toque novamente para parar.
- **Hold** — mantenha premido para transmitir, largue para parar.
- **VOX** — basta falar; não é preciso botão.
- **PTT por hardware** — uma tecla de PTT associada também funciona aqui.

O seu tempo de transmissão é apresentado no indicador **NO AR**.

## Mudar de talkgroup

- Em telemóveis e tablets, toque num talkgroup na **barra de favoritos** para mudar instantaneamente.
- Em dispositivos compactos, use o **seletor** para cima/baixo para percorrer os seus presets.

A mudança de talkgroup fica desativada enquanto transmite (os controlos ficam esbatidos).

## Pesquisa (scan)

Se a [pesquisa de talkgroups](/docs/talkgroups-nodes) estiver a decorrer, o indicador de estado funciona também como distintivo de pesquisa — mostrando **A procurar**, **Em** determinado talkgroup quando fica parado em atividade, ou **A manter** enquanto permanece após terminar uma chamada. Toque no distintivo para parar a pesquisa e ficar no talkgroup atual.

## Sair do Modo Carro

- Toque no botão **fechar (✕)** no canto superior esquerdo.
- Prima a **Tecla de alternância do Modo Carro** que associou, se configurada.

Ao sair do Modo Carro, o brilho do ecrã e as definições de wakelock normais são restaurados.

## Definições

As opções do Modo Carro encontram-se em **Definições > Modo Carro**.

| Definição | O que faz |
|---|---|
| **Brilho máximo** | Força o brilho máximo do ecrã no Modo Carro para visibilidade à luz do dia. |
| **Entrar ao carregar** | Abre o Modo Carro automaticamente quando liga um carregador. |
| **Entrar no arranque** | Abre o Modo Carro automaticamente quando a aplicação inicia. |
| **Entrar por Bluetooth** | Abre o Modo Carro quando um dispositivo escolhido se liga (por exemplo, o autorrádio). |
| **Dispositivos de ativação** | Escolha quais os dispositivos Bluetooth emparelhados que servem de ativadores para a opção acima. |
| **Tecla de alternância do Modo Carro** | Associe uma tecla de hardware para entrar e sair do Modo Carro. |

> Combine **Entrar por Bluetooth** com o autorrádio para que o VoxLink passe para Modo Carro assim que liga o motor — e saia quando sai do carro.
