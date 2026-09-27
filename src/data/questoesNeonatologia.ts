export interface RawNeonatologiaQuestion {
  id: string;
  grandeArea: 'Pediatria';
  especialidade: 'Pediatria';
  tema: 'Neonatologia';
  subtema?: string;
  isRevisao: boolean;
  enunciado: string;
  alternativas: {
    id: 'A' | 'B' | 'C' | 'D';
    texto: string;
  }[];
  respostaCorreta: 'A' | 'B' | 'C' | 'D';
  comentario: string;
  comentariosAlternativas?: Record<'A' | 'B' | 'C' | 'D', string>;
}

export const QUESTOES_NEONATOLOGIA: RawNeonatologiaQuestion[] = [
  {
    id: 'ped-neo-001',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'As 3 Perguntas Iniciais na Recepção do RN em Sala de Parto',
    isRevisao: false,
    enunciado:
      'Em uma maternidade de nível secundário, nasce por parto vaginal cefálico um recém-nascido de mãe primigesta, com idade gestacional calculada de 39 semanas e 2 dias. Imediatamente após a exteriorização completa do concepto, a equipe de reanimação pediátrica deve responder instantaneamente a três perguntas semiológicas clássicas preconizadas pelas Diretrizes de Reanimação Neonatal da Sociedade Brasileira de Pediatria (SBP) para decidir o destino imediato do neonato. Quais são essas três perguntas e qual a conduta diante de uma resposta afirmativa para todas elas?',
    alternativas: [
      {
        id: 'A',
        texto:
          '1) Gestação a termo? 2) Respirando ou chorando? 3) Tônus muscular em flexão? Se as três respostas forem afirmativas, o recém-nascido é considerado vigoroso e deve ser colocado imediatamente em contato pele a pele junto ao tórax/abdome materno sob campo seco e aquecido, procedendo-se ao clampeamento oportuno do cordão umbilical entre 1 e 3 minutos.',
      },
      {
        id: 'B',
        texto:
          '1) Presença de mecônio? 2) Frequência cardíaca > 140 bpm? 3) Boletim de Apgar > 8? Se afirmativo, transferir o recém-nascido imediatamente para o berço aquecido sob calor radiante para aspiração de vias aéreas.',
      },
      {
        id: 'C',
        texto:
          '1) Peso estimado > 3.000 g? 2) Ausência de cianose de extremidades? 3) Idade materna < 35 anos? Se afirmativo, realizar lavagem gástrica imediata com soro fisiológico.',
      },
      {
        id: 'D',
        texto:
          '1) Tipagem sanguínea compatível? 2) Teste do pezinho positivo? 3) Urina na fralda? Se afirmativo, intubar o recém-nascido preventivamente para evitar aspiração.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As Diretrizes de Reanimação Neonatal da Sociedade Brasileira de Pediatria (SBP) e do International Liaison Committee on Resuscitation (ILCOR) estabelecem uma triagem imediata no momento exato do nascimento baseada em 3 PERGUNTAS ESSENCIAIS:\n1) Gestação a termo? (Idade gestacional entre 37 semanas e 41 semanas e 6 dias);\n2) Respirando ou chorando? (Presença de padrão respiratório espontâneo eficaz e regular);\n3) Tônus muscular em flexão? (Tônus ativo, com postura em flexão de membros e movimentação vigorosa);\nCONDUTA DIANTE DE 3 RESPOSTAS "SIM":\n- O recém-nascido é classificado como VIGOROSO;\n- Não necessita de manobras de reanimação em mesa de estabilização;\n- Deve ser posicionado imediatamente em CONTATO PELE A PELE sobre o abdome ou tórax da mãe, coberto com campo seco e aquecido, assegurando vias aéreas pérvias e manutenção da temperatura;\n- O cordão umbilical deve ser clampeado de forma OPORTUNA (tardia) entre 1 e 3 minutos de vida.',
    comentariosAlternativas: {
      A: 'Correta. As três perguntas da SBP são: Termo? Respirando/chorando? Tônus em flexão? Se sim, contato pele a pele imediato e clampeamento em 1-3 minutos.',
      B: 'Incorreta. Presença de mecônio e Apgar não fazem parte da triagem inicial trifásica para decisão de ir à mesa de reanimação.',
      C: 'Incorreta. Peso, cor da pele e idade materna não guiam a ida imediata ao berço de reanimação; lavagem gástrica de rotina é proscrita.',
      D: 'Incorreta. Tipagem e triagem metabólica são exames pós-parto tardios.',
    },
  },
  {
    id: 'ped-neo-002',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Clampeamento Oportuno do Cordão Umbilical no RN a Termo Vigoroso',
    isRevisao: false,
    enunciado:
      'Em uma sala de parto humanizado, nasce um concepto com 40 semanas de gestação, em boas condições de vitalidade, chorando vigorosamente logo ao nascer e apresentando tônus em flexão. O obstetra aguarda para realizar o clampeamento do cordão umbilical. Em relação ao MOMENTO IDEAL de clampeamento do cordão no recém-nascido a termo vigoroso e aos BENEFÍCIOS HEMATOLÓGICOS E PEDIÁTRICOS comprovados por ensaios clínicos, assinale a conduta e justificativa corretas segundo a SBP e OMS:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Clampar o cordão umbilical de forma oportuna entre 1 e 3 minutos após o nascimento (ou após cessar a pulsação); essa conduta propicia a transfusão de cerca de 80 a 100 mL de sangue placentário, aumentando significativamente os estoques corporais de ferro e prevenindo a anemia ferropriva até o primeiro ano de vida, sem aumentar a morbidade neonatal.',
      },
      {
        id: 'B',
        texto:
          'Clampar imediatamente nos primeiros 5 segundos para evitar que as hemácias do feto retornem para a placenta e causem choque hipovolêmico grave.',
      },
      {
        id: 'C',
        texto:
          'Aguardar no mínimo 45 minutos com a placenta na banheira morna antes de clampar, pois o cordão deve se desprender sozinho.',
      },
      {
        id: 'D',
        texto:
          'O clampeamento oportuno só é permitido se a mãe for portadora de HIV positivo com carga viral indetectável.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O CLAMPEAMENTO OPORTUNO (TARDIO) DO CORDÃO UMBILICAL no RN a termo vigoroso é uma prática com fortíssima base em evidências científicas:\n1) TEMPO RECOMENDADO:\nEntre 1 e 3 minutos de vida completos ou até a interrupção da pulsação dos vasos umbilicais;\n2) BENEFÍCIOS COMPROVADOS NO RN A TERMO:\n- Transfusão placentária fisiológica: transfere de 20 a 40 mL/kg de sangue oxigenado adicional para a circulação fetal (cerca de 80 a 100 mL de sangue total);\n- Aumento dos níveis de hemoglobina e hematócrito nas primeiras semanas de vida;\n- Aumento significativo dos depósitos corporais de ferritina e ferro sérico aos 3, 6 e 12 meses de vida, reduzindo drasticamente a prevalência de anemia ferropriva na infância e protegendo o neurodesenvolvimento cognitivo;\n3) EFEITOS ADVERSOS:\n- Discreto aumento na incidência de policitemia assintomática e icterícia neonatal fisiológica leve com indicação de fototerapia, sem qualquer elevação na taxa de exanguinotransfusão ou sequelas.',
    comentariosAlternativas: {
      A: 'Correta. Clampeamento oportuno entre 1 e 3 minutos garante transfusão placentária, elevando estoques de ferro e prevenindo anemia ferropriva.',
      B: 'Incorreta. O clampeamento precoce reduz o volume sanguíneo do RN em cerca de 30% e aumenta o risco de anemia ferropriva.',
      C: 'Incorreta. Aguardar 45 minutos (parto lótus) não traz benefícios comprovados e predispõe a infecções umbilicais e hipotermia.',
      D: 'Incorreta. No caso de mães portadoras de HIV ou HTLV, a indicação é o clampeamento imediato para evitar transmissão vertical.',
    },
  },
  {
    id: 'ped-neo-003',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Clampeamento Imediato do Cordão Umbilical - Indicações Formais',
    isRevisao: false,
    enunciado:
      'Durante a assistência em sala de parto, o neonatologista deve reconhecer as situações excepcionais nas quais o clampeamento do cordão umbilical NÃO deve ser adiado, sendo mandatório o CLAMPEAMENTO IMEDIATO. De acordo com as normas da Sociedade Brasileira de Pediatria e Ministério da Saúde, em qual das situações clínicas abaixo o clampeamento imediato (sem aguardar 1 a 3 minutos) é FORMALMENTE EXIGIDO?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Recém-nascido que não inicia respiração espontânea ou apresenta-se hipotônico/não vigoroso ao nascer, situações de descolamento prematuro de placenta (DPP), placenta prévia com sangramento materno ativo, rotura de vasa prévia ou em mães vivendo com HIV/HTLV.',
      },
      {
        id: 'B',
        texto:
          'Recém-nascido a termo com choro forte imediato e tônus vigoroso cuja mãe não realizou curso de gestante.',
      },
      {
        id: 'C',
        texto:
          'Parto cesariana eletiva indicado por cesárea anterior iterativa com feto hígido e vigoroso.',
      },
      {
        id: 'D',
        texto:
          'Mãe portadora de diabetes gestacional compensado com dieta cujo concepto nasce chorando ativamente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O CLAMPEAMENTO IMEDIATO DO CORDÃO UMBILICAL (realizado nos primeiros segundos de vida, sem aguardar 1 a 3 minutos) é reservado a situações clínicas específicas em que o atraso no clampeamento compromete a estabilização neonatal ou expõe o bebê a riscos graves:\n1) AUSÊNCIA DE VITALIDADE AO NASCER (RN NÃO VIGOROSO):\nSe o RN apresentar apneia, respiração irregular ou hipotonia, o cordão deve ser clampeado imediatamente para transferência urgente à mesa de reanimação infantil sob calor radiante para início dos passos de estabilização e VPP no primeiro minuto de vida ("minuto de ouro");\n2) COMPROMETIMENTO DA CIRCULAÇÃO ÚTERO-PLACENTÁRIA OU HEMORRAGIA GRAVE:\n- Descolamento Prematuro de Placenta (DPP);\n- Placenta Prévia com hemorragia profusa ativa;\n- Rotura ou nó verdadeiro de cordão umbilical com colapso de vasos;\n3) RISCO DE TRANSMISSÃO VERTICAL:\n- Mães vivendo com HIV positivo ou HTLV (recomenda-se clampeamento precoce para reduzir a exposição ao sangue e secreções maternas infectantes);\n- Casos de isoimunização Rh grave com hidropisia fetal (em debate, com clampeamento precoce clássico para evitar hipervolemia aguda e sobrecarga cardíaca).',
    comentariosAlternativas: {
      A: 'Correta. RN não vigoroso, DPP, sangramento de placenta prévia, rotura de cordão e mães com HIV/HTLV são indicações formais de clampeamento imediato.',
      B: 'Incorreta. RN vigoroso deve receber clampeamento oportuno em 1 a 3 minutos.',
      C: 'Incorreta. A via de parto cesariana não impede o clampeamento oportuno se o feto nascer vigoroso.',
      D: 'Incorreta. Diabetes gestacional isolado com RN a termo vigoroso permite clampeamento oportuno com vigilância de glicemia.',
    },
  },
  {
    id: 'ped-neo-004',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Clampeamento do Cordão Umbilical no Prematuro Tardio Vigoroso (34 a 36 Semanas)',
    isRevisao: false,
    enunciado:
      'Gestante em trabalho de parto prematuro dá à luz por parto vaginal a um recém-nascido com idade gestacional estimada de 35 semanas e 4 dias (prematuro tardio). Ao ser exteriorizado no períneo materno, o neonatologista observa que o recém-nascido chora espontaneamente e apresenta movimentos ativos com tônus em flexão (prematuro vigoroso). Qual é a recomendação da Sociedade Brasileira de Pediatria quanto ao momento de clampeamento do cordão umbilical e quais os benefícios específicos para essa faixa de prematuridade?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Clampar o cordão de forma oportuna entre 30 e 60 segundos (ou até 1 a 3 minutos em prematuros tardios estáveis), pois a transfusão placentária propicia maior estabilidade hemodinâmica, menor necessidade de drogas vasoativas/transfusões e menor incidência de hemorragia peri-intraventricular e enterocolite necrosante.',
      },
      {
        id: 'B',
        texto:
          'O clampeamento deve ser estritamente imediato nos primeiros 2 segundos, pois prematuros não toleram volume sanguíneo adicional.',
      },
      {
        id: 'C',
        texto:
          'Manter o cordão conectado por 6 horas contínuas até a saída completa dos lóquios maternos.',
      },
      {
        id: 'D',
        texto:
          'O clampeamento tardio é proibido em qualquer idade gestacional abaixo de 37 semanas devido ao risco de rotura ventricular.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A abordagem do clampeamento do cordão em PREMATUROS VIGOROSOS (idade gestacional < 37 semanas) é uma das recomendações mais celebradas na neonatologia moderna:\n1) CONDUTA NO PREMATURO VIGOROSO:\n- Em prematuros < 34 semanas: aguardar entre 30 e 60 segundos;\n- Em prematuros tardios (34 a 36 semanas e 6 dias) vigorosos: a SBP orienta aguardar entre 30 segundos e até 1 a 3 minutos, desde que o neonato mantenha padrão respiratório e frequência cardíaca estáveis;\n2) BENEFÍCIOS EXTRAORDINÁRIOS COMPROVADOS NO PREMATURO:\n- Menor incidência de hemorragia peri-intraventricular (todos os graus e graus graves);\n- Menor incidência de enterocolite necrosante (NEC) por melhor perfusão mesentérica;\n- Menor necessidade de suporte inotrópico para hipotensão arterial neonatal precoce;\n- Menor necessidade de transfusões sanguíneas por anemia da prematuridade;\n- Redução significativa da mortalidade hospitalar na UTI neonatal.',
    comentariosAlternativas: {
      A: 'Correta. No prematuro vigoroso, clampar em 30-60 segundos (ou 1-3 min no tardio estável) previne hemorragia peri-intraventricular e enterocolite.',
      B: 'Incorreta. O clampeamento precoce em prematuros aumenta morbimortalidade e risco de sangramento intracraniano.',
      C: 'Incorreta. Conduta estapafúrdia sem qualquer fundamento.',
      D: 'Incorreta. Pelo contrário: as maiores evidências de redução de mortalidade do clampeamento oportuno ocorrem justamente em recém-nascidos prematuros.',
    },
  },
  {
    id: 'ped-neo-005',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Passos Iniciais da Estabilização em Mesa de Reanimação (30 Segundos)',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo (39 semanas) nasce de parto cesariana por sofrimento fetal agudo, apresentando-se em apneia, flácido e pálido. O cordão é clampeado imediatamente e ele é conduzido pelo pediatra à mesa de reanimação. De acordo com as Diretrizes da Sociedade Brasileira de Pediatria (SBP), a equipe dispõe de uma janela crítica de 30 SEGUNDOS para executar os PASSOS INICIAIS de estabilização. Assinale a alternativa que descreve a sequência correta e padronizada dessas intervenções:',
    alternativas: [
      {
        id: 'A',
        texto:
          '1) Prover calor (sob fonte de calor radiante pré-aquecida); 2) Posicionar a cabeça com leve extensão do pescoço ("posição olfativa"); 3) Aspirar vias aéreas apenas se houver obstrução evidente por secreções (primeiro a boca, depois o nariz); 4) Secar o corpo e a cabeça desprezando os campos úmidos.',
      },
      {
        id: 'B',
        texto:
          '1) Realizar intubação orotraqueal imediata; 2) Fazer massagem cardíaca externa; 3) Administrar adrenalina intracardíaca; 4) Mergulhar em água fria.',
      },
      {
        id: 'C',
        texto:
          '1) Aspirar profundamente a traqueia com sonda 14 Fr; 2) Forçar hiperextensão acentuada do pescoço; 3) Friccionar o abdome com compressas com álcool a 70%; 4) Pesar o neonato.',
      },
      {
        id: 'D',
        texto:
          '1) Ventilar com oxigênio a 100% sob máscara; 2) Puncionar veia femoral; 3) Administrar bicarbonato de sódio profilático; 4) Amarrar os membros.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Os PASSOS INICIAIS da estabilização neonatal no berço de reanimação devem ser executados em no máximo 30 SEGUNDOS:\n1) PROVER CALOR:\nPosicionar o neonato sob berço aquecido com calor radiante (previamente ligado), mantendo a temperatura corporal entre 36,5 °C e 37,5 °C;\n2) POSICIONAR A CABEÇA:\nLeve extensão do pescoço (posição olfativa ou "sniffing position"). Pode-se utilizar um coxim sob as espáduas (ombros) de 2 a 3 cm de espessura para alinhar a orofaringe e manter a via aérea aberta;\n3) ASPIRAR VIAS AÉREAS (SE NECESSÁRIO):\nASPIRAR APENAS SE HOUVER OBSTRUÇÃO evidente por secreções, sangue ou mecônio. Se indicado, aspira-se delicadamente primeiro a boca e depois as narinas (sonda flexível de 8 a 10 Fr sob sucção negativa máxima de 100 mmHg);\n4) SECAR E ESTIMULAR:\nSecar suavemente todo o corpo e o couro cabeludo com campos de algodão aquecidos. Remover e desprezar imediatamente os campos úmidos para cessar a perda térmica por evaporação. O ato de secar constitui estímulo tátil suficiente para deflagrar a respiração em muitos casos.',
    comentariosAlternativas: {
      A: 'Correta. Sequência padrão SBP em 30s: aquecer sob calor radiante -> posicionar cabeça em leve extensão -> aspirar boca e nariz apenas se secreção visível -> secar e desprezar campos úmidos.',
      B: 'Incorreta. Condutas avançadas e heroicas absurdas na fase dos passos iniciais.',
      C: 'Incorreta. Hiperextensão obstrui a via aérea e álcool em pele neonatal é absorvido com toxicidade grave.',
      D: 'Incorreta. Iniciar drogas e O2 a 100% sem passos iniciais e sem indicação é deletério e proscrito.',
    },
  },
  {
    id: 'ped-neo-006',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Manutenção da Normotermia em Sala de Parto (36,5 a 37,5 °C) e Riscos da Hipotermia',
    isRevisao: false,
    enunciado:
      'A manutenção da normotermia do recém-nascido em sala de parto é considerada um indicador de qualidade assistencial e um determinante crítico de sobrevida. De acordo com o Programa de Reanimação Neonatal da SBP, qual é a FAIXA DE TEMPERATURA CORPORAL ALVO do neonato, qual deve ser a TEMPERATURA AMBIENTE da sala de parto e quais as consequências fisiopatológicas graves da HIPOTERMIA no recém-nascido?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A temperatura corporal alvo é de 36,5 a 37,5 °C; a sala de parto deve ter temperatura ambiente mantida entre 23 e 26 °C; e a hipotermia provoca vasoconstrição periférica e pulmonar, hipertensão pulmonar persistente, acidose metabólica grave, consumo acelerado de glicose (hipoglicemia) e aumento substancial da mortalidade neonatal.',
      },
      {
        id: 'B',
        texto:
          'A temperatura alvo é de 34,0 a 35,0 °C (hipotermia terapêutica profilática para todos os RNs); a sala de parto deve estar refrigerada a 18 °C para preservar o cérebro.',
      },
      {
        id: 'C',
        texto:
          'A temperatura alvo é de 38,0 a 39,5 °C; a hipotermia é inofensiva e protege contra icterícia neonatal.',
      },
      {
        id: 'D',
        texto:
          'A temperatura ambiente da sala de parto é irrelevante, desde que a criança receba leite artificial quente na primeira meia hora.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A TERMOREGULAÇÃO NEONATAL é um dos pilares mais rigorosos das diretrizes da SBP/ILCOR:\n1) VALORES DE REFERÊNCIA PADRONIZADOS:\n- Temperatura axilar neonatal alvo: 36,5 °C a 37,5 °C (Normotermia);\n- Temperatura ambiente da sala de parto/centro cirúrgico: 23 °C a 26 °C (recomenda-se aferição por termômetro de parede dedicado);\n2) CONSEQUÊNCIAS FISIOPATOLÓGICAS DA HIPOTERMIA NEONATAL (< 36,5 °C):\nO recém-nascido tem grande área de superfície corporal em relação ao peso e perda rápida de calor por evaporação, condução, convecção e radiação. O estresse térmico pelo frio desencadeia:\n- Termogênese sem calafrios pela queima de gordura marrom, consumindo avidamente oxigênio e glicose -> HIPOGLICEMIA e HIPOXEMIA;\n- Vasoconstrição vascular pulmonar acentuada com persistência de alta resistência vascular pulmonar -> shunts direita-esquerda e HIPERTENSÃO PULMONAR PERSISTENTE DO RECÉM-NASCIDO (HPPRN);\n- Metabolismo anaeróbico com acúmulo de ácido lático -> ACIDOSE METABÓLICA;\n- Queda do débito cardíaco e aumento de até 28% na mortalidade a cada 1 °C a menos de temperatura de admissão na UTI;\n3) RISCO DA HIPERTERMIA (> 37,5 °C):\nA hipertermia iatrogênica também é danosa, potencializando lesão neuronal isquêmica e convulsões, devendo ser estritamente evitada.',
    comentariosAlternativas: {
      A: 'Correta. Meta térmica de 36,5 a 37,5 °C; sala a 23-26 °C; hipotermia acarreta vasoconstrição pulmonar, acidose metabólica, hipoglicemia e óbito.',
      B: 'Incorreta. Hipotermia terapêutica é restrita a RNs ≥ 35 sem com encefalopatia hipóxico-isquêmica moderada/grave após estabilização inicial na UTI.',
      C: 'Incorreta. 38 a 39,5 °C configura hipertermia febril, que agrava lesão neurológica.',
      D: 'Incorreta. A temperatura da sala é determinante crítico para a sobrevivência neonatal.',
    },
  },
  {
    id: 'ped-neo-007',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Posicionamento Correto da Cabeça e Via Aérea na Reanimação Neonatal',
    isRevisao: false,
    enunciado:
      'Durante a realização dos passos iniciais em um recém-nascido flácido na mesa de reanimação, o médico residente estende excessivamente a cabeça do neonato para trás (hiperextensão acentuada do pescoço). O preceptor intervém imediatamente e reposiciona a cabeça do bebê. Qual é a posição anatômica correta da cabeça recomendada pela SBP e por que os extremos de flexão ou hiperextensão são contraindicados?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A cabeça deve ser posicionada em leve extensão do pescoço ("posição olfativa" ou neutra), podendo-se utilizar um coxim de 2 a 3 cm sob os ombros; a flexão excessiva ou a hiperextensão forçada do pescoço provocam o colapso e a oclusão mecânica da traqueia cartilaginosa e da orofaringe complacente do recém-nascido.',
      },
      {
        id: 'B',
        texto:
          'A cabeça deve ser fletida firmemente com o queixo colado ao esterno para impedir a entrada de ar no esôfago.',
      },
      {
        id: 'C',
        texto:
          'A cabeça deve ser virada em rotação de 90 graus para a direita para favorecer a expansão do pulmão contralateral.',
      },
      {
        id: 'D',
        texto:
          'O recém-nascido deve ser colocado em decúbito ventral com a cabeça suspensa para fora da mesa de reanimação.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O posicionamento correto da via aérea em neonatologia é uma manobra milimétrica essencial:\n1) ANATOMIA DA VIA AÉREA NEONATAL:\nO recém-nascido possui occipital proeminente, língua proporcionalmente volumosa em relação à cavidade oral, epiglote em forma de ômega flexível e traqueia curta com anéis cartilaginosos muito complacentes e facilmente colapsáveis;\n2) POSIÇÃO OLFATIVA (SNIFFING POSITION):\n- A cabeça deve ser colocada em posição neutra ou LEVE EXTENSÃO;\n- Uma dica prática recomendada pela SBP é o uso de um pequeno coxim sob as espáduas (ombros) com espessura de 2 a 3 cm (tecido de algodão dobrado), o que eleva suavemente o tronco e alinha o eixo orofaríngeo e traqueal;\n3) RISCO DOS EXTREMOS:\n- A FLEXÃO EXCESSIVA projeta a base da língua contra a parede posterior da faringe, obstruindo a via aérea;\n- A HIPEREXTENSÃO ACENTUADA traciona e colapsa a luz da traqueia elástica do neonato, impedindo a passagem de ar durante a ventilação.',
    comentariosAlternativas: {
      A: 'Correta. Posição olfativa (leve extensão/neutra) com coxim sob ombros; tanto a flexão quanto a hiperextensão provocam oclusão da via aérea neonatal.',
      B: 'Incorreta. Fletir o queixo contra o esterno oclui completamente a orofaringe neonatal.',
      C: 'Incorreta. Rotação extrema causa torção das vias aéreas e vasos cervicais.',
      D: 'Incorreta. A reanimação neonatal é realizada estritamente em decúbito dorsal.',
    },
  },
  {
    id: 'ped-neo-008',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Aspiração de Vias Aéreas - Indicações Restritas e Risco de Reflexo Vagal',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo nasce em apneia primária, com presença de secreções seromucosas abundantes saindo pela boca e narinas, impedindo a permeabilidade da via aérea. O neonatologista decide proceder à aspiração das vias aéreas. De acordo com as diretrizes da SBP, qual é a técnica correta de aspiração (ordem anatômica, profundidade e pressão) e qual é o risco da aspiração profunda e intempestiva da orofaringe?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Aspirar delicadamente primeiro a boca e depois as narinas, com sonda flexível sob vácuo máximo de 100 mmHg; a aspiração rápida, profunda ou vigorosa da parede posterior da faringe estimula o reflexo vagal, deflagrando bradicardia grave, laringoespasmo e apneia prolongada.',
      },
      {
        id: 'B',
        texto:
          'Aspirar primeiro as narinas com sonda rígida até o estômago e depois a boca sob pressão de 400 mmHg.',
      },
      {
        id: 'C',
        texto:
          'A aspiração das vias aéreas é obrigatória em 100% dos recém-nascidos, mesmo naqueles sem nenhuma secreção visível.',
      },
      {
        id: 'D',
        texto:
          'Aspirar a traqueia por punção cricotireoidiana direta com agulha grossa antes de tocar na face.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A aspiração de vias aéreas em sala de parto sofreu importantes atualizações nas últimas diretrizes:\n1) INDICAÇÃO RESTRITA:\n- NÃO é procedimento de rotina para todos os RNs;\n- Deve ser realizada APENAS se houver OBSTRUÇÃO VISÍVEL da via aérea por secreções ou se o paciente for necessitar de ventilação com pressão positiva (VPP);\n2) TÉCNICA E SEQUÊNCIA PADRONIZADA:\n- Ordem: PRIMEIRO A BOCA, DEPOIS AS NARINAS (mnemônica: "B antes de N" no alfabeto);\n- Justificativa: aspirar as narinas primeiro pode deflagrar o reflexo de inspiração/gasp reflexo pelo estímulo tátil nasal, fazendo com que o neonato aspire para os pulmões o conteúdo retido na cavidade oral;\n- Pressão de sucção negativa segura: limite máximo de 100 mmHg (13,6 kPa) ou sucção delicada com pera de borracha;\n3) RISCOS DA ASPIRAÇÃO PROFUNDA OU AGRESSIVA:\nA estimulação tátil vigorosa da parede posterior da orofaringe estimula receptores sensoriais do nervo vago (ramo faríngeo e laríngeo superior), deflagrando reflexo vagal parassimpático imediato: BRADICARDIA GRAVE, LARINGOESPASMO e piora do esforço respiratório.',
    comentariosAlternativas: {
      A: 'Correta. Aspirar primeiro boca, depois narinas sob pressão < 100 mmHg; aspiração profunda desencadeia reflexo vagal com bradicardia e apneia.',
      B: 'Incorreta. Inverter a ordem (aspirar nariz primeiro) predispõe à broncoaspiração do conteúdo da boca; pressão de 400 mmHg lesa a mucosa.',
      C: 'Incorreta. A aspiração rotineira em RNs sem secreção é proscrita pelas diretrizes da SBP.',
      D: 'Incorreta. Punção cricotireoidiana não faz parte da estabilização básica neonatal.',
    },
  },
  {
    id: 'ped-neo-009',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Conduta no RN com Líquido Amniótico Meconial - Quebra de Paradigma',
    isRevisao: false,
    enunciado:
      'Lactente a termo de 40 semanas nasce banhado em líquido amniótico meconial espesso ("em purê de ervilha"). Imediatamente ao nascimento, o pediatra constata que o recém-nascido está em apneia e hipotônico (RN não vigoroso). Em relação à conduta atual preconizada pelas diretrizes de reanimação da SBP e ILCOR para o RN não vigoroso com mecônio, assinale a opção correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Levar imediatamente o recém-nascido à mesa de calor radiante, realizar os passos iniciais da estabilização (aquecer, posicionar, aspirar boca e nariz apenas se houver secreção obstrutiva e secar) e, se mantiver apneia ou FC < 100 bpm aos 30 segundos, iniciar de imediato a Ventilação com Pressão Positiva (VPP); a intubação orotraqueal imediata para aspiração traqueal de rotina NÃO É MAIS RECOMENDADA.',
      },
      {
        id: 'B',
        texto:
          'Proceder imediatamente à laringoscopia direta sob o períneo materno para intubação e aspiração da traqueia antes de qualquer outra manobra ou ventilação.',
      },
      {
        id: 'C',
        texto:
          'Realizar lavagem traqueal com 50 mL de solução salina hipertônica para dissolver o mecônio intrapulmonar.',
      },
      {
        id: 'D',
        texto:
          'Aguardar 10 minutos sem ventilar para que o pulmão reabsorva o mecônio espontaneamente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A abordagem do LÍQUIDO AMNIÓTICO MECONIAL passou pela maior revisão paradigmática da história da reanimação neonatal:\n1) DIRETRIZ ANTIGA (HISTÓRICA - NÃO MAIS UTILIZADA):\nAntigamente, todo RN não vigoroso banhado em mecônio era imediatamente intubado para aspiração traqueal direta antes de receber qualquer ventilação;\n2) MUDANÇA NAS DIRETRIZES DA SBP / ILCOR / AAP:\n- Ensaios clínicos randomizados multicêntricos demonstraram que a aspiração traqueal de rotina em RNs não vigorosos NÃO reduz a incidência de Síndrome de Aspiração de Mecônio (SAM), NÃO reduz a necessidade de ventilação mecânica nem diminui a mortalidade;\n- Ao contrário: atrasa o início da ventilação pulmonar no "minuto de ouro", prolonga a hipoxemia, piora a acidose e aumenta o risco de bradicardia;\n3) DIRETRIZ ATUAL CONSAGRADA:\n- RN VIGOROSO COM MECÔNIO: contato pele a pele e clampeamento oportuno;\n- RN NÃO VIGOROSO COM MECÔNIO: clampeamento imediato, berço radiante, passos iniciais (aspiração delicada de boca e nariz se obstruídos) e, se persistir com apneia ou FC < 100 bpm, INICIAR VPP IMEDIATAMENTE antes de 60 segundos de vida;\n- A intubação fica reservada para falha da VPP com máscara ou suspeita de obstrução mecânica traqueal persistente.',
    comentariosAlternativas: {
      A: 'Correta. A aspiração traqueal rotineira foi abandonada; a conduta é passos iniciais e início precoce da VPP no primeiro minuto se apneia/FC < 100 bpm.',
      B: 'Incorreta. A laringoscopia/aspiração traqueal mandatória imediata é conduta superada e contraindicada de rotina.',
      C: 'Incorreta. Lavagem traqueal com salina dissemina mecônio distalmente e destrói o surfactante alveolar.',
      D: 'Incorreta. Deixar RN em apneia por 10 minutos resulta em PCR hipóxica e morte encefálica.',
    },
  },
  {
    id: 'ped-neo-010',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Secagem, Troca de Campos e Limites do Estímulo Tátil Neonatal',
    isRevisao: false,
    enunciado:
      'Na mesa de reanimação, o recém-nascido a termo está sendo submetido aos passos iniciais. Para estimular a respiração espontânea, o circulante da sala sugere dar palmadas nas nádegas do neonato e comprimir fortemente o tórax. O pediatra imediatamente corrige a equipe. Quais são as manobras de estímulo tátil eficazes e seguras autorizadas pelas diretrizes da SBP e por que a troca dos campos úmidos é uma prioridade indissociável da secagem?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O ato de secar suavemente com campos aquecidos já é uma forma de estímulo tátil; se necessário, permite-se apenas uma a duas fricções suaves no dorso do recém-nascido ou leves petelecos/fricção na planta dos pés; a remoção imediata dos campos úmidos é obrigatória porque o tecido molhado em contato com a pele acelera exponencialmente a perda térmica por evaporação e condução.',
      },
      {
        id: 'B',
        texto:
          'Deve-se suspender o recém-nascido pelos pés de cabeça para baixo e desferir tapas enérgicos na região dorsal.',
      },
      {
        id: 'C',
        texto:
          'Os campos úmidos devem ser mantidos enrolados na criança por 2 horas para garantir a hidratação cutânea.',
      },
      {
        id: 'D',
        texto:
          'O estímulo tátil recomendado é a compressão vigorosa dos globos oculares para deflagrar o reflexo trigeminocardíaco.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A estimulação tátil e a secagem neonatal exigem rigor técnico e delicadeza:\n1) ESTÍMULO TÁTIL SEGURO:\n- A própria secagem do corpo e do couro cabeludo com campos de algodão aquecidos já exerce estímulo tátil proprioceptivo suficiente para a maioria dos neonatos em apneia primária;\n- Manobras adicionais aceitas: uma ou duas fricções breves e suaves na região dorsal (ao longo da coluna vertebral) ou leves toques/fricção na planta dos pés;\n- Manobras PROSCRITAS e nocivas: sacudir o bebê, dar tapas nas nádegas ou dorso, suspender pelos pés de cabeça para baixo, espremer a caixa torácica ou jogar água fria. Essas condutas podem causar hemorragias intracranianas, fraturas ósseas, rotura de órgãos internos e não apresentam eficácia comprovada;\n2) DESCARTE DOS CAMPOS ÚMIDOS:\n- O líquido amniótico na superfície da pele evapora rapidamente sob a fonte de calor radiante. Se o campo molhado permanecer sobre o corpo, o neonato perde calor por condução e evaporação em velocidade alarmante;\n- Portanto, secar e IMEDIATAMENTE DESPREZAR OS CAMPOS ÚMIDOS substituindo-os por campo seco e aquecido é um passo indispensável da estabilização.',
    comentariosAlternativas: {
      A: 'Correta. Secagem suave + até 2 fricções no dorso ou toques na planta dos pés são o estímulo seguro; desprezar campos úmidos impede perda de calor por evaporação.',
      B: 'Incorreta. Prática histórica agressiva causadora de trauma cranioencefálico e visceral.',
      C: 'Incorreta. Manter campos úmidos resfria a criança rapidamente, gerando hipotermia grave.',
      D: 'Incorreta. Compressão ocular desencadeia reflexo oculocardíaco com bradicardia e assistolia, sendo nefasta.',
    },
  },
  {
    id: 'ped-neo-011',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Avaliação Imediata Pós-Passos Iniciais - Ausculta da FC por 6 Segundos',
    isRevisao: false,
    enunciado:
      'Após a conclusão dos passos iniciais da estabilização neonatal aos 30 segundos de vida, a equipe deve avaliar simultaneamente dois parâmetros clínicos cruciais para decidir o início da Ventilação com Pressão Positiva (VPP). Quais são esses dois parâmetros e qual é o método padrão-ouro recomendado pela SBP para a contagem da Frequência Cardíaca (FC) nesse momento?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Avaliação do Padrão Respiratório (presença de respiração espontânea regular vs apneia/gasping) e da Frequência Cardíaca (FC); o método clínico padrão para aferir a FC é a AUSCULTA PRÉ-CORDIAL com estetoscópio durante 6 SEGUNDOS, multiplicando-se o número de batimentos por 10 para obter a FC em bpm.',
      },
      {
        id: 'B',
        texto:
          'Avaliação da cor da pele (rósea vs cianose) e palpação exclusiva do pulso pedioso dorsal por 60 segundos.',
      },
      {
        id: 'C',
        texto:
          'Avaliação da temperatura axilar e palpação do cordão umbilical por 2 minutos completos.',
      },
      {
        id: 'D',
        texto:
          'Cálculo do Boletim de Apgar de 1 minuto antes de tocar no tórax do paciente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A tomada de decisão ao final dos primeiros 30 segundos baseia-se em dois eixos vitais:\n1) OS DOIS PARÂMETROS AVALIADOS:\n- RESPIRAÇÃO: Avalia-se se o recém-nascido respira de forma regular e eficaz, ou se apresenta APNEIA ou RESPIRAÇÃO IRREGULAR / GASPING (movimentos inspiratórios profundos, ineficazes e entrecortados);\n- FREQUÊNCIA CARDÍACA (FC): É o parâmetro mais sensível e determinante para avaliar a vitalidade e a resposta às manobras de reanimação;\n2) MÉTODO DE MENSURAÇÃO DA FC (REGRA DOS 6 SEGUNDOS):\n- Ausculta direta da região pré-cordial com estetoscópio colocado sobre o hemitórax esquerdo;\n- Conta-se o número de batimentos cardíacos auscultados durante rigorosos 6 SEGUNDOS e multiplica-se o valor obtido por 10 (ex: 7 batimentos em 6 segundos = FC de 70 bpm);\n- Justificativa: permite determinar a FC em tempo recorde sem atrasar o início da ventilação;\n- Por que NÃO palpar o pulso do cordão umbilical ou pulsos periféricos? Estudos demonstram que a palpação do cordão ou de artérias periféricas subestima a frequência cardíaca real ou falha em até 30% das vezes pela vasoconstrição periférica transitória.',
    comentariosAlternativas: {
      A: 'Correta. Avaliam-se respiração e FC; a FC é aferida pela ausculta pré-cordial com estetoscópio por 6 segundos (multiplicando por 10).',
      B: 'Incorreta. A avaliação da cor da pele foi abandonada como parâmetro decisório; pulsos pediosos periféricos são imperceptíveis em hipóxia.',
      C: 'Incorreta. Palpar cordão é impreciso e aguardar 2 minutos perde a janela crítica de ouro.',
      D: 'Incorreta. O Apgar nunca deve atrasar o início das manobras de reanimação.',
    },
  },
  {
    id: 'ped-neo-012',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'O Minuto de Ouro (Golden Minute) e Indicação Formal de VPP',
    isRevisao: false,
    enunciado:
      'Recém-nascido de 38 semanas, após passar pelos passos iniciais de aquecimento, posicionamento, aspiração e secagem aos 30 segundos de vida, permanece em apneia secundária e a ausculta pré-cordial pelo estetoscópio revela 8 batimentos em 6 segundos (FC estimada em 80 bpm). Considerando o conceito internacional do "Minuto de Ouro" (The Golden Minute) preconizado pelo Programa de Reanimação Neonatal da SBP, qual é a conduta imediata mandatória?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Iniciar imediatamente a Ventilação com Pressão Positiva (VPP) sob máscara facial com balão autoinflável ou ventilador mecânico em T, que deve ser disparada impreterivelmente antes de completar 60 segundos de vida ("Minuto de Ouro").',
      },
      {
        id: 'B',
        texto:
          'Reiniciar os passos iniciais e secar o paciente por mais 2 minutos na esperança de o choro surgir.',
      },
      {
        id: 'C',
        texto:
          'Iniciar imediatamente massagem cardíaca externa com compressões torácicas na proporção de 3:1.',
      },
      {
        id: 'D',
        texto:
          'Administrar atropina intravenosa em bólus rápido para reverter a bradicardia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O "MINUTO DE OURO" (THE GOLDEN MINUTE) é o conceito mais cobrado em provas de residência médica sobre reanimação neonatal:\n1) DEFINIÇÃO:\nO intervalo entre o nascimento e o início da VENTILAÇÃO COM PRESSÃO POSITIVA (VPP) não deve ultrapassar 60 SEGUNDOS de vida;\n2) INDICAÇÕES FORMAIS DE INÍCIO DA VPP:\nAo término dos 30 segundos dos passos iniciais, se o recém-nascido apresentar:\n- APNEIA ou\n- RESPIRAÇÃO IRREGULAR / GASPING ou\n- FREQUÊNCIA CARDÍACA < 100 bpm;\n3) PRIORIDADE ABSOLUTA DA VENTILAÇÃO:\nNa fisiopatologia da asfixia perinatal neonatal, a bradicardia é decorrente quase que exclusivamente da HIPOXEMIA MIOCÁRDICA por falha de expansão alveolar. Portanto, a ventilação eficaz é o tratamento mais rápido e curativo para restabelecer a oxigenação cardíaca e elevar a FC;\n- Condutas erradas que custam vidas: postergar a VPP insistindo em estímulo tátil inútil, iniciar massagem cardíaca precocemente (massagem só é indicada se FC < 60 bpm APÓS 30s de VPP EFICAZ) ou aplicar drogas sem antes ventilar os pulmões.',
    comentariosAlternativas: {
      A: 'Correta. Apneia ou FC < 100 bpm após passos iniciais exige VPP imediata no primeiro minuto de vida ("Minuto de Ouro").',
      B: 'Incorreta. Repetir passos iniciais atrasa a oxigenação cerebral em paciente que já tem indicação de VPP.',
      C: 'Incorreta. Massagem cardíaca está formalmente contraindicada neste momento; sua indicação exige FC < 60 bpm após 30s de VPP efetiva.',
      D: 'Incorreta. A causa da bradicardia neonatal é a hipóxia alveolar, que se reverte ventilando, não com atropina.',
    },
  },
  {
    id: 'ped-neo-013',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Fração Inspirada Inicial de Oxigênio (FiO2 21%) na VPP de RN >= 34 Semanas',
    isRevisao: false,
    enunciado:
      'Lactente nascido com 39 semanas de idade gestacional necessita de Ventilação com Pressão Positiva (VPP) por apresentar respiração irregular e FC de 80 bpm no primeiro minuto de vida. A equipe conecta o balão autoinflável. Qual deve ser a Fração Inspirada de Oxigênio (FiO2) INICIAL recomendada pela Sociedade Brasileira de Pediatria para a ventilação de recém-nascidos com idade gestacional maior ou igual a 34 semanas e qual é o fundamento biológico dessa escolha?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Iniciar a VPP estritamente em AR AMBIENTE (FiO2 a 21%, sem oxigênio suplementar conectado); o uso inicial de oxigênio a 100% gera estresse oxidativo maciço por espécies reativas de oxigênio (ROS), lesão tecidual por reperfusão, vasoconstrição cerebral e coronariana e aumento comprovado da mortalidade neonatal.',
      },
      {
        id: 'B',
        texto:
          'Iniciar com oxigênio puro a 100% (FiO2 1,0) em fluxo livre máximo para garantir coloração rosada em 10 segundos.',
      },
      {
        id: 'C',
        texto:
          'Iniciar com FiO2 a 50% obrigatoriamente associada a óxido nítrico inalatório no berço de parto.',
      },
      {
        id: 'D',
        texto:
          'Iniciar com FiO2 a 10% misturando ar ambiente com gás carbônico para estimular o centro respiratório bulbar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A dosagem de oxigênio na sala de parto foi objeto de grandes ensaios clínicos que mudaram a medicina perinatal mundial:\n1) REGRA DE OURO DA CONCENTRAÇÃO DE O2 INICIAL:\n- RECÉM-NASCIDOS ≥ 34 SEMANAS: INICIAR A VPP COM FiO2 A 21% (AR AMBIENTE PURO);\n- (Nota comparativa: em prematuros < 34 semanas, inicia-se com FiO2 a 30% em blender);\n2) TOXICIDADE DO OXIGÊNIO A 100% (HIPERÓXIA NEONATAL):\nEstudos pioneiros (inclusive liderados por pesquisadores brasileiros da SBP) comprovaram que ventilar neonatos a termo com oxigênio a 100%:\n- Retarda o início da respiração espontânea;\n- Gera avalanche de Espécies Reativas de Oxigênio (radicais livres de O2), superando as defesas antioxidantes imaturas do recém-nascido;\n- Causa vasoconstrição cerebral e coronariana aguda, piorando a isquemia em órgãos nobres;\n- Causa apoptose celular e inflamação sistêmica;\n- Meta-análises demonstraram aumento significativo da mortalidade e de sequelas neurológicas a longo prazo nos bebês reanimados com O2 a 100% em relação aos reanimados com ar ambiente (21%).\nO oxigênio suplementar só deve ser titulado se a saturação pré-ductal ao oxímetro estiver abaixo da meta esperada minuto a minuto.',
    comentariosAlternativas: {
      A: 'Correta. RN ≥ 34 semanas: iniciar VPP sempre em ar ambiente (FiO2 21%); O2 a 100% produz radicais livres e aumenta a mortalidade neonatal.',
      B: 'Incorreta. Reanimar RN a termo com O2 a 100% é conduta errônea e danosa contraindicada pelas diretrizes mundiais.',
      C: 'Incorreta. FiO2 50% e óxido nítrico não são condutas iniciais em sala de parto.',
      D: 'Incorreta. FiO2 10% causaria asfixia extrema por hipoxemia severa induzida.',
    },
  },
  {
    id: 'ped-neo-014',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Frequência Respiratória e Ritmo na VPP ("Aperta / Solta / Solta")',
    isRevisao: false,
    enunciado:
      'Durante a realização da Ventilação com Pressão Positiva (VPP) com balão autoinflável e máscara facial em um recém-nascido a termo em sala de parto, a equipe deve manter uma frequência e uma cadência rítmica padronizadas para evitar hipoventilação ou hiperinsuflação lesiva. Qual é a FREQUÊNCIA RESPIRATÓRIA recomendada e qual a REGRA MNEMÔNICA ensinada pela SBP para sincronizar o aperto do balão?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Frequência de 40 a 60 movimentos por minuto, guiada pela cadência rítmica verbal: "APERTA / SOLTA / SOLTA" (aperta o balão na fase inspiratória e solta nas duas contagens seguintes para permitir a expiração passiva completa).',
      },
      {
        id: 'B',
        texto:
          'Frequência de 120 movimentos por minuto, com o lema "aperta/aperta/aperta" sem pausas expiratórias.',
      },
      {
        id: 'C',
        texto:
          'Frequência de 10 a 12 movimentos por minuto, com hiperinsuflação mantida por 5 segundos a cada ventilação.',
      },
      {
        id: 'D',
        texto:
          'Frequência de 80 a 100 movimentos por minuto associada a compressão torácica simultânea na mesma fase.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A técnica de execução da VPP é um dos itens mais cobrados nas estações práticas e teóricas de reanimação neonatal:\n1) FREQUÊNCIA RESPIRATÓRIA ALVO:\n- 40 a 60 movimentos respiratórios por minuto (mesma frequência respiratória fisiológica de um recém-nascido em repouso);\n2) REGRA MNEMÔNICA DA CADÊNCIA:\n- "APERTA / SOLTA / SOLTA":\n  a) "APERTA": Comprime-se suavemente o balão (tempo inspiratório de cerca de 0,3 a 0,5 segundos);\n  b) "SOLTA": Descomprime-se o balão completamente para abertura da válvula expiratória;\n  c) "SOLTA": Permite-se o esvaziamento pulmonar elástico passivo (tempo expiratório fisiológico de 0,6 a 0,8 segundos);\n3) RISCOS DE CADÊNCIA INADEQUADA:\n- Ventilação muito rápida (> 60-80 rpm): não permite a expiração completa, gerando aprisionamento aéreo (auto-PEEP), hiperdistensão alveolar, risco de pneumotórax e redução do retorno venoso sistêmico;\n- Ventilação muito lenta (< 30 rpm): não propicia volume-minuto suficiente para clearance de CO2 e expansão dos alvéolos colapsados.',
    comentariosAlternativas: {
      A: 'Correta. Frequência de 40 a 60 mov/min na cadência rítmica "aperta/solta/solta", garantindo tempo inspiratório e expiratório fisiológicos.',
      B: 'Incorreta. 120 rpm impede a expiração e gera aprisionamento de ar com alto risco de pneumotórax.',
      C: 'Incorreta. Frequência muito baixa é insuficiente para a aeração alveolar e correção da hipoxemia.',
      D: 'Incorreta. Compressões torácicas são realizadas apenas em PCR/FC < 60 bpm em sincronia 3:1, nunca misturadas livremente.',
    },
  },
  {
    id: 'ped-neo-015',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Seleção da Máscara Facial e Técnica de Pegada em "C e E"',
    isRevisao: false,
    enunciado:
      'Para garantir o sucesso da Ventilação com Pressão Positiva (VPP) sob máscara em um recém-nascido de 3.200 g a termo, o tamanho correto da máscara facial e a técnica de selamento sobre a face da criança são fundamentais. Qual alternativa descreve o tamanho adequado da máscara e a técnica de fixação recomendada para vedação hermética sem causar lesão ou obstrução da via aérea?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A máscara deve ter borda acolchoada redonda ou anatômica de tamanho apropriado para cobrir a ponta do queixo, a boca e o nariz sem comprimir os olhos e sem ultrapassar o queixo; deve ser aplicada com a técnica da pegada em "C e E" (polegar e indicador formando um "C" sobre a máscara pressionando-a suavemente contra a face, enquanto os outros três dedos formam um "E" tracionando a mandíbula para cima em leve extensão).',
      },
      {
        id: 'B',
        texto:
          'A máscara deve ser a maior possível para cobrir desde a testa até a fúrcula esternal, comprimindo fortemente os globos oculares.',
      },
      {
        id: 'C',
        texto:
          'A máscara deve ser colada com fita adesiva estéril na pele e os três dedos inferiores devem comprimir a traqueia contra a coluna cervical.',
      },
      {
        id: 'D',
        texto:
          'A máscara deve cobrir exclusivamente as narinas, deixando a boca totalmente aberta para vazamento intencional.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A interface máscara-face na VPP neonatal é o ponto mais vulnerável a erros técnicos:\n1) ESCOLHA DO TAMANHO DA MÁSCARA:\n- Máscara facial redonda com coxim acolchoado ou anatômica;\n- O tamanho correto deve repousar sobre a ponta do queixo (mento) e cobrir a boca e o dorso do nariz;\n- NÃO deve ser muito grande a ponto de cobrir os olhos (risco de lesão corneana e reflexo vagal oculocardíaco) nem ultrapassar o mento (vazamento inferior);\n- NÃO deve ser muito pequena a ponto de não cobrir o nariz ou ocluir as narinas;\n2) TÉCNICA DA PEGADA EM "C e E":\n- O polegar e o dedo indicador da mão não dominante do operador posicionam-se sobre o corpo e a borda da máscara formando a letra "C", aplicando pressão para baixo apenas o suficiente para vedar o escape de ar;\n- O dedo médio, anular e mínimo posicionam-se ao longo do ramo da mandíbula óssea formando a letra "E", tracionando a mandíbula para cima em direção à máscara para abrir a via aérea;\n- CUIDADO CRÍTICO: Nunca apoiar os dedos sobre as partes moles do pescoço ou soalho da boca, pois isso empurraria a língua contra o palato, obstruindo a via aérea.',
    comentariosAlternativas: {
      A: 'Correta. Máscara cobrindo ponta do queixo, boca e nariz sem pegar olhos; fixação com técnica "C e E" tracionando mandíbula sem comprimir tecidos moles.',
      B: 'Incorreta. Cobrir os olhos acarreta lesão ocular e bradicardia vagal; tamanho excessivo impede vedação.',
      C: 'Incorreta. Comprimir a traqueia oclui a passagem de ar e impede a ventilação.',
      D: 'Incorreta. Deixar a boca aberta gera escape de pressão e ineficácia da VPP.',
    },
  },
  {
    id: 'ped-neo-016',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Monitorização da Oximetria de Pulso - Posicionamento Obrigatório Pré-Ductal',
    isRevisao: false,
    enunciado:
      'Um recém-nascido de 36 semanas necessita de VPP no primeiro minuto de vida. Imediatamente após o início da ventilação, o médico solicita à enfermagem que instale o sensor da Oximetria de Pulso para titulação da FiO2 e monitorização contínua. Em qual local anatômico o sensor da oximetria de pulso DEVE SER OBRIGATORIAMENTE POSICIONADO na sala de parto segundo o Programa de Reanimação Neonatal da SBP?',
    alternativas: [
      {
        id: 'A',
        texto:
          'No MEMBRO SUPERIOR DIREITO (no pulso radial direito ou na palma da mão direita), pois reflete a saturação de oxigênio PRÉ-DUCTAL do sangue que irriga o cérebro e o miocárdio antes do canal arterial.',
      },
      {
        id: 'B',
        texto:
          'No membro inferior esquerdo (hálux esquerdo), pois a circulação pós-ductal é mais fidedigna.',
      },
      {
        id: 'C',
        texto:
          'No lóbulo da orelha direita após incisão com bisturi para sangramento ativo.',
      },
      {
        id: 'D',
        texto:
          'No coto do cordão umbilical recém-clampeado.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O posicionamento do sensor de oximetria de pulso em sala de parto é uma regra universal com justificativa anatômica rigorosa:\n1) LOCALIZAÇÃO OBRIGATÓRIA: MEMBRO SUPERIOR DIREITO (PULSO / MÃO DIREITA):\n- Toda a tabela de referência minuto a minuto de saturação de O2 da SBP e ILCOR baseia-se exclusivamente em medidas obtidas no membro superior direito;\n2) RACIONAL ANATÔMICO E FISIOPATOLÓGICO (CIRCULAÇÃO PRÉ-DUCTAL):\n- O primeiro grande ramo a emergir do arco aórtico é o tronco braquiocefálico, que dá origem à artéria subclávia direita (que irriga o membro superior direito) e à artéria carótida comum direita;\n- Essa emergência arterial ocorre ANTES da inserção do canal arterial (ductus arteriosus) na aorta descendente;\n- Logo após o nascimento, com as pressões vasculares pulmonares ainda elevadas, há um shunt da direita para a esquerda através do canal arterial (sangue desoxigenado da artéria pulmonar passa para a aorta descendente pós-ductal);\n- Portanto, a oximetria aferida nos membros inferiores ou no membro superior esquerdo (pós-ductal) é mais baixa e não representa a oxigenação real que está nutrindo as artérias coronárias e o cérebro do recém-nascido;\n- O membro superior direito fornece a leitura pré-ductal verdadeira da oxigenação cerebral e miocárdica.',
    comentariosAlternativas: {
      A: 'Correta. Sensor no membro superior direito (MSD) afere saturação pré-ductal, refletindo a oxigenação cerebral e miocárdica antes do canal arterial.',
      B: 'Incorreta. Membros inferiores sofrem influência do shunt pós-ductal desoxigenado pelo canal arterial.',
      C: 'Incorreta. Incisão na orelha é absurda e não tem relação com oximetria de pulso não invasiva.',
      D: 'Incorreta. O coto umbilical é clampeado e não possui pulso arterial periférico viável para oximetria.',
    },
  },
  {
    id: 'ped-neo-017',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Metas Fisiológicas de Saturação de O2 Pré-Ductal Minuto a Minuto',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo está em VPP com ar ambiente (FiO2 21%) devido a apnéia ao nascer. O oxímetro de pulso instalado no pulso radial direito começa a ler de forma confiável aos 3 minutos de vida completos, exibindo uma saturação de oxigênio (SpO2) de 74%, com FC de 120 bpm e boa expansão torácica. O interno de medicina sugere aumentar imediatamente a FiO2 para 100% para elevar a SpO2 para 98%. O pediatra recusa o aumento e mantém em ar ambiente. Com base na tabela de METAS DE SATURAÇÃO PRÉ-DUCTAL MINUTO A MINUTO da SBP, assinale a opção com os valores fisiológicos esperados e a conduta adequada:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A saturação aos 3 minutos de 74% está absolutamente normal e dentro da meta esperada (até 5 min: 70 a 80%; 5 a 10 min: 80 a 90%; > 10 min: 85 a 95%); a transição fetal-neonatal é gradual e não se deve esperar saturação > 90% nos primeiros minutos de vida em ar ambiente.',
      },
      {
        id: 'B',
        texto:
          'A saturação deve ser mantida acima de 98% desde o primeiro segundo após o corte do cordão umbilical.',
      },
      {
        id: 'C',
        texto:
          'Uma saturação de 74% aos 3 minutos indica hipóxia cerebral irreversível e exige infusão venosa de azul de metileno.',
      },
      {
        id: 'D',
        texto:
          'A saturação aceitável até o décimo minuto de vida é entre 40% e 50%, devendo-se reduzir a ventilação.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A compreensão da fisiologia da transição circulatória neonatal evita hiperóxia iatrogênica em sala de parto:\n1) FISIOLOGIA DA TRANSIÇÃO ALVEOLAR E O2:\nNo ambiente intrauterino, a saturação de O2 fetal na veia umbilical é de apenas 50 a 60%. Ao nascer, a aeração pulmonar, o recrutamento alveolar e o fechamento funcional dos shunts fetais levam cerca de 10 a 15 minutos para elevar a saturação periférica aos níveis habituais de crianças maiores;\n2) TABELA DE SATURAÇÃO PRÉ-DUCTAL ALVO DA SBP (Membro Superior Direito):\n- Até 5 minutos de vida: 70% a 80%;\n- De 5 a 10 minutos de vida: 80% a 90%;\n- Acima de 10 minutos de vida: 85% a 95%;\n3) CONDUTA NO CASO:\nO paciente está com 3 minutos de vida e SpO2 de 74%, que se encontra exatamente no meio da faixa alvo esperada (70-80%). Não há hipoxemia patológica, a FC está ótima (120 bpm) e o tórax expande bem. Portanto, aumentar a FiO2 para 100% seria um erro grave de hiperóxia e toxicidade celular.',
    comentariosAlternativas: {
      A: 'Correta. Metas oficiais da SBP: até 5 min: 70-80%; 5-10 min: 80-90%; > 10 min: 85-95%. Saturação de 74% aos 3 min é fisiológica.',
      B: 'Incorreta. Exigir > 98% nos primeiros minutos gera hiperóxia severa com lesão miocárdica e neuronal.',
      C: 'Incorreta. Interpretação errônea da fisiologia de transição neonatal; azul de metileno é para metemoglobinemia tóxica.',
      D: 'Incorreta. Valores de 40-50% configuram asfixia profunda inadmissível.',
    },
  },
  {
    id: 'ped-neo-018',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Monitor Cardíaco de 3 Derivações em Sala de Parto - Vantagens e Indicação',
    isRevisao: false,
    enunciado:
      'As atualizações mais recentes das Diretrizes de Reanimação Neonatal da SBP e do ILCOR enfatizam o papel crescente do MONITOR CARDÍACO DE 3 DERIVAÇÕES em sala de parto para os recém-nascidos que necessitam de intervenções avançadas. Em comparação com o oxímetro de pulso, qual é a principal vantagem do monitor cardíaco em sala de parto e em qual momento sua instalação está fortemente recomendada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O monitor cardíaco através de 3 eletrodos no tórax detecta a frequência cardíaca de forma significativamente mais rápida, contínua e fidedigna, sem depender da perfusão periférica; sua instalação é fortemente recomendada sempre que houver necessidade de manter a VPP e obrigatoriamente se houver necessidade de intubação traqueal ou massagem cardíaca.',
      },
      {
        id: 'B',
        texto:
          'O monitor cardíaco serve exclusivamente para verificar a dosagem de cálcio iônico através do traçado eletrocardiográfico.',
      },
      {
        id: 'C',
        texto:
          'O monitor cardíaco substitui a necessidade de ventilação, pois estimula o miocárdio por pequenos choques elétricos automáticos contínuos.',
      },
      {
        id: 'D',
        texto:
          'O monitor cardíaco é contraindicado na sala de parto pelo risco de choque elétrico letal por umidade do líquido amniótico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O uso do MONITOR CARDÍACO COM 3 DERIVAÇÕES ELETROCARDIOGRÁFICAS em sala de parto representa um avanço tecnológico fundamental:\n1) LIMITAÇÕES DO OXÍMETRO DE PULSO NO RECÉM-NASCIDO ASFIXIADO:\nO oxímetro de pulso necessita de fluxo sanguíneo pulsátil adequado no membro periférico para gerar curva plestimográfica e exibir a FC. Em bebês hipotensos, bradicárdicos ou vasoconstritos, o oxímetro pode demorar mais de 2 a 4 minutos para captar sinal ou exibir leituras erráticas e subestimadas;\n2) VANTAGENS DO MONITOR CARDÍACO (ECG):\n- A leitura dos complexos QRS pelos eletrodos adesivos colocados no tórax ocorre em poucos segundos após a colocação;\n- Não depende do tônus vascular periférico nem da perfusão periférica;\n- Exibe a FC em tempo real de forma contínua, permitindo avaliar instantaneamente se a VPP está sendo eficaz;\n3) RECOMENDAÇÃO DA SBP:\nDeve ser instalado precocemente sempre que a VPP for iniciada e se estender por mais de 30 segundos, sendo indispensável na vigência de ventilação avançada, intubação e massagem cardíaca externa.',
    comentariosAlternativas: {
      A: 'Correta. O monitor cardíaco por ECG fornece leitura rápida e contínua da FC sem depender de perfusão; indicado na VPP prolongada/intubação/compressões.',
      B: 'Incorreta. O monitor avalia frequência cardíaca e ritmo, não dosagem laboratorial de cálcio.',
      C: 'Incorreta. Trata-se de equipamento passivo de monitorização eletrocardiográfica, não marcapasso elétrico externo de choque.',
      D: 'Incorreta. O monitor com eletrodos selados é seguro e amplamente chancelado pelas sociedades de pediatria mundiais.',
    },
  },
  {
    id: 'ped-neo-019',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Avaliação da Resposta à VPP aos 30 Segundos - Aumento da FC como Principal Indicador',
    isRevisao: false,
    enunciado:
      'Um recém-nascido de 35 semanas, hipotônico e em apneia ao nascer, foi submetido aos passos iniciais e, por manter FC de 70 bpm, recebeu Ventilação com Pressão Positiva (VPP) sob máscara com ar ambiente iniciada aos 45 segundos de vida. Após rigorosos 30 segundos de VPP efetiva, a equipe reavalia o paciente. Qual é o indicador clínico isolado mais precoce, sensível e confiável de que a ventilação alveolar está sendo bem-sucedida e eficaz?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O AUMENTO RÁPIDO DA FREQUÊNCIA CARDÍACA (elevação para valores > 100 bpm), que reflete a chegada de sangue oxigenado às artérias coronárias e a restauração do metabolismo aeróbico miocárdico.',
      },
      {
        id: 'B',
        texto:
          'O desaparecimento instantâneo de toda a lanugem da fronte do bebê.',
      },
      {
        id: 'C',
        texto:
          'Abertura ocular sustentada com fixação visual no rosto do médico.',
      },
      {
        id: 'D',
        texto:
          'Eliminação de mecônio espesso na mesa de parto.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O PRINCIPAL E MAIS PRECOCE SINAL DE EFICÁCIA DA VPP é universalmente reconhecido como o AUMENTO DA FREQUÊNCIA CARDÍACA:\n1) FISIOPATOLOGIA DA RESPOSTA CARDÍACA:\nO nó sinoatrial e o miocárdio fetal e neonatal são extremamente sensíveis à hipoxemia. Quando a hipóxia se instala, o débito cardíaco cai e a FC diminui vertiginosamente. No momento em que os alvéolos são abertos pela VPP e o ar oxigenado alcança os capilares pulmonares, o sangue rico em O2 retorna pelas veias pulmonares ao átrio esquerdo e é ejetado nas artérias coronárias. Em questão de segundos, o nó sinusal recupera seu automatismo e a frequência cardíaca sobe rapidamente para > 100 bpm;\n2) OUTROS SINAIS DE MELHORA:\n- Expansibilidade torácica visível simétrica;\n- Melhora do tônus muscular (o bebê começa a esboçar movimentos e flexão de membros);\n- Retorno dos movimentos respiratórios espontâneos;\nSe a FC estiver aumentando e ultrapassar 100 bpm com respiração espontânea regular, a VPP pode ser retirada gradualmente.',
    comentariosAlternativas: {
      A: 'Correta. O aumento rápido da FC para > 100 bpm é o indicador mais precoce e confiável de que a VPP está sendo eficaz.',
      B: 'Incorreta. Lanugem é característica somática de maturidade gestacional que não se altera com ventilação.',
      C: 'Incorreta. Fixação visual voluntária não ocorre nesta fase hiperaguda de reanimação.',
      D: 'Incorreta. Eliminação de mecônio não é parâmetro de eficácia de ventilação pulmonar.',
    },
  },
  {
    id: 'ped-neo-020',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Passos Corretivos da Ventilação na Ausência de Expansão Torácica (MR. SOPA)',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo está em VPP sob máscara facial há 30 segundos, porém a frequência cardíaca não sobe (mantém-se em 60 bpm) e o observador nota que O TÓRAX NÃO SE MOVE e não expande durante a insuflação do balão. Diante da falha da expansão torácica durante a VPP, as diretrizes da SBP/ILCOR determinam a execução imediata dos PASSOS CORRETIVOS DA VENTILAÇÃO, resumidos internacionalmente pelo acrônimo "MR. SOPA". Quais são esses passos sequenciais de correção?',
    alternativas: [
      {
        id: 'A',
        texto:
          'M: Máscara (ajustar selamento e tamanho); R: Reposicionar cabeça (em leve extensão); S: Sucção (aspirar boca e nariz); O: Open mouth (abrir a boca do bebê); P: Pressão (aumentar gradualmente o pico de pressão inspiratória); A: Alternativa de via aérea (indicar Intubação Orotraqueal ou Máscara Laríngea).',
      },
      {
        id: 'B',
        texto:
          'M: Massagem cardíaca; R: Reaquecimento a 42 °C; S: Sangria terapêutica; O: Oxigênio a 1000%; P: Punção lombar; A: Adrenalina intracardíaca.',
      },
      {
        id: 'C',
        texto:
          'M: Manitol venoso; R: Raio-X de tórax portátil imediato; S: Sedação profunda; O: Óleo mineral gástrico; P: Paracentese; A: Amoxicilina oral.',
      },
      {
        id: 'D',
        texto:
          'Interromper imediatamente qualquer tentativa de ventilação e aguardar 30 minutos em silêncio na sala.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Se o tórax do recém-nascido NÃO expande e a FC não sobe durante a VPP, o ar NÃO está entrando nos alvéolos. A SBP e o ILCOR padronizam os PASSOS CORRETIVOS DA VENTILAÇÃO (mnemônica MR. SOPA):\n1) ETAPA 1 - M e R (ajustes mecânicos externos):\n- M (Mask adjustment): reajustar a máscara facial sobre a face, garantindo que não haja vazamentos de ar na borda com a técnica em "C e E";\n- R (Reposition head): reposicionar a cabeça em leve extensão (posição olfativa), verificando se o pescoço não está excessivamente estendido ou fletido;\n- Ventilar e reavaliar expansão torácica;\n2) ETAPA 2 - S e O (desobstrução da via aérea):\n- S (Suction mouth and nose): aspirar secreções na orofaringe e narinas sob visão direta;\n- O (Open mouth): abrir ligeiramente a boca do bebê, mantendo-a entreaberta sob a máscara com o dedo indicador;\n- Ventilar e reavaliar expansão torácica;\n3) ETAPA 3 - P (pressão):\n- P (Pressure increase): aumentar a pressão inspiratória de pico (PIP) no manômetro do balão ou ventilador em T (subindo de 20 para 25, 30 ou até 35-40 cmH2O) em passos graduais até observar excursão do tórax;\n4) ETAPA 4 - A (via aérea avançada):\n- A (Alternative airway): se após todos os passos acima o tórax ainda não expandir, a via aérea sob máscara é ineficaz; está formalmente indicada a INTUBAÇÃO OROTRAQUEAL (IOT) ou colocação de MÁSCARA LARÍNGEA.',
    comentariosAlternativas: {
      A: 'Correta. MR. SOPA: Máscara ajuste, Reposicionar cabeça, Sucção boca/nariz, Open mouth, Pressão aumento gradativo e Alternativa de via aérea (IOT/máscara laríngea).',
      B: 'Incorreta. Fazer massagem sem corrigir a ventilação é inútil; adrenalina intracardíaca é nefasta e proscrita.',
      C: 'Incorreta. Lista de condutas estapafúrdias totalmente deslocadas da reanimação.',
      D: 'Incorreta. Abandonar a ventilação leva à parada cardiorrespiratória por asfixia irreversível.',
    },
  },
  {
    id: 'ped-neo-021',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Ventilador Mecânico em T (Neopuff) vs Balão Autoinflável',
    isRevisao: false,
    enunciado:
      'Nas salas de parto modernas, o Reanimador com Peça em T (Ventilador Mecânico Manual em T / Neopuff) tem sido cada vez mais utilizado como dispositivo preferencial para a realização da VPP neonatal. Em comparação com o Balão Autoinflável tradicional (tipo Ambu), quais são as vantagens técnicas essenciais do ventilador mecânico em T recomendadas pela SBP?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O ventilador em T permite o controle preciso e constante da Pressão Inspiratória de Pico (PIP) máxima ajustada em manômetro e, fundamentalmente, a aplicação segura de PEEP (pressão positiva expiratória final de 5 cmH2O), garantindo a formação da Capacidade Residual Funcional (CRF), estabilização alveolar e menor risco de volutrauma/barotrauma.',
      },
      {
        id: 'B',
        texto:
          'O ventilador em T não necessita de fonte de gás comprimido, funcionando exclusivamente a pilha sem oxigênio.',
      },
      {
        id: 'C',
        texto:
          'O ventilador em T gera pressões de até 150 cmH2O de forma ininterrupta para forçar a abertura do esôfago.',
      },
      {
        id: 'D',
        texto:
          'O balão autoinflável foi banido do planeta por conter chumbo em sua válvula externa.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O REANIMADOR MECÂNICO COM PEÇA EM T (VENTILADOR EM T) é considerado o dispositivo de ventilação padrão-ouro na sala de parto:\n1) VANTAGENS DO VENTILADOR EM T:\n- Fornecimento constante e homogêneo de PEEP (Pressão Positiva Expiratória Final, habitualmente calibrada em 5 cmH2O):\n  * A PEEP impede o colapso alveolar completo ao final de cada expiração (atelectrauma);\n  * Estabelece e mantém a Capacidade Residual Funcional (CRF) pulmonar logo nas primeiras incursões respiratórias;\n  * Facilita a depuração do líquido pulmonar fetal para os vasos linfáticos e capilares;\n- Controle rigoroso da Pressão Inspiratória de Pico (PIP):\n  * Permite limitar a PIP máxima pré-fixada (ex: 20 a 25 cmH2O) através de válvula de escape segura, evitando picos pressóricos descontrolados na mão do operador que causam pneumotórax (barotrauma);\n- Fornece tempo inspiratório controlado e constante a cada oclusão digital da peça em T;\n2) LIMITAÇÃO DO VENTILADOR EM T:\n- Depende obrigatoriamente de uma fonte contínua de gás comprimido (ar comprimido e oxigênio em fluxômetro a 5-10 L/min com blender);\n- O Balão Autoinflável, por sua vez, tem a grande virtude de funcionar sem fonte de gás, mas não fornece PEEP confiável (a menos que acoplado a válvula de PEEP específica) e sua PIP depende estritamente da força da mão do operador.',
    comentariosAlternativas: {
      A: 'Correta. Ventilador em T entrega PIP constante e PEEP ajustada de 5 cmH2O, estabelecendo CRF e prevenindo colapso alveolar e barotrauma.',
      B: 'Incorreta. O ventilador em T é pneumático e depende de fluxo contínuo de gás comprimido (5-10 L/min).',
      C: 'Incorreta. Pressões de 150 cmH2O explodiriam o parênquima pulmonar; a válvula de escape limita pressões a níveis seguros.',
      D: 'Incorreta. O balão autoinflável continua sendo equipamento de segurança obrigatório em todas as salas de parto.',
    },
  },
  {
    id: 'ped-neo-022',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Boletim de Apgar - Papel Avaliativo Retrospectivo e Proscrição na Decisão Inicial',
    isRevisao: false,
    enunciado:
      'Durante a reanimação de um recém-nascido em apneia, o residente aguarda completar o primeiro minuto de vida para calcular formalmente a pontuação do Boletim de Apgar e decidir se deve ou não iniciar a ventilação com pressão positiva. Em relação ao BOLETIM DE APGAR, qual é a sua utilidade clínica real e qual a recomendação estrita da Sociedade Brasileira de Pediatria quanto ao momento de início da reanimação?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O Boletim de Apgar avalia retrospectivamente a vitalidade do concepto e a resposta global às manobras instituídas nos minutos 1, 5 e a cada 5 minutos até os 20 minutos se < 7; JAMAIS deve ser utilizado para decidir o início da reanimação neonatal, pois a intervenção ventilatória deve começar antes de 60 segundos de vida ("minuto de ouro") com base apenas na respiração e frequência cardíaca.',
      },
      {
        id: 'B',
        texto:
          'O Boletim de Apgar é a ferramenta obrigatória para autorizar qualquer massagem cardíaca ou intubação, devendo ser calculado nos primeiros 10 segundos de vida.',
      },
      {
        id: 'C',
        texto:
          'Um Apgar baixo aos 5 minutos estabelece de forma isolada e definitiva o diagnóstico forense de paralisia cerebral por asfixia intraparto.',
      },
      {
        id: 'D',
        texto:
          'O Apgar avalia exclusivamente o grau de hidratação cutânea e a maturidade dos ossos do quadril.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O papel do BOLETIM DE APGAR na neonatologia é frequentemente cobrado em pegadinhas de prova:\n1) UTILIDADE REAL DO APGAR (AFERIDO AOS 1, 5 E A CADA 5 MIN ATÉ 20 MIN):\n- Desenvolvido por Virginia Apgar em 1952 como método semiológico padronizado de avaliação da vitalidade e da transição fisiológica do concepto;\n- Avalia 5 sinais: Frequência cardíaca, Esforço respiratório, Tônus muscular, Irritabilidade reflexa e Cor da pele (cada um pontuado de 0 a 2, totalizando escore de 0 a 10);\n- É uma ferramenta de AVALIAÇÃO RETROSPECTIVA da eficácia das manobras de reanimação e da condição clínica global do neonato;\n2) REGRA DE OURO DAS DIRETRIZES DE REANIMAÇÃO:\n- O APGAR NUNCA DEVE SER UTILIZADO PARA DECIDIR O INÍCIO DA REANIMAÇÃO!\n- A decisão de ventilar um recém-nascido baseia-se na avaliação dinâmica da respiração e da frequência cardíaca logo após os passos iniciais aos 30 segundos;\n- Aguardar o 1º minuto para calcular o Apgar atrasa o "minuto de ouro" e constitui negligência médica grave;\n- O Apgar de 1º minuto baixo isolado não tem valor preditivo para sequelas neurológicas futuras.',
    comentariosAlternativas: {
      A: 'Correta. O Apgar avalia resposta retrospectiva aos 1 e 5 minutos; nunca deve atrasar o início das manobras de reanimação no minuto de ouro.',
      B: 'Incorreta. Aguardar o Apgar atrasa manobras que salvam vidas.',
      C: 'Incorreta. O diagnóstico de encefalopatia anóxica exige acidose metabólica grave no cordão (pH < 7,0, BE < -12), falência multiorgânica e exame neurológico alterado.',
      D: 'Incorreta. O Apgar avalia FC, respiração, tônus, reflexo e cor, sem relação com ossos do quadril.',
    },
  },
  {
    id: 'ped-neo-023',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Cianose Periférica / Acrocianose Fisiológica em Sala de Parto',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo nasce com 39 semanas e 4 dias de parto normal, chora forte ao nascer, apresenta excelente tônus em flexão, FC de 140 bpm e respiração espontânea regular. A equipe de enfermagem nota que o bebê apresenta mãos e pés azulados (acrocianose periférica), embora a língua, a mucosa oral e o tronco estejam completamente rosados. O médico é chamado pela equipe para avaliar a cianose. Qual é a interpretação fisiológica e a conduta recomendada pela SBP?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de Acrocianose Fisiológica decorrente de instabilidade vasomotora periférica e aumento da extração tecidual de oxigênio no leito capilar cutâneo; é um achado benigno e comum em recém-nascidos normais, não indicando hipoxemia nem necessidade de oxigênio suplementar, devendo o neonato permanecer em contato pele a pele com a mãe sob vigilância da temperatura.',
      },
      {
        id: 'B',
        texto:
          'Indica transposição das grandes artérias congênita e exige infusão venosa imediata de prostaglandina E1.',
      },
      {
        id: 'C',
        texto:
          'A acrocianose exige oferta imediata de oxigênio a 100% sob máscara com fluxo de 15 L/min direto na face do bebê.',
      },
      {
        id: 'D',
        texto:
          'Exige intubação orotraqueal imediata e punção pericárdica de alívio.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A avaliação da cor da pele do recém-nascido em sala de parto requer discernimento semiológico:\n1) ACROCIANOSE FISIOLÓGICA:\n- Coloração azulada restrita às extremidades distais (mãos e pés), com mucosas orais e tronco francamente rosados;\n- Causa: vasomotor instável no recém-nascido exposto à temperatura ambiente fria, gerando vasoconstrição reflexa nos capilares cutâneos periféricos com extração lenta e acentuada de O2 tecidual;\n- É uma condição fisiológica e absolutamente benigna que pode persistir por 24 a 48 horas de vida;\n2) CONDUTA:\n- NÃO OFERTAR OXIGÊNIO SUPLEMENTAR! A oferta de oxigênio para acrocianose em bebê vigoroso expõe o neonato aos riscos de hiperóxia desnecessária;\n- Manter o bebê aquecido junto ao tórax materno em contato pele a pele coberto por manta seca;\n3) CIANOSE CENTRAL (PATOLÓGICA):\n- Cianose generalizada acometendo língua, lábios e mucosas centrais;\n- Indica hipoxemia arterial sistêmica verdadeira, exigindo aferição imediata de oximetria de pulso no MSD e titulação de suporte ventilatório.',
    comentariosAlternativas: {
      A: 'Correta. Acrocianose em extremidades é fisiológica e benigna; com mucosas rosadas e RN vigoroso, não requer oxigênio suplementar.',
      B: 'Incorreta. Cardiopatias congênitas cianóticas cursam com cianose central generalizada (lábios e língua roxos) e hipoxemia refratária.',
      C: 'Incorreta. Oferecer oxigênio livre para acrocianose fisiológica é conduta iatrogênica proscrita.',
      D: 'Incorreta. Conduta invasiva aberrante e despropositada.',
    },
  },
  {
    id: 'ped-neo-024',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'A "Hora de Ouro" (Golden Hour) no RN a Termo Vigoroso e Amamentação Precoce',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo vigoroso nasce por parto vaginal sem intercorrências. O pediatra assegura o clampeamento oportuno do cordão e coloca o bebê imediatamente sobre o tórax desnudo materno em contato pele a pele. De acordo com as recomendações da Organização Mundial da Saúde (OMS), Ministério da Saúde e Sociedade Brasileira de Pediatria, quais cuidados e intervenções de rotina DEVEM SER POSTERGADOS durante essa primeira hora de vida ("Hora de Ouro" / Golden Hour) para priorizar o vínculo mãe-bebê e a amamentação precoce?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Devem ser postergados para após a primeira hora de vida no mínimo: a administração intramuscular de Vitamina K1 (fitomenadiona), a profilaxia da oftalmia neonatal (nitrato de prata a 1% ou colírios alternativos), a pesagem, as medidas antropométricas (estatura e perímetros) e o banho do recém-nascido.',
      },
      {
        id: 'B',
        texto:
          'O recém-nascido deve ser retirado imediatamente da mãe nos primeiros 3 minutos para receber banho de imersão com sabonete antisséptico.',
      },
      {
        id: 'C',
        texto:
          'A amamentação na primeira hora de vida é contraindicada pelo risco de aspiração do colostro materno concentrado.',
      },
      {
        id: 'D',
        texto:
          'Todos os recém-nascidos devem receber vacina tríplice viral imediatamente no períneo materno.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A "HORA DE OURO" (THE GOLDEN HOUR) no recém-nascido vigoroso valoriza as práticas humanizadas baseadas em evidências:\n1) CONTATO PELE A PELE IMEDIATO E CONTÍNUO:\n- O RN a termo vigoroso deve ser colocado em decúbito ventral diretamente sobre o tórax desnudo da mãe, secando o dorso e cabeça e cobrindo ambos com cobertor seco e aquecido;\n- Benefícios: estabilização térmica perfeita pela mãe (termorregulação fisiológica), estabilização cardiorrespiratória e glicêmica, colonização da microbiota do bebê pelas bactérias comensais maternas benéficas, liberação de ocitocina e apego afetivo;\n2) ESTÍMULO À AMAMENTAÇÃO NA PRIMEIRA HORA DE VIDA:\n- O reflexo de sucção e alerta está no seu ápice nos primeiros 60 a 90 minutos após o parto. A sucção precoce reduz a mortalidade neonatal precoce, acelera a descida do leite materno e contrai o útero pós-parto prevenindo hemorragia materna;\n3) POSTERGAÇÃO DOS CUIDADOS DE ROTINA:\nProcedimentos não emergenciais devem aguardar a conclusão do contato ininterrupto da primeira hora:\n- Vitamina K profilática (prevenção da Doença Hemorrágica do RN);\n- Profilaxia da conjuntivite neonatal / oftalmia gonocócica (colírios/pomadas);\n- Antropometria (peso, comprimento, perímetro cefálico);\n- O banho de rotina deve ser adiado por pelo menos 24 horas para preservação do vernix caseoso protetor.',
    comentariosAlternativas: {
      A: 'Correta. Vitamina K, profilaxia ocular, pesagem e antropometria devem ser adiados para após a primeira hora ininterrupta de pele a pele e mamada.',
      B: 'Incorreta. Dar banho precoce retira vernix e provoca hipotermia severa; o banho deve ser adiado para após 24h.',
      C: 'Incorreta. A amamentação na primeira hora de vida é recomendação prioritária da OMS e SBP.',
      D: 'Incorreta. A vacina tríplice viral é de vírus vivo e só é aplicada a partir dos 12 meses de vida.',
    },
  },
  {
    id: 'ped-neo-025',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síntese do Algoritmo de Reanimação Neonatal da SBP para RN >= 34 Semanas',
    isRevisao: false,
    enunciado:
      'Um grupo de acadêmicos de medicina formula um quadro-resumo para a prova prática de Pediatria consolidando a sequência cronológica e de tomada de decisões nos PRIMEIROS 60 SEGUNDOS de vida para recém-nascidos com idade gestacional maior ou igual a 34 semanas, de acordo com o Programa de Reanimação Neonatal da Sociedade Brasileira de Pediatria (SBP). Assinale a alternativa que reproduz com exatidão irrefutável o algoritmo oficial:',
    alternativas: [
      {
        id: 'A',
        texto:
          '1) No nascimento: avaliar termo, respiração/choro e tônus (se SIM -> pele a pele e clampeamento em 1-3 min; se NÃO -> clampeamento imediato e berço aquecido); 2) Primeiros 30 segundos: passos iniciais (aquecer, posicionar cabeça, aspirar boca/nariz se secreção, secar e desprezar campos); 3) Aos 30 segundos: auscultar FC por 6 segundos e avaliar respiração (se apneia, gasping ou FC < 100 bpm -> iniciar VPP com FiO2 21% antes de 60 segundos com oximetria no MSD e monitor cardíaco); 4) Reavaliar após 30 segundos de VPP efetiva.',
      },
      {
        id: 'B',
        texto:
          '1) Intubar imediatamente todo recém-nascido antes de cortar o cordão; 2) Fazer VPP com oxigênio a 100% em todos por 10 minutos; 3) Administrar adrenalina intravenosa de rotina; 4) Calcular Apgar aos 30 minutos.',
      },
      {
        id: 'C',
        texto:
          '1) Clampar o cordão umbilical após 20 minutos; 2) Aspirar traqueia em 100% dos bebês; 3) Se FC < 100 bpm, aplicar choques com desfibrilador externo a 50 Joules; 4) Iniciar hipotermia em balde com gelo.',
      },
      {
        id: 'D',
        texto:
          '1) Perguntar apenas o peso do bebê; 2) Secar com campos frios; 3) Puncionar veia umbilical em todos os partos; 4) Oferecer oxigênio livre a 100% direto na pele das costas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Esta questão consolida a espinha dorsal de todo o algoritmo da SBP para recém-nascidos ≥ 34 semanas:\n1) AO NASCER (0 a 5 segundos):\n- 3 perguntas: Gestação a termo? Respirando ou chorando? Tônus em flexão?\n- SIM para as 3: RN vigoroso -> Contato pele a pele imediato com a mãe e clampeamento oportuno em 1 a 3 minutos;\n- NÃO para qualquer uma: Clampeamento imediato do cordão -> Levar à mesa de reanimação sob calor radiante;\n2) PASSOS INICIAIS (até 30 segundos de vida):\n- Aquecer sob calor radiante (temperatura corporal 36,5 - 37,5 °C);\n- Posicionar a cabeça com leve extensão do pescoço (posição olfativa com coxim de 2-3 cm);\n- Aspirar boca e depois narinas SOMENTE se houver secreção visível obstrutiva;\n- Secar o corpo e couro cabeludo, desprezando imediatamente os campos úmidos;\n3) AVALIAÇÃO DOS 30 SEGUNDOS:\n- Auscultar FC pré-cordial por 6 segundos (multiplicar por 10) e checar padrão respiratório;\n- Se APNEIA, GASPING ou FC < 100 bpm -> INICIAR VPP IMEDIATAMENTE (no "minuto de ouro" antes de 60 segundos de vida);\n- VPP em RN ≥ 34 semanas: iniciar em AR AMBIENTE (FiO2 21%), frequência de 40 a 60 mov/min ("aperta/solta/solta"), com máscara adequada, instalando oximetria de pulso no membro superior direito (MSD) e monitor cardíaco;\n4) AVALIAÇÃO APÓS 30 SEGUNDOS DE VPP EFICAZ:\n- Avaliar se a FC está subindo (> 100 bpm) e se o tórax expande. Se tórax não expande -> MR. SOPA.',
    comentariosAlternativas: {
      A: 'Correta. Síntese perfeita do fluxo oficial da SBP para RNs ≥ 34 semanas no primeiro minuto de vida.',
      B: 'Incorreta. Intubação e O2 100% universais são condutas iatrogênicas proscritas.',
      C: 'Incorreta. Desfibrilação e balde com gelo são absurdos fatais.',
      D: 'Incorreta. Concepções errôneas sem fundamentação nas diretrizes.',
    },
  },
  {
    id: 'ped-neo-026',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Passos Corretivos da Ventilação com Pressão Positiva (MR. SOPA)',
    isRevisao: false,
    enunciado:
      'Lactente de 39 semanas, nascido em apneia, recebeu os passos iniciais sob calor radiante e foi colocado em VPP com máscara facial aos 45 segundos de vida. Passados 30 segundos de ventilação com ar ambiente, o preceptor observa que a frequência cardíaca permanece em 50 bpm e a caixa torácica do recém-nascido NÃO apresenta nenhuma expansão durante a compressão do balão autoinflável. De acordo com as diretrizes da Sociedade Brasileira de Pediatria (SBP), qual é a conduta sequencial prioritária e imediata que a equipe deve adotar?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Executar imediatamente os passos corretivos da ventilação (MR. SOPA: reajustar a máscara na face e reposicionar a cabeça em leve extensão; aspirar boca e narinas e abrir a boca do bebê; aumentar gradativamente a pressão inspiratória de pico; e, se persistir sem expansão, instituir via aérea alternativa com intubação orotraqueal ou máscara laríngea).',
      },
      {
        id: 'B',
        texto:
          'Iniciar imediatamente compressões torácicas na proporção de 3:1 com massagem cardíaca externa sem corrigir a ventilação.',
      },
      {
        id: 'C',
        texto:
          'Administrar imediatamente adrenalina intravenosa por punção periférica na mão.',
      },
      {
        id: 'D',
        texto:
          'Suspender a ventilação e aguardar a resposta motora espontânea sob lâmpada de fototerapia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A conduta diante de uma VPP ineficaz (tórax que não expande e FC que não sobe) é um dos tópicos mais cobrados em concursos de residência médica:\n1) REGRA DE OURO DA REANIMAÇÃO NEONATAL:\n- A causa quase universal de bradicardia e ausência de resposta à VPP no neonato é a FALHA MECÂNICA DA VENTILAÇÃO (ar não alcança os alvéolos devido a vazamento de máscara, oclusão da via aérea ou pressão insuficiente);\n- NÃO SE INICIA MASSAGEM CARDÍACA nem se administram drogas em um recém-nascido com ventilação ineficaz comprovada pela ausência de expansão torácica! Fazer massagem em alvéolos atelectasiados sem oxigênio não restaura a oxigenação miocárdica;\n2) APLICAÇÃO DO MR. SOPA:\n- M (Mask adjustment) e R (Reposition head): ajustes de selamento e posição olfativa;\n- S (Suction) e O (Open mouth): desobstrução de orofaringe e abertura bucal;\n- P (Pressure increase): elevação gradual da PIP (até 30-40 cmH2O se necessário);\n- A (Alternative airway): intubação orotraqueal (IOT) ou máscara laríngea (ML).\nSomente após garantir que os pulmões estão sendo adequadamente ventilados (tórax expandindo) é que se reavalia a FC para decidir por massagem ou estabilização.',
    comentariosAlternativas: {
      A: 'Correta. Antes de qualquer compressão torácica, deve-se garantir expansão torácica aplicando os passos corretivos da ventilação (MR. SOPA).',
      B: 'Incorreta. Fazer massagem sem corrigir a ventilação é inútil, pois o sangue bombeado continuará anóxico.',
      C: 'Incorreta. Adrenalina só tem indicação se a FC persistir < 60 bpm após VPP efetiva com tubo + massagem cardíaca.',
      D: 'Incorreta. Cessar a ventilação em paciente em apneia e bradicárdico leva ao óbito.',
    },
  },
  {
    id: 'ped-neo-027',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Máscara Laríngea (ML) na Reanimação Neonatal - Indicações e Critérios',
    isRevisao: false,
    enunciado:
      'Durante a reanimação em sala de parto de um recém-nascido a termo de 3.400 g, a VPP sob máscara facial falha em expandir os pulmões mesmo após os passos iniciais do MR. SOPA. O médico assistente tenta a laringoscopia direta para intubação orotraqueal, porém encontra severa dificuldade anatômica por micrognatia acentuada e fenda palatina posterior (Sequência de Robin), não conseguindo visibilizar a glote após duas tentativas rápidas ("cenário não ventilo, não intubo"). De acordo com o Programa de Reanimação Neonatal da SBP, qual dispositivo de via aérea alternativa supraglótico está indicado nesse cenário de emergência e quais os seus critérios de elegibilidade?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Máscara Laríngea (tamanho 1), indicada como via aérea alternativa em recém-nascidos com idade gestacional ≥ 34 semanas e peso ≥ 2.000 g diante de falha da ventilação sob máscara facial e intubação orotraqueal difícil ou impossível, permitindo vedação hipofaríngea rápida sem necessidade de laringoscópio.',
      },
      {
        id: 'B',
        texto:
          'Traqueostomia cirúrgica aberta de urgência realizada pelo obstetra com bisturi elétrico.',
      },
      {
        id: 'C',
        texto:
          'Máscara laríngea tamanho 4, sendo formalmente indicada exclusivamente para prematuros extremos com peso inferior a 500 gramas.',
      },
      {
        id: 'D',
        texto:
          'Broncoscopia rígida com biópsia traqueal sob anestesia inalatória com halotano.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A MÁSCARA LARÍNGEA (ML) é um dispositivo supraglótico salva-vidas consagrado no algoritmo de via aérea difícil em neonatologia:\n1) INDICAÇÕES FORMAIS EM SALA DE PARTO:\n- Falha da ventilação com máscara facial quando a intubação traqueal falha ou não é dominada pelo profissional presente ("não ventilo, não intubo");\n- Recém-nascidos com anomalias craniofaciais congênitas com via aérea difícil anatômica (Sequência de Pierre Robin com micrognatia/glossoptose, Síndrome de Treacher Collins, hipoplasia mandibular);\n2) CRITÉRIOS DE ELEGIBILIDADE ANATÔMICA:\n- Idade gestacional ≥ 34 semanas;\n- Peso de nascimento ≥ 2.000 g (tamanho comercial 1 de máscara laríngea);\n- Em prematuros extremos (< 34 sem ou < 2.000 g), a conformação anatômica da hipofaringe não permite selamento seguro com as máscaras laríngeas disponíveis;\n3) VANTAGENS:\n- Inserção às cegas rápida e fácil com o dedo indicador, sem necessidade de visualização das cordas vocais com laringoscópio;\n- Permite VPP eficaz imediata enquanto se providencia auxílio urológico/anestesiológico especializado;\n- Limitação: não permite aspiração eficaz de secreções da árvore traqueobrônquica distal.',
    comentariosAlternativas: {
      A: 'Correta. Máscara laríngea tamanho 1 é a via supraglótica de escolha para RNs ≥ 34 semanas e ≥ 2.000 g na falha de VPP com máscara e IOT difícil.',
      B: 'Incorreta. Cricotireoidostomia ou traqueostomia neonatal de emergência é procedimento de exceção extrema com altíssima mortalidade.',
      C: 'Incorreta. Tamanho 4 é para adultos e a ML tamanho 1 é contraindicada em < 2.000 g.',
      D: 'Incorreta. Procedimento diagnóstico eletivo totalmente fora de contexto na sala de parto.',
    },
  },
  {
    id: 'ped-neo-028',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Intubação Orotraqueal (IOT) em Sala de Parto - Indicações Formais',
    isRevisao: false,
    enunciado:
      'A Intubação Orotraqueal (IOT) é um procedimento médico invasivo que assegura uma via aérea definitiva e pérvia durante a reanimação neonatal avançada. De acordo com as normas consolidadas da Sociedade Brasileira de Pediatria e do ILCOR, em qual das seguintes situações a IOT é FORMALMENTE INDICADA na sala de parto?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Quando a VPP sob máscara facial é ineficaz mesmo após os passos corretivos (MR. SOPA), na necessidade de VPP prolongada, quando há indicação de massagem cardíaca externa e em casos de suspeita ou diagnóstico antenatal de Hérnia Diafragmática Congênita.',
      },
      {
        id: 'B',
        texto:
          'Em 100% dos recém-nascidos prematuros tardios saudáveis que nascem chorando de parto cesariano.',
      },
      {
        id: 'C',
        texto:
          'Apenas se a família assinar termo de consentimento livre e esclarecido em cartório antes do nascimento.',
      },
      {
        id: 'D',
        texto:
          'Exclusivamente se o recém-nascido apresentar febre materna intraparto de 37,8 °C.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As indicações de INTUBAÇÃO OROTRAQUEAL (IOT) na reanimação neonatal são precisas e restritas a situações de gravidade ou anatomia desfavorável:\n1) INDICAÇÕES FORMAIS SEGUNDO A SBP:\n- VPP sob máscara facial ineficaz mesmo após a execução dos passos corretivos (falha de expansão torácica no MR. SOPA);\n- Necessidade de VPP prolongada (quando o RN não retoma respiração espontânea sustentada após os primeiros minutos);\n- Indicação de MASSAGEM CARDÍACA EXTERNA (a massagem torácica só deve ser iniciada após a via aérea estar definitivamente garantida por cânula traqueal);\n- Suspeita ou diagnóstico confirmado de HÉRNIA DIAFRAGMÁTICA CONGÊNITA (para impedir que a VPP com máscara infle e distenda o estômago e as alças intestinais na cavidade torácica, colapsando ainda mais os pulmões hipoplásicos);\n- Administração de surfactante exógeno profilático/terapêutico por via endotraqueal;\n2) QUANDO NÃO INTUBAR DE ROTINA:\n- A presença isolada de mecônio (mesmo espesso) em RN não vigoroso não é mais indicação de IOT imediata de rotina;\n- Prematuros vigorosos em esforço leve devem receber CPAP sob máscara/pronga, evitando-se a intubação mecânica lesiva.',
    comentariosAlternativas: {
      A: 'Correta. VPP ineficaz pós-MR. SOPA, necessidade de massagem cardíaca, VPP prolongada e hérnia diafragmática congênita são as indicações consagradas.',
      B: 'Incorreta. RN saudável vigoroso deve ir para o colo materno em pele a pele, sem IOT.',
      C: 'Incorreta. Procedimento emergencial de suporte de vida não exige trâmites buconecróticos em cartório.',
      D: 'Incorreta. Febre materna intraparto requer investigação infecciosa, não intubação profilática universal.',
    },
  },
  {
    id: 'ped-neo-029',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Escolha do Diâmetro da Cânula Traqueal (Tubo sem Balonete) por Peso e IG',
    isRevisao: false,
    enunciado:
      'A equipe de reanimação prepara o material para intubação orotraqueal de um recém-nascido de 39 semanas com peso estimado de 3.500 g que não respondeu à VPP sob máscara. O médico solicita a lâmina de laringoscópio reta (Miller) tamanho 1 e a cânula orotraqueal. Qual é o diâmetro interno (DI) recomendado para a cânula traqueal nesta faixa de peso e qual característica técnica da cânula é OBRIGATÓRIA na reanimação neonatal em sala de parto?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Cânula traqueal com diâmetro interno de 3,5 mm (podendo-se disponibilizar também 4,0 mm para > 4.000 g), devendo ser estritamente SEM CUFF / SEM BALONETE (cânula de lúmen uniforme), pois a cartilagem cricóide constitui o estreitamento anatômico fisiológico da via aérea neonatal, proporcionando vedação natural sem risco de necrose isquêmica da mucosa subglótica.',
      },
      {
        id: 'B',
        texto:
          'Cânula com diâmetro de 2,0 mm com balonete de alta pressão insuflado com 10 mL de água destilada.',
      },
      {
        id: 'C',
        texto:
          'Cânula metálica rígida de diâmetro 6,0 mm com mandril de aço travado.',
      },
      {
        id: 'D',
        texto:
          'Sonda nasogástrica número 4 acoplada a seringa de 20 mL.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A escolha do tubo orotraqueal em pediatria neonatal obedece a regras anatômicas fundamentais:\n1) TABELA DE DIÂMETRO INTERNO (DI) DA CÂNULA TRAQUEAL (SBP/AAP):\n- Peso < 1.000 g (Idade Gestacional < 28 semanas): cânula 2,5 mm;\n- Peso de 1.000 a 2.000 g (IG de 28 a 34 semanas): cânula 3,0 mm;\n- Peso de 2.000 a 3.000 g (IG de 34 a 38 semanas): cânula 3,5 mm;\n- Peso > 3.000 g (IG > 38 semanas): cânula 3,5 mm (podendo-se utilizar 4,0 mm em macrossômicos > 4 kg);\n2) REGRA DE OURO: CÂNULAS SEM BALONETE (UNCUFFED):\n- No recém-nascido e lactente pequeno, o ponto mais estreito da laringe não são as cordas vocais, mas sim a CARTILAGEM CRICÓIDE (anel cartilaginoso completo não complacente abaixo das cordas vocais, conferindo à laringe formato em funil/cônico);\n- O próprio anel cricóideo veda perfeitamente a cânula traqueal cilíndrica sem necessidade de balonete inflável;\n- O uso de tubos com cuff inflado na sala de parto exerce pressão transmural excessiva contra os capilares da mucosa cricóidea, provocando isquemia rápida, ulceração, necrose cartilaginosa e estenose subglótica cicatricial irreversível.',
    comentariosAlternativas: {
      A: 'Correta. Cânula 3,5 mm sem balonete para RN > 34 semanas e > 2 kg; a cartilagem cricoide proporciona a vedação natural.',
      B: 'Incorreta. Tubo 2,0 mm oferece resistência resistiva aérea proibitiva para 3,5 kg; cuffs com 10 mL causam necrose laríngea.',
      C: 'Incorreta. Cânula 6,0 mm é de adulto e laceraria a laringe do recém-nascido.',
      D: 'Incorreta. Sonda nasogástrica não é via aérea e colapsa sob pressão.',
    },
  },
  {
    id: 'ped-neo-030',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Confirmação do Posicionamento da Cânula Traqueal e Cálculo da Profundidade',
    isRevisao: false,
    enunciado:
      'Após a passagem da cânula orotraqueal em um recém-nascido a termo de 3.000 g, o neonatologista fixa a cânula na rima labial e conecta a ventilação. Para assegurar que o tubo não se encontra no esôfago nem seletivo no brônquio-fonte direito, quais são os métodos semiológicos e objetivos imediatos recomendados para confirmação da posição correta e qual deve ser o nível de fixação na rima labial baseado no peso corporal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ausculta estritamente simétrica em ambas as linhas axilares médias com ausência de ruídos no epigástrio, observação de expansão torácica bilateral simétrica, detecção de CO2 exalado por capnografia colorimétrica e fixação na rima labial calculada pela regra "PESO (kg) + 6" (para 3 kg = fixar em 9 cm na rima labial).',
      },
      {
        id: 'B',
        texto:
          'Ausculta de borborigmos gástricos abundantes e fixação do tubo na rima labial em 20 cm.',
      },
      {
        id: 'C',
        texto:
          'Embaçamento visual do tubo é o único método 100% confirmatório, dispensando qualquer ausculta.',
      },
      {
        id: 'D',
        texto:
          'Introduzir o tubo até encontrar resistência firme na carina e tracionar 15 cm para trás.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A confirmação da posição da cânula traqueal é crucial para evitar ventilação esofágica desastrosa ou intubação seletiva:\n1) MÉTODOS CLÍNICOS E INSTRUMENTAIS DE CONFIRMAÇÃO:\n- Capnografia com detector colorimétrico de CO2 expirado: muda de cor (ex: roxo para amarelo) ao detectar CO2 alveolar expirado, sendo o padrão-ouro confirmatório imediato;\n- Ausculta em 5 pontos: auscultar o epigástrio (deve ser silencioso, sem ruídos hidroaéreos de insuflação gástrica) e auscultar ambos os hemitórax nas linhas axilares médias (o murmúrio vesicular deve ser simétrico e audível bilateralmente);\n- Expansibilidade torácica visível e simétrica a cada ventilação;\n- Elevação rápida da frequência cardíaca e da saturação periférica;\n- Nota: o vapor de água/embaçamento no interior do tubo NÃO é confiável para afastar intubação esofágica;\n2) CÁLCULO DA PROFUNDIDADE DE FIXAÇÃO NA RIMA LABIAL:\n- REGRA HISTÓRICA CLÁSSICA: PESO EM KG + 6 (em centímetros na rima labial):\n  * RN de 1 kg: fixar em 7 cm;\n  * RN de 2 kg: fixar em 8 cm;\n  * RN de 3 kg: fixar em 9 cm;\n  * RN de 4 kg: fixar em 10 cm;\n- Alternativa anatômica atual da SBP: Distância do septo nasal ao tragus auricular (NTL) + 1 cm.',
    comentariosAlternativas: {
      A: 'Correta. Ausculta axilar bilateral simétrica com epigástrio silencioso, capnografia com CO2 expirado e fixação calculada por Peso + 6 (3 kg = 9 cm na rima).',
      B: 'Incorreta. Borborigmos no epigástrio denunciam intubação no esôfago; fixar em 20 cm intuba profundamente o brônquio terminal.',
      C: 'Incorreta. O vapor de condensação pode ocorrer no esôfago e não confirma posição traqueal.',
      D: 'Incorreta. Forçar a cânula até a carina causa trauma mecânico grave e broncoespamo.',
    },
  },
  {
    id: 'ped-neo-031',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Hérnia Diafragmática Congênita (HDC) em Sala de Parto - Contraindicação de Máscara',
    isRevisao: false,
    enunciado:
      'Gestante sem pré-natal adequado dá entrada em período expulsivo. O recém-nascido a termo nasce em apneia e apresenta abdome escavado com tórax abaulado em barril. Ao exame, o pediatra ausculta bulhas cardíacas desviadas para o hemitórax direito e murmúrio vesicular inaudível no hemitórax esquerdo, com presença de ruídos hidroaéreos torácicos. A hipótese diagnóstica é Hérnia Diafragmática Congênita de Bochdalek esquerda. Diante dessa suspeita em sala de parto, qual conduta é FORMALMENTE CONTRAINDICADA e qual é a conduta prioritária imediata preconizada pela SBP?',
    alternativas: [
      {
        id: 'A',
        texto:
          'É FORMALMENTE CONTRAINDICADA a ventilação com pressão positiva sob máscara facial (bolsa-válvula-máscara), pois o ar insuflado distende o estômago e as alças intestinais herniadas no tórax, agravando a compressão pulmonar e mediastinal; a CONDUTA IMEDIATA é a Intubação Orotraqueal imediata com cânula traqueal acoplada ao ventilador em T e passagem precoce de sonda orogástrica calibrosa aberta para descompressão contínua do tubo digestivo.',
      },
      {
        id: 'B',
        texto:
          'É indicada a ventilação sob máscara facial com pressão máxima de 60 cmH2O para empurrar as vísceras para o abdome.',
      },
      {
        id: 'C',
        texto:
          'A intubação orotraqueal é proibida, devendo-se colocar o paciente em decúbito ventral sobre compressas frias.',
      },
      {
        id: 'D',
        texto:
          'Realizar laparotomia exploradora imediata no leito do berço de parto antes de checar a respiração.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O manejo da HÉRNIA DIAFRAGMÁTICA CONGÊNITA (HDC) em sala de parto é uma clássica questão de pegadinha em concursos de residência médica:\n1) FISIOPATOLOGIA DA URGÊNCIA EM SALA DE PARTO:\n- Defeito congênito na cúpula diafragmática (mais comumente à esquerda, no forame póstero-lateral de Bochdalek), permitindo a herniação de alças intestinais, estômago e baço para o interior do tórax durante a embriogênese;\n- Cursa com hipoplasia pulmonar grave e hiper-reatividade vascular pulmonar (hipertensão pulmonar persistente neonatal);\n2) POR QUE A VPP COM MÁSCARA É PROSCRITA?\n- Na ventilação com máscara facial, parte considerável do fluxo aéreo escapa pelo esôfago em direção ao estômago e alças intestinais;\n- O ar insufla as alças no hemitórax, transformando-as em uma massa expansiva que colapsa ainda mais o pulmão hipoplásico ipsilateral e desvia o mediastino, comprimindo o pulmão contralateral e os vasos da base (choque obstrutivo com PCR imediata);\n3) CONDUTA PADRÃO-OURO DE SALA DE PARTO:\n- INTUBAÇÃO OROTRAQUEAL IMEDIATA: ventilação gentil pulmonar direta;\n- PASSAGEM DE SONDA OROGÁSTRICA CALIBROSA (10 a 12 Fr) aberta em aspiração para esvaziar continuamente o ar e secreções gástricas.',
    comentariosAlternativas: {
      A: 'Correta. VPP com máscara é formalmente contraindicada na HDC; conduta é IOT imediata e passagem de sonda gástrica descompressiva aberta.',
      B: 'Incorreta. Ventilar sob máscara com alta pressão expande as alças intestinais herniadas e causa morte por colapso cardiopulmonar.',
      C: 'Incorreta. A intubação traqueal é a conduta salvadora obrigatória.',
      D: 'Incorreta. A correção cirúrgica só é realizada após estabilização hemodinâmica em UTI neonatal com ecocardiograma prévio.',
    },
  },
  {
    id: 'ped-neo-032',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Massagem Cardíaca Externa no Neonato - Indicação e Pré-Requisitos Rigorosos',
    isRevisao: false,
    enunciado:
      'Lactente a termo nasce bradicárdico e em apneia. Após os passos iniciais em 30 segundos, iniciou-se VPP com máscara facial com falha de expansão; realizou-se prontamente o MR. SOPA e procedeu-se à Intubação Orotraqueal com sucesso, confirmada por capnografia e expansão torácica evidente. A equipe ventila através da cânula traqueal com técnica correta e oxigênio suplementar por 30 segundos. Ao final desses 30 segundos de VPP traqueal efetiva, a ausculta pré-cordial revela FC de 45 bpm. De acordo com as Diretrizes da SBP/ILCOR, qual é a conduta indicada e qual o pré-requisito obrigatório que acabou de ser cumprido antes do início das compressões torácicas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Iniciar imediatamente a MASSAGEM CARDÍACA EXTERNA sincronizada com a VPP na proporção de 3:1 e elevar a FiO2 para 100%; o pré-requisito indispensável cumprido foi a garantia de via aérea avançada pérvia (cânula orotraqueal) com 30 segundos de ventilação efetiva comprovada que falhou em elevar a FC acima de 60 bpm.',
      },
      {
        id: 'B',
        texto:
          'Iniciar massagem cardíaca apenas se a mãe concordar e mantendo o oxigênio rigorosamente em ar ambiente (FiO2 21%).',
      },
      {
        id: 'C',
        texto:
          'Desconectar a cânula traqueal e reiniciar a secagem com toalhas aquecidas.',
      },
      {
        id: 'D',
        texto:
          'Aplicar imediatamente choque com desfibrilador monofásico de 200 Joules.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A indicação da MASSAGEM CARDÍACA EXTERNA no neonato é extremamente precisa e cercada de pré-requisitos rigorosos:\n1) CRITÉRIO DECISÓRIO DE INDICAÇÃO:\n- FREQUÊNCIA CARDÍACA < 60 bpm após 30 segundos de VPP EFICAZ;\n2) PRÉ-REQUISITO INDISPENSÁVEL (DIRETRIZ SBP/ILCOR):\n- A massagem cardíaca só tem eficácia se o sangue bombeado contiver oxigênio;\n- Por isso, a diretriz estabelece que, antes de iniciar as compressões torácicas, o recém-nascido DEVE ESTAR INTUBADO com cânula traqueal (ou com máscara laríngea funcionante) e ter recebido 30 segundos de ventilação traqueal efetiva com expansão torácica comprovada;\n- Não se inicia massagem cardíaca sob máscara facial de rotina na sala de parto se a intubação puder ser realizada;\n3) AJUSTE DA FiO2 PARA 100%:\n- No momento em que se inicia a massagem cardíaca, a concentração de oxigênio (FiO2) DEVE SER ELEVADA PARA 100% (1,0) para maximizar a entrega de oxigênio ao miocárdio isquêmico e ao cérebro durante o baixo débito das compressões.',
    comentariosAlternativas: {
      A: 'Correta. FC < 60 bpm após 30s de VPP traqueal efetiva é a indicação formal de massagem cardíaca 3:1 associada à elevação da FiO2 para 100%.',
      B: 'Incorreta. Ao iniciar a massagem torácica, a FiO2 deve ser elevada compulsoriamente para 100%.',
      C: 'Incorreta. Desconectar o tubo em paciente em PCR hipóxica é fatal.',
      D: 'Incorreta. A PCR neonatal na sala de parto é por assistolia/AESP decorrente de asfixia hipóxica profunda, não por fibrilação ventricular chocável.',
    },
  },
  {
    id: 'ped-neo-033',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Concentração de Oxigênio (FiO2 100%) Mandatória Durante a Massagem Cardíaca',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo de 38 semanas iniciou a ventilação com pressão positiva em ar ambiente (FiO2 a 21%) conforme preconizado para a estabilização inicial. No entanto, o paciente evoluiu com bradicardia extrema persistente (FC 40 bpm) mesmo após intubação traqueal e ventilação corretiva, sendo indicada a massagem cardíaca externa. Ao iniciar as compressões torácicas, qual ajuste obrigatório deve ser realizado no misturador de gases (blender) em relação à Fração Inspirada de Oxigênio (FiO2)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Aumentar imediatamente a Fração Inspirada de Oxigênio (FiO2) para 100% (1,0), conectando a fonte de oxigênio puro ao ventilador em T ou reservatório do balão, visando garantir a máxima oferta tecidual de oxigênio durante a hipoperfusão crítica gerada pelas compressões torácicas.',
      },
      {
        id: 'B',
        texto:
          'Manter estritamente a FiO2 em 21% para evitar qualquer estresse oxidativo durante a parada cardiorrespiratória.',
      },
      {
        id: 'C',
        texto:
          'Desligar todas as fontes de gases e ventilar com ar do ambiente soprado pela boca do socorrista.',
      },
      {
        id: 'D',
        texto:
          'Reduzir a FiO2 para 15% misturando ar com nitrogênio líquido.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A dosagem de oxigênio na reanimação neonatal possui duas regras cronológicas claras que todo médico deve dominar:\n1) REGRA INICIAL (Fase de Ventilação isolada):\n- Em RNs ≥ 34 semanas: INICIAR COM FiO2 A 21% (ar ambiente);\n- Em RNs < 34 semanas: INICIAR COM FiO2 A 30% em blender;\n2) REGRA DE EXCEÇÃO CRÍTICA (Fase de Massagem Cardíaca Externa):\n- SE A FREQUÊNCIA CARDÍACA PERSISTIR < 60 bpm e for indicada MASSAGEM CARDÍACA EXTERNA, A FiO2 DEVE SER ELEVADA IMEDIATAMENTE PARA 100% (1,0);\n- RACIONAL FISIOPATOLÓGICO: A massagem cardíaca externa gera no máximo 25% a 30% do débito cardíaco fisiológico normal do neonato. Nesse estado de choque circulatório e perfusão tecidual marginal extrema, a oferta de O2 a 100% é mandatória para tentar reoxigenar o miocárdio asfixiado, restaurar o potencial de ação celular e reverter a acidose miocárdica;\n- Logo que a FC se recuperar e ultrapassar 60 bpm, com retorno da circulação espontânea, a FiO2 deve ser imediatamente retitulada para baixo guiada pela oximetria de pulso no MSD para evitar hiperóxia pós-parada.',
    comentariosAlternativas: {
      A: 'Correta. Ao iniciar compressões torácicas, a FiO2 deve ser elevada compulsoriamente para 100% para compensar o baixo débito gerado.',
      B: 'Incorreta. Manter FiO2 21% durante massagem cardíaca perpetua anóxia miocárdica e impede a recuperação do ritmo sinusal.',
      C: 'Incorreta. Ventilação boca-a-boca é conduta leiga não recomendada em sala de parto equipada.',
      D: 'Incorreta. Mistura asfixiante absurda.',
    },
  },
  {
    id: 'ped-neo-034',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Técnica dos Dois Polegares na Massagem Cardíaca Neonatal',
    isRevisao: false,
    enunciado:
      'Durante a realização da massagem cardíaca externa no recém-nascido, a Sociedade Brasileira de Pediatria recomenda uma técnica anatômica de compressão como método padrão-ouro de escolha indiscutível sobre as demais. Qual é essa técnica, qual o sítio anatômico exato de posicionamento e qual a profundidade recomendada da compressão torácica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'TÉCNICA DOS DOIS POLEGARES: os dois polegares sobrepostos ou lado a lado são posicionados sobre o TERÇO INFERIOR DO ESTERNO (logo abaixo da linha intermamilar e acima do apêndice xifoide), enquanto os demais dedos abraçam a caixa torácica e sustentam o dorso da criança; a profundidade da compressão deve atingir 1/3 DO DIÂMETRO ÂNTERO-POSTERIOR do tórax, permitindo descompressão completa entre as batidas.',
      },
      {
        id: 'B',
        texto:
          'Técnica dos dois dedos colocados diretamente sobre o apêndice xifoide e comprimindo metade do abdome.',
      },
      {
        id: 'C',
        texto:
          'Técnica da palma da mão sobre o hemitórax direito comprimindo com todo o peso do socorrista.',
      },
      {
        id: 'D',
        texto:
          'Técnica do punho fechado desferindo golpes secos contra a clavícula esquerda.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A biomecânica da massagem cardíaca neonatal baseia-se na TÉCNICA DOS DOIS POLEGARES:\n1) POR QUE A TÉCNICA DOS DOIS POLEGARES É SUPERIOR À DOS DOIS DEDOS?\n- Estudos hemodinâmicos e ecocardiográficos comprovam que a técnica dos dois polegares gera picos de pressão arterial sistólica mais altos, melhor pressão de perfusão coronariana, fluxo sanguíneo carotídeo superior e menor fadiga muscular para o reanimador ao longo do tempo;\n- A técnica dos dois dedos (dedo médio e indicador comprimindo perpendicularmente o esterno) é reservada apenas como alternativa de exceção se o socorrista precisar liberar o dorso para cateterismo venoso umbilical simultâneo (embora com as mãos posicionadas lateralmente o acesso umbilical possa ser realizado mesmo na técnica dos polegares);\n2) PONTO DE APLICAÇÃO ANATÔMICO:\n- Terço inferior do osso esterno, logo abaixo de uma linha imaginária traçada entre os dois mamilos (linha intermamilar);\n- CUIDADO: Evitar comprimir o apêndice xifoide para não lacerar o lobo esquerdo do fígado (hemoperitônio traumático neonatal);\n3) PROFUNDIDADE E RECOIL:\n- Comprimir 1/3 do diâmetro ântero-posterior (cerca de 1,5 a 2 cm em neonatos a termo);\n- Permitir o retorno elástico completo (recoil) da caixa torácica entre as compressões para possibilitar o enchimento diastólico ventricular ótimo.',
    comentariosAlternativas: {
      A: 'Correta. Técnica dos dois polegares no terço inferior do esterno, comprimindo 1/3 do diâmetro AP com retorno elástico total.',
      B: 'Incorreta. Comprimir o xifoide lacera o fígado e causa hemorragia interna letal.',
      C: 'Incorreta. A palma da mão fratura costelas de recém-nascidos e lesa o coração.',
      D: 'Incorreta. Murro pré-cordial é proscrito em pediatria.',
    },
  },
  {
    id: 'ped-neo-035',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Sincronia 3:1 na Reanimação Neonatal ("Um-e-Dois-e-Três-e-Ventila")',
    isRevisao: false,
    enunciado:
      'Em sala de parto, a massagem cardíaca externa deve ser rigorosamente sincronizada com a ventilação com pressão positiva através de cânula orotraqueal. Qual é a RELAÇÃO COMPRESSÃO:VENTILAÇÃO preconizada pela Sociedade Brasileira de Pediatria, qual a frequência total de eventos por minuto e qual a cadência verbal rítmica padronizada para os socorristas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'RELAÇÃO DE 3:1 (3 compressões torácicas para 1 ventilação); cadência verbal padronizada: "UM-E-DOIS-E-TRÊS-E-VENTILA"; perfazendo um ciclo de 2 segundos que resulta em 90 compressões e 30 ventilações por minuto (total de 120 eventos por minuto).',
      },
      {
        id: 'B',
        texto:
          'Relação de 15:2 com compressões contínuas e ventilação assincrônica livre.',
      },
      {
        id: 'C',
        texto:
          'Relação de 30:2 com pausas de 10 segundos entre cada ciclo de massagem.',
      },
      {
        id: 'D',
        texto:
          'Relação de 1:1, comprimindo e ventilando exatamente no mesmo milissegundo por 4 horas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A sincronia da reanimação cardiopulmonar neonatal difere completamente da reanimação em pediatria maior e adultos:\n1) RELAÇÃO SINCRONIZADA 3:1:\n- 3 compressões torácicas seguidas de 1 ventilação pulmonar com pressão positiva;\n- Em cada ciclo de 2 segundos, realizam-se: 3 compressões (em 1,5 segundos) + 1 ventilação (em 0,5 segundos);\n2) CADÊNCIA VERBAL EM VOZ ALTA:\n- O socorrista que massageia conta em voz alta para guiar o ventilador:\n  "UM... E... DOIS... E... TRÊS... E... VENTILA!"\n  (No "um", "dois", "três" comprime; no "ventila" solta o esterno e o colega insufla o balão/ventilador);\n3) FREQUÊNCIA DE EVENTOS POR MINUTO:\n- Em 60 segundos são completados 30 ciclos de 3:1;\n- Total: 90 COMPRESSÕES TORÁCICAS + 30 VENTILAÇÕES = 120 EVENTOS/MINUTO;\n4) POR QUE NÃO USAR 15:2 OU 30:2 NO NEONATO EM SALA DE PARTO?\n- A etiologia da parada em adultos e crianças maiores é frequentemente cardíaca primária (choque elétrico/arritmia) ou choque séptico, onde a perfusão contínua com 15:2 ou 30:2 é prioritária;\n- No recém-nascido em sala de parto, a causa quase exclusiva da PCR é a ASFIXIA HIPÓXICA RESPIRATÓRIA. A relação 3:1 assegura uma taxa ventilatória protetora de 30 rpm indispensável para manter a aeração alveolar enquanto se bombeia sangue oxigenado.',
    comentariosAlternativas: {
      A: 'Correta. Relação 3:1, mnemônica "um-e-dois-e-três-e-ventila", somando 90 compressões e 30 ventilações (120 eventos/minuto).',
      B: 'Incorreta. A relação 15:2 é utilizada na reanimação pediátrica pós-neonatal por 2 socorristas fora da sala de parto.',
      C: 'Incorreta. A relação 30:2 é de reanimação de adultos ou socorrista único pediátrico leigo.',
      D: 'Incorreta. Ventilar e comprimir no mesmo milissegundo gera pico pressórico intrapulmonar com pneumotórax maciço e refluxo de ar.',
    },
  },
  {
    id: 'ped-neo-036',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Tempo de Reavaliação Pós-Início da Massagem Cardíaca (60 Segundos Ininterruptos)',
    isRevisao: false,
    enunciado:
      'A equipe de reanimação neonatal acabou de iniciar a massagem cardíaca externa sincronizada 3:1 com VPP através de tubo traqueal e FiO2 a 100%. O interno, ansioso, interrompe as compressões torácicas aos 15 segundos para colocar o estetoscópio e checar se o coração voltou a bater. O preceptor intervém imediatamente e manda retomar a massagem. De acordo com as normas da SBP, por quanto tempo a massagem cardíaca e a ventilação sincronizada 3:1 devem ser mantidas DE FORMA ININTERRUPTA antes de se realizar a reavaliação da Frequência Cardíaca?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Por 60 SEGUNDOS COMPLETOS E ININTERRUPTOS; interrupções precoces diminuem a pressão de perfusão coronariana acumulada, impedindo o restabelecimento do débito cardíaco mínimo e do fluxo cerebral.',
      },
      {
        id: 'B',
        texto:
          'Por apenas 10 segundos, devendo-se parar a cada 5 batimentos para ausculta pré-cordial prolongada.',
      },
      {
        id: 'C',
        texto:
          'Por no mínimo 30 minutos ininterruptos sem nunca checar a frequência cardíaca.',
      },
      {
        id: 'D',
        texto:
          'A massagem deve ser interrompida a cada 3 segundos para aspirar o estômago.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O tempo de reavaliação pós-início da massagem cardíaca é uma regra que não permite hesitação:\n1) INTERVALO PADRONIZADO: 60 SEGUNDOS ININTERRUPTOS:\n- Diferente da fase de VPP isolada (que é avaliada a cada 30 segundos), a fase de MASSAGEM CARDÍACA SINCRONIZADA 3:1 deve ser mantida por 60 SEGUNDOS antes de qualquer interrupção para checagem da FC;\n2) FISIOLOGIA DA PRESSÃO DE PERFUSÃO CORONARIANA (PPC):\n- A cada compressão torácica externa no neonato, o fluxo sanguíneo sobe lentamente e a pressão de perfusão na raiz da aorta e coronárias leva cerca de 20 a 30 segundos de compressões ritmadas contínuas para atingir o platô crítico mínimo de oxigenação miocárdica;\n- Se o socorrista interrompe a massagem aos 15 ou 20 segundos para auscultar, a PPC despenca imediatamente para zero, perdendo-se todo o esforço pressórico anterior;\n- Portanto, a SBP orienta 60 segundos completos de 3:1. Para otimizar esse momento, o uso do MONITOR CARDÍACO ELETROCARDIOGRÁFICO (ECG) permite visualizar a frequência cardíaca na tela sem necessidade de interrupção mecânica das compressões.',
    comentariosAlternativas: {
      A: 'Correta. A massagem torácica deve ser mantida por 60 segundos contínuos antes da reavaliação para permitir acúmulo de pressão de perfusão coronariana.',
      B: 'Incorreta. Interromper precocemente a cada 10 segundos zera a pressão coronariana e condena o miocárdio à isquemia contínua.',
      C: 'Incorreta. Aguardar 30 minutos sem reavaliar impede a administração de drogas e a suspensão da massagem caso o coração recupere.',
      D: 'Incorreta. Conduta disruptiva inadmissível na reanimação cardiopulmonar.',
    },
  },
  {
    id: 'ped-neo-037',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Adrenalina (Epinefrina) na Reanimação Neonatal - Indicação Precisa',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo de 3.200 g completou os passos iniciais, falhou na VPP com máscara, foi intubado com cânula traqueal 3,5 mm e submetido a 60 segundos de massagem cardíaca externa sincronizada 3:1 com VPP efetiva e FiO2 a 100%. Ao término desse minuto de compressões, o monitor cardíaco e a ausculta revelam que a Frequência Cardíaca permanece em 40 bpm (bradicardia severa refratária). De acordo com as Diretrizes da Sociedade Brasileira de Pediatria, qual medicação está formalmente indicada neste momento?',
    alternativas: [
      {
        id: 'A',
        texto:
          'ADRENALINA (Epinefrina), indicada quando a frequência cardíaca permanece abaixo de 60 bpm após no mínimo 60 segundos de massagem cardíaca externa sincronizada com VPP traqueal efetiva e oxigênio a 100%.',
      },
      {
        id: 'B',
        texto:
          'Atropina associada a gluconato de cálcio em bólus rápido como primeira escolha farmacológica.',
      },
      {
        id: 'C',
        texto:
          'Amiodarona venosa em infusão contínua para reversão de taquicardia supraventricular.',
      },
      {
        id: 'D',
        texto:
          'Nenhuma medicação é autorizada na infância antes dos 5 anos de idade.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A ADRENALINA (EPINEFRINA) é o vasopressor e inotrópico de escolha na parada cardiorrespiratória e bradicardia severa neonatal:\n1) CRITÉRIO PRECISO DE INDICAÇÃO:\n- A frequência cardíaca permanece < 60 bpm APÓS:\n  a) Intubação orotraqueal com ventilação eficaz comprovada; E\n  b) 60 segundos ininterruptos de massagem cardíaca externa sincronizada 3:1 com O2 a 100%;\n2) MECANISMO DE AÇÃO FISIOPATOLÓGICO:\n- Atividade Alfa-1 Adrenérgica potente: causa vasoconstrição periférica arterial sistêmica intensa, elevando a resistência vascular periférica e a pressão diastólica na raiz da aorta. Isso força o fluxo retrógrado de sangue para as artérias coronárias (aumentando a Pressão de Perfusão Coronariana - PPC) e para as artérias carótidas (perfusão cerebral);\n- Atividade Beta-1 Adrenérgica: aumenta o cronotropismo (frequência) e inotropismo (força contrátil) do miocárdio após o restabelecimento da oxigenação celular;\n3) RECOMENDAÇÃO PRÁTICA:\nA indicação da adrenalina é um evento raro (< 0,1% dos partos), mas quando indicada, deve ser administrada sem demora enquanto as compressões 3:1 continuam.',
    comentariosAlternativas: {
      A: 'Correta. Adrenalina é a droga indicada se FC < 60 bpm após 60 segundos de massagem cardíaca e VPP com cânula traqueal e O2 a 100%.',
      B: 'Incorreta. Atropina e cálcio não fazem parte do algoritmo básico da PCR por asfixia neonatal.',
      C: 'Incorreta. O paciente está em bradicardia extrema/parada hipóxica, não em taquiarritmia.',
      D: 'Incorreta. A adrenalina é utilizada na reanimação neonatal no mundo inteiro com doses miligramadas por kg.',
    },
  },
  {
    id: 'ped-neo-038',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Preparo, Diluição e Dose Intravenosa da Adrenalina no Neonato',
    isRevisao: false,
    enunciado:
      'Para a administração de Adrenalina em um recém-nascido de 3 kg com FC de 40 bpm refratária em sala de parto, a equipe de enfermagem deve preparar a medicação conforme a padronização oficial da Sociedade Brasileira de Pediatria. Qual é a DILUIÇÃO OBRIGATÓRIA da ampola de adrenalina e qual é a DOSE INTRAVENOSA recomendada em mililitros (mL) por quilograma de peso corporal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Diluição padronizada a 1:10.000 (1 mL de adrenalina 1:1.000 + 9 mL de Soro Fisiológico 0,9% em seringa de 10 mL); a dose intravenosa é de 0,01 a 0,03 mg/kg, correspondendo rigorosamente a 0,1 a 0,3 mL/kg da solução diluída a 1:10.000 (para 3 kg = 0,3 a 0,9 mL), seguida de flush de 1 a 3 mL de SF 0,9%.',
      },
      {
        id: 'B',
        texto:
          'Administrar a ampola pura sem diluir (1:1.000) na dose de 5 mL por quilo diretamente na carótida.',
      },
      {
        id: 'C',
        texto:
          'Diluir 1 ampola em 1 litro de água destilada e aplicar 500 mL por via subcutânea no couro cabeludo.',
      },
      {
        id: 'D',
        texto:
          'A dose intravenosa é de 10 mL/kg de adrenalina pura fervida em banho-maria.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O preparo e a dosagem de adrenalina neonatal exigem atenção farmacológica absoluta para evitar erros fatais de sobredosagem:\n1) APRESENTAÇÃO E DILUIÇÃO PADRONIZADA (1:10.000):\n- A ampola comercial de adrenalina contém 1 mL na concentração de 1:1.000 (1 mg/mL);\n- Em pediatria e neonatologia, NUNCA se aplica a solução 1:1.000 pura por via venosa!\n- DILUIÇÃO: Aspira-se 1 mL de adrenalina 1:1.000 + 9 mL de Soro Fisiológico 0,9% em uma seringa de 10 mL, obtendo-se 10 mL da solução a 1:10.000 (concentração final de 0,1 mg/mL ou 100 mcg/mL);\n2) DOSE INTRAVENOSA (IV) OU INTRAÓSSEA (IO):\n- Dose ponderal: 0,01 a 0,03 mg/kg;\n- Em volume prático da solução diluída 1:10.000: 0,1 a 0,3 mL/kg;\n  * Exemplo para RN de 3 kg: 3 x (0,1 a 0,3) = 0,3 a 0,9 mL da solução 1:10.000 aspirada em seringa de 1 mL;\n- FLUSH IMEDIATO: Administrar em bólus rápido seguido de flush de 1 a 3 mL de Soro Fisiológico 0,9% para carrear a droga da veia umbilical até a circulação central atrioventricular;\n- REPETIÇÃO: Se a FC permanecer < 60 bpm, a dose pode ser repetida a cada 3 a 5 minutos.',
    comentariosAlternativas: {
      A: 'Correta. Diluição a 1:10.000 (1 mL droga + 9 mL SF) com dose IV de 0,01 a 0,03 mg/kg = 0,1 a 0,3 mL/kg da diluição + flush de 1-3 mL.',
      B: 'Incorreta. Adrenalina pura 1:1.000 em alta dose causa arritmias ventriculares fatais, hemorragia intracraniana maciça e parada cardíaca irreversível.',
      C: 'Incorreta. Diluição absurda e via subcutânea inoperante em PCR.',
      D: 'Incorreta. Dose tóxica letal incompatível com a vida.',
    },
  },
  {
    id: 'ped-neo-039',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Vias de Administração da Adrenalina - Endovenosa (Cateter Umbilical) vs Endotraqueal',
    isRevisao: false,
    enunciado:
      'Durante a reanimação neonatal com massagem cardíaca em andamento, o neonatologista solicita adrenalina de urgência. O acesso venoso ainda não foi estabelecido. Em relação às VIAS DE ADMINISTRAÇÃO DA ADRENALINA (Intravenosa vs Endotraqueal), assinale a conduta e posologia preconizadas pelas diretrizes da SBP:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A via INTRAVENOSA (através de cateter venoso umbilical de emergência) é a via preferencial e de maior eficácia; enquanto o cateterismo umbilical está sendo providenciado, permite-se uma DOSE ÚNICA TRANSITÓRIA por via ENDOTRAQUEAL em dose mais elevada (0,05 a 0,1 mg/kg = 0,5 a 1,0 mL/kg da diluição 1:10.000), devendo-se migrar para a via venosa assim que o cateter for instalado.',
      },
      {
        id: 'B',
        texto:
          'A via endotraqueal é a via padrão-ouro definitiva para todas as doses de adrenalina, devendo-se evitar qualquer cateterismo venoso na sala de parto.',
      },
      {
        id: 'C',
        texto:
          'A dose endotraqueal de adrenalina deve ser 100 vezes menor do que a dose intravenosa para não queimar a traqueia.',
      },
      {
        id: 'D',
        texto:
          'Se não houver veia, a única via autorizada é a injeção intracardíaca direta através do quinto espaço intercostal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A comparação entre a via intravenosa e endotraqueal para adrenalina na reanimação neonatal é um dos pontos mais testados em concursos:\n1) VIA PREFERENCIAL DE ESCOLHA: INTRAVENOSA (IV) OU INTRAÓSSEA (IO):\n- A via de escolha incontestável é a INTRAVENOSA através de Cateterismo Venoso Umbilical de emergência;\n- A biodisponibilidade por via venosa é imediata, previsível e com taxa de reversão da bradicardia comprovadamente muito superior;\n2) PAPEL DA VIA ENDOTRAQUEAL (ET):\n- A absorção pelo leito capilar alveolar do neonato asfixiado é errática, tardia e de baixa concentração sérica bioativa;\n- Por isso, a via endotraqueal é considerada apenas uma MEDIDA DE TRANSIÇÃO (DOSE ÚNICA TEMPORÁRIA) enquanto a equipe obtém o acesso venoso umbilical ou intraósseo;\n- DOSE ENDOTRAQUEAL: Exige dose significativamente maior para tentar compensar a baixa absorção alveolar:\n  * Dose: 0,05 a 0,1 mg/kg (correspondendo a 0,5 a 1,0 mL/kg da solução 1:10.000);\n  * Administrada diretamente no tubo com cânula longa ou seringa e seguida de várias ventilações de VPP para espalhar o aerossol no leito alveolar;\n- Não se deve repetir doses endotraqueais subsequentes; as doses seguintes devem ser estritamente intravenosas.',
    comentariosAlternativas: {
      A: 'Correta. Via IV (cateter umbilical) é a de escolha (0,1-0,3 mL/kg); dose única endotraqueal transitória permitida em dose maior (0,5-1,0 mL/kg) enquanto se canula a veia.',
      B: 'Incorreta. A via endotraqueal tem absorção errática e menor eficácia, não sendo a via preferencial.',
      C: 'Incorreta. A dose endotraqueal é maior (0,5 a 1,0 mL/kg) e não menor.',
      D: 'Incorreta. Injeção intracardíaca é técnica histórica proscrita pelo altíssimo risco de laceração coronariana e hemopericárdio tamponante.',
    },
  },
  {
    id: 'ped-neo-040',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Cateterismo Venoso Umbilical de Emergência na Sala de Parto',
    isRevisao: false,
    enunciado:
      'Em sala de parto, diante de um recém-nascido em parada cardiorrespiratória refratária com necessidade de adrenalina e expansor de volume, a equipe médica realiza o CATETERISMO VENOSO UMBILICAL DE EMERGÊNCIA. Qual é a técnica correta de posicionamento do cateter, profundidade de introdução e identificação do vaso segundo as diretrizes de reanimação da SBP?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Corta-se o cordão umbilical a cerca de 1 a 2 cm da base com bisturi; identifica-se a VEIA UMBILICAL (vaso único, de parede fina, luz ampla e formato ovalado, localizado na posição superior/12 horas); introduz-se um cateter radiopaco 3,5 a 5 Fr apenas cerca de 2 a 4 cm (ou até obter refluxo livre de sangue), mantendo a ponta do cateter abaixo do fígado na veia umbilical proximal, sem avançar para o ducto venoso/cava.',
      },
      {
        id: 'B',
        texto:
          'Identificam-se as duas artérias umbilicais e introduz-se o cateter por 25 cm até alcançar o ventrículo esquerdo.',
      },
      {
        id: 'C',
        texto:
          'O cateter venoso deve ser introduzido por 15 cm e mantido obrigatoriamente dentro dos sinusóides hepáticos com infusão sob pressão.',
      },
      {
        id: 'D',
        texto:
          'O cateterismo umbilical é contraindicado na primeira hora de vida devido ao risco de choque por hipotensão reflexa.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O CATETERISMO VENOSO UMBILICAL DE EMERGÊNCIA é o acesso vascular mais rápido e seguro em sala de parto:\n1) ANATOMIA DOS VASOS UMBILICAIS:\n- 1 VEIA UMBILICAL: vaso de calibre amplo, parede delgada, facilmente compressível, localizado habitualmente na posição de 12 horas do coto cortado;\n- 2 ARTÉRIAS UMBILICAIS: vasos menores, com parede muscular espessa e lúmen puntiforme, localizados nas posições de 4 e 8 horas;\n2) TÉCNICA DE EMERGÊNCIA NA SALA DE PARTO (NÍVEL BAIXO / INFRA-HEPÁTICO):\n- Corta-se o cordão a 1-2 cm do anel abdominal com bisturi sob técnica estéril;\n- Preenche-se previamente o cateter (3,5 Fr para prematuros ou 5 Fr para a termo) com solução salina (purgar ar);\n- Introduz-se o cateter na VEIA umbilical por APENAS 2 A 4 CENTÍMETROS (cerca de 1 a 2 cm além da parede abdominal no prematuro e 2 a 4 cm no termo), até que haja refluxo livre de sangue à aspiração suave com seringa;\n- OBJETIVO DA PROFUNDIDADE RASA DE EMERGÊNCIA: A ponta do cateter deve permanecer na veia umbilical, logo antes de atingir o fígado. Não se deve avançar profundamente sem controle radiológico, pois se o cateter penetrar nos sinusóides hepáticos, a infusão de adrenalina ou expansores causa hematoma subcapsular hepático, necrose hepática e hemorragia intra-abdominal catastrófica.',
    comentariosAlternativas: {
      A: 'Correta. Veia umbilical (calibre amplo, parede fina); introduzir cateter apenas 2 a 4 cm até refluir sangue livremente, mantendo ponta rasa infra-hepática.',
      B: 'Incorreta. Não se canula artéria de emergência para drogas rápidas na PCR e 25 cm perfuraria o coração.',
      C: 'Incorreta. Introduzir 15 cm aloca a ponta no parênquima hepático, com alto risco de necrose hepática e rotura de hematoma.',
      D: 'Incorreta. É a via de emergência padrão-ouro mundial.',
    },
  },
  {
    id: 'ped-neo-041',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Expansor de Volume na Reanimação Neonatal - Indicações Estritas e Sinais de Choque',
    isRevisao: false,
    enunciado:
      'Gestante admitida em choque hemorrágico com diagnóstico de Descolamento Prematuro de Placenta (DPP) maciço é submetida a cesariana de emergência. O recém-nascido a termo nasce flácido, em apneia, extremamente pálido (palidez cerosa/cutânea cadavérica), com tempo de enchimento capilar > 5 segundos e pulsos femorais filiformes. A equipe executa IOT, VPP com O2 a 100%, massagem cardíaca 3:1 e administra a primeira dose de adrenalina por cateter umbilical, sem qualquer resposta na FC (mantém-se em 40 bpm). Qual intervenção terapêutica está formalmente indicada nesta fase?',
    alternativas: [
      {
        id: 'A',
        texto:
          'ADMINISTRAÇÃO DE EXPANSORES DE VOLUME (Soro Fisiológico a 0,9% ou Sangue Total / Concentrado de Hemácias O negativo não cruzado), formalmente indicada diante de suspeita ou confirmação de perda aguda de sangue/choque hipovolêmico com resposta insatisfatória às outras medidas de reanimação.',
      },
      {
        id: 'B',
        texto:
          'Infusão rápida de 50 mL/kg de solução glicosada a 50% em bólus com bicarbonato puro.',
      },
      {
        id: 'C',
        texto:
          'Restrição hídrica imediata com aplicação de diurético de alça (furosemida) em alta dose.',
      },
      {
        id: 'D',
        texto:
          'Suspensão imediata da massagem e alta para o alojamento conjunto.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A EXPANSÃO VOLÉMICA em sala de parto possui indicações estritas e não deve ser utilizada indiscriminadamente:\n1) INDICAÇÕES FORMAIS DA SBP/ILCOR:\n- Recém-nascido que não responde adequadamente às manobras de VPP traqueal efetiva, massagem cardíaca e adrenalina;\n- Associado a EVIDÊNCIA CLÍNICA OU HISTÓRICO DE PERDA SANGUÍNEA AGUDA PERIPARTO:\n  * Descolamento prematuro de placenta (DPP);\n  * Placenta prévia sangrante;\n  * Rotura de vasa prévia ou laceração de cordão umbilical;\n  * Transfusão feto-materna maciça ou síndrome de transfusão feto-fetal;\n2) SINAIS CLÍNICOS DE CHOQUE HIPOVOLÊMICO NEONATAL:\n- Palidez cutâneo-mucosa intensa (palidez em "folha de papel") que persiste mesmo com boa oxigenação;\n- Pulsos centrais e periféricos filiformes ou ausentes;\n- Tempo de enchimento capilar (TEC) prolongado (> 3 a 5 segundos);\n- Bradicardia refratária com colapso cardiovascular por ausência de volume diastólico ventricular.',
    comentariosAlternativas: {
      A: 'Correta. Expansor de volume (SF 0,9% ou hemácias O negativo) é indicado no choque hipovolêmico por perda sanguínea com má resposta à reanimação.',
      B: 'Incorreta. Glicose 50% hiperosmolar causa hemorragia cerebral e o bicarbonato puro agrava a acidose intracelular.',
      C: 'Incorreta. Furosemida piora drasticamente a hipovolemia, deflagrando parada em assistolia irreversível.',
      D: 'Incorreta. Paciente em PCR em choque hemorrágico requer ressuscitação volêmica urgente.',
    },
  },
  {
    id: 'ped-neo-042',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Solução, Dose e Velocidade de Infusão do Expansor de Volume no Neonato',
    isRevisao: false,
    enunciado:
      'Para a realização de expansão volêmica de emergência em um recém-nascido de 3 kg com choque hipovolêmico hemorrágico pós-parto por rotura de vasa prévia, qual é a SOLUÇÃO CRISTALÓIDE DE ESCOLHA, qual a DOSE CALCULADA e qual o TEMPO DE INFUSÃO recomendado pelas diretrizes da Sociedade Brasileira de Pediatria?',
    alternativas: [
      {
        id: 'A',
        texto:
          'SORO FISIOLÓGICO A 0,9% (ou concentrado de hemácias O Rh negativo se hemorragia grave comprovada); na dose de 10 mL/kg (volume total de 30 mL para 3 kg); infundido por via intravenosa de forma lenta e controlada ao longo de 5 A 10 MINUTOS.',
      },
      {
        id: 'B',
        texto:
          'Albumina humana a 20% pura na dose de 50 mL/kg infundida em bólus pressurizado em menos de 10 segundos.',
      },
      {
        id: 'C',
        texto:
          'Soro Glicosado a 5% na dose de 100 mL/kg em infusão ultrarrápida com seringa de 60 mL.',
      },
      {
        id: 'D',
        texto:
          'Solução de Ringer com Lactato gelada na dose de 2 mL/kg por via subcutânea.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A expansão volêmica no período neonatal obedece a limites volumétricos e temporais rigorosos:\n1) SOLUÇÃO DE PRIMEIRA ESCOLHA:\n- SORO FISIOLÓGICO A 0,9% (Cloreto de Sódio 0,9% estéril isotonic);\n- (Se houver hemorragia fetal/materna maciça evidente com palidez extrema refratária, o Concentrado de Hemácias O negativo não cruzado/reconstituído é a alternativa superior);\n- SOLUÇÕES PROSCRITAS PARA EXPANSÃO EM SALA DE PARTO: Albumina humana a 5% ou 20% (associação com aumento da mortalidade e risco infeccioso), Soluções Glicosadas (induzem hiponatremia osmótica, edema cerebral e lesão neuronal pós-asfixia) e Ringer Lactato (risco de piorar hiperlactatemia/acidose em fígado isquêmico);\n2) DOSE PADRONIZADA:\n- 10 mL/kg de peso corporal (para 3 kg = 30 mL);\n3) TEMPO DE INFUSÃO (5 A 10 MINUTOS):\n- A infusão deve ser feita em velocidade constante ao longo de 5 a 10 minutos (NUNCA em bólus instantâneo "em jato");\n- RACIONAL: A infusão rápida e pressurizada de volume em neonatos asfixiados e prematuros causa flutuação brusca do fluxo sanguíneo cerebral (perda da autorregulação cerebrovascular), rompendo os frágeis capilares da matriz germinativa e desencadeando HEMORRAGIA PERI-INTRAVENTRICULAR maciça.',
    comentariosAlternativas: {
      A: 'Correta. SF 0,9% (ou hemácias O-) na dose de 10 mL/kg infundido lentamente em 5 a 10 minutos por via intravenosa.',
      B: 'Incorreta. Albumina é proscrita como expansor inicial e infusão pressurizada causa hemorragia intracraniana.',
      C: 'Incorreta. Soro glicosado puro não expande espaço intravascular eficazmente e gera hiponatremia e edema cerebral.',
      D: 'Incorreta. Via subcutânea é inútil no choque e soluções geladas geram hipotermia severa.',
    },
  },
  {
    id: 'ped-neo-043',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Drogas Proscritas de Rotina na Reanimação Neonatal em Sala de Parto',
    isRevisao: false,
    enunciado:
      'Durante uma reanimação neonatal prolongada de um recém-nascido em acidose grave, diferentes membros da equipe sugerem administrar substâncias que eram utilizadas historicamente no passado: Bicarbonato de Sódio, Naloxone e Gluconato de Cálcio. De acordo com as diretrizes contemporâneas da Sociedade Brasileira de Pediatria (SBP) e do ILCOR, qual é a recomendação formal sobre o uso dessas medicações na sala de parto?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O uso rotineiro de Bicarbonato de Sódio, Naloxone e Cálcio é FORMALMENTE CONTRAINDICADO na reanimação em sala de parto; o bicarbonato piora a acidose intracelular cerebral (pelo aumento de CO2 difusível) e causa hemorragia intracraniana por hiperosmolaridade; o naloxone pode deflagrar síndrome de abstinência aguda convulsiva grave e edema pulmonar; e o cálcio só é indicado em hipocalcemia documentada com risco de lesão tecidual e arritmias.',
      },
      {
        id: 'B',
        texto:
          'O bicarbonato de sódio a 8,4% deve ser administrado imediatamente em todos os recém-nascidos que não choram nos primeiros 10 segundos de vida.',
      },
      {
        id: 'C',
        texto:
          'O naloxone deve ser infundido por via endotraqueal em todo parto para neutralizar os efeitos da anestesia peridural materna.',
      },
      {
        id: 'D',
        texto:
          'O gluconato de cálcio a 10% deve ser misturado com a adrenalina na mesma seringa para acelerar os batimentos cardíacos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A eliminação de drogas ineficazes e tóxicas foi um dos maiores triunfos da reanimação neonatal baseada em evidências:\n1) POR QUE O BICARBONATO DE SÓDIO É CONTRAINDICADO?\n- Na presença de hipoventilação e acidose mista (metabólica + respiratória), o bicarbonato reage com íons hidrogênio gerando água e CO2 (HCO3- + H+ -> H2O + CO2);\n- O CO2 é um gás altamente lipossolúvel que atravessa a barreira hematoencefálica com extrema facilidade, enquanto o bicarbonato tem passagem lenta. Como resultado, o CO2 entra nos neurônios e gera ACIDOSE INTRACELULAR PARADÓXICA no cérebro e no miocárdio, piorando a função cardíaca;\n- Além disso, a solução de bicarbonato a 8,4% é extremamente hiperosmolar (~2.000 mOsm/L), gerando sobrecarga osmótica aguda com flutuação de fluxo cerebral e hemorragia intraventricular grave;\n2) POR QUE O NALOXONE NÃO DEVE SER UTILIZADO NA SALA DE PARTO?\n- O naloxone (antagonista opioide) pode precipitar síndrome de abstinência aguda com convulsões incontroláveis em recém-nascidos de mães usuárias crônicas de opioides ou em tratamento substitutivo com metadona;\n- A depressão respiratória por opioide materno periparto deve ser manejada com ventilação eficaz (VPP/CPAP) até a metabolização espontânea da droga;\n3) CÁLCIO:\n- Não apresenta benefício na PCR asfíxica e predispõe a arritmias graves e necrose tecidual se extravasado.',
    comentariosAlternativas: {
      A: 'Correta. Bicarbonato, naloxone e cálcio são proscritos de rotina; o bicarbonato agrava a acidose intracelular e o naloxone causa convulsões/abstinência.',
      B: 'Incorreta. Bicarbonato de rotina em sala de parto é erro crasso de conduta.',
      C: 'Incorreta. Naloxone não é indicado para reversão de anestesia peridural e via endotraqueal não é recomendada.',
      D: 'Incorreta. Misturar cálcio e adrenalina causa incompatibilidade física e toxicidade.',
    },
  },
  {
    id: 'ped-neo-044',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Termorregulação Extrema no Prematuro < 34 Semanas (Saco Plástico e Touca Dupla)',
    isRevisao: false,
    enunciado:
      'Uma gestante entra em trabalho de parto prematuro inevitável com 29 semanas de gestação. A equipe neonatal é acionada e prepara a sala de parto para a recepção do prematuro. De acordo com as Diretrizes da Sociedade Brasileira de Pediatria para recém-nascidos com idade gestacional MENOR QUE 34 SEMANAS, qual é o protocolo mandatório de TERMORREGULAÇÃO a ser adotado imediatamente após o nascimento?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Manter a sala de parto entre 23 e 26 °C; recepcionar o prematuro sob calor radiante e, SEM SECAR O CORPO, introduzi-lo imediatamente até o pescoço em SACO PLÁSTICO de polietileno transparente de parede dupla, colocando TOUCA DUPLA (de algodão por cima da touca plástica) na cabeça; a secagem com campos é realizada exclusivamente no couro cabeludo.',
      },
      {
        id: 'B',
        texto:
          'Secar vigorosamente o corpo com 5 toalhas frias e aplicar talco nas dobras inguinais.',
      },
      {
        id: 'C',
        texto:
          'O saco plástico é contraindicado em prematuros pelo risco de sufocamento imediato cutâneo.',
      },
      {
        id: 'D',
        texto:
          'Mergulhar o prematuro em bacia de água a 45 °C e administrar soro gelado por sonda gástrica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A termorregulação no prematuro com idade gestacional < 34 semanas (e com ênfase máxima nos < 32/28 semanas) é uma intervenção neuroprotetora decisiva:\n1) PECULIARIDADES FISIOLÓGICAS DO PREMATURO:\n- Estrato córneo epidérmico extremamente fino e imaturo (pele gelatinosa com barreira de queratina ineficaz), permitindo perda evaporativa maciça e invisível de água e calor transepidérmico;\n- Escassez quase total de tecido adiposo subcutâneo e depósitos insignificantes de gordura marrom termogênica;\n- Alta relação entre área de superfície corporal e peso;\n2) PROTOCOLO DA SBP PARA RN < 34 SEMANAS:\n- SALA DE PARTO AQUECIDA: temperatura ambiente aferida entre 23 °C e 26 °C;\n- BERÇO COM CALOR RADIANTE: previamente ligado em potência máxima/modo servocontrolado;\n- SACO PLÁSTICO DE POLIETILENO TRANSPARENTE: O bebê é colocado dentro do saco plástico IMEDIATAMENTE AO NASCER, SEM SECAR O CORPO! O saco plástico cria uma câmara de vapor saturada (100% de umidade relativa) ao redor da pele, bloqueando a evaporação do líquido amniótico e a perda de calor por convecção e condução;\n- TOUCA DUPLA: A cabeça responde por cerca de 20% da superfície corporal do prematuro. Seca-se apenas a cabeça com campo aquecido e coloca-se uma touca plástica recoberta por touca de lã/algodão (touca dupla);\n- COLCHÃO TÉRMICO QUÍMICO: recomendado adicionalmente para prematuros < 28 semanas.',
    comentariosAlternativas: {
      A: 'Correta. RN < 34 semanas: sala a 23-26 °C; sem secar o corpo, colocar em saco plástico de polietileno até o pescoço e aplicar touca dupla na cabeça.',
      B: 'Incorreta. Secar o prematuro extremo lesa a pele fina e acelera a perda de calor.',
      C: 'Incorreta. O saco de polietileno transparente é tecnologia padrão-ouro mundial para prevenir hipotermia em prematuros.',
      D: 'Incorreta. Condutas lesivas causadoras de queimaduras e choque térmico.',
    },
  },
  {
    id: 'ped-neo-045',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Fração Inspirada Inicial de Oxigênio (FiO2 30%) no Prematuro < 34 Semanas',
    isRevisao: false,
    enunciado:
      'Recém-nascido prematuro de 30 semanas de gestação nasce hipotônico e em apneia, necessitando de Ventilação com Pressão Positiva (VPP) após os passos iniciais sob calor radiante no saco plástico. A equipe dispõe de ventilador mecânico em T conectado a misturador de ar comprimido e oxigênio (blender). Qual deve ser a Fração Inspirada de Oxigênio (FiO2) INICIAL indicada pela Sociedade Brasileira de Pediatria para a ventilação desse prematuro com idade gestacional menor que 34 semanas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Iniciar a VPP com Fração Inspirada de Oxigênio (FiO2) a 30% em blender (misturador de ar e oxigênio), titulando a concentração a cada 1 a 2 minutos com base na oximetria de pulso pré-ductal (MSD) para manter os valores dentro da faixa alvo da tabela minuto a minuto.',
      },
      {
        id: 'B',
        texto:
          'Iniciar com oxigênio a 100% puro para evitar displasia broncopulmonar.',
      },
      {
        id: 'C',
        texto:
          'Iniciar rigorosamente com ar ambiente a 21% exatamente igual ao recém-nascido a termo, sendo proibido o uso de oxigênio suplementar em prematuros.',
      },
      {
        id: 'D',
        texto:
          'Iniciar com oxigênio a 80% e nunca instalar oxímetro de pulso.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A fração inspirada inicial de oxigênio em prematuros < 34 semanas é uma das regras mais cobradas em provas de Pediatria:\n1) DIFERENÇA CRÍTICA ENTRE TERMO E PREMATURO < 34 SEMANAS:\n- RECÉM-NASCIDOS ≥ 34 SEMANAS: INICIAR A VPP COM FiO2 A 21% (AR AMBIENTE);\n- RECÉM-NASCIDOS < 34 SEMANAS: INICIAR A VPP COM FiO2 A 30% (EM BLENDER);\n2) POR QUE FiO2 A 30% NO PREMATURO?\n- Estudos clínicos demonstraram que iniciar com ar ambiente puro (21%) em prematuros com idade gestacional < 34 semanas frequentemente resulta em hipoxemia grave prolongada e falha no alcance da meta de saturação no tempo correto, exigindo aumentos abruptos tardios de O2;\n- Por outro lado, iniciar com concentrações elevadas (≥ 60% a 100%) induz estresse oxidativo maciço, lesão pulmonar alveolar com Displasia Broncopulmonar (DBP) e proliferação vascular desordenada na retina com Retinopatia da Prematuridade (ROP) grave e cegueira;\n- A concentração de 30% representa o "ponto de equilíbrio ótimo", assegurando oxigenação precoce segura;\n- A partir dos 30% iniciais, a FiO2 é ajustada (subindo ou descendo de 5% a 10% a cada minuto) guiada pelos valores da oximetria no pulso direito.',
    comentariosAlternativas: {
      A: 'Correta. Prematuros < 34 semanas iniciam VPP com FiO2 a 30% em blender, com titulação contínua pela oximetria pré-ductal.',
      B: 'Incorreta. O2 a 100% em prematuros é altamente tóxico e causa retinopatia da prematuridade e displasia broncopulmonar.',
      C: 'Incorreta. FiO2 21% é para RN ≥ 34 semanas; em prematuros < 34 semanas a recomendação da SBP é iniciar com 30%.',
      D: 'Incorreta. A oximetria de pulso é mandatória sempre que se utiliza oxigênio suplementar ou VPP.',
    },
  },
  {
    id: 'ped-neo-046',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'CPAP Precoce em Sala de Parto no Prematuro com Respiração Espontânea',
    isRevisao: false,
    enunciado:
      'Prematuro de 31 semanas nasce de parto vaginal cefálico. Ao ser recebido na mesa de reanimação dentro do saco plástico sob calor radiante, o neonatologista constata que o bebê apresenta respiração espontânea presente, frequência cardíaca de 135 bpm, mas evolui com sinais moderados de desconforto respiratório precoce (tiragem intercostal, retração subdiafragmática e batimento de aletas nasais) e saturação de O2 pré-ductal de 68% aos 3 minutos de vida. De acordo com as diretrizes da SBP, qual é a conduta prioritária recomendada para a assistência respiratória em sala de parto?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Iniciar imediatamente Pressão Positiva Contínua nas Vias Aéreas (CPAP) com PEEP de 5 a 6 cmH2O através de máscara facial ou pronga nasal com ventilador em T e FiO2 inicial de 30%; o CPAP precoce em sala de parto mantém os alvéolos abertos na expiração, preserva o surfactante endógeno, estabiliza a caixa torácica complacente e reduz significativamente a necessidade de intubação traqueal e ventilação mecânica invasiva.',
      },
      {
        id: 'B',
        texto:
          'Proceder imediatamente à intubação orotraqueal e iniciar ventilação mecânica controlada invasiva.',
      },
      {
        id: 'C',
        texto:
          'Oferecer oxigênio a 100% em fluxo livre diretamente na face e prescrever sedação com midazolam.',
      },
      {
        id: 'D',
        texto:
          'Não intervir e aguardar a parada respiratória espontânea para depois iniciar manobras.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O uso do CPAP PRECOCE EM SALA DE PARTO é uma das maiores estratégias neuro e pneumoprotetoras da neonatologia moderna:\n1) CRITÉRIOS DE INDICAÇÃO DO CPAP EM SALA DE PARTO:\n- Recém-nascido prematuro (< 34 semanas);\n- Mantém RESPIRAÇÃO ESPONTÂNEA presente;\n- FREQUÊNCIA CARDÍACA > 100 bpm;\n- Apresenta SINAIS DE DESCONFORTO RESPIRATÓRIO (tiragens, gemência, aleteio nasal) ou dificuldade para manter a saturação pré-ductal na faixa alvo;\n2) BENEFÍCIOS DO CPAP COM PEEP DE 5 A 6 cmH2O:\n- Evita o colapso dos alvéolos ao final da expiração (atelectrauma);\n- Estabelece a Capacidade Residual Funcional (CRF) pulmonar fisiológica precoce;\n- Facilita a depuração do líquido pulmonar;\n- Poupa o surfactante pulmonar endógeno escasso da inativação mecânica;\n- Ensaios clínicos randomizados demonstraram que o CPAP precoce em sala de parto reduz pela metade a necessidade de intubação orotraqueal invasiva, diminuindo a incidência de Displasia Broncopulmonar (DBP) e mortalidade;\n- Se o prematuro em CPAP falhar clinicamente (apneia recorrente, acidose grave ou necessidade de FiO2 elevada > 40-50%), procede-se à intubação e administração de surfactante exógeno.',
    comentariosAlternativas: {
      A: 'Correta. CPAP precoce com PEEP de 5-6 cmH2O (máscara/pronga) é a intervenção de escolha no prematuro com respiração espontânea e desconforto.',
      B: 'Incorreta. A intubação imediata é desnecessária e agressiva em paciente que respira espontaneamente com FC > 100 bpm.',
      C: 'Incorreta. Sedação deprime o centro respiratório e O2 livre não gera PEEP expansora.',
      D: 'Incorreta. Atrasar o suporte ventilatório gera colapso alveolar com exaustão e PCR.',
    },
  },
  {
    id: 'ped-neo-047',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Reanimador em T no Prematuro Extremo - PEEP de 5 cmH2O e Limitação de PIP',
    isRevisao: false,
    enunciado:
      'Durante a reanimação de um prematuro de 27 semanas de gestação em sala de parto, a equipe utiliza o Reanimador com Peça em T (Neopuff). Em relação à calibração dos parâmetros mecânicos pressóricos recomendados pela SBP para a ventilação do prematuro extremo, assinale a opção com os valores corretos de PEEP e Pressão Inspiratória de Pico (PIP) inicial:',
    alternativas: [
      {
        id: 'A',
        texto:
          'PEEP calibrada em 5 cmH2O e Pressão Inspiratória de Pico (PIP) máxima inicial ajustada entre 20 e 25 cmH2O (com fluxo de gás de 5 a 10 L/min no fluxômetro), com válvula de escape de segurança travada em 30 a 40 cmH2O para proteção contra barotrauma pulmonar.',
      },
      {
        id: 'B',
        texto:
          'PEEP calibrada em zero (ZEEP) e PIP ajustada em 60 cmH2O sem limite de segurança.',
      },
      {
        id: 'C',
        texto:
          'PEEP de 25 cmH2O associada a PIP de 5 cmH2O invertendo as pressões intrapulmonares.',
      },
      {
        id: 'D',
        texto:
          'O ventilador em T não permite ajuste de pressão e funciona apenas por sucção contínua negativa.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A calibração do VENTILADOR EM T para prematuros extremos é um procedimento padronizado de segurança:\n1) PARÂMETROS PRESSÓRICOS ALVO:\n- PEEP (Pressão Positiva Expiratória Final): calibrada em 5 cmH2O (girando a tampa da peça em T com o orifício aberto);\n  * A PEEP de 5 cmH2O é mandatória para impedir que os alvéolos imaturos deficientes em surfactante colapsem a zero ao final da expiração;\n- PIP (Pressão Inspiratória de Pico): ajustada entre 20 e 25 cmH2O (girando a válvula de controle de pressão com o orifício ocluído);\n  * 20 a 25 cmH2O é suficiente para movimentar suavemente a parede torácica sem estirar excessivamente as paredes alveolares (volutrauma);\n- VÁLVULA DE SEGURANÇA (RELIEF VALVE): calibrada habitualmente em 30 a 40 cmH2O para que, mesmo diante de tosse ou esforço súbito, a pressão jamais ultrapasse o limite de segurança pulmonar;\n- FLUXO DE GÁS: regulado no fluxômetro entre 5 e 10 L/min com gás umidificado e aquecido quando disponível.',
    comentariosAlternativas: {
      A: 'Correta. PEEP de 5 cmH2O e PIP inicial de 20 a 25 cmH2O com fluxo de 5-10 L/min e válvula de escape de segurança.',
      B: 'Incorreta. ZEEP (sem PEEP) causa colapso alveolar cíclico e PIP de 60 cmH2O causa pneumotórax imediato.',
      C: 'Incorreta. Inversão pressórica sem fundamento fisiológico.',
      D: 'Incorreta. O ventilador em T é um aparelho de pressão positiva pulmonar.',
    },
  },
  {
    id: 'ped-neo-048',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Prevenção da Hemorragia Peri-Intraventricular (HPIV) em Prematuros Extremos',
    isRevisao: false,
    enunciado:
      'A Hemorragia Peri-Intraventricular (HPIV) é uma das complicações neurológicas mais devastadoras da prematuridade extrema (< 32 semanas), com início frequente nas primeiras horas de vida na sala de parto ou UTI neonatal. Quais cuidados específicos de manuseio e ressuscitação pela equipe neonatal em sala de parto são comprovadamente eficazes para proteger a matriz germinativa subependimária e prevenir a HPIV?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Clampeamento oportuno do cordão umbilical (30 a 60 segundos), prevenção estrita da hipotermia com saco plástico/touca, manutenção da cabeça em posição neutra na linha média sem rotação ou hiperextensão, evitar a posição de Trendelenburg, evitar infusões rápidas em bólus de fluidos hiperosmolares e controle rigoroso da ventilação para prevenir flutuações bruscas da PaCO2 e da pressão arterial.',
      },
      {
        id: 'B',
        texto:
          'Manter o prematuro de cabeça para baixo em posição de Trendelenburg acentuada por 48 horas.',
      },
      {
        id: 'C',
        texto:
          'Administrar bólus intravenosos rápidos de 50 mL de bicarbonato de sódio a cada 10 minutos para alcalinizar o cérebro.',
      },
      {
        id: 'D',
        texto:
          'Rodar a cabeça do prematuro bruscamente 180 graus de lado para lado para descomprimir as veias jugulares.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A prevenção da HEMORRAGIA PERI-INTRAVENTRICULAR (HPIV) é um dos eixos mais nobres do cuidado neuroprotetor neonatal:\n1) FISIOPATOLOGIA DA MATRIZ GERMINATIVA:\n- A matriz germinativa subependimária do prematuro é uma estrutura altamente vascularizada, composta por capilares delgados, sem sustentação de colágeno perivascular e extremamente frágeis;\n- O prematuro possui perda transitória da autorregulação cerebrovascular: se a pressão arterial sistêmica sobe rapidamente, o fluxo sanguíneo cerebral aumenta de forma passiva descontrolada, rompendo os capilares da matriz germinativa;\n2) PACOTE DE MEDIDAS NEUROPROTETORAS EM SALA DE PARTO:\n- Clampeamento oportuno do cordão (estabilidade hemodinâmica);\n- Manutenção da cabeça em posição NEUTRA NA LINHA MÉDIA (sem rotação lateral excessiva ou flexão de pescoço, pois a torção oclui as veias jugulares internas, elevando a pressão venosa intracraniana e facilitando o sangramento);\n- EVITAR POSIÇÃO DE TRENDELENBURG (elevar as pernas acima da cabeça aumenta a pressão venosa cerebral);\n- EVITAR INFUSÃO EM BÓLUS RÁPIDO DE CRISTALÓIDES OU DROGAS HIPEROSMOLARES;\n- CONTROLE DA PaCO2: evitar hipocapnia acentuada (vasoconstrição cerebral isquêmica) e hipercapnia grave (vasodilatação cerebral súbita).',
    comentariosAlternativas: {
      A: 'Correta. Pacote neuroprotetor: clampeamento oportuno, cabeça em posição neutra na linha média, evitar Trendelenburg e evitar bólus rápidos e flutuação de PaCO2.',
      B: 'Incorreta. A posição de Trendelenburg congestiona o leito venoso encefálico e deflagra hemorragia intraventricular.',
      C: 'Incorreta. Bólus de bicarbonato hiperosmolar é um dos maiores indutores iatrogênicos de HPIV.',
      D: 'Incorreta. Rotação cervical oclui o retorno venoso jugular, precipitando hipertensão venosa intracraniana.',
    },
  },
  {
    id: 'ped-neo-049',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Critérios para Suspensão dos Esforços de Reanimação Neonatal em Sala de Parto',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo nasce em parada cardiorrespiratória em assistolia decorrente de asfixia intrauterina prolongada catastrófica. A equipe de reanimação executa com rigor técnico absoluto todos os passos da reanimação avançada: intubação traqueal, massagem cardíaca 3:1 ininterrupta, ventilação com O2 a 100%, canulação venosa umbilical com múltiplas doses de adrenalina em intervalos adequados e expansão volêmica. A despeito de todas as intervenções corretas e continuadas, o paciente permanece em assistolia sustentada (FC zero e sem esforço respiratório). De acordo com as Diretrizes de Reanimação Neonatal da SBP e ILCOR, após quanto tempo de esforço ressuscitatório continuado com ausência persistente de batimentos cardíacos a suspensão das manobras é formalmente recomendada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Após 20 MINUTOS de esforços de reanimação adequados e contínuos com ausência persistente de batimentos cardíacos (assistolia sustentada e confirmada), momento em que a probabilidade de sobrevida é virtualmente nula ou invariavelmente associada a sequelas neurológicas devastadoras intratáveis.',
      },
      {
        id: 'B',
        texto:
          'Após exatamente 60 segundos do nascimento, se o bebê não chorar ao corte do cordão.',
      },
      {
        id: 'C',
        texto:
          'A reanimação deve ser mantida obrigatoriamente por 72 horas ininterruptas na sala de parto.',
      },
      {
        id: 'D',
        texto:
          'Após 3 minutos de ventilação sob máscara sem massagem cardíaca.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O momento de interrupção dos esforços de reanimação em sala de parto é uma decisão ética, técnica e humana de imensa relevância:\n1) CRITÉRIO ATUAL DA SBP E ILCOR (20 MINUTOS):\n- Se após 20 MINUTOS DE REANIMAÇÃO NEONATAL COMPLETA E EFICAZ (incluindo VPP traqueal com O2 a 100%, massagem cardíaca externa sincronizada, acesso vascular e drogas) a Frequência Cardíaca permanecer INDETECTÁVEL (assistolia = 0 bpm), a equipe deve considerar a SUSPENSÃO DOS ESFORÇOS DE REANIMAÇÃO;\n2) BASE CIENTÍFICA DO LIMITE DE 20 MINUTOS:\n- Anteriormente, o limite histórico era de 10 minutos (Apgar zero aos 10 min);\n- Estudos modernos de seguimento neurológico demonstraram que os raros recém-nascidos que recuperam batimentos após 20 minutos de assistolia sustentada intraparto evoluem para óbito precoce na UTI ou sobrevivem com Paralisia Cerebral tetraparética espástica gravíssima, estado vegetativo persistente e sequelas cognitivas extremas;\n- A decisão deve envolver a equipe médica e os pais, assegurando acolhimento e suporte ao luto.',
    comentariosAlternativas: {
      A: 'Correta. A ausência sustentada de batimentos cardíacos após 20 minutos de reanimação completa e adequada é o critério oficial da SBP para interrupção dos esforços.',
      B: 'Incorreta. Suspender aos 60 segundos é negligência médica gravíssima, pois a reanimação está apenas começando.',
      C: 'Incorreta. Manter reanimação por dias em cadáver é eticamente inaceitável (distanásia).',
      D: 'Incorreta. Tempo totalmente insuficiente e sem manobras avançadas completas.',
    },
  },
  {
    id: 'ped-neo-050',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síntese do Algoritmo Avançado de Reanimação Neonatal da SBP',
    isRevisao: false,
    enunciado:
      'Para a prova de Título de Especialista em Pediatria (TEP) e concursos de Residência Médica, a sequência de intervenções da Reanimação Neonatal Avançada deve estar consolidada na memória de longo prazo do médico assistente. Assinale a alternativa que descreve a sequência lógica cronológica CORRETA de escalonamento terapêutico em um recém-nascido a termo que nasce em parada cardiorrespiratória grave:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Passos Iniciais (aquecer, posicionar, aspirar se obstruído, secar em 30s) -> VPP com máscara facial em ar ambiente (FiO2 21%) -> Falha de resposta/expansão: Passos Corretivos (MR. SOPA) com Intubação Orotraqueal (IOT) -> Se FC < 60 bpm após 30s de VPP traqueal efetiva: Massagem Cardíaca Externa 3:1 associada a FiO2 100% por 60s -> Se FC permanecer < 60 bpm: Adrenalina Intravenosa por cateter umbilical (0,1 a 0,3 mL/kg a 1:10.000) -> Se choque hipovolêmico/perda sanguínea associada: Expansor de Volume (SF 0,9% 10 mL/kg em 5-10 min).',
      },
      {
        id: 'B',
        texto:
          'Massagem cardíaca imediata no períneo materno -> Adrenalina intracardíaca pura -> Intubação com tubo com balonete -> Saco plástico em RN a termo -> Oferecer água com açúcar.',
      },
      {
        id: 'C',
        texto:
          'Passos iniciais -> Expansor de volume em bólus de 100 mL/kg -> Choque elétrico de 360 Joules -> VPP em ar ambiente por 4 horas.',
      },
      {
        id: 'D',
        texto:
          'Intubação imediata de todos os partos -> Manter sem ventilação por 15 minutos -> Lavagem peritoneal com soro gelado.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Esta questão consolida em uma única linha do tempo o ALGORITMO COMPLETO DE REANIMAÇÃO NEONATAL DA SBP/ILCOR:\n1) NASCIMENTO: Avaliar 3 perguntas (Termo? Respirando? Tônus?);\n2) 0 a 30 SEGUNDOS: Passos iniciais (Calor, Posição olfativa, Aspiração se secreção, Secagem e descarte de campos);\n3) AOS 30 SEGUNDOS: Ausculta da FC por 6 segundos e padrão respiratório;\n4) 30 a 60 SEGUNDOS ("MINUTO DE OURO"): Se apneia/gasping ou FC < 100 bpm -> Iniciar VPP (FiO2 21% em ≥ 34 sem; FiO2 30% em < 34 sem) com oximetria no MSD e monitor cardíaco;\n5) AOS 60 SEGUNDOS: Se tórax não expande -> Passos Corretivos da Ventilação (MR. SOPA) e indicação de IOT;\n6) SE FC < 60 bpm APÓS 30s DE VPP TRAQUEAL EFETIVA: Iniciar MASSAGEM CARDÍACA EXTERNA SINCRONIZADA 3:1 (técnica dos dois polegares) + ELEVAR FiO2 PARA 100% por 60 segundos ininterruptos;\n7) SE FC < 60 bpm APÓS 60s DE MASSAGEM 3:1: ADRENALINA INTRAVENOSA (veia umbilical, diluição 1:10.000 na dose de 0,1 a 0,3 mL/kg + flush de 1-3 mL de SF);\n8) SE HISTÓRICO DE PERDA SANGUÍNEA AGUDA OU SINAIS DE CHOQUE: EXPANSORES DE VOLUME (SF 0,9% 10 mL/kg em 5 a 10 minutos).',
    comentariosAlternativas: {
      A: 'Correta. Sequência cronológica e fisiopatológica impecável de acordo com as diretrizes oficiais da SBP/ILCOR.',
      B: 'Incorreta. Sequência desordenada e iatrogênica com adrenalina intracardíaca proscrita.',
      C: 'Incorreta. Bólus maciço e choque elétrico inadequados.',
      D: 'Incorreta. Práticas danosas e absurdas.',
    },
  },
  {
    id: 'ped-neo-051',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Metabolismo da Bilirrubina e Peculiaridades Fisiológicas Neonatais',
    isRevisao: false,
    enunciado:
      'Durante a discussão de caso clínico em enfermaria de puerpério, o preceptor de neonatologia revisa a via metabólica da bilirrubina desde a sua produção até a excreção final. No recém-nascido, essa via apresenta etapas de fragilidade enzimática e anatômica transitórias. Qual alternativa descreve com exatidão a sequência bioquímica e as particularidades do metabolismo da bilirrubina no período neonatal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O catabolismo do grupo heme da hemoglobina pela enzima heme-oxigenase gera biliverdina, que é reduzida a Bilirrubina Indireta (lipossolúvel e não conjugada), transportada na circulação fortemente ligada à albumina; no hepatócito, é captada pelas ligandinas Y e Z e conjugada pela Uridina Difosfato Glicuroniltransferase (UGT1A1) em Bilirrubina Direta (hidrossolúvel), sendo excretada na bile; na luz intestinal estéril do neonato, a alta atividade da enzima beta-glicuronidase hidrolisa a bilirrubina conjugada de volta a bilirrubina indireta, reabsorvendo-a para a circulação êntero-hepática.',
      },
      {
        id: 'B',
        texto:
          'A bilirrubina é produzida exclusivamente no baço a partir da degradação de linfócitos T e é eliminada diretamente pela transpiração na pele.',
      },
      {
        id: 'C',
        texto:
          'A bilirrubina direta é lipossolúvel e tóxica para o cérebro, atravessando livremente a barreira hematoencefálica para se fixar nos núcleos da base.',
      },
      {
        id: 'D',
        texto:
          'A enzima UGT1A1 hepática apresenta atividade 500% superior no recém-nascido em relação ao adulto, impedindo qualquer acúmulo de bilirrubina indireta.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O metabolismo da bilirrubina é a base fisiopatológica indispensável para entender todas as formas de icterícia neonatal:\n1) PRODUÇÃO (RETÍCULO-ENDOTELIAL):\n- Destruição de hemácias senescentes: o grupo Heme sofre ação da Heme-Oxigenase -> Biliverdina -> reduzida pela Biliverdina Redutase em BILIRRUBINA NÃO CONJUGADA (INDIRETA);\n- A bilirrubina indireta é altamente lipofílica e insolúvel em água, necessitando ligar-se à ALBUMINA sérica para ser carreada com segurança pela corrente sanguínea;\n2) CAPTAÇÃO E CONJUGAÇÃO HEPÁTICA:\n- No polo sinusoidal do hepatócito, a bilirrubina desliga-se da albumina e é captada por proteínas citoplasmáticas (LIGANDINAS Y e Z / GST);\n- No retículo endoplasmático liso, a enzima URIDINA DIFOSFATO GLICURONILTRANSFERASE (UGT1A1) transfere duas moléculas de ácido glicurônico para a bilirrubina, convertendo-a em DIGLICURONÍDEO DE BILIRRUBINA (BILIRRUBINA CONJUGADA OU DIRETA), que é hidrossolúvel e atóxica;\n- No neonato, a atividade da UGT1A1 ao nascimento é de apenas 1% do nível adulto, atingindo a maturidade plena apenas entre a 6ª e 14ª semana de vida;\n3) EXCREÇÃO BILIAR E CIRCULAÇÃO ÊNTERO-HEPÁTICA:\n- A bilirrubina direta é ativamente excretada nos canalículos biliares e chega ao duodeno;\n- Como o intestino neonatal é inicialmente estéril (sem bactérias para converter bilirrubina direta em urobilinogênio/estercobilina), a enzima BETA-GLICURONIDASE presente na mucosa intestinal e no leite materno desconjuga a bilirrubina de volta à forma indireta lipofílica, que é prontamente reabsorvida pela circulação portal (CIRCULAÇÃO ÊNTERO-HEPÁTICA aumentada).',
    comentariosAlternativas: {
      A: 'Correta. Descrição bioquímica perfeita: heme-oxigenase -> UGT1A1 hepática imatura -> desconjugação intestinal por beta-glicuronidase com recirculação êntero-hepática.',
      B: 'Incorreta. A bilirrubina provém do grupo heme das hemácias (75%) e eritropoiese ineficaz/mioglobina (25%), sendo excretada por via biliar e renal.',
      C: 'Incorreta. A bilirrubina Indireta (e não a direta) é lipossolúvel e atravessa a barreira hematoencefálica quando livre da albumina, causando kernicterus.',
      D: 'Incorreta. A atividade da UGT1A1 é fisiologicamente deficiente no neonato (~1% do adulto), propiciando a hiperbilirrubinemia indireta transitória.',
    },
  },
  {
    id: 'ped-neo-052',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Zonas Dérmicas de Kramer (Zonas I a V) e suas Limitações Clínicas',
    isRevisao: false,
    enunciado:
      'Um recém-nascido de 3 dias de vida, a termo, em aleitamento materno, é avaliado no alojamento conjunto. Ao exame físico sob iluminação natural com digitopressão da pele, o pediatra identifica icterícia dérmica comprometendo a cabeça, pescoço, tronco superior, abdome e coxas até a articulação dos joelhos, com pernas, pés e mãos completamente poupados. O médico classifica a icterícia pela Escala de Kramer. Qual é a zona de Kramer deste paciente, qual a correlação média esperada e qual é a recomendação formal da SBP quanto à precisão deste método?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Zona 3 de Kramer (icterícia até joelhos/cotovelos, com nível sérico estimado grosseiramente em torno de 12 mg/dL); no entanto, a estimativa visual clínica apresenta grande margem de erro subjetiva influenciada pela cor da pele e luminosidade, sendo FORMALMENTE CONTRAINDICADA para dispensar ou basear indicação de fototerapia, devendo-se dosar a Bilirrubina Sérica Total ou Transcutânea.',
      },
      {
        id: 'B',
        texto:
          'Zona 1 de Kramer (icterícia restrita à cabeça), indicando bilirrubina sérica estritamente inferior a 2 mg/dL.',
      },
      {
        id: 'C',
        texto:
          'Zona 5 de Kramer (acometimento de palmas e plantas), exigindo exanguinotransfusão imediata sem qualquer dosagem laboratorial.',
      },
      {
        id: 'D',
        texto:
          'A escala de Kramer é o padrão-ouro laboratorial definitivo da Academia Americana de Pediatria, dispensando dosagem sanguínea em 100% dos recém-nascidos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A avaliação clínica visual da icterícia neonatal baseia-se na REGRA DE PROGRESSÃO CÉFALO-CAUDAL DE KRAMER:\n1) ZONAS CLÁSSICAS DE KRAMER:\n- ZONA 1: Cabeça e pescoço (nível aproximado de BT: 4 a 8 mg/dL);\n- ZONA 2: Tronco até a cicatriz umbilical (nível aproximado de BT: 5 a 12 mg/dL);\n- ZONA 3: Hipogástrio e coxas até os joelhos (nível aproximado de BT: 8 a 16 mg/dL - média clássica de 12 mg/dL);\n- ZONA 4: Pernas e braços até punhos e tornozelos (nível aproximado de BT: 11 a 18 mg/dL);\n- ZONA 5: Mãos e pés, incluindo palmas e plantas (nível de BT habitualmente > 15 a 20 mg/dL);\n2) LIMITAÇÕES CRÍTICAS DA ESTIMATIVA VISUAL (DIRETRIZ DA SBP / AAP):\n- A inspeção visual tem razoável sensibilidade para detectar a PRESENÇA de icterícia, mas é extremamente POBRE e FALHA para quantificar a gravidade dos níveis séricos;\n- Fatores de confusão: pigmentação cutânea (pele parda/negra subestima a icterícia; pletora/policitemia mascara a coloração amarelada), iluminação artificial inadequada e experiência do observador;\n- REGRA DE CONDUTA: Nunca basear o início, a troca ou a suspensão da fototerapia apenas na avaliação visual da escala de Kramer. Sempre que a icterícia ultrapassar a zona 2 (ou se surgir nas primeiras 24h), é OBRIGATÓRIA a mensuração objetiva através da Bilirrubina Transcutânea (Btc) ou da Bilirrubina Sérica Total (BST).',
    comentariosAlternativas: {
      A: 'Correta. Zona 3 de Kramer (até joelhos); a inspeção visual tem baixa acurácia e nunca deve substituir a dosagem de bilirrubina (BST ou Btc).',
      B: 'Incorreta. Zona 1 atinge apenas cabeça e pescoço.',
      C: 'Incorreta. Zona 5 exige acometimento de palmas e plantas, o que não ocorre neste caso.',
      D: 'Incorreta. A escala de Kramer é método de triagem visual falho, jamais dispensando a dosagem sérica para decisões terapêuticas.',
    },
  },
  {
    id: 'ped-neo-053',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Icterícia Fisiológica do Recém-Nascido a Termo - Critérios e Cronologia',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo, com 39 semanas e peso de 3.300 g, sem intercorrências no parto, mãe O positivo e RN A positivo com Coombs direto negativo, inicia icterícia leve (Zona 1 a 2 de Kramer) com 48 horas de vida no alojamento conjunto. A dosagem sérica de bilirrubina total no 3º dia de vida atinge 8,5 mg/dL com fração direta de 0,4 mg/dL. A criança está ativa, afebril, mamando avidamente ao seio materno, com urina clara e fezes amarelo-ouro de transição. No 7º dia de vida, em consulta de puericultura, a icterícia já regrediu completamente. Qual é o diagnóstico e qual a cronologia típica esperada para essa entidade clínica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Icterícia Fisiológica do Recém-Nascido a Termo; caracteriza-se por início típico após as primeiras 24 a 36 horas de vida, pico sérico entre o 3º e o 5º dia de vida (com níveis habitualmente < 12 a 13 mg/dL) e resolução espontânea completa entre o 7º e o 10º dia de vida.',
      },
      {
        id: 'B',
        texto:
          'Incompatibilidade ABO grave com hemólise maciça e indicação de imunoglobulina venosa.',
      },
      {
        id: 'C',
        texto:
          'Atresia de vias biliares congênita com necessidade de cirurgia de Kasai de emergência.',
      },
      {
        id: 'D',
        texto:
          'Icterícia por infecção congênita do complexo TORCH exigindo ganciclovir por 6 meses.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A ICTERÍCIA FISIOLÓGICA acomete cerca de 60% dos recém-nascidos a termo e até 80% dos pré-termos saudáveis:\n1) MARCOS CRONOLÓGICOS NO RN A TERMO:\n- INÍCIO: Ocorre tipicamente após 24 a 36 horas de vida (JAMAIS nas primeiras 24 horas);\n- PICO SÉRICO: Ocorre entre o 3º e o 5º dia de vida (média de 72 a 96 horas);\n- VALOR MÁXIMO DE BT: Em média não ultrapassa 12 a 13 mg/dL em RNs a termo sob fórmula (podendo chegar a 14-15 mg/dL sob aleitamento materno);\n- REGRESSÃO E DESAPARECIMENTO: Declina progressivamente e desaparece entre 7 e 10 dias de vida;\n2) CARACTERÍSTICAS LABORATORIAIS:\n- Hiperbilirrubinemia estritamente INDIRETA (Bilirrubina Direta normal, < 1,0 mg/dL ou < 20% da BT);\n- Velocidade de ascensão sérica lenta (< 5 mg/dL nas 24h ou < 0,2-0,5 mg/dL/h);\n- Ausência de anemia, reticulocitose ou esferócitos no sangue periférico;\n- Recém-nascido hígido, ativo, com boa sucção e exame físico completamente normal.',
    comentariosAlternativas: {
      A: 'Correta. Início após 24-36h, pico entre 3º-5º dia (< 12-13 mg/dL) e resolução em 7-10 dias no termo é a definição clássica de icterícia fisiológica.',
      B: 'Incorreta. Coombs direto negativo, sem anemia, início após 48h e pico baixo de 8,5 mg/dL afastam doença hemolítica grave.',
      C: 'Incorreta. Atresia de vias biliares cursa com hiperbilirrubinemia direta (colestase), fezes acólicas e colúria, ausentes no caso.',
      D: 'Incorreta. TORCH causa colestase neonatal direta, hepatoesplenomegalia e lesões orgânicas.',
    },
  },
  {
    id: 'ped-neo-054',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Tríade Fisiopatológica da Icterícia Fisiológica Neonatal',
    isRevisao: false,
    enunciado:
      'A icterícia fisiológica do recém-nascido decorre de uma conjunção transitória de fatores biológicos próprios da adaptação à vida extrauterina. Quais são os TRÊS MECANISMOS FISIOPATOLÓGICOS centrais que compõem a tríade clássica geradora da icterícia fisiológica?',
    alternativas: [
      {
        id: 'A',
        texto:
          '1) Maior sobrecarga de bilirrubina (volume eritrocitário proporcionalmente maior com menor tempo de meia-vida das hemácias fetais de 70 a 90 dias vs 120 dias do adulto); 2) Deficiência transitória da conjugação hepática por imaturidade funcional da enzima UGT1A1; e 3) Aumento da circulação êntero-hepática de bilirrubina devido à ausência de microbiota bacteriana intestinal redutora e alta atividade da enzima beta-glicuronidase.',
      },
      {
        id: 'B',
        texto:
          '1) Hemorragia intraparenquimatosa esplênica contínua; 2) Ausência congênita total de vesícula biliar; e 3) Necrose tubular renal aguda bilateral.',
      },
      {
        id: 'C',
        texto:
          '1) Destruição de hemácias exclusivamente pela amamentação; 2) Paralisia motora do estômago; e 3) Mutação oncogênica maligna no fígado.',
      },
      {
        id: 'D',
        texto:
          '1) Desidratação hipernatrêmica obrigatória em 100% dos partos; 2) Hipoplasia de artéria pulmonar; e 3) Deficiência permanente de albumina sérica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A fisiopatologia da icterícia neonatal é uma das questões conceituais mais cobradas em provas de Pediatria geral e Neonatologia:\n1) MAIOR CARGA DE BILIRRUBINA / PRODUÇÃO ELEVADA:\n- O recém-nascido a termo tem hematócrito fisiologicamente elevado (55% a 65%) e massa de hemácias cerca de 2 vezes maior por quilo de peso em relação ao adulto;\n- As hemácias fetais têm MEIA-VIDA ENCURTADA (cerca de 70 a 90 dias, contra 120 dias no adulto), gerando uma produção basal de bilirrubina de 8 a 10 mg/kg/dia (mais que o dobro da taxa do adulto, que é de 3 a 4 mg/kg/dia);\n2) DEFICIÊNCIA DA CONJUGAÇÃO HEPÁTICA (CLEARANCE HEPÁTICO DIMINUÍDO):\n- Baixa concentração citoplasmática de ligandinas Y e Z no hepatócito neonatal;\n- Expressão e atividade catalítica da enzima URIDINA DIFOSFATO GLICURONILTRANSFERASE (UGT1A1) marcadamente reduzida (cerca de 1% do adulto);\n3) AUMENTO DA CIRCULAÇÃO ÊNTERO-HEPÁTICA:\n- O intestino neonatal nasce estéril. Não há bactérias da microbiota comensal para reduzir a bilirrubina conjugada em urobilinogênio e estercobilina fecal;\n- O leite e a mucosa intestinal contêm elevada atividade de BETA-GLICURONIDASE, enzima que hidrolisa o glicuronídeo de bilirrubina, reconvertendo-a em bilirrubina indireta não conjugada. Esta é prontamente reabsorvida pela mucosa intestinal de volta ao fígado, perpetuando o ciclo.',
    comentariosAlternativas: {
      A: 'Correta. Tríade fisiopatológica: maior massa/menor meia-vida de hemácias fetais + imaturidade de UGT1A1 + aumento da circulação êntero-hepática (beta-glicuronidase).',
      B: 'Incorreta. Não há hemorragia esplênica nem necrose renal na fisiologia normal.',
      C: 'Incorreta. Concepções absurdas sem qualquer respaldo biológico.',
      D: 'Incorreta. A desidratação e a hipoalbuminemia não fazem parte da icterícia fisiológica saudável.',
    },
  },
  {
    id: 'ped-neo-055',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Icterícia Fisiológica no Recém-Nascido Pré-Termo - Particularidades',
    isRevisao: false,
    enunciado:
      'Em relação à evolução temporal e aos valores máximos da icterícia fisiológica no recém-nascido PRÉ-TERMO tardio ou moderado (idade gestacional < 37 semanas) em comparação com o recém-nascido a termo, qual é a diferença clínica e laboratorial esperada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'No pré-termo, a icterícia fisiológica atinge o pico mais tardiamente (entre o 5º e o 7º dia de vida), com valores séricos habitualmente mais elevados (podendo atingir até 15 mg/dL), e a resolução clínica é mais prolongada, podendo persistir de forma fisiológica por 14 a 21 dias devido à maior imaturidade de conjugação hepática e motilidade gastrointestinal reduzida.',
      },
      {
        id: 'B',
        texto:
          'No pré-termo a icterícia fisiológica é impossível de acontecer, sendo qualquer elevação de bilirrubina sinal obrigatório de leucemia congênita.',
      },
      {
        id: 'C',
        texto:
          'O pico sérico no pré-termo ocorre na primeira hora de vida e desaparece impreterivelmente às 12 horas pós-parto.',
      },
      {
        id: 'D',
        texto:
          'No prematuro a bilirrubina atinge no máximo 2 mg/dL devido ao excesso de enzima glicuroniltransferase fetal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As particularidades da icterícia fisiológica no prematuro decorrem da imaturidade orgânica acentuada:\n1) COMPARAÇÃO DA CRONOLOGIA:\n- RN a Termo: Pico entre o 3º e 5º dia (média 6-8 mg/dL, máximo 12-13 mg/dL) -> Resolução em 7 a 10 dias;\n- RN Pré-Termo: Pico entre o 5º e 7º dia de vida -> Níveis máximos mais elevados (frequentemente 12 a 15 mg/dL) -> Resolução mais arrastada, podendo perdurar por até 2 a 3 semanas (14 a 21 dias);\n2) FATORES AGRAVANTES NO PREMATURO:\n- Atividade da UGT1A1 ainda mais deprimida;\n- Meia-vida eritrocitária ainda menor (cerca de 60 a 70 dias);\n- Trânsito intestinal mais lento e atraso no início da alimentação enteral (maior tempo de contato do mecônio com a beta-glicuronidase, potencializando a recirculação êntero-hepática);\n- Menor concentração sérica de albumina e menor afinidade de ligação da bilirrubina à albumina, elevando a fração de bilirrubina livre com maior risco de neurotoxicidade em níveis séricos absolutos menores.',
    comentariosAlternativas: {
      A: 'Correta. No prematuro, o pico é mais tardio (5º-7º dia), com níveis mais altos (até 15 mg/dL) e resolução mais lenta (14-21 dias).',
      B: 'Incorreta. A grande maioria dos prematuros desenvolve icterícia fisiológica exuberante sem qualquer relação com leucemia.',
      C: 'Incorreta. Icterícia na primeira hora é patológica hiperaguda (hemólise maciça).',
      D: 'Incorreta. O prematuro tem deficiência ainda mais acentuada da glicuroniltransferase.',
    },
  },
  {
    id: 'ped-neo-056',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Critérios de Icterícia Patológica / Não Fisiológica',
    isRevisao: false,
    enunciado:
      'O pediatra plantonista de uma maternidade recebe os exames de rotina dos recém-nascidos internados. Para identificar prontamente os casos que NÃO SE ENQUADRAM como icterícia fisiológica e que exigem investigação etiológica e intervenção imediatas, quais são os 4 CRITÉRIOS CLÁSSICOS DEFINIDORES DE ICTERÍCIA PATOLÓGICA?',
    alternativas: [
      {
        id: 'A',
        texto:
          '1) Início PRECOCE nas primeiras 24 horas de vida; 2) Velocidade de ascensão rápida da Bilirrubina Sérica Total (> 5,0 mg/dL/dia ou > 0,2 a 0,5 mg/dL/hora); 3) Presença de componente colestático (Bilirrubina Direta > 1,0 mg/dL se BT < 5,0 ou > 20% da BT); e 4) Duração PROLONGADA da icterícia além de 14 dias no recém-nascido a termo (ou além de 21 dias no prematuro).',
      },
      {
        id: 'B',
        texto:
          '1) Surgimento após o 4º dia de vida; 2) Presença de fezes amarelo-ouro normais; 3) Perda ponderal fisiológica de 5%; e 4) Mãe com tipagem O positivo.',
      },
      {
        id: 'C',
        texto:
          '1) Nível de bilirrubina total de 4 mg/dL aos 5 dias de vida; 2) Ganho de peso de 40 g/dia; 3) Diurese clara; e 4) Ausência de sopros cardíacos.',
      },
      {
        id: 'D',
        texto:
          'A icterícia só é considerada patológica se o recém-nascido apresentar convulsões refratárias e coma no primeiro minuto de vida.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Os CRITÉRIOS DE ICTERÍCIA PATOLÓGICA da Academia Americana de Pediatria (AAP) e Sociedade Brasileira de Pediatria (SBP) devem estar na ponta da língua de qualquer médico:\n1) TEMPO DE APARECIMENTO (MARCO DAS 24 HORAS):\n- Icterícia clinicamente evidente nas PRIMEIRAS 24 HORAS DE VIDA é SEMPRE PATOLÓGICA até que se prove o contrário. Aponta quase invariavelmente para processos hemolíticos imunes (Rh, ABO, antígenos menores) ou enzimáticos/membrana;\n2) VELOCIDADE DE ACÚMULO SÉRICO (TAXA DE ASCENSÃO):\n- Elevação da Bilirrubina Sérica Total (BST) em velocidade > 5,0 mg/dL a cada 24 horas (ou ascensão > 0,2 mg/dL/hora em termos e > 0,5 mg/dL/hora em hemólise franca);\n3) FRAÇÃO DE BILIRRUBINA CONJUGADA (COLESTASE):\n- Bilirrubina Direta (BD) > 1,0 mg/dL (se BT < 5,0 mg/dL) ou BD > 20% da BT total. A hiperbilirrubinemia direta NUNCA é fisiológica e aponta para colestase hepática ou biliar (atresia de vias biliares, sepse, infecção congênita);\n4) DURAÇÃO PROLONGADA:\n- Icterícia persistente após 14 dias de vida no recém-nascido a termo;\n- Icterícia persistente após 21 dias de vida no recém-nascido pré-termo;\n- Outros sinais associados: palidez, hepatoesplenomegalia, letargia, fezes acólicas ou colúria.',
    comentariosAlternativas: {
      A: 'Correta. Os 4 critérios clássicos: início < 24h, ascensão > 5 mg/dL/dia (> 0,2-0,5 mg/dL/h), BD > 1 mg/dL ou > 20% da BT, e duração > 14 dias no termo (> 21 dias no pré-termo).',
      B: 'Incorreta. Surgimento após o 4º dia com fezes normais e perda de 5% descreve curso compatível com icterícia fisiológica.',
      C: 'Incorreta. BT de 4 mg/dL no 5º dia é valor baixo e totalmente normal.',
      D: 'Incorreta. Convulsões indicam encefalopatia bilirrubínica aguda avançada (kernicterus), que é uma complicação tardia catastrófica evitável.',
    },
  },
  {
    id: 'ped-neo-057',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Icterícia Precoce nas Primeiras 24 Horas de Vida - Abordagem Diagnóstica Imediata',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo de 18 horas de vida, nascido de parto vaginal, apresenta icterícia visível atingindo tronco e raiz de coxas (Zona 2 a 3 de Kramer). A mãe é secundigesta, tipo sanguíneo O negativo, sem profilaxia com imunoglobulina anti-D na gestação anterior. O recém-nascido apresenta tipo sanguíneo A positivo. A dosagem sérica de bilirrubina total aos 18h de vida é de 11,5 mg/dL (com predominância de fração indireta). Diante do início precoce da icterícia nas primeiras 24 horas de vida, qual é a principal hipótese diagnóstica e qual bateria laboratorial mínima deve ser colhida imediatamente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Doença Hemolítica Perinatal por Incompatibilidade Rh (D) / Aloimunização Materna; deve-se solicitar imediatamente: Teste de Coombs Direto (imunoglobulinas aderidas às hemácias do RN), Hemograma completo com Hematócrito e Hemoglobina (pesquisa de anemia), Contagem de Reticulócitos e Esfregaço de sangue periférico (eritropoiese acelerada/esferócitos) e frações de Bilirrubina.',
      },
      {
        id: 'B',
        texto:
          'Icterícia fisiológica do lactente; orientar alta precoce e banho de sol de 15 minutos em janela de vidro.',
      },
      {
        id: 'C',
        texto:
          'Icterícia do leite materno; suspender a amamentação imediatamente e introduzir água com mel.',
      },
      {
        id: 'D',
        texto:
          'Fibrose cística pulmonar; realizar teste do suor com pilocarpina no alojamento conjunto.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A abordagem da ICTERÍCIA NAS PRIMEIRAS 24 HORAS DE VIDA é uma emergência pediátrica:\n1) REGRA ABSOLUTA:\n- Icterícia com < 24 horas de vida é SEMPRE PATOLÓGICA e, em mais de 90% dos casos, decorre de DOENÇA HEMOLÍTICA IMUNE (isoimunização por antígeno Rh D, incompatibilidade ABO ou antígenos menores Kell, c, E);\n2) CASO CLÍNICO:\n- Mãe O Rh negativo não sensibilizada previamente -> Feto A Rh positivo;\n- Formação de anticorpos maternos IgG anti-D que atravessam ativamente a placenta e destroem as hemácias fetais por hemólise extravascular macrofágica esplênica;\n3) INVESTIGAÇÃO LABORATORIAL IMEDIATA DE PRIMEIRA LINHA:\n- Tipagem sanguínea (ABO e fator Rh) da mãe e do RN;\n- Teste de Coombs Direto (Teste da Antiglobulina Humana Direta) no sangue do RN: fortemente positivo na isoimunização Rh (na incompatibilidade ABO pode ser fracamente positivo ou negativo);\n- Hemograma com hematócrito/hemoglobina: quantifica a gravidade da anemia hemolítica;\n- Contagem de Reticulócitos: estará marcadamente elevada (> 5% a 10%), refletindo hiperplasia eritroide medular reativa;\n- Hematoscopia/esfregaço de sangue periférico: policromatofilia, eritroblastos circulantes;\n- Bilirrubina total e frações horárias para plotagem no nomograma de Bhutani e indicação imediata de FOTOTERAPIA INTENSIVA (e imunoglobulina venosa se ascensão rápida).',
    comentariosAlternativas: {
      A: 'Correta. Início precoce (< 24h) com mãe Rh- e RN Rh+ indica doença hemolítica por incompatibilidade Rh; exige Coombs direto, hemograma, reticulócitos e bilirrubinas.',
      B: 'Incorreta. Icterícia < 24h nunca é fisiológica; alta e banho de sol levariam à encefalopatia bilirrubínica fatal (kernicterus).',
      C: 'Incorreta. Icterícia do leite materno surge no final da 1ª semana (tardia) e não em 18h de vida.',
      D: 'Incorreta. Teste do suor não investiga hemólise aguda neonatal.',
    },
  },
  {
    id: 'ped-neo-058',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Icterícia do Leite Materno (Breast Milk Jaundice) - Quadro Clínico e Fisiopatologia',
    isRevisao: false,
    enunciado:
      'Lactente de 18 dias de vida, nascido a termo de parto normal, em aleitamento materno exclusivo sob livre demanda, é levado à UBS para consulta de puericultura. A mãe relata que a criança "continua amarela", mas está muito bem. Ao exame: ictérico Zona 3 de Kramer (até abdome/coxas), afebril, corado, muito ativo, com excelente ganho ponderal (+ 35 g/dia acima do peso de nascimento), sem hepatoesplenomegalia. Diurese abundante de cor amarelo-claro e fezes pastosas amarelo-douradas a cada mamada. A dosagem sérica revela: BT de 13,8 mg/dL com Bilirrubina Indireta de 13,2 mg/dL e Direta de 0,6 mg/dL. Hemograma e reticulócitos normais. Qual é o diagnóstico e qual é a fisiopatologia descrita para esta condição?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Icterícia do Leite Materno (Breast Milk Jaundice); condição benigna de início tardio no final da 1ª semana com pico na 2ª e 3ª semanas, decorrente de fatores presentes no leite humano maduro (como a enzima beta-glicuronidase, pregnano-3-alfa-20-beta-diol e ácidos graxos livres) que inibem a conjugação hepática e aumentam a absorção intestinal de bilirrubina na circulação êntero-hepática.',
      },
      {
        id: 'B',
        texto:
          'Icterícia da inanição por desidratação hipernatrêmica grave exigindo internação em UTI.',
      },
      {
        id: 'C',
        texto:
          'Atresia de vias biliares com indicação de portoenterostomia de Kasai nas próximas 12 horas.',
      },
      {
        id: 'D',
        texto:
          'Esferocitose hereditária grave descompensada por parvovírus B19.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A ICTERÍCIA DO LEITE MATERNO (Breast Milk Jaundice) é um diagnóstico frequente no ambulatório e clássico de provas:\n1) QUADRO CLÍNICO TÍPICO:\n- Início TARDIO: a icterícia surge ou se intensifica a partir do final da primeira semana de vida (entre o 5º e o 7º dia), atinge seu pico na 2ª a 3ª semana de vida (frequentemente com níveis de BT entre 10 e 20 mg/dL) e pode declinar lentamente ao longo de 4 a 12 semanas;\n- O recém-nascido é a perfeita imagem da saúde: EXCELENTE GANHO PONDERAL (ganha de 30 a 40 g/dia), altamente ativo, diurese clara e abundante, fezes amarelo-ouro normais, sem qualquer anemia, hemólise ou colestase;\n2) FISIOPATOLOGIA:\n- Substâncias bioativas presentes no leite de certas mulheres maduras inibem a glicuronidação hepática ou aumentam a absorção êntero-hepática:\n  a) Alta atividade da enzima BETA-GLICURONIDASE do leite materno: desconjuga a bilirrubina na luz intestinal, promovendo reabsorção portal contínua;\n  b) Presença de metabólitos hormonais (como o pregnano-3-alfa-20-beta-diol) e citocinas (como IL-1 e TNF-alfa);\n  c) Ácidos graxos de cadeia longa não esterificados que competem com a bilirrubina pela UGT1A1;\n- Trata-se de uma condição benigna que não causa dano neurológico (a menos em níveis extremos raríssimos > 25 mg/dL).',
    comentariosAlternativas: {
      A: 'Correta. Icterícia tardia em lactente saudável com excelente ganho de peso em aleitamento materno exclusivo é a icterícia do leite materno (beta-glicuronidase).',
      B: 'Incorreta. A criança tem excelente ganho de peso (+ 35 g/dia) e diurese farta, afastando completamente desidratação ou inanição.',
      C: 'Incorreta. A bilirrubina direta é normal (0,6 mg/dL) e as fezes são amarelo-ouro (sem colestase nem acolia fecal).',
      D: 'Incorreta. Hemograma e reticulócitos normais excluem anemia hemolítica por esferocitose.',
    },
  },
  {
    id: 'ped-neo-059',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Icterícia do Leite Materno - Conduta Clínica Baseada em Evidências',
    isRevisao: false,
    enunciado:
      'Diante do diagnóstico confirmado de Icterícia do Leite Materno em um lactente de 20 dias, com Bilirrubina Total de 14,0 mg/dL (indireta 13,4 mg/dL), excelente estado geral, ganho ponderal vigoroso e exames hematológicos normais, a mãe pergunta ansiosa se deve "secar o peito" e dar fórmula infantil. De acordo com as diretrizes da Sociedade Brasileira de Pediatria e da Academia Americana de Pediatria, qual é a conduta médica correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'MANTER O ALEITAMENTO MATERNO EXCLUSIVO sob livre demanda e tranquilizar a família quanto à evolução benigna e autolimitada da condição; a suspensão do leite materno NÃO é recomendada, pois os benefícios imunológicos e nutricionais do leite materno superam largamente a icterícia leve a moderada sem risco de encefalopatia nesses níveis.',
      },
      {
        id: 'B',
        texto:
          'Suspender o aleitamento materno definitivamente e prescrever fórmula de soja com fenobarbital.',
      },
      {
        id: 'C',
        texto:
          'Indicar internação imediata em UTI para fototerapia tripla por 15 dias contínuos.',
      },
      {
        id: 'D',
        texto:
          'Ferver o leite materno ordenhado a 100 °C por 2 horas antes de oferecer na mamadeira.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A conduta na ICTERÍCIA DO LEITE MATERNO é uma das maiores armadilhas de provas de residência médica:\n1) CONDUTA PADRÃO-OURO:\n- MANTER O ALEITAMENTO MATERNO EXCLUSIVO!\n- Não se deve interromper a amamentação nem introduzir fórmulas de rotina;\n- Os benefícios do leite materno (proteção contra infecções, morte súbita, vínculo materno-filial e neurodesenvolvimento) são infinitamente superiores ao risco de uma hiperbilirrubinemia estável e benigna;\n2) QUANDO CONSIDERAR INTERRUPÇÃO TEMPORÁRIA (EXCEÇÃO HISTÓRICA/EXTREMA):\n- Apenas se a bilirrubina sérica total estiver em níveis perigosamente altos, aproximando-se do limiar de fototerapia/exanguinotransfusão (geralmente > 20 a 22 mg/dL) ou se houver dúvida diagnóstica com necessidade de teste terapêutico;\n- Nesses casos raros, a suspensão temporária por 24 a 48 horas (ordenhando a mama para manter a lactação e oferecendo fórmula) promove uma queda rápida e dramática de 50% nos níveis de bilirrubina, confirmando o diagnóstico, devendo o aleitamento materno ser reintroduzido imediatamente a seguir;\n- Ferver o leite materno (pasteurização caseira para inativar a beta-glicuronidase) é uma prática antiga desnecessária que destrói anticorpos e enzimas benéficas.',
    comentariosAlternativas: {
      A: 'Correta. A conduta mandatória é manter o aleitamento materno exclusivo e tranquilizar os pais, visto que a condição é benigna.',
      B: 'Incorreta. Desmame definitivo é iatrogenia grave que prejudica o desenvolvimento da criança; fenobarbital tem efeitos sedativos deletérios.',
      C: 'Incorreta. Com BT de 14 mg/dL aos 20 dias em RN a termo hígido, o valor está muito distante da linha de corte de fototerapia da AAP.',
      D: 'Incorreta. Ferver o leite materno destrói seus fatores imunológicos essenciais.',
    },
  },
  {
    id: 'ped-neo-060',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Icterícia da Inanição / Aleitamento Materno - Fisiopatologia e Apresentação Precoce',
    isRevisao: false,
    enunciado:
      'Um recém-nascido de 4 dias de vida é trazido ao pronto-atendimento com icterícia acentuada (Zona 4 de Kramer). A mãe é primípara adolescente, relata dor intensa nos mamilos durante as mamadas e refere que o bebê "chora o tempo todo no peito e dorme exausto". Ao exame físico: perda de 14% em relação ao peso de nascimento, mucosas secas, fontanela deprimida, turgor diminuído e choro sem lágrimas. A fralda apresenta urina escassa com depósito avermelhado (cristais de urato) e eliminação de fezes meconiais escuras e escassas. A bilirrubina total é de 18,2 mg/dL (indireta de 17,6 mg/dL). Qual é a denominação desta condição, qual seu momento de início e qual o mecanismo fisiopatológico principal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Icterícia do Aleitamento Materno / Icterícia da Inanição (Breastfeeding Jaundice); de início precoce nos primeiros dias de vida (3º ao 5º dia), decorre de pega/técnica inadequada com baixa ingesta calórica e desidratação, gerando estase intestinal e retardo na eliminação de mecônio com exacerbação maciça da circulação êntero-hepática de bilirrubina.',
      },
      {
        id: 'B',
        texto:
          'Icterícia do leite materno de início tardio por excesso de leite nas mamas.',
      },
      {
        id: 'C',
        texto:
          'Estenose hipertrófica de piloro congênita com alcalose metabólica hipoclorêmica.',
      },
      {
        id: 'D',
        texto:
          'Deficiência congênita completa da glicose-6-fosfato desidrogenase (G6PD) ligada ao cromossomo X.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A diferenciação entre a Icterícia DO Aleitamento Materno (Inanição) e a Icterícia DO Leite Materno é um clássico imperativo de prova:\n1) ICTERÍCIA DO ALEITAMENTO MATERNO / DA INANIÇÃO / DO JEJUM (BREASTFEEDING JAUNDICE):\n- CRONOLOGIA: Início PRECOCE nos primeiros dias de vida (pico entre o 3º e 5º dia, na primeira semana);\n- FISIOPATOLOGIA: O problema NÃO é o leite humano em si, mas sim a SUA FALTA (baixa ingesta láctea e desidratação);\n  * Ocorre comumente em primíparas com fissuras mamilares, pega incorreta, apojadura tardia ou mamadas infrequentes;\n  * A baixa ingesta de volume e calorias desacelera a motilidade gastrointestinal e retarda a eliminação do MECÔNIO (que contém cerca de 1 mg de bilirrubina por grama);\n  * A estase de mecônio no lúmen do intestino expõe a bilirrubina à beta-glicuronidase intestinal por tempo prolongado, promovendo reabsorção maciça para a veia porta (HIPERATIVAÇÃO DA CIRCULAÇÃO ÊNTERO-HEPÁTICA);\n- QUADRO CLÍNICO CARACTERÍSTICO:\n  * Perda de peso patológica excessiva (> 10% do peso de nascimento);\n  * Sinais evidentes de desidratação (fontanela funda, turgor diminuído);\n  * Oligúria com infarto úrico (cristais de urato cor de tijolo na fralda);\n  * Fezes meconiais escuras e escassas persistindo após o 3º-4º dia de vida.',
    comentariosAlternativas: {
      A: 'Correta. Icterícia precoce associada a perda ponderal > 10%, desidratação e atraso na saída de mecônio é a icterícia da inanição (baixa ingesta/pega errada).',
      B: 'Incorreta. A icterícia do leite materno é tardia e cursa com excelente ganho ponderal em bebê hidratado.',
      C: 'Incorreta. Estenose de piloro manifesta-se por vômitos em jato não biliares após as mamadas entre a 3ª e 6ª semana.',
      D: 'Incorreta. A G6PD causa hemólise aguda por estresse oxidativo, e não síndrome de inanição com desidratação primária.',
    },
  },
  {
    id: 'ped-neo-061',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Manejo Terapêutico da Icterícia da Inanição / Baixa Ingesta',
    isRevisao: false,
    enunciado:
      'Diante do recém-nascido de 4 dias com Icterícia da Inanição (perda de 14% do peso, desidratação e BT de 18,2 mg/dL), a conduta médica exige tratamento simultâneo da hiperbilirrubinemia e da causa de base. Qual é o conjunto de intervenções recomendado pelas diretrizes da SBP e AAP para este paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Iniciar Fototerapia Intensiva imediata (devido ao nível de BT > 18 mg/dL próximo ao limiar de risco); corrigir a pega e o posicionamento da amamentação com suporte da consultoria em lactação; aumentar a frequência das mamadas para 8 a 12 vezes ao dia; complementar temporariamente a hidratação/calorias com leite materno ordenhado (ou fórmula infantil) por copinho ou relactação se o débito lácteo for insuficiente; e NÃO administrar água, chás ou soro glicosado.',
      },
      {
        id: 'B',
        texto:
          'Suspender a amamentação definitivamente e hidratar com mamadeiras de água mineral com açúcar a cada 1 hora.',
      },
      {
        id: 'C',
        texto:
          'Realizar exanguinotransfusão imediata através da artéria temporal sem fototerapia e manter o recém-nascido em jejum absoluto.',
      },
      {
        id: 'D',
        texto:
          'Apenas prescrever chá de picão caseiro morno e orientar a mãe a amamentar somente duas vezes por dia para poupar os mamilos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O manejo da Icterícia da Inanição exige intervenções sinérgicas para salvar a lactação e proteger o cérebro:\n1) PROTEÇÃO DO SISTEMA NERVOSO CENTRAL:\n- Nível de BT de 18,2 mg/dL em RN de 4 dias desidratado exige indicação imediata de FOTOTERAPIA INTENSIVA (lâmpadas LED azuis de alta irradiância) para promover a fotoisomerização estrutural da bilirrubina em lumirrubina solúvel eliminada pela urina e bile;\n2) CORREÇÃO NUTRICIONAL E HIDRATAÇÃO EFICAZ:\n- Apoio prático à mãe: ajuste de pega, alinhamento queixo-mama e manejo da dor mamilar;\n- Aumentar a frequência das mamadas para no mínimo 8 a 12 vezes ao dia (a cada 2 a 3 horas);\n- COMPLEMENTAÇÃO TEMPORÁRIA: enquanto a produção materna está se restabelecendo, é indispensável complementar com leite materno ordenhado da própria mãe, de banco de leite ou fórmula infantil adequada (o volume ofertado hidrata, aumenta o peristaltismo e induz evacuações frequentes para expulsar o mecônio/bilirrubina);\n- OFERTAR NO COPINHO OU RELACTAÇÃO para evitar confusão de bicos;\n3) CONTRAINDICAÇÃO DE ÁGUA OU CHÁS:\n- Água, chás e soro glicosado são CONTRAINDICADOS: não têm calorias nem proteínas, preenchem a capacidade gástrica da criança e não reduzem a bilirrubina, agravando a desnutrição e gerando hiponatremia dilucional.',
    comentariosAlternativas: {
      A: 'Correta. Fototerapia pelo nível de risco + correção da pega/posicionamento + mamadas frequentes + complementação calórica temporária; proibidos água/chás.',
      B: 'Incorreta. Água com açúcar causa hiponatremia e não tem valor nutricional; desmame precoce é injustificado.',
      C: 'Incorreta. Exanguinotransfusão é invasiva e só se indica se falha de fototerapia intensiva ou níveis extremos com sinais de encefalopatia.',
      D: 'Incorreta. Prática popular sem evidência científica com risco de contaminação e piora da desidratação.',
    },
  },
  {
    id: 'ped-neo-062',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Quadro Comparativo: Icterícia do Leite Materno vs do Aleitamento Materno',
    isRevisao: false,
    enunciado:
      'Para consolidar a distinção entre a Icterícia do Leite Materno e a Icterícia do Aleitamento Materno (Inanição), amplamente exigida em concursos de residência médica, assinale a afirmativa que sintetiza com perfeição a comparação dessas duas entidades:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A Icterícia do Aleitamento Materno é PRECOCE (1ª semana), cursa com BAIXA ingesta láctea, PERDA ponderal acentuada (> 10%) e desidratação; enquanto a Icterícia do Leite Materno é TARDIA (fim da 1ª semana / pico na 2ª e 3ª semanas), cursa com ABUNDANTE ingesta láctea, EXCELENTE ganho de peso e recém-nascido perfeitamente hidratado.',
      },
      {
        id: 'B',
        texto:
          'A Icterícia do Leite Materno ocorre apenas em prematuros extremos < 28 semanas sob ventilação mecânica.',
      },
      {
        id: 'C',
        texto:
          'A Icterícia do Aleitamento Materno decorre de infecção bacteriana do colostro por estafilococo dourado.',
      },
      {
        id: 'D',
        texto:
          'Ambas as condições cursam obrigatoriamente com elevação exclusiva de bilirrubina direta acima de 15 mg/dL e acolia fecal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Este quadro comparativo é um dos maiores clássicos de provas de pediatria:\n\n| Característica | Icterícia do Aleitamento Materno (Inanição) | Icterícia do Leite Materno |\n| :--- | :--- | :--- |\n| **Sinônimo** | *Breastfeeding Jaundice* / Icterícia do Jejum | *Breast Milk Jaundice* |\n| **Início** | Precoce (3º ao 5º dia de vida / 1ª semana) | Tardio (fim da 1ª semana, pico 2ª e 3ª semanas) |\n| **Causa Primária** | POUCO leite (baixa ingesta, desidratação) | Substâncias no leite maduro (beta-glicuronidase) |\n| **Estado Nutricional** | PERDA PONDERAL EXCESSIVA (> 10%), desidratado | EXCELENTE GANHO PONDERAL (> 30 g/dia), hidratado |\n| **Evacuações** | Fezes meconiais escassas, oligúria | Fezes amarelas frequentes, diurese abundante |\n| **Fisiopatologia** | Estase intestinal -> recirculação êntero-hepática | Inibição da UGT1A1 / desconjugação intestinal |\n| **Conduta Central** | Corrigir pega, aumentar mamadas, complementar | MANTER aleitamento materno exclusivo |\n| **Fração de Bilirrubina** | Indireta | Indireta |',
    comentariosAlternativas: {
      A: 'Correta. Síntese comparativa perfeita: do aleitamento é precoce com pouca ingesta e perda de peso; do leite é tardia com boa ingesta e excelente peso.',
      B: 'Incorreta. Acomete recém-nascidos a termo saudáveis.',
      C: 'Incorreta. Não se trata de infecção ou mastite, mas de inadequação de pega/volume.',
      D: 'Incorreta. Ambas são causas de hiperbilirrubinemia INDIRETA; colestase com bilirrubina direta e acolia são patológicas.',
    },
  },
  {
    id: 'ped-neo-063',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Colestase Neonatal - Definição Laboratorial Atualizada da SBP/ESPGHAN',
    isRevisao: false,
    enunciado:
      'Um lactente de 25 dias de vida é levado à consulta por persistência de icterícia. O pediatra solicita dosagem de bilirrubina total e frações para diferenciar hiperbilirrubinemia indireta de colestase neonatal. De acordo com as diretrizes da Sociedade Brasileira de Pediatria e da ESPGHAN/NASPGHAN, qual é o critério laboratorial que DEFINE formalmente a COLESTASE NEONATAL (Hiperbilirrubinemia Conjugada/Direta)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Bilirrubina Direta (BD) sérica > 1,0 mg/dL (independentemente do valor da Bilirrubina Total se BT < 5,0 mg/dL) ou Bilirrubina Direta superior a 20% da Bilirrubina Total (quando a BT ≥ 5,0 mg/dL).',
      },
      {
        id: 'B',
        texto:
          'Bilirrubina Direta > 15,0 mg/dL obrigatoriamente associada a hematócrito menor que 10%.',
      },
      {
        id: 'C',
        texto:
          'Qualquer elevação de Bilirrubina Indireta acima de 2,0 mg/dL em pacientes do sexo masculino.',
      },
      {
        id: 'D',
        texto:
          'A colestase neonatal só é confirmada se a bilirrubina total for estritamente igual a zero.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O ponto de corte laboratorial para definição de COLESTASE NEONATAL é rigoroso e consagrado internacionalmente:\n1) CRITÉRIO DEFINIDOR ATUALIZADO (SBP / ESPGHAN / NASPGHAN):\n- BILIRRUBINA DIRETA (BD) > 1,0 mg/dL;\n- Historicamente, utilizava-se a regra de BD > 20% da BT se a BT fosse > 5,0 mg/dL. As diretrizes mais recentes simplificaram e enfatizaram que QUALQUER valor de Bilirrubina Direta sérica superior a 1,0 mg/dL (ou > 17 mcmol/L) deve ser considerado patológico e exige investigação colestática imediata, independentemente do nível de BT;\n2) IMPORTÂNCIA PROGNÓSTICA VITAL:\n- A hiperbilirrubinemia direta NUNCA É FISIOLÓGICA;\n- Ela traduz falha na excreção biliar intra ou extra-hepática, acúmulo tecidual de sais biliares citotóxicos e risco iminente de dano hepatocelular progressivo;\n- Todo recém-nascido que permanece ictérico com mais de 14 dias de vida (termo) ou mais de 21 dias (pré-termo) DEVE ter as frações de bilirrubina (Total e Direta) dosadas compulsoriamente para afastar colestase.',
    comentariosAlternativas: {
      A: 'Correta. Critério oficial: Bilirrubina Direta > 1,0 mg/dL (ou > 20% da BT se BT elevada), definindo colestase patológica mandatória de investigação.',
      B: 'Incorreta. Aguardar BD > 15 mg/dL causaria retardo diagnóstico catastrófico; o corte é precoce (> 1,0 mg/dL).',
      C: 'Incorreta. Bilirrubina indireta elevada define icterícia não conjugada (hemólise, fisiológica, leite materno), e não colestase.',
      D: 'Incorreta. Proposição sem nexo laboratorial.',
    },
  },
  {
    id: 'ped-neo-064',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Tríade Semiológica de Alarme da Colestase Neonatal',
    isRevisao: false,
    enunciado:
      'Um pediatra ministra aula para residentes sobre semiologia neonatal e destaca que todo médico deve inspecionar cuidadosamente as fraldas e o abdome de recém-nascidos com icterícia persistente além da segunda semana de vida. Quais são os TRÊS SINAIS CLÍNICOS cardinais que, associados à icterícia, compõem a síndrome colestática e exigem investigação urológica e cirúrgica urgente?',
    alternativas: [
      {
        id: 'A',
        texto:
          '1) Acolia ou hipocolia fecal (fezes descoradas, pálidas, esbranquiçadas ou cor de "massa de vidraceiro"); 2) Colúria (urina escura que mancha intensamente a fralda de amarelo-acastanhado por excreção de bilirrubina direta hidrossolúvel); e 3) Hepatomegalia com aumento da consistência hepática.',
      },
      {
        id: 'B',
        texto:
          '1) Diarreia aquosa com sangue vivo; 2) Ausência de sopros cardíacos; e 3) Cianose de extremidades que melhora com choro.',
      },
      {
        id: 'C',
        texto:
          '1) Urina límpida e incolor como água; 2) Fezes hipercoradas cor de açafrão; e 3) Hipotonia muscular pura.',
      },
      {
        id: 'D',
        texto:
          '1) Alopecia total congênita; 2) Paralisia de pregas vocais; e 3) Erupção vesicular em palmas e plantas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A semiologia da COLESTASE NEONATAL baseia-se na perda da excreção dos pigmentos biliares no tubo digestivo e sua retenção sistêmica:\n1) ACOLIA / HIPOCOLIA FECAL:\n- A estercobilina (derivada da bilirrubina direta) é o pigmento responsável pela cor amarelo-castanha das fezes normais;\n- Quando há obstrução mecânica ou falha secretória biliar, a bile não chega ao lúmen intestinal, resultando em fezes descoradas, cinzento-esbranquiçadas ou cor de "massa de vidraceiro";\n2) COLÚRIA:\n- A bilirrubina direta é polar e hidrossolúvel, sendo facilmente filtrada pelos glomérulos renais quando atinge níveis séricos elevados;\n- A urina do recém-nascido adquire tonalidade castanho-escura (cor de chá forte ou refrigerante de cola) e MANCHA A FRALDA DE AMARELO-ESCURO (a urina de um bebê com icterícia indireta pura não mancha a fralda);\n3) HEPATOMEGALIA DE CONSISTÊNCIA AUMENTADA:\n- O represamento biliar intra-hepático gera dilatação canalicular, proliferação ductular e processo inflamatório que culmina em aumento do volume do fígado (borda hepática palpável > 2 a 3 cm do rebordo costal direito) com borda romba e consistência fibroelástica aumentada.',
    comentariosAlternativas: {
      A: 'Correta. Acolia fecal (fezes brancas) + colúria (urina escura) + hepatomegalia compõem a tríade clínica de alarme da colestase neonatal.',
      B: 'Incorreta. Diarreia invasiva sugere enterocolite/disenteria infecciosa.',
      C: 'Incorreta. A colestase gera o oposto: fezes descoradas (acolia) e urina escura (colúria).',
      D: 'Incorreta. Manifestações dermatológicas e neurológicas sem relação com colestase.',
    },
  },
  {
    id: 'ped-neo-065',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'O Cartão de Cores Fecais (Stool Color Card) na Triagem da Colestase',
    isRevisao: false,
    enunciado:
      'A Sociedade Brasileira de Pediatria e o Ministério da Saúde incorporaram o "Cartão de Cores Fecais" (Faixa de Triagem de Fezes) na Caderneta da Criança. Qual é o objetivo de saúde pública desta ferramenta, qual a faixa etária crítica de aplicação e qual conduta deve ser adotada se os pais identificarem fezes classificadas nas cores anormais (tons pálidos/descorados)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Promover a triagem e o diagnóstico precoce da Atresia de Vias Biliares Extra-Hepáticas antes dos 30 a 60 dias de vida através da comparação visual das fezes da criança com uma escala cromática padronizada; a identificação de cores anormais (acolia/hipocolia) exige encaminhamento imediato e prioritário ao serviço de gastroenterologia/cirurgia pediátrica.',
      },
      {
        id: 'B',
        texto:
          'Rastrear precocemente o câncer colorretal do lactente para indicação de colectomia total aos 3 meses de vida.',
      },
      {
        id: 'C',
        texto:
          'Apenas avaliar se o leite materno tem teor adequado de cálcio e ferro para liberar a introdução precoce de leite de vaca integral.',
      },
      {
        id: 'D',
        texto:
          'O cartão é restrito a crianças maiores de 5 anos de idade para orientar o desfralde escolar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O CARTÃO DE CORES FECAIS (STOOL COLOR CARD) é uma das estratégias de triagem visual neonatal mais eficazes do mundo (pioneiramente implantada no Japão e Taiwan e adotada no Brasil pela SBP):\n1) OBJETIVO PRINCIPAL:\n- Diagnosticar precocemente a ATRESIA DE VIAS BILIARES EXTRA-HEPÁTICAS (AVBEH) e outras causas cirúrgicas de colestase neonatal;\n2) POR QUE O TEMPO É CRÍTICO?\n- A cirurgia de Kasai (portoenterostomia) tem taxa de sucesso excelente (> 80%) se realizada antes dos 45 a 60 dias de vida;\n- Infelizmente, muitas crianças chegavam aos centros de referência tardiamente (após 90 dias) porque pais e profissionais de saúde confundiam a icterícia colestática com a icterícia fisiológica ou do leite materno;\n3) COMO FUNCIONA O CARTÃO:\n- Apresenta fotos coloridas divididas em: CORES NORMAIS (tons amarelo, verde e marrom) e CORES ANORMAIS SUSPEITAS (tons branco, bege, cinza-claro e amarelo-pálido);\n- Se as fezes coincidirem com as cores anormais, a família é orientada a procurar imediatamente o pediatra para dosagem urgente de Bilirrubina Total e Direta e ultrassonografia de vias biliares.',
    comentariosAlternativas: {
      A: 'Correta. Rastreio precoce de Atresia de Vias Biliares antes de 30-60 dias através da identificação visual de fezes hipocólicas/acólicas na Caderneta da Criança.',
      B: 'Incorreta. Câncer colorretal é patologia de adultos, praticamente inexistente no período neonatal.',
      C: 'Incorreta. Não avalia cálcio e leite de vaca é contraindicado no primeiro ano.',
      D: 'Incorreta. O cartão destina-se estritamente aos primeiros 30 a 60 dias de vida do recém-nascido.',
    },
  },
  {
    id: 'ped-neo-066',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Atresia de Vias Biliares Extra-Hepáticas (AVBEH) - Apresentação Clínica Típica',
    isRevisao: false,
    enunciado:
      'Lactente de 35 dias de vida, sexo feminino, nascida a termo com peso de 3.400 g, sem intercorrências neonatais, vinha em aleitamento materno exclusivo. A mãe procura atendimento médico porque notou que a criança "nunca perdeu o amarelado" e, nas últimas duas semanas, as fezes tornaram-se progressivamente brancas ("cor de giz/massa de vidraceiro") e a urina ficou escura manchando a fralda. A criança está alerta, mamando bem e com ganho de peso preservado. Ao exame físico: ictérica 3+/4+ generalizada, abdome com fígado palpável a 4 cm do rebordo costal direito com borda endurecida, baço palpável a 1,5 cm do RCE. Exames: BT: 11,2 mg/dL; BD: 8,4 mg/dL; TGO: 180 U/L; TGP: 165 U/L; Gama-GT: 680 U/L (muito elevada). Qual é a principal suspeita etiológica para esta apresentação clínica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Atresia de Vias Biliares Extra-Hepáticas (AVBEH), a principal causa de colestase cirúrgica neonatal e a principal indicação de transplante hepático na faixa etária pediátrica.',
      },
      {
        id: 'B',
        texto:
          'Icterícia fisiológica prolongada por deficiência transitória de ferro.',
      },
      {
        id: 'C',
        texto:
          'Icterícia do leite materno de alta intensidade.',
      },
      {
        id: 'D',
        texto:
          'Doença da membrana hialina complicada por enfisema lobar congênito.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A ATRESIA DE VIAS BILIARES EXTRA-HEPÁTICAS (AVBEH) é uma das doenças cirúrgicas mais emblemáticas da pediatria:\n1) EPIDEMIOLOGIA E NATUREZA DA DOENÇA:\n- Incidência de aproximadamente 1 em cada 10.000 a 15.000 nascidos vivos, com discreto predomínio no sexo feminino;\n- Trata-se de uma colangiopatia inflamatória fibro-obliterativa progressiva idiopática que acomete a árvore biliar extra-hepática, levando à obliteração completa dos ductos biliares e obstrução mecânica irreversível ao fluxo de bile;\n- Se não tratada cirurgicamente com brevidade, evolui de forma inexorável com cirrose biliar secundária, hipertensão portal e óbito nos primeiros 1 a 2 anos de vida;\n2) QUADRO CLÍNICO CLÁSSICO:\n- Recém-nascido a termo que nasce perfeitamente hígido, com peso e escores normais;\n- A icterícia manifesta-se entre a 2ª e a 6ª semana de vida (pode iniciar como prolongamento de uma icterícia neonatal precoce ou reaparecer após um intervalo livre);\n- Instalação progressiva de ACOLIA FECAL persistente e COLÚRIA;\n- O lactente mantém-se com BOM ESTADO GERAL e ganho de peso preservado no primeiro mês, o que frequentemente atrasa a suspeita clínica por médicos desavisados;\n- Hepatomegalia de consistência endurecida/fibroelástica e esplenomegalia progressiva;\n3) PADRÃO LABORATORIAL:\n- Hiperbilirrubinemia direta (BD > 50-70% da BT);\n- Marcadores canaliculares marcadamente elevados: GAMA-GLUTAMILTRANSFERASE (GGT) tipicamente muito alta (> 3 a 5 vezes o limite superior) e Fosfatase Alcalina;\n- Transaminases (TGO/TGP) moderadamente elevadas.',
    comentariosAlternativas: {
      A: 'Correta. Lactente de 35 dias com colestase (BD 8,4 mg/dL), acolia fecal, colúria, hepatomegalia endurecida e GGT muito elevada é o quadro clássico de AVBEH.',
      B: 'Incorreta. Icterícia fisiológica não cursa com hiperbilirrubinemia direta, acolia fecal nem elevação de GGT.',
      C: 'Incorreta. A icterícia do leite materno cursa com bilirrubina indireta pura e fezes com coloração normal.',
      D: 'Incorreta. Membrana hialina é patologia pulmonar de prematuro nas primeiras horas de vida.',
    },
  },
  {
    id: 'ped-neo-067',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Ultrassonografia de Vias Biliares e o Sinal do Cordão Triangular na AVBEH',
    isRevisao: false,
    enunciado:
      'Lactente de 30 dias com suspeita clínica de Atresia de Vias Biliares Extra-Hepáticas é encaminhado para investigação por imagem. O médico assistente solicita ULTRASSONOGRAFIA DE ABDOME SUPERIOR com atenção especial à região do hilo hepático e vesícula biliar. Quais são as recomendações técnicas de preparo para o exame e quais os achados ultrassonográficos altamente específicos para o diagnóstico de AVBEH?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O exame deve ser realizado após JEJUM DE 4 HORAS (para permitir o enchimento da vesícula biliar normal); os achados altamente sugestivos de AVBEH incluem: o "SINAL DO CORDÃO TRIANGULAR" (espessamento ecogênico fibroso triangular ou tubular anterior à bifurcação da veia porta ≥ 4 mm), vesícula biliar atrófica, contraída (< 1,5 cm) ou ausente que não se contrai pós-mamada, e ausência de dilatação das vias biliares extra-hepáticas.',
      },
      {
        id: 'B',
        texto:
          'A criança deve ingerir 1 litro de suco de uva imediatamente antes do exame e a vesícula deve estar gigante medindo mais de 10 cm.',
      },
      {
        id: 'C',
        texto:
          'O ultrassom é contraindicado na infância e deve ser substituído por radiografia de tórax de perfil.',
      },
      {
        id: 'D',
        texto:
          'O achado típico de atresia biliar é a presença de dilatação maciça de todos os ductos biliares extra-hepáticos cheios de cálculos de colesterol.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A ULTRASSONOGRAFIA DE ABDOME é o exame de imagem inicial de escolha na colestase neonatal:\n1) PREPARO DO PACIENTE:\n- O recém-nascido DEVE estar em JEJUM de pelo menos 4 horas;\n- Justificativa: se o bebê mamar logo antes do exame, a vesícula biliar se contrai fisiologicamente para ejetar bile, simulando falso aspecto de vesícula atrófica ou ausente;\n2) ACHADOS PATOGNOMÔNICOS / ALTAMENTE ESPECÍFICOS DE AVBEH:\n- SINAL DO CORDÃO TRIANGULAR (TRIANGULAR CORD SIGN):\n  * Espessamento ecogênico triangular ou tubular de tecido fibroso localizado imediatamente anterior à bifurcação da veia porta no hilo hepático;\n  * Espessura ≥ 4 mm (ou ≥ 3,4 mm) em corte longitudinal;\n  * Representa o remanescente fibro-obliterado do ducto hepático comum;\n  * Possui sensibilidade e especificidade superiores a 85% a 95% para AVBEH;\n- ANOMALIAS DA VESÍCULA BILIAR (GHOST GALLBLADDER):\n  * Vesícula não visualizada (ausente), rudimentar ou de pequenas dimensões (< 1,5 cm de comprimento);\n  * Paredes irregulares, contornos indistintos e ausência de esvaziamento após alimentação;\n- AUSÊNCIA DE DILATAÇÃO DE DUCTOS BILIARES EXTRA-HEPÁTICOS:\n  * Diferente do adulto com obstrução litiásica ou neoplásica (que dilata a via biliar a montante), na AVBEH os ductos extra-hepáticos são destruídos pelo processo fibro-inflamatório, logo NÃO há dilatação biliar extra-hepática visível.',
    comentariosAlternativas: {
      A: 'Correta. Jejum de 4h; sinal do cordão triangular (≥ 4 mm anterior à veia porta), vesícula atrófica/ausente e ausência de dilatação biliar extra-hepática.',
      B: 'Incorreta. Jejum é mandatório; 1 litro de suco causa broncoaspiração grave.',
      C: 'Incorreta. O ultrassom é o método não invasivo inicial padrão-ouro.',
      D: 'Incorreta. Na atresia biliar os ductos extra-hepáticos sofrem fibrose obliterativa e colapso, não dilatação.',
    },
  },
  {
    id: 'ped-neo-068',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Biópsia Hepática na Colestase Neonatal - Diferenciação Histopatológica',
    isRevisao: false,
    enunciado:
      'Para consolidar a indicação cirúrgica em um lactente de 38 dias com colestase neonatal, a equipe realiza uma Biópsia Hepática Percutânea por agulha guiada por ultrassom. Qual conjunto de achados histopatológicos no parênquima hepático confirma com alta acurácia o diagnóstico de Atresia de Vias Biliares Extra-Hepáticas (diferenciando-a da Hepatite Neonatal Idiopática)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Proliferação de ductos biliares interlobulares nos espaços-porta, presença de rolhas/plugues biliares intraluminais nos ductos e fibrose portal/periductal progressiva com preservação relativa da arquitetura lobular básica.',
      },
      {
        id: 'B',
        texto:
          'Ausência completa de hepatócitos substituídos por tecido ósseo maduro.',
      },
      {
        id: 'C',
        texto:
          'Infiltração maciça por amebas gigantes devorando o parênquima hepático.',
      },
      {
        id: 'D',
        texto:
          'Fígado estritamente normal idêntico ao de um adulto jovem atleta.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A BIÓPSIA HEPÁTICA é considerada a ferramenta diagnóstica isolada de maior acurácia (acurácia de 90% a 95%) para o diagnóstico diferencial da colestase neonatal:\n1) ACHADOS HISTOPATOLÓGICOS CLÁSSICOS DA ATRESIA DE VIAS BILIARES (AVBEH):\n- PROLIFERAÇÃO DUCTULAR BILIAR NO ESPAÇO PORTA: resposta reativa à obstrução biliar mecânica distal a jusante;\n- TROMBOS / PLUGUES BILIARES nos ductos interlobulares dilatados (estase de bile espessa);\n- EXPANSÃO E FIBROSE PORTAL com pontes de fibrose porto-portais precoces;\n- Arquitetura dos lóbulos hepáticos inicialmente preservada;\n2) CONTRASTE COM A HEPATITE NEONATAL IDIOPÁTICA:\n- Na hepatite neonatal há desarranjo difuso da arquitetura lobular, necrose hepatocelular focal e transformação em CÉLULAS GIGANTES MULTINUCLEADAS difusas, com pouca ou nenhuma proliferação ductular portal;\n3) IMPORTÂNCIA DA BIÓPSIA:\n- A biópsia precoce evita laparotomias desnecessárias em doenças clínicas (como hepatite ou doenças metabólicas) e, por outro lado, autoriza o encaminhamento cirúrgico imediato para a colangiografia intraoperatória e portoenterostomia de Kasai nos casos de AVBEH.',
    comentariosAlternativas: {
      A: 'Correta. Proliferação ductular biliar portal + trombos biliares + fibrose portal compõem o tripé histológico confirmatório de AVBEH na biópsia.',
      B: 'Incorreta. Tecido ósseo no fígado é aberração descritiva.',
      C: 'Incorreta. Abscesso amebiano hepático é patologia adquirida tropical destrutiva sem relação com a colangiopatia congênita.',
      D: 'Incorreta. O fígado colestático na AVBEH apresenta lesões histológicas exuberantes.',
    },
  },
  {
    id: 'ped-neo-069',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Portoenterostomia de Kasai e a "Janela de Oportunidade" dos 60 Dias',
    isRevisao: false,
    enunciado:
      'Um lactente com diagnóstico confirmado de Atresia de Vias Biliares Extra-Hepáticas é agendado para o tratamento cirúrgico padrão de primeira linha. Qual é o nome do procedimento cirúrgico preconizado, como ele é executado e por que existe uma "JANELA DE OPORTUNIDADE" CRÍTICA (idealmente antes dos 60 dias de vida) para a sua realização?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Cirurgia de Kasai (Portoenterostomia Hepática com anastomose em Y de Roux na placa hilar hepática); a cirurgia deve ser realizada idealmente ANTES DOS 60 DIAS DE VIDA (preferencialmente entre 30 e 45 dias), pois o atraso além desse período permite a progressão irreversível da fibrose hepática para cirrose biliar secundária terminal, com queda drástica das taxas de restauração do fluxo biliar.',
      },
      {
        id: 'B',
        texto:
          'Transplante cardíaco com ligadura do esôfago; a cirurgia deve ser realizada aos 18 anos de vida.',
      },
      {
        id: 'C',
        texto:
          'Apenas drenagem externa da vesícula biliar com cateter de demora mantido por 10 anos.',
      },
      {
        id: 'D',
        texto:
          'Ressecção total do fígado sem reconstrução, pois o baço assume a produção de bile.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A CIRURGIA DE KASAI (PORTOENTEROSTOMIA DE KASAI) é uma das cirurgias mais cobradas em provas de Residência Médica em todo o Brasil:\n1) TÉCNICA CIRÚRGICA DE KASAI:\n- Desenvolvida pelo cirurgião japonês Morio Kasai na década de 1950;\n- Consiste na ressecção completa de todo o remanescente fibroso da via biliar extra-hepática até o nível da placa hilar (porta hepatis);\n- Na placa hilar existem delgadíssimos ductículos biliares microscópicos pérvios que ainda drenam bile do fígado;\n- Confecciona-se uma alça de jejuno desfuncionalizada em "Y de Roux" (com cerca de 40 cm) e realiza-se a anastomose direta da mucosa jejunal ao tecido conjuntivo da placa hilar (PORTOENTEROSTOMIA), permitindo que a bile flua diretamente para o tubo digestivo;\n2) A "JANELA DE OURO" DOS 60 DIAS DE VIDA:\n- A cirrose biliar na AVBEH é um processo inflamatório em contagem regressiva acelerada;\n- OPERADOS < 30 A 45 DIAS: Sucesso na drenagem biliar em > 80% a 90% dos casos;\n- OPERADOS ENTRE 60 E 90 DIAS: Sucesso cai para cerca de 40% a 50%;\n- OPERADOS APÓS 90 DIAS: Sucesso cai para menos de 10% a 20%, pois a fibrose portal já evoluiu para cirrose com hipertensão portal estabelecida, sendo o transplante hepático o destino inevitável;\n- Portanto, a colestase neonatal é uma URGÊNCIA INVESTIGATIVA: a investigação deve ser concluída antes de 30-45 dias de vida.',
    comentariosAlternativas: {
      A: 'Correta. Portoenterostomia de Kasai em Y de Roux; janela crítica < 60 dias para evitar cirrose biliar secundária irreversível.',
      B: 'Incorreta. AVBEH é doença hepatobiliar tratada com Kasai, sem relação com transplante cardíaco aos 18 anos.',
      C: 'Incorreta. Na AVBEH a vesícula é atrófica ou inexistente e o ducto hepático está obliterado; colecistostomia é inútil.',
      D: 'Incorreta. Deixar o paciente anéfrico/an-hepático causa óbito imediato.',
    },
  },
  {
    id: 'ped-neo-070',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Cisto de Colédoco (Dilatação Congênita das Vias Biliares) - Diagnóstico e Conduta',
    isRevisao: false,
    enunciado:
      'Lactente de 2 meses de vida é levado à emergência pediátrica com quadro de icterícia colestática flutuante, irritabilidade com choro intermitente sugestivo de dor abdominal e episódios de fezes descoradas. Ao exame físico, o pediatra palpa uma massa cística, lisa e móvel no hipocôndrio direito. A ultrassonografia e a Colangiorressonância confirmam dilatação fusiforme volumosa do ducto colédoco extra-hepático (Cisto de Colédoco Tipo I de Todani), sem sinais de atresia biliar. Qual é a conduta cirúrgica definitiva preconizada para o Cisto de Colédoco e qual o risco tardio mais temido se a lesão não for ressecada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A conduta definitiva consiste na RESSECÇÃO CIRÚRGICA COMPLETA do cisto associada à colecistectomia e reconstrução do trânsito biliar com Hepaticojejunostomia em Y de Roux; a ressecção total é mandatória devido ao risco elevado de transformação maligna para COLANGIOCARCINOMA ao longo da vida decorrente da displasia crônica da mucosa cística.',
      },
      {
        id: 'B',
        texto:
          'Apenas drenagem percutânea com agulha fina sem nunca retirar a parede do cisto.',
      },
      {
        id: 'C',
        texto:
          'Tratamento conservador exclusivo com xarope de amoxicilina por 10 anos.',
      },
      {
        id: 'D',
        texto:
          'O cisto de colédoco é uma alteração inofensiva que desaparece espontaneamente na puberdade.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O CISTO DE COLÉDOCO (Dilatação Congênita das Vias Biliares) é o principal diagnóstico diferencial cirúrgico da atresia de vias biliares:\n1) FISIOPATOLOGIA E CLASSIFICAÇÃO (TODANI):\n- Anomalia congênita da junção biliopancreática (canal comum longo entre o ducto colédoco e o ducto de Wirsung pancreático fora da parede duodenal);\n- Isso permite o refluxo livre de enzimas pancreáticas ativadas para o interior da via biliar, causando inflamação química crônica, fraqueza parietal e dilatação cística progressiva (Tipo I fusiforme é a mais prevalente, correspondendo a > 80% dos casos);\n2) QUADRO CLÍNICO CLÁSSICO:\n- Tríade clássica (presente em 20-30% dos pacientes): ICTERÍCIA + DOR ABDOMINAL + MASSA PALPÁVEL NO QUADRANTE SUPERIOR DIREITO;\n- No lactente jovem, manifesta-se predominantemente como colestase neonatal, hepatomegalia e massa cística;\n3) TRATAMENTO CIRÚRGICO PADRÃO-OURO:\n- RESSECÇÃO CIRÚRGICA TOTAL DO CISTO + COLECISTECTOMIA + HEPATICOJEJUNOSTOMIA EM Y DE ROUX;\n- Por que NÃO fazer apenas anastomose cisto-duodenal ou drenagem (técnicas antigas de cistoduodenostomia)?\n  * A parede do cisto possui epitélio displásico crônico submetido a irritação química;\n  * Deixar a parede do cisto in situ confere um risco assustador de COLANGIOCARCINOMA (câncer de vias biliares) na idade adulta (risco de 10% a 30%), além de colangites bacterianas de repetição e pancreatites.',
    comentariosAlternativas: {
      A: 'Correta. Ressecção completa do cisto com hepaticojejunostomia em Y de Roux é a conduta para prevenir colangiocarcinoma e colangite.',
      B: 'Incorreta. Punção com agulha esvazia momentaneamente o cisto, mas recidiva e não previne câncer.',
      C: 'Incorreta. Não há tratamento clínico para anomalia estrutural cística de vias biliares.',
      D: 'Incorreta. Não regride espontaneamente e evolui para cirrose biliar e malignização se não operado.',
    },
  },
  {
    id: 'ped-neo-071',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome de Crigler-Najjar Tipo I vs Tipo II (Arias)',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo, sem incompatibilidade sanguínea e sem sinais de hemólise, evolui nas primeiras semanas com hiperbilirrubinemia indireta grave e refratária (Bilirrubina Indireta variando de 25 a 35 mg/dL), sem qualquer componente de colestase. Os pais relatam história familiar de consanguinidade. A biópsia hepática revela parênquima histologicamente normal, porém a análise genética molecular detecta mutação no gene UGT1A1 com AUSÊNCIA COMPLETA (0%) de atividade da enzima glicuroniltransferase. Qual é o diagnóstico e qual é a diferença fundamental em relação à Síndrome de Crigler-Najjar Tipo II (Síndrome de Arias)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome de Crigler-Najjar Tipo I; trata-se de ausência total da enzima UGT1A1 com altíssimo risco permanente de Kernicterus, NÃO respondendo ao Fenobarbital e exigindo fototerapia intensiva contínua (12-16h/dia) até a realização de Transplante Hepático; enquanto o Tipo II (Síndrome de Arias) possui atividade enzimática residual (~10%) e RESPONDE ao Fenobarbital com queda marcante dos níveis de bilirrubina.',
      },
      {
        id: 'B',
        texto:
          'Síndrome de Gilbert congênita grave, que se cura espontaneamente com uso de vitamina C.',
      },
      {
        id: 'C',
        texto:
          'Síndrome de Rotor, doença caracterizada por colestase direta e urina preta por melanina.',
      },
      {
        id: 'D',
        texto:
          'Síndrome de Dubin-Johnson com defeito exclusivo na excreção de bilirrubina conjugada.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Os distúrbios hereditários do metabolismo da bilirrubina indireta são temas de alto rendimento:\n1) SÍNDROME DE CRIGLER-NAJJAR TIPO I:\n- Herança autossômica recessiva grave;\n- AUSÊNCIA COMPLETA (0%) de atividade da enzima UGT1A1;\n- Hiperbilirrubinemia INDIRETA extrema (BT habitualmente de 20 a 50 mg/dL) que surge logo nos primeiros dias de vida e persiste por toda a vida;\n- A bile é incolor (desprovida de bilirrubina conjugada);\n- RESPOSTA AO FENOBARBITAL: NENHUMA (a enzima não existe, logo indutores enzimáticos não têm efeito);\n- Risco iminente e contínuo de ENCEFALOPATIA BILIRRUBÍNICA (KERNICTERUS) e morte neurológica;\n- Manejo: Fototerapia intensiva contínua prolongada (12 a 16 horas por dia sob berço especial) e EXANGUINOTRANSFUSÕES durante crises hemolíticas/infecciosas; o TRATAMENTO DEFINITIVO CURATIVO é o TRANSPLANTE HEPÁTICO;\n2) SÍNDROME DE CRIGLER-NAJJAR TIPO II (SÍNDROME DE ARIAS):\n- Atividade residual da UGT1A1 presente (cerca de 5% a 10% da atividade normal);\n- Níveis de bilirrubina indireta mais baixos (habitualmente entre 8 e 20 mg/dL);\n- TESTE DO FENOBARBITAL: POSITIVO! O fenobarbital induz a transcrição do gene UGT1A1 residual, reduzindo os níveis de bilirrubina sérica em mais de 25% a 30%, mantendo o paciente protegido de kernicterus na maioria dos casos;\n3) SÍNDROMES DE ROTOR E DUBIN-JOHNSON:\n- Cursam com hiperbilirrubinemia DIRETA (conjugada) por defeitos de transporte intracelular e excreção canalicular, não indireta.',
    comentariosAlternativas: {
      A: 'Correta. Crigler-Najjar Tipo I = ausência total de UGT1A1, sem resposta ao fenobarbital, alto risco de kernicterus e indicação de transplante hepático.',
      B: 'Incorreta. Gilbert cursa com níveis leves de bilirrubina (< 3-4 mg/dL) assintomáticos, sem risco de kernicterus.',
      C: 'Incorreta. Rotor é defeito de bilirrubina conjugada (direta).',
      D: 'Incorreta. Dubin-Johnson é defeito no transportador canalicular MRP2 de bilirrubina direta.',
    },
  },
  {
    id: 'ped-neo-072',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome de Gilbert - Características Genéticas e Evolução Pediátrica',
    isRevisao: false,
    enunciado:
      'Um escolar de 8 anos apresenta episódios transitórios de icterícia escleral leve sem qualquer outro sintoma durante quadros infecciosos virais respiratórios febris ou após jejum prolongado. A investigação laboratorial revela: Bilirrubina Total de 2,8 mg/dL (Indireta de 2,4 mg/dL), enzimas hepáticas normais, ausência de hemólise (hemoglobina e reticulócitos normais) e ultrassonografia de abdome inocente. O teste genético demonstra polimorfismo no promotor do gene UGT1A1 [alelo A(TA)7TAA em homozigose]. Qual é a interpretação clínica e a orientação adequada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome de Gilbert; trata-se de uma condição genética benigna extremamente comum (prevalência de 5% a 10% na população) decorrente da redução moderada da transcrição da enzima UGT1A1 (~30% da função normal), caracterizada por hiperbilirrubinemia indireta leve flutuante deflagrada por estresse, infecções ou jejum, NÃO necessitando de tratamento medicamentoso nem restrições de rotina.',
      },
      {
        id: 'B',
        texto:
          'Cirrose hepática juvenil fulminante que exige transplante hepático imediato.',
      },
      {
        id: 'C',
        texto:
          'Hepatite autoimune Tipo 1 que exige corticoterapia com prednisona e azatioprina por tempo indeterminado.',
      },
      {
        id: 'D',
        texto:
          'Doença de Wilson descompensada com indicação de penicilamina urgente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A SÍNDROME DE GILBERT é a causa hereditária mais comum de hiperbilirrubinemia do ser humano:\n1) BASE GENÉTICA:\n- Mutação no promotor da região TATA-box do gene UGT1A1 (inserção de um par de bases extra TA: A(TA)7TAA em vez do normal A(TA)6TAA) com herança autossômica recessiva;\n- Reduz a eficiência da transcrição gênica da UGT1A1 para cerca de 30% da capacidade normal;\n2) MANIFESTAÇÃO CLÍNICA:\n- Frequentemente diagnosticada na adolescência ou na infância durante exames laboratoriais de rotina ou após estresse físico;\n- Cursa com icterícia leve (BT quase sempre < 3 a 4 mg/dL com predomínio de bilirrubina indireta > 80%);\n- FATORES DESENCADEANTES CLÁSSICOS: Jejum prolongado (aumento de ácidos graxos livres que competem pela captação hepática), desidratação, privação de sono, estresse cirúrgico ou emocional e infecções febris intercorrentes;\n- Ausência completa de dano hepatocelular (transaminases normais, fosfatase alcalina normal, sem hemólise e sem colestase);\n3) ORIENTAÇÃO MÉDICA:\n- TRANQUILIZAR O PACIENTE E FAMÍLIA: não é uma doença, mas uma variante benigna do metabolismo;\n- Não evolui para insuficiência hepática nem cirrose;\n- Não requer dieta restritiva, exames invasivos ou medicamentos (apenas evitar jejum desnecessário e hidratação adequada).',
    comentariosAlternativas: {
      A: 'Correta. Síndrome de Gilbert é alteração benigna comum por mutação no promotor de UGT1A1; cursa com icterícia indireta leve (< 3-4 mg/dL) sem necessidade de tratamento.',
      B: 'Incorreta. Gilbert é condição benigna que não causa cirrose nem falência hepática.',
      C: 'Incorreta. Não há inflamação autoimune nem transaminases elevadas.',
      D: 'Incorreta. Wilson cursa com anéis de Kayser-Fleischer, ceruloplasmina baixa e cobre urinário alto em maiores de 5 anos.',
    },
  },
  {
    id: 'ped-neo-073',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Causas Infecciosas de Colestase - Infecções Congênitas (TORCH) e Sepse Urinária',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo de 15 dias de vida é levado à emergência por icterícia colestática (BD 5,2 mg/dL), hepatoesplenomegalia e lesões cutâneas purpúricas petequiais difusas ("aspecto em bolo de mirtilo" / blueberry muffin baby). A tomografia de crânio demonstra calcificações intracranianas periventriculares e o fundo de olho revela coriorretinite. Além das infecções congênitas do grupo TORCH (especialmente Citomegalovírus), qual outra infecção bacteriana bacterêmica neonatal frequente pode se manifestar precocemente com colestase hepática associada à ação de endotoxinas bacterianas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sepse neonatal de foco urinário por Escherichia coli (ou outras enterobactérias Gram-negativas), cujas endotoxinas (LPS) inibem diretamente as bombas transportadoras canaliculares biliares (como a BSEP e MRP2), provocando colestase neonatal grave na ausência de obstrução mecânica.',
      },
      {
        id: 'B',
        texto:
          'Faringite estreptocócica por Streptococcus pyogenes com escarlatina infantil.',
      },
      {
        id: 'C',
        texto:
          'Tétano neonatal adquirido por corte do cordão com tesoura enferrujada.',
      },
      {
        id: 'D',
        texto:
          'Gengivite herpética primária que obstrui a traqueia por edema de glote.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A interface entre INFECÇÕES e COLESTASE NEONATAL é um tema de extrema relevância prática:\n1) INFECÇÕES CONGÊNITAS (GRUPO TORCH / STORCH):\n- CITOMEGALOVÍRUS (CMV): principal causa viral congênita de colestase; tríade clássica: icterícia colestática precoce com hepatoesplenomegalia, petéquias purpúricas generalizadas (erupção de eritropoiese dérmica "blueberry muffin") e CALCIFICAÇÕES PERIVENTRICULARES com microcefalia e surdez neurossensorial;\n- Sífilis congênita (hepatite sifilítica, rinite serossanguinolenta, lesões palmoplantares);\n- Toxoplasmose congênita (calcificações difusas espalhadas pelo parênquima, coriorretinite, hidrocefalia);\n2) SEPSE BACTERIANA NEONATAL E INFECÇÃO DO TRATO URINÁRIO (ITU POR E. COLI):\n- A infecção urinária por Escherichia coli em neonatos e lactentes jovens pode manifestar-se isoladamente como ICTERÍCIA COLESTÁTICA com vômitos e recusa alimentar, sem febre marcante;\n- FISIOPATOLOGIA DA COLESTASE INFLAMATÓRIA POR ENDOTOXINA:\n  * O lipopolissacarídeo bacteriano (LPS / endotoxina de Gram-negativos) e as citocinas pró-inflamatórias do hospedeiro (TNF-alfa, IL-1, IL-6) suprimem diretamente a transcrição e função dos transportadores canaliculares da membrana hepatocitária (BSEP - bomba de exportação de sais biliares, e MRP2);\n  * A bile não consegue ser ejetada nos canalículos, ocorrendo colestase funcional intra-hepática severa que se resolve rapidamente após a antibioticoterapia bactericida adequada.',
    comentariosAlternativas: {
      A: 'Correta. Sepse/ITU por E. coli com liberação de endotoxinas (LPS) inibe bombas canaliculares gerando colestase funcional intra-hepática.',
      B: 'Incorreta. Faringite estreptocócica é excepcional em neonatos e não causa colestase neonatal.',
      C: 'Incorreta. O tétano neonatal causa hipertonia muscular, trismo e espasmos, sem colestase típica.',
      D: 'Incorreta. Gengivoestomatite ocorre em lactentes maiores e escolares, sem relação com colestase neonatal.',
    },
  },
  {
    id: 'ped-neo-074',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Galactosemia Clássica - Icterícia Mista, Insuficiência Hepática e Sepse por E. coli',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo, com triagem neonatal biológica ainda pendente, nasce vigoroso e inicia aleitamento materno. No 5º dia de vida, desenvolve vômitos após as mamadas, diarreia, letargia acentuada, recusa alimentar, icterícia mista intensa (com BD e BI elevadas) e hepatomegalia volumosa. Os exames evidenciam disfunção hepática severa com coagulopatia (alargamento importante do TAP/INR refratário à vitamina K), hipoglicemia, acidose metabólica e hemocultura positiva para Escherichia coli. Ao exame oftalmológico, observa-se opacificação precoce dos cristalinos ("catarata em gota de óleo"). Qual é o erro inato do metabolismo causador deste quadro catastrófico e qual a conduta dietética imediata?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Galactosemia Clássica (deficiência da enzima galactose-1-fosfato uridiltransferase - GALT); a conduta imediata e salvadora de vida é a SUSPENSÃO IMEDIATA DO ALEITAMENTO MATERNO e de qualquer fórmula com lactose, substituindo-a por fórmula infantil à base de proteína isolada de soja (isenta de galactose e lactose), associada a antibioticoterapia parenteral para sepse por E. coli.',
      },
      {
        id: 'B',
        texto:
          'Fenilcetonúria clássica; conduta é aumentar as mamadas com leite materno a cada 30 minutos.',
      },
      {
        id: 'C',
        texto:
          'Deficiência congênita de lactase transitória; conduta é oferecer leite condensado diluído.',
      },
      {
        id: 'D',
        texto:
          'Doença da urina do xarope de bordo pura sem necessidade de alteração dietética.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A GALACTOSEMIA CLÁSSICA é uma emergência metabólica neonatal gravíssima cobrada recorrentemente em provas:\n1) FISIOPATOLOGIA:\n- Doença autossômica recessiva causada pela deficiência da enzima GALACTOSE-1-FOSFATO URIDILTRANSFERASE (GALT);\n- A lactose (açúcar presente em grande quantidade no leite materno e fórmulas lácteas convencionais) é clivada no intestino em glicose e galactose;\n- Na ausência da enzima GALT, há acúmulo celular massivo e tóxico de GALACTOSE-1-FOSFATO e de galactitol no fígado, cérebro, rins e cristalino;\n2) MANIFESTAÇÕES CLÍNICAS CARDINAIS:\n- O bebê nasce normal, mas adoece nos primeiros dias logo após o início do aleitamento com leite contendo lactose;\n- Icterícia mista (com componente de colestase hepatocelular grave);\n- Hepatomegalia de rápida instalação com INSUFICIÊNCIA HEPÁTICA AGUDA: coagulopatia grave (TAP prolongado que não corrige com vitamina K parenteral), hipoalbuminemia e ascite;\n- Hipoglicemia e acidose metabólica;\n- CATARATA PRECOCE EM "GOTA DE ÓLEO" (por acúmulo osmótico de galactitol no cristalino);\n- ASSOCIAÇÃO CLÁSSICA E PATOGNOMÔNICA: Choque séptico fulminante por ESCHERICHIA COLI (a galactose livre deprime a função fagocitária dos leucócitos e estimula o crescimento de E. coli);\n3) CONDUTA SALVADORA IMEDIATA:\n- SUSPENSÃO COMPLETA E IMEDIATA DO ALEITAMENTO MATERNO e de qualquer derivado lácteo com lactose;\n- Alimentação exclusiva com fórmula isenta de lactose e galactose (fórmula infantil à base de soja);\n- Antibioticoterapia venosa imediata para sepse por E. coli e suporte intensivo.',
    comentariosAlternativas: {
      A: 'Correta. Galactosemia clássica (deficiência de GALT): icterícia com falência hepática, catarata em gota de óleo e sepse por E. coli; exige suspensão imediata de lactose/leite materno e uso de fórmula de soja.',
      B: 'Incorreta. Fenilcetonúria não causa catarata precoce nem insuficiência hepática fulminante por sepse bacteriana na primeira semana.',
      C: 'Incorreta. Deficiência primária congênita de lactase não causa falência hepática grave com coagulopatia.',
      D: 'Incorreta. Xarope de bordo (MSUD) causa encefalopatia metabólica com odor adocicado na urina, sem catarata precoce nem sepse por E. coli.',
    },
  },
  {
    id: 'ped-neo-075',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Algoritmo Diagnóstico Integrado da Icterícia Neonatal para Provas de Residência',
    isRevisao: false,
    enunciado:
      'Para consolidar a propedêutica racional da Icterícia Neonatal em concursos médicos exigentes (ENARE, USP, UNIFESP, AMRIGS), um preceptor estrutura um fluxograma decisório baseado na idade de início e nas frações de bilirrubina. Assinale a alternativa que reproduz com fidelidade irrefutável a rota diagnóstica e a conduta preconizada pelas diretrizes pediátricas:',
    alternativas: [
      {
        id: 'A',
        texto:
          '1) Icterícia com < 24 horas de vida: sempre patológica -> investigar hemólise imune imediata (Coombs direto, tipagem, reticulócitos) e instalar fototerapia intensiva precoce; 2) Icterícia com > 24-36 horas de vida: dosar frações de bilirrubina -> se Bilirrubina Indireta aumentada e paciente hidratado com bom peso = icterícia fisiológica ou do leite materno (manter amamentação); se perda de peso > 10% e desidratação = icterícia da inanição (corrigir pega/mamadas); 3) Se Bilirrubina Direta > 1,0 mg/dL com fezes acólicas e colúria = colestase patológica -> USG de jejum de urgência e biópsia hepática para afastar Atresia de Vias Biliares antes de 60 dias (Cirurgia de Kasai).',
      },
      {
        id: 'B',
        texto:
          '1) Toda icterícia no primeiro mês deve ser tratada com banhos de sol através do vidro da janela ao meio-dia; 2) Se o bebê ficar amarelo nas primeiras 2 horas de vida, aguardar 60 dias para colher sangue; 3) A atresia de vias biliares é tratada com colírio de corticoide.',
      },
      {
        id: 'C',
        texto:
          '1) A presença de fezes brancas é fisiológica até os 5 anos de idade; 2) A bilirrubina direta só é perigosa se o paciente tiver febre de 42 °C; 3) Nunca realizar ultrassom em lactentes.',
      },
      {
        id: 'D',
        texto:
          '1) Suspender o aleitamento materno em 100% dos recém-nascidos ictéricos; 2) Prescrever fenobarbital profilático no primeiro dia de vida para todas as crianças na maternidade.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Esta questão final sintetiza perfeitamente o ALGORITMO INTEGRADO DE ICTERÍCIA NEONATAL cobrado nas provas de residência médica:\n1) EIXO CRONOLÓGICO DE INÍCIO:\n- < 24 HORAS DE VIDA: EMERGÊNCIA MÉDICA PATOLÓGICA -> Investigação hemolítica imune imediata (ABO, Rh, Coombs direto, hematócrito, reticulócitos) e fototerapia precoce;\n- > 24 A 36 HORAS DE VIDA: Dosagem de BST e frações;\n2) EIXO DA FRAÇÃO DE BILIRRUBINA:\n- PREDOMÍNIO DE BILIRRUBINA INDIRETA (NÃO CONJUGADA):\n  * Avaliar perda de peso e estado de hidratação;\n  * Perda > 10% com desidratação e retardo meconial = ICTERÍCIA DA INANIÇÃO / DO ALEITAMENTO (ajustar pega, aumentar mamadas, fototerapia se limiar atingido);\n  * Hidratado, bom ganho de peso e início entre 3º-5º dia = ICTERÍCIA FISIOLÓGICA (acompanhamento clínico);\n  * Hidratado, excelente ganho ponderal e persistência na 2ª-3ª semana = ICTERÍCIA DO LEITE MATERNO (manter aleitamento materno exclusivo);\n- PREDOMÍNIO DE BILIRRUBINA DIRETA (CONJUGADA / COLESTASE: BD > 1,0 mg/dL):\n  * Pesquisar tríade: Acolia fecal + Colúria + Hepatomegalia;\n  * Investigação prioritária de ATRESIA DE VIAS BILIARES EXTRA-HEPÁTICAS: Ultrassonografia de abdome em jejum de 4h (sinal do cordão triangular e vesícula atrófica) e biópsia hepática;\n  * Objetivo máximo de saúde pública: CIRURGIA DE KASAI antes de 60 dias de vida para salvar o fígado da cirrose irreversível.',
    comentariosAlternativas: {
      A: 'Correta. Síntese perfeita do algoritmo oficial internacional e nacional da SBP para abordagem de icterícia indireta e colestase neonatal.',
      B: 'Incorreta. Banhos de sol são ineficazes e causam queimaduras solares e câncer de pele; condutas absurdas.',
      C: 'Incorreta. Fezes brancas (acolia) são sinal grave de obstrução biliar.',
      D: 'Incorreta. Suspender aleitamento de rotina é prejudicial e fenobarbital profilático universal é iatrogenia condenável.',
    },
  },
  {
    id: 'ped-neo-076',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Incompatibilidade Rh e Aloimunização',
    isRevisao: false,
    enunciado:
      'Primigesta de 28 anos, tipagem sanguínea O negativo com Coombs Indireto positivo na gestação com titulação 1:32, dá à luz por parto cesáreo eletivo a termo a um recém-nascido do sexo masculino, peso de 3.200 g, com tipagem A positivo. Com 6 horas de vida, o neonato desenvolve icterícia de progressão rápida até a raiz das coxas (Zona III de Kramer). O hemograma revela hemoglobina de 11,2 g/dL, hematócrito de 33%, reticulócitos de 14% e presença numerosa de eritroblastos no sangue periférico. A bilirrubina total é de 9,8 mg/dL (fração indireta de 9,2 mg/dL). O Teste de Antiglobulina Direto (Coombs Direto) do recém-nascido é fortemente positivo (4+/4+). Considerando a fisiopatologia e as características imunológicas da aloimunização Rh materno-fetal, assinale a alternativa correta.',
    alternativas: [
      {
        id: 'A',
        texto:
          'A destruição dos eritrócitos fetais é mediada por anticorpos maternos da classe IgG direcionados contra o antígeno D, que atravessam a barreira placentária e opsonizam as hemácias do concepto para destruição extravascular nos macrófagos do sistema reticuloendotelial esplênico.',
      },
      {
        id: 'B',
        texto:
          'A hemólise na doença hemolítica Rh é tipicamente intravascular mediada por IgM e ativação do complexo de ataque à membrana (C5b-9), provocando hemoglobinúria maciça e necrose tubular aguda nas primeiras horas.',
      },
      {
        id: 'C',
        texto:
          'A mãe pode ter sido sensibilizada durante a própria gestação atual sem nunca ter tido contato prévio com sangue Rh positivo, pois os anticorpos anti-D são naturais e congênitos, idênticos às iso-hemaglutininas anti-A e anti-B.',
      },
      {
        id: 'D',
        texto:
          'O Coombs Direto positivo no recém-nascido detecta anticorpos livres circulantes no soro do neonato, enquanto o Coombs Indireto materno avaliava anticorpos fixados à membrana eritrocitária materna.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A doença hemolítica perinatal por incompatibilidade Rh (antígeno D) é mediada por anticorpos maternos da classe IgG (especialmente subclasses IgG1 e IgG3). Ao contrário das iso-hemaglutininas naturais anti-A e anti-B (que são predominantemente da classe IgM), os anticorpos anti-D são adquiridos após exposição prévia a eritrócitos Rh positivos (parto prévio, abortamento, transfusão incompatível). Por serem da classe IgG, atravessam ativamente a barreira hematoplacentária via receptores Fc neonatais (FcRn). No concepto, os anticorpos anti-D ligam-se aos antígenos D na superfície dos eritrócitos fetais. Essas hemácias opsonizadas sofrem sequestro e hemólise extravascular no sistema reticuloendotelial (baço e fígado fetais), provocando anemia hemolítica progressiva, eritropoiese extramedular compensatória com reticulocitose e liberação maciça de precursores imaturos (eritroblastos), hepatoesplenomegalia e hiperbilirrubinemia não conjugada grave pós-natal. O Coombs Direto (TAD) do RN pesquisa anticorpos maternos fixados à superfície dos eritrócitos do neonato.',
    comentariosAlternativas: {
      A: 'Correta. A hemólise na aloimunização Rh é extravascular (esplênica) mediada por IgG anti-D que opsoniza os eritrócitos fetais.',
      B: 'Incorreta. A hemólise é extravascular no baço mediada por IgG, e não intravascular por ativação de complemento e IgM.',
      C: 'Incorreta. Anticorpos anti-D são imunes/adquiridos (requerem exposição prévia ao antígeno D); não são naturais.',
      D: 'Incorreta. O Coombs Direto (TAD) detecta anticorpos fixados na membrana das hemácias do RN; anticorpos livres no soro são pesquisados pelo Coombs Indireto.',
    },
  },
  {
    id: 'ped-neo-077',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Profilaxia da Aloimunização Rh',
    isRevisao: false,
    enunciado:
      'Gestante segundigesta, 29 anos, tipagem A negativo com Coombs Indireto negativo em todas as rotinas do pré-natal, dá à luz por parto vaginal normal a termo a um recém-nascido saudável, peso de 3.450 g, com tipagem A positivo e Coombs Direto negativo. Na 28ª semana de gestação, a paciente recebeu uma dose profilática de imunoglobulina humana anti-D (300 mcg). Diante desse cenário puerperal, qual é a conduta preconizada pelas diretrizes do Ministério da Saúde e da FEBRASGO/SBP para a prevenção de aloimunização eritrocitária materna?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar uma nova dose de imunoglobulina anti-D (300 mcg) por via intramuscular na puérpera em até 72 horas pós-parto, independentemente de ter recebido a dose antenatal na 28ª semana.',
      },
      {
        id: 'B',
        texto:
          'Não administrar a imunoglobulina no pós-parto, pois a dose recebida na 28ª semana de gestação confere proteção imunológica definitiva contra sensibilização futura.',
      },
      {
        id: 'C',
        texto:
          'Administrar a imunoglobulina anti-D diretamente no recém-nascido por via intravenosa, neutralizando os antígenos D circulantes antes da indução de resposta celular.',
      },
      {
        id: 'D',
        texto:
          'Aguardar 30 dias para repetir o Coombs Indireto na puérpera; caso positivo em titulação baixa, prescrever corticosteroide sistêmico e suspender o aleitamento materno.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A profilaxia da aloimunização Rh com imunoglobulina anti-D (RhIG, 300 mcg IM) é indicada para toda mulher Rh negativa com Coombs Indireto negativo (não sensibilizada) que der à luz um recém-nascido Rh positivo. A administração deve ser realizada preferencialmente nas primeiras 72 horas pós-parto (com benefício parcial demonstrado até 28 dias caso tenha havido omissão). A dose rotineira administrada na 28ª semana de gestação reduz a taxa de aloimunização antenatal (de 2% para 0,1%), mas NÃO substitui a dose puerperal, pois o momento do parto é quando ocorre o maior volume de hemorragia fetomaterna. A imunoglobulina anti-D liga-se aos eritrócitos Rh positivos fetais que ganharam a circulação materna, promovendo sua depuração rápida e mascarando os determinantes antigênicos antes que o sistema imunológico materno reconheça o antígeno D e produza clones de células B de memória.',
    comentariosAlternativas: {
      A: 'Correta. A dose puerperal de 300 mcg em até 72 horas é mandatória para puérpera Rh- não sensibilizada com filho Rh+, mesmo que tenha recebido a profilaxia na 28ª semana.',
      B: 'Incorreta. A dose antenatal de 28 semanas não dispensa a dose pós-parto, momento de maior troca sanguínea fetomaterna.',
      C: 'Incorreta. A imunoglobulina anti-D é administrada na mãe, nunca no recém-nascido (faria hemólise maciça no RN Rh+).',
      D: 'Incorreta. A conduta é administração precoce da imunoglobulina anti-D em até 72h; não se aguarda 30 dias e corticosteroide não tem papel profilático.',
    },
  },
  {
    id: 'ped-neo-078',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Incompatibilidade Materno-Fetal ABO',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo de 18 horas de vida, primogênito de mãe saudável de 24 anos com tipo sanguíneo O positivo, nasce de parto cesáreo sem intercorrências. O neonato apresenta grupo sanguíneo A positivo e desenvolve icterícia até o abdome (Zona II de Kramer). O pediatra solicita avaliação laboratorial que confirma hiperbilirrubinemia indireta com valor de 10,5 mg/dL. A mãe questiona aflita como o primeiro filho pode ter incompatibilidade sanguínea se ela nunca esteve grávida nem recebeu transfusão de sangue. Qual é a explicação fisiopatológica correta para essa ocorrência frequente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Mulheres do grupo sanguíneo O produzem naturalmente iso-hemaglutininas anti-A e anti-B que contêm uma fração substancial da classe IgG, capaz de atravessar a placenta mesmo na primeira gestação sem sensibilização prévia.',
      },
      {
        id: 'B',
        texto:
          'Houve necessariamente hemorragia fetomaterna oculta no primeiro trimestre da gestação que induziu sensibilização celular primária e produção acelerada de anticorpos IgG anti-A.',
      },
      {
        id: 'C',
        texto:
          'Os anticorpos maternos envolvidos na incompatibilidade ABO são exclusivamente da classe IgM, que atravessam a placenta por transporte ativo mediado por pinocitose celular no terceiro trimestre.',
      },
      {
        id: 'D',
        texto:
          'A incompatibilidade ABO apenas se manifesta clinicamente se a gestante for concomitantemente portadora de deficiência congênita de transportadores de bilirrubina (síndrome de Gilbert).',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Ao contrário da incompatibilidade Rh (que requer sensibilização prévia por eritrócitos Rh positivos estranhos), a incompatibilidade ABO acomete com frequência o PRIMEIRO FILHO (em cerca de 40 a 50% dos casos). Indivíduos com sangue tipo O entram em contato ao longo da vida com antígenos ambientais semelhantes aos antígenos A e B (presentes em alimentos, bactérias do trato gastrointestinal como E. coli e vírus). Por isso, indivíduos do grupo O produzem constitutivamente iso-hemaglutininas anti-A e anti-B não apenas da classe IgM, mas também frações significativas da classe IgG. Como os anticorpos IgG ultrapassam a placenta pela via do receptor FcRn, eles alcançam o feto na primeira gestação. No entanto, a doença costuma ser mais branda que a Rh porque: 1) os antígenos A e B estão fracamente expressos nas hemácias neonatais; 2) esses antígenos estão presentes em tecidos e secreções fetais, neutralizando grande parte dos anticorpos maternos antes que atinjam as hemácias.',
    comentariosAlternativas: {
      A: 'Correta. Mães tipo O produzem naturalmente anticorpos IgG anti-A e anti-B gerados por imunização cruzada ambiental, permitindo acometimento no primeiro conceptos.',
      B: 'Incorreta. Não há necessidade de hemorragia fetomaterna ou sensibilização prévia por gravidez na incompatibilidade ABO.',
      C: 'Incorreta. Anticorpos IgM são pentaméricos e não ultrapassam a barreira placentária; a hemólise ocorre pela fração IgG.',
      D: 'Incorreta. A síndrome de Gilbert é uma mutação do promotor da UGT1A1 e nada tem a ver com a fisiopatologia imune da incompatibilidade ABO.',
    },
  },
  {
    id: 'ped-neo-079',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico Laboratorial da Incompatibilidade ABO',
    isRevisao: false,
    enunciado:
      'Recém-nascido de termo, 24 horas de vida, filho de mãe O positivo e pai B positivo, é avaliado por icterícia de início com 14 horas de vida. A dosagem de bilirrubina total é de 11,5 mg/dL (BI = 10,9 mg/dL). A tipagem do RN é B positivo. O hemograma demonstra Hb de 13,8 g/dL, reticulócitos de 7,5% e o esfregaço de sangue periférico revela policromatofilia e marcante presença de microesferócitos. O Teste de Coombs Direto (TAD) foi realizado em tubo e resultou fracamente positivo (+/4+). Com relação aos achados laboratoriais típicos da doença hemolítica por incompatibilidade ABO, assinale a assertiva correta.',
    alternativas: [
      {
        id: 'A',
        texto:
          'A presença de microesferócitos no sangue periférico e o Coombs Direto fracamente positivo ou até mesmo falso-negativo são achados característicos da incompatibilidade ABO, decorrentes da menor densidade de sítios antigênicos A/B na hemácia neonatal.',
      },
      {
        id: 'B',
        texto:
          'O achado de microesferócitos exclui peremptoriamente a incompatibilidade ABO, confirmando o diagnóstico genético de esferocitose hereditária autossômica dominante.',
      },
      {
        id: 'C',
        texto:
          'Um Coombs Direto fracamente positivo invalida a etiologia imunológica da icterícia, devendo-se investigar exclusivamente infecção congênita por citomegalovírus.',
      },
      {
        id: 'D',
        texto:
          'Na incompatibilidade ABO, o Coombs Direto é obrigatoriamente 4+/4+ positivo em 100% dos recém-nascidos afetados, sendo a técnica por gel-teste contraindicada no período neonatal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'No diagnóstico laboratorial da doença hemolítica por incompatibilidade ABO, os achados clássicos são: 1) Presença marcante de MICROESFERÓCITOS no esfregaço de sangue periférico (os macrófagos esplênicos removem porções da membrana eritrocitária opsonizada por IgG anti-A ou anti-B, transformando as hemácias bicôncavas em esferócitos menores e rígidos); 2) Coombs Direto (TAD) FRACAMENTE POSITIVO (+/4+) ou até mesmo NEGATIVO no método tradicional em tubo, devido à menor quantidade e espaçamento dos antígenos A e B nas hemácias neonatais comparadas ao adulto e à fixação mais fraca dos anticorpos; 3) Reticulocitose moderada e policromatofilia. A eluição de anticorpos das hemácias do neonato (eluato) ou a pesquisa de anticorpos pelo gel-teste aumentam a sensibilidade diagnóstica.',
    comentariosAlternativas: {
      A: 'Correta. Microesferócitos no sangue periférico e Coombs Direto fracamente positivo ou negativo são a marca registrada da incompatibilidade ABO.',
      B: 'Incorreta. Microesferócitos são extremamente comuns na hemólise imune ABO pela remoção parcial de membrana por macrófagos esplênicos.',
      C: 'Incorreta. O Coombs direto na incompatibilidade ABO é classicamente fracamente positivo ou até negativo.',
      D: 'Incorreta. O Coombs direto na incompatibilidade ABO raramente é 4+/4+ (isso é típico da incompatibilidade Rh). O teste em gel é amplamente utilizado.',
    },
  },
  {
    id: 'ped-neo-080',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico Diferencial: Incompatibilidade Rh vs ABO',
    isRevisao: false,
    enunciado:
      'Em uma enfermaria de alojamento conjunto, o médico preceptor discute com os residentes as diferenças entre a Incompatibilidade Rh e a Incompatibilidade ABO na gênese da doença hemolítica perinatal. Assinale a alternativa que correlaciona de maneira correta e precisa as características clínicas, hematológicas e imuno-hematológicas dessas duas patologias.',
    alternativas: [
      {
        id: 'A',
        texto:
          'A incompatibilidade Rh requer sensibilização prévia materna, cursa com anemia hemolítica mais grave, Coombs Direto fortemente positivo e abundância de eritroblastos no sangue periférico; já a incompatibilidade ABO frequentemente acomete primogênitos, é mais branda, cursa com microesferócitos e Coombs Direto fracamente positivo ou negativo.',
      },
      {
        id: 'B',
        texto:
          'A incompatibilidade ABO é a principal causa de hidropisia fetal e óbito intrauterino, ao passo que a incompatibilidade Rh manifesta-se exclusivamente no período pós-natal com icterícia leve.',
      },
      {
        id: 'C',
        texto:
          'Na incompatibilidade ABO, o Coombs Indireto materno é sempre fortemente positivo com titulações superiores a 1:64, sendo exame de rotina mandatória no pré-natal de todas as gestantes O positivo.',
      },
      {
        id: 'D',
        texto:
          'A administração de imunoglobulina anti-D após o parto é eficaz e recomendada na prevenção tanto da incompatibilidade Rh quanto da incompatibilidade ABO em mães O negativo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Esta questão consolida a clássica diferenciação cobrada em concursos de residência médica:\n- INCOMPATIBILIDADE Rh:\n  * Requer sensibilização prévia (geralmente poupa o primeiro filho);\n  * Gravidade clínica elevada: anemia precoce grave, risco de hidropisia fetal (anasarca por falência hepática/cardíaca fetal);\n  * Coombs Direto do RN: Fortemente positivo (3+ a 4+);\n  * Sangue periférico: Eritroblastose acentuada (inúmeros eritroblastos circulantes por eritropoiese extramedular);\n  * Profilaxia eficaz disponível (imunoglobulina anti-D).\n- INCOMPATIBILIDADE ABO:\n  * Pode ocorrer na primeira gestação (40-50% dos casos são primogênitos);\n  * Gravidade habitualmente leve a moderada, hidropisia é excepcional;\n  * Coombs Direto do RN: Fracamente positivo (1+) ou falso-negativo;\n  * Sangue periférico: Presença característica de MICROESFERÓCITOS;\n  * Não há indicação nem profilaxia imunológica disponível.',
    comentariosAlternativas: {
      A: 'Correta. Comparação clássica e precisa dos mecanismos, gravidade, Coombs e achados no esfregaço periférico de ambas as doenças.',
      B: 'Incorreta. É a incompatibilidade Rh a causa clássica de hidropisia fetal imune e morte fetal intrauterina por anemia grave.',
      C: 'Incorreta. Não se realiza rotina de Coombs indireto para rastreio de incompatibilidade ABO em gestantes O positivo no pré-natal.',
      D: 'Incorreta. A imunoglobulina anti-D protege exclusivamente contra o antígeno D (Rh); não tem efeito algum contra incompatibilidade ABO.',
    },
  },
  {
    id: 'ped-neo-081',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Deficiência de G6PD no Neonato',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo do sexo masculino, de ascendência mediterrânea, sem histórico familiar conhecido de doenças hematológicas, nasce vigoroso de mãe O positivo e RN O positivo com Coombs Direto negativo. Com 48 horas de vida, apresenta icterícia moderada que se intensifica subitamente com 72 horas, atingindo níveis de bilirrubina total de 19,5 mg/dL (BI = 18,7 mg/dL). O hemograma revela Hb = 11,5 g/dL, contagem de reticulócitos de 11% e Coombs Direto negativo persistente. A mãe relata que utilizou naftalina nos armários das roupas do bebê e que o recém-nascido foi exposto a essas vestimentas. Suspeita-se de Deficiência de Glicose-6-Fosfato Desidrogenase (G6PD). Qual é a fisiopatologia que explica a hemólise aguda e a icterícia nessa enzimopatia eritrocitária?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A G6PD é a enzima limitante da via das pentoses-fosfato, responsável por produzir NADPH para manter a glutationa no estado reduzido; sua deficiência impede a neutralização de peróxidos gerados por estresse oxidativo, culminando em desnaturação da hemoglobina e lise eritrocitária.',
      },
      {
        id: 'B',
        texto:
          'A deficiência de G6PD acarreta falência primária da glicólise anaeróbica com depleção de ATP celular, levando ao colapso da bomba de Na+/K+ ATPase e balonamento osmótico das hemácias.',
      },
      {
        id: 'C',
        texto:
          'Trata-se de uma doença com padrão de herança autossômica dominante com penetrância incompleta, cujo defeito enzimático afeta a conjugação microssomal hepática da bilirrubina na fase 2.',
      },
      {
        id: 'D',
        texto:
          'A carência de G6PD resulta na polimerização desoxigenada das cadeias beta da globina, formando cristais rígidos que deformam o eritrócito no formato de foice e ocluem a microcirculação.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A deficiência de G6PD é a enzimopatia eritrocitária mais comum do mundo, com herança recessiva ligada ao cromossomo X (afeta predominantemente homens). A enzima G6PD catalisa o primeiro passo da via das pentoses-fosfato (conversão de glicose-6-fosfato em 6-fosfogliconato), gerando NADPH. As hemácias não possuem núcleo nem mitocôndrias, dependendo exclusivamente dessa via para produzir NADPH. O NADPH é o cofator essencial da glutationa redutase para converter glutationa oxidada em glutationa reduzida (GSH). A GSH é o principal antioxidante celular que neutraliza espécies reativas de oxigênio (H2O2). Quando o eritrócito deficiente em G6PD é exposto a estressores oxidativos (naftalina, infecções, nitrofurantoína, sulfas, feijão de fava), ocorre peroxidação lipídica da membrana, desnaturação da hemoglobina e hemólise aguda com icterícia e reticulocitose. No neonato, pode causar icterícia neonatal grave e kernicterus mesmo sem crise hemolítica evidente, por concomitância com redução da captação hepática de bilirrubina.',
    comentariosAlternativas: {
      A: 'Correta. A falta de NADPH reduz a glutationa protetora, tornando a hemácia vulnerável ao dano oxidativo induzido por naftalina ou infecções.',
      B: 'Incorreta. A falência da via glicolítica de Embden-Meyerhof com depleção de ATP caracteriza a Deficiência de Piruvato Quinase.',
      C: 'Incorreta. A deficiência de G6PD é de herança ligada ao X e atua nas hemácias, não na conjugação hepática.',
      D: 'Incorreta. A polimerização de cadeias de globina formando foices é a fisiopatologia da Anemia Falciforme (mutação pontual na beta-globina).',
    },
  },
  {
    id: 'ped-neo-082',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico Hematológico da Deficiência de G6PD',
    isRevisao: false,
    enunciado:
      'Lactente do sexo masculino, 4 dias de vida, admitido em unidade neonatal com icterícia acentuada e palidez cutaneomucosa após uso materno de nitrofurantoína para tratamento de cistite durante a lactação. A investigação laboratorial mostra Coombs Direto negativo, BT = 21,0 mg/dL, Hb = 9,8 g/dL e reticulócitos = 13%. O esfregaço de sangue periférico corado com cristal de cresil brilhante revela inclusões intraeritrocitárias de hemoglobina precipitada aderidas à membrana interna da hemácia, bem como eritrócitos com defeitos de borda ("células mordidas" ou "bite cells"). Como são denominadas essas inclusões celulares e qual é o cuidado mandatório na interpretação da atividade enzimática da G6PD durante a crise hemolítica aguda?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Corpos de Heinz; a dosagem da atividade da G6PD pode ser falsamente normal durante a crise hemolítica devido ao alto nível de reticulócitos jovens ricos na enzima, recomendando-se repetição do exame após 2 a 3 meses da crise.',
      },
      {
        id: 'B',
        texto:
          'Corpúsculos de Howell-Jolly; a atividade da G6PD deve ser mensurada exclusivamente em amostra de urina de 24 horas para evitar interferência de leucócitos.',
      },
      {
        id: 'C',
        texto:
          'Anéis de Cabot; a mensuração enzimática é definitiva no primeiro dia da crise e não sofre influência da reticulocitose compensatória.',
      },
      {
        id: 'D',
        texto:
          'Pontilhado basofílico; o teste enzimático imediato é desnecessário porque a presença de corpos de Heinz confirma isoladamente intoxicação crônica por chumbo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Na deficiência de G6PD, o estresse oxidativo desnatura as cadeias de hemoglobina, que se agregam formando precipitados insolúveis insolúveis na membrana eritrocitária, denominados CORPOS DE HEINZ (visíveis com coloração supravital, como azul de cresil brilhante). Ao passarem pelos cordões esplênicos, os macrófagos do baço fagocitam seletivamente esses precipitados, arrancando fragmentos de membrana e citoplasma e gerando hemácias com aspecto de "mordidas" (degmócitos ou "bite cells"). PONTO CRUCIAL DE PROVAS: A dosagem quantitativa da enzima G6PD pode resultar FALSAMENTE NORMAL ou limítrofe no pico da crise hemolítica aguda. Isso ocorre porque as hemácias mais velhas (com menor nível enzimático) já sofreram hemólise, e o sangue periférico é inundado por reticulócitos e hemácias muito jovens, que possuem níveis enzimáticos mais elevados. Por essa razão, a confirmação diagnóstica definitiva deve ser realizada repetindo-se a dosagem da atividade enzimática 8 a 12 semanas (2 a 3 meses) após a resolução da crise aguda.',
    comentariosAlternativas: {
      A: 'Correta. Corpos de Heinz são precipitados de hemoglobina oxidada; a reticulocitose aguda pode mascarar a deficiência enzimática falsamente.',
      B: 'Incorreta. Corpúsculos de Howell-Jolly são restos de DNA nuclear observados em asplenia/esplenectomia.',
      C: 'Incorreta. Anéis de Cabot são restos de fuso mitótico em anemias megaloblásticas graves; o teste enzimático sofre sim interferência de reticulócitos.',
      D: 'Incorreta. Pontilhado basofílico é agregação ribossômica vista no saturnismo e talassemias; corpos de Heinz não são causados por chumbo.',
    },
  },
  {
    id: 'ped-neo-083',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Esferocitose Hereditária',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo de 36 horas de vida desenvolve icterícia moderada a grave necessitando de fototerapia. Mãe e bebê são do grupo sanguíneo A positivo e o Coombs Direto é negativo. O hemograma demonstra anemia com hemoglobina de 12,0 g/dL, reticulocitose de 9% e Concentração de Hemoglobina Corpuscular Média (CHCM) elevada em 37,5 g/dL (VR: 31 a 35 g/dL). O esfregaço de sangue periférico revela inúmeros microesferócitos densos sem halo central claro. O pai da criança relata história de colecistectomia por cálculos biliares aos 22 anos e esplenectomia na infância. Diante da forte suspeita de Esferocitose Hereditária, qual é a base molecular do defeito e o teste laboratorial confirmatório?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Mutação em proteínas estruturais do citoesqueleto da membrana eritrocitária (especialmente anquirina e espectrina), confirmada pelo aumento da fragilidade osmótica e pelo teste de ligação da 5-eosina-maleimida (EMA) por citometria de fluxo.',
      },
      {
        id: 'B',
        texto:
          'Deficiência da enzima glicose-6-fosfato desidrogenase na membrana plasmática, confirmada pelo teste do corante azul de toluidina em gota espessa.',
      },
      {
        id: 'C',
        texto:
          'Mutação de substituição de ácido glutâmico por valina na posição 6 da cadeia beta da hemoglobina, confirmada por eletroforese alcalina de hemoglobina.',
      },
      {
        id: 'D',
        texto:
          'Disfunção nos canais de cálcio dependentes de voltagem dos eritrócitos com perda hídrica maciça, confirmada pelo teste de Coombs Indireto quantitativo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Esferocitose Hereditária é a anemia hemolítica hereditária por defeito de membrana mais comum (75% dos casos com herança autossômica dominante). O defeito molecular reside em mutações de proteínas verticais do citoesqueleto eritrocitário: ANQUIRINA (mais frequente), alfa/beta-ESPECTRINA, BANDA 3 ou PROTEÍNA 4.2. A perda dessas interações verticais causa desestabilização da bicamada lipídica e liberação de microvesículas, reduzindo a relação superfície/volume da hemácia. O eritrócito assume conformação esférica rígida (esferócito), perde a biconcavidade e a deformabilidade elástica, sendo destruído precocemente nos cordões de Billroth do baço. Pistas laboratoriais clássicas: CHCM elevada (> 36 g/dL - hiperconcentração de hemoglobina celular pela desidratação e perda de membrana) e RDW elevado. O diagnóstico clássico envolve o Teste de Fragilidade Osmótica (hemácias esferocíticas lisam em concentrações mais altas de solução salina hipotônica) e o padrão-ouro moderno: teste de citometria de fluxo com 5-eosina-maleimida (EMA binding test).',
    comentariosAlternativas: {
      A: 'Correta. Defeito em anquirina/espectrina reduzindo a superfície da membrana; confirmada por fragilidade osmótica e teste de EMA.',
      B: 'Incorreta. G6PD é uma enzima citoplasmática solúvel da via das pentoses, e não proteína estrutural da membrana.',
      C: 'Incorreta. Essa mutação (HbS) define a Doença Falciforme, que não cursa com CHCM aumentada nem esferocitose primária.',
      D: 'Incorreta. A patogenia envolve proteínas do citoesqueleto estrutural e o Coombs Indireto é um teste imunológico, negativo na esferocitose.',
    },
  },
  {
    id: 'ped-neo-084',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Mecanismos Fotoquímicos da Fototerapia',
    isRevisao: false,
    enunciado:
      'A fototerapia é a modalidade terapêutica padrão para o tratamento da hiperbilirrubinemia neonatal não conjugada. Quando a luz azul de comprimento de onda específico incide sobre a pele do recém-nascido, a molécula lipofílica de bilirrubina nativa (isômero 4Z,15Z) absorve fótons luminosos e sofre reações fotoquímicas. Qual é a reação fotoquímica principal e IRREVERSÍVEL responsável pela maior fração da excreção rápida de bilirrubina na urina e na bile sem necessidade de conjugação hepática prévia?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Fotoisomerização estrutural, com conversão irreversível da bilirrubina 4Z,15Z em lumirrubina (ou ciclobilirrubina), um isômero hidrossolúvel eliminado prontamente por via biliar e urinária.',
      },
      {
        id: 'B',
        texto:
          'Fotoisomerização configuracional simples, gerando o isômero 4Z,15E que é excretado exclusivamente pelas fezes de forma permanente sem risco de reconversão.',
      },
      {
        id: 'C',
        texto:
          'Foto-oxidação total com fragmentação da molécula de bilirrubina em bilirrubinatos de cálcio solúveis, representando 90% do declínio sérico da bilirrubina.',
      },
      {
        id: 'D',
        texto:
          'Indução enzimática fotodependente da enzima uridina difosfato glicuroniltransferase (UGT1A1) nos ceratinócitos epidérmicos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A fototerapia atua por meio de três processos fotoquímicos principais:\n1) FOTOISOMERIZAÇÃO ESTRUTURAL (PROCESSO MAIS IMPORTANTE): É uma reação fotoquímica intramolecular IRREVERSÍVEL induzida pela luz, que converte a 4Z,15Z-bilirrubina nativa em LUMIRRUBINA (também chamada de ciclobilirrubina). A lumirrubina é extremamente hidrossolúvel e é prontamente excretada na bile e na urina SEM NECESSITAR DE CONJUGAÇÃO HEPÁTICA por glicuronidação. Embora sua formação seja mais lenta que a fotoisomerização configuracional, a lumirrubina não sofre reversão espontânea e é o principal determinante da taxa de declínio sérico da bilirrubina total na fototerapia intensiva.\n2) FOTOISOMERIZAÇÃO CONFIGURACIONAL (REVERSÍVEL): É a reação mais rápida (converte 4Z,15Z em 4Z,15E), porém é instável e reversível no lúmen biliar e intestinal, sendo reabsorvida se não eliminada rapidamente.\n3) FOTO-OXIDAÇÃO: Reação muito lenta e de menor relevância clínica (< 1% da depuração total), que degrada a bilirrubina em pequenos produtos pirrólicos polares excretados na urina.',
    comentariosAlternativas: {
      A: 'Correta. A fotoisomerização estrutural irreversível em lumirrubina é o mecanismo clínico mais relevante e responsável pela eliminação hidrossolúvel.',
      B: 'Incorreta. A fotoisomerização configuracional (4Z,15E) é reversível na bile e não constitui o principal mecanismo de excreção sustentada.',
      C: 'Incorreta. A foto-oxidação é um processo muito lento e quantitativamente insignificante (< 1 a 2% do total).',
      D: 'Incorreta. A luz não induz a UGT1A1 na epiderme; o efeito é puramente fotoquímico direto sobre a molécula de bilirrubina no interstício cutâneo.',
    },
  },
  {
    id: 'ped-neo-085',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Física e Eficácia da Fototerapia',
    isRevisao: false,
    enunciado:
      'Para que a fototerapia atinja a eficácia preconizada como "fototerapia intensiva" na abordagem de recém-nascidos com hiperbilirrubinemia grave em risco de exsanguinotransfusão, determinados parâmetros físicos dos aparelhos emissores de luz devem ser rigorosamente atendidos. Segundo as diretrizes da Sociedade Brasileira de Pediatria (SBP) e da Academia Americana de Pediatria (AAP), quais são a faixa ideal de comprimento de onda e o valor mínimo de irradiância espectral para caracterizar a fototerapia de alta eficácia (intensiva)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Comprimento de onda no espectro da luz azul entre 460 e 490 nm, e irradiância espectral mínima de 30 mcg/cm²/nm (ou microWatts/cm²/nm) abrangendo a maior área de superfície corporal possível.',
      },
      {
        id: 'B',
        texto:
          'Comprimento de onda no espectro ultravioleta (UV-A) entre 320 e 380 nm, e irradiância de 10 microWatts/cm²/nm com lâmpadas fluorescentes brancas.',
      },
      {
        id: 'C',
        texto:
          'Comprimento de onda no espectro infravermelho entre 750 e 900 nm para aquecimento tecidual profundo, com irradiância de 5 microWatts/cm²/nm.',
      },
      {
        id: 'D',
        texto:
          'Comprimento de onda na luz verde-amarelada entre 520 e 580 nm, com irradiância fixa de 15 microWatts/cm²/nm e proteção obrigatória de todo o tronco da criança.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A eficácia da fototerapia depende fundamentalmente de quatro variáveis físicas:\n1) COMPRIMENTO DE ONDA: A bilirrubina absorve luz preferencialmente no espectro azul, com pico de absorção in vitro em 450-460 nm. No sangue e tecido cutâneo (ligada à albumina), o pico desloca-se ligeiramente para 460 a 490 nm. A luz azul nessa faixa penetra adequadamente a epiderme e atinge a derme e os capilares subcutâneos sem os efeitos deletérios e oncogênicos da radiação ultravioleta.\n2) IRRADIÂNCIA ESPECTRAL: A fototerapia convencional utiliza irradiância de 8 a 10 microWatts/cm²/nm. Já a FOTOTERAPIA INTENSIVA exige irradiância espectral mínima de 30 microWatts/cm²/nm (mensurada com radionanômetro específico para a faixa de 460-490 nm).\n3) SUPERFÍCIE CORPORAL EXPOSTA: Manter o recém-nascido despido (apenas com fralda mínima e protetor ocular), usando berço de acrílico com refletores, colchões de biliberço (LEDs inferiores) e foco superior duplo (superfície combinada).\n4) DISTÂNCIA DA FONTE: Aparelhos de lâmpadas LED podem ser posicionados próximos ao RN (20 a 30 cm) sem risco de queimaduras térmicas.',
    comentariosAlternativas: {
      A: 'Correta. Espectro de luz azul (460-490 nm) e irradiância mínima de 30 microWatts/cm²/nm definem a fototerapia intensiva.',
      B: 'Incorreta. Radiação UV é carcinogênica, lesa o DNA e é terminantemente contraindicada; os aparelhos de fototerapia possuem filtros bloqueadores de UV.',
      C: 'Incorreta. Infravermelho produz calor (hipertermia e queimadura) sem exercer isomerização fotoquímica da bilirrubina.',
      D: 'Incorreta. O pico de absorção da bilirrubina ligada à albumina não é na luz verde-amarelada, e cobrir o tronco reduziria a área de tratamento.',
    },
  },
  {
    id: 'ped-neo-086',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Cuidados Clínicos e Efeitos Adversos da Fototerapia',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo de 72 horas de vida é colocado sob fototerapia intensiva com painel de LEDs azuis devido a hiperbilirrubinemia não conjugada decorrente de incompatibilidade ABO. A equipe de enfermagem solicita orientações médicas quanto aos cuidados diários e potenciais efeitos adversos durante o tratamento. Qual conduta está estritamente de acordo com as boas práticas neonatais?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Utilizar cobertura ocular opaca e radiopaca bem ajustada para prevenir degeneração fotoquímica retiniana, manter e estimular o aleitamento materno em livre demanda e monitorar temperatura corporal e hidratação.',
      },
      {
        id: 'B',
        texto:
          'Suspender o aleitamento materno e prescrever soro glicosado 5% por via oral nos intervalos para compensar a diurese induzida pela eliminação dos fotoisômeros.',
      },
      {
        id: 'C',
        texto:
          'Aplicar óleos e cremes emolientes espessos em todo o corpo do recém-nascido antes de ligar a fonte luminosa para facilitar a absorção dos fótons pela derme.',
      },
      {
        id: 'D',
        texto:
          'Retirar a proteção ocular durante os períodos de fototerapia caso o recém-nascido chore, para favorecer o ciclo vigília-sono e evitar edema palpebral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Os cuidados essenciais e efeitos colaterais conhecidos da fototerapia incluem:\n1) PROTEÇÃO OCULAR OBRIGATÓRIA: Os olhos do recém-nascido devem ser cobertos com máscara opaca radiopaca bem fixada (sem ocluir as narinas), para prevenir lesão fotoquímica irreversível da retina pela exposição direta contínua à luz de alta energia.\n2) MANUTENÇÃO DO ALEITAMENTO MATERNO: O aleitamento materno deve ser CONTINUADO e estimulado a cada 2 a 3 horas. O leite materno fornece calorias, estimula o trânsito intestinal e acelera a eliminação fecal de pigmentos biliares. O uso de água ou soro glicosado oral é PROSCRITO (não reduz bilirrubina e causa desnutrição e hiponatremia).\n3) MONITORIZAÇÃO TÉRMICA E HÍDRICA: A fototerapia pode elevar perdas insensíveis de água e provocar hipertermia ou hipotermia. Monitorar balanço hídrico, turgor e diurese.\n4) CUIDADOS COM A PELE: A aplicação de pomadas, óleos ou emolientes é CONTRAINDICADA, pois sob calor luminoso podem atuar como corpo aquecido e causar QUEIMADURAS térmicas na pele.\n5) FEZES AMOLECIDAS E ESVERDEADAS: Efeito esperado e benigno decorrente da rápida excreção biliar de lumirrubina e fotoisômeros que irritam a mucosa cólica transitoriamente.',
    comentariosAlternativas: {
      A: 'Correta. Proteção ocular estrita, estímulo ao aleitamento materno e vigilância de temperatura e balanço hídrico são os pilares de cuidado.',
      B: 'Incorreta. Suspender aleitamento materno e oferecer soro glicosado é uma conduta totalmente contraindicada e deletéria.',
      C: 'Incorreta. Óleos e cremes são proibidos sob fototerapia pelo alto risco de causar queimaduras térmicas na pele.',
      D: 'Incorreta. A proteção ocular jamais pode ser retirada com as luzes acesas devido ao risco de lesão retiniana.',
    },
  },
  {
    id: 'ped-neo-087',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome do Bebê Bronzeado',
    isRevisao: false,
    enunciado:
      'Lactente de 18 dias de vida, nascido pré-termo com 33 semanas, internado em UTI neonatal por sepse tardia e em uso prolongado de nutrição parenteral total, apresenta icterícia cutaneomucosa progressiva. Um plantonista iniciou fototerapia por constatar nível de bilirrubina total de 14,0 mg/dL. Após 24 horas sob fototerapia contínua, a equipe observa que a pele, o soro e a urina da criança adquiriram uma coloração escura acinzentada-acastanhada ("bronzeada"). Ao checarem os exames admissionais, verificam que a bilirrubina direta era de 8,5 mg/dL e a bilirrubina indireta de 5,5 mg/dL. Qual é o diagnóstico e o mecanismo fisiopatológico dessa alteração?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome do Bebê Bronzeado (Bronze Baby Syndrome); decorre do acúmulo de fotoprodutos da bilirrubina e derivados de cobre-porfirina nos tecidos quando a fototerapia é administrada em pacientes com hiperbilirrubinemia direta (colestase).',
      },
      {
        id: 'B',
        texto:
          'Metemoglobinemia neonatal iatrogênica grave induzida pela degradação de óxido nítrico endotelial sob o comprimento de onda azul.',
      },
      {
        id: 'C',
        texto:
          'Insuficiência adrenal primária aguda com hipersecreção reflexa de ACTH e hormônio melanócito-estimulante (MSH) por necrose hemorrágica adrenal.',
      },
      {
        id: 'D',
        texto:
          'Intoxicação aguda por depósito de prata tecidual secundária a defeito congênito do carreador mitocondrial de metais pesados.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A SÍNDROME DO BEBÊ BRONZEADO (Bronze Baby Syndrome) é uma complicação classicamente descrita que ocorre quando recém-nascidos portadores de HIPERBILIRRUBINEMIA DIRETA (colestase neonatal, seja por atresia de vias biliares, sepse, hepatite neonatal ou nutrição parenteral prolongada) são indevidamente submetidos à FOTOTERAPIA. Sob a ação da luz, a bilirrubina direta e as porfirinas acumuladas (especialmente cobre-porfirinas) sofrem fotoisomerização e foto-oxidação gerando polímeros acastanhados/cinzentos que não conseguem ser excretados pelo sistema biliar obstruído. Esses fotoisômeros refluem para a circulação sistêmica e depositam-se na pele, mucosas, soro e urina, conferindo uma tonalidade escura acinzentada típica. A alteração é benigna e autolimitada após a suspensão da fototerapia, clareando em semanas. Por esse motivo, a colestase/hiperbilirrubinemia direta é uma CONTRAINDICAÇÃO RELATIVA À FOTOTERAPIA; caso a fração indireta atinja níveis com risco real de kernicterus, a fototerapia pode ser mantida com extrema cautela enquanto se prepara a exsanguinotransfusão.',
    comentariosAlternativas: {
      A: 'Correta. Ocorre tipicamente pela fototerapia em recém-nascidos com colestase/bilirrubina direta elevada por acúmulo de derivados de cobre-porfirina.',
      B: 'Incorreta. A metemoglobinemia cursa com cianose chocolate refratária a O2, e não com pigmentação bronzeada por colestase sob fototerapia.',
      C: 'Incorreta. A síndrome de Waterhouse-Friderichsen cursa com choque refratário e hipotensão, sem relação direta com fototerapia e pigmentação isolada.',
      D: 'Incorreta. Argiria (depósito de prata) não guarda relação com colestase neonatal nem fototerapia.',
    },
  },
  {
    id: 'ped-neo-088',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Curvas de Risco e Fatores de Neurotoxicidade',
    isRevisao: false,
    enunciado:
      'Ao aplicar as curvas e nomogramas preconizados pela Sociedade Brasileira de Pediatria e pela Academia Americana de Pediatria (AAP) para definir a indicação de fototerapia ou exsanguinotransfusão em recém-nascidos com hiperbilirrubinemia, o médico deve estratificar o paciente de acordo com a idade gestacional e a presença de fatores de risco para neurotoxicidade induzida pela bilirrubina. Quais são os fatores clínicos e laboratoriais que rebaixam a linha de corte e tornam o recém-nascido mais vulnerável à impregnação cerebral?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Doença hemolítica isoimune (incompatibilidade Rh/ABO), deficiência de G6PD, asfixia neonatal/encefalopatia hipóxico-isquêmica, instabilidade térmica, letargia significativa, sepse comprovada, acidose metabólica e albumina sérica < 3,0 g/dL.',
      },
      {
        id: 'B',
        texto:
          'Aleitamento materno exclusivo nas primeiras 48 horas de vida, parto cesariano agendado, sexo masculino e história de colecistolitíase na avó materna.',
      },
      {
        id: 'C',
        texto:
          'Nível sérico de ureia baixo, níveis elevados de fosfatase alcalina óssea e presença de mecônio espesso eliminado nas primeiras 6 horas de vida.',
      },
      {
        id: 'D',
        texto:
          'Ausência de icterícia na face nas primeiras 36 horas, peso de nascimento superior a 4.000 g e ausência de sopros cardíacos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As diretrizes da AAP/SBP estabelecem que a barreira hematoencefálica torna-se mais permeável à bilirrubina livre (não conjugada lipofílica) e os neurônios tornam-se mais suscetíveis à apoptose celular na vigência de condições que aumentam a toxicidade celular ou reduzem a capacidade de ligação da albumina. Os FATORES DE RISCO DE NEUROTOXICIDADE formais que rebaixam os limiares de corte para fototerapia e exsanguinotransfusão são:\n1) Doença hemolítica isoimune (Rh, ABO, antígenos menores);\n2) Deficiência de G6PD ou outras enzimopatias/esferocitose;\n3) Asfixia neonatal perinatal / Apgar baixo / Encefalopatia hipóxico-isquêmica;\n4) Letargia clínica expressiva ou instabilidade térmica (sinais de gravidade);\n5) Sepse ou infecção congênita ativa;\n6) Acidose (pH < 7,15 - a acidose dissocia a bilirrubina da albumina, aumentando a fração livre lipossolúvel que cruza a barreira hematoencefálica);\n7) Hipoalbuminemia (Albumina sérica < 3,0 g/dL - reduz os sítios de ligação de alta afinidade).',
    comentariosAlternativas: {
      A: 'Correta. Fatores clássicos de vulnerabilidade da barreira hematoencefálica e de toxicidade neuronal descritos nos consensos.',
      B: 'Incorreta. Aleitamento materno ou histórico familiar de cálculos biliares em avó não são fatores que rebaixam as curvas de corte de neurotoxicidade.',
      C: 'Incorreta. Fosfatase alcalina e eliminação normal precoce de mecônio não aumentam risco de neurotoxicidade.',
      D: 'Incorreta. Macrossomia ou ausência de icterícia precoce não são fatores de risco para neurotoxicidade.',
    },
  },
  {
    id: 'ped-neo-089',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Imunoglobulina Humana Intravenosa (IVIG)',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo de 20 horas de vida com doença hemolítica por incompatibilidade Rh (mãe O negativo sensibilizada, RN O positivo, Coombs Direto 4+) encontra-se sob fototerapia intensiva desde 6 horas de vida. A despeito do tratamento, a dosagem seriada revela elevação persistente da bilirrubina total na taxa de 0,7 mg/dL/hora, atingindo valor de 17,5 mg/dL, aproximando-se em 2 mg/dL do nível de corte para indicação de exsanguinotransfusão. A equipe indica a administração de Imunoglobulina Humana Intravenosa (IVIG). Qual é o mecanismo de ação da IVIG e seu objetivo clínico nessa conjuntura?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Bloqueio competitivo dos receptores Fc dos macrófagos no sistema reticuloendotelial do baço e fígado, inibindo a fagocitose e lise das hemácias opsonizadas, com o objetivo de frear a hemólise e evitar a necessidade de exsanguinotransfusão.',
      },
      {
        id: 'B',
        texto:
          'Aceleração direta da conjugação hepática da bilirrubina por ligação alostérica ativadora na uridina difosfato glicuroniltransferase (UGT1A1).',
      },
      {
        id: 'C',
        texto:
          'Neutralização química da bilirrubina livre circulante na luz intestinal, impedindo em 100% a circulação êntero-hepática.',
      },
      {
        id: 'D',
        texto:
          'Substituição do pool de hemoglobina fetal do recém-nascido por hemoglobina adulta recombinante sem ativação antigênica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Imunoglobulina Humana Intravenosa (IVIG / IGIV) é formalmente recomendada pelas diretrizes da SBP e da AAP para recém-nascidos com DOENÇA HEMOLÍTICA ISOIMUNE (incompatibilidade Rh ou ABO) quando a bilirrubina sérica total continua subindo a despeito da fototerapia intensiva (ascensão > 0,5 mg/dL/h) ou se o nível de BT estiver se aproximando do limiar de exsanguinotransfusão (a 2 a 3 mg/dL da linha de EST). O mecanismo de ação baseia-se na sobrecarga e BLOQUEIO COMPETITIVO DOS RECEPTORES Fc dos macrófagos do sistema reticuloendotelial (no baço). Com os receptores Fc saturados pelas moléculas inespecíficas de IgG da imunoglobulina exógena, os macrófagos não conseguem se ligar à porção Fc dos anticorpos anti-D (ou anti-A/B) que opsonizam as hemácias do neonato. Isso cessa temporariamente a destruição celular das hemácias, diminuindo a hemólise e a taxa de produção de nova bilirrubina, reduzindo dramaticamente a necessidade de realizar a exsanguinotransfusão (procedimento com morbimortalidade não desprezível). A dose preconizada é de 0,5 a 1,0 g/kg por infusão lenta em 2 a 4 horas, podendo ser repetida após 12 horas.',
    comentariosAlternativas: {
      A: 'Correta. Bloqueio dos receptores Fc de macrófagos esplênicos impede a hemólise extravascular das hemácias opsonizadas.',
      B: 'Incorreta. A IVIG não induz nem ativa a UGT1A1 microssomal.',
      C: 'Incorreta. A IVIG não atua no lúmen intestinal nem quelata bilirrubina na luz cólica.',
      D: 'Incorreta. A imunoglobulina não altera o tipo de hemoglobina nem faz terapia gênica/recombinante.',
    },
  },
  {
    id: 'ped-neo-090',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Indicações de Emergência para Exsanguinotransfusão',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo de 38 semanas, com 30 horas de vida, portador de doença hemolítica por incompatibilidade Rh, encontra-se sob fototerapia intensiva contínua há 12 horas. Apresenta bilirrubina total de 23,2 mg/dL. Ao exame clínico neurológico minucioso, o neonato apresenta-se letárgico, com reflexo de sucção débil, tônus extensor intermitente no tronco com episódios de retrocolo e choro agudo estridente ao ser manipulado. De acordo com os consensos internacionais e nacionais de neonatologia, qual é a conduta imediata mandatória?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Indicar e realizar imediatamente a Exsanguinotransfusão (EST) de emergência, pois a presença de sinais clínicos de encefalopatia bilirrubínica aguda exige intervenção mecânica imediata, independentemente do tempo de fototerapia prévia.',
      },
      {
        id: 'B',
        texto:
          'Aguardar mais 12 horas de fototerapia intensiva e colher nova dosagem de bilirrubina para certificar-se da ausência de resposta terapêutica antes de indicar qualquer procedimento invasivo.',
      },
      {
        id: 'C',
        texto:
          'Prescrever fenobarbital em dose de ataque intravenosa e sedação contínua para cessar o tônus extensor, mantendo apenas a fototerapia convencional.',
      },
      {
        id: 'D',
        texto:
          'Suspender a fototerapia imediatamente, pois a presença de sinais neurológicos indica que a fototerapia causou toxicidade luminescente sobre os neurônios do córtex motor.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A presença de QUALQUER SINAL OU SINTOMA SUGESTIVO DE ENCEFALOPATIA BILIRRUBÍNICA AGUDA (letargia profunda, hipotonia ou hipertonia com retrocolo/opistótono, sucção ausente ou débil, choro agudo e estridente) constitui uma INDICAÇÃO DE EMERGÊNCIA ABSOLUTA PARA EXSANGUINOTRANSFUSÃO IMEDIATA. Nesses casos, o risco de lesão cerebral irreversível permanente (kernicterus) é iminente e cada hora de atraso aumenta o risco de sequelas motoras e auditivas graves. Não se deve aguardar nova dosagem laboratorial nem protelar sob fototerapia isolada: deve-se acionar o banco de sangue para reserva imediata de concentrado de hemácias reconstituído e iniciar o procedimento enquanto se mantém a fototerapia intensiva até a instalação dos acessos.',
    comentariosAlternativas: {
      A: 'Correta. Presença de sinais neurológicos de encefalopatia aguda é indicação formal e urgente de exsanguinotransfusão imediata.',
      B: 'Incorreta. Aguardar mais 12 horas em vigência de sintomas de encefalopatia levará o RN a kernicterus definitivo ou óbito.',
      C: 'Incorreta. Fenobarbital tem ação enzimática lenta (demora dias) e sedar a criança mascarará a evolução do quadro neurológico catastrófico.',
      D: 'Incorreta. A toxicidade neurológica é decorrente da bilirrubina lipofílica livre que cruza a barreira hematoencefálica, e não da fototerapia.',
    },
  },
  {
    id: 'ped-neo-091',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Cálculo de Volume e Técnica da Exsanguinotransfusão',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo pesando 3.000 g com doença hemolítica grave e hiperbilirrubinemia refratária atinge critérios formais para realização de Exsanguinotransfusão (EST). O procedimento será realizado pela técnica isovolumétrica por cateterização de veia e artéria umbilicais (ou técnica de alíquotas por via venosa única). Qual é o volume total de sangue a ser solicitado ao banco de sangue para a realização da EST de duas volemias ("dupla volemia") e qual é o impacto desse procedimento sobre as hemácias do recém-nascido e sobre o nível de bilirrubina circulante?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Volume total de 480 mL (duas volemias de 80 mL/kg); o procedimento remove e substitui aproximadamente 85% a 90% dos eritrócitos circulantes do concepto e reduz a bilirrubina sérica intravascular imediata em cerca de 50%.',
      },
      {
        id: 'B',
        texto:
          'Volume total de 120 mL (uma volemia de 40 mL/kg); o procedimento substitui 100% dos eritrócitos e zera a bilirrubina sérica sem efeito rebote tecidual.',
      },
      {
        id: 'C',
        texto:
          'Volume total de 960 mL (quatro volemias de 80 mL/kg); indicado rotineiramente para promover a troca integral do volume intravascular e de todo o interstício corporal.',
      },
      {
        id: 'D',
        texto:
          'Volume total de 240 mL (uma volemia de 80 mL/kg); substitui apenas 20% das hemácias, atuando predominantemente por expansão volêmica e diluição plasmática simples.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Exsanguinotransfusão padrão é realizada com o volume correspondente a DUAS VOLEMIAS corporais ("dupla volemia"):\n1) CÁLCULO DO VOLUME: A volemia sanguínea do recém-nascido a termo é de aproximadamente 80 mL/kg (em prematuros pode atingir 90 a 100 mL/kg). Logo, a dupla volemia corresponde a: 2 x 80 mL/kg = 160 mL/kg. Para uma criança de 3.000 g (3 kg), o cálculo é: 3 kg x 160 mL/kg = 480 mL de sangue total reconstituído.\n2) IMPACTO HEMATOLÓGICO: A troca de duas volemias substitui cerca de 85% a 90% das hemácias do concepto (que estavam opsonizadas por anticorpos maternos) por hemácias novas doadoras livres de anticorpos e que não expressam o antígeno incompatível.\n3) IMPACTO SOBRE A BILIRRUBINA: Reduz a bilirrubina sérica imediata em aproximadamente 50%. Contudo, como a bilirrubina possui amplo volume de distribuição no espaço extravascular e tecidos (pele, músculos, cérebro), ocorre um fenômeno de REBOTE nas primeiras horas pós-EST à medida que a bilirrubina tecidual se equilibra com o compartimento intravascular, demandando manutenção imediata da fototerapia intensiva pós-procedimento.',
    comentariosAlternativas: {
      A: 'Correta. Duas volemias no termo = 160 mL/kg (480 mL para 3 kg), substituindo ~85-90% das hemácias e reduzindo a BT intravascular em cerca de 50%.',
      B: 'Incorreta. A volemia no termo não é 40 mL/kg e é impossível zerar a bilirrubina sérica sem rebote intersticial.',
      C: 'Incorreta. Quatro volemias não são indicadas de rotina e aumentam brutalmente o risco de complicações hemodinâmicas, hipotermia e distúrbios metabólicos.',
      D: 'Incorreta. Uma volemia única não atinge a taxa necessária de depuração de hemácias opsonizadas.',
    },
  },
  {
    id: 'ped-neo-092',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Seleção do Sangue para Exsanguinotransfusão',
    isRevisao: false,
    enunciado:
      'O banco de sangue recebe uma solicitação urgente de sangue para realizar Exsanguinotransfusão em dois recém-nascidos internados na UTI Neonatal:\n- Caso 1: Recém-nascido com doença hemolítica grave por Incompatibilidade Rh (mãe A negativo, recém-nascido A positivo).\n- Caso 2: Recém-nascido com doença hemolítica grave por Incompatibilidade ABO (mãe O positivo, recém-nascido B positivo).\nQuais são os tipos de sangue que devem ser preparados para o Caso 1 e para o Caso 2, respectivamente, de modo a garantir a máxima segurança imunológica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Caso 1: Hemácias do grupo A (ou O), Rh negativo, suspensas em plasma compatível com o recém-nascido (ex: plasma A ou AB); Caso 2: Hemácias do grupo O, Rh compatível com o recém-nascido, suspensas em plasma AB (ou B) com baixos títulos de anti-A e anti-B.',
      },
      {
        id: 'B',
        texto:
          'Caso 1: Hemácias do grupo A, Rh positivo, suspensas em plasma O negativo; Caso 2: Hemácias do grupo B, Rh negativo, suspensas em plasma O positivo materno.',
      },
      {
        id: 'C',
        texto:
          'Caso 1: Sangue total colhido da própria mãe sem processamento; Caso 2: Sangue total de doador universal O positivo com plasma rico em anticorpos naturais anti-A e anti-B.',
      },
      {
        id: 'D',
        texto:
          'Caso 1: Hemácias Rh positivo irradiadas com plasma maternal total; Caso 2: Hemácias AB positivo com plasma O negativo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A seleção do sangue para Exsanguinotransfusão deve respeitar princípios imuno-hematológicos estritos para não introduzir antígenos contra os quais a mãe produziu anticorpos, nem infundir plasma contendo anticorpos que destruam as hemácias do recém-nascido:\n- NA INCOMPATIBILIDADE Rh (Mãe A Rh-, RN A Rh+):\n  As hemácias doadoras DEVEM SER Rh NEGATIVO (pois os anticorpos anti-D maternos estão na circulação do RN e destruiriam hemácias Rh positivas infundidas). O grupo ABO das hemácias deve ser A (do RN) ou O (compatível com a mãe e com o RN). O plasma deve ser compatível com as hemácias do bebê (A ou AB), livre de anticorpos anti-D.\n- NA INCOMPATIBILIDADE ABO (Mãe O Rh+, RN B Rh+):\n  As hemácias doadoras DEVEM SER DO GRUPO O (pois as hemácias do grupo B seriam atacadas pelas iso-hemaglutininas anti-B maternas ainda circulantes no RN). O plasma deve ser do grupo AB (ou B compatível, livre de anti-B materno). O fator Rh deve ser compatível com o recém-nascido (Rh positivo).\n- CARACTERÍSTICAS ADICIONAIS: O sangue deve ser FRESCO (preferencialmente colhido há menos de 5 a 7 dias, para menor concentração de potássio e maior nível de 2,3-DPG), leucorreduzido, irradiado (para prevenir doença do enxerto contra o hospedeiro associada à transfusão) e com sorologia negativa para CMV.',
    comentariosAlternativas: {
      A: 'Correta. Princípio áureo: na incompatibilidade Rh usa-se hemácia Rh- (A ou O); na incompatibilidade ABO usa-se hemácia O suspensa em plasma AB.',
      B: 'Incorreta. No caso 1, infundir hemácias Rh+ causaria hemólise imediata pelos anticorpos anti-D maternos circulantes no RN.',
      C: 'Incorreta. O sangue materno contém altos títulos de anticorpos livres no plasma que agravariam a destruição eritrocitária.',
      D: 'Incorreta. Hemácias AB no caso 2 seriam destruídas por ambos os anticorpos anti-A e anti-B.',
    },
  },
  {
    id: 'ped-neo-093',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Complicações Metabólicas da Exsanguinotransfusão e Gluconato de Cálcio',
    isRevisao: false,
    enunciado:
      'Durante a realização de uma exsanguinotransfusão em recém-nascido a termo, o médico assistente mantém monitorização cardíaca contínua e controla o balanço dos ciclos de retirada e infusão de sangue em alíquotas de 10 mL. O sangue fornecido pelo banco de sangue é preservado com citrato-fosfato-dextrose (CPD). O médico solicita que a enfermagem tenha à beira do leito ampolas de Gluconato de Cálcio a 10% para administração endovenosa periódica. Qual é a justificativa farmacológica e metabólica para a administração de gluconato de cálcio durante a exsanguinotransfusão?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O citrato contido na bolsa de sangue doador atua como potente quelante do cálcio iônico sérico do recém-nascido, gerando risco iminente de hipocalcemia grave, tetania, prolongamento do intervalo QT e arritmias ventriculares graves.',
      },
      {
        id: 'B',
        texto:
          'O cálcio é infundido para precipitar o potássio sérico liberado pelas hemácias estocadas, convertendo a hipercalemia em depósitos ósseos inertes.',
      },
      {
        id: 'C',
        texto:
          'O gluconato de cálcio atua como coenzima direta acelerando a depuração hepática da bilirrubina indireta no citoplasma dos hepatócitos.',
      },
      {
        id: 'D',
        texto:
          'O cálcio previne a trombose da veia porta ao inibir a cascata de coagulação e diminuir a adesividade plaquetária ao cateter umbilical.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A solução conservante padrão das bolsas de sangue para transfusão contém CITRATO (CPD ou CPDA-1), que atua como anticoagulante ao quelar o cálcio sérico. Quando um grande volume de sangue citratado (dupla volemia = 160 mL/kg) é infundido na circulação neonatal em um curto intervalo de tempo (1 a 2 horas), o fígado imaturo do recém-nascido não consegue metabolizar o excesso de citrato com rapidez. O citrato livre quela o CÁLCIO IÔNICO (a fração biologicamente ativa), provocando HIPOCALCEMIA IÔNICA AGUDA GRAVE. Manifestações da hipocalcemia aguda: irritabilidade miocárdica, alargamento do intervalo QT no ECG, disfunção da contratilidade miocárdica com hipotensão, tremores e arritmias cardíacas com risco de parada em assistolia. Por isso, preconiza-se a administração profilática de 1 mL de Gluconato de Cálcio a 10% (diluído e infundido lentamente em 5 minutos) a cada 100 mL de sangue trocado, sob rigorosa monitorização da frequência cardíaca no ECG (risco de bradicardia se infusão rápida). Outro distúrbio metabólico frequente é a HIPOGLICEMIA pós-EST (pela alta carga de glicose da solução CPD que estimula hiperinsulinismo de rebote).',
    comentariosAlternativas: {
      A: 'Correta. O citrato quela o cálcio iônico gerando hipocalcemia aguda, prolongamento de QT e arritmias graves; exige reposição seriada.',
      B: 'Incorreta. Cálcio não precipita potássio nem o fixa nos ossos; o cálcio apenas antagoniza os efeitos eletrofisiológicos cardíacos da hipercalemia.',
      C: 'Incorreta. O cálcio não induz nem atua como coenzima da glicuroniltransferase hepática.',
      D: 'Incorreta. O cálcio é na verdade o Fator IV da cascata de coagulação; sua administração não tem finalidade antitrombótica.',
    },
  },
  {
    id: 'ped-neo-094',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Encefalopatia Bilirrubínica Aguda - Fase Leve / Precoce',
    isRevisao: false,
    enunciado:
      'Lactente a termo com 3 dias de vida, nascido de parto domiciliar sem acompanhamento médico, é levado à emergência pediátrica pela mãe por icterícia intensa que atinge as plantas dos pés. A mãe refere que a criança "está muito molinha, quase não acorda para mamar e o peito vaza leite porque ele chupa fraquinho e logo dorme". Ao exame físico, apresenta icterícia universal (Zona V), letargia, tônus muscular globalmente diminuído (hipotonia leve a moderada), reflexo de Moro fraco e sucção débil. Não há retrocolo, rigidez de nuca nem convulsões. A dosagem urgente de bilirrubina total é de 24,8 mg/dL (BI = 24,0 mg/dL). Em qual fase da Encefalopatia Bilirrubínica Aguda (EBA) esse recém-nascido se encontra e qual é o prognóstico neurológico se submetido a tratamento imediato agressivo?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Fase inicial (leve/precoce) da EBA; as alterações neurológicas são potencialmente REVERSÍVEIS se os níveis de bilirrubina forem reduzidos prontamente com exsanguinotransfusão e fototerapia intensiva.',
      },
      {
        id: 'B',
        texto:
          'Fase crônica definitiva (Kernicterus instalado); o dano cerebral já é estrutural e irreversível, sendo desnecessária a realização de exsanguinotransfusão.',
      },
      {
        id: 'C',
        texto:
          'Fase intermediária da EBA com hipertonia irreversível; a hipotonia apresentada descarta a participação da bilirrubina no quadro clínico.',
      },
      {
        id: 'D',
        texto:
          'Fase avançada pré-óbito; a letargia isolada indica paralisia bulbar definitiva e refratária a qualquer intervenção terapêutica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Encefalopatia Bilirrubínica Aguda (EBA) divide-se classicamente em três fases clínicas consecutivas:\n- FASE 1 (INICIAL / PRECOCE / LEVE): Caracterizada por LETARGIA, HIPOTONIA muscular generalizada, SUCÇÃO DÉBIL ou ineficaz, choro fraco e reflexo de Moro incompleto. PONTO CRUCIAL: As alterações desta fase são TOTALMENTE REVERSÍVEIS se o recém-nascido receber intervenção agressiva e imediata (exsanguinotransfusão de emergência associada a fototerapia intensiva), impedindo a progressão para morte neuronal permanente.\n- FASE 2 (INTERMEDIÁRIA): Caracterizada por irritabilidade alternada com estupor, hipertonia da musculatura extensora com RETROCOLO (arqueamento do pescoço para trás) e OPISTÓTONO (arqueamento da coluna lombar), febre central e choro agudo estridente. O retrocolo e opistótono nessa fase ainda podem regredir parcialmente, mas o risco de sequela é elevado.\n- FASE 3 (AVANÇADA): Caracterizada por opistótono acentuado e permanente, choro agudo estridente incoercível, recusa alimentar total, apneias graves, convulsões, coma e parada respiratória (óbito em até 50% dos casos).',
    comentariosAlternativas: {
      A: 'Correta. Fase 1 inicial (letargia, hipotonia e sucção fraca) é plenamente reversível com exsanguinotransfusão imediata e controle da BT.',
      B: 'Incorreta. Kernicterus refere-se às sequelas crônicas definitivas; a fase inicial da EBA não é irreversível.',
      C: 'Incorreta. A hipotonia faz parte da fase inicial da EBA e não exclui a encefalopatia por bilirrubina.',
      D: 'Incorreta. A fase avançada cursa com opistótono grave, convulsões e coma, e não hipotonia isolada.',
    },
  },
  {
    id: 'ped-neo-095',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Encefalopatia Bilirrubínica Aguda - Fases Intermediária e Avançada',
    isRevisao: false,
    enunciado:
      'Recém-nascido com 4 dias de vida e história de icterícia grave não tratada evolui no berçário com piora clínica abrupta. Ao exame físico, o lactente encontra-se em estupor profundo, apresentando hipertonia acentuada da musculatura extensora com postura sustentada em opistótono e retrocolo acentuados, choro agudo contínuo e estridente ("cri encéphalique"), episódios repetidos de apneia e temperatura axilar de 38,8 °C sem evidência de foco infeccioso evidente. A dosagem de bilirrubina total atinge 31,0 mg/dL. Qual fase da encefalopatia bilirrubínica esse quadro representa e quais são as complicações agudas com risco de óbito?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Fase intermediária a avançada da Encefalopatia Bilirrubínica Aguda; a febre decorre de acometimento do centro termorregulador hipotalâmico e há alto risco de convulsões, parada cardiorrespiratória e óbito.',
      },
      {
        id: 'B',
        texto:
          'Fase precoce transitória da icterícia fisiológica; o opistótono decorre de cólica do lactente intensa provocada pelo aleitamento materno.',
      },
      {
        id: 'C',
        texto:
          'Meningite bacteriana comunitária por Streptococcus pneumoniae, sendo impossível que a bilirrubina cause hipertonia, febre ou manifestações no sistema nervoso central.',
      },
      {
        id: 'D',
        texto:
          'Crise hipertensiva maligna neonatal provocada por hiperaldosteronismo secundário à fototerapia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O quadro clínico descrito (hipertonia da musculatura extensora com opistótono acentuado, retrocolo, choro estridente, hipertermia central e apneia) é a manifestação clássica da transição entre a FASE INTERMEDIÁRIA e a FASE AVANÇADA da Encefalopatia Bilirrubínica Aguda. A bilirrubina não conjugada livre ultrapassa a barreira hematoencefálica e liga-se aos fosfolipídios das membranas neuronais e mitocondriais, desregulando o efluxo de cálcio, desacoplando a fosforilação oxidativa e provocando apoptose celular massiva. O comprometimento das conexões diencefálicas e hipotalâmicas explica a febre central de difícil controle (sem infecção associada). Nessa fase, a taxa de letalidade é altíssima (cerca de 50%), ocorrendo óbito por insuficiência respiratória (apneia central refratária) ou estado de mal epiléptico. Os sobreviventes quase invariavelmente desenvolverão a forma crônica (Kernicterus).',
    comentariosAlternativas: {
      A: 'Correta. Sintomas típicos da fase intermediária/avançada: hipertonia extensora, retrocolo, febre central e apneia com alta letalidade.',
      B: 'Incorreta. Cólica do lactente não causa opistótono, estupor nem hipertermia com BT de 31 mg/dL.',
      C: 'Incorreta. A bilirrubina livre em níveis elevados é altamente neurotóxica e causa esse quadro neurológico exuberante.',
      D: 'Incorreta. Não existe crise hipertensiva por hiperaldosteronismo induzido por fototerapia.',
    },
  },
  {
    id: 'ped-neo-096',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Anatomia Patológica e Localização da Toxicidade no Kernicterus',
    isRevisao: false,
    enunciado:
      'O termo patológico "Kernicterus" foi cunhado originalmente por Schmorl em 1904 ao observar, em necrópsias de recém-nascidos falecidos por icterícia nuclear grave, a impregnação amarelada seletiva de grupamentos neuronais subcorticais profundos e do tronco encefálico. Quais são as estruturas anatômicas do sistema nervoso central mais vulneráveis e preferencialmente acometidas pela neurotoxicidade da bilirrubina indireta livre?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Globus pallidus (globo pálido) e núcleos subtalâmicos (núcleos da base), hipocampo (setor de Sommer) e núcleos dos pares cranianos no tronco encefálico (especialmente núcleo coclear auditivo, vestibular e oculomotor).',
      },
      {
        id: 'B',
        texto:
          'Córtex cerebral pré-frontal e lobo temporal superficial exclusivamente, poupando por completo os núcleos profundos e o tronco cerebral.',
      },
      {
        id: 'C',
        texto:
          'Substância branca periventricular e corpos mamilares, com necrose restrita aos axônios motores corticoespinhais.',
      },
      {
        id: 'D',
        texto:
          'Plexo coroide dos ventrículos laterais e duramáter, sem atingimento do parênquima cerebral nobre.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A deposição de bilirrubina indireta livre no sistema nervoso central não é homogênea: ela exibe um tropismo regional marcante por áreas com alta demanda metabólica e densidade sináptica. As estruturas classicamente impregnadas e lesadas no KERNICTERUS são:\n1) NÚCLEOS DA BASE: O GLOBO PÁLIDO (Globus Pallidus) é a estrutura mais intensamente acometida, seguido pelos núcleos subtalâmicos de Luys. Essa lesão é a responsável direta pela sintomatologia extrapiramidal crônica (distonia, coreoatetose).\n2) NÚCLEOS DO TRONCO ENCEFÁLICO: Particularmente os núcleos auditivos (núcleo coclear e colículos inferiores - justificando a perda auditiva neurossensorial precoce), núcleos vestibulares e núcleos oculomotores (justificando a paralisia do olhar vertical superior).\n3) FORMAÇÃO HIPOCAMPAL: Especialmente o setor CA1/Sommer do hipocampo.\n4) CEREBELO: Células de Purkinje e núcleo denteado.\nO córtex cerebral e a substância branca periventricular são relativamente poupados, o que explica por que crianças com sequelas motoras e auditivas graves de kernicterus podem manter funções cognitivas intelectuais relativamente preservadas.',
    comentariosAlternativas: {
      A: 'Correta. Globo pálido, núcleos subtalâmicos, hipocampo e núcleos cocleares/oculomotores do tronco cerebral são os sítios clássicos de impregnação do kernicterus.',
      B: 'Incorreta. O córtex cerebral é classicamente poupado; a lesão é essencialmente subcortical e em núcleos da base/tronco.',
      C: 'Incorreta. Necrose de substância branca periventricular é a leucomalácia periventricular típica do prematuro asfíxico, e não do kernicterus.',
      D: 'Incorreta. A bilirrubina impregna os neurônios do parênquima cerebral profundo, e não apenas o plexo coroide ou meninges.',
    },
  },
  {
    id: 'ped-neo-097',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Sequelas Clínicas Crônicas do Kernicterus',
    isRevisao: false,
    enunciado:
      'Criança de 3 anos de idade é atendida em ambulatório de seguimento neuroevolutivo pediátrico. O prontuário revela histórico neonatal de hiperbilirrubinemia grave (BT máxima de 34 mg/dL no 4º dia de vida por deficiência de G6PD) sem exsanguinotransfusão oportuna. Ao exame físico neurológico atual, o pediatra constata movimentos involuntários anormais contínuos, lentos e sinuosos das extremidades associados a posturas distônicas de tronco (coreoatetose), hipoplasia e coloração esverdeada do esmalte dos dentes decíduos, incapacidade de realizar a mirada conjugada para cima (paralisia do olhar vertical) e resposta ausente a estímulos sonoros. O exame de Potencial Evocado Auditivo de Tronco Encefálico (PEATE / BERA) confirma surdez neurossensorial bilateral profunda. Esse conjunto clássico de sequelas permanentes define a forma crônica da neurotoxicidade por bilirrubina denominada:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Encefalopatia Bilirrubínica Crônica (Kernicterus clássico), com paralisia cerebral do tipo coreoatetoide (discinesia extrapiramidal), neuropatia auditiva/surdez neurossensorial, displasia do esmalte dentário e paralisia do olhar para cima.',
      },
      {
        id: 'B',
        texto:
          'Paralisia Cerebral Espástica Diparatéxica de Little decorrente de hemorragia peri-intraventricular de grau IV sem correlação com a bilirrubina.',
      },
      {
        id: 'C',
        texto:
          'Síndrome de West criptogênica caracterizada por espasmos em flexão e hipsarritmia secundária a hipoglicemia neonatal neonatal transitória.',
      },
      {
        id: 'D',
        texto:
          'Atrofia Muscular Espinhal tipo 1 (Doença de Werdnig-Hoffmann) provocada por mutação de deleção homozigótica no gene SMN1.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A ENCEFALOPATIA BILIRRUBÍNICA CRÔNICA (KERNICTERUS) manifesta-se nos primeiros anos de vida pela clássica TÉTRADE DE SEQUELAS NEUROLÓGICAS PERMANENTES:\n1) PARALISIA CEREBRAL DISCINÉTICA / COREOATETOIDE: Caracterizada por hipotonia axial inicial nos primeiros meses que evolui para hipertonia distônica e movimentos anormais involuntários sinuosos e contorcidos (coreoatetose) decorrentes da destruição do globo pálido e núcleos subtalâmicos;\n2) PERDA AUDITIVA NEUROSSENSORIAL / NEUROPATIA AUDITIVA: Varia desde hipoacusia para altas frequências até surdez profunda bilateral por necrose do núcleo coclear e do oitavo par craniano no tronco encefálico (BERA/PEATE persistentemente alterado);\n3) PARALISIA DO OLHAR VERTICAL CONJUGADO: Incapacidade ou limitação de elevar os olhos para cima (olhar para cima), decorrente da lesão do teto mesencefálico e núcleos oculomotores;\n4) DISPLASIA DO ESMALTE DENTÁRIO DECÍDUO: Hipoplasia do esmalte e pigmentação esverdeada ou amarelada dos dentes de leite, decorrente do depósito de bilirrubina nas matrizes do dente em mineralização durante o período neonatal agudo.',
    comentariosAlternativas: {
      A: 'Correta. Tétrade clássica do Kernicterus crônico: paralisia cerebral coreoatetoide, surdez neurossensorial, paralisia do olhar vertical e displasia dentária.',
      B: 'Incorreta. A paralisia cerebral espástica (diplegia espástica) decorre de leucomalácia periventricular em prematuros; o kernicterus causa PC discinética/coreoatetoide.',
      C: 'Incorreta. A síndrome de West é uma encefalopatia epiléptica com hipsarritmia ao EEG e espasmos infantis, não a tétrade do kernicterus.',
      D: 'Incorreta. A AME tipo 1 é doença do neurônio motor inferior (corno anterior da medula) com hipotonia pura, arreflexia e fasciculações de língua.',
    },
  },
  {
    id: 'ped-neo-098',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Critérios de Suspensão de Fototerapia e Efeito Rebote',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo de 38 semanas, portador de doença hemolítica por incompatibilidade ABO com Coombs Direto positivo (+/4+), foi internado com 24 horas de vida com BT de 15,2 mg/dL. Após 36 horas de fototerapia intensiva (com 60 horas de vida), nova coleta de sangue demonstra dosagem de bilirrubina total de 11,0 mg/dL, valor que se encontra 3,0 mg/dL abaixo do limiar de corte para indicação de fototerapia na curva específica para sua idade e grupo de risco. O médico assistente suspende a fototerapia. Qual é a conduta preconizada com relação à alta hospitalar e à avaliação do efeito rebote da bilirrubina?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Manter o paciente em observação clínica e colher nova dosagem de bilirrubina total de controle (avaliação de rebote) após 12 a 24 horas da suspensão da fototerapia, pois a presença de doença hemolítica é fator de risco maior para ascensão rebote da bilirrubina.',
      },
      {
        id: 'B',
        texto:
          'Dar alta hospitalar imediata e definitiva sem necessidade de retorno, pois uma vez suspensa a fototerapia a hemólise imunológica cessa de forma irreversível.',
      },
      {
        id: 'C',
        texto:
          'Reiniciar a fototerapia profilática em menor intensidade durante o sono por mais 7 dias para evitar qualquer possibilidade de rebote.',
      },
      {
        id: 'D',
        texto:
          'Prescrever ampicilina e gentamicina intramuscular em regime ambulatorial para acelerar o clareamento cutâneo da bilirrubina residual.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A suspensão da fototerapia é recomendada quando a bilirrubina total cai para níveis seguros, habitualmente 2 a 3 mg/dL abaixo do limiar que indicou o início da terapia para a idade cronológica em horas. No entanto, após o desligamento da fototerapia, ocorre frequentemente o FENÔMENO DE REBOTE (ascensão dos níveis de bilirrubina sérica pelo equilíbrio da bilirrubina tecidual com o plasma somado à produção contínua de bilirrubina). Os FATORES DE RISCO PARA REBOTE SIGNIFICATIVO são: 1) Doença hemolítica isoimune comprovada (Rh ou ABO com Coombs positivo); 2) Idade gestacional < 38 semanas; 3) Fototerapia iniciada precocemente (< 72 horas de vida). Nesses recém-nascidos de risco, é OBRIGATÓRIA a mensuração de controle da bilirrubina total sérica entre 12 e 24 horas após a suspensão da fototerapia antes de conceder a alta hospitalar, garantindo que o nível não retornou à faixa terapêutica.',
    comentariosAlternativas: {
      A: 'Correta. Pacientes com doença hemolítica isoimune possuem alto risco de rebote e exigem dosagem de controle após 12 a 24 horas.',
      B: 'Incorreta. A hemólise não cessa com o fim da fototerapia e o rebote pode atingir níveis perigosos sem vigilância.',
      C: 'Incorreta. Fototerapia noturna domiciliar profilática não existe e não tem base científica.',
      D: 'Incorreta. Antibióticos não têm ação sobre a bilirrubina e aumentam resistência bacteriana.',
    },
  },
  {
    id: 'ped-neo-099',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Hemorragia Fetomaterna Maciça e Teste de Kleihauer-Betke',
    isRevisao: false,
    enunciado:
      'Puérpera de 32 anos, tipo O negativo com Coombs Indireto negativo no pré-natal, dá à luz por cesariana de emergência decorrente de descolamento prematuro da placenta (DPP) a termo a um recém-nascido do grupo O positivo com Coombs Direto negativo, que apresentou anemia grave ao nascer (Hb = 7,5 g/dL) necessitando de transfusão imediata. Sabendo-se que a dose convencional de imunoglobulina anti-D (300 mcg ou 1.500 UI) neutraliza até 30 mL de sangue fetal total (ou 15 mL de concentrado de hemácias fetais), e diante da suspeita de hemorragia fetomaterna maciça no descolamento de placenta, qual exame laboratorial deve ser realizado no sangue materno para quantificar o volume da transfusão fetomaterna e ajustar a dose de imunoglobulina anti-D?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Teste de Kleihauer-Betke (ou citometria de fluxo para dosagem de hemácias com HbF), que quantifica a porcentagem de hemácias fetais circulantes no sangue materno com base na resistência da hemoglobina fetal à eluição ácida.',
      },
      {
        id: 'B',
        texto:
          'Biópsia de medula óssea materna com mielograma e coloração pelo azul da Prússia (método de Perls) para avaliar o estoque de ferro nos macrófagos.',
      },
      {
        id: 'C',
        texto:
          'Dosagem de alfa-fetoproteína sérica na urina de 24 horas da puérpera com cromatografia líquida de alta resolução.',
      },
      {
        id: 'D',
        texto:
          'Teste do pezinho ampliado colhido da mãe no puerpério imediato com dosagem de tripsina imunorreativa.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Em situações com alto risco de HEMORRAGIA FETOMATERNA MACIÇA (descolamento prematuro da placenta, placenta prévia sangrante, trauma abdominal materno grave, descolamento manual de placenta), o volume de sangue fetal transferido para a circulação materna pode ultrapassar amplamente os 30 mL de sangue total cobertos pela ampola padrão de 300 mcg de imunoglobulina anti-D. Nesses casos, a dose padrão será insuficiente e a puérpera sofrerá sensibilização Rh caso não receba doses adicionais. O exame padrão-ouro para quantificar essa hemorragia é o TESTE DE KLEIHAUER-BETKE (ou citometria de fluxo anti-HbF). O teste baseia-se na propriedade da hemoglobina fetal (HbF) de ser RESISTENTE À ELUIÇÃO ÁCIDA, enquanto a hemoglobina adulta (HbA) materna é prontamente eluída em pH ácido. Ao microscópio, as hemácias maternas tornam-se "células fantasmas" descoradas, enquanto as hemácias fetais permanecem intensamente coradas de rosa brilhante. A contagem do percentual de células fetais permite calcular a volemia de sangue fetal transferida: cada 30 mL adicionais de sangue fetal exigirão uma ampola adicional de 300 mcg de anti-D.',
    comentariosAlternativas: {
      A: 'Correta. O teste de Kleihauer-Betke quantifica eritrócitos fetais por resistência da HbF ao ácido, permitindo calcular doses extras de anti-D.',
      B: 'Incorreta. Mielograma avalia estoques de ferro na medula e nada tem a ver com contagem de hemácias fetais na circulação materna.',
      C: 'Incorreta. Alfa-fetoproteína não é teste quantitativo de eritrócitos fetais para ajuste de dose de RhIG.',
      D: 'Incorreta. Tripsonogênio imunorreativo é teste de triagem neonatal para fibrose cística no recém-nascido.',
    },
  },
  {
    id: 'ped-neo-100',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Caso Integrado Master de Icterícia Neonatal Grave e Encefalopatia',
    isRevisao: false,
    enunciado:
      'Recém-nascido do sexo masculino, a termo (39 semanas), peso de 3.300 g, filho de mãe multípara O negativo com história de cesariana prévia sem profilaxia com anti-D. Com 10 horas de vida, o neonato apresenta icterícia precoce evidente na face e tronco (Zona II de Kramer). Com 18 horas de vida, a icterícia progride para as pernas e plantas dos pés (Zona V). O exame físico revela palidez cutaneomucosa, fígado palpável a 3 cm do RCD, baço a 2 cm do RCE, tônus discretamente reduzido e sucção débil. Exames colhidos com 18h de vida mostram:\n- Tipagem do RN: A positivo; Coombs Direto: fortemente positivo (4+/4+);\n- Hemograma: Hb = 10,2 g/dL; Ht = 30%; Reticulócitos = 16%; presença numerosa de eritroblastos no sangue periférico;\n- Bilirrubina Total = 18,5 mg/dL (Bilirrubina Indireta = 17,8 mg/dL; Bilirrubina Direta = 0,7 mg/dL);\n- Albumina sérica = 2,8 g/dL.\nO gráfico de risco da AAP/SBP para 18 horas de vida com fatores de risco indica o limiar de fototerapia em 10,0 mg/dL e o limiar de exsanguinotransfusão em 18,0 mg/dL. Diante desse quadro clínico grave e integrado, qual é a conduta médica global, imediata e coordenada que deve ser executada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Internar em UTI Neonatal em Fototerapia Intensiva de múltiplos focos de luz azul (irradiância ≥ 30 microWatts/cm²/nm); acionar o banco de sangue em caráter de emergência para preparo de concentrado de hemácias A ou O Rh negativo reconstituído com plasma AB para Exsanguinotransfusão de dupla volemia (160 mL/kg); iniciar Imunoglobulina Humana Intravenosa (0,5 a 1,0 g/kg) enquanto se providenciam os acessos vasculares e monitorização contínua.',
      },
      {
        id: 'B',
        texto:
          'Colocar em banho de sol matinal por 30 minutos, prescrever suplementação com fórmula láctea em mamadeira para diluir a bilirrubina e dar alta hospitalar com retorno em 7 dias.',
      },
      {
        id: 'C',
        texto:
          'Indicar biópsia hepática imediata e colangiografia intraoperatória de urgência por suspeita diagnóstica prioritária de Atresia de Vias Biliares Extra-Hepáticas com cirrose biliar secundária.',
      },
      {
        id: 'D',
        texto:
          'Realizar exsanguinotransfusão utilizando exclusivamente sangue total de doador adulto A positivo sem radiação e sem gluconato de cálcio, suspendendo qualquer modalidade de fototerapia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Esta questão final integra com maestria todo o algoritmo diagnóstico e terapêutico da HIPERBILIRRUBINEMIA NEONATAL GRAVE E DA DOENÇA HEMOLÍTICA ISOIMUNE cobrado nos grandes concursos:\n1) DIAGNÓSTICO: Doença Hemolítica Perinatal Grave por Aloimunização Rh (mãe O Rh- sensibilizada, concepto A Rh+ com Coombs Direto 4+, anemia hemolítica precoce com Hb 10,2 g/dL, reticulocitose intensa de 16%, eritroblastose e hepatoesplenomegalia) associada à fase inicial de Encefalopatia Bilirrubínica (letargia, hipotonia e sucção débil com BT de 18,5 mg/dL às 18h de vida, ultrapassando a curva de corte de EST);\n2) CONDUTA IMEDIATA MULTIMODAL:\n   - Fototerapia intensiva contínua de alta irradiância (≥ 30 microWatts/cm²/nm) cobrindo a máxima superfície corporal (berço LED inferior + painel superior);\n   - Acionamento imediato do Banco de Sangue para EST de dupla volemia (2 x 80 mL/kg = 160 mL/kg) com sangue fresco (< 5 dias), leucorreduzido e irradiado: hemácias O ou A Rh NEGATIVAS suspensas em plasma AB (sem anti-D nem iso-hemaglutininas);\n   - Administração imediata de Imunoglobulina Humana Endovenosa (IVIG) na dose de 0,5 a 1,0 g/kg para bloquear os receptores Fc dos macrófagos e frear a hemólise;\n   - Instalação de cateteres venoso e arterial umbilicais, monitorização multiparamétrica de ECG e saturação, vigilância metabólica para hipocalcemia e glicemia.',
    comentariosAlternativas: {
      A: 'Correta. Pacote de intervenção integrada máxima de emergência neonatal preconizado pelas diretrizes da SBP e da AAP.',
      B: 'Incorreta. Conduta omissa, negligente e iatrogênica que resultaria em morte ou sequela grave de kernicterus.',
      C: 'Incorreta. A hiperbilirrubinemia é predominantemente INDIRETA (não conjugada: BI 17,8 vs BD 0,7 mg/dL), descartando atresia biliar.',
      D: 'Incorreta. Sangue Rh+ infundido seria destruído de imediato pelos anticorpos anti-D maternos, e não utilizar gluconato de cálcio causaria parada cardíaca por hipocalcemia.',
    },
  },
];


