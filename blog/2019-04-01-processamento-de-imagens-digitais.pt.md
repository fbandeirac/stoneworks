---
title: Diminuindo o tamanho das imagens
description: >-
  Como utilizar o TyniPNG/TinyJPEG para diminuir o tamanho das imagens sem
  perder drasticamente a qualidade.
date: '2020-09-05 07:41:34'
image: /assets/img/tinijpg.png
category: Images
background: '#079992'
---
A tecnologia evolui tão rápido, a maior parte das vezes nem temos tempo de assimilar corretamente a situação atual que algo novo aparece para nos manter constantemente impressionados.

Eu sou do tempo em que o disquete de 1.44MB era uma inovação incrivel, um dispositivo menor e com cerca do dobro da capacidade dos outros disquetes que conhecia! Me lembro quando meu sonho era possuir um HD com 1TB de capacidade, acreditava que poderia salvar tudo o que eu poderia querer, e nunca mais teria que passar pela difícil situação de decidir qual arquivo excluir para salvar uma nova imagem ou música.

Tive a sorte de crescer com acesso à internet, morei em uma cidade grande (São Paulo) onde existiam muitos provedores gratuitos de internet na era da internet discada, a conexão era EXTREMAMENTE lenta, mas funcionava. Um dia descobri sobre as conexões T1, e o meu objetivo para a vida adulta se tornou ser rico o suficiente para poder pagar por elas (essas conexões eram muito caras na época, somente grandes empresas possuíam).

Vinte anos depois, a memória do meu celular e a velocidade de conexão são muito maiores do que eu poderia sonhar quando adolescente. E a parte engraçada disso é que eu ainda me preocupo com tamanho de arquivos e velocidade de conexão.

Como desenvolvedor, tenho que analisar a parte técnica e o consumo de recursos da aplicação, mas também preciso analisar o lado do usuário, pensando em entregar a melhor experiência possível. Sei que acesso à internet de qualidade ainda não é algo comum no mundo todo, e o mesmo se aplica para dispositivos de qualidade. Em cima disso, ainda tenho que considerar que a maioria dos planos de internet para celular tem limite de dados, e o tamanho das imagens tem um grande impacto nisso.

Então, como enfrentar esse problema do tamanho da imagem?

Existem algumas técnicas utilizadas para resolver esse problema:

- **Combinar cores similares** - Colocando de forma simples, com menor cores precisamos de um espectro menor de cores, o que significa menos dados sendo guardados. A mesma coisa se aplica para áreas, vamos considerar uma área de 10x10 pixels. Se todos eles são azuis, a informação salva é mais ou menos assim: (1 10,1 10, blue) o que significa que do pixel 1 ao 10 no eixo X e do 1 ao 10 no eixo Y, todos os pixels são azuis. Agora, se cada linha recebe uma cor diferente, algo assim seria armazenado: (1 10,1 1, blue),(1 10,2 2, yellow),(1 10,3 3, brown),(1 10,4 4, red),(1 10,5 5, purple),(1 10,6 6, green),(1 10,7 7, cyan),(1 10,8 8, black),(1 10,9 9, white),(1 10,10 10, orange), o que significa que a primeira linha horizontal é azul, a segunda é amarela, e por assim vai, utilizando muito mais espaço de armazenamento. Áreas maiores da mesma cor utilizam muito menos dados. 

- **Removendo metadata** - Metadata ou metadado são dados sobre dados. Quando se trata de imagens, normalmente contém informações sobre a câmera utilizada para tirar a foto, ou as ferramentas utilizadas para criar a imagem, direitos autorais, esquema de cores, etc. Algumas vezes existe a tag mas não existe a informação, ou informações que não estão sendo utilizadas ou não são necessárias, portanto a sua remoção vai exigir menos espaço para armazenar o arquivo.

- **Redimensionar/Cortar a imagem** - Se estamos enviando uma imagem de alta resolução, uma foto, papel de parede ou algo assim, é aceitável utilizar uma imagem de 5300x3600 pixels. Se estamos postando uma imagem de avatar, uma imagem de cerca de 200x200 pixels vai ser perfeita. Imagens menores utilizam menos espaço.

- **Converter para outro formato/método de compressão** - Cada formato de imagem utiliza um método de compressão, bem, alguns não usam nenhum! JPG/JPEG e PNG são provavelmente os formatos de imagens mais utilizados na internet, eles são pequenos e perdem um pouco de qualidade quando manipulados ou comprimidos. Dependendo do objetivo, o formato ideal pode variar.

A maneira mais rápida e fácil que encontrei para resolver a maioria desses problemas de uma vez foi utilizar uma ferramenta bem versátil chamada [TinyPNG][1].

## TinyPNG
[TinyPNG][1] é uma ferramenta para diminuir imagens com algumas opções interessantes, como redimensionar, detecção de área de interesse (muito útil quando lidamos com avatares),salvar na Amazon S3, Google Cloud e DropBox, e mais alguns truques. Existe uma implementação web, add-ons para vários CMS e ferramentas, e uma API para as nossas necessidades de desenvolvimento. 

O site do [TinyPNG][1] tem um gêmeo quase idêntico, o [TinyJPEG][2]. Eles são diferentes apenas na página inicial e nos nomes dos links, mas a funcionalidade é a mesma. Estarei me referindo apenas como TinyPNG porque é como está no e-mail que eles disponibilizam para contato em ambas as versões do site.

Você pode estar se perguntando: "Mas o quão boa é essa ferramenta?"

Bem, eu não sou um expert, vamos deixar isso claro, mas das imagens que testei, eu não consegui encontrar uma outra ferramenta que fosse tão simples, com opções tão interessantes e uma melhor proporção qualidade/tamanho da imagem.

### Utilização básica - WEB

A utilização básica é bastante simples. No topo da página inicial existe uma grande área onde se pode arrastar e soltar as imagens, ou clicar para selecionar os arquivos. As limitações são: máximo de 20 arquivos por vez, e no máximo 5MB cada arquivo.

Após o término do upload, as imagens são processadas (todos os metadados são removidos e cores similares são combinadas, sem opções neste modo) e disponibilizadas para download ou salvar no DropBox.

Algumas informações interessantes sobre as imagens são mostradas, como o tamanho antes/depois, o percentual de compressão dos arquivos individuais e total. Se foi enviada mais de uma imagem, é possível realizar o download de todas de uma vez em arquivo zip.

A captura de tela abaixo é a versão comprimida da captura de tela original realizada com o Flameshot.

![Interface WEB do TinyPNG](/assets/img/test.png "Interface WEB do TinyPNG")

### Recursos extras - API

A API é bem construída e simples de utilizar. Ela requer uma chave de autenticação (token), que pode ser obtida facilmente [aqui][3].

Nos exemplos a seguir vou utilizar o [curl][6] a partir do terminal para as minhas requisições. A os arquivos de imagem estão no mesmo diretório, se a imagem estiver em outro diretório, deve ser utilizado o caminho adequado. Onde está escrito `SUA_CHAVE` deve ser trocada pela chave de autenticação que você recebeu do TinyPNG.

Vamos analisar alguns casos de uso. No exemplo abaixo estou enviando uma imagem sem nenhum parâmetro especial, como aconteceria na utilização pelo site.

```curl https://api.tinify.com/shrink --user api:SUA_CHAVE --data-binary @big_image.jpg ```

Após o processamento, recebemos o seguinte JSON como resposta (ele não vem bonitinho assim, o código abaixo está formatado para facilitar a leitura):

```
{
  "input":{
    "size":3427751,
    "type":"image/jpeg"
  },
  "output":{
    "size":1372446,
    "type":"image/jpeg",
    "width":5252,
    "height":3488,
    "ratio":0.4004,
    "url":"https://api.tinify.com/output/fdpe0qjwmuh7q526177gwyezkp0ctg4j"
  }
```

Na resposta temos algumas informações interessantes e úteis. Temos o tamanho da imagem e do arquivo, tipo de arquivo, proporção de compressão e uma URL onde podemos fazer o download da imagem. Essa URL é acessível pelo navegador, ou podemos pegar a imagem através do curl, wget ou qualquer outra forma desejada. O arquivo processado recebe um nome aleatório, *fdpe0qjwmuh7q526177gwyezkp0ctg4j* neste caso.

Para escolher o nome para salvar o arquivo, podemos usar o seguinte código
```
curl https://api.tinify.com/output/fdpe0qjwmuh7q526177gwyezkp0ctg4j --output small_image.jpg
```

Agora, se quisermos redimensionar a imagem, não precisamos fazer o upload novamente, podemos utilizar uma requisição diferente passando o arquivo que desejamos e um pequeno trecho no formato JSON, com a nossa solicitação em pares de chave-valor. Neste caso, estou solicitando que a imagem seja redimensionada para 150x100 pixels.
```
curl https://api.tinify.com/output/fdpe0qjwmuh7q526177gwyezkp0ctg4j --user api:SUA_CHAVE --header "Content-Type: application/json" --data '{ "resize": { "method": "fit", "width": 150, "height": 100 } }' --output small_resized.jpg
```

Existem algumas outras opções de requisição que vão tornar a vida mais fácil, realizando redimensionamento ou cortando durante o processamento. Eles são: `scale` (escala), `cover` (capa) e `thumb` (miniatura).

Outra opção interessante é a possibilidade de preservar os metadados como copyright (direitos autorais), creation (criação) e location (localização). É importante salientar que preservar os metadados vai aumentar um pouco o tamanho do arquivo final. Neste exemplo estaremos solicitando a preservação das tags `location` (localização) e `creation` (criação):

```
curl https://api.tinify.com/output/fdpe0qjwmuh7q526177gwyezkp0ctg4j --user api:SUA_CHAVE --header "Content-Type: application/json" --data '{ "preserve": ["location", "creation"] }' --output small_metadata.jpg
```

O [Manual da API][4] possui uma descrição mais profunda de todas as opções, bem como exemplos de integração com o Amazon S3 e Google Cloud Storage.

Se você tem interesse em conferir a [imagem original][8] utilizada nos exemplos e comparar os resultados, é uma [belíssima foto][8] tirada por [Priscilla Du Preez][7]. Dê uma olhada no trabalho dela, é incrível!

### Terceiros

Uma coisa legal do TinyPNG é que eles mantém uma seção no site para [soluções de terceiros][5]. Essa seção contém soluções gratuitas e pagas, que são categorizadas em:
- [**Content Management**][9] - Gerenciadores de conteúdo (CMS)
- [**Desktop**][10] - Aplicações desktop com interface de usuário
- [**Development**][11] - Aplicações voltadas para desenvolvedores, como CLIs
- [**E-Commerce**][12] - Add-ons para plataformas de E-Commerce

Cada desenvolvedor/empresa é responsável pelo seu produto e implementação, portanto se você tem interesse em algum deles, o pessoal do TinyPNG não vai poder te ajudar.

### Outras Soluções

O TinyPNG oferece alguns outros produtos, como um plugin de compressão de imagens para Photoshop, sua própria CDN, e um analisador que verifica rapidamente as imagens de um site e retorna o quanto o TinyPNG poderia ajudar a melhorar a performance.

---

Espero que tenha achado essa postagem útil, e se tiver alguma dúvida, comentário ou recomendação, fique à vontade para entrar em contato.

[1]: (https://tinypng.com)
[2]: (https://tinyjpg.com)
[3]: (https://tinyjpg.com/developers)
[4]: (https://tinyjpg.com/developers/reference)
[5]: (https://tinyjpg.com/third-party)
[6]: (https://curl.haxx.se/)
[7]: (https://unsplash.com/@priscilladupreez)
[8]: (https://unsplash.com/photos/HhCANDrFzZ0)
[9]: (https://tinyjpg.com/third-party#content-management)
[10]: (https://tinyjpg.com/third-party#desktop)
[11]: (https://tinyjpg.com/third-party#development)
[12]: (https://tinyjpg.com/third-party#e-commerce)
