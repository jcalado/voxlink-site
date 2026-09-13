# Mudança automática

A mudança automática deixa o VoxLink seguir o tráfego por si. Mantém-se no seu talkgroup principal e, quando um dos seus [talkgroups monitorizados](/docs/talkgroups-nodes) ganha vida, a aplicação leva-o até lá — e traz-o de volta quando a conversa termina.

Nunca é obrigado a aceitar a mudança: cada mudança automática mostra um aviso com **Ficar** e **Anular**.

![Definições de mudança automática](/docs/auto-switch-settings.webp)

## Ativar

As opções vivem em **Definições > Mudança automática**. Comece pelo **Modo de mudança automática**:

| Modo | O que faz |
|---|---|
| **Desligado** | O VoxLink nunca o muda de sítio. A atividade num talkgroup monitorizado apenas levanta um aviso (com um botão **Mudar**) ou uma notificação. |
| **Mudança automática** | Leva-o a um talkgroup monitorizado ativo, mas apenas enquanto o talkgroup atual está em silêncio. Uma conversa que está a ouvir nunca é cortada. |
| **Mudança automática por prioridade** | O mesmo, mais uma ordem de prioridade — os talkgroups de maior prioridade ganham, e os que colocar acima da **linha de interrupção** podem entrar numa conversa em curso. |

Só os talkgroups que monitoriza são candidatos. Marque um preset como monitorizado (o ícone dos auscultadores) e ele passa a fazer parte do conjunto — ver [Talkgroups e Nós](/docs/talkgroups-nodes).

## Ordem de prioridade

No modo **Mudança automática por prioridade** aparece a linha **Ordem de prioridade**. Abre a sua lista de talkgroups, onde a única ordem de arrasto serve dois fins: é a ordem por que os presets rodam no ecrã PTT *e* a prioridade da mudança automática. O topo da lista ganha.

Dois controlos definem o quão agressiva a lista é:

- **A linha de interrupção** — um separador que se arrasta. Os talkgroups **acima** da linha exibem um **⚡** e podem tirá-lo de um talkgroup mesmo com alguém a meio de uma conversa. Os que ficam abaixo apenas preenchem silêncios. Arraste a linha para o topo e nada interrompe.
- **Fixar** — toque no ícone de alfinete num preset (ou use o menu do preset). Enquanto um talkgroup fixado for o ativo, o VoxLink nunca sai dele automaticamente. É a definição para quem controla uma rede: fique na rede e deixe tudo o resto esperar.

Cada linha mostra num relance como está configurada: **⚡** acima da linha de interrupção, **🎧** monitorizado, **📡** no conjunto de pesquisa, **📌** fixado.

![Ordem de prioridade](/docs/priority-order.webp)

> A prioridade só decide quem ganha quando dois talkgroups monitorizados estão ativos ao mesmo tempo, e quem tem autorização para interromper. No modo **Mudança automática** simples a ordem é ignorada — o primeiro talkgroup a ganhar vida durante o silêncio leva-o.

## O aviso de mudança

Quando o VoxLink o muda de talkgroup, aparece um aviso no ecrã PTT: **Mudou para o TG 91 (ARES)**, com duas ações.

- **Ficar** — mantém o novo talkgroup e torna-o o seu principal. A sessão termina, nada o puxa de volta, e uma reconexão traz-o para aqui.
- **Anular** — regressa imediatamente ao ponto onde a sessão começou.

Deixar o aviso em paz também é uma resposta: o talkgroup para onde foi levado nunca é guardado. Se se desligar, reiniciar a aplicação ou deixar o temporizador de regresso expirar, acaba de volta ao seu talkgroup principal real. Só **Ficar** confirma.

Se estiver a transmitir quando toca em **Anular**, o VoxLink não lhe tira o talkgroup a meio — apenas termina a sessão e deixa-o onde está.

## Regressar

**Regressar ao talkgroup principal após** define quanto tempo o VoxLink fica no talkgroup para onde o levou antes de voltar. A contagem começa quando quem fala para, e não quando chega — é uma medida de silêncio, não um cronómetro sobre a conversa toda.

| Definição | Comportamento |
|---|---|
| **Nunca** | Fica onde está depois de mudar; só **Anular**, uma mudança manual ou uma desconexão o trazem de volta. |
| **10 / 20 / 30 / 60 s** | Regressa a casa após esse tempo de silêncio. |

No momento em que o temporizador expira, o VoxLink volta a verificar o ar. Se outro talkgroup monitorizado ainda estiver ativo, segue esse em vez de ir para casa — a sessão mantém-se aberta, para que um silêncio posterior o possa fazer regressar.

O talkgroup principal é registado uma única vez, no **primeiro** salto da sessão. Encadeie três mudanças seguidas e **Anular** continua a levá-lo ao talkgroup de onde realmente partiu, nunca a uma paragem intermédia.

## Atraso de mudança

O **Atraso de mudança** é o tempo que um talkgroup tem de se manter em transmissão para contar. Um toque breve no PTT ou uma sílaba perdida não o arrastam através do reflector; uma intervenção a sério sim.

As opções vão de **0 ms** (muda ao primeiro pacote) a **1000 ms**. O valor por omissão, **400 ms**, filtra a maioria dos toques acidentais. Se quem fala parar antes de o atraso expirar, a mudança pendente é descartada.

## Regras que se aplicam sempre

Seja qual for o modo, e independentemente da ordem que definiu, há três garantias:

1. **Nunca a meio de uma transmissão.** Uma mudança que se torne devida enquanto mantém o PTT premido fica adiada, e é aplicada assim que larga.
2. **Nunca sai de um talkgroup fixado.** Um alfinete tem precedência sobre a prioridade, a linha de interrupção e o scan.
3. **Uma mudança manual termina a sessão.** Escolha um talkgroup você mesmo e o VoxLink deixa de tentar trazê-lo de volta — a sua escolha mantém-se até a mudar.

## Mudança automática e scan

O scan é a versão momentânea da mesma ideia. Ambos correm sobre o mesmo motor, pelo que já não se atrapalham:

| | Mudança automática | Scan |
|---|---|---|
| **Como começa** | Uma definição permanente | Ativado à mão, por sessão |
| **Conjunto** | Talkgroups monitorizados | Talkgroups marcados para **scan** |
| **Ordenação** | Ordem de prioridade | Nenhuma — ganha o primeiro a falar |
| **Interrompe um QSO em curso** | Só acima da linha de interrupção | Sempre |
| **Atraso antes de mudar** | Atraso de mudança | Nenhum — saltos instantâneos |
| **Aviso** | Ficar / Anular em cada mudança | Nenhum; o LED laranja e o indicador do Modo Carro fazem esse papel |
| **Atraso de regresso** | **Regressar ao talkgroup principal após** | **Definições > Tempo de espera do scan** |

Enquanto o scan está ativo, o tempo de espera dele governa toda a sessão — um temporizador, uma única noção de talkgroup principal. Ativar o scan traz-lhe também as garantias acima, mesmo com a mudança automática **Desligada**.

### Ativar o scan

1. **Escolha o que pesquisar.** Abra o seletor de talkgroup no ecrã PTT e ative o ícone de **radar** junto a qualquer preset, ou use o menu do preset e escolha **Adicionar à pesquisa**. Um preset pode também ficar com **Pesquisar por omissão**, para estar sempre no conjunto.
2. **Ative-o.** Toque no ícone de **radar** no cabeçalho do seletor de talkgroup. Acende na sua cor de destaque enquanto a pesquisa estiver a correr.
3. **Acompanhe.** O ecrã PTT mostra uma linha **A pesquisar:** com os talkgroups a serem percorridos. Toque novamente no ícone de radar para desativar.

O scan nunca sobrevive a uma desconexão — ao reconectar volta com a pesquisa desligada e os seus talkgroups monitorizados intactos.

No [Modo Carro](/docs/car-mode), o indicador de estado serve também de indicador de scan: **A pesquisar** enquanto procura, **Em** determinado talkgroup enquanto está parado sobre atividade, e **Espera** enquanto o temporizador de regresso corre.

## Com a mudança automática desligada

Com o modo em **Desligado**, os talkgroups monitorizados continuam a chamar a sua atenção — apenas não o movem:

- Um aviso no ecrã PTT indica o talkgroup ativo (ou *3 TGs monitorizados ativos*) com um botão **Mudar** para uma mudança manual num toque.
- Se a aplicação estiver em segundo plano, uma notificação do sistema anuncia a atividade e o indicativo; tocar nela muda-o de talkgroup e **guarda** essa escolha, porque tocar é uma decisão explícita. Desligue-as em **Definições > Notificações > Talkgroups monitorizados**.

## Resumo das definições

| Definição | Onde | O que faz |
|---|---|---|
| **Modo de mudança automática** | Definições > Mudança automática | Desligado, Mudança automática ou Mudança automática por prioridade. |
| **Ordem de prioridade** | Definições > Mudança automática | Ordene os talkgroups monitorizados, coloque a linha de interrupção e fixe talkgroups. |
| **Regressar ao talkgroup principal após** | Definições > Mudança automática | Silêncio necessário antes de voltar. Nunca, 10–60 s. |
| **Atraso de mudança** | Definições > Mudança automática | Permanência antes de confirmar uma mudança. 0–1000 ms. |
| **Tempo de espera do scan** | Definições > Scan | Atraso de regresso usado em vez do outro enquanto o scan está ativo. |
| **Talkgroups monitorizados** | Definições > Notificações | Notificações em segundo plano para atividade monitorizada. |

> Um bom ponto de partida: monitorize as suas redes locais, escolha **Mudança automática por prioridade**, arraste o talkgroup de emergência ou ARES para o topo com a linha de interrupção logo abaixo, e deixe o regresso nos **30 s**. Ouve tudo o que vale a pena ouvir e continua a acabar em casa.
