export interface RawPuberdadeQuestion {
  id: string;
  grandeArea: 'Pediatria';
  especialidade: 'Pediatria';
  tema: 'Puberdade e seus Distúrbios';
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

export const QUESTOES_PUBERDADE: RawPuberdadeQuestion[] = [
  {
    id: 'ped-pub-001',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Fisiologia do Eixo Hipotálamo-Hipófise-Gonadal: Reativação da Pulsatilidade de GnRH',
    isRevisao: false,
    enunciado:
      'Durante a infância, o eixo hipotálamo-hipófise-gonadal (HHG) permanece em estado de quiescência funcional devido à intensa sensibilidade aos baixos níveis circulantes de esteroides sexuais e à inibição central ativa por vias neurais GABAérgicas. A deflagração biológica da puberdade decorre de uma reprogramação neuroendócrina central no hipotálamo. Qual é o evento neuroendócrino primário responsável pelo início da puberdade verdadeira (gonadarca)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Reativação da secreção pulsátil do Hormônio Liberador de Gonadotrofinas (GnRH) pelo hipotálamo medial basal, caracterizada inicialmente por pulsos noturnos de GnRH durante o sono de ondas lentas, estimulados pela via das kisspeptinas e leptina.',
      },
      {
        id: 'B',
        texto:
          'Produção contínua e não pulsátil de testosterona pela glândula pineal em resposta à luz solar diurna.',
      },
      {
        id: 'C',
        texto:
          'Inibição total e permanente da liberação de LH e FSH pela adeno-hipófise mediada por prolactina.',
      },
      {
        id: 'D',
        texto:
          'Liberação primária de estrógenos pela zona glomerulosa do córtex da suprarrenal sem participação do sistema nervoso central.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisiologia da Ativação do Eixo Hipotálamo-Hipófise-Gonadal (HHG) na Puberdade:\n\n1. O "Freio Central" na Infância:\n   - Após a "minipuberdade" dos primeiros meses de vida, o eixo HHG entra em período de dormência funcional;\n   - Esse freio é mantido por neurotransmissores inibitórios (especialmente o GABA e o neuropeptídeo Y) e pela extrema sensibilidade do hipotálamo ao feedback negativo dos mínimos níveis basais de esteroides gonadais ("gonadostato" hipersensível);\n\n2. O Despertar Neuroendócrino da Puberdade:\n   - Ao redor dos 8 aos 11 anos, ocorre diminuição do tônus inibitório e ativação de vias estimulatórias neurais, cujo principal gatilho é o SISTEMA DAS KISSPEPTINAS (codificadas pelo gene KISS1 e seu receptor acoplado à proteína G, KISS1R/GPR54);\n   - Sinais metabólicos periféricos (especialmente a LEPTINA, produzida pelo tecido adiposo, e a neurocinina B) sinalizam ao cérebro que o organismo possui reserva nutricional crítica para a reprodução;\n   - O neurônio secretor de GnRH volta a disparar de forma PULSÁTIL;\n\n3. Cronologia dos Pulsos:\n   - No início da puberdade, os pulsos de GnRH ocorrem EXCLUSIVAMENTE DURANTE O SONO (sono sincronizado/ondas lentas e sono REM);\n   - Esses pulsos de GnRH estimulam os gonadotrofos hipofisários a sintetizar e liberar pulsos noturnos de Hormônio Luteinizante (LH) e Hormônio Folículo-Estimulante (FSH);\n   - Com a progressão da puberdade para estágios intermediários e tardios, a pulsatilidade estende-se também para o período diurno, sustentando a secreção contínua de esteroides gonadais.',
    comentariosAlternativas: {
      A: 'Correta. A secreção pulsátil noturna de GnRH induzida por kisspeptinas/leptina é o evento primário que ativa a cascata de LH/FSH da gonadarca.',
      B: 'Incorreta. A secreção contínua (não pulsátil) dessensibiliza receptores e bloqueia o eixo; a pineal secreta melatonina e não testosterona.',
      C: 'Incorreta. Ocorre aumento da liberação pulsátil de LH e FSH, e não sua inibição.',
      D: 'Incorreta. A puberdade verdadeira (gonadarca) é estritamente dependente do eixo hipotálamo-hipófise; a glândula suprarrenal participa da adrenarca e secreta andrógenos na zona reticular.',
    },
  },
  {
    id: 'ped-pub-002',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Fisiologia Hormonal Feminina: Ação de FSH e LH na Esteroidogênese Ovariana',
    isRevisao: false,
    enunciado:
      'No sexo feminino, a reativação puberal do eixo hipotálamo-hipófise-ovário resulta na diferenciação folicular e na produção dos hormônios responsáveis pelo desenvolvimento dos caracteres sexuais secundários. Considerando o modelo fisiológico das duas células e duas gonadotrofinas no ovário puberal, qual é o papel específico do Hormônio Folículo-Estimulante (FSH) e do Hormônio Luteinizante (LH)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O LH estimula as células da teca interna a sintetizar andrógenos (androstenediona e testosterona), enquanto o FSH atua sobre as células da granulosa estimulando a enzima aromatase (CYP19A1), que converte esses andrógenos em estradiol.',
      },
      {
        id: 'B',
        texto:
          'O FSH atua exclusivamente destruindo o epitélio ovariano, enquanto o LH converte estradiol diretamente em progesterona pura.',
      },
      {
        id: 'C',
        texto:
          'O LH atua apenas na placenta durante a gestação e o FSH secreta prolactina na medula ovariana.',
      },
      {
        id: 'D',
        texto:
          'Ambos os hormônios atuam exclusivamente na glândula tireoide estimulando a síntese de tiroxina livre.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Modelo das Duas Células e Duas Gonadotrofinas no Ovário:\n\n1. Células da Teca Interna (Alvo do LH):\n   - O LH liga-se aos seus receptores de membrana nas células da TECA INTERNA;\n   - Estimula a captação de colesterol e a atividade enzimática da desmolase (CYP11A1) e 17-alfa-hidroxilase/17,20-liase (CYP17A1);\n   - Produção resultante: ANDRÓGENOS (principalmente androstenediona e testosterona);\n   - As células da teca são incapazes de produzir estrógenos porque não expressam a enzima aromatase;\n\n2. Células da Granulosa (Alvo do FSH):\n   - O FSH liga-se aos seus receptores nas CÉLULAS DA GRANULOSA;\n   - Estimula a proliferação celular folicular e a expressão/atividade da enzima AROMATASE (CYP19A1);\n   - Os andrógenos sintetizados pela teca difundem-se através da lâmina basal para as células da granulosa;\n   - A aromatase converte a testosterona em ESTRADIOL (17-beta-estradiol) e a androstenediona em estrona;\n\n3. Papel do Estradiol na Menina:\n   - É o principal hormônio responsável pelo desenvolvimento dos caracteres sexuais femininos: induz a telarca (desenvolvimento dos brotos mamários e ductos galactóforos), modifica o epitélio vaginal (cornificação), estimula o estirão estatural precoce e promove a maturação e fusão das placas epifisárias de crescimento.',
    comentariosAlternativas: {
      A: 'Correta. Síntese de andrógenos na teca estimulada por LH e sua aromatização em estradiol na granulosa estimulada por FSH define a teoria das duas células.',
      B: 'Incorreta. O FSH não destrói o epitélio folicular; ele promove a proliferação da granulosa e a sobrevida folicular.',
      C: 'Incorreta. O LH atua na teca ovariana e células de Leydig, não secretando prolactina.',
      D: 'Incorreta. As gonadotrofinas LH e FSH atuam nas gônadas (ovários e testículos) e não na tireoide.',
    },
  },
  {
    id: 'ped-pub-003',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Fisiologia Hormonal Masculina: Células de Leydig versus Células de Sertoli',
    isRevisao: false,
    enunciado:
      'Em um adolescente do sexo masculino no início da puberdade, o aumento inicial do volume testicular decorre da ação coordenada do LH e do FSH sobre os dois principais compartimentos testiculares. Em relação à histofisiologia testicular masculina, qual compartimento responde pela maior fração do volume do testículo maduro e qual hormônio comanda essa proliferação?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Os túbulos seminíferos e as células de Sertoli, estimulados primordialmente pelo FSH, respondem por aproximadamente 85% a 90% do volume testicular total do adulto.',
      },
      {
        id: 'B',
        texto:
          'O estroma intersticial e as células de Leydig, estimulados pela aldosterona, respondem por 95% do volume testicular.',
      },
      {
        id: 'C',
        texto:
          'A túnica albugínea e os vasos linfáticos, estimulados pelo glucagon pancreático.',
      },
      {
        id: 'D',
        texto:
          'O epidídimo proximal e as vesículas seminais intrapélvicas estimulados pelo hormônio tireoestimulante.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Histofisiologia do Aumento Testicular na Puberdade Masculina:\n\n1. Compartimento Tubular (Túbulos Seminíferos e Células de Sertoli):\n   - Representa cerca de 85% a 90% do volume total do testículo humano maduro;\n   - É estimulado diretamente pelo FSH (Hormônio Folículo-Estimulante);\n   - O FSH induz a maturação e multiplicação das células de Sertoli, alongamento e enovelamento dos túbulos seminíferos, início da espermatogênese e secreção de Inibina B (que faz feedback negativo sobre o FSH);\n   - Portanto, o CRESCIMENTO DO TESTÍCULO no início da puberdade reflete principalmente a proliferação dos túbulos seminíferos estimulada pelo FSH;\n\n2. Compartimento Intersticial (Células de Leydig):\n   - Representa apenas 10% a 15% da massa testicular total;\n   - Localiza-se no espaço intersticial entre os túbulos seminíferos;\n   - É estimulado pelo LH (Hormônio Luteinizante);\n   - Função primordial: síntese e secreção de TESTOSTERONA;\n   - A testosterona atua localmente nos túbulos (em concentrações intratesticulares altíssimas necessárias para a espermatogênese) e cai na circulação periférica para promover a virilização (aumento do pênis, pelos, espessamento da voz, estirão e aumento de massa muscular).',
    comentariosAlternativas: {
      A: 'Correta. Cerca de 85% a 90% do parênquima testicular corresponde aos túbulos seminíferos com células de Sertoli, sob comando do FSH.',
      B: 'Incorreta. As células de Leydig ocupam apenas 10-15% do volume testicular e são reguladas pelo LH, não pela aldosterona.',
      C: 'Incorreta. A túnica albugínea é uma cápsula fibrosa externa que não responde por 90% do volume e não é regulada por glucagon.',
      D: 'Incorreta. O epidídimo e as vesículas seminais são estruturas ductais anexas fora do parênquima testicular propriamente dito.',
    },
  },
  {
    id: 'ped-pub-004',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Marcos Clínicos Femininos: Telarca (M2) como Primeiro Sinal Puberal',
    isRevisao: false,
    enunciado:
      'Uma menina de 9 anos e 8 meses é levada pela mãe à consulta de puericultura com queixa de que há cerca de dois meses notou o aparecimento de um "pequeno carocinho doloroso" logo abaixo da aréola mamária direita. A criança nega outros sintomas, uso de medicações ou cosméticos. Ao exame físico, a palpação evidencia nódulo subareolar fibroelástico e discreta elevação em montículo da mama e da papila à direita (com discreto aumento do diâmetro areolar), sendo a mama esquerda ainda plana (M1). Não há pelos pubianos visíveis (P1). A velocidade de crescimento no último ano foi de 6,5 cm/ano. Em relação ao primeiro sinal físico de início da puberdade feminina, assinale a opção correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A telarca (estágio M2 de Tanner) é o primeiro sinal clínico do início da puberdade feminina normal, ocorrendo fisiologicamente entre 8 e 13 anos de idade por ação estrogênica ovariana, sendo frequente e benigno o início unilateral ou assimétrico nos primeiros meses.',
      },
      {
        id: 'B',
        texto:
          'O achado de broto mamário unilateral nessa idade é patológico e obriga a realização imediata de biópsia excisional da mama para descartar neoplasia maligna.',
      },
      {
        id: 'C',
        texto:
          'O primeiro sinal de puberdade na menina é invariavelmente a menarca, sendo a telarca um evento tardio que ocorre após os 16 anos.',
      },
      {
        id: 'D',
        texto:
          'Trata-se obrigatoriamente de puberdade precoce central, pois a puberdade normal só pode ter início após os 12 anos completos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Telarca (M2 de Tanner) como Primeiro Sinal da Puberdade Feminina:\n\n1. Definição e Cronologia Normal:\n   - O primeiro marco clínico da puberdade verdadeira na menina é o aparecimento do broto mamário, denominado TELARCA (Estágio M2 de Tanner);\n   - Faixa etária fisiológica: Ocorre normalmente entre os 8 e os 13 anos de idade (idade média no Brasil: ~9,5 a 10 anos);\n   - Fisiopatologia: O broto mamário resulta da proliferação dos ductos galactóforos e do estroma conjuntivo mamário estimulada pelo ESTRADIOL ovariano;\n\n2. Assimetria e Dor (Sinais Benignos Frequentes):\n   - É absolutamente clássico e comum que a telarca se inicie de forma UNILATERAL ou ASSIMÉTRICA em até 30% a 50% das meninas normais;\n   - A mama contralateral costuma surgir semanas ou meses depois;\n   - Pode haver dor leve à palpação local (mastalgia do broto mamário);\n   - Conduta: NÃO biopsiar (biópsia destruiria o broto mamário em formação, causando amastia/hipoplasia definitiva). Deve-se apenas tranquilizar a família e acompanhar a evolução.',
    comentariosAlternativas: {
      A: 'Correta. A telarca (M2) é o primeiro sinal clínico normal entre 8 e 13 anos e frequentemente inicia-se de forma unilateral e dolorosa.',
      B: 'Incorreta. Biópsia de broto mamário é contraindicação absoluta por mutilar a glândula mamária em formação.',
      C: 'Incorreta. A menarca é um evento tardio (M4) e não o primeiro sinal puberal.',
      D: 'Incorreta. Puberdade iniciada aos 9 anos e 8 meses é perfeitamente eutrófica e fisiológica (limite inferior da normalidade: 8 anos).',
    },
  },
  {
    id: 'ped-pub-005',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Fisiologia Hormonal: Adrenarca versus Gonadarca',
    isRevisao: false,
    enunciado:
      'Durante a semiologia do desenvolvimento puberal na infância e adolescência, o pediatra deve distinguir com clareza os fenômenos da Adrenarca e da Gonadarca, pois envolvem eixos neuroendócrinos totalmente independentes. Qual alternativa define corretamente a diferença fisiológica entre esses dois processos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A adrenarca decorre da maturação da zona reticular do córtex adrenal com aumento na secreção de andrógenos adrenais (DHEA, DHEA-S e androstenediona), manifestando-se clinicamente como odor axilar adulto e pubarca/axilarca; enquanto a gonadarca decorre da ativação do eixo hipotálamo-hipófise-gonadal com produção de gonadotrofinas (LH/FSH) e esteroides gonadais (estradiol/testosterona).',
      },
      {
        id: 'B',
        texto:
          'A adrenarca é estimulada pelo FSH ovariano e produz exclusivamente progesterona, enquanto a gonadarca ocorre exclusivamente na medula da glândula adrenal.',
      },
      {
        id: 'C',
        texto:
          'A adrenarca e a gonadarca são termos sinônimos para o mesmo evento de fusão precoce das cartilagens de crescimento dos membros inferiores.',
      },
      {
        id: 'D',
        texto:
          'A gonadarca precede a adrenarca em 10 anos e decorre de secreção contínua de paratormônio.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diferenciação Biológica: Adrenarca versus Gonadarca:\n\n1. Adrenarca (Eixo Hipotálamo-Hipófise-Adrenal):\n   - Maturação funcional da ZONA RETICULAR do córtex da suprarrenal (por volta dos 6 a 8 anos de idade);\n   - Aumento enzimático (17-alfa-hidroxilase e 17,20-liase) gerando elevação progressiva de ANDRÓGENOS ADRENAIS fracos: DHEA (desidroepiandrosterona), DHEA-S (sulfato de desidroepiandrosterona) e androstenediona;\n   - Manifestações clínicas:\n     - Odor apócrino axilar característico de adulto ("odor axilar");\n     - Oleosidade na pele e no couro cabeludo, com acne leve;\n     - PUBARCA (aparecimento dos primeiros pelos pubianos) e axilarca;\n   - IMPORTANTE: A adrenarca NÃO depende de GnRH, LH ou FSH e NÃO induz telarca nem aumento testicular;\n\n2. Gonadarca (Eixo Hipotálamo-Hipófise-Gonadal):\n   - É a PUBERDADE VERDADEIRA propriamente dita;\n   - Reativação pulsátil de GnRH -> liberação de LH e FSH pela hipófise -> produção de estradiol nos ovários e testosterona nos testículos;\n   - Manifestações clínicas: Telarca (M2) nas meninas, aumento do volume testicular >= 4 mL (G2) nos meninos e estirão de crescimento.',
    comentariosAlternativas: {
      A: 'Correta. Adrenarca = andrógenos da zona reticular da adrenal (DHEA-S/odor/pelos); Gonadarca = ativação do eixo HHG (LH/FSH e esteroides gonadais).',
      B: 'Incorreta. A adrenal é regulada por ACTH e fatores locais, não por FSH ovariano, e produz andrógenos, não progesterona.',
      C: 'Incorreta. São processos endócrinos distintos e não se confundem com fusão epifisária.',
      D: 'Incorreta. A adrenarca habitualmente precede ou coincide com o início da gonadarca em cerca de 1 a 2 anos, sem relação com PTH.',
    },
  },
  {
    id: 'ped-pub-006',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Sequência Cronológica Feminina: Telarca, Pubarca, Estirão e Menarca',
    isRevisao: false,
    enunciado:
      'Uma questão clássica e recorrente nas provas de Residência Médica em Pediatria diz respeito à sequência cronológica habitual dos eventos puberais na menina saudável. Assinale a alternativa que apresenta a ordem cronológica correta dos marcos puberais femininos:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Telarca (M2) -> Pubarca (P2) -> Pico de velocidade de crescimento / Estirão puberal precoce (M2-M3) -> Menarca (habitualmente em M4) -> Desaceleração e término do crescimento.',
      },
      {
        id: 'B',
        texto:
          'Menarca -> Estirão puberal máximo -> Pubarca -> Telarca.',
      },
      {
        id: 'C',
        texto:
          'Pubarca -> Menarca -> Pico de velocidade de crescimento -> Telarca.',
      },
      {
        id: 'D',
        texto:
          'Estirão puberal máximo -> Menarca -> Telarca -> Pubarca.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Sequência Cronológica Fisiológica da Puberdade Feminina:\n\n1. Telarca (M2 de Tanner):\n   - É o PRIMEIRO marco clínico, surgindo entre 8 e 13 anos (média de 9,5 a 10 anos);\n\n2. Pubarca (P2 de Tanner):\n   - Surge habitualmente poucos meses após a telarca (ou simultaneamente);\n\n3. Pico de Velocidade de Crescimento (PVC - O Estirão):\n   - No sexo feminino, o estirão ocorre PRECOCEMENTE no desenvolvimento puberal, habitualmente entre os estágios M2 e M3 de Tanner (velocidade média de 8 a 9 cm/ano);\n\n4. Menarca (Primeira Menstruação):\n   - É um EVENTO TARDIO da puberdade feminina;\n   - Ocorre em média 2 a 2,5 anos após a telarca (idade média no Brasil de ~12 a 12,5 anos);\n   - Instala-se habitualmente no estágio M4 de Tanner (ou na transição M4/M5);\n\n5. Desaceleração Final do Crescimento:\n   - Como o estirão já ocorreu ANTES da menarca, a primeira menstruação marca o início da desaceleração rápida do crescimento;\n   - O ganho estatural residual após a menarca é modesto (em média de 4 a 6 cm).',
    comentariosAlternativas: {
      A: 'Correta. A ordem fisiológica estrita é: Telarca -> Pubarca -> Estirão precoce (M2-M3) -> Menarca (M4) -> Desaceleração final.',
      B: 'Incorreta. A menarca é evento tardio e jamais precede a telarca ou o estirão em condições fisiológicas.',
      C: 'Incorreta. A telarca precede a menarca por mais de 2 anos e o estirão precede a primeira menstruação.',
      D: 'Incorreta. O estirão não ocorre antes do surgimento dos caracteres sexuais secundários.',
    },
  },
  {
    id: 'ped-pub-007',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Estirão Puberal Feminino: Cronologia Precoce e Pico de Velocidade de Crescimento',
    isRevisao: false,
    enunciado:
      'Uma adolescente de 11 anos e 2 meses, com estadiamento puberal de Tanner caracterizado por mamas em M3 e pelos pubianos em P2, é avaliada na consulta ambulatorial. A mensuração seriada de sua estatura revela que ela cresceu 8,8 cm nos últimos 12 meses. A paciente e a mãe questionam se a menina ainda irá passar pelo "estirão" da puberdade. Qual é a orientação médica correta baseada na fisiologia do crescimento puberal feminino?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A adolescente encontra-se exatamente no momento do seu Pico de Velocidade de Crescimento (PVC / estirão puberal), que nas meninas ocorre precocemente entre os estágios M2 e M3 de Tanner, com velocidade média de 8 a 9 cm/ano, antecedendo a menarca.',
      },
      {
        id: 'B',
        texto:
          'A velocidade de 8,8 cm/ano é patológica por deficiência de GH e a paciente precisará de reposição hormonal sintética.',
      },
      {
        id: 'C',
        texto:
          'O estirão feminino só se inicia 2 anos após a menarca, portanto a menina terá nova aceleração para 18 cm/ano aos 16 anos.',
      },
      {
        id: 'D',
        texto:
          'A menina já encerrou 100% do seu crescimento e as cartilagens epifisárias já se encontram completamente fundidas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Características do Estirão Puberal no Sexo Feminino:\n\n1. Tempo de Ocorrência:\n   - Diferente dos meninos (cujo estirão é tardio em G4), o estirão feminino ocorre PRECOCEMENTE, logo nos estágios iniciais/intermediários da puberdade (entre M2 e M3 de Tanner);\n\n2. Magnitude da Velocidade:\n   - O Pico de Velocidade de Crescimento (PVC) feminino situa-se entre 8 e 9 cm/ano (em média 8,5 cm/ano);\n   - O caso clínico (crescimento de 8,8 cm/ano em estágio M3) exemplifica perfeitamente a adolescente em pleno pico do estirão;\n\n3. Mecanismo Fisiológico:\n   - Ocorre por sinergismo entre baixas/médias concentrações de ESTRADIOL e o Hormônio do Crescimento (GH / IGF-1);\n   - O estradiol estimula a secreção hipofisária de pulsos de GH e atua diretamente nos condrócitos da placa epifisária acelerando a proliferação celular;\n\n4. Relação com a Menarca:\n   - O estirão SEMPRE ANTECEDE A MENARCA em cerca de 6 a 12 meses. Quando a menarca finalmente ocorre, a velocidade de crescimento já está em franca desaceleração.',
    comentariosAlternativas: {
      A: 'Correta. A adolescente em M3 com 8,8 cm/ano está vivenciando o pico de velocidade de crescimento (PVC) típico da puberdade feminina.',
      B: 'Incorreta. Essa taxa de 8,8 cm/ano é o ápice fisiológico do estirão puberal feminino e não indica deficiência de GH.',
      C: 'Incorreta. O estirão ocorre antes da menarca e não 2 anos depois; velocidades de 18 cm/ano não existem no estirão humano.',
      D: 'Incorreta. Ela ainda não teve menarca e as epífises ainda não se fecharam, restando crescimento até a fusão completa.',
    },
  },
  {
    id: 'ped-pub-008',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Menarca e Crescimento Residual Pós-Menarca: Fisiologia da Fusão Epifisária',
    isRevisao: false,
    enunciado:
      'Uma adolescente de 12 anos e 6 meses comparece à consulta pediátrica acompanhada pela mãe, relatando que teve sua primeira menstruação (menarca) há cerca de 3 semanas. Ao exame físico, apresenta mamas em estágio M4 de Tanner (com projeção da aréola e papila formando montículo secundário) e pelos pubianos P4. A mãe demonstra preocupação e pergunta: "Doutor, ela menstruou agora, ela ainda vai crescer alguma coisa ou vai parar de crescer de vez?". Qual é a resposta médica técnica correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A menarca é um evento tardio da puberdade e indica que o pico do estirão de crescimento já ocorreu; contudo, a adolescente ainda apresentará um crescimento residual modesto de aproximadamente 4 a 6 cm até a fusão completa das cartilagens epifisárias mediada pelo estrogênio.',
      },
      {
        id: 'B',
        texto:
          'O crescimento é interrompido no mesmo instante da menarca de forma instantânea, com ganho estatural restante rigorosamente igual a zero.',
      },
      {
        id: 'C',
        texto:
          'A menarca sinaliza o início do grande estirão de crescimento feminino, devendo a paciente crescer mais 20 a 25 cm nos próximos 3 anos.',
      },
      {
        id: 'D',
        texto:
          'A paciente só voltará a crescer se receber injeções diárias de hormônio luteinizante sintético.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Menarca e o Crescimento Residual Pós-Menarca:\n\n1. Significado Biológico da Menarca:\n   - A menarca é a primeira hemorragia menstrual ovulatória ou anovulatória da adolescente;\n   - Representa um EVENTO TARDIO da puberdade (ocorre cerca de 2 a 2,5 anos após a telarca, habitualmente no estágio M4 de Tanner);\n   - Sinaliza que o endométrio uterino foi suficientemente exposto e estimulado por concentrações elevadas e sustentadas de estradiol;\n\n2. Crescimento Residual Pós-Menarca:\n   - O Pico de Velocidade de Crescimento (estirão de 8-9 cm/ano) já ocorreu cerca de 6 a 12 meses ANTES da menarca (em M2-M3);\n   - Portanto, a menarca marca a fase de DESACELERAÇÃO E ESGOTAMENTO do potencial de crescimento;\n   - No entanto, o crescimento NÃO cessa no mesmo dia da menarca: o ganho estatural residual médio até a fusão epifisária completa varia de 4 a 6 cm (podendo variar de 2 a 8 cm dependendo do avanço da idade óssea);\n\n3. Papel do Estradiol na Fusão Epifisária:\n   - As altas concentrações de estradiol circulante promovem a apoptose dos condrócitos na placa de crescimento e aceleram a ossificação e fusão das epífises ósseas em ambos os sexos.',
    comentariosAlternativas: {
      A: 'Correta. O pico do estirão já passou, mas a adolescente ainda cresce em média de 4 a 6 cm após a menarca até a fusão das cartilagens.',
      B: 'Incorreta. O crescimento não cessa instantaneamente no dia da menarca; as placas de crescimento levam de 1 a 2 anos para selar completamente.',
      C: 'Incorreta. O estirão já ocorreu em M2-M3; a menarca é evento tardio e não marca o início do estirão.',
      D: 'Incorreta. Não há qualquer indicação de LH exógeno e a evolução pós-menarca é fisiológica.',
    },
  },
  {
    id: 'ped-pub-009',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Marcos Clínicos Masculinos: Aumento do Volume Testicular (G2) com Orquidômetro de Prader',
    isRevisao: false,
    enunciado:
      'Um menino de 10 anos e 4 meses é trazido pelo pai para avaliação de rotina em saúde do adolescente. Ao exame da genitália com o orquidômetro de Prader, o médico palpa ambos os testículos na bolsa escrotal e constata que eles apresentam volume simétrico de 4 mL (comprimento longitudinal de 2,6 cm), associado a leve avermelhamento e afinamento da pele escrotal, sem aumento do pênis (G2) e ausência de pelos pubianos (P1). Qual é a interpretação clínica desse achado semiológico?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O aumento do volume testicular para >= 4 mL (ou diâmetro longitudinal >= 2,5 cm) é o primeiro sinal físico do início da puberdade masculina normal (estágio G2 de Tanner), que ocorre fisiologicamente entre 9 e 14 anos de idade.',
      },
      {
        id: 'B',
        texto:
          'Testículos de 4 mL representam atrofia testicular grave decorrente de orquite bacteriana crônica.',
      },
      {
        id: 'C',
        texto:
          'O primeiro sinal de puberdade no menino é o crescimento peniano em espessura, sendo o volume testicular irrelevante para o estadiamento.',
      },
      {
        id: 'D',
        texto:
          'O paciente já completou todo o seu desenvolvimento puberal e encontra-se no estágio adulto G5 de Tanner.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Aumento Testicular (G2 de Tanner) como Primeiro Sinal da Puberdade Masculina:\n\n1. O Orquidômetro de Prader e Critérios de Início:\n   - O primeiro marco clínico da puberdade no sexo masculino é o AUMENTO DO VOLUME TESTICULAR;\n   - Na infância pré-puberal (G1), o volume testicular é de 1 a 3 mL (comprimento longitudinal < 2,5 cm);\n   - O início da puberdade (Estágio G2 de Tanner) é definido categoricamente quando o volume testicular atinge ou ultrapassa 4 mL no orquidômetro de Prader (ou comprimento longitudinal >= 2,5 cm);\n   - Concomitantemente, a pele escrotal torna-se mais frouxa, avermelhada e com modificação de sua textura rugosa;\n\n2. Faixa Etária Fisiológica Normal:\n   - Ocorre normalmente entre os 9 e os 14 anos de idade (idade média: ~11,5 a 12 anos);\n   - Puberdade precoce no menino: aumento testicular < 9 anos;\n   - Puberdade atrasada no menino: ausência de aumento testicular (> 4 mL) após os 14 anos completos;\n\n3. Ausência de Crescimento Peniano Inicial:\n   - No estágio G2, o pênis AINDA NÃO CRESCE (o pênis permanece infantil, idêntico a G1);\n   - O crescimento peniano só se iniciará subsequentemente no estágio G3.',
    comentariosAlternativas: {
      A: 'Correta. O volume testicular >= 4 mL define o estágio G2 de Tanner e é o primeiro sinal puberal no menino, normal entre 9 e 14 anos.',
      B: 'Incorreta. 4 mL é o marco clássico de ativação gonadal e não atrofia patológica.',
      C: 'Incorreta. O crescimento peniano ocorre em G3 e G4; o primeiro sinal é o aumento testicular.',
      D: 'Incorreta. O estágio adulto G5 apresenta testículos de 20 a 25 mL e pênis adulto, muito acima dos 4 mL iniciais.',
    },
  },
  {
    id: 'ped-pub-010',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Sequência Cronológica Masculina: Testículo, Pênis, Estirão e Espermarca',
    isRevisao: false,
    enunciado:
      'A sequência temporal e cronológica dos eventos puberais masculinos obedece a um padrão biológico bem delimitado. Assinale a alternativa que correlaciona corretamente a ordem fisiológica dos marcos de maturação sexual no adolescente do sexo masculino:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Aumento do volume testicular >= 4 mL (G2) -> Pubarca (P2) -> Aumento do pênis principalmente em comprimento (G3) -> Estirão puberal tardio e aumento do pênis em diâmetro/glande (G4) -> Espermarca / mudança da voz (G4-G5).',
      },
      {
        id: 'B',
        texto:
          'Estirão puberal máximo -> Aumento do volume testicular -> Espermarca -> Pubarca.',
      },
      {
        id: 'C',
        texto:
          'Mudança da voz -> Crescimento peniano em diâmetro -> Aumento testicular -> Pubarca.',
      },
      {
        id: 'D',
        texto:
          'Espermarca -> Pubarca -> Aumento testicular -> Estirão puberal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Sequência Cronológica Fisiológica da Puberdade Masculina:\n\n1. Aumento Testicular (G2):\n   - É o PRIMEIRO SINAL (volume testicular >= 4 mL, idade normal: 9 a 14 anos);\n\n2. Pubarca (P2):\n   - Poucos meses após o aumento testicular, surgem pelos finos e escassos na base do pênis;\n\n3. Crescimento Peniano em Comprimento (G3):\n   - O pênis começa a crescer predominantemente em COMPRIMENTO (alongamento longitudinal);\n   - Testículos atingem entre 6 e 12 mL;\n\n4. O Estirão de Crescimento Tardio e Crescimento Peniano em Diâmetro (G4):\n   - Ao contrário das meninas (que estiram em M2-M3), os meninos têm o seu PICO DE VELOCIDADE DE CRESCIMENTO (PVC) tardiamente, no estágio G4 de Tanner (velocidade média de 10 a 12 cm/ano);\n   - O pênis desenvolve a glande e aumenta significativamente em DIÂMETRO (espessura/calibre);\n   - Testículos atingem 12 a 15 mL;\n\n5. Espermarca e Mudança da Voz (G4 para G5):\n   - A primeira ejaculação com espermatozoides viáveis (espermarca / polução noturna) ocorre habitualmente entre os estágios G3 e G4;\n   - A quebra e mudança definitiva do tom de voz (engrossamento pela ação androgênica na cartilagem tireóidea da laringe) consolida-se em G4-G5.',
    comentariosAlternativas: {
      A: 'Correta. A sequência masculina é: Aumento testicular (G2) -> Pubarca (P2) -> Pênis em comprimento (G3) -> Estirão tardio e pênis em diâmetro (G4) -> Espermarca/voz (G4-G5).',
      B: 'Incorreta. O estirão masculino é tardio (G4) e nunca precede o aumento testicular (G2).',
      C: 'Incorreta. A mudança de voz é um evento tardio de G4-G5 e não precede o aumento do testículo.',
      D: 'Incorreta. A espermarca ocorre após o início do desenvolvimento peniano e testicular e não como primeiro evento.',
    },
  },
  {
    id: 'ped-pub-011',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Estirão Puberal Masculino: Ocorrência Tardia e Magnitude Comparada com o Feminino',
    isRevisao: false,
    enunciado:
      'Um menino de 14 anos, que se encontrava no estágio G3 de Tanner há 1 ano, evolui no último ano com salto no desenvolvimento: seu estadiamento atual é G4 P4, com testículos de 15 mL e aumento evidente do diâmetro peniano. No último ano, sua curva de crescimento registrou um ganho estatural impressionante de 11,2 cm/ano. O residente de pediatria compara o estirão desse paciente com o padrão das meninas. Em relação às diferenças fisiológicas do estirão de crescimento entre os sexos masculino e feminino, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'No sexo masculino, o estirão de crescimento ocorre tardiamente no estágio G4 de Tanner (com pico de velocidade de 10 a 12 cm/ano e ganho estatural total médio de ~28 cm), ao passo que no sexo feminino ele ocorre precocemente em M2-M3 (com pico de 8 a 9 cm/ano e ganho total médio de ~25 cm); esse atraso de 2 anos no início do estirão masculino somado ao maior pico de velocidade explica a diferença média de cerca de 13 cm na estatura adulta final entre homens e mulheres.',
      },
      {
        id: 'B',
        texto:
          'Meninos e meninas apresentam o estirão exatamente na mesma idade cronológica e no mesmo estágio de Tanner, com idêntica velocidade máxima de 5 cm/ano.',
      },
      {
        id: 'C',
        texto:
          'O estirão masculino ocorre exclusivamente nos primeiros 6 meses de vida, cessando completamente aos 2 anos de idade.',
      },
      {
        id: 'D',
        texto:
          'As meninas crescem em média 15 cm a mais do que os meninos na vida adulta porque o estirão feminino é 3 vezes mais rápido.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Dimorfismo Sexual no Estirão de Crescimento Puberal:\n\n1. Cronologia do Estirão nos Dois Sexos:\n   - Meninas: Estirão PRECOCE, no início da puberdade (estágios M2-M3 de Tanner), por volta dos 11,5 a 12 anos;\n   - Meninos: Estirão TARDIO, na fase avançada da puberdade (estágio G4 de Tanner), por volta dos 13,5 a 14 anos;\n\n2. Magnitude da Velocidade (Pico de Velocidade de Crescimento - PVC):\n   - Meninas: PVC médio de 8 a 9 cm/ano;\n   - Meninos: PVC médio de 10 a 12 cm/ano (mais intenso sob ação sinérgica de testosterona e GH);\n\n3. Ganho Estatural Puberal Total:\n   - Meninas ganham em média 20 a 25 cm durante toda a puberdade;\n   - Meninos ganham em média 25 a 30 cm (média de 28 cm) durante a puberdade;\n\n4. Por que os Homens Adultos são em Média 13 cm mais Altos que as Mulheres?\n   - Fator 1: Como os meninos começam o estirão cerca de 2 anos mais tarde que as meninas, eles desfrutam de mais 2 anos de crescimento pré-puberal (à taxa estável de 5 a 6 cm/ano = ganho prévio de ~10 a 12 cm);\n   - Fator 2: O pico de velocidade do estirão masculino é superior em ~2 a 3 cm/ano;\n   - A somatória desses dois fatores biológicos estabelece a clássica diferença média de 13 cm entre as alturas finais adultas de homens e mulheres em todas as populações mundiais.',
    comentariosAlternativas: {
      A: 'Correta. O estirão masculino é tardio (G4), mais veloz (10-12 cm/ano) e precedido por mais 2 anos de crescimento infantil estável, gerando o dimorfismo sexual de ~13 cm.',
      B: 'Incorreta. Meninos estiram em G4 e meninas em M2-M3; a velocidade máxima é de 10-12 cm/ano no menino e 8-9 cm/ano na menina.',
      C: 'Incorreta. O estirão puberal masculino é um fenômeno da segunda década de vida (adolescência).',
      D: 'Incorreta. Os homens são em média cerca de 13 cm mais altos do que as mulheres na estatura final.',
    },
  },
  {
    id: 'ped-pub-012',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Classificação de Tanner: Critérios Detalhados de Desenvolvimento Mamário (M1 a M5)',
    isRevisao: false,
    enunciado:
      'Durante o exame físico de uma adolescente de 13 anos, o examinador observa: a aréola e a papila mamária projetam-se anteriormente para formar uma elevação ou montículo secundário acima do contorno geral da mama. Qual estágio de maturação mamária da Classificação de Tanner corresponde exatamente a essa descrição semiótica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Estágio M4 de Tanner.',
      },
      {
        id: 'B',
        texto:
          'Estágio M2 de Tanner.',
      },
      {
        id: 'C',
        texto:
          'Estágio M3 de Tanner.',
      },
      {
        id: 'D',
        texto:
          'Estágio M1 de Tanner.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Estadiamento de Tanner para Desenvolvimento Mamário Feminino (M1 a M5):\n\n- M1 (Pré-puberal): Apenas elevação da papila mamária; aréola e mama sem projeção (contorno plano idêntico à parede torácica infantil);\n- M2 (Broto Mamário): Primeiro sinal puberal. Elevação da mama e da papila como um pequeno montículo subareolar contínuo, com ampliação do diâmetro da aréola;\n- M3: Maior aumento e elevação de toda a mama e aréola, porém SEM SEPARAÇÃO dos seus contornos (formam um cone contínuo único);\n- M4 (Montículo Secundário - "Mama em Dois Andares"): A aréola e a papila sofrem projeção acentuada, formando uma protuberância secundária que se sobressai acima do contorno do corpo da mama;\n- M5 (Estágio Adulto): Recessão da aréola ao contorno geral da mama, restando apenas a projeção da papila mamária.',
    comentariosAlternativas: {
      A: 'Correta. A projeção da aréola e papila formando um montículo secundário acima do contorno da mama é a definição estrita do estágio M4 de Tanner.',
      B: 'Incorreta. M2 é o broto mamário subareolar inicial.',
      C: 'Incorreta. M3 apresenta aumento de mama e aréola sem separação de contornos (montículo único contínuo).',
      D: 'Incorreta. M1 é a mama infantil plana pré-puberal.',
    },
  },
  {
    id: 'ped-pub-013',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Classificação de Tanner: Estágio Adulto Feminino (M5)',
    isRevisao: false,
    enunciado:
      'Na consulta de hebiatria de uma jovem de 16 anos, a inspeção das mamas revela conformação tipicamente adulta: o tecido mamário adquiriu contorno harmonioso e arredondado, a aréola recuou ao contorno geral do corpo da mama e apenas a papila permanece projetada para a frente. De acordo com a escala de Tanner, qual é o estágio mamário apresentado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Estágio M5 de Tanner.',
      },
      {
        id: 'B',
        texto:
          'Estágio M4 de Tanner.',
      },
      {
        id: 'C',
        texto:
          'Estágio M2 de Tanner.',
      },
      {
        id: 'D',
        texto:
          'Estágio M3 de Tanner.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Estágio M5 de Tanner (Estágio Adulto Definitivo):\n- Caracteriza-se pelo término da maturação glandular mamária;\n- Aspecto anatômico distintivo: A aréola sofre regressão ou incorporação ao contorno geral da mama, desfazendo o montículo secundário que existia no estágio M4;\n- Apenas a PAPILA (mamilo) permanece projetada anteriormente;\n- Observação prática: Em uma proporção significativa de mulheres normais (até 25-30%), o estágio M4 pode persistir durante toda a vida reprodutiva adulta sem progredir formalmente para a recessão areolar de M5, o que é considerado uma variante anatômica normal.',
    comentariosAlternativas: {
      A: 'Correta. Recessão da aréola ao contorno geral da mama com projeção exclusiva da papila define o estágio M5 de Tanner.',
      B: 'Incorreta. M4 apresenta o montículo secundário de aréola e papila sobre a mama.',
      C: 'Incorreta. M2 é o broto mamário inicial da infância.',
      D: 'Incorreta. M3 é o estágio intermediário em cone único.',
    },
  },
  {
    id: 'ped-pub-014',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Classificação de Tanner: Genitália Masculina G1 a G5 e Diferenciação G3 vs G4',
    isRevisao: false,
    enunciado:
      'Um menino de 13 anos e 6 meses é examinado na UBS. O pediatra observa ao exame físico genital: pênis com crescimento evidente em diâmetro (aumento de largura/calibre), desenvolvimento marcante da glande e escroto com pele consideravelmente mais escura e pigmentada, com testículos medindo 14 mL no orquidômetro de Prader. Qual estágio de Tanner para genitália masculina (G) corresponde a este exame?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Estágio G4 de Tanner.',
      },
      {
        id: 'B',
        texto:
          'Estágio G3 de Tanner.',
      },
      {
        id: 'C',
        texto:
          'Estágio G2 de Tanner.',
      },
      {
        id: 'D',
        texto:
          'Estágio G1 de Tanner.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Classificação de Tanner para Genitália Masculina (G1 a G5):\n\n- G1 (Pré-puberal): Testículos, escroto e pênis de dimensões infantis (volume testicular < 4 mL);\n- G2: Aumento do volume testicular para >= 4 mL; escroto com pele avermelhada e textura modificada; pênis sem modificações morfológicas;\n- G3: Crescimento do pênis predominantemente em COMPRIMENTO (alongamento longitudinal); escroto e testículos maiores (6 a 12 mL);\n- G4: Aumento do pênis em DIÂMETRO (largura/espessura) e DESENVOLVIMENTO DA GLANDE; escurecimento e hiperpigmentação evidente da pele escrotal; testículos entre 12 e 15 mL;\n- G5 (Adulto): Genitália com tamanho e formato adulto definitivo; volume testicular > 15 mL (habitualmente 20 a 25 mL).',
    comentariosAlternativas: {
      A: 'Correta. Aumento peniano em diâmetro/calibre, desenvolvimento da glande, escurecimento escrotal e testículos de 14 mL definem o estágio G4 de Tanner.',
      B: 'Incorreta. G3 caracteriza-se pelo aumento predominante em comprimento longitudinal sem desenvolvimento da glande.',
      C: 'Incorreta. G2 é apenas o aumento testicular inicial sem crescimento peniano.',
      D: 'Incorreta. G1 é a genitália infantil pré-puberal.',
    },
  },
  {
    id: 'ped-pub-015',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Classificação de Tanner: Pelos Pubianos (P1 a P5) para Ambos os Sexos',
    isRevisao: false,
    enunciado:
      'No estadiamento dos pelos pubianos (escala P de Tanner), aplicável de maneira similar para meninos e meninas, qual critério anatômico e morfológico estabelece a distinção precisa entre os estágios P4 e P5?',
    alternativas: [
      {
        id: 'A',
        texto:
          'No estágio P4, os pelos são do tipo adulto em espessura, cor e encaracolamento, porém sua distribuição é restrita à sínfise púbica sem atingir as coxas; no estágio P5, a pilosidade adulta espalha-se para a face medial das coxas (formando triângulo com base superior na mulher e distribuição losângica ascendente no homem).',
      },
      {
        id: 'B',
        texto:
          'No estágio P4 não há nenhum pelo no corpo, enquanto no estágio P5 surgem apenas pelos axilares isolados.',
      },
      {
        id: 'C',
        texto:
          'O estágio P4 ocorre exclusivamente em recém-nascidos e o estágio P5 em idosos com mais de 80 anos.',
      },
      {
        id: 'D',
        texto:
          'A diferença entre P4 e P5 é exclusivamente a cor dos pelos, que em P4 são loiros e em P5 são ruivos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Classificação de Tanner para Pelos Pubianos (P1 a P5):\n\n- P1 (Pré-puberal): Ausência de pelos pubianos (apenas velo ou lanugem fina igual à do abdome);\n- P2: Pelos esparsos, longos, finos, levemente pigmentados, lisos ou discretamente encaracolados, localizados na base do pênis/escroto no menino ou ao longo dos grandes lábios na menina;\n- P3: Pelos consideravelmente mais escuros, grossos e encaracolados, expandindo-se sobre a sínfise púbica;\n- P4: Pelos com características de adulto em textura, espessura e ondulação, densos sobre a sínfise púbica, mas que NÃO SE ESTENDEM para a face medial das coxas;\n- P5 (Pilosidade Adulta Típica):\n  - Os pelos assumem distribuição adulta definitiva e ESPALHAM-SE PARA A FACE MEDIAL DAS COXAS;\n  - Conformação geométrica:\n    - No sexo feminino: Formato de triângulo invertido com base superior horizontal clássica;\n    - No sexo masculino: Formato losângico, com linha de pelos estendendo-se superiormente ao longo da linha alba em direção à cicatriz umbilical.',
    comentariosAlternativas: {
      A: 'Correta. P4 tem textura adulta mas é restrito à sínfise; P5 espalha-se para a face medial das coxas com distribuição adulta.',
      B: 'Incorreta. P4 possui abundantes pelos adultos na sínfise púbica.',
      C: 'Incorreta. A escala P de Tanner classifica a adolescência humana.',
      D: 'Incorreta. A classificação avalia densidade, textura e área anatômica de distribuição, não a tonalidade genética capilar.',
    },
  },
  {
    id: 'ped-pub-016',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Semiologia Puberal: Assimetria Fisiológica de Mamas na Telarca Inicial',
    isRevisao: false,
    enunciado:
      'Menina de 10 anos de idade é levada pela mãe muito angustiada ao ambulatório de Pediatria. A mãe relata que há 1 mês notou o surgimento de broto mamário do lado esquerdo (com dor local leve), mas a mama direita continua completamente lisa e sem caroço. A mãe teme que a filha tenha uma deformidade ou tumor unilateral grave. Ao exame físico: mama esquerda em M2 de Tanner, mama direita em M1, pelos pubianos em P1, sem secreção papilar, velocidade de crescimento de 6,2 cm/ano. Qual é a conduta médica correta frente a esse caso?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tranquilizar a família e orientar que o início assimétrico ou unilateral da telarca é uma variação fisiológica absolutamente comum e benigna em até 50% das meninas no início da puberdade, devendo a mama contralateral se desenvolver nos meses subsequentes.',
      },
      {
        id: 'B',
        texto:
          'Solicitar mamografia bilateral de urgência e punção aspirativa por agulha fina (PAAF) do broto mamário esquerdo.',
      },
      {
        id: 'C',
        texto:
          'Prescrever tamoxifeno para bloquear a mama esquerda e tentar igualar o tamanho das mamas.',
      },
      {
        id: 'D',
        texto:
          'Indicar colocação cirúrgica imediata de prótese de silicone na mama direita para corrigir a assimetria estética.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo da Assimetria de Mamas no Início da Puberdade (Tema Clássico de Puericultura):\n- O aparecimento de broto mamário em uma menina de 10 anos situa-se perfeitamente dentro da faixa etária normal da puberdade feminina (8 a 13 anos);\n- A assimetria na telarca inicial (uma mama iniciando em M2 enquanto a outra permanece em M1) ocorre em até 30% a 50% das adolescentes saudáveis;\n- Fisiopatologia: Decorre de pequenas diferenças temporais na sensibilidade local dos receptores teciduais mamários ao estradiol circulante inicial;\n- Na imensa maioria dos casos, a mama contralateral surge dentro de 3 a 6 meses (podendo levar até 1 ano) e o desenvolvimento tende a se equalizar;\n- Conduta: Exclusivamente CLÍNICA e ORIENTADORA. Exames invasivos (mamografia, punção ou biópsia) são FORMALMENTE CONTRAINDICADOS, pois podem destruir de forma irreversível o botão germinativo mamário em formação, gerando assimetria iatrogênica permanente.',
    comentariosAlternativas: {
      A: 'Correta. A telarca assimétrica/unilateral inicial aos 10 anos é fisiológica, benigna e autolimitada, exigindo apenas orientação e tranquilização.',
      B: 'Incorreta. Mamografia e PAAF são exames danosos e totalmente descabidos para um broto mamário fisiológico.',
      C: 'Incorreta. O tamoxifeno bloquearia o desenvolvimento normal da puberdade da criança.',
      D: 'Incorreta. Cirurgia plástica é proscrita durante a fase de crescimento glandular na adolescência.',
    },
  },
  {
    id: 'ped-pub-017',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Caso Clínico: Menarca Recente e Projeção de Crescimento Residual',
    isRevisao: false,
    enunciado:
      'Uma menina de 12 anos e 4 meses, com estatura atual de 152 cm, comparece à consulta informando que sua menarca ocorreu há 2 meses. No prontuário, consta que a telarca teve início aos 10 anos de idade e que ela apresentou velocidade de crescimento de 8,5 cm/ano dos 11 aos 12 anos. O exame físico demonstra mamas M4 e pelos P4 de Tanner. A estatura-alvo parental calculada (canal familiar) é de 158 cm. Considerando a fisiologia do crescimento residual pós-menarca, qual estatura final estimada mais provável essa adolescente atingirá na vida adulta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Entre 156 e 158 cm, pois o crescimento residual pós-menarca é habitualmente de 4 a 6 cm, o que manterá a paciente perfeitamente compatível com seu canal genético familiar.',
      },
      {
        id: 'B',
        texto:
          'Exatamente 180 cm, pois o estirão de crescimento só começa de verdade após a menarca.',
      },
      {
        id: 'C',
        texto:
          'Permanecerá obrigatoriamente estagnada em 152 cm, pois nenhuma menina cresce nem 1 milímetro após menstruar.',
      },
      {
        id: 'D',
        texto:
          'Apresentará perda estatural regressiva de 10 cm devido à osteopenia pós-menarca.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Cálculo e Previsão do Crescimento Residual Pós-Menarca:\n- Dados do caso clínico:\n  - Estatura atual: 152 cm;\n  - Menarca recente (há 2 meses, aos 12 anos e 4 meses, que é a idade média brasileira);\n  - Telarca aos 10 anos (intervalo telarca-menarca = 2 anos e 4 meses, padrão típico);\n  - Estirão já vivenciado (PVC de 8,5 cm/ano entre 11 e 12 anos);\n  - Estágio de Tanner atual: M4 P4;\n  - Alvo parental: 158 cm;\n- Fisiologia do Crescimento Residual:\n  - O ganho estatural após a menarca até a fusão epifisária definitiva situa-se em média entre 4 e 6 cm (habitualmente de 3 a 7 cm);\n  - Somando 152 cm + 4 a 6 cm de crescimento residual = estatura final adulta esperada entre 156 e 158 cm;\n  - Esse valor coincide com precisão com a estatura-alvo familiar (158 cm), demonstrando que o desenvolvimento estatural e puberal da paciente é rigorosamente harmônico e fisiológico.',
    comentariosAlternativas: {
      A: 'Correta. Com ganho residual habitual de 4 a 6 cm pós-menarca, a estatura final esperada será de 156 a 158 cm, compatível com o canal familiar.',
      B: 'Incorreta. Atingir 180 cm exigiria um ganho de 28 cm pós-menarca, o que é biologicamente impossível após o término do pico do estirão.',
      C: 'Incorreta. O crescimento não cessa abruptamente na menarca; há desaceleração gradual com ganho residual.',
      D: 'Incorreta. A menarca não causa regressão estatural nem osteopenia.',
    },
  },
  {
    id: 'ped-pub-018',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Caso Clínico: Menino em Estágio G2 P2 com Preocupação com o Tamanho Peniano',
    isRevisao: false,
    enunciado:
      'Um menino de 12 anos e 2 meses é levado ao consultório pelo pai, que relata preocupação: "Doutor, os amigos da escola dele já estão mais altos e com o corpo mudando, mas o pênis dele ainda continua pequeno e infantil, não cresceu nada". Ao exame físico do adolescente: pelos pubianos finos e escassos na base do pênis (P2), pênis de 5 cm de comprimento e 1,5 cm de diâmetro (sem aumento em relação à infância), testículos simétricos na bolsa escrotal medindo 6 mL bilateralmente no orquidômetro de Prader com escroto avermelhado (G2-G3 inicial). A velocidade de crescimento no último ano foi de 5,8 cm/ano. Qual é a conduta e a explicação médica correta a ser fornecida à família?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Esclarecer que o paciente já iniciou a puberdade normalmente (pois seus testículos já medem 6 mL, bem acima do marco inicial de 4 mL de G2); e que na fisiologia masculina normal o crescimento peniano (G3 em comprimento e G4 em diâmetro) e o estirão de crescimento (G4) ocorrem posteriormente ao aumento testicular.',
      },
      {
        id: 'B',
        texto:
          'Prescrever injeções intramusculares de testosterona em altas doses imediatamente para forçar o crescimento do pênis em 30 dias.',
      },
      {
        id: 'C',
        texto:
          'Indicar cirurgia de implante peniano com urgência para evitar trauma psicológico irreversível.',
      },
      {
        id: 'D',
        texto:
          'Diagnosticar hipogonadismo hipogonadotrófico congênito definitivo e solicitar ressonância de sela túrcica de emergência.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Orientação Semiótica da Puberdade Masculina em Estágio G2:\n- O motivo da consulta (pênis ainda infantil com 12 anos) é uma queixa extremamente comum nos consultórios de hebiatria e pediatria;\n- O exame físico revela testículos de 6 mL:\n  - Como o marco formal de início da puberdade é o volume testicular >= 4 mL, esse adolescente JÁ ESTÁ NA PUBERDADE há alguns meses;\n- Fisiologia da Sequência Masculina:\n  - O pênis NÃO CRESCE no início da puberdade (estágio G2);\n  - Ele começará a crescer em comprimento no estágio G3 (quando os testículos atingirem 8 a 10 mL);\n  - E terá seu grande crescimento em diâmetro e desenvolvimento da glande no estágio G4, momento em que também acontecerá o seu pico de velocidade de crescimento (estirão de 10-12 cm/ano);\n- Conduta: NÃO prescrever testosterona exógena (o que fecharia precocemente as cartilagens epifisárias e encurtaria a estatura final do menino). Apenas tranquilizar e acolher a família e o adolescente com acompanhamento ambulatorial periódico.',
    comentariosAlternativas: {
      A: 'Correta. O volume testicular de 6 mL comprova puberdade em andamento; o crescimento peniano e o estirão virão nas etapas seguintes.',
      B: 'Incorreta. Testosterona exógena sem indicação acelera a maturação óssea, fecha as epífises e causa perda da altura adulta final.',
      C: 'Incorreta. Cirurgia peniana é um procedimento mutilante e totalmente absurdo em um adolescente com desenvolvimento fisiológico em curso.',
      D: 'Incorreta. O paciente não tem hipogonadismo, pois já apresenta ativação gonadal espontânea comprovada pelo testículo de 6 mL.',
    },
  },
  {
    id: 'ped-pub-019',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Ginecomastia Puberal Fisiológica Masculina: Fisiopatologia e Conduta',
    isRevisao: false,
    enunciado:
      'Um adolescente do sexo masculino de 13 anos e 8 meses, com estadiamento puberal de Tanner G3 P3 (testículos de 10 mL), comparece à consulta queixando-se de dor e aumento de volume em ambas as mamas há cerca de 4 meses. O paciente relata vergonha de tirar a camisa na aula de educação física. Ao exame físico, palpa-se tecido glandular mamário concêntrico, móvel, fibroelástico e ligeiramente doloroso logo abaixo do complexo aréolo-papilar bilateralmente, medindo 2,5 cm de diâmetro à direita e 3,0 cm à esquerda, sem retração cutânea ou descarga papilar. O restante do exame físico é compatível com a idade. Em relação à ginecomastia puberal fisiológica, qual é a fisiopatologia subjacente e a conduta recomendada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Decorre de um desbalanço transitório entre as concentrações circulantes de estrógenos e andrógenos (aumento relativo da aromatização periférica da testosterona em estradiol durante os estágios G3 e G4); a conduta padrão é expectante com tranquilização e reavaliações clínicas periódicas, pois mais de 80% a 90% dos casos regridem espontaneamente em 1 a 2 anos.',
      },
      {
        id: 'B',
        texto:
          'Trata-se de neoplasia maligna primária da mama masculina com indicação de mastectomia radical bilateral imediata associada a quimioterapia.',
      },
      {
        id: 'C',
        texto:
          'É causada por infecção congênita tardia por vírus herpes simples que exige tratamento com aciclovir oral contínuo até os 30 anos.',
      },
      {
        id: 'D',
        texto:
          'A conduta mandatória é a castração cirúrgica bilateral para extinguir a produção de testosterona.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Ginecomastia Puberal Fisiológica no Menino:\n\n1. Epidemiologia e Incidência:\n   - É um fenômeno benigno extremamente comum, acometendo até 50% a 65% dos adolescentes do sexo masculino durante a puberdade;\n   - Ocorre com pico de incidência entre 13 e 14 anos de idade, tipicamente nos estágios G3 e G4 de Tanner;\n\n2. Fisiopatologia:\n   - Durante a fase intermediária da puberdade masculina, a produção testicular de testosterona aumenta rapidamente;\n   - Nos tecidos periféricos (especialmente no tecido adiposo e muscular), a enzima AROMATASE converte parte dessa testosterona em ESTRADIOL;\n   - Cria-se um DESBALANÇO TRANSITÓRIO na relação estrógeno/andrógeno sobre o tecido mamário em desenvolvimento, provocando proliferação ductal e estromal mamária;\n\n3. Apresentação Clínica:\n   - Nódulo discoide fibroelástico subareolar (geralmente < 4 cm), frequentemente bilateral e doloroso;\n\n4. Conduta:\n   - Em casos leves a moderados (< 4 cm): CONDUTA EXPECTANTE. Tranquilização e acompanhamento clínico sem medicações a cada 6 meses, pois a regressão espontânea ocorre em até 80-90% dos casos em 12 a 24 meses;\n   - Tratamento medicamentoso (tamoxifeno) ou cirúrgico (adenomastectomia) só é considerado em casos graves (> 4 a 5 cm - macromastia), com duração > 2 anos ou com sofrimento psicológico extremo.',
    comentariosAlternativas: {
      A: 'Correta. A ginecomastia puberal decorre de aromatização transitória em G3-G4 e tem evolução benigna com resolução espontânea em 1-2 anos.',
      B: 'Incorreta. Câncer de mama no adolescente masculino é extremamente raro e a apresentação subareolar bilateral típica aos 13 anos é fisiológica.',
      C: 'Incorreta. Não há qualquer relação etiológica com vírus herpes simples.',
      D: 'Incorreta. Castração cirúrgica é uma conduta inadmissível e aberrante.',
    },
  },
  {
    id: 'ped-pub-020',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Variantes Normais do Desenvolvimento: Telarca Precoce Isolada',
    isRevisao: false,
    enunciado:
      'Uma lactente de 18 meses é trazida pela mãe para consulta de rotina. A mãe relata que notou o aparecimento de brotos mamários palpáveis bilateralmente há cerca de 3 meses. A criança nasceu a termo, com peso e comprimento adequados. O exame físico evidencia: mamas em estágio M2 de Tanner (tecido glandular de 2 cm bilateralmente sob a aréola), ausência de pelos pubianos (P1), genitália externa feminina infantil normal, sem estrogenização mucosa ou corrimento. O gráfico de crescimento revela velocidade de crescimento no percentil 50 (estável) e a idade óssea de mão e punho esquerdos é rigorosamente compatível com a idade cronológica (18 meses). Diante do diagnóstico de Telarca Precoce Isolada, qual é a conduta preconizada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Conduta expectante com acompanhamento clínico e antropométrico periódico a cada 3 a 6 meses, tranquilizando os pais sobre a natureza benigna e autolimitada do quadro, que decorre de sensibilidade mamária transitória ou resquício da minipuberdade.',
      },
      {
        id: 'B',
        texto:
          'Início imediato de análogo de GnRH de depósito mensal para suprimir o eixo hipotálamo-hipófise-gonadal.',
      },
      {
        id: 'C',
        texto:
          'Realização de ooforectomia bilateral laparoscópica de urgência para impedir a menstruação aos 2 anos.',
      },
      {
        id: 'D',
        texto:
          'Administração de letrozol oral associada a hormônio do crescimento recombinante em altas doses.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Telarca Precoce Isolada (Variante Benigna da Puberdade):\n\n1. Características Clínicas e Diagnósticas:\n   - Ocorre classicamente em meninas menores de 2 a 3 anos de idade (com pico no primeiro ano);\n   - Manifesta-se pelo aparecimento de broto mamário (M2) UNILATERAL ou BILATERAL ISOLADO;\n   - Ausência de outros caracteres sexuais secundários (P1);\n   - Ausência de sinais de estrogenização sistêmica (mucosa vaginal permanece fina, pálida e sem corrimento);\n   - VELOCIDADE DE CRESCIMENTO NORMAL (não há estirão de crescimento);\n   - IDADE ÓSSEA NORMAL (não há avanço de idade óssea na radiografia de punho);\n\n2. Fisiopatologia:\n   - Decorre de uma hipersensibilidade transitória dos receptores mamários locais aos baixos níveis de estrógenos circulantes ou secreção intermitente e fugaz de estradiol folicular ovariano durante a "minipuberdade da infância";\n\n3. Conduta:\n   - A imensa maioria dos casos regride espontaneamente ou permanece estável, desaparecendo nos anos seguintes;\n   - Conduta: Acompanhamento clínico a cada 3 a 6 meses avaliando curva de crescimento e exame físico;\n   - Não necessita de bloqueadores de GnRH nem de intervenções cirúrgicas.',
    comentariosAlternativas: {
      A: 'Correta. A telarca precoce isolada com velocidade de crescimento e idade óssea normais é uma variante benigna com conduta expectante.',
      B: 'Incorreta. Análogos de GnRH são indicados para Puberdade Precoce Central progressiva (com aceleração de crescimento e avanço ósseo), e não para variantes isoladas.',
      C: 'Incorreta. A ooforectomia é contraindicada e causaria castração cirúrgica precoce irreparável.',
      D: 'Incorreta. Bloqueadores de aromatase e GH não têm qualquer cabimento na telarca isolada da lactente.',
    },
  },
  {
    id: 'ped-pub-021',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Variantes Normais do Desenvolvimento: Adrenarca Precoce Isolada',
    isRevisao: false,
    enunciado:
      'Menina de 6 anos e 6 meses é levada à consulta porque a mãe notou aparecimento de pelos finos na região pubiana e odor axilar adulto ("cecê") há cerca de 4 meses. Nega aumento das mamas. Ao exame físico: pelos pubianos escassos e longos na sínfise púbica e grandes lábios (estágio P2 de Tanner), mamas completamente planas e sem brotos palpáveis (M1), sem clitoromegalia (clitóris < 5 mm de comprimento). A velocidade de crescimento situa-se no percentil 60 e a idade óssea é de 6 anos e 9 meses (compatível com a idade cronológica). Os exames laboratoriais revelam: 17-hidroxiprogesterona normal, DHEA-S discretamente elevado para a idade da infância e LH basal pré-puberal (< 0,1 mUI/mL). Qual é o diagnóstico e o prognóstico dessa condição?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Adrenarca Precoce Isolada; trata-se de uma variante benigna do desenvolvimento resultante da maturação antecipada da zona reticular da suprarrenal, que não compromete a estatura final nem antecipa a idade da menarca.',
      },
      {
        id: 'B',
        texto:
          'Puberdade Precoce Central verdadeira dependente de GnRH com indicação de triptorrelina intramuscular mensal.',
      },
      {
        id: 'C',
        texto:
          'Carcinoma virilizante de suprarrenal metastático com indicação de adrenalectomia bilateral de urgência.',
      },
      {
        id: 'D',
        texto:
          'Hiperplasia Adrenal Congênita clássica perdedora de sal em crise addisoniana aguda.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Adrenarca Precoce Isolada:\n\n1. Definição:\n   - Aparecimento de pelos pubianos (pubarca precoce) e/ou odor axilar apócrino adulto antes dos 8 anos na menina ou antes dos 9 anos no menino, SEM DESENVOLVIMENTO DE CARACTERES GONADAIS (mamas M1 nas meninas e testículos G1 < 4 mL nos meninos);\n\n2. Fisiopatologia:\n   - Decorre da maturação antecipada da ZONA RETICULAR do córtex adrenal, levando à produção aumentada de andrógenos adrenais fracos (DHEA e DHEA-S);\n   - O eixo hipotálamo-hipófise-gonadal permanece absolutamente silente (LH pré-puberal indetectável);\n\n3. Diagnóstico Diferencial Importante:\n   - Deve-se descartar a forma não clássica da Hiperplasia Adrenal Congênita (dosagem de 17-OH-progesterona normal) e tumores adrenais virilizantes (DHEA-S excessivamente elevado e virilização com clitoromegalia);\n\n4. Evolução e Prognóstico:\n   - Não há aceleração significativa do crescimento nem avanço acentuado da idade óssea;\n   - A idade da puberdade verdadeira (gonadarca/telarca) e a idade da menarca ocorrem na época normal;\n   - A estatura final adulta é plenamente preservada;\n   - Observação: Meninas com adrenarca precoce têm maior risco futuro de desenvolver Síndrome dos Ovários Policísticos (SOP) e resistência insulínica na adolescência/idade adulta.',
    comentariosAlternativas: {
      A: 'Correta. Pilosidade P2 com M1, DHEA-S discreto, 17-OHP normal e sem avanço ósseo define a adrenarca precoce isolada.',
      B: 'Incorreta. Mamas em M1 e LH pré-puberal descartam categoricamente puberdade precoce central.',
      C: 'Incorreta. Tumores adrenais causam virilização rápida, clitoromegalia importante, avanço maciço de idade óssea e DHEA-S em níveis altíssimos.',
      D: 'Incorreta. A forma clássica perdedora de sal manifesta-se no período neonatal com desidratação, choque, genitália ambígua grave e hipercalemia.',
    },
  },
  {
    id: 'ped-pub-022',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Limites Cronológicos da Puberdade Normal: Precoce versus Atrasada',
    isRevisao: false,
    enunciado:
      'A definição dos marcos cronológicos etários que delimitam a puberdade normal é indispensável para o rastreamento tanto da puberdade precoce quanto do atraso puberal. Conforme o consenso da Sociedade Brasileira de Pediatria e das sociedades internacionais de Endocrinologia Pediátrica, quais são as idades limites inferior e superior que definem a normalidade do início do desenvolvimento puberal em meninas e meninos, respectivamente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Meninas: entre 8 e 13 anos (precoce se < 8 anos; atrasada se ausência de telarca aos 13 anos); Meninos: entre 9 e 14 anos (precoce se < 9 anos; atrasada se ausência de aumento testicular >= 4 mL aos 14 anos).',
      },
      {
        id: 'B',
        texto:
          'Meninas: entre 5 e 10 anos; Meninos: entre 6 e 11 anos.',
      },
      {
        id: 'C',
        texto:
          'Meninas: entre 12 e 18 anos; Meninos: entre 13 e 19 anos.',
      },
      {
        id: 'D',
        texto:
          'Meninas e meninos: exatamente no dia do aniversário de 10 anos em ambos os sexos sem margem de tolerância.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Limites Cronológicos da Puberdade Normal (Regra de Ouro em Pediatria):\n\n1. No Sexo Feminino:\n   - Marco clínico inicial: TELARCA (aparecimento do broto mamário - M2);\n   - Faixa etária normal: Entre 8 e 13 anos de idade;\n   - Puberdade Precoce: Qualquer sinal puberal (telarca) antes dos 8 anos completos;\n   - Atraso Puberal: Ausência de telarca (M1) aos 13 anos completos OU ausência de menarca após 3 anos da telarca (ou aos 15 anos de idade - amenorreia primária);\n\n2. No Sexo Masculino:\n   - Marco clínico inicial: AUMENTO DO VOLUME TESTICULAR >= 4 mL no orquidômetro de Prader (estágio G2);\n   - Faixa etária normal: Entre 9 e 14 anos de idade;\n   - Puberdade Precoce: Qualquer sinal de aumento testicular (volume >= 4 mL) ou virilização antes dos 9 anos completos;\n   - Atraso Puberal: Ausência de aumento testicular (testículos < 4 mL / G1) aos 14 anos completos.',
    comentariosAlternativas: {
      A: 'Correta. Meninas: 8 a 13 anos; Meninos: 9 a 14 anos. É a referência clássica absoluta em todas as diretrizes pediátricas.',
      B: 'Incorreta. Faixas etárias muito baixas que caracterizariam puberdade precoce patológica.',
      C: 'Incorreta. Uma menina sem mamas aos 13 anos ou um menino sem aumento testicular aos 14 anos já possuem atraso puberal formal.',
      D: 'Incorreta. A puberdade possui uma ampla janela fisiológica de 5 anos de normalidade baseada na curva de Gauss biológica.',
    },
  },
  {
    id: 'ped-pub-023',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Avaliação da Idade Óssea e Ação do Estrogênio na Fusão Epifisária',
    isRevisao: false,
    enunciado:
      'A radiografia de mãos e punhos esquerdos para determinação da Idade Óssea (método de Greulich e Pyle ou Tanner-Whitehouse) é uma das ferramentas propedêuticas mais valiosas na avaliação dos distúrbios puberais. Sob o ponto de vista da endocrinologia molecular, qual é o principal hormônio responsável pelo amadurecimento e fusão das placas epifisárias de crescimento, determinando o fechamento do crescimento estatural tanto em indivíduos do sexo feminino quanto do sexo masculino?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O Estradiol (estrogênio), produzido pelos ovários nas meninas e gerado pela aromatização periférica da testosterona nos meninos, atuando sobre os receptores de estrogênio alfa nos condrócitos da placa epifisária.',
      },
      {
        id: 'B',
        texto:
          'A Progesterona, que atua exclusivamente dissolvendo os sais de cálcio ósseos.',
      },
      {
        id: 'C',
        texto:
          'A Melatonina epifisária, que impede a proliferação das células sanguíneas dentro do canal medular.',
      },
      {
        id: 'D',
        texto:
          'A Insulina pancreática em monoterapia sem qualquer participação de esteroides sexuais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Papel Universal do Estrogênio na Fusão Epifisária em Homens e Mulheres:\n\n1. Descoberta Histórica e Mecanismo Biológico:\n   - Durante décadas, acreditava-se que a testosterona era a responsável direta pelo fechamento ósseo nos homens e o estrogênio nas mulheres;\n   - A elucidação definitiva ocorreu com o estudo de homens portadores de mutações genéticas raras:\n     a) Mutação inativadora no gene da Aromatase (CYP19A1 - incapacidade de converter testosterona em estradiol);\n     b) Mutação inativadora no Receptor de Estrogênio Alfa (ESR1);\n   - Esses homens apresentavam níveis normais ou elevados de testosterona, mas NUNCA FUNDIAM SUAS EPÍFISES ÓSSEAS, mantendo placas de crescimento abertas e crescendo indefinidamente na idade adulta (atingindo mais de 2 metros de altura com osteoporose grave);\n\n2. Conclusão Fisiológica Fundamental:\n   - O ESTRADIOL é o mediador universal da fusão epifisária nos dois sexos;\n   - Em baixas concentrações (início da puberdade): o estradiol estimula a proliferação dos condrócitos (estirão de crescimento);\n   - Em altas concentrações mantidas (final da puberdade): o estradiol induz a diferenciação terminal, senescência e esgotamento dos condrócitos da placa, levando à fusão epifisária e término definitivo do crescimento longitudinal dos ossos longos.',
    comentariosAlternativas: {
      A: 'Correta. O estradiol é o hormônio chave da maturação e fechamento epifisário em ambos os sexos, gerado por aromatização no homem.',
      B: 'Incorreta. A progesterona não fecha placas epifisárias de crescimento.',
      C: 'Incorreta. A melatonina pineal não comanda a fusão das epífises ósseas.',
      D: 'Incorreta. Embora a insulina participe do anabolismo celular, a fusão epifisária puberal é comandada pelos esteroides sexuais (estradiol).',
    },
  },
  {
    id: 'ped-pub-024',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Velocidade de Crescimento (VC): Valores Normais Pré-Puberais e Puberais',
    isRevisao: false,
    enunciado:
      'A velocidade de crescimento (expressa em centímetros por ano - cm/ano) é o parâmetro dinâmico mais sensível para monitorar a saúde infantil e detectar precocemente o início ou as alterações do estirão puberal. Correlacione as faixas etárias e fases de maturação com as respectivas velocidades de crescimento fisiológicas esperadas:\nI. Fase Pré-puberal imediata (entre os 4 anos e o início da puberdade);\nII. Pico do Estirão Puberal Feminino (estágios M2-M3 de Tanner);\nIII. Pico do Estirão Puberal Masculino (estágio G4 de Tanner).\nAssinale a opção que apresenta a correspondência numérica correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'I: 5 a 6 cm/ano; II: 8 a 9 cm/ano; III: 10 a 12 cm/ano.',
      },
      {
        id: 'B',
        texto:
          'I: 1 a 2 cm/ano; II: 3 a 4 cm/ano; III: 5 a 6 cm/ano.',
      },
      {
        id: 'C',
        texto:
          'I: 15 a 20 cm/ano; II: 25 a 30 cm/ano; III: 35 a 40 cm/ano.',
      },
      {
        id: 'D',
        texto:
          'I: 8 a 9 cm/ano; II: 5 a 6 cm/ano; III: 3 a 4 cm/ano.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Valores Médios Padronizados de Velocidade de Crescimento (Tanner / SBP):\n\n1. Primeiro Ano de Vida:\n   - Crescimento de ~25 cm/ano (maior velocidade do ciclo vital pós-natal);\n\n2. Segundo Ano de Vida:\n   - Crescimento de ~12 a 13 cm/ano;\n\n3. Terceiro e Quarto Anos de Vida:\n   - Crescimento de ~7 a 8 cm/ano;\n\n4. Fase Pré-Puberal (Infância estável dos 4 anos até o início da puberdade):\n   - Velocidade constante e estável de 5 a 6 cm/ano (limite inferior de normalidade: 4,5 a 5,0 cm/ano);\n   - Uma velocidade < 5 cm/ano nessa fase exige investigação de déficit de crescimento;\n\n5. Pico de Velocidade do Estirão Puberal Feminino (PVC Meninas em M2-M3):\n   - 8 a 9 cm/ano (média: 8,5 cm/ano);\n\n6. Pico de Velocidade do Estirão Puberal Masculino (PVC Meninos em G4):\n   - 10 a 12 cm/ano (média: 10,5 a 11,0 cm/ano).',
    comentariosAlternativas: {
      A: 'Correta. Pré-puberal = 5-6 cm/ano; Estirão feminino = 8-9 cm/ano; Estirão masculino = 10-12 cm/ano.',
      B: 'Incorreta. Valores excessivamente baixos que configurariam nanismo por deficiência de GH.',
      C: 'Incorreta. Valores superestimados que só ocorrem no primeiro ano de vida.',
      D: 'Incorreta. Inverte a ordem do crescimento, sugerindo desaceleração em vez de aceleração puberal.',
    },
  },
  {
    id: 'ped-pub-025',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Caso Integrador de Hebiatria: Comparação do Ritmo Maturacional entre Gêmeos de Sexos Opostos',
    isRevisao: false,
    enunciado:
      'Um casal de irmãos gêmeos dizigóticos (falsos), ambos com 12 anos e 6 meses de idade, comparece à consulta de hebiatria na Unidade Básica de Saúde. A mãe relata estranhamento pelo contraste físico entre os dois filhos:\n- A menina (Ana) mede 158 cm, apresenta mamas em estágio M4, pelos pubianos P4 e refere que teve a menarca há 4 meses;\n- O menino (Lucas) mede 146 cm, apresenta pelos pubianos escassos na base do pênis (P2), pênis infantil e testículos medindo 5 mL bilateralmente no orquidômetro de Prader (estágio G2).\nA mãe pergunta se o filho Lucas tem algum problema grave de "falta de hormônios", já que Ana é muito mais alta e desenvolvida do que ele. Com base no conhecimento integrado da fisiologia puberal e das curvas de Tanner, qual é o esclarecimento médico correto para esta família?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ambos apresentam desenvolvimento puberal absolutamente fisiológico e normal para as suas respectivas idades; a menina encontra-se em fase avançada (já passou pelo estirão em M2-M3 e teve sua menarca, crescendo agora mais lentamente), enquanto o menino está apenas no início da puberdade (estágio G2 com testículos de 5 mL), sendo esperado que ele inicie o seu estirão de crescimento mais tarde (no estágio G4, por volta dos 13,5 a 14 anos) com velocidade superior, devendo ultrapassar a irmã na estatura final adulta.',
      },
      {
        id: 'B',
        texto:
          'O menino apresenta atraso puberal patológico por ausência completa de testosterona, exigindo reposição androgênica imediata para igualar a altura da irmã em 3 meses.',
      },
      {
        id: 'C',
        texto:
          'A menina apresenta gigantismo hipofisário grave que exige cirurgia transesfenoidal urgente para ressecção da hipófise.',
      },
      {
        id: 'D',
        texto:
          'Gêmeos dizigóticos deveriam obrigatoriamente apresentar o mesmo estágio de Tanner e menstruar no mesmo dia, comprovando falha genética.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Caso Integrador de Hebiatria: O Dimorfismo Temporal da Puberdade em Gêmeos Dizigóticos:\n\n1. Análise da Menina (Ana - 12 anos e 6 meses):\n   - Estadiamento: M4 P4, menarca aos 12 anos e 2 meses;\n   - Interpretação: Absolutamente fisiológica. A idade média da menarca no Brasil é de 12,2 anos. Seu pico de estirão já aconteceu em M2-M3 (por volta dos 11 anos), justificando sua estatura temporariamente mais alta (158 cm). Ela agora apresentará crescimento residual modesto de 4 a 6 cm;\n\n2. Análise do Menino (Lucas - 12 anos e 6 meses):\n   - Estadiamento: G2 P2 (testículos de 5 mL, pelos na base do pênis);\n   - Interpretação: Absolutamente fisiológico. O início da puberdade no menino (G2) é normal entre 9 e 14 anos (média de 11,5 a 12 anos). Ele está no início da puberdade. Seu pênis crescerá em G3 e seu grande estirão ocorrerá em G4 (por volta dos 13,5 a 14 anos), quando crescerá de 10 a 12 cm/ano;\n\n3. Conclusão e Orientação à Família:\n   - Na faixa etária dos 11 aos 13 anos, as meninas são tipicamente mais altas que os meninos da mesma idade porque entram e completam o estirão cerca de 2 anos antes;\n   - A partir dos 14 aos 15 anos, os meninos estiram com maior intensidade e ultrapassam as meninas, estabelecendo a diferença média adulta de cerca de 13 cm a favor do sexo masculino;\n   - Não há nenhuma patologia hormonal em nenhum dos dois irmãos.',
    comentariosAlternativas: {
      A: 'Correta. Integra a cronologia normal de ambos: menina já no final do estirão (M4 pós-menarca) e menino no início da puberdade (G2), com estirão tardio previsto para G4.',
      B: 'Incorreta. O menino não tem atraso puberal; tem testículos de 5 mL aos 12 anos e meio, o que é perfeitamente eutrófico (atraso seria ausência de G2 aos 14 anos).',
      C: 'Incorreta. A estatura de 158 cm aos 12 anos e meio pós-menarca é comum e não configura gigantismo.',
      D: 'Incorreta. Gêmeos dizigóticos têm cargas genéticas e sexos biológicos diferentes, com ritmos maturacionais inteiramente distintos.',
    },
  },
  {
    id: 'ped-pub-026',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Puberdade Precoce: Definição, Limites Etários e Repercussões no Crescimento Final',
    isRevisao: false,
    enunciado:
      'Uma menina de 7 anos e 2 meses é levada à consulta pediátrica pela mãe, que notou o aparecimento de brotos mamários palpáveis bilaterais acompanhados de aceleração da velocidade de crescimento (cresceu 9,2 cm no último ano). A avaliação radiológica de mãos e punhos revela idade óssea de 9 anos e 6 meses (avanço de mais de 2 anos em relação à idade cronológica). Em relação à definição clássica de Puberdade Precoce e suas repercussões biológicas, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A puberdade precoce é definida pelo aparecimento de qualquer caractere sexual secundário antes dos 8 anos de idade nas meninas e antes dos 9 anos nos meninos; sua principal repercussão biológica a longo prazo é o avanço acelerado da idade óssea induzido pelos esteroides sexuais com fusão prematura das placas epifisárias, resultando em perda de estatura adulta final (baixa estatura na vida adulta), além do impacto psicossocial.',
      },
      {
        id: 'B',
        texto:
          'A puberdade precoce só é caracterizada se a criança tiver sangramento menstrual antes dos 3 anos de idade, sendo o surgimento de mamas aos 7 anos uma variação sem relevância clínica.',
      },
      {
        id: 'C',
        texto:
          'O avanço da idade óssea na puberdade precoce garante que a criança crescerá mais do que todos os seus familiares, atingindo altura adulta superior a 2 metros.',
      },
      {
        id: 'D',
        texto:
          'A idade limite inferior para definição de puberdade precoce é de 12 anos para o sexo feminino e 14 anos para o sexo masculino.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Conceito e Consequências da Puberdade Precoce:\n\n1. Definição Baseada em Idade Limite:\n   - Meninas: Aparecimento de caracteres sexuais secundários (telarca e/ou pubarca) ANTES DOS 8 ANOS completos;\n   - Meninos: Aparecimento de aumento testicular (volume >= 4 mL) ou virilização ANTES DOS 9 ANOS completos;\n\n2. Fisiopatologia da Perda Estatural Adulta (O "Paradoxo" do Crescimento):\n   - Inicialmente, a criança com puberdade precoce torna-se uma das mais altas da sala de aula (estirão precoce com alta velocidade de crescimento impulsionada pelo estrogênio e GH);\n   - No entanto, altas concentrações sustentadas de estrogênio atuam nos condrócitos das placas epifisárias acelerando intensamente a ossificação (avanço desproporcional da idade óssea em relação à idade cronológica);\n   - As cartilagens de crescimento fundem-se prematuramente (fechamento epifisário precoce aos 10-12 anos);\n   - O tempo total de crescimento longitudinal é encurtado em anos, resultando em CESSAÇÃO PREMATURA DO CRESCIMENTO e BAIXA ESTATURA FINAL GRAVE na vida adulta (com perda de 10 a 20 cm em relação à estatura-alvo parental);\n\n3. Repercussão Psicossocial:\n   - Descompasso entre a maturidade física corporal e a maturidade cognitiva/emocional, elevando o risco de ansiedade, depressão e exposição precoce a situações de abuso ou atividade sexual involuntária.',
    comentariosAlternativas: {
      A: 'Correta. Puberdade precoce é antes dos 8 anos na menina e 9 anos no menino; o fechamento precoce das epífises causa baixa estatura final adulta.',
      B: 'Incorreta. A telarca antes dos 8 anos é a definição formal de puberdade precoce na menina, não sendo necessário esperar a menarca.',
      C: 'Incorreta. A criança cresce mais no início, mas para de crescer muito antes, resultando em baixa estatura definitiva na idade adulta.',
      D: 'Incorreta. 12 e 14 anos são os limites normais médios para puberdade fisiológica.',
    },
  },
  {
    id: 'ped-pub-027',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Puberdade Precoce Central: Fisiopatologia e Caráter Isosexual Congruente',
    isRevisao: false,
    enunciado:
      'Uma menina de 6 anos e 8 meses apresenta telarca bilateral há 6 meses, que evoluiu para estágio M3 com pubarca P2 e velocidade de crescimento de 9,0 cm/ano. O ultrassom pélvico revela útero com volume de 4,8 mL, formato piriforme com relação corpo/colo de 1,6 e presença de linha endometrial visível. Os ovários medem 2,2 mL à direita e 2,0 mL à esquerda, com múltiplos folículos > 5 mm. O diagnóstico estabelecido é de Puberdade Precoce Central (PPC / GnRH-dependente). Qual é o mecanismo fisiopatológico primário dessa condição e sua característica clínica fundamental?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ativação prematura do gerador de pulsos de GnRH no hipotálamo, que mimetiza o padrão da puberdade fisiológica com secreção coordenada de LH e FSH e consequente desenvolvimento isosexual gonadal congruente (maturação ovariana e uterina na menina; aumento testicular bilateral simétrico no menino).',
      },
      {
        id: 'B',
        texto:
          'Mutação somática ativadora exclusiva dos receptores endometriais uterinos sem nenhuma participação do hipotálamo ou hipófise.',
      },
      {
        id: 'C',
        texto:
          'Secreção autônoma de andrógenos pela medula adrenal que induz invariavelmente caracteres heterossexuais contrários ao fenótipo da criança.',
      },
      {
        id: 'D',
        texto:
          'Ausência congênita de receptores de estrogênio que impede a proliferação das mamas e dos ovários.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisiopatologia da Puberdade Precoce Central (PPC / Verdadeira / GnRH-dependente):\n\n1. Ativação Prematura do Eixo Central:\n   - Ocorre a perda antecipada do freio inibitório central sobre os neurônios hipotalâmicos de GnRH;\n   - O gerador de pulsos hipotalâmico dispara GnRH pulsátil de forma precoce (< 8 anos na menina ou < 9 anos no menino);\n   - A adeno-hipófise responde com secreção pulsátil de LH e FSH;\n\n2. Caráter Isosexual e Congruente (A Regra de Ouro):\n   - Como a cascata fisiológica normal do eixo HHG está ativada, a sequência de eventos é IDÊNTICA à puberdade normal, apenas ocorrendo em idade cronológica precoce;\n   - É SEMPRE ISOSEXUAL (condizente com o sexo genético e fenotípico da criança: feminilização na menina e masculinização no menino);\n   - É CONGRUENTE com desenvolvimento gonadal simétrico:\n     - Meninas: aumento simétrico dos ovários (> 1-2 mL com múltiplos folículos), estímulo estrogênico no útero (volume > 3-4 mL, relação corpo/colo > 1, inversão da anatomia tubular infantil para formato piriforme adulto e eco endometrial presente);\n     - Meninos: aumento simétrico de AMBOS os testículos (volume testicular >= 4 mL bilateralmente).',
    comentariosAlternativas: {
      A: 'Correta. A PPC decorre da ativação do GnRH hipotalâmico com desenvolvimento isosexual e maturação gonadal congruente e simétrica.',
      B: 'Incorreta. O útero responde passivamente ao estradiol ovariano estimulado por gonadotrofinas hipofisárias.',
      C: 'Incorreta. A PPC é isosexual e coordenada pelo eixo HHG, não decorrendo de hiperplasia medular adrenal.',
      D: 'Incorreta. Na PPC os receptores de estrogênio estão perfeitamente funcionais e respondem ao excesso de estradiol.',
    },
  },
  {
    id: 'ped-pub-028',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Diagnóstico Laboratorial da PPC: Dosagem de LH Basal e Teste de Estímulo com GnRH',
    isRevisao: false,
    enunciado:
      'Uma criança com suspeita clínica de Puberdade Precoce Central é submetida à investigação laboratorial com dosagens hormonais por ensaios imunométricos ultrassensíveis (imunoquimioluminescência - ICMA). Qual parâmetro laboratorial hormonal basal ou após teste de estímulo dinâmico é considerado o padrão-ouro confirmatório da ativação do eixo hipotálamo-hipófise-gonadal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'LH basal em nível puberal (>= 0,3 a 0,6 mUI/mL) ou pico de LH após estímulo com GnRH sintético (ou análogo de GnRH) > 5,0 mUI/mL com relação LH/FSH > 0,66 a 1,0.',
      },
      {
        id: 'B',
        texto:
          'LH basal indetectável (< 0,1 mUI/mL) que permanece em zero após estímulo com GnRH, associado a TSH elevado.',
      },
      {
        id: 'C',
        texto:
          'FSH basal acima de 500 mUI/mL com estradiol nulo e prolactina indetectável.',
      },
      {
        id: 'D',
        texto:
          'Dosagem de cortisol salivar noturno acima de 50 mcg/dL associada a ACTH suprimido.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Investigação Laboratorial e Padrão-Ouro na Puberdade Precoce Central (PPC):\n\n1. LH Basal por Método Imunoquimiolumétrico (ICMA):\n   - O LH é o melhor marcador de ativação puberal central (o FSH pode oscilar na infância);\n   - Ponto de corte basal: LH basal >= 0,3 a 0,6 mUI/mL (a depender do ensaio) é altamente específico para o diagnóstico de puberdade precoce central;\n\n2. Teste de Estímulo com GnRH Sintético (Padrão-Ouro Indiscutível):\n   - Indicado quando o LH basal for limítrofe ou pré-puberal em paciente com caracteres sexuais progressivos;\n   - Protocolo: Coleta de LH e FSH nos tempos 0, 15, 30, 45 e 60 minutos após injeção de 100 mcg de GnRH sintético IV (ou análogo de depósito);\n   - Critério Confirmatório Positivo de PPC:\n     - PICO DE LH ESTIMULADO > 5,0 mUI/mL (alguns autores usam > 4,0 a 6,0 mUI/mL);\n     - Predomínio de secreção de LH sobre FSH (relação pico LH / pico FSH > 0,66 a 1,0);\n\n3. Na Puberdade Precoce Periférica (PPP):\n   - O LH basal é indetectável (< 0,1 mUI/mL) e o pico de LH após estímulo permanece completamente "plano" e suprimido (< 2,0 a 3,0 mUI/mL).',
    comentariosAlternativas: {
      A: 'Correta. LH basal >= 0,3-0,6 mUI/mL ou pico de LH estimulado > 5 mUI/mL com predomínio sobre FSH confirma ativação central do eixo HHG.',
      B: 'Incorreta. LH indetectável sem resposta ao GnRH é o padrão pré-puberal normal ou da puberdade precoce periférica.',
      C: 'Incorreta. FSH isolado de 500 mUI/mL com estradiol nulo caracteriza falência ovariana prematura hipergonadotrófica.',
      D: 'Incorreta. Cortisol e ACTH avaliam o eixo adrenal (síndrome de Cushing) e não a ativação gonadal central.',
    },
  },
  {
    id: 'ped-pub-029',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Etiologia da PPC: O Contraste Epidemiológico entre Meninas e Meninos',
    isRevisao: false,
    enunciado:
      'A investigação etiológica da Puberdade Precoce Central (PPC) revela um contraste epidemiológico clássico e dramático quando se compara a prevalência de etiologias orgânicas do sistema nervoso central entre os sexos feminino e masculino. Assinale a alternativa que descreve com exatidão esse perfil etiológico:',
    alternativas: [
      {
        id: 'A',
        texto:
          'No sexo feminino, a grande maioria dos casos de PPC (mais de 80% a 90%) é idiopática (sem lesão orgânica detectável no SNC); no sexo masculino, a situação se inverte, e mais de 50% a 70% dos casos de PPC são secundários a lesões orgânicas expansivas ou estruturais do SNC (tumores, hamartomas, gliomas ou infecções).',
      },
      {
        id: 'B',
        texto:
          'Em 100% dos meninos a PPC é de causa idiopática benigna, sendo proibida a solicitação de ressonância magnética encefálica.',
      },
      {
        id: 'C',
        texto:
          'Todas as meninas com PPC apresentam necessariamente astrocitoma anaplásico de tronco cerebral.',
      },
      {
        id: 'D',
        texto:
          'A PPC é causada exclusivamente pelo uso de mamadeiras de plástico em ambos os sexos, inexistindo causas orgânicas tumorais no encéfalo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Epidemiologia e Etiologia da Puberdade Precoce Central (Tema Crítico em Provas):\n\n1. Meninas (Feminino):\n   - A PPC é cerca de 10 a 20 vezes MAIS COMUM em meninas do que em meninos;\n   - Em mais de 80% a 90% das meninas, a causa é IDIOPÁTICA (constitucional / genética);\n   - A neuroimagem é habitualmente normal;\n   - No entanto, meninas < 6 anos ou com progressão muito rápida apresentam risco maior de causa orgânica (15-20%), justificando a realização de RM de crânio;\n\n2. Meninos (Masculino - O Grande Sinal de Alerta):\n   - A PPC é muito menos frequente em meninos;\n   - No entanto, quando ocorre no menino, mais de 50% a 70% dos casos TÊM CAUSA ORGÂNICA NO SISTEMA NERVOSO CENTRAL;\n   - Principais lesões orgânicas: Hamartoma hipotalâmico, gliomas de vias ópticas, astrocitomas, ependimomas, cistos aracnoides, hidrocefalia congênita ou sequela de meningite/trauma;\n   - Regra de Ouro da Prática Pediátrica: EM TODO MENINO COM PUBERDADE PRECOCE CENTRAL É ABSOLUTAMENTE OBRIGATÓRIA A REALIZAÇÃO DE RESSONÂNCIA MAGNÉTICA DE ENCÉFALO E SELA TÚRCICA.',
    comentariosAlternativas: {
      A: 'Correta. Meninas: > 80-90% idiopática; Meninos: > 50-70% secundária a lesões orgânicas/tumorais do SNC.',
      B: 'Incorreta. A maioria dos meninos tem causa orgânica no SNC e a ressonância de encéfalo é obrigatória.',
      C: 'Incorreta. A grande maioria das meninas não tem tumor cerebral (é idiopática).',
      D: 'Incorreta. Embora disruptores endócrinos sejam estudados, as causas orgânicas do SNC são bem estabelecidas e graves.',
    },
  },
  {
    id: 'ped-pub-030',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'PPC Orgânica: Hamartoma Hipotalâmico e Crises Epilépticas Gelásticas',
    isRevisao: false,
    enunciado:
      'Um menino de 3 anos e 6 meses é levado ao neuropediatra e endocrinopediatra. A mãe relata que desde os 8 meses de vida a criança apresenta episódios súbitos e diários de riso imotivado, estereotipado, sem motivo emocional aparente, com duração de 10 a 20 segundos, após os quais o paciente parece confuso ou sonolento. Recentemente, a mãe notou crescimento do pênis, aparecimento de pelos pubianos e alteração na voz. Ao exame físico: paciente no estágio G3 P3 de Tanner, com pênis de 8,5 cm e testículos simétricos medindo 8 mL bilateralmente no orquidômetro de Prader. A velocidade de crescimento é de 12 cm/ano. O teste de estímulo com GnRH revela pico de LH de 16,5 mUI/mL. A associação clínica de puberdade precoce central isosexual e crises epilépticas gelásticas é patognomônica de qual lesão expansiva do SNC?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Hamartoma Hipotalâmico (localizado no túber cinéreo ou corpos mamilares).',
      },
      {
        id: 'B',
        texto:
          'Craniofaringioma cístico intraselar com destruição da adeno-hipófise.',
      },
      {
        id: 'C',
        texto:
          'Meduloblastoma do assoalho do quarto ventrículo.',
      },
      {
        id: 'D',
        texto:
          'Abscesso bacteriano epidural espinhal lombar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Hamartoma Hipotalâmico e Crises Gelásticas (Quadro Clássico e Patognomônico):\n\n1. Natureza da Lesão:\n   - O hamartoma hipotalâmico é uma malformação congênita não neoplásica (heterotopia de tecido neuronal maduro, glia e neurônios secretores de GnRH);\n   - Localiza-se na base do hipotálamo, tipicamente fixado ao túber cinéreo ou entre os corpos mamilares;\n\n2. Mecanismo da Puberdade Precoce Central:\n   - Os neurônios ectópicos do hamartoma funcionam como um GERADOR AUTÔNOMO ECTÓPICO DE PULSOS DE GnRH, disparando independentemente do controle inibitório do cérebro;\n   - Provoca puberdade precoce central verdadeira, frequentemente em idades muito jovens (< 3 a 4 anos);\n\n3. As Crises Epilépticas Gelásticas (Sinal Patognomônico):\n   - "Gelasma" = riso;\n   - São crises epilépticas focais reflexas caracterizadas por episódios paroxísticos e estereotipados de gargalhada ou riso forçado involuntário, sem contexto de humor ou alegria;\n   - Podem evoluir posteriormente para crises parciais complexas, crises tônicas e atraso cognitivo;\n\n4. Imagem na RM:\n   - Massa nodular séssil ou pediculada no túber cinéreo, isointensa em T1, hiperintensa em T2 e que NÃO REALÇA após a administração de contraste paramagnético (gadolínio);\n\n5. Manejo:\n   - Tratamento da puberdade precoce com análogo de GnRH de depósito;\n   - Manejo das crises epilépticas com anticonvulsivantes ou cirurgia/ablação a laser (LITT) se epilepsia fármaco-refratária.',
    comentariosAlternativas: {
      A: 'Correta. A associação de puberdade precoce central com crises epilépticas gelásticas (riso imotivado) é a apresentação clássica do Hamartoma Hipotalâmico.',
      B: 'Incorreta. Craniofaringioma causa comumente atraso puberal, deficiência de múltiplos hormônios hipofisários e hemianopsia bitemporal, e não crises gelásticas.',
      C: 'Incorreta. Meduloblastoma situa-se na fossa posterior (cerebelo) e cursa com hipertensão intracraniana e ataxia cerebelar.',
      D: 'Incorreta. Abscesso espinhal lombar manifesta-se com dor lombar, déficit motor nos membros inferiores e febre.',
    },
  },
  {
    id: 'ped-pub-031',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'PPC Orgânica: Glioma de Vias Ópticas e Neurofibromatose Tipo 1',
    isRevisao: false,
    enunciado:
      'Uma menina de 5 anos é levada ao serviço de Endocrinologia Pediátrica devido ao desenvolvimento de mamas (M3) e aceleração estatural. Durante a ectoscopia cuidadosa, o pediatra identifica mais de 8 manchas hipercrômicas de cor marrom-claro espalhadas pelo tronco com diâmetros superiores a 10 mm e bordas lisas e regulares ("costa da Califórnia"), além de múltiplos pequenos pontos pigmentados semelhantes a sardas nas regiões axilares e inguinais bilaterais (sinal de Crowe). A avaliação oftalmológica com lâmpada de fenda confirma a presença de pequenos hamartomas pigmentados na íris (nódulos de Lisch). Qual tumor intracraniano clássico associado a essa síndrome neurocutânea é o responsável pela ocorrência de puberdade precoce central?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Glioma das vias ópticas (quiásma óptico ou nervos ópticos), associado à Neurofibromatose Tipo 1 (Doença de von Recklinghausen).',
      },
      {
        id: 'B',
        texto:
          'Neurinoma do acústico bilateral associado à Neurofibromatose Tipo 2.',
      },
      {
        id: 'C',
        texto:
          'Hemangioblastoma cerebelar associado à Síndrome de von Hippel-Lindau.',
      },
      {
        id: 'D',
        texto:
          'Glioblastoma multiforme congênito associado à Síndrome de Down.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Neurofibromatose Tipo 1 (NF1) e Puberdade Precoce Central:\n\n1. Estigmas Clínicos da Neurofibromatose Tipo 1 (Gene NF1 / Cromossomo 17q):\n   - Manchas café-com-leite: >= 6 manchas > 5 mm na infância ou > 15 mm no pós-púbere, com bordas lisas ("costa da Califórnia");\n   - Efélides (sardas) em regiões de dobras: axilares ou inguinais (Sinal de Crowe);\n   - Nódulos de Lisch: Hamartomas melanocíticos benignos na íris vistos à lâmpada de fenda em > 90% dos adultos com NF1;\n   - Neurofibromas cutâneos ou plexiformes;\n\n2. Tumor do SNC e Mecanismo da Puberdade Precoce:\n   - O GLIOMA DE VIAS ÓPTICAS (especialmente quando acomete o quiasma óptico ou o hipotálamo) ocorre em cerca de 15% das crianças com NF1;\n   - Ao invadir ou comprimir as estruturas hipotalâmicas e desestabilizar o tônus gabaérgico inibitório, deflagra a ativação antecipada do gerador de pulsos de GnRH, resultando em PUBERDADE PRECOCE CENTRAL;\n   - Crianças com NF1 e glioma que atinge o quiasma têm risco muito aumentado de PPC, exigindo rastreamento semestral de caracteres puberais e velocidade de crescimento.',
    comentariosAlternativas: {
      A: 'Correta. Glioma de vias ópticas no contexto de Neurofibromatose Tipo 1 (manchas café-com-leite lisas, sinal de Crowe e nódulos de Lisch) é a causa tumoral clássica.',
      B: 'Incorreta. Schwannomas vestibulares bilaterais caracterizam a NF2, que não cursa tipicamente com glioma óptico nem PPC.',
      C: 'Incorreta. Von Hippel-Lindau cursa com hemangioblastomas no cerebelo e retina e feocromocitoma, sem o quadro cutâneo descrito.',
      D: 'Incorreta. Não se trata de glioblastoma nem de Síndrome de Down.',
    },
  },
  {
    id: 'ped-pub-032',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Exames de Imagem na PPC: Ultrassonografia Pélvica e Ressonância de Sela Túrcica',
    isRevisao: false,
    enunciado:
      'Na propedêutica armada de uma menina de 7 anos com sinais de Puberdade Precoce Central, a ultrassonografia pélvica por via abdominal é um exame não invasivo primordial para quantificar o efeito do estrogênio sobre os órgãos-alvo internos. Quais parâmetros ecográficos uterinos e ovarianos caracterizam a puberdade verdadeira com estrogenização significativa, diferenciando-a do padrão pré-puberal infantil?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Volume uterino > 3 a 4 mL com morfologia piriforme (relação corpo/colo > 1), espessamento e presença de eco endometrial centralizado, e ovários com volume > 1 a 2 mL exibindo múltiplos folículos > 5 mm.',
      },
      {
        id: 'B',
        texto:
          'Volume uterino < 1 mL com aspecto tubular reto (relação corpo/colo < 1), eco endometrial totalmente ausente e ovários não visualizados com volume de 0,1 mL.',
      },
      {
        id: 'C',
        texto:
          'Presença obrigatória de hidrometrocolpo com retenção de 500 mL de sangue menstrual e ausência completa de ambos os ovários.',
      },
      {
        id: 'D',
        texto:
          'Útero com formato de ampulheta invertida e ovários contendo cálculos de colesterol com sombra acústica posterior.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Parâmetros Ultrassonográficos do Aparelho Reprodutor Feminino na Puberdade Precoce:\n\n1. O Útero Infantil Pré-Puberal (M1):\n   - Volume uterino: pequeno, habitualmente < 2 a 3 mL (geralmente em torno de 1 mL);\n   - Morfologia: formato TUBULAR ou em "bastão" (o colo uterino é maior ou igual ao corpo: relação corpo/colo <= 1);\n   - Eco endometrial: ausente (fino e imperceptível, sem estroma endometrial proliferativo);\n\n2. O Útero Puberal Estrogenizado (M2 a M4):\n   - Volume uterino: cresce significativamente, atingindo VOLUME > 3 a 4 mL (em M3-M4 atinge 8 a 15 mL);\n   - Morfologia: adquire formato PIRIFORME (o corpo uterino prolifera e torna-se muito maior e mais espesso do que o colo: relação corpo/colo > 1, habitualmente 1,5 a 2);\n   - Eco endometrial: torna-se VISÍVEL, espessado e hiperrefringente;\n\n3. Os Ovários:\n   - Ovário pré-puberal infantil: volume < 1 a 1,5 mL;\n   - Ovário puberal ativado por gonadotrofinas: volume > 1 a 2 mL, apresentando múltiplos folículos em crescimento (habitualmente >= 4 a 6 folículos com diâmetro > 4 a 5 mm).',
    comentariosAlternativas: {
      A: 'Correta. Volume uterino > 3-4 mL, formato piriforme com relação corpo/colo > 1, eco endometrial presente e ovários > 1-2 mL definem a estimulação estrogênica puberal.',
      B: 'Incorreta. Descreve o útero tubular infantil e ovários quiescentes pré-puberais normais.',
      C: 'Incorreta. Hidrometrocolpo decorre de hímen imperfurado obstrutivo e não é o padrão de triagem de ativação puberal precoce.',
      D: 'Incorreta. Cálculos de colesterol formam-se na vesícula biliar e não nos ovários.',
    },
  },
  {
    id: 'ped-pub-033',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Tratamento da Puberdade Precoce Central: Mecanismo dos Análogos de GnRH',
    isRevisao: false,
    enunciado:
      'O tratamento farmacológico padrão-ouro de primeira linha para a Puberdade Precoce Central progressiva é realizado com análogos agonistas do GnRH de liberação lenta (depósito), como o Acetato de Leuprorrelina ou a Triptorrelina. Sob a ótica da farmacodinâmica molecular, qual é o mecanismo pelo qual um fármaco "agonista" de GnRH consegue paradoxalmente suprimir e bloquear por completo o eixo hipotálamo-hipófise-gonadal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A administração contínua do análogo de depósito expõe os receptores hipofisários a uma estimulação prolongada e não pulsátil, provocando dessensibilização e "down-regulation" (internalização) dos receptores de GnRH nos gonadotrofos hipofisários, com supressão profunda da liberação de LH e FSH e consequente quiescência gonadal.',
      },
      {
        id: 'B',
        texto:
          'O fármaco atua como veneno citotóxico que necrosa e extirpa cirurgicamente a adeno-hipófise em menos de 24 horas.',
      },
      {
        id: 'C',
        texto:
          'O análogo liga-se exclusivamente à albumina plasmática impedindo a filtração glomerular de glicose pelos rins.',
      },
      {
        id: 'D',
        texto:
          'O medicamento estimula a produção maciça de prolactina que bloqueia os receptores de insulina no fígado.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Farmacodinâmica dos Agonistas de GnRH de Depósito na PPC (Tema Muito Cobrado em Farmacologia e Pediatria):\n\n1. O Paradoxo do Agonista:\n   - Como um agonista consegue agir como "bloqueador"?\n   - A fisiologia normal do hipotálamo exige que o GnRH seja secretado de forma ESTRITAMENTE PULSÁTIL (em pulsos discretos separados por intervalos de 60 a 90 minutos);\n   - Se o GnRH for oferecido de forma CONTÍNUA e mantida (como ocorre com as injeções intramusculares de análogo de GnRH de liberação lenta de 28 dias ou 3 meses), a resposta celular muda drasticamente;\n\n2. As Fases da Ação Farmacológica:\n   - Fase 1 (Efeito Flare-up transitório nas primeiras 1 a 2 semanas): Há uma estimulação inicial com pico passageiro de gonadotrofinas;\n   - Fase 2 (Bloqueio Sustentado definitivo a partir da 2ª-4ª semana):\n     - A exposição ininterrupta ao agonista satura os receptores de GnRH;\n     - Ocorre DESSENSIBILIZAÇÃO dos receptores e sua rápida INTERNALIZAÇÃO ("DOWN-REGULATION") na membrana dos gonadotrofos hipofisários;\n     - A hipófise deixa de responder ao GnRH endógeno;\n     - A síntese e a secreção de LH e FSH caem para níveis pré-puberais indetectáveis;\n     - Sem gonadotrofinas, os ovários e testículos param de produzir estradiol e testosterona, revertendo a criança ao estado pré-puberal biológico.',
    comentariosAlternativas: {
      A: 'Correta. A estimulação contínua não pulsátil induz down-regulation e dessensibilização dos receptores de GnRH, suprimindo LH, FSH e esteroides gonadais.',
      B: 'Incorreta. O análogo de GnRH não é citotóxico e não destrói a hipófise; seu efeito é 100% reversível após a suspensão da medicação.',
      C: 'Incorreta. Não interfere na filtração renal de glicose.',
      D: 'Incorreta. O mecanismo central não envolve hiperprolactinemia nem bloqueio hepático insulínico.',
    },
  },
  {
    id: 'ped-pub-034',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Manejo e Metas Terapêuticas da PPC com Análogo de GnRH',
    isRevisao: false,
    enunciado:
      'Uma menina de 7 anos e 4 meses com diagnóstico de PPC idiopática iniciou tratamento com Acetato de Leuprorrelina de depósito (3,75 mg IM a cada 28 dias). O pediatra programa as consultas de seguimento clínico para avaliar a eficácia do bloqueio puberal. Quais são as metas clínicas e antropométricas que atestam o sucesso terapêutico do tratamento com análogo de GnRH?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Desaceleração da velocidade de crescimento para parâmetros normais da fase pré-puberal (cerca de 5 a 6 cm/ano), estabilização ou regressão dos caracteres sexuais secundários (redução do broto mamário) e freamento do avanço da idade óssea com preservação da estatura adulta final.',
      },
      {
        id: 'B',
        texto:
          'Aceleração da velocidade de crescimento para mais de 20 cm/ano e antecipação imediata da menarca para os 8 anos.',
      },
      {
        id: 'C',
        texto:
          'Avanço de 5 anos na idade óssea a cada 6 meses com fechamento precoce completo de todas as epífises.',
      },
      {
        id: 'D',
        texto:
          'Queda da frequência cardíaca para menos de 30 bpm e ganho de 40 kg de massa gorda em 1 mês.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Metas e Monitorização do Tratamento da Puberdade Precoce Central:\n\n1. Parâmetros Clínicos de Bom Bloqueio:\n   - Desaceleração da Velocidade de Crescimento: A velocidade, que estava acelerada pelo estirão precoce (ex: 8-10 cm/ano), deve cair para a faixa pré-puberal normal (entre 4,5 e 6,0 cm/ano);\n   - Regressão ou Estabilização dos Caracteres Sexuais:\n     - Mamas: Frequente redução do volume mamário e perda do edema e da dor glandular subareolar;\n     - Pelos pubianos: Podem permanecer inalterados, pois dependem em parte dos andrógenos adrenais da adrenarca (que não são bloqueados pelo análogo de GnRH);\n     - Sangramento vaginal: Ausência de novos episódios;\n\n2. Parâmetros Radiológicos e Laboratoriais:\n   - Idade Óssea: A relação $\\Delta\\text{IO} / \\Delta\\text{IC}$ deve aproximar-se de 1,0 (a idade óssea para de avançar descontroladamente);\n   - USG pélvico: Regressão do volume uterino e ovariano para padrões infantis;\n   - Laboratório: LH basal $< 0,3\text{ mUI/mL}$ ou pico de LH após dose do análogo $< 2\text{ a }3\text{ mUI/mL}$ e estradiol suprimido;\n\n3. Momento de Interrupção do Bloqueio:\n   - O análogo costuma ser suspenso por volta dos 11 anos de idade óssea na menina (ou 12 anos no menino), permitindo que a puberdade normal seja retomada em sincronia com os pares cronológicos.',
    comentariosAlternativas: {
      A: 'Correta. As metas são desacelerar o crescimento para níveis pré-puberais (5-6 cm/ano), frear o avanço ósseo e estabilizar as mamas.',
      B: 'Incorreta. Aceleração de crescimento e antecipação de menarca indicariam falha total do bloqueio.',
      C: 'Incorreta. O objetivo central do tratamento é justamente IMPEDIR o avanço desproporcional da idade óssea.',
      D: 'Incorreta. Não há bradicardia extrema nem obesidade descontrolada como efeito esperado.',
    },
  },
  {
    id: 'ped-pub-035',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Puberdade Precoce Periférica (PPP): Fisiopatologia e Supressão de Gonadotrofinas',
    isRevisao: false,
    enunciado:
      'Ao contrário da Puberdade Precoce Central, a Puberdade Precoce Periférica (PPP / GnRH-independente / Pseudopuberdade Precoce) decorre da secreção autônoma de esteroides sexuais por gônadas, suprarrenais ou exposição exógena, com o eixo hipotálamo-hipófise permanecendo quiescente ou inibido. Qual é o perfil clássico das gonadotrofinas hipofisárias (LH e FSH) e a resposta esperada ao teste de estímulo com GnRH na Puberdade Precoce Periférica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Gonadotrofinas suprimidas por feedback negativo: LH basal indetectável (< 0,1 a 0,2 mUI/mL) com curva de resposta "plana" ao teste de estímulo com GnRH sintético (pico de LH estimulado permanece suprimido < 2,0 mUI/mL), a despeito de concentrações elevadas de esteroides sexuais (estradiol ou testosterona).',
      },
      {
        id: 'B',
        texto:
          'Pico explosivo de LH estimulado acima de 50 mUI/mL com relação LH/FSH superior a 10.',
      },
      {
        id: 'C',
        texto:
          'Ausência completa de testosterona e estradiol com LH basal acima de 100 mUI/mL.',
      },
      {
        id: 'D',
        texto:
          'Gonadotrofinas e esteroides sexuais totalmente zerados e indetectáveis em todos os compartimentos corporais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisiopatologia da Puberdade Precoce Periférica (PPP / GnRH-Independente):\n\n1. O Mecanismo Central Suprimido:\n   - Na PPP, a fonte produtora de hormônios sexuais é PERIFÉRICA (gônadas autônomas, glândula adrenal ou fonte exógena);\n   - Não há ativação do hipotálamo ou hipófise;\n   - As concentrações patologicamente elevadas de esteroides sexuais (seja ESTRADIOL ou TESTOSTERONA) exercem um potente FEEDBACK NEGATIVO sobre os gonadotrofos hipofisários;\n\n2. Perfil Laboratorial das Gonadotrofinas:\n   - LH basal: Suprimido / indetectável (geralmente $< 0,1\text{ mUI/mL}$ nos ensaios ultrassensíveis);\n   - FSH basal: Baixo ou indetectável;\n   - Teste de Estímulo com GnRH Sintético: A hipófise, bloqueada pelo feedback negativo dos esteroides, NÃO RESPONDE ao GnRH exógeno. A resposta de LH permanece "plana" (pico de LH estimulado $< 2,0\text{ a }3,0\text{ mUI/mL}$);\n\n3. Contraste com os Esteroides Sexuais:\n   - Enquanto o LH está zerado, os níveis periféricos de esteroides (estradiol, testosterona ou DHEA-S) estão francamente elevados em níveis puberais ou pré-puberais altos.',
    comentariosAlternativas: {
      A: 'Correta. Na PPP o LH basal e estimulado após GnRH permanecem profundamente suprimidos pelo feedback negativo dos esteroides sexuais periféricos elevados.',
      B: 'Incorreta. Resposta explosiva de LH ao GnRH é o padrão patognomônico da Puberdade Precoce Central.',
      C: 'Incorreta. LH elevado com esteroides nulos caracteriza hipogonadismo hipergonadotrófico (insuficiência gonadal).',
      D: 'Incorreta. Na puberdade precoce periférica os esteroides sexuais estão necessariamente elevados, causando os caracteres precoces.',
    },
  },
  {
    id: 'ped-pub-036',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'PPP por Hiperplasia Adrenal Congênita: Forma Não Clássica por Deficiência de 21-Hidroxilase',
    isRevisao: false,
    enunciado:
      'Um menino de 5 anos e 6 meses é avaliado por pubarca precoce e aumento peniano evidente iniciado há 8 meses. A mãe nega uso de medicações. Ao exame físico: paciente apresenta múltiplos pelos pubianos grossos e pigmentados sobre a sínfise e base do pênis (P3), pênis aumentado medindo 8 cm de comprimento, porém ambos os testículos na bolsa escrotal medem apenas 2 mL no orquidômetro de Prader (volume pré-puberal G1). A velocidade de crescimento é de 10,5 cm/ano e a idade óssea é de 8 anos (avanço de 2,5 anos). A dosagem de 17-hidroxiprogesterona (17-OHP) basal é de 8,5 ng/mL e eleva-se para 22 ng/mL após teste de estímulo com ACTH sintético (Cortrosina). O LH basal é < 0,1 mUI/mL. Qual é o diagnóstico etiológico e a justificativa para a desproporção entre o tamanho do pênis e dos testículos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Hiperplasia Adrenal Congênita (forma não clássica/tardia por deficiência de 21-hidroxilase); a produção autônoma de andrógenos pelo córtex adrenal viriliza o pênis e induz pubarca, mas os testículos permanecem infantis (< 4 mL) porque o eixo central HHG está suprimido pelo feedback negativo dos andrógenos, sem estímulo de gonadotrofinas (LH/FSH) sobre as gônadas.',
      },
      {
        id: 'B',
        texto:
          'Puberdade Precoce Central verdadeira idiopática com atrofia testicular autoimune.',
      },
      {
        id: 'C',
        texto:
          'Síndrome de Klinefelter clássica com cariótipo 47,XXY em estágio pré-puberal.',
      },
      {
        id: 'D',
        texto:
          'Insuficiência renal crônica com retenção metabólica de urobilinogênio.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Hiperplasia Adrenal Congênita (HAC) - Forma Não Clássica por Deficiência de 21-Hidroxilase:\n\n1. Fisiopatologia:\n   - Mutação de menor gravidade no gene CYP21A2 (atividade residual da enzima 21-hidroxilase de 20 a 50%);\n   - A produção de cortisol é discretamente reduzida, mas mantida às custas de um estímulo crônico de ACTH;\n   - Os precursores anteriores ao bloqueio acumulam-se e são desviados em massa para a via de síntese de ANDRÓGENOS ADRENAIS (androstenediona, testosterona e DHEA);\n\n2. O Achado Semiológico Típico no Menino (A Desproporção Pênis-Testículo):\n   - O excesso de andrógenos adrenais causa VIRILIZAÇÃO PERIFÉRICA: aumento do pênis, pelos pubianos precoces, acne e avanço acentuado da idade óssea;\n   - No entanto, os TESTÍCULOS PERMANECEM INFANTIS (volume de 1 a 2 mL / G1);\n   - Por quê? Porque os testículos dependem exclusivamente de gonadotrofinas centrais (LH para Leydig e FSH para túbulos seminíferos). Como a testosterona adrenal elevada faz feedback negativo e SUPRIME o hipotálamo e a hipófise (LH indetectável), os testículos não recebem estímulo e permanecem do tamanho de uma criança pequena;\n\n3. Diagnóstico Laboratorial:\n   - Elevação de 17-OH-progesterona (marcador acumulado imediatamente antes do bloqueio da 21-hidroxilase), que atinge valores > 10 a 12 ng/mL no teste de estímulo com ACTH.',
    comentariosAlternativas: {
      A: 'Correta. A deficiência de 21-OHP não clássica gera andrógenos adrenais que virilizam o pênis, mantendo os testículos infantis por supressão de LH/FSH.',
      B: 'Incorreta. Na PPC o pênis cresce JUNTO com o aumento simétrico dos testículos (>= 4 mL).',
      C: 'Incorreta. Klinefelter não causa puberdade precoce nem elevação de 17-OHP aos 5 anos.',
      D: 'Incorreta. Insuficiência renal não causa virilização isolada com elevação de 17-OHP.',
    },
  },
  {
    id: 'ped-pub-037',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'HAC no Menino e Tumores de Restos Adrenais Testiculares (TART)',
    isRevisao: false,
    enunciado:
      'Um menino de 9 anos com diagnóstico de Hiperplasia Adrenal Congênita por deficiência de 21-hidroxilase em tratamento irregular com glicocorticoide é avaliado pelo endocrinologista. O paciente apresenta virilização avançada e idade óssea de 13 anos. À palpação da bolsa escrotal, o médico nota que, em vez de testículos infantis homogêneos, palpam-se massas nodulares lobuladas, firmes, bilaterais e indolores no polo superior de ambos os testículos, confirmadas na ultrassonografia como lesões parenquimatosas hipoecogênicas bilaterais junto ao mediastino testicular (TART - Testicular Adrenal Rest Tumors). Qual é a fisiopatologia dessas lesões e o tratamento clínico indicado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de Tumores de Restos Adrenais Testiculares (TART), decorrentes da hipertrofia e proliferação de ninhos de células adrenais ectópicas que migraram com a gônada na embriogênese, estimuladas cronicamente pelas concentrações elevadas de ACTH decorrentes do controle inadequado da HAC; o tratamento consiste na otimização da dose de glicocorticoide para suprimir o ACTH, o que promove a regressão dos nódulos na maioria dos casos.',
      },
      {
        id: 'B',
        texto:
          'Trata-se de seminoma maligno metastático bilateral com indicação de orquiectomia bilateral radical e radioterapia pélvica.',
      },
      {
        id: 'C',
        texto:
          'Constitui hidrocele comunicante de resolução exclusivamente cirúrgica ambulatorial.',
      },
      {
        id: 'D',
        texto:
          'É uma alteração induzida por picada de aranha marrom na pele do escroto que requer soro antiaracnídico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Tumores de Restos Adrenais Testiculares (TART) na Hiperplasia Adrenal Congênita:\n\n1. Embriologia e Fisiopatologia:\n   - Durante a vida embrionária, o córtex adrenal e as gônadas originam-se da mesma crista urogenital mesodérmica adjacente;\n   - Fragmentos de tecido adrenocortical pluripotente podem aderir ao testículo fetal em descida e alojar-se no mediastino testicular (restos adrenais);\n   - Essas células expressam receptores de ACTH;\n   - Em pacientes com HAC com má adesão ou subtratamento (doses insuficientes de hidrocortisona), os níveis plasmáticos de ACTH permanecem cronicamente muito elevados;\n   - O excesso de ACTH estimula a hipertrofia e proliferação desses restos adrenais ectópicos, formando nódulos bilaterais lobulados indolores conhecidos como TART;\n\n2. Repercussão e Diagnóstico:\n   - Se não tratados, os nódulos comprimem os túbulos seminíferos na rede testis, causando obstrução mecânica e infertilidade masculina irreversível;\n   - Ultrassom com Doppler: massas hipoecogênicas com vascularização periférica adjacentes ao mediastino testicular;\n\n3. Tratamento:\n   - O tratamento é ESTRITAMENTE CLÍNICO na fase inicial: Otimizar a dose do glicocorticoide (hidrocortisona ou dexametasona) para SUPRIMIR O ACTH;\n   - Com a queda do ACTH, os nódulos sofrem atrofia e regridem espontaneamente na maioria dos casos, preservando o tecido testicular.',
    comentariosAlternativas: {
      A: 'Correta. Os TARTs decorrem da estimulação de restos adrenais pelo ACTH cronicamente elevado e regridem com a otimização do glicocorticoide.',
      B: 'Incorreta. TARTs são lesões benignas hormônio-dependentes e a orquiectomia mutilante levaria à perda gonadal desnecessária.',
      C: 'Incorreta. Hidrocele é acúmulo de líquido seroso na túnica vaginal, não nódulo intraparenquimatoso sólido.',
      D: 'Incorreta. Nódulos intratesticulares de restos adrenais não têm relação com veneno de artrópodes.',
    },
  },
  {
    id: 'ped-pub-038',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Síndrome de McCune-Albright: Fisiopatologia Genética e Tríade Clássica',
    isRevisao: false,
    enunciado:
      'Uma menina de 4 anos é trazida à emergência pediátrica com sangramento vaginal moderado indolor há 2 dias. A mãe relata que a criança apresentou desenvolvimento de mamas há cerca de 6 meses que cresceram e depois reduziram de tamanho. Ao exame físico: mamas em M3, sem pelos pubianos (P1). Na pele do dorso e nádega direita, identifica-se uma grande mancha hiperpigmentada de coloração café-com-leite com bordas muito irregulares e serrilhadas que respeita estritamente a linha média. A radiografia de fêmur direito realizada por claudicação prévia revela lesões osteolíticas expansivas radiotransparentes com aspecto em "vidro fosco" (displasia fibrosa). O ultrassom pélvico evidencia grande cisto ovariano folicular autônomo de 4,5 cm no ovário direito, com útero aumentado e eco endometrial espessado. O LH basal e após estímulo com GnRH é < 0,1 mUI/mL e o estradiol sérico é de 140 pg/mL. Qual síndrome genética explica perfeitamente essa tétrade e qual é o defeito molecular subjacente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome de McCune-Albright; causada por mutação somática pós-zigótica ativadora no gene GNAS (que codifica a subunidade alfa da proteína G estimuladora - Gs-alfa), levando à ativação constitutiva e autônoma da adenilato ciclase intracelular e produção desregulada de AMP cíclico (cAMP) em múltiplos tecidos.',
      },
      {
        id: 'B',
        texto:
          'Síndrome de Turner clássica com cariótipo 45,X decorrente de não-disjunção meiótica materna.',
      },
      {
        id: 'C',
        texto:
          'Síndrome de Marfan decorrente de mutação no gene da fibrilina-1.',
      },
      {
        id: 'D',
        texto:
          'Síndrome de Prader-Willi por deleção na região 15q11-q13 paterna.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Síndrome de McCune-Albright (SMA):\n\n1. Genética Molecular e Mosaicismo Somático:\n   - Não é uma doença hereditária familiar (ocorre por mutação pós-zigótica espontânea no embrião);\n   - Mutação em mosaico no gene GNAS (troca de aminoácidos Arg201 na subunidade alfa da proteína Gs);\n   - A proteína Gs mutada perde sua atividade GTPase intrínseca e fica PERMANENTEMENTE "LIGADA" (ativação constitutiva);\n   - A adenilato ciclase permanece ativada produzindo níveis altíssimos de AMP cíclico (cAMP) mesmo na AUSÊNCIA de ligação do hormônio ao receptor;\n\n2. A Tríade / Tétrade Clássica da Doença:\n   1. Puberdade Precoce Periférica (GnRH-Independente):\n      - Os ovários possuem clones de células da granulosa com receptores de FSH constitutivamente ativados;\n      - Formação recorrente de GRANDES CISTOS FOLICULARES AUTÔNOMOS ovarianos que produzem picos volumosos de estradiol;\n      - O estradiol estimula mamas e endométrio, e quando o cisto involui espontaneamente, ocorre sangramento vaginal por privação hormonal ("menstruação precoce");\n      - O LH e FSH permanecem suprimidos;\n   2. Manchas Café-com-Leite Típicas:\n      - Bordas geográficas, denteadas e serrilhadas (comparadas à costa recortada do Maine - "Coast of Maine");\n      - Em mosaico: respeitam a linha média e localizam-se frequentemente do mesmo lado da displasia óssea;\n   3. Displasia Fibrosa Poliostótica dos Ossos:\n      - Substituição do osso cortical normal por tecido fibroso imaturo (fraturas frequentes, deformidade em cajado de pastor no colo femoral);\n   4. Outras Endocrinopatias Hiperfuncionantes:\n      - Hipertireoidismo (receptores de TSH ativados), Síndrome de Cushing ACTH-independente e acromegalia/gigantismo por excesso de GH.',
    comentariosAlternativas: {
      A: 'Correta. A mutação ativadora no gene GNAS e a tríade de puberdade precoce periférica com cistos, manchas denteadas e displasia fibrosa definem McCune-Albright.',
      B: 'Incorreta. A Síndrome de Turner cursa tipicamente com hipogonadismo hipergonadotrófico e atraso puberal (disgenesia gonadal em fita), e não puberdade precoce cística.',
      C: 'Incorreta. Marfan cursa com ectopia lentis, aneurisma de aorta e aracnodactilia, sem puberdade precoce.',
      D: 'Incorreta. Prader-Willi cursa com hipotonia neonatal, hiperfagia com obesidade e hipogonadismo hipogonadotrófico (atraso puberal).',
    },
  },
  {
    id: 'ped-pub-039',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Síndrome de McCune-Albright: Abordagem Terapêutica da Puberdade Precoce Periférica',
    isRevisao: false,
    enunciado:
      'Uma menina de 5 anos com diagnóstico de Síndrome de McCune-Albright apresenta episódios recorrentes de cistos ovarianos autônomos com sangramentos vaginais e avanço da idade óssea. O pediatra sabe que o uso isolado de análogos de GnRH de depósito (como a leuprorrelina) é completamente ineficaz nesta fase da doença, pois o eixo central está suprimido. Qual classe farmacológica representa o tratamento de escolha para bloquear a produção ou a ação do estrogênio na fase periférica da Síndrome de McCune-Albright?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Inibidores da Aromatase de terceira geração (como Letrozol ou Anastrozol) ou Moduladores Seletivos dos Receptores de Estrogênio (como Tamoxifeno ou Fulvestranto).',
      },
      {
        id: 'B',
        texto:
          'Hormônio tireoestimulante sintético associado a suplementação de cálcio intravenoso.',
      },
      {
        id: 'C',
        texto:
          'Corticosteroides em pulsoterapia de altas doses por 12 meses consecutivos.',
      },
      {
        id: 'D',
        texto:
          'Ooforectomia bilateral radical com histerectomia total imediata.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo Farmacológico da Puberdade Precoce Periférica na Síndrome de McCune-Albright:\n\n1. Por que o Análogo de GnRH Não Funciona na Fase Inicial?\n   - Porque a ativação ovariana decorre da mutação constitutiva intrínseca na proteína Gs da célula ovariana e NÃO de pulsos de LH ou FSH hipofisários;\n   - O eixo central já está silenciado;\n\n2. Fármacos de Escolha:\n   - Bloqueio da Síntese de Estradiol: INIBIDORES DA AROMATASE de terceira geração (LETROZOL ou ANASTROZOL);\n     - Bloqueiam a conversão dos andrógenos em estrógenos no ovário, reduzindo drasticamente os níveis circulantes de estradiol, diminuindo o tamanho dos cistos e cessando os sangramentos vaginais;\n   - Bloqueio da Ação do Estradiol nos Órgãos-Alvo: MODULADORES SELETIVOS DO RECEPTOR DE ESTROGÊNIO (TAMOXIFENO) ou antagonistas puros (FULVESTRANTO);\n     - Competem com o estradiol no receptor tecidual endometrial e mamário;\n\n3. O que NÃO Fazer:\n   - OOFORECTOMIA É FORMALMENTE CONTRAINDICADA: Os cistos são transitórios e o ovário contralateral também possui células mutadas em mosaico. A cirurgia causaria castração cirúrgica precoce sem curar a doença;',
    comentariosAlternativas: {
      A: 'Correta. Inibidores da aromatase (letrozol) ou bloqueadores de receptor estrogênico (tamoxifeno) controlam a síntese/ação periférica do estradiol.',
      B: 'Incorreta. TSH e cálcio não atuam na esteroidogênese ovariana.',
      C: 'Incorreta. Corticoides não inibem a aromatase nem os receptores ovarianos de McCune-Albright.',
      D: 'Incorreta. Cirurgia mutilante de ooforectomia é contraindicada por levar a castração sem benefício na mutação somática em mosaico.',
    },
  },
  {
    id: 'ped-pub-040',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'PPP por Tumor de Células de Leydig: Aumento Testicular Unilateral Assimétrico',
    isRevisao: false,
    enunciado:
      'Um menino de 6 anos e 2 meses é levado ao consultório com queixa de desenvolvimento de pelos pubianos e aumento peniano evidente nos últimos 5 meses. Ao exame físico: pênis medindo 8 cm com glande desenvolvida (estágio G3 P3), pelos escuros na base do pênis. À palpação da bolsa escrotal, constata-se uma marcante assimetria testicular: o testículo esquerdo é endurecido, nodular e mede 12 mL no orquidômetro de Prader, enquanto o testículo direito é completamente liso, amolecido e mede apenas 2 mL (tamanho infantil pré-puberal). A dosagem de testosterona total sérica revela valor elevado de 380 ng/dL e o LH basal e estimulado por GnRH é indetectável (< 0,1 mUI/mL). Qual diagnóstico etiológico explica perfeitamente esse quadro clínico-laboratorial?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tumor de Células de Leydig testicular unilateral (gonadoma produtor autônomo de testosterona).',
      },
      {
        id: 'B',
        texto:
          'Puberdade Precoce Central idiopática com resposta gonadal bilateral sincronizada.',
      },
      {
        id: 'C',
        texto:
          'Torção testicular crônica assintomática do testículo direito com atrofia reflexa.',
      },
      {
        id: 'D',
        texto:
          'Hérnia inguinoescrotal indireta estrangulada à esquerda sem repercussão hormonal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Tumor de Células de Leydig e a Assimetria Testicular na Puberdade Precoce Masculina (Regra Semiológica de Ouro):\n\n1. O Sinal Clínico Chave: AUMENTO TESTICULAR UNILATERAL ASSIMÉTRICO:\n   - Diante de um menino com puberdade precoce (virilização) no qual UM testículo está aumentado/endurecido (>= 4 a 12 mL) e o OUTRO testículo permanece estritamente INFANTIL (1 a 2 mL), a principal hipótese diagnóstica é TUMOR TESTICULAR UNILATERAL PRODUTOR DE ANDRÓGENOS (especialmente o Tumor de Células de Leydig);\n\n2. Fisiopatologia:\n   - O tumor de células de Leydig (geralmente benigno na infância) secreta grandes quantidades autônomas de TESTOSTERONA no testículo acometido;\n   - A testosterona atinge a circulação periférica, promovendo crescimento peniano, pubarca, acne e avanço de idade óssea;\n   - Concomitantemente, a testosterona sistêmica suprime o hipotálamo e a hipófise por feedback negativo (LH e FSH indetectáveis);\n   - Como o testículo contralateral sadio depende de LH e FSH para crescer e não recebe esse estímulo, ele PERMANECE INFANTIL (< 4 mL);\n\n3. Conduta:\n   - Ultrassonografia escrotal com Doppler para delimitação do nódulo intratesticular;\n   - Orquiectomia com preservação de parênquima testicular quando possível ou orquiectomia radical unilateral.',
    comentariosAlternativas: {
      A: 'Correta. Virilização precoce associada a aumento testicular unilateral assimétrico com LH suprimido é a apresentação clássica do Tumor de Células de Leydig.',
      B: 'Incorreta. Na PPC o aumento testicular é obrigatoriamente BILATERAL e SIMÉTRICO com LH elevado.',
      C: 'Incorreta. Torção causa dor aguda, necrose e não secreta testosterona para virilizar o pênis.',
      D: 'Incorreta. Hérnia é um defeito anatômico do conduto peritônio-vaginal que não sintetiza andrógenos.',
    },
  },
  {
    id: 'ped-pub-041',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'PPP por Tumor de Células da Granulosa Ovariana: Massa Pélvica e Inibina B',
    isRevisao: false,
    enunciado:
      'Uma menina de 4 anos e 8 meses apresenta desenvolvimento mamário rápido (mamas M3 dolorosas) nos últimos 3 meses, seguido de sangramento vaginal avermelhado moderado. Ao exame abdominal, palpa-se uma massa arredondada, móvel e de consistência firme em fossa ilíaca direita e hipogástrio. O ultrassom pélvico confirma massa expansiva sólido-cística heterogênea no ovário direito medindo 6,2 cm de diâmetro, com ovário esquerdo de dimensões pré-puberais normais e útero hipertrofiado com espessamento endometrial. O perfil hormonal revela: Estradiol sérico de 280 pg/mL (nível puberal adulto elevado), LH basal < 0,1 mUI/mL, FSH < 0,1 mUI/mL e dosagem de Inibina B extremamente elevada. Qual é o diagnóstico etiológico neoplásico mais provável?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tumor de Células da Granulosa Juvenil do ovário.',
      },
      {
        id: 'B',
        texto:
          'Disgerminoma ovariano puro com produção exclusiva de gonadotrofina coriônica humana (hCG).',
      },
      {
        id: 'C',
        texto:
          'Teratoma cístico maduro benigno (cisto dermoide) sem secreção hormonal.',
      },
      {
        id: 'D',
        texto:
          'Hamartoma hipotalâmico com invasão peritoneal metastática.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Tumor de Células da Granulosa Juvenil (TCGJ):\n\n1. Características Clínicas e Patológicas:\n   - É a neoplasia ovariana secretora de estrógenos mais comum a causar Puberdade Precoce Periférica em meninas pré-púberes;\n   - Apresenta-se como massa pélvica/abdominal palpável em grande parte dos casos;\n   - Secreção maciça e autônoma de ESTRADIOL pelas células neoplásicas da granulosa;\n   - Clínica: telarca rápida, estrogenização da mucosa vaginal, leucorreia fisiológica e sangramento vaginal por hiperplasia/descamação endometrial;\n\n2. Marcadores Tumorais e Perfil Hormonal:\n   - Estradiol: muito elevado;\n   - LH e FSH: completamente suprimidos por feedback negativo central;\n   - INIBINA B (e Inibina A): secretada ativamente pelas células da granulosa, funciona como excelente MARCADOR TUMORAL tanto para o diagnóstico quanto para o seguimento pós-operatório de recidivas;\n\n3. Conduta:\n   - Laparotomia exploradora / cirurgia com salpingo-ooforectomia unilateral preservando o ovário contralateral e o útero;\n   - A imensa maioria dos casos infantis é diagnosticada em Estágio IA com excelente prognóstico pós-ressecção cirúrgica completa.',
    comentariosAlternativas: {
      A: 'Correta. Massa ovariano sólido-cística com estradiol alto, LH/FSH suprimidos e elevação de inibina B define o Tumor de Células da Granulosa Juvenil.',
      B: 'Incorreta. O disgerminoma secreta hCG ou LDH e não inibina B, cursando habitualmente sem feminização estrogênica isolada.',
      C: 'Incorreta. O cisto dermoide maduro não secreta estradiol nem causa puberdade precoce ou sangramento.',
      D: 'Incorreta. O hamartoma hipotalâmico é intracraniano benigno, não produz metástases peritoneais e cursa com LH elevado (central).',
    },
  },
  {
    id: 'ped-pub-042',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'PPP por Tumor Adrenal Virilizante: Níveis Críticos de DHEA-S',
    isRevisao: false,
    enunciado:
      'Uma pré-escolar de 3 anos e 10 meses é trazida ao ambulatório por virilização rápida e intensa de início há 4 meses. A mãe relata surgimento explosivo de pelos grossos na genitália, acne grave com pústulas na face e dorso, voz rouca engrossada e aumento expressivo da musculatura corporal. Ao exame físico: clitoromegalia marcante com clitóris medindo 2,5 cm de comprimento (escala de Prader com virilização acentuada), pelos pubianos P4, mamas M1 (planas). A velocidade de crescimento no último semestre foi equivalente a 14 cm/ano e a idade óssea é de 7 anos (avanço de mais de 3 anos). Os exames laboratoriais revelam: Sulfato de Desidroepiandrosterona (DHEA-S) sérico de 12.800 mcg/dL (valor de referência para a idade < 30 mcg/dL), testosterona total muito elevada, 17-OHP normal e LH < 0,1 mUI/mL. Qual exame de imagem deve ser solicitado imediatamente e qual a principal suspeita etiológica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tomografia Computadorizada ou Ressonância Magnética de Abdome com foco nas adrenais; suspeita de Tumor Adrenocortical Virilizante (Adenoma ou Carcinoma de Córtex Adrenal).',
      },
      {
        id: 'B',
        texto:
          'Ecocardiograma com Doppler; suspeita de persistência do canal arterial isolada.',
      },
      {
        id: 'C',
        texto:
          'Radiografia simples de cavum; suspeita de hipertrofia de amígdalas e adenoides.',
      },
      {
        id: 'D',
        texto:
          'Cintilografia de tireoide com iodo-131; suspeita de tireoidite de Hashimoto.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Tumores Adrenocorticais Virilizantes na Infância:\n\n1. Quadro Clínico de Alarme:\n   - Virilização RÁPIDA, EXPLOSIVA e PROGRESSIVA em criança pequena (< 4 anos);\n   - Pilosidade pubiana densa, acne vulgar grave, hipertrofia muscular, voz engrossada e clitoromegalia importante na menina (ou macrogenitossomia com testículos infantis no menino);\n   - Avanço avassalador da idade óssea e aceleração extrema da velocidade de crescimento;\n\n2. O Marcador Laboratorial Patognomônico:\n   - SULFATO DE DHEA (DHEA-S) EM NÍVEIS ASTRONÔMICOS (> 5.000 a 10.000 mcg/dL ou ng/mL);\n   - Como o DHEA-S é sintetizado quase que com exclusividade pelo córtex adrenal (via sulfotransferase adrenal), valores absurdamente elevados apontam categoricamente para o CÓRTEX DA SUPRARRENAL;\n\n3. Epidemiologia no Brasil:\n   - No Sul e Sudeste do Brasil (especialmente Paraná e São Paulo), a incidência de carcinoma adrenocortical pediátrico é cerca de 10 a 15 vezes superior à média mundial devido à mutação fundadora herdada TP53 R337H;\n\n4. Conduta:\n   - TOMOGRAFIA COMPUTADORIZADA ou RM DE ABDOME direcionada às glândulas adrenais para estadiamento e planejamento cirúrgico de adrenalectomia imediata.',
    comentariosAlternativas: {
      A: 'Correta. Virilização rápida associada a DHEA-S astronômico (> 10.000) impõe investigação imediata com imagem de suprarrenais para tumor adrenocortical.',
      B: 'Incorreta. Ecocardiograma avalia malformações cardíacas e não investiga virilização adrenal.',
      C: 'Incorreta. Raio-X de cavum avalia respiração bucal e via aérea superior.',
      D: 'Incorreta. A tireoide não sintetiza DHEA-S nem provoca clitoromegalia grave.',
    },
  },
  {
    id: 'ped-pub-043',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Testotoxicose: Puberdade Precoce Familiar Limitada ao Sexo Masculino',
    isRevisao: false,
    enunciado:
      'Um menino de 3 anos e 4 meses apresenta aumento do pênis, pelos pubianos escassos e velocidade de crescimento de 11 cm/ano. Ao exame físico: pênis de 7 cm, pelos P2 e testículos simétricos aumentados medindo 6 mL bilateralmente no orquidômetro de Prader (G3 P2). O pai e um tio paterno relatam história de terem entrado na puberdade muito cedo, por volta dos 3 a 4 anos. A dosagem hormonal demonstra Testosterona total elevada em nível adulto (280 ng/dL), com LH basal < 0,1 mUI/mL e sem elevação do LH após teste de estímulo com GnRH (pico de LH de 0,4 mUI/mL). A ultrassonografia testicular não evidencia tumores focais, apenas aumento homogêneo simétrico bilateral. Qual patologia genética autossômica dominante explica essa condição?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Testotoxicose (Puberdade Precoce Familiar Limitada ao Sexo Masculino), causada por mutação ativadora no gene do receptor de LH (LHCGR).',
      },
      {
        id: 'B',
        texto:
          'Síndrome da Insensibilidade Completa aos Andrógenos (Síndrome de Morris).',
      },
      {
        id: 'C',
        texto:
          'Doença de Addison primária com insuficiência adrenal crônica.',
      },
      {
        id: 'D',
        texto:
          'Mutação inativadora no receptor de GH (Síndrome de Laron).',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Testotoxicose (Puberdade Precoce Familiar Limitada ao Sexo Masculino):\n\n1. Genética e Fisiopatologia:\n   - Herança Autossômica Dominante com expressão restrita ao sexo masculino (as mulheres que portam a mutação são assintomáticas porque o ovário necessita de FSH além de LH para produzir estradiol);\n   - Decorre de uma MUTAÇÃO ATIVADORA DE PONTO no gene do RECEPTOR DE LH (LHCGR);\n   - O receptor de LH nas células de Leydig permanece constitutivamente ativado de forma autônoma sem necessitar da ligação do LH;\n\n2. Quadro Clínico e Laboratorial:\n   - Início muito precoce (habitualmente entre 2 e 4 anos de idade);\n   - Virilização progressiva com crescimento peniano e estirão de crescimento acelerado;\n   - AUMENTO TESTICULAR BILATERAL MODERADO SIMÉTRICO (testículos entre 4 e 8 mL, decorrente da hiperplasia de Leydig e produção local de andrógenos estimulando a espermatogênese parcial);\n   - Testosterona sérica em níveis de homem adulto;\n   - LH e FSH profundamente SUPRIMIDOS (padrão de Puberdade Precoce Periférica);\n\n3. Tratamento Farmacológico:\n   - Requer bloqueio duplo: Bloqueador da síntese de testosterona/inibidor de aromatase (Anastrazol ou Letrozol) associado a um Bloqueador do receptor de andrógenos (Bicalutamida ou Espironolactona);\n   - Como o avanço ósseo acelera o hipotálamo, pode ocorrer ativação central secundária tardia, momento em que se associa análogo de GnRH.',
    comentariosAlternativas: {
      A: 'Correta. A mutação ativadora no receptor de LH (LHCGR) causa a testotoxicose familiar masculina com testículos aumentados e LH suprimido.',
      B: 'Incorreta. A síndrome de insensibilidade androgênica gera fenótipo feminino em genótipo 46,XY e não virilização precoce.',
      C: 'Incorreta. Doença de Addison cursa com hipoandrogenismo e insuficiência de cortisol/aldosterona, sem puberdade precoce.',
      D: 'Incorreta. Síndrome de Laron causa baixa estatura extrema desproporcional por insensibilidade ao GH.',
    },
  },
  {
    id: 'ped-pub-044',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Exposição Exógena a Esteroides Sexuais na Infância',
    isRevisao: false,
    enunciado:
      'Um menino de 2 anos é trazido ao pronto-atendimento com história de aparecimento recente de pelos pubianos escuros e espessamento do pênis nas últimas 6 semanas. Não há histórico familiar de endocrinopatias e a gestação foi sem intercorrências. Ao exame físico: pênis de 6,5 cm, pelos pubianos P2 na sínfise, testículos infantis medindo 1,5 mL bilateralmente (G1). A velocidade de crescimento não apresentou alterações crônicas e a idade óssea é compatível com a cronológica. A dosagem hormonal revela Testosterona total de 180 ng/dL (elevada), com LH < 0,1 mUI/mL, FSH < 0,1 mUI/mL, DHEA-S normal e 17-OHP normal. O ultrassom de bolsa escrotal e abdome é rigorosamente normal. Ao aprofundar a anamnese, o pai relata que utiliza diariamente gel transdérmico de testosterona a 1% nos braços e ombros para reposição hormonal e costuma brincar e carregar o filho no colo sem camisa. Qual é a causa da puberdade precoce periférica e a conduta recomendada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Puberdade Precoce Periférica por contaminação exógena acidental por contato cutâneo direto com gel de testosterona paterno; a conduta é a interrupção imediata do contato da criança com as áreas de aplicação do gel e lavagem adequada das mãos e pele paterna, aguardando-se a regressão clínica espontânea.',
      },
      {
        id: 'B',
        texto:
          'Puberdade Precoce Central com indicação de radioterapia craniana imediata.',
      },
      {
        id: 'C',
        texto:
          'Neuroblastoma metastático disseminado com necessidade de transplante de medula óssea.',
      },
      {
        id: 'D',
        texto:
          'Hipogonadismo hipogonadotrófico primário exigindo gonadotrofina coriônica recombinante contínua.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Contaminação Exógena por Esteroides Sexuais (Tema Emergente de Alerta Pediátrico):\n\n1. Fisiopatologia e Vias de Exposição:\n   - É uma causa cada vez mais frequente de Puberdade Precoce Periférica em lactentes e pré-escolares;\n   - Decorre da absorção transdérmica acidental através do contato físico íntimo pele a pele com pais ou cuidadores que utilizam formulações tópicas de reposição hormonal (geles de testosterona a 1-2% ou pomadas de estrógenos para atrofia urogenital);\n   - A pele da criança pequena é fina e altamente permeável, absorvendo rapidamente doses terapêuticas de adultos;\n\n2. Perfil Laboratorial e Diagnóstico:\n   - Esteroides sexuais circulantes elevados (testosterona ou estradiol);\n   - Gonadotrofinas (LH e FSH) profundamente suprimidas por feedback negativo;\n   - Marcadores adrenais normais (DHEA-S e 17-OHP normais, descartando tumores e HAC);\n   - Exames de imagem (USG testicular, adrenal e RM de crânio) rigorosamente normais;\n   - Ausência de avanço significativo de idade óssea se a exposição for recente;\n\n3. Conduta:\n   - Cessação imediata da via de contato (o usuário adulto deve aplicar a medicação em áreas cobertas por roupas e lavar rigorosamente as mãos);\n   - Os sinais clínicos de virilização costumam estacionar ou regredir gradualmente ao longo dos meses subsequentes sem necessidade de tratamento medicamentoso para a criança.',
    comentariosAlternativas: {
      A: 'Correta. A contaminação transdérmica inadvertida com gel de testosterona parental é a causa da virilização com testículos infantis e imagem normal.',
      B: 'Incorreta. Não há ativação central (LH suprimido) nem tumor do SNC que justifique radioterapia.',
      C: 'Incorreta. Neuroblastoma é tumor da crista neural/adrenal que cursa com massa abdominal e catecolaminas altas, sem virilização pura com imagem normal.',
      D: 'Incorreta. A criança não tem hipogonadismo, mas sim intoxicação androgênica exógena.',
    },
  },
  {
    id: 'ped-pub-045',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Efeito Priming: Evolução de Puberdade Precoce Periférica para Central Secundária',
    isRevisao: false,
    enunciado:
      'Uma menina com diagnóstico de Síndrome de McCune-Albright vinha sendo tratada com sucesso com inibidor de aromatase (Letrozol), mantendo os cistos ovarianos e sangramentos controlados. Entretanto, aos 7 anos e 6 meses, sua idade óssea avançou para 11 anos e a paciente voltou a apresentar progressão rápida das mamas (M4) e aceleração da velocidade de crescimento para 10 cm/ano. O teste de estímulo com GnRH realizado agora demonstrou elevação súbita do pico de LH para 12,4 mUI/mL (previamente era < 0,2 mUI/mL). Qual fenômeno neuroendócrino explica essa mudança no padrão da doença e qual conduta deve ser associada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ocorre a ativação secundária do eixo hipotálamo-hipófise-gonadal ("efeito priming" ou maturação hipotalâmica induzida pelo avanço da idade óssea acima de 10-11 anos e exposição prévia prolongada a esteroides sexuais), convertendo a puberdade precoce periférica em Puberdade Precoce Central Secundária; a conduta é associar um análogo de GnRH de depósito ao tratamento de base.',
      },
      {
        id: 'B',
        texto:
          'Trata-se de choque anafilático induzido por letrozol exigindo adrenalina intramuscular imediata.',
      },
      {
        id: 'C',
        texto:
          'O resultado decorre de contaminação bacteriana do tubo de coleta do LH que deve ser ignorada mantendo-se a mesma conduta.',
      },
      {
        id: 'D',
        texto:
          'A paciente desenvolveu hipotireoidismo congênito que dispensa qualquer alteração medicamentosa.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Fenômeno de "Priming" Hipotalâmico e a Puberdade Precoce Central Secundária:\n\n1. O Fenômeno de Maturação Hipotalâmica Secundária:\n   - Pacientes com qualquer forma de Puberdade Precoce Periférica crônica prolongada (HAC mal controlada, Síndrome de McCune-Albright, tumores adrenais ressecados, testotoxicose);\n   - A exposição crônica aos esteroides sexuais acelera a maturação óssea;\n   - Quando a IDADE ÓSSEA atinge o limiar puberal fisiológico (habitualmente entre 10 e 11 anos na menina ou 11 a 12 anos no menino), o hipotálamo sofre o chamado "EFEITO PRIMING";\n   - O gerador de pulsos de GnRH hipotalâmico desperta e passa a liberar GnRH pulsátil de forma autônoma verdadeira;\n\n2. Repercussão Diagnóstica:\n   - O teste de GnRH, que antes era suprimido e plano (típico de PPP), torna-se francamente POSITIVO (pico de LH > 5 mUI/mL, indicando ativação central);\n   - A doença converteu-se em PUBERDADE PRECOCE CENTRAL SECUNDÁRIA (ou combinada);\n\n3. Conduta Farmacológica:\n   - Manter o tratamento da doença de base periférica (ex: letrozol para McCune ou hidrocortisona para HAC);\n   - E ASSOCIAR imediatamente um ANÁLOGO AGONISTA DE GnRH DE DEPÓSITO (Leuprorrelina) para bloquear o eixo central que despertou, preservando a estatura final da criança.',
    comentariosAlternativas: {
      A: 'Correta. A exposição prévia a esteroides maturou o hipotálamo (efeito priming com idade óssea > 11 anos), exigindo a associação de análogo de GnRH ao letrozol.',
      B: 'Incorreta. Não se trata de anafilaxia, mas de evolução endócrina neurobiológica bem descrita.',
      C: 'Incorreta. O pico de LH estimulado de 12,4 reflete ativação biológica real do eixo HHG.',
      D: 'Incorreta. A elevação de LH após GnRH comprova PPC secundária ativa.',
    },
  },
  {
    id: 'ped-pub-046',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Diagnóstico Diferencial Síntese: PPC versus PPP',
    isRevisao: false,
    enunciado:
      'Em uma prova prática com estação simulada de Endocrinologia Pediátrica, o candidato é solicitado a sistematizar os elementos que diferenciam a Puberdade Precoce Central (PPC) da Puberdade Precoce Periférica (PPP). Assinale a alternativa que apresenta a síntese semiológica e laboratorial comparativa correta entre ambas:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A PPC é GnRH-dependente, sempre isosexual, com desenvolvimento gonadal congruente e simétrico (mamas/útero na menina e testículos >= 4 mL bilaterais no menino), apresentando LH basal/estimulado elevado; enquanto a PPP é GnRH-independente, pode ser isosexual ou heterossexual, cursa com desenvolvimento gonadal incongruente ou assimétrico (ex: pênis desenvolvido com testículos infantis < 4 mL) e apresenta LH basal e estimulado suprimidos.',
      },
      {
        id: 'B',
        texto:
          'A PPC cursa invariavelmente com LH indetectável em todos os exames e a PPP cursa com LH acima de 100 mUI/mL em 100% dos casos.',
      },
      {
        id: 'C',
        texto:
          'A PPC ocorre exclusivamente em homens com mais de 50 anos e a PPP ocorre exclusivamente em fetos anencefálicos.',
      },
      {
        id: 'D',
        texto:
          'Não existe nenhuma diferença laboratorial ou clínica entre PPC e PPP, sendo o tratamento cirúrgico idêntico para ambas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Quadro Comparativo Clássico: Puberdade Precoce Central (PPC) vs Periférica (PPP):\n\n1. Mecanismo Fisiopatológico:\n   - PPC: Dependente de GnRH (ativação do eixo hipotálamo-hipófise-gonadal);\n   - PPP: Independente de GnRH (produção autônoma gonadal, adrenal ou exógena);\n\n2. Tipo de Caracteres Sexuais:\n   - PPC: SEMPRE ISOSEXUAL (condizente com o sexo genético);\n   - PPP: Pode ser ISOSEXUAL (ex: menina feminilizada por tumor de granulosa) ou HETEROSSEXUAL / Virilizante / Feminizante (ex: menina virilizada por tumor adrenal ou menino feminilizado com ginecomastia por tumor de Sertoli);\n\n3. Exame das Gônadas (O "Gatilho" Clínico):\n   - PPC: Gônadas congruentes com a maturação (testículos simétricos >= 4 mL bilateralmente no menino; ovários e útero aumentados na menina);\n   - PPP: Gônadas desproporcionais ou assimétricas (ex: macrogenitossomia com testículos < 4 mL na HAC; ou assimetria com testículo tumoral unilateral de 12 mL e contralateral de 2 mL no tumor de Leydig);\n\n4. Laboratório de Gonadotrofinas:\n   - PPC: LH basal >= 0,3-0,6 ou pico estimulado por GnRH > 5 mUI/mL (puberal);\n   - PPP: LH basal indetectável (< 0,1) e pico pós-GnRH plano e suprimido (< 2-3 mUI/mL);\n\n5. Tratamento de Escolha:\n   - PPC: Análogo agonista de GnRH de depósito (Leuprorrelina);\n   - PPP: Tratamento direcionado à causa primária (cirurgia de tumor, glicocorticoide para HAC, inibidor de aromatase para McCune-Albright).',
    comentariosAlternativas: {
      A: 'Correta. Sintetiza perfeitamente a distinção: PPC = GnRH-dependente, isosexual, gônadas congruentes simétricas e LH alto; PPP = GnRH-independente, iso/heterossexual, gônadas incongruentes e LH suprimido.',
      B: 'Incorreta. Inverte completamente o comportamento das gonadotrofinas.',
      C: 'Incorreta. Ambas são patologias pediátricas da infância.',
      D: 'Incorreta. A diferenciação entre PPC e PPP é o pilar fundamental que define condutas totalmente opostas (análogo de GnRH vs cirurgia/bloqueio periférico).',
    },
  },
  {
    id: 'ped-pub-047',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Síndrome de Van Wyk-Grumbach: Puberdade Precoce Paradoxal no Hipotireoidismo Grave',
    isRevisao: false,
    enunciado:
      'Uma menina de 7 anos e 6 meses é levada à consulta com queixa de desenvolvimento de mamas, galactorreia e sangramento vaginal cíclico há 3 meses. Ao exame físico: paciente apresenta fácies infiltrada, pele fria, seca e áspera, mamas em M3 com saída de secreção láctea à expressão papilar, ausência total de pelos pubianos (P1). Ao plotar os dados no gráfico de crescimento, observa-se velocidade de crescimento marcadamente deprimida (cresceu apenas 2,0 cm no último ano, com parada de crescimento). A radiografia de punhos revela idade óssea de 4 anos e 6 meses (ATRASO de 3 anos em relação à idade cronológica). O ultrassom pélvico evidencia múltiplos cistos ovarianos foliculares volumosos bilaterais. Os exames laboratoriais revelam: TSH > 150 mUI/L (VR: 0,4 a 4,5), T4 livre < 0,1 ng/dL (indetectável) e prolactina de 85 ng/mL. Qual síndrome clínica clássica explica essa puberdade precoce periférica paradoxal associada a atraso de crescimento e qual é o tratamento indicado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome de Van Wyk-Grumbach decorrente de hipotireoidismo primário grave não tratado de longa data; o mecanismo baseia-se na reatividade cruzada do TSH em concentrações astronômicas sobre os receptores ovarianos de FSH e hiperprolactinemia mediada pelo TRH elevado; o tratamento de escolha é a reposição exclusiva de Levotiroxina sódica oral, que promove a resolução completa de todos os cistos e caracteres precoces sem necessidade de cirurgia.',
      },
      {
        id: 'B',
        texto:
          'Adenoma hipofisário produtor exclusivo de LH com indicação de radioterapia e histerectomia.',
      },
      {
        id: 'C',
        texto:
          'Câncer papilífero de tireoide metastático para os ovários com necessidade de quimioterapia citotóxica.',
      },
      {
        id: 'D',
        texto:
          'Doença de Graves congênita com tireotoxicose grave tratada com iodo radioativo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Síndrome de Van Wyk-Grumbach (Tema de Alta Sofisticação em Concursos):\n\n1. O "Paradoxo" da Puberdade Precoce com Baixa Velocidade de Crescimento e Atraso Ósseo:\n   - Toda puberdade precoce habitual (central ou periférica) cursa com ALTA velocidade de crescimento (estirão) e AVANÇO da idade óssea;\n   - A Síndrome de Van Wyk-Grumbach é a ÚNICA causa de puberdade precoce que cursa com:\n     a) PARADA DE CRESCIMENTO (velocidade muito baixa, ex: 2 cm/ano);\n     b) ATRASO SIGNIFICATIVO DA IDADE ÓSSEA (a idade óssea fica para trás da idade cronológica);\n\n2. Fisiopatologia:\n   - Decorre de HIPOTIREOIDISMO PRIMÁRIO GRAVE crônico e não tratado de longa duração;\n   - A falta de hormônios tireoidianos estimula maciçamente o hipotálamo a produzir TRH em níveis elevadíssimos;\n   - O excesso de TRH estimula os lactotrofos hipofisários a produzir PROLACTINA em excesso (galactorreia);\n   - O TSH atinge níveis extremos (> 100-200 mUI/L);\n   - Devido à homologia estrutural molecular entre a subunidade alfa do TSH e do FSH, o TSH em concentrações gigantescas promove REAÇÃO CRUZADA ("molecular spillover") ligando-se e ativando os RECEPTORES DE FSH NOS OVÁRIOS;\n   - Isso induz o surgimento de múltiplos e enormes cistos ovarianos bilaterais produtores de estradiol (telarca, espessamento endometrial e sangramento vaginal);\n   - No menino, essa síndrome causa MACROORQUIDISMO (aumento testicular bilateral simétrico) sem virilização (pois estimula FSH nas células de Sertoli sem ativar LH nas células de Leydig);\n\n3. Tratamento:\n   - Reposição simples de LEVOTIROXINA (T4 sintético);\n   - Com a normalização do TSH e prolactina, os cistos ovarianos regridem espontaneamente, o sangramento cessa e a criança retoma seu crescimento linear com recuperação ("catch-up growth").',
    comentariosAlternativas: {
      A: 'Correta. A síndrome de Van Wyk-Grumbach decorre de hipotireoidismo grave de longa data; TSH extremo ativa receptores de FSH gerando cistos e puberdade precoce com atraso ósseo, revertida com levotiroxina.',
      B: 'Incorreta. Não se trata de adenoma de LH; o TSH está acima de 150 e a causa primária é tireoidiana.',
      C: 'Incorreta. Os cistos são benignos induzidos pelo TSH e regridem com hormônio tireoidiano.',
      D: 'Incorreta. A paciente tem hipotireoidismo primário profundo (T4 livre indetectável) e não hipertireoidismo de Graves.',
    },
  },
  {
    id: 'ped-pub-048',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Tumores Secretores de Gonadotrofina Coriônica Humana (hCG) no Menino',
    isRevisao: false,
    enunciado:
      'Um menino de 7 anos apresenta desenvolvimento peniano precoce (G3), pubarca (P2) e velocidade de crescimento de 10 cm/ano. O exame físico demonstra testículos aumentados bilateralmente e simétricos medindo 6 mL. Os exames laboratoriais revelam Testosterona total elevada (220 ng/dL), porém o LH sérico é indetectável (< 0,1 mUI/mL) com FSH indetectável. A dosagem sérica de beta-hCG revela valor extremamente elevado de 8.500 mUI/mL. A ressonância magnética de encéfalo evidencia massa tumoral na região da glândula pineal. Qual é o mecanismo pelo qual a gonadotrofina coriônica humana (hCG) secretada por esse tumor de células germinativas induz puberdade precoce no sexo masculino?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O beta-hCG possui homologia estrutural com o LH e liga-se diretamente aos receptores de LH nas células de Leydig testiculares, estimulando a síntese autônoma de testosterona e promovendo virilização com aumento testicular bilateral simétrico, sem necessidade de ativação do eixo hipofisário.',
      },
      {
        id: 'B',
        texto:
          'O beta-hCG destrói as células adrenais impedindo a absorção de vitamina D na pele.',
      },
      {
        id: 'C',
        texto:
          'O beta-hCG atua exclusivamente como hormônio paratireoidiano no esmalte dentário.',
      },
      {
        id: 'D',
        texto:
          'O beta-hCG induz puberdade precoce apenas no sexo feminino, sendo inativo no sexo masculino.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Tumores Secretores de hCG e a Puberdade Precoce Masculina:\n\n1. Homologia Estrutural entre hCG e LH:\n   - As quatro glicoproteínas hipofisárias/placentárias (LH, FSH, TSH e hCG) compartilham a mesma SUBUNIDADE ALFA idêntica;\n   - A subunidade beta do hCG possui alta homologia estrutural com a subunidade beta do LH;\n   - Por essa razão, o hCG é um potente AGONISTA DO RECEPTOR DE LH (LHCGR);\n\n2. Fisiopatologia no Menino:\n   - Tumores de células germinativas (germinomas, teratomas imaturos, coriocarcinomas localizados na região pineal, mediastino ou fígado - hepatoblastoma);\n   - O tumor secreta grandes quantidades de beta-hCG na circulação;\n   - O hCG liga-se aos receptores de LH nas células de Leydig de ambos os testículos;\n   - Estimula a produção maciça de TESTOSTERONA e discreto aumento testicular simétrico (células de Leydig hipertrofiadas);\n   - Consequência: Virilização precoce (crescimento peniano, pelos, voz, estirão) com LH e FSH hipofisários suprimidos;\n\n3. Por que Esse Tumor Não Causa Puberdade Precoce na Menina?\n   - Porque para haver produção de estradiol no ovário, a menina necessita obrigatoriamente de FSH (para ativar a aromatase nas células da granulosa);\n   - O hCG atua apenas nos receptores de LH (estimula a teca a produzir andrógenos, mas sem FSH não há aromatização em estrógenos);\n   - Portanto, tumores secretores de hCG causam puberdade precoce quase que EXCLUSIVAMENTE NO SEXO MASCULINO.',
    comentariosAlternativas: {
      A: 'Correta. O hCG atua como agonista nos receptores de LH nas células de Leydig, estimulando a síntese de testosterona e virilização no menino.',
      B: 'Incorreta. O hCG não destrói adrenais nem afeta a absorção cutânea de vitamina D.',
      C: 'Incorreta. O hCG não tem ação como paratormônio nos dentes.',
      D: 'Incorreta. Ocorre o oposto: o tumor secretor de hCG causa puberdade precoce no menino (estimulando Leydig), mas não na menina (que necessita de FSH).',
    },
  },
  {
    id: 'ped-pub-049',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Causas Raras de PPC: Cistos Aracnoides e Hidrocefalia na Infância',
    isRevisao: false,
    enunciado:
      'Um menino de 4 anos com antecedente de prematuridade e hemorragia peri-intraventricular neonatal tratada com derivação ventrículo-peritoneal (DVP) por hidrocefalia pós-hemorrágica é encaminhado para avaliação endocrinológica. O exame físico demonstra estadiamento G3 P2 (testículos de 8 mL bilateralmente no orquidômetro de Prader, pênis de 7 cm) e velocidade de crescimento de 10,8 cm/ano. O teste de estímulo com GnRH confirma Puberdade Precoce Central com pico de LH de 14,2 mUI/mL. A ressonância magnética de encéfalo descarta massas parenquimatosas sólidas ou hamartomas, confirmando apenas hidrocefalia compensada com cateter de DVP funcionante e pequeno cisto aracnoide supraselar assintomático. Qual mecanismo fisiopatológico explica a ocorrência de puberdade precoce central em crianças com hidrocefalia, cistos aracnoides ou após meningite neonatal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A distorção mecânica, tração ou compressão das vias neurais hipotalâmicas e a alteração da pressão intracraniana lesam as vias inibitórias gabaérgicas do assoalho do terceiro ventrículo, liberando prematuramente o gerador de pulsos de GnRH.',
      },
      {
        id: 'B',
        texto:
          'O cateter de silicone da derivação ventrículo-peritoneal secreta testosterona sintética diretamente no peritônio abdominal.',
      },
      {
        id: 'C',
        texto:
          'O cisto aracnoide atua como um ovário ectópico intraventricular secretor de progesterona.',
      },
      {
        id: 'D',
        texto:
          'A hemorragia neonatal converte todas as células do sangue em neurônios produtores de hormônio tireoidiano.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Causas Estruturais Não Tumorais de Puberdade Precoce Central no SNC:\n\n1. Condições Neurológicas Associadas à PPC:\n   - Hidrocefalia congênita ou adquirida (com ou sem DVP);\n   - Cistos aracnoides (especialmente na região supraselar ou fossa média);\n   - Mielomeningocele com malformação de Chiari II;\n   - Sequela de meningite bacteriana neonatal ou meningoencefalite viral;\n   - Traumatismo cranioencefálico grave;\n   - Radioterapia de sistema nervoso central (mesmo em doses moderadas profiláticas para leucemia linfoide aguda);\n\n2. Mecanismo Fisiopatológico Comum:\n   - Durante a infância, o gerador de pulsos de GnRH no hipotálamo medial basal é mantido silenciado por VIAS NEURAIS INIBITÓRIAS CORTICAIS E SUB-CORTICAIS (compostas predominantemente por interneurônios gabaérgicos);\n   - A distorção mecânica, hidrocefalia crônica, dilatação do terceiro ventrículo ou gliose cicatricial pós-inflamatória LESAM OU INTERROMPEM essas vias inibitórias;\n   - O "freio central" é quebrado precocemente;\n   - O hipotálamo passa a liberar GnRH em pulsos antes da época fisiológica, ativando a cascata normal de LH, FSH e esteroides gonadais;',
    comentariosAlternativas: {
      A: 'Correta. A perda do tônus inibitório neural sobre o hipotálamo causada pela hidrocefalia e lesões estruturais libera precocemente a secreção de GnRH.',
      B: 'Incorreta. Cateteres de derivação são tubos inertes de silicone e não produzem hormônios.',
      C: 'Incorreta. Cistos aracnoides são coleções benignas de líquor delimitadas pela membrana aracnoide, sem função glandular ovariana.',
      D: 'Incorreta. Não existe conversão de hemácias em neurônios secretores.',
    },
  },
  {
    id: 'ped-pub-050',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Caso Integrador de Puberdade Precoce: Diagnóstico e Conduta em Hamartoma Hipotalâmico',
    isRevisao: false,
    enunciado:
      'Um menino de 2 anos e 10 meses é encaminhado pelo pediatra com quadro de virilização precoce associada a episódios neurológicos paroxísticos. A mãe relata que desde os 6 meses de vida a criança apresenta múltiplos episódios diários de riso involuntário e estereotipado (crises gelásticas). Nos últimos 6 meses, observou-se crescimento acelerado do pênis, surgimento de pelos pubianos e velocidade de crescimento de 13,5 cm/ano. Ao exame físico: paciente com pênis de 8 cm, pelos pubianos P3 e testículos simétricos aumentados medindo 8 mL bilateralmente no orquidômetro de Prader (estágio G3 P3). O teste de estímulo com GnRH sintético revela pico de LH de 19,8 mUI/mL e Testosterona total de 310 ng/dL. A Ressonância Magnética de encéfalo e sela túrcica evidencia lesão nodular séssil arredondada medindo 14 mm no túber cinéreo hipotalâmico, isointensa em T1, hiperintensa em T2 e sem realce anômalo após a injeção de contraste paramagnético (gadolínio), compatível com Hamartoma Hipotalâmico. Considerando a gravidade do quadro clínico, as repercussões sobre o crescimento e a epilepsia associada, qual é o plano terapêutico integrado mais adequado para este paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tratamento endocrinológico imediato com análogo agonista de GnRH de depósito (como o Acetato de Leuprorrelina ou Triptorrelina intramuscular mensal) para dessensibilizar a hipófise e bloquear a progressão da puberdade precoce central, prevenindo a perda de estatura adulta final; associado ao manejo conjunto com a Neurologia Pediátrica para controle das crises gelásticas com fármacos antiepilépticos específicos ou avaliação de ablação térmica por laser/cirurgia se refratariedade epiléptica.',
      },
      {
        id: 'B',
        texto:
          'Indicação de radioterapia holocraniana de urgência associada a quimioterapia com cisplatina para destruição do tumor.',
      },
      {
        id: 'C',
        texto:
          'Suspensão de qualquer intervenção médica e alta ambulatorial, pois o hamartoma hipotalâmico tem regressão 100% espontânea em 30 dias.',
      },
      {
        id: 'D',
        texto:
          'Orquiectomia bilateral radical associada a adrenalectomia bilateral para zerar os hormônios periféricos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo Integrado da Puberdade Precoce Central por Hamartoma Hipotalâmico:\n\n1. Aspectos Fisiopatológicos e Clínicos Consolidados:\n   - O paciente apresenta a tríade clássica do Hamartoma Hipotalâmico:\n     1. Puberdade Precoce Central verdadeira confirmada laboratorialmente (pico de LH > 5 mUI/mL no teste de GnRH);\n     2. Desenvolvimento gonadal isosexual congruente e simétrico (testículos aumentados bilateralmente em 8 mL);\n     3. Crises epilépticas gelásticas (crises focais com riso estereotipado paroxístico);\n   - Imagem típica na RM: lesão nodular isointensa em T1 e sem captação de contraste no túber cinéreo;\n\n2. Pilares da Conduta Terapêutica Integrada:\n   - Pilar 1: Bloqueio Endócrino do Eixo Hipotálamo-Hipófise-Gonadal:\n     - ANÁLOGO AGONISTA DE GnRH DE DEPÓSITO (Leuprorrelina 3,75 mg IM a cada 28 dias);\n     - O análogo bloqueia a resposta hipofisária ao GnRH autônomo disparado pelo hamartoma;\n     - Promove desaceleração imediata da velocidade de crescimento (de 13,5 para 5-6 cm/ano), freia o avanço da idade óssea e preserva a estatura adulta final;\n   - Pilar 2: Manejo Neurológico das Crises Epilépticas:\n     - Introdução de fármacos antiepilépticos com o neuropediatra;\n     - Como o hamartoma é uma lesão congênita BENIGNA e não um tumor neoplásico invasivo, a cirurgia aberta convencional acarreta alto risco de lesão hipotalâmica grave;\n     - Técnicas modernas e minimamente invasivas de ablação a laser guiada por RM (LITT) ou radiocirurgia estereotáxica (Gamma Knife) ficam reservadas para pacientes com crises epilépticas graves fármaco-refratárias ou distúrbios comportamentais severos.',
    comentariosAlternativas: {
      A: 'Correta. O tratamento da PPC por hamartoma baseia-se no análogo de GnRH de depósito associado ao controle antiepiléptico das crises gelásticas.',
      B: 'Incorreta. Hamartomas hipotalâmicos são lesões congênitas benignas não neoplásicas; radioterapia e quimioterapia citotóxica são contraindicadas e ineficazes.',
      C: 'Incorreta. O hamartoma é estrutural e não regride espontaneamente; sem tratamento a criança sofrerá parada precoce de crescimento e perda grave de altura.',
      D: 'Incorreta. Castração cirúrgica e adrenalectomia são procedimentos mutilantes proscritos.',
    },
  },
  {
    id: 'ped-pub-051',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Variantes Benignas da Puberdade: Telarca Precoce Isolada em Lactentes',
    isRevisao: false,
    enunciado:
      'Uma lactente de 14 meses é levada à consulta na Unidade Básica de Saúde pela mãe, que notou o aparecimento de nódulos endurecidos e palpáveis sob as aréolas bilateralmente há cerca de 2 meses. O nascimento ocorreu a termo, de parto vaginal, com peso e estatura adequados para a idade gestacional, sem intercorrências no período neonatal. A criança não apresenta pelos pubianos, nem odor axilar apócrino adulto, e não há histórico de sangramento genital. Ao exame físico: desenvolvimento neuropsicomotor adequado; peso e estatura no percentil 50 da curva da OMS com velocidade de crescimento normal (11 cm/ano, compatível com a faixa etária de lactente); presença de tecido glandular mamário subareolar simétrico bilateral medindo 2,5 cm de diâmetro (estadiamento de Tanner M2), sem aréolas hiperpigmentadas; genitália externa típica feminina e infantil, sem pilosidade (P1), sem clitoromegalia e sem secreção vaginal. Diante deste quadro clínico, qual é o diagnóstico mais provável e a conduta preconizada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Telarca Precoce Isolada; a conduta é tranquilizar os pais e manter acompanhamento clínico periódico ambulatorial a cada 3 a 6 meses para vigilância do crescimento e caracteres secundários, sem necessidade de intervenção medicamentosa.',
      },
      {
        id: 'B',
        texto:
          'Puberdade Precoce Central verdadeira; indicação imediata de internação hospitalar para início de quimioterapia hipofisária com cisplatina.',
      },
      {
        id: 'C',
        texto:
          'Adenoma hipofisário secretor de prolactina; indicação de ressonância magnética de crânio com sedação e introdução de cabergolina.',
      },
      {
        id: 'D',
        texto:
          'Mastite bacteriana bilateral crônica; início urgente de oxacilina intravenosa por 21 dias associada à drenagem cirúrgica dos brotos mamários.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Telarca Precoce Isolada (TPI) na Infância:\n\n1. Conceito e Epidemiologia:\n   - Caracteriza-se pelo desenvolvimento isolado e prematuro de tecido glandular mamário uni ou bilateral em meninas com idade inferior a 8 anos (com pico de incidência marcante nos primeiros 2 anos de vida, tipicamente entre 12 e 24 meses);\n   - Trata-se de uma variante benigna e autolimitada da puberdade, sem evidência de ativação coordenada do eixo hipotálamo-hipófise-gonadal;\n\n2. Características Clínicas Fundamentais:\n   - Ausência de outros caracteres sexuais secundários (pelos pubianos P1, ausência de odor axilar adulto e genitália externa estritamente infantil);\n   - Velocidade de crescimento RIGOROSAMENTE NORMAL para a faixa etária (não há estirão puberal antecipado);\n   - Idade óssea compatível com a idade cronológica (sem avanço esquelético);\n   - Se realizado ultrassom pélvico, evidencia útero infantil tubular (comprimento < 3,0 cm, volume < 2 cm³ e relação corpo/colo <= 1) e ovários de aspecto pré-puberal (volume < 1-2 cm³, embora pequenos microcistos foliculares transitórios < 4 mm possam ser visualizados);\n\n3. Conduta Recomendada:\n   - Conduta eminentemente EXPECTANTE e conservadora;\n   - Orientação e tranquilização dos familiares quanto ao caráter benigno e não progressivo da condição;\n   - Monitorização periódica em puericultura (a cada 3 a 6 meses), avaliando peso, estatura, velocidade de crescimento e caracteres sexuais;\n   - Em mais de 80-90% dos casos ocorre regressão espontânea completa ou estabilização do tecido mamário até os 2 a 4 anos de idade, sem qualquer prejuízo à estatura final ou à fertilidade.',
    comentariosAlternativas: {
      A: 'Correta. A telarca precoce em lactentes com crescimento normal e sem outros estigmas puberais é uma variante benigna autolimitada, com conduta expectante.',
      B: 'Incorreta. Não se trata de PPC verdadeira; o crescimento é normal e não há indicação de quimioterapia nem análogos de GnRH.',
      C: 'Incorreta. Prolactinomas na infância são raríssimos e causariam galactorreia em meninas mais velhas, não telarca isolada em lactente.',
      D: 'Incorreta. Não há flogose, febre ou sinais infecciosos; punção ou drenagem de broto mamário é contraindicada pelo risco de destruir a placa de crescimento do botão mamário.',
    },
  },
  {
    id: 'ped-pub-052',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Fisiopatologia da Telarca Precoce Isolada: Minipuberdade e Sensibilidade Tecidual',
    isRevisao: false,
    enunciado:
      'Em relação à fisiopatologia da Telarca Precoce Isolada em lactentes e meninas abaixo dos 2 anos, qual mecanismo biológico fundamenta o desenvolvimento mamário sem ativação patológica sistêmica do eixo hipotálamo-hipófise-gonadal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Flutuação fisiológica intermitente dos níveis basais de FSH durante a fase tardia da minipuberdade pós-natal, associada a uma sensibilidade aumentada e transitória do receptor estrogênico do parênquima mamário a concentrações mínimas de estrógenos.',
      },
      {
        id: 'B',
        texto:
          'Secreção maciça de testosterona pelos melanócitos da pele que é convertida em corticosterona no tecido adiposo.',
      },
      {
        id: 'C',
        texto:
          'Produção primária e contínua de GnRH ectópico pelo timo e pelas amígdalas palatinas da criança.',
      },
      {
        id: 'D',
        texto:
          'Ausência congênita de receptores de estrogênio no útero e nos ovários com hiperplasia adrenal bilateral congênita.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Mecanismos Fisiopatológicos da Telarca Precoce Isolada:\n\n1. Ativação Transitória e Incompleta do Eixo:\n   - Durante a vida fetal, o eixo HHG é suprimido pelos altíssimos níveis de estrogênios e progesterona placentários;\n   - No pós-parto imediato, a queda abrupta dos hormônios maternos remove o feedback negativo central, disparando a chamada "MINIPUBERDADE" (pico pós-natal transitório de gonadotrofinas e esteroides sexuais nos primeiros 6 a 12 meses de vida);\n   - Em algumas meninas, ocorre uma liberação episódica e intermitente de FSH pela hipófise (sem liberação pulsátil sustentada de LH), que induz a maturação de pequenos folículos ovarianos capazes de produzir quantidades ínfimas e passageiras de estradiol;\n\n2. Hipersensibilidade Tecidual do Broto Mamário:\n   - O tecido mamário é o órgão-alvo mais sensível ao estrogênio no organismo feminino;\n   - Pequeníssimas oscilações nos níveis de estradiol, insuficientes para estimular o endométrio uterino ou acelerar a cartilagem epifisária de crescimento, são suficientes para induzir proliferação dos ductos mamários;\n   - A expressão de aromatase tecidual local no tecido adiposo mamário também contribui para essa proliferação localizada;\n   - À medida que a criança atinge os 2 a 3 anos de vida, o eixo HHG entra na fase de quiescência profunda ("freio central infantil"), resultando em regressão espontânea ou parada na evolução da mama.',
    comentariosAlternativas: {
      A: 'Correta. A combinação de secreção episódica de FSH da minipuberdade e hipersensibilidade do receptor mamário explica o broto isolado sem repercussão sistêmica.',
      B: 'Incorreta. Melanócitos cutâneos produzem melanina e não testosterona.',
      C: 'Incorreta. Timo e amígdalas são órgãos linfoides imunológicos e não sintetizam GnRH.',
      D: 'Incorreta. Não há ausência de receptores nem relação com hiperplasia adrenal (que causaria virilização e não telarca).',
    },
  },
  {
    id: 'ped-pub-053',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Diagnóstico Diferencial: Sinais de Alerta na Telarca Precoce para Puberdade Precoce Central',
    isRevisao: false,
    enunciado:
      'Uma menina de 3 anos de idade que vinha em acompanhamento com hipótese de telarca precoce isolada retorna para consulta de rotina semestral. A mãe relata que as mamas continuam presentes e que percebeu que a filha perdeu sapatos e roupas rapidamente nos últimos meses. O pediatra realiza a antropometria e o exame físico minucioso. Qual conjunto de achados clínicos e radiológicos indica que a condição NÃO se trata mais de uma variante benigna, mas sim de conversão para PUBERDADE PRECOCE CENTRAL VERDADEIRA em franca progressão?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Aceleração expressiva da velocidade de crescimento acima do percentil 97 para a idade, avanço da idade óssea superior a 1 ano em relação à idade cronológica e progressão para estadiamento mamário M3 com surgimento de pelos pubianos.',
      },
      {
        id: 'B',
        texto:
          'Velocidade de crescimento estagnada em 2 cm/ano, fontanela anterior aberta e dentes de leite completamente preservados.',
      },
      {
        id: 'C',
        texto:
          'Idade óssea atrasada em 2 anos em relação à idade cronológica, constipação crônica e perda de peso acentuada.',
      },
      {
        id: 'D',
        texto:
          'Manutenção das mamas em estágio M2 inalterado, idade óssea idêntica à cronológica e útero infantil tubular na ultrassonografia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Sinais de Alerta ("Red Flags") para Conversão de Telarca Isolada em Puberdade Precoce Central:\n\n1. Sinais Clínicos e Antropométricos de Alerta:\n   - ACELERAÇÃO DA VELOCIDADE DE CRESCIMENTO: criança pré-escolar crescendo > 7 a 8 cm/ano (acima do percentil 97 para a faixa etária);\n   - PROGRESSÃO DO ESTÁGIO MAMÁRIO: evolução rápida de M2 para M3 ou M4, com alargamento e hiperpigmentação do complexo aréolo-papilar;\n   - APARECIMENTO DE OUTROS CARACTERES PUBERAIS: surgimento de pubarca (pelos pubianos verdadeiros), axilarca e odor apócrino adulto;\n   - Mudança no padrão corporal (acúmulo de gordura em quadril e contorno ginecoide);\n\n2. Sinais Radiológicos e Ultrassonográficos:\n   - AVANÇO DA IDADE ÓSSEA: relação IO/IC > 1,0, com avanço superior a 12 meses na radiografia de mãos e punhos esquerdos;\n   - ULTRASSONOGRAFIA PÉLVICA: aumento do comprimento longitudinal do útero (> 3,5 a 4,0 cm), aumento do volume uterino (> 3 cm³), relação corpo/colo > 1 e presença de linha endometrial visível (estímulo estrogênico sistêmico significativo);\n\n3. Conduta Diante dos Sinais de Alerta:\n   - Suspeição imediata de PPC;\n   - Solicitação de teste de estímulo com GnRH para confirmação laboratorial do pico de LH (> 5 mUI/mL);\n   - Encaminhamento à Endocrinologia Pediátrica e solicitação de Ressonância Magnética de encéfalo e sela túrcica para descartar lesões tumorais/estruturais no sistema nervoso central.',
    comentariosAlternativas: {
      A: 'Correta. Aceleração da velocidade de crescimento, avanço da idade óssea e progressão dos caracteres sexuais definem a ativação patológica do eixo.',
      B: 'Incorreta. Velocidade de crescimento em 2 cm/ano indicaria déficit de crescimento grave (como pan-hipopituitarismo ou hipotireoidismo severo), e não puberdade precoce.',
      C: 'Incorreta. Idade óssea atrasada é característica de hipotireoidismo ou atraso constitucional do crescimento e puberdade.',
      D: 'Incorreta. M2 inalterado com IO coincidente e útero infantil confirmam a persistência da telarca precoce isolada benigna.',
    },
  },
  {
    id: 'ped-pub-054',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Ultrassonografia Pélvica na Telarca Precoce Isolada: Padrão Infantil de Normalidade',
    isRevisao: false,
    enunciado:
      'Uma menina de 2 anos e 3 meses apresenta mamas palpáveis bilaterais (M2) há 4 meses, com velocidade de crescimento normal no percentil 50. O pediatra solicitou ultrassonografia pélvica por via abdominal para dirimir dúvidas da família. Qual descrição ecográfica confirma padrão estritamente PRÉ-PUBERAL/INFANTIL, reforçando a benignidade e o diagnóstico de telarca precoce isolada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Útero com morfologia tubular, comprimento longitudinal de 2,6 cm, volume de 1,1 cm³, relação corpo/colo menor ou igual a 1 e linha endometrial imperceptível; ovários simétricos com volume inferior a 1,5 cm³ contendo apenas microfolículos menores que 4 mm.',
      },
      {
        id: 'B',
        texto:
          'Útero piriforme com comprimento longitudinal de 5,8 cm, volume de 12 cm³, linha endometrial hiperecogênica de 6 mm e ovários com volume de 7 cm³ contendo múltiplos folículos de 12 mm.',
      },
      {
        id: 'C',
        texto:
          'Presença de cisto complexo de 8 cm com septos espessos e calcificações bizarras no ovário direito, compatível com teratoma imaturo invasivo.',
      },
      {
        id: 'D',
        texto:
          'Ausência completa de útero e ovários na cavidade pélvica, associada a testículos intrabdominais bilaterais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Parâmetros Ultrassonográficos Pélvicos no Diagnóstico Diferencial da Puberdade Precoce:\n\n1. Padrão Infantil / Pré-Puberal (Normal na Telarca Precoce Isolada):\n   - MORFOLOGIA UTERINA: formato tubular cilíndrico ("em charuto"), sem a diferenciação em formato piriforme;\n   - COMPRIMENTO UTERINO: menor que 3,0 a 3,4 cm;\n   - VOLUME UTERINO: inferior a 2,0 a 3,0 cm³ (habitualmente em torno de 1,0 cm³ na faixa de 1 a 3 anos);\n   - RELAÇÃO CORPO/COLO UTERINO: corpo menor ou igual ao colo (<= 1:1, tipicamente 1:2);\n   - ENDOMÉTRIO: eco endometrial ausente ou em linha fina imperceptível (ausência de impregnação estrogênica);\n   - OVÁRIOS: volume < 1,5 a 2,0 cm³; a presença de pequenos microfolículos periféricos (< 3 a 5 mm) é achado fisiológico comum e não denota puberdade;\n\n2. Padrão Puberal (Presente na Puberdade Precoce Central ou Periférica Ativa):\n   - Morfologia piriforme (fundo uterino abaulado);\n   - Comprimento uterino >= 3,5 a 4,0 cm;\n   - Volume uterino superior a 3,0 a 4,0 cm³;\n   - Relação corpo/colo > 1:1 (corpo uterino cresce e torna-se o dobro do colo, 2:1 a 3:1);\n   - Linha endometrial espessada e bem visualizada (> 2 a 3 mm);\n   - Ovários com volume aumentado (> 2,5 a 3 cm³) contendo folículos em desenvolvimento (> 8 a 10 mm).',
    comentariosAlternativas: {
      A: 'Correta. O útero tubular pequeno com corpo menor que o colo e ovários pequenos sem folículos dominantes caracteriza o estado pré-puberal normal.',
      B: 'Incorreta. Este laudo descreve útero plenamente puberal de adolescente após o estirão, incompatível com telarca isolada.',
      C: 'Incorreta. Descreve massa anexial neoplásica que demandaria cirurgia oncológica de urgência.',
      D: 'Incorreta. Descreve agenesia mülleriana ou disgenesia gonadal / insensibilidade androgênica completa, incompatível com o caso.',
    },
  },
  {
    id: 'ped-pub-055',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Adrenarca Precoce Isolada: Fisiopatologia da Zona Reticular e Quadro Clínico',
    isRevisao: false,
    enunciado:
      'Uma menina de 6 anos e 6 meses é levada à consulta ambulatorial porque a mãe percebeu o aparecimento de pelos finos e escuros na região pubiana e odor axilar semelhante ao de adulto ("odor apócrino") há 4 meses. A mãe nega surgimento de mamas, acne intensa ou aumento da genitália externa. Ao exame físico: sem queixas álgicas; pressão arterial normal; ausência de tecido glandular mamário palpável (Tanner M1); presença de pelos pubianos discretos e esparsos ao longo dos grandes lábios (Tanner P2); ausência de clitoromegalia; pele sem hirsutismo severo; velocidade de crescimento de 5,8 cm/ano (adequada no percentil 50); radiografia de mãos e punhos esquerdos revela idade óssea de 6 anos e 8 meses (compatível com a idade cronológica). Diante desse quadro clínico, qual é a fisiopatologia subjacente e o diagnóstico correto?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Adrenarca Precoce Isolada; decorrente da maturação prematura e benigna da zona reticular do córtex da glândula adrenal, com síntese aumentada de andrógenos fracos como o DHEA-S.',
      },
      {
        id: 'B',
        texto:
          'Puberdade Precoce Central idiopática; ativação precoce do eixo hipotálamo-hipófise-gonadal com surto de secreção de LH pelas células de Sertoli.',
      },
      {
        id: 'C',
        texto:
          'Carcinoma adrenocortical metastático invasivo; neoprasia maligna produtora de aldosterona e cortisol com metástases hepáticas imediatas.',
      },
      {
        id: 'D',
        texto:
          'Doença de Addison primária; destruição autoimune do córtex da adrenal com insuficiência adrenal aguda e choque circulatório.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Adrenarca Precoce Isolada (Pubarca Precoce Isolada):\n\n1. Conceito e Fisiopatologia:\n   - Caracteriza-se pelo surgimento de pelos pubianos (P2) e/ou pelos axilares e odor axilar apócrino adulto antes dos 8 anos de idade em meninas (e antes dos 9 anos em meninos);\n   - Decorre da MATURAÇÃO PREMATURA DA ZONA RETICULAR do córtex da glândula adrenal (aumento fisiológico antecipado da atividade da enzima 17,20-liase/citocromo b5 e diminuição da 3beta-HSD);\n   - Essa reprogramação enzimática resulta na produção de ANDRÓGENOS ADRENAIS FRACOS: Sulfato de Desidroepiandrosterona (DHEA-S), Desidroepiandrosterona (DHEA) e Androstenediona;\n\n2. Distinção Crucial entre Adrenarca e Gonadarca:\n   - A adrenarca é um fenômeno ADRENAL e TOTALMENTE INDEPENDENTE do eixo hipotálamo-hipófise-gonadal (o GnRH, LH e FSH continuam silenciados);\n   - Por isso, na menina NÃO HÁ desenvolvimento mamário (mamas permanecem M1) e no menino NÃO HÁ aumento testicular (volume permanece < 4 mL);\n   - A velocidade de crescimento permanece dentro dos parâmetros normais da infância (5 a 6 cm/ano) e a idade óssea é congruente ou apresenta avanço mínimo (< 1 ano);\n   - Não há virilização progressiva ou patológica (sem hipertrofia de clitóris, voz grossa ou acne nódulo-cística).',
    comentariosAlternativas: {
      A: 'Correta. A maturação isolada da zona reticular da adrenal com produção de DHEA-S caracteriza a adrenarca precoce fisiológica.',
      B: 'Incorreta. Na PPC a menina apresentaria telarca (M2+) pelo estradiol gonadal; ademais, células de Sertoli existem apenas nos testículos masculinos.',
      C: 'Incorreta. Carcinomas adrenais cursam com virilização rápida e intensa, clitoromegalia, síndrome de Cushing e idade óssea desproporcionalmente avançada.',
      D: 'Incorreta. A Doença de Addison cursa com hipoandrogenismo, astenia, hipotensão, hiperpigmentação e carência de andrógenos, e não pubarca precoce.',
    },
  },
  {
    id: 'ped-pub-056',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Investigação Laboratorial da Adrenarca Precoce e Exclusão de HAC Não Clássica',
    isRevisao: false,
    enunciado:
      'Uma menina de 7 anos apresenta pubarca precoce (estágio Tanner P2), comedões em região malar e odor axilar adulto há 5 meses, sem mamas palpáveis e com velocidade de crescimento normal. Para a correta caracterização laboratorial da adrenarca precoce e exclusão de etiologias patológicas como a Hiperplasia Adrenal Congênita na forma não clássica (HAC-NC), quais exames hormonais basais devem ser solicitados e quais resultados são esperados para confirmar a variante benigna?',
    alternativas: [
      {
        id: 'A',
        texto:
          'DHEA-S sérico moderadamente elevado para a idade cronológica (compatível com faixa puberal inicial Tanner P2), associado a 17-hidroxiprogesterona (17-OHP) basal rigorosamente normal (< 200 ng/dL).',
      },
      {
        id: 'B',
        texto:
          '17-hidroxiprogesterona basal acima de 10.000 ng/dL e cortisol sérico indetectável, confirmando crise addisoniana.',
      },
      {
        id: 'C',
        texto:
          'LH basal em níveis de adulto (> 20 mUI/mL) com estradiol superior a 500 pg/mL e DHEA-S indetectável.',
      },
      {
        id: 'D',
        texto:
          'TSH elevado com T4 livre zerado, cálcio iônico nulo e paratormônio indetectável.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Avaliação Laboratorial na Pubarca Precoce:\n\n1. Sulfato de Desidroepiandrosterona (DHEA-S):\n   - É o marcador por excelência da função da zona reticular da adrenal, apresentando meia-vida longa e sem grande flutuação circadiana;\n   - Na adrenarca precoce, o DHEA-S está discretamente ou moderadamente elevado para a idade cronológica da criança, situando-se nos valores de referência normais para os estágios puberais P2 ou P3 (habitualmente entre 40 e 120 ug/dL);\n   - Níveis astronômicos de DHEA-S (> 500 a 1.000 ug/dL) acendem o alerta vermelho para tumor de córtex adrenal virilizante;\n\n2. 17-Hidroxiprogesterona (17-OHP):\n   - Exame fundamental para excluir a principal causa patológica virilizante na infância: a Hiperplasia Adrenal Congênita de início tardio ou NÃO CLÁSSICA por deficiência parcial de 21-hidroxilase;\n   - Na adrenarca precoce benigna, a 17-OHP basal (colhida pela manhã) é normal (inferior a 200 ng/dL ou < 2 ng/mL);\n   - Se a 17-OHP basal estiver entre 200 e 1.000 ng/dL, deve-se realizar o teste de estímulo com ACTH sintético (Cortrosina): na HAC-NC, o valor pós-estímulo ultrapassa 1.000 a 1.500 ng/dL;\n\n3. Outros Marcadores:\n   - Testosterona total: deve ser baixa ou levemente aumentada, mas sempre na faixa pré-puberal ou puberal precoce feminina;\n   - Androstenediona: discreta elevação proporcional ao DHEA-S.',
    comentariosAlternativas: {
      A: 'Correta. DHEA-S discretamente elevado compatível com P2 e 17-OHP normal (< 200 ng/dL) confirmam a adrenarca precoce isolada e excluem a HAC-NC.',
      B: 'Incorreta. Níveis de 17-OHP > 10.000 ng/dL correspondem à forma clássica perdedora de sal diagnosticada no período neonatal.',
      C: 'Incorreta. LH e estradiol elevados caracterizariam puberdade precoce central em estágio avançado com telarca presente.',
      D: 'Incorreta. Esse perfil corresponde a distúrbios graves de tireoide e paratireoide, sem relação com adrenarca precoce.',
    },
  },
  {
    id: 'ped-pub-057',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Adrenarca Precoce e Associações Metabólicas a Longo Prazo: Risco de SOP',
    isRevisao: false,
    enunciado:
      'Uma menina de 7 anos nascida pequena para a idade gestacional (PIG), com histórico de recuperação ponderal extremamente rápida nos primeiros dois anos de vida (catch-up growth exuberante) e atualmente com sobrepeso (IMC no escore-z +1,8), é diagnosticada com Adrenarca Precoce Isolada. Além da tranquilização familiar quanto à ausência de puberdade precoce central no momento, que aconselhamento clínico e prognóstico metabólico a longo prazo deve ser fornecido aos responsáveis?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Crianças PIG com ganho de peso acelerado e adrenarca precoce apresentam maior risco futuro de resistência à insulina, obesidade central, dislipidemia e desenvolvimento de Síndrome dos Ovários Policísticos (SOP) na adolescência, sendo indispensável a intervenção em estilo de vida com dieta saudável e atividade física regular.',
      },
      {
        id: 'B',
        texto:
          'A adrenarca precoce em crianças PIG garante proteção biológica absoluta contra qualquer distúrbio metabólico, dispensando vigilância de peso na vida adulta.',
      },
      {
        id: 'C',
        texto:
          'Indicação profilática imediata de metformina, insulina injetável e cirurgia bariátrica aos 7 anos de idade.',
      },
      {
        id: 'D',
        texto:
          'A adrenarca precoce causa necessariamente parada completa do crescimento ósseo em 6 meses, resultando em nanismo desproporcionado.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Adrenarca Precoce e suas Implicações Metabólicas Futuras:\n\n1. A Associação "PIG + Catch-up Rápido + Adrenarca Precoce":\n   - Diversos estudos epidemiológicos e fisiopatológicos demonstraram que crianças nascidas pequenas para a idade gestacional (PIG) que apresentam ganho rápido de peso/adiposidade na primeira infância sofrem alterações epigenéticas e reprogramação metabólica;\n   - Desenvolvem hiperinsulinismo compensatório precoce;\n   - A insulina atua como potente cofator estimulador da atividade da enzima 17,20-liase na adrenal e no ovário, além de reduzir a síntese hepática da proteína carreadora de hormônios sexuais (SHBG);\n   - O resultado é a ativação precoce da produção de andrógenos adrenais (adrenarca precoce);\n\n2. Riscos na Adolescência e Idade Adulta:\n   - Meninas com adrenarca precoce possuem risco 2 a 3 vezes maior de evoluir na pós-menarca com SÍNDROME DOS OVÁRIOS POLICÍSTICOS (SOP), caracterizada por hiperandrogenismo clínico/laboratorial, oligomenorreia ou anovulação crônica e ovários policísticos;\n   - Maior predisposição a síndrome metabólica: obesidade visceral, pré-diabetes/diabetes mellitus tipo 2, dislipidemia aterogênica e esteatose hepática metabólica;\n\n3. Prevenção e Acompanhamento:\n   - Não há indicação de medicação profilática na infância;\n   - A intervenção de primeira linha consiste em orientações nutricionais consistentes, controle do ganho excessivo de peso e estímulo a esportes e exercícios físicos regulares.',
    comentariosAlternativas: {
      A: 'Correta. Há forte correlação entre PIG, adrenarca precoce e risco aumentado de resistência insulínica e SOP na puberdade, demandando vigilância de hábitos de vida.',
      B: 'Incorreta. Não confere proteção, pelo contrário, eleva o risco metabólico futuro.',
      C: 'Incorreta. Cirurgia bariátrica e insulina são condutas absurdas para uma criança de 7 anos com adrenarca precoce.',
      D: 'Incorreta. A adrenarca precoce isolada não causa nanismo; a velocidade de crescimento e a estatura final são geralmente compatíveis com o alvo genético.',
    },
  },
  {
    id: 'ped-pub-058',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Diagnóstico Diferencial da Pubarca: Adrenarca Benigna vs Tumor Adrenocortical Virilizante',
    isRevisao: false,
    enunciado:
      'Um menino de 3 anos e 8 meses é levado ao pronto-atendimento com surgimento abrupto e evolução agressiva de pilosidade pubiana densa e encaracolada (P3), acne inflamatória com pústulas difusas na face e dorso, engrossamento acentuado da voz e aumento desproporcional do pênis (comprimento de 9,5 cm) nos últimos 3 meses. Ao exame físico: paciente hiperativo e irritado; pressão arterial no percentil 99 para idade e altura; pênis hipertrofiado com glande desenvolvida, porém testículos pequenos, móveis e simétricos medindo apenas 2,0 mL no orquidômetro de Prader (volume infantil); velocidade de crescimento estimada em 14 cm/ano; idade óssea de 7 anos (avanço de mais de 3 anos). Qual achado laboratorial e etiologia devem ser imediatamente investigados?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sulfato de DHEA (DHEA-S) maciçamente elevado em níveis tumorais (> 1.000 ug/dL) secundário a Carcinoma ou Adenoma Virilizante do Córtex da Suprarrenal, exigindo tomografia computadorizada ou ressonância de abdome de urgência.',
      },
      {
        id: 'B',
        texto:
          'Pico de LH elevado no teste de estímulo com GnRH secundário a puberdade precoce central idiopática.',
      },
      {
        id: 'C',
        texto:
          'Adrenarca precoce fisiológica autolimitada, devendo o paciente receber apenas orientação de higiene com sabonete neutro.',
      },
      {
        id: 'D',
        texto:
          'Deficiência primária de hormônio de crescimento com baixa estatura psicossocial.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Quadro Virilizante Agressivo: Tumor do Córtex Adrenal na Infância:\n\n1. Reconhecimento Imediato da Virilização Rápida e Grave:\n   - Menino com virilização intensa (pilosidade P3, hipertrofia peniana exuberante, acne, voz grave e hipertensão arterial) em tempo curtíssimo (< 3 a 6 meses);\n   - Pênis aumentado em contraste com TESTÍCULOS INFANTIS (< 4 mL): define categorizedamente fonte androgênica periférica extratesticular (adrenal ou exógena), excluindo ativação central do eixo HHG (PPC);\n   - Velocidade de crescimento extrema (14 cm/ano) e avanço drástico da idade óssea (IO = 7 anos para IC = 3 anos e 8 meses);\n\n2. Tumores do Córtex da Adrenal (Adenoma / Carcinoma Adrenocortical):\n   - No Brasil (especialmente nas regiões Sul e Sudeste), a incidência de tumores adrenais pediátricos é até 15 vezes maior que no resto do mundo devido à alta prevalência da mutação fundadora p.R337H no gene supressor tumoral TP53;\n   - A manifestação clínica mais comum (> 80-90%) é justamente a síndrome de virilização precoce isolada ou associada à síndrome de Cushing;\n   - Marcador laboratorial característico: DHEA-S extremamente elevado (> 1.000 a 5.000 ug/dL), androstenediona e testosterona elevadas, frequentemente com perda do ritmo circadiano de cortisol;\n\n3. Conduta Obrigatória:\n   - Exame de imagem imediato: Tomografia Computadorizada (TC) ou Ressonância Magnética (RM) de abdome e pelve para estadiamento e identificação da massa suprarrenal;\n   - Encaminhamento oncológico/cirúrgico pediátrico urgente para ressecção cirúrgica completa.',
    comentariosAlternativas: {
      A: 'Correta. A virilização rápida com pênis grande, testículos infantis e avanço ósseo drástico é o quadro típico de tumor adrenal secretor de andrógenos.',
      B: 'Incorreta. Na PPC os testículos estariam aumentados simetricamente (>= 4 mL). Testículos infantis de 2 mL excluem PPC.',
      C: 'Incorreta. A adrenarca fisiológica não causa hipertrofia peniana de 9,5 cm, acne grave, hipertensão nem avanço ósseo de 3 anos.',
      D: 'Incorreta. O paciente está crescendo 14 cm/ano (estirão androgênico massivo) e não apresenta deficiência de GH.',
    },
  },
  {
    id: 'ped-pub-059',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Menarca Precoce Isolada e Sangramento Genital na Infância: Diagnóstico Diferencial',
    isRevisao: false,
    enunciado:
      'Uma menina de 4 anos e 6 meses é trazida ao ambulatório de Pediatria porque a mãe encontrou manchas de sangue vermelho-vivo na calcinha da criança por dois dias consecutivos. Ao exame físico: paciente em excelente estado geral; curvas de peso e estatura normais no percentil 50, com velocidade de crescimento de 5,5 cm/ano; exame das mamas rigorosamente pré-puberal (Tanner M1); pelos pubianos ausentes (Tanner P1). Diante de sangramento genital na infância sem outros caracteres sexuais secundários, qual conduta diagnóstica inicial é PRIORITÁRIA antes de se suspeitar de distúrbio neuroendócrino primário?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Inspeção ginecológica externa cuidadosa sob boa iluminação com visualização do introito vaginal para pesquisar corpo estranho, trauma genital, sinais de abuso sexual, líquen escleroso vulvar, vulvovaginite erosiva ou tumores vaginais (como o sarcoma botrioide).',
      },
      {
        id: 'B',
        texto:
          'Início imediato de análogo de GnRH de depósito em dose dobrada associado a anticoncepcional oral combinado.',
      },
      {
        id: 'C',
        texto:
          'Realização de histerectomia total de urgência com ooforectomia bilateral preventiva.',
      },
      {
        id: 'D',
        texto:
          'Teste de tolerância oral à glicose de 5 horas e biópsia renal percutânea imediata.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Abordagem do Sangramento Genital na Infância:\n\n1. Princípio Semiológico Fundamental:\n   - Sangramento genital em meninas pré-púberes SEM DESENVOLVIMENTO MAMÁRIO (M1) NÃO É MENARCA FISIOLÓGICA até que se prove o contrário;\n   - A menarca é classicamente o evento tardio da puberdade feminina, ocorrendo em estágio M4, após pelo menos 2 a 2,5 anos de estímulo estrogênico sustentado (com útero desenvolvido e endométrio proliferado);\n   - Portanto, a principal prioridade clínica é a investigação de CAUSAS LOCAIS de sangramento genital;\n\n2. Principais Causas Locais a Excluir:\n   - CORPO ESTRANHO VAGINAL (pequenos brinquedos, fragmentos de papel higiênico provocando vaginite inflamatória purulenta e sangrante);\n   - TRAUMA GENITAL / VIOLÊNCIA SEXUAL / ABUSO INFANTIL (pesquisa cuidadosa e ética de lacerações himenais, hematomas e fissuras anogenitais);\n   - VULVOVAGINITES E INFECÇÕES BACTERIANAS (ex.: Shigella, Streptococcus pyogenes);\n   - LÍQUEN ESCLEROSO VULVAR (lesão hipocrômica em "figura de 8" ao redor da vulva e ânus, com pele frágil, prurido e fissuras com pequenos sangramentos);\n   - PROLAPSO URETRAL (massa arroxeada periuretral com sangramento);\n   - TUMORES GINECOLÓGICOS RAROS: Rabdomiossarcoma embrionário de vagina/colo (Sarcoma Botrioide, que prolifera como "cachos de uva" com sangramento);\n\n3. Menarca Precoce Isolada Verdadeira:\n   - É um diagnóstico de EXCLUSÃO;\n   - Decorre habitualmente de cisto folicular ovariano autônomo transitório que produziu uma onda fugaz de estrogênio e depois involuiu, provocando sangramento por privação hormonal em útero transitoriamente estimulado.',
    comentariosAlternativas: {
      A: 'Correta. Em crianças pré-púberes sem mamas, o sangramento genital decorre quase invariavelmente de lesões locais, traumas, corpos estranhos ou infecções.',
      B: 'Incorreta. Prescrever análogos e pílulas sem diagnóstico é erro médico grave; o sangramento não é menarca puberal.',
      C: 'Incorreta. Procedimento cirúrgico mutilante e completamente contraindicado.',
      D: 'Incorreta. Exames sem qualquer correlação etiológica com sangramento genital.',
    },
  },
  {
    id: 'ped-pub-060',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Menarca Precoce Isolada por Cisto Ovariano Folicular Autônomo Transitório',
    isRevisao: false,
    enunciado:
      'Uma menina de 5 anos apresentou episódio único de sangramento vaginal avermelhado que durou 3 dias e cessou espontaneamente. O exame físico genital minucioso descartou trauma, lesões vulvares, sinais de abuso sexual e corpos estranhos. A paciente apresenta mamas M1, pelos P1 e velocidade de crescimento normal de 5,2 cm/ano. A ultrassonografia pélvica realizada logo após o término do sangramento revela útero de 3,2 cm com endométrio fino de 1,2 mm e ovário direito apresentando imagem anecoica cística unilocular de paredes finas e conteúdo límpido medindo 2,2 cm de diâmetro (compatível com cisto folicular simples), sem fluxo anômalo ao Doppler. Qual é a fisiopatologia deste evento e qual deve ser a conduta médica indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de menarca precoce isolada decorrente de cisto folicular ovariano funcionante transitório, que secretou estradiol temporariamente e sofreu involução/ruptura, provocando sangramento por privação estrogênica; a conduta é expectante com repetição da ultrassonografia pélvica em 6 a 8 semanas para documentar a resolução do cisto.',
      },
      {
        id: 'B',
        texto:
          'Ooforoplastia por laparotomia exploradora de emergência para ressecção de adenocarcinoma de ovário.',
      },
      {
        id: 'C',
        texto:
          'Bloqueio puberal imediato com análogo de GnRH por 5 anos consecutivos.',
      },
      {
        id: 'D',
        texto:
          'Tratamento com radioterapia pélvica direcionada para esclerose dos vasos uterinos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Menarca Precoce Isolada por Cisto Folicular Transitório:\n\n1. Fisiopatologia:\n   - Na infância, pequenos folículos ovarianos podem, ocasionalmente, crescer de forma autônoma (independentemente de gonadotrofinas) até atingirem dimensões císticas (2 a 4 cm);\n   - Esse cisto folicular autônomo passa a sintetizar e secretar uma quantidade transitória de estradiol por alguns dias ou semanas;\n   - O estrogênio promove estímulo e proliferação do endométrio uterino;\n   - Como não há suporte contínuo de LH/FSH, o cisto sofre atresia, involução ou ruptura espontânea;\n   - A queda brusca dos níveis de estrogênio circulante desencadeia a descamação do endométrio proliferado, manifestando-se clinicamente como um sangramento genital por PRIVAÇÃO HORMONAL (withdrawal bleeding), simulando uma menstruação;\n\n2. Conduta Clínica:\n   - Como o processo é autolimitado e o eixo HHG central continua silenciado (sem aceleração de crescimento ou avanço ósseo), a conduta preconizada é ESTRICTAMENTE CONSERVADORA;\n   - Deve-se repetir a ultrassonografia pélvica em 6 a 8 semanas para confirmar o desaparecimento espontâneo do cisto folicular;\n   - Não há necessidade de cirurgias ovarianas, curetagens ou medicação supressora.',
    comentariosAlternativas: {
      A: 'Correta. Cistos foliculares autônomos transitórios involuem espontaneamente; o sangramento é por privação de estrogênio e a conduta é expectante.',
      B: 'Incorreta. Cistos simples uniloculares < 3-4 cm em crianças são benignos; cirurgia agressiva lesaria a reserva ovariana da menina.',
      C: 'Incorreta. Como o eixo HHG não está ativado (o cisto é folicular periférico transitório), não há indicação de análogo de GnRH.',
      D: 'Incorreta. Radioterapia pélvica é procedimento oncológico que destruiria as gônadas e causaria esterilidade definitiva.',
    },
  },
  {
    id: 'ped-pub-061',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Diagnóstico Diferencial Global: Variantes Benignas vs Puberdade Precoce Patológica',
    isRevisao: false,
    enunciado:
      'Considere o quadro comparativo entre as seguintes condições pediátricas:\n\nI. Telarca Precoce Isolada: lactente com broto mamário M2, IO compatível com IC, VC normal, útero tubular infantil.\nII. Adrenarca Precoce Isolada: menina de 6 anos com pelos P2 e odor axilar, mamas M1, IO normal ou avanço < 1 ano, 17-OHP normal.\nIII. Puberdade Precoce Central em franca progressão: menina de 6 anos com telarca M3 e pubarca P2, VC acelerada acima do percentil 97, IO avançada em 2,5 anos, útero piriforme e LH basal > 0,6 mUI/mL.\nIV. Puberdade Precoce Periférica por HAC não clássica: menina de 5 anos com pubarca e clitoromegalia, mamas M1, IO avançada, LH basal indetectável e 17-OHP pós-estímulo > 1.500 ng/dL.\n\nCom base nas definições e condutas consagradas pela Sociedade Brasileira de Pediatria (SBP), quais assertivas recebem CONDUTA EXPECTANTE SEM MEDICAÇÃO e quais exigem TRATAMENTO FARMACOLÓGICO ESPECÍFICO?',
    alternativas: [
      {
        id: 'A',
        texto:
          'As condições I e II são variantes benignas autolimitadas e exigem conduta expectante com acompanhamento clínico; já as condições III e IV são patológicas e exigem intervenção farmacológica específica (análogo de GnRH de depósito na III e glicocorticoide na IV).',
      },
      {
        id: 'B',
        texto:
          'Todas as quatro condições devem ser tratadas de imediato com análogos de GnRH de depósito e orquiectomia profilática.',
      },
      {
        id: 'C',
        texto:
          'Nenhuma das condições exige acompanhamento médico, devendo todas as crianças receberem alta ambulatorial definitiva no primeiro atendimento.',
      },
      {
        id: 'D',
        texto:
          'As condições I e II devem ser tratadas com reposição de testosterona oral e as condições III e IV são variantes normais que não necessitam de medicação.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Quadro Comparativo Consolidado das Alterações Puberais:\n\n1. Variantes Benignas / Autolimitadas (Conduta Expectante):\n   - Telarca Precoce Isolada (I) e Adrenarca Precoce Isolada (II);\n   - Apresentam velocidade de crescimento preservada e idade óssea compatível com a idade cronológica;\n   - Conduta: NÃO exigem medicação supressora; mantêm-se em seguimento clínico ambulatorial para vigilância de possível progressão patológica;\n\n2. Puberdades Precoces Patológicas (Tratamento Farmacológico Específico):\n   - Puberdade Precoce Central (III): ativação precoce do eixo HHG com avanço ósseo e risco estatural -> Tratamento com ANÁLOGO AGONISTA DE GnRH DE DEPÓSITO (Leuprorrelina ou Triptorrelina);\n   - Puberdade Precoce Periférica por Hiperplasia Adrenal Congênita (IV): produção excessiva de andrógenos adrenais por bloqueio enzimático -> Tratamento com GLICOCORTICOIDE (Hidrocortisona oral) para suprimir a hipersecreção de ACTH e normalizar os andrógenos.',
    comentariosAlternativas: {
      A: 'Correta. Diferencia com precisão as variantes benignas de conduta expectante das formas patológicas que requerem terapia hormonal específica.',
      B: 'Incorreta. Variantes benignas não recebem medicação de alto custo e orquiectomia é contraindicada e descabida.',
      C: 'Incorreta. As variantes benignas exigem vigilância periódica e as formas patológicas causam graves sequelas sem tratamento.',
      D: 'Incorreta. Testosterona agravaria a virilização e anularia o crescimento estatural.',
    },
  },
  {
    id: 'ped-pub-062',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Tratamento da PPC com Análogos de GnRH: Mecanismo de Ação e Dessensibilização Hipofisária',
    isRevisao: false,
    enunciado:
      'Os análogos agonistas do Hormônio Liberador de Gonadotrofinas de depósito (GnRHa, como o Acetato de Leuprorrelina e a Triptorrelina) constituem o padrão-ouro no tratamento farmacológico da Puberdade Precoce Central. Qual é o mecanismo de ação farmacodinâmico que explica a eficácia desses fármacos na supressão do eixo hipotálamo-hipófise-gonadal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A administração contínua e prolongada do agonista de GnRH de depósito satura os receptores hipofisários de GnRH nos gonadotrofos, induzindo internalização, "down-regulation" e dessensibilização dos receptores, o que resulta na inibição profunda da síntese e secreção de LH e FSH e consequente supressão da produção de esteroides gonadais.',
      },
      {
        id: 'B',
        texto:
          'O fármaco atua como toxina citotóxica que promove apoptose e lise irreversível de 100% dos neurônios do hipotálamo medial basal.',
      },
      {
        id: 'C',
        texto:
          'O análogo atua exclusivamente ligando-se aos túbulos seminíferos e ao endométrio, impedindo a absorção de oxigênio pelas gônadas.',
      },
      {
        id: 'D',
        texto:
          'Estimulação perpétua dos pulsos de LH até que a hipófise esgote definitivamente sua reserva biológica de aminoácidos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Farmacodinâmica dos Agonistas de GnRH no Bloqueio Puberal:\n\n1. O "Paradoxo" do Agonista de GnRH:\n   - O GnRH fisiológico endógeno é liberado pelo hipotálamo em PULSOS INTERMITENTES (um pulso a cada 60 a 90 minutos);\n   - Os receptores de GnRH (GnRHR) na membrana dos gonadotrofos hipofisários necessitam dessa pulsatilidade para manter sua densidade e sinalização intracelular ativas;\n   - Os análogos agonistas sintéticos (Leuprorrelina, Triptorrelina, Gosserrelina) possuem modificações estruturais que lhes conferem afinidade muito maior pelo receptor e meia-vida biológica prolongada;\n\n2. Etapas do Efeito Farmacológico:\n   - Efeito Inicial (Flare-up): Nas primeiras 24 a 48 horas após a injeção inicial, o agonista estimula os receptores, provocando uma liberação transitória de LH e FSH;\n   - Efeito Sustentado (Down-regulation / Dessensibilização): A presença CONTÍNUA e NÃO PULSÁTIL do agonista nos receptores hipofisários impede a sua reciclagem à membrana celular;\n   - Ocorre desacoplamento da proteína Gq, fosforilação, internalização e degradação dos receptores (down-regulation);\n   - A hipófise torna-se completamente refratária e surda a qualquer estímulo de GnRH;\n   - A transcrição e secreção das subunidades de LH e FSH cessam, alcançando níveis basais pré-puberais;\n   - Sem gonadotrofinas, os ovários param de produzir estradiol e os testículos cessam a síntese de testosterona, revertendo o estirão e o avanço ósseo.',
    comentariosAlternativas: {
      A: 'Correta. O estímulo contínuo dessensibiliza e internaliza os receptores hipofisários de GnRH, suprimindo LH e FSH de maneira reversível.',
      B: 'Incorreta. Os análogos não causam citotoxicidade ou necrose neuronal; o bloqueio é reversível.',
      C: 'Incorreta. A ação primária é nos gonadotrofos da adeno-hipófise, e não por hipóxia endometrial ou testicular.',
      D: 'Incorreta. Não há depleção de aminoácidos, mas sim dessensibilização dos receptores de membrana.',
    },
  },
  {
    id: 'ped-pub-063',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Fenômeno de Flare-up e Sangramento de Escape no Início do Uso de GnRHa',
    isRevisao: false,
    enunciado:
      'Uma menina de 6 anos com diagnóstico de Puberdade Precoce Central idiopática em estágio Tanner M3 P2 iniciou tratamento com Acetato de Leuprorrelina de depósito (3,75 mg intramuscular). Cerca de 12 dias após a primeira aplicação, a mãe liga assustada para o consultório relatando que a criança apresentou sangramento vaginal moderado em borra de café com duração de 4 dias. A paciente encontra-se sem dor abdominal e afebril. Qual é a explicação fisiopatológica para este evento e qual a orientação correta a ser fornecida à mãe?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se do fenômeno de estimulação inicial ("flare-up"), no qual o análogo agonista estimula transitoriamente a hipófise a secretar LH/FSH nas primeiras semanas, seguido de queda do estradiol que provocou sangramento por privação hormonal ("escape bleeding"); a mãe deve ser tranquilizada, pois trata-se de efeito esperado que não se repetirá nas próximas doses, mantendo-se o esquema terapêutico.',
      },
      {
        id: 'B',
        texto:
          'Houve perfuração uterina iatrogênica pela agulha intramuscular, indicando laparoscopia cirúrgica imediata.',
      },
      {
        id: 'C',
        texto:
          'O fármaco transformou a puberdade em coriocarcinoma fulminante de endométrio, devendo a paciente iniciar quimioterapia.',
      },
      {
        id: 'D',
        texto:
          'O sangramento prova resistência genética total ao análogo, devendo a medicação ser suspensa definitivamente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Efeito "Flare-up" e o Sangramento de Escape no Início do GnRHa:\n\n1. Fisiopatologia do Evento:\n   - Como o próprio nome diz, os análogos de depósito são AGONISTAS do receptor de GnRH;\n   - Na primeira dose, antes que ocorra a dessensibilização e o "down-regulation" dos receptores hipofisários (que leva de 10 a 20 dias para se estabelecer plenamente), o agonista estimula vigorosamente a liberação aguda de LH e FSH;\n   - Esse surto hormonal estimula os ovários a sintetizarem um pico transitório de estradiol ("flare-up");\n   - Conforme o bloqueio se consolida nas semanas seguintes, os níveis de estradiol despencam para a faixa pré-puberal;\n   - O endométrio que havia sido sensibilizado previamente descama abruptamente devido a essa queda estrogênica, manifestando-se clinicamente como um sangramento de escape ("escape bleeding" ou "withdrawal bleeding") entre 1 a 3 semanas após a primeira injeção;\n\n2. Conduta Clínica:\n   - Trata-se de um evento fisiológico esperado, benigno e autolimitado;\n   - A conduta consiste em ORIENTAR E TRANQUILIZAR a família (idealmente a família já deve ser advertida sobre essa possibilidade no momento da prescrição da primeira dose);\n   - Não há necessidade de suspender a medicação, nem de realizar exames invasivos;\n   - A partir da segunda aplicação, com os receptores já totalmente dessensibilizados, novos episódios de sangramento não voltam a ocorrer.',
    comentariosAlternativas: {
      A: 'Correta. O flare-up inicial eleva transitoriamente o estradiol seguido de queda abrupta que descama o endométrio, sendo efeito autolimitado e esperado.',
      B: 'Incorreta. A injeção é intramuscular glútea ou deltoide e não atinge a cavidade pélvica.',
      C: 'Incorreta. O GnRHa não é oncogênico nem causa adenocarcinoma ou coriocarcinoma.',
      D: 'Incorreta. Não denota resistência; ao contrário, confirma que o endométrio respondeu à queda hormonal do bloqueio.',
    },
  },
  {
    id: 'ped-pub-064',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Indicações Formais de Tratamento da PPC com Análogos de GnRH de Depósito',
    isRevisao: false,
    enunciado:
      'Nem toda criança com início puberal precoce necessita obrigatoriamente de bloqueio com análogo de GnRH de depósito. De acordo com o Protocolo Clínico e Diretrizes Terapêuticas (PCDT) do Ministério da Saúde e os consensos internacionais de Endocrinologia Pediátrica, quais são as indicações formais primárias para instituir o tratamento com GnRHa em crianças com Puberdade Precoce Central?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Progressão clínica rápida da puberdade associada a avanço significativo da idade óssea (relação IO/IC desproporcional) com perda prevista da estatura adulta final em relação ao canal genético familiar, e/ou impacto psicossocial e comportamental relevante decorrente da precocidade corporal e menarca precoce.',
      },
      {
        id: 'B',
        texto:
          'Presença exclusiva de pelos pubianos sem broto mamário em crianças maiores de 10 anos.',
      },
      {
        id: 'C',
        texto:
          'Estatura prevista na idade adulta acima do percentil 97 em relação à altura alvo dos pais.',
      },
      {
        id: 'D',
        texto:
          'Desejo exclusivo dos pais de que a filha alcance mais de 1,90 metro de altura para jogar basquete profissional.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Indicações Formais de Tratamento da Puberdade Precoce Central (PCDT / Consensos Internacionais):\n\n1. Preservação do Potencial de Estatura Adulta Final:\n   - O principal objetivo biológico do bloqueio com GnRHa é evitar a perda de altura adulta provocada pela fusão prematura das epífises ósseas induzida pelos esteroides sexuais (estradiol);\n   - Critérios objetivos:\n     a) Avanço acentuado da idade óssea: IO avançada em mais de 1 a 2 anos em relação à idade cronológica;\n     b) Velocidade de crescimento acelerada para a idade (> percentil 97);\n     c) Previsão de estatura adulta final (calculada por métodos radiológicos de Bayley-Pinneau) significativamente inferior ao canal familiar (alvo genético) ou < 150 cm em meninas / < 160 cm em meninos;\n\n2. Prevenção do Desajuste Psicossocial e Comportamental:\n   - Crianças muito jovens (< 7 a 8 anos) não possuem maturidade emocional para lidar com modificações corporais de adultos, menarca precoce, assédio de pares e sexualização precoce;\n\n3. Puberdade de Início Muito Precoce (< 6 anos):\n   - Meninas com início antes dos 6 anos têm evolução quase sempre rápida e perda estatural substancial se não tratadas;\n   - Em contrapartida, formas lentamente progressivas ou que iniciam após os 7 a 8 anos sem prejuízo estatural podem ser apenas acompanhadas clinicamente.',
    comentariosAlternativas: {
      A: 'Correta. As indicações formais baseiam-se na perda comprovada do prognóstico estatural por avanço ósseo e no desajuste psicossocial.',
      B: 'Incorreta. Pelos pubianos sem mamas correspondem à adrenarca e meninas > 10 anos já estão na idade normal da puberdade.',
      C: 'Incorreta. Se a estatura prevista está acima da média e sem perda do canal familiar, não há indicação de bloqueio.',
      D: 'Incorreta. Motivações esportivas ou estéticas familiares sem indicação médica violam os princípios éticos da terapia medicamentosa.',
    },
  },
  {
    id: 'ped-pub-065',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Puberdade Precoce Central Lentamente Progressiva vs Rapidamente Progressiva',
    isRevisao: false,
    enunciado:
      'Uma menina de 7 anos e 8 meses de idade é trazida à consulta com desenvolvimento mamário bilateral discreto (Tanner M2). A velocidade de crescimento calculada nos últimos 12 meses é de 5,4 cm/ano (rigorosamente normal no percentil 50). A radiografia de punho esquerdo revela idade óssea de 7 anos e 9 meses (perfeitamente coincidente com a idade cronológica). A ultrassonografia pélvica mostra útero de 2,8 cm com volume de 1,6 cm³ e ovários de aspecto pré-puberal. A previsão de estatura adulta pelo método de Bayley-Pinneau situa-se no centro do canal alvo familiar (165 cm). Diante deste quadro de PUBERDADE PRECOCE CENTRAL LENTAMENTE PROGRESSIVA (ou não progressiva), qual conduta médica é a mais prudente e baseada em evidências?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Não iniciar análogo de GnRH de depósito neste momento; manter acompanhamento clínico ambulatorial trimestral a semestral com monitorização da velocidade de crescimento, estadiamento puberal e repetição da idade óssea a cada 6 a 12 meses.',
      },
      {
        id: 'B',
        texto:
          'Iniciar imediatamente Leuprorrelina de depósito na dose de 11,25 mg associada a hormônio de crescimento recombinante diário.',
      },
      {
        id: 'C',
        texto:
          'Indicação de ooforectomia bilateral e adrenalectomia química com mitotano.',
      },
      {
        id: 'D',
        texto:
          'Dar alta médica definitiva sem agendamento de retorno, pois o broto mamário nunca mais se modificará.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo da Puberdade Precoce Central Lentamente Progressiva:\n\n1. Compreensão do Conceito Clínico:\n   - Cerca de 20 a 30% das crianças com diagnóstico de PPC (especialmente aquelas que iniciam caracteres entre 7 e 8 anos) apresentam uma FORMA LENTAMENTE PROGRESSIVA ou até mesmo intermitente;\n   - Nestas crianças, o eixo HHG apresenta uma ativação discreta e indolente;\n   - A velocidade de crescimento mantém-se dentro da faixa normal pré-puberal (5 a 6 cm/ano);\n   - A idade óssea avança pari passu com a idade cronológica (ΔIO/ΔIC próximo de 1,0);\n   - O prognóstico de estatura adulta final permanece totalmente preservado e compatível com a altura-alvo dos pais;\n\n2. Conduta Baseada em Evidências:\n   - Não há benefício comprovado em tratar formas lentamente progressivas com análogos de GnRH de depósito (a medicação não aumentará a altura final da criança e trará custos e desconforto desnecessários);\n   - A CONDUTA CORRETA É ACOMPANHAR CLINICAMENTE:\n     - Avaliações clínicas a cada 3 a 6 meses para medir altura com estadiômetro de precisão e palpar caracteres sexuais;\n     - Radiografia de idade óssea seriada a cada 6 a 12 meses;\n   - Se, em algum momento do seguimento, houver viragem clínica (aceleração da velocidade de crescimento, avanço súbito da idade óssea ou rápida progressão para M3/M4), o tratamento com GnRHa deve ser prontamente reavaliado e instituído.',
    comentariosAlternativas: {
      A: 'Correta. Na ausência de avanço ósseo e com velocidade de crescimento normal, o acompanhamento clínico periódico é a conduta de escolha.',
      B: 'Incorreta. Prescrever GnRHa e GH sem indicação gera custos e potenciais riscos sem nenhum ganho estatural.',
      C: 'Incorreta. Cirurgias mutilantes são totalmente inapropriadas para variantes benignas/indolentes.',
      D: 'Incorreta. A criança não deve receber alta, pois uma forma lenta pode acelerar e demandar tratamento posteriormente.',
    },
  },
  {
    id: 'ped-pub-066',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Monitorização Clínica e Metas Terapêuticas durante o Tratamento com GnRHa',
    isRevisao: false,
    enunciado:
      'Uma menina de 7 anos com Puberdade Precoce Central encontra-se em uso regular de Acetato de Leuprorrelina de depósito intramuscular há 9 meses. Quais parâmetros clínicos observados na consulta de seguimento indicam excelente eficácia terapêutica e BLOQUEIO CLÍNICO SATISFATÓRIO do eixo hipotálamo-hipófise-gonadal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Desaceleração da velocidade de crescimento para valores pré-puberais normais (4 a 6 cm/ano), regressão ou estabilização do volume do tecido mamário e ausência de episódios de sangramento vaginal.',
      },
      {
        id: 'B',
        texto:
          'Velocidade de crescimento acelerando para 14 cm/ano, aumento do tamanho mamário de M3 para M4 e menarca abundante.',
      },
      {
        id: 'C',
        texto:
          'Perda de peso de 10 kg em 1 mês, hipotensão postural severa e calvície completa.',
      },
      {
        id: 'D',
        texto:
          'Avanço de 3 anos na idade óssea a cada 6 meses de uso da injeção.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Parâmetros Clínicos de Bloqueio Adequado no Tratamento da PPC com GnRHa:\n\n1. Velocidade de Crescimento (O Parâmetro Mais Sensível):\n   - O estirão puberal patológico cessa;\n   - A velocidade de crescimento DESACELERA de valores estirados (> 9 a 12 cm/ano) para valores pré-puberais fisiológicos (tipicamente entre 4,0 e 6,0 cm/ano);\n   - Se a velocidade de crescimento mantiver-se superior a 6 a 7 cm/ano, deve-se suspeitar de bloqueio incompleto;\n\n2. Caracteres Sexuais Secundários:\n   - Mamas: estabilização do estadiamento de Tanner ou comumente regressão parcial (o tecido mamário torna-se mais frouxo, menos tenso e menor à palpação devido à retirada do estrogênio);\n   - Pelos pubianos: podem persistir inalterados ou progredir discretamente, pois dependem dos andrógenos adrenais (adrenarca), que NÃO são bloqueados pelo análogo de GnRH;\n   - Sangramento vaginal: ausência completa de novos sangramentos genitais;\n\n3. Maturação Óssea:\n   - Desaceleração acentuada do ritmo de avanço da idade óssea (relação ΔIO/ΔIC < 1,0), permitindo que a idade cronológica "alcance" a idade óssea e preserve o potencial de crescimento estatural.',
    comentariosAlternativas: {
      A: 'Correta. A desaceleração da velocidade de crescimento para 4-6 cm/ano e a estabilização/regressão mamária confirmam o bloqueio clínico efetivo.',
      B: 'Incorreta. Este padrão indica falha catastrófica de bloqueio com progressão franca da puberdade precoce.',
      C: 'Incorreta. Perda de peso grave e hipotensão sugerem desnutrição ou crise adrenal, não bloqueio puberal esperado.',
      D: 'Incorreta. Avanço ósseo acelerado denota escape puberal e perda grave de estatura.',
    },
  },
  {
    id: 'ped-pub-067',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Monitorização Laboratorial do Bloqueio: Teste de GnRH e Critérios de Supressão',
    isRevisao: false,
    enunciado:
      'Para avaliar laboratorialmente se o bloqueio do eixo hipotálamo-hipófise-gonadal está plenamente eficaz em uma criança em tratamento de Puberdade Precoce Central com análogo de GnRH de depósito, qual critério laboratorial define SUPRESSÃO GONADOTRÓFICA COMPLETA?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Pico de LH inferior a 2,0 a 3,0 mUI/mL após teste de estímulo com GnRH sintético (ou dosagem de LH basal ultrassensível inferior a 0,2 a 0,3 mUI/mL), associado a estradiol sérico em níveis pré-puberais (< 10 a 15 pg/mL) na menina.',
      },
      {
        id: 'B',
        texto:
          'Pico de LH acima de 35 mUI/mL após estímulo com estradiol superior a 400 pg/mL.',
      },
      {
        id: 'C',
        texto:
          'Glicemia de jejum acima de 300 mg/dL com cetonúria maciça.',
      },
      {
        id: 'D',
        texto:
          'Ausência completa de hemoglobina no sangue periférico e contagem de plaquetas zerada.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Critérios Laboratoriais de Bloqueio Adequado com GnRHa:\n\n1. Hormônio Luteinizante (LH):\n   - É o marcador hormonal de excelência para monitorar a supressão hipofisária;\n   - Padrão-Ouro: TESTE DE ESTÍMULO COM GnRH (ou avaliação do LH coletado 30 a 120 minutos após a aplicação do próprio análogo de depósito);\n   - Critério de Bloqueio: Pico de LH < 2,0 a 3,0 mUI/mL (por imunoensaio quimioluminescente ou ICMA);\n   - LH Basal Ultrassensível: Níveis basais < 0,2 a 0,3 mUI/mL possuem excelente valor preditivo de bom bloqueio, dispensando novos testes de estímulo em pacientes clinicamente estáveis;\n\n2. Esteroides Gonadais:\n   - Meninas: Estradiol sérico em níveis pré-puberais indetectáveis ou muito baixos (< 10 a 15 pg/mL);\n   - Meninos: Testosterona total em níveis pré-puberais (< 20 a 30 ng/dL);\n\n3. Importância da Correlação Clínico-Laboratorial:\n   - Se a clínica estiver perfeita (velocidade de crescimento normalizada de 4 a 6 cm/ano e mamas estáveis), coletas laboratoriais invasivas excessivas podem ser espaçadas;\n   - A avaliação laboratorial é imperativa caso a velocidade de crescimento volte a acelerar ou surjam novos sinais puberais.',
    comentariosAlternativas: {
      A: 'Correta. Pico de LH < 2-3 mUI/mL pós-GnRH e estradiol pré-puberal confirmam a supressão gonadotrófica completa.',
      B: 'Incorreta. Pico de LH de 35 mUI/mL demonstra eixo totalmente desinibido e ativo, indicando falha terapêutica.',
      C: 'Incorreta. Este é o perfil de cetoacidose diabética, sem qualquer relação com a monitorização puberal.',
      D: 'Incorreta. Descreve aplasia medular grave incompatível com a avaliação hormonal.',
    },
  },
  {
    id: 'ped-pub-068',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Falha Terapêutica e Escape do Bloqueio com GnRHa: Abordagem e Ajuste Posológico',
    isRevisao: false,
    enunciado:
      'Uma menina de 6 anos com PPC em uso de Acetato de Leuprorrelina 3,75 mg IM a cada 28 dias há 8 meses comparece à consulta. O pediatra constata que a velocidade de crescimento acelerou para 9,5 cm/ano nos últimos meses, as mamas aumentaram de tamanho e a paciente apresentou um episódio de sangramento vaginal recente. A dosagem de LH coletada no dia 28 (imediatamente antes da próxima injeção) encontra-se em 4,8 mUI/mL e o estradiol em 38 pg/mL, evidenciando "escape" do bloqueio hormonal no final do intervalo posológico. Após confirmar que a técnica de aplicação e o armazenamento da medicação de alto custo foram rigorosamente corretos, qual conduta farmacológica é indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Encurtar o intervalo de aplicação da Leuprorrelina de 28 para 21 a 24 dias, ou aumentar a dose do fármaco (por exemplo, para 7,5 mg IM), a fim de restabelecer a supressão contínua e eficaz do eixo.',
      },
      {
        id: 'B',
        texto:
          'Suspender definitivamente o análogo de GnRH e prescrever estriol oral de uso contínuo.',
      },
      {
        id: 'C',
        texto:
          'Encaminhar para histerectomia radical de urgência com colpectomia.',
      },
      {
        id: 'D',
        texto:
          'Manter a mesma conduta sem alterações e informar que o sangramento é normal em todas as crianças em crescimento.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo do Escape do Bloqueio no Tratamento com GnRHa:\n\n1. Causas Comuns de Escape Terapêutico:\n   - Aplicação incorreta (ex.: injeção subcutânea em vez de intramuscular profunda quando exigido pelo fabricante);\n   - Perda da estabilidade do fármaco (falha na refrigeração e na cadeia de frio da medicação de alto custo antes do preparo);\n   - Metabolismo acelerado do fármaco na criança, levando à queda dos níveis séricos terapêuticos antes de completar os 28 dias do ciclo;\n\n2. Sinais de Escape do Bloqueio:\n   - Reaceleração da velocidade de crescimento (> 6-7 cm/ano);\n   - Reaparecimento de sangramento genital ou progressão mamária;\n   - Elevação do LH basal (> 0,3-0,6 mUI/mL) ou estradiol (> 20 pg/mL) no dia previsto para a nova injeção;\n\n3. Conduta de Ajuste Posológico (Recomendação dos Consensos):\n   - Primeira medida: ENCURTAR O INTERVALO entre as doses (aplicar a cada 21, 24 ou 25 dias em vez de 28 dias);\n   - Segunda medida: AUMENTAR A DOSE do fármaco (aumentar de 3,75 mg para 7,5 mg ou prescrever doses ajustadas por peso/superfície corporal, como 100 a 150 mcg/kg);\n   - Com essas estratégias, mais de 95% dos pacientes voltam a alcançar o bloqueio hormonal clínico e laboratorial completo.',
    comentariosAlternativas: {
      A: 'Correta. Encurtar o intervalo entre as aplicações ou aumentar a dose de GnRHa restaura a dessensibilização dos receptores e bloqueia o escape.',
      B: 'Incorreta. Prescrever estriol aumentaria ainda mais os níveis estrogênicos e aceleraria o fechamento epifisário.',
      C: 'Incorreta. Procedimento cirúrgico mutilante e completamente proscrito.',
      D: 'Incorreta. Sangramento e reaceleração do crescimento comprovam falha de tratamento e demandam ajuste terapêutico ativo.',
    },
  },
  {
    id: 'ped-pub-069',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Evolução da Idade Óssea e Projeção Estatual durante o Tratamento com GnRHa',
    isRevisao: false,
    enunciado:
      'Uma dúvida recorrente dos pais de crianças com puberdade precoce central em tratamento com análogos de GnRH é se a radiografia de mãos e punhos mostrará uma "redução" da idade óssea com o tempo. Qual é a correta explicação fisiológica sobre o comportamento da idade óssea durante o tratamento bem-sucedido com análogo de GnRH?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A idade óssea nunca regride numericamente; o efeito benéfico do tratamento consiste em desacelerar intensamente o ritmo de maturação esquelética (avanço de poucos meses a cada ano de vida), permitindo que a idade cronológica alcance a idade óssea e preservando as cartilagens de crescimento.',
      },
      {
        id: 'B',
        texto:
          'O análogo de GnRH dissolve as cartilagens já maduras, fazendo a idade óssea regredir exatamente 1 ano para cada mês de uso da injeção.',
      },
      {
        id: 'C',
        texto:
          'O tratamento fecha imediatamente todas as epífises ósseas no primeiro mês, garantindo que a criança pare de crescer.',
      },
      {
        id: 'D',
        texto:
          'A idade óssea passa a avançar 5 anos a cada semestre para fortalecer os ossos contra osteoporose.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Dinâmica da Maturação Óssea no Tratamento da Puberdade Precoce Central:\n\n1. Irreversibilidade da Maturação Epifisária:\n   - As alterações de maturação esquelética (aparecimento de núcleos de ossificação e fusão das linhas epifisárias) são processos BIOLOGICAMENTE IRREVERSÍVEIS;\n   - Um osso com idade óssea de 10 anos jamais "rejuvenescerá" radiologicamente para 7 anos;\n\n2. O Objetivo Terapêutico Real: O "Congelamento" do Avanço Ósseo:\n   - Antes do tratamento, a relação entre o avanço da idade óssea e a idade cronológica é desproporcional (ΔIO/ΔIC > 1,5 a 2,0 anos de avanço ósseo para cada 1 ano de vida cronológica);\n   - O análogo de GnRH remove o estrogênio circulante, que é o hormônio primário responsável por acelerar a senescência da placa epifisária de crescimento;\n   - Com o bloqueio estrogênico, o avanço da idade óssea DESACELERA drasticamente, atingindo uma relação ΔIO/ΔIC < 0,5 a 0,8 (a idade óssea avança, por exemplo, apenas 3 a 6 meses enquanto a criança envelhece 12 meses cronológicos);\n   - Desta forma, a idade cronológica "alcança" a idade óssea, o período total de crescimento linear é estendido e o ganho de estatura adulta final é substancialmente otimizado.',
    comentariosAlternativas: {
      A: 'Correta. A idade óssea não regride, mas desacelera seu ritmo de avanço, permitindo que a idade cronológica se aproxime da esquelética.',
      B: 'Incorreta. Fármacos não dissolvem ossos nem fazem a idade esquelética regredir.',
      C: 'Incorreta. O objetivo é justamente evitar o fechamento precoce das cartilagens de crescimento.',
      D: 'Incorreta. O avanço acelerado causaria parada precoce de crescimento e baixa estatura grave.',
    },
  },
  {
    id: 'ped-pub-070',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Critérios e Momento de Suspensão do Tratamento com GnRHa',
    isRevisao: false,
    enunciado:
      'Uma paciente do sexo feminino com Puberdade Precoce Central vem sendo tratada com Acetato de Leuprorrelina de depósito desde os 6 anos de idade, com excelente adesão e controle hormonal. Atualmente, a paciente completou 10 anos e 6 meses de idade cronológica. A estatura atual encontra-se adequada no canal familiar (148 cm) e a radiografia de mãos e punhos revela IDADE ÓSSEA DE 12 ANOS. De acordo com os consensos internacionais e diretrizes da SBP, qual é o momento oportuno e a conduta preconizada quanto ao tratamento medicamentoso?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Indicação de suspensão do tratamento com o análogo de GnRH, pois a idade óssea atingiu cerca de 12 anos (momento fisiológico ideal para meninas), permitindo o retorno da secreção de esteroides sexuais para a ocorrência do estirão puberal final e da menarca em momento apropriado.',
      },
      {
        id: 'B',
        texto:
          'Manter o análogo de GnRH ininterruptamente até os 25 anos de idade para garantir que a paciente cresça mais de 2 metros de altura.',
      },
      {
        id: 'C',
        texto:
          'Suspender o análogo e prescrever quimioterapia com ciclofosfamida para evitar que a menstruação ocorra na adolescência.',
      },
      {
        id: 'D',
        texto:
          'Manter o análogo e associar anastrozol em dose alta para impedir qualquer estirão puberal restante.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Critérios para Suspensão do Tratamento com GnRHa na Puberdade Precoce:\n\n1. Marco Cronológico e Esquelético:\n   - O momento de descontinuação do GnRHa é baseado primordialmente na IDADE ÓSSEA da criança e na recuperação da sua estatura-alvo;\n   - Meninas: A suspensão é recomendada quando a idade óssea atinge aproximadamente 12,0 a 12,5 anos;\n   - Meninos: A suspensão é recomendada quando a idade óssea atinge aproximadamente 13,0 a 13,5 anos;\n\n2. Por que Não Manter o Tratamento Além Deste Ponto?\n   - Nas meninas, a cartilagem de crescimento necessita dos esteroides sexuais para deflagrar o estirão puberal final (que adiciona em média 4 a 7 cm à altura final);\n   - Manter o bloqueio com análogo de GnRH além de 12 a 12,5 anos de idade óssea provoca desaceleração excessiva do crescimento residual, resultando em estagnação estatural sem ganho de altura final adicional;\n   - Além disso, o hipoestrogenismo prolongado desnecessário pode interferir na aquisição do pico de massa óssea e retardar o amadurecimento psicossocial da adolescente;\n\n3. Evolução Pós-Suspensão:\n   - O eixo hipotálamo-hipófise-gonadal reativa-se espontaneamente;\n   - A menarca ocorre de forma fisiológica tipicamente entre 12 e 18 meses após a última dose do análogo.',
    comentariosAlternativas: {
      A: 'Correta. Atingir idade óssea de 12 anos em meninas é o critério clássico de suspensão para permitir o estirão final e a menarca natural.',
      B: 'Incorreta. Manter o bloqueio após a idade puberal normal causa parada de crescimento, osteopenia e retardo de maturação sexual.',
      C: 'Incorreta. Quimioterapia citotóxica é um contrassenso absurdo que induziria falência ovariana prematura.',
      D: 'Incorreta. O objetivo após os 12 anos de idade óssea é justamente permitir o estirão puberal final da menina.',
    },
  },
  {
    id: 'ped-pub-071',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Reversibilidade do Eixo HHG e Eventos Pós-Suspensão do Análogo de GnRH',
    isRevisao: false,
    enunciado:
      'Durante a consulta de alta do tratamento medicamentoso com análogo de GnRH em uma menina de 11 anos (cuja idade óssea atingiu 12 anos e meio), os pais expressam profunda preocupação sobre o futuro reprodutivo da filha, questionando se as injeções de depósito podem causar infertilidade definitiva ou impedir a menstruação normal. Com base nos estudos de seguimento a longo prazo em Endocrinologia Pediátrica, qual é a orientação fidedigna a ser fornecida à família?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O bloqueio é 100% reversível: a reativação espontânea do eixo hipotálamo-hipófise-gonadal ocorre tipicamente dentro de 6 a 12 meses após a última injeção, a menarca fisiológica costuma surgir entre 12 e 18 meses após o término do tratamento, e a taxa de fertilidade na vida adulta é idêntica à da população geral.',
      },
      {
        id: 'B',
        texto:
          'O análogo induz menopausa cirúrgica irreversível, exigindo fertilização in vitro com óvulos doados para engravidar.',
      },
      {
        id: 'C',
        texto:
          'A menstruação nunca mais ocorrerá espontaneamente, sendo obrigatório o uso perpétuo de pílula anticoncepcional.',
      },
      {
        id: 'D',
        texto:
          'O medicamento transforma os ovários em testículos funcionantes produtores de esperma após 1 ano da suspensão.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Prognóstico Reprodutivo e Reversibilidade Pós-Tratamento com GnRHa:\n\n1. Reversibilidade Plena do Eixo HHG:\n   - Múltiplos estudos de coorte prospectivos acompanhando crianças tratadas com análogos de GnRH até a vida adulta comprovaram que a supressão hipofisária é TOTALMENTE REVERSÍVEL;\n   - Após o término do efeito de depósito da última dose (cerca de 4 a 8 semanas pós-aplicação), a densidade de receptores de GnRH na membrana dos gonadotrofos hipofisários é restaurada;\n   - A secreção pulsátil fisiológica de LH e FSH é prontamente restabelecida em um prazo médio de 6 a 12 meses;\n\n2. Cronologia da Menarca Pós-Tratamento:\n   - A primeira menstruação (menarca) ocorre de maneira espontânea na vasta maioria das pacientes em um intervalo médio de 12 a 18 meses após a suspensão da medicação;\n   - Os ciclos menstruais subsequentes tornam-se ovulatórios e regulares com prevalência idêntica à de mulheres que nunca usaram análogos;\n\n3. Fertilidade e Desfechos Gestacionais Futuros:\n   - Não há aumento de taxas de infertilidade, abortamentos espontâneos ou malformações congênitas nos filhos de mulheres que usaram GnRHa na infância;\n   - Portanto, a tranquilização familiar quanto à fertilidade futura é categórica e respaldada pelo mais alto nível de evidência científica.',
    comentariosAlternativas: {
      A: 'Correta. O efeito é completamente reversível, a menarca ocorre em 12-18 meses e a fertilidade adulta futura é plenamente preservada.',
      B: 'Incorreta. O GnRHa não destrói a reserva folicular nem causa menopausa precoce.',
      C: 'Incorreta. O ciclo menstrual e as ovulações retornam espontaneamente sem necessidade de hormônios exógenos.',
      D: 'Incorreta. Não existe transdiferenciação gonadal de ovários em testículos.',
    },
  },
  {
    id: 'ped-pub-072',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Efeitos do GnRHa sobre o Índice de Massa Corporal (IMC) e Densidade Mineral Óssea (DMO)',
    isRevisao: false,
    enunciado:
      'A respeito dos efeitos metabólicos, composição corporal e densidade mineral óssea durante e após o tratamento prolongado com análogos de GnRH de depósito em crianças com Puberdade Precoce Central, assinale a afirmativa cientificamente CORRETA:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Durante o bloqueio com GnRHa pode ocorrer discreto aumento no escore-z do IMC e uma desaceleração transitória no ganho da densidade mineral óssea; contudo, após a suspensão do tratamento e a maturação puberal final, a densidade mineral óssea se normaliza e a adiposidade retorna aos níveis basais pré-tratamento.',
      },
      {
        id: 'B',
        texto:
          'O análogo de GnRH causa osteoporose severa definitiva com perda de 90% da massa óssea e fraturas patológicas de bacia em todas as crianças tratadas.',
      },
      {
        id: 'C',
        texto:
          'O tratamento com GnRHa induz caquexia extrema com perda obrigatória de 50% da massa muscular em 3 meses.',
      },
      {
        id: 'D',
        texto:
          'A densidade mineral óssea quadruplica durante o tratamento, tornando os ossos de vidro imunes a qualquer trauma mecânico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Efeitos do GnRHa sobre o IMC e a Massa Óssea:\n\n1. Efeito sobre o Índice de Massa Corporal (IMC):\n   - Crianças com PPC frequentemente já apresentam um IMC mais elevado no início do diagnóstico;\n   - Durante o tratamento com análogo de GnRH, devido à supressão estrogênica e à redução do gasto energético associado ao estirão, pode haver uma tendência a discreto ganho ponderal ou discreto incremento no escore-z do IMC;\n   - Recomenda-se orientação de hábitos saudáveis e prática esportiva regular durante o tratamento;\n   - Estudos de longo prazo mostram que, após a suspensão da medicação e conclusão da puberdade, o IMC tende a estabilizar nos mesmos patamares da população controle;\n\n2. Efeito sobre a Densidade Mineral Óssea (DMO):\n   - O estrogênio é o principal hormônio mineralizador da massa óssea na puberdade;\n   - Com a supressão estrogênica temporária imposta pelo análogo, a taxa de acréscimo da densidade mineral óssea desacelera temporariamente (a criança ganha menos osso mineralizado durante os anos de bloqueio quando comparada a adolescentes em puberdade plena);\n   - No entanto, estudos densitométricos longitudinais de longo prazo evidenciam que, logo após a retirada do bloqueio e a retomada fisiológica dos esteroides sexuais, ocorre um "catch-up" na mineralização esquelética;\n   - Na vida adulta jovem, a densidade mineral óssea e o pico de massa óssea dessas pacientes são absolutamente normais e comparáveis aos de controles saudáveis.',
    comentariosAlternativas: {
      A: 'Correta. Há redução transitória no ritmo de acréscimo de DMO e discreto ganho ponderal, ambos normalizados a longo prazo após o término do tratamento.',
      B: 'Incorreta. Não induz osteoporose grave nem fraturas patológicas generalizadas.',
      C: 'Incorreta. O análogo não causa caquexia ou atrofia muscular maciça.',
      D: 'Incorreta. Não quadruplica a densidade óssea nem imuniza contra traumas.',
    },
  },
  {
    id: 'ped-pub-073',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Formulações Terapêuticas de GnRHa: Posologia Mensal vs Trimestral e Adesão',
    isRevisao: false,
    enunciado:
      'Na prática clínica do tratamento da Puberdade Precoce Central, além da formulação intramuscular mensal convencional de Acetato de Leuprorrelina (3,75 mg ou 7,5 mg a cada 28 dias), encontram-se disponíveis formulações de depósito de liberação prolongada trimestral (11,25 mg IM a cada 84-90 dias ou 3 meses). Qual é a principal vantagem clínica e a evidência científica do emprego da formulação trimestral em crianças com PPC?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Proporciona eficácia hormonal e supressão da velocidade de crescimento rigorosamente equivalentes à formulação mensal, conferindo maior conforto à criança, redução expressiva do número de injeções dolorosas anuais (de 12 para 4 aplicações/ano) e melhora significativa da adesão terapêutica.',
      },
      {
        id: 'B',
        texto:
          'A formulação trimestral cura a puberdade precoce com uma única injeção na vida, dispensando acompanhamento pediátrico.',
      },
      {
        id: 'C',
        texto:
          'A injeção trimestral é exclusivamente oral, devendo ser mastigada em jejum.',
      },
      {
        id: 'D',
        texto:
          'A formulação trimestral causa necessariamente perda permanente da visão e surdez neurossensorial bilateral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Formulações de Depósito de GnRHa: Mensal vs Trimestral:\n\n1. Aspectos Farmacotécnicos:\n   - As formulações de liberação prolongada contêm microesferas de polímero biodegradável (ácido poli-láctico-co-glicólico) que liberam o fármaco de maneira lenta, estável e contínua no tecido muscular profundo;\n   - A formulação trimestral (11,25 mg) possui maior carga polimérica, garantindo concentrações séricas estáveis por 12 semanas (84 a 90 dias);\n\n2. Eficácia e Segurança Comparadas:\n   - Ensaios clínicos multicêntricos comprovaram que a formulação trimestral atinge taxas de supressão de LH (< 2-3 mUI/mL) e de esteroides gonadais idênticas às da formulação mensal de 3,75 mg;\n   - O controle da velocidade de crescimento e a preservação da estatura adulta final são plenamente comparáveis entre as duas modalidades;\n\n3. Benefícios Práticos da Formulação Trimestral:\n   - Redução dramática do sofrimento emocional e da dor física associada a injeções frequentes em crianças pequenas (redução de 12-13 injeções por ano para apenas 4 injeções por ano);\n   - Maior facilidade logística para as famílias e menor taxa de esquecimento ou atraso nas doses, otimizando a adesão ao tratamento a longo prazo.',
    comentariosAlternativas: {
      A: 'Correta. A formulação trimestral tem eficácia equivalente à mensal, reduzindo o número de injeções de 12 para 4 ao ano e favorecendo a adesão.',
      B: 'Incorreta. Não cura com dose única; a criança necessita de injeções trimestrais contínuas até a idade de suspensão.',
      C: 'Incorreta. É uma injeção intramuscular e não existe sob apresentação oral (seria digerida no estômago por ser peptídeo).',
      D: 'Incorreta. O perfil de segurança é excelente e não causa déficits sensoriais.',
    },
  },
  {
    id: 'ped-pub-074',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Puberdade Precoce em Crianças Adotadas: Imigração, Nutrição e Catch-up Puberal',
    isRevisao: false,
    enunciado:
      'Uma menina de 7 anos e 2 meses, adotada internacionalmente por uma família brasileira aos 5 anos de idade vinda de região de extrema vulnerabilidade social e desnutrição crônica, é trazida para avaliação endocrinológica. Os pais adotivos relatam que, após 18 meses de ambiente estável com dieta hipercalórica e ganho rápido de peso, a menina apresentou desenvolvimento acelerado das mamas (estágio Tanner M3), surgimento de pelos pubianos e velocidade de crescimento de 10,5 cm/ano. A idade óssea revelou avanço de 2,5 anos em relação à idade cronológica estimada e o teste de estímulo com GnRH confirmou Puberdade Precoce Central com pico de LH de 16,5 mUI/mL. A ressonância magnética de crânio descartou lesões expansivas hipotalâmicas. Qual fenômeno biológico e psicossocial explica a alta incidência de PPC em crianças adotadas internacionalmente e qual a conduta indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de puberdade precoce associada à adoção/migração, deflagrada pela rápida recuperação nutricional ("catch-up puberal"), aumento substancial da leptina circulante e quebra do estresse crônico inibitório prévio; a indicação de tratamento com análogo de GnRH de depósito é formal para evitar perda severa de estatura final e permitir adaptação sociocultural da criança.',
      },
      {
        id: 'B',
        texto:
          'A condição decorre de infecção congênita por vírus influenza e deve ser tratada exclusivamente com oseltamivir oral por 5 anos.',
      },
      {
        id: 'C',
        texto:
          'A criança não deve ser tratada, devendo os pais devolver a adoção para o país de origem imediatamente.',
      },
      {
        id: 'D',
        texto:
          'O quadro é causado por excesso de vitamina C na água encanada e resolve-se com restrição hídrica absoluta.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Puberdade Precoce em Crianças Adotadas Internacionalmente:\n\n1. O Fenômeno Epidemiológico:\n   - Crianças adotadas vindas de países em desenvolvimento e que migram para lares adotivos em países com maior nível socioeconômico apresentam um risco de 10 a 20 vezes maior de desenvolver Puberdade Precoce Central em comparação à população nativa;\n\n2. Fisiopatologia Multifatorial:\n   - Recuperação Nutricional Rápida: O término do estado de desnutrição crônica e a oferta abundante de nutrientes induzem ganho acelerado de adiposidade;\n   - Aumento da Leptina: O tecido adiposo em expansão rápida produz altas concentrações de leptina, sinalizando aos neurônios hipotalâmicos de kisspeptina que há substrato energético pleno para a reprodução;\n   - Desbloqueio do Eixo HHG: O estresse severo prévio mantinha o eixo hipotalâmico silenciado; a segurança afetiva e a melhoria das condições ambientais removem o tônus inibitório do cortisol/CRH, liberando a pulsatilidade do GnRH precocemente;\n\n3. Conduta Terapêutica:\n   - A perda estatural nessas crianças costuma ser drástica devido ao avanço ósseo veloz;\n   - Além disso, a precocidade sexual impõe sofrimento emocional adicional a uma criança que já vivenciou traumas de abandono e mudança abrupta de cultura e idioma;\n   - O TRATAMENTO COM ANÁLOGO DE GnRH DE DEPÓSITO é amplamente indicado e altamente benéfico.',
    comentariosAlternativas: {
      A: 'Correta. O catch-up nutricional rápido e a sinalização por leptina ativam o eixo central prematuramente, sendo o GnRHa formalmente indicado.',
      B: 'Incorreta. Vírus influenza causa síndrome gripal respiratória e não puberdade precoce.',
      C: 'Incorreta. Conduta antiética e criminosa; a criança requer acolhimento familiar e manejo endocrinológico pediátrico.',
      D: 'Incorreta. Vitamina C não induz puberdade e restrição hídrica absoluta causaria desidratação e choque.',
    },
  },
  {
    id: 'ped-pub-075',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Caso Clínico Integrador: Investigação, Indicação pelo PCDT e Manejo Terapêutico na PPC',
    isRevisao: false,
    enunciado:
      'Uma menina de 6 anos e 8 meses é trazida pela mãe ao ambulatório de Endocrinologia Pediátrica do SUS com queixa de desenvolvimento de mamas há 8 meses e crescimento acelerado ("a mais alta da turma da escola"). Ao exame físico: peso no percentil 85, estatura acima do percentil 97 com velocidade de crescimento calculada em 11,2 cm/ano; estadiamento puberal de Tanner M3 P2 (tecido mamário bilateral de 4,0 cm com aréolas alargadas e pelos finos em grandes lábios); ausência de clitoromegalia; pele com acne leve em fronte; sem manchas hipercrômicas no corpo. Exames complementares solicitados:\n- Radiografia de mãos e punhos: idade óssea de 9 anos e 6 meses (avanço de quase 3 anos em relação à idade cronológica);\n- Teste de estímulo com GnRH sintético: pico de LH em 18,2 mUI/mL e FSH em 8,6 mUI/mL;\n- Estradiol sérico: 42 pg/mL (elevado para a idade);\n- Ultrassonografia pélvica: útero piriforme com comprimento de 4,6 cm, volume de 4,8 cm³, relação corpo/colo de 2:1 e linha endometrial de 3 mm; ovários com volume de 3,5 cm³ e múltiplos folículos de 6 a 8 mm;\n- Ressonância magnética de encéfalo e sela túrcica com contraste: normal, descartando lesões expansivas ou hamartomas (forma idiopática).\nConsiderando os critérios de elegibilidade do Protocolo Clínico e Diretrizes Terapêuticas (PCDT) do Ministério da Saúde para Puberdade Precoce Central, qual é o plano de manejo global mais adequado para esta paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Confirmar o diagnóstico de Puberdade Precoce Central Idiopática de progressão rápida e iniciar tratamento com análogo agonista de GnRH de depósito (Acetato de Leuprorrelina intramuscular mensal); orientar a família quanto ao risco de sangramento vaginal autolimitado de escape ("flare-up") nas primeiras semanas; e acompanhar a paciente a cada 3 a 6 meses com monitorização da velocidade de crescimento, estadiamento puberal e desaceleração do avanço da idade óssea até que atinja cerca de 12 anos de idade óssea.',
      },
      {
        id: 'B',
        texto:
          'Indicar cirurgia de histerectomia total com reconstrução vaginal e prescrever metformina para evitar menarca.',
      },
      {
        id: 'C',
        texto:
          'Prescrever apenas suplementação de cálcio e vitamina D e orientar retorno em 3 anos, pois a idade óssea avançada regulariza-se espontaneamente na adolescência.',
      },
      {
        id: 'D',
        texto:
          'Iniciar corticoterapia em altas doses com prednisona oral diária e contraindicar qualquer uso de análogos hormonais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Caso Clínico Integrador: Manejo Completo da Puberdade Precoce Central Idiopática:\n\n1. Confirmação Diagnóstica Inquestionável:\n   - Caracteres sexuais secundários antes dos 8 anos na menina (início aos 6 anos);\n   - Velocidade de crescimento excessiva (11,2 cm/ano);\n   - Estadiamento puberal congruente e avançado (M3 P2);\n   - Avanço dramático da idade óssea (IO = 9 anos e 6 meses para IC = 6 anos e 8 meses);\n   - Ultrassom pélvico plenamente puberal (útero > 4 cm, volume > 4 cm³, linha endometrial visível);\n   - Teste de estímulo com GnRH padrão-ouro confirmando ativação central (pico de LH = 18,2 mUI/mL > 5 mUI/mL);\n   - RM de crânio normal confirma a etiologia idiopática (causa mais comum em meninas, presente em > 80-90% dos casos);\n\n2. Indicação Terapêutica Formal (Critérios do PCDT/SUS):\n   - Menina com início precoce, progressão rápida e avanço ósseo de quase 3 anos, o que levaria à perda estimada de mais de 10 a 15 cm da estatura adulta final;\n   - Tratamento de escolha: ANÁLOGO AGONISTA DE GnRH DE DEPÓSITO (Acetato de Leuprorrelina 3,75 mg IM mensal ou Triptorrelina);\n\n3. Orientações e Seguimento Clínico:\n   - Orientação crucial à mãe sobre o efeito "flare-up" (possibilidade de sangramento vaginal em borra de café de escape nas primeiras 2 a 3 semanas após a 1ª dose), evitando pânico;\n   - Monitorização clínica a cada 3 a 6 meses: verificação do estadiômetro (velocidade de crescimento caindo para 4 a 6 cm/ano), amolecimento/regressão das mamas e ausência de novas menstruações;\n   - Radiografia de idade óssea anual documentando a frenagem do avanço esquelético;\n   - Manutenção do tratamento até que a paciente atinja aproximadamente 12 anos de idade óssea, momento no qual a medicação será suspensa para permitir o estirão final e a menarca saudável.',
    comentariosAlternativas: {
      A: 'Correta. Sintetiza a melhor prática clínica e diretrizes do PCDT do Ministério da Saúde: diagnóstico confirmado, análogo de GnRH, orientação sobre flare-up e metas de seguimento.',
      B: 'Incorreta. Procedimento cirúrgico mutilante e inadmissível.',
      C: 'Incorreta. Sem bloqueio hormonal, as epífises fecharão precocemente por volta dos 8-9 anos de idade, acarretando baixa estatura severa definitiva.',
      D: 'Incorreta. Corticoterapia é o tratamento da hiperplasia adrenal congênita periférica, não tendo indicação na puberdade precoce central idiopática.',
    },
  },
  {
    id: 'ped-pub-076',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Definição e Marcos Cronológicos da Puberdade Tardia (Atraso Puberal)',
    isRevisao: false,
    enunciado:
      'A puberdade tardia (ou atraso puberal) é definida estatisticamente como a ausência do início dos caracteres sexuais secundários em uma idade cronológica situada a mais de 2 a 2,5 desvios-padrão acima da média populacional para o respectivo sexo. De acordo com os consensos de Endocrinologia Pediátrica e da Sociedade Brasileira de Pediatria (SBP), quais critérios cronológicos e clínicos objetivos definem o atraso puberal no sexo feminino e no sexo masculino?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sexo feminino: ausência de broto mamário (estágio Tanner M1) até os 13 anos de idade cronológica OU ausência de menarca até os 15 anos (ou não ocorrida após 3 a 4 anos da telarca); Sexo masculino: ausência de aumento do volume testicular (volume < 4 mL no orquidômetro de Prader) até os 14 anos de idade cronológica.',
      },
      {
        id: 'B',
        texto:
          'Sexo feminino: ausência de pelos pubianos até os 8 anos; Sexo masculino: ausência de barba até os 11 anos.',
      },
      {
        id: 'C',
        texto:
          'Sexo feminino: ausência de menarca até os 11 anos; Sexo masculino: pênis menor que 15 cm aos 10 anos.',
      },
      {
        id: 'D',
        texto:
          'Sexo feminino e masculino: ausência de filhos biológicos gerados até os 14 anos de idade.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Definição e Critérios Diagnósticos da Puberdade Tardia:\n\n1. Marco Estatístico e Populacional:\n   - Considera-se atraso puberal quando a criança ultrapassa o percentil 97,7 (ou mais de 2 a 2,5 desvios-padrão) da idade média de início puberal da população de referência;\n\n2. Critérios Diagnósticos no Sexo Feminino:\n   - Ausência de Telarca (Broto Mamário - M1) aos 13 anos de idade cronológica (sendo 13 anos o limite superior da normalidade para o primeiro sinal de gonadarca feminina);\n   - Ausência de Menarca aos 15 anos de idade (ou ausência de menarca passados mais de 3 a 4 anos do início da telarca, mesmo que tenha surgido antes dos 13 anos);\n   - Estagnação da progressão puberal (intervalo superior a 4 a 5 anos entre a telarca e a menarca);\n\n3. Critérios Diagnósticos no Sexo Masculino:\n   - Ausência de Aumento Testicular (volume testicular inferior a 4 mL medido no orquidômetro de Prader ou comprimento testicular menor que 2,5 cm) aos 14 anos de idade cronológica;\n   - Ausência de pelos pubianos ou ausência de estirão de crescimento até os 15 anos;\n   - Estagnação puberal com duração total superior a 4 a 5 anos sem atingir o estágio adulto G5.',
    comentariosAlternativas: {
      A: 'Correta. Ausência de mamas aos 13 anos (ou menarca aos 15) na menina e ausência de testículos >= 4 mL aos 14 anos no menino definem puberdade tardia.',
      B: 'Incorreta. Pelos pubianos isolados referem-se à adrenarca e as idades citadas situam-se na faixa de puberdade precoce/normal.',
      C: 'Incorreta. Menarca aos 11 anos é precoce/normal e dimensões penianas citadas estão fora da realidade anatômica pré-puberal.',
      D: 'Incorreta. Fertilidade não é critério diagnóstico para definição cronológica de atraso puberal na infância/adolescência.',
    },
  },
  {
    id: 'ped-pub-077',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Investigação Laboratorial Inicial e Fluxograma Decisório no Atraso Puberal',
    isRevisao: false,
    enunciado:
      'Um adolescente de 14 anos e 4 meses é trazido à consulta por ausência total de sinais de puberdade (estágio de Tanner G1 P1, testículos com 2,5 mL). O médico assistente solicita a propedêutica laboratorial e radiológica de primeira linha recomendada pelas diretrizes pediátricas. Qual conjunto de exames é fundamental para diferenciar precocemente uma falência gonadal primária (hipogonadismo hipergonadotrófico) de uma falha de estímulo central/constitucional (hipogonadismo hipogonadotrófico)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Dosagem sérica basal de LH e FSH associada a esteroides sexuais (testosterona ou estradiol) e radiografia de mãos e punhos esquerdos para idade óssea; somadas à triagem de doenças crônicas (hemograma, ferritina, PCR, creatinina, TSH, T4 livre e anticorpos para doença celíaca).',
      },
      {
        id: 'B',
        texto:
          'Biópsia renal bilateral e angiografia cerebral de 4 vasos como exames iniciais obrigatórios.',
      },
      {
        id: 'C',
        texto:
          'Mielograma com aspirado de medula óssea e laparotomia exploradora profilática.',
      },
      {
        id: 'D',
        texto:
          'Dosagem exclusiva de gastrina sérica e teste de sudorese sem qualquer exame hormonal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fluxograma Diagnóstico Inicial no Atraso Puberal:\n\n1. Exames Hormonais de Primeira Linha (A Encruzilhada Diagnóstica):\n   - DOSAGEM DE LH E FSH:\n     * Se LH e FSH estão ELEVADOS: indica HIPOGONADISMO HIPERGONADOTRÓFICO (a falência é primariamente na gônada, que não produz esteroides nem inibina, perdendo o feedback negativo central);\n     * Se LH e FSH estão BAIXOS OU INDETECTÁVEIS (inapropriadamente normais para a idade cronológica): indica HIPOGONADISMO HIPOGONADOTRÓFICO (o hipotálamo/hipófise não estão disparando);\n\n2. Exame Radiológico Fundamental:\n   - RADIOGRAFIA DE MÃOS E PUNHOS ESQUERDOS PARA IDADE ÓSSEA (Método de Greulich & Pyle):\n     * Permite avaliar o grau de maturidade biológica do esqueleto e calcular o prognóstico de estatura adulta final (fundamental para o diagnóstico de Atraso Constitucional);\n\n3. Rastreio de Doenças Crônicas Ocultas (Causas de Hipogonadismo Funcional):\n   - Hemograma, VHS/PCR (doença inflamatória intestinal oculta);\n   - Creatinina, ureia e gasometria (doença renal crônica, acidose tubular renal);\n   - TSH e T4 livre (hipotireoidismo primário adquirido);\n   - Anti-transglutaminase IgA e IgA total (doença celíaca oligosintomática, clássica causadora de atraso puberal e de crescimento).',
    comentariosAlternativas: {
      A: 'Correta. As dosagens de LH, FSH, esteroides gonadais e idade óssea, somadas ao rastreio de doenças sistêmicas, compõem a propedêutica inicial correta.',
      B: 'Incorreta. Exames extremamente invasivos e sem qualquer indicação na abordagem do atraso puberal.',
      C: 'Incorreta. Procedimentos cirúrgicos e medulares sem pertinência clínica.',
      D: 'Incorreta. Gastrina e teste do suor isolados não avaliam o eixo puberal.',
    },
  },
  {
    id: 'ped-pub-078',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Atraso Constitucional do Crescimento e Puberdade (ACCP): Quadro Clínico e Padrão Familiar',
    isRevisao: false,
    enunciado:
      'Um menino de 14 anos e 3 meses é trazido pelos pais com queixa de baixa estatura em relação aos colegas da escola e ausência de puberdade. Ao exame físico: paciente saudável, sem dismorfismos; peso e estatura situam-se temporariamente abaixo do percentil 3 para a idade cronológica; genitália pré-puberal (estadiamento de Tanner G1 P1, com testículos simétricos de 3,0 mL no orquidômetro de Prader); velocidade de crescimento pré-puberal constante de 4,5 cm/ano nos últimos 2 anos. Na história pregressa, os pais relatam que o pai do adolescente apresentou crescimento tardio, estirando somente aos 16 anos de idade no ensino médio e atingindo estatura final de 1,78 m, e a mãe teve menarca aos 15 anos. Qual é a principal hipótese diagnóstica para este paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Atraso Constitucional do Crescimento e Puberdade (ACCP), que representa a variante fisiológica do desenvolvimento e a causa mais comum de atraso puberal em adolescentes do sexo masculino.',
      },
      {
        id: 'B',
        texto:
          'Insuficiência testicular primária congênita por anorquia bilateral anômala.',
      },
      {
        id: 'C',
        texto:
          'Doença de Cushing ectópica com hipercortisolismo descompensado.',
      },
      {
        id: 'D',
        texto:
          'Acromegalia juvenil associada a adenoma hipofisário secretor de somatotrofina.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Atraso Constitucional do Crescimento e Puberdade (ACCP):\n\n1. Epidemiologia e Relevância:\n   - É a causa mais frequente de atraso puberal e de queixa de baixa estatura na adolescência, respondendo por mais de 60% a 70% dos casos no sexo masculino e cerca de 30% a 40% no sexo feminino;\n   - Trata-se de uma VARIANTE DA NORMALIDADE e não de uma doença;\n\n2. História Familiar Típica (Padrão de Herança):\n   - Em mais de 70% dos casos há história familiar positiva clara de desenvolvimento puberal tardio em parentes de primeiro grau ("pai que foi o menor da turma e estirou tarde no exército/faculdade", "mãe com menarca tardia aos 15-16 anos");\n\n3. Padrão de Crescimento Linear Característico:\n   - Crescimento normal até cerca de 1 a 2 anos de idade, seguido por desaceleração fisiológica da velocidade de crescimento até estabilizar em um percentil mais baixo (paralelo e próximo ao percentil 3);\n   - Durante a infância intermediária, a velocidade de crescimento mantém-se constante e normal (4 a 5 cm/ano);\n   - Na adolescência, enquanto os colegas entram no estirão puberal (saltando para percentis superiores), o paciente com ACCP continua no ritmo pré-puberal, gerando uma defasagem visual temporária ("aparente baixa estatura");\n   - O exame físico é rigorosamente normal para um menino pré-púbere (G1 P1, testículos < 4 mL).',
    comentariosAlternativas: {
      A: 'Correta. A combinação de testículos pré-puberais aos 14 anos, velocidade de crescimento normal e história familiar de puberdade tardia caracteriza o ACCP.',
      B: 'Incorreta. Os testículos estão presentes e palpáveis na bolsa escrotal (3 mL), excluindo anorquia.',
      C: 'Incorreta. Síndrome de Cushing causaria obesidade centrípeta, estrias violáceas, fácies em lua cheia e parada do crescimento com ganho de peso.',
      D: 'Incorreta. Acromegalia causaria gigantismo e crescimento desproporcional acelerado, não atraso puberal com baixa estatura temporária.',
    },
  },
  {
    id: 'ped-pub-079',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'ACCP: Análise da Idade Óssea e Prognóstico de Estatura Adulta Final',
    isRevisao: false,
    enunciado:
      'Na avaliação do adolescente de 14 anos com suspeita de Atraso Constitucional do Crescimento e Puberdade (ACCP), a radiografia de mãos e punhos esquerdos revela IDADE ÓSSEA DE 11 ANOS E 6 MESES (atraso esquelético de quase 3 anos em relação à idade cronológica). Como deve ser interpretado esse resultado e qual é a previsão para a estatura adulta final do paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A idade óssea atrasada é compatível com a idade da altura (idade biológica), indicando que o potencial de crescimento esquelético permanece totalmente aberto; a previsão de estatura final é excelente, alcançando normalmente o canal genético familiar (altura-alvo dos pais).',
      },
      {
        id: 'B',
        texto:
          'A idade óssea de 11 anos indica fechamento irreversível das cartilagens epifisárias, confirmando baixa estatura definitiva irreparável.',
      },
      {
        id: 'C',
        texto:
          'O atraso esquelético exige amputação das mãos para evitar que o osso contamine o restante do esqueleto.',
      },
      {
        id: 'D',
        texto:
          'O resultado comprova raquitismo dependente de vitamina D tipo II com perda renal maciça de fósforo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Interpretação da Idade Óssea e Prognóstico Estatural no ACCP:\n\n1. O Conceito de "Idade Biológica" no ACCP:\n   - No ACCP, o "relógio biológico" da criança funciona em ritmo mais lento;\n   - A IDADE ÓSSEA (IO) encontra-se marcadamente atrasada em relação à idade cronológica (IC), habitualmente com atraso de 1,5 a 3 anos (Δ = IC - IO > 1,5 a 2 anos);\n   - Crucialmente, a idade óssea é COMPATÍVEL COM A IDADE DA ESTATURA (a idade para a qual a altura da criança se encontraria no percentil 50);\n\n2. Preservação do Potencial de Crescimento:\n   - Como as epífises ósseas ainda são imaturas (com cartilagens amplamente abertas equivalentes às de uma criança de 11 anos), o tempo disponível para crescer até a fusão epifisária final é muito mais longo do que nos seus pares cronológicos;\n   - Quando calculada a previsão de estatura adulta pelo método de Bayley-Pinneau (que utiliza a idade óssea e não a cronológica), a altura projetada situa-se PERFEITAMENTE DENTRO DA FAIXA DO ALVO GENÉTICO FAMILIAR;\n   - Os adolescentes com ACCP iniciam o estirão puberal mais tarde (aos 15 ou 16 anos), continuam crescendo até os 18 a 20 anos e atingem estatura adulta rigorosamente normal e compatível com seus pais.',
    comentariosAlternativas: {
      A: 'Correta. A idade óssea atrasada preserva o potencial de crescimento, permitindo atingir o canal genético familiar no final.',
      B: 'Incorreta. Idade óssea de 11 anos significa cartilagens amplamente abertas e imaturas, o oposto de fechamento.',
      C: 'Incorreta. Afirmação sem nenhum sentido biológico ou médico.',
      D: 'Incorreta. O ACCP é uma variante do desenvolvimento fisiológico e não se confunde com raquitismo carencial ou genético.',
    },
  },
  {
    id: 'ped-pub-080',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Manejo do ACCP: Conduta Expectante vs Indução Puberal Temporária com Testosterona',
    isRevisao: false,
    enunciado:
      'Um adolescente de 14 anos e 8 meses com diagnóstico bem estabelecido de Atraso Constitucional do Crescimento e Puberdade (estágio G1 P1, testículos de 3 mL, idade óssea de 12 anos, previsão estatural no alvo) comparece ao consultório em sofrimento emocional intenso. O paciente chora durante a consulta, relata isolamento social, abandono das aulas de educação física e episódios frequentes de bullying na escola por ser o único garoto da sala com aparência infantil. Qual conduta médica integrada é recomendada para aliviar o impacto psicológico sem prejudicar a estatura final?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Indicação de curso curto de indução puberal temporária com éster de testosterona em dose baixa (Cipionato ou Enantato de testosterona intramuscular, 50 mg a cada 4 semanas por 3 a 6 meses), associada ao suporte psicológico; esquema seguro que induz virilização inicial e ativação do eixo sem provocar avanço desproporcional da idade óssea.',
      },
      {
        id: 'B',
        texto:
          'Internação psiquiátrica compulsória por 1 ano com uso de neurolépticos em doses elevadas.',
      },
      {
        id: 'C',
        texto:
          'Prescrição de testosterona em dose de adulto (250 mg semanal) associada a esteroides anabolizantes veterinários por 5 anos.',
      },
      {
        id: 'D',
        texto:
          'Informar ao paciente que nada pode ser feito pela medicina e proibir qualquer retorno ao ambulatório.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Tratamento do Atraso Constitucional do Crescimento e Puberdade com Doses Baixas de Andrógenos:\n\n1. Indicação da Intervenção Farmacológica:\n   - Como o ACCP é uma variante fisiológica normal, a conduta padrão é a CONDUTA EXPECTANTE acompanhada de orientação e tranquilização;\n   - No entanto, quando há REPERCUSSÃO PSICOSSOCIAL SIGNIFICATIVA (depressão, ansiedade, isolamento social, evasão escolar ou sofrimento decorrente de bullying), a intervenção médica com "empurrãozinho" puberal está amplamente indicada;\n\n2. O Esquema Terapêutico Padrão:\n   - Ésteres de testosterona de depósito: CIPIONATO OU ENANTATO DE TESTOSTERONA;\n   - Dosagem: Doses baixas pré-puberais/iniciais de 50 mg (ou 100 mg em adolescentes maiores de 15 anos) aplicadas por via INTRAMUSCULAR uma vez ao mês (a cada 4 semanas);\n   - Duração: CURSO CURTO de 3 a 6 meses de duração;\n\n3. Benefícios e Segurança Comprovados:\n   - Aumento da velocidade de crescimento (de 4 para 8-9 cm/ano);\n   - Desenvolvimento de caracteres sexuais secundários (discreto aumento peniano, pelos pubianos P2, melhora da massa muscular e da autoimagem);\n   - Efeito "gatilho" no eixo central: o andrógeno frequentemente estimula a maturação hipotalâmica do GnRH, permitindo que o paciente continue a puberdade por conta própria após a suspensão;\n   - A dose é propositalmente baixa para NÃO provocar avanço indevido da idade óssea nem fechamento epifisário precoce, preservando 100% da estatura final.',
    comentariosAlternativas: {
      A: 'Correta. Curso curto de testosterona em dose baixa (50 mg IM/mês por 3-6 meses) é o tratamento padrão para alívio psicossocial no ACCP masculino.',
      B: 'Incorreta. O sofrimento é reacional ao atraso puberal; a conduta é acolhimento e manejo endócrino, não internação psiquiátrica.',
      C: 'Incorreta. Doses altas de adulto fechariam as epífises ósseas prematuramente, resultando em perda grave de estatura.',
      D: 'Incorreta. Conduta omissa e desumana diante de sofrimento psíquico evidente.',
    },
  },
  {
    id: 'ped-pub-081',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'ACCP no Sexo Feminino e Manejo com Estrógenos em Baixas Doses',
    isRevisao: false,
    enunciado:
      'Uma adolescente de 13 anos e 8 meses é trazida ao ambulatório por ausência de desenvolvimento mamário (Tanner M1 P1). Apresenta histórico de crescimento regular no percentil 3, sem queixas sistêmicas, e a mãe relata menarca tardia aos 15 anos e 6 meses. O exame clínico e a triagem laboratorial são normais, com idade óssea de 11 anos e 6 meses e previsão de estatura adulta dentro do alvo genético. Devido à ansiedade extrema da paciente em relação à sua imagem corporal perante os pares, o endocrinopediatra propõe indução puberal temporária. Qual esquema farmacológico inicial é o mais adequado para o sexo feminino?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Estrógeno natural em doses muito baixas (como 17-beta estradiol transdérmico em adesivo ou estradiol oral em fração de dose de adulto, por exemplo 0,25 a 0,5 mg/dia ou 1/8 a 1/4 de adesivo) por um período de 4 a 6 meses, promovendo broto mamário inicial e estirão sem induzir fechamento epifisário precoce.',
      },
      {
        id: 'B',
        texto:
          'Pílula anticoncepcional combinada de alta dosagem (etinilestradiol 50 mcg + levonorgestrel) de uso ininterrupto por 3 anos.',
      },
      {
        id: 'C',
        texto:
          'Injeção de testosterona em dose masculina para estimular o desenvolvimento de barba na menina.',
      },
      {
        id: 'D',
        texto:
          'Acetato de medroxiprogesterona de depósito trimestral associado a danazol.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Indução Puberal no ACCP Feminino:\n\n1. Peculiaridades no Sexo Feminino:\n   - O ACCP é menos comum em meninas do que em meninos (proporção de aproximadamente 1 menina para cada 3 a 4 meninos);\n   - Sempre exige exclusão rigorosa de Síndrome de Turner (que frequentemente cursa com baixa estatura e atraso puberal);\n   - Quando confirmada a hipótese de ACCP com idade óssea atrasada e suporte psicológico necessário, a indução pode ser realizada;\n\n2. Esquema Terapêutico:\n   - Utiliza-se ESTRÓGENO NATURAL em doses iniciais minúsculas (1/6 a 1/4 da dose de reposição adulta);\n   - Preferência por 17-beta estradiol transdérmico (adesivo cortado ou gel) ou 17-beta estradiol micronizado oral (0,25 a 0,5 mg/dia);\n   - Não se deve utilizar etinilestradiol (estrógeno sintético de alta potência presente em pílulas anticoncepcionais), pois este provoca avanço ósseo rápido, maturação endometrial desorganizada e compromete a estatura final e o contorno mamário;\n   - A progesterona NÃO deve ser administrada nesta fase inicial, pois o progestágeno interrompe o brotamento tubular da mama e induz diferenciação lobuloalveolar prematura antes da conformação anatômica adequada da glândula.',
    comentariosAlternativas: {
      A: 'Correta. Estrógeno natural em doses mínimas mimetiza o início puberal fisiológico sem fechar cartilagens de crescimento.',
      B: 'Incorreta. Pílulas anticoncepcionais combinadas fecham epífises precocemente e prejudicam a formação do broto mamário.',
      C: 'Incorreta. Testosterona em dose masculina virilizaria a menina, causando clitoromegalia e pelos indesejados.',
      D: 'Incorreta. Progestágenos de depósito e danazol têm efeito antiestrogênico, impedindo a telarca.',
    },
  },
  {
    id: 'ped-pub-082',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Hipogonadismo Hipogonadotrófico Congênito: Síndrome de Kallmann e Anosmia',
    isRevisao: false,
    enunciado:
      'Um jovem de 16 anos é encaminhado para investigação de puberdade inexistente. Ao exame físico: paciente com alta estatura e proporções corporais eunucóides (envergadura superior à estatura em 6 cm), genitália infantil estadiamento de Tanner G1 P1, micropênis (comprimento de 3,5 cm) e testículos hipoplásicos com volume de 1,5 mL bilateralmente na bolsa escrotal. Os exames laboratoriais evidenciam testosterona total sérica de 12 ng/dL (pré-puberal), LH basal indetectável (< 0,1 mUI/mL) e FSH basal de 0,3 mUI/mL. Durante a anamnese dirigida, ao ser questionado sobre o olfato, o paciente relata que desde a infância nunca conseguiu sentir cheiro de perfumes, fumaça ou alimentos (anosmia congênita completa). Qual é o diagnóstico sindrômico clássico deste paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome de Kallmann (Hipogonadismo Hipogonadotrófico Congênito associado a Anosmia ou Hiposmia).',
      },
      {
        id: 'B',
        texto:
          'Síndrome de Klinefelter por trissomia gonossômica 47,XXY.',
      },
      {
        id: 'C',
        texto:
          'Atraso Constitucional do Crescimento e Puberdade autolimitado.',
      },
      {
        id: 'D',
        texto:
          'Puberdade Precoce Periférica por tumor das células de Leydig.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Síndrome de Kallmann:\n\n1. Conceito e Tríade Semiogênica:\n   - É a forma mais emblemática e clássica de HIPOGONADISMO HIPOGONADOTRÓFICO CONGÊNITO;\n   - Caracteriza-se pela associação obrigatória de:\n     1. Hipogonadismo Hipogonadotrófico (infantilismo sexual, micropênis, criptorquidia/hipoplasia testicular, LH e FSH indetectáveis ou baixos);\n     2. Anosmia ou Hiposmia congênita (incapacidade parcial ou total de perceber odores);\n\n2. Fisiopatologia Embriológica:\n   - Durante a organogênese embrionária (entre a 5ª e a 6ª semanas de gestação), os neurônios secretores de GnRH originam-se no EPITÉLIO DO PLACÓIDE OLFATÓRIO (na região nasal superior);\n   - Esses neurônios precisam migrar ao longo dos axônios do nervo vomeronasal e dos bulbos olfatórios através da lâmina crivosa do osso etmoide até atingirem sua morada definitiva no HIPOTÁLAMO MEDIAL BASAL;\n   - Na Síndrome de Kallmann, ocorre uma FALHA NESSA MIGRAÇÃO NEURONAL EMBRIOLÓGICA;\n   - Os neurônios de GnRH ficam "presos" no compartimento nasal/lâmina crivosa e os bulbos olfatórios não se formam ou são hipoplásicos (evidenciável na RM de encéfalo);\n   - Sem GnRH no hipotálamo, não há estímulo para LH e FSH hipofisários, resultando em ausência permanente de puberdade.',
    comentariosAlternativas: {
      A: 'Correta. A combinação de hipogonadismo hipogonadotrófico com anosmia congênita é a definição clínica da Síndrome de Kallmann.',
      B: 'Incorreta. Na Síndrome de Klinefelter o hipogonadismo é hipergonadotrófico (LH e FSH elevados) e o olfato é normal.',
      C: 'Incorreta. O ACCP não cursa com anosmia nem micropênis acentuado aos 16 anos.',
      D: 'Incorreta. O caso é de puberdade ausente/tardia (G1 aos 16 anos), e não precoce.',
    },
  },
  {
    id: 'ped-pub-083',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Síndrome de Kallmann: Genética Molecular e Manifestações Não Gonadais Associadas',
    isRevisao: false,
    enunciado:
      'Em relação à genética molecular e às anomalias fenotípicas associadas na Síndrome de Kallmann, qual mecanismo genético e conjunto de malformações não gonadais podem ser observados nesses pacientes?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Mutações no gene KAL1 (codificador da glicoproteína anosmina-1, de herança ligada ao cromossomo X) ou em genes autossômicos como FGFR1 e PROKR2; podendo apresentar clinicamente sincinésia bimanual (movimentos involuntários em espelho das mãos), fenda labiopalatina, agenesia renal unilateral e perda auditiva neurossensorial.',
      },
      {
        id: 'B',
        texto:
          'Trissomia livre do cromossomo 21 associada a canal atrioventricular total e hipotonia universal.',
      },
      {
        id: 'C',
        texto:
          'Deleção completa de todos os receptores de insulina com calcificação universal dos tendões calcâneos.',
      },
      {
        id: 'D',
        texto:
          'Ausência congênita bilateral de todas as costelas torácicas associada a dentes supranumerários em membros inferiores.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Genética e Achados Não Gonadais na Síndrome de Kallmann:\n\n1. Padrões Genéticos de Herança:\n   - Herança Ligada ao X (forma clássica): mutações no gene KAL1 (localizado em Xp22.3), que codifica a ANOSMINA-1 (uma molécula de adesão celular essencial para a orientação e migração axonal dos neurônios olfatórios e de GnRH);\n   - Herança Autossômica Dominante ou Recessiva: mutações nos genes FGFR1 (receptor do fator de crescimento fibroblástico 1), FGF8, PROK2 (procineticina-2) e PROKR2;\n\n2. Manifestações Não Gonadais Típicas:\n   - SINCINÉSIA BIMANUAL (Movimentos em Espelho): o paciente ao mover voluntariamente os dedos de uma mão reproduz involuntariamente os mesmos movimentos na mão oposta (presente em até 85% dos pacientes com mutação KAL1, por falha na decussação do trato corticoespinhal);\n   - AGENESIA RENAL UNILATERAL (rim único congênito por falha do broto uretérico);\n   - DEFEITOS DA LINHA MÉDIA: fenda labial com ou sem fenda palatina, agenesia dentária;\n   - Alterações esqueléticas e neurossensoriais (perda auditiva neurossensorial, escoliose).',
    comentariosAlternativas: {
      A: 'Correta. O gene KAL1 (anosmina-1) e FGFR1 explicam a síndrome, frequentemente associada a sincinésia bimanual, agenesia renal e fendas orofaciais.',
      B: 'Incorreta. Este é o quadro genético da Síndrome de Down.',
      C: 'Incorreta. Não tem correlação com a fisiopatologia da anosmina-1 e GnRH.',
      D: 'Incorreta. Afirmação fantasiosa sem respaldo anatômico ou patológico.',
    },
  },
  {
    id: 'ped-pub-084',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Hipogonadismo Hipogonadotrófico Adquirido: Craniofaringioma e Hipertensão Intracraniana',
    isRevisao: false,
    enunciado:
      'Um menino de 13 anos e 6 meses é encaminhado por parada no crescimento e atraso puberal (G1 P1, testículos de 2 mL). A mãe relata que o filho vinha crescendo normalmente até os 11 anos, quando parou de ganhar altura (velocidade de crescimento atual de 1,5 cm/ano). Nos últimos 6 meses, passou a apresentar episódios recorrentes de cefaleia holocraniana matinal acompanhada de vômitos em jato, piora do rendimento escolar e queixa de "trombar nas portas e móveis" ao caminhar. A campimetria visual computadorizada revela HEMIANOPSIA BITEMPORAL. A tomografia computadorizada de crânio evidencia lesão expansiva suprasselar com áreas císticas, porção sólida e múltiplas calcificações grosseiras. Qual é o diagnóstico etiológico mais provável?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Craniofaringioma suprasselar.',
      },
      {
        id: 'B',
        texto:
          'Atraso Constitucional do Crescimento e Puberdade.',
      },
      {
        id: 'C',
        texto:
          'Síndrome de Turner com mosaicismo celular.',
      },
      {
        id: 'D',
        texto:
          'Toxoplasmose congênita reativada no cerebelo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Craniofaringioma na Infância e Adolescência:\n\n1. Origem Embriológica e Epidemiologia:\n   - É o tumor de sistema nervoso central mais comum da região hipotálamo-hipofisária na infância;\n   - Origina-se de remanescentes embrionários epiteliais da BOLSA DE RATHKE (evaginação da ectoderme oral que forma a adeno-hipófise);\n   - Embora seja histologicamente benigno (grau I da OMS), seu comportamento clínico é biologicamente agressivo pela localização anatômica crítica na sela túrcica e supraselar;\n\n2. Manifestações Clínicas Típicas:\n   - HIPERTENSÃO INTRACRANIANA: cefaleia progressiva de predomínio matinal e vômitos decorrentes da hidrocefalia obstrutiva por compressão do terceiro ventrículo;\n   - COMPRESSÃO DO QUIASMA ÓPTICO: defeitos visuais campimétricos característicos, com clássica HEMIANOPSIA BITEMPORAL (perda da visão dos campos visuais temporais laterais);\n   - DISFUNÇÃO NEUROENDÓCRINA (Pan-hipopituitarismo):\n     * A parada no crescimento é frequentemente o primeiro sinal clínico (deficiência de GH);\n     * Hipogonadismo hipogonadotrófico com atraso puberal completo (compressão dos gonadotrofos e da haste hipofisária);\n     * Hipotireoidismo central e insuficiência adrenal central;\n     * Diabetes insipidus central (poliúria e polidipsia por compressão da neuro-hipófise/núcleos supraópticos);\n\n3. Achado Tomográfico Clássico:\n   - Massa mista sólido-cística na região selar/suprasselar apresentando CALCIFICAÇÕES EM MAIS DE 80-90% DOS CASOS pediátricos.',
    comentariosAlternativas: {
      A: 'Correta. Cefaleia, vômitos, hemianopsia bitemporal, parada de crescimento e calcificações suprasselares fecham o diagnóstico de craniofaringioma.',
      B: 'Incorreta. O ACCP não cursa com parada súbita do crescimento, vômitos matinais nem defeito campimétrico.',
      C: 'Incorreta. Síndrome de Turner ocorre no sexo feminino e não cursa com tumores cerebrais com calcificações selar.',
      D: 'Incorreta. Toxoplasmose causaria calcificações intracranianas parenquimatosas difusas na infância precoce, não massa expansiva com hemianopsia.',
    },
  },
  {
    id: 'ped-pub-085',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Craniofaringioma: Pan-hipopituitarismo e Sequência de Reposição Hormonal',
    isRevisao: false,
    enunciado:
      'Um adolescente operado de craniofaringioma suprasselar por via transcraniana evolui no pós-operatório imediato com Pan-hipopituitarismo completo (déficit de ACTH, TSH, GH, LH/FSH e ADH). Ao planejar a terapia de reposição hormonal substitutiva em terapia intensiva, qual hormônio deve ser PRIORITARIAMENTE reposto antes do início da Levotiroxina para evitar precipitar uma crise adrenal aguda potencialmente fatal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Glicocorticoide (Hidrocortisona intravenosa ou oral), pois a introdução isolada de hormônio tireoidiano acelera o metabolismo basal e a depuração hepática do cortisol, podendo desencadear choque circulatório por insuficiência adrenal aguda.',
      },
      {
        id: 'B',
        texto:
          'Testosterona em dose máxima de adulto para estimular ereção imediata.',
      },
      {
        id: 'C',
        texto:
          'Hormônio de crescimento em doses maciças para cicatrização da craniotomia em 24 horas.',
      },
      {
        id: 'D',
        texto:
          'Ocitocina intravenosa contínua para induzir contrações uterinas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo do Pan-hipopituitarismo e Prioridade da Reposição Hormonal:\n\n1. Regra de Ouro em Endocrinologia:\n   - NUNCA REPOR HORMÔNIO TIREOIDIANO ANTES DE REPOR OU CONFIRMAR A INTEGRIDADE DO EIXO ADRENAL COM GLICOCORTICOIDE;\n   - A levotiroxina estimula a transcrição gênica e eleva o metabolismo basal de todo o organismo;\n   - Esse aumento metabólico aumenta a depuração e o clearance hepático do pouco cortisol circulante disponível;\n   - Se o paciente tiver deficiência de ACTH/adrenal concomitante e receber tireoide sem corticoide, ele entrará em CRISE ADRENAL AGUDA (choque hipovolêmico/distributivo refratário a aminas vasoativas, hipoglicemia e óbito);\n\n2. Sequência Obrigatória de Reposição no Pan-hipopituitarismo:\n   - 1º: Reposição de Glicocorticoide (Hidrocortisona);\n   - 2º: Correção do Diabetes Insipidus com Desmopressina (DDAVP) e controle hidroeletrolítico (manter sódio sérico estável);\n   - 3º: Reposição de Levotiroxina (após a hidrocortisona estar instalada);\n   - Mais tardiamente, no seguimento ambulatorial:\n     * Reposição de Hormônio de Crescimento (rhGH) após confirmação de controle oncológico;\n     * Indução puberal gradual com esteroides sexuais (Testosterona ou Estradiol) no momento adequado.',
    comentariosAlternativas: {
      A: 'Correta. A hidrocortisona deve sempre preceder a levotiroxina para evitar a deflagração de crise adrenal aguda fatal por aceleração metabólica.',
      B: 'Incorreta. Esteroides sexuais não têm indicação na fase aguda hospitalar crítica.',
      C: 'Incorreta. O GH é contraindicado no pós-operatório imediato de tumor intracraniano residual ou instável.',
      D: 'Incorreta. O paciente é do sexo masculino e ocitocina não faz parte da reposição do pan-hipopituitarismo.',
    },
  },
  {
    id: 'ped-pub-086',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Hipogonadismo Hipogonadotrófico Funcional: Anorexia Nervosa e Desnutrição',
    isRevisao: false,
    enunciado:
      'Uma adolescente de 15 anos e 2 meses é trazida para avaliação por perda de peso acentuada e amenorreia primária (nunca menstruou) associada a estagnação do desenvolvimento puberal em Tanner M2 P1. Nos últimos 10 meses, a paciente iniciou restrição alimentar severa motivada por distorção da imagem corporal e medo mórbido de engordar, tendo perdido 14 kg. Ao exame físico: paciente emagrecida, IMC de 13,8 kg/m² (escore-z < -3), presença de lanugem difusa no dorso e membros, pele fria e ressecada, bradicardia em repouso (frequência cardíaca de 44 bpm) e acrocianose. O perfil hormonal evidencia LH basal de 0,1 mUI/mL, FSH de 0,8 mUI/mL, estradiol menor que 10 pg/mL e leptina sérica indetectável. Qual mecanismo fisiopatológico fundamenta a supressão do eixo hipotálamo-hipófise-gonadal nesta condição?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de hipogonadismo hipogonadotrófico funcional decorrente de déficit energético crônico, no qual a depleção crítica do tecido adiposo zera a secreção de leptina e eleva o cortisol central, desativando os neurônios de kisspeptina e silenciando a pulsatilidade do GnRH no hipotálamo.',
      },
      {
        id: 'B',
        texto:
          'A perda de peso destrói fisicamente a adeno-hipófise por necrose isquêmica induzida por hipotermia ambiental.',
      },
      {
        id: 'C',
        texto:
          'A ausência de gordura corporal converte todos os folículos ovarianos em células adiposas produtoras de prolactina.',
      },
      {
        id: 'D',
        texto:
          'O quadro resulta de hipertireoidismo factício decorrente do consumo exclusivo de sal marinho iodado.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisiopatologia do Hipogonadismo Hipogonadotrófico Funcional na Anorexia Nervosa:\n\n1. O Sinal Metabólico da Leptina:\n   - O organismo humano possui mecanismos adaptativos ancestrais para suspender a função reprodutiva em épocas de escassez calórica e fome crônica;\n   - A LEPTINA é uma adipocina sintetizada exclusivamente pelos adipócitos brancos proporcionalmente à massa gorda corporal;\n   - A leptina atua diretamente sobre os neurônios do núcleo arqueado do hipotálamo estimulando a liberação de KISSPEPTINA, que é o gatilho master para a pulsatilidade do GnRH;\n\n2. A Cascata de Inibição Central:\n   - Na desnutrição grave ou anorexia nervosa, a perda maciça de gordura corporal zera os níveis de leptina sérica;\n   - Sem leptina, o sistema das kisspeptinas desliga-se;\n   - Concomitantemente, o estresse crônico de privação calórica hiperativa o eixo corticotrófico (elevação de CRH e cortisol central), que exerce potente efeito inibitório sobre o gerador de pulsos de GnRH;\n   - Como resultado, a secreção de LH e FSH regride a níveis pré-puberais basais ("eixo congelado");\n\n3. Reversibilidade com a Recuperação Ponderal:\n   - O distúrbio é TOTALMENTE FUNCIONAL e REVERSÍVEL;\n   - Não há indicação de hormônios sexuais exógenos;\n   - O tratamento de escolha é o manejo psiquiátrico, nutricional e comportamental da anorexia nervosa;\n   - Ao recuperar peso crítico (geralmente quando o percentual de gordura corporal ultrapassa 17 a 22%), a leptina se normaliza, o eixo HHG é reativado espontaneamente e os caracteres puberais e a menarca ocorrem.',
    comentariosAlternativas: {
      A: 'Correta. A hipoleptinemia por falta de tecido adiposo e o hiperandrogenismo/hipercortisolemia de estresse silenciam o GnRH na anorexia nervosa.',
      B: 'Incorreta. A hipófise não sofre necrose; a alteração é neuroquímica funcional reversível.',
      C: 'Incorreta. Folículos ovarianos não se transformam em adipócitos prolactínicos.',
      D: 'Incorreta. O hipotireoidismo funcional do doente eutireóideo (queda de T3 livre) é a regra na anorexia, e não hipertireoidismo.',
    },
  },
  {
    id: 'ped-pub-087',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Tríade da Mulher Atleta: Baixa Disponibilidade Energética e Disfunção Menstrual',
    isRevisao: false,
    enunciado:
      'Uma adolescente de 15 anos e 6 meses, atleta de elite de ginástica artística com rotina de treinos intensos de 5 horas diárias e dieta com severa restrição calórica autoimposta, procura o consultório com queixa de amenorreia primária (Tanner M2 P2, com parada evolutiva há 2 anos). Recentemente, sofreu uma fratura por estresse na diáfise da tíbia direita durante um salto. A densitometria óssea revela baixa densidade mineral para a idade cronológica (escore-z da coluna lombar de -2,6). Qual é o diagnóstico desta síndrome clínica e qual é o seu pilar fisiopatológico central?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tríade da Mulher Atleta (RED-S - Síndrome da Deficiência Energética Relativa no Esporte); cujo pilar fisiopatológico é a baixa disponibilidade energética (discrepância entre ingestão calórica e gasto energético no exercício), provocando hipogonadismo hipogonadotrófico funcional, hipoestrogenismo e consequente perda prematura de massa óssea.',
      },
      {
        id: 'B',
        texto:
          'Osteogênese imperfeita tipo II letal com hipergonadismo fulminante.',
      },
      {
        id: 'C',
        texto:
          'Doença de Paget juvenil associada a tumor secretor de calcitonina.',
      },
      {
        id: 'D',
        texto:
          'Atraso constitucional do crescimento decorrente do uso de sapatilhas de ginástica apertadas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Tríade da Mulher Atleta (RED-S - Relative Energy Deficiency in Sport):\n\n1. Os Três Componentes Interligados da Tríade:\n   1. BAIXA DISPONIBILIDADE ENERGÉTICA (com ou sem transtorno alimentar subjacente): a ingestão calórica é insuficiente para suprir o gasto metabólico basal somado à carga extrema do exercício de alta performance;\n   2. DISFUNÇÃO MENSTRUAL / ATRASO PUBERAL: hipogonadismo hipogonadotrófico funcional com amenorreia primária ou secundária e hipoestrogenismo profundo;\n   3. COMPROMETIMENTO DA SAÚDE ÓSSEA: baixa densidade mineral óssea (osteopenia/osteoporose precoce), desestruturação da microarquitetura óssea e alto risco de fraturas por estresse;\n\n2. Fisiopatologia Óssea no Hipoestrogenismo do Exercício:\n   - A adolescência é o período crítico no qual se adquire mais de 40 a 50% de toda a massa óssea da vida (formação do pico de massa óssea);\n   - O estrogênio é o principal inibidor dos osteoclastos e estimulador da aposição mineral óssea;\n   - A carência estrogênica provocada pela supressão do GnRH em uma adolescente atleta acelera a reabsorção óssea e impede o ganho mineral;\n   - Somada à elevação do cortisol e à redução do IGF-1 geradas pelo estresse calórico, o osso torna-se frágil e sujeito a fraturas de estresse;\n\n3. Conduta Terapêutica Fundamental:\n   - Não basta repor pílula anticoncepcional (a pílula mascararia a amenorreia sem tratar o déficit energético celular);\n   - A conduta primária obrigatória é o RESTABELECIMENTO DA DISPONIBILIDADE ENERGÉTICA: ajuste nutricional supervisionado aumentando o aporte calórico e redução da intensidade/volume dos treinos esportivos.',
    comentariosAlternativas: {
      A: 'Correta. A combinação de baixa disponibilidade energética, hipogonadismo funcional com amenorreia e osteopenia com fratura de estresse define a Tríade da Mulher Atleta / RED-S.',
      B: 'Incorreta. Osteogênese imperfeita tipo II é letal no período perinatal.',
      C: 'Incorreta. Doença de Paget acomete idosos com remodelação óssea aberrante, não atletas adolescentes.',
      D: 'Incorreta. Calçados não causam osteopenia sistêmica nem suprimem o eixo hipotálamo-hipófise.',
    },
  },
  {
    id: 'ped-pub-088',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Hipogonadismo Funcional em Doenças Inflamatórias Crônicas: Citocinas e Eixo HHG',
    isRevisao: false,
    enunciado:
      'Um menino de 14 anos e 2 meses comparece ao ambulatório com atraso puberal (G1 P1, testículos de 2,5 mL) e queixa de cansaço fácil. Nos últimos 18 meses, apresentou desaceleração do crescimento (caindo do percentil 50 para abaixo do percentil 3), dor abdominal periumbilical recorrente, episódios intermitentes de diarreia sem muco evidente e aftas orais frequentes. Os exames evidenciam anemia ferropriva refratária ao sulfato ferroso oral (Hb = 9,8 g/dL), VHS de 62 mm/h, PCR elevada, albumina de 3,1 g/dL, LH e FSH pré-puberais baixos e colonoscopia com ileocolite granulomatosa sugestiva de Doença de Crohn. Qual mecanismo explica a supressão do eixo puberal e a baixa estatura em adolescentes com doenças inflamatórias crônicas sistêmicas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A liberação sistêmica contínua de citocinas pró-inflamatórias (especialmente TNF-alfa, IL-1 e IL-6) suprime diretamente a secreção hipotalâmica de GnRH, induz anorexia com desnutrição secundária e gera resistência hepática periférica à ação do hormônio de crescimento (GH), reduzindo os níveis circulantes de IGF-1.',
      },
      {
        id: 'B',
        texto:
          'As bactérias intestinais migram para o escroto e digerem fisicamente os túbulos seminíferos.',
      },
      {
        id: 'C',
        texto:
          'A inflamação intestinal induz mutação genética primária no cromossomo Y transformando o paciente em cariótipo 46,XX.',
      },
      {
        id: 'D',
        texto:
          'O ferro administrado por via oral liga-se aos receptores de LH na hipófise, bloqueando irreversivelmente a liberação de gonadotrofinas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Impacto das Doenças Inflamatórias Crônicas sobre o Crescimento e a Puberdade:\n\n1. Fisiopatologia Mediada por Citocinas:\n   - Doenças inflamatórias crônicas (como a Doença de Crohn, Doença Celíaca, Artrite Idiopática Juvenil, Fibrose Cística e Insuficiência Renal Crônica) afetam gravemente a puberdade por múltiplos mecanismos convergentes;\n   - As citocinas inflamatórias circulantes (TNF-alfa, Interleucina-1 e Interleucina-6) ultrapassam a barreira hematoencefálica nas regiões periventriculares;\n   - Atuam diretamente no hipotálamo, SUPRIMINDO a frequência e a amplitude dos pulsos de GnRH (hipogonadismo hipogonadotrófico funcional);\n\n2. Resistência ao GH e Bloqueio do Crescimento Linear:\n   - As mesmas citocinas agem nos hepatócitos inibindo a via de sinalização intracelular JAK/STAT após o acoplamento do GH aos seus receptores;\n   - O fígado torna-se "resistente ao GH", diminuindo drasticamente a síntese de Fator de Crescimento Semelhante à Insulina tipo 1 (IGF-1) e sua proteína carreadora (IGFBP-3);\n   - Além disso, a inflamação gera má absorção intestinal, anorexia mediada por citocinas, hipoalbuminemia e perda crônica de micronutrientes essenciais (ferro, zinco);\n\n3. Conduta Terapêutica Primária:\n   - O tratamento NÃO consiste em prescrever hormônios sexuais de imediato;\n   - O pilar terapêutico é o CONTROLE DA ATIVIDADE INFLAMATÓRIA DA DOENÇA DE BASE (com imunobiológicos, imunossupressores ou nutrição enteral exclusiva);\n   - Uma vez remitida a inflamação, o eixo HHG é desbloqueado e a velocidade de crescimento sofre recuperação espontânea (catch-up growth).',
    comentariosAlternativas: {
      A: 'Correta. Citocinas pró-inflamatórias (TNF, IL-1, IL-6) suprimem o GnRH central e bloqueiam a geração hepática de IGF-1 induzida pelo GH.',
      B: 'Incorreta. Não há translocação bacteriana lítica escrotal.',
      C: 'Incorreta. Inflamação adquirida não altera o cariótipo genético constitucional.',
      D: 'Incorreta. O ferro oral trata a anemia ferropriva e não bloqueia gonadotrofinas.',
    },
  },
  {
    id: 'ped-pub-089',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Diferenciação entre ACCP e Hipogonadismo Hipogonadotrófico Congênito Idiopático (HHCI)',
    isRevisao: false,
    enunciado:
      'Um dos maiores desafios da Endocrinologia Pediátrica reside na diferenciação precoce entre o Atraso Constitucional do Crescimento e Puberdade (ACCP) e o Hipogonadismo Hipogonadotrófico Congênito Idiopático (HHCI) em um adolescente do sexo masculino aos 14 anos com genitália infantil e LH/FSH basais baixos. Qual biomarcador hormonal sérico derivado das células de Sertoli e dos túbulos seminíferos tem se destacado como excelente preditor para diferenciar essas duas condições?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Dosagem sérica basal de Inibina B (e Hormônio Anti-mülleriano - AMH), cujos níveis marcadamente suprimidos ou indetectáveis apontam fortemente para HHCI (ausência congênita de estímulo aos túbulos), enquanto valores detectáveis e em faixa puberal inicial sugerem ACCP com eixo apenas atrasado.',
      },
      {
        id: 'B',
        texto:
          'Dosagem de troponina ultrassensível e peptídeo natriurético tipo B.',
      },
      {
        id: 'C',
        texto:
          'Níveis de amilase salivar e lipase pancreática após sobrecarga lipídica.',
      },
      {
        id: 'D',
        texto:
          'Concentração intraeritrocitária de hemoglobina fetal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diferenciação entre ACCP e Hipogonadismo Hipogonadotrófico Congênito (HHCI):\n\n1. O Dilema Clínico:\n   - Aos 14 anos, tanto o paciente com ACCP quanto o paciente com HHCI apresentam-se clinicamente idênticos: estadiamento G1 P1, testículos < 4 mL, LH e FSH basais baixos e idade óssea atrasada;\n   - No entanto, o prognóstico é oposto: o ACCP iniciará puberdade espontaneamente em breve, enquanto o HHCI jamais terá puberdade espontânea sem reposição hormonal permanente;\n\n2. O Papel da Inibina B e do AMH (Marcadores Sertolianos):\n   - A INIBINA B é secretada exclusivamente pelas Células de Sertoli testiculares sob estímulo tônico de FSH;\n   - No HHCI: Como a hipófise nunca secretou FSH suficiente durante a vida fetal, na minipuberdade pós-natal e na infância, a massa de células de Sertoli é hipoplásica -> A Inibina B é marcadamente baixa ou indetectável (tipicamente < 35 pg/mL);\n   - No ACCP: O eixo funcionou perfeitamente na vida fetal e nos primeiros meses de vida, estando apenas temporariamente em repouso puberal -> Os níveis basais de Inibina B encontram-se preservados em níveis normais para o estágio pré-puberal ou puberal inicial (> 60 a 100 pg/mL);\n\n3. Outros Testes Diagnósticos Diferenciais:\n   - Teste de estímulo prolongado com GnRH pulsátil ou teste com hCG (avaliando reserva de testosterona pelas células de Leydig);\n   - Avaliação genética por painel de sequenciamento de nova geração (NGS) para genes de hipogonadismo central.',
    comentariosAlternativas: {
      A: 'Correta. A Inibina B basal reflete a maturação das células de Sertoli; níveis extremamente baixos indicam falha congênita (HHCI), enquanto níveis normais favorecem ACCP.',
      B: 'Incorreta. Troponina e BNP são marcadores de necrose miocárdica e insuficiência cardíaca.',
      C: 'Incorreta. Enzimas pancreáticas avaliam pancreatite e não o eixo reprodutivo.',
      D: 'Incorreta. Hemoglobina fetal avalia hemoglobinopatias como anemia falciforme.',
    },
  },
  {
    id: 'ped-pub-090',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Hipogonadismo Hipergonadotrófico: Falência Gonadal Primária e Perda de Feedback',
    isRevisao: false,
    enunciado:
      'Em relação aos distúrbios da maturação sexual, qual característica fisiopatológica e perfil laboratorial definem categoricamente o HIPOGONADISMO HIPERGONADOTRÓFICO (Falência Gonadal Primária)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Defeito primário localizado nas próprias gônadas (ovários ou testículos), que se encontram incapazes de sintetizar esteroides sexuais e inibinas, resultando na perda do feedback negativo sobre a hipófise e consequente elevação acentuada dos níveis séricos de LH e FSH.',
      },
      {
        id: 'B',
        texto:
          'Tumor hipofisário que destrói todas as células basófilas, zerando simultaneamente o LH, o FSH e o cortisol.',
      },
      {
        id: 'C',
        texto:
          'Aumento maciço de testosterona e estradiol com supressão completa e permanente do crescimento ósseo em lactentes.',
      },
      {
        id: 'D',
        texto:
          'Lesão congênita do bulbo raquidiano que bloqueia a absorção de oxigênio pelas mitocôndrias ovarianas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Conceito e Mecanismo do Hipogonadismo Hipergonadotrófico:\n\n1. A Origem do Distúrbio (Falência Primária):\n   - O problema reside EXCLUSIVAMENTE NA GÔNADA (disgenesia gonadal, anorquia, destruição pós-quimioterapia/radioterapia, infecção ou atrofia autoimune);\n   - O ovário ou o testículo não possuem células funcionantes capazes de responder ao estímulo trófico;\n   - Há carência profunda na produção de esteroides sexuais (estradiol na menina e testosterona no menino) e de peptídeos inibitórios gonadais (Inibina B e Inibina A);\n\n2. A Resposta Central Compensatória (Hipergonadotrofismo):\n   - O hipotálamo e a adeno-hipófise encontram-se anatomica e funcionalmente PERFEITOS;\n   - Diante da ausência do freio inibitório exercido pelos esteroides e inibinas (ausência de feedback negativo):\n     * O hipotálamo dispara GnRH em alta frequência;\n     * A adeno-hipófise sintetiza e secreta quantidades maciças de Hormônio Luteinizante (LH) e Hormônio Folículo-Estimulante (FSH) na corrente sanguínea em uma tentativa infrutífera de estimular gônadas que não respondem;\n   - Esse achado laboratorial (LH e FSH muito elevados com estradiol ou testosterona muito baixos) direciona imediatamente o raciocínio para causas genéticas/cromossômicas gonadais, com destaque mandatória para o CARIÓTIPO.',
    comentariosAlternativas: {
      A: 'Correta. A perda primária da função gonadal abole o feedback negativo, elevando marcadamente o LH e o FSH séricos.',
      B: 'Incorreta. Destruição hipofisária causaria hipogonadismo hipogonadotrófico (LH/FSH baixos), e não hipergonadotrófico.',
      C: 'Incorreta. Este perfil descreveria puberdade precoce periférica autônoma grave.',
      D: 'Incorreta. Não existe lesão bulbar com bloqueio mitocôndrico ovariano isolado.',
    },
  },
  {
    id: 'ped-pub-091',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Síndrome de Turner (45,X0): Fenótipo Clínico Clássico e Disgenesia Gonadal',
    isRevisao: false,
    enunciado:
      'Uma adolescente de 13 anos e 6 meses é trazida ao ambulatório de Pediatria com queixa de baixa estatura grave e ausência de qualquer sinal de puberdade (estágio de Tanner M1 P1). Ao exame físico, o médico constata estatura muito abaixo do percentil 1 (escore-z de altura = -3,4), implantação baixa dos cabelos na nuca, pescoço alado com prega cutânea lateral redundante (pterygium colli), tórax largo em escudo com mamilos amplamente espaçados (hipertelorismo mamário), micrognatia, palato ogival, cúbito valgo pronunciado e múltiplos nevos melanocíticos pelo corpo. A ultrassonografia pélvica demonstra útero infantil rudimentar e gônadas visualizadas apenas como estruturas fibrosas delgadas em fita (estrias gonadais bilaterais). Os exames laboratoriais revelam FSH de 88 mUI/mL e LH de 34 mUI/mL. Qual condição genética explica integralmente este quadro clínico?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome de Turner (Cariótipo 45,X ou mosaicismos correlatos).',
      },
      {
        id: 'B',
        texto:
          'Síndrome de Klinefelter (Cariótipo 47,XXY).',
      },
      {
        id: 'C',
        texto:
          'Atraso Constitucional do Crescimento e Puberdade isolado.',
      },
      {
        id: 'D',
        texto:
          'Síndrome de Prader-Willi por deleção paterna no cromossomo 15.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Síndrome de Turner (Disgenesia Gonadal 45,X):\n\n1. Aspectos Genéticos e Incidência:\n   - Ocorre em aproximadamente 1 para cada 2.000 a 2.500 nascidos vivos do sexo feminino;\n   - Cariótipo clássico: Monossomia completa do cromossomo X (45,X) em cerca de 50% dos casos; os outros 50% dividem-se em mosaicismos (ex.: 45,X/46,XX) ou anomalias estruturais do cromossomo X (isocromossomo Xq, anel r(X));\n\n2. Manifestações Cardeais:\n   - BAIXA ESTATURA: achado quase universal (> 95-98%), decorrente da haploinsuficiência do gene SHOX (Short Stature Homeobox gene), localizado na região pseudoautossômica do cromossomo X (PAR1);\n   - DISGENESIA GONADAL: atresia acelerada e prematura dos folículos ovarianos ainda na vida intrauterina, substituindo os ovários por bandas de tecido fibroso inerte ("gônadas em fita/estria" ou "streak gonads");\n   - FALÊNCIA OVARIANA HIPERGONADOTRÓFICA: ausência de desenvolvimento mamário espontâneo (M1) e amenorreia primária na vasta maioria dos casos (embora algumas formas com mosaicismo possam apresentar puberdade espontânea transitória);\n   - Dismorfismos Típicos: pescoço alado (pterygium colli decorrente de higroma cístico fetal reabsorvido), implantação baixa da linha posterior dos cabelos, tórax em escudo com hipertelorismo intermamário, cúbito valgo, quarto metatarso curto, palato ogival e nevos pigmentados.',
    comentariosAlternativas: {
      A: 'Correta. A combinação de baixa estatura grave, dismorfismos clássicos, gônadas em fita e FSH elevado é patognomônica da Síndrome de Turner.',
      B: 'Incorreta. Síndrome de Klinefelter acomete indivíduos com fenótipo masculino e cursa com alta estatura eunucoide.',
      C: 'Incorreta. O ACCP não cursa com pterygium colli, hipertelorismo mamário, cúbito valgo nem gônadas em fita com FSH elevado.',
      D: 'Incorreta. Prader-Willi cursa com obesidade mórbida hiperfágica, hipotonia neonatal e atraso do desenvolvimento neuropsicomotor.',
    },
  },
  {
    id: 'ped-pub-092',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Síndrome de Turner: Indicação Obrigatória de Cariótipo e Pesquisa de Linhagem Y',
    isRevisao: false,
    enunciado:
      'Uma diretriz clínica universalmente consagrada em Pediatria e Endocrinologia preconiza a solicitação de CARIÓTIPO COM CONTAGEM AMPLIADA DE METÁFASES em qual das seguintes situações clínicas cotidianas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Em toda e qualquer menina que apresente baixa estatura inexplicada (altura abaixo do percentil 3 ou significativamente descolada do canal familiar) e/ou atraso puberal, mesmo na ausência de estigmas físicos dismórficos evidentes da Síndrome de Turner.',
      },
      {
        id: 'B',
        texto:
          'Apenas em meninas que apresentem obrigatoriamente mais de 10 estigmas sindrômicos e que já tenham completado 18 anos de idade.',
      },
      {
        id: 'C',
        texto:
          'Exclusivamente em meninos obesos com ginecomastia puberal fisiológica.',
      },
      {
        id: 'D',
        texto:
          'Apenas se a paciente apresentar quatro rins funcionantes visualizados na ultrassonografia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Indicação Mandatória de Cariótipo na Prática Pediátrica:\n\n1. A Regra Áurea da Baixa Estatura no Sexo Feminino:\n   - Toda menina com BAIXA ESTATURA INEXPLICADA (estatura < percentil 3, escore-z < -2 ou velocidade de crescimento persistentemente subnormal) DEVE REALIZAR CARIÓTIPO EM SANGUE PERIFÉRICO;\n   - Muitas pacientes com Síndrome de Turner (especialmente aquelas com mosaico cromossômico 45,X/46,XX) NÃO APRESENTAM o fenótipo exuberante clássico (sem pescoço alado, sem edema e sem tórax em escudo);\n   - Nesses casos frustros, a ÚNICA manifestação clínica presente durante toda a infância é a BAIXA ESTATURA ISOLADA;\n   - Postergar o diagnóstico para a adolescência priva a paciente da oportunidade de receber Hormônio de Crescimento (rhGH) em tempo hábil para recuperar a estatura adulta;\n\n2. Pesquisa de Material Cromossômico Y (Gene SRY):\n   - Em todo cariótipo que confirme Turner, deve-se realizar contagem ampliada de metáfases (30 a 50 células) ou técnica de FISH/PCR para pesquisar material do cromossomo Y;\n   - A presença de fragmentos do cromossomo Y em pacientes com disgenesia gonadal eleva o risco de degeneração maligna das gônadas em fita para GONADOBLASTOMA e disgerminoma em 15 a 30% dos casos, impondo a realização de gonadectomia profilática videolaparoscópica.',
    comentariosAlternativas: {
      A: 'Correta. Cariótipo é obrigatório em qualquer menina com baixa estatura inexplicada ou atraso puberal, mesmo sem fenótipo clássico.',
      B: 'Incorreta. Aguardar os 18 anos impediria o ganho de estatura com GH e a indução puberal oportuna.',
      C: 'Incorreta. Meninos com ginecomastia isolada sem outros sinais têm distúrbio benigno transitório.',
      D: 'Incorreta. Critério inexistente e sem fundamentação científica.',
    },
  },
  {
    id: 'ped-pub-093',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Síndrome de Turner: Malformações Cardiovasculares e Renais Obrigatórias de Rastreio',
    isRevisao: false,
    enunciado:
      'Logo após a confirmação citogenética do diagnóstico de Síndrome de Turner em uma menina de 11 anos, quais exames complementares de imagem são MANDATÓRIOS no protocolo inicial de estadiamento devido às altas taxas de anomalias congênitas cardiovasculares e renais associadas a essa condição?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ecocardiograma transtorácico com Doppler (pesquisando Coarctação de Aorta, Valva Aórtica Bicúspide e dilatação da raiz aórtica) e Ultrassonografia renal e de vias urinárias (pesquisando Rim em Ferradura e duplicidade pielocalicinal).',
      },
      {
        id: 'B',
        texto:
          'Cintilografia de perfusão miocárdica com estresse farmacológico e biópsia hepática cega.',
      },
      {
        id: 'C',
        texto:
          'Broncoscopia rígida com lavado broncoalveolar e arteriografia mesentérica de urgência.',
      },
      {
        id: 'D',
        texto:
          'Ressonância magnética exclusiva de calcâneo e eletroneuromiografia de quatro membros.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Malformações Cardiovasculares e Renais na Síndrome de Turner:\n\n1. Complicações Cardiovasculares (Principal Causa de Mortalidade Precoce):\n   - Cerca de 30 a 50% das meninas com Síndrome de Turner apresentam cardiopatias congênitas estruturais, com nítida predileção pelas lesões obstrutivas do coração esquerdo:\n     1. VALVA AÓRTICA BICÚSPIDE (presente em 30 a 40% das pacientes, podendo evoluir com estenose, regurgitação ou endocardite infecciosa);\n     2. COARCTAÇÃO DE AORTA (presente em cerca de 10 a 15% dos casos, devendo sempre ser pesquisada na infância mediante palpação dos pulsos femorais e aferição da pressão arterial em membros superiores e inferiores);\n     3. Dilatação progressiva da raiz e da aorta ascendente com risco aumentado de DISSECÇÃO AÓRTICA AGUDA;\n   - Exame obrigatório: Ecocardiograma com Doppler ao diagnóstico e Ressonância Magnética Cardiovascular na adolescência;\n\n2. Complicações Renais e Urinárias:\n   - Presentes em 30 a 40% das pacientes;\n   - A malformação mais emblemática é o RIM EM FERRADURA (fusão dos polos inferiores dos rins cruzando a linha média anterior à aorta);\n   - Duplicidade pielocalicinal, agenesia renal unilateral e rotação anômala;\n   - Elevam o risco de infecções urinárias de repetição, litíase e hipertensão renovascular;\n   - Exame obrigatório: Ultrassonografia de rins e vias urinárias ao diagnóstico.',
    comentariosAlternativas: {
      A: 'Correta. Ecocardiograma (coarctação/valva bicúspide) e ultrassonografia renal (rim em ferradura) são os pilares mandatórios de rastreio inicial na Síndrome de Turner.',
      B: 'Incorreta. Exames cardíacos de estresse e biópsia hepática não fazem parte do rastreamento basal.',
      C: 'Incorreta. Broncoscopia e angiografia mesentérica são procedimentos invasivos descabidos.',
      D: 'Incorreta. Exames de calcâneo e eletroneuromiografia não têm correlação com o protocolo de Turner.',
    },
  },
  {
    id: 'ped-pub-094',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Síndrome de Turner: Manejo Terapêutico Integrado com rhGH e Indução Puberal Gradual',
    isRevisao: false,
    enunciado:
      'No planejamento terapêutico de longo prazo para uma paciente com Síndrome de Turner diagnosticada aos 5 anos de idade, qual é a conduta integrada correta quanto à terapia de crescimento e à indução puberal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Iniciar precocemente Hormônio de Crescimento recombinante (rhGH) em doses suprafisiológicas para contornar a haploinsuficiência do gene SHOX e recuperar a estatura; postergar a indução puberal com estrogênio natural até cerca de 11 a 12 anos de idade, introduzindo doses progressivamente crescentes para mimetizar o desenvolvimento mamário fisiológico, associando progestágeno cíclico após pelo menos 2 anos de estrogenioterapia ou após a primeira menstruação.',
      },
      {
        id: 'B',
        texto:
          'Iniciar etinilestradiol em dose máxima de adulto aos 5 anos para fazer a menina menstruar antes do ensino fundamental.',
      },
      {
        id: 'C',
        texto:
          'Contraindicar o uso de hormônio de crescimento por risco de transformar a paciente em um gigante de 3 metros.',
      },
      {
        id: 'D',
        texto:
          'Prescrever apenas testosterona injetável mensal e proibir o uso de qualquer derivado estrogênico por toda a vida.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo Terapêutico Integrado na Síndrome de Turner:\n\n1. Terapia com Hormônio de Crescimento Recombinante (rhGH):\n   - A baixa estatura na Turner não decorre de carência hipofisária de GH, mas sim de resistência óssea causada pela haploinsuficiência do gene SHOX;\n   - Por isso, utiliza-se rhGH em doses suprafisiológicas mais elevadas que as da deficiência clássica de GH (0,045 a 0,050 mg/kg/dia);\n   - O início precoce (a partir dos 2 a 4 anos, assim que a velocidade de crescimento desacelera) proporciona ganho médio de estatura adulta final de 7 a 12 cm;\n\n2. Terapia de Indução Puberal com Estrogênios:\n   - Deve ser iniciada em idade fisiológica oportuna (ao redor dos 11 aos 12 anos);\n   - Inicia-se com ESTRÓGENO NATURAL (preferencialmente 17-beta estradiol transdérmico em adesivo ou gel, que possui menor impacto hepático e menor risco trombótico);\n   - A dose é introduzida de forma ultra-baixa e escalonada gradativamente ao longo de 2 a 3 anos (ex.: 1/8 a 1/4 da dose de adulto inicial), mimetizando com perfeição a maturação fisiológica da glândula mamária e otimizando o contorno corporal ginecoide;\n   - O progestágeno cíclico (ex.: Progesterona natural micronizada 100-200 mg/dia ou Didrogesterona por 12 a 14 dias do mês) só deve ser associado após cerca de 2 anos de estrogenioterapia ou após a ocorrência do primeiro sangramento de escape, garantindo proteção endometrial contra hiperplasia e adenocarcinoma.',
    comentariosAlternativas: {
      A: 'Correta. GH suprafisiológico na infância seguido de indução puberal estrogênica gradual aos 11-12 anos com progestágeno tardio é o padrão-ouro de tratamento.',
      B: 'Incorreta. Estrogênio em altas doses na infância fecharia epífises prematuramente, causando baixa estatura extrema irremediável.',
      C: 'Incorreta. O rhGH é tratamento formalmente aprovado e indispensável para a otimização da estatura na Síndrome de Turner.',
      D: 'Incorreta. Turner possui fenótipo feminino; o tratamento visa a reposição estrogênica, e não virilização por testosterona.',
    },
  },
  {
    id: 'ped-pub-095',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Síndrome de Klinefelter (47,XXY): Apresentação Fenotípica na Puberdade e Hábito Eunucoide',
    isRevisao: false,
    enunciado:
      'Um adolescente de 15 anos e 6 meses é encaminhado por puberdade atrasada e incompleta. Ao exame físico: paciente alto (estatura no percentil 95), magro, com proporções corporais eunucóides caracterizadas por membros inferiores desproporcionalmente longos (relação segmento superior/segmento inferior diminuída) e envergadura excedendo a estatura em 8 cm; presença de ginecomastia bilateral palpável e dolorosa; pilosidade facial, axilar e corporal marcadamente escassa; e testículos simétricos, muito pequenos e com consistência endurecida/firme à palpação, medindo apenas 2,0 mL no orquidômetro de Prader. A história escolar revela dificuldades prévias no aprendizado da leitura e déficits de linguagem expressiva. Qual é o diagnóstico clínico e o cariótipo mais provável?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome de Klinefelter; Cariótipo 47,XXY.',
      },
      {
        id: 'B',
        texto:
          'Síndrome de Down; Cariótipo 47,XY,+21.',
      },
      {
        id: 'C',
        texto:
          'Atraso Constitucional do Crescimento e Puberdade com cariótipo normal 46,XY.',
      },
      {
        id: 'D',
        texto:
          'Síndrome de Marfan isolada com cariótipo 46,XX.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Síndrome de Klinefelter (Aneuploidia 47,XXY):\n\n1. Epidemiologia e Genética:\n   - É a anomalia dos cromossomos sexuais mais frequente no sexo masculino, acometendo cerca de 1 em cada 500 a 600 meninos nascidos vivos;\n   - Cariótipo clássico: 47,XXY (presença de um cromossomo X extra de origem materna ou paterna em 80-90% dos casos; variantes incluem mosaicismo 46,XY/47,XXY ou 48,XXXY);\n\n2. Apresentação Clínica na Adolescência (Geralmente Subdiagnosticada na Infância):\n   - ALTA ESTATURA DESPROPORCIONAL com Hábito Eunucoide: membros inferiores muito longos e envergadura superior à estatura, devido ao atraso no fechamento das epífises ósseas e à dosagem tripla de genes de crescimento (como SHOX no cromossomo X);\n   - GINECOMASTIA BILATERAL: presente em mais de 40 a 50% dos adolescentes, decorrente da elevação da relação estrogênio/androgênio (aumenta o risco de câncer de mama em homens em até 20 a 50 vezes);\n   - TESTÍCULOS PEQUENOS E ENDURECIDOS: é o achado semiológico patognomônico (volume < 4 mL, consistência lenhosa/firme por fibrose e hialinização dos túbulos seminíferos);\n   - Pilosidade escassa e baixa massa muscular;\n   - Dificuldades cognitivas específicas: atraso na aquisição da fala, dislexia, déficits de funções executivas e timidez patológica.',
    comentariosAlternativas: {
      A: 'Correta. Alta estatura eunucoide, ginecomastia, testículos pequenos e endurecidos (< 4 mL) e distúrbios de linguagem definem a Síndrome de Klinefelter (47,XXY).',
      B: 'Incorreta. Síndrome de Down cursa com baixa estatura, hipotonia, prega palmar única e fácies característica.',
      C: 'Incorreta. O ACCP cursa com baixa estatura na adolescência e testículos de consistência normal, não ginecomastia endurecida nem proporções eunucóides.',
      D: 'Incorreta. A Síndrome de Marfan causa ectopia lentis e dilatação de raiz aórtica, com genitália normal.',
    },
  },
  {
    id: 'ped-pub-096',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Síndrome de Klinefelter: Fisiopatologia da Hialinização Tubular e Perfil Laboratorial',
    isRevisao: false,
    enunciado:
      'Em relação à fisiopatologia testicular e ao padrão hormonal sérico na Síndrome de Klinefelter (47,XXY) durante a transição da adolescência para a vida adulta, qual assertiva descreve CORRETAMENTE as alterações histológicas e laboratoriais encontradas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Hialinização e fibrose progressiva dos túbulos seminíferos com perda massiva de espermatogônias e células de Sertoli, gerando elevação drástica de FSH (por colapso da inibina B); associada à disfunção das células de Leydig com elevação compensatória de LH e testosterona em níveis baixos ou limítrofes, resultando em azoospermia e infertilidade.',
      },
      {
        id: 'B',
        texto:
          'Proliferação neoplásica massiva de espermatozoides que quadruplica a produção de testosterona com LH zerado.',
      },
      {
        id: 'C',
        texto:
          'Destruição autoimune exclusiva da tireoide com LH e FSH rigorosamente indetectáveis no sangue.',
      },
      {
        id: 'D',
        texto:
          'Conversão dos testículos em glândulas mamárias funcionantes produtoras de colostro.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisiopatologia Histológica e Laboratorial da Síndrome de Klinefelter:\n\n1. Dinâmica da Destruição Tubular Testicular:\n   - Durante a infância, o testículo do menino com Klinefelter apresenta aspecto quase normal;\n   - Ao atingir a idade puberal, a elevação fisiológica das gonadotrofinas deflagra um processo degenerativo acelerado nos túbulos seminíferos;\n   - Ocorre hialinização tubular progressiva, fibrose intersticial densa e apoptose maciça das células germinativas e das células de Sertoli;\n   - O parênquima testicular perde sua elasticidade normal, tornando-se reduzido em volume (< 3 a 4 mL) e de consistência acentuadamente firme/endurecida;\n\n2. Padrão Laboratorial Típico (Hipogonadismo Hipergonadotrófico):\n   - FSH EXTREMAMENTE ELEVADO: o colapso precoce das células de Sertoli zera a síntese de Inibina B, eliminando o feedback negativo específico sobre o FSH;\n   - LH ELEVADO: as células de Leydig sofrem hiperplasia pseudonodular compensatória, mas sua capacidade esteroidogênica é deficiente;\n   - TESTOSTERONA TOTAL: encontra-se baixa ou na faixa inferior da normalidade;\n   - ESTRADIOL: frequentemente normal ou elevado (pelo aumento da aromatização periférica induzida pelo LH alto), alterando a relação testosterona/estradiol e causando ginecomastia;\n   - ESPERMOGRAMA: azoospermia não obstrutiva completa na idade adulta.',
    comentariosAlternativas: {
      A: 'Correta. A hialinização dos túbulos eleva acentuadamente o FSH e o LH por falha primária gonadal e ausência de inibina B, com azoospermia.',
      B: 'Incorreta. Não há proliferação de espermatozoides, mas sim apoptose e aplasia germinativa.',
      C: 'Incorreta. Embora apresentem maior risco de tireoidite de Hashimoto, o LH e o FSH estão marcadamente elevados, e não indetectáveis.',
      D: 'Incorreta. Afirmação sem fundamento anatômico ou fisiológico.',
    },
  },
  {
    id: 'ped-pub-097',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Síndrome de Klinefelter: Manejo Terapêutico e Reposição com Testosterona',
    isRevisao: false,
    enunciado:
      'Um jovem de 16 anos com diagnóstico confirmado de Síndrome de Klinefelter (cariótipo 47,XXY) apresenta testosterona total de 110 ng/dL, LH de 28 mUI/mL, FSH de 46 mUI/mL, queixa de astenia crônica, pilosidade corporal incipiente e baixa densidade mineral óssea. Qual é o tratamento de escolha para promover a virilização, prevenir osteoporose precoce e melhorar a qualidade de vida metabólica do paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Terapia de reposição androgênica com ésteres de testosterona de depósito intramuscular (Cipionato ou Enantato de testosterona) em doses progressivas até atingir doses plenas de adulto (200 mg a cada 2 a 3 semanas) ou formulações de undecilato de testosterona a cada 10 a 12 semanas, associada a orientações sobre preservação de fertilidade.',
      },
      {
        id: 'B',
        texto:
          'Orquiectomia bilateral profilática de emergência associada a estrógenos conjugados orais diários.',
      },
      {
        id: 'C',
        texto:
          'Bloqueio puberal definitivo com análogo de GnRH em dose dobrada por 10 anos.',
      },
      {
        id: 'D',
        texto:
          'Suplementação exclusiva de vitamina B12 e abstinência completa de água.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo Terapêutico na Síndrome de Klinefelter:\n\n1. Indicação da Reposição com Testosterona:\n   - A reposição de testosterona é o pilar central do tratamento em adolescentes e adultos com Klinefelter e hipogonadismo laboratorial;\n   - Deve ser iniciada no meio da adolescência (geralmente entre os 14 e 16 anos), assim que os níveis de LH se elevam e a testosterona torna-se insuficiente;\n\n2. Objetivos Clínicos do Tratamento Androgênico:\n   - Promover virilização adequada: desenvolvimento da barba e pelos corporais, engrossamento da voz, crescimento do pênis;\n   - Aquisição de massa muscular e redução da adiposidade visceral (combate à síndrome metabólica e resistência à insulina);\n   - Mineralização óssea adequada (prevenção primária de osteopenia e osteoporose prematura);\n   - Melhora do vigor físico, da concentração, do humor e da autoestima psicossocial;\n\n3. Preservação de Fertilidade (Tema Emergente de Alta Relevância):\n   - Embora a vasta maioria dos homens com Klinefelter seja azoospérmica no sêmen ejaculado, pequenos focos microscópicos residuais de espermatogênese podem existir no parênquima testicular de adolescentes jovens;\n   - Técnicas modernas de biópsia testicular microcirúrgica (Micro-TESE) realizadas no final da adolescência ou início da vida adulta permitem recuperar espermatozoides viáveis em 40 a 50% dos pacientes, possibilitando a paternidade biológica através de fertilização in vitro por injeção intracitoplasmática de espermatozoides (ICSI).',
    comentariosAlternativas: {
      A: 'Correta. A reposição de testosterona em doses adequadas é fundamental para virilização, saúde óssea e metabólica, e prevenção de osteoporose.',
      B: 'Incorreta. Orquiectomia e estrogênios induziriam feminilização desastrosa em um paciente masculino.',
      C: 'Incorreta. Análogos de GnRH bloqueariam ainda mais as gônadas, agravando a osteoporose e a astenia.',
      D: 'Incorreta. Conduta ineficaz e perigosa.',
    },
  },
  {
    id: 'ped-pub-098',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Outras Causas de Hipogonadismo Hipergonadotrófico: Disgenesia Pura 46,XY e Galactosemia',
    isRevisao: false,
    enunciado:
      'Considere as seguintes afirmativas sobre etiologias menos comuns de Hipogonadismo Hipergonadotrófico em Pediatria:\n\nI. Na Disgenesia Gonadal Pura 46,XY (Síndrome de Swyer), a paciente apresenta genitália externa feminina típica e útero normal ao nascimento por ausência ou mutação inativadora no gene SRY, apresentando na puberdade amenorreia primária, ausência de caracteres sexuais secundários, LH/FSH elevados e gônadas em fita com alto risco de degeneração para gonadoblastoma e disgerminoma, exigindo gonadectomia profilática precoce.\nII. Na Galactosemia Clássica congênita (deficiência de galactose-1-fosfato uridiltransferase - GALT), mesmo com dieta estrita livre de lactose desde o período neonatal, até 80-90% das meninas evoluem com falência ovariana prematura (hipogonadismo hipergonadotrófico) por toxicidade folicular direta provocada pela galactose-1-fosfato.\nIII. A Síndrome de Kallmann é caracterizada por hipogonadismo hipergonadotrófico associado à hipertrofia testicular bilateral.\n\nEstá(ão) CORRETA(S):',
    alternativas: [
      {
        id: 'A',
        texto:
          'Apenas as afirmativas I e II.',
      },
      {
        id: 'B',
        texto:
          'Apenas a afirmativa III.',
      },
      {
        id: 'C',
        texto:
          'Apenas as afirmativas II e III.',
      },
      {
        id: 'D',
        texto:
          'Todas as afirmativas estão corretas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Análise das Afirmativas sobre Hipogonadismo Hipergonadotrófico:\n\n1. Afirmativa I (Correta - Síndrome de Swyer / Disgenesia Gonadal 46,XY):\n   - Cariótipo 46,XY com falha na determinação testicular (mutação ou deleção no gene SRY em Xp/Yp ou genes afins como SOX9, WT1);\n   - Como não há testículos, não há Hormônio Anti-mülleriano (AMH) nem testosterona durante a embriogênese;\n   - Os ductos de Müller desenvolvem-se normalmente em útero, tubas e porção superior da vagina, e a genitália externa é fenotipicamente feminina típica;\n   - Na adolescência: ausência de puberdade, amenorreia primária e FSH muito elevado;\n   - Risco altíssimo de GONADOBLASTOMA (25 a 30%) devido à presença do cromossomo Y em gônadas disgenéticas, com indicação formal de gonadectomia cirúrgica profilática bilateral logo após o diagnóstico;\n\n2. Afirmativa II (Correta - Galactosemia Clássica):\n   - Erro inato do metabolismo por deficiência da enzima GALT;\n   - Apesar da introdução imediata de fórmula de soja isenta de galactose no período neonatal que salva a vida do lactente, metabólitos anômalos tóxicos e estresse oxidativo acumulam-se no tecido ovariano na vida fetal e pós-natal;\n   - A vasta maioria das meninas acometidas sofre destruição prematura dos folículos primordiais, culminando em insuficiência ovariana primária (hipogonadismo hipergonadotrófico) antes ou durante a adolescência;\n\n3. Afirmativa III (Incorreta - Síndrome de Kallmann):\n   - A Síndrome de Kallmann cursa com hipogonadismo HIPOGONADOTRÓFICO (LH e FSH baixos ou indetectáveis) e testículos atrofiados/pequenos (microrquidia), associados a anosmia, e nunca hipergonadotrófico.',
    comentariosAlternativas: {
      A: 'Correta. As afirmativas I (Swyer com risco de gonadoblastoma) e II (Galactosemia com falência ovariana tóxica) são impecáveis; a III confunde o tipo de hipogonadismo de Kallmann.',
      B: 'Incorreta. A afirmativa III está errada (Kallmann é hipogonadotrófico com atrofia testicular).',
      C: 'Incorreta. A afirmativa III está errada e a I está perfeitamente correta.',
      D: 'Incorreta. A afirmativa III é falsa.',
    },
  },
  {
    id: 'ped-pub-099',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Protocolo de Indução Puberal Feminina na Falência Ovariana Primária',
    isRevisao: false,
    enunciado:
      'Uma adolescente de 12 anos com hipogonadismo hipergonadotrófico confirmado por disgenesia gonadal necessita iniciar o protocolo médico de indução puberal. Qual princípio farmacológico orienta a introdução da terapia hormonal estrogênica e a oportunidade correta da associação do progestágeno?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A terapia deve ser iniciada com doses muito baixas de estrogênio natural (preferencialmente 17-beta estradiol transdérmico) com aumentos semestrais lentos ao longo de 2 a 3 anos para permitir o desenvolvimento anatômico normal dos ductos mamários e o estirão de crescimento; e o progestágeno cíclico só deve ser associado após cerca de 2 anos de estrogenioterapia ou após o primeiro sangramento de escape, para evitar a interrupção prematura da telarca.',
      },
      {
        id: 'B',
        texto:
          'Deve-se iniciar progesterona injetável trimestral pura no primeiro ano e só depois introduzir etinilestradiol em dose quádrupla.',
      },
      {
        id: 'C',
        texto:
          'O uso de estrogênio é estritamente proibido em qualquer idade pelo risco imediato de demência senil.',
      },
      {
        id: 'D',
        texto:
          'A indução deve ser concluída em exatamente 7 dias com injeções maciças de estrógenos de cavalo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Protocolo Padrão-Ouro de Indução Puberal Feminina:\n\n1. Escolha do Estrógeno e Via de Administração:\n   - Prefere-se o 17-BETA ESTRADIOL NATURAL em formulação TRANSDÉRMICA (adesivo matricial ou gel);\n   - Vantagens da via transdérmica: evita o efeito de primeira passagem hepática, produz níveis fisiológicos de estradiol mais estáveis e não eleva fatores de coagulação nem triglicérides;\n\n2. Escalonamento Lento e Gradual (Mimetismo da Natureza):\n   - Inicia-se com doses ultrabaixas (cerca de 1/8 a 1/6 da dose de adulto, por exemplo 6,25 a 12,5 mcg/dia em adesivo);\n   - A cada 6 meses, a dose é titulada progressivamente (25 mcg -> 37,5 mcg -> 50 mcg -> 100 mcg);\n   - O processo deve durar de 2 a 3 anos completos;\n   - Por que tão lento? Porque a glândula mamária necessita de exposição estrogênica baixa e prolongada para promover o brotamento e a ramificação adequada dos ductos (estágios de Tanner M2 a M4);\n\n3. Momento de Introduzir o Progestágeno Cíclico:\n   - NUNCA introduzir progestágeno no início da indução;\n   - A progesterona induz maturação lobular e parada da proliferação ductal; se introduzida precocemente, gera mamas tubulares e hipoplásicas e fecha epífises ósseas prematuramente;\n   - O progestágeno cíclico (Progesterona micronizada 100-200 mg/dia por 12 a 14 dias ao mês) deve ser iniciado apenas após:\n     a) Pelo menos 2 a 3 anos de estrogenioterapia prévia; OU\n     b) Ocorrência do primeiro episódio de sangramento vaginal espontâneo por escape estrogênico.',
    comentariosAlternativas: {
      A: 'Correta. Indução lenta com estrogênio natural transdérmico ao longo de 2-3 anos com progestágeno introduzido tardiamente mimetiza a puberdade normal.',
      B: 'Incorreta. Progesterona precoce bloqueia o desenvolvimento mamário ductal e não deve preceder o estrogênio.',
      C: 'Incorreta. A reposição de estrogênio é fundamental para a saúde óssea, cardiovascular, sexual e neurológica da adolescente.',
      D: 'Incorreta. Indução abrupta causaria assimetria e má-formação mamária e fechamento precoce das epífises.',
    },
  },
  {
    id: 'ped-pub-100',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Puberdade e seus Distúrbios',
    subtema: 'Caso Clínico Integrador Final: Diagnóstico Diferencial Multidisciplinar no Atraso Puberal',
    isRevisao: false,
    enunciado:
      'Considere três adolescentes de 15 anos encaminhados para a mesma sessão de ambulatório de Endocrinologia Pediátrica:\n\n- Caso 1: Menino com baixa estatura aparente, estágio G1 P1, testículos móveis de 3,0 mL, idade óssea de 12 anos e 6 meses, pai com histórico de estirão puberal tardio aos 16 anos e excelente previsão de estatura final no canal familiar;\n- Caso 2: Menino com estatura no percentil 95, proporções eunucóides (braços e pernas longos), ginecomastia bilateral dolorosa, testículos muito pequenos e endurecidos de 2,0 mL, FSH de 45 mUI/mL e LH de 22 mUI/mL;\n- Caso 3: Menino com estatura no percentil 50, infantilismo sexual (G1 P1, micropênis de 3,2 cm, testículos de 1,5 mL), anosmia congênita completa e LH e FSH indetectáveis.\n\nQual alternativa correlaciona com PRECISÃO o diagnóstico definitivo, a classificação fisiopatológica e a conduta preconizada para cada um dos três casos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Caso 1: Atraso Constitucional do Crescimento e Puberdade (ACCP / Variante Fisiológica) - conduta expectante ou curso curto de testosterona em baixa dose (50 mg IM/mês por 3-6 meses); Caso 2: Síndrome de Klinefelter (Hipogonadismo Hipergonadotrófico / Cariótipo 47,XXY) - indicação de cariótipo e início de reposição androgênica para virilização e proteção óssea; Caso 3: Síndrome de Kallmann (Hipogonadismo Hipogonadotrófico Congênito) - indicação de terapia de reposição hormonal com testosterona (ou gonadotrofinas se desejo futuro de fertilidade).',
      },
      {
        id: 'B',
        texto:
          'Caso 1: Síndrome de Turner masculina com indicação de laparotomia; Caso 2: Puberdade precoce central idiopática tratada com leuprorrelina; Caso 3: Diabetes mellitus tipo 1 descompensado tratado com insulina.',
      },
      {
        id: 'C',
        texto:
          'Todos os três casos apresentam a mesma etiologia (hipotireoidismo congênito não tratado) e devem receber exclusivamente levotiroxina sódica em alta dose.',
      },
      {
        id: 'D',
        texto:
          'Caso 1 deve realizar orquiectomia profilática; Caso 2 deve receber alta sem tratamento; Caso 3 deve ser submetido a cirurgia de rinoplastia para curar o atraso puberal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Caso Clínico Integrador Final: Síntese Diagnóstica no Atraso Puberal:\n\n1. Caso 1: Atraso Constitucional do Crescimento e Puberdade (ACCP):\n   - Padrão familiar positivo claro (pai que estirou tarde);\n   - Idade óssea atrasada compatível com a idade da altura;\n   - Testículos pré-puberais (3 mL) aguardando o despertar do eixo;\n   - Previsão estatural preservada no alvo genético;\n   - Conduta: Tranquilização/expectante ou curso curto de testosterona em baixas doses (50 mg IM/mês por 3 a 6 meses) se sofrimento emocional;\n\n2. Caso 2: Síndrome de Klinefelter (Cariótipo 47,XXY):\n   - Hipogonadismo Hipergonadotrófico clássico (FSH e LH muito elevados por falência gonadal primária);\n   - Hábito eunucoide com alta estatura, ginecomastia e testículos pequenos e endurecidos (< 4 mL);\n   - Conduta: Cariótipo confirmatório e reposição de testosterona de depósito para virilização e prevenção de osteoporose precoce;\n\n3. Caso 3: Síndrome de Kallmann (Hipogonadismo Hipogonadotrófico Congênito):\n   - Associação patognomônica de hipogonadismo hipogonadotrófico (LH e FSH indetectáveis com micropênis) e ANOSMIA congênita por falha na migração dos neurônios secretores de GnRH;\n   - Conduta: Reposição androgênica para desenvolvimento dos caracteres secundários na adolescência e protocolo futuro com gonadotrofinas (hCG e hMG/rFSH) ou bomba de GnRH pulsátil para indução de espermatogênese quando o paciente desejar fertilidade.',
    comentariosAlternativas: {
      A: 'Correta. Integra com máxima precisão o diagnóstico, o padrão laboratorial e o tratamento das três principais etiologias de puberdade atrasada.',
      B: 'Incorreta. Diagnósticos completamente incompatíveis com as vinhetas clínicas apresentadas.',
      C: 'Incorreta. Trata-se de três entidades nosológicas completamente distintas e não de hipotireoidismo comum.',
      D: 'Incorreta. Condutas estapafúrdias e totalmente errôneas.',
    },
  },
];



