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

  const mapas = {
    WillowCreek: 'path/to/WillowCreek.png',
    OasisSpring: 'path/to/OasisSpring.png',
    Newcrest: 'path/to/Newcrest.png',
    MagnoliaPromade: 'path/to/MagnoliaPromade.png',
    Windmburg: 'path/to/Windmburg.png',
    SanMyshuno: 'path/to/SanMyshuno.png',
    ForgottenHollow: 'path/to/ForgottenHollow.png',
    BridletonBay: 'path/to/BridletonBay.png',
    DelSoyValley: 'path/to/DelSoyValley.png',
    Strangerville: 'path/to/Strangerville.png',
    Sulani: 'path/to/Sulani.png',
    Glimmerbook: 'path/to/Glimmerbook.png',
    Britechester: 'path/to/Britechester.png',
    EvergreenHarbor: 'path/to/EvergreenHarbor.png',
    MonteKomorebi: 'path/to/MonteKomorebi.png',
    AvelandiaDoNorte: 'path/to/AvelandiaDoNorte.png',
    Tartosa: 'path/to/Tartosa.png',
    MoonwoodMill: 'path/to/MoonwoodMill.png',
    Copperdale: 'path/to/Copperdale.png',
    SanSequoia: 'path/to/SanSequoia.png',
    SerraDasCastanheiras: 'path/to/SerraDasCastanheiras.png',
    Tomarang: 'path/to/Tomarang.png',
  };
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

  const traco_lote = {
    Acustica_excelente : 'img/traco_lote/Trait_TS4_Great_Acoustics.webp',
    Ambiente_agradavel : 'img/traco_lote/Trait_TS4_Convival.webp',
    Aspecto_ensolarado : 'img/traco_lote/Trait_TS4_Sunny_Aspect.webp',
    Aura_romantica : 'img/traco_lote/Trait_TS4_Romantic_Aura.webp',
    Boas_aulas : 'img/traco_lote/Trait_TS4_Bookworm.webp',
    Brincadeira : 'img/traco_lote/Trait_TS4_Child%27s_Play.webp',
    Brisa_revigorante : 'img/traco_lote/Trait_TS4_Breezing_Braces.webp',
    Casa_de_celebridade : 'img/traco_lote/Trait_TS4_Celebrity_Home.webp',
    Casual_nudety : 'img/traco_lote/Trait_TS4_Clothing_Optional.webp',
    Conexão_vampirica : 'img/traco_lote/Trait_TS4_Vampire_Nexus.webp',
    Covil_de_ciencia : 'img/traco_lote/Trait_TS4_Science_Lair.webp',
    Covil_vampirico_registrado : '',
    Caozinha_do_chef,
    Domestico,
    Linha ley,
    Linha ley sombria,
    Espiritos,
    Estudio domestico,
    Fada das moedas,
    Frequente animal attacks,
    Geotermico,
    Gnomos,
    Habitação particular,
    Hypersexual,
    Internet rapida,
    Local de estudo,
    Local de festas,
    Local ecologico,
    Luz natural,
    Melhor ponto da ciidade,
    Nudist hugout,
    Paz e tranqui.,
    Point dos universitarios,
    Ponto movimentado,
    Encontro cães,
    Encontro gatos,
    Poço natural,
    Recebe cães,
    Recebe gatos,
    Roupas ocasionais,
    Vibração maldosa,
    Vizinhança adolecente,
    Área de reprodução,
    Área de treinamento,
    Ótimo solo,
  };

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

  const desafios_lote = {
    Amaldiçoado: 'path/to/Amaldiçoado.png',
    Assombrado: 'path/to/Assombrado.png',
    'Atividade vulcanica': 'path/to/AtividadeVulcanica.png',
    'Capim das pradarias': 'path/to/CapimDasPradarias.png',
    'Criaturas rastejantes': 'path/to/CriaturasRastejantes.png',
    'Fora da rede': 'path/to/ForaDaRede.png',
    Gremlins: 'path/to/Gremlins.png',
    Imundo: 'path/to/Imundo.png',
    'Lote de aterro': 'path/to/LoteDeAterro.png',
    Mofo: 'path/to/Mofo.png',
    'Problema de manutenção': 'path/to/ProblemaDeManutencao.png',
    Raposas: 'path/to/Raposas.png',
    'Reduzir e reciclar': 'path/to/ReduzirEReciclar.png',
    Repulsivo: 'path/to/Repulsivo.png',
    'Vida simples': 'path/to/VidaSimples.png',
    'Área de terremoto': 'path/to/AreaDeTerremoto.png'
  };

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
  
  const sexoChar = ['Masculino', 'Feminino', 'Trans'];
  
  const orientacao = ['Hetero', 'Homoafetivo', 'Pansexual', 'Assexual'];
  
  const idadeChar = ['Bebe de colo', 'Bebe', 'Criança', 'Adolescente', 'Jovem adulto', 'Adulto', 'Idoso'];
  
  const tipoSim = ['Normal', 'Alienigena', 'Sereia', 'LobiSim', 'Vampiro', 'Feiticeiro'];
  
  const aspiracao = ['Romantica em serie', 'Alma gemêa', 'AmigO dos animais', 'Cavalgante', 'Esportes radicais', 'Fisiculturista', 'Cuidados pessoais', 'Paz interior', 'Guru zen',
  'Mixologo', 'Produzir nectar', 'Ás dos eletrodomesticos', 'Chef mestre', 'Academica', 'Gênio da informatiica', 'Cerebro nerd', 'Feitiçaria magica', 'Mestre vampiro', 'Sim da renacença', 'Arqueologia', 'Gênio musical', 'Senhora do trico', 'Mestre da criação', 
  'Atriz magistral', 'Pintor', 'Best-seller', 'Caçadora de segredos', 'Amor do mal', 'inimigo publico', 'travessura', 'familia grande e feliz', 'familia vampiro', 'supermãe/pai', 'linhagem de sucesso', 'propietaria 5 estrelas', 'magnata do mercado', 'rico', 'barão das mansões',
  'lobisim iniciante', 'conhecimento tomarang', 'impecavel', 'nativa da cidade', 'vida de praia', 'misterio em strangerville', 'turista em monte komorebi', 'incrivelmente imundo', 'exploradora da selva', 'inovadora ecologica', 'botanica autonoma', 'as da pesca', 'curadora', 'cuidadora do campo',
  'ar livre', 'produtor de poçoes', 'grande festeira', 'vampiro do bem', 'lider do bando', 'estrela da comedia', 'amiga do mundo', 'habitante perspicaz', 'confidente vizinho', 'celebridade famosa', 'esperança ou ordem', 'corsaria galatica'];

  function criarPersonagens(quantidadeMoradores) {
    const personagens = [];
  
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
  

  let sorteioIntervalOpcoes;
  let sorteioIntervalPersonagem;
  
  function sortearOpcoes() {
    const tempoSorteio = 3000; // 5 segundos de sorteio (5000 milissegundos)
    const tempoTotal = Date.now() + tempoSorteio;
  
    sorteioIntervalOpcoes = setInterval(function() {
      const opcoesSorteadas = {
        mapa: escolherAleatoriamente(mapas),
        terreno: escolherAleatoriamente(terreno),
        tipo_lote: escolherAleatoriamente(tipo_lote),
        traco_lote: escolherAleatoriamente(traco_lote),
        desafio_lote: escolherAleatoriamente(desafios_lote)
      };
  
      exibirAnimacaoPorSorteio(opcoesSorteadas);
  
      // Verificar se o tempo total já passou
      if (Date.now() > tempoTotal) {
        clearInterval(sorteioIntervalOpcoes);
      }
    }, 100);
  }
  
  function exibirAnimacaoPorSorteio(opcoesSorteadas) {
    const animationDiv = document.getElementById('animation');
    animationDiv.innerHTML = '';
  
    for (const sorteio in opcoesSorteadas) {
      const sorteioDiv = document.createElement('div');
      sorteioDiv.classList.add('sorteio');
  
      const titulo = document.createElement('h3');
      titulo.textContent = sorteio + ':';
      sorteioDiv.appendChild(titulo);
  
      const resultado = document.createElement('p');
      resultado.textContent = opcoesSorteadas[sorteio];
      sorteioDiv.appendChild(resultado);
  
      animationDiv.appendChild(sorteioDiv);
    }
  }
  
  
  function sortearPersonagem() {
    const tempoSorteio = 5000; // 5 segundos de sorteio (5000 milissegundos)
    const tempoTotal = Date.now() + tempoSorteio;
  
    sorteioIntervalPersonagem = setInterval(function() {
      const quantidadeMoradores = parseInt(escolherAleatoriamente(quant_moradores));
      const personagensSorteados = criarPersonagens(quantidadeMoradores);
  
      const animationDiv = document.getElementById('animationPersonagem');
      animationDiv.innerHTML = '';
  
      personagensSorteados.forEach(personagem => {
        const personagemDiv = document.createElement('div');
        personagemDiv.classList.add('personagem');
  
        for (const key in personagem) {
          const p = document.createElement('p');
          p.textContent = `${key}: ${personagem[key]}`;
          personagemDiv.appendChild(p);
        }
  
        animationDiv.appendChild(personagemDiv);
      });
  
      // Verificar se o tempo total já passou
      if (Date.now() > tempoTotal) {
        pararSorteio('personagem');
      }
    }, 100);
  }

  
  function iniciarSorteio(tipo) {
    if (tipo === 'mapa') {
      sortearOpcoes();
    } else if (tipo === 'personagem') {
      sortearPersonagem();
    }
  }
  
  function pararSorteio(tipo) {
    if (tipo === 'mapa') {
      clearInterval(sorteioIntervalOpcoes);
    } else if (tipo === 'personagem') {
      clearInterval(sorteioIntervalPersonagem);
    }
  }
  
  function exibirAnimacao(elementId, opcoesSorteadas) {
    const animationDiv = document.getElementById(elementId);
    animationDiv.innerHTML = '';
  
    for (const key in opcoesSorteadas) {
      const p = document.createElement('div');
      p.textContent = `${key}${opcoesSorteadas[key]}`;
      animationDiv.appendChild(p);
    }
  }

