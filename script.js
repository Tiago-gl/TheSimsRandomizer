
function uncheckOtherCheckbox(checkboxId) {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach(cb => {
      if (cb.id !== checkboxId) {
          cb.checked = false;
      }
  });
}

function toggleDicaVisibility() {
  const btnMenu2 = document.getElementById('btn-menu2');
  const dica = document.getElementById('dica');
  if (btnMenu2.checked) {
    dica.style.display = 'block';
  } else {
    dica.style.display = 'none';
  }
}

function adicionarConfetes() {
  const container = document.getElementById('confetti-container');
  const numConfetes = 200; // Número de confetes

  for (let i = 0; i < numConfetes; i++) {
      const confete = document.createElement('div');
      confete.className = 'confetti';
      container.appendChild(confete);

      // Atribuir cores aleatórias aos confetes
      confete.style.backgroundColor = getRandomColor();
  }

  const confetes = document.querySelectorAll('.confetti');
  confetes.forEach(confete => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const rotation = Math.random() * 360;
      const delay = Math.random() * 1; // Delay aleatório para começar a animação
      const duration = Math.random() * 5 + 5; // Duração aleatória da animação

      confete.style.left = `${x}px`;
      confete.style.top = `${y}px`;
      confete.style.transform = `rotate(${rotation}deg)`;
      confete.style.animationDelay = `${delay}s`;
      confete.style.animationDuration = `${duration}s`;
  });
}

// Função para gerar cores aleatórias
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function removerConfetes() {
  const container = document.getElementById('confetti-container');
  container.innerHTML = ''; // Remove todos os confetes do contêiner
}


// Chamada da função quando o sorteio acabar
function sorteioAcabou() {
  adicionarConfetes(); // Chama a função para adicionar confetes quando o sorteio acaba
  // Define um tempo limite para a exibição dos confetes (por exemplo, 5 segundos)
  setTimeout(function() {
      removerConfetes(); // Chama a função para remover os confetes após o tempo limite
  }, 7000); // Tempo limite em milissegundos (5 segundos no exemplo)
}

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
    'Bar de karaokê',
    'Biblioteca',
    'Boate',
    'Brechó e loja de chá',
    'Cafeteria',
    'Casa de banho',
    'Centro de artes',
    'Centro de recreativo',
    'Clénica veterinária',
    'Comércio',
    'Espaço comunitarío',
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
    'Área de convivência UBrite',
    'Área de convivência Foxbury',
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
    Nudist_hugout: 'img/traco_lote/Z_ljg3-Photoroom.webp',
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

  const tracoResidencia = {
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
    Paz_e_tranquilidade: 'img/traco_lote/Trait_TS4_Peace_and_Quiet.webp',
    Encontro_cães: 'img/traco_lote/Trait_TS4_Dog_Hangout.webp',
    Encontro_gatos: 'img/traco_lote/Trait_TS4_Cat_Hangout.webp',
    Poço_natural: 'img/traco_lote/Trait_TS4_Natural_Well.webp',
    Vibração_maldosa: 'img/traco_lote/Trait_TS4_Mean_Vibe.webp',
    Vizinhança_adolecente: 'img/traco_lote/TeenHangout.webp',
    Área_de_reprodução: 'img/traco_lote/Trait_TS4_Breeding_Grounds.webp',
    Área_de_treinamento: 'img/traco_lote/The_Sims_4_Pet_Training_Icon.webp',
    Ótimo_solo: 'img/traco_lote/Trait_TS4_Great_Soil.webp',
  };

  function selecionarTipoLote(tipo) {
    if (tipo === 'residencial') {
      return escolherAleatoriamente(['Residencial', 'Residencial Assombrado', 'Residencial Compacto', 'Residencial Alugado']);
    } else if (tipo === 'todos') {
      return escolherAleatoriamente(tipo_lote);
    } else {
      return tipo;
    }
}
  
  function selecionarTracoLote(apenasResidencial = false) {
    const quantidadeSelecionada = 3;
    const tracosSelecionados = new Set(); // Usaremos um conjunto para garantir que não haja traços repetidos
    
    let tracosDisponiveis = apenasResidencial ? Object.keys(tracoResidencia) : Object.keys(traco_lote);
    
    // Continuaremos selecionando traços até termos a quantidade desejada
    while (tracosSelecionados.size < quantidadeSelecionada) {
      const tracoAleatorio = escolherAleatoriamente(tracosDisponiveis);
      tracosSelecionados.add(tracoAleatorio);
    }
    
    // Convertemos o conjunto de volta para um array antes de retornar
    return Array.from(tracosSelecionados);
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
  
  const sexoChar = {
    Masculino:'img/Male_35764.png',
    Feminino: 'img/Female_35792.png'
  };
  
  const orientacao = ['Hetero', 'Homosexual', 'Pansexual', 'Assexual'];
  
  const idadeChar = ['Bebê de colo', 'Bebê', 'Criança', 'Adolescente', 'Jovem adulto', 'Adulto', 'Idoso'];
  
  const tipoSim = {
    Normal: 'img/tipo_sim/Clingy.webp',
    Alienigena: 'img/tipo_sim/Fgena_29.webp',
    Sereia: 'img/tipo_sim/Sereia.webp',
    LobiSim: 'img/tipo_sim/Lobisomem.webp',
    Vampiro: 'img/tipo_sim/Vampiro.webp',
    Feiticeiro: 'img/tipo_sim/Fcone4_Feiticeiro.webp'
  };
  
  const aspiracao = {
    Romantica_em_serie: 'img/aspiracao/Aspira3Fo_Rom3Frie.webp',
    Alma_gemêa: 'img/aspiracao/Aspira3Fo_Alma_G3Fmea.webp',
    Amigo_dos_animais: 'img/aspiracao/Aspira3Fo_Amiga_dos_Animais.webp',
    Cavalgante: 'img/aspiracao/Aspira3Fo_Cavalgante_de_Campeonato.webp',
    Esportes_radicais: 'img/aspiracao/Aspira3Fo_Entusiasta_de_Esportes_Radicais.webp',
    Fisiculturista: 'img/aspiracao/Aspira3Fo_Fisiculturista.webp',
    Cuidados_pessoais: 'img/aspiracao/Aspira3Fo_Especialista_em_Cuidados_Pessoais.webp',
    Paz_interior: 'img/aspiracao/Aspira3Fo_Paz_Interior.webp',
    Guru_zen: 'img/aspiracao/Aspira3Fo_Guru_Zen.webp',
    Mixologo: 'img/aspiracao/Aspiração_Mestre_da_Mixologia.webp',
    Produzir_nectar: 'img/aspiracao/Aspira3Fo_Especialista_na_Produ3Fo_de_N3Fctar.webp',
    Ás_dos_eletrodomesticos: 'img/aspiracao/Aspiration_TS4_Eletrodomesticos.webp',
    Chef_mestre: 'img/aspiracao/Aspira3Fo_Chef_Mestre.webp',
    Academico: 'img/aspiracao/Aspira3Fo_Acad3Fmico.webp',
    Gênio_da_informatiica: 'img/aspiracao/Aspira3Fo_G3Ftica.webp',
    Cerebro_nerd: 'img/aspiracao/Aspira3Fo_C3Frebro_Nerd.webp',
    Feitiçaria_magica: 'img/aspiracao/Aspira3Fo_Feiti3Faria_e_Magia.webp',
    Mestre_vampiro: 'img/aspiracao/Aspira3Fo_Mestre_Vampiro.webp',
    Sim_da_renacença: 'img/aspiracao/Aspira3Fo_Sim_da_Renascen3Fa.webp',
    Arqueologia: 'img/aspiracao/Aspira3Fo_Estudioso_de_Arqueologia.webp',
    Gênio_musical: 'img/aspiracao/Aspira3Fo_G3Fnio_Musical.webp',
    Senhor_do_trico: 'img/aspiracao/Aspira3Fo_Senhor_do_Tric3F.webp',
    Mestre_da_criação: 'img/aspiracao/Aspira3Fo_Mestre_da_Cria3Fo.webp',
    Atriz_magistral: 'img/aspiracao/Aspira3Fo_Ator_Magistral.webp',
    Pintor: 'img/aspiracao/Aspira3Fo_Pintor_Extraordin3Frio.webp',
    Best_seller: 'img/aspiracao/Aspira3Fo_Autor_Best-seller.webp',
    Caçadora_de_segredos: 'img/aspiracao/Aspira3Fo_Ca3Fador_de_Segredos.webp',
    Amor_do_mal: 'img/aspiracao/Aspira3Fo_Amor_do_Mal.webp',
    inimigo_publico: 'img/aspiracao/Aspira3Fo_Inimigo_P3Fblico.webp',
    travessura: 'img/aspiracao/Aspira3Fo_Rei_das_Travessuras.webp',
    familia_grande_e_feliz: 'img/aspiracao/Aspira3Fo_Fam3Flia_Grande_e_Feliz.webp',
    familia_vampiro: 'img/aspiracao/Aspira3Fo_Fam3Flia_de_Vampiros.webp',
    superpai: 'img/aspiracao/Aspira3Fo_Superpai.webp',
    linhagem_de_sucesso: 'img/aspiracao/Aspira3Fo_Linhagem_de_Sucesso.webp',
    propietaria_5_estrelas: 'img/aspiracao/Aspira3Fo_Propriet3Frio_Cinco_Estrelas.webp',
    magnata_do_mercado: 'img/aspiracao/Aspiration_TS4_Magnata_mercado.webp',
    rico: 'img/aspiracao/Aspira3Fo_Fabulosamente_Rico.webp',
    barão_das_mansões: 'img/aspiracao/Aspira3Fo_Bar3Fes.webp',
    lobisim_iniciante: 'img/aspiracao/Categoria_LobiSim.webp',
    conhecimento_tomarang: 'img/aspiracao/Aspira3Fo_Fonte_do_Conhecimento_de_Tomarang.webp',
    impecavel: 'img/aspiracao/Aspira3Fo_Perfeitamente_Impe3Fvel.webp',
    nativa_da_cidade: 'img/aspiracao/Aspira3Fo_Nativo_da_Cidade.webp',
    vida_de_praia: 'img/aspiracao/Aspira3Fo_Vida_na_Praia.webp',
    misterio_em_strangerville: 'img/aspiracao/Aspira3Fo_Mist3Frio_em_StrangerVille.webp',
    turista_em_monte_komorebi: 'img/aspiracao/Aspira3Fo_Turista_do_Monte_Komorebi.webp',
    incrivelmente_imundo: 'img/aspiracao/Aspira3Fo_Incrivelmente_Imundo.webp',
    exploradora_da_selva: 'img/aspiracao/Aspira3Fo_Explorador_da_Selva.webp',
    inovadora_ecologica: 'img/aspiracao/Aspira3Fo_Inovador_EcolFgico.webp',
    botanica_autonoma: 'img/aspiracao/Aspira3Fo_Bot3Fnomo.webp',
    as_da_pesca: 'img/aspiracao/Aspira3Fo_3Fs_da_Pesca.webp',
    curador: 'img/aspiracao/Aspira3Fo_Curador.webp',
    cuidador_do_campo: 'img/aspiracao/Aspira3Fo_Cuidador_do_Campo.webp',
    ar_livre: 'img/aspiracao/Aspira3Fo_Entusiasta_Do_Ar_Livre.webp',
    Artista_dos_Cristais: 'img/aspiracao/Aspiração_Artista_dos_Cristais.webp',
    produtor_de_poçoes: 'img/aspiracao/Aspira3Fo_Produtor_de_Po3Fes.webp',
    grande_festeira: 'img/aspiracao/Aspira3Fo_Grande_Festeiro.webp',
    vampiro_do_bem: 'img/aspiracao/Aspira3Fo_Vampiro_do_Bem.webp',
    lider_do_bando: 'img/aspiracao/Aspira3Fo_L3Fder_do_Bando.webp',
    estrela_da_comedia: 'img/aspiracao/Aspira3Fo_Astro_da_Com3Fdia.webp',
    amigo_do_mundo: 'img/aspiracao/Aspira3Fo_Amigo_do_Mundo.webp',
    habitante_perspicaz: 'img/aspiracao/Aspira3Fo_Habitante_Perspicaz.webp',
    confidente_vizinho: 'img/aspiracao/Aspira3Fo_Confidente_da_Vizinhan3Fa.webp',
    celebridade_famosa: 'img/aspiracao/Aspira3Fo_Celebridade_Mundialmente_Famosa.webp',
    esperança_ou_ordem: 'img/aspiracao/Aspira3Fo_Esperan3Fa_ou_Ordem.webp',
    corsaria_galatica: 'img/aspiracao/Aspira3Fo_Cors3Fctico.webp',
  };

const aspiracaoChild = {
  Prodígio_Artístico: 'img/aspiracao/Aspira3Fo_Prodigio_Art3Fstico.webp',
  Jovem_Gênio: 'img/aspiracao/Aspira3Fo_Jovem_G3Fnio.webp',
  Capitão_Brincadeira: 'img/aspiracao/Aspira3Fo_Capit3Fo_da_Brincadeira.webp',
  Gênia_Criativo: 'img/aspiracao/Aspira3Fo_G3Fnio_Criativo.webp',
  Estrela_da_Festa_de_pijama: 'img/aspiracao/Aspira3Fo_Estrela_da_Festa_do_Pijama.webp',
  Corpo_e_Mente: 'img/aspiracao/Aspira3Fo_Corpo_e_Mente.webp',
  Pestinha_Agitada: 'img/aspiracao/Aspira3Fo_Pestinha_Agitado.webp',
  Borboleta_Social: 'img/aspiracao/Aspira3Fo_Borboletinha_Social.webp',
};

function escolherOrientacao(idade) {
  // Se a idade for "Bebê", "Bebê de Colo" ou "Criança", retornar vazio
  if (idade === 'Bebê' || idade === 'Bebê de colo' || idade === 'Criança') {
      return '';
  } else {
      return escolherAleatoriamente(orientacao);
  }
}

function escolherAspiracao(idade) {
  if (idade === 'Bebê' || idade === 'Bebê de colo') {
    return '';
  } else if (idade === 'Criança') {
    const aspiracaoCrianca = escolherAleatoriamente(Object.keys(aspiracaoChild));
    console.log('Aspiração para criança:', aspiracaoCrianca); // Adicionando um log para depuração
    return aspiracaoCrianca;
  } else {
    const aspiracaoOutraIdade = escolherAleatoriamente(Object.keys(aspiracao));
    console.log('Aspiração para outra idade:', aspiracaoOutraIdade); // Adicionando um log para depuração
    return aspiracaoOutraIdade;
  }
}

function criarPersonagens(quantidadeMoradores) {
  const personagens = [];

  for (let i = 0; i < quantidadeMoradores; i++) {
    const sexo = escolherAleatoriamente(Object.keys(sexoChar));
    const idade = escolherAleatoriamente(idadeChar);
    const orientacao = escolherOrientacao(idade);
    let aspiracao;
    if (idade === 'Criança') {
      aspiracao = escolherAspiracao(idade); // Aqui estamos chamando escolherAspiracao com a string 'Criança'
    } else {
      aspiracao = escolherAspiracao(idade);
    }
    const tipo = escolherAleatoriamente(Object.keys(tipoSim));

    const personagem = {
      sexo: sexo,
      orientacao: orientacao,
      idade: idade,
      tipo: tipo,
      aspiracao: aspiracao
    };
    personagens.push(personagem);
  }
  console.log(aspiracao)
  return personagens;
}

function exibirImagemSexo(sexo) {
  const img = document.createElement('img');
  img.src = sexoChar[sexo];
  return img;
}

function exibirImagemTipoSim(tipo) {
  const img = document.createElement('img');
  img.src = tipoSim[tipo];
  img.title = tipoSim[tipo];
  return img;
}

function exibirImagemAspiracao(aspiracaoKey) {
  const img = document.createElement('img');
  img.src = aspiracao[aspiracaoKey];
  img.title = aspiracaoKey; // Usaremos a chave como título
  return img;
}

function exibirImagemAspiracaoChild(aspiracaoKey) {
  const img = document.createElement('img');
  img.src = aspiracaoChild[aspiracaoKey];
  img.title = aspiracaoKey;
  return img;
}

  let sorteioIntervalOpcoes;
  let sorteioIntervalPersonagem;
  
  function sortearOpcoes() {
    const tempoSorteio = 3000; // 3 segundos de sorteio (3000 milissegundos)
    const tempoTotal = Date.now() + tempoSorteio;
  
    const checkboxResidencial = document.getElementById('btn-menu');
    const tipo = checkboxResidencial.checked ? 'residencial' : 'todos'; // Verifica se a checkbox residencial está marcada
  
    sorteioIntervalOpcoes = setInterval(function() {
      const opcoesSorteadas = {
        Mapa: escolherAleatoriamente(Object.keys(mapas)), // Sorteie apenas o nome do mapa
        Terreno: escolherAleatoriamente(terreno),
        Tipo: selecionarTipoLote(tipo), // Passa o tipo para a função selecionarTipoLote
        Traços: selecionarTracoLote(tipo === 'residencial'), // Ajusta a seleção de traços com base no tipo de lote
        Desafios: selecionarDesafios(),
        Orcamento: escolherAleatoriamente(orcamento),
      };
  
      exibirAnimacaoPorSorteio(opcoesSorteadas);
  
      // Verificar se o tempo total já passou
      if (Date.now() > tempoTotal) {
        clearInterval(sorteioIntervalOpcoes);
        sorteioAcabou();
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
        mapaImagem.title = mapa;
        sorteioDiv.appendChild(mapaImagem);
        }
    } else if (sorteio === 'Traços') {
        const tracos = opcoesSorteadas[sorteio];
        for (const traco of tracos) {
            // Verificar se o traco existe na lista de traços e tem uma imagem associada
            if (traco_lote.hasOwnProperty(traco)) {
                const tracoImagem = document.createElement('img');
                tracoImagem.src = traco_lote[traco];
                tracoImagem.title = traco;
                sorteioDiv.appendChild(tracoImagem);
            }
        } 
      } else if (sorteio === 'Desafios') {
        const desafios = opcoesSorteadas[sorteio];
        for (const desafio of desafios) {
            const desafioImagem = document.createElement('img');
            desafioImagem.src = desafio.imagem;
            desafioImagem.title = desafio.nome;
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
    let personagensSorteados = criarPersonagens(quantidadeMoradores);

    // Verificar se pelo menos um personagem tem uma idade de adolescente, jovem adulto ou idoso
    const possuiGrupoEtarioNecessario = personagensSorteados.some(personagem => {
      const idade = personagem.idade;
      return idade === 'Adolescente' || idade === 'Jovem adulto' || idade === 'Idoso';
    });

    if (!possuiGrupoEtarioNecessario) {
      // Escolher aleatoriamente um personagem e modificar sua idade para adolescente, jovem adulto ou idoso
      const indexAleatorio = Math.floor(Math.random() * personagensSorteados.length);
      const indexGrupoEtario = Math.floor(Math.random() * 3); // 0 para adolescente, 1 para jovem adulto, 2 para idoso
      const grupoEtario = ['Adolescente', 'Jovem adulto', 'Idoso'][indexGrupoEtario];
      personagensSorteados[indexAleatorio].idade = grupoEtario;
    }

    const animationDiv = document.getElementById('animationPersonagem');
    animationDiv.innerHTML = '';

    personagensSorteados.forEach(personagem => {
      const personagemDiv = document.createElement('div');
      personagemDiv.classList.add('personagem');

      // Exibir a imagem do sexo
      const sexoImg = exibirImagemSexo(personagem.sexo);
      personagemDiv.appendChild(sexoImg);

      for (const key in personagem) {
        if (key === 'sexo') {
          continue; // Já exibimos a imagem do sexo, então passamos para a próxima propriedade
        }
        if (key === 'orientacao' && personagem[key] === '') {
          continue; // Pular a criação do elemento se a orientação estiver vazia
        }
        if (key === 'aspiracao' && personagem[key] === '') {
          continue; // Pular a criação do elemento se a aspiração estiver vazia
        }
        if (key === 'tipo') {
          const tipoImg = exibirImagemTipoSim(personagem[key]);
          personagemDiv.appendChild(tipoImg);
          continue;
        }
        if (key === 'aspiracao') {
          const aspiracaoImg = personagem.idade === 'Criança' ? exibirImagemAspiracaoChild(personagem[key]) : exibirImagemAspiracao(personagem[key]);
          aspiracaoImg.style.display = 'block'; // Adicionar estilo para exibir a imagem em uma nova linha
          aspiracaoImg.style.marginLeft = 'auto'; // Centralizar a imagem
          aspiracaoImg.style.marginRight = 'auto'; // Centralizar a imagem
          personagemDiv.appendChild(aspiracaoImg);
          continue;
      }
        
        const p = document.createElement('p');
        p.textContent = `${key}: ${personagem[key]}`;
        personagemDiv.appendChild(p);
      }

      animationDiv.appendChild(personagemDiv);
    });

    // Verificar se o tempo total já passou
    if (Date.now() > tempoTotal) {
      pararSorteio('personagem');
      sorteioAcabou();
    }
  }, 100);
}
  
  function iniciarSorteio(tipo) {
    const checkboxes = document.querySelectorAll('.checkbox');  
    let algumaSelecionada = false;
    checkboxes.forEach(cb => {
        if (cb.checked) {
            algumaSelecionada = true;
        }
    });
    if (algumaSelecionada) {
        if (tipo === 'mapa') {
            sortearOpcoes();
        } else if (tipo === 'personagem') {
            sortearPersonagem();
        }
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

