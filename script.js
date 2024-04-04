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
    WillowCreek: 'img/mapa/3Fcone_Willow_Creek.webp',
    OasisSpring: 'img/mapa/3Fcone_Oasis_Springs.webp',
    Newcrest: 'img/mapa/3Fcone_Newcrest.webp',
    MagnoliaPromade: 'img/mapa/3Fcone_Magnolia_Promenade.webp',
    Windmburg: 'img/mapa/3Fcone_Windenburg.webp',
    SanMyshuno: 'img/mapa/3Fcone_San_Myshuno.webp',
    ForgottenHollow: 'img/mapa/3Fcone_Forgotten_Hollow.webp',
    BridletonBay: 'img/mapa/3Fcone_Brindleton_Bay.webp',
    DelSoyValley: 'img/mapa/3Fcone_Del_Sol_Valley.webp',
    Strangerville: 'img/mapa/3Fcone_StrangerVille.webp',
    Sulani: 'img/mapa/3Fcone_Sulani.webp',
    Glimmerbook: 'img/mapa/3Fcone_Glimmerbrook.webp',
    Britechester: 'img/mapa/3Fcone_Britechester.webp',
    EvergreenHarbor: 'img/mapa/3Fcone_Evergreen_Harbor.webp',
    MonteKomorebi: 'img/mapa/3Fcone_Monte_Komorebi.webp',
    AvelandiaDoNorte: 'img/mapa/3Fndia_do_Norte.webp',
    Tartosa: 'img/mapa/3Fcone_Tartosa.webp',
    MoonwoodMill: 'img/mapa/3Fcone_Moonwood_Mill.webp',
    Copperdale: 'img/mapa/3Fcone_Copperdale.webp',
    SanSequoia: 'img/mapa/3Fcone_San_Sequoia.webp',
    SerraDasCastanheiras: 'img/mapa/3Fcone_Serra_das_Castanheiras.webp',
    Tomarang: 'img/mapa/3Fcone_Tomarang.webp',
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
    Brincadeira : 'img/traco_lote/Trait_TS4_Child27s_Play.webp',
    Brisa_revigorante : 'img/traco_lote/Trait_TS4_Breezing_Braces.webp',
    Casa_de_celebridade : 'img/traco_lote/Trait_TS4_Celebrity_Home.webp',
    Casual_nudety : 'img/traco_lote/Trait_TS4_Clothing_Optional.webp',
    Conexão_vampirica : 'img/traco_lote/Trait_TS4_Vampire_Nexus.webp',
    Covil_de_ciencia : 'img/traco_lote/Trait_TS4_Science_Lair.webp',
    Covil_vampirico_registrado : 'img/traco_lote/Trait_TS4_Vampire_Lair.webp',
    Caozinha_do_chef: 'img/traco_lote/Trait_TS4_Chef27s_Kitchen.webp',
    Domestico: 'img/traco_lote/Trait_TS4_Domestic.webp',
    Linha_ley: 'img/traco_lote/Trait_TS4_On_Ley_Line.webp',
    Linha_ley_sombria: 'img/traco_lote/TS4_Trait_On_A_Dark_Ley_Line.webp',
    Espiritos: 'img/traco_lote/Trait_TS4_Island_Spirits.webp',
    Estudio_domestico: 'img/traco_lote/Trait_TS4_Home_Studio.webp',
    Fada_das_moedas: 'img/traco_lote/Trait_TS4_Penny_Pixies.webp',
    Geotermico: 'img/traco_lote/Trait_TS4_Geothermal.webp',
    Gnomos: 'img/traco_lote/Trait_TS4_Gnomes.webp',
    Habitação_particular: 'img/traco_lote/Trait_TS4_Private_Dwelling.webp',
    Hypersexual: 'img/traco_lote/28The_Sims_429.webp',
    Internet_rapida: 'img/traco_lote/Trait_TS4_Fast_Internet.webp',
    Local_de_estudo: 'img/traco_lote/Trait_TS4_Study_Spot.webp',
    Local_de_festas: 'img/traco_lote/Trait_TS4_Party_Place.webp',
    Local_ecologico: 'img/traco_lote/Trait_TS4_Eco_Lot.webp',
    Luz_natural: 'img/traco_lote/Trait_TS4_Natural_Light.webp',
    Melhor_ponto_da_ciidade: 'img/traco_lote/Trait_TS4_Hottest_Spot_in_Town.webp',
    Nudist_hugout: '',
    Paz_e_tranquilidade: 'img/traco_lote/Trait_TS4_Peace_and_Quiet.webp',
    Point_dos_universitarios: 'img/traco_lote/Trait_TS4_University_Student_Hang_Out.webp',
    Ponto_movimentado: 'img/traco_lote/Trait_TS4_Up-and-Coming_Hotspot.webp',
    Encontro_cães: 'img/traco_lote/Trait_TS4_Dog_Hangout.webp',
    Encontro_gatos: 'img/traco_lote/Trait_TS4_Cat_Hangout.webp',
    Poço_natural: 'img/traco_lote/Trait_TS4_Natural_Well.webp',
    Recebe_cães: 'img/traco_lote/Trait_TS4_Dog_Friendly.webp',
    Recebe_gatos: 'img/traco_lote/Trait_TS4_Cat_Friendly.webp',
    Roupas_ocasionais: 'img/traco_lote/Trait_TS4_Clothing_Optional.webp',
    Vibração_maldosa: 'img/traco_lote/Trait_TS4_Mean_Vibe.webp',
    Vizinhança_adolecente: 'img/traco_lote/TeenHangout.webp',
    Área_de_reprodução: 'img/traco_lote/Trait_TS4_Breeding_Grounds.webp',
    Área_de_treinamento: 'img/traco_lote/The_Sims_4_Pet_Training_Icon.webp',
    Ótimo_solo: 'img/traco_lote/Trait_TS4_Great_Soil.webp',
  };

  function selecionarTracoLote() {
    const quantidadeSelecionada = 3;
    const tracosSelecionados = [];
  
    for (let i = 0; i < quantidadeSelecionada; i++) {
      const tracoAleatorio = escolherAleatoriamente(Object.keys(traco_lote));
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
    Amaldiçoado: 'img/desafio_lote/Trait_TS4_Cursed.webp',
    Assombrado: 'img/desafio_lote/TS4_Ghost_Icon.webp',
    Atividade_vulcanica: 'img/desafio_lote/Trait_TS4_Volcanic_Activity.webp',
    Capim_das_pradarias: 'img/desafio_lote/Trait_TS4_Wild_Prairie_Grass.webp',
    Criaturas_rastejantes: 'img/desafio_lote/Trait_TS4_Creepy_Crawlies.webp',
    Fora_da_rede: 'img/desafio_lote/New_TS4_Off-The-Grid.webp',
    Gremlins: 'img/desafio_lote/Trait_TS4_Gremlin.webp',
    Imundo: 'img/desafio_lote/Trait_TS4_Filthy.webp',
    Lote_de_aterro: 'img/desafio_lote/Trait_TS4_Landfill_Lot.webp',
    Mofo: 'img/desafio_lote/Tra3Fo_de_lote_Mofo.webp',
    Problema_de_manutenção: 'img/desafio_lote/Tra3F3Fo.webp',
    Raposas: 'img/desafio_lote/Trait_TS4_Wild_Foxes.webp',
    Reduzir_e_reciclar: 'img/desafio_lote/Trait_TS4_Eco_Master.webp',
    Repulsivo: 'img/desafio_lote/Trait_TS4_Slob.webp',
    Vida_simples: 'img/desafio_lote/Trait_TS4_Simple_Living.webp',
    Área_de_terremoto: 'img/desafio_lote/Trait_TS4_Quake_Zone.webp'
  };

  function selecionarDesafios() {
    const quantidadeSelecionada = parseInt(escolherAleatoriamente(quant_desafios));
    const desafiosDisponiveis = Object.keys(desafios_lote);
    const desafiosSelecionados = [];

    for (let i = 0; i < quantidadeSelecionada; i++) {
        // Remover desafios já sorteados da lista de desafios disponíveis
        const desafiosRestantes = desafiosDisponiveis.filter(desafio => !desafiosSelecionados.map(d => d.nome).includes(desafio));
        
        // Se não houver desafios restantes, interromper o loop
        if (desafiosRestantes.length === 0) break;
        
        // Selecionar aleatoriamente um desafio dos desafios restantes
        const desafioAleatorio = escolherAleatoriamente(desafiosRestantes);
        
        // Adicionar o desafio selecionado à lista de desafios selecionados
        const desafio = {
            nome: desafioAleatorio,
            imagem: desafios_lote[desafioAleatorio]
        };
        desafiosSelecionados.push(desafio);
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
    '8',
  ];
  
  const sexoChar = ['Masculino', 'Feminino'];
  
  const orientacao = ['Hetero', 'Homoafetivo', 'Pansexual', 'Assexual'];
  
  const idadeChar = ['Bebê de colo', 'Bebê', 'Criança', 'Adolescente', 'Jovem adulto', 'Adulto', 'Idoso'];
  
  const tipoSim = ['Normal', 'Alienigena', 'Sereia', 'LobiSim', 'Vampiro', 'Feiticeiro'];
  
  const aspiracao = ['Romantica em serie', 'Alma gemêa', 'AmigO dos animais', 'Cavalgante', 'Esportes radicais', 'Fisiculturista', 'Cuidados pessoais', 'Paz interior', 'Guru zen',
  'Mixologo', 'Produzir nectar', 'Ás dos eletrodomesticos', 'Chef mestre', 'Academica', 'Gênio da informatiica', 'Cerebro nerd', 'Feitiçaria magica', 'Mestre vampiro', 'Sim da renacença', 'Arqueologia', 'Gênio musical', 'Senhora do trico', 'Mestre da criação', 
  'Atriz magistral', 'Pintor', 'Best-seller', 'Caçadora de segredos', 'Amor do mal', 'inimigo publico', 'travessura', 'familia grande e feliz', 'familia vampiro', 'supermãe/pai', 'linhagem de sucesso', 'propietaria 5 estrelas', 'magnata do mercado', 'rico', 'barão das mansões',
  'lobisim iniciante', 'conhecimento tomarang', 'impecavel', 'nativa da cidade', 'vida de praia', 'misterio em strangerville', 'turista em monte komorebi', 'incrivelmente imundo', 'exploradora da selva', 'inovadora ecologica', 'botanica autonoma', 'as da pesca', 'curadora', 'cuidadora do campo',
  'ar livre', 'produtor de poçoes', 'grande festeira', 'vampiro do bem', 'lider do bando', 'estrela da comedia', 'amiga do mundo', 'habitante perspicaz', 'confidente vizinho', 'celebridade famosa', 'esperança ou ordem', 'corsaria galatica'];

const aspiracaoChild = [
  'Prodígio Artístico', 'Jovem Gênio', 'Capitão Brincadeira', 'Gênia Criativa', 'Estrela da Festa de pijama',
  'Corpo e Mente', 'Pestinha Agitada', 'Borboleta Social',
]

function escolherOrientacao(idade) {
  // Se a idade for "Bebê", "Bebê de Colo" ou "Criança", retornar vazio
  if (idade === 'Bebê' || idade === 'Bebê de colo' || idade === 'Criança') {
      return '';
  } else {
      return escolherAleatoriamente(orientacao);
  }
}

function criarPersonagens(quantidadeMoradores) {
  const personagens = [];

  for (let i = 0; i < quantidadeMoradores; i++) {
    const idade = escolherAleatoriamente(idadeChar);
    const orientacao = escolherOrientacao(idade);

    const personagem = {
      sexo: escolherAleatoriamente(sexoChar),
      orientacao: orientacao,
      idade: idade,
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
    const tempoSorteio = 3000; // 3 segundos de sorteio (3000 milissegundos)
    const tempoTotal = Date.now() + tempoSorteio;
  
    sorteioIntervalOpcoes = setInterval(function() {
      const opcoesSorteadas = {
        Mapa: escolherAleatoriamente(Object.keys(mapas)), // Sorteie apenas o nome do mapa
        Terreno: escolherAleatoriamente(terreno),
        Tipo: escolherAleatoriamente(tipo_lote),
        Traços: selecionarTracoLote(),
        Desafios: selecionarDesafios(),
        Orcamento: escolherAleatoriamente(orcamento),
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

      // Verificar se o sorteio é Mapa
      if (sorteio === 'Mapa') {
          const mapa = opcoesSorteadas[sorteio];
          // Verificar se o mapa existe na lista de mapas
          if (mapas.hasOwnProperty(mapa)) {
              const mapaImagem = document.createElement('img');
              mapaImagem.src = mapas[mapa];
              sorteioDiv.appendChild(mapaImagem);

              // const mapaNome = document.createElement('p');
              // mapaNome.textContent = mapa;
              // sorteioDiv.appendChild(mapaNome);
          }
      } else if (sorteio === 'Traços') {
          const tracos = opcoesSorteadas[sorteio];
          for (const traco of tracos) {
              // Verificar se o traco existe na lista de traços e tem uma imagem associada
              if (traco_lote.hasOwnProperty(traco)) {
                  const tracoImagem = document.createElement('img');
                  tracoImagem.src = traco_lote[traco];
                  sorteioDiv.appendChild(tracoImagem);

                  // const tracoNome = document.createElement('p');
                  // tracoNome.textContent = traco;
                  // sorteioDiv.appendChild(tracoNome);
              }
          } 
        } else if (sorteio === 'Desafios') {
          const desafios = opcoesSorteadas[sorteio];
          for (const desafio of desafios) {
              const desafioImagem = document.createElement('img');
              desafioImagem.src = desafio.imagem;
              sorteioDiv.appendChild(desafioImagem);
          }
      } else {
          resultado.textContent = opcoesSorteadas[sorteio];
          sorteioDiv.appendChild(resultado);
      }

      animationDiv.appendChild(sorteioDiv);
  }
}
  
  function sortearPersonagem() {
    const tempoSorteio = 3000; // 5 segundos de sorteio (5000 milissegundos)
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

