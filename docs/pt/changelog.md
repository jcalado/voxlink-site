# Registo de Alterações

## 1.5.0

### Novidades

- **Seletor de talkgroups renovado** — uma única lista pesquisável (presets + monitorizados + em scan). Escreva um número para mudar para ele ou guardá-lo como talkgroup. **Guardar / Remover**, **Monitorizar** e **Adicionar à pesquisa** por linha, num menu organizado; a pesquisa é um botão; ecrã inteiro com navegação por D-pad nos rádios compactos.
- **Talkgroups no formulário de servidor** — adicione, edite e reordene os talkgroups de um servidor onde o cria ou edita; o campo "Talkgroup" separado e o antigo ecrã de presets desapareceram.
- **Seguir QSY do servidor** — opcionalmente acompanhe as mudanças de talkgroup iniciadas pelo servidor, com aviso no ecrã e interruptor por servidor.
- **Sair** a partir do menu de navegação.
- **Hytera P50** — associa automaticamente o seletor (dial) de talkgroup.
- **Ocultar o botão PTT do ecrã** — para quem usa VOX ou PTT externo.
- Suporte para **ambiente de trabalho Linux**.

### Alterado

- Caixas de diálogo em ecrã inteiro e disposição mais compacta e alinhada às margens nos rádios compactos.
- Os **controlos de hardware** estão agora sempre ativos — o interruptor redundante foi removido; basta associar uma tecla.

### Corrigido

- Editar um servidor já não apaga os seus talkgroups em scan.
- Introdução de texto por tecla de hardware / D-pad: a tecla apagar (Back) passa a apagar caracteres e mantém-se no campo até ele ficar vazio.

## 1.3.1

### Novidades

- **Linha do temporizador TX / TOT** no ecrã PTT (opcional) — contagem decrescente visível durante a transmissão
- Item **Sair** no menu de ligação do ecrã PTT (opcional) — fecha a app sem ter de entrar nas definições
- Seletor de **modo de áudio Bluetooth** — escolha entre encaminhamento de chamada de voz ou multimédia para os auriculares BT
- Tocall APRS atualizado para o oficialmente atribuído **APVOXL**

### Correções

- Funcionamento em segundo plano mais fiável — APRS, áudio e localização continuam a funcionar quando a app não está em primeiro plano
- Áudio mais limpo no fim das transmissões e menos cortes após longos períodos de inatividade
- As definições de monitorização e scan persistem entre arranques, e já não ouve tráfego de um talkgroup do qual mudou
- Beaconing APRS mais inteligente quando a velocidade do GPS não é fiável
- Várias pequenas correções de estabilidade

## 1.3.0

### Novidades

- **Suporte APRS-IS** — o VoxLink é agora um cliente APRS. Ligue-se com o seu indicativo e passcode e tem:
    - Mapa em tempo real (OpenStreetMap) com marcadores das estações, etiquetas de indicativo e ícones Material para símbolos APRS comuns
    - Lista de estações ordenável por distância e último contacto, com folha de detalhe que mostra path, status, rumo/velocidade/altitude
    - **Mensagens APRS** — envio e receção de mensagens
    - Beaconing com dois **modos de posicionamento**: automático via GPS (com precisão configurável) ou seletor manual no mapa para localizações fixas, cada um com as suas definições
    - Operação em segundo plano através do serviço de primeiro plano, para que os beacons continuem a sair e o tráfego a chegar
    - Descodificação de posições comprimidas, Mic-E, rumo/velocidade/altitude, objetos e itens
    - Interruptor mestre para desligar a funcionalidade por completo; localizado em EN/PT
- Secção **Acessibilidade** com:
    - **Modo exterior** — botão PTT maior, com um anel exterior visível ao relance
    - **Indicador de quem fala em tamanho grande** — indicativo a 56px, subtítulo a 22px
    - **Flash verde** do ecrã ao início de RX
    - **Reduzir movimento** — desliga o indicador de ligação pulsante e outras animações ambiente
    - **Intensidade da vibração** — Desligada / Subtil / Forte, escala todas as durações
    - Vibração no **início e fim de TX**
    - Cores de alto contraste no botão PTT e no indicador de quem fala
- **Atividade dos monitores** — banner no ecrã PTT quando um TG monitorizado fica ativo (toque para mudar para ele), mais notificações do sistema para atividade dos monitores e quedas de ligação, com interruptores na nova secção Notificações. Janela de coalescência de 5s mantém o banner estável durante rajadas curtas.
- **Opus a 48 kHz** — encoder e decoder atualizados para melhor qualidade de áudio
- **Encaminhamento de áudio Bluetooth** trata corretamente o ciclo de vida da sessão de comunicação, resolvendo problemas antigos com auriculares BT
- **Definições reorganizadas** em sub-ecrãs focados (Transmissão, Áudio, PTT externo, Notificações, Ecrã PTT, Acessibilidade, Ligação, APRS), com cartões agrupados e navegação consistente por chevron
- **Manter ecrã ligado** (ligado a wakelock)
- **Exportação/importação de servidores** pelo menu de partilha, com aviso visível sobre segredos
- **Scan** de talkgroups
- O ecrã **Nós** separa a lista por atividade no talkgroup selecionado
- Reprodução evoluiu: reprodução baseada em playlist com tira na UI, pausa/retoma que preserva a posição absoluta, e o PTT manual interrompe a reprodução de forma limpa

### Alterado

- O primeiro servidor é ativado automaticamente ao adicionar e ao carregar, garantindo que o seletor PTT mostra sempre presets
- Cartão de servidor ativo e dashboard de servidores polidos
- "Auth Key" renomeado para "Password" no formulário de servidor
- Ecrã de nós: pílulas de tempo relativo localizadas (EN + PT); traduções em português melhoradas ("estações", "Ativas", "atividade")

### Corrigido

- Gravações: desfazer no swipe-to-delete passa a restaurar o ficheiro
- Fuga do microfone em VOX, teardown em erro do decoder e corridas no start/stop
- Underruns do AudioTrack ao drenar o jitter buffer
- Seletor PTT respeita os defaults de monitor por preset
- Pausa/retoma preserva a posição da reprodução (reportava posição relativa)
- Várias correcções menores de estabilidade e tradução

## 1.2.0

### Novidades

- **Reprodução de ficheiros de áudio** — transmita um ficheiro de áudio pré-gravado pelo ar a partir do ecrã PTT. Toque no botão de reprodução de ficheiro junto ao botão PTT para escolher um ficheiro; um cartão de progresso acompanha a reprodução. Desativado em modo VOX e enquanto outra estação está a falar. A monitorização local reproduz o ficheiro no altifalante enquanto transmite.
- Entrada **Talkgroups** no menu do servidor ativo — vá directamente para a gestão de presets sem abrir o formulário de edição
- Configuração opcional de presets de talkgroup logo após adicionar um novo servidor
- Percorra presets directamente no ecrã PTT com novos botões ‹ / › (quando o servidor tem dois ou mais presets)
- Monitorize um talkgroup arbitrário a partir do seletor com **Monitorizar outro TG…**, sem precisar de preset
- Opção **Monitorizar por omissão** por preset no ecrã de presets de talkgroup — fixe talkgroups específicos para serem sempre monitorizados ao ligar
- Links profundos / códigos QR `voxlink://` que pré-preenchem o formulário de novo servidor (`voxlink://host:port/?name=&user=&pass=&tg=`)
- Seletor de saída de áudio em tempo real nas Definições que lista os dispositivos efectivamente disponíveis (altifalante interno, auriculares com fios, auriculares Bluetooth emparelhados, etc.) em vez de um enum fixo
- Reencaminhamento automático: com **Saída de áudio** em **Auto**, ligar ou remover um auricular / dispositivo Bluetooth muda a rota em tempo real e mostra um aviso caso o dispositivo escolhido desapareça

### Alterado

- O cabeçalho do ecrã PTT agora mostra o **nome** do servidor (com o host como fallback) em vez do hostname puro
- As linhas de dispositivo de saída e fonte de entrada nas Definições passam a mostrar o nome do dispositivo/fonte por baixo da etiqueta para que nomes longos não quebrem desajeitadamente

### Corrigido

- As snackbars dos ecrãs Servidores e Gravações já se descartam automaticamente quando há um serviço de acessibilidade Android activo (antes ficavam permanentemente no ecrã, e as gravações eliminadas pela snackbar nunca eram apagadas do disco)
- O aviso "Ligação esgotada" deixa de permanecer no ecrã PTT após uma reconexão automática bem-sucedida
- O refletor já não tenta reconectar em ciclo após um erro de protocolo como **Acesso negado**

## 1.1.0

### Novidades

- Ecrã de boas-vindas para ajudar a começar no primeiro arranque
- Ligação automática agora funciona — liga automaticamente ao último servidor ao abrir a app
- Opção para fechar completamente a app ao pressionar voltar (Definições > Ligação > Sair ao fechar)
- Vibração extra de aviso quando o timeout de transmissão atinge 5 segundos

### Corrigido

- Crash ao fechar o diálogo de importação de servidor
- Menu do seletor de cores cortado em ecrãs mais pequenos
- Traduções em português melhoradas
- Títulos dos ecrãs agora alinham consistentemente em todos os separadores

## 1.0.0 — Primeiro lançamento!

Um cliente push-to-talk para refletores SvxLink de rádio amador.

- Push-to-talk com modos de manter, trincar e VOX
- Áudio Opus de alta qualidade com jitter buffer adaptativo
- Múltiplos perfis de servidor com importação/exportação JSON
- Lista de nós em tempo real com indicativo, nome e localização
- Seleção e monitorização de talkgroups
- Medição de níveis de áudio TX/RX
- Temporizador de timeout configurável com aviso por vibração
- Gravação e reprodução de conversas
