export interface RawEstridorQuestion {
  id: string;
  grandeArea: 'Pediatria';
  especialidade: 'Pediatria';
  tema: 'IRA com Estridor';
  subtema?: string;
  isRevisao: boolean;
  enunciado: string;
  alternativas: {
    id: 'A' | 'B' | 'C' | 'D';
    texto: string;
  }[];
  respostaCorreta: 'A' | 'B' | 'C' | 'D';
  comentario: string;
  comentariosAlternativas?: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

export const QUESTOES_ESTRIDOR: RawEstridorQuestion[] = [
  {
    id: 'ped-est-001',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Etiologia e Epidemiologia do Crupe Viral',
    isRevisao: false,
    enunciado:
      'Um lactente de 18 meses é trazido ao pronto atendimento pediátrico pelos pais em uma noite de outono. Apresenta história de coriza hialina e febrícula (37,8 °C) há 2 dias, evoluindo há cerca de 12 horas com tosse ladrante ("tosse de cachorro"), rouquidão evidente e ruído respiratório inspiratório rude ao chorar. Ao exame: bom estado geral quando calmo, corado, hidratado, afebril no momento, FR = 30 irpm, SpO2 = 98% em ar ambiente; ausência de estridor quando tranquilo no colo materno, surgindo estridor apenas durante a agitação do choro, sem tiragens. Considerando a fisiopatologia e a microbiologia da Laringotraqueobronquite Viral Aguda (Crupe Viral), qual é o principal agente etiológico responsável por mais de 70% a 80% dos casos dessa síndrome?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Vírus Parainfluenza (especialmente os tipos 1 e 2).',
      },
      {
        id: 'B',
        texto:
          'Haemophilus influenzae tipo b (Hib).',
      },
      {
        id: 'C',
        texto:
          'Staphylococcus aureus resistente à meticilina (MRSA).',
      },
      {
        id: 'D',
        texto:
          'Streptococcus pneumoniae sorotipo 19A.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Etiologia e Epidemiologia do Crupe Viral (Laringotraqueobronquite Aguda):\n\n1. Agente Primordial:\n   - Os Vírus Parainfluenza Humanos (especialmente o Parainfluenza tipo 1, responsável pelos surtos bienais de outono/inverno, seguido pelo Parainfluenza tipo 2 e tipo 3) respondem por mais de 70% a 80% dos casos clínicos de laringotraqueíte viral aguda;\n   - Outros agentes virais menos comuns: Vírus Sincicial Respiratório (VSR), Adenovírus, Rinovírus, Coronavírus e Vírus Influenza A e B;\n\n2. Faixa Etária Típica:\n   - Ocorre tipicamente entre 6 meses e 3 anos de idade, com pico de incidência no segundo ano de vida (em torno de 18 a 24 meses);\n   - Motivo da vulnerabilidade: a cartilagem cricoide forma um anel cartilaginoso completo rígido e não expansível. Nessa faixa etária, a região subglótica tem apenas 4 a 5 mm de diâmetro; míseros 1 mm de edema na mucosa subglótica reduzem a área de secção transversa da via aérea em mais de 50% a 65%, elevando drasticamente a resistência inspiratória ao fluxo aéreo (Lei de Poiseuille).',
    comentariosAlternativas: {
      A: 'Correta. O vírus Parainfluenza (tipos 1 e 2) é o agente causal de mais de 70-80% dos casos de crupe viral.',
      B: 'Incorreta. Haemophilus influenzae b é a clássica causa bacteriana de Epiglotite Aguda, que cursa com toxemia fulminante, febre alta e sialorreia.',
      C: 'Incorreta. S. aureus é o principal agente da Traqueíte Bacteriana, complicação purulenta com secreção espessa e toxemia.',
      D: 'Incorreta. Pneumococo é o principal agente da pneumonia adquirida na comunidade típica, não de laringite subglótica viral.',
    },
  },
  {
    id: 'ped-est-002',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Tríade Clínica Clássica do Crupe Viral',
    isRevisao: false,
    enunciado:
      'Na prática pediátrica ambulatorial e de urgência, a laringite viral aguda (crupe) apresenta uma sequência propedêutica e um conjunto de sinais clínicos altamente característicos. Qual é a tríade sintomática clássica patognomônica que define a presença de obstrução inflamatória laríngea/subglótica no crupe viral após os pródromos catarrais?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tosse ladrante (metálica ou "tosse de cachorro"), rouquidão (disfonia) e estridor predominantemente inspiratório.',
      },
      {
        id: 'B',
        texto:
          'Tosse produtiva purulenta, estertores crepitantes tele-expiratórios e dor pleurítica reflexa.',
      },
      {
        id: 'C',
        texto:
          'Sibilos expiratórios difusos bilaterais, prolongamento do tempo expiratório e vômitos pós-prandiais.',
      },
      {
        id: 'D',
        texto:
          'Disfagia grave, sialorreia constante e postura obrigatória em tripé com hiperextensão cervical.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Tríade Clássica do Crupe Viral:\n\n1. Componentes da Tríade Subglótica:\n   - 1. Tosse Ladrante (*barking cough*): tosse metálica, seca, semelhante ao latido de um cão ou foca, resultante da vibração do ar forçado através das pregas vocais e da subglote edemaciadas e estreitadas;\n   - 2. Rouquidão / Disfonia: causada pelo edema e inflamação direta das cordas vocais verdadeiras e falsas (laringe);\n   - 3. Estridor Inspiratório: ruído respiratório áspero e rude de alta frequência gerado pela passagem turbulenta de ar durante a inspiração através da região subglótica colapsável colabada pela pressão intratorácica negativa;\n\n2. Evolução Típica:\n   - Inicia-se com pródromos de vias aéreas superiores (coriza, obstrução nasal, febre baixa) durante 24 a 48 horas, com posterior instalação da tríade laríngea, classicamente com piora noturna.',
    comentariosAlternativas: {
      A: 'Correta. Tosse ladrante, rouquidão e estridor inspiratório compõem a tríade clínica clássica consagrada do crupe.',
      B: 'Incorreta. Estertores crepitantes e dor pleurítica são achados de consolidação alveolar na pneumonia, não de laringite.',
      C: 'Incorreta. Sibilos difusos e tempo expiratório prolongado indicam obstrução bronquiolar baixa (como na bronquiolite ou asma).',
      D: 'Incorreta. Disfagia, sialorreia e posição em tripé compõem a apresentação clássica da epiglotite aguda bacteriana.',
    },
  },
  {
    id: 'ped-est-003',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Anatomia e Fisiopatologia do Estridor na Infância',
    isRevisao: false,
    enunciado:
      'Em relação à fisiopatologia do fluxo aéreo nas vias respiratórias pediátricas, por que o estridor característico da laringite subglótica ocorre de maneira marcadamente INSPIRATÓRIA, enquanto os sibilos brônquicos ocorrem predominantemente na EXPIRAÇÃO?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Porque a subglote é uma via aérea extratorácica; durante a inspiração, a pressão intraluminal torna-se mais negativa que a pressão atmosférica circundante, colapsando fisiologicamente a via aérea edemaciada e gerando turbulência acústica.',
      },
      {
        id: 'B',
        texto:
          'Porque o diafragma paralisa durante a expiração e impede a passagem de ar através da laringe.',
      },
      {
        id: 'C',
        texto:
          'Porque as pregas vocais fecham-se ativamente por tétano reflexo a cada expiração normal da criança.',
      },
      {
        id: 'D',
        texto:
          'Porque a região subglótica é intratorácica e sofre compressão direta pela expansão dos arcos costais anteriores.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Dinâmica do Fluxo Aéreo: Via Extratorácica vs Intratorácica:\n\n1. Via Aérea Extratorácica (Laringe e Traqueia Cervical / Subglote):\n   - Durante a INSPIRAÇÃO: a contração diafragmática gera pressão negativa dentro do tórax e na luz da via aérea para puxar o ar para dentro. A pressão externa circundante (atmosférica e tecidual cervical) torna-se maior que a pressão intraluminal. Essa diferença de pressão tende a COLAPSAR e estreitar a via aérea extratorácica flexível edemaciada, produzindo o som turbulento inspiratório: o ESTRIDOR INSPIRATÓRIO;\n   - Durante a EXPIRAÇÃO: a pressão positiva gerada pelos pulmões tende a abrir e dilatar a via aérea extratorácica;\n\n2. Via Aérea Intratorácica (Brônquios e Bronquíolos):\n   - Durante a EXPIRAÇÃO: a pressão pleural positiva comprime as paredes brônquicas, acentuando o estreitamento e gerando SIBILOS EXPIRATÓRIOS;\n\n3. Estridor Bifásico (Inspiratório e Expiratório):\n   - Ocorre quando a estenose mecânica subglótica é fixa, rígida ou extremamente crítica, impedindo o fluxo mesmo na fase dilatadora da via aérea.',
    comentariosAlternativas: {
      A: 'Correta. Explica com perfeita precisão a mecânica respiratória da via extratorácica: pressão intraluminal negativa na inspiração colapsa a subglote edemaciada.',
      B: 'Incorreta. O diafragma relaxa na expiração fisiológica normal sem paralisia.',
      C: 'Incorreta. As pregas vocais abrem-se na inspiração e fecham-se apenas na fonação ou tosse.',
      D: 'Incorreta. A laringe e a subglote situam-se no pescoço, sendo estruturas extratorácicas.',
    },
  },
  {
    id: 'ped-est-004',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Escore de Westley e Classificação de Gravidade do Crupe',
    isRevisao: false,
    enunciado:
      'O Escore de Westley é a ferramenta clínica mais amplamente validada internacionalmente para estratificar a gravidade do Crupe Viral e guiar intervenções terapêuticas imediatas. Quais variáveis clínicas compõem os parâmetros avaliados pelo Escore de Westley?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Estridor inspiratório, tiragens/retrações da parede torácica, entrada de ar (murmúrio vesicular), cianose e nível de consciência.',
      },
      {
        id: 'B',
        texto:
          'Contagem de leucócitos totais, diâmetro da cricoide em milímetros e dosagem de procalcitonina sérica.',
      },
      {
        id: 'C',
        texto:
          'Temperatura retal, intensidade do choro em decibéis e quantidade de coriza nasal em gramas.',
      },
      {
        id: 'D',
        texto:
          'Volume do baço à palpação, presença de sopro cardíaco e número de evacuações nas últimas 24 horas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Parâmetros do Escore de Westley para Crupe:\n\n1. As Cinco Variáveis do Escore de Westley:\n   - 1. Estridor: 0 (nenhum), 1 (apenas com agitação/choro), 2 (em repouso);\n   - 2. Retrações Torácicas (Tiragens): 0 (nenhuma), 1 (leve), 2 (moderada), 3 (grave com retração de fúrcula e batimento de asa nasal);\n   - 3. Entrada de Ar (Murmúrio Vesicular): 0 (normal), 1 (reduzida), 2 (marcadamente reduzida);\n   - 4. Cianose: 0 (nenhuma), 4 (com agitação), 5 (em repouso);\n   - 5. Nível de Consciência: 0 (normal), 5 (alterado: agitação extrema, sonolência ou letargia);\n\n2. Estratificação de Gravidade:\n   - Crupe Leve: pontuação total <= 2 (tosse ladrante presente, sem estridor em repouso);\n   - Crupe Moderado: pontuação total 3 a 7 (estridor em repouso evidente, tiragens leves/moderadas);\n   - Crupe Grave: pontuação total 8 a 11 (estridor marcante em repouso, tiragens acentuadas com retração de fúrcula, entrada de ar diminuída, agitação);\n   - Insuficiência Respiratória Iminente: pontuação >= 12 (letargia, cianose, exaustão ventilatória).',
    comentariosAlternativas: {
      A: 'Correta. Cita perfeitamente as 5 variáveis clínicas consagradas que compõem o Escore de Westley.',
      B: 'Incorreta. O Escore de Westley é estritamente clínico e não utiliza exames laboratoriais ou medidas milimétricas radiológicas.',
      C: 'Incorreta. Febre e decibéis de choro não fazem parte do cálculo do escore.',
      D: 'Incorreta. Variáveis abdominais e cardiológicas não compõem a escala de gravidade da laringite.',
    },
  },
  {
    id: 'ped-est-005',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Achado Radiológico Típico: Sinal da Torre de Igreja',
    isRevisao: false,
    enunciado:
      'Um menino de 2 anos com quadro de tosse ladrante e rouquidão há 24 horas realiza radiografia simples da região cervical em incidência anteroposterior (AP) no pronto-socorro. O laudo radiológico descreve: "afilamento simétrico e afunilado da coluna aérea subglótica em direção à laringe, com perda dos ombros traqueais laterais normais". Qual é a denominação semiológica clássica desse sinal radiológico e qual sua correlação anatomopatológica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sinal da torre de igreja (ou sinal da ponta de lápis / sinal da ogiva), decorrente do edema inflamatório simétrico da mucosa subglótica.',
      },
      {
        id: 'B',
        texto:
          'Sinal do polegar, decorrente do edema inflamatório da epiglote visualizado na incidência lateral.',
      },
      {
        id: 'C',
        texto:
          'Sinal do duplo halo, decorrente da aspiração de corpo estranho metálico esférico.',
      },
      {
        id: 'D',
        texto:
          'Sinal da vela de barco, decorrente da hipertrofia tímica fisiológica no hemitórax anterior.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Achados Radiológicos no Crupe Viral (Sinal da Torre de Igreja):\n\n1. Aspecto Radiológico:\n   - Incidência AP do Pescoço / Vias Aéreas Superiores;\n   - Em condições normais, a subglote forma ângulos retos bem definidos chamados "ombros subglóticos";\n   - No crupe, o edema e inflamação da mucosa abaixo das cordas vocais obliteram esses recessos laterais, conferindo um estreitamento afunilado simétrico em direção cranial, assemelhando-se à torre pontiaguda de uma igreja medieval (sinal da torre de igreja - *steeple sign*), à ponta de um lápis apontado ou a uma ogiva gótica;\n\n2. Papel Clínico da Radiografia:\n   - O diagnóstico do crupe é EMINENTEMENTE CLÍNICO. A radiografia de vias aéreas superiores NÃO É NECESSÁRIA na grande maioria dos casos típicos;\n   - Deve ser reservada para quadros atípicos, dúvidas diagnósticas ou suspeita de corpo estranho ou infecção bacteriana invasiva (como traqueíte ou abscesso retrofaríngeo).',
    comentariosAlternativas: {
      A: 'Correta. O sinal da torre de igreja (ou ponta de lápis) na incidência AP é o estigma radiológico clássico do afunilamento subglótico no crupe.',
      B: 'Incorreta. O sinal do polegar é observado na incidência LATERAL do pescoço na epiglotite aguda bacteriana.',
      C: 'Incorreta. Sinal do duplo halo é típico de baterias de botão radiopacas impactadas.',
      D: 'Incorreta. Sinal da vela tímica é um achado normal do timo em radiografias de tórax de lactentes.',
    },
  },
  {
    id: 'ped-est-006',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Corticoterapia no Crupe: Papel da Dexametasona',
    isRevisao: false,
    enunciado:
      'Uma menina de 15 meses é trazida ao posto de saúde com tosse ladrante há 1 dia. Ao exame: ativa, corada, hidratada, eupneica; não apresenta estridor em repouso nem tiragens, surgindo apenas discreto ruído com tosse rouca quando chora (Crupe Leve, Westley = 1). Em relação à prescrição de corticoide para esta paciente, o que estabelecem os principais consensos e revisões sistemáticas de alta evidência (Cochrane / AAP / SBP)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A Dexametasona em dose única por via oral (0,15 mg/kg a 0,6 mg/kg) está formalmente indicada para todos os pacientes com crupe, inclusive nos casos leves, pois reduz o tempo de sintomas, previne a progressão para formas graves, reduz retorno ao pronto-socorro e minimiza hospitalizações.',
      },
      {
        id: 'B',
        texto:
          'O corticoide está estritamente contraindicado no crupe leve, devendo ser reservado exclusivamente para pacientes intubados em choque séptico.',
      },
      {
        id: 'C',
        texto:
          'Deve-se prescrever prednisona oral contínua por 30 dias associada a injeções diárias de hormônio do crescimento.',
      },
      {
        id: 'D',
        texto:
          'Corticoides só devem ser administrados se houver leucocitose superior a 25.000/mm³ com bastonetes.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Corticoterapia Baseada em Evidências no Crupe Viral:\n\n1. Indicação Universal (Inclusive Crupe Leve):\n   - Ensaios clínicos randomizados e a metanálise Cochrane demonstraram de forma inequívoca que o uso de corticoide em DOSE ÚNICA beneficia até mesmo crianças com crupe classificado como leve;\n   - Benefícios comprovados: encurta a duração da tosse e do desconforto, reduz a taxa de retorno não programado ao serviço de emergência, reduz a necessidade de nebulizações com adrenalina e diminui hospitalizações em mais de 80%;\n\n2. Fármaco e Posologia de Escolha:\n   - DEXAMETASONA por VIA ORAL:\n     * Dose clássica: 0,6 mg/kg (dose máxima de 10 a 16 mg);\n     * Evidências modernas demonstraram que doses menores (0,15 mg/kg ou 0,3 mg/kg) possuem eficácia clínica equivalente à dose de 0,6 mg/kg no crupe leve a moderado;\n     * Possui meia-vida biológica prolongada (36 a 72 horas), cobrindo exatamente o período de pico do edema viral subglótico com uma única tomada;\n   - Alternativa se vômitos incoercíveis: Dexametasona intramuscular/endovenosa ou Budesonida inalatória (2 mg em nebulização).',
    comentariosAlternativas: {
      A: 'Correta. A administração de dexametasona em dose única é a conduta padrão universal recomendada para todas as gravidades de crupe, inclusive nos quadros leves.',
      B: 'Incorreta. O corticoide é o pilar terapêutico do crupe e seu uso precoce evita exatamente a piora e a necessidade de internação.',
      C: 'Incorreta. O tratamento é em dose única; cursos prolongados de 30 dias não têm qualquer indicação e trariam paraefeitos metabólicos.',
      D: 'Incorreta. O crupe é doença viral autolimitada; o corticoide é indicado pelo quadro clínico laríngeo e não por contagem leucocitária.',
    },
  },
  {
    id: 'ped-est-007',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Nebulização com Adrenalina: Mecanismo de Ação e Efeito Rebote',
    isRevisao: false,
    enunciado:
      'Um menino de 2 anos e meio chega à UPA na madrugada com tosse ladrante violenta, rouquidão, choro rouco e estridor inspiratório rude nitidamente audível em repouso no colo da mãe. Ao exame: frequência respiratória de 46 irpm, tiragem subcostal moderada, retração evidente da fúrcula esternal e batimento de asa nasal; SpO2 = 92% em ar ambiente (Crupe Moderado a Grave). O médico assistente administra Dexametasona e prescreve imediatamente nebulização com Adrenalina (epinefrina). Em relação à nebulização com adrenalina no crupe, qual é o seu mecanismo de ação farmacológico primário e qual cuidado essencial de observação clínica deve ser adotado após o procedimento?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ação agonista alfa-adrenérgica promovendo rápida vasoconstrição das arteríolas da mucosa subglótica com redução imediata do edema; exige observação clínica obrigatória no pronto atendimento por pelo menos 2 a 4 horas devido ao risco de "efeito rebote" com recrudescimento da obstrução.',
      },
      {
        id: 'B',
        texto:
          'Ação parassimpaticomimética que dilata as glândulas salivares; alta hospitalar imediata em 5 minutos após o término da inalação.',
      },
      {
        id: 'C',
        texto:
          'Ação antimicrobiana bactericida contra o vírus Parainfluenza por oxidação do capsídeo viral; dispensa qualquer observação.',
      },
      {
        id: 'D',
        texto:
          'Ação sedativa no centro respiratório bulbar para diminuir a frequência ventilatória da criança.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Nebulização com Adrenalina (Epinefrina) no Crupe:\n\n1. Indicação Precisa:\n   - Pacientes com crupe moderado a grave apresentando ESTRIDOR INSPIRATÓRIO EM REPOUSO e/ou sinais de desconforto respiratório (tiragens, retrações);\n\n2. Mecanismo de Ação Alfa-adrenérgico:\n   - A adrenalina atua predominantemente nos receptores alfa-1 adrenérgicos do leito vascular da mucosa das vias aéreas superiores, promovendo rápida vasoconstrição arteriolar capilar;\n   - Essa vasoconstrição reduz transitoriamente a pressão hidrostática intravascular local, diminuindo o extravasamento plasmático e desidratando/reduzindo o edema subglótico de forma espetacular em 10 a 30 minutos;\n\n3. Posologia:\n   - Adrenalina comum 1:1.000 (L-epinefrina): 0,5 mL/kg (máximo de 5 mL), administrada pura ou diluída em soro fisiológico em nebulização contínua com oxigênio;\n\n4. O Fenômeno do "Efeito Rebote" e Período de Observação:\n   - A duração de ação da adrenalina é fugaz, durando cerca de 1 a 2 horas;\n   - À medida que o efeito vasoconstritor desaparece, a vasodilatação reacional reflexa associada ao edema inflamatório de base (que ainda não foi totalmente debelado pelo corticoide) pode provocar retorno dos sintomas obstrutivos e do estridor;\n   - Por essa razão, a criança DEVE OBRIGATORIAMENTE PERMANECER EM OBSERVAÇÃO CLÍNICA NO PRONTO-SOCORRO POR NO MÍNIMO 2 A 4 HORAS antes de se considerar a alta hospitalar com segurança.',
    comentariosAlternativas: {
      A: 'Correta. Sintetiza magistralmente a ação vasoconstritora alfa-1 adrenérgica e a regra clínica indispensável das 2 a 4 horas de observação por risco de efeito rebote.',
      B: 'Incorreta. Adrenalina é simpatomimética, não parassimpática, e liberar o paciente em 5 minutos é negligência grave pelo risco de rebote súbito em domicílio.',
      C: 'Incorreta. Adrenalina é catecolamina vasoativa sintomática, não possui propriedades viricidas.',
      D: 'Incorreta. Adrenalina estimula o sistema simpático e não é sedativo respiratório.',
    },
  },
  {
    id: 'ped-est-008',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Crupe Espasmódico / Laringite Estridulosa: Características Diferenciais',
    isRevisao: false,
    enunciado:
      'Uma menina de 2 anos e meio acorda subitamente às 2 horas da madrugada aos prantos, com tosse ladrante metálica e estridor inspiratório vigoroso. Os pais afirmam que a criança foi dormir perfeitamente saudável, sem coriza, sem febre e sem nenhum sintoma respiratório prévio durante o dia. Ao colocarem a criança no carro com a janela aberta no ar frio da madrugada a caminho do hospital, os pais notaram melhora surpreendente dos sintomas. Ao chegar ao pronto atendimento, a paciente está afebril, calma, quase sem estridor e brincando no colo materno. O pediatra recorda que a mãe é asmática e que a criança já teve um episódio idêntico há 4 meses que desapareceu rapidamente. Qual é a principal hipótese diagnóstica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Crupe Espasmódico (Laringite Estridulosa ou Falso Crupe).',
      },
      {
        id: 'B',
        texto:
          'Epiglotite Aguda Bacteriana invasiva por Haemophilus influenzae.',
      },
      {
        id: 'C',
        texto:
          'Traqueíte bacteriana necrosante purulenta por Staphylococcus aureus.',
      },
      {
        id: 'D',
        texto:
          'Flegmão periamigdaliano com tromboflebite da veia jugular (Síndrome de Lemierre).',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Crupe Espasmódico (Laringite Estridulosa / Falso Crupe):\n\n1. Perfil Clínico Paradigmático:\n   - Despertar súbito no meio da noite (frequentemente entre meia-noite e 3h) com tosse ladrante metálica, rouquidão e estridor;\n   - AUSÊNCIA de pródromos catarrais infecciosos (sem coriza e sem febre);\n   - A criança deita-se bem e acorda abruptamente em crise de estridor;\n   - História pessoal ou familiar de atopia/alergia (asma, rinite, dermatite atópica);\n   - Caráter recidivante/recorrente ("crianças que têm crupe repetidas vezes a cada mudança climática");\n\n2. Melhora Típica com Ar Frio ou Vapor Úmido:\n   - A exposição ao ar frio da noite ou ao vapor de chuveiro quente acalma o laringoespasmo e alivia os sintomas rapidamente;\n\n3. Fisiopatologia e Manejo:\n   - Decorre de laringoespasmo súbito e edema não inflamatório transitório da mucosa subglótica, possivelmente associado a hiper-reatividade brônquica ou refluxo gastroesofágico;\n   - O manejo no momento da crise também pode se beneficiar de uma dose única de Dexametasona oral e tranquilização da família.',
    comentariosAlternativas: {
      A: 'Correta. Início súbito noturno sem febre ou pródromos, melhora rápida com ar fresco e episódios prévios recorrentes caracterizam o crupe espasmódico.',
      B: 'Incorreta. Epiglotite cursa com toxemia extrema, febre alta contínua, dor de garganta intensa e postura em tripé, sem melhora espontânea no carro.',
      C: 'Incorreta. Traqueíte bacteriana evolui com febre alta persistente, piora progressiva e secreção mucopurulenta espessa.',
      D: 'Incorreta. Abscesso periamigdaliano causa trismo, desvio de úvula e febre alta, sendo típico de adolescentes e crianças maiores.',
    },
  },
  {
    id: 'ped-est-009',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Critérios de Alta vs Internação Hospitalar no Crupe',
    isRevisao: false,
    enunciado:
      'Um menino de 20 meses com crupe moderado recebeu Dexametasona oral (0,6 mg/kg) e completou uma nebulização com Adrenalina há 3 horas. Na reavaliação atual pelo médico no pronto-socorro, a criança está afebril, corada, sem estridor em repouso, sem tiragens ou retrações torácicas, saturando 98% em ar ambiente, ativa e ingerindo líquidos por via oral sem dificuldades. Os pais são esclarecidos e residem a 5 minutos do hospital. Qual é a conduta médica mais adequada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Alta hospitalar segura com orientações formais sobre sinais de alarme e retorno imediato se houver reaparecimento do estridor em repouso, visto que completou período de observação seguro (> 2 a 3 horas) sem efeito rebote.',
      },
      {
        id: 'B',
        texto:
          'Internação compulsória em UTI pediátrica por 7 dias com intubação traqueal profilática.',
      },
      {
        id: 'C',
        texto:
          'Prescrição de antibiótico oral de amplo espectro (amoxicilina com clavulanato) e realização de tomografia de crânio.',
      },
      {
        id: 'D',
        texto:
          'Administração de mais 4 nebulizações consecutivas de adrenalina preventiva e lavagem gástrica com carvão ativado.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Critérios de Alta Segura no Crupe Pós-Adrenalina:\n\n1. Parâmetros Obrigatórios para Alta Hospitalar:\n   - Ausência de estridor em repouso;\n   - Ausência de retrações torácicas e de tiragens subcostais/intercostais;\n   - Eupneico com oximetria de pulso normal em ar ambiente (SpO2 >= 94-95%);\n   - Bom estado geral, tolerando hidratação e líquidos por via oral;\n   - Cumprimento do período de observação mínimo de 2 a 4 horas após a nebulização com adrenalina (afastando efeito rebote imediato);\n   - Pais orientados e capazes de retornar rapidamente à emergência caso ocorra deterioração clínica;\n\n2. Sinais de Alarme para Retorno:\n   - Recrudescimento do ruído respiratório em repouso, esforço ventilatório, palidez, cianose, recusa de ingestão oral ou agitação intensa.',
    comentariosAlternativas: {
      A: 'Correta. Paciente estável após 3 horas de observação pó-adrenalina preenche todos os critérios para alta hospitalar segura com orientações.',
      B: 'Incorreta. A criança está sem sintomas de repouso e clinicamente bem; intubação preventiva seria iatrogênica e absurda.',
      C: 'Incorreta. Crupe é de etiologia viral e não tem indicação de antibióticos; tomografia de crânio não tem relação com o quadro.',
      D: 'Incorreta. Não se faz adrenalina profilática nem lavagem gástrica em paciente que já está clinicamente recuperado.',
    },
  },
  {
    id: 'ped-est-010',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Diagnóstico Diferencial: Epiglotite Aguda Bacteriana',
    isRevisao: false,
    enunciado:
      'Uma criança de 4 anos, sem caderneta de vacinação comprovada, é trazida com urgência extrema ao pronto atendimento. A mãe relata início há menos de 12 horas de febre alta (39,8 °C), dor de garganta severa e prostração rápida. Ao exame inicial: a criança encontra-se imóvel, com aspecto extremamente toxêmico, sentada e inclinada para a frente, com o pescoço em hiperextensão e a boca aberta com salivação constante profusa (sialorreia). Não tosse ("ausência de tosse ladrante"), respira com dificuldade extrema e emite ruído respiratório inspiratório abafado, recusando-se a deitar. Diante da forte suspeita de Epiglotite Aguda Bacteriana, qual é a conduta IMEDIATA MAIS CRÍTICA que a equipe médica deve adotar?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Não agitar ou deitar a criança, evitar procedimentos invasivos ou visualização forçada da orofaringe com abaixador de língua no leito, e mobilizar imediatamente a via aérea definitiva (intubação traqueal em ambiente cirúrgico com equipe experiente preparada para cricotireoidostomia).',
      },
      {
        id: 'B',
        texto:
          'Deitar a criança em decúbito dorsal forçado e introduzir espátula de madeira com força até a base da língua para fotografar a epiglote.',
      },
      {
        id: 'C',
        texto:
          'Encaminhar a criança sozinha para sala de radiografia para realização de esofagograma baritado.',
      },
      {
        id: 'D',
        texto:
          'Administrar sedativo intravenoso em alta dose na sala de triagem para que a criança durma e pare de babar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo de Emergência da Epiglotite Aguda Bacteriana:\n\n1. Apresentação Paradigmática (Os 4 "Ds" da Epiglotite):\n   - *Drooling* (Sialorreia/baba profusa por odinofagia insuportável);\n   - *Dysphagia* (Disfagia);\n   - *Dysphonia* (Voz abafada em "batata quente", sem tosse ladrante);\n   - *Distress* (Desconforto respiratório grave com postura em tripé);\n\n2. O Risco Mortal do Abaixador de Língua:\n   - É FORMALMENTE PROIBIDO tentar examinar a orofaringe com abaixador de língua na sala de atendimento geral!\n   - Qualquer manipulação, choro provocado ou tentativa forçada de abaixar a língua pode precipitar espasmo laríngeo reflexo ou colapso mecânico total da epiglote volumosamente edematosa em "cereja madura", gerando parada respiratória por asfixia imediata;\n\n3. Conduta Salvadora de Vidas:\n   - Manter a criança calma no colo dos pais na posição que ela preferir (postura em tripé);\n   - Suporte de oxigênio inalatório passivo (*blow-by*);\n   - Transporte imediato e calmo para centro cirúrgico ou UTI com equipe de anestesia e cirurgia pediátrica a postos para garantir VIA AÉREA CIRÚRGICA / INTUBAÇÃO com tubo traqueal de menor calibre.',
    comentariosAlternativas: {
      A: 'Correta. Evitar manipulação orofaríngea com abaixador de língua e mobilizar suporte de via aérea em ambiente seguro é a regra de ouro universal da epiglotite.',
      B: 'Incorreta. Usar abaixador de língua e forçar o decúbito causará laringoespasmo e óbito por asfixia imediata.',
      C: 'Incorreta. Criança em risco iminente de asfixia não deve ser encaminhada desacompanhada para exames radiológicos desnecessários.',
      D: 'Incorreta. Sedar a criança abolirá o esforço compensatório dos músculos dilatadores faríngeos, resultando em colapso da via aérea e parada cardiorrespiratória.',
    },
  },
  {
    id: 'ped-est-011',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Achado Radiológico da Epiglotite: Sinal do Polegar',
    isRevisao: false,
    enunciado:
      'Uma criança com quadro agudo de estridor e odinofagia é submetida a uma radiografia simples das vias aéreas superiores em incidência de perfil do pescoço. O médico radiologista identifica aumento volumétrico marcante da epiglote com aspecto arredondado e espessamento das pregas ariepiglóticas, simulando a impressão digital de um polegar na coluna de ar ("Sinal do Polegar" ou *Thumb sign*). Qual é o diagnóstico anatomopatológico indicado por esse sinal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Epiglotite aguda (supraglotite bacteriana).',
      },
      {
        id: 'B',
        texto:
          'Crupe viral subglótico benigno.',
      },
      {
        id: 'C',
        texto:
          'Laringomalácia congênita em resolução.',
      },
      {
        id: 'D',
        texto:
          'Papilomatose laríngea juvenil recidivante.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Sinal do Polegar na Epiglotite Aguda:\n\n1. Imagem Típica na Incidência de Perfil:\n   - Na radiografia cervical lateral/perfil, a epiglote normal aparece fina, delgada e afilada;\n   - Na epiglotite aguda bacteriana (supraglotite), o edema inflamatório bacteriano massivo transforma a epiglote em uma estrutura globular convexa, arredondada e espessa, projetando-se na via aérea com contornos semelhantes à extremidade distal de um dedo polegar humano (*Thumb sign*);\n   - Também se observa perda da valécula e espessamento das pregas ariepiglóticas;\n\n2. Comparação Radiológica Essencial de Provas:\n   - Sinal da Torre de Igreja (AP): Crupe Viral Subglótico;\n   - Sinal do Polegar (Perfil): Epiglotite Aguda Supraglótica.',
    comentariosAlternativas: {
      A: 'Correta. O sinal do polegar na incidência lateral é o achado radiológico patognomônico de epiglotite aguda.',
      B: 'Incorreta. O crupe viral apresenta o sinal da torre de igreja ou ponta de lápis na incidência AP.',
      C: 'Incorreta. Laringomalácia cursa com colapso dinâmico das cartilagens aritenoides à fibrobroncoscopia, não com sinal do polegar no raio-X.',
      D: 'Incorreta. Papilomatose apresenta múltiplas lesões verrucosas verrucosas exofíticas nas cordas vocais.',
    },
  },
  {
    id: 'ped-est-012',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Diagnóstico Diferencial: Traqueíte Bacteriana',
    isRevisao: false,
    enunciado:
      'Um menino de 3 anos foi diagnosticado há 4 dias com crupe viral e apresentava melhora gradual dos sintomas respiratórios. No entanto, nas últimas 18 horas voltou a apresentar febre elevada (39,5 °C), toxemia importante, piora expressiva do estridor e tosse agora produtiva com secreção purulenta espessa. O paciente não respondeu a duas nebulizações sucessivas com adrenalina e mantém estridor inspiratório e expiratório com tiragem grave. A radiografia cervical evidencia irregularidade e contornos serrilhados na parede anterior da traqueia intraluminal ("pseudomembrana traqueal"). Qual é a principal hipótese diagnóstica e a conduta imediata?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Traqueíte bacteriana (laringotraqueíte pseudomembranosa); indicar intubação traqueal em ambiente seguro para toalete/aspiração brônquica de secreções e antibioticoterapia parenteral de amplo espectro (como Ceftriaxona associada a Oxacilina ou Vancomicina).',
      },
      {
        id: 'B',
        texto:
          'Crupe espasmódico leve; liberar para casa com orientações de banho morno.',
      },
      {
        id: 'C',
        texto:
          'Estenose subglótica cicatricial congênita fixa exigindo laringectomia total imediata.',
      },
      {
        id: 'D',
        texto:
          'Paralisia histérica de pregas vocais; prescrever psicoterapia ambulatorial.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Traqueíte Bacteriana (Laringotraqueobronquite Pseudomembranosa):\n\n1. Fisiopatologia e Apresentação:\n   - Complicação bacteriana grave que comumente surge como uma sobreinfecção secundária após uma infecção viral respiratória prévia (crupe viral ou influenza);\n   - A criança parece estar melhorando do crupe quando, abruptamente, apresenta piora dramática: febre alta persistente, toxemia grave, piora do estridor (que se torna bifásico) e tosse produtiva fétida ou mucopurulenta espessa;\n   - Falha terapêutica completa à adrenalina inalatória;\n\n2. Principais Agentes Etiológicos:\n   - Staphylococcus aureus (principal patógeno, incluindo cepas MRSA);\n   - Streptococcus pneumoniae, Streptococcus pyogenes e Moraxella catarrhalis;\n\n3. Achados de Imagem e Endoscópicos:\n   - Radiografia com irregularidade da coluna aérea traqueal subglótica com placas e membranas desprendidas;\n   - À laringoscopia/broncoscopia: visualiza-se secreção purulenta espessa abundante, crostas e pseudomembranas mucosas que ocluem a luz traqueal;\n\n4. Tratamento Mandatório:\n   - A maioria dos pacientes exige INTUBAÇÃO TRAQUEAL para suporte ventilatório e aspirações frequentes das crostas mecânicas obstrutivas, somada a antibioticoterapia parenteral cobrindo S. aureus e germes comunitários (Ceftriaxona + Oxacilina ou Vancomicina).',
    comentariosAlternativas: {
      A: 'Correta. Identifica com perfeição a traqueíte bacteriana secundária, a falha à adrenalina e a necessidade de controle de via aérea e antibioticoterapia parenteral.',
      B: 'Incorreta. Crupe espasmódico não cursa com febre alta de 39,5 °C, toxemia e secreção purulenta traqueal.',
      C: 'Incorreta. Laringectomia é cirurgia oncológica mutilante incompatível com o tratamento de infecção aguda de via aérea na criança.',
      D: 'Incorreta. Trata-se de infecção supurativa bacteriana aguda de alto risco de asfixia, não de condição psicogênica.',
    },
  },
  {
    id: 'ped-est-013',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Abscesso Retrofaríngeo: Quadro Clínico e Idade Prevalente',
    isRevisao: false,
    enunciado:
      'Lactente de 14 meses é levado ao pronto-socorro com febre alta há 3 dias, recusa total de sólidos e líquidos, salivação excessiva (sialorreia) e estridor inspiratório discreto. Ao exame físico, chama a atenção a presença de torcicolo acentuado com hiperextensão da cabeça (resistência à flexão cervical), dor à mobilização passiva do pescoço e abaulamento assimétrico visível na parede posterior da faringe. Qual é a hipótese diagnóstica mais provável e qual exame de imagem padrão-ouro confirma a coleção purulenta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Abscesso Retrofaríngeo; confirmação por Tomografia Computadorizada de pescoço com contraste intravenoso.',
      },
      {
        id: 'B',
        texto:
          'Laringite viral simples; confirmação por teste rápido da gripe na saliva.',
      },
      {
        id: 'C',
        texto:
          'Artrite reumatoide juvenil sistêmica com bloqueio articular atlantoaxial.',
      },
      {
        id: 'D',
        texto:
          'Tétano neonatal tardio com opistótono.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Abscesso Retrofaríngeo na Infância:\n\n1. Base Anatômica e Faixa Etária Exclusiva:\n   - O espaço retrofaríngeo contém ricos linfonodos (gânglios de Gilette) que drenam a nasofaringe, adenoides, seios da face e tuba auditiva;\n   - Esses linfonodos sofrem involuição e atrofia fisiológica espontânea a partir dos 4 a 5 anos de idade;\n   - Por isso, o abscesso retrofaríngeo é uma afecção quase exclusiva de lactentes e pré-escolares menores de 4 anos de idade (pico entre 1 e 3 anos);\n\n2. Apresentação Clínica Típica:\n   - Febre alta, prostração, odinofagia, sialorreia;\n   - TORCICOLO E LIMITAÇÃO DA MOBILIZAÇÃO CERVICAL (a criança mantém o pescoço em hiperextensão para abrir a via aérea e evitar a dor);\n   - Abaulamento na parede posterior da faringe;\n   - Estridor ou respiração ruidosa (pela compressão anterior da laringe/traqueia);\n\n3. Diagnóstico por Imagem Padrão-Ouro:\n   - Tomografia Computadorizada (TC) de Pescoço com Contraste: visualiza a coleção líquida hipodensa retrofaríngea com realce anelar periférico, determinando sua extensão cranio-caudal (risco de mediastinite) e relação com a artéria carótida interna e veia jugular interna.',
    comentariosAlternativas: {
      A: 'Correta. A combinação de febre, sialorreia, torcicolo e abaulamento posterior em menor de 4 anos é clássica de abscesso retrofaríngeo, confirmado por TC de pescoço com contraste.',
      B: 'Incorreta. Crupe viral não cursa com torcicolo, abaulamento faríngeo assimétrico nem salivação profusa por disfagia.',
      C: 'Incorreta. Não se trata de artrite reumatoide; o quadro é infeccioso bacteriano purulento agudo.',
      D: 'Incorreta. Criança tem 14 meses e não é neonato; não apresenta espasmos reflexos tétânicos generalizados.',
    },
  },
  {
    id: 'ped-est-014',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Abscesso Periamigdaliano: Quadro Clínico no Adolescente',
    isRevisao: false,
    enunciado:
      'Uma adolescente de 14 anos procura o pronto-socorro com história de amigdalite bacteriana há 5 dias em uso irregular de antibiótico. Queixa-se de piora dramática da dor de garganta, agora estritamente unilateral à direita, com dor irradiada para o ouvido ipsilateral (otalgia reflexa). Ao exame clínico: febril (38,8 °C), dificuldade importante para abrir a boca devido a espasmo dos músculos mastigatórios (trismo acentuado), voz abafada ("voz de batata quente"), sialorreia e desvio da úvula para o lado contralateral esquerdo com abaulamento do pilar amigdaliano anterior direito. Diante desse quadro clínico clássico, qual é o diagnóstico e o manejo inicial indicado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Abscesso Periamigdaliano; indicação de drenagem por punção/aspiração com agulha ou incisão e drenagem associada à antibioticoterapia parenteral e analgesia.',
      },
      {
        id: 'B',
        texto:
          'Crupe viral subglótico leve; prescrever corticoide inalatório em dose baixa e observação domiciliar.',
      },
      {
        id: 'C',
        texto:
          'Mononucleose infecciosa puramente viral; contraindicação a qualquer punção e alta sem medicação.',
      },
      {
        id: 'D',
        texto:
          'Disjunção da articulação têmporo-mandibular traumática; imobilização gessada craniomaxilar imediata.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Abscesso Periamigdaliano:\n\n1. Faixa Etária e Anatomia:\n   - É a infecção profunda do pescoço mais comum em adolescentes e adultos jovens (diferentemente do abscesso retrofaríngeo, que acomete lactentes menores de 4 anos);\n   - Coleção purulenta entre a cápsula da tonsila palatina e os músculos constritores da faringe;\n\n2. Tríade Semiológica Clássica:\n   - 1. Trismo (espasmo e contratura dolorosa dos músculos pterigoides pelo processo inflamatório adjacente, impedindo a abertura da boca);\n   - 2. Desvio da Úvula para o lado sadio contralateral;\n   - 3. "Voz de Batata Quente" (*hot potato voice*): fala abafada e gutural;\n   - Associa-se comumente a dor unilateral intensa e otalgia reflexa (mediada pelo nervo glossofaríngeo);\n\n3. Tratamento Padrão:\n   - Drenagem do pus (punção com agulha calibrosa ou incisão e drenagem);\n   - Antibioticoterapia parenteral cobrindo Streptococcus pyogenes, Staphylococcus aureus e anaeróbios da cavidade oral (como Ampicilina-Sulbactam, Ceftriaxona + Clindamicina); hidratação e analgesia vigorosa.',
    comentariosAlternativas: {
      A: 'Correta. Descreve com fidelidade o abscesso periamigdaliano com trismo, desvio de úvula e voz de batata quente, requerendo drenagem e antibioticoterapia.',
      B: 'Incorreta. Crupe é afecção subglótica de lactentes, sem trismo, sem desvio de úvula e com tosse ladrante.',
      C: 'Incorreta. Mononucleose causa amigdalite membranosa bilateral e esplenomegalia, sem coleção purulenta unilateral com desvio de úvula.',
      D: 'Incorreta. O trismo é inflamatório infeccioso peri-amigdaliano, sem histórico de trauma mecânico da ATM.',
    },
  },
  {
    id: 'ped-est-015',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Laringomalácia: Causa Mais Comum de Estridor Congênito',
    isRevisao: false,
    enunciado:
      'Um lactente de 2 meses de vida é trazido para consulta de puericultura com relato materno de "ruído para respirar como se tivesse o peito trancado" desde a 2ª semana de vida. A mãe relata que o barulho de estridor inspiratório fica mais intenso quando a criança mama, chora ou fica em decúbito dorsal (de barriga para cima), e melhora significativamente quando colocada de bruços (decúbito ventral). A criança mama bem ao seio materno, sem engasgos frequentes, e apresenta excelente ganho ponderoestatural (peso no percentil 75). Ao exame: lactente ativo, rosado, hidratado, afebril, com estridor inspiratório rude musical, sem tiragens ou cianose. Qual é a principal anomalia congênita da laringe responsável por esse quadro e qual exame endoscópico confirma o diagnóstico definitivo?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Laringomalácia; confirmada por Nasofibrolaringoscopia flexível com a criança acordada respirando espontaneamente.',
      },
      {
        id: 'B',
        texto:
          'Paralisia congênita de cordas vocais bilateral com necessidade de traqueostomia imediata no consultório.',
      },
      {
        id: 'C',
        texto:
          'Anel vascular aórtico compressivo isolado diagnosticado por radiografia de bacia.',
      },
      {
        id: 'D',
        texto:
          'Estenose congênita do piloro diagnosticada por lavado gástrico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Laringomalácia: A Causa Mais Comum de Estridor Congênito:\n\n1. Epidemiologia e Fisiopatologia:\n   - Responde por mais de 60% a 75% de todas as causas de estridor congênito na infância;\n   - Decorre da imaturidade neuromuscular e hipotonia das estruturas cartilaginosas supraglóticas;\n   - Durante a inspiração, as pregas ariepiglóticas encurtadas e as cartilagens aritenoides redundantes sofrem colapso para dentro do lúmen glótico pela pressão negativa;\n\n2. Quadro Clínico Típico:\n   - Início nos primeiros dias a semanas de vida (pico de intensidade entre 4 e 8 meses de vida);\n   - Estridor inspiratório musical de tom agudo, que PIORA no decúbito dorsal, durante o choro, agitação e esforço alimentar;\n   - MELHORA caracteristicamente no decúbito ventral (de bruços) ou com hiperextensão do pescoço (pois a gravidade afasta a epiglote da fenda glótica);\n   - Na imensa maioria dos casos leves a moderados, a criança apresenta desenvolvimento ponderal perfeitamente normal e eupneia em repouso;\n\n3. Diagnóstico Definitivo:\n   - Nasofibrolaringoscopia Flexível: realizada com a criança ACORDADA e respirando espontaneamente, permitindo visualizar o colapso dinâmico das aritenoides e a epiglote recurvada em formato de ômega (epiglote em "ômega");\n\n4. História Natural e Conduta:\n   - Resolução espontânea na vasta maioria dos pacientes até os 18 a 24 meses de vida com o crescimento e enrijecimento das cartilagens;\n   - Casos graves (com apneia obstrutiva, falha no ganho de peso ou cor pulmonale) necessitam de cirurgia (supraglotoplastia).',
    comentariosAlternativas: {
      A: 'Correta. Apresenta o quadro clássico da laringomalácia (piora em decúbito dorsal, melhora de bruços, bom ganho de peso) e confirmação por nasofibroscopia com a criança acordada.',
      B: 'Incorreta. Paralisia bilateral de cordas vocais causaria asfixia grave, cianose e tiragens intensas desde o nascimento, não compatíveis com excelente ganho de peso.',
      C: 'Incorreta. Anel vascular é diagnosticado por angiotomografia ou ecocardiograma, não radiografia de bacia.',
      D: 'Incorreta. Estenose de piloro cursa com vômitos pós-prandiais em jato e não com estridor laríngeo respiratório.',
    },
  },
  {
    id: 'ped-est-016',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Indicações de Supraglotoplastia na Laringomalácia Grave',
    isRevisao: false,
    enunciado:
      'A grande maioria das crianças com laringomalácia apresenta evolução benigna e resolução espontânea até o segundo ano de vida. No entanto, em cerca de 10% a 15% dos casos, a obstrução da via aérea é severa, exigindo intervenção cirúrgica denominada supraglotoplastia. Qual achado clínico constitui uma indicação formal inequívoca para a realização de supraglotoplastia na infância?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Dificuldade alimentar grave com engasgos frequentes, estagnação ou perda ponderal (falha no ganho de peso / "failure to thrive"), episódios de apneia obstrutiva, pectus excavatum adquirido e hipertensão pulmonar (cor pulmonale).',
      },
      {
        id: 'B',
        texto:
          'Presença isolada de estridor ao chorar em uma criança que ganha 35 gramas de peso por dia.',
      },
      {
        id: 'C',
        texto:
          'Espirros ocasionais matinais em lactente afebril e ativo.',
      },
      {
        id: 'D',
        texto:
          'Presença de apenas 2 evacuações pastosas ao dia em lactente sob aleitamento materno exclusivo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Indicações Cirúrgicas na Laringomalácia Grave (Supraglotoplastia):\n\n1. Critérios de Gravidade e Indicação Cirúrgica:\n   - 1. Repercussão Nutricional Severa: Déficit de ganho de peso / Estagnação ponderoestatural (*failure to thrive*) decorrente da fadiga muscular respiratória durante as mamadas e gasto calórico excessivo para vencer a obstrução da via aérea;\n   - 2. Eventos Respiratórios Críticos: Apneias obstrutivas com dessaturações graves de oxigênio durante o sono ou alimentação;\n   - 3. Deformidade Torácica Estrutural: Retração torácica crônica persistente induzindo deformidade de *pectus excavatum* adquirido;\n   - 4. Complicações Cardiovasculares: Hipóxia alveolar crônica levando a Hipertensão Pulmonar e *Cor Pulmonale*;\n\n2. O que é a Supraglotoplastia:\n   - Procedimento endoscópico microcirúrgico que secciona as pregas ariepiglóticas encurtadas e/ou resseca a mucosa redundante das cartilagens aritenoides, ampliando o vestíbulo laríngeo com excelente taxa de sucesso terapêutico (> 90%).',
    comentariosAlternativas: {
      A: 'Correta. Reúne com precisão todos os critérios clássicos de laringomalácia grave que indicam tratamento cirúrgico por supraglotoplastia.',
      B: 'Incorreta. Estridor isolado com excelente ganho de peso é a forma leve clássica, conduzida de modo estritamente conservador.',
      C: 'Incorreta. Espirros matinais isolados são reflexos fisiológicos sem relação com cirurgia laríngea.',
      D: 'Incorreta. Evacuações pastosas normais não constituem indicação cirúrgica.',
    },
  },
  {
    id: 'ped-est-017',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Hemangioma Subglótico: Quadro Clínico e Propranolol',
    isRevisao: false,
    enunciado:
      'Um lactente de 3 meses, com história de hemangioma cutâneo na região da mandíbula ("distribuição em barba"), começa a apresentar estridor inspiratório e expiratório (bifásico) de caráter progressivo há 4 semanas, que piora com o choro e a agitação. Foi tratado duas vezes como crupe viral com corticoide, apresentando melhora temporária fugaz com recaída imediata após a suspensão da medicação. A nasofibrolaringoscopia confirma lesão submucosa vascularizada, compressiva, de coloração avermelhada/azulada na parede posterolateral da subglote. Qual é o diagnóstico e qual é a terapia medicamentosa sistêmica de primeira escolha que revolucionou o tratamento dessa patologia?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Hemangioma Subglótico; tratamento de primeira escolha com Propranolol oral.',
      },
      {
        id: 'B',
        texto:
          'Laringite tuberculosa primária; tratamento com Rifampicina e Isoniazida.',
      },
      {
        id: 'C',
        texto:
          'Cisto tireoglosso infectado; tratamento com cauterização química com nitrato de prata.',
      },
      {
        id: 'D',
        texto:
          'Carcinoma espinocelular de laringe; indicação de quimioterapia com cisplatina.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Hemangioma Subglótico Infantil:\n\n1. Perfil Clínico Típico:\n   - Tumor vascular benigno congênito mais comum da laringe pediátrica;\n   - História Natural: a criança nasce assintomática; nas primeiras semanas a meses de vida (fase proliferativa do hemangioma), surge estridor bifásico progressivo que se intensifica com o choro (pelo ingurgitamento vascular do tumor);\n   - Associação com Hemangiomas Cutâneos: mais de 50% das crianças possuem hemangiomas na pele, especialmente na região cervicofacial em "distribuição em barba" (queixo, mandíbula, lábio inferior e pescoço anterior);\n   - Frequentemente diagnosticado tardiamente por ser confundido com "crupe recorrente" ou "laringite de difícil controle";\n\n2. Revolução Terapêutica com Propranolol:\n   - O PROPRANOLOL oral (betabloqueador não seletivo na dose de 2 a 3 mg/kg/dia) tornou-se a PRIMEIRA ESCOLHA terapêutica mundial;\n   - Mecanismos: vasoconstrição precoce dos vasos do tumor, inibição da angiogênese (bloqueio de VEGF e bFGF) e indução de apoptose de células endoteliais capilares, levando à rápida regressão do hemangioma e evitando traqueostomias ou cirurgias abertas.',
    comentariosAlternativas: {
      A: 'Correta. Identifica com precisão o hemangioma subglótico associado a hemangioma em barba e o propranolol como terapia de primeira linha.',
      B: 'Incorreta. Tuberculose laríngea é rara e não apresenta lesão vascular compressiva associada a hemangioma cutâneo.',
      C: 'Incorreta. Cisto tireoglosso é massa na linha média do pescoço pré-laríngea móvel à deglutição, não massa subglótica intraluminal.',
      D: 'Incorreta. Carcinoma epidermoide de laringe é neoplasia de adultos associada a tabagismo crônico, não ocorrendo em lactentes de 3 meses.',
    },
  },
  {
    id: 'ped-est-018',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Anéis Vasculares e Compressão Traqueal Extrínseca',
    isRevisao: false,
    enunciado:
      'Um lactente de 5 meses apresenta estridor constante inspiratório e expiratório (bifásico) desde o primeiro mês de vida, associado a engasgos frequentes e disfagia na deglutição de líquidos. A mãe relata que a criança tende a manter a cabeça em hiperextensão espontânea, e que tentar fletir o pescoço acentua drasticamente o estridor e o desconforto respiratório. A radiografia de esôfago contrastado (esofagograma com bário) revela uma compressão extrínseca posterior marcante no terço médio do esôfago. A broncoscopia demonstra compressão pulsátil na parede anterior da traqueia. Qual grupo de anomalias congênitas cardiovasculares é responsável por esse quadro de compressão aerodigestiva combinada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Anéis Vasculares congênitos (como o Duplo Arco Aórtico ou a Artéria Subclávia Direita Anômala com ligamento arterioso).',
      },
      {
        id: 'B',
        texto:
          'Coarctação da aorta isolada justa-ductal sem envolvimento traqueal.',
      },
      {
        id: 'C',
        texto:
          'Persistência do canal arterial restrita ao átrio esquerdo.',
      },
      {
        id: 'D',
        texto:
          'Tetralogia de Fallot com fluxo pulmonar aumentado e agenesia traqueal total.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Anéis Vasculares Congênitos:\n\n1. O que são Anéis Vasculares:\n   - Malformações congênitas do desenvolvimento dos arcos aórticos embrionários que circundam completa ou incompletamente a traqueia e o esôfago em um anel vascular compressivo fechado;\n   - Exemplos clássicos: Duplo Arco Aórtico (mais comum), Arco Aórtico Direito com Ligamento Arterioso Esquerdo, e *Sling* da Artéria Pulmonar;\n\n2. Sinais Clínicos e Diagnósticos Cardinais:\n   - Estridor BIFÁSICO contínuo associado a SINTOMAS DIGESTIVOS (disfagia, vômitos, engasgos com a mamada - a clássica "disfagia lusória");\n   - Postura em Hiperextensão Cervical: o lactente mantém o pescoço hiperextendido porque essa postura estira e abre a traqueia contra o anel compressivo; a flexão anterior fecha a traqueia e causa asfixia;\n   - Esofagograma: indentação extrínseca na coluna de bário esofágica;\n   - Broncoscopia: pulsacão vascular rítmica na parede da via aérea compressiva;\n   - Padrão-ouro confirmatório e de planejamento cirúrgico: Angiotomografia ou Angiorressonância Magnética do Tórax.',
    comentariosAlternativas: {
      A: 'Correta. Caracteriza com total precisão os anéis vasculares com compressão mista respiratória (estridor bifásico) e digestiva (disfagia).',
      B: 'Incorreta. Coarctação de aorta causa gradiente de pulso e pressão entre membros superiores e inferiores, sem compressão traqueoesofágica.',
      C: 'Incorreta. PCA não forma anel vascular peritraqueal nem causa disfagia por compressão posterior de esôfago.',
      D: 'Incorreta. Tetralogia de Fallot cursa com hipofluxo pulmonar e crises de cianose, sem anel vascular esofágico.',
    },
  },
  {
    id: 'ped-est-019',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Papilomatose Respiratória Recorrente Juvenil',
    isRevisao: false,
    enunciado:
      'Uma menina de 3 anos é encaminhada com disfonia (rouquidão) progressiva há 6 meses que evoluiu recentemente para afonia e estridor inspiratório aos esforços. Não apresenta febre nem pródromos catarrais. A videolaringoscopia flexível revela múltiplas lesões exofíticas verrucosas com aspecto de "cachos de uva" ou "couve-flor" inseridas nas cordas vocais verdadeiras e falsas, com extensão subglótica. A mãe relata história pregressa de condilomas genitais no final da gestação. Qual é o diagnóstico e os tipos de papilomavírus humano (HPV) mais frequentemente envolvidos nessa entidade?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Papilomatose Respiratória Recorrente Juvenil; associada aos subtipos HPV 6 e 11 de baixo risco oncogênico transmitidos durante o parto.',
      },
      {
        id: 'B',
        texto:
          'Nódulos vocais benignos ("calos das cordas vocais") associados ao vírus influenza A.',
      },
      {
        id: 'C',
        texto:
          'Laringite diftérica clássica associada ao bacilo Corynebacterium diphtheriae.',
      },
      {
        id: 'D',
        texto:
          'Paraganglioma laríngeo maligno associado ao vírus herpes simplex tipo 1.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Papilomatose Respiratória Recorrente (PRR) Juvenil:\n\n1. Etiologia e Transmissão Vertical:\n   - Causada pela infecção pelo Papilomavírus Humano (HPV), sendo mais de 90% dos casos decorrentes dos sorotipos 6 e 11 (tipos de baixo potencial maligno causadores de condilomas acuminados genitais);\n   - Transmissão perinatal durante a passagem pelo canal de parto infectado ou transmissão transplacentária ascendente in utero;\n\n2. Quadro Clínico:\n   - Tumor benigno mais comum da laringe na infância;\n   - Início insidioso em pré-escolares (pico entre 2 e 4 anos de idade);\n   - Sintoma inicial universal: DISFONIA CRÔNICA PROGRESSIVA (rouquidão que não melhora e progride para choro fraco e afonia);\n   - À medida que as lesões proliferam e ocupam a glote, surge estridor e desconforto respiratório obstrutivo crônico;\n\n3. Aspecto Laringoscópico Típico:\n   - Múltiplas massas verrucosas, sésseis ou pedunculadas, róseas ou avermelhadas, semelhantes a "cachos de uva" ou "couve-flor" aderidas às cordas vocais e laringe;\n\n4. Desafio Terapêutico:\n   - Caráter altamente RECORRENTE que exige múltiplas microcirurgias laringológicas de ablação/desbridamento (com microdebridador ou laser de CO2) ao longo da infância para desobstrução e preservação da fonação.',
    comentariosAlternativas: {
      A: 'Correta. Identifica com perfeição a papilomatose respiratória recorrente juvenile e a associação com HPV 6 e 11 transmitido no canal de parto.',
      B: 'Incorreta. Nódulos vocais decorrem de abuso vocal e são pequenos espessamentos bilaterais simétricos, não lesões múltiplas verrucosas em couve-flor.',
      C: 'Incorreta. Difteria forma pseudomembranas acinzentadas friáveis e aderentes com toxemia sistêmica grave, não lesões vegetantes verrucosas crônicas.',
      D: 'Incorreta. Não existe relação de paraganglioma com herpes vírus.',
    },
  },
  {
    id: 'ped-est-020',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Difteria Laríngea (Crupe Diftérico): Semiologia e Conduta',
    isRevisao: false,
    enunciado:
      'Uma criança de 5 anos, não vacinada por motivos religiosos, apresenta febre baixa, prostração, tosse rouca e estridor inspiratório lentamente progressivo há 5 dias. Ao exame da orofaringe, observa-se formação de pseudomembranas branco-acinzentadas espessas e confluentes aderidas às amígdalas, úvula e palato mole, que sangram com extrema facilidade à tentativa de descolamento mecânico. Há linfadenopatia cervical bilateral volumosa e edema peri-cervical acentuado conferindo o clássico aspecto de "pescoço de touro" (*bull neck*). Diante da confirmação clínica de Crupe Diftérico (Difteria Laríngea), qual conduta médica emergencial deve ser iniciada sem aguardar confirmação laboratorial?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administração precoce de Soro Antidiftérico (SAD) intravenoso associado a Penicilina G Cristalina ou Eritromicina, além de isolamento respiratório e monitorização eletrocardiográfica contínua para miocardite.',
      },
      {
        id: 'B',
        texto:
          'Curetagem mecânica vigorosa de todas as membranas amigdalianas com espátula até retirar todo o tecido necrosado.',
      },
      {
        id: 'C',
        texto:
          'Alta imediata para isolamento domiciliar com xarope de guaco.',
      },
      {
        id: 'D',
        texto:
          'Indicação de cirurgia plástica cervical para lipoaspiração do pescoço de touro.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Difteria Respiratória e Crupe Diftérico (Corynebacterium diphtheriae):\n\n1. Quadro Clínico Paradigmático:\n   - Bactéria bacilar gram-positiva produtora da potente exotoxina diftérica;\n   - Pseudomembranas branco-acinzentadas assimétricas, densamente aderentes e invadindo tecidos adjacentes (úvula, palato), que sangram profusamente se tracionadas;\n   - Edema cervical maciço com linfoadenomegalia dando o aspecto típico de "Pescoço de Touro" (*Bull Neck*);\n   - Crupe Diftérico: a descida e extensão da pseudomembrana para a laringe e traqueia causa obstrução mecânica e asfixia mortal;\n\n2. Tratamento Imediato Sem Esperar Cultura:\n   - SORO ANTIDIFTÉRICO (SAD): neutraliza a toxina diftérica livre circulante no sangue antes que ela se fixe nos tecidos (a toxina já ligada não é neutralizada, daí a urgência máxima do SAD);\n   - ANTIBIOTICOTERAPIA (Penicilina Cristalina IV ou Eritromicina oral/IV): interrompe a produção continuada de toxina e elimina a transmissibilidade da bactéria;\n   - MONITORIZAÇÃO CARDÍACA RIGOROSA: a toxina diftérica tem tropismo miocárdico e neurológico, podendo deflagrar miocardite grave (com arritmias e bloqueios atrioventriculares fatais entre a 2ª e a 3ª semana) e polineuropatias com paralisia do palato e diafragma.',
    comentariosAlternativas: {
      A: 'Correta. O soro antidiftérico precoce é a medida salvadora para neutralizar a toxina livre, associado a antibióticos e vigilância de miocardite.',
      B: 'Incorreta. Tentar descolar a membrana diftérica provoca hemorragia profusa e liberação massiva de toxina para a circulação.',
      C: 'Incorreta. Difteria laríngea é emergência médica de alta letalidade, exigindo internação hospitalar imediata em isolamento.',
      D: 'Incorreta. O aumento do pescoço decorre de adenite inflamatória e edema por toxina, não de acúmulo de tecido adiposo.',
    },
  },
  {
    id: 'ped-est-021',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Intubação Traqueal no Crupe Viral Grave: Calibre do Tubo',
    isRevisao: false,
    enunciado:
      'Uma criança de 2 anos com crupe viral grave desenvolve exaustão ventilatória, sonolência e hipoxemia refratária a nebulizações com adrenalina e corticoterapia, havendo indicação inequívoca de intubação traqueal de emergência. Sabendo-se que a fórmula clássica para o diâmetro interno de tubo traqueal sem balonete na infância é [Idade (anos)/4 + 4], o cálculo indicaria um tubo de calibre 4,5 mm. No entanto, qual particularidade anatômica fundamental deve ser respeitada na escolha do tubo endotraqueal na presença de laringite subglótica edematosa aguda?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Utilizar um tubo traqueal com diâmetro interno de 0,5 a 1,0 mm menor que o previsto para a idade (ou seja, 3,5 mm ou 4,0 mm), a fim de ultrapassar a estenose subglótica edematosa sem provocar isquemia da mucosa cricoide ou estenose subglótica cicatricial tardia.',
      },
      {
        id: 'B',
        texto:
          'Utilizar obrigatoriamente um tubo 2,0 mm maior que o previsto (calibre 6,5 mm) para dilatar a força o anel cricoide por expansão forçada.',
      },
      {
        id: 'C',
        texto:
          'Intubação retrógrada obrigatória guiada por fio metálico transcutâneo através da tiroide.',
      },
      {
        id: 'D',
        texto:
          'O calibre do tubo não deve ser alterado em nenhuma hipótese, devendo-se utilizar tubo rígido de latão.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Particularidades da Intubação Traqueal no Crupe Grave:\n\n1. Indicação Restrita:\n   - Menos de 1% a 2% de todas as crianças admitidas com crupe necessitam de via aérea artificial (a esmagadora maioria responde à adrenalina e dexametasona);\n   - Indicada em exaustão respiratória, letargia, bradicardia ou hipoxemia persistente;\n\n2. Seleção do Calibre do Tubo Endotraqueal:\n   - Como a região subglótica está estenosada por edema inflamatório circumferential dentro do anel cricoide rígido, a tentativa de introduzir um tubo de calibre habitual para a idade gera atrito excessivo e trauma barométrico;\n   - A pressão mecânica contínua da parede externa do tubo contra a mucosa edemaciada causa isquemia e necrose dos capilares mucosos;\n   - Essa lesão isquêmica evolui tardiamente para fibrose densa e ESTENOSE SUBGLÓTICA ADQUIRIDA CICATRICIAL permanente (complicação iatrogênica grave);\n   - Portanto, a regra universal é SEMPRE SELECIONAR UM TUBO COM DIÂMETRO 0,5 A 1,0 MM MENOR que o calculado para a idade da criança, mantendo discreto escape de ar ao redor do tubo em pressões inspiratórias.',
    comentariosAlternativas: {
      A: 'Correta. A escolha de um tubo 0,5 a 1,0 mm menor que o previsto protege a mucosa cricoide contra isquemia e previne estenose subglótica cicatricial.',
      B: 'Incorreta. Forçar um tubo calibroso laceraria a cartilagem e necrosaria a mucosa subglótica por isquemia.',
      C: 'Incorreta. Intubação retrógrada transcutânea não é método primário para crupe na pediatria.',
      D: 'Incorreta. Ignorar o edema subglótico causaria falha de intubação ou trauma catastrófico.',
    },
  },
  {
    id: 'ped-est-022',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Umidificação do Ar e Terapia de Vapor: Evidências Clínicas',
    isRevisao: false,
    enunciado:
      'Historicamente, a inalação de vapor d’água quente ("banheiro com chuveiro aberto gerando névoa") ou vapor frio era uma das práticas caseiras mais populares no alívio de crises de crupe. Em relação a essa prática, o que revelam os ensaios clínicos controlados e revisões sistemáticas modernas sobre a eficácia da umidificação do ar no tratamento do crupe viral agudo?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ensaios clínicos randomizados demonstraram que a terapia com vapor ou ar umidificado não altera os escores de gravidade, não reduz internações e não substitui a eficácia comprovada dos corticoides e da adrenalina, além de carregar riscos potenciais de queimaduras acidentais por água quente.',
      },
      {
        id: 'B',
        texto:
          'A umidificação com vapor quente é superior à dexametasona oral, curando 100% dos casos de crupe grave em 10 minutos.',
      },
      {
        id: 'C',
        texto:
          'O vapor quente esteriliza a via aérea matando todos os vírus Parainfluenza por choque térmico pulmonar.',
      },
      {
        id: 'D',
        texto:
          'A umidificação do ar é obrigatória em UTI antes de qualquer outra medicação por 48 horas ininterruptas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Evidências Científicas sobre Umidificação e Vapor no Crupe:\n\n1. O Mito Histórico vs Evidência Científica:\n   - Por décadas recomendou-se a "tenda de vapor" (*croup tent*) ou o vapor de chuveiro quente em domicílio;\n   - Múltiplos ensaios clínicos randomizados de alta qualidade metodológica e revisões Cochrane compararam ar umidificado vs ar ambiente e demonstraram:\n     * Ausência de melhora estatisticamente significativa nos escores de desconforto respiratório (Westley);\n     * Ausência de redução na taxa de hospitalização ou necessidade de adrenalina;\n\n2. Riscos Associados:\n   - Uso de recipientes ou bacias de água fervendo no ambiente domiciliar associa-se a relatos frequentes de queimaduras graves acidentais por escaldadura em lactentes;\n   - Tendas de vapor no hospital impediam a visualização clara da criança e geravam estresse;\n\n3. Conclusão das Diretrizes Internacionais:\n   - A umidificação não é recomendada como tratamento médico formal nos serviços de emergência;\n   - O pilar indiscutível do tratamento baseia-se na DEXAMETASONA em dose única e ADRENALINA nos casos moderados a graves.',
    comentariosAlternativas: {
      A: 'Correta. Expressa com fidelidade a medicina baseada em evidências: a umidificação não tem benefício clínico comprovado e vapores quentes trazem risco de queimaduras.',
      B: 'Incorreta. A dexametasona é amplamente superior à umidificação em todos os estudos clínicos.',
      C: 'Incorreta. Vapor não esteriliza a via aérea e temperaturas bactericidas causariam queimadura inalatória letal.',
      D: 'Incorreta. Atrasar corticoide e adrenalina para fazer vaporização prolongada agravaria o risco de óbito por asfixia.',
    },
  },
  {
    id: 'ped-est-023',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Estenose Subglótica Adquirida Pós-Intubação',
    isRevisao: false,
    enunciado:
      'Um lactente de 6 meses, que permaneceu intubado por 18 dias na UTI neonatal devido a bronquiolite grave, apresenta estridor inspiratório e expiratório persistente e tosse rouca que não desaparecem desde a extubação há 2 meses. Ao exame físico: eupneico em repouso, mas desenvolve estridor com tiragem subcostal importante a qualquer esforço físico mínimo ou choro. Não tem febre e já recebeu quatro ciclos de corticoide sem qualquer resolução do quadro. A fibrobroncoscopia revela estreitamento circunferencial fibroso rígido fixo na região da cartilagem cricoide, reduzindo a luz aérea em 70% (Grau III de Myer-Cotton). Qual é o diagnóstico e o fator etiopatogênico primário envolvido?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Estenose Subglótica Adquirida; decorrente de intubação traqueal prolongada com tubo de calibre inadequado causando isquemia mucosa por pressão contra o anel cricoide e subsequente cicatrização fibrosa.',
      },
      {
        id: 'B',
        texto:
          'Crupe viral agudo persistente por mutação genética do Parainfluenza tipo 1.',
      },
      {
        id: 'C',
        texto:
          'Abscesso retrofaríngeo crônico calcificado bloqueando a traqueia.',
      },
      {
        id: 'D',
        texto:
          'Refluxo gastroesofágico com aspiração de bile alcalina simulando estenose.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Estenose Subglótica Adquirida na Pediatria:\n\n1. Etiopatogenia Principal:\n   - Mais de 90% dos casos de estenose subglótica em crianças são ADQUIRIDOS, sendo a INTUBAÇÃO ENDOTRAQUEAL PROLONGADA o principal fator etiológico;\n   - Mecanismo: a cartilagem cricoide é um anel fechado inelástico. Quando o tubo endotraqueal é demasiadamente calibroso para a via aérea da criança ou permanece por tempo prolongado com balonete hiperinsuflado, a pressão contínua excede a pressão de perfusão capilar da mucosa subglótica (em torno de 25-30 mmHg);\n   - Segue-se isquemia, ulceração mucosa, condrite cricoide e subsequente cicatrização por tecido conjuntivo fibroso retrátil circunferencial;\n\n2. Quadro Clínico:\n   - Estridor persistente bifásico ou inspiratório pós-extubação, tosse rouca e falha repetida de extubação na UTI;\n   - Sintomas fixos que não respondem a anti-inflamatórios ou broncodilatadores;\n\n3. Classificação de Gravidade de Myer-Cotton:\n   - Grau I: obstrução < 50% da luz;\n   - Grau II: obstrução de 51% a 70%;\n   - Grau III: obstrução de 71% a 99% (estenose severa);\n   - Grau IV: oclusão completa de 100% da luz (sem passagem de ar);\n\n4. Manejo:\n   - Varia desde dilatação endoscópica com balão até laringotraqueoplastia reconstrutiva aberta com enxerto de cartilagem costal.',
    comentariosAlternativas: {
      A: 'Correta. Identifica com rigor a estenose subglótica cicatricial secundária à intubação prolongada e o grau III de Myer-Cotton.',
      B: 'Incorreta. Crupe é infecção viral aguda autolimitada de poucos dias, não estenose fixa crônica de 2 meses.',
      C: 'Incorreta. Abscesso não causa estreitamento fibroso intraluminal rígido na cricoide.',
      D: 'Incorreta. Embora DRGE piore a cicatrização, o achado endoscópico é estenose anatômica fixa pós-intubação.',
    },
  },
  {
    id: 'ped-est-024',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Análise Comparativa: Crupe vs Epiglotite vs Traqueíte',
    isRevisao: false,
    enunciado:
      'No atendimento de urgência da criança com estridor agudo, a distinção rápida entre Crupe Viral, Epiglotite Aguda e Traqueíte Bacteriana é vital para a sobrevida do paciente. Assinale a alternativa que correlaciona corretamente cada entidade às suas respectivas características clínicas diferenciais:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Crupe Viral: pródromos catarrais, tosse ladrante, estridor inspiratório e resposta à adrenalina/dexametasona; Epiglotite Aguda: início hiperagudo, febre alta tóxica, dor de garganta intensa, sialorreia, sem tosse ladrante e postura em tripé; Traqueíte Bacteriana: piora secundária após crupe prévio, febre alta, secreção purulenta espessa na traqueia e refratariedade à adrenalina.',
      },
      {
        id: 'B',
        texto:
          'Crupe Viral: doença exclusiva de recém-nascidos tratada com quimioterapia; Epiglotite Aguda: benigna e assintomática tratada com chá de camomila; Traqueíte Bacteriana: tosse espasmódica pura sem secreção.',
      },
      {
        id: 'C',
        texto:
          'Crupe Viral: sempre acompanhado de sialorreia profusa e posição em tripé; Epiglotite Aguda: tosse ladrante clássica que responde imediatamente à inalação de água destilada fria; Traqueíte: afecção sem febre tratada com salbutamol oral.',
      },
      {
        id: 'D',
        texto:
          'As três entidades apresentam o mesmo quadro e o mesmo tratamento com intubação profilática obrigatória nas primeiras 2 horas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Tabela Diferencial das Grandes Síndromes de Obstrução Laríngea Aguda:\n\n1. Crupe Viral (Laringotraqueíte):\n   - Agente: Parainfluenza (1 e 2);\n   - Faixa etária: 6 meses a 3 anos;\n   - Clínica: Pródromos de IVAS, febrícula, tosse ladrante metálica proeminente, rouquidão, estridor inspiratório;\n   - Resposta Terapêutica: Excelente resposta à Dexametasona e Adrenalina inalatória;\n\n2. Epiglotite Aguda Bacteriana:\n   - Agente: Haemophilus influenzae b, Streptococcus pyogenes;\n   - Faixa etária: 2 a 7 anos (não vacinados);\n   - Clínica: Instalação fulminante (< 12h), febre alta, toxemia, sem tosse ladrante, sialorreia e disfagia graves, postura em tripé;\n   - Manejo: Intubação em centro cirúrgico + Antibiótico parenteral (Ceftriaxona);\n\n3. Traqueíte Bacteriana:\n   - Agente: Staphylococcus aureus, Pneumococo;\n   - Faixa etária: lactentes e pré-escolares;\n   - Clínica: Piora rápida e febre alta após alguns dias de crupe viral prévio ("crupe que desandou"), tosse produtiva com pus espesso;\n   - Resposta: Fracasso total à adrenalina inalatória; necessita de suporte de via aérea (aspiração de crostas) e antibiótico parenteral.',
    comentariosAlternativas: {
      A: 'Correta. Sintetiza com total precisão clínica as três grandes etiologias infecciosas de estridor agudo na infância.',
      B: 'Incorreta. Apresenta conceitos estapafúrdios e condutas despropositadas.',
      C: 'Incorreta. Troca as características: epiglotite tem sialorreia e tripé (sem tosse ladrante) e crupe tem tosse ladrante sem sialorreia profusa.',
      D: 'Incorreta. São patologias completamente distintas em fisiopatologia, gravidade e tratamento.',
    },
  },
  {
    id: 'ped-est-025',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Caso Clínico Integrador: Manejo no Pronto-Socorro',
    isRevisao: false,
    enunciado:
      'Um menino de 20 meses é admitido na sala de emergência com tosse ladrante há 2 dias com piora acentuada na última hora. Ao exame inicial: REG, ansioso e agitado no colo materno, corado, febril (38,2 °C); presença de estridor inspiratório rude claramente audível em repouso, tiragem subcostal e intercostal moderadas e retração de fúrcula esternal; ausculta pulmonar com boa entrada de ar bilateral simétrica, sem estertores ou sibilos; FR = 48 irpm, SpO2 = 91% em ar ambiente. A equipe classifica o quadro como Crupe Viral Moderado a Grave (Westley = 6-7). Qual é a sequência imediata e completa de condutas clínicas baseadas em evidências a ser instituída para este paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Manter a criança calma no colo materno com oferta passiva de oxigênio umidificado; realizar nebulização com Adrenalina comum 1:1.000 (0,5 mL/kg, máx 5 mL); administrar Dexametasona (0,6 mg/kg) por via oral (ou IM/IV se recusa/agitação intensa); e manter em observação clínica contínua no pronto-socorro por no mínimo 2 a 4 horas para monitorização de resposta e do efeito rebote.',
      },
      {
        id: 'B',
        texto:
          'Contenção física no leito de emergência, coleta imediata de gasometria arterial femoral dolorosa e encaminhamento para broncoscopia rígida de urgência sem qualquer medicação prévia.',
      },
      {
        id: 'C',
        texto:
          'Administração de ampicilina oral e alta imediata para casa com xarope sedativo de tosse.',
      },
      {
        id: 'D',
        texto:
          'Cricotireoidostomia cirúrgica imediata com bisturi de lâmina 11 na sala de triagem antes de qualquer suporte ventilatório.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Caso Clínico Integrador: Protocolo de Atendimento do Crupe Moderado a Grave no Pronto-Socorro:\n\n1. Conforto da Criança (Medida Não Farmacológica Crítica):\n   - Manter a criança no colo da mãe ou acompanhante, evitando agitação, dor e choro desnecessários;\n   - O choro aumenta a pressão negativa intratorácica inspiratória, agravando o colapso dinâmico subglótico e acelerando a exaustão respiratória;\n   - Oferta de O2 inalatório suave (*blow-by*) mantendo SpO2 >= 92-94%;\n\n2. Intervenção Farmacológica Rápida:\n   - 1. NEBULIZAÇÃO COM ADRENALINA (1:1.000): 0,5 mL/kg (máx 5 mL) com fluxo de oxigênio a 6-8 L/min. Efeito vasodilatador/vasoconstritor alfa-1 alivia o edema em 10 a 30 minutos;\n   - 2. CORTICOTERAPIA IMEDIATA: DEXAMETASONA 0,6 mg/kg VO (ou IM se a criança estiver vomitando ou com agitação extrema). Efeito anti-inflamatório tem início de ação em 1 a 2 horas e atinge pico em 4 a 6 horas, sustentando o alívio quando o efeito da adrenalina decair;\n\n3. Observação Pós-Terapia:\n   - Permanência OBRIGATÓRIA de no mínimo 2 a 4 horas em leito de observação com monitorização contínua;\n   - Se após 2 a 4 horas o paciente estiver assintomático, afebril, sem estridor em repouso e sem tiragens, recebe alta segura com orientações;',
    comentariosAlternativas: {
      A: 'Correta. Descreve com perfeição técnica e didática todos os passos do protocolo internacional de emergência para o crupe moderado a grave.',
      B: 'Incorreta. Conter a criança e puncionar artéria femoral dolorosa aumentará o choro e precipitará oclusão respiratória aguda fatal.',
      C: 'Incorreta. Crupe é viral (não usa ampicilina), sedativos de tosse são contraindicados e liberar paciente com estridor em repouso é negligência grave.',
      D: 'Incorreta. Cricotireoidostomia é procedimento de resgate cirúrgico de exceção absoluta; a imensa maioria responde à adrenalina e dexametasona.',
    },
  },
  {
    id: 'ped-est-026',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Epiglotite Aguda: Etiologia e Impacto Vacinal do Hib',
    isRevisao: false,
    enunciado:
      'Uma criança de 3 anos, não imunizada por recusa familiar a vacinas, dá entrada na sala de emergência com quadro fulminante de febre alta, prostração, odinofagia intensa e estridor respiratório abafado de início há 6 horas. O diagnóstico de Epiglotite Aguda é confirmado. Em relação à microbiologia e à epidemiologia da epiglotite aguda bacteriana na era pós-vacinal versus não vacinados, qual afirmação é correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O Haemophilus influenzae tipo b (Hib) é o agente clássico e mais agressivo, cuja incidência caiu em mais de 95% a 99% em populações imunizadas com a vacina conjugada (Pentavalente), tornando a epiglotite uma doença rara que hoje acomete principalmente crianças não vacinadas, imunodeprimidos ou é causada por patógenos alternativos como Streptococcus pyogenes (Grupo A), Streptococcus pneumoniae e Staphylococcus aureus.',
      },
      {
        id: 'B',
        texto:
          'O Vírus Sincicial Respiratório (VSR) é o agente causador em 100% dos casos de epiglotite, não havendo qualquer relação com bactérias.',
      },
      {
        id: 'C',
        texto:
          'A vacina contra o Hib nunca teve impacto sobre a incidência de epiglotite, pois o Haemophilus só coloniza o trato urinário inferior.',
      },
      {
        id: 'D',
        texto:
          'A epiglotite aguda é uma doença puramente autoimune induzida por anticorpos anti-cricoide após ingestão de glúten.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Etiologia e Epidemiologia da Epiglotite Aguda na Era Vacinal:\n\n1. O Papel Histórico do Haemophilus influenzae tipo b (Hib):\n   - Historicamente, o Hib era responsável por mais de 90% a 95% dos casos de epiglotite aguda bacteriana em crianças de 2 a 7 anos;\n   - Apresentava-se como uma celulite bacterêmica grave e potencialmente letal da epiglote e estruturas supraglóticas;\n\n2. O Impacto Extraordinário da Vacinação:\n   - Com a introdução sistemática da vacina Hib conjugada (no Brasil incorporada na vacina Pentavalente aos 2, 4 e 6 meses), a incidência de infecções invasivas por Hib despencou em mais de 95% a 99%;\n   - Atualmente, a epiglotite aguda tornou-se um evento extremamente raro em países com alta cobertura vacinal;\n\n3. Cenário Atual de Casos:\n   - Acomete crianças não vacinadas ou com esquema vacinal incompleto (hesitação vacinal);\n   - Em crianças vacinadas ou adultos, os patógenos predominantes tornaram-se: Streptococcus pyogenes (Streptococcus beta-hemolítico do Grupo A), Streptococcus pneumoniae, Staphylococcus aureus (incluindo linhagens MRSA) e Haemophilus não tipáveis.',
    comentariosAlternativas: {
      A: 'Correta. Reflete com fidelidade a história natural, a quase erradicação pós-vacina Hib e os agentes causais em vacinados e não vacinados.',
      B: 'Incorreta. VSR causa bronquiolite e crupe viral, não a celulite bacteriana fulminante da supraglote.',
      C: 'Incorreta. A vacina Hib foi um dos maiores sucessos de saúde pública da história, praticamente eliminando a epiglotite em vacinados.',
      D: 'Incorreta. A epiglotite é uma infecção bacteriana supurativa aguda invasiva, sem relação com doença celíaca ou autoimunidade.',
    },
  },
  {
    id: 'ped-est-027',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Instalação Hiperaguda e a Tríade dos "4 Ds" na Epiglotite',
    isRevisao: false,
    enunciado:
      'Ao contrário da laringite viral aguda (crupe), que evolui com pródromos catarrais de 2 a 3 dias e tosse ladrante marcante, a Epiglotite Aguda Bacteriana caracteriza-se por um curso clínico fulminante e sinais semiológicos patognomônicos. Quais são os clássicos "4 Ds" que compõem o quadro clínico paradigmático da epiglotite aguda infantil?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Drooling (sialorreia por disfagia grave), Dysphagia (incapacidade de deglutir saliva/líquidos), Dysphonia (voz abafada em batata quente sem tosse ladrante) e Distress (desconforto respiratório grave com estridor inspiratório abafado).',
      },
      {
        id: 'B',
        texto:
          'Diarrhea (diarreia líquida profusa), Diuresis (poliúria), Dizziness (tontura) e Dehydration (desidratação hipotônica pura).',
      },
      {
        id: 'C',
        texto:
          'Dermatitis (exantema micropapular áspero), Desquamation (descamação laminar), Diplopia (visão dupla) e Deafness (surdez neurossensorial).',
      },
      {
        id: 'D',
        texto:
          'Dyspepsia (queimação gástrica), Depression (rebaixamento do humor), Delirium (alucinações visuais) e Dysarthria (fala escandida cerebelar).',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Os "4 Ds" da Epiglotite Aguda Bacteriana:\n\n1. Instalação Hiperaguda (horas):\n   - Início fulminante em menos de 6 a 12 horas: a criança deita-se hígida ou com discreta febre e acorda toxêmica, em sofrimento respiratório agudo grave;\n\n2. Mnemônica Consagrada dos "4 Ds":\n   - 1. *Drooling* (Sialorreia): a criança baba continuamente devido à odinofagia excruciante que a impede de deglutir a própria saliva;\n   - 2. *Dysphagia* (Disfagia Extrema): recusa absoluta de qualquer alimento, água ou saliva;\n   - 3. *Dysphonia* (Disfonia Abafada): fala com voz rouca, apagada ou em "batata quente" (*hot potato voice*). Característica crucial: NÃO HÁ TOSSE LADRANTE (diferente do crupe);\n   - 4. *Distress* (Desconforto Respiratório Agudo): taquipneia, tiragens graves, ansiedade, hipoxemia e estridor inspiratório de tom baixo/abafado.',
    comentariosAlternativas: {
      A: 'Correta. Define com rigor a mnemônica universalmente consagrada dos 4 Ds da epiglotite aguda bacteriana.',
      B: 'Incorreta. Diarreia e poliúria não fazem parte do quadro clínico respiratório obstrutivo da epiglotite.',
      C: 'Incorreta. Dermatite e descamação são típicas de escarlatina e doença de Kawasaki, não de celulite epiglótica.',
      D: 'Incorreta. Sintomas neurológicos crônicos e queixas dispépticas não têm correlação com epiglotite aguda.',
    },
  },
  {
    id: 'ped-est-028',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'A Postura do Tripé (Sniffing Position) na Epiglotite',
    isRevisao: false,
    enunciado:
      'Uma criança de 4 anos é admitida no box de emergência com febre alta e estridor. O médico plantonista nota que o paciente recusa-se terminantemente a deitar na maca, permanecendo sentado, inclinado para a frente com os braços estendidos e apoiados sobre os joelhos, queixo projetado anteriormente, pescoço em hiperextensão e boca aberta babando continuamente. Qual é a denominação dessa atitude postural compensatória e qual é o seu objetivo biomecânico imediato?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Postura em tripé (ou "posição de olfator" / sniffing position); visa retificar o eixo faringolaríngeo e afastar a epiglote tumefeita para a frente por ação da gravidade, maximizando o diâmetro da fenda glótica para evitar asfixia imediata.',
      },
      {
        id: 'B',
        texto:
          'Postura de opistótono; decorrente de espasmo tetânico induzido pela toxina do Clostridium tetani na medula espinhal.',
      },
      {
        id: 'C',
        texto:
          'Postura de decorticação; decorrente de herniação uncal com isquemia diencefálica aguda.',
      },
      {
        id: 'D',
        texto:
          'Posição de cócoras (squatting); visa aumentar a resistência vascular sistêmica para diminuir o shunt direita-esquerda na tetralogia de Fallot.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Postura em Tripé (*Tripod Position* ou *Sniffing Position*) na Epiglotite:\n\n1. Descrição Biomecânica:\n   - A criança senta-se inclinada ativamente para frente, com o tronco apoiado nas mãos abertas sobre o leito ou joelhos (formando um "tripé" estável);\n   - O pescoço é mantido em hiperextensão, o queixo é projetado para cima e para frente (posição de farejador / *sniffing position*), e a boca permanece aberta com a língua protusa;\n\n2. Fisiologia Protetora:\n   - A epiglote infectada e suas pregas ariepiglóticas encontram-se maciçamente edemaciadas, pesadas e flácidas (epiglote em "cereja madura");\n   - Se a criança deitar (decúbito dorsal), a gravidade fará a epiglote cair para trás diretamente sobre o orifício da fenda glótica, ocluindo 100% da via aérea e causando asfixia fatal instantânea;\n   - A postura em tripé alinha o eixo da orofaringe e traciona anteriormente a epiglote, preservando uma fresta mínima de fluxo aéreo;\n\n3. Regra de Segurança Absoluta:\n   - NUNCA FORÇAR O DECÚBITO DORSAL OU CONTER UMA CRIANÇA EM POSTURA DE TRIPÉ!',
    comentariosAlternativas: {
      A: 'Correta. Define com total fidelidade anatômica a postura em tripé e seu papel mecânico de afastar a epiglote volumosa da glote para evitar asfixia.',
      B: 'Incorreta. Opistótono é hiperextensão arqueada do tronco no tétano ou meningite avançada.',
      C: 'Incorreta. Decorticação é flexão anormal dos membros superiores com extensão dos inferiores por lesão hemisférica cortical.',
      D: 'Incorreta. A posição de cócoras (squatting) é adotada por cardiopatas em crise cianótica de Fallot.',
    },
  },
  {
    id: 'ped-est-029',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Proibições Formais: O Perigo Mortal do Abaixador de Língua',
    isRevisao: false,
    enunciado:
      'Durante o plantão em uma Unidade de Pronto Atendimento (UPA), um interno de medicina atende uma criança de 3 anos com suspeita clínica fundamentada de Epiglotite Aguda (febre alta de 39,8 °C, prostração, sialorreia, postura em tripé e estridor abafado). O interno pega um abaixador de língua de madeira e pede para o pai segurar com força a cabeça da criança para que ele consiga inspecionar a orofaringe com uma lanterna. Qual deve ser a intervenção imediata do médico preceptor?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Interromper imediatamente o procedimento e proibir terminantemente o uso do abaixador de língua ou qualquer manipulação da orofaringe, pois a estimulação táctil ou o choro provocado podem deflagrar laringoespasmo reflexo fatal e colapso mecânico imediato da via aérea com parada cardiorrespiratória.',
      },
      {
        id: 'B',
        texto:
          'Apoiar o procedimento e orientar que o abaixador seja introduzido até a epiglote para coletar biópsia rápida com pinça de cutícula.',
      },
      {
        id: 'C',
        texto:
          'Substituir o abaixador de madeira por uma espátula de metal gelada e realizar massagem vigorosa nas amígdalas palatinas.',
      },
      {
        id: 'D',
        texto:
          'Permitir o exame da orofaringe desde que a criança seja amarrada com ataduras no leito de bruços.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Perigo Mortal da Manipulação da Orofaringe na Epiglotite:\n\n1. O Maior Erro Iatrogênico na Emergência Pediátrica:\n   - O uso de espátula/abaixador de língua para examinar a cavidade oral ou a tentativa de visualizar a garganta de uma criança com suspeita de epiglotite é uma das condutas mais perigosas da medicina de emergência;\n\n2. Fisiopatologia do Colapso Súbito:\n   - 1. Laringoespasmo Reflexo: o estímulo sensitivo na base da língua ou palato deflagra contração espasmódica incontrolável das cordas vocais e pregas supraglóticas;\n   - 2. Obstrução Mecânica Direta: o abaixador pode empurrar a base lingual contra a epiglote volumosa edemaciada, impactando-a como uma tampa de vaso na fenda glótica;\n   - 3. Agitação e Choro: o choro forçado eleva a pressão intratorácica negativa, colabando o tecido supraglótico friável;\n\n3. Conduta Correta Universal:\n   - Jamais usar abaixador de língua;\n   - Não forçar procedimentos dolorosos (punção venosa, gasometria arterial);\n   - Manter a criança nos braços dos pais com oxigênio passivo e encaminhar diretamente para o Centro Cirúrgico com equipe de via aérea a postos.',
    comentariosAlternativas: {
      A: 'Correta. A proibição do abaixador de língua na suspeita de epiglotite é uma das regras mais rígidas e cobradas em provas de residência médica em todo o mundo.',
      B: 'Incorreta. Tentar biópsia ou tocar a epiglote causará asfixia e óbito imediato da criança no leito da UPA.',
      C: 'Incorreta. Tocar a laringe com metal provocará laringoespasmo instantâneo.',
      D: 'Incorreta. Conter e deitar a criança agravará a oclusão mecânica da via aérea.',
    },
  },
  {
    id: 'ped-est-030',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Manejo Definitivo da Via Aérea na Epiglotite: Centro Cirúrgico',
    isRevisao: false,
    enunciado:
      'Uma menina de 3 anos e meio chega à emergência com clínica exuberante de epiglotite aguda em estágio avançado. A equipe multidisciplinar reconhece a gravidade e organiza a estratégia definitiva de proteção da via aérea. Onde e sob quais condições de segurança padronizadas deve ser realizada a intubação traqueal eletiva imediata dessa paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Em ambiente cirúrgico controlado (Centro Cirúrgico ou UTI) com equipe experiente (anestesiologista/cirurgião pediátrico), sob anestesia inalatória com oxigênio mantendo ventilação espontânea, visualização direta por laringoscopia e material cirúrgico estéril aberto a postos para cricotireoidostomia ou traqueostomia de emergência caso ocorra falha de intubação.',
      },
      {
        id: 'B',
        texto:
          'No corredor da emergência às cegas, sem qualquer sedativo ou relaxante muscular, utilizando tubo traqueal 2 calibres maior que o habitual.',
      },
      {
        id: 'C',
        texto:
          'Em sala de radiologia simples durante a realização de uma tomografia contrastada de abdome total.',
      },
      {
        id: 'D',
        texto:
          'A intubação é contraindicada na epiglotite, devendo-se aguardar a ação de antibióticos orais por 72 horas em enfermaria geral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Protocolo de Controle da Via Aérea na Epiglotite Aguda:\n\n1. Abordagem Padronizada no Centro Cirúrgico:\n   - A intubação da criança com epiglotite NUNCA deve ser realizada na enfermaria ou sala de triagem de emergência a menos que haja parada respiratória em curso;\n   - A criança é transferida calmamente para o Centro Cirúrgico, acompanhada pelos pais para evitar o pânico;\n\n2. Técnica de Anestesia e Ventilação:\n   - Indução com anestésico inalatório (sevoflurano) e oxigênio a 100%, preservando a VENTILAÇÃO ESPONTÂNEA da criança (o bloqueador neuromuscular é evitado na indução porque a paralisia muscular pode colapsar completamente a via aérea supraglótica, impedindo ventilação com máscara);\n   - Laringoscopia delicada sob visão direta: identifica-se a epiglote globular vermelho-cereja edemaciada ("cereja madura") e insere-se um tubo endotraqueal habitualmente 0,5 a 1,0 mm menor que o previsto;\n\n3. Prontidão Cirúrgica Imediata:\n   - Um cirurgião pediátrico ou otorrinolaringologista paramentado com caixa cirúrgica aberta (cricotireoidostomia / traqueostomia) deve estar presente na sala pronto para intervir caso a visualização glótica seja impossível.',
    comentariosAlternativas: {
      A: 'Correta. Sintetiza magistralmente todos os preceitos de segurança internacional da intubação na epiglotite (centro cirúrgico, ventilação espontânea, prontidão para via aérea cirúrgica).',
      B: 'Incorreta. Intubação às cegas em corredor causaria perfuração da epiglote, sangramento maciço e morte por asfixia.',
      C: 'Incorreta. Não se realiza intubação em sala de exames sem suporte e TC de abdome não tem qualquer cabimento.',
      D: 'Incorreta. A intubação profilática é obrigatória em praticamente 100% das crianças com epiglotite verdadeira devido ao risco altíssimo de oclusão mecânica imprevisível.',
    },
  },
  {
    id: 'ped-est-031',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Aspecto Laringoscópico da Epiglote: "Cereja Madura"',
    isRevisao: false,
    enunciado:
      'Durante a laringoscopia direta sob anestesia inalatória em centro cirúrgico para intubação de uma criança de 4 anos com insuficiência respiratória alta aguda e febre alta, o anestesiologista visualiza uma epiglote maciçamente edematosa, globular, brilhante e de coloração vermelho-vivo intensa, obstruindo quase totalmente a entrada do vestíbulo laríngeo. Qual é a denominação consagrada desse aspecto macroscópico laringoscópico?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Epiglote em "cereja madura" (*cherry-red epiglottis*).',
      },
      {
        id: 'B',
        texto:
          'Epiglote em formato de "ômega" flexível.',
      },
      {
        id: 'C',
        texto:
          'Prega vocal com nódulos em "gota de orvalho".',
      },
      {
        id: 'D',
        texto:
          'Cartilagem cricoide em formato de "ampulheta de vidro".',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Aspecto Macroscópico: Epiglote em "Cereja Madura":\n\n1. Achado Anatomopatológico Característico:\n   - À laringoscopia direta, a epiglote normal é uma cartilagem delgada, em formato de folha, flexível e de coloração amarelo-pálida ou rosada translúcida;\n   - Na Epiglotite Aguda Bacteriana (supraglotite), a intensa celulite bacteriana e o edema vascular exuberante da submucosa frouxa da face lingual da epiglote transformam a estrutura em uma massa carnosa, brilhante, arredondada e de tonalidade vermelho-vivo ou vermelho-escarlate, comparada classicamente a uma cereja madura (*cherry-red epiglottis*) ou a um morango edemaciado;\n\n2. Estruturas Vizinhas Acometidas:\n   - O processo celulítico geralmente se estende para as pregas ariepiglóticas, aritenoides e valéculas (daí o termo mais preciso "Supraglotite").',
    comentariosAlternativas: {
      A: 'Correta. O aspecto em "cereja madura" é a descrição macroscópica laringoscópica clássica universal da epiglotite aguda.',
      B: 'Incorreta. Epiglote em formato de "ômega" colapsável é o achado típico de laringomalácia congênita.',
      C: 'Incorreta. Nódulos em gota de orvalho não existem na laringe (vesículas em gota de orvalho sobre pétala de rosa são da varicela cutânea).',
      D: 'Incorreta. Ampulheta de vidro não descreve achado laringoscópico de infecção supraglótica.',
    },
  },
  {
    id: 'ped-est-032',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Sinal do Polegar na Radiografia Lateral de Pescoço',
    isRevisao: false,
    enunciado:
      'Em situações clínicas em que a criança com suspeita de epiglotite aguda apresenta-se estável, sem estridor em repouso e sem desconforto ventilatório crítico, pode-se realizar radiografia simples das partes moles do pescoço em incidência lateral (perfil). Qual achado radiológico confirma o diagnóstico de epiglotite nessa incidência?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sinal do polegar (*thumbprint sign*), caracterizado pela sombra arredondada e espessada da epiglote inflamada que se projeta na coluna aérea da hipofaringe.',
      },
      {
        id: 'B',
        texto:
          'Sinal da torre de igreja, caracterizado pelo afunilamento simétrico subglótico.',
      },
      {
        id: 'C',
        texto:
          'Sinal do miolo de pão com pneumatoceles cervicais posteriores.',
      },
      {
        id: 'D',
        texto:
          'Calcificação do ligamento estilo-hioideo com síndrome de Eagle congênita.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Sinal do Polegar (*Thumbprint Sign*) no Raio-X de Perfil:\n\n1. Incidência Correta:\n   - Radiografia de pescoço / partes moles em incidência LATERAL (Perfil) rigorosamente posicionada;\n\n2. Características da Imagem:\n   - Epiglote normal: estrutura fina, delgada e afilada que se projeta em direção cranial;\n   - Na epiglotite: a sombra epiglótica torna-se anormalmente espessa, globosa, convexa e alargada, com contorno arredondado idêntico à falange distal de um dedo polegar humano (*Thumb sign*);\n   - Nota-se também espessamento das pregas ariepiglóticas e perda da valécula epiglótica;\n\n3. Cuidados Fundamentais:\n   - O exame só deve ser realizado se o paciente estiver clinicamente ESTÁVEL;\n   - A criança NUNCA deve ser enviada desacompanhada ao setor de radiologia: um médico experiente com material de via aérea deve acompanhar o paciente durante todo o trajeto.',
    comentariosAlternativas: {
      A: 'Correta. O sinal do polegar na incidência lateral é o achado radiológico patognomônico de epiglotite aguda.',
      B: 'Incorreta. Sinal da torre de igreja é visto na incidência AP no crupe viral subglótico.',
      C: 'Incorreta. Miolo de pão é achado fecal em radiografia de abdome.',
      D: 'Incorreta. Síndrome de Eagle é afecção de adultos associada à calcificação do ligamento estilo-hioideo com dor craniofacial crônica.',
    },
  },
  {
    id: 'ped-est-033',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Antibioticoterapia Parenteral de Escolha na Epiglotite',
    isRevisao: false,
    enunciado:
      'Após a obtenção de via aérea definitiva e estabilização de uma criança de 3 anos com epiglotite aguda bacteriana, qual é o esquema antimicrobiano parenteral intravenoso de primeira escolha preconizado pelas diretrizes da Sociedade Brasileira de Pediatria e IDSA para cobrir os principais agentes etiológicos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ceftriaxona intravenosa (80 a 100 mg/kg/dia) ou Cefotaxima IV; associando-se Oxacilina IV (ou Vancomicina IV se houver prevalência de MRSA) em caso de suspeita clínica ou bacterioscopia com estafilococo.',
      },
      {
        id: 'B',
        texto:
          'Metronidazol oral em dose única diária associado a nistatina tópica na língua.',
      },
      {
        id: 'C',
        texto:
          'Sulfametoxazol-Trimetoprima por via retal durante 30 dias sem internação.',
      },
      {
        id: 'D',
        texto:
          'Eritromicina oral em baixa dose associada a nebulização com água boricada.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Antibioticoterapia na Epiglotite Aguda Pediátrica:\n\n1. Espectro Antimicrobiano Obrigatório:\n   - Deve cobrir com máxima eficácia bactericida:\n     * Haemophilus influenzae tipo b produtor de beta-lactamase;\n     * Streptococcus pyogenes (Streptococcus do Grupo A);\n     * Streptococcus pneumoniae;\n     * Staphylococcus aureus;\n\n2. Fármacos de Primeira Escolha:\n   - CEFALOSPORINAS DE 3ª GERAÇÃO PARENTERAIS:\n     * Ceftriaxona IV (80 a 100 mg/kg/dia, 1x/dia, máx 2 g/dia) ou Cefotaxima IV (150 a 200 mg/kg/dia dividida de 6/6h);\n   - Se houver forte suspeita de Staphylococcus aureus (toxemia gravíssima, evolução necrosante ou MRSA comunitário local):\n     * Associar Oxacilina IV (para MSSA) ou Vancomicina IV / Clindamicina IV (para MRSA);\n\n3. Duração do Tratamento:\n   - Habitualmente 7 a 10 dias de terapia parenteral, ajustando conforme culturas de sangue ou swab da epiglote colhido em centro cirúrgico.',
    comentariosAlternativas: {
      A: 'Correta. Cobre adequadamente Haemophilus produtor de beta-lactamase e estreptococos com Ceftriaxona/Cefotaxima, com cobertura estafilocócica se necessário.',
      B: 'Incorreta. Metronidazol cobre apenas anaeróbios e nistatina é antifúngico; ineficazes contra os patógenos da epiglotite.',
      C: 'Incorreta. Epiglotite é emergência com bacteremia que exige antibiótico parenteral bactericida hospitalar.',
      D: 'Incorreta. Eritromicina oral e água boricada são totalmente ineficazes na sepse por celulite supraglótica aguda.',
    },
  },
  {
    id: 'ped-est-034',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Tempo de Extubação e Resolução da Epiglotite',
    isRevisao: false,
    enunciado:
      'Uma criança com epiglotite aguda bacteriana grave foi intubada com sucesso no centro cirúrgico e encontra-se na UTI Pediátrica recebendo Ceftriaxona intravenosa há 48 horas. Apresenta melhora clínica rápida, encontrando-se afebril há 24 horas, hemodinamicamente estável e sem secreções. Qual exame ou manobra médica é padronizado antes da extubação traqueal para confirmar com segurança que a via aérea pode ser extubada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Laringoscopia direta sob sedação na UTI (ou teste de escape aéreo positivo / "cuff leak test"), confirmando redução substancial do edema da epiglote e das pregas supraglóticas com passagem de ar ampla ao redor do tubo.',
      },
      {
        id: 'B',
        texto:
          'Extubação acidental pela equipe de enfermagem sem qualquer avaliação da laringe.',
      },
      {
        id: 'C',
        texto:
          'Realização de broncografia com contraste baritado espesso para verificar se o esôfago abriu.',
      },
      {
        id: 'D',
        texto:
          'Manutenção obrigatória do tubo traqueal por 6 meses para garantir que a cartilagem nunca mais inflame.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Critérios de Extubação Segura na Epiglotite Aguda:\n\n1. Resposta Rápida aos Antibióticos:\n   - Com antibioticoterapia intravenosa bactericida adequada (Ceftriaxona), a celulite epiglótica responde de forma surpreendentemente rápida, com lise térmica e resolução marcante do edema em 48 a 72 horas;\n\n2. Avaliação Pré-Extubação:\n   - Antes de retirar o tubo endotraqueal, é obrigatório documentar a desobstrução anatômica da via aérea;\n   - 1. Presença de escape aéreo peritubular (*cuff leak test* positivo ao desinsuflar o balonete ou com tubo sem balonete em pressões inspiratórias baixas);\n   - 2. Laringoscopia direta ou nasofibroscopia à beira do leito na UTI, confirmando que a epiglote regrediu de tamanho, perdeu o aspecto de cereja madura e a fenda glótica está amplamente visível;\n\n3. Tempo Típico de Intubação:\n   - A maioria das crianças é extubada com segurança entre 48 e 72 horas de internação.',
    comentariosAlternativas: {
      A: 'Correta. A laringoscopia direta ou teste de escape peritubular confirmando redução do edema após 48-72h de antibiótico é o protocolo seguro de extubação.',
      B: 'Incorreta. Extubação sem checar o edema pode levar a asfixia recorrente e reintubação catastrófica.',
      C: 'Incorreta. Bário é contraindicado na via aérea por risco de broncoaspiração química grave.',
      D: 'Incorreta. Manter o tubo por 6 meses causaria infecção hospitalar e estenose subglótica cicatricial.',
    },
  },
  {
    id: 'ped-est-035',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Quimioprofilaxia de Contactantes na Epiglotite por Hib',
    isRevisao: false,
    enunciado:
      'Um menino de 2 anos é hospitalizado com epiglotite aguda e hemocultura positiva para Haemophilus influenzae tipo b (Hib). A família reside em uma casa onde vivem os pais, um irmão de 11 meses de vida que recebeu apenas 1 dose da vacina pentavalente, e uma prima de 3 anos não vacinada. Em relação à quimioprofilaxia pós-exposição recomendada pelo Ministério da Saúde e CDC para prevenir doença invasiva por Hib nos contactantes domiciliares, qual é a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar quimioprofilaxia com Rifampicina oral para TODOS os contactantes domiciliares (inclusive os vacinados), visto que há na residência pelo menos um contato com menos de 4 anos de idade com esquema vacinal incompleto ou não vacinado; atualizar imediatamente a vacinação das crianças.',
      },
      {
        id: 'B',
        texto:
          'A quimioprofilaxia domiciliar para Hib está extinta e não deve ser prescrita para nenhum familiar em qualquer circunstância.',
      },
      {
        id: 'C',
        texto:
          'Administrar Amoxicilina oral por 30 dias exclusivamente para a mãe que amamenta.',
      },
      {
        id: 'D',
        texto:
          'Isolar toda a família em quarentena fechada de 1 ano sem medicação.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Quimioprofilaxia Pós-Exposição na Infecção Invasiva por Hib:\n\n1. Indicação Domiciliar de Rifampicina:\n   - Está indicada a quimioprofilaxia para TODOS OS CONTACTANTES DOMICILIARES (inclusive adultos e o próprio caso índice antes da alta) se no domicílio houver:\n     * Pelo menos um contactante menor de 4 anos de idade não vacinado ou com esquema vacinal incompleto contra Hib;\n     * OU qualquer criança imunodeprimida no domicílio, independentemente do status vacinal;\n\n2. Fármaco e Posologia Padronizados:\n   - RIFAMPICINA oral:\n     * Crianças: 20 mg/kg/dia em dose única diária (máx 600 mg/dia) por 4 dias consecutivos;\n     * Neonatos (< 1 mês): 10 mg/kg/dia por 4 dias;\n     * Adultos: 600 mg uma vez ao dia por 4 dias;\n   - A rifampicina atinge níveis salivares e de secreção mucosa faríngea elevados, erradicando o estado de portador são assintomático de Hib na nasofaringe e quebrando a cadeia de transmissão.',
    comentariosAlternativas: {
      A: 'Correta. Cita com precisão a indicação de quimioprofilaxia universal com rifampicina oral quando há crianças suscetíveis < 4 anos no domicílio.',
      B: 'Incorreta. A profilaxia com rifampicina permanece formalmente indicada nas diretrizes do Ministério da Saúde e CDC.',
      C: 'Incorreta. Amoxicilina oral não erradica o estado de carreador de Hib na nasofaringe de modo confiável; a droga de escolha é rifampicina.',
      D: 'Incorreta. Não existe indicação de quarentena de 1 ano; o tratamento profilático dura 4 dias.',
    },
  },
  {
    id: 'ped-est-036',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Ausência de Tosse Ladrante como Chave Diferencial',
    isRevisao: false,
    enunciado:
      'Em uma questão de prova de residência médica sobre emergências das vias aéreas pediátricas, qual dado anamnésico e semiológico clássico é o divisor de águas que MAIS FORTEMENTE AFASTA o diagnóstico de crupe viral típico e DIRECIONA a suspeita para epiglotite aguda ou abscesso profundo de pescoço?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ausência completa de tosse ladrante ("a criança não tosse"), acompanhada de disfagia intensa com sialorreia constante e postura cervical rígida/tripé.',
      },
      {
        id: 'B',
        texto:
          'Presença de tosse ladrante metálica em acessos noturnos isolados.',
      },
      {
        id: 'C',
        texto:
          'História de coriza hialina há 2 dias com febrícula de 37,6 °C.',
      },
      {
        id: 'D',
        texto:
          'Melhora rápida dos sintomas respiratórios com nebulização de adrenalina.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Ausência de Tosse Ladrante como Chave Semiológica Diferencial:\n\n1. O "Axioma Clínico" da Laringite vs Epiglotite:\n   - No CRUPE VIRAL (Laringotraqueíte): o processo inflamatório atinge a subglote e a traqueia; a tosse ladrante (*barking cough*) é o sintoma quase obrigatório e predominante;\n   - Na EPIGLOTITE AGUDA: a infecção é uma celulite confinada às estruturas supraglóticas (epiglote e pregas ariepiglóticas). A mucosa cricoide e a traqueia não estão inflamadas. Além disso, a odinofagia é tão excruciante que a criança INIBE VOLUNTARIAMENTE qualquer reflexo de tosse para não desencadear dor atroz;\n   - Portanto: "Criança toxêmica com estridor que NÃO TEM TOSSE LADRANTE e BABA continuamente tem EPIGLOTITE AGUDA até prova em contrário!".',
    comentariosAlternativas: {
      A: 'Correta. A ausência de tosse ladrante aliada à sialorreia e dor intensa de garganta é o sinal divisor clássico da epiglotite.',
      B: 'Incorreta. Tosse ladrante é o estigma principal do crupe viral, afastando epiglotite típica.',
      C: 'Incorreta. Pródromos catarrais prolongados com febrícula são característicos de infecção viral (crupe).',
      D: 'Incorreta. Melhora com adrenalina inalatória ocorre no crupe subglótico edematoso, não na epiglotite bacteriana avançada.',
    },
  },
  {
    id: 'ped-est-037',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Cricotireoidostomia por Punção com Agulha na Asfixia Iminente',
    isRevisao: false,
    enunciado:
      'Uma criança com epiglotite fulminante desenvolve colapso ventilatório imediato durante a indução na sala de emergência. A laringoscopia direta é tentada por dois especialistas experientes, mas a via aérea é completamente inabordável devido a sangramento friável e edema obstrutivo total ("não intubo, não ventilo com máscara"). O oxímetro acusa SpO2 de 50% e a frequência cardíaca cai para 40 bpm (bradicardia extrema pré-parada). Qual procedimento emergencial de resgate cirúrgico temporário de via aérea deve ser executado em segundos para salvar a vida da criança?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Cricotireoidostomia por punção com agulha/cateter calibroso (14G ou 16G) através da membrana cricotireóidea acoplada a fonte de oxigênio de alto fluxo sob ventilação a jato temporária (oxigenação transtraqueal percutânea).',
      },
      {
        id: 'B',
        texto:
          'Aguardar o efeito de uma dose de penicilina intramuscular por 4 horas.',
      },
      {
        id: 'C',
        texto:
          'Realização de punção lombar diagnóstica para pesquisa de meningococo.',
      },
      {
        id: 'D',
        texto:
          'Administração de carvão ativado por sonda nasogástrica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Resgate da Via Aérea Difícil: Cricotireoidostomia por Punção na Pediatria:\n\n1. O Cenário Crítico "Não Intubo, Não Ventilo":\n   - Diante do colapso completo da via aérea supraglótica sem possibilidade de ventilação por máscara ou intubação traqueal, a cricotireoidostomia cirúrgica aberta tradicional com bisturi é de altíssimo risco e tecnicamente desafiadora em crianças menores de 8 a 10 anos (devido à laringe móvel, cricoide diminuta e risco de estenose cricoide permanente);\n\n2. Conduta Padrão de Resgate Pediátrico:\n   - CRICOTIREOIDOSTOMIA POR PUNÇÃO COM CATETER DE ALTO CALIBRE (14G ou 16G):\n     * Palpa-se a depressão entre a cartilagem tireoide e a cartilagem cricoide (membrana cricotireóidea);\n     * Punciona-se no ângulo de 45° caudal aspirando ar com uma seringa com água para confirmar posicionamento intratraqueal;\n     * Conecta-se a cânula a uma fonte de oxigênio sob alta pressão (ventilação transtraqueal a jato);\n     * Esse método garante oxigenação de emergência por 30 a 45 minutos (embora elimine mal o CO2), tempo vital para que o cirurgião execute uma traqueostomia formal em centro cirúrgico com calma.',
    comentariosAlternativas: {
      A: 'Correta. A cricotireoidostomia percutânea por punção com cateter calibroso é a manobra de resgate padronizada para o cenário extremo de via aérea inabordável na pediatria.',
      B: 'Incorreta. A criança está em parada iminente por asfixia mecânica em segundos; antibiótico não desobstrui a via aérea.',
      C: 'Incorreta. Punção lombar em paciente em asfixia respiratória aguda seria negligência mortal.',
      D: 'Incorreta. Carvão ativado não trata obstrução laríngea e provocaria vômitos com aspiração.',
    },
  },
  {
    id: 'ped-est-038',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Diagnóstico Diferencial: Ingestão de Corpo Estranho Esofágico vs Epiglotite',
    isRevisao: false,
    enunciado:
      'Um lactente de 16 meses é trazido à emergência com disfagia súbita, recusa alimentar e salivação contínua (sialorreia) há 4 horas. Não apresenta febre (temperatura axilar = 36,8 °C), não tem tosse e está eupneico em repouso, mas fica desconfortável ao tentar engolir saliva. A mãe recorda que a criança estava brincando com a bolsa da avó antes de começar a babar. A radiografia cervical em incidência AP evidencia imagem circular radiopaca metálica no nível da vértebra C6-C7. Qual é a correlação diagnóstica e a distinção clínica fundamental com a epiglotite aguda?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Corpo estranho impactado no esôfago proximal (moeda ou bateria); diferencia-se da epiglotite aguda pela ausência de febre, instalação súbita associada a brincadeira sem pródromos, ausência de toxemia sistêmica e confirmação radiológica de objeto radiopaco no esôfago.',
      },
      {
        id: 'B',
        texto:
          'Epiglotite aguda bacteriana avançada com calcificação espontânea da epiglote em formato de moeda.',
      },
      {
        id: 'C',
        texto:
          'Crupe viral subglótico leve tratado com adrenalina inalatória.',
      },
      {
        id: 'D',
        texto:
          'Tétano neonatal crônico tratado com soro antitetânico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diferencial entre Sialorreia por Corpo Estranho Esofágico vs Epiglotite:\n\n1. Sialorreia sem Febre na Criança Pequena:\n   - Quando uma criança saudável subitamente para de engolir saliva e passa a babar profusamente (sialorreia) na AUSÊNCIA DE FEBRE e sem toxemia, a principal hipótese diagnóstica é CORPO ESTRANHO IMPACTADO NO ESÔFAGO (geralmente no primeiro estreitamento fisiológico esofágico - esfíncter esofagiano superior / músculo cricofaríngeo no nível de C6);\n\n2. Diferença com a Epiglotite:\n   - Epiglotite Aguda: cursa obrigatoriamente com FEBRE ALTA (39 °C a 40 °C), toxemia infecciosa grave, prostração extrema e dor de garganta;\n   - Corpo Estranho Esofágico: afebril, ativo, mas incapaz de deglutir;\n\n3. Radiografia e Manejo:\n   - A radiografia simples de pescoço, tórax e abdome localiza o objeto radiopaco (moeda, moeda de brinquedo, bateria tipo botão);\n   - Se for bateria de botão, a remoção endoscópica é de EMERGÊNCIA IMEDIATA (< 2 horas).',
    comentariosAlternativas: {
      A: 'Correta. Identifica com perfeição o corpo estranho esofágico e as chaves de diferenciação com a epiglotite (afebril, ausência de toxemia, imagem metálica radiopaca).',
      B: 'Incorreta. A epiglote é cartilagem e não calcifica em formato de moeda redonda na infância.',
      C: 'Incorreta. Crupe é laríngeo com tosse ladrante e rouquidão, sem objeto metálico no esôfago.',
      D: 'Incorreta. O paciente tem 16 meses (não é recém-nascido) e tem corpo estranho metálico esofágico.',
    },
  },
  {
    id: 'ped-est-039',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Uso Inadequado de Nebulização com Adrenalina na Epiglotite',
    isRevisao: false,
    enunciado:
      'No pronto atendimento pediátrico, um médico recém-formado atende uma criança com suspeita de epiglotite aguda (febre de 39,5 °C, sialorreia profusa, dor intensa e postura em tripé). O médico prescreve imediatamente nebulização com adrenalina associada a nebulização com salbutamol para "desobstruir a laringe". Em relação à nebulização com adrenalina na Epiglotite Aguda, o que determina a literatura médica especializada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A nebulização com adrenalina é ineficaz na epiglotite aguda porque o processo patológico é uma celulite bacteriana supurativa de tecidos profundos supraglóticos (e não mero edema vasomotor subglótico como no crupe); além disso, forçar uma máscara no rosto de uma criança em tripé gera estresse, pânico e choro, podendo precipitar obstrução respiratória fatal.',
      },
      {
        id: 'B',
        texto:
          'A adrenalina inalatória é o único tratamento necessário na epiglotite, dispensando intubação ou antibióticos em 100% dos casos.',
      },
      {
        id: 'C',
        texto:
          'A adrenalina cura a infecção por Haemophilus influenzae por ação citotóxica bactericida direta.',
      },
      {
        id: 'D',
        texto:
          'A nebulização com salbutamol deve ser feita a cada 5 minutos por 24 horas contínuas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Ineficácia e Riscos da Nebulização com Adrenalina na Epiglotite:\n\n1. Ineficácia Fisiopatológica:\n   - No crupe viral, o edema localiza-se na submucosa subglótica frouxa superficial e responde à vasoconstrição alfa-adrenérgica da adrenalina;\n   - Na epiglotite aguda, trata-se de uma verdadeira CELULITE BACTERIANA FLEGMONOSA COM INFILTRAÇÃO NEUTROFÍLICA PROFUNDA E TROMBOSE VASCULAR de toda a cartilagem epiglótica e pregas supraglóticas. A adrenalina tópica NÃO TEM EFEITO terapêutico sobre esse flegmão purulento profundo;\n\n2. Risco do Estresse e Luta contra a Máscara:\n   - Tentar colocar à força uma máscara plástica de inalação no rosto de uma criança que luta para respirar em postura de tripé causa agitação extrema, gritos e choro;\n   - Esse estresse gera esforço inspiratório violento com colapso dinâmico imediato da via aérea supraglótica edemaciada, podendo levar à asfixia mecânica imediata na sala de inalação.',
    comentariosAlternativas: {
      A: 'Correta. Explica com rigor a ineficácia biológica da adrenalina sobre a celulite bacteriana e o risco mortal de descompensar a criança com o estresse da inalação.',
      B: 'Incorreta. Adrenalina não trata epiglotite bacteriana; a base é intubação e antibiótico.',
      C: 'Incorreta. Adrenalina não possui atividade antibacteriana.',
      D: 'Incorreta. Salbutamol é broncodilatador de via aérea inferior e não atua na laringe, além de causar taquicardia desnecessária.',
    },
  },
  {
    id: 'ped-est-040',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Exames Laboratoriais na Epiglotite: Momento Seguro da Coleta',
    isRevisao: false,
    enunciado:
      'Uma criança com clínica clássica de epiglotite aguda grave chega ao pronto atendimento. A equipe de enfermagem prepara agulhas e tubos para coletar hemograma, proteína C reativa e hemoculturas imediatamente na sala de triagem. Qual deve ser a orientação do pediatra assistente quanto ao momento adequado para a realização de punções venosas e exames laboratoriais?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Adiar qualquer punção venosa dolorosa ou coleta de exames laboratoriais até que a via aérea definitiva esteja perfeitamente garantida e segura por intubação traqueal no centro cirúrgico sob anestesia.',
      },
      {
        id: 'B',
        texto:
          'Realizar imediatamente punção venosa em 4 membros ao mesmo tempo para obter sangue antes da parada respiratória inevitável.',
      },
      {
        id: 'C',
        texto:
          'Exames de sangue nunca devem ser coletados na epiglotite, pois o diagnóstico é feito exclusivamente por biópsia da traqueia.',
      },
      {
        id: 'D',
        texto:
          'Puncionar imediatamente a veia jugular externa com a criança amarrada em posição supina de cabeça para baixo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Prioridade Absoluta da Via Aérea sobre Exames Laboratoriais:\n\n1. O Princípio "Airway First":\n   - Na epiglotite aguda bacteriana, a única prioridade médica imediata é a MANUTENÇÃO E PROTEÇÃO DA VIA AÉREA;\n   - Nenhuma coleta laboratorial, hemograma, PCR ou gasometria arterial alterará a conduta inicial de urgência (que é garantir o tubo traqueal);\n\n2. Riscos das Punções Dolorosas na Triagem:\n   - Puncionar veias de crianças pequenas com agulhas gera dor intensa, pânico, choro estridente e agitação motora descontrolada;\n   - Em uma via aérea no limite crítico da oclusão anatômica por celulite supraglótica, a dor e o estresse desencadeiam laringoespasmo reflexo e parada respiratória obstrutiva imediata;\n\n3. Conduta Correta Padronizada:\n   - Adiar a punção venosa e as coletas para o Centro Cirúrgico, sendo realizadas APÓS A INDUÇÃO ANESTÉSICA INALATÓRIA E INTUBAÇÃO TRAQUEAL da criança, sem nenhuma dor ou choro.',
    comentariosAlternativas: {
      A: 'Correta. Expressa a regra de ouro de ouro da pediatria de emergência: a via aérea tem prioridade total; exames invasivos dolorosos são postergados para após a intubação sob anestesia.',
      B: 'Incorreta. Múltiplas punções dolorosas provocarão choro violento e asfixia imediata.',
      C: 'Incorreta. Hemoculturas são fundamentais para direcionar o antibiótico, mas devem ser colhidas após o controle da via aérea.',
      D: 'Incorreta. Puncionar jugular de cabeça para baixo forçará o decúbito e matará a criança por oclusão mecânica da epiglote.',
    },
  },
  {
    id: 'ped-est-041',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Vacina Pentavalente no PNI e Prevenção da Epiglotite',
    isRevisao: false,
    enunciado:
      'A prevenção da epiglotite aguda bacteriana causada pelo Haemophilus influenzae tipo b (Hib) está consolidada no Programa Nacional de Imunizações (PNI) do Brasil através de vacina combinada aplicada na infância. Qual é o imunobiológico e o esquema cronológico de administração preconizado pelo PNI no primeiro ano de vida para garantir proteção contra o Hib?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Vacina Pentavalente (DTP + HB + Hib) administrada aos 2, 4 e 6 meses de vida.',
      },
      {
        id: 'B',
        texto:
          'Vacina BCG administrada aos 12 meses de idade.',
      },
      {
        id: 'C',
        texto:
          'Vacina Tríplice Viral administrada aos 30 dias de vida.',
      },
      {
        id: 'D',
        texto:
          'Vacina Febre Amarela em dose única anual dos 2 aos 18 anos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Imunização contra Haemophilus influenzae tipo b no Brasil:\n\n1. Vacina Pentavalente do PNI:\n   - Imunobiológico conjugado que protege simultaneamente contra 5 doenças graves: Difteria, Tétano, Coqueluche (*Pertussis* de células inteiras), Hepatite B e infecções invasivas por *Haemophilus influenzae* tipo b (meningite, sepse, celulite, artrite séptica e epiglotite);\n\n2. Esquema Básico Padronizado:\n   - 1ª dose: aos 2 meses de vida;\n   - 2ª dose: aos 4 meses de vida;\n   - 3ª dose: aos 6 meses de vida;\n   - Esse esquema confere eficácia protetora superior a 95% a 99% contra a epiglotite aguda bacteriana por Hib.',
    comentariosAlternativas: {
      A: 'Correta. A vacina Pentavalente aplicada aos 2, 4 e 6 meses de vida é a responsável pela imunização contra o Hib no PNI.',
      B: 'Incorreta. BCG protege contra formas graves de tuberculose e é feita ao nascer.',
      C: 'Incorreta. Tríplice viral protege contra sarampo, caxumba e rubéola e é administrada aos 12 meses.',
      D: 'Incorreta. Febre amarela é administrada aos 9 meses com reforço aos 4 anos.',
    },
  },
  {
    id: 'ped-est-042',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Características da Voz e da Deglutição: Epiglotite vs Crupe',
    isRevisao: false,
    enunciado:
      'Ao avaliar a voz e o padrão respiratório de duas crianças atendidas na mesma noite no pronto-socorro infantil com queixa de estridor:\n- Criança 1: tosse metálica estridente contínua, rouquidão nítida ao chorar, engolindo saliva normalmente sem babar e aceitando líquidos;\n- Criança 2: não tosse, voz apagada e abafada ("como se falasse com a boca cheia de comida quente"), saliva escorrendo continuamente pela comissura labial e recusa total de deglutição.\n\nQual é a correlação diagnóstica exata para cada um dos dois pacientes?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Criança 1: Crupe Viral (Laringite Subglótica); Criança 2: Epiglotite Aguda Bacteriana (Supraglotite).',
      },
      {
        id: 'B',
        texto:
          'Criança 1: Epiglotite Aguda; Criança 2: Crupe Viral.',
      },
      {
        id: 'C',
        texto:
          'Ambas têm crupe viral leve e devem receber apenas inalação com soro fisiológico domiciliar.',
      },
      {
        id: 'D',
        texto:
          'Ambas têm abscesso dentário mandibular unilateral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Correlação Semiológica: Crupe Viral vs Epiglotite Aguda:\n\n1. Criança 1: Crupe Viral (Laringite Subglótica):\n   - O edema subglótico atinge as cordas vocais, gerando rouquidão proeminente e a clássica tosse ladrante metálica;\n   - A faringe e a epiglote estão preservadas, de modo que a deglutição é preservada e NÃO HÁ sialorreia;\n\n2. Criança 2: Epiglotite Aguda (Supraglotite):\n   - O flegmão supraglótico massivo atinge a epiglote e a faringe, tornando a deglutição insuportavelmente dolorosa (sialorreia constante profusa);\n   - A voz torna-se abafada e gutural em "batata quente" (*hot potato voice*);\n   - A tosse é ausente porque a subglote está livre e a criança evita tossir pela dor atroz.',
    comentariosAlternativas: {
      A: 'Correta. Diferencia perfeitamente o crupe (tosse ladrante, sem sialorreia) da epiglotite (voz abafada, sialorreia profusa, sem tosse).',
      B: 'Incorreta. Inverteu os diagnósticos clássicos.',
      C: 'Incorreta. A criança 2 tem epiglotite aguda, uma emergência com risco iminente de asfixia que jamais deve ser liberada para domicílio.',
      D: 'Incorreta. Não se trata de abscesso dentário; os quadros são de obstrução de via aérea superior.',
    },
  },
  {
    id: 'ped-est-043',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Tomografia de Pescoço na Epiglotite: Riscos e Indicação',
    isRevisao: false,
    enunciado:
      'Um médico plantonista atende uma criança com suspeita de epiglotite aguda e, para ter certeza do diagnóstico antes de chamar a equipe cirúrgica, prescreve uma Tomografia Computadorizada (TC) de pescoço com contraste e encaminha a criança à sala de tomografia deitada em decúbito dorsal na maca. Em relação a essa conduta, qual é a crítica médica formal estabelecida pelos consensos de emergência pediátrica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A conduta foi extremamente perigosa e incorreta; a criança com epiglotite nunca deve ser deitada em decúbito dorsal na mesa de tomografia nem afastada de suporte ventilatório avançado, pois o decúbito plano induz oclusão mecânica imediata da glote pela epiglote edemaciada, podendo causar parada respiratória fatal no túnel do tomógrafo.',
      },
      {
        id: 'B',
        texto:
          'A conduta foi perfeita, pois a tomografia é obrigatória antes de qualquer conduta ventilatória em 100% dos pacientes com estridor.',
      },
      {
        id: 'C',
        texto:
          'O erro foi não ter administrado bário via oral antes da tomografia para contrastar a traqueia.',
      },
      {
        id: 'D',
        texto:
          'A tomografia de pescoço cura a epiglotite bacteriana pela emissão de elétrons ionizantes esterilizantes.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Risco Fatal da Tomografia na Epiglotite sem Via Aérea Garantida:\n\n1. O Perigo do Decúbito Dorsal Forçado no Tomógrafo:\n   - Para realizar a tomografia computadorizada, o paciente precisa ficar obrigatoriamente deitado em decúbito dorsal estrito, com a cabeça estendida e imóvel dentro do aparelho, em uma sala isolada e com pouca iluminação;\n   - Em uma criança com epiglotite sem intubação prévia, a gravidade faz com que a epiglote volumosamente edematosa tombe para trás e bloqueie completamente a fenda glótica;\n   - Além disso, a criança sofre em pânico pela separação dos pais, precipitando asfixia súbita e parada respiratória dentro do túnel do tomógrafo;\n\n2. Regra Fundamental:\n   - O diagnóstico da epiglotite aguda é CLÍNICO. Se houver necessidade de tomografia (por exemplo, para investigar abscesso epiglótico ou abscesso retrofaríngeo associado), o exame SÓ PODE SER REALIZADO APÓS A INTUBAÇÃO TRAQUEAL DEFINITIVA E ESTABILIZAÇÃO DA CRIANÇA.',
    comentariosAlternativas: {
      A: 'Correta. Aponta o risco mortal da posição supina e do isolamento no tomógrafo sem via aérea protegida.',
      B: 'Incorreta. TC nunca é obrigatória antes do controle de via aérea na epiglotite e seu atraso causa óbito.',
      C: 'Incorreta. Administrar bário oral em paciente com disfagia aguda causaria broncoaspiração maciça letal.',
      D: 'Incorreta. Radiação ionizante não esteriliza infecções bacterianas agudas in vivo.',
    },
  },
  {
    id: 'ped-est-044',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Celulite Supraglótica: Extensão e Abscesso de Epiglote',
    isRevisao: false,
    enunciado:
      'Em adolescentes e adultos jovens acometidos por epiglotite (geralmente por Streptococcus pyogenes ou Staphylococcus aureus), uma complicação supurativa localizada grave pode ocorrer na face lingual da epiglote, exigindo drenagem cirúrgica além de antibioticoterapia. Qual é essa complicação?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Abscesso epiglótico.',
      },
      {
        id: 'B',
        texto:
          'Laringomalácia adquirida.',
      },
      {
        id: 'C',
        texto:
          'Estenose congênita de cordas vocais.',
      },
      {
        id: 'D',
        texto:
          'Paralisia atrófica do nervo frênico esquerdo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Abscesso Epiglótico na Supraglotite:\n\n1. Fisiopatologia e Ocorrência em Crianças Maiores e Adultos:\n   - Embora a epiglotite clássica infantil seja uma celulite difusa homogênea da epiglote, em adolescentes e adultos pode haver liquefação purulenta focal com formação de uma coleção encapsulada: o Abscesso Epiglótico (geralmente na valécula ou na face lingual da epiglote);\n\n2. Manifestação e Conduta:\n   - Febre persistente, dor excruciante na deglutição e massa flutuante visualizada à nasofibrolaringoscopia ou tomografia computadorizada contrastada;\n   - Conduta: drenagem cirúrgica sob visão direta (punção ou incisão com aspiração) associada à antibioticoterapia parenteral de amplo espectro para prevenir rotura espontânea e asfixia por inundação purulenta da via aérea.',
    comentariosAlternativas: {
      A: 'Correta. O abscesso epiglótico é a complicação purulenta focal clássica da supraglotite em adolescentes e adultos.',
      B: 'Incorreta. Laringomalácia é defeito congênito de hipotonia cartilaginosa em lactentes, não complicação supurativa.',
      C: 'Incorreta. Estenose congênita decorre de anomalia embrionária presente ao nascimento.',
      D: 'Incorreta. O nervo frênico inerva o diafragma e passa no mediastino, não na epiglote.',
    },
  },
  {
    id: 'ped-est-045',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Causas de Epiglotite Não Infecciosa: Queimaduras Térmicas e Cáusticas',
    isRevisao: false,
    enunciado:
      'Uma criança de 2 anos dá entrada com estridor, sialorreia e dor intensa de garganta de início súbito após ingerir inadvertidamente água fervente que estava em uma caneca sobre a mesa. O exame revela queimaduras na cavidade oral e edema supraglótico acentuado simulando epiglotite infecciosa. Além de queimaduras térmicas por líquidos superaquecidos, qual outra causa não infecciosa pode induzir epiglotite/supraglotite química aguda na infância?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ingestão acidental de substâncias químicas cáusticas (soda cáustica, desincrustantes alcalinos de forno) e aspiração de vapores cáusticos tóxicos.',
      },
      {
        id: 'B',
        texto:
          'Excesso de ingestão de vitamina C em comprimidos efervescentes.',
      },
      {
        id: 'C',
        texto:
          'Uso excessivo de pasta de dente sem flúor durante a escovação noturna.',
      },
      {
        id: 'D',
        texto:
          'Ingestão crônica de leite materno com alto teor de lactose.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Epiglotite / Supraglotite Não Infecciosa (Térmica e Cáustica):\n\n1. Ingestão de Líquidos Ferventes ou Vapores Térmicos:\n   - Crianças que engolem líquidos superaquecidos (água fervendo, sopa quente, leite de micro-ondas superaquecido) sofrem queimadura direta na orofaringe, epiglote e valécula;\n   - Instala-se edema inflamatório térmico maciço em minutos a horas, com estridor inspiratório grave e risco de asfixia idêntico à epiglotite infecciosa;\n\n2. Ingestão de Agentes Cáusticos (Álcalis e Ácidos Fortes):\n   - Soda cáustica (hidróxido de sódio), limpadores alcalinos e pilhas alcalinas causam necrose por liquefação profunda e edema transmural da via aérea superior;\n\n3. Conduta de Emergência:\n   - Monitorização rigorosa da via aérea e intubação precoce antes que o edema atinja o pico e impossibilite a visualização das cordas vocais.',
    comentariosAlternativas: {
      A: 'Correta. Identifica as queimaduras térmicas e químicas cáusticas como causas não infecciosas consagradas de supraglotite edematosa aguda.',
      B: 'Incorreta. Vitamina C não causa necrose nem edema supraglótico asfixiante.',
      C: 'Incorreta. Pasta de dente não é cáustica nem causa laringite obstrutiva.',
      D: 'Incorreta. Leite materno é o alimento biológico ideal e não causa queimaduras térmicas ou químicas.',
    },
  },
  {
    id: 'ped-est-046',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Papel do Corticoide na Epiglotite: Verdades e Mitos',
    isRevisao: false,
    enunciado:
      'Diferentemente do crupe viral, no qual a corticoterapia com dexametasona é o pilar terapêutico consensual de eficácia máxima comprovada em todos os estudos, qual é o papel e o nível de evidência científica do uso de corticoides sistêmicos na Epiglotite Aguda Bacteriana?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Não há evidências clínicas robustas que comprovem que o corticoide reduza o tempo de intubação ou a morbimortalidade na epiglotite bacteriana; seu uso é controverso e secundário, jamais devendo atrasar a prioridade máxima absoluta de proteção da via aérea e antibioticoterapia.',
      },
      {
        id: 'B',
        texto:
          'O corticoide é o único tratamento necessário na epiglotite, substituindo totalmente a necessidade de antibióticos e de intubação.',
      },
      {
        id: 'C',
        texto:
          'O corticoide está estritamente proibido pela OMS por causar lise instantânea da cartilagem epiglótica.',
      },
      {
        id: 'D',
        texto:
          'O corticoide cura a bacteremia por Haemophilus em 15 minutos se administrado por via inalatória.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Corticoterapia na Epiglotite Aguda: Evidência Limitada:\n\n1. Comparação com o Crupe Viral:\n   - No crupe viral: a dexametasona tem nível de evidência I-A (reduz morbidade, hospitalizações e necessidade de adrenalina);\n   - Na epiglotite bacteriana: ensaios clínicos controlados nunca demonstraram benefício estatisticamente significativo do uso de corticoides na redução do tempo total de intubação ou desfechos clínicos;\n\n2. Prática Clínica Atual:\n   - Embora muitos clínicos associem uma dose de corticoide na tentativa empírica de diminuir o edema tecidual circundante, as diretrizes internacionais enfatizam que:\n     * 1º MANEJO DA VIA AÉREA (Intubação);\n     * 2º ANTIBIOTICOTERAPIA PARENTERAL IMEDIATA;\n     * Corticoides são coadjuvantes opcionais sem evidência comprovada e NUNCA devem atrasar as medidas primordiais.',
    comentariosAlternativas: {
      A: 'Correta. Reflete com fidelidade a medicina baseada em evidências: corticoides não têm comprovação científica na epiglotite bacteriana e não substituem intubação nem antibiótico.',
      B: 'Incorreta. Corticoide não esteriliza bactérias nem previne asfixia sem intubação.',
      C: 'Incorreta. Não há proibição por lise de cartilagem, apenas falta de evidência de benefício inequívoco.',
      D: 'Incorreta. Corticoides são anti-inflamatórios, não antimicrobianos bactericidas.',
    },
  },
  {
    id: 'ped-est-047',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Imunodeprimidos e Agentes Atípicos de Epiglotite',
    isRevisao: false,
    enunciado:
      'Um menino de 6 anos com diagnóstico de Leucemia Linfoblástica Aguda em vigência de quimioterapia imunossupressora profunda (neutropenia febril com contagem de neutrófilos de 150/mm³) desenvolve quadro agudo de dor de garganta intensa, sialorreia e estridor inspiratório. A laringoscopia em centro cirúrgico revela epiglote com exsudato ulcerativo esbranquiçado e necrose tecidual superficial. Em pacientes imunodeprimidos e neutropênicos graves, quais patógenos oportunistas adicionais fúngicos e bacterianos devem ser cobertos no diagnóstico diferencial da supraglotite?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Candida albicans, espécies de Aspergillus e bacilos Gram-negativos hospitalares como Pseudomonas aeruginosa.',
      },
      {
        id: 'B',
        texto:
          'Ascaris lumbricoides e Giardia lamblia exclusivamente.',
      },
      {
        id: 'C',
        texto:
          'Vírus da febre amarela transmitido por transfusão de plaquetas.',
      },
      {
        id: 'D',
        texto:
          'Corynebacterium parvum de linhagem vacinal atenuada.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Epiglotite em Pacientes Imunodeprimidos e Neutropênicos:\n\n1. Patógenos Incomuns e Oportunistas:\n   - Em crianças sob quimioterapia aplasiante ou transplantadas com neutropenia profunda (< 500 neutrófilos/mm³), o espectro microbiológico da epiglotite/supraglotite expande-se dramaticamente;\n   - 1. Fungos: Candida spp. (Candida albicans, Candida tropicalis) e fungos filamentosos angioinvasivos (Aspergillus fumigatus, Mucorales), causando necrose tecidual fulminante com escaras negras;\n   - 2. Bactérias Gram-negativas: Pseudomonas aeruginosa (ectima gangrenoso laríngeo), Enterobacteriaceae e germes multirresistentes;\n   - 3. Vírus herpéticos: Herpes Simplex (HSV) e Citomegalovírus (CMV);\n\n2. Conduta Terapêutica Empírica:\n   - Cobertura antipseudomonas (Cefepime, Meropenem ou Piperacilina-Tazobactam) associada a cobertura antifúngica parenteral (Anfotericina B lipossomal ou Equinocandina / Voriconazol).',
    comentariosAlternativas: {
      A: 'Correta. Identifica Candida, Aspergillus e Pseudomonas como os grandes agentes oportunistas e necrosantes no neutropênico com epiglotite.',
      B: 'Incorreta. Helmintos e protozoários intestinais não causam celulite necrosante supraglótica.',
      C: 'Incorreta. Febre amarela é flavivírus transmitido por mosquitos vetores e não causa epiglotite com placas necróticas.',
      D: 'Incorreta. Agente irrelevante no contexto de infecção oportunista laríngea.',
    },
  },
  {
    id: 'ped-est-048',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Complicações Sistêmicas da Epiglotite: Sepse e Edema Pulmonar por Pressão Negativa',
    isRevisao: false,
    enunciado:
      'Logo após a intubação orotraqueal bem-sucedida de uma criança com epiglotite aguda que vinha apresentando esforço inspiratório violento contra a glote obstruída há horas, a equipe observa a exteriorização imediata de grande quantidade de secreção rósea espumosa pelo tubo traqueal, associada a estertores crepitantes bilaterais difusos e queda da SpO2 para 86%. Qual complicação pulmonar mecânica aguda instalou-se após o alívio abrupto da obstrução laríngea superior?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Edema Pulmonar por Pressão Negativa (Edema Pulmonar Pós-Obstrutivo), resultante das pressões intratorácicas negativas extremas geradas durante as tentativas vigorosas de inspiração contra a glote fechada, com aumento do retorno venoso e transudação capilar alveolar maciça.',
      },
      {
        id: 'B',
        texto:
          'Embolia gordurosa maciça por fratura espontânea do osso hioide.',
      },
      {
        id: 'C',
        texto:
          'Pneumotórax bilateral aberto hipertensivo decorrente do choro na maca.',
      },
      {
        id: 'D',
        texto:
          'Hemorragia digestiva alta varicosa exteriorizada retrogradamente pelo brônquio.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Edema Pulmonar por Pressão Negativa (EPPN) / Pós-Obstrutivo:\n\n1. Fisiopatologia do EPPN:\n   - Ocorre em crianças e adultos jovens com grande massa muscular torácica que realizam esforços inspiratórios vigorosos e repetidos contra uma via aérea superior completamente obstruída (manobra de Mueller forçada: na epiglotite, crupe grave, laringoespasmo ou aspiração de corpo estranho);\n   - Esses esforços geram pressões pleurais intensamente negativas (chegando a -50 a -100 cmH2O);\n   - Efeitos hemodinâmicos:\n     * Aumento maciço do retorno venoso ao ventrículo direito;\n     * Aumento drástico do gradiente de pressão hidrostática transcapilar pulmonar;\n     * Deslocamento do septo interventricular para a esquerda diminuindo o débito cardíaco;\n   - Imediatamente após a desobstrução mecânica pela intubação, o sangue venoso represado inunda a microcirculação pulmonar gerando transudação alveolar aguda;\n\n2. Manifestação Clínica e Manejo:\n   - Secreção espumosa rósea/rósea-clara pelo tubo, hipoxemia súbita e infiltrado alveolar difuso bilateral em "asa de borboleta";\n   - Tratamento: Ventilação mecânica com PEEP (Pressão Positiva Expiratória Final de 8 a 12 cmH2O) para manter os alvéolos abertos e reverter a transudação fluida, habitualmente com resolução completa em 24 a 48 horas.',
    comentariosAlternativas: {
      A: 'Correta. Descreve com perfeição a fisiopatologia e a apresentação clássica do edema pulmonar por pressão negativa (pós-obstrutivo) na via aérea pediátrica.',
      B: 'Incorreta. Embolia gordurosa decorre de fratura de ossos longos (fêmur) com invasão medular venosa, não de obstrução laríngea.',
      C: 'Incorreta. Pneumotórax cursa com abolição do murmúrio vesicular e timpanismo unilateral, sem secreção rósea espumosa bilateral.',
      D: 'Incorreta. Sangramento digestivo iria para o estômago e boca, não saindo puramente pelo interior do tubo endotraqueal como fluido alveolar róseo espumoso.',
    },
  },
  {
    id: 'ped-est-049',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Síntese de Diagnósticos Diferenciais das Obstruções Agudas',
    isRevisao: false,
    enunciado:
      'Em uma emergência pediátrica, quatro crianças chegam simultaneamente com ruídos respiratórios altos. Correlacione cada descrição clínica ao seu respectivo diagnóstico definitivo:\n- Paciente 1: Pré-escolar de 3 anos com tosse ladrante, estridor inspiratório rude em repouso e febrícula, melhorando após adrenalina e dexametasona;\n- Paciente 2: Criança de 4 anos com febre de 40 °C, toxemia, sem tosse, sialorreia constante e postura em tripé;\n- Paciente 3: Lactente de 18 meses com crupe prévio que evolui com febre alta secundária, tosse com secreção purulenta e refratariedade à adrenalina;\n- Paciente 4: Menino de 2 anos previamente sadio que engasga com amendoim e apresenta tosse súbita com sibilância e estridor unilateral assimétrico.\n\nQual é a ordem correta dos diagnósticos?',
    alternativas: [
      {
        id: 'A',
        texto:
          '1: Crupe Viral; 2: Epiglotite Aguda; 3: Traqueíte Bacteriana; 4: Aspiração de Corpo Estranho.',
      },
      {
        id: 'B',
        texto:
          '1: Epiglotite Aguda; 2: Crupe Viral; 3: Aspiração de Corpo Estranho; 4: Traqueíte Bacteriana.',
      },
      {
        id: 'C',
        texto:
          '1: Traqueíte Bacteriana; 2: Abscesso Dentário; 3: Crupe Espasmódico; 4: Asma Brônquica.',
      },
      {
        id: 'D',
        texto:
          '1: Laringomalácia; 2: Crupe Viral; 3: Epiglotite Aguda; 4: Difteria Laríngea.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Síntese Comparativa das Grandes Emergências de Obstrução da Via Aérea Superior:\n\n1. Paciente 1: Crupe Viral (Laringotraqueíte Aguda) -> Tosse ladrante, estridor inspiratório, excelente resposta à adrenalina e corticoide;\n2. Paciente 2: Epiglotite Aguda Bacteriana -> Instalação fulminante, febre alta tóxica, ausência de tosse, sialorreia profusa (*drooling*) e postura protetora em tripé;\n3. Paciente 3: Traqueíte Bacteriana -> Piora secundária supurativa após crupe viral prévio, secreção purulenta espessa, falha terapêutica à adrenalina;\n4. Paciente 4: Aspiração de Corpo Estranho -> História aguda de engasgo com oleaginosa (amendoim), sintomas respiratórios assimétricos e unilaterais.',
    comentariosAlternativas: {
      A: 'Correta. Correlaciona perfeitamente os quatro grandes cenários clínicos clássicos da emergência respiratória pediátrica.',
      B: 'Incorreta. Troca crupe com epiglotite e inverte corpo estranho com traqueíte.',
      C: 'Incorreta. Confunde todas as patologias e cita abscesso dentário de forma descabida.',
      D: 'Incorreta. Laringomalácia é doença congênita crônica de lactentes jovens, não quadro agudo febril com tosse ladrante.',
    },
  },
  {
    id: 'ped-est-050',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Caso Clínico Integrador: Manejo Global da Epiglotite Aguda',
    isRevisao: false,
    enunciado:
      'Uma menina de 3 anos é trazida nos braços do pai à emergência pediátrica de um hospital terciário. A criança apresenta febre de 39,9 °C iniciada há 8 horas, prostração intensa, recusa de água, respiração rápida e estridor inspiratório abafado. Mantém-se sentada inclinada para frente no colo paterno, de boca aberta e queixo estendido, babando ininterruptamente sem emitir tosse. Ao se aproximar para examiná-la, qual deve ser o plano de conduta IMEDIATO E INTEGRADO de máxima segurança executado pela equipe médica?',
    alternativas: [
      {
        id: 'A',
        texto:
          '1. Manter a criança sentada no colo do pai na posição de preferência, sem conter ou deitar; 2. Ofertar oxigênio umidificado passivo por máscara sem tocá-la com força; 3. Não usar abaixador de língua, não forçar visualização orofaríngea e não realizar punções dolorosas na sala de emergência; 4. Notificar imediatamente o Centro Cirúrgico, cirurgião pediátrico e anestesiologista para intubação orotraqueal eletiva sob anestesia inalatória em ventilação espontânea com equipe a postos para via aérea cirúrgica; 5. Iniciar antibioticoterapia parenteral (Ceftriaxona IV) logo após o controle seguro da via aérea.',
      },
      {
        id: 'B',
        texto:
          'Deitar a criança na maca de triagem, puncionar duas veias periféricas com agulha calibrosa, colher gasometria arterial e introduzir abaixador de língua de madeira para inspecionar as amígdalas antes de decidir se chama o anestesista.',
      },
      {
        id: 'C',
        texto:
          'Realizar nebulização com 3 ampolas de adrenalina e 2 de salbutamol e liberar a criança para tratamento ambulatorial com amoxicilina oral por 10 dias.',
      },
      {
        id: 'D',
        texto:
          'Realizar cricotireoidostomia com caneta esferográfica imediatamente na recepção do hospital e suspender qualquer suporte de oxigênio.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Caso Clínico Integrador: Manejo Padrão-Ouro da Epiglotite Aguda na Emergência:\n\n1. Preservação do Conforto e Posição Espontânea:\n   - A criança NUNCA deve ser separada dos pais, contida ou forçada a deitar em decúbito dorsal;\n   - A postura em tripé é o mecanismo que impede a asfixia mecânica imediata;\n\n2. Oxigenação Suave sem Estresse:\n   - Oferecer oxigênio passivo em fluxo livre (*blow-by*), mantendo a fonte próxima à face sem pressionar máscaras plásticas que gerem agitação e pânico;\n\n3. Abstenção de Procedimentos Invasivos na Triagem:\n   - Proibição absoluta de abaixadores de língua, exames faríngeos forçados ou punções venosas na sala de atendimento geral;\n\n4. Mobilização Imediata do Centro Cirúrgico e Anestesiologia:\n   - O paciente deve ser transportado calmamente, no colo do pai, direto para a sala cirúrgica;\n   - Intubação orotraqueal sob anestesia inalatória (sevoflurano), mantendo respiração espontânea, com instrumental de traqueostomia/cricotireoidostomia aberto no campo por cirurgião a postos;\n\n5. Antibioticoterapia Parenteral e Cuidados Críticos:\n   - Após a via aérea estar segura, instalam-se acessos venosos, colhem-se hemoculturas e inicia-se Ceftriaxona IV (80 a 100 mg/kg/dia), transferindo a criança para a UTI Pediátrica.',
    comentariosAlternativas: {
      A: 'Correta. Sintetiza com maestria, precisão cirúrgica e total segurança clínica todas as etapas preconizadas nos protocolos mundiais de suporte avançado de vida pediátrico (PALS) para a epiglotite aguda.',
      B: 'Incorreta. Conter a criança, forçar o decúbito dorsal e usar abaixador de língua causará asfixia fatal na triagem.',
      C: 'Incorreta. Adrenalina é ineficaz na celulite supraglótica e dar alta para epiglotite resulta em óbito domiciliar.',
      D: 'Incorreta. Manobra aberrante de cinema com caneta esferográfica laceraria grandes vasos cervicais.',
    },
  },
  {
    id: 'ped-est-051',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Traqueíte Bacteriana: O Cenário do "Crupe que Desandou"',
    isRevisao: false,
    enunciado:
      'Um menino de 2 anos e meio foi levado ao pronto-atendimento há 3 dias com tosse ladrante e febrícula, recebendo diagnóstico de crupe viral e uma dose de dexametasona oral com melhora moderada inicial. No entanto, nas últimas 12 horas a criança apresentou piora dramática: picos de febre alta (39,6 °C), toxemia importante, prostração, e a tosse anteriormente seca tornou-se úmida e produtiva com secreção purulenta espessa. A criança apresenta estridor bifásico (inspiratório e expiratório) grave em repouso com retração de fúrcula e batimento de asa de nariz. Foram realizadas duas nebulizações sucessivas com adrenalina 1:1.000 sem qualquer resposta clínica ou alívio do desconforto. Qual é a principal hipótese diagnóstica e a fisiopatologia dessa evolução?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Traqueíte Bacteriana (Laringotraqueíte Pseudomembranosa); decorrente de sobreinfecção bacteriana secundária da mucosa respiratória previamente desnudada e lesionada por infecção viral (Parainfluenza ou Influenza), com invasão bacteriana profunda da traqueia subglótica e formação de secreção purulenta e pseudomembranas obstrutivas.',
      },
      {
        id: 'B',
        texto:
          'Crupe espasmódico leve; decorrente de alergia alimentar transitória com indicação de anti-histamínico.',
      },
      {
        id: 'C',
        texto:
          'Asma brônquica atópica pura com broncoespasmo grave respondendo apenas a sulfato de magnésio.',
      },
      {
        id: 'D',
        texto:
          'Laringomalácia congênita primária que se descompensou subitamente por estresse emocional.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Traqueíte Bacteriana (Laringotraqueobronquite Pseudomembranosa):\n\n1. O Fenômeno Clínico do "Crupe que Desandou":\n   - Apresentação clássica e mais comum: infecção bacteriana secundária que se instala após pródromos virais típicos de crupe de 2 a 5 dias (Parainfluenza tipos 1, 2 e 3, Vírus Sincicial Respiratório ou Influenza);\n   - A infecção viral primária causa necrose do epitélio ciliar e desnudamento da lâmina própria da mucosa traqueal, criando uma porta de entrada ideal para a proliferação bacteriana bacterêmica ou ascendente;\n\n2. Sinais Cardinais de Alerta de Traqueíte Bacteriana:\n   - 1. Piora abrupta e toxicidade sistêmica: retorno da febre alta (39 a 40 °C), toxemia e prostração;\n   - 2. Modificação da Tosse: a tosse seca ladrante transforma-se em tosse produtiva com expectoração mucopurulenta espessa ou crostas;\n   - 3. Refratariedade Absoluta aos Tratamentos Convencionais do Crupe: o paciente NÃO RESPONDE a doses repetidas de adrenalina inalatória nem a corticoides sistêmicos;\n   - 4. Estridor Bifásico e Desconforto Respiratório Progressivo: o acúmulo de secreção purulenta espessa e pseudomembranas fibrinosas oclui mecanicamente a luz da traqueia subglótica.',
    comentariosAlternativas: {
      A: 'Correta. Identifica com precisão a fisiopatologia da traqueíte bacteriana como sobreinfecção bacteriana secundária a crupe prévio e refratária à adrenalina.',
      B: 'Incorreta. Crupe espasmódico não cursa com febre de 39,6 °C, secreção purulenta espessa nem toxemia.',
      C: 'Incorreta. Asma afeta vias aéreas inferiores com sibilos expiratórios difusos, e não estridor laríngeo alto com secreção traqueal.',
      D: 'Incorreta. Laringomalácia é afecção congênita de lactentes jovens sem febre ou secreção purulenta.',
    },
  },
  {
    id: 'ped-est-052',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Microbiologia da Traqueíte Bacteriana',
    isRevisao: false,
    enunciado:
      'Em relação à etiologia microbiológica da Traqueíte Bacteriana Pediátrica, qual microrganismo bacteriano é isolado com maior frequência nas culturas de secreção traqueal e aspirados broncoscópicos, destacando-se como o patógeno primordial dessa infecção supurativa?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Staphylococcus aureus (incluindo cepas sensíveis à meticilina - MSSA e cepas resistentes à meticilina adquiridas na comunidade - CA-MRSA).',
      },
      {
        id: 'B',
        texto:
          'Mycoplasma pneumoniae em 100% dos isolados.',
      },
      {
        id: 'C',
        texto:
          'Bordetella pertussis produtora de toxina linfocitária pura.',
      },
      {
        id: 'D',
        texto:
          'Clostridium difficile toxigênico após uso de desinfetante hospitalar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Microbiologia da Traqueíte Bacteriana na Infância:\n\n1. Patógeno Predominante:\n   - O Staphylococcus aureus é responsável por mais de 50% a 70% de todos os casos de traqueíte bacteriana na infância;\n   - A emergência de linhagens de CA-MRSA (Staphylococcus aureus resistente à meticilina adquirido na comunidade), muitas vezes produtoras da toxina destrutiva Leucocidina de Panton-Valentine (PVL), tornou a infecção ainda mais ulceronecrótica e grave;\n\n2. Outros Patógenos Bacterianos Relevantes:\n   - Streptococcus pneumoniae (Pneumococo);\n   - Streptococcus pyogenes (Streptococcus beta-hemolítico do Grupo A);\n   - Moraxella catarrhalis;\n   - Haemophilus influenzae não tipável (e raramente tipo b);\n   - Bactérias Gram-negativas entéricas (em pacientes traqueostomizados crônicos ou internados em UTI);\n\n3. Implicações na Escolha Terapêutica Empírica:\n   - O esquema de antibiótico intravenoso DEVE cobrir obrigatoriamente o S. aureus e os estreptococos respiratórios (ex: Ceftriaxona associada a Oxacilina ou Vancomicina).',
    comentariosAlternativas: {
      A: 'Correta. O Staphylococcus aureus é o agente etiológico número um da traqueíte bacteriana infantil, incluindo MSSA e CA-MRSA.',
      B: 'Incorreta. Mycoplasma pneumoniae causa pneumonia atípica em escolares e não celulite supurativa pseudomembranosa traqueal.',
      C: 'Incorreta. Bordetella pertussis causa coqueluche com crises paroxísticas de tosse, sem secreção purulenta traqueal espessa.',
      D: 'Incorreta. Clostridium difficile causa colite pseudomembranosa intestinal, não infecção respiratória alta.',
    },
  },
  {
    id: 'ped-est-053',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Broncoscopia e Toalete Traqueal na Traqueíte',
    isRevisao: false,
    enunciado:
      'Uma criança de 3 anos com traqueíte bacteriana é submetida a intubação orotraqueal no centro cirúrgico. No entanto, minutos após a colocação do tubo traqueal, o ventilador mecânico começa a disparar alarmes contínuos de alta pressão de pico nas vias aéreas e a saturação de O2 despenca rapidamente para 78%, sem expansão do tórax, apesar de o tubo estar bem posicionado à ausculta e capnografia. Qual procedimento endoscópico imediato é essencial tanto para o alívio desobstrutivo de urgência quanto para o diagnóstico etiológico definitivo dessa patologia?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Broncoscopia rígida ou flexível de emergência para aspiração vigorosa, remoção de pseudomembranas mucopurulentas espessas que ocluem a luz do tubo e da traqueia, e coleta de material purulento para exame direto (Gram) e culturas bacteriológicas quantitativas.',
      },
      {
        id: 'B',
        texto:
          'Realização de laparotomia exploradora imediata para aspiração de ar subdiafragmático.',
      },
      {
        id: 'C',
        texto:
          'Substituição do ventilador mecânico por tenda de vapor quente contínuo.',
      },
      {
        id: 'D',
        texto:
          'Prescrição de corticoide tópico nasal e alta da UTI para a enfermaria.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Papel Terapêutico e Diagnóstico da Broncoscopia na Traqueíte Bacteriana:\n\n1. O Mecanismo da Obstrução Mecânica Fatal:\n   - Na traqueíte bacteriana, a luz da traqueia é preenchida por grande quantidade de secreção purulenta viscosa ("cola biológica"), crostas necróticas desidratadas e pseudomembranas fibrinosas descoladas da mucosa subjacente;\n   - Essas crostas atuam como rolhas mecânicas que facilmente ocluem o lúmen do tubo endotraqueal pediátrico (cujo diâmetro interno é de apenas 3,5 a 4,5 mm);\n\n2. Broncoscopia como Procedimento de Eleição:\n   - Broncoscopia rígida ou fibrobroncoscopia flexível através do tubo permite:\n     * Desobstrução e aspiração mecânica direta de plugs e pseudomembranas sob visão óptica direta;\n     * Lavagem com pequenas alíquotas de soro fisiológico morno para fluidificar crostas aderentes;\n     * Coleta de secreção purulenta traqueal profunda genuína para bacterioscopia urgente (Gram) e culturas com antibiograma;\n   - A toalete brônquica frequente e a umidificação adequada do circuito do ventilador são indispensáveis para evitar reoclusão do tubo.',
    comentariosAlternativas: {
      A: 'Correta. A broncoscopia para desobstrução das pseudomembranas e aspiração de crostas é o procedimento salvador de vidas na traqueíte bacteriana.',
      B: 'Incorreta. Laparotomia exploradora não tem qualquer cabimento na obstrução traqueal por rolha de secreção.',
      C: 'Incorreta. Tenda de vapor não desobstrui um tubo endotraqueal ocluído por rolha purulenta em paciente intubado.',
      D: 'Incorreta. A criança está em insuficiência respiratória aguda grave em UTI; corticoide nasal não resolve obstrução traqueal mecânica.',
    },
  },
  {
    id: 'ped-est-054',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Achados Radiológicos da Traqueíte Bacteriana',
    isRevisao: false,
    enunciado:
      'Em uma criança com suspeita de traqueíte bacteriana, qual achado radiológico característico pode ser visualizado na incidência lateral (perfil) do pescoço, auxiliando na diferenciação com o crupe viral clássico e a epiglotite aguda?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Irregularidade grosseira dos contornos da coluna aérea traqueal subglótica com margens serrilhadas e sombras de tecidos moles intraluminais flutuantes ("pseudomembrana traqueal"), mantendo a epiglote com aspecto fino e normal.',
      },
      {
        id: 'B',
        texto:
          'Aumento globular maciço da epiglote com sinal do polegar no perfil.',
      },
      {
        id: 'C',
        texto:
          'Afunilamento simétrico cônico puro da subglote sem qualquer secreção intraluminal.',
      },
      {
        id: 'D',
        texto:
          'Coluna aérea traqueal perfeitamente lisa e retilínea com alargamento do espaço retrocardíaco.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Achados Radiológicos na Traqueíte Bacteriana:\n\n1. Incidência Lateral do Pescoço:\n   - O aspecto radiológico clássico reflete a presença de exsudato inflamatório e membranas descoladas dentro da luz traqueal;\n   - Irregularidade do contorno da parede anterior e posterior da traqueia ("aspecto serrilhado" ou em "dentes de serra");\n   - Defeitos de enchimento na coluna de ar traqueal: imagens radiopacas lineares ou onduladas flutuando dentro da traqueia (pseudomembranas);\n   - A epiglote e as pregas supraglóticas apresentam aspecto radiológico PRESERVADO E NORMAL (afastando epiglotite aguda);\n\n2. Incidência AP do Pescoço:\n   - Pode mostrar estreitamento subglótico semelhante ao sinal da torre de igreja (por extensão do edema subglótico), mas com assimetria ou irregularidade intraluminal.',
    comentariosAlternativas: {
      A: 'Correta. Descreve com fidelidade o aspecto serrilhado e os defeitos de enchimento intraluminais causados pelas pseudomembranas purulentas na traqueíte.',
      B: 'Incorreta. Sinal do polegar com epiglote globular é o estigma da epiglotite aguda.',
      C: 'Incorreta. Afunilamento simétrico puro (sinal da torre de igreja) é típico do crupe viral simples.',
      D: 'Incorreta. A coluna traqueal na traqueíte bacteriana é marcadamente irregular e heterogênea.',
    },
  },
  {
    id: 'ped-est-055',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Esquema Antimicrobiano Parenteral para Traqueíte Bacteriana',
    isRevisao: false,
    enunciado:
      'Qual é o esquema antimicrobiano parenteral intravenoso empírico de primeira escolha recomendado para o tratamento da traqueíte bacteriana grave na infância, considerando os patógenos comunitários predominantes no Brasil?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ceftriaxona intravenosa (100 mg/kg/dia) associada a Oxacilina IV (150 a 200 mg/kg/dia); ou Vancomicina IV (40 a 60 mg/kg/dia) se houver suspeita fundamentada ou prevalência local elevada de CA-MRSA ou choque séptico.',
      },
      {
        id: 'B',
        texto:
          'Amoxicilina oral em dose habitual associada a xarope expectorante de ambroxol.',
      },
      {
        id: 'C',
        texto:
          'Ciprofloxacino oral em monoterapia associado a nebulização com salbutamol contínuo.',
      },
      {
        id: 'D',
        texto:
          'Metronidazol intravenoso exclusivo durante 21 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Terapia Antimicrobiana na Traqueíte Bacteriana Pediátrica:\n\n1. Espectro Necessário:\n   - O esquema antimicrobiano empírico deve ter excelente penetração na mucosa traqueobronquial e alta atividade bactericida contra:\n     * Staphylococcus aureus (MSSA e MRSA);\n     * Streptococcus pneumoniae e Streptococcus pyogenes;\n     * Bacilos e cocos Gram-negativos respiratórios (Haemophilus influenzae e Moraxella catarrhalis);\n\n2. Esquemas de Primeira Escolha:\n   - CEFTRIAXONA IV (100 mg/kg/dia dividida de 12/12h ou 24/24h) + OXACILINA IV (150 a 200 mg/kg/dia dividida de 6/6h);\n   - Indicação de VANCOMICINA IV (ou Clindamicina IV se sensível):\n     * Quando a prevalência comunitária de CA-MRSA for superior a 10-15%;\n     * Em pacientes com choque séptico, instabilidade hemodinâmica ou deterioração clínica fulminante;\n\n3. Duração da Terapia:\n   - O tempo de tratamento costuma variar de 10 a 14 dias (iniciando por via parenteral e completando por via oral após melhora clínica, extubação e lise térmica estável).',
    comentariosAlternativas: {
      A: 'Correta. Cobre perfeitamente o espectro microbiológico com Ceftriaxona + Oxacilina ou Vancomicina nos casos graves/MRSA.',
      B: 'Incorreta. Amoxicilina oral é ineficaz para infecção bacteriana supurativa profunda de traqueia com risco de óbito.',
      C: 'Incorreta. Quinolonas não são primeira linha em pediatria para patógenos gram-positivos comunitários na traqueíte.',
      D: 'Incorreta. Metronidazol cobre apenas anaeróbios, deixando descobertos S. aureus e pneumococo.',
    },
  },
  {
    id: 'ped-est-056',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Abscesso Retrofaríngeo: Anatomia do Espaço e Faixa Etária',
    isRevisao: false,
    enunciado:
      'O abscesso retrofaríngeo é uma infecção profunda do pescoço com grande potencial de morbimortalidade na pediatria. Em relação à anatomia do espaço retrofaríngeo e à faixa etária de maior acometimento dessa patologia, qual afirmação é correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Acomete predominantemente lactentes e crianças menores de 4 a 5 anos de idade, porque nessa faixa etária o espaço retrofaríngeo contém ricos linfonodos (gânglios de Rouvière/Gilette) que drenam a nasofaringe, adenoides e tuba auditiva; esses linfonodos sofrem atrofia e involução fisiológica progressiva após os 4 a 5 anos de vida.',
      },
      {
        id: 'B',
        texto:
          'Ocorre comumente em idosos acamados por perfuração espontânea da cartilagem cricoide.',
      },
      {
        id: 'C',
        texto:
          'O espaço retrofaríngeo não possui comunicação anatômica com o mediastino, tornando impossível a disseminação de infecções para o tórax.',
      },
      {
        id: 'D',
        texto:
          'Os linfonodos retrofaríngeos se multiplicam exponencialmente na adolescência, tornando os 16 anos a idade de pico da doença.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Bases Anatômicas do Abscesso Retrofaríngeo (Espaço de Gilette/Rouvière):\n\n1. O Espaço Retrofaríngeo:\n   - Espaço virtual situado entre a fáscia bucofaríngea (parede posterior da faringe e esôfago) e a fáscia alar/pré-vertebral anterior;\n   - Estende-se desde a base do crânio até o mediastino posterior (nível de T1 a T4, onde se funde com a fáscia alar), comunicando-se com o "espaço perigoso" (*danger space*), o que permite a descida rápida de coleções purulentas para o mediastino (Mediastinite Necrosante Descendente);\n\n2. A Razão Biológica da Faixa Etária (< 4 a 5 anos):\n   - O espaço contém duas cadeias paramedianas de linfonodos (gânglios de Rouvière) proeminentes em lactentes e crianças pequenas;\n   - Esses linfonodos drenam infecções de vias aéreas superiores comuns na infância: nasofaringe, tonsilas faríngeas (adenoides), seios paranasais e ouvido médio;\n   - Uma infecção de VAS (resfriado, adenoidite, sinusite) deflagra adenite retrofaríngea supurativa, que liquefaz e rompe formando o abscesso;\n   - A partir dos 4 a 5 anos de idade, esses linfonodos sofrem atrofia e fibrose fisiológica, tornando o abscesso retrofaríngeo raro em crianças mais velhas (onde costuma decorrer de trauma penetrante por corpo estranho).',
    comentariosAlternativas: {
      A: 'Correta. Explica com perfeita exatidão anatômica a presença dos gânglios de Rouvière e sua atrofia fisiológica após os 4-5 anos.',
      B: 'Incorreta. Abscesso retrofaríngeo clássico infantil decorre de adenite supurativa, não perfuração de cricoide em idosos.',
      C: 'Incorreta. O espaço retrofaríngeo comunica-se diretamente com o mediastino posterior, sendo a mediastinite sua complicação mais temida.',
      D: 'Incorreta. Os linfonodos retrofaríngeos sofrem atrofia e involuem na infância média; na adolescência, o abscesso mais comum é o periamigdaliano.',
    },
  },
  {
    id: 'ped-est-057',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Semiologia do Abscesso Retrofaríngeo: Torcicolo e Hiperextensão',
    isRevisao: false,
    enunciado:
      'Uma menina de 2 anos é trazida à consulta com febre alta há 4 dias, irritabilidade, recusa alimentar severa e salivação constante (sialorreia). Ao exame físico, o pediatra observa que a criança mantém a cabeça rigidamente virada para o lado direito e ligeiramente estendida para trás (torcicolo e hiperextensão cervical), chorando copiosamente quando o médico tenta fletir ou rodar passivamente o pescoço. Há voz anasalada, estridor inspiratório discreto e abaulamento visível assimétrico da parede posterior da orofaringe. Por que a criança com abscesso retrofaríngeo adota espontaneamente essa postura de hiperextensão e rigidez cervical?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Porque a hiperextensão do pescoço traciona anteriormente a faringe e a traqueia, aliviando a compressão extrínseca posterior exercida pela coleção purulenta sobre a via aérea e reduzindo a dor provocada pelo atrito da fáscia pré-vertebral inflamada.',
      },
      {
        id: 'B',
        texto:
          'Porque o abscesso retrofaríngeo causa luxação congênita bilateral de todas as vértebras cervicais.',
      },
      {
        id: 'C',
        texto:
          'Porque a toxina bacteriana paralisa os músculos trapézio e esternocleidomastoideo de modo permanente.',
      },
      {
        id: 'D',
        texto:
          'Porque a hiperextensão cervical induz o fechamento mecânico das artérias vertebrais para diminuir a febre.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Semiologia do Abscesso Retrofaríngeo: Torcicolo e Hiperextensão Cervical:\n\n1. O Mecanismo da Postura Antálgica Protetora:\n   - O espaço retrofaríngeo situa-se imediatamente anterior aos músculos pré-vertebrais e aos corpos vertebrais cervicais;\n   - A presença de uma coleção purulenta sob tensão acompanhada de intensa miosite e espasmo dos músculos paravertebrais causa:\n     * 1. Torcicolo inflamatório agudo com rotação limitada da cabeça;\n     * 2. Resistência extrema à flexão anterior do pescoço (sinal frequentemente confundido com rigidez de nuca meníngea);\n   - A criança mantém ativamente a cabeça em hiperextensão espontânea porque essa postura estira as estruturas faríngeas para a frente, maximizando o espaço da via aérea e aliviando a compressão sobre a laringe;\n\n2. Achados Associados Clássicos:\n   - Febre alta e toxemia;\n   - Disfagia e odinofagia graves com sialorreia (*drooling*);\n   - Abaulamento unilateral da parede posterior da faringe;\n   - Voz abafada (*hot potato voice*).',
    comentariosAlternativas: {
      A: 'Correta. Descreve com fidelidade a justificativa anatômica e biomecânica do torcicolo e da postura em hiperextensão no abscesso retrofaríngeo.',
      B: 'Incorreta. Não ocorre luxação congênita vertebral por abscesso de partes moles.',
      C: 'Incorreta. O torcicolo é antálgico por irritação fascial e espasmo muscular, não por paralisia tóxica.',
      D: 'Incorreta. A postura é protetora da via aérea e para alívio de dor, sem relação com oclusão arterial proposital.',
    },
  },
  {
    id: 'ped-est-058',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Achados Radiológicos do Espaço Pré-Vertebral no Perfil Cervical',
    isRevisao: false,
    enunciado:
      'Uma criança de 20 meses com suspeita de infecção profunda do pescoço realiza radiografia simples de pescoço em incidência lateral (perfil), obtida rigorosamente em inspiração profunda e com o pescoço em extensão. Quais são os parâmetros radiológicos normais de espessura do espaço retrofaríngeo pré-vertebral (distância entre a parede posterior da faringe e a face anterior do corpo vertebral) cuja ultrapassagem sugere fortemente abscesso ou flegmão retrofaríngeo?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Espaço retrofaríngeo no nível de C2-C3 maior que 7 mm (ou maior que metade da largura do corpo vertebral adjacente) e no nível retroqueal de C6 maior que 14 mm (ou maior que a largura total do corpo vertebral de C6).',
      },
      {
        id: 'B',
        texto:
          'Qualquer espaço pré-vertebral maior que 1 mm em qualquer nível cervical.',
      },
      {
        id: 'C',
        texto:
          'Espaço retrofaríngeo obrigatoriamente superior a 100 mm no nível de C1.',
      },
      {
        id: 'D',
        texto:
          'Espaço pré-vertebral negativo com fusão óssea dos corpos vertebrais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Avaliação Radiológica do Espaço Pré-Vertebral no Raio-X de Perfil:\n\n1. Parâmetros Radiológicos Padronizados na Infância:\n   - 1. Nível Superior (Retrofaríngeo - C2 a C4):\n     * Espessura normal: menor que 7 mm (ou menos que metade da largura do corpo vertebral de C2/C3);\n   - 2. Nível Inferior (Retrocricóideo / Retrotraqueal - C6):\n     * Espessura normal: menor que 14 mm em crianças menores de 15 anos (ou menor que o diâmetro anteroposterior completo do corpo vertebral de C6);\n\n2. Critérios de Alarme para Abscesso Retrofaríngeo:\n   - Alargamento do espaço pré-vertebral ultrapassando esses limites;\n   - Retificação ou inversão da lordose cervical fisiológica (decorrente do espasmo muscular);\n   - Presença de gás intraluminal / níveis hidroaéreos no espaço pré-vertebral (patognomônico de infecção por bactérias produtoras de gás);\n\n3. Cuidado com o Falso Positivo:\n   - Em lactentes pequenos, uma radiografia tirada durante a expiração ou com o pescoço flexionado causa abaulamento fisiológico do espaço pré-vertebral falso-positivo. O exame deve ser realizado em extensão e inspiração.',
    comentariosAlternativas: {
      A: 'Correta. Cita com precisão milimétrica os critérios clássicos de espessura pré-vertebral no RX lateral de pescoço (> 7 mm em C2 e > 14 mm em C6).',
      B: 'Incorreta. 1 mm é muito inferior ao espaço anatômico normal das partes moles pré-vertebrais.',
      C: 'Incorreta. 100 mm (10 cm) é uma medida absurda que ocuparia todo o diâmetro do pescoço da criança.',
      D: 'Incorreta. Fusão óssea ocorre na Síndrome de Klippel-Feil congênita, não no abscesso de partes moles.',
    },
  },
  {
    id: 'ped-est-059',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Tomografia de Pescoço Contrastada: Padrão-Ouro no Abscesso Retrofaríngeo',
    isRevisao: false,
    enunciado:
      'Uma criança de 3 anos apresenta quadro clínico e radiografia cervical sugestivos de infecção profunda do espaço retrofaríngeo. O cirurgião pediátrico solicita uma Tomografia Computadorizada (TC) de pescoço com contraste intravenoso. Qual é a principal finalidade diagnóstica e anatômica da TC de pescoço com contraste neste contexto?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Diferenciar com alta sensibilidade entre celulite/flegmão (que pode ser tratado clinicamente com antibióticos) e abscesso maduro purulento com realce anelar periférico (que frequentemente requer drenagem cirúrgica), além de definir a extensão caudal da coleção para o mediastino posterior e suas relações com a artéria carótida interna e a veia jugular.',
      },
      {
        id: 'B',
        texto:
          'Substituir a necessidade de intubação traqueal através da desinfecção térmica por contraste iodado.',
      },
      {
        id: 'C',
        texto:
          'Medir a saturação de oxigênio da hemoglobina no interior dos linfonodos retrofaríngeos.',
      },
      {
        id: 'D',
        texto:
          'Confirmar se a criança possui amígdalas palatinas ectópicas na cavidade peritoneal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Tomografia Computadorizada com Contraste: O Padrão-Ouro no Abscesso Retrofaríngeo:\n\n1. Diferenciação Crucial: Flegmão vs Abscesso:\n   - Flegmão / Celulite: inflamação e espessamento difuso com realce homogêneo ao contraste, SEM coleção líquida central. Pode ser tratado com sucesso exclusivamente com antibioticoterapia intravenosa de amplo espectro por 24 a 48 horas;\n   - Abscesso Maduro: coleção líquida central com hipoatenuação (baixa densidade) e halo periférico de realce exuberante ao meio de contraste (*rim-enhancing fluid collection*), frequentemente contendo gás em seu interior. Abscessos com diâmetro $> 2,0\text{ cm}$ ou com repercussão ventilatória são indicações clássicas de drenagem cirúrgica;\n\n2. Mapeamento Anatômico e Prevenção de Complicações Catastróficas:\n   - Delimita a extensão inferior da coleção para o mediastino posterior (rastreio precoce de mediastinite necrotizante);\n   - Avalia erosão vascular da artéria carótida interna e tromboflebite séptica da veia jugular interna (Síndrome de Lemierre).',
    comentariosAlternativas: {
      A: 'Correta. A TC contrastada é o padrão-ouro para distinguir flegmão de abscesso colecionado, avaliar indicação cirúrgica e mapear extensão mediastinal.',
      B: 'Incorreta. Contraste iodado não desinfeta a via aérea nem substitui o controle ventilatório.',
      C: 'Incorreta. Tomografia computadorizada avalia densidade radiológica em unidades Hounsfield, não oximetria tecidual.',
      D: 'Incorreta. Amígdalas situam-se na orofaringe e nunca na cavidade peritoneal.',
    },
  },
  {
    id: 'ped-est-060',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Esquema Antimicrobiano no Abscesso Retrofaríngeo',
    isRevisao: false,
    enunciado:
      'Um menino de 2 anos é diagnosticado com abscesso retrofaríngeo estável. O cirurgião decide iniciar terapia antimicrobiana intravenosa empírica enquanto aguarda a resposta clínica nas primeiras 24 a 48 horas. Sabendo que a microbiota do abscesso retrofaríngeo é polimicrobiana, envolvendo cocos Gram-positivos e bactérias anaeróbias estritas da cavidade oral, qual esquema parenteral intravenoso atende perfeitamente às diretrizes de tratamento?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ampicilina-Sulbactam intravenosa (200 mg/kg/dia); ou Ceftriaxona IV associada a Clindamicina IV (ou Metronidazol IV); associando-se Vancomicina se houver suspeita de CA-MRSA.',
      },
      {
        id: 'B',
        texto:
          'Azitromicina oral em dose única diária associada a pastilhas antissépticas de mentol.',
      },
      {
        id: 'C',
        texto:
          'Amicacina intravenosa em monoterapia estrita.',
      },
      {
        id: 'D',
        texto:
          'Fluconazol intravenoso associado a xarope de guaco.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Antibioticoterapia no Abscesso Retrofaríngeo Pediátrico:\n\n1. Microbiologia Polimicrobiana:\n   - Bactérias Aeróbias: Streptococcus pyogenes (Grupo A), Staphylococcus aureus (MSSA e MRSA) e espécies de Streptococcus viridans;\n   - Bactérias Anaeróbias da Cavidade Oral: Fusobacterium necrophorum, Peptostreptococcus spp., Prevotella e Bacteroides spp.;\n\n2. Esquemas Parenterais Recomendados:\n   - AMPICILINA-SULBACTAM IV (200 mg/kg/dia da fração ampicilina dividida de 6/6h): excelente primeira escolha com ampla cobertura bactericida contra cocos gram-positivos e anaeróbios orais produtores de beta-lactamase;\n   - Esquema Alternativo Combinado:\n     * CEFTRIAXONA IV (50 a 100 mg/kg/dia) + CLINDAMICINA IV (40 mg/kg/dia dividida de 6/6h ou 8/8h);\n   - Se houver sepse grave, choque ou suspeita de CA-MRSA:\n     * Substituir ou associar VANCOMICINA IV à Ceftriaxona e Clindamicina;\n\n3. Duração Típica:\n   - 14 dias de tratamento total (parenteral até regressão da febre e dos sintomas clínicos, completando por via oral com Amoxicilina-Clavulanato ou Clindamicina oral).',
    comentariosAlternativas: {
      A: 'Correta. Cobre perfeitamente anaeróbios e gram-positivos com Ampicilina-Sulbactam ou Ceftriaxona + Clindamicina/Vancomicina.',
      B: 'Incorreta. Azitromicina oral não tem cobertura anaeróbia adequada nem potência parenteral para infecção profunda grave do pescoço.',
      C: 'Incorreta. Aminoglicosídeos (Amicacina) não cobrem anaeróbios nem estreptococos adequadamente.',
      D: 'Incorreta. Fluconazol é antifúngico; o abscesso retrofaríngeo é de etiologia bacteriana.',
    },
  },
  {
    id: 'ped-est-061',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Indicações de Drenagem Cirúrgica no Abscesso Retrofaríngeo',
    isRevisao: false,
    enunciado:
      'Nem todo paciente pediátrico com abscesso retrofaríngeo requer intervenção cirúrgica imediata no momento da admissão. No entanto, qual conjunto de critérios clínicos e tomográficos indica formalmente a necessidade de drenagem cirúrgica de urgência (abordagem transoral ou transcervical externa)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Presença de coleção purulenta volumosa com diâmetro maior que 2,0 cm (ou área > 2 cm²) na tomografia computadorizada, sinais de comprometimento iminente da via aérea superior (estridor em repouso, desconforto respiratório) ou falha da antibioticoterapia intravenosa após 24 a 48 horas com persistência de febre e piora clínica.',
      },
      {
        id: 'B',
        texto:
          'Qualquer flegmão menor que 5 mm em criança afebril e comendo normalmente.',
      },
      {
        id: 'C',
        texto:
          'Ausência completa de coleção líquida na tomografia computadorizada contrastada.',
      },
      {
        id: 'D',
        texto:
          'Melhora clínica total após 12 horas de antibiótico com regressão de 100% da febre.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Indicações de Drenagem Cirúrgica no Abscesso Retrofaríngeo:\n\n1. Tratamento Clínico Inicial (Conservador):\n   - Pacientes com coleções pequenas (< 2,0 cm de diâmetro na TC) ou flegmão sem comprometimento da via aérea podem receber teste terapêutico inicial com antibioticoterapia intravenosa de amplo espectro por 24 a 48 horas em ambiente hospitalar monitorizado;\n\n2. Indicações Formais de Drenagem Cirúrgica:\n   - 1. Coleção purulenta volumosa: diâmetro $> 2,0\text{ cm}$ ou área $> 2,0\text{ cm²}$ na TC contrastada (associada a alta taxa de falha com antibiótico isolado);\n   - 2. Comprometimento da Via Aérea: estridor inspiratório evidente, tiragens graves ou dessaturação (risco de asfixia iminente);\n   - 3. Falha Terapêutica Clínica: persistência da febre alta, piora do torcicolo ou aumento da coleção após 24 a 48 horas de antibioticoterapia parenteral adequada;\n   - 4. Complicações Invasivas: extensão para o mediastino posterior ou trombose jugular;\n\n3. Via de Acesso Cirúrgico:\n   - Transoral (para abscessos mediais circunscritos) ou Transcervical Externa (para abscessos volumosos que ultrapassam a bainha carotídea ou descem para o pescoço inferior).',
    comentariosAlternativas: {
      A: 'Correta. Cita perfeitamente os critérios consensuais de intervenção cirúrgica: tamanho > 2 cm, risco de via aérea ou falha do antibiótico em 24-48h.',
      B: 'Incorreta. Coleções diminutas < 5 mm são flegmões conduzidos clinicamente com antibiótico.',
      C: 'Incorreta. Ausência de coleção líquida é celulite pura, não havendo pus para ser drenado cirurgicamente.',
      D: 'Incorreta. Melhora clínica após antibiótico afasta a necessidade de cirurgia invasiva.',
    },
  },
  {
    id: 'ped-est-062',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Complicações Fatais do Abscesso Retrofaríngeo: Mediastinite e Erosão Carotídea',
    isRevisao: false,
    enunciado:
      'O abscesso retrofaríngeo não tratado ou de diagnóstico tardio pode evoluir para complicações catastróficas que elevam a mortalidade em mais de 40% a 50%. Quais são as duas complicações anatômicas mais graves e potencialmente letais associadas à extensão local dessa infecção profunda do pescoço?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Mediastinite Necrosante Descendente (por disseminação do pus através do "espaço perigoso" para o mediastino posterior) e Erosão / Rotura da Artéria Carótida Interna com hemorragia exsanguinante.',
      },
      {
        id: 'B',
        texto:
          'Apendicite aguda perfurada e pancreatite necro-hemorrágica por continuidade retroperitoneal.',
      },
      {
        id: 'C',
        texto:
          'Necrose avascular da cabeça umeral e fratura cominutiva do calcâneo.',
      },
      {
        id: 'D',
        texto:
          'Hérnia de hiato por deslizamento e cálculo biliar na vesícula.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Complicações Catastróficas do Abscesso Retrofaríngeo:\n\n1. Mediastinite Necrosante Descendente:\n   - O espaço retrofaríngeo comunica-se diretamente com o "espaço perigoso" (*danger space* - espaço entre a fáscia alar e a fáscia pré-vertebral), que se estende sem barreiras anatômicas desde a base do crânio até o diafragma no nível de T12;\n   - A descida do pus por gravidade provoca mediastinite aguda fulminante, empiema pleural bilateral e choque séptico refratário com mortalidade superior a 40-50%;\n\n2. Erosão Vascular da Artéria Carótida Interna:\n   - O contato contínuo da coleção purulenta com a bainha carotídea causa arterite séptica com necrose da parede vascular carotídea;\n   - Pode ocorrer formação de pseudoaneurisma que se rompe subitamente para dentro da faringe ou via aérea, causando sangramento arterial exsanguinante maciço pela boca e morte em minutos;\n\n3. Asfixia por Rotura Espontânea:\n   - A rotura espontânea do abscesso na laringe inunda a árvore traqueobrônquica de pus, provocando asfixia imediata.',
    comentariosAlternativas: {
      A: 'Correta. Identifica com precisão cirúrgica a mediastinite necrosante descendente e a erosão carotídea como as complicações mais temíveis.',
      B: 'Incorreta. Apendicite e pancreatite são afecções abdominais sem continuidade com o espaço retrofaríngeo cervical.',
      C: 'Incorreta. Não há disseminação por contiguidade para ossos dos membros inferiores.',
      D: 'Incorreta. Hérnia de hiato e litíase biliar não decorrem de infecção do espaço pré-vertebral.',
    },
  },
  {
    id: 'ped-est-063',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Abscesso Periamigdaliano: Fisiopatologia e o Sinal do Trismo',
    isRevisao: false,
    enunciado:
      'Um adolescente de 15 anos procura o pronto atendimento com queixa de dor de garganta intensa que piorou muito nos últimos 2 dias, tornando-se estritamente unilateral à esquerda. Apresenta febre de 38,9 °C, otalgia reflexa ipsilateral e sialorreia. Ao tentar abrir a boca para que o médico examine sua orofaringe, consegue uma abertura interincisivos de apenas 1,5 cm devido a espasmo muscular doloroso excruciante (trismo acentuado). Qual é o mecanismo fisiopatológico do trismo no Abscesso Periamigdaliano?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Irritação e espasmo inflamatório do músculo pterigoide medial adjacente ao espaço periamigdaliano acometido pelo flegmão/abscesso.',
      },
      {
        id: 'B',
        texto:
          'Paralisia do nervo facial com bloqueio do músculo orbicular da boca.',
      },
      {
        id: 'C',
        texto:
          'Fratura traumática espontânea dos côndilos mandibulares durante o bocejo.',
      },
      {
        id: 'D',
        texto:
          'Ação sistêmica de toxina estafilocócica bloqueando os canais de sódio nos neurônios motores.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisiopatologia do Trismo no Abscesso Periamigdaliano:\n\n1. Anatomia do Espaço Periamigdaliano:\n   - O espaço periamigdaliano situa-se entre a cápsula fibrosa da tonsila palatina e a musculatura constritora superior da faringe;\n   - Lateralmente ao músculo constritor superior da faringe, situa-se o MÚSCULO PTERIGOIDE MEDIAL (um dos quatro grandes músculos da mastigação responsáveis pelo fechamento e elevação da mandíbula);\n\n2. Origem do Trismo:\n   - O processo celulítico purulento periamigdaliano ultrapassa a cápsula e irrita diretamente as fibras do músculo pterigoide medial;\n   - Isso desencadeia contração espasmódica tônica reflexa involuntária (trismo), tornando a abertura da cavidade oral extremamente dolorosa ou quase impossível;\n   - O TRISMO é considerado o sinal clínico mais sensível e característico para diferenciar o Abscesso Periamigdaliano de uma Amigdalite Bacteriana Aguda comum (na qual a abertura de boca é livre e sem trismo).',
    comentariosAlternativas: {
      A: 'Correta. O trismo decorre da irritação inflamatória contígua do músculo pterigoide medial, músculo mastigatório que fecha a mandíbula.',
      B: 'Incorreta. O nervo facial inerva a mímica facial e não os músculos mastigatórios (que são inervados pelo trigêmeo V3).',
      C: 'Incorreta. Trata-se de etiologia infecciosa de partes moles profundas, sem fratura óssea.',
      D: 'Incorreta. O mecanismo é inflamatório local, não toxina estafilocócica de canais de sódio.',
    },
  },
  {
    id: 'ped-est-064',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Semiologia Clássica do Abscesso Periamigdaliano',
    isRevisao: false,
    enunciado:
      'Ao conseguir inspecionar a cavidade oral de um paciente com abscesso periamigdaliano unilateral, qual conjunto de alterações anatômicas no exame da orofaringe é tipicamente visualizado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Abaulamento assimétrico e eritematoso do pilar amigdaliano anterior e do palato mole ipsilateral, com deslocamento ínfero-medial da tonsila palatina e desvio da úvula para o lado contralateral sadio.',
      },
      {
        id: 'B',
        texto:
          'Presença de úvula perfeitamente centrada na linha média com placas brancas puntiformes simétricas em ambas as amígdalas sem abaulamento de palato.',
      },
      {
        id: 'C',
        texto:
          'Úvula bipartida congênita associada a língua geográfica indolor.',
      },
      {
        id: 'D',
        texto:
          'Aumento bilateral e simétrico das duas amígdalas palatinas tocando-se na linha média sem febre ou desvio de úvula.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Semiologia Clássica do Abscesso Periamigdaliano:\n\n1. Tríade da Oroscopia:\n   - 1. Abaulamento Marcante do Pilar Anterior e Palato Mole: a coleção de pus acumula-se no polo superior da tonsila, projetando o palato mole para a frente;\n   - 2. Deslocamento da Tonsila: a amígdala inflamada é empurrada para baixo e para o centro (ínfero-medialmente);\n   - 3. Desvio da Úvula: o edema e o volume da massa empurram a úvula edemaciada em direção ao lado sadio CONTRALATERAL;\n\n2. Sinais Clínicos Associados:\n   - Trismo (dificuldade de abrir a boca);\n   - "Voz em batata quente" (*hot potato voice*);\n   - Sialorreia e halitose intensa;\n   - Linfadenopatia submandibular e jugulodigástrica ipsilateral dolorosa.',
    comentariosAlternativas: {
      A: 'Correta. Descreve com perfeição a anatomia da lesão periamigdaliana com abaulamento de pilar, protrusão tonsilar e desvio da úvula para o lado oposto.',
      B: 'Incorreta. Úvula centrada e placas simétricas bilaterais sem trismo indicam faringoamigdalite estreptocócica aguda comum.',
      C: 'Incorreta. Úvula bífida é anomalia congênita (estigma de fenda palatina submucosa).',
      D: 'Incorreta. Amígdalas bilaterais aumentadas tocando-se (grau IV de Brodsky) sem desvio de úvula indicam hipertrofia adenotonsilar crônica ou mononucleose.',
    },
  },
  {
    id: 'ped-est-065',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Manejo Terapêutico do Abscesso Periamigdaliano: Aspiração vs Drenagem',
    isRevisao: false,
    enunciado:
      'Qual é o procedimento de primeira escolha padronizado para o alívio imediato da dor, confirmação diagnóstica e drenagem de um Abscesso Periamigdaliano em um adolescente cooperativo em ambiente de pronto-socorro ou ambulatório de otorrinolaringologia?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Punção aspirativa com agulha calibrosa (18G) após anestesia tópica/local no ponto de maior flutuação do pilar anterior (ou incisão e drenagem), seguida de antibioticoterapia parenteral/oral e analgesia.',
      },
      {
        id: 'B',
        texto:
          'Tonsilectomia bilateral mutilante imediata em sala de triagem sem anestesia.',
      },
      {
        id: 'C',
        texto:
          'Nebulização com adrenalina 1:1.000 de 15 em 15 minutos até a úvula voltar à linha média.',
      },
      {
        id: 'D',
        texto:
          'Aplicação de gelo picado diretamente sobre a úvula por 48 horas ininterruptas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo Terapêutico do Abscesso Periamigdaliano:\n\n1. Drenagem Imediata do Pus:\n   - O tratamento padrão exige a evacuação do conteúdo purulento;\n   - Duas técnicas consagradas com eficácia comparável:\n     * 1. Aspiração com Agulha (*Needle Aspiration*): procedimento menos doloroso, rápido e seguro em pacientes cooperativos. Realiza-se anestesia tópica (spray de lidocaína) e infiltração local, puncionando-se com agulha 18G no polo superior de maior abaulamento;\n     * 2. Incisão e Drenagem: pequena incisão na mucosa seguida de dissecção com pinça hemostática delicada para abertura das lojas;\n\n2. Alívio Clínico Dramático Imediato:\n   - A aspiração de 3 a 10 mL de pus alivia instantaneamente a pressão, o trismo e a dor de garganta;\n\n3. Antibioticoterapia Coadjuvante:\n   - Ampicilina-Sulbactam IV, Ceftriaxona + Clindamicina, ou Amoxicilina-Clavulanato oral nos casos ambulatoriais com boa tolerância;\n\n4. Papel da Amigdalectomia:\n   - A amigdalectomia de urgência ("a quente") é reservada para casos de via aérea obstruída, sangramento incontrolável ou falha de drenagem; habitualmente, a cirurgia é indicada eletivamente semanas após o episódio se houver amigdalites de repetição prévias.',
    comentariosAlternativas: {
      A: 'Correta. A punção aspirativa com agulha ou incisão e drenagem associada a antibióticos é a conduta padrão universal.',
      B: 'Incorreta. Amigdalectomia a quente sem anestesia em triagem é uma aberração cirúrgica perigosa.',
      C: 'Incorreta. Adrenalina tópica inalatória não drena coleções purulentas periamigdalianas e não corrige desvio de úvula.',
      D: 'Incorreta. Gelo não drena pus encapsulado sob tensão.',
    },
  },
  {
    id: 'ped-est-066',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Síndrome de Lemierre: Tromboflebite Séptica da Veia Jugular Interna',
    isRevisao: false,
    enunciado:
      'Uma adolescente de 16 anos tratou quadro de faringoamigdalite aguda há 7 dias. Apresenta recrudescimento da febre alta com calafrios trepidantes, dor e edema inflamatório indurado ao longo da borda anterior do músculo esternocleidomastoideo à esquerda, acompanhado de dor torácica pleurítica e tosse com escarro hemoptoico. A tomografia de tórax revela múltiplos nódulos periféricos com cavitações sugestivos de êmbolos sépticos pulmonares. A angiotomografia cervical evidencia tromboflebite da veia jugular interna esquerda. Qual é o diagnóstico epônimo dessa síndrome e qual é a bactéria anaeróbia clássica mais comumente implicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome de Lemierre (sepse pós-anginosa); causada predominantemente pelo bacilo anaeróbio Gram-negativo Fusobacterium necrophorum.',
      },
      {
        id: 'B',
        texto:
          'Síndrome de Guillain-Barré; causada pelo Campylobacter jejuni.',
      },
      {
        id: 'C',
        texto:
          'Síndrome de Reye; causada pela ingestão de aspirina na vigência de influenza.',
      },
      {
        id: 'D',
        texto:
          'Síndrome de Stevens-Johnson; causada pelo uso de dipirona sódica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Síndrome de Lemierre (Sepsis Pós-Anginosa / Tromboflebite Séptica Jugular):\n\n1. Fisiopatologia e Patógeno Primordial:\n   - Complicação grave e potencialmente letal de infecções da orofaringe (faringoamigdalite ou abscesso periamigdaliano);\n   - O agente clássico e patognomônico é o FUSOBACTERIUM NECROPHORUM, um bacilo anaeróbio estrito Gram-negativo comensal da flora oral que produz endotoxinas e enzimas hemaglutinantes indutoras de trombose;\n\n2. Tríade Clássica de Apresentação:\n   - 1. Infecção orofaríngea primária recente (faringite nos últimos 5 a 14 dias);\n   - 2. Tromboflebite séptica da Veia Jugular Interna: dor, espessamento e cordão palpável ao longo do trajeto vascular cervical anterior (ao longo do esternocleidomastoideo);\n   - 3. Êmbolos sépticos metastáticos à distância: acometimento pulmonar em mais de 85% dos casos (nódulos cavitados, derrame pleural, empiema, hemoptise), além de artrite séptica e metástases hepáticas;\n\n3. Tratamento de Escolha:\n   - Antibioticoterapia parenteral prolongada (3 a 6 semanas) com alta atividade contra anaeróbios e estreptococos (Ampicilina-Sulbactam, Ceftriaxona + Metronidazol ou Carbapenêmico).',
    comentariosAlternativas: {
      A: 'Correta. Identifica com perfeição a Síndrome de Lemierre com tromboflebite jugular e êmbolos pulmonares causados por Fusobacterium necrophorum.',
      B: 'Incorreta. Guillain-Barré é polineuropatia desmielinizante inflamatória ascendente arreflexa, sem tromboflebite ou êmbolos cavitados.',
      C: 'Incorreta. Síndrome de Reye é encefalopatia hepática associada ao ácido acetilsalicílico.',
      D: 'Incorreta. Stevens-Johnson é reação cutânea bolhosa farmacodermiforme com necrose epidérmica.',
    },
  },
  {
    id: 'ped-est-067',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Angina de Ludwig: Celulite do Assoalho da Boca',
    isRevisao: false,
    enunciado:
      'Um escolar de 10 anos com má dentição e histórico de cárie profunda não tratada no 2º molar inferior direito dá entrada no pronto-socorro com febre, toxemia e dor submandibular intensa. Ao exame: tumefação bilateral burente, endurecida ("em placa de madeira") e sem flutuação evidente que ocupa as regiões submentoniana e submandibular, com elevação maciça e posteriorização da língua contra o palato ("língua em cúpula"), salivação constante e estridor respiratório iminente. Qual é o diagnóstico dessa celulite bacteriana rapidamente progressiva do assoalho bucal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Angina de Ludwig.',
      },
      {
        id: 'B',
        texto:
          'Crupe viral subglótico leve.',
      },
      {
        id: 'C',
        texto:
          'Laringomalácia congênita tardia.',
      },
      {
        id: 'D',
        texto:
          'Caxumba puramente viral com parotidite bilateral asséptica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Angina de Ludwig:\n\n1. Conceito Anatômico:\n   - Celulite bacteriana flegmonosa, gangrenosa e rapidamente progressiva dos espaços fasciais submandibular, sublingual e submentoniano BILATERALMENTE;\n   - Em mais de 80% a 90% dos casos, decorre de infecção odontogênica primária do 2º ou 3º molares inferiores, cujas raízes ultrapassam o músculo milo-hióideo;\n\n2. Sinais Clínicos Típicos:\n   - Endurecimento "em tábua" ou "madeira" dos tecidos moles submandibulares e sublinguais, sem flutuação inicial (é uma celulite infiltrativa difusa);\n   - Elevação maciça e posteriorização da língua para o teto da cavidade oral, gerando obstrução mecânica supraglótica aguda da via aérea com estridor e asfixia;\n   - Disfagia e sialorreia profusas;\n\n3. Prioridades Terapêuticas:\n   - 1º Manejo seguro da via aérea (frequentemente exige nasofibroscopia para intubação ou traqueostomia imediata com o paciente acordado);\n   - 2º Antibioticoterapia parenteral cobrindo anaeróbios orais, estreptococos e bacilos gram-negativos (Ampicilina-Sulbactam ou Ceftriaxona + Clindamicina);\n   - 3º Descompressão cirúrgica por incisão transcervical submandibular ampla se houver supuração ou falha clínica.',
    comentariosAlternativas: {
      A: 'Correta. A celulite bilateral endurecida do assoalho bucal de origem odontogênica com elevação lingual é a Angina de Ludwig clássica.',
      B: 'Incorreta. Crupe é afecção viral da subglote em lactentes, sem infecção odontogênica ou tumefação submandibular.',
      C: 'Incorreta. Laringomalácia acomete lactentes no início da vida, sem celulite ou acometimento de assoalho bucal.',
      D: 'Incorreta. Caxumba acomete as glândulas parótidas na região pré-auricular e retromandibular, não o assoalho bucal em placa endurecida.',
    },
  },
  {
    id: 'ped-est-068',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Abscesso Parafaríngeo: Síndrome Pré vs Pós-Estiliana',
    isRevisao: false,
    enunciado:
      'O espaço parafaríngeo (faríngeo lateral) possui formato de pirâmide invertida no pescoço e é dividido pelo processo estilóide e sua fáscia muscular em dois compartimentos: espaço pré-estiliano e espaço pós-estiliano (retrostiliano). Em relação aos achados clínicos associados ao acometimento purulento desses dois compartimentos, qual afirmação é correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O abscesso pré-estiliano cursa classicamente com trismo e abaulamento medial da parede lateral da faringe com desvio tonsilar; enquanto o abscesso pós-estiliano cursa sem trismo, mas pode apresentar déficits de pares cranianos inferiores (IX, X, XI e XII), Síndrome de Horner (comprometimento da cadeia simpática cervical) e tromboflebite da veia jugular interna.',
      },
      {
        id: 'B',
        texto:
          'O abscesso pós-estiliano causa paralisia do nervo ciático e claudicação de membros inferiores.',
      },
      {
        id: 'C',
        texto:
          'O espaço pré-estiliano abriga a carótida interna e a veia cava inferior torácica.',
      },
      {
        id: 'D',
        texto:
          'O acometimento parafaríngeo não cursa com febre nem requer antibioticoterapia parenteral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Espaço Parafaríngeo (Faríngeo Lateral): Divisão Estiliana:\n\n1. Compartimento Pré-Estiliano (Anterior):\n   - Relaciona-se intimamente com o músculo pterigoide medial e a loja tonsilar;\n   - Quando acometido: cursa obrigatoriamente com TRISMO severo e abaulamento anterior da parede lateral da faringe e palato mole, com desvio medial da amígdala;\n\n2. Compartimento Pós-Estiliano / Retrostiliano (Posterior - Bainha Carotídea):\n   - Não tem contato com os músculos da mastigação (portanto, NÃO CAUSA TRISMO);\n   - Conteúdo anatômico nobre: Artéria Carótida Interna, Veia Jugular Interna, Cadeia Simpática Cervical e os Pares Cranianos IX (Glossofaríngeo), X (Vago), XI (Acessório) e XII (Hipoglosso);\n   - Sinais de Acometimento Pós-estiliano:\n     * Déficits de pares cranianos: rouquidão por paralisia de corda vocal (nervo vago/laríngeo recorrente), desvio de língua (nervo hipoglosso), dificuldade de elevação do ombro (nervo acessório);\n     * Síndrome de Horner (ptose palpebral, miose e anidrose facial) por compressão do plexo simpático;\n     * Tromboflebite séptica da veia jugular interna.',
    comentariosAlternativas: {
      A: 'Correta. Distingue com maestria anatômica o compartimento pré-estiliano (com trismo) do pós-estiliano (com pares cranianos, síndrome de Horner e tromboflebite jugular sem trismo).',
      B: 'Incorreta. Nervo ciático situa-se no plexo lombossacral e pelve, sem relação com o pescoço.',
      C: 'Incorreta. Veia cava inferior está no tórax e abdome, não no pescoço.',
      D: 'Incorreta. Abscesso parafaríngeo é sepse profunda do pescoço de alto risco que exige antibioticoterapia parenteral urgente.',
    },
  },
  {
    id: 'ped-est-069',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Paralisia Congênita de Cordas Vocais: Unilateral vs Bilateral',
    isRevisao: false,
    enunciado:
      'A paralisia congênita de cordas vocais é a segunda anomalia laríngea congênita mais comum na infância (atrás apenas da laringomalácia). Em relação à apresentação clínica diferencial entre a paralisia unilateral versus paralisia bilateral das cordas vocais, qual afirmação é correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A paralisia unilateral manifesta-se tipicamente com choro fraco, disfonia/rouquidão e aspiração eventual na mamada, com mínima repercussão na via aérea; já a paralisia bilateral apresenta-se com estridor inspiratório grave ao nascimento, tiragens severas e insuficiência respiratória aguda com choro paradoxalmente forte, frequentemente necessitando de traqueostomia imediata.',
      },
      {
        id: 'B',
        texto:
          'A paralisia bilateral nunca causa estridor, cursando apenas com diarreia crônica aquosa.',
      },
      {
        id: 'C',
        texto:
          'A paralisia unilateral decorre obrigatoriamente de infecção bacteriana por Bordetella pertussis aos 10 anos.',
      },
      {
        id: 'D',
        texto:
          'Ambas as formas são benignas e desaparecem em 5 minutos após a ingestão de soro caseiro.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Paralisia Congênita de Cordas Vocais na Infância:\n\n1. Paralisia Unilateral (Geralmente Esquerda):\n   - Causa comum: trauma de parto (tração cervical em parto difícil) ou lesão congênita do nervo laríngeo recorrente esquerdo (pelo trajeto longo ao redor do arco aórtico, associado a cirurgias cardiovasculares neonatais para fechamento de PCA ou coarctação);\n   - Clínica: a via aérea permanece pérvia pela mobilidade da outra prega. Sintoma principal: CHORO FRACO, ROUCO OU AFÔNICO, com respiração normal em repouso e eventuais engasgos;\n\n2. Paralisia Bilateral:\n   - Causa comum: malformações do Sistema Nervoso Central (destaque para a Malformação de Chiari tipo II associada a mielomeningocele com compressão do tronco encefálico);\n   - Posição das Cordas: fixas na linha média (posição paramediana adutora);\n   - Clínica: a fenda glótica está praticamente fechada. Gera ESTRIDOR INSPIRATÓRIO MARCADO DESDE O NASCIMENTO, tiragens graves, cianose e asfixia iminente;\n   - Paradoxo Clínico Típico: como as cordas estão justapostas e tensas na linha média, o CHORO PODE SER PERFEITAMENTE FORTE E SONORO, mas a criança não consegue respirar;\n   - Manejo: mais de 50% dos casos de paralisia bilateral exigem TRAQUEOSTOMIA neonatal para proteger a vida.',
    comentariosAlternativas: {
      A: 'Correta. Caracteriza com fidelidade a distinção clínica clássica entre paralisia unilateral (choro fraco, pouca obstrução) e bilateral (estridor grave, asfixia, choro forte mantido).',
      B: 'Incorreta. Paralisia bilateral causa estridor grave de início neonatal com risco de morte por asfixia.',
      C: 'Incorreta. Paralisia unilateral congênita decorre de neuropraxia de parto ou cirurgia cardíaca, sem relação com coqueluche.',
      D: 'Incorreta. Paralisia de cordas vocais é alteração neurológica estrutural que não regride com soro oral.',
    },
  },
  {
    id: 'ped-est-070',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Malformação de Chiari II e Disfunção do Tronco Encefálico',
    isRevisao: false,
    enunciado:
      'Um recém-nascido com mielomeningocele lombossacral corrigida cirurgicamente no 1º dia de vida evolui na segunda semana de vida com estridor inspiratório progressivo, apneias centrais recorrentes, engasgos com a amamentação e bradicardias. A fibrobroncoscopia evidencia paralisia bilateral de pregas vocais com fixação paramediana. A ultrassonografia transfontanelar e a ressonância magnética de crânio confirmam herniação das amígdalas cerebelares e do quarto ventrículo através do forame magno para o canal cervical superior associada a hidrocefalia. Qual é a anomalia congênita neurológica de base responsável por essa paralisia de cordas vocais?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Malformação de Arnold-Chiari tipo II com compressão do tronco cerebral e dos núcleos motores dos nervos cranianos inferiores (núcleo ambíguo / nervo vago).',
      },
      {
        id: 'B',
        texto:
          'Agenesia pura do corpo caloso sem hidrocefalia.',
      },
      {
        id: 'C',
        texto:
          'Estenose congênita do aqueduto de Sylvius isolada sem mielomeningocele.',
      },
      {
        id: 'D',
        texto:
          'Esclerose tuberosa com rabdomioma laríngeo obstrutivo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Malformação de Arnold-Chiari Tipo II e Estridor Neonatal:\n\n1. Associação Obrigatória com Mielomeningocele:\n   - Praticamente 100% dos pacientes com disrafismo espinhal aberto (mielomeningocele) apresentam a Malformação de Chiari tipo II;\n   - Deslocamento caudal do cerebelo, verme e bulbo através do forame magno para o canal espinhal cervical alto;\n\n2. Fisiopatologia da Disfunção de Tronco Cerebral:\n   - A tração mecânica e a isquemia sobre o tronco cerebral e os núcleos motores dos nervos cranianos inferiores (especialmente o Núcleo Ambíguo do Nervo Vago - NC X);\n   - Consequência: PARALISIA BILATERAL DAS PREGAS VOCAIS, estridor inspiratório grave, crises de apneia central, refluxo faríngeo com aspiração brônquica e disfagia neurogênica;\n\n3. Manejo Integrado:\n   - Tratar a hidrocefalia subjacente com derivação ventriculoperitoneal (DVP);\n   - Se o estridor persistir ou houver apneia grave, indica-se descompressão neurocirúrgica da fossa posterior e/ou traqueostomia protetora.',
    comentariosAlternativas: {
      A: 'Correta. Identifica com perfeição a malformação de Chiari II associada a mielomeningocele como a clássica causa central de paralisia bilateral de cordas vocais.',
      B: 'Incorreta. Agenesia de corpo caloso isolada não causa herniação de tronco nem paralisia de pregas vocais.',
      C: 'Incorreta. Estenose de aqueduto isolada não cursa com mielomeningocele nem com a tração típica da fossa posterior.',
      D: 'Incorreta. Rabdomiomas na esclerose tuberosa acometem o músculo cardíaco e não a laringe.',
    },
  },
  {
    id: 'ped-est-071',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Cisto Congênito de Valécula e Laringocele',
    isRevisao: false,
    enunciado:
      'Um lactente de 1 mês de vida é internado por estridor inspiratório grave que piora muito na posição supina e choro abafado, associado a dificuldade alimentar importante. A videolaringoscopia revela volumosa lesão cística arredondada, de superfície lisa, preenchida por líquido transparente/mucoso, localizada na base da língua entre a epiglote e a faringe (valécula epiglótica), deslocando posteriormente a epiglote sobre o lúmen da laringe. Qual é o diagnóstico e qual é o procedimento de escolha definitivo?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Cisto de Valécula (Cisto Ductual Laríngeo); tratamento definitivo com marsupialização endoscópica (ou descompressão cirúrgica) sob visão laringoscópica direta.',
      },
      {
        id: 'B',
        texto:
          'Crupe viral subglótico tratado com nebulização de adrenalina domiciliar.',
      },
      {
        id: 'C',
        texto:
          'Hemangioma cavernoso ósseo mandibular tratado com radioterapia externa fracionada.',
      },
      {
        id: 'D',
        texto:
          'Epiglotite aguda bacteriana por Haemophilus tratada com penicilina oral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Cisto de Valécula Congênito (Cisto Laríngeo Ductual):\n\n1. Origem Embrionária:\n   - Anomalia congênita decorrente da obstrução do ducto excretor de glândulas mucosas submucosas na valécula (espaço entre a base da língua e a face anterior da epiglote);\n\n2. Quadro Clínico Típico:\n   - Início precoce nos primeiros dias a semanas de vida;\n   - Estridor inspiratório de tom baixo ou estertoroso, piora no decúbito dorsal;\n   - Disfagia e engasgos com a mamada;\n   - Choro abafado (a massa comprime a epiglote para trás contra as cordas vocais);\n\n3. Tratamento Curativo:\n   - Marsupialização Endoscópica: incisão e ressecção ampla do teto do cisto com laser de CO2 ou pinças endoscópicas com cauterização dos bordos para evitar recidiva (a simples punção/aspiração tem alta taxa de recorrência líquida imediata).',
    comentariosAlternativas: {
      A: 'Correta. Identifica com precisão o cisto de valécula e sua resolução cirúrgica clássica por marsupialização endoscópica.',
      B: 'Incorreta. Crupe é afecção infecciosa subglótica viral autolimitada, sem massa cística na valécula.',
      C: 'Incorreta. Radioterapia é contraindicada em lactentes e a lesão é cística mucosa da valécula.',
      D: 'Incorreta. Não se trata de infecção bacteriana bacterêmica aguda com pus, mas de malformação congênita cística mucosa.',
    },
  },
  {
    id: 'ped-est-072',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Estenose Subglótica Congênita vs Adquirida',
    isRevisao: false,
    enunciado:
      'Na avaliação do estridor pediátrico, a estenose da região subglótica pode ser de natureza congênita ou adquirida. Em relação à estenose subglótica CONGÊNITA, qual critério endoscópico formal a define na ausência de qualquer histórico prévio de intubação endotraqueal ou trauma laríngeo neonatal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Diâmetro subglótico intraluminal menor que 4,0 mm em recém-nascido a termo (ou menor que 3,0 mm em prematuro) ao nível da cartilagem cricoide, sem história prévia de intubação endotraqueal.',
      },
      {
        id: 'B',
        texto:
          'Diâmetro subglótico exatamente de 20 mm com presença de três cordas vocais supranumerárias.',
      },
      {
        id: 'C',
        texto:
          'Oclusão traqueal no nível de T4 causada exclusivamente por vírus sincicial respiratório.',
      },
      {
        id: 'D',
        texto:
          'Estenose congênita só existe se houver fratura de clavícula associada ao nascimento.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Estenose Subglótica Congênita:\n\n1. Definição Consensual Internacional:\n   - Estreitamento do lúmen subglótico ao nível da cartilagem cricoide presente ao nascimento em pacientes SEM história de intubação endotraqueal ou trauma laríngeo prévio;\n   - Critério Milimétrico Objetivo:\n     * Recém-nascido a termo: diâmetro subglótico $< 4,0\text{ mm}$ (incapaz de ser ultrapassado com segurança por um tubo endotraqueal 3,5 mm padrão);\n     * Recém-nascido prematuro: diâmetro subglótico $< 3,0\text{ mm}$;\n\n2. Fisiopatologia Embrionária:\n   - Decorre de falha na recanalização completa do lúmen laríngeo por volta da 10ª semana de gestação;\n   - Pode ser Membranosa (hipertrofia submucosa fibrosa com cricoide normal) ou Cartilaginosa (malformação da cartilagem cricoide, que se apresenta elíptica, espessada ou excessivamente pequena);\n\n3. História Natural Favorável:\n   - As formas congênitas (especialmente membranosas) apresentam prognóstico significativamente melhor que as adquiridas cicatriciais, pois o anel cricoide cresce com o desenvolvimento da criança, permitindo melhora espontânea em casos leves a moderados.',
    comentariosAlternativas: {
      A: 'Correta. Cita com rigor os critérios objetivos de diâmetro subglótico (< 4 mm a termo e < 3 mm prematuro) na ausência de intubação prévia.',
      B: 'Incorreta. 20 mm é o diâmetro da traqueia de um adulto masculino grande; no neonato o diâmetro é de 4,5 a 5 mm.',
      C: 'Incorreta. A subglote situa-se no pescoço (C5-C6) e não no tórax em T4.',
      D: 'Incorreta. Fratura de clavícula é trauma obstétrico sem correlação fisiopatológica com estenose da cricoide.',
    },
  },
  {
    id: 'ped-est-073',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Anomalias dos Arcos Aórticos: Sling da Artéria Pulmonar',
    isRevisao: false,
    enunciado:
      'Entre os anéis vasculares congênitos, o *Sling* da Artéria Pulmonar (Artéria Pulmonar Esquerda Anômala) apresenta uma relação anatômica singular com a árvore traqueobrônquica e o esôfago. Qual é o trajeto anatômico anômalo da artéria pulmonar esquerda que caracteriza o *sling* pulmonar e qual achado é frequentemente visualizado no esofagograma contrastado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A artéria pulmonar esquerda origina-se da artéria pulmonar direita e cruza da direita para a esquerda passando ENTRE a traqueia e o esôfago, provocando compressão extrínseca na parede ANTERIOR do esôfago e posterior da traqueia.',
      },
      {
        id: 'B',
        texto:
          'A artéria pulmonar esquerda nasce da aorta descendente e passa atrás da coluna vertebral dorsal.',
      },
      {
        id: 'C',
        texto:
          'A artéria subclávia direita passa dentro da luz do brônquio fonte direito.',
      },
      {
        id: 'D',
        texto:
          'O arco aórtico é ausente e o sangue flui diretamente pelo ducto torácico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Sling da Artéria Pulmonar (Artéria Pulmonar Esquerda Anômala):\n\n1. Trajeto Anatômico Singular:\n   - A artéria pulmonar esquerda não se origina do tronco pulmonar na sua topografia habitual;\n   - Ela origina-se anômalamente da face posterior da artéria pulmonar direita, logo acima da bifurcação traqueal;\n   - Para alcançar o hilo pulmonar esquerdo, ela realiza um trajeto anômalo em "alça" (*sling*), cruzando da direita para a esquerda DIRETAMENTE NO ESPAÇO ENTRE A PAREDE POSTERIOR DA TRAQUEIA E A PAREDE ANTERIOR DO ESÔFAGO;\n\n2. Achado Esofagográfico Clássico:\n   - Ao contrário de todos os outros anéis vasculares (como o duplo arco aórtico, que comprimem a parede POSTERIOR do esôfago), o *sling* pulmonar é o ÚNICO que comprime a parede ANTERIOR do esôfago no esofagograma baritado;\n\n3. Associação com Anéis Cartilaginosos Traqueais Completos:\n   - Em mais de 50% dos casos, associa-se à estenose traqueal congênita com anéis cartilaginosos circulares completos ("traqueia em cano de espingarda"), conferindo alta complexidade cirúrgica.',
    comentariosAlternativas: {
      A: 'Correta. Define com extrema precisão o trajeto anômalo entre a traqueia e o esôfago e a clássica compressão anterior do esôfago.',
      B: 'Incorreta. A artéria pulmonar origina-se da artéria pulmonar contralateral direita e não atrás da coluna vertebral.',
      C: 'Incorreta. Artérias não cursam dentro do lúmen brônquico.',
      D: 'Incorreta. Descrição sem qualquer fundamento fisiológico ou anatômico.',
    },
  },
  {
    id: 'ped-est-074',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Diferencial entre Síndrome de Lemierre e Choque Tóxico Estafilocócico',
    isRevisao: false,
    enunciado:
      'Uma adolescente de 17 anos com faringoamigdalite bacteriana evolui após 5 dias com sepse grave, febre alta com calafrios trepidantes, icterícia discreta (elevação de bilirrubina indireta e direta) e múltiplos nódulos pulmonares periféricos escavados na TC de tórax. A palpação cervical revela dor e empastamento ao longo do feixe vasculonervoso cervical esquerdo. O hemograma demonstra leucocitose de 28.000/mm³ com desvio escalonado até promielócitos. Diante da hipótese de Síndrome de Lemierre, qual exame de imagem vascular não invasivo à beira do leito deve ser realizado imediatamente para documentar a trombose jugular?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ultrassonografia com Doppler colorido das veias jugulares e vasos cervicais.',
      },
      {
        id: 'B',
        texto:
          'Arteriografia pulmonar com cateterismo transcardíaco femoral invasivo.',
      },
      {
        id: 'C',
        texto:
          'Cintilografia óssea com tecnécio-99 de corpo inteiro.',
      },
      {
        id: 'D',
        texto:
          'Densitometria óssea da coluna lombar e rádio distal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diagnóstico por Imagem da Síndrome de Lemierre:\n\n1. Investigação Vascular Rápida e Não Invasiva:\n   - A ultrassonografia com Doppler colorido dos vasos cervicais é o método de triagem à beira do leito mais rápido, acessível e sem radiação ionizante para documentar a tromboflebite da veia jugular interna;\n   - Achados ecográficos típicos:\n     * Incompressibilidade da veia jugular interna ao transdutor;\n     * Presença de material ecogênico intraluminal (trombo séptico parietal ou oclusivo);\n     * Ausência ou redução drástica do fluxo venoso fasico e perda da variação respiratória ao Doppler espectral;\n   - O exame definitivo para planejamento sistêmico completo é a Angiotomografia Computadorizada Cervicotorácica.',
    comentariosAlternativas: {
      A: 'Correta. O ultrassom com Doppler cervical é o método de imagem não invasivo de escolha à beira do leito para confirmar tromboflebite da veia jugular interna.',
      B: 'Incorreta. Cateterismo cardíaco é procedimento invasivo de alto risco não indicado como triagem de trombose cervical.',
      C: 'Incorreta. Cintilografia óssea avalia osteomielite e metástases ósseas, não fluxo venoso jugular.',
      D: 'Incorreta. Densitometria avalia osteopenia e osteoporose crônicas.',
    },
  },
  {
    id: 'ped-est-075',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Caso Clínico Integrador: Diagnóstico Diferencial nas Infecções Profundas do Pescoço',
    isRevisao: false,
    enunciado:
      'Na enfermaria de um hospital terciário de pediatria, o médico residente apresenta a evolução de três crianças internadas com infecções agudas do pescoço:\n- Caso 1: Lactente de 18 meses com febre de 39,5 °C há 4 dias, torcicolo rígido com pescoço em hiperextensão, sialorreia profusa e TC evidenciando coleção hipodensa de 2,5 cm no espaço pré-vertebral com realce anelar;\n- Caso 2: Menino de 3 anos com crupe viral prévio que no 4º dia evolui com toxemia, febre alta persistente, tosse com expectoração purulenta espessa e refratariedade total a duas nebulizações com adrenalina;\n- Caso 3: Adolescente de 15 anos com faringite unilateral, trismo intenso (abertura bucal de 1 cm), desvio da úvula para a direita e voz abafada em batata quente.\n\nQual é a sequência correta dos diagnósticos clínicos para os casos 1, 2 e 3, respectivamente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Caso 1: Abscesso Retrofaríngeo; Caso 2: Traqueíte Bacteriana; Caso 3: Abscesso Periamigdaliano.',
      },
      {
        id: 'B',
        texto:
          'Caso 1: Traqueíte Bacteriana; Caso 2: Abscesso Periamigdaliano; Caso 3: Crupe Espasmódico.',
      },
      {
        id: 'C',
        texto:
          'Caso 1: Epiglotite Aguda; Caso 2: Laringomalácia; Caso 3: Angina de Ludwig.',
      },
      {
        id: 'D',
        texto:
          'Caso 1: Abscesso Periamigdaliano; Caso 2: Abscesso Retrofaríngeo; Caso 3: Traqueíte Bacteriana.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Caso Clínico Integrador: A Tríade das Infecções Profundas do Pescoço Pediátrico:\n\n1. Caso 1: Abscesso Retrofaríngeo:\n   - Lactente < 4 anos, torcicolo e hiperextensão cervical, sialorreia e coleção pré-vertebral > 2 cm na TC;\n   - Conduta: Drenagem cirúrgica e Ampicilina-Sulbactam IV;\n\n2. Caso 2: Traqueíte Bacteriana (Pseudomembranosa):\n   - Piora supurativa febril após crupe viral inicial ("crupe que desandou"), tosse com pus e falha total à adrenalina inalatória;\n   - Conduta: Broncoscopia para toalete/desobstrução de crostas e Ceftriaxona + Oxacilina/Vancomicina;\n\n3. Caso 3: Abscesso Periamigdaliano:\n   - Adolescente com faringite unilateral, trismo marcante (espasmo do pterigoide medial), abaulamento de palato e desvio contralateral da úvula;\n   - Conduta: Punção aspirativa/incisão e antibioticoterapia.',
    comentariosAlternativas: {
      A: 'Correta. Integra com absoluta perfeição didática e clínica as três principais afecções supurativas profundas do pescoço infantil.',
      B: 'Incorreta. Inverteu e confundiu todas as patologias clássicas.',
      C: 'Incorreta. Cita laringomalácia congênita e angina de Ludwig de forma incorreta.',
      D: 'Incorreta. Troca o abscesso periamigdaliano com o retrofaríngeo.',
    },
  },
  {
    id: 'ped-est-076',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Laringomalácia: Fisiopatologia e Alterações Estruturais',
    isRevisao: false,
    enunciado:
      'A laringomalácia é a anomalia congênita mais comum da laringe e a causa mais frequente de estridor persistente no período neonatal e na primeira infância, respondendo por mais de 60% a 70% dos casos de anomalias congênitas laríngeas. Em relação à sua fisiopatologia e características anatomofuncionais, assinale a alternativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Decorre da imaturidade neuromotora e hipotonia das cartilagens de suporte da supraglote, gerando colapso inspiratório dinâmico das pregas ariepiglóticas encurtadas, cartilagens aritenoides redundantes e epiglote alongada tubular em formato de ômega sobre o vestíbulo laríngeo.',
      },
      {
        id: 'B',
        texto:
          'Resulta de processo neoplásico benigno endotelial localizado na subglote, cujo colapso se manifesta predominantemente na fase expiratória do ciclo respiratório.',
      },
      {
        id: 'C',
        texto:
          'É causada por falha na recanalização da cartilagem cricoide no embrião, resultando em estenose fixa e anular da fenda glótica com estridor bifásico constante.',
      },
      {
        id: 'D',
        texto:
          'Trata-se de infecção viral persistente que destrói a cartilagem tireoide intraútero, determinando colapso expiratório com broncoespasmo irreversível.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisiopatologia e Anatomofunção da Laringomalácia:\n\n1. Conceito e Epidemiologia:\n   - Principal causa de estridor congênito no lactente (> 60-70% de todas as anomalias laríngeas);\n   - Resulta de atraso na maturação neuromotora e frouxidão estrutural dos tecidos de suporte supraglótico;\n\n2. Mecanismo Fisiopatológico:\n   - Durante a inspiração, a pressão intraluminal negativa (Princípio de Bernoulli) puxa as estruturas supraglóticas flácidas para dentro do lúmen laríngeo, causando estreitamento dinâmico intermitente e turbulência de ar (estridor inspiratório);\n\n3. Tríade Anatômica Típica:\n   - Epiglote alongada, recurvada e tubular em formato de ômega (Ω);\n   - Pregas ariepiglóticas encurtadas, tracionando a epiglote posteriormente;\n   - Redundância e edema das cartilagens aritenoides e corniculadas, que basculam para dentro da glote a cada inspiração.',
    comentariosAlternativas: {
      A: 'Correta. Descreve com exatidão a flacidez neuromotora e o colapso dinâmico supraglótico com epiglote em ômega e pregas ariepiglóticas encurtadas.',
      B: 'Incorreta. A descrição de lesão vascular endotelial subglótica corresponde ao hemangioma subglótico.',
      C: 'Incorreta. Falha de recanalização cricoide descreve estenose subglótica congênita.',
      D: 'Incorreta. A laringomalácia não é processo infeccioso nem causa destruição de cartilagem.',
    },
  },
  {
    id: 'ped-est-077',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Laringomalácia: Apresentação Clínica e Dinâmica Postural',
    isRevisao: false,
    enunciado:
      'Lactente de 6 semanas de vida, nascido a termo com peso e estatura adequados, é levado à consulta de puericultura pelos pais devido a ruído respiratório agudo, em "som de galo" ou musical, que se iniciou na 2ª semana de vida e tem aumentado de intensidade. Os pais relatam que o barulho se acentua quando a criança chora, se agita, mama ou quando está deitada de barriga para cima (decúbito dorsal). Ao colocá-la de barriga para baixo (decúbito ventral/prona) ou ao estender suavemente a cabeça, o ruído diminui sensivelmente. O bebê está afebril, corado, em aleitamento materno exclusivo com ganho de peso diário de 32 g/dia e sem retrações torácicas importantes em repouso. O diagnóstico mais provável é:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Laringomalácia, em que o decúbito ventral e a hiperextensão cervical favorecem a projeção anterior da base da língua e das cartilagens laríngeas, reduzindo o colapso supraglótico.',
      },
      {
        id: 'B',
        texto:
          'Crupe viral subagudo refratário, com indicação imediata de corticoterapia parenteral prolongada e hospitalização.',
      },
      {
        id: 'C',
        texto:
          'Traqueomalácia distal pura, cujo ruído é essencialmente expiratório e piora na posição prona.',
      },
      {
        id: 'D',
        texto:
          'Epiglotite aguda bacteriana de evolução indolente, necessitando de intubação preventiva.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Apresentação Clínica da Laringomalácia e Modulação Postural:\n\n1. Início e Curso Temporal:\n   - Não costuma se manifestar imediatamente ao nascimento: surge entre a 2ª e a 6ª semana de vida com estridor inspiratório intermitente de alta tonalidade (musical);\n   - Aumenta gradualmente de intensidade, atingindo pico de gravidade entre 4 e 8 meses de idade;\n\n2. Fatores de Piora:\n   - Agitação, choro vigoroso (maior esforço inspiratório com aumento do colapso pela pressão negativa);\n   - Alimentação (mamadas);\n   - Decúbito dorsal (a gravidade desloca a língua e a supraglote flácida posteriormente sobre a fenda glótica);\n\n3. Fatores de Melhora Típicos:\n   - Decúbito ventral (posição prona: a gravidade traciona a epiglote e língua anteriormente para longe da glote);\n   - Extensão cervical suave e repouso/sono calmo;\n\n4. Ganho de Peso e Estado Geral:\n   - Nas formas leves a moderadas (> 80-90%), a criança é "feliz, corada e ganha peso", mantendo crescimento pôndero-estatural normal.',
    comentariosAlternativas: {
      A: 'Correta. Apresenta o quadro clássico de laringomalácia congênita com sua variação postural típica e ganho ponderal preservado.',
      B: 'Incorreta. Crupe viral é infecção aguda com tosse ladrante e pródromos virais, não ruído congênito crônico de 6 semanas.',
      C: 'Incorreta. A traqueomalácia pura tem estridor expiratório e tosse em foca, sem melhora na prona.',
      D: 'Incorreta. Epiglotite aguda é toxêmica, hiperaguda e fulminante, incompatível com lactente hígido de 6 semanas ganhando 32 g/dia.',
    },
  },
  {
    id: 'ped-est-078',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Laringomalácia: Diagnóstico Padrão-Ouro',
    isRevisao: false,
    enunciado:
      'Diante da suspeita clínica de laringomalácia em um lactente de 2 meses que apresenta estridor inspiratório intermitente e esforço respiratório leve, qual é o exame complementar considerado padrão-ouro para o diagnóstico confirmatório e caracterização anatômica da afecção?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Nasofibrolaringoscopia flexível à beira do leito ou em ambulatório, realizada com o paciente acordado e em respiração espontânea.',
      },
      {
        id: 'B',
        texto:
          'Broncoscopia rígida sob anestesia geral profunda e intubação orotraqueal eletiva.',
      },
      {
        id: 'C',
        texto:
          'Ressonância magnética de pescoço sob sedação profunda e contraste paramagnético.',
      },
      {
        id: 'D',
        texto:
          'Radiografia simples de tórax e perfil de pescoço, que possui sensibilidade superior a 98% para o diagnóstico definitivo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diagnóstico Padrão-Ouro da Laringomalácia:\n\n1. Nasofibrolaringoscopia Flexível:\n   - Exame de escolha e padrão-ouro confirmatório;\n   - Condições de realização mandatórias:\n     * Paciente acordado (não sedado ou sob anestesia geral);\n     * Em respiração espontânea ativa (idealmente registrando momentos de calma e choro);\n   - Justificativa técnica: a sedação ou paralisia neuromuscular abole a dinâmica respiratória ativa e pode mascarar ou simular falsamente o colapso inspiratório das estruturas supraglóticas;\n\n2. Achados Dinâmicos Visualizados ao Vivo:\n   - Prolapso posterior da epiglote ômega;\n   - Báscula anteroinferior das cartilagens corniculadas e cuneiformes redundantes;\n   - Pregas ariepiglóticas curtas limitando o diâmetro anteroposterior do vestíbulo laríngeo;\n\n3. Avaliação de Vias Aéreas Síncronas:\n   - Permite verificar a integridade da motilidade das pregas vocais e afastar laringite de refluxo associada.',
    comentariosAlternativas: {
      A: 'Correta. A nasofibrolaringoscopia flexível dinâmica com o paciente acordado e respirando espontaneamente é o padrão-ouro confirmatório.',
      B: 'Incorreta. A broncoscopia rígida sob anestesia geral é o método de escolha para corpo estranho ou estenose fixa, mas a anestesia mascara a laringomalácia dinâmica.',
      C: 'Incorreta. RM é estática, cara e exige sedação, incapaz de avaliar dinâmica inspiratória das cartilagens laríngeas.',
      D: 'Incorreta. O RX simples pode ser normal ou inconclusivo, com baixíssima sensibilidade para laringomalácia.',
    },
  },
  {
    id: 'ped-est-079',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Laringomalácia: História Natural e Manejo Conservador',
    isRevisao: false,
    enunciado:
      'Um lactente de 3 meses é diagnosticado com laringomalácia isolada leve a moderada por nasofibrolaringoscopia. Ele apresenta estridor inspiratório ao mamar e chorar, porém seu desenvolvimento neuropsicomotor é adequado, a curva ponderal situa-se no percentil 50 de peso para idade pela OMS, não apresenta cianose, apneias ou tiragens torácicas em repouso. Qual é a orientação mais adequada aos pais sobre a história natural da doença e a conduta a ser adotada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de uma afecção de curso autolimitado e benigno na grande maioria dos casos; a conduta é conservadora com orientações posturais e acompanhamento ponderal contínuo, esperando-se resolução espontânea entre 12 e 18 meses de vida com o crescimento e enrijecimento das cartilagens laríngeas.',
      },
      {
        id: 'B',
        texto:
          'É obrigatória a indicação imediata de supraglotoplastia cirúrgica para evitar sequelas pulmonares irreversíveis e atraso cognitivo.',
      },
      {
        id: 'C',
        texto:
          'Deve ser prescrito corticoide inalatório ou sistêmico em uso contínuo até o primeiro ano de vida para acelerar a maturação cartilaginosa.',
      },
      {
        id: 'D',
        texto:
          'A mãe deve suspender imediatamente o aleitamento materno e introduzir fórmula espessada com mamadeira ortodôntica para cessar o ruído.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'História Natural e Conduta na Laringomalácia Não Complicada:\n\n1. Resolução Espontânea:\n   - Em mais de 85% a 90% dos lactentes, a laringomalácia é uma condição benigna e autolimitada;\n   - Acomete seu pico de sintomatologia entre os 4 e 8 meses de vida;\n   - Conforme o esqueleto cartilaginoso cresce, ganha rigidez e o tônus neuromuscular da faringolaringe amadurece, os sintomas regridem espontaneamente até os 12 a 18 meses de idade (raramente até 24 meses);\n\n2. Conduta Conservadora:\n   - Observação clínica vigilante;\n   - Monitorização estrita do ganho pondero-estatural;\n   - Orientações posturais (evitar decúbito dorsal exclusivo durante despertares, amamentar em posição mais ereta, pausar e arrotar adequadamente);\n   - Apoio irrestrito à continuidade do aleitamento materno;\n   - Tratamento adjuvante de doença do refluxo gastroesofágico se houver sintomas dispépticos ou regurgitação com irritabilidade.',
    comentariosAlternativas: {
      A: 'Correta. Reflete com fidelidade a conduta expectante segura e a história natural de resolução espontânea até 12-18 meses.',
      B: 'Incorreta. Cirurgia é reservada para menos de 10-15% dos casos que apresentam complicações graves.',
      C: 'Incorreta. Corticoides não aceleram a maturação cartilaginosa e provocam toxicidade sistêmica inaceitável se usados cronicamente.',
      D: 'Incorreta. O aleitamento materno deve ser encorajado e mantido; a suspensão é errônea e iatrogênica.',
    },
  },
  {
    id: 'ped-est-080',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Laringomalácia: Indicações Formais de Supraglotoplastia',
    isRevisao: false,
    enunciado:
      'A grande maioria dos lactentes com laringomalácia é tratada de forma conservadora. No entanto, aproximadamente 10% a 15% desenvolvem a forma grave da doença com risco de descompensação cardiorrespiratória e necessitam de intervenção cirúrgica endoscópica (supraglotoplastia). Assinale a alternativa que apresenta critérios formais para indicação cirúrgica na laringomalácia grave:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Falha do ganho pôndero-estatural (failure to thrive) por gasto energético excessivo durante a alimentação, apneias obstrutivas com hipoxemia/hipercapnia, pectus excavatum adquirido e hipertensão pulmonar/cor pulmonale.',
      },
      {
        id: 'B',
        texto:
          'Presença isolada de estridor musical audível sem estetoscópio e regurgitações pós-mamadas fisiológicas.',
      },
      {
        id: 'C',
        texto:
          'Choro rouco ao acordar e preferência espontânea do bebê pelo decúbito ventral.',
      },
      {
        id: 'D',
        texto:
          'Idade cronológica inferior a 30 dias de vida associada a parto cesáreo eletivo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Indicações Formais de Supraglotoplastia (Laringoplastia Supraglótica):\n\n1. Critérios de Gravidade e Descompensação:\n   - Falha de Ganho Pôndero-Estatural (déficit ponderal progressivo por fadiga respiratória ao sugar e enorme gasto calórico pelo trabalho ventilatório);\n   - Apneias obstrutivas do sono significativas, com dessaturações crônicas (< 90%) ou hipercapnia matinal;\n   - Sinais graves de desconforto respiratório mantido com tiragens subcostais/fúrcula e deformidade torácica dinâmica adquirida (pectus excavatum secundário à pressão negativa inspiratória sustentada);\n   - Hipertensão pulmonar e cor pulmonale secundários à hipóxia/hipercapnia crônicas;\n   - Episódios recorrentes de engasgos severos com aspiração pulmonar silente e cianose durante a alimentação;\n\n2. Procedimento Cirúrgico (Supraglotoplastia):\n   - Secção a laser ou microinstrumentos frios das pregas ariepiglóticas encurtadas e ablação conservadora do excesso de mucosa aritenóidea, restabelecendo a patência do vestíbulo laríngeo com altíssima taxa de sucesso (> 90%).',
    comentariosAlternativas: {
      A: 'Correta. Elenca os critérios consolidados pelas diretrizes de otorrinolaringologia pediátrica para supraglotoplastia.',
      B: 'Incorreta. Estridor audível e refluxo fisiológico são comuns na forma leve e não autorizam intervenção invasiva.',
      C: 'Incorreta. Choro rouco e preferência por decúbito ventral são achados típicos de manejo conservador.',
      D: 'Incorreta. Idade < 30 dias e cesárea não são indicações de procedimento cirúrgico.',
    },
  },
  {
    id: 'ped-est-081',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Laringomalácia e Refluxo Gastroesofágico: Ciclo Fisiopatológico',
    isRevisao: false,
    enunciado:
      'Existe uma estreita e frequente associação fisiopatológica entre a laringomalácia e a doença do refluxo gastroesofágico (DRGE) ou laringofaríngeo na infância, com prevalência de coocorrência estimada em mais de 70% a 80%. A respeito dessa interação patológica, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O grande esforço inspiratório contra a via aérea colapsada gera pressões intratorácicas acentuadamente negativas a cada incursão, o que favorece o refluxo retrógrado do conteúdo gástrico ácido para o esôfago e laringe, causando edema e inflamação da mucosa supraglótica, piorando ainda mais o colapso inspiratório.',
      },
      {
        id: 'B',
        texto:
          'O refluxo gastroesofágico causa hipertrofia cartilaginosa da epiglote, impedindo qualquer colapso mecânico durante a inspiração.',
      },
      {
        id: 'C',
        texto:
          'A presença de DRGE protege o lactente contra estridor laringomalácico devido à alcalinização protetora da saliva.',
      },
      {
        id: 'D',
        texto:
          'O tratamento com inibidores de bomba de prótons ou bloqueadores H2 está formalmente contraindicado em lactentes com laringomalácia devido ao risco de broncoespasmo reflexo imediato.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Interação Patológica entre Laringomalácia e Refluxo Gastroesofágico / Laringofaríngeo:\n\n1. Ciclo Vicioso Fisiopatológico:\n   - Estridor/Obstrução Supraglótica -> Aumento expressivo da pressão negativa intratorácica inspiratória necessária para vencer a resistência;\n   - Gradiente de Pressão Transtorácico Negativo -> "Efeito de sucção" do conteúdo gástrico para dentro do esôfago torácico e faringolaringe;\n   - Refluxo Ácido/Péptico -> Queimadura química, edema e eritema da mucosa aritenóidea e pregas ariepiglóticas;\n   - Edema e Redundância da Mucosa Laríngea -> Piora do colapso mecânico inspiratório e aumento do estridor;\n\n2. Implicação Terapêutica:\n   - O controle clínico do refluxo com medidas posturais (elevação de cabeceira, decúbito mais ereto após mamadas) e fármacos antiácidos (como inibidores de bomba de prótons ou antagonistas H2) alivia o edema da mucosa supraglótica e frequentemente melhora os sintomas respiratórios da laringomalácia.',
    comentariosAlternativas: {
      A: 'Correta. Explica com rigor hemodinâmico e respiratório o mecanismo de retroalimentação entre a pressão negativa intratorácica e o edema de refluxo.',
      B: 'Incorreta. O refluxo gera edema e inflamação de mucosa, não hipertrofia de cartilagem.',
      C: 'Incorreta. O refluxo não protege; ele agrava a obstrução e o estridor.',
      D: 'Incorreta. O uso de inibidores de secreção ácida é frequentemente recomendado como terapia adjuvante.',
    },
  },
  {
    id: 'ped-est-082',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Hemangioma Subglótico: Apresentação e Marcadores Cutâneos',
    isRevisao: false,
    enunciado:
      'Lactente do sexo feminino, com 3 meses de vida, desenvolve estridor bifásico (inspiratório e expiratório) insidioso e progressivo, associado a tosse metálica e episódios de desconforto respiratório inicialmente atribuídos a crupe viral recorrente, porém sem resposta a corticoides inalatórios. Ao exame físico detalhado, observa-se discreta lesão vascular avermelhada em placa, tipo hemangioma infantil, acometendo a região mandibular e submandibular esquerda ("distribuição em barba"). Não há febre e a criança aceita o seio materno, mas apresenta tiragem intercostal moderada. Diante dessa correlação clínica e epidemiológica, qual é a principal hipótese diagnóstica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Hemangioma subglótico congênito/infantil, em fase proliferativa de crescimento.',
      },
      {
        id: 'B',
        texto:
          'Abscesso periamigdaliano complicado com extensão vascular jugular.',
      },
      {
        id: 'C',
        texto:
          'Crupe espasmódico leve de repetição associado a dermatite atópica mandibular.',
      },
      {
        id: 'D',
        texto:
          'Aspiração crônica de corpo estranho radiopaco na fenda vestibular laríngea.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Hemangioma Subglótico na Infância:\n\n1. Epidemiologia e Apresentação:\n   - Tumor vascular benigno mais comum da via aérea no primeiro ano de vida;\n   - Predileção marcante pelo sexo feminino (proporção 2:1 a 3:1);\n   - Curso temporal típico:\n     * Não está presente ou é assintomático ao nascimento;\n     * Inicia sintomas obstrutivos entre 6 e 12 semanas (2 a 3 meses de vida), coincidindo com a fase proliferativa rápida do hemangioma infantil;\n     * Estridor bifásico progressivo, tosse seca e esforço respiratório;\n\n2. Associação com Hemangiomas Cutâneos:\n   - Cerca de 50% dos pacientes com hemangioma subglótico possuem hemangiomas cutâneos associados;\n   - A localização do hemangioma cutâneo na área da mandíbula, queixo e pescoço anterior (distribuição "em barba") eleva exponencialmente o risco de acometimento concomitante de via aérea para mais de 60%;\n\n3. Diagnóstico e Imagem:\n   - Laringoscopia flexível/laringotraqueoscopia: massa submucosa compressível, violácea ou avermelhada, tipicamente posterolateral na subglote.',
    comentariosAlternativas: {
      A: 'Correta. Identifica com precisão o hemangioma subglótico clássico associado ao marcador cutâneo na área de "barba".',
      B: 'Incorreta. Abscesso periamigdaliano ocorre em crianças maiores/adolescentes com febre alta e trismo, não aos 3 meses de forma insidiosa.',
      C: 'Incorreta. Crupe espasmódico tem crises paroxísticas noturnas abruptas sem estridor bifásico progressivo e não tem ligação com hemangiomas.',
      D: 'Incorreta. Lactente de 3 meses não tem mobilidade e preensão voluntária para aspirar corpos estranhos alimentares.',
    },
  },
  {
    id: 'ped-est-083',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Hemangioma Subglótico: Tratamento Farmacológico com Betabloqueador',
    isRevisao: false,
    enunciado:
      'Uma lactente de 4 meses com diagnóstico confirmado de hemangioma subglótico obstrutivo volumoso através de laringotraqueoscopia apresenta desconforto respiratório moderado. Historicamente, essas crianças necessitavam de traqueostomia prolongada, laser ou cirurgia aberta. Atualmente, qual é o tratamento farmacológico de primeira escolha, de alta eficácia na regressão do tumor vascular e que revolucionou o prognóstico dessa afecção?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Propranolol oral (betabloqueador não seletivo), que promove vasoconstrição imediata, inibição da angiogênese (downregulation de VEGF e bFGF) e indução de apoptose das células endoteliais capilares.',
      },
      {
        id: 'B',
        texto:
          'Ceftriaxona associada a Clindamicina por via venosa para esterilização da parede endotelial vascular.',
      },
      {
        id: 'C',
        texto:
          'Nebulização contínua com budesonida e adrenalina a cada 2 horas por período indeterminado.',
      },
      {
        id: 'D',
        texto:
          'Interferon-alfa recombinante diário associado à radioterapia externa fracionada da cartilagem cricoide.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Tratamento Farmacológico do Hemangioma Subglótico Infantil:\n\n1. Revolução Terapêutica do Propranolol:\n   - O Propranolol oral (betabloqueador não seletivo) tornou-se a primeira linha de tratamento absoluto para hemangiomas infantis obstrutivos ou desfigurantes desde a descoberta de Léauté-Labrèze et al. em 2008;\n   - Mudou radicalmente a história natural da doença, reduzindo a necessidade de traqueostomia em mais de 80% a 90%;\n\n2. Mecanismos de Ação no Hemangioma:\n   - Fase Inicial (horas a dias): Vasoconstrição local mediada por bloqueio de receptores beta-2 adrenérgicos (alívio rápido do edema);\n   - Fase Intermediária: Bloqueio das vias de sinalização de fatores pró-angiogênicos (VEGF - Fator de Crescimento do Endotélio Vascular e bFGF - Fator de Crescimento Fibroblástico Básico);\n   - Fase Tardia: Indução de apoptose celular endotelial programada, promovendo involução acelerada da lesão;\n\n3. Cuidados e Monitorização:\n   - Dose usual: 1 a 3 mg/kg/dia dividida em 2 a 3 tomadas;\n   - Monitorização de bradicardia, hipotensão, hipoglicemia e broncoespasmo (orientar alimentação regular antes das tomadas).',
    comentariosAlternativas: {
      A: 'Correta. O propranolol oral é a terapia padrão-ouro farmacológica modificadora do curso da doença com respaldo universal.',
      B: 'Incorreta. Hemangioma é neoplasia vascular benigna, não infecção bacteriana.',
      C: 'Incorreta. Nebulizações são apenas paliativas e não causam regressão da massa vascular tumoral.',
      D: 'Incorreta. Interferon e radioterapia apresentam gravíssima neurotoxicidade (diplegia espástica) e malignidade secundária, sendo totalmente proscritos.',
    },
  },
  {
    id: 'ped-est-084',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Estenose Subglótica Congênita vs Adquirida',
    isRevisao: false,
    enunciado:
      'Lactente de 5 meses, ex-prematuro de 27 semanas de idade gestacional, permaneceu internado em UTI neonatal por 60 dias com intubação orotraqueal prolongada por 28 dias devido à síndrome do desconforto respiratório do recém-nascido. Após a alta hospitalar, apresenta estridor bifásico permanente que se agrava nos quadros de infecção respiratória alta, tosse rouca e retração intercostal crônica. O diâmetro do lúmen subglótico ao nível da cartilagem cricoide é estenótico à endoscopia. Em relação à estenose subglótica na infância, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Mais de 90% dos casos de estenose subglótica infantil são adquiridos, tendo como principal fator etiológico a intubação orotraqueal prolongada e traumática, em que a compressão contínua do balonete ou tubo inadequado contra a cartilagem cricoide gera isquemia mucosa, ulceração, necrose cartilaginosa e cicatrização fibrótica constritiva.',
      },
      {
        id: 'B',
        texto:
          'A cartilagem cricoide é um anel aberto em formato de ferradura com grande complacência posterior, o que torna a subglote a região menos suscetível a lesões por tubos endotraqueais.',
      },
      {
        id: 'C',
        texto:
          'As estenoses subglóticas congênitas são invariavelmente associadas a infecções virais pelo Parainfluenza materno durante o primeiro trimestre gestacional.',
      },
      {
        id: 'D',
        texto:
          'O estridor característico da estenose subglótica é puramente expiratório devido ao colapso dinâmico supraglótico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Estenose Subglótica na Infância (Congênita vs Adquirida):\n\n1. Anatomia e Vulnerabilidade da Subglote Pediátrica:\n   - A cartilagem cricoide é o ÚNICO anel cartilaginoso completamente fechado e rígido (360 graus) de toda a via aérea;\n   - Em lactentes, a subglote ao nível da cricoide é o ponto de menor calibre de todo o trato respiratório superior;\n   - Qualquer edema, tubo calibroso demais ou balonete inflado comprime a mucosa contra a parede rígida da cricoide inexoravelmente;\n\n2. Fisiopatologia da Estenose Adquirida (> 90% dos casos):\n   - Intubação orotraqueal prolongada ou repetidas tentativas traumáticas de intubação;\n   - Isquemia da mucosa ciliar por pressão do tubo > pressão de perfusão capilar (20-30 mmHg);\n   - Necrose e ulceração da lâmina própria com condrite da cricoide subjacente;\n   - Deposição anômala de tecido de granulação e formação de cicatriz fibrótica densa concêntrica (estenose subglótica adquirida);\n\n3. Manifestação Clínica:\n   - Estridor bifásico (presente na inspiração e expiração, pois a estenose é fixa e rígida), tiragens e episódios repetidos de falha de extubação.',
    comentariosAlternativas: {
      A: 'Correta. Sintetiza com clareza anatomopatológica a etiologia da estenose adquirida pós-intubação na UTI neonatal.',
      B: 'Incorreta. A cricoide é um anel fechado e rígido (completo), o que a torna a área mais vulnerável e suscetível à isquemia por compressão.',
      C: 'Incorreta. A estenose congênita decorre de malformação embriológica (falha de recanalização), sem relação com Parainfluenza intrauterino.',
      D: 'Incorreta. Lesões estenóticas fixas subglóticas produzem estridor bifásico (inspiratório e expiratório).',
    },
  },
  {
    id: 'ped-est-085',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Estenose Subglótica: Classificação de Myer-Cotton e Manejo',
    isRevisao: false,
    enunciado:
      'A classificação de Myer-Cotton é internacionalmente empregada para estadiar a gravidade da estenose subglótica com base no percentual de obstrução da área da luz cricoide avaliada por endoscopia laringotraqueal. Associe corretamente o grau de estenose ao percentual e à conduta preconizada:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Grau I: obstrução de até 50% da luz (frequentemente manejo conservador); Grau II: obstrução de 51% a 70% (dilatação por balão ou laringotraqueoplastia); Grau III: obstrução de 71% a 99% com lúmen residual identificável; Grau IV: obstrução de 100% (estenose completa / ausência de luz), exigindo reconstrução cirúrgica aberta complexa e traqueostomia prévia.',
      },
      {
        id: 'B',
        texto:
          'Grau I: estenose completa de 100% da luz; Grau II: obstrução de 10% a 20%; Grau III: ausência de estridor; Grau IV: resolução espontânea em 24 horas.',
      },
      {
        id: 'C',
        texto:
          'A classificação de Myer-Cotton aplica-se apenas a corpos estranhos intrabrônquicos em adultos.',
      },
      {
        id: 'D',
        texto:
          'Qualquer estenose classificada como Grau I ou II necessita de traqueostomia definitiva e cricotireoidostomia cirúrgica imediata.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Classificação de Myer-Cotton para Estenose Subglótica:\n\n1. Grau I:\n   - Obstrução de 0% a 50% da luz subglótica;\n   - Conduta: Conservadora na maioria das vezes, vigilância e tratamento agressivo de infecções intercorrentes;\n\n2. Grau II:\n   - Obstrução de 51% a 70% da luz subglótica;\n   - Conduta: Dilatações endoscópicas por balão de alta pressão ou laringotraqueoplastia com enxerto de cartilagem costal / tireóidea;\n\n3. Grau III:\n   - Obstrução de 71% a 99% da luz subglótica (lúmen puntiforme ainda detectável);\n   - Conduta: Laringotraqueoplastia (LTP) com enxerto anterior e posterior de cartilagem ou ressecção cricotraqueal;\n\n4. Grau IV:\n   - Obstrução completa (100% - atresia adquirida, nenhuma fenda residual identificável);\n   - Conduta: Traqueostomia obrigatória para manter a vida seguida de ressecção cricotraqueal com anastomose tireotraqueal término-terminal.',
    comentariosAlternativas: {
      A: 'Correta. Apresenta perfeitamente os quatro graus de Myer-Cotton e suas abordagens terapêuticas correspondentes.',
      B: 'Incorreta. Inverteu totalmente os percentuais e graus da classificação.',
      C: 'Incorreta. A escala é específica para estenose laringotraqueal pediátrica.',
      D: 'Incorreta. Graus I e II são manejados conservadoramente ou com dilatação endoscópica sem necessidade de traqueostomia imediata.',
    },
  },
  {
    id: 'ped-est-086',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Paralisia Congênita de Pregas Vocais: Unilateral vs Bilateral',
    isRevisao: false,
    enunciado:
      'A paralisia de pregas vocais (pregas vocais imóveis) é a segunda anomalia congênita da laringe mais comum no recém-nascido e lactente. A respeito da distinção clínica e fisiopatológica entre as formas unilateral e bilateral, assinale a alternativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A paralisia unilateral manifesta-se predominantemente por alteração da fonação (choro rouco, fraco ou sussurrado) com via aérea habitualmente pérvia e sem estridor grave; já a paralisia bilateral manifesta-se tipicamente com choro normal ou quase inalterado, porém com estridor inspiratório grave, dispneia intensa e risco iminente de asfixia devido à fixação das pregas na linha média paramediana.',
      },
      {
        id: 'B',
        texto:
          'A paralisia bilateral causa afonia absoluta sem qualquer estridor respiratório, enquanto a unilateral sempre necessita de traqueostomia mandatória de urgência.',
      },
      {
        id: 'C',
        texto:
          'A principal causa de paralisia bilateral no período neonatal é o choro excessivo após a alta da maternidade.',
      },
      {
        id: 'D',
        texto:
          'Na paralisia unilateral esquerda congênita, o nervo acometido é o hipoglosso maior, sem relação anatômica com o arco da aorta.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Paralisia de Pregas Vocais no Recém-Nascido e Lactente:\n\n1. Paralisia Unilateral:\n   - Etiologia: Frequentemente decorre de estiramento do nervo laríngeo recorrente em partos difíceis com distócia de espáduas (geralmente lado direito ou esquerdo) ou pós-operatório de cirurgia cardíaca infantil (ex.: correção de persistência do canal arterial ou coarctação de aorta, acometendo o nervo laríngeo recorrente esquerdo);\n   - Quadro Clínico: Choro fraco, rouco, sussurrado e soproso, às vezes engasgos na deglutição; a via aérea permanece pérvia pela prega vocal normal contralateral abduzida -> estridor raro ou leve;\n   - Conduta: Conservadora, reabilitação fonoaudiológica, recuperação funcional espontânea em até 1 a 2 anos;\n\n2. Paralisia Bilateral:\n   - Etiologia: Geralmente associada a anomalias do sistema nervoso central (malformação de Chiari tipo II com mielomeningocele, hidrocefalia com hipertensão intracraniana ou hipóxia neonatal encefálica severa);\n   - Fisiopatologia e Paradoxo Clínico: As cordas vocais paralisadas ficam mantidas na linha média (posição paramediana aduzida). Dessa forma, a fonação (choro) é preservada e surpreendentemente forte, mas o espaço glótico é estreitíssimo -> estridor inspiratório severo, cianose, tiragem e desconforto extremo;\n   - Conduta: Suporte ventilatório imediato e frequentemente traqueostomia para assegurar a via aérea.',
    comentariosAlternativas: {
      A: 'Correta. Apresenta o paradoxo clínico clássico da paralisia unilateral (choro fraco, respira bem) versus bilateral (choro bom, asfixia grave).',
      B: 'Incorreta. Na bilateral o choro costuma ser preservado e o estridor é grave; na unilateral a via aérea costuma ser segura.',
      C: 'Incorreta. Choro excessivo não causa paralisia de pregas vocais.',
      D: 'Incorreta. O nervo afetado é o laríngeo recorrente (ramo do vago), cujo trajeto à esquerda contorna o arco aórtico.',
    },
  },
  {
    id: 'ped-est-087',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Membranas e Cistos Laríngeos Congênitos / Síndrome 22q11',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo apresenta, desde o primeiro minuto de vida, choro completamente áfono (choro sussurrado e silencioso), estridor bifásico e desconforto respiratório moderado. Ao exame físico inicial, observam-se fenda palatina submucosa, implantação baixa de orelhas e sopro cardíaco compatível com tetralogia de Fallot. A laringoscopia identifica uma membrana fibrosa translúcida espessa ocluindo os dois terços anteriores da fenda glótica (web laríngea congênita). Qual alteração genética e síndrome clínica clássica está fortemente associada a esse quadro?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Microdeleção do cromossomo 22q11.2 (Síndrome de DiGeorge / Síndrome velocardiofacial).',
      },
      {
        id: 'B',
        texto:
          'Trissomia livre do cromossomo 21 (Síndrome de Down com cardiopatia congênita isolada).',
      },
      {
        id: 'C',
        texto:
          'Monossomia do cromossomo X (Síndrome de Turner).',
      },
      {
        id: 'D',
        texto:
          'Mutação no gene CFTR associada a fibrose cística laringotraqueal congênita.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Membrana Laríngea Congênita (Glottic Web) e Síndrome de Deleção 22q11.2:\n\n1. Membrana Laríngea Congênita:\n   - Resulta de falha incompleta na recanalização da laringe primitiva por volta da 10ª semana de gestação;\n   - Localiza-se mais comumente na comissura anterior e terço anterior das pregas vocais verdadeiras;\n   - Sinal clássico: CHORO ÁFONO OU MUITO FRACO desde o nascimento associado a estridor e obstrução de via aérea conforme a espessura da membrana;\n\n2. Associação Genética Forte:\n   - Até 65% dos recém-nascidos com membrana laríngea congênita anterior têm a Síndrome da Microdeleção do Cromossomo 22q11.2 (Síndrome de DiGeorge / Síndrome Velocardiofacial / CATCH-22);\n   - Achados associados típicos:\n     * Cardiopatia conotruncal (Tetralogia de Fallot, tronco arterioso, arco aórtico interrompido);\n     * Hipoplasia/Aplasia de timo (imunodeficiência de células T);\n     * Hipoplasia de paratireoides (hipocalcemia neonatal com convulsões);\n     * Dismorfismos faciais e insuficiência velofaríngea/fenda palatina.',
    comentariosAlternativas: {
      A: 'Correta. A correlação entre membrana laríngea congênita e síndrome de microdeleção 22q11.2 (DiGeorge) é uma das associações clássicas em genética pediátrica.',
      B: 'Incorreta. Síndrome de Down cursa frequentemente com defeito do septo atrioventricular e estenose subglótica, mas não tem relação específica com membrana laríngea áfona.',
      C: 'Incorreta. Síndrome de Turner cursa com coarctação de aorta e baixa estatura, sem membrana laríngea.',
      D: 'Incorreta. Mutação CFTR causa fibrose cística (doença exócrina dos canais de cloro), não membrana congênita laríngea.',
    },
  },
  {
    id: 'ped-est-088',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Anéis Vasculares (Vascular Rings): Duplo Arco Aórtico',
    isRevisao: false,
    enunciado:
      'Lactente de 6 meses de vida é levado ao pronto-socorro com história de respiração ruidosa (estridor e roncos) desde o primeiro mês, tosse metálica "em latido" e episódios repetidos de engasgo, esforço respiratório e recusa alimentar progressiva durante a transição da dieta líquida para alimentos pastosos e sólidos. A mãe refere que a criança frequentemente adota postura com hiperextensão do pescoço, o que parece aliviar o ruído. A ausculta revela estridor bifásico e sibilos fixos na região traqueal central que não se modificam com broncodilatador. A principal suspeita diagnóstica é:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Anel vascular completo (como duplo arco aórtico ou arco aórtico direito com ligamento arterioso esquerdo), promovendo compressão extrínseca circunferencial da traqueia e do esôfago.',
      },
      {
        id: 'B',
        texto:
          'Asma brônquica do lactente desencadeada por alergia alimentar à proteína do leite de vaca.',
      },
      {
        id: 'C',
        texto:
          'Refluxo gastroesofágico fisiológico isolado com laringomalácia leve.',
      },
      {
        id: 'D',
        texto:
          'Coqueluche na fase paroxística com compressão hilar por adenomegalia tuberculosa.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Anéis Vasculares (Vascular Rings) na Infância:\n\n1. Conceito e Anatomia:\n   - Anomalias congênitas do desenvolvimento do sistema de arcos aórticos embrionários que resultam no encarceramento e compressão extrínseca da traqueia e do esôfago;\n   - Exemplos principais:\n     * Duplo arco aórtico (causa mais comum de anel vascular completo e sintomático);\n     * Arco aórtico direito com artéria subclávia esquerda aberrante e ligamento arterioso esquerdo retroesofágico;\n\n2. Fisiopatologia e Quadro Clínico "Respiratório + Digestivo":\n   - Compressão da traqueia: estridor bifásico (ou expiratório traqueal), tosse metálica áspera tipo latido ("brassy cough"), esforço ventilatório que melhora com hiperextensão do pescoço (pois alivia a pressão anterior sobre a árvore traqueal);\n   - Compressão do esôfago: "disfagia lusória" (engasgos, vômitos e recusa alimentar, que tipicamente se tornam evidentes na introdução alimentar de sólidos aos 6 meses);\n\n3. Tríade Clássica de Suspeição:\n   - Ruído respiratório precoce + piora alimentar com sólidos + extensão postural do pescoço.',
    comentariosAlternativas: {
      A: 'Correta. Identifica a compressão mista aerodigestiva característica do duplo arco aórtico (anel vascular).',
      B: 'Incorreta. Asma cursa com sibilos expiratórios difusos responsivos a beta-2 agonistas e sem estridor traqueal bifásico nem disfagia mecânica para sólidos.',
      C: 'Incorreta. Laringomalácia pura não comprime o esôfago nem causa disfagia sólida seletiva nem tosse metálica traqueal.',
      D: 'Incorreta. Coqueluche tem tosse paroxística com guincho inspiratório e não compressão vascular congênita.',
    },
  },
  {
    id: 'ped-est-089',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Anéis Vasculares: Diagnóstico por Imagem e Esofagograma',
    isRevisao: false,
    enunciado:
      'Na investigação diagnóstica de uma criança com suspeita de compressão traqueoesofágica por anel vascular, qual sequência de exames por imagem representa a abordagem clássica de triagem não invasiva seguida pela confirmação anatômica tridimensional para o planejamento cirúrgico?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Esofagograma baritado (estudo contrastado esofágico) como triagem rápida, revelando compressões extrínsecas patológicas nas paredes posterior e lateral do esôfago, seguido de Angiotomografia Computadorizada (Angio-TC) ou Angiorressonância Magnética (Angio-RM) de tórax para reconstrução vascular tridimensional.',
      },
      {
        id: 'B',
        texto:
          'Endoscopia digestiva alta isolada com biópsia gástrica seguida de radiografia panorâmica dos seios da face.',
      },
      {
        id: 'C',
        texto:
          'Cintilografia de esvaziamento esofágico radioisótopo com gálio-67 associada a eletrocardiograma seriado.',
      },
      {
        id: 'D',
        texto:
          'Ultrassonografia do abdome superior com prova do refluxo sem exames torácicos adicionais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Investigação Diagnóstica dos Anéis Vasculares:\n\n1. Esofagograma Baritado (Estudo Contrastado do Esôfago):\n   - Método de triagem tradicional mais simples, rápido e de alta sensibilidade;\n   - Como o esôfago corre no compartimento posterior entre a coluna vertebral e os vasos e traqueia, qualquer anel vascular causará chanfraduras e indentações extrínsecas típicas na coluna baritada:\n     * Indentação posterior e indentação lateral bilateral na incidência AP e oblíqua (sugestivo de duplo arco aórtico);\n     * Indentação anterior profunda no esôfago (sugestivo de laço de artéria pulmonar / sling);\n\n2. Angio-TC / Angio-RM de Tórax (Padrão-Ouro de Mapeamento Anatômico):\n   - Fornece reconstrução tridimensional precisa da anatomia cardiovascular;\n   - Define o arco dominante (geralmente o direito no duplo arco aórtico) e o arco atrésico/hipoplásico;\n   - Mapeia o trajeto de vasos anômalos e o grau exato de redução do lúmen traqueal, fundamental para o cirurgião cardiovascular planejar a toracotomia e ligadura do segmento não dominante.',
    comentariosAlternativas: {
      A: 'Correta. Apresenta a sequência radiológica clássica recomendada pelas sociedades de cardiologia e cirurgia pediátrica.',
      B: 'Incorreta. EDA com biópsia e RX de seios da face não esclarecem anomalias dos arcos aórticos torácicos.',
      C: 'Incorreta. Cintilografia com gálio é para pesquisa de focos infecciosos, não anomalias vasculares congênitas.',
      D: 'Incorreta. US de abdome avalia estenose de piloro e refluxo gástrico, sem avaliar o mediastino superior.',
    },
  },
  {
    id: 'ped-est-090',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Sling de Artéria Pulmonar (Laço Vascular Pulmonar)',
    isRevisao: false,
    enunciado:
      'O sling de artéria pulmonar (laço da artéria pulmonar) é uma anomalia vascular congênita rara em que a artéria pulmonar esquerda origina-se de forma anômala do ramo arterial pulmonar direito, cursando posteriormente entre a traqueia e o esôfago em direção ao hilo pulmonar esquerdo. A respeito dessa condição anatômica, assinale o achado clássico ao esofagograma baritado e sua frequente associação anatomopatológica traqueal:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Produz indentação na parede anterior do esôfago (entre a traqueia e o esôfago) e frequentemente associa-se à presença de anéis traqueais cartilaginosos completos ("traqueia em cano de espingarda"), determinando estenose traqueal fixa grave.',
      },
      {
        id: 'B',
        texto:
          'Produz indentação na parede posterior do esôfago e associa-se exclusivamente a cistos tireoglossos benignos.',
      },
      {
        id: 'C',
        texto:
          'Não comprime a traqueia, sendo condição assintomática que dispensa qualquer investigação cardiológica.',
      },
      {
        id: 'D',
        texto:
          'Causa apenas broncoespasmo induzido por exercício na adolescência com RX de tórax normal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Sling de Artéria Pulmonar (Pulmonary Artery Sling):\n\n1. Disposição Anatômica Única:\n   - É a ÚNICA anomalia vascular que passa DIRETAMENTE ENTRE a traqueia (anteriormente) e o esôfago (posteriormente);\n   - Por essa razão, no esofagograma baritado, o vaso anômalo causa uma compressão extrínseca na face ANTERIOR do esôfago (ao contrário do duplo arco aórtico, que comprime primariamente a face posterior);\n\n2. Síndrome do Sling-Traqueocricoide / Anéis Completos:\n   - Em mais de 50% dos casos, o sling associa-se a anéis traqueais cartilaginosos circulares completos ("complete tracheal rings" ou traqueia em cano de espingarda/o-rings), sem a porção membranosa traqueal posterior normal;\n   - Essa associação provoca estenose traqueal fixa gravíssima, hipoplasia do brônquio principal direito ou traqueomalácia difusa;\n   - Tratamento: Translocação cirúrgica da artéria pulmonar esquerda para a posição anterior à traqueia combinada com traqueoplastia de deslizamento (slide tracheoplasty).',
    comentariosAlternativas: {
      A: 'Correta. Identifica com precisão ímpar a compressão na parede anterior do esôfago e a clássica associação com anéis traqueais completos.',
      B: 'Incorreta. A compressão do sling é anterior no esôfago, não posterior, e não tem associação com cistos tireoglossos.',
      C: 'Incorreta. Comprime severamente a traqueia e pode levar a insuficiência respiratória fatal se não operada.',
      D: 'Incorreta. Manifesta-se no período neonatal e nos primeiros meses de vida com estridor grave, não apenas na adolescência.',
    },
  },
  {
    id: 'ped-est-091',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Aspiração de Corpo Estranho: Epidemiologia e Fatores de Risco',
    isRevisao: false,
    enunciado:
      'A aspiração de corpo estranho (ACE) para as vias aéreas é uma das principais causas de óbito acidental e morbidade respiratória grave na faixa etária pediátrica. Em relação à epidemiologia, faixa etária de maior vulnerabilidade e natureza dos corpos estranhos aspirados, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O pico de incidência ocorre entre 1 e 3 anos de idade, decorrente da combinação de exploração oral habitual do ambiente, locomoção ativa, ausência de dentição molar para trituração adequada e imaturidade da deglutição; os materiais orgânicos (especialmente amendoim, nozes, castanhas e sementes) são responsáveis por mais de 70% a 80% dos casos.',
      },
      {
        id: 'B',
        texto:
          'A faixa etária mais acometida são os recém-nascidos nos primeiros 10 dias de vida devido à aspiração de leite materno hiperosmolar.',
      },
      {
        id: 'C',
        texto:
          'Mais de 95% dos corpos estranhos aspirados por crianças são peças metálicas radiopacas, como moedas e pilhas alcalinas.',
      },
      {
        id: 'D',
        texto:
          'Crianças escolares e adolescentes apresentam o maior risco de óbito por aspiração alimentar devido à deglutição rápida em atividades esportivas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Epidemiologia e Fatores de Risco da Aspiração de Corpo Estranho (ACE):\n\n1. Faixa Etária Crítica (1 a 3 anos - Lactentes e Pré-escolares):\n   - Corresponde a mais de 75% a 80% de todos os acidentes por corpo estranho na infância;\n   - Meninos são ligeiramente mais afetados que meninas (proporção ~1,5:1);\n\n2. Fatores Anatômicos e de Desenvolvimento Neuropsicomotor:\n   - Ausência de dentes molares (os molares de leite completam erupção apenas por volta dos 24 a 30 meses; sem eles, a criança não tritura alimentos duros);\n   - Hábito exploratório oral natural dessa etapa;\n   - Coordenação neuromuscular reflexa da deglutição ainda imatura;\n   - Distração frequente com risadas, choro, corrida ou brincadeiras com alimento ou pequenos objetos na boca;\n\n3. Natureza dos Corpos Estranhos:\n   - Predomínio absoluto de CORPOS ESTRANHOS ORGÂNICOS / VEGETAIS (70% a 85%):\n     * Grãos de amendoim (o campeão absoluto nas estatísticas mundiais e nacionais), castanhas, nozes, milho, feijão, sementes de melancia, pipoca e uvas inteiras;\n   - Corpos inorgânicos (plásticos de brinquedos, tampas de caneta, bexigas de látex, pilhas botão) respondem pelo restante.',
    comentariosAlternativas: {
      A: 'Correta. Sintetiza magistralmente a tríade de risco (1-3 anos, ausência de molares, alimentos orgânicos/amendoim).',
      B: 'Incorreta. Recém-nascidos não têm preensão de objetos e não aspiram corpos estranhos ambientais.',
      C: 'Incorreta. Mais de 80% dos corpos estranhos na via aérea respiratória são orgânicos e radiotransparentes; metais são mais comuns no trato gastrointestinal (esôfago).',
      D: 'Incorreta. O pico absoluto e letalidade concentram-se em menores de 3 anos.',
    },
  },
  {
    id: 'ped-est-092',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Aspiração de Corpo Estranho: Fases Clínicas e Período de Latência',
    isRevisao: false,
    enunciado:
      'Uma menina de 2 anos estava brincando na sala de estar enquanto comia castanhas de caju, quando subitamente apresentou tosse violenta, engasgo e cianose perioral transitória. A mãe interveio acalmando a criança. Cerca de 30 minutos depois, a criança não tossia mais, estava ativa, alimentando-se e comunicando-se normalmente. A mãe, tranquilizada, quase desiste de ir ao serviço de emergência. A respeito da história clínica da aspiração de corpo estranho, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A história de tosse súbita associada a engasgo prévio (síndrome de penetração) tem sensibilidade superior a 90% para o diagnóstico; a remissão temporária dos sintomas marca a perigosa "fase de latência clínica assintomática", que decorre da fadiga dos reflexos de tosse e acomodação do objeto na árvore brônquica, jamais autorizando a exclusão do evento.',
      },
      {
        id: 'B',
        texto:
          'A ausência imediata de sintomas após 30 minutos confirma com segurança a eliminação completa ou deglutição espontânea do corpo estranho para o estômago, autorizando alta domiciliar.',
      },
      {
        id: 'C',
        texto:
          'O exame físico normal após um episódio de engasgo afasta a necessidade de qualquer investigação complementar ou internação.',
      },
      {
        id: 'D',
        texto:
          'O período de latência assintomática ocorre exclusivamente quando o corpo estranho é metálico e se fixa na carina traqueal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As Três Fases Clínicas da Aspiração de Corpo Estranho:\n\n1. Fase 1: Síndrome de Penetração (Episódio Inicial Agudo):\n   - Engasgo súbito, tosse explosiva paroxística, sufocação, cianose e esforço respiratório quando o objeto toca os receptores mecânicos da laringe e traqueia;\n   - Essa história clínica colhida na anamnese é o dado MAIS SENSÍVEL E IMPORTANTE de todo o caso (> 90%);\n\n2. Fase 2: Período de Latência Assintomática (Armadilha Perigosa):\n   - Ocorre acomodação mecânica do corpo estranho em um brônquio (comum no brônquio fonte direito);\n   - Ocorre fadiga dos reflexos de tosse da mucosa;\n   - A criança parece completamente normal, calma e assintomática por horas, dias ou até semanas;\n   - O médico NUNCA deve ser enganado por essa aparente calmaria: a história de engasgo exige investigação mandatória!\n\n3. Fase 3: Complicações Tardias e Inflamatórias:\n   - Reação de corpo estranho com liberação de ácidos graxos (nos grãos vegetais como castanhas/amendoim -> bronquite química intensa);\n   - Tecido de granulação obstrutivo, atelectasia, supuração distal, pneumonia bacteriana secundária de repetição e bronquiectasias irreversíveis.',
    comentariosAlternativas: {
      A: 'Correta. Alerta perfeitamente para a clássica e perigosa armadilha do período de latência assintomática.',
      B: 'Incorreta. A melhora inicial temporária é fisiológica e não significa eliminação do objeto.',
      C: 'Incorreta. O exame físico pode ser enganosamente normal na fase de latência.',
      D: 'Incorreta. A fase de latência é comum a qualquer corpo estranho brônquico, especialmente vegetais orgânicos.',
    },
  },
  {
    id: 'ped-est-093',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Aspiração de Corpo Estranho: Manobras de Desobstrução Imediata',
    isRevisao: false,
    enunciado:
      'Um lactente de 8 meses engasga-se com um pedaço de fruta, apresentando subitamente tosse ineficaz, esforço respiratório extremo sem emissão de som (choro silencioso), cianose labial progressiva e estridor grave em fúrcula esternal, caracterizando obstrução grave de via aérea com o paciente ainda consciente. De acordo com as diretrizes do PALS (Pediatric Advanced Life Support) e da Sociedade Brasileira de Pediatria, qual é a manobra de desobstrução imediata preconizada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Posicionar o lactente em pronação apoiado no antebraço do socorrista com a cabeça mais baixa que o tronco e aplicar 5 golpes dorsais interescapulares firmes com a região tenar da mão, seguidos por virar o lactente em decúbito dorsal e aplicar 5 compressões torácicas no terço inferior do esterno, repetindo o ciclo até a desobstrução ou perda da consciência.',
      },
      {
        id: 'B',
        texto:
          'Executar a manobra de Heimlich com compressões abdominais vigorosas direcionadas para o epigástrio.',
      },
      {
        id: 'C',
        texto:
          'Introduzir o dedo indicador em gancho às cegas na cavidade oral para tentar pinçar o corpo estranho.',
      },
      {
        id: 'D',
        texto:
          'Segurar o lactente de cabeça para baixo pelos pés e sacudi-lo vigorosamente no ar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Desobstrução de Via Aérea por Corpo Estranho no Lactente (< 1 ano de vida):\n\n1. Regra de Ouro no Lactente Consciente:\n   - Alternância de 5 GOLPES DORSAIS (back slaps) com 5 COMPRESSÕES TORÁCICAS (chest thrusts);\n   - Técnica correta:\n     * Apoiar o lactente sobre o antebraço com a cabeça inclinada para baixo (declive de ~30 a 45 graus) e a mandíbula fixada pelos dedos do socorrista (sem comprimir tecidos moles);\n     * Aplicar 5 golpes secos interescapulares com a base da mão;\n     * Girar o bebê em bloco para o outro antebraço (decúbito dorsal em declive);\n     * Aplicar 5 compressões torácicas rápidas com 2 dedos no esterno (mesmo ponto da RCP);\n     * Repetir sequencialmente até desobstruir ou o bebê perder a consciência;\n\n2. Proibições Absolutas no Lactente:\n   - PROIBIDO Manobra de Heimlich (compressões abdominais) em menores de 1 ano, devido ao grande risco de ruptura hepática, esplênica ou laceração de vísceras abdominais;\n   - PROIBIDO varredura digital às cegas ("blind finger sweep"), pois empurra o corpo estranho da hipofaringe diretamente para a fenda glótica, transformando obstrução parcial em asfixia completa;\n\n3. Conduta se Perder a Consciência:\n   - Chamar ajuda imediatamente, iniciar manobras de reanimação cardiopulmonar (RCP) com compressões torácicas e inspecionar a via aérea a cada abertura antes de ventilar (remover o objeto APENAS SE VISÍVEL).',
    comentariosAlternativas: {
      A: 'Correta. Descreve exatamente a técnica padronizada do PALS e SBP para lactentes menores de 1 ano.',
      B: 'Incorreta. Heimlich é contraindicado em < 1 ano pelo risco iminente de trauma de órgãos sólidos abdominais.',
      C: 'Incorreta. A busca digital às cegas é formalmente proscrita por risco de impactação glótica distal do objeto.',
      D: 'Incorreta. Sacudir a criança é conduta leiga perigosa que causa trauma cranioencefálico grave (síndrome do bebê sacudido).',
    },
  },
  {
    id: 'ped-est-094',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Aspiração de Corpo Estranho: Fisiopatologia de Válvula Brônquica',
    isRevisao: false,
    enunciado:
      'Quando um corpo estranho ultrapassa a carina e se aloja em um brônquio principal ou lobar, a dinâmica do fluxo aéreo distal dependerá do grau de oclusão intraluminal. O mecanismo mais frequente observado na fase inicial, responsável pela hiperinsuflação pulmonar unilateral, é denominado mecanismo de "válvula de retenção" (ball-valve mechanism). Em que consiste essa alteração fisiopatológica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Durante a inspiração, as forças de tração radial expandem a parede brônquica permitindo a entrada de ar ao redor do corpo estranho; durante a expiração, o diâmetro brônquico se reduz e a parede colapsa contra o objeto, aprisionando o ar no pulmão afetado e gerando enfisema obstrutivo localizado.',
      },
      {
        id: 'B',
        texto:
          'O corpo estranho impede totalmente a entrada de ar na inspiração, levando à reabsorção imediata do ar alveolar e colapso total (atelectasia maciça) em todos os casos.',
      },
      {
        id: 'C',
        texto:
          'O objeto funciona como um filtro osmótico que desidrata o parênquima pulmonar e reduz a complacência torácica bilateralmente.',
      },
      {
        id: 'D',
        texto:
          'A presença do corpo estranho broncodilata seletivamente o brônquio contralateral, causando hipertensão pulmonar em cunha reflexa.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Mecanismos Mecânicos da Obstrução Brônquica por Corpo Estranho:\n\n1. Mecanismo de Válvula de Retenção (Ball-Valve ou Check-Valve):\n   - É o mecanismo mais comum (em até 60% a 70% dos casos agudos);\n   - Na INSPIRAÇÃO: a pressão intrapleural negativa e a tração do parênquima pulmonar promovem aumento fisiológico do calibre brônquico -> o ar consegue passar pela fresta entre a parede e o corpo estranho, enchendo os alvéolos distais;\n   - Na EXPIRAÇÃO: a retração elástica normal do pulmão reduz fisiologicamente o diâmetro brônquico -> a parede comprime firmemente o corpo estranho, impedindo a saída do ar expiratório;\n   - Consequência: APRISIONAMENTO AÉREO progressivo (air trapping) e HIPERINSUFLAÇÃO UNILATERAL (enfisema obstrutivo);\n\n2. Outros Mecanismos Fisiopatológicos:\n   - Válvula de Parada Total (Stop-Valve): obstrução completa tanto na inspiração quanto na expiração -> reabsorção do ar alveolar distal pelos capilares e ATELECTASIA lobar ou de todo o pulmão;\n   - Válvula By-Pass: obstrução parcial sem aprisionamento significativo (apenas sibilância focal localizada).',
    comentariosAlternativas: {
      A: 'Correta. Explica com total precisão biofísica a expansão inspiratória e a oclusão expiratória (efeito válvula unidirecional).',
      B: 'Incorreta. Descreve o mecanismo de stop-valve (atelectasia), que ocorre quando a oclusão é 100% total, menos frequente na fase inicial.',
      C: 'Incorreta. Conceito fictício de "filtro osmótico".',
      D: 'Incorreta. Não existe broncodilatação contralateral reflexa.',
    },
  },
  {
    id: 'ped-est-095',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Aspiração de Corpo Estranho: Radiologia e Incidências Especiais',
    isRevisao: false,
    enunciado:
      'Um menino de 2 anos e meio é atendido com história de engasgo há 3 dias com amendoim. Ao exame, apresenta murmúrio vesicular diminuído e hipersonoridade à percussão em hemitórax direito. A radiografia de tórax convencional simples em inspiração parece discretamente assimétrica, sem corpo estranho radiopaco evidente. Para documentar o aprisionamento aéreo unilateral e o enfisema obstrutivo antes da confirmação endoscópica, qual estratégia ou incidência radiológica é classicamente indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Radiografia de tórax em expiração forçada ou radiografia em decúbito lateral com raios horizontais (incidência de Hjelm-Laurell bilateral), na qual o pulmão com aprisionamento aéreo não esvazia ao ficar dependente no leito, mantendo-se hiperinsuflado e hipertransparente.',
      },
      {
        id: 'B',
        texto:
          'Radiografia contrastada com bário endovenoso para impregnação brônquica.',
      },
      {
        id: 'C',
        texto:
          'Densitometria óssea do gradil costal anterior.',
      },
      {
        id: 'D',
        texto:
          'Apenas ultrassonografia ocular com Doppler de artéria central.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Avaliação Radiológica na Aspiração de Corpo Estranho Brônquico:\n\n1. Corpos Estranhos Radiotransparentes:\n   - Mais de 85% a 90% dos corpos estranhos aspirados são vegetais (amendoim, sementes) e NÃO aparecem diretamente no raio-X convencional;\n   - A radiografia avalia os EFEITOS INDIRETOS do objeto sobre a ventilação pulmonar;\n\n2. Sinais Radiológicos Indiretos:\n   - Hiperinsuflação / Hipertransparência unilateral;\n   - Retificação do diafragma ipsilateral;\n   - Aumento dos espaços intercostais;\n   - Desvio do mediastino para o lado CONTRALATERAL na expiração;\n\n3. Radiografia Expirada e Decúbito Lateral com Raios Horizontais:\n   - Em crianças pequenas que não colaboram na expiração voluntária forçada, coloca-se a criança deitada sobre o lado suspeito com raios horizontais;\n   - Fisiologia normal: o pulmão dependente (de baixo) colapsa fisiologicamente pelo peso do mediastino e esvazia o ar;\n   - Pulmão com corpo estranho (válvula de retenção): permanece fixamente HIPERINSUFLADO e hipertransparente, sem murchar, confirmando o aprisionamento de ar;\n\n4. Regra de Ouro:\n   - Uma radiografia de tórax completamente NORMAL NÃO descarta corpo estranho em vigência de história clínica compatível!',
    comentariosAlternativas: {
      A: 'Correta. A incidência em decúbito lateral com raios horizontais é a técnica radiológica de escolha para demonstrar aprisionamento de ar em lactentes.',
      B: 'Incorreta. Bário é contraste digestivo e jamais deve ser injetado endovenoso ou na via aérea.',
      C: 'Incorreta. Densitometria avalia massa óssea, não tem qualquer indicação.',
      D: 'Incorreta. US ocular é irrelevante para via aérea.',
    },
  },
  {
    id: 'ped-est-096',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Aspiração de Corpo Estranho: Broncoscopia Rígida como Padrão-Ouro',
    isRevisao: false,
    enunciado:
      'Diante de uma criança com suspeita diagnóstica firme de aspiração de corpo estranho em árvore traqueobrônquica, qual é o procedimento considerado padrão-ouro tanto para o diagnóstico de certeza quanto para o tratamento definitivo e remoção segura do objeto?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Broncoscopia rígida sob anestesia geral em centro cirúrgico, pois garante o controle absoluto da via aérea, ótima ventilação e passagem segura de pinças de preensão para apreensão e extração do corpo estranho sem fragmentação.',
      },
      {
        id: 'B',
        texto:
          'Broncoscopia flexível realizada no ambulatório sem anestesia nem intubação traqueal prévia.',
      },
      {
        id: 'C',
        texto:
          'Tosse assistida vigorosa associada a nebulização com solução salina hipertônica a 7% para dissolução enzimática do amendoim.',
      },
      {
        id: 'D',
        texto:
          'Laparotomia exploradora mediana com esofagostomia descompressiva.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Broncoscopia Rígida como Padrão-Ouro na Aspiração de Corpo Estranho (ACE):\n\n1. Vantagens Mandatórias do Broncoscópio Rígido:\n   - É o instrumento de escolha mundial para EXTRAÇÃO terapêutica de corpos estranhos na via aérea pediátrica;\n   - Diâmetro interno amplo: permite ventilar o paciente através do tubo óptico enquanto se manuseiam pinças de preensão robustas (jacaré, cesta/basket, pinças com dentes de rato);\n   - Proteção da via aérea: durante a passagem do corpo estranho pelas pregas vocais e fenda glótica, o broncoscópio rígido protege o objeto contra fragmentação e impede que ele se solte e obstrua a laringe fatalmente;\n   - Excelente hemostasia e capacidade de aspiração de secreções purulentas e sangue;\n\n2. Papel da Broncoscopia Flexível:\n   - Utilizada primariamente para DIAGNÓSTICO em casos duvidosos ou corpos estranhos muito periféricos em subsegmentos inacessíveis ao tubo rígido, mas seu canal de trabalho estreito oferece menor suporte e segurança para retirada de objetos grandes ou pontiagudos;\n\n3. Procedimento Operatório:\n   - Realizado sempre em CENTRO CIRÚRGICO com suporte anestésico completo.',
    comentariosAlternativas: {
      A: 'Correta. A broncoscopia rígida sob anestesia geral é o padrão-ouro terapêutico universalmente estabelecido.',
      B: 'Incorreta. Broncoscopia flexível em ambulatório sem sedação é perigosa e não indicada para remoção segura.',
      C: 'Incorreta. Salina 7% não dissolve fragmentos vegetais e nebulização pode deslocar o corpo estranho e asfixiar o paciente.',
      D: 'Incorreta. Laparotomia acessa o abdome, não a via aérea respiratória.',
    },
  },
  {
    id: 'ped-est-097',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Aspiração de Corpo Estranho Não Diagnosticada e Complicações Tardias',
    isRevisao: false,
    enunciado:
      'Menino de 3 anos é encaminhado para avaliação pneumológica devido a episódios recorrentes de pneumonia no lobo inferior direito nos últimos 4 meses, com necessidade de quatro internações para antibioticoterapia parenteral. Entre as infecções, a criança mantém tosse crônica produtiva, expectoração fétida matinal e sibilos focais à ausculta da base direita, sem resposta a corticoterapia inalatória. A mãe, ao ser questionada minuciosamente, recorda-se de que há 4 meses a criança engasgou com semente de melancia durante um piquenique. A complicação crônica que mais provavelmente se instalou no segmento pulmonar afetado é:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Bronquiectasias adquiridas irreversíveis e abscesso/pneumonia crônica retentiva distal por estase mucociliar e inflamação granulomatosa supurativa crônica.',
      },
      {
        id: 'B',
        texto:
          'Fibrose cística induzida pela semente de melancia.',
      },
      {
        id: 'C',
        texto:
          'Agenezia congênita tardia da artéria pulmonar contralateral.',
      },
      {
        id: 'D',
        texto:
          'Laringomalácia secundária do brônquio principal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Complicações Tardias da Aspiração de Corpo Estranho Oculta / Negligenciada:\n\n1. Fisiopatologia da Obstrução Crônica:\n   - Quando o evento inicial de engasgo passa despercebido ou é negligenciado pela família ou médico, o corpo estranho orgânico permanece no lúmen brônquico;\n   - A liberação contínua de óleos vegetais e a estase de muco ciliar atraem colonização bacteriana polimicrobiana anaeróbia e aeróbia;\n   - Forma-se tecido de granulação exuberante que engloba o objeto, calcifica e obstrui o brônquio de forma irreversível;\n\n2. Complicações Pulmonares Consequentes:\n   - Pneumonias de repetição SEMPRE NO MESMO LOBO (especialmente lobo inferior direito ou lobo médio, pela anatomia mais verticalizada e calibrosa do brônquio principal direito);\n   - Abscesso pulmonar e empiema pleural secundário;\n   - Bronquiectasias saculares e cilíndricas adquiridas decorrentes da destruição da elastina e cartilagem brônquica pela infecção supurativa crônica;\n   - Em casos graves e tardios, pode haver necessidade de ressecção cirúrgica segmentar ou lobectomia.',
    comentariosAlternativas: {
      A: 'Correta. Identifica a evolução clássica para bronquiectasias e supuração crônica em pneumonias repetidas no mesmo lobo.',
      B: 'Incorreta. Fibrose cística é doença genética autossômica recessiva, não adquirida por sementes.',
      C: 'Incorreta. Agenezia de artéria é malformação embriogênica congênita.',
      D: 'Incorreta. Laringomalácia é da supraglote laríngea, não de brônquio.',
    },
  },
  {
    id: 'ped-est-098',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Caso Clínico Integrador: Laringomalácia vs Corpo Estranho em Via Aérea',
    isRevisao: false,
    enunciado:
      'No plantão de emergência pediátrica, duas crianças são trazidas para avaliação de ruído respiratório anormal:\n- Paciente 1: Lactente de 7 semanas, com ruído agudo inspiratório ("gatinho miando") desde a 3ª semana de vida, sem febre, que piora no choro e ao deitar de costas, e desaparece quase por completo quando colocado de bruços; alimenta-se bem no seio e ganha 35 g/dia;\n- Paciente 2: Criança de 2 anos, previamente hígida, que há 2 horas, durante festa de aniversário, começou subitamente com engasgo, tosse intensa sufocante e agora apresenta estridor inspiratório e expiratório (bifásico) com afonia e tiragem supraesternal marcante.\n\nQual é o diagnóstico mais provável e a respectiva conduta imediata para cada paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Paciente 1: Laringomalácia clássica; conduta: orientação aos pais, acompanhamento ambulatorial e suporte postural conservador.\nPaciente 2: Aspiração de corpo estranho em laringe/traqueia alta; conduta: encaminhamento imediato para broncoscopia rígida de urgência em centro cirúrgico para extração.',
      },
      {
        id: 'B',
        texto:
          'Paciente 1: Epiglotite aguda bacteriana; conduta: intubação traqueal imediata.\nPaciente 2: Crupe viral leve; conduta: alta com xarope expectorante.',
      },
      {
        id: 'C',
        texto:
          'Paciente 1: Aspiração de corpo estranho; conduta: manobra de Heimlich imediata.\nPaciente 2: Laringomalácia aguda; conduta: corticoterapia inalatória domiciliar.',
      },
      {
        id: 'D',
        texto:
          'Paciente 1: Traqueíte bacteriana; conduta: toracocentese diagnóstica.\nPaciente 2: Abscesso retrofaríngeo; conduta: ressonância magnética eletiva em 7 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diagnóstico Diferencial e Condutas: Caso Integrador:\n\n1. Paciente 1 (Laringomalácia):\n   - Lactente jovem (7 semanas) com estridor puramente inspiratório posicional (melhora nítida em pronação), crescimento ponderal ótimo (+35 g/dia) e afebril;\n   - Conduta: Expectante, conservadora, puericultura de suporte e orientações posturais aos pais;\n\n2. Paciente 2 (Aspiração de Corpo Estranho Laringotraqueal):\n   - Início hiperagudo súbito em festa de aniversário (ambiente repleto de castanhas, doces ou balões), tosse/engasgo inicial seguido de afonia, estridor bifásico e retração de fúrcula (indicando obstrução crítica na transição glote/subglote);\n   - Conduta: Broncoscopia rígida de urgência em centro cirúrgico com via aérea protegida e oxigenação sob máscara de forma calma sem agitar a criança.',
    comentariosAlternativas: {
      A: 'Correta. Discrimina perfeitamente a abordagem conservadora da laringomalácia versus a emergência cirúrgica da aspiração de corpo estranho laríngeo.',
      B: 'Incorreta. Paciente 1 é laringomalácia (não epiglotite) e paciente 2 é corpo estranho grave (não crupe viral leve).',
      C: 'Incorreta. Inverteu os diagnósticos e indicou Heimlich para lactente de 7 semanas.',
      D: 'Incorreta. Diagnósticos e condutas totalmente disparatados.',
    },
  },
  {
    id: 'ped-est-099',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Diagnóstico Diferencial Avançado: Causas Congênitas e Estruturais de Estridor',
    isRevisao: false,
    enunciado:
      'Em uma sessão de discussão clínica em pneumologia pediátrica, o preceptor solicita a correlação entre as etiologias de estridor congênito/estrutural e suas principais pistas clínicas e propedêuticas:\n1. Laringomalácia;\n2. Hemangioma subglótico;\n3. Anel vascular (duplo arco aórtico);\n4. Paralisia bilateral de pregas vocais.\n\nAssinale a alternativa que correlaciona corretamente cada afecção com sua característica cardinal:',
    alternativas: [
      {
        id: 'A',
        texto:
          '1: Estridor inspiratório que piora em supino e melhora em pronação; 2: Estridor bifásico progressivo aos 2-4 meses associado a hemangioma cutâneo em barba e boa resposta a propranolol; 3: Estridor associado a disfagia para sólidos e tosse metálica tipo latido; 4: Estridor inspiratório grave associado a choro preservado e forte.',
      },
      {
        id: 'B',
        texto:
          '1: Disfagia para sólidos exclusiva; 2: Estridor pós-trauma de parto com choro fraco; 3: Resolução espontânea em 24 horas com adrenalina; 4: Febre alta com trismo mandibular.',
      },
      {
        id: 'C',
        texto:
          '1: Hemangioma na mandíbula; 2: Choro sussurrado e microdeleção 22q11; 3: Hipotonia da epiglote ômega; 4: Ausência de estridor com cianose pós-alimentar.',
      },
      {
        id: 'D',
        texto:
          '1: Tosse crupal com febre e toxemia; 2: Edema de úvula com trismo; 3: Início após intubação por 30 dias; 4: Epiglote em cereja madura.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Correlação Clínica dos Estridores Estruturais e Congênitos:\n\n1. Laringomalácia:\n   - Estridor inspiratório, dependente de posição (piora em decúbito dorsal e melhora em pronação), início com 2-6 semanas de vida;\n\n2. Hemangioma Subglótico:\n   - Estridor bifásico progressivo a partir dos 2-4 meses de vida, concomitância de hemangioma cutâneo cefálico (região em "barba") e excelente involução com Propranolol oral;\n\n3. Anel Vascular (Duplo Arco Aórtico):\n   - Combinação de sintomas respiratórios (estridor bifásico, tosse metálica) e esofágicos (disfagia para sólidos na introdução alimentar aos 6 meses, engasgos com aprofundamento do esofagograma);\n\n4. Paralisia Bilateral de Pregas Vocais:\n   - Paradoxalmente, o choro é preservado e audível (pregas em posição paramediana mediana), mas a fenda respiratória é mínima, gerando estridor inspiratório grave e asfixia.',
    comentariosAlternativas: {
      A: 'Correta. Todas as quatro associações clínicas são clássicas, consistentes e de altíssima cobrança em provas de título e residência.',
      B: 'Incorreta. Mistura manifestações clínicas e ignora as características cardinais de cada afecção.',
      C: 'Incorreta. Atribui características trocadas aos itens.',
      D: 'Incorreta. Cita sintomas de infecções bacterianas agudas (crupe, epiglotite, abscesso) para entidades congênitas.',
    },
  },
  {
    id: 'ped-est-100',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA com Estridor',
    subtema: 'Desafio Final Integrador: Algoritmo de Decisão na Criança com Estridor Agudo e Crônico',
    isRevisao: false,
    enunciado:
      'O pronto-socorro de pediatria atende quatro crianças com estridor respiratório em diferentes contextos clínicos. Analise as condutas imediatas propostas pela equipe médica:\n- Criança 1 (Crupe Viral Leve): Menino de 18 meses com tosse ladrante há 2 dias, sem estridor em repouso e sem tiragens -> Prescrita Dexametasona oral 0,15 mg/kg em dose única e orientações domiciliares;\n- Criança 2 (Epiglotite Aguda): Menina de 3 anos não vacinada, febre alta tóxica, sialorreia constante, sem tosse, adotando a postura em tripé -> Proibido abaixador de língua e punção na triagem; mantida calma no colo dos pais com O2 inalatório enquanto se aciona a via aérea cirúrgica/UTI para intubação em ambiente cirúrgico;\n- Criança 3 (Lactente de 1 ano com Suspeita de Aspiração de Corpo Estranho): Menino com tosse súbita e engasgo há 1 hora com amendoim, estridor e assimetria auscultatória com tiragem intercostal -> Indicada broncoscopia rígida em centro cirúrgico;\n- Criança 4 (Traqueíte Bacteriana / "Crupe que Desandou"): Menino de 2 anos com crupe prévio que evolui no 4º dia com piora séptica, febre de 40 °C, pus traqueal e refratariedade total à nebulização com adrenalina -> Indicadas broncoscopia para toalete/cultura e Ceftriaxona + Oxacilina IV com garantia de via aérea avançada.\n\nQuantas condutas imediatas adotadas pela equipe médica estão CORRETAS e em consonância com as melhores evidências pediátricas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Todas as quatro condutas estão corretas (Crianças 1, 2, 3 e 4).',
      },
      {
        id: 'B',
        texto:
          'Apenas uma conduta está correta.',
      },
      {
        id: 'C',
        texto:
          'Apenas duas condutas estão corretas.',
      },
      {
        id: 'D',
        texto:
          'Apenas três condutas estão corretas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Desafio Final Integrador: O Algoritmo Completo das Afecções com Estridor na Pediatria:\n\n1. Criança 1: Crupe Viral Leve (Westley <= 2):\n   - Tosse de cachorro sem estridor em repouso;\n   - Conduta: Dexametasona dose única (0,15 a 0,6 mg/kg oral) reduz retorno ao PS e melhora rápida dos sintomas; não requer internação nem adrenalina -> CONDUTA PERFEITA;\n\n2. Criança 2: Epiglotite Aguda (Emergência Médica Absoluta):\n   - Postura em tripé, febre alta, drooling (sialorreia) e ausência de tosse;\n   - Conduta: Não manipular via aérea na triagem (evitar abaixador de língua pelo risco de parada reflexa), manter no colo dos pais e preparar intubação orotraqueal imediata em sala cirúrgica com material de cricotireoidostomia de prontidão -> CONDUTA PERFEITA;\n\n3. Criança 3: Aspiração de Corpo Estranho Aguda:\n   - História de engasgo com vegetal (amendoim), assimetria ventilatória e esforço respiratório;\n   - Conduta: Broncoscopia rígida sob anestesia geral para desobstrução e retirada antes da impactação completa ou pneumonia supurativa -> CONDUTA PERFEITA;\n\n4. Criança 4: Traqueíte Bacteriana (Pseudomembranosa):\n   - Deterioração febril grave após crupe ("crupe que desandou"), tosse com pus e falha completa à nebulização com adrenalina;\n   - Conduta: Broncoscopia de toalete de pseudomembranas, intubação e antibioticoterapia parenteral (Ceftriaxona + Oxacilina ou Vancomicina) -> CONDUTA PERFEITA.\n\nConclusão: Todas as 4 condutas estão integralmente corretas.',
    comentariosAlternativas: {
      A: 'Correta. Todas as quatro condutas aplicadas refletem com excelência as diretrizes das principais sociedades mundiais e nacionais de pediatria e terapia intensiva.',
      B: 'Incorreta. Não há apenas uma conduta correta.',
      C: 'Incorreta. Não há apenas duas condutas corretas.',
      D: 'Incorreta. Nenhuma das condutas apontadas continha erro técnico.',
    },
  },
];

