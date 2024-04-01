const botao = document.getElementById('show');
const minhaDiv = document.getElementById('conteiner');

botao.addEventListener('click', function() {
    minhaDiv.style.display = 'block';
});

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
  ]

  const TerrenoRandom = escolherAleatoriamente(terreno);
  const OrcamentoRandom = escolherAleatoriamente(orcamento);
  const MapaRandom = escolherAleatoriamente(mapas);
  const TipoLoteRandom = escolherAleatoriamente(tipo_lote);
  const TracoLoteRandom = escolherAleatoriamente(traco_lote);
  const QuantDesafioRandom = escolherAleatoriamente(quant_desafios);
  const DesafiosLoteRandom = escolherAleatoriamente(desafios_lote);
  console.loge(DesafiosLoteRandom);
  console.log(QuantDesafioRandom);
  console.log(MapaRandom);
  console.log(TerrenoRandom);
  console.log(TipoLoteRandom);
  console.log(TracoLoteRandom);
  console.log(OrcamentoRandom);