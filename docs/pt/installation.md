# Instalação

O VoxLink funciona em telemóveis Android e rádios PoC, e em computadores Windows e Linux.

## Android

### Requisitos

- Android 8.0 (Oreo) ou superior
- Ligação à Internet (Wi-Fi ou dados móveis)
- Dados de ligação ao refletor fornecidos pelo seu clube ou administrador: servidor, porta, número de talkgroup e chave de autenticação

### Instalar a partir do Google Play

1. Abra a [**página do VoxLink no Google Play**](https://play.google.com/store/apps/details?id=com.jcalado.voxlink).
2. Toque em **Instalar**.

### Instalar o APK manualmente

Se recebeu um ficheiro APK diretamente (por exemplo, de uma versão beta ou do seu clube), ou descarregou um do site:

1. Ative **Instalar aplicações desconhecidas** para o seu gestor de ficheiros ou navegador: **Definições > Aplicações > Acesso especial > Instalar aplicações desconhecidas**.
2. Abra o ficheiro APK no dispositivo e toque em **Instalar**.

Para instalar via ADB:

```bash
adb install VoxLink.apk
```

> As instalações manuais não recebem atualizações da Play Store — confirme com a sua fonte se há versões novas.

### Permissões

**Microfone** — Necessária para transmitir. O Android pede-a no primeiro arranque — toque em **Permitir**.

Se a recusou por engano: **Definições > Aplicações > VoxLink > Permissões > Microfone > Permitir**.

**Notificações** (Android 13+) — Permite ao VoxLink mostrar uma notificação de estado permanente enquanto está ligado. Nos rádios Hytera, esta permissão comanda também o [LED de estado](/docs/hardware-controls) — se a recusar, o LED fica apagado.

**Bluetooth** (Android 12+) — Necessária para encaminhar áudio para um dispositivo Bluetooth. O VoxLink pede-a quando seleciona uma saída Bluetooth pela primeira vez.

---

## Computador

![VoxLink no computador](/docs/desktop-app.webp)

A versão para computador é a mesma aplicação, com uma barra de navegação lateral em vez da barra inferior. Tudo o que não depende do hardware do telemóvel funciona da mesma forma — servidores, talkgroups, modos de PTT, gravação, APRS, Modo Carro.

Escolha uma versão no menu **Descarregar** do site.

### Windows

Execute o instalador (`VoxLink-<versão>-setup.exe`) e siga os passos. O SmartScreen do Windows pode avisar sobre um editor desconhecido na primeira execução — escolha **Mais informações > Executar mesmo assim**.

### Linux

São publicados dois formatos:

| Formato | Instalação |
|---|---|
| **AppImage** | `chmod +x VoxLink-<versão>-x86_64.AppImage` e execute. Não precisa de instalação. |
| **.deb** | `sudo apt install ./voxlink_<versão>_amd64.deb` em Debian/Ubuntu. |

O `.deb` depende de `libgtk-3-0` e `libayatana-appindicator3-1` (este último fornece o ícone na área de notificação); o apt instala ambos automaticamente.

### Área de notificação

Em ambos os sistemas, o VoxLink fica na área de notificação enquanto corre, com um menu **Mostrar / Desligar / Sair**. Ative **Definições > Ligação > Fechar para a área de notificação** e fechar a janela mantém o VoxLink a correr e ligado, em vez de o encerrar.

### O que é diferente no computador

- As **definições de áudio** mostram apenas a secção **Volume**. Encaminhamento, fonte de entrada, modo de áudio Bluetooth e volume extra são conceitos do Android — no computador, são as definições de som do sistema que mandam.
- O **Modo Carro** funciona, mas só a opção **Entrar no arranque** se aplica. O brilho máximo, o gatilho do carregador e o gatilho Bluetooth assentam em APIs de hardware do Android.
- As **associações de teclas** funcionam — associe uma tecla do teclado ao PTT, ao talkgroup seguinte/anterior ou à alternância do Modo Carro. Apenas os **acessórios de PTT Bluetooth** são exclusivos do Android.
