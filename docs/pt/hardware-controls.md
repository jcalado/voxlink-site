# Controlos de Hardware e Rádios

O VoxLink foi feito para ser comandado por botões a sério, e não apenas por um ecrã tátil. Associe uma tecla ao PTT, percorra talkgroups com o botão rotativo de canais e, nos rádios compatíveis, acenda o LED de estado do próprio aparelho.

![Controlos de hardware](/docs/hardware-controls.webp)

## Associações de teclas

As associações vivem em **Definições > Controlos de hardware**.

| Associação | O que faz |
|---|---|
| **PTT** | Transmite enquanto a tecla está premida (ou em modo latch, conforme o seu [modo PTT](/docs/ptt-modes)) |
| **Talkgroup seguinte** | Avança pelos seus presets |
| **Talkgroup anterior** | Recua pelos seus presets |
| **Tecla de alternância do Modo Carro** | Entra e sai do [Modo Carro](/docs/car-mode) |

Para associar uma, toque na linha e **prima a tecla que quer usar**. O VoxLink indica o que detetou — *Botão PTT*, *Botão rotativo à direita*, *Volume para cima*, *Botão do auricular*, *Reproduzir/Pausa*, entre outros — para que possa confirmar que apanhou a tecla certa. Toque no **✕** de uma linha para limpar essa associação.

Num rádio PoC é isto que transforma o VoxLink num rádio: o PTT laranja debaixo do polegar coloca-o em transmissão e o botão rotativo percorre talkgroups.

As associações de teclas também funcionam no computador — associe uma tecla do teclado e use o VoxLink sem o rato.

## Acessórios de PTT Bluetooth

**Definições > Controlos de hardware > Botão de PTT Bluetooth** permite que acessórios emparelhados — aqueles pequenos botões de PTT de guiador ou de lapela — transmitam e mudem de talkgroup. Ative a opção e os botões do acessório passam a funcionar como teclas associadas.

> Esta é uma funcionalidade Android. Emparelhe primeiro o acessório nas definições de Bluetooth do próprio Android.

## Rádios Hytera

Nos rádios PoC da Hytera (o aparelho de referência é o **P50**), o VoxLink comanda o hardware do próprio rádio, em vez de se limitar a desenhar no ecrã.

### LED de estado

![Definições do LED de estado](/docs/status-led.webp)

O LED por cima do ecrã pode espelhar o que o VoxLink está a fazer. As opções vivem em **Definições > Notificações > LED de estado**:

| Definição | LED |
|---|---|
| **Vermelho ao transmitir** | Vermelho fixo durante todo o tempo em que transmite |
| **Verde ao receber** | Verde fixo enquanto alguém fala |
| **Piscar laranja durante a pesquisa** | Pisca a laranja enquanto o [scan](/docs/auto-switch) está ativo |
| **Pulso verde quando ligado** | Três piscadelas a cada 10 segundos — um batimento que diz que a ligação está viva |

> O LED é fisicamente comandado por uma notificação, pelo que partilha a permissão de notificações. Se as notificações estiverem desativadas para o VoxLink, o ecrã de definições avisa-o e o LED fica apagado.

### Cartão de chamada no ecrã principal

**Definições > Notificações > Ecrã principal > Cartão de chamada** coloca o talkgroup, quem chama e o cronómetro da chamada no ecrã principal do rádio, para que uma chamada a entrar seja legível sem abrir a aplicação.

### Botão rotativo de canais

O botão rotativo é apenas mais uma associação de teclas — associe **Talkgroup seguinte** a *Botão rotativo à direita* e **Talkgroup anterior** a *Botão rotativo à esquerda* e o botão percorre os seus presets exatamente como percorreria canais num rádio comercial.

## Rádios compactos

![O menu num rádio compacto](/docs/compact-menu.webp)

Nos rádios de ecrã pequeno (240 × 320 e semelhantes), o VoxLink troca o menu deslizante por uma **grelha ao estilo de lançador**: cada destino é um mosaico grande que consegue acertar com o polegar ou alcançar com o D-pad. Abre com o cursor já sobre o ecrã em que está, pelo que basta uma pressão de **OK** para voltar onde estava.

O anel à volta de um mosaico transmite o estado — em que ecrã está e onde está o foco do D-pad.

Pode escolher que destinos aparecem em **Definições > Interface > Itens do menu**.

O [Modo Carro](/docs/car-mode) tem também uma face compacta feita para estes ecrãs.
