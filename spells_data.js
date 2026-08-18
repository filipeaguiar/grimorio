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
    duracao: "6 rodadas",
    resistencia: "Nenhuma",
    descricao: "Idêntica ao livro (drena energia vital com um ataque de toque), mas os pontos drenados podem ultrapassar o PV máximo do necromante. Esses pontos extras permanecem durante 6 rodadas."
  },

  // 1º Círculo Arcano
  "Abrir": {
    circulo: "1º Círculo (Arcano)",
    alcance: "18m",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "Esta magia abre portas trancadas, emperradas, barradas ou fechadas magicamente (como por Trancar ou Cerrar Portas). Ela também abre baús, caixas, cofres, grilhões e outros recipientes travados.\n\nSe conjurada contra uma porta fechada por Cerrar Portas, a magia Abrir cancela o efeito de fechamento mágico. Se utilizada em uma porta trancada por Trancar, Abrir destranca a passagem por 1 rodada inteira antes que o fecho magnético volte a selar-se. A magia não desarma armadilhas mecânicas ou mágicas associadas à fechadura, as quais são disparadas normalmente."
  },
  "Cerrar Portas": {
    circulo: "1º Círculo (Arcano)",
    alcance: "18m",
    duracao: "2d6 turnos",
    resistencia: "Nenhuma",
    descricao: "Esta magia mantém uma porta, portão, alçapão ou janela firmemente fechada e travada por meios místicos.\n\nCriaturas extra-planares ou magos de nível superior ao do conjurador podem forçar e abrir a passagem normalmente. A magia Abrir dissipa e anula imediatamente o efeito de Cerrar Portas."
  },
  "Disco Flutuante": {
    circulo: "1º Círculo (Arcano)",
    alcance: "2m",
    duracao: "6 turnos",
    resistencia: "Nenhuma",
    descricao: "Cria um plano circular horizontal côncavo e quase translúcido com 90 cm de diâmetro que flutua a 90 cm do chão e acompanha os movimentos do conjurador.\n\nO disco pode carregar até 250 kg de peso (ouro, tesouros, equipamentos ou companheiros feridos). Ele flutua suavemente sobre terrenos acidentados, escadas e buracos, mas não pode se afastar a mais de 2 metros do mago. Caso o conjurador se mova mais rápido que seu deslocamento normal ou se a duração expirar, o disco se dissipa lentamente, depositando a carga suavemente no chão."
  },
  "Escudo Arcano": {
    circulo: "1º Círculo (Arcano)",
    alcance: "Pessoal",
    duracao: "2 turnos",
    resistencia: "Nenhuma",
    descricao: "Cria uma barreira mágica invisível e protetora que envolve o conjurador. Concede um bônus de +4 na Classe de Armadura (CA) contra ataques físicos e projéteis normais.\n\nAlém disso, o Escudo Arcano absorve, anula e dissipa completamente qualquer dano de Mísseis Mágicos direcionados ao conjurador enquanto a magia estiver ativa. Se a CA base natural ou mágica do mago já for 14 ou superior, o bônus numérico não se acumula, mas a imunidade total a Mísseis Mágicos permanece plenamente ativa."
  },
  "Escuridão": {
    circulo: "1º Círculo (Arcano)",
    alcance: "36m",
    duracao: "6 turnos",
    resistencia: "Nenhuma",
    descricao: "Cria uma esfera impenetrável de escuridão total com 6 metros de raio a partir do ponto focal escolhido dentro do alcance.\n\nFontes de luz normais (como tochas, lanternas e fogueiras) não funcionam e não produzem qualquer claridade em seu interior. Criaturas que dependem de visão normal ou infravisão ficam completamente cegas dentro da área de efeito. A magia Luz lançada diretamente sobre a área anula mutuamente ambas as magias."
  },
  "Identificação": {
    circulo: "Mago 1 (1º Círculo Arcano)",
    alcance: "Toque",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "Para utilizar esta magia, o mago deve preparar-se durante 8h seguidas em um aposento fechado, livre de distrações e sem envolver-se em atividades outras que alimentar-se.\n\nPassado esse período, ele será capaz de identificar 2d6 + 1/nível itens mágicos, descobrindo suas propriedades, bônus, palavras mágicas, etc., com uma chance de 5%/nível. Itens amaldiçoados ou caóticos são identificados como outros itens mágicos quaisquer, mantendo assim suas verdadeiras naturezas em segredo."
  },
  "Luz": {
    circulo: "1º Círculo (Arcano)",
    alcance: "36m",
    duracao: "12 turnos",
    resistencia: "JPD anula (se conjurada nos olhos)",
    descricao: "Cria uma esfera de luz brilhante e límpida com 6 metros de raio. Pode ser lançada em um ponto fixo no espaço, em um objeto transportável (como uma moeda, cajado ou pedra) ou em uma criatura.\n\nSe for conjurada diretamente contra os olhos de um inimigo dentro do alcance, a vítima tem direito a um teste de JPD. Se falhar, ficará cega pela duração total da magia, sofrendo penalidade de -4 em jogadas de ataque e perda de bônus de Destreza na CA. Conjurada contra Escuridão, anula mutuamente o efeito."
  },
  "Mísseis Mágicos": {
    circulo: "1º Círculo (Arcano)",
    alcance: "45m",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "O mago estende a mão e dispara dardos teleguiados de pura energia arcana que atingem infalivelmente seus alvos, sem necessidade de jogada de ataque. Cada míssil causa 1d4+1 pontos de dano místico.\n\nO conjurador cria 1 míssil no 1º nível, e +1 míssil adicional a cada 3 níveis de experiência (2 mísseis no 4º nível, 3 no 7º, 4 no 10º, até o máximo de 5 mísseis no 13º nível). Múltiplos mísseis podem ser concentrados em um único alvo ou divididos entre vários alvos visíveis que estejam a até 18 metros de distância entre si."
  },
  "Patas de Aranha": {
    circulo: "1º Círculo (Arcano)",
    alcance: "Toque",
    duracao: "3 turnos + 1 turno/nível",
    resistencia: "Nenhuma",
    descricao: "Ao tocar uma criatura voluntária, o mago concede a habilidade de escalar paredes verticais, penhascos e até caminhar de cabeça para baixo em tetos lisos como se fosse uma aranha.\n\nO alvo deve estar com as mãos e pés livres para escalar com firmeza, mantendo metade do seu deslocamento padrão. Objetos pesados carregados podem exigir testes de equilíbrio a critério do Mestre."
  },
  "Trancar": {
    circulo: "1º Círculo (Arcano)",
    alcance: "Toque",
    duracao: "Permanente",
    resistencia: "Nenhuma",
    descricao: "Tranca mística e magneticamente uma porta, portão, baú, sarcófago ou passagem com fecho de forma permanente.\n\nA fechadura não pode ser aberta por arrombamento comum ou gazuas normais de ladrão. Ela só pode ser aberta através de uma magia Abrir (que libera a tranca por 1 rodada), por um Dissipar Magia bem-sucedido ou por criaturas com 3 ou mais Dados de Vida superiores ao nível do conjurador forçando a passagem."
  },
  "Ventriloquismo": {
    circulo: "1º Círculo (Arcano)",
    alcance: "18m",
    duracao: "2 turnos",
    resistencia: "Nenhuma",
    descricao: "Faz com que a voz do conjurador ou qualquer outro som vocal desejado pareça originar-se de outro ponto, objeto, estátua ou criatura dentro do alcance.\n\nOuvintes que desconfiarem do som e examinarem atentamente podem realizar um teste de Sabedoria/JPS para perceber a ilusão acústica."
  },

  // 2º Círculo Arcano
  "Cegueira": {
    circulo: "Mago 2 (2º Círculo Arcano)",
    alcance: "12m",
    duracao: "Permanente",
    resistencia: "JPC",
    descricao: "Ao utilizar essa magia em qualquer alvo em um raio de 12m, a vítima deve imediatamente fazer um teste de JPC. Falha a deixará cega permanentemente. Os modificadores de combate para a vítima e para inimigos se aplicam normalmente."
  },
  "Detectar Invisibilidade": {
    circulo: "2º Círculo (Arcano)",
    alcance: "18m",
    duracao: "5 turnos",
    resistencia: "Nenhuma",
    descricao: "Concede ao conjurador a visão límpida e precisa de tudo que esteja invisível, camuflado magicamente, escondido nas sombras ou existente no Plano Etéreo em um cone visual de 18 metros.\n\nCriaturas e objetos invisíveis aparecem com um contorno translúcido brilhante, permitindo que sejam atacados e alvejados sem penalidades de invisibilidade."
  },
  "Flecha Ácida": {
    circulo: "2º Círculo (Arcano)",
    alcance: "36m",
    duracao: "Especial (1 rodada + 1 rodada a cada 3 níveis)",
    resistencia: "Nenhuma",
    descricao: "Cria um projétil cintilante de ácido corrosivo concentrado que é disparado contra um alvo dentro do alcance. O conjurador realiza uma jogada de ataque à distância (com bônus de conjuração).\n\nAo acertar, causa 2d4 pontos de dano de ácido imediatamente e continua causando mais 2d4 pontos de dano a cada rodada subsequente. A duração do ácido dura 1 rodada no 3º nível e aumenta em +1 rodada a cada 3 níveis adicionais do conjurador (2 rodadas no 6º nível, 3 no 9º, etc.)."
  },
  "Invisibilidade": {
    circulo: "2º Círculo (Arcano)",
    alcance: "Toque",
    duracao: "Permanente até ser quebrada",
    resistencia: "Nenhuma",
    descricao: "Torna a criatura tocada completamente invisível aos olhos normais e infravisão, incluindo todas as suas vestimentas, armas e itens que estiver carregando.\n\nA invisibilidade permanece ativa até que seja dissipada ou até que a criatura realize uma ação hostil, execute um ataque ou conjure qualquer magia, momento no qual a ilusão se desfaz instantaneamente."
  },
  "Pedra Mágica": {
    circulo: "Mago 2 (2º Círculo Arcano)",
    alcance: "Especial",
    duracao: "1 turno/nível",
    resistencia: "Nenhuma",
    descricao: "Utilizando uma gema de valor mínimo de 500po, o mago pode armazenar uma magia de até 4º círculo na pedra para um uso posterior. Outras pessoas, incluindo não-magos, também podem utilizá-la; de qualquer forma, para efeitos de duração, dano e etc., conta-se o nível do mago no momento da realização da magia."
  },
  "Queda Suave": {
    circulo: "2º Círculo (Arcano)",
    alcance: "9m",
    duracao: "1 rodada",
    resistencia: "Nenhuma",
    descricao: "Reduz instantaneamente a velocidade terminal de queda de até 10 criaturas ou objetos que estejam despencando no ar dentro do alcance para apenas 30 centímetros por segundo.\n\nCriaturas sob o efeito de Queda Suave pousam suavemente em pé e não sofrem nenhum dano de queda, independentemente da altura de onde tenham caído."
  },
  "Teia": {
    circulo: "2º Círculo (Arcano)",
    alcance: "9m",
    duracao: "2 turnos",
    resistencia: "JPF anula/reduz",
    descricao: "Dispara e expande uma massa densa de teias pegajosas e extremamente resistentes que preenche um cubo de até 6 metros de lado entre dois suportes sólidos.\n\nQualquer criatura na área no momento da conjuração deve realizar uma JPF: se falhar, fica completamente presa e incapaz de se mover ou atacar; se passar, consegue se mover a 1 metro por rodada. As teias são inflamáveis: atear fogo causa 2d4 pontos de dano a quem estiver preso nelas e queima a teia em 1 rodada."
  },

  // 3º Círculo Arcano
  "Bola de Fogo": {
    circulo: "3º Círculo (Arcano)",
    alcance: "45m",
    duracao: "Instantânea",
    resistencia: "JPD reduz metade",
    descricao: "Um feixe incandescente parte do dedo indicador do mago e explode em uma esfera estrondosa de fogo com 6 metros de raio no ponto de impacto escolhido dentro do alcance.\n\nTodas as criaturas na área sofrem 1d6 pontos de dano de fogo por nível do conjurador (até o máximo de 10d6 no 10º nível). Uma jogada de proteção de Destreza (JPD) bem-sucedida reduz o dano sofrido à metade. A explosão queima combustíveis leves (papel, pergaminho, madeira fina) e derrete metais macios."
  },
  "Dissipar Magia": {
    circulo: "3º Círculo (Arcano)",
    alcance: "36m",
    duracao: "Instantânea / Permanente",
    resistencia: "Nenhuma",
    descricao: "Anula, encerra e dissipa magias ativas, encantamentos, maldições temporárias e efeitos arcanos ou divinos em uma criatura, objeto ou em um cubo de 6 metros de lado.\n\nEfeitos mágicos permanentes em itens mágicos não são destruídos, mas são suprimidos e tornados inertes por 1d6 turnos. Magias conjuradas por magos de nível superior ao do dissipador podem exigir teste de conjurador para serem anuladas com sucesso."
  },
  "Forma Ectoplásmica": {
    circulo: "Mago 3 (3º Círculo Arcano)",
    alcance: "Pessoal",
    duracao: "3 rodadas/nível",
    resistencia: "Nenhuma",
    descricao: "Quando utiliza essa magia, o mago torna-se insubstancial, com todo o seu equipamento. Ele passa a ser imune a ataques normais, podendo ser afetado apenas por magias, ataques especiais, armas mágicas, e criaturas que possam afetar aqueles que são atingidos somente por armas mágicas.\n\nMortos-vivos de qualquer tipo vão ignorar uma criatura na Forma Ectoplásmica, acreditando que ele seja uma aparição ou um espectro, embora um lich ou morto-vivo especial tenha direito a um teste de resistência com uma penalidade de -4 para reconhecer a magia.\n\nO mago recebe a habilidade de passar através de pequenas rachaduras na parede, buracos ou frestas de portas enquanto a magia durar. Entretanto, o mago não consegue voar, a não ser que utilize outras magias que permitam fazê-lo. Nenhuma forma de ataque é permitida, exceto contra criaturas que existam no Plano Etéreo, que podem ser atacadas normalmente pelo mago, bem como atacá-lo. Dissipar Magia, utilizado com sucesso, força-o a voltar à sua forma normal. O mago também pode voltar à sua forma normal com uma única palavra."
  },
  "Relâmpago": {
    circulo: "3º Círculo (Arcano)",
    alcance: "45m",
    duracao: "Instantânea",
    resistencia: "JPD reduz metade",
    descricao: "Gera uma poderosa descarga elétrica retilínea de 1,5 metro de largura por 18 metros de comprimento que irrompe a partir do conjurador ou do ponto de alcance desejado.\n\nTodas as criaturas atravessadas pela linha sofrem 1d6 pontos de dano elétrico por nível de conjurador (máximo de 10d6). Um teste de JPD bem-sucedido reduz o dano à metade. Se o relâmpago atingir uma parede ou barreira sólida resistente antes de completar seus 18m de extensão, ele ricocheteia e dobra de volta na direção do conjurador."
  },
  "Voo": {
    circulo: "3º Círculo (Arcano)",
    alcance: "Toque",
    duracao: "1 turno/nível + 1d6 turnos",
    resistencia: "Nenhuma",
    descricao: "Concede à criatura tocada o poder de voar pelos céus com velocidade de deslocamento 12.\n\nO alvo pode subir, descer, planar e pairar imóvel no ar livremente sem esforço, podendo realizar ataques e conjurar magias em pleno ar. Quando a duração da magia está prestes a expirar, o alvo desce flutuando suavemente até o solo sem sofrer dano."
  },

  // 4º Círculo Arcano
  "Armadura Elétrica": {
    circulo: "Mago 4 (4º Círculo Arcano)",
    alcance: "Toque",
    duracao: "1d4 rodadas/nível",
    resistencia: "Nenhuma (JPC metade no atacante)",
    descricao: "Ao tocar em uma armadura de metal, o mago deixa um encantamento. Toda vez que o usuário da armadura for atacado e sofrer dano, o atacante sofre 1d6 pontos de dano elétrico para cada 2 níveis do mago, podendo reduzir à metade caso passe em um teste de JPC."
  },

  // 5º Círculo Arcano
  "Carne para Gelo": {
    circulo: "Mago 5 (5º Círculo Arcano)",
    alcance: "Toque",
    duracao: "3 turnos/nível",
    resistencia: "JPS",
    descricao: "Tocando a vítima e recitando as palavras mágicas, o necromante/mago faz com que ela lentamente se transforme em gelo; semelhante a um processo de petrificação, mas o resultado final é uma estátua de gelo. Um teste de JPS pode impedir que a catástrofe aconteça, mas mesmo que a vítima seja bem sucedida, ela ainda sofrerá 4d8 pontos de dano por frio."
  },
  "Cone Glacial": {
    circulo: "Mago 5 (5º Círculo Arcano)",
    alcance: "Ler Texto",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "Essa magia produz uma área de frio extremo que parte da mão do mago e se prolonga para a frente num cone de 1,5 metro de comprimento e 30 centímetros de diâmetro, por nível do mago. O cone absorve calor e causa 1d4+1 pontos de dano por nível. Por exemplo: um mago de 10º nível evocaria um cone com 3 metros de diâmetro e 15 metros de comprimento, provocando 10d4+10 pontos de dano."
  },
  "Muralha de Energia": {
    circulo: "Mago 5 (5º Círculo Arcano)",
    alcance: "30m",
    duracao: "1 turno + 1 rodada/nível",
    resistencia: "Nenhuma",
    descricao: "Muralha de Energia cria uma barreira invisível no local desejado pelo mago, dentro do alcance. A parede de Força não pode se mover e é totalmente imune à maioria das magias, incluindo Dissipar Magia, mas uma Desintegração vai destruí-la imediatamente, bem como um Bastão de Cancelamento ou uma esfera da aniquilação.\n\nAlém disso, a parede de Força não é afetada por golpes, disparos, frio, calor, eletricidade, etc. Magias e Sopro-de-Dragão são incapazes de ultrapassá-la em qualquer direção, mas Porta Dimensional, Teleportação e outros efeitos semelhantes podem varar a barreira.\n\nO mago pode, caso queira, fazer a parede de forma esférica com raio de até 30 centímetros por nível ou com uma forma hemisférica aberta de 50 centímetros por nível. A parede de Força deve ser contínua. Se alguma criatura ou objeto interromper a superfície da parede no momento da execução, a magia falhará. O mago pode encerrar o efeito com um comando."
  },
  "Pele Rochosa": {
    circulo: "Mago 5 (5º Círculo Arcano)",
    alcance: "Toque",
    duracao: "1 turno/nível",
    resistencia: "Nenhuma",
    descricao: "Quando essa magia é utilizada, ela confere ao receptor uma imunidade quase total a ataques físicos, sejam armas, garras, dentes, projéteis — tanto faz. Mesmo uma Espada Cortante não pode afetar uma criatura que esteja sob efeito dessa magia, nem uma pedra lançada por um gigante, nem uma mordida de cobra, etc.\n\nEntretanto, ataques mágicos como Bola de Fogo, Mísseis Mágicos, Relâmpago e similares, funcionam normalmente sobre o receptor.\n\nEssa magia bloqueia 1d4 ataques, mais um ataque para cada dois níveis de experiência que o mago que lançou a magia possua. Por ataque entende-se qualquer ataque sofrido pela criatura, não importando se a acertou, nem se foi físico ou mágico. Por exemplo, Pele Rochosa lançado por um mago de 9º nível protegeria o receptor de 1d4 + 4 ataques. Um grifo que atacasse o receptor reduziria a proteção em três a cada rodada. Quatro mísseis criados pela magia Mísseis Mágicos cancelariam quatro proteções concedidas pela Pele Rochosa, além de causarem dano normalmente."
  },
  "Pequeno Globo da Invulnerabilidade": {
    circulo: "Mago 5 (5º Círculo Arcano)",
    alcance: "0 (Pessoal)",
    duracao: "1 rodada/nível",
    resistencia: "Nenhuma",
    descricao: "Essa magia cria um globo mágico, imóvel e brilhante, ao redor do mago, impedindo que quaisquer magias dos três primeiros níveis o afetem, e o exclui da área de efeito. Isto também afeta efeitos gerados por itens mágicos e habilidades inatas.\n\nEntretanto, qualquer magia pode ser lançada de dentro para fora do Pequeno Globo de Invulnerabilidade, sem afetá-lo. Magias do 4º nível em diante não são afetadas pelo Globo, que pode ser derrubado por uma Dissipar Magia utilizada com sucesso. O mago pode entrar e sair do Pequeno Globo de Invulnerabilidade sem problema algum.\n\nEle não cancela magias, a não ser que estas sejam lançadas através dele, de fora para dentro. Se um mago utiliza Reflexos do lado externo, e então entra nele, as imagens desaparecerão, reaparecendo apenas se o mago sair do Pequeno Globo de Invulnerabilidade. Da mesma maneira, um mago que estivesse na área de Luz ainda receberia iluminação suficiente para poder ver o exterior, mesmo que o interior do Pequeno Globo de Invulnerabilidade ficasse escuro: ele não anula a magia, apenas reduz a sua área."
  },

  // 6º Círculo Arcano
  "Chuva de Adagas de Gelo": {
    circulo: "Mago 6 (6º Círculo Arcano)",
    alcance: "Círculo de 15m",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "O mago invoca a magia e estabelece o ponto central. Por uma rodada, 3d4 adagas de gelo cairão do céu, causando 4d8 pontos dano em todos que estiverem na área, incluindo aliados."
  },

  // 9º Círculo Arcano
  "Cancelamento Total": {
    circulo: "Mago 9 (9º Círculo Arcano)",
    alcance: "30m",
    duracao: "Instantânea",
    resistencia: "JPS anula",
    descricao: "Emitindo um grito e fazendo os gestos da magia, o mago é capaz de afetar uma área de aproximadamente 18m com um efeito mais forte que o de um Bastão de Cancelamento.\n\nCada criatura na área de efeito deve fazer um teste de JPS para cada item mágico que carregar. Uma falha significa que o item foi desintegrado e não pode mais ser recuperado.\n\nDetalhes sobre os efeitos: personagens épicos recebem +4 no teste de resistência para cada nível épico; artefatos, obsidiana e jade não são afetados; itens abençoados diretamente por deuses não são afetados."
  },

  // Magias de Necromante (Círculos 2 a 6)
  "Apodrecer Sangue": {
    circulo: "Necromante 2",
    alcance: "9m + 3m/nível",
    duracao: "1d4 rodadas/nível",
    resistencia: "JPC anula",
    descricao: "Com um ataque de toque bem sucedido, o necromante amaldiçoa o sangue da vítima. Qualquer ataque de corte ou perfuração causará 4 pontos de dano extra durante a duração da magia."
  },
  "Criar Mortos-Vivos": {
    circulo: "Necromante 2",
    alcance: "Toque",
    duracao: "Permanente",
    resistencia: "Nenhuma",
    descricao: "Permite reanimar e controlar mortos-vivos de acordo com o nível do Necromante:\n\n• 3º Nível: Super Zumbi\nMovimento: 6 | PV: 32 | CA: 14 | JP: 7 | 1x Soco +6 (1d8+3)\nMorto-Vivo\n\n• 6º Nível: Super Esqueleto\nMovimento: 9 | PV: 50 | CA: 20 | JP: 10 | 2x Espada Curta +9 (2d6+4)\nMorto-Vivo | Silencioso | Corpo de Osso\n\n• 9º Nível: Super Ghoul\nMovimento: 9 | PV: 43 | CA: 16 | JP: 12 | 2x Garras +9 (1d6 + Paralisia), 1x Mordida +12 (1d12 + Paralisia)\nSilencioso | Morto-Vivo\nParalisia: um alvo atingido por um Ghoul deve ser bem-sucedido em um teste de JPC difícil ou ficará paralisado por 1d6 turnos.\n\n• 12º Nível: Super Fantasma\nMovimento: 9 | PV: 74 | CA: 23 | JP: 14 | 1x Toque +9 (2d6 + Dreno)\nSilencioso | Morto-Vivo\nImunidades: além das imunidades comuns aos mortos-vivos, Fantasmas são feridos apenas por magia e armas mágicas.\nDreno: o toque de um Fantasma drena 1 ponto de Constituição permanente do personagem sem direito a jogada de proteção. Um alvo que tenha todos os seus pontos de Constituição drenados, morrerá.\nRegeneração: ao causar dano pelo toque, o Fantasma regenera a mesma quantidade de dano causado."
  },
  "Mão Espectral": {
    circulo: "Necromante 2",
    alcance: "N/A",
    duracao: "1 turno/nível",
    resistencia: "Nenhuma",
    descricao: "Essa magia cria uma mão espectral verde que flutua com movimento 12. Ela tem CA 24 e qualquer dano causado irá dissipá-la, causando 2d6 pontos de dano ao Necromante. Qualquer habilidade ou magia que exija toque pode ser realizada através da mão (à distância) com a condição [F]."
  },
  "Donzela de Ferro": {
    circulo: "Necromante 3",
    alcance: "3m + 1m/nível",
    duracao: "Instantânea (Duração: 1 rodada/nível)",
    resistencia: "JPC reduz à metade",
    descricao: "Com essa magia, o necromante cria uma onda aglomerada de ossos fantasmagóricos que seguem em linha reta a partir dele. A onda atravessa todas as criaturas que estiverem no caminho até atingir o limite máximo de seu alcance. Qualquer matéria inanimada mais resistente que 30cm de madeira é capaz de interromper seu percurso.\n\nCriaturas atingidas sofrem 1d6 pontos de dano a cada 2 níveis de conjurador (até o máximo de 7d6), 1d10 pontos de dano em constituição e a condição [MD] em qualquer manobra que exija teste pela duração da magia. Uma jogada de JPC pode reduzir o dano à metade e anular completamente o restante dos efeitos. A magia dura por 1 rodada por nível de conjurador."
  },
  "Morte Podre": {
    circulo: "Necromante 3",
    alcance: "Toque",
    duracao: "3 turnos",
    resistencia: "JPC anula",
    descricao: "Depois de um ataque de toque bem sucedido, o necromante amaldiçoa a vítima, que começa a apodrecer por dentro. Ela recebe 1d10 de dano em todos os atributos físicos (até ficar com no mínimo 3) e sofrerá 1d6 pontos de dano por rodada durante 5 rodadas. O efeito pode ser retirado com Remover Doenças ou após 30 minutos."
  },
  "Morte podre": {
    circulo: "Necromante 3",
    alcance: "Toque",
    duracao: "3 turnos",
    resistencia: "JPC anula",
    descricao: "Depois de um ataque de toque bem sucedido, o necromante amaldiçoa a vítima, que começa a apodrecer por dentro. Ela recebe 1d10 de dano em todos os atributos físicos (até ficar com no mínimo 3) e sofrerá 1d6 pontos de dano por rodada durante 5 rodadas. O efeito pode ser retirado com Remover Doenças ou após 30 minutos."
  },
  "Parar Cura": {
    circulo: "Necromante 3",
    alcance: "3m + 3m/nível",
    duracao: "1 turno/nível",
    resistencia: "JPC anula",
    descricao: "Essa magia faz com que o alvo seja incapaz de curar-se por um período. Isso inclui poções, itens mágicos ou magias de cura. A magia Remover Maldição pode acabar com o efeito da magia, mas caso não a possua, a vítima deve aguardar a duração da magia acabar."
  },
  "Drenar Temporário": {
    circulo: "Necromante 4",
    alcance: "3m + 1m/nível",
    duracao: "3 turnos",
    resistencia: "JPS anula",
    descricao: "Realizando um ataque de toque no alvo, o Necromante é capaz de drenar 1d4 níveis de experiência do alvo. Isso altera condições diversas como PVs, JP, Base de Ataque, etc., que são alteradas imediatamente. Uma criatura que atinja o nível 0 através dessa magia morre automaticamente."
  },
  "Golem de Carne": {
    circulo: "Necromante 4",
    alcance: "Toque",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "Essa magia recria o Golem de Carne que foi aprimorado pelo grande Mago Rupert. Ela necessita de um coração que sempre bate e de partes de cadáveres, além de um ritual que dura uma noite inteira.\n\nMovimento: 9 | PV: 90 | CA: 18 | JP: 14 | 2x Pancadas +12 (2d12)\n\nImunidades: um Golem de Carne é imune ao dano de qualquer arma não mágica. Além disso, não são atingidos por ataques de um alvo vivo (gases, venenos ou magias mentais como ilusões ou demais formas mágicas de interferir na mente de seres vivos).\n\nCura Elétrica: o Golem de Carne cura 1 ponto de vida pra cada dado de dano causado por um ataque elétrico.\n\nFogo e Frio: ataques de fogo e frio, mesmo os não mágicos, deixam os golens lerdos por 2d6 rodadas. Um golem lerdo tem seu movimento reduzido à metade, e recebe uma penalidade de 2 em todas as jogadas e na CA."
  },
  "Invocar Demônio": {
    circulo: "Necromante 5",
    alcance: "9m",
    duracao: "Permanente",
    resistencia: "Nenhuma",
    descricao: "Essa magia invoca uma criatura dos planos inferiores para servir ao mago. Caso seja destruída, o mago deve aguardar 3 meses antes de realizar a invocação novamente.\n\nMovimento: 9, 12V | PV: 65 | CA: 18 | JP: 12 | 2x Garras +12 (2d10) | 1x Jato de Fogo (8d8)\n\nImunidades: um Demônio é imune ao dano de qualquer arma não mágica e fogo.\nJato de Fogo: Linha de 12m, 8x ao dia. JPD reduz o dano à metade.\nResistência clérigos: Demônios reduzem 4 pontos de sua jogada para resistir ao efeito de expulsar mortos-vivos dos clérigos."
  },
  "Magia da Morte": {
    circulo: "Necromante 5",
    alcance: "3m + 1m/nível",
    duracao: "Instantânea",
    resistencia: "Ler texto (JPC)",
    descricao: "Essa magia cria um círculo de morte e destruição de 9m de raio. Criaturas com 4DV ou menos morrem instantaneamente. Criaturas com até 6DV devem fazer um teste de JPC ou também morrerão. As demais (com 7DV ou mais), sofrem 1d8 pontos de dano a cada 2 níveis do Necromante, podendo jogar JPC para reduzir o dano à metade."
  },
  "Dedo da Morte": {
    circulo: "Necromante 6",
    alcance: "Toque",
    duracao: "Instantânea",
    resistencia: "JPC (ver texto)",
    descricao: "Dedo da Morte suga a energia vital de sua vítima. Se a magia funcionar, o alvo não poderá ser ressuscitado ou revivido. Além disso, se aplicada em vítimas humanas, a magia inicia uma série de mudanças no cadáver. Passados 3 dias, essas mudanças permitem que o mago anime o corpo como um zumbi vudu, sob seu controle. A criação do zumbi se dá através de um ritual que custa pelo menos 1.000 po, mais 500 peças para cada vítima. As mudanças podem ser revertidas antes do ritual através de um Desejo Restrito ou magia similar, lançada diretamente sobre o corpo. Um Desejo será capaz de trazer o corpo de volta à vida.\n\nO mago recita a fórmula do Dedo da Morte e aponta o seu dedo indicador para a vítima. Se ela não passar em um teste de JPC, a morte é instantânea. Se passar, o alvo, ainda assim, sofre 2d8 + 1 ponto de dano. Se o alvo morrer devido a esse dano, nenhuma mudança interna ocorre, e a vítima pode ser ressuscitada normalmente."
  },
  "Entumbar": {
    circulo: "Necromante 6",
    alcance: "9m + 3m/nível",
    duracao: "Permanente",
    resistencia: "JPS anula",
    descricao: "Com o uso dessa magia, a terra automaticamente engole o alvo pretendido, deixando-o em uma câmara subterrânea que impossibilita qualquer tipo de movimento, embora ainda possa emitir sons. A menos que consiga sair a tempo, eventualmente a vítima morrerá asfixiada.\n\nUm segundo uso da magia é pelo próprio necromante, como uma medida de proteção. Apenas magias de terra muito poderosas (como terremoto, por exemplo) ou um dissipar magia de um usuário de nível elevado podem retirar o necromante de dentro da câmara. Note que a conexão com qualquer morto-vivo ou golem é quebrada; as criaturas agem de forma agressiva e aleatória até restabelecerem contato com seu mestre."
  },
  "Golem de Sangue": {
    circulo: "Necromante 6",
    alcance: "Toque",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "Essa magia cria o mais poderoso golem disponível para Necromantes. É necessário ter aprendido a magia Golem de Carne e só é possível manter apenas um golem ativo por vez.\n\nMovimento: 12 | PV: 124 | CA: 22 | JP: 16 | 2x Pancadas +14 (2d12 + Dreno)\n\nImunidades: um Golem de Sangue é imune ao dano de qualquer arma não mágica. Além disso, não são atingidos por ataques de um alvo vivo (gases, venenos ou magias mentais como ilusões ou demais formas mágicas de interferir na mente de seres vivos).\n\nRegeneração: um Golem de Sangue regenera 2PV a cada rodada.\n\nResistência à Magia: qualquer magia que não afete uma área lançada contra o Golem de Sangue tem 1-5 chances em 1d6 de ser completamente ignorada.\n\nQuatro Braços: sacrificando 40PV temporariamente, o Golem de Sangue pode criar 2 braços adicionais, aumentando o número de ataques para 4. Entretanto, os ataques com os braços extras não causam efeito de Dreno. Caso decida voltar à forma original, todo dano é mantido proporcionalmente.\n\nDreno: Todo dano de combate causado pelo Golem de Sangue é regenerado por ele.\n\nVínculo Espiritual: O Necromante pode “pegar emprestado” até 20% dos pontos de vida do Golem. Todo dano sofrido é primeiro causado nos 20%. Caso o golem morra nesse processo, o Necromante sofre 9d8 pontos de dano e fica atordoado por 2d6 rodadas. Uma jogada de JPS reduz o dano à metade."
  },

  // Magias Divinas (Clérigo)
  "Bênção": {
    circulo: "Clérigo 1 (1º Círculo Divino)",
    alcance: "9m",
    duracao: "1 turno/nível",
    resistencia: "Nenhuma",
    descricao: "Através de uma oração, o sacerdote invoca o poder de sua divindade e gera uma aura de 9m. Aliados que estejam dentro dessa área recebem +1 nas jogadas de ataque e +1 em todos os testes de resistência."
  },
  "Aumento de Força": {
    circulo: "Clérigo 2 (2º Círculo Divino)",
    alcance: "Toque",
    duracao: "nível/horas (1h por nível)",
    resistencia: "Nenhuma",
    descricao: "O sacerdote toca no alvo (que pode ser ele mesmo) enquanto faz uma prece, e, quando termina, o personagem tocado recebe 1d4+1 pontos de Força por nível/horas."
  },
  "Aumento de Destreza": {
    circulo: "Clérigo 2 (2º Círculo Divino)",
    alcance: "Toque",
    duracao: "nível/horas (1h por nível)",
    resistencia: "Nenhuma",
    descricao: "O sacerdote toca no alvo (que pode ser ele mesmo) enquanto faz uma prece, e, quando termina, o personagem tocado recebe 1d4+1 pontos de Destreza por nível/horas."
  },
  "Augúrio": {
    circulo: "Clérigo 3 (3º Círculo Divino)",
    alcance: "Pessoal",
    duracao: "Instantânea",
    resistencia: "Nenhuma",
    descricao: "Com um Augúrio o clérigo pode adivinhar se uma ação beneficiará ou atrapalhará o grupo em um futuro próximo (até meia hora). Por exemplo, se o grupo estiver pensando em quebrar um cadeado mágico, uma magia de Augúrio pode revelar se isto resultará em benefício ou desgraça imediata.\n\nSe a magia tiver sucesso, o Mestre pronuncia uma indicação do que provavelmente irá ocorrer: “benefício”, “desgraça”, ou talvez um enigma ou uma rima. A chance de se receber uma resposta significativa é de 70%, mais 1% por nível do clérigo, ou seja, 71% no 1º nível, 72% no 2°, e assim por diante.\n\nO Mestre poderá fazer quaisquer ajustes que ele considere necessários à situação. De qualquer forma, um grupo que tente vários Augúrios sobre as mesmas ações, em um curto período de tempo, receberá sempre a mesma resposta."
  },
  "Agredir": {
    circulo: "Clérigo 3 (3º Círculo Divino)",
    alcance: "Toque",
    duracao: "1 turno/nível",
    resistencia: "Nenhuma",
    descricao: "Tocando uma arma (incluindo arcos), o clérigo é capaz de encantá-la e fazê-la causar +1d6 pontos de dano por ataque, enquanto a magia durar."
  },
  "Coluna de Chamas de Agmi": {
    circulo: "Clérigo 5 (5º Círculo Divino)",
    alcance: "9m + 1m/nível",
    duracao: "Instantânea",
    resistencia: "JPD metade",
    descricao: "Quando essa magia é lançada, uma coluna vertical de fogo (4,5m de raio, 9m de altura) aparece no local determinado pelo clérigo. Qualquer criatura dentro da área de efeito deve passar por um teste de JPD. Fracasso significa que a vítima sofrerá 6d8 pontos de dano. Do contrário, o dano cai pela metade."
  },
  "Sementes de Fogo": {
    circulo: "Clérigo 6 (6º Círculo Divino)",
    alcance: "40m",
    duracao: "1 turno/nível (Ver texto)",
    resistencia: "JPD",
    descricao: "A magia Sementes de Fogo cria projéteis especiais, ou bombas incendiárias, que queimam com grande calor. O efeito pode ser utilizado em qualquer uma das duas formas, conforme definido pelo clérigo:\n\n• Projétil: Essa opção transforma até quatro bolotas (sementes de carvalho) em projéteis de área que podem ser atirados a até 40 metros. É preciso uma jogada de ataque para acertar o alvo pretendido, e penalidades por imperícia devem ser aplicadas. Cada bolota estoura quando atinge alguma superfície rígida, causando 2d8 pontos de dano e queimando qualquer material combustível em um círculo de 3 metros de diâmetro, a partir do ponto de impacto. Por meio de um teste de JPD, uma criatura dentro da área afetada recebe somente metade do dano, mas um ser atingido diretamente por um dos projéteis receberá dano integral (isto é, sem teste de resistência).\n\n• Incendiárias: Esta opção transforma até oito bagas de azevinho em bombas incendiárias especiais. As bagas de azevinho são enterradas na maioria das vezes, sendo muito leves para fazer mísseis eficientes (podem ser arremessadas a até 2 metros). Elas estouram e ficam em chamas se o clérigo estiver a uma distância máxima de 40 metros e disser uma palavra de comando. As bagas explodem instantaneamente, causando 1d8 pontos de dano a qualquer criatura, e queimando qualquer material combustível dentro de um círculo de 2 metros de diâmetro. As criaturas nessa área sofrem metade do dano se forem bem-sucedidas no teste de resistência à magia.\n\nTodas as Sementes de Fogo perdem o poder depois de um período equivalente a um turno por nível de experiência do clérigo — por exemplo, as sementes de um clérigo de 13º nível permanecem potentes por um máximo de 13 turnos após sua criação."
  },
  "Chuva de Pedras de Rasmum": {
    circulo: "Clérigo 7 (7º Círculo Divino)",
    alcance: "9m + 3m/nível",
    duracao: "Especial",
    resistencia: "Especial (JPD)",
    descricao: "Com esta magia, o clérigo escolhe um ponto principal onde ela irá ocorrer (obedecendo o alcance descritivo). Então, em um raio de 12m, pedras gigantes cairão do céu, causando 15d8 pontos de dano, onde um teste de JPD reduzirá à metade.\n\nUma vez que as rochas caiam no chão, quebrando-se, rochas menores se espalharão dentro da mesma área, dessa vez causando 7d8 pontos de dano e tornando a vítima atordoada por 2d4 rodadas. Um sucesso num teste de JPD reduz o dano à metade e evita o atordoamento."
  }
};
