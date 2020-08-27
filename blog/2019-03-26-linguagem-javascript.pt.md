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

Eu passei cerca de 20 minutos procurando em todos os menus e configurações possíveis por onde que se configura o brilho da tela do meu notebook. Até que decidi pesquisar online, e descobri que se encontra no Gerenciador de Energia... mas no widget dele!

Eu desabilitei o widget quanto instalei a distribuição, minha bateria morreu há alguns anos e o custo de uma nova é absurdo, então ele era inútil. Na tela de configuração do Gerenciador de Energia só dá para alterar o nível de redução do brilho quando o computador entra em modo de economia de energia/descanso. Me pergunto se o menu é diferente em desktops.

Então li sobre o aplicativo [**brightnessctl**][1], que é ótimo! Eu não consigo testar no momento, porque eu não tenho um equipamento cheio de LEDs coloridos, mas esse programa detectou vários dispositivos no meu computador, e acredito que podemos controlar a iluminação de todos eles com este programa.

## Instalando o brightnessctl

O programa está disponível nos repositórios oficiais, apesar de ser uma versão um pouco antiga, o que é comum. Está disponível em outras distribuições também, como Alpine, Arch, Fedora, entre outros. A sintaxe do programa é a mesma, mas os comandos de instalação provavelmente serão diferentes em distribuições não derivadas do Debian/Ubuntu.

O programa é executado a partir do terminal, mas não se preocupe, a sintaxe é simples e não possui um milhão de opções de comando.

Para instalar, abra o gerenciador de software da sua distribuição, pesquise por brightnessctl e instale, ou execute o seguinte comando a partir do terminal:
```
sudo apt update && apt install brightnessctl
```
A utilização é bem simples, a sintaxe é `brightnessctl [options] [operation] [value]`.

Abaixo está a lista dos comandos que julguei mais importantes:
```
  -l, --list			lista dispositivos passíveis de controle de brilho.
  -n, --min-value		configura o brilho mínimo, o padrão é 1.
  -s, --save			salva a configuração em um arquivo temporário.
  -r, --restore			restaura a configuração anterior.
  -h, --help			mostra a ajuda/lista de comandos.
  -d, --device=DEVICE		especifica o nome do dispositivo (pode usar caracter coringa).
  -c, --class=CLASS		especifica a classe do dispositivo.
```
Pode-se consultar a lista completa de comandos com o comando`brightnessctl -h` (em inglês.

A primeira coisa que precisamos é obter uma lista dos dispositivos disponíveis, obtemos essa lista com o comando:
```
sudo brightnessctl -l
```
O resultado neste exemplo é:
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

Vamos destrinchar um pouco esses resultados.
- O primeiro dispositivo (device) é a tela do meu notebook, com o nome começando com radeon (minha placa de vídeo), e a classe 'backlight'.
- O segundo e terceiro dispositivos são LEDs indicadores do teclado para quando as teclas capslock e scroll lock estiverem ativadas, eles possuem a classe 'leds'.

Podemos mudar as configurações do dispositivo pelo nome do dispositivo OU pelo nome da classe. Então, se quisermos ligar todos os LEDs de uma vez, podemos utilizar o comando:
```
sudo brightnessctl -c led -s 100%
```
Para configurar a tela com 50% do brilho máximo, utilizaríamos:
```
sudo brightnessctl -d radeon_bl0 -s 50%
```
O -c quer dizer classe e -d quer dizer dispositivo, os valores podem ser determinados com porcentagem, valores específicos, ou delta.

Pelo que pesquisei, o repositório oficial é [esse][1] (em inglês). Nele você pode encontrar a versão mais recente, bem como mais detalhes sobre a utilização, como definir permissões de modo que possa utilizar sem o sudo.

[1]: (https://github.com/Hummer12007/brightnessctl)
