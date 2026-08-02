'use strict';

/* ── FACTIONS ── */
const FACTIONS = [
  {
    id:'bullies', tag:'VALENTÕES', name:'Bullies', color:'#c5c5c5',
    img:'https://i.pinimg.com/736x/36/57/2e/36572ef82d0faa22a17eebf2bfef8bd8.jpg',
    territory:'Estacionamento & New Coventry', leader:'Bryan McCoy', size:'8 membros ativos',
    desc:'Movidos por raiva, luto e um desejo incessante de vingança. Mais violentos do que nunca, os Bullies operam como uma organização criminosa em formação — e estão dispostos a tudo.',
    brief:'Brutalidade total. Sem limites.',
    bonus:'BÔNUS ATIVO: +10% Dano Físico C2C · Superioridade numérica em 2x1',
    lore: {
      title: 'A Centúria dos Camisas Brancas',
      subtitle: 'Le Cercle Blanc — O Círculo Branco',
      paragraphs: [
        'A Centúria dos Camisas Brancas foi a mais célebre formação já concebida entre os Bullies. O nome foi atribuído pelo antigo vice-líder Nicolas de Bellamy — "Nic-boy" —, cuja influência marcou uma das fases mais dominantes da história de Bullworth. Os Bullies consolidaram o controle quase absoluto sobre a academia através de disciplina rigorosa, intimidação calculada e estratégias meticulosas. Bryan McCoy esmagava adversários com brutalidade implacável, enquanto Troy King neutralizava qualquer oponente com movimentações precisas.',
        'A supremacia permaneceu incontestável até a chegada de Tyler. Ainda assim, os Bullies desempenharam papel fundamental na unificação do internato sob aliança com ele, tornando-se responsáveis por batalhas decisivas que pavimentaram uma era de estabilidade. Contudo, nenhuma hegemonia é eterna.',
        'Exatamente um ano atrás, Nic-boy morreu de forma trágica. Prestes a iniciar nova vida em Blue Skies, envolveu-se com pessoas que jamais deveria ter conhecido na tentativa de reunir dinheiro para construir um futuro com Mandy Williams. As circunstâncias de sua morte jamais foram esclarecidas — bala perdida ou execução dos "Terrence Boys". Seja qual for a verdade, sua morte marcou profundamente a camarilha.',
        'Depois do episódio, a camarilha adotou política de tolerância zero. Bryan mergulhou em depressão profunda e alcoolismo, tornando-se ainda mais violento e imprevisível. Convencido de que os Preppies eram responsáveis indiretamente pela morte de Nic-boy, jurou vingança. Troy King assumiu o posto de vice-líder buscando transformar o estacionamento em polo de comércio clandestino — enquanto Bryan só pensa em vendetta sem fim.',
      ],
      quote: '"A única resposta para a morte de um irmão é a força." — Bryan McCoy',
      nucleos: [
        { name: 'Tiger Team', subtitle: 'Jornada do Campeão — Beatdown', desc: 'Circuito de lutas clandestinas no estacionamento. Campeões chegam ao Ground Zero — torneio na praia, próximo ao farol. O vencedor conquista o título de Campeão de Bullworth Town.' },
        { name: 'Bullworth Wolves', subtitle: 'Jornada da Estrela — Basquete', desc: 'Time estruturado sob o projeto de Salvatore Russo "Sal", com financiamento de Liberty City. A Midnight League serve como vitrine para talentos excepcionais.' },
        { name: 'Châtiment', subtitle: 'Jornada da Alma — A Investigação', desc: 'Henry "Capadócia" Robert conduz investigação sobre a morte de Nic-boy. Evidências apontam para Eduardo Clemenza e uma conspiração muito maior do que qualquer um imaginava.' },
      ]
    },
    meta:[{label:'Líder',val:'Bryan McCoy'},{label:'Vice',val:'Troy King'},{label:'Território',val:'Estacionamento'},{label:'Estilo',val:'Brutalidade Total'}]
  },
  {
    id:'nerds', tag:'CROMOS', name:'Nerds', color:'#30622D',
    img:'https://i.pinimg.com/736x/3a/2b/1b/3a2b1b51a1bf6d2dda5c4bc676fb1de2.jpg',
    territory:'Laboratório Secreto & Biblioteca', leader:'Fred Higgins', size:'7 membros ativos',
    desc:'Subestimados por todos, os Nerds são a única força verdadeiramente neutra de Bullworth — e por isso, a mais valiosa. Informação, gadgets e negociação são suas armas.',
    brief:'Inteligência é poder.',
    bonus:'BÔNUS ATIVO: +15% Eficiência Química · Acesso ao Lab Secreto',
    lore: {
      title: 'O Diário de Fred Higgins',
      subtitle: 'Noite de 5 de julho de 2026',
      paragraphs: [
        'Acabei de apagar as luzes da biblioteca. O silêncio aqui é diferente agora. Não é mais aquele medo constante de ser invadido por Bullies ou Jocks. É um silêncio carregado, como se a escola inteira estivesse prendendo a respiração antes da tempestade.',
        'Faz dois anos que Tyler chegou e virou tudo de cabeça pra baixo. Eu vi isso de perto. Negociei direto com ele várias vezes. Os Nerds ganharam espaço, notoriedade e independência suficiente para negociar nossas próprias alianças. Saímos daquele reinado mais fortes.',
        'Minha visão está mais clara do que nunca: preciso posicionar os Nerds como uma força neutra estratégica. Não vamos nos prender a aliança fixa com nenhuma camarilha. Vamos ser úteis pra todos que souberem valorizar. Temos conhecimento técnico, informação privilegiada, capacidade de conserto e planejamento que os outros grupos simplesmente não possuem.',
        'Beatrice tem sido fundamental nisso. Como minha vice-líder e conselheira, ela equilibra minha visão com o lado emocional que às vezes a gente precisa. Além disso, temos Clementine como tenente. Juntos, formamos uma corte que funciona.',
        'A estratégia que venho traçando é paciente. Vamos continuar unificando internamente, reforçando nossa rede de contatos e melhorando nossas "ferramentas". Não vamos correr atrás do trono, mas vamos nos posicionar de forma que quem quiser governar precise do nosso apoio. Tyler provou que força bruta sozinha não segura a escola por muito tempo. O que segura é quem consegue unificar sem destruir tudo.',
      ],
      quote: '"Nós, os Nerds, podemos ser exatamente isso." — Fred Higgins',
    },
    meta:[{label:'Líder',val:'Fred Higgins'},{label:'Vice',val:'Beatrice'},{label:'Território',val:'Lab Secreto / Biblioteca'},{label:'Estilo',val:'Força Neutra Estratégica'}]
  },
  {
    id:'preppies', tag:'MAURICINHOS', name:'Preppies', color:'#8FC1E5',
    img:'https://i.pinimg.com/736x/62/06/65/620665c5c9d6b5f7a5f46bdc940dbf25.jpg',
    territory:'Harrington House & Quadras de Tênis', leader:'Harold Harrington', size:'6 membros ativos',
    desc:'Enquanto uns aprendiam a intimidar, eles aprendiam a negociar. Enquanto outros acumulavam inimigos, eles construíam influência. O trono lhes pertence por direito — ou assim acreditam.',
    brief:'Dinheiro. Estratégia. Domínio.',
    bonus:'BÔNUS ATIVO: +20% Ganho de Dinheiro · Imunidade Diplomática',
    lore: {
      title: 'O Argumento Preppy',
      subtitle: 'A Mansão Harrington — Bullworth Academy',
      paragraphs: [
        'Os Preppies nunca estiveram verdadeiramente em maus lençóis. Claro, Tyler era o rei. E fez os mauricinhos sofrerem um pouco — tornou-se a autoridade máxima em Bullworth e não alcançou esse feito apenas com palavras bonitas. Fez os Harrington sofrerem. Mas até mesmo alguém como Tyler gostava de manter as mãos molhadas com boas notas de cem dólares.',
        'Harold Harrington assumiu a liderança e dita as ordens na Mansão Harrington. Damien Taylor, herdeiro direto da grande lenda Bif Taylor, reivindicou o título de campeão do Glass Jaw Boxing Club após um verdadeiro massacre. Hal atua como o idealizador dos planos; Damien assume o papel de executor — inclusive do último incidente envolvendo as motos dos Greasers, que Hal preferiu manter nas sombras.',
        'Greasers são rivais mortais — água e óleo. Os Jocks não representam grande problema, mas Damien prefere acabar com eles logo. Nerds são ferramentas úteis. Bullies são delinquentes que poderiam se tornar inconvenientes se organizados. Cheerleaders são irrelevantes politicamente — mas mantê-las distantes dos outros candidatos ao trono é vantagem.',
        'Bullworth vive à beira do caos. O trono está vazio, alianças se desfazem diariamente e cada camarilha acredita possuir o direito de governar apenas porque venceu uma ou duas brigas de corredor. Os Preppies rejeitam essa ideia. Liderança pertence àquele que demonstra capacidade para mantê-la.',
      ],
      quote: '"Chegou o momento de restaurar a ordem. Não porque desejamos o trono acima de tudo, mas porque sabemos exatamente o que fazer com ele." — Harold Harrington',
    },
    meta:[{label:'Líder',val:'Harold Harrington'},{label:'Executor',val:'Damien Taylor'},{label:'Território',val:'Harrington House'},{label:'Estilo',val:'Influência & Estratégia'}]
  },
  {
    id:'greasers', tag:'GRAXEIROS', name:'Greasers', color:'#1f1f1f',
    img:'https://i.pinimg.com/736x/b9/32/92/b932925346369eef1a205eca99bc2a9e.jpg',
    territory:'Oficina Mecânica & New Coventry', leader:'Leo Vincent', size:'9 membros ativos',
    desc:'Cresceram nas ruas, no meio da graxa e da dureza. Enquanto outros brincam de importantes, os Greasers aprendem a sobreviver. E quando subirem no trono, ninguém vai esquecer quem manda.',
    brief:'Lealdade ou morte. Sem exceção.',
    bonus:'BÔNUS ATIVO: +15% Armas Improvisadas · Território das Garagens',
    lore: {
      title: 'Anotações do Diário de Leo Vincent',
      subtitle: 'Oficina Mecânica — New Coventry',
      paragraphs: [
        'Vou falar, cara… As coisas andam complicadas depois da saída daquele viadinho de um metro e sessenta e cinco. Hoje, os Preppies foderam as nossas motos. A minha era nova, porra. Eu tinha acabado de consertar o carburador e aqueles mauricinhos riscaram ela toda. O viadinho-mor Harrington nega que foram eles. Mas a cobrança vai vir.',
        'Tyler era um desgraçado, essa é a verdade. O Josh só queria dar uma lição num calouro que tava tentando comer a mina dele. Isso se chama honra. Nós crescemos nas ruas, no meio de drogados, da graxa e de um monte de coisa errada. Esse papinho de justiça, de manter a escola em ordem, não existe. Aquele moleque era só mais um filho da puta brincando de Deus.',
        'Nunca vou esquecer o olhar acabado do cara que me ensinou tudo. Nunca vou esquecer aquela lata de lixo cheia de merda e a foto que viralizou em todas as redes sociais. O Josh nunca mais foi o mesmo depois daquilo. E a gente sabe que aquela bichinha também sabotava nossas corridas de bicicleta e fodeu várias das nossas motos.',
        'Eu odeio aquele filho da puta. Todos nós odiamos aquele filho da puta. E se eu puder… se eu encontrar esse merdinha de novo… ele tá FODIDO PRA CARALHO.',
        'Tyler foi embora. Existe um lugar vazio: o trono de Bullworth. E eu tenho a missão de fazer aquilo que o Josh não conseguiu terminar. Nós, os Greasers, somos a melhor opção. Na verdade, somos a única opção. A gente conhece Bullworth de verdade — os corredores, as ruas, a oficina, as brigas, os acordos e as costas viradas.',
      ],
      quote: '"Quando a gente subir naquele trono, ninguém vai esquecer quem manda nessa escola." — Leo Vincent',
    },
    meta:[{label:'Líder',val:'Leo Vincent'},{label:'Território',val:'Oficina / New Coventry'},{label:'Estilo',val:'Código de Honra'},{label:'Rival',val:'Preppies'}]
  },
  {
    id:'jocks', tag:'ATLETAS', name:'Jocks', color:'#122A50',
    img:'https://i.pinimg.com/736x/65/95/80/659580ead7c51448abdb30eb00eeecf8.jpg',
    territory:'Campo de Futebol & Ginásio', leader:'Cole Kavanagh', size:'10 membros ativos',
    desc:'Sete jogos, sete vitórias. Os Bullhorns estão de volta ao topo — e desta vez, mais perigosos, mais rápidos e mais viciados do que nunca. O campo é deles. A escola também.',
    brief:'Força. Vitória. A qualquer custo.',
    bonus:'BÔNUS ATIVO: +15% Estamina · +20% Força em uso de anabolizantes',
    lore: {
      title: 'Os Herdeiros do Trono',
      subtitle: 'Os Bullhorns — Campo Sul, Bullworth Academy',
      paragraphs: [
        'Nos últimos dez anos, o internato conheceu o auge da fama e do controle dos Bullhorns sobre Bullworth. Dotados de músculos imensos e um wrestler dominante, a camarilha estabeleceu um reinado de corrupção e excesso de testosterona que durou até a chegada do último Rei — aquele que finalmente colocou ordem na casa, quebrando recordes e sendo levados a sério pela primeira vez naquela cidade abandonada por Deus.',
        'Atualmente, o Campeão é Cole Kavanagh, líder dos atletas e Quarterback. Cole venceu o último chefão após lesão em disputa de território com o Rei, enfrentando-o no Torneio de Wrestling e removendo sua coroa à força enquanto os calouros visualizavam seu ídolo ser destronado de maneira brutal. Um novo contato de esteroides surge na Town, lucrando com o vício em performance dos jogadores, que se tornam cada vez mais dependentes dos hormônios oferecidos pelo Quarterback.',
        'Para Cole, cada vitória significa tudo. Considera seu antecessor fraco, pois permitiu que outro Rei assumisse o comando. Busca a todo custo enterrar sua memória. São sete jogos e sete vitórias, além de resultados positivos no wrestling que elevaram os Bullhorns ao nível nacional. Os anabolizantes, porém, cobram um custo alto — afetando o cérebro dos atletas e os fazendo ser tomados pela raiva, pela fúria descontrolada. Boatos correm que os Jocks dessa geração são como animais: você não pode falar nada de errado que eles pulam em você.',
        'Os Jocks mantêm aliança com as Cheerleaders e uma relação neutra com os Preppies. Bullies, Greasers e Nerds são pedras no caminho — peões de baixo nível e possíveis lacaios em seu reinado. A arrogância dos atletas é demais para isso. Seria o fim perder novamente.',
      ],
      quote: '"Bullworth é uma selva e os Jocks são os reis dela — como sempre foi e sempre será." — Cole Kavanagh',
    },
    meta:[{label:'Líder',val:'Cole Kavanagh'},{label:'Território',val:'Campo & Ginásio'},{label:'Estilo',val:'Força Bruta + Anabolizantes'},{label:'Aliada',val:'Cheerleaders'}]
  },
  {
    id:'cheerleaders', tag:'BULLWORTH CHERRIES', name:'Cheerleaders', color:'#D4537E',
    img:'https://i.imgur.com/rIAUdSY.jpeg',
    territory:'Ginásio & Corredores Principais', leader:'Sofia (Capitã)', size:'8 membros ativos',
    desc:'Enquanto eles quebram narizes, ela constrói alianças. Enquanto eles fazem inimigos, ela coleciona favores. Poder nunca foi sobre dar o primeiro soco — é decidir quem vai dar o último.',
    brief:'Influência. Manipulação. Controle.',
    bonus:'BÔNUS ATIVO: +20% Persuasão · Acesso a qualquer corredor sem tensão',
    lore: {
      title: 'Bullworth Cherries — Por Que Não Uma Rainha?',
      subtitle: '— Sofia, Capitã das Cheerleaders',
      paragraphs: [
        'Todo mundo nessa escola age como se fosse impossível existir um capitão dos Jocks e uma capitã das Cheerleaders sem acabar trepando escondido embaixo da arquibancada. Qué imaginación de mierda. Eu divido o ginásio com eles, organizo evento com eles. Agora, se eu quero levar algum deles pra cama? Isso já é problema meu. Toda vez que eu preciso de alguma coisa, os atletas simplesmente fazem. Se isso é profissionalismo ou manipulação? Ay, cariño... Chama do que você quiser.',
        'Eu até gosto dos Nerds. Não deles, exatamente... da utilidade deles. Aqueles esquisitos sabem de tudo. De vez em quando inventam que eu compro prova com o Fred ou fico fazendo acordo escondido pelos corredores. Por favor. Se eu realmente estivesse fazendo isso, vocês acham mesmo que iam descobrir?',
        'Os Bullies conseguem me tirar do sério. Aquela história da caloura foi a gota d\'água. Mexer com uma das minhas meninas foi uma decisão tão burra que até hoje eu fico surpresa por eles conseguirem respirar sem ajuda. Eu nem preciso encostar neles. Basta eu olhar pra um atleta, sorrir e dizer "resolve isso pra mim, cariño". Cinco minutos depois o problema desaparece.',
        'Todo mundo nessa escola acha que o próximo Rei tem que ser mais um garoto bravo com o punho fechado e o ego inflado. Qué sorpresa. Dois anos depois da saída do Tyler e o que vocês conseguiram foi transformar Bullworth numa creche de machos disputando quem grita mais alto. Poder nunca foi sobre dar o primeiro soco. Poder é decidir quem vai dar o último. Essa diferença nenhum daqueles idiotas entendeu até hoje.',
      ],
      quote: '"Eles podem continuar brigando pelo palco. Eu prefiro controlar a música." — Sofia',
    },
    meta:[{label:'Líder',val:'Sofia (Capitã)'},{label:'Território',val:'Ginásio & Corredores'},{label:'Aliada',val:'Jocks'},{label:'Estilo',val:'Influência & Manipulação'}]
  },
  {
    id:'press',
    tag:'JORNAL',
    name:'Bullworth Press',
    color:'#c9a84c',
    img:'https://i.pinimg.com/736x/62/b4/57/62b45787a00287c85ec82295bf01e021.jpg',
    territory:'Redação & Arquivos',
    leader:'Editor-Chefe',
    size:'4 membros ativos',
    desc:'Os olhos e ouvidos de Bullworth. Enquanto as outras facções brigam por território, a Bullworth Press controla a narrativa. Informação é poder — e eles sabem disso.',
    brief:'A verdade tem um preço.',
    bonus:'BÔNUS ATIVO: +20% Persuasão · Acesso a informações privilegiadas',
    lore: {
      title: 'O Quarto Poder',
      subtitle: 'A Redação — Bullworth Academy',
      paragraphs: [
        'A Bullworth Press sempre foi tratada como piada pelos outros. "Jornaleco de colégio", "passatempo de nerd", "perda de tempo". Até que começaram a publicar as histórias certas.',
        'Fofocas que derrubaram líderes. Segredos que mudaram alianças. Fotografias que comprometeram figuras poderosas. Cada edição do jornal deixava um rastro de consequências, e ninguém nunca sabia quem estava por trás das reportagens.',
        'Agora, com o trono vago e as facções em pé de guerra, a Press se tornou mais relevante do que nunca. Eles não precisam de força física — eles têm a verdade. Ou pelo menos, a versão dela que escolhem publicar.',
        'O Editor-Chefe mantém uma rede de informantes espalhados por todas as camarilhas. Cada líder sabe que um passo em falso pode virar manchete. E cada manchete pode custar uma aliança.'
      ],
      quote: '"A informação é a arma mais poderosa — e nós controlamos a informação." — Editor-Chefe da Bullworth Press',
      nucleos: [
        { name: 'Boca de Urna', subtitle: 'Jornada da Informação — Fofocas', desc: 'Rede de informantes espalhados por todas as facções. Qualquer movimento suspeito vira notícia em 24 horas.' },
        { name: 'Câmera Escura', subtitle: 'Jornada da Imagem — Fotografia', desc: 'Registro fotográfico de todos os acontecimentos importantes. As imagens valem mais que palavras.' },
        { name: 'Editorial', subtitle: 'Jornada da Verdade — Publicação', desc: 'A edição final do jornal. Decidir o que publicar — e o que esconder — é o verdadeiro poder.' },
      ]
    },
    meta:[
      {label:'Líder', val:'Editor-Chefe'},
      {label:'Território', val:'Redação & Arquivos'},
      {label:'Estilo', val:'Jornalismo Investigativo'},
      {label:'Aliados', val:'Nenhum (Neutro)'}
    ]
  }
];

/* ── BIBLIOTECA ── */
const BIBLIOTECA_DATA = {
  atributos:[
    {name:'FORÇA',       desc:'Potência dos golpes e taxa de sucesso ao agarrar alvos.',  color:'#c5c5c5'},
    {name:'AGILIDADE',   desc:'Velocidade de corrida, esquiva e precisão balística.',      color:'#122A50'},
    {name:'INTELECTO',   desc:'Facilidade para abrir armários e criar misturas químicas.', color:'#30622D'},
    {name:'PRESENÇA',    desc:'Custo de subornos e capacidade de persuasão verbal.',       color:'#8FC1E5'},
    {name:'REPUTAÇÃO',   desc:'Score social. Abre portas e define sua hierarquia.',        color:'#c9a84c'},
    {name:'RESISTÊNCIA', desc:'Pontos de vida e tolerância a punições formais.',           color:'#1f1f1f'},
  ],
  regras:[
    'O sinal decreta recolher obrigatório às 23h. Circular após esse horário alerta os monitores.',
    'Agressões físicas flagradas pelo corpo docente resultam em detenção imediata.',
    'O uniforme escolar deve ser mantido durante os turnos de aula.',
    'Invasões territoriais não autorizadas reduzem drasticamente a reputação local.',
    'Cada camarilha tem um Líder eleito com bônus exclusivos e responsabilidades narrativas.',
    'Notas abaixo de 5,0 travam habilidades dependentes de Intelecto.',
  ]
};

/* ── PACOTES ── */
const PACOTES_DATA = {
  exclusivos: {
  // ============================================================
  // JOCKS - Pacotes da Liderança
  // ============================================================
  jocks: [
    {
      title: 'Capitão dos Bullhorns',
      subtitle: '"O Líder Supremo dos Atletas"',
      faction: 'Jocks (Líder)',
      color: '#122A50',
      img: 'https://i.pinimg.com/736x/65/95/80/659580ead7c51448abdb30eb00eeecf8.jpg',
      imgPos: 'center 20%',
      desc: 'Como o expoente máximo e líder indiscutível dos Atletas (Jocks), o Capitão dos Bullhorns personifica o vigor físico e a autoridade dentro do campus. Com seus imponentes 1,95m de altura, forte, resistente e extremamente veloz, você encarna o ideal máximo de um atleta completo. Comandando sua facção com mão de ferro a partir de sua impressionante presença atlética, o líder dos esportistas utiliza sua velocidade invejável, técnica refinada de solo e força explosiva para ditar o ritmo das disputas e garantir a soberania de seu grupo perante qualquer adversário.',
      skills: ['Atleta Supremo', 'Campeão de Wrestling', 'Punho do Capitão']
    },
    {
      title: 'Executor dos Bullhorns',
      subtitle: '"O Braço Direito dos Atletas"',
      faction: 'Jocks (Vice-Líder)',
      color: '#122A50',
      img: 'https://i.imgur.com/QwlQifV.jpeg',
      imgPos: 'center 25%',
      desc: 'Como braço direito da facção dos Atletas (Jocks) e o herdeiro imediato à liderança do time, o Executor dos Bullhorns é a força motriz de elite que garante a aplicação das ordens e a segurança de sua camarilha. Com uma estatura impressionante de 1,90m e uma robustez formidável, ele atua como o verdadeiro cão de caça dos esportistas, combinando uma agilidade formidável com um domínio técnico assustador de solo. Quando as provocações de vestiário se transformam em combate real, o Executor entra em ação para neutralizar as maiores ameaças, utilizando quedas devastadoras e uma agressividade tática implacável.',
      skills: ['Atleta de Elite', 'Wrestling Avançado', 'Investida Implacável']
    },
    {
      title: 'Muralha dos Bullhorns',
      subtitle: '"O Pilar Defensivo dos Atletas"',
      faction: 'Jocks (Tenente)',
      color: '#122A50',
      img: 'https://i.imgur.com/mKuNfwD.jpeg',
      imgPos: 'center 30%',
      desc: 'Como o terceiro na linha de comando e o principal pilar defensivo dos Atletas (Jocks), a Muralha dos Bullhorns é a barreira intransponível que protege a retaguarda de sua facção. Combinando uma excelente velocidade de corrida com uma estrutura física altamente resistente, ele atua como o protetor de elite do grupo, dominando técnicas precisas de submissão e finalização no solo para neutralizar ameaças rapidamente. Portando o prestigiado taco de alumínio autografado como símbolo de sua autoridade e força nos momentos de crise, a Muralha impõe respeito físico no campus.',
      skills: ['Prodígio dos Atletas', 'Wrestling Intermediário', 'Taco de Alumínio']
    },
    {
      title: 'Mascote dos Bullhorns',
      subtitle: '"A Força Imprevisível dos Atletas"',
      faction: 'Jocks (Extra)',
      color: '#122A50',
      img: 'https://i.imgur.com/9gxEXA6.png',
      imgPos: 'center 15%',
      desc: 'Como símbolo enigmático e a força imprevisível dos Atletas (Jocks/Bullhorns), o Mascote dos Bullhorns representa a faceta mais caótica e animada da facção dentro de Bullworth Academy. Protegido por uma identidade secreta e envolto em sua robusta fantasia armadura, ele atua como o provocador supremo no campus, misturando técnicas de wrestling e investidas brutais com um vasto repertório de pegadinhas e itens trapaceiros. Seja inflamando o espírito da escola ao lado da torcida ou intervindo em confrontos de maneira totalmente inesperada.',
      skills: ['Touro de Bullworth', 'Fúria do Touro', 'Maluco do Pedaço']
    }
  ],

  // ============================================================
  // BULLIES - Pacotes da Liderança
  // ============================================================
  bullies: [
    {
      title: 'Golias de Bullworth',
      subtitle: '"O Líder Colossal dos Bullies"',
      faction: 'Bullies (Líder)',
      color: '#c5c5c5',
      img: 'https://i.pinimg.com/736x/36/57/2e/36572ef82d0faa22a17eebf2bfef8bd8.jpg',
      imgPos: 'center 20%',
      desc: 'Como a figura central, mais temida e fisicamente avantajada de toda a Bullworth Academy, o Golias de Bullworth é o líder supremo da facção dos Valentões (Bullies). Verdadeiro predador do ecossistema social do internato, ele comanda seu grupo com base na pura força bruta e na intimidação psicológica, apoiado por uma estatura colossal que impõe respeito e pavor em qualquer um que cruze seu caminho. Indestrutível na defesa e capaz de desferir ataques com poder devastador, o chefe dos valentões utiliza sua resistência absurda e sua aura avassaladora para manter o controle absoluto de seu território.',
      skills: ['Colossal', 'Até-o-último-cuecão', 'Aura e Ego']
    },
    {
      title: 'Grande Malandro',
      subtitle: '"O Vice-Líder Ardiloso dos Bullies"',
      faction: 'Bullies (Vice-Líder)',
      color: '#c5c5c5',
      img: 'https://i.imgur.com/YmpT4Bj.jpeg',
      imgPos: 'center 25%',
      desc: 'Como a mente ardilosa por trás da força bruta da facção e segundo no comando, o Grande Malandro é o vice-líder dos Valentões (Bullies). Longe de seguir qualquer código de honra ou combate limpo, ele destaca-se em Bullworth Academy por sua imprevisibilidade e pelo uso irrestrito de trapaças, truques baixos e improvisação. Seja recorrendo a objetos do cotidiano guardados em seu estojo para surpreender adversários ou aplicando táticas escorregadias de combate evasivo, o vice-líder equilibra a agressividade de sua camarilha com pura esperteza urbana.',
      skills: ['Mestre da Trapaça', 'Guerreiro Urbano', 'Bater e Fugir']
    },
    {
      title: 'Cria da Discórdia',
      subtitle: '"O Tenente Estrategista dos Bullies"',
      faction: 'Bullies (Tenente)',
      color: '#c5c5c5',
      img: 'https://i.imgur.com/AdA3j1y.jpeg',
      imgPos: 'center 30%',
      desc: 'Como o tenente e estrategista oculto da facção dos Valentões (Bullies), a Cria da Discórdia é o arquiteto por trás dos maiores caos e guerras territoriais de Bullworth Academy. Operando nas sombras enquanto a força bruta da camarilha resolve as brigas de frente, este estudante domina a arte da manipulação social, da infiltração e da difusão de intrigas. Mestre absoluto na criação de disfarces convincentes, orquestração de pegadinhas e propagação de boatos, ele constrói uma teia intocável de influência.',
      skills: ['Semente do Mal', 'Festival de Pegadinhas', 'Mestre dos Disfarces']
    }
  ],

  // ============================================================
  // GREASERS - Pacotes da Liderança
  // ============================================================
  greasers: [
    {
      title: 'Campeão das Ruas',
      subtitle: '"O Líder Lutador dos Greasers"',
      faction: 'Greasers (Líder)',
      color: '#1f1f1f',
      img: 'https://i.pinimg.com/736x/b9/32/92/b932925346369eef1a205eca99bc2a9e.jpg',
      imgPos: 'center 20%',
      desc: 'Seja por talento natural ou devido aos anos de treinamento acumulados na velha academia da cidade, o Líder Greaser pavimentou seu caminho até o topo da cadeia alimentar de Bullworth, alcançando, em uma idade bastante jovem, o título de Campeão das Ruas, após vencer os lutadores da oficina, um a um, e estabelecer-se no posto de um dos lutadores mais habilidosos do internato. Seus chutes são muito conhecidos – e temidos – por todos aqueles que compreendem bem o submundo das camarilhas de Bullworth. O Campeão das Ruas é o rival do Campeão de Boxe, e seu estilo de luta é projetado inteiramente como instrumento de contra-ataque para o pugilismo ágil dos mauricinhos.',
      skills: ['Campeão de Muay Thai', 'Defesa Impenetrável', 'Domínio das Pernas']
    },
    {
      title: 'Carrasco da Oficina',
      subtitle: '"O Vice-Líder Brutal dos Greasers"',
      faction: 'Greasers (Vice-Líder)',
      color: '#1f1f1f',
      img: 'https://i.imgur.com/RJdvlGc.jpeg',
      imgPos: 'center 15%',
      desc: 'O notório e vil Vice-Líder dos Greasers foi batizado como o Carrasco da Oficina após seus feitos em combate, sendo famoso por empunhar uma marreta de construção e por fazer jus ao seu título ao utilizá-la da maneira mais brutal possível. Entre todos os descolados, é certamente o mais alto e robusto, aproximando-se dos maiores alunos do internato quando se trata de capacidades físicas avantajadas. Seu habitat natural é New Coventry, onde estabelece dominância absoluta ao lado do Líder, adaptando-se à brutalidade das áreas mais marginalizadas e das construções abandonadas que utiliza como esconderijo.',
      skills: ['Peso-Pesado dos Greasers', 'Gigante do Muay Thai', 'Demolidor do Ferro Velho']
    },
    {
      title: 'Grappler de Jaqueta',
      subtitle: '"O Tenente Versátil dos Greasers"',
      faction: 'Greasers (Tenente)',
      color: '#1f1f1f',
      img: 'https://i.imgur.com/WweoKsF.jpeg',
      imgPos: 'center 30%',
      desc: 'O Grappler dos Greasers é um ponto curioso no cenário de lutas de camarilhas, tratando-se de um lutador que compreendeu, de forma prematura, a dualidade dos estilos de luta em pé e do chão e os aperfeiçoou, para criar a sua própria forma de combater seus adversários. Embora não possua a expertise de um atleta de alto nível em nenhuma das duas artes, é versado em ambos os esportes: o Muay Thai, estilo original de sua camarilha, e o wrestling, sendo o primeiro em nível intermediário e o segundo em nível amador. Seu maior trunfo é a sua versatilidade, misturando chutes e socos com clinch, quedas e ground and pound.',
      skills: ['Lutador das Ruas', 'Grappler da Oficina', 'Mestre do Clinch']
    }
  ],

  // ============================================================
  // PREPPIES - Pacotes da Liderança
  // ============================================================
  preppies: [
    {
      title: 'Príncipe dos Mauricinhos',
      subtitle: '"O Líder Aristocrata dos Preppies"',
      faction: 'Preppies (Líder)',
      color: '#8FC1E5',
      img: 'https://i.imgur.com/4OuKttW.jpeg',
      imgPos: 'center 20%',
      desc: 'Como o líder indiscutível e herdeiro máximo da facção dos Mauricinhos (Preppies), o Príncipe dos Mauricinhos personifica a aristocracia, o prestígio e o poder financeiro dentro de Bullworth Academy. Muito além de um estudante comum, ele é o rosto da elite tradicional, liderando seu grupo com uma postura impecável, elegância natural e uma autoridade que impõe respeito imediato. Combinando uma lábia extremamente refinada — capaz de manipular as estruturas sociais do internato a seu favor — com a brutalidade oculta de sua icônica soqueira de ouro, o líder dos mauricinhos prova que a verdadeira soberania reside na mistura perfeita entre influência aristocrática e violência cirúrgica.',
      skills: ['Herança Aquaberry', 'Punho de Ouro', 'Lábia Aristocrática']
    },
    {
      title: 'Campeão de Boxe',
      subtitle: '"O Vice-Líder Pugilista dos Preppies"',
      faction: 'Preppies (Vice-Líder)',
      color: '#8FC1E5',
      img: 'https://i.imgur.com/HWeUxYM.jpeg',
      imgPos: 'center 15%',
      desc: 'Como o vice-líder da facção dos Mauricinhos (Preppies), o Campeão de Boxe é o expoente máximo da nobre arte dentro de Bullworth Academy. Ele traduz os investimentos milionários de sua família em uma técnica impecável e letal, unindo a elegância aristocrática à brutalidade cirúrgica dos ringues. Dono de uma esquiva lendária e de um jogo de pernas incomparável, o campeão dos riquinhos dita o ritmo de qualquer confronto com extrema classe. Debaixo de seu suéter de grife esconde-se um pugilista de elite com socos devastadores e sequências implacáveis.',
      skills: ['Destreza do Campeão', 'Soco de Diamante', 'Nobre Sequência']
    },
    {
      title: 'Kickboxer de Old Valley',
      subtitle: '"O Tenente Combatente dos Preppies"',
      faction: 'Preppies (Tenente)',
      color: '#8FC1E5',
      img: 'https://i.imgur.com/3fqL0o5.jpeg',
      imgPos: 'center 30%',
      desc: 'Como o tenente e terceiro na linha de sucessão dos Mauricinhos (Preppies), o Kickboxer de Old Valley representa a ala mais atlética e combativa da elite do internato. Eleva a reputação de sua facção combinando a tradicional arrogância rica com uma dedicação obsessiva ao treinamento de artes marciais de alto custo. Atuando como uma peça defensiva e de contra-ataque extremamente ágil, ele utiliza seus reflexos privilegiados e a força devastadora de seus chutes frontais para subjugar oponentes com velocidade impressionante.',
      skills: ['Postura Intocável', 'Chute Milionário', 'Reflexo Luxuoso']
    }
  ],

  // ============================================================
  // NERDS - Pacotes da Liderança
  // ============================================================
  nerds: [
    {
      title: 'Grão-Mestre das Armas',
      subtitle: '"O Líder Estratégico dos Nerds"',
      faction: 'Nerds (Líder)',
      color: '#30622D',
      img: 'https://i.pinimg.com/736x/3a/2b/1b/3a2b1b51a1bf6d2dda5c4bc676fb1de2.jpg',
      imgPos: 'center 15%',
      desc: 'A frente e liderança estratégica dos nerds é versada na utilização de armamentos. Popularmente conhecido entre os seus como Grão-Mestre das Armas, o conhecimento secular da camarilha recai em seus ombros, sendo-lhe confiada a posse das armas mais poderosas de Bullworth Academy. Treinado exclusivamente na frente tática e guerrilha, o mais sabido dos nerds utiliza essa expertise para ser uma figura derradeira, capaz de mudar o jogo através de suas ações e poder. Assim, o líder nerd está longe de ser uma figura indefesa, sendo a maior representatividade de permanência e valentia dos famigerados CDF.',
      skills: ['Portador da Spud Gun', 'O Temido Rocket Launcher', 'Atirador de Elite']
    },
    {
      title: 'Cientista Maluco',
      subtitle: '"O Vice-Líder Inovador dos Nerds"',
      faction: 'Nerds (Vice-Líder)',
      color: '#30622D',
      img: 'https://i.imgur.com/506ed3v.jpeg',
      imgPos: 'center 20%',
      desc: 'Se há aqueles que se intitulam prodígios por se limitarem ao conhecido, o vice-líder dos nerds é ousado ao explorar o desconhecido. Seu gênio é inovador, insatisfeito com padrões, costumes, hábitos, buscando constantes formas de aprimorar processos. Uma pessoa mais prática que tudo, gosta de colocar a mão na massa e desenvolver suas próprias invenções. Assim como Tesla, Einstein, Curie, você é uma pessoa com o total potencial de surpreender uma geração com seus achados, e Bullworth testemunhará seus primeiros passos.',
      skills: ['Inovação Geracional', 'Régua de Eletrochoque', 'Buginga-de-Última-Mão']
    },
    {
      title: 'Sábio Alquimista',
      subtitle: '"O Tenente Químico dos Nerds"',
      faction: 'Nerds (Tenente)',
      color: '#30622D',
      img: 'https://i.imgur.com/ReumlbN.jpeg',
      imgPos: 'center 25%',
      desc: 'Quem pronunciou primeiro os gases nobres antes do nome da mamãe? Pois é, você, tenente! Parabéns, seu CDF, você é um prodígio da química. A indústria farmacêutica pode esperar, pois você futuramente e, definitivamente, fará história. Mas hoje, preso em Bullworth, é uma pessoa completamente obcecada em gastar horas e horas do tempo estudando, desenvolvendo regalias no laboratório de química do instituto e sendo monitor das muitas matérias da área.',
      skills: ['Tempestade de Pum', 'Super Firecracker', 'Poções Malucas']
    }
  ],

  // ============================================================
  // CHEERLEADERS - Pacotes da Liderança
  // ============================================================
  cheerleaders: [
    {
      title: 'Capitã das Bullworth Cherries',
      subtitle: '"O Rosto Mais Emblemático das Cheerleaders"',
      faction: 'Cheerleaders (Líder)',
      color: '#D4537E',
      img: 'https://i.imgur.com/vYB7sXG.jpeg',
      imgPos: 'center 30%',
      desc: 'Como o rosto mais emblemático das Cheerleaders e a figura que dita tendências dentro de Bullworth Academy, a Capitã representa a combinação perfeita entre disciplina, elegância e controle absoluto do próprio corpo. Acostumada a liderar apresentações sincronizadas diante de toda a escola, ela domina movimentos acrobáticos, deslocamentos rápidos e uma consciência corporal praticamente impecável, transformando cada passo em uma demonstração de precisão. Sob sua liderança, as Cheerleaders deixaram de ser apenas um grupo de apoio aos atletas para se consolidarem como uma força política própria.',
      skills: ['Rainha da Quadra', 'Acrobata de Elite', 'Toda a Atenção para Mim']
    },
    {
      title: 'O Braço Direito',
      subtitle: '"A Vice-Capitã das Cheerleaders"',
      faction: 'Cheerleaders (Vice-Líder)',
      color: '#D4537E',
      img: 'https://i.imgur.com/vLWlwAI.png',
      imgPos: 'center 25%',
      desc: 'Como Vice-Capitã das Cheerleaders, você ocupa uma posição conquistada por mérito, disciplina e absoluta confiança da Capitã. Muito mais do que uma simples segunda no comando, é a responsável por garantir que cada apresentação, treinamento e decisão do grupo aconteça com precisão impecável, servindo como elo entre a liderança e as demais integrantes. Sua capacidade de adaptação, coordenação e leitura do ambiente faz com que esteja sempre pronta para assumir a dianteira quando necessário.',
      skills: ['Influência Hipnótica', 'Precisão Acrobática', 'Mente Inabalável']
    },
    {
      title: 'O Braço Esquerdo',
      subtitle: '"A Tenente e Pilar Atlético das Cheerleaders"',
      faction: 'Cheerleaders (Tenente)',
      color: '#D4537E',
      img: 'https://i.imgur.com/AIhZ8fs.jpeg',
      imgPos: 'center 20%',
      desc: 'Como a tenente e pilar atlético das Líderes de Torcida (Cheerleaders), O Braço Esquerdo é a perfeita combinação entre agilidade acrobática e uma surpreendente potência física no campus de Bullworth Academy. Atuando como a peça de contenção e suporte tático de sua camarilha, ela quebra qualquer estereótipo ao alinhar o domínio técnico do combate de solo com uma mobilidade invejável em batalha. Com reflexos apurados, capacidade única de controle e uma presença física notória.',
      skills: ['A "Paradinha" de Cole Kavanagh', 'Realeza do Wrestling', 'Acrobacia Rítmica']
    }
  ],

  press: [
  {
    title: 'Manipulador da Mídia',
    subtitle: '"O Líder da Narrativa"',
    faction: 'Bullworth Press (Líder)',
    color: '#c9a84c',
    img: 'https://i.imgur.com/Fq2EMAo.png',
    imgPos: 'center 20%',
    desc: 'Como autoridade máxima sobre a linha editorial do Bullworth Press, o Manipulador da Mídia não se limita a divulgar acontecimentos: ele determina como esses acontecimentos serão compreendidos. Uma acusação publicada sob sua orientação pode destruir amizades, iniciar conflitos entre facções ou transformar um estudante respeitado em motivo de desprezo.',
    skills: [
      'Orador Intransponível',
      'Leitor de Reações',
      'Retórica Dominante',
      'Fake News',
      'Voz Oficial de Bullworth',
      'Intocável da Redação'
    ]
  },
  {
    title: 'Furo de Bullworth',
    subtitle: '"O Vice-Líder Infiltrado"',
    faction: 'Bullworth Press (Vice-Líder)',
    color: '#c9a84c',
    img: 'https://i.imgur.com/1IAQgyU.png',
    imgPos: 'center 25%',
    desc: 'O Furo de Bullworth está presente antes mesmo de qualquer pessoa perceber que existe uma história a ser descoberta. Ele atravessa festas, reuniões, treinos e territórios de facções como se pertencesse a todos esses ambientes, registrando conversas que jamais deveriam chegar ao jornal.',
    skills: [
      'Furtividade Social',
      'Infiltração de Identidade',
      'Escuta de Longo Alcance',
      'Bajulação Estratégica',
      'Testemunha Inconveniente',
      'Intocável da Imprensa'
    ]
  },
  {
    title: 'Investigador de Perfis',
    subtitle: '"O Tenente Estrategista"',
    faction: 'Bullworth Press (Tenente)',
    color: '#c9a84c',
    img: 'https://i.imgur.com/WYuE0oD.png',
    imgPos: 'center 30%',
    desc: 'O Investigador de Perfis é o estrategista de campo do Bullworth Press, responsável por conhecer pessoas, rotinas e territórios com uma precisão quase perturbadora. Registros escolares, horários, caminhos habituais, amizades, punições e mudanças de comportamento são reunidos até formarem um retrato capaz de antecipar as decisões do alvo.',
    skills: [
      'Acesso Irrestrito aos Arquivos',
      'Fonte Anônima',
      'Mapa de Rotas',
      'Dossiê de Perfil',
      'Operação Planejada',
      'Intocável dos Arquivos'
    ]
  }
]
},

  gerais: {
    jocks: [
      {
        title: 'Titã dos Bullhorns — R$ 25,00',
        subtitle: '"Os Gigantes da Escola"',
        faction: 'Jocks',
        color: '#122A50',
        img: 'https://i.imgur.com/lo2qfjT.png',
        imgPos: 'center 25%',
        desc: 'Os Titãs dos Bullhorns impõem presença com 1,85m de altura, força acima da média e resistência incomum. Representam a brutalidade direta e a supremacia corporal, onde peso, impacto e imposição física resolvem o combate. Temidos pelo potencial de destruição que sua estrutura corporal aparenta.',
        skills: ['Fundamentos do Wrestling', 'Constituição Titânica', 'Brutalizador', 'Fúria do Titã (Merecimento/Mercado - R$ 15,00)', 'Avanço Irrefreável (Merecimento/Mercado - R$ 15,00)']
      },
      {
        title: 'Linebacker dos Bullhorns — R$ 25,00',
        subtitle: '"Os Defensores do Time"',
        faction: 'Jocks',
        color: '#122A50',
        img: 'https://i.imgur.com/deIyDhW.jpeg',
        imgPos: 'center 30%',
        desc: 'O Linebacker dos Bullhorns personifica energia explosiva e agilidade atlética. Com 1,75m e musculatura definida, sua vantagem é a velocidade de reação e capacidade de cobrir grandes distâncias em segundos, sendo um dos atletas mais rápidos do time.',
        skills: ['Wrestling Intermediário', 'Atleta em Ascensão', 'Segundo Vento', 'Salvador da Pátria (Merecimento/Mercado - R$ 15,00)', 'Superman Punch (Merecimento/Mercado - R$ 15,00)']
      },
    ],
    bullies: [
      {
        title: 'Maestro das Pegadinhas — R$ 25,00',
        subtitle: '"Os Mestres das Pegadinhas"',
        faction: 'Bullies',
        color: '#c5c5c5',
        img: 'https://i.imgur.com/MlJOJ1U.jpeg',
        imgPos: 'center 20%',
        desc: 'Combatente sinuoso e ardiloso, sem apego a regras. Especialista em armadilhas improvisadas e controle estratégico do perímetro, sabotando a mobilidade inimiga antes mesmo dos golpes. Usa artefatos inusitados para ludibriar adversários.',
        skills: ['Arsenal de Pegadinhas', 'Armadilheiro', 'Reposicionamento Tático', 'Presentinho Perverso (Merecimento/Mercado - R$ 15,00)', 'Suporte de Combate (Merecimento/Mercado - R$ 15,00)']
      },
      {
        title: 'Gigante dos Bullies — R$ 25,00',
        subtitle: '"Os Monstros do Estacionamento"',
        faction: 'Bullies',
        color: '#c5c5c5',
        img: 'https://i.imgur.com/OMBE0IB.jpeg',
        imgPos: 'center 15%',
        desc: 'Personificação da força bruta. Com 1,80m e físico parrudo, usa peso e táticas trapaceiras para encurralar adversários. Protege o estacionamento contra incursões, garantindo que ninguém cruze os limites sem pagar o preço.',
        skills: ['Abraço de Urso', 'Ataque Surpresa', 'Trapaceiro de Bullworth', 'Covardia Matinal (Merecimento/Mercado - R$ 15,00)', 'Casca Grossa (Merecimento/Mercado - R$ 15,00)']
      },
    ],
    nerds: [
      {
        title: 'Mago Alquimista — R$ 25,00',
        subtitle: '"Os Viciados em D&D"',
        faction: 'Nerds',
        color: '#30622D',
        img: 'https://i.imgur.com/BfJAN85.jpeg',
        imgPos: 'center 25%',
        desc: 'Clássico nerd que levou RPG a sério demais. Baixinho e frágil, compensa a falta de músculos com inteligência genial. Em vez de confrontos diretos, usa conhecimento científico e criatividade para virar o jogo à distância.',
        skills: ['Mestrando a Química', 'Palavra de Poder', 'Fórmula da Coceira', 'Feitiço do Extintor (Merecimento/Mercado - R$ 15,00)', 'Poção da Velocidade (Merecimento/Mercado - R$ 15,00)']
      },
      {
        title: 'Hacker do Campus — R$ 25,00',
        subtitle: '"Os Gênios da Escola"',
        faction: 'Nerds',
        color: '#30622D',
        img: 'https://i.imgur.com/1rFzpn7.jpeg',
        imgPos: 'center 20%',
        desc: 'Domina redes locais, sistemas escolares e dispositivos eletrônicos. Prefere a sutileza do código: controla o Wi-Fi, manipula aparelhos à distância e usa a tecnologia do ambiente para ditar as regras do jogo.',
        skills: ['Mestre dos Códigos', 'Bloqueio de Sinal', 'Rastreador de Dispositivos', 'Drone de Espionagem (Merecimento/Mercado - R$ 15,00)', 'Vazamento de Dados (Merecimento/Mercado - R$ 15,00)']
      },
    ],
    preppies: [
      {
        title: 'Pugilista Desafiante — R$ 25,00',
        subtitle: '"Os Prodígios dos Ringues"',
        faction: 'Preppies',
        color: '#8FC1E5',
        img: 'https://i.imgur.com/idUgJ0l.jpeg',
        imgPos: 'center 20%',
        desc: 'Linha de frente do combate em pé. Busca espaço com combinações rápidas, posicionamento rígido e precisão. Especialista em ler movimentos do adversário para ditar o ritmo, quebrar defesas e buscar o nocaute.',
        skills: ['Nobre Arte', 'Pesadelo dos Ringues', 'Agilidade Combativa', 'Combinações de Boxe (Merecimento/Mercado - R$ 15,00)', 'Reflexos Apurados (Merecimento/Mercado - R$ 15,00)']
      },
      {
        title: 'Diplomata Ilustre — R$ 25,00',
        subtitle: '"Os Donos do Tabuleiro"',
        faction: 'Preppies',
        color: '#8FC1E5',
        img: 'https://i.imgur.com/tjLaoJF.jpeg',
        imgPos: 'center 15%',
        desc: 'Dita o ritmo do ambiente através do prestígio do sobrenome, retórica afiada e recursos financeiros. Atua na desestabilização psicológica, usando subornos e tráfico de influência para isolar ameaças.',
        skills: ['Treinamento Marcial', 'Imunidade Diplomática', 'Gestão de Crise', 'Safezone (Merecimento/Mercado - R$ 15,00)', 'Isolamento de Alvo (Merecimento/Mercado - R$ 15,00)']
      },
    ],
    greasers: [
      {
        title: 'Carniceiro da Oficina — R$ 25,00',
        subtitle: '"Os Sanguinários do Beco"',
        faction: 'Greasers',
        color: '#1f1f1f',
        img: 'https://i.imgur.com/yPWEYUL.png',
        imgPos: 'center 25%',
        desc: 'Combatente perigoso e sanguinário que dita ritmo avassalador. Prioriza causar dano máximo com ofensiva perfeita, usando golpes poderosos para subjugar adversários pela força bruta e persistência.',
        skills: ['Nak Muay', 'Sanguinário', 'Joelhada Voadora', 'Combo Descolado (Merecimento/Mercado - R$ 15,00)', 'Cotovelada Giratória (Merecimento/Mercado - R$ 15,00)']
      },
      {
        title: 'Protetor do Beco — R$ 25,00',
        subtitle: '"Os Guardiões da Oficina"',
        faction: 'Greasers',
        color: '#1f1f1f',
        img: 'https://i.imgur.com/epnSD9U.png',
        imgPos: 'center 30%',
        desc: 'Combina robustez física com pragmatismo das ruas. Equilíbrio entre tamanho e agilidade, demonstrando habilidade corporal para se mover com rapidez e reagir com precisão a qualquer ameaça.',
        skills: ['Oito Armas', 'Contenção Forçada', 'Bloqueio Reforçado', 'Marca do Protetor (Merecimento/Mercado - R$ 15,00)', 'Chute Descolado (Merecimento/Mercado - R$ 15,00)']
      },
    ],
    cheerleaders: [
      {
        title: 'Garota Popular — R$ 25,00',
        subtitle: '"As Estrelas em Ascensão"',
        faction: 'Cheerleaders',
        color: '#D4537E',
        img: 'https://i.imgur.com/rIAUdSY.jpeg',
        imgPos: 'center 20%',
        desc: 'Carisma magnético e brilho natural. Atrai olhares e conquista atenção com facilidade. Sua presença dita o ritmo social, permitindo conseguir favores, desviar atenções e usar a popularidade como ferramenta de influência.',
        skills: ['Influencer de Bullworth', 'Tratamento VIP', 'Língua Afiada', 'Spray de Pimenta (Merecimento/Mercado - R$ 15,00)', 'Megafone (Merecimento/Mercado - R$ 15,00)']
      },
    ],
    press: [
      {
        title: 'Detetive de Bullworth — R$ 25,00',
        subtitle: '"Os Investigadores da Escola"',
        faction: 'Bullworth Press',
        color: '#c9a84c',
        img: 'https://i.imgur.com/RNk7x9y.jpeg',
        imgPos: 'center 25%',
        desc: 'Olhos e ouvidos dos bastidores. Munido de equipamentos tecnológicos e perspicácia aguçada, não busca confronto físico, mas controle absoluto das narrativas. Registra deslizes e molda a opinião pública.',
        skills: ['Edição de Fatos', 'Microfone Oculto', 'Selfie Stick', 'Óculos Gravador (Merecimento/Mercado - R$ 15,00)', 'Contato de Emergência (Merecimento/Mercado - R$ 15,00)']
      },
    ],
  }
};

// ============================================================
// LINHAGENS DATA
// ============================================================
const LINHAGENS_DATA = [
  {
    id: 'smith',
    nome: 'Família Smith',
    desc: 'Os membros da Família Smith operam nas sombras da mente humana, agindo como verdadeiros lobos em pele de cordeiro. Donos de uma astúcia perturbadora e de uma capacidade inigualável de arquitetar planos complexos, os herdeiros dessa linhagem dominam o corpo estudantil não pelo vigor físico, mas pelo controle psicológico absoluto. Através de uma fachada carismática e de uma lábia refinada, eles distorcem a realidade, conquistam a confiança cega de aliados e destroem a reputação de rivais com a precisão de um enxadrista social.',
    habilidades: [
      {
        titulo: 'Diabo Falante',
        texto: 'O Smith é mestre na arte da oratória, superando a capacidade argumentativa de qualquer estudante ou funcionário do campus. Suas mentiras e manipulações são tão bem estruturadas que se tornam fatos indiscutíveis na mente de quem as escuta, afetando calouros e veteranos. A única maneira de rebater suas afirmações é através da apresentação de provas concretas; do contrário, diante qualquer brecha, ele pode arruinar reputações permanentemente ou supervalorizar aliados conforme seus objetivos, controlando as narrativas do internato. <strong>Para além disso, o Smith também consegue manipular pessoas a fazerem favores através de ordens verbais simples para calouros e veteranos, como uma capacidade hipnótica, muito tentadora, para que o defendam, o entreguem ou peguem algo, entre outros atos que se enquadrem como favores. Vale ressaltar as delimitações da habilidade, como não fazer membros de camarilhas se voltarem contra seus líderes, e nada absurdo</strong>.'
      },
      {
        titulo: 'Aprendiz de Maquiavel',
        texto: 'Através de sua ampla rede de contatos e transações nos bastidores do campus, o Smith detém um pequeno arsenal de itens utilitários sempre à disposição. Até três vezes por situação, ele pode vasculhar seus bolsos e sacar instantaneamente um dos seguintes recursos para criar distrações ou armadilhas no cenário: um saco de bolinhas de gude (para derrubar perseguidores), um firecracker (bombinha para atordoar ou explodir caixas), uma bomba de fedor (para dispersar grupos) ou um spray de tinta (para vandalismo ou obstrução visual rápida).'
      },
      {
        titulo: 'Pistola de Tomates',
        texto: 'O Smith carrega uma arma customizada de longo alcance com munição ilimitada, cujo alcance atinge até sete quadrados de distância sem a necessidade de gastar ações para mirar. O equipamento pode realizar apenas cinco disparos por situação. A arma dispara projéteis compactados que cegam temporariamente o alvo por um turno ao atingirem o rosto, impossibilitando a percepção de golpes subsequentes. Para nocautear calouros basta 3 disparos sucessivos na cabeça ou regiões sensíveis, para lidar com veteranos basta 5 disparos, vice-líderes 8 disparos e líderes 12; os alvos, quando atingidos por metade do que é necessário para serem nocauteados, ficam desnorteados, o que é um efeito negativo que dificulta ações de defesa, ataque ou locomoção.'
      }
    ]
  },
  {
    id: 'harrington',
    nome: 'Família Harrington',
    desc: 'Os membros da Família Harrington estão no topo absoluto da hierarquia financeira e social de Bullworth. Acostumados desde o berço a serem tratados como intocáveis, os herdeiros dessa linhagem não conhecem o significado de vulnerabilidade. Eles enxergam o campus e a cidade como extensões de suas propriedades e utilizam uma rede massiva de proteção privada, influência corporativa e recursos exclusivos para garantir que sua soberania jamais seja contestada pelos demais alunos.',
    habilidades: [
      {
        titulo: 'Seguranças de Luxo',
        texto: 'O Harrington conta com proteção constante devido ao alto patrocínio de sua família. Enquanto estiver nas redondezas do território dos mauricinhos, ele possui a guarda permanente de dois monitores pagos para protegê-lo de quaisquer ameaças. Quando estiver longe de seus domínios, ele pode efetuar uma chamada discreta em seu celular para acionar um monitor particular, que chegará em exatamente dois turnos para escoltá-lo em segurança até a Mansão Harrington. Contudo, caso os adversários percebam a ação a tempo, o chamado no celular pode ser interrompido ou impedido fisicamente antes de ser concluído.'
      },
      {
        titulo: 'Soqueira Dourada',
        texto: 'Forjada como um verdadeiro artefato de status nos círculos exclusivos da Aquaberry, a soqueira da família é moldada em ouro maciço de alta densidade. Uma vez por combate, o personagem pode desferir um golpe crítico, extremamente preciso, com a peça direcionado à cabeça do alvo. Se conectar de forma limpa, o impacto ocasiona o knockdown (queda) imediato de adversários de mesmo nível hierárquico, sem nocauteá-los. Contra alvos de nível superior ou mais robustos, o baque não os derruba, mas os deixa severamente abalados e com o poder ofensivo debilitado no turno seguinte.'
      },
      {
        titulo: 'Influência Harrington',
        texto: 'Carregando o nome de maior representatividade entre a elite, o Harrington possui um poder de liderança inquestionável, sendo capaz de motivar um de seus aliados em combate através de ordens diretas. Como consequência prática, no turno seguinte ao comando, o aliado selecionado recebe uma bonificação à sua escolha: ele poderá desferir um golpe potencializado capaz de atravessar qualquer proteção adversária ou ativar uma resistência antinocaute que garantirá a sua permanência de pé no confronto.'
      }
    ]
  },
  {
    id: 'gauthier',
    nome: 'Família Gauthier',
    desc: 'Os membros da Família Gauthier representam o ápice do prestígio financeiro e da influência aristocrática dentro de Bullworth. Herdeiros de fortunas colossais e acostumados com os privilégios da alta estirpe, os Gauthier desdenham do esforço físico bruto, preferindo resolver seus problemas através do poder do dinheiro, de conexões influentes ou de aparatos de defesa tecnológica de última geração. Para esta linhagem, o controle social e a preservação de sua integridade vêm sempre em primeiro lugar.',
    habilidades: [
      {
        titulo: 'Lábia Aristocrática',
        texto: 'O Gauthier possui uma eloquência e um magnetismo pessoal superiores aos demais estudantes do internato. Unindo seu imenso poder monetário a uma capacidade de persuasão única, ele consegue formular argumentos refinados que poucos ousam ignorar. Quando envolvido em uma situação de risco — como ser emboscado em território rival após uma negociação mal sucedida —, ele pode utilizar sua fala para convencer os oponentes a desistirem de suas intenções agressivas e permitirem sua retirada imediata. Esta habilidade também pode ser direcionada a monitores e autoridades do campus para sair impune de infrações e advertências.'
      },
      {
        titulo: 'Armamento de Bolso',
        texto: 'Mantendo a classe e as exigências da alta sociedade, o Gauthier prefere não sujar as mãos no combate corpo a corpo, recorrendo a um spray de pimenta dourado de pequeno porte. O dispositivo pode ser utilizado até três vezes por situação e possui alcance de até um quadrado de distância. Caso atinja o alvo em cheio, provoca cegueira total por um turno inteiro. Mesmo que o adversário consiga mitigar o impacto parcial, a irritação da fórmula anula completamente qualquer capacidade de ataque do oponente no turno seguinte.'
      },
      {
        titulo: 'Legado Gauthier',
        texto: 'Devido a uma mesada extremamente generosa, o herdeiro tem acesso financeiro a praticamente qualquer coisa no campus, podendo utilizar esses recursos para auxiliar e financiar as necessidades da camarilha dos Preppies. Adicionalmente, para sua segurança pessoal a curtíssima distância, ele carrega um taser de autodefesa portátil. O dispositivo só pode ser acionado a queima-roupa e, ao descarregar o choque elétrico, deixa a vítima completamente incapacitada de desferir ataques pelo período de um turno.'
      }
    ]
  },
  {
    id: 'taylor',
    nome: 'Família Taylor',
    desc: 'Os membros da Família Taylor carregam o sangue, a opulência e o refinamento técnico de Bif Taylor, o eterno campeão dos ringues de Bullworth. Criados sob a rígida disciplina do Glass Jaw Boxing Club, os herdeiros desta linhagem desdenham da brutalidade desorganizada das ruas, opondo-se aos rivais com uma postura impecável, esquivas milimétricas e contragolpes cirúrgicos. Para um Taylor, o combate não é uma simples briga, mas uma exibição de superioridade e maestria.',
    habilidades: [
      {
        titulo: 'Opulenta Tenacidade',
        texto: 'Honrando o legado de sua linhagem, o Taylor demonstra uma resistência e perseverança muito acima da média. Os treinos exaustivos e a bagagem de ringue forjaram sua marca registrada: a recusa absoluta em aceitar a derrota. Uma vez por combate, o personagem pode resistir a um golpe que o nocautearia em circunstâncias normais, erguendo-se imediatamente para provar a obstinação de quem carrega o sangue de um campeão.'
      },
      {
        titulo: 'Um Passo à Frente',
        texto: 'O Taylor possui uma percepção de combate extremamente aguçada, sendo capaz de antecipar as ações de seus oponentes com facilidade. Uma vez por combate, ao prever uma ofensiva adversária iminente, ele pode reagir a ela de forma perfeita através de uma esquiva limpa ou um bloqueio técnico inviolável. Esse feito técnico demonstra a herança e o talento de um verdadeiro pugilista da elite, anulando completamente a iniciativa do rival naquele turno.'
      },
      {
        titulo: 'Dupla Familiar',
        texto: 'Uma vez por combate, o Taylor pode lançar uma combinação clássica e devastadora: dois socos desferidos em uma sequência extremamente rápida, precisa e elegante. Ao utilizar esta habilidade, os efeitos dos impactos variam de acordo com a hierarquia do oponente no campus:<br><br>— Alunos de nível hierárquico inferior: São derrubados no chão instantaneamente, incapazes de agir no turno seguinte.<br>— Alunos de mesmo nível hierárquico: Ficam atordoados e na iminência imediata de um nocaute.<br>— Alunos de nível hierárquico superior: Sofrem um impacto severo que deixa sequelas físicas, reduzindo drasticamente suas capacidades de movimentação e reação até o fim da luta.'
      }
    ]
  },
  {
    id: 'vincent',
    nome: 'Família Vincent',
    desc: 'Os membros da Família Vincent carregam o espírito rebelde, a postura implacável e o legado das ruas que imortalizaram o lendário Johnny Vincent. Forjados em ambientes hostis e acostumados a resolver seus impasses através da força e da técnica rudimentar, os herdeiros dessa linhagem combinam a agressividade das brigas de beco com a precisão de artes marciais devastadoras. Eles não lutam apenas para vencer, mas para dominar o ritmo do confronto e deixar marcas profundas em qualquer um que ouse cruzar seu caminho.',
    habilidades: [
      {
        titulo: 'Corte de Ignição',
        texto: 'O Vincent possui uma assinatura especial transmitida de geração em geração, que concede aos membros desta linhagem um trunfo valioso e aos seus adversários um pesadelo ancestral. Uma vez por combate, o herdeiro pode recorrer ao movimento mais temido da família: um brutal axe kick (chute machado) aperfeiçoado ao longo dos anos. Caso o golpe atinja o adversário em cheio, o impacto é tão violento e preciso que deixa a vítima completamente imobilizada durante um turno inteiro, tornando-a incapaz de reagir, assumir posições defensivas ou realizar recuos para se proteger de ataques subsequentes.'
      },
      {
        titulo: 'Engate Forçado',
        texto: 'Forjado nas ruas e nos becos de Bullworth, o Vincent traz o Muay Thai como sua principal arma de combate. As brigas sem regras e marcadas por táticas desleais o forçaram a desenvolver uma técnica implacável para explorar um dos maiores trunfos do seu estilo: o clinch. Uma vez por combate, logo após realizar uma esquiva com sucesso, o personagem executa uma investida rápida e prende o adversário em um clinch perfeito, inevitável por meio do bloqueio convencional. Devido ao grande esforço físico exigido para manter a posição, o domínio sobre o oponente dura pelo período de dois turnos, sendo desfeito logo em seguida pelo desgaste.'
      },
      {
        titulo: 'Lâminas com Graxa',
        texto: 'Os chutes de um Vincent são lapidados da forma mais rudimentar e dolorosa possível, cortando como uma lâmina e perfurando como a ponta de uma lança. Até duas vezes por combate, respeitando um intervalo de um turno entre cada uso, o membro desta linhagem pode desferir um golpe devastador à sua escolha:<br><br><strong>Low Kick:</strong> Ao atingir uma das pernas do adversário, invalida o membro atingido durante o turno seguinte inteiro.<br><br><strong>Middle Kick:</strong> Ao atingir a região das costelas, deixa o oponente completamente sem ar por um turno inteiro. Em ambas as situações, o adversário ainda poderá tentar se defender ou realizar movimentos de esquiva, porém com uma probabilidade de sucesso drasticamente reduzida devido à sua condição debilitada.'
      }
    ]
  },
  {
    id: 'west',
    nome: 'Família West',
    desc: 'Os membros da Família West carregam em suas veias a herança esportiva e a imponência física de uma das maiores lendas que já passou pelos campos de Bullworth Academy, Damon West. Conhecidos por seu porte atlético invejável, estatura elevada e força natural, os West dominam o cenário escolar através da dominância física e do espírito competitivo. Eles não apenas entram nos ambientes para competir, mas para estabelecer o padrão de vigor e resistência que define a vanguarda dos atletas.',
    habilidades: [
      {
        titulo: 'Herança Marcial',
        texto: 'Herdando as técnicas de solo e os treinos exaustivos nos tapetes da escola, o integrante da família detém um domínio técnico avançado na luta agarrada. Ele é capaz de aplicar quedas precisas e torções complexas com fluidez, além de conseguir se movimentar e transicionar posições no chão com extrema facilidade para conter adversários.'
      },
      {
        titulo: 'Porte Atlético',
        texto: 'Dotado de uma genética privilegiada, o West possui uma estatura imponente de 1,85 m e uma excelente preparação física. Quando livre de ameaças diretas e fora de confrontos, sua velocidade corporal permite que ele cruze o cenário correndo até cinco quadrados por turno. Adicionalmente, sua resiliência natural permite que ele, uma vez por combate, consiga resistir a um golpe que o levaria diretamente ao nocaute, permanecendo ativo no embate.'
      },
      {
        titulo: 'Capacete de Futebol Americano',
        texto: 'O personagem carrega consigo um capacete reforçado do time da escola, que pode ser equipado em qualquer dependência do campus para conceder uma defesa muito acima da média. Devido à sua estrutura rígida, o equipamento é capaz de anular completamente até dois impactos direcionados à cabeça antes de se romper. Uma vez destruído, o item só poderá ser utilizado novamente no dia seguinte.'
      }
    ]
  },
  {
    id: 'hopkins',
    nome: 'Família Hopkins',
    desc: 'Você é a representação de lobo solitário, uma pessoa que prefere agir por interesses próprios diante de uma guerra territorial gigantesca. O recém chegado Rebelde de Bullworth é uma força tremenda que desequilibra a noção que os veteranos e líderes têm dos calouros, com potencial para sobrepujar até mesmo os maiores dos maiores. Seja para o bem ou para o mal, sua figura é a prova de que nem sempre os recém-chegados são feitos para seguirem o curso natural das coisas, pois você é contracorrente diante tudo que Bullworth Academy impõe. Sem se encaixar em lugar algum, você decidiu tomar as rédeas da situação para usufruto próprio, um verdadeiro terror e general de seu próprio exército de um só homem.',
    habilidades: [
      {
        titulo: 'Prodígio Marcial',
        texto: 'O Hopkins demonstra uma aptidão física e de combate muito superior à média dos alunos de sua idade. Ele tem direito a escolher dois estilos de luta (entre striking ou grappling) em nível avançado no início do jogo. Sua agilidade em combate permite realizar até duas combinações por confronto, executando dois ataques ou dois bloqueios (nas mesmas regiões corporais ou em áreas diferentes) em um único turno. Sua resistência física equivale à de um veterano comum e, devido ao seu equilíbrio, ele tem o direito de resistir e escapar automaticamente da primeira tentativa de queda ou imobilização (busted) que sofrer em uma cena.'
      },
      {
        titulo: 'Esforço Estudantil',
        texto: 'Demonstrando uma dedicação incomum aos estudos práticos, o Hopkins utiliza seu aprendizado nas aulas de química para manter um pequeno laboratório improvisado em seu dormitório. Ele é capaz de produzir e portar simultaneamente até duas bombas de fedor e um firecracker. Uma vez utilizados, os compostos devem ser reabastecidos retornando ao dormitório.'
      },
    
        {
  titulo: 'Conquistador Escolar',
  texto: `O Hopkins inicia o ano equipado com um skate (que aumenta sua movimentação para sete quadrados por turno com alta velocidade) e um estilingue comum (com alcance de seis quadrados, capaz de atordoar calouros com quatro disparos na cabeça e veteranos com cinco). Conforme desafia e derrota as lideranças do campus, ele absorve os seguintes espólios e privilégios:

<br><br>Ao derrotar o Líder <strong style="color:#30622D;">Nerd</strong>: Recebe o Super Estilingue (alcance de dez quadrados, sem necessidade de mira prévia; nocauteia calouros com três tiros na cabeça, veteranos com quatro, e tenentes com seis). Uma vez por dia, ganha acesso à Spud Gun para um único disparo de batata com alcance de quatro quadrados (nocauteia calouros ou veteranos, semi-nocauteia vice-líderes comuns e desorienta líderes); a arma quebra após o uso e exige um dia inteiro no dormitório para ser remontada.

<br><br>Ao derrotar o Vice-Líder <strong style="color:#8FC1E5;">Preppie</strong>: Desbloqueia o estilo de boxe avançado e ganha a capacidade de realizar duas esquivas consecutivas uma vez por combate.

<br><br>Ao derrotar o Líder <strong style="color:#8FC1E5;">Preppie</strong>: Conquista uma suíte na Mansão Harrington com despesas pagas, acesso ilimitado às roupas de grife Aquaberry e o direito de pilotar um veículo do ano.

<br><br>Ao derrotar o Líder <strong style="color:#122A50;">Jock</strong>: Adquire wrestling avançado e um taco de baseball que pode ser utilizado uma vez por combate, durante o período de três turnos.

<br><br>Ao derrotar o Líder <strong style="color:#c5c5c5;">Bullie</strong>: Sua resistência física permanente é elevada ao nível de um líder de camarilha. Uma vez por combate, ele pode resistir a um golpe que o nocautearia e passa a ter acesso a um arsenal de pegadinhas (pó de mico, ovos, spray de tinta e bolinhas de gude).

<br><br>Ao derrotar o Líder <strong style="color:#1f1f1f;">Greaser</strong>: Garante o uso de uma motocicleta de última geração e aprende um chute devastador na cabeça que nocauteia qualquer alvo comum instantaneamente; se atingir um líder de camarilha, o chute não o nocauteia, mas o deixa incapacitado de atacar ou defender no turno seguinte e reduz a resistência de nocaute do líder para apenas quatro golpes na cabeça.

<br><br>Ao derrotar a Líder <strong style="color:#D4537E;">Cheer</strong> (Fora de Combate): Conquista reputação máxima no campus. O status de Fama garante presença VIP em todos os eventos, impedindo-o de ser expulso de festas ou cerimônias. O status de Charme permite influenciar e seduzir personagens de sua preferência com facilidade nos diálogos.`
}
    ]
  }
];

// ============================================================
// FUNÇÃO AUXILIAR PARA NORMALIZAR NOMES DE HABILIDADES
// ============================================================
function normalizarNomeHabilidade(nome) {
  // Remove sufixos como " (Merecimento/Mercado)" ou " (Merecimento/Mercado - R$ 15,00)"
  return nome.replace(/\s*\([^)]*\)\s*$/, '').trim();
}

// ============================================================
// FUNÇÃO PARA OBTER DESCRIÇÃO COMPARANDO NOMES NORMALIZADOS
// ============================================================
function obterDescricao(nome) {
  const nomeNormalizado = normalizarNomeHabilidade(nome);
  for (const key in HABILIDADES_DESC) {
    if (normalizarNomeHabilidade(key) === nomeNormalizado) {
      return HABILIDADES_DESC[key];
    }
  }
  return null; // não encontrou
}

// ============================================================
// DESCRIÇÕES DETALHADAS DAS HABILIDADES
// ============================================================
const HABILIDADES_DESC = {
  // ============================================================
  // JOCKS - HABILIDADES GERAIS
  // ============================================================
  'Fundamentos do Wrestling': 'O Titã detém conhecimento básico de wrestling escolar, dominando agarrões simples, quedas diretas e torções rudimentares. Embora não possua técnica refinada ou acesso a movimentos complexos, sua força e massa corporal tornam esses fundamentos especialmente eficazes em combates próximos, permitindo controlar, imobilizar ou derrubar adversários menos preparados.',
  'Constituição Titânica': 'Seu corpo é naturalmente mais resistente que o de indivíduos comuns, permitindo-lhe suportar um volume maior de pancadas antes de sucumbir. Embora não seja imune a ataques bem executados, como investidas sorrateiras e golpes limpos, o Titã permanece de pé por mais tempo, absorvendo danos que derrubariam outros combatentes. Pode, uma vez por combate, resistir a um golpe que o levaria ao nocaute.',
  'Brutalizador': 'O Titã possui uma força física invejável, muito acima da média para sua idade. Seus golpes carregam impacto elevado, aptos a quebrar defesas rudimentares, empurrar adversários e causar dano significativo mesmo sem técnica avançada, tornando-o extremamente perigoso em confrontos diretos. Pode, uma vez por combate, lançar um poderoso soco que, se acertar a cabeça, é capaz de nocautear imediatamente calouros, veteranos e tenentes. Líderes e vice-líderes representam a exceção.',
  'Fúria do Titã (Merecimento/Mercado)': 'Tomado por um surto de raiva extrema, o Titã entra em um estado de descontrole que dura 3 turnos. Durante esse período, ele ignora a dor para continuar avançando, suportando pancadas que normalmente o derrubariam. Quando em vigor, o personagem torna-se imune a qualquer tipo de nocaute, agindo como uma besta descontrolada; mesmo habilidades adversárias projetadas para apagá-lo imediatamente falham em pará-lo. Contudo, assim que o tempo termina, o impacto de todo o dano recebido é cobrado de uma só vez. Esta habilidade pode ser utilizada apenas uma vez por combate.',
  'Avanço Irrefreável (Merecimento/Mercado)': 'O Titã é capaz de executar um avanço brutal contra um adversário, ignorando os danos recebidos durante a investida para desferir uma poderosa ombrada. Caso o ataque seja bem-sucedido, o alvo é inevitavelmente derrubado. Este golpe não pode ser defendido, apenas esquivado, e só pode ser utilizado duas vezes por combate.',
  'Wrestling Intermediário': 'Embora detenha um domínio intermediário no wrestling, seu verdadeiro trunfo reside em uma vertente que emprega movimentos altamente eficientes: as finalizações. Você é capaz de aplicar chaves, torções e técnicas de submissão com precisão e força, tornando-se uma ameaça constante no combate agarrado, especialmente contra adversários sem preparo técnico nessa área. Sua capacidade de controle no solo permite neutralizar movimentos e limitar reações, estabelecendo vantagem progressiva durante o confronto. Ademais, sua robustez física lhe concede a capacidade de, uma vez por combate, resistir a um golpe que o levaria ao nocaute, mantendo-se consciente mesmo sob forte impacto.',
  'Atleta em Ascensão': 'Fruto de uma rotina rigorosa de cardio e treinos de explosão, sua excelente preparação física permite que ele cruze o cenário correndo até 4 quadrados por turno. Adicionalmente, essa velocidade avassaladora é refletida diretamente no combate: uma vez por confronto, o personagem pode disparar em um arranque explosivo, travando a linha de visão e investindo diretamente contra as pernas do oponente. Por conta do fator surpresa e do ímpeto da corrida, essa queda específica não pode ser bloqueada por meios convencionais, restando ao alvo apenas a chance de esquivar a tempo.',
  'Segundo Vento': 'Dotado de um fôlego privilegiado e excelente capacidade de absorção, o atleta consegue se recuperar rapidamente do desgaste físico. Uma vez por combate, ele pode anular os efeitos de confusão e atordoamento logo após receber um golpe, limpando o debuff imediatamente. Esta habilidade funciona estritamente como uma recuperação de status para retomar o ritmo da luta, não devendo ser confundida com uma mecânica de antinocaute.',
  'Salvador da Pátria (Merecimento/Mercado)': 'Uma vez por combate, quando um adversário inicia ou já está em combate ativo contra um companheiro de camarilha, o Linebacker utiliza sua velocidade de reação para cortar a linha de avanço e desferir uma ombrada violenta contra o oponente. O impacto desse golpe não é capaz de anular um ataque em andamento do rival, nem de derrubá-lo no chão, mas serve para interromper o conflito em um instante crítico. Caso seja assertiva, a pancada força o agressor a mudar o foco imediatamente para o atleta, obrigando-o a assumir o confronto direto contra ele a partir daquele instante. Essa intervenção quebra o duelo que estava acontecendo com o aliado, garantindo a brecha necessária para que ele consiga recuar com segurança caso necessário.',
  'Superman Punch (Merecimento/Mercado)': 'O golpe assinatura do Linebacker utiliza o impulso completo de seu corpo para gerar uma potência devastadora. Uma vez por combate, o atleta projeta o corpo para o alto em um salto explosivo, desferindo um soco de cima para baixo. Por conta da força cinética e do ângulo da investida, esse ataque não pode ser defendido por meios convencionais, restando ao alvo apenas a chance de esquivar a tempo. Caso seja assertivo, o impacto derruba o oponente no chão imediatamente.',
  
  // ============================================================
  // PREPPIES - HABILIDADES GERAIS
  // ============================================================
  'Nobre Arte': 'O Pugilista Desafiante possui domínio intermediário do pugilismo, sendo capaz de executar esquivas anguladas, contra-ataques precisos, combinações eficazes e variações de ritmo. Seu entendimento do combate em pé permite explorar brechas, punir erros e manter vantagem técnica em trocações diretas, tendo como única desvantagem a ausência total de chutes. Devido a essa agilidade superior, o personagem consegue, naturalmente, executar esquivas mesmo à queima-roupa (0 quadrados).',
  'Pesadelo dos Ringues': 'Com mãos naturalmente pesadas, o combatente conecta golpes de impacto elevado capazes de causar danos severos. Uma vez por combate, ele pode desferir um soco projetado para perfurar a guarda do adversário, anulando defesas convencionais. O ataque ainda pode ser esquivado; contudo, caso o alvo utilize uma habilidade defensiva ativa para bloqueá-lo, ambos os efeitos se anulam, fazendo com que o defensor prevaleça.',
  'Agilidade Combativa': 'Dotado de elevada destreza e apurado senso de tempo, o Pugilista Desafiante é reconhecido por suas evasivas limpas e eficientes, deslocando-se no instante exato para evitar golpes. Duas vezes por combate, o personagem pode executar uma esquiva absoluta, anulando completamente os efeitos de um ataque direcionado a ele, desde que haja espaço físico mínimo para a movimentação.',
  'Combinações de Boxe (Merecimento/Mercado)': 'Acostumado a impor ritmo na trocação, o lutador é capaz de desferir uma sequência rápida de golpes. Uma vez por combate, ele pode executar três ataques em um único turno, representando uma combinação agressiva projetada para pressionar o adversário e reduzir drasticamente suas chances de reação.',
  'Reflexos Apurados (Merecimento/Mercado)': 'Duas vezes por combate, o Pugilista Desafiante pode recorrer à sua experiência nos ringues para antecipar uma ação de ataque do oponente. Ao prever o movimento, ele anula por completo o golpe direcionado a ele, o que inclui o cancelamento de ataques baseados em habilidades, gerando a oportunidade ideal para desferir contra-ataques precisos.',
  'Treinamento Marcial': 'O Diplomata Ilustre possui domínio intermediário do boxe, utilizando técnicas limpas de esquiva e golpes precisos em pé. Seu treinamento refinado confere uma agilidade defensiva superior, permitindo que ele, naturalmente, execute esquivas mesmo à queima-roupa (0 quadrados). Todavia, mantendo o padrão da modalidade, sua mecânica de combate é estritamente manual, resultando na ausência total de chutes.',
  'Imunidade Diplomática': 'Respaldado pelo prestígio de seu sobrenome, recursos financeiros e uma oratória altamente persuasiva, o personagem possui facilidade extrema para manipular narrativas diante de autoridades, que se mostram consideravelmente inclinadas a aceitar suas versões dos fatos. Devido a essa vivência nos bastidores da influência social, ele é totalmente imune a mentiras, blefes e manipulações psicológicas de terceiros, sendo capaz de intervir imediatamente para desmascarar fraudes e proteger aliados que estejam sendo enganados.',
  'Gestão de Crise': 'Através de palavras de comando firmes e de sua postura inabalável, o Diplomata Ilustre consegue reestabilizar o foco de um aliado sob pressão. Duas vezes por situação, ele pode remover efeitos mentais negativos (como medo, provocação ou hesitação) de si mesmo ou de um companheiro de camarilha, devolvendo imediatamente o controle total de suas ações.',
  'Safezone (Merecimento/Mercado)': 'O personagem utiliza sua influência e subornos prévios para garantir que determinada área ou sala do cenário seja considerada seu território seguro. Ao ativar esta habilidade, nenhuma autoridade entrará no perímetro selecionado pelo período de 5 turnos. Esta habilidade também pode ser empregada estrategicamente para retardar a aparição de monitores no quarto.',
  'Isolamento de Alvo (Merecimento/Mercado)': 'Através de ordens direcionadas e posicionamento estratégico, o Diplomata Ilustre consegue coordenar sua camarilha para cercar e isolar uma ameaça específica. Uma vez por combate, ele designa um oponente; por dois turnos, qualquer aliado que atacar esse alvo recebe uma vantagem ofensiva, desferindo golpes com impacto equivalente a um nível acima de seu atributo de Força atual, representando a pressão de um cerco planejado.',
  
  // ============================================================
  // GREASERS - HABILIDADES GERAIS
  // ============================================================
  'Nak Muay': 'O Carniceiro da Oficina detém um domínio intermediário de Muay Thai, fruto de seu duro treinamento ao longo dos anos. Através dessa disciplina, ele é capaz de desferir sequências contundentes de joelhadas, cotoveladas e chutes poderosos, além de aplicar clinches eficientes para controlar a distância e restringir os adversários. Essa bagagem técnica representa sua maior vantagem nos confrontos, garantindo-lhe grande versatilidade no combate corpo a corpo.',
  'Sanguinário': 'Uma vez por combate, o enjaquetado consegue desferir um golpe cortante contra o adversário utilizando o cotovelo. Seu maior trunfo consiste em atingir o supercílio do oponente, abrindo um corte profundo na região que prejudica a visão do alvo até o fim do confronto. Devido ao sangramento, o oponente afetado sofre a perda de um nível em Agilidade pelo restante da luta. Além disso, logo após o acerto, o alvo fica impossibilitado de esquivar por meios convencionais até receber dois golpes limpos.',
  'Joelhada Voadora': 'O movimento assinatura do Carniceiro da Oficina combina impulso e agressividade para gerar um impacto devastador. Uma vez por combate, o lutador salta em direção ao alvo e desfere uma joelhada potente. Devido à força da investida, esse ataque é capaz de quebrar guardas, tornando o bloqueio convencional inútil; a única resposta possível para o oponente é tentar a esquiva.',
  'Combo Descolado (Merecimento/Mercado)': 'Demonstrando uma coordenação perfeita, fruto de sua malandragem e agilidade, o enjaquetado consegue quebrar o ritmo convencional do confronto. Uma vez por combate, ele é capaz de desferir uma sequência rápida e devastadora de três golpes em um único turno, sobrecarregando as reações do adversário com a velocidade da investida.',
  'Cotovelada Giratória (Merecimento/Mercado)': 'Uma vez por combate, o lutador rotaciona o próprio corpo com velocidade para desferir uma poderosa cotovelada, capaz de infligir danos severos onde quer que atinja. Quando utilizada estritamente como contra-ataque, essa investida se torna impossível de ser bloqueada por meios convencionais. O maior trunfo dessa técnica consiste no fato de que, ao conectar o golpe em qualquer parte do rosto do oponente, o impacto reativa imediatamente os efeitos da habilidade Sanguinário, mesmo que ela já tenha sido gasta anteriormente no mesmo confronto.',
  'Oito Armas': 'Esta habilidade reflete o entendimento intermediário que o combatente possui sobre o Muay Thai, focando no uso pleno de seus membros como ferramentas de contenção e ataque. Na linha de frente, ele combina socos, chutes, joelhadas e cotoveladas para erguer uma barreira ofensiva difícil de transpor. Sua técnica se sobressai no uso de clinches firmes, desgastando o oponente e neutralizando investidas rápidas, o que garante estabilidade e controle absoluto do perímetro durante o confronto direto.',
  'Contenção Forçada': 'Uma vez por combate, o Protetor do Beco avança para enclausurar o rival em um clinch de contenção que dura três turnos. Sendo assertivo, o oponente fica totalmente encurralado, tornando-se incapaz de recorrer ao bloqueio ou à esquiva convencional para escapar da posição. Essa técnica possui dupla utilidade: na curta distância, o posicionamento favorece e potencializa o uso de joelhadas e cotoveladas; defensivamente, serve como um recurso estratégico de sobrevivência, permitindo ao usuário amarrar a luta após receber múltiplos impactos para ganhar fôlego e se recompor.',
  'Bloqueio Reforçado': 'Demonstrando uma resistência corporal formidável, o Protetor do Beco está acostumado a receber impactos pesados e absorvê-los com eficácia. Duas vezes por combate, ele consegue fechar sua defesa de forma intransponível para executar um bloqueio perfeito contra um ataque direto do adversário. Essa técnica consolida sua posição na linha de frente, permitindo que ele barre as investidas inimigas com solidez.',
  'Marca do Protetor (Merecimento/Mercado)': 'Os chutes do Protetor do Beco carregam uma potência brutal, capaz de castigar severamente os adversários. Caso ele consiga conectar três chutes na mesma região, o acúmulo de impactos debilitará severamente a movimentação do alvo por três turnos. Enquanto esse efeito persistir, o inimigo afetado fica completamente impossibilitado de utilizar esquivas convencionais. Esta habilidade só pode ser ativada uma vez por combate.',
  'Chute Descolado (Merecimento/Mercado)': 'Uma vez por combate, o Protetor do Beco desfere um chute circular alto mirando diretamente na lateral da cabeça do oponente. Caso o golpe seja assertivo, o tremendo impacto deixará o alvo atordoado por um turno inteiro, impedindo qualquer ação de sua parte. Líderes e vice-líderes são exceções a esta regra e não sofrem o efeito de atordoamento.',
  
  // ============================================================
  // BULLIES - HABILIDADES GERAIS
  // ============================================================
  'Arsenal de Pegadinhas': 'Munido de uma variedade de artefatos engenhosos para fins de distração, o Maestro das Pegadinhas sabe exatamente como desestabilizar o foco de seus oponentes. Duas vezes por combate, ele pode recorrer a este arsenal para utilizar um dos seguintes recursos de seu repertório: bombinha (firecracker), arremessando um pequeno artefato que detona com um estalo barulhento e um clarão repentino; ou spray de tinta, acionando uma lata de tinta aerossol diretamente em direção ao rosto do adversário para obscurecer sua visão com uma névoa colorida e forçá-lo a perder a precisão de suas ações imediatas.',
  'Armadilheiro': 'O Maestro das Pegadinhas carrega consigo um saco de bolinhas de gude que pode ser utilizado até três vezes por combate. Ao despejar essas esferas estrategicamente no chão, ele consegue exercer um forte controle sobre o campo de batalha. Cada utilização dessa habilidade compromete uma área de até dois quadrados do cenário; qualquer indivíduo que tente transitar por esse espaço perderá o equilíbrio e cairá imediatamente, criando verdadeiras armadilhas táticas para conter avanços inimigos.',
  'Reposicionamento Tático': 'Todos os integrantes dos Bullies compartilham de uma velocidade notável, e o Maestro das Pegadinhas não é exceção. Ao ativar este recurso, o usuário inicia uma corrida acelerada para se reposicionar estrategicamente no campo de batalha ou escapar de uma situação de perigo iminente, sendo capaz de percorrer uma distância de até 7 quadrados em uma única ação. Esta manobra só pode ser utilizada uma vez por combate.',
  'Presentinho Perverso (Merecimento/Mercado)': 'O Maestro das Pegadinhas revela o trunfo de seu arsenal: um tijolo robusto que serve como arma de arremesso de uso único. Caso o arremesso seja assertivo, o tremendo impacto deixará calouros, veteranos e tenentes atordoados por um turno inteiro, impedindo qualquer ação de sua parte. Líderes e vice-líderes são exceções a esta regra e não sofrem o efeito de atordoamento. Esta habilidade só pode ser utilizada uma vez por combate.',
  'Suporte de Combate (Merecimento/Mercado)': 'O Maestro das Pegadinhas pode se juntar aos aliados na famigerada covardia tática dos Bullies. Mesmo que o combate já tenha atingido o limite padrão de dois atacantes contra um único oponente (2x1), o usuário consegue interferir e transformar a disputa em uma desvantagem de três contra um (3x1). Esta habilidade funciona de forma passiva e pode ser aplicada livremente sempre que a oportunidade surgir.',
  'Abraço de Urso': 'Uma vez por combate, o gigante pode realizar uma investida corporal para prender um rival em um aperto esmagador. Se a manobra for assertiva, o alvo ficará completamente imobilizado por dois turnos inteiros, tornando-se uma presa fácil, totalmente vulnerável a ataques de outros integrantes dos Bullies que estejam por perto.',
  'Ataque Surpresa': 'Sempre que o Gigante dos Bullies desferir um ataque contra um adversário que esteja de costas ou distraído, sem ter percebido sua aproximação, e o golpe for bem-sucedido, o forte impacto causará grande dano ao alvo. Além disso, a investida inesperada deixará o oponente em um estado de confusão mental, impedindo-o de realizar qualquer tipo de ataque pelos próximos dois turnos. Este recurso só pode ser utilizado uma vez por combate.',
  'Trapaceiro de Bullworth': 'Duas vezes por combate, o Gigante dos Bullies pode desferir um pisão violento no pé do rival. Se o golpe for assertivo, o forte impacto impedirá o adversário de se movimentar por um turno inteiro, impossibilitando qualquer tentativa de fuga ou reposicionamento no campo de batalha. Além disso, quaisquer esquivas que demandem o movimento das pernas são totalmente inutilizadas enquanto o alvo estiver sob o efeito desta habilidade.',
  'Covardia Matinal (Merecimento/Mercado)': 'Uma vez por combate, o gigante pode marcar um adversário específico para se tornar o alvo de uma covardia total no campus. Enquanto estiver marcado, a regra padrão de combate individual é quebrada, e o limite natural de dois contra um (2x1) dos Bullies é excedido, permitindo que até quatro aliados ataquem o mesmo oponente simultaneamente (4x1). Esta marca tem uma duração de dois turnos.',
  'Casca Grossa (Merecimento/Mercado)': 'Uma vez por combate, o Gigante dos Bullies pode fazer uso de sua enorme resiliência física para resistir a um golpe que o levaria diretamente ao nocaute, permanecendo de pé e ativo no confronto com o mínimo de energia restante.',
  
  // ============================================================
  // NERDS - HABILIDADES GERAIS
  // ============================================================
  'Mestrando a Química': 'Graças à sua mente brilhante, o Mago Alquimista é capaz de produzir misturas químicas caseiras em seu laboratório improvisado. Ele pode levar até três bombinhas de fumaça ou de fedor para o combate, utilizando-as para desorientar os adversários, criar barreiras visuais no campo de batalha ou forçar recuos estratégicos.',
  'Palavra de Poder': 'Uma vez por combate, o Mago Alquimista pode disparar uma enxurrada de insultos e termos arrogantes contra os adversários. A provocação é tão irritante que os inimigos perdem o controle emocional e são forçados a mudar o foco de seus ataques exclusivamente para ele durante um turno. Essa mecânica de distração, enquanto em vigor, anula ações ofensivas em andamento contra outros alvos, abrindo uma brecha para que seus aliados fujam de situações de perigo ou se reposicionem no campo de batalha. Contudo, esta habilidade só pode ser utilizada em até três inimigos.',
  'Fórmula da Coceira': 'Graças ao seu intelecto brilhante e notas impecáveis em Química, o Mago Alquimista domina a manipulação de componentes caseiros como ninguém. Ele carrega consigo uma sacola de pó de mico de alta eficácia, que pode ser utilizada até três vezes por situação. Ao arremessar o pó nos adversários, a coceira intensa e insuportável serve como a distração perfeita para evitar inimigos e escapar de situações indesejadas sem a necessidade de um confronto físico.',
  'Feitiço do Extintor (Merecimento/Mercado)': 'Quando o combate ocorre no território dos Nerds, o Mago Alquimista pode empunhar um extintor de incêndio local para controlar o campo de batalha. O equipamento tem carga suficiente para durar três turnos, permitindo disparar rajadas de água e espuma diretamente contra o rosto dos inimigos. O impacto dessa substância prejudica severamente a visão dos alvos atingidos e os mantém afastados, impedindo temporariamente que se aproximem ou realizem ataques corpo a corpo.',
  'Poção da Velocidade (Merecimento/Mercado)': 'Uma vez por situação, o Mago Alquimista finge consumir uma poção mágica e, impulsionado por um surto de adrenalina pura gerado pelo medo de apanhar, inicia uma fuga desesperada. Esse pico de desespero e velocidade permite que ele corra até 6 quadrados de distância em uma única ação, sendo a ferramenta perfeita para evitar combates iminentes ou escapar de uma perseguição no campus.',
  'Mestre dos Códigos': 'Dono de um grande intelecto e conhecimento avançado de informática, o Hacker do Campus é capaz de quebrar a segurança de qualquer rede digital da escola. Ele consegue invadir sistemas locais com facilidade (como o circuito de câmeras de segurança, por exemplo) para obter vantagens estratégicas, coletar informações sigilosas, vigiar o campus ou sabotar dispositivos conectados, garantindo total controle informacional aos Nerds.',
  'Bloqueio de Sinal': 'Usando um pequeno dispositivo modificado ou um programa próprio em seu celular, o Hacker do Campus consegue derrubar o sinal de redes móveis e Wi-Fi em uma área específica, deixando todos os aparelhos ao redor completamente sem internet, com exceção do seu próprio. Ao cortar a comunicação geral, ele impede que qualquer pessoa envie mensagens, chame reforços ou acesse as redes sociais, isolando o local e deixando todo mundo no escuro. Esta habilidade pode ser usada duas vezes por dia e seu efeito perdura por seis turnos.',
  'Rastreador de Dispositivos': 'Através de um software instalado em seu celular, o nerd consegue rastrear o sinal de Wi-Fi ou Bluetooth do aparelho de um alvo específico. Ao sintonizar na frequência correta, ele descobre a localização exata do jogador na escola. Essa habilidade é ideal para localizar aliados ou inimigos, evitar emboscadas ou coordenar ações com o resto do grupo sem que o alvo saiba que está sendo monitorado. Esta habilidade pode ser utilizada duas vezes por dia.',
  'Drone de Espionagem (Merecimento/Mercado)': 'Através de um tablet conectado, o Hacker do Campus opera um drone projetado para reconhecimento e sabotagem, equipado com uma câmera embutida de alta qualidade que transmite imagem e som com total clareza. Para manter o controle do sinal, o nerd precisa estar no mesmo quarto que o dispositivo. Isso permite que ele manipule o drone livremente pelo cenário enquanto se esconde estrategicamente. O drone pode ser modificado para carregar e lançar até duas bombinhas por comando remoto, servindo como distração ou ataque. Quando operado durante a noite, sua estrutura se torna quase imperceptível no escuro, embora ainda emita ruído — fator que também pode ser customizado para reduzir o barulho e torná-lo ainda mais silencioso.',
  'Vazamento de Dados (Merecimento/Mercado)': 'Através de seu monitoramento na rede, o Hacker do Campus consegue enviar um spyware para o celular ou dispositivo de um alvo próximo. Para realizar essa invasão, ele precisa manter o seu próprio celular exposto em sua mão, a uma distância de até 4 quadrados da pessoa, permanecendo focado nessa ação por pelo menos três turnos para conseguir hackear o aparelho e ter acesso a tudo. Quando a habilidade é utilizada em ambientes lotados ou com o auxílio de uma boa distração, todo o processo ocorre de maneira quase imperceptível, permitindo que ele obtenha fotos embaraçosas e arquivos confidenciais para usar como moeda de troca. Se for interrompido, no entanto, terá de reiniciar o processo.',
  
  // ============================================================
  // CHEERLEADERS - HABILIDADES GERAIS
  // ============================================================
  'Influencer de Bullworth': 'A Garota Popular possui uma forte presença digital, acumulando uma quantidade expressiva de seguidores em suas redes sociais. Embora ainda seja uma figura em ascensão e uma estrela menor no cenário geral, seu engajamento no ambiente escolar é considerável, agindo como uma verdadeira webcelebridade local. Devido ao seu alcance e à confiança que transmite, ela possui facilidade extrema para propagar informações, validar boatos e espalhar mentiras com rapidez através de suas publicações, fazendo com que narrativas criadas por ela ganhem força imediata entre os alunos do campus.',
  'Tratamento VIP': 'Por ser o rosto popular da escola e uma figura de destaque, funcionários, monitores e alunos tendem a tratá-la de forma diferenciada. A Garota Popular possui uma lábia altamente refinada e um poder de persuasão natural, sendo capaz de convencer terceiros a realizarem pequenos favores ou mudarem de opinião com facilidade. Uma vez por situação, ela pode utilizar seu magnetismo social para intervir diante de uma autoridade, persuadindo-a a relevar uma infração menor ou limpar a barra de si mesma ou de um aliado próximo através de pura simpatia.',
  'Língua Afiada': 'A Garota Popular possui uma retórica extremamente sinuosa e envolvente, sabendo exatamente como conduzir um diálogo para atingir seus objetivos pessoais. Através de mentiras refinadas e uma lábia altamente persuasiva, suas palavras são tão convincentes que apenas indivíduos dotados de um intelecto acima da média conseguem decifrar suas reais intenções de imediato. Ela pode utilizar essa capacidade livremente durante interações sociais para extrair informações sigilosas e confissões de outros alunos através de conversas que, na maioria das vezes, aparentam ser banais e sem relevância.',
  'Spray de Pimenta (Merecimento/Mercado)': 'Precavida contra os perigos e as abordagens indesejadas dos corredores, a Garota Popular carrega um frasco de spray de pimenta em sua bolsa, que pode ser utilizado até três vezes por situação. Ao acionar o dispositivo contra um alvo a até 1 quadrado de distância, a substância atinge diretamente os olhos do oponente, deixando-o temporariamente incapacitado. O alvo atingido perde totalmente a visão imediata e fica impossibilitado de perseguir ou desferir qualquer golpe físico pelo período de dois turnos, permitindo que a personagem evite confrontos e escape facilmente de enquadros.',
  'Megafone (Merecimento/Mercado)': 'Como líder de torcida, ela tem acesso aos equipamentos da equipe e sabe perfeitamente como projetar sua voz. Duas vezes por situação, a Garota Popular pode utilizar um megafone para emitir um aviso sonoro ou uma ordem falsa no campus. O som proeminente gera uma distração imediata em uma área de 8 quadrados, confundindo os adversários e quebrando o foco de suas ações por um turno. Essa manobra serve estritamente como um recurso tático de dispersão, garantindo a brecha necessária para que ela ou seus aliados consigam fugir de situações indesejadas e recuar em segurança.',
  
  // ============================================================
  // BULLWORTH PRESS - HABILIDADES GERAIS
  // ============================================================
  'Edição de Fatos': 'O integrante do jornal domina as ferramentas de edição e diagramação como ninguém. Desde que possua uma informação ou registro básico sobre determinado acontecimento, ele é capaz de criar artigos e acoplar imagens de maneira extremamente convincente. Essa habilidade permite manipular a ordem dos fatos e distorcer os contextos como desejar através do jornal escolar, fazendo com que a versão publicada ganhe força imediata e mude a reputação de um alvo perante o corpo estudantil.',
  'Microfone Oculto': 'O repórter carrega consigo um microfone minúsculo acoplado de forma estratégica em sua vestimenta, tornando-o quase imperceptível. Este dispositivo de escuta serve exclusivamente para colher informações de bastidores e registrar diálogos comprometedores em até 2 quadrados. Como o acessório se mistura perfeitamente com o uniforme escolar, ele permite capturar áudios nítidos de reuniões ou conversas casuais sem despertar qualquer tipo de suspeita por parte dos envolvidos no perímetro.',
  'Selfie Stick': 'Uma vara telescópica robusta com suporte para dispositivos móveis que serve como ferramenta multifuncional. Em termos de exploração e espionagem, ela permite posicionar uma câmera de forma planejada em locais elevados ou de difícil acesso para filmar perímetros discretamente. Caso seja encurralado em situações caóticas de combate corpo a corpo, o repórter pode estender a estrutura robusta do bastão para utilizá-lo em sua autodefesa, desferindo golpes precisos capazes de desorientar temporariamente um adversário para garantir a brecha necessária para fugir. Em combate, quebra após três turnos de uso, só podendo ser utilizada novamente no dia seguinte.',
  'Óculos Gravador (Merecimento/Mercado)': 'Utilizando um artefato tecnológico discreto, o repórter consegue capturar áudio e vídeo em alta qualidade sem levantar suspeitas imediatas. Embora indivíduos dotados de um intelecto acima da média consigam notar a natureza incomum dos óculos, o funcionamento do dispositivo permanece uma incógnita, sendo impossível determinar com precisão se a gravação está ativa no momento. É o recurso perfeito para colher confissões desprevenidas e registrar atos inesperados pelo campus.',
  'Contato de Emergência (Merecimento/Mercado)': 'Através de sua rede de contatos e do trâmite de informações nos bastidores, o detetive possui uma ligação estreita com a monitoria da escola. Uma vez por situação, ele pode acionar um alerta diretamente em seu celular para notificar a segurança do campus sobre uma irregularidade em sua área. Após a ativação, uma dupla de monitores chegará ao local em exatamente três turnos. Essa autoridade pode ser utilizada de forma estratégica para interromper brigas em andamento, dispersar tumultos ou conter inimigos que estejam perseguindo o investigador nos corredores.',

  // ============================================================
  // JOCKS - HABILIDADES EXCLUSIVAS
  // ============================================================
  'Atleta Supremo': 'Sua constituição física representa o ápice da excelência atlética dentro de Bullworth Academy: com seus imponentes 1,95m de altura, forte, resistente e extremamente veloz, você encarna o ideal máximo de um atleta completo, ainda que sua força e constituição não alcancem o nível monstruoso do Gigante dos Bullies. Seu corpo, moldado para impacto e desempenho contínuo, permite-lhe percorrer até seis quadrados por turno quando não está engajado em combate direto, sendo o mais rápido entre os atletas. Duas vezes por combate, ao sofrer um golpe que o levaria ao nocaute, seu condicionamento excepcional o mantém consciente, reduzindo drasticamente os danos sofridos.',
  'Campeão de Wrestling': 'Você detém um domínio avançado do wrestling, sendo capaz de executar torções, quedas, inversões, reversões, progressões e técnicas de solo com extrema eficiência — um verdadeiro prodígio, digno do título de campeão invicto. Sempre que derruba um adversário, este permanece por um turno inteiro em estado de confusão e atordoamento, tornando-se incapaz de reagir à sua primeira investida no chão, independentemente de seu nível técnico, condição esta que não pode ser evitada por meio de habilidades, por se tratar de uma aplicação passiva da sua superioridade no combate de solo. Ademais, embora ataques direcionados a quem se encontra em posição dominante no grappling já sejam naturalmente prejudicados pelo espaço reduzido e pela ausência de angulação adequada, seu refino técnico eleva essa desvantagem a um nível ainda mais severo: todo e qualquer ataque desferido contra você enquanto estiver em posição dominante tem mais da metade de sua força reduzida, tornando-se virtualmente inofensivo, de modo que golpes de natureza nocauteadora nessas condições não possuem efetividade para nocauteá-lo, sendo tratados apenas como ataques comuns. Quando em posição de ground and pound, seus golpes causam o dobro de dano, além de poder desferir até dois ataques no mesmo turno de forma contínua, mantendo essa vantagem enquanto sustentar a posição ou até que o adversário consiga interrompê-lo.',
  'Punho do Capitão': 'Detentor de uma força avassaladora, você concentra toda a sua potência em um único golpe decisivo. Uma vez por combate, pode desferir um soco de impacto extremo, capaz de nocautear instantaneamente qualquer adversário atingido diretamente, desde que não haja interferência ou mitigação por meio de habilidades defensivas especiais ou evasivas. Trata-se de uma investida brutal, cuja falha implica na perda da oportunidade.',
  'Atleta de Elite': 'Dotado de um físico imponente, você se destaca como um dos mais formidáveis atletas de Bullworth Academy, sendo amplamente reconhecido como o herdeiro direto à sucessão dos Bullhorns. Com seus impressionantes 1,90m de altura e uma robustez notável, apresenta força e resistência excepcionais, ainda que ligeiramente inferiores às do capitão dos atletas. Uma vez por combate, ao sofrer um golpe que o levaria ao nocaute, seu corpo suporta o impacto, permitindo-lhe manter-se consciente enquanto reduz significativamente os danos recebidos. Além disso, pode percorrer até cinco quadrados por turno quando não está engajado em combate direto, sendo o segundo homem mais rápido do time.',
  'Wrestling Avançado': 'Exímio na arte do wrestling, você detém um domínio avançado desta modalidade, sendo um dos poucos em Bullworth Academy capazes de competir nesse nível, rivalizando até mesmo com o capitão dos atletas. Reconhecido como o Executor dos Atletas, sua presença em combate impõe temor imediato, como a de um verdadeiro cão de caça. Seu estilo incorpora quedas explosivas e brutais, com destaque para seu movimento de assinatura: o suplex. Uma vez por combate, pode executar um suplex poderosíssimo, capaz de desacordar instantaneamente o adversário se bem-sucedido; caso o nocaute seja efetivado, a habilidade pode ser reutilizada sucessivamente, desde que continue desmaiando inimigos com este movimento. Entretanto, ao falhar, a habilidade é encerrada, não podendo ser utilizada novamente durante o combate, respeitando sua limitação inicial.',
  'Investida Implacável': 'Dono de um instinto combativo apurado, você é capaz de identificar com precisão o momento exato de uma investida inimiga, convertendo essa leitura em uma resposta imediata e decisiva. Uma vez por combate, você pode antecipar um ataque direto, projetando-se contra as pernas do adversário em uma entrada explosiva, seja por meio de um double leg ou single leg, executada com violência, precisão e domínio corporal absoluto; trata-se de um pico momentâneo de percepção e reação, no qual sua execução se torna extremamente difícil de acompanhar ou prever, tornando a investida praticamente inevitável. Tal movimento não pode ser evitado por meios convencionais, sendo possível escapar apenas através de habilidades especiais que garantam evasão absoluta ou por meio de bloqueio adequado, caso o oponente detenha conhecimento suficiente para conter quedas. Se bem-sucedida, a técnica leva o adversário imediatamente ao chão, concedendo domínio posicional instantâneo e abrindo margem para a continuidade ofensiva em seu cenário de vantagem',
  'Prodígio dos Atletas': 'Um verdadeiro prodígio entre os Bullhorns, você se destaca como o terceiro na linha de comando, combinando força, resistência e desempenho atlético de alto nível. Com seus 1,80m de altura, é, sem dúvidas, um dos atletas mais proeminentes do grupo. Capaz de percorrer até cinco quadrados por turno, enquanto não estiver engajado em um confronto, você figura como o terceiro mais rápido do time, sendo inclusive capaz de acompanhar o vice-líder em corrida por curtos períodos; contudo, seu fôlego inferior o impede de superá-lo a longo prazo, inevitavelmente cedendo diante do condicionamento de elite de seu superior. Sua força e constituição acompanham seu desempenho físico, tornando-o um combatente completo. Uma vez por combate, pode desferir um golpe de impacto elevado, capaz de desorientar calouros, veteranos comuns e tenentes por um turno inteiro, caso seja bem-sucedido; líderes e vice-líderes, no entanto, são parcialmente resistentes a essa investida, sofrendo apenas o dano. Por se tratar de um efeito de atordoamento, habilidades voltadas à prevenção de nocaute não possuem qualquer eficácia contra esta técnica.',
  'Taco de Alumínio': 'Como símbolo de prestígio entre os atletas, você detém posse de um taco de alumínio autografado, utilizado como arma em situações específicas. Este armamento só pode ser empregado dentro do território dos atletas, sendo permitido em outras áreas apenas em contextos de guerra. Quando utilizado, o taco pode ser manejado por até 4 turnos, período no qual mantém plena eficácia; após isso, torna-se inutilizado para o restante do combate. Seus golpes são extremamente danosos, desferidos com força suficiente para tornar o bloqueio convencional inviável, sendo, portanto, apenas esquiváveis ou contornáveis por meio de habilidades especiais. Ainda assim, mesmo quando bloqueados por tais meios, o impacto é sentido, causando dor significativa no membro utilizado para defesa e reduzindo o dano recebido apenas à metade.',
  'Touro de Bullworth': 'Diferente dos demais atletas, sua identidade permanece como um verdadeiro segredo, sendo alvo constante de especulações entre os alunos de Bullworth Academy, enquanto até mesmo seus companheiros se dividem entre teorias e incertezas sobre quem é o homem por trás da máscara. Como integrante do time, possui conhecimento intermediário em wrestling, além de percorrer até cinco quadrados por turno quando não está engajado em combate direto. Sua principal característica, contudo, reside na fantasia de mascote, que funciona como uma verdadeira armadura, semelhante à utilizada no futebol americano, capaz de absorver impactos variados e elevar significativamente sua resistência, permitindo-lhe enfrentar até mesmo oponentes mais fortes. Essa vestimenta pode ser utilizada em qualquer local da escola, independentemente de horário ou contexto, garantindo uma vantagem tática constante. Em termos práticos, suporta até seis golpes antes de ser comprometida, podendo ser restaurada apenas no dia seguinte; destes, os três primeiros impactos são completamente anulados, enquanto os três subsequentes têm o dano reduzido pela metade, refletindo o desgaste progressivo da proteção. É válido ressaltar que a propriedade de anular os três impactos iniciais aplica-se apenas a golpes convencionais, no caso de habilidades ofensivas a redução de dano pela metade passa a vigorar.',
  'Fúria do Touro': 'Incorporando a força bruta que simboliza, você investe contra o adversário em uma cabeçada devastadora, projetando-o diretamente ao solo caso a carga seja bem-sucedida. A violência da investida desestabiliza completamente o alvo, que permanece desorientado por um turno inteiro enquanto está no chão; líderes e vice-líderes, no entanto, resistem totalmente ao efeito, não sendo afetados pelo atordoamento. Esta habilidade pode ser utilizada uma vez por combate.',
  'Maluco do Pedaço': 'Você encarna plenamente a personalidade do mascote, assumindo um comportamento imprevisível, irreverente e provocador, sendo frequentemente visto como “louco”, ainda que raramente de forma pejorativa. Ao lado das líderes de torcida, é uma das principais figuras responsáveis por animar Bullworth Academy, representando o espírito da escola dentro e fora dos campos. Especialista em pegadinhas e ações oportunistas, você não hesita em recorrer a táticas pouco convencionais para obter vantagem, podendo, inclusive, intervir de maneira direta e covarde em confrontos justos. Adicionalmente, uma vez por combate, pode utilizar um dos seguintes itens especiais: saco de bolinhas de gude, bomba de fedor ou firecracker, aplicando-os de forma criativa para atrapalhar adversários ou alterar o curso da situação.',

  // ============================================================
  // BULLIES - HABILIDADES EXCLUSIVAS
  // ============================================================
  'Colossal': 'Sua constituição não é brincadeira para ninguém, nada similar às pessoas da sua idade em muitos aspectos. Para começar, você é um gigante, medindo incríveis dois metros e quinze. Isso não é apenas um efeito estético, mas é resultado de uma estrutura física abundante para o esforço dos músculos, pois é incomparável no quesito pujança física, ou seja, consegue superar todos os líderes nesse fator. Por conta da força exagerada, consegue uma vez por combate desferir um ataque que é capaz de nocautear uma pessoa se a atingir diretamente na cabeça, mas somente e quando o ataque atingir a cabeça do alvo. Como nem tudo são flores, uma anormalidade dessas com toda a certeza deveria ter uma penalidade, o que recai sobre as suas pernas. Infelizmente, para você, e felizmente, para os seus rivais, você é uma ameba quando o assunto é corrida por conta do grande peso corporal pelos músculos exacerbados, além de ser pouco ágil; isto reflete sua incrível corrida de meros três quadrados por turno. Para compensar essa desvantagem, o líder dos valentões é, louvada seja sua genética, uma pessoa bastante resistente, e isto vem com uma grande vantagem: por mais que queiram, calouros e veteranos comuns necessitam de aplicar o dobro de danos para nocautear o líder dos valentões. Além disso, o líder dos valentões se torna imune às primeiras tentativas de o derrubar no chão, seja através de ataques físicos, agarrões, empurrões, projéteis, entre outros; isto não é sobre não ser danificado com determinadas táticas, o que ainda pode ocorrer ao líder bullie, mas sim que qualquer tática que vise o colocar no chão é totalmente infrutífera na primeira instância.',
  'Até-o-último-cuecão': 'No epítome de batalha, e quando estiver sendo afrontado por ataques fulminantes, ou apenas a bel prazer, o líder dos valentões consegue ter um acesso à raiva excessiva. E quando enraivecido a este ponto, perde completamente o controle da racionalidade e se impõe no mundo como uma besta fora da jaula. Em casos de estar lutando, consegue no período de 3 turnos aplicar golpes tão poderosos que consegue, em um só contato dos ataques, romper completamente guardas e desequilibrar até mesmo as mais estáveis das pessoas se atingidas, um aríete vivo. E como se não fosse suficiente, caso esteja beirando o nocaute, consegue estender sua permanência em combate por 3 turnos, perdendo momentaneamente a percepção de dor que os danos somados ao corpo infligem para se elevar, dentro desse período, a um estado incapaz de cair e ser nocauteado, além de garantir as vantagens supracitadas dado o acesso à raiva; logo após é forçado a perder a consciência, mas apenas no caso de estar prestes a ser nocauteado e utilizar dessa habilidade.',
  'Aura e Ego': 'Ao menos que você esteja diante um sociopata manipulador que não tem apego a sentimentos e que pouco sabe o que são emoções, então você é um verdadeiro predador natural de qualquer presa de Bullworth Academy. É uma questão mais lógica e natural do que se pensa: diante uma figura tão alta, tão poderosa fisicamente, em posição de liderança, o que já a qualifica como uma grande fonte de poder dentro do instituto, e que ainda comanda uma legião de malucos, isto é algo para se temer. Devido a isto, tanto por seu físico colossal quanto a sua posição de líder de um grupo de assumidos valentões, delinquentes juvenis e trombadinhas, você exala uma aura que torna todas as pessoas suscetíveis a um medo inebriante. Durante o período de 1 turno, você é capaz, de maneira ativa, de intimidar uma pessoa, ao ponto de fazer com que ela congele de tanto temor; essa habilidade só pode ser utilizada uma vez por combate. De maneira mais cotidiana, ou seja, como uma questão passiva, calouros e veteranos comuns evitarão arrumar confusão ao máximo, a não ser que você brigue com eles fisicamente, de maneira direta; ademais, calouros e veteranos comuns são incapazes de mentir para o colosso dos bullies por puro ressentimento de sofrer retaliações tremendas, com exceção dos casos com habilidades de enganação fenomenais.',
  'Mestre da Trapaça': 'O vice-líder dos valentões é uma pessoa extremamente baixa, utilizando de artimanhas que ultrapassam até mesmo o que os próprios bullies acham sujo. Devido a essa fama de ser um grande carrasco das ruas, um verdadeiro lutador nada ortodoxo, é hábil na arte da improvisação e do que é mais funcional na prática. Essa proficiência em trapaça permite utilizar de golpes baixos sempre, seja em ofensivas ou defensivas, sem limitação ou restrição, podendo abusar de táticas como golpes nas regiões baixas, atingir pontos sensíveis como os olhos e mucosas, entre outras aplicações de golpes baixos. O costume em realizar essas trapaças o condicionou a um nível que, no menor dos movimentos e brechas, aproveite da sua multifacetada gama de sujismundas táticas. Por conta disso, consegue aplicar em um mesmo turno uma combinação de dois golpes baixos na mesma área ou em áreas distintas, com o cooldown de 1 turno. Com essa combinação, o mestre da trapaça se torna uma pessoa que pressiona constantemente o adversário não só com força bruta, apoiando-se a um arcabouço teórico maldoso que é transcrito na sua maneira de trapacear e aproveitar de qualquer fraqueza vinda do seu adversário.',
  'Guerreiro Urbano': 'O Grande Malandro é uma pessoa versada na arte de luta de rua, um grande trapaceiro maldoso, sujo, trombadinha e mequetrefe. E em toda luta de rua, vence não o mais forte, mas aquele que encara a situação de maneira mais desproporcional possível. Isso significa que a única coisa que passa por sua cabeça é a sobrevivência do mais forte. Essa mentalidade o forçou a se constituir como um guerreiro das ruas, tenaz e capaz de se impor diante de qualquer pessoa. Dada esse conjunto de fatores, encontrou em objetos um potencial gigantesco de crescimento em batalha, se versando em praticamente tudo  que estiver em seu caminho. Essa habilidade como Guerreiro Urbano o torna apto a utilizar qualquer objeto do quarto como uma arma, sejam garrafas, tijolos, tampas de lixo ou outros, podendo abusar de sua portabilidade ou fazer com que seus inimigos sejam chocados nesses objetos, entre outras aplicações criativas. A resistência de cada objeto varia, sendo endereçado a durabilidade a uma questão narrativa; por obviedade, garrafas perduram um turno se utilizadas para atacar ou buscar defender um soco, por exemplo, enquanto tampas de lixo podem perdurar por no máximo três turnos, e assim sucessivamente. O fator principal é que qualquer arma no domínio do Grande Malandro, se pego do quarto, perdura por no máximo 3 turnos se utilizados para ataques ou defesas. Sua marca registrada, um estojo estudantil comum, carrega uma série de materiais portáteis para o uso e abuso dessa habilidade, o que garante constantemente ao vice-líder um meio de recorrer a sua trapaça. O estojo leva os seguintes materiais: três lápis (perduram 2 turnos de ataque), uma borracha grande (projétil de uso único capaz de atordoar calouros, veteranos comuns e tenentes por 1 turno se atingidos em regiões sensíveis como cabeça e partes baixas) e uma lapiseira (perdura por 6 turnos de uso). Os itens do estojo permitem a utilização de habilidades perfurantes, para a lapiseira e lápis, contundentes e atordoantes para a borracha, e cortantes somente para a lapiseira. O mesmo uso de habilidades do tipo perfurantes e cortantes depende do objeto utilizado pelo Guerreiro Urbano, dependendo exclusivamente de qual objeto ele seleciona do quarto.',
  'Bater e Fugir': 'Covardia não existe em situações de luta, sua máxima é essa, e nada tem de errado em uma retirada estratégica. Enquanto alguns julgam escapar uma tática dada aos fracos, para você pode ser a oportunidade para que subjugue os mais poderosos. É capaz de, em um único turno, caso não haja limitações a você, percorrer 14 quadrados em uma corrida extremamente veloz. Esse costume de realizar retiradas estratégicas o certificam de escapar da maioria das pessoas, monitores, professores e autoridades, uma pessoa naturalmente escorregadia e problemática para se lidar. Por conta dessa natureza escorregadia, desenvolveu seu estilo de luta próprio, grandemente trapaceiro, que abriu uma grande oportunidade. Analisando uma série de lutas estudantis, uma série de lutas até mesmo urbanas, percebeu um padrão totalmente estranho: ninguém costuma bater e fugir das lutas. O Grande Malandro é totalmente diferente, podendo uma vez por combate desviar totalmente de um ataque se, e somente se, anteriormente tiver atingido o seu oponente com um ataque para assim desviar na sequência. E não se trata de um “desvio” comum, é um distanciamento considerável de dois quadrados que o permite não só fugir subsequentemente de um ataque ou perseguição inimiga, mas também abre a brecha para que fuja caso veja nisso a necessidade. Mas vale ressaltar: uma vez utilizada a tática em alguém, caso opte por se retirar de combate temporariamente e retornar, a habilidade não pode ser novamente utilizada pelo malandro. O malandro que bate, foge e volta, e tenta novamente bater e depois fugir, falha miseravelmente se buscar entrar em conflito com o mesmo indivíduo seguindo esta sequência na mesma disputa.',
  'Semente do Mal': 'Muitos têm aptidão em lutas, mas em questões sociais, o tenente dos valentões se sobressai e muito. Não é com charme que se conquista as coisas, mas com pura manipulação através da noção nada amadora de como se constrói uma comunidade. Consegue convencer calouros e veteranos comuns das mais cabeludas mentiras deslavadas, plantando uma verdadeira semente do mal, capaz de alimentar rumores, levantar suspeitas, irritar indivíduos, provocar a ira de uns contra os outros ou até mesmo se safar de situações complexas. Com tamanha habilidade, é uma pessoa que está sempre por trás de conspirações e revoltas, erguendo multidões, incentivando aliados e azarando inimigos com brutalidade. Se sobressai, acima de tudo, por uma grande influência, não por fama, mas por uma gigantesca rede de networking que abarca desde os ricos e pobres, o que remove qualquer suspeita ou tramóia social a seu respeito. Isto é, o tenente dos bullies é a única pessoa de todo o instituto a se manter imune a acusações, mentiras e manipulação da mídia, ou pelo menos sua figura como pessoa. Isto o torna, acima de tudo, uma peça fundamental e importantíssima para a guerra territorial de Bullworth Academy, uma vez que seu poder reside no desenvolvimento de um plano denso para sagrar sua camarilha a soberana, já que é uma peça incólume e inabalável às questões sociais que afligem a grande maioria dos estudantes.',
  'Festival de Pegadinhas': 'É a única pessoa em toda Bullworth que detém todo o arsenal não ofensivo para um único fim: pegadinhas. Artefatos que possam ser utilizados para este fim de humilhação ou depredação de patrimônio público ou particular são as armas favoritas da Cria da Discórdia. A lista a seguir é vasta: cartela de ovos (podres ou não), grafite, tinta, pó de mico, bexigas, tachinhas, sabão líquido, óleo e outras coisas são alguns dos itens liberados. Demais itens devem passar por uma vistoria da organização para avaliação.  Mas a máxima é essa: enquanto houver uma arquitetura pronta e sólida do meio da pegadinha, geralmente o tenente será o fornecedor e até mesmo o mandante principal para endereçar as mais truculentas peças para as mais diversas figuras de Bullworth Academy.',
  'Mestre dos Disfarces': 'Dono de uma habilidade excepcional com maquiagem teatral e caracterização de figurinos, este estudante é capaz de criar disfarces extremamente convincentes. Sua perícia técnica permite emular a aparência facial, os trejeitos e até mesmo os padrões de voz de terceiros com enorme fidelidade, tornando-se uma ferramenta ideal para infiltrações, espionagem ou para incriminar desafetos ao simular flagrantes sob uma identidade falsa. Em termos práticos, este talento permite que o personagem assuma a identidade de outros indivíduos para enganar observadores comuns. No entanto, o disfarce possui limitações físicas intransponíveis: características estruturais como altura, peso e porte físico geral não podem ser alteradas. Devido a essa restrição anatômica e ao nível de escrutínio que recebem, é impossível replicar com sucesso a fisionomia de líderes ou vice-líderes das facções da academia.',

  // ============================================================
  // GREASERS - HABILIDADES EXCLUSIVAS
  // ============================================================
  'Campeão de Muay Thai': 'No início de sua inserção no colegial, lá para os onze ou doze anos de idade, o estudante matriculou-se na velha academia de Muay Thai do bairro, conquistando, após longos anos de treinamento, um físico invejável e uma resistência semelhante a dos lutadores profissionais, suportando, uma vez por combate, golpes que poderiam nocauteá-lo. Isso é fruto de seus anos de sparring e treinos, aprendendo a absorver pancadas como um amador jamais faria. Disputando campeonatos municipais e tornando-se cada vez mais conhecido na cena, após vitórias dominantes, alcançou o título de campeão da cidade, tornando-se o lutador número um de sua academia e da oficina. Seus golpes são mais rápidos do que qualquer aluno, mesmo que seja um mauricinho, superando até mesmo os seus tenentes com chutes tão velozes que parecem raios, além de cotoveladas e joelhadas que possuem a capacidade de cortar o oponente e fazê-lo sangrar em um único turno de contato, com exceção de outros líderes, habilidade conquistada após anos treinando sequências na manopla. Seus pontapés são a parte principal de seu jogo - e o que mais o torna perigoso - assemelhando-se a coices de uma fera descontrolada. Independente de onde acerte, causará um dano massivo.',
  'Defesa Impenetrável': 'Um atleta não se torna campeão apenas com o ataque, e um dos pontos fortes do estilo de luta do Líder Greaser é a sua capacidade absurda de se defender de golpes em pé. Suas canelas são tão duras quanto aço, assim como o restante de seus ossos, forjados na dureza e na brutalidade de suas sessões de treinamento. Os anos de prática renderam ao Campeão das Ruas um nível de inteligência de luta extremamente alto, que se traduz em reflexos e bloqueios rápidos. - Em termos de jogo, essa capacidade extraordinária garante ao personagem três bloqueios absolutos por combate, permitindo-lhe anular por completo o impacto dos ataques recebidos, sem sofrer danos ou penalidades, mantendo sua guarda praticamente impenetrável.',
  'Domínio das Pernas': 'O lutador domina, prevalentemente, os golpes que utilizam as pernas, sendo ágil o suficiente para disparar chutes na longa distância e acertar adversários sem que percebam, caso sejam leigos na arte das oito armas. Seus chutes são tão rápidos que a velocidade se equipara a dos golpes do Campeão de Boxe, atingindo os seus rivais como se a sua canela fosse um bastão de beisebol. Duas vezes por combate, pode realizar uma sequência de dois chutes consecutivos, sendo livre para variar as áreas que deseja acertar, como um na perna e o outro na cabeça, por exemplo. Caso acerte o mesmo local, o nocaute em calouros e até mesmo tenentes, é certo, enquanto o restante perde 50% das capacidades onde for acertado, independente de seu nível de resistência',
  'Peso-Pesado dos Greasers': 'Tratando-se de um colosso, ou seja, de um aluno mais forte e mais alto do que todos os outros de sua camarilha, o Peso-Pesado dos Greasers é um adolescente fora da curva, possuindo 1,85 m de altura, ossos largos e densos e músculos enormes para um garoto de sua idade, aproximando-se ou até mesmo superando um adulto médio em termos de tamanho e força. Sua envergadura é uma das maiores da escola, alcançando facilmente oponentes à distância. Uma vez por combate, pode resistir a um golpe nocauteador. Adicionalmente, pode sobreviver a uma primeira tentativa de queda, toda vez que entra em combate, por conta de seu tamanho.',
  'Gigante do Muay Thai': 'O que diferencia o Carrasco de todos os outros Greasers é sua força e resistência, superiores às de qualquer outro descolado da oficina, o que permite ao lutador forjar um estilo de combate próprio, adaptado ao seu peso e à sua brutalidade, combinando os fundamentos do Muay Thai com a pujança física do adolescente. Seus golpes são contundentes e devastadores à distância, graças à sua altura, mas igualmente poderosos a curta distância, beneficiando-se de seu porte robusto em disputas de força, igualando-se aos atletas mais experientes em combate. Uma vez por combate, o Vice-Líder dos Greasers é capaz de desferir um soco com toda a força de seu corpo na cabeça de outro aluno, nocauteando-o caso acerte em cheio (com exceção de líderes e vice-líderes). Além disso, sua defesa é uma das mais treinadas de Bullworth, conseguindo absorver golpes com maior facilidade em razão de seu tamanho e peso. Adicionalmente, adquire um bloqueio extra, aparando um golpe imparável independentemente da situação do combate.',
  'Demolidor do Ferro Velho': 'O Carrasco da Oficina faz jus à sua fama com seus golpes brutais utilizando armas brancas. Desde o seu tempo de calouro em Bullworth, porta uma marreta de construção encontrada em um prédio abandonado. Após anos destruindo sucata e objetos de metal no Ferro Velho, seus músculos se adaptaram ao esforço constante, gerando ainda mais potência e rotação em seus ataques. Muito rapidamente, o lixo que o Vice-Líder destruía em seu tempo livre foi substituído por cabeças, passando a ser conhecido por esmagar inúmeros alunos do internato e deixá-los em um estado muito mais crítico do que o comum nas batalhas entre camarilhas. Isso lhe rendeu renome, fazendo dele um dos membros da liderança mais temidos da instituição. Todos os que arriscam lutar contra o Carrasco sabem que podem — e vão — acabar feridos. Em termos de mecânica, o personagem só pode utilizar a marreta em situações de guerra ou dentro do território dos Greasers. Ainda assim, trata-se da arma corpo a corpo mais poderosa do internato: dois impactos diretos na cabeça são capazes de nocautear calouros instantaneamente; veteranos e tenentes necessitam de três pancadas; enquanto vice-líderes e líderes caem com quatro impactos. A única exceção a essa regra é o Golias de Bullworth (Líder dos Bullies), que exige cinco impactos diretos para ser derrotado. O uso desse armamento, contudo, cobra um preço elevado do fôlego de seu portador, que só consegue empunhá-lo por um período máximo de cinco turnos antes de ficar exausto e incapaz de utilizá-lo pelo restante daquela situação.',
  'Lutador das Ruas': 'Antes de se tornar um grappler, o Tenente Greaser, assim como todos os outros membros de sua camarilha, iniciou seu caminho no submundo da luta de Bullworth através do Muay Thai, aperfeiçoando a arte de oito armas até um nível intermediário. Seus socos, cotoveladas, joelhadas e chutes são precisos e potentes, tanto em uma distância curta, quanto na longa, conseguindo combinar golpes de maneira criativa e eficaz. Seu clinch é o mais perigoso entre todos os lutadores da oficina, conseguindo prender até mesmo os mais fortes e versados no grappling, graças ao seu conhecimento avançado de esportes de combate. Consegue, uma vez por combate, emplacar uma sequência de dois golpes: um soco e um chute, sendo o último na perna, que desestabiliza o adversário e o envia para o chão, caso o acerte em cheio. Seus anos de treinos acumulados e capacidade de diversificar entre estilos o tornam um gênio da luta, rivalizando com os wrestlers mais experientes e lutadores mais fortes em combate. Seu maior fator é a imprevisibilidade, pois o seu adversário nunca sabe onde o Grappler da oficina irá atacar, podendo ser um golpe em pé ou uma queda.',
  'Grappler da Oficina': 'O ponto chave do jogo do Grappler de Jaqueta é o seu wrestling, aperfeiçoado no ginásio de Bullworth em treinos conjuntos com os atletas. Treinando em um local onde o nível de competição é alto, o Tenente Greaser, após anos de esforço e trabalho duro, conquistou a capacidade de enfrentar veteranos jocks e seus calouros em seu próprio estilo de luta, muitas vezes subjugando-os, embora sofra dificuldades com os wrestlers mais experientes do internato. Uma vez por combate, é capaz de se lançar em uma queda, utilizando toda a força e o peso do corpo para arremessar o adversário no chão, causando atordoamento por um turno até o mesmo se recuperar. Além disso, sua defesa de quedas é o que há de mais forte no seu jogo, aprendendo na marra a se defender das quedas dos atletas robustos dos Bullhorns, após ser quedado inúmeras vezes em seus anos iniciais de prática. Uma vez por luta, pode se defender de uma tentativa de queda, funcionando como um bloqueio adicional. A habilidade funciona até contra quedas que, teoricamente, seriam impossíveis de se defender, fazendo jus ao renome do Grappler de Jaqueta e sua defesa impenetrável.',
  'Mestre do Clinch': 'Quando o assunto é agarrar a nuca de seus oponentes e exercer domínio sobre eles como nenhum outro, o Grappler de Jaqueta prevalece, unindo ambas as qualidades do Muay Thai e do Wrestling para aprisionar seus rivais em combate, roubando suas forças gradativamente até não sobrar nada. Seus agarrões são extremamente difíceis de se defender e caso o lutador entre em posição de clinch, o controle será inevitável, exceto quando estiver lidando com wrestlers e lutadores de Muay Thai experientes. No clinch, o Grappler da Oficina não recebe golpes na cabeça devido a posição privilegiada que exerce, controlando o centro de gravidade de seu adversário. Pode, uma vez por combate, aplicar uma joelhada no clinch que, se assertiva, desorienta a vítima e a deixa atordoada por um turno inteiro.',

  // ============================================================
  // PREPPIES - HABILIDADES EXCLUSIVAS
  // ============================================================
  'Herança Aquaberry': 'Você não representa apenas uma das famílias ricas de Bullworth Town — você representa todas elas. Como líder dos Preppies, você é o rosto da tradição, do prestígio e da influência dentro da academia. Ainda que o líder dos mauricinhos seja, preferencialmente, um Harrington, seu nome pode variar — mas o peso de sua posição permanece inalterado. Exalando uma aura de confiança, elegância e autoridade natural, sua presença impõe hesitação até mesmo nos mais preparados. O primeiro ataque direcionado contra você em combate tem sua eficácia reduzida, como reflexo da insegurança gerada em seu oponente, independentemente de seu nível marcial. Além disso, ao lutar ao lado de seus liderados, sua simples presença é suficiente para elevá-los. Uma vez por combate, você pode inspirar um aliado Preppy participante do confronto, permitindo que ele realize um ATAQUE DUPLO em seu turno.',
  'Punho de Ouro': 'Não é apenas uma arma — é um símbolo de privilégio transformado em violência refinada. Forjada como um verdadeiro artefato de status, a soqueira do líder Preppy é uma peça única, vinculada aos círculos mais exclusivos da Aquaberry. Moldada em ouro maciço de alta densidade, seu design é elegante, preciso e perfeitamente ajustado à mão de seu portador. O peso é distribuído com maestria, garantindo impactos devastadores sem comprometer a velocidade dos golpes. Seus ataques desarmados são naturalmente potencializados pelo uso da soqueira, tornando cada impacto mais contundente do que aparenta. Duas vezes por combate, você pode executar um GOLPE CONTUNDENTE: um ataque direto, preciso e extremamente destrutivo. Caso conecte, é capaz de derrubar instantaneamente qualquer oponente de resistência comum. Contra alvos mais resistentes, o impacto os deixa severamente abalados, tornando-os suscetíveis a serem nocauteados com apenas mais um golpe bem aplicado na região atingida.',
  'Lábia Aristocrática': 'Você foi moldado em um ambiente onde palavras definem destinos. Sua fala é medida, segura e carregada de intenção. Explorando vaidades, inseguranças e ambições com precisão cirúrgica, você planta ideias, conduz decisões e colhe resultados. Possui ampla vantagem em persuasão, blefes e manipulação. Uma vez por roleplay social relevante, pode realizar uma INTERVENÇÃO DIRETA com efeitos como CONVENCIMENTO ESTRUTURADO, PLANTAÇÃO DE IDEIA ou DESARTICULAÇÃO SOCIAL.',
  'Destreza do Campeão': 'O campeão dos mauricinhos é o aluno mais ensaboado de todo o internato. Sua agilidade não vem apenas dos treinos milionários bancados pelo papai. Ele carrega um talento natural, algo que vai além do que o dinheiro possa comprar. Diferente dos outros alunos de Bullworth, o vice-líder dos riquinhos tem duas esquivas para utilizar em sua rotação de ações. Além disso, a cada uma rotação de evasivas, o prodígio do boxe ganha o benefício de uma delas ser inesperada, praticamente impossível, sendo seguida de um contra-ataque implacável que garante um knockdown caso acerte em cheio. Se o golpe for defendido, a região usada para a defesa ficará inutilizada por um turno, causando um incômodo durante todo o restante da luta. Não basta ser rico. Não basta querer. Não basta treinar. É uma valência única. Apenas para quem tem o talento e a classe necessária para ser um pugilista de elite. Não qualquer um. Mas o melhor entre os melhores.',
  'Soco de Diamante': 'Os socos do campeão são os mais fortes de toda a Bullworth. E não é como se ele precisasse se esforçar para isso. Dizem que a força do seu soco vem dos treinos com sacos de pancadas cheios de notas de cem dólares. E que todos são destruídos pelo campeão em um único treino. Na prática, sua força e letalidade tornam-se mais visíveis ainda: duas vezes por combate, em um espaçamento de três turnos de diferença, o mauricinho tem direito ao Soco de Diamante. Um golpe que mostra o resultado do talento somado ao esforço e professores que poucos podem comprar. Caso acerte em cheio em uma região sensível, a lona é certa para quem recebê-lo. Em casos de defesa, o membro atingido ficará em desuso por dois turnos para calouros, veteranos e tenentes. Para os líderes e vice-líderes, um turno de inutilidade do membro e uma desconfortante dor que os acompanhará até o fim do confronto.',
  'Nobre Sequência': 'Esbanjar não se restringe a dinheiro. Papéis bordados são para qualquer um. Todos aqueles que vestem um suéter Aquaberry fazem isso. Um pobretão pode esbanjar riqueza no início do seu miserável mês. O Campeão? Não! Ele é mais que isso e ostenta o que é realmente importante: força e eficiência. Duas vezes por combate, com um intervalo de três turnos até o próximo uso, o vice-líder dos mauricinhos tem direito a uma sequência aniquiladora: três socos de uma vez só. Um em seguida do outro. Em calouros e veteranos, os três socos significam o asfalto áspero e sujo de Bullworth (nocaute). Em tenentes e vice-líderes, os três socos se convertem em um knockdown. Para líderes, os três socos são fatais e deixam sequelas que permanecem até o fim da luta, além da iminência de um nocaute. Cada um dos golpes do campeão traz uma cruz difícil de suportar: as regiões atingidas por qualquer um dos golpes ficarão doloridas até o fim do combate.',
  'Postura Intocável': 'O kickboxer detém uma resistência e controle corporal admiráveis, fruto de treinos caríssimos e implacáveis na arte marcial. Sua dedicação constante ao aperfeiçoamento técnico o levou a desenvolver uma resistência louvável que, diferentemente dos demais alunos de Bullworth, permite defender e absorver no corpo os mais variados tipos de golpe, garantindo uma defesa extra passiva a cada quatro turnos de combate. Mostrando ser um mestre da arte, o uso da habilidade não influencia as tentativas de contra-ataque do mauricinho, permitindo que ele aja livremente.',
  'Chute Milionário': 'SDurante uma aposta milionária na Mansão Harrington, o líder dos mauricinhos quis decidir qual dos riquinhos possuía o chute mais potente. O kickboxer foi colocado à prova com o objetivo de demonstrar a eficiência dos treinos de elite dos preppies no striking. Submetido a técnicas avançadas e implacáveis, ele enfrentou uma série de desafios até superar todos os concorrentes e se consagrar como o mais forte. Como resultado desse treinamento extremo e da pressão da disputa, seu chute alcançou um nível de potência excepcional. Quando executado, o impacto é devastador: caso um calouro ou tenente tente bloquear, o membro utilizado na defesa é inutilizado por dois turnos; já para os vice-líderes, o membro é inutilizado por um turno; os líderes representam a exceção, não sendo afetados por essa punição. Se atingir diretamente a cabeça, o golpe é suficiente para nocautear um calouro ou um tenente instantaneamente; vice-líderes ficam atordoados por um turno, enquanto líderes sofrem um dano absurdo. Devido ao alto desgaste físico e à precisão exigida, essa habilidade só pode ser utilizada uma única vez por combate.',
  'Reflexo Luxuoso': 'A velocidade é uma das marcas registradas dos mauricinhos, um traço refinado que desperta a inveja de qualquer outra camarilha de Bullworth — e, quando se trata do tenente, isso se torna ainda mais evidente e incomparável. Nos treinos do riquinho, isso não era apenas uma característica de destaque, mas um padrão de excelência, tornando-o um dos alunos mais rápidos de toda a escola. Devido a isso, o Kickboxer consegue realizar, uma vez por confronto, uma esquiva consecutiva perfeita, sem consumir sua ação defensiva inicial.',

  // ============================================================
  // NERDS - HABILIDADES EXCLUSIVAS
  // ============================================================
  'Portador da Spud Gun': 'A espingarda de batatas é uma lenda dentre os nerds, uma arma capaz de realizar oito disparos totais antes de ser recarregada, um por vez, cada um com grande poder destrutivo. O alcance da arma abrange, geralmente, oito quadrados, mas o Grão-Mestre das Armas é capaz de a utilizar no alcance máximo de dez quadrados. Um disparo da espingarda de batatas é capaz de nocautear imediatamente calouros e veteranos sem liderança se os atingir na cabeça uma vez; vice-líderes e tenentes são completamente desorientados com um disparo na cabeça, semi-nocauteados, e podem ser finalmente derrotados com um segundo disparo no mesmo lugar; líderes de camarilhas que não são extremamente resistentes, como os greasers e preppies, precisam somente de três disparos para serem nocauteados, ficando tontos com um disparo na cabeça, semi-nocauteados com o segundo na cabeça e finalmente nocauteados com um terceiro disparo na cabeça; colossos, como os líderes bullie e jock, precisam de maior esforço e são nocauteados com quatro disparos na cabeça, sendo o primeiro algo que levemente os desorienta, o segundo algo que os desorienta a nível de não conseguirem andar sem cambalear, o terceiro os deixa semi-nocauteados e o quarto os nocauteia',
  'O Temido Rocket Launcher': 'A arma de obliteração máxima dos nerds, o lançador de foguetes é algo utilizado somente em disputas territoriais dos nerds, sendo proibido seu uso cotidiano. O Grão-Mestre das Armas é capaz de, no alcance de 5 quadrados, envolver, uma única vez na guerra, um único alvo sob a mira e disparo do lançador de foguetes. Se disparada, a arma imediatamente libera três fogos de artifício que, caso atinjam o alvo, imediatamente o nocauteiam. Somente os líderes bullie e jock são semi-nocauteados caso sejam atingidos em cheio por esta arma, já incapazes de agir a posterior caso sejam alvejados de maneira definitiva, completamente expostos e neutralizados. É reiterado que o líder nerd apenas pode usar a arma uma vez na guerra contra uma única pessoa, ou em lutas mano a mano, e seu feito não pode ser repetido na mesma disputa. A arma pode ser disparada no alcance de 4 quadrados de distância, sendo seu alcance mais limitado em comparação às outras armas dado seu grande poder destrutivo',
  'Atirador de Elite': 'O Grão-Mestre das Armas é uma pessoa totalmente capaz de manusear os armamentos de sua camarilha. Ele expõe essa maestria  ao poder arremessar  firecrackers e bombas de fedor a quatro quadrados adicionais que os demais membros da camarilha. Além disso, ele é o portador da rara ferramenta de Bullworth Academy, o Super Estilingue, uma modificação do estilingue tradicional que tem em sua estrutura acoplada uma luneta que amplifica grandemente sua mira e, por consequência, a acurácia dos disparos que podem abranger os doze quadrados de distância. Calouros podem ser nocauteados por quatro disparos consecutivos do Super Estilingue dados na cabeça, enquanto veteranos, com exceção dos líderes, o que inclui líder, vice-líder e tenente, podem ser nocauteados com seis disparos consecutivos dados na cabeça. Os líderes não podem ser nocauteados pelos disparos do Super Estilingue, mas podem ser desorientados; tenentes ficam desorientados apenas se atingidos seis vezes na cabeça;  vice-líderes ficam desorientados apenas se atingidos sete vezes na cabeça; os líderes greaser e preppie ficam desorientados apenas se atingidos oito vezes na cabeça; os líderes bullie e jock ficam desorientados apenas se atingidos dez vezes na cabeça.',
  'Inovação Geracional': 'Você é uma pessoa bastante inteligente, para ser extremamente breve. Quando o assunto é engenharia, não há nenhuma pessoa que se compare a você em toda Bullworth Academy. Esta facilidade o permite elaborar criações autorais que podem se converter em armas de longa distância, armas de curta distância, trajes, entre outros. Cada criação pode ser algo particularmente elaborado pelo Cientista Maluco, ou então uma criação colaborativa. No entanto, toda e qualquer criação autoral ou colaborativa deve ser desenvolvida e passada por avaliação da organização para livre uso, constando uma nivelação breve com todos os efeitos e limites das criações. O vice-líder pode criar no máximo 4 (quatro) criações autorais, sejam elas de uso pessoal ou para outros indivíduos.',
  'Régua de Eletrochoque': 'Quem imaginaria que algumas baterias, fios da máquina de refrigerantes do pátio, algumas quinquilharias a mais e uma régua metálica poderiam produzir algo do tipo? O Cientista Maluco projetou uma arma pessoal potente, para seu uso pessoal e somente, dada a complexidade de seu mecanismo que exige um timing que, infelizmente, outras mentes não conseguem acompanhar. De tempos em tempos, a cada 2 turnos de recarga, o cientista pode atingir pessoas com golpes de sua régua metálica e projetar através de sua extensão uma descarga elétrica potente. Se atingidos uma vez, a descarga permite imediatamente o desnortear completo de calouros que se tornam incapazes de se manterem em pé, quedados e incapacitados e, se atingidos uma segunda vez, são nocauteados pelo choque potente; veteranos, exceto os líderes (como líder, vice-líder, tenente) são incapacitados da mesma maneira com uma descarga, mas uma outra descarga apenas os manteria desnorteados e não os nocautearia; líderes sofrem atordoamento leve, o que é suficiente para os dispensar em meio a uma ofensiva, ou impedir de serem atacados por um líder através de um golpe da régua elétrica. Os efeitos atordoantes, válidos para outros alvos exceto os líderes, perduram por 2 turnos; se o alvo não for atingido novamente pela régua elétrica após a passagem dos 2 turnos de atordoamento, retoma os sentidos e pode agir livremente, sentindo apenas uma queimação na área atingida. Após 4 golpes da régua metálica, o Cientista Maluco precisa retornar à base dos nerds e recarregar as baterias, se busca uma recarga imediata; caso ele queira recarregar em meio ao campus, deve se aproximar de um eletrônico conectado à tomada para recarregar a bateria, o que leva 3 turnos completamente exposto ao perigo. Caso o cientista seja atacado em meio a esse processo, o de recarregar as baterias  no campus, não tem chance de defesa ou esquiva, dependendo dos outros ou da sorte nesse processo.',
  'Buginga-de-Última-Mão': 'O mau hábito é sempre ver no lixo uma oportunidade. Com isso, vive pegando uma coisa aqui e acolá, levando no bolso, nas calças, não importa: o que é algo descartável para uns, para você pode ser uma vantagem estratégica de última hora. Com esse hábito, uma certa vez o Cientista Maluco conseguiu montar um pequeno aparelho portátil que se autodestrói, uma lâmpada minúscula de muitos lúmens que, uma vez ativada pelo Cientista Maluco, é capaz de explodir e cegar temporariamente um alvo. Essa é uma oportunidade que o vice-líder nerd encontra para, muitas das vezes, fugir ou, no melhor dos casos, aproveitar uma brecha quando a situação demandar. Em uma situação de luta, pode-se usar essa tática 1 vez. A duração da cegueira é de 1 turno, incapacitando as pessoas de localizarem o nerd, os demais ao entorno, objetos e tudo que possa ser enquadrado no âmbito da visão, o que deixa o alvo temporariamente descoordenado, fazendo com que errem ataques no período de efeito da cegueira. O alcance para arremessar a lâmpada é de quatro quadrados de distância. A lâmpada não é capaz de ferir fisicamente as pessoas, apenas as sobrecarrega nos olhos temporariamente.',
  'Tempestade de Pum': 'E quem pensaria que uma mexidinha ali, mais uma gota daquilo ali e, booom, uma bomba fedorenta. Na primeira aula de Bullworth Academy você deu de cara com essa possibilidade, foi presenteado pelo conhecimento. E, para a infelicidade de muitos, não parou nisto. Dali em diante, você é um grande fã das Bombas de Fedor, levando consigo uma incontável quantia dessa gracinha por onde for. As bombas de fedor são itens de efeito moral que dispersam as pessoas, as fazem correr imediatamente para se afastar do mal cheiro, mas as suas conseguem ser ainda mais fedorentas! Tamanho futum forçou que as suas bombas detivessem um alcance maior, ocupando 5x5 quadrados em área. Qualquer pessoa afetada, seja aliado ou inimigo, imediatamente para o que estiver fazendo para se afastar dos gases impostos. Apenas pode usar 2 bombas de fedor em sequência, precisando de  2 turnos para utilizar uma bomba ou sequência novamente (ou seja, pode disparar 2 bombas, 1 vez por turno, depois entra em tempo de recarga por 2 turnos até poder usar uma outra bomba novamente)',
  'Super Firecracker': 'O suéco Alfred Nobel tem um sobrenome muito interessante, endereçado a um prêmio onde pessoas que contribuíram para a humanidade são grandemente prestigiadas, mas algo ainda mais curioso foi a sua maior invenção: o dinamite. O tenente dos nerds carrega consigo o dobro de Firecracker comuns, mas como se não bastasse, acabou desenvolvendo algo ainda pior: o Super Firecracker. Um verdadeiro filhote do Nobel, este pequeno gênio acaba fazendo com que o Super Firecracker consiga bombardear todos na área de 4x4. O grande diferencial é a sua potência, capaz de nocautear imediatamente calouros; desnortear gravemente veteranos, incluindo tenentes, a ponto de não poderem atacar durante 2 turnos consecutivos; zonzear vice-líderes e líderes, a ponto de não poderem atacar durante 1 turno ou, se já estiverem em meio a uma ofensiva, de não poderem concluir a ofensiva. Pode usar 1 Super Firecracker por combate.',
  'Poções Malucas': 'Seu contemporâneo, o Cientista Maluco, o questionou: você, monitor de química, com todo o laboratório para si, não o utiliza? E isto te despertou, fez encarar um horizonte inexplorado. E assim, tenente, seu covil se tornou o laboratório de química. Com acesso irrestrito a ele, pode utilizar dos recursos ali dispostos para produzir as bombas que preferir. Ou seja, você tem o direito de criar suas próprias bombas ou armas químicas, e pode as utilizar assim que bem avaliado e liberado pela organização. Dessa maneira, o Sábio Alquimista tem direito a acrescentar 2 mais bombas ou poções com efeitos variados ao seu inventário pessoal; o uso das bombas ou poções somente será permitido com autorização prévia, vide desenvolvimento e aprovação da organização.',

  // ============================================================
  // CHEERLEADERS - HABILIDADES EXCLUSIVAS
  // ============================================================
  'Rainha da Quadra': 'Seu corpo foi moldado durante anos de treinamento em ginástica, dança e cheerleading de alto rendimento, atingindo um nível de coordenação motora, flexibilidade e equilíbrio inalcançável para praticamente qualquer outro estudante de Bullworth. Você é capaz de percorrer até seis quadrados por turno quando não estiver engajada em combate direto, deslocando-se através de obstáculos baixos, saltando móveis, grades e pequenas estruturas sem qualquer penalidade de movimentação. Além disso, sua excepcional consciência corporal impede que seja derrubada ou desequilibrada num primeiro golpe, sua primeira esquiva é sempre graciosa e precisa: investidas, empurrões, agarrões ou quedas forçadas exigem habilidades específicas para surtirem efeito. Caso contrário, você recupera imediatamente o equilíbrio e permanece de pé',
  'Acrobata de Elite': 'Você domina movimentos acrobáticos extremamente complexos, utilizando cambalhotas, mortais, giros e esquivas para transformar sua mobilidade em defesa. Duas vezes por combate, ao ser alvo de um ataque corpo a corpo ou de um projétil, pode executar uma evasão perfeita, anulando completamente o golpe caso exista espaço físico para realizar a movimentação. Após essa esquiva, pode reposicionar-se em até dois quadrados sem consumir sua ação do turno, mantendo total liberdade para agir normalmente em seguida. Sua leitura corporal e tempo de reação fazem com que ataques previsíveis raramente encontrem seu alvo. ',
  'Toda a Atenção para Mim': 'Poucas pessoas em Bullworth conseguem disputar o protagonismo com você. Sua simples presença reorganiza a dinâmica de qualquer ambiente, fazendo com que olhares, comentários e expectativas naturalmente gravitem ao seu redor. Uma vez por combate, você pode transformar um confronto em um verdadeiro espetáculo. Durante dois turnos, todos os personagens presentes reconhecem instintivamente que você é o centro daquela situação, aumentando significativamente a pressão sobre qualquer adversário que a enfrente diretamente. Enquanto estiver duelando com você, esse alvo sofre penalidade em ações que exijam precisão ou concentração, consequência da tensão constante de tentar superar justamente a estudante cuja reputação parece sempre maior do que a de qualquer outro. ',
  'Influência Hipnótica': 'Você aprendeu que o verdadeiro poder nunca está na força, mas na percepção. Enquanto a maioria se preocupa em impressionar, você observa. Em instantes, é capaz de identificar desejos, inseguranças e ambições escondidas por trás de qualquer sorriso, utilizando cada detalhe para conduzir uma conversa exatamente para onde você deseja. Sua beleza abre portas, mas é a sua presença que as mantém escancaradas. Existe algo em seu olhar, em sua confiança e na forma como escolhe cada palavra que desperta uma irresistível vontade de agradá-la. Você não precisa elevar a voz, ameaçar ou insistir. As pessoas, por conta própria, passam a buscar sua atenção, sua aprovação e, sem perceber, começam a reorganizar as próprias decisões em função daquilo que acreditam ser o seu desejo. Você domina a arte da influência com uma sutileza impecável. Um comentário cuidadosamente calculado fortalece egos; um silêncio no momento certo cria insegurança; um sorriso discreto recompensa aqueles que atendem às suas expectativas. Cada ocorrência é intencional, cada gesto possui um propósito e cada aproximação faz parte de um jogo muito maior do que qualquer um ao seu redor é capaz de enxergar. O mais impressionante é que ninguém se sente manipulado. Pelo contrário, todos acreditam estar geridos por iniciativa própria, elaboradas de que cada escolha nasceu exclusivamente da própria vontade. Quando finalmente perceberam que foram esperadas desde o primeiro instante, já é tarde demais para distinguir onde termina o livre-arbítrio e onde começa a sua influência.',
  'Precisão Acrobática': 'Enquanto muitos enxergam a torcida como uma simples apresentação, você a transformou em uma demonstração de absoluto domínio físico. Seu corpo responde com uma precisão quase impossível de reproduzir, executando saltos, giros, mortais e movimentos aéreos com uma naturalidade que desafia qualquer expectativa. Cada aterrissagem acontece no ponto exato, cada impulso possui a força necessária e cada movimento transmite uma sensação de controle absoluto, como se a gravidade fosse apenas mais um detalhe a ser administrado. Anos de treinamento fizeram com que equilíbrio, flexibilidade, coordenação e consciência corporal deixassem de ser habilidades e se tornassem instintos. Mesmo sob pressão, você dificilmente perde o ritmo ou compromete uma sequência. Seu corpo se adapta em questão de segundos, corrigindo falhas antes mesmo que elas se tornem perceptíveis. Essa excelência transforma você em uma das peças mais confiáveis de qualquer formação. Seja sustentando uma pirâmide humana, executando um lançamento de alta dificuldade ou improvisando durante uma apresentação, seus movimentos permanecem limpos, elegantes e incrivelmente precisos. Para quem assiste, tudo parece simples. Apenas quem conhece a modalidade compreende que o que você faz exige um nível de técnica, disciplina e controle que poucos atletas conseguem alcançar.',
  'Mente Inabalável': 'Sua maior força nunca esteve na capacidade de agir, mas na capacidade de permanecer firme quando qualquer outra pessoa perderia o controle. Sua mente funciona como uma fortaleza: organizada, disciplinada e praticamente imune ao caos ao seu redor. Medo, ansiedade, frustração ou pressão podem existir, mas jamais assumem o comando das suas decisões. Antes que qualquer emoção comprometa seu julgamento, você já a compreendeu, organizou e a colocou exatamente onde ela deve permanecer. Mesmo diante de situações extremas, sua linha de raciocínio continua clara e objetiva. Enquanto o ambiente mergulha na desordem, você mantém a mesma lucidez, avaliando cada possibilidade com calma antes de agir. O inesperado dificilmente a desestabiliza, e imprevistos são tratados como problemas a serem resolvidos, nunca como motivos para perder a compostura. Essa estabilidade não nasceu do acaso, mas de uma disciplina mental construída ao longo do tempo. Você aprendeu a dominar os próprios impulsos, a impedir que pensamentos precipitados assumam o controle e a manter suas emoções sob absoluto domínio. Nada acontece rápido o suficiente para fazer sua mente vacilar, e poucas situações são capazes de romper a serenidade que você transmite. Sua maior qualidade é permanecer exatamente a mesma, independentemente das circunstâncias. Enquanto muitos deixam que o ambiente dite como devem pensar, sentir ou agir, você continua inabalável. Sua clareza, seu autocontrole e sua firmeza não dependem da situação em que se encontra — são parte daquilo que você é.',
  'A "Paradinha" de Cole Kavanagh': 'Emprestado não é roubado, certo? Há quem jure ter visto você fuçando os pertences do capitão dos Bullhorns, de onde “coincidentemente” desapareceram uma ampola e uma seringa. O resultado? Músculos crescendo em um ritmo quase milagroso. Hoje, sendo mulher, você pode igualar seu porte ao dos atletas mais bem treinados de Bullworth. E não são apenas os músculos que aumentam: sua força cresce na mesma proporção, tornando cada golpe mais devastador e cada esforço muito mais eficiente. Mas não se engane… todo poder cobra um preço. O desgaste físico é muito maior, e a fadiga pode surgir mais rápido do que você imagina. Afinal, nem mesmo milagres saem de graça. Shhh… Certos segredos são melhores quando permanecem apenas como rumores.',
  'Realeza do Wrestling': ' Um dos esportes mais antigos da Grécia, cuja tradição permanece viva até os dias atuais, encontrando espaço até mesmo dentro dos muros da Bullworth Academy. Seu princípio é simples, mas implacável: controlar, derrubar e dominar o adversário. Diferentemente de modalidades baseadas em socos, chutes e golpes de impacto, no wrestling o verdadeiro campo de batalha é o solo. Com domínio básico na área, sabe conduzir seus oponentes exatamente para onde pertencem: ao chão. ',
  'Acrobacia Rítmica': 'Desde que nos entendemos por gente, poucos verdadeiramente deram o devido valor à acrobacia. “Isso é coisa de mulher”, “esporte de comadre”... preconceitos que atravessaram gerações. A realidade, porém, é outra: nas mãos de quem domina sua arte, a acrobacia transforma-se em uma arma formidável. Em combates corpo a corpo, piruetas, mortais e sequências de saltos deixam de ser meros elementos de espetáculo para se tornarem recursos de mobilidade, evasão e reposicionamento. Evidentemente, toda técnica possui seus limites quando aplicada contra um oponente, mas, ainda assim, sua eficácia é inegável, sobretudo diante de adversários cuja velocidade e capacidade de reação não acompanham a leveza e a agilidade de seus movimentos.',


  // ============================================================
  // PRESS - HABILIDADES DE LIDERANÇA
  // ============================================================
  // ============================================================
// PRESS - HABILIDADES DE LIDERANÇA
// ============================================================
'Orador Intransponível': 'Você conduz discussões com tamanha segurança que hesitação, contradição e pressão emocional raramente conseguem desestabilizá-lo. Ao apresentar uma interpretação plausível, faça uma rolagem de manipulação. Em caso de sucesso, o alvo aceita sua versão como a mais confiável <strong>durante quatro turnos</strong> ou até receber uma prova incontestável do contrário. Contra Atletas, Bullies e Greasers, você <strong>rola duas vezes e utiliza o melhor resultado</strong>. Além disso, qualquer tentativa de persuasão, intimidação social, chantagem ou manipulação direcionada contra você precisa superar seu resultado em uma rolagem oposta. Caso o adversário fracasse, você reconhece suas intenções e permanece <strong>completamente imune</strong> às <strong>investidas sociais</strong> dele pelo restante da cena.', 

'Leitor de Reações': 'Seu olhar treinado identifica alterações mínimas na expressão, na respiração e na postura de qualquer pessoa observada. Depois de acompanhar alguém por um turno completo, você descobre quais emoções ela está tentando esconder e qual assunto provoca medo, raiva, vergonha, insegurança ou desconforto. Você também consegue perceber mentiras comuns sem precisar realizar uma rolagem. <strong>Durante os três turnos seguintes</strong>, toda tentativa de manipulação contra o alvo pode ser rolada duas vezes, conservando o melhor resultado. Se você já possuir alguma informação comprometedora sobre ele, uma falha comum na rolagem pode ser tratada como sucesso parcial.',

'Retórica Dominante': 'Você controla o ritmo da discussão por meio de perguntas direcionadas, constrangimento público, acusações calculadas e inversões argumentativas. <strong>Uma vez por cena</strong>, escolha um alvo e realize uma rolagem de manipulação. Em caso de sucesso, ele perde o controle da conversa <strong>durante três turnos</strong>: não consegue convencer terceiros a agir contra você, suas acusações são recebidas com desconfiança e qualquer tentativa de interrompê-lo apenas reforça a impressão de culpa ou desespero. Se houver pelo menos três testemunhas, sua vitória retórica também prejudica a reputação do alvo pelo restante do dia. Contra Atletas, Bullies e Greasers, o efeito é imediato: seus próprios aliados podem pressioná-lo a se explicar ou exigir que ele recue.',

'Fake News': 'Você transforma fragmentos verdadeiros, fotografias fora de contexto e testemunhos ambíguos em uma narrativa falsa extremamente convincente. A preparação exige dois turnos e um único detalhe capaz de sustentar a história. Depois da divulgação, faça uma rolagem de manipulação para cada facção importante alcançada pela notícia. Os grupos afetados passam a tratar a informação como verdadeira <strong>durante todo o restante do dia</strong>. Atletas, Bullies e Greasers podem confrontar imediatamente o alvo, romper acordos ou iniciar represálias. Líderes de torcida e Preppies modificam sua postura social e podem isolá-lo. A notícia só perde completamente sua força quando provas concretas são apresentadas publicamente. Mesmo depois de desmentida, você pode escolher uma consequência da mentira que já tenha ocorrido para <strong>permanecer irreversível</strong>, como uma amizade rompida, uma confiança perdida ou uma rivalidade iniciada.',

'Voz Oficial de Bullworth': 'Quando fala em nome do jornal, você pode obrigar estudantes comuns a conceder espaço, interromper uma abordagem ou ouvir uma declaração. Uma vez por cena, pode encerrar uma discussão social <strong>sem necessidade de rolagem</strong>, declarar publicamente qual versão será divulgada ou exigir que um estudante se retire de uma reunião, entrevista ou área controlada pela imprensa. Membros comuns de Atletas, Bullies e Greasers não ousam enfrentá-lo diretamente sem a autorização de seus próprios líderes.',

'Intocável da Redação': 'Sua posição editorial e seus contatos entre os professores tornam você praticamente inalcançável pelas regras comuns da escola. Acusações de difamação, provocação, manipulação, chantagem social ou incitação de conflitos são tratadas como disputas relacionadas à liberdade do jornal. <strong>Detenções são canceladas, objetos confiscados são devolvidos e ocorrências disciplinares desaparecem</strong> antes de serem formalizadas. Quando provas graves são apresentadas, um professor aliado intervém, questiona o procedimento e transfere o caso para uma suposta investigação interna que nunca produz punição concreta. Mesmo quando perde publicamente uma disputa, você sempre pode publicar uma resposta, inverter parte da narrativa e recuperar sua autoridade até o final do dia.',

'Furtividade Social': 'Você consegue permanecer em qualquer ambiente movimentado sem despertar atenção, assumindo naturalmente a postura de alguém convidado, autorizado ou irrelevante demais para ser questionado. Enquanto não iniciar uma agressão ou revelar abertamente suas intenções, pode acompanhar grupos, atravessar reuniões e observar conversas <strong>durante uma cena inteira</strong>. Atletas, Bullies e Greasers simplesmente deixam de prestar atenção em sua presença depois de alguns instantes. Mesmo quando alguém nota você, a pessoa <strong>demora dois turnos</strong> para concluir que sua permanência é suspeita, oferecendo tempo suficiente para terminar a escuta ou abandonar o local.',

'Infiltração de Identidade': 'Você domina disfarces, alterações de postura, vocabulário e comportamento social. A preparação exige <strong>dois turnos</strong> e qualquer elemento visual ligado à identidade pretendida, como uniforme, crachá, prancheta ou equipamento esportivo. O disfarce permanece convincente <strong>durante uma cena inteira</strong>, permitindo atravessar territórios de facções, áreas administrativas e reuniões fechadas. Pessoas que não conhecem intimamente a identidade representada aceitam sua presença. Mesmo alguém desconfiado precisa observá-lo durante dois turnos completos antes de perceber alguma inconsistência. O disfarce somente é rompido de imediato se você revelar conhecimento impossível, agir de maneira completamente incompatível com o papel ou for identificado por alguém que o conheça pessoalmente.',

'Escuta de Longo Alcance': 'Como parte de seu pacote, você recebe um <strong>gravador direcional portátil</strong>, desenvolvido para captar conversas distantes e filtrar parte dos ruídos de corredores, arquibancadas e áreas externas. O instrumento pode registrar vozes através de portas comuns, de janelas abertas ou em meio a multidões, desde que você permaneça relativamente imóvel durante um turno completo. As gravações preservam falas, nomes e entonações com clareza suficiente para serem reproduzidas posteriormente. Você pode manter <strong>até três gravações importantes</strong> armazenadas simultaneamente. Uma gravação autêntica é considerada <strong>prova material</strong>, podendo quebrar manipulações, pressionar testemunhas ou sustentar uma publicação. Somente paredes espessas, ruído extremo ou equipamentos deliberadamente preparados para bloquear captação impedem a escuta.',

'Bajulação Estratégica': 'Você identifica aquilo que cada pessoa mais deseja ouvir e utiliza elogios calculados para conquistar confiança. Faça uma rolagem de manipulação após conversar com o alvo por pelo menos um turno. Em caso de sucesso, ele passa a tratá-lo como alguém confiável <strong>durante quatro turnos</strong>, permite sua permanência no local e responde honestamente a <strong>até duas perguntas</strong> que não o incriminem de maneira evidente. Atletas, Bullies e Greasers também podem revelar espontaneamente uma informação adicional na tentativa de impressioná-lo. Líderes de torcida e Preppies exigem a rolagem normal. Nerds apenas colaboram quando a aproximação vier acompanhada de interesse real ou provas verificáveis.',

'Testemunha Inconveniente': 'Quando presencia uma infração, um acordo secreto ou uma demonstração de fraqueza, sua mera presença passa a intimidar os envolvidos. Você pode anunciar que registrou ou anotou o acontecimento, mesmo que possua apenas parte dele. Durante o restante da cena, os envolvidos evitam atacá-lo, tomar seu equipamento ou agir abertamente contra você, pois sabem que qualquer agressão será transformada em prova de culpa. Caso alguém ainda tente silenciá-lo, uma cópia automática da gravação ou anotação chega à redação, impedindo que a informação seja destruída.',

'Intocável da Imprensa': 'Professores ligados ao jornal consideram suas invasões, escutas e perseguições como métodos questionáveis, porém necessários, de investigação estudantil. Você <strong>não recebe detenção</strong> por permanecer em áreas restritas, ouvir conversas, seguir estudantes ou gravar acontecimentos de interesse escolar. Qualquer equipamento confiscado é devolvido no mesmo dia, e gravações apagadas possuem uma cópia protegida na redação. Se uma acusação mais grave for apresentada, um professor assume a responsabilidade por supostamente ter autorizado sua investigação. Você <strong>sempre deixa o incidente sem registro disciplinar</strong> e ainda pode apresentar o ocorrido como uma tentativa de censura contra o jornal.',

'Acesso Irrestrito aos Arquivos': 'Você possui acesso permanente aos registros administrativos utilizados pelo jornal, incluindo históricos disciplinares, faltas, atividades extracurriculares, mudanças de turma, endereços cadastrados e ocorrências escolares. Após dedicar uma cena curta à pesquisa, pode descobrir <strong>até três informações oficiais</strong> sobre um estudante. Registros extremamente protegidos, como prontuários médicos e documentos da direção, exigem apenas que você obtenha uma chave, senha ou assinatura apropriada; uma vez dentro do arquivo correspondente, consegue localizar o documento desejado sem perder tempo. Cada perfil consultado também revela o nome de pelo menos uma pessoa ligada ao alvo.',

'Fonte Anônima': 'Toda pessoa que lhe entrega uma informação pode desaparecer por trás das proteções do jornal. Você altera detalhes, horários e circunstâncias de maneira que o depoimento não possa ser facilmente rastreado. Mesmo sob pressão, você não pode ser obrigado por intimidação comum a revelar uma fonte. <strong>Uma vez por cena</strong>, pode atribuir uma informação a uma origem alternativa plausível, desviando as suspeitas para um boato coletivo, uma testemunha inexistente ou uma observação própria. A verdadeira fonte permanece protegida pelo <strong>restante do dia</strong>, salvo se decidir se revelar voluntariamente.',

'Mapa de Rotas': 'Você memoriza corredores pouco frequentados, atalhos, passagens entre prédios, horários de patrulha e pontos cegos. Depois de observar uma área durante uma cena, cria uma rota segura permanente para aquele local. Você e até <strong>quatro aliados</strong> podem atravessá-la sem encontrar a primeira patrulha, professor ou grupo hostil do caminho, além de chegar ao destino em <strong>um turno a menos</strong>. Cada mapa registra uma entrada discreta, uma saída de emergência e um local apropriado para esconder documentos ou equipamentos. Durante perseguições, você pode utilizar uma rota preparada para desaparecer dos perseguidores depois de dois turnos, desde que alcance um dos pontos mapeados.',

'Dossiê de Perfil': 'Ao combinar documentos, observações e rotas habituais, você produz um relatório completo sobre determinado estudante. A preparação exige <strong>duas fontes diferentes</strong> e uma cena de análise. Durante o restante do dia, você conhece os locais que o alvo costuma frequentar, seus principais aliados, um medo ou vulnerabilidade social e a reação que ele normalmente apresenta quando pressionado. Você sempre consegue antecipar sua primeira movimentação em um encontro e não pode ser surpreendido diretamente por ele. Além disso, pode entregar o dossiê ao Manipulador da Mídia ou ao Furo de Bullworth, tornando a primeira habilidade utilizada contra o alvo <strong>automaticamente bem preparada</strong>, com duração ampliada em um turno.',

'Operação Planejada': 'Uma vez por cena, você pode declarar que havia previsto uma complicação relacionada ao alvo ou ao local investigado. Nesse momento, revela ter preparado antecipadamente um disfarce reserva, uma saída alternativa, uma cópia de documento, uma ferramenta simples ou a presença de um aliado próximo. O recurso precisa ser plausível e não pode causar dano direto, mas pode impedir uma captura, recuperar uma prova ou permitir que a investigação continue. Essa habilidade transforma você na peça responsável por garantir que os planos do jornal <strong>não terminem em fracasso completo</strong>.',

'Intocável dos Arquivos': 'Sua relação com professores, bibliotecários, funcionários administrativos e responsáveis pelo jornal impede qualquer punição relacionada às suas investigações. Acesso indevido, posse de documentos, uso de identidade falsa e invasão de áreas administrativas são reinterpretados como parte de uma apuração autorizada. <strong>Nenhum registro disciplinar permanece ligado ao seu nome</strong>, documentos confiscados são devolvidos e <strong>qualquer suspensão é anulada</strong> antes de entrar em vigor. Quando flagrado de maneira incontestável, você apresenta uma autorização retroativa, encontra uma irregularidade maior nos próprios arquivos ou utiliza informações obtidas durante a investigação para obrigar a administração a encerrar o caso. Mesmo derrotado ou capturado, você preserva as provas reunidas e retorna à operação na cena seguinte.'
};

// ============================================================
// MODAL DE HABILIDADES DOS PACOTES
// ============================================================
const ModalHabilidades = {
  overlay: null,
  closeBtn: null,

  init() {
    this.overlay = document.getElementById('modalHabilidades');
    this.closeBtn = document.getElementById('modalHabClose');
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }
    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) this.close();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  },

  open(pacote) {
    if (!this.overlay) return;
    document.getElementById('modalHabFaction').textContent = pacote.faction || 'Facção';
    document.getElementById('modalHabTitle').textContent = pacote.title || 'Pacote';
    document.getElementById('modalHabSubtitle').textContent = pacote.subtitle || '';
    document.getElementById('modalHabDesc').innerHTML = pacote.desc || 'Descrição não disponível.';

    const skillsList = document.getElementById('modalHabSkills');
    skillsList.innerHTML = '';
    if (pacote.skills && pacote.skills.length > 0) {
      pacote.skills.forEach((skill) => {
        const li = document.createElement('li');
        let skillName = '';
        let displayName = '';
        
        if (typeof skill === 'string') {
          const temp = document.createElement('div');
          temp.innerHTML = skill;
          displayName = temp.textContent || skill;
          skillName = normalizarNomeHabilidade(displayName);
          li.innerHTML = skill;
        } else if (typeof skill === 'object') {
          skillName = normalizarNomeHabilidade(skill.nome || skill.name || '');
          displayName = skill.nome || skill.name || '';
          li.innerHTML = `<strong>${displayName}</strong> ${skill.desc || skill.descricao || ''}`;
        } else {
          displayName = String(skill);
          skillName = normalizarNomeHabilidade(displayName);
          li.textContent = displayName;
        }
        
        li.addEventListener('click', (e) => {
          e.stopPropagation();
          const desc = obterDescricao(skillName) || obterDescricao(displayName);
          if (desc) {
            this.abrirDescricao(displayName, desc, pacote.color || '#e8a020');
          } else {
            this.abrirDescricao(displayName, 'Descrição não disponível para esta habilidade.', pacote.color || '#e8a020');
          }
        });
        
        skillsList.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'Nenhuma habilidade listada.';
      li.style.color = 'var(--text-dim)';
      li.style.fontStyle = 'italic';
      skillsList.appendChild(li);
    }

    const color = pacote.color || '#e8a020';
    this.overlay.style.setProperty('--modal-color', color);
    this.overlay.querySelector('.modal-hab-title').style.color = color;
    this.overlay.querySelector('.modal-hab-faction').style.color = color;
    this.overlay.querySelector('.modal-hab-skills-title').style.color = color;
    this.overlay.querySelectorAll('.modal-hab-skills-list li').forEach(el => {
      el.style.borderLeftColor = color;
    });

    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (typeof Audio !== 'undefined' && Audio.tone) {
      Audio.tone({ f: 560, t: 'sine', d: 0.06 });
    }
  },

  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
    if (typeof Audio !== 'undefined' && Audio.tone) {
      Audio.tone({ f: 380, t: 'triangle', d: 0.05 });
    }
  },

  abrirDescricao(nome, desc, cor) {
    const overlay = document.getElementById('modalHabDescOverlay');
    if (!overlay) return;
    document.getElementById('modalHabDescTitle').textContent = nome;
    document.getElementById('modalHabDescText').innerHTML = desc;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (typeof Audio !== 'undefined' && Audio.tone) {
      Audio.tone({ f: 520, t: 'sine', d: 0.05 });
    }
  },

  fecharDescricao() {
    const overlay = document.getElementById('modalHabDescOverlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    if (typeof Audio !== 'undefined' && Audio.tone) {
      Audio.tone({ f: 380, t: 'triangle', d: 0.04 });
    }
  }
};

// ============================================================
// BUILD PACOTES
// ============================================================
function buildPacotes(){
  document.querySelectorAll('.pacote-tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      document.querySelectorAll('.pacote-tab').forEach(b=>b.classList.remove('on'));
      document.querySelectorAll('.pacote-view').forEach(v=>v.classList.remove('on'));
      tab.classList.add('on');
      document.getElementById(`pacotes-${tab.dataset.target}`)?.classList.add('on');
      Audio.tone({f:460,t:'triangle',d:.04});
    });
  });

  const ff = document.getElementById('faction-filter');
  const gg = document.getElementById('grid-gerais');
  if(ff && gg){
    const keys = Object.keys(PACOTES_DATA.gerais);
    const renderGerais = key => {
      const f   = FACTIONS.find(x=>x.id===key);
      const col = f?.color || 'var(--gold)';
      const pkgs = PACOTES_DATA.gerais[key];
      if(!pkgs || pkgs.length === 0){
        gg.innerHTML = `
          <div style="grid-column:1/-1; text-align:center; padding:2rem; color:var(--text-dim); font-family:'Cormorant Garamond',serif; font-size:1.1rem;">
            <span style="font-size:2.5rem;display:block;margin-bottom:0.5rem;">📭</span>
            Nenhum pacote geral disponível para esta facção no momento.
          </div>`;
        return;
      }
      gg.innerHTML = pkgs.map((p,i)=>`
        <div class="pkg-card" style="--p-color:${p.color || col}">
          <div class="pkg-title-banner" style="background:${p.color || col}">
            <span class="pkg-title-main">${p.title}</span>
            <span class="pkg-title-sub">${p.subtitle || ''}</span>
          </div>
          <div class="pkg-img-wrap">
            <img src="${p.img || 'img/pacotes/'+key+'-'+(i+1)+'.jpg'}" alt="${p.title}" 
                 style="object-position: ${p.imgPos || 'center center'}"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div class="pkg-img-fallback" style="display:none;background:${p.color || col}">${p.title[0]}</div>
          </div>
          <div class="pkg-desc-full">${p.desc}</div>
          <div class="pkg-skills-section">
            <div class="pkg-skills-label">HABILIDADES</div>
            <div class="pkg-skills">
              ${(p.skills||[]).map(s=>`<span class="pkg-skill">${s}</span>`).join('')}
            </div>
          </div>
          <div class="pkg-faction-tag-bottom" style="color:${p.color || col}">${p.faction}</div>
        </div>`).join('');

      // Adiciona evento de clique para abrir modal
      gg.querySelectorAll('.pkg-card').forEach((card, index) => {
        const pkgData = pkgs[index];
        if (pkgData) {
          card.style.cursor = 'pointer';
          card.addEventListener('click', (e) => {
            e.stopPropagation();
            ModalHabilidades.open({
              ...pkgData,
              color: pkgData.color || col
            });
          });
        }
      });
    };
    keys.forEach((k,i)=>{
      const btn=document.createElement('button');
      btn.className='f-filter-btn'+(i===0?' on':'');
      btn.dataset.faction=k;
      const f = FACTIONS.find(x=>x.id===k);
      btn.innerHTML = `<span class="ff-dot" style="background:${f?.color||'#fff'}"></span>${k.toUpperCase()}`;
      btn.addEventListener('click',()=>{
        ff.querySelectorAll('.f-filter-btn').forEach(b=>b.classList.remove('on'));
        btn.classList.add('on'); renderGerais(k);
        Audio.tone({f:500,t:'triangle',d:.04});
      });
      ff.appendChild(btn);
    });
    renderGerais(keys[0]);
  }

  const ffEx = document.getElementById('faction-filter-exclusivos');
  const gEx = document.getElementById('grid-exclusivos');
  if(ffEx && gEx){
    const keys = Object.keys(PACOTES_DATA.exclusivos);
    const renderExclusivos = key => {
      const f   = FACTIONS.find(x=>x.id===key);
      const col = f?.color || 'var(--gold)';
      const pkgs = PACOTES_DATA.exclusivos[key];
      if(!pkgs || pkgs.length === 0){
        gEx.innerHTML = `
          <div style="grid-column:1/-1; text-align:center; padding:2rem; color:var(--text-dim); font-family:'Cormorant Garamond',serif; font-size:1.1rem;">
            Nenhum pacote exclusivo disponível para esta facção no momento.
          </div>`;
        return;
      }
      gEx.innerHTML = pkgs.map((p,i)=>`
        <div class="pkg-card pkg-card--exclusive" style="--p-color:${p.color || col}">
          <div class="pkg-hierarchy-ribbon">HIERARQUIA</div>
          <div class="pkg-title-banner" style="background:${p.color || col}">
            <span class="pkg-title-main">${p.title}</span>
            <span class="pkg-title-sub">${p.subtitle || ''}</span>
          </div>
          <div class="pkg-img-wrap">
            <img src="${p.img || 'img/exclusivos/'+key+'-'+(i+1)+'.jpg'}" alt="${p.title}" 
                 style="object-position: ${p.imgPos || 'center center'}"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div class="pkg-img-fallback" style="display:none;background:${p.color || col}">${p.title[0]}</div>
          </div>
          <div class="pkg-desc-full">${p.desc}</div>
          <div class="pkg-skills-section">
            <div class="pkg-skills-label">HABILIDADES</div>
            <div class="pkg-skills">
              ${(p.skills||[]).map(s=>`<span class="pkg-skill">${s}</span>`).join('')}
            </div>
          </div>
          <div class="pkg-faction-tag-bottom" style="color:${p.color || col}">${p.faction}</div>
        </div>`).join('');

      // Adiciona evento de clique para abrir modal
      gEx.querySelectorAll('.pkg-card').forEach((card, index) => {
        const pkgData = pkgs[index];
        if (pkgData) {
          card.style.cursor = 'pointer';
          card.addEventListener('click', (e) => {
            e.stopPropagation();
            ModalHabilidades.open({
              ...pkgData,
              color: pkgData.color || col
            });
          });
        }
      });
    };
    keys.forEach((k,i)=>{
      const btn=document.createElement('button');
      btn.className='f-filter-btn'+(i===0?' on':'');
      btn.dataset.faction=k;
      const f = FACTIONS.find(x=>x.id===k);
      btn.innerHTML = `<span class="ff-dot" style="background:${f?.color||'#fff'}"></span>${k.toUpperCase()}`;
      btn.addEventListener('click',()=>{
        ffEx.querySelectorAll('.f-filter-btn').forEach(b=>b.classList.remove('on'));
        btn.classList.add('on'); renderExclusivos(k);
        Audio.tone({f:500,t:'triangle',d:.04});
      });
      ffEx.appendChild(btn);
    });
    renderExclusivos(keys[0]);
  }
}

// ============================================================
// LOADINGFX
// ============================================================
const LoadingFX = {
  canvas:null, ctx:null, particles:[], raf:null,
  init(){
    this.canvas=document.getElementById('loading-canvas');
    if(!this.canvas) return;
    this.ctx=this.canvas.getContext('2d');
    this.resize(); this.spawn();
    window.addEventListener('resize',()=>{ this.resize(); this.spawn(); });
    this.loop();
  },
  resize(){ this.canvas.width=window.innerWidth; this.canvas.height=window.innerHeight; },
  spawn(){
    this.particles=Array.from({length:130},()=>({
      x:Math.random()*this.canvas.width, y:Math.random()*this.canvas.height,
      r:Math.random()*2+.3,
      vx:(Math.random()-.5)*.5, vy:(Math.random()-.5)*.5-.25,
      a:Math.random()*.55+.1,
      gold:Math.random()>.3,
    }));
  },
  loop(){
    const {ctx,canvas}=this;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(const p of this.particles){
      p.x+=p.vx; p.y+=p.vy;
      if(p.y<-4) p.y=canvas.height+4;
      if(p.x<-4) p.x=canvas.width+4;
      if(p.x>canvas.width+4) p.x=-4;
      if(p.y>canvas.height+4) p.y=-4;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.gold?'#e8a020':'rgba(220,215,200,.55)';
      ctx.globalAlpha=p.a; ctx.fill();
    }
    ctx.globalAlpha=1;
    for(let i=0;i<this.particles.length;i++){
      for(let j=i+1;j<this.particles.length;j++){
        const a=this.particles[i],b=this.particles[j];
        if(!a.gold||!b.gold) continue;
        const d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<75){ ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(232,160,32,${(1-d/75)*.08})`;ctx.lineWidth=.5;ctx.stroke(); }
      }
    }
    this.raf=requestAnimationFrame(()=>this.loop());
  },
  stop(){ if(this.raf) cancelAnimationFrame(this.raf); }
};

// ============================================================
// BGCANVAS
// ============================================================
const BgCanvas = {
  canvas:null, ctx:null, particles:[], mouse:{x:-999,y:-999},
  init(){
    this.canvas=document.getElementById('bg-canvas');
    if(!this.canvas) return;
    this.ctx=this.canvas.getContext('2d');
    this.resize(); this.spawn();
    window.addEventListener('resize',()=>{ this.resize(); this.spawn(); });
    window.addEventListener('mousemove',e=>{ this.mouse.x=e.clientX; this.mouse.y=e.clientY; });
    this.loop();
  },
  resize(){ this.canvas.width=window.innerWidth; this.canvas.height=window.innerHeight; },
  spawn(){
    const n=Math.floor(window.innerWidth*window.innerHeight/14000);
    this.particles=Array.from({length:n},()=>({
      x:Math.random()*this.canvas.width, y:Math.random()*this.canvas.height,
      r:Math.random()*1.4+.3, vx:(Math.random()-.5)*.25, vy:(Math.random()-.5)*.25,
      a:Math.random()*.5+.1, gold:Math.random()>.7,
    }));
  },
  loop(){
    const {ctx,canvas,mouse}=this;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(const p of this.particles){
      const dx=p.x-mouse.x,dy=p.y-mouse.y,d=Math.hypot(dx,dy);
      if(d<120){ const f=(120-d)/120; p.vx+=(dx/d)*f*.4; p.vy+=(dy/d)*f*.4; }
      p.vx*=.98; p.vy*=.98; p.x+=p.vx; p.y+=p.vy;
      if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0;
      if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=0;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.gold?'#e8a020':'#3a5080';
      ctx.globalAlpha=p.a; ctx.fill();
    }
    ctx.globalAlpha=1;
    for(let i=0;i<this.particles.length;i++)
      for(let j=i+1;j<this.particles.length;j++){
        const a=this.particles[i],b=this.particles[j];
        const d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<90){ ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(58,80,128,${(1-d/90)*.12})`;ctx.lineWidth=.5;ctx.stroke(); }
      }
    requestAnimationFrame(()=>this.loop());
  }
};

// ============================================================
// AUDIO
// ============================================================
const Audio = {
  ctx:null, muted:true, yt:null, ytOk:false, ytRetries:0,

  init(){
    document.getElementById('sound-btn')?.addEventListener('click',()=>this.toggle());
  },

  lazy(){ if(!this.ctx) this.ctx=new(window.AudioContext||window.webkitAudioContext)(); },

  toggle(){
    this.lazy(); this.ctx.resume(); this.muted=!this.muted;
    const btn=document.getElementById('sound-btn');
    if(btn){ btn.classList.toggle('muted',this.muted); btn.textContent=this.muted?'SOM: OFF':'SOM: ON'; }
    if(this.yt&&this.ytOk){
      if(this.muted){ this.yt.pauseVideo(); }
      else          { this.yt.playVideo();  }
    }
    if(!this.muted) this.tone({f:440,t:'sine',d:.08});
  },

  tone({f=440,t='sine',d=.1,v=.08}={}){
    if(this.muted) return; this.lazy();
    try{
      const o=this.ctx.createOscillator(),g=this.ctx.createGain();
      o.type=t; o.frequency.value=f;
      g.gain.setValueAtTime(v,this.ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(.0001,this.ctx.currentTime+d);
      o.connect(g); g.connect(this.ctx.destination);
      o.start(); o.stop(this.ctx.currentTime+d);
    }catch(e){}
  },

  bell(){
    if(this.muted) return; this.lazy();
    [[880],[1108]].forEach(([f],i)=>setTimeout(()=>{
      try{
        const o=this.ctx.createOscillator(),g=this.ctx.createGain();
        o.type='sine'; o.frequency.value=f;
        g.gain.setValueAtTime(.15,this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(.0001,this.ctx.currentTime+1.2);
        o.connect(g); g.connect(this.ctx.destination);
        o.start(); o.stop(this.ctx.currentTime+1.3);
      }catch(e){}
    },i*480));
  },

  chalk(){
    if(this.muted) return; this.lazy();
    try{
      const buf=this.ctx.createBuffer(1,this.ctx.sampleRate*.18,this.ctx.sampleRate);
      const d=buf.getChannelData(0);
      for(let i=0;i<d.length;i++) d[i]=(Math.random()*2-1)*Math.sin(i/d.length*Math.PI)*.28;
      const src=this.ctx.createBufferSource(),flt=this.ctx.createBiquadFilter(),g=this.ctx.createGain();
      flt.type='bandpass'; flt.frequency.value=3000; flt.Q.value=.5;
      g.gain.setValueAtTime(.7,this.ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(.0001,this.ctx.currentTime+.18);
      src.buffer=buf; src.connect(flt); flt.connect(g); g.connect(this.ctx.destination); src.start();
    }catch(e){}
  },

  steps(){
    [0,.22].forEach(delay=>setTimeout(()=>{
      if(this.muted) return; this.lazy();
      try{
        const buf=this.ctx.createBuffer(1,this.ctx.sampleRate*.1,this.ctx.sampleRate);
        const d=buf.getChannelData(0);
        for(let i=0;i<d.length;i++) d[i]=(Math.random()*2-1)*Math.pow(1-i/d.length,2)*.2;
        const src=this.ctx.createBufferSource(),flt=this.ctx.createBiquadFilter(),g=this.ctx.createGain();
        flt.type='lowpass'; flt.frequency.value=300; g.gain.value=.6;
        src.buffer=buf; src.connect(flt); flt.connect(g); g.connect(this.ctx.destination); src.start();
      }catch(e){}
    },delay*1000));
  }
};

const YT_IDS = [
  'SqM8RYYgjXY',
  'kFAY_UiLd5k',
  'W7u5RZqGBcY',
];

window.onYouTubeIframeAPIReady = function(){
  tryYT(0);
};

function tryYT(idx){
  if(idx>=YT_IDS.length) return;
  Audio.yt = new YT.Player('yt-player',{
    height:'1', width:'1',
    videoId: YT_IDS[idx],
    playerVars:{
      autoplay:0, loop:1,
      playlist: YT_IDS[idx],
      controls:0, disablekb:1,
      origin: window.location.origin || 'http://localhost'
    },
    events:{
      onReady(e){
        Audio.ytOk=true;
        e.target.setVolume(30);
        if(!Audio.muted) e.target.playVideo();
      },
      onError(e){
        console.warn('YT error code',e.data,'tentando próximo ID...');
        Audio.ytOk=false;
        tryYT(idx+1);
      }
    }
  });
}

// ============================================================
// CHALK
// ============================================================
const Chalk = {
  busy:false,
  run(cb){
    if(this.busy){cb();return;} this.busy=true;
    const ov=document.getElementById('chalk-overlay'),cv=document.getElementById('chalk-canvas');
    if(!ov||!cv){cb();this.busy=false;return;}
    const W=window.innerWidth,H=window.innerHeight;
    cv.width=W; cv.height=H;
    const ctx=cv.getContext('2d'); ctx.clearRect(0,0,W,H); ov.style.opacity='1';
    Audio.chalk();
    const horiz=Math.random()>.5, N=horiz?16:12; let p=0;
    const draw=(prog,erase)=>{
      ctx.clearRect(0,0,W,H);
      for(let s=0;s<N;s++){
        const th=(horiz?H/N:W/N)*1.1, sp=s*(horiz?H/N:W/N);
        const end=prog*(horiz?W:H)+Math.sin(s*1.4)*18;
        if(!erase){
          if(horiz){ctx.fillStyle='rgba(4,8,15,.97)';ctx.fillRect(0,sp,end,th);}
          else     {ctx.fillStyle='rgba(4,8,15,.97)';ctx.fillRect(sp,0,th,end);}
          ctx.strokeStyle=`rgba(232,160,32,${.45+Math.random()*.3})`;
          ctx.lineWidth=1+Math.random()*1.5;
          ctx.setLineDash([3+Math.random()*3,2+Math.random()*2]);
          ctx.beginPath();
          if(horiz){ctx.moveTo(end,sp);ctx.lineTo(end+(Math.random()-.5)*6,sp+th);}
          else     {ctx.moveTo(sp,end);ctx.lineTo(sp+th,end+(Math.random()-.5)*6);}
          ctx.stroke(); ctx.setLineDash([]);
        }else{
          const r=prog*(horiz?W:H);
          if(horiz){ctx.fillStyle='rgba(4,8,15,.97)';ctx.fillRect(r,sp,W-r,th);}
          else     {ctx.fillStyle='rgba(4,8,15,.97)';ctx.fillRect(sp,r,th,H-r);}
        }
      }
    };
    const wipeIn=()=>{ p+=.06; draw(Math.min(p,1),false); if(p<1)requestAnimationFrame(wipeIn);else{cb();p=0;setTimeout(()=>{Audio.chalk();wipeOut();},60);}};
    const wipeOut=()=>{ p+=.07; draw(Math.min(p,1),true); if(p<1)requestAnimationFrame(wipeOut);else{ov.style.opacity='0';ctx.clearRect(0,0,W,H);this.busy=false;}};
    requestAnimationFrame(wipeIn);
  }
};

// ============================================================
// PARALLAX
// ============================================================
function initParallax(){
  const layers=[...document.querySelectorAll('.layer')];
  if(!layers.length) return;
  let mx=0,my=0,tx=0,ty=0;
  window.addEventListener('mousemove',e=>{
    tx=(e.clientX/window.innerWidth-.5)*2;
    ty=(e.clientY/window.innerHeight-.5)*2;
  });
  (function tick(){
    mx+=(tx-mx)*.07; my+=(ty-my)*.07;
    layers.forEach(l=>{
      const d=parseFloat(l.dataset.depth)||.1;
      l.style.transform=`translate(${mx*30*d}px,${my*30*d}px)`;
    });
    requestAnimationFrame(tick);
  })();
}

// ============================================================
// MODAL
// ============================================================
const Modal = {
  init(){
    document.getElementById('modal-close')?.addEventListener('click',()=>this.close());
    document.getElementById('faction-modal')?.addEventListener('click',e=>{
      if(e.target===e.currentTarget) this.close();
    });
    document.addEventListener('keydown',e=>{ if(e.key==='Escape') this.close(); });
  },
  open(f){
    const m    = document.getElementById('faction-modal');
    const wrap = document.getElementById('modal-wrapper');

    document.getElementById('modal-tag').textContent     = f.tag;
    document.getElementById('modal-name').textContent    = f.name;
    document.getElementById('modal-desc').textContent    = f.desc;
    document.getElementById('modal-accent').style.background = f.color;

    const loreEl = document.getElementById('modal-lore');
    if(loreEl && f.lore){
      const l = f.lore;
      let nucleosHtml = '';
      if(l.nucleos){
        nucleosHtml = `<div class="modal-nucleos">
          <div class="modal-nucleos-title">NÚCLEOS</div>
          ${l.nucleos.map(n=>`
            <div class="modal-nucleo" style="--nc:${f.color}">
              <div class="modal-nucleo-name">${n.name}</div>
              <div class="modal-nucleo-sub">${n.subtitle}</div>
              <div class="modal-nucleo-desc">${n.desc}</div>
            </div>`).join('')}
        </div>`;
      }
      loreEl.innerHTML = `
        <button class="modal-lore-toggle" onclick="this.parentElement.classList.toggle('open')">
          <span>${l.title}</span>
          <span class="modal-lore-arrow">▾</span>
        </button>
        <div class="modal-lore-body">
          <div class="modal-lore-subtitle">${l.subtitle}</div>
          ${l.paragraphs.map(p=>`<p class="modal-lore-p">${p}</p>`).join('')}
          ${l.quote?`<blockquote class="modal-lore-quote">${l.quote}</blockquote>`:''}
          ${nucleosHtml}
        </div>`;
      loreEl.style.display='block';
    } else if(loreEl){
      loreEl.style.display='none';
    }

    wrap.className = 'modal-wrapper';
    wrap.style.setProperty('--modal-color', f.color);
    m.classList.add('active');
    Audio.tone({f:560,t:'sine',d:.06});
  },
  close(){
    document.getElementById('faction-modal')?.classList.remove('active');
    Audio.tone({f:380,t:'triangle',d:.05});
  }
};

// ============================================================
// BUILD FACTION CARDS
// ============================================================
function buildFactionCards(containerId){
  const el=document.getElementById(containerId);
  if(!el) return;
  el.innerHTML='';
  FACTIONS.forEach(f=>{
    const card=document.createElement('div');
    card.className='fic';
    card.style.setProperty('--fic-color',f.color);
    card.innerHTML=`
      <img class="fic-img" src="${f.img}" alt="${f.name}" loading="lazy"
           onerror="this.style.display='none'">
      <div class="fic-fallback">${f.name[0]}</div>
      <div class="fic-color-bar"></div>
      <div class="fic-name-static">${f.name}</div>
      <div class="fic-overlay">
        <span class="fic-tag">${f.tag}</span>
        <div class="fic-name">${f.name}</div>
        <p class="fic-brief">${f.brief}</p>
      </div>`;
    card.addEventListener('click',()=>Modal.open(f));
    el.appendChild(card);
  });
}

// ============================================================
// BUILD AQUISIÇÕES
// ============================================================
function buildPrivilegios(){
  const tabs  = document.getElementById('priv-tabs');
  const panels = document.getElementById('priv-panels');
  if(!tabs || !panels) return;

  const aquisicoes = [
    { id: 'punhos-pernas', nome: 'Punhos ou Pernas de Aço', preco: 'R$ 15,00' },
    { id: 'duro-queda', nome: 'Duro na Queda', preco: 'R$ 20,00' },
    { id: 'estilo-luta', nome: 'Estilo de Luta Alternativo', preco: 'R$ 15,00' },
    { id: 'prodígio-lab', nome: 'Prodígio do Laboratório', preco: 'R$ 15,00' },
    { id: 'nepo-baby', nome: 'Nepo Baby', preco: 'R$ 10,00' },
    { id: 'sex-appeal', nome: 'Sex Appeal', preco: 'R$ 10,00' }
  ];

  const textos = {
    'punhos-pernas': `
      <span class="aq-titulo">Punhos ou Pernas de Aço <span class="aq-preco">R$ 15,00</span></span>
      Após dedicar incontáveis horas a treinos intensos de fortalecimento muscular, o personagem desenvolveu <strong>ataques básicos muito mais pesados e eficientes</strong>. Ao adquirir esta vantagem, o jogador deve definir o foco dessa preparação física, optando entre <strong>Punhos de Aço</strong> ou <strong>Pernas de Aço</strong> para determinar qual membro receberá o bônus de impacto.
      <br><br>
      Essa força extra permite superar a resistência de adversários com precisão de acordo com a hierarquia escolar. Ao desferir ataques certeiros na mesma região corporal do alvo, <strong>a guarda do oponente é completamente quebrada</strong> após um número específico de turnos de pressão ofensiva contínua, conforme a diferença de nível letivo:
      <ul class="aq-lista">
        <li><strong>Ano inferior ao portador:</strong> dois turnos para quebrar a guarda.</li>
        <li><strong>Mesmo ano:</strong> três turnos para quebrar a guarda.</li>
        <li><strong>Um ano acima:</strong> quatro turnos para quebrar a guarda.</li>
        <li><strong>Dois anos acima:</strong> cinco turnos para quebrar a guarda.</li>
        <li><strong>Três anos acima:</strong> seis turnos para quebrar a guarda.</li>
      </ul>
      Uma vez que a guarda é rompida, a vítima fica <strong>desorientada e incapacitada de utilizar seus direitos convencionais de esquiva e bloqueio por um turno inteiro</strong>.
    `,
    'duro-queda': `
      <span class="aq-titulo">Duro na Queda <span class="aq-preco">R$ 20,00</span></span>
      Detentor de uma <strong>resistência física formidável</strong> e de uma notável <strong>tolerância à dor</strong>, o personagem desenvolveu a habilidade de suportar impactos severos que facilmente desestabilizariam outros estudantes. Esta vantagem reflete um preparo corporal voltado à <strong>absorção de traumas físicos diretos</strong>, permitindo que ele mantenha a lucidez e o equilíbrio mesmo após sofrer golpes contundentes na região da cabeça e do rosto.
      <br><br>
      Mecanicamente, essa resiliência dificulta que o portador seja <strong>atordoado ou nocauteado</strong> durante os confrontos. O limite de golpes consecutivos necessários para deixá-lo zonzo ou levá-lo ao nocaute é <strong>elevado em duas unidades</strong> além do padrão estabelecido para o seu ano letivo. Adicionalmente, o personagem pode, <strong>uma vez por combate</strong>, resistir ativamente a um golpe que o levaria ao nocaute completo ou que seja dotado de algum efeito especial (como atordoamento ou knockdown), <strong>anulando completamente essa consequência</strong> e mantendo-se apto para agir.
    `,
    'estilo-luta': `
      <span class="aq-titulo">Estilo de Luta Alternativo <span class="aq-preco">R$ 15,00</span></span>
      Esta aquisição é direcionada ao personagem que, por meio de instruções externas, vivências prévias ou afinidade, optou por <strong>não aderir à modalidade de combate comumente praticada</strong> pelos membros de sua respectiva facção. Trata-se do desenvolvimento de uma identidade marcial singular, que diverge do padrão doutrinário de seus pares em favor de uma especialização técnica distinta, devendo o jogador selecionar uma das seguintes opções: <strong>Boxe, Muay Thai, Wrestling ou Trapaça</strong> (o método característico dos Bullies, baseado na aplicação de golpes baixos e desleais).
      <br><br>
      Mecanicamente, esta escolha configura uma <strong>substituição integral de competências</strong>, e não um acúmulo de habilidades. O grau de proficiência que o estudante originalmente manifestaria no estilo de luta nativo de seu grupo é <strong>inteiramente transferido</strong> para a arte marcial ou método alternativo de sua escolha. Ressalta-se que o portador preserva todas as demais prerrogativas associadas à sua facção — tais como características físicas, recursos e influência social —, contudo, <strong>abdica por completo de qualquer discernimento prático ou teórico</strong> acerca do método de combate convencional de seus aliados.
    `,
    'prodígio-lab': `
      <span class="aq-titulo">Prodígio do Laboratório <span class="aq-preco">R$ 15,00</span></span>
      Este estudante se destaca pelo <strong>desempenho acadêmico exemplar na disciplina de química</strong> e por sua notável capacidade de transpor o conhecimento teórico para a prática. Contando com um pequeno <strong>laboratório improvisado em seu próprio dormitório</strong>, ele possui a destreza e os conhecimentos necessários para sintetizar substâncias e confeccionar dispositivos artesanais de caráter disruptivo e criativo.
      <br><br>
      Adicionalmente, o personagem detém um <strong>arsenal permanente</strong> composto por uma unidade (1) dos seguintes itens: <strong>Bombinha de Fedor, Firecracker e Pó de Mico</strong>. Uma vez utilizados, esses recursos são <strong>esgotados de seu inventário</strong>. Para reabastecer o estoque, o personagem deve retornar ao seu dormitório para realizar a fabricação e reposição dos componentes gastos.
    `,
    'nepo-baby': `
      <span class="aq-titulo">Nepo Baby <span class="aq-preco">R$ 10,00</span></span>
      No ambiente altamente competitivo de Bullworth Academy, alguns estudantes já ingressam com as portas do prestígio inteiramente abertas devido ao <strong>sobrenome que carregam</strong>. Esta vantagem representa os herdeiros de grandes fortunas, cujos <strong>recursos familiares praticamente ilimitados</strong> permitem a aquisição de qualquer produto, equipamento ou bem material de alto padrão sem que isso represente um esforço financeiro. A influência do dinheiro se estende além do consumo: o portador desta aquisição sabe usar o peso de sua conta bancária para moldar o cenário social do internato, utilizando <strong>subornos e incentivos financeiros</strong> para facilitar negociações, obter favores e abrir caminhos que seriam fechados para outros alunos.
      <br><br>
      Como símbolo máximo desse status diferenciado, o estudante tem à sua disposição <strong>um veículo elegante e de última geração</strong> para transitar pela cidade. Essa combinação de poder aquisitivo e privilégio garante um nível de destaque notável e facilita sua locomoção, permitindo que ele desfrute de um estilo de vida luxuoso e de uma desenvoltura única para além dos muros do campus.
    `,
    'sex-appeal': `
      <span class="aq-titulo">Sex Appeal <span class="aq-preco">R$ 10,00</span></span>
      Dotados de um <strong>magnetismo pessoal incontestável</strong>, os personagens que possuem esta qualidade exercem um <strong>fascínio natural</strong> sobre aqueles que cruzam o seu caminho. Seja pela harmonia de seus traços, pela postura confiante ou pelo charme que emanam, eles capturam a atenção de maneira quase instantânea. No ambiente altamente competitivo do internato, essa presença marcante deixa de ser apenas uma característica estética e se transforma em um <strong>recurso estratégico de persuasão</strong>, permitindo-lhes inclinar interações sociais a seu favor com notável facilidade.
      <br><br>
      Em termos práticos, essa influência se traduz em uma <strong>capacidade singular de mediar conflitos e obter vantagens</strong>. Ao utilizarem seu apelo pessoal, esses estudantes conseguem desarmar hostilidades, angariar a simpatia de aliados em potencial ou extrair favores que normalmente seriam negados a outros. Trata-se de uma ferramenta de negociação <strong>sutil, porém extremamente eficaz</strong>, capaz de reconfigurar as dinâmicas de poder e as alianças dentro do cenário acadêmico.
    `
  };

  aquisicoes.forEach((aq, i) => {
    const tab = document.createElement('button');
    tab.className = 'priv-tab' + (i === 0 ? ' on' : '');
    tab.textContent = aq.nome;
    tab.addEventListener('click', () => {
      tabs.querySelectorAll('.priv-tab').forEach(b => b.classList.remove('on'));
      panels.querySelectorAll('.priv-panel').forEach(pp => pp.classList.remove('on'));
      tab.classList.add('on');
      document.getElementById(`pp-${aq.id}`)?.classList.add('on');
      Audio.tone({f:480,t:'sine',d:.04});
    });
    tabs.appendChild(tab);

    const panel = document.createElement('div');
    panel.className = 'priv-panel' + (i === 0 ? ' on' : '');
    panel.id = `pp-${aq.id}`;
    panel.innerHTML = `
      <div class="priv-content-text">
        ${textos[aq.id]}
      </div>
    `;
    panels.appendChild(panel);
  });
}

// ============================================================
// BUILD LINHAGENS
// ============================================================
function buildLinhagens(){
  const tabsContainer = document.getElementById('linhagens-tabs');
  const panelsContainer = document.getElementById('linhagens-panels');
  if (!tabsContainer || !panelsContainer) return;

  LINHAGENS_DATA.forEach((linhagem, index) => {
    // Cria a tab
    const tab = document.createElement('button');
    tab.className = 'linhagem-tab' + (index === 0 ? ' on' : '');
    tab.textContent = linhagem.nome;
    tab.addEventListener('click', () => {
      tabsContainer.querySelectorAll('.linhagem-tab').forEach(t => t.classList.remove('on'));
      panelsContainer.querySelectorAll('.linhagem-panel').forEach(p => p.classList.remove('on'));
      tab.classList.add('on');
      document.getElementById(`linhagem-panel-${linhagem.id}`)?.classList.add('on');
      Audio.tone({ f: 480, t: 'sine', d: 0.04 });
    });
    tabsContainer.appendChild(tab);

    // Cria o painel
    const panel = document.createElement('div');
    panel.className = 'linhagem-panel' + (index === 0 ? ' on' : '');
    panel.id = `linhagem-panel-${linhagem.id}`;

    let habilidadesHtml = '';
    linhagem.habilidades.forEach(hab => {
      habilidadesHtml += `
        <div class="linhagem-habilidade">
          <div class="linhagem-habilidade-titulo">${hab.titulo}</div>
          <div class="linhagem-habilidade-texto">${hab.texto}</div>
        </div>
      `;
    });

    panel.innerHTML = `
      <div class="linhagem-nome">${linhagem.nome}</div>
      <div class="linhagem-desc">${linhagem.desc}</div>
      ${habilidadesHtml}
    `;
    panelsContainer.appendChild(panel);
  });
}


// ============================================================
// NAV
// ============================================================
const Nav = {
  current:'inicio',
  init(){
    document.querySelectorAll('[data-page]').forEach(el=>{
      el.addEventListener('click',e=>{
        e.preventDefault();
        const page=el.dataset.page;
        if(page===this.current) return;
        Audio.steps(); Audio.tone({f:320,t:'triangle',d:.05});
        Chalk.run(()=>{
          this.current=page;
          document.querySelectorAll('.nav-item a').forEach(
            a=>a.classList.toggle('active',a.dataset.page===page)
          );
          document.querySelectorAll('.page-panel').forEach(
            p=>p.classList.toggle('active',p.dataset.panel===page)
          );
          if(page==='aquisicao') setTimeout(()=>Nav.animateRep(),200);
        });
      });
    });
  },
  animateRep(){}
};

// ============================================================
// CLOCK
// ============================================================
function initClock(){
  const el=document.getElementById('clock');
  if(!el) return;
  const tick=()=>el.textContent=new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
  tick(); setInterval(tick,1000);
}

// ============================================================
// LOADING
// ============================================================
function initLoading(){
  const fill  =document.getElementById('loading-bar-fill');
  const text  =document.getElementById('loading-text');
  const btn   =document.getElementById('loading-enter-btn');
  const screen=document.getElementById('loading-screen');
  const layout=document.getElementById('main-layout');
  if(!fill||!text||!btn||!screen) return;

  LoadingFX.init();

  const msgs=[
    'Verificando matrícula...',
    'Abrindo os portões...',
    'Carregando os corredores...',
    'Alertando os grupos...',
    'Bem-vindo a Bullworth.',
  ];
  let prog=0;
  const iv=setInterval(()=>{
    prog+=Math.random()*16+6;
    if(prog>=100){
      prog=100; clearInterval(iv);
      text.textContent=msgs[4];
      fill.style.width='100%';
      btn.classList.add('show');
    }else{
      fill.style.width=prog+'%';
      text.textContent=msgs[Math.floor(prog/25)]||msgs[0];
    }
  },140);

  btn.addEventListener('click',()=>{
    screen.classList.add('hide');
    LoadingFX.stop();

    if(layout){
      layout.style.animation='none';
      void layout.offsetHeight;
      layout.classList.add('camera-in');
    }

    if (Audio.muted) {
      Audio.toggle();
    } else if (Audio.yt && Audio.ytOk) {
      Audio.yt.playVideo();
    }

    setTimeout(()=>{ Audio.bell(); }, 400);

    initParallax();
  });
}

// ============================================================
// LORE ACCORDION
// ============================================================
function initLoreAccordion(){
  const wrap   = document.querySelector('.lore-accordion');
  const toggle = document.getElementById('lore-toggle');
  if(!wrap || !toggle) return;

  toggle.addEventListener('click', () => {
    wrap.classList.toggle('open');
    Audio.tone({f: wrap.classList.contains('open') ? 520 : 340, t:'triangle', d:.05});
  });

  const evWrap   = document.querySelector('.lore-events-accordion');
  const evToggle = document.getElementById('lore-events-toggle');
  if(evWrap && evToggle){
    evToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      evWrap.classList.toggle('open');
      Audio.tone({f: evWrap.classList.contains('open') ? 480 : 320, t:'triangle', d:.04});
    });
  }
}

// ============================================================
// CAROUSEL
// ============================================================
function createCarousel(containerId, leftBtnId, rightBtnId) {
  const self = {
    container: null,
    leftBtn:   null,
    rightBtn:  null,

    init() {
      self.container = document.getElementById(containerId);
      if (!self.container) return false;

      const cards = self.container.querySelectorAll('.fic');
      if (cards.length === 0) return false;

      self.leftBtn = document.getElementById(leftBtnId);
      if (self.leftBtn) {
        const newLeft = self.leftBtn.cloneNode(true);
        self.leftBtn.parentNode.replaceChild(newLeft, self.leftBtn);
        self.leftBtn = newLeft;
        self.leftBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          self.scrollLeft();
        });
      }

      self.rightBtn = document.getElementById(rightBtnId);
      if (self.rightBtn) {
        const newRight = self.rightBtn.cloneNode(true);
        self.rightBtn.parentNode.replaceChild(newRight, self.rightBtn);
        self.rightBtn = newRight;
        self.rightBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          self.scrollRight();
        });
      }

      setTimeout(() => self.updateArrows(), 100);
      self.container.addEventListener('scroll', () => self.updateArrows());
      window.addEventListener('resize', () => self.updateArrows());

      let isDragging   = false;
      let startX       = 0;
      let scrollOrigin = 0;

      self.container.addEventListener('mousedown', (e) => {
        isDragging   = true;
        startX       = e.pageX - self.container.offsetLeft;
        scrollOrigin = self.container.scrollLeft;
        self.container.style.cursor = 'grabbing';
      });
      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x    = e.pageX - self.container.offsetLeft;
        const walk = (x - startX) * 1.5;
        self.container.scrollLeft = scrollOrigin - walk;
      });
      document.addEventListener('mouseup', () => {
        if (isDragging) {
          isDragging = false;
          self.container.style.cursor = 'grab';
        }
      });

      let touchStartX      = 0;
      let touchScrollOrigin = 0;
      self.container.addEventListener('touchstart', (e) => {
        touchStartX       = e.touches[0].pageX - self.container.offsetLeft;
        touchScrollOrigin = self.container.scrollLeft;
      }, { passive: true });
      self.container.addEventListener('touchmove', (e) => {
        if (e.touches.length === 0) return;
        const x    = e.touches[0].pageX - self.container.offsetLeft;
        const walk = (x - touchStartX) * 1.5;
        self.container.scrollLeft = touchScrollOrigin - walk;
      }, { passive: true });

      return true;
    },

    scrollLeft() {
      const cards = self.container.querySelectorAll('.fic');
      if (!cards.length) return;
      const cardWidth = cards[0].offsetWidth || 200;
      const newScroll = Math.max(0, self.container.scrollLeft - (cardWidth + 16));
      self.container.scrollTo({ left: newScroll, behavior: 'smooth' });
      setTimeout(() => self.updateArrows(), 300);
    },

    scrollRight() {
      const cards = self.container.querySelectorAll('.fic');
      if (!cards.length) return;
      const cardWidth = cards[0].offsetWidth || 200;
      const maxScroll = self.container.scrollWidth - self.container.clientWidth;
      const newScroll = Math.min(maxScroll, self.container.scrollLeft + (cardWidth + 16));
      self.container.scrollTo({ left: newScroll, behavior: 'smooth' });
      setTimeout(() => self.updateArrows(), 300);
    },

    updateArrows() {
      if (!self.leftBtn || !self.rightBtn || !self.container) return;
      const { scrollLeft, scrollWidth, clientWidth } = self.container;
      const atStart  = scrollLeft <= 5;
      const atEnd    = scrollLeft >= scrollWidth - clientWidth - 5;
      const hasScroll = scrollWidth > clientWidth + 10;
      self.leftBtn.style.display  = (atStart  || !hasScroll) ? 'none' : 'flex';
      self.rightBtn.style.display = (atEnd    || !hasScroll) ? 'none' : 'flex';
    }
  };

  return self;
}

// ============================================================
// DOM READY
// ============================================================
document.addEventListener('DOMContentLoaded',()=>{
  BgCanvas.init();
  buildFactionCards('inicio-faction-grid');
  buildFactionCards('camarilhas-grid');
  buildPacotes();
  buildPrivilegios();
  Modal.init();
  Nav.init();
  Audio.init();
  initClock();
  initLoading();
  initLoreAccordion();
  buildLinhagens();
  
  // Inicialização dos carrosséis
  const carouselInicio     = createCarousel('inicio-faction-grid',  'carousel-left-inicio',     'carousel-right-inicio');
  const carouselCamarilhas = createCarousel('camarilhas-grid',      'carousel-left-camarilhas', 'carousel-right-camarilhas');

  function initAllCarousels() {
    const inicioOk     = carouselInicio.init();
    const camarilhasOk = carouselCamarilhas.init();
    return inicioOk && camarilhasOk;
  }

  if (!initAllCarousels()) {
    let attempts = 0;
    const tryAgain = () => {
      attempts++;
      if (initAllCarousels() || attempts >= 10) return;
      setTimeout(tryAgain, 300);
    };
    setTimeout(tryAgain, 300);
    setTimeout(tryAgain, 700);
    setTimeout(tryAgain, 1200);
  }

  // Inicializa o modal de habilidades dos pacotes
  ModalHabilidades.init();

  // Fechar sub-modal de descrição
  document.getElementById('modalHabDescClose')?.addEventListener('click', () => ModalHabilidades.fecharDescricao());
  document.getElementById('modalHabDescOverlay')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) ModalHabilidades.fecharDescricao();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') ModalHabilidades.fecharDescricao();
  });
});
