const SPELL_DESCRIPTIONS = {
  "Abrir": {
    "circulo": "1º Círculo (Arcano)",
    "alcance": "18 metros",
    "duracao": "permanente",
    "resistencia": "nenhuma",
    "descricao": "Esta magia pode ser utilizada para dar acesso a qualquer objeto fechado, trancado (mesmo à chave) ou emperrado pela duração da magia (ou até ser dissipada).\n\n[Trancar] é a versão reversa que permite trancar um acesso a qualquer objeto aberto."
  },
  "Agredir": {
    "circulo": "Clérigo 3 (3º Círculo Divino)",
    "alcance": "Toque",
    "duracao": "1 turno/nível",
    "resistencia": "Nenhuma",
    "descricao": "Tocando uma arma (incluindo arcos), o clérigo é capaz de encantá-la e fazê-la causar +1d6 pontos de dano por ataque, enquanto a magia durar."
  },
  "Ampliar Plantas": {
    "circulo": "4º Círculo (Arcano)",
    "alcance": "36 metros",
    "duracao": "permanente",
    "resistencia": "nenhuma",
    "descricao": "O conjurador provoca um vertiginoso crescimento da vegetação. As plantas afetadas se entrelaçam, ficando fortes e vigorosas, espalhando-se e ocupando todo o espaço disponível.\n\nCriaturas pequenas e médias levam 1 turno para abrir uma picada com armas de corte e se deslocam apenas 1 metro. Criaturas grandes conseguem abrir passagem deslocando-se 2 metros por rodada."
  },
  "Animar Cadáveres": {
    "circulo": "5º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "1 turno/nível",
    "resistencia": "nenhuma",
    "descricao": "O conjurador pode dar vida a um cadáver ou a uma ossada para criar um zumbi ou um esqueleto, respectivamente. Os mortos-vivos criados desta forma não reconhecem mestres, não cumprem ordens ou aceitam comandos, atacando qualquer um desavisado. Um conjurador pode manter apenas um único Animar Cadáveres por vez no máximo de 1 turno por nível. Uma nova conjuração dissipará a anterior. Mortos-vivos destruídos não podem ser reanimados."
  },
  "Apodrecer Sangue": {
    "circulo": "Necromante 2",
    "alcance": "9m + 3m/nível",
    "duracao": "1d4 rodadas/nível",
    "resistencia": "JPC anula",
    "descricao": "Com um ataque de toque bem sucedido, o necromante amaldiçoa o sangue da vítima. Qualquer ataque de corte ou perfuração causará 4 pontos de dano extra durante a duração da magia."
  },
  "Aprisionamento": {
    "circulo": "9º Círculo (Arcano)",
    "alcance": "36 metros",
    "duracao": "especial",
    "resistencia": "JPS nega",
    "descricao": "Esta poderosa magia tem como objetivo invocar uma criatura extraplanar e aprisioná-la no plano material até esta aceitar realizar uma tarefa para o conjurador. Quando a tarefa é cumprida, a criatura é automaticamente enviada ao seu plano original. O conjurador precisa conhecer o verdadeiro nome da criatura convocada e a criatura, uma vez aprisionada no plano material, pode ou não concordar com a chantagem do conjurador, podendo inclusive atacá-lo.\n\nSe a criatura for bem-sucedida em uma JPS, a magia não funcionará e a criatura permanecerá em seu plano original. A melhor forma de se proteger é construir, em torno do portal, um círculo de proteção com materiais místicos.  Esse círculo custa 100 PO para cada dado de vida da criatura a ser convocada.\n\nMesmo assim, há sempre 1 chance em 1d6 do círculo de proteção falhar."
  },
  "Aprisionar Alma": {
    "circulo": "8º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "permanente",
    "resistencia": "nenhuma",
    "descricao": "Esta magia cria uma gema de aprisionamento etéreo com um gatilho inscrito (a última palavra da execução da magia), fazendo com que a alma de quem segurar a gema e pronunciar a palavra nesta inscrita, tenha imediatamente sua alma sugada para dentro da gema. O valor da gema deve ser proporcional ao poder da alma aprisionada, custando 1.000 PO para cada Dado de Vida da criatura. Almas aprisionadas não morrem e podem retornar para qualquer outro corpo recém-morto, caso a gema seja destruída."
  },
  "Arma Encantada": {
    "circulo": "4º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "1 turno/nível",
    "resistencia": "nenhuma",
    "descricao": "Esta magia transforma uma arma mundana em uma arma temporariamente mágica, com bônus de +1 nas jogadas de ataque e +1 no dano."
  },
  "Armadilha de Fogo": {
    "circulo": "4º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "permanente",
    "resistencia": "JPD reduz",
    "descricao": "O personagem cria uma armadilha engatilhada em qualquer objeto que possa ser aberto (como um baú, livro, porta, gaveta, etc.), explodindo-o em chamas assim que aberto. A explosão causa a todos em um raio de 2m do objeto 1d4 pontos de dano + 1 ponto de dano por nível do personagem conjurador. Uma JPD reduz o dano pela metade.  O objeto encantado com esta magia não é afetado pelos efeitos desta explosão."
  },
  "Armadura Elétrica": {
    "circulo": "Mago 4 (4º Círculo Arcano)",
    "alcance": "Toque",
    "duracao": "1d4 rodadas/nível",
    "resistencia": "Nenhuma (JPC metade no atacante)",
    "descricao": "Ao tocar em uma armadura de metal, o mago deixa um encantamento. Toda vez que o usuário da armadura for atacado e sofrer dano, o atacante sofre 1d6 pontos de dano elétrico para cada 2 níveis do mago, podendo reduzir à metade caso passe em um teste de JPC."
  },
  "Aterrorizar": {
    "circulo": "Necromante Exclusiva (1º nível)",
    "alcance": "9m",
    "duracao": "1d6 rodadas",
    "resistencia": "JPS anula (teste difícil)",
    "descricao": "Ao utilizar essa magia em qualquer alvo vivo, a vítima deve fazer uma JPS difícil. Falha deixará a vítima aterrorizada, causando uma penalidade de -2 em todas as jogadas de ataque e testes físicos."
  },
  "Augúrio": {
    "circulo": "Clérigo 3 (3º Círculo Divino)",
    "alcance": "Pessoal",
    "duracao": "Instantânea",
    "resistencia": "Nenhuma",
    "descricao": "Com um Augúrio o clérigo pode adivinhar se uma ação beneficiará ou atrapalhará o grupo em um futuro próximo (até meia hora). Por exemplo, se o grupo estiver pensando em quebrar um cadeado mágico, uma magia de Augúrio pode revelar se isto resultará em benefício ou desgraça imediata.\n\nSe a magia tiver sucesso, o Mestre pronuncia uma indicação do que provavelmente irá ocorrer: “benefício”, “desgraça”, ou talvez um enigma ou uma rima. A chance de se receber uma resposta significativa é de 70%, mais 1% por nível do clérigo, ou seja, 71% no 1º nível, 72% no 2°, e assim por diante.\n\nO Mestre poderá fazer quaisquer ajustes que ele considere necessários à situação. De qualquer forma, um grupo que tente vários Augúrios sobre as mesmas ações, em um curto período de tempo, receberá sempre a mesma resposta."
  },
  "Aumento de Destreza": {
    "circulo": "Clérigo 2 (2º Círculo Divino)",
    "alcance": "Toque",
    "duracao": "nível/horas (1h por nível)",
    "resistencia": "Nenhuma",
    "descricao": "O sacerdote toca no alvo (que pode ser ele mesmo) enquanto faz uma prece, e, quando termina, o personagem tocado recebe 1d4+1 pontos de Destreza por nível/horas."
  },
  "Aumento de Força": {
    "circulo": "Clérigo 2 (2º Círculo Divino)",
    "alcance": "Toque",
    "duracao": "nível/horas (1h por nível)",
    "resistencia": "Nenhuma",
    "descricao": "O sacerdote toca no alvo (que pode ser ele mesmo) enquanto faz uma prece, e, quando termina, o personagem tocado recebe 1d4+1 pontos de Força por nível/horas."
  },
  "Barreira Mental": {
    "circulo": "7º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "12 turnos",
    "resistencia": "JPS nega",
    "descricao": "Esta magia confere ao alvo uma espécie de escudo turvador contra efeitos de invasão mental, como a realizada pela magia Percepção Extrassensorial e Clarividência, ou contra a espionagem realizada por um Olho Arcano, bola de cristal e semelhantes.  Qualquer tentativa de localização mágica do alvo resultará em uma falha como se este simplesmente não existisse para esses propósitos.\n\nAdicionalmente, o alvo passa a realizar todas as Jogadas de Proteção contra qualquer efeito mental, como encantamentos e ilusões, como um teste muito fácil. Um alvo com o intuito de resistir a esta magia precisa ser bem-sucedido em uma JPS para negar seus efeitos."
  },
  "Bênção": {
    "circulo": "Clérigo 1 (1º Círculo Divino)",
    "alcance": "9m",
    "duracao": "1 turno/nível",
    "resistencia": "Nenhuma",
    "descricao": "Através de uma oração, o sacerdote invoca o poder de sua divindade e gera uma aura de 9m. Aliados que estejam dentro dessa área recebem +1 nas jogadas de ataque e +1 em todos os testes de resistência."
  },
  "Bola de Fogo": {
    "circulo": "3º Círculo (Arcano)",
    "alcance": "72 metros",
    "duracao": "instantânea",
    "resistencia": "JPD reduz",
    "descricao": "Um projétil semelhante a uma pequena bola de chamas com 20 cm de diâmetro, disparado pelas mãos do conjurador e explodindo em chamas no lugar alvo. O raio da explosão é de 6 metros e o dano é de 1d6 por nível do conjurador (máximo 10d6). A explosão é adaptada ao volume disponível.  Um sucesso em uma JPD reduz o dano desta magia pela metade. Se memorizada como uma magia de 7º círculo, a explosão pode ser adiada por até 10 minutos."
  },
  "Cancelamento Total": {
    "circulo": "Mago 9 (9º Círculo Arcano)",
    "alcance": "30m",
    "duracao": "Instantânea",
    "resistencia": "JPS anula",
    "descricao": "Emitindo um grito e fazendo os gestos da magia, o mago é capaz de afetar uma área de aproximadamente 18m com um efeito mais forte que o de um Bastão de Cancelamento.\n\nCada criatura na área de efeito deve fazer um teste de JPS para cada item mágico que carregar. Uma falha significa que o item foi desintegrado e não pode mais ser recuperado.\n\nDetalhes sobre os efeitos: personagens épicos recebem +4 no teste de resistência para cada nível épico; artefatos, obsidiana e jade não são afetados; itens abençoados diretamente por deuses não são afetados."
  },
  "Carne em Pedra": {
    "circulo": "6º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "permanente",
    "resistencia": "nenhuma",
    "descricao": "Com esta magia, o conjurador consegue transformar pedaços de pedra em carne. Criaturas petrificadas podem ser restauradas, bem como seus equipamentos, com esta magia. Criaturas de pedra alvos desta magia, como um Golem de Pedra, podem realizar uma JP para negar os efeitos da magia ou serão destruídas.\n\n[Carne em Pedra] é a versão reversa que permite petrificar um alvo assim como todo o seu equipamento. Uma JPS bem-sucedida pode negar os efeitos desta magia."
  },
  "Carne para Gelo": {
    "circulo": "Mago 5 (5º Círculo Arcano)",
    "alcance": "Toque",
    "duracao": "3 turnos/nível",
    "resistencia": "JPS",
    "descricao": "Tocando a vítima e recitando as palavras mágicas, o necromante/mago faz com que ela lentamente se transforme em gelo; semelhante a um processo de petrificação, mas o resultado final é uma estátua de gelo. Um teste de JPS pode impedir que a catástrofe aconteça, mas mesmo que a vítima seja bem sucedida, ela ainda sofrerá 4d8 pontos de dano por frio."
  },
  "Cegueira": {
    "circulo": "Mago 2 (2º Círculo Arcano)",
    "alcance": "12m",
    "duracao": "Permanente",
    "resistencia": "JPC",
    "descricao": "Ao utilizar essa magia em qualquer alvo em um raio de 12m, a vítima deve imediatamente fazer um teste de JPC. Falha a deixará cega permanentemente. Os modificadores de combate para a vítima e para inimigos se aplicam normalmente."
  },
  "Cerrar Portas": {
    "circulo": "1º Círculo (Arcano)",
    "alcance": "3 metros",
    "duracao": "2d6 turnos",
    "resistencia": "nenhuma",
    "descricao": "Esta magia permite ao Mago travar qualquer porta ou janela.\n\nQualquer criatura com 3 dados de vida a mais que o conjurador será capaz de abrir à força uma porta/ janela travada por esta magia, mas tão logo a pessoa passe por ela, a porta/janela será novamente travada até a magia acabar ou ser dissipada.\n\nUma magia de Abrir pode destravar a porta/janela travada por uma Cerrar Portas."
  },
  "Chuva de Adagas de Gelo": {
    "circulo": "Mago 6 (6º Círculo Arcano)",
    "alcance": "Círculo de 15m",
    "duracao": "Instantânea",
    "resistencia": "Nenhuma",
    "descricao": "O mago invoca a magia e estabelece o ponto central. Por uma rodada, 3d4 adagas de gelo cairão do céu, causando 4d8 pontos dano em todos que estiverem na área, incluindo aliados."
  },
  "Chuva de Meteoros": {
    "circulo": "9º Círculo (Arcano)",
    "alcance": "72 metros",
    "duracao": "instantânea",
    "resistencia": "JPD reduz",
    "descricao": "Pequenos meteoros saem das mãos do conjurador e explodem em bolas de fogo onde ele direcionar.  O conjurador pode jogar 4 bolas de fogo normais causando 10d6 pontos de dano, ou 8 bolas de fogo de 3 metros de diâmetro causando 5d6 pontos de dano. Uma JPD reduz o dano pela metade."
  },
  "Chuva de Pedras de Rasmum": {
    "circulo": "Clérigo 7 (7º Círculo Divino)",
    "alcance": "9m + 3m/nível",
    "duracao": "Especial",
    "resistencia": "Especial (JPD)",
    "descricao": "Com esta magia, o clérigo escolhe um ponto principal onde ela irá ocorrer (obedecendo o alcance descritivo). Então, em um raio de 12m, pedras gigantes cairão do céu, causando 15d8 pontos de dano, onde um teste de JPD reduzirá à metade.\n\nUma vez que as rochas caiam no chão, quebrando-se, rochas menores se espalharão dentro da mesma área, dessa vez causando 7d8 pontos de dano e tornando a vítima atordoada por 2d4 rodadas. Um sucesso num teste de JPD reduz o dano à metade e evita o atordoamento."
  },
  "Clarividência": {
    "circulo": "3º Círculo (Arcano)",
    "alcance": "18 metros",
    "duracao": "12 turnos",
    "resistencia": "nenhuma",
    "descricao": "Esta magia permite ao conjurador se concentrar em um lugar específico já conhecido por ele para visualizar o local como se estivesse lá fisicamente por meio dos olhos de outra criatura viva.\n\nConcentrando-se por 1 minuto, o conjurador pode detectar e estabelecer uma conexão com o alvo no local escolhido em um raio máximo de 18 metros.  Após a conexão estabelecida, o conjurador consegue enxergar como se fosse o alvo por toda a duração da magia e enquanto estiver concentrado.\n\nO conjurador pode alterar o alvo da magia saltando para outro na mesma área de efeito, caso se concentre por mais um minuto para estabelecer a conexão e desde que ainda esteja dentro da duração inicial da magia.\n\nA magia não pode penetrar mais de 60 centímetros de pedra e é bloqueada até mesmo pela mais fina folha de chumbo."
  },
  "Clone": {
    "circulo": "8º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "especial",
    "resistencia": "nenhuma",
    "descricao": "Por meio desta magia, o conjurador cria um clone perfeito do alvo (incluindo pensamentos e conhecimento) ao retirar deste um pedaço de carne.\n\nO clone cresce e estará pronto em até 1d4 dias. Se o clone ficar pronto enquanto a criatura original ainda estiver viva, o clone tentará de todas as maneiras matar o ser original para substituí-lo.\n\nSe o clone ou o original não conseguir destruir o seu alter ego, ambos ficarão completamente insanos em 1d4 meses."
  },
  "Coluna de Chamas de Agmi": {
    "circulo": "Clérigo 5 (5º Círculo Divino)",
    "alcance": "9m + 1m/nível",
    "duracao": "Instantânea",
    "resistencia": "JPD metade",
    "descricao": "Quando essa magia é lançada, uma coluna vertical de fogo (4,5m de raio, 9m de altura) aparece no local determinado pelo clérigo. Qualquer criatura dentro da área de efeito deve passar por um teste de JPD. Fracasso significa que a vítima sofrerá 6d8 pontos de dano. Do contrário, o dano cai pela metade."
  },
  "Concha Antimagia": {
    "circulo": "6º Círculo (Arcano)",
    "alcance": "pessoal",
    "duracao": "12 turnos",
    "resistencia": "nenhuma",
    "descricao": "Uma concha de força mágica envolve o conjurador, impedindo que qualquer efeito mágico entre ou saia da concha. O conjurador pode, mesmo dentro da concha, dissipá-la quando desejar."
  },
  "Cone Glacial": {
    "circulo": "Mago 5 (5º Círculo Arcano)",
    "alcance": "Ler Texto",
    "duracao": "Instantânea",
    "resistencia": "Nenhuma",
    "descricao": "Essa magia produz uma área de frio extremo que parte da mão do mago e se prolonga para a frente num cone de 1,5 metro de comprimento e 30 centímetros de diâmetro, por nível do mago. O cone absorve calor e causa 1d4+1 pontos de dano por nível. Por exemplo: um mago de 10º nível evocaria um cone com 3 metros de diâmetro e 15 metros de comprimento, provocando 10d4+10 pontos de dano."
  },
  "Confusão": {
    "circulo": "4º Círculo (Arcano)",
    "alcance": "36 metros",
    "duracao": "12 rodadas",
    "resistencia": "JPS nega",
    "descricao": "Esta magia causa confusão mental em alvos inteligentes, os quais passarão a agir de forma aleatória. Uma jogada de 2d6 determinará o efeito: 2-5 atacarão o conjurador e seus aliados; 6-8 ficarão inativos e confusos; 9-12 atacarão uns aos outros. Confusão afeta no máximo 2d6 criaturas + 1 criatura adicional a cada 4 níveis do conjurador. Essas criaturas podem realizar uma JPS para não serem afetadas pela magia."
  },
  "Controlar o Clima": {
    "circulo": "6º Círculo (Arcano)",
    "alcance": "240 metros",
    "duracao": "concentração",
    "resistencia": "nenhuma",
    "descricao": "Com esta magia, o conjurador é capaz de modificar o clima de acordo com sua vontade.  É capaz de extinguir ventos, chuvas, nevascas, tornar o céu limpo, dissolver um tornado ou até mesmo criar todas essas intempéries em uma área de efeito de 100 metros de raio ao redor do conjurador por nível."
  },
  "Criar Mortos-Vivos": {
    "circulo": "Necromante 2",
    "alcance": "Toque",
    "duracao": "Permanente",
    "resistencia": "Nenhuma",
    "descricao": "Permite reanimar e controlar mortos-vivos de acordo com o nível do Necromante:\n\n• 3º Nível: Super Zumbi\nMovimento: 6 | PV: 32 | CA: 14 | JP: 7 | 1x Soco +6 (1d8+3)\nMorto-Vivo\n\n• 6º Nível: Super Esqueleto\nMovimento: 9 | PV: 50 | CA: 20 | JP: 10 | 2x Espada Curta +9 (2d6+4)\nMorto-Vivo | Silencioso | Corpo de Osso\n\n• 9º Nível: Super Ghoul\nMovimento: 9 | PV: 43 | CA: 16 | JP: 12 | 2x Garras +9 (1d6 + Paralisia), 1x Mordida +12 (1d12 + Paralisia)\nSilencioso | Morto-Vivo\nParalisia: um alvo atingido por um Ghoul deve ser bem-sucedido em um teste de JPC difícil ou ficará paralisado por 1d6 turnos.\n\n• 12º Nível: Super Fantasma\nMovimento: 9 | PV: 74 | CA: 23 | JP: 14 | 1x Toque +9 (2d6 + Dreno)\nSilencioso | Morto-Vivo\nImunidades: além das imunidades comuns aos mortos-vivos, Fantasmas são feridos apenas por magia e armas mágicas.\nDreno: o toque de um Fantasma drena 1 ponto de Constituição permanente do personagem sem direito a jogada de proteção. Um alvo que tenha todos os seus pontos de Constituição drenados, morrerá.\nRegeneração: ao causar dano pelo toque, o Fantasma regenera a mesma quantidade de dano causado."
  },
  "Criar Passagens": {
    "circulo": "5º Círculo (Arcano)",
    "alcance": "9 metros",
    "duracao": "3 turnos",
    "resistencia": "nenhuma",
    "descricao": "Esta magia cria uma passagem temporária, como se fosse um buraco através de rocha sólida (paredes, muros, portas) com cerca de 2 metros de altura e 3 metros de largura. O conjurador pode criar passagens em barreiras de até 2 metros de espessura a cada 5 níveis.\n\nApós o encerramento da duração da magia, a passagem se fecha, matando automaticamente todos que estiverem em seu interior."
  },
  "Dedo da Morte": {
    "circulo": "Necromante 6",
    "alcance": "Toque",
    "duracao": "Instantânea",
    "resistencia": "JPC (ver texto)",
    "descricao": "Dedo da Morte suga a energia vital de sua vítima. Se a magia funcionar, o alvo não poderá ser ressuscitado ou revivido. Além disso, se aplicada em vítimas humanas, a magia inicia uma série de mudanças no cadáver. Passados 3 dias, essas mudanças permitem que o mago anime o corpo como um zumbi vudu, sob seu controle. A criação do zumbi se dá através de um ritual que custa pelo menos 1.000 po, mais 500 peças para cada vítima. As mudanças podem ser revertidas antes do ritual através de um Desejo Restrito ou magia similar, lançada diretamente sobre o corpo. Um Desejo será capaz de trazer o corpo de volta à vida.\n\nO mago recita a fórmula do Dedo da Morte e aponta o seu dedo indicador para a vítima. Se ela não passar em um teste de JPC, a morte é instantânea. Se passar, o alvo, ainda assim, sofre 2d8 + 1 ponto de dano. Se o alvo morrer devido a esse dano, nenhuma mudança interna ocorre, e a vítima pode ser ressuscitada normalmente."
  },
  "Desejo": {
    "circulo": "9º Círculo (Arcano)",
    "alcance": "especial",
    "duracao": "especial",
    "resistencia": "especial",
    "descricao": "Tida como a magia mais poderosa já criada, Desejo pode ser fonte de poderes e perigos inimagináveis, pois realiza desejos ilimitados do conjurador. Porém, pode punir com extrema rigidez desejos ambíguos e malfeitos. Se preparada como uma magia de 9º círculo, o conjurador pode realizar Desejos os quais emulam magias de até 8º círculo sem grandes problemas. Mas desejos que almejam efeitos grandiosos e complexos podem ser arriscados, pois a forma como o desejo é realizado é de extrema importância. A intenção original do conjurador pode ser distorcida, realizando um efeito literalmente correto, porém indesejado."
  },
  "Desintegrar": {
    "circulo": "6º Círculo (Arcano)",
    "alcance": "18 metros",
    "duracao": "instantânea",
    "resistencia": "especial",
    "descricao": "Esta magia faz matéria (mundana ou mágica) desaparecer por completo, virando pó. O alvo pode fazer uma JPC para evitar a desintegração, sofrendo 8d8 pontos de dano."
  },
  "Detectar Invisibilidade": {
    "circulo": "2º Círculo (Arcano)",
    "alcance": "18 metros",
    "duracao": "2 turnos",
    "resistencia": "nenhuma",
    "descricao": "O conjurador consegue detectar objetos e criaturas invisíveis como se fossem normalmente visíveis para ele."
  },
  "Disco Flutuante": {
    "circulo": "1º Círculo (Arcano)",
    "alcance": "1,5 metro",
    "duracao": "6 turnos",
    "resistencia": "nenhuma",
    "descricao": "Com esta magia, o conjurador cria um disco flutuante de 1 metro de diâmetro para o seguir e carregar a sua carga. O disco consegue carregar 50 quilos por nível de conjurador. O disco flutua a 1 metro do chão e se mantém sempre reto. A não ser que receba outro comando, o disco se manterá sempre a 1,5 metro de distância de seu conjurador. Quando o efeito da magia acaba, o disco simplesmente desaparece, derrubando tudo o que estava sobre ele. O disco também desaparece quando a distância entre ele e o conjurador for superior ao alcance da magia ou quando existir uma distância superior a 1 metro entre ele e o chão sobre o qual paira."
  },
  "Dissipar Magia": {
    "circulo": "3º Círculo (Arcano)",
    "alcance": "36 metros",
    "duracao": "permanente",
    "resistencia": "nenhuma",
    "descricao": "Esta magia pode ser usada para dissipar completamente os efeitos de outra magia, lançada sobre um objeto ou área. A jogada para tentar dissipar a magia é de 1d20 + nível do personagem que está lançando a magia, contra uma dificuldade de 5 + círculo da magia a ser dissipada + nível do personagem que lançou a magia a ser dissipada.\n\n> Exemplo: um conjurador de 9º nível que tenta dissipar uma magia de 3º círculo lançada por outro conjurador de 8º nível, deve jogar 1d20 e somar seu resultado ao seu nível (9).  O resultado precisa ser igual ou maior que a dificuldade de 5 + o círculo da magia a ser dissipada (3) + o nível do conjurador da magia (8), ou seja, maior ou igual a 16.\n\nMagos só podem dissipar magias arcanas e Clérigos só podem dissipar magias divinas.  Esta magia não é capaz de desencantar permanentemente um item mágico, mas suprime seus efeitos por 1 turno."
  },
  "Donzela de Ferro": {
    "circulo": "Necromante 3",
    "alcance": "3m + 1m/nível",
    "duracao": "Instantânea (Duração: 1 rodada/nível)",
    "resistencia": "JPC reduz à metade",
    "descricao": "Com essa magia, o necromante cria uma onda aglomerada de ossos fantasmagóricos que seguem em linha reta a partir dele. A onda atravessa todas as criaturas que estiverem no caminho até atingir o limite máximo de seu alcance. Qualquer matéria inanimada mais resistente que 30cm de madeira é capaz de interromper seu percurso.\n\nCriaturas atingidas sofrem 1d6 pontos de dano a cada 2 níveis de conjurador (até o máximo de 7d6), 1d10 pontos de dano em constituição e a condição [MD] em qualquer manobra que exija teste pela duração da magia. Uma jogada de JPC pode reduzir o dano à metade e anular completamente o restante dos efeitos. A magia dura por 1 rodada por nível de conjurador."
  },
  "Drenar Temporário": {
    "circulo": "Necromante 4",
    "alcance": "3m + 1m/nível",
    "duracao": "3 turnos",
    "resistencia": "JPS anula",
    "descricao": "Realizando um ataque de toque no alvo, o Necromante é capaz de drenar 1d4 níveis de experiência do alvo. Isso altera condições diversas como PVs, JP, Base de Ataque, etc., que são alteradas imediatamente. Uma criatura que atinja o nível 0 através dessa magia morre automaticamente."
  },
  "Drenar Vida": {
    "circulo": "Necromante Exclusiva (6º nível)",
    "alcance": "Toque",
    "duracao": "6 rodadas",
    "resistencia": "Nenhuma",
    "descricao": "Idêntica ao livro (drena energia vital com um ataque de toque), mas os pontos drenados podem ultrapassar o PV máximo do necromante. Esses pontos extras permanecem durante 6 rodadas."
  },
  "Encantar Item": {
    "circulo": "6º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "especial",
    "resistencia": "nenhuma",
    "descricao": "Esta magia é utilizada para imbuir efeitos mágicos a qualquer item. Ela deve ser lançada sobre o objeto no início do processo e permanecerá ativa pelo tempo de duração da magia. Se lançada sobre um item mágico, todos os efeitos serão realizados normalmente. Cabe ao Mestre determinar eventuais custos e tempo necessário."
  },
  "Enfeitiçar Monstros": {
    "circulo": "4º Círculo (Arcano)",
    "alcance": "36 metros",
    "duracao": "especial",
    "resistencia": "JPS nega",
    "descricao": "Esta magia afeta 3d6 monstros não humanoides vivos, médios ou pequenos com até 3 DV, ou uma única criatura com mais de 3 DV. O alvo passa a considerar o conjurador um amigo respeitável e confiável, obedecendo todas as suas ordens, desde que não haja uma clara ameaça à sua integridade.  Ordens como atacar serão sempre seguidas, mesmo quando o alvo a ser atacado for infinitamente mais poderoso do que o alvo da magia.\n\nUm sucesso em uma JPS nega o efeito desta magia. Se a criatura enfeitiçada for ferida, poderá realizar uma nova JPS.\n\nApós enfeitiçada, o valor da JPS da criatura determina a continuação da duração de Enfeitiçar Monstros.\n\n  * **JPS 3 ou menor**: uma JPS por mês.\n\n  * **JPS 5 ou menor**: uma JPS por semana.\n\n  * **JPS 8 ou menor**: uma JPS por dia.\n\n  * **JPS 10 ou menor**: uma JPS por hora."
  },
  "Enfeitiçar Pessoas": {
    "circulo": "1º Círculo (Arcano)",
    "alcance": "36 metros",
    "duracao": "especial",
    "resistencia": "JPS nega",
    "descricao": "Esta magia afeta humanoides vivos, médios ou pequenos. O alvo passa a considerar o conjurador como um amigo respeitável e confiável, obedecendo todas as suas ordens, desde que não haja uma clara ameaça à sua integridade. Ordens como atacar serão sempre seguidas, mesmo quando o alvo a ser atacado for infinitamente mais poderoso do que o alvo da magia. Um sucesso em uma JPS nega o efeito desta magia. Se a criatura enfeitiçada for ferida, poderá realizar uma nova JPS.\n\nApós enfeitiçado, a Inteligência do alvo determina a continuação da duração de Enfeitiçar Pessoas.\n\n  * **Inepto (3-8)**: uma JPS por mês.\n\n  * **Mediano (9-12)**: uma JPS por semana.\n\n  * **Inteligente (13-16)**: uma JPS por dia.\n\n  * **Gênio (17-18)**: uma JPS por hora."
  },
  "Entumbar": {
    "circulo": "Necromante 6",
    "alcance": "9m + 3m/nível",
    "duracao": "Permanente",
    "resistencia": "JPS anula",
    "descricao": "Com o uso dessa magia, a terra automaticamente engole o alvo pretendido, deixando-o em uma câmara subterrânea que impossibilita qualquer tipo de movimento, embora ainda possa emitir sons. A menos que consiga sair a tempo, eventualmente a vítima morrerá asfixiada.\n\nUm segundo uso da magia é pelo próprio necromante, como uma medida de proteção. Apenas magias de terra muito poderosas (como terremoto, por exemplo) ou um dissipar magia de um usuário de nível elevado podem retirar o necromante de dentro da câmara. Note que a conexão com qualquer morto-vivo ou golem é quebrada; as criaturas agem de forma agressiva e aleatória até restabelecerem contato com seu mestre."
  },
  "Escudo Arcano": {
    "circulo": "1º Círculo (Arcano)",
    "alcance": "pessoal",
    "duracao": "2 turnos",
    "resistencia": "nenhuma",
    "descricao": "O conjurador invoca um escudo invisível que o protege de ataques físicos, sejam estes projéteis, ataques à distância, ou corpo a corpo. O Escudo Arcano equivale a uma armadura com bônus de +4 e absorve totalmente o dano causado por mísseis mágicos. Se a Classe de Armadura do conjurador já for 14 ou superior, esta não causa efeito, a não ser no que diz respeito à absorção do dano dos mísseis mágicos."
  },
  "Escuridão": {
    "circulo": "1º Círculo (Arcano)",
    "alcance": "especial",
    "duracao": "12 turnos",
    "resistencia": "JPS nega",
    "descricao": "O objeto alvo tocado produz luz tão brilhante quanto uma tocha, iluminando uma área com raio de 6 metros.\n\nSe conjurada nos olhos de um alvo a até 3m + 1,5m/nível do conjurador, a vítima que não passar em uma JPS fica cega até o final da duração da magia. Neste caso, a luz mágica se apaga e não causa nenhum outro efeito.\n\n[Escuridão] é a versão reversa que permite interromper qualquer fonte de luz, apagando tochas, velas, lâmpadas ou até mesmo dissipando uma magia Luz lançada anteriormente e criando uma área de 4,5 metros de raio de escuridão mágica, deixando todos dentro da área cegos (mesmo se possuírem Infravisão).\n\nSe conjurada nos olhos de um alvo tocado pelo conjurador, a vítima que não passar em uma JPS fica cega até o final da duração da magia.  Neste caso, a escuridão mágica some e não causa nenhum outro efeito."
  },
  "Escuridão Contínua": {
    "circulo": "2º Círculo (Arcano)",
    "alcance": "36 metros",
    "duracao": "permanente",
    "resistencia": "JPS nega",
    "descricao": "Esta magia tem o mesmo efeito de uma magia Luz, mas com duração contínua (enquanto desejado pelo conjurador). Se conjurada nos olhos de um alvo a até 3m + 1,5m/nível do conjurador, a vítima que não passar em uma JPS fica cega até o final da duração da magia. Neste caso, a luz mágica se apaga e não causa nenhum outro efeito.\n\n[Escuridão Contínua] é a versão reversa que cria uma área de escuridão mágica permanente numa área de 4,5 metros de raio, deixando todos dentro da área cegos, inclusive criaturas com Infravisão.  Qualquer fonte de luz trazida para dentro da área de escuridão será apagada. Uma Escuridão Contínua pode ser usada para dissipar os efeitos de uma magia de Luz Contínua."
  },
  "Esfera Gélida": {
    "circulo": "6º Círculo (Arcano)",
    "alcance": "especial",
    "duracao": "especial",
    "resistencia": "JPD reduz",
    "descricao": "Esta magia pode ser utilizada de três formas diferentes:\n\n  * **Esfera Congelante**: um pequeno globo de matéria congelante se forma na mão do conjurador, podendo ser usada para congelar todo e qualquer material líquido à base de água com que entre em contato. Uma superfície de 30 m² com até 20 cm de espessura por nível do conjurador pode ser congelada.\n\n  * **Raio Gélido**: um pequeno e fino raio de energia gelada sai dos dedos do conjurador para atingir uma única vítima, causando 1d4 pontos de dano +1 de dano por nível. Uma JPD reduz esse dano pela metade.\n\n  * **Globo de Frio**: uma pedra pequena, do tamanho de uma pedra de funda, é criada. Ao ser arremessada, se quebra no impacto causando 6d6 pontos de dano em todas as criaturas em uma distância de até 3 metros do ponto da explosão.  Se o globo não for arremessado, ele se quebrará em até 1d4+1 rodadas causando o dano normalmente a todos em uma distância de até 3 metros.  Uma JPD reduz esse dano pela metade."
  },
  "Esfera Prismática": {
    "circulo": "9º Círculo (Arcano)",
    "alcance": "pessoal",
    "duracao": "1 turno/nível",
    "resistencia": "nenhuma",
    "descricao": "Uma esfera multicolorida com 3 metros de diâmetro encobre o conjurador como se fosse uma enorme bolha de proteção. Essa esfera é formada por 7 camadas coloridas as quais absorvem todos os ataques físicos direcionados ao conjurador.  Cada camada possui características individuais e somem ao absorver um ataque qualquer. Da mais externa para a mais interna:\n\n  * **Vermelha**: causa 12 pontos de dano ao toque e bloqueia magias de 1º círculo;\n\n  * **Laranja**: causa 24 pontos de dano ao toque e bloqueia magias de 1º a 3º círculo;\n\n  * **Amarela**: causa 48 pontos de dano ao toque e bloqueia magias de 1º a 4º círculo;\n\n  * **Verde**: causa morte instantânea ao toque (JPC evita) e bloqueia magias de 1º a 5º círculo;\n\n  * **Azul**: petrifica ao toque (JPC evita) e bloqueia todas as magias de 1º a 6º círculo;\n\n  * **Anil**: destrói a alma ao toque, causando a morte (sem Jogada de Proteção), e bloqueia todas as magias divinas;\n\n  * **Violeta**: causa insanidade ao toque e bloqueia todas as magias arcanas."
  },
  "Flecha Ácida": {
    "circulo": "2º Círculo (Arcano)",
    "alcance": "45 metros",
    "duracao": "instantânea",
    "resistencia": "JPD reduz",
    "descricao": "O conjurador bem-sucedido em uma jogada de ataque a distância acerta um projétil ácido no alvo, causando 1d4 de dano ácido regressivo.  Um sucesso em uma JPD reduz o dano à metade."
  },
  "Flecha de Chamas": {
    "circulo": "3º Círculo (Arcano)",
    "alcance": "45 metros",
    "duracao": "instantânea",
    "resistencia": "nenhuma",
    "descricao": "Com esta magia, o conjurador consegue criar e disparar de suas mãos flechas de fogo (1 para cada 5 níveis do conjurador). Cada flecha causa 1d6 pontos de dano pela perfuração e outros 2d6 pontos de dano por fogo. Uma jogada de ataque à distância é necessária para atingir os alvos com essas flechas. O conjurador pode designar um alvo diferente para cada flecha."
  },
  "Força Arcana": {
    "circulo": "2º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "3 turnos",
    "resistencia": "nenhuma",
    "descricao": "Pela duração da magia, o alvo recebe 1 ponto extra para cada 5 pontos de Força já possuídos.  Assim, um Guerreiro com Força 16 teria seu atributo aumentado para 19, enquanto um conjurador com Força 9 teria seu atributo aumentado para 10. O cálculo deve ser sempre realizado com o valor original da Força do personagem, sem levar em conta outras magias, itens mágicos ou demais efeitos que ampliem o valor do atributo original."
  },
  "Forma Ectoplásmica": {
    "circulo": "Mago 3 (3º Círculo Arcano)",
    "alcance": "Pessoal",
    "duracao": "3 rodadas/nível",
    "resistencia": "Nenhuma",
    "descricao": "Quando utiliza essa magia, o mago torna-se insubstancial, com todo o seu equipamento. Ele passa a ser imune a ataques normais, podendo ser afetado apenas por magias, ataques especiais, armas mágicas, e criaturas que possam afetar aqueles que são atingidos somente por armas mágicas.\n\nMortos-vivos de qualquer tipo vão ignorar uma criatura na Forma Ectoplásmica, acreditando que ele seja uma aparição ou um espectro, embora um lich ou morto-vivo especial tenha direito a um teste de resistência com uma penalidade de -4 para reconhecer a magia.\n\nO mago recebe a habilidade de passar através de pequenas rachaduras na parede, buracos ou frestas de portas enquanto a magia durar. Entretanto, o mago não consegue voar, a não ser que utilize outras magias que permitam fazê-lo. Nenhuma forma de ataque é permitida, exceto contra criaturas que existam no Plano Etéreo, que podem ser atacadas normalmente pelo mago, bem como atacá-lo. Dissipar Magia, utilizado com sucesso, força-o a voltar à sua forma normal. O mago também pode voltar à sua forma normal com uma única palavra."
  },
  "Golem de Carne": {
    "circulo": "Necromante 4",
    "alcance": "Toque",
    "duracao": "Instantânea",
    "resistencia": "Nenhuma",
    "descricao": "Essa magia recria o Golem de Carne que foi aprimorado pelo grande Mago Rupert. Ela necessita de um coração que sempre bate e de partes de cadáveres, além de um ritual que dura uma noite inteira.\n\nMovimento: 9 | PV: 90 | CA: 18 | JP: 14 | 2x Pancadas +12 (2d12)\n\nImunidades: um Golem de Carne é imune ao dano de qualquer arma não mágica. Além disso, não são atingidos por ataques de um alvo vivo (gases, venenos ou magias mentais como ilusões ou demais formas mágicas de interferir na mente de seres vivos).\n\nCura Elétrica: o Golem de Carne cura 1 ponto de vida pra cada dado de dano causado por um ataque elétrico.\n\nFogo e Frio: ataques de fogo e frio, mesmo os não mágicos, deixam os golens lerdos por 2d6 rodadas. Um golem lerdo tem seu movimento reduzido à metade, e recebe uma penalidade de 2 em todas as jogadas e na CA."
  },
  "Golem de Sangue": {
    "circulo": "Necromante 6",
    "alcance": "Toque",
    "duracao": "Instantânea",
    "resistencia": "Nenhuma",
    "descricao": "Essa magia cria o mais poderoso golem disponível para Necromantes. É necessário ter aprendido a magia Golem de Carne e só é possível manter apenas um golem ativo por vez.\n\nMovimento: 12 | PV: 124 | CA: 22 | JP: 16 | 2x Pancadas +14 (2d12 + Dreno)\n\nImunidades: um Golem de Sangue é imune ao dano de qualquer arma não mágica. Além disso, não são atingidos por ataques de um alvo vivo (gases, venenos ou magias mentais como ilusões ou demais formas mágicas de interferir na mente de seres vivos).\n\nRegeneração: um Golem de Sangue regenera 2PV a cada rodada.\n\nResistência à Magia: qualquer magia que não afete uma área lançada contra o Golem de Sangue tem 1-5 chances em 1d6 de ser completamente ignorada.\n\nQuatro Braços: sacrificando 40PV temporariamente, o Golem de Sangue pode criar 2 braços adicionais, aumentando o número de ataques para 4. Entretanto, os ataques com os braços extras não causam efeito de Dreno. Caso decida voltar à forma original, todo dano é mantido proporcionalmente.\n\nDreno: Todo dano de combate causado pelo Golem de Sangue é regenerado por ele.\n\nVínculo Espiritual: O Necromante pode “pegar emprestado” até 20% dos pontos de vida do Golem. Todo dano sofrido é primeiro causado nos 20%. Caso o golem morra nesse processo, o Necromante sofre 9d8 pontos de dano e fica atordoado por 2d6 rodadas. Uma jogada de JPS reduz o dano à metade."
  },
  "Identificação": {
    "circulo": "Mago 1 (1º Círculo Arcano)",
    "alcance": "Toque",
    "duracao": "Instantânea",
    "resistencia": "Nenhuma",
    "descricao": "Para utilizar esta magia, o mago deve preparar-se durante 8h seguidas em um aposento fechado, livre de distrações e sem envolver-se em atividades outras que alimentar-se.\n\nPassado esse período, ele será capaz de identificar 2d6 + 1/nível itens mágicos, descobrindo suas propriedades, bônus, palavras mágicas, etc., com uma chance de 5%/nível. Itens amaldiçoados ou caóticos são identificados como outros itens mágicos quaisquer, mantendo assim suas verdadeiras naturezas em segredo."
  },
  "Imobilizar Monstros": {
    "circulo": "5º Círculo (Arcano)",
    "alcance": "36 metros",
    "duracao": "6 turnos +1/nível",
    "resistencia": "JPC evita",
    "descricao": "O personagem escolhe até 1d4 monstros não humanoides e vivos de tamanho grande ou menor para ficarem imobilizados sem conseguirem sair do lugar, como se estivessem paralisados. Uma JPC evita este efeito.\n\nO conjurador também pode escolher um único monstro como alvo para imobilizar. Nesse caso, deve realizar uma JPC difícil.\n\nMortos-vivos e alvos com 4 DV a mais que o conjurador não são afetados por esta magia."
  },
  "Imobilizar Pessoas": {
    "circulo": "3º Círculo (Arcano)",
    "alcance": "36 metros",
    "duracao": "1 turno por nível",
    "resistencia": "JPC evita",
    "descricao": "O conjurador escolhe até 1d4 pessoas (humano, semi-humano e humanoides vivos de tamanho grande ou menor) para ficarem imobilizadas sem conseguirem sair do lugar, como se estivessem paralisadas. Uma JPC evita este efeito. Também pode escolher uma única pessoa como alvo. Nesse caso, deve realizar uma JPC difícil. Mortos-vivos e alvos com 4 DV a mais que o conjurador não são afetados por esta magia."
  },
  "Imunidade à Magia": {
    "circulo": "8º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "1d4 turnos + 1/nível",
    "resistencia": "nenhuma",
    "descricao": "Com esta magia, o conjurador pode proteger uma criatura contra efeitos mágicos para cada 4 níveis que possui. Essa proteção confere ajuste nas jogadas de proteção:\n\n  * **Magias de 1º a 3º círculo**: falha apenas com um 20;\n\n  * **Magias de 4º a 6º círculo**: muito fácil;\n\n  * **Magias de 7º e 8º círculo**: fácil."
  },
  "Infravisão": {
    "circulo": "3º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "24 horas",
    "resistencia": "nenhuma",
    "descricao": "O alvo desta magia adquire infravisão de 18 metros, exatamente como um elfo ou anão."
  },
  "Invisibilidade": {
    "circulo": "2º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "permanente",
    "resistencia": "nenhuma",
    "descricao": "O alvo desta magia, seja este uma pessoa ou objeto, se torna totalmente invisível. Uma criatura invisível não pode ser atacada, a menos que sua localização aproximada seja conhecida.\n\nA magia é dissipada se o alvo invisível realizar qualquer tipo de ataque ou lançar uma magia."
  },
  "Invisibilidade 3 metros": {
    "circulo": "3º Círculo (Arcano)",
    "alcance": "36 metros",
    "duracao": "permanente",
    "resistencia": "nenhuma",
    "descricao": "Esta magia tem o mesmo efeito de uma magia Invisibilidade, mas afetando todas as criaturas e objetos em uma área de 3 metros de diâmetro de um alvo preferencial. Se uma criatura ou objeto abandonar a área, deixarão de estar invisíveis e, mesmo retornando a área, não recuperarão a invisibilidade."
  },
  "Invocar Criaturas": {
    "circulo": "3º Círculo (Arcano)",
    "alcance": "especial",
    "duracao": "6 turnos",
    "resistencia": "nenhuma",
    "descricao": "Com esta magia, o conjurador é capaz de invocar 2d4 criaturas presentes nas redondezas para lhe auxiliarem. Essas criaturas o servirão até o fim da duração da magia ou até a derrota de todas as criaturas. As criaturas invocadas levam 1d4 turnos para aparecer e permanecerão por mais 6 turnos. A quantidade de DV das criaturas invocadas é igual a metade do nível do conjurador, ou seja, um conjurador de 5º nível invoca 2d4 criaturas de no máximo 2 DV cada."
  },
  "Invocar Demônio": {
    "circulo": "Necromante 5",
    "alcance": "9m",
    "duracao": "Permanente",
    "resistencia": "Nenhuma",
    "descricao": "Essa magia invoca uma criatura dos planos inferiores para servir ao mago. Caso seja destruída, o mago deve aguardar 3 meses antes de realizar a invocação novamente.\n\nMovimento: 9, 12V | PV: 65 | CA: 18 | JP: 12 | 2x Garras +12 (2d10) | 1x Jato de Fogo (8d8)\n\nImunidades: um Demônio é imune ao dano de qualquer arma não mágica e fogo.\nJato de Fogo: Linha de 12m, 8x ao dia. JPD reduz o dano à metade.\nResistência clérigos: Demônios reduzem 4 pontos de sua jogada para resistir ao efeito de expulsar mortos-vivos dos clérigos."
  },
  "Lama em Pedra": {
    "circulo": "5º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "especial",
    "resistencia": "especial",
    "descricao": "Com esta magia, o conjurador consegue transformar 30 m² de pedra em lama com 3 metros de profundidade, levando 3d6 dias para endurecer.  Criaturas que tentam atravessar a lama têm seu movimento reduzido à metade do normal.  Criaturas de pedra que sejam alvos desta magia, como um Golem de Pedra, podem realizar uma JP para negar os efeitos da magia ou serão destruídas.\n\n[Lama em Pedra] é a versão reversa que permite endurecer até 3 m² de lama em pedra permanentemente."
  },
  "Lentidão": {
    "circulo": "3º Círculo (Arcano)",
    "alcance": "72 metros",
    "duracao": "3 turnos",
    "resistencia": "JPC evita",
    "descricao": "Todos dentro de uma área de 6 x 6 metros que não passarem em uma JPC ficam lentos. Os deslocamentos ficam reduzidos pela metade.  Os ataques deferidos pelo alvo são difíceis e os contra o alvo, fáceis.\n\n[Velocidade] é a versão reversa na qual acelera extremamente o metabolismo de até 1 criatura tocada para cada 3 níveis do conjurador, concedendo ao alvo uma movimentação acima do normal. Os deslocamentos ficam multiplicados por dois. Os ataques deferidos pelo alvo são fáceis e os contra o alvo, difíceis. Além disso, o alvo recebe um ataque extra por rodada. A aceleração é prejudicial ao organismo do alvo, envelhecendo-o 10% da idade atual."
  },
  "Ler Idiomas": {
    "circulo": "1º Círculo (Arcano)",
    "alcance": "pessoal",
    "duracao": "2 turnos",
    "resistencia": "nenhuma",
    "descricao": "Esta magia permite ao conjurador decifrar direções, instruções e fórmulas em idiomas desconhecidos. É particularmente útil para mapas de tesouro, muito embora não decifre nenhum enigma ou código, apenas permitindo ao conjurador compreender o que está escrito."
  },
  "Levitação": {
    "circulo": "2º Círculo (Arcano)",
    "alcance": "pessoal",
    "duracao": "6 turnos + 1/nível",
    "resistencia": "nenhuma",
    "descricao": "Com esta magia, o conjurador é capaz de se mover levitando em uma linha reta vertical. Necessita apenas de uma palavra para ser ativada, podendo ser evocada em qualquer situação, até mesmo durante uma queda."
  },
  "Localizar Objetos": {
    "circulo": "2º Círculo (Arcano)",
    "alcance": "18 metros + 2m/nível",
    "duracao": "2 turnos",
    "resistencia": "nenhuma",
    "descricao": "Esta magia dá ao conjurador a direção correta até um objeto do tipo especificado na descrição.\n\nO objeto não pode ser algo nunca visto pelo conjurador, apesar de que a magia pode detectar um objeto em uma classe geral de itens conhecidos do conjurador (cadeiras, ouro etc.), mas com uma precisão ainda menor.\n\nEsta magia não permite a localização de criaturas vivas ou animadas."
  },
  "Luz": {
    "circulo": "1º Círculo (Arcano)",
    "alcance": "especial",
    "duracao": "12 turnos",
    "resistencia": "JPS nega",
    "descricao": "O objeto alvo tocado produz luz tão brilhante quanto uma tocha, iluminando uma área com raio de 6 metros.\n\nSe conjurada nos olhos de um alvo a até 3m + 1,5m/nível do conjurador, a vítima que não passar em uma JPS fica cega até o final da duração da magia. Neste caso, a luz mágica se apaga e não causa nenhum outro efeito.\n\n[Escuridão] é a versão reversa que permite interromper qualquer fonte de luz, apagando tochas, velas, lâmpadas ou até mesmo dissipando uma magia Luz lançada anteriormente e criando uma área de 4,5 metros de raio de escuridão mágica, deixando todos dentro da área cegos (mesmo se possuírem Infravisão).\n\nSe conjurada nos olhos de um alvo tocado pelo conjurador, a vítima que não passar em uma JPS fica cega até o final da duração da magia.  Neste caso, a escuridão mágica some e não causa nenhum outro efeito."
  },
  "Luz Contínua": {
    "circulo": "2º Círculo (Arcano)",
    "alcance": "36 metros",
    "duracao": "permanente",
    "resistencia": "JPS nega",
    "descricao": "Esta magia tem o mesmo efeito de uma magia Luz, mas com duração contínua (enquanto desejado pelo conjurador). Se conjurada nos olhos de um alvo a até 3m + 1,5m/nível do conjurador, a vítima que não passar em uma JPS fica cega até o final da duração da magia. Neste caso, a luz mágica se apaga e não causa nenhum outro efeito.\n\n[Escuridão Contínua] é a versão reversa que cria uma área de escuridão mágica permanente numa área de 4,5 metros de raio, deixando todos dentro da área cegos, inclusive criaturas com Infravisão.  Qualquer fonte de luz trazida para dentro da área de escuridão será apagada. Uma Escuridão Contínua pode ser usada para dissipar os efeitos de uma magia de Luz Contínua."
  },
  "Magia Astral": {
    "circulo": "9º Círculo (Arcano)",
    "alcance": "pessoal",
    "duracao": "permanente",
    "resistencia": "nenhuma",
    "descricao": "O conjurador consegue projetar a sua forma astral para outros locais, ficando visível apenas a outras criaturas que também estejam sob forma astral. Enquanto estiver nesta forma, o conjurador pode lançar magias e se deslocar para onde desejar a uma velocidade de 150 km/h, mas, caso ultrapasse o limite de 1km de distância de seu corpo físico, não conseguirá mais retornar ao seu corpo, ficando preso à forma astral para sempre.\n\nEsta magia funciona enquanto o conjurador desejar ou até ser dissipada."
  },
  "Magia da Morte": {
    "circulo": "Necromante 5",
    "alcance": "3m + 1m/nível",
    "duracao": "Instantânea",
    "resistencia": "Ler texto (JPC)",
    "descricao": "Essa magia cria um círculo de morte e destruição de 9m de raio. Criaturas com 4DV ou menos morrem instantaneamente. Criaturas com até 6DV devem fazer um teste de JPC ou também morrerão. As demais (com 7DV ou mais), sofrem 1d8 pontos de dano a cada 2 níveis do Necromante, podendo jogar JPC para reduzir o dano à metade."
  },
  "Mão Espectral": {
    "circulo": "Necromante 2",
    "alcance": "N/A",
    "duracao": "1 turno/nível",
    "resistencia": "Nenhuma",
    "descricao": "Essa magia cria uma mão espectral verde que flutua com movimento 12. Ela tem CA 24 e qualquer dano causado irá dissipá-la, causando 2d6 pontos de dano ao Necromante. Qualquer habilidade ou magia que exija toque pode ser realizada através da mão (à distância) com a condição [F]."
  },
  "Mãos Flamejantes": {
    "circulo": "1º Círculo (Arcano)",
    "alcance": "3 metros + 1/nível",
    "duracao": "instantânea",
    "resistencia": "JPD reduz",
    "descricao": "Ao formar um leque com as mãos, o conjurador emite um raio triangular de fogo afetando todos na área de alcance da magia. Cada criatura atingida recebe 1d3 pontos de dano +2 pontos de dano adicionais por nível do conjurador até um máximo de +20. Uma JPD reduz o dano pela metade."
  },
  "Medo": {
    "circulo": "4º Círculo (Arcano)",
    "alcance": "18 metros",
    "duracao": "1 rodada/nível",
    "resistencia": "JPS nega",
    "descricao": "Esta magia cria um sentimento aterrorizante nas criaturas dentro de seu alcance. Uma falha na JPS faz as criaturas afetadas saírem correndo por toda a duração da magia. Há 1-4 chances em 1d6 de as criaturas soltarem qualquer objeto que estejam segurando."
  },
  "Metamorfose": {
    "circulo": "5º Círculo (Arcano)",
    "alcance": "3m + 1,5m/nível",
    "duracao": "permanente",
    "resistencia": "JPC evita",
    "descricao": "O conjurador consegue modificar fisicamente a forma de uma criatura (com no máximo o dobro dos DV do conjurador) para que esta se pareça com outro tipo de criatura, mas não é possível clonar um indivíduo específico. Uma JPC consegue evitar esse efeito caso o alvo deseje resistir. O alvo metamorfoseado mantém o mesmo número de DV e PV, mas adquire as habilidades especiais, ataques e capacidades físicas do novo tipo de criatura, assim como o comportamento, alinhamento e inteligência. Um anão metamorfoseado em uma gárgula não só se parecerá como uma, mas agirá e pensará como uma gárgula, podendo inclusive voar. Todas as criaturas metamorfoseadas retornam a sua forma original quando mortas."
  },
  "Metamorfosear-se": {
    "circulo": "4º Círculo (Arcano)",
    "alcance": "pessoal",
    "duracao": "6 turnos + 1/nível",
    "resistencia": "nenhuma",
    "descricao": "O conjurador consegue modificar fisicamente sua própria forma para um tipo de criatura (com no máximo o dobro dos DV do conjurador) para se parecer com outro tipo de criatura, mas nunca para clonar um indivíduo específico.\n\nO conjurador mantém o mesmo número de DV, PV, JP. Adquire ainda os ataques físicos e movimentos da criatura na qual se metamorfoseou, mas não é capaz de usar suas habilidades especiais não físicas, como imunidades, resistências, baforadas etc. Enquanto está metamorfoseado, o conjurador perde a capacidade de conjurar magias. Se morrer enquanto metamorfoseado, retornará a sua forma original."
  },
  "Meteoros Instantâneos": {
    "circulo": "4º Círculo (Arcano)",
    "alcance": "36 metros",
    "duracao": "especial",
    "resistencia": "nenhuma",
    "descricao": "O conjurador se torna capaz de conjurar e arremessar 1 esfera flamejante de fogo por nível, causando 2d4 pontos de dano de fogo.  O conjurador deve ser bem-sucedido em uma jogada de ataque à distância para atingir um alvo, sendo capaz de arremessar um único meteoro por rodada.\n\nQuando conjurados, os meteoros ficam disponíveis para serem arremessados por até 24 horas, até todos serem arremessados ou até a magia ser dissipada. O conjurador não precisa se concentrar para manter os meteoros disponíveis durante este tempo."
  },
  "Mísseis Mágicos": {
    "circulo": "1º Círculo (Arcano)",
    "alcance": "45 metros",
    "duracao": "instantânea",
    "resistencia": "nenhuma",
    "descricao": "Um míssil mágico voa para onde o conjurador direcionar, acertando automaticamente os alvos.  Para atingir uma criatura, é preciso que ela esteja na linha de visão do conjurador, o qual pode lançar 1 Míssil Mágico a cada 3 níveis, causando um dano de 1d4 pontos +1 por nível, até um máximo de +5. Assim, o conjurador conjura 2 mísseis no 4º nível, 3 mísseis no 7º, 4 mísseis no 10º, e 5 mísseis no 13º. Esses mísseis adicionais podem ser direcionados para alvos distintos desde que a distância entre os alvos não seja superior a 18 metros."
  },
  "Morte podre": {
    "circulo": "Necromante 3",
    "alcance": "Toque",
    "duracao": "3 turnos",
    "resistencia": "JPC anula",
    "descricao": "Depois de um ataque de toque bem sucedido, o necromante amaldiçoa a vítima, que começa a apodrecer por dentro. Ela recebe 1d10 de dano em todos os atributos físicos (até ficar com no mínimo 3) e sofrerá 1d6 pontos de dano por rodada durante 5 rodadas. O efeito pode ser retirado com Remover Doenças ou após 30 minutos."
  },
  "Morte Podre": {
    "circulo": "Necromante 3",
    "alcance": "Toque",
    "duracao": "3 turnos",
    "resistencia": "JPC anula",
    "descricao": "Depois de um ataque de toque bem sucedido, o necromante amaldiçoa a vítima, que começa a apodrecer por dentro. Ela recebe 1d10 de dano em todos os atributos físicos (até ficar com no mínimo 3) e sofrerá 1d6 pontos de dano por rodada durante 5 rodadas. O efeito pode ser retirado com Remover Doenças ou após 30 minutos."
  },
  "Muralha de Energia": {
    "circulo": "4º Círculo (Arcano)",
    "alcance": "18 metros",
    "duracao": "6 turnos + 1/nível",
    "resistencia": "nenhuma",
    "descricao": "O conjurador cria uma muralha de energia invisível com até 90 centímetros de espessura, 15 metros de altura e 15 metros de comprimento ao seu redor. Nenhum efeito mágico de um conjurador de nível inferior é capaz de ultrapassar a muralha, mas pessoas e projéteis sim."
  },
  "Muralha de Ferro": {
    "circulo": "5º Círculo (Arcano)",
    "alcance": "18 metros",
    "duracao": "6 turnos + 1/nível",
    "resistencia": "nenhuma",
    "descricao": "O conjurador cria uma muralha de ferro resistente com até 90 centímetros de espessura, 15 metros de altura e 15 metros de comprimento.  Nada que não seja normalmente capaz de ultrapassar ferro nestas condições consegue ultrapassar a muralha."
  },
  "Névoa Mortal": {
    "circulo": "5º Círculo (Arcano)",
    "alcance": "12 metros",
    "duracao": "1 rodada/nível",
    "resistencia": "especial",
    "descricao": "Vapores sulfurosos e altamente venenosos formam uma pesada e densa nuvem com 9 metros de diâmetro em todas as direções, movendo-se a favor do vento por 6 metros por rodada, ou, caso não haja vento, afastando-se do conjurador em linha reta. Qualquer criatura a ter contato com a névoa sofrerá 1 ponto de dano por rodada, e criaturas com menos de 5 DV devem realizar também uma JPC para evitar a morte.\n\nA névoa, por ser mais pesada do que o ar, desce escadas, fossos e alçapões, mas não é capaz de subir estes mesmos obstáculos."
  },
  "Olho Arcano": {
    "circulo": "4º Círculo (Arcano)",
    "alcance": "72 metros",
    "duracao": "6 turnos",
    "resistencia": "especial",
    "descricao": "O conjurador cria um olho flutuante e invisível com 2,5cm de diâmetro o qual envia ao conjurador informações visuais.\n\nO Olho Arcano pode ser criado em qualquer lugar dentro da linha de visão do conjurador, mas pode percorrer qualquer distância sem limitação, movendo-se a 10 metros por rodada. O Olho pode viajar em qualquer direção, mas não conseguirá atravessar barreiras sólidas e nem viajar através dos planos.\n\nO Olho só se move enquanto o conjurador mantiver a concentração na magia. Se o conjurador for atacado, é preciso fazer uma JPC para que o Olho não fique parado por um turno."
  },
  "Palavra do Poder: Atordoar": {
    "circulo": "7º Círculo (Arcano)",
    "alcance": "5 metros/nível",
    "duracao": "especial",
    "resistencia": "nenhuma",
    "descricao": "O conjurador é capaz de atordoar um alvo proferindo uma única palavra, sem direito a uma Jogada de Proteção desde que o alvo seja capaz de ouvir a palavra dita pelo conjurador. O alvo não precisa compreendê-la. Se o alvo estiver com:\n\n  * **6 DV ou menos**: fica atordoado por até 2d6+3 rodadas.\n\n  * **7 a 9 DV**: fica atordoado por 1d6+1 rodadas.\n\n  * **10 DV ou mais**: não sofrerá os efeitos desta magia.\n\nUm personagem atordoado por esta magia mantém seus pontos de vida, mas não consegue realizar nenhuma atividade física como se mover, resistir, atacar ou conjurar magias, podendo falar apenas hesitantemente um máximo de 1d4+2 palavras por rodada."
  },
  "Palavra do Poder: Matar": {
    "circulo": "9º Círculo (Arcano)",
    "alcance": "3 metros/nível",
    "duracao": "instantânea",
    "resistencia": "nenhuma",
    "descricao": "O conjurador é capaz de matar um alvo proferindo uma única palavra, sem direito a uma Jogada de Proteção desde que o alvo seja capaz de ouvir a palavra dita pelo conjurador. O alvo não precisa compreendê-la. Se o alvo estiver com:\n\n  * **50 PV ou menos**: morre imediatamente.\n\n  * **51 PV ou mais**: não sofrerá os efeitos desta magia."
  },
  "Parar Cura": {
    "circulo": "Necromante 3",
    "alcance": "3m + 3m/nível",
    "duracao": "1 turno/nível",
    "resistencia": "JPC anula",
    "descricao": "Essa magia faz com que o alvo seja incapaz de curar-se por um período. Isso inclui poções, itens mágicos ou magias de cura. A magia Remover Maldição pode acabar com o efeito da magia, mas caso não a possua, a vítima deve aguardar a duração da magia acabar."
  },
  "Passagem Secreta": {
    "circulo": "7º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "especial",
    "resistencia": "nenhuma",
    "descricao": "Esta magia cria uma passagem secreta e invisível em uma parede, muro ou outra superfície com até 50 centímetros de largura.\n\nO conjurador poderá conjurar essa magia apenas uma vez por nível, ou seja, ao utilizá-la uma vez só poderá fazer uso dela novamente após subir um nível na sua classe de conjurador. A passagem criada fica ativa até o conjurador usar esta magia novamente."
  },
  "Patas de Aranha": {
    "circulo": "1º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "1 turno",
    "resistencia": "nenhuma",
    "descricao": "Esta magia permite ao alvo andar sobre as paredes ou tetos como se fossem um piso horizontal.  Nestas condições, um teste de escalar não é necessário e o alvo pode se deslocar com o seu movimento base sem nenhuma redução, porém os efeitos da gravidade ainda são sentidos, ou seja, objetos soltos nos bolsos ou na roupa do alvo podem se desprender e cair normalmente."
  },
  "Pedra em Carne": {
    "circulo": "6º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "permanente",
    "resistencia": "nenhuma",
    "descricao": "Com esta magia, o conjurador consegue transformar pedaços de pedra em carne. Criaturas petrificadas podem ser restauradas, bem como seus equipamentos, com esta magia. Criaturas de pedra alvos desta magia, como um Golem de Pedra, podem realizar uma JP para negar os efeitos da magia ou serão destruídas.\n\n[Carne em Pedra] é a versão reversa que permite petrificar um alvo assim como todo o seu equipamento. Uma JPS bem-sucedida pode negar os efeitos desta magia."
  },
  "Pedra em Lama": {
    "circulo": "5º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "especial",
    "resistencia": "especial",
    "descricao": "Com esta magia, o conjurador consegue transformar 30 m² de pedra em lama com 3 metros de profundidade, levando 3d6 dias para endurecer.  Criaturas que tentam atravessar a lama têm seu movimento reduzido à metade do normal.  Criaturas de pedra que sejam alvos desta magia, como um Golem de Pedra, podem realizar uma JP para negar os efeitos da magia ou serão destruídas.\n\n[Lama em Pedra] é a versão reversa que permite endurecer até 3 m² de lama em pedra permanentemente."
  },
  "Pedra Mágica": {
    "circulo": "Mago 2 (2º Círculo Arcano)",
    "alcance": "Especial",
    "duracao": "1 turno/nível",
    "resistencia": "Nenhuma",
    "descricao": "Utilizando uma gema de valor mínimo de 500po, o mago pode armazenar uma magia de até 4º círculo na pedra para um uso posterior. Outras pessoas, incluindo não-magos, também podem utilizá-la; de qualquer forma, para efeitos de duração, dano e etc., conta-se o nível do mago no momento da realização da magia."
  },
  "Pele Rochosa": {
    "circulo": "Mago 5 (5º Círculo Arcano)",
    "alcance": "Toque",
    "duracao": "1 turno/nível",
    "resistencia": "Nenhuma",
    "descricao": "Quando essa magia é utilizada, ela confere ao receptor uma imunidade quase total a ataques físicos, sejam armas, garras, dentes, projéteis — tanto faz. Mesmo uma Espada Cortante não pode afetar uma criatura que esteja sob efeito dessa magia, nem uma pedra lançada por um gigante, nem uma mordida de cobra, etc.\n\nEntretanto, ataques mágicos como Bola de Fogo, Mísseis Mágicos, Relâmpago e similares, funcionam normalmente sobre o receptor.\n\nEssa magia bloqueia 1d4 ataques, mais um ataque para cada dois níveis de experiência que o mago que lançou a magia possua. Por ataque entende-se qualquer ataque sofrido pela criatura, não importando se a acertou, nem se foi físico ou mágico. Por exemplo, Pele Rochosa lançado por um mago de 9º nível protegeria o receptor de 1d4 + 4 ataques. Um grifo que atacasse o receptor reduziria a proteção em três a cada rodada. Quatro mísseis criados pela magia Mísseis Mágicos cancelariam quatro proteções concedidas pela Pele Rochosa, além de causarem dano normalmente."
  },
  "Pequeno Globo da Invulnerabilidade": {
    "circulo": "Mago 5 (5º Círculo Arcano)",
    "alcance": "0 (Pessoal)",
    "duracao": "1 rodada/nível",
    "resistencia": "Nenhuma",
    "descricao": "Essa magia cria um globo mágico, imóvel e brilhante, ao redor do mago, impedindo que quaisquer magias dos três primeiros níveis o afetem, e o exclui da área de efeito. Isto também afeta efeitos gerados por itens mágicos e habilidades inatas.\n\nEntretanto, qualquer magia pode ser lançada de dentro para fora do Pequeno Globo de Invulnerabilidade, sem afetá-lo. Magias do 4º nível em diante não são afetadas pelo Globo, que pode ser derrubado por uma Dissipar Magia utilizada com sucesso. O mago pode entrar e sair do Pequeno Globo de Invulnerabilidade sem problema algum.\n\nEle não cancela magias, a não ser que estas sejam lançadas através dele, de fora para dentro. Se um mago utiliza Reflexos do lado externo, e então entra nele, as imagens desaparecerão, reaparecendo apenas se o mago sair do Pequeno Globo de Invulnerabilidade. Da mesma maneira, um mago que estivesse na área de Luz ainda receberia iluminação suficiente para poder ver o exterior, mesmo que o interior do Pequeno Globo de Invulnerabilidade ficasse escuro: ele não anula a magia, apenas reduz a sua área."
  },
  "Percepção Extrassensorial": {
    "circulo": "2º Círculo (Arcano)",
    "alcance": "18 metros",
    "duracao": "12 turnos",
    "resistencia": "nenhuma",
    "descricao": "Concentrando-se por 1 minuto, o conjurador pode detectar e entender os pensamentos de outras criaturas dentro de um raio máximo de 18 metros, ainda que não compartilhem o mesmo idioma. A magia não pode penetrar mais de 60 centímetros de pedra e é bloqueada até mesmo pela mais fina folha de chumbo.\n\nSe mais de duas criaturas estiverem na área de efeito, o conjurador precisa concentrar-se um turno adicional para selecionar exatamente os pensamentos que deseja perceber."
  },
  "Permanência": {
    "circulo": "8º Círculo (Arcano)",
    "alcance": "especial",
    "duracao": "permanente",
    "resistencia": "nenhuma",
    "descricao": "Esta magia tem a habilidade de dar a qualquer magia arcana de 1º, 2º e 3º círculos a duração permanente. Esta magia não surte efeito em magias que originalmente possuem duração instantânea e nem nas que causem dano diretamente como Bola de Fogo ou Relâmpago."
  },
  "Porta Dimensional": {
    "circulo": "4º Círculo (Arcano)",
    "alcance": "3 metros",
    "duracao": "instantânea",
    "resistencia": "JPS nega",
    "descricao": "Com esta magia, o conjurador abre um portal entre um local visível e outro também visível a no máximo 100 metros um do outro. O personagem sempre chega ao lugar desejado, desde que dentro do alcance da magia e caso consiga visualizar seu destino. O personagem pode levar pelo portal todo o equipamento que conseguir carregar, além de uma criatura de tamanho médio para cada 3 níveis do conjurador. Uma criatura grande equivale a duas criaturas médias. Todas as criaturas a serem transportadas devem estar em contato umas com as outras e, caso o alvo esteja sendo transportado à força, pode realizar uma JPS para não ser transportado."
  },
  "Portal": {
    "circulo": "8º Círculo (Arcano)",
    "alcance": "18 metros",
    "duracao": "1d4 turnos + 1/nível",
    "resistencia": "nenhuma",
    "descricao": "Esta magia abre uma fenda dimensional com outro plano de existência, permitindo ao personagem invocar um ser específico chamando pelo seu nome. Existe 1 chance em 1d6 de outra criatura aproveitar a oportunidade para ultrapassar o portal, bem como 1 chance em 1d6 do ser escolhido não se interessar pela invocação.  Seres invocados através de um portal não serão necessariamente amistosos com o conjurador."
  },
  "Proteção contra Projéteis": {
    "circulo": "3º Círculo (Arcano)",
    "alcance": "pessoal",
    "duracao": "12 turnos",
    "resistencia": "nenhuma",
    "descricao": "O conjurador cria um campo invisível repelente a projéteis não mágicos, como flechas, pedras de funda e virotes de bestas, além de armas arremessadas como adagas ou martelos.\n\nEsta magia não protege contra projéteis grandes, como pedras arremessadas por um gigante ou munição de uma catapulta."
  },
  "Proteger Fortalezas": {
    "circulo": "6º Círculo (Arcano)",
    "alcance": "especial",
    "duracao": "1 turno + 1/nível",
    "resistencia": "especial",
    "descricao": "Esta magia é utilizada para proteger uma fortaleza, abrangendo uma área de até 200 m² por nível de conjurador, e até 8 metros de altura.  Os diversos andares de uma fortaleza podem ser protegidos com magias diferentes, e o efeito dessa proteção é determinado pelo seu conjurador:\n\n  * **Neblina**: preenche todos os corredores, obscurecendo a visão além de 2 metros. Uma criatura no meio da neblina e a mais de 2 metros de distância é um alvo difícil de ser atingido em um ataque.\n\n  * **Trancas mágicas**: todas as portas na área estão sob o efeito da magia Trancar.\n\n  * **Teias**: ocupam todas as escadas do local, com funcionamento semelhante ao da magia Teia.  Mesmo queimadas, as teias crescem novamente em 10 minutos.\n\n  * **Confusão**: em todos os lugares em que houver uma escolha a ser feita – cruzamentos de corredores, por exemplo – as criaturas serão afetadas por uma confusão mental que dá 1-3 chances em 1d6 de acreditarem que estão seguindo na direção errada. JPS nega esse efeito.\n\n  * **Portas secretas**: uma porta para cada nível do conjurador é coberta por uma ilusão que faz com que seja igual a uma parede. Essa magia impede que a porta secreta seja localizada inclusive por elfos."
  },
  "Queda Suave": {
    "circulo": "2º Círculo (Arcano)",
    "alcance": "10 metros/nível",
    "duracao": "1 rodada/nível",
    "resistencia": "nenhuma",
    "descricao": "Esta magia faz com que alvos em queda livre caiam lentamente até o chão, numa velocidade segura de 20 metros por rodada, ou seja, lenta o suficiente para não causar dano.\n\nEsta magia pode ser conjurada com um gatilho formado por um gesto ou palavra única, algo rápido o suficiente para conjurá-la até mesmo no meio de uma queda inesperada e sem gastar movimento ou ação durante um combate.\n\nObjetos arremessados ou disparados como pedras, flechas ou adagas podem ser alvo de uma Queda Suave se pesarem até 100 kg para cada 5 níveis do conjurador.\n\nComo esta magia atua apenas em objetos em queda livre, não é possível conjurá-la para interromper voos ou para prejudicar ataques de armas corpo a corpo ou rasantes de criaturas voadoras."
  },
  "Recipiente Arcano": {
    "circulo": "5º Círculo (Arcano)",
    "alcance": "pessoal",
    "duracao": "especial",
    "resistencia": "especial",
    "descricao": "O conjurador cria um recipiente arcano contendo sua própria força vital, podendo ser usado para possuir o corpo de outras criaturas. O recipiente deve ser um objeto inanimado e deve estar a até 9 metros de distância do conjurador.\n\nDurante a transferência o conjurador entra num estado de transe, próximo a um coma, e não é capaz de se defender ou de realizar qualquer outra ação. Se o corpo do conjurador for destruído, a sua força vital fica presa no recipiente até conseguir realizar uma possessão. Se o recipiente for destruído nesta fase, o conjurador morre imediatamente.\n\n  * **Possuindo**: quando a força vital do conjurador estiver no recipiente, o conjurador pode tentar possuir o corpo de outra criatura a até 36 metros do recipiente. A vítima pode realizar uma JPS para negar a possessão.  Se bem-sucedida, fica imune a uma nova possessão por um turno. Se falhar, o conjurador consegue possuir o corpo da vítima pelo tempo desejado por ele, retornando sua força vital para seu próprio corpo no final do processo.\n\n  * **Possuído**: o conjurador passa a controlar totalmente o corpo da vítima após possuí-lo, mas não conseguirá conjurar magias durante uma possessão. Se o recipiente é destruído durante a possessão, a força vital do conjurador fica presa no corpo possuído, mas, se o corpo possuído morrer, a força vital migra para o recipiente. Se ambos forem destruídos ao mesmo tempo, o conjurador morre imediatamente."
  },
  "Reflexos": {
    "circulo": "2º Círculo (Arcano)",
    "alcance": "pessoal",
    "duracao": "6 turnos",
    "resistencia": "nenhuma",
    "descricao": "A magia cria 1d4+1 reflexos do conjurador, que, como espelhos, agem em perfeita sincronia com ele. Os atacantes não podem distinguir os reflexos do original, podendo atacar uma das imagens ao invés do conjurador verdadeiro. Em caso de sucesso no ataque, haverá 1-3 chances em 1d6 do alvo atingido ser o reflexo. Caso o ataque seja direcionado a uma área na qual estejam tanto o conjurador quanto o seu reflexo, essa jogada é dispensada.  Um reflexo atingido é imediatamente dissipado."
  },
  "Relâmpago": {
    "circulo": "3º Círculo (Arcano)",
    "alcance": "54 metros",
    "duracao": "instantânea",
    "resistencia": "JPD reduz",
    "descricao": "Apontando o dedo para um alvo, o conjurador emite um raio de sua mão causando 1d8 pontos de dano +1d8 de dano para cada 2 níveis do conjurador até um máximo de 10d8. O relâmpago ricocheteará no primeiro alvo e atingirá outra criatura à escolha do conjurador (desde que esta criatura esteja a até 6 metros de distância do primeiro alvo), recebendo 1d6 pontos de dano +1d6 pontos de dano a cada 2 níveis de conjurador até um máximo de 10d6. O relâmpago poderá ainda atingir uma terceira criatura à escolha do conjurador (desde que esteja a até 6 metros de distância da segunda criatura atingida), e receberá 1d4 pontos de dano a cada 2 níveis de conjurador até um máximo de 10d4. Uma JPD reduz o dano desta magia pela metade."
  },
  "Respirar na Água": {
    "circulo": "2º Círculo (Arcano)",
    "alcance": "9 metros",
    "duracao": "24 horas",
    "resistencia": "nenhuma",
    "descricao": "Todos os alvos dentro do alcance desta magia poderão respirar dentro da água pelas próximas 24 horas. Esta magia não afeta a capacidade das pessoas de respirar normalmente ao saírem da água e não confere qualquer habilidade para nadar ou se deslocar dentro da água."
  },
  "Reverter Gravidade": {
    "circulo": "7º Círculo (Arcano)",
    "alcance": "5 metros/nível",
    "duracao": "1 rodada/nível",
    "resistencia": "nenhuma",
    "descricao": "Esta magia faz com que tudo dentro do alcance da magia “caia” para cima. Objetos soltos, pessoas, criaturas, tudo sobe ao teto como se estivesse caindo. O dano normal para queda deve ser aplicado. Objetos frágeis se quebrarão no processo como se fossem no chão. Com o fim da magia, todos cairão novamente ao solo, recebendo mais uma vez o dano de queda."
  },
  "Sementes de Fogo": {
    "circulo": "Clérigo 6 (6º Círculo Divino)",
    "alcance": "40m",
    "duracao": "1 turno/nível (Ver texto)",
    "resistencia": "JPD",
    "descricao": "A magia Sementes de Fogo cria projéteis especiais, ou bombas incendiárias, que queimam com grande calor. O efeito pode ser utilizado em qualquer uma das duas formas, conforme definido pelo clérigo:\n\n• Projétil: Essa opção transforma até quatro bolotas (sementes de carvalho) em projéteis de área que podem ser atirados a até 40 metros. É preciso uma jogada de ataque para acertar o alvo pretendido, e penalidades por imperícia devem ser aplicadas. Cada bolota estoura quando atinge alguma superfície rígida, causando 2d8 pontos de dano e queimando qualquer material combustível em um círculo de 3 metros de diâmetro, a partir do ponto de impacto. Por meio de um teste de JPD, uma criatura dentro da área afetada recebe somente metade do dano, mas um ser atingido diretamente por um dos projéteis receberá dano integral (isto é, sem teste de resistência).\n\n• Incendiárias: Esta opção transforma até oito bagas de azevinho em bombas incendiárias especiais. As bagas de azevinho são enterradas na maioria das vezes, sendo muito leves para fazer mísseis eficientes (podem ser arremessadas a até 2 metros). Elas estouram e ficam em chamas se o clérigo estiver a uma distância máxima de 40 metros e disser uma palavra de comando. As bagas explodem instantaneamente, causando 1d8 pontos de dano a qualquer criatura, e queimando qualquer material combustível dentro de um círculo de 2 metros de diâmetro. As criaturas nessa área sofrem metade do dano se forem bem-sucedidas no teste de resistência à magia.\n\nTodas as Sementes de Fogo perdem o poder depois de um período equivalente a um turno por nível de experiência do clérigo — por exemplo, as sementes de um clérigo de 13º nível permanecem potentes por um máximo de 13 turnos após sua criação."
  },
  "Símbolo": {
    "circulo": "8º Círculo (Arcano)",
    "alcance": "especial",
    "duracao": "especial",
    "resistencia": "nenhuma",
    "descricao": "Esta magia cria uma runa mágica similar a uma escrita que pode ser instalada em um objeto como uma porta, muro, passagem ou ainda flutuando, mas de forma fixa, em pleno ar. Quando uma criatura viva (que não seja o próprio conjurador) passar pelo símbolo ou tocar o objeto onde o símbolo está instalado, o símbolo é ativado imediatamente.\n\nUma vez instalado, é impossível mudar o tipo do símbolo ou a sua localização. É preciso escolhê-lo durante a conjuração da magia. Os símbolos mais conhecidos são:\n\n  * **Símbolo da Morte**: mata imediatamente qualquer criatura com menos de 10 DV, sem direito a nenhuma JP. Nada acontece com alvos de 10 DV ou mais.\n\n  * **Símbolo da Discórdia**: causa os mesmos efeitos da magia Confusão, sem direito a nenhuma JP. Esta condição é permanente ou até ser removida.\n\n  * **Símbolo do Medo**: causa os mesmos efeitos da magia Medo, sem direito a nenhuma JP.\n\n  * **Símbolo da Loucura**: causa insanidade na vítima que age desconexa com a realidade.  Ela não pode atacar, conjurar magias, usar habilidades de raça ou classe e deve ser vigiada de perto para não causar problemas ou mesmo desaparecer. Esta condição é permanente ou até ser removida.\n\n  * **Símbolo do Atordoamento**: atordoa imediatamente qualquer criatura com menos de 10 DV, sem direito a nenhuma JP. Nada acontece com alvos de 10 DV ou mais. Causa os mesmos efeitos da magia Palavra do Poder: Atordoar. \n\n  * **Símbolo do Sono**: adormece imediatamente qualquer criatura com menos de 10 DV, sem direito a nenhuma JP. Nada acontece com alvos de 10 DV ou mais. Causa os mesmos efeitos da magia Sono, mas com duração de 1d10+10 horas."
  },
  "Simulacro": {
    "circulo": "7º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "permanente",
    "resistencia": "nenhuma",
    "descricao": "O conjurador cria uma cópia de si próprio, ou de outro alvo tocado, a partir de um boneco feito de qualquer material sólido o suficiente para resistir ao ritual. O boneco então é encantado e toma formas semelhantes às do alvo, sendo ao mesmo tempo muito parecido com o original, mas nitidamente diferente, caso comparados lado a lado.\n\nO simulacro é uma criatura mágica podendo ser detectada por meio de magia e é quase idêntica ao alvo, com os poderes equivalentes a uma criatura com 1/4 dos níveis do original + 1 nível. Ou seja, um simulacro de uma criatura com 8 DV possui apenas 3 DV.\n\nO simulacro não copia poderes mágicos, embora consiga emular poderes raciais e de classe, respeitando a limitação de níveis."
  },
  "Sono": {
    "circulo": "1º Círculo (Arcano)",
    "alcance": "72 metros",
    "duracao": "4d4 turnos",
    "resistencia": "nenhuma",
    "descricao": "Esta magia coloca inimigos em um sono encantado, sem direito a uma Jogada de Proteção.  Ela afeta criaturas baseada em seus dados de vida, afetando 1d4+1 DV para cada 5 níveis do conjurador. As primeiras criaturas afetadas são sempre as com menos dados de vida dentro do alcance da magia. Dados de vida remanescentes após a contagem são desperdiçados.\n\nCriaturas adormecidas por esta magia permanecem dormindo até o final de sua duração, ou até serem acordadas. São atacadas como se estivessem indefesas e despertarão após levarem o dano."
  },
  "Teia": {
    "circulo": "2º Círculo (Arcano)",
    "alcance": "3 metros",
    "duracao": "48 turnos",
    "resistencia": "nenhuma",
    "descricao": "Teias fibrosas e grudentas preenchem uma área de até 3 x 3 x 6 metros, tornando essa área extremamente difícil de ser atravessada. Será considerada enredada qualquer pessoa que entrar numa área preenchida por essa magia, além de não poder realizar nenhuma outra ação física que não seja tentar se desvencilhar da teia.\n\n**Desvencilhar**: para se desvencilhar é necessário ser bem-sucedido em um teste de Força [D].\n\n**Inflamável**: a teia é um material altamente inflamável, podendo queimar totalmente em duas rodadas. Criaturas presas na teia recebem 1d6 de dano por rodada."
  },
  "Telecinesia": {
    "circulo": "5º Círculo (Arcano)",
    "alcance": "36 metros",
    "duracao": "6 rodadas",
    "resistencia": "JPS nega",
    "descricao": "O conjurador é capaz de erguer e mover objetos ou criaturas apenas com o poder da sua mente, enquanto concentrado. Se perder a concentração ou levar dano, a magia se dissipará imediatamente.\n\nA quantidade de peso que pode ser movida (com movimento 6) é de até 10 kg por nível do conjurador.  Este também é capaz de arremessar o que está sendo erguido, desde que tenha no máximo ¼ do peso permitido, a até 15 metros de distância.  O alvo desta magia pode realizar uma JPS para negar seus efeitos."
  },
  "Teleporte": {
    "circulo": "5º Círculo (Arcano)",
    "alcance": "3 metros",
    "duracao": "instantânea",
    "resistencia": "JPS nega",
    "descricao": "Esta magia transporta o conjurador e/ou outro personagem tocado, junto dos seus equipamentos, até um destino determinado pelo conjurador e sem limite de distância, desde que no mesmo plano de existência. Teleporte possui uma chance de ser bem-sucedido e o conhecimento do conjurador sobre o local influencia fortemente o resultado, mas pode produzir resultados catastróficos:\n\n  * **Conhecimento Exato**: o conjurador já esteve no local, conhece detalhadamente ou fez previamente um estudo minucioso do destino.  Chance de 1-5 em 1d6.\n\n  * **Conhecimento Médio**: o conjurador nunca esteve no local, mas sabe onde fica e como chegar lá, ou então estudou por mapas ou outra forma de visualização. Chance de 1-3 em 1d6.\n\n  * **Conhecimento Fraco**: o conjurador não sabe onde o destino fica e nem como chegar até lá, no máximo ouviu descrições sobre o lugar.  Chance de 1-2 em 1d6.\n\nEm caso de sucesso no teste, o teleporte ocorre no nível do solo, sem problemas e no local pretendido pelo conjurador.\n\n**Falha no teste**: caso o teste não seja bem-sucedido, lance um dado para cada situação... \n\nchance de **1-4 em 1d6** do destino estar errado até 1d6 + 4 km em qualquer direção;\n\nchance de **1-2 em 1d6** do destino estar 1d10 x 3 m acima do nível do solo, podendo resultar em dano por queda;\n\nchance de **1 em 1d6** do destino estar abaixo do nível do solo, resultando em morte imediata.\n\nO alvo desta magia pode realizar uma JPS para negar seus efeitos."
  },
  "Tempestade Glacial": {
    "circulo": "4º Círculo (Arcano)",
    "alcance": "72 metros",
    "duracao": "instantânea",
    "resistencia": "JPD reduz",
    "descricao": "Esta magia cria um vórtice cônico de gelo e neve com 6 metros de diâmetro, causando 1d6 de dano por frio a todas as criaturas dentro da tempestade. Adicionalmente, a tempestade expele granizo em todas as direções, causando um dano adicional de 1d6 (devido os estilhaços de gelo expelidos) em quem estiver até 6 metros de distância do centro da tempestade. Uma JPD reduz o dano pela metade."
  },
  "Toque Sombrio": {
    "circulo": "Necromante Exclusiva (1º nível)",
    "alcance": "Toque",
    "duracao": "Instantânea",
    "resistencia": "Nenhuma",
    "descricao": "Com um ataque de toque bem sucedido, o Necromante drena a força vital do alvo vivo, causando 1d8 pontos de dano por energia negativa."
  },
  "Trancar": {
    "circulo": "1º Círculo (Arcano)",
    "alcance": "18 metros",
    "duracao": "permanente",
    "resistencia": "nenhuma",
    "descricao": "Esta magia pode ser utilizada para dar acesso a qualquer objeto fechado, trancado (mesmo à chave) ou emperrado pela duração da magia (ou até ser dissipada).\n\n[Trancar] é a versão reversa que permite trancar um acesso a qualquer objeto aberto."
  },
  "Velocidade": {
    "circulo": "3º Círculo (Arcano)",
    "alcance": "72 metros",
    "duracao": "3 turnos",
    "resistencia": "JPC evita",
    "descricao": "Todos dentro de uma área de 6 x 6 metros que não passarem em uma JPC ficam lentos. Os deslocamentos ficam reduzidos pela metade.  Os ataques deferidos pelo alvo são difíceis e os contra o alvo, fáceis.\n\n[Velocidade] é a versão reversa na qual acelera extremamente o metabolismo de até 1 criatura tocada para cada 3 níveis do conjurador, concedendo ao alvo uma movimentação acima do normal. Os deslocamentos ficam multiplicados por dois. Os ataques deferidos pelo alvo são fáceis e os contra o alvo, difíceis. Além disso, o alvo recebe um ataque extra por rodada. A aceleração é prejudicial ao organismo do alvo, envelhecendo-o 10% da idade atual."
  },
  "Ventriloquismo": {
    "circulo": "1º Círculo (Arcano)",
    "alcance": "18 metros",
    "duracao": "2 turnos",
    "resistencia": "nenhuma",
    "descricao": "Qualquer som produzido com a boca pelo conjurador, e em qualquer língua conhecida por ele, é transferido para outra pessoa ou objeto dentro do alcance da magia."
  },
  "Visão": {
    "circulo": "7º Círculo (Arcano)",
    "alcance": "pessoal",
    "duracao": "instantânea",
    "resistencia": "nenhuma",
    "descricao": "Esta magia permite ao conjurador se concentrar em um local tranquilo e obter respostas de uma pergunta em forma de uma visão enviada por uma entidade superior.\n\nA qualidade da revelação da visão está ligada à como a entidade se sentirá com a pergunta do conjurador. O Mestre deve lançar em segredo 1d6 e montar a visão de resposta de acordo com o resultado:\n\n  * **1**: A entidade se sente ultrajada e revela uma visão falsa com informações falsas e desconexas.\n\n  * **2**: A entidade se sente desrespeitada com a frivolidade da questão e ignora o conjurador.\n\n  * **3-5**: A entidade se mostra indiferente, mas envia uma visão menor e interpretativa.\n\n  * **6**: A entidade se sente compelida a ajudar e envia uma visão reveladora."
  },
  "Visão da Verdade": {
    "circulo": "6º Círculo (Arcano)",
    "alcance": "pessoal",
    "duracao": "1d4 turnos + 1/nível",
    "resistencia": "nenhuma",
    "descricao": "Esta magia permite ao conjurador ver dentro de um raio de 36 metros as coisas como elas realmente são. O conjurador fica imune a ilusões, escuridões mágicas ou normais; enxerga criaturas e objetos invisíveis como se fossem visíveis e também portas secretas ou camufladas; visualiza a forma verdadeira de criaturas modificadas ou transformadas.\n\nUma Visão da Verdade também pode ser usada para enxergar os alinhamentos reais das criaturas e objetos, além de dar uma noção aproximada do poder das criaturas dentro da área de efeito."
  },
  "Voo": {
    "circulo": "3º Círculo (Arcano)",
    "alcance": "toque",
    "duracao": "1d6 turnos + 1/nível",
    "resistencia": "nenhuma",
    "descricao": "Esta magia dá ao alvo tocado pelo conjurador o poder de voar com movimento 18 enquanto a magia durar. O movimento de voo é livre, podendo o alvo se mover em qualquer direção, subir ou descer, assim como levitar ou pairar."
  }
};
