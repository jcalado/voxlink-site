# Modos PTT

O VoxLink tem três modos push-to-talk. Alterne entre eles em **Definições > PTT > Modo**.

![Ecrã PTT](/docs/ptt-screen.webp)

## Latch (Predefinido)

Toque no botão **PTT** para começar a transmitir, toque novamente para parar. Ideal para transmissões mais longas onde manter o botão pressionado não é prático.

## Hold

Prima e mantenha o **PTT** para transmitir, solte para parar. Funciona como um rádio portátil tradicional.

## VOX (Ativado por Voz)

Transmite automaticamente quando fala acima de um limiar definido. Para após um período de silêncio (tempo de espera).

| Definição | Caminho | Predefinição | Intervalo |
|---|---|---|---|
| **Limiar** | **Definições > PTT > Limiar VOX** | −30 dB | −50 a −10 dB |
| **Atraso** | **Definições > PTT > Atraso VOX** | 1000 ms | 500–3000 ms |

O **Limiar** controla o volume necessário para ativar a transmissão. Aumente-o em ambientes ruidosos para evitar ativações falsas. O **Atraso** é o tempo que o VoxLink mantém a transmissão ativa após parar de falar.

> Em ambientes ruidosos, aumente o limiar e reduza o atraso. Em ambientes silenciosos, baixe o limiar para ativação mais fácil.

## Temporizador de Timeout (TOT)

Termina automaticamente a sua transmissão após uma duração definida. Configure em **Definições > PTT > Temporizador de Timeout**.

- **Duração** — predefinição **3 minutos**. Quando o temporizador termina, a transmissão para e uma contagem decrescente mostra durante os últimos segundos.
- **Aviso** — vibra **15 segundos** antes do timeout (configurável de **5–30 s** em **Definições > PTT > Aviso TOT**, ou desative completamente).

> O TOT ajuda a prevenir transmissões acidentalmente bloqueadas no modo Latch e é útil em redes com limites de tempo de transmissão.

## Controlos do Ecrã PTT

O que aparece no ecrã PTT é uma escolha sua, em **Definições > Controlos do ecrã PTT**.

| Definição | O que faz |
|---|---|
| **Gravação** | Captura áudio localmente enquanto está ligado — ver [Gravação](/docs/recording) |
| **Reprodução de ficheiro** | Transmite um ficheiro de áudio para um talkgroup |
| **Mostrar opção de sair** | Acrescenta um item **Sair** ao menu de ligação do ecrã PTT |
| **Mostrar botão de silêncio** | Coloca um botão de **silêncio** no cabeçalho |
| **Mostrar cronómetros** | Tempo de TX decorrido e contagem do TOT no ecrã PTT |
| **Ocultar botão de PTT** | Remove o botão no ecrã — só faz efeito quando há uma tecla de PTT externa associada ou o VOX está ativo |

### Silenciar

**Mostrar botão de silêncio** acrescenta um ícone de altifalante ao cabeçalho do ecrã PTT. Toque nele para silenciar o áudio recebido sem mexer no volume — útil quando alguém entra na sala a meio de uma rede e prefere não perder a sua regulação de volume só para ficar em silêncio. Toque novamente para voltar a ouvir.

Silenciar cala o altifalante e mais nada. A medição e a gravação correm a partir do áudio antes de ser anulado, por isso a barra de RX continua a mostrar que alguém está a falar e uma gravação em curso continua a captá-lo — silenciar é sobre não ouvir uma chamada, não sobre fingir que ela não aconteceu. Pode continuar a transmitir enquanto está em silêncio.

O silêncio não é deliberadamente memorizado entre arranques. É uma ação operacional — cala-se o rádio para uma reunião, não para sempre — e um rádio que voltasse de um reinício ainda mudo estaria avariado da pior maneira. O cursor de **Volume RX** nas [Definições de Áudio](/docs/audio-settings) é o controlo permanente.
