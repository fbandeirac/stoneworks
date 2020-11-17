---
title: 'Frontend, backend, full-stack. Desenvolvedores e seus conflitos'
description: >-
  Sobre os conflitos entre as áreas de desenvolvimento e minha visão sobre o
  full-stack.
date: '2020-11-16 07:18:56'
image: /assets/img/drake_dev.png
category: Carreira
background: '#079992'
---
![](/assets/img/drake_dev.png)

Desde o dia em que optei pela carreira de desenvolvedor me deparei com várias palavras e expressões diferentes, algumas até estranhas, especialmente para quem não fala inglês nativamente. Enquanto eu tentava entender essas palavras, encarei um problema totalmente novo: qual carreira eu seguiria. Algum tempo depois eu descobri que o buraco é muuuito mais fundo do que eu pensei, mas vamos deixar essa conversa para outro post, a parte 'fácil' foi decidir entre me tornar Frontend ou Backend.

## Frontend x Backend

Colocando de forma bem simples, Frontend é a parte do software que o usuário vê e interage. Alguns exemplos são os aplicativos no seu celular, a página no site do banco onde você verifica seu extrato, uma loja online, etc.
Backend é a parte do software que o usuário (normalmente) nunca vai ver, que normalmente são chamados de 'servidores', então o servidor do seu banco é uma aplicação backend (não confunda um computador servidor com um servidor de aplicação, o computador servidor é a máquina, enquanto o servidor de aplicação é o software), o servidor do seu jogo online, site de busca, etc.

Você pode estar se perguntando 'Porque as coisas são dessa maneira? Agora você tem duas aplicações distintas para cuidar! Parece tão mais complicado fazer as coisas dessa forma!', bem, eu pelo menos me perguntei, e eu descobri que essa é uma área chamada Arquitetura de Software. Sim, é mais complicado. Sim, é mais difícil de dar manutenção (nem sempre). Sim, existem alguns pontos negativos, mas os benefícios são ótimos!

Um dos benefícios deste modelo é que temos 2 campos especializados. O Frontend é especializado na interação do usuário, controles, botões, cores, tamanhos, entre vários outros detalhes e campos relacionados que mudam a experiência do usuário. O Backend é especializado no modelo de negócio, ele se comunica com o Frontend mandando e recebendo dados. è responsável pela validação dos dados e da regra de negócio, processamentos mais pesados e comunicação com o banco de dados.

Você consegue imaginar o tamanho de uma aplicação se tivesse que ser entregue o cliente e o servidor para todo mundo, tudo junto? Não só o tamanho, mas o consumo de recursos como memória RAM e processamento do dispositivo subiriam vertiginosamente! Possuir um servidor de aplicação evita alguns problemas ao mandar ao usuário o mínimo necessário para a operação, desta maneira o aplicativo pode rodar em uma maior variedade de dispositivos, mesmo os mais antigos. Uma forma fácil de entender isso é comparar qualquer aplicação de planilha moderna(Excel, LibreOffice) com o Google Sheets. Eu sei que não é exatamente uma comparação justa, mas é o suficiente para entender o conceito.

Abrir uma nova planilha com o cache desabilitado transfere um total de 8.98 MB, enquanto a instalação do Excel é dentro de um pacote que consome cerca de 16GB, da última vez que verifiquei. O LibreOffice é um pouco menor quando comparado ao MS Office, ocupando cerca de 1.5GB. É uma diferença enorme, e isso acontece porque o LibreOffice e o MS Office são aplicações completas, todo o código e regras de formatação, utilização e criação de dicionários, conversão, exportação e importação de dados, enfim, todas as funcionalidades estão no pacote, enquanto no Google Sheet, é feito o download apenas do frontend da aplicação da planilha. O backend fica espalhado no mundo, nos diversos servidores do Google, e quando editamos uma planilha no navegador, essas informações são enviadas pelo front-end para o servidor de aplicação, que processa as alterações realizadas.

Não sei se você prestou atenção em um detalhe, quando eu falei sobre 'cache desabilitado'. Eu mencionei isso porque desabilitar o cache da página força o download da aplicação completa novamente, o uso do cache economiza tempo, recursos e dinheiro. Ao criar uma nova planilha com o cache habilitado, é feito o downlad de apenas 722Kb de informação, já que todos os outros recursos que a aplicação vai utilizar, já foi baixado em uma outra sessão, e está guardado no cache do computador.

Outra vantagem desse modelo é que, se um bug é encontrado e se encontra no servidor de aplicação, a aplicação do patch pode ser feita com o mínimo de impacto ao usuário, se houver. Normalmente o usuário precisa realizar o download do patch, quando não da aplicação inteira, instalar e torcer para que nada pare de funcionar. Neste modelo, o usuário só precisa atualizar quando houver alguma alteração na aplicação cliente.

Como mencionei anteriormente, também existem algumas desvantagens neste modelo. Se ocorre algum problema de conexão, ou no próprio servidor, a aplicação fica praticamente unitilizável. Existem algumas formas de evitar esses problemas, mas em algumas implementações, não há nada que possa ser feito.

Então falamos sobre o que é o frontend, o backend, as vantagens e desvantagens dos modelos, mas o que é um full-stack?

Bem, full-stack é um termo que têm causado muita briga e discussões acaloradas, já que, generalizando, os desenvolvedores frontend e backend não gostam deles nem um pouco.

Antes de mergulhar nesse assunto, vou explicar um pouco sobre o conflito entre os desenvolvedores frontend e backend.

Os desenvolvedores frontend e backend normalmente vivem em mundos um tanto distantes, e tendem a não gostar muito um do outro. É algo que acontece também na relação entre engenheiros civis e designers de interiores.

O designer diz: Vamos remover essa coluna horrível daqui!, e o engenheiro responde: Não tem como remover essa coluna, é parte da estrutura, se a removermos a casa vai ruir!, o designer então retruca: Bem, você é o engenheiro, porque não encontra uma maneira de remover a coluna e manter a casa inteira?, e o engenheiro usa então a mesma estratégia: Bem, você é o designer, aposto que você consegue encontrar uma maneira de trasnformar essa coluna horrível em algo bonito... e a discussão continua.

Esse tipo de situação acontece porque um não entende as prioridades e preocupações do outro, e se tivessem tido algumas reuniões anteriormente, provavelmente não teriam tantos conflitos. O mesmo ocorre entre desenvolvedores frontend e backend, que desenvolvem código de acordo com as especificações que recebem, e quando chega a hora de unir tudo em uma aplicação única e funcional, as partes não se encaixam. É como ter um time desenvolvendo a carroceria de um carro, e outro o motor. Quando chega a hora da montagem, o motor é grande demais, o tamanho e posição dos parafusos é diferente, um culpa o outro e a guerra começa.

Então, em algum momento, um novo tipo de desenvolvedor surgiu, uma pessoa que poderia utilizar terço e bermuda sem sentir vergonha, alguns dizem que são descendentes dos antigos webmasters. o _full-stack_... **raios e trovões para adicionar um drama**

- - -

## Manja de tudo, ou de nada?

O full-stack nada mais é que uma pessoa que estuda e compreende o backend E o frontend de uma aplicação. Alguns devs realmente não gostam disso, e falam que "full-stacks não existem", que "é tudo enganação, ninguém sabe de tudo!". Na minha humilde opinião, essa revolta é causada por insegurança, ignorância e ego.

Existem uns termos por aí como dev 10x, 100x, dev ninja e os cambau, e muitas empresas estão buscando essas maravilhas. A razão é simples: no geral, a maior prioridade das empresas é ganhar dinheiro. Gastar o mínimo possível para obter o máximo de lucro. Então, se a empresa gasta aí, 300 mil ao ano para manter 2 desenvolvedores, e aparece esse dev que convence os gestores que pode fazer o trabalho dos dois devs por 200 mil ao ano, bem... a conta é simples.

O problema é que, esse full-stack mestre do universo, ele pode até conseguir fazer o trabalho de 2 ou 3 devs por um tempo, mas não por muito tempo. É simplesmente insano, o trabalho do desenvolvedor é um trabalho criativo, exige a compreensão e estudo de diversos problemas e soluções, centenas de livros, palestras e insights para compreender a melhor forma de resolver problemas diversos, e ainda temos tanto para descobrir e evoluir!

O trabalho do desenvolvedor está em constante evolução, e isso torna o trabalho tão difícil de fascinante.

Então, sim, falar que esses caras são uma farsa pode fazer sentido, mas eu não acredito que seja correto. Eu acredito que eles apenas não tem experiência, mesmo porque eu nunca ouvi falar de um desses dev 10kw ninja transformers com mais de 30 anos. Normalmente são profissionais mais novos, que acreditam ser os melhores do mundo, o unicórnio mais maravilhoso que já existiu.

Querido leitor, vou te dizer que quando o burnout vem, não tem aviso. Ele vem como um raio, e os efeitos podem ficar por um bom tempo, e não é preciso nem ser um mega blaster dev para ser atingido por esse raio.

Então, o full-stack é uma monstruisidade que deve ser banida da existência? Também acho que não... e não é pq eu me considero um full-stack... ou é?

Vou explicar a minha visão do papel do desenvolvedor full-stack, o lado bom e o lado ruim.

O full-stack possui um papel interessante, ele age primariamente como uma ponte entre times e papéis. Não é alguém em busca de tomar o emprego dos outros, isso não é um full-stack, é uma pessoa estúpida e sem empatia, que vai ter sérios problemas na vida pessoal e profissional mantendo esse tipo de atitude.

O desenvolvedor full-stack é um generalista, é a pessoa que vai ajudar sempre e como for necessário, seja com tarefas com prazo vencido, encurtando a data prevista de entrega, atendendo reuniões com clientes e retransmitindo o resultado aos times, ajudando na integração dos times de frontend e backend, traduzindo as preocupações e termos de cada time, enfim, removendo as rebarbas dos times e produtos.

O principal fator negativo do full-stack é que, com a flexibilidade, se perde a especialização. O full-stack vai demorar mais tempo para alcançar um determinado nível em React, por exemplo, do que um desenvolvedor frontend, e vai demorar mais tempo para executar tarefas mais difíceis. O full-stack também não é perfeitamente balanceado, sempre vai possuir mais experiência e afinidade com o front ou backend, uma linguagem ou outra, é cíclico e vai variar de acordo com os projetos em que esteve envolvido recentemente.

Outro problema é que a maioria das empresas possui essa idéia equivocada do full-stack, e confundem o profissional com um departamento de TI inteiro. Cuidado com isso.

Espero que tenha gostado da leitura e eu possa ter mostrado uma perspectiva diferente.
