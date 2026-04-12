# Operação em Segundo Plano

Como o VoxLink se mantém ligado quando o ecrã está desligado ou está noutra aplicação.

![Definições de ligação](/docs/settings-connection.webp)

## Notificação Persistente

Enquanto está ligado, o VoxLink mostra uma notificação na barra de estado. Isto mantém a aplicação a correr em segundo plano — o Android requer-a e não pode ser dispensada. Toque na notificação para voltar ao VoxLink.

## Otimização de Bateria

A otimização de bateria do Android pode terminar aplicações em segundo plano e quebrar a sua ligação. Para prevenir isto:

1. Vá a **Definições do Android > Aplicações > VoxLink > Bateria**.
2. Defina o uso de bateria como **Sem restrições** (pode também ser chamado **Não otimizar**).

Em alguns dispositivos pode aceder a isto pelo VoxLink: **Definições > Segundo Plano > Desativar Otimização de Bateria**.

> Esta é a correção mais comum para ligações que caem quando o ecrã está desligado — especialmente em dispositivos Huawei, Xiaomi, Samsung e OnePlus, que aplicam limites agressivos em segundo plano.

## Reconexão Automática

Se a ligação cair, o VoxLink reconecta automaticamente após um atraso de 2 segundos. A notificação mostra **A reconectar…** durante este tempo.

Para reconectar manualmente, desative em **Definições > Ligação > Reconexão Automática**.

## Ligação Automática ao Iniciar

Ative **Definições > Ligação > Ligação Automática** para reconectar ao último servidor automaticamente quando o VoxLink inicia. Desativado por defeito.

## Manter Ecrã Ligado

Ative **Definições > Ligação > Manter Ecrã Ligado** para prevenir que o ecrã se desligue enquanto está ligado. Útil para monitorização mãos-livres. Desativado por defeito.

## Saúde da Ligação

O VoxLink envia um heartbeat ao servidor a cada 5 segundos. Se nenhuma resposta chegar dentro de 15 segundos, a ligação é considerada perdida e a reconexão automática é ativada.
