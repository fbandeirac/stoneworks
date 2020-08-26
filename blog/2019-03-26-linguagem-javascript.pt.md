---
title: Controlando o brilho de dispositivos no linux Mint
description: >-
  Dicas de como controlar o brilho dos seus dispositivos em sistemas baseados no
  Ubuntu.
date: '2020-08-25 12:21:00'
image: /assets/img/brightness.png
category: Others
background: '#bdc3c7'
---
# A sensação de queimação

Ultimamente tenho passado muito mais tempo na frente do computador, com a pandemia do COVID-19, meus olhos não tem tido muito descanso das telas, e há alguns dias atrás eu comecei a sentir meus olhos ardendo, queimando. Passei um final de semana evitando ao máximo telas em geral, e o ardor passou. Na segunda-feira à noite, após passar a trabalhar no meu computador pessoal, a dor voltou. Naquele dia eu deixei o meu computador do trabalho ligado, e então eu percebi que a tela do computador do trabalho era muito mais suave do que do meu computador pessoal, que tinha um brilho cegante. Eu nunca tinha percebido, não sei como! Talvez eu só tenha percebido depois de forçar tanto minha vista, mas eu realmente não sei como não notei antes.

## Onde esconderam o gerenciador de brilho?

O Linux Mint é ótimo, eu realmente adoro ele! É rápido, confiável, muitas coisas funcionam sem precisar configurar, algumas não funcionam mas existe uma comunidade ENORME para ajudar, sim... é ótimo... mas sabe... às vezes... algumas coisas... são simplemsente... estranhas.

Eu passei cerca de 10 minutos procurando em todos os menus e configurações possíveis por onde que se configura o brilho da tela do meu notebook. Até que decidi pesquisar online, e descobri que se encontra no Gerenciador de Energia... mas no widget dele!

Eu desabilitei o widget quanto instalei a distribuição, minha bateria morreu há alguns anos e o custo de uma nova é absurdo, então ele era inútil. Na tela de configuração do Gerenciador de Energia só dá para alterar o nível de brilho quando o computador não está sendo utilizado. Me pergunto se o menu é diferente em desktops.

Então, eu acabei descobrindo o aplicativo [**brightnessctl**][1] que é ótimo! Eu não consigo testar no momento, porque eu não tenho um equipamento cheio de frufru e colorido, mas esse programa detectou vários dispositivos no meu computador, e eu acredito que podemos controlar a iluminação de todos eles com este programa.

Uma das coisas que eu mais gostei é que ele está disponível nos repositórios oficiais, o que normalmente significa que é um aplicativo seguro. As outras opções que encontrei eram aplicações de repositórios proprietários, o que eu evito um pouco usar.


## Instalando o brightnessctl
O programa está disponível em outras distribuições também, como Alpine, Arch, Fedora e outros. A sintaxe do programa é a mesma, mas a instalação e execução provavelmente serão diferentes en distribuições não derivadas do debian/ubuntu.

The program runs from a terminal, but don't worry, the syntax is simple and it doesn't have a million command options.

To install, just go to your software manager, search for brightnessctl and install, or from a terminal, run:
```
sudo apt update && apt install brightnessctl
```
To use it very simple, the syntax is `brightnessctl [options] [operation] [value]`.

Below is the list of what I though to be the most important options:
```
  -l, --list			list devices with available brightness controls.
  -n, --min-value		set minimum brightness, defaults to 1.
  -s, --save			save state in a temporary file.
  -r, --restore			restore previous state.
  -h, --help			print the help list.
  -d, --device=DEVICE		specify device name (can be a wildcard).
  -c, --class=CLASS		specify device class.
```
The full list is available with the `brightnessctl -h` command.

The first thing we need to do first is to know what devices do we have, so run:
```
sudo brightnessctl -l
```
The result in this example is:
```
Available devices:
Device 'radeon_bl0' of class 'backlight':
	Current brightness: 255 (100%)
	Max brightness: 255

Device 'input4::capslock' of class 'leds':
	Current brightness: 0 (0%)
	Max brightness: 1

Device 'input4::scrolllock' of class 'leds':
	Current brightness: 0 (0%)
	Max brightness: 1
```

What does that means? The first device is my laptop screen, with the radeon name (my graphics card) and the 'backlight' class. The second and third devices are indicator leds from my keyboard when the capslock and scrolllock are turned on, they have the 'leds' class. 

We can change the device settings by device name OR by class! So if we wanted to light up all the leds at once, we could just run:
```
sudo brightnessctl -c led -s 100%
```
To set the screen to 50% of max level, we would run:
```
sudo brightnessctl -d radeon_bl0 -s 50%
```
The -c stands for class and -d for device, the values can be set with percentage, specific value or delta.

From my findings, the official repository is [this][1]. There you can find more explanations about the usage, how to set permissions to work without sudo, and get the most recent version.

[1]: (https://github.com/Hummer12007/brightnessctl)
