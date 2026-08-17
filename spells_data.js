const SPELL_DESCRIPTIONS = {
  // Magias Exclusivas de Necromante
  "Aterrorizar": {
    circulo: "Necromante Exclusiva (1º nível)",
    alcance: "9m",
    duracao: "1d6 rodadas",
    resistencia: "JPS anula (teste difícil)",
    descricao: "Ao utilizar essa magia em qualquer alvo vivo, a vítima deve fazer uma JPS difícil. Falha deixará a vítima aterrorizada, causando uma penalidade de -2 em todas as jogadas de ataque e testes físicos."
  },
  "Toque Sombrio": {
    circulo: "Necromante Exclusiva (1º nível)",
    alcance: "Toque",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "Com um ataque de toque bem sucedido, o Necromante drena a força vital do alvo vivo, causando 1d8 pontos de dano por energia negativa."
  },
  "Drenar Vida": {
    circulo: "Necromante Exclusiva (6º nível)",
    alcance: "Toque",
    duracao: "6 rodadas (pontos temporários)",
    resistencia: "Nenhuma",
    descricao: "O Necromante realiza um toque e drena 3d4+3 pontos de vida do alvo vivo. Os pontos drenados são adicionados aos seus PV atuais, podendo ultrapassar o PV máximo do necromante. Esses pontos extras permanecem durante 6 rodadas."
  },

  // 1º Círculo Arcano
  "Abrir": {
    circulo: "1º Círculo (Arcano)",
    alcance: "18m",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "Esta magia abre portas trancadas, emperradas ou fechadas magicamente (como por Cerrar Portas). Ela também abre baús e outros recipientes travados."
  },
  "Cerrar Portas": {
    circulo: "1º Círculo (Arcano)",
    alcance: "18m",
    duracao: "2d6 turnos",
    resistencia: "Nenhuma",
    descricao: "Esta magia mantém uma porta, portão ou janela firmemente fechada. Criaturas extra-planares ou magos de nível superior ao conjurador podem abri-la normalmente."
  },
  "Disco Flutuante": {
    circulo: "1º Círculo (Arcano)",
    alcance: "2m",
    duracao: "6 turnos",
    resistencia: "Nenhuma",
    descricao: "Cria um plano circular horizontal invisível com 90 cm de diâmetro que flutua a 90 cm do chão e segue o conjurador, capaz de carregar até 250 kg de peso."
  },
  "Escudo Arcano": {
    circulo: "1º Círculo (Arcano)",
    alcance: "Pessoal",
    duracao: "2 turnos",
    resistencia: "Nenhuma",
    descricao: "Cria uma barreira de força invisível. Concede +4 na CA contra ataques físicos. Além disso, absorve e anula completamente qualquer dano de Mísseis Mágicos direcionados a você. Se sua CA base já for 14 ou mais, o bônus não acumula, mas a imunidade a Mísseis Mágicos continua ativa."
  },
  "Escuridão": {
    circulo: "1º Círculo (Arcano)",
    alcance: "36m",
    duracao: "6 turnos",
    resistencia: "Nenhuma",
    descricao: "Cria uma esfera de 6 metros de raio de escuridão total e impenetrável. Fontes de luz normais não funcionam em seu interior."
  },
  "Identificação": {
    circulo: "1º Círculo (Arcano)",
    alcance: "Toque",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "Para utilizar esta magia, o mago deve preparar-se durante 8h seguidas em um aposento fechado, livre de distrações e sem envolver-se em atividades outras que alimentar-se.\n\nPassado esse período, ele será capaz de identificar 2d6 + 1/nível itens mágicos, descobrindo suas propriedades, bônus, palavras mágicas, etc., com uma chance de 5%/nível. Itens amaldiçoados ou caóticos são identificados como outros itens mágicos quaisquer, mantendo suas verdadeiras naturezas em segredo."
  },
  "Luz": {
    circulo: "1º Círculo (Arcano)",
    alcance: "36m",
    duracao: "12 turnos",
    resistencia: "JPD anula (se conjurada nos olhos)",
    descricao: "Cria uma esfera de luz brilhante de 6 metros de raio. Pode ser lançada em um objeto ou criatura. Se lançada contra os olhos de um inimigo que falhe na JPD, ele fica cego pela duração da magia."
  },
  "Mísseis Mágicos": {
    circulo: "1º Círculo (Arcano)",
    alcance: "45m",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "Cria um projétil de energia mística que atinge infalivelmente o alvo escolhido (dano de 1d4+1). Você cria 1 míssil a cada 3 níveis de conjurador (máximo de 5 mísseis no 13º nível). Mísseis adicionais podem ser disparados contra alvos diferentes a até 18m de distância."
  },
  "Patas de Aranha": {
    circulo: "1º Círculo (Arcano)",
    alcance: "Toque",
    duracao: "3 turnos + 1 turno/nível",
    resistencia: "Nenhuma",
    descricao: "Permite à criatura tocada caminhar e escalar paredes, tetos e superfícies verticais com as mãos e pés livres, como se fosse uma aranha."
  },
  "Trancar": {
    circulo: "1º Círculo (Arcano)",
    alcance: "Toque",
    duracao: "Permanente",
    resistencia: "Nenhuma",
    descricao: "Tranca magneticamente e de forma permanente uma porta, portão ou baú. Pode ser aberta normalmente apenas por meio da magia Abrir ou se for dissipada."
  },
  "Ventriloquismo": {
    circulo: "1º Círculo (Arcano)",
    alcance: "18m",
    duracao: "2 turnos",
    resistencia: "Nenhuma",
    descricao: "Faz com que a voz do conjurador pareça emanar de outro local, objeto ou criatura dentro do alcance."
  },

  // 2º Círculo Arcano
  "Cegueira": {
    circulo: "2º Círculo (Arcano)",
    alcance: "12m",
    duracao: "Permanente",
    resistencia: "JPC anula",
    descricao: "Ao utilizar essa magia em qualquer alvo em um raio de 12m, a vítima deve imediatamente fazer um teste de JPC. Falha a deixará cega permanentemente. Os modificadores de combate para a vítima e para inimigos se aplicam normalmente."
  },
  "Detectar Invisibilidade": {
    circulo: "2º Círculo (Arcano)",
    alcance: "18m",
    duracao: "5 turnos",
    resistencia: "Nenhuma",
    descricao: "Permite ver claramente criaturas e objetos invisíveis, escondidos, camuflados ou mesmo no plano etéreo."
  },
  "Flecha Ácida": {
    circulo: "2º Círculo (Arcano)",
    alcance: "36m",
    duracao: "Especial",
    resistencia: "Nenhuma",
    descricao: "Cria uma flecha mágica de ácido que exige uma jogada de ataque à distância. Causa 2d4 de dano de ácido imediatamente e continua causando dano nas rodadas seguintes dependendo do nível."
  },
  "Invisibilidade": {
    circulo: "2º Círculo (Arcano)",
    alcance: "Toque",
    duracao: "Permanente até ser quebrada",
    resistencia: "Nenhuma",
    descricao: "Torna a criatura tocada invisível, incluindo suas roupas e pertences. O efeito acaba se o alvo realizar qualquer ataque ou conjurar uma magia."
  },
  "Pedra Mágica": {
    circulo: "2º Círculo (Arcano)",
    alcance: "Especial",
    duracao: "1 turno/nível",
    resistencia: "Nenhuma",
    descricao: "Utilizando uma gema de valor mínimo de 500po, o mago pode armazenar uma magia de até 4º círculo na pedra para um uso posterior.\n\nOutras pessoas, incluindo não-magos, também podem utilizá-la; de qualquer forma, para efeitos de duração, dano e etc., conta-se o nível do mago no momento da realização da magia."
  },
  "Queda Suave": {
    circulo: "2º Círculo (Arcano)",
    alcance: "9m",
    duracao: "1 rodada",
    resistencia: "Nenhuma",
    descricao: "Reduz drasticamente a velocidade de queda livre de criaturas ou objetos na área de efeito, eliminando qualquer dano de queda."
  },
  "Teia": {
    circulo: "2º Círculo (Arcano)",
    alcance: "9m",
    duracao: "2 turnos",
    resistencia: "JPF anula/reduz",
    descricao: "Cria uma teia densa e pegajosa que prende criaturas numa área de 6m cúbicos. Para escapar, exige-se testes de força física ou queimar as teias."
  },

  // 3º Círculo Arcano
  "Bola de Fogo": {
    circulo: "3º Círculo (Arcano)",
    alcance: "45m",
    duracao: "Instantânea",
    resistencia: "JPD reduz metade",
    descricao: "Gera uma explosão esférica de fogo com raio de 6 metros, causando 1d6 pontos de dano por nível de conjurador a todos os alvos na área de efeito."
  },
  "Dissipar Magia": {
    circulo: "3º Círculo (Arcano)",
    alcance: "36m",
    duracao: "Instantânea/Especial",
    resistencia: "Nenhuma",
    descricao: "Anula magias e efeitos mágicos ativos na área ou em alvos focados. Não desfaz o efeito de itens mágicos permanentemente, apenas suprime temporariamente."
  },
  "Forma Ectoplásmica": {
    circulo: "3º Círculo (Arcano)",
    alcance: "Pessoal",
    duracao: "3 rodadas/nível",
    resistencia: "Nenhuma",
    descricao: "O mago torna-se insubstancial com todo o seu equipamento. Ele passa a ser imune a ataques normais, podendo ser afetado apenas por magias, ataques especiais, armas mágicas e criaturas que possam afetar aqueles atingidos somente por armas mágicas.\n\n• Mortos-vivos de qualquer tipo vão ignorar uma criatura na Forma Ectoplásmica, acreditando que seja uma aparição ou espectro (um lich ou morto-vivo especial tem direito a JP com -4 para reconhecer a magia).\n• O mago pode passar através de pequenas rachaduras na parede, buracos ou frestas de portas.\n• O mago não consegue voar (a não ser que utilize outras magias) e nenhuma forma de ataque é permitida contra o plano material, exceto contra criaturas no Plano Etéreo.\n• Dissipar Magia com sucesso ou uma palavra de comando força-o a voltar à sua forma normal."
  },
  "Relâmpago": {
    circulo: "3º Círculo (Arcano)",
    alcance: "45m",
    duracao: "Instantânea",
    resistencia: "JPD reduz metade",
    descricao: "Gera uma descarga elétrica linear de 1,5m de largura por 18m de comprimento, causando 1d6 pontos de dano de eletricidade por nível de conjurador a tudo em seu caminho. Pode rebater em superfícies sólidas."
  },
  "Voo": {
    circulo: "3º Círculo (Arcano)",
    alcance: "Toque",
    duracao: "1 turno/nível + 1d6 turnos",
    resistencia: "Nenhuma",
    descricao: "Permite ao alvo voar com velocidade de movimento 12. Ele pode subir, descer e pairar no ar livremente."
  },

  // 4º Círculo Arcano
  "Armadura Elétrica": {
    circulo: "4º Círculo (Arcano)",
    alcance: "Toque",
    duracao: "1d4 rodadas/nível",
    resistencia: "Nenhuma (JPC atacante reduz)",
    descricao: "Ao tocar em uma armadura de metal, o mago deixa um encantamento. Toda vez que o usuário da armadura for atacado e sofrer dano, o atacante sofre 1d6 pontos de dano elétrico para cada 2 níveis do mago, podendo reduzir à metade caso passe em um teste de JPC."
  },

  // 5º Círculo Arcano
  "Carne para Gelo": {
    circulo: "5º Círculo (Arcano)",
    alcance: "Toque",
    duracao: "3 turnos/nível",
    resistencia: "JPS anula transformação",
    descricao: "Tocando a vítima e recitando as palavras mágicas, o conjurador faz com que ela lentamente se transforme em gelo; semelhante a um processo de petrificação, resultando em uma estátua de gelo.\n\nUm teste de JPS pode impedir a transformação, mas mesmo que a vítima seja bem sucedida, ela ainda sofrerá 4d8 pontos de dano por frio."
  },
  "Cone Glacial": {
    circulo: "5º Círculo (Arcano)",
    alcance: "Cone (1,5m comp. e 30cm diâm./nível)",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "Produz uma área de frio extremo que parte da mão do mago e se prolonga para a frente num cone de 1,5 metro de comprimento e 30 centímetros de diâmetro por nível do mago.\n\nO cone absorve calor e causa 1d4+1 pontos de dano por nível (ex: um mago de 10º nível evocaria um cone de 3m de diâmetro e 15m de comprimento, provocando 10d4+10 pontos de dano)."
  },
  "Muralha de Energia": {
    circulo: "5º Círculo (Arcano)",
    alcance: "30m",
    duracao: "1 turno + 1 rodada/nível",
    resistencia: "Nenhuma",
    descricao: "Cria uma barreira de força invisível no local desejado dentro do alcance. A parede de Força não pode se mover e é totalmente imune à maioria das magias, incluindo Dissipar Magia (Desintegração, Bastão de Cancelamento ou Esfera da Aniquilação a destroem).\n\n• Não é afetada por golpes, disparos, frio, calor, eletricidade, etc.\n• Magias e Sopro-de-Dragão são incapazes de ultrapassá-la em qualquer direção (Porta Dimensional e Teleporte podem atravessar).\n• Pode ter formato de parede plana, esfera (raio até 30cm/nível) ou hemisfério aberto (50cm/nível). Deve ser contínua e pode ser encerrada com um comando."
  },
  "Pele Rochosa": {
    circulo: "5º Círculo (Arcano)",
    alcance: "Toque",
    duracao: "1 turno/nível",
    resistencia: "Nenhuma",
    descricao: "Confere ao receptor uma imunidade quase total a ataques físicos (armas normais ou mágicas, garras, dentes, projéteis, etc.).\n\n• Ataques mágicos como Bola de Fogo, Mísseis Mágicos e Relâmpago funcionam normalmente.\n• Bloqueia 1d4 ataques + 1 ataque para cada dois níveis de experiência do mago.\n• Cada ataque sofrido consome 1 ponto da proteção, tendo acertado ou não."
  },
  "Pequeno Globo da Invulnerabilidade": {
    circulo: "5º Círculo (Arcano)",
    alcance: "0 (Pessoal)",
    duracao: "1 rodada/nível",
    resistencia: "Nenhuma",
    descricao: "Cria um globo mágico, imóvel e brilhante ao redor do mago, impedindo que quaisquer magias dos três primeiros níveis (1º ao 3º) o afetem, excluindo-o da área de efeito (inclui efeitos de itens mágicos e habilidades inatas).\n\n• Qualquer magia pode ser lançada de dentro para fora sem ser afetada.\n• Magias do 4º nível em diante não são bloqueadas pelo Globo.\n• Pode ser encerrado por uma magia Dissipar Magia com sucesso."
  },

  // 6º Círculo Arcano
  "Chuva de Adagas de Gelo": {
    circulo: "6º Círculo (Arcano)",
    alcance: "Círculo de 15m",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "O mago invoca a magia e estabelece o ponto central. Por uma rodada, 3d4 adagas afiadas de gelo cairão do céu, causando 4d8 pontos de dano a todos que estiverem dentro do raio de 15m, incluindo aliados."
  },

  // 9º Círculo Arcano
  "Cancelamento Total": {
    circulo: "9º Círculo (Arcano)",
    alcance: "30m",
    duracao: "Instantânea",
    resistencia: "JPS anula",
    descricao: "Emitindo um grito e fazendo os gestos da magia, o mago afeta uma área de aproximadamente 18m com um efeito superior ao de um Bastão de Cancelamento.\n\n• Cada criatura na área de efeito deve fazer um teste de JPS para cada item mágico que carregar. Uma falha significa que o item foi desintegrado e não pode mais ser recuperado.\n• Personagens épicos recebem +4 no teste de resistência para cada nível épico.\n• Artefatos, obsidiana, jade e itens abençoados diretamente por deuses não são afetados."
  },

  // Magias de Necromante (Círculos 2 a 6)
  "Apodrecer Sangue": {
    circulo: "Necromante (2º Círculo)",
    alcance: "9m + 3m/nível",
    duracao: "1d4 rodadas/nível",
    resistencia: "JPC anula",
    descricao: "Com um ataque de toque bem sucedido, o necromante amaldiçoa o sangue da vítima. Qualquer ataque de corte ou perfuração causará 4 pontos de dano extra durante a duração da magia."
  },
  "Criar Mortos-Vivos": {
    circulo: "Necromante (2º Círculo)",
    alcance: "Toque",
    duracao: "Permanente",
    resistencia: "Nenhuma",
    descricao: "Permite reanimar e controlar mortos-vivos de acordo com o nível do Necromante:\n\n• 3º Nível: Super Zumbi (Mov 6, PV 32, CA 14, JP 7, 1x Soco +6 (1d8+3), Morto-Vivo)\n• 6º Nível: Super Esqueleto (Mov 9, PV 50, CA 20, JP 10, 2x Espada Curta +9 (2d6+4), Morto-Vivo, Silencioso, Corpo de Osso)\n• 9º Nível: Super Ghoul (Mov 9, PV 43, CA 16, JP 12, 2x Garras +9 (1d6+Paralisia), 1x Mordida +12 (1d12+Paralisia), Silencioso, Morto-Vivo. Paralisia: JPC difícil ou paralisado por 1d6 turnos)\n• 12º Nível: Super Fantasma (Mov 9, PV 74, CA 23, JP 14, 1x Toque +9 (2d6+Dreno), Silencioso, Morto-Vivo. Imune a armas não mágicas. Dreno: retira 1 ponto de CON permanente. Regeneração: regenera a mesma quantia de dano no toque)."
  },
  "Mão Espectral": {
    circulo: "Necromante (2º Círculo)",
    alcance: "N/A",
    duracao: "1 turno/nível",
    resistencia: "Nenhuma",
    descricao: "Cria uma mão espectral verde que flutua com movimento 12. Ela tem CA 24 e qualquer dano causado irá dissipá-la, causando 2d6 pontos de dano ao Necromante. Qualquer habilidade ou magia que exija toque pode ser realizada através da mão (à distância) com a condição [F]."
  },
  "Donzela de Ferro": {
    circulo: "Necromante (3º Círculo)",
    alcance: "3m + 1m/nível",
    duracao: "1 rodada/nível",
    resistencia: "JPC reduz à metade",
    descricao: "Cria uma onda aglomerada de ossos fantasmagóricos em linha reta a partir do necromante. Atravessa todas as criaturas até o limite máximo do alcance (interrompida por matéria inanimada resistente de mais de 30cm de espessura).\n\nAlvos sofrem 1d6 de dano a cada 2 níveis (máx 7d6), 1d10 de dano em Constituição e condição [MD] em qualquer manobra que exija teste pela duração da magia (1 rodada/nível). JPC reduz dano à metade e anula o restante dos efeitos."
  },
  "Morte Podre": {
    circulo: "Necromante (3º Círculo)",
    alcance: "Toque",
    duracao: "3 turnos",
    resistencia: "JPC anula",
    descricao: "Depois de um toque bem-sucedido, o necromante amaldiçoa a vítima, que começa a apodrecer por dentro. Recebe 1d10 de dano em todos os atributos físicos (mínimo de 3) e sofre 1d6 de dano por rodada durante 5 rodadas. Pode ser curado com Remover Doenças ou expira após 30 minutos."
  },
  "Morte podre": {
    circulo: "Necromante (3º Círculo)",
    alcance: "Toque",
    duracao: "3 turnos",
    resistencia: "JPC anula",
    descricao: "Depois de um toque bem-sucedido, o necromante amaldiçoa a vítima, que começa a apodrecer por dentro. Recebe 1d10 de dano em todos os atributos físicos (mínimo de 3) e sofre 1d6 de dano por rodada durante 5 rodadas. Pode ser curado com Remover Doenças ou expira após 30 minutos."
  },
  "Parar Cura": {
    circulo: "Necromante (3º Círculo)",
    alcance: "3m + 3m/nível",
    duracao: "1 turno/nível",
    resistencia: "JPC anula",
    descricao: "Faz com que o alvo seja incapaz de curar-se por qualquer meio (poções, itens mágicos ou magias de cura). A magia Remover Maldição encerra o efeito antes do fim da duração."
  },
  "Drenar Temporário": {
    circulo: "Necromante (4º Círculo)",
    alcance: "3m + 1m/nível",
    duracao: "3 turnos",
    resistencia: "JPS anula",
    descricao: "Realizando um ataque de toque no alvo, o Necromante é capaz de drenar 1d4 níveis de experiência do alvo. Isso altera condições diversas como PVs, JP, Base de Ataque, etc., que são alteradas imediatamente. Uma criatura que atinja o nível 0 através dessa magia morre automaticamente."
  },
  "Golem de Carne": {
    circulo: "Necromante (4º Círculo)",
    alcance: "Toque",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "Recria o Golem de Carne que foi aprimorado pelo grande Mago Rupert. Exige ritual de uma noite inteira, um coração que sempre bate e partes de cadáveres.\n\n• Atributos: Mov 9, PV 90, CA 18, JP 14, 2x Pancadas +12 (2d12)\n• Imunidades: Imune a armas não mágicas, ataques de alvos vivos (gases, venenos, magias mentais/ilusões).\n• Cura Elétrica: Cura 1 PV por cada dado de dano elétrico sofrido.\n• Fraqueza (Fogo e Frio): Ataques de fogo e frio deixam o golem lerdo por 2d6 rodadas (Mov/2, -2 jogadas e CA)."
  },
  "Invocar Demônio": {
    circulo: "Necromante (5º Círculo)",
    alcance: "9m",
    duracao: "Permanente",
    resistencia: "Nenhuma",
    descricao: "Invoca uma criatura dos planos inferiores para servir ao mago. Se destruída, deve-se aguardar 3 meses para invocar de novo.\n\n• Atributos: Mov 9/12V, PV 65, CA 18, JP 12, 2x Garras +12 (2d10), 1x Jato de Fogo (8d8)\n• Imunidades: Armas não mágicas e fogo.\n• Jato de Fogo: Linha de 12m, 8x/dia. JPD reduz à metade.\n• Fraqueza: -4 nas JPs contra expulsar mortos-vivos dos clérigos."
  },
  "Magia da Morte": {
    circulo: "Necromante (5º Círculo)",
    alcance: "3m + 1m/nível",
    duracao: "Instantânea",
    resistencia: "JPC (ver texto)",
    descricao: "Cria um círculo de morte e destruição de 9m de raio. Criaturas de até 4DV morrem imediatamente. Criaturas de 5 a 6DV devem passar em JPC ou morrem. Criaturas de 7DV+ sofrem 1d8 de dano por cada 2 níveis do Necromante (JPC reduz à metade)."
  },
  "Dedo da Morte": {
    circulo: "Necromante (6º Círculo)",
    alcance: "Toque",
    duracao: "Instantânea",
    resistencia: "JPC (ver texto)",
    descricao: "O mago recita a fórmula do Dedo da Morte e aponta o dedo indicador para a vítima. Suga a energia vital da vítima (não pode ser revivida/ressuscitada normalmente).\n\n• Se falhar na JPC, morre instantaneamente.\n• Se passar, sofre 2d8+1 de dano.\n• Humanos mortos pela falha da JP começam a mudar de forma e, após 3 dias, podem ser animados como zumbis vudu permanentes sob controle do mago (ritual custa 1.000po + 500po por zumbi)."
  },
  "Entumbar": {
    circulo: "Necromante (6º Círculo)",
    alcance: "9m + 3m/nível",
    duracao: "Permanente",
    resistencia: "JPS anula",
    descricao: "A terra engole o alvo, prendendo-o em uma câmara subterrânea que impede movimento (pode emitir sons). Vítimas morrem asfixiadas com o tempo se não libertadas.\n\nO necromante também pode usar em si mesmo como proteção (exige magia de terra forte ou Dissipar Magia de nível alto para tirá-lo). Conexões com mortos-vivos e golens são quebradas durante o entumbamento."
  },
  "Golem de Sangue": {
    circulo: "Necromante (6º Círculo)",
    alcance: "Toque",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "Cria o mais poderoso golem disponível para Necromantes (apenas 1 ativo por vez). Exige ter aprendido Golem de Carne.\n\n• Atributos: Mov 12, PV 124, CA 22, JP 16, 2x Pancadas +14 (2d12+Dreno)\n• Imunidades: Armas não mágicas, gases, venenos, magias mentais.\n• Regeneração: 2 PV por rodada.\n• Dreno: Regenera todo dano de combate causado.\n• Resistência à Magia: 1-5 em 1d6 de ignorar completamente qualquer magia que não afete área.\n• Quatro Braços: Sacrifica 40 PV temporários para ter 4 ataques (braços extras sem Dreno).\n• Vínculo Espiritual: O conjurador pode sugar até 20% do PV do golem. Todo dano sofrido é primeiro tirado desses 20%. Se o golem morrer no processo, o conjurador sofre 9d8 de dano e atordoamento por 2d6 rodadas (JPS reduz metade)."
  },

  // Magias Divinas (Clérigo)
  "Bênção": {
    circulo: "1º Círculo (Divino)",
    alcance: "9m",
    duracao: "1 turno/nível",
    resistencia: "Nenhuma",
    descricao: "Através de uma oração, o sacerdote invoca o poder de sua divindade e gera uma aura de 9m ao seu redor. Aliados que estejam dentro dessa área recebem +1 nas jogadas de ataque e +1 em todos os testes de resistência (JPs)."
  },
  "Aumento de Força": {
    circulo: "2º Círculo (Divino)",
    alcance: "Toque",
    duracao: "1 hora/nível",
    resistencia: "Nenhuma",
    descricao: "O sacerdote toca no alvo (que pode ser ele mesmo) enquanto faz uma prece. Quando termina, o personagem tocado recebe 1d4+1 pontos de bônus em Força durante 1 hora por nível de conjurador."
  },
  "Aumento de Destreza": {
    circulo: "2º Círculo (Divino)",
    alcance: "Toque",
    duracao: "1 hora/nível",
    resistencia: "Nenhuma",
    descricao: "O sacerdote toca no alvo (que pode ser ele mesmo) enquanto faz uma prece. Quando termina, o personagem tocado recebe 1d4+1 pontos de bônus em Destreza durante 1 hora por nível de conjurador."
  },
  "Agredir": {
    circulo: "3º Círculo (Divino)",
    alcance: "Toque",
    duracao: "1 turno/nível",
    resistencia: "Nenhuma",
    descricao: "Tocando uma arma (incluindo arcos e armas de arremesso), o clérigo é capaz de encantá-la, fazendo-a causar +1d6 pontos de dano extra em cada ataque enquanto a magia durar."
  },
  "Augúrio": {
    circulo: "3º Círculo (Divino)",
    alcance: "Pessoal",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "O clérigo pode adivinhar se uma ação beneficiará ou prejudicará o grupo em um futuro próximo (até 30 minutos).\n\n• A chance de resposta significativa é de 70% + 1% por nível do clérigo (71% no 1º nível, etc.).\n• O Mestre indica o resultado: 'benefício', 'desgraça', ou um enigma/rima.\n• Consultas sucessivas sobre o mesmo assunto em curto prazo retornam sempre a mesma resposta."
  },
  "Coluna de Chamas de Agmi": {
    circulo: "5º Círculo (Divino)",
    alcance: "9m + 1m/nível",
    duracao: "Instantânea",
    resistencia: "JPD reduz à metade",
    descricao: "Uma coluna vertical de fogo sagrado (4,5m de raio por 9m de altura) irrompe no local designado pelo clérigo.\n\nQualquer criatura dentro da área de efeito deve fazer um teste de JPD: fracasso causa 6d8 pontos de dano de fogo; sucesso reduz o dano à metade."
  },
  "Sementes de Fogo": {
    circulo: "6º Círculo (Divino)",
    alcance: "40m",
    duracao: "1 turno/nível (Ver texto)",
    resistencia: "JPD",
    descricao: "Cria projéteis especiais ou bombas incendiárias a partir de sementes naturais:\n\n• Projétil (Bolotas): Transforma até 4 bolotas de carvalho em projéteis de área atirados a até 40m. Exige jogada de ataque. Cada bolota estoura causando 2d8 de dano e queima materiais combustíveis em círculo de 3m (JPD metade na área; acerto direto sem JP).\n• Incendiárias (Azevinho): Transforma até 8 bagas de azevinho em bombas acionadas por palavra de comando a até 40m de distância. Explodem causando 1d8 de dano num raio de 2m (JPD metade).\n• As sementes perdem o poder após 1 turno por nível do clérigo."
  },
  "Chuva de Pedras de Rasmum": {
    circulo: "7º Círculo (Divino)",
    alcance: "9m + 3m/nível",
    duracao: "Especial",
    resistencia: "JPD (ver texto)",
    descricao: "Em um raio de 12m do ponto escolhido, pedras gigantes caem do céu causando 15d8 pontos de dano (JPD reduz à metade).\n\nAo quebrarem no chão, rochas menores se espalham na mesma área, causando 7d8 pontos de dano adicionais e deixando as vítimas atordoadas por 2d4 rodadas. Um sucesso no teste de JPD reduz o segundo dano à metade e anula o atordoamento."
  }
};
