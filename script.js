// const botao = document.getElementById('show');
// const minhaDiv = document.getElementById('conteiner');

// botao.addEventListener('click', function() {
//     minhaDiv.style.display = 'block';
// });

function escolherAleatoriamente(opcoes) {
    // Gere um índice aleatório dentro do intervalo do tamanho da matriz
    const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
    // Retorne o elemento correspondente ao índice aleatório gerado
    return opcoes[indiceAleatorio];
  }

  const mapas = [
    'Willow Creek',
    'Oasis Spring',
    'Newcrest',
    'Magnolia Promade',
    'Windmburg',
    'San Myshuno',
    'Forgotten Hollow',
    'Bridleton Bay',
    'Del Soy Valley',
    'Strangerville',
    'Sulani',
    'Glimmerbook',
    'Britechester',
    'Evergreen harbor',
    'Monte komorebi',
    'Avelandia do norte',
    'Tartosa',
    'Moonwood mill',
    'Copperdale',
    'San sequoia',
    'Serra das castanheiras',
    'Tomarang',
  ];

  const terreno = [
    'Pequeno',
    'Medio',
    'Grande',
    'Gigante',
  ];

  const tipo_lote = [
    'Residencial',
    'Residencial assombrado',
    'Residencial compacto',
    'Residencia de aluguel',
    'Academia',
    'Aloj. de universidade',
    'Bar',
    'Bar de karaoke',
    'Biblioteca',
    'Boate',
    'Brecho e loja de cha',
    'Cafeteria',
    'Casa de banho',
    'Centro de artes',
    'Centro de recrea.',
    'Clinica vet.',
    'Comercio',
    'Espaço comuni.',
    'Genérico',
    'Local de casamento',
    'Lote de aluguel para férias',
    'Museu',
    'Parque',
    'Parque nacional',
    'Piscina',
    'Restaurante',
    'Salão',
    'Spa',
    'Área de convivência ubrite',
    'Área de convivência foxbury',
  ];

  const traco_lote = [
    'Acustica excelente',
    'Ambiente agradavel',
    'Aspecto ensolarado',
    'Aura romantica',
    'Boas aulas',
    'Brincadeira',
    'Brisa revigorante',
    'Casa de celebridade',
    'Casual nudety',
    'Conexão vampirica',
    'Covil de ciencia',
    'Covil vampirico registrado',
    'Caozinha do chef',
    'Domestico',
    'Linha ley',
    'Linha ley sombria',
    'Espiritos',
    'Estudio domestico',
    'Fada das moedas',
    'Frequente animal attacks',
    'Geotermico',
    'Gnomos',
    'Habitação particular',
    'Hypersexual',
    'Internet rapida',
    'Local de estudo',
    'Local de festas',
    'Local ecologico',
    'Luz natural',
    'Melhor ponto da ciidade',
    'Nudist hugout',
    'Paz e tranqui.',
    'Point dos universitarios',
    'Ponto moviiment.',
    'Encontro cães',
    'Encontro gatos',
    'Poço natural',
    'Recebe cães',
    'Recebe gatos',
    'Roupas ocasionais',
    'Vibração maldosa',
    'Vizinhança adolecente',
    'Área de reprodução',
    'Área de treinamento',
    'Ótimo solo',
  ];

  function selecionarTracoLote() {
    const quantidadeSelecionada = 3;
    const tracosSelecionados = [];
  
    for (let i = 0; i < quantidadeSelecionada; i++) {
      const tracoAleatorio = escolherAleatoriamente(traco_lote);
      tracosSelecionados.push(tracoAleatorio);
    }
  
    return tracosSelecionados;
  }

  const orcamento = [
    '20 mil',
    '40 mil',
    '60 mil',
    '80 mil',
    '100 mil',
    '150 mil',
    'ilimitado'
  ];

  const quant_desafios = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
  ];

  const desafios_lote = [
    'Amaldiçoado',
    'Assombrado',
    'Atividade vulcanica',
    'Capim das pradarias',
    'Criaturas rastejantes',
    'Fora da rede',
    'Gremlins',
    'Imundo',
    'Lote de aterro',
    'Mofo',
    'Problema de manutenção',
    'Raposas',
    'Reduzir e reciclar',
    'Repulsivo',
    'Vida simples',
    'Área de terremoto',
  ];

  function selecionarDesafios() {
    const quantidadeSelecionada = parseInt(escolherAleatoriamente(quant_desafios));
    const desafiosSelecionados = [];

    for (let i = 0; i < quantidadeSelecionada; i++) {
      const desafioAleatorio = escolherAleatoriamente(desafios_lote);
      desafiosSelecionados.push(desafioAleatorio);
    }
  
    return desafiosSelecionados;
  }


  const quant_moradores = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
  ];
  
  const sexoChar = [
    'Masculino',
    'Feminino',
    'Trans',
  ];

  const orientacao = [
    'Hetero',
    'Homoafetivo',
    'Pansexual',
    'Assexual',
  ]

  const idadeChar = [
    'Bebe de colo',
    'Bebe',
    'Criança',
    'Adolescente',
    'Jovem adulto',
    'Adulto',
    'Idoso',
  ];

  const tipoSim = [
    'Normal',
    'Alienigena',
    'Sereia',
    'LobiSim',
    'Vampiro',
    'Feiticeiro',
  ];

  const aspiracao = [
    'Romantica em serie',
    'Alma gemêa',
    'AmigO dos animais',
    'Cavalgante',
    'Esportes radicais',
    'Fisiculturista',
    'Cuidados pessoais',
    'Paz interior',
    'Guru zen',
    'Mixologo',
    'Produzir nectar',
    'Ás dos eletrodomesticos',
    'Chef mestre',
    'Academica',
    'Gênio da informatiica',
    'Cerebro nerd',
    'Feitiçaria magica',
    'Mestre vampiro',
    'Sim da renacença',
    'Arqueologia',
    'Gênio musical',
    'Senhora do trico',
    'Mestre da criação',
    'Atriz magistral',
    'Pintor',
    'Best-seller',
    'Caçadora de segredos',
    'Amor do mal',
    'inimigo publico',
    'travessura',
    'familia grande e feliz',
    'familia vampiro',
    'supermãe/pai',
    'linhagem de sucesso',
    'propietaria 5 estrelas',
    'magnata do mercado',
    'rico',
    'barão das mansões',
    'lobisim iniciante',
    'conhecimento tomarang',
    'impecavel',
    'nativa da cidade',
    'vida de praia',
    'misterio em strangerville',
    'turista em monte komorebi',
    'incrivelmente imundo',
    'exploradora da selva',
    'inovadora ecologica',
    'botanica autonoma',
    'as da pesca',
    'curadora',
    'cuidadora do campo',
    'ar livre',
    'produtor de poçoes',
    'grande festeira',
    'vampiro do bem',
    'lider do bando',
    'estrela da comedia',
    'amiga do mundo',
    'habitante perspicaz',
    'confidente vizinho',
    'celebridade famosa',
    'esperança ou ordem',
    'corsaria galatica',
  ];

  function criarPersonagem() {
    // Escolher aleatoriamente a quantidade de moradores
    const quantidadeMoradores = parseInt(escolherAleatoriamente(quant_moradores));
  
    // Inicializar um array para armazenar os personagens
    const personagens = [];
  
    // Criar personagens para cada morador
    for (let i = 0; i < quantidadeMoradores; i++) {
      const personagem = {
        sexo: escolherAleatoriamente(sexoChar),
        orientacao: escolherAleatoriamente(orientacao),
        idade: escolherAleatoriamente(idadeChar),
        tipo: escolherAleatoriamente(tipoSim),
        aspiracao: escolherAleatoriamente(aspiracao),
      };
      personagens.push(personagem);
    }
  
    return personagens;
  }

  const idadeCharRandom = escolherAleatoriamente(idadeChar);
  const tipoSimRandom = escolherAleatoriamente(tipoSim);
  const aspiracaoRandom = escolherAleatoriamente(aspiracao);
  const orientacaoRandom = escolherAleatoriamente(orientacao);
  const quantMoradoresRandom = escolherAleatoriamente(quant_moradores);
  const sexoCharRandom = escolherAleatoriamente(sexoChar);
  const TerrenoRandom = escolherAleatoriamente(terreno);
  const OrcamentoRandom = escolherAleatoriamente(orcamento);
  const MapaRandom = escolherAleatoriamente(mapas);
  const TipoLoteRandom = escolherAleatoriamente(tipo_lote);
  const TracoLoteRandom = escolherAleatoriamente(traco_lote);
  const QuantDesafioRandom = escolherAleatoriamente(quant_desafios);
  const DesafiosLoteRandom = escolherAleatoriamente(desafios_lote);
  const desafiosSelecionados = selecionarDesafios();
  const personagensGerados = criarPersonagem();
  const tracosSelecionados = selecionarTracoLote();
  console.log(tracosSelecionados);
  console.log(personagensGerados);
  console.log(desafiosSelecionados);
  console.log(MapaRandom);
  console.log(TerrenoRandom);
  console.log(TipoLoteRandom);
  console.log(TracoLoteRandom);
  console.log(OrcamentoRandom);
