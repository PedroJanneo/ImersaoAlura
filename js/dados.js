let personagens = [
  /*{
      nome: "Monkey D. Luffy",
      descricao: "O capitão dos Piratas do Chapéu de Palha e protagonista da história. Seu sonho é se tornar o Rei dos Piratas. Com a habilidade de esticar seu corpo como borracha, ele é conhecido por sua determinação inabalável e coragem. Luffy é famoso por sua personalidade extrovertida, seu espírito de aventura e sua lealdade incondicional aos amigos. Ele enfrenta desafios incríveis e faz alianças poderosas em sua jornada pelo Grande Azul.",
      link: "https://onepiece.fandom.com/pt/wiki/Monkey_D._Luffy",
      tags: 'capitao nika gear elastico sonhador aventureiro líder destemido',
      imgs: "<img src='../imgs/personagens/Luffy/luffy.jfif' "
  },*/
  {
      nome: "Roronoa Zoro",
      descricao: "O espadachim dos Chapéus de Palha, Roronoa Zoro, é um dos membros mais letais e leais da tripulação. Treinado em uma técnica única de três espadas, ele busca se tornar o maior espadachim do mundo para honrar a memória de seu falecido mentor. Zoro é conhecido por sua força incomparável, habilidades de combate impressionantes e seu comportamento teimoso e determinado. Apesar de seu exterior frio e sério, ele possui um profundo senso de lealdade e amizade.",
      link: "https://onepiece.fandom.com/pt/wiki/Roronoa_Zoro",
      tags: 'espada espadachim imediato solador persistente forte estrategista',
      imgs: "<img src='../imgs/personagens/Zoro/zoro.jfif' "
  },
  /*{
      nome: "Nami",
      descricao: "A navegadora dos Chapéus de Palha, Nami, é uma das mentes brilhantes por trás da tripulação. Com um amor profundo por cartografia e um desejo ardente de desenhar um mapa completo do mundo, Nami é uma estrategista habilidosa e possui um talento excepcional para navegação. Sua história pessoal é marcada por uma busca para libertar sua ilha natal da opressão, e ela se destaca por sua inteligência e astúcia. Apesar de suas tendências econômicas, ela demonstra grande coragem e determinação.",
      link: "https://onepiece.fandom.com/pt/wiki/Nami",
      tags: 'navegadora laranja cartografia inteligente astuta ambiciosa',
      imgs: "<img src='../imgs/personagens/Nami/nami.jfif' "
  },
  {
      nome: "Usopp",
      descricao: "Usopp é o atirador dos Chapéus de Palha e um contador de histórias nato. Ele possui uma habilidade incrível com a arma de fogo e é conhecido por sua imaginação fértil e talento para criar invenções engenhosas. Apesar de frequentemente exagerar suas conquistas, Usopp é corajoso e profundamente leal aos seus amigos. Sua jornada é marcada pelo desejo de se tornar um herói como seu pai, e ele se destaca por seu grande coração e espírito criativo.",
      link: "https://onepiece.fandom.com/pt/wiki/Usopp",
      tags: 'atirador mentiroso corajoso imaginativo inventor sonhador',
      imgs: "<img src='../imgs/personagens/Usopp/usopp.jfif' "
  },
  {
      nome: "Tony Tony Chopper",
      descricao: "Tony Tony Chopper é o médico dos Chapéus de Palha e uma rena que comeu a Fruta do Diabo Hito Hito no Mi, o que lhe concede habilidades humanas e a capacidade de se transformar em diferentes formas. Conhecido por sua natureza doce e desejo de ajudar os outros, Chopper combina sua expertise médica com um grande coração. Ele é um dos membros mais adoráveis da tripulação e constantemente luta para provar seu valor e proteger aqueles que ama.",
      link: "https://onepiece.fandom.com/pt/wiki/Tony_Tony_Chopper",
      tags: "médico rena doçura transformação fofo compaixão habilidade",
      imgs: "<img src='../imgs/personagens/Chopper/chopper.jfif' "
  },
  {
      nome: "Nico Robin",
      descricao: "Nico Robin é a arqueóloga dos Chapéus de Palha e uma mulher de grande inteligência e mistério. Ela possui a habilidade de fazer florescer partes de seu corpo com a ajuda da Fruta do Diabo Hana Hana no Mi. Sua busca pela verdade e pelo passado esquecido do mundo a torna uma figura crucial na trama. Robin tem uma história pessoal complexa, marcada por tragédias e uma busca incessante pelo conhecimento. Sua eloquência e perspicácia são essenciais para a equipe.",
      link: "https://onepiece.fandom.com/pt/wiki/Nico_Robin",
      tags: "arqueóloga poder florescimento intelectual misteriosa eloquente profunda",
      imgs: "<img src='../imgs/personagens/Robin/robin.jfif' "
  },
  {
      nome: "Franky",
      descricao: "Franky, o carpinteiro dos Chapéus de Palha, é um ciborgue com habilidades excepcionais em engenharia e construção. Anteriormente conhecido como Cutty Flam, ele transformou seu corpo em uma máquina poderosa após um acidente. Seu amor por navios e construção é evidente, e ele se destaca como um membro crucial da tripulação, criando e mantendo o navio Thousand Sunny. Franky é conhecido por seu caráter extravagante, força bruta e grande criatividade.",
      link: "https://onepiece.fandom.com/pt/wiki/Franky",
      tags: "carpinteiro ciborgue engenheiro navio criativo construtor robusto",
      imgs: "<img src='../imgs/personagens/Franky/franky.jfif' "
  },
  {
      nome: "Brook",
      descricao: "Brook é o músico dos Chapéus de Palha e um esqueleto que voltou à vida após comer a Fruta do Diabo Yomi Yomi no Mi. Com um senso de humor peculiar e um talento para a música, ele traz uma energia única para a tripulação. Brook é conhecido por sua habilidade com o violão e por sua imortalidade, que lhe proporciona uma perspectiva única sobre a vida e a morte. Seu desejo de reunir-se com um amigo há muito perdido é uma parte importante de sua jornada.",
      link: "https://onepiece.fandom.com/pt/wiki/Brook",
      tags: "músico esqueleto violão morto-vivo animado carismático imortal",
      imgs: "<img src='../imgs/personagens/Brook/brook.jfif' "
  },
  {
      nome: "Vinsmoke Sanji",
      descricao: "Sanji, o cozinheiro dos Chapéus de Palha, é um lutador habilidoso com um estilo de combate baseado em poderosas pernas. Ele é conhecido por sua lealdade aos amigos e seu amor pelas mulheres, o que frequentemente o leva a comportamentos galanteadores. Sanji é um chef talentoso, cuja habilidade culinária é vital para manter a moral e a saúde da tripulação. Sua história inclui um passado complicado com sua família e um sonho de encontrar o All Blue, um mar lendário onde todos os peixes do mundo se encontram.",
      link: "https://onepiece.fandom.com/pt/wiki/Sanji",
      tags: "cozinheiro pernas poderosas lealdade galanteador chef habilidoso lutador",
      imgs: "<img src='../imgs/personagens/Sanji/sanji.jfif' "
  },
  {
      nome: "Jimbe",
      descricao: "Jimbe é o timoneiro dos Chapéus de Palha e um homem-peixe de grande sabedoria e força. Antes de se juntar à tripulação, Jimbe era um dos Seven Warlords of the Sea e possui uma profunda experiência em combate e diplomacia. Ele é conhecido por sua habilidade com artes marciais baseadas em karaté e sua natureza protetora. Jimbe se junta aos Chapéus de Palha com o objetivo de ajudar a tripulação a alcançar seus sonhos e promover a paz entre humanos e homens-peixe.",
      link: "https://onepiece.fandom.com/pt/wiki/Jimbe",
      tags: "timoneiro homem-peixe sábio forte nadador protetor diplomata experiente",
      imgs: "<img src='../imgs/personagens/Jimbe/jimbe.jfif' "
  } */
];

  
// [ ] --> lista (array)
// {} --> objeto
/*  
[{
}]
    --> lista de objetos

*/

