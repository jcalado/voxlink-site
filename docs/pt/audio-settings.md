# Definições de Áudio

Configure o áudio em **Definições > Áudio**.

> No Windows e no Linux, o VoxLink mostra apenas a secção **Volume** — ganho do microfone e volume RX. O encaminhamento de áudio, o modo de áudio Bluetooth, a fonte de entrada e o volume extra são conceitos do Android, pelo que a versão para computador deixa isso para as definições de som do seu sistema operativo.

![Definições de áudio](/docs/settings-screen.webp)

## Ganho do Microfone

**Definições > Áudio > Ganho do Microfone** — **0% a 200%**, predefinição **100%**.

Aumente se outras estações reportam que o seu áudio está muito baixo. Diminua se está a saturar. Um limitador integrado (teto de −1 dB, rácio 10:1) previne distorção independentemente do ganho.

## Volume RX

**Definições > Áudio > Volume RX** — **0% a 200%**, predefinição **70%**.

Controla o volume do áudio recebido independentemente do volume do sistema Android.

## Volume Extra

**Definições > Áudio > Volume > Volume extra** — desativado por omissão.

Empurra o volume do altifalante para além do teto normal, para ambientes ruidosos — um veículo, um convívio ao ar livre, uma casa das máquinas. Funciona por cima do Volume RX, em vez de o substituir, e pode reduzir a qualidade do áudio, por isso deixe-o desligado até precisar mesmo dessa margem.

## Medidores de Nível

O ecrã PTT mostra dois medidores em tempo real:

- **TX** — o nível do seu microfone enquanto transmite. Aponte para picos entre −10 dB e −6 dB.
- **RX** — o nível do áudio recebido enquanto está a receber.

## Saída de Áudio

Escolha onde ouve o áudio em **Definições > Áudio > Saída de Áudio**:

| Opção | Caso de uso |
|---|---|
| **Automático (preferir auriculares)** | Segue o que ligar ou emparelhar. A predefinição sensata. |
| **Altifalante do telemóvel** | Mãos-livres, altifalante |
| **Auricular** | Audição privada |
| **Auriculares com fio** | Auriculares de 3,5 mm ou USB-C |
| **Auriculares USB** | Interfaces de áudio USB |
| **Bluetooth** | Auriculares sem fios |

### Modo de áudio Bluetooth

Quando usa auriculares Bluetooth, **Definições > Áudio > Modo de áudio Bluetooth** decide como o Android trata a ligação:

| Modo | Comportamento |
|---|---|
| **Chamada de voz** | Duplex completo com o microfone dos próprios auriculares. O sistema trata o VoxLink como uma chamada telefónica. |
| **Multimédia** | Apenas reprodução A2DP — sem interface de "em chamada", e o TX usa o microfone do telemóvel. |

> **Chamada de voz** é o que quer para uns auriculares a partir dos quais vai transmitir. Escolha **Multimédia** quando só ouve pelos auriculares e prefere manter o microfone do telemóvel e evitar a faixa de chamada em curso.

## Fonte de Entrada

Escolha a fonte do microfone em **Definições > Áudio > Entrada**:

| Opção | Notas |
|---|---|
| **Predefinido (Chamada de voz)** | Recomendado — inclui cancelamento de eco e supressão de ruído |
| **Microfone** | Entrada direta, sem processamento |
| **Voice Recognition** | Entrada direta de alta qualidade |
| **Sem processamento (Raw)** | Sem qualquer processamento da plataforma |
| **Voice Performance (Baixa latência)** | O caminho de captura com menor latência |

> Mantenha o **Predefinido (Chamada de voz)** a menos que tenha razão para mudar. A supressão de ruído integrada do Android faz uma grande diferença em dispositivos móveis.

## Codec

O VoxLink usa Opus a 16 kHz mono, frames de 20 ms, 20 kbps VBR. Estas definições são fixas — não é necessário ajuste.

## Nos Bastidores

Estes são tratados automaticamente e não podem ser ajustados:

- **Resampler** — converte entre a taxa de amostragem do seu dispositivo e a taxa de 16 kHz do codec
- **Jitter buffer** — capacidade de 24 frames atrás de um pré-buffer de 400 ms no início de cada intervenção, que absorve a rajada de pacotes atrasados que surge quando o rádio Wi-Fi acorda do modo de poupança
- **Ocultação de perda de pacotes** — preenche frames em falta durante até **200 ms** e depois desvanece para silêncio, em vez de esticar o último frame bom num arrastar robótico. O áudio retoma limpo quando chegam pacotes reais.
- **Limitador** — teto de −1 dB, rácio 10:1, release de 50 ms, aplicado antes da codificação. Dispara ao mesmo nível que acende o indicador **PEAK**, pelo que o indicador significa precisamente "o limitador está a atuar".
