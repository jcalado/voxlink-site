# Resolução de Problemas

## Não Consigo Ligar

**Sintoma:** O estado mostra **A ligar…** indefinidamente, **Erro de Autenticação** ou **Ligação Recusada**.

1. Verifique o **hostname**, **porta** e **chave de autenticação** no seu perfil de servidor. A chave de autenticação é sensível a maiúsculas/minúsculas.
2. Certifique-se de que o seu dispositivo tem ligação à internet.
3. Verifique se o refletor está online — pergunte ao seu administrador ou consulte a página de estado da sua rede.
4. Em redes Wi-Fi empresariais ou de convidados, as portas necessárias podem estar bloqueadas. Tente com dados móveis.
5. Desative qualquer VPN que possa estar a bloquear a ligação.

## A Ligação Cai Quando o Ecrã se Desliga

**Sintoma:** O VoxLink desliga-se quando o ecrã adormece.

Isto é quase sempre a otimização de bateria do Android. Isente o VoxLink — veja [Operação em Segundo Plano](/docs/background-operation) para instruções.

> Ative **Ligação Automática** em **Definições > Ligação** para que o VoxLink reconecte automaticamente após uma queda.

## Sem Áudio Recebido

**Sintoma:** Ligado mas não ouve nada.

1. Verifique o **Volume RX** em **Definições > Áudio** — pode estar a 0%.
2. Verifique o volume do dispositivo usando os botões de hardware enquanto o VoxLink está aberto.
3. Verifique **Saída de Áudio** em **Definições > Áudio > Saída**. Se definido como **Bluetooth**, certifique-se de que um dispositivo está ligado.
4. Verifique o separador **Estações** — se nenhum nó está listado, não há ninguém para ouvir.

## Os Outros Não Me Ouvem

**Sintoma:** Está a transmitir mas outras estações não ouvem nada.

1. Verifique se o VoxLink tem permissão de **Microfone**: **Definições do Android > Aplicações > VoxLink > Permissões**.
2. Observe o medidor **TX** enquanto transmite. Se não se move, o seu microfone não está a funcionar — tente mudar **Entrada** em **Definições > Áudio** para **Microfone** ou **Voice Recognition**.
3. Se o medidor se move mas fica muito baixo, aumente o **Ganho do Microfone** em **Definições > Áudio**.
4. Confirme que está no talkgroup correto.

## Áudio Entrecortado ou Robótico

**A ouvir áudio entrecortado de outros:**

1. Verifique a sua ligação à internet — perda de pacotes é a causa mais comum. Tente alternar entre Wi-Fi e dados móveis.
2. O VoxLink compensa perda de pacotes ocasional automaticamente, mas conectividade consistentemente fraca ainda afetará a qualidade.

**Outros reportam que o seu áudio está entrecortado:**

1. Se o medidor TX está regularmente a atingir 0 dB, reduza o **Ganho do Microfone** — está a saturar a entrada.
2. Mude **Entrada** para **Voice Comms** em **Definições > Áudio** para ativar a supressão de ruído do Android.

## A Aplicação Bloqueia ou Congela

1. Force o encerramento do VoxLink: **Definições do Android > Aplicações > VoxLink > Forçar Paragem**, depois reabra.
2. Verifique o armazenamento disponível — menos de 500 MB livres pode causar instabilidade.
3. Reinicie o seu dispositivo.
4. Se o erro é reproduzível, anote os passos e reporte com a sua versão do Android e modelo do dispositivo.
