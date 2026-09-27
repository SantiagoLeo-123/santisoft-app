export interface RawITUPediatricaQuestion {
  id: string;
  grandeArea: 'Pediatria';
  especialidade: 'Pediatria';
  tema: 'Infecção do Trato Urinário';
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

export const QUESTOES_ITU_PEDIATRICA: RawITUPediatricaQuestion[] = [
  {
    id: 'ped-itu-001',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Método de Coleta - Saco Coletor e Valor Preditivo',
    isRevisao: false,
    enunciado:
      'Lactente do sexo feminino, 7 meses, sem controle esfincteriano, é levada à UPA com história de febre de 38,8 °C há 24 horas, irritabilidade e recusa parcial das mamadas. O exame físico não revela focos infecciosos aparentes na oroscopia, otoscopia ou ausculta pulmonar. O médico assistente solicita exame de urina e a equipe de enfermagem instala um saco coletor adesivo perineal. A urina é obtida após 40 minutos e a fita reagente revela: leucócitos ausentes, esterase leucocitária negativa, nitrito negativo e densidade de 1.015. A respeito da acurácia e interpretação do saco coletor na investigação de ITU na infância, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O saco coletor possui altíssimo valor preditivo negativo (próximo a 100%); se o sedimento urinário ou a fita reagente forem absolutamente normais (ausência de leucocitúria e nitrito), o diagnóstico de infecção do trato urinário pode ser praticamente descartado.',
      },
      {
        id: 'B',
        texto:
          'O saco coletor é o método de escolha tanto para triagem quanto para confirmação diagnóstica de ITU, sendo a urocultura positiva nesse método suficiente para iniciar antibioticoterapia sem necessidade de recoleta.',
      },
      {
        id: 'C',
        texto:
          'Se o resultado do saco coletor demonstrar bacteriúria ou piúria, considera-se confirmada a pielonefrite com sensibilidade e especificidade superiores a 98%.',
      },
      {
        id: 'D',
        texto:
          'O saco coletor nunca deve ser utilizado em hipótese alguma na prática pediátrica, mesmo que o resultado seja completamente negativo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O saco coletor adesivo perineal tem uma utilidade clínica bem definida na pediatria: seu ALTÍSSIMO VALOR PREDITIVO NEGATIVO (VPN). Quando a amostra colhida por saco coletor apresenta EAS e fita reagente rigorosamente normais (leucócitos ausentes, esterase leucocitária negativa e nitrito negativo), a probabilidade de a criança ter ITU é inferior a 1%, permitindo descartar o diagnóstico com segurança e buscar outros focos infecciosos sem submeter o lactente a procedimentos invasivos.\nPor outro lado, o saco coletor apresenta elevadíssima taxa de FALSOS-POSITIVOS (especificidade muito baixa, contaminação perineal/fecal de até 80-85%). Portanto, uma urocultura colhida por saco coletor NUNCA confirma ITU; qualquer sedimento alterado ou suspeita clínica exige recoleta obrigatória por método estéril (cateterismo vesical ou punção suprapúbica).',
    comentariosAlternativas: {
      A: 'Correta. Amostra límpida e normal em saco coletor descarta ITU com segurança devido ao elevadíssimo VPN.',
      B: 'Incorreta. Urocultura colhida por saco coletor é contraindicada para confirmar ITU pela alta taxa de contaminação perineal.',
      C: 'Incorreta. Sedimento alterado no saco coletor tem taxa de falso-positivo de até 85%, exigindo recoleta estéril.',
      D: 'Incorreta. O saco coletor é útil como teste de triagem para exclusão inicial quando negativo.',
    },
  },
  {
    id: 'ped-itu-002',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Cateterismo Vesical - Ponto de Corte Diagnóstico',
    isRevisao: false,
    enunciado:
      'Menino de 9 meses, febril (39 °C) há 2 dias, sem sinais catarrais, irritado ao urinar, é submetido a cateterismo vesical de alívio (sondagem uretral estéril) após antissepsia perineal rigorosa com clorexidina aquosa. O laudo da urocultura confirma crescimento de Escherichia coli em cultura pura. De acordo com as diretrizes da Academia Americana de Pediatria (AAP) e da Sociedade Brasileira de Pediatria (SBP), qual é o ponto de corte bacteriológico mínimo na urocultura colhida por cateterismo vesical para o diagnóstico definitivo de ITU?',
    alternativas: [
      {
        id: 'A',
        texto: '≥ 50.000 Unidades Formadoras de Colônias por mililitro (UFC/mL) de um único uropatógeno.',
      },
      {
        id: 'B',
        texto: '≥ 1.000.000 UFC/mL associadas obrigatoriamente a flora bacteriana polimicrobiana.',
      },
      {
        id: 'C',
        texto: 'Qualquer crescimento bacteriano acima de 10 UFC/mL em três amostras consecutivas.',
      },
      {
        id: 'D',
        texto: '≥ 100.000 UFC/mL exclusivamente se houver hematúria macroscópica visível.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Para amostras de urina obtidas por cateterismo vesical / sondagem uretral estéril em lactentes e crianças sem controle esfincteriano, o ponto de corte estabelecido pela Academia Americana de Pediatria (AAP) e adotado pela SBP é o crescimento de ≥ 50.000 UFC/mL de um único patógeno bacteriano (geralmente acompanhado de leucocitúria no EAS).\nNota prática: Valores entre 10.000 e 50.000 UFC/mL em crianças francamente sintomáticas ou que receberam antibioticoterapia recente ou com bexiga previamente esvaziada podem ser considerados sugestivos em situações específicas, mas a definição diagnóstica padrão das bancas de residência médica é o patamar de ≥ 50.000 UFC/mL para sondagem vesical (diferente do jato médio, cujo ponto de corte clássico de Kass é ≥ 100.000 UFC/mL).',
    comentariosAlternativas: {
      A: 'Correta. O ponto de corte clássico para cateterismo vesical na infância é ≥ 50.000 UFC/mL de uropatógeno único.',
      B: 'Incorreta. 1.000.000 UFC/mL polimicrobiano indica contaminação da amostra e não critério de infecção.',
      C: 'Incorreta. Ponto de corte inadequado para cateterismo; crescimento a partir de poucas colônias só vale para punção suprapúbica de bacilos Gram-negativos.',
      D: 'Incorreta. ≥ 100.000 UFC/mL é o critério de jato médio em crianças continentes e não depende de hematúria macroscópica.',
    },
  },
  {
    id: 'ped-itu-003',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Punção Suprapúbica - Padrão-Ouro e Interpretação Bacteriológica',
    isRevisao: false,
    enunciado:
      'Lactente de 3 meses, sexo masculino, portador de fimose fisiológica cerrada grave com balanopostite associada, apresenta febre de 39,2 °C, vômitos e hipoatividade. Pela dificuldade técnica e risco de contaminação periuretral na sondagem, o pediatra opta pela realização de PUNÇÃO SUPRAPÚBICA (PSP) guiada por ultrassom após antissepsia cirúrgica. A urocultura revelou crescimento de 2.000 UFC/mL de Klebsiella pneumoniae. Sobre a punção suprapúbica e a interpretação desse laudo, assinale a opção correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A punção suprapúbica é considerada o método padrão-ouro ("gold standard") de coleta de urina em lactentes; como a urina vesical é estéril, o crescimento de qualquer número de colônias de bacilos Gram-negativos (mesmo < 10.000 UFC/mL) confirma o diagnóstico de ITU.',
      },
      {
        id: 'B',
        texto:
          'O resultado é negativo e deve ser desconsiderado, pois valores inferiores a 50.000 UFC/mL representam contaminação cutânea bacteriana em qualquer método de coleta.',
      },
      {
        id: 'C',
        texto:
          'A punção suprapúbica é formalmente contraindicada em menores de 1 ano pelo risco de hemorragia cerebral reflexa.',
      },
      {
        id: 'D',
        texto:
          'A presença de Klebsiella pneumoniae na punção suprapúbica indica colonização saprófita assintomática que dispensa tratamento antimicrobiano.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A PUNÇÃO SUPRAPÚBICA (PSP) é o método diagnóstico padrão-ouro ("gold standard") para coleta de urina em lactentes e recém-nascidos gravemente enfermos ou com alterações anatômicas genitais (fimose cerrada, aderência labial extensa). Como a agulha penetra diretamente na bexiga através da parede abdominal anterior sem qualquer contato com a flora da uretra ou períneo, a urina obtida é fisiologicamente estéril. Portanto, a regra bacteriológica é categórica:\n- Crescimento de QUALQUER NÚMERO DE COLÔNIAS de bacilos Gram-negativos (mesmo 1 colônia ou 2.000 UFC/mL como no caso) CONFIRMA O DIAGNÓSTICO DE ITU.\n- Para cocos Gram-positivos (como Enterococcus ou Staphylococcus), aceita-se geralmente o ponto de corte de ≥ 1.000 a 2.000 UFC/mL para descartar colonização cutânea acidental da punção.',
    comentariosAlternativas: {
      A: 'Correta. Na punção suprapúbica, qualquer crescimento de bacilo Gram-negativo confirma infecção do trato urinário.',
      B: 'Incorreta. O patamar de 50.000 UFC/mL aplica-se à sondagem vesical, não à punção suprapúbica.',
      C: 'Incorreta. A PSP é segura, indicada prioritariamente em lactentes jovens e não causa dano neurológico.',
      D: 'Incorreta. Klebsiella em punção suprapúbica em lactente febril com toxemia é ITU verdadeira com indicação de internação e antibioticoterapia.',
    },
  },
  {
    id: 'ped-itu-004',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Jato Médio em Criança Continente - Ponto de Corte de Kass',
    isRevisao: false,
    enunciado:
      'Menina de 6 anos, com controle esfincteriano pleno diurno e noturno, comparece ao ambulatório com queixa de disúria intensa, polaciúria e dor suprapúbica há 3 dias, sem febre, dor lombar ou vômitos. A urina foi colhida por técnica de JATO MÉDIO após higienização cuidadosa dos genitais com água e sabão e afastamento dos grandes lábios. O laudo da urocultura revelou Escherichia coli. De acordo com os critérios clássicos de Kass para urina colhida por jato médio em crianças continentes, qual é a contagem de colônias diagnóstica de ITU?',
    alternativas: [
      {
        id: 'A',
        texto: '≥ 100.000 UFC/mL de um único uropatógeno.',
      },
      {
        id: 'B',
        texto: '≥ 1.000 UFC/mL de três espécies bacterianas simultâneas.',
      },
      {
        id: 'C',
        texto: 'Apenas valores superiores a 1.000.000 UFC/mL com cilindros hemáticos.',
      },
      {
        id: 'D',
        texto: 'Qualquer valor entre 10 e 100 UFC/mL.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Em crianças com controle esfincteriano estabelecido (continentes), o método preferencial e não invasivo de coleta é o JATO MÉDIO da micção espontânea. Para minimizar a contaminação pela flora comensal da uretra distal e introito vaginal, realiza-se higienização prévia e descarta-se o primeiro jato (que lava a uretra anterior), coletando-se a porção média da micção.\nO critério bacteriológico diagnóstico clássico de Kass para urocultura de jato médio é a presença de ≥ 100.000 UFC/mL (10⁵ UFC/mL) de um único patógeno. Em meninas sintomáticas com sintomas urinários baixos francos (disúria e polaciúria), algumas diretrizes aceitam contagens a partir de 10.000 a 50.000 UFC/mL se houver piúria intensa associada, mas o critério universal consolidado de prova de residência médica permanece sendo ≥ 100.000 UFC/mL.',
    comentariosAlternativas: {
      A: 'Correta. O critério clássico de Kass para jato médio em pacientes continentes é ≥ 100.000 UFC/mL de patógeno único.',
      B: 'Incorreta. Três espécies simultâneas caracterizam contaminação grosseira da amostra e exigem nova coleta.',
      C: 'Incorreta. Não é necessário atingir 1 milhão de colônias e cilindros hemáticos indicam glomerulonefrite.',
      D: 'Incorreta. Contagens tão baixas no jato médio não preenchem critério de positividade.',
    },
  },
  {
    id: 'ped-itu-005',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Interpretação de Urocultura de Saco Coletor Alterada',
    isRevisao: false,
    enunciado:
      'Lactente de 10 meses, sexo masculino, afebril, assintomático, em ganho ponderal satisfatório, realizou exames de rotina solicitados pela família em laboratório particular. A urina foi colhida por saco coletor adesivo que permaneceu fixado ao períneo por 2 horas até a micção. O resultado traz: EAS com 15 leucócitos por campo, hemácias ausentes, nitrito negativo; Urocultura com crescimento de 100.000 UFC/mL de Escherichia coli e Enterococcus sp. Diante desse achado laboratorial, qual é a conduta médica correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Não iniciar antibioticoterapia; reconhecer o resultado como provável contaminação perineal pelo tempo prolongado do saco coletor e crescimento polimicrobiano em criança afebril e assintomática.',
      },
      {
        id: 'B',
        texto:
          'Internar imediatamente o lactente para antibioticoterapia intravenosa com ceftriaxona e amicacina por 14 dias.',
      },
      {
        id: 'C',
        texto:
          'Indicar uretrocistografia miccional de urgência para investigar válvula de uretra posterior.',
      },
      {
        id: 'D',
        texto:
          'Iniciar nitrofurantoína oral profilática contínua até os 5 anos de idade sem exames adicionais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Esse é um dos cenários mais comuns e mais cobrados em provas de pediatria ambulatorial. Três fatores desautorizam o diagnóstico de ITU neste caso:\n1) A criança é afebril, ativa e totalmente assintomática;\n2) A urina foi colhida por saco coletor adesivo que ficou fixado por 2 horas (o saco deve ser trocado a cada 30 minutos se não houver diurese para evitar colonização bacteriana externa);\n3) A urocultura revelou crescimento POLIMICROBIANO (dois microrganismos: E. coli + Enterococcus), o que praticamente sela o diagnóstico de contaminação por flora fecal/perineal.\nConduta: Não iniciar antibiótico e tranquilizar os pais. ITU na infância não é diagnóstico laboratorial isolado; requer correlação clínico-epidemiológica e método estéril de coleta.',
    comentariosAlternativas: {
      A: 'Correta. Criança assintomática com cultura polimicrobiana em saco coletor representa contaminação; conduta expectante.',
      B: 'Incorreta. Prescrever antibióticos intravenosos em lactente assintomático com cultura contaminada é iatrogenia grave.',
      C: 'Incorreta. Exames invasivos de imagem não estão indicados para urocultura contaminada de saco coletor.',
      D: 'Incorreta. Quimioprofilaxia não é indicada para resultados contaminados de exames desnecessários.',
    },
  },
  {
    id: 'ped-itu-006',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Análise do Sedimento Urinário - Esterase Leucocitária e Piúria',
    isRevisao: false,
    enunciado:
      'No exame de urina tipo 1 (EAS / fita reagente), a detecção da enzima ESTERASE LEUCOCITÁRIA desempenha papel central na avaliação presuntiva de infecções do trato urinário. A respeito dos fundamentos bioquímicos e da interpretação clínica da esterase leucocitária, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A esterase leucocitária é uma enzima produzida por neutrófilos íntegros ou lisados no trato urinário, servindo como marcador indireto de piúria (leucocitúria); porém, sua presença isolada não é patognomônica de ITU, pois febre alta, contaminação genital, vulvovaginite ou Doença de Kawasaki podem cursar com piúria estéril.',
      },
      {
        id: 'B',
        texto:
          'A esterase leucocitária é produzida exclusivamente pela cápsula bacteriana da Escherichia coli, sendo negativa em infecções por outras enterobactérias.',
      },
      {
        id: 'C',
        texto:
          'Um teste de esterase leucocitária positivo confirma a presença de cálculo renal coraliforme de estruvita.',
      },
      {
        id: 'D',
        texto:
          'Se a esterase leucocitária for positiva, a urocultura é dispensável, devendo-se iniciar antibioticoterapia empírica sem confirmação bacteriológica em 100% dos casos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A esterase leucocitária é uma enzima liberada pelos leucócitos polimorfonucleares (neutrófilos) que migram para o trato urinário em resposta à inflamação. A grande vantagem da fita reagente é detectar a enzima mesmo quando os leucócitos já sofreram lise osmótica na bexiga ou na urina diluída. Possui excelente sensibilidade (80-90%) para identificar piúria (leucocitúria > 5 a 10 leucócitos/campo).\nNo entanto, piúria NÃO é sinônimo de infecção urinária bacteriana. Várias condições pediátricas causam PIÚRIA ESTÉRIL com esterase positiva:\n1) Febre alta de qualquer etiologia (viroses, pneumonia);\n2) Vulvovaginite ou balanopostite (contaminação do jato);\n3) Doença de Kawasaki (uretrite estéril);\n4) Apendicite aguda ou abscesso pélvico (irritação do ureter/bexiga);\n5) Nefropatias intersticiais e tuberculose urogenital.\nPor isso, o diagnóstico padrão exige a identificação do uropatógeno na urocultura.',
    comentariosAlternativas: {
      A: 'Correta. Esterase marca presença de neutrófilos/piúria, mas pode ser positiva em outras causas de inflamação e piúria estéril.',
      B: 'Incorreta. A esterase é humana (leucocitária), não de origem bacteriana.',
      C: 'Incorreta. A esterase leucocitária indica inflamação/piúria, sem especificidade para litíase coraliforme.',
      D: 'Incorreta. A urocultura permanece mandatória para confirmação e identificação do perfil de sensibilidade aos antimicrobianos.',
    },
  },
  {
    id: 'ped-itu-007',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Teste do Nitrito Urinário - Fisiologia e Especificidade',
    isRevisao: false,
    enunciado:
      'Menina de 4 anos é levada à consulta com queixa de febre e dor em flanco direito. O EAS revela teste do nitrito FORTEMENTE POSITIVO (reação de cor rósea na fita reagente) e esterase leucocitária positiva. Sobre o teste do nitrito na urina, assinale a opção que descreve corretamente seu mecanismo bioquímico e valor clínico:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Bactérias uropatogênicas da família Enterobacteriaceae (como a E. coli) possuem a enzima nitrato-redutase, capaz de converter o nitrato alimentar presente na urina em nitrito; o teste possui altíssima especificidade (> 98%), tornando a positividade um forte preditor de ITU.',
      },
      {
        id: 'B',
        texto:
          'O nitrito positivo indica que a urina da criança está estéril e livre de qualquer processo infeccioso bacteriano.',
      },
      {
        id: 'C',
        texto:
          'O nitrito é um metabólito da degradação dos glóbulos vermelhos na bexiga, indicando hematúria glomerular grave.',
      },
      {
        id: 'D',
        texto:
          'O teste do nitrito tem especificidade nula e seu resultado não deve ser levado em consideração para nenhuma decisão clínica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A urina humana normal contém nitratos solúveis derivados da dieta vegetal e proteica. As bactérias Gram-negativas entéricas (família Enterobacteriaceae: Escherichia coli, Klebsiella, Proteus, Enterobacter) produzem a enzima bacteriana NITRATO-REDUTASE. Quando essas bactérias se multiplicam na bexiga, reduzem o nitrato a NITRITO, que é detectado colorimetricamente pela fita reagente (reação de Griess).\nA grande característica do teste do nitrito é a sua ALTÍSSIMA ESPECIFICIDADE (geralmente > 95% a 98%). Ou seja, quando o nitrito é POSITIVO em uma urina adequadamente colhida, a probabilidade de haver uma bacteriúria significativa por enterobactérias é superior a 95%, autorizando o início imediato de antibioticoterapia empírica enquanto se aguarda o antibiograma.',
    comentariosAlternativas: {
      A: 'Correta. Bactérias redutoras de nitrato a nitrito conferem especificidade > 98% ao teste para bacteriúria por enterobactérias.',
      B: 'Incorreta. O nitrito positivo indica a presença de bactérias uropatogênicas em proliferação ativa.',
      C: 'Incorreta. A degradação de hemácias não gera nitrito urinário.',
      D: 'Incorreta. O nitrito possui alta especificidade e elevado valor preditivo positivo na prática clínica.',
    },
  },
  {
    id: 'ped-itu-008',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Falso-Negativo do Nitrito em Lactentes - Tempo de Retenção Vesical',
    isRevisao: false,
    enunciado:
      'Lactente de 5 meses, sexo feminino, apresenta pielonefrite aguda confirmada posteriormente por urocultura com 200.000 UFC/mL de Escherichia coli. No entanto, o EAS colhido na admissão revelou leucocitúria de 80.000/mL, mas o teste do NITRITO FOI NEGATIVO. Qual é a principal causa fisiológica de teste do nitrito falso-negativo em lactentes jovens infectados por bactérias produtoras de nitrato-redutase?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tempo de permanência da urina na bexiga inferior a 4 horas; como os lactentes esvaziam a bexiga com frequência a cada 30 a 60 minutos, não há tempo hábil suficiente para que as bactérias metabolizem e convertam o nitrato em nitrito em concentrações detectáveis pela fita reagente.',
      },
      {
        id: 'B',
        texto:
          'Destruição congênita das enzimas bacterianas pelo epitélio urotelial da bexiga em crianças menores de 1 ano.',
      },
      {
        id: 'C',
        texto:
          'Ausência completa de rins em crianças que apresentam teste de nitrito negativo.',
      },
      {
        id: 'D',
        texto:
          'Alergia à proteína do leite de vaca (APLV), que inibe diretamente o teste na fita reagente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Embora o teste do nitrito tenha altíssima especificidade, sua SENSIBILIDADE EM LACTENTES É BAIXA (cerca de 30% a 50%). A principal razão para esse fenômeno de FALSO-NEGATIVO é o TEMPO DE RETENÇÃO VESICAL:\nPara que a enzima bacteriana nitrato-redutase consiga converter o nitrato dietético em nitrito em quantidade suficiente para sensibilizar o limite de detecção da fita reagente, é necessário que a urina permaneça retida no interior da bexiga por pelo menos 4 HORAS.\nLactentes pequenos urinam espontaneamente a cada 30 a 60 minutos (micções frequentes reflexas). Dessa forma, a bexiga é esvaziada continuamente antes que ocorra acúmulo mensurável de nitrito. Outras causas de nitrito falso-negativo incluem dietas pobres em nitrato (aleitamento materno exclusivo inicial) e infecção por bactérias não redutoras de nitrato (como Enterococcus).',
    comentariosAlternativas: {
      A: 'Correta. Micções frequentes (< 4h de retenção vesical) impedem acúmulo de nitrito em concentração detectável.',
      B: 'Incorreta. O urotélio infantil não destrói enzimas bacterianas.',
      C: 'Incorreta. Agenesia renal bilateral é incompatível com a vida fora do útero sem diálise e não se relaciona ao caso.',
      D: 'Incorreta. APLV não interfere na reação química do nitrito na urina.',
    },
  },
  {
    id: 'ped-itu-009',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Nitrito Falso-Negativo por Bactérias Não Produtoras de Nitrato-Redutase',
    isRevisao: false,
    enunciado:
      'Lactente de 11 meses com histórico de malformação congênita do trato urinário (bexiga neurogênica secundária a mielomeningocele) em regime de cateterismo intermitente limpo evolui com febre de 39 °C e urina turva com odor fétido. A fita urinária acusa esterase leucocitária +++ e NITRITO NEGATIVO. A urocultura isola Enterococcus faecalis > 100.000 UFC/mL sensível a ampicilina. Por qual motivo microbiológico o teste do nitrito resultou negativo nesta infecção verdadeira?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O Enterococcus faecalis (coco Gram-positivo) e outros agentes como Staphylococcus saprophyticus, Pseudomonas aeruginosa e espécies de Candida NÃO produzem a enzima nitrato-redutase, sendo fisiologicamente incapazes de converter nitrato em nitrito.',
      },
      {
        id: 'B',
        texto:
          'O Enterococcus faecalis converte nitrito em ouro coloidal metálico dentro da bexiga, inativando a fita de plástico.',
      },
      {
        id: 'C',
        texto:
          'Houve erro de impressão do laudo pelo laboratório, pois 100% das bactérias existentes no planeta Terra reduzem nitrato a nitrito.',
      },
      {
        id: 'D',
        texto:
          'A presença de mielomeningocele neutraliza quimicamente o pH da urina tornando impossível qualquer reação enzimática.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Esta é uma regra microbiológica fundamental para provas de residência médica:\nNem todas as bactérias que causam ITU são redutoras de nitrato. A enzima nitrato-redutase é expressa de forma clássica pelas ENTEROBACTÉRIAS (Escherichia coli, Klebsiella pneumoniae, Proteus mirabilis, Enterobacter sp.).\nPor outro lado, microrganismos como:\n1) Enterococcus faecalis e Enterococcus faecium (cocos Gram-positivos);\n2) Staphylococcus saprophyticus e Streptococcus agalactiae (GBS);\n3) Pseudomonas aeruginosa e Acinetobacter sp.;\n4) Fungos do gênero Candida;\nNÃO PRODUZEM A ENZIMA NITRATO-REDUTASE. Nesses casos, mesmo que haja infecção grave com milhões de bactérias por mililitro e retenção vesical por mais de 8 horas, o TESTE DO NITRITO SERÁ SEMPRE NEGATIVO. A presença de leucocitúria/esterase leucocitária positiva alerta para o processo inflamatório em curso.',
    comentariosAlternativas: {
      A: 'Correta. Enterococcus faecalis e cocos Gram-positivos não possuem nitrato-redutase, gerando nitrito negativo.',
      B: 'Incorreta. Afirmação fantasiosa sem qualquer sentido biológico.',
      C: 'Incorreta. Diversas espécies bacterianas não sintetizam a nitrato-redutase.',
      D: 'Incorreta. Mielomeningocele causa estase urinária e disfunção motora vesical, mas não altera a bioquímica do nitrato.',
    },
  },
  {
    id: 'ped-itu-010',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Associação de Esterase Leucocitária e Nitrito Positivos - Conduta',
    isRevisao: false,
    enunciado:
      'Pré-escolar de 3 anos, sexo feminino, apresenta quadro agudo de febre de 38,5 °C há 24 horas, irritabilidade, choro durante as micções e dor abdominal em baixo ventre. A urina foi colhida por cateterismo vesical estéril e a fita reagente no pronto atendimento revela ESTERASE LEUCOCITÁRIA POSITIVA (++) e NITRITO POSITIVO (+). A urocultura com antibiograma foi enviada ao laboratório microbiológico. Diante desse resultado laboratorial imediato da fita de triagem, qual é a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A combinação de esterase leucocitária positiva com nitrito positivo confere um valor preditivo positivo (VPP) superior a 90-95% para ITU; está indicado o início IMEDIATO de antibioticoterapia empírica direcionada para uropatógenos comunitários, ajustando-se posteriormente conforme o resultado da urocultura.',
      },
      {
        id: 'B',
        texto:
          'Aguardar o resultado definitivo da urocultura por 72 horas em observação estrita sem antibiótico, pois a fita reagente não tem valor clínico.',
      },
      {
        id: 'C',
        texto:
          'Descartar infecção urinária e prescrever apenas antitérmicos e expectorante oral por 10 dias.',
      },
      {
        id: 'D',
        texto:
          'Realizar biópsia renal percutânea imediata para confirmar necrose tubular aguda.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A fita reagente de urina atua como ferramenta ágil de decisão clínica à beira do leito ("point-of-care"). Quando avaliamos a sensibilidade e especificidade combinadas:\n- Nitrito positivo + Esterase leucocitária positiva: essa combinação apresenta a maior acurácia diagnóstica presuntiva disponível antes da cultura, com sensibilidade superior a 90% e especificidade de 98% a 100%, conferindo um Valor Preditivo Positivo (VPP) superior a 95%.\nEm uma criança com clínica compatível de ITU febril, aguardar 48 a 72 horas pelo laudo da urocultura para prescrever o antibiótico aumenta substancialmente o risco de bacteremia, sepse urológica e formação de cicatrizes renais parenquimatosas permanentes. Portanto, a conduta correta é: COLETAR A UROCULTURA E INICIAR IMEDIATAMENTE ANTIBIOTICOTERAPIA EMPÍRICA (ex.: cefalosporina de 2ª ou 3ª geração ou amoxicilina com clavulanato).',
    comentariosAlternativas: {
      A: 'Correta. Esterase + nitrito positivos têm VPP > 95%, autorizando início imediato de antibiótico empírico após coleta da cultura.',
      B: 'Incorreta. Postergar o antibiótico em ITU febril sintomática aumenta risco de sepse e lesão renal permanente.',
      C: 'Incorreta. Quadro clássico de ITU febril com piúria e bacteriúria flagrantes na fita.',
      D: 'Incorreta. Biópsia renal é exame invasivo para glomerulopatias complexas, sem indicação em ITU aguda.',
    },
  },
  {
    id: 'ped-itu-011',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Fita Reagente Completamente Negativa em Lactente Febril',
    isRevisao: false,
    enunciado:
      'Lactente de 8 meses, sexo feminino, previamente hígida, é levada ao pronto-socorro com febre de 39,5 °C há 18 horas sem sintomas respiratórios ou digestivos. A urina foi colhida por cateterismo vesical e a fita reagente/EAS demonstrou: Leucócitos: 2.000/mL (ausentes no sedimento), Esterase Leucocitária: NEGATIVA, Nitrito: NEGATIVO, Hemácias: ausentes e densidade 1.018. Ao reexaminar a paciente minuciosamente, o médico nota hiperemia da membrana timpânica esquerda com opacificação e abaulamento moderado. Diante da negatividade completa da esterase e nitrito no exame de urina, qual é a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A negatividade concomitante da esterase leucocitária e do nitrito confere um valor preditivo negativo (VPN) de aproximadamente 98-99%, tornando improvável o diagnóstico de ITU; a conduta deve focar na Otite Média Aguda recém-diagnosticada ao exame físico.',
      },
      {
        id: 'B',
        texto:
          'Trata-se de choque séptico urinário refratário mascarado, devendo-se puncionar a bexiga repetidamente.',
      },
      {
        id: 'C',
        texto:
          'Administrar ciprofloxacino venoso e ampicilina em doses dobradas para cobrir ITU fulminante oculta.',
      },
      {
        id: 'D',
        texto:
          'O exame de urina normal confirma que a febre decorre exclusivamente da erupção dos dentes decíduos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A combinação de esterase leucocitária NEGATIVA e nitrito NEGATIVO possui um ALTÍSSIMO VALOR PREDITIVO NEGATIVO (VPN de 98% a 99%). Em termos práticos, se uma amostra de urina não apresenta piúria (esterase negativa) e não apresenta bactérias redutoras de nitrato (nitrito negativo), a chance de aquela febre ser secundária a uma infecção urinária bacteriana é virtualmente desprezível (< 1 a 2%).\nNessa situação, a reavaliação clínica detalhada identificou abaulamento e hiperemia timpânica compatíveis com Otite Média Aguda (OMA), que explica perfeitamente a síndrome febril aguda. O médico deve direcionar o tratamento para a OMA e evitar o sobrediagnóstico e uso indevido de antibióticos para ITU.',
    comentariosAlternativas: {
      A: 'Correta. VPN de 98-99% descarta ITU na prática e o exame físico identificou OMA como foco real da febre.',
      B: 'Incorreta. A criança tem exame de urina normal e não há sinais de choque séptico.',
      C: 'Incorreta. Prescrição agressiva desnecessária; não há infecção urinária.',
      D: 'Incorreta. Erupção dentária não causa febre de 39,5 °C; a causa é a Otite Média Aguda comprovada.',
    },
  },
  {
    id: 'ped-itu-012',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Escherichia coli Uropatogênica (UPEC) - Fímbrias Tipo 1 e Fímbrias P',
    isRevisao: false,
    enunciado:
      'A Escherichia coli uropatogênica (UPEC) é responsável por mais de 80% a 90% das infecções do trato urinário adquiridas na comunidade na infância. A virulência dessas cepas depende criticamente de estruturas de adesão bacteriana especializadas denominadas fímbrias ou pili. Em relação às fímbrias da E. coli e sua correlação com a localização anatômica da ITU, assinale a alternativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'As fímbrias tipo 1 (sensíveis à manose) promovem a adesão ao urotélio vesical e estão implicadas na colonização da bexiga e cistite, enquanto as fímbrias P (resistentes à manose / Pap pili) ligam-se a receptores glicosfingolipídicos específicos no epitélio tubular renal e células glomerulares, desempenhando papel crucial na patogênese da PIELONEFRITE AGUDA.',
      },
      {
        id: 'B',
        texto:
          'As fímbrias P são encontradas exclusivamente em vírus respiratórios e nada têm a ver com bactérias gram-negativas.',
      },
      {
        id: 'C',
        texto:
          'A presença de fímbrias tipo 1 impede que a bactéria sobreviva na urina por digerir o oxigênio da bexiga.',
      },
      {
        id: 'D',
        texto:
          'As fímbrias servem exclusivamente para locomoção flagelar através do ureter, sem capacidade adesiva tecidual.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O mecanismo de patogenicidade da Escherichia coli uropatogênica (UPEC) é um tema predileto em bancas conceituadas:\n1) FÍMBRIAS TIPO 1 (Manose-sensíveis): Ligam-se às uroplaquinas ricas em resíduos de D-manose que revestem as células umbrella da bexiga. São fundamentais para a adesão, invasão intracelular e formação de biofilmes na bexiga, sendo o principal fator de virulência da CISTITE;\n2) FÍMBRIAS P (Manose-resistentes / operon pap): Ligam-se especificamente ao dímero Gal(alfa 1-4)Gal (alfa-D-galactopiranosil-beta-D-galactopiranosídeo) presente nos glicosfingolipídeos do grupo sanguíneo P expressos no epitélio tubular e parênquima renal. A adesão mediada por fímbrias P permite que a bactéria ascenda contra o fluxo da urina pelo ureter e resista à descamação, sendo o fator patognomônico de colonização renal e indução da cascata inflamatória da PIELONEFRITE AGUDA.',
    comentariosAlternativas: {
      A: 'Correta. Fímbrias 1 ligam-se à manose vesical (cistite); fímbrias P ligam-se a receptores no parênquima renal (pielonefrite).',
      B: 'Incorreta. Fímbrias P são organelas bacterianas clássicas de adesão da E. coli uropatogênica.',
      C: 'Incorreta. Fímbrias são estruturas de aderência essencial para a sobrevivência bacteriana na bexiga.',
      D: 'Incorreta. A locomoção é realizada pelos flagelos; as fímbrias desempenham função estritamente de adesina/ligante tecidual.',
    },
  },
  {
    id: 'ped-itu-013',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Proteus mirabilis - Urease, Alcalinização Urinária e Cálculos de Estruvita',
    isRevisao: false,
    enunciado:
      'Menino de 2 anos apresenta infecção urinária febril de repetição. O EAS revela pH urinário persistentemente alcalino (pH = 8,5), densidade 1.020, piúria acentuada e presença de cristais em "tampa de caixão" (fosfato triplo). A urocultura isola Proteus mirabilis > 100.000 UFC/mL. A ultrassonografia de rins e vias urinárias revela massa calcificada obstrutiva preenchendo a pelve renal direita e cálices (cálculo coraliforme). A fisiopatologia dessa complicação litiásica está diretamente relacionada a qual propriedade enzimática do Proteus mirabilis?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Produção potente da enzima UREASE, que cliva a ureia em amônia e gás carbônico; a amônia liberada alcaliniza fortemente a urina (pH > 7,5 - 8,0), diminuindo a solubilidade de íons e promovendo a precipitação de cálculos de fosfato de magnésio e amônio (estruvita) e apatita carbonato.',
      },
      {
        id: 'B',
        texto:
          'Secreção de lipase ácida gástrica que dissolve o urotélio e calcifica o cálcio por saponificação intravascular.',
      },
      {
        id: 'C',
        texto:
          'Inibição da aldosterona suprarrenal com acúmulo de ácido úrico puro nos túbulos coletores distais.',
      },
      {
        id: 'D',
        texto:
          'Produção maciça de imunoglobulina IgA monomérica que se solidifica em pedras cristalinas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Proteus mirabilis (e outras bactérias como Klebsiella, Pseudomonas e Morganella morganii) é uma bactéria produtora de UREASE de alta atividade. A enzima urease catalisa a hidrólise da ureia urinária segundo a reação: Ureia + H2O -> 2 NH3 (amônia) + CO2.\nA amônia combina-se com íons hidrogênio para formar amônio (NH4+), consumindo prótons e provocando ELEVAÇÃO EXPRESSIVA DO pH URINÁRIO (geralmente pH > 7,5 a 8,5 - urina extremamente alcalina).\nNesse ambiente alcalino, os fosfatos tornam-se insolúveis e precipitam na presença de magnésio e amônio, formando cristais característicos de FOSFATO TRIPLO (fosfato de magnésio e amônio ou ESTRUVITA) e fosfato de cálcio (carbonato-apatita). Esses cristais agregam-se sobre a matriz orgânica bacteriana e crescem rapidamente, moldando-se ao sistema coletor intrarrenal sob a forma de CÁLCULOS CORALIFORMES ("staghorn calculi").',
    comentariosAlternativas: {
      A: 'Correta. A urease cliva a ureia em amônia, alcaliniza a urina e precipita cálculos de estruvita (coraliformes).',
      B: 'Incorreta. Mecanismo inexistente; a estruvita decorre da hidrólise bacteriana da ureia.',
      C: 'Incorreta. Cálculos por Proteus são de estruvita alcalina, e não de ácido úrico (que se formam em urina ácida).',
      D: 'Incorreta. IgA não forma cálculos urinários estruturais.',
    },
  },
  {
    id: 'ped-itu-014',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Proteus mirabilis e Meninos Não Circuncidados',
    isRevisao: false,
    enunciado:
      'Estudos epidemiológicos e clínicos demonstram que as infecções do trato urinário causadas por Proteus mirabilis acometem com frequência desproporcionalmente maior os lactentes e meninos do sexo masculino com prepúcio íntegro (não circuncidados). A explicação anatômica e microbiológica para essa associação é:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O espaço prepucial úmido e o esmegma subprepucial em meninos não circuncidados atuam como reservatório ecológico preferencial para colonização aderente por Proteus mirabilis através de suas fímbrias específicas, facilitando a ascensão para a uretra anterior.',
      },
      {
        id: 'B',
        texto:
          'O prepúcio produz anticorpos que matam todas as bactérias, exceto o Proteus que é imune ao sistema complemento.',
      },
      {
        id: 'C',
        texto:
          'Meninos não circuncidados não possuem uretra membranosa, facilitando a passagem bacteriana direta.',
      },
      {
        id: 'D',
        texto:
          'O Proteus mirabilis infecta apenas o tecido muscular do escroto, sem envolvimento da urina.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Enquanto a Escherichia coli é o uropatógeno predominante em ambos os sexos, o Proteus mirabilis tem uma prevalência consideravelmente mais expressiva em MENINOS NÃO CIRCUNCIDADOS. A face mucosa interna do prepúcio possui receptores para fímbrias adesivas do Proteus. A estase de esmegma, a descamação celular e a umidade do saco prepucial criam um microambiente ideal para a colonização e replicação bacteriana sob o prepúcio íntegro. Essa colonização prepucial funciona como um inóculo primário que ascende facilmente pelo meato uretral em direção à bexiga. Em meninos circuncidados ou submetidos a postectomia, a eliminação do saco prepucial reduz em mais de 90% a colonização por Proteus mirabilis e o risco global de ITU no primeiro ano de vida.',
    comentariosAlternativas: {
      A: 'Correta. O saco prepucial e esmegma funcionam como reservatório ecológico que favorece a colonização e ascensão de Proteus.',
      B: 'Incorreta. O prepúcio não produz anticorpos seletivos nem esteriliza o meato uretral.',
      C: 'Incorreta. A anatomia uretral é idêntica em circuncidados e não circuncidados.',
      D: 'Incorreta. O Proteus mirabilis é clássico patógeno urológico luminal, colonizando a urina e o urotélio.',
    },
  },
  {
    id: 'ped-itu-015',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Klebsiella pneumoniae em Lactentes Jovens e Resistência Intrínseca',
    isRevisao: false,
    enunciado:
      'Lactente de 2 meses, com histórico de prematuridade e internação de 20 dias em UTI neonatal com antibioticoterapia de amplo espectro no período neonatal, é internado com febre e pielonefrite aguda. A urocultura por sondagem vesical revela crescimento de Klebsiella pneumoniae > 100.000 UFC/mL. O antibiograma revela resistência à ampicilina e sensibilidade à cefotaxima e amicacina. A respeito das particularidades microbiológicas da Klebsiella pneumoniae em infecções urinárias pediátricas, assinale a opção correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A Klebsiella pneumoniae é uma enterobactéria capsulada com frequente resistência intrínseca à ampicilina (devido à produção constitutiva cromossômica de beta-lactamase da classe SHV-1), mais comum em lactentes jovens com fatores de risco como hospitalização prévia, uso de antibióticos ou malformações do trato urinário.',
      },
      {
        id: 'B',
        texto:
          'A Klebsiella pneumoniae é uma bactéria anaeróbia estrita que só cresce no interior de cistos renais fechados sem contato com a urina.',
      },
      {
        id: 'C',
        texto:
          'A resistência da Klebsiella à ampicilina decorre de sua parede celular composta exclusivamente de celulose vegetal.',
      },
      {
        id: 'D',
        texto:
          'O tratamento de escolha para infecções por Klebsiella é sempre a penicilina G cristalina isolada por 21 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Klebsiella pneumoniae é o segundo bacilo Gram-negativo mais frequente em ITU comunitária e hospitalar na pediatria (5% a 15% dos casos). Características de alto rendimento para provas:\n1) Fatores de risco: lactentes no primeiro trimestre de vida, histórico de prematuridade, internação em berçário/UTI neonatal, antibioticoterapia prévia e presença de anomalias congênitas do trato urinário (CAKUT);\n2) Fator de virulência: cápsula polissacarídica espessa e viscosa (colônias mucóides), que inibe a fagocitose mediada por neutrófilos e a lise pelo complemento;\n3) Perfil de resistência intrínseca: quase todas as cepas de Klebsiella pneumoniae possuem genes cromossômicos que codificam uma beta-lactamase (tipicamente SHV-1), tornando a espécie NATURALMENTE RESISTENTE À AMPICILINA, amoxicilina pura e ticarcilina. Por isso, aminopenicilinas sem inibidor nunca devem ser usadas empiricamente contra Klebsiella.',
    comentariosAlternativas: {
      A: 'Correta. Bacilo Gram-negativo capsulado, com resistência intrínseca à ampicilina por beta-lactamase cromossômica SHV-1.',
      B: 'Incorreta. A Klebsiella é um bacilo Gram-negativo anaeróbio facultativo de fácil crescimento em meios de urocultura comuns.',
      C: 'Incorreta. Bactérias possuem peptideoglicano na parede celular, não celulose.',
      D: 'Incorreta. A penicilina G é completamente inativa contra Klebsiella.',
    },
  },
  {
    id: 'ped-itu-016',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Enterococcus faecalis - Resistência Intrínseca a Cefalosporinas',
    isRevisao: false,
    enunciado:
      'Lactente de 1 ano e 2 meses com bexiga neurogênica e cateterismo vesical intermitente apresenta febre de 38,9 °C e piora da espasticidade. O médico plantonista inicia empiricamente ceftriaxona venosa (cefalosporina de 3ª geração). No 3º dia de internação, a criança persiste febril e toxêmica. O laudo definitivo da urocultura é liberado com isolamento de Enterococcus faecalis > 100.000 UFC/mL sensível a ampicilina. Por qual razão farmacológica e microbiológica a ceftriaxona falhou no tratamento desta paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Os enterococos (Enterococcus faecalis e E. faecium) apresentam RESISTÊNCIA INTRÍNSECA ABSOLUTA a todas as cefalosporinas (de 1ª, 2ª, 3ª, 4ª e 5ª gerações), devido à baixa afinidade de suas proteínas ligadoras de penicilina (PBPs) pelas cefalosporinas; a droga de escolha de primeira linha para cepas sensíveis é a ampicilina.',
      },
      {
        id: 'B',
        texto:
          'A ceftriaxona é uma droga ativa apenas contra vírus e parasitas intestinais, sem ação contra bactérias.',
      },
      {
        id: 'C',
        texto:
          'O Enterococcus faecalis degrada a ceftriaxona através de fotossíntese anaeróbica reversa.',
      },
      {
        id: 'D',
        texto:
          'A ceftriaxona é inativada pelo cloreto de sódio presente na urina de lactentes maiores de 6 meses.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Este é um dos conceitos de farmacologia e microbiologia clínica mais cobrados em provas de Residência Médica:\nREGRA DE OURO: OS ENTEROCOCOS SÃO INTRINSECAMENTE RESISTENTES A TODAS AS CEFALOSPORINAS.\nNão importa se a cefalosporina é de primeira geração (cefalexina, cefazolina), segunda (cefuroxima), terceira (ceftriaxona, cefotaxima) ou quarta geração (cefepime). Os enterococos produzem PBPs (especialmente PBP4 e PBP5) com afinidade extremamente baixa por cefalosporinas. Portanto, o uso de ceftriaxona como monoterapia em ITU por Enterococcus resulta em falha terapêutica completa e persistência da febre/bacteremia.\nTratamento correto: Para Enterococcus faecalis suscetível, a droga de escolha é a AMPICILINA (ou amoxicilina oral se ITU baixa não complicada). Em casos de resistência à ampicilina ou sepse grave associada, utiliza-se vancomicina ou linezolida.',
    comentariosAlternativas: {
      A: 'Correta. Enterococos têm resistência intrínseca a todas as cefalosporinas por baixa afinidade das PBPs; tratar com ampicilina.',
      B: 'Incorreta. A ceftriaxona é um antibiótico beta-lactâmico com amplo espectro contra bactérias, sem ação sobre vírus.',
      C: 'Incorreta. Mecanismo absurdo sem qualquer fundamento biológico.',
      D: 'Incorreta. A ceftriaxona atua perfeitamente no trato urinário contra bactérias sensíveis, mas não contra enterococos.',
    },
  },
  {
    id: 'ped-itu-017',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Staphylococcus saprophyticus em Adolescentes após Sexarca',
    isRevisao: false,
    enunciado:
      'Adolescente de 15 anos, previamente hígida, procura atendimento na Unidade Básica de Saúde queixando-se de disúria intensa, polaciúria, queimação uretral e sensação de esvaziamento incompleto há 2 dias. Nega febre, corrimento vaginal ou dor lombar. Informa início recente de vida sexual ativa ("cistite da lua de mel"). O EAS revela pH 6,0, esterase leucocitária positiva e nitrito negativo. A urocultura revela coco Gram-positivo agrupado em cachos, catalase-positivo, coagulase-negativo e RESISTENTE À NOVOBIOCINA, com contagem de 80.000 UFC/mL. O agente etiológico provável e sua sensibilidade habitual são:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Staphylococcus saprophyticus; uropatógeno frequente em adolescentes e mulheres jovens após o início de atividade sexual, caracterizado microbiologicamente pela resistência intrínseca à novobiocina.',
      },
      {
        id: 'B',
        texto:
          'Streptococcus pyogenes; coco associado à glomerulonefrite difusa aguda pós-estreptocócica sem tropismo urinário.',
      },
      {
        id: 'C',
        texto:
          'Staphylococcus aureus com resistência mecânica a sabonetes íntimos bactericidas.',
      },
      {
        id: 'D',
        texto:
          'Neisseria gonorrhoeae transmitida exclusivamente por alimentos contaminados na infância.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Staphylococcus saprophyticus é a segunda causa mais frequente de cistite aguda em adolescentes e mulheres jovens sexualmente ativas (respondendo por até 10% a 15% dos casos nesta faixa etária), sendo classicamente conhecido pelo epônimo de "cistite da lua de mel" (a fricção mecânica do ato sexual facilita a ascensão a partir da microbiota perineal/vaginal colonizada).\nCaracterísticas microbiológicas de prova:\n- Coco Gram-positivo agrupado em cachos;\n- Catalase positiva (diferencia de Streptococcus);\n- Coagulase negativa (diferencia de Staphylococcus aureus);\n- RESISTENTE À NOVOBIOCINA em teste de difusão em disco (esta prova bioquímica diferencia o S. saprophyticus de todos os outros estafilococos coagulase-negativos como o S. epidermidis, que são sensíveis à novobiocina);\n- Nitrito negativo (não produz nitrato-redutase);\n- Habitualmente muito sensível a nitrofurantoína, cotrimoxazol (SMX-TMP) e fluoroquinolonas.',
    comentariosAlternativas: {
      A: 'Correta. Staphylococcus saprophyticus: coagulase-negativo e resistente à novobiocina, frequente após sexarca.',
      B: 'Incorreta. Streptococcus pyogenes é catalase-negativo e não causa cistite comunitária aguda com resistência a novobiocina.',
      C: 'Incorreta. Staphylococcus aureus é coagulase-positivo e raro como causa primária de cistite não complicada.',
      D: 'Incorreta. Neisseria gonorrhoeae é diplococo Gram-negativo intracelular sexualmente transmissível.',
    },
  },
  {
    id: 'ped-itu-018',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Bacteriúria Assintomática na Infância - Conduta Não Farmacológica',
    isRevisao: false,
    enunciado:
      'Menina de 5 anos de idade comparece à consulta de rotina sem qualquer queixa clínica. Em exames laboratoriais escolares de rotina colhidos por jato médio, a urocultura revelou crescimento de 100.000 UFC/mL de Escherichia coli multissensível. O EAS revelou ausência de leucócitos (leucócitos < 2/campo), esterase leucocitária negativa e nitrito positivo. A criança é ativa, brinca normalmente, sem febre, disúria, enurese ou dores abdominais, com crescimento e desenvolvimento nos percentis ideais. O exame físico é rigorosamente normal. De acordo com as diretrizes internacionais da Sociedade de Doenças Infecciosas da América (IDSA) e da SBP sobre BACTERIÚRIA ASSINTOMÁTICA em crianças saudáveis, qual é a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'NÃO prescrever antibioticoterapia; a bacteriúria assintomática em crianças saudáveis sem malformações do trato urinário tem caráter benigno, não causa cicatrizes renais ou insuficiência renal e atua como fator de proteção biológica contra cepas uropatogênicas mais virulentas; o tratamento com antibióticos é prejudicial porque seleciona bactérias multirresistentes.',
      },
      {
        id: 'B',
        texto:
          'Internar imediatamente para terapia antibiótica tripla intravenosa até a urocultura negativar.',
      },
      {
        id: 'C',
        texto:
          'Indicar profilaxia cirúrgica com ressecção profilática da bexiga urinária.',
      },
      {
        id: 'D',
        texto:
          'Administrar nitrofurantoína por 6 meses consecutivos com monitorização diária do sedimento urinário.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A BACTERIÚRIA ASSINTOMÁTICA (presença de contagem significativa de bactérias na urina na ausência total de sintomas clínicos sistêmicos ou do trato urinário e sem inflamação/piúria significativa) é uma condição benigna encontrada em cerca de 1% a 2% das meninas pré-escolares saudáveis.\nGrandes estudos de seguimento prospectivo comprovaram que a bacteriúria assintomática:\n1) NÃO causa dano ou cicatriz no parênquima renal;\n2) NÃO compromete a função renal a longo prazo;\n3) Cepas que causam bacteriúria assintomática são tipicamente bactérias comensais de baixa virulência que competem por nutrientes e impedem a colonização do urotélio por cepas de E. coli uropatogênicas virulentas dotadas de fímbrias P (efeito protetor biológico).\nO uso de antibióticos para erradicar a bacteriúria assintomática NÃO previne ITUs sintomáticas futuras, erradica a cepa protetora e seleciona uropatógenos multirresistentes altamente agressivos. Portanto, A CONDUTA É NÃO TRATAR.',
    comentariosAlternativas: {
      A: 'Correta. Bacteriúria assintomática em crianças saudáveis não deve ser tratada com antibióticos.',
      B: 'Incorreta. Prescrever antibióticos intravenosos em paciente hígido assintomático é má prática clínica.',
      C: 'Incorreta. Conduta mutiladora desprovida de qualquer fundamento científico.',
      D: 'Incorreta. Quimioprofilaxia crônica seleciona cepas bacterianas resistentes e não traz benefícios na bacteriúria assintomática.',
    },
  },
  {
    id: 'ped-itu-019',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Urocultura Polimicrobiana - Conceito de Contaminação da Amostra',
    isRevisao: false,
    enunciado:
      'Lactente de 6 meses com febre de 38,4 °C há 1 dia realizou urocultura por cateterismo vesical. O laudo laboratorial descreve: "Crescimento polimicrobiano com isolamento de Escherichia coli (30.000 UFC/mL), Enterococcus faecalis (20.000 UFC/mL) e Corynebacterium sp. (10.000 UFC/mL)". Diante de uma urocultura com isolamento de 3 ou mais agentes bacterianos em paciente pediátrico, a interpretação correta e a conduta recomendada são:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O crescimento polimicrobiano indica quase invariavelmente contaminação externa da amostra por flora perineal, fecal ou cutânea durante o procedimento de coleta ou transporte; o laudo deve ser considerado inválido e a coleta deve ser repetida com técnica rigorosa se a suspeita clínica de ITU persistir.',
      },
      {
        id: 'B',
        texto:
          'Trata-se de infecção polimicrobiana sinérgica de altíssima letalidade que exige prescrição de 4 antibióticos simultâneos.',
      },
      {
        id: 'C',
        texto:
          'O resultado confirma tuberculose urogenital congênita avançada.',
      },
      {
        id: 'D',
        texto:
          'Prescrever apenas antifúngico oral por 30 dias para evitar invasão micótica dos rins.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As infecções do trato urinário na infância são quase invariavelmente MONOMICROBIANAS (causadas por uma única espécie bacteriana que ascendeu e proliferou no trato urinário). O isolamento de flora polimicrobiana (crescimento de 2, 3 ou mais espécies bacterianas diferentes na mesma amostra de urocultura) é o indicador laboratorial clássico de CONTAMINAÇÃO EXTERNA da amostra.\nA contaminação pode decorrer de:\n1) Antissepsia perineal inadequada antes do cateterismo;\n2) Contato acidental da sonda uretral com os grandes lábios, prepúcio ou região perianal durante a introdução;\n3) Atraso no transporte da urina mantida em temperatura ambiente, permitindo proliferação de bactérias saprófitas ambientais.\nConduta: Desconsiderar o laudo para início de tratamentos agressivos e recoletar a amostra com técnica estéril meticulosa se o paciente continuar sintomático.',
    comentariosAlternativas: {
      A: 'Correta. Cultura com 3 agentes representa contaminação da amostra; recoletar se a suspeita clínica persistir.',
      B: 'Incorreta. ITUs em crianças saudáveis não são infecções sinérgicas polimicrobianas; trata-se de contaminação.',
      C: 'Incorreta. Tuberculose urogenital é causada pelo bacilo de Koch (M. tuberculosis), identificado por coloração de Ziehl-Neelsen e cultura de Lowenstein-Jensen.',
      D: 'Incorreta. Nenhuma levedura foi isolada no exame.',
    },
  },
  {
    id: 'ped-itu-020',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Punção Suprapúbica Guiada por Ultrassom (POCUS)',
    isRevisao: false,
    enunciado:
      'No setor de emergência pediátrica, um residente de pediatria se prepara para realizar punção suprapúbica em um lactente de 2 meses com suspeita de urossepse. O preceptor orienta utilizar o aparelho de ultrassonografia portátil à beira do leito (POCUS) para localizar a bexiga antes da punção. Qual é o principal benefício técnico e de segurança comprovado da ultrassonografia prévia na punção suprapúbica em pediatria?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Confirmar o volume urinário e o enchimento vesical adequado, evitando a "punção branca" (bexiga vazia) e prevenindo acidentes de punção em alças intestinais circundantes, elevando a taxa de sucesso do procedimento para mais de 90-95%.',
      },
      {
        id: 'B',
        texto:
          'Esterilizar a pele do abdome por meio das ondas de ultrassom de alta frequência dispensando o uso de antissépticos.',
      },
      {
        id: 'C',
        texto:
          'Identificar a presença de bactérias individuais nadando na urina antes de colher a cultura.',
      },
      {
        id: 'D',
        texto:
          'Destruir cálculos renais por ondas de choque acústico no momento do diagnóstico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A punção suprapúbica às cegas (baseada apenas em palpação/percussão da bexiga 1 a 2 cm acima da sínfise púbica) apresenta uma taxa de falha (punção seca ou "punção branca") que pode chegar a 40% a 50%, principalmente porque os lactentes urinam reflexamente ao menor estímulo tátil ou de desnudamento da genitália.\nA utilização do ultrassom à beira do leito (POCUS - Point-of-Care Ultrasound):\n1) Permite visualizar diretamente a bexiga distendida (imagem anecoica arredondada no hipogástrio) e estimar o volume de urina presente;\n2) Confirma a janela acústica livre de interposição de alças intestinais;\n3) Guia a profundidade e a angulação da agulha em tempo real;\n4) Aumenta a taxa de sucesso na primeira tentativa para > 90% a 95%, reduzindo o desconforto da criança e as complicações (como hematoma de parede ou punção intestinal acidental).',
    comentariosAlternativas: {
      A: 'Correta. POCUS confirma repleção vesical, evita punção branca e lesão de alças intestinais, elevando o sucesso para > 90%.',
      B: 'Incorreta. Ultrassom diagnóstico não possui ação bactericida e a antissepsia cirúrgica estéril com clorexidina é mandatória.',
      C: 'Incorreta. Bactérias possuem tamanho micrométrico, sendo totalmente invisíveis ao ultrassom convencional.',
      D: 'Incorreta. POCUS diagnóstico não realiza litotripsia por ondas de choque.',
    },
  },
  {
    id: 'ped-itu-021',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Piúria Estéril em Doença de Kawasaki vs Pielonefrite',
    isRevisao: false,
    enunciado:
      'Lactente de 1 ano e 4 meses, sexo masculino, apresenta febre de 39 °C há 6 dias consecutivos. Ao exame: irritabilidade intensa, hiperemia conjuntival bilateral não exsudativa, lábios ressecados e fissurados com língua em framboesa, exantema polimorfo no tronco e edema indurado de mãos e pés. Um exame de urina tipo 1 (EAS) colhido por cateterismo revelou: 45 leucócitos por campo de grande aumento (piúria evidente), esterase leucocitária positiva e nitrito negativo. A urocultura colhida no mesmo momento não apresentou crescimento bacteriano após 48 e 72 horas de incubação. Esse achado laboratorial e o diagnóstico subjacente correspondem a:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Piúria estéril associada à Doença de Kawasaki; decorre de vasculite com uretrite estéril e nefrite tubulointersticial leve desencadeada pela inflamação sistêmica, sendo um dos achados laboratoriais clássicos de suporte ao diagnóstico.',
      },
      {
        id: 'B',
        texto:
          'Infecção urinária fúngica multirresistente por Candida auris que exige nefrectomia de urgência.',
      },
      {
        id: 'C',
        texto:
          'Erro grosseiro do laboratório que esqueceu de inocular as placas de cultura.',
      },
      {
        id: 'D',
        texto:
          'Tétano infantil generalizado por perda de barreira da mucosa uretral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A PIÚRIA ESTÉRIL (presença de leucocitúria significativa no EAS com urocultura estéril) é uma das manifestações laboratoriais mais clássicas e traiçoeiras da DOENÇA DE KAWASAKI (uma vasculite de médios vasos da infância).\nCerca de 30% a 40% das crianças com Doença de Kawasaki apresentam piúria estéril. A patogênese envolve uretrite estéril secundária à vasculite dos vasos da mucosa uretral e nefrite intersticial leve. Frequentemente esses pacientes recebem diagnóstico errôneo de "infecção urinária" e recebem antibióticos ineficazes enquanto a febre persiste, atrasando o diagnóstico correto e o início oportuno de Imunoglobulina Humana Intravenosa (IGIV) e AAS para prevenir aneurismas coronarianos.\nDiante de um lactente com febre prolongada (≥ 5 dias), manifestações orais/oculares e piúria estéril, o pediatra deve sempre suspeitar de Kawasaki.',
    comentariosAlternativas: {
      A: 'Correta. Piúria estéril é clássica na Doença de Kawasaki por vasculite/uretrite inflamatória estéril.',
      B: 'Incorreta. O quadro clínico é exuberante para Doença de Kawasaki (vasculite sistêmica), sem sinais de candidíase invasiva renal.',
      C: 'Incorreta. A urocultura é verdadeiramente estéril na inflamação do Kawasaki.',
      D: 'Incorreta. O tétano cursa com contraturas musculares e hipertonia (trismo), sem relação com piúria estéril.',
    },
  },
  {
    id: 'ped-itu-022',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Fungúria e Candida albicans no Trato Urinário Pediátrico',
    isRevisao: false,
    enunciado:
      'Recém-nascido prematuro extremo de 26 semanas de gestação, pesando 750 g, encontra-se no 28º dia de vida na UTI neonatal. Está em uso de cateter venoso central, nutrição parenteral total, cateter vesical de demora e já recebeu cursos prolongados de vancomicina, meropenem e amicacina para tratar sepse tardia. Desenvolve instabilidade térmica, apneias e plaquetopenia. A urocultura colhida estéril revela crescimento de Candida albicans com contagem de 50.000 UFC/mL. O ultrassom de rins e vias urinárias afasta "bola fúngica" (micetoma) em pelve renal. A respeito da fungúria em neonatos de alto risco, qual é a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tratar como candidíase sistêmica/renal invasiva; remover ou trocar o cateter vesical e iniciar antifúngico sistêmico com Fluconazol intravenoso (ou Anfotericina B desoxicolato se houver disfunção renal ou envolvimento do parênquima com bola fúngica), além de investigar candidíase disseminada com ecocardiograma e fundoscopia ocular.',
      },
      {
        id: 'B',
        texto:
          'Ignorar o resultado, pois a presença de leveduras na urina de prematuros é um achado normal que melhora com banho de assento.',
      },
      {
        id: 'C',
        texto:
          'Prescrever apenas ampicilina em alta dose por 21 dias para competir com o fungo.',
      },
      {
        id: 'D',
        texto:
          'Realizar lavagem vesical contínua com hipoclorito de sódio concentrado através do cateter de demora.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Em recém-nascidos prematuros extremos em UTI neonatal, a presença de fungúria (Candida albicans ou Candida parapsilosis) NUNCA deve ser considerada mera colonização benigna. Os fatores de risco clássicos presentes no caso incluem: prematuridade extrema, cateter venoso central, nutrição parenteral prolongada, sonda vesical de demora e uso prévio de antibióticos de amplo espectro.\nA fungúria no neonato quase sempre reflete disseminação hematogênica com envolvimento renal parenquimatoso ou infecção do trato urinário com alto risco de bacteremia/candidemia secundária. A conduta mandatória inclui:\n1) Troca/remoção do cateter vesical se possível;\n2) Início imediato de antifúngico sistêmico (Fluconazol venoso ou Anfotericina B deoxicolato - lembrar que a anfotericina desoxicolato atinge excelentes níveis no parênquima renal);\n3) Rastreio de candidíase invasiva sistêmica: fundoscopia (coriorretinite por Candida), ecocardiograma (vegetações endocárdicas) e ultrassom de SNC.',
    comentariosAlternativas: {
      A: 'Correta. Fungúria em neonato extremo exige remoção de sonda, antifúngico sistêmico e rastreio de candidíase disseminada.',
      B: 'Incorreta. Fungúria em prematuros em UTI acarreta altíssima mortalidade se negligenciada.',
      C: 'Incorreta. Antibióticos bacterianos são inertes contra fungos e agravam a disbiose.',
      D: 'Incorreta. Irrigação com hipoclorito causaria cistite química corrosiva e perfuração vesical.',
    },
  },
  {
    id: 'ped-itu-023',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Pseudo-Hematúria e Infarto Úrico Neonatal ("Tijolo na Fralda")',
    isRevisao: false,
    enunciado:
      'Mãe primípara traz à consulta de puericultura seu recém-nascido de 4 dias de vida em aleitamento materno exclusivo. Mostra, em pânico, a fralda do bebê que apresenta uma mancha alaranjada/avermelhada de aspecto pulverulento, acreditando tratar-se de "sangue na urina por infecção urinária grave". Ao exame físico: recém-nascido hígido, ativo, afebril, corado, hidratado, abdome flácido sem massas, genitália masculina sem alterações. O pediatra realiza o diagnóstico diferencial correto. Qual é a causa mais comum desse achado nos primeiros dias de vida?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Precipitação fisiológica de cristais de urato amorfo ("infarto úrico do recém-nascido" ou "mancha em pó de tijolo"), evento comum e benigno na primeira semana de vida decorrente da excreção transitória de ácido úrico concentrado na urina neonatal, dispensando exames invasivos ou antibióticos.',
      },
      {
        id: 'B',
        texto:
          'Pielonefrite aguda hemorrágica por Proteus mirabilis que exige urografia excretora com contraste iodado.',
      },
      {
        id: 'C',
        texto:
          'Trombose aguda bilateral das veias renais com infarto hemorrágico parenquimatoso total.',
      },
      {
        id: 'D',
        texto:
          'Trauma perineal grave decorrente do corte do cordão umbilical.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A mancha avermelhada ou alaranjada na fralda do recém-nascido nos primeiros dias de vida é uma queixa extremamente frequente em consultas de puericultura e no pronto-socorro infantil. É conhecida como MANCHA EM PÓ DE TIJOLO (ou infarto úrico neonatal benigno).\nFisiopatologia: O feto e o recém-nascido possuem elevada taxa de turnover celular e excreção renal de ácido úrico. Nos primeiros 3 a 5 dias de vida, enquanto a apojadura materna está se consolidando e a ingestão de colostro tem volume modesto, a urina do bebê pode ficar fisiologicamente concentrada. O ácido úrico precipita na fralda sob a forma de cristais de URATO AMORFO com coloração avermelhada/alaranjada. Não há hemácias ao microscópio (trata-se de pseudo-hematúria), o RN encontra-se perfeitamente hígido e o quadro desaparece espontaneamente com o aumento do volume de leite ingerido nos dias seguintes. Conduta: Tranquilizar a família e orientar amamentação sob livre demanda.',
    comentariosAlternativas: {
      A: 'Correta. Cristais de urato amorfo fisiológicos na 1ª semana de vida; condição benigna que dispensa intervenções.',
      B: 'Incorreta. Não há infecção urinária ou litíase em RN assintomático na primeira semana.',
      C: 'Incorreta. Trombose de veia renal cursa com massa palpável em flanco, hematúria franca, trombocitopenia e estado grave.',
      D: 'Incorreta. O coto umbilical situa-se no abdome anterior e não tem relação com sangramento uretral.',
    },
  },
  {
    id: 'ped-itu-024',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Tempo e Transporte da Amostra de Urina para Urocultura',
    isRevisao: false,
    enunciado:
      'Uma amostra de urina colhida por cateterismo vesical em uma UBS não pôde ser semeada imediatamente no laboratório por falta de motoboy para transporte. De acordo com as boas práticas laboratoriais em microbiologia clínica e as diretrizes do Ministério da Saúde / Sociedade Brasileira de Patologia Clínica, qual é o tempo máximo em temperatura ambiente e a orientação correta de conservação para evitar a proliferação bacteriana in vitro e resultados falso-positivos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A amostra deve ser processada em até 1 a 2 horas se mantida em temperatura ambiente; caso o transporte demore mais que isso, a urina deve ser imediatamente refrigerada a 4 °C (entre 2 °C e 8 °C), podendo ser conservada por no máximo 24 horas antes da semeadura.',
      },
      {
        id: 'B',
        texto:
          'A urina pode permanecer em temperatura ambiente por até 7 dias sem qualquer alteração na contagem de colônias bacterianas.',
      },
      {
        id: 'C',
        texto:
          'A amostra deve ser aquecida em banho-maria a 60 °C para acelerar o crescimento antes de enviar ao laboratório.',
      },
      {
        id: 'D',
        texto:
          'Deve-se congelar a urina a -80 °C com adição de formol a 10% para conservar as bactérias vivas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A urina humana é um excelente meio de cultura líquido para bactérias entéricas. Em temperatura ambiente (20 °C a 25 °C), a cada 20 a 30 minutos a população bacteriana duplica (tempo de geração da Escherichia coli). Portanto, uma amostra contendo inicialmente 1.000 UFC/mL (que seria insignificante ou contaminante) mantida na bancada por 4 horas pode facilmente ultrapassar 100.000 UFC/mL, gerando um FALSO-POSITIVO GROSSEIRO com prescrição indevida de antibióticos.\nNormas técnicas de conservação:\n1) Semeadura imediata em até 1 a 2 HORAS se mantida à temperatura ambiente;\n2) Se houver atraso no transporte/processamento: REFRIGERAÇÃO IMEDIATA A 4 °C (geladeira a 2 °C a 8 °C). O frio desacelera o metabolismo bacteriano e impede a multiplicação celular sem matar os microrganismos, permitindo que a amostra seja conservada por até 24 HORAS com excelente fidedignidade na contagem de colônias.',
    comentariosAlternativas: {
      A: 'Correta. Processamento em até 1-2h à temperatura ambiente ou refrigeração a 4 °C por até 24h para evitar duplicação in vitro.',
      B: 'Incorreta. Horas à temperatura ambiente multiplicam artificialmente as bactérias presentes.',
      C: 'Incorreta. Aquecer a 60 °C pasteuriza a urina e mata as bactérias patogênicas.',
      D: 'Incorreta. O formol é fixador tecidual que mata qualquer microrganismo, inviabilizando a cultura.',
    },
  },
  {
    id: 'ped-itu-025',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Critérios Diagnósticos Consolidados de Pielonefrite Aguda',
    isRevisao: false,
    enunciado:
      'Lactente de 7 meses, sexo feminino, comparece à emergência pediátrica com quadro de febre alta de 39,2 °C há 48 horas, irritabilidade, recusa alimentar e vômitos esporádicos. Ao exame físico: prostrada durante os picos febris, hidratada, sem outros focos aparentes. Urina colhida por cateterismo vesical: EAS com 120.000 leucócitos/mL, esterase leucocitária +++, nitrito positivo; Urocultura em andamento revela crescimento preliminar de bacilos Gram-negativos em cultura pura > 100.000 UFC/mL. De acordo com o consenso da Academia Americana de Pediatria (AAP) e da Sociedade Brasileira de Pediatria (SBP), a confirmação diagnóstica de INFECÇÃO DO TRATO URINÁRIO / PIELONEFRITE em lactentes requer obrigatoriamente a presença de:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tríade clássica composta por: 1) Manifestações clínicas compatíveis (como febre ou dor); 2) Evidência laboratorial de piúria / reação inflamatória no sedimento urinário (leucocitúria ou esterase leucocitária positiva); E 3) Urocultura positiva com crescimento significativo de uropatógeno único colhida por método estéril (cateterismo vesical ou punção suprapúbica).',
      },
      {
        id: 'B',
        texto:
          'Presença exclusiva de urocultura positiva em saco coletor sem leucócitos no EAS e sem febre.',
      },
      {
        id: 'C',
        texto:
          'Cintilografia renal com DMSA alterada antes de qualquer exame de urina.',
      },
      {
        id: 'D',
        texto:
          'Febre isolada de 40 °C com exame de urina e urocultura rigorosamente normais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Para fechar com chave de ouro a fundamentação diagnóstica de ITU em pediatria, o consenso internacional da Academia Americana de Pediatria (AAP 2011/2016) e da Sociedade Brasileira de Pediatria (SBP) estabelece que o diagnóstico de ITU em lactentes e crianças jovens exige a confluência obrigatória de TRÊS ELEMENTOS:\n1) QUADRO CLÍNICO COMPATÍVEL: febre sem sinais localizatórios, irritabilidade, vômitos, recusa alimentar ou queixas miccionais;\n2) EVIDÊNCIA DE PIÚRIA (RESPOSTA INFLAMATÓRIA NO TRATO URINÁRIO): presença de leucocitúria no EAS (≥ 10 leucócitos/campo ou ≥ 10.000 leucócitos/mL) ou esterase leucocitária positiva na fita reagente;\n3) UROCULTURA POSITIVA COLHIDA POR TÉCNICA ESTÉRIL: crescimento de pelo menos 50.000 UFC/mL de patógeno único em urina colhida por cateterismo vesical (ou qualquer crescimento de Gram-negativo em punção suprapúbica).\nA presença de urocultura positiva sem piúria geralmente traduz contaminação ou bacteriúria assintomática; piúria sem urocultura positiva traduz piúria estéril. A associação dos três elementos é a base do diagnóstico seguro.',
    comentariosAlternativas: {
      A: 'Correta. Diagnóstico de ITU exige confluência de clínica + piúria (inflamação urotelial) + urocultura estéril positiva.',
      B: 'Incorreta. Urocultura isolada em saco coletor sem piúria não firma diagnóstico de pielonefrite.',
      C: 'Incorreta. DMSA não é exame inicial para confirmação de ITU aguda.',
      D: 'Incorreta. Febre com urina normal não é infecção do trato urinário.',
    },
  },
  {
    id: 'ped-itu-026',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Diferenciação Clínica - Cistite vs Pielonefrite Aguda',
    isRevisao: false,
    enunciado:
      'Uma menina de 7 anos comparece à UBS queixando-se de dor ao urinar (disúria), aumento da frequência das micções (polaciúria) e dor em baixo ventre (região suprapúbica) há 2 dias. A mãe relata que a criança não teve febre medida, não vomitou e mantém excelente apetite e nível de atividade normal. Ao exame físico: corada, hidratada, afebril (36,5 °C), abdome flácido com discreta dor à palpação profunda em hipogástrio, sem descompressão dolorosa; punho-percussão lombar bilateral indolor (sinal de Giordano negativo). A respeito da diferenciação topográfica das infecções urinárias na infância, assinale a opção correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O quadro clínico é típico de ITU baixa (Cistite aguda), caracterizada por sintomas irritativos vesicais (disúria, polaciúria, urgência miccional) na AUSÊNCIA de febre ou manifestações sistêmicas, indicando infecção restrita à bexiga sem acometimento inflamatório do parênquima renal.',
      },
      {
        id: 'B',
        texto:
          'Trata-se de pielonefrite aguda grave com indicação de internação imediata em UTI pediátrica, pois a ausência de febre é o sinal mais precoce de sepse urológica fulminante.',
      },
      {
        id: 'C',
        texto:
          'A presença de disúria e dor suprapúbica em escolares confirma acometimento exclusivo dos túbulos coletores renais proximais.',
      },
      {
        id: 'D',
        texto:
          'Crianças com sintomas restritos à bexiga devem ser submetidas obrigatoriamente a cintilografia renal estática com DMSA no mesmo dia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A diferenciação topográfica entre ITU baixa (Cistite) e ITU alta (Pielonefrite) é um pilar da prática pediátrica:\n1) CISTITE (ITU baixa): Infecção circunscrita à mucosa da bexiga urinária. Manifesta-se clinicamente por sintomas irritativos urinários baixos — disúria, polaciúria, queimação miccional, urgência, incontinência/enurese secundária e dor suprapúbica. A criança NÃO apresenta febre (ou apresenta no máximo febrícula < 38,0 °C), não há toxemia, não há dor lombar (sinal de Giordano negativo) e os marcadores inflamatórios sistêmicos (PCR, hemograma) encontram-se normais. Não acarreta risco de cicatriz renal parenquimatosa permanente;\n2) PIELONEFRITE (ITU alta): Envolve o parênquima renal e sistema pielocalicinal, cursando com manifestações sistêmicas marcantes: febre alta (≥ 38,5 °C), calafrios, vômitos, dor lombar/flanco, queda do estado geral e elevação expressiva de PCR e leucócitos.',
    comentariosAlternativas: {
      A: 'Correta. Cistite cursa com sintomas irritativos vesicais sem febre ou sinais sistêmicos parenquimatosos.',
      B: 'Incorreta. Quadro clássico de cistite benigna ambulatorial; a ausência de febre e toxemia afasta pielonefrite e sepse.',
      C: 'Incorreta. Disúria e dor em hipogástrio refletem inflamação da bexiga e uretra, não de túbulos renais.',
      D: 'Incorreta. DMSA não é indicado em cistite baixa, pois a bexiga não gera dano parenquimatoso renal.',
    },
  },
  {
    id: 'ped-itu-027',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Pielonefrite em Escolar e Sinal de Giordano',
    isRevisao: false,
    enunciado:
      'Menino de 9 anos é admitido no pronto-socorro com febre de 39,4 °C associada a calafrios intensos, náuseas, anorexia e dor lombar esquerda há 36 horas. Ao exame físico: prostrado durante o pico febril, acianótico, PA normal; a palpação abdominal revela abdome livre, mas a manobra de punho-percussão na loja renal esquerda (com o bordo ulnar da mão sobre o ângulo costovertebral esquerdo) desencadeia dor lancinante e sobressalto do paciente (SINAL DE GIORDANO POSITIVO). Qual é o substrato anatômico e fisiopatológico do sinal de Giordano na pielonefrite aguda?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O parênquima renal em si é desprovido de fibras nociceptivas, mas a reação inflamatória e o edema agudo da pielonefrite distendem a CÁPSULA RENAL e a pelve renal (estruturas densamente inervadas por fibras sensoriais de dor), sendo a percussão transmitida capaz de deflagrar dor intensa no ângulo costovertebral.',
      },
      {
        id: 'B',
        texto:
          'O sinal de Giordano decorre da necrose isquêmica imediata da bexiga urinária que se rompe para o espaço retroperitoneal.',
      },
      {
        id: 'C',
        texto:
          'A dor à punho-percussão é causada exclusivamente por fratura patológica das vértebras lombares por osteomielite bacteriana.',
      },
      {
        id: 'D',
        texto:
          'O sinal de Giordano positivo confirma apendicite retrocecal com peritonite difusa, sem relação com os rins.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O sinal de Giordano (punho-percussão lombar dolorosa) é um dos sinais semiológicos mais clássicos da nefrologia e pediatria. O parênquima renal não possui receptores de dor; entretanto, a CÁPSULA RENAL FIBROSA que envolve o rim e o urotélio da pelve renal possuem rica inervação sensitiva nociceptiva derivada dos segmentos medulares T10 a L1.\nNa PIELONEFRITE AGUDA, o intenso infiltrado inflamatório neutrofílico intraparenquimatoso associado a edema e hiperemia tecidual provoca o aumento do volume renal e a consequente DISTENSÃO ABRUPTA DA CÁPSULA RENAL. Quando o examinador aplica a percussão com o bordo da mão sobre o ângulo costovertebral (entre a 12ª costela e a coluna lombar), a onda mecânica transmitida distende bruscamente a cápsula inflamada, desencadeando dor aguda e nítido reflexo de esquiva (Giordano positivo), confirmando acometimento do trato urinário superior.',
    comentariosAlternativas: {
      A: 'Correta. A dor resulta da distensão da cápsula renal inflamada e ricamente inervada provocada pelo edema da pielonefrite.',
      B: 'Incorreta. A bexiga situa-se no hipogástrio anterior e não gera sinal de Giordano.',
      C: 'Incorreta. O sinal é de dor na loja renal/cápsula renal, não decorrente de fraturas ósseas vertebrais.',
      D: 'Incorreta. Embora apendicite retrocecal possa causar dor em flanco, o sinal de Giordano é clássico da afecção inflamatória renal.',
    },
  },
  {
    id: 'ped-itu-028',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Manifestação Clínica de Pielonefrite em Lactentes - Febre sem Foco',
    isRevisao: false,
    enunciado:
      'Lactente de 6 meses, sexo feminino, previamente hígida, é trazida ao pronto-socorro pelos pais por quadro de febre elevada (39,1 °C) que se repete há 3 dias, associada a irritabilidade ao manuseio, diminuição das mamadas e dois episódios de vômitos alimentares. Não há tosse, coriza, diarreia ou lesões de pele. O exame físico detalhado não identifica focos infecciosos em vias aéreas superiores, pulmões, abdome ou sistema osteoarticular. Diante do quadro clássico de "Febre Sem Sinais de Localização" (FSSL) nessa faixa etária, qual é a principal infecção bacteriana potencialmente grave que deve ser sistematicamente investigada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Infecção do Trato Urinário / Pielonefrite Aguda; lactentes menores de 2 anos com ITU habitualmente NÃO apresentam sintomas urinários localizatórios clássicos, manifestando-se frequentemente apenas com febre sem foco, irritabilidade, vômitos e recusa alimentar.',
      },
      {
        id: 'B',
        texto:
          'Glomerulonefrite membranoproliferativa familiar congênita por autoanticorpos maternos.',
      },
      {
        id: 'C',
        texto:
          'Câncer de bexiga metastático com invasão do plexo braquial bilateral.',
      },
      {
        id: 'D',
        texto:
          'Pneumonia lobar bacteriana sem tosse, cujo diagnóstico é confirmado pela ausência total de estertores.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A INFECÇÃO DO TRATO URINÁRIO (ITU) é a infecção bacteriana grave mais prevalente em lactentes com Febre Sem Foco / Febre sem Sinais de Localização (FSSL), acometendo até 7% a 10% das meninas febris e 2% a 3% dos meninos menores de 1 ano.\nEm lactentes e crianças não verbais, os sintomas clássicos de disúria e polaciúria NUNCA estão presentes ou não podem ser expressos verbalmente. O quadro clínico é inespecífico e constitucional: febre alta isolada, irritabilidade intensa, recusa de mamadas, vômitos e ganho ponderal insuficiente. Por isso, a diretriz da AAP e da SBP estabelece que em todo lactente com febre sem foco aparente após anamnese e exame físico rigorosos, o EXAME DE URINA E UROCULTURA (colhidos por cateterismo vesical) É MANDATÓRIO para afastar pielonefrite aguda.',
    comentariosAlternativas: {
      A: 'Correta. Pielonefrite em lactentes manifesta-se de forma inespecífica como febre sem foco, vômitos e recusa de mamadas.',
      B: 'Incorreta. Patologia glomerular rara que não se apresenta como febre alta aguda isolada no lactente.',
      C: 'Incorreta. Carcinoma urotelial de bexiga é neoplasia de idosos tabagistas, extraordinariamente rara em lactentes.',
      D: 'Incorreta. Na ausência de sintomas respiratórios e taquipneia, pneumonia é improcedente.',
    },
  },
  {
    id: 'ped-itu-029',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Tratamento da Cistite Aguda em Pediatria - Esquemas Orais',
    isRevisao: false,
    enunciado:
      'Menina de 6 anos, continente, com quadro clássico de Cistite Aguda não complicada (disúria, urgência e dor suprapúbica há 24 horas, afebril, bom estado geral), tem EAS colhido por jato médio que confirma piúria (50 leucócitos/campo) e nitrito positivo. A urocultura foi colhida e encaminhada ao laboratório. O pediatra define início imediato de tratamento ambulatorial. De acordo com as diretrizes da SBP para tratamento de CISTITE bacteriana em crianças hígidas, assinale a opção com o antibiótico oral e duração recomendada:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Cefalexina (cefalosporina de 1ª geração) por via oral na dose de 50 a 100 mg/kg/dia (ou Amoxicilina com Clavulanato), com duração habitual de 5 a 7 dias.',
      },
      {
        id: 'B',
        texto:
          'Vancomicina intravenosa associada a Meropenem em ambiente de terapia intensiva por 28 dias.',
      },
      {
        id: 'C',
        texto:
          'Doxiciclina oral em dose única diária por 6 semanas consecutivas.',
      },
      {
        id: 'D',
        texto:
          'Apenas aumento da ingestão de suco de laranja ácido sem qualquer antimicrobiano.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O tratamento da Cistite Aguda não complicada em crianças em idade pré-escolar e escolar é realizado em regime AMBULATORIAL por VIA ORAL. As opções empíricas de primeira linha recomendadas pelas diretrizes pediátricas brasileiras (SBP) incluem:\n1) Cefalexina (cefalosporina de 1ª geração): 50 a 100 mg/kg/dia dividida em 3 ou 4 tomadas (excelente tolerabilidade e boa cobertura de E. coli comunitária);\n2) Amoxicilina com Clavulanato: 40 a 50 mg/kg/dia de amoxicilina dividida de 8/8h ou 12/12h;\n3) Nitrofurantoína: 5 a 7 mg/kg/dia (em 4 tomadas);\n4) Sulfametoxazol-trimetoprima (SMX-TMP): se a taxa local de resistência for conhecida e inferior a 20%.\nA duração preconizada do tratamento na cistite pediátrica é de 5 A 7 DIAS (esquemas ultracurtos de dose única ou 3 dias, embora consagrados em mulheres adultas, apresentam taxas maiores de recidiva em crianças e não são recomendados rotineiramente pela SBP).',
    comentariosAlternativas: {
      A: 'Correta. Cefalexina ou Amoxicilina-clavulanato oral por 5 a 7 dias é o padrão ambulatorial da cistite infantil.',
      B: 'Incorreta. Prescrição de antibióticos de reserva hospitalar para cistite não complicada é iatrogenia gravíssima.',
      C: 'Incorreta. Tetraciclinas são contraindicadas em crianças < 8 anos (manchas dentárias) e inadequadas para cistite comum.',
      D: 'Incorreta. Cistite bacteriana com piúria e nitrito requer antibioticoterapia antimicrobiana apropriada.',
    },
  },
  {
    id: 'ped-itu-030',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Sulfametoxazol-Trimetoprima e Perfil de Resistência Bacteriana',
    isRevisao: false,
    enunciado:
      'Durante uma discussão clínica sobre antimicrobianos no ambulatório de pediatria, discute-se o papel do Sulfametoxazol-Trimetoprima (SMX-TMP / Cotrimoxazol) no tratamento empírico de infecções urinárias comunitárias na infância. A prefeita recomendação da Sociedade Brasileira de Infectologia e da AAP estabelece que o SMX-TMP só deve ser utilizado como terapia empírica de primeira linha se:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A taxa de resistência local comunitária da Escherichia coli ao SMX-TMP for inferior a 20%; em muitas regiões metropolitanas brasileiras, as taxas de resistência ultrapassam 30-40%, limitando seu uso empírico sem antibiograma prévio.',
      },
      {
        id: 'B',
        texto:
          'O paciente apresentar deficiência comprovada de G6PD e icterícia neonatal associada.',
      },
      {
        id: 'C',
        texto:
          'A infecção for causada exclusivamente por Pseudomonas aeruginosa multirresistente.',
      },
      {
        id: 'D',
        texto:
          'A urina estiver completamente alcalina com pH acima de 9,0.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Sulfametoxazol-Trimetoprima (SMX-TMP) foi historicamente o antibiótico de escolha para ITU comunitária. No entanto, o uso disseminado e indiscriminado nas últimas décadas gerou altas taxas de resistência mediada por plasmídeos contendo genes de diidrofolato redutase bacteriana resistente.\nO consenso internacional da Sociedade de Doenças Infecciosas da América (IDSA) e das sociedades de pediatria preconiza a REGRA DO LIMIAR DE 20%:\n- O SMX-TMP só é considerado opção empírica segura de primeira linha em comunidades onde a prevalência de resistência da E. coli uropatogênica seja comprovadamente INFERIOR A 20%.\nEm grande parte do Brasil, inquéritos microbiológicos revelam taxas de resistência da E. coli comunitária ao SMX-TMP que variam de 30% a 50%. Por essa razão, as cefalosporinas de 1ª/2ª geração e amoxicilina-clavulanato tornaram-se as drogas empíricas preferenciais, reservando-se o SMX-TMP para quando o antibiograma comprovar sensibilidade ou para profilaxia.',
    comentariosAlternativas: {
      A: 'Correta. Uso empírico seguro exige resistência local < 20%; no Brasil a resistência frequentemente ultrapassa esse limiar.',
      B: 'Incorreta. Deficiência de G6PD contraindica o SMX-TMP pelo risco de crise hemolítica aguda por estresse oxidativo.',
      C: 'Incorreta. Pseudomonas aeruginosa é intrinsecamente resistente ao SMX-TMP.',
      D: 'Incorreta. O pH alcalino não determina a indicação do SMX-TMP.',
    },
  },
  {
    id: 'ped-itu-031',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Nitrofurantoína na Cistite - Mecanismo e Eficácia Vesical',
    isRevisao: false,
    enunciado:
      'Escolar de 8 anos com cistite aguda de repetição recebe prescrição de Nitrofurantoína por via oral por 5 dias. A mãe lê a bula e pergunta ao médico como esse antibiótico age e por que ele é tão prescrito para infecções da bexiga. Qual é a resposta médica cientificamente correta sobre a farmacodinâmica e ação da Nitrofurantoína?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A nitrofurantoína é reduzida por flavoproteínas bacterianas em intermediários reativos altamente instáveis que atacam o DNA, RNA e proteínas bacterianas; após rápida absorção gastrointestinal, ela é velozmente excretada na urina, atingindo concentrações bactericidas elevadíssimas na LUZ DA BEXIGA com taxas de resistência de E. coli persistentemente muito baixas (< 5%).',
      },
      {
        id: 'B',
        texto:
          'A nitrofurantoína age exclusivamente destruindo o epitélio do estômago para impedir a absorção de glicose.',
      },
      {
        id: 'C',
        texto:
          'É uma droga imunobiológica que induz a produção de anticorpos neutralizantes no baço.',
      },
      {
        id: 'D',
        texto:
          'A nitrofurantoína atua bloqueando a transmissão sináptica nos neurônios motores periféricos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A NITROFURANTOÍNA é um dos quimioterápicos urinários mais eficazes para o tratamento da CISTITE AGUDA e profilaxia de ITU recorrente em crianças continentes. Seu mecanismo de ação é multifatorial: dentro da célula bacteriana, enzimas nitro-redutases reduzem o fármaco a intermediários altamente reativos que danificam simultaneamente o DNA, ribossomos e enzimas da parede bacteriana. Esse ataque a múltiplos alvos celulares explica por que, mesmo após mais de 60 anos de uso clínico contínuo, as taxas de resistência bacteriana da Escherichia coli à nitrofurantoína permanecem excepcionalmente baixas em todo o mundo (geralmente < 2% a 5%). Além disso, a droga não altera significativamente a microbiota intestinal e atinge concentrações maciças na urina vesical.',
    comentariosAlternativas: {
      A: 'Correta. Intermediários reativos que lesam o DNA bacteriano, alta concentração na luz vesical e raríssima resistência da E. coli.',
      B: 'Incorreta. A nitrofurantoína não destrói o estômago nem bloqueia glicose.',
      C: 'Incorreta. Trata-se de antibiótico químico bactericida sintético, não imunobiológico.',
      D: 'Incorreta. Não possui ação bloqueadora neuromuscular.',
    },
  },
  {
    id: 'ped-itu-032',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'ALERTA FARMACOLÓGICO - Contraindicação da Nitrofurantoína na Pielonefrite',
    isRevisao: false,
    enunciado:
      'Lactente de 11 meses comparece à UPA com febre de 39,3 °C há 48 horas, toxemia leve, vômitos e urocultura evidenciando pielonefrite aguda por Escherichia coli com antibiograma multissensível. O médico recém-formado prescreve Nitrofurantoína por via oral e planeja liberar o paciente para casa. A enfermeira alerta o médico sobre a inadequação da prescrição. Por qual motivo farmacocinético formal a NITROFURANTOÍNA É RIGOROSAMENTE CONTRAINDICADA NO TRATAMENTO DA PIELONEFRITE?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A nitrofurantoína possui farmacocinética caracterizada por rápida excreção renal com NÍVEIS SÉRICOS DESPREZÍVEIS e CONCENTRAÇÃO TECIDUAL NULA NO PARÊNQUIMA RENAL; a droga atinge níveis terapêuticos apenas na luz vesical, sendo completamente ineficaz para tratar infecções parenquimatosas renais e predispondo a bacteremia, sepse e formação de cicatrizes renais.',
      },
      {
        id: 'B',
        texto:
          'A nitrofurantoína estimula a replicação da Escherichia coli em até 1.000 vezes quando em contato com o córtex renal.',
      },
      {
        id: 'C',
        texto:
          'A medicação é convertida em veneno de escorpião pelo fígado do lactente febril.',
      },
      {
        id: 'D',
        texto:
          'A nitrofurantoína só pode ser usada em adultos com mais de 80 anos com prótese de quadril.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'ESTE É UM DOS ALERTAS FARMACOLÓGICOS MAIS IMPORTANTES DE TODA A MEDICINA E UMA DAS PEGADINHAS MAIS CLÁSSICAS DE PROVA:\nA NITROFURANTOÍNA É FORMALMENTE CONTRAINDICADA NO TRATAMENTO DA PIELONEFRITE AGUDA E DE QUALQUER ITU FEBRIL!\nFundamento farmacocinético:\nA nitrofurantoína é absorvida no intestino e filtrada pelos glomérulos com velocidade tão acelerada que seus NÍVEIS SÉRICOS SÃO PRATICAMENTE NULOS (indetectáveis no sangue) e seus NÍVEIS NO PARÊNQUIMA RENAL SÃO TOTALMENTE INSUFICIENTES para matar bactérias que invadiram os túbulos, interstício e córtex renal.\nA droga é eficaz estritamente como antisséptico luminal da bexiga urinária (cistite). Tratar uma pielonefrite com nitrofurantoína equivale a deixar a infecção renal sem tratamento algum: a bactéria continuará se multiplicando no parênquima renal, destruindo nefrons, causando cicatrizes renais permanentes e invadindo a circulação sanguínea com choque séptico potencialmente fatal. Na pielonefrite, exigem-se antibióticos com elevada penetração tecidual renal e sérica (cefalosporinas, aminopenicilinas com inibidor, aminoglicosídeos).',
    comentariosAlternativas: {
      A: 'Correta. Nitrofurantoína não atinge níveis teciduais no rim nem no sangue; atua apenas na bexiga, sendo inútil na pielonefrite.',
      B: 'Incorreta. A droga é bactericida na urina vesical, mas não atinge concentração tecidual renal.',
      C: 'Incorreta. Afirmação fantasiosa e sem sentido.',
      D: 'Incorreta. A nitrofurantoína pode ser usada em crianças para cistite e profilaxia, mas nunca para infecção renal alta.',
    },
  },
  {
    id: 'ped-itu-033',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Critérios de Internação na Pielonefrite - Idade Menor de 2 a 3 Meses',
    isRevisao: false,
    enunciado:
      'Lactente jovem de 45 dias de vida (1 mês e meio), nascido a termo, é levado à emergência com febre de 38,5 °C há 12 horas, irritabilidade e recusa parcial do seio materno. A urina colhida por cateterismo vesical revela piúria intensa e a bacterioscopia evidencia bacilos Gram-negativos aos pares. A mãe questiona se não poderia dar antibiótico em gotas em casa para não internar o bebê. Qual é a orientação médica correta baseada nas diretrizes da SBP e da Academia Americana de Pediatria?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A internação hospitalar é MANDATÓRIA; lactentes com menos de 2 a 3 meses de vida com infecção urinária apresentam imaturidade imunológica, alto risco de bacteremia/urosepse secundária (até 10 a 20%), maior prevalência de malformações congênitas do trato urinário associadas e risco elevado de rápida deterioração hemodinâmica, exigindo antibioticoterapia parenteral e monitorização contínua.',
      },
      {
        id: 'B',
        texto:
          'A internação só é indicada para lactentes maiores de 2 anos, podendo o bebê de 45 dias ser tratado com amoxicilina oral domiciliar com retorno em 30 dias.',
      },
      {
        id: 'C',
        texto:
          'Deve-se prescrever ácido acetilsalicílico e orientar repouso domiciliar sem qualquer antibiótico.',
      },
      {
        id: 'D',
        texto:
          'O tratamento correto em menores de 2 meses é a realização imediata de nefrectomia profilática.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A IDADE MENOR QUE 2 A 3 MESES (especialmente no período neonatal e nos primeiros 60 a 90 dias de vida) é um critério absoluto e indiscutível de INTERNAÇÃO HOSPITALAR para qualquer lactente com infecção do trato urinário febril.\nRazões clínicas e fisiopatológicas fundamentais:\n1) Imaturidade do sistema imune humoral e celular (fagocitose subótima, opsonização insuficiente);\n2) Elevada taxa de BACTEREMIA CONCOMITANTE (10% a 20% dos lactentes jovens com ITU têm hemocultura positiva);\n3) Alta frequência de malformações estruturais do trato urinário (CAKUT - como refluxo vesicoureteral grave, estenose de JUP e válvula de uretra posterior);\n4) Risco iminente de evolução fulminante para choque séptico, meningite e lesão renal parenquimatosa irreversível;\n5) Tratamento parenteral inicial obrigatório com ampicilina + aminoglicosídeo (ou cefotaxima).',
    comentariosAlternativas: {
      A: 'Correta. Idade < 2 a 3 meses exige internação obrigatória e antibiótico parenteral por alto risco de urossepse e bacteremia.',
      B: 'Incorreta. Tratamento ambulatorial em menor de 2 meses com ITU febril é conduta de alto risco e contraindicada.',
      C: 'Incorreta. AAS é contraindicado em lactentes febris (risco de Síndrome de Reye) e antibiótico é mandatício.',
      D: 'Incorreta. Conduta cirúrgica absurda para infecção bacteriana médica aguda.',
    },
  },
  {
    id: 'ped-itu-034',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Critérios de Internação - Intolerância Oral e Vômitos Incoercíveis',
    isRevisao: false,
    enunciado:
      'Lactente de 10 meses, sexo masculino, com diagnóstico clínico e laboratorial de pielonefrite aguda (febre de 39,5 °C e urocultura positiva para E. coli), comparece à UPA. A mãe relata que tentou iniciar cefuroxima oral em casa prescrita há 6 horas, mas a criança vomitou todas as 3 tentativas de administração do xarope, além de não conseguir ingerir água ou leite há mais de 12 horas. Ao exame físico: olhos encovados, saliva espessa, turgor cutâneo diminuído e tempo de enchimento capilar de 3 segundos (desidratação clínica evidente). Qual é a conduta médica indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Indicar internação hospitalar imediata para hidratação venosa vigorosa e início de antibioticoterapia parenteral (ex.: Ceftriaxona EV); a intolerância à via oral e a desidratação são critérios formais de internação por impedirem a absorção farmacológica e aumentarem o risco de lesão renal aguda pré-renal.',
      },
      {
        id: 'B',
        texto:
          'Prescrever metoclopramida em alta dose em casa e insistir na via oral com sucos cítricos concentrados.',
      },
      {
        id: 'C',
        texto:
          'Dar alta com receita de nitrofurantoína retal e retorno em 7 dias.',
      },
      {
        id: 'D',
        texto:
          'Suspender qualquer medicação, pois vômitos em lactentes com febre indicam cura espontânea por eliminação de toxinas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A presença de VÔMITOS INCOERCÍVEIS, INTOLERÂNCIA À VIA ORAL e DESIDRATAÇÃO CLÍNICA MODERADA A GRAVE constituem critérios clássicos mandatórios para INTERNAÇÃO HOSPITALAR na pielonefrite aguda em qualquer faixa etária pediátrica.\nSe a criança não tolera a via oral, qualquer antibiótico administrado por boca será regurgitado ou absorvido de forma irregular, resultando em falha terapêutica grave. Além disso, a desidratação diminui a perfusão renal (isquemia medular) potencializando o dano citotóxico da infecção bacteriana sobre os néfrons e precipitando lesão renal aguda (LRA). A internação permite restaurar a volemia por via venosa e administrar antibióticos intravenosos (como Ceftriaxona ou Cefotaxima) com 100% de biodisponibilidade imediata.',
    comentariosAlternativas: {
      A: 'Correta. Vômitos incoercíveis e desidratação exigem internação para hidratação e antibiótico parenteral.',
      B: 'Incorreta. Insistir em via oral domiciliar em lactente desidratado e vomitando atrasa o tratamento e agrava a LRA.',
      C: 'Incorreta. Não existe nitrofurantoína retal e a droga é ineficaz na pielonefrite.',
      D: 'Incorreta. Vômitos na pielonefrite decorrem de íleo reflexo e toxemia sistêmica, exigindo suporte imediato.',
    },
  },
  {
    id: 'ped-itu-035',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Critérios de Internação - Toxemia e Sepse Urológica (Urossepse)',
    isRevisao: false,
    enunciado:
      'Menina de 1 ano e 6 meses com história de febre alta de 40 °C há 2 dias é admitida na sala de emergência pediátrica. Ao exame clínico: hipoativa, letárgica, gemente, palidez cutânea acentuada com padrão livedoide ("pele mosqueada"), taquicárdica (FC 180 bpm), taquipneica (FR 55 irpm), pulsos periféricos finos e tempo de enchimento capilar de 4 segundos. O EAS revela piúria maciça (leucócitos incontáveis), nitrito positivo e bacteriúria. Diante da identificação de UROSSEPSE / Choque Séptico de foco urinário, qual é o conjunto de medidas terapêuticas imediatas nos primeiros 60 minutos ("golden hour")?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Internação imediata em leito de terapia intensiva / emergência, obtenção de acesso venoso calibroso, coleta de hemoculturas e urocultura, ressuscitação volêmica com bólus de cristaloide isotônico (20 mL/kg), monitorização de choque e início IMEDIATO de antibioticoterapia parenteral de amplo espectro na primeira hora (ex.: Ceftriaxona venosa associada ou não a aminoglicosídeo).',
      },
      {
        id: 'B',
        texto:
          'Prescrever xarope de amoxicilina oral e aguardar 48 horas no domicílio para avaliar se a febre cede espontaneamente.',
      },
      {
        id: 'C',
        texto:
          'Administrar sedativo intravenoso e aplicar compressas de gelo na cabeça dispensando hidratação e antibióticos.',
      },
      {
        id: 'D',
        texto:
          'Realizar cistoscopia diagnóstica de urgência sob raquianestesia sem estabilização prévia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A urossepse com choque séptico representa a complicação mais grave e temida da pielonefrite aguda na infância. Os sinais de alarme presentes no caso são inequívocos: letargia/gemência, pele mosqueada, taquicardia desproporcional, pulsos débeis e tempo de enchimento capilar alargado (≥ 4 segundos), caracterizando choque séptico com má perfusão tecidual.\nO manejo segue as diretrizes internacionais da "Surviving Sepsis Campaign" pediátrica para a primeira hora ("hora de ouro"):\n1) Monitorização multiparamétrica e suporte de oxigênio;\n2) Acesso venoso ou intraósseo imediato;\n3) Ressuscitação volêmica com cristaloide isotônico (soro fisiológico a 0,9% ou Ringer lactato) em alíquotas de 10 a 20 mL/kg;\n4) Coleta de hemoculturas (duas amostras) e urina estéril;\n5) ANTIBIOTICOTERAPIA VENOSA DE AMPLO ESPECTRO ADMINISTRADA NA PRIMEIRA HORA (Ceftriaxona EV ou Cefotaxima EV, avaliando adição de aminoglicosídeo ou ampicilina se fatores de risco).',
    comentariosAlternativas: {
      A: 'Correta. Manejo imediato do choque séptico de foco urinário: expansão volêmica, culturas e antibiótico parenteral na 1ª hora.',
      B: 'Incorreta. Choque séptico não tratado resulta em parada cardiorrespiratória e óbito em poucas horas.',
      C: 'Incorreta. Sedação sem suporte hemodinâmico agrava a vasodilatação e colapsa a circulação.',
      D: 'Incorreta. Procedimentos urológicos invasivos são proibidos em pacientes instáveis antes da ressuscitação hemodinâmica.',
    },
  },
  {
    id: 'ped-itu-036',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Critérios de Internação na Pielonefrite - Resumo das Indicações Formais',
    isRevisao: false,
    enunciado:
      'O pediatra de plantão na sala de observação revisa a lista de pacientes com diagnóstico de Pielonefrite Aguda. Dentre os seguintes perfis clínicos de pacientes com infecção do trato urinário febril, qual deles NÃO POSSUI indicação formal de internação hospitalar e pode ser manejado ambulatorialmente com segurança?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Menina de 4 anos, febril (38,6 °C), ativa, em bom estado geral, lúcida, sem vômitos, aceitando líquidos com avidez por via oral e com família estruturada e confiável para administração de antibiótico oral e retorno garantido em 48 horas.',
      },
      {
        id: 'B',
        texto:
          'Lactente de 40 dias de vida com febre de 38,2 °C e urina com piúria colhida por cateterismo.',
      },
      {
        id: 'C',
        texto:
          'Menino de 2 anos com mielomeningocele e bexiga neurogênica que apresenta vômitos incoercíveis e desidratação.',
      },
      {
        id: 'D',
        texto:
          'Criança de 3 anos portadora de imunodeficiência celular primária grave em quimioterapia imunossupressora.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Critérios formais para INTERNAÇÃO HOSPITALAR na Pielonefrite Pediátrica:\n1) Idade < 2 a 3 meses;\n2) Sinais de toxemia, sepse ou choque séptico;\n3) Intolerância à via oral (vômitos incoercíveis);\n4) Desidratação moderada a grave ou distúrbios hidroeletrolíticos;\n5) Presença de imunossupressão ou neoplasia;\n6) Malformação urológica complexa conhecida ou rim único funcionante;\n7) Falha de resposta terapêutica ao antibiótico oral após 48 a 72 horas;\n8) Vulnerabilidade social grave (família sem condições de comprar medicação, residência sem saneamento ou impossibilidade de retorno para reavaliação).\nA paciente da alternativa A (menina de 4 anos, bom estado geral, afebril no momento, hidratada, aceitando via oral com excelente suporte familiar) cumpre todos os critérios para TRATAMENTO AMBULATORIAL SEGURO com antibiótico oral (ex.: cefuroxima axetil ou cefalexina) e reavaliação clínica obrigatória em 48 horas.',
    comentariosAlternativas: {
      A: 'Correta. Criança hígida de 4 anos, tolerando via oral e clinicamente estável pode ser tratada ambulatorialmente.',
      B: 'Incorreta. Idade de 40 dias exige internação hospitalar mandatória.',
      C: 'Incorreta. Vômitos incoercíveis e bexiga neurogênica exigem internação e hidratação parenteral.',
      D: 'Incorreta. Imunodeficiência grave impõe internação com terapia parenteral imediata.',
    },
  },
  {
    id: 'ped-itu-037',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Falha Terapêutica Ambulatorial após 48 a 72 Horas - Conduta',
    isRevisao: false,
    enunciado:
      'Lactente de 10 meses com pielonefrite aguda iniciou tratamento ambulatorial com Cefalexina oral há 48 horas. A mãe retorna ao pronto atendimento relatando que a criança persiste com febre alta diária (picos de 39,5 °C a cada 4 horas), prostração progressiva e recusa alimentar, sem qualquer sinal de melhora clínica. Ao exame físico: estado geral comprometido, pálida e febril. Diante da FALHA TERAPÊUTICA AMBULATORIAL após 48 a 72 horas de antibioticoterapia oral, qual é a conduta médica correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Indicar internação hospitalar imediata, colher exames laboratoriais (hemograma, PCR, função renal e hemocultura), checar com urgência o laudo preliminar do antibiograma da urocultura inicial (suspeita de resistência bacteriana à cefalexina), trocar a antibioticoterapia para esquema parenteral de amplo espectro (ex.: Ceftriaxona venosa) e solicitar Ultrassonografia de Rins e Vias Urinárias para afastar uropatia obstrutiva ou abscesso renal.',
      },
      {
        id: 'B',
        texto:
          'Manter a mesma medicação oral por mais 14 dias sem exames, orientando apenas banho morno para baixar a febre.',
      },
      {
        id: 'C',
        texto:
          'Substituir a cefalexina por comprimidos de nitrofurantoína diluídos na mamadeira.',
      },
      {
        id: 'D',
        texto:
          'Suspender qualquer tratamento e dar alta com diagnóstico de reação alérgica normal aos dentes decíduos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Na pielonefrite pediátrica tratada adequadamente, a resposta clínica esperada é a QUEDA DA FEBRE E MELHORA DO ESTADO GERAL EM 24 A 48 HORAS (no máximo 72 horas).\nA persistência de febre alta e toxemia após 48 horas de tratamento ambulatorial constitui FALHA TERAPÊUTICA e impõe mudança radical de conduta:\n1) INTERNAÇÃO HOSPITALAR IMEDIATA;\n2) REVISÃO DO ANTIBIOGRAMA da urocultura inicial (a causa mais comum é a resistência bacteriana ao antibiótico oral de primeira linha prescrito, como cepas de E. coli produtoras de beta-lactamase);\n3) ESCALONAMENTO DO ANTIMICROBIANO para via intravenosa com cobertura ampliada (Ceftriaxona venosa ou Cefotaxima);\n4) ULTRASSONOGRAFIA DE RINS E VIAS URINÁRIAS DE URGÊNCIA: necessária para excluir complicações mecânicas graves como abscesso renal, pionefrite, nefrite lobar aguda ou obstrução de via excretora por cálculo ou estenose congênita sob tensão.',
    comentariosAlternativas: {
      A: 'Correta. Internação, troca para Ceftriaxona EV, checagem do antibiograma e USG de urgência para afastar abscesso/obstrução.',
      B: 'Incorreta. Manter antibiótico ineficaz após 48h de febre alta coloca o paciente em risco de sepse e dano renal irreversível.',
      C: 'Incorreta. A nitrofurantoína é formalmente contraindicada na pielonefrite.',
      D: 'Incorreta. Negligência grave diante de lactente toxêmico com infecção urinária parenquimatosa ativa.',
    },
  },
  {
    id: 'ped-itu-038',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Antibioticoterapia Parenteral da Pielonefrite em Lactentes > 3 Meses',
    isRevisao: false,
    enunciado:
      'Lactente de 8 meses é internado na enfermaria de pediatria com diagnóstico de Pielonefrite Aguda e desidratação leve por vômitos. Qual é o antimicrobiano parenteral de escolha empírica de primeira linha preconizado pela Sociedade Brasileira de Pediatria e pela Academia Americana de Pediatria para o tratamento hospitalar da pielonefrite comunitária em lactentes maiores de 3 meses sem histórico de internações prévias?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ceftriaxona (cefalosporina de 3ª geração) por via intravenosa na dose de 50 a 100 mg/kg/dia (ou Cefotaxima 100 a 150 mg/kg/dia), com excelente penetração parenquimatosa renal e alta eficácia bactericida contra bacilos Gram-negativos entéricos comunitários.',
      },
      {
        id: 'B',
        texto:
          'Claritromicina intravenosa associada a azitromicina oral por 30 dias.',
      },
      {
        id: 'C',
        texto:
          'Polimixina B associada a colistina em monoterapia para evitar alergias cutâneas.',
      },
      {
        id: 'D',
        texto:
          'Oxacilina venosa isolada por 21 dias consecutivos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Para crianças hospitalizadas com pielonefrite aguda comunitária com idade superior a 1 a 3 meses (fora do período neonatal), as CEFALOSPORINAS DE 3ª GERAÇÃO PARENTERAIS representam o padrão-ouro de primeira linha consagrado mundialmente:\n- CEFTRIAXONA EV (50 a 100 mg/kg/dia, em dose única diária ou dividida a cada 12h) ou CEFOTAXIMA EV (100 a 150 mg/kg/dia a cada 6 a 8h).\nVantagens clínicas:\n1) Amplo espectro e alta potência bactericida contra a Escherichia coli e a imensa maioria dos bacilos Gram-negativos da família Enterobacteriaceae comunitários (Klebsiella, Proteus, Enterobacter);\n2) Elevada concentração hidrofílica tecidual no parênquima renal inflamado e na urina;\n3) Excelente perfil de segurança biológica em pediatria fora do período neonatal imediato;\nOutras opções hospitalares incluem aminoglicosídeos (Amicacina/Gentamicina) ou ampicilina/sulbactam.',
    comentariosAlternativas: {
      A: 'Correta. Ceftriaxona ou Cefotaxima EV são as drogas de escolha empírica hospitalar para lactentes > 3 meses.',
      B: 'Incorreta. Macrolídeos cobrem patógenos atípicos respiratórios e são inativos contra enterobactérias Gram-negativas.',
      C: 'Incorreta. Polimixinas são drogas de reserva extrema para bactérias pan-resistentes hospitalares, altamente nefrotóxicas.',
      D: 'Incorreta. A oxacilina tem espectro restrito para estafilococos produtores de penicilinase, inativa contra E. coli.',
    },
  },
  {
    id: 'ped-itu-039',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'ITU no Período Neonatal - Patogênese e Esquema Ampicilina + Gentamicina',
    isRevisao: false,
    enunciado:
      'Recém-nascido de 14 dias de vida, nascido a termo, é admitido na Unidade Neonatal com quadro de instabilidade térmica (hipotermia de 35,8 °C alternada com picos de 38,2 °C), sucção débil, letargia e icterícia zona III de Kramer. A punção suprapúbica revela crescimento de bacilos Gram-negativos e cocos Gram-positivos. Considerando a patogênese hematogênica frequente da infecção bacteriana neonatal e o espectro microbiológico dessa faixa etária, qual é o esquema antimicrobiano empírico parenteral de primeira linha indicado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ampicilina associada a um Aminoglicosídeo (Gentamicina ou Amicacina) por via intravenosa, garantindo cobertura sinérgica contra bacilos Gram-negativos entéricos (E. coli, Klebsiella), Streptococcus agalactiae (GBS), Listeria monocytogenes e Enterococcus faecalis.',
      },
      {
        id: 'B',
        texto:
          'Nitrofurantoína por sonda orogástrica como monoterapia de amplo espectro por 10 dias.',
      },
      {
        id: 'C',
        texto:
          'Sulfametoxazol-trimetoprima oral em alta dose associado a sulfadiazina.',
      },
      {
        id: 'D',
        texto:
          'Apenas fototerapia contínua sem nenhum antibiótico, pois infecção neonatal melhora com luz azul.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'No período neonatal (primeiros 28 dias de vida), a infecção do trato urinário tem particularidades biológicas cruciais:\n1) Disseminação frequentemente HEMATOGÊNICA (bacteremia primária que coloniza os rins, diferindo da via ascendente predominante em crianças maiores);\n2) Espectro microbiológico amplo: além de enterobactérias (Escherichia coli e Klebsiella), os neonatos são vulneráveis a Streptococcus agalactiae (Streptococcus do grupo B - GBS), Enterococcus faecalis e Listeria monocytogenes (patógenos do canal de parto);\nO esquema clássico padrão-ouro recomendado mundialmente pelo Ministério da Saúde e pela SBP é:\nAMPICILINA + GENTAMICINA (ou Amicacina) por via intravenosa.\nA ampicilina cobre com excelência Listeria, GBS e Enterococcus, enquanto o aminoglicosídeo confere cobertura potente e sinérgica contra os bacilos Gram-negativos entéricos.',
    comentariosAlternativas: {
      A: 'Correta. Ampicilina + Aminoglicosídeo (Gentamicina) é o esquema padrão empírico neonatal com cobertura sinérgica ampla.',
      B: 'Incorreta. A nitrofurantoína é contraindicada em infecções neonatais/sistêmicas e inútil no parênquima renal.',
      C: 'Incorreta. Sulfas são formalmente contraindicadas no período neonatal pelo risco de kernicterus por deslocamento da bilirrubina.',
      D: 'Incorreta. O paciente apresenta sepse/ITU neonatal gravíssima exigindo antibioticoterapia parenteral de emergência.',
    },
  },
  {
    id: 'ped-itu-040',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Papel da Ampicilina na Cobertura Neonatal de Listeria e Enterococcus',
    isRevisao: false,
    enunciado:
      'Em reuniões clínicas de neonatologia, frequentemente se questiona por que não se utiliza monoterapia com cefalosporina no tratamento empírico da infecção neonatal precoce ou tardia, mantendo-se sempre a associação obrigatória com AMPICILINA. Qual é a justificativa microbiológica clássica para a manutenção da ampicilina nos esquemas neonatais?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Porque as cefalosporinas de todas as gerações NÃO apresentam atividade antimicrobiana contra Listeria monocytogenes e Enterococcus faecalis (intrinsicamente resistentes), dois patógenos de alta letalidade no período neonatal que são primorosamente cobertos pela ampicilina.',
      },
      {
        id: 'B',
        texto:
          'Porque a ampicilina é o único antibiótico que previne o fechamento fisiológico do canal arterial.',
      },
      {
        id: 'C',
        texto:
          'Porque a ampicilina acidifica o sangue do recém-nascido impedindo a ação das citocinas inflamatórias.',
      },
      {
        id: 'D',
        texto:
          'Porque as cefalosporinas são inativadas pela lactose do leite materno no trato digestivo neonatal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Essa é uma das justificativas de farmacoterapia microbiológica mais exigidas em provas de Residência Médica:\nAs cefalosporinas de 3ª geração (como Cefotaxima e Ceftriaxona) possuem excelente espectro contra bacilos Gram-negativos e estreptococos comuns. No entanto, elas possuem DUAS FALHAS CRÍTICAS DE COBERTURA INTRÍNSECA:\n1) LISTERIA MONOCYTOGENES (bacilo Gram-positivo causador de sepse, meningite e granulomatose infantisséptica neonatal);\n2) ENTEROCOCCUS FAECALIS / E. FAECIUM (cocos Gram-positivos entéricos);\nAmbos os microrganismos são 100% resistentes a qualquer cefalosporina por baixa afinidade de suas PBPs. A AMPICILINA é a droga de escolha e padrão-ouro para erradicar Listeria monocytogenes e Enterococcus sensíveis. Por essa razão, nenhum recém-nascido com suspeita de sepse/ITU pode receber cefalosporina em monoterapia sem a cobertura associada de ampicilina.',
    comentariosAlternativas: {
      A: 'Correta. Cefalosporinas não cobrem Listeria nem Enterococcus; a ampicilina é mandatória para esses patógenos neonatais.',
      B: 'Incorreta. A ampicilina não interfere na fisiologia do canal arterial (regulada por prostaglandinas e oxigênio).',
      C: 'Incorreta. A ampicilina não altera o pH sistêmico para modular citocinas.',
      D: 'Incorreta. Cefalosporinas parenterais agem na circulação e não são degradadas pela lactose enteral.',
    },
  },
  {
    id: 'ped-itu-041',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Ceftriaxona em Neonatos Ictéricos - Deslocamento de Bilirrubina e Kernicterus',
    isRevisao: false,
    enunciado:
      'Recém-nascido de 12 dias de vida, ictérico, em fototerapia, é diagnosticado com pielonefrite aguda. O residente propõe prescrever Ceftriaxona intravenosa. O neonatologista intervém e orienta substituir a Ceftriaxona por CEFOTAXIMA (ou Gentamicina associada à Ampicilina). Quais são as duas razões farmacológicas formais pelas quais a CEFTRIAXONA É CONTRAINDICADA em recém-nascidos ictéricos nos primeiros 28 dias de vida?',
    alternativas: [
      {
        id: 'A',
        texto:
          '1) A ceftriaxona compete com a bilirrubina não conjugada pelos sítios de ligação da albumina sérica, deslocando-a e elevando os níveis de bilirrubina livre com risco de encefalopatia bilirrubínica (KERNICTERUS); e 2) Risco de precipitação insolúvel com sais de cálcio intravenosos nos pulmões e rins (pseudolitíase e dano orgânico fatal).',
      },
      {
        id: 'B',
        texto:
          'A ceftriaxona é transformada em vírus vivo atenuado do sarampo quando entra em contato com o sangue neonatal.',
      },
      {
        id: 'C',
        texto:
          'A ceftriaxona fecha a fontanela anterior precocemente nas primeiras 24 horas de infusão.',
      },
      {
        id: 'D',
        texto:
          'A ceftriaxona estimula a perda definitiva de audição por destruir a cóclea mecanicamente em 100% dos neonatos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O uso de Ceftriaxona é FORMALMENTE CONTRAINDICADO em recém-nascidos (especialmente prematuros ou com icterícia neonatal nas primeiras semanas de vida) por dois mecanismos farmacológicos bem fundamentados:\n1) DESLOCAMENTO DA BILIRRUBINA DA ALBUMINA: A ceftriaxona tem altíssima afinidade de ligação às proteínas plasmáticas (albumina sérica), competindo diretamente com a bilirrubina indireta (não conjugada). Ao deslocar a bilirrubina da albumina, aumenta a fração de bilirrubina livre lipossolúvel que atravessa a barreira hematoencefálica imatura, provocando deposição nos núcleos da base do cérebro e desencadeando KERNICTERUS (encefalopatia bilirrubínica irreversível);\n2) PRECIPITAÇÃO COM CÁLCIO: A ceftriaxona liga-se avidamente ao cálcio iônico sérico, formando precipitados cristalinos insolúveis ("sal de ceftriaxona-cálcio") que podem obstruir microvasos pulmonares, biliares (lama biliar / pseudolitíase biliar) e renais com falência de múltiplos órgãos se coadministrada com soluções de cálcio.\nAlternativa segura no período neonatal: CEFOTAXIMA (cefalosporina de 3ª geração que não desloca bilirrubina da albumina).',
    comentariosAlternativas: {
      A: 'Correta. Desloca bilirrubina da albumina (risco de kernicterus) e precipita com cálcio em neonatos.',
      B: 'Incorreta. A ceftriaxona é uma substância química antibacteriana sem qualquer relação com vírus.',
      C: 'Incorreta. Craniossinostose não é causada por antibióticos cefalosporínicos.',
      D: 'Incorreta. Ototoxicidade é complicação clássica de aminoglicosídeos em doses tóxicas, não de cefalosporinas.',
    },
  },
  {
    id: 'ped-itu-042',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Duração Total da Antibioticoterapia na Pielonefrite Aguda',
    isRevisao: false,
    enunciado:
      'Lactente de 11 meses concluiu 3 dias de ceftriaxona intravenosa com excelente resposta clínica (está afebril há 48 horas, ativo, hidratado e mamando muito bem). O laudo da urocultura confirma Escherichia coli sensível a cefuroxima e ciprofloxacino. O pediatra planeja a alta hospitalar com transição para cefuroxima axetil por via oral para completar o tempo total de antibioticoterapia preconizado pelas diretrizes da Academia Americana de Pediatria (AAP) e da Sociedade Brasileira de Pediatria (SBP). Qual é a DURAÇÃO TOTAL recomendada de tratamento para pielonefrite aguda na infância?',
    alternativas: [
      {
        id: 'A',
        texto: '7 a 14 dias (sendo 10 dias o tempo total habitualmente mais empregado na prática clínica).',
      },
      {
        id: 'B',
        texto: 'Apenas 24 horas após a primeira dose venosa.',
      },
      {
        id: 'C',
        texto: 'Exatamente 6 meses consecutivos ininterruptos.',
      },
      {
        id: 'D',
        texto: '45 dias obrigatoriamente por via intravenosa em leito hospitalar fechado.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A duração total da antibioticoterapia no tratamento da PIELONEFRITE AGUDA na infância estabelecida pelas diretrizes da Academia Americana de Pediatria (AAP 2011/2016), Sociedade Europeia de Nefrologia Pediátrica (ESPN) e Sociedade Brasileira de Pediatria (SBP) é de:\n7 A 14 DIAS (com 10 DIAS de duração total consolidado como a conduta mais frequentemente adotada).\nEsquemas inferiores a 7 dias na pielonefrite associam-se a taxas inaceitáveis de recaída bacteriológica e risco de dano renal cicatricial crônico. Por outro lado, tratamentos que se estendem além de 14 dias não agregam benefício clínico e selecionam microbiota resistente. A estratégia padrão consiste em iniciar por via parenteral (se indicado hospitalar) e, após melhora clínica e 24 a 48h afebril, realizar a transição para antibiótico oral guiado pelo antibiograma até completar o curso de 10 dias.',
    comentariosAlternativas: {
      A: 'Correta. O tempo total preconizado pelas diretrizes pediátricas para pielonefrite é de 7 a 14 dias (tipicamente 10 dias).',
      B: 'Incorreta. 24 horas é tempo insuficiente para esterilização parenquimatosa renal, gerando recaída precoce.',
      C: 'Incorreta. Tratamentos de 6 meses correspondem a quimioprofilaxia de longo prazo, não ao tratamento da infecção aguda.',
      D: 'Incorreta. Duração excessiva desnecessária que aumentaria riscos de infecções hospitalares.',
    },
  },
  {
    id: 'ped-itu-043',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Critérios para Transição Terapêutica Parenteral para Oral ("Step-Down")',
    isRevisao: false,
    enunciado:
      'Menina de 2 anos internada há 48 horas em tratamento de Pielonefrite Aguda com Ceftriaxona venosa encontra-se afebril há 36 horas, corada, bem hidratada, brincando no leito e tolerando plenamente a dieta por via oral. A urocultura revelou Escherichia coli sensível a Amoxicilina com Clavulanato, Cefuroxima e Ceftriaxona. O médico assistente avalia a desospitalização e a transição da terapia parenteral para oral ("step-down therapy"). Quais são os critérios necessários para autorizar essa transição segura?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Resolução da febre por pelo menos 24 a 48 horas, melhora clínica consistente com estabilidade hemodinâmica, tolerância comprovada da via oral e disponibilidade de antibiótico oral com sensibilidade comprovada no antibiograma.',
      },
      {
        id: 'B',
        texto:
          'Normalização imediata do tamanho renal na ultrassonografia e desaparecimento da bexiga urinária.',
      },
      {
        id: 'C',
        texto:
          'Manutenção obrigatória de 14 dias exclusivamente por via venosa sem possibilidade de alta antes de duas semanas.',
      },
      {
        id: 'D',
        texto:
          'Apenas a presença de tosse produtiva autoriza a transição para antibiótico oral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A terapia sequencial ou transição parenteral-oral ("step-down therapy") na pielonefrite pediátrica é uma estratégia altamente segura, custo-efetiva e humanizada, reduzindo o tempo de internação, infecções de cateter venoso e traumas hospitalares da criança.\nOs critérios clínicos e laboratoriais indispensáveis para a transição parenteral -> oral incluem:\n1) Desfervescência: paciente AFEBRIL POR PELO MENOS 24 A 48 HORAS;\n2) Melhora clínica evidente: criança ativa, corada, hidratada e hemodinamicamente estável;\n3) Boa tolerância oral comprovada: aceitação de líquidos, dieta e medicamentos sem vômitos;\n4) Antibiograma disponível: conhecimento de um agente oral eficaz e sensível (ex.: amoxicilina-clavulanato ou cefuroxima axetil);\n5) Ambiente social seguro: cuidadores aptos a administrar a medicação nos horários corretos e com retorno garantido.',
    comentariosAlternativas: {
      A: 'Correta. Critérios de estabilidade: 24-48h afebril, melhora clínica, tolerância oral e antibiograma favorável.',
      B: 'Incorreta. Alterações inflamatórias na USG podem demorar semanas para desaparecer e a bexiga não desaparece.',
      C: 'Incorreta. O conceito de 14 dias exclusivamente venosos é obsoleto; a transição precoce para via oral é segura e recomendada.',
      D: 'Incorreta. Sintomas respiratórios não são critérios de transição na infecção urinária.',
    },
  },
  {
    id: 'ped-itu-044',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Tratamento Ambulatorial da Pielonefrite em Lactentes Estáveis',
    isRevisao: false,
    enunciado:
      'Lactente de 10 meses, sexo feminino, comparece à UBS com febre de 38,8 °C há 24 horas, irritabilidade ao manuseio, sem vômitos. O exame clínico mostra lactente em ótimo estado geral, hidratada, corada, afebril no momento, aceitando muito bem o seio materno. A urina colhida por cateterismo estéril mostra piúria e nitrito positivo. A família reside a duas quadras do posto de saúde e possui excelente nível sociocultural e adesão. Estudos de referência clínica (como o multicêntrico europeu de Hoberman et al.) comprovaram que em lactentes com pielonefrite sem critérios de internação:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O tratamento inicial por via oral com cefalosporina (como Cefixima ou Cefuroxima axetil) ou Amoxicilina-clavulanato é tão eficaz quanto a terapia parenteral inicial na prevenção de cicatrizes renais e cura clínica, desde que o paciente esteja em bom estado geral, tolerando via oral e com seguimento garantido.',
      },
      {
        id: 'B',
        texto:
          'O tratamento oral é proibido em qualquer faixa etária pediátrica, sendo a internação em UTI mandatória para 100% dos lactentes febris.',
      },
      {
        id: 'C',
        texto:
          'A via oral apresenta taxa de mortalidade 50 vezes superior à via intravenosa em infecções urinárias leves.',
      },
      {
        id: 'D',
        texto:
          'O uso de antibióticos orais causa calcificação da aorta torácica em lactentes.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Historicamente, acreditava-se que todo lactente com pielonefrite aguda necessitava de internação hospitalar e antibiótico intravenoso. Entretanto, estudos multicêntricos randomizados de alta qualidade (como os trials de Hoberman et al. e as diretrizes do NICE e AAP) revolucionaram essa conduta ao comprovar que:\nEm crianças maiores de 2 a 3 meses de idade com pielonefrite aguda que NÃO apresentem toxemia, choque, desidratação ou vômitos incoercíveis, o TRATAMENTO EXCLUSIVAMENTE POR VIA ORAL (com cefalosporina oral de 2ª ou 3ª geração ou amoxicilina-clavulanato por 10 a 14 dias) ou o regime ambulatorial com uma dose parenteral de Ceftriaxona seguida por via oral é TÃO EFICAZ QUANTO o tratamento parenteral hospitalar pleno na velocidade de desfervescência, cura bacteriológica e na incidência de cicatrizes renais na cintilografia com DMSA aos 6 meses de seguimento.',
    comentariosAlternativas: {
      A: 'Correta. Tratamento oral ambulatorial em crianças selecionadas sem toxemia é seguro e não aumenta taxa de cicatrizes renais.',
      B: 'Incorreta. A via oral é perfeitamente validada em diretrizes para lactentes estáveis fora dos critérios de internação.',
      C: 'Incorreta. Não há aumento de mortalidade com o tratamento oral ambulatorial supervisionado.',
      D: 'Incorreta. Afirmação fantasiosa sem qualquer correlação clínica.',
    },
  },
  {
    id: 'ped-itu-045',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Aminoglicosídeos (Amicacina/Gentamicina) e Dose Única Diária',
    isRevisao: false,
    enunciado:
      'Lactente de 1 ano com infecção do trato urinário por bacilo Gram-negativo resistente às cefalosporinas inicia tratamento com Amicacina intravenosa. A equipe médica programa a posologia em regime de DOSE ÚNICA DIÁRIA (dose total diária infundida uma vez a cada 24 horas). Qual é a fundamentação farmacológica que justifica a administração de aminoglicosídeos em dose única diária na prática pediátrica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Apresentam atividade bactericida concentração-dependente (pico sérico elevado potencializa a destruição bacteriana) associada a prolongado Efeito Pós-Antibiótico (PAE), enquanto o vale sérico prolongado permite a depuração do fármaco pelo córtex renal e células ciliadas do ouvido interno, reduzindo a nefrotoxicidade e ototoxicidade.',
      },
      {
        id: 'B',
        texto:
          'Os aminoglicosídeos perdem o efeito bactericida se administrados por mais de 5 minutos consecutivos.',
      },
      {
        id: 'C',
        texto:
          'A dose única diária serve apenas para economizar frascos e equipos no estoque da farmácia do hospital.',
      },
      {
        id: 'D',
        texto:
          'Os aminoglicosídeos só funcionam na presença de luz solar direta sobre a veia da criança.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Os aminoglicosídeos (Gentamicina, Amicacina, Tobramicina) possuem características farmacodinâmicas muito particulares:\n1) Bactericidas CONCENTRAÇÃO-DEPENDENTES: a eficácia clínica correlaciona-se com a razão Pico Sérico / Concentração Inibitória Mínima (Cmax/MIC). Quanto maior o pico inicial atingido (alvo Cmax/MIC ≥ 8 a 10), maior e mais rápida é a morte bacteriana;\n2) EFEITO PÓS-ANTIBIÓTICO (PAE): a inibição do crescimento bacteriano persiste por várias horas mesmo após as concentrações plasmáticas caírem abaixo da MIC;\n3) Menor toxicidade cumulativa: a nefrotoxicidade e a ototoxicidade dependem do tempo de exposição a níveis séricos de vale (concentrações mínimas contínuas). No regime de DOSE ÚNICA DIÁRIA, o paciente atinge um vale sérico muito baixo ao final de 24 horas, permitindo que as células tubulares renais e as células ciliadas cocleares eliminem o fármaco acumulado, minimizando o risco de lesão renal aguda e surdez neurossensorial.',
    comentariosAlternativas: {
      A: 'Correta. Bactericida concentração-dependente com efeito pós-antibiótico; o vale baixo protege rins e ouvidos.',
      B: 'Incorreta. O tempo de infusão padrão é de 30 a 60 minutos.',
      C: 'Incorreta. A fundamentação é farmacocinética e de segurança clínica, não apenas de economia de frascos.',
      D: 'Incorreta. A medicação não é fotossensível a esse ponto e não depende de luz solar.',
    },
  },
  {
    id: 'ped-itu-046',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Fosfomicina Trometamol em Dose Única na Cistite em Adolescentes',
    isRevisao: false,
    enunciado:
      'Adolescente de 16 anos, sexualmente ativa, apresenta disúria, queimação uretral e polaciúria há 24 horas, afebril, com EAS acusando esterase leucocitária e nitrito positivos. Nega corrimento vaginal ou dor abdominal. O médico do pronto atendimento prescreve FOSFOMICINA TROMETAMOL em sachê oral de 3 gramas em DOSE ÚNICA. Sobre o uso da Fosfomicina na cistite não complicada em adolescentes, assinale a opção correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A fosfomicina trometamol em dose única é aprovada e recomendada para o tratamento de cistite aguda não complicada em adolescentes pós-púberes e mulheres jovens; é excretada inalterada pelos rins, mantendo concentrações bactericidas elevadíssimas na urina por 48 a 72 horas, com excelente adesão terapêutica.',
      },
      {
        id: 'B',
        texto:
          'A fosfomicina em dose única cura pielonefrites graves com abscessos renais múltiplos em menos de 10 minutos.',
      },
      {
        id: 'C',
        texto:
          'A fosfomicina é formalmente contraindicada em qualquer mulher que já tenha tido atividade sexual.',
      },
      {
        id: 'D',
        texto:
          'A droga só pode ser administrada dissolvida em óleo mineral quente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A FOSFOMICINA TROMETAMOL (sachê oral de 3 g em dose única) é uma das opções de primeira linha mais consagradas pelas diretrizes internacionais (IDSA e Sociedade Europeia de Urologia) para o tratamento da CISTITE AGUDA NÃO COMPLICADA em mulheres jovens e adolescentes pós-menarca.\nCaracterísticas farmacológicas de prova:\n1) Mecanismo de ação: inibe a enzima bacteriana MurA (piruvil-transferase), bloqueando a síntese precoce da parede celular de peptideoglicano bacteriano;\n2) Farmacocinética: após tomada oral única dissolvida em água em jejum, a fosfomicina atinge concentrações maciças na urina (> 1.000 a 2.000 mcg/mL), permanecendo em níveis terapêuticos bactericidas por até 48 a 72 horas na luz vesical;\n3) Adesão de 100% por ser dose única;\n4) Alerta: assim como a nitrofurantoína, a fosfomicina oral NÃO deve ser usada no tratamento de Pielonefrite ou sepse urinária.',
    comentariosAlternativas: {
      A: 'Correta. Dose única oral eficaz e aprovada para cistite não complicada em adolescentes, mantendo níveis urinários por 48-72h.',
      B: 'Incorreta. A fosfomicina oral em dose única não trata pielonefrite nem abscessos renais.',
      C: 'Incorreta. A cistite associada à atividade sexual é uma das principais indicações da fosfomicina.',
      D: 'Incorreta. Dissolve-se em meio copo de água fria, preferencialmente ao deitar após esvaziar a bexiga.',
    },
  },
  {
    id: 'ped-itu-047',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Febre Persistente e Suspeita de Abscesso Renal / Nefrite Lobar',
    isRevisao: false,
    enunciado:
      'Criança de 3 anos está internada recebendo Ceftriaxona venosa há 72 horas para tratamento de Pielonefrite Aguda por Escherichia coli multissensível. Apesar do antibiótico adequado, a criança persiste com picos febris de 39,2 °C, dor intensa em flanco direito e piora da leucocitose com desvio à esquerda. O exame físico evidencia massa dolorosa palpável em flanco direito. Qual é a principal complicação parenquimatosa que deve ser investigada e qual é o exame de imagem inicial de urgência indicado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Abscesso Renal (ou Nefrite Lobar Aguda / Pionefrose obstrutiva); o exame inicial de escolha é a Ultrassonografia de Rins e Vias Urinárias com Doppler, complementada com Tomografia Computadorizada contrastada se a ultrassonografia for inconclusiva ou para planejamento de drenagem percutânea.',
      },
      {
        id: 'B',
        texto:
          'Apendicite crônica por oxiúros; o exame indicado é o parasitológico de fezes pelo método de Hoffman.',
      },
      {
        id: 'C',
        texto:
          'Calcificação estomacal benigna; solicitar radiografia panorâmica de mandíbula.',
      },
      {
        id: 'D',
        texto:
          'Normalidade evolutiva esperada; a febre da pielonefrite dura rotineiramente 45 dias sem necessidade de qualquer imagem.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Quando uma criança com pielonefrite aguda em uso de antibioticoterapia venosa com espectro adequado comprovado em antibiograma PERSISTE FEBRIL E TOXÊMICA APÓS 48 A 72 HORAS, é obrigatório suspeitar de COMPLICAÇÃO SUPURATIVA SUPRADA OU OBSTRUTIVA:\n1) ABSCESSO RENAL (intraparenquimatoso) ou ABSCESSO PERIRRENAL;\n2) NEFRITE LOBAR AGUDA (nefronia aguda - área focal de celulite/isquemia intraparenquimatosa sem liquefação franca);\n3) PIONEFOSE OBSTRUTIVA (sistema pielocalicinal repleto de pus sob pressão devido a obstrução por cálculo ou estenose da junção pieloureteral).\nConduta imediata: Solicitar ULTRASSONOGRAFIA DE RINS E VIAS URINÁRIAS COM DOPPLER à beira do leito. Se houver abscesso volumoso (> 3 a 5 cm) ou pionefrite obstrutiva, o tratamento clínico isolado falhará e será necessária drenagem percutânea de urgência ou desobstrução com cateter duplo J.',
    comentariosAlternativas: {
      A: 'Correta. Persistência de febre > 72h exige investigação de abscesso renal ou pionefrose por USG com Doppler / TC.',
      B: 'Incorreta. A massa em flanco com piora da febre na vigência de pielonefrite indica complicação renal infecciosa.',
      C: 'Incorreta. Radiografia de mandíbula não avalia patologias renais.',
      D: 'Incorreta. A febre da pielonefrite deve remitir em 48 a 72 horas; persistência além disso é sinal de alarme.',
    },
  },
  {
    id: 'ped-itu-048',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Pionefrose Obstrutiva - Emergência Urológica e Drenagem',
    isRevisao: false,
    enunciado:
      'Lactente de 5 meses com diagnóstico pré-natal de hidronefrose à direita dá entrada em sepse grave com oligúria e choque séptico refratário a aminas vasoativas. A ultrassonografia de emergência revela acentuada dilatação da pelve e cálices renais direitos com debris ecogênicos intraluminais espessos, nível líquido-líquido e ausência de jato ureteral ao Doppler (quadro de PIONEFOSE / sistema coletor obstruído infectado sob alta pressão). Diante dessa emergência cirúrgica urológica, qual é a conduta descompressiva prioritária?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Descompressão de urgência do sistema coletor renal por meio de NEFROSTOMIA PERCUTÂNEA guiada por imagem ou passagem de cateter ureteral duplo J, associada à antibioticoterapia parenteral e suporte intensivo, pois antibióticos não penetram em sistema coletor fechado sob tensão purulenta.',
      },
      {
        id: 'B',
        texto:
          'Aguardar 30 dias de antibiótico oral ambulatorial antes de considerar qualquer avaliação urológica.',
      },
      {
        id: 'C',
        texto:
          'Realizar massagem cardíaca externa contínua até o cálculo se dissolver espontaneamente.',
      },
      {
        id: 'D',
        texto:
          'Indicar apenas banho de assento quente com infusão de chá de camomila.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A PIONEFROSE OBSTRUTIVA (infecção purulenta do trato urinário superior na presença de obstrução ao fluxo de saída da urina) é uma das emergências urológicas e pediátricas mais graves da medicina. Princípio cirúrgico basilar: "PUS RETIDO SOB TENSÃO DEVE SER DRENADO IMEDIATAMENTE".\nEm um sistema coletor renal obstruído e infectado, a pressão intrapélvica eleva-se rapidamente, colapsando a microcirculação arteriolar e venosa do parênquima renal. Como o fluxo sanguíneo local é interrompido, NENHUM ANTIBIÓTICO CONSEGUE PENETRAR NA LUZ DA PELVE RENAL. A manutenção dessa situação leva à destruição completa do parênquima renal em poucas horas e disseminação bacteriana maciça com choque séptico refratário e morte.\nA conduta salvadora e inadiável é a DESCOMPRESSÃO MECÂNICA URGENTE: punção e NEFROSTOMIA PERCUTÂNEA ou passagem retrógrada de cateter ureteral duplo J.',
    comentariosAlternativas: {
      A: 'Correta. Descompressão imediata por nefrostomia percutânea ou cateter duplo J associada a antibióticos venosos e UTI.',
      B: 'Incorreta. Postergar a drenagem de pionefrose sob tensão resulta em choque séptico fulminante e perda do rim.',
      C: 'Incorreta. Manobras de ressuscitação cardiorrespiratória são para parada cardíaca, não desobstruem a pelve renal.',
      D: 'Incorreta. Conduta caseira inapropriada para uma emergência urológica com risco de óbito.',
    },
  },
  {
    id: 'ped-itu-049',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Biomarcadores Inflamatórios - Procalcitonina (PCT) e PCR na Pielonefrite',
    isRevisao: false,
    enunciado:
      'No contexto da avaliação de lactentes febris com infecção do trato urinário, marcadores inflamatórios séricos são frequentemente dosados para auxiliar na distinção entre infecção localizada na bexiga (cistite) e acometimento parenquimatoso renal (pielonefrite). De acordo com a literatura nefrológica e pediátrica, qual é o papel e o valor preditivo da PROCALCITONINA (PCT) e da Proteína C Reativa (PCR) séricas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Níveis elevados de Procalcitonina sérica (PCT ≥ 0,5 a 1,0 ng/mL) e de PCR sérica (geralmente > 20 a 30 mg/L) apresentam excelente sensibilidade e valor preditivo para PIELONEFRITE AGUDA com lesão inflamatória parenquimatosa detectável na cintilografia renal com DMSA e maior risco de cicatriz renal futura.',
      },
      {
        id: 'B',
        texto:
          'A procalcitonina sérica é produzida exclusivamente pelos cabelos da criança, sem relação com processos infecciosos bacterianos sistêmicos.',
      },
      {
        id: 'C',
        texto:
          'Em casos de cistite leve da bexiga, a procalcitonina sempre atinge valores superiores a 1.000 ng/mL com PCR normal.',
      },
      {
        id: 'D',
        texto:
          'A dosagem de PCR e procalcitonina é proibida em menores de 18 anos por causar convulsões imediatas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A diferenciação entre cistite e pielonefrite em lactentes jovens pode ser desafiadora clinicamente. Os biomarcadores de fase aguda desempenham papel crucial nessa discriminação:\n1) PROCALCITONINA (PCT): É o biomarcador de maior acurácia diagnóstica para inflamação parenquimatosa renal bacteriana. Produzida em resposta a endotoxinas (LPS) e citocinas pró-inflamatórias (IL-1beta, TNF-alfa), títulos de PCT ≥ 0,5 a 1,0 ng/mL correlacionam-se fortemente com áreas de hipocaptação na cintilografia aguda com DMSA (focos de pielonefrite) e identificam lactentes com alto risco de formação de cicatrizes renais crônicas permanentes;\n2) PROTEÍNA C REATIVA (PCR): Títulos elevados (> 20 a 30 mg/L) corroboram processo invasivo parenquimatoso renal. Na cistite baixa não complicada, a resposta inflamatória é estritamente mucosa vesical e a PCT e PCR séricas permanecem normais ou minimamente alteradas.',
    comentariosAlternativas: {
      A: 'Correta. PCT ≥ 0,5-1,0 ng/mL e PCR elevada associam-se com alta sensibilidade a envolvimento renal agudo e cicatrizes no DMSA.',
      B: 'Incorreta. A procalcitonina é liberada ubiquamente por células parenquimatosas sob estímulo bacteriano endotóxico.',
      C: 'Incorreta. Na cistite a PCT é tipicamente normal (< 0,5 ng/mL); valores > 1.000 denotam sepse catastrófica.',
      D: 'Incorreta. Exames laboratoriais de sangue venoso comuns e seguros em qualquer faixa etária.',
    },
  },
  {
    id: 'ped-itu-050',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Síntese das Diretrizes Terapêuticas - Cistite vs Pielonefrite',
    isRevisao: false,
    enunciado:
      'Ao revisar as condutas do protocolo institucional de Infecção do Trato Urinário em Pediatria, um médico residente sintetiza os princípios farmacológicos e clínicos que orientam o tratamento da Cistite e da Pielonefrite. Assinale a alternativa que apresenta a correlação clínica e farmacológica CORRETA entre as duas entidades:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A Cistite é uma infecção vesical baixa tratada ambulatorialmente por via oral com esquemas curtos (5 a 7 dias com Cefalexina ou Nitrofurantoína); enquanto a Pielonefrite é uma infecção parenquimatosa renal potencialmente grave tratada com antibióticos de alta penetração tecidual (Ceftriaxona parenteral ou Cefuroxima oral) por 7 a 14 dias, sendo a Nitrofurantoína formalmente ineficaz e contraindicada na pielonefrite.',
      },
      {
        id: 'B',
        texto:
          'Tanto a cistite quanto a pielonefrite devem ser tratadas obrigatoriamente com nitrofurantoína por 30 dias em ambiente de UTI.',
      },
      {
        id: 'C',
        texto:
          'A pielonefrite nunca exige antibióticos, curando-se espontaneamente com repouso em 100% dos lactentes.',
      },
      {
        id: 'D',
        texto:
          'A cistite em crianças exige internação hospitalar imediata e a pielonefrite deve ser ignorada para evitar custos hospitalares.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Esta questão sintetiza perfeitamente os eixos centrais de conduta de provas de residência médica:\n1) CISTITE: Infecção limitada à bexiga -> Paciente afebril e sem toxemia -> Tratamento ambulatorial por via oral -> Drogas de excreção vesical são adequadas (Cefalexina, Amoxicilina-clavulanato, Nitrofurantoína) -> Duração curta: 5 a 7 dias -> Risco de sequela renal ausente;\n2) PIELONEFRITE: Infecção invasiva do parênquima renal -> Lactente febril, vômitos, prostração -> Exige antibióticos com elevada concentração tecidual renal e sérica (Ceftriaxona, Cefotaxima EV ou Cefuroxima axetil oral) -> A Nitrofurantoína é CONTRAINDICADA por não atingir parênquima renal -> Duração de 7 a 14 dias (habitual de 10 dias) -> Monitorização estrita das primeiras 48-72h para prevenir cicatrizes renais crônicas e sepse urológica.',
    comentariosAlternativas: {
      A: 'Correta. Síntese perfeita: cistite tratada com esquemas orais curtos (inclusive nitrofurantoína) e pielonefrite com cobertura tecidual ampla por 7-14 dias (sem nitrofurantoína).',
      B: 'Incorreta. A nitrofurantoína é contraindicada na pielonefrite e não trata parênquima renal.',
      C: 'Incorreta. Pielonefrite não tratada evolui com destruição de néfrons, cicatrizes renais, sepse e morte.',
      D: 'Incorreta. Inversão dos conceitos clínicos de gravidade e alocação de recursos em saúde.',
    },
  },
  {
    id: 'ped-itu-051',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'USG de Rins e Vias Urinárias - Primeiro Exame de Imagem',
    isRevisao: false,
    enunciado:
      'Lactente de 7 meses, sexo feminino, foi tratada com sucesso para seu primeiro episódio comprovado de pielonefrite aguda por Escherichia coli, completando 10 dias de tratamento com excelente resposta clínica e normalização dos parâmetros inflamatórios. Os pais perguntam sobre a necessidade de investigar a anatomia do trato urinário da criança. De acordo com as diretrizes da Academia Americana de Pediatria (AAP) e da Sociedade Brasileira de Pediatria (SBP), qual é o primeiro exame de imagem indicado para todo lactente após o primeiro episódio confirmado de ITU febril e qual é o seu objetivo principal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ultrassonografia de Rins e Vias Urinárias (USG-RVU); trata-se de método não invasivo, sem radiação ionizante e amplamente disponível, cujo objetivo principal é rastrear anomalias estruturais anatômicas graves, dilatações pielocalicinais, assimetrias renais, cálculos ou sinais sugestivos de uropatia obstrutiva congênita.',
      },
      {
        id: 'B',
        texto:
          'Urografia excretora com contraste iodado venoso em alta pressão para visibilizar nefrons em 3D.',
      },
      {
        id: 'C',
        texto:
          'Ressonância magnética de corpo inteiro com sedação profunda imediata em 100% dos lactentes.',
      },
      {
        id: 'D',
        texto:
          'Nenhum exame de imagem deve ser realizado antes dos 18 anos de vida, mesmo após infecções urinárias febris graves.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A ULTRASSONOGRAFIA DE RINS E VIAS URINÁRIAS (USG-RVU) é universalmente consagrada como o PRIMEIRO EXAME DE IMAGEM a ser realizado em qualquer lactente ou criança jovem (2 meses a 2 anos) após o primeiro episódio confirmado de infecção do trato urinário febril (pielonefrite).\nPrincipais vantagens e objetivos da USG:\n1) Método não invasivo, indolor e completamente isento de radiação ionizante;\n2) Avalia a morfologia e dimensões dos rins (tamanho, ecogenicidade cortical, diferenciação corticomedular);\n3) Detecta anomalias congênitas estruturais do trato urinário (CAKUT): hidronefrose, dilatação de ureter (megaureter), duplicidade pielocalicinal, cistos renais, rim único ou ectópico;\n4) Avalia a bexiga (espessamento parietal por cistite, ureterocele, trabeculações e resíduo pós-miccional);\n5) Rastreia complicações obstrutivas ou litíase.\nA USG normal, no entanto, NÃO afasta refluxo vesicoureteral de baixo ou moderado grau.',
    comentariosAlternativas: {
      A: 'Correta. USG é o exame inicial não invasivo de escolha para rastreio anatômico após primeiro episódio de ITU febril.',
      B: 'Incorreta. A urografia excretora caiu em desuso em pediatria pela alta dose de radiação e risco de nefrotoxicidade por contraste.',
      C: 'Incorreta. RM exige anestesia geral e tem indicação restrita a anomalias complexas selecionadas.',
      D: 'Incorreta. O primeiro episódio de pielonefrite exige investigação inicial com ultrassom para excluir malformações tratáveis.',
    },
  },
  {
    id: 'ped-itu-052',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Timing da Ultrassonografia Renal - Eletiva vs Urgência (48-72h)',
    isRevisao: false,
    enunciado:
      'Dois lactentes com pielonefrite aguda estão internados na enfermaria de pediatria: o Paciente 1 tem 5 meses e apresenta defervescência completa da febre e excelente melhora clínica após 24 horas de ceftriaxona; o Paciente 2 tem 8 meses e persiste com febre de 39,8 °C, prostração intensa e piora laboratorial mesmo após 72 horas de antibioticoterapia venosa adequada. Em relação ao MOMENTO IDEAL (timing) para a realização da Ultrassonografia de Rins e Vias Urinárias nesses dois pacientes, assinale a conduta correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'No Paciente 2 (falha de resposta em 48-72h), a USG renal deve ser realizada em regime de URGÊNCIA IMEDIATA para afastar abscesso intrarrenal, pionefrose ou uropatia obstrutiva sob tensão; no Paciente 1 (boa resposta clínica), a USG pode ser realizada de forma ELETIVA após o controle do quadro agudo.',
      },
      {
        id: 'B',
        texto:
          'Ambos os pacientes devem aguardar no mínimo 5 anos para realizar o ultrassom.',
      },
      {
        id: 'C',
        texto:
          'No paciente com febre persistente o ultrassom é contraindicado, devendo-se apenas triplicar a dose do antibiótico.',
      },
      {
        id: 'D',
        texto:
          'A ultrassonografia de urgência só é autorizada se o paciente apresentar erupção cutânea de varicela.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O momento de realização da Ultrassonografia Renal depende estritamente da resposta clínica do paciente:\n1) INDICAÇÃO DE URGÊNCIA (nas primeiras 24 a 72 horas): Pacientes com evolução atípica, toxemia persistente, choque séptico, massa abdominal palpável, elevação de escórias renais ou AUSÊNCIA DE RESPOSTA CLÍNICA após 48 a 72 horas de antibioticoterapia adequada. O objetivo emergencial é identificar complicações mecânicas ou supurativas que exigem intervenção urológica descompressiva urgente: abscesso renal/perirrenal, pionefrite (pus sob tensão na pelve) ou uropatia obstrutiva calculosa/congênita;\n2) INDICAÇÃO ELETIVA (após resolução do quadro agudo / ambulatorial): Pacientes com boa resposta clínica nas primeiras 48h. Nesses casos, aguardar alguns dias/semanas é até vantajoso, pois as endotoxinas de bacilos Gram-negativos causam paralisia temporária da musculatura lisa ureteral e pielocalicinal, podendo simular hidronefrose transitória na fase inflamatória hiperaguda.',
    comentariosAlternativas: {
      A: 'Correta. Falha clínica em 48-72h exige USG de urgência para afastar abscesso/obstrução; boa resposta permite USG eletiva.',
      B: 'Incorreta. Adiar por anos deixa malformações anatômicas sem diagnóstico e perpetua dano renal.',
      C: 'Incorreta. Febre refratária é a indicação clássica de USG emergencial para descarte de abscesso ou pionefrite.',
      D: 'Incorreta. A indicação de imagem renal baseia-se na gravidade urológica, sem relação com varicela.',
    },
  },
  {
    id: 'ped-itu-053',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Uretrocistografia Miccional (UCRM) - Padrão-Ouro para RVU e VUP',
    isRevisao: false,
    enunciado:
      'A Uretrocistografia Miccional (UCRM) é um dos exames radiológicos mais importantes na propedêutica uropediátrica. Consiste no cateterismo vesical com instilação retrógrada de contraste iodado radiopaco sob fluoroscopia seriada durante as fases de enchimento vesical e micção ativa. A respeito das capacidades diagnósticas da UCRM, assinale a opção correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'É o exame padrão-ouro ("gold standard") para o diagnóstico e graduação do Refluxo Vesicoureteral (RVU) e o único método capaz de visibilizar com nitidez a anatomia da uretra posterior durante a micção, permitindo o diagnóstico definitivo de Válvula de Uretra Posterior (VUP) em meninos.',
      },
      {
        id: 'B',
        texto:
          'Serve exclusivamente para medir a glicose urinária, sendo incapaz de mostrar a anatomia da bexiga e ureteres.',
      },
      {
        id: 'C',
        texto:
          'É um exame que não utiliza radiação ionizante e dispensa sondagem vesical, colhendo imagens por ressonância quântica.',
      },
      {
        id: 'D',
        texto:
          'A UCRM é realizada por punção direta da artéria carótida com cateter cardíaco.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A URETROCISTOGRAFIA MICCIONAL (UCRM) é o exame PADRÃO-OURO em urologia pediátrica para duas finalidades essenciais:\n1) Diagnóstico e estadiamento anatômico do REFLUXO VESICOURETERAL (RVU): documenta o refluxo do contraste da bexiga para o ureter e cálices durante as fases de enchimento e, crucialmente, durante a MICÇÃO ATIVA (quando a pressão intravesical atinge seus maiores valores);\n2) Diagnóstico definitivo de VÁLVULA DE URETRA POSTERIOR (VUP) em meninos: na fase miccional, com fluxo anterógrado sob pressão, a UCRM demonstra a clássica dilatação e balonamento da uretra prostática/posterior proximal com interrupção abrupta do contraste na altura da válvula e afilamento da uretra bulbar distal.\nDesvantagens: invasivo (necessita de cateterismo uretral retrógrado), desconfortável e envolve radiação ionizante.',
    comentariosAlternativas: {
      A: 'Correta. UCRM é padrão-ouro para detectar/graduar RVU e o exame anatômico de escolha para diagnóstico de VUP em meninos.',
      B: 'Incorreta. A UCRM é um estudo radiológico dinâmico morfofuncional da bexiga, ureteres e uretra.',
      C: 'Incorreta. A UCRM utiliza raios-X (radiação ionizante) e requer cateterismo vesical estéril.',
      D: 'Incorreta. O contraste é instilado diretamente na bexiga via sonda uretral retrógrada, sem punção arterial.',
    },
  },
  {
    id: 'ped-itu-054',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Indicações Formais de Uretrocistografia Miccional (UCRM)',
    isRevisao: false,
    enunciado:
      'As diretrizes pediátricas modernas da Academia Americana de Pediatria (AAP) e da Sociedade Brasileira de Pediatria (SBP) racionalizaram a indicação de Uretrocistografia Miccional (UCRM) após o primeiro episódio de ITU febril, evitando procedimentos invasivos desnecessários em crianças com baixo risco de anomalias urológicas graves. Dentre as seguintes situações clínicas em um lactente após episódio de pielonefrite aguda, qual delas CONSTITUI INDICAÇÃO FORMAL para realização de UCRM?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Presença de Ultrassonografia Renal alterada (com hidronefrose moderada/grave, dilatação ureteral, assimetria renal ou duplicidade), episódio de ITU febril recorrente (segundo episódio) ou infecção causada por patógeno atípico (não-E. coli) associada a evolução desfavorável.',
      },
      {
        id: 'B',
        texto:
          'Primeiro episódio de cistite bacteriana afebril em menina de 9 anos com ultrassom completamente normal.',
      },
      {
        id: 'C',
        texto:
          'Lactente que apresentou apenas eritema no bumbum após uso de fralda descartável perfumada.',
      },
      {
        id: 'D',
        texto:
          'Criança hígida de 6 anos que urina sem dor e cuja mãe quer fazer exames por curiosidade preventiva.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'No passado, indicava-se UCRM para todo e qualquer lactente após o primeiro episódio de ITU. Atualmente, a estratégia "bottom-up" consagrada pela AAP e SBP preconiza:\n1) No PRIMEIRO episódio de ITU febril: realiza-se inicialmente apenas a ULTRASSONOGRAFIA RENAL (USG-RVU);\n2) A UCRM é indicada formalmente nos seguintes cenários específicos:\n   a) USG renal com alterações estruturais relevantes: hidronefrose, pielocaliectasia significativa, dilatação de ureter (megaureter), assimetria renal com afinamento cortical, rins policísticos ou suspeita de VUP;\n   b) SEGUNDO episódio de ITU febril (ITU febril recorrente);\n   c) Infecção causada por uropatógeno atípico (microrganismo não-Escherichia coli, como Proteus, Klebsiella, Pseudomonas, Enterococcus) com resposta clínica arrastada ou sepse;\n   d) Elevação persistente de escórias renais (creatinina) ou urossepse grave.\nCistites baixas isoladas com USG normal NÃO têm indicação de UCRM.',
    comentariosAlternativas: {
      A: 'Correta. USG renal alterada, ITU recorrente ou germe não-E. coli grave são as indicações consagradas de UCRM.',
      B: 'Incorreta. Cistite baixa isolada com USG normal não acomete o rim e não justifica exame invasivo como UCRM.',
      C: 'Incorreta. Dermatite de fraldas é problema cutâneo benigno sem relação com investigação urológica invasiva.',
      D: 'Incorreta. A UCRM envolve cateterismo doloroso e radiação ionizante, sendo contraindicada por mera curiosidade.',
    },
  },
  {
    id: 'ped-itu-055',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Timing da UCRM - Aguardar Resolução da Infecção Aguda',
    isRevisao: false,
    enunciado:
      'Lactente de 4 meses do sexo masculino internado com pielonefrite aguda grave apresenta ultrassom de rins com ectasia pielocalicinal bilateral importante (diâmetro anteroposterior da pelve de 14 mm). O residente sugere passar a sonda e realizar a Uretrocistografia Miccional (UCRM) hoje mesmo, no 2º dia de internação, enquanto a criança ainda está febril (38,8 °C). O médico assistente contraindica a realização imediata do exame. Qual é a justificativa técnica para ADIAR A UCRM e realizá-la somente após a resolução completa da infecção aguda e esterilização da urina?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A realização de UCRM na vigência de infecção urinária ativa acarreta risco altíssimo de disseminação bacteriana retrógrada e bacteremia/urosepse pela injeção sob pressão de contraste, além de gerar FALSOS-POSITIVOS DE REFLUXO devido à ação das endotoxinas bacterianas que paralisam transitoriamente o peristaltismo e relaxam o esfíncter ureterovesical.',
      },
      {
        id: 'B',
        texto:
          'A UCRM só pode ser realizada quando a criança atingir exatamente 18 anos de idade e peso superior a 70 kg.',
      },
      {
        id: 'C',
        texto:
          'O contraste iodado perde a sua cor na presença de febre tornando-se invisível na tela do raio-X.',
      },
      {
        id: 'D',
        texto:
          'A bexiga do lactente explode espontaneamente se receber mais de 1 mL de líquido durante a febre.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Uretrocistografia Miccional (UCRM) NUNCA DEVE SER REALIZADA DURANTE A FASE AGUDA DE UMA ITU!\nDuas razões clínicas e biológicas fundamentais justificam essa regra:\n1) RISCO GRAVE DE UROSSEPSE: A bexiga inflamada e repleta de bactérias viáveis, ao ser cateterizada e distendida sob pressão com infusão retrógrada de contraste, sofre microlesões uroteliais com refluxo intraparenquimatoso e entrada maciça de bactérias nos vasos venosos perivesicais, desencadeando choque séptico agudo bacterêmico;\n2) FALSOS-POSITIVOS NO DIAGNÓSTICO DO REFLUXO (RVU Transitório): O lipopolissacarídeo (LPS / endotoxina) das bactérias Gram-negativas causa inflamação da junção ureterovesical e paralisia transitória das fibras musculares lisas da túnica muscular do ureter. Isso pode induzir um refluxo temporário puramente inflamatório que não existia antes e que desaparecerá após a cura.\nRecomendação: Aguardar o término do antibiótico, confirmação de urocultura de controle negativa e ausência de sintomas por pelo menos 1 a 2 semanas (frequentemente 4 a 6 semanas) antes de realizar a UCRM eletiva.',
    comentariosAlternativas: {
      A: 'Correta. UCRM na fase aguda gera risco de choque séptico bacterêmico e falsos-positivos de RVU por relaxamento inflamatório.',
      B: 'Incorreta. A UCRM é realizada em lactentes e crianças pequenas quando indicada, após cura da fase aguda.',
      C: 'Incorreta. O contraste radiopaco baseia-se no número atômico do iodo e não sofre interferência da temperatura corpórea.',
      D: 'Incorreta. Afirmação bizarra e biologicamente absurda.',
    },
  },
  {
    id: 'ped-itu-056',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Classificação do Refluxo Vesicoureteral - Critérios Internacionais (Graus I a V)',
    isRevisao: false,
    enunciado:
      'A classificação internacional do Refluxo Vesicoureteral (RVU) proposta pelo International Reflux Study in Children divide o refluxo em 5 graus anatômicos com base nas imagens da Uretrocistografia Miccional. Assinale a alternativa que correlaciona corretamente o grau do RVU com seus achados radiológicos patognomônicos:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Grau I: refluxo atinge apenas o ureter distal sem dilatação; Grau II: refluxo atinge ureter, pelve renal e cálices SEM dilatação e com impressões papilares nítidas; Grau III: dilatação leve a moderada do ureter e pelve com discreto arredondamento calicinal; Grau IV: dilatação acentuada com tortuosidade ureteral e apagamento da maioria dos fórnices calicinais; Grau V: dilatação e tortuosidade maciças com perda completa das impressões papilares em todos os cálices.',
      },
      {
        id: 'B',
        texto:
          'Grau I é a forma mais grave com indicação cirúrgica imediata e Grau V é o refluxo fisiológico benigno.',
      },
      {
        id: 'C',
        texto:
          'Todos os 5 graus apresentam destruição total do rim com ausência congênita de bexiga.',
      },
      {
        id: 'D',
        texto:
          'Grau III refere-se exclusivamente à presença de cálculo renal de estruvita sem refluxo retrógrado.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Classificação Internacional do Refluxo Vesicoureteral (Graus I a V) é um dos tópicos mais recorrentes em concursos de Pediatria e Cirurgia Pediátrica:\n- GRAU I: O contraste reflui apenas para o ureter, sem alcançar a pelve renal; ureter não dilatado;\n- GRAU II: O contraste atinge o ureter, a pelve renal e os cálices, porém SEM QUALQUER DILATAÇÃO; os fórnices calicinais mantêm-se afilados e as impressões papilares perfeitamente nítidas;\n- GRAU III: Refluxo atinge todo o sistema com DILATAÇÃO LEVE A MODERADA do ureter e da pelve renal; os cálices apresentam discreto arredondamento de suas margens, mas a maioria preserva impressão papilar;\n- GRAU IV: DILATAÇÃO MODERADA A GRAVE com evidente TORTUOSIDADE ureteral; dilatação expressiva da pelve e cálices com apagamento completo dos ângulos agudos dos fórnices, mantendo impressão papilar em poucos cálices;\n- GRAU V: DILATAÇÃO E TORTUOSIDADE MACIÇAS de todo o ureter ("megaureter tortuoso"); pelve enormemente balonizada com PERDA COMPLETA DAS IMPRESSÕES PAPILARES em todos os cálices e frequente refluxo intrarrenal.',
    comentariosAlternativas: {
      A: 'Correta. Descrição fidedigna e precisa da classificação oficial internacional dos Graus I a V de RVU.',
      B: 'Incorreta. A escala é crescente em gravidade (Grau I é o mais brando e Grau V o mais grave).',
      C: 'Incorreta. Graus I e II têm excelente prognóstico e anatomia renal preservada.',
      D: 'Incorreta. A escala classifica estritamente a magnitude e as repercussões dilatatórias do refluxo retrógrado do contraste.',
    },
  },
  {
    id: 'ped-itu-057',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Refluxo Vesicoureteral de Baixo Grau (I e II) - História Natural e Manejo',
    isRevisao: false,
    enunciado:
      'Lactente de 9 meses, sexo feminino, apresentou um episódio de pielonefrite aguda aos 6 meses. O ultrassom de triagem revelou assimetria discreta e a UCRM subsequente demonstrou contraste refluindo para o ureter esquerdo, pelve renal e cálices durante a micção, porém SEM QUALQUER DILATAÇÃO do sistema coletor, mantendo fórnices calicinais afilados e impressões papilares normais (Refluxo Vesicoureteral Grau II unilateral à esquerda). Os pais estão apreensivos temendo necessidade de cirurgia imediata. Qual é a história natural e a conduta recomendada para o RVU de baixo grau (Graus I e II)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de RVU de baixo grau (Grau II), que apresenta taxa de resolução espontânea elevadíssima (mais de 80% a 90% dos casos regridem espontaneamente com o crescimento da criança e alongamento do túnel ureteral submucoso vesical); a conduta prioritária é conservadora e expectante com orientação aos pais e tratamento precoce de eventuais novas infecções, sem indicação cirúrgica imediata.',
      },
      {
        id: 'B',
        texto:
          'O RVU Grau II exige reimplante ureteral cirúrgico bilateral de urgência nas primeiras 48 horas.',
      },
      {
        id: 'C',
        texto:
          'A conduta mandatória é a realização de nefrectomia esquerda profilática antes de 1 ano de vida.',
      },
      {
        id: 'D',
        texto:
          'A criança deve permanecer em repouso absoluto no leito sem poder andar até os 18 anos de idade.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O mecanismo fisiológico que previne o refluxo urinário normal é o comprimento do TÚNEL URETERAL SUBMUCOSO dentro da parede da bexiga. Durante o enchimento e a contração vesical, o aumento da pressão intravesical colaba passivamente esse túnel contra a musculatura do detrusor, agindo como uma válvula unidirecional anti-refluxo (relação ideal comprimento/diâmetro de 5:1).\nNos lactentes com RVU primário de baixo grau (GRAUS I E II), há uma imaturidade do túnel submucoso com comprimento relativamente curto. Com o crescimento somático da criança e expansão da bexiga nos primeiros 3 a 5 anos de vida, o túnel submucoso se ALONGA espontaneamente. Como consequência, MAIS DE 80% A 90% DOS CASOS DE RVU GRAUS I E II RESOLVEM-SE ESPONTANEAMENTE sem necessidade de intervenção cirúrgica. A conduta é estritamente conservadora: vigiar e tratar agressivamente qualquer febre com urocultura, tratar constipação intestinal se presente e orientar os pais.',
    comentariosAlternativas: {
      A: 'Correta. RVU Graus I e II têm resolução espontânea em > 80-90% com o crescimento; manejo é prioritariamente conservador.',
      B: 'Incorreta. Cirurgia anti-refluxo é reservada para graus graves com dano progressivo ou falha do tratamento conservador.',
      C: 'Incorreta. Nefrectomia não tem qualquer cabimento em rim funcionante com refluxo de baixo grau.',
      D: 'Incorreta. A criança deve ter vida perfeitamente normal, estimulando-se atividade física e hidratação.',
    },
  },
  {
    id: 'ped-itu-058',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Refluxo Vesicoureteral de Alto Grau (Graus IV e V) - Risco e Conduta',
    isRevisao: false,
    enunciado:
      'Menino de 11 meses de vida com histórico de duas pielonefrites febris graves por Klebsiella pneumoniae realiza UCRM de controle. O laudo descreve: "Refluxo bilateral maciço com dilatação acentuada e tortuosidade grosseira de ambos os ureteres, dilatação exuberante de ambas as pelves renais com cálices totalmente balonizados e perda completa de todas as impressões papilares em ambos os polos renais, além de visibilização de contraste no parênquima renal (Refluxo Vesicoureteral Grau V bilateral com refluxo intrarrenal)". A respeito do RVU de alto grau (Graus IV e V), assinale a opção correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O RVU de alto grau possui baixa taxa de resolução espontânea (< 15-20%), cursa com alto risco de refluxo intrarrenal e nefropatia de refluxo com cicatrizes parenquimatosas progressivas; está indicada quimioprofilaxia antimicrobiana contínua e avaliação especializada urológica para intervenção cirúrgica (endoscópica com agentes expansores ou reimplante ureterovesical aberto/robótico).',
      },
      {
        id: 'B',
        texto:
          'Trata-se de variante normal benigna que cura espontaneamente em 100% dos meninos até 1 ano de idade sem qualquer conduta.',
      },
      {
        id: 'C',
        texto:
          'O RVU Grau V protege o rim contra infecções por manter a urina em fluxo dinâmico bidirecional contínuo.',
      },
      {
        id: 'D',
        texto:
          'O tratamento definitivo é a suspensão de toda ingestão de líquidos para secar a via excretora.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Refluxo Vesicoureteral de Alto Grau (GRAUS IV E V) representa a extremidade mais grave do espectro da uropatologia pediátrica:\n1) Baixíssima probabilidade de resolução espontânea (< 10% a 20% no grau V), pois há distorção anatômica profunda e ausência quase total do mecanismo valvular submucoso;\n2) Presença de REFLUXO INTRARRENAL: a pressão vesical é transmitida diretamente para os túbulos coletores renais, carreando urina infectada para o interior do parênquima renal, desencadeando isquemia tecidual, apoptose tubular e CICATRIZES RENAIS PROFUNDAS EXTENSAS (Nefropatia do Refluxo);\n3) Consequências tardias: Hipertensão arterial sistêmica na infância/adolescência, proteinúria e Doença Renal Crônica (DRC) terminal;\n4) Manejo: Quimioprofilaxia antimicrobiana contínua mandatória (para manter a urina estéril enquanto aguarda definição cirúrgica) e intervenção cirúrgica urológica corretiva (reimplante ureterovesical pelas técnicas de Cohen/Leadbetter-Politano ou injeção endoscópica de dextranômero/ácido hialurônico - Deflux).',
    comentariosAlternativas: {
      A: 'Correta. RVU IV e V cursam com alto risco de cicatrizes e DRC, baixa cura espontânea e indicação formal de cirurgia urológica.',
      B: 'Incorreta. Grau V é patológico, gravíssimo e raramente regride de forma espontânea.',
      C: 'Incorreta. O refluxo maciço predispõe à persistência bacteriana e elevação de pressão intrarrenal destrutiva.',
      D: 'Incorreta. Restrição hídrica desidrata o paciente e precipita falência renal aguda sobreposta.',
    },
  },
  {
    id: 'ped-itu-059',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Cintilografia Renal com DMSA - Padrão-Ouro para Parênquima Renal',
    isRevisao: false,
    enunciado:
      'A Cintilografia Renal Estática com Ácido Dimercaptossuccínico marcado com Tecnécio-99m (DMSA-Tc99m) é um dos métodos de medicina nuclear mais consagrados na nefrologia pediátrica. A respeito do mecanismo biológico de captação e das indicações clínicas do DMSA, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O DMSA é avidamente captado e fixado pelas células dos túbulos contorcidos proximais do córtex renal, sendo o padrão-ouro ("gold standard") para avaliar o parênquima renal funcionante e detectar lesões inflamatórias agudas (áreas de hipocaptação na pielonefrite) e sequelas cicatriciais crônicas.',
      },
      {
        id: 'B',
        texto:
          'O DMSA é filtrado e eliminado em 2 minutos pela bexiga, servindo exclusivamente para medir a velocidade do jato urinário durante a micção.',
      },
      {
        id: 'C',
        texto:
          'O exame é realizado por via inalatória e avalia prioritariamente a capacidade ventilatória pulmonar.',
      },
      {
        id: 'D',
        texto:
          'A cintilografia com DMSA substitui a necessidade de urocultura para o diagnóstico bacteriológico de ITU.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A CINTILOGRAFIA RENAL ESTÁTICA COM DMSA (ácido dimercaptossuccínico) marcado com Tecnécio-99m é o EXAME PADRÃO-OURO ("GOLD STANDARD") para o estudo do CÓRTEX E PARÊNQUIMA RENAL FUNCIONANTE:\n1) Mecanismo biológico: O radiofármaco é administrado por via venosa e liga-se a proteínas plasmáticas. Cerca de 40% a 50% da dose injetada é seletivamente extraída da circulação peritubular e FIXADA NAS CÉLULAS DO TÚBULO CONTORCIDO PROXIMAL no córtex renal, permanecendo retida por várias horas;\n2) Detecção da Pielonefrite Aguda: Na vigência de infecção renal ativa, a isquemia local, o infiltrado inflamatório e a disfunção tubular impedem a captação do radiotraçador, evidenciando áreas focais ou multifocais de HIPOCAPTAÇÃO ("áreas frias" ou defeitos de captação corticais);\n3) Avaliação da Função Renal Relativa Diferencial: Calcula com exatidão a porcentagem de função de cada rim (normal de 45% a 55% para cada rim);\n4) Diagnóstico definitivo de cicatrizes renais crônicas tardias.',
    comentariosAlternativas: {
      A: 'Correta. DMSA fixa-se nos túbulos proximais e é o padrão-ouro para avaliação do parênquima renal funcionante e cicatrizes.',
      B: 'Incorreta. Quem é filtrado rapidamente e avalia dinâmica de fluxo excretor é o DTPA/MAG3, não o DMSA (estático).',
      C: 'Incorreta. Exame renal administrado por injeção intravenosa.',
      D: 'Incorreta. A urocultura é insubstituível para isolamento e perfil de sensibilidade bacteriana.',
    },
  },
  {
    id: 'ped-itu-060',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Cintilografia com DMSA na Fase Aguda da Pielonefrite',
    isRevisao: false,
    enunciado:
      'Lactente de 1 ano com febre alta e suspeita de pielonefrite aguda realiza uma cintilografia renal com DMSA-Tc99m no 3º dia do quadro agudo. O laudo revela área focal triangular de ausência de captação no polo superior do rim direito, com contornos renais preservados. Qual é o significado fisiopatológico desse defeito cintilográfico agudo e por que a literatura internacional frequentemente contraindica o uso rotineiro do DMSA na fase aguda da infecção?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Representa área de nefrite lobar aguda / hipoperfusão e disfunção tubular inflamatória transitória; o DMSA não é recomendado de rotina na fase aguda porque não altera a conduta terapêutica inicial (que já é antibiótica) e submete a criança a radiação e custos sem benefício prático imediato.',
      },
      {
        id: 'B',
        texto:
          'Confirma infarto renal isquêmico irreversível por trombose da artéria aorta que exige transplante renal imediato.',
      },
      {
        id: 'C',
        texto:
          'Significa que o rim direito nasceu completamente atrofiado e deve ser extirpado cirurgicamente.',
      },
      {
        id: 'D',
        texto:
          'Indica cura milagrosa completa da infecção bacteriana sem necessidade de antibióticos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Na fase aguda da pielonefrite (primeiros dias de infecção), o DMSA é extremamente sensível (> 90%) para demonstrar o foco inflamatório parenquimatoso renal, revelando áreas de hipoconsumo/hipocadastro por edema, vasoconstrição e disfunção tubular proximal aguda induzida por citocinas inflamatórias.\nNo entanto, a Academia Americana de Pediatria (AAP) e a Sociedade Brasileira de Pediatria (SBP) NÃO RECOMENDAM O USO ROTINEIRO DO DMSA NA FASE AGUDA pelas seguintes razões práticas:\n1) Não altera o manejo clínico: a conduta para um lactente febril com piúria e urocultura positiva é administrar antibióticos adequados, independentemente do laudo do DMSA;\n2) Exposição à radiação ionizante e custos elevados;\n3) Um defeito agudo no DMSA pode regredir completamente sem deixar nenhuma sequela após o tratamento eficaz, não permitindo diferenciar precocemente quem terá ou não cicatriz definitiva.',
    comentariosAlternativas: {
      A: 'Correta. Defeito agudo reflete inflamação/isquemia temporária; DMSA não é de rotina na fase aguda pois não muda a conduta médica.',
      B: 'Incorreta. Defeito no DMSA agudo é inflamatório e frequentemente reversível com antibioticoterapia.',
      C: 'Incorreta. Contornos preservados e quadro agudo afastam atrofia congênita.',
      D: 'Incorreta. Hipocaptação aguda comprova pielonefrite em atividade, exigindo tratamento antimicrobiano pleno.',
    },
  },
  {
    id: 'ped-itu-061',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'DMSA Tardio (4 a 6 Meses) - Diagnóstico Definitivo de Cicatriz Renal',
    isRevisao: false,
    enunciado:
      'Criança de 1 ano e 8 meses apresentou pielonefrite aguda grave com RVU Grau III aos 10 meses de vida. O nefrologista pediátrico solicita uma Cintilografia Renal com DMSA após 6 meses do término da infecção aguda. O laudo revela retração cortical nítida no polo renal superior direito com perda localizada de espessura parenquimatosa e função tubular relativa de 32% à direita e 68% à esquerda. A respeito do intervalo temporal de 4 a 6 meses para realização do DMSA tardio, qual é a justificativa técnica correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'É o intervalo mínimo necessário para a resolução completa do edema e das alterações inflamatórias agudas transitórias; defeitos de captação associados a perda de volume cortical que persistem após 4 a 6 meses definem o diagnóstico de CICATRIZ RENAL CRÔNICA DEFINITIVA (Nefropatia Cicatricial).',
      },
      {
        id: 'B',
        texto:
          'Aguardam-se 6 meses porque o Tecnécio-99m só é absorvido pelo corpo após os 2 anos de idade completos.',
      },
      {
        id: 'C',
        texto:
          'O intervalo visa permitir que o rim cicatrize espontaneamente regenerando todos os néfrons perdidos.',
      },
      {
        id: 'D',
        texto:
          'A demora é justificada apenas pela indisponibilidade global de aparelhos de gama-câmara no Brasil.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Para o diagnóstico definitivo de CICATRIZ RENAL CRÔNICA (lesão parenquimatosa cicatricial permanente pós-pielonefrite), a Cintilografia Renal Estática com DMSA DEVE SER REALIZADA NO MÍNIMO 4 A 6 MESES APÓS O EPISÓDIO AGUDO DE ITU.\nFundamento patológico:\nDurante a pielonefrite aguda e nas semanas seguintes, há edema inflamatório, infiltrado leucocitário e isquemia microvascular transitória que impedem a fixação do radiofármaco. Se o exame for feito precocemente (ex.: com 1 mês), não é possível discernir se a hipocaptação decorre de inflamação reversível que ainda vai se recuperar ou de destruição tecidual definitiva.\nApós 4 a 6 meses, o processo biológico de reparação tecidual está completamente finalizado. Qualquer defeito persistente nessa fase tardia (especialmente com entalhe, retração do contorno cortical e redução da função tubular diferencial relativa < 45%) confirma CICATRIZ RENAL DEFINITIVA E IRREVERSÍVEL. Néfrons destruídos não se regeneram, sendo substituídos por tecido fibroso colágeno inerte.',
    comentariosAlternativas: {
      A: 'Correta. Intervalo de 4 a 6 meses permite resolução do edema agudo e consolida o diagnóstico de cicatriz renal crônica definitiva.',
      B: 'Incorreta. O tecnécio pode ser usado em qualquer idade, inclusive no período neonatal quando indicado.',
      C: 'Incorreta. Néfrons humanos destruídos não se regeneram; a lesão consolida-se em fibrose/cicatriz.',
      D: 'Incorreta. O aprazamento decorre de critérios biológicos de cicatrização tecidual, não de escassez técnica.',
    },
  },
  {
    id: 'ped-itu-062',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Cintilografia Dinâmica (DTPA / MAG3 com Furosemida) e Estenose de JUP',
    isRevisao: false,
    enunciado:
      'Lactente de 3 meses de vida realiza ultrassonografia renal que evidencia hidronefrose acentuada isolada à esquerda com dilatação importante da pelve renal (diâmetro anteroposterior da pelve de 28 mm) e cálices em bola, porém com ureter esquerdo de calibre normal (não visualizado) e bexiga normal, sugerindo Estenose da Junção Ureteropélvica (JUP). O urologista pediátrico solicita uma CINTILOGRAFIA RENAL DINÂMICA COM MAG3 (ou DTPA) ASSOCIADA AO TESTE DO DIURÉTICO (FUROSEMIDA). Qual é a finalidade principal dessa cintilografia dinâmica com furosemida?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Avaliar funcionalmente a excreção e o trânsito do fluxo urinário através da junção ureteropélvica, diferenciando uma dilatação hipotônica não obstrutiva de uma OBSTRUÇÃO MECÂNICA VERDADEIRA (padrão obstrutivo com tempo de meia-vida de eliminação T 1/2 > 20 minutos após furosemida), definindo a indicação cirúrgica de Pieloplastia.',
      },
      {
        id: 'B',
        texto:
          'Detectar se a criança possui refluxo gastroesofágico com aspiração pulmonar oculta.',
      },
      {
        id: 'C',
        texto:
          'Curar a estenose ureteral através do efeito mecânico de expansão por radiação beta.',
      },
      {
        id: 'D',
        texto:
          'Medir a pressão arterial dentro dos vasos do cordão umbilical.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A CINTILOGRAFIA RENAL DINÂMICA (utilizando radiotraçadores de filtração/secreção rápida como 99mTc-MAG3 ou 99mTc-DTPA) é o padrão-ouro funcional para o diagnóstico de UROPATIA OBSTRUTIVA, em especial a ESTENOSE DA JUNÇÃO URETEROPÉLVICA (JUP):\n1) Mecanismo: O radiotraçador é filtrado e excretado pelos rins, enchendo a pelve renal. Quando a pelve está repleta de contraste, administra-se FUROSEMIDA intravenosa (1 mg/kg) no minuto 20 do exame para induzir diurese hídrica forçada máxima;\n2) Análise do Gráfico de Eliminação (Renograma):\n   - Padrão NÃO OBSTRUTIVO (dilatação hipotônica/refluxo): Após a furosemida, a urina é eliminada rapidamente da pelve renal (tempo de meia-vida de clareamento T 1/2 < 10 a 15 minutos);\n   - Padrão OBSTRUTIVO MECÂNICO VERDADEIRO (Estenose de JUP): A curva de atividade permanece em ascensão contínua ou em platô mesmo sob diurese forçada, com retenção persistente do radiofármaco na pelve dilatada (T 1/2 > 20 minutos);\nSe associado a queda da função renal diferencial (< 40%), confirma indicação formal de correção cirúrgica (Pieloplastia desmembrada de Anderson-Hynes).',
    comentariosAlternativas: {
      A: 'Correta. MAG3/DTPA com furosemida diferencia dilatação não obstrutiva de obstrução mecânica verdadeira na estenose de JUP.',
      B: 'Incorreta. Avalia o trato urinário superior, sem relação com refluxo gástrico.',
      C: 'Incorreta. É um método estritamente diagnóstico, sem poder terapêutico de lise mecânica.',
      D: 'Incorreta. Não afere pressões umbilicais.',
    },
  },
  {
    id: 'ped-itu-063',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Comparação Metodológica: DMSA vs DTPA/MAG3',
    isRevisao: false,
    enunciado:
      'Um interno de medicina em estágio no pronto-socorro infantil confunde as indicações dos exames de medicina nuclear em nefrologia pediátrica. O preceptor pede para ele resumir a diferença fundamental entre a Cintilografia Renal com DMSA e a Cintilografia Renal com DTPA / MAG3. Assinale a alternativa que expressa com perfeição essa distinção técnica:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O DMSA é uma cintilografia ESTÁTICA que se fixa no parênquima renal (túbulos corticais proximais), sendo o exame padrão para avaliar córtex, função tubular relativa e CICATRIZES; enquanto o DTPA/MAG3 é uma cintilografia DINÂMICA de trânsito rápido, utilizada para avaliar perfusão, ritmo de excreção urinária e OBSTRUÇÃO de vias excretoras.',
      },
      {
        id: 'B',
        texto:
          'O DMSA avalia apenas a bexiga e o DTPA avalia apenas a uretra anterior em meninas.',
      },
      {
        id: 'C',
        texto:
          'DMSA é o nome comercial da penicilina cristalina e DTPA é a vacina contra tétano.',
      },
      {
        id: 'D',
        texto:
          'Ambos os exames são idênticos em todas as propriedades e a escolha depende apenas da cor do frasco.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diferença conceitual mandatória para acertar qualquer questão de nefropediatria:\n1) 99mTc-DMSA (ESTÁTICA):\n   - Onde atua: Fixa-se no parênquima renal (córtex / túbulos proximais);\n   - O que mostra: Anatomia funcional do parênquima, tamanho renal, função relativa (%) e sequelas cicatriciais crônicas;\n   - Palavra-chave: PARÊNQUIMA / CICATRIZ RENAL.\n2) 99mTc-DTPA ou 99mTc-MAG3 (DINÂMICA):\n   - Onde atua: Filtrado e excretado rapidamente pelos rins através da via coletora (pelve, ureter e bexiga);\n   - O que mostra: Percurso temporal do fluxo urinário (curva de renograma) e resposta ao diurético furosemida;\n   - Palavra-chave: EXCREÇÃO / OBSTRUÇÃO (JUP / JUV).',
    comentariosAlternativas: {
      A: 'Correta. DMSA é estático (parênquima/cicatrizes) e DTPA/MAG3 é dinâmico (excreção/obstrução de via urinária).',
      B: 'Incorreta. Nenhum dos dois avalia primariamente uretra ou bexiga (função da UCRM).',
      C: 'Incorreta. Confusão com fármacos antimicrobianos e vacinas (DTPa).',
      D: 'Incorreta. São radiofármacos completamente distintos em farmacodinâmica e aplicabilidade clínica.',
    },
  },
  {
    id: 'ped-itu-064',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Refluxo Intrarrenal e Papilas Compostas - Fisiopatologia da Nefropatia do Refluxo',
    isRevisao: false,
    enunciado:
      'Na fisiopatologia da Nefropatia do Refluxo e formação de cicatrizes renais na infância, destaca-se o fenômeno do REFLUXO INTRARRENAL (IRR). Observa-se que as cicatrizes renais pós-pielonefrite acometem predominantemente os POLOS SUPERIOR E INFERIOR dos rins. Qual é a particularidade anatômica das papilas renais polares que explica essa vulnerabilidade regional seletiva ao refluxo intraparenquimatoso?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Os polos renais apresentam "papilas compostas" com orifícios de ductos coletores (de Bellini) circulares e perpendiculares com orifícios abertos e desprovidos de mecanismo valvular oblíquo antirefluxo (diferente das papilas simples da porção média que possuem orifícios em fenda que se fecham sob pressão), permitindo que a urina infectada reflua livremente para os túbulos renais polares.',
      },
      {
        id: 'B',
        texto:
          'Os polos renais não recebem circulação sanguínea, sendo compostos por cartilagem avascular.',
      },
      {
        id: 'C',
        texto:
          'Apenas os polos renais contêm bactérias anaeróbias que digerem a gordura de Gerota.',
      },
      {
        id: 'D',
        texto:
          'A bexiga conecta-se diretamente aos polos renais através de ductos linfáticos aberrantes.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A predisposição seletiva dos polos renais às cicatrizes da nefropatia do refluxo foi descrita por John Hodson e Ransley & Risdon:\n1) PAPILAS SIMPLES (região média do rim): Apresentam orifícios dos ductos coletores (ductos de Bellini) de aspecto oblíquo em fenda estreita. Quando a pressão na pelve renal aumenta, a mucosa do cálice colaba os orifícios, agindo como válvula antirefluxo competente;\n2) PAPILAS COMPOSTAS (polos superior e inferior do rim): Resultam da fusão embriológica de duas ou mais pirâmides renais. Seus ductos coletores abrem-se na superfície papilar de forma perpendicular e com orifícios amplos e circulares que NÃO se fecham quando a pressão intrapélvica sobe.\nEssa conformação permite a penetração retrógrada direta da urina infectada pelo interior dos ductos coletores até o córtex profundo (REFLUXO INTRARRENAL), deflagrando reação inflamatória destrutiva nos polos superior e inferior, sítios clássicos de cicatrizes renais permanentes.',
    comentariosAlternativas: {
      A: 'Correta. Papilas compostas polares têm ductos abertos perpendiculares sem mecanismo de fechamento, permitindo refluxo intrarrenal.',
      B: 'Incorreta. Os polos renais são intensamente vascularizados por ramos segmentares da artéria renal.',
      C: 'Incorreta. As infecções urinárias são causadas por bactérias facultativas ascendentes, sem relação com gordura de Gerota primária.',
      D: 'Incorreta. A via de ascensão é exclusivamente o lúmen ureteral.',
    },
  },
  {
    id: 'ped-itu-065',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Válvula de Uretra Posterior (VUP) - Quadro Clínico em Meninos',
    isRevisao: false,
    enunciado:
      'Recém-nascido masculino no 2º dia de vida evolui com bexigoma palpável em hipogástrio (massa palpável firme e arredondada supra-sínfise púbica), micção caracterizada por jato urinário fraco, gotejamento contínuo ("dribbling"), elevação de ureia e creatinina e episódios de esforço miccional. A ultrassonografia confirma hidronefrose bilateral importante com dilatação ureteral bilateral e bexiga com paredes acentuadamente espessadas e trabeculadas ("bexiga de esforço"). O diagnóstico mais provável e a causa mais comum de uropatia obstrutiva congênita baixa em meninos é:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Válvula de Uretra Posterior (VUP); anomalia congênita membranosa obstrutiva da uretra prostática que atinge exclusivamente meninos, exigindo descompressão vesical imediata com cateterismo e ablação endoscópica definitiva.',
      },
      {
        id: 'B',
        texto:
          'Cistite de repetição por Staphylococcus saprophyticus adquirida no canal de parto.',
      },
      {
        id: 'C',
        texto:
          'Estenose congênita do piloro hipertrófica.',
      },
      {
        id: 'D',
        texto:
          'Ausência congênita de uretra com drenagem urinária pela fontanela anterior.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A VÁLVULA DE URETRA POSTERIOR (VUP) é a causa mais comum de obstrução infravesical / baixa congênita do trato urinário em meninos (incidência aproximada de 1 para cada 5.000 a 8.000 nascidos vivos masculinos):\n1) Fisiopatologia: Presença de pregas mucosas anômalas na uretra prostática (ao nível do verumontanum) que agem como válvulas mecânicas unidirecionais, impedindo a saída anterógrada do fluxo de urina da bexiga para a uretra distal;\n2) Manifestações clínicas: Bexigoma palpável permanente, jato urinário fraco/interrompido, micção em gotas ("gotejamento aos esforços"), infecção urinária precoce com sepse, acidose metabólica e insuficiência renal neonatal;\n3) Achados de imagem: USG com hidronefrose bilateral, ureterohidronefrose tortuosa e "bexiga de luta" (parede espessada, trabeculada, divertículos). UCRM confirma uretra prostática enormemente dilatada em "tromba" com afilamento distal abrupto;\n4) Manejo imediato: Sondagem vesical de alívio contínua para descompressão e posterior ablação cirúrgica endoscópica da válvula.',
    comentariosAlternativas: {
      A: 'Correta. VUP é a causa clássica de uropatia obstrutiva baixa em meninos com jato fraco, bexiga espessada e hidronefrose bilateral.',
      B: 'Incorreta. S. saprophyticus causa cistite em adolescentes sexualmente ativas, não obstrução congênita neonatal.',
      C: 'Incorreta. Estenose de piloro causa vômitos em jato não biliares, sem acometimento urológico primário.',
      D: 'Incorreta. Alternativa absurda e anatomicamente impossível.',
    },
  },
  {
    id: 'ped-itu-066',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Aspecto da VUP na Uretrocistografia Miccional (UCRM)',
    isRevisao: false,
    enunciado:
      'Menino de 2 meses com histórico de oligoidrâmnio gestacional e hidronefrose bilateral grave é submetido à Uretrocistografia Miccional (UCRM) após controle de infecção urinária. Durante a fase miccional do exame radiológico, qual é a imagem patognomônica clássica que confirma o diagnóstico de Válvula de Uretra Posterior (VUP)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Dilatação e balonamento expressivos da uretra posterior (prostática), com calibre muito aumentado, associada a transição abrupta em fita com afunilamento grave da uretra anterior/bulbar no ponto da membrana obstrutiva.',
      },
      {
        id: 'B',
        texto:
          'Uretra com aspecto de "saca-rolhas" exclusivo da estenose de junção ureteropélvica.',
      },
      {
        id: 'C',
        texto:
          'Completa ausência de contraste na bexiga com extravasamento imediato para o estômago.',
      },
      {
        id: 'D',
        texto:
          'Imagem de vesícula biliar em porcelana com microcálculos radiopacos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Uretrocistografia Miccional (UCRM) é o exame definitivo padrão-ouro para o diagnóstico anatômico da Válvula de Uretra Posterior (VUP). Na fase miccional (quando o paciente urina sob pressão através da uretra), observa-se um aspecto radiológico inconfundível:\n1) URETRA POSTERIOR (uretra prostática proximal) ENORMEMENTE DILATADA E ALONGADA (formato em "escudo", "bulbo" ou "cálice"), decorrente da alta pressão retrógrada hidrostática contra a barreira obstrutiva;\n2) AFUNILAMENTO ABRUPTO com calibre drasticamente reduzido da uretra membranosa e bulbar logo abaixo da válvula;\n3) Colo vesical hipertrofiado e bexiga com múltiplas trabeculações saculares e divertículos;\n4) Frequentemente acompanha-se de refluxo vesicoureteral secundário bilateral (em 50% dos casos).',
    comentariosAlternativas: {
      A: 'Correta. Uretra posterior amplamente dilatada com estreitamento abrupto na uretra bulbar distal é a imagem patognomônica da VUP.',
      B: 'Incorreta. Estenose de JUP situa-se entre o rim e o ureter proximal, não na uretra.',
      C: 'Incorreta. O contraste na UCRM é instilado diretamente na bexiga, sem conexão com o estômago.',
      D: 'Incorreta. Vesícula biliar em porcelana é patologia das vias biliares do adulto, sem relação com uretra.',
    },
  },
  {
    id: 'ped-itu-067',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Quimioprofilaxia de ITU - Indicações Atuais da SBP e AAP',
    isRevisao: false,
    enunciado:
      'O uso crônico de antibióticos profiláticos (quimioprofilaxia) em pediatria passou por rigorosa revisão crítica nos últimos consensos internacionais para evitar seleção de superbactérias resistentes e efeitos adversos. De acordo com as diretrizes consolidadas da Sociedade Brasileira de Pediatria e da Associação Europeia de Urologia Pediátrica, em qual das seguintes situações clínicas a QUIMIOPROFILAXIA ANTIMICROBIANA CONTÍNUA ESTÁ FORMALMENTE INDICADA?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Lactentes com Refluxo Vesicoureteral de alto grau (Graus IV e V), presença de dilatação significativa com suspeita de anomalia urológica obstrutiva enquanto aguarda investigação por imagem, e crianças com ITUs febris frequentes de repetição.',
      },
      {
        id: 'B',
        texto:
          'Em 100% dos recém-nascidos saudáveis sem nenhuma infecção urinária prévia.',
      },
      {
        id: 'C',
        texto:
          'Meninas adolescentes após o primeiro episódio de cistite bacteriana não complicada com USG normal.',
      },
      {
        id: 'D',
        texto:
          'Crianças com bacteriúria assintomática e ausência de leucócitos no sedimento.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A indicação de quimioprofilaxia antimicrobiana contínua (administração de antibiótico em dose única diária à noite, com 1/3 a 1/4 da dose terapêutica habitual) foi restrita a populações pediátricas de alto risco de pielonefrite recorrente e lesão renal progressiva:\nIndicações formais atuais:\n1) Refluxo Vesicoureteral de Alto Grau (Graus III com dilatação progressiva, IV e V) até correção definitiva ou resolução;\n2) Lactentes menores de 1 a 2 anos com hidronefrose significativa ou suspeita de uropatia obstrutiva congênita após pielonefrite febril enquanto aguardam UCRM ou cirurgia;\n3) Crianças com episódios frequentes de Pielonefrite de Repetição (≥ 2 episódios em 6 meses ou ≥ 3 episódios em 1 ano);\n4) Disfunção vesical e intestinal grave (DTUI) com ITU febril recorrente enquanto se institui a uroterapia comportamental.\nPor outro lado, NÃO se indica profilaxia para cistite simples isolada, RVU de baixo grau (I e II) assintomático ou bacteriúria assintomática.',
    comentariosAlternativas: {
      A: 'Correta. RVU alto grau (IV e V), uropatias obstrutivas em lactentes e pielonefrites frequentes de repetição têm indicação de profilaxia.',
      B: 'Incorreta. Recém-nascidos hígidos nunca devem receber profilaxia antimicrobiana.',
      C: 'Incorreta. Primeiro episódio de cistite baixa em escolar hígida com USG normal não tem indicação de antibiótico contínuo.',
      D: 'Incorreta. Bacteriúria assintomática tem caráter protetor benigno e não deve receber profilaxia.',
    },
  },
  {
    id: 'ped-itu-068',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Fármacos e Posologia na Quimioprofilaxia de ITU na Infância',
    isRevisao: false,
    enunciado:
      'Para um lactente de 6 meses com indicação formal de quimioprofilaxia de ITU devido a RVU Grau IV diagnosticado após pielonefrite, o pediatra planeja a prescrição medicamentosa. Quais são os antibióticos comumente empregados para quimioprofilaxia na infância, a posologia temporal e a dose recomendada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Nitrofurantoína (1 a 2 mg/kg/dia) ou Sulfametoxazol-Trimetoprima (1 a 2 mg/kg/dia da fração trimetoprima) ou Cefalexina (10 a 20 mg/kg/dia), administrados em DOSE ÚNICA DIÁRIA À NOITE (ao deitar), aproveitando o período de maior estase urinária noturna na bexiga.',
      },
      {
        id: 'B',
        texto:
          'Gentamicina intravenosa contínua aplicada a cada 4 horas por bomba de infusão domiciliar.',
      },
      {
        id: 'C',
        texto:
          'Ciprofloxacino em megadose administrado 4 vezes ao dia associado a corticoterapia oral.',
      },
      {
        id: 'D',
        texto:
          'Vancomicina oral diária associada a fluconazol profilático.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A técnica da quimioprofilaxia de infecção urinária em pediatria baseia-se em conceitos farmacocinéticos precisos:\n1) Fármacos de escolha:\n   - Nitrofurantoína (1 a 2 mg/kg/dia em dose única noturna) - indicada preferencialmente a partir dos 2 a 3 meses de vida (contraindicada em neonatos pelo risco de hemólise por imaturidade de enzimas eritrocitárias);\n   - Sulfametoxazol-trimetoprima / SMX-TMP (1 a 2 mg/kg/dia de TMP ou 10 mg/kg/dia de SMX em dose única noturna) - a partir dos 2 meses de vida (contraindicada em menores de 6 a 8 semanas pelo risco de kernicterus);\n   - Cefalexina (10 a 20 mg/kg/dia em dose única noturna) - droga de escolha no período neonatal e primeiros 2 meses de vida por seu excelente perfil de segurança hepática e ausência de risco de hemólise ou kernicterus;\n2) Horário de administração: SEMPRE À NOITE, ANTES DE DORMIR. Durante o sono noturno, o intervalo entre as micções é prolongado (estase urinária vesical fisiológica), permitindo que a droga atinja e mantenha concentrações inibitórias na urina vesical por 8 a 10 horas contínuas.',
    comentariosAlternativas: {
      A: 'Correta. Cefalexina, Nitrofurantoína ou SMX-TMP em dose única noturna (1/4 da dose de tratamento) aproveitando a estase noturna.',
      B: 'Incorreta. Aminoglicosídeos são nefrotóxicos/ototóxicos e nunca utilizados para profilaxia oral prolongada.',
      C: 'Incorreta. Quinolonas não são indicadas para profilaxia e doses fracionadas múltiplas não compõem regime profilático.',
      D: 'Incorreta. Esquema estapafúrdio que induziria colite pseudomembranosa e superbactérias.',
    },
  },
  {
    id: 'ped-itu-069',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Cefalexina como Droga de Escolha para Profilaxia no Período Neonatal',
    isRevisao: false,
    enunciado:
      'Recém-nascido de 20 dias de vida com diagnóstico pré-natal de hidronefrose bilateral grave secundária a refluxo vesicoureteral necessita iniciar quimioprofilaxia antimicrobiana. A equipe discute qual fármaco prescrever, considerando a faixa etária neonatal. Qual é o antimicrobiano profilático de escolha nos primeiros 2 meses de vida (menores de 6 a 8 semanas)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Cefalexina por via oral (dose de 10 a 20 mg/kg/dia em tomada única noturna); nos menores de 2 meses, tanto a Nitrofurantoína (risco de anemia hemolítica por imaturidade de enzimas eritrocitárias) quanto o Sulfametoxazol-Trimetoprima (risco de Kernicterus por deslocamento da bilirrubina da albumina) são CONTRAINDICADOS.',
      },
      {
        id: 'B',
        texto:
          'Nitrofurantoína em dose plena, pois os neonatos têm rins imaturos que eliminam o medicamento sem absorção.',
      },
      {
        id: 'C',
        texto:
          'Sulfametoxazol-trimetoprima associado a cloranfenicol venoso.',
      },
      {
        id: 'D',
        texto:
          'Doxiciclina em xarope concentrado.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Esta é uma regra de ouro da farmacoterapia neonatal e questão clássica de provas de residência médica:\nNos recém-nascidos e lactentes com MENOS DE 2 MESES DE VIDA (menos de 6 a 8 semanas), os dois antibióticos profiláticos mais comuns de crianças maiores NÃO PODEM SER UTILIZADOS:\n1) NITROFURANTOÍNA: Contraindicada em < 1 a 2 meses pelo risco de precipitar CRISE HEMOLÍTICA GRAVE decorrente da deficiência fisiológica transitória de glutationa e imaturidade enzimática das hemácias do recém-nascido;\n2) SULFAMETOXAZOL-TRIMETOPRIMA (SMX-TMP): Contraindicado em < 2 meses porque a sulfonamida compete com a bilirrubina não conjugada pelos sítios de ligação da albumina sérica, deslocando a bilirrubina livre para o sistema nervoso central e causando KERNICTERUS (encefalopatia bilirrubínica);\nPortanto, a droga de escolha e mais segura para quimioprofilaxia de ITU no período neonatal e primeiros 60 dias de vida é a CEFALEXINA (10 a 20 mg/kg/dia oral uma vez ao dia).',
    comentariosAlternativas: {
      A: 'Correta. Cefalexina é a droga de escolha em < 2 meses; Nitrofurantoína e SMX-TMP são contraindicados por risco de hemólise e kernicterus.',
      B: 'Incorreta. A nitrofurantoína pode causar hemólise grave no recém-nascido e é contraindicada.',
      C: 'Incorreta. SMX-TMP desloca bilirrubina (kernicterus) e cloranfenicol causa síndrome do bebê cinzento.',
      D: 'Incorreta. Tetraciclinas são contraindicadas em crianças < 8 anos.',
    },
  },
  {
    id: 'ped-itu-070',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Cistografia Radioisotópica (RNC) - Vantagens no Seguimento',
    isRevisao: false,
    enunciado:
      'Menina de 4 anos com diagnóstico prévio comprovado de Refluxo Vesicoureteral Grau II necessita de exame de controle periódico para verificar se houve resolução espontânea do refluxo após 18 meses de acompanhamento. O nefropediatra opta por solicitar uma CISTOGRAFIA RADIOISOTÓPICA (Uretrocistografia Radioisotópica com Tecnécio-99m) em vez da UCRM convencional com raios-X. Qual é a principal vantagem da Cistografia Radioisotópica no seguimento do RVU?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Dose de radiação ionizante significativamente menor (cerca de 50 a 100 vezes menor em comparação à fluoroscopia convencional da UCRM) e monitorização contínua do refluxo com altíssima sensibilidade, sendo excelente para seguimento evolutivo em meninas.',
      },
      {
        id: 'B',
        texto:
          'Não necessita de cateterismo vesical, sendo o radiofármaco administrado por gotas nos olhos.',
      },
      {
        id: 'C',
        texto:
          'Permite visibilizar a mucosa da uretra posterior em meninos com riqueza de detalhes cirúrgicos superior à UCRM.',
      },
      {
        id: 'D',
        texto:
          'Trata e queima o ureter eliminando o refluxo durante a realização do exame.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Cistografia Radioisotópica (ou Cistocintilografia Direta) é realizada instilando-se radiotraçador (como 99mTc-fitato ou DTPA) diluído em soro fisiológico dentro da bexiga através de cateter uretral estéril, sob monitorização de uma gama-câmara:\n1) Vantagem primordial: A DOSE DE RADIAÇÃO ABSORVIDA PELAS GÔNADAS (ovários e testículos) É 50 A 100 VEZES MENOR do que a dose de uma Uretrocistografia convencional por raios-X/fluoroscopia. Além disso, permite a aquisição contínua de imagens durante todo o enchimento e micção, aumentando a sensibilidade para episódios fugazes de refluxo;\n2) Indicação preferencial: Exame ideal para o SEGUIMENTO e controle evolutivo de crianças com RVU previamente diagnosticado (especialmente meninas) ou controle pós-operatório;\n3) Limitação: Resolução anatômica espacial pobre; NÃO permite graduar com precisão os cálices renais nem visibilizar a uretra posterior em meninos, razão pela qual o diagnóstico INICIAL ainda requer a UCRM convencional.',
    comentariosAlternativas: {
      A: 'Correta. Redução drástica da dose de radiação ionizante (50 a 100x menor) e alta sensibilidade no seguimento de RVU.',
      B: 'Incorreta. A técnica direta requer cateterismo vesical com instilação na bexiga.',
      C: 'Incorreta. A resolução anatômica é baixa e não permite visualizar detalhes da uretra masculina (exclusividade da UCRM).',
      D: 'Incorreta. É um método puramente diagnóstico de medicina nuclear, sem ablação térmica.',
    },
  },
  {
    id: 'ped-itu-071',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Cistocintilografia Indireta e Cistografia Ultrassonográfica com Contraste',
    isRevisao: false,
    enunciado:
      'Com o avanço dos métodos diagnósticos para minimizar o desconforto e a radiação em pediatria, foram desenvolvidas a Cistocintilografia Indireta e a Cistografia Ultrassonográfica Miccional com Contraste (CeVUS). A respeito dessas modalidades diagnósticas modernas, assinale a opção correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A Cistocintilografia Indireta é realizada após a fase excretora de um MAG3 intravenoso na micção sem necessidade de sondagem vesical (útil em crianças continentes cooperativas), e a CeVUS utiliza microbolhas no ultrassom para detectar refluxo sem radiação ionizante.',
      },
      {
        id: 'B',
        texto:
          'Ambos os exames foram proibidos pela OMS por causarem mutações no DNA das mitocôndrias em 100% dos lactentes.',
      },
      {
        id: 'C',
        texto:
          'A Cistografia Ultrassonográfica com Contraste utiliza óleo mineral fervente instilado por via retal.',
      },
      {
        id: 'D',
        texto:
          'Nenhum desses exames consegue detectar refluxo vesicoureteral, servindo exclusivamente para o diagnóstico de asma.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Novas abordagens na investigação do refluxo urinário pediátrico:\n1) Cistocintilografia Indireta: O radiofármaco (99mTc-MAG3) é injetado por via venosa. Quando ele é completamente excretado pelos rins e enche a bexiga, a criança (que precisa ser continente e capaz de urinar sob comando) vai ao toalete e urina sob a gama-câmara. Se houver refluxo durante a micção, o radiotraçador sobe de volta para os ureteres. Grande vantagem: NÃO NECESSITA DE CATETERISMO VESICAL (evita o trauma da sondagem);\n2) CeVUS (Contrast-Enhanced Voiding Urosonography / Ultrassonografia com contraste): Instilam-se microbolhas de gás estabilizadas em lipídios na bexiga via cateter uretral e avalia-se em tempo real pelo ultrassom Doppler a ascensão das microbolhas ecogênicas pelo ureter e cálices. Vantagem: Altíssima sensibilidade com ZERO RADIAÇÃO IONIZANTE, sendo cada vez mais adotada na Europa e nos grandes centros brasileiros.',
    comentariosAlternativas: {
      A: 'Correta. Cistocintilografia indireta dispensa cateterismo vesical em continentes; CeVUS detecta refluxo por ultrassom sem radiação.',
      B: 'Incorreta. São técnicas seguras e aprovadas para reduzir radiação ionizante em nefropediatria.',
      C: 'Incorreta. CeVUS utiliza microbolhas biocompatíveis purificadas instiladas na bexiga, sem óleo mineral.',
      D: 'Incorreta. São métodos específicos de avaliação urológica do refluxo vesicoureteral.',
    },
  },
  {
    id: 'ped-itu-072',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Duplicidade Pielocalicinal Completa e Ureterocele',
    isRevisao: false,
    enunciado:
      'Lactente de 5 meses, sexo feminino, tratou pielonefrite aguda. O ultrassom revela rim direito com duas pelves renais distintas (duplicidade pielocalicinal completa) e imagem cística arredondada intravesical no assoalho da bexiga com aspecto em "cabeça de cobra", compatível com URETEROCELE associada à hidronefrose acentuada do polo superior. A UCRM revela refluxo vesicoureteral no ureter do polo inferior. Esse arranjo anatômico clássico da duplicidade ureteral completa obedece a qual princípio embriológico consagrado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Lei de Weigert-Meyer: o ureter que drena o polo superior do rim insere-se mais distal e medialmente na bexiga (frequentemente ectópico, terminando em ureterocele ou estenose obstrutiva), enquanto o ureter que drena o polo inferior insere-se mais cranial e lateralmente na bexiga (tendo trajeto submucoso curto e predispondo a Refluxo Vesicoureteral).',
      },
      {
        id: 'B',
        texto:
          'Lei da Conservação das Massas de Lavoisier aplicada ao epitélio de transição urotelial.',
      },
      {
        id: 'C',
        texto:
          'Princípio de Arquimedes sobre a flutuabilidade de cálculos renais de oxalato de cálcio.',
      },
      {
        id: 'D',
        texto:
          'Regra de Naegele para cálculo da data provável de micção em recém-nascidas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A LEI DE WEIGERT-MEYER é uma das regras anatômicas e embriológicas mais famosas e cobradas em concursos médicos de residência:\nNa DUPLICIDADE PIELOCALICINAL COMPLETA (dois ureteres independentes drenando o mesmo rim):\n1) URETER DO POLO SUPERIOR:\n   - Origina-se do broto ureteral mais cranial;\n   - Tem inserção ECTÓPICA mais MEDIAL E CAUDAL (inferior) na bexiga (ou no colo vesical/uretra/vagina);\n   - Apresenta tendência marcante a OBSTRUÇÃO e formação de URETEROCELE (dilatação cística da porção intravesical do ureter);\n2) URETER DO POLO INFERIOR:\n   - Insere-se em posição mais CRANIAL E LATERAL na parede da bexiga;\n   - Possui trajeto submucoso anormalmente curto e perpendicular;\n   - Apresenta tendência marcante a sofrer REFLUXO VESICOURETERAL (RVU).\nMemorização mnemônica clássica: "O polo superior obstrui (ureterocele), o polo inferior reflui (RVU)".',
    comentariosAlternativas: {
      A: 'Correta. Lei de Weigert-Meyer: polo superior é medial/obstrutivo (ureterocele) e polo inferior é lateral/refluente (RVU).',
      B: 'Incorreta. Lei de Lavoisier é princípio da química sobre conservação de massa.',
      C: 'Incorreta. Princípio de Arquimedes é lei da hidrostática física.',
      D: 'Incorreta. Regra de Naegele calcula data provável do parto em obstetrícia.',
    },
  },
  {
    id: 'ped-itu-073',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Megaureter Primário Não Obstrutivo e Não Refluente',
    isRevisao: false,
    enunciado:
      'Escolar de 6 anos assintomático realiza ultrassom de rotina que evidencia ureter esquerdo dilatado em toda a sua extensão (diâmetro de 11 mm) com dilatação leve da pelve renal. A UCRM afasta refluxo vesicoureteral (refluxo ausente) e a cintilografia renal com MAG3 com furosemida demonstra curva de eliminação com T 1/2 de 8 minutos (sem padrão obstrutivo mecânico). O parênquima renal apresenta espessura e função normal. O diagnóstico dessa dilatação ureteral congênita idiopática é:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Megaureter primário não obstrutivo e não refluente; dilatação congênita benigna decorrente de atraso funcional na maturação das fibras musculares da junção ureterovesical, com excelente prognóstico e indicação de conduta conservadora expectante na ausência de infecções ou perda de função.',
      },
      {
        id: 'B',
        texto:
          'Trombose total da artéria renal direita que exige nefrectomia profilática de urgência.',
      },
      {
        id: 'C',
        texto:
          'Pielonefrite crônica em fase terminal com indicação de hemodiálise diária.',
      },
      {
        id: 'D',
        texto:
          'Tumor maligno de Wilms bilateral com invasão da medula espinhal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O MEGAURETER PRIMÁRIO refere-se à dilatação do ureter (> 7 mm de diâmetro) com ou sem dilatação pielocalicinal, sendo classificado em quatro categorias fundamentais:\n1) Megaureter refluente (com RVU na UCRM);\n2) Megaureter obstrutivo (com estenose da JUV e padrão obstrutivo no MAG3/DTPA com T 1/2 > 20 min);\n3) Megaureter obstrutivo e refluente;\n4) MEGAURETER NÃO OBSTRUTIVO E NÃO REFLUENTE (ou idiopático / funcional):\nCorresponde à maioria dos casos detectados no rastreio ultrassonográfico. Decorre de um segmento justavesical adinâmico ou atraso na maturação das fibras neuromusculares que não coordenam o peristaltismo de forma perfeita, mas SEM oferecer resistência mecânica real ao fluxo urinário (MAG3 normal) e sem permitir refluxo retrógrado (UCRM normal). Apresenta excelente taxa de melhora ou estabilização espontânea com o crescimento, exigindo apenas seguimento clínico e ultrassonográfico periódico, sem necessidade de cirurgia na maioria esmagadora dos pacientes.',
    comentariosAlternativas: {
      A: 'Correta. Megaureter não obstrutivo e não refluente: urodinâmica preservada e conduta conservadora expectante.',
      B: 'Incorreta. Não há quadro vascular agudo ou isquêmico.',
      C: 'Incorreta. A função renal relativa é normal e não há doença renal terminal.',
      D: 'Incorreta. Tumor de Wilms manifesta-se como massa abdominal sólida heterogênea intrarrenal, não dilatação pura do ureter.',
    },
  },
  {
    id: 'ped-itu-074',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Cicatrizes Renais e Complicações Tardias da Nefropatia do Refluxo',
    isRevisao: false,
    enunciado:
      'Uma adolescente de 16 anos comparece à consulta ginecológica para início de método contraceptivo. A aferição da pressão arterial revela PA de 145x95 mmHg (Hipertensão Arterial Sistêmica estágio 2 confirmada em medidas repetidas). A paciente relata histórico na infância de múltiplas internações por "infecções graves no rim" entre 6 meses e 3 anos de idade, sem seguimento posterior. A investigação complementar evidencia proteinúria de 800 mg/24h e a cintilografia com DMSA revela rins com atrofia acentuada e múltiplas cicatrizes corticais bilaterais (Nefropatia do Refluxo). Qual é o mecanismo fisiopatológico que conecta as cicatrizes da pielonefrite na infância à Hipertensão Arterial e proteinúria na vida adulta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A fibrose cicatricial renal provoca áreas focais de hipóxia e isquemia intraparenquimatosa crônica que hiperativam o Sistema Renina-Angiotensina-Aldosterona (SRAA), deflagrando hipertensão arterial renina-dependente; concomitantemente, a perda de néfrons funcionantes sobrecarrega os glomérulos remanescentes com hiperfiltração adaptativa, gerando esclerose focal e proteinúria progressiva.',
      },
      {
        id: 'B',
        texto:
          'A hipertensão é causada exclusivamente pelo aumento de bactérias vivas circulando nas artérias do cérebro.',
      },
      {
        id: 'C',
        texto:
          'As cicatrizes renais consomem todo o sódio do organismo gerando hipotensão crônica compensada.',
      },
      {
        id: 'D',
        texto:
          'O refluxo vesicoureteral estimula a hipófise anterior a produzir adrenalina em doses maciças contínuas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A NEFROPATIA DO REFLUXO / NEFROPATIA CICATRICIAL PÓS-PIELONEFRITE é uma das principais causas de hipertensão arterial secundária e Doença Renal Crônica (DRC) em adolescentes e adultos jovens:\n1) FISIOPATOLOGIA DA HIPERTENSÃO ARTERIAL:\nAs cicatrizes corticais fibróticas contraem o parênquima renal, gerando estenose e colapso de pequenas artérias interlobulares e arteríolas aferentes. A isquemia tecidual local crônica estimula intensamente o aparelho justa-glomerular adjacente a secretar RENINA de forma contínua e autônoma. A hiperativação do eixo Renina-Angiotensina-Aldosterona (SRAA) provoca vasoconstrição sistêmica e retenção de sódio, deflagrando Hipertensão Arterial Sistêmica de difícil controle;\n2) FISIOPATOLOGIA DA PROTEINÚRIA E PROGRESSÃO PARA DRC:\nA perda permanente de néfrons funcionantes impõe aos glomérulos saudáveis sobreviventes uma sobrecarga hemodinâmica compensatória (teoria de Brenner de hiperfluxo, hipertensão capilar glomerular e hiperfiltração). A longo prazo, essa sobrecarga induz estresse mecânico nos podócitos, proteinúria progressiva, Glomeruloesclerose Segmentar e Focal (GESF secundária) e declínio irreversível da filtração glomerular.',
    comentariosAlternativas: {
      A: 'Correta. Isquemia na cicatriz hiperativa renina/SRAA gerando hipertensão; perda de néfrons gera hiperfiltração e proteinúria.',
      B: 'Incorreta. A hipertensão é de origem neuro-humoral (SRAA renal), sem bactérias circulantes crônicas.',
      C: 'Incorreta. A hiperativação do SRAA retém sódio e água, gerando hipertensão.',
      D: 'Incorreta. Adrenalina é secretada pela medula da suprarrenal, não pela adeno-hipófise.',
    },
  },
  {
    id: 'ped-itu-075',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Algoritmo Diagnóstico Integrado de Imagem na Pielonefrite Infantil',
    isRevisao: false,
    enunciado:
      'Para consolidar a abordagem propedêutica racional por imagem na criança com infecção do trato urinário febril, um grupo de preceptores de pediatria elabora um fluxograma baseado nas diretrizes da SBP e AAP. Assinale a alternativa que descreve com perfeição a sequência lógica e as indicações integradas dos exames de imagem (USG, UCRM e DMSA):',
    alternativas: [
      {
        id: 'A',
        texto:
          '1) USG de Rins e Vias Urinárias para todos após a 1ª ITU febril (eletiva se boa resposta clínica; urgência em 48-72h se febre refratária); 2) UCRM indicada se a USG renal for alterada, se houver 2ª ITU febril (recorrência) ou germe atípico não-E. coli grave, sempre realizada após esterilização da urina; 3) Cintilografia com DMSA realizada 4 a 6 meses após a infecção aguda para documentação de cicatriz renal crônica definitiva em pacientes de alto risco.',
      },
      {
        id: 'B',
        texto:
          'Iniciar sempre pela ressonância magnética no 1º dia, seguida de biópsia renal cirúrgica bilateral no 2º dia e dispensar ultrassom.',
      },
      {
        id: 'C',
        texto:
          'Realizar UCRM em 100% dos lactentes durante o pico febril da pielonefrite e proibir o uso de ultrassonografia.',
      },
      {
        id: 'D',
        texto:
          'O único exame de imagem permitido é a radiografia simples de crânio aos 10 anos de idade.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Esta questão sintetiza o ALGORITMO COMPLETO E PADRONIZADO de investigação por imagem na ITU febril da infância cobrado nos principais concursos de residência médica (USP, ENARE, UNIFESP, AMRIGS):\n1) ETAPA 1 - ULTRASSONOGRAFIA RENAL (USG-RVU):\n   - Indicada universalmente após o primeiro episódio de ITU febril confirmada;\n   - Timing: Eletiva (após controle da infecção) se boa evolução; URGÊNCIA (24-72h) se sepse, massa abdominal ou ausência de melhora em 48-72h;\n2) ETAPA 2 - URETROCISTOGRAFIA MICCIONAL (UCRM):\n   - Padrão-ouro para RVU e uretra posterior;\n   - Indicações selecionadas: USG alterada (hidronefrose, ureter dilatado, assimetria), ITU febril recorrente (≥ 2 episódios) ou germe não-E. coli grave;\n   - Regra de ouro: Realizar somente após esterilização da urina e cura da infecção aguda;\n3) ETAPA 3 - CINTILOGRAFIA RENAL COM DMSA TARDIA:\n   - Indicada em pacientes com RVU de alto grau (III a V), pielonefrites recorrentes ou USG com atrofia cortical;\n   - Realizada rigorosamente 4 a 6 meses após o episódio agudo para identificação de cicatrizes renais crônicas permanentes.',
    comentariosAlternativas: {
      A: 'Correta. Algoritmo padrão-ouro internacional: USG inicial -> UCRM se USG alterada/recorrência -> DMSA tardio após 4-6 meses para cicatriz.',
      B: 'Incorreta. Sequência invasiva absurda e desnecessária.',
      C: 'Incorreta. UCRM na fase febril aguda é formalmente contraindicada pelo risco de urossepse e falso-positivo.',
      D: 'Incorreta. Radiografia de crânio não tem qualquer relação com avaliação nefrourológica.',
    },
  },
  {
    id: 'ped-itu-076',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Válvula de Uretra Posterior (VUP) - Fisiopatologia e Apresentação Clínica',
    isRevisao: false,
    enunciado:
      'Lactente do sexo masculino, com 45 dias de vida, é levado à emergência pediátrica pelos pais devido a febre diária de até 39,2 °C, irritabilidade, episódios de vômitos e recusa alimentar iniciados há 3 dias. A mãe relata que, desde o nascimento, observa que o jato urinário do bebê é muito fraco, interrompido e em forma de gotejamento contínuo nas trocas de fralda. Ao exame físico: desidratado leve, hipoativo, afebril no momento; abdome globoso, com massa palpável firme, indolor e arredondada na região suprapúbica estendendo-se até a cicatriz umbilical (bexigoma palpável). O sedimento urinário coletado por cateterismo vesical revela piúria intensa e a urocultura confirma crescimento de Klebsiella pneumoniae > 100.000 UFC/mL. A ultrassonografia de urgência evidencia bexiga espessada com trabeculações grosseiras e hidronefrose bilateral moderada a acentuada com dilatação ureteral. Qual é a principal suspeita etiológica para a uropatia obstrutiva congênita deste lactente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Válvula de Uretra Posterior (VUP), que constitui a causa congênita mais comum de uropatia obstrutiva infravesical grave em recém-nascidos e lactentes do sexo masculino.',
      },
      {
        id: 'B',
        texto:
          'Estenose congênita unilateral da junção ureteropélvica (JUP).',
      },
      {
        id: 'C',
        texto:
          'Incontinência urinária de esforço por fraqueza do assoalho pélvico infantil.',
      },
      {
        id: 'D',
        texto:
          'Cistite bacteriana simples adquirida na maternidade sem repercussão mecânica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A VÁLVULA DE URETRA POSTERIOR (VUP) é a anomalia obstrutiva infravesical congênita mais prevalente e grave em meninos (1 em cada 5.000 a 8.000 nascidos vivos do sexo masculino):\n1) FISIOPATOLOGIA:\nTrata-se de dobras mucosas anômalas persistentes na uretra prostática/membranosa que funcionam como uma válvula de retenção unidirecional. A urina não consegue progredir livremente da bexiga para o meio externo, gerando elevação extrema da pressão intravesical retrógrada;\n2) MANIFESTAÇÕES CLÍNICAS TÍPICAS:\n- Jato urinário fraco, entrecortado, em gotas ou esforço miccional visível;\n- Bexiga de paredes espessadas e trabeculadas ("bexiga de luta/esforço") com resíduo urinário permanente e bexigoma palpável em hipogástrio;\n- Dilatação bilateral do trato urinário superior (uretero-hidronefrose bilateral e refluxo vesicoureteral secundário de alta pressão);\n- Urossepse e pielonefrites de repetição por estase e pressão retrógrada;\n- Risco eminente de perda progressiva da função renal por displasia renal congênita e nefropatia obstrutiva.',
    comentariosAlternativas: {
      A: 'Correta. Bexigoma palpável, jato fraco/gotejamento, hidronefrose bilateral e bexiga espessada em lactente masculino é o quadro clássico de VUP.',
      B: 'Incorreta. A estenose de JUP é supravesical (obstrução na transição pelve-ureter), não cursa com bexigoma nem jato urinário em gotas.',
      C: 'Incorreta. Incontinência de esforço não é patologia congênita obstrutiva que justifique hidronefrose bilateral e retenção em lactente.',
      D: 'Incorreta. Cistite simples não causa hidronefrose bilateral com bexiga espessada nem jato urinário persistentemente em gotas.',
    },
  },
  {
    id: 'ped-itu-077',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'VUP - Diagnóstico Radiológico Padrão-Ouro por UCRM',
    isRevisao: false,
    enunciado:
      'Um recém-nascido do sexo masculino, com diagnóstico ultrassonográfico antenatal de dilatação pielocalicinal bilateral e oligo-hidrâmnio, evolui no período neonatal com dificuldade miccional e ITU neonatal precoce tratada com ampicilina e amicacina. Após estabilização clínica e negativação da urocultura, o paciente é submetido à Uretrocistografia Miccional (UCRM) para elucidação diagnóstica. Qual dos seguintes achados radiológicos na fase miccional da UCRM é patognomônico de Válvula de Uretra Posterior (VUP)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Dilatação acentuada e alongamento da uretra prostática/posterior com afilamento abrupto do lúmen na transição com a uretra membranosa ("sinal da fechadura" ou balonamento uretral proximal), associado a colo vesical hipertrofiado e bexiga trabeculada.',
      },
      {
        id: 'B',
        texto:
          'Uretra posterior totalmente filiforme e colapsada com extravasamento retroperitoneal maciço de contraste.',
      },
      {
        id: 'C',
        texto:
          'Ausência completa de contraste na bexiga e preenchimento exclusivo do cólon sigmoide.',
      },
      {
        id: 'D',
        texto:
          'Pelve renal dilatada com ureter distal de calibre normal sem qualquer alteração uretral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A URETROCISTOGRAFIA MICCIONAL (UCRM) é o EXAME PADRÃO-OURO INDISCUTÍVEL para o diagnóstico definitivo de Válvula de Uretra Posterior (VUP):\n1) IMAGEM CLÁSSICA NA FASE MICCIONAL:\nDurante a micção sob pressão máxima, o contraste preenche a uretra proximal, mas encontra uma barreira obstrutiva fixa formada pelas válvulas de folhetos mucosos anômalos. Observa-se:\n- Dilatação e balonamento exuberante da uretra posterior (prostática);\n- Transição abrupta ("degrau" ou afilamento imediato) para a uretra anterior/bulbar de calibre normal ou diminuído;\n- Esse aspecto na projeção radiológica é conhecido como "sinal do buraco de fechadura" (keyhole sign);\n- Bexiga de paredes irregulares com pseudodivertículos e trabeculações (bexiga de luta/esforço);\n- Hipertrofia do colo vesical e presença frequente de refluxo vesicoureteral (RVU) secundário unilateral ou bilateral de alto grau.',
    comentariosAlternativas: {
      A: 'Correta. A dilatação/balonamento da uretra prostática com afilamento abrupto na uretra membranosa é o achado patognomônico de VUP na UCRM.',
      B: 'Incorreta. A uretra posterior na VUP fica dilatada e balonada pela retenção a montante, não filiforme.',
      C: 'Incorreta. Preenchimento de sigmoide sugeriria fístula colovesical grave, achado estranho à VUP isolada.',
      D: 'Incorreta. Este padrão descreve estenose de junção ureteropélvica (JUP), que é uma patologia alta, sem acometimento de uretra.',
    },
  },
  {
    id: 'ped-itu-078',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'VUP - Conduta Descompressiva Imediata e Fulguração Endoscópica',
    isRevisao: false,
    enunciado:
      'Lactente de 1 mês de vida dá entrada na UTI pediátrica em choque séptico de foco urológico, anúria e acidose metabólica grave. O cateterismo vesical imediato com sonda de alívio fina (uretral 6 Fr) drenou 180 mL de urina purulenta sob alta pressão, seguido de rápida descompressão vesical, melhora da perfusão e estabilização clínica após reposição volêmica e antibioticoterapia parenteral. A ultrassonografia confirma VUP suspeita. Diante do quadro agudo e após a estabilização hidroeletrolítica e bacteriológica, qual é a conduta sequencial correta (descompressão inicial e tratamento cirúrgico definitivo de escolha)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Manter cateterismo vesical contínuo descompressivo (ou vesicostomia cutânea se houver impossibilidade técnica uretral) e, assim que o neonato estiver compensado metabolicamente e com uretra compatível, realizar a fulguração/ablação endoscópica primária da válvula por via transuretral.',
      },
      {
        id: 'B',
        texto:
          'Retirar imediatamente qualquer sonda vesical e manter o paciente sem esvaziamento por 30 dias para recuperar a elasticidade.',
      },
      {
        id: 'C',
        texto:
          'Realizar nefrectomia bilateral imediata como única forma de evitar sepse de repetição.',
      },
      {
        id: 'D',
        texto:
          'Prescrever apenas analgésicos e liberar para casa sem acompanhamento urológico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O manejo da Válvula de Uretra Posterior (VUP) envolve duas etapas interdependentes cruciais:\n1) MANEJO EMERGENCIAL (DESCOMPRESSÃO IMEDIATA):\n- Passagem de sonda vesical uretral de pequeno calibre (sonda de alívio ou Foley 6 Fr sem insuflar balão de forma excessiva na uretra) para descompressão contínua da bexiga e do trato superior;\n- A descompressão alivia a pressão retrógrada nos rins, reverte a uropatia obstrutiva aguda, melhora a filtração glomerular e permite drenagem de urina infectada;\n- Caso a cateterização uretral não seja possível por estenose/dificuldade anatômica, a vesicostomia cutânea temporária é a alternativa salva-vidas;\n2) TRATAMENTO DEFINITIVO DE ESCOLHA:\n- FULGURAÇÃO OU ABLAÇÃO ENDOSCÓPICA PRIMÁRIA DA VÁLVULA: com o paciente metabolicamente estabilizado e uretra calibrosa o suficiente para passagem do cistoscópio pediátrico, realiza-se a ressecção endoscópica das cúspides da válvula (nas posições de 5, 7 e 12 horas do relógio).\n- Esse procedimento restaura a perviedade da uretra de forma minimamente invasiva e definitiva.',
    comentariosAlternativas: {
      A: 'Correta. Descompressão vesical imediata (sonda/vesicostomia) seguida de fulguração endoscópica primária da válvula é a sequência padrão-ouro.',
      B: 'Incorreta. Manter o paciente sem sonda perpetua a uropatia obstrutiva, anúria, acidose e urossepse letal.',
      C: 'Incorreta. Nefrectomia bilateral deixaria a criança anéfrica dependente de hemodiálise/óbito.',
      D: 'Incorreta. VUP é uma emergência cirúrgica urológica potencialmente fatal.',
    },
  },
  {
    id: 'ped-itu-079',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'VUP Antenatal - Oligoidrâmnio, Sequência de Potter e Displasia Renal',
    isRevisao: false,
    enunciado:
      'Uma gestante primigesta de 32 semanas realiza ultrassonografia obstétrica morfológica que demonstra feto masculino com hidronefrose bilateral volumosa, bexiga fetal excessivamente distendida e espessada e ausência quase total de líquido amniótico (oligo-hidrâmnio grave). Qual é a complicação neonatal extra-renal mais temida imediatamente após o nascimento decorrente dessa uropatia obstrutiva intrauterina grave e qual o seu mecanismo fisiopatológico?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Hipoplasia pulmonar neonatal grave com insuficiência respiratória precoce refratária e pneumotórax (Sequência de Potter), pois o líquido amniótico é formado predominantemente pela urina fetal a partir do segundo trimestre e sua presença é indispensável para o desenvolvimento e expansão alveolar fetal.',
      },
      {
        id: 'B',
        texto:
          'Retinopatia da prematuridade por excesso de oxigenação tecidual intrauterina.',
      },
      {
        id: 'C',
        texto:
          'Fechamento prematuro do canal arterial por hipotermia do líquido intra-amniótico.',
      },
      {
        id: 'D',
        texto:
          'Pancreatite hemorrágica congênita por refluxo biliar para a circulação sistêmica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A conexão fisiopatológica entre a obstrução urinária congênita fetal e a mortalidade neonatal precoce é a SEQUÊNCIA DE POTTER:\n1) PRODUÇÃO DE LÍQUIDO AMNIÓTICO:\nA partir de 14–16 semanas de gestação, a quase totalidade do volume de líquido amniótico provém da excreção da urina fetal funcional;\n2) OBSTRUÇÃO POR VUP E OLIGOIDRÂMNIO:\nA Válvula de Uretra Posterior impede o esvaziamento vesical, reduzindo drasticamente o débito de urina na cavidade uterina, deflagrando oligo-hidrâmnio ou anidrâmnio severo;\n3) HIPOPLASIA PULMONAR:\nO líquido amniótico é aspirado e deglutido pelo feto, exercendo pressão positiva física expansora sobre a árvore traqueobrônquica embrionária. Na ausência de líquido (anidrâmnio), a compressão mecânica uterina sobre o tórax fetal impede a proliferação e maturação alveolar, resultando em HIPOPLASIA PULMONAR HIPOPLÁSICA SEVERA.\nAo nascimento, esses recém-nascidos apresentam insuficiência respiratória grave, baixa complacência pulmonar, hipertensão pulmonar persistente e altíssimo risco de barotrauma (pneumotórax), constituindo a principal causa de óbito neonatal na VUP.',
    comentariosAlternativas: {
      A: 'Correta. A urina fetal forma o líquido amniótico; sua ausência impede o desenvolvimento alveolar gerando hipoplasia pulmonar letal (Potter).',
      B: 'Incorreta. A retinopatia da prematuridade relaciona-se a hiperóxia pós-natal e prematuridade, sem elo com a VUP.',
      C: 'Incorreta. O canal arterial é mantido pérvio por prostaglandinas intrauterinas e hipoxemia fisiológica.',
      D: 'Incorreta. Não há qualquer associação patológica entre VUP e pancreatite congênita.',
    },
  },
  {
    id: 'ped-itu-080',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Disfunção Vesical e Intestinal (BBD) - Apresentação Clínica e Cruzamento Pélvico',
    isRevisao: false,
    enunciado:
      'Menina de 6 anos é trazida pela mãe ao ambulatório de pediatria com história de três episódios de cistite bacteriana confirmada por urocultura no último ano. A genitora relata que a criança "segura o xixi o dia todo", tem escapes de urina na calcinha e, com frequência, adota uma postura característica ao sentar-se sobre o próprio calcanhar cruzando as pernas quando tem vontade de urinar. Além disso, a criança evacua fezes endurecidas, volumosas e ressecadas a cada 4 ou 5 dias, com dor e episódios de soiling fecal (encoprese retentiva). A ultrassonografia de rins e vias urinárias é morfologicamente normal. Qual é a denominação dessa entidade clínica e qual é a postura típica descrita?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Disfunção Vesical e Intestinal (BBD - Bladder and Bowel Dysfunction / Síndrome de Eliminação Disfuncional), associada à clássica "manobra de Vincent" (postura retentiva em que a criança comprime o períneo com o calcanhar ou cruza as pernas para inibir a contração do detrusor).',
      },
      {
        id: 'B',
        texto:
          'Bexiga neurogênica secundária a trauma raquimedular despercebido ao nascimento.',
      },
      {
        id: 'C',
        texto:
          'Estenose congênita do meato uretral feminino com refluxo uretrovaginal obrigatório.',
      },
      {
        id: 'D',
        texto:
          'Síndrome da bexiga hiperativa pura sem qualquer componente ou interferência gastrointestinal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A DISFUNÇÃO VESICAL E INTESTINAL (BBD - Bladder and Bowel Dysfunction), historicamente conhecida como Síndrome de Eliminação Disfuncional (SED), é uma causa prevalente e frequentemente subdiagnosticada de ITUs de repetição em crianças em idade escolar:\n1) QUADRO CLÍNICO TÍPICO:\n- Associação obrigatória entre sintomas do trato urinário inferior (LUTS: urgência miccional, polaciúria, incontinência/escapes diurnos, enurese noturna) e CONSTIPAÇÃO INTESTINAL CRÔNICA (evacuações infrequentes, fezes Bristol 1-2, encoprese retentiva por escape);\n2) MANOBRA DE RETENÇÃO (SINAL DE VINCENT):\n- A criança com contrações desinibidas do detrusor adota reflexamente comportamentos de retenção: cruza fortemente as pernas, agacha-se em cócoras apoiando o calcanhar firmemente contra o períneo (manobra de Vincent) para comprimir a uretra e abortar a micção involuntária;\n- Esse padrão vicioso condiciona hiperatividade esfincteriana externa e dissinergia detrusor-esfíncter funcional.',
    comentariosAlternativas: {
      A: 'Correta. BBD / Síndrome de eliminação disfuncional: constipação intestinal crônica associada a escapes urinários e manobra retentiva de Vincent.',
      B: 'Incorreta. Não há disrafismo espinhal, déficit neurológico de membros inferiores ou alteração de reflexos sacrais.',
      C: 'Incorreta. Estenose de meato em meninas é raríssima e não explica a constipação com encoprese associada.',
      D: 'Incorreta. A intersecção da via fecal e urinária no assoalho pélvico é total; ignorar o componente intestinal perpetua o fracasso do tratamento.',
    },
  },
  {
    id: 'ped-itu-081',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Fisiopatologia da BBD na Gênese da ITU de Repetição',
    isRevisao: false,
    enunciado:
      'Na fisiopatologia da Disfunção Vesical e Intestinal (BBD), a constipação intestinal crônica exerce papel determinante na predisposição a infecções urinárias recorrentes. Qual alternativa explica com exatidão os mecanismos biomecânicos e microbiológicos pelos quais o fecaloma e a retenção retal crônica provocam ITUs de repetição em crianças com trato urinário anatomicamente normal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O reto excessivamente distendido por fezes impactadas comprime diretamente a parede posterior da bexiga e o colo vesical, desencadeando contrações involuntárias do detrusor, hipertonia do esfíncter externo, esvaziamento vesical incompleto com resíduo urinário pós-miccional elevado (estase) e colonização perineal maciça por uropatógenos entéricos.',
      },
      {
        id: 'B',
        texto:
          'As bactérias intestinais perfuram a parede retal íntegra e nadam diretamente pela linfa até os rins sem passar pela bexiga.',
      },
      {
        id: 'C',
        texto:
          'A constipação impede que a medula óssea fabrique anticorpos IgG contra Escherichia coli.',
      },
      {
        id: 'D',
        texto:
          'O fecaloma produz toxinas químicas que neutralizam todo o potássio renal, alcalinizando os néfrons de forma permanente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A inter-relação entre o reto e a bexiga decorre da sua proximidade anatômica no assoalho pélvico e do compartilhamento da inervação sacral (S2-S4):\n1) MECANISMO MECÂNICO / ANATÔMICO:\nO reto retentor de fezes endurecidas (megarreto funcional) projeta-se anteriormente, comprimindo a base da bexiga e o trígono. Isso gera obstrução funcional do fluxo de saída durante a micção e irritação mecânica do músculo detrusor;\n2) MECANISMO DINÂMICO (RESÍDUO PÓS-MICCIONAL):\nA contração paradoxal da musculatura do assoalho pélvico impede o relaxamento esfincteriano adequado, resultando em esvaziamento incompleto e formação de RESÍDUO URINÁRIO PÓS-MICCIONAL patológico (estase urinária, meio de cultura estagnado);\n3) MECANISMO MICROBIOLÓGICO:\nA estase fecal prolongada e os episódios de escape (soiling) levam a colonização maciça do intróito vaginal, fenda vulvar e região periuretral por enterobactérias virulentas (E. coli com fímbrias P), que ascendem com extrema facilidade.',
    comentariosAlternativas: {
      A: 'Correta. Compressão mecânica vesical pelo reto cheio -> hiperatividade do detrusor/dissinergia esfincteriana -> resíduo urinário elevado e colonização perineal.',
      B: 'Incorreta. As infecções urinárias na BBD são de via ascendente pela uretra, não por fístula/translocação linfática direta ao rim.',
      C: 'Incorreta. A constipação não afeta a hematopoiese nem a produção medular de imunoglobulinas sistêmicas.',
      D: 'Incorreta. Mecanismo absurdo sem respaldo fisiopatológico.',
    },
  },
  {
    id: 'ped-itu-082',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Manejo Terapêutico da BBD - Uroterapia Comportamental e Desimpactação',
    isRevisao: false,
    enunciado:
      'Um menino de 7 anos apresenta diagnóstico firmado de Disfunção Vesical e Intestinal (BBD) com ITU de repetição, constipação refratária e resíduo pós-miccional elevado. O residente de pediatria propõe prescrever imediatamente quimioprofilaxia com antibiótico contínuo por 12 meses e suspender a investigação. O preceptor intervém e corrige a conduta. Qual é o tratamento de PRIMEIRA LINHA, prioritário e fundamental que deve ser instituído para esse paciente para erradicar as infecções e restaurar a função vesicoesfincteriana?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tratamento agressivo da constipação intestinal (desimpactação fecal e manutenção com Polietilenoglicol - PEG 4000 associado a dieta rica em fibras/líquidos) somado à Uroterapia Comportamental (micções programadas a cada 2-3 horas sem segurar a urina, postura correta no vaso sanitário com apoio para os pés e relaxamento do assoalho pélvico).',
      },
      {
        id: 'B',
        texto:
          'Nefrectomia parcial imediata associada a cirurgia de aumento vesical com alça ileal.',
      },
      {
        id: 'C',
        texto:
          'Restrição hídrica severa para menos de 200 mL/dia para impedir a bexiga de encher.',
      },
      {
        id: 'D',
        texto:
          'Administração de antibióticos venosos em ambiente de UTI por 6 meses sem intervir no hábito intestinal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O manejo da Disfunção Vesical e Intestinal (BBD) fundamenta-se na restauração dos reflexos fisiológicos de eliminação:\n1) CONTROLE INTESTINAL PRIORITÁRIO:\nNão há sucesso no controle urológico sem esvaziamento retal eficaz. O pilar medicamentoso é o POLIETILENOGLICOL (PEG 4000) sem eletrólitos, um laxativo osmótico seguro, palatável e de longo prazo, iniciado em dose de desimpactação (1 a 1,5 g/kg/dia por 3-5 dias) e continuado em manutenção (0,5 a 0,8 g/kg/dia por meses) para garantir fezes pastosas diárias (Bristol tipo 3-4);\n2) UROTERAPIA PADRÃO (MEDIDAS COMPORTAMENTAIS):\n- Micção com horário marcado (timed voiding): urinar a cada 2 a 3 horas durante o dia, sem aguardar a sensação de urgência;\n- Postura miccional anatômica: apoio obrigatório para os pés (banqueta/redutor de assento infantil) que garante flexão de quadril a 90° e relaxamento muscular completo do diafragma pélvico;\n- Dupla micção (double voiding): urinar novamente 2 a 3 minutos após o primeiro jato para drenar urina residual;\n- Ingestão hídrica fracionada e regular ao longo do dia;\nO uso de antibióticos profiláticos sem tratar a BBD apenas gera resistência bacteriana sem curar o problema.',
    comentariosAlternativas: {
      A: 'Correta. O pilar resolutivo da BBD é tratar a constipação (PEG) + uroterapia comportamental (micção programada e postura pélvica adequada com apoio de pés).',
      B: 'Incorreta. Cirurgias de ampliação vesical são reservadas a bexigas neurogênicas microcísticas de alta pressão refratárias.',
      C: 'Incorreta. A restrição hídrica piora a constipação e concentra a urina, favorecendo ainda mais infecções urinárias.',
      D: 'Incorreta. Antibioticoterapia isolada sem corrigir a disfunção pélvica intestinal é inútil e deletéria.',
    },
  },
  {
    id: 'ped-itu-083',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Quimioprofilaxia Antimicrobiana - Indicações Formais Baseadas em Evidências',
    isRevisao: false,
    enunciado:
      'Nas últimas duas décadas, as diretrizes internacionais (Academia Americana de Pediatria - AAP, European Association of Urology - EAU e Sociedade Brasileira de Pediatria - SBP) revisaram drasticamente as indicações de quimioprofilaxia antimicrobiana contínua após episódios de ITU na infância. De acordo com as evidências atuais de alta qualidade, em qual das situações clínicas abaixo a quimioprofilaxia antimicrobiana contínua está FORMALMENTE INDICADA?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Lactente de 4 meses do sexo feminino com Refluxo Vesicoureteral de alto grau (graus IV ou V) documentado em UCRM, aguardando maturação/avaliação cirúrgica.',
      },
      {
        id: 'B',
        texto:
          'Escolar de 8 anos com o primeiro episódio de cistite bacteriana simples após início das férias escolares.',
      },
      {
        id: 'C',
        texto:
          'Lactente de 10 meses que apresentou o primeiro episódio de ITU febril por E. coli com ultrassonografia renal absolutamente normal.',
      },
      {
        id: 'D',
        texto:
          'Criança de 5 anos com bacteriúria assintomática isolada detectada em exame de rotina escolar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A indicação de QUIMIOPROFILAXIA ANTIMICROBIANA em pediatria tornou-se altamente restrita e criteriosa, devido ao risco comprovado de indução de bactérias multirresistentes e ausência de benefício protetor em casos leves:\n1) INDICAÇÕES FORMAIS CONSAGRADAS:\n- REFLUXO VESICOURETERAL DE ALTO GRAU: graus IV e V em lactentes e crianças pequenas (nestes pacientes, a regurgitação de urina sob alta pressão atinge o parênquima renal com alto risco de novas pielonefrites e formação rápida de cicatrizes destrutivas);\n- Lactentes com hidronefrose obstrutiva ou anomalias estruturais complexas graves aguardando correção urológica definitiva;\n- Pacientes com histórico de infecções urinárias febris de repetição (≥ 2 a 3 episódios em 6 meses) associadas a cicatriz renal prévia documentada em DMSA ou RVU moderado sintomático;\n2) CONTRAINDICAÇÃO DE PROFILAXIA DE ROTINA:\n- Não está indicada após o 1º episódio de pielonefrite com anatomia normal;\n- Não está indicada em cistite isolada;\n- Não está indicada em RVU de baixo grau (graus I e II) sem infecções de repetição;\n- Formalmente contraindicada na bacteriúria assintomática.',
    comentariosAlternativas: {
      A: 'Correta. RVU de alto grau (graus IV e V) em lactentes é uma das principais indicações formais de profilaxia contínua para prevenir pielonefrite e cicatrizes.',
      B: 'Incorreta. Cistite isolada em escolar requer apenas tratamento curto da crise aguda e orientação comportamental.',
      C: 'Incorreta. Primeiro episódio com USG normal não tem qualquer indicação de profilaxia medicamentosa contínua.',
      D: 'Incorreta. Bacteriúria assintomática nunca deve receber profilaxia antimicrobiana.',
    },
  },
  {
    id: 'ped-itu-084',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Fármacos de Escolha na Quimioprofilaxia Urinária e Posologia Noturna',
    isRevisao: false,
    enunciado:
      'Uma menina de 3 anos com Refluxo Vesicoureteral grau IV e histórico de duas pielonefrites tem indicação precisa de quimioprofilaxia antimicrobiana contínua. Em relação à ESCOLHA DO FÁRMACO, à POSOLOGIA DIÁRIA e ao HORÁRIO DE ADMINISTRAÇÃO recomendados para essa faixa etária, assinale a opção correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Nitrofurantoína na dose de 1 a 2 mg/kg/dia (ou Sulfametoxazol-trimetoprima na dose de 2 mg/kg/dia de TMP), administrada em DOSE ÚNICA DIÁRIA À NOITE, antes de dormir.',
      },
      {
        id: 'B',
        texto:
          'Ciprofloxacino na dose de 40 mg/kg/dia dividido de 6 em 6 horas durante o almoço.',
      },
      {
        id: 'C',
        texto:
          'Gentamicina intramuscular diária em dias alternados pela manhã.',
      },
      {
        id: 'D',
        texto:
          'Amoxicilina em dose plena de 90 mg/kg/dia fracionada em 4 tomadas diárias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As drogas de primeira escolha para Quimioprofilaxia de ITU em crianças acima de 2 meses de vida são:\n1) FÁRMACOS DE ESCOLHA:\n- NITROFURANTOÍNA: 1 a 2 mg/kg/dia (apenas para crianças > 2 a 3 meses de vida);\n- SULFAMETOXAZOL-TRIMETOPRIMA (TMP-SMX): 2 mg/kg/dia de Trimetoprima associada a 10 mg/kg/dia de Sulfametoxazol (para crianças > 2 meses de vida);\n2) REGRA DE OURO DO HORÁRIO (DOSE ÚNICA NOTURNA):\n- A dose deve ser administrada em tomada única à noite, imediatamente antes de a criança adormecer;\n- RACIONAL FARMACOLÓGICO: O período noturno é o momento em que a bexiga permanece cheia por mais tempo (6 a 10 horas de sono sem esvaziamento), o que favoreceria a multiplicação bacteriana em urina estagnada. A tomada noturna atinge altas concentrações intraluminais vesicais justamente durante essa janela crítica de estase, impedindo a adesão e replicação bacteriana sem exercer pressão de seleção maciça sobre a microbiota fecal intestinal.',
    comentariosAlternativas: {
      A: 'Correta. Nitrofurantoína 1-2 mg/kg/dia ou TMP-SMX em dose única noturna constitui o esquema profilático consagrado.',
      B: 'Incorreta. Quinolonas são proscritas para profilaxia contínua pediátrica pelo risco de toxicidade articular e indução de resistência rápida.',
      C: 'Incorreta. Aminoglicosídeos parenterais crônicos são nefrotóxicos e ototóxicos, inviáveis para profilaxia ambulatorial.',
      D: 'Incorreta. Amoxicilina plena altera flora colônica e induz beta-lactamases rapidamente, sem efeito profilático prolongado.',
    },
  },
  {
    id: 'ped-itu-085',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Quimioprofilaxia em Lactentes Menores de 2 Meses - Particularidades Neonatais',
    isRevisao: false,
    enunciado:
      'Lactente do sexo masculino com 28 dias de vida, com diagnóstico antenatal de hidronefrose bilateral volumosa e suspeita de Válvula de Uretra Posterior, acabou de ter alta hospitalar após tratamento de pielonefrite neonatal por E. coli. A equipe urológica indica quimioprofilaxia antimicrobiana contínua enquanto aguarda agendamento cirúrgico de fulguração da válvula. Considerando a farmacocinética e os riscos toxicológicos específicos do período neonatal e lactentes jovens (< 2 meses), qual é o antimicrobiano profilático de escolha e quais fármacos usuais estão CONTRAINDICADOS nessa faixa etária?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O antimicrobiano de escolha é a Cefalexina (10 a 15 mg/kg/dia em dose única noturna); o Sulfametoxazol-trimetoprima é contraindicado pelo risco de kernicterus (deslocamento da bilirrubina ligada à albumina) e a Nitrofurantoína é contraindicada pelo risco de anemia hemolítica (imaturidade da enzima G6PD).',
      },
      {
        id: 'B',
        texto:
          'O antimicrobiano de escolha é o Sulfametoxazol-trimetoprima em dose tripla, sendo a cefalexina proscrita no primeiro ano.',
      },
      {
        id: 'C',
        texto:
          'A Nitrofurantoína é a droga obrigatória em neonatos com icterícia, pois acelera a conjugação hepática da bilirrubina.',
      },
      {
        id: 'D',
        texto:
          'Tetraciclina em infusão venosa diária é a única medicação permitida em recém-nascidos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A escolha antimicrobiana no período neonatal (< 2 meses) é um tema clássico de provas de residência devido às peculiaridades enzimáticas e hepáticas:\n1) FÁRMACO DE ESCOLHA NO NEONATO / LACTENTE JOVEM (< 2 MESES):\n- CEFALEXINA (10 a 15 mg/kg/dia, dose única noturna) ou AMOXICILINA (10 a 15 mg/kg/dia);\n- Possuem perfil de segurança excelente, ausência de toxicidade hepática/hematológica e eliminação renal ativa;\n2) CONTRAINDICAÇÕES FORMAIS NESSA FAIXA ETÁRIA:\n- SULFAMETOXAZOL-TRIMETOPRIMA (TMP-SMX): É formalmente contraindicado em menores de 6 a 8 semanas de vida. As sulfonamidas competem com a bilirrubina pelos sítios de ligação à albumina sérica, deslocando a bilirrubina indireta livre para o sistema nervoso central e deflagrando ENCEFALOPATIA BILIRRUBÍNICA (KERNICTERUS);\n- NITROFURANTOÍNA: É contraindicada em menores de 1 a 3 meses pelo risco de anemia hemolítica induzida por estresse oxidativo, devido à imaturidade fisiológica dos sistemas enzimáticos eritrocitários (glutationa redutase e G6PD).',
    comentariosAlternativas: {
      A: 'Correta. Cefalexina é a droga segura < 2 meses; sulfas provocam kernicterus e nitrofurantoína causa hemólise por imaturidade de G6PD.',
      B: 'Incorreta. Sulfametoxazol em menores de 2 meses é contraindicado pelo risco gravíssimo de kernicterus.',
      C: 'Incorreta. Nitrofurantoína induz hemólise em neonatos, piorando a hiperbilirrubinemia.',
      D: 'Incorreta. Tetraciclinas são contraindicadas em crianças menores de 8 anos pelo depósito ósseo e manchamento dentário permanente.',
    },
  },
  {
    id: 'ped-itu-086',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Toxicidade e Efeitos Adversos da Nitrofurantoína em Profilaxia Prolongada',
    isRevisao: false,
    enunciado:
      'Uma criança de 4 anos em uso de quimioprofilaxia com Nitrofurantoína há 8 meses por Refluxo Vesicoureteral grau IV é trazida para consulta de rotina. A mãe relata preocupação porque notou que a urina da menina assumiu uma coloração castanho-amarelada escura nos últimos meses, mas a criança está assintomática, com bom ganho ponderal e urocultura negativa. Além de tranquilizar a família quanto a essa alteração cromática esperada, qual é o conhecimento farmacológico correto sobre os eventos adversos e limitações da nitrofurantoína em uso prolongado?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A coloração acastanhada da urina é um metabólito inócuo e esperado da nitrofurantoína; os efeitos adversos mais comuns são gastrointestinais leves (náuseas/vômitos), enquanto toxicidade pulmonar (pneumonite intersticial crônica/fibrose) e neuropatia periférica são reações idiossincráticas raras em uso prolongado que exigem suspensão imediata.',
      },
      {
        id: 'B',
        texto:
          'A urina castanha indica falência renal aguda fulminante irreversível com necessidade de transplante imediato.',
      },
      {
        id: 'C',
        texto:
          'A nitrofurantoína deve ser associada a contraste iodado oral diário para reverter a cor da urina para azul.',
      },
      {
        id: 'D',
        texto:
          'A droga não apresenta qualquer efeito adverso conhecido na história da medicina pediátrica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Aspectos farmacológicos da Nitrofurantoína essenciais para a prática clínica e provas:\n1) ALTERAÇÃO CROMÁTICA DA URINA:\n- A nitrofurantoína e seus metabólitos são naturalmente excretados pelos rins como pigmentos cromógenos que conferem à urina uma tonalidade amarela intensa, âmbar ou castanho-escura. Esse achado é absolutamente inofensivo e reversível, não indicando hemólise, colúria nem nefrotoxicidade;\n2) PERFIL DE TOXICIDADE:\n- Efeitos comuns: Intolerância gastrointestinal (náuseas, desconforto abdominal e anorexia), facilmente atenuados quando o medicamento é administrado junto a uma refeição ou copo de leite antes de dormir;\n- Efeitos adversos raros / crônicos: Toxicidade pulmonar (reação aguda de hipersensibilidade com tosse, febre e infiltrado pulmonar eosinofílico, ou fibrose intersticial pulmonar crônica em tratamentos superiores a 6-12 meses), neuropatia periférica e hepatotoxicidade imunomediada. O aparecimento de tosse inexplicada ou dispneia na vigência de nitrofurantoína profilática exige interrupção mandatória da droga.',
    comentariosAlternativas: {
      A: 'Correta. Urina castanha é alteração inócua pelo pigmento da droga; queixas respiratórias/neurológicas raras exigem suspensão.',
      B: 'Incorreta. Não se trata de insuficiência renal nem colúria, mas de excreção fisiológica do próprio princípio ativo.',
      C: 'Incorreta. Conduta absurda sem qualquer fundamento farmacológico.',
      D: 'Incorreta. Como qualquer antibacteriano, possui efeitos adversos gastrointestinais e reações pulmonares raras descritas.',
    },
  },
  {
    id: 'ped-itu-087',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Fatores Anatômicos Masculinos - Fimose, Prepúcio Íntegro e Risco de ITU',
    isRevisao: false,
    enunciado:
      'Lactente do sexo masculino, com 5 meses de vida, apresenta o segundo episódio documentado de pielonefrite aguda por Escherichia coli. Ao exame físico genital, observa-se anel prepucial estreito que não permite a exposição da glande (fimose fisiológica), sem sinais flogísticos locais, balanopostite ou lesões cicatriciais. Em relação à presença do prepúcio intacto como fator de risco para ITU no primeiro ano de vida e às indicações médicas de postectomia (circuncisão), assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Meninos não circuncidados menores de 1 ano apresentam risco de 4 a 10 vezes maior de desenvolver ITU quando comparados a circuncidados, devido à colonização bacteriana na superfície mucosa interna do prepúcio; em lactentes com ITUs febris de repetição ou malformações urinárias de alto risco, a postectomia médica profilática é recomendada.',
      },
      {
        id: 'B',
        texto:
          'A circuncisão é formalmente proibida pela SBP e AAP em qualquer circunstância médica pediátrica.',
      },
      {
        id: 'C',
        texto:
          'O prepúcio é um tecido completamente estéril e impermeável que impede a passagem de bactérias em 100% dos meninos.',
      },
      {
        id: 'D',
        texto:
          'A postectomia só reduz o risco de infecção respiratória alta por vírus sincicial respiratório.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A relação entre o prepúcio, circuncisão e infecção urinária infantil é amplamente documentada na literatura urológica pediátrica:\n1) EPIDEMIOLOGIA E RISCO RELATIVO:\n- Nos primeiros 12 meses de vida, meninos não circuncidados têm uma incidência de ITU significativamente maior (risco relativo de 4 a 10 vezes superior em relação aos circuncidados);\n- MOTIVO FISIOPATOLÓGICO: A superfície interna da mucosa do prepúcio possui densa concentração de receptores celulares aos quais as fímbrias P e fímbrias tipo 1 da Escherichia coli se ligam com alta avidez, criando um reservatório prepucial de uropatógenos a poucos milímetros do meato uretral;\n2) INDICAÇÕES MÉDICAS DE POSTECTOMIA (CIRCUNCISÃO):\n- Embora a circuncisão neonatal universal de rotina não seja recomendada no Brasil por razões profiláticas populacionais, a POSTECTOMIA MÉDICA TERAPÊUTICA é formalmente indicada em:\n  a) Meninos com ITUs febris recorrentes;\n  b) Presença de uropatia de alto risco subjacente (Refluxo Vesicoureteral graus IV-V, VUP ou megaureter obstrutivo);\n  c) Fimose verdadeira não retrátil associada a balanopostites de repetição refratárias ao corticoide tópico.',
    comentariosAlternativas: {
      A: 'Correta. Risco de 4-10x maior de ITU em lactentes masculinos não circuncidados; postectomia indicada em ITUs de repetição/malformações graves.',
      B: 'Incorreta. A postectomia por indicação médica em ITU recorrente é amplamente chancelada pelas sociedades internacionais.',
      C: 'Incorreta. A mucosa prepucial interna é um nicho clássico de colonização e replicação bacteriana.',
      D: 'Incorreta. A circuncisão atua no microbioma urogenital, sem qualquer relação com vírus respiratórios.',
    },
  },
  {
    id: 'ped-itu-088',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Aleitamento Materno como Fator de Proteção contra ITU Infantil',
    isRevisao: false,
    enunciado:
      'Estudos epidemiológicos comprovam consistentemente que o Aleitamento Materno Exclusivo (AME) confere proteção estatisticamente significativa contra a ocorrência de infecção do trato urinário nos primeiros meses de vida. Quais são os mecanismos biológicos presentes no leite humano responsáveis por essa proteção contra uropatógenos entéricos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Os Oligossacarídeos do Leite Humano (HMOs) atuam como análogos de receptores solúveis que mimetizam os sítios de ligação do urotélio, promovendo inibição competitiva contra as fímbrias de E. coli, somados à presença de IgA secretória (sIgA), lactoferrina e modulação da microbiota fecal com predomínio de Bifidobactérias protetoras.',
      },
      {
        id: 'B',
        texto:
          'O leite materno contém altas doses de penicilina cristalina natural sintetizada pelos ductos galactóforos.',
      },
      {
        id: 'C',
        texto:
          'O leite materno acidifica o sangue da criança até atingir pH menor que 6,0, matando bactérias por acidose metabólica.',
      },
      {
        id: 'D',
        texto:
          'O aleitamento materno impede fisicamente a bexiga do lactente de produzir urina até o sexto mês.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O papel protetor do leite humano contra infecções do trato urinário decorre de potentes fatores imunológicos e antiaderentes:\n1) OLIGOSSACARÍDEOS DO LEITE HUMANO (HMOs) COMO "ISCAS SOLÚVEIS":\nOs HMOs e glicoproteínas do leite materno contêm estruturas carboidrato idênticas aos oligossacarídeos da superfície das células do urotélio vesical e renal. Ao serem excretados parcialmente pela urina e presentes no períneo, ligam-se competitivamente às fímbrias bacterianas (antiadesinas), impedindo que a bactéria se fixe na mucosa urinária;\n2) IMUNOGLOBULINA A SECRETÓRIA (sIgA):\nA sIgA transferida da mãe pelo leite possui especificidade contra antígenos de enterobactérias do trato gastrointestinal materno, reduzindo a carga e a virulência da flora colônica do bebê;\n3) LACTOFERRINA E LISOZIMA:\nA lactoferrina sequestra ferro livre no lúmen intestinal, impedindo o crescimento bacteriano ferro-dependente de bacilos Gram-negativos;\n4) EFEITO BIFIDOGÊNICO:\nFavorece o predomínio de bactérias benéficas (Bifidobacterium e Lactobacillus), mantendo o pH fecal ácido e inibindo a colonização perineal por cepas uropatogênicas.',
    comentariosAlternativas: {
      A: 'Correta. HMOs agem como receptores solúveis análogos inibindo adesão de fímbrias, associados a sIgA, lactoferrina e predomínio de bifidobactérias.',
      B: 'Incorreta. O leite humano não produz antibióticos sintéticos como a penicilina.',
      C: 'Incorreta. A acidose sistêmica grave seria fatal; o leite materno mantém a homeostase ácido-básica perfeita.',
      D: 'Incorreta. O lactente sob AME produz abundante débito urinário claro e fisiológico.',
    },
  },
  {
    id: 'ped-itu-089',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Bexiga Neurogênica e Mielomeningocele - Cateterismo Limpo Intermitente (CLI)',
    isRevisao: false,
    enunciado:
      'Lactente de 3 meses, com antecedente de correção cirúrgica ao nascer de mielomeningocele lombossacra, apresenta bexiga neurogênica com padrão de dissinergia detrusor-esfíncter, alta pressão de perda intravesical e resíduo pós-miccional maciço documentado em estudo urodinâmico. A criança já apresentou um episódio prévio de urossepse. Qual é o pilar terapêutico PADRÃO-OURO indispensável para garantir o esvaziamento vesical programado, prevenir lesão renal obstrutiva progressiva e controlar o risco de novas infecções sintomáticas nesta condição?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Cateterismo Limpo Intermitente (CLI) realizado a cada 3 a 4 horas com sonda uretral lubrificada, frequentemente associado a anticolinérgicos (ex: oxibutinina) para reduzir as pressões de contração detrusora e preservar a função renal superior.',
      },
      {
        id: 'B',
        texto:
          'Uso permanente de sonda vesical de demora metálica sem nunca trocá-la.',
      },
      {
        id: 'C',
        texto:
          'Manobra de Credé contínua (compressão suprapúbica manual vigorosa com o punho fechado durante todas as trocas de fralda).',
      },
      {
        id: 'D',
        texto:
          'Proibir o esvaziamento da bexiga para promover a dilatação de acomodação passiva dos rins.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Na Bexiga Neurogênica decorrente de disrafismos espinhais (mielomeningocele), a preservação do parênquima renal é a prioridade máxima do acompanhamento multidisciplinar:\n1) CATETERISMO LIMPO INTERMITENTE (CLI):\n- Introduzido por Lapides na década de 1970, revolucionou o prognóstico da bexiga neurogênica;\n- Consiste na sondagem uretral estéril/limpa a cada 3 a 4 horas por cuidadores treinados;\n- Drena completamente a bexiga, elimina a estase urinária e reduz a pressão intravesical crônica;\n- Reduz drasticamente a taxa de infecções urinárias sintomáticas parenquimatosas e protege contra refluxo secundário;\n2) ASSOCIAÇÃO COM ANTICOLINÉRGICOS (OXIBUTININA):\n- Pacientes com detrusor hiperativo ou baixa complacência vesical utilizam anticolinérgicos orais ou intravesicais para reduzir o tônus muscular detrusor, mantendo a bexiga sob baixa pressão entre as cateterizações;\n3) CONDUTA EM SONDAGEM DE DEMORA OU MANOBRA DE CREDÉ:\n- Cateter de demora crônico predispõe a infecções bacterianas graves e litíase por biofilme;\n- A manobra de Credé (expressão manual) é formalmente CONTRAINDICADA em pacientes com dissinergia esfincteriana, pois a compressão manual contra um esfíncter fechado dispara refluxo de alta pressão direto para os rins.',
    comentariosAlternativas: {
      A: 'Correta. CLI regular a cada 3-4h associado a anticolinérgico é a intervenção padrão-ouro para proteção do trato urinário superior na bexiga neurogênica.',
      B: 'Incorreta. Cateter de demora crônico gera infecção bacteriana polimicrobiana, erosão uretral e litíase.',
      C: 'Incorreta. A manobra de Credé em esfíncter não relaxado gera hiperpressão e refluxo maciço destrutivo para os rins.',
      D: 'Incorreta. A falta de esvaziamento causa pionefrite, urossepse e falência renal terminal.',
    },
  },
  {
    id: 'ped-itu-090',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Bacteriúria Assintomática em Pediatria - Conduta Baseada em Evidências',
    isRevisao: false,
    enunciado:
      'Uma menina de 7 anos, previamente hígida, assintomática, com crescimento e desenvolvimento normais, comparece à consulta de puericultura. A mãe trouxe uma urocultura colhida por jato médio solicitada em "check-up pediátrico de rotina" por outro profissional, cujo laudo revelou: > 100.000 UFC/mL de Escherichia coli sensível a todas as classes de antimicrobianos. O exame de sedimento urinário (EAS) é absolutamente inocente, com 2 leucócitos/campo e ausência de nitrito. A criança nega febre, disúria, dor abdominal ou qualquer alteração do hábito miccional e intestinal. De acordo com as diretrizes da Sociedade Brasileira de Pediatria e da Academia Americana de Pediatria, qual é a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Não prescrever antibióticos e apenas orientar a família; trata-se de Bacteriúria Assintomática, condição benigna em crianças saudáveis que não causa dano renal, não evolui para cicatrizes e cujo tratamento antimicrobiano é contraindicado por selecionar cepas bacterianas resistentes e erradicar cepas comensais protetoras.',
      },
      {
        id: 'B',
        texto:
          'Iniciar imediatamente Ceftriaxona intramuscular por 14 dias para evitar meningite bacteriana.',
      },
      {
        id: 'C',
        texto:
          'Internar a paciente em isolamento respiratório e realizar cistoscopia com biópsia vesical de urgência.',
      },
      {
        id: 'D',
        texto:
          'Prescrever Nitrofurantoína por 2 anos contínuos como profilaxia para manter a urina estéril.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A BACTERIÚRIA ASSINTOMÁTICA (BA) em crianças hígidas é um tema consagrado em concursos de residência médica:\n1) DEFINIÇÃO:\nPresença de urocultura positiva em contagem significativa (≥ 100.000 UFC/mL de patógeno único) em paciente completamente sem queixas clínicas (afebril, sem dor, sem urgência ou disúria) e sem sinais de resposta inflamatória tecidual (leucocitúria ausente ou mínima);\n2) DIRETRIZES DE MANEJO:\n- NÃO TRATAR! A erradicação de bactérias em bacteriúria assintomática é formalmente contraindicada;\n- As cepas de E. coli colonizadoras na BA costumam ser menos virulentas (frequentemente desprovidas de fímbrias P patogênicas) e desempenham um papel simbiótico de "nicho ocupado", impedindo a colonização por cepas mais invasivas e uropatogênicas;\n- Ensaios clínicos demonstraram que o tratamento com antibióticos NÃO reduz futuras infecções febris, NÃO previne cicatrizes e, ao contrário, seleciona microrganismos multirresistentes com aumento do risco de infecções sintomáticas subsequentes;\n- Exceção para tratamento de BA: gestantes e pacientes que serão submetidos a procedimentos urológicos invasivos com sangramento de mucosa.',
    comentariosAlternativas: {
      A: 'Correta. Bacteriúria assintomática em criança hígida não se trata; o uso de antibiótico seleciona bactérias resistentes e é deletério.',
      B: 'Incorreta. Tratamento parenteral agressivo em paciente sem doença é iatrogenia grave.',
      C: 'Incorreta. Procedimento invasivo totalmente despropositado.',
      D: 'Incorreta. Profilaxia prolongada para BA é formalmente proscrita em todas as diretrizes.',
    },
  },
  {
    id: 'ped-itu-091',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Litíase Urinária por Proteus mirabilis e Cálculos de Estruvita',
    isRevisao: false,
    enunciado:
      'Menino de 4 anos com histórico de infecções urinárias de repetição por Proteus mirabilis é levado ao pronto-socorro com hematúria macroscópica indolor e dor lombar intermitente. O exame sumário de urina (EAS) evidencia pH urinário persistentemente alcalino de 8,5, piúria e presença de cristais em forma de "tampa de caixão" (prismas retangulares). A radiografia e ultrassonografia de abdome demonstram um cálculo radiopaco volumoso preenchendo toda a pelve renal e os cálices superior e inferior direitos (cálculo coraliforme). Qual é a composição mineral típica deste cálculo associado a bactérias produtoras de urease e qual a sua fisiopatologia?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Fosfato amoníaco magnesiano (Estruvita) associado a carbonato-apatita; decorre da produção da enzima urease pelo Proteus mirabilis, que hidrolisa a ureia em amônia e dióxido de carbono, alcalinizando intensamente a urina e precipitando íons magnésio, amônio e fosfato.',
      },
      {
        id: 'B',
        texto:
          'Oxalato de cálcio puro por excesso de consumo de espinafre e vitamina C na dieta infantil.',
      },
      {
        id: 'C',
        texto:
          'Ácido úrico puro formado exclusivamente em urinas ácidas com pH menor que 5,0.',
      },
      {
        id: 'D',
        texto:
          'Cistina pura causada por defeito congênito de absorção tubular de glicose.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A formação de cálculos infecciosos coraliformes por Proteus mirabilis é uma via fisiopatológica clássica e indispensável:\n1) FISIOPATOLOGIA DA UREASE:\n- O Proteus mirabilis (e outras bactérias como Klebsiella, Morganella, Pseudomonas) secreta abundantemente a enzima UREASE;\n- A urease catalisa a reação: Ureia + H2O -> 2 NH3 (Amônia) + CO2;\n- A amônia gerada hidrata-se rapidamente em íons amônio (NH4+) e hidroxila (OH-), elevando o pH urinário para valores patológicos francamente alcalinos (> 7,5 a 8,5);\n2) CRISTALIZAÇÃO E FORMAÇÃO DE ESTRUVITA:\n- Em meio intensamente alcalino e rico em amônio, a solubilidade do fosfato cai vertiginosamente, ocorrendo a precipitação de sais de FOSFATO AMONÍACO MAGNESIANO (MgNH4PO4.6H2O - ESTRUVITA) e fosfato de cálcio (carbonato-apatita);\n- Os cristais ao microscópio exibem a clássica morfologia tridimensional prismática em "tampa de caixão";\n- Esses cálculos crescem de forma acelerada, ramificando-se no interior do sistema coletor até moldar a pelve e os cálices renais (cálculo coraliforme ou staghorn calculus);\n3) MANEJO:\n- Os cálculos abrigam bactérias viáveis em sua matriz orgânica; portanto, a esterilização clínica com antibióticos isolados é impossível. O tratamento exige remoção cirúrgica completa (nefrolitotripsia percutânea) associada a antibioticoterapia para erradicar o foco.',
    comentariosAlternativas: {
      A: 'Correta. Proteus produz urease -> degrada ureia em amônia -> eleva pH urinário para > 8,0 -> precipita cristais de estruvita (tampa de caixão) gerando cálculos coraliformes.',
      B: 'Incorreta. Cálculos de oxalato de cálcio são de origem metabólica, não infecciosa dependente de urease.',
      C: 'Incorreta. Cálculos de ácido úrico formam-se em pH urinário ácido (< 5,5) e são radiotransparentes no raio-X.',
      D: 'Incorreta. Cistinúria é erro inato de transporte de aminoácidos dibásicos (cistina, ornitina, lisina, arginina), sem relação com Proteus.',
    },
  },
  {
    id: 'ped-itu-092',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Abscesso Renal e Fleimão (Nefrite Lobar Aguda) - Diagnóstico e Conduta',
    isRevisao: false,
    enunciado:
      'Lactente de 11 meses com pielonefrite aguda comprovada por E. coli está internado em uso de Ceftriaxona venosa há 72 horas em dose adequada. A despeito do tratamento, a criança mantém picos diários de febre alta de até 40 °C, toxemia persistente, dor lombar à palpação profunda e elevação adicional da proteína C-reativa. Diante da falha terapêutica em 72h, a ultrassonografia renal com Doppler revela uma lesão nodular intraparenquimatosa hipoecogênica bem delimitada de 4,5 cm no polo superior do rim direito, com ausência de fluxo interno ao Doppler e reforço acústico posterior. A Tomografia Computadorizada contrastada confirma abscesso renal volumoso com realce anelar periférico de contraste. Qual é a conduta sequencial mais adequada para este caso?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Associar ou manter antibioticoterapia parenteral de amplo espectro guiada por cultura e indicar Drenagem Percutânea Guiada por Imagem (USG ou TC) com posicionamento de cateter de drenagem para descompressão e envio de secreção para bacteriologia, visto que se trata de abscesso intrarrenal volumoso (> 3 a 5 cm).',
      },
      {
        id: 'B',
        texto:
          'Suspender todos os antibióticos e aguardar resolução espontânea com massagem lombar.',
      },
      {
        id: 'C',
        texto:
          'Prescrever apenas vitamina C oral em ambiente domiciliar.',
      },
      {
        id: 'D',
        texto:
          'Realizar biópsia renal com agulha grossa sem qualquer drenagem e reiniciar antibiótico de 4 em 4 anos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O ABSCESSO RENAL / CORTEGOGRAMA SUPURATIVO é uma das complicações graves mais importantes de pielonefrites complicadas na infância:\n1) SUSPEITA CLÍNICA:\nPersistência de febre, toxemia ou leucocitose após 48 a 72 horas de antibioticoterapia venosa apropriada para pielonefrite aguda;\n2) DIAGNÓSTICO POR IMAGEM:\n- USG com Doppler: identifica massa líquida/espessa avascular, com debris celulares e reforço acústico;\n- Tomografia Computadorizada (TC) com contraste: é o método padrão de maior acurácia anatômica, evidenciando área hipoatenuante central (necrose liquefativa) delimitada por halo periférico espesso que se impregna intensamente pelo meio de contraste (realce anelar);\n3) DIRETRIZES DE TRATAMENTO:\n- Lesões pequenas (< 3 cm) ou fleimão (nefrite bacteriana focal aguda pré-liquefativa): podem ser manejadas clinicamente apenas com antibioticoterapia parenteral prolongada (3 a 4 semanas);\n- Abscessos volumosos (≥ 3 a 5 cm) ou pacientes sépticos: a antibioticoterapia isolada tem penetração tecidual insuficiente na cápsula fibrótica. A intervenção de escolha é a DRENAGEM PERCUTÂNEA GUIADA POR USG/TC com dreno de sucção/Pigtail, procedimento minimamente invasivo que poupa o parênquima renal e evita nefrectomia aberta.',
    comentariosAlternativas: {
      A: 'Correta. Abscessos volumosos (> 3-5 cm) com febre refratária exigem drenagem percutânea guiada por imagem associada a antibióticos parenterais.',
      B: 'Incorreta. Suspender antibiótico em abscesso em expansão leva a choque séptico e óbito.',
      C: 'Incorreta. Abscesso bacteriano parenquimatoso não responde a vitaminas orais.',
      D: 'Incorreta. Biópsia diagnóstica não trata coleção líquida purulenta sob tensão; a conduta é a drenagem terapêutica do abscesso.',
    },
  },
  {
    id: 'ped-itu-093',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Sinéquia de Pequenos Lábios (Fusão Labial) e Risco de ITU em Lactentes',
    isRevisao: false,
    enunciado:
      'Lactente do sexo feminino, com 10 meses de vida, apresenta o segundo episódio de infecção do trato urinário febril por E. coli. Ao realizar o exame físico minucioso da genitália externa, o pediatra identifica aderência translúcida completa da linha média dos pequenos lábios, cobrindo o introito vaginal e a uretra, restando apenas um minúsculo orifício superior por onde goteja a urina (sinéquia/fusão de pequenos lábios quase total). A mãe relata que, ao urinar, forma-se um abaulamento líquido na vulva antes da eliminação da urina. Qual é a conduta inicial terapêutica recomendada para essa condição e qual o mecanismo predisponente para ITU?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A sinéquia acentuada cria uma câmara de retenção vulvar com refluxo uretrovaginal e estase de urina durante a micção, favorecendo proliferação bacteriana e ITU; o tratamento clínico inicial de escolha consiste na aplicação tópica suave de pomada de estrogênio conjugado (ou corticoide tópico) na linha de fusão por 2 a 4 semanas, evitando-se a separação traumática mecânica forçada.',
      },
      {
        id: 'B',
        texto:
          'Realizar tração mecânica forçada imediata no consultório sem anestesia para romper a sinéquia com pinça cirúrgica.',
      },
      {
        id: 'C',
        texto:
          'Indicar reconstrução vulvoperineal cirúrgica de urgência sob circulação extracorpórea.',
      },
      {
        id: 'D',
        texto:
          'Não intervir e prescrever antibióticos venosos contínuos até os 18 anos de idade.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A SINÉQUIA DE PEQUENOS LÁBIOS (adesão labial na infância) é uma condição comum decorrente do hipoestrogenismo fisiológico da infância somado a microirritação local crônica (assaduras por fraldas):\n1) RELAÇÃO COM ITU:\n- Na maioria das vezes é assintomática e de resolução espontânea;\n- Quando a fusão é quase total ou oclusiva, a urina fica represada no espaço retro-labial/vestíbulo vaginal durante a micção (refluxo uretrovaginal funcional). Essa bolsa de estase de urina quente no introito funciona como incubadora para bactérias fecais perineais, facilitando a ascensão uretrovaginal e infecções urinárias de repetição;\n2) MANEJO TERAPÊUTICO:\n- PRIMEIRA LINHA: Aplicação tópica diária de creme de ESTRIOL ou ESTROGÊNIOS CONJUGADOS (ou pomada de betametasona) delicadamente ao longo da linha de fusão por 2 a 4 semanas;\n- O estrogênio promove espessamento e proliferação do epitélio mucoso labial, fazendo com que as bordas se desprendam suavemente sem sangramento;\n- REGRA DE OURO: A lise mecânica forçada/traumática sem anestesia é CONTRAINDICADA, pois dilacera a mucosa, causa dor extrema, trauma psicológico e predispõe a nova fusão cicatricial fibrótica ainda mais densa.',
    comentariosAlternativas: {
      A: 'Correta. A sinéquia oclusiva causa estase/refluxo uretrovaginal e ITU; tratamento padrão é estrogênio/corticoide tópico, evitando tração mecânica forçada.',
      B: 'Incorreta. Separação forçada mecânica é traumática, dolorosa e recidiva com fibrose extensa.',
      C: 'Incorreta. Cirurgia aberta agressiva é desproporcional e desnecessária para sinéquia labial.',
      D: 'Incorreta. Antibióticos não corrigem a obstrução mecânica e o uso contínuo é prejudicial.',
    },
  },
  {
    id: 'ped-itu-094',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Síndrome Nefrótica e Suscetibilidade a Infecções Urinárias e Peritonite',
    isRevisao: false,
    enunciado:
      'Criança de 3 anos portadora de Síndrome Nefrótica por Lesão Renal Mínima em atividade (edema anasarca, proteinúria maciça e hipoalbuminemia de 1,6 g/dL) apresenta febre, piora do estado geral e leucocitúria com urocultura positiva para Escherichia coli. Qual é a principal alteração imunológica fisiopatológica que torna os pacientes em fase ativa de Síndrome Nefrótica altamente vulneráveis a infecções bacterianas graves (como ITU, peritonite bacteriana espontânea e celulites)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Perda urinária massiva de imunoglobulinas (notadamente IgG) e de fatores do sistema complemento (fator B e properdina da via alternativa), associada à disfunção de opsonização bacteriana e edema tecidual com perda de barreiras mecânicas.',
      },
      {
        id: 'B',
        texto:
          'Aumento descontrolado na produção de leucócitos no baço que destroem os rins saudáveis.',
      },
      {
        id: 'C',
        texto:
          'Hiperatividade imune primária do timo com excesso de anticorpos que atacam as artérias do cérebro.',
      },
      {
        id: 'D',
        texto:
          'Ausência congênita completa de neutrófilos e eosinófilos no sangue periférico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A imunodeficiência secundária na Síndrome Nefrótica ativa é um conceito fisiopatológico fundamental cobrado em Pediatria clínica e Nefrologia:\n1) PERDA URINÁRIA DE IMUNOGLOBULINAS:\nA alteração na barreira de carga e tamanho da membrana basal glomerular permite a passagem descontrolada de proteínas plasmáticas de peso intermediário. Há perda urinária maciça de Imunoglobulina G (IgG), levando a hipogamaglobulinemia secundária severa;\n2) DEPURAÇÃO DE COMPONENTES DO COMPLEMENTO:\nOcorre perda acentuada de Fator B e Properdina, componentes críticos da via alternativa do sistema complemento. Como consequência, a capacidade do plasma de opsonizar microrganismos encapsulados e bacilos Gram-negativos fica profundamente comprometida;\n3) RISCO INFECCIOSO ELEVADO:\nEsses pacientes tornam-se presas fáceis para infecções invasivas por Streptococcus pneumoniae (pneumococo - principal agente de Peritonite Bacteriana Espontânea na criança nefrótica) e por bacilos Gram-negativos entéricos (como E. coli), manifestando ITUs graves, celulites em áreas de anasarca e sepse;\n4) EFEITO DOS CORTICOIDES:\nO tratamento com prednisona em altas doses (imunossupressão iatrogênica) acentua ainda mais a susceptibilidade infecciosa.',
    comentariosAlternativas: {
      A: 'Correta. Perda urinária de IgG e de fatores do complemento (Fator B e properdina) deprime a opsonização, predispondo a infecções bacterianas graves.',
      B: 'Incorreta. Não há aumento de leucócitos que destruam o rim, mas perda de componentes humorais solúveis na urina.',
      C: 'Incorreta. A síndrome nefrótica cursa com imunodeficiência humoral adquirida, não hiperatividade tímica cerebral.',
      D: 'Incorreta. A contagem de neutrófilos está normal ou elevada na síndrome nefrótica; o defeito é na opsonização por hipogamaglobulinemia.',
    },
  },
  {
    id: 'ped-itu-095',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'História Natural e Resolução Espontânea do Refluxo Vesicoureteral Primário',
    isRevisao: false,
    enunciado:
      'Os pais de um lactente de 8 meses com diagnóstico de Refluxo Vesicoureteral (RVU) primário Grau II bilateral comparecem à consulta de nefrologia pediátrica muito ansiosos e perguntam se o filho precisará ser operado obrigatoriamente. O especialista explica que a história natural do RVU primário na infância é caracterizada por uma elevada taxa de resolução espontânea ao longo dos anos. Qual é a base anatômica e fisiológica que explica a resolução espontânea do RVU primário com o crescimento da criança?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O crescimento somático da bexiga promove o alongamento natural do túnel submucoso ureteral intramural e o desenvolvimento da musculatura do trígono vesical, aumentando a razão comprimento/diâmetro do túnel e restaurando o mecanismo valvular anti-refluxo fisiológico passivo durante o enchimento vesical.',
      },
      {
        id: 'B',
        texto:
          'O refluxo se resolve porque os ureteres sofrem calcificação óssea completa espontânea aos 2 anos.',
      },
      {
        id: 'C',
        texto:
          'A bexiga da criança desaparece na puberdade, permitindo que a urina caia diretamente na corrente sanguínea.',
      },
      {
        id: 'D',
        texto:
          'A resolução ocorre apenas se a criança receber injeções diárias de hormônio do crescimento no colo da bexiga.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A história natural do REFLUXO VESICOURETERAL PRIMÁRIO é um dos tópicos mais cobrados em concursos para fundamentar a indicação de tratamento conservador em graus leves e moderados:\n1) BASE ANATÔMICA DO RVU PRIMÁRIO:\nO mecanismo anti-refluxo normal depende do trajeto oblíquo do ureter através da parede muscular da bexiga (túnel submucoso intramural). Quando a bexiga se enche, a pressão intravesical comprime o teto do túnel ureteral contra a sua base, fechando a luz ureteral passivamente como uma válvula de retenção (flap valve). A proporção ideal entre o comprimento do túnel submucoso e o diâmetro da luz ureteral é de aproximadamente 5:1;\n2) MATURAÇÃO E CRESCIMENTO SOMÁTICO:\nCom o desenvolvimento físico e o aumento das dimensões da bexiga nos primeiros anos de vida, o túnel submucoso naturalmente se alonga e a musculatura trigonal se torna mais robusta. Isso corrige a deficiência congênita do comprimento do túnel em uma expressiva parcela de crianças;\n3) TAXAS DE RESOLUÇÃO ESPONTÂNEA:\n- Grau I e II: resolução espontânea em até 70% a 85% dos casos;\n- Grau III: resolução em torno de 50%;\n- Graus IV e V: resolução muito baixa (< 10% a 20%), necessitando frequentemente de correção urológica.',
    comentariosAlternativas: {
      A: 'Correta. Alongamento do túnel submucoso intramural com o crescimento da bexiga restabelece o mecanismo valvular fisiológico anti-refluxo.',
      B: 'Incorreta. Ureteres não sofrem calcificação óssea.',
      C: 'Incorreta. Concepção estapafúrdia sem qualquer nexo com a anatomia humana.',
      D: 'Incorreta. Não existe aplicação local de GH na bexiga para correção de RVU.',
    },
  },
  {
    id: 'ped-itu-096',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Tratamento Cirúrgico do RVU - Técnicas de Reimplante vs Injeção Endoscópica',
    isRevisao: false,
    enunciado:
      'Uma criança de 3 anos com Refluxo Vesicoureteral unilateral Grau IV mantinha uso regular de quimioprofilaxia com nitrofurantoína. Nos últimos 6 meses, evoluiu com duas novas pielonefrites febris agudas documentadas por urocultura (falha comprovada da profilaxia) e a cintilografia com DMSA evidenciou nova cicatriz renal cortical no rim afetado com queda da função relativa para 38%. A equipe urológica indica intervenção corretiva cirúrgica. Quais são as duas modalidades cirúrgicas consagradas para correção do RVU na infância e como atuam?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O Reimplante Ureterovesical cirúrgico (técnicas de Cohen ou Politano-Leadbetter, criando um novo túnel submucoso intramural de comprimento adequado) e o Tratamento Endoscópico com injeção subureteral de substância volumétrica (Deflux - dextranômero/ácido hialurônico, que eleva o assoalho do orifício ureteral colabando o lúmen contra o refluxo).',
      },
      {
        id: 'B',
        texto:
          'Nefrectomia total imediata de ambos os rins associada a transplante hepático.',
      },
      {
        id: 'C',
        texto:
          'Cauterização de toda a uretra com laser para impedir a criança de urinar.',
      },
      {
        id: 'D',
        texto:
          'Passagem de sonda nasogástrica por 5 anos contínuos como método único de drenagem urinária.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As opções cirúrgicas para o Refluxo Vesicoureteral são reservadas aos casos com falha da profilaxia, piora das cicatrizes ao DMSA ou RVU de grau máximo:\n1) REIMPLANTE URETEROVESICAL (CIRURGIA ABERTA OU LAPAROSCÓPICA/ROBÓTICA):\n- Considerado o padrão de máxima eficácia anatômica (sucesso > 95% a 98%);\n- Técnica intravesical de Cohen: confecção de um túnel submucoso transversal cruzando o trígono vesical até o lado oposto;\n- Técnica extravesical de Lich-Gregoir ou intra-extravesical de Politano-Leadbetter;\n- Objetivo: recriar cirurgicamente um túnel submucoso com comprimento de pelo menos 4 a 5 vezes o diâmetro do ureter;\n2) TRATAMENTO ENDOSCÓPICO (TÉCNICA DE STING / HIT):\n- Procedimento ambulatorial e minimamente invasivo por cistoscopia;\n- Injeta-se uma substância inerte volumétrica biocompatível (ex: dextranômero em ácido hialurônico - DEFLUX) logo abaixo do meato ureteral (posição de 6 horas);\n- A elevação do orifício cria um "coxim" que coapta a parede ureteral posterior durante o enchimento vesical, impedindo o fluxo retrógrado;\n- Taxa de sucesso de 70% a 85%, com menor morbidade e rápida recuperação.',
    comentariosAlternativas: {
      A: 'Correta. Reimplante ureterovesical (técnicas de Cohen/Politano) e injeção endoscópica subureteral de Deflux são as opções consagradas.',
      B: 'Incorreta. Nefrectomia bilateral é conduta mutiladora inadmissível para RVU tratável.',
      C: 'Incorreta. Cauterizar uretra geraria retenção urinária letal.',
      D: 'Incorreta. Sonda nasogástrica vai ao estômago, sem qualquer ação no sistema urinário.',
    },
  },
  {
    id: 'ped-itu-097',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'ITU Associada a Cateter Vesical de Demora (ITU-AC) na Terapia Intensiva',
    isRevisao: false,
    enunciado:
      'Um lactente de 6 meses internado na UTI Pediátrica após pós-operatório de cirurgia cardíaca complexa permanece em uso de cateter vesical de demora tipo Foley conectado a sistema fechado de drenagem há 10 dias. O paciente evolui com febre de 38,8 °C sem foco aparente, instabilidade hemodinâmica e urina turva na bolsa coletora. A equipe médica suspeita de Infecção do Trato Urinário Associada a Cateter (ITU-AC). De acordo com as diretrizes de prevenção e controle de infecção hospitalar (ANVISA / CDC), qual é a conduta correta para o diagnóstico bacteriológico seguro e manejo dessa infecção?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Se a permanência do cateter ainda for estritamente necessária, trocar o cateter vesical antigo por um novo antes de colher a amostra de urina por aspiração estéril do dispositivo de amostragem da sonda nova (ou retirar o cateter definitivamente se não houver mais indicação), nunca colhendo urina da bolsa coletora já manipulada, pois a microbiota em biofilme na sonda antiga contamina e mascara a verdadeira bacteriologia.',
      },
      {
        id: 'B',
        texto:
          'Desconectar a bolsa de drenagem e colher urina gotejada do chão da UTI.',
      },
      {
        id: 'C',
        texto:
          'Manter o mesmo cateter por 2 anos e tratar apenas com banhos de assento.',
      },
      {
        id: 'D',
        texto:
          'Instilar água sanitária dentro da bexiga do lactente para esterilizar o balão do cateter.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A INFECÇÃO DO TRATO URINÁRIO ASSOCIADA A CATETER (ITU-AC) é uma das causas principais de infecção relacionada à assistência à saúde (IRAS) em unidades de terapia intensiva pediátrica:\n1) FISIOPATOLOGIA DO BIOFILME:\nApós poucos dias de cateterização vesical, forma-se na superfície intraluminal e extraluminal do cateter de silicone/látex uma complexa matriz polimérica extracelular bacteriana (BIOFILME). O biofilme protege as bactérias da ação de antimicrobianos e de defesas imunológicas do hospedeiro;\n2) TÉCNICA CORRETA DE COLETA DE UROCULTURA:\n- NUNCA coletar urina diretamente da bolsa coletora de drenagem (urina estagnada, colonizada por germes oportunistas);\n- Em cateteres instalados há mais de 7 a 14 dias, a coleta através da sonda antiga detectará apenas bactérias sésseis do biofilme e não necessariamente o verdadeiro patógeno invasivo;\n- CONDUTA PADRÃO-OURO: Trocar o cateter antigo por uma nova sonda vesical estéril e, em seguida, puncionar a porta de coleta estéril com agulha fina para envio imediato ao laboratório (ou realizar cateterismo de alívio se a sonda não for mais mandatória);\n3) RETIRADA DO DISPOSITIVO:\nA medida mais eficaz para a resolução da ITU-AC é a remoção precoce da sonda vesical assim que cessar a necessidade clínica de monitorização rigorosa do débito.',
    comentariosAlternativas: {
      A: 'Correta. Coleta estéril após troca do cateter antigo (ou remoção definitiva) evita falsos resultados decorrentes do biofilme da sonda prévia.',
      B: 'Incorreta. Conduta anti-séptica aberrante e contaminante.',
      C: 'Incorreta. Manter cateter contaminado na vigência de urossepse mantém a fonte de choque séptico ativa.',
      D: 'Incorreta. Instilação de desinfetantes na bexiga causa necrose cáustica química vesical gravíssima.',
    },
  },
  {
    id: 'ped-itu-098',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'ITU Hospitalar por Pseudomonas aeruginosa e Enterobactérias ESBL',
    isRevisao: false,
    enunciado:
      'Lactente de 8 meses, com antecedente de urostomia e três internações prévias prolongadas em UTI pediátrica com múltiplos ciclos de ceftriaxona e ampicilina-sulbactam, é reinternado com sepse de foco urinário. O antibiograma preliminar da urocultura confirma crescimento de > 100.000 UFC/mL de Klebsiella pneumoniae produtora de Beta-Lactamase de Espectro Estendido (ESBL), demonstrando resistência in vitro a todas as penicilinas, cefalosporinas de 1ª, 2ª, 3ª e 4ª gerações e aztreonam. Qual é a classe antimicrobiana intravenosa de ESCOLHA para o tratamento dessa pielonefrite grave por germe multirresistente produtor de ESBL em pediatria?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Carbapenêmicos (ex: Meropenem ou Ertapenem), que permanecem estáveis e resistentes à hidrólise pelas enzimas beta-lactamases de espectro estendido (ESBL), assegurando eficácia bactericida sistêmica e tecidual renal.',
      },
      {
        id: 'B',
        texto:
          'Cefazolina em dose única por via oral diluída em suco de laranja.',
      },
      {
        id: 'C',
        texto:
          'Amoxicilina isolada em xarope domiciliar.',
      },
      {
        id: 'D',
        texto:
          'Metronidazol intravenoso em monoterapia para cobertura de enterobactérias aeróbias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As infecções urinárias por enterobactérias produtoras de ESBL (Extended-Spectrum Beta-Lactamase) tornaram-se uma preocupação crescente em pediatria terciária:\n1) MECANISMO DE RESISTÊNCIA ESBL:\n- Enzimas plasmídicas capazes de hidrolisar e inativar quase todos os anéis beta-lactâmicos: penicilinas, cefalosporinas de 1ª a 4ª geração (incluindo Ceftriaxona, Cefotaxima e Cefepima) e monobactâmicos (Aztreonam);\n- Frequentemente carreiam genes de multirresistência cruzada contra sulfas, fluoroquinolonas e aminoglicosídeos;\n2) TRATAMENTO PADRÃO-OURO DE ESCOLHA:\n- Os CARBAPENÊMICOS (MEROPENEM ou ERTAPENEM) são as drogas de primeira linha consagradas para o tratamento de infecções graves/pielonefrites por patógenos ESBL-positivos;\n- O Meropenem possui estabilidade estereoquímica perfeita contra a hidrólise enzimática pela ESBL, atingindo concentrações bactericidas massivas no parênquima renal e no trato urinário;\n3) ALTERNATIVAS POUPADORAS DE CARBAPENÊMICOS:\n- Em infecções baixas leves ambulatoriais, a Fosfomicina trometamol ou Amicacina podem ser consideradas conforme antibiograma, mas para pielonefrite febril e sepse, o carbapenêmico é imperativo.',
    comentariosAlternativas: {
      A: 'Correta. Carbapenêmicos (Meropenem) são os antimicrobianos de escolha para germes produtores de ESBL por resistirem à quebra enzimática.',
      B: 'Incorreta. Cefalosporinas de 1ª geração (cefazolina) são completamente inativadas por ESBL.',
      C: 'Incorreta. Amoxicilina isolada é hidrolisada instantaneamente por cepas ESBL.',
      D: 'Incorreta. O metronidazol cobre anaeróbios estritos e não tem qualquer atividade contra Klebsiella ou enterobactérias aeróbias.',
    },
  },
  {
    id: 'ped-itu-099',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Prevenção Primária e Não Farmacológica de ITU em Crianças Treinadas ao Toalete',
    isRevisao: false,
    enunciado:
      'Durante uma consulta de revisão em puericultura, a mãe de uma menina de 4 anos que acabou de concluir o desfralde pergunta ao pediatra quais medidas práticas de higiene e hábitos de vida devem ser adotadas no dia a dia para minimizar o risco de a filha desenvolver infecções urinárias. Qual conjunto de orientações é respaldado cientificamente pelas diretrizes de nefrologia e urologia pediátrica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Higiene perineal rigorosa no sentido ântero-posterior (da frente para trás após urinar ou evacuar), micção em intervalos regulares a cada 2 a 3 horas sem segurar a urina, suporte adequado para os pés no vaso sanitário, ingesta hídrica abundante, tratamento imediato da constipação intestinal, evitar banhos de imersão prolongados com sabonetes perfumados/espumas na vulva e uso de roupas íntimas de algodão.',
      },
      {
        id: 'B',
        texto:
          'Limpeza anoperineal no sentido posterior para anterior (do ânus para a uretra) para trazer bactérias benéficas ao trato urinário.',
      },
      {
        id: 'C',
        texto:
          'Estimular a criança a reter a urina por 12 horas consecutivas para fortalecer o músculo detrusor.',
      },
      {
        id: 'D',
        texto:
          'Proibir a ingestão de água e sucos e utilizar apenas sabonetes antibacterianos cáusticos dentro do meato uretral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A prevenção não farmacológica da infecção do trato urinário na infância é um dos pilares mais eficazes da pediatria ambulatorial:\n1) HIGIENE PERINEAL CORRETA:\n- Limpeza sempre no sentido ÂNTERO-POSTERIOR (da vulva em direção ao ânus), tanto com papel higiênico quanto na lavagem. O movimento contrário (póstero-anterior) arrasta ativamente coliformes fecais do orifício anal direto para o introito vaginal e meato uretral;\n2) HÁBITO MICCIONAL E HIDRATAÇÃO:\n- Micção frequente e programada (a cada 2-3h): a eliminação periódica do jato urinário promove a chamada "lavagem mecânica hidrodinâmica" da uretra, eliminando bactérias recém-aderidas antes que formem colônias;\n- Ingesta adequada de líquidos mantém débito urinário elevado e urina menos concentrada;\n3) CUIDADOS COM A MUCOSA VULVAR:\n- Banhos de banheira com espuma, sais perfumados e sabonetes alcalinos agressivos causam vulvovaginite química irritativa, rompendo a barreira epitelial protetora e facilitando a adesão de uropatógenos;\n- Roupas íntimas de tecidos sintéticos retêm umidade e calor, devendo ser substituídas por calcinhas de algodão respiráveis.',
    comentariosAlternativas: {
      A: 'Correta. Pacote de medidas não farmacológicas: limpeza da frente para trás, micção a cada 2-3h, hidratação generosa, combate à constipação e evitar irritantes químicos.',
      B: 'Incorreta. Limpar do ânus para a uretra é o principal erro de higiene que inocula enterobactérias no trato urinário.',
      C: 'Incorreta. Segurar urina por 12h causa estase urinária e sobredistensão da bexiga, fator de risco clássico para infecção.',
      D: 'Incorreta. Restringir água e introduzir sabonetes cáusticos na uretra causa lesão química grave.',
    },
  },
  {
    id: 'ped-itu-100',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Infecção do Trato Urinário',
    subtema: 'Síntese Propedêutica e Terapêutica Definitiva da ITU Pediátrica',
    isRevisao: false,
    enunciado:
      'Um residente de pediatria em plantão no pronto-socorro atende um lactente de 6 meses, febril (39,4 °C), irritável e hiporéxico há 48 horas. Para consolidar as boas práticas clínicas de alta relevância para as provas de residência médica (ENARE, USP, UNIFESP, AMRIGS), ele sintetiza os passos de condução do caso. Assinale a alternativa que reúne com precisão irrefutável as condutas recomendadas em: MÉTODO DE COLETA, CONDUTA TERAPÊUTICA AGUDA e INVESTIGAÇÃO POR IMAGEM DE PRIMEIRA LINHA:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Coleta de urina por Cateterismo Vesical estéril (ou punção suprapúbica); confirmação de piúria no EAS e início imediato de antibioticoterapia parenteral ou oral com cobertura para parênquima renal (ex: Ceftriaxona EV ou Cefuroxima oral), sendo a Nitrofurantoína formalmente CONTRAINDICADA por não atingir concentração tecidual renal; e solicitação de Ultrassonografia de Rins e Vias Urinárias após estabilização como primeiro exame de imagem anatômico.',
      },
      {
        id: 'B',
        texto:
          'Coleta de urina por saco coletor plástico com urocultura diagnóstica imediata; tratamento com Nitrofurantoína oral por 3 dias e dispensa de qualquer exame de imagem.',
      },
      {
        id: 'C',
        texto:
          'Início imediato de antibiótico sem colher qualquer urina; realização de uretrocistografia miccional na vigência de bacteremia e febre de 40 °C no primeiro dia.',
      },
      {
        id: 'D',
        texto:
          'Punção lombar imediata como método de coleta de urina e alta hospitalar sem medicação.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Esta questão final sintetiza de maneira completa os pilares obrigatórios da abordagem da ITU febril (Pielonefrite) na infância:\n1) DIAGNÓSTICO BACTERIOLÓGICO SEGURO:\n- Em lactentes sem controle esfincteriano, a urina deve ser obtida por CATETERISMO VESICAL ou PUNÇÃO SUPRAPÚBICA. O saco coletor não deve ser utilizado para confirmar urocultura devido às taxas inaceitáveis de falso-positivo por contaminação perineal;\n- Critério confirmatório: urocultura com ≥ 50.000 UFC/mL de patógeno único associada à presença de piúria/leucocitúria no sedimento urinário;\n2) TERAPÊUTICA ANTIMICROBIANA CORRETA:\n- Pielonefrite exige antibióticos com elevada concentração sérica e penetração tecidual no parênquima renal (Ceftriaxona EV em internados/toxêmicos; Cefuroxima oral em casos leves responsivos);\n- ALERTA CRÍTICO: A Nitrofurantoína é CONTRAINDICADA na pielonefrite aguda porque atinge concentrações insignificantes no parênquima renal e no sangue, prestando-se apenas ao tratamento de cistites baixas ou profilaxia;\n3) INVESTIGAÇÃO POR IMAGEM DE 1ª LINHA:\n- A ULTRASSONOGRAFIA DE RINS E VIAS URINÁRIAS (USG-RVU) é mandatória para todo lactente após a 1ª ITU febril confirmada para exclusão de anomalias congênitas tratáveis (uropatias obstrutivas, RVU grave, duplicidades).',
    comentariosAlternativas: {
      A: 'Correta. Síntese perfeita: cateterismo estéril para urocultura -> antibioticoterapia tecidual (sem nitrofurantoína) -> USG renal como primeiro exame anatômico.',
      B: 'Incorreta. Saco coletor tem alta taxa de contaminação e nitrofurantoína não atinge parênquima renal na pielonefrite.',
      C: 'Incorreta. UCRM é contraindicada durante a infecção aguda febril pelo risco de urossepse retrógrada.',
      D: 'Incorreta. Punção lombar colhe líquor, não urina.',
    },
  },
];

