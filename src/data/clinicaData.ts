import { Especialidade, DepoimentoRecuperacao, PilarMetodologia, MetricItem } from '../types';

export const METRICAS_CLINICA: MetricItem[] = [
  {
    valor: 4800,
    sufixo: '+',
    label: 'Pacientes Reabilitados',
    descricao: 'Casos tratados com sucesso e retorno integral às atividades sem dor.'
  },
  {
    valor: 98,
    sufixo: '%',
    label: 'Alívio Significativo',
    descricao: 'Redução mensurável do quadro álgico nas primeiras 4 semanas de protocolo.'
  },
  {
    valor: 14,
    sufixo: ' anos',
    label: 'Excelência Clínica',
    descricao: 'Dedicados exclusivamente à fisioterapia baseada em evidências científicas.'
  },
  {
    valor: 100,
    sufixo: '%',
    label: 'Atendimento Individual',
    descricao: 'Sessões exclusivas 1:1 com fisioterapeuta dedicado durante todo o tempo.'
  }
];

export const ESPECIALIDADES: Especialidade[] = [
  {
    id: 'rpg-souchard',
    tag: 'Postura & Coluna',
    titulo: 'RPG — Reeducação Postural Global',
    subtitulo: 'Correção morfofuncional das cadeias musculares encurtadas.',
    descricao: 'Método fisioterapêutico minucioso que atua sobre a desarmonia corporal através de posturas de alongamento progressivo e contração isométrica em posições cada vez mais excêntricas. Trata a causa primária das deformidades e compensações corporais.',
    beneficios: [
      'Descompressão gradual dos discos intervertebrais',
      'Correção de escolioses, hiperlordoses e hipercifoses',
      'Alívio de cefaleias tensionais e dores cervicais crônicas',
      'Reorganização da mecânica respiratória e diafragmática'
    ],
    indicacoes: [
      'Hérnias discais cervicais e lombares',
      'Desvios posturais em jovens e adultos',
      'Dores ocupacionais e síndromes miofasciais',
      'Rigidez articular e perda de mobilidade'
    ],
    duracaoSessao: '60 minutos — Sessão Individual',
    imagemUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    icone: 'Activity'
  },
  {
    id: 'pilates-clinico',
    tag: 'Fortalecimento & Biomecânica',
    titulo: 'Pilates Clínico & Reabilitação',
    subtitulo: 'Controle motor, estabilização central e fortalecimento profundo.',
    descricao: 'Diferente do pilates recreativo, o Pilates Clínico na OrtoFísio é conduzido estritamente por fisioterapeutas pós-graduados. Cada movimento é prescrito com base em rigorosa avaliação biomecânica, utilizando equipamentos clássicos como Reformer, Cadillac e Chair.',
    beneficios: [
      'Fortalecimento específico do complexo core (transverso e multífidos)',
      'Aumento da flexibilidade sem sobrecarga articular',
      'Melhoria notável da consciência corporal e equilíbrio',
      'Prevenção comprovada de recidivas de dores na coluna'
    ],
    indicacoes: [
      'Pós-reabilitação de lesões articulares e fraturas',
      'Condromalácia patelar e lombalgias crônicas',
      'Sedentários em transição para atividade física segura',
      'Gestantes e idosos com necessidade de adaptação funcional'
    ],
    duracaoSessao: '50 a 60 minutos — Exclusivo ou Dupla',
    imagemUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    icone: 'ShieldCheck'
  },
  {
    id: 'traumato-ortopedia',
    tag: 'Cirúrgico & Articular',
    titulo: 'Fisioterapia Traumato-Ortopédica',
    subtitulo: 'Recuperação funcional de traumas, cirurgias e desgastes osteoarticulares.',
    descricao: 'Abordagem especializada para o tratamento de fraturas, entorses, luxações e patologias crônicas degenerativas. Unimos terapia manual de alta especificidade com recursos eletrofototerapêuticos e cinesioterapia direcionada para retorno rápido às atividades de vida diária.',
    beneficios: [
      'Aceleração da consolidação óssea e cicatrização ligamentar',
      'Redução imediata do edema e processo inflamatório local',
      'Restauração completa dos graus normais de amplitude articular',
      'Ganho progressivo de torque e potência muscular segura'
    ],
    indicacoes: [
      'Pós-operatórios de LCA, meniscos e próteses articulares',
      'Bursites, tendinopatias de manguito rotador e fascite plantar',
      'Artrose severa de quadril e joelho',
      'Entorses de repetição e instabilidade ligamentar'
    ],
    duracaoSessao: '60 minutos — Foco Terapêutico Rigoroso',
    imagemUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    icone: 'Bone'
  },
  {
    id: 'coluna-hernia',
    tag: 'Tratamento Conservador',
    titulo: 'Reabilitação Especializada da Coluna',
    subtitulo: 'Protocolo neuro-biomecânico não cirúrgico para hérnia e ciatalgia.',
    descricao: 'Abordagem de vanguarda baseada nas melhores diretrizes ortopédicas internacionais. Através de tração computadorizada suave, mobilização articular articular específica (Mulligan e Maitland) e exercícios de centralização de dor (Método McKenzie), devolvemos o alinhamento da coluna sem procedimentos invasivos.',
    beneficios: [
      'Evita procedimentos cirúrgicos em até 92% dos casos acompanhados',
      'Alívio da dor irradiada para as pernas (dor no nervo ciático)',
      'Descompressão das raízes nervosas inflamadas',
      'Educação do paciente para manutenção postural autônoma'
    ],
    indicacoes: [
      'Hérnia de disco protusa ou extrusa (cervical e lombar)',
      'Estenose do canal vertebral e espondilolistese',
      'Lombociatalgia aguda e travamento lombar ("bico de papagaio")',
      'Dores ciáticas reincidentes pós-jornada de trabalho'
    ],
    duracaoSessao: '60 minutos — Sessão Direcionada',
    imagemUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
    icone: 'Compass'
  },
  {
    id: 'fisioterapia-esportiva',
    tag: 'Performance & Retorno',
    titulo: 'Fisioterapia Desportiva Avançada',
    subtitulo: 'Prevenção de lesões e reabilitação de atletas amadores e profissionais.',
    descricao: 'Metodologia orientada para restaurar a integridade cinética e otimizar o gesto biomecânico específico de cada modalidade esportiva (corrida, tênis, musculação, ciclismo, futebol). Avaliação com testes dinâmicos de carga e estabilometria funcional.',
    beneficios: [
      'Testes funcionais de retorno seguro ao esporte (Return-to-Play)',
      'Correção de assimetrias de força muscular entre membros',
      'Liberação miofascial com instrumental em aço cirúrgico (IASTM)',
      'Prevenção de lesões por sobrecarga e microtraumas contínuos'
    ],
    indicacoes: [
      'Atletas com dor no joelho do corredor (síndrome do trato iliotibial)',
      'Epicondilite lateral (cotovelo de tenista/golfista)',
      'Estiramentos musculares de isquiotibiais e panturrilha',
      'Preparação para provas, maratonas e campeonatos'
    ],
    duracaoSessao: '60 minutos — Avaliação Funcional Incluída',
    imagemUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    icone: 'Zap'
  },
  {
    id: 'terapia-manual-miofascial',
    tag: 'Alívio Álgico Imediato',
    titulo: 'Terapia Manual & Descompressão Miofascial',
    subtitulo: 'Técnicas manuais avançadas de manipulação articular e tecidual.',
    descricao: 'Aplicação cirúrgica de técnicas manuais como Maitland, osteopatia estrutural e liberação miofascial profunda para desativar pontos-gatilho miofasciais ativos, restaurar o deslizamento entre as fáscias musculares e modular os receptores de dor do sistema nervoso central.',
    beneficios: [
      'Alívio expressivo do tônus muscular hiperativo já na primeira sessão',
      'Melhora imediata do fluxo sanguíneo tecidual e oxigenação',
      'Eliminação de contraturas resistentes a medicamentos',
      'Restauração da elasticidade biomecânica dos tecidos conjuntivos'
    ],
    indicacoes: [
      'Pontos de gatilho miofasciais dolorosos (Trigger Points)',
      'Torcicolo agudo e bloqueio mecânico escapular',
      'Síndrome do túnel do carpo e sobrecarga laboral',
      'Sensação constante de "peso" nos ombros e região cervical'
    ],
    duracaoSessao: '50 minutos — Intervenção Manual Concentrada',
    imagemUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    icone: 'Sparkles'
  }
];

export const METODOLOGIA_FASES: PilarMetodologia[] = [
  {
    numero: '01',
    fase: 'Diagnóstico Biomecânico',
    titulo: 'Avaliação Postural e Cinético-Funcional Detalhada',
    descricao: 'Não tratamos apenas o local onde dói. Realizamos mapeamento postural completo, testes ortopédicos específicos, análise de amplitude e palpação tecidual minuciosa para encontrar a causa-raiz da sobrecarga.',
    itens: [
      'Goniometria e testes de flexibilidade muscular',
      'Inspeção dinâmica do padrão de marcha e movimento',
      'Avaliação de assimetrias e déficits de ativação do core',
      'Definição de metas clínicas claras e mensuráveis'
    ]
  },
  {
    numero: '02',
    fase: 'Alívio Álgico & Descompressão',
    titulo: 'Controle Imediato do Processo Inflamatório e Dor',
    descricao: 'Aplicação de condutas terapêuticas voltadas à modulação da dor: terapia manual precisa, recursos de termoterapia, eletroanalgesia com correntes selecionadas e descompressão articular para devolver conforto imediato.',
    itens: [
      'Terapia manual descompressiva articular',
      'Desativação de pontos-gatilho miofasciais mioálgicos',
      'Redução de espasmos musculares protetores involuntários',
      'Restauração precoce dos micromovimentos articulares'
    ]
  },
  {
    numero: '03',
    fase: 'Fortalecimento Neuromuscular',
    titulo: 'Restauração da Estabilidade e Controle Motor',
    descricao: 'Com a dor sob controle, ingressamos no trabalho de ativação muscular profunda. Utilizando aparelhos de Pilates e resistência progressiva, reprogramamos o cérebro para recrutar a musculatura estabilizadora correta.',
    itens: [
      'Ativação seletiva do complexo do transverso abdominal e multífidos',
      'Exercícios em cadeia cinética fechada de baixo impacto',
      'Estabilização escapular e pélvica em plano tridimensional',
      'Treino proprioceptivo em superfícies instáveis'
    ]
  },
  {
    numero: '04',
    fase: 'Longevidade & Autonomia',
    titulo: 'Educação Postural e Prevenção de Recidivas',
    descricao: 'Capacitamos o paciente para ser o guardião de sua própria saúde articular. Ensinamos ergonomia prática no trabalho, orientações de autocuidado e mantemos planos de manutenção com Pilates Clínico continuado.',
    itens: [
      'Orientações ergonômicas personalizadas para home office/posto de trabalho',
      'Guia individualizado de micro-pausas ativas e mobilizações diárias',
      'Prescrição de transição segura para atividades físicas regulares',
      'Monitoramento periódico e acompanhamento preventivo semestral'
    ]
  }
];

export const DEPOIMENTOS_RECUPERACAO: DepoimentoRecuperacao[] = [
  {
    id: 'dep-1',
    paciente: 'Dr. Marcelo Vasconcelos',
    idadeProfissao: '48 anos, Cirurgião Geral',
    diagnostico: 'Hérnia de Disco Lombar L4-L5 com Ciatalgia Aguda',
    tempoRecuperacao: '10 semanas de protocolo integrado',
    depoimento: 'Ficar em pé durante cirurgias de 6 horas havia se tornado um pesadelo incapacitante. Médicos colegas já indicavam intervenção cirúrgica de artrodese. Na OrtoFísio, com a combinação de RPG e descompressão manual, saí do quadro agudo na 3ª semana. Hoje realizo minhas cirurgias sem nenhuma pontada na perna e pratico Pilates Clínico semanalmente como rotina de vida.',
    resultadoChave: 'Retorno integral à rotina cirúrgica sem necessidade de cirurgia na coluna',
    avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80',
    avaliacao: 5
  },
  {
    id: 'dep-2',
    paciente: 'Camila Guimarães',
    idadeProfissao: '34 anos, Arquiteta Urbanista',
    diagnostico: 'Cervicobraquialgia e Retificação Cervical por Ergonomia',
    tempoRecuperacao: '6 semanas de tratamento conservador',
    depoimento: 'Trabalhava horas curvada diante do computador e convivia diariamente com dores de cabeça pulsantes e formigamento nos dedos da mão direita. A precisão do diagnóstico postural na primeira consulta foi impressionante. Corrigimos minha postura com RPG e ganhei uma disposição corporal que não sentia há mais de dez anos.',
    resultadoChave: 'Remissão total das dores de cabeça tensionais e dormência nos membros',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    avaliacao: 5
  },
  {
    id: 'dep-3',
    paciente: 'Eduardo Silveira',
    idadeProfissao: '41 anos, Maratonista Amador',
    diagnostico: 'Pós-operatório de Reconstrução do LCA e Meniscectomia',
    tempoRecuperacao: '6 meses até retorno competitivo seguro',
    depoimento: 'Rompi o ligamento cruzado jogando futebol e meu maior medo era nunca mais completar uma meia-maratona. O protocolo de Fisioterapia Esportiva da OrtoFísio foi científico do início ao fim: dinamometria, controle de carga, treino neuromuscular nos aparelhos de Pilates. Voltei a correr com segurança e completei minha prova sem dor ou inchaço.',
    resultadoChave: 'Conclusão de prova de 21km com índice pessoal superado após cirurgia de joelho',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    avaliacao: 5
  },
  {
    id: 'dep-4',
    paciente: 'Sônia Helena Ramos',
    idadeProfissao: '67 anos, Professora Aposentada',
    diagnostico: 'Gonartrose Bilateral com Perda Severa de Mobilidade',
    tempoRecuperacao: '3 meses com manutenção contínua',
    depoimento: 'Eu mal conseguia descer a escada da minha casa sem me segurar com as duas mãos e lacrimejar de dor nos joelhos. O atendimento atencioso e calmo de toda a equipe me devolveu a dignidade de caminhar no parque com meus netos. O Pilates com apoio do fisioterapeuta fortaleceu minhas pernas sem forçar minhas articulações.',
    resultadoChave: 'Autonomia completa para subir e descer escadas sem auxílio ou analgésicos',
    avatarUrl: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=300&q=80',
    avaliacao: 5
  }
];

export const REGIOES_DOR = [
  { id: 'lombar', nome: 'Coluna Lombar / Ciático', descricao: 'Dor ao sentar, levantar ou que desce pela perna' },
  { id: 'cervical', nome: 'Pescoço & Trapézio / Cervical', descricao: 'Rigidez no pescoço, dor de cabeça ou irradiação para braços' },
  { id: 'joelho', nome: 'Joelhos & Meniscos', descricao: 'Estalos, dor ao descer escadas ou pós-atividade física' },
  { id: 'ombro', nome: 'Ombros & Manguito Rotador', descricao: 'Dificuldade para elevar o braço ou dor noturna ao deitar' },
  { id: 'postura', nome: 'Desvio Postural & Escoliose', descricao: 'Sensação de desalinhamento, assimetria de ombros e fadiga' },
  { id: 'quadril', nome: 'Quadril & Glúteos', descricao: 'Dor ao caminhar, bursite trocantérica ou impacto fêmoro-acetabular' },
  { id: 'tornozelo', nome: 'Tornozelo, Calcanhar & Fascite', descricao: 'Dor nos primeiros passos da manhã ou entorses repetitivas' },
  { id: 'outro', nome: 'Reabilitação Geral / Outra Região', descricao: 'Quadro clínico complexo ou indicação de médico especialista' }
];

export const PERIODOS_PREFERENCIA = [
  { id: 'manha', label: 'Manhã (07h às 12h)' },
  { id: 'tarde', label: 'Tarde (12h às 17h)' },
  { id: 'noite', label: 'Noite (17h às 20h30)' }
];

export const PERGUNTAS_FREQUENTES = [
  {
    pergunta: 'Preciso de encaminhamento médico para iniciar a fisioterapia ou o Pilates Clínico?',
    resposta: 'Não é obrigatório. Pelo Conselho Federal de Fisioterapia e Terapia Ocupacional (COFFITO), o fisioterapeuta é um profissional de primeiro contato, plenamente capacitado para realizar diagnóstico cinético-funcional e prescrever o tratamento adequado. Se você já possuir exames de imagem (ressonâncias, tomografias, radiografias) ou prescrição médica, traga-os na primeira consulta para enriquecer nossa conduta integrada.'
  },
  {
    pergunta: 'Qual é a diferença entre o Pilates tradicional de academia e o Pilates Clínico da OrtoFísio?',
    resposta: 'No Pilates tradicional, as aulas costumam ser ministradas para grupos e focam primariamente em condicionamento físico estético genérico. Na Clínica OrtoFísio, o Pilates Clínico é estritamente conduzido por fisioterapeutas graduados e pós-graduados, em formato 1:1 (ou no máximo dupla com objetivos correlatos). Cada exercício é adaptado minuciosamente de acordo com suas lesões articulares, limitações anatômicas e grau de tolerância da coluna, garantindo 100% de segurança biomecânica.'
  },
  {
    pergunta: 'Como funciona a primeira consulta de avaliação biomecânica?',
    resposta: 'A primeira sessão tem duração aproximada de 60 minutos. Realizamos uma anamnese aprofundada da sua rotina, inspeção estática e dinâmica da postura, testes ortopédicos e neurológicos específicos, palpação articular e análise de exames complementares. Ao final, apresentamos uma explicação transparente sobre a causa primária da sua queixa e o plano terapêutico estimado com número recomendado de sessões.'
  },
  {
    pergunta: 'Em quantas sessões já é possível sentir alívio da dor?',
    resposta: 'Grande parte de nossos pacientes relata alívio perceptível já entre a 1ª e a 4ª sessão, fruto das técnicas descompressivas de terapia manual e eletroanalgesia aplicadas na Fase 1. A consolidação do resultado e a estabilidade da musculatura profunda variam conforme a cronicidade da patologia, com acompanhamento clínico contínuo e mensuração de progresso a cada reavaliação.'
  },
  {
    pergunta: 'Como agendar minha primeira sessão ou tirar dúvidas com a equipe?',
    resposta: 'Você pode utilizar o formulário de Agendamento Online nesta página ou clicar diretamente no botão de WhatsApp para falar instantaneamente com nossa equipe clínica. Teremos enorme prazer em compreender o seu caso e reservar o melhor horário em nossa agenda.'
  }
];
