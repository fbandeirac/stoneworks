---
title: Criando um README do perfil no GitHub
description: Como ativar essa função e dar um toque pessoal ao seu perfil do GitHub.
date: '2020-08-23 04:21:23'
image: /assets/img/simple_octocat_computer.png
category: Markdown
background: '#353b48'
---
Há alguns meses o GitHub lançou uma função que permite aos usuários utilizarem um arquivo README específico a fim de melhorar a forma de interagir com a comunidade. Eu gostei muito, já que é uma maneira ótima de demonstrar um pouco da nossa personalidade e dos nossos objetivos.

Se você quer saber só como ativar essa função, pule para a seção **README do Perfil do GitHub**, se você quer conhecer um pouco mais sobre o que estou falando, continue lendo. :)

## O arquivo README

Arquivos README normalmente são encontrados em versões de software. Podem possuir nomenclaturas variadas, como ReadMe ou READ.ME, e ainda versões traduzidas como LEAME (es) e LEIAME (pt). O nome normalmente é escrito todo em letras maiúsculas, garantindo que o arquivo fique entre os primeiros listados no diretório em que se encontra.

O objetivo de um arquivo README é conter informações sobre o que está sendo entregue. Tópicos comuns são:

* Instruções de configuração, instalação e configuração
* Informações de licensa e direitos autorais
* Solução de problemas
* Créditos
* Registro de alterações

Adicionar um README a um repositório é uma prática comum. Normalmente possui uma breve explicação do projeto, sua utilização e quaisquer outras informações que o desenvolvedor acredite ser importante, como estar aberto para contribuições, se ainda estão sendo feitas manutenções, etc.

Os arquivos são tradicionalmente criados em texto simples (a maioria com extensão .txt, mas podendo até não possuir extensão alguma), mas para repositórios na internet, é preferível a utilização de arquivos Markdown (extensão .md ou .markdown), pois é fácil de utilizar e o resultado é ótimo!

## Markdown vs GitHub Markdown

Markdown é uma linguagem de marcação, como HTML, porém é muito mais legível quando não está renderizada, e propicia um certo padrão e visual limpo após ser renderizado.

Infelizmente, ao contrário do HTML, o Markdown não possui um padrão mundial, o mais próximo disto é o [CommonMark][1]. Após a criação da implementação básica, muitas entidades criaram e implementaram os próprios estilos e funcionalidades. A GitHub é uma delas, e criou a implementação [GitHub Flavored Markdown (GFM)][2], que aceita grande parte da implementação [CommonMark][1], mas possui algumas mudanças.

## README do Perfil do GitHub

O README do Perfil do GitHub pode ser utilizado para descrever melhor quem é você, sua conta, ou qualquer coisa que acredite ser interessante para apresentar à pessoa visitando o seu perfil no GitHub, da mesma forma que fazemos com o README de uma aplicação ou projeto.

### A diferença

A imagem abaixo mostra o perfil sem o README do Perfil...

![Um exempĺo de perfil do GitHub sem o README do Perfil](/assets/img/23-08-20_before.png "Minha conta sem o README do Perfil")

... e é assim que fica o perfil após adicionar o arquivo:

![Perfil do GitHub com README do Perfil](/assets/img/23-08-20_after.png "Minha conta com o README do Perfil")

Para utilizar essa função, precisamos:

* Criar um novo repositório com o mesmo nome de usuário da sua conta
* Tornar o repositório público
* Criar um arquivo chamado README.md

Nem um pouco complicado, certo?

Quando criamos um novo repositório no GitHub, encontramos a seguinte página, onde podemos fazer quase tudo o que precisamos.

![Imagem da tela de criação de novo repositório no GitHub](/assets/img/23-08-20_new_repo.png "Criando um novo repositório")

Como podemos ver, o GitHub já avisa que esse repositório é "✨ especial ✨". É só marcar como Público e inicializar com o README, e estamos prontos!

Depois de criado, podemos clicar no arquivo README, clicar no botão de edição, e podemos editar o arquivo sem nem fazer download! Legal não é? Podemos alterar em qualquer lugar, a qualquer momento, tudo o que precisamos é de um navegador e acesso à internet. :)

## Escrevendo as coisa tudo

Legal, criamos o nosso README do perfil. E agora?

Agora escrevemos qualquer coisa que quisermos! Como disse, podemos alterar a qualquer momento, e o efeito é imediato, podemos deixar a criatividade voar! Com Markdown podemos colocar links, imagens, tabelas, entre outros, e com o [GFM][2] temos acesso a algumas funcionalidades únicas, como destaque de sintaxe (colorização de código), menção de outros usuários, lista de tarefas e até [emojis](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)!

No meu perfil eu quis escrever um pouco sobre mim, meus apelidos, minha situação profissional e no que estou trabalhando. Também coloquei links para redes sociais, o blog e o curriculum.

[Esse repositório incrível](https://github.com/kautukkundan/Awesome-Profile-README-templates) possui vários modelos que podemos utilizar para ter idéias e criar um README do perfil maravilhoso.

Fique à vontade para entrar em contato e mostrar o que você criou! Adoraria ver!

[1]: https://commonmark.org/) "CommonMark"
[2]: https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown "GitHub Flavoured Markdown"
