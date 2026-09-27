export interface RawIVASQuestion {
  id: string;
  grandeArea: 'Pediatria';
  especialidade: 'Pediatria';
  tema: 'IRA Infecções de Vias Aéreas Superiores';
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

export const QUESTOES_IVAS: RawIVASQuestion[] = [
  {
    id: 'ped-ivas-001',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Etiologia do Resfriado Comum',
    isRevisao: false,
    enunciado:
      'Uma lactente de 14 meses é levada à Unidade Básica de Saúde pela mãe devido a quadro de obstrução nasal, coriza seromucosa e febrícula (37,8 °C) com início há 48 horas, além de tosse esporádica e leve inapetência. A frequência respiratória é de 28 irpm, afebril no momento da consulta, ausculta pulmonar com murmúrio vesicular universalmente audível sem ruídos adventícios e oroscopia mostrando discreto eritema de pilares amigdalianos sem exsudatos. Sabendo que o resfriado comum (rinofaringite viral aguda) é a enfermidade infecciosa mais comum da infância, qual é o agente etiológico responsável por mais de 50% de todos os episódios dessa condição?',
    alternativas: [
      {
        id: 'A',
        texto: 'Rinovírus humano.',
      },
      {
        id: 'B',
        texto: 'Vírus Influenza A.',
      },
      {
        id: 'C',
        texto: 'Streptococcus pneumoniae.',
      },
      {
        id: 'D',
        texto: 'Adenovírus respiratório.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Rinovírus humano (membro da família Picornaviridae, com mais de 100 sorotipos distintos) é o principal agente etiológico do resfriado comum em todas as faixas etárias, respondendo por mais de 50% (podendo alcançar 70% a 80% nos períodos de pico) de todos os episódios de rinofaringite aguda. Outros agentes incluem coronavírus sazonais, vírus sincicial respiratório (VSR), adenovírus, metapneumovírus e parainfluenza.',
    comentariosAlternativas: {
      A: 'Correta. O Rinovírus é disparado o agente viral mais comum nas rinofaringites agudas da infância e idade adulta (> 50% dos casos comprovados).',
      B: 'Incorreta. O vírus Influenza causa uma síndrome sistêmica grave típica (gripe clássica com febre alta súbita, mialgia intensa, prostração) e não é o agente majoritário do resfriado comum rotineiro.',
      C: 'Incorreta. Streptococcus pneumoniae é uma bactéria causadora de complicações secundárias (como otite média aguda, sinusite e pneumonia bacteriana), não sendo agente etiológico do resfriado comum primário, que é estritamente viral.',
      D: 'Incorreta. Embora o adenovírus cause infecções respiratórias superiores, frequentemente associadas a febre alta persistente, conjuntivite ou exsudato amigdaliano, é responsável por apenas cerca de 5% a 10% dos resfriados banais.',
    },
  },
  {
    id: 'ped-ivas-002',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'História Natural do Resfriado Comum',
    isRevisao: false,
    enunciado:
      'A mãe de um menino de 3 anos retorna à consulta pediátrica no 5º dia de evolução de um resfriado comum. Ela relata que a febre que esteve presente nos primeiros dois dias desapareceu por completo, a criança está ativa e com excelente apetite, mas a secreção nasal, que era hialina e fluida, tornou-se espessa e amarelada/esverdeada. A mãe solicita prescrição de antibiótico, pois acredita que "a secreção esverdeada é sinal de infecção bacteriana". De acordo com as diretrizes da Sociedade Brasileira de Pediatria (SBP) e da Academia Americana de Pediatria (AAP), qual é a conduta e a orientação corretas para o caso?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Iniciar Amoxicilina imediatamente, pois a secreção nasal mucopurulenta verde-amarelada confirma sinusite bacteriana secundária.',
      },
      {
        id: 'B',
        texto:
          'Esclarecer que a alteração da cor da secreção nasal para verde/amarela faz parte da história natural do resfriado viral pela presença de neutrófilos e mieloperoxidase, mantendo apenas lavagem nasal com soro fisiológico.',
      },
      {
        id: 'C',
        texto:
          'Prescrever descongestionante nasal sistêmico associado a corticoide oral por 5 dias para desobstruir os seios paranasais.',
      },
      {
        id: 'D',
        texto:
          'Solicitar radiografia dos seios da face em incidências de Waters e Caldwell para descartar pansinusite aguda.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A mudança de aspecto da secreção nasal de hialina para mucoespessa, amarelada ou esverdeada é um evento fisiológico esperado entre o 3º e o 6º dia de evolução do resfriado comum. Esse fenômeno decorre do recrutamento de leucócitos polimorfonucleares (neutrófilos) para a mucosa nasal e da liberação da enzima mieloperoxidase pelos grânulos neutrofílicos, NÃO sendo indicativo de sobreinfecção bacteriana quando a criança está afebril, ativa e em melhora clínica global. A conduta é manter a lavagem nasal estéril com solução salina 0,9% e tranquilizar a família.',
    comentariosAlternativas: {
      A: 'Incorreta. A cor da secreção nasal isoladamente não define infecção bacteriana; a introdução precipitada de amoxicilina gera resistência bacteriana desnecessária.',
      B: 'Correta. A coloração purulenta ou esverdeada decorre da mieloperoxidase liberada pelos neutrófilos na fase resolutiva do resfriado e dura habitualmente de 7 a 10 dias, autolimitada.',
      C: 'Incorreta. Descongestionantes orais são contraindicados em pré-escolares pelo risco de hipertensão, taquicardia e arritmias, e corticoterapia oral não possui indicação no resfriado comum simples.',
      D: 'Incorreta. Radiografias de seios da face são desprovidas de acurácia em crianças pequenas (os seios frontal e esfenoidal nem estão pneumatizados nessa idade) e mostram opacificação mesmo em resfriados virais simples.',
    },
  },
  {
    id: 'ped-ivas-003',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Duração Típica e Tosse Residual do Resfriado Comum',
    isRevisao: false,
    enunciado:
      'Um escolar de 6 anos apresenta quadro de tosse seca e eventual secreção matinal há 11 dias, que se iniciou como um resfriado com febre baixa nos primeiros dois dias, coriza e espirros. Atualmente, o paciente está clinicamente bem, sem febre, ganha peso normalmente, brinca e corre sem cansaço, ausculta pulmonar rigorosamente normal e sem taquipneia. A mãe está angustiada porque a tosse "já dura quase duas semanas". Qual das seguintes assertivas melhor expressa o conhecimento científico sobre a cronologia e história natural do resfriado comum na infância?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Qualquer tosse respiratória que ultrapasse 7 dias de duração deve ser compulsoriamente considerada pneumonia bacteriana ou coqueluche.',
      },
      {
        id: 'B',
        texto:
          'O pico dos sintomas do resfriado ocorre tipicamente entre o 2º e o 3º dia; a maioria dos sintomas melhora em 7 a 10 dias, mas a tosse residual pode persistir por até 14 dias em crianças saudáveis sem indicar complicações.',
      },
      {
        id: 'C',
        texto:
          'O resfriado comum atinge sua intensidade máxima no 7º dia e jamais causa tosse por mais de 5 dias em indivíduos imunocompetentes.',
      },
      {
        id: 'D',
        texto:
          'A tosse por mais de 10 dias exige início empírico imediato de macrolídeos orais e broncodilatador inalatório contínuo.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A história natural do resfriado comum caracteriza-se por pico dos sintomas nasais e sistêmicos entre o 2º e o 3º dia de doença, com resolução da maioria das manifestações em 7 a 10 dias. No entanto, estudos epidemiológicos e diretrizes da SBP/AAP demonstram que em até 20% a 30% das crianças saudáveis a tosse residual pode persistir por até 14 dias (e eventualmente até 21 dias) devido à hiper-reatividade brônquica transitória e à depuração mucociliar ainda em recuperação pós-viral, sem que isso configure complicação infecciosa secundária.',
    comentariosAlternativas: {
      A: 'Incorreta. A tosse residual benigna pós-viral é extremamente comum e ultrapassa 7 dias em expressiva parcela dos pacientes pediátricos sem significar infecção grave.',
      B: 'Correta. O pico sintomático ocorre nas primeiras 48-72 horas, declinando progressivamente, podendo restar tosse residual por até 10-14 dias.',
      C: 'Incorreta. O pico não ocorre no 7º dia (ocorre no 2º ao 3º dia) e a tosse frequentemente ultrapassa 5 dias.',
      D: 'Incorreta. Crianças clinicamente bem, afebris e sem desconforto respiratório não necessitam de antimicrobianos nem broncodilatadores para tosse residual pós-resfriado.',
    },
  },
  {
    id: 'ped-ivas-004',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Segurança Farmacológica e Contraindicações na Infância',
    isRevisao: false,
    enunciado:
      'Um lactente de 10 meses é levado ao serviço de emergência com história de resfriado comum há 2 dias. A mãe relata que, por recomendação da avó, administrou xarope contendo dexclorfeniramina associada a pseudoefedrina e gotas de descongestionamento nasal tópico (cloridrato de nafazolina pediátrica). Poucas horas após, a criança apresentou palidez cutânea, letargia intensa, sudorese fria e bradicardia. De acordo com as advertências da ANVISA, Sociedade Brasileira de Pediatria (SBP) e American Academy of Pediatrics (AAP), sobre a segurança farmacológica em IVAS em lactentes e pré-escolares, assinale a afirmação correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Xaropes antigripais de venda livre contendo descongestionantes sistêmicos, anti-histamínicos de 1ª geração e antitussígenos são seguros a partir dos 6 meses de idade.',
      },
      {
        id: 'B',
        texto:
          'Descongestionantes tópicos derivados imidazólicos (como nafazolina e oximetazolina) e descongestionantes orais são formalmente contraindicados em menores de 2 a 6 anos devido ao elevado risco de intoxicação, depressão do SNC, arritmias, hipertensão e óbito.',
      },
      {
        id: 'C',
        texto:
          'Os derivados imidazólicos tópicos são a primeira linha de tratamento desobstrutivo no resfriado do lactente pela sua ação vasoconstritora rápida.',
      },
      {
        id: 'D',
        texto:
          'Os anti-histamínicos de primeira geração são recomendados no resfriado comum de bebês por acelerarem a depuração mucociliar viral.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A SBP, o FDA e a AAP contraindicam formalmente o uso de medicamentos antigripais de venda livre (que combinam anti-histamínicos de 1ª geração, descongestionantes simpaticomiméticos e antitussígenos) em menores de 2 a 6 anos. Os descongestionantes tópicos imidazólicos (como nafazolina, oximetazolina e fenoxazolina) possuem janela terapêutica estreitíssima em crianças, sendo absorvidos rapidamente pela mucosa nasal hiperemiada e transpondo a barreira hematoencefálica, com efeitos agonistas alfa-2 adrenérgicos centrais (semelhantes à clonidina), induzindo bradicardia, depressão respiratória grave, hipotensão/hipertensão e coma.',
    comentariosAlternativas: {
      A: 'Incorreta. Essas formulações são perigosas e não demonstraram eficácia superior ao placebo em crianças pequenas, além de estarem associadas a relatos mundiais de mortalidade.',
      B: 'Correta. Há contraindicação estrita ao uso de descongestionantes imidazólicos e agentes simpaticomiméticos orais em lactentes e crianças pequenas pelos riscos graves de toxicidade cardiovascular e neurológica.',
      C: 'Incorreta. A primeira linha exclusiva e segura para desobstrução nasal no lactente é a irrigação nasal mecânica abundante com solução salina isotônica (soro fisiológico 0,9%).',
      D: 'Incorreta. Os anti-histamínicos de primeira geração não encurtam o resfriado comum, causam sedação ou agitação paradoxal e ressecam secreções por seu efeito anticolinérgico, dificultando a depuração ciliar.',
    },
  },
  {
    id: 'ped-ivas-005',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Síndrome de Reye e Contraindicação do AAS',
    isRevisao: false,
    enunciado:
      'Um menino de 5 anos com quadro de infecção viral de vias aéreas superiores e febre de 38,5 °C recebeu de seus pais comprimidos de ácido acetilsalicílico (AAS) para controle térmico por 3 dias consecutivos. Três dias após o desaparecimento da febre, a criança evolui subitamente com vômitos profusos incontroláveis, seguidos de letargia, irritabilidade, delírio e convulsões generalizadas. Os exames laboratoriais revelam elevação maciça de transaminases (AST e ALT > 5 vezes o limite superior), hiperamonemia grave (amônia = 240 mcg/dL) e alargamento do tempo de protrombina (TP/INR), com bilirrubinas séricas normais ou minimamente alteradas. A ultrassonografia hepática demonstra esteatose microvesicular difusa. Qual é o diagnóstico e o mecanismo fisiopatológico fundamental deste quadro?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Hepatite A fulminante por transmissão fecal-oral durante o episódio respiratório.',
      },
      {
        id: 'B',
        texto:
          'Síndrome de Reye, desencadeada pelo uso de salicilatos no curso de infecções virais (como Influenza ou Varicela), decorrente de disfunção mitocondrial hepática e encefalopatia metabólica aguda.',
      },
      {
        id: 'C',
        texto:
          'Choque séptico por Streptococcus pyogenes com falência de múltiplos órgãos.',
      },
      {
        id: 'D',
        texto:
          'Envenenamento acidental por paracetamol com necrose centrolobular hepática macrovesicular.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Síndrome de Reye é uma emergência pediátrica caracterizada por encefalopatia aguda não inflamatória e degeneração gordurosa microvesicular do fígado, classicamente desencadeada pela administração de salicilatos (AAS) a crianças ou adolescentes com infecções virais agudas, sobretudo Influenza A/B e Varicela. O AAS lesa a fosforilação oxidativa mitocondrial, impedindo a beta-oxidação dos ácidos graxos e levando ao acúmulo de amônia, edema cerebral citotóxico grave e hipertensão intracraniana. O laboratório típico exibe transaminases marcadamente elevadas, hiperamonemia e coagulopatia, tipicamente com bilirrubinas normais ou pouco aumentadas ("icterícia anictérica"). Por essa razão, o AAS é formalmente contraindicado como antipirético na infância.',
    comentariosAlternativas: {
      A: 'Incorreta. Na hepatite viral aguda clássica, a icterícia colestática (hiperbilirrubinemia direta expressiva) é marcante, ao contrário da Síndrome de Reye, na qual a hiperbilirrubinemia é ausente ou mínima.',
      B: 'Correta. Quadro patognomônico de Síndrome de Reye decorrente do uso indevido de ácido acetilsalicílico em infecção viral respiratória na infância.',
      C: 'Incorreta. A história clínica e laboratorial (esteatose microvesicular, hiperamonemia isolada sem sinais de choque bacteriano ou foco purulento) não é compatível com choque séptico estafilocócico/estreptocócico.',
      D: 'Incorreta. Na intoxicação por paracetamol, o paciente ingere doses maciças (> 150 mg/kg) e o mecanismo é a depleção de glutationa com necrose centrolobular tóxica, não esteatose microvesicular mitocondrial associada a salicilatos.',
    },
  },
  {
    id: 'ped-ivas-006',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Manejo Baseado em Evidências do Resfriado Comum',
    isRevisao: false,
    enunciado:
      'Um lactente de 7 meses é atendido em puericultura com queixa materna de obstrução nasal intensa, dificuldade para mamar ao seio por não conseguir respirar pelo nariz e roncos durante o sono há 3 dias. A criança não apresenta febre, está hidratada, FR = 34 irpm, sem retrações torácicas e murmúrio vesicular simétrico. A mãe solicita a prescrição de algum "xarope expectorante ou antibiótico para limpar o pulmãozinho". Segundo as recomendações de boas práticas clínicas e segurança pediátrica da SBP e Ministério da Saúde, qual é a conduta mais apropriada e custo-efetiva?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Prescrever xarope de ambroxol associado a amoxicilina oral profilática por 7 dias.',
      },
      {
        id: 'B',
        texto:
          'Orientar lavagem nasal vigorosa com soro fisiológico 0,9% antes das mamadas e do sono, manter aleitamento materno sob livre demanda, elevar levemente a cabeceira e não prescrever mucolíticos ou antitussígenos.',
      },
      {
        id: 'C',
        texto:
          'Indicar inalação contínua com salbutamol e brometo de ipratrópio a cada 4 horas.',
      },
      {
        id: 'D',
        texto:
          'Prescrever corticoide oral (prednisolona) por 5 dias para desinflamar a mucosa das conchas nasais.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O lactente jovem é um respirador nasal preferencial obrigatório até por volta dos 4 a 6 meses de vida e muito dependente da perviedade nasal para alimentar-se e dormir. A obstrução nasal pelo muco dificulta a vedação labial durante a sucção do seio materno. A intervenção comprovadamente eficaz, segura e de baixo custo é a lavagem mecânica da cavidade nasal com solução salina fisiológica a 0,9% (soro morno ou em temperatura ambiente) antes das mamadas e antes de dormir, associada à manutenção do aleitamento materno e hidratação. Antibióticos, expectorantes, antitussígenos e corticoides não têm papel nessa condição.',
    comentariosAlternativas: {
      A: 'Incorreta. Mucolíticos (como ambroxol e acetilcisteína) não possuem eficácia comprovada em lactentes e podem aumentar a hipersecreção fluida que o bebê não consegue expectorar; antibiótico profilático é erro grosseiro.',
      B: 'Correta. A higienização nasal com solução fisiológica a 0,9% remove crostas e muco, restaurando o batimento mucociliar e desobstruindo a via aérea de forma segura.',
      C: 'Incorreta. Broncodilatadores não agem na mucosa da concha nasal superior e têm indicação reservada para broncoespasmo de vias aéreas inferiores com sibilância.',
      D: 'Incorreta. Não há qualquer respaldo em diretrizes nacionais ou internacionais para o uso de corticoterapia sistêmica no resfriado comum não complicado.',
    },
  },
  {
    id: 'ped-ivas-007',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Herpangina - Etiologia e Apresentação Clínica',
    isRevisao: false,
    enunciado:
      'Uma menina de 2 anos e meio é levada à emergência pediátrica com início abrupto de febre alta (39,2 °C) há 24 horas, irritabilidade, sialorreia constante e recusa alimentar completa para sólidos e líquidos, queixando-se de dor na garganta. Ao exame físico: oroscopia revela cerca de 6 a 8 pequenas vesículas de 1 a 2 mm, circundadas por halo eritematoso, algumas já ulceradas e recobertas por fibrina, localizadas estritamente nos pilares amigdalianos anteriores, palato mole e úvula. A mucosa jugal anterior, língua, gengivas e lábios estão totalmente preservados e sem lesões. Não há exantema em mãos ou pés. Qual é o agente etiológico clássico e o diagnóstico desta afecção?',
    alternativas: [
      {
        id: 'A',
        texto: 'Vírus Herpes Simples tipo 1 (HSV-1) / Gengivoestomatite Herpética.',
      },
      {
        id: 'B',
        texto: 'Coxsackievirus do grupo A / Herpangina.',
      },
      {
        id: 'C',
        texto: 'Streptococcus pyogenes (Estreptococo beta-hemolítico do grupo A) / Faringite Estreptocócica.',
      },
      {
        id: 'D',
        texto: 'Vírus Epstein-Barr (EBV) / Mononucleose Infecciosa.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Herpangina é uma enterovirose clássica da infância causada predominantemente por vírus do gênero Enterovirus, com destaque para o Coxsackievirus do grupo A (especialmente os sorotipos A1 a A10, A16 e A22) e Enterovírus 71. Caracteriza-se por início súbito de febre alta, anorexia, disfagia intensa e erupção enantemática típica composta por vesículas que ulceram rapidamente com base eritematosa circunscrita, localizadas exclusivamente na porção POSTERIOR da cavidade oral (pilares amigdalianos anteriores, amígdalas, palato mole e úvula), poupando a gengiva, os lábios e a mucosa jugal anterior.',
    comentariosAlternativas: {
      A: 'Incorreta. Na Gengivoestomatite Herpética pelo HSV-1, o acometimento é difuso mas com nítida predileção pela porção ANTERIOR da cavidade oral: gengivite hemorrágica dolorosa exuberante, úlceras em lábios, língua e gengiva.',
      B: 'Correta. Descrição patognomônica de herpangina: lesões vesículo-ulcerosas restritas aos pilares amigdalianos, úvula e palato mole, com febre alta e etiologia pelo Coxsackievirus A.',
      C: 'Incorreta. A faringite estreptocócica cursa com exsudato purulento confluente nas amígdalas, petéquias em palato e linfadenomegalia cervical anterior submandibular dolorosa, sem lesões vesiculares.',
      D: 'Incorreta. A mononucleose infecciosa por EBV costuma cursar com febre prolongada, amigdalite membranosa volumosa, esplenomegalia, rash cutâneo e linfadenopatia cervical posterior generalizada.',
    },
  },
  {
    id: 'ped-ivas-008',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Diagnóstico Diferencial: Herpangina vs Gengivoestomatite Herpética',
    isRevisao: false,
    enunciado:
      'No diagnóstico diferencial das afecções ulcerativas da cavidade oral na pediatria, a diferenciação topográfica entre Herpangina e Gengivoestomatite Herpética Aguda é uma das mais cobradas em provas e na prática ambulatorial. Assinale a alternativa que correlaciona corretamente o agente, a topografia lesional e a conduta recomendada para a Gengivoestomatite Herpética primária:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Agente: Coxsackievirus B; Topografia: apenas pilares amigdalianos e úvula; Conduta: antibioticoterapia parenteral com Penicilina Cristalina.',
      },
      {
        id: 'B',
        texto:
          'Agente: Vírus Herpes Simples tipo 1 (HSV-1); Topografia: acometimento difuso com predomínio na região anterior da boca (gengivite eritematosa e friável, mucosa jugal, língua e lábios); Conduta: analgesia rigorosa, hidratação fracionada e antiviral (Aciclovir) em casos selecionados com início precoce (< 72-96h).',
      },
      {
        id: 'C',
        texto:
          'Agente: Citomegalovírus; Topografia: restrita à orofaringe posterior sem acometer gengivas; Conduta: Ganciclovir intravenoso obrigatório.',
      },
      {
        id: 'D',
        texto:
          'Agente: Herpesvírus tipo 6; Topografia: estritamente o dorso da língua; Conduta: raspagem cirúrgica e uso tópico de nistatina.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Gengivoestomatite Herpética Aguda (GEHA) é a manifestação primária mais frequente da infecção pelo vírus Herpes Simples tipo 1 (HSV-1) em crianças de 1 a 5 anos. Diferencia-se da herpangina pela localização: afeta intensamente a cavidade oral ANTERIOR, promovendo gengivite eritematosa, edemaciada, friável e dolorosa com sangramento fácil, além de múltiplas úlceras em lábios, comissuras labiais, língua e mucosa jugal, frequentemente associada a linfadenopatia cervical submandibular dolorosa e febre alta. O tratamento baseia-se em analgesia potente para permitir hidratação oral (evitando internação por desidratação), podendo o aciclovir oral ser instituído precocemente (dentro das primeiras 72 horas) para abreviar o tempo de febre e disseminação viral.',
    comentariosAlternativas: {
      A: 'Incorreta. Coxsackie causa herpangina (posterior) e não se trata com antibióticos.',
      B: 'Correta. A GEHA decorre do HSV-1 e afeta predominantemente a cavidade oral anterior (gengiva, lábios e língua), tratada com analgesia intensiva, suporte hídrico e aciclovir oral em casos selecionados precoces.',
      C: 'Incorreta. Citomegalovírus não é o agente típico de gengivoestomatite exulcerativa aguda em crianças imunocompetentes.',
      D: 'Incorreta. O herpesvírus tipo 6 causa exantema súbito (roséola infantum) e não afecção ulcerativa primária na língua.',
    },
  },
  {
    id: 'ped-ivas-009',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Febre Faringoconjuntival - Etiologia e Tríade Clínica',
    isRevisao: false,
    enunciado:
      'Um menino de 7 anos é trazido à consulta com febre alta diária (39,0 °C a 39,5 °C) há 5 dias, associada a dor de garganta moderada e hiperemia ocular bilateral com secreção serosa e sensação de corpo estranho nos olhos. A mãe relata que a criança participou de um acampamento infantil com piscina coletiva na semana anterior. Ao exame: hiperemia conjuntival bilateral exuberante com hipertrofia folicular na conjuntiva tarsal inferior, oroscopia demonstrando faringe hiperemiada com discreto exsudato esbranquiçado não aderente em amígdalas e linfonodo pré-auricular doloroso e palpável à esquerda. Qual é o diagnóstico clínico mais provável e o respectivo agente etiológico?',
    alternativas: [
      {
        id: 'A',
        texto: 'Febre Faringoconjuntival, causada por Adenovírus.',
      },
      {
        id: 'B',
        texto: 'Faringite bacteriana por Streptococcus pyogenes com conjuntivite bacteriana associada.',
      },
      {
        id: 'C',
        texto: 'Doença da Arranhadura do Gato por Bartonella henselae.',
      },
      {
        id: 'D',
        texto: 'Herpes-zóster oftálmico com comprometimento do ramo oftálmico do trigêmeo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Febre Faringoconjuntival (FFC) é uma síndrome clássica e altamente contagiosa causada pelo Adenovírus (notadamente os sorotipos 3, 4 e 7). A transmissão ocorre por gotículas respiratórias ou fômites, com surtos bem documentados associados a águas recreativas inadequadamente cloradas (piscinas de verão, lagos). É definida pela tríade clássica: febre alta de duração relativamente prolongada (5 a 7 dias), faringite (hiperêmica com ou sem exsudato) e conjuntivite folicular aguda não purulenta bilateral (secreção aquosa/serosa), frequentemente acompanhada de linfadenopatia pré-auricular típica.',
    comentariosAlternativas: {
      A: 'Correta. Tríade patognomônica de febre faringoconjuntival por Adenovírus: febre persistente + faringite + conjuntivite folicular serosa associada a linfonodo pré-auricular.',
      B: 'Incorreta. A infecção por Streptococcus pyogenes não causa conjuntivite folicular serosa nem linfonodomegalia pré-auricular típica.',
      C: 'Incorreta. Bartonella henselae causa a síndrome oculoglandular de Parinaud (conjuntivite granulomatosa unilateral com linfadenopatia pré-auricular maciça após contato com gatos), sem a faringite aguda exsudativa febril febre faringoconjuntival típica.',
      D: 'Incorreta. Herpes-zóster oftálmico manifesta-se por vesículas dolorosas agrupadas seguindo um dermátomo unilateral estrito (V1), comum em idosos ou imunodeprimidos, não com faringite bilateral pós-piscina.',
    },
  },
  {
    id: 'ped-ivas-010',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Faringite por Vírus Coxsackie A16 / Doença Mão-Pé-Boca',
    isRevisao: false,
    enunciado:
      'Um lactente de 16 meses que frequenta creche apresenta quadro febril de 38,3 °C há 2 dias com disfagia moderada. Na oroscopia, observam-se lesões vesiculares e pequenas úlceras na mucosa bucal, língua e palato duro. No exame da pele, o pediatra constata pápulas e vesículas ovais eritematosas com eixo paralelo às linhas de clivagem cutânea nas palmas das mãos, plantas dos pés e nádegas. A mãe questiona a respeito do isolamento da criança da creche. Qual é o diagnóstico e a recomendação de afastamento preconizada pela vigilância epidemiológica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Doença Mão-Pé-Boca (Enterovirose por Coxsackie A16 / Enterovírus 71); o afastamento da creche é recomendado até a resolução da febre e das lesões cutaneomucosas exsudativas (geralmente por volta de 5 a 7 dias do início do quadro).',
      },
      {
        id: 'B',
        texto:
          'Varicela atípica com infecção secundária; a criança deve ser afastada por no mínimo 21 dias após a última crosta cair.',
      },
      {
        id: 'C',
        texto:
          'Escabiose com impetiginização em mucosas; deve ser tratada com ivermectina oral em dose única sem necessidade de isolamento.',
      },
      {
        id: 'D',
        texto:
          'Eritema multiforme maior por infecção estreptocócica; a criança pode frequentar a creche imediatamente após a primeira dose de penicilina.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O quadro descrito é o clássico da Doença Mão-Pé-Boca (DMPB), causada por enterovírus, principalmente Coxsackievirus A16 e Enterovírus A71 (este último associado a maior risco de complicações neurológicas como meningite asséptica e encefalite). Caracteriza-se por estomatite ulcerativa associada a exantema pápulo-vesicular típico nas palmas das mãos, plantas dos pés e região glútea/nádegas. O afastamento da creche é orientado durante a fase aguda sintomática (enquanto houver febre e lesões vesiculares abertas/ativas, tipicamente nos primeiros 5 a 7 dias), embora a eliminação fecal do vírus possa persistir por várias semanas.',
    comentariosAlternativas: {
      A: 'Correta. Doença mão-pé-boca com vesículas características na orofaringe e extremidades; afastamento prudente na fase aguda febril e vesicular ativa.',
      B: 'Incorreta. A varicela cursa com polimorfismo regional típico (máculas, pápulas, vesículas umbilicadas e crostas) com distribuição centrípeta no tronco e couro cabeludo, poupando a morfologia acral específica da DMPB.',
      C: 'Incorreta. Escabiose não acomete a mucosa oral e manifesta-se por túneis e prurido noturno intratável.',
      D: 'Incorreta. Eritema multiforme apresenta lesões em alvo ou íris concêntricas típicas, sendo uma síndrome imunomediada reativa, não enterovirose contagiosa epidêmica de creche.',
    },
  },
  {
    id: 'ped-ivas-011',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Mononucleose Infecciosa - Apresentação Faringoamigdaliana',
    isRevisao: false,
    enunciado:
      'Um adolescente de 15 anos procura assistência médica devido a febre de 38,5 °C há 7 dias, astenia intensa e odinofagia progressiva. Ao exame físico: paciente prostrado, amígdalas volumosas com hipertrofia que quase se tocam na linha média ("kissing tonsils"), recobertas por exsudato acinzentado espesso confluente, petéquias na transição entre o palato duro e mole, adenomegalia em cadeias cervicais posteriores e occipitais dolorosas e baço palpável a 3 cm do rebordo costal esquerdo. O médico assistente prescreveu Amoxicilina 500 mg a cada 8 horas. No 3º dia de uso da amoxicilina, o adolescente desenvolve exantema maculopapular avermelhado e pruriginoso confluente em tronco e membros. Qual é o diagnóstico etiológico provável e o fenômeno associado ao antibiótico administrado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Faringoamigdalite bacteriana estreptocócica complicada com choque anafilático à penicilina.',
      },
      {
        id: 'B',
        texto:
          'Mononucleose Infecciosa pelo Vírus Epstein-Barr (EBV); o uso inadvertido de aminopenicilinas (como a amoxicilina) induz rash cutâneo imunomediado característico em até 80% a 90% dos indivíduos infectados por ativação policlonal transitória de linfócitos T.',
      },
      {
        id: 'C',
        texto:
          'Leucemia Linfoblástica Aguda com infiltração amigdaliana secundária.',
      },
      {
        id: 'D',
        texto:
          'Difteria faríngea por Corynebacterium diphtheriae com reação tipo doença do soro.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O caso ilustra o quadro clássico de Mononucleose Infecciosa provocada pelo Vírus Epstein-Barr (EBV, Herpesvírus humano 4). Em adolescentes, a tríade clássica envolve febre prolongada, faringoamigdalite exsudativa exuberante (frequentemente com pseudomembranas esbranquiçadas e petéquias em palato) e linfadenomegalia cervical simétrica, com acometimento proeminente do triângulo cervical posterior e esplenomegalia. Quando esses pacientes recebem aminopenicilinas (amoxicilina ou ampicilina) devido a um diagnóstico errôneo de amigdalite bacteriana estreptocócica, cerca de 80% a 90% desenvolvem um rash cutâneo maculopapular confluente e pruriginoso, que não representa verdadeira alergia IgE-mediada permanente, mas sim uma hipersensibilidade transitória mediada por linfócitos T decorrente da hiperativação imune do EBV.',
    comentariosAlternativas: {
      A: 'Incorreta. Não se trata de choque anafilático (que é uma reação imediata IgE-mediada com urticária, estridor e hipotensão), mas sim de exantema aminopenicilínico tardio associado ao EBV.',
      B: 'Correta. A clássica interação entre infecção por EBV e amoxicilina resulta em exantema maculopapular característico, auxiliando na elucidação diagnóstica da mononucleose.',
      C: 'Incorreta. Embora a leucemia curse com astenia e hepatoesplenomegalia, o quadro de início agudo febril com amigdalite exsudativa exuberante e rash pós-amoxicilina é a apresentação típica da mononucleose.',
      D: 'Incorreta. A difteria cursa com placas cinzentas espessas e aderentes que sangram ao descolamento ("pseudomembranas") e toxemia com "pescoço taurino", sem esplenomegalia associada a rash pós-amoxicilina.',
    },
  },
  {
    id: 'ped-ivas-012',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Diagnóstico Laboratorial da Mononucleose Infecciosa',
    isRevisao: false,
    enunciado:
      'Ainda no contexto do paciente adolescente com suspeita de Mononucleose Infecciosa por EBV e faringoamigdalite exsudativa, quais são as alterações hematológicas e sorológicas clássicas esperadas no hemograma e nos exames complementares?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Leucocitose com desvio à esquerda escalonado, neutrofilia absoluta > 85% e trombocitose reativa acentuada.',
      },
      {
        id: 'B',
        texto:
          'Leucocitose com predomínio de linfomononucleares (> 50% de linfócitos) e presença de linfocitose atípica (linfócitos atípicos de Downey >= 10%), além de elevação de transaminases hepáticas.',
      },
      {
        id: 'C',
        texto:
          'Pancitopenia com reticulocitose e teste de Coombs direto persistentemente negativo.',
      },
      {
        id: 'D',
        texto:
          'Neutropenia grave isolada com hipogamaglobulinemia profunda congênita.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O hemograma típico da Mononucleose Infecciosa pelo EBV exibe leucocitose moderada (10.000 a 20.000/mm³) com acentuada linfocitose mononuclear (> 50% da contagem diferencial de leucócitos) e presença de linfócitos atípicos (células T ativadas em resposta à infecção das células B pelo EBV) que ultrapassam 10% do total de leucócitos circulantes (sensibilidade e especificidade elevadas). Além disso, há discreta elevação autolimitada de transaminases hepáticas (AST/ALT) em até 80% a 90% dos casos. Testes rápidos de anticorpos heterófilos (Monoteste/Paul-Bunnell) são úteis em maiores de 4 anos e adolescentes.',
    comentariosAlternativas: {
      A: 'Incorreta. A neutrofilia com desvio à esquerda sugere infecção bacteriana piogênica e não mononucleose viral por EBV.',
      B: 'Correta. Linfocitose absoluta (> 50%) com atipia linfocitária >= 10% e hepatite anictérica leve a moderada são os achados laboratoriais clássicos da mononucleose.',
      C: 'Incorreta. Pancitopenia não é achado típico da fase aguda primária da mononucleose.',
      D: 'Incorreta. O achado é de proliferação linfoide T ativada policlonal e não de neutropenia congênita.',
    },
  },
  {
    id: 'ped-ivas-013',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Cuidados e Restrições na Mononucleose Infecciosa',
    isRevisao: false,
    enunciado:
      'Um jovem de 16 anos, atleta de futebol juvenil, recebe o diagnóstico laboratorial confirmado de Mononucleose Infecciosa com esplenomegalia detectável à palpação abdominal. O paciente refere melhora progressiva da odinofagia após 10 dias de evolução e pergunta quando poderá retornar aos treinos e jogos de futebol com contato físico. Qual é a orientação formal recomendada pela Sociedade Brasileira de Pediatria e diretrizes internacionais de medicina do esporte?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Pode retornar aos treinos intensos e esportes de colisão no dia seguinte ao término da febre, pois o risco de complicações viscerais inexiste após a fase aguda.',
      },
      {
        id: 'B',
        texto:
          'Deve manter repouso absoluto na cama por 6 meses ininterruptos devido ao risco perpétuo de miocardite.',
      },
      {
        id: 'C',
        texto:
          'Deve evitar esportes de contato, esforço físico vigoroso e levantamento de peso por um período mínimo de 3 a 4 semanas do início dos sintomas (ou até a resolução completa da esplenomegalia), pelo risco catastrófico de ruptura esplênica traumática ou espontânea.',
      },
      {
        id: 'D',
        texto:
          'A prática de esportes está liberada se o paciente estiver usando uma cinta elástica abdominal protetora.',
      },
    ],
    respostaCorreta: 'C',
    comentario:
      'A complicação mais temida da mononucleose infecciosa é a ruptura esplênica, que ocorre em cerca de 0,1% a 0,5% dos casos, principalmente durante as primeiras 3 a 4 semanas de doença. O baço sofre hiperplasia linfoide maciça com infiltração das trabéculas e adelgaçamento da sua cápsula, tornando-se friável e vulnerável a roturas mesmo com traumas mínimos ou esforços de prensa abdominal (manobra de Valsalva). Por essa razão, preconiza-se o afastamento estrito de esportes de contato, artes marciais, esportes coletivos de colisão e levantamento de peso por no mínimo 3 a 4 semanas a contar do início dos sintomas e somente após confirmação clínica/ultrassonográfica de regressão da esplenomegalia.',
    comentariosAlternativas: {
      A: 'Incorreta. A liberação precoce logo após a febre é perigosa, pois o risco máximo de ruptura esplênica ocorre exatamente entre a 2ª e a 4ª semana.',
      B: 'Incorreta. Repouso absoluto por 6 meses é conduta excessiva e desprovida de embasamento.',
      C: 'Correta. Afastamento mandatório de esportes de colisão e esforço físico pesado por pelo menos 3 a 4 semanas para prevenir ruptura esplênica fatal.',
      D: 'Incorreta. Cintas abdominais não protegem o baço friável contra traumas diretos ou aumento súbito da pressão intra-abdominal.',
    },
  },
  {
    id: 'ped-ivas-014',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Faringites Virais: Agentes e Diagnósticos Diferenciais',
    isRevisao: false,
    enunciado:
      'As infecções faringoamigdalianas na infância são em sua grande maioria de etiologia viral. Sobre os agentes virais responsáveis por faringites na faixa pediátrica e suas manifestações acompanhantes características, assinale a correlação INCORRETA:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Rinovírus e Coronavírus sazonais: frequentemente associados a sintomas catarrais concomitantes (obstrução nasal, coriza clara, espirros e tosse).',
      },
      {
        id: 'B',
        texto:
          'Adenovírus: pode provocar faringoamigdalite exsudativa com placas semelhantes à estreptocócica, acompanhada de conjuntivite folicular e febre prolongada.',
      },
      {
        id: 'C',
        texto:
          'Coxsackievirus A: clássico responsável por lesões exulcerativas estritamente restritas à gengiva anterior e mucosa jugal, poupando a faringe posterior.',
      },
      {
        id: 'D',
        texto:
          'Vírus Influenza: provoca início súbito de febre alta, calafrios, cefaleia, mialgia difusa e hiperemia faríngea não exsudativa proeminente.',
      },
    ],
    respostaCorreta: 'C',
    comentario:
      'A assertiva C está INCORRETA (sendo o gabarito solicitado pela questão) porque o Coxsackievirus A causa a Herpangina, na qual as lesões vesículo-ulceradas localizam-se tipicamente na porção POSTERIOR da cavidade oral (pilares amigdalianos, úvula e palato mole), POUPANDO a gengiva e a mucosa labial anterior. Quem acomete a gengiva anterior e mucosa jugal com gengivite hemorrágica e friável é o Vírus Herpes Simples (HSV-1) na Gengivoestomatite Herpética.',
    comentariosAlternativas: {
      A: 'Incorreta (assertiva verdadeira). Rinovírus e coronavírus causam faringite catarral associada a coriza e espirros.',
      B: 'Incorreta (assertiva verdadeira). O adenovírus frequentemente mimetiza a amigdalite bacteriana com exsudatos amigdalianos volumosos.',
      C: 'Correta (assertiva falsa). O Coxsackievirus A acomete a porção posterior da orofaringe (herpangina) e poupa a gengiva anterior.',
      D: 'Incorreta (assertiva verdadeira). A gripe por Influenza caracteriza-se por prostração sistêmica exuberante e faringite hiperêmica seca.',
    },
  },
  {
    id: 'ped-ivas-015',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Complicações do Resfriado Comum: Otite Média Aguda',
    isRevisao: false,
    enunciado:
      'Um lactente de 11 meses que estava no 4º dia de evolução de um resfriado comum melhora da coriza, mas subitamente volta a apresentar pico febril de 38,9 °C, irritabilidade intensa inconsolável, choro ao ser deitado no berço e ato de levar a mão constantemente à orelha direita ("sinal da orelha"). A otoscopia pneumática revela membrana timpânica direita hiperemiada, opaca e abaulada com redução importante da mobilidade. Qual é a complicação bacteriana aguda mais comum do resfriado na infância e o principal fator anatômico predisponente no lactente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Mastoidite coalescente aguda por persistência do forame oval pérvio.',
      },
      {
        id: 'B',
        texto:
          'Otite Média Aguda (OMA); predisposta pela tuba auditiva (tuba de Eustáquio) mais curta, mais horizontalizada e mais complacente em lactentes e crianças pequenas.',
      },
      {
        id: 'C',
        texto:
          'Otite externa difusa bacteriana por banho de imersão prolongado.',
      },
      {
        id: 'D',
        texto:
          'Labirintite serosa viral por invasão direta do nervo vestibulococlear pelo rinovírus.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Otite Média Aguda (OMA) é a complicação bacteriana secundária mais comum do resfriado comum, acometendo até 10% a 20% das crianças durante ou logo após um episódio de IVAS viral. O edema inflamatório da rinofaringe obstrui o óstio faríngeo da tuba auditiva (de Eustáquio), gerando pressão negativa na orelha média e acúmulo de efusão estéril, propícia à ascensão e sobreinfecção por bactérias colonizadoras da nasofaringe (Streptococcus pneumoniae, Haemophilus influenzae não tipável e Moraxella catarrhalis). No lactente e pré-escolar, a anatomia da tuba auditiva é fundamentalmente vulnerável: é mais curta, mais larga, com menor tônus cartilaginoso e significativamente mais horizontalizada em relação ao adulto.',
    comentariosAlternativas: {
      A: 'Incorreta. Mastoidite é uma complicação supurativa da própria OMA não tratada ou complicada, e o forame oval cardíaco não tem relação com o ouvido.',
      B: 'Correta. A OMA é a complicação mais prevalente e a conformação anatômica da tuba auditiva infantil (curta e horizontal) favorece o refluxo de secreções e bactérias da rinofaringe para o ouvido médio.',
      C: 'Incorreta. Otite externa cursa com dor intensa à tração do pavilhão e tragus ("sinal do trago positivo"), sem abaulamento timpânico de orelha média secundário a IVAS.',
      D: 'Incorreta. Labirintite cursa com vertigem incapacitante e nistagmo, não sendo a etiologia do abaulamento timpânico agudo pós-resfriado.',
    },
  },
  {
    id: 'ped-ivas-016',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Critérios Clínicos para Rinossinusite Bacteriana Aguda pós-Resfriado',
    isRevisao: false,
    enunciado:
      'Diferenciar um resfriado comum não complicado de uma rinossinusite bacteriana aguda secundária é crucial para evitar o sobreuso de antibióticos. De acordo com as diretrizes da Academia Americana de Pediatria (AAP) e da Sociedade Brasileira de Pediatria (SBP), qual dos seguintes quadros clínicos preenche critério formal para diagnóstico e tratamento de Rinossinusite Aguda Bacteriana em pediatria?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Criança de 3 anos com secreção nasal amarelada e tosse no 4º dia de sintomas, sem febre e ativa.',
      },
      {
        id: 'B',
        texto:
          'Lactente de 1 ano com tosse seca esporádica no 8º dia pós-resfriado, brincando e sem febre.',
      },
      {
        id: 'C',
        texto:
          'Escolar de 5 anos com sintomas catarrais persistentes (tosse e secreção nasal diurnas) por mais de 10 dias consecutivos sem qualquer melhora clínica ("quadro persistente").',
      },
      {
        id: 'D',
        texto:
          'Criança de 2 anos com febre baixa de 37,9 °C nas primeiras 24 horas de coriza e espirros.',
      },
    ],
    respostaCorreta: 'C',
    comentario:
      'As diretrizes da AAP e da SBP estabelecem três apresentações clínicas clássicas para o diagnóstico de Rinossinusite Bacteriana Aguda na infância: 1) Sintomas persistentes: secreção nasal (de qualquer aspecto) ou tosse diurna contínua por mais de 10 dias consecutivos sem nenhum sinal de melhora clínica; 2) Início grave: febre alta (>= 39,0 °C) associada a secreção nasal purulenta contínua por pelo menos 3 a 4 dias consecutivos no início do quadro; 3) Piora clínica ("dupla piora" ou "double sickening"): paciente que apresentava resfriado típico em regressão e que, entre o 5º e o 7º dia, volta a piorar agudamente com nova febre, aumento da secreção nasal ou piora da tosse.',
    comentariosAlternativas: {
      A: 'Incorreta. Secreção amarelada no 4º dia faz parte da história natural do resfriado comum simples por atividade enzimática de neutrófilos.',
      B: 'Incorreta. Tosse residual no 8º dia pós-viral em criança assintomática é esperada e não indica sinusite bacteriana.',
      C: 'Correta. Critério 1 da AAP/SBP: sintomas nasais ou tosse diurna persistindo por mais de 10 dias sem sinal de regressão.',
      D: 'Incorreta. Febre baixa nas primeiras 24 horas é a manifestação inicial clássica do resfriado comum viral.',
    },
  },
  {
    id: 'ped-ivas-017',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Uso de Solução Salina Nasal e Técnicas de Higiene',
    isRevisao: false,
    enunciado:
      'Na abordagem terapêutica do resfriado comum no lactente, a higiene nasal com soro fisiológico é a intervenção não farmacológica mais valorizada. Em relação aos mecanismos biofísicos e benefícios clínicos da lavagem nasal com solução salina a 0,9%, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A solução salina atua unicamente como bactericida por lise osmótica de bactérias gram-negativas.',
      },
      {
        id: 'B',
        texto:
          'Promove a umidificação do muco ressecado, fragmenta crostas espessas, melhora a frequência do batimento ciliar epitelial e remove mediadores inflamatórios e partículas virais da superfície da mucosa nasal.',
      },
      {
        id: 'C',
        texto:
          'Deve ser rigorosamente evitada se o muco estiver claro, sendo indicada apenas quando houver sangue nas narinas.',
      },
      {
        id: 'D',
        texto:
          'Para ter efeito clínico em lactentes, o volume injetado deve ser de no mínimo 50 mL em alta pressão com seringa agulhada.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A lavagem nasal com solução fisiológica a 0,9% fluidifica as secreções viscosas, amolece e remove crostas obstrutivas, carreia mecânica e fisiologicamente mediadores inflamatórios (histamina, leucotrienos, cininas) e antígenos virais da cavidade nasal e restaura a frequência de batimento do epitélio ciliar respiratório. Isso reduz a resistência da via aérea superior, facilita a sucção alimentar pelo lactente e diminui a probabilidade de estase e infecção bacteriana secundária nos seios da face e tuba auditiva.',
    comentariosAlternativas: {
      A: 'Incorreta. O soro fisiológico a 0,9% é isotônico e não tem ação bactericida osmótica direta.',
      B: 'Correta. Ação mecânica de fluidificação, limpeza e restauração da depuração mucociliar sem efeitos colaterais sistêmicos.',
      C: 'Incorreta. A lavagem nasal é benéfica desde as primeiras fases do resfriado, mesmo com secreção clara hialina abundante.',
      D: 'Incorreta. Volumes excessivos com alta pressão e seringas agulhadas são absolutamente contraindicados pelo risco de barotrauma da tuba auditiva, lesão mucosa e aspiração broncopulmonar.',
    },
  },
  {
    id: 'ped-ivas-018',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Intoxicação por Descongestionantes Tópicos em Pediatria',
    isRevisao: false,
    enunciado:
      'Um bebê de 8 meses dá entrada no pronto-socorro em choque distributivo/cardiogênico relativo, com frequência cardíaca de 58 bpm (bradicardia grave para a idade), sonolência profunda, sudorese fria e pupilas em miose bilateral. A mãe informa que, devido ao nariz entupido do bebê, pingou várias gotas de descongestionante nasal de adulto contendo Nafazolina 0,1% nas duas narinas repetidas vezes ao longo do dia. Qual é o mecanismo farmacológico que explica a grave intoxicação observada nessa criança?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Estimulação beta-2 adrenérgica periférica causando taquiarritmia supraventricular refratária.',
      },
      {
        id: 'B',
        texto:
          'Bloqueio dos receptores muscarínicos colinérgicos periféricos induzindo síndrome anticolinérgica típica.',
      },
      {
        id: 'C',
        texto:
          'Ação agonista alfa-2 adrenérgica central e periférica acentuada, com estimulação dos receptores da imidazolina no tronco encefálico, inibição do efluxo simpático central, bradicardia, depressão respiratória e coma.',
      },
      {
        id: 'D',
        texto:
          'Inibição seletiva da recaptação de serotonina com síndrome serotoninérgica grave.',
      },
    ],
    respostaCorreta: 'C',
    comentario:
      'Os descongestionantes tópicos como a nafazolina, oximetazolina e tetrizolina pertencem à classe química das imidazolinas. Possuem ação agonista alfa-adrenérgica não seletiva (com potente atividade alfa-2 central, idêntica à da clonidina) e afinidade por receptores imidazolínicos no tronco encefálico. A mucosa nasal ricamente vascularizada do lactente absorve a substância rapidamente para a circulação sistêmica. A estimulação central de receptores alfa-2 inibe a liberação pré-sináptica de noradrenalina, desligando o tônus simpático e desencadeando bradicardia profunda, hipotensão arterial (ou hipertensão transitória inicial seguida de hipotensão), bradipneia, hipotermia, miose e coma.',
    comentariosAlternativas: {
      A: 'Incorreta. O quadro cursa com bradicardia grave e depressão do SNC e não com efeito beta-2 taquicardizante.',
      B: 'Incorreta. A síndrome anticolinérgica cursa com taquicardia, midríase, pele seca e quente e rubor facial ("louco como um chapeleiro, cego como um morcego, seco como um osso, vermelho como uma beterraba"), oposto à miose e bradicardia do caso.',
      C: 'Correta. Efeito agonista alfa-2 central semelhante à clonidina decorrente de derivados imidazólicos absorvidos pela mucosa nasal.',
      D: 'Incorreta. O mecanismo farmacológico não envolve neurotransmissão serotoninérgica.',
    },
  },
  {
    id: 'ped-ivas-019',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Estomatite Aftosa Recorrente vs Infecções Virais da Faringe',
    isRevisao: false,
    enunciado:
      'Um menino de 8 anos apresenta queixa de surgimento periódico de 1 a 2 úlceras dolorosas, de formato ovalado e bordas bem delimitadas com fundo amarelado raso, na mucosa labial interna e borda lateral da língua. O paciente não apresenta febre, linfonodomegalias, manifestações catarrais nem lesões cutâneas e os episódios cicatrizam espontaneamente em 7 a 10 dias sem deixar cicatriz, reaparecendo a cada 3 ou 4 meses. Qual das seguintes características é a principal marca que diferencia a Estomatite Aftosa Recorrente (EAR) menor das infecções virais orofaringeas (como Herpangina e Gengivoestomatite Herpética)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A Estomatite Aftosa Recorrente cursa com febre alta contínua e leucocitose com desvio à esquerda em todas as crises.',
      },
      {
        id: 'B',
        texto:
          'A Estomatite Aftosa Recorrente não é precedida por fase vesicular, é afebril, não cursa com gengivite hemorrágica difusa nem sintomas respiratórios e não possui caráter infectocontagioso viral.',
      },
      {
        id: 'C',
        texto:
          'A Estomatite Aftosa Recorrente afeta exclusivamente os pilares amigdalianos posteriores e é transmitida pelo adenovírus.',
      },
      {
        id: 'D',
        texto:
          'A Estomatite Aftosa Recorrente responde rapidamente ao uso oral de aciclovir profilático em altas doses.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Estomatite Aftosa Recorrente (aftose menor) é uma afecção inflamatória crônica ulcerativa não infecciosa comum na infância e adolescência. Ao contrário das enteroviroses (herpangina, mão-pé-boca) e da primoinfecção herpética (GEHA), as úlceras aftosas não decorrem do rompimento de vesículas prévias (surgem diretamente como máculas eritematosas que ulceram), acometem a mucosa móvel não queratinizada anterior (lábios, bochechas, assoalho), são estritamente afebreís, não possuem pródromos respiratórios e não são contagiosas.',
    comentariosAlternativas: {
      A: 'Incorreta. A aftose simples é tipicamente afebril e sem resposta inflamatória sistêmica laboratorial.',
      B: 'Correta. Ausência de pródromos febris, ausência de lesão vesicular precursora e caráter não contagioso diferenciam a aftose das viroses orais.',
      C: 'Incorreta. Aftas menores acometem a mucosa oral não queratinizada anterior e não os pilares posteriores.',
      D: 'Incorreta. Antivirais como aciclovir não possuem qualquer ação na estomatite aftosa recorrente, que possui base imune/idiopática.',
    },
  },
  {
    id: 'ped-ivas-020',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Faringite por Vírus Influenza - Quadro e Profilaxia',
    isRevisao: false,
    enunciado:
      'Durante a campanha de vacinação contra a gripe de inverno, uma lactente de 8 meses sem comorbidades é levada ao posto de saúde. A mãe relata que a criança nunca recebeu nenhuma vacina contra influenza anteriormente. De acordo com o Programa Nacional de Imunizações (PNI) do Ministério da Saúde e as recomendações da Sociedade Brasileira de Pediatria (SBP), qual é o esquema vacinal primário correto contra Influenza para esta criança?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administração de dose única intramuscular e reforço somente aos 4 anos de idade.',
      },
      {
        id: 'B',
        texto:
          'Aplicação de 2 doses com intervalo de 30 dias entre elas na primovacinação (crianças de 6 meses a menores de 9 anos vacinadas pela primeira vez).',
      },
      {
        id: 'C',
        texto:
          'Contraindicação da vacina contra Influenza em crianças menores de 2 anos devido ao risco de choque anafilático à proteína do ovo.',
      },
      {
        id: 'D',
        texto:
          'Administração de 3 doses com intervalo de 60 dias associada à vacina oral viva atenuada.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Tanto pelo PNI quanto pela SBP e CDC/AAP, crianças de 6 meses até menores de 9 anos de idade que estejam recebendo a vacina contra Influenza pela primeira vez em suas vidas (primovacinação) devem receber DUAS DOSES da vacina, respeitando um intervalo mínimo de 4 semanas (30 dias) entre a primeira e a segunda dose, a fim de garantir soroconversão e proteção imunológica adequadas contra as cepas de Influenza A e B.',
    comentariosAlternativas: {
      A: 'Incorreta. Uma dose isolada em uma criança virgem de antígeno de influenza não confere títulos protetores satisfatórios.',
      B: 'Correta. Crianças de 6 meses a < 9 anos no primeiro ano de vacinação necessitam de esquema de duas doses com intervalo de 30 dias.',
      C: 'Incorreta. A vacina é formalmente recomendada a partir dos 6 meses de vida; a alergia ao ovo não é contraindicação para a vacina inativada.',
      D: 'Incorreta. O esquema não é de 3 doses e no Brasil a vacina disponível é inativada tri ou tetravalente injetável, não sendo utilizada vacina oral.',
    },
  },
  {
    id: 'ped-ivas-021',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Adenite Cervical Reativa Pós-Resfriado Comum',
    isRevisao: false,
    enunciado:
      'Uma menina de 4 anos foi atendida com resfriado comum há 6 dias. Atualmente encontra-se afebril e sem tosse, mas a mãe notou a presença de pequenos nódulos no pescoço da criança. Ao exame físico: constatam-se 3 linfonodos palpáveis em cadeia cervical anterior à direita e 2 à esquerda, móveis, fibroelásticos, discretamente dolorosos à palpação, medindo entre 0,8 cm e 1,2 cm no maior diâmetro, sem calor local, sem hiperemia cutânea e sem coalescência. O estado geral da criança é excelente. Qual é a conduta preconizada para este achado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Encaminhar para biópsia excisional imediata com urgência para afastar linfoma de Hodgkin.',
      },
      {
        id: 'B',
        texto:
          'Iniciar antibioticoterapia intravenosa imediata com vancomicina para linfadenite supurativa bacteriana aguda.',
      },
      {
        id: 'C',
        texto:
          'Tranquilizar a família, orientar que se trata de linfadenomegalia cervical reacional benigna frequente após infecções virais de vias aéreas superiores e manter seguimento clínico ambulatorial sem indicação de antibióticos ou exames invasivos.',
      },
      {
        id: 'D',
        texto:
          'Solicitar punção aspirativa por agulha fina (PAAF) para cultura de micobactérias atípicas.',
      },
    ],
    respostaCorreta: 'C',
    comentario:
      'A linfadenomegalia reacional cervical é extremamente comum em crianças após episódios de infecção de vias aéreas superiores virais (resfriado comum, faringite viral). Os tecidos linfoides respondem com hiperplasia folicular benigna à drenagem de antígenos virais da nasofaringe. Linfonodos cervicais anteriores pequenos (< 1,5-2,0 cm), elásticos, móveis, sem sinais flogísticos exuberantes (calor, rubor intenso, flutuação), bilaterais e em criança afebril e em excelente estado geral configuram adenomegalia reativa benigna. A conduta correta é o acompanhamento clínico periódico, evitando biópsias precoces e o uso desnecessário de antimicrobianos.',
    comentariosAlternativas: {
      A: 'Incorreta. Linfonodos pequenos, móveis, de consistência fibroelástica após infecção de vias aéreas superiores recente não possuem critérios para suspeita oncológica de biópsia imediata.',
      B: 'Incorreta. Linfadenite supurativa bacteriana bacteriana apresenta linfonodo volumoso (> 2,5-3 cm), unilateral, com sinais flogísticos intensos, flutuação e febre alta, o que não ocorre no caso.',
      C: 'Correta. Conduta expectante e tranquilizadora perante adenomegalia reacional pós-viral típica sem sinais de alarme.',
      D: 'Incorreta. PAAF é desnecessária e invasiva em linfonodos reacionais típicos pós-resfriado.',
    },
  },
  {
    id: 'ped-ivas-022',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Prevenção e Transmissão do Resfriado Comum',
    isRevisao: false,
    enunciado:
      'Em uma creche comunitária com 40 crianças de 1 a 3 anos, o pediatra sanitarista é convidado a ministrar uma palestra aos educadores e cuidadores sobre a prevenção e o controle de surtos repetidos de resfriados e infecções respiratórias superiores. De acordo com as evidências epidemiológicas consolidadas em saúde coletiva e infectologia pediátrica, qual é a medida preventiva isolada mais eficaz para interromper a cadeia de transmissão do rinovírus e de outros vírus respiratórios?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Uso profilático diário de vitamina C em megadoses associada a xarope de própolis para todas as crianças matriculadas.',
      },
      {
        id: 'B',
        texto:
          'Higiene frequente das mãos com água e sabão (ou preparação alcoólica a 70%), limpeza de superfícies e brinquedos compartilhados e ventilação adequada dos ambientes.',
      },
      {
        id: 'C',
        texto:
          'Administração universal de antibioticoterapia profilática com azitromicina semanal durante os meses de outono e inverno.',
      },
      {
        id: 'D',
        texto:
          'Instalação de esterilizadores de ar com emissão de luz ultravioleta direta nas salas de aula durante o período de permanência das crianças.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A transmissão do rinovírus e da maioria dos patógenos virais de vias aéreas superiores ocorre primariamente pelo contato direto (mãos contaminadas que tocam olhos ou mucosa nasal) e por fômites (superfícies de mesas, maçanetas e brinquedos onde o rinovírus sobrevive por horas), além de gotículas respiratórias de curto alcance. A higienização frequente das mãos dos profissionais e das crianças com água e sabão ou álcool a 70%, combinada com a desinfecção sistemática de brinquedos e superfícies e aeração dos ambientes, é a intervenção não farmacológica de maior eficácia comprovada para mitigar surtos em creches e escolas.',
    comentariosAlternativas: {
      A: 'Incorreta. Megadoses de vitamina C, zinco e própolis não demonstraram eficácia robusta na prevenção primária do resfriado comum em ensaios clínicos controlados.',
      B: 'Correta. Lavagem de mãos e higiene de superfícies constituem a intervenção de ouro mais eficaz na quebra da transmissão viral.',
      C: 'Incorreta. Profilaxia com antibióticos para vírus respiratórios é ineficaz e promove seleção de bactérias multirresistentes.',
      D: 'Incorreta. Radiação UV direta na presença de crianças é perigosa (queimaduras dérmicas e oculares) e inviável.',
    },
  },
  {
    id: 'ped-ivas-023',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Frequência Esperada de Resfriados em Lactentes e Creches',
    isRevisao: false,
    enunciado:
      'Os pais de um menino de 18 meses, previamente hígido, estão extremamente preocupados porque a criança ingressou em uma creche há 8 meses e, desde então, apresentou 7 episódios de resfriados com coriza, febre baixa e tosse leve, necessitando de consultas médicas frequentes. No entanto, a criança nunca necessitou de internação hospitalar, nunca teve pneumonia ou otite supurativa, apresenta curva pôndero-estatural ascendente no percentil 50 de peso e estatura, vacinação rigorosamente em dia e desenvolvimento neuropsicomotor impecável. O que o pediatra deve esclarecer quanto à imunidade da criança e à frequência média esperada de infecções virais nessa fase da vida?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Mais de 4 episódios infecciosos ao ano em lactentes define obrigatoriamente Imunodeficiência Primária (Erros Inatos da Imunidade), exigindo dosagem imediata de imunoglobulinas séricas.',
      },
      {
        id: 'B',
        texto:
          'É considerado fisiológico e esperado que lactentes e pré-escolares que frequentam creche apresentem de 6 a 10 (ou até 12) episódios de infecções respiratórias virais de vias aéreas superiores ao ano, devido à circulação de centenas de sorotipos virais distintos em ambiente de aglomeração fechado e à maturação progressiva do sistema imune.',
      },
      {
        id: 'C',
        texto:
          'A criança deve ser retirada definitivamente do convívio escolar até completar 10 anos de idade para não esgotar sua medula óssea.',
      },
      {
        id: 'D',
        texto:
          'Esses episódios frequentes comprovam falha vacinal da vacina pneumocócica 10-valente.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Estudos pediátricos clássicos (como o Cleveland Family Study e dados da SBP) estabelecem que crianças nos primeiros anos de vida, em particular aquelas inseridas precocemente em creches ou com irmãos mais velhos em idade escolar, apresentam uma média de 6 a 8 a até 10 a 12 episódios de infecções respiratórias virais autolimitadas por ano. Considerando que cada resfriado dura de 7 a 14 dias para resolução completa, a criança pode parecer estar "resfriada o tempo todo". Sinais de alarme para imunodeficiência primária incluem: infecções bacterianas graves e invasivas repetidas (>= 2 pneumonias no ano, sepse, meningite), estomatites recorrentes graves por Candida após o primeiro ano, abscessos profundos ou falha de crescimento e ganho de peso (déficit pôndero-estatural), o que não ocorre na criança avaliada.',
    comentariosAlternativas: {
      A: 'Incorreta. Ter múltiplos resfriados leves com crescimento e desenvolvimento normais é o padrão típico de "criança de creche" e não critério de imunodeficiência primária.',
      B: 'Correta. Crianças em creche têm entre 6 e 12 infecções virais altas por ano sem que isso signifique imunodeficiência.',
      C: 'Incorreta. O afastamento definitivo é injustificado e prejudicial ao desenvolvimento psicossocial da criança.',
      D: 'Incorreta. A vacina pneumocócica protege contra infecções bacterianas invasivas por pneumococo, não contra os múltiplos vírus causadores de resfriado comum.',
    },
  },
  {
    id: 'ped-ivas-024',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Uso Inadequado de Antibióticos no Resfriado Comum',
    isRevisao: false,
    enunciado:
      'Uma prescrição médica emitida por um plantonista para uma criança de 2 anos com diagnóstico de resfriado comum de 3 dias de evolução continha: Azitromicina suspensão por 5 dias, Xarope de Cloridrato de Prometazina e Solução Nasal de Efedrina. Em relação aos preceitos da farmacologia clínica e do uso racional de antimicrobianos (Stewardship) em pediatria, assinale a opção que analisa adequadamente a prescrição supracitada:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A prescrição está inteiramente correta, pois a azitromicina previne a transformação do vírus em bactéria e a prometazina acalma o paciente.',
      },
      {
        id: 'B',
        texto:
          'A prescrição é tecnicamente inadequada e potencialmente perigosa em todos os seus itens: o antibiótico não tem ação sobre vírus e estimula resistência bacteriana; a prometazina é contraindicada em menores de 2 anos pelo risco fatal de depressão respiratória; e a efedrina é um simpaticomimético com grave toxicidade cardiovascular na infância.',
      },
      {
        id: 'C',
        texto:
          'Apenas a efedrina está errada, pois a azitromicina tem papel imunomodulador indispensável em qualquer infecção respiratória viral aguda.',
      },
      {
        id: 'D',
        texto:
          'O único erro é o tempo de azitromicina, que deveria ser estendido para 21 dias para erradicar a flora oral.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A prescrição é um exemplo clássico de conduta iatrogênica polifarmacêutica na infância: 1) Antibióticos (azitromicina) não possuem benefício clínico no resfriado comum viral, não previnem complicações bacterianas e induzem seleção de patógenos resistentes; 2) A prometazina possui alerta preto (black box warning) do FDA e da ANVISA contraindicando formalmente seu uso em menores de 2 anos pelo risco de depressão respiratória grave e morte súbita; 3) A efedrina é um agonista adrenérgico de ação mista causador de taquiarritmias, espasmo vascular e hipertensão arterial grave.',
    comentariosAlternativas: {
      A: 'Incorreta. Vírus não se transformam em bactérias e prescrever prometazina para sedar criança é contraindicado e perigoso.',
      B: 'Correta. Análise precisa dos três erros graves da prescrição sob a ótica da segurança do paciente pediátrico.',
      C: 'Incorreta. Azitromicina não possui indicação imunomoduladora em resfriado comum simples infantil.',
      D: 'Incorreta. Erradicar a flora oral levaria à disbiose grave e candidíase invasiva.',
    },
  },
  {
    id: 'ped-ivas-025',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Caso Clínico Integrado: Diagnóstico Diferencial de Faringite Febril Aguda',
    isRevisao: false,
    enunciado:
      'Um menino de 3 anos é levado ao pronto-socorro com queixa de febre de 38,8 °C há 2 dias, tosse produtiva, coriza serosa abundante, hiperemia conjuntival leve sem secreção purulenta e odinofagia. Ao exame: frequência respiratória de 26 irpm, afebril no momento, ausculta pulmonar limpa; oroscopia revela faringe e pilares amigdalianos difusamente hiperemiados, com aumento discreto das amígdalas, sem placas exsudativas, sem petéquias no palato e sem vesículas ou úlceras. A palpação cervical evidencia pequenos linfonodos submandibulares móveis e indolores. Qual é o diagnóstico mais provável e a conduta recomendada para este paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Faringoamigdalite estreptocócica aguda por Streptococcus pyogenes; prescrever Penicilina Benzatina intramuscular em dose única imediata.',
      },
      {
        id: 'B',
        texto:
          'Faringite viral aguda no contexto de infecção de vias aéreas superiores (resfriado comum); orientar medidas sintomáticas (hidratação oral fracionada, analgésico se desconforto e lavagem nasal), sem indicação de teste rápido para estreptococo ou antibióticos.',
      },
      {
        id: 'C',
        texto:
          'Abscesso periamigdaliano incipiente; solicitar tomografia computadorizada de pescoço com urgência e internar em UTI.',
      },
      {
        id: 'D',
        texto:
          'Herpangina avançada; prescrever Aciclovir oral e bochechos com nistatina suspensão.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A presença de manifestações concomitantes de vias aéreas superiores (como tosse, coriza, espirros e conjuntivite) aponta fortemente para a etiologia VIRAL da faringite (resfriado comum / rinofaringite viral), tornando improvável a infecção por Streptococcus pyogenes (Streptococcus do grupo A). Ademais, a faringite estreptocócica é incomum em menores de 3 anos de idade e tipicamente não cursa com tosse nem coriza. Portanto, a realização de exames laboratoriais ou teste rápido não está indicada nessa faixa etária com sintomas virais evidentes, devendo o paciente receber apenas manejo de suporte sintomático com hidratação, analgesia e lavagem nasal com soro fisiológico.',
    comentariosAlternativas: {
      A: 'Incorreta. Faringite estreptocócica raramente ocorre abaixo dos 3 anos e a presença de tosse e coriza fala fortemente contra infecção estreptocócica bacteriana.',
      B: 'Correta. Presença de tosse, coriza e conjuntivite é altamente preditiva de infecção viral; conduta exclusivamente sintomática.',
      C: 'Incorreta. O abscesso periamigdaliano cursa com trismo, assimetria amigdaliana, desvio de úvula contralateral e voz empastada.',
      D: 'Incorreta. Herpangina cursa com vesículas e úlceras em palato mole e úvula (ausentes neste caso) e não se trata com aciclovir nem nistatina.',
    },
  },
  {
    id: 'ped-ivas-026',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Faringite Estreptocócica - Epidemiologia e Faixa Etária',
    isRevisao: false,
    enunciado:
      'Uma lactente de 18 meses é trazida ao ambulatório por sua mãe com queixa de febre de 38,2 °C, coriza hialina e tosse há 3 dias. A mãe relata que a prima da paciente, de 8 anos, acabou de receber diagnóstico de faringite estreptocócica na escola e está usando antibiótico. A mãe insiste para que seja iniciado o mesmo tratamento com antibiótico na lactente. Considerando a epidemiologia clássica das infecções faringoamigdalianas por Streptococcus pyogenes (Streptococcus beta-hemolítico do Grupo A - GAS), assinale a afirmação correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A faringite estreptocócica é mais incidente em lactentes menores de 2 anos devido à ausência de anticorpos maternos protetores contra a proteína M.',
      },
      {
        id: 'B',
        texto:
          'A faringite bacteriana por Streptococcus pyogenes é muito rara em menores de 3 anos (representando menos de 3% a 5% das faringites nessa faixa etária); seu pico de incidência clássico ocorre entre 5 e 15 anos de idade.',
      },
      {
        id: 'C',
        texto:
          'Crianças menores de 3 anos têm risco elevado de desenvolver Febre Reumática aguda pós-estreptocócica e devem sempre receber antibioticoterapia profilática empírica.',
      },
      {
        id: 'D',
        texto:
          'O Streptococcus pyogenes coloniza comumente a orofaringe de neonatos e lactentes, justificando erradicação rotineira com penicilina.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A faringite por Streptococcus pyogenes (Streptococcus beta-hemolítico do Grupo A - GAS) é extremamente incomum em crianças com menos de 3 anos de idade (frequência < 3% a 5%). Em lactentes e menores de 3 anos, o epitélio da orofaringe apresenta menor densidade de receptores específicos de adesão para o ácido lipoteicoico e proteína M do estreptococo, além de a febre reumática aguda ser virtualmente inexistente nessa faixa etária. O pico epidemiológico de incidência da faringite estreptocócica situa-se claramente nos escolares e adolescentes, entre 5 e 15 anos de idade (onde responde por 20% a 37% dos casos de dor de garganta).',
    comentariosAlternativas: {
      A: 'Incorreta. Lactentes menores de 2 a 3 anos raramente desenvolvem faringite estreptocócica clássica devido à baixa expressão de receptores específicos na mucosa da orofaringe.',
      B: 'Correta. Epidemiologia clássica: incomum abaixo de 3 anos; pico evidente entre 5 e 15 anos.',
      C: 'Incorreta. O risco de febre reumática aguda abaixo dos 3 anos é excepcional e a profilaxia empírica nessa idade é contraindicada.',
      D: 'Incorreta. Menores de 3 anos raramente abrigam GAS e não há indicação de erradicação profilática.',
    },
  },
  {
    id: 'ped-ivas-027',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Estreptococose do Lactente (Streptococcosis)',
    isRevisao: false,
    enunciado:
      'Quando o Streptococcus pyogenes (GAS) acomete excepcionalmente lactentes ou crianças menores de 3 anos, a apresentação clínica difere substancialmente da faringoamigdalite exsudativa clássica do escolar, configurando a entidade conhecida historicamente como "estreptococose infantil". Qual é o quadro clínico característico dessa condição no lactente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Amígdalas hipertróficas com placas purulentas exuberantes e petéquias em palato duro, sem febre.',
      },
      {
        id: 'B',
        texto:
          'Coriza mucopurulenta serossanguinolenta contínua, crostas perinasais/escoriações, febre baixa arrastada, irritabilidade, inapetência e adenopatia cervical anterior difusa subaguda.',
      },
      {
        id: 'C',
        texto:
          'Estridor inspiratório de início súbito acompanhado de sialorreia e posição de tripé.',
      },
      {
        id: 'D',
        texto:
          'Tosse em guincho paroxística com cianose perioral e linfocitose extrema.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A "estreptococose" (ou infecção estreptocócica atípica da primeira infância) ocorre quando o estreptococo do grupo A infecta lactentes e crianças menores de 3 anos. Em vez da faringoamigdalite aguda exsudativa exuberante observada nos escolares, os lactentes desenvolvem rinofaringite persistente com secreção nasal serossanguinolenta ou mucopurulenta espessa que causa escoriação perinasal, febre baixa contínua ou intermitente, anorexia, irritabilidade e adenite cervical subaguda ("streptococcal fever" ou estreptococose).',
    comentariosAlternativas: {
      A: 'Incorreta. Amigdalite exsudativa florida com petéquias em palato é a manifestação típica de crianças maiores (escolares de 5 a 15 anos).',
      B: 'Correta. Descrição clássica da estreptococose do lactente: coriza serossanguinolenta com escoriação perinasal, febrícula arrastada e adenite cervical.',
      C: 'Incorreta. Este quadro é compatível com epiglotite aguda bacteriana por Haemophilus influenzae tipo b.',
      D: 'Incorreta. Este quadro descreve a coqueluche causada por Bordetella pertussis.',
    },
  },
  {
    id: 'ped-ivas-028',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Quadro Clínico Típico da Faringite por GAS no Escolar',
    isRevisao: false,
    enunciado:
      'Um escolar de 9 anos é trazido ao pronto atendimento com queixa de febre alta de 39,4 °C iniciada subitamente há 24 horas, acompanhada de dor intensa para engolir (odinofagia), cefaleia, prostração, náuseas e dois episódios de vômitos. A mãe enfatiza que o filho não apresenta tosse, não tem coriza, não apresenta espirros e os olhos não estão vermelhos. Ao exame físico: paciente eupneico; oroscopia evidencia hiperemia intensa de orofaringe, amígdalas palatinas hipertrofiadas (grau III) e confluentes, recobertas por exsudato purulento esbranquiçado, petéquias visíveis no palato mole ("palatal petechiae") e úvula edemaciada; palpação cervical revela linfonodos jugulodigástricos anteriores bilaterais aumentados (cerca de 2,5 cm) e muito dolorosos. Qual é a principal hipótese etiológica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Rinovírus humano tipo A.',
      },
      {
        id: 'B',
        texto:
          'Streptococcus pyogenes (Streptococcus beta-hemolítico do grupo A).',
      },
      {
        id: 'C',
        texto:
          'Bordetella parapertussis.',
      },
      {
        id: 'D',
        texto:
          'Vírus Sincicial Respiratório (VSR).',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O quadro descrito é o protótipo da faringoamigdalite estreptocócica aguda por Streptococcus pyogenes (GAS) no escolar: instalação súbita de febre alta, odinofagia intensa, sintomas gastrointestinais reflexos (dor abdominal, náuseas, vômitos), cefaleia, ausência estrita de sintomas virais (sem tosse, coriza, conjuntivite), hiperemia e exsudato amigdaliano purulento, petéquias no palato mole e adenomegalia cervical anterior satélite dolorosa.',
    comentariosAlternativas: {
      A: 'Incorreta. Rinovírus causa resfriado comum com tosse, coriza, espirros e febre baixa, sem exsudato purulento exuberante nem petéquias no palato.',
      B: 'Correta. Manifestação clínica clássica de GAS: febre súbita, odinofagia, petéquias no palato, exsudato amigdaliano e ausência de tosse/coriza no escolar de 9 anos.',
      C: 'Incorreta. Bordetella causa tosse paroxística e não faringoamigdalite exsudativa aguda com petéquias palatinas.',
      D: 'Incorreta. VSR cursa tipicamente com bronquiolite no lactente ou resfriado catarral com tosse e sibilância no pré-escolar/escolar.',
    },
  },
  {
    id: 'ped-ivas-029',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Escore de Centor Modificado por McIsaac - Pontuação',
    isRevisao: false,
    enunciado:
      'O Escore de Centor modificado por McIsaac é amplamente utilizado em serviços de emergência e atenção primária para predizer a probabilidade de faringoamigdalite por Streptococcus pyogenes (GAS) e nortear a realização de exames complementares e antibioticoterapia. Analise o caso: Menina de 8 anos, trazida à UPA com febre aferida em casa de 38,7 °C, queixa de dor de garganta intensa, sem queixas de tosse. Ao exame médico: presença de exsudato purulento nas amígdalas e linfonodos cervicais anteriores aumentados e dolorosos à palpação. Qual é a pontuação total do Escore de McIsaac para essa paciente e a sua probabilidade estimada de infecção por GAS?',
    alternativas: [
      {
        id: 'A',
        texto:
          '2 pontos (probabilidade estimada de 5% a 10%).',
      },
      {
        id: 'B',
        texto:
          '3 pontos (probabilidade estimada de 15% a 20%).',
      },
      {
        id: 'C',
        texto:
          '5 pontos (probabilidade estimada de 50% a 55%).',
      },
      {
        id: 'D',
        texto:
          '1 ponto (probabilidade estimada de < 2%).',
      },
    ],
    respostaCorreta: 'C',
    comentario:
      'Os critérios do Escore de Centor modificado por McIsaac atribuem 1 ponto para cada um dos seguintes parâmetros: 1) Idade de 3 a 14 anos (+1 ponto); 2) Febre relatada ou aferida > 38 °C (+1 ponto); 3) Ausência de tosse (+1 ponto); 4) Exsudato ou hipertrofia amigdaliana (+1 ponto); 5) Linfonodos cervicais anteriores dolorosos ou aumentados (+1 ponto). Somando todos os critérios presentes na paciente: Idade 8 anos (+1) + Febre 38,7 °C (+1) + Ausência de tosse (+1) + Exsudato amigdaliano (+1) + Linfadenomegalia cervical anterior dolorosa (+1) = 5 pontos. Uma pontuação de 4 ou 5 confere probabilidade estimada de infecção estreptocócica de cerca de 50% a 55%.',
    comentariosAlternativas: {
      A: 'Incorreta. A paciente preenche todos os 5 critérios do escore de McIsaac.',
      B: 'Incorreta. 3 pontos conferem probabilidade de 28% a 35%, mas a paciente possui 5 pontos.',
      C: 'Correta. Total de 5 pontos (pontuação máxima), indicando alta probabilidade clínica de faringite por GAS.',
      D: 'Incorreta. 1 ponto seria aplicável na ausência da maioria dos critérios clínicos.',
    },
  },
  {
    id: 'ped-ivas-030',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Escore de McIsaac - Conduta Racional Baseada em Pontos',
    isRevisao: false,
    enunciado:
      'Em relação à conduta baseada na estratificação de risco do Escore de Centor modificado por McIsaac em crianças com suspeita de faringite, assinale a recomendação correta estabelecida pelas diretrizes internacionais (IDSA / AAP) e pela Sociedade Brasileira de Pediatria (SBP):',
    alternativas: [
      {
        id: 'A',
        texto:
          'Pontuação <= 1 ponto: probabilidade de GAS muito baixa (< 2% a 5%); não se deve realizar teste rápido nem cultura, e o tratamento com antibiótico não está indicado.',
      },
      {
        id: 'B',
        texto:
          'Pontuação <= 1 ponto: obriga início imediato de amoxicilina em dose profilática para prevenir febre reumática.',
      },
      {
        id: 'C',
        texto:
          'Pontuação de 2 a 3 pontos: dispensa qualquer exame microbiológico e orienta início empírico imediato de penicilina.',
      },
      {
        id: 'D',
        texto:
          'A idade do paciente não interfere na pontuação do escore modificado por McIsaac.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A estratificação recomendada pelo escore de McIsaac é: Pontuação <= 1 ponto: probabilidade muito baixa de infecção por GAS (< 2% a 5%); não se recomenda investigação diagnóstica com teste rápido ou cultura, nem prescrição de antimicrobianos, devendo-se tratar apenas os sintomas (alta probabilidade de etiologia viral); Pontuação de 2 a 3 pontos: realizar Teste Rápido (ou cultura) e tratar apenas se positivo; Pontuação de 4 a 5 pontos: realizar Teste Rápido (ou cultura) e tratar se positivo, podendo-se iniciar tratamento empírico em situações específicas de indisponibilidade de exames laboratoriais rápidos com seguimento garantido.',
    comentariosAlternativas: {
      A: 'Correta. Pacientes com <= 1 ponto não devem ser testados nem tratados com antibióticos, pois o quadro é eminentemente viral.',
      B: 'Incorreta. Prescrever antibiótico com escore <= 1 ponto é erro grosseiro e gera uso irracional de antimicrobianos.',
      C: 'Incorreta. Com 2 a 3 pontos, a conduta recomendada é testar com teste rápido ou cultura, tratando apenas os casos confirmados.',
      D: 'Incorreta. A modificação de McIsaac introduziu exatamente a faixa etária: 3-14 anos (+1 ponto), 15-44 anos (0 ponto), >= 45 anos (-1 ponto).',
    },
  },
  {
    id: 'ped-ivas-031',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Diagnóstico Laboratorial: Teste Rápido de Detecção Antigênica (TRG)',
    isRevisao: false,
    enunciado:
      'Um menino de 7 anos apresenta febre alta de 39 °C, dor de garganta e exsudato amigdaliano com adenite cervical dolorosa e ausência de tosse. O pediatra realiza a coleta de swab de orofaringe para Teste Rápido de Detecção Antigênica de Estreptococo do Grupo A (TRG / RADT). Sobre o desempenho diagnóstico do teste rápido e sua interpretação clínica em pediatria, assinale a alternativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O teste rápido possui baixa especificidade (< 60%), gerando frequentes resultados falso-positivos por reação cruzada com vírus respiratórios.',
      },
      {
        id: 'B',
        texto:
          'O teste rápido possui elevadíssima especificidade (>= 95% a 98%); portanto, um resultado POSITIVO dispensa a realização de cultura de confirmação e autoriza o início imediato do tratamento antimicrobiano.',
      },
      {
        id: 'C',
        texto:
          'O teste rápido detecta exclusivamente anticorpos séricos IgG contra a exotoxina pirogênica A e demora 48 horas para o resultado.',
      },
      {
        id: 'D',
        texto:
          'Se o teste rápido for positivo, deve-se obrigatoriamente aguardar a cultura por 72 horas antes de prescrever qualquer antibiótico.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O Teste Rápido de Detecção de Antígenos Estreptocócicos (RADT / TRG) baseia-se na detecção imunológica do carboidrato C da parede celular do Streptococcus pyogenes. Apresenta excelente especificidade (geralmente entre 95% e 99%). Dessa forma, quando o teste rápido é POSITIVO em uma criança com quadro clínico compatível, o valor preditivo positivo é muito alto, confirmando o diagnóstico e dispensando qualquer teste confirmatório adicional (não necessita de cultura), permitindo a prescrição imediata do antibiótico.',
    comentariosAlternativas: {
      A: 'Incorreta. A especificidade do teste rápido é extremamente alta (>= 95%), não havendo reação cruzada com vírus respiratórios.',
      B: 'Correta. Teste rápido positivo em criança com quadro clínico compatível confirma a infecção estreptocócica e autoriza o tratamento imediato sem necessidade de cultura.',
      C: 'Incorreta. O teste detecta antígenos bacterianos da parede celular na secreção da orofaringe em minutos (imunocromatografia), não anticorpos séricos tardios.',
      D: 'Incorreta. Não se deve retardar o tratamento esperando cultura se o teste rápido já confirmou o antígeno de GAS com alta especificidade.',
    },
  },
  {
    id: 'ped-ivas-032',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Conduta perante Teste Rápido Negativo em Crianças',
    isRevisao: false,
    enunciado:
      'Em uma menina de 6 anos com suspeita clínica moderada a alta de faringite estreptocócica (febre de 39 °C, ausência de sintomas virais catarrais, amígdalas aumentadas com exsudato purulento e linfonodomegalia submandibular), o Teste Rápido de Detecção Antigênica (TRG) resultou NEGATIVO. De acordo com as diretrizes da Sociedade Brasileira de Pediatria (SBP) e da Infectious Diseases Society of America (IDSA), qual é a conduta diagnóstica recomendada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Descartar definitivamente infecção bacteriana sem realizar nenhum outro exame e liberar a paciente sem qualquer seguimento.',
      },
      {
        id: 'B',
        texto:
          'Em crianças e adolescentes, devido à sensibilidade do teste rápido variar entre 70% e 90%, um teste rápido negativo não exclui categoricamente a infecção por GAS; recomenda-se realizar cultura de orofaringe em ágar sangue (padrão-ouro) como exame confirmatório.',
      },
      {
        id: 'C',
        texto:
          'Solicitar ressonância magnética cervical contrastada para pesquisar estafilococos.',
      },
      {
        id: 'D',
        texto:
          'Iniciar vancomicina intravenosa imediatamente por se tratar de cepa mutante multirresistente.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A sensibilidade do teste rápido para estreptococo do grupo A varia entre 70% e 90% na prática clínica (influenciada pela técnica de coleta do swab). Em crianças e adolescentes, como a incidência de infecção por GAS é alta e as sequelas não supurativas (em especial a Febre Reumática) são graves e preveníveis, as diretrizes da SBP, AAP e IDSA recomendam que um resultado NEGATIVO no teste rápido em paciente pediátrico com suspeita clínica deve ser confirmado por Cultura de Orofaringe em ágar sangue (padrão-ouro de sensibilidade). Em adultos, essa confirmação rotineira não é mandatória devido ao risco desprezível de febre reumática.',
    comentariosAlternativas: {
      A: 'Incorreta. Em pediatria, devido ao risco de febre reumática e à sensibilidade não absoluta do teste rápido, o falso-negativo pode ter repercussões graves.',
      B: 'Correta. Cultura de orofaringe de controle é a recomendação padrão em crianças com suspeita de faringite por GAS e teste rápido negativo.',
      C: 'Incorreta. Exame de imagem sofisticado é completamente descabido na avaliação rotineira de faringite sem sinais de abscesso profundo.',
      D: 'Incorreta. Conduta desproporcional e errônea; o Streptococcus pyogenes permanece universalmente sensível à penicilina.',
    },
  },
  {
    id: 'ped-ivas-033',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Técnica Correta de Coleta de Swab da Orofaringe',
    isRevisao: false,
    enunciado:
      'A acurácia do teste rápido e da cultura de orofaringe para o diagnóstico de faringite estreptocócica depende criticamente da técnica adequada de amostragem pelo profissional de saúde. Qual é a técnica correta recomendada para a coleta de swab de orofaringe?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Passar o swab suavemente sobre os dentes incisivos e na face interna das bochechas, colhendo o máximo de saliva possível.',
      },
      {
        id: 'B',
        texto:
          'Com iluminação direta e abaixador de língua posicionado, friccionar com firmeza o swab estéril sobre ambas as amígdalas palatinas (focos de exsudato) e a parede posterior da faringe, evitando estritamente tocar na língua, úvula, mucosa jugal ou lábios.',
      },
      {
        id: 'C',
        texto:
          'Inserir o swab profundamente na nasofaringe através das narinas até atingir a cartilagem nasal média.',
      },
      {
        id: 'D',
        texto:
          'Colher secreção somente do dorso da língua para evitar que o reflexo do vômito contamine a amostra.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Para a coleta adequada de material para pesquisa de GAS (seja teste rápido ou cultura), deve-se usar boa iluminação e um abaixador de língua para rebaixar a língua. O swab de dácron ou algodão estéril deve ser esfregado vigorosamente em ambas as amígdalas palatinas (focando nas criptas e áreas exsudativas) e na parede posterior da faringe. É essencial evitar tocar os lábios, a língua, os dentes, a mucosa jugal ou a úvula, pois a saliva e as bactérias da cavidade bucal (Streptococcus viridans) contaminam a amostra e diluem o inóculo de GAS, levando a resultados falso-negativos.',
    comentariosAlternativas: {
      A: 'Incorreta. Coletar saliva e tocar dentes/bochechas invalida o teste e gera resultado falso-negativo.',
      B: 'Correta. Fricção firme nas amígdalas e parede posterior da faringe sob visualização direta, poupando estruturas adjacentes da cavidade oral.',
      C: 'Incorreta. Swab nasofaríngeo é utilizado para vírus respiratórios (como influenza e SARS-CoV-2) e coqueluche, não para faringite estreptocócica.',
      D: 'Incorreta. O dorso da língua contém flora saprófita oral e não é sítio de colonização nem de infecção primária do Streptococcus pyogenes.',
    },
  },
  {
    id: 'ped-ivas-034',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Tratamento de Escolha: Penicilina G Benzatina e Posologia Pediátrica',
    isRevisao: false,
    enunciado:
      'Um menino de 8 anos pesando 24 kg recebe confirmação de faringoamigdalite estreptocócica por teste rápido positivo. A família relata dificuldade para administrar medicações por via oral em casa e opta pela medicação intramuscular em dose única no serviço de saúde. Não há histórico pessoal ou familiar de atopia medicamentosa. Qual é o antimicrobiano de primeira escolha e a posologia estritamente correta para o peso dessa criança?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Penicilina G Benzatina na dose de 600.000 UI por via intramuscular profunda em dose única.',
      },
      {
        id: 'B',
        texto:
          'Penicilina G Benzatina na dose de 1.200.000 UI por via intramuscular profunda em dose única.',
      },
      {
        id: 'C',
        texto:
          'Ceftriaxona na dose de 1 g por via intramuscular dividida em 3 aplicações diárias.',
      },
      {
        id: 'D',
        texto:
          'Penicilina Procaína na dose de 100.000 UI a cada 6 horas por 14 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Penicilina G Benzatina intramuscular em dose única continua sendo o padrão-ouro e a droga de primeira escolha para o tratamento da faringoamigdalite por Streptococcus pyogenes, com 100% de adesão garantida. A posologia é categorizada pelo peso corporal: Crianças com peso < 27 kg: 600.000 UI, IM, dose única; Crianças com peso >= 27 kg e adolescentes/adultos: 1.200.000 UI, IM, dose única. Como o paciente pesa 24 kg (< 27 kg), a dose indicada é de 600.000 UI.',
    comentariosAlternativas: {
      A: 'Correta. Paciente com 24 kg (< 27 kg) deve receber Penicilina G Benzatina 600.000 UI, IM, dose única.',
      B: 'Incorreta. A dose de 1.200.000 UI é reservada para pacientes com peso igual ou superior a 27 kg.',
      C: 'Incorreta. Cefalosporina de 3ª geração não é droga de 1ª linha para faringite estreptocócica não complicada.',
      D: 'Incorreta. Penicilina procaína não possui a farmacocinética de liberação lenta prolongada da benzatina e não é o regime preconizado.',
    },
  },
  {
    id: 'ped-ivas-035',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Tratamento Oral com Amoxicilina e Duração do Esquema',
    isRevisao: false,
    enunciado:
      'A mãe de uma menina de 7 anos com faringoamigdalite estreptocócica confirmada recusa a injeção intramuscular de penicilina benzatina devido ao medo da dor da agulhada e solicita um tratamento por via oral. O pediatra opta pela prescrição de Amoxicilina oral. Qual é o tempo de tratamento MANDATÓRIO recomendado pela SBP, AAP e IDSA para o uso de amoxicilina na faringite por GAS e qual a razão fundamental para essa duração?',
    alternativas: [
      {
        id: 'A',
        texto:
          '3 dias; tempo suficiente para promover alívio sintomático da odinofagia.',
      },
      {
        id: 'B',
        texto:
          '5 dias; duração padronizada para todas as infecções do trato respiratório superior.',
      },
      {
        id: 'C',
        texto:
          '10 dias completos; necessário para garantir a erradicação microbiológica completa do Streptococcus pyogenes da orofaringe e prevenir a Febre Reumática.',
      },
      {
        id: 'D',
        texto:
          '21 dias ininterruptos; necessário para prevenir a glomerulonefrite pós-estreptocócica.',
      },
    ],
    respostaCorreta: 'C',
    comentario:
      'Quando o tratamento oral é escolhido para a faringite por Streptococcus pyogenes, a Amoxicilina (ou Penicilina V oral) deve ser administrada por 10 DIAS COMPLETOS (na dose de 50 mg/kg/dia, em 1 tomada diária ou fracionada a cada 12 horas, máximo 1.000 mg/dia). Embora o paciente apresente remissão quase completa da febre e dor de garganta em 24 a 48 horas, esquemas curtos (menores que 10 dias) para penicilinas orais apresentam taxas inaceitáveis de falha de erradicação bacteriana na orofaringe (recidiva bacteriológica em até 20-30%), o que compromete a proteção efetiva contra a Febre Reumática aguda.',
    comentariosAlternativas: {
      A: 'Incorreta. Tratamento de 3 dias com penicilina não erradica o GAS da orofaringe e expõe a criança ao risco de febre reumática.',
      B: 'Incorreta. Esquemas de 5 dias com amoxicilina não demonstraram taxas de erradicação equivalentes a 10 dias em estudos com penicilínicos orais.',
      C: 'Correta. São necessários 10 dias de antibioticoterapia oral com amoxicilina para erradicação de GAS e prevenção de sequela reumática.',
      D: 'Incorreta. Não há indicação de 21 dias de tratamento oral, e o tratamento antimicrobiano comprovadamente não previne a GNPE.',
    },
  },
  {
    id: 'ped-ivas-036',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Alternativas Terapêuticas em Alérgicos à Penicilina',
    isRevisao: false,
    enunciado:
      'Um escolar de 10 anos tem diagnóstico clínico e laboratorial de faringite bacteriana por Streptococcus pyogenes. Os pais relatam que o paciente apresentou no passado histórico confiável de anafilaxia à amoxicilina (urticária difusa imediata, broncoespasmo com sibilos e hipotensão arterial poucos minutos após a ingestão). Qual das seguintes opções antimicrobianas é a mais segura e formalmente indicada como alternativa de primeira escolha para este paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Cefalexina oral, pois as cefalosporinas de 1ª geração são totalmente isentas de reação alérgica cruzada em anafilaxia grave.',
      },
      {
        id: 'B',
        texto:
          'Amoxicilina combinada com Clavulanato de potássio para inibir a enzima beta-lactamase.',
      },
      {
        id: 'C',
        texto:
          'Macrolídeo oral (como Azitromicina por 5 dias ou Claritromicina por 10 dias) ou Clindamicina por 10 dias.',
      },
      {
        id: 'D',
        texto:
          'Ciprofloxacino oral por 7 dias.',
      },
    ],
    respostaCorreta: 'C',
    comentario:
      'Em pacientes com história confirmada de reação de hipersensibilidade imediata grave (tipo 1, mediada por IgE, como anafilaxia, angioedema ou broncoespasmo) aos derivados penicilínicos, TODOS os beta-lactâmicos (incluindo todas as cefalosporinas) devem ser rigorosamente evitados devido ao risco de reatividade alérgica cruzada grave. As opções seguras de primeira escolha são os macrolídeos (Azitromicina 12 mg/kg/dia 1x/dia por 5 dias, Claritromicina 15 mg/kg/dia dividida em 2x por 10 dias) ou a Clindamicina (20 a 30 mg/kg/dia dividida em 3x por 10 dias). Se a reação à penicilina não foi do tipo imediata grave (por exemplo, apenas rash cutâneo benigno e tardio sem urticária), cefalosporinas de 1ª geração como a cefalexina podem ser consideradas.',
    comentariosAlternativas: {
      A: 'Incorreta. Em antecedente de anafilaxia imediata (IgE-mediada), cefalosporinas de 1ª geração são contraindicadas pela semelhança da cadeia lateral beta-lactâmica.',
      B: 'Incorreta. Amoxicilina-clavulanato contém amoxicilina e desencadeará anafilaxia com risco de óbito imediato.',
      C: 'Correta. Macrolídeos (azitromicina/claritromicina) ou clindamicina pertencem a classes químicas não beta-lactâmicas e são as opções preconizadas na alergia grave à penicilina.',
      D: 'Incorreta. Quinolonas não são indicadas para faringite estreptocócica e não devem ser usadas como droga de 1ª linha em pediatria sem indicação estrita.',
    },
  },
  {
    id: 'ped-ivas-037',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Prevenção de Sequelas: Febre Reumática vs GNPE',
    isRevisao: false,
    enunciado:
      'A prevenção de sequelas não supurativas é o objetivo primordial que justifica o diagnóstico preciso e o tratamento antimicrobiano da faringite por Streptococcus pyogenes. Sobre o impacto do uso de antibióticos na história natural e prevenção dessas complicações, assinale a afirmativa estritamente verdadeira:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O tratamento com antibióticos iniciado em até 9 dias do início da faringite previne com alta eficácia a Febre Reumática aguda, porém NÃO é capaz de prevenir a ocorrência de Glomerulonefrite Difusa Aguda Pós-Estreptocócica (GNPE).',
      },
      {
        id: 'B',
        texto:
          'O tratamento com penicilina benzatina erradica completamente qualquer risco de desenvolvimento de Glomerulonefrite Difusa Aguda Pós-Estreptocócica (GNPE).',
      },
      {
        id: 'C',
        texto:
          'A Febre Reumática só pode ser evitada se a primeira dose de antibiótico for aplicada nas primeiras 6 horas de febre.',
      },
      {
        id: 'D',
        texto:
          'A profilaxia primária com antibiótico previne a GNPE, mas não altera a incidência de cardite reumática.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Um dos conceitos mais clássicos e recorrentes em provas de Pediatria e Infectologia: O tratamento antimicrobiano adequado da faringite por GAS, mesmo quando iniciado até 9 DIAS após o início do quadro clínico, previne com eficácia praticamente total (> 90%) o desenvolvimento da Febre Reumática aguda. Em contrapartida, múltiplos estudos clínicos demonstraram que o uso de antibióticos NÃO previne a Glomerulonefrite Difusa Aguda Pós-Estreptocócica (GNPE), pois a deposição de imunocomplexos e o mimetismo antigênico glomerular já estão deflagrados no momento da infecção pelas cepas nefritogênicas.',
    comentariosAlternativas: {
      A: 'Correta. O antibiótico previne eficazmente a Febre Reumática (janela de até 9 dias), mas comprovadamente NÃO previne a GNPE.',
      B: 'Incorreta. A penicilina não previne a GNPE; a nefrite ocorre independentemente da antibioticoterapia precoce.',
      C: 'Incorreta. A janela para prevenção da febre reumática estende-se por até 9 dias após o início dos sintomas.',
      D: 'Incorreta. É exatamente o oposto: previne a febre reumática (incluindo cardite), mas não a GNPE.',
    },
  },
  {
    id: 'ped-ivas-038',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Tempo de Transmissibilidade e Retorno Escolar',
    isRevisao: false,
    enunciado:
      'A mãe de um menino de 8 anos diagnosticado com faringoamigdalite estreptocócica que recebeu uma dose intramuscular de Penicilina Benzatina às 10 horas da manhã questiona quando a criança poderá retornar às aulas na escola primária com segurança, sem risco de infectar seus colegas de turma. Qual é a recomendação correta baseada no tempo de clareamento bacteriano?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Pode frequentar a escola no mesmo instante da injeção, pois a penicilina tem ação bactericida em segundos.',
      },
      {
        id: 'B',
        texto:
          'A criança pode retornar à escola após 24 horas do início do antibiótico apropriado, desde que esteja afebril e com melhora clínica.',
      },
      {
        id: 'C',
        texto:
          'A criança deve permanecer em isolamento domiciliar estrito por 14 dias completos após o término da medicação.',
      },
      {
        id: 'D',
        texto:
          'Somente poderá retornar à escola após a realização de duas culturas de orofaringe negativas consecutivas com intervalo de 7 dias.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O início do tratamento antimicrobiano adequado (penicilina benzatina ou amoxicilina) erradica o Streptococcus pyogenes viável da orofaringe em mais de 95% a 98% dos pacientes dentro de 24 horas. Dessa forma, a transmissibilidade da bactéria cessa rapidamente. A recomendação da SBP e dos Centros de Controle de Doenças (CDC/AAP) é que a criança pode retornar à creche ou escola após 24 HORAS do início do antibiótico eficaz, contanto que esteja afebril e em franca melhora do estado geral.',
    comentariosAlternativas: {
      A: 'Incorreta. Nas primeiras horas ainda há eliminação bacteriana ativa nas secreções respiratórias.',
      B: 'Correta. O isolamento cessa após 24 horas de antibioticoterapia eficaz com paciente afebril.',
      C: 'Incorreta. Isolamento de 14 dias é descabido e gera absenteísmo escolar desnecessário.',
      D: 'Incorreta. Culturas de controle ("teste de cura") são formalmente desnecessárias em pacientes assintomáticos.',
    },
  },
  {
    id: 'ped-ivas-039',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Estado de Portador Crônico de GAS (Carrier State)',
    isRevisao: false,
    enunciado:
      'Uma menina de 9 anos, totalmente assintomática, sem febre, tosse ou dor de garganta, é submetida a uma cultura de orofaringe por insistência da mãe (devido a surto na escola), revelando crescimento moderado de Streptococcus pyogenes. A criança não possui história pessoal ou familiar de febre reumática. Ao exame físico: orofaringe sem alterações patológicas. Em relação ao estado de "portador assintomático" do Streptococcus do grupo A em crianças em idade escolar, assinale a afirmação correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O estado de portador crônico afeta cerca de 15% a 20% das crianças em idade escolar durante os meses de inverno; esses indivíduos não têm risco aumentado de desenvolver Febre Reumática e possuem risco insignificante de transmitir a bactéria para outros indivíduos.',
      },
      {
        id: 'B',
        texto:
          'O portador assintomático deve receber internação hospitalar para erradicação com vancomicina venosa.',
      },
      {
        id: 'C',
        texto:
          'A presença de GAS em indivíduo assintomático exige amigdalectomia cirúrgica bilateral de urgência.',
      },
      {
        id: 'D',
        texto:
          'Todo portador assintomático deve receber profilaxia secundária contínua até os 25 anos de idade com penicilina benzatina a cada 21 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O estado de portador crônico de Streptococcus pyogenes (GAS) é definido pela presença da bactéria na faringe sem evidência de resposta imunológica do hospedeiro nem dano tecidual. Em escolares, até 15% a 20% das crianças saudáveis podem ser portadoras crônicas assintomáticas. Como não há processo invasivo ativo, os portadores crônicos não transmitem eficazmente o estreptococo a seus contatos próximos e NÃO correm risco de desenvolver complicações não supurativas como Febre Reumática. Por esses motivos, o tratamento de erradicação rotineiro NÃO é recomendado, exceto em circunstâncias excepcionais (como surto familiar de febre reumática aguda ou paciente com glomerulonefrite prévia).',
    comentariosAlternativas: {
      A: 'Correta. Portadores assintomáticos representam até 15%-20% dos escolares no inverno, não transmitem significativamente a infecção e não correm risco de febre reumática.',
      B: 'Incorreta. Conduta absurda; não se utilizam glicopeptídeos nem internação para portadores assintomáticos.',
      C: 'Incorreta. Amigdalectomia não é indicada para erradicar o estado de portador assintomático.',
      D: 'Incorreta. Profilaxia secundária prolongada a cada 21 dias é reservada estritamente para pacientes com diagnóstico estabelecido de Febre Reumática.',
    },
  },
  {
    id: 'ped-ivas-040',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Uso Inapropriado de Exames de Segredo: ASLO (Antiestreptolisina O)',
    isRevisao: false,
    enunciado:
      'Um escolar de 6 anos é atendido em um ambulatório com dor de garganta intensa há 24 horas e febre de 38,5 °C. O médico assistente solicita o exame sérico de Antiestreptolisina O (ASLO/ASO), cujo resultado vem dentro da faixa de normalidade (ASLO = 80 UI/mL, valor de referência < 200 UI/mL). Com base nesse resultado laboratorial, o médico conclui erroneamente que "o paciente não tem infecção estreptocócica". Por que a dosagem de ASLO NÃO tem qualquer utilidade no diagnóstico da faringoamigdalite estreptocócica aguda?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A ASLO é um teste sorológico que reflete resposta imunológica retrospectiva: seus títulos começam a subir somente após 1 a 2 semanas da infecção aguda, atingindo o pico entre 3 e 5 semanas; portanto, um valor normal nos primeiros dias de doença é esperado e não afasta faringite aguda.',
      },
      {
        id: 'B',
        texto:
          'A ASLO é exclusiva de infecções fúngicas da cavidade oral.',
      },
      {
        id: 'C',
        texto:
          'A ASLO só se eleva em infecções por estafilococos.',
      },
      {
        id: 'D',
        texto:
          'O teste de ASLO foi descontinuado mundialmente por induzir toxicidade celular.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A dosagem de anticorpos contra a estreptolisina O (ASLO/ASO) avalia uma resposta imune humoral tardia e retrospectiva. Os títulos séricos de ASLO começam a se elevar apenas 1 a 2 semanas após a infecção inicial por GAS, alcançando o pico entre 3 a 5 semanas e declinando lentamente ao longo de vários meses. Portanto, a ASLO é completamente inútil para o diagnóstico da faringite aguda na fase precoce (primeiros dias de doença). A ASLO tem indicação formal apenas no diagnóstico retrospectivo de infecção estreptocócica prévia diante de suspeita de sequelas não supurativas tardias, como Febre Reumática ou GNPE.',
    comentariosAlternativas: {
      A: 'Correta. A ASLO reflete infecção pregressa (sobe em 1 a 2 semanas e tem pico em 3 a 5 semanas), sendo desprovida de valor para diagnosticar faringite aguda.',
      B: 'Incorreta. A ASLO é específica para a toxina estreptolisina O do Streptococcus pyogenes.',
      C: 'Incorreta. A ASLO é marcador do estreptococo e não de Staphylococcus aureus.',
      D: 'Incorreta. A sorologia continua sendo padrão para diagnóstico de febre reumática e GNPE em critérios de Jones.',
    },
  },
  {
    id: 'ped-ivas-041',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Diagnóstico Diferencial: Faringite Estreptocócica vs Mononucleose',
    isRevisao: false,
    enunciado:
      'Uma adolescente de 14 anos apresenta febre de 38,6 °C há 8 dias, dor de garganta intensa, fadiga extrema e dificuldade para deglutir. Ao exame: orofaringe com amígdalas volumosas com placas esbranquiçadas extensas, petéquias na junção do palato duro e mole, lifonodomegalia cervical posterior e occipital bilateral com nódulos móveis e dolorosos, além de esplenomegalia a 3 cm do rebordo costal esquerdo. O médico assistente prescreveu Amoxicilina 500 mg de 8 em 8 horas. No 4º dia de amoxicilina, a paciente apresenta exantema máculo-papular vermelho-vivo, pruriginoso e confluente, poupando palmas e plantas. Em relação ao diagnóstico diferencial entre Faringite Estreptocócica e Mononucleose Infecciosa (EBV), assinale a correlação clínica correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A faringite estreptocócica tipicamente cursa com esplenomegalia maciça e linfadenomegalia cervical posterior/occipital difusa.',
      },
      {
        id: 'B',
        texto:
          'A presença de esplenomegalia, fadiga acentuada e prolongada, adenopatia cervical posterior proeminente e exantema induzido por aminopenicilinas são marcas registradas da Mononucleose Infecciosa por EBV, diferindo do GAS (que acomete linfonodos cervicais anteriores e não causa esplenomegalia).',
      },
      {
        id: 'C',
        texto:
          'O aparecimento do rash cutâneo prova alergia definitiva a todas as penicilinas, exigindo desensibilização obrigatória.',
      },
      {
        id: 'D',
        texto:
          'O teste sorológico Monoteste deve ser realizado obrigatoriamente em jejum absoluto de 24 horas.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Mononucleose Infecciosa (EBV) e a Faringite Estreptocócica compartilham febre, odinofagia, amigdalite exsudativa e petéquias em palato. No entanto, elementos clínicos cruciais diferenciam as duas entidades: a Mononucleose cursa com curso arrastado (> 7 dias de febre e astenia), esplenomegalia em 50% dos casos, linfadenomegalia que atinge proeminentemente a cadeia cervical POSTERIOR e occipital (enquanto o GAS afeta tipicamente a cadeia cervical anterior / jugulodigástrica) e desenvolvimento de exantema cutâneo maculopapular em até 90% dos pacientes que recebem aminopenicilinas inadvertidamente.',
    comentariosAlternativas: {
      A: 'Incorreta. A infecção por GAS acomete a cadeia cervical anterior e não causa esplenomegalia na infância.',
      B: 'Correta. Esplenomegalia, acometimento cervical posterior e rash induzido por amoxicilina são características distintivas da infecção por EBV.',
      C: 'Incorreta. O rash pós-amoxicilina na mononucleose é uma reação transitória imunomediada por ativação policlonal e não uma verdadeira alergia IgE-mediada.',
      D: 'Incorreta. O teste de anticorpos heterófilos não exige jejum prolongado.',
    },
  },
  {
    id: 'ped-ivas-042',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Complicação Supurativa Local: Abscesso Periamigdaliano',
    isRevisao: false,
    enunciado:
      'Um adolescente de 13 anos em tratamento incompleto de faringoamigdalite há 5 dias procura a emergência com piora dramática da odinofagia unilateral à direita, incapacidade total de engolir a própria saliva com sialorreia, febre de 39,2 °C, trismo acentuado (dificuldade e dor para abrir a boca) e voz abafada característica ("voz de batata quente"). Ao exame da orofaringe, observa-se abaulamento acentuado do pilar amigdaliano anterior direito com desvio da úvula para o lado esquerdo (contralateral). Qual é o diagnóstico e o manejo inicial imediato mais adequado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Epiglotite aguda; intubação orotraqueal imediata com tubo número 7,0 sem visualização.',
      },
      {
        id: 'B',
        texto:
          'Abscesso Periamigdaliano (fleimão/abscesso do espaço periamigdaliano); conduta envolve internação, drenagem cirúrgica (por aspiração por agulha ou incisão e drenagem), analgesia e antibioticoterapia parenteral (ex.: Ampicilina-sulbactam ou Ceftriaxona associada a Clindamicina).',
      },
      {
        id: 'C',
        texto:
          'Crupe viral espasmódico; nebulização com adrenalina racêmica e alta médica imediata.',
      },
      {
        id: 'D',
        texto:
          'Amigdalite fúngica crônica; prescrição de fluconazol oral por 30 dias em domicílio.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O Abscesso Periamigdaliano (quinsy) é a complicação supurativa local mais comum da faringoamigdalite aguda em adolescentes e adultos jovens. Ocorre pela disseminação da infecção da cripta amigdaliana através da cápsula para o tecido conjuntivo frouxo do espaço periamigdaliano. Os achados patognomônicos são: odinofagia unilateral severa, trismo (por espasmo inflamatório do músculo pterigoideo interno adjacente), voz anasalada ou empastada ("voz de batata quente"), abaulamento do palato mole e desvio acentuado da úvula para o lado CONTRALATERAL ao abscesso. O tratamento combina drenagem do material purulento (punção aspirativa ou incisão) e antibioticoterapia intravenosa com cobertura para Streptococcus pyogenes, Staphylococcus aureus e anaeróbios orais.',
    comentariosAlternativas: {
      A: 'Incorreta. Na epiglotite a oroscopia é contraindicada e o quadro cursa com estridor e posição do tripé, sem abaulamento assimétrico de amígdala nem desvio de úvula.',
      B: 'Correta. Quadro clínico e anatômico clássico de abscesso periamigdaliano: trismo, sialorreia unilateral, desvio contralateral da úvula e indicação de drenagem e antibiótico parenteral.',
      C: 'Incorreta. O crupe acomete lactentes e pré-escolares com tosse ladrante e estridor, sem trismo nem assimetria palatina.',
      D: 'Incorreta. Trata-se de urgência cirúrgica/infecciosa bacteriana aguda e não infecção fúngica domiciliar.',
    },
  },
  {
    id: 'ped-ivas-043',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Abscesso Retrofaríngeo em Lactente - Anatomia e Sinais de Alarme',
    isRevisao: false,
    enunciado:
      'Um menino de 2 anos e meio é admitido com febre alta, recusa alimentar completa, irritabilidade, sialorreia e postura em hiperextensão cervical persistente, resistindo ativamente a qualquer tentativa de flexão da cabeça ("torcicolo febril"). A oroscopia é difícil, mas revela discreto abaulamento na parede posterior da faringe. A radiografia cervical em perfil em inspiração mostra aumento significativo da espessura do espaço retrofaríngeo (diâmetro pré-vertebral maior que a largura do corpo vertebral adjacente). Por que o abscesso retrofaríngeo é predominante nessa faixa etária precoce (< 4 a 5 anos)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Porque a mastoide dos lactentes se funde diretamente com a orofaringe após o nascimento.',
      },
      {
        id: 'B',
        texto:
          'Porque o espaço retrofaríngeo contém os linfonodos de Rouvière (que drenam a nasofaringe, adenoides e seios da face), os quais são ricos e proeminentes nos primeiros anos de vida e sofrem atrofia e involução fisiológica após os 4 a 5 anos de idade.',
      },
      {
        id: 'C',
        texto:
          'Porque os dentes decíduos permanentes migram através do espaço pré-vertebral.',
      },
      {
        id: 'D',
        texto:
          'Porque as crianças menores de 4 anos não produzem imunoglobulina A salivar.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O Abscesso Retrofaríngeo acomete predominantemente crianças menores de 4 a 5 anos de idade por razões anatômicas específicas. O espaço retrofaríngeo (compreendido entre a fáscia bucofaríngea anteriormente e a lâmina alar da fáscia pré-vertebral posteriormente) abriga ricas cadeias de linfonodos retrofaríngeos mediais e laterais (linfonodos de Rouvière). Esses linfonodos recebem a drenagem linfática da nasofaringe, orelha média, tuba auditiva e seios paranasais. Por volta dos 4 a 5 anos de idade, esses linfonodos sofrem atrofia e involução progressiva, razão pela qual a ocorrência de celulite e supuração retrofaríngea torna-se muito rara em escolares e adolescentes.',
    comentariosAlternativas: {
      A: 'Incorreta. Não existe fusão anatômica anômala entre mastoide e orofaringe.',
      B: 'Correta. Presença e posterior involução fisiológica dos linfonodos de Rouvière aos 4-5 anos de idade justificam o pico de incidência nessa faixa etária.',
      C: 'Incorreta. A erupção dentária não transita pelo espaço retrofaríngeo posterior.',
      D: 'Incorreta. A etiologia decorre de adenite supurativa bacteriana dos linfonodos pré-vertebrais e não de deficiência seletiva de IgA salivar.',
    },
  },
  {
    id: 'ped-ivas-044',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Escarlatina: Toxina Eritrogênica e Manifestações Cutâneas',
    isRevisao: false,
    enunciado:
      'Uma menina de 7 anos apresenta faringoamigdalite estreptocócica aguda há 24 horas e desenvolve erupção cutânea micropapular áspera difusa que confere à pele uma textura de "lixa" (papel de lixa). No exame físico, o médico constata palidez perioral contrastando com o rubor malar intenso na face ("sinal de Filatov"), acentuação do exantema nas dobras de flexão axilar e antecubital com petéquias lineares transversais que não desaparecem à digitopressão ("sinal de Pastia") e língua com aspecto de "framboesa" ou "amora". Qual é a substância bacteriana responsável pelo desenvolvimento deste quadro de Escarlatina?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Proteína M antifagocítica tipo 1.',
      },
      {
        id: 'B',
        texto:
          'Exotoxina Pirogênica Estreptocócica (Spe A, B ou C), também denominada toxina eritrogênica, produzida por cepas lisogênicas de Streptococcus pyogenes.',
      },
      {
        id: 'C',
        texto:
          'Estreptolisina S oxigênio-estável.',
      },
      {
        id: 'D',
        texto:
          'Enzima Hialuronidase estreptocócica.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Escarlatina é uma manifestação toxinogênica associada à faringite por Streptococcus pyogenes, decorrente da produção e liberação na circulação sistêmica de Exotoxinas Pirogênicas Estreptocócicas (SpeA, SpeB ou SpeC), historicamente conhecidas como toxinas eritrogênicas. Essas exotoxinas atuam como superantígenos provocando vasodilatação capilar difusa e infiltração perivascular na derme. Os sinais semiológicos clássicos são: Sinal de Filatov (palidez perioral com bochechas avermelhadas), Sinal de Pastia (linhas hiperpigmentadas petequiais nas pregas de flexão cutânea), exantema micropapular em "lixa" e língua em framboesa/morango (eritema com hipertrofia de papilas gustativas).',
    comentariosAlternativas: {
      A: 'Incorreta. A proteína M confere virulência antifagocítica ao GAS, mas não causa diretamente a vasodilatação dérmica escarlatiniforme.',
      B: 'Correta. As exotoxinas pirogênicas estreptocócicas (Spe A, B e C / toxina eritrogênica) são as responsáveis pelas manifestações dermatológicas da escarlatina.',
      C: 'Incorreta. A estreptolisina S é uma hemolisina que causa a zona de lise completa no ágar sangue, não sendo responsável pelo exantema escarlatiniforme.',
      D: 'Incorreta. A hialuronidase hidrolisa o ácido hialurônico da matriz extracelular favorecendo a invasão tecidual ("fator de espalhamento"), sem causar o rash de lixa.',
    },
  },
  {
    id: 'ped-ivas-045',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Desamação Cutânea Típica da Escarlatina',
    isRevisao: false,
    enunciado:
      'Ainda em relação à paciente do caso anterior com Escarlatina, a mãe pergunta o que esperar da evolução da pele da criança após a melhora da febre e do exantema. Qual é a resposta correta sobre a evolução dermatológica tardia da escarlatina?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O exantema desaparece sem qualquer alteração na pele, mantendo aspecto hidratado sem descamação.',
      },
      {
        id: 'B',
        texto:
          'Ocorre descamação característica que se inicia na face no final da 1ª semana e progride para tronco e membros, culminando em descamação lamelar ou em "dedo de luva" nas palmas das mãos e plantas dos pés entre a 2ª e a 3ª semana de doença.',
      },
      {
        id: 'C',
        texto:
          'A pele evolui com cicatrizes queloidianas irreversíveis em todas as áreas acometidas.',
      },
      {
        id: 'D',
        texto:
          'Surgem bolhas hemorrágicas difusas que necessitam de enxertia dérmica em centro cirúrgico.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A história natural do exantema da escarlatina culmina com um processo típico de descamação. Com o declínio do exantema no final da primeira semana de doença, a epiderme lesada pela toxina eritrogênica começa a descamar: inicia-se como descamação furfurácea fina na face e no tronco, evoluindo a partir do 10º a 14º dia para uma descamação lamelar espessa e proeminente nas extremidades distais (mãos e pés), desprendendo-se em lâminas ou em "dedo de luva", podendo persistir por até 3 a 4 semanas.',
    comentariosAlternativas: {
      A: 'Incorreta. A descamação lamelar distal é um dos marcos mais típicos e quase universais da escarlatina.',
      B: 'Correta. Descamação furfurácea em tronco seguida por descamação lamelar em extremidades acrais (dedo de luva).',
      C: 'Incorreta. A escarlatina não atinge a derme profunda e cicatriza perfeitamente sem deixar cicatrizes ou queloides.',
      D: 'Incorreta. Descrição incompatível com escarlatina; descolamentos bolhosos extensos ocorrem na Síndrome da Pele Escaldada Estafilocócica (SSSS) ou NET.',
    },
  },
  {
    id: 'ped-ivas-046',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Síndrome do Choque Tóxico Estreptocócico (STSS)',
    isRevisao: false,
    enunciado:
      'Um escolar de 8 anos é admitido em choque distributivo grave, hipotensão arterial refratária a volume, febre alta, coagulopatia intravascular disseminada e insuficiência renal aguda 48 horas após o início de um quadro de faringoamigdalite hiperaguda acompanhada de celulite de partes moles em membro inferior. O hemocultivo revela crescimento de Streptococcus pyogenes. Qual é o mecanismo fisiopatológico mediado pelas exotoxinas pirogênicas estreptocócicas que culmina na tempestade inflamatória do choque tóxico?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ativação seletiva de anticorpos da classe IgE com desgranulação maciça de mastócitos alérgicos.',
      },
      {
        id: 'B',
        texto:
          'Ação das exotoxinas como SUPERANTÍGENOS, ligando-se diretamente e simultaneamente à cadeia beta do receptor de células T (TCR) e à molécula de MHC de classe II nas células apresentadoras de antígeno sem processamento intracelular, provocando ativação policlonal descontrolada de até 20% de todos os linfócitos T e liberação maciça de citocinas pró-inflamatórias (IL-1, IL-6 e TNF-alfa).',
      },
      {
        id: 'C',
        texto:
          'Bloqueio neuromuscular irreversible dos receptores colinérgicos nicotínicos na placa motora.',
      },
      {
        id: 'D',
        texto:
          'Inibição exclusiva do fator Xa da coagulação com hemorragia difusa isolada.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Na Síndrome do Choque Tóxico Estreptocócico (STSS), as exotoxinas pirogênicas estreptocócicas (notadamente SpeA e SpeC) atuam como SUPERANTÍGENOS. Diferente dos antígenos convencionais (que são processados e apresentados na fenda do MHC ativando menos de 0,01% dos clones de linfócitos T), os superantígenos ligam-se externamente de forma inespecífica ao domínio V-beta do TCR e ao MHC de classe II. Essa ligação ativa até 20% de toda a população de linfócitos T do organismo, desencadeando uma "tempestade de citocinas" sistêmica (IL-1, IL-6, IFN-gama e TNF-alfa), levando a colapso circulatório, permeabilidade capilar maciça, hipotensão refratária e falência de múltiplos órgãos.',
    comentariosAlternativas: {
      A: 'Incorreta. Este mecanismo descreve anafilaxia e não a síndrome mediada por superantígenos bacterianos.',
      B: 'Correta. Fisiopatologia precisa dos superantígenos estreptocócicos ativando maciçamente linfócitos T e deflagrando tempestade de citocinas.',
      C: 'Incorreta. O bloqueio na placa motora é o mecanismo da toxina botulínica.',
      D: 'Incorreta. O choque tóxico decorre de inflamação endotelial sistêmica e vasoplegia mediada por citocinas, não de inibição seletiva enzimática.',
    },
  },
  {
    id: 'ped-ivas-047',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Profilaxia Secundária da Febre Reumática - Esquema Padrão',
    isRevisao: false,
    enunciado:
      'Uma criança de 9 anos com diagnóstico confirmado de Febre Reumática aguda após episódio de faringoamigdalite estreptocócica (apresentando poliartrite migratória de grandes articulações, cardite leve e elevação sustentada de provas inflamatórias e ASLO) concluiu a fase aguda do tratamento. De acordo com as diretrizes do Ministério da Saúde e da Sociedade Brasileira de Pediatria, qual é a conduta farmacológica de PROFILAXIA SECUNDÁRIA obrigatória para prevenir novos surtos de febre reumática e piora da lesão valvar cardíaca?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administração de Penicilina G Benzatina por via intramuscular a cada 21 dias (ou no máximo a cada 28 dias).',
      },
      {
        id: 'B',
        texto:
          'Uso contínuo de amoxicilina oral diariamente durante o inverno por 2 anos consecutivos.',
      },
      {
        id: 'C',
        texto:
          'Aplicação de vacina pneumocócica a cada 6 meses.',
      },
      {
        id: 'D',
        texto:
          'Administração de corticoide oral em baixas doses contínuas até os 18 anos de idade.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A profilaxia secundária em pacientes com febre reumática prévia visa impedir novas infecções de orofaringe pelo Streptococcus pyogenes, uma vez que novos contatos com a bactéria podem desencadear surtos recorrentes que agravam dramaticamente as sequelas valvares (cardiopatia reumática crônica). O regime padrão-ouro preconizado no Brasil pela Sociedade Brasileira de Pediatria e Ministério da Saúde é a Penicilina G Benzatina por via intramuscular a cada 21 dias (ou no máximo a cada 28 dias), na dose de 600.000 UI (< 27 kg) ou 1.200.000 UI (>= 27 kg).',
    comentariosAlternativas: {
      A: 'Correta. Penicilina G Benzatina a cada 21 dias é o regime de profilaxia secundária de excelência para Febre Reumática.',
      B: 'Incorreta. Amoxicilina de uso estacional não é a droga de escolha e a profilaxia secundária deve ser contínua o ano todo.',
      C: 'Incorreta. A profilaxia é direcionada ao Streptococcus pyogenes (GAS) e não ao pneumococo.',
      D: 'Incorreta. Corticoides contínuos geram síndrome de Cushing iatrogênica e imunossupressão sem prevenir colonização bacteriana.',
    },
  },
  {
    id: 'ped-ivas-048',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Amigdalite Recorrente e Indicações Formais de Amigdalectomia',
    isRevisao: false,
    enunciado:
      'Um menino de 7 anos é trazido ao otorrinolaringologista pediátrico com queixa de múltiplos episódios de faringoamigdalite exsudativa aguda com febre alta e comprovação laboratorial. Segundo o histórico médico fidedigno documentado em prontuário, a criança apresentou 7 episódios no último ano, todos tratados adequadamente com antibióticos. A mãe pergunta se o filho tem indicação de cirurgia para retirada das amígdalas. De acordo com os Critérios de Paradise (paradigma internacional para indicação de tonsilectomia em pediatria), qual é a conduta indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A cirurgia é formalmente contraindicada antes dos 18 anos devido à perda permanente de imunidade mucosal.',
      },
      {
        id: 'B',
        texto:
          'O paciente preenche os Critérios de Paradise para indicação cirúrgica de amigdalectomia (tonsilectomia), caracterizados por: >= 7 episódios no último ano, OU >= 5 episódios ao ano por 2 anos consecutivos, OU >= 3 episódios ao ano por 3 anos consecutivos, com documentação médica rigorosa de cada episódio.',
      },
      {
        id: 'C',
        texto:
          'A cirurgia só estaria indicada se a criança tivesse pelo menos 15 episódios anuais comprovados por biópsia amigdaliana.',
      },
      {
        id: 'D',
        texto:
          'Deve-se iniciar quimioterapia imunossupressora antes de cogitar qualquer cirurgia.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Os Critérios de Paradise são a referência mundial para a indicação de amigdalectomia (tonsilectomia) de causa infecciosa de repetição em crianças. Exigem: 1) Frequência mínima: >= 7 episódios no último ano; OU >= 5 episódios por ano nos últimos 2 anos; OU >= 3 episódios por ano nos últimos 3 anos; 2) Características de cada episódio: febre >= 38,3 °C OU adenopatia cervical anterior dolorosa (> 2 cm) OU exsudato amigdaliano OU teste positivo para GAS; 3) Tratamento adequado com antibióticos recebido em cada episódio; 4) Documentação clínica fidedigna por médico.',
    comentariosAlternativas: {
      A: 'Incorreta. A amigdalectomia é um procedimento seguro e comumente realizado na infância quando estritamente indicado.',
      B: 'Correta. Critérios de Paradise preenchidos: 7 episódios documentados no último ano justificam a intervenção cirúrgica.',
      C: 'Incorreta. 7 episódios no último ano já atendem aos critérios; não se exige biópsia amigdaliana.',
      D: 'Incorreta. Quimioterapia imunossupressora é absurda em amigdalite bacteriana de repetição.',
    },
  },
  {
    id: 'ped-ivas-049',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Faringites Não Estreptocócicas Raras: Arcanobacterium haemolyticum',
    isRevisao: false,
    enunciado:
      'Um adolescente de 16 anos apresenta quadro de febre moderada, dor de garganta e exsudato amigdaliano cinzento-amarelado há 4 dias. Simultaneamente, desenvolve um exantema maculopapular escarlatiniforme difuso que se iniciou no tronco e poupa a face. O teste rápido para estreptococo do grupo A é negativo e a cultura em ágar sangue de carneiro após 48 horas revela um bacilo gram-positivo pleomórfico catalase-negativo produtor de estreita zona de beta-hemólise e inibição da hemólise estafilocócica (reação reversa de CAMP). Qual é o patógeno bacteriano causador deste quadro em adolescentes e qual antimicrobiano é classicamente mais eficaz que a penicilina para o seu tratamento?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Corynebacterium diphtheriae; tratado com antitoxina diftérica isolada.',
      },
      {
        id: 'B',
        texto:
          'Arcanobacterium haemolyticum; sendo os macrolídeos (como a Azitromicina ou Eritromicina) os antimicrobianos de escolha, visto que a bactéria apresenta resistência ou tolerância frequente às penicilinas.',
      },
      {
        id: 'C',
        texto:
          'Pseudomonas aeruginosa; tratada com ciprofloxacino oral.',
      },
      {
        id: 'D',
        texto:
          'Fusobacterium necrophorum; tratado exclusivamente com anfotericina B.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O Arcanobacterium haemolyticum (anteriormente Corynebacterium haemolyticum) é uma causa bacteriana emergente de faringite exsudativa acompanhada de exantema escarlatiniforme em adolescentes e adultos jovens (15 a 25 anos). É um bacilo gram-positivo difteroide que mimetiza perfeitamente a escarlatina estreptocócica. Ao contrário do Streptococcus pyogenes, o Arcanobacterium haemolyticum apresenta tolerância ou resistência relativa às penicilinas; portanto, os MACROLÍDEOS (eritromicina, azitromicina ou claritromicina) são as drogas de escolha preferenciais para a sua erradicação clínica.',
    comentariosAlternativas: {
      A: 'Incorreta. A difteria cursa com pseudomembrana espessa aderente que sangra ao descolamento e toxemia sistêmica grave, sem o exantema escarlatiniforme clássico.',
      B: 'Correta. Arcanobacterium haemolyticum é agente causador de faringite com rash em adolescentes, tratado preferencialmente com macrolídeos.',
      C: 'Incorreta. Pseudomonas é bacilo gram-negativo não associado a faringite comunitária em adolescentes hígidos.',
      D: 'Incorreta. Fusobacterium é uma bactéria anaeróbia gram-negativa tratada com beta-lactâmicos com inibidor ou metronidazol, não com antifúngicos.',
    },
  },
  {
    id: 'ped-ivas-050',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Síndrome de Lemierre (Tromboflebite Séptica da Jugular Interna)',
    isRevisao: false,
    enunciado:
      'Um jovem de 17 anos previamente hígido teve faringoamigdalite aguda grave tratada com anti-inflamatórios orais por conta própria. Após 7 dias, evolui com piora clínica dramática, febre em picos de 40 °C com calafrios trepidantes, dor e edema cervical unilateral na borda anterior do músculo esternocleidomastoideo, dor torácica pleurítica aguda, tosse com hemoptise e dispneia. A tomografia computadorizada contrastada de tórax revela múltiplos nódulos pulmonares periféricos cavitados compatíveis com êmbolos sépticos. A angiotomografia cervical confirma tromboflebite séptica da veia jugular interna ipsilateral. Qual é o diagnóstico epônimo dessa afecção e o principal micro-organismo anaeróbio envolvido?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome de Guillain-Barré por Campylobacter jejuni.',
      },
      {
        id: 'B',
        texto:
          'Angina de Ludwig por Streptococcus viridans.',
      },
      {
        id: 'C',
        texto:
          'Síndrome de Lemierre (sepse pós-angina), classicamente causada pelo Fusobacterium necrophorum.',
      },
      {
        id: 'D',
        texto:
          'Síndrome de Waterhouse-Friderichsen por Neisseria meningitidis.',
      },
    ],
    respostaCorreta: 'C',
    comentario:
      'A Síndrome de Lemierre (também denominada sepse pós-angina ou tromboflebite séptica da veia jugular interna) é uma complicação supurativa grave e potencialmente letal que se inicia na orofaringe em adolescentes e adultos jovens previamente hígidos. O agente etiológico clássico é o Fusobacterium necrophorum (bacilo anaeróbio gram-negativo da microbiota oral). A infecção invade o espaço parafaríngeo posterior através da drenagem venosa peritonsilar, infecta e trombosa a veia jugular interna e gera embolização séptica metastática hematogênica sistêmica, primariamente para os pulmões (originando múltiplos abscessos e nódulos cavitados periféricos, derrame pleural empiematoso e pneumotórax). O tratamento requer antibioticoterapia prolongada com cobertura para anaeróbios (ex.: Ampicilina-sulbactam, Ceftriaxona + Metronidazol ou Carbapenêmicos).',
    comentariosAlternativas: {
      A: 'Incorreta. Guillain-Barré é polirradiculoneuropatia periférica desmielinizante ascendente arreflexa, sem êmbolos pulmonares cavitados.',
      B: 'Incorreta. Angina de Ludwig é celulite gangrenosa do assoalho da boca e espaço submandibular/sublingual bilateral de origem odontogênica.',
      C: 'Correta. Síndrome de Lemierre por Fusobacterium necrophorum: infecção orofaríngea seguida de trombose da veia jugular interna e êmbolos pulmonares sépticos.',
      D: 'Incorreta. Waterhouse-Friderichsen cursa com necrose hemorrágica fulminante das adrenais na vigência de meningococcemia.',
    },
  },
  {
    id: 'ped-ivas-051',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'OMA: Fisiopatologia e Anatomia da Tuba Auditiva Infantil',
    isRevisao: false,
    enunciado:
      'A Otite Média Aguda (OMA) é uma das causas mais comuns de prescrição de antibióticos na faixa etária pediátrica, com pico de incidência evidente entre 6 e 24 meses de vida. Qual é o fator determinante anatômico e biomecânico que predispõe o lactente e a criança pequena a episódios frequentes de disfunção tubária e subsequente sobreinfecção da orelha média após um quadro gripal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A tuba auditiva infantil é excessivamente longa, verticalizada e rígida, retendo o ar sob alta pressão positiva.',
      },
      {
        id: 'B',
        texto:
          'A tuba auditiva (tuba de Eustáquio) no lactente é significativamente mais curta, mais larga, com menor rigidez cartilaginosa (mais complacente/colapsável) e posicionada em ângulo mais horizontalizado (cerca de 10° em relação ao plano horizontal, contra 45° no adulto), facilitando o refluxo de secreções e micro-organismos da rinofaringe para a orelha média.',
      },
      {
        id: 'C',
        texto:
          'A ausência congênita de epitélio ciliado na mucosa da cavidade timpânica até os 5 anos de idade.',
      },
      {
        id: 'D',
        texto:
          'O fechamento ósseo precoce do canal carotídeo que comprime a cóclea e impede a drenagem linfática retroauricular.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A anatomia da tuba auditiva no lactente é a principal chave da fisiopatologia da OMA. Em lactentes e pré-escolares, a tuba é: 1) Mais curta (metade do comprimento do adulto); 2) Mais horizontalizada (forma um ângulo de cerca de 10 graus com o plano horizontal, enquanto no adulto atinge 45 graus); 3) Mais complacente e flácida (cartilagem com menor sustentação elástica e menor eficiência do músculo tensor do véu palatino). Quando ocorre uma infecção viral de vias aéreas superiores, o edema mucoso e o acúmulo de secreções na rinofaringe geram obstrução tubária e facilitam a aspiração retrógrada mecânica de patógenos bacterianos da nasofaringe diretamente para a cavidade da orelha média.',
    comentariosAlternativas: {
      A: 'Incorreta. A tuba infantil é mais curta e horizontalizada, e não longa ou verticalizada.',
      B: 'Correta. Características anatômicas exatas da tuba auditiva infantil: mais curta, complacente e horizontalizada.',
      C: 'Incorreta. O epitélio da orelha média e tuba auditiva é ciliado (pseudoestratificado colunar ciliado) desde o nascimento.',
      D: 'Incorreta. A anatomia vascular não tem relação com o refluxo de patógenos nasofaríngeos.',
    },
  },
  {
    id: 'ped-ivas-052',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Fatores de Risco e Prevenção Primária da OMA',
    isRevisao: false,
    enunciado:
      'Durante a consulta de puericultura de um lactente de 4 meses, a mãe relata que planeja matricular o filho em creche no próximo mês e pergunta quais fatores de risco ambientais e comportamentais aumentam a chance de a criança desenvolver otites de repetição e como preveni-los. De acordo com a Academia Americana de Pediatria (AAP) e a Sociedade Brasileira de Pediatria (SBP), assinale a orientação correta sobre fatores de risco e fatores protetores para OMA:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O uso de chupeta para dormir após os 6 meses e o aleitamento por mamadeira em decúbito dorsal são fatores protetores que promovem o fechamento protetor da tuba auditiva.',
      },
      {
        id: 'B',
        texto:
          'A frequência em creches (aglomeração precoce), o desmame precoce (ausência de aleitamento materno exclusivo), a oferta de mamadeira com a criança deitada na horizontal, o uso contínuo de chupeta após os 6-10 meses de vida e o tabagismo passivo domiciliar são fatores de risco independentes bem estabelecidos para OMA.',
      },
      {
        id: 'C',
        texto:
          'A exposição à fumaça do tabaco não interfere na depuração mucociliar respiratória nem no epitélio da tuba auditiva.',
      },
      {
        id: 'D',
        texto:
          'A vacina pneumocócica conjugada e a vacina contra influenza não exercem nenhum impacto na incidência de otites médias na infância.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Fatores de risco ambientais e comportamentais para OMA incluem: 1) Frequência a creches (maior transmissão cruzada de vírus e bactérias respiratórias); 2) Ausência de aleitamento materno (o leite materno fornece IgA secretora protetora e fatores imunológicos); 3) Alimentação com mamadeira em decúbito dorsal horizontal (favorece refluxo líquido pela tuba auditiva para o ouvido médio); 4) Tabagismo passivo (a nicotina e poluentes paralisam o batimento ciliar e causam hiperplasia de células caliciformes na tuba); 5) Uso prolongado de chupeta após os 6-10 meses (altera a dinâmica da deglutição e da pressão tubária). As vacinas pneumocócicas conjugadas e de influenza reduzem significativamente a incidência de OMA e são medidas preventivas fundamentais.',
    comentariosAlternativas: {
      A: 'Incorreta. Chupeta prolongada e mamadeira na horizontal são fatores de risco maiores e não de proteção.',
      B: 'Correta. Enumera com perfeição os fatores de risco epidemiológicos modificáveis para OMA.',
      C: 'Incorreta. O fumo passivo lesa diretamente o epitélio ciliar e aumenta o risco de efusão e otite.',
      D: 'Incorreta. Ambas as vacinas demonstraram redução comprovada no número de episódios de OMA em ensaios populacionais.',
    },
  },
  {
    id: 'ped-ivas-053',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Microbiologia da OMA na Era Pós-Vacinas Conjugadas',
    isRevisao: false,
    enunciado:
      'A implantação universal das vacinas pneumocócicas conjugadas (PCV10 e PCV13) no calendário infantil modificou o perfil microbiológico e a prevalência dos sorotipos isolados na timpanocentese de crianças com Otite Média Aguda. Atualmente, quais são os três principais agentes bacterianos responsáveis pela OMA não complicada na infância?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Pseudomonas aeruginosa, Klebsiella pneumoniae e Staphylococcus epidermidis.',
      },
      {
        id: 'B',
        texto:
          'Streptococcus pneumoniae (pneumococo), Haemophilus influenzae não tipável (NTHi) e Moraxella catarrhalis.',
      },
      {
        id: 'C',
        texto:
          'Bordetella pertussis, Mycoplasma pneumoniae e Chlamydia pneumoniae.',
      },
      {
        id: 'D',
        texto:
          'Streptococcus agalactiae (GBS), Listeria monocytogenes e Escherichia coli.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A tríade clássica de patógenos bacterianos da OMA em crianças é composta por: 1) Streptococcus pneumoniae (pneumococo): historicamente o mais prevalente e com maior potencial invasivo e inflamatório; 2) Haemophilus influenzae não tipável (NTHi - cepas não capsuladas): tornou-se co-predominante ou até o mais frequente em várias regiões após a introdução da vacina pneumocócica conjugada, frequentemente associado a cepas produtoras de beta-lactamase e à síndrome otite-conjuntivite; 3) Moraxella catarrhalis: responsável por 10% a 15% dos casos, quase 100% produtora de beta-lactamase.',
    comentariosAlternativas: {
      A: 'Incorreta. Pseudomonas aeruginosa é o agente típico da otite externa difusa ("ouvido de nadador") ou da otite média crônica supurada perfurada, não da OMA bacteriana aguda.',
      B: 'Correta. Pneumococo, H. influenzae não tipável e Moraxella catarrhalis respondem por > 95% das causas bacterianas de OMA.',
      C: 'Incorreta. Bactérias atípicas e Bordetella causam síndromes de vias aéreas inferiores (coqueluche e pneumonia atípica).',
      D: 'Incorreta. Esta tríade é patognomônica de sepse e meningite no período neonatal imediato.',
    },
  },
  {
    id: 'ped-ivas-054',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Diagnóstico Otoscópico Preciso da OMA segundo AAP e SBP',
    isRevisao: false,
    enunciado:
      'O sobrediagnóstico e o tratamento desnecessário de OMA ocorrem com frequência quando a hiperemia isolada da membrana timpânica decorrente do choro intenso da criança é confundida com infecção bacteriana aguda. De acordo com as diretrizes da Academia Americana de Pediatria (AAP) e da Sociedade Brasileira de Pediatria (SBP), qual dos seguintes achados otoscópicos apresenta o MAIOR valor preditivo positivo e acurácia para o diagnóstico fidedigno de OMA?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Hiperemia leve difusa e transitória de uma membrana timpânica transparente e com mobilidade preservada ao otoscópio pneumático.',
      },
      {
        id: 'B',
        texto:
          'Abaulamento moderado a grave da Membrana Timpânica (MT), que reflete efusão purulenta sob pressão na cavidade da orelha média.',
      },
      {
        id: 'C',
        texto:
          'Visualização nítida do cabo do martelo e do triângulo luminoso de Politzer sem secreção.',
      },
      {
        id: 'D',
        texto:
          'Presença de rolha de cerume endurecida ocluindo 30% do conduto auditivo externo.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O abaulamento moderado a grave da membrana timpânica (MT em "rosquinha" ou "doughnut", ou convexidade acentuada com perda dos relevos anatômicos normais do martelo) é o sinal otoscópico com MAIOR sensibilidade e especificidade para o diagnóstico de OMA (especificidade de 97% a 99% e sensibilidade de até 96%). Segundo os critérios diagnósticos estritos da AAP/SBP, diagnostica-se OMA na presença de: 1) Abaulamento moderado a grave da MT; OU 2) Abaulamento discreto da MT associado a início recente (< 48h) de otalgia (ou sinal da orelha no lactente) OU eritema intenso da MT; OU 3) Otorreia aguda recente não decorrente de otite externa.',
    comentariosAlternativas: {
      A: 'Incorreta. Hiperemia isolada é um sinal inespecífico frequentemente induzido por choro vigoroso, tosse ou febre na ausência de efusão na orelha média.',
      B: 'Correta. O abaulamento moderado a grave da MT é o achado semiológico de maior acurácia e valor preditivo para OMA.',
      C: 'Incorreta. Membrana transparente com relevos e cone de luz bem preservados define membrana timpânica normal e saudável.',
      D: 'Incorreta. Cerume não estabelece diagnóstico de infecção na orelha média.',
    },
  },
  {
    id: 'ped-ivas-055',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Diagnóstico Diferencial: OMA vs Otite Média com Efusão (OME / Serosa)',
    isRevisao: false,
    enunciado:
      'Um menino de 3 anos é levado à consulta pediátrica assintomático, para revisão de rotina. A mãe relata apenas que percebe que a criança tem aumentado o volume da televisão nas últimas semanas após ter tido um resfriado há cerca de 1 mês. A criança não tem febre, não queixa de dor de ouvido e dorme tranquilamente. À otoscopia: Membrana timpânica opaca, com coloração âmbar/amarelada, sem abaulamento (apresentando leve retração do cabo do martelo), presença de bolhas de ar e nível hidroaéreo visível por transparência, com mobilidade reduzida à otoscopia pneumática. Não há eritema nem abaulamento. Qual é o diagnóstico e a conduta recomendada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Otite Média Aguda bacteriana supurada; iniciar Amoxicilina-Clavulanato oral imediata por 14 dias.',
      },
      {
        id: 'B',
        texto:
          'Otite Média com Efusão (OME / Otite Média Serosa ou Secretora); conduta expectante com acompanhamento clínico e reavaliação auditiva em 3 meses, pois a grande maioria dos casos se resolve espontaneamente sem antibióticos, anti-histamínicos ou corticoides.',
      },
      {
        id: 'C',
        texto:
          'Perfuração timpânica traumática; encaminhar para timpanoplastia cirúrgica de urgência.',
      },
      {
        id: 'D',
        texto:
          'Colesteatoma congênito extenso da orelha interna; mastoidectomia radical imediata.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Otite Média com Efusão (OME, serosa ou secretora) é definida pela presença de líquido na cavidade da orelha média na AUSÊNCIA de sinais e sintomas agudos de infecção bacteriana (sem febre, sem otalgia aguda, sem abaulamento da MT e sem eritema acentuado). É extremamente comum após um episódio de IVAS ou como sequela temporária pós-OMA (até 50% das crianças mantêm efusão após 1 mês e 10% após 3 meses). Os achados clássicos são MT retraída ou em posição neutra, translúcida ou amarelada/âmbar, com bolhas ou nível líquido visível e hipoacusia de condução flutuante. Diretrizes internacionais contraindicam o uso de antibióticos, corticoides orais/tópicos ou descongestionantes para OME simples, preconizando observação por 3 meses.',
    comentariosAlternativas: {
      A: 'Incorreta. Prescrever antibiótico para OME é erro clássico; na ausência de sintomas inflamatórios agudos e abaulamento, o antibiótico não acelera a resolução e gera resistência.',
      B: 'Correta. Diagnóstico de Otite Média com Efusão com conduta expectante e seguimento por 3 meses.',
      C: 'Incorreta. A membrana timpânica está íntegra com líquido seroso interno e bolhas, sem perfuração.',
      D: 'Incorreta. O colesteatoma manifesta-se por massa perlácea esbranquiçada no quadrante postero-superior da MT com otorreia fétida crônica refratária.',
    },
  },
  {
    id: 'ped-ivas-056',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'OMA em Menor de 6 Meses - Conduta Obrigatória',
    isRevisao: false,
    enunciado:
      'Um lactente de 4 meses é trazido ao pronto atendimento pediátrico com irritabilidade súbita, recusa alimentar e febre de 38,4 °C iniciada há 24 horas. A otoscopia revela membrana timpânica esquerda com abaulamento moderado, perda dos pontos de referência anatômicos e hiperemia acentuada. A orelha direita é normal. Os pais perguntam se podem aguardar alguns dias apenas com analgésicos antes de iniciar antibióticos. De acordo com as diretrizes da AAP e da Sociedade Brasileira de Pediatria, qual é a conduta formal indicada para este paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Observação atenta ("Watchful Waiting") sem antibiótico por 72 horas, pois o quadro é unilateral.',
      },
      {
        id: 'B',
        texto:
          'Prescrição IMEDIATA de antibioticoterapia oral com Amoxicilina em dose alta, pois em lactentes com idade menor de 6 meses de vida a antibioticoterapia imediata é mandatória, independentemente de a infecção ser unilateral ou bilateral e da gravidade dos sintomas.',
      },
      {
        id: 'C',
        texto:
          'Prescrever apenas descongestionantes nasais tópicos em gotas por 7 dias.',
      },
      {
        id: 'D',
        texto:
          'Realizar miringotomia imediata com colocação de tubo de carretel sem antibióticos.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Na estratificação de conduta da OMA pediátrica, a idade inferior a 6 meses constitui um critério absoluto e mandatório para ANTIBIOTICOTERAPIA IMEDIATA. Em lactentes menores de 6 meses, a observação sem antibiótico ("watchful waiting") é terminantemente contraindicada devido à imaturidade imunológica, alto risco de complicações supurativas locais e disseminação sistêmica (bacteremia, meningite e mastoidite), além de maior dificuldade na reavaliação clínica fidedigna. A droga de primeira escolha é a Amoxicilina em dose alta (80 a 90 mg/kg/dia).',
    comentariosAlternativas: {
      A: 'Incorreta. A conduta expectante ("watchful waiting") é restrita a maiores de 6 meses (ou preferencialmente >= 2 anos) e estritamente proibida em menores de 6 meses.',
      B: 'Correta. Idade < 6 meses impõe início imediato de antibiótico na OMA confirmada.',
      C: 'Incorreta. Descongestionantes tópicos são contraindicados em lactentes e não tratam a infecção da orelha média.',
      D: 'Incorreta. Timpanostomia não é o tratamento inicial da primeira OMA não complicada.',
    },
  },
  {
    id: 'ped-ivas-057',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'OMA Bilateral em Crianças de 6 Meses a 2 Anos',
    isRevisao: false,
    enunciado:
      'Uma menina de 14 meses é atendida na UPA com quadro febril de 38,2 °C, inapetência e episódios de choro ao deitar há 36 horas. A otoscopia bilateral evidencia membranas timpânicas opacas, com abaulamento evidente em ambas as orelhas e eritema moderado difuso. A criança não apresenta toxemia nem otorreia. O pediatra pondera entre iniciar antibioticoterapia imediata ou propor observação atenta. Segundo as diretrizes da AAP e da SBP, por que a OMA BILATERAL nessa faixa etária (6 meses a 2 anos) requer antibioticoterapia imediata?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Porque a OMA bilateral em crianças entre 6 meses e 2 anos apresenta taxas significativamente mais baixas de cura espontânea e maior frequência de falha clínica e complicações quando tratada apenas com observação.',
      },
      {
        id: 'B',
        texto:
          'Porque a OMA bilateral é obrigatoriamente causada por Staphylococcus aureus resistente à meticilina (MRSA).',
      },
      {
        id: 'C',
        texto:
          'Porque o acometimento bilateral exige intervenção cirúrgica com timpanoplastia dentro de 24 horas.',
      },
      {
        id: 'D',
        texto:
          'Porque a observação atenta é permitida em qualquer idade e condição clínica, sendo o antibiótico facultativo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Estudos clínicos randomizados e meta-análises demonstraram que crianças na faixa etária entre 6 meses e 2 anos com OMA BILATERAL têm benefício estatisticamente superior e substancial com o uso de antimicrobianos imediatos em comparação com o placebo/observação (maior índice de falha clínica, persistência da dor e recorrência no grupo observação). Dessa forma, a AAP e a SBP estabelecem que: 1) Menores de 6 meses: sempre tratar com antibiótico; 2) De 6 meses a 2 anos: antibiótico IMEDIATO se a OMA for bilateral OU se o quadro for grave; a observação atenta só é aceitável se a infecção for unilateral E leve/moderada com cuidadores esclarecidos.',
    comentariosAlternativas: {
      A: 'Correta. Crianças entre 6 meses e 2 anos com OMA bilateral apresentam benefício comprovado com antibioticoterapia imediata.',
      B: 'Incorreta. Os agentes são os habituais (Pneumococo, H. influenzae, Moraxella) e não MRSA.',
      C: 'Incorreta. OMA aguda não complicada é enfermidade de tratamento clínico e não de timpanoplastia cirúrgica.',
      D: 'Incorreta. A observação atenta possui critérios estritos de segurança e elegibilidade.',
    },
  },
  {
    id: 'ped-ivas-058',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Critérios de OMA Grave - Indicação de Antibiótico Imediato',
    isRevisao: false,
    enunciado:
      'Um menino de 3 anos é levado ao pronto-socorro com otalgia direita intensa que o impede de dormir há mais de 48 horas e febre alta de 39,5 °C que responde precariamente a antitérmicos comuns. À otoscopia: abaulamento exuberante da membrana timpânica direita, hiperemia intensa e ausência de visualização dos relevos anatômicos. A orelha esquerda é normal. Considerando a classificação de gravidade da OMA pelas diretrizes da AAP/SBP, qual é a definição de "OMA Grave" e a conduta recomendada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Definida por febre >= 39 °C OU otalgia moderada a grave com duração >= 48 horas; a conduta é antibioticoterapia IMEDIATA com analgesia vigorosa, sem indicação de conduta expectante.',
      },
      {
        id: 'B',
        texto:
          'Definida apenas se houver perfuração timpânica bilateral associada a paralisia facial periférica; conduta expectante por 72 horas.',
      },
      {
        id: 'C',
        texto:
          'Definida por tosse acompanhante por mais de 5 dias; conduta envolve apenas xarope antitussígeno.',
      },
      {
        id: 'D',
        texto:
          'Definida pela presença de hiperemia isolada sem febre; conduta é corticoide injetável sem antibiótico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A OMA é classificada como "GRAVE" na presença de qualquer um dos seguintes critérios: 1) Febre aferida >= 39,0 °C (nas últimas 24 a 48h); 2) Otalgia moderada a severa; 3) Otalgia com duração prolongada (>= 48 horas); 4) Otorreia purulenta aguda. Diante de OMA grave, em qualquer idade (incluindo crianças maiores de 2 anos), a antibioticoterapia IMEDIATA é mandatória, associada a analgesia sistêmica potente (paracetamol, dipirona ou ibuprofeno). A conduta expectante ("watchful waiting") é estritamente contraindicada na OMA grave.',
    comentariosAlternativas: {
      A: 'Correta. Critérios de OMA grave presentes (febre >= 39 °C e otalgia severa há 48h), determinando antibioticoterapia imediata.',
      B: 'Incorreta. Paralisia facial é uma complicação intratemporal grave e não o critério definidor básico de OMA grave.',
      C: 'Incorreta. Tosse não define gravidade da OMA e antitussígenos não tratam infecção do ouvido.',
      D: 'Incorreta. Hiperemia isolada sem febre não configura OMA grave.',
    },
  },
  {
    id: 'ped-ivas-059',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Conduta Expectante / Observação Atenta (Watchful Waiting)',
    isRevisao: false,
    enunciado:
      'Uma menina de 3 anos e meio apresenta febrícula de 38,0 °C e queixa de dor leve na orelha esquerda há cerca de 12 horas. A criança está brincando ativamente no consultório, alimentando-se bem e sem toxemia. A otoscopia revela membrana timpânica esquerda com abaulamento discreto e hiperemia leve; orelha direita normal. Os pais são profissionais esclarecidos, residem a 5 minutos do serviço de saúde e compreendem prontamente as orientações. Em conformidade com os princípios do uso racional de antimicrobianos e as diretrizes da AAP/SBP, qual é a conduta inicial mais adequada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Prescrever Ceftriaxona intramuscular diária por 5 dias.',
      },
      {
        id: 'B',
        texto:
          'Adotar a conduta de Observação Atenta ("Watchful Waiting") por 48 a 72 horas com analgesia oral regular eficaz, orientando os pais a iniciarem antibiótico apenas se houver persistência ou piora dos sintomas após esse período, com reavaliação médica garantida.',
      },
      {
        id: 'C',
        texto:
          'Internar em enfermaria de isolamento respiratório por risco de meningite pneumocócica iminente.',
      },
      {
        id: 'D',
        texto:
          'Prescrever gotas otológicas de neomicina e polimixina B com anestésico tópico na orelha acometida.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A conduta expectante ("Watchful Waiting" ou observação atenta com analgesia) é uma opção segura e amplamente referendada para crianças >= 2 anos com OMA unilateral e sintomas leves/moderados (dor leve e febre < 39 °C), ou entre 6 meses e 2 anos com OMA UNILATERAL não grave, desde que haja concordância familiar, facilidade de retorno e analgesia garantida. Como até 70% a 80% dos episódios de OMA leve a moderada curam espontaneamente nas primeiras 48 a 72 horas por resolução imune do hospedeiro, essa estratégia poupa antibióticos, evita efeitos adversos gastrointestinais e combate a resistência bacteriana.',
    comentariosAlternativas: {
      A: 'Incorreta. Ceftriaxona é droga de reserva para falhas graves ou impossibilidade de via oral.',
      B: 'Correta. Critérios ideais preenchidos para observação atenta por 48 a 72 horas com analgesia e reavaliação.',
      C: 'Incorreta. Criança ativa, afebril no momento e sem sinais de alarme não tem indicação de internação.',
      D: 'Incorreta. Gotas otológicas antibióticas são ineficazes na OMA com membrana timpânica íntegra (não penetram na orelha média).',
    },
  },
  {
    id: 'ped-ivas-060',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Primeira Linha de Tratamento: Amoxicilina em Dose Alta e Mecanismo',
    isRevisao: false,
    enunciado:
      'Quando indicada a antibioticoterapia para uma criança com Otite Média Aguda sem fatores complicadores, a Amoxicilina oral na dose de 80 a 90 mg/kg/dia (dividida em 2 ou 3 tomadas diárias) é o fármaco de primeira escolha. Qual é o fundamento microbiológico e farmacológico para a utilização da dose ALTA de amoxicilina (80-90 mg/kg/dia) em detrimento da dose padrão (40-45 mg/kg/dia)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A dose alta tem a capacidade de inibir a produção de beta-lactamases pelo Haemophilus influenzae.',
      },
      {
        id: 'B',
        texto:
          'A dose alta (80 a 90 mg/kg/dia) atinge níveis séricos e concentrações no fluido da orelha média superiores à Concentração Inibitória Mínima (CIM) necessária para vencer o mecanismo de resistência intermediária do Streptococcus pneumoniae decorrente de alterações nas Proteínas Ligadoras de Penicilina (PBPs).',
      },
      {
        id: 'C',
        texto:
          'A dose alta é necessária porque a amoxicilina possui biodisponibilidade oral de menos de 10% no trato digestivo infantil.',
      },
      {
        id: 'D',
        texto:
          'A dose alta destina-se a erradicar fungos saprófitos do conduto auditivo.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A resistência do Streptococcus pneumoniae à penicilina e à amoxicilina NÃO é mediada por produção de beta-lactamases (como ocorre com o H. influenzae e M. catarrhalis), mas sim por mutações genéticas nas Proteínas Ligadoras de Penicilina (PBPs 1a, 2b e 2x), que reduzem a afinidade do antibiótico pelo alvo bacteriano. Trata-se de uma resistência relativa, superável por aumento de concentração. A administração de amoxicilina na dose alta (80 a 90 mg/kg/dia) atinge níveis no fluido da orelha média que ultrapassam a CIM das cepas com resistência intermediária por mais de 40% a 50% do intervalo entre as doses (relação T > CIM, parâmetro farmacodinâmico dos beta-lactâmicos), assegurando sucesso bacteriológico.',
    comentariosAlternativas: {
      A: 'Incorreta. A amoxicilina isolada não inibe beta-lactamases; para isso seria necessário um inibidor como o ácido clavulânico.',
      B: 'Correta. Fundamento farmacodinâmico clássico: vencer a resistência intermediária das PBPs do pneumococo aumentando a concentração tecidual no ouvido médio.',
      C: 'Incorreta. A amoxicilina tem excelente absorção gastrointestinal (> 80% a 90%), superior à ampicilina.',
      D: 'Incorreta. Amoxicilina é um antibacteriano e não atua em fungos.',
    },
  },
  {
    id: 'ped-ivas-061',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Indicações de Amoxicilina com Clavulanato de Potássio na OMA',
    isRevisao: false,
    enunciado:
      'Um lactente de 16 meses apresenta febre alta de 39,2 °C, irritabilidade e otalgia bilateral com abaulamento evidente de ambas as membranas timpânicas. Ao revisar o prontuário, o pediatra constata que a criança utilizou amoxicilina em dose alta para um episódio de pneumonia há 20 dias. De acordo com as diretrizes da AAP e da Sociedade Brasileira de Pediatria, qual é a escolha antimicrobiana de primeira linha indicada especificamente para este paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Repetir a amoxicilina isolada em dose padrão (40-45 mg/kg/dia) por 5 dias.',
      },
      {
        id: 'B',
        texto:
          'Amoxicilina com Clavulanato de potássio na dose de 90 mg/kg/dia de amoxicilina e 6,4 mg/kg/dia de clavulanato (proporção de 14:1) por via oral por 10 dias.',
      },
      {
        id: 'C',
        texto:
          'Ciprofloxacino oral associado a gotas otológicas de gentamicina.',
      },
      {
        id: 'D',
        texto:
          'Sulfametoxazol-Trimetoprima (cotrimoxazol) por via oral.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Amoxicilina-Clavulanato é indicada como terapia inicial de primeira linha nas seguintes situações clínicas específicas de OMA: 1) Uso prévio de antibiótico beta-lactâmico nos últimos 30 dias (situação do caso, que seleciona cepas de Haemophilus influenzae e Moraxella catarrhalis produtoras de beta-lactamase); 2) Presença de conjuntivite purulenta ipsilateral concorrente (síndrome otite-conjuntivite); 3) Falha terapêutica após 48 a 72 horas de amoxicilina isolada. A proporção recomendada da formulação é 14:1 (proporção ES/alta dose), garantindo 90 mg/kg/dia de amoxicilina e apenas 6,4 mg/kg/dia de clavulanato, o que minimiza a ocorrência de diarreia decorrente do excesso de ácido clavulânico.',
    comentariosAlternativas: {
      A: 'Incorreta. O uso recente de beta-lactâmico (< 30 dias) seleciona produtores de beta-lactamase, tornando a amoxicilina pura inadequada.',
      B: 'Correta. Amoxicilina-Clavulanato na formulação 14:1 em dose de 90 mg/kg/dia é o esquema de escolha após uso de antibiótico recente.',
      C: 'Incorreta. Quinolonas não são drogas de primeira linha para OMA infantil e aminoglicosídeos tópicos com risco de perfuração são ototóxicos.',
      D: 'Incorreta. O cotrimoxazol possui taxas elevadíssimas de resistência para pneumococo na comunidade.',
    },
  },
  {
    id: 'ped-ivas-062',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Síndrome Otite-Conjuntivite: Agente e Tratamento',
    isRevisao: false,
    enunciado:
      'Uma menina de 2 anos é trazida ao ambulatório apresentando conjuntivite com secreção purulenta abundante e edema palpebral à direita, associada a febre de 38,8 °C e choro noturno. A otoscopia revela abaulamento importante da membrana timpânica direita com hiperemia intensa e opacidade. A orelha esquerda e o olho esquerdo não apresentam alterações. Qual é o agente etiológico bacteriano classicamente responsável por essa "Síndrome Otite-Conjuntivite" e qual é a conduta farmacológica indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Streptococcus pyogenes; tratada com colírio de tobramicina isolado sem medicação sistêmica.',
      },
      {
        id: 'B',
        texto:
          'Haemophilus influenzae não tipável (NTHi); tratada com Amoxicilina-Clavulanato oral em dose alta (90 mg/kg/dia de amoxicilina), devido à elevada prevalência de produção de beta-lactamase por esse patógeno.',
      },
      {
        id: 'C',
        texto:
          'Chlamydia trachomatis; tratada com eritromicina parenteral hospitalar.',
      },
      {
        id: 'D',
        texto:
          'Vírus Herpes Simples tipo 1; tratada com aciclovir oral e colírio de corticoide.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A "Síndrome Otite-Conjuntivite" é uma entidade clínica clássica caracterizada pelo surgimento concomitante de conjuntivite purulenta aguda e Otite Média Aguda ipsilateral. Em mais de 70% a 80% dos casos, o micro-organismo responsável é o Haemophilus influenzae não tipável (NTHi). Como cerca de 30% a 50% das cepas de H. influenzae isoladas produzem a enzima beta-lactamase (que degrada o anel beta-lactâmico da amoxicilina), o tratamento de escolha mandatório é a Amoxicilina associada a Clavulanato de potássio por via oral em dose alta (90 mg/kg/dia de amoxicilina). Apenas colírio tópico é insuficiente, pois não trata a orelha média.',
    comentariosAlternativas: {
      A: 'Incorreta. O Streptococcus pyogenes raramente causa conjuntivite purulenta associada a OMA unilateral e colírio isolado não trata a orelha média.',
      B: 'Correta. Síndrome otite-conjuntivite clássica por H. influenzae não tipável produtor de beta-lactamase, tratada com amoxicilina-clavulanato.',
      C: 'Incorreta. Clamídia causa pneumonia afebril do lactente jovem (1 a 3 meses) com tosse em staccato e conjuntivite neonatal precoce.',
      D: 'Incorreta. Corticoide em ceratite/conjuntivite herpética é proscrito pelo risco de perfuração de córnea.',
    },
  },
  {
    id: 'ped-ivas-063',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Falha Terapêutica em 48 a 72 Horas na OMA',
    isRevisao: false,
    enunciado:
      'Um menino de 2 anos com diagnóstico de OMA iniciou tratamento com Amoxicilina em dose alta (90 mg/kg/dia). Após 72 horas completas de uso correto do antimicrobiano sem omissão de doses, a mãe retorna ao pronto-socorro porque o filho persiste com febre de 39,0 °C, piora da otalgia e irritabilidade. A reavaliação otoscópica confirma a persistência do abaulamento timpânico e hiperemia intensa. Qual é a conduta recomendada para esta falha terapêutica de primeira linha?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Suspender o antibiótico e orientar apenas compressa de água morna no ouvido.',
      },
      {
        id: 'B',
        texto:
          'Trocar a antibioticoterapia para Amoxicilina-Clavulanato oral na dose de 90 mg/kg/dia (ou Ceftriaxona intramuscular por 3 dias consecutivos), a fim de cobrir cepas de Haemophilus influenzae ou Moraxella catarrhalis produtoras de beta-lactamase ou pneumococos altamente resistentes.',
      },
      {
        id: 'C',
        texto:
          'Dobrar a dose de amoxicilina isolada para 180 mg/kg/dia.',
      },
      {
        id: 'D',
        texto:
          'Prescrever gotas otológicas de ciprofloxacino com dexametasona mantendo a amoxicilina pura.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A falha terapêutica na OMA é definida pela ausência de melhora ou agravamento dos sintomas clínicos (febre, dor) e dos achados otoscópicos após 48 a 72 horas de antibioticoterapia apropriada. A falha da amoxicilina isolada decorre habitualmente de: 1) Infecção por H. influenzae ou M. catarrhalis produtor de beta-lactamase; 2) Pneumococo altamente resistente. A conduta de segunda linha indicada pelas diretrizes da AAP/SBP é a substituição por Amoxicilina-Clavulanato (90 mg/kg/dia de amoxicilina na proporção 14:1) ou, em casos de vômitos, intolerância ou falha grave, Ceftriaxona intramuscular (50 mg/kg/dia em dose única diária por 3 dias consecutivos).',
    comentariosAlternativas: {
      A: 'Incorreta. Suspender o antibiótico em paciente com infecção bacteriana em falha clínica expõe ao risco de mastoidite aguda.',
      B: 'Correta. Substituição para Amoxicilina-Clavulanato ou Ceftriaxona IM por 3 dias é a conduta preconizada na falha da amoxicilina em 48-72h.',
      C: 'Incorreta. Doses de 180 mg/kg/dia de amoxicilina são tóxicas e desprovidas de respaldo posológico.',
      D: 'Incorreta. Gotas otológicas não penetram a membrana íntegra e não resolvem a falha microbiológica na orelha média.',
    },
  },
  {
    id: 'ped-ivas-064',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Alternativas na Alergia à Penicilina na OMA',
    isRevisao: false,
    enunciado:
      'Uma menina de 4 anos é diagnosticada com OMA unilateral grave (febre de 39,3 °C e otalgia importante há 3 dias). A mãe relata que a paciente é alérgica à penicilina, tendo apresentado exantema maculopapular leve sem prurido e sem anafilaxia (urticária ou broncoespasmo ausentes) no 8º dia de uso de amoxicilina há 1 ano. De acordo com as diretrizes da AAP e da SBP, qual das seguintes classes antimicrobianas é a alternativa oral de escolha para esta paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Cefalosporinas orais de 2ª ou 3ª geração (como Cefuroxima axetil ou Cefdinir), pois em reações não imediatas (não IgE-mediadas) o risco de reação alérgica cruzada com cefalosporinas que possuem cadeias laterais distintas da amoxicilina é desprezível (< 1% a 2%).',
      },
      {
        id: 'B',
        texto:
          'Tetraciclina oral por 21 dias.',
      },
      {
        id: 'C',
        texto:
          'Gentamicina oral.',
      },
      {
        id: 'D',
        texto:
          'Ampicilina intravenosa hospitalar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Nas reações à penicilina que NÃO são graves nem imediatas (tipo 1, IgE-mediadas) — por exemplo, rash maculopapular morbiliforme tardio sem urticária, sem angioedema e sem broncoespasmo —, a taxa de reatividade cruzada com cefalosporinas de 2ª e 3ª geração é inferior a 1% a 2%, porque suas cadeias laterais R1 diferem significativamente da cadeia da amoxicilina. Nesses casos, as opções orais de primeira escolha na OMA são Cefuroxima axetil (30 mg/kg/dia em 2 tomadas), Cefdinir ou Cefpodoxima. Já em casos de anafilaxia imediata grave comprovada, evita-se qualquer beta-lactâmico, optando-se por macrolídeos (azitromicina/claritromicina), clindamicina ou levofloxacino (em situações selecionadas).',
    comentariosAlternativas: {
      A: 'Correta. Cefalosporinas de 2ª ou 3ª geração são seguras e recomendadas na alergia não anafilática à penicilina.',
      B: 'Incorreta. Tetraciclinas são contraindicadas em menores de 8 anos pelo risco de impregnação e manchamento dentário permanente com hipoplasia de esmalte.',
      C: 'Incorreta. Gentamicina não possui absorção por via oral (biodisponibilidade nula).',
      D: 'Incorreta. Ampicilina é da mesma família da amoxicilina e desencadeará a mesma reação.',
    },
  },
  {
    id: 'ped-ivas-065',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Duração da Antibioticoterapia na OMA segundo a Idade',
    isRevisao: false,
    enunciado:
      'A duração do tratamento com antibiótico na OMA pediátrica deve ser individualizada com base na idade da criança e na gravidade dos sintomas para otimizar a cura e prevenir recidivas. Segundo as diretrizes da AAP e da SBP, qual é a duração padrão recomendada para crianças menores de 2 anos de idade ou com quadro grave?',
    alternativas: [
      {
        id: 'A',
        texto:
          '3 dias de tratamento para todos os pacientes pediátricos.',
      },
      {
        id: 'B',
        texto:
          '10 dias completos para menores de 2 anos ou qualquer idade com OMA grave; 7 dias para crianças de 2 a 5 anos com OMA leve a moderada; e 5 a 7 dias para crianças >= 6 anos com sintomas leves.',
      },
      {
        id: 'C',
        texto:
          '30 dias contínuos em dose profilática.',
      },
      {
        id: 'D',
        texto:
          'Dose única de qualquer antibiótico oral independentemente da idade.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A duração do curso antimicrobiano na OMA é estratificada por idade e gravidade: 1) Crianças menores de 2 anos OU pacientes de qualquer idade com doença grave (febre alta, dor severa, perfuração/otorreia): 10 DIAS COMPLETOS (estudos mostram que esquemas menores em < 2 anos resultam em maiores taxas de falha terapêutica e recidiva); 2) Crianças de 2 a 5 anos com sintomas leves a moderados: 7 DIAS; 3) Crianças com 6 anos ou mais com doença leve/moderada: 5 A 7 DIAS.',
    comentariosAlternativas: {
      A: 'Incorreta. Esquemas ultracurtos de 3 dias orais falham no clareamento de pneumococo e H. influenzae da orelha média de crianças pequenas.',
      B: 'Correta. Estratificação de duração consagrada pela AAP e SBP: 10 dias em menores de 2 anos ou casos graves.',
      C: 'Incorreta. 30 dias é tempo excessivo para OMA aguda simples, reservado apenas para mastoidite crônica com osteomielite.',
      D: 'Incorreta. Antibióticos orais de rotina não são eficazes em dose única.',
    },
  },
  {
    id: 'ped-ivas-066',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Manejo da Dor (Analgesia) na OMA Pediátrica',
    isRevisao: false,
    enunciado:
      'Um menino de 2 anos e meio é diagnosticado com OMA unilateral moderada. O pai pergunta qual é a medida mais importante para o alívio imediato do choro e do sofrimento da criança nas primeiras 24 horas, já que o antibiótico pode demorar de 24 a 48 horas para começar a reduzir a inflamação. De acordo com a SBP e a AAP, assinale a conduta analgésica correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A analgesia sistêmica com anti-inflamatórios ou analgésicos orais (como ibuprofeno, dipirona ou paracetamol em doses adequadas) é a intervenção prioritária e mandatória para controle da dor aguda, independentemente de se prescrever ou não antibiótico.',
      },
      {
        id: 'B',
        texto:
          'O uso de analgésicos orais é contraindicado na OMA para não mascarar uma perfuração timpânica iminente.',
      },
      {
        id: 'C',
        texto:
          'Deve-se pingar azeite morno ou óleo mineral não esterilizado no conduto auditivo a cada 2 horas.',
      },
      {
        id: 'D',
        texto:
          'Indicar codeína ou morfina oral domiciliar como primeira escolha para lactentes.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A otalgia é o sintoma dominante e mais angustiante da OMA. Mesmo quando o antibiótico é instituído, a redução apreciável da dor só ocorre após 24 a 48 horas de tratamento. Portanto, o manejo analgésico sistemático é indispensável e deve ser prescrito ativamente desde a primeira consulta. As drogas de primeira escolha são analgésicos e anti-inflamatórios orais nas doses adequadas para o peso: Paracetamol (10-15 mg/kg/dose a cada 4-6h), Dipirona (15-25 mg/kg/dose a cada 6h) ou Ibuprofeno (5-10 mg/kg/dose a cada 6-8h). Gotas com óleo no conduto são proscritas e opioides como codeína são contraindicados em crianças.',
    comentariosAlternativas: {
      A: 'Correta. Analgesia oral efetiva com paracetamol, dipirona ou ibuprofeno é o pilar prioritário imediato na abordagem da dor da OMA.',
      B: 'Incorreta. Aliviar a dor é imperativo ético e clínico e não mascara complicações se a criança for adequadamente monitorizada.',
      C: 'Incorreta. Introduzir óleos e líquidos não esterilizados no ouvido pode causar infecções e ototoxicidade se houver microperfuração.',
      D: 'Incorreta. Codeína possui risco de metabolização ultra-rápida fatal (depressão respiratória) em crianças e é formalmente contraindicada.',
    },
  },
  {
    id: 'ped-ivas-067',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'OMA com Perfuração Timpânica e Otorreia Aguda',
    isRevisao: false,
    enunciado:
      'Uma menina de 3 anos estava com dor de ouvido muito intensa e choro inconsolável há 2 dias. Esta manhã, a mãe notou saída de secreção purulenta e sanguinolenta no travesseiro e conduto auditivo externo direito; simultaneamente, a criança teve melhora súbita e acentuada da dor de ouvido e parou de chorar. Ao exame: secreção mucopurulenta fluindo através de pequena perfuração puntiforme no quadrante postero-inferior da membrana timpânica direita. Qual é a explicação fisiopatológica para a melhora súbita da dor após a perfuração timpânica e qual a conduta indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A ruptura timpânica é sinal de cura definitiva da infecção e dispensa qualquer medicação oral.',
      },
      {
        id: 'B',
        texto:
          'A dor aguda na OMA decorre da distensão e tensão mecânica exercida pela efusão purulenta sob alta pressão sobre as terminações nervosas da membrana timpânica; a perfuração espontânea drena o pus e alivia a pressão imediatamente; a conduta requer antibioticoterapia oral sistêmica e proteção da orelha contra entrada de água.',
      },
      {
        id: 'C',
        texto:
          'A perfuração timpânica requer lavagem do canal auditivo com jato forte de soro fisiológico e encaminhamento cirúrgico imediato para timpanoplastia.',
      },
      {
        id: 'D',
        texto:
          'Trata-se de corpo estranho perfurante que passou despercebido.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Na OMA supurada sob pressão, a membrana timpânica hiperemiada e edemaciada é estirada ao máximo, o que causa dor intensa (inervação sensitiva pelos nervos trigêmeo, glossofaringeo e vago). Quando a pressão intraluminal atinge o limiar isquêmico do tecido fibroelástico, ocorre pequena necrose avascular central com perfuração espontânea (otorreia purulenta/serossanguinolenta). O alívio mecânico da tensão sobre a membrana timpânica faz a dor desaparecer subitamente. A conduta é prescrever antibioticoterapia oral (10 dias), analgesia se necessário e orientar os pais a NÃO molharem o ouvido (proteger no banho com algodão parafinado/silicone), pois a grande maioria das pequenas perfurações agudas cicatriza espontaneamente em poucas semanas.',
    comentariosAlternativas: {
      A: 'Incorreta. A perfuração alivia a dor, mas a infecção na mucosa da cavidade timpânica persiste e necessita de antibioticoterapia sistêmica.',
      B: 'Correta. Fisiopatologia clássica: alívio da dor pela descompressão mecânica do pus através da perfuração timpânica espontânea.',
      C: 'Incorreta. Lavagem de ouvido sob pressão é formalmente contraindicada em vigência de perfuração timpânica ativa.',
      D: 'Incorreta. Quadro clínico clássico de OMA supurada espontaneamente perfurada.',
    },
  },
  {
    id: 'ped-ivas-068',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Uso de Gotas Otológicas na OMA - Indicações e Riscos',
    isRevisao: false,
    enunciado:
      'Em relação ao uso de soluções e gotas otológicas tópicas contendo antibióticos e/ou corticoides na Otite Média Aguda em pediatria, assinale a afirmação estritamente correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Gotas otológicas tópicas com neomicina ou polimixina B devem ser aplicadas em todas as crianças com membrana timpânica intacta como terapia principal.',
      },
      {
        id: 'B',
        texto:
          'Quando a membrana timpânica está ÍNTEGRA, gotas otológicas antibióticas são INÚTEIS, pois não atravessam a barreira da membrana para alcançar a cavidade da orelha média; caso haja PERFURAÇÃO timpânica conhecida, soluções com aminoglicosídeos (gentamicina, neomicina) são proscritas pelo risco de ototoxicidade irreversível (lesão coclear e vestibular).',
      },
      {
        id: 'C',
        texto:
          'Soluções tópicas com aminoglicosídeos estimulam a regeneração das células ciliadas da cóclea.',
      },
      {
        id: 'D',
        texto:
          'Anestésicos tópicos em gotas no conduto são indicados mesmo se a membrana estiver perfurada.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Regras fundamentais de segurança em otologia pediátrica: 1) Se a membrana timpânica estiver ÍNTEGRA: gotas otológicas com antibióticos não têm ação terapêutica, pois a barreira epitelial e conjuntiva da membrana impede a difusão da droga para o ouvido médio; 2) Se houver PERFURAÇÃO timpânica ou tubo de ventilação: gotas contendo aminoglicosídeos (neomicina, gentamicina, tobramicina) ou álcool são terminantemente CONTRAINDICADAS, pois o contato direto com a janela redonda/oval provoca lesão ototóxica cocleovestibular com surdez neurossensorial irreversível. Se houver otorreia por tubo de ventilação ou perfuração e indicação de gotas, devem-se usar exclusivamente quinolonas não ototóxicas (ciprofloxacino ou ofloxacino otológico). Gotas anestésicas em membrana perfurada também são proibidas.',
    comentariosAlternativas: {
      A: 'Incorreta. Gotas não penetram membrana íntegra.',
      B: 'Correta. Gotas não funcionam com MT íntegra e aminoglicosídeos são ototóxicos quando há perfuração.',
      C: 'Incorreta. Aminoglicosídeos causam apoptose de células ciliadas e surdez neurossensorial permanente.',
      D: 'Incorreta. Anestésicos tópicos não podem entrar em contato com o ouvido médio perfurado pelo risco de toxicidade labiríntica.',
    },
  },
  {
    id: 'ped-ivas-069',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'OMA Recorrente: Definição e Critérios Diagnósticos',
    isRevisao: false,
    enunciado:
      'Um menino de 18 meses frequenta creche desde os 6 meses e apresenta histórico documentado em prontuário de múltiplos episódios de dor de ouvido associada a febre e abaulamento da membrana timpânica, diagnosticados por pediatras e tratados adequadamente. No último prontuário, constam 4 episódios bem documentados de OMA nos últimos 12 meses (sendo o último há 2 semanas). Qual é a definição formal de Otite Média Aguda Recorrente (OMAR) segundo a SBP e a AAP?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Presença de pelo menos 1 episódio de otite em cada mês da vida.',
      },
      {
        id: 'B',
        texto:
          'Ocorrência de 3 ou mais episódios distintos de OMA em um período de 6 meses, OU 4 ou mais episódios em um período de 12 meses (com pelo menos 1 episódio recente nos últimos 6 meses).',
      },
      {
        id: 'C',
        texto:
          'Duração de um único episódio de otite por mais de 14 dias seguidos sem febre.',
      },
      {
        id: 'D',
        texto:
          'Qualquer queixa de dor de ouvido em criança portadora de rinite alérgica.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A definição padronizada de Otite Média Aguda Recorrente (OMAR) pela Sociedade Brasileira de Pediatria e Academia Americana de Pediatria requer: 1) >= 3 episódios bem documentados e distintos de OMA em um intervalo de 6 meses; OU 2) >= 4 episódios de OMA em um intervalo de 12 meses, desde que pelo menos 1 desses episódios tenha ocorrido nos últimos 6 meses. O paciente preenche esse critério formal (4 episódios em 12 meses), configurando OMA recorrente e justificando avaliação por especialista para medidas de intervenção.',
    comentariosAlternativas: {
      A: 'Incorreta. Definição arbitrária não correspondente aos consensos.',
      B: 'Correta. Critérios epidemiológicos consagrados de OMAR: >= 3 episódios em 6 meses ou >= 4 em 12 meses.',
      C: 'Incorreta. Isso caracteriza otite persistente ou refratária e não o conceito de recorrência com episódios distintos.',
      D: 'Incorreta. Queixa inespecífica sem documentação de OMA não define recorrência.',
    },
  },
  {
    id: 'ped-ivas-070',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Manejo da OMA Recorrente: Timpanostomia com Tubo de Ventilação',
    isRevisao: false,
    enunciado:
      'Para a criança do caso anterior com Otite Média Aguda Recorrente (4 episódios em 12 meses), a mãe pergunta quais opções terapêuticas estão indicadas para reduzir a frequência das crises. Em relação ao manejo da OMA recorrente e ao uso de profilaxia antimicrobiana vs inserção de tubos de ventilação timpânica (timpanostomia), assinale a recomendação atual das diretrizes de Otorrinolaringologia Pediátrica e Pediatria:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A profilaxia antibiótica diária contínua com amoxicilina por 6 a 12 meses é a conduta de primeira linha preferencial para todas as crianças.',
      },
      {
        id: 'B',
        texto:
          'A profilaxia antimicrobiana contínua prolongada NÃO é mais recomendada rotineiramente devido ao risco substancial de selecionar patógenos multirresistentes; a conduta de escolha para casos qualificados é a timpanostomia com inserção de tubos de ventilação (tubos de carretel/Shepard), que ventilam a orelha média e permitem o tratamento tópico com gotas em caso de novas infecções.',
      },
      {
        id: 'C',
        texto:
          'A inserção de tubos de ventilação é um procedimento experimental proibido pela ANVISA.',
      },
      {
        id: 'D',
        texto:
          'Deve-se proceder à ressecção cirúrgica da cóclea e do labirinto posterior.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Historicamente, utilizava-se quimioprofilaxia antimicrobiana (amoxicilina ou sulfas diárias em baixas doses) na OMA recorrente. Hoje, diretrizes da SBP, AAP e AAO-HNS desaconselham formalmente a quimioprofilaxia contínua com antibióticos orais pelo alto risco ecológico de seleção e disseminação de cepas bacterianas resistentes (pneumococos e H. influenzae) na microbiota infantil e familiar. A conduta de eleição indicada em crianças com OMA recorrente persistente é a colocação cirúrgica de Tubos de Ventilação Timpânica (tubos de Shepard/carretel): mantém a cavidade timpânica arejada contornando a disfunção tubária, reduz a frequência de novas infecções e, caso ocorra supuração, permite o tratamento com gotas tópicas de ciprofloxacino sem necessidade de antibióticos sistêmicos.',
    comentariosAlternativas: {
      A: 'Incorreta. A quimioprofilaxia foi abandonada devido à indução maciça de resistência antimicrobiana.',
      B: 'Correta. Inserção de tubo de ventilação é a conduta preferencial em OMAR com critérios preenchidos, substituindo a profilaxia antibiótica prolongada.',
      C: 'Incorreta. A timpanostomia com tubo de ventilação é um dos procedimentos cirúrgicos pediátricos mais executados e seguros no mundo.',
      D: 'Incorreta. Procedimento destrutivo absurdo que levaria à surdez neurossensorial profunda e paralisia vestibular.',
    },
  },
  {
    id: 'ped-ivas-071',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Mastoidite Aguda: Apresentação Clínica e Sinais Cardinais',
    isRevisao: false,
    enunciado:
      'Um menino de 2 anos e 8 meses em tratamento irregular de OMA há 5 dias é trazido à emergência por piora significativa do estado geral. Apresenta febre alta diária (39,4 °C), irritabilidade extrema, dor intensa na região retroauricular à direita, eritema cutâneo, edema flutuante e calor sobre o processo mastóideo, associado ao apagamento completo do sulco retroauricular e nítido desvio/anteriorização ("protrusão anterior") do pavilhão auricular ipsilateral. Qual é o diagnóstico e a principal complicação supurativa representada por este quadro?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Otite externa circunscrita por furúnculo no meato acústico externo.',
      },
      {
        id: 'B',
        texto:
          'Mastoidite Aguda, que constitui a complicação supurativa intratemporal mais comum da Otite Média Aguda.',
      },
      {
        id: 'C',
        texto:
          'Caxumba (parotidite epidêmica viral unilateral).',
      },
      {
        id: 'D',
        texto:
          'Picada de inseto retroauricular simples sem repercussão intracraniana.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Mastoidite Aguda é a complicação supurativa intratemporal mais prevalente da OMA em pediatria. As células da mastoide comunicam-se diretamente com a cavidade da orelha média através do ádito ao antro (aditus ad antrum). Quando a infecção progride para osteíte necrosante e acúmulo de secreção purulenta sob pressão nas trabéculas ósseas da mastoide, ocorre periostite e abscesso subperiosteal na região retroauricular. Os sinais cardinais patognomônicos são: dor e edema retroauricular doloroso, calor e eritema sobre a mastoide, apagamento do sulco retroauricular e anteriorização/projeção anterior e lateral do pavilhão auditivo (orelha em abano aguda).',
    comentariosAlternativas: {
      A: 'Incorreta. Furúnculo acomete o conduto auditivo cartilaginoso e não cursa com apagamento do sulco retroauricular nem desvio anterior do pavilhão por infecção óssea.',
      B: 'Correta. Sinais clínicos clássicos de mastoidite aguda: edema retroauricular com apagamento do sulco, febre alta e anteriorização da orelha.',
      C: 'Incorreta. A parotidite causa aumento à frente e abaixo do pavilhão auricular, elevando o lóbulo da orelha e não projetando a orelha para frente com apagamento do sulco retroauricular.',
      D: 'Incorreta. Picada de inseto não cursa com febre alta de 39,4 °C, OMA prévia e sinais de toxemia óssea.',
    },
  },
  {
    id: 'ped-ivas-072',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Manejo Hospitalar da Mastoidite Aguda',
    isRevisao: false,
    enunciado:
      'Diante da suspeita diagnóstica de Mastoidite Aguda na criança do caso anterior, qual é o protocolo de manejo hospitalar e propedêutica armada preconizado pelos consensos de emergência pediátrica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Prescrever amoxicilina oral ambulatorial e solicitar retorno em 7 dias.',
      },
      {
        id: 'B',
        texto:
          'Internação hospitalar obrigatória, obtenção de Tomografia Computadorizada (TC) de ossos temporais e mastoides com contraste, início imediato de antibioticoterapia intravenosa de amplo espectro (ex.: Ceftriaxona associada a Oxacilina ou Vancomicina, ou Ampicilina-sulbactam) e avaliação urgente da Otorrinolaringologia para eventual miringotomia com aspiração ou mastoidectomia.',
      },
      {
        id: 'C',
        texto:
          'Realizar apenas eletroencefalograma e liberar a criança com analgésicos.',
      },
      {
        id: 'D',
        texto:
          'Administrar vacina pneumocócica intramuscular como tratamento curativo agudo.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Mastoidite Aguda é uma urgência pediátrica que exige INTERNAÇÃO HOSPITALAR IMEDIATA. A investigação de imagem padrão-ouro é a Tomografia Computadorizada (TC) de mastoides/ossos temporais e crânio com contraste venoso para avaliar a destruição das trabéculas ósseas (mastoidite coalescente), a presença de abscesso subperiosteal e excluir complicações intracranianas ameaçadoras à vida (trombose do seio sigmoide/lateral, abscesso extradural, abscesso cerebral de lobo temporal ou cerebelar e meningite). A antibioticoterapia deve ser prontamente iniciada por via INTRAVENOSA com cobertura para pneumococo resistente, S. aureus (incluindo MRSA conforme a epidemiologia local), Streptococcus pyogenes e Pseudomonas (Ceftriaxona + Oxacilina/Vancomicina ou Ampicilina-sulbactam). A avaliação cirúrgica otorrinolaringológica para drenagem é mandatória.',
    comentariosAlternativas: {
      A: 'Incorreta. Tratamento ambulatorial oral em mastoidite é erro gravíssimo; a afecção progride rapidamente para sepse e infecção intracraniana.',
      B: 'Correta. Protocolo completo de urgência: internação, TC de mastoides contrastada, antibioticoterapia IV de amplo espectro e avaliação cirúrgica.',
      C: 'Incorreta. EEG não avalia infecção óssea supurativa do osso temporal.',
      D: 'Incorreta. Vacinas têm papel preventivo prévio, não atuando no tratamento de infecções bacterianas invasivas ativas.',
    },
  },
  {
    id: 'ped-ivas-073',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Complicações Intracranianas da OMA e Mastoidite',
    isRevisao: false,
    enunciado:
      'Um menino de 5 anos com história de dor de ouvido mal tratada há 10 dias evolui com mastoidite aguda associada a cefaleia progressiva intensa, vômitos em jato, febre em picos diários e edema de papila bilateral ao exame de fundo de olho. A ressonância magnética encefálica com venografia revela falha de enchimento compatível com trombose venosa do seio transverso e sigmoide adjacente à mastoide infectada. Qual é o mecanismo de disseminação da infecção da mastoide para os seios venosos durais?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Disseminação retrógrada direta pela artéria oftálmica.',
      },
      {
        id: 'B',
        texto:
          'Erosão óssea direta da parede posterior do antro mastóideo (tegmen tympani / placa sinusal) associada à tromboflebite retrógrada das pequenas veias emissárias mastóideas que drenam diretamente para o seio sigmoide.',
      },
      {
        id: 'C',
        texto:
          'Invasão bacteriana através da lâmina cribriforme do osso etmoide.',
      },
      {
        id: 'D',
        texto:
          'Passagem de toxinas através do ducto parotídeo de Stenon.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Trombose Séptica do Seio Lateral/Sigmoide é uma complicação intracraniana clássica da mastoidite coalescente. O osso temporal abriga o sulco do seio sigmoide intimamente ligado à parede posterior das células mastóideas. A osteíte necrosante da mastoide corrói a lâmina óssea delgada (placa sinusal) que separa o antro do seio venoso, gerando abscesso perisinusal. Concomitantemente, pequenas veias mastóideas emissárias infectadas transmitem flebite séptica diretamente para a luz do seio sigmoide, desencadeando formação de trombo séptico mural que oclui o fluxo venoso e causa hipertensão intracraniana e risco de embolização bacteriana sistêmica.',
    comentariosAlternativas: {
      A: 'Incorreta. A artéria oftálmica não drena a mastoide nem desemboca no seio sigmoide.',
      B: 'Correta. Relação anatômica contígua exata entre a mastoide, as veias emissárias e o seio sigmoide subjacente.',
      C: 'Incorreta. A lâmina cribriforme relaciona-se com o teto da cavidade nasal e o bulbo olfatório, envolvida em sinusite etmoidal complicada.',
      D: 'Incorreta. O ducto de Stenon drena a glândula parótida para a mucosa oral, sem relação com os seios venosos durais.',
    },
  },
  {
    id: 'ped-ivas-074',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Timpanocentese: Indicações Especiais na Prática Pediátrica',
    isRevisao: false,
    enunciado:
      'A timpanocentese diagnóstica (punção e aspiração de fluido da orelha média através da membrana timpânica) é um procedimento invasivo não rotineiro, mas indispensável em situações clínicas específicas de OMA. Em qual das seguintes situações a realização de timpanocentese com coleta de aspirado para cultura bacteriológica e antibiograma está FORMALMENTE indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Em todo primeiro episódio de OMA em pré-escolares saudáveis.',
      },
      {
        id: 'B',
        texto:
          'Lactente jovem gravemente toxêmico com menos de 4 a 6 semanas de vida (neonatal); paciente imunodeprimido grave com OMA; falha terapêutica persistente após múltiplos esquemas antimicrobianos de segunda linha; ou suspeita de complicação supurativa intratemporal/intracraniana iminente.',
      },
      {
        id: 'C',
        texto:
          'Em crianças com otite serosa assintomática com mais de 2 semanas de evolução.',
      },
      {
        id: 'D',
        texto:
          'Apenas se a criança for alérgica a picada de abelha.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A timpanocentese com aspiração estéril para Gram e cultura está formalmente reservada para cenários de alto risco ou necessidade imperiosa de identificação microbiológica precisa: 1) OMA no período neonatal imediato (< 4 a 6 semanas de vida), pelo risco de patógenos atípicos nosocomiais (enterobactérias gram-negativas, estreptococo do grupo B, S. aureus); 2) Pacientes com imunodeficiências primárias ou secundárias graves (risco de fungos e germes oportunistas); 3) Falha terapêutica documentada a múltiplos antibióticos (como falha a amoxicilina-clavulanato e ceftriaxona); 4) OMA associada a complicações supurativas (mastoidite, paralisia facial periférica, meningite); 5) Otalgia intratável refratária para descompressão mecânica.',
    comentariosAlternativas: {
      A: 'Incorreta. Em crianças saudáveis com o primeiro episódio de OMA o tratamento é estritamente empírico baseado nos germes comuns.',
      B: 'Correta. Indicações formais de timpanocentese diagnóstica e terapêutica em pediatria.',
      C: 'Incorreta. Otite serosa é tratada expectantemente e não exige punção timpânica precoce.',
      D: 'Incorreta. Alergia a picada de abelha não é critério para procedimento invasivo otológico.',
    },
  },
  {
    id: 'ped-ivas-075',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Caso Clínico Integrado: Algoritmo Completo de Manejo da OMA',
    isRevisao: false,
    enunciado:
      'Uma criança de 20 meses é trazida à Unidade Básica de Saúde com quadro de coriza e tosse há 3 dias, evoluindo há 24 horas com choro noturno inconsolável e febre de 39,2 °C. Ao exame: ativa quando afebril, FC = 120 bpm, FR = 28 irpm, ausculta pulmonar normal. A otoscopia revela: orelha direita com membrana timpânica moderadamente abaulada, hiperemiada intensamente, opaca e sem mobilidade; orelha esquerda com membrana timpânica translúcida, cinzenta e sem abaulamento. A mãe relata que a criança não fez uso de nenhum antimicrobiano nos últimos 6 meses, não frequenta creche e não apresenta alergias medicamentosas conhecidas. Qual é o diagnóstico, a classificação de gravidade e a conduta recomendada para este caso?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Otite Média com Efusão bilateral; prescrever apenas descongestionante tópico por 5 dias.',
      },
      {
        id: 'B',
        texto:
          'Otite Média Aguda unilateral grave (febre >= 39 °C); a conduta é iniciar antibioticoterapia imediata com Amoxicilina oral em dose alta (80 a 90 mg/kg/dia) dividida em 2 tomadas diárias por 10 dias completos, associada a analgesia com paracetamol ou ibuprofeno e reavaliação clínica em 48 a 72 horas.',
      },
      {
        id: 'C',
        texto:
          'Otite Média Aguda unilateral leve; conduta expectante sem antibióticos por 7 dias.',
      },
      {
        id: 'D',
        texto:
          'Mastoidite coalescente grave; encaminhar para mastoidectomia radical imediata sem antibióticos.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A paciente apresenta Otite Média Aguda UNILATERAL confirmada pelo abaulamento moderado, eritema e opacidade da membrana timpânica direita. Embora seja unilateral e a paciente tenha 20 meses, o quadro é classificado como GRAVE devido à febre elevada (>= 39,0 °C, no caso 39,2 °C) e otalgia com choro inconsolável. Portanto, a conduta expectante é contraindicada, sendo obrigatório o início IMEDIATO de antibioticoterapia. Como a paciente não usou antibióticos nos últimos 30 dias e não apresenta conjuntivite associada, o fármaco de primeira escolha é a Amoxicilina em dose alta (80 a 90 mg/kg/dia) por 10 dias completos (devido à idade < 2 anos), acompanhada de analgesia potente.',
    comentariosAlternativas: {
      A: 'Incorreta. Há sinais inflamatórios agudos floridos e abaulamento da MT direita, descartando OME simples.',
      B: 'Correta. Diagnóstico de OMA grave, com indicação precisa de amoxicilina em dose alta (80-90 mg/kg/dia) por 10 dias.',
      C: 'Incorreta. Febre de 39,2 °C define OMA grave, o que proíbe conduta expectante mesmo sendo unilateral.',
      D: 'Incorreta. Não há qualquer sinal de acometimento retroauricular (sem edema ou eritema na mastoide, sulco preservado), descartando mastoidite.',
    },
  },
  {
    id: 'ped-ivas-076',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Embriologia e Cronologia de Desenvolvimento dos Seios Paranasais',
    isRevisao: false,
    enunciado:
      'O conhecimento da cronologia de desenvolvimento e pneumatização dos seios paranasais é indispensável para a correta interpretação clínica e radiológica das rinossinusites na infância. Em relação à embriologia e evolução anatômica dos seios paranasais desde o período neonatal até a adolescência, assinale a correlação cronológica correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Os seios frontais já nascem completamente pneumatizados e atingem o volume adulto aos 2 anos de idade.',
      },
      {
        id: 'B',
        texto:
          'Os seios etmoidais e maxilares estão presentes e pneumatizados desde o nascimento; os seios esfenoidais iniciam sua pneumatização por volta dos 3 a 5 anos; e os seios frontais iniciam sua pneumatização somente entre os 6 e 8 anos de idade, completando seu desenvolvimento durante a adolescência.',
      },
      {
        id: 'C',
        texto:
          'Todos os quatro pares de seios paranasais (maxilares, etmoidais, esfenoidais e frontais) estão ausentes ao nascer e surgem simultaneamente na puberdade.',
      },
      {
        id: 'D',
        texto:
          'Os seios maxilares surgem apenas após a dentição permanente definitiva aos 12 anos.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A cronologia clássica do desenvolvimento dos seios paranasais na infância é: 1) Seios Etmoidais e Seios Maxilares: presentes radiologicamente e anatomicamente pneumatizados desde o NASCIMENTO (embora pequenos, o etmoide já é funcional e o maxilar cresce progressivamente acompanhando a descida dos alvéolos dentários); 2) Seios Esfenoidais: tornam-se identificáveis e iniciam pneumatização aos 3 a 5 anos de idade; 3) Seios Frontais: são os últimos a se desenvolverem; iniciam sua pneumatização a partir dos 6 a 8 anos de idade, atingindo sua configuração anatômica definitiva somente ao final da adolescência (15 a 18 anos). Portanto, um diagnóstico de "sinusite frontal" é anatomicamente impossível em um lactente de 1 ano.',
    comentariosAlternativas: {
      A: 'Incorreta. Os seios frontais não estão presentes ao nascimento e são os últimos a se pneumatizarem.',
      B: 'Correta. Cronologia precisa do desenvolvimento dos seios paranasais segundo a anatomia e diretrizes pediátricas.',
      C: 'Incorreta. Etmoides e maxilares estão presentes desde o nascimento.',
      D: 'Incorreta. Os seios maxilares existem desde o nascimento e sofrem expansão volumétrica contínua na infância.',
    },
  },
  {
    id: 'ped-ivas-077',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Fisiopatologia da Rinossinusite Aguda: Complexo Ostiomeatal',
    isRevisao: false,
    enunciado:
      'A patogênese da Rinossinusite Bacteriana Aguda envolve a transição de um insulto mucoso viral para estase e sobreinfecção bacteriana secundária nos seios da face. Qual é o evento fisiopatológico determinante que deflagra a infecção bacteriana no interior das cavidades sinusais?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Abertura permanente e hiperventilação de todos os óstios de drenagem.',
      },
      {
        id: 'B',
        texto:
          'Obstrução inflamatória mecânica dos estreitos óstios de drenagem no complexo ostiomeatal, associada à disfunção do batimento mucociliar e alteração na viscosidade do muco, promovendo pressão negativa, hipóxia sinusal, retenção de secreções e proliferação bacteriana secundária.',
      },
      {
        id: 'C',
        texto:
          'Hipertrofia isolada das glândulas salivares submandibulares com refluxo para o ducto nasolacrimal.',
      },
      {
        id: 'D',
        texto:
          'Ausência congênita de macrófagos alveolares pulmonares.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A fisiopatologia da rinossinusite aguda depende da tríade de patência do complexo ostiomeatal, função do aparelho mucociliar e qualidade da secreção mucosa. Durante uma infecção viral respiratória superior ou crise alérgica, a mucosa nasal e sinusal sofre edema e infiltração inflamatória. Isso obstrui os óstios naturais de drenagem sinusal no meato médio (complexo ostiomeatal). A oclusão do óstio gera reabsorção de oxigênio pelas paredes sinusais com pressão negativa transitória, seguida por acúmulo de secreções viscosas estagnadas, hipóxia tecidual e paralisia do batimento ciliar, criando o microambiente perfeito para a proliferação de bactérias provenientes da nasofaringe (Streptococcus pneumoniae, Haemophilus influenzae e Moraxella catarrhalis).',
    comentariosAlternativas: {
      A: 'Incorreta. Ocorre oclusão e bloqueio dos óstios de drenagem e não hiperabertura.',
      B: 'Correta. Fisiopatologia precisa: edema mucoso, obstrução do complexo ostiomeatal, disfunção ciliar, hipóxia e proliferação bacteriana por estase de secreção.',
      C: 'Incorreta. As glândulas submandibulares não possuem relação de contiguidade direta com a drenagem dos seios da face.',
      D: 'Incorreta. Macrófagos alveolares atuam no parênquima pulmonar inferior e não na mucosa dos seios paranasais.',
    },
  },
  {
    id: 'ped-ivas-078',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Critérios Diagnósticos Clínicos da AAP e SBP: Apresentação Persistente',
    isRevisao: false,
    enunciado:
      'Um menino de 5 anos é levado à consulta pediátrica pela mãe com história de tosse diurna e noturna frequente e secreção nasal contínua (inicialmente clara, atualmente espessa) que já dura 12 dias consecutivos. A mãe afirma que o quadro começou após um resfriado e "não apresentou nenhum único dia de melhora desde o início". A criança não tem febre no momento, apresenta apetite razoável e a ausculta pulmonar é normal, mas observa-se gotejamento pós-nasal purulento na parede posterior da orofaringe e conchas nasais edemaciadas. De acordo com os critérios diagnósticos estritos da AAP e da Sociedade Brasileira de Pediatria, qual é o diagnóstico e o critério clínico preenchido?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Resfriado comum viral típico; orientar apenas observação domiciliar sem nenhum tratamento por mais 30 dias.',
      },
      {
        id: 'B',
        texto:
          'Rinossinusite Bacteriana Aguda na modalidade de "Apresentação Persistente", definida por tosse (diurna e/ou noturna) ou sintomas nasais (secreção ou congestão) que duram mais de 10 dias consecutivos sem qualquer evidência de melhora clínica.',
      },
      {
        id: 'C',
        texto:
          'Coqueluche paroxística grave; indicar isolamento hospitalar em leito de pressão negativa.',
      },
      {
        id: 'D',
        texto:
          'Hipertrofia de adenoide congênita não complicada; encaminhamento cirúrgico imediato sem medicamentos.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A diretriz da Academia Americana de Pediatria (AAP), referendada pela Sociedade Brasileira de Pediatria (SBP), estabelece que o diagnóstico de Rinossinusite Aguda Bacteriana em crianças é eminentemente CLÍNICO, dispensando exames de imagem. O critério mais frequente na prática clínica é a "Apresentação Persistente": tosse (particularmente a tosse diurna, que não costuma durar tanto no resfriado banal) OU secreção nasal (de qualquer aspecto, clara ou purulenta) OU congestão nasal que persistem por MAIS DE 10 DIAS CONSECUTIVOS sem qualquer sinal de melhora clínica. Como o resfriado comum viral tem duração típica de 7 a 10 dias com melhora progressiva a partir do 3º ao 5º dia, a persistência ininterrupta por mais de 10 dias confirma o diagnóstico de sinusite bacteriana secundária.',
    comentariosAlternativas: {
      A: 'Incorreta. Sintomas contínuos sem sinal de melhora por > 10 dias ultrapassam a história natural do resfriado comum e configuram sinusite bacteriana.',
      B: 'Correta. Critério 1 da AAP/SBP (Apresentação Persistente): tosse ou sintomas nasais > 10 dias sem melhora.',
      C: 'Incorreta. A coqueluche caracteriza-se por acessos paroxísticos seguidos de guincho inspiratório e vômitos pós-tosse, com ausência de sintomas nasais purulentos contínuos.',
      D: 'Incorreta. Trata-se de quadro infeccioso bacteriano agudo pós-viral que responde à antibioticoterapia clínica.',
    },
  },
  {
    id: 'ped-ivas-079',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Critérios Diagnósticos Clínicos da AAP e SBP: Início Grave',
    isRevisao: false,
    enunciado:
      'Uma menina de 4 anos é levada ao serviço de emergência com febre alta sustentada de 39,4 °C há 4 dias consecutivos, acompanhada de prostração, cefaleia frontal e secreção nasal francamente purulenta, verde-escura e abundante em ambas as narinas desde o primeiro dia de evolução. A mãe relata que a criança não teve fase inicial branda, iniciando o quadro diretamente com toxemia e rinorreia purulenta exuberante. De acordo com os consensos pediátricos, qual modalidade de apresentação de Rinossinusite Bacteriana Aguda este caso preenche?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Apresentação de "Início Grave" (Severe Onset), definida por febre alta (>= 39,0 °C) associada a secreção nasal purulenta contínua por pelo menos 3 a 4 dias consecutivos no início da doença.',
      },
      {
        id: 'B',
        texto:
          'Resfriado comum viral com pródromos normais de infância.',
      },
      {
        id: 'C',
        texto:
          'Coriza fisiológica da primeira infância.',
      },
      {
        id: 'D',
        texto:
          'Laringite viral aguda estridulosa leve.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O segundo critério clínico aceito para o diagnóstico e tratamento imediato de Rinossinusite Aguda Bacteriana em pediatria é a apresentação de "Início Grave" (Severe Onset). É definida pela presença simultânea de febre alta (aferida >= 39,0 °C) E secreção nasal francamente purulenta (mucopurulenta espessa) contínua por pelo menos 3 a 4 dias consecutivos. Enquanto o resfriado comum viral cursa com febre que tipicamente cede em 48 a 72 horas e secreção purulenta que só surge tardiamente na fase de lise neutrofílica em criança afebril, a presença de febre alta contínua associada à purulência desde o início traduz infecção bacteriana bacteriana aguda invasiva dos seios paranasais.',
    comentariosAlternativas: {
      A: 'Correta. Critério 2 da AAP/SBP (Início Grave): febre >= 39 °C + secreção purulenta por >= 3 a 4 dias consecutivos.',
      B: 'Incorreta. Resfriado viral comum não mantém febre de 39,4 °C por 4 dias seguidos associada a secreção purulenta exuberante.',
      C: 'Incorreta. Febre alta e toxemia com secreção purulenta afastam completamente quadro fisiológico.',
      D: 'Incorreta. O quadro é nasossinusal puro, sem rouquidão, sem tosse ladrante e sem estridor.',
    },
  },
  {
    id: 'ped-ivas-080',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Critérios Clínicos: Piora Secundária ("Dupla Piora" / "Double Sickening")',
    isRevisao: false,
    enunciado:
      'Um escolar de 7 anos apresentou um resfriado comum típico, com coriza clara, febrícula e espirros nos primeiros 3 dias. A partir do 4º dia, a febre cessou, a secreção nasal reduziu bastante e a criança melhorou sensivelmente, voltando a brincar. No entanto, no 7º dia do quadro gripal, a criança subitamente volta a piorar: surge novo pico febril de 38,8 °C, a secreção nasal torna-se profusa e purulenta, a tosse diurna piora acentuadamente e surge cefaleia retro-orbitária. Qual é a denominação clínica dessa evolução e qual o seu significado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Evolução monofásica típica da gripe suína; conduta é expectante.',
      },
      {
        id: 'B',
        texto:
          'Piora Secundária ("Dupla Piora", "Double Sickening" ou "Worsening Course"), que define infecção bacteriana secundária sobreposta (Rinossinusite Bacteriana Aguda) e indica início de antibioticoterapia.',
      },
      {
        id: 'C',
        texto:
          'Crise clássica de bronquiolite obliterante com indicação de transplante pulmonar.',
      },
      {
        id: 'D',
        texto:
          'Reação psicossomática por ansiedade escolar.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O terceiro critério diagnóstico clássico da Rinossinusite Aguda Bacteriana é a "Piora Secundária" (também conhecida na literatura internacional como "Double Sickening" ou "Worsening Course"). Caracteriza-se por um paciente que apresentava uma IVAS viral típica em franca melhora clínica após os primeiros 3 a 5 dias e que, subitamente (entre o 6º e o 10º dia), apresenta piora clínica abrupta com reaparecimento da febre (ou febre mais alta), aumento significativo da secreção nasal, piora acentuada da tosse ou surgimento de cefaleia/dor facial. Esse padrão bifásico indica que uma sobreinfecção bacteriana secundária se estabeleceu sobre a mucosa previamente lesada pelo vírus.',
    comentariosAlternativas: {
      A: 'Incorreta. Não é evolução monofásica, mas sim um curso bifásico clássico de complicação bacteriana secundária.',
      B: 'Correta. Critério 3 da AAP/SBP: piora secundária ("dupla piora") caracterizando rinossinusite bacteriana aguda.',
      C: 'Incorreta. Bronquiolite obliterante é sequela pulmonar crônica grave pós-adenovírus com sibilos fixos e hipoxemia, sem relação com o caso.',
      D: 'Incorreta. Piora orgânica com febre e secreção purulenta não decorre de estresse psicológico.',
    },
  },
  {
    id: 'ped-ivas-081',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Inadequação e Desaconselhamento da Radiografia Simples de Seios da Face',
    isRevisao: false,
    enunciado:
      'Uma criança de 4 anos preenche critérios clínicos para o diagnóstico de Rinossinusite Bacteriana Aguda (sintomas nasais e tosse persistentes há 14 dias sem melhora). O médico plantonista solicita radiografias simples dos seios da face nas incidências de Waters (mento-naso) e Caldwell (fronto-naso) antes de iniciar qualquer conduta. De acordo com as diretrizes da AAP, Sociedade Brasileira de Pediatria e Colégio Americano de Radiologia, por que a solicitação de radiografia simples de seios paranasais é FORMALMENTE DESACONSELHADA na prática pediátrica ambulatorial?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A radiografia simples é desaconselhada porque possui alto índice de resultados falso-positivos e falso-negativos: até 50% a 70% das crianças com resfriado comum viral banal apresentam opacificação ou espessamento mucoso sinusal no raio-x sem ter sinusite bacteriana; além disso, a técnica de posicionamento é difícil no pré-escolar e alguns seios ainda não estão formados, não alterando a decisão terapêutica e expondo a criança à radiação desnecessária.',
      },
      {
        id: 'B',
        texto:
          'A radiografia simples induz mutações genéticas letais imediatas em 100% dos exames em crianças.',
      },
      {
        id: 'C',
        texto:
          'A radiografia só pode ser feita com a criança sob anestesia geral em sala cirúrgica.',
      },
      {
        id: 'D',
        texto:
          'O raio-x de seios da face é o padrão-ouro de escolha obrigatório e foi proibido unicamente por razões orçamentárias hospitalares.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A radiografia simples de seios paranasais NÃO deve ser solicitada de rotina na investigação de rinossinusite em crianças. Estudos pioneiros com ressonância e tomografia demonstraram que alterações radiológicas como espessamento mucoso > 4 mm, nível hidroaéreo ou opacificação completa ocorrem em até 70% a 80% das crianças com um simples resfriado comum viral autolimitado. Além disso, em crianças pequenas, a interpretação radiológica é limitada pela hipoplasia fisiológica dos seios paranasais (frontais ausentes, maxilares pequenos) e pela dificuldade de posicionamento anatômico no choro. Portanto, o diagnóstico é puramente clínico e a radiografia expõe a criança à radiação ionizante sem agregar acurácia diagnóstica.',
    comentariosAlternativas: {
      A: 'Correta. Falta de acurácia, alta taxa de falso-positivos no resfriado banal e exposição inútil à radiação justificam a contraindicação de rotina.',
      B: 'Incorreta. Radiação de um raio-x craniano não causa mutações letais imediatas.',
      C: 'Incorreta. Radiografias simples são ambulatoriais e não requerem anestesia geral.',
      D: 'Incorreta. A radiografia não é padrão-ouro (o padrão-ouro anatômico de imagem é a TC) e a recomendação baseia-se em evidência científica e segurança do paciente.',
    },
  },
  {
    id: 'ped-ivas-082',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Indicações Precisas de Tomografia Computadorizada (TC) de Seios da Face',
    isRevisao: false,
    enunciado:
      'Embora os exames de imagem estejam contraindicados na avaliação inicial da rinossinusite não complicada, há situações clínicas de alarme em que a Tomografia Computadorizada (TC) de seios paranasais e órbitas com contraste venoso é mandatória. Em qual das seguintes situações a realização de TC urgente está formalmente indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Criança de 3 anos no 11º dia de coriza hialina e tosse leve, afebril e em excelente estado geral.',
      },
      {
        id: 'B',
        texto:
          'Presença de sinais de alarme sugerindo complicações orbitárias ou intracranianas (como proptose ocular, oftalmoplegia com dor à movimentação ocular, quemose, edema periorbitário grave com alteração de acuidade visual, cefaleia refratária com vômitos em jato ou sinais meníngeos/neurológicos focais).',
      },
      {
        id: 'C',
        texto:
          'Criança com espirros frequentes e prurido nasal matinal.',
      },
      {
        id: 'D',
        texto:
          'Lactente que começou a frequentar creche há 1 semana.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Tomografia Computadorizada (TC) de seios paranasais e crânio/órbitas com contraste iodado intravenoso deve ser reservada EXCLUSIVAMENTE para situações de suspeita de complicações supurativas orbitárias ou intracranianas. As indicações precisas incluem: 1) Sinais de complicação orbitária (proptose/exoftalmia, limitação da motilidade extraocular/oftalmoplegia, dor intensa à movimentação dos olhos, quemose, redução da acuidade visual ou midríase/anormalidade pupilar); 2) Sinais de complicação intracraniana (cefaleia grave e progressiva, letargia, irritabilidade extrema, convulsões, sinais neurológicos focais, rigidez de nuca ou sinais de hipertensão intracraniana como vômitos em jato e papiledema); 3) Pacientes gravemente toxêmicos ou imunodeprimidos com rinossinusite invasiva.',
    comentariosAlternativas: {
      A: 'Incorreta. Este é um quadro persistente leve e típico para manejo clínico oral ambulatorial sem imagem.',
      B: 'Correta. Presença de sinais de alarme para extensão orbitária ou intracraniana justifica TC de urgência.',
      C: 'Incorreta. Quadro clássico de rinite alérgica sazonal.',
      D: 'Incorreta. Não há qualquer indicação de imagem para crianças em adaptação escolar.',
    },
  },
  {
    id: 'ped-ivas-083',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Tratamento Antimicrobiano de Primeira Linha da Rinossinusite Aguda',
    isRevisao: false,
    enunciado:
      'Um menino de 6 anos, pesando 20 kg, recebe diagnóstico clínico de Rinossinusite Bacteriana Aguda na apresentação persistente (tosse e congestão purulenta há 13 dias sem melhora). Não há história de uso recente de antibióticos nos últimos 3 meses, a criança frequenta escola e não tem comorbidades ou alergias. Qual é a terapêutica farmacológica de primeira linha e a respectiva posologia preconizada pelas diretrizes pediátricas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Amoxicilina oral na dose alta de 80 a 90 mg/kg/dia, dividida em 2 tomadas diárias a cada 12 horas, acompanhada de irrigação nasal abundante com soro fisiológico a 0,9%.',
      },
      {
        id: 'B',
        texto:
          'Azitromicina oral na dose de 5 mg/kg/dia em tomada única a cada 7 dias por 1 mês.',
      },
      {
        id: 'C',
        texto:
          'Ciprofloxacino oral associado a spray nasal de nafazolina contínuo.',
      },
      {
        id: 'D',
        texto:
          'Prednisona oral em dose imunossupressora isolada sem antibiótico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Amoxicilina oral em DOSE ALTA (80 a 90 mg/kg/dia, dividida em 2 tomadas a cada 12 horas ou 3 tomadas a cada 8 horas, dose máxima de 2 g/dia) é o antimicrobiano de primeira escolha para a Rinossinusite Bacteriana Aguda não complicada em crianças sem fatores de risco para germes resistentes (sem uso recente de antibióticos e sem frequência a creche com alta prevalência de beta-lactamase). A dose alta supera o mecanismo de resistência por alteração de PBPs do Streptococcus pneumoniae. Como terapia adjuvante indispensável, a lavagem e irrigação mecânica da cavidade nasal com solução salina a 0,9% (soro fisiológico) remove o excesso de muco purulento estagnado e restaura a depuração mucociliar dos óstios de drenagem.',
    comentariosAlternativas: {
      A: 'Correta. Amoxicilina oral em dose alta (80 a 90 mg/kg/dia) associada a lavagem nasal com soro fisiológico 0,9% é a primeira escolha.',
      B: 'Incorreta. Azitromicina possui posologia errônea e elevadas taxas de resistência em pneumococos na comunidade.',
      C: 'Incorreta. Quinolonas não são drogas de primeira linha em crianças e nafazolina é contraindicada pelo risco de toxicidade e rinite medicamentosa.',
      D: 'Incorreta. Corticoide isolado sem antibiótico não trata a infecção bacteriana supurativa dos seios paranasais.',
    },
  },
  {
    id: 'ped-ivas-084',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Indicações de Amoxicilina-Clavulanato na Rinossinusite Aguda',
    isRevisao: false,
    enunciado:
      'Em qual dos seguintes cenários clínicos de Rinossinusite Bacteriana Aguda na infância a utilização inicial de Amoxicilina com Clavulanato de potássio (na proporção 14:1, com 90 mg/kg/dia do componente amoxicilina) é FORMALMENTE recomendada em substituição à amoxicilina isolada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Criança com quadro leve persistente que nunca utilizou antibióticos na vida e não frequenta creche.',
      },
      {
        id: 'B',
        texto:
          'Crianças com apresentação de início grave (febre >= 39 °C com secreção purulenta por >= 3-4 dias); crianças que utilizaram antibiótico beta-lactâmico no último mês (< 30 dias); frequência a creches com alta taxa de circulação de Haemophilus influenzae produtor de beta-lactamase; ou menores de 2 anos com doença moderada a grave.',
      },
      {
        id: 'C',
        texto:
          'Criança assintomática com raio-x de seios da face alterado.',
      },
      {
        id: 'D',
        texto:
          'Apenas na presença de epistaxe anterior traumática autolimitada.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'As diretrizes da AAP e da Sociedade Brasileira de Pediatria preconizam o uso de Amoxicilina-Clavulanato (proporção de alta dose 14:1) como escolha inicial de primeira linha nas seguintes situações de maior risco de patógenos resistentes ou produtores de beta-lactamase: 1) Apresentação de "Início Grave" (febre >= 39 °C com secreção purulenta contínua); 2) Uso de antimicrobianos nos últimos 30 dias; 3) Crianças que frequentam creche (onde a colonização por H. influenzae não tipável produtor de beta-lactamase e Moraxella atinge mais de 50%); 4) Menores de 2 anos de idade com sintomas proeminentes; 5) Pacientes não vacinados contra pneumococo; 6) Falha de melhora após 48 a 72 horas de amoxicilina pura.',
    comentariosAlternativas: {
      A: 'Incorreta. Este cenário enquadra-se no paciente padrão elegível para amoxicilina pura em alta dose.',
      B: 'Correta. Indicações consagradas de amoxicilina-clavulanato como primeira linha na rinossinusite aguda.',
      C: 'Incorreta. Crianças assintomáticas não devem ser tratadas com antibióticos independentemente de exames de imagem.',
      D: 'Incorreta. Epistaxe autolimitada não é critério para escalonamento de antimicrobiano.',
    },
  },
  {
    id: 'ped-ivas-085',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Duração do Tratamento Antimicrobiano na Rinossinusite Aguda',
    isRevisao: false,
    enunciado:
      'A mãe de uma menina de 5 anos em tratamento de rinossinusite bacteriana aguda com amoxicilina em dose alta nota que a criança já não apresenta mais secreção nasal nem tosse no 5º dia de uso da medicação. Ela liga para o consultório perguntando se já pode interromper o antibiótico. Qual é a recomendação correta da AAP e da SBP quanto à duração do tratamento antibiótico da rinossinusite em pediatria?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Pode suspender imediatamente no 5º dia, pois o desaparecimento dos sintomas garante a esterilização completa da cavidade sinusal.',
      },
      {
        id: 'B',
        texto:
          'O tratamento com antibiótico na rinossinusite aguda em pediatria deve ter duração padrão de 10 a 14 dias completos, ou a regra prática de manter o antibiótico por mais 7 dias após o desaparecimento completo de todos os sintomas respiratórios.',
      },
      {
        id: 'C',
        texto:
          'O tratamento deve ser estendido compulsoriamente por 60 dias ininterruptos.',
      },
      {
        id: 'D',
        texto:
          'A medicação oral deve ser substituída por lavagem nasal com álcool 70%.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Ao contrário de infecções da orofaringe, os seios paranasais possuem vascularização mucosal relativamente delgada sobre o periósteo ósseo e óstios estreitos propensos à recidiva rápida se a flora bacteriana não for completamente erradicada. A recomendação da AAP e da SBP é que o curso antimicrobiano na rinossinusite bacteriana aguda dure entre 10 e 14 dias completos, ou uma regra amplamente aceita de: "manter a terapia antimicrobiana até que o paciente esteja assintomático por 7 dias consecutivos" (o que tipicamente totaliza de 10 a 14 dias). A suspensão precoce no 5º dia está associada a altas taxas de recaída clínica imediata.',
    comentariosAlternativas: {
      A: 'Incorreta. A interrupção precoce no 5º dia provoca recidiva bacteriana por falha de erradicação na mucosa sinusal profunda.',
      B: 'Correta. Duração recomendada: 10 a 14 dias ou manutenção por mais 7 dias após o desaparecimento completo dos sintomas.',
      C: 'Incorreta. 60 dias é duração excessiva, restrita a sinusites fúngicas invasivas ou osteomielites cranianas crônicas.',
      D: 'Incorreta. Álcool na mucosa nasal é extremamente tóxico e contraindicado.',
    },
  },
  {
    id: 'ped-ivas-086',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Anatomia da Órbita e Lâmina Papirácea do Etmoide',
    isRevisao: false,
    enunciado:
      'As complicações orbitárias são as complicações supurativas mais frequentes da rinossinusite na infância (respondendo por mais de 75% a 80% de todas as complicações sinusais). Qual é o detalhe anatômico de extrema relevância no esqueleto craniofacial da criança que explica a facilidade com que as infecções do labirinto etmoidal se propagam para o interior da cavidade orbitária?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A presença de um canal arterial de alto calibre unindo a carótida interna diretamente ao globo ocular.',
      },
      {
        id: 'B',
        texto:
          'A parede medial da órbita é constituída pela lâmina papirácea do osso etmoide, uma lâmina óssea extremamente delgada ("fina como papel") que frequentemente apresenta deiscências congênitas naturais e é atravessada por forames vasculares e veias sem válvulas que drenam diretamente para o plexo oftálmico orbitário.',
      },
      {
        id: 'C',
        texto:
          'A ausência completa de tecido adiposo no interior do cone muscular orbitário.',
      },
      {
        id: 'D',
        texto:
          'A comunicação aberta direta entre a câmara anterior do olho e a nasofaringe.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A anatomia do teto e da parede medial da órbita explica a íntima relação patológica entre sinusite e celulite orbitária. O labirinto etmoidal separa-se do conteúdo orbitário apenas pela Lâmina Papirácea (lamina papyracea) do osso etmoide. Essa estrutura óssea é extremamente delgada (translúcida, "papirácea") e, em crianças pequenas, é ainda mais tênue e frequentemente apresenta deiscências anatômicas congênitas normais. Além disso, as veias etmoidais anteriores e posteriores e as veias oftálmicas são desprovidas de válvulas funcionais, permitindo a propagação retrógrada e direta de tromboflebite séptica e bactérias do etmoide para o espaço subperiosteal e retrobulbar da órbita.',
    comentariosAlternativas: {
      A: 'Incorreta. A disseminação não decorre de anomalia arterial de grande calibre, mas da fragilidade da lâmina óssea e drenagem venosa sem válvulas.',
      B: 'Correta. A lâmina papirácea do osso etmoide é extremamente delgada e permite fácil contiguidade infecciosa entre o seio etmoidal e a órbita.',
      C: 'Incorreta. A gordura orbitária extraconal e intraconal está presente e é suscetível à celulite e supuração bacteriana.',
      D: 'Incorreta. A câmara anterior do olho é hermeticamente isolada e não se comunica com a nasofaringe.',
    },
  },
  {
    id: 'ped-ivas-087',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Estrutura Anatômica do Septo Orbitário e Classificação de Chandler',
    isRevisao: false,
    enunciado:
      'Na avaliação das infecções oculares e perioculares secundárias à rinossinusite, o "Septo Orbitário" é o marco anatômico decisivo que separa as infecções pré-septais (periorbitárias) das infecções pós-septais (orbitárias verdadeiras). Qual é a definição anatômica e histológica do septo orbitário?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Uma lâmina cartilaginosa que divide a cavidade nasal em duas fossas simétricas.',
      },
      {
        id: 'B',
        texto:
          'Uma extensão fibrosa membranosa delgada derivada do periósteo das margens orbitárias (periórbita) que se projeta em direção às pálpebras, fundindo-se às placas tarsais superior e inferior, funcionando como uma barreira física que impede a passagem de infecções superficiais palpebrais para o cone orbitário posterior.',
      },
      {
        id: 'C',
        texto:
          'O músculo que traciona o globo ocular em direção medial inervado pelo nervo abducente.',
      },
      {
        id: 'D',
        texto:
          'A bainha meníngea que envolve o nervo óptico a partir do quiasma óptico.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O Septo Orbitário (orbital septum) é uma fáscia de tecido conjuntivo fibroso denso que se origina do periósteo que reveste a borda óssea da órbita (arco marginal da periórbita) e se estende para o interior das pálpebras superior e inferior, onde se fixa nas placas tarsais. Ele atua como um diafragma e uma barreira anatômica formidável: tudo o que está anterior a ele (pele da pálpebra e tecido celular subcutâneo superficial) é classificado como espaço PRÉ-SEPTAL; tudo o que está posterior a ele (músculos extraoculares, gordura orbitária, nervo óptico, vasos oftálmicos e o globo ocular) constitui a cavidade PÓS-SEPTAL ou órbita verdadeira.',
    comentariosAlternativas: {
      A: 'Incorreta. Este é o septo nasal cartilaginoso.',
      B: 'Correta. Definição anatômica precisa do septo orbitário como barreira fascial entre a pálpebra e a cavidade orbitária profunda.',
      C: 'Incorreta. Este é o músculo reto medial (inervado pelo nervo oculomotor).',
      D: 'Incorreta. A bainha do nervo óptico é um prolongamento da dura-máter e aracnoide e não o septo orbitário palpebral.',
    },
  },
  {
    id: 'ped-ivas-088',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Celulite Pré-septal (Periorbitária): Quadro Clínico Típico',
    isRevisao: false,
    enunciado:
      'Um menino de 3 anos é trazido pela mãe com edema importante e eritema em pálpebra superior e inferior do olho esquerdo, além de febre baixa (38,1 °C) há 24 horas, após 6 dias de resfriado comum. A mãe refere que a criança "mal consegue abrir o olho esquerdo pelo inchaço". Ao exame detalhado pelo pediatra com auxílio do oftalmoscópio: a pálpebra esquerda está edemaciada, quente e avermelhada, porém, ao entreabrir as pálpebras, observa-se que a acuidade visual está preservada, a motilidade ocular extrínseca é ampla, simétrica e TOTALMENTE INDOLOR em todas as direções do olhar, os reflexos pupilares fotomotores direto e consensual são normais e NÃO há proptose ocular (globos oculares simétricos) nem quemose conjuntival. Qual é o diagnóstico?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Celulite Pré-septal (Periorbitária).',
      },
      {
        id: 'B',
        texto:
          'Celulite Pós-septal (Orbitária verdadeira com abscesso retrobulbar).',
      },
      {
        id: 'C',
        texto:
          'Trombose do seio cavernoso fulminante.',
      },
      {
        id: 'D',
        texto:
          'Retinoblastoma bilateral metastático.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O caso descreve a apresentação típica da Celulite Pré-septal (Periorbitária). Como o processo infeccioso e inflamatório está circunscrito aos tecidos moles da pálpebra ANTERIORES ao septo orbitário, os sinais clínicos vitais do globo ocular e do cone muscular estão rigorosamente normais: 1) Motilidade ocular extrínseca completamente normal e indolor (não há acometimento dos músculos retos ou oblíquos); 2) Ausência de proptose (o globo ocular não está deslocado para frente); 3) Ausência de quemose conjuntival importante; 4) Acuidade visual e reflexos pupilares (nervo óptico) preservados. O edema palpebral pode ser exuberante e dificultar a abertura ocular mecânica, mas a função intrínseca do olho está intacta.',
    comentariosAlternativas: {
      A: 'Correta. Ausência de proptose, ausência de dor à movimentação e motilidade ocular preservada definem celulite pré-septal.',
      B: 'Incorreta. Na celulite pós-septal há dor à movimentação dos olhos, limitação dos movimentos oculares e proptose.',
      C: 'Incorreta. Trombose do seio cavernoso cursa com toxemia grave, paralisia de múltiplos pares cranianos (III, IV, V1, V2, VI) e edema em ambos os olhos.',
      D: 'Incorreta. Retinoblastoma manifesta-se tipicamente por leucocoria ("reflexo do olho de gato") e estrabismo, sem inflamação palpebral febril aguda pós-resfriado.',
    },
  },
  {
    id: 'ped-ivas-089',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Manejo e Tratamento da Celulite Pré-septal Não Complicada',
    isRevisao: false,
    enunciado:
      'Para a criança do caso anterior (3 anos de idade, bom estado geral, afebril no momento da consulta, com celulite pré-septal leve a moderada secundária a IVAS, sem envolvimento orbitário e com família confiável), qual é a conduta terapêutica recomendada pela Sociedade Brasileira de Pediatria?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Enucleação cirúrgica do globo ocular esquerdo de urgência.',
      },
      {
        id: 'B',
        texto:
          'Tratamento ambulatorial por via oral com Amoxicilina-Clavulanato (ou Cefuroxima axetil) associado a compressas mornas locais, orientação estrita sobre sinais de alarme e retorno obrigatório para reavaliação clínica presencial em 24 a 48 horas.',
      },
      {
        id: 'C',
        texto:
          'Prescrição de colírio lubrificante artificial sem antibióticos com alta definitiva.',
      },
      {
        id: 'D',
        texto:
          'Punção aspirativa da câmara vítrea do olho em consultório.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Celulite Pré-septal em crianças com mais de 1 a 2 anos de idade, sem toxemia sistêmica, sem sinais de acometimento pós-septal e com família confiável pode ser conduzida em regime AMBULATORIAL. O tratamento consiste em antibioticoterapia oral com cobertura para Streptococcus pneumoniae, Staphylococcus aureus e Haemophilus influenzae: Amoxicilina-Clavulanato oral em dose alta (90 mg/kg/dia de amoxicilina) ou cefalosporina de 2ª geração (Cefuroxima axetil) por 10 a 14 dias. É mandatório o retorno presencial para reavaliação em 24 a 48 horas (ou antes, se surgirem sinais de alarme orbitário, febre alta persistente ou piora do edema). Lactentes < 1 ano, toxêmicos ou sem melhora oral devem ser internados para antibiótico parenteral.',
    comentariosAlternativas: {
      A: 'Incorreta. Conduta cirúrgica mutiladora completamente estapafúrdia.',
      B: 'Correta. Tratamento ambulatorial seguro com amoxicilina-clavulanato oral e reavaliação médica estrita em 24-48 horas.',
      C: 'Incorreta. A celulite pré-septal é uma infecção bacteriana do subcutâneo palpebral que exige antibioticoterapia sistêmica.',
      D: 'Incorreta. Procedimento oftálmico invasivo reservado para endoftalmite bacteriana intraocular.',
    },
  },
  {
    id: 'ped-ivas-090',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Celulite Pós-septal (Orbitária Verdadeira): Sinais Cardinais de Alerta',
    isRevisao: false,
    enunciado:
      'Uma menina de 7 anos é trazida à emergência médica com quadro de febre alta de 39,6 °C, toxemia e dor facial intensa à direita após episódio de rinossinusite bacteriana aguda. Ao exame físico oftalmológico e pediátrico, qual dos seguintes conjuntos de achados clínicos confirma inequivocamente o diagnóstico de Celulite Pós-septal (Orbitária) e a diferencia da celulite pré-septal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Apenas edema na pele palpebral superior sem calor local.',
      },
      {
        id: 'B',
        texto:
          'Presença de PROPTOSE (protrusão do globo ocular para frente), OFTALMOPLEGIA (limitação ou paralisia dos movimentos oculares extrínsecos) com dor intensa ao tentar movimentar os olhos, QUEMOSE conjuntival exuberante e/ou REDUÇÃO DA ACUIDADE VISUAL com defeito pupilar aferente relativo.',
      },
      {
        id: 'C',
        texto:
          'Secreção ocular fluida hialina com reflexo vermelho presente e simétrico.',
      },
      {
        id: 'D',
        texto:
          'Presença isolada de espirros e coriza clara sem febre.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Os sinais patognomônicos que indicam envolvimento do espaço PÓS-SEPTAL (cavidade orbitária verdadeira) e configuram emergência oftalmológica e pediátrica são: 1) Proptose / Exoftalmia: o aumento de volume por inflamação e pus atrás do septo empurra o globo ocular para frente; 2) Oftalmoplegia e dor à motilidade ocular: a infiltração dos músculos retos e oblíquos (ou aprisionamento mecânico) limita ou paralisa o olhar e provoca dor excruciante à tentativa de movimentação; 3) Quemose conjuntival acentuada: edema conjuntival em bolsa de água por compressão do retorno venoso oftálmico; 4) Redução da acuidade visual e defeito pupilar aferente (pupila de Marcus Gunn): indicam sofrimento isquêmico do nervo óptico por compressão compartimental.',
    comentariosAlternativas: {
      A: 'Incorreta. Edema palpebral isolado ocorre na celulite pré-septal simples.',
      B: 'Correta. Tríade cardinal de acometimento pós-septal: proptose + oftalmoplegia dolorosa + quemose / déficit visual.',
      C: 'Incorreta. Conjuntivite viral simples ou alergia sem sinais pós-septais.',
      D: 'Incorreta. Sintomas nasais alérgicos/virais banais sem repercussão orbitária.',
    },
  },
  {
    id: 'ped-ivas-091',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Classificação de Chandler para Complicações Orbitárias da Rinossinusite',
    isRevisao: false,
    enunciado:
      'A Classificação de Chandler (1970) é o sistema de estratificação cirúrgica e prognóstica universalmente adotado para descrever a progressão das complicações orbitárias decorrentes da rinossinusite aguda. Correlacione corretamente os 5 estágios de Chandler com sua respectiva definição anátomo-clínica:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Estágio I: Celulite Pré-septal; Estágio II: Celulite Orbitária pós-septal (sem abscesso); Estágio III: Abscesso Subperiosteal (coleção purulenta entre a lâmina papirácea e a periórbita); Estágio IV: Abscesso Orbitário (coleção purulenta dentro da gordura orbitária pós-septal); Estágio V: Trombose do Seio Cavernoso.',
      },
      {
        id: 'B',
        texto:
          'Estágio I: Morte encefálica; Estágio II: Cura espontânea sem antibiótico; Estágio III: Surdez neurossensorial; Estágio IV: Rinite vasomotora; Estágio V: Celulite superficial.',
      },
      {
        id: 'C',
        texto:
          'Estágio I: Abscesso subperiosteal; Estágio II: Trombose carotídea; Estágio III: Glaucoma de ângulo fechado; Estágio IV: Catarata congênita; Estágio V: Miopia axial.',
      },
      {
        id: 'D',
        texto:
          'A Classificação de Chandler aplica-se unicamente a pacientes adultos submetidos a cirurgia de estrabismo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Classificação de Chandler estratifica as complicações orbitárias em 5 estágios sequenciais de gravidade anatômica crescente: Grupo I: Celulite Pré-septal (inflamação restrita à pálpebra anterior ao septo); Grupo II: Celulite Orbitária (infiltração inflamatória difusa dos tecidos moles pós-septais, sem formação de abscesso circunscrito); Grupo III: Abscesso Subperiosteal (coleção de pus acumulada entre a parede óssea da lâmina papirácea e a periórbita/periósteo orbitário, tipicamente na parede medial); Grupo IV: Abscesso Orbitário (coleção purulenta bem delimitada dentro dos tecidos moles do cone orbitário posterior); Grupo V: Trombose Séptica do Seio Cavernoso (extensão da tromboflebite retrógrada para a base do crânio, acometendo o seio cavernoso contralateral).',
    comentariosAlternativas: {
      A: 'Correta. Sequência exata e oficial dos 5 estágios de Chandler (I a V).',
      B: 'Incorreta. Definições incorretas e sem nexo anatômico.',
      C: 'Incorreta. Chandler não classifica afecções oftalmológicas refrativas ou glaucoma.',
      D: 'Incorreta. Chandler é o paradigma internacional mais cobrado em provas de pediatria e otorrinolaringologia para sinusite complicada.',
    },
  },
  {
    id: 'ped-ivas-092',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Manejo de Emergência da Celulite Orbitária Pós-septal (Grupo II de Chandler)',
    isRevisao: false,
    enunciado:
      'Uma criança de 6 anos com sinusite etmoidal desenvolve proptose moderada à direita, dor à movimentação ocular e febre de 39,2 °C. A TC contrastada de crânio e órbitas confirma celulite pós-septal sem formação de coleções ou abscessos (Chandler II). De acordo com os protocolos pediátricos de terapia intensiva e infectologia, qual é o protocolo terapêutico de internação indicado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Alta domiciliar imediata com amoxicilina oral em dose habitual.',
      },
      {
        id: 'B',
        texto:
          'Internação hospitalar obrigatória, início imediato de antibioticoterapia intravenosa de amplo espectro com excelente penetração tecidual e no SNC (como Ceftriaxona associada a Oxacilina ou Vancomicina, ou Ampicilina-sulbactam), lavagem nasal contínua, analgesia, avaliação oftalmológica diária seriada da acuidade visual e reflexos pupilares.',
      },
      {
        id: 'C',
        texto:
          'Tratamento exclusivo com inalação de vapor de eucalipto.',
      },
      {
        id: 'D',
        texto:
          'Aplicação de bolsa de gelo no olho sem uso de antimicrobianos.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Toda suspeita ou confirmação de Celulite Pós-septal (Orbitária) exige INTERNAÇÃO HOSPITALAR IMEDIATA. O risco iminente de perda visual definitiva por isquemia do nervo óptico (síndrome compartimental da órbita) e extensão intracraniana para o seio cavernoso ou meninges impõe antibioticoterapia INTRAVENOSA precoce e vigorosa. Os esquemas de escolha devem cobrir Streptococcus pneumoniae resistente, Staphylococcus aureus (inclusive MRSA de acordo com a prevalência hospitalar/comunitária), Streptococcus pyogenes e anaeróbios orais: Ceftriaxona IV associada a Oxacilina (ou Vancomicina se risco de MRSA), ou Ampicilina-sulbactam IV. Acompanhamento rigoroso da acuidade visual e motilidade a cada poucas horas por oftalmologista é mandatório.',
    comentariosAlternativas: {
      A: 'Incorreta. Tratamento domiciliar oral em celulite pós-septal é imperícia médica grave pelo risco iminente de amaurose permanente e meningite.',
      B: 'Correta. Protocolo padrão: internação imediata, antibioticoterapia IV empírica de amplo espectro e monitoramento oftalmológico intensivo.',
      C: 'Incorreta. Inalações caseiras são inócuas contra infecção bacteriana supurativa profunda da órbita.',
      D: 'Incorreta. Gelo não erradica infecção bacteriana invasiva.',
    },
  },
  {
    id: 'ped-ivas-093',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Abscesso Subperiosteal da Órbita (Grupo III de Chandler): Indicações Cirúrgicas',
    isRevisao: false,
    enunciado:
      'Um menino de 8 anos internado com celulite orbitária não apresenta melhora clínica após 48 horas de antibioticoterapia intravenosa com ceftriaxona e oxacilina. A reavaliação oftalmológica detecta piora da proptose, surgimento de oftalmoplegia completa e início de queda da acuidade visual à direita. A TC de órbitas com contraste evidencia volumosa coleção líquida com captação anelar periférica na parede orbitária medial deslocando a lâmina papirácea e o músculo reto medial (Abscesso Subperiosteal - Chandler III). Qual é a conduta terapêutica urgente indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Aguardar mais 14 dias de antibiótico venoso para que o pus seja absorvido espontaneamente pela linfa orbitária.',
      },
      {
        id: 'B',
        texto:
          'Indicação formal de drenagem cirúrgica urgente do abscesso subperiosteal (por via endoscópica endonasal ou abordagem externa Lynch/transcaruncular) associada à descompressão da órbita e etmoidectomia, mantendo a antibioticoterapia intravenosa.',
      },
      {
        id: 'C',
        texto:
          'Suspender a antibioticoterapia e iniciar homeopatia.',
      },
      {
        id: 'D',
        texto:
          'Realizar apenas punção lombar e liberar para o domicílio.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O Abscesso Subperiosteal volumoso, especialmente quando cursa com refratariedade à antibioticoterapia venosa após 24 a 48 horas, queda da acuidade visual, oftalmoplegia progressiva ou proptose acentuada em crianças maiores de 9 anos (ou com coleção > 0,5 a 1 mL em qualquer idade), constitui indicação formal de INTERVENÇÃO CIRÚRGICA URGENTE. A drenagem é realizada pela equipe de Otorrinolaringologia e/ou Oftalmologia, preferencialmente por cirurgia endoscópica endonasal (etmoidectomia anterior/posterior com abertura da lâmina papirácea e drenagem da coleção) ou via externa Lynch/transcaruncular, visando descomprimir imediatamente a periórbita e o nervo óptico e evitar cegueira definitiva.',
    comentariosAlternativas: {
      A: 'Incorreta. Aguardar semanas perante piora visual causará atrofia óptica isquêmica irreversível.',
      B: 'Correta. Drenagem cirúrgica urgente por descompressão endoscópica ou externa associada a antibióticos venosos contínuos.',
      C: 'Incorreta. Postura inaceitável perante urgência cirúrgica ameaçadora à visão.',
      D: 'Incorreta. A punção lombar não drena o abscesso orbitário compressivo.',
    },
  },
  {
    id: 'ped-ivas-094',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Trombose Séptica do Seio Cavernoso (Grupo V de Chandler)',
    isRevisao: false,
    enunciado:
      'Uma adolescente de 13 anos com sinusite esfenoidal e etmoidal grave não tratada evolui com prostração profunda, febre de 40 °C com calafrios, cefaleia frontal excruciante, proptose ocular bilateral, quemose hemorrágica e paralisia completa dos nervos cranianos III (oculomotor), IV (troclear) e VI (abducente), além de anestesia na fronte e dorso nasal (distribuição do ramo oftálmico V1 e maxilar V2 do nervo trigêmeo). A ressonância magnética com angiorressonância revela ausência de fluxo e repleção no seio cavernoso. Qual é a complicação neurovascular de extrema gravidade caracterizada por esse quadro?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trombose Séptica do Seio Cavernoso (Chandler Estágio V).',
      },
      {
        id: 'B',
        texto:
          'Migrânea hemiplégica familiar simples.',
      },
      {
        id: 'C',
        texto:
          'Neuropatia óptica isquêmica não arterítica do idoso.',
      },
      {
        id: 'D',
        texto:
          'Hemorragia subaracnoidea por rotura de aneurisma da artéria cerebral média sem infecção.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Trombose Séptica do Seio Cavernoso (Estágio V de Chandler) é a complicação sinusal mais temida e potencialmente letal (mortalidade de até 20% a 30% e sequelas em 50%). O seio cavernoso é uma estrutura venosa dural trabeculada que repousa de ambos os lados da sela túrcica e do seio esfenoidal, recebendo a drenagem venosa das veias oftálmicas superior e inferior. Através de sua luz trafegam a artéria carótida interna e o VI par craniano (abducente), e em sua parede lateral repousam o III par (oculomotor), IV par (troclear) e os ramos oftálmico (V1) e maxilar (V2) do trigêmeo. A trombose retrógrada séptica gera paralisia óculo-motora total (oftalmoplegia completa), hiperestesia/anestesia de V1/V2 e, como os seios cavernosos comunicam-se através dos seios intercavernosos basais, o processo torna-se tipicamente BILATERAL em poucas horas/dias.',
    comentariosAlternativas: {
      A: 'Correta. Manifestação patognomônica de trombose do seio cavernoso (Chandler V) com paralisia de III, IV, VI e V1/V2 e bilateralização.',
      B: 'Incorreta. Enxaqueca hemiplégica cursa com déficits motores transitórios, sem febre de 40 °C, sem proptose e sem oftalmoplegia bilateral.',
      C: 'Incorreta. Afecção vascular degenerativa de idosos, sem qualquer relação com sinusite grave em adolescentes.',
      D: 'Incorreta. A rotura aneurismática cursa com cefaleia em trovoada súbita e rigidez de nuca, não com oftalmoplegia bilateral séptica progressiva pós-sinusite.',
    },
  },
  {
    id: 'ped-ivas-095',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Tumor Inflamatório de Pott (Pott Puffy Tumor)',
    isRevisao: false,
    enunciado:
      'Um adolescente de 15 anos com história de rinossinusite frontal recorrente apresenta cefaleia na fronte há 2 semanas e nota o surgimento de uma tumefação endurecida, edematosa e flutuante na região frontal média e superior do crânio, dolorosa à palpação e associada a febre de 38,5 °C. A tomografia computadorizada contrastada revela opacificação do seio frontal, erosão lítica da tábua óssea anterior do osso frontal e coleção purulenta subperiosteal na fronte, com integridade da tábua interna. Qual é a denominação epônima histórica desta osteomielite do osso frontal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tumor Inflamatório de Pott (Pott Puffy Tumor).',
      },
      {
        id: 'B',
        texto:
          'Mal de Pott vertebral por Mycobacterium tuberculosis.',
      },
      {
        id: 'C',
        texto:
          'Síndrome de Horner congênita.',
      },
      {
        id: 'D',
        texto:
          'Tumor de Wilms renal retroperitoneal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O "Pott Puffy Tumor" (Tumor Inflamatório de Pott), descrito originalmente pelo cirurgião inglês Sir Percivall Pott em 1760, é a osteomielite da tábua óssea do osso frontal associada a abscesso subperiosteal na região frontal/fronte. Ocorre quase que exclusivamente em adolescentes e adultos jovens devido ao desenvolvimento e pneumatização dos seios frontais e ao rico plexo de veias diploicas (veias de Breschet) na calvária. A sinusite frontal bacteriana crônica ou subaguda dissemina-se por contiguidade ou tromboflebite das veias diploicas, corrompendo a tábua óssea anterior e originando um abscesso flutuante característico na fronte ("puffy"). O tratamento requer drenagem cirúrgica e antibioticoterapia intravenosa prolongada (4 a 6 semanas).',
    comentariosAlternativas: {
      A: 'Correta. Pott Puffy Tumor: osteomielite do osso frontal com abscesso subperiosteal na fronte decorrente de sinusite frontal.',
      B: 'Incorreta. O Mal de Pott vertebral clássico é a tuberculose óssea da coluna vertebral (espondilodiscite tuberculosa).',
      C: 'Incorreta. Síndrome de Horner é a tríade de ptose, miose e anidrose por lesão da cadeia simpática cervical.',
      D: 'Incorreta. Tumor de Wilms (nefroblastoma) é neoplasia renal primária sólida da infância.',
    },
  },
  {
    id: 'ped-ivas-096',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Complicações Intracranianas da Rinossinusite Frontal e Esfenoidal',
    isRevisao: false,
    enunciado:
      'Além das complicações orbitárias, a rinossinusite bacteriana aguda na infância e adolescência pode estender-se intracranialmente através da erosão da tábua óssea posterior dos seios frontais ou esfenoidais. Quais são as principais complicações intracranianas supurativas de origem nasossinusal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Abscesso Epidural (extradural), Abscesso Subdural (empiema subdural), Abscesso Cerebral de lobo frontal e Meningite bacteriana aguda.',
      },
      {
        id: 'B',
        texto:
          'Estenose hipertrófica do piloro e invaginação ileocólica.',
      },
      {
        id: 'C',
        texto:
          'Esclerose lateral amiotrófica e siringomielia congênita.',
      },
      {
        id: 'D',
        texto:
          'Neuroma de Morton e fasceíte plantar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A disseminação bacteriana através da tábua óssea posterior do seio frontal ou da lâmina cribriforme/teto do etmoide penetra a cavidade craniana. As complicações intracranianas supurativas decorrentes da rinossinusite incluem: 1) Abscesso Epidural (extradural): pus contido entre a tábua óssea interna do crânio e a dura-máter; 2) Empiema Subdural: pus no espaço subdural entre a dura e a aracnoide, caracterizado por rápida progressão e alto risco de déficits focais por infartos corticais; 3) Abscesso Cerebral (notadamente no lobo frontal); 4) Meningite bacteriana purulenta; 5) Trombose venosa dural (seio sagital superior e seio cavernoso). Todas exigem TC/RM contrastada, antibioticoterapia intravenosa em doses meníngeas e suporte neurocirúrgico imediato.',
    comentariosAlternativas: {
      A: 'Correta. Espectro completo das complicações intracranianas infecciosas de origem rinossinusal.',
      B: 'Incorreta. Afecções obstrutivas gastrintestinais de lactentes.',
      C: 'Incorreta. Doenças neurodegenerativas e malformações medulares não infecciosas.',
      D: 'Incorreta. Doenças ortopédicas periféricas dos membros inferiores.',
    },
  },
  {
    id: 'ped-ivas-097',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Rinossinusite Crônica na Infância: Sinais de Alerta para Doenças Sistêmicas',
    isRevisao: false,
    enunciado:
      'Uma criança de 5 anos apresenta quadro contínuo de tosse produtiva crônica, secreção nasossinusal mucopurulenta espessa, obstrução nasal bilateral refratária a múltiplos ciclos de antibióticos e pólipos nasais exuberantes visíveis à rinoscopia anterior bilateralmente. Na história pregressa, constam fezes volumosas e esteatorreicas desde o período de lactente e baixo ganho pôndero-estatural (peso no percentil 3). A presença de polipose nasossinusal na faixa etária pediátrica é um sinal de alerta clássico que obriga a investigação imediata de qual doença genética crônica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Fibrose Cística (Mucoviscidose).',
      },
      {
        id: 'B',
        texto:
          'Deficiência isolada de vitamina D.',
      },
      {
        id: 'C',
        texto:
          'Doença de von Willebrand tipo 1.',
      },
      {
        id: 'D',
        texto:
          'Hemofilia A clássica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A presença de POLIPOSE NASAL em crianças e pré-escolares é um evento absolutamente atípico e deve ser considerado sinônimo de Fibrose Cística (Mucoviscidose) até que se prove o contrário (teste do suor com dosagem quantitativa de cloreto mandatório). Na fibrose cística, mutações no gene CFTR geram desidratação maciça e espessamento das secreções exócrinas mucosas de todo o organismo, propiciando pansinusite crônica precoce, formação de pólipos inflamatórios nos seios paranasais, bronquiectasias de repetição e insuficiência pancreática exócrina com diarreia crônica esteatorreica e déficit de crescimento pôndero-estatural. Outras etiologias a serem lembradas em rinossinusite crônica refratária infantil incluem a Discinesia Ciliar Primária (Síndrome de Kartagener) e os Erros Inatos da Imunidade (Imunodeficiências Primárias).',
    comentariosAlternativas: {
      A: 'Correta. Polipose nasal e sinusite crônica com esteatorreia e desnutrição configuram apresentação patognomônica de Fibrose Cística.',
      B: 'Incorreta. Deficiência de vitamina D causa raquitismo e osteomalácia sem polipose nasal nem esteatorreia.',
      C: 'Incorreta. Von Willebrand cursa com sangramentos cutaneomucosos (epistaxe, equimoses) sem pólipos sinusais.',
      D: 'Incorreta. Hemofilia causa hemartroses articulares espontâneas.',
    },
  },
  {
    id: 'ped-ivas-098',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Discinesia Ciliar Primária e Síndrome de Kartagener',
    isRevisao: false,
    enunciado:
      'Um menino de 8 anos apresenta história de rinossinusite bacteriana crônica recorrente desde os primeiros meses de vida, otites médias secretoras bilaterais repetidas com hipoacusia e tosse crônica com bronquiectasias em lobos inferiores ao raio-x de tórax. O exame físico e radiológico revela situs inversus totalis (dextrocardia com ápice cardíaco voltado para a direita e fígado palpável à esquerda). Qual é o diagnóstico e o defeito ultraestrutural patológico subjacente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome de Kartagener (forma clínica da Discinesia Ciliar Primária), causada por ausência ou disfunção congênita dos braços de dineína nos microtúbulos ciliares do epitélio respiratório e no nó embrionário.',
      },
      {
        id: 'B',
        texto:
          'Doença de Hirschsprung aganglionar congênita.',
      },
      {
        id: 'C',
        texto:
          'Atresia congênita de esôfago com fístula traqueoesofágica distal.',
      },
      {
        id: 'D',
        texto:
          'Deficiência congênita de alfa-1 antitripsina com mutação Z homozigota.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Síndrome de Kartagener é a apresentação clássica da Discinesia Ciliar Primária (DCP) associada à tríade: 1) Situs inversus (dextrocardia e inversão visceral total); 2) Rinossinusite crônica de repetição; 3) Bronquiectasias pulmonares. É transmitida de forma autossômica recessiva e decorre de mutações que afetam as proteínas estruturais dos cílios celulares, classicamente a ausência dos braços de dineína externos ou internos no axonema 9+2 ciliar. Sem batimento ciliar funcional e coordenado, o clareamento mucoso nas vias respiratórias (seios da face, tuba auditiva, brônquios) é totalmente paralisado, propiciando acúmulo de secreções e infecções bacterianas crônicas desde o período neonatal.',
    comentariosAlternativas: {
      A: 'Correta. Síndrome de Kartagener com a tríade de situs inversus, bronquiectasias e rinossinusite crônica por defeito de braços de dineína ciliar.',
      B: 'Incorreta. Hirschsprung afeta os plexos mioentéricos do cólon causando constipação grave e megacólon aganglionar.',
      C: 'Incorreta. Atresia de esôfago manifesta-se no primeiro dia de vida por sialorreia espumosa e engasgo na primeira mamada.',
      D: 'Incorreta. Alfa-1 antitripsina cursa com enfisema panacinar em adultos e hepatopatia neonatal/infantil colestática.',
    },
  },
  {
    id: 'ped-ivas-099',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Corpo Estranho Nasal com Supuração Unilateral: Diagnóstico Diferencial',
    isRevisao: false,
    enunciado:
      'Uma menina de 2 anos e meio é levada à consulta pediátrica por apresentar secreção nasal purulenta amarelada e espessa há 10 dias, associada a odor extremamente fétido ("cacosmia") que incomoda os familiares ao se aproximarem da criança. A mãe relata que a criança não apresenta tosse, não tem febre, está ativa e o aspecto do muco é purulento exclusivamente na narina direita, sendo a narina esquerda absolutamente limpa e desobstruída. De acordo com a semiologia pediátrica, qual é a principal hipótese diagnóstica que deve ser obrigatoriamente afastada de imediato antes de cogitar rinossinusite comum?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Corpo estranho intranasal na fossa nasal direita (como esponja, semente, feijão ou bateria botão), que induz necrose local, infecção secundária e odor fétido característico.',
      },
      {
        id: 'B',
        texto:
          'Desvio septal congênito com perfuração da lâmina perpendicular do etmoide.',
      },
      {
        id: 'C',
        texto:
          'Fístula liquórica espontânea pós-traumática da fossa craniana média.',
      },
      {
        id: 'D',
        texto:
          'Rinite vasomotora idiopática unilateral por estresse emocional.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A presença de RINORREIA PURULENTA UNILATERAL E FÉTIDA em uma criança pré-escolar (especialmente entre 1 e 4 anos de idade) é patognomônica de CORPO ESTRANHO INTRANASAL retido até que se prove o contrário. Crianças pequenas frequentemente introduzem pequenos objetos na cavidade nasal (grãos, pedaços de borracha, esponjas, brinquedos ou perigosas baterias de lítio). Com o passar dos dias, o corpo estranho gera reação inflamatória por corpo estranho, ulceração mucosa, necrose e proliferação bacteriana anaeróbia secundária, culminando em supuração fétida unilateral. A rinoscopia anterior com boa iluminação e aspiração de secreções sob contenção gentil confirma o diagnóstico e permite a remoção imediata por profissional habilitado.',
    comentariosAlternativas: {
      A: 'Correta. Regra de ouro da pediatria: secreção purulenta fétida unilateral em pré-escolar é corpo estranho nasal até prova em contrário.',
      B: 'Incorreta. Desvio septal não produz supuração unilateral fétida aguda sem corpo estranho.',
      C: 'Incorreta. Fístula liquórica exterioriza líquido límpido como "água de rocha" (glicosado), sem odor fétido nem pus isolado.',
      D: 'Incorreta. Rinite vasomotora cursa com secreção hialina bilateral e espirros.',
    },
  },
  {
    id: 'ped-ivas-100',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'IRA Infecções de Vias Aéreas Superiores',
    subtema: 'Caso Clínico Desafio Síntese: Diagnóstico e Manejo Integrado de IVAS',
    isRevisao: false,
    enunciado:
      'Um menino de 6 anos é admitido na emergência pediátrica com história de resfriado comum há 12 dias que vinha melhorando, mas que há 48 horas evoluiu com piora súbita ("dupla piora"): nova febre de 39,4 °C, cefaleia intensa, tosse noturna e secreção nasal verde-escura abundante. Nas últimas 12 horas, a mãe notou edema e hiperemia ao redor do olho direito. Ao exame médico: sonolento mas responsivo, FC = 118 bpm, FR = 22 irpm, Tax = 39,1 °C. Exame oftalmológico: pálpebras do olho direito com eritema e edema volumoso; ao exame detalhado da órbita, constata-se discreta PROPTOSE do olho direito em relação ao esquerdo, limitação dolorosa da adução e elevação do globo ocular direito (oftalmoplegia incipiente) e quemose conjuntival inferior, com reflexo fotomotor e acuidade visual ainda preservados. Qual é o diagnóstico sindrômico exato, a classificação anátomo-clínica de gravidade e a conduta imediata mandatória?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Resfriado comum com conjuntivite alérgica simples; prescrever antialérgico oral e liberar com alta.',
      },
      {
        id: 'B',
        texto:
          'Rinossinusite Bacteriana Aguda complicada com Celulite Pós-septal (Orbitária verdadeira - Chandler Estágio II); a conduta é internação hospitalar de urgência, realização imediata de Tomografia Computadorizada de crânio, órbitas e seios da face com contraste venoso, início de antibioticoterapia intravenosa de amplo espectro (Ceftriaxona associada a Oxacilina ou Vancomicina), lavagem nasal e avaliação conjunta urgente da Otorrinolaringologia e Oftalmologia.',
      },
      {
        id: 'C',
        texto:
          'Celulite Pré-septal isolada sem complicação profunda; prescrever amoxicilina oral ambulatorial e retorno em 7 dias.',
      },
      {
        id: 'D',
        texto:
          'Glaucoma congênito descompensado por trauma ocular bilateral; realizar iridotomia imediata a laser.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Este caso síntese integra o reconhecimento de uma Rinossinusite Bacteriana Aguda na apresentação de "piora secundária" evoluindo para a complicação mais temida da infância: a Celulite Pós-septal (Orbitária) — Estágio II de Chandler. A presença incontestável de PROPTOSE, OFTALMOPLEGIA (limitação e dor à movimentação dos músculos extraoculares) e QUEMOSE diferencia categoricamente o quadro de uma simples celulite pré-septal superficial. O manejo de emergência exige: 1) INTERNAÇÃO HOSPITALAR IMEDIATA; 2) Tomografia Computadorizada de seios e órbitas contrastada de urgência para definir a extensão pós-septal e descartar abscessos subperiosteais ou orbitários drenáveis; 3) Antibioticoterapia INTRAVENOSA imediata com cobertura para pneumococo, estafilococo e anaeróbios (Ceftriaxona + Oxacilina ou Vancomicina); 4) Avaliação e acompanhamento rigoroso por Otorrinolaringologia e Oftalmologia para prevenir amaurose permanente e trombose do seio cavernoso.',
    comentariosAlternativas: {
      A: 'Incorreta. Ignorar a proptose e a oftalmoplegia como conjuntivite banal causará cegueira e risco de óbito por infecção intracraniana.',
      B: 'Correta. Diagnóstico preciso de complicação pós-septal (Chandler II) e protocolo completo de emergência hospitalar, imagem contrastada e antibioticoterapia IV.',
      C: 'Incorreta. Proptose e oftalmoplegia dolorosa confirmam envolvimento pós-septal; tratar ambulatorialmente como pré-septal é erro médico grave.',
      D: 'Incorreta. Quadro infeccioso bacteriano agudo pós-sinusite febril e não glaucoma congênito.',
    },
  },
];



