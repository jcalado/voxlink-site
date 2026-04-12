# Definições de Áudio

Configure o áudio em **Definições > Áudio**.

![Definições de áudio](/docs/settings-screen.webp)

## Ganho do Microfone

**Definições > Áudio > Ganho do Microfone** — **0% a 200%**, predefinição **100%**.

Aumente se outras estações reportam que o seu áudio está muito baixo. Diminua se está a saturar. Um limitador integrado (teto de −1 dB, rácio 10:1) previne distorção independentemente do ganho.

## Volume RX

**Definições > Áudio > Volume RX** — **0% a 200%**, predefinição **70%**.

Controla o volume do áudio recebido independentemente do volume do sistema Android.

## Medidores de Nível

O ecrã PTT mostra dois medidores em tempo real:

- **TX** — o nível do seu microfone enquanto transmite. Aponte para picos entre −10 dB e −6 dB.
- **RX** — o nível do áudio recebido enquanto está a receber.

## Saída de Áudio

Escolha onde ouve o áudio em **Definições > Áudio > Saída**:

| Opção | Caso de uso |
|---|---|
| **Altifalante** | Mãos-livres, altifalante |
| **Auricular** | Audição privada |
| **Bluetooth** | Auriculares sem fios |

## Fonte de Entrada

Escolha a fonte do microfone em **Definições > Áudio > Entrada**:

| Opção | Notas |
|---|---|
| **Voice Comms** | Recomendado — inclui cancelamento de eco e supressão de ruído |
| **Microfone** | Entrada direta, sem processamento |
| **Voice Recognition** | Entrada direta de alta qualidade |

> Mantenha o **Voice Comms** a menos que tenha razão para mudar. A supressão de ruído integrada do Android faz uma grande diferença em dispositivos móveis.

## Codec

O VoxLink usa Opus a 16 kHz mono, frames de 20 ms, 20 kbps VBR. Estas definições são fixas — não é necessário ajuste.

## Nos Bastidores

Estes são tratados automaticamente e não podem ser ajustados:

- **Resampler** — converte entre a taxa de amostragem do seu dispositivo e a taxa de 16 kHz do codec
- **Jitter buffer** — capacidade de 24 frames com pré-buffer de 3 frames, suaviza variações de tempo da rede
- **Ocultação de perda de pacotes** — preenche frames de áudio em falta para reduzir interrupções
- **Limitador** — teto de −1 dB, rácio 10:1, release de 50 ms, aplicado antes da codificação
