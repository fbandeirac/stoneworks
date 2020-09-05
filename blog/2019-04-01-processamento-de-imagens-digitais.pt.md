---
title: Diminuindo o tamanho das imagens
description: >-
  Na ciência da computação, o processamento de imagem digital é o uso de
  algoritmos de computador para executar o processamento de imagens em imagens
  digitais.
date: '2020-09-05 07:41:34'
image: /assets/img/tinijpg.png
category: Images
background: '#079992'
---
A tecnologia evolui tão rápido, a maior parte das vezes nem temos tempo de assimilar corretamente a situação atual que algo novo aparece para nos manter constantemente impressionados.

Eu sou do tempo em que o disquete de 1.44MB era uma inovação incrivel, um dispositivo menor e com cerca do dobro da capacidade dos outros disquetes que conhecia! Me lembro quando meu sonho era possuir um HD com 1TB de capacidade, acreditava que poderia salvar tudo o que eu poderia querer, e nunca mais teria que passar pela difícil situação de decidir qual arquivo escluir para salvar uma nova imagem ou música.

Tive a sorte de crescer com acesso à internet, morei em uma cidade grande (São Paulo) onde existiam muitos provedores gratuitos de internet na era da internet discada, a conexão era EXTREMAMENTE lenta, mas funcionava. Um dia descobri sobre as conexões T1, e o meu objetivo para a vida adulta se tornou ser rico o suficiente para poder pagar por elas (essas conexões eram muito caras na época, somente grandes empresas possuíam).

Vinte anos depois, a memória do meu celular e a velocidade de conexão são muito maiores do que eu poderia sonhar quando adolescente. E a parte engraçada disso é que eu ainda me preocupo com tamanho de arquivos e velocidade de conexão.

Como desenvolvedor, tenho que analisar a parte técnica e o consumo de recursos da aplicação, mas também preciso analisar o lado do usuário, pensando em entregar a melhor experiência possível. Sei que acesso à internet de qualidade ainda não é algo comum no mundo todo, e o mesmo se aplica para dispositivos de qualidade. Em cima disso, ainda tenho que considerar que a maioria dos planos de internet para celular tem limite de dados, e o tamanho das imagens tem um grande impacto nisso.

Então, como enfrentar esse problema do tamho da imagem?

Existem algumas técnicas utilizadas para resolver esse problema:

- **Combinar cores similares** - Colocando de forma simples, com menor cores precisamos de um espectro menor de cores, o que significa menos dados sendo guardados. A mesma coisa se aplica para áreas, vamos considerar uma área de 10x10 pixels. Se todos eles são azuis, a informação salva é mais ou menos assim: (1 10,1 10, blue) o que significa que do pixel 1 ao 10 no eixo X e do 1 ao 10 no eixo Y, todos os pixels são azuis. Agora, se cada linha recebe uma cor diferente, algo assim seria armazenado: (1 10,1 1, blue),(1 10,2 2, yellow),(1 10,3 3, brown),(1 10,4 4, red),(1 10,5 5, purple),(1 10,6 6, green),(1 10,7 7, cyan),(1 10,8 8, black),(1 10,9 9, white),(1 10,10 10, orange), o que significa que a primeira linha horizontal é azul, a segunda é amarela, e por assim vai, utilizando muito mais espaço de armazenamento. Áreas maiores da mesma cor utilizam muito menos dados. 

- **Removendo metadata** - Metadata ou metadado são dados sobre dados. Quando se trata de imagens, normalmente contém informações sobre a câmera utilizada para tirar a foto, ou as ferramentas utilizadas para criar a imagem, direitos autorais, esquema de cores, etc. Algumas vezes existe a tag mas não existe a informação, ou informações que não estão sendo utilizadas ou não são necessárias, portanto a sua remoção vai exigir menos espaço para armazenar o arquivo.

- **Redimensionar/Cortar a imagem** - Se estamos enviando uma imagem de alta resolução, uma foto, papel de parede ou algo assim, é aceitável utilizar uma imagem de 5300x3600 pixels. Se estamos postando uma imagem de avatar, uma imagem de cerca de 200x200 pixels vai ser perfeita. Imagens menores utilizam menos espaço.

- **Converter para outro formato/método de compressão** - Cada formato de imagem utiliza um método de compressão, bem, alguns não usam nenhum! JPG/JPEG e PNG são provavelmente os formatos de imagens mais utilizados na internet, eles são pequenos e perdem um pouco de qualidade quando manipulados ou comprimidos. Dependendo do objetivo, o formato ideal pode variar.

A maneira mais rápida e fácil que encontrei para resolver a maioria desses problemas de uma vez foi utilizar uma ferramenta bem versátil chamada [TinyPNG][1].

## TinyPNG
[TinyPNG][1] é uma ferramenta para diminuir imagens com algumas opções interessantes, como redimensionar, detecção de área de interesse (muito útil quando lidamos com avatares),salvar na Amazon S3, Google Cloud e DropBox, e mais alguns truques. Existe uma implementação web, add-ons para vários CMS e ferramentas, e uma API para as nossas necessidades de desenvolvimento. 

O site do [TinyPNG][1] tem um gêmeo quase idêntico, o [TinyJPEG][2]. Eles são diferentes apenas na página inicial e nos nomes dos links, mas a funcionalidade é a mesma. Estarei me referindo apenas como TinyPNG poeque é como está no e-mail que eles disponibilizam para contato em ambas as versões do site.

Você pode estar se perguntando: "Mas o quão boa é essa ferramenta?"

Bem, eu não sou um expert, vamos deixar isso claro, mas das imagens que testei, eu não consegui encontrar uma outra ferramenta que fosse tão simples, com opções tão interessantes e uma melhor proporção qualidade/tamanho da imagem.

### Utilização básica - WEB

A utilização básica é bastante simples. No topo da página inicial existe uma grande área onde se pode arrastar e soltar as imagens, ou clicar para selecionar os arquivos. As limitações são: máximo de 20 arquivos por vez, e no máximo 5MB cada arquivo.

Após o término do upload, as imagens são processadas (todos os metadados são removidos e cores similares são combinadas, sem opções neste modo) e disponibilizadas para download ou salvar no DropBox.

Algumas informações interessantes sobre as imagens são mostradas, como o tamanho antes/depois, o percentual de compressão dos arquivos individuais e total. Se foi enviada mais de uma imagem, é possível realizar o download de todas de uma vez em arquivo zip.

A captura de tela abaixo é a versão comprimida da captura de tela original realizada com o Flameshot.

![Interface WEB do TinyPNG](/assets/img/test.png "Interface WEB do TinyPNG")

### Recursos extras - API

A API é bem construída e simples de utilizar. Ela requer uma chave de uso, que pode ser obtida facilmente [aqui][3]. 
In the following examples I'm using [curl][6] from the terminal for my requests. The image file is in the same directory, if the image is in a different directory, you must provide the correct path. The `YOUR_TOKEN_KEY` should be exchanged by the token you received from TinyPNG.
Let's take a look at some use cases. In the example below I'm sending an image with no special parameters, like would happen with the web usage.
```curl https://api.tinify.com/shrink --user api:YOUR_TOKEN_KEY --data-binary @big_image.jpg ```After processing we get the following JSON as a response (it's not pretty like that, the code below is formatted for better readability):```{  "input":{    "size":3427751,    "type":"image/jpeg"  },  "output":{    "size":1372446,    "type":"image/jpeg",    "width":5252,    "height":3488,    "ratio":0.4004,    "url":"https://api.tinify.com/output/fdpe0qjwmuh7q526177gwyezkp0ctg4j"  }```There's some interesting and useful info on our response. We have file and image sizes, file type, ratio of compression and a URL where we can download our image. This URL is accessible by browser or we can retrieve the image through curl, wget or any other desirable way. The processed file gets a random name, *fdpe0qjwmuh7q526177gwyezkp0ctg4j* in this case.
To save it with a specific name, we can use```curl https://api.tinify.com/output/fdpe0qjwmuh7q526177gwyezkp0ctg4j --output small_image.jpg```Now, if we want to resize the image, we don't need to upload it again, we use a different request with the file we want, and a small JSON with what we need in key value pairs. In this case, I'm asking to resize the image to 150x100 pixels.```curl https://api.tinify.com/output/fdpe0qjwmuh7q526177gwyezkp0ctg4j --user api:YOUR_TOKEN_KEY --header "Content-Type: application/json" --data '{ "resize": { "method": "fit", "width": 150, "height": 100 } }' --output small_resized.jpg```
There are some other request options that make life easier by resizing or cuttin on the fly. They are: `scale`, `cover` and `thumb`.
Another interesting option is to preserve metadata like copyright, creation and location. It's important to notice that preserving metadata will raise a little the file size. In this example we are preserving `location` and `creation`:```curl https://api.tinify.com/output/fdpe0qjwmuh7q526177gwyezkp0ctg4j --user api:YOUR_TOKEN_KEY --header "Content-Type: application/json" --data '{ "preserve": ["location", "creation"] }' --output small_metadata.jpg```The [API Reference][4] have a more profound description of all the features, also examples for integration with Amazon S3 and Google Cloud Storage.
If you're interested in checking out the [original image][8] used in these examples and comparing the results, it's a [beautiful picture][8] by [Priscilla Du Preez][7]. Check out her work, is awesome!
### Third-Party
A cool thing about TinyPNG is that they keep a section for [third-party solutions][5]. This section contains free and paid solutions, which must be categorized in:- [**Content Management**][9]- [**Desktop**][10]- [**Development**][11]- [**E-Commerce**][12]
Each developer/company is responsible for its product and implementation, so if you're interested in any of them, TinyPNG won't be able to help.
### Other solutions
TinyPNG offer a some other products, like a Photoshop Plugin for your compressing needs, their own CDN and an analyzer that quickly checks a site for images and how much TinyPNG can help improve it's performance.
---
I hope you find this post useful and if you have any questions, comments or recommendations, feel free to contact me.


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
