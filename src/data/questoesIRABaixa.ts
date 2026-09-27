export interface RawIRABaixaQuestion {
  id: string;
  grandeArea: 'Pediatria';
  especialidade: 'Pediatria';
  tema: 'Infecções Respiratórias Inferiores';
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

export const QUESTOES_IRA_BAIXA: RawIRABaixaQuestion[] = [
  {
    id: 'ped-irab-001',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Bronquiolite Viral Aguda: Definição Clínica e Etiologia Viral Predominante',
    isRevisao: false,
    enunciado:
      'Um lactente de 3 meses de vida previamente hígido é trazido à Unidade de Pronto Atendimento pelos pais com história de coriza hialina, obstrução nasal e febre baixa (37,8 °C) há 3 dias. Há 24 horas, passou a apresentar tosse progressiva, respiração rápida e chiado no peito perceptível à ausculta sem estetoscópio. A mãe relata que é o primeiro episódio de sibilância da vida da criança e nega antecedentes de asma na família. Ao exame físico: frequência respiratória de 58 irpm, tiragem subcostal discreta, tempo expiratório prolongado, ausculta pulmonar com estertores subcrepitantes bilaterais e sibilos difusos tele-expiratórios; saturação de O2 de 94% em ar ambiente. Diante da história clínica e faixa etária, qual é o diagnóstico mais provável e o principal agente etiológico responsável por esta patologia?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Bronquiolite Viral Aguda (BVA); sendo o Vírus Sincicial Respiratório (VSR) o agente etiológico predominante, responsável por mais de 70% a 80% das infecções em lactentes.',
      },
      {
        id: 'B',
        texto:
          'Asma brônquica clássica induzida por alergia a ácaros; sendo a bactéria Mycoplasma pneumoniae o principal agente causador.',
      },
      {
        id: 'C',
        texto:
          'Pneumonia pneumocócica lobar aguda; sendo o Streptococcus pneumoniae o agente isolado em mais de 95% dos casos de sibilância inicial.',
      },
      {
        id: 'D',
        texto:
          'Laringotraqueobronquite aguda espasmódica bacteriana; sendo o Staphylococcus aureus meticilina-resistente (MRSA) o agente predominante.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Definição e Etiologia da Bronquiolite Viral Aguda (BVA):\n\n1. Conceito Clínico Clássico (Definição de McConnochie):\n   - É definida clinicamente como o PRIMEIRO EPISÓDIO DE SIBILÂNCIA associado a sinais de infecção respiratória viral baixa em crianças com MENOS DE 2 ANOS DE IDADE (com pico clássico de incidência e maior gravidade entre 2 e 6 meses de vida);\n   - A doença é precedida por pródromos catarrais de vias aéreas superiores (coriza, congestão nasal e febre baixa);\n\n2. Agentes Etiológicos Virais:\n   - VÍRUS SINCICIAL RESPIRATÓRIO (VSR): agente isolado com maior frequência, responsável por 70% a 80% dos casos de bronquiolite no período sazonal (outono e inverno);\n   - Outros agentes virais relevantes:\n     * Rinovírus humano (segunda causa mais comum, frequentemente associado a sibilância em lactentes mais velhos);\n     * Metapneumovírus humano (hMPV);\n     * Bocavírus humano;\n     * Vírus Parainfluenza (especialmente tipo 3);\n     * Adenovírus (menos frequente, porém associado a formas necrosantes graves e bronquiolite obliterante residual);\n     * Vírus Influenza A e B.',
    comentariosAlternativas: {
      A: 'Correta. O primeiro episódio de sibilância precedido de pródromos virais em lactente jovem define BVA, cujo principal patógeno é o VSR.',
      B: 'Incorreta. Asma não é diagnosticada no primeiro episódio em lactente de 3 meses, e Mycoplasma acomete escolares e adolescentes.',
      C: 'Incorreta. Pneumonia pneumocócica é bacteriana alveolar e cursa com febre alta e estertores crepitantes localizados, não sibilos difusos bilaterais.',
      D: 'Incorreta. Laringotraqueíte acomete vias aéreas superiores causando estridor laríngeo inspiratório e tosse ladrante, não sibilância expiratória distal.',
    },
  },
  {
    id: 'ped-irab-002',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'História Natural e Dinâmica Temporal dos Sintomas na Bronquiolite Viral Aguda',
    isRevisao: false,
    enunciado:
      'Uma mãe procura atendimento pediátrico no 2º dia de coriza hialina e tosse seca de seu filho de 4 meses, que apresenta bom estado geral, frequência respiratória normal (38 irpm) e ausculta pulmonar limpa. O pediatra diagnostica resfriado comum inicial com suspeita de infecção pelo Vírus Sincicial Respiratório (VSR). Ao orientar os pais sobre a HISTÓRIA NATURAL da Bronquiolite Viral Aguda, qual evolução temporal dos sintomas deve ser destacada como período crítico de piora clínica e momento de maior esforço respiratório?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A doença costuma apresentar piora dos sinais respiratórios (aumento do desconforto, taquipneia e sibilância) entre o 3º e o 5º dia de evolução, momento em que a inflamação bronquiolar atinge o pico, com melhora gradual subsequente na maioria dos casos entre 7 e 14 dias.',
      },
      {
        id: 'B',
        texto:
          'A gravidade máxima ocorre invariavelmente nas primeiras 6 horas de vida e a resolução completa ocorre em exatas 24 horas.',
      },
      {
        id: 'C',
        texto:
          'A fase inflamatória dura no máximo 1 dia e é seguida de infecção bacteriana pulmonar necrosante obrigatória a partir do 2º dia.',
      },
      {
        id: 'D',
        texto:
          'O pico dos sintomas ocorre exclusivamente entre o 21º e o 30º dia de doença, com necessidade universal de ventilação mecânica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'História Natural da Bronquiolite Viral Aguda:\n\n1. Cronologia Típica da Doença:\n   - Dias 1 a 2: Pródromos de Vias Aéreas Superiores (VAS) - coriza hialina, espirros, obstrução nasal e febre baixa (geralmente < 38,5 °C);\n   - Dias 3 a 5 (PICO DA DOENÇA): Ocorre a propagação do vírus para as vias aéreas inferiores por continuidade epitelial. A descamação celular, acúmulo de muco e infiltrado peribronquiolar atingem intensidade máxima. É nessa janela que surgem taquipneia, tiragens, sibilância e maior risco de hipoxemia;\n   - Dias 6 a 10: Início da fase de estabilização e recuperação clínica progressiva, com diminuição do trabalho respiratório e melhora da ingesta alimentar;\n   - Dias 10 a 14: Resolução do desconforto respiratório agudo na vasta maioria dos pacientes;\n\n2. Sintomas Residuais:\n   - A tosse residual pode persistir por 3 a 4 semanas em até 40% das crianças, decorrente da lenta regeneração do epitélio ciliar dos bronquíolos danificado pelo VSR;\n   - A conscientização dos pais sobre o "pico entre o 3º e 5º dia" é fundamental para a vigilância de sinais de alarme e retorno precoce.',
    comentariosAlternativas: {
      A: 'Correta. A piora entre o 3º e 5º dia reflete a descamação epitelial máxima nos bronquíolos, com resolução habitual em 10 a 14 dias.',
      B: 'Incorreta. BVA não atinge pico em 6 horas nem se resolve em 24 horas.',
      C: 'Incorreta. A sobreinfecção bacteriana na BVA é rara (< 1-2%) e não é obrigatória.',
      D: 'Incorreta. O pico ocorre na primeira semana; aos 21-30 dias a criança já se encontra em fase de recuperação final.',
    },
  },
  {
    id: 'ped-irab-003',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Fisiopatologia da Bronquiolite: Obstrução Mecânica vs Ausência de Broncoespasmo Verdadeiro',
    isRevisao: false,
    enunciado:
      'A compreensão da fisiopatologia celular da Bronquiolite Viral Aguda pelo Vírus Sincicial Respiratório é indispensável para fundamentar por que certos fármacos comumente utilizados na asma não apresentam eficácia comprovada na BVA. Qual alteração histopatológica primária ocorre nos bronquíolos terminais e respiratórios do lactente acometido por BVA?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Necrose e descamação do epitélio ciliar bronquiolar associadas a edema da submucosa e acúmulo intraluminal de tampões densos de muco, fibrina e detritos celulares, gerando obstrução mecânica e aumento da resistência aérea.',
      },
      {
        id: 'B',
        texto:
          'Hipertrofia congênita massiva das camadas musculares lisas bronquiolares com broncoespasmo irreversível mediado por IgE.',
      },
      {
        id: 'C',
        texto:
          'Destruição bacteriana proteolítica dos septos alveolares com formação de cavitações tuberculosas agudas.',
      },
      {
        id: 'D',
        texto:
          'Fibrose intersticial definitiva com colapso do parênquima pulmonar mediada por deposição de cristais de ácido úrico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisiopatologia da Bronquiolite Viral Aguda:\n\n1. Invasão Viral e Lesão Citopática:\n   - O VSR liga-se aos receptores das células epiteliais ciliadas dos bronquíolos terminais;\n   - A replicação viral induz necrose das células epiteliais ciliadas e rompimento da barreira mecânica;\n\n2. Tríade Obstrutiva Bronquiolar:\n   1. DESCAMAÇÃO EPITELIAL: fragmentos celulares necróticos caem no interior do lúmen bronquiolar;\n   2. EDEMA INFLAMATÓRIO: infiltração peribronquiolar de linfócitos, monócitos e neutrófilos com edema acentuado da submucosa;\n   3. HIPERSECREÇÃO DE MUCO: tampões espessos formados por muco denso, células epiteliais descamadas e fibrina;\n\n3. Por que a BVA difere da Crise Asmática?\n   - No lactente jovem (< 6 meses), os bronquíolos possuem ESCASSA musculatura lisa brônquica e poucos receptores beta-2 adrenérgicos responsivos;\n   - O mecanismo de obstrução é predominantemente MECÂNICO (lúmen ocluído por muco e detritos celulares) e NÃO um broncoespasmo muscular;\n   - Esse fato biológico explica perfeitamente por que os broncodilatadores beta-2 agonistas (como o salbutamol) não revertem a obstrução na grande maioria dos lactentes com BVA.',
    comentariosAlternativas: {
      A: 'Correta. A necrose celular, edema e tampões intraluminares de muco causam a obstrução mecânica característica da BVA.',
      B: 'Incorreta. Lactentes jovens têm escassa musculatura lisa nos bronquíolos; o mecanismo da BVA não é broncoespasmo mediado por IgE.',
      C: 'Incorreta. BVA é viral, acomete bronquíolos e não forma cavitações tuberculosas.',
      D: 'Incorreta. Não há deposição de ácido úrico ou fibrose intersticial aguda.',
    },
  },
  {
    id: 'ped-irab-004',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Semiologia Respiratória e Sinais de Gravidade no Exame Físico da BVA',
    isRevisao: false,
    enunciado:
      'Durante o plantão na emergência pediátrica, você avalia um lactente de 2 meses de vida que está no 4º dia de sintomas respiratórios por bronquiolite. Ao exame físico, você identifica: frequência respiratória de 72 irpm, batimento de asa de nariz, tiragem subcostal acentuada e tiragem de fúrcula esternal ("retração supraesternal"), gemência expiratória intermitente e tempo expiratório prolongado. A saturação de O2 em ar ambiente é de 87%. Qual mecanismo fisiológico explica a GEMÊNCIA EXPIRATÓRIA e o que ela sinaliza clinicamente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de fechamento reflexo parcial das cordas vocais durante a expiração na tentativa de gerar uma pressão positiva expiratória final intrínseca (auto-PEEP) para evitar o colapso alveolar expiratório; sinalizando exaustão respiratória iminente e desconforto grave.',
      },
      {
        id: 'B',
        texto:
          'Trata-se de vibração voluntária das amígdalas palatinas que a criança utiliza para chamar a atenção dos pais, sem significado clínico.',
      },
      {
        id: 'C',
        texto:
          'É resultado da regurgitação ácida gástrica que queima as cordas vocais, indicando apenas esofagite leve.',
      },
      {
        id: 'D',
        texto:
          'Sinaliza alcalose metabólica severa com hiperventilação de Kussmaul isolada.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisiologia da Gemência Expiratória no Lactente com Desconforto Respiratório:\n\n1. Mecanismo Fisiológico da Gemência:\n   - A gemência ("grunting") é um mecanismo compensatório reflexo de proteção pulmonar;\n   - O lactente fecha parcialmente a glote / pregas vocais durante a fase expiratória;\n   - Esse estreitamento glótico retém uma coluna de ar sob pressão nas vias aéreas distais no final da expiração, gerando uma AUTO-PEEP (pressão positiva intrínseca ao final da expiração);\n   - Essa pressão positiva impede o colapso alveolar precoce e a perda da Capacidade Residual Funcional (CRF), auxiliando na troca gasosa;\n\n2. Significado Clínico Semiológico:\n   - A gemência expiratória é um sinal cardinal de ESFORÇO RESPIRATÓRIO GRAVE / FADIGA IMINENTE da musculatura respiratória;\n   - Indica perda acentuada de complacência pulmonar e alto risco de colapso alveolar e apneia;\n   - Exige intervenção imediata: suporte ventilatório (oxigenoterapia de alto fluxo ou CPAP/VNI) e monitorização contínua em leito de observação ou UTI pediátrica.',
    comentariosAlternativas: {
      A: 'Correta. A gemência expiratória é o fechamento parcial da glote para gerar PEEP intrínseca e evitar colapso alveolar, indicando gravidade acentuada.',
      B: 'Incorreta. Lactentes de 2 meses não produzem gemência de forma voluntária.',
      C: 'Incorreta. Não é causada por refluxo, mas sim por colapso mecânico distal pulmonar.',
      D: 'Incorreta. Indica acidose respiratória/hipoxemia grave, não alcalose metabólica.',
    },
  },
  {
    id: 'ped-irab-005',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Achados Radiológicos Típicos da Bronquiolite Viral Aguda: Hiperinsuflação e Atelectasias',
    isRevisao: false,
    enunciado:
      'Um lactente de 5 meses com quadro clínico compatível com Bronquiolite Viral Aguda moderada realiza radiografia de tórax em incidência posteroanterior e perfil. Quais achados radiológicos são clássicos e esperados na BVA decorrentes do aprisionamento aéreo por mecanismo de válvula nos bronquíolos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sinais de hiperinsuflação pulmonar difusa (retificação dos arcos costais, aumento dos espaços intercostais, hipertransparência pulmonar e rebaixamento/retificação das cúpulas diafragmáticas), espessamento peribroncovascular e atelectasias subsegmentares laminares.',
      },
      {
        id: 'B',
        texto:
          'Consolidação lobar homogênea com broncograma aéreo evidente ocupando todo o pulmão esquerdo com derrame pleural loculado maciço.',
      },
      {
        id: 'C',
        texto:
          'Pneumotórax hipertensivo bilateral com colapso cardiovascular imediato em 100% dos lactentes.',
      },
      {
        id: 'D',
        texto:
          'Calcificações miliares difusas em ambos os pulmões compatíveis com silicose avançada.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Achados Radiológicos Típicos na Bronquiolite Viral Aguda:\n\n1. Mecanismo de Obstrução em Válvula:\n   - Como as vias aéreas expandem na inspiração e colabam na expiração, o ar entra nos alvéolos durante a inspiração mas encontra dificuldade para sair pela presença de muco e detritos nos bronquíolos estreitados;\n   - Isso gera aprisionamento aéreo distal (air trapping) e HIPERINSUFLAÇÃO PULMONAR DIFUSA;\n\n2. Sinais Radiológicos de Hiperinsuflação:\n   - Retificação e horizontalização dos arcos costais posteriores;\n   - Aumento da amplitude dos espaços intercostais;\n   - Hipertransparência difusa dos campos pleuropulmonares (pulmões mais "escuros" no raio-x);\n   - Rebaixamento e achatamento/retificação das cúpulas diafragmáticas (visualização de mais de 8 a 9 arcos costais posteriores);\n   - Aumento do diâmetro anteroposterior do tórax no raio-x em perfil (retificação esternal);\n\n3. Atelectasias Subsegmentares / Laminares:\n   - Quando o tampão de muco oclui 100% da luz de um bronquíolo, o ar alveolar a jusante é absorvido, colapsando aquele segmento pulmonar;\n   - Isso forma opacidades lineares ou laminares ("atelectasias"), que mudam de posição ou se desfazem em 24 a 48 horas.',
    comentariosAlternativas: {
      A: 'Correta. Hiperinsuflação difusa, diafragmas rebaixados e atelectasias subsegmentares são os achados característicos da BVA.',
      B: 'Incorreta. Consolidação lobar homogênea com broncograma e derrame pleural sugere pneumonia bacteriana bacteriana complicada, e não BVA pura.',
      C: 'Incorreta. Pneumotórax é uma complicação rara e não um achado típico da doença.',
      D: 'Incorreta. Silicose é doença ocupacional de adultos expostos à sílica.',
    },
  },
  {
    id: 'ped-irab-006',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Diagnóstico Diferencial Radiológico: Atelectasia Laminar vs Pneumonia Bacteriana Secundária',
    isRevisao: false,
    enunciado:
      'Um lactente de 3 meses com BVA moderada no 4º dia de doença realiza radiografia de tórax que evidencia uma opacidade triangular densa em lobo superior direito com desvio da fissura horizontal para cima e elevação ipsilateral da cúpula diafragmática. A criança apresenta febre baixa (37,9 °C), hemograma com 8.500 leucócitos/mm³ sem desvio à esquerda e PCR normal. O médico assistente suspeita de atelectasia e não de condensação pneumônica bacteriana. Qual característica clínica e radiológica diferencia a ATELECTASIA de uma PNEUMONIA BACTERIANA?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A atelectasia cursa com redução de volume pulmonar (sinais de retração, como desvio da fissura e das estruturas mediastinais para o lado da lesão) e tem caráter transitório e migratório; enquanto a pneumonia cursa com efeito expansivo/neutro, broncogramas aéreos e clínica com febre alta e leucocitose.',
      },
      {
        id: 'B',
        texto:
          'A atelectasia sempre cursa com tosse com expectoração purulenta fétida e a pneumonia cursa com ausência total de ruídos adventícios.',
      },
      {
        id: 'C',
        texto:
          'A atelectasia ocorre exclusivamente no fêmur e a pneumonia ocorre nos rins.',
      },
      {
        id: 'D',
        texto:
          'Não existe diferença; qualquer opacidade na radiografia de lactente exige obrigatoriamente antibioticoterapia de amplo espectro por 21 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diferenciação entre Atelectasia e Pneumonia Bacteriana na BVA:\n\n1. Sinais Radiológicos de Atelectasia (Perda Volumétrica):\n   - A atelectasia é o colapso do parênquima pulmonar decorrente da obstrução completa da luz bronquiolar por tampão mucoso;\n   - Sinais cardinais de PERDA DE VOLUME:\n     * Desvio de estruturas anatômicas EM DIREÇÃO À LESÃO (tração da traqueia, do mediastino ou das fissuras interlobares para o lado da opacidade);\n     * Elevação da hemicúpula diafragmática ipsilateral;\n     * Aproximação dos arcos costais adjacentes;\n   - Natureza dinâmica: a atelectasia pode surgir e desaparecer em poucas horas ou mudar de localização após aspiração de vias aéreas ou mudança postural;\n\n2. Sinais de Consolidação Pneumônica Bacteriana:\n   - O parênquima alveolar é preenchido por exsudato inflamatório denso (pus);\n   - Mantém ou AUMENTA discretamente o volume do lobo acometido (não há retração de estruturas adjacentes);\n   - Presença clássica de BRONCOGRAMAS AÉREOS patentes no interior da opacidade homogênea;\n   - Correlação clínica: febre alta persistente (> 38,5–39 °C), toxemia, leucocitose com desvio à esquerda e PCR francamente elevada;\n\n3. Relevância Prática:\n   - O reconhecimento de atelectasias evita a prescrição inadvertida e abusiva de antibióticos na bronquiolite viral.',
    comentariosAlternativas: {
      A: 'Correta. A atelectasia é retrátil (perda de volume com desvio ipsilateral de fissuras) e transitória, sem marcadores inflamatórios bacterianos elevados.',
      B: 'Incorreta. Lactentes pequenos deglutem secreções e não expectoram escarro purulento voluntário.',
      C: 'Incorreta. Afirmação anatomicamente sem nexo.',
      D: 'Incorreta. Prescrever antibióticos para atelectasias na BVA é um dos erros mais comuns de sobretratamento.',
    },
  },
  {
    id: 'ped-irab-007',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Recomendações da SBP e AAP sobre Broncodilatadores Beta-2 Agonistas na BVA',
    isRevisao: false,
    enunciado:
      'Um lactente de 4 meses é admitido na emergência com quadro típico de primeiro episódio de Bronquiolite Viral Aguda no 3º dia de evolução, com tiragem intercostal moderada e SatO2 de 93% em ar ambiente. O residente de pediatria prescreve 3 ciclos consecutivos de inalação com Salbutamol spray acoplado a espaçador valvulado na dose de 4 jatos a cada 20 minutos. De acordo com as diretrizes e consensos vigentes da Sociedade Brasileira de Pediatria (SBP) e da Academia Americana de Pediatria (AAP), qual é a recomendação formal sobre o uso de broncodilatadores beta-2 agonistas na BVA típica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Os broncodilatadores beta-2 agonistas NÃO são recomendados para o uso rotineiro no tratamento da Bronquiolite Viral Aguda, pois não demonstraram redução nas taxas de internação, melhora na saturação de oxigênio ou encurtamento do tempo de hospitalização em ensaios clínicos controlados.',
      },
      {
        id: 'B',
        texto:
          'O salbutamol é a medicação padrão-ouro obrigatória de primeira linha que cura a infecção pelo VSR em 100% dos lactentes em 2 horas.',
      },
      {
        id: 'C',
        texto:
          'Devem ser administrados exclusivamente por via oral na forma de xarope contínuo por 6 meses.',
      },
      {
        id: 'D',
        texto:
          'O salbutamol deve ser associado obrigatoriamente a aminofilina intravenosa contínua em todos os lactentes com sibilância.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Evidências sobre Beta-2 Agonistas na Bronquiolite Viral Aguda (SBP / AAP):\n\n1. Recomendação das Diretrizes Contemporâneas:\n   - "Os médicos NÃO devem administrar broncodilatadores (como salbutamol, fenoterol ou terbutalina) a lactentes com diagnóstico de bronquiolite viral aguda de rotina" (Forte Recomendação);\n\n2. Fundamentação Científica e Fisiopatológica:\n   - Revisões sistemáticas robustas (Cochrane, AAP, SBP) demonstraram de forma categórica que o salbutamol NÃO reduz a taxa de internação hospitalar, NÃO reduz a duração da internação e NÃO melhora a saturação de O2 a médio prazo;\n   - A obstrução na BVA é provocada por edema de submucosa e plugs de muco/detritos celulares, e não por espasmo de musculatura lisa;\n\n3. Efeitos Adversos dos Beta-2 Agonistas no Lactente:\n   - Taquicardia importante e arritmias cardíacas;\n   - Tremores, irritabilidade e agitação (que elevam o consumo metabólico de oxigênio);\n   - Piora paradoxal da hipoxemia transitória (por vasodilatação pulmonar induzida pelo beta-2 em alvéolos mal ventilados, acentuando o distúrbio ventilação-perfusão - V/Q mismatch);\n\n4. Exceções e Prova Terapêutica:\n   - Em lactentes maiores (> 6 a 12 meses) com história pessoal de dermatite atópica ou história familiar de primeiro grau de asma/asma grave, uma prova terapêutica isolada pode ser avaliada; se não houver melhora clínica objetiva após 15 a 30 minutos, o broncodilatador DEVE ser imediatamente suspenso.',
    comentariosAlternativas: {
      A: 'Correta. Ensaios clínicos demonstraram ausência de benefício clínico relevante, contraindicando o uso rotineiro de beta-2 agonistas na BVA.',
      B: 'Incorreta. Salbutamol não cura vírus nem altera a história natural da infecção.',
      C: 'Incorreta. Xaropes beta-2 orais são ineficazes e contraindicados pelo risco elevado de paraefeitos sistêmicos.',
      D: 'Incorreta. Aminofilina possui estreita faixa terapêutica e alto risco de toxicidade fatal, estando proscrita na BVA.',
    },
  },
  {
    id: 'ped-irab-008',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Recomendações da SBP e AAP sobre Corticoterapia Sistêmica ou Inalatória na BVA',
    isRevisao: false,
    enunciado:
      'Um médico plantonista prescreve Prednisolona oral na dose de 2 mg/kg/dia por 5 dias para um lactente de 3 meses internado com Bronquiolite Viral Aguda moderada por VSR. Com base nas diretrizes clínicas da Sociedade Brasileira de Pediatria (SBP) e da Academia Americana de Pediatria (AAP), qual é a recomendação formal sobre o uso de CORTICOIDES (orais, parenterais ou inalatórios) na BVA?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Os corticosteroides (sistêmicos ou inalatórios) NÃO devem ser administrados a crianças com bronquiolite viral aguda, pois múltiplos ensaios clínicos randomizados comprovaram que não reduzem as taxas de hospitalização, não alteram a gravidade da doença e podem prolongar a excreção viral.',
      },
      {
        id: 'B',
        texto:
          'Os corticoides são formalmente indicados em altas doses para erradicar o vírus do organismo em 12 horas.',
      },
      {
        id: 'C',
        texto:
          'A corticoterapia sistêmica é obrigatória e deve ser mantida profilaticamente até a adolescência.',
      },
      {
        id: 'D',
        texto:
          'Apenas a dexametasona intramuscular tem eficácia comprovada, desde que associada a antibióticos macrolídeos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Corticoterapia na Bronquiolite Viral Aguda:\n\n1. Posição Unânime das Sociedades de Especialidade:\n   - Tanto a Academia Americana de Pediatria (AAP) quanto a Sociedade Brasileira de Pediatria (SBP) e o National Institute for Health and Care Excellence (NICE) CONTRAINDICAM FORMALMENTE o uso de corticosteroides no manejo da BVA;\n\n2. Evidências dos Ensaios Clínicos:\n   - O maior estudo multicêntrico randomizado já conduzido na pediatria (Corneli et al. - New England Journal of Medicine) avaliou dexametasona vs placebo em centenas de lactentes com BVA e concluiu que o corticoide NÃO reduz internações, NÃO reduz o tempo de permanência hospitalar e NÃO melhora os escores clínicos;\n   - Além disso, os corticoides exercem efeito imunossupressor transitório, PROLONGANDO O TEMPO DE EXCREÇÃO VIRAL do VSR no trato respiratório;\n\n3. Corticoides Inalatórios (Budesonida/Fluticasona):\n   - Também não possuem eficácia no tratamento da fase aguda nem na prevenção de sibilância pós-bronquiolite;\n   - Portanto, a corticoterapia é uma conduta considerada iatrogênica e desnecessária na BVA típica.',
    comentariosAlternativas: {
      A: 'Correta. Corticoides sistêmicos e inalatórios não apresentam eficácia na BVA e prolongam o período de transmissão e excreção do VSR.',
      B: 'Incorreta. Corticoides não erradicam vírus; pelo contrário, podem aumentar a replicação viral.',
      C: 'Incorreta. Uso crônico de corticoide em lactente traria graves sequelas no crescimento, hipertensão e imunossupressão.',
      D: 'Incorreta. Dexametasona não tem benefício demonstrado na BVA típica, independentemente de macrolídeos.',
    },
  },
  {
    id: 'ped-irab-009',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Uso de Solução Salina Hipertônica a 3% na Bronquiolite Viral Aguda: Evidências e Limites',
    isRevisao: false,
    enunciado:
      'Em relação à inalação com solução salina hipertônica a 3% no manejo da Bronquiolite Viral Aguda em lactentes, qual afirmativa expressa a melhor síntese das evidências científicas e a recomendação atual das diretrizes de emergência pediátrica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A salina hipertônica a 3% NÃO é recomendada para o atendimento inicial no pronto-socorro/sala de emergência, pois não reduz as taxas de internação imediata; embora possa proporcionar discreta redução no tempo de permanência hospitalar em lactentes já internados em enfermaria sob nebulizações regulares.',
      },
      {
        id: 'B',
        texto:
          'A salina hipertônica a 3% cura imediatamente a lesão tecidual do epitélio ciliar e deve ser prescrita em aerossol contínuo em domicílio.',
      },
      {
        id: 'C',
        texto:
          'É estritamente contraindicada em qualquer situação por causar fibrose cística adquirida em 100% dos pacientes.',
      },
      {
        id: 'D',
        texto:
          'Deve ser utilizada exclusivamente por infusão intravenosa rápida em bolus de 100 mL/kg.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Evidências sobre a Solução Salina Hipertônica a 3% na BVA:\n\n1. Mecanismo Fisiológico Proposto:\n   - A inalação de solução com maior tonicidade osmótica atrai água para o interior da luz bronquiolar, hidratando o muco denso e desidratando o edema de submucosa, o que facilita o clareamento mucociliar;\n\n2. Evidência no Pronto-Socorro / Departamento de Emergência:\n   - Ensaios clínicos multicêntricos demonstraram que o uso agudo de salina a 3% na emergência NÃO reduz a taxa de admissão hospitalar quando comparada à solução salina isotônica a 0,9%;\n   - Por essa razão, a AAP e a SBP NÃO recomendam o uso rotineiro no atendimento inicial de urgência;\n\n3. Evidência no Paciente Hospitalizado (Enfermaria):\n   - Em pacientes já internados, nebulizações repetidas (a cada 6 a 8 horas) demonstraram redução modesta (cerca de 10 a 24 horas) no tempo total de internação em algumas meta-análises;\n   - Cuidados: em alguns lactentes hiporresponsivos, a salina hipertônica pode induzir tosse irritativa excessiva ou broncoespasmo reflexo transitório.',
    comentariosAlternativas: {
      A: 'Correta. A salina a 3% não previne internação no pronto-socorro, tendo benefício discreto apenas em pacientes já hospitalizados.',
      B: 'Incorreta. Não cura a necrose epitelial e não deve ser usada de rotina em domicílio.',
      C: 'Incorreta. Não causa fibrose cística (que é uma doença genética monogênica recessiva do gene CFTR).',
      D: 'Incorreta. A salina 3% na BVA é exclusivamente inalatória; infusão venosa rápida de salina 3% causaria hipernatremia grave e mielinólise pontina.',
    },
  },
  {
    id: 'ped-irab-010',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Fisioterapia Respiratória Motora e Drenagem Postural na Fase Aguda da BVA',
    isRevisao: false,
    enunciado:
      'Uma fisioterapeuta de plantão na enfermaria pediátrica recebe a solicitação de realizar fisioterapia respiratória convencional com técnicas de drenagem postural, vibrocompressão torácica e tapotagem em um lactente de 3 meses no 4º dia de Bronquiolite Viral Aguda moderada. De acordo com as diretrizes da SBP e estudos clínicos randomizados, qual é a orientação formal sobre a FISIOTERAPIA RESPIRATÓRIA MOTORA CONVENCIONAL na BVA aguda?',
    alternativas: [
      {
        id: 'A',
        texto:
          'NÃO é recomendada na rotina da BVA aguda, pois não melhora os escores de esforço respiratório, não reduz o tempo de internação e aumenta o estresse, a agitação, o choro e o consumo metabólico de oxigênio do lactente.',
      },
      {
        id: 'B',
        texto:
          'É a única conduta obrigatória capaz de desobstruir os bronquíolos em 15 minutos, dispensando qualquer uso de oxigênio.',
      },
      {
        id: 'C',
        texto:
          'Deve ser realizada vigorosamente a cada 30 minutos em posição de Trendelenburg com cabeça pendente.',
      },
      {
        id: 'D',
        texto:
          'A tapotagem torácica é eficaz apenas quando acompanhada de massagem cardíaca profilática.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisioterapia Respiratória na Bronquiolite Viral Aguda:\n\n1. Posição das Diretrizes da SBP e Consensos Internacionais:\n   - A Fisioterapia Respiratória Motora Convencional (tapotagem, vibrocompressão torácica, drenagem postural e manobras expiratórias forçadas) NÃO DEVE SER UTILIZADA DE ROTINA em lactentes com bronquiolite viral aguda não complicada;\n\n2. Justificativa Baseada em Evidências:\n   - Múltiplas revisões sistemáticas da Cochrane comprovaram que a fisioterapia torácica motora não altera o curso da doença, não reduz a necessidade de oxigênio e não encurta o tempo de internação hospitalar;\n   - Pior do que ser ineficaz, a manipulação mecânica vigorosa do tórax do lactente gera grande desconforto, dor, agitação e choro;\n   - O choro vigoroso acentua o colapso dinâmico das vias aéreas inferiores, precipita episódios de dessaturação de oxigênio e eleva o trabalho e o consumo de oxigênio da musculatura;\n\n3. Papel Útil Permitido:\n   - Apenas a aspiração suave e criteriosa de secreções da nasofaringe e vias aéreas superiores com soro fisiológico está indicada para alívio da obstrução alta.',
    comentariosAlternativas: {
      A: 'Correta. A fisioterapia respiratória motora convencional não melhora desfechos e aumenta o estresse e o consumo de oxigênio do lactente.',
      B: 'Incorreta. Fisioterapia não desobstrui bronquíolos terminais microscópicos ocluídos por necrose epitelial.',
      C: 'Incorreta. Trendelenburg e manobras forçadas facilitam refluxo gastroesofágico e broncoaspiração.',
      D: 'Incorreta. Massagem cardíaca em paciente com pulso e ritmo perfundido é erro médico grave.',
    },
  },
  {
    id: 'ped-irab-011',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Uso Racional de Antibióticos e Prevenção de Sobretratamento na BVA',
    isRevisao: false,
    enunciado:
      'Um lactente de 4 meses com diagnóstico clínico de Bronquiolite Viral Aguda moderada encontra-se internado sob oxigenoterapia em cânula nasal. Apresenta temperatura axilar de 38,2 °C, frequência respiratória de 56 irpm e estertores com sibilos difusos. O médico do pronto-atendimento prescreveu amoxicilina com clavulanato intravenoso por considerar que "a febre persistente e o esforço respiratório indicam pneumonia bacteriana associada". De acordo com os consensos de infectologia pediátrica e a diretriz da AAP/SBP, qual é a conduta correta sobre a ANTIBIOTICOTERAPIA na BVA?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Os antibióticos NÃO devem ser prescritos rotineiramente na BVA, uma vez que a infecção é viral e a incidência de infecção bacteriana secundária pulmonar é extremamente baixa (< 1% a 2%), devendo a antibioticoterapia ser reservada apenas para casos com evidência inequívoca de infecção bacteriana concomitante.',
      },
      {
        id: 'B',
        texto:
          'O uso de antibióticos de amplo espectro é obrigatório em todos os lactentes com BVA e febre superior a 37,5 °C para prevenir meningite bacteriana.',
      },
      {
        id: 'C',
        texto:
          'A presença de estertores pulmonares em lactentes é sinônimo obrigatório de pneumonia por Staphylococcus aureus e exige vancomicina imediata.',
      },
      {
        id: 'D',
        texto:
          'Todo lactente com sibilância deve receber azitromicina oral por 6 meses consecutivos como imunomodulador primário.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Antibioticoterapia na Bronquiolite Viral Aguda:\n\n1. Racionalidade Terapêutica:\n   - A BVA é uma doença de ETIOLOGIA ESTRITAMENTE VIRAL (VSR, Rinovírus, etc.);\n   - Antibióticos não exercem nenhuma ação sobre vírus;\n   - A taxa de coinfecção ou sobreinfecção bacteriana pulmonar (pneumonia bacteriana secundária) em lactentes internados com BVA típica é EXTREMAMENTE BAIXA, descrita na literatura em menos de 1% a 2% dos casos;\n   - A febre baixa a moderada (37,8 a 38,5 °C) faz parte da resposta inflamatória viral fisiológica e NÃO indica infecção bacteriana bacteriana;\n\n2. Exceções em que o Antibiótico Está Indicado:\n   - Presença de Otite Média Aguda (OMA) bacteriana concomitante evidente à otoscopia (complicação comum observada em 10 a 20% dos lactentes com VSR);\n   - Infecção do Trato Urinário (ITU) associada (especialmente em lactentes febris < 2 meses);\n   - Piora clínica abrupta com instabilidade hemodinâmica, choque séptico ou consolidação alveolar extensa com derrame pleural na radiografia de tórax;\n\n3. Impacto do Uso Indiscriminado:\n   - O uso incorreto de antibióticos na BVA seleciona bactérias multirresistentes, causa diarreia associada a antibióticos e eleva custos desnecessariamente.',
    comentariosAlternativas: {
      A: 'Correta. A infecção é viral e a taxa de sobreinfecção bacteriana pulmonar é inferior a 1-2%, contraindicando antibióticos na rotina.',
      B: 'Incorreta. Febre baixa a moderada é comum no curso viral do VSR e não justifica antibiótico.',
      C: 'Incorreta. Estertores subcrepitantes na BVA decorrem de secreções bronquiolares e não de estafilococo.',
      D: 'Incorreta. Macrolídeos prolongados não alteram o desfecho da BVA e geram resistência antimicrobiana.',
    },
  },
  {
    id: 'ped-irab-012',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'O Pilar Central do Tratamento da BVA Baseado em Evidências: Suporte Clínico',
    isRevisao: false,
    enunciado:
      'Considerando as evidências científicas acumuladas e as recomendações das diretrizes nacionais e internacionais (SBP, AAP, NICE), qual alternativa sintetiza os pilares do VERDADEIRO MANEJO CLÍNICO EFICAZ da Bronquiolite Viral Aguda no lactente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tratamento de suporte com desobstrução e lavagem nasal suave com soro fisiológico 0,9% antes das mamadas, manutenção da hidratação com dieta fracionada e oxigenoterapia umidificada apenas se a saturação de O2 for inferior a 90% a 92%.',
      },
      {
        id: 'B',
        texto:
          'Tríplice terapia medicamentosa precoce com salbutamol inalatório de hora em hora, prednisolona oral e amoxicilina profilática.',
      },
      {
        id: 'C',
        texto:
          'Intubação orotraqueal imediata profilática em todos os lactentes com coriza e tosse no primeiro dia de sintomas.',
      },
      {
        id: 'D',
        texto:
          'Jejum absoluto por 7 dias associado a infusão de albumina humana hipertônica em todos os casos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Os Pilares do Manejo Baseado em Evidências na BVA:\n\n1. O Princípio "Menos é Mais":\n   - A bronquiolite viral aguda é uma condição autolimitada, cuja terapêutica comprovadamente eficaz baseia-se no SUPORTE CLÍNICO CUIDADOSO e na VIGILÂNCIA DE SINAIS DE ALARME;\n\n2. Pilares Fundamentais do Suporte:\n   1. DESOBSTRUÇÃO NASAL E HIGIENE:\n      - Os lactentes jovens são respiradores nasais preferenciais e obrigatórios;\n      - A obstrução das vias aéreas superiores por secreção catarral espessa responde por grande parte do esforço respiratório observado;\n      - A instilação e lavagem nasal com solução fisiológica 0,9% antes das mamadas e do sono promove alívio sintomático dramático e imediato;\n   2. SUPORTE NUTRICIONAL E HIDRATAÇÃO ADEQUADA:\n      - Manutenção do aleitamento materno em mamadas menores e mais frequentes (fracionadas);\n      - Se frequência respiratória > 60-70 irpm ou esforço grave, ofertar alimentação por sonda nasogástrica (SNG) para prevenir broncoaspiração;\n   3. SUPORTE DE OXIGÊNIO QUANDO INDICADO:\n      - Oxigenoterapia por cânula nasal umidificada se saturação de O2 < 90% (AAP) ou < 90–92% (SBP).',
    comentariosAlternativas: {
      A: 'Correta. Desobstrução nasal com SF 0,9%, hidratação fracionada e oxigênio se hipoxemia comprovam os únicos pilares com evidência sólida de benefício.',
      B: 'Incorreta. Prescreve os três fármacos formalmente contraindicados e ineficazes na rotina da BVA.',
      C: 'Incorreta. Intubação é reservada apenas para falência respiratória refratária e exaustão, sendo conduta iatrogênica se feita de rotina.',
      D: 'Incorreta. Jejum e albumina indiscriminados levariam a desnutrição, desidratação e sobrecarga de volume.',
    },
  },
  {
    id: 'ped-irab-013',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Oxigenoterapia na BVA: Metas de Saturação e Critérios de Desmame',
    isRevisao: false,
    enunciado:
      'Um lactente de 3 meses internado por BVA encontra-se em leito de enfermaria recebendo oxigênio suplementar por cateter nasal a 0,5 L/min. Ao exame, encontra-se calmo, com frequência respiratória de 46 irpm, tiragem intercostal leve, boa aceitação das mamadas e saturação de O2 de 96%. Ao desligar o cateter nasal para teste de ar ambiente, a saturação de O2 estabiliza-se em 91% a 92% com a criança dormindo confortavelmente. De acordo com as diretrizes da Sociedade Brasileira de Pediatria e da Academia Americana de Pediatria, qual é a conduta indicada em relação à oxigenoterapia?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Suspender a oxigenoterapia suplementar e manter o lactente em ar ambiente sob monitorização clínica periódica, uma vez que a saturação de O2 encontra-se no limiar de segurança (>= 90% a 92%) e o paciente apresenta estabilidade clínica e boa alimentação.',
      },
      {
        id: 'B',
        texto:
          'Aumentar o fluxo de oxigênio para 15 L/min sob máscara não reinalante para manter a saturação rigorosamente em 100%.',
      },
      {
        id: 'C',
        texto:
          'Indicar intubação orotraqueal e ventilação mecânica invasiva de urgência.',
      },
      {
        id: 'D',
        texto:
          'Manter o oxigênio por no mínimo 30 dias contínuos independentemente da melhora clínica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo da Oxigenoterapia na Bronquiolite Viral Aguda:\n\n1. Limiares de Indicação e Metas de Saturação:\n   - Diretriz da AAP: Recomenda indicar oxigênio quando a saturação de O2 transcutânea (SpO2) cair abaixo de 90% em ar ambiente persistente;\n   - Diretriz da SBP: Recomenda manter a saturação de O2 entre 90% e 92% em lactentes saudáveis previamente hígidos;\n   - Em pacientes com cardiopatia congênita com shunt ou displasia broncopulmonar, alvos mais elevados (> 92-94%) podem ser individualizados;\n\n2. O Desmame Oportuno do Oxigênio:\n   - O uso desnecessário de oxigênio em pacientes com SpO2 >= 90-92% clinicamente estáveis prolonga artificialmente a internação hospitalar, eleva o risco de infecções hospitalares e gera custos;\n   - Se o lactente sustenta SpO2 >= 90-92% em ar ambiente, está calmo, mamando bem e sem esforço respiratório acentuado, a conduta correta é DESCONTINUAR O OXIGÊNIO;\n   - A monitorização intermitente é preferível à oximetria contínua em lactentes em fase de desmame, pois a oximetria contínua apita em quedas passageiras autolimitadas normais do sono, gerando alarmes falsos e prolongando a alta.',
    comentariosAlternativas: {
      A: 'Correta. Lactente clinicamente estável e mamando bem com SatO2 >= 90-92% em ar ambiente deve ter o oxigênio desmamado e suspenso.',
      B: 'Incorreta. Almejar SatO2 de 100% com hiperóxia é prejudicial e atrasa a alta hospitalar.',
      C: 'Incorreta. Não há qualquer indicação de intubação em um lactente com desconforto leve e boa tolerância alimentar.',
      D: 'Incorreta. A oxigenoterapia dura habitualmente 2 a 4 dias na fase aguda e deve ser retirada assim que o paciente estabilizar.',
    },
  },
  {
    id: 'ped-irab-014',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Suporte Nutricional e Prevenção de Broncoaspiração no Lactente com Taquipneia Grave',
    isRevisao: false,
    enunciado:
      'Um lactente de 2 meses e meio com BVA no 4º dia de evolução apresenta taquipneia importante com frequência respiratória de 68 irpm, tiragem subcostal moderada e batimento de asa de nariz. A mãe tenta amamentar no seio materno, mas a criança engasga repetidamente, tosse e solta o mamilo em sofrimento respiratório. Qual conduta é indicada em relação à alimentação e hidratação desta criança?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Suspender a oferta de líquidos e alimentos por via oral devido ao elevado risco de broncoaspiração (frequência respiratória > 60 a 70 irpm com incoordenação sucção-deglutição-respiração); introduzindo suporte nutricional e hídrico enteral por sonda nasogástrica fracionada ou hidratação intravenosa isotônica de manutenção.',
      },
      {
        id: 'B',
        texto:
          'Forçar a amamentação contínua da criança deitada em decúbito dorsal horizontal com o uso de seringa de 20 mL na orofaringe.',
      },
      {
        id: 'C',
        texto:
          'Introduzir dieta sólida com carnes e tubérculos batidos para engrossar o leite e curar o refluxo.',
      },
      {
        id: 'D',
        texto:
          'Manter o paciente em jejum hídrico absoluto sem qualquer hidratação venosa ou enteral por 5 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo Nutricional e Hidratação na BVA com Taquipneia Importante:\n\n1. Fisiologia da Deglutição no Lactente Jovem:\n   - O ato de mamar exige coordenação neuromuscular perfeita entre sucção, deglutição e respiração;\n   - Em frequências respiratórias acima de 60 a 70 incursões por minuto (irpm), o tempo respiratório é tão curto que o lactente não consegue coordenar a deglutição e o fechamento da laringe;\n   - Ocorre alto risco de BRONCOASPIRAÇÃO ALIMENTAR (aspiração de leite para a árvore traqueobrônquica), o que agravaria catastroficamente o quadro pulmonar já comprometido pelo VSR;\n\n2. Conduta Clínica Padronizada:\n   - Suspender temporariamente a via oral direta (seio ou mamadeira);\n   - PRIMEIRA OPÇÃO: Sondagem nasogástrica ou orogástrica (SNG/SOG) com administração de leite materno ordenhado ou fórmula em alíquotas fracionadas pequenas e frequentes (ou gavagem lenta contínua);\n   - SEGUNDA OPÇÃO (se distensão abdominal, vômitos incoercíveis ou esforço respiratório extremo com exaustão): Hidratação intravenosa isotônica com solução balanceada contendo sódio e glicose em taxas de manutenção, evitando sobrecarga hídrica (lactentes com BVA têm risco de SIADH com hiponatremia dilucional se receberem fluidos hipotônicos em excesso).',
    comentariosAlternativas: {
      A: 'Correta. Com FR > 60-70 irpm há incoordenação e risco iminente de aspiração pulmonar, exigindo pausa de VO e suporte por sonda ou venóclise.',
      B: 'Incorreta. Forçar líquidos na orofaringe em lactente com taquipneia grave causaria aspiração maciça para as vias aéreas.',
      C: 'Incorreta. Lactente de 2 meses não pode receber alimentos sólidos.',
      D: 'Incorreta. Jejum total sem hidratação venosa levaria a choque hipovolêmico desidratativo rápido.',
    },
  },
  {
    id: 'ped-irab-015',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Cânula Nasal de Alto Fluxo (CNAF): Mecanismos e Indicação na BVA Moderada a Grave',
    isRevisao: false,
    enunciado:
      'Um lactente de 3 meses com Bronquiolite Viral Aguda grave mantém saturação de 89% e tiragem intercostal e subcostal importantes a despeito do uso de oxigênio suplementar em cateter nasal convencional a 2 L/min. A equipe decide instalar Cânula Nasal de Alto Fluxo (CNAF) aquecida e umidificada a 2 L/kg/min com FiO2 titulada. Quais são os mecanismos fisiológicos comprovados que explicam a eficácia da CNAF no alívio do trabalho respiratório na bronquiolite?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Lavagem contínua do espaço morto anatômico nasofaríngeo com redução do CO2 reinalado, fornecimento de pressão positiva expiratória final nas vias aéreas (PEEP em torno de 2 a 4 cmH2O), redução da resistência aérea e aquecimento/umidificação do gás que otimiza o clareamento mucociliar.',
      },
      {
        id: 'B',
        texto:
          'Injeção de nitrogênio líquido puro nos alvéolos para congelar os vírus sinciciais respiratórios.',
      },
      {
        id: 'C',
        texto:
          'Aplicação de vácuo contínuo negativo no nariz para colabar a traqueia e impedir que a criança respire.',
      },
      {
        id: 'D',
        texto:
          'Destruição mecânica das amígdalas palatinas por jato ultrassônico de alta frequência.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Cânula Nasal de Alto Fluxo (CNAF / HFNC) na Bronquiolite Viral Aguda:\n\n1. Mecanismos Fisiológicos de Ação:\n   - 1. LAVAGEM DO ESPAÇO MORTO ANATÔMICO (Washout de CO2): o alto fluxo contínuo de gás "varre" o ar expirado estagnado na nasofaringe, reduzindo a reinalação de gás rico em dióxido de carbono e melhorando a eficiência ventilatória com menor esforço;\n   - 2. GERAÇÃO DE PEEP / CPAP DINÂMICO: o fluxo elevado (habitualmente 1,5 a 2,0 L/kg/min) contra a resistência expiratória nasofaríngea gera uma pressão positiva ao final da expiração (PEEP) de aproximadamente 2 a 5 cmH2O, mantendo os bronquíolos e alvéolos recrutados e prevenindo atelectasias;\n   - 3. CONDICIONAMENTO TÉRMICO E HÍDRICO DO GÁS: o gás é administrado a 37 °C com 100% de umidade relativa, prevenindo o ressecamento da mucosa, fluidificando as secreções e otimizando o transporte mucociliar;\n   - 4. ATENDIMENTO DO PICO DE FLUXO INSPIRATÓRIO: reduz o trabalho muscular respiratório necessário para vencer a resistência das vias aéreas superiores;\n\n2. Impacto Clínico Comprovado:\n   - Reduz drasticamente as taxas de intubação orotraqueal e necessidade de ventilação mecânica invasiva em lactentes com BVA moderada a grave.',
    comentariosAlternativas: {
      A: 'Correta. Lavagem de espaço morto, geração de PEEP dinâmica, umidificação ideal e redução do trabalho respiratório explicam o sucesso da CNAF na BVA.',
      B: 'Incorreta. Nitrogênio líquido causaria queimadura térmica fatal no trato respiratório.',
      C: 'Incorreta. A CNAF fornece pressão positiva e não vácuo negativo.',
      D: 'Incorreta. Não há qualquer ação cirúrgica ou ultrassônica sobre amígdalas.',
    },
  },
  {
    id: 'ped-irab-016',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Fatores de Risco Biológicos para Evolução Desfavorável e Gravidade na BVA',
    isRevisao: false,
    enunciado:
      'Durante a triagem no pronto-socorro infantil, o conhecimento dos fatores de risco basais associados à maior morbimortalidade e risco de insuficiência respiratória por Bronquiolite Viral Aguda é crucial para decidir entre alta com seguimento ou internação preventiva. Qual grupo de lactentes apresenta o maior risco de evolução desfavorável para BVA grave?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Lactentes com idade inferior a 6 a 12 semanas de vida, prematuros (especialmente < 35 semanas de idade gestacional), portadores de cardiopatia congênita com repercussão hemodinâmica e portadores de doença pulmonar crônica da prematuridade (displasia broncopulmonar).',
      },
      {
        id: 'B',
        texto:
          'Lactentes a termo com mais de 18 meses de vida, sem comorbidades e em aleitamento materno exclusivo.',
      },
      {
        id: 'C',
        texto:
          'Crianças em idade escolar maiores de 7 anos praticantes de natação diária.',
      },
      {
        id: 'D',
        texto:
          'Crianças com dentes de leite completamente erupcionados e peso acima do percentil 90.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fatores de Risco para Bronquiolite Viral Aguda Grave:\n\n1. Fatores de Risco Clínicos e Biológicos Maiores:\n   - 1. IDADE JOVEM (< 6 a 12 semanas de vida): vias aéreas de calibre diminuto, caixa torácica complacente e reserva muscular diafragmática limitada;\n   - 2. PREMATURIDADE (Idade gestacional < 35-37 semanas): desenvolvimento pulmonar incompleto, menor calibre das vias aéreas e menor transferência transplacentária de anticorpos maternos IgG anti-VSR;\n   - 3. CARDIOPATIA CONGÊNITA COM REPERCUSSÃO HEMODINÂMICA (especialmente cardiopatias congênitas acianogênicas com hiperfluxo pulmonar ou hipertensão pulmonar);\n   - 4. DOENÇA PULMONAR CRÔNICA DA PREMATURIDADE (Displasia Broncopulmonar - DBP): arquitetura alveolar simplificada e hiper-reatividade brônquica;\n   - 5. DOENÇAS NEUROMUSCULARES: fraqueza dos músculos inspiratórios e tosse ineficaz para clarear secreções;\n   - 6. IMUNODEFICIÊNCIAS CONGÊNITAS OU ADQUIRIDAS;\n\n2. Conduta Diante dos Grupos de Risco:\n   - Lactentes pertencentes a esses grupos apresentam limiar de internação hospitalar muito mais baixo, exigindo vigilância contínua mesmo na vigência de sintomas aparentemente leves no início do quadro.',
    comentariosAlternativas: {
      A: 'Correta. Idade < 2-3 meses, prematuridade, cardiopatias congênitas com repercussão e displasia broncopulmonar são os principais fatores de risco para BVA grave.',
      B: 'Incorreta. Lactentes a termo maiores de 18 meses sem comorbidades têm baixo risco de complicação grave.',
      C: 'Incorreta. Escolares de 7 anos não desenvolvem a síndrome clínica da BVA do lactente.',
      D: 'Incorreta. Dentição decídua e eutrofia não são fatores de risco para gravidade respiratória.',
    },
  },
  {
    id: 'ped-irab-017',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Apneia como Apresentação Inicial da Infecção por VSR no Lactente Jovem',
    isRevisao: false,
    enunciado:
      'Um lactente de 28 dias de vida, nascido pré-termo com 34 semanas de idade gestacional, é trazido pela mãe ao pronto-atendimento após apresentar episódio súbito de parada da respiração no berço por cerca de 25 segundos, acompanhado de palidez cutânea e cianose perioral transitória que cedeu com estímulo tátil. A mãe relata apenas congestão nasal discreta há 24 horas, sem febre e sem tosse exuberante. Ao exame inicial: eupneico, afebril, ausculta pulmonar sem sibilos ou estertores no momento. O teste de PCR rápido de secreção nasofaríngea revela positividade para Vírus Sincicial Respiratório (VSR). Qual fenômeno clínico explica esse quadro e qual é a conduta hospitalar obrigatória?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de apneia como manifestação clínica precoce da infecção por VSR em lactente jovem prematuro (decorrente da imaturidade do centro respiratório bulbar e reflexos laríngeos exacerbados pelo vírus); a conduta é a internação hospitalar mandatória em leito com monitorização cardiorrespiratória contínua.',
      },
      {
        id: 'B',
        texto:
          'Trata-se de engasgo com saliva normal; a conduta é orientar a mãe e dar alta domiciliar imediata.',
      },
      {
        id: 'C',
        texto:
          'Trata-se de epilepsia mioclônica juvenil intratável exigindo fenobarbital intravenoso em dose de coma induzido.',
      },
      {
        id: 'D',
        texto:
          'Trata-se de intoxicação aguda por monóxido de carbono decorrente da água do banho morno.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Apneia na Infecção pelo Vírus Sincicial Respiratório:\n\n1. Apresentação Atípica e Precoce no Lactente Jovem:\n   - Em recém-nascidos e lactentes menores de 6 a 8 semanas (especialmente naqueles nascidos prematuros), a APNEIA pode ser a MANIFESTAÇÃO INICIAL OU ÚNICA da infecção pelo VSR, ocorrendo frequentemente ANTES do aparecimento de tosse, sibilância ou estertores adventícios;\n   - A incidência de apneia no VSR atinge 10% a 20% em prematuros e lactentes com menos de 1 mês de vida;\n\n2. Fisiopatologia da Apneia por VSR:\n   - O VSR infecta os mecanorreceptores da mucosa laríngea e nasofaríngea, hiperestimulando o reflexo quimiorreceptor inibitório da respiração (apneia reflexa);\n   - Imaturidade dos centros respiratórios no tronco encefálico (bulbo e ponte) associada à resposta ventilatória deprimida à hipoxemia no lactente jovem;\n   - Apneia mista: componente central (falha no estímulo neural) associado a componente obstrutivo (oclusão nasofaríngea por secreção catarral);\n\n3. Conduta Obrigatória:\n   - INTERNAÇÃO HOSPITALAR MANDATÓRIA sob monitorização cardiorrespiratória e oximetria contínuas, devido ao risco elevado de recorrência e parada cardiorrespiratória em domicílio.',
    comentariosAlternativas: {
      A: 'Correta. Apneia no prematuro jovem é clássica na infecção por VSR e exige internação com monitorização contínua imediata.',
      B: 'Incorreta. Dar alta a um lactente prematuro com apneia por VSR acarreta alto risco de morte súbita no berço em domicílio.',
      C: 'Incorreta. Apneia por VSR não é epilepsia mioclônica e anticonvulsivantes agravariam a depressão respiratória.',
      D: 'Incorreta. Não há história de inalação de fumaça ou aquecedores a gás desregulados.',
    },
  },
  {
    id: 'ped-irab-018',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Critérios Formais de Internação Hospitalar na Bronquiolite Viral Aguda',
    isRevisao: false,
    enunciado:
      'Um lactente de 3 meses é avaliado na emergência com quadro de BVA no 4º dia. Quais achados clínicos constituem CRITÉRIOS FORMAIS PARA INTERNAÇÃO HOSPITALAR segundo os consensos da Sociedade Brasileira de Pediatria e da Academia Americana de Pediatria?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Saturação de O2 persistentemente inferior a 90% a 92% em ar ambiente; taquipneia importante (> 60 a 70 irpm) com desconforto moderado a grave (tiragens, gemência, batimento de asa nasal); incapacidade de manter hidratação oral (aceitação < 50% do habitual); e episódios de apneia documentados.',
      },
      {
        id: 'B',
        texto:
          'Presença exclusiva de coriza hialina há 2 dias com apetite preservado e saturação de O2 de 98% em ar ambiente.',
      },
      {
        id: 'C',
        texto:
          'Temperatura axilar isolada de 37,8 °C sem qualquer esforço respiratório em lactente de 1 ano.',
      },
      {
        id: 'D',
        texto:
          'Presença de avós em casa que não possuem telefone celular inteligente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Critérios de Internação Hospitalar na Bronquiolite Viral Aguda:\n\n1. Critérios Clínicos de Oxigenação e Trabalho Respiratório:\n   - HIPOXEMIA PERSISTENTE: Saturação de O2 < 90% a 92% em ar ambiente enquanto acordado ou dormindo;\n   - TAQUIPNEIA GRAVE: Frequência respiratória > 60 a 70 irpm (risco iminente de incoordenação e aspiração);\n   - ESFORÇO RESPIRATÓRIO MODERADO A GRAVE: tiragem subcostal importante, tiragem de fúrcula, batimento de asa de nariz, gemência expiratória intermitente ou balanço toracoabdominal;\n\n2. Critérios de Hidratação e Ingestão Alimentar:\n   - Incapacidade de manter hidratação oral satisfatória (recusa alimentar ou ingestão inferior a 50% do volume diário habitual);\n   - Sinais de desidratação clínica (mucosas secas, fontanela deprimida, turgor diminuído, oligúria evidente);\n\n3. Critérios Neurológicos e de Risco:\n   - Episódios de apneia (observados pelos pais ou pela equipe de saúde);\n   - Letargia, sonolência excessiva ou irritabilidade intensa (sinais de exaustão);\n   - Fatores de risco biológicos (prematuridade extrema, idade < 2 meses, cardiopatia com hiperfluxo);\n   - Fatores sociais e de vulnerabilidade: cuidadores sem condições de reconhecer sinais de gravidade ou impossibilidade de retorno rápido ao hospital em caso de piora.',
    comentariosAlternativas: {
      A: 'Correta. Hipoxemia (< 90-92%), taquipneia importante com esforço, ingesta insuficiente e apneia são indicações formais de internação.',
      B: 'Incorreta. Coriza com apetite preservado e saturação normal é quadro leve manejado ambulatorialmente em domicílio.',
      C: 'Incorreta. Febre baixa isolada sem esforço respiratório não é critério de internação.',
      D: 'Incorreta. Condição sociofamiliar sem correlação médica objetiva de gravidade.',
    },
  },
  {
    id: 'ped-irab-019',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Insuficiência Respiratória Aguda e Critérios de Transferência para UTI Pediátrica',
    isRevisao: false,
    enunciado:
      'Um lactente de 2 meses internado na enfermaria em uso de cateter nasal a 1,5 L/min evolui com piora progressiva: o paciente encontra-se sonolento e torporoso, com bradipneia paradoxal (FR caindo de 65 para 30 irpm), tiragens com dissociação toracoabdominal acentuada ("respiração paradoxal"), SatO2 de 85% e palidez terrosa. A gasometria venosa revela pH de 7,18, pCO2 de 68 mmHg e bicarbonato de 24 mEq/L, caracterizando acidose respiratória aguda grave por hipoventilação alveolar. Qual condição clínica e conduta médica imediata devem ser tomadas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de falência respiratória hipercápnica aguda por fadiga e exaustão muscular da musculatura respiratória; indicando transferência imediata para Unidade de Terapia Intensiva Pediátrica (UTIP), suporte ventilatório avançado imediato com ventilação com pressão positiva (VNI/CPAP ou intubação orotraqueal e ventilação mecânica invasiva protetora).',
      },
      {
        id: 'B',
        texto:
          'A queda da frequência respiratória prova que o lactente está curado e pronto para receber alta hospitalar imediata.',
      },
      {
        id: 'C',
        texto:
          'Prescrever xarope antitussígeno à base de codeína para manter o paciente dormindo.',
      },
      {
        id: 'D',
        texto:
          'Solicitar ressonância magnética do joelho e aguardar o laudo em 48 horas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Reconhecimento da Exaustão Respiratória na BVA e Indicação de UTIP:\n\n1. A Falsa Melhora da Bradipneia Paradoxal:\n   - Um dos sinais mais perigosos na emergência e terapia intensiva pediátrica é a "queda da frequência respiratória" acompanhada de sonolência em uma criança que estava gravemente taquipneica;\n   - NÃO significa melhora clínica; significa EXAUSTÃO / FADIGA MUSCULAR DIAFRAGMÁTICA;\n   - A musculatura do lactente esgota suas reservas de glicogênio e ATP;\n   - A respiração torna-se ineficaz, os movimentos tornam-se paradoxais (o abdome expande e o tórax deprime);\n\n2. A Gasometria da Fadiga:\n   - Instalação de HIPOVENTILAÇÃO ALVEOLAR com retenção severa de CO2 (hipercapnia aguda com pCO2 > 60-65 mmHg);\n   - Acidose respiratória aguda descompensada (pH < 7,20 a 7,25);\n\n3. Conduta Emergencial na UTI Pediátrica:\n   - Não há tempo a perder: suporte ventilatório invasivo ou não invasivo de urgência;\n   - Intubação orotraqueal com tubo com cuff (balonete) ou CPAP/VNI em unidade fechada de terapia intensiva;\n   - Ventilação mecânica com tempo expiratório adequado para evitar hiperinsuflação dinâmica (auto-PEEP excessiva).',
    comentariosAlternativas: {
      A: 'Correta. Queda da FR com hipercapnia, acidose respiratória e rebaixamento sensorial define fadiga extrema e requer suporte ventilatório em UTIP.',
      B: 'Incorreta. Confundir exaustão respiratória com melhora é um erro letal em pediatria.',
      C: 'Incorreta. Opióides como a codeína deprimem o centro respiratório e acelerariam a parada cardiorrespiratória.',
      D: 'Incorreta. Exame sem qualquer pertinência com quadro respiratório agudo grave.',
    },
  },
  {
    id: 'ped-irab-020',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Imunoprofilaxia Específica contra o VSR com Palivizumabe: Critérios do Ministério da Saúde',
    isRevisao: false,
    enunciado:
      'O Palivizumabe é um anticorpo monoclonal humanizado direcionado contra a proteína de fusão (proteína F) do Vírus Sincicial Respiratório, aprovado para imunoprofilaxia passiva sazonal em populações pediátricas de alto risco. De acordo com as diretrizes do Ministério da Saúde do Brasil e da Sociedade Brasileira de Pediatria (SBP), quais crianças têm indicação formal de receber o Palivizumabe no Sistema Único de Saúde (SUS)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Prematuros com idade gestacional inferior a 29 semanas no primeiro ano de vida; e crianças menores de 2 anos com cardiopatia congênita com repercussão hemodinâmica ou doença pulmonar crônica da prematuridade (displasia broncopulmonar) que necessitaram de tratamento nos últimos 6 meses.',
      },
      {
        id: 'B',
        texto:
          'Todas as crianças saudáveis a termo de até 5 anos de idade independentemente de fatores de risco.',
      },
      {
        id: 'C',
        texto:
          'Apenas adolescentes maiores de 15 anos com histórico de asma leve induzida por exercício.',
      },
      {
        id: 'D',
        texto:
          'Crianças com rinite alérgica sazonal exclusiva sem qualquer histórico de prematuridade.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Critérios de Elegibilidade para Palivizumabe (Ministério da Saúde / SBP / SUS):\n\n1. O Medicamento e seu Mecanismo:\n   - O Palivizumabe é um anticorpo monoclonal recombinante do tipo IgG1 humanizado;\n   - Liga-se com alta afinidade à proteína F (de fusão) do VSR, neutralizando o vírus e impedindo que ele penetre e forme sincícios celulares no epitélio respiratório;\n   - Trata-se de IMUNIZAÇÃO PASSIVA (não é vacina; não gera memória imunológica ativa);\n   - Administrado por via intramuscular uma vez ao mês durante o período sazonal do VSR (habitualmente de março a julho no Brasil, totalizando até 5 doses consecutivas);\n\n2. Populações Elegíveis no SUS:\n   - GRUPO 1: Prematuros nascidos com IDADE GESTACIONAL <= 28 SEMANAS E 6 DIAS (isto é, < 29 semanas), com idade inferior a 1 ano (até 11 meses e 29 dias) no início do período sazonal;\n   - GRUPO 2: Crianças menores de 2 anos (até 1 ano, 11 meses e 29 dias) com DOENÇA PULMONAR CRÔNICA DA PREMATURIDADE (Displasia Broncopulmonar) que necessitaram de suporte médico (oxigênio, broncodilatador, diurético ou corticoide) nos últimos 6 meses que antecedem a sazonalidade;\n   - GRUPO 3: Crianças menores de 2 anos com CARDIOPATIA CONGÊNITA COM REPERCUSSÃO HEMODINÂMICA demonstrada (em uso de medicação para controle de ICC, cardiopatias cianogênicas ou hipertensão pulmonar moderada a grave).',
    comentariosAlternativas: {
      A: 'Correta. Prematuros < 29 semanas no 1º ano de vida, displásicos e cardiopatas congênitos com repercussão até 2 anos são os grupos contemplados pelo SUS.',
      B: 'Incorreta. Não é indicado para a população geral a termo no SUS devido ao alto custo e critérios estritos de custo-efetividade.',
      C: 'Incorreta. Adolescentes não recebem palivizumabe; a indicação é estritamente pediátrica neonatal e do lactente de alto risco.',
      D: 'Incorreta. Rinite alérgica não é fator de risco para BVA grave por VSR.',
    },
  },
  {
    id: 'ped-irab-021',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Inovações na Prevenção do VSR: Anticorpos Monoclonais de Meia-Vida Longa (Nirsevimabe)',
    isRevisao: false,
    enunciado:
      'Nos últimos anos, avanços substanciais na imunoprofilaxia passiva contra o Vírus Sincicial Respiratório resultaram no desenvolvimento do Nirsevimabe. Em comparação com o anticorpo monoclonal convencional (Palivizumabe), qual é a principal vantagem farmacocinética e o impacto na estratégia preventiva trazidos pelo Nirsevimabe?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Possui uma modificação na porção Fc que prolonga expressivamente sua meia-vida sérica (superior a 60 a 100 dias), permitindo a proteção contra o VSR durante toda a estação sazonal com uma ÚNICA DOSE intramuscular, além de ser aprovado para todos os neonatos e lactentes em sua primeira temporada do vírus.',
      },
      {
        id: 'B',
        texto:
          'O nirsevimabe é uma vacina de vírus vivo atenuado de uso oral exclusivo que exige 36 doses diárias consecutivas.',
      },
      {
        id: 'C',
        texto:
          'Trata-se de um antibiótico bactericida derivado da penicilina que destrói bactérias gram-negativas nos alvéolos.',
      },
      {
        id: 'D',
        texto:
          'O fármaco atua transformando o vírus sincicial em uma bactéria benéfica para a microbiota intestinal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Nirsevimabe: O Novo Paradigma na Prevenção do VSR:\n\n1. Limitações do Esquema Tradicional (Palivizumabe):\n   - O Palivizumabe possui meia-vida curta (cerca de 20 dias), o que exige injeções intramusculares REPETIDAS MENSALMENTE (até 5 injeções por temporada sazonal);\n   - Devido ao alto custo, fica restrito apenas a prematuros extremos e cardiopatas graves (< 2-3% de todos os nascidos vivos), deixando mais de 80% das crianças hospitalizadas por VSR (que são nascidas a termo) desprotegidas;\n\n2. Inovação do Nirsevimabe:\n   - É um anticorpo monoclonal recombinante humano direcionado contra a conformação pré-fusão da proteína F do VSR;\n   - Apresenta engenharia molecular na região Fc (mutação YTE: M252Y/S254T/T256E), que aumenta a afinidade de ligação ao receptor Fc neonatal (FcRn);\n   - Essa modificação retarda o catabolismo do anticorpo, ESTENDENDO SUA MEIA-VIDA para cerca de 70 a 100 dias;\n   - VANTAGEM REVOLUCIONÁRIA: UMA ÚNICA INJEÇÃO INTRAMUSCULAR confere proteção potente e sustentada por pelo menos 5 meses (cobrindo todo o período sazonal);\n   - Aprovado e já adotado em diversos países para TODOS os neonatos e lactentes entrando em sua primeira estação do VSR, reduzindo hospitalizações por BVA em mais de 75 a 80%.',
    comentariosAlternativas: {
      A: 'Correta. A meia-vida estendida permite proteção eficaz durante toda a temporada com apenas uma dose única sazonal.',
      B: 'Incorreta. Nirsevimabe não é vacina de vírus vivo atenuado; é um anticorpo monoclonal de imunização passiva injetável.',
      C: 'Incorreta. Não é um antibacteriano e não atua em bactérias.',
      D: 'Incorreta. Não existe transmutação biológica de vírus em bactérias.',
    },
  },
  {
    id: 'ped-irab-022',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Diagnóstico Diferencial do Lactente Sibilante: BVA vs Aspiração de Corpo Estranho vs Asma',
    isRevisao: false,
    enunciado:
      'Um lactente de 10 meses que vinha brincando na sala de estar com o irmão mais velho apresenta início súbito de engasgo seguido de tosse seca persistente e chiado no peito. É levado à emergência sem histórico de coriza, febre ou sintomas gripais prévios. Ao exame físico: frequência respiratória de 50 irpm, sem tiragens graves; ausculta pulmonar com murmúrio vesicular marcadamente diminuído em hemitórax direito com sibilos estritamente localizados à direita; hemitórax esquerdo com murmúrio normal e sem ruídos adventícios. A radiografia de tórax revela hiperinsuflação unilateral direita com enfisema obstrutivo e desvio do mediastino para a esquerda. Qual é o diagnóstico e a conduta imediata?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Aspiração de corpo estranho em brônquio fonte direito; indicação de broncoscopia rígida de urgência para visualização e extração do corpo estranho.',
      },
      {
        id: 'B',
        texto:
          'Bronquiolite Viral Aguda típica por VSR; prescrever inalação com salina a 0,9% e alta domiciliar.',
      },
      {
        id: 'C',
        texto:
          'Asma brônquica atópica pura; início de corticoide oral por 10 dias associado a espaçador.',
      },
      {
        id: 'D',
        texto:
          'Refluxo gastroesofágico fisiológico; orientar aleitamento materno em posição deitada de bruços.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diagnóstico Diferencial: Aspiração de Corpo Estranho na Infância:\n\n1. Sinais Clínicos de Alerta para Corpo Estranho:\n   - INÍCIO SÚBITO e paroxístico de tosse e sibilância (frequentemente com história de episódio de asfixia/engasgo presenciado ou suspeito);\n   - AUSÊNCIA DE PRÓDROMOS VIRAIS (sem coriza, sem congestão e sem febre prévias);\n   - ASSIMETRIA AUSCULPATÓRIA MARCADA: sibilos UNILATERAIS e murmúrio vesicular diminuído em apenas um hemitórax (o brônquio fonte direito é mais calibroso, mais vertical e mais retificado, sendo o local preferencial de alojamento);\n\n2. Achados Radiológicos Típicos:\n   - Hiperinsuflação unilateral (mecanismo de válvula: o ar entra mas não sai, hiperinsuflando o pulmão acometido);\n   - Desvio contralateral do mediastino (desvio do coração e traqueia para o lado oposto);\n   - Aprisionamento aéreo evidenciado na radiografia em expiração forçada ou decúbito lateral;\n\n3. Conduta de Urgência:\n   - BRONCOSCOPIA RÍGIDA (procedimento de escolha diagnóstico e terapêutico para remoção sob anestesia geral);\n   - Nunca postergar com diagnósticos errôneos de "bronquiolite" ou "asma".',
    comentariosAlternativas: {
      A: 'Correta. Início súbito de sibilância unilateral com hiperinsuflação assimétrica exige broncoscopia rígida de urgência para retirada de corpo estranho.',
      B: 'Incorreta. BVA é bilateral, simétrica e obrigatoriamente precedida de sintomas catarrais de vias aéreas superiores.',
      C: 'Incorreta. A asma causa sibilos bilaterais difusos simétricos e não acomete apenas um pulmão de forma súbita após engasgo.',
      D: 'Incorreta. Refluxo não gera hiperinsuflação unilateral com desvio mediastinal agudo.',
    },
  },
  {
    id: 'ped-irab-023',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Testes Diagnósticos Rápidos para Vírus Respiratórios (RT-PCR e Antígenos) na BVA',
    isRevisao: false,
    enunciado:
      'Em um serviço de pronto-atendimento pediátrico durante o outono, uma mãe solicita a realização de painel molecular por RT-PCR ou teste rápido antigênico para vírus respiratórios em seu filho de 5 meses com quadro clássico de Bronquiolite Viral Aguda leve (eupneico, sem tiragens, mamando bem e com SatO2 de 95% em ar ambiente). De acordo com as diretrizes da AAP e da SBP, qual é o papel dos testes virológicos de rotina na BVA não complicada no atendimento ambulatorial/emergência?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O diagnóstico da Bronquiolite Viral Aguda é eminentemente CLÍNICO, não sendo necessária a realização rotineira de testes virológicos no paciente ambulatorial com quadro típico, uma vez que a identificação do agente específico não altera o manejo de suporte clínico e não previne o uso de medicamentos.',
      },
      {
        id: 'B',
        texto:
          'O teste rápido viral é obrigatório em todos os casos para autorizar o início de amoxicilina nos primeiros 30 minutos.',
      },
      {
        id: 'C',
        texto:
          'A bronquiolite só pode ser diagnosticada se o vírus for isolado por biópsia pulmonar a céu aberto.',
      },
      {
        id: 'D',
        texto:
          'Sem a realização de PCR para VSR, o lactente não pode receber oxigênio suplementar mesmo se estiver com saturação de 70%.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Papel dos Testes Diagnósticos Virológicos na BVA (AAP / SBP):\n\n1. Diagnóstico Clínico-Soberano:\n   - As diretrizes internacionais enfatizam que a Bronquiolite Viral Aguda é um DIAGNÓSTICO CLÍNICO;\n   - Não há necessidade de testes virológicos de rotina (pesquisa de antígeno ou RT-PCR) para pacientes tratados em nível ambulatorial ou em pronto-socorro que recebem alta;\n   - O resultado positivo ou negativo NÃO ALTERA o tratamento (que continua sendo suporte com lavagem nasal, hidratação e oxigênio se hipoxemia);\n\n2. Quando os Testes Virológicos São Úteis?\n   - Pacientes internados em enfermarias pediátricas: auxilia no ISOLAMENTO DE COORTE (agrupar pacientes com VSR na mesma enfermaria para evitar infecção cruzada com outros vírus, como influenza ou adenovírus);\n   - Pacientes que necessitam de internação em UTI Pediátrica com apresentações atípicas ou graves;\n   - Recém-nascidos e lactentes < 2 meses com febre sem sinais de localização (a confirmação de BVA por VSR reduz a necessidade de exames invasivos para infecção bacteriana grave);\n   - Vigilância epidemiológica sentinela em saúde pública.',
    comentariosAlternativas: {
      A: 'Correta. O diagnóstico é clínico e o teste não altera a conduta de suporte na BVA ambulatorial típica.',
      B: 'Incorreta. BVA é viral e não recebe amoxicilina independentemente do teste.',
      C: 'Incorreta. Biópsia pulmonar é um procedimento invasivo e totalmente proscrito na BVA.',
      D: 'Incorreta. A hipoxemia exige oxigenoterapia imediata, independentemente de testes laboratoriais.',
    },
  },
  {
    id: 'ped-irab-024',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Complicações Infecciosas Bacterianas Secundárias na BVA: Otite Média Aguda',
    isRevisao: false,
    enunciado:
      'Um lactente de 6 meses internado no 5º dia de BVA por VSR vinha apresentando melhora progressiva do desconforto respiratório (sem tiragens e em ar ambiente). Subitamente, volta a apresentar febre de 38,8 °C, irritabilidade intensa ao deitar e recusa alimentar, acordando aos gritos durante a noite. Ao exame físico: ausculta pulmonar com raros sibilos residuais sem esforço ventilatório; a otoscopia revela membrana timpânica direita hiperemiada, opaca e com abaulamento evidente ("em formato de rosquinha"). Qual complicação bacteriana secundária mais frequentemente associada à BVA por VSR ocorreu neste paciente e qual o tratamento indicado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Otite Média Aguda (OMA) bacteriana secundária, sendo a infecção bacteriana concomitante mais comum na BVA (ocorre em 10% a 20% dos casos por disfunção da tuba auditiva induzida pelo vírus); com indicação de tratamento antimicrobiano oral com Amoxicilina.',
      },
      {
        id: 'B',
        texto:
          'Mastoidite necrosante maligna exigindo drenagem cirúrgica intracraniana de emergência.',
      },
      {
        id: 'C',
        texto:
          'Perfuração espontânea da córnea decorrente da febre viral.',
      },
      {
        id: 'D',
        texto:
          'Pneumonite intersticial por citomegalovírus com indicação de transplante pulmonar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Complicações Bacterianas Concomitantes na BVA: O Papel da OMA:\n\n1. Fisiopatologia da OMA no VSR:\n   - Enquanto a sobreinfecção bacteriana PULMONAR (pneumonia bacteriana) é rara (< 1-2%), a OTITE MÉDIA AGUDA BACTERIANA (OMA) é a complicação bacteriana mais frequente associada à BVA, acometendo entre 10% e 20% dos lactentes infectados por VSR;\n   - O VSR causa intenso edema de mucosa e perda da depuração ciliar na nasofaringe e na TUBA AUDITIVA DE EUSTÁQUIO;\n   - A tuba auditiva torna-se obstruída, gerando pressão negativa e acúmulo de secreção na orelha média;\n   - As bactérias colonizadoras da nasofaringe (Streptococcus pneumoniae, Haemophilus influenzae não tipável e Moraxella catarrhalis) ascendem e proliferam na orelha média fechada, desencadeando OMA supurativa;\n\n2. Manifestação Clínica e Diagnóstico:\n   - Reaparecimento ou persistência de febre alta, dor de ouvido (choro noturno ao deitar por aumento da pressão na orelha média) e irritabilidade;\n   - Otoscopia: abaulamento da membrana timpânica, perda dos pontos de reparo anatômicos e hiperemia acentuada;\n\n3. Tratamento de Escolha:\n   - Amoxicilina oral na dose de 50 a 90 mg/kg/dia por 10 dias em crianças < 2 anos.',
    comentariosAlternativas: {
      A: 'Correta. A OMA bacteriana secundária ocorre em 10-20% dos lactentes com BVA e requer tratamento com amoxicilina oral.',
      B: 'Incorreta. Mastoidite cursa com hiperemia retroauricular, apagamento do sulco e desvio da orelha para frente.',
      C: 'Incorreta. OMA não afeta a córnea nem causa perfuração ocular.',
      D: 'Incorreta. Não há qualquer correlação com citomegalovírus ou transplante pulmonar.',
    },
  },
  {
    id: 'ped-irab-025',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Caso Clínico Integrador: Conduta Baseada em Evidências na Bronquiolite Viral Aguda',
    isRevisao: false,
    enunciado:
      'Um lactente de 3 meses, previamente hígido e nascido a termo, é levado à emergência pediátrica no 4º dia de sintomas de tosse e coriza. Ao exame físico: frequência respiratória de 64 irpm, batimento de asa de nariz, tiragem subcostal moderada, tempo expiratório prolongado, ausculta pulmonar com estertores subcrepitantes bilaterais e sibilos difusos; saturação de O2 de 89% em ar ambiente; aceitação alimentar reduzida a menos da metade do habitual; afebril no momento. A radiografia de tórax evidencia sinais de hiperinsuflação pulmonar difusa e opacidade laminar em lobo médio compatível com atelectasia subsegmentar. Diante deste quadro clínico típico de Bronquiolite Viral Aguda com desconforto moderado e hipoxemia, qual é o plano terapêutico hospitalar COMPLETO e RIGOROSAMENTE baseado nas melhores evidências científicas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Internação hospitalar em leito de enfermaria; suporte de oxigenoterapia umidificada por cânula nasal para manter a saturação entre 90% e 92%; aspiração e desobstrução nasal suave com solução fisiológica a 0,9% antes das ofertas hídricas; suporte nutricional e hidratação por sonda nasogástrica fracionada com leite materno ou fórmula; e NÃO prescrever broncodilatadores beta-2 agonistas, corticoides sistêmicos ou antibióticos de rotina.',
      },
      {
        id: 'B',
        texto:
          'Iniciar imediatamente ceftriaxona intravenosa associada a claritromicina oral, salbutamol de 20 em 20 minutos por 4 horas e hidrocortisona intravenosa na dose de choque séptico.',
      },
      {
        id: 'C',
        texto:
          'Encaminhar para intubação orotraqueal imediata, manter a criança em jejum absoluto sem sonda ou soro, e realizar drenagem postural forçada a cada 1 hora.',
      },
      {
        id: 'D',
        texto:
          'Liberar para casa imediatamente com receita de xarope de dextrometorfano, proibindo qualquer retorno à emergência nos próximos 15 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Caso Clínico Integrador: Manejo Padrão-Ouro da Bronquiolite Viral Aguda:\n\n1. Reconhecimento da Gravidade e Critérios de Internação:\n   - Lactente de 3 meses no pico da doença (4º dia);\n   - Hipoxemia confirmada (SpO2 = 89% em ar ambiente < 90-92%);\n   - Taquipneia acentuada (FR = 64 irpm) com esforço respiratório moderado (tiragem subcostal e batimento de asa de nariz);\n   - Dificuldade na ingesta oral (< 50%);\n   - Indicação de INTERNAÇÃO HOSPITALAR;\n\n2. Intervenções Terapêuticas com Benefício Comprovado:\n   - 1. OXIGENOTERAPIA: cateter nasal umidificado titulado para manter SpO2 entre 90% e 92% (evitando hiperóxia);\n   - 2. HIGIENE E DESOBSTRUÇÃO NASAL: lavagem e aspiração delicada com soro fisiológico 0,9% para reduzir a resistência em via aérea alta de respirador nasal preferencial;\n   - 3. SUPORTE NUTRICIONAL POR SNG: oferta fracionada de leite materno ordenhado ou fórmula láctea por sonda nasogástrica para garantir calorias e hidratação sem risco de broncoaspiração mecânica;\n\n3. Condutas Proscritas (Práticas de Baixo Valor que Devem Ser Evitadas):\n   - NÃO prescrever beta-2 agonistas (salbutamol);\n   - NÃO prescrever corticoides (prednisolona/hidrocortisona);\n   - NÃO prescrever antibióticos (a atelectasia laminar e a hipoxemia decorrem da obstrução mecânica pelo VSR, não de pneumonia bacteriana);\n   - NÃO prescrever fisioterapia respiratória motora/tapotagem.',
    comentariosAlternativas: {
      A: 'Correta. Reúne com perfeição todas as recomendações de suporte baseado em evidências (O2, higiene nasal, SNG) e a contraindicação ao sobretratamento com broncodilatadores, corticoides e antibióticos.',
      B: 'Incorreta. Prescreve antibióticos desnecessários para infecção viral, corticoide ineficaz e broncodilatador não recomendado.',
      C: 'Incorreta. A intubação de rotina e o jejum sem reposição hídrica são medidas agressivas e iatrogênicas.',
      D: 'Incorreta. Liberar para casa um lactente hipoxêmico com esforço respiratório configuraria negligência médica grave.',
    },
  },
  {
    id: 'ped-irab-026',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Critérios Clínicos da OMS / AIDPI para Taquipneia e Diagnóstico de Pneumonia',
    isRevisao: false,
    enunciado:
      'Uma lactente de 10 meses é levada à Unidade Básica de Saúde (UBS) com história de tosse e febre há 3 dias. A mãe nega chiado no peito ou episódios prévios semelhantes. A criança encontra-se alerta, ativa, corada, hidratada e com apetite discretamente reduzido. Ao exame físico: ausência de tiragem subcostal, sem batimento de asa de nariz ou estridor; a contagem da frequência respiratória durante 1 minuto completo com a criança calma e sem chorar revela 54 incursões respiratórias por minuto (irpm); a saturação de O2 em ar ambiente é de 96%. A ausculta pulmonar revela murmúrio vesicular presente bilateralmente com alguns estertores subcrepitantes em base direita. De acordo com a estratégia AIDPI (Atenção Integrada às Doenças Prevalentes na Infância) da Organização Mundial da Saúde (OMS) e do Ministério da Saúde, qual é a classificação clínica e a conduta recomendada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Pneumonia (Não Grave); devido à presença de tosse associada à taquipneia (FR >= 50 irpm na faixa etária de 2 a 11 meses) sem sinais de perigo ou tiragem subcostal; conduta: tratamento domiciliar com Amoxicilina oral e orientação de retorno em 48 a 72 horas para reavaliação.',
      },
      {
        id: 'B',
        texto:
          'Pneumonia Grave; indicando encaminhamento de emergência em ambulância com oxigênio para internação hospitalar em UTI Pediátrica.',
      },
      {
        id: 'C',
        texto:
          'Resfriado Comum / Infecção de Vias Aéreas Superiores; conduta: apenas lavagem nasal e alta sem antibiótico, pois estertores são normais em lactentes.',
      },
      {
        id: 'D',
        texto:
          'Bronquiolite Viral Aguda grave; indicação de salbutamol inalatório a cada 15 minutos e radiografia de tórax de urgência.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Critérios da OMS / AIDPI para Diagnóstico de Pneumonia na Infância:\n\n1. O Sinal Cardinal da Taquipneia:\n   - Em cenários de atenção primária e emergência onde a radiografia de tórax pode não estar prontamente disponível, a OMS estabeleceu a FREQUÊNCIA RESPIRATÓRIA ELEVADA (Taquipneia) como o marcador clínico isolado de maior sensibilidade e especificidade para o diagnóstico de pneumonia em crianças com tosse ou dificuldade para respirar;\n\n2. Pontos de Corte Oficiais da Frequência Respiratória (AIDPI / OMS):\n   - Menores de 2 meses: FR >= 60 irpm;\n   - De 2 a 11 meses: FR >= 50 irpm;\n   - De 1 a 4 anos (12 a 59 meses): FR >= 40 irpm;\n   - A partir de 5 anos: FR >= 20 a 30 irpm (habitualmente >= 28-30 irpm);\n\n3. Classificação em Três Níveis de Gravidade:\n   1. NÃO É PNEUMONIA (Tosse ou Resfriado): tosse/dificuldade respiratória SEM taquipneia e SEM tiragem subcostal -> cuidados em domicílio, higiene nasal, antitérmicos e hidratação;\n   2. PNEUMONIA (Não Grave): tosse/dificuldade respiratória COM TAQUIPNEIA, mas sem tiragem subcostal e sem sinais gerais de perigo -> AMOXICILINA ORAL em domicílio e reavaliação obrigatória em 48 a 72 horas;\n   3. PNEUMONIA GRAVE / DOENÇA MUITO GRAVE: tosse ou taquipneia COM TIRAGEM SUBCOSTAL GRAVE ou COM QUALQUER SINAL GERAL DE PERIGO (incapacidade de beber/mamar, vômitos incoercíveis, convulsões, letargia/inconsciência, estridor em repouso ou cianose) -> REFERÊNCIA HOSPITALAR URGENTE e antibioticoterapia parenteral.',
    comentariosAlternativas: {
      A: 'Correta. Para lactentes de 2 a 11 meses, FR >= 50 irpm define taquipneia e pneumonia na classificação AIDPI da OMS, indicando amoxicilina ambulatorial.',
      B: 'Incorreta. Não há tiragem subcostal, cianose, hipoxemia ou sinais de perigo que classifiquem pneumonia grave.',
      C: 'Incorreta. A presença de taquipneia (54 irpm) afasta resfriado comum simples e define pneumonia pela OMS.',
      D: 'Incorreta. A criança tem 10 meses com estertores unilaterais sem sibilância e não preenche critérios para BVA típica.',
    },
  },
  {
    id: 'ped-irab-027',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pontos de Corte da Frequência Respiratória na Infância segundo a OMS',
    isRevisao: false,
    enunciado:
      'Um médico recém-formado assume plantão em uma Unidade Básica de Saúde da Família e precisa realizar a triagem respiratória de quatro crianças trazidas por queixa de tosse e febre. Considerando os pontos de corte de frequência respiratória (FR) preconizados pela Organização Mundial da Saúde (OMS) e pelo Ministério da Saúde para caracterização de TAQUIPNEIA, qual das seguintes crianças apresenta taquipneia de acordo com a sua respectiva faixa etária?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Uma criança de 2 anos e 4 meses de idade que apresenta frequência respiratória contada de 44 irpm enquanto dorme tranquilamente.',
      },
      {
        id: 'B',
        texto:
          'Um lactente de 8 meses de vida que apresenta frequência respiratória de 42 irpm.',
      },
      {
        id: 'C',
        texto:
          'Um recém-nascido de 25 dias de vida que apresenta frequência respiratória de 52 irpm.',
      },
      {
        id: 'D',
        texto:
          'Uma criança de 6 anos de idade que apresenta frequência respiratória de 18 irpm.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Valores de Corte da Frequência Respiratória na Infância (OMS / AIDPI):\n\n1. Memorização Obrigatória para Provas de Residência Médica:\n   - Faixa etária < 2 meses: limiar de taquipneia é FR >= 60 irpm;\n   - Faixa etária de 2 a 11 meses: limiar de taquipneia é FR >= 50 irpm;\n   - Faixa etária de 1 a 4 anos (12 a 59 meses): limiar de taquipneia é FR >= 40 irpm;\n   - A partir de 5 anos: limiar de taquipneia é FR >= 20 a 30 irpm (habitualmente >= 28-30 irpm);\n\n2. Análise Detalhada das Alternativas:\n   - Alternativa A: Criança de 2 anos e 4 meses (faixa de 1 a 4 anos) com FR de 44 irpm. Como 44 >= 40 irpm, a criança APRESENTA TAQUIPNEIA (Correta);\n   - Alternativa B: Lactente de 8 meses (faixa de 2 a 11 meses) com FR de 42 irpm. O ponto de corte é 50 irpm. Como 42 < 50, NÃO há taquipneia (Incorreta);\n   - Alternativa C: Recém-nascido de 25 dias (faixa < 2 meses) com FR de 52 irpm. O ponto de corte é 60 irpm. Como 52 < 60, NÃO há taquipneia (Incorreta);\n   - Alternativa D: Criança de 6 anos com FR de 18 irpm. Encontra-se em frequência normal para a idade escolar (Incorreta).',
    comentariosAlternativas: {
      A: 'Correta. Na faixa de 1 a 4 anos (12 a 59 meses), o ponto de corte para taquipneia é >= 40 irpm; 44 irpm configura taquipneia.',
      B: 'Incorreta. Para 8 meses (faixa de 2 a 11 meses), o limiar é >= 50 irpm (42 é normal).',
      C: 'Incorreta. Para neonatos < 2 meses, o limiar é >= 60 irpm (52 é normal).',
      D: 'Incorreta. 18 irpm em criança de 6 anos é perfeitamente normal e não caracteriza taquipneia.',
    },
  },
  {
    id: 'ped-irab-028',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Abordagem da Pneumonia no Lactente Jovem Menor de 2 Meses: Doença Muito Grave',
    isRevisao: false,
    enunciado:
      'Um recém-nascido de 38 dias de vida é levado à consulta com história de tosse seca há 2 dias e dificuldade para mamar. Ao exame físico: paciente eupneico no momento, afebril, mas na contagem de 1 minuto a frequência respiratória atinge 62 irpm, com tiragem intercostal leve e batimento de asa de nariz intermitente. De acordo com os protocolos do Ministério da Saúde e da Sociedade Brasileira de Pediatria, qual é a classificação clínica e a conduta obrigatória para lactentes MENORES DE 2 MESES com suspeita de pneumonia?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Classifica-se como Doença Muito Grave / Pneumonia Grave; qualquer lactente com idade inferior a 2 meses com sinais clínicos de pneumonia deve ser OBRIGATORIAMENTE INTERNADO para suporte hospitalar e antibioticoterapia parenteral (geralmente Ampicilina associada a Gentamicina ou Cefotaxima).',
      },
      {
        id: 'B',
        texto:
          'Classifica-se como pneumonia leve domiciliar; prescrição de amoxicilina em suspensão oral e alta com retorno em 1 semana.',
      },
      {
        id: 'C',
        texto:
          'Trata-se de cólica do lactente; orientar compressas mornas na barriga e suspender o aleitamento materno.',
      },
      {
        id: 'D',
        texto:
          'Prescrever apenas xarope broncodilatador de salbutamol e liberar para casa sem antibiótico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Pneumonia no Lactente Jovem Menor de 2 Meses:\n\n1. Princípio de Segurança Biológica:\n   - Em lactentes menores de 60 dias (2 meses), a pneumonia NÃO PODE ser tratada em regime ambulatorial domiciliar;\n   - A anatomia pulmonar imatura, a imunidade humoral e celular deprimidas e a alta propensão à bacteremia, sepse fulminante e apneia impõem a INTERNAÇÃO HOSPITALAR MANDATÓRIA de 100% dos casos;\n   - Qualquer alteração na frequência respiratória (FR >= 60 irpm) ou esforço ventilatório nessa faixa etária é classificada como "Doença Muito Grave" pela estratégia AIDPI/OMS;\n\n2. Microbiologia Particular do Menor de 2 Meses:\n   - Além dos agentes comunitários tradicionais, nessa faixa etária há persistência de bactérias do canal de parto materno:\n     * Streptococcus agalactiae (Streptococcus do Grupo B - GBS);\n     * Enterobactérias Gram-negativas (Escherichia coli, Klebsiella pneumoniae);\n     * Listeria monocytogenes;\n     * Chlamydia trachomatis (síndrome da pneumonia afebril do lactente);\n\n3. Esquema Terapêutico Hospitalar de Escolha:\n   - Ampicilina IV associada a um Aminoglicosídeo (Gentamicina ou Amicacina IV) ou a Cefotaxima IV.',
    comentariosAlternativas: {
      A: 'Correta. Pneumonia em lactentes < 2 meses é invariavelmente classificada como grave e exige internação hospitalar com esquema parenteral.',
      B: 'Incorreta. O tratamento ambulatorial é expressamente contraindicado em menores de 2 meses pelo alto risco de sepse e rápida deterioração clínica.',
      C: 'Incorreta. Taquipneia (62 irpm) e tiragem indicam infecção respiratória baixa e não cólica.',
      D: 'Incorreta. Broncodilatadores orais são ineficazes e omitir antibiótico nessa faixa etária é negligência grave.',
    },
  },
  {
    id: 'ped-irab-029',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Microbiologia da PAC Típica: Streptococcus pneumoniae como Patógeno Primário',
    isRevisao: false,
    enunciado:
      'Em relação à microbiologia da Pneumonia Adquirida na Comunidade (PAC) bacteriana típica na infância após o período neonatal (a partir dos 2 meses de vida até a adolescência), qual agente bacteriano permanece consistentemente como o MAIS FREQUENTE em todas as faixas etárias pediátricas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Streptococcus pneumoniae (Pneumococo).',
      },
      {
        id: 'B',
        texto:
          'Pseudomonas aeruginosa.',
      },
      {
        id: 'C',
        texto:
          'Legionella pneumophila.',
      },
      {
        id: 'D',
        texto:
          'Mycobacterium leprae.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Microbiologia da Pneumonia Adquirida na Comunidade na Pediatria:\n\n1. O Protagonismo Absoluto do Pneumococo:\n   - O STREPTOCOCCUS PNEUMONIAE (diplococo Gram-positivo encapsulado) é a bactéria mais comumente isolada como causa de PAC típica em qualquer faixa etária da infância fora do período neonatal;\n   - Mesmo após a introdução universal da vacina pneumocócica conjugada (VPC10 no SUS e VPC13/VPC15 na rede privada), que reduziu substancialmente as taxas de hospitalização e doença invasiva, o pneumococo continua liderando as causas bacterianas devido à emergência de sorotipos não vacinais (como os sorotipos 19A e 3);\n\n2. Outros Patógenos Bacterianos Relevantes:\n   - Staphylococcus aureus: agente agressivo causador de pneumonia necrosante, pneumatoceles e empiema;\n   - Streptococcus pyogenes (Streptococcus do Grupo A): evolução fulminante com derrame pleural precoce;\n   - Haemophilus influenzae: o tipo b (Hib) tornou-se raríssimo após a vacina pentavalente, mas cepas não tipáveis (NTHi) podem causar PAC;\n   - Bactérias atípicas (Mycoplasma pneumoniae e Chlamydia pneumoniae): mais prevalentes em escolares (> 5 anos) e adolescentes, com quadro arrastado de tosse seca e infiltrado intersticial.',
    comentariosAlternativas: {
      A: 'Correta. O Streptococcus pneumoniae (pneumococo) é o principal agente etiológico bacteriano da PAC típica em todas as faixas etárias após o período neonatal.',
      B: 'Incorreta. Pseudomonas ocorre quase exclusivamente em pacientes com fibrose cística, bronquiectasias ou imunodeficiências graves.',
      C: 'Incorreta. Legionella é rara na infância, associada a sistemas de ar condicionado em adultos.',
      D: 'Incorreta. Mycobacterium leprae causa hanseníase cutâneo-neural e não pneumonia bacteriana aguda.',
    },
  },
  {
    id: 'ped-irab-030',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Semiologia Respiratória: Síndrome de Condensação Alveolar Típica',
    isRevisao: false,
    enunciado:
      'Um menino de 4 anos é levado ao pronto-atendimento com história de febre alta de 39,2 °C há 48 horas, prostração, tosse produtiva e dor torácica no hemitórax direito. O médico assistente suspeita de pneumonia bacteriana típica de lobo médio/inferior direito e realiza o exame físico do tórax. Quais achados semiológicos compõem a SÍNDROME DE CONDENSAÇÃO PULMONAR ALVEOLAR CLÁSSICA à inspeção, palpação, percussão e ausculta na topografia afetada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Submacicez ou macicez à percussão torácica, aumento do frêmito toracovocal (FTV) à palpação, redução do murmúrio vesicular associada a estertores crepitantes tele-inspiratórios e presença de sopro tubário / broncofonia.',
      },
      {
        id: 'B',
        texto:
          'Hipersonoridade timpânica à percussão, frêmito toracovocal abolido, sibilos difusos bilaterais sem estertores.',
      },
      {
        id: 'C',
        texto:
          'Tórax com murmúrio vesicular universalmente hiperfonético, ausência de frêmito e estridor inspiratório estritamente em membros inferiores.',
      },
      {
        id: 'D',
        texto:
          'Ausência completa de qualquer alteração semiológica, sendo a pneumonia bacteriana um diagnóstico exclusivamente oftalmológico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Semiologia da Síndrome de Condensação Alveolar (Pneumonia Lobar Típica):\n\n1. Fisiopatologia Semiológica:\n   - Na condensação alveolar, o ar dos alvéolos é substituído por um exsudato inflamatório rico em neutrófilos, hemácias e fibrina (hepatização);\n   - O tecido pulmonar condensado (sólido) transmite as vibrações acústicas da voz melhor do que o pulmão aerado normal;\n\n2. Os Quatro Tempos do Exame Físico:\n   - 1. INSPEÇÃO: expansibilidade torácica diminuída do lado acometido e taquipneia;\n   - 2. PALPAÇÃO: FRÊMITO TORACOVOCAL (FTV) AUMENTADO na projeção do lobo condensado (o meio sólido conduz melhor o som das cordas vocais até a mão do examinador);\n   - 3. PERCUSSÃO: SUBMACICEZ OU MACICEZ localizada (o som perde o timpanismo normal);\n   - 4. AUSCULTA:\n     * Redução ou abolição do murmúrio vesicular fisiológico local;\n     * ESTERTORES CREPITANTES FINOS ("ao final da inspiração" / tele-inspiratórios), provocados pela abertura súbita e explosiva de alvéolos colapsados por exsudato;\n     * SOPRO TUBÁRIO (transmissão direta dos ruídos da traqueia e grandes brônquios através da condensação sólida);\n     * Broncofonia aumentada e pectorilóquia afônica (voz sussurrada auscultada nitidamente sobre a condensação).',
    comentariosAlternativas: {
      A: 'Correta. Macicez, FTV aumentado, estertores crepitantes tele-inspiratórios e sopro tubário caracterizam a condensação alveolar bacteriana clássica.',
      B: 'Incorreta. Hipersonoridade e FTV abolido caracterizam pneumotórax ou crise grave de asma com hiperinsuflação.',
      C: 'Incorreta. Estridor inspiratório ocorre em obstrução alta de laringe/traqueia superior e não em membros.',
      D: 'Incorreta. A semiologia torácica é clássica e mandatória na avaliação respiratória.',
    },
  },
  {
    id: 'ped-irab-031',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumonia de Lobo Inferior e Dor Abdominal Aguda Referida (Simulando Apendicite)',
    isRevisao: false,
    enunciado:
      'Um menino de 5 anos previamente hígido é levado ao pronto-socorro infantil com queixa de febre alta (39,0 °C), vômitos e dor intensa no abdome (hipocôndrio direito e fossa ilíaca direita) há 2 dias. A mãe relata tosse discreta iniciada no mesmo período. Ao exame físico: paciente prostrado, febril, com abdome doloroso à palpação profunda em hemiabdome direito, porém sem descompressão dolorosa (Blumberg negativo) e com ruídos hidroaéreos presentes. O médico nota taquipneia com 46 irpm e ausculta pulmonar com estertores crepitantes e redução do murmúrio em base pulmonar direita. A radiografia de tórax revela condensação alveolar em lobo inferior direito. Qual é a explicação fisiopatológica para a dor abdominal referida nesta criança?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de dor pleurítica referida no abdome, resultante da inervação sensitiva compartilhada da pleura diafragmática periférica e da parede abdominal anterior através dos nervos intercostais inferiores (T7 a T11); um diagnóstico diferencial clássico de abdome agudo cirúrgico / apendicite em pediatria.',
      },
      {
        id: 'B',
        texto:
          'O pulmão direito desceu através do diafragma e colidiu mecanicamente contra o apêndice cecal.',
      },
      {
        id: 'C',
        texto:
          'A tosse fraturou todas as vértebras lombares provocando hemorragia retroperitoneal maciça.',
      },
      {
        id: 'D',
        texto:
          'A febre alta derrete a gordura do omento maior gerando peritonite química universal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Pneumonia de Lobos Inferiores e Dor Abdominal Simuladora de Apendicite:\n\n1. O Dilema Clínico Clássico em Pediatria:\n   - Em crianças pré-escolares e escolares, a PNEUMONIA BACTERIANA DE LOBO INFERIOR (direito ou esquerdo) frequentemente se manifesta com DOR ABDOMINAL AGUDA e vômitos como queixa principal;\n   - É um dos erros de diagnóstico mais célebres na emergência: crianças operadas de apendicectomia branca quando na verdade tinham pneumonia bacteriana;\n\n2. Fisiopatologia da Dor Referida:\n   - A pleura parietal que recobre a porção periférica do diafragma e a pleura costal basal são inervadas pelos seis últimos NERVOS INTERCOSTAIS (T7 a T11) e pelo nervo subcostal (T12);\n   - Esses mesmos nervos intercostais fornecem a inervação sensitiva somática para os músculos e para a pele da parede abdominal anterior (do epigástrio à fossa ilíaca);\n   - O processo inflamatório exsudativo da pneumonia de lobo inferior irrita a pleura diafragmática adjacente;\n   - Os impulsos álgicos convergem para os mesmos segmentos da medula espinhal, fazendo o córtex cerebral interpretar a dor como originada no abdome (dor referida metamérica);\n\n3. Regra de Ouro Semiológica:\n   - Toda criança com febre e dor abdominal DEVE TER SEU APARELHO RESPIRATÓRIO RIGOROSAMENTE EXAMINADO antes de ser encaminhada para laparotomia.',
    comentariosAlternativas: {
      A: 'Correta. A inervação compartilhada da pleura diafragmática e da parede abdominal via nervos intercostais inferiores explica a dor abdominal referida.',
      B: 'Incorreta. O diafragma é uma barreira músculo-tendínea íntegra e o pulmão não desce para o apêndice.',
      C: 'Incorreta. Tosse na pneumonia não fratura coluna lombar com choque retroperitoneal em crianças saudáveis.',
      D: 'Incorreta. Mecanismo absurdo sem qualquer fundamento biológico.',
    },
  },
  {
    id: 'ped-irab-032',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Tratamento Ambulatorial de 1ª Escolha: Amoxicilina em Altas Doses e Resistência de PBPs',
    isRevisao: false,
    enunciado:
      'Uma criança de 2 anos e 6 meses com diagnóstico de Pneumonia Adquirida na Comunidade (PAC) bacteriana típica não complicada (apresentando febre, tosse e FR de 44 irpm, sem tiragem subcostal ou hipoxemia) é atendida na Atenção Primária. O médico prescreve Amoxicilina por via oral. De acordo com as diretrizes da Sociedade Brasileira de Pediatria (SBP) e da OMS, qual é a dose recomendada de Amoxicilina e qual é a justificativa farmacológica para a utilização de DOSES ELEVADAS?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Dose de 80 a 90 mg/kg/dia (dividida a cada 8 ou 12 horas); dose elevada necessária para saturar e superar a resistência intermediária do Streptococcus pneumoniae decorrente de alterações conformacionais nas proteínas ligadoras de penicilina (PBPs).',
      },
      {
        id: 'B',
        texto:
          'Dose de 10 mg/kg/dia em dose única semanal para evitar sobrecarga renal.',
      },
      {
        id: 'C',
        texto:
          'Amoxicilina oral é proscrita; o tratamento ambulatorial deve ser feito com Vancomicina em pó diluída no suco.',
      },
      {
        id: 'D',
        texto:
          'Dose de 200 mg/kg/dia associada obrigatoriamente a ácido clavulânico para destruir a cápsula de carboidrato do vírus influenza.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Farmacoterapia da PAC Ambulatorial: Amoxicilina em Altas Doses:\n\n1. Antibiótico de Escolha e Posologia:\n   - A AMOXICILINA ORAL é o tratamento padrão-ouro de primeira linha para crianças com PAC típica não complicada tratadas em regime ambulatorial;\n   - Posologia recomendada: 80 a 90 mg/kg/dia (dividida em 2 a 3 tomadas diárias, isto é, a cada 12 horas ou 8 horas);\n\n2. Justificativa Farmacológica da "Dose Alta" (80-90 mg/kg/dia vs 40-50 mg/kg/dia):\n   - O mecanismo de resistência do Pneumococo à penicilina/amoxicilina NÃO É a produção de enzimas beta-lactamases;\n   - A resistência ocorre por MUTAÇÕES ESTRUTURAIS NAS PBPs (Penicillin-Binding Proteins - PBPs 1a, 2b e 2x), que reduzem a afinidade de ligação do antibiótico;\n   - Trata-se de uma resistência competitiva dependente de concentração no parênquima pulmonar;\n   - Ao elevar a dose da amoxicilina para 80-90 mg/kg/dia, atingem-se níveis séricos e teciduais pulmonares muito superiores à Concentração Inibitória Mínima (CIM), superando a resistência intermediária em mais de 95-98% das cepas;\n\n3. Por que NÃO usar Clavulanato na Rotina?\n   - Como o pneumococo não produz beta-lactamase, a adição de ácido clavulânico não aumenta a eficácia contra o pneumococo e adiciona efeitos colaterais gastrointestinais (diarreia acentuada).',
    comentariosAlternativas: {
      A: 'Correta. A dose de 80 a 90 mg/kg/dia de amoxicilina supera as alterações nas PBPs do pneumococo e garante eficácia bactericida tecidual.',
      B: 'Incorreta. Dose de 10 mg/kg/dia é subdose ineficaz que seleciona cepas resistentes.',
      C: 'Incorreta. Vancomicina oral não é absorvida sistemicamente (usada apenas para colite por C. difficile) e amoxicilina é a primeira escolha.',
      D: 'Incorreta. O pneumococo não produz beta-lactamase e o clavulanato não atua em vírus.',
    },
  },
  {
    id: 'ped-irab-033',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Duração do Tratamento Antimicrobiano na PAC Não Complicada: Esquemas Curtos',
    isRevisao: false,
    enunciado:
      'Uma criança de 3 anos com PAC bacteriana não complicada tratada com Amoxicilina oral em altas doses apresenta defervescência da febre em 36 horas de tratamento, normalização da frequência respiratória e recuperação plena do apetite e da disposição. A mãe questiona a médica na consulta de reavaliação de 48 horas sobre o tempo total necessário de uso do antibiótico. Com base nos ensaios clínicos randomizados recentes (como os estudos SAFER e CAP-IT) e nas diretrizes internacionais contemporâneas, qual é a duração recomendada do tratamento com amoxicilina na PAC não complicada de evolução favorável?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tempo curto de 5 a 7 dias de tratamento, esquema com eficácia clínica idêntica ao tratamento tradicional de 10 dias, com as vantagens de menor exposição a antimicrobianos, menor risco de efeitos adversos e menor indução de resistência bacteriana.',
      },
      {
        id: 'B',
        texto:
          'Mínimo obrigatório de 21 a 28 dias contínuos para garantir que nenhuma bactéria sobreviva.',
      },
      {
        id: 'C',
        texto:
          'O antibiótico deve ser suspenso imediatamente após 12 horas da primeira dose, assim que a febre ceder.',
      },
      {
        id: 'D',
        texto:
          'O tratamento deve durar exatamente 6 meses ininterruptos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Duração do Tratamento da Pneumonia Adquirida na Comunidade:\n\n1. A Quebra do Dogma dos "10 a 14 dias":\n   - Historicamente, preconizavam-se esquemas rígidos de 10 a 14 dias de amoxicilina;\n   - Grandes ensaios clínicos randomizados multicêntricos duplo-cegos (estudos SAFER no Canadá e CAP-IT no Reino Unido) compararam diretamente esquemas curtos (5 dias) com esquemas tradicionais (10 dias) em crianças com PAC não complicada;\n   - Os resultados demonstraram NÃO INFERIORIDADE estatística e clínica: a taxa de cura com 5 dias foi idêntica à de 10 dias;\n\n2. Recomendações Vigentes das Diretrizes:\n   - Diretrizes internacionais (IDSA, AAP, OMS, NICE) e a SBP recomendam atualmente esquemas curtos de 5 a 7 DIAS de amoxicilina em pacientes que apresentam resposta clínica rápida e resolução da febre nas primeiras 48 a 72 horas;\n\n3. Benefícios Estratégicos dos Esquemas Curtos:\n   - Menor seleção de cepas resistentes na microbiota nasofaríngea e intestinal;\n   - Redução significativa de efeitos adversos (diarreia, dermatite de fraldas);\n   - Maior facilidade de adesão familiar (completar 5 dias é muito mais viável do que 10 ou 14 dias);\n   - Menor custo financeiro.',
    comentariosAlternativas: {
      A: 'Correta. Esquemas de 5 a 7 dias são tão eficazes quanto 10 dias em PAC não complicada com rápida defervescência clínica.',
      B: 'Incorreta. Esquemas de 21 a 28 dias são reservados para complicações graves (empiemas volumosos, abscessos), e não PAC não complicada.',
      C: 'Incorreta. Suspender com 12 horas causaria recidiva infecciosa imediata.',
      D: 'Incorreta. Tratamento sem cabimento para infecção respiratória aguda.',
    },
  },
  {
    id: 'ped-irab-034',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Critérios Clínicos de Internação Hospitalar e Sinais de Alarme na PAC',
    isRevisao: false,
    enunciado:
      'Um lactente de 8 meses com febre alta e tosse é atendido em unidade de emergência. A mãe relata que a criança não consegue mamar há 24 horas, vomitando tudo o que ingere ("vômitos incoercíveis"). Ao exame: paciente letárgico, hipoativo, com FR de 64 irpm, batimento de asa de nariz, tiragem subcostal acentuada e SpO2 de 89% em ar ambiente. O raio-x de tórax mostra condensação lobar em base direita. Quais achados clínicos presentes neste paciente constituem INDICAÇÃO FORMAL DE INTERNAÇÃO HOSPITALAR para tratamento parenteral?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Hipoxemia comprovada (SpO2 < 92%), esforço respiratório acentuado (tiragem subcostal grave e batimento de asa de nariz), intolerância à via oral por vômitos incoercíveis com risco de desidratação e alteração do nível de consciência (letargia).',
      },
      {
        id: 'B',
        texto:
          'Apenas a presença de tosse noturna isolada em paciente com bom estado geral.',
      },
      {
        id: 'C',
        texto:
          'Temperatura axilar de 37,9 °C em lactente que mama avidamente e brinca na sala de espera.',
      },
      {
        id: 'D',
        texto:
          'Presença exclusiva de coriza hialina sem esforço respiratório.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Critérios Formais de Internação Hospitalar na Pneumonia Pediátrica:\n\n1. Sinais de Comprometimento Respiratório / Troca Gasosa:\n   - HIPOXEMIA: Saturação de O2 < 92% em ar ambiente (SBP/BTS) ou < 90% (OMS/AAP);\n   - ESFORÇO RESPIRATÓRIO MODERADO A GRAVE: tiragem subcostal acentuada, batimento de asa de nariz, gemência expiratória audível ou cianose central;\n   - Taquipneia grave (FR > 70 irpm em lactentes ou > 50 irpm em crianças maiores);\n\n2. Sinais de Gravidade Sistêmica e Falha da Via Oral:\n   - Vômitos incoercíveis ou incapacidade de ingerir líquidos e medicamentos por via oral;\n   - Sinais de desidratação moderada a grave ou choque circulatório;\n   - Alteração do estado mental: letargia, sonolência anormal, torpor ou irritabilidade extrema;\n   - Convulsões febris atípicas ou sinais de sepse;\n\n3. Fatores do Hospedeiro e de Falha Terapêutica:\n   - Idade inferior a 2 meses (critério absoluto);\n   - Falha terapêutica ambulatorial após 48 a 72 horas de amoxicilina oral bem administrada;\n   - Presença de derrame pleural volumoso, pneumatocele ou abscesso na radiografia;\n   - Comorbidades graves: anemia falciforme, imunodeficiências, cardiopatia congênita com shunt.',
    comentariosAlternativas: {
      A: 'Correta. Hipoxemia, tiragem grave, vômitos incoercíveis e letargia preenchem critérios formais e inequívocos de internação hospitalar imediata.',
      B: 'Incorreta. Tosse noturna isolada sem sinais de alarme é queixa comum manejada ambulatorialmente.',
      C: 'Incorreta. Febre baixa em lactente ativo e mamando bem não indica internação hospitalar.',
      D: 'Incorreta. Coriza hialina sem taquipneia é resfriado comum de manejo domiciliar.',
    },
  },
  {
    id: 'ped-irab-035',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Tratamento Hospitalar Parenteral de 1ª Escolha na PAC Típica Não Complicada',
    isRevisao: false,
    enunciado:
      'Uma criança de 3 anos de idade, previamente vacinada de acordo com o calendário nacional de vacinação (incluindo 3 doses de pneumocócica 10-valente e vacina pentavalente), é internada na enfermaria de Pediatria com diagnóstico de Pneumonia Adquirida na Comunidade moderada. Apresenta SatO2 de 91% (revertida para 95% com cateter nasal de O2 a 1 L/min), tiragem subcostal moderada e recusa alimentar parcial. A radiografia de tórax evidencia condensação alveolar homogênea em lobo inferior esquerdo sem derrame pleural. De acordo com as diretrizes da Sociedade Brasileira de Pediatria (SBP) e do Ministério da Saúde, qual é o antibiótico intravenoso de PRIMEIRA LINHA indicado para este paciente internado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Penicilina Cristalina intravenosa (ou Ampicilina intravenosa).',
      },
      {
        id: 'B',
        texto:
          'Vancomicina intravenosa associada a Meropenem e Polimixina B.',
      },
      {
        id: 'C',
        texto:
          'Ciprofloxacino oral associado a Anfotericina B lipossomal.',
      },
      {
        id: 'D',
        texto:
          'Gentamicina intravenosa em monoterapia por 30 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Antibioticoterapia Parenteral de Primeira Linha na PAC Hospitalizada (SBP / MS):\n\n1. O Racional do Uso Racional de Antimicrobianos:\n   - Em crianças internadas em enfermaria com PAC típica moderada (sem choque, sem derrame pleural extenso e adequadamente imunizadas), o agente predominante continua sendo o Streptococcus pneumoniae sensível ou com resistência intermediária;\n   - A PENICILINA CRISTALINA IV (200.000 a 250.000 UI/kg/dia dividida a cada 4 ou 6 horas) ou a AMPICILINA IV (150 a 200 mg/kg/dia a cada 6 horas) são os antibióticos de PRIMEIRA ESCOLHA recomendados pelas diretrizes nacionais e internacionais (IDSA / SBP);\n\n2. Por que Não Usar Ceftriaxona de Rotina?\n   - A Ceftriaxona (cefalosporina de 3ª geração) possui espectro amplo desnecessário para PAC típica não complicada em crianças vacinadas;\n   - O uso indiscriminado de ceftriaxona seleciona bactérias Gram-negativas produtoras de ESBL (beta-lactamases de espectro estendido) e enterococos resistentes no ambiente hospitalar;\n   - A ceftriaxona deve ser reservada para pneumonias muito graves com sepse/choque, crianças não vacinadas contra Hib ou falha comprovada após 48-72h de penicilina/ampicilina.',
    comentariosAlternativas: {
      A: 'Correta. Penicilina Cristalina IV ou Ampicilina IV são as drogas de primeira linha consagradas para PAC típica internada em enfermaria.',
      B: 'Incorreta. Meropenem e vancomicina são antibióticos de reserva para infecções nosocomiais graves por germes multirresistentes.',
      C: 'Incorreta. Fluoroquinolonas e antifúngicos não têm indicação em PAC comunitária típica.',
      D: 'Incorreta. Aminoglicosídeos possuem fraca penetração no parênquima pulmonar infectado e não cobrem pneumococo.',
    },
  },
  {
    id: 'ped-irab-036',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Indicações Formais de Cefalosporina de 3ª Geração (Ceftriaxona) na PAC',
    isRevisao: false,
    enunciado:
      'Embora a Penicilina Cristalina e a Ampicilina sejam as drogas de primeira linha na PAC típica hospitalizada, em quais situações clínicas específicas a prescrição imediata de CEFALOSPORINA DE 3ª GERAÇÃO (Ceftriaxona intravenosa ou Cefotaxima) encontra-se FORMALMENTE INDICADA desde a admissão?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Pneumonia muito grave com instabilidade hemodinâmica ou choque séptico; crianças com esquema vacinal incompleto ou não vacinadas contra Haemophilus influenzae tipo b (Hib); e casos de falha terapêutica documentada após 48 a 72 horas de uso correto de aminopenicilina.',
      },
      {
        id: 'B',
        texto:
          'Em todos os resfriados comuns de outono em crianças que frequentam creche.',
      },
      {
        id: 'C',
        texto:
          'Exclusivamente em crianças que apresentam dentes de leite cariados sem qualquer sintoma respiratório.',
      },
      {
        id: 'D',
        texto:
          'Apenas se a criança for alérgica comprovada a cefalosporinas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Indicações Específicas de Cefalosporinas de 3ª Geração (Ceftriaxona / Cefotaxima) na PAC:\n\n1. Pneumonia Muito Grave com Choque Séptico / Instabilidade Hemodinâmica:\n   - Pacientes admitidos em choque séptico, com necessidade de drogas vasoativas ou suporte ventilatório invasivo necessitam de cobertura rápida e bactericida de amplo espectro com Ceftriaxona IV (80 a 100 mg/kg/dia);\n\n2. Crianças Não Vacinadas ou com Vacinação Incompleta para Hib:\n   - O Haemophilus influenzae tipo b (Hib) é um bastonete Gram-negativo altamente invasivo e frequentemente produtor de beta-lactamase (resistente à ampicilina e penicilina pura);\n   - Em crianças não imunizadas com a vacina pentavalente, a ceftriaxona é mandatória para garantir cobertura bactericida contra cepas produtoras de beta-lactamase;\n\n3. Falha Clínica Terapêutica Após 48-72h de Ampicilina/Penicilina:\n   - Criança que mantém febre alta, piora do esforço respiratório e da toxemia a despeito de 48 a 72h de penicilina/ampicilina, sugerindo cepa com alta resistência ou germe Gram-negativo;\n\n4. Pneumonia Associada a Foco em Sistema Nervoso Central (Meningite Concomitante):\n   - Pela excelente penetração liquórica da ceftriaxona em doses meníngeas (100 mg/kg/dia).',
    comentariosAlternativas: {
      A: 'Correta. Choque séptico, não vacinados contra Hib e falha após 48-72h de penicilina são as indicações formais consagradas de ceftriaxona.',
      B: 'Incorreta. Resfriado comum é viral e não recebe antibióticos.',
      C: 'Incorreta. Cárie dentária sem repercussão pulmonar não indica ceftriaxona.',
      D: 'Incorreta. Prescrever ceftriaxona para alérgico a cefalosporinas é erro médico grave por risco de anafilaxia.',
    },
  },
  {
    id: 'ped-irab-037',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Falha Terapêutica na PAC após 48 a 72 Horas: Investigação de Derrame Pleural Parapneumônico',
    isRevisao: false,
    enunciado:
      'Uma menina de 3 anos iniciou tratamento ambulatorial com Amoxicilina em dose adequada (90 mg/kg/dia) para PAC típica. Após 72 horas de uso rigoroso da medicação, a mãe retorna à unidade de saúde desesperada porque a filha mantém febre alta diária (39,4 °C), prostração acentuada, piora da taquipneia (FR de 56 irpm) e dor intensa ao respirar no hemitórax direito. O médico realiza a ausculta e constata abolição completa do murmúrio vesicular e macicez maciça na metade inferior do hemitórax direito. Diante da FALHA TERAPÊUTICA nas primeiras 48 a 72 horas, qual complicação é a principal responsável e qual exame de imagem imediato deve ser solicitado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Derrame Pleural Parapneumônico (complicado ou empiema); devendo ser realizada imediatamente radiografia de tórax (em incidências posteroanterior, perfil e laurel/decúbito lateral se necessário) e ultrassonografia de tórax para confirmação e estadiamento do líquido pleural.',
      },
      {
        id: 'B',
        texto:
          'Fibrose pulmonar idiopática senil; devendo ser solicitada broncoscopia com biópsia transbrônquica.',
      },
      {
        id: 'C',
        texto:
          'Estenose congênita do piloro descompensada; indicando ecografia gástrica de urgência.',
      },
      {
        id: 'D',
        texto:
          'Houve cura bacteriana e a febre é psicossomática; a conduta é suspender qualquer antibiótico e dar alta.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Abordagem da Falha Terapêutica na PAC Pediátrica após 48 a 72 Horas:\n\n1. Tempo Fisiológico Esperado de Resposta:\n   - O antibiótico correto atinge concentrações teciduais eficazes e promove a queda da carga bacteriana nas primeiras 48 horas;\n   - Espera-se DEFERVESCÊNCIA DA FEBRE e melhora visível do apetite e do padrão respiratório entre 48 e 72 horas de tratamento;\n\n2. Investigação Obrigatória Diante da Falha de Resposta:\n   - Se a febre persiste inalterada ou se há piora do desconforto após 72h, a PRIMEIRA HIPÓTESE É COMPLICAÇÃO LOCAL:\n     * DERRAME PLEURAL PARAPNEUMÔNICO (complicado ou empiema pleural);\n     * Pneumonia necrosante / abscesso pulmonar;\n     * Pneumatocele sob tensão ou pneumotórax;\n   - A abolição do murmúrio vesicular e a macicez maciça à percussão constituem a semiologia típica de líquido acumulado no espaço pleural;\n\n3. Conduta Imediata de Imagem:\n   - RADIOGRAFIA DE TÓRAX: confirma a presença de opacidade homogênea com apagamento do seio costofrênico e linha de menisco (parábola de Damoiseau);\n   - ULTRASSONOGRAFIA DE TÓRAX: exame padrão-ouro para estimar o volume do derrame, avaliar espessamento pleural e detectar a presença de septações/traves de fibrina (essencial para guiar toracocentese, drenagem ou toracoscopia).',
    comentariosAlternativas: {
      A: 'Correta. Derrame pleural parapneumônico é a principal causa de falha após 48-72h de amoxicilina e exige raio-x e ultrassom de tórax imediatos.',
      B: 'Incorreta. Fibrose idiopática senil acomete adultos idosos e não causa febre aguda de 72 horas em crianças.',
      C: 'Incorreta. Estenose de piloro acomete lactentes < 2 meses com vômitos em jato não biliosos e alcalose metabólica.',
      D: 'Incorreta. Persistência de febre alta de 39,4 °C com piora clínica comprova complicação grave infecciosa e não psicossomática.',
    },
  },
  {
    id: 'ped-irab-038',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumonia Estafilocócica por Staphylococcus aureus: Características e Imagem Típica',
    isRevisao: false,
    enunciado:
      'Um lactente de 1 ano e 2 meses é admitido na emergência pediátrica em estado grave e toxêmico, após história de febre alta, tosse e piora respiratória fulminante em menos de 24 horas. Na anamnese, a mãe refere que há 10 dias a criança apresentou furúnculos e lesões crostosas de impetigo na região perioral e cervical. Ao exame físico: paciente pálido, gemente, com tiragem intercostal grave, taquicardia (FC de 180 bpm) e SatO2 de 86%. A radiografia de tórax evidencia volumosa condensação alveolar à direita com presença de múltiplas imagens císticas radiotransparentes de paredes finas cheias de ar (pneumatoceles) e pneumotórax com derrame pleural loculado associado. Qual agente bacteriano clássico apresenta este perfil de agressividade tecidual necrosante e qual cobertura antimicrobiana parenteral deve ser instituída?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Staphylococcus aureus; indicando cobertura antimicrobiana parenteral imediata direcionada (Oxacilina IV associada a Ceftriaxona ou Vancomicina IV se suspeita de CA-MRSA), além de drenagem torácica fechada de urgência.',
      },
      {
        id: 'B',
        texto:
          'Bordetella pertussis; indicando tratamento exclusivamente com claritromicina oral em domicílio.',
      },
      {
        id: 'C',
        texto:
          'Chlamydia trachomatis; indicando apenas colírio de nitrato de prata.',
      },
      {
        id: 'D',
        texto:
          'Vírus Sincicial Respiratório; indicando inalação exclusiva com água destilada.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Pneumonia Estafilocócica na Infância (Staphylococcus aureus):\n\n1. Apresentação Clínica Agressiva:\n   - O S. aureus (tanto cepas sensíveis - MSSA quanto cepas comunitárias resistentes à oxacilina - CA-MRSA) é um dos patógenos mais virulentos da pediatria;\n   - Apresentação fulminante em lactentes jovens: toxemia grave, choque séptico precoce e deterioração respiratória em menos de 24 a 48 horas;\n   - História associada comum: lesões cutâneas prévias (furunculose, impetigo, celulite) que serviram de porta de entrada hematogênica, ou pós-infecção viral por Influenza;\n\n2. Achados Radiológicos Patognomônicos:\n   - PNEUMATOCELES: cavidades císticas de paredes finas formadas por necrose bacteriana dos bronquíolos distais com mecanismo de válvula;\n   - RUPTURA DE PNEUMATOCELE: alto risco de PNEUMOTÓRAX HIPERTENSIVO ou PIOPNEUMOTÓRAX súbito;\n   - DERRAME PLEURAL EMPIEMATOSO: surge muito precocemente em mais de 60 a 80% dos casos de pneumonia estafilocócica;\n\n3. Manejo Terapêutico Imediato:\n   - Estabilização hemodinâmica e DRENAGEM TORÁCICA FECHADA com selo d’água de urgência;\n   - Antibioticoterapia parenteral empírica: OXACILINA IV (200 mg/kg/dia) associada a Ceftriaxona (ou Vancomicina IV se alta prevalência local de CA-MRSA ou paciente chocado).',
    comentariosAlternativas: {
      A: 'Correta. Lesões cutâneas prévias, evolução fulminante, pneumatoceles, pneumotórax e derrame são marcas registradas do Staphylococcus aureus.',
      B: 'Incorreta. Bordetella pertussis causa coqueluche com tosse paroxística quintosa e guincho, sem pneumatoceles ou derrame.',
      C: 'Incorreta. Chlamydia causa pneumonia afebril arrastada no lactente jovem < 3 meses.',
      D: 'Incorreta. VSR não causa destruição pulmonar necrótica maciça com pneumatoceles e pneumotórax hipertensivo.',
    },
  },
  {
    id: 'ped-irab-039',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumonia Pós-Influenza por S. aureus Produtor de Toxina PVL',
    isRevisao: false,
    enunciado:
      'Um escolar de 7 anos vinha em recuperação de um quadro confirmado de Influenza A (gripe) há 6 dias. No 7º dia, quando a febre já havia cedido, volta a apresentar febre alta de 40 °C de início abrupto, calafrios intensos, tosse produtiva com raias de sangue (hemoptise), dor torácica e taquidispneia grave. A radiografia de tórax revela extensas áreas de consolidação com áreas radiotransparentes de cavitação precoce e necrose pulmonar bilateral. A bacterioscopia do escarro revela cocos Gram-positivos em cachos. Qual fator de virulência de cepas de Staphylococcus aureus adquiridas na comunidade (CA-MRSA/MSSA) está intimamente associado a este quadro de pneumonia necrosante pós-influenza?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Leucocidina de Panton-Valentine (PVL), uma citotoxina formadora de poros que induz lise celular massiva de neutrófilos humanos e necrose tecidual hemorrágica extensa no parênquima pulmonar.',
      },
      {
        id: 'B',
        texto:
          'Toxina eritrogênica tipo A que destrói exclusivamente as válvulas cardíacas mitrais.',
      },
      {
        id: 'C',
        texto:
          'Proteína Spike viral que replica o DNA mitocondrial dos macrófagos alveolares.',
      },
      {
        id: 'D',
        texto:
          'Enterotoxina termoestável que causa necrose dos glomérulos renais sem afetar os pulmões.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Pneumonia Necrosante Estafilocócica Pós-Influenza e a Toxina PVL:\n\n1. Associação Sinérgica "Influenza + S. aureus":\n   - A infecção prévia pelo vírus Influenza lesa profundamente o epitélio respiratório e remove o ácido siálico das células, expondo receptores celulares basais;\n   - Isso cria o microambiente perfeito para a adesão, invasão bacteriana e sobreinfecção fulminante por Staphylococcus aureus;\n\n2. A Leucocidina de Panton-Valentine (PVL):\n   - É uma exotoxina bicomponente (LukS-PV e LukF-PV) codificada por fagos carreados por muitas cepas de S. aureus comunitário (especialmente linhagens CA-MRSA como a USA300, e algumas linhagens de MSSA);\n   - A toxina liga-se aos receptores de membrana dos polimorfonucleares neutrófilos, formando poros que desestabilizam o gradiente iônico celular;\n   - Provoca Lise Maciça dos Neutrófilos, liberando enzimas proteolíticas lisossomais intracelulares diretamente na matriz pulmonar;\n   - O resultado anátomo-patológico é a PNEUMONIA NECROSANTE GRAVE: necrose hemorrágica extensa, cavitações precoces, hemoptise, leucopenia de consumo e altíssima taxa de letalidade se não reconhecida e tratada precocemente.',
    comentariosAlternativas: {
      A: 'Correta. A leucocidina de Panton-Valentine (PVL) lisa neutrófilos e causa a necrose hemorrágica fulminante da pneumonia estafilocócica pós-influenza.',
      B: 'Incorreta. Toxina eritrogênica é do Streptococcus pyogenes e causa escarlatina, não pneumonia necrosante estafilocócica.',
      C: 'Incorreta. Proteína Spike é de coronavírus e não de bactérias.',
      D: 'Incorreta. Enterotoxinas estafilocócicas causam intoxicação alimentar aguda alimentar, não pneumonia.',
    },
  },
  {
    id: 'ped-irab-040',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumonia por Streptococcus pyogenes (Streptococcus do Grupo A - GAS)',
    isRevisao: false,
    enunciado:
      'Uma pré-escolar de 4 anos é internada com pneumonia bacteriana aguda complicada por grande derrame pleural exsudativo em hemitórax esquerdo formado em menos de 24 horas de febre alta. A paciente queixa-se de dor torácica lancinante à inspiração e apresenta erupção cutânea micropapular eritematosa difusa em lixa (exantema escarlatiniforme) associada à língua em framboesa. A toracocentese diagnóstica dá saída a líquido sero-hemorrágico/turvo, e a bacterioscopia pelo Gram evidencia cocos Gram-positivos dispostos em cadeias lineares ("estreptococos"). Qual patógeno é o causador desta apresentação clínica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Streptococcus pyogenes (Streptococcus beta-hemolítico do Grupo A de Lancefield).',
      },
      {
        id: 'B',
        texto:
          'Escherichia coli enteropatogênica clássica.',
      },
      {
        id: 'C',
        texto:
          'Klebsiella pneumoniae produtora de carbapenemase (KPC).',
      },
      {
        id: 'D',
        texto:
          'Mycoplasma pneumoniae atípico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Pneumonia Invasiva por Streptococcus pyogenes (GAS):\n\n1. Aspectos Clínicos e Epidemiológicos:\n   - O Streptococcus pyogenes (Grupo A de Lancefield) é uma causa relativamente menos comum que o pneumococo, porém EXTREMAMENTE AGRESSIVA de pneumonia bacteriana comunitária na infância;\n   - Acomete tipicamente crianças na faixa pré-escolar e escolar (3 a 7 anos);\n   - Apresentação de início abrupto com febre alta, toxemia, dor torácica pleurítica intensa e prostração;\n\n2. Complicação Marcante: O Derrame Pleural Precoce e Maciço:\n   - O GAS tem tropismo acentuado pela pleura;\n   - Em mais de 80% a 90% dos casos de pneumonia por GAS, ocorre DERRAME PLEURAL EMPIEMATOSO que se forma com velocidade espantosa (em menos de 24 a 48 horas);\n   - O líquido pleural é tipicamente exsudativo, com aspecto turvo ou sero-hemorrágico e pH muito baixo;\n\n3. Associações Clínicas Típicas:\n   - Presença simultânea de manifestações mediadas por exotoxinas pirogênicas estreptocócicas (exantema escarlatiniforme em lixa, enantema lingual em framboesa);\n   - Risco elevado de Síndrome do Choque Tóxico Estreptocócico (STSS);\n   - Sensibilidade: continua 100% sensível à Penicilina e Ampicilina, associando-se Clindamicina nos casos graves para bloquear a síntese de toxinas ribossômicas.',
    comentariosAlternativas: {
      A: 'Correta. Cocos Gram-positivos em cadeias com derrame pleural precoce e exantema escarlatiniforme identificam o Streptococcus pyogenes (GAS).',
      B: 'Incorreta. E. coli é bacilo Gram-negativo que causa diarreia e infecção urinária.',
      C: 'Incorreta. KPC é bacilo Gram-negativo multirresistente hospitalar.',
      D: 'Incorreta. Mycoplasma não tem parede celular (não cora ao Gram) e não forma cadeias de cocos Gram-positivos.',
    },
  },
  {
    id: 'ped-irab-041',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Derrame Pleural Parapneumônico Complicado e Empiema: Análise Bioquímica do Líquido Pleural',
    isRevisao: false,
    enunciado:
      'Uma criança de 2 anos internada com PAC complicada por derrame pleural volumoso é submetida à toracocentese diagnóstica guiada por ultrassonografia. Quais parâmetros bioquímicos e citológicos obtidos na análise do líquido pleural DEFINEM formalmente a presença de um DERRAME PARAPNEUMÔNICO COMPLICADO / EMPIEMA PLEURAL, indicando obrigatoriamente a necessidade de DRENAGEM TORÁCICA FECHADA?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Aspecto francamente purulento ("pus evidente"), OU presença de bactérias à bacterioscopia (Gram) ou cultura positiva, OU alterações bioquímicas caracterizadas por pH < 7,20, glicose < 40 a 50 mg/dL e desidrogenase lática (LDH) > 1.000 U/L.',
      },
      {
        id: 'B',
        texto:
          'Líquido cristalino límpido como água de rocha, pH de 7,50, glicose de 120 mg/dL e LDH de 50 U/L.',
      },
      {
        id: 'C',
        texto:
          'Ausência completa de leucócitos e presença de 100% de eosinófilos com cristais de colesterol purificados.',
      },
      {
        id: 'D',
        texto:
          'Líquido leitoso com triglicerídeos acima de 5.000 mg/dL compatível com quilotórax congênito.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Critérios Diagnósticos de Derrame Parapneumônico Complicado e Empiema Pleural:\n\n1. As Fases Evolutivas do Derrame Parapneumônico (Light et al.):\n   - Fase 1 (Exsudativa Simples): líquido seroso claro, estéril, pH > 7,20-7,30, glicose > 60 mg/dL, LDH < 1.000 U/L -> resolve apenas com antibiótico sistêmico, sem drenagem;\n   - Fase 2 (Fibrinopurulenta / Complicada): invasão bacteriana do espaço pleural com deposição intensa de fibrina e migração massiva de neutrófilos;\n   - Fase 3 (Organização / Carapaça Pleural): proliferação de fibroblastos formando membranas espessas inelásticas ("peel" pleural);\n\n2. Critérios Mandatórios de Drenagem Pleural (Fase 2 / Empiema):\n   - PUS FRANCO (aspecto macroscópico purulento espesso) = EMPIEMA;\n   - BACTERIOSCOPIA (Gram) POSITIVA ou CULTURA POSITIVA no líquido pleural;\n   - CRITÉRIOS BIOQUÍMICOS DE METABOLISMO BACTERIANO ANAERÓBIO E LÓCULO FECHADO:\n     * pH < 7,20 (acidose pleural por fermentação láctica bacteriana e necrose leucocitária);\n     * Glicose < 40 a 50 mg/dL (consumo maciço de glicose pelos neutrófilos e bactérias);\n     * LDH > 1.000 U/L (marcador de lise e morte celular exuberante no espaço pleural);\n\n3. Conduta Terapêutica Imperativa:\n   - A presença de qualquer um desses critérios indica DRENAGEM TORÁCICA TUBULAR FECHADA com selo d’água (a manutenção de pus fechado perpetua a sepse e leva à carapaça pleural inelástica).',
    comentariosAlternativas: {
      A: 'Correta. Pus evidente, Gram/cultura positivos, pH < 7,20, glicose < 40-50 mg/dL e LDH > 1.000 U/L definem empiema/derrame complicado que exige drenagem.',
      B: 'Incorreta. Este perfil caracteriza um transudato límpido ou derrame simples não complicado que não requer dreno.',
      C: 'Incorreta. O empiema cursa com predomínio de mais de 90% de neutrófilos degenerados (piócitos), e não eosinófilos.',
      D: 'Incorreta. Quilotórax decorre de lesão do ducto torácico linfático e não de infecção bacteriana bacteriana.',
    },
  },
  {
    id: 'ped-irab-042',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Manejo do Empiema Loculado: Fibrinolíticos Intrapleurais vs Videotoracoscopia (VATS)',
    isRevisao: false,
    enunciado:
      'Uma criança de 3 anos com empiema pleural pós-pneumocócico encontra-se com dreno de tórax em selo d’água há 48 horas. A ultrassonografia torácica de controle evidencia que o líquido pleural tornou-se multiloculado, com múltiplas traves espessas de fibrina que compartimentalizam o espaço pleural em lojas isoladas ("aspecto em favo de mel"), com débito diário do dreno quase nulo e persistência de febre e hipoxemia. De acordo com as diretrizes da Sociedade Brasileira de Pediatria e da British Thoracic Society (BTS), quais opções terapêuticas avançadas de desbridamento pleural são indicadas para desobstruir as loculações?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Instilação intrapleural de agente fibrinolítico através do dreno de tórax (como a Alteplase/tPA) para lise das traves de fibrina e facilitação da drenagem; OU realização de Cirurgia Torácica Videoassistida (VATS - Videotoracoscopia) precoce para debridamento mecânico e lise das lojas sob visualização direta.',
      },
      {
        id: 'B',
        texto:
          'Retirada imediata do dreno e colocação de compressas de água fria no tórax sem qualquer outra medida.',
      },
      {
        id: 'C',
        texto:
          'Pneumectomia total profilática bilateral de urgência.',
      },
      {
        id: 'D',
        texto:
          'Injeção de formol a 10% dentro do espaço pleural para mumificar a bactéria.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo Avançado do Empiema Pleural Multiloculado:\n\n1. O Problema da Fase Fibrinopurulenta Loculada:\n   - A fibrina forma traves e septos densos que criam lojas líquidas fechadas isoladas;\n   - O dreno torácico simples drena apenas a loja em que sua ponta está inserida, deixando as outras lojas purulentas presas, perpetuando o foco séptico;\n\n2. Duas Estratégias Consagradas com Eficácia Equivalente:\n   - 1. TERAPIA FIBRINOLÍTICA INTRAPLEURAL:\n     * Instilação de ativador tecidual do plasminogênio recombinante (Alteplase / rtPA) diretamente através do dreno torácico existente;\n     * O fibrinolítico cliva a fibrina, rompe os septos e transforma o líquido multiloculado em líquido livre, promovendo drenagem maciça e desencarceramento do pulmão;\n     * Altamente eficaz, evita cirurgia em mais de 80-85% dos pacientes pediátricos;\n   - 2. CIRURGIA TORÁCICA VIDEOASSISTIDA (VATS / Videotoracoscopia):\n     * Abordagem cirúrgica minimamente invasiva com câmera endoscópica;\n     * Permite a aspiração de pus, lise mecânica direta das traves de fibrina, lavagem exaustiva da cavidade com soro fisiológico e posicionamento ideal do dreno sob visão direta;\n     * Excelente desfecho quando realizada precocemente (nos primeiros dias de loculação);\n   - Ambas as abordagens são amplamente aceitas e consagradas, sendo a escolha guiada pela disponibilidade de cirurgião pediátrico torácico e experiência do centro.',
    comentariosAlternativas: {
      A: 'Correta. Fibrinolítico intrapleural (tPA) ou videotoracoscopia (VATS) são as opções comprovadas para desfazer lojas de fibrina no empiema multiloculado.',
      B: 'Incorreta. Retirar o dreno com pus retido levaria a sepse descontrolada e encarceramento pulmonar.',
      C: 'Incorreta. Ressecção pulmonar radical é desnecessária e mutilante; o parênquima se recupera totalmente após a drenagem.',
      D: 'Incorreta. Formol é cáustico tóxico e letal para tecidos vivos.',
    },
  },
  {
    id: 'ped-irab-043',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumonia Necrosante e Abscesso Pulmonar: Diagnóstico Tomográfico e Manejo Clínico',
    isRevisao: false,
    enunciado:
      'Um menino de 5 anos com pneumonia comunitária grave por Streptococcus pneumoniae sorotipo 3 mantém picos febris diários após 5 dias de antibioticoterapia intravenosa com Ampicilina associada a dreno torácico funcionante. Realiza Tomografia Computadorizada (TC) de tórax com contraste que revela perda da arquitetura anatômica do lobo superior direito, com ausência de realce parenquimatoso após a injeção do meio de contraste e presença de múltiplas pequenas cavitações hipodensas coalescentes com nível hidroaéreo, sem grandes lojas pleurais residuais. O laudo radiológico confirma PNEUMONIA NECROSANTE. Estando a criança clinicamente estável, afebril nas últimas 12 horas e sem insuficiência respiratória aguda, qual é a conduta terapêutica recomendada pela literatura pediátrica contemporânea?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tratamento eminentemente conservador, mantendo antibioticoterapia intravenosa direcionada por tempo mais prolongado (habitualmente 3 a 4 semanas) e suporte clínico; uma vez que a pneumonia necrosante na infância apresenta excelente taxa de cicatrização e regeneração do parênquima pulmonar a longo prazo, devendo-se evitar ressecções cirúrgicas agressivas desnecessárias.',
      },
      {
        id: 'B',
        texto:
          'Lobectomia pulmonar aberta de emergência em até 2 horas por risco de gangrena gasosa.',
      },
      {
        id: 'C',
        texto:
          'Suspensão imediata de todos os antibióticos e alta hospitalar para tratamento fitoterápico.',
      },
      {
        id: 'D',
        texto:
          'Instilação de ácido clorídrico dentro da traqueia para cauterizar as cavitações.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Pneumonia Necrosante na Pediatria:\n\n1. Fisiopatologia e Diagnóstico Tomográfico:\n   - A pneumonia necrosante é uma complicação grave da PAC caracterizada por isquemia microvascular e necrose de liquefação do parênquima pulmonar condensado;\n   - Principais agentes: Streptococcus pneumoniae (especialmente sorotipos 3 e 19A), Staphylococcus aureus e Streptococcus pyogenes;\n   - TC de tórax com contraste (padrão-ouro): evidencia áreas de hipoatenuação sem impregnação de contraste (isquemia tecidual) evoluindo para cavidades múltiplas de paredes finas sem cápsula espessa, frequentemente com nível hidroaéreo;\n\n2. O Notável Potencial de Regeneração Pulmonar Pediátrico:\n   - Em adultos, a necrose pulmonar frequentemente evolui com destruição fibrótica irreparável que exige lobectomia cirúrgica;\n   - Na PEDIATRIA, o pulmão possui impressionante capacidade de regeneração alveolar e remodelação brônquica;\n   - Múltiplos estudos de seguimento tomográfico de longo prazo demonstraram que crianças tratadas clinicamente com ANTIBIOTICOTERAPIA PROLONGADA (3 a 4 semanas) apresentam RESOLUÇÃO COMPLETA DAS CAVIDADES em 6 a 12 meses, com recuperação total da função pulmonar;\n\n3. Princípio de Conduta: "Não Corra para Operar o Pulmão da Criança":\n   - A cirurgia (lobectomia ou ressecção cuneiforme) só é indicada em casos excepcionais de complicações mecânicas fatais refratárias (fístula broncopleural maciça de alto débito que impede a ventilação mecânica, hemoptise vultosa incontrolável ou sepse refratária com abscesso gigante sob tensão).',
    comentariosAlternativas: {
      A: 'Correta. O manejo da pneumonia necrosante na infância é conservador com antibioticoterapia prolongada, pois a capacidade de regeneração pulmonar pediátrica é excelente.',
      B: 'Incorreta. Ressecções cirúrgicas de urgência aumentam morbimortalidade e são evitadas na criança clinicamente estável.',
      C: 'Incorreta. Suspender antibióticos em infecção necrosante levaria a choque séptico.',
      D: 'Incorreta. Ácido clorídrico causaria lesão cáustica pulmonar letal.',
    },
  },
  {
    id: 'ped-irab-044',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumatoceles Pós-Infecciosas: Fisiopatologia e História Natural Benigna',
    isRevisao: false,
    enunciado:
      'Um lactente de 11 meses que esteve internado há 3 semanas com pneumonia estafilocócica retorna para consulta de puericultura no posto de saúde. A criança encontra-se completamente assintomática, ativa, afebril, corada, mamando com avidez e com exame físico cardiorrespiratório rigorosamente normal. A mãe traz uma radiografia de tórax de controle realizada na véspera que evidencia três imagens arredondadas radiotransparentes de paredes finas e bem delimitadas cheias de ar (pneumatoceles) no lobo superior direito, sem nível líquido e sem desvio mediastinal. Qual é a correta explicação fisiopatológica e a conduta preconizada para as PNEUMATOCELAS NÃO COMPLICADAS na infância?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de lesões císticas residuais benignas decorrentes de mecanismo obstrutivo em válvula nos bronquíolos distais provocados pela inflamação prévia; a conduta é estritamente expectante com vigilância clínica, pois a vasta maioria das pneumatoceles não complicadas sofre involução e reabsorção espontânea completa ao longo de semanas a meses sem necessidade de intervenção cirúrgica.',
      },
      {
        id: 'B',
        texto:
          'Trata-se de adenocarcinoma bronquioloalveolar invasivo; indicação de quimioterapia adjuvante imediata.',
      },
      {
        id: 'C',
        texto:
          'Indicação de punção percutânea com agulha grossa às cegas no consultório para aspirar o ar.',
      },
      {
        id: 'D',
        texto:
          'Reinício imediato de antibiótico intravenoso por mais 6 meses contínuos em ambiente de terapia intensiva.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Pneumatoceles na Infância: Fisiopatologia e Evolução Benigna:\n\n1. Mecanismo de Formação (Mecanismo em Válvula Unidirecional):\n   - Ocorre principalmente após pneumonias graves causadas por Staphylococcus aureus e Streptococcus pneumoniae;\n   - A inflamação e a necrose bronquiolar parcial criam uma válvula unidirecional: o ar entra durante a inspiração na via aérea distal mas não consegue sair durante a expiração;\n   - A pressão expiratória distende e rompe os septos interalveolares, formando uma cavidade cística intraparenquimatosa cheia de ar delimitada por uma parede fibrosa delgada (pneumatocele);\n\n2. História Natural e Conduta Clínica:\n   - Em crianças assintomáticas e estáveis, as pneumatoceles possuem CURSO EMINENTEMENTE BENIGNO E AUTOLIMITADO;\n   - Ocorrem regressão espontânea, retração e desaparecimento gradual em um período que varia de 2 a 6 meses (raramente até 1 ano), sem deixar sequelas na função pulmonar;\n   - CONDUTA: Acompanhamento clínico expectante;\n   - Não há necessidade de cirurgia, punção ou novos ciclos de antibióticos se a criança estiver curada da infecção aguda;\n\n3. Quando Intervir em uma Pneumatocele?\n   - Apenas se houver complicações agudas sob tensão: pneumatocele gigante que comprime o restante do parênquima e desvia o mediastino causando insuficiência respiratória grave, infecção secundária com abscesso volumoso ou ruptura para o espaço pleural gerando pneumotórax hipertensivo.',
    comentariosAlternativas: {
      A: 'Correta. Pneumatoceles não complicadas são cistos pós-infecciosos benignos que regridem espontaneamente, devendo ser mantidas em conduta expectante.',
      B: 'Incorreta. Neoplasia pulmonar na infância é raríssima e pneumatoceles pós-estafilocócicas são puramente inflamatórias.',
      C: 'Incorreta. Puncionar pneumatocele assintomática criaria uma fístula broncopleural e pneumotórax iatrogênico.',
      D: 'Incorreta. Não há infecção ativa em criança assintomática afebril.',
    },
  },
  {
    id: 'ped-irab-045',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Papel das Hemoculturas e Métodos Diagnósticos Etiológicos na PAC Hospitalizada',
    isRevisao: false,
    enunciado:
      'De acordo com as diretrizes da Infectious Diseases Society of America (IDSA) e da Sociedade Brasileira de Pediatria (SBP), qual é a recomendação correta quanto à solicitação de HEMOCULTURAS na abordagem da Pneumonia Adquirida na Comunidade em crianças?',
    alternativas: [
      {
        id: 'A',
        texto:
          'As hemoculturas NÃO são recomendadas rotineiramente para pacientes tratados em nível ambulatorial; porém DEVEM SER COLETADAS em todas as crianças internadas com pneumonia moderada a grave ou complicada, embora sua taxa de positividade seja relativamente baixa (em torno de 5% a 10%), permitindo descalonamento direcionado quando positivas.',
      },
      {
        id: 'B',
        texto:
          'Hemoculturas devem ser coletadas a cada 2 horas em todas as crianças que apresentam coriza simples no posto de saúde.',
      },
      {
        id: 'C',
        texto:
          'A hemocultura é 100% positiva em todas as pneumonias e dispensa a realização de radiografia.',
      },
      {
        id: 'D',
        texto:
          'As hemoculturas são contraindicadas em ambiente hospitalar pelo risco de causar bacteremia iatrogênica em 100% das punções.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Papel das Hemoculturas na PAC Pediátrica (IDSA / SBP):\n\n1. Paciente Ambulatorial (Pneumonia Não Grave):\n   - As hemoculturas NÃO são indicadas no manejo ambulatorial;\n   - A taxa de bacteremia é ínfima (< 1-2%), a imensa maioria evolui com cura sob amoxicilina empírica e os resultados falsos-positivos (contaminação de pele) geram reinternações e uso desnecessário de vancomicina;\n\n2. Paciente Hospitalizado (Enfermaria e UTI Pediátrica):\n   - A coleta de pelo menos 1 a 2 amostras de hemocultura antes do início do antibiótico hospitalar é RECOMENDADA em:\n     * Crianças que necessitam de internação hospitalar por doença moderada a grave;\n     * Pacientes com falha terapêutica ou choque séptico;\n     * Pacientes com complicações supurativas (derrame pleural, empiema, pneumonia necrosante);\n\n3. Rendimento e Utilidade Clínica:\n   - A positividade das hemoculturas na PAC varia historicamente entre 5% e 10%;\n   - Apesar do rendimento modesto, quando a hemocultura isola o patógeno (ex.: Streptococcus pneumoniae ou S. aureus), ela fornece o antibiograma com a Concentração Inibitória Mínima (CIM) precisa, permitindo o DESESCALONAMENTO SEGURO do antibiótico (ajuste de ceftriaxona para penicilina ou oxacilina).',
    comentariosAlternativas: {
      A: 'Correta. As hemoculturas não são indicadas no paciente ambulatorial, mas são recomendadas nos internados com taxa de positividade de 5 a 10%.',
      B: 'Incorreta. Coleta a cada 2 horas em coriza simples é absurda e iatrogênica.',
      C: 'Incorreta. A positividade é baixa (5-10%) devido ao uso prévio de antibióticos e à fisiopatologia localizada.',
      D: 'Incorreta. A coleta de sangue venoso não induz bacteremia se realizada com antissepsia adequada.',
    },
  },
  {
    id: 'ped-irab-046',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Radiografia de Tórax de Controle Pós-Tratamento: Quando NÃO Solicitar',
    isRevisao: false,
    enunciado:
      'Uma criança de 3 anos completou 7 dias de tratamento domiciliar com Amoxicilina para pneumonia lobar bacteriana não complicada. A paciente encontra-se assintomática há 5 dias, afebril, brincando normalmente, com excelente apetite e ausculta pulmonar limpa. A mãe solicita na consulta de revisão uma nova radiografia de tórax para "ter certeza de que a pneumonia sumiu do pulmão". De acordo com os consensos da Sociedade Brasileira de Pediatria e da Academia Americana de Pediatria, qual é a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'NÃO solicitar radiografia de tórax de controle, pois a resolução clínica precede a resolução radiológica, podendo as alterações na imagem persistir por 4 a 8 semanas em pacientes plenamente curados; o raio-x de controle de rotina em crianças assintomáticas gera radiação ionizante desnecessária e sobretratamento.',
      },
      {
        id: 'B',
        texto:
          'Solicitar radiografia de tórax diária durante 6 meses para acompanhar a migração das costelas.',
      },
      {
        id: 'C',
        texto:
          'Se a radiografia ainda mostrar qualquer mancha residual, a criança deve ser internada para receber quimioterapia pulmonar.',
      },
      {
        id: 'D',
        texto:
          'A radiografia de controle é obrigatória por lei e a mãe deve ser multada se não realizar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Princípios do Raio-X de Tórax de Controle na PAC Pediátrica:\n\n1. A Dissociação Clínico-Radiológica:\n   - Na infância, a CURA CLÍNICA ocorre muito mais rápido do que o clareamento radiológico das imagens de condensação alveolar;\n   - A inflamação histológica residual, a reabsorção de fibrina e a reepitelização alveolar levam em média de 4 a 8 semanas (e até 12 semanas em pneumonias mais extensas) para desaparecerem por completo no raio-x;\n   - Se um médico solicitar radiografia em uma criança totalmente curada clinicamente aos 7 ou 14 dias pós-tratamento, encontrará uma opacidade residual fisiológica normal do processo de cicatrização;\n   - Esse achado radiológico inocente frequentemente induz o médico desavisado a trocar ou prolongar antibióticos desnecessariamente;\n\n2. Recomendações das Diretrizes:\n   - NÃO se deve realizar radiografia de controle em crianças que se recuperaram clinicamente e estão assintomáticas;\n\n3. Quando o Raio-X de Controle ESTÁ Indicado?\n   - Ausência de melhora clínica ou piora dos sintomas após 48 a 72h de antibiótico;\n   - Atelectasia redonda ou condensações muito extensas com suspeita de lesões anatômicas estruturais subjacentes (sequestro pulmonar, malformação adenomatoide cística);\n   - Pneumonias de repetição no mesmo lobo pulmonar (pesquisa de corpo estranho ou malformação).',
    comentariosAlternativas: {
      A: 'Correta. Crianças assintomáticas curadas não devem fazer raio-x de controle, pois as imagens demoram 4 a 8 semanas para clarear e geram radiação e sobretratamento.',
      B: 'Incorreta. Radiografias seriadas desnecessárias expõem a criança a risco cumulativo de radiação.',
      C: 'Incorreta. Opacidades residuais na fase de cicatrização são normais e não representam câncer.',
      D: 'Incorreta. Não existe exigência legal de raio-x de controle em PAC curada.',
    },
  },
  {
    id: 'ped-irab-047',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumonia no Paciente com Doença Falciforme: Diagnóstico Diferencial com Síndrome Torácica Aguda',
    isRevisao: false,
    enunciado:
      'Um menino de 6 anos com Anemia Falciforme (HbSS) é levado à emergência com febre alta de 39,0 °C, tosse, dor torácica e taquipneia (FR de 42 irpm). A oximetria de pulso revela SatO2 de 91% (sabendo-se que seu basal era de 97%). A radiografia de tórax demonstra novo infiltrado alveolar em lobo inferior direito. Diante da associação de febre, sintomas respiratórios agudos e novo infiltrado pulmonar em um paciente falcêmico, qual diagnóstico sindrômico grave deve ser firmado e qual o manejo terapêutico imediato?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome Torácica Aguda (STA); exigindo internação hospitalar imediata, antibioticoterapia parenteral cobrindo germes típicos e atípicos (Ceftriaxona associada a Macrolídeo como Claritromicina/Azitromicina), oxigenoterapia cautelosa, analgesia criteriosa, hidratação cuidadosa (sem hiper-hidratação para evitar edema agudo de pulmão) e transfusão simples ou exsanguinotransfusão se queda de hemoglobina ou hipoxemia grave.',
      },
      {
        id: 'B',
        texto:
          'Gripe simples de manejo domiciliar; prescrever apenas dipirona e liberar para casa.',
      },
      {
        id: 'C',
        texto:
          'Infarto agudo do miocárdio por aterosclerose coronariana; indicação de angioplastia transluminal de emergência.',
      },
      {
        id: 'D',
        texto:
          'Apenas crise álgica osteoarticular isolada; prescrever anti-inflamatórios e estimular desidratação.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Síndrome Torácica Aguda (STA) na Doença Falciforme:\n\n1. Conceito e Gravidade:\n   - É a principal causa de internação em UTI e a maior causa de mortalidade em indivíduos com doença falciforme;\n   - Definição: Presença de um NOVO INFILTRADO PULMONAR na radiografia de tórax associado a pelo menos um sinal/sintoma:\n     * Febre >= 38,5 °C;\n     * Tosse, taquipneia, dor torácica ou tiragens;\n     * Queda da saturação de O2 basal em mais de 3-4%;\n\n2. Fisiopatologia Multifatorial Complexa:\n   - Envolve infecção bacteriana/viral (Pneumococo, Mycoplasma, Chlamydia, vírus respiratórios), oclusão microvascular por hemácias afoiçadas in situ e embolia gordurosa da medula óssea necrótica;\n   - A hipoxemia induz mais afoiçamento, criando um ciclo vicioso catastrófico de falência pulmonar e choque;\n\n3. Pilares do Tratamento da STA:\n   - 1. ANTIBIOTICOTERAPIA COMBINADA: Cefalosporina de 3ª geração (Ceftriaxona) para cobrir germes encapsulados + MACROLÍDEO (Azitromicina ou Claritromicina) para cobrir Mycoplasma e Chlamydia (frequentes na STA);\n   - 2. SUPORTE DE OXIGÊNIO: Manter SatO2 >= 95% para frear o afoiçamento;\n   - 3. ANALGESIA E INCENTIVO RESPIRATÓRIO: controlar a dor torácica com opioides fracionados e incentivar espirometria de estímulo para evitar hipoventilação e atelectasia basal;\n   - 4. HIDRATAÇÃO PARCIMONIOSA: Manter hidratação isotônica no volume de manutenção estrito (NUNCA HIPER-HIDRATAR, pelo alto risco de precipitar edema pulmonar não cardiogênico);\n   - 5. TRANSFUSÃO DE HEMÁCIAS: Transfusão simples ou exsanguinotransfusão de urgência se hipoxemia refratária, queda da Hb > 2 g/dL ou rápida progressão do infiltrado.',
    comentariosAlternativas: {
      A: 'Correta. A STA exige cobertura de germes típicos e atípicos (ceftriaxona + macrolídeo), analgesia, hidratação equilibrada e suporte transfusional.',
      B: 'Incorreta. Subestimar a STA na doença falciforme é causa direta de óbito hospitalar.',
      C: 'Incorreta. Aterosclerose coronariana não é a causa de novo infiltrado em crianças falcêmicas de 6 anos.',
      D: 'Incorreta. A presença de tosse e novo infiltrado pulmonar define STA e não crise óssea simples, e desidratação agrava o afoiçamento.',
    },
  },
  {
    id: 'ped-irab-048',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Diagnóstico Diferencial da PAC Recorrente ou Refratária: Causas Estruturais e Sistêmicas',
    isRevisao: false,
    enunciado:
      'Uma criança de 3 anos apresenta o terceiro episódio documentado de pneumonia bacteriana condensativa em lobo inferior direito no período de 9 meses, com tosse crônica produtiva entre os episódios. A investigação detalhada de PNEUMONIA RECORRENTE NO MESMO LOBO PULMONAR deve priorizar a pesquisa de quais etiologias estruturais ou mecânicas subjacentes?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Aspiração de corpo estranho crônico de via aérea com obstrução brônquica localizada, malformações congênitas da via aérea pulmonar (como sequestro pulmonar intralobar e malformação congênita das vias aéreas pulmonares - CPAM), bronquiectasias localizadas e compressão brônquica extrínseca por linfonodomegalia (ex.: tuberculose ganglionar).',
      },
      {
        id: 'B',
        texto:
          'Diabetes insipidus nefrogênico isolado associado a osteogênese imperfeita.',
      },
      {
        id: 'C',
        texto:
          'Doença celíaca típica e alergia à proteína do leite de vaca sem sintomas respiratórios.',
      },
      {
        id: 'D',
        texto:
          'Trauma acústico provocado por fones de ouvido em volume excessivo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Abordagem da Pneumonia Recorrente na Infância:\n\n1. Definição de Pneumonia Recorrente:\n   - 2 ou mais episódios em 1 ano, OU 3 ou mais episódios em qualquer momento da vida, com melhora clínico-radiológica entre os episódios;\n\n2. A Distinção Semiológica Fundamental:\n   - PNEUMONIA RECORRENTE NO MESMO LOBO / MESMO LOCAL:\n     * Aponta quase invariavelmente para CAUSA ANATÔMICA OU OBSTRUTIVA LOCALIZADA:\n     * 1. Corpo estranho brônquico retido não diagnosticado;\n     * 2. Malformações congênitas do desenvolvimento pulmonar: Sequestro pulmonar, Malformação Congênita da Via Aérea Pulmonar (CPAM), cisto broncogênico;\n     * 3. Compressão extrínseca brônquica (linfonodomegalia tuberculosa, tumores do mediastino, anéis vasculares congênitos);\n     * 4. Bronquiectasias localizadas ou estenose brônquica congênita/pós-infecciosa;\n   - PNEUMONIA RECORRENTE EM LÓBULOS DIFERENTES / DIFUSA:\n     * Aponta para DOENÇA SISTÊMICA SUBJACENTE:\n     * Fibrose Cística (teste do suor);\n     * Imunodeficiências primárias (dosagem de imunoglobulinas séricas IgG, IgA, IgM, subclasses);\n     * Síndrome de aspiração crônica por distúrbio de deglutição ou refluxo gastroesofágico grave;\n     * Discinesia Ciliar Primária (Síndrome de Kartagener);\n\n3. Conduta na Pneumonia no Mesmo Lobo:\n   - Tomografia Computadorizada de tórax de alta resolução e Broncoscopia flexível ou rígida.',
    comentariosAlternativas: {
      A: 'Correta. Pneumonias recorrentes no mesmo lobo indicam causas obstrutivas ou anatômicas locais: corpo estranho, malformações (sequestro/CPAM) ou compressão brônquica.',
      B: 'Incorreta. Diabetes insipidus não causa consolidação pneumônica recorrente.',
      C: 'Incorreta. Doença celíaca causa diarreia e má absorção, não consolidações lobares anatômicas repetidas no mesmo lobo.',
      D: 'Incorreta. Trauma acústico causa perda auditiva e não afeta o pulmão.',
    },
  },
  {
    id: 'ped-irab-049',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Manejo da PAC em Crianças com Relato de Alergia à Penicilina: Estratificação de Risco',
    isRevisao: false,
    enunciado:
      'Um menino de 3 anos é diagnosticado com Pneumonia Adquirida na Comunidade em pronto-atendimento infantil. Ao prescrever o tratamento com Amoxicilina, a mãe relata que a criança "tem alergia à penicilina". Ao colher a história detalhada da reação prévia, a mãe descreve que, aos 11 meses de vida, no 8º dia de uso de amoxicilina para otite, o paciente apresentou pequenas manchas avermelhadas discretas no tronco (exantema máculo-papular não pruriginoso), sem edema facial, sem urticária, sem estridor, sem broncoespasmo e sem hipotensão. De acordo com as diretrizes de alergia e infectologia pediátrica, qual é a conduta farmacológica adequada para este paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de reação adversa cutânea não grave / exantema viral ou medicamentoso tardio não mediado por IgE (baixo risco de anafilaxia); sendo seguro prescrever cefalosporinas de 2ª ou 3ª geração orais (como Cefuroxima axetil ou Cefprozil) ou até mesmo reintroduzir a aminopenicilina com monitorização ambulatorial, reservando macrolídeos ou clindamicina apenas para reações imediatas graves mediadas por IgE (anafilaxia prévia, broncoespasmo ou angioedema).',
      },
      {
        id: 'B',
        texto:
          'Indicar internação imediata em UTI para desensibilização com penicilina intravenosa de 1 em 1 minuto.',
      },
      {
        id: 'C',
        texto:
          'Prescrever apenas paracetamol e proibir o uso de qualquer antibacteriano por toda a vida da criança.',
      },
      {
        id: 'D',
        texto:
          'Indicar infusão de plasma fresco congelado para substituir todos os anticorpos do paciente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Estratificação da Alergia à Penicilina na Pediatria:\n\n1. O Fenômeno do Sobrediagnóstico de "Alergia à Penicilina":\n   - Mais de 90% a 95% das crianças rotuladas pelos pais como "alérgicas à penicilina" NÃO possuem alergia verdadeira mediada por IgE;\n   - A imensa maioria dos casos decorre de exantemas virais concomitantes (especialmente pelo vírus Epstein-Barr, HHV-6 ou enterovírus) que surgem durante o curso do antibiótico, ou de exantemas medicamentosos tardios benignos não mediados por IgE;\n\n2. Estratificação de Risco:\n   - BAIXO RISCO (Não mediado por IgE): exantema máculo-papular tardio (> 72h de uso), sem prurido intenso, sem urticária, sem edema labial/palpebral, sem sintomas respiratórios;\n     * Conduta: Cefalosporinas orais (Cefuroxima axetil, Cefpodoxima) podem ser utilizadas com margem de segurança altíssima (reação cruzada < 1-2%);\n   - ALTO RISCO (Mediado por IgE / Tipo I): anafilaxia, urticária aguda em placas com prurido intenso em < 1 a 2 horas da dose, estridor laríngeo, angioedema, broncoespasmo ou hipotensão;\n     * Conduta: Evitar todos os beta-lactâmicos; prescrever antibióticos de classes não relacionadas, como Macrolídeos (Claritromicina, Azitromicina) ou Clindamicina (ou Levofloxacino);\n\n3. Impacto Clínico:\n   - Desmistificar falsas alergias permite manter o uso de beta-lactâmicos, que são mais eficazes e seguros contra o pneumococo do que os macrolídeos.',
    comentariosAlternativas: {
      A: 'Correta. Exantema tardio benigno sem anafilaxia permite o uso seguro de cefalosporina oral (cefuroxima) ou reintrodução supervisionada.',
      B: 'Incorreta. Dessensibilização em UTI é reservada exclusivamente para anafiláticos graves sem opção terapêutica alternativa.',
      C: 'Incorreta. Omitir antibiótico em pneumonia bacteriana por medo infundado acarreta alto risco de sepse e empiema.',
      D: 'Incorreta. Plasma fresco trata coagulopatias e não reações alérgicas a fármacos.',
    },
  },
  {
    id: 'ped-irab-050',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Caso Clínico Integrador: Manejo Hospitalar da PAC Grave com Derrame Pleural Parapneumônico',
    isRevisao: false,
    enunciado:
      'Uma menina de 2 anos e 8 meses é admitida em um hospital pediátrico com história de febre alta de 39,5 °C há 4 dias, prostração, tosse produtiva e dispneia progressiva. Ao exame físico: frequência cardíaca de 155 bpm, frequência respiratória de 58 irpm, tiragem subcostal grave com batimento de asa de nariz e SatO2 de 88% em ar ambiente. À ausculta, nota-se murmúrio vesicular abolido nos 2/3 inferiores do hemitórax direito com macicez pétrea à percussão. A radiografia de tórax evidencia volumoso derrame pleural ocupando mais de metade do hemitórax direito com linha de menisco e desvio contralateral do mediastino. A ultrassonografia torácica confirma derrame anecoico volumoso com espessura de 3,5 cm, sem loculações espessas. O médico assistente instala oxigênio por cateter nasal atingindo SatO2 de 94%. Qual é o plano de manejo global COMPLETO e SEQUENCIAL mais adequado para esta paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Internação hospitalar imediata; realização de toracocentese diagnóstica e drenagem pleural fechada com dreno de tórax tubular em selo d’água para alívio mecânico e coleta de líquido pleural (citologia, bacterioscopia pelo Gram, cultura, glicose, pH e LDH); introdução de antibioticoterapia parenteral de primeira linha (Penicilina Cristalina IV ou Ampicilina IV, podendo ser ajustada ou escalonada conforme gravidade e isolamento microbiológico); e suporte hídrico e respiratório contínuo.',
      },
      {
        id: 'B',
        texto:
          'Prescrição de xarope broncodilatador oral, alta domiciliar e solicitação de retorno em 30 dias para verificar se o derrame foi absorvido sozinho.',
      },
      {
        id: 'C',
        texto:
          'Indicação de toracotomia mutilante com retirada completa do pulmão direito em menos de 1 hora.',
      },
      {
        id: 'D',
        texto:
          'Coleta exclusiva de swab retal para coronavírus e início de antifúngico intravenoso em monoterapia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Caso Clínico Integrador: Manejo da PAC Grave com Derrame Pleural Parapneumônico Volumoso:\n\n1. Reconhecimento Imediato da Gravidade:\n   - Paciente com hipoxemia grave (SatO2 = 88%), desconforto respiratório importante (tiragem subcostal e batimento de asa de nariz);\n   - Semiologia clássica de derrame pleural volumoso (abolição do MV e macicez maciça);\n   - Imagem demonstrando derrame volumoso (> 10 a 20 mm de espessura e ocupando mais de 50% do hemitórax com desvio de mediastino);\n\n2. Sequência de Ações Prioritárias:\n   - 1. SUPORTE DE OXIGÊNIO E MONITORIZAÇÃO: manter SpO2 entre 92% e 95%;\n   - 2. DRENAGEM PLEURAL FECHADA (Toracostomia com dreno tubular em selo d’água):\n     * Obrigatória diante de derrame volumoso com repercussão ventilatória;\n     * Descomprime o parênquima pulmonar colabado, alivia imediatamente o esforço respiratório e remove o foco inflamatório bacteriano pleural;\n     * Permite a coleta de amostras para o diagnóstico etiológico (Gram, culturas, pH, glicose, LDH);\n   - 3. ANTIBIOTICOTERAPIA PARENTERAL IMEDIATA:\n     * Primeira linha: Penicilina Cristalina IV ou Ampicilina IV (ou Ceftriaxona IV se choque séptico ou paciente não imunizado);\n     * Associar Oxacilina se houver forte suspeita estafilocócica (pneumatoceles, porta de entrada cutânea);\n   - 4. MONITORIZAÇÃO CLÍNICO-RADIOLÓGICA:\n     * Vigilância do débito e da oscilação do dreno de tórax;\n     * Se houver falha de melhora em 48-72h, repetir ultrassom de tórax para pesquisar loculações de fibrina (avaliando necessidade de tPA intrapleural ou VATS).',
    comentariosAlternativas: {
      A: 'Correta. Reúne com perfeição todas as etapas de suporte de O2, drenagem tubular com selo d’água, análise laboratorial do líquido e antibioticoterapia parenteral.',
      B: 'Incorreta. Liberar para casa uma criança hipoxêmica com derrame pleural volumoso e desvio de mediastino seria imperícia e negligência graves.',
      C: 'Incorreta. Pneumectomia é procedimento mutilante desnecessário; o pulmão se expande e cura plenamente com drenagem e antibiótico.',
      D: 'Incorreta. Swab retal e antifúngico não tratam derrame parapneumônico bacteriano agudo.',
    },
  },
  {
    id: 'ped-irab-051',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Complicações da PAC: Suspeita Clínica e Falha Terapêutica',
    isRevisao: false,
    enunciado:
      'Um pré-escolar de 3 anos, previamente hígido e com vacinação em dia, foi internado há 60 horas com diagnóstico de pneumonia adquirida na comunidade em hemitórax direito, recebendo Penicilina Cristalina intravenosa na dose de 200.000 UI/kg/dia. A mãe relata que a criança continua apresentando picos febris diários de 39 °C e que a respiração "parece mais ofegante". Ao exame: REG, irritado, FR = 48 irpm, FC = 135 bpm, SpO2 = 91% em ar ambiente; na ausculta pulmonar observa-se abolição completa dos ruídos respiratórios no terço médio e inferior do hemitórax direito, com macicez maciça à percussão torácica na mesma topografia e diminuição visível da expansibilidade torácica direita. Considerando a fisiopatologia e as diretrizes clínicas de pneumologia pediátrica, qual é a principal hipótese diagnóstica e a conduta propedêutica imediata?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Derrame pleural parapneumônico complicado / empiema; solicitar radiografia de tórax nas incidências PA, perfil e decúbito lateral com raios horizontais (Hjelm-Laurell) ou ultrassonografia de tórax com urgência.',
      },
      {
        id: 'B',
        texto:
          'Hiper-reatividade brônquica pós-infecciosa isolada; suspender a antibioticoterapia e iniciar nebulização com formoterol e budesonida.',
      },
      {
        id: 'C',
        texto:
          'Evolução habitual da PAC pneumocócica, cuja lise febril demora de 5 a 7 dias; manter a mesma prescrição sem exames adicionais.',
      },
      {
        id: 'D',
        texto:
          'Reação adversa febril à penicilina cristalina; prescrever dipirona contínua e trocar imediatamente por sulfametoxazol-trimetoprima.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Suspeita Clínica de Complicação da PAC e Falha Terapêutica em 48-72h:\n\n1. Tempo de Resposta Terapêutica Esperado:\n   - Na PAC não complicada tratada com antibiótico adequado, a melhora clínica e a lise térmica devem ocorrer em até 48 a 72 horas do início do tratamento parenteral;\n   - A persistência ou recrudescimento da febre, a manutenção de taquipneia/esforço ventilatório ou a deterioração clínica após 48-72h constituem marco formal de "Falha Terapêutica", exigindo reavaliação imediata.\n\n2. Achados Semiocíticos Cardinais de Derrame Pleural:\n   - Macicez maciça à percussão torácica;\n   - Abolição ou diminuição acentuada do murmúrio vesicular;\n   - Diminuição da expansibilidade torácica no hemitórax acometido;\n   - Redução do frêmito toracovocal.\n\n3. Investigação por Imagem Imediata:\n   - O primeiro passo é documentar a presença e a magnitude do derrame pleural;\n   - A radiografia simples (PA e perfil) complementada pela incidência em decúbito lateral com raios horizontais (Hjelm-Laurell) e/ou a Ultrassonografia de tórax são essenciais para estimar a lâmina líquida e orientar a abordagem invasiva.',
    comentariosAlternativas: {
      A: 'Correta. A falha terapêutica em 48-72h com macicez e abolição de murmúrio vesicular é indicativo clássico de derrame pleural parapneumônico, necessitando de imagem torácica urgente.',
      B: 'Incorreta. Macicez maciça e febre persistente indicam processo pleural infeccioso, não mero broncoespasmo.',
      C: 'Incorreta. A lise febril na pneumonia bacteriana tratada ocorre em 48 a 72h; esperar 7 dias sem investigar levaria a sepse grave e sepultamento de pulmão encarcerado.',
      D: 'Incorreta. Trata-se de falha clínica e complicação infecciosa evidente, não de febre medicamentosa.',
    },
  },
  {
    id: 'ped-irab-052',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Incidência de Hjelm-Laurell e Critérios de Toracocentese',
    isRevisao: false,
    enunciado:
      'Uma criança de 4 anos é avaliada por pneumonia em hemitórax esquerdo e persistência febril. A radiografia de tórax em posição ortostática mostra velamento do seio costofrênico esquerdo com linha parabólica de Damoiseau. Para determinar se o derrame é livre e se há quantidade suficiente para punção diagnóstica segura, o pediatra solicita uma radiografia em decúbito lateral esquerdo com feixe horizontal de raios X (incidência de Hjelm-Laurell). Qual é o critério de espessura da lâmina líquida nessa incidência radiológica que autoriza formalmente a realização de toracocentese diagnóstica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Espessura da lâmina de líquido pleural livre maior ou igual a 10 mm (1,0 cm).',
      },
      {
        id: 'B',
        texto:
          'Espessura da lâmina de líquido pleural livre de exatamente 2 mm.',
      },
      {
        id: 'C',
        texto:
          'Qualquer lâmina visível, desde que menor que 3 mm, para evitar perfuração esplênica.',
      },
      {
        id: 'D',
        texto:
          'Espessura de pelo menos 50 mm (5,0 cm), sendo contraindicada qualquer punção abaixo dessa medida.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Critérios Radiológicos de Hjelm-Laurell para Punção Pleural:\n\n1. O que é a Incidência de Hjelm-Laurell:\n   - É a radiografia de tórax realizada em decúbito lateral sobre o lado acometido com raios X horizontais. Permite que o líquido pleural livre se desloque por gravidade ao longo da parede torácica lateral dependente.\n\n2. Ponto de Corte Formal para Punção Diagnóstica:\n   - Lâmina de líquido $\\ge 10\\text{ mm}$ ($1,0\\text{ cm}$):\n     * Representa um volume líquido pleural estimado superior a 150–200 mL no adulto e proporcionalmente suficiente na criança para garantir punção percutânea segura com agulha ou cateter, minimizando o risco de pneumotórax iatrogênico ou lesão de órgãos intra-abdominais;\n   - Lâminas $< 10\\text{ mm}$:\n     * Consideradas derrames parapneumônicos insignificantes ou muito pequenos, que habitualmente regridem com antibioticoterapia clínica isolada sem necessidade de toracocentese.',
    comentariosAlternativas: {
      A: 'Correta. A espessura $\\ge 10\\text{ mm}$ (1 cm) na incidência de Hjelm-Laurell é o critério clássico e consensual que confirma líquido livre em quantidade suficiente para toracocentese diagnóstica segura.',
      B: 'Incorreta. 2 mm é uma lâmina extremamente tênue com altíssimo risco de pneumotórax iatrogênico se puncionada às cegas.',
      C: 'Incorreta. Lâminas diminutas não devem ser puncionadas, pois respondem à antibioticoterapia sistêmica.',
      D: 'Incorreta. Aguardar 50 mm submeteria a criança a risco desnecessário de loculação avançada e encarceramento pulmonar.',
    },
  },
  {
    id: 'ped-irab-053',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Ultrassonografia de Tórax no Derrame Pleural',
    isRevisao: false,
    enunciado:
      'Na abordagem diagnóstica e terapêutica do derrame pleural parapneumônico na faixa pediátrica, a ultrassonografia (USG) torácica consolidou-se como o método de imagem de eleição. Em comparação com a radiografia simples e a tomografia computadorizada, qual é a principal vantagem clínica direta da ultrassonografia de tórax no manejo dessa complicação?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Identificar com máxima acurácia septações fibrinosas intraluminais, debris celulares e espessamento pleural, além de delimitar com segurança o melhor ponto de punção/drenagem torácica à beira do leito sem expor a criança a radiação ionizante.',
      },
      {
        id: 'B',
        texto:
          'Substituir a necessidade de cultura bacteriológica, pois o padrão ecográfico define o agente bacteriano causador (pneumococo vs estafilococo).',
      },
      {
        id: 'C',
        texto:
          'Permitir a visualização de fístulas broncopleurais microscópicas melhor do que a broncoscopia rígida com contraste iodado.',
      },
      {
        id: 'D',
        texto:
          'Medir com exatidão a concentração milimolar de glicose e o pH do líquido pleural através do efeito Doppler colorido.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Papel da Ultrassonografia Torácica no Derrame Pleural Pediátrico:\n\n1. Vantagens Primordiais da USG de Tórax:\n   - Ausência de radiação ionizante: fundamental para a faixa pediátrica, permitindo exames seriados de controle à beira do leito (POCUS);\n   - Superioridade na Detecção de Fibrina e Septos: a USG detecta finas traves de fibrina, septações móveis ou rígidas, turbidez/debris flutuantes e espessamento das pleuras muito antes da tomografia computadorizada;\n   - Classificação das Fases do Derrame: distingue se o derrame é anecoico simples (fase exsudativa) ou complexo/septado (fase fibrinopurulenta/organizada);\n   - Procedimentos Guiados: marca com precisão milimétrica o sítio de toracocentese ou introdução do dreno torácico tubular, reduzindo a zero o índice de pneumotórax iatrogênico ou punção de órgãos sólidos (fígado/baço).',
    comentariosAlternativas: {
      A: 'Correta. A ultrassonografia é o método padrão-ouro para detectar fibrina, septações e guiar punção/drenagem à beira do leito sem radiação ionizante.',
      B: 'Incorreta. Ultrassom analisa padrão acústico acústico-estrutural, não identifica espécies de bactérias nem substitui a microbiologia.',
      C: 'Incorreta. USG não serve para rastrear fístulas broncopleurais microscópicas com contraste iodado.',
      D: 'Incorreta. Doppler avalia fluxo sanguíneo vascular, não mensura parâmetros bioquímicos como pH e glicose.',
    },
  },
  {
    id: 'ped-irab-054',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Fases Evolutivas do Derrame Parapneumônico',
    isRevisao: false,
    enunciado:
      'A história natural do derrame pleural associado à pneumonia bacteriana evolui classicamente em três estágios fisiopatológicos sucessivos. Correlacione a sequência cronológica correta dessas fases com suas características anatomopatológicas primárias:',
    alternativas: [
      {
        id: 'A',
        texto:
          '1ª Fase Exsudativa (líquido claro, estéril, livre, com celularidade baixa e baixa viscosidade) -> 2ª Fase Fibrinopurulenta (invasão bacteriana, acúmulo de polimorfonucleares, deposição intensa de fibrina formando traves e lojas) -> 3ª Fase de Organização (invasão fibroblástica, espessamento pleural fibroso e formação de carapaça espessa - "peel" pleural).',
      },
      {
        id: 'B',
        texto:
          '1ª Fase de Organização fibrosa cicatricial -> 2ª Fase Exsudativa aquosa pura -> 3ª Fase Fibrinopurulenta transitória com lise espontânea.',
      },
      {
        id: 'C',
        texto:
          '1ª Fase Hemorrágica por rotura alveolar -> 2ª Fase Quilotóxica lipídica -> 3ª Fase Neoplásica infiltrativa granulomatosa.',
      },
      {
        id: 'D',
        texto:
          '1ª Fase Fibrinosa septada fechada -> 2ª Fase Exsudativa serosa -> 3ª Fase Alérgica rica em eosinófilos sem bactérias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As Três Fases Evolutivas do Derrame Parapneumônico:\n\n1. Fase Exsudativa (Derrame Parapneumônico Simples):\n   - Ocorre nos primeiros dias de inflamação parenquimatosa adjacente;\n   - Aumento da permeabilidade capilar na pleura visceral;\n   - Líquido claro, estéril, livre, com pH $> 7,20$, glicose normal ($> 60\\text{ mg/dL}$) e DHL $< 1.000\\text{ U/L}$. Habitualmente responde apenas a antibioticoterapia sistêmica;\n\n2. Fase Fibrinopurulenta (Derrame Complicado / Empiema Inicial):\n   - Bactérias invadem o espaço pleural através da pleura visceral inflamada;\n   - Influxo massivo de neutrófilos, ativação da cascata de coagulação local com deposição acelerada de fibrina e inibição da fibrinólise pleural;\n   - Formação de septos, loculações ("lojas") e coleção de pus franco;\n   - Bioquímica: pH $< 7,20$, glicose consumida ($< 40\\text{ mg/dL}$), DHL $> 1.000\\text{ U/L}$;\n\n3. Fase de Organização (Encarceramento Pulmonar):\n   - A partir da 2ª a 3ª semana de evolução não tratada;\n   - Fibroblastos e capilares invadem as membranas de fibrina, formando uma densa carapaça inelástica ("peel" pleural);\n   - O pulmão fica encarcerado, incapaz de se expandir, podendo consolidar perda funcional restritiva crônica.',
    comentariosAlternativas: {
      A: 'Correta. Apresenta a tríade evolutiva cronológica e anatomopatológica clássica de Light: exsudativa -> fibrinopurulenta -> organização.',
      B: 'Incorreta. A organização é a etapa final e tardia, não a fase inicial.',
      C: 'Incorreta. Não existe fase quilotóxica ou neoplásica na fisiopatologia do derrame parapneumônico infantil.',
      D: 'Incorreta. A fase serosa/exsudativa precede a fase de deposição de fibrina.',
    },
  },
  {
    id: 'ped-irab-055',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Análise Bioquímica e Critérios de Empiema Pleural',
    isRevisao: false,
    enunciado:
      'Um menino de 5 anos com pneumonia lobar direita apresenta febre alta há 4 dias e novo abafamento de ruídos respiratórios. A USG de tórax confirma coleção líquida homogênea de 25 mm de espessura. Foi realizada toracocentese diagnóstica com saída de líquido turvo/opalescente. Os resultados laboratoriais do líquido pleural revelaram:\n- Aspecto: turvo, amarelado;\n- pH: 7,08 (coletado em seringa heparinizada anaeróbica);\n- Glicose: 22 mg/dL;\n- DHL: 2.450 U/L;\n- Leucócitos: 85.000/mm³ com 92% de neutrófilos;\n- Bacterioscopia (Gram): cocos Gram-positivos aos pares.\n\nCom base nesses achados, qual é a classificação diagnóstica do derrame e a conduta recomendada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Derrame parapneumônico complicado / empiema; drenagem torácica tubular fechada em selo d’água imediata e manutenção de antibioticoterapia parenteral.',
      },
      {
        id: 'B',
        texto:
          'Derrame parapneumônico simples; manter apenas observação clínica ambulatorial, pois a glicose de 22 mg/dL reflete metabolismo normal da pleura.',
      },
      {
        id: 'C',
        texto:
          'Transudato pleural por insuficiência cardíaca congestiva; indicar furosemida em altas doses e suspender os antibióticos.',
      },
      {
        id: 'D',
        texto:
          'Quilotórax bacteriano congênito; iniciar dieta com triglicerídeos de cadeia longa e drenagem aberta com gaze.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Critérios Diagnósticos de Derrame Parapneumônico Complicado / Empiema:\n\n1. Critérios Bioquímicos e Citológicos de Comcomplicação/Empiema:\n   - pH $< 7,20$ (acidose acentuada pelo metabolismo anaeróbio das bactérias e neutrófilos);\n   - Glicose $< 40\\text{ mg/dL}$ (ou relação glicose pleural/sérica $< 0,5$), devido ao intenso consumo glicolítico bacteriano e leucocitário;\n   - DHL $> 1.000\\text{ U/L}$ (marcador de lise celular massiva e inflamação aguda);\n   - Presença de bactérias visualizadas ao Gram ou cultura positiva;\n   - Presença de líquido purulento franco (aspecto de pus).\n\n2. Conduta Terapêutica Mandatória:\n   - A presença de qualquer um desses critérios define derrame complicado ou empiema, no qual a antibioticoterapia sistêmica é incapaz de esterilizar a cavidade isoladamente;\n   - Conduta: Drenagem Torácica Tubular Fechada em Selo d’Água imediata associada a antibioticoterapia parenteral adequada.',
    comentariosAlternativas: {
      A: 'Correta. Líquido turvo com pH < 7,20, glicose < 40 mg/dL, DHL > 1.000 U/L e Gram positivo é diagnóstico inequívoco de empiema/derrame complicado, exigindo drenagem torácica tubular fechada imediata.',
      B: 'Incorreta. Glicose de 22 mg/dL demonstra consumo extremo; não é um derrame simples e a observação isolada geraria sepse e encarceramento.',
      C: 'Incorreta. Os parâmetros revelam exsudato inflamatório infeccioso grave, incompatível com transudato cardíaco.',
      D: 'Incorreta. Quilotórax é rico em triglicerídeos e quilomícrons, sem predominância de neutrófilos ou bactérias ao Gram.',
    },
  },
  {
    id: 'ped-irab-056',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Manejo Inicial do Empiema Pediátrico: Drenagem Torácica',
    isRevisao: false,
    enunciado:
      'Ao indicar a toracostomia com drenagem tubular fechada em selo d’água para um paciente pediátrico de 2 anos com empiema pleural agudo não septado, qual conjunto de princípios técnicos e de posicionamento do dreno deve ser rigorosamente seguido?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Inserção no 4º ou 5º espaço intercostal, na linha axilar anterior ou média, tangenciando a borda superior da costela inferior para proteger o feixe vasculonervoso intercostal, conectando o dreno a um sistema de selo d’água mantido sempre abaixo do nível do tórax do paciente.',
      },
      {
        id: 'B',
        texto:
          'Inserção no 1º espaço intercostal na linha hemiclavicular, tangenciando a borda inferior da costela para atingir o feixe intercostal e provocar vasoconstrição reflexa.',
      },
      {
        id: 'C',
        texto:
          'Inserção lombar no 11º espaço intercostal posterior com frasco coletor fixado no suporte de soro 50 cm acima da cabeça da criança para promover drenagem retrógrada.',
      },
      {
        id: 'D',
        texto:
          'Drenagem aberta com dreno de Penrose sem selo d’água exteriorizado na ferida para permitir livre entrada e saída de ar ambiente durante o choro.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Técnica e Princípios da Drenagem Torácica Fechada em Pediatria:\n\n1. Sítio Anatômico Seguro (Triângulo de Segurança):\n   - 4º ou 5º espaço intercostal (nível mamilar), entre a linha axilar anterior e média;\n   - Esse triângulo minimiza o risco de lesão cardíaca, dos grandes vasos torácicos, do músculo grande dorsal e de vísceras abdominais (fígado e baço);\n\n2. Proteção Anatômica do Feixe Vasculonervoso:\n   - O feixe vasculonervoso intercostal (Veia, Artéria e Nervo - VAN) corre protegido na borda INFERIOR da costela superior;\n   - Por isso, a punção/dissecção DEVE tangenciar a BORDA SUPERIOR da costela inferior do espaço abordado;\n\n3. Dinâmica do Selo d’Água:\n   - O frasco de selo d’água deve permanecer permanentemente ABAIXO do nível do leito/tórax do paciente, garantindo que o gradiente pressórico expulse líquidos e ar e impedindo o refluxo de líquido séptico para a cavidade pleural.',
    comentariosAlternativas: {
      A: 'Correta. Descreve com exatidão anatômica a técnica do triângulo de segurança, proteção do feixe intercostal na borda superior da costela inferior e manutenção do frasco abaixo do tórax.',
      B: 'Incorreta. Tangenciar a borda inferior atinge e lacera o feixe vasculonervoso, provocando hemotórax maciço.',
      C: 'Incorreta. 11º EIC atinge diafragma e vísceras abdominais (fígado/baço); posicionar o frasco acima do tórax provocaria refluxo do conteúdo para dentro do tórax.',
      D: 'Incorreta. Drenagem aberta geraria pneumotórax aberto hipertensivo com colapso cardiopulmonar imediato.',
    },
  },
  {
    id: 'ped-irab-057',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Derrame Pleural Loculado e Papel da Fibrinólise Intrapleural',
    isRevisao: false,
    enunciado:
      'Lactente de 18 meses com pneumonia estafilocócica foi submetido a dreno de tórax tubular em selo d’água há 48 horas por empiema. Nas últimas 24 horas, o débito do dreno reduziu abruptamente de 150 mL/dia para 5 mL/dia e a oscilação cessou, porém a criança mantém picos de febre alta e taquipneia. A ultrassonografia de tórax de controle evidencia volumosa coleção residual no hemitórax acometido dividida em múltiplos septos espessos e lojas independentes de fibrina (derrame loculado/multiseptado). O dreno encontra-se locado em uma loja já esvaziada. De acordo com os consensos internacionais (British Thoracic Society - BTS e Pediatric Infectious Diseases Society - PIDS), qual é a conduta mais recomendada neste cenário?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Instilação intrapleural de agente fibrinolítico (como alteplase/tPA) através do dreno torácico existente ou indicação de videotoracoscopia cirúrgica (VATS) para lise mecânica de aderências.',
      },
      {
        id: 'B',
        texto:
          'Retirar o dreno imediatamente e dar alta hospitalar com cefalexina por via oral, pois a redução do débito comprova cura clínica.',
      },
      {
        id: 'C',
        texto:
          'Manobras de ordenha vigorosa do dreno a cada 15 minutos até romper os septos pulmonares e o parênquima visceral.',
      },
      {
        id: 'D',
        texto:
          'Punções diárias com agulha de biópsia óssea em 6 sítios torácicos diferentes sem auxílio de imagem.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo do Derrame Pleural Multiloculado / Septado:\n\n1. Diagnóstico do Problema:\n   - A cessação súbita do débito em um dreno associada a persistência da febre e documentação ecográfica de derrame multiloculado indica falha de drenagem devido a septações fibrinosas densas que compartimentalizam o empiema;\n\n2. Opções Terapêuticas Padronizadas (BTS e AAP/PIDS):\n   - Ambas as abordagens possuem eficácia equivalente em estudos randomizados:\n     * 1. Fibrinólise Intrapleural: Infusão de alteplase (tPA) ou uroquinase pelo dreno torácico, mantido ocluído temporariamente por 1 a 2 horas e depois reaberto em selo d’água (geralmente por 3 a 6 doses a cada 12–24h). O fibrinolítico cliva as redes de fibrina e permite a drenagem das lojas isoladas;\n     * 2. Videotoracoscopia Precoce (VATS): Permite debridamento mecânico direto dos septos de fibrina, lise de aderências e lavagem exaustiva sob visão direta.\n   - Ambas são escolhas corretas de primeira linha para resgatar a drenagem antes que ocorra fibrose irreversível da fase de organização.',
    comentariosAlternativas: {
      A: 'Correta. Fibrinolítico intrapleural (tPA) ou VATS precoce são as duas abordagens recomendadas e de eficácia comprovada para restaurar a drenagem no empiema septado.',
      B: 'Incorreta. A interrupção do débito deveu-se à loculação e obstrução do dreno por septos, não a cura. A alta resultaria em empiema crônico e choque séptico.',
      C: 'Incorreta. Ordenhas vigorosas não dissolvem septos de fibrina distantes e podem lesar o dreno ou causar dor intensa.',
      D: 'Incorreta. Punções cegas múltiplas com agulhas ósseas são aberrantes e causariam hemopneumotórax iatrogênico gravíssimo.',
    },
  },
  {
    id: 'ped-irab-058',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Videotoracoscopia (VATS) vs Toracotomia no Empiema Pediátrico',
    isRevisao: false,
    enunciado:
      'Em relação à abordagem cirúrgica do empiema pleural na infância, qual afirmação reflete com precisão as vantagens da Videotoracoscopia Assistida por Vídeo (VATS) quando comparada à toracotomia aberta convencional?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A VATS proporciona menor trauma cirúrgico, menos dor pós-operatória, menor tempo de drenagem e de permanência hospitalar, além de evitar sequelas esqueléticas na caixa torácica como escoliose decorrente da secção de músculos torácicos.',
      },
      {
        id: 'B',
        texto:
          'A VATS tem maior taxa de mortalidade infantil que a toracotomia aberta, sendo reservada unicamente para crianças com mais de 16 anos.',
      },
      {
        id: 'C',
        texto:
          'A toracotomia aberta com ampla costotomia é o procedimento de primeira escolha em lactentes jovens, pois o tórax pequeno contraindica instrumentos de vídeo.',
      },
      {
        id: 'D',
        texto:
          'A VATS não permite a aspiração de secreções purulentas nem a colocação de dreno ao término da cirurgia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Vantagens da VATS no Empiema Pediátrico:\n\n1. Menor Morbimortalidade e Recuperação Acelerada:\n   - A VATS tornou-se o procedimento cirúrgico de escolha para o desbridamento do empiema multiseptado ou encarceramento precoce na pediatria;\n   - Reduz drasticamente a intensidade da dor pós-operatória e o consumo de analgésicos opioides;\n   - Proporciona menor tempo total de uso de dreno de tórax e alta hospitalar precoce;\n\n2. Preservação Músculo-Esquelética:\n   - Evita a toracotomia posterolateral ampla, que exige a secção de grandes massas musculares (grande dorsal, serrátil anterior) e afastamento costal vigoroso, fatores historicamente associados a deformidades esqueléticas tardias, atrofia muscular e escoliose torácica estrutural durante o estirão de crescimento.',
    comentariosAlternativas: {
      A: 'Correta. Sintetiza todas as vantagens clínicas, funcionais e estéticas da VATS sobre a toracotomia aberta tradicional na infância.',
      B: 'Incorreta. A VATS é segura inclusive em lactentes e tem morbidade significativamente menor que a toracotomia aberta.',
      C: 'Incorreta. O tórax do lactente não contraindica a VATS; existem trocartes pediátricos de 3 mm e 5 mm específicos para essa faixa etária.',
      D: 'Incorreta. A VATS realiza visualização direta, desbridamento, lavagem abundante com soro morno e posicionamento guiado do dreno de tórax.',
    },
  },
  {
    id: 'ped-irab-059',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumonia Necrosante: Fisiopatologia e Agentes Causais',
    isRevisao: false,
    enunciado:
      'Uma menina de 3 anos é admitida em Unidade de Terapia Intensiva com quadro de pneumonia comunitária de progressão fulminante, choque séptico, leucopenia acentuada e hemoptise discreta. A tomografia de tórax revela consolidação pulmonar com perda da arquitetura vascular habitual e múltiplas pequenas cavitações parenquimatosas preenchidas por gás sem níveis hidroaéreos definidos, sugestivas de Pneumonia Necrosante. Entre as alternativas a seguir, qual fator de virulência bacteriano e agente etiológico clássico estão diretamente implicados nessa evolução necrosante destrutiva aguda?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Staphylococcus aureus produtor da toxina Leucocidina de Panton-Valentine (PVL) ou cepas invasivas de Streptococcus pneumoniae (como sorotipos 3 e 19A).',
      },
      {
        id: 'B',
        texto:
          'Mycoplasma pneumoniae por hiperprodução de imunoglobulina A secretora.',
      },
      {
        id: 'C',
        texto:
          'Bordetella pertussis pela ação da toxina pertussis na membrana glomerular renal.',
      },
      {
        id: 'D',
        texto:
          'Vírus Sincicial Respiratório por secreção da proteína de fusão eritrocitária.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisiopatologia da Pneumonia Necrosante na Infância:\n\n1. O que é Pneumonia Necrosante (PN):\n   - É uma complicação grave da PAC caracterizada por isquemia parenquimatosa e trombose vascular intra-alveolar periférica, levando à necrose por liquefação do tecido pulmonar com formação de múltiplas cavitações com gás no interior de áreas consolidadas;\n\n2. Principais Patógenos e Fatores de Virulência:\n   - Staphylococcus aureus (especialmente linhagens CA-MRSA ou MSSA carreadoras da Leucocidina de Panton-Valentine - PVL):\n     * A toxina PVL é uma citotoxina formadora de poros que destrói neutrófilos e macrófagos, liberando enzimas proteolíticas líticas que provocam necrose tecidual massiva, sangramento alveolar e choque séptico;\n   - Streptococcus pneumoniae:\n     * Sorotipos altamente invasivos e produtores de pneumolisina e cápsula exuberante (destaque para sorotipos 3 e 19A), sendo causa crescente de pneumonia necrosante mesmo em crianças previamente saudáveis.',
    comentariosAlternativas: {
      A: 'Correta. Identifica com precisão o S. aureus produtor de PVL e os sorotipos 3 e 19A de pneumococo como os grandes agentes da pneumonia necrosante.',
      B: 'Incorreta. Mycoplasma causa pneumonia atípica intersticial, habitualmente com baixa celularidade necrótica e curso benigno.',
      C: 'Incorreta. Bordetella pertussis causa coqueluche clássica com tosse paroxística e linfocitose, sem necrose parenquimatosa aguda.',
      D: 'Incorreta. VSR causa bronquiolite viral e não necrose alveolar fulminante com cavitações parenquimatosas.',
    },
  },
  {
    id: 'ped-irab-060',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Abscesso Pulmonar vs Pneumonia Necrosante',
    isRevisao: false,
    enunciado:
      'No diagnóstico diferencial radiológico das complicações cavitárias da pneumonia bacteriana infantil, qual distinção tomográfica e clínica é correta entre o Abscesso Pulmonar e a Pneumonia Necrosante?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O abscesso pulmonar apresenta-se tipicamente como cavidade única ou dominante, de parede espessa que realça ao contraste, contendo nível hidroaéreo em seu interior; já a pneumonia necrosante caracteriza-se por múltiplas áreas cavitadas de limites irregulares coalescentes no interior de uma ampla área de consolidação sem perfusão.',
      },
      {
        id: 'B',
        texto:
          'O abscesso pulmonar sempre exige ressecção lobar de urgência nas primeiras 12 horas, enquanto a pneumonia necrosante é tratada exclusivamente com corticoide inalatório.',
      },
      {
        id: 'C',
        texto:
          'A pneumonia necrosante nunca acomete crianças menores de 10 anos e seu agente obrigatório é a Legionella pneumophila.',
      },
      {
        id: 'D',
        texto:
          'O nível hidroaéreo é patognomônico de bronquiolite viral aguda e exclui qualquer patógeno bacteriano cavitário.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diferença Tomográfica: Abscesso Pulmonar vs Pneumonia Necrosante:\n\n1. Abscesso Pulmonar:\n   - Lesão cavitária parenquimatosa geralmente solitária (ou em número escasso), de paredes espessadas e bem delimitadas com captação periférica de contraste;\n   - Clássico nível hidroaéreo evidente em seu interior resultante da comunicação com um brônquio e drenagem parcial de pus;\n   - Frequentemente associado a aspiração (microbiologia com anaeróbios orais, Streptococcus anginosus, S. aureus);\n\n2. Pneumonia Necrosante:\n   - Áreas extensas de consolidação com áreas periféricas de hipoatenuação (isquemia) que progressivamente sofrem necrose por liquefação;\n   - Múltiplas pequenas cavidades de paredes finas sem parede fibrótica organizada própria, que podem coalescer, inicialmente sem nível hidroaéreo franco;\n   - Ambas as condições devem ser tratadas prioritariamente de forma CLÍNICA CONSERVADORA com antibioticoterapia parenteral prolongada (4 a 6 semanas), evitando-se cirurgias ressectivas precoces devido ao risco de fístula broncopleural catastrófica e ao alto potencial de reconstituição parenquimatosa espontânea na infância.',
    comentariosAlternativas: {
      A: 'Correta. Caracteriza com fidelidade os achados de imagem que diferenciam o abscesso (cavidade circunscrita de parede espessa com nível hidroaéreo) da pneumonia necrosante (múltiplas cavitações irregulares dentro da consolidação isquêmica).',
      B: 'Incorreta. Abscesso pulmonar na infância é tratado clinicamente com antibióticos prolongados; cirurgias de ressecção de urgência são contraindicadas na fase aguda.',
      C: 'Incorreta. Pneumonia necrosante atinge predominantemente lactentes e pré-escolares saudáveis após infecções por pneumococo ou estafilococo.',
      D: 'Incorreta. Nível hidroaéreo indica coleção de ar e líquido em cavidade, sendo típico de abscesso pulmonar e nunca de bronquiolite.',
    },
  },
  {
    id: 'ped-irab-061',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Conduta Cirúrgica vs Conservadora na Pneumonia Necrosante',
    isRevisao: false,
    enunciado:
      'Um escolar de 6 anos com diagnóstico de pneumonia necrosante extensa no lobo inferior direito encontra-se sob tratamento com antibioticoterapia combinada intravenosa. Apresenta febre baixa diária, mas está estável hemodinamicamente, com boa perfusão periférica, eupneico com oxigênio sob cateter nasal (SatO2 = 96%) e aceitando alimentação enteral. A equipe de cirurgia torácica é consultada devido ao aspecto tomográfico impressionante de destruição parenquimatosa multilobular. De acordo com as melhores evidências pediátricas atuais, qual é a conduta cirúrgica recomendada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tratamento conservador não cirúrgico, mantendo antibioticoterapia parenteral e suporte ventilatório, reservando intervenções cirúrgicas apenas se houver empiema loculado concomitante refratário ou fístula broncopleural de alto débito incontrolável.',
      },
      {
        id: 'B',
        texto:
          'Lobectomia inferior direita imediata de emergência para debridar todo o tecido pulmonar necrótico antes que contamine o hemitórax contralateral.',
      },
      {
        id: 'C',
        texto:
          'Pneumonectomia direita total profilática e esternotomia mediana exploradora.',
      },
      {
        id: 'D',
        texto:
          'Colocação imediata de 4 drenos torácicos calibrosos diretamente no parênquima pulmonar sadio para instilar peróxido de hidrogênio (água oxigenada).',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo Conservador na Pneumonia Necrosante Pediátrica:\n\n1. Alta Capacidade Regenerativa do Pulmão Pediátrico:\n   - Crianças têm excepcional capacidade de cicatrização e remodelamento parenquimatoso alveolar (alveologênese residual continuada até o final da infância);\n   - A esmagadora maioria dos casos de pneumonia necrosante, mesmo com grandes cavidades tomográficas, evolui para resolução clínica e radiológica completa ao longo de meses apenas com antibioticoterapia direcionada e suporte clínico;\n\n2. Riscos da Ressecção Cirúrgica na Fase Aguda:\n   - Operar tecido pulmonar intensamente inflamado e friável associa-se a hemorragias graves, fístulas broncopleurais de difícil fechamento, empiema crônico e perda desnecessária de parênquima viável;\n   - Portanto, condutas intervencionistas limitam-se a drenar coleções pleurais sob tensão (empiema/pneumotórax hipertensivo), mantendo o parênquima pulmonar intacto.',
    comentariosAlternativas: {
      A: 'Correta. A conduta na pneumonia necrosante é conservadora com antibióticos; ressecções pulmonares são deletérias e não indicadas de rotina.',
      B: 'Incorreta. Lobectomia precoce aumenta morbimortalidade e retira tecido que apresentará recuperação funcional completa a longo prazo.',
      C: 'Incorreta. Pneumonectomia mutilante é inaceitável para uma pneumonia bacteriana em criança estável.',
      D: 'Incorreta. Instilar peróxido de hidrogênio e perfurar o parênquima pulmonar é catastrófico e causaria embolia gasosa e morte.',
    },
  },
  {
    id: 'ped-irab-062',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Fístula Broncopleural como Complicação de Drenagem',
    isRevisao: false,
    enunciado:
      'Durante o internamento de um lactente de 11 meses com pneumonia necrosante estafilocócica e empiema sob drenagem tubular fechada em selo d’água, a enfermagem chama o pediatra porque há um borbulhamento contínuo e volumoso no frasco de selo d’água que se intensifica a cada inspiração e tosse da criança, associado a enfisema subcutâneo na parede torácica e no pescoço. Qual diagnóstico deve ser imediatamente suspeitado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Fístula broncopleural com escape aéreo contínuo da via aérea para a cavidade pleural.',
      },
      {
        id: 'B',
        texto:
          'Cura espontânea da infecção com reabsorção retrógrada instantânea do ar alveolar.',
      },
      {
        id: 'C',
        texto:
          'Obstrução completa da artéria pulmonar por tromboembolismo séptico bilateral.',
      },
      {
        id: 'D',
        texto:
          'Refluxo gastroesofágico fisiológico com escape de ar do estômago pelo dreno de tórax.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Reconhecimento da Fístula Broncopleural (FBP):\n\n1. Fisiopatologia e Apresentação Clínica:\n   - A FBP ocorre quando uma área necrótica periférica ou abscesso pulmonar rompe a pleura visceral, estabelecendo uma comunicação anômala entre a árvore brônquica/alveolar e o espaço pleural;\n   - É uma complicação relativamente frequente na pneumonia necrosante por S. aureus ou pneumococo;\n\n2. Sinais Típicos no Sistema de Drenagem:\n   - Borbulhamento contínuo ou persistente no frasco de selo d’água, intensificado com a expiração, tosse ou choro (ou durante os ciclos do ventilador mecânico se intubado);\n   - Enfisema subcutâneo progressivo na parede torácica, região cervical e face, caso o orifício de drenagem não capte todo o ar que escapa;\n   - Dificuldade na reexpansão pulmonar à radiografia de controle;\n\n3. Manejo:\n   - Manter o dreno em aspiração contínua de baixa pressão (-10 a -20 cmH2O) para manter o pulmão encostado na parede e favorecer o selamento biológico espontâneo da fístula.',
    comentariosAlternativas: {
      A: 'Correta. Borbulhamento persistente no frasco de selo d’água associado a enfisema subcutâneo é a manifestação clássica de fístula broncopleural.',
      B: 'Incorreta. Borbulhamento ativo contínuo indica perda de ar por ruptura brônquica, não cura.',
      C: 'Incorreta. Tromboembolismo pulmonar afeta a circulação vascular e não produz borbulhamento em frasco de drenagem torácica.',
      D: 'Incorreta. O dreno de tórax está no espaço pleural e não no trato digestório superior.',
    },
  },
  {
    id: 'ped-irab-063',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumatocele Neonatal e Pós-Estafilocócica: História Natural',
    isRevisao: false,
    enunciado:
      'Uma criança de 2 anos, internada há 12 dias por pneumonia por Staphylococcus aureus complicada, encontra-se há 4 dias sem febre, afebril, brincando no leito, com excelente apetite e com parâmetros respiratórios normais em ar ambiente. A radiografia de tórax de controle antes da alta ambulatorial revela três imagens radiotransparentes císticas de paredes finas, semelhantes a "bolhas de ar", medindo entre 2 e 4 cm no lobo superior direito, sem níveis líquidos ou desvio do mediastino. Em relação a essas imagens (pneumatoceles), qual é a orientação e a conduta corretas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de pneumatoceles típicas pós-infecciosas; têm evolução benigna e sofrem regressão espontânea completa na grande maioria dos casos em semanas a meses, não exigindo ressecção cirúrgica nem punção se a criança permanecer assintomática.',
      },
      {
        id: 'B',
        texto:
          'Indicação de toracotomia exploradora imediata para ressecção das bolhas sob risco de transformação maligna sarcomatosa.',
      },
      {
        id: 'C',
        texto:
          'Realização de punção percutânea guiada com agulha para aspiração de todo o ar residual intraparenquimatoso.',
      },
      {
        id: 'D',
        texto:
          'Internação compulsória em isolamento respiratório até o desaparecimento radiológico total das lesões em 48 horas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'História Natural e Conduta nas Pneumatoceles Pediátricas:\n\n1. Formação da Pneumatocele:\n   - São lesões císticas intrapulmonares de paredes finas resultantes de necrose alveolar com mecanismo de válvula brônquica (obstrução parcial que permite a entrada de ar na inspiração, mas impede sua saída na expiração, hiperinsuflando o alvéolo necrótico);\n   - São frequentes após pneumonia estafilocócica e pneumocócica;\n\n2. História Natural e Conduta Expectante:\n   - Apesar de sua aparência radiológica por vezes alarmante, o curso clínico de pneumatoceles assintomáticas é invariavelmente benigno;\n   - A esmagadora maioria reabsorve e desaparece completamente ao longo de 2 a 12 meses sem deixar sequelas na arquitetura pulmonar da criança;\n   - A conduta é estritamente expectante e ambulatorial;\n   - Intervenção (drenagem) é indicada apenas na rara eventualidade de pneumatocele gigante compressiva sob tensão que gere instabilidade hemodinâmica ou ventilação mecânica comprometida.',
    comentariosAlternativas: {
      A: 'Correta. Pneumatoceles pós-pneumônicas assintomáticas regridem espontaneamente e demandam seguimento clínico expectante sem cirurgia.',
      B: 'Incorreta. Pneumatoceles são lesões infecciosas inflamatórias autolimitadas e não têm qualquer potencial neoplásico sarcomatoso.',
      C: 'Incorreta. Puncionar pneumatoceles assintomáticas cria fístula broncopleural iatrogênica e pneumotórax sob tensão.',
      D: 'Incorreta. A resolução radiológica leva semanas a meses; a criança com melhora clínica recebe alta ambulatorial.',
    },
  },
  {
    id: 'ped-irab-064',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Indicações de Tomografia de Tórax na PAC Complicada',
    isRevisao: false,
    enunciado:
      'Embora a radiografia e a ultrassonografia torácicas sejam os exames de imagem de rotina na abordagem do derrame parapneumônico, em qual situação clínica específica a Tomografia Computadorizada (TC) de tórax com contraste intravenoso está formalmente indicada na infância?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Na suspeita de complicações intraparenquimatosas profundas (como abscesso pulmonar complexo ou pneumonia necrosante extensa), fístula broncopleural com má evolução pós-drenagem ou para planejamento cirúrgico em casos de falha terapêutica refratária.',
      },
      {
        id: 'B',
        texto:
          'Como exame de triagem obrigatório para toda criança com tosse e febre menor de 24 horas no pronto-socorro.',
      },
      {
        id: 'C',
        texto:
          'Em todos os episódios de bronquiolite viral aguda clássica leve para contagem do número de macrófagos alveolares.',
      },
      {
        id: 'D',
        texto:
          'Para documentar a lise térmica em pacientes que já estão assintomáticos após 48 horas de amoxicilina oral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Indicações Restritas de TC de Tórax na Pneumonia Pediátrica:\n\n1. Uso Racional da Radiação Ionizante na Pediatria:\n   - Crianças apresentam suscetibilidade biológica significativamente maior aos efeitos deletérios da radiação ionizante (risco de malignidade tardia induzida);\n   - Por isso, a TC de tórax NÃO deve ser realizada de rotina em casos de derrame parapneumônico simples ou na admissão hospitalar, sendo a ultrassonografia a modalidade de escolha;\n\n2. Indicações Clínicas Formais de TC de Tórax:\n   - Má resposta clínica ou deterioração inexplicada após drenagem torácica adequada e antibioticoterapia parenteral de amplo espectro;\n   - Suspeita de abscesso pulmonar volumoso para avaliação de drenagem guiada vs complicações vasculares;\n   - Diferenciação precisa entre abscesso intraparenquimatoso e empiema loculado periférico;\n   - Diagnóstico diferencial com malformações congênitas das vias aéreas (CPAM, sequestro pulmonar) ou neoplasias endobrônquicas/torácicas.',
    comentariosAlternativas: {
      A: 'Correta. A TC de tórax com contraste é indicada com parcimônia nas complicações intraparenquimatosas complexas, falhas terapêuticas graves ou planejamento cirúrgico complexo.',
      B: 'Incorreta. Fazer TC de triagem para tosse aguda no PS viola gravemente a radioproteção pediátrica (princípio ALARA).',
      C: 'Incorreta. BVA é doença de diagnóstico eminentemente clínico e radiografia sequer é indicada na maioria dos casos leves, muito menos TC.',
      D: 'Incorreta. Pacientes clinicamente curados não devem receber exames de controle com radiação ionizante.',
    },
  },
  {
    id: 'ped-irab-065',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Esquema Antimicrobiano para Pneumonia Estafilocócica com Empiema',
    isRevisao: false,
    enunciado:
      'Um pré-escolar de 2 anos, residente em comunidade com alta prevalência de infecções por Staphylococcus aureus suscetível à meticilina (MSSA) e resistente à meticilina adquirido na comunidade (CA-MRSA), apresenta pneumonia extensa à esquerda com empiema purulento franco e pneumatoceles múltiplas. Qual é o esquema antibiótico parenteral empírico inicial mais apropriado de acordo com as diretrizes da SBP e IDSA?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Oxacilina IV associada a Ceftriaxona IV; ou Vancomicina IV (ou Clindamicina IV) se houver suspeita fundamentada ou prevalência local elevada de CA-MRSA.',
      },
      {
        id: 'B',
        texto:
          'Gentamicina em aerossol isolada durante 3 dias sem acesso venoso.',
      },
      {
        id: 'C',
        texto:
          'Amoxicilina oral em dose habitual associada a xarope expectorante de iodeto de potássio.',
      },
      {
        id: 'D',
        texto:
          'Metronidazol intravenoso em monoterapia estrita.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Terapia Antimicrobiana no Empiema com Suspeita de Staphylococcus aureus:\n\n1. Cobertura Empírica Padrão no Brasil:\n   - Em crianças internadas com empiema e sinais estafilocócicos (pneumatoceles, evolução fulminante, bacteremia, lesões cutâneas prévias de impetigo ou furunculose):\n     * Primeira linha habitual para MSSA: Oxacilina IV (150–200 mg/kg/dia) associada a uma cefalosporina de 3ª geração (Ceftriaxona IV 80–100 mg/kg/dia) ou Penicilina Cristalina para cobrir também Pneumococo e Streptococo do grupo A;\n\n2. Cenário de CA-MRSA:\n   - Quando a prevalência de CA-MRSA for > 10-15% na comunidade, ou se a criança apresentar hemoptise/leucopenia (sinais da toxina PVL) ou choque séptico refratário:\n     * Indicação de Vancomicina IV (com monitorização da vancocinemia / AUC/MIC) ou Clindamicina IV (se o teste D-zone for negativo para resistência induzível).',
    comentariosAlternativas: {
      A: 'Correta. Cobre adequadamente MSSA e pneumococo com Oxacilina + Ceftriaxona, ressaltando o papel da Vancomicina/Clindamicina na presença de CA-MRSA.',
      B: 'Incorreta. Aminoglicosídeos em monoterapia e inalatórios não têm penetração adequada na pleura nem cobrem pneumococo/estafilococo.',
      C: 'Incorreta. Empiema pleural é doença invasiva grave que exige antibioticoterapia parenteral e drenagem, jamais amoxicilina oral isolada.',
      D: 'Incorreta. Metronidazol tem ação restrita a anaeróbios estritos, não cobrindo o agente principal que é o estafilococo ou pneumococo.',
    },
  },
  {
    id: 'ped-irab-066',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Contraindicações à Instilação de Fibrinolíticos Pleural',
    isRevisao: false,
    enunciado:
      'A instilação de fibrinolíticos intrapleurais (como alteplase/tPA ou uroquinase) é uma opção terapêutica consagrada para o empiema loculado pediátrico. Contudo, qual situação clínica constitui uma contraindicação formal ao uso de fibrinolíticos no espaço pleural devido ao risco iminente de complicações fatais?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Fístula broncopleural de alto débito conhecida ou suspeita e diátese hemorrágica ativa/coagulopatia grave.',
      },
      {
        id: 'B',
        texto:
          'Presença de febre aferida acima de 37,8 °C no momento da infusão.',
      },
      {
        id: 'C',
        texto:
          'Idade cronológica inferior a 5 anos com peso maior que 10 kg.',
      },
      {
        id: 'D',
        texto:
          'Presença de leucocitose no hemograma com desvio à esquerda.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Contraindicações à Fibrinólise Intrapleural:\n\n1. Fístula Broncopleural Significativa:\n   - Se houver uma comunicação de médio ou grande calibre entre a cavidade pleural e a árvore brônquica, o fibrinolítico instilado na cavidade pleural passará diretamente para o interior dos brônquios e alvéolos, podendo induzir hemorragia alveolar maciça, broncoespasmo severo e asfixia por inundação aérea;\n\n2. Diáteses Hemorrágicas e Coagulopatias Sistêmicas:\n   - Embora a absorção sistêmica do tPA intrapleural em doses pediátricas seja relativamente baixa, a presença de plaquetopenia profunda ($< 50.000/mm^3$), sangramentos ativos ou coagulopatia grave contraindica o procedimento pelo risco de hemotórax maciço sob o dreno;\n\n3. Alergia prévia documentada ao agente enzimático.',
    comentariosAlternativas: {
      A: 'Correta. Fístula broncopleural (pelo risco de inundação da via aérea e hemorragia alveolar) e coagulopatias ativas são contraindicações formais ao fibrinolítico intrapleural.',
      B: 'Incorreta. Febre é inerente ao empiema bacteriano e não contraindica a conduta desobstrutiva.',
      C: 'Incorreta. Fibrinolíticos podem ser usados com segurança em lactentes de qualquer idade quando bem indicados.',
      D: 'Incorreta. Leucocitose com desvio faz parte do quadro inflamatório infeccioso do empiema.',
    },
  },
  {
    id: 'ped-irab-067',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Critérios para Remoção do Dreno Torácico Tubular',
    isRevisao: false,
    enunciado:
      'Um escolar de 7 anos internado com empiema pleural encontra-se sob drenagem tubular fechada em selo d’água há 5 dias. O pediatra e o cirurgião avaliam o momento oportuno para retirada do dreno de tórax. Quais critérios clínicos, radiológicos e de débito devem estar obrigatoriamente preenchidos para autorizar a remoção segura do dreno?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Paciente clinicamente estável e afebril há pelo menos 24 a 48 horas, melhora do padrão respiratório, ausência de escape aéreo (borbulhamento) no selo d’água, pulmão expandido à radiografia de controle e débito seroso/serossanguinolento baixo (< 1 a 2 mL/kg/dia ou < 30 a 50 mL/dia).',
      },
      {
        id: 'B',
        texto:
          'Débito purulento abundante (> 500 mL/dia), pois isso demonstra que o dreno já sugou todo o líquido restante da caixa torácica.',
      },
      {
        id: 'C',
        texto:
          'Presença de borbulhamento vigoroso contínuo durante a inspiração, indicando ventilação colateral satisfatória.',
      },
      {
        id: 'D',
        texto:
          'O dreno deve ser retirado pontualmente na 24ª hora após a inserção em qualquer criança, independentemente de parâmetros clínicos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Critérios para Retirada do Dreno de Tórax em Pediatria:\n\n1. Estabilidade Clínica e Resolução da Infecção Aguda:\n   - Ausência de febre por pelo menos 24 a 48 horas;\n   - Eupneico, sem tiragens ou esforço ventilatório em ar ambiente;\n\n2. Ausência de Fístula Aérea:\n   - Sem borbulhamento no frasco de selo d’água, tanto em repouso quanto durante o choro, expiração ou tosse;\n\n3. Critérios de Débito Líquido e Aspecto:\n   - O líquido drenado deve ter aspecto límpido, seroso ou serossanguinolento claro (NUNCA purulento);\n   - Volume residual baixo, classicamente definido como menor que $1\\text{ a }2\\text{ mL/kg/dia}$ (ou inferior a 30–50 mL/dia em crianças maiores);\n\n4. Expansão Pulmonar Confirmada:\n   - Radiografia de tórax comprovando pulmão encostado na parede torácica sem colapso ou pneumotórax residual relevante.',
    comentariosAlternativas: {
      A: 'Correta. Reúne com precisão todos os critérios consensuais: estabilidade clínica, apirexia, ausência de escape aéreo, expansão pulmonar e débito mínimo não purulento.',
      B: 'Incorreta. Débito purulento abundante indica processo infeccioso ativo que necessita de drenagem mantida e revisão de antibioticoterapia.',
      C: 'Incorreta. Borbulhamento contínuo significa fístula broncopleural em atividade; sacar o dreno causaria pneumotórax hipertensivo imediato.',
      D: 'Incorreta. O tempo de permanência do dreno é guiado por critérios objetivos de resposta e não por prazo fixo de 24 horas.',
    },
  },
  {
    id: 'ped-irab-068',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Duração da Antibioticoterapia no Empiema Pediátrico',
    isRevisao: false,
    enunciado:
      'Uma dúvida frequente na enfermaria pediátrica refere-se ao tempo total de antibioticoterapia em crianças que evoluíram com empiema pleural drenado com sucesso. De acordo com as diretrizes da Sociedade Brasileira de Pediatria (SBP) e da Sociedade Britânica de Tórax (BTS), qual é a recomendação para o tempo total de antibióticos e os critérios para transição da via intravenosa para oral?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tempo total de 2 a 4 semanas (14 a 28 dias), sendo mantido por via intravenosa até a retirada do dreno, lise febril e melhora clínica evidente por pelo menos 48 a 72 horas, completando-se o restante do tempo por via oral em regime ambulatorial.',
      },
      {
        id: 'B',
        texto:
          'Exatamente 6 meses ininterruptos de antibióticos parenterais internado em regime de leito fechado.',
      },
      {
        id: 'C',
        texto:
          'Apenas 48 horas de antibiótico intravenoso, devendo ser suspenso logo que o dreno de tórax for inserido.',
      },
      {
        id: 'D',
        texto:
          'Não há indicação de antibiótico via oral na infância; o tratamento do empiema é exclusivamente cirúrgico mecânico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Duração e Transição da Antibioticoterapia no Empiema Pediátrico:\n\n1. Tempo Total de Tratamento:\n   - Habitualmente entre 2 a 4 semanas (14 a 28 dias), a depender da gravidade inicial, do agente etiológico identificado (S. aureus e agentes gram-negativos frequentemente exigem 3 a 4 semanas) e da velocidade de recuperação clínica;\n\n2. Critérios de Transição (Switch) para Via Oral:\n   - Paciente afebril há pelo menos 48 a 72 horas;\n   - Dreno de tórax já retirado com sucesso e ferida sem sinais de infecção;\n   - Boa aceitação alimentar por via oral sem vômitos;\n   - Melhora marcante dos marcadores inflamatórios séricos (queda substancial de PCR e normalização leucocitária);\n   - O restante do curso terapêutico pode ser completado com segurança em domicílio com antibiótico oral de espectro e biodisponibilidade adequados (ex.: amoxicilina em altas doses, amoxicilina-clavulanato ou clindamicina).',
    comentariosAlternativas: {
      A: 'Correta. Aponta a duração recomendada de 2 a 4 semanas com switch para via oral após apirexia, melhora clínica e retirada do dreno.',
      B: 'Incorreta. 6 meses de internação parenteral é tempo excessivo aplicável a tuberculose extrapulmonar complexa ou osteomielite crônica refratária, não empiema típico.',
      C: 'Incorreta. Suspender antibiótico em 48h resultaria em recidiva séptica do empiema.',
      D: 'Incorreta. A transição para via oral é segura, eficaz e recomendada pelas maiores sociedades pediátricas do mundo.',
    },
  },
  {
    id: 'ped-irab-069',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Sequelas Tardias e Evolução a Longo Prazo do Empiema',
    isRevisao: false,
    enunciado:
      'Os pais de um pré-escolar de 3 anos que acabou de receber alta após 18 dias de tratamento hospitalar por pneumonia grave e empiema pleural encontram-se extremamente ansiosos porque a radiografia de tórax de alta ainda mostra discreto espessamento pleural e velamento residual do seio costofrênico. Eles questionam se a criança terá sequelas respiratórias permanentes ou redução da capacidade pulmonar para a prática de esportes na vida adulta. Com base nos estudos de seguimento a longo prazo de crianças com derrame parapneumônico/empiema, qual é a resposta cientificamente correta que o pediatra deve fornecer?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tranquilizar a família, explicando que a cicatrização e o remodelamento radiológico completo levam de 3 a 6 meses, e que estudos com provas de função pulmonar a longo prazo demonstram recuperação funcional excelente com capacidade pulmonar e tolerância ao exercício inteiramente normais na grande maioria das crianças.',
      },
      {
        id: 'B',
        texto:
          'Confirmar que a criança desenvolveu fibrose pulmonar irreversível e que deverá utilizar oxigênio domiciliar contínuo e ser isenta de atividades físicas para sempre.',
      },
      {
        id: 'C',
        texto:
          'Indicar toracotomia com descorticação de urgência nas próximas 24 horas para raspar a pleura espessada e evitar deformidade torácica imediata.',
      },
      {
        id: 'D',
        texto:
          'Solicitar tomografia de tórax com contraste a cada 15 dias durante 3 anos consecutivos para monitorar a expansão das costelas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Prognóstico a Longo Prazo do Empiema Pediátrico:\n\n1. Excelente Prognóstico Funcional Pulmonar:\n   - Uma das características mais notáveis da pneumologia pediátrica é a capacidade de restauração arquitetural e funcional completa do parênquima e da pleura após infecções graves;\n   - Diferente do adulto (que frequentemente evolui com fibrose e perda de função restritiva), estudos de coorte prospectivos com espirometria e ergoespirometria em crianças tratadas de empiema demonstram função pulmonar normal, volumes pulmonares preservados e capacidade de exercício indistinguível de controles saudáveis;\n\n2. Descompasso Clínico-Radiológico:\n   - As alterações radiológicas (espessamento pleural, obliteração de seio costofrênico, atelectasias laminares residuais) demoram de 3 a 6 meses para desaparecer por completo, mesmo com a criança totalmente assintomática e ativa;\n   - Não há necessidade de cirurgias tardias ou tomografias repetidas desnecessárias.',
    comentariosAlternativas: {
      A: 'Correta. Apresenta a conduta empática e baseada em evidências: tranquilizar os pais sobre a lenta regressão radiológica (3-6 meses) e o prognóstico funcional a longo prazo excelente.',
      B: 'Incorreta. É uma afirmação inverídica e iatrogênica; crianças curam sem sequelas na grande maioria dos casos.',
      C: 'Incorreta. Cirurgia mutilante tardia em paciente assintomático não tem indicação clínica.',
      D: 'Incorreta. Submeter a criança a dezenas de tomografias seriadas causaria danos biológicos graves pela radiação sem benefício clínico.',
    },
  },
  {
    id: 'ped-irab-070',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Abscesso Pulmonar Primário vs Secundário',
    isRevisao: false,
    enunciado:
      'Um escolar de 8 anos com paralisia cerebral grave e disfagia orofaríngea crônica não tratada dá entrada no hospital com histórico de perda de peso, tosse com expectoração fétida acastanhada há 3 semanas e febre vespertina diária. A tomografia de tórax mostra lesão cavitária única de 4 cm com nível hidroaéreo no segmento superior do lobo inferior direito. Em relação ao abscesso pulmonar secundário na infância por aspiração, qual grupo de microrganismos compõe tipicamente a sua microbiologia e qual é o esquema antimicrobiano parenteral indicado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Flora mista com predomínio de bactérias anaeróbias orais (Peptostreptococcus, Fusobacterium, Prevotella) associadas a estreptococos do grupo viridans; esquema recomendado com Clindamicina IV ou Amoxicilina-Clavulanato IV (ou Ampicilina-Sulbactam IV).',
      },
      {
        id: 'B',
        texto:
          'Vírus Epstein-Barr em monoterapia; esquema com ganciclovir intravenoso isolado.',
      },
      {
        id: 'C',
        texto:
          'Pseudomonas aeruginosa pura; esquema com gentamicina inalatória e suspensão de qualquer antibiótico sistêmico.',
      },
      {
        id: 'D',
        texto:
          'Pneumocystis jirovecii exclusivamente; esquema com pentamidina inalatória.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Microbiologia e Tratamento do Abscesso Pulmonar Secundário Aspirativo:\n\n1. Fisiopatologia e Fatores de Risco:\n   - Ocorre tipicamente em crianças com neuropatias crônicas, paralisia cerebral, disfagia, convulsões descontroladas ou distúrbios da deglutição, decorrente da aspiração contínua ou maciça de secreções da cavidade orofaríngea;\n   - Localização mais frequente: segmentos dependentes pela gravidade em decúbito dorsal (segmento superior do lobo inferior e segmento posterior do lobo superior, principalmente à direita);\n\n2. Microbiologia:\n   - Flora mista de anaeróbios da cavidade oral (Peptostreptococcus, Fusobacterium nucleatum, Prevotella melaninogenica) sinergicamente associados a estreptococos da orofaringe (S. mitis, S. anginosus) e bacilos gram-negativos;\n   - A secreção é classicamente fétida e pútrida decorrente dos produtos metabólicos bacterianos anaeróbios;\n\n3. Tratamento Antimicrobiano:\n   - Exige cobertura vigorosa contra anaeróbios e gram-positivos;\n   - Opções padrão-ouro: Clindamicina IV, Ampicilina-Sulbactam IV ou Amoxicilina-Clavulanato IV por tempo prolongado (3 a 6 semanas até resolução tomográfica da cavidade).',
    comentariosAlternativas: {
      A: 'Correta. Define com rigor a etiologia por anaeróbios orais da aspiração e os esquemas antimicrobianos adequados (Clindamicina, Ampicilina-Sulbactam ou Amoxicilina-Clavulanato).',
      B: 'Incorreta. Epstein-Barr causa mononucleose infecciosa e não abscesso cavitário pulmonar pútrido com nível líquido.',
      C: 'Incorreta. Pseudomonas pura é rara em crianças fora de fibrose cística ou imunodeficiências profundas, e gentamicina inalatória isolada não trata abscesso.',
      D: 'Incorreta. P. jirovecii causa pneumonia intersticial difusa em imunossuprimidos (HIV) e responde a sulfametoxazol-trimetoprima, não cavitação fétida bacteriana.',
    },
  },
  {
    id: 'ped-irab-071',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Diagnóstico Diferencial: Hérnia Diafragmática Encarcerada vs Derrame/Pneumatocele',
    isRevisao: false,
    enunciado:
      'Um lactente de 6 meses é levado à emergência com desconforto respiratório súbito, vômitos e febre baixa. A radiografia de tórax evidencia opacificação e imagens císticas radiotransparentes em hemitórax esquerdo com desvio do mediastino para a direita. O plantonista suspeita de empiema complicado com pneumatoceles e prepara material para drenagem torácica imediata. No entanto, o pediatra sênior ausculta ruídos hidroaéreos no hemitórax esquerdo, nota abdome escavado e interrompe o procedimento, solicitando a passagem de uma sonda nasogástrica (SNG) e nova radiografia. A nova imagem confirma a presença da ponta da SNG e de alças intestinais dentro do hemitórax esquerdo. Qual foi a condição identificada que evitou uma punção torácica catastrófica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Hérnia diafragmática congênita de apresentação tardia (Hérnia de Bochdalek esquerda) encarcerada mimetizando derrame pleural/pneumatoceles.',
      },
      {
        id: 'B',
        texto:
          'Abscesso peritonsilar volumoso com migração mediastinal espontânea.',
      },
      {
        id: 'C',
        texto:
          'Malformação arteriovenosa pulmonar gigante fistulizada para o esôfago distal.',
      },
      {
        id: 'D',
        texto:
          'Refluxo gastroesofágico com perfuração iatrogênica do estômago prévia à admissão.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diagnóstico Diferencial Crítico: Hérnia Diafragmática Tardia vs Derrame/Empiema:\n\n1. Apresentação Tardia da Hérnia de Bochdalek (HDC):\n   - Embora a maioria das HDCs se manifeste no período neonatal imediato com insuficiência respiratória grave e hipertensão pulmonar, cerca de 5 a 10% dos casos têm apresentação tardia nos primeiros meses ou anos de vida;\n   - Pode ser desencadeada por aumento súbito da pressão intra-abdominal ou encarceramento de alças;\n\n2. Armadilha Diagnóstica Fatal na Radiografia:\n   - As alças intestinais herniadas preenchidas por líquido e gás podem simular com perfeição derrames pleurais com pneumatoceles múltiplas ou abscessos;\n   - Pistas semiológicas cruciais: abdome escavado (pela ausência de vísceras no abdome), ausculta de ruídos hidroaéreos (RHA) intratorácicos e assimetria auscultatória;\n   - Conduta salvadora: A passagem de sonda nasogástrica e sua visualização no tórax ou injeção de pequena quantidade de contraste iodado confirma que a víscera oca está no hemitórax;\n   - Puncionar ou drenar inadvertidamente uma hérnia diafragmática causaria perfuração de alça intestinal intratorácica, peritonite/pleurite fecal e morte.',
    comentariosAlternativas: {
      A: 'Correta. Identifica com perfeição a clássica armadilha da hérnia diafragmática congênita de apresentação tardia mimetizando empiema/pneumatoceles.',
      B: 'Incorreta. Abscesso peritonsilar localiza-se na orofaringe e não insere alças intestinais com ruídos hidroaéreos no tórax.',
      C: 'Incorreta. Malformações vasculares não contêm alças intestinais identificadas pela passagem de sonda gástrica.',
      D: 'Incorreta. Não se trata de perfuração gástrica primária, mas de defeito diafragmático com herniação víscero-torácica.',
    },
  },
  {
    id: 'ped-irab-072',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Streptococcus pyogenes e Pneumonia Necrosante com Empiema',
    isRevisao: false,
    enunciado:
      'Uma criança de 4 anos com histórico recente de varicela (catapora) há 10 dias com múltiplas lesões cutâneas escoriadas evolui com febre alta persistente (40 °C), prostração, dor torácica intensa e rápida deterioração ventilatória em menos de 24 horas. A toracocentese realizada revela líquido seroemático turvo de rápida evolução para pus espesso, e o Gram demonstra cocos Gram-positivos em cadeias. Qual é o microrganismo causador mais provável e qual complicação pós-varicela clássica está ilustrada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Streptococcus pyogenes (Streptococcus do Grupo A - GAS); complicação supurativa bacteriana pós-varicela de rápida evolução para empiema e fasceíte/necrose pleural.',
      },
      {
        id: 'B',
        texto:
          'Haemophilus influenzae tipo b exclusivamente em crianças vacinadas.',
      },
      {
        id: 'C',
        texto:
          'Legionella pneumophila por contaminação de caixa d’água domiciliar.',
      },
      {
        id: 'D',
        texto:
          'Vírus Varicela-Zóster puro sem qualquer sobreinfecção bacteriana.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Streptococcus pyogenes (Grupo A) pós-Varicela e Empiema Pleural:\n\n1. Interação Varicela e Infecções Bacterianas Secundárias:\n   - As lesões cutâneas vesiculares e crostosas pruriginosas da catapora rompem a barreira cutânea e servem como porta de entrada primária para duas bactérias agressivas: Streptococcus pyogenes (GAS) e Staphylococcus aureus;\n   - A disseminação hematogênica ou a aspiração colonizante pode deflagrar pneumonias de progressão fulminante;\n\n2. Características do Empiema por S. pyogenes:\n   - Cocos Gram-positivos em CADEIAS ao Gram;\n   - Produção de exoenzimas líticas potentes (estreptoquinase, hialuronidase e estreptolisinas) que destroem tecidos com rapidez espantosa, transformando derrames seroemáticos em empiemas purulentos volumosos em menos de 24 horas;\n   - Alta taxa de necrose tecidual e sepse;\n   - Terapia: Penicilina Cristalina IV em altas doses associada a Clindamicina IV (que inibe a síntese proteica de toxinas estreptocócicas - efeito antitoxina) e drenagem torácica imediata.',
    comentariosAlternativas: {
      A: 'Correta. S. pyogenes (cocos gram-positivos em cadeia) é o agente clássico e temível de sobreinfecção invasiva pós-varicela, causando empiema de evolução ultra-rápida.',
      B: 'Incorreta. H. influenzae é um cocobacilo gram-negativo pleomórfico, não se apresentando como cocos em cadeia.',
      C: 'Incorreta. Legionella é atípica intracelular, rara nessa faixa etária e sem correlação com varicela cutânea prévia.',
      D: 'Incorreta. O achado de cocos gram-positivos em cadeia e líquido purulento franco confirma infecção bacteriana secundária agressiva.',
    },
  },
  {
    id: 'ped-irab-073',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Broncoscopia e Aspiração de Corpo Estranho Complicada',
    isRevisao: false,
    enunciado:
      'Um lactente de 14 meses é internado com diagnóstico presuntivo de pneumonia recidivante no lobo inferior direito há 4 semanas, que não melhora apesar do uso consecutivo de três antibióticos diferentes. A radiografia de tórax revela consolidação persistente associada a hiperinsuflação localizada do hemitórax direito na expiração e desvio contralateral do mediastino. Ao interrogatório detalhado, a mãe recorda que há cerca de um mês a criança apresentou um episódio súbito de engasgo, tosse intensa e cianose transitória enquanto os irmãos comiam pipoca e amendoim. Qual é o procedimento padrão-ouro diagnóstico e terapêutico mandatório neste paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Broncoscopia rígida sob anestesia geral para inspeção direta da via aérea e remoção do corpo estranho vegetal orgânico.',
      },
      {
        id: 'B',
        texto:
          'Indicação de toracostomia com dreno tubular em selo d’água para drenar o amendoim da cavidade pleural.',
      },
      {
        id: 'C',
        texto:
          'Nebulização contínua com acetilcisteína e manobras de tapotagem vigorosa para dissolver o corpo estranho.',
      },
      {
        id: 'D',
        texto:
          'Aumento da dose do antibiótico oral por mais 60 dias sem necessidade de exames invasivos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Aspiração de Corpo Estranho (ACE) Mimetizando Pneumonia de Repetição:\n\n1. Quadro Clínico e História da Síndrome de Penetração:\n   - Episódio súbito de asfixia/engasgo com tosse paroxística e cianose enquanto ingeria alimentos em grãos (amendoim, nozes, pipoca) ou manipulava pequenos objetos plásticos;\n   - Frequentemente a história inicial é negligenciada, evoluindo para a "fase assintomática temporária" seguida de complicações inflamatórias crônicas (pneumonia de repetição no mesmo lobo, atelectasia persistente ou abscesso);\n\n2. Achados Radiológicos do Mecanismo de Válvula:\n   - O corpo estranho funciona como válvula: permite a entrada de ar na inspiração (brônquio se dilata) e obstrui na expiração (brônquio colaba ao redor do objeto), causando aprisionamento aéreo localizado e hipertransparência com desvio contralateral das estruturas mediastinais na expiração;\n\n3. Procedimento de Escolha:\n   - Broncoscopia Rígida sob anestesia geral: método definitivo padrão-ouro que permite a ventilação do paciente, passagem de pinças ópticas apropriadas e extração segura do corpo estranho vegetal antes que ocorra estenose brônquica cicatricial ou destruição bronquiectásica.',
    comentariosAlternativas: {
      A: 'Correta. Broncoscopia rígida é o procedimento mandatório de escolha para confirmar e retirar com segurança corpos estranhos da árvore traqueobrônquica pediátrica.',
      B: 'Incorreta. O corpo estranho está no interior do lúmen brônquico intraparenquimatoso, não na cavidade pleural; dreno de tórax não retira corpo estranho endobrônquico.',
      C: 'Incorreta. Tapotagem em corpo estranho brônquico pode deslocá-lo para a traqueia ou subglote, causando obstrução total da via aérea e parada cardiorrespiratória.',
      D: 'Incorreta. Manter antibióticos sem remover a causa mecânica obstrutiva perpetua o dano pulmonar crônico.',
    },
  },
  {
    id: 'ped-irab-074',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Complicações Extratorácicas e Sepse na PAC Grave',
    isRevisao: false,
    enunciado:
      'Um escolar de 5 anos é admitido com pneumonia pneumocócica grave e derrame pleural volumoso. Durante as primeiras 24 horas de internação hospitalar, passa a apresentar icterícia cutaneomucosa com colúria, oligúria marcante, petéquias e equimoses disseminadas e piora neurológica com sonolência. Os exames laboratoriais de urgência demonstram:\n- Hemoglobina: 6,8 g/dL;\n- Plaquetas: 32.000/mm³;\n- Esfregaço de sangue periférico: presença abundante de esquizócitos (eritrócitos fragmentados);\n- Teste de Coombs direto: positivo (ativação de antígeno Thomsen-Friedenreich - antígeno T);\n- Creatinina: 2,6 mg/dL e Ureia: 110 mg/dL;\n- Bilirrubina Indireta e DHL significativamente elevados.\n\nQual complicação sistêmica temida da infecção pneumocócica invasiva está caracterizada neste quadro?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome Hemolítico-Urêmica associada ao Streptococcus pneumoniae (SHU-p), mediada por neuraminidase bacteriana.',
      },
      {
        id: 'B',
        texto:
          'Púrpura de Henoch-Schönlein clássica com nefrite puramente lúpica.',
      },
      {
        id: 'C',
        texto:
          'Hepatite viral aguda tipo A fulminante sem correlação com o pneumococo.',
      },
      {
        id: 'D',
        texto:
          'Reação adversa imunoalérgica isolada ao termômetro axilar de mercúrio.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Síndrome Hemolítico-Urêmica por Pneumococo (SHU-p):\n\n1. Fisiopatologia Única:\n   - Ao contrário da SHU clássica (induzida pela toxina Shiga de E. coli enterorremorrágica O157:H7 pós-diarreia sanguinolenta), a SHU associada ao Pneumococo (SHU-p) ocorre como complicação de infecções pneumocócicas invasivas graves (especialmente pneumonia com empiema e meningite);\n   - A bactéria produz a enzima NEURAMINIDASE, que cliva o ácido siálico das membranas dos eritrócitos, plaquetas e células endoteliais glomerulares, expondo o ANTÍGENO T (antígeno de Thomsen-Friedenreich);\n   - Anticorpos IgM pré-existentes no plasma do paciente se ligam ao antígeno T exposto, deflagrando microangiopatia trombótica maciça com hemólise microangiopática e lesão renal aguda grave;\n\n2. Tríade Laboratorial Clássica:\n   - Anemia hemolítica microangiopática com esquizócitos;\n   - Plaquetopenia de consumo;\n   - Insuficiência renal aguda oligoanúrica;\n\n3. Peculiaridade Transfusional Vital:\n   - O teste de Coombs direto é habitualmente positivo;\n   - Caso a criança necessite de transfusão de hemoderivados (hemácias lavadas ou plaquetas), estes devem ser LAVADOS para remover o plasma do doador que conteria anticorpos anti-T adicionais, os quais agravariam a hemólise.',
    comentariosAlternativas: {
      A: 'Correta. Identifica com perfeição a SHU associada ao Pneumococo mediada por neuraminidase bacteriana com exposição do antígeno T, esquizócitos e falência renal.',
      B: 'Incorreta. Henoch-Schönlein é vasculite por IgA com púrpura palpável em membros inferiores e plaquetas normais ou elevadas, não microangiopatia com plaquetopenia grave.',
      C: 'Incorreta. Não se trata de hepatite A, mas de microangiopatia trombótica sistêmica decorrente da infecção pneumocócica invasiva.',
      D: 'Incorreta. Quadro extremamente grave decorrente da toxina bacteriana e não de alergia a termômetro.',
    },
  },
  {
    id: 'ped-irab-075',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Caso Clínico Integrador: Manejo Completo do Empiema Loculado',
    isRevisao: false,
    enunciado:
      'Caso Clínico Integrador: Um pré-escolar de 3 anos é transferido de um hospital municipal para a UTI Pediátrica terciária no 5º dia de tratamento com amoxicilina-clavulanato oral por pneumonia no hemitórax direito. O paciente encontra-se toxemiado, gemente, hipoxêmico (SatO2 = 89% em ar ambiente), afebril no momento por uso recente de dipirona, com FR = 52 irpm e esforço respiratório acentuado. Na semiologia torácica: expansibilidade diminuída, macicez absoluta nos dois terços inferiores do hemitórax direito e abolição completa do murmúrio vesicular. A ultrassonografia de tórax de urgência revela derrame pleural espesso ocupando cerca de 60% do hemitórax direito, com presença de múltiplos septos espessos de fibrina, debris densos flutuantes e espessamento das pleuras parietal e visceral (derrame fibrinopurulento multiloculado). Qual é o plano de conduta terapêutica global mais completo, seguro e baseado nas diretrizes pediátricas atuais?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Estabilização ventilatória com oxigenoterapia umidificada; acesso venoso e início imediato de antibioticoterapia parenteral de amplo espectro (ex.: Oxacilina IV + Ceftriaxona IV); toracostomia com dreno tubular fechado em selo d’água associada a protocolo de fibrinólise intrapleural (tPA) ou realização precoce de videotoracoscopia cirúrgica (VATS) com debridamento mecânico e lavagem da cavidade pleural.',
      },
      {
        id: 'B',
        texto:
          'Alta hospitalar imediata para tratamento domiciliar com xarope mucolítico e antibiótico via retal.',
      },
      {
        id: 'C',
        texto:
          'Toracotomia posterolateral ampla com pneumonectomia total direita mutilante de urgência sem suporte de oxigênio.',
      },
      {
        id: 'D',
        texto:
          'Manutenção exclusiva do mesmo antibiótico oral ambulatorial sem mexer no tórax, pois a presença de febre já foi controlada com antitérmico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Caso Clínico Integrador: Manejo Global do Empiema Multiloculado Pediátrico:\n\n1. Estabilização e Suporte de Oxigênio:\n   - Manter SpO2 entre 92% e 95% com suporte não invasivo;\n   - Monitorização contínua de sinais vitais e padrão respiratório;\n\n2. Terapia Antimicrobiana Parenteral Imediata:\n   - Substituir imediatamente o antibiótico oral falho por esquema parenteral de amplo espectro hospitalar;\n   - Oxacilina IV (para cobrir MSSA) associada a Ceftriaxona IV (para cobrir pneumococo com sensibilidade intermediária/alta e bactérias comunitárias invasivas), ou Vancomicina se houver suspeita de CA-MRSA;\n\n3. Abordagem da Cavidade Pleural Septada (Fase Fibrinopurulenta):\n   - Como a ultrassonografia demonstrou multiloculação e septos densos, a drenagem torácica simples isolada tem alta taxa de falha (até 40-50%);\n   - As duas estratégias baseadas em evidências (com eficácia terapêutica idêntica na literatura pediátrica) são:\n     * 1. Drenagem tubular com dreno de tórax associada à infusão de FIBRINOLÍTICO INTRAPLEURAL (tPA/alteplase) por 3 a 6 doses;\n     * 2. VIDEOTORACOSCOPIA PRECOCE (VATS): lise mecânica direta das lojas de fibrina, aspiração completa do pus e posicionamento ideal do dreno sob visão óptica direta;\n\n4. Monitorização de Resposta e Desfecho:\n   - Vigilância clínica, melhora da curva térmica em 48-72h, queda de marcadores inflamatórios e confirmação radiológica de expansão pulmonar antes da retirada do dreno e posterior transição para via oral.',
    comentariosAlternativas: {
      A: 'Correta. Sintetiza magistralmente todos os pilares da moderna pneumologia e cirurgia torácica pediátrica: oxigenação, antibiótico parenteral adequado e tratamento da cavidade septada com fibrinolítico intrapleural ou VATS precoce.',
      B: 'Incorreta. Dar alta para uma criança em sepse, hipoxêmica e com empiema multiloculado configuraria negligência e erro médico fatal.',
      C: 'Incorreta. Mutilação cirúrgica com pneumonectomia é inaceitável; o parênquima pulmonar pediátrico se recupera totalmente quando bem tratado.',
      D: 'Incorreta. Mascarar a febre com dipirona não significa cura; manter conduta conservadora pura diante de empiema volumoso loculado levaria a choque séptico e insuficiência respiratória grave.',
    },
  },
  {
    id: 'ped-irab-076',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumonia Afebril do Lactente: Chlamydia trachomatis',
    isRevisao: false,
    enunciado:
      'Um lactente de 7 semanas de vida, nascido de parto vaginal sem intercorrências, é trazido à Unidade Básica de Saúde pela mãe devido a tosse seca e progressiva há cerca de 14 dias. A mãe relata que as crises de tosse são entrecortadas, ocorrendo em salvas sucessivas com pausas inspiratórias rápidas, sem guincho ("tosse em staccato"), e que a criança não apresentou febre em nenhum momento. Notou também que a respiração é rápida e que, por volta da 3ª semana de vida, o bebê apresentou conjuntivite com secreção ocular purulenta tratada com colírio caseiro. Ao exame: afebril (36,7 °C), eupneico em repouso, FR = 56 irpm, SpO2 = 95% em ar ambiente; ausculta pulmonar com estertores subcrepitantes tele-expiratórios difusos bilaterais, sem sibilos. O hemograma demonstra contagem total de leucócitos de 14.200/mm³, com 12% de eosinófilos (1.704 eosinófilos/mm³). A radiografia de tórax evidencia hiperinsuflação pulmonar difusa e infiltrado intersticial reticulonodular bilateral simétrico. Diante desse quadro clínico clássico, qual é o agente etiológico provável e a antibioticoterapia de primeira escolha recomendada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Chlamydia trachomatis; tratamento de primeira escolha com Azitromicina oral (10 mg/kg/dia uma vez ao dia por 5 dias) ou Claritromicina oral por 14 dias.',
      },
      {
        id: 'B',
        texto:
          'Streptococcus pneumoniae; tratamento com Penicilina Procaína intramuscular em dose única.',
      },
      {
        id: 'C',
        texto:
          'Pneumocystis jirovecii; tratamento empírico com Sulfadiazina e Pirimetamina associadas a corticoide em pulsoterapia.',
      },
      {
        id: 'D',
        texto:
          'Vírus Sincicial Respiratório; contraindicação estrita a qualquer antibiótico e alta hospitalar sem acompanhamento.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Pneumonia Afebril do Lactente (PAL) por Chlamydia trachomatis:\n\n1. Transmissão e Período de Incubação:\n   - Adquirida por transmissão vertical durante a passagem pelo canal de parto em mães colonizadas no colo uterino;\n   - Manifestação ocular precoce: conjuntivite neonatal de inclusão tipicamente entre a 1ª e a 3ª semanas de vida (5 a 14 dias de vida);\n   - Manifestação pulmonar subaguda: início insidioso entre 1 e 3 meses de vida (pico entre 4 e 12 semanas);\n\n2. Quadro Clínico e Laboratorial Típico:\n   - Tosse paroxística em "staccato" (tosse seca entrecortada, em golpes sucessivos rápidos, com pausas);\n   - Ausência característica de febre (a presença de febre alta deve suscitar outras hipóteses ou coinfecção);\n   - Taquipneia leve a moderada e estertores subcrepitantes bilaterais na ausculta;\n   - Hemograma com EOSINOFILIA periférica marcante (>= 400 a 500 céls/mm³, habitualmente > 1.000/mm³);\n   - Radiografia de tórax: hiperinsuflação com infiltrado intersticial difuso ou reticulonodular bilateral;\n\n3. Tratamento de Escolha:\n   - MACROLÍDEOS: Azitromicina oral (10 mg/kg/dia no dia 1 seguido de 5 mg/kg/dia do 2º ao 5º dia, ou 10 mg/kg/dia por 5 dias) ou Claritromicina oral por 14 dias (a eritromicina clássica oral 50 mg/kg/dia por 14 dias foi sendo substituída pela maior tolerabilidade e menor toxicidade gástrica da azitromicina).',
    comentariosAlternativas: {
      A: 'Correta. Define com perfeição a Pneumonia Afebril do Lactente por Chlamydia trachomatis e seu tratamento com macrolídeo oral.',
      B: 'Incorreta. Pneumonia pneumocócica é febril, aguda e com consolidação alveolar lobar e leucocitose com desvio à esquerda sem eosinofilia.',
      C: 'Incorreta. Pneumocistose acomete imunodeprimidos/HIV e o tratamento baseia-se em Sulfametoxazol-Trimetoprima com corticoide.',
      D: 'Incorreta. Embora o raio-X lembre infecção viral, a eosinofilia marcante, tosse em staccato e antecedente de conjuntivite impõem tratamento com macrolídeo para Chlamydia.',
    },
  },
  {
    id: 'ped-irab-077',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumonia Afebril do Lactente: Risco de EHP e Macrolídeos',
    isRevisao: false,
    enunciado:
      'Um recém-nascido de 22 dias de vida apresenta conjuntivite e tosse em staccato afebril, sendo diagnosticado com infecção por Chlamydia trachomatis. Ao prescrever um macrolídeo para um neonato com menos de 1 mês de vida, qual complicação gastrintestinal potencialmente cirúrgica deve ser monitorada e informada aos pais com máxima atenção?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Estenose Hipertrófica do Piloro (EHP), especialmente associada ao uso precoce de eritromicina e azitromicina nas primeiras 2 a 6 semanas de vida.',
      },
      {
        id: 'B',
        texto:
          'Invaginação intestinal ileocólica por hiperplasia das placas de Peyer ileais.',
      },
      {
        id: 'C',
        texto:
          'Megacólon congênito aganglionar por lise dos plexos de Meissner e Auerbach.',
      },
      {
        id: 'D',
        texto:
          'Apendicite aguda perfurada por obstrução fecalítica induzida por macrolídeos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Uso de Macrolídeos no Período Neonatal e Estenose Hipertrófica do Piloro (EHP):\n\n1. Associação Epidemiológica e Fisiopatológica:\n   - O uso sistêmico de macrolídeos (historicamente a eritromicina, mas também documentado com azitromicina) em neonatos com menos de 2 a 6 semanas de vida está epidemiologicamente associado a um risco aumentado de desenvolvimento de Estenose Hipertrófica do Piloro (EHP);\n   - Mecanismo: os macrolídeos atuam como agonistas dos receptores de motilina na musculatura lisa gástrica, gerando espasmo e hipertrofia progressiva da camada muscular circular do piloro;\n\n2. Conduta Clínica:\n   - Apesar desse risco, a azitromicina permanece indicada na pneumonia por Chlamydia trachomatis ou coqueluche devido à gravidade dessas infecções respiratórias;\n   - Os pais e a equipe médica devem ser formalmente orientados a vigiar sinais de EHP nas semanas seguintes: surgimento de vômitos não biliosos pós-prandiais progressivos em jato, fome voraz logo após o vômito, perda ponderal ou desidratação.',
    comentariosAlternativas: {
      A: 'Correta. A estenose hipertrófica do piloro é a complicação clássica associada ao uso de macrolídeos no período neonatal precoce.',
      B: 'Incorreta. Invaginação intestinal tem pico clássico entre 5 e 9 meses de vida e associa-se a vírus ou divertículo de Meckel, não a macrolídeos neonatais.',
      C: 'Incorreta. Doença de Hirschsprung decorre de falha congênita na migração dos neuroblastos na embriogênese, não tendo relação com medicamentos pós-natais.',
      D: 'Incorreta. Apendicite aguda é extremamente rara em neonatos e não é causada por macrolídeos.',
    },
  },
  {
    id: 'ped-irab-078',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumonia Atípica por Mycoplasma pneumoniae: Epidemiologia e Apresentação',
    isRevisao: false,
    enunciado:
      'Um escolar de 9 anos é levado à consulta pediátrica com queixa de tosse seca contínua e incomodativa há 18 dias, com piora progressiva, associada a febre baixa intermitente (37,8 °C a 38,2 °C), cefaleia frontal e dor de garganta no início do quadro. A mãe estranha que, apesar da tosse persistente e cansativa, a criança mantém bom apetite, conversa animadamente e brinca normalmente no consultório. Ao exame: bom estado geral, acianótico, eupneico em repouso (FR = 22 irpm, SpO2 = 98% em ar ambiente); orofaringe discretamente hiperemiada; na ausculta pulmonar, surpreendentemente, ouve-se murmúrio vesicular grosseiro com estertores crepitantes e alguns sibilos esparsos em bases pulmonares. A radiografia de tórax revela infiltrado reticulonodular intersticial bilateral assimétrico exuberante na base direita, contrastando com o excelente estado clínico da criança. Qual é o diagnóstico etiológico provável e o fenômeno semiocítico destacado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Pneumonia atípica por Mycoplasma pneumoniae; destacando o fenômeno de "dissociação clínico-radiológica" característico da infecção.',
      },
      {
        id: 'B',
        texto:
          'Pneumonia lobar pneumocócica típica grave em falência respiratória iminente.',
      },
      {
        id: 'C',
        texto:
          'Coqueluche na fase catarral inicial sem qualquer envolvimento pulmonar baixo.',
      },
      {
        id: 'D',
        texto:
          'Tuberculose pulmonar miliar aguda com indicação de biópsia hepática imediata.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Pneumonia Atípica por Mycoplasma pneumoniae:\n\n1. Faixa Etária e Epidemiologia:\n   - Principal agente bacteriano de pneumonia em escolares (> 5 anos) e adolescentes, embora possa ocorrer em pré-escolares;\n   - Instalação subaguda e insidiosa ao longo de 1 a 3 semanas (frequentemente com pródromos de cefaleia, febrícula, odinofagia e mialgia);\n\n2. O Fenômeno da "Dissociação Clínico-Radiológica":\n   - A radiografia de tórax revela alterações intersticiais ou reticulonodulares extensas que parecem graves à primeira vista;\n   - No entanto, ao exame físico, o paciente apresenta bom estado geral (BEG), pouca ou nenhuma taquipneia e ausência de toxicidade sistêmica grave;\n   - A tosse é seca, irritativa, persistente e intratável, com queixa frequente de piora noturna;\n\n3. Ausência de Parede Celular de Peptidoglicano:\n   - O Mycoplasma pneumoniae não possui parede celular, sendo intrinsecamente resistente a todos os antibióticos beta-lactâmicos (penicilinas, amoxicilina, cefalosporinas).',
    comentariosAlternativas: {
      A: 'Correta. A instalação subaguda, a faixa etária escolar e a marcante dissociação clínico-radiológica são clássicas da pneumonia atípica por Mycoplasma pneumoniae.',
      B: 'Incorreta. PAC pneumocócica é de início agudo e fulminante, com febre alta e toxemia, sem dissociação clínico-radiológica.',
      C: 'Incorreta. O quadro tem 18 dias com tosse contínua e raio-X com infiltrado evidente, diferente da fase catarral da coqueluche (coriza pura de 1 semana).',
      D: 'Incorreta. Não há história de contato com TB bacilífera nem quadro consumptivo crônico; o bom estado geral afasta tuberculose miliar aguda.',
    },
  },
  {
    id: 'ped-irab-079',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Manifestações Extrapulmonares do Mycoplasma pneumoniae',
    isRevisao: false,
    enunciado:
      'Além das manifestações do trato respiratório inferior, a infecção por Mycoplasma pneumoniae é amplamente reconhecida por deflagrar fenômenos autoimunes e imunomediados em diversos órgãos e sistemas extrapulmonares. Qual das seguintes manifestações clínicas e laboratoriais extrapulmonares está clássica e frequentemente associada à infecção pelo Mycoplasma na pediatria?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Eritema multiforme / erupções mucocutâneas (como MIRM - Mycoplasma-induced rash and mucositis) e Anemia Hemolítica Autoimune por anticorpos frios (crioaglutininas com teste de Coombs direto positivo).',
      },
      {
        id: 'B',
        texto:
          'Osteonecrose avascular bilateral da cabeça do fêmur mediada por depósitos de fosfato de cálcio.',
      },
      {
        id: 'C',
        texto:
          'Hipotireoidismo congênito primário por aplasia da glândula tireoide durante a tosse.',
      },
      {
        id: 'D',
        texto:
          'Insuficiência adrenal primária fulminante com hipocalemia e alcalose metabólica hipoclorêmica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manifestações Extrapulmonares do Mycoplasma pneumoniae:\n\n1. Erupções Mucocutâneas:\n   - Eritema multiforme típico (lesões em alvo/íris);\n   - Síndrome MIRM (Mycoplasma-induced rash and mucositis): estomatite ulcerativa oral exuberante, conjuntivite e uretrite com lesões cutâneas escassas, hoje considerada entidade distinta da Síndrome de Stevens-Johnson;\n\n2. Hematológicas - Anemia Hemolítica por Crioaglutininas:\n   - O Mycoplasma estimula a síntese de anticorpos IgM policlonais dirigidos contra o antígeno I da membrana das hemácias (crioaglutininas);\n   - Em temperaturas mais baixas periféricas, esses anticorpos provocam aglutinação das hemácias e hemólise intravascular mediada pelo sistema complemento, com elevação de bilirrubina indireta, queda de haptoglobina e Coombs direto positivo;\n\n3. Outras Associações Neurológicas e Articulares:\n   - Encefalite, ataxia cerebelar aguda, síndrome de Guillain-Barré, meningite asséptica e artralgias/artrite reativa.',
    comentariosAlternativas: {
      A: 'Correta. Eritema multiforme, MIRM e anemia hemolítica autoimune mediada por crioaglutininas (anticorpos IgM anti-antígeno I) são as complicações extrapulmonares clássicas do Mycoplasma.',
      B: 'Incorreta. Necrose avascular de fêmur não é complicação do Mycoplasma; associa-se a uso crônico de corticoides ou anemia falciforme.',
      C: 'Incorreta. Hipotireoidismo congênito é disgenesia embrionária congênita, não infecção pós-natal.',
      D: 'Incorreta. Insuficiência adrenal clássica causa hipercalemia e acidose, e não alcalose metabólica hipoclorêmica.',
    },
  },
  {
    id: 'ped-irab-080',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Tratamento da Pneumonia Atípica no Escolar',
    isRevisao: false,
    enunciado:
      'Um adolescente de 13 anos recebe o diagnóstico clínico-radiológico de pneumonia atípica por Mycoplasma pneumoniae. Ao prescrever o tratamento antimicrobiano ambulatorial, o médico deve recordar que o Mycoplasma pneumoniae é desprovido de parede celular de peptidoglicano. Por esse motivo, qual classe de antimicrobianos é COMPLETAMENTE INEFICAZ contra esse patógeno e qual é o tratamento oral de primeira linha recomendado pelas diretrizes internacionais?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Os antibióticos beta-lactâmicos (penicilinas, amoxicilina, ampicilina, cefalosporinas e carbapenêmicos) são totalmente ineficazes; o tratamento de primeira escolha é realizado com Macrolídeos (como Azitromicina oral por 5 dias ou Claritromicina por 7 a 10 dias).',
      },
      {
        id: 'B',
        texto:
          'Os macrolídeos são ineficazes por destruição enzimática no esôfago; o tratamento de escolha é Penicilina G Procaína intramuscular em dose única.',
      },
      {
        id: 'C',
        texto:
          'Os aminoglicosídeos são ineficazes por ligação óssea; a primeira escolha é a Vancomicina por via oral.',
      },
      {
        id: 'D',
        texto:
          'Todas as classes de antibióticos são eficazes, sendo a Amoxicilina em dose habitual de 50 mg/kg/dia o padrão-ouro bactericida.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fundamentos Farmacológicos no Tratamento da Pneumonia Atípica:\n\n1. Resistência Intrínseca aos Beta-lactâmicos:\n   - O Mycoplasma pneumoniae carece geneticamente de síntese de parede celular rígida de peptidoglicano, sendo delimitado apenas por uma membrana trilaminar de esteroides;\n   - Portanto, qualquer antibiótico cujo mecanismo de ação dependa da inibição da síntese da parede celular (como Penicilinas, Amoxicilina, Cefalosporinas e Carbapenêmicos) é 100% INEFICAZ contra o Mycoplasma;\n\n2. Drogas Ativas de Escolha na Pediatria:\n   - Macrolídeos: inibem a subunidade 50S ribossômica bacteriana, bloqueando a síntese proteica;\n     * Azitromicina oral: 10 mg/kg no dia 1 (máx 500 mg) e 5 mg/kg/dia do 2º ao 5º dia (máx 250 mg/dia);\n     * Claritromicina oral: 15 mg/kg/dia dividida a cada 12 horas por 7 a 10 dias;\n   - Alternativas em crianças maiores de 8 anos (ou em cepas com resistência documentada a macrolídeos): Doxiciclina (tetraciclina) ou Quinolonas respiratórias (Levofloxacino/Moxifloxacino).',
    comentariosAlternativas: {
      A: 'Correta. Identifica com perfeição a ineficácia intrínseca dos beta-lactâmicos pela ausência de parede celular e prescreve o macrolídeo como fármaco de eleição.',
      B: 'Incorreta. Os macrolídeos são plenamente absorvidos e constituem a droga de escolha; penicilinas não funcionam.',
      C: 'Incorreta. Vancomicina oral não é absorvida sistemicamente e atua na parede celular, não tendo efeito contra Mycoplasma.',
      D: 'Incorreta. A amoxicilina não tem qualquer atividade contra o Mycoplasma pneumoniae.',
    },
  },
  {
    id: 'ped-irab-081',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Coqueluche: Fases Clínicas e Guincho Inspiratório',
    isRevisao: false,
    enunciado:
      'A coqueluche ("tosse comprida"), infecção aguda do trato respiratório causada pela bactéria Bordetella pertussis, divide-se classicamente em três fases clínicas cronológicas bem definidas. Assinale a alternativa que correlaciona corretamente cada fase clínica aos seus respectivos sinais e sintomas característicos:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Fase Catarral (1 a 2 semanas: sintomas inespecíficos de IVAS com coriza hialina, tosse discreta e febrícula) -> Fase Paroxística (2 a 6 semanas: acessos súbitos e incontroláveis de tosse seca em salvas sem inspiração, seguidos de guincho inspiratório "whoop", cianose facial e vômitos pós-tosse) -> Fase de Convalescença (semanas a meses: redução gradual da frequência e intensidade dos acessos de tosse).',
      },
      {
        id: 'B',
        texto:
          'Fase de Guincho Inicial (1 semana com estridor laríngeo isolado) -> Fase de Febre Alta e Diarreia (3 semanas) -> Fase Catarral tardia com lise de placas amigdalianas.',
      },
      {
        id: 'C',
        texto:
          'Fase Paroxística súbita no 1º dia com expectoração purulenta fétida -> Fase Catarral crônica por 1 ano -> Fase de Broncoespasmo irreversível com fibrose alveolar.',
      },
      {
        id: 'D',
        texto:
          'Fase Asseptomática de 6 meses -> Fase de Choque Tóxico com exantema escarlatiniforme descamativo -> Fase de Enfisema subcutâneo espontâneo obrigatório.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fases Clínicas da Coqueluche Clássica (Bordetella pertussis):\n\n1. Fase Catarral (Duração: 1 a 2 semanas):\n   - Sintomas indistinguíveis de um resfriado comum ou IVAS viral: coriza hialina profusa, espirros, febre baixa ou ausente e tosse seca noturna discreta;\n   - É o período de MAIOR TRANSMISSIBILIDADE da doença e a janela ideal na qual a antibioticoterapia altera favoravelmente o curso clínico;\n\n2. Fase Paroxística (Duração: 2 a 6 semanas):\n   - A tosse torna-se paroxística: acessos de 5 a 15 golpes de tosse rápida e ininterrupta durante uma única expiração, com protrusão lingual e congestão facial violenta;\n   - Ao término do acesso, a criança realiza uma inspiração forçada contra a glote semicerrada, produzindo o som agudo e estridente patognomônico: o "GUINCHO" INSPIRATÓRIO (*whoop*);\n   - É acompanhada comumente de cianose transitória e VÔMITOS PÓS-TOSSE imediatos;\n\n3. Fase de Convalescença (Duração: 2 a 6 semanas ou meses):\n   - Diminuição paulatina do número e gravidade dos acessos de tosse, embora episódios possam recidivar durante meses desencadeados por novas infecções virais intercorrentes ("tosse dos 100 dias").',
    comentariosAlternativas: {
      A: 'Correta. Apresenta perfeitamente as três fases clínicas da coqueluche e suas características semiológicas consagradas.',
      B: 'Incorreta. A fase catarral precede os paroxismos; a febre alta e a diarreia não fazem parte da coqueluche.',
      C: 'Incorreta. A fase catarral antecede a fase paroxística; a tosse da coqueluche é seca e sem secreção fétida.',
      D: 'Incorreta. Não existe fase assintomática de 6 meses nem choque tóxico escarlatiniforme como padrão clínico da coqueluche.',
    },
  },
  {
    id: 'ped-irab-082',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Coqueluche Grave no Lactente Jovem: Apneia sem Guincho',
    isRevisao: false,
    enunciado:
      'Um lactente de 45 dias de vida, não vacinado (mãe recusou vacinas neonatais e do 2º mês), é trazido às pressas à Emergência Pediátrica. A genitora relata que há 5 dias a criança iniciou coriza e tosse, mas que hoje apresentou três episódios súbitos em que parou de respirar por mais de 20 segundos, ficou com os lábios roxos (cianose perioral) e o corpo mole, recuperando-se após ser sacudido. A mãe nega febre e afirma que a criança "não faz nenhum barulho de guincho nem pigarro". Durante o atendimento no box de emergência, o lactente apresenta novo episódio de apneia com dessaturação para 75% e bradicardia severa (FC = 60 bpm). O hemograma revela leucocitose de 68.000/mm³ com 78% de linfócitos (53.040 linfócitos típicos/mm³). Diante deste quadro crítico, qual é o diagnóstico e o motivo da ausência do guincho inspiratório nessa faixa etária?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Coqueluche maligna/grave; em lactentes menores de 3 a 6 meses a imaturidade do sistema nervoso central e da musculatura respiratória faz com que a tosse paroxística seja substituída por crises de apneia, cianose e bradicardia, frequentemente sem o guincho inspiratório clássico.',
      },
      {
        id: 'B',
        texto:
          'Bronquiolite viral aguda leve; a ausência de guincho afasta coqueluche e a leucocitose de 68.000/mm³ é fisiológica no período neonatal.',
      },
      {
        id: 'C',
        texto:
          'Leucemia linfoblástica aguda congênita; as apneias são decorrentes de infiltração celular metastática do bulbo olfatório.',
      },
      {
        id: 'D',
        texto:
          'Aspiração crônica de leite com hipoglicemia cetótica secundária a erro inato do metabolismo da galactose.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Apresentação Atípica e Gravíssima da Coqueluche no Lactente Jovem:\n\n1. O Mito do "Guincho Obrigatório":\n   - Em lactentes jovens menores de 3 a 6 meses de vida, a apresentação clássica com guincho inspiratório exuberante FREQUENTEMENTE NÃO OCORRE;\n   - A caixa torácica complacente, a musculatura respiratória imatura e os reflexos neurológicos primitivos fazem com que a criança responda aos paroxismos de tosse com:\n     * Episódios súbitos de APNEIA prolongada;\n     * Cianose perioral e facial profunda;\n     * Bradicardia grave e convulsões por hipóxia cerebral;\n\n2. Reação Leucemoide Linfocítica (Hiperleucocitose):\n   - A toxina da Bordetella pertussis (fator promotor de linfocitose) inibe a recirculação dos linfócitos do sangue para os linfonodos;\n   - Isso gera a clássica linfocitose absoluta marcante no hemograma, frequentemente ultrapassando 50.000 a 70.000 leucócitos/mm³;\n   - Quando a contagem leucocitária ultrapassa 50.000 a 100.000/mm³, microtrombos de leucócitos ocluem capilares pulmonares, deflagrando Hipertensão Pulmonar Grave com choque refratário e risco iminente de óbito ("Coqueluche Maligna"), podendo exigir exsanguinotransfusão.',
    comentariosAlternativas: {
      A: 'Correta. Identifica com perfeição a manifestação atípica perigosa da coqueluche em lactentes jovens (apneia, bradicardia, cianose sem guincho) e a clássica hiperlinfocitose.',
      B: 'Incorreta. Leucocitose de 68.000/mm³ com 78% de linfócitos nunca é fisiológica e a apneia grave com bradicardia indica doença de alto risco.',
      C: 'Incorreta. A linfocitose é reacional induzida pela toxina pertussis (linfócitos maduros típicos), não blastos de leucemia.',
      D: 'Incorreta. O quadro respiratório com paroxismos e hiperlinfocitose não é explicado por galactosemia ou aspiração simples de leite.',
    },
  },
  {
    id: 'ped-irab-083',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Tratamento e Quimioprofilaxia de Contatos na Coqueluche',
    isRevisao: false,
    enunciado:
      'Uma criança de 3 meses é internada com diagnóstico confirmado de coqueluche por biologia molecular (PCR positivo para Bordetella pertussis em aspirado de nasofaringe). No domicílio residem a mãe (que amamenta exclusivamente), o pai e um irmão de 4 anos de idade, cuja caderneta de vacinação revela apenas 2 doses de vacina pentavalente, sem reforços com DTP. De acordo com as diretrizes do Ministério da Saúde e da Sociedade Brasileira de Pediatria (SBP), qual é a conduta antimicrobiana para o lactente internado e a estratégia de quimioprofilaxia pós-exposição para os contactantes domiciliares?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tratar o lactente com Azitromicina oral por 5 dias (10 mg/kg/dia) e prescrever quimioprofilaxia pós-exposição com Azitromicina oral para TODOS os contactantes domiciliares, independentemente do estado vacinal prévio, atualizando a vacinação do irmão de 4 anos.',
      },
      {
        id: 'B',
        texto:
          'Tratar o lactente com Amoxicilina oral por 10 dias e não administrar qualquer profilaxia aos familiares, pois adultos são imunes naturais.',
      },
      {
        id: 'C',
        texto:
          'Prescrever Cloranfenicol injetável para a criança e quarentena de 6 meses para todos os membros da casa sem medicação.',
      },
      {
        id: 'D',
        texto:
          'Indicar azitromicina exclusivamente para quem estiver sintomático com tosse na residência, sendo contraindicado tratar contactantes assintomáticos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Tratamento e Quimioprofilaxia Pós-Exposição na Coqueluche (SBP / Ministério da Saúde):\n\n1. Tratamento do Caso Índice:\n   - Droga de primeira linha: AZITROMICINA oral na dose de 10 mg/kg/dia (dose única diária) por 5 dias (inclusive em neonatos e lactentes jovens, com menor risco de toxicidade que a eritromicina);\n   - Alternativa: Claritromicina (15 mg/kg/dia dividida de 12/12h por 7 dias) ou Sulfametoxazol-Trimetoprima (em crianças maiores de 2 meses com contraindicação a macrolídeos);\n   - O antibiótico erradica a Bordetella da nasofaringe em até 5 dias, reduzindo a transmissão (o paciente deve permanecer em isolamento de gotículas por 5 dias após o início do antibiótico);\n\n2. Quimioprofilaxia dos Contactantes Domiciliares:\n   - Obrigatória para TODOS os contactantes íntimos domiciliares, INDEPENDENTEMENTE do estado vacinal ou da ausência de sintomas;\n   - Motivo: a imunidade conferida pela vacina ou pela infecção natural decai após 5 a 10 anos; indivíduos vacinados podem albergar a bactéria na nasofaringe de forma oligossintomática e retransmiti-la ao lactente vulnerável;\n   - Esquema quimioprofilático: Azitromicina oral nas doses padronizadas para cada faixa etária;\n   - Atualização vacinal: verificar e atualizar as doses em atraso da vacina com componente pertussis (pentavalente / DTP).',
    comentariosAlternativas: {
      A: 'Correta. Reflete com perfeição as diretrizes de saúde pública: azitromicina para o caso índice e quimioprofilaxia universal para todos os contatos domiciliares com atualização de vacinas.',
      B: 'Incorreta. Amoxicilina não é droga de escolha para coqueluche e contactantes domiciliares devem receber profilaxia.',
      C: 'Incorreta. Cloranfenicol não é primeira linha e isolamento de 6 meses é absurdo.',
      D: 'Incorreta. A quimioprofilaxia na coqueluche é indicada para TODOS os contatos domiciliares próximos, mesmo assintomáticos.',
    },
  },
  {
    id: 'ped-irab-084',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Aspiração de Corpo Estranho: Epidemiologia e Mecanismo Fisiopatológico',
    isRevisao: false,
    enunciado:
      'A aspiração de corpo estranho (CE) para a árvore traqueobrônquica constitui uma das principais causas de sufocação e morbimortalidade acidental na infância. Em relação à faixa etária de maior risco e aos mecanismos fisiopatológicos de oclusão das vias aéreas inferiores, qual afirmação é correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Atinge predominantemente crianças entre 1 e 3 anos de idade (devido à exploração oral do ambiente, mastigação incompleta por ausência de molares e coordenação neuromuscular imatura); na oclusão brônquica parcial, pode agir como "válvula unidirecional", permitindo a entrada do ar na inspiração, mas impedindo sua saída na expiração, gerando hiperinsuflação pulmonar obstrutiva unilateral.',
      },
      {
        id: 'B',
        texto:
          'Ocorre comumente em adolescentes durante a prática de esportes náuticos por paralisia congênita da epiglote.',
      },
      {
        id: 'C',
        texto:
          'A aspiração parcial nunca provoca hiperinsuflação, cursando obrigatoriamente com pneumoperitônio espontâneo bilateral no 1º minuto.',
      },
      {
        id: 'D',
        texto:
          'Alimentos esféricos como grãos de milho e amendoim dissolvem-se instantaneamente no muco brônquico, não causando qualquer inflamação tecidual.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Epidemiologia e Fisiopatologia da Aspiração de Corpo Estranho (CE):\n\n1. Faixa Etária Crítica (1 a 3 anos):\n   - Mais de 75% a 80% dos acidentes ocorrem em crianças menores de 3 anos de idade;\n   - Fatores predisponentes anatômicos e de desenvolvimento: dentição molar incompleta (dificuldade de triturar alimentos duros como amendoins, nozes, castanhas), exploração tátil e oral natural do ambiente, brincadeiras/risadas enquanto mastigam e imaturidade da coordenação deglutição-respiração;\n\n2. Mecanismos Fisiopatológicos de Obstrução Brônquica:\n   - Mecanismo em Válvula de Retenção (Bypass / Válvula Unidirecional):\n     * Na inspiração: a via aérea brônquica se dilata fisiologicamente, permitindo a passagem de ar além do corpo estranho;\n     * Na expiração: a via aérea se estreita fisiologicamente, colabando a parede brônquica sobre o CE e impedindo a saída do ar;\n     * Consequência: aprisionamento aéreo localizado progressivo com HIPERINSUFLAÇÃO PULMONAR unilateral (enfisema obstrutivo);\n   - Mecanismo em "Stop" Total: obstrução completa do lúmen impedindo entrada e saída de ar, levando à reabsorção do ar alveolar distal e ATELECTASIA lobar/segmentar.',
    comentariosAlternativas: {
      A: 'Correta. Descreve com exatidão a faixa etária prevalente (1 a 3 anos), a vulnerabilidade anatômica e o mecanismo de válvula unidirecional causador de hiperinsuflação obstrutiva.',
      B: 'Incorreta. Adolescentes raramente aspiram corpo estranho; o pico ocorre em pré-escolares de 1 a 3 anos.',
      C: 'Incorreta. O mecanismo valvular é a causa mais comum de hiperinsuflação unilateral; pneumoperitônio decorre de perfuração de víscera oca abdominal.',
      D: 'Incorreta. Sementes e amendoins não se dissolvem; eles absorvem umidade, aumentam de tamanho e liberam óleos graxos irritativos causando bronquite química granulomatosa severa.',
    },
  },
  {
    id: 'ped-irab-085',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Aspiração de Corpo Estranho: Semiologia e Sibilância Unilateral',
    isRevisao: false,
    enunciado:
      'Uma menina de 2 anos é trazida à UPA pelos pais devido a quadro de tosse persistente e respiração ruidosa com chiado no peito que se iniciou há 3 dias. A mãe relata que a criança estava bem até domingo à tarde quando, comendo pipoca na sala, apresentou um episódio súbito de engasgo, tosse intensa e sufocação, que melhorou após tapotagem nas costas. Desde então, a criança mantém chiado e tosse seca. Ao exame: afebril, FR = 34 irpm, SpO2 = 96% em ar ambiente; na ausculta pulmonar observa-se murmúrio vesicular diminuído no hemitórax direito com presença de sibilos expiratórios estritamente localizados no hemitórax direito, sem qualquer ruído adventício no hemitórax esquerdo. Foi realizado teste terapêutico com 3 nebulizações sucessivas de fenoterol, sem qualquer modificação da ausculta ou alívio clínico. Qual é a interpretação clínica prioritária deste caso?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Forte suspeita de Aspiração de Corpo Estranho em brônquio principal direito; a tríade de história de engasgo súbito, sibilância unilateral assimétrica e refratariedade a broncodilatadores é altamente sugestiva.',
      },
      {
        id: 'B',
        texto:
          'Primeiro episódio de asma brônquica clássica atópica; internar em UTI para sulfato de magnésio e ventilação mecânica.',
      },
      {
        id: 'C',
        texto:
          'Bronquiolite viral aguda tardia por rinovírus; indicar fisioterapia respiratória vigorosa com percussão torácica profunda.',
      },
      {
        id: 'D',
        texto:
          'Laringite estridulosa espasmódica noturna; administrar adrenalina inalatória e liberar com anti-histamínico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Semiologia da Aspiração de Corpo Estranho (CE) Traqueobrônquico:\n\n1. Tríade Clássica de Apresentação:\n   - 1. História de evento agudo de engasgo e tosse paroxística com sufocação (a anamnese atenta é o dado mais valioso, presente em > 80-90% dos casos);\n   - 2. Ausculta pulmonar assimétrica: sibilância localizada UNILATERAL e/ou diminuição focal do murmúrio vesicular no hemitórax acometido;\n   - 3. Refratariedade absoluta a broncodilatadores (beta-2 agonistas): diferentemente da asma brônquica ou bronquiolite (onde o broncoespasmo é difuso e responsivo aos agonistas adrenérgicos), a obstrução mecânica por corpo estranho não relaxa com medicação;\n\n2. Predileção Anatômica pelo Brônquio Principal Direito:\n   - Em crianças maiores e adultos, o brônquio principal direito é mais calibre, mais retilíneo e tem trajeto mais verticalizado em relação à traqueia, sendo o sítio mais comum de alojamento de corpos estranhos aspirados.',
    comentariosAlternativas: {
      A: 'Correta. A história de engasgo com pipoca, sibilância unilateral fixa e ausência de resposta a broncodilatadores constituem o quadro clínico paradigmático de corpo estranho.',
      B: 'Incorreta. A asma cursa com sibilos expiratórios difusos e bilaterais, responsivos a beta-2 agonistas, sem relato de engasgo com alimento sólido.',
      C: 'Incorreta. BVA afeta lactentes até 2 anos de forma difusa com pródromos virais; fisioterapia percussiva é contraindicada por risco de descolamento de CE para traqueia.',
      D: 'Incorreta. Laringite cursa com tosse ladrante e estridor inspiratório alto, não sibilo unilateral.',
    },
  },
  {
    id: 'ped-irab-086',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Achados Radiológicos na Aspiração de Corpo Estranho',
    isRevisao: false,
    enunciado:
      'Uma criança de 20 meses com suspeita de aspiração de semente de melancia é submetida a radiografia de tórax. Sabendo-se que a grande maioria dos corpos estranhos aspirados na infância é de natureza orgânica e radiotransparente (não metálica), quais são os sinais radiológicos indiretos mais frequentemente observados?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Hiperinsuflação unilateral (hipertransparência e rebaixamento da cúpula diafragmática do lado acometido com desvio do mediastino para o lado contralateral na expiração) ou atelectasia lobar/segmentar.',
      },
      {
        id: 'B',
        texto:
          'Imagem radiopaca de alta densidade metálica com sinal do duplo halo traqueal obrigatório.',
      },
      {
        id: 'C',
        texto:
          'Calcificação difusa de todos os gânglios hilares e derrame pericárdico volumoso.',
      },
      {
        id: 'D',
        texto:
          'A radiografia de tórax sempre normal descarta de forma definitiva qualquer aspiração de corpo estranho.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Achados Radiológicos Indiretos na Aspiração de Corpo Estranho (CE):\n\n1. Corpos Estranhos Radiotransparentes:\n   - Mais de 85% a 90% dos objetos aspirados são de origem orgânica/alimentar (amendoins, castanhas, feijão, sementes) ou fragmentos de plástico, não sendo diretamente visualizáveis na radiografia convencional;\n\n2. Sinais Radiológicos Indiretos Típicos:\n   - 1. Hiperinsuflação Unilateral / Aprisionamento Aéreo (achado mais comum):\n     * Aumento da transparência pulmonar (hipertransparência);\n     * Rebaixamento e retificação da cúpula diafragmática ipsilateral;\n     * Aumento dos espaços intercostais do lado acometido;\n     * Desvio do mediastino e da traqueia para o LADO OPOSTO (CONTRALATERAL) durante a EXPIRAÇÃO (pode ser demonstrado em radiografia expirada ou em decúbito lateral);\n   - 2. Atelectasia (por obstrução total do brônquio);\n   - 3. Consolidação ou infiltrado inflamatório tardio;\n\n3. Regra de Ouro Radiológica:\n   - Uma radiografia de tórax RIGOROSAMENTE NORMAL NÃO EXCLUI o diagnóstico de corpo estranho em via aérea se a história clínica for fortemente suspeita!',
    comentariosAlternativas: {
      A: 'Correta. Aponta os clássicos sinais indiretos de aprisionamento aéreo (hiperinsuflação com desvio de mediastino contralateral) e atelectasia por rolha mecânica.',
      B: 'Incorreta. Menos de 10% dos corpos estranhos são radiopacos (peças metálicas, parafusos). Alimentos são radiotransparentes.',
      C: 'Incorreta. Calcificação ganglionar sugere sequela de tuberculose primária (complexo de Ghon), sem relação com CE agudo.',
      D: 'Incorreta. Uma radiografia normal ocorre em até 20-30% das aspirações de CE nas primeiras 24 horas; se a clínica for suspeita, a broncoscopia é obrigatória.',
    },
  },
  {
    id: 'ped-irab-087',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Broncoscopia Rígida: Padrão-Ouro Diagnóstico e Terapêutico',
    isRevisao: false,
    enunciado:
      'Diante da confirmação clínica ou forte suspeita de corpo estranho localizado na árvore traqueobrônquica de uma criança de 2 anos, qual procedimento é considerado o padrão-ouro indiscutível para o diagnóstico definitivo e o tratamento terapêutico curativo?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Broncoscopia Rígida sob anestesia geral em centro cirúrgico com pinças adequadas de apreensão.',
      },
      {
        id: 'B',
        texto:
          'Broncoscopia flexível por via nasal em consultório sem anestesia e sem controle da via aérea.',
      },
      {
        id: 'C',
        texto:
          'Manobra de Heimlich repetida 40 vezes consecutivas com a criança dormindo na enfermaria.',
      },
      {
        id: 'D',
        texto:
          'Lavagem broncoalveolar com solução salina hipertônica a 20% através de nebulizador ultrassônico domiciliar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Broncoscopia Rígida como Padrão-Ouro na Remoção de Corpo Estranho:\n\n1. Por que o Broncoscópio Rígido é Superior para Remoção de CE:\n   - Segurança da Via Aérea: o tubo metálico rígido mantém a via aérea pérvia e ventilada durante todo o procedimento sob anestesia geral;\n   - Canal de Trabalho Amplo: permite a passagem de pinças ópticas robustas de diferentes formatos (pinças em garra, jacaré, cestas de Dormia) que conseguem prender e tracionar o objeto com firmeza sem fragmentá-lo;\n   - Controle Óptico Direto e Aspiração Eficiente: permite aspiração potente de secreções espessas, sangue e tampões mucosos ao redor do CE;\n\n2. Papel da Broncoscopia Flexível:\n   - Pode ser utilizada de forma diagnóstica em casos de suspeita duvidosa ou em vias aéreas subsegmentares distantes inacessíveis ao tubo rígido, mas é contraindicada como primeira linha para extração de CE obstrutivo em via aérea central devido ao risco de perda do objeto na subglote ou asfixia aguda.',
    comentariosAlternativas: {
      A: 'Correta. A broncoscopia rígida sob anestesia geral é o padrão-ouro universal para a retirada segura e imediata de corpo estranho na árvore brônquica pediátrica.',
      B: 'Incorreta. Broncoscopia flexível em consultório sem controle ventilatório tracionando um CE pode desprendê-lo na fenda glótica e causar asfixia obstrutiva fatal.',
      C: 'Incorreta. Manobra de Heimlich é reservada para obstrução total aguda da via aérea superior com asfixia em curso, não para CE brônquico crônico estável.',
      D: 'Incorreta. Salina hipertônica causaria broncoespasmo grave e não removeria corpos estranhos impactados.',
    },
  },
  {
    id: 'ped-irab-088',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Sequelas Tardias da Aspiração Não Diagnosticada de Corpo Estranho',
    isRevisao: false,
    enunciado:
      'Um menino de 4 anos é encaminhado ao ambulatório de pneumologia pediátrica por apresentar três episódios documentados de pneumonia no lobo inferior direito nos últimos 5 meses, além de tosse produtiva crônica fétida e hemoptoicos ocasionais. Foi tratado repetidas vezes como "asma de difícil controle" sem sucesso. A tomografia de tórax atual revela bronquiectasias cilíndricas e saculares confinadas exclusivamente aos segmentos basais do lobo inferior direito, além de impactação mucoide no brônquio intermediário. A história pregressa revela episódio de engasgo com pedaço de brinquedo plástico há 6 meses ignorado pela família. Qual foi o mecanismo fisiopatológico das bronquiectasias neste paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Corpo estranho brônquico retido cronicamente provocando obstrução mecânica prolongada, falha do clearance mucociliar, infecção bacteriana recorrente e destruição enzimática/inflamatória das fibras elásticas e cartilaginosas da parede brônquica (bronquiectasias localizadas).',
      },
      {
        id: 'B',
        texto:
          'Fibrose cística congênita com deleção do gene CFTR restrita apenas ao lobo inferior direito.',
      },
      {
        id: 'C',
        texto:
          'Discinesia ciliar primária unilateral por ausência dos braços de dineína decorrente do choro na infância.',
      },
      {
        id: 'D',
        texto:
          'Aspergilose broncopulmonar alérgica induzida por picada de carrapato.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Complicações Tardias do Corpo Estranho Retido:\n\n1. Diagnóstico Tardio ou Negligenciado:\n   - Quando o evento inicial de engasgo não é testemunhado ou é subestimado, o corpo estranho permanece impactado no brônquio, passando por uma fase "silenciosa" ou simulando asma refratária e pneumonias de repetição no mesmo lobo;\n\n2. Fisiopatologia das Bronquiectasias Localizadas:\n   - Obstrução brônquica crônica $\rightarrow$ Estase de secreções a jusante $\rightarrow$ Proliferação bacteriana anaeróbia e piogênica $\rightarrow$ Infiltração neutrofílica crônica com liberação de elastases e metaloproteinases $\rightarrow$ Destruição irreversível dos componentes elásticos, musculares e cartilaginosos da parede brônquica $\rightarrow$ Dilatação permanente e anormal dos brônquios (bronquiectasias);\n\n3. Regra Clínica Fundamental:\n   - Pneumonia recorrente de MESMA LOCALIZAÇÃO ANATÔMICA em criança previamente sadia OBRIGA a investigação de causa mecânica localizada: corpo estranho retido, malformação congênita (sequestro/CPAM) ou estenose brônquica.',
    comentariosAlternativas: {
      A: 'Correta. Identifica com perfeição a cascata fisiopatológica que transforma um corpo estranho retido em bronquiectasias crônicas por pneumonia de repetição no mesmo lobo.',
      B: 'Incorreta. Fibrose cística é doença genética sistêmica que afeta ambos os pulmões difusamente (com predomínio em lobos superiores), não um lobo isolado.',
      C: 'Incorreta. Discinesia ciliar é defeito genético em todas as células ciliadas do organismo e não acomete um único segmento brônquico unilateral.',
      D: 'Incorreta. ABPA é reação de hipersensibilidade fúngica em asmáticos atópicos, não transmitida por carrapatos nem restrita a brônquio com corpo estranho.',
    },
  },
  {
    id: 'ped-irab-089',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumonia por Chlamydia psittaci e Doenças Zoonóticas',
    isRevisao: false,
    enunciado:
      'Um adolescente de 15 anos apresenta febre alta diária com calafrios, tosse seca intensa, cefaleia holocraniana excruciante e fotofobia. O exame físico revela esplenomegalia discreta, estertores tele-expiratórios em hemitórax esquerdo e bradicardia relativa (FC de 72 bpm na presença de temperatura axilar de 39,5 °C - sinal de Faget). A anamnese dirigida revela que a família adquiriu recentemente um papagaio silvestre que apresentava diarreia e penas eriçadas. A radiografia de tórax evidencia infiltrado intersticial alveolar multifocal. Qual é a hipótese diagnóstica zoonótica e a terapia antimicrobiana indicada para este adolescente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Psitacose (Ornitose) por Chlamydia psittaci; tratamento de escolha com Doxiciclina oral por 10 a 14 dias (ou Macrolídeo).',
      },
      {
        id: 'B',
        texto:
          'Gripe aviária puramente viral tratada com Oseltamivir em dose única e soroterapia antiofídica.',
      },
      {
        id: 'C',
        texto:
          'Febre maculosa por Rickettsia rickettsii tratada exclusivamente com Penicilina Cristalina intravenosa.',
      },
      {
        id: 'D',
        texto:
          'Histoplasmose pulmonar aguda requerendo Anfotericina B desoxicolato por 12 meses ininterruptos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Psitacose / Ornitose (Chlamydia psittaci):\n\n1. Transmissão Zoonótica:\n   - Adquirida pela inalação de aerossóis ressecados de fezes, secreções nasais ou penas de aves infectadas (psitacídeos como papagaios, araras, periquitos e calopsitas);\n\n2. Quadro Clínico Característico:\n   - Apresentação grave de pneumonia atípica: febre alta com calafrios, tosse seca, cefaleia intensa e refratária (sintoma neurológico proeminente), mialgias;\n   - Dissociação pulso-temperatura (Sinal de Faget: bradicardia relativa na presença de hipertermia);\n   - Esplenomegalia e hepatomegalia discretas em 10-30% dos pacientes;\n\n3. Tratamento de Escolha:\n   - DOXICICLINA oral (100 mg 12/12h por 10 a 14 dias) é o padrão-ouro de eficácia para pacientes maiores de 8 anos e adolescentes;\n   - Alternativa segura: Macrolídeos (Azitromicina ou Eritromicina).',
    comentariosAlternativas: {
      A: 'Correta. A história de contato com ave doente, pneumonia atípica com cefaleia intensa, bradicardia relativa e esplenomegalia define psitacose, tratada com doxiciclina.',
      B: 'Incorreta. Não se usa soro antiofídico para pneumonia e o quadro bacteriano zoonótico clássico com bradicardia relativa é de psitacose.',
      C: 'Incorreta. Rickettsia rickettsii é transmitida pelo carrapato-estrela e não responde a penicilinas.',
      D: 'Incorreta. Anfotericina B é reservada para histoplasmose disseminada grave com acometimento reticuloendotelial maciço, não quadro agudo zoonótico pós-papagaio.',
    },
  },
  {
    id: 'ped-irab-090',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Diagnóstico Laboratorial da Coqueluche: PCR vs Cultura',
    isRevisao: false,
    enunciado:
      'No diagnóstico laboratorial confirmatório da coqueluche na infância, qual método microbiológico é atualmente preconizado como o padrão-ouro de maior sensibilidade e rapidez pelo Ministério da Saúde e CDC, especialmente a partir da segunda semana de sintomas clínicos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Reação em Cadeia da Polimerase em Tempo Real (qPCR) para detecção do DNA da Bordetella pertussis em amostra de secreção de nasofaringe colhida por swab de dácron ou aspirado.',
      },
      {
        id: 'B',
        texto:
          'Cultura de escarro comum em ágar sangue de carneiro incubada por 12 horas à temperatura ambiente.',
      },
      {
        id: 'C',
        texto:
          'Sorologia ELISA para IgM em gota de sangue seco coletada no teste do pezinho do recém-nascido.',
      },
      {
        id: 'D',
        texto:
          'Bacterioscopia direta pelo método de Gram em swab orofaríngeo de algodão comum.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diagnóstico Laboratorial da Coqueluche (Bordetella pertussis):\n\n1. Reação em Cadeia da Polimerase (PCR):\n   - Método de eleição devido à alta sensibilidade (superior a 90%) e especificidade, com resultados liberados em poucas horas;\n   - Permanece positivo mesmo após a 2ª a 3ª semana de doença e até 3 a 5 dias após o início do antibiótico;\n   - Coleta ideal: Aspirado de nasofaringe ou swab de nasofaringe (utilizando hastes flexíveis com ponta de dácron ou rayon; nunca algodão ou alginato de cálcio, pois inibem as polimerases da PCR e são tóxicos para a bactéria);\n\n2. Cultura Bacteriológica (Meio de Bordet-Gengou ou Regan-Lowe):\n   - Possui 100% de especificidade (padrão-ouro histórico confirmatório), porém baixa sensibilidade (30-60%) que decai rapidamente após a 1ª semana de sintomas ou se já houver uso de antibiótico;\n   - Crescimento fastidioso e lento (exige de 7 a 10 dias de incubação).',
    comentariosAlternativas: {
      A: 'Correta. A PCR em tempo real de secreção de nasofaringe é o teste padrão moderno de maior sensibilidade e rapidez.',
      B: 'Incorreta. Bordetella pertussis é microrganismo fastidioso que não cresce em ágar sangue comum; exige meios específicos (Bordet-Gengou ou Regan-Lowe) com incubação prolongada.',
      C: 'Incorreta. Sorologia em teste do pezinho não diagnostica coqueluche aguda do lactente.',
      D: 'Incorreta. Swabs de algodão contêm substâncias bactericidas/inibidoras de PCR e swab de orofaringe não capta a bactéria colonizada na nasofaringe ciliada.',
    },
  },
  {
    id: 'ped-irab-091',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Síndrome Coqueluchoide: Diagnóstico Diferencial Etiológico',
    isRevisao: false,
    enunciado:
      'Uma criança de 8 meses apresenta quadro de tosse paroxística espasmódica com vômitos pós-tosse, porém com hemograma mostrando apenas 11.000 leucócitos/mm³ e PCR para Bordetella pertussis negativo. O médico assistente classifica o quadro como "Síndrome Coqueluchoide". Além da Bordetella pertussis e parapertussis, quais outros agentes infecciosos virais e atípicos são causas reconhecidas dessa síndrome em lactentes?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Adenovírus, Vírus Sincicial Respiratório (VSR), Rinovírus, Metapneumovírus humano e Chlamydia trachomatis.',
      },
      {
        id: 'B',
        texto:
          'Escherichia coli enteropatogênica e Rotavírus tipo A.',
      },
      {
        id: 'C',
        texto:
          'Treponema pallidum e Toxoplasma gondii congênito.',
      },
      {
        id: 'D',
        texto:
          'Clostridium tetani por ação da tetanospasmina na traqueia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Síndrome Coqueluchoide na Infância:\n\n1. Conceito Clínico:\n   - Termo utilizado para definir o quadro clínico que mimetiza a coqueluche (crises paroxísticas de tosse seca, guincho, cianose e/ou vômitos pós-tosse), mas cuja etiologia não é a Bordetella pertussis clássica;\n   - Frequentemente cursa sem a hiperleucocitose linfocítica marcante típica da B. pertussis;\n\n2. Principais Patógenos Envolvidos:\n   - Vírus Respiratórios: Adenovírus (especialmente sorotipos 1, 2, 3 e 5), VSR, Parainfluenza tipos 1 a 3, Rinovírus e Bocavírus;\n   - Outras Bactérias: Bordetella parapertussis e Bordetella bronchiseptica;\n   - Agentes Atípicos: Chlamydia trachomatis (em lactentes jovens) e Mycoplasma pneumoniae (em crianças maiores).',
    comentariosAlternativas: {
      A: 'Correta. Adenovírus, VSR, Rinovírus e Chlamydia são as causas virais e atípicas mais frequentes de síndrome coqueluchoide.',
      B: 'Incorreta. E. coli e rotavírus são patógenos entéricos causadores de diarreia aquosa aguda.',
      C: 'Incorreta. Treponema e Toxoplasma causam infecções congênitas do grupo TORCH, sem crises paroxísticas de tosse espasmódica.',
      D: 'Incorreta. Clostridium tetani causa tétano acidental ou neonatal com trismo e espasmos musculares generalizados reflexos, sem quadro respiratório catarral inicial.',
    },
  },
  {
    id: 'ped-irab-092',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Calendário Vacinal contra Coqueluche no Brasil: DTP e dTpa',
    isRevisao: false,
    enunciado:
      'A prevenção primária da coqueluche na infância é um dos grandes pilares do Programa Nacional de Imunizações (PNI) do Brasil. Qual é o esquema básico recomendado para a vacinação da criança no primeiro ano de vida e qual estratégia materna adotada desde 2014 é decisiva para proteger os recém-nascidos e lactentes antes dos primeiros meses de vida?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Três doses da vacina Pentavalente (DTPw-HB-Hib) aos 2, 4 e 6 meses de vida, com reforços com DTP aos 15 meses e 4 anos; associada à vacinação obrigatória de todas as gestantes com dTpa a cada gestação a partir da 20ª semana.',
      },
      {
        id: 'B',
        texto:
          'Uma dose única de vacina DTP no nascimento com proteção permanente para toda a vida sem necessidade de reforços.',
      },
      {
        id: 'C',
        texto:
          'Vacinação exclusiva com vacina oral de bactérias vivas atenuadas aos 12 meses de idade sem vacinar gestantes.',
      },
      {
        id: 'D',
        texto:
          'Suspensão da vacinação infantil e profilaxia diária contínua com azitromicina até os 18 anos de idade.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Calendário Vacinal e Imunização contra Coqueluche (PNI / Brasil):\n\n1. Esquema Básico Infantil (PNI):\n   - Esquema Primário: 3 doses de Vacina Pentavalente (DTP de células inteiras + Hepatite B + Haemophilus influenzae tipo b) administradas aos 2, 4 e 6 meses de vida;\n   - Doses de Reforço: com a vacina tríplice bacteriana DTP aos 15 meses de vida e aos 4 anos de idade;\n\n2. Estratégia de Proteção do Lactente Jovem via Materna (dTpa Gestacional):\n   - Os lactentes menores de 6 meses apresentam a maior taxa de hospitalização, complicações neurológicas e mortalidade por coqueluche, pois ainda não completaram o esquema vacinal primário;\n   - Para protegê-los, o Ministério da Saúde recomenda 1 dose da vacina acelular tipo adulto (dTpa) para TODAS AS GESTANTES A CADA GESTAÇÃO, a partir da 20ª semana de gravidez (preferencialmente entre a 27ª e a 36ª semana);\n   - Mecanismo: a mãe vacinada produz altos títulos de IgG anti-pertussis que atravessam ativamente a barreira placentária, conferindo imunidade passiva protetora imediata ao recém-nascido nos seus primeiros meses mais vulneráveis.',
    comentariosAlternativas: {
      A: 'Correta. Sintetiza com total fidelidade o calendário do PNI (2, 4 e 6 meses com reforços aos 15 meses e 4 anos) e o papel decisivo da dTpa gestacional.',
      B: 'Incorreta. Não existe dose única no nascimento e a imunidade da vacina decai com o tempo.',
      C: 'Incorreta. As vacinas contra coqueluche são inativadas (células inteiras ou acelulares), não vivas atenuadas, e devem começar aos 2 meses.',
      D: 'Incorreta. A profilaxia contínua com antibióticos até a maioridade é absurda; a vacina é o método seguro e consagrado.',
    },
  },
  {
    id: 'ped-irab-093',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumonia por Chlamydophila pneumoniae no Escolar',
    isRevisao: false,
    enunciado:
      'A Chlamydophila pneumoniae (anteriormente Chlamydia pneumoniae) é outro importante agente de pneumonia atípica em escolares, adolescentes e adultos jovens. Em comparação com o Mycoplasma pneumoniae, qual característica clínica e curso evolutivo é frequentemente observado na infecção por C. pneumoniae?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Apresentação bifásica frequente com faringite e rouquidão (laringite) nas fases iniciais, seguida dias a semanas depois por tosse subaguda persistente, com taxa de resposta clínica favorável ao uso de macrolídeos.',
      },
      {
        id: 'B',
        texto:
          'Evolução hiperaguda com choque séptico em menos de 2 horas e necrose de falanges em 100% dos infectados.',
      },
      {
        id: 'C',
        texto:
          'Presença patognomônica de conjuntivite membranosa gonocócica com cegueira irreversível imediata.',
      },
      {
        id: 'D',
        texto:
          'Resistência absoluta e universal a todos os macrolídeos, respondendo apenas a penicilinas orais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Pneumonia por Chlamydophila pneumoniae:\n\n1. Perfil Clínico e Epidemiológico:\n   - Bactéria intracelular obrigatória que acomete escolares acima de 5 anos, adolescentes e adultos;\n   - Transmissão interpessoal por gotículas respiratórias com longo período de incubação (3 a 4 semanas);\n\n2. Quadro Clínico Típico Bifásico:\n   - Fase Inicial: sintomas de via aérea superior, com destaque para faringite não exsudativa e rouquidão/laringite marcante (disfonia prolongada);\n   - Fase Tardia: 1 a 3 semanas após, surge tosse seca subaguda, espasmódica, acompanhada de estertores crepitantes discretos na ausculta e infiltrado subsegmentar no raio-X;\n\n3. Resposta aos Macrolídeos:\n   - Por ser intracelular, responde muito bem a macrolídeos (Azitromicina ou Claritromicina) ou Doxiciclina.',
    comentariosAlternativas: {
      A: 'Correta. Descreve com fidelidade o padrão clínico bifásico com faringite/rouquidão proeminente antecedendo a pneumonia atípica.',
      B: 'Incorreta. O curso é insidioso e arrastado ao longo de semanas, não hiperagudo fulminante com necrose.',
      C: 'Incorreta. Conjuntivite gonocócica é causada por Neisseria gonorrhoeae no período neonatal imediato.',
      D: 'Incorreta. A bactéria é sensível a macrolídeos e tetraciclinas, e resistente a penicilinas.',
    },
  },
  {
    id: 'ped-irab-094',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'PCR vs Testes Rápidos em Painéis Respiratórios Multiplex',
    isRevisao: false,
    enunciado:
      'Na moderna propedêutica das infecções respiratórias baixas agudas na pediatria, o uso de Painéis Moleculares Sindrômicos Multiplex por PCR em aspirado/swab de nasofaringe permite a detecção simultânea de dezenas de vírus e bactérias atípicas. Diante do laudo positivo de um painel molecular em uma criança internada com pneumonia bacteriana típica (consolidação lobar com broncograma aéreo e PCR sérico de 180 mg/L) que revela a presença de "Rinovírus / Enterovírus", qual conduta médica é a mais prudente e correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Interpretar o achado viral à luz do quadro clínico-radiológico global, compreendendo que a coinfecção viral-bacteriana e o carreamento viral prolongado e assintomático na nasofaringe são frequentes; manter a antibioticoterapia bacteriana indicada pela clínica e raio-X.',
      },
      {
        id: 'B',
        texto:
          'Suspender imediatamente todo e qualquer antibiótico, pois a positividade para qualquer vírus exclui de modo absoluto qualquer infecção bacteriana secundária.',
      },
      {
        id: 'C',
        texto:
          'Iniciar imediatamente três antivirais intravenosos associados a quimioterapia imunossupressora.',
      },
      {
        id: 'D',
        texto:
          'Classificar o painel molecular como fraudulento e indicar toracotomia exploradora diagnóstica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Interpretação Crítica dos Painéis Moleculares Multiplex na Pediatria:\n\n1. Alta Sensibilidade e Carreamento Assintomático:\n   - Os testes de PCR multiplex são ferramentas diagnósticas de altíssima sensibilidade. No entanto, vírus como Rinovírus, Adenovírus e Bocavírus podem permanecer sendo detectados por semanas ou meses na nasofaringe de crianças após um resfriado prévio, sem significar doença ativa atual;\n\n2. Coinfecção Viral-Bacteriana:\n   - Em mais de 30% a 50% das pneumonias comunitárias bacterianas em crianças existe infecção viral primária prévia ou concomitante que facilitou a colonização e invasão pneumocócica;\n\n3. Julgamento Clínico Soberano:\n   - Se a criança apresenta febre alta persistente, toxemia, marcadores inflamatórios muito elevados (PCR > 100 mg/L, procalcitonina) e radiografia com consolidação lobar com broncograma aéreo, a antibioticoterapia antibacteriana DEVE ser mantida integralmente, não sendo suspensa apenas pela presença incidental de rinovírus no swab.',
    comentariosAlternativas: {
      A: 'Correta. Reflete o julgamento clínico moderno: testes moleculares detectam material genético, mas a decisão terapêutica baseia-se na correlação clínico-radiológica.',
      B: 'Incorreta. Suspender antibiótico diante de consolidação bacteriana franca causaria sepse e falência pulmonar.',
      C: 'Incorreta. Não há indicação de antivirais nem imunossupressores para rinovírus em criança com PAC.',
      D: 'Incorreta. O painel é legítimo e toracotomia por swab positivo é conduta descabida.',
    },
  },
  {
    id: 'ped-irab-095',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Aspiração de Bateria de Botão na Via Aérea / Esôfago',
    isRevisao: false,
    enunciado:
      'Uma lactente de 14 meses é admitida com estridor, tosse irritativa e recusa alimentar súbita. A radiografia de tórax e pescoço em incidência AP evidencia imagem circular radiopaca metálica no nível da transição cervicotorácica. No perfil, observa-se a projeção de um degrau na borda do disco ("sinal do degrau" ou "sinal do duplo halo" no AP), confirmando a ingestão/aspiração de uma bateria de lítio tipo botão ("button battery"). Por que a presença de uma bateria tipo botão impactada na transição aerodigestiva exige endoscopia/broncoscopia de emergência absoluta em menos de 2 horas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Porque a corrente elétrica residual local somada à liberação de íons hidróxido gera necrose por liquefação cáustica alcalina rápida, podendo perfurar o esôfago e a traqueia (fístula traqueoesofágica) e erodir vasos calibrosos como a aorta com hemorragia fatal em poucas horas.',
      },
      {
        id: 'B',
        texto:
          'Porque a bateria atrai magneticamente os ossos da coluna cervical, causando fratura espontânea de atlas e áxis.',
      },
      {
        id: 'C',
        texto:
          'Porque a bateria causa acidose lática sistêmica pura sem qualquer lesão tecidual local.',
      },
      {
        id: 'D',
        texto:
          'Porque pilhas de botão liberam radiação gama que induz leucemia aguda em menos de 24 horas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Urgência Extrema da Bateria de Botão Impactada:\n\n1. Mecanismos Fisiopatológicos de Lesão Tecidual Fulminante:\n   - 1. Geração de Corrente Elétrica Local: ao encostar na mucosa úmida, fecha-se um circuito elétrico gerando hidrólise da água tecidual e produção massiva de hidróxido ($\text{OH}^-$);\n   - 2. Necrose de Liquefação Cáustica Alcalina Severa: o pH local sobe para $> 12\text{--}13$, destruindo proteínas, colágeno e liquefazendo tecidos com penetração profunda em minutos;\n   - 3. Efeito de Compressão Isquêmica e Vazamento Químico de Mercúrio/Metais Pesados;\n\n2. Catástrofes Decorrentes em Poucas Horas:\n   - Lesão tecidual severa pode ocorrer em apenas 2 HORAS de contato;\n   - Fístula Traqueoesofágica por necrose transmural;\n   - Fístula Aortoesofágica com sangramento arterial exsanguinante fulminante e óbito imediato;\n   - Paralisia de cordas vocais por necrose do nervo laríngeo recorrente;\n\n3. Conduta:\n   - Remoção endoscópica/cirúrgica DE EMERGÊNCIA IMEDIATA (prioridade cirúrgica nível 1). Enquanto se aguarda o procedimento cirúrgico, pode-se ofertar mel por via oral em crianças maiores de 1 ano para proteger a mucosa por efeito de barreira física e tamponamento ácido.',
    comentariosAlternativas: {
      A: 'Correta. Define com rigor o mecanismo cáustico alcalino por corrente elétrica e as complicações fatais (fístula esofágica, erosão de aorta) que impõem remoção emergencial em < 2 horas.',
      B: 'Incorreta. Baterias de botão não têm magnetismo capaz de fraturar vértebras.',
      C: 'Incorreta. A lesão é predominantemente local cáustica alcalina tecidual destrutiva profunda.',
      D: 'Incorreta. Não existe emissão de radiação gama em baterias de botão comerciais.',
    },
  },
  {
    id: 'ped-irab-096',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumonia no Paciente Asmático: Desafios de Manejo',
    isRevisao: false,
    enunciado:
      'Um escolar de 7 anos com diagnóstico prévio de asma brônquica atópica controlada apresenta crise aguda de broncoespasmo há 48 horas desencadeada por febre alta (39 °C), dor torácica contínua no hemitórax esquerdo e tosse produtiva. No pronto-socorro, realizou três ciclos de salbutamol com ipratrópio e corticoide oral; a sibilância difusa melhorou consideravelmente, porém a criança mantém frequência respiratória de 42 irpm, SpO2 de 91% em ar ambiente e na reavaliação da ausculta pulmonar persiste um foco nítido de estertores crepitantes tele-expiratórios e redução do murmúrio vesicular na base pulmonar esquerda. A radiografia de tórax confirma consolidação com broncograma aéreo no lobo inferior esquerdo. Qual é a conduta integrada recomendada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Associar antibioticoterapia para Pneumonia Adquirida na Comunidade (Amoxicilina oral em dose otimizada de 80–90 mg/kg/dia ou internação com penicilina/ampicilina conforme gravidade) à manutenção do tratamento da exacerbação de asma com beta-2 agonista inalatório de curta ação e corticoide sistêmico.',
      },
      {
        id: 'B',
        texto:
          'Suspender o corticoide sistêmico e o salbutamol, pois antiasmáticos anulam completamente a ação dos antibióticos no tecido alveolar.',
      },
      {
        id: 'C',
        texto:
          'Prescrever apenas sedativo para tosse e liberar para domicílio sem antibiótico, já que todo infiltrado no asmático é atelectasia benigna transitória.',
      },
      {
        id: 'D',
        texto:
          'Indicar broncoscopia rígida imediata com ressecção de todo o lobo inferior esquerdo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo da PAC Sobreposta à Exacerbação de Asma:\n\n1. Interação Fisiopatológica Frequente:\n   - Infecções respiratórias são o principal gatilho de crises de asma na infância;\n   - Embora a maioria das exacerbações seja desencadeada por vírus, a ocorrência de pneumonia bacteriana verdadeira sobreposta pode precipitar exacerbações graves refratárias ao tratamento broncodilatador isolado;\n\n2. Diferenciação entre Atelectasia Transitória e PAC Verdadeira:\n   - No asmático em crise, rolhas de muco espesso podem ocluir brônquios e gerar atelectasias segmentares (especialmente no lobo médio direito);\n   - Porém, a presença de febre alta persistente, toxemia sistêmica, dor pleurítica focal e consolidação com broncograma aéreo sela o diagnóstico de pneumonia bacteriana;\n\n3. Conduta Terapêutica Simultânea Integrada:\n   - O paciente necessita de ambos os tratamentos em paralelo: antibioticoterapia bactericida (Amoxicilina em altas doses ou tratamento parenteral hospitalar se hipoxemia/desconforto mantido) SOMADA ao manejo da crise de asma (salbutamol inalatório regular + curso curto de corticoide sistêmico oral ou IV para controle da inflamação brônquica eosinofílica). O corticoide sistêmico não anula a ação do antibiótico.',
    comentariosAlternativas: {
      A: 'Correta. Integra adequadamente a antibioticoterapia bactericida para a PAC com o tratamento da crise de asma (broncodilatador e corticoide sistêmico).',
      B: 'Incorreta. Suspender corticoide e salbutamol agravará o broncoespasmo e levará a insuficiência ventilatória grave.',
      C: 'Incorreta. Há consolidação com febre alta e hipoxemia; sedativos de tosse são contraindicados na asma e na PAC.',
      D: 'Incorreta. Ressecção lobar é uma conduta cirúrgica desastrosa e mutilante para pneumonia tratável clinicamente.',
    },
  },
  {
    id: 'ped-irab-097',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumonia Recorrente na Infância: Algoritmo Diagnóstico',
    isRevisao: false,
    enunciado:
      'Uma criança de 3 anos apresenta histórico de 4 episódios confirmados de pneumonia bacteriana nos últimos 12 meses, acometendo lobos pulmonares diferentes em cada episódio, além de história de diarreia crônica com fezes volumosas e esteatorreicas, baixo ganho ponderoestatural (peso no escore Z < -3) e um episódio de desidratação hiponatrêmica prévio no verão. Qual exame diagnóstico prioritário deve ser realizado para esclarecer a etiologia subjacente dessa condição crônica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Teste do Suor quantitativo com dosagem de cloreto por iontoforese com pilocarpina para investigação de Fibrose Cística.',
      },
      {
        id: 'B',
        texto:
          'Cintilografia de esvaziamento esofágico com sulfato de bário concentrado em decúbito de Trendelenburg.',
      },
      {
        id: 'C',
        texto:
          'Biópsia retal cirúrgica ampla para pesquisa de parasitas helmínticos intestinais.',
      },
      {
        id: 'D',
        texto:
          'Ressonância magnética de articulações temporomandibulares em jejum.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Investigação de Pneumonia Recorrente em Diferentes Lobos: Fibrose Cística:\n\n1. Definição de Pneumonia Recorrente:\n   - Ocorrência de >= 2 episódios de pneumonia em 1 ano OU >= 3 episódios na vida, com resolução radiológica completa entre os episódios;\n\n2. Padrão Difuso / Multifocal (Diferentes Topografias):\n   - Quando as pneumonias afetam lobos pulmonares alternados, as principais causas são sistêmicas:\n     * 1. Fibrose Cística (doença autossômica recessiva do canal CFTR);\n     * 2. Erros Inatos da Imunidade / Imunodeficiências Primárias (agaglobulinaemia, imunodeficiência comum variável, defeitos de fagócitos);\n     * 3. Doença do Refluxo Gastroesofágico grave com microaspirações recorrentes;\n     * 4. Discinesia Ciliar Primária;\n\n3. Tríade Clássica da Fibrose Cística na Questão:\n   - Doença pulmonar supurativa crônica e recorrente;\n   - Má absorção intestinal com esteatorreia e desnutrição crônica;\n   - Perda excessiva de sal no suor com desidratação hipoclorêmica/hiponatrêmica;\n   - Teste diagnóstico padrão-ouro: Teste do Suor quantitativo (positivo se cloro no suor >= 60 mEq/L em duas dosagens).',
    comentariosAlternativas: {
      A: 'Correta. A associação de pneumonias de repetição multifocais, esteatorreia, desnutrição e desidratação hiponatrêmica é a apresentação clássica de Fibrose Cística, investigada pelo teste do suor.',
      B: 'Incorreta. DRGE pode causar aspiração, mas não explica esteatorreia volumosa e perda de sal no verão como a fibrose cística.',
      C: 'Incorreta. Biópsia retal serve para investigar aganglionose (doença de Hirschsprung), que cursa com constipação e não esteatorreia com pneumonias de repetição.',
      D: 'Incorreta. RM de ATM não tem qualquer aplicabilidade na investigação de pneumonias de repetição.',
    },
  },
  {
    id: 'ped-irab-098',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Pneumonia Estafilocócica em Neonatos e Lactentes Jovens',
    isRevisao: false,
    enunciado:
      'Lactente de 35 dias de vida, previamente hígido, inicia subitamente com gemência, palidez cutânea e recusa das mamadas há 24 horas. Ao exame físico na UTI Pediátrica: criança em choque séptico, taquipneica grave (FR = 72 irpm), tempo de enchimento capilar de 4 segundos e presença de lesões pustulosas cutâneas periumbilicais discretas. A radiografia de tórax evidencia volumosa área de condensação com múltiplas pneumatoceles e pneumotórax sob tensão à direita. Qual é a hipótese etiológica bacteriana primordial e o esquema antimicrobiano parenteral intravenoso de urgência mais indicado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Pneumonia estafilocócica grave (Staphylococcus aureus) associada a foco cutâneo; iniciar Oxacilina intravenosa associada a Amicacina ou Cefotaxima (ou Vancomicina IV se suspeita de CA-MRSA), além de drenagem torácica imediata do pneumotórax.',
      },
      {
        id: 'B',
        texto:
          'Pneumonia atípica por Mycoplasma pneumoniae tratada com eritromicina tópica na pele.',
      },
      {
        id: 'C',
        texto:
          'Bronquiolite viral aguda clássica tratada exclusivamente com soro glicosado oral.',
      },
      {
        id: 'D',
        texto:
          'Tuberculose primária congênita com indicação de rifampicina em aerossol.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Pneumonia Estafilocócica Grave no Lactente Jovem:\n\n1. Apresentação e Gravidade Extrema:\n   - O Staphylococcus aureus é uma causa devastadora de pneumonia em lactentes jovens e neonatos;\n   - Apresenta-se com curso agudo e fulminante, rápida evolução para sepse grave, choque e insuficiência respiratória;\n   - Frequentemente associado a porta de entrada cutânea (onfalite, pústulas periumbilicais, piodermite);\n\n2. Achados Radiológicos Patognomônicos:\n   - Consolidação parenquimatosa rápida e destrutiva;\n   - Pneumatoceles múltiplas de surgimento precoce;\n   - Rápida progressão para pneumotórax ou piopneumotórax sob tensão devido à rotura de pneumatoceles subpleurais friáveis;\n\n3. Conduta de Emergência:\n   - Drenagem torácica imediata se houver pneumotórax sob tensão ou empiema;\n   - Ressuscitação volêmica do choque séptico;\n   - Antibioticoterapia parenteral imediata cobrindo S. aureus (Oxacilina ou Vancomicina se alto risco de MRSA) associada a cobertura para bacilos Gram-negativos neonatais (Cefotaxima ou Amicacina).',
    comentariosAlternativas: {
      A: 'Correta. Identifica com perfeição o S. aureus como agente da pneumonia destrutiva com pneumatoceles e pneumotórax, associando drenagem e antibioticoterapia parenteral adequada.',
      B: 'Incorreta. Mycoplasma é raríssimo em neonatos e não cursa com choque fulminante e pneumotórax hipertensivo.',
      C: 'Incorreta. Choque séptico com pneumotórax sob tensão não é bronquiolite viral.',
      D: 'Incorreta. Tuberculose congênita tem evolução subaguda com hepatosplenomegalia e não forma pneumatoceles agudas com choque em 24 horas.',
    },
  },
  {
    id: 'ped-irab-099',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Prevenção da PAC na Infância: Vacinas e Medidas de Saúde Pública',
    isRevisao: false,
    enunciado:
      'A redução global da morbimortalidade infantil por pneumonia adquirida na comunidade nas últimas décadas decorre primariamente de intervenções preventivas bem estabelecidas. Qual conjunto de medidas representa as intervenções com maior nível de evidência científica para prevenir a PAC na infância?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Aleitamento materno exclusivo nos primeiros 6 meses de vida, eliminação do tabagismo passivo domiciliar, e imunização sistemática com as vacinas Pneumocócica Conjugada (VPC10/VPC13/VPC15), Pentavalente (anti-Haemophilus influenzae b) e Influenza anual.',
      },
      {
        id: 'B',
        texto:
          'Administração profilática diária de amoxicilina oral durante todo o inverno para todas as crianças que frequentam creche.',
      },
      {
        id: 'C',
        texto:
          'Nebulização diária com água oxigenada e uso de esteroides anabolizantes intramusculares mensais.',
      },
      {
        id: 'D',
        texto:
          'Substituição do leite materno por fórmulas hiperproteicas ultraprocessadas desde a primeira hora de vida.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Medidas Preventivas com Máximo Nível de Evidência contra Pneumonia Infantil:\n\n1. Imunização Específica (PNI / OMS):\n   - Vacina Pneumocócica Conjugada (VPC): reduziu drasticamente as taxas de pneumonia invasiva consolidativa, hospitalizações e empiema pleural causados por Streptococcus pneumoniae;\n   - Vacina contra Haemophilus influenzae tipo b (Hib - contida na Pentavalente): praticamente eliminou as pneumonias bacterêmicas fulminantes por Hib em lactentes;\n   - Vacina Influenza Anual: previne infecções pelo vírus influenza e subsequente pneumonia bacteriana secundária;\n   - Vacina contra Sarampo e Coqueluche;\n\n2. Intervenções Nutricionais e Ambientais:\n   - Aleitamento Materno Exclusivo até os 6 meses: transfere anticorpos IgA secretores específicos, lactoferrina e oligossacarídeos do leite humano que bloqueiam a adesão bacteriana no epitélio respiratório;\n   - Combate ao Tabagismo Passivo: o fumo ambiental paralisa os cílios brônquicos, hipertrofia glândulas mucosas e induz imunodepressão alveolar local, aumentando em até 3 vezes o risco de pneumonias graves.',
    comentariosAlternativas: {
      A: 'Correta. Cita com exatidão as intervenções com comprovação científica máxima: aleitamento materno, ambiente livre de fumaça e vacinação pneumocócica, Hib e influenza.',
      B: 'Incorreta. Profilaxia diária com amoxicilina não previne pneumonias, seleciona superbactérias resistentes e destrói o microbioma intestinal.',
      C: 'Incorreta. Nebulizar água oxigenada lesa gravemente o epitélio brônquico e anabolizantes são contraindicados.',
      D: 'Incorreta. Substituir o leite materno priva a criança de imunoglobulinas maternas essenciais e eleva a mortalidade respiratória infantil.',
    },
  },
  {
    id: 'ped-irab-100',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecções Respiratórias Inferiores',
    subtema: 'Caso Integrador Final: Diagnóstico Diferencial nas IRAs Baixas Pediátricas',
    isRevisao: false,
    enunciado:
      'Na enfermaria de um hospital pediátrico de referência, o médico rotineiro avalia quatro leitos na enfermaria respiratória com diferentes apresentações de Infecção Respiratória Aguda Baixa:\n- Leito 1: Lactente de 3 meses com primeiro episódio de coriza, febre baixa, taquipneia, tiragem subcostal, tempo expiratório prolongado e sibilos bilaterais difusos, com raio-X mostrando hiperinsuflação e retificação costal;\n- Leito 2: Pré-escolar de 3 anos com tosse produtiva, febre alta persistente (39,5 °C) há 3 dias, gemência, estertores crepitantes tele-expiratórios em terço inferior direito e consolidação lobar com broncograma aéreo;\n- Leito 3: Escolar de 10 anos com tosse seca persistente e irritativa há 3 semanas, febrícula, bom estado geral, odinofagia prévia, ausculta com estertores bilaterais e raio-X com infiltrado intersticial difuso assimétrico;\n- Leito 4: Pré-escolar de 2 anos previamente sadio que apresentou tosse e engasgo súbitos enquanto comia castanhas de caju, evoluindo com sibilância localizada fixa estritamente em hemitórax direito, refratária a 3 nebulizações com salbutamol.\n\nQual é a sequência diagnóstica exata e a conduta preconizada para cada um dos quatro pacientes?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Leito 1: Bronquiolite Viral Aguda (suporte com oxigênio se SpO2 < 90-92%, aspiração nasal e hidratação); Leito 2: PAC Típica bacteriana (antibioticoterapia com Penicilina Cristalina IV ou Ampicilina IV); Leito 3: Pneumonia Atípica por Mycoplasma pneumoniae (Azitromicina oral); Leito 4: Aspiração de Corpo Estranho (indicação imediata de Broncoscopia Rígida sob anestesia geral).',
      },
      {
        id: 'B',
        texto:
          'Leito 1: Fibrose cística terminal (transplante bipulmonar); Leito 2: Asma brônquica atópica pura (inalação com corticoide); Leito 3: Coqueluche maligna (exsanguinotransfusão); Leito 4: BVA tardia (salbutamol contínuo).',
      },
      {
        id: 'C',
        texto:
          'Todos os 4 leitos têm a mesma doença (Pneumonia pneumocócica resistente) e devem receber vancomicina em altas doses e drenagem torácica profilática.',
      },
      {
        id: 'D',
        texto:
          'Leito 1: Amoxicilina oral; Leito 2: Fisioterapia com tapotagem isolada sem antibióticos; Leito 3: Sedativo de tosse com codeína; Leito 4: Alta domiciliar com broncodilatador oral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Caso Clínico Integrador Final: Síntese dos 4 Grandes Pilares das IRAs Baixas Pediátricas:\n\n1. Leito 1: Bronquiolite Viral Aguda (BVA):\n   - Primeiro episódio de sibilância em menor de 2 anos precedido por pródromos virais com hiperinsuflação radiológica;\n   - Conduta baseada em evidências: SUPORTE PURO (oxigenoterapia úmida para manter SpO2 >= 90-92%, higienização nasal com SF 0,9% e hidratação/nutrição fracionada), sem sobretratamento;\n\n2. Leito 2: Pneumonia Adquirida na Comunidade (PAC Típica Bacteriana):\n   - Início agudo, febre alta, toxemia, crepitações localizadas e consolidação lobar com broncograma aéreo (Streptococcus pneumoniae);\n   - Tratamento hospitalar de primeira linha: Penicilina Cristalina IV ou Ampicilina IV;\n\n3. Leito 3: Pneumonia Atípica (Mycoplasma pneumoniae):\n   - Escolar, instalação subaguda, tosse arrastada por semanas com "dissociação clínico-radiológica" e infiltrado intersticial difuso;\n   - Tratamento de escolha: Macrolídeo oral (Azitromicina ou Claritromicina);\n\n4. Leito 4: Aspiração de Corpo Estranho (CE):\n   - História clássica de engasgo com oleaginosas (castanha), sibilância unilateral fixa e ausência de resposta a broncodilatadores;\n   - Diagnóstico e tratamento padrão-ouro: Broncoscopia Rígida sob anestesia geral.',
    comentariosAlternativas: {
      A: 'Correta. Integra com precisão cirúrgica e rigor didático as 4 grandes entidades respiratórias pediátricas e seus respectivos tratamentos baseados em evidências.',
      B: 'Incorreta. Confunde completamente os quadros clínicos clássicos e prescreve condutas inadequadas e desproporcionais.',
      C: 'Incorreta. Trata-se de 4 patologias com fisiopatologias e tratamentos inteiramente distintos, sendo descabido tratá-los de forma homogênea.',
      D: 'Incorreta. BVA não deve receber amoxicilina, PAC lobar requer antibióticos, codeína é contraindicada em crianças e corpo estranho ignorado evoluiria para destruição brônquica crônica.',
    },
  },
];


