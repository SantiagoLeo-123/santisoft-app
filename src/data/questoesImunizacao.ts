export interface RawImunizacaoQuestion {
  id: string;
  grandeArea: 'Pediatria';
  especialidade: 'Pediatria';
  tema: 'Imunização';
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

export const QUESTOES_IMUNIZACAO: RawImunizacaoQuestion[] = [
  {
    id: 'ped-imun-001',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'BCG - Evolução da Lesão Vacinal',
    isRevisao: false,
    enunciado:
      'Lactente de 6 semanas de vida, nascido a termo com peso de 3.400 g, recebeu a vacina BCG por via intradérmica no braço direito na maternidade. A mãe comparece à consulta de puericultura aflita referindo que há 5 dias surgiu no local da aplicação uma pústula que se rompeu espontaneamente, formando uma pequena úlcera de 5 mm com secreção serossanguinolenta e crosta central, sem febre ou outros sintomas sistêmicos. Ao exame físico: lactente em ótimo estado geral, corado, peso atual de 4.600 g, sem linfonodomegalias palpáveis em fossas supraclaviculares ou axilas. Diante do quadro clínico e da história natural da vacina BCG, qual é a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tranquilizar a mãe, explicando que se trata da evolução clínica esperada e habitual da vacina BCG, orientando apenas higiene local com água e sabão, sem curativos oclusivos ou pomadas.',
      },
      {
        id: 'B',
        texto:
          'Prescrever cefalexina oral por 7 dias e pomada de neomicina tópica sob suspeita de abscesso bacteriano secundário por Staphylococcus aureus.',
      },
      {
        id: 'C',
        texto:
          'Iniciar prontamente Isoniazida oral por 3 meses devido à ocorrência de evento adverso inflamatório cutâneo precoce.',
      },
      {
        id: 'D',
        texto:
          'Realizar debridamento cirúrgico da lesão ulcerada e cobrir com curativo de sulfadiazina de prata a 1%.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A evolução habitual da lesão vacinal da BCG intradérmica (cepa Mycobacterium bovis atenuada) segue uma cronologia bem definida:\n1) Pápula de inoculação que regride em até 48 horas;\n2) Nódulo/induração após 1 a 4 semanas;\n3) Pústula após 4 a 6 semanas;\n4) Ulceração com crosta (de 4 a 7 mm de diâmetro) entre a 6ª e a 8ª semana;\n5) Cicatriz deprimida definitiva de 4 a 7 mm entre a 8ª e a 12ª semana.\nA presença de úlcera com crosta na 6ª semana sem sinais de abscesso subcutâneo ou linfonodomegalia > 3 cm é rigorosamente fisiológica. A conduta é puramente expectante: limpeza simples com água e sabão no banho, NÃO se devendo aplicar pomadas, antissépticos ou curativos oclusivos.',
    comentariosAlternativas: {
      A: 'Correta. Evolução fisiológica e normal da vacina BCG aos 40-50 dias de vida; orientar apenas higiene sem curativos.',
      B: 'Incorreta. Não há infecção piogênica bacteriana secundária; não há indicação de antibióticos sistêmicos ou tópicos.',
      C: 'Incorreta. Isoniazida só é indicada em linfadenite supurada/fistulizada ou lesões lupoides extensas > 3 cm.',
      D: 'Incorreta. O debridamento é contraindicado e traumático, podendo disseminar o bacilo.',
    },
  },
  {
    id: 'ped-imun-002',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'BCG - Ausência de Cicatriz Vacinal',
    isRevisao: false,
    enunciado:
      'Lactente de 8 meses de vida comparece à Unidade Básica de Saúde para vacinação de rotina. Ao inspecionar o membro superior direito, a equipe de enfermagem nota a ausência completa de cicatriz vacinal no músculo deltoide. A mãe apresenta o Cartão da Criança com o registro formal carimbado de que o lactente recebeu a vacina BCG na maternidade com 2 dias de vida. De acordo com a Nota Técnica oficial do Programa Nacional de Imunizações (PNI) do Ministério da Saúde do Brasil, qual é a conduta preconizada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Não revacinar a criança; considerar o lactente devidamente imunizado com base no registro na caderneta de vacinação.',
      },
      {
        id: 'B',
        texto:
          'Revacinar imediatamente com nova dose de BCG por via intradérmica no deltoide esquerdo.',
      },
      {
        id: 'C',
        texto:
          'Solicitar Prova Tuberculínica (PPD/PT) e, se o resultado for menor que 5 mm, aplicar a segunda dose da BCG.',
      },
      {
        id: 'D',
        texto:
          'Encaminhar para investigação compulsória de imunodeficiência celular primária grave antes de qualquer outra vacina.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'De acordo com a Nota Técnica nº 10/2019-CGPNI/DEVIT/SVS/MS, o Ministério da Saúde do Brasil NÃO recomenda mais a revacinação de crianças que receberam a vacina BCG e que não desenvolveram a cicatriz vacinal pós-vacinação. Estudos científicos da OMS comprovaram que a presença ou ausência da cicatriz queloidiana/deprimida não guarda correlação com o grau de proteção imunológica conferida contra as formas graves de tuberculose (meningoencefalite tuberculosa e tuberculose miliar disseminada). Portanto, havendo comprovação documental no cartão de vacinação, a dose é considerada válida e a criança NÃO deve ser revacinada.',
    comentariosAlternativas: {
      A: 'Correta. Conforme a Nota Técnica do MS de 2019, criança vacinada comprovadamente que não desenvolveu cicatriz NÃO deve ser revacinada.',
      B: 'Incorreta. A antiga recomendação de revacinar até os 5 anos foi revogada pelo PNI em 2019.',
      C: 'Incorreta. O teste tuberculínico não é indicado para avaliar pega vacinal de BCG.',
      D: 'Incorreta. A ausência de cicatriz ocorre em até 5 a 10% dos indivíduos hígidos e não indica imunodeficiência primária isolada.',
    },
  },
  {
    id: 'ped-imun-003',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'BCG - Eventos Adversos e Linfadenite Regional',
    isRevisao: false,
    enunciado:
      'Lactente de 3 meses de vida, vacinado com BCG ao nascer, é levado à consulta devido ao surgimento de tumoração na axila direita há 3 semanas. Ao exame físico: paciente em bom estado geral, afebril, com massa axilar direita única de 4,0 cm de diâmetro, flutuante, aderida à pele com eritema local e ponto de supuração espontânea com drenagem de secreção purulenta caseosa ("fistulização"). Não há hepatoesplenomegalia. Qual é a conduta farmacológica e diagnóstica preconizada pelo Manual de Eventos Adversos Pós-Vacinação do Ministério da Saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de linfadenite regional supurada por BCG; a conduta é iniciar Isoniazida por via oral na dose de 10 mg/kg/dia até a regressão da lesão (geralmente por 3 meses).',
      },
      {
        id: 'B',
        texto:
          'Trata-se de linfadenite não supurada benigna; manter conduta exclusivamente expectante sem medicações.',
      },
      {
        id: 'C',
        texto:
          'Indicar punção biópsia excisional ampla de urgência associada a esquema RIPE (Rifampicina, Isoniazida, Pirazinamida e Etambutol).',
      },
      {
        id: 'D',
        texto:
          'Prescrever sulfametoxazol-trimetoprima e realizar drenagem cirúrgica com inserção de dreno de Penrose.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'No manejo das complicações da vacina BCG:\n1) Linfadenite regional axilar ou supraclavicular NÃO supurada (linfonodo < 3 cm, móvel e sem sinais flogísticos): é comum e benigna; a conduta é puramente EXPECTANTE (não puncionar, não incisar e não medicar);\n2) Linfadenite regional SUPURADA e/ou FISTULIZADA (ou linfonodo > 3 cm com flutuação/fístula caseosa): configura evento adverso com indicação formal de tratamento medicamentoso com ISONIAZIDA por via oral (10 mg/kg/dia, dose máxima de 300 mg/dia) até a cura clínica completa (habitualmente por cerca de 3 meses). Não se deve realizar punção, drenagem cirúrgica aberta ou ressecção ganglionar (alto risco de fístulas crônicas rebeldes).',
    comentariosAlternativas: {
      A: 'Correta. Linfadenite supurada e fistulizada por BCG tem indicação formal de monoterapia com Isoniazida (10 mg/kg/dia por 3 meses).',
      B: 'Incorreta. A conduta expectante restringe-se aos linfonodos não supurados, menores que 3 cm e sem fistulização.',
      C: 'Incorreta. Esquema RIPE não é utilizado; Mycobacterium bovis possui resistência intrínseca natural à pirazinamida.',
      D: 'Incorreta. Sulfas não agem sobre micobactérias e a incisão com dreno é formalmente contraindicada.',
    },
  },
  {
    id: 'ped-imun-004',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'BCG - Prematuridade e Baixo Peso ao Nascer',
    isRevisao: false,
    enunciado:
      'Recém-nascido prematuro com 32 semanas de idade gestacional nasce de parto cesárea de emergência com peso ao nascimento de 1.650 g. O concepto evolui clinicamente estável, afebril, em berçário de cuidados intermediários, sem desconforto respiratório e recebendo leite materno por sonda gástrica. A respeito da administração da vacina BCG e da vacina contra Hepatite B nas primeiras horas de vida para esse recém-nascido, qual é a orientação correta segundo o Ministério da Saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Adiar a vacina BCG até que o recém-nascido atinja o peso mínimo de 2.000 g; administrar a vacina contra Hepatite B imediatamente nas primeiras 12 a 24 horas de vida.',
      },
      {
        id: 'B',
        texto:
          'Aplicar ambas as vacinas (BCG e Hepatite B) de imediato no primeiro dia de vida, independentemente do peso ao nascer.',
      },
      {
        id: 'C',
        texto:
          'Adiar tanto a vacina BCG quanto a vacina contra Hepatite B até a idade corrigida de 40 semanas.',
      },
      {
        id: 'D',
        texto:
          'Contraindicar a vacina BCG de forma definitiva e permanente por se tratar de prematuro de muito baixo peso.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A vacina BCG intradérmica tem como contraindicação temporária o peso de nascimento menor que 2.000 g, devido à escassez de tecido subcutâneo e derme no deltoide de prematuros de baixo peso, com maior risco de complicações técnicas na inoculação intradérmica e de úlceras profundas e abscessos frios locais. A aplicação deve ser adiada até que a criança atinja 2.000 g. Por outro lado, a VACINA CONTRA HEPATITE B NÃO POSSUI LIMITE MÍNIMO DE PESO e deve ser administrada em TODOS os recém-nascidos nas primeiras 12 a 24 horas de vida, inclusive prematuros extremos.',
    comentariosAlternativas: {
      A: 'Correta. BCG adiada até atingir 2.000 g; Hepatite B realizada rotineiramente nas primeiras 12-24 horas.',
      B: 'Incorreta. A BCG é formalmente contraindicada em recém-nascidos com peso inferior a 2.000 g.',
      C: 'Incorreta. A vacina de hepatite B não deve ser adiada em prematuros, pois protege contra transmissão perinatal precoce.',
      D: 'Incorreta. O adiamento é estritamente temporário até atingir 2.000 g de peso corporal.',
    },
  },
  {
    id: 'ped-imun-005',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'BCG - Contactante Domiciliar de Tuberculose Bacilífera',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo com peso de 3.200 g nasce de parto vaginal sem intercorrências. Durante a anamnese no alojamento conjunto, a mãe informa que o pai do bebê reside no mesmo domicílio e foi diagnosticado há 5 dias com tuberculose pulmonar ativa bacilífera (BAAR positivo no escarro), tendo iniciado o esquema RIPE há apenas 3 dias. Qual é a conduta correta em relação à vacinação com BCG desse recém-nascido ao nascimento?',
    alternativas: [
      {
        id: 'A',
        texto:
          'NÃO aplicar a vacina BCG ao nascimento; iniciar quimioprofilaxia primária com Isoniazida ou Rifampicina por 3 meses; após 3 meses, realizar prova tuberculínica (PT); se PT for menor que 5 mm, suspender a quimioprofilaxia e aplicar a vacina BCG.',
      },
      {
        id: 'B',
        texto:
          'Aplicar a vacina BCG imediatamente no deltoide direito e associar Isoniazida profilática por 6 meses.',
      },
      {
        id: 'C',
        texto:
          'Aplicar dose dobrada da vacina BCG para sobrepujar a carga micobacteriana domiciliar e afastar o pai por 48 horas.',
      },
      {
        id: 'D',
        texto:
          'Iniciar imediatamente o esquema quádruplo completo (RIPE) para o recém-nascido e aplicar a BCG após o término de 6 meses de tratamento.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Recém-nascidos em contato íntimo e domiciliar com caso bacilífero de tuberculose ativa NÃO devem receber a vacina BCG ao nascer. Se recebessem a BCG, a Isoniazida prescrita a seguir eliminaria o bacilo vacinal (M. bovis atenuado), inativando a vacina. O protocolo do Ministério da Saúde orienta:\n1) NÃO vacinar com BCG ao nascer;\n2) Iniciar quimioprofilaxia primária com Isoniazida (10 mg/kg/dia) ou Rifampicina (15 mg/kg/dia) por 3 meses;\n3) Ao completar 3 meses, realizar a Prova Tuberculínica (PT / PPD);\n- Se PT < 5 mm (não reator): interromper a quimioprofilaxia e vacinar com BCG imediatamente;\n- Se PT ≥ 5 mm (reator): a criança foi infectada; manter a Isoniazida por mais 3 meses (totalizando 6 meses) ou Rifampicina por mais 1 mês (total 4 meses), realizar radiografia de tórax e NÃO aplicar a BCG.',
    comentariosAlternativas: {
      A: 'Correta. Protocolo do MS: não aplicar BCG ao nascer, iniciar profilaxia com Isoniazida/Rifampicina por 3 meses e avaliar PT aos 3 meses.',
      B: 'Incorreta. A isoniazida mataria o bacilo vivo atenuado da vacina BCG, tornando-a ineficaz.',
      C: 'Incorreta. Dose dobrada de BCG é contraindicada e perigosa.',
      D: 'Incorreta. O recém-nascido é assintomático e requer quimioprofilaxia primária (monoterapia), não tratamento com 4 drogas (RIPE).',
    },
  },
  {
    id: 'ped-imun-006',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'BCG - Recém-Nascido Exposto ao HIV',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo com peso de 3.100 g nasce de mãe que descobriu infecção pelo HIV durante o pré-natal, tendo recebido terapia antirretroviral adequada com carga viral indetectável no terceiro trimestre. O bebê está assintomático, em alojamento conjunto e recebendo fórmula infantil e profilaxia antirretroviral com Zidovudina. Qual é a recomendação oficial do Programa Nacional de Imunizações (PNI) do Ministério da Saúde quanto à administração da vacina BCG para este concepto?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A vacina BCG está indicada ao nascimento ou o mais precocemente possível, desde que o recém-nascido esteja assintomático e sem sinais clínicos de imunodeficiência.',
      },
      {
        id: 'B',
        texto:
          'A vacina BCG é formalmente contraindicada para qualquer criança exposta ao HIV, devendo ser substituída por profilaxia contínua com sulfametoxazol-trimetoprima.',
      },
      {
        id: 'C',
        texto:
          'A vacina BCG só pode ser administrada após a criança completar 18 meses com duas cargas virais de HIV negativas e teste sorológico de sororreversão comprovado.',
      },
      {
        id: 'D',
        texto:
          'Deve-se aguardar a contagem de linfócitos T CD4 e aplicar a BCG apenas se o valor de CD4 for superior a 3.500 células/mm³.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'De acordo com as diretrizes do Ministério da Saúde do Brasil e da OMS, recém-nascidos expostos ao HIV por transmissão vertical DEVEM receber a vacina BCG ao nascimento ou o mais precocemente possível na maternidade, desde que estejam ASSINTOMÁTICOS e sem sinais clínicos de imunossupressão. Nessas condições de exposição perinatal (mãe tratada e conceito hígido), os benefícios da proteção precoce contra as formas disseminadas da tuberculose suplantam com folga os riscos teóricos. Apenas crianças que já manifestem sintomas de infecção pelo HIV ou imunodeficiência grave comprovada laboratorialmente têm a BCG contraindicada.',
    comentariosAlternativas: {
      A: 'Correta. Criança assintomática filha de mãe vivendo com HIV deve receber a vacina BCG na maternidade sem atraso.',
      B: 'Incorreta. A condição de filho de mãe HIV positiva por si só não contraindica a BCG ao nascer.',
      C: 'Incorreta. Esperar 18 meses deixaria o lactente desprotegido na fase de maior risco para meningite tuberculosa.',
      D: 'Incorreta. Não se exige dosagem prévia de linfócitos CD4 para vacinar recém-nascidos assintomáticos na maternidade.',
    },
  },
  {
    id: 'ped-imun-007',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Hepatite B ao Nascer - Mãe HBsAg Positiva',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo, peso de 3.350 g, nasce de parto vaginal. A análise do cartão de pré-natal da parturiente revela sorologia HBsAg reagente com HBeAg positivo no terceiro trimestre. A respeito da profilaxia da transmissão vertical da Hepatite B para o recém-nascido, assinale a conduta médica correta e imediata:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar a vacina contra Hepatite B juntamente com a Imunoglobulina Humana Hiperimune contra Hepatite B (HBIG / IGHAB) nas primeiras 12 horas de vida, em locais anatômicos distintos (músculos vastos laterais das coxas direita e esquerda); a amamentação está liberada após higiene do bebê.',
      },
      {
        id: 'B',
        texto:
          'Administrar apenas a vacina de Hepatite B ao nascer e adiar a imunoglobulina para após o término das três doses da pentavalente aos 6 meses.',
      },
      {
        id: 'C',
        texto:
          'Contraindicar de forma absoluta a amamentação e prescrever tenofovir xarope por via oral para o recém-nascido durante 60 dias.',
      },
      {
        id: 'D',
        texto:
          'Administrar a vacina e a imunoglobulina misturadas na mesma seringa para potencializar a taxa de soroconversão precoce.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Filhos de mães portadoras crônicas do vírus da hepatite B (HBsAg positivas), especialmente quando HBeAg reagentes (alta replicação viral), têm risco superior a 90% de contrair a infecção perinatal e cronificar (com alto risco de cirrose e hepatocarcinoma precoce). A imunoprofilaxia profilática pós-exposição de alta eficácia (> 95% de prevenção) exige:\n1) Vacina contra Hepatite B (dose de 0,5 mL IM) nas primeiras 12 horas de vida (máximo 24h);\n2) Imunoglobulina Humana Hiperimune contra Hepatite B (HBIG / IGHAB 0,5 mL IM) nas primeiras 12 horas de vida (podendo ser feita até o 7º dia se atraso);\n3) Aplicação em sítios anatômicos distintos (ex.: vasto lateral da coxa direita e vasto lateral da coxa esquerda), nunca na mesma seringa;\n4) O aleitamento materno é TOTALMENTE PERMITIDO desde que a profilaxia (vacina + imunoglobulina) tenha sido administrada e o recém-nascido adequadamente higienizado.',
    comentariosAlternativas: {
      A: 'Correta. Vacina + HBIG nas primeiras 12 horas de vida em sítios intramusculares distintos, com aleitamento materno liberado.',
      B: 'Incorreta. A eficácia da HBIG reduz drasticamente se administrada após as primeiras horas de vida.',
      C: 'Incorreta. A amamentação não é contraindicada na hepatite B após o início da imunoprofilaxia passiva e ativa.',
      D: 'Incorreta. A vacina e a imunoglobulina jamais devem ser misturadas na mesma seringa nem no mesmo membro.',
    },
  },
  {
    id: 'ped-imun-008',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Hepatite B ao Nascer - Prematuros e Esquema de 4 Doses',
    isRevisao: false,
    enunciado:
      'Recém-nascido prematuro nasce com 30 semanas de idade gestacional e peso de 1.400 g. A mãe é HBsAg negativa. A criança recebe a dose monovalente da vacina contra hepatite B na maternidade com 6 horas de vida. Segundo as normas técnicas do Programa Nacional de Imunizações (PNI) para recém-nascidos pré-termo com peso inferior a 2.000 g ou idade gestacional menor que 33 semanas, qual será o esquema vacinal subsequente para a Hepatite B?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A dose de nascimento não é contabilizada como parte do esquema primário habitual; a criança deverá receber o esquema completo de três doses da vacina Pentavalente (aos 2, 4 e 6 meses), totalizando 4 doses de hepatite B.',
      },
      {
        id: 'B',
        texto:
          'A dose de nascimento supre integralmente a imunidade humoral, devendo receber apenas a vacina DTP simples aos 2 e 4 meses.',
      },
      {
        id: 'C',
        texto:
          'A criança deverá suprimir a dose dos 6 meses da vacina pentavalente, recebendo apenas difteria e tétano aos 6 meses.',
      },
      {
        id: 'D',
        texto:
          'O prematuro deverá receber nova dose da vacina hepatite B a cada 30 dias até completar 1 ano de vida, totalizando 12 doses.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Prematuros com peso de nascimento < 2.000 g ou idade gestacional < 33 semanas apresentam taxas inferiores de soroconversão protetora à dose de nascimento da vacina contra Hepatite B devido à imaturidade do sistema imunológico. Por essa razão, as diretrizes do Ministério da Saúde e da Sociedade Brasileira de Pediatria estabelecem que:\n- A dose de nascimento da vacina de hepatite B DEVE ser administrada nas primeiras 12 a 24 horas de vida;\n- Contudo, essa primeira dose de nascimento NÃO é computada como dose válida do esquema primário padrão;\n- A criança deve receber normalmente as 3 doses subsequentes contidas na vacina Pentavalente aos 2, 4 e 6 meses de vida, totalizando um esquema de 4 doses (0, 2, 4 e 6 meses).',
    comentariosAlternativas: {
      A: 'Correta. Prematuro < 2.000g ou < 33 semanas faz esquema de 4 doses: dose de nascimento + 3 doses da Pentavalente aos 2, 4 e 6 meses.',
      B: 'Incorreta. A dose neonatal isolada tem menor imunogenicidade em prematuros e não dispensa as doses subsequentes.',
      C: 'Incorreta. A pentavalente deve ser administrada em seu esquema tríplice completo (2, 4 e 6 meses).',
      D: 'Incorreta. Não existe recomendação de doses mensais contínuas de hepatite B.',
    },
  },
  {
    id: 'ped-imun-009',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Pentavalente - Choro Persistente Inconsolável',
    isRevisao: false,
    enunciado:
      'Lactente de 2 meses recebeu a primeira dose da vacina Pentavalente (DTPw + Hib + HepB) na Unidade Básica de Saúde. Seis horas após a aplicação, a criança iniciou quadro de choro agudo, estridente e contínuo, permanecendo inconsolável por 4 horas e meia consecutivas, sem febre ou sinais meníngeos. A mãe comparece no dia seguinte relatando o fato ao pediatra. De acordo com o Manual de Vigilância Epidemiológica de Eventos Adversos Pós-Vacinação do Ministério da Saúde, qual é a conduta para as próximas doses aos 4 e 6 meses?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Substituir a vacina Pentavalente de células inteiras pela vacina acelular (DTPa / Pentavalente acelular via CRIE) para as doses subsequentes.',
      },
      {
        id: 'B',
        texto:
          'Manter a vacina Pentavalente convencional com células inteiras, pois o choro persistente é um sintoma corriqueiro sem relevância clínica.',
      },
      {
        id: 'C',
        texto:
          'Suspender definitivamente qualquer imunização contra a Difteria, Tétano e Coqueluche para o resto da vida da criança.',
      },
      {
        id: 'D',
        texto:
          'Substituir a vacina pela Dupla Infantil (DT infantil, sem componente da coqueluche), visto que o choro contraindica a coqueluche.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O choro persistente e incontrolável por 3 horas ou mais nas primeiras 48 horas após a aplicação da vacina com componente pertussis de células inteiras (DTPw presente na Pentavalente) é um evento adverso moderado a grave mediado por endotoxinas da Bordetella pertussis. As normas do PNI/MS estabelecem que a ocorrência de choro persistente incontrolável (≥ 3 horas) é uma INDICAÇÃO FORMAL DE SUBSTITUIÇÃO da vacina celular pela VACINA ACELULAR (DTPa - tríplice bacteriana acelular ou pentavalente acelular via CRIE) nas doses subsequentes (aos 4 e 6 meses). A vacina acelular mantém a eficácia protetora com uma taxa drasticamente menor de reatogenecidade neurológica e sistêmica.',
    comentariosAlternativas: {
      A: 'Correta. Choro incontrolável por ≥ 3 horas pós-DTPw indica substituição das doses seguintes pela vacina acelular (DTPa).',
      B: 'Incorreta. Repetir a vacina de células inteiras expõe a criança a eventos mais graves, como EHH e convulsão.',
      C: 'Incorreta. A imunização não deve ser suspensa; o componente acelular é perfeitamente tolerado e seguro.',
      D: 'Incorreta. A suspensão total do pertussis com uso da DT infantil só está indicada na ocorrência de encefalopatia aguda.',
    },
  },
  {
    id: 'ped-imun-010',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Pentavalente - Episódio Hipotônico-Hiporresponsivo (EHH)',
    isRevisao: false,
    enunciado:
      'Lactente de 2 meses de vida, 4 horas após receber a 1ª dose da vacina Pentavalente (DTPw-Hib-HepB) e VIP, apresenta episódio súbito de palidez cutânea intensa, perda transitória de tônus muscular (hipotonia global), cianose labial e ausência de resposta a estímulos verbais e táteis (hiporresponsividade), com duração de 20 minutos. A mãe leva a criança ao pronto-socorro, onde, ao dar entrada, o lactente já recuperou integralmente o padrão neurológico normal, mantendo exame físico e sinais vitais normais. A respeito desse evento adverso, assinale a opção com o diagnóstico e a conduta recomendada pelo Ministério da Saúde:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de um Episódio Hipotônico-Hiporresponsivo (EHH); a conduta para as próximas doses (4 e 6 meses) é indicar a vacina acelular (DTPa acelular) via Centro de Referência para Imunobiológicos Especiais (CRIE).',
      },
      {
        id: 'B',
        texto:
          'Trata-se de anafilaxia clássica mediada por IgE; prescrever adrenalina autoaplicável e contraindicar qualquer vacina futura.',
      },
      {
        id: 'C',
        texto:
          'Trata-se de encefalopatia pertussis aguda; contraindicar o componente pertussis celular e acelular, administrando apenas a vacina DT (dupla infantil).',
      },
      {
        id: 'D',
        texto:
          'Trata-se de convulsão atônica associada a lesão cerebral focal; iniciar fenobarbital contínuo por 2 anos e manter a vacina Pentavalente comum.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Episódio Hipotônico-Hiporresponsivo (EHH) é um evento adverso caracterizado pela tríade clínica de início súbito nas primeiras 48 horas pós-vacina: 1) Palidez cutânea intensa ou cianose; 2) Hipotonia muscular acentuada ("criança mole"); 3) Hiporresponsividade / diminuição do nível de consciência. É autolimitado (duração de minutos a poucas horas) e tem evolução benigna, sem deixar sequelas neurológicas motoras ou intelectuais. É causado quase exclusivamente pelo componente pertussis celular (DTPw). O protocolo do Ministério da Saúde preconiza que o paciente que apresentou EHH deve receber a VACINA ACELULAR (DTPa) nas doses subsequentes disponibilizada no CRIE.',
    comentariosAlternativas: {
      A: 'Correta. Diagnóstico de EHH; conduta é a substituição do componente de células inteiras pela vacina DTPa acelular via CRIE.',
      B: 'Incorreta. Na anafilaxia há urticária, broncoespasmo, estridor ou hipotensão cardiovascular, ausentes no EHH.',
      C: 'Incorreta. A encefalopatia exige rebaixamento persistente, coma ou crises epilépticas prolongadas por dias, e não evento transitório autolimitado.',
      D: 'Incorreta. O EHH não é uma crise epiléptica motora nem exige anticonvulsivante contínuo.',
    },
  },
  {
    id: 'ped-imun-011',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Pentavalente - Convulsão Pós-Vacinal',
    isRevisao: false,
    enunciado:
      'Lactente de 4 meses de vida, 24 horas após receber a 2ª dose da vacina Pentavalente (DTPw-Hib-HepB), apresenta pico febril de 38,9 °C seguido por episódio de abalos clônicos generalizados em quatro membros com desvio ocular por cerca de 2 minutos. Foi atendido na UPA, onde cessou a crise espontaneamente, sem déficit focal motor pós-ictal e com recuperação completa. A mãe pergunta ao pediatra como proceder com a 3ª dose aos 6 meses. Qual é a conduta preconizada pelas normas do Programa Nacional de Imunizações (PNI)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Substituir a vacina celular pela vacina pertussis acelular (DTPa) na 3ª dose aos 6 meses, com administração no CRIE.',
      },
      {
        id: 'B',
        texto:
          'Contraindicar de forma absoluta qualquer componente pertussis (celular ou acelular), utilizando obrigatoriamente a vacina DT (dupla infantil).',
      },
      {
        id: 'C',
        texto:
          'Manter a vacina Pentavalente tradicional com células inteiras, já que convulsão em vigência de febre é evento benigno que dispensa alteração.',
      },
      {
        id: 'D',
        texto:
          'Suspender a vacina de hepatite B e aplicar a vacina DTP celular isolada.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A ocorrência de convulsão (seja febril ou afebril) nas primeiras 72 horas após a aplicação de vacina contendo o componente pertussis de células inteiras (DTPw) constitui indicação formal de transição para a vacina pertussis acelular (DTPa / pentavalente acelular) nas doses subsequentes, a ser administrada no Centro de Referência para Imunobiológicos Especiais (CRIE). A convulsão isolada NÃO contraindica o componente pertussis acelular; a única contraindicação que exige a suspensão total de qualquer pertussis e troca pela vacina DT infantil é o quadro de ENCEFALOPATIA aguda nos primeiros 7 dias pós-vacina.',
    comentariosAlternativas: {
      A: 'Correta. Convulsão (febril ou afebril) em até 72h após DTPw indica substituição pela vacina pertussis acelular (DTPa).',
      B: 'Incorreta. Apenas a encefalopatia aguda exige troca pela DT (dupla infantil); convulsão isolada permite o uso da DTPa.',
      C: 'Incorreta. Não se deve repetir a DTP de células inteiras pelo risco de novas convulsões e eventos mais graves.',
      D: 'Incorreta. O antígeno responsável pela convulsão pós-vacinal é a pertussis celular, e não a hepatite B.',
    },
  },
  {
    id: 'ped-imun-012',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Pentavalente - Encefalopatia Aguda e Uso da DT',
    isRevisao: false,
    enunciado:
      'Lactente de 2 meses é levado à emergência pediátrica no 3º dia após receber a 1ª dose da vacina Pentavalente (DTPw-Hib-HepB). A criança evoluiu com febre refratária, rebaixamento grave e persistente do nível de consciência, irritabilidade extrema com choro ininterrupto, flutuação do tônus e estado de mal epiléptico que exigiu intubação orotraqueal e internação em UTI pediátrica por 12 dias. A extensa investigação laboratorial e infecciosa afastou meningite bacteriana, intoxicações e encefalite herpética, fechando-se o diagnóstico de Encefalopatia Aguda pós-vacina pertussis. Qual é a conduta formal do Ministério da Saúde para o prosseguimento da imunização dessa criança quanto aos componentes difteria, tétano e coqueluche?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Contraindicar PERMANENTEMENTE qualquer vacina contendo o componente pertussis (seja de células inteiras - DTPw, seja acelular - DTPa); nas próximas doses, a criança deve receber a vacina Dupla Infantil (DT - difteria e tétano).',
      },
      {
        id: 'B',
        texto:
          'Administrar a vacina tríplice bacteriana acelular (DTPa) com metade da dose no CRIE sob monitorização neurológica contínua.',
      },
      {
        id: 'C',
        texto:
          'Manter a vacina Pentavalente convencional sob proteção prévia com corticoterapia em altas doses.',
      },
      {
        id: 'D',
        texto:
          'A encefalopatia contraindica todas as vacinas do calendário infantil, devendo a criança permanecer sem qualquer imunobiológico até os 10 anos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A encefalopatia aguda grave que ocorre nos primeiros 7 dias após a administração de vacina com componente pertussis (caracterizada por coma, rebaixamento do sensório e crises convulsivas prolongadas sem outra causa identificada) é uma emergência neurológica raríssima e representa a CONTRAINDICAÇÃO ABSOLUTA E DEFINITIVA para QUALQUER vacina que contenha a fração pertussis (coqueluche), seja ela de células inteiras (DTPw) ou acelular (DTPa). Nesses casos, para manter a proteção essencial contra tétano e difteria, a criança deve receber exclusivamente a vacina DUPLA INFANTIL (DT infantil), além das vacinas contra Hib e Hepatite B isoladamente.',
    comentariosAlternativas: {
      A: 'Correta. Encefalopatia aguda pós-pertussis contraindica qualquer componente pertussis (DTPw ou DTPa), devendo-se utilizar a vacina DT.',
      B: 'Incorreta. A DTPa também é formalmente contraindicada em caso de encefalopatia prévia.',
      C: 'Incorreta. Repetir o antígeno causador é perigoso e contraindicado; corticoide não previne novas lesões cerebrais vacinais.',
      D: 'Incorreta. As demais vacinas (inativadas contra pneumococo, pólio VIP, etc.) continuam indicadas e seguras.',
    },
  },
  {
    id: 'ped-imun-013',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Pentavalente - Febre Elevada e Reações Locais Leves',
    isRevisao: false,
    enunciado:
      'Lactente de 2 meses recebeu a primeira dose da vacina Pentavalente. Cerca de 12 horas após a injeção, apresentou temperatura axilar de 39,6 °C acompanhada de hiperemia e dor no local da injeção no terço médio da coxa esquerda. A mãe administrou paracetamol oral com defervescência térmica completa e resolução da dor em 24 horas. Na consulta de rotina, a mãe expressa receio de aplicar a 2ª dose aos 4 meses e solicita encaminhamento ao CRIE para a vacina acelular. De acordo com o Manual de Eventos Adversos Pós-Vacinação do Ministério da Saúde, a indicação para a troca pela vacina acelular (DTPa) exige febre a partir de qual patamar?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Febre muito alta igual ou superior a 39,5 °C (ou febre que cause convulsão) é critério para substituição da vacina de células inteiras pela vacina acelular (DTPa) nas próximas doses.',
      },
      {
        id: 'B',
        texto:
          'Qualquer temperatura axilar acima de 37,8 °C é critério obrigatório para suspensão da vacina celular.',
      },
      {
        id: 'C',
        texto:
          'A febre isolada, independentemente de atingir 40 °C ou mais, nunca é critério para troca por vacina acelular.',
      },
      {
        id: 'D',
        texto:
          'Febre acima de 39,5 °C exige a suspensão definitiva da vacina antitetânica e antidiftérica com troca pela vacina BCG.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Segundo as diretrizes técnicas do Ministério da Saúde do Brasil (Manual de Normas e Procedimentos para Vacinação e Manual de Eventos Adversos), a ocorrência de FEBRE IGUAL OU SUPERIOR A 39,5 °C nas primeiras 48 horas após a vacina DTP de células inteiras (Pentavalente) ou febre que desencadeie convulsão febril é critério oficial de indicação para o uso da vacina pertussis ACELULAR (DTPa) nas doses subsequentes disponibilizada pelo CRIE. Febres baixas ou moderadas (< 39,5 °C) e reações locais leves são reações comuns e esperadas da DTPw e não justificam a troca pelo imunobiológico especial.',
    comentariosAlternativas: {
      A: 'Correta. Febre ≥ 39,5 °C não controlada ou refratária é critério do PNI/MS para indicação de DTPa acelular no CRIE.',
      B: 'Incorreta. Febre baixa (37,8 - 38,5 °C) é evento comum e esperado da vacina de células inteiras.',
      C: 'Incorreta. O patamar de febre ≥ 39,5 °C está expressamente contemplado no manual como critério de troca pela DTPa.',
      D: 'Incorreta. Não se suspende difteria e tétano por hipertermia; o alvo da mudança é apenas a fração pertussis.',
    },
  },
  {
    id: 'ped-imun-014',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Poliomielite - Transição para Esquema Exclusivo com VIP',
    isRevisao: false,
    enunciado:
      'No ano de 2024, o Ministério da Saúde do Brasil atualizou oficialmente a estratégia do Programa Nacional de Imunizações (PNI) contra a Poliomielite, eliminando definitivamente a Vacina Oral da Poliomielite (VOPb / Sabin - a tradicional "gotinha") do calendário de rotina. Qual é o esquema vacinal atualizado e a fundamentação epidemiológica e científica que justificou a transição para o esquema exclusivo injetável com a Vacina Inativada da Poliomielite (VIP / Salk)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Esquema exclusivo com VIP aos 2, 4 e 6 meses de vida, com primeiro reforço aos 15 meses (VIP) e segundo reforço aos 4 anos de idade (VIP); o objetivo é eliminar o risco de Poliomielite Paralítica Associada à Vacina (VAPP) e de circulação de poliovírus derivado da cepa vacinal (cVDPV).',
      },
      {
        id: 'B',
        texto:
          'Substituição da VIP pela VOP aos 2, 4 e 6 meses para estimular imunidade de mucosa intestinal obrigatória contra o rotavírus.',
      },
      {
        id: 'C',
        texto:
          'Suspensão total de todas as vacinas contra poliomielite no Brasil em razão da erradicação global certificada pela OMS.',
      },
      {
        id: 'D',
        texto:
          'Administração de dose única de VIP aos 12 meses de vida, sem necessidade de qualquer reforço na primeira infância.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Em 2024, o Brasil concretizou a transição histórica e recomendada pela Organização Mundial da Saúde (OMS) rumo ao esquema 100% injetável com a Vacina Inativada da Poliomielite (VIP - Salk):\n- Esquema primário: 3 doses de VIP aos 2, 4 e 6 meses de vida;\n- Doses de reforço: 1º reforço aos 15 meses de vida com VIP e 2º reforço aos 4 anos de idade com VIP (substituindo em definitivo as duas doses de reforço que eram feitas com a VOP oral).\nA vacina VOP, por conter vírus vivos atenuados (sorotipos 1 e 3), podia muito raramente sofrer reversão neurotrópica causando paralisia flácida pós-vacinal (VAPP) ou sofrer mutação e ser transmitida no ambiente como poliovírus derivado vacinal circulante (cVDPV). A VIP, sendo inativada (vírus mortos), não tem qualquer risco de causar paralisia ou disseminação comunitária.',
    comentariosAlternativas: {
      A: 'Correta. Esquema 100% VIP (2, 4, 6 meses + reforços aos 15 meses e 4 anos injetáveis), eliminando o risco de VAPP e cVDPV.',
      B: 'Incorreta. A VOP foi abolida e substituída integralmente pela VIP.',
      C: 'Incorreta. A vacinação contra pólio permanece prioritária devido ao risco de reintrodução a partir de países endêmicos.',
      D: 'Incorreta. O esquema primário aos 2, 4 e 6 meses e os dois reforços (15m e 4 anos) com VIP são mantidos.',
    },
  },
  {
    id: 'ped-imun-015',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Poliomielite - Imunodeprimidos e Contactantes Domiciliares',
    isRevisao: false,
    enunciado:
      'Lactente de 2 meses de vida, saudável, comparece à UBS para receber as vacinas do calendário básico. Durante a entrevista, a mãe relata que o irmão mais velho da criança (de 6 anos) é portador de Leucemia Linfoide Aguda em quimioterapia imunossupressora intensiva e reside na mesma casa. Diante do histórico familiar de convívio com paciente gravemente imunodeprimido, assinale a afirmativa correta sobre a imunização contra a poliomielite para esse lactente de 2 meses:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O lactente deve receber exclusivamente a Vacina Inativada da Poliomielite (VIP), pois vacinas de vírus atenuados excretados por via fecal-oral (como a antiga VOP) ofereciam risco de transmissão secundária e infecção paralítica fatal no irmão imunossuprimido.',
      },
      {
        id: 'B',
        texto:
          'O lactente deve receber a VOP oral em dose dobrada para disseminar anticorpos no ambiente domiciliar.',
      },
      {
        id: 'C',
        texto:
          'O lactente deve ter todas as vacinas contra poliomielite suspensas até que o irmão complete o tratamento oncológico.',
      },
      {
        id: 'D',
        texto:
          'O lactente deve ser afastado de casa e permanecer hospitalizado durante 30 dias após receber a vacina VIP.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Vacina Inativada da Poliomielite (VIP) é composta por poliovírus inativados (mortos dos sorotipos 1, 2 e 3) e não apresenta qualquer replicação biológica nem excreção fecal-oral ou respiratória. Por esse motivo, é a vacina de escolha tanto para indivíduos imunodeprimidos quanto para TODOS os seus CONTACTANTES DOMICILIARES íntimos. Com a transição do PNI em 2024 para o esquema 100% VIP (injetável), o risco de transmissão de poliovírus atenuado derivado de contactantes foi totalmente erradicado no Brasil.',
    comentariosAlternativas: {
      A: 'Correta. A VIP é segura e indicada em contactantes de imunodeprimidos, sem excreção viral nem risco biológico.',
      B: 'Incorreta. A VOP oral nunca deve ser administrada a contactantes de imunossuprimidos graves pelo risco de VAPP secundária.',
      C: 'Incorreta. O lactente deve ser vacinado normalmente no tempo correto com vacinas inativadas.',
      D: 'Incorreta. A VIP não replica nem é excretada; não requer qualquer afastamento ou isolamento hospitalar.',
    },
  },
  {
    id: 'ped-imun-016',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Rotavírus - Idade Máxima Estrita para 1ª Dose',
    isRevisao: false,
    enunciado:
      'Lactente com 3 meses e 22 dias de vida (112 dias de vida) comparece pela primeira vez a uma Unidade Básica de Saúde para receber as vacinas dos 2 meses de idade devido a atraso por motivo de mudança de município. A criança está assintomática e com exame físico normal. Em relação à Vacina Oral de Rotavírus Humano Atenuado (VRH), qual é a conduta preconizada pelo Programa Nacional de Imunizações (PNI)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'NÃO administrar a 1ª dose da vacina contra Rotavírus (VRH), pois a criança ultrapassou o limite máximo estrito de idade (3 meses e 15 dias / 105 dias de vida); a dose deve ser considerada perdida.',
      },
      {
        id: 'B',
        texto:
          'Aplicar a 1ª dose normalmente, pois a idade máxima permitida para a primeira dose é de até 7 meses e 29 dias de vida.',
      },
      {
        id: 'C',
        texto:
          'Administrar a vacina diluída em soro glicosado 5% por via endovenosa para evitar a absorção enteral e prevenir a invaginação intestinal.',
      },
      {
        id: 'D',
        texto:
          'Solicitar ultrassonografia de abdome prévia e, se normal, autorizar a aplicação da vacina contra rotavírus até os 2 anos de idade.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Vacina Oral de Rotavírus Humano Atenuado (VRH - monovalente G1P[8]) possui LIMITES CRONOLÓGICOS ESTRITOS de administração definidos pelo PNI/MS e pela OMS para minimizar o risco de Invaginação Intestinal (intussuscepção aguda):\n- 1ª dose: idade mínima de 1 mês e 15 dias (6 semanas) e IDADE MÁXIMA ESTRITA de 3 MESES E 15 DIAS (105 dias de vida);\n- 2ª dose: idade mínima de 3 meses e 15 dias e IDADE MÁXIMA ESTRITA de 7 MESES E 29 DIAS (239 dias de vida), com intervalo mínimo de 4 semanas entre as doses.\nSe o lactente comparecer com 3 meses e 16 dias ou mais sem ter recebido a primeira dose, ela NÃO DEVE SER APLICADA e a oportunidade é considerada definitivamente perdida.',
    comentariosAlternativas: {
      A: 'Correta. Idade máxima para a 1ª dose é 3 meses e 15 dias (105 dias); ultrapassado esse prazo, não se administra a vacina.',
      B: 'Incorreta. 7 meses e 29 dias é o limite máximo estrito para a 2ª dose, não para a 1ª dose.',
      C: 'Incorreta. A VRH é uma vacina estritamente de uso oral; administração parenteral seria fatal.',
      D: 'Incorreta. Nenhuma ultrassonografia permite ultrapassar os prazos limites formais do PNI.',
    },
  },
  {
    id: 'ped-imun-017',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Rotavírus - Regurgitação ou Vômito Pós-Aplicação',
    isRevisao: false,
    enunciado:
      'Lactente de 2 meses de vida recebe a primeira dose da Vacina Rotavírus Humano Atenuado (VRH) por via oral na sala de vacinas. Cerca de 30 segundos após a administração de todo o conteúdo da bisnaga oral, o lactente tosse e regurgita / vomita uma quantidade moderada de secreção láctea com a vacina. A mãe, muito preocupada, solicita que a profissional de enfermagem aplique imediatamente uma nova bisnaga da vacina. De acordo com as normas e manuais do Programa Nacional de Imunizações (PNI) do Ministério da Saúde, qual é a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'NÃO reaplicar a dose; considerar a dose válida e registrar normalmente na caderneta de vacinação, agendando a 2ª dose aos 4 meses.',
      },
      {
        id: 'B',
        texto:
          'Reaplicar a dose imediatamente com uma nova bisnaga oral completa para garantir a soroconversão imunológica.',
      },
      {
        id: 'C',
        texto:
          'Aguardar 30 minutos e administrar meia dose da vacina oral com água destilada.',
      },
      {
        id: 'D',
        texto:
          'Considerar a dose nula e contraindicar definitivamente a 2ª dose pelo risco de anafilaxia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A orientação oficial do Ministério da Saúde e do fabricante para a Vacina Oral do Rotavírus (VRH) é taxativa: se a criança cuspir, regurgitar ou vomitar após a deglutição da vacina, NÃO SE DEVE REAPLICAR A DOSE. Estudos de eficácia demonstraram que frações mínimas do vírus vacinal aderidas à mucosa oral e faríngea já são suficientes para iniciar a replicação viral no epitélio e induzir a resposta imune necessária. A dose deve ser carimbada e considerada administrada com sucesso, mantendo-se o agendamento da 2ª dose para os 4 meses de vida.',
    comentariosAlternativas: {
      A: 'Correta. Regra fundamental do PNI: em caso de vômito ou regurgitação da vacina do rotavírus, NUNCA reaplicar a dose.',
      B: 'Incorreta. A reaplicação imediata é desnecessária e contraindicada pelas normas operacionais de vacinação.',
      C: 'Incorreta. Não se faz fracionamento nem diluição da vacina de rotavírus.',
      D: 'Incorreta. Vômito ou regurgitação simples de lactente não é anafilaxia e não contraindica a segunda dose.',
    },
  },
  {
    id: 'ped-imun-018',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Rotavírus - Contraindicações Formais',
    isRevisao: false,
    enunciado:
      'Lactente de 2 meses é levado à consulta pediátrica antes de receber as vacinas do 2º mês. Ao revisar a história pregressa, o pediatra constata que a criança foi submetida a laparotomia exploradora com 45 dias de vida devido a um quadro de Invaginação Intestinal (intussuscepção ileocólica aguda), tratada cirurgicamente com redução manual sem necessidade de enterectomia. Diante desse antecedente clínico, qual é a conduta correta em relação à vacinação com a Vacina Oral do Rotavírus Humano Atenuado (VRH)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A vacina de rotavírus é FORMALMENTE CONTRAINDICADA devido ao histórico prévio de invaginação intestinal.',
      },
      {
        id: 'B',
        texto:
          'A vacina está liberada normalmente por se tratar de redução cirúrgica anatômica completa.',
      },
      {
        id: 'C',
        texto:
          'A vacina deve ser aplicada apenas após profilaxia prévia com hidróxido de alumínio oral.',
      },
      {
        id: 'D',
        texto:
          'A vacina pode ser aplicada se a criança estiver afebril e com trânsito intestinal preservado há mais de 7 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As CONTRAINDICAÇÕES FORMAIS E ABSOLUTAS da Vacina Oral do Rotavírus Humano (VRH) incluem:\n1) Histórico prévio de Invaginação Intestinal (intussuscepção) de qualquer etiologia;\n2) Malformação congênita não corrigida do trato gastrointestinal que predisponha à invaginação intestinal (ex.: Divertículo de Meckel, duplicação intestinal, cisto entérico);\n3) Imunodeficiência Combinada Grave (SCID) ou outras imunodeficiências celulares graves;\n4) Reação anafilática prévia comprovada à vacina de rotavírus ou a seus componentes.\nCrianças com histórico de invaginação intestinal têm risco aumentado de recorrência que pode ser potencializado pela replicação do vírus atenuado nas placas de Peyer ileais.',
    comentariosAlternativas: {
      A: 'Correta. Histórico de invaginação intestinal prévia é contraindicação absoluta para a vacina de rotavírus.',
      B: 'Incorreta. O antecedente de intussuscepção contraindica a vacina independentemente do sucesso do tratamento.',
      C: 'Incorreta. Antiácidos não removem o risco de reativação de invaginação intestinal.',
      D: 'Incorreta. A contraindicação é permanente devido ao antecedente mórbido específico.',
    },
  },
  {
    id: 'ped-imun-019',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Rotavírus - Lactente Hospitalizado em Enfermaria/UTI',
    isRevisao: false,
    enunciado:
      'Lactente de 2 meses de idade encontra-se internado em enfermaria de pediatria geral em tratamento de bronquiolite viral aguda por VSR, recebendo suporte de oxigênio por cateter nasal de baixo fluxo, com previsão de alta em 4 dias. A equipe de enfermagem da enfermaria questiona se deve administrar a vacina oral contra Rotavírus (VRH) na própria enfermaria, visto que hoje a criança completa exatamente 2 meses. Qual é a recomendação oficial do Programa Nacional de Imunizações (PNI) quanto à vacinação com rotavírus em crianças hospitalizadas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Adiar a vacina contra rotavírus até a alta hospitalar para evitar a excreção fecal do vírus atenuado e o risco de transmissão nosocomial a outras crianças internadas; as demais vacinas injetáveis (Penta, VIP e Pneumo 10) podem ser administradas se a criança estiver estável.',
      },
      {
        id: 'B',
        texto:
          'Administrar a vacina contra rotavírus imediatamente na enfermaria comum, pois o vírus vacinal não é eliminado nas fezes de lactentes doentes.',
      },
      {
        id: 'C',
        texto:
          'Contraindicar a vacina contra rotavírus definitivamente para todo lactente que já precisou de hospitalização antes dos 3 meses de vida.',
      },
      {
        id: 'D',
        texto:
          'Administrar a vacina por sonda nasogástrica associada a doses profiláticas de vancomicina oral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O vírus vacinal da vacina oral de rotavírus (VRH) replica no intestino e é excretado nas fezes a partir do 3º ao 7º dia pós-aplicação. Por esse motivo, as diretrizes do Ministério da Saúde e da Sociedade Brasileira de Pediatria recomendam que a administração da vacina contra o rotavírus seja ADIADA em lactentes hospitalizados em UTIs ou enfermarias pediátricas, devido ao risco real de transmissão nosocomial do vírus atenuado para outros pacientes internados suscetíveis (muitos com prematuridade extrema, imunodeficiências ou cardiopatias graves). A vacina deve ser aplicada imediatamente no momento da ALTA hospitalar (desde que respeitados os limites máximos de idade: até 3 meses e 15 dias para a 1ª dose). As vacinas injetáveis (Pentavalente, VIP e Pneumocócica 10) podem ser aplicadas normalmente durante a internação se a criança estiver clinicamente estável.',
    comentariosAlternativas: {
      A: 'Correta. Adia-se a vacina oral de rotavírus até a alta para prevenir surtos de transmissão nosocomial no ambiente hospitalar.',
      B: 'Incorreta. O vírus é excretado em grandes quantidades nas fezes e pode contaminar outros pacientes hospitalizados.',
      C: 'Incorreta. A internação transitória não contraindica a vacina; apenas adia a dose oral para o dia da alta.',
      D: 'Incorreta. A administração por sonda nasogástrica com vancomicina não tem respaldo técnico e é prejudicial.',
    },
  },
  {
    id: 'ped-imun-020',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Calendário dos 2 Meses - Aplicação Simultânea de Múltiplos Imunobiológicos',
    isRevisao: false,
    enunciado:
      'Mãe primípara leva seu filho hígido de 2 meses de vida à sala de vacinação da UBS para receber o esquema preconizado pelo Ministério da Saúde. A equipe informa que a criança deverá receber a vacina Pentavalente (IM), a VIP (IM), a Pneumocócica 10-valente conjugada (IM) e a Vacina Oral do Rotavírus (VO). A mãe demonstra preocupação e questiona se "tantas vacinas juntas no mesmo dia não irão sobrecarregar o sistema imunológico do bebê". O que a literatura científica e as diretrizes do PNI estabelecem a esse respeito?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A administração simultânea de múltiplas vacinas é segura, eficaz e altamente recomendada, pois não sobrecarrega a capacidade de resposta do sistema imune infantil, preserva a imunogenicidade de cada antígeno e reduz as oportunidades perdidas de vacinação.',
      },
      {
        id: 'B',
        texto:
          'A mãe está correta; a aplicação concomitante de mais de duas vacinas no mesmo dia esgota os linfócitos T e anula a síntese de anticorpos.',
      },
      {
        id: 'C',
        texto:
          'Deve-se obrigatoriamente aguardar um intervalo de 14 dias entre cada uma das vacinas injetáveis do 2º mês para prevenir anergia imunológica.',
      },
      {
        id: 'D',
        texto:
          'A vacina oral de rotavírus não pode ser administrada no mesmo dia de vacinas inativadas por risco de interferência cruzada grave.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A administração simultânea de várias vacinas do calendário básico no mesmo dia em locais anatômicos diferentes é uma prática universalmente recomendada pela OMS, Ministério da Saúde e Sociedade Brasileira de Pediatria. O sistema imunológico dos lactentes tem capacidade biológica teórica de responder a milhares de antígenos simultaneamente (a carga antigênica de todas as vacinas infantis atuais somadas é infinitamente menor do que o número de antígenos aos quais o bebê é exposto em um resfriado comum ou pela flora bacteriana do parto). A coadministração não eleva a incidência de eventos adversos graves, não prejudica a resposta imune de nenhum dos componentes e é essencial para evitar o atraso vacinal e a perda de oportunidades de imunização.',
    comentariosAlternativas: {
      A: 'Correta. A administração simultânea de vacinas é segura, comprovada cientificamente e evita perda de oportunidades vacinais.',
      B: 'Incorreta. O sistema imune neonatal é perfeitamente apto a processar antígenos vacinais simultâneos sem sofrer esgotamento.',
      C: 'Incorreta. Vacinas inativadas e orais não requerem intervalo entre si quando administradas em momentos diferentes ou simultâneos.',
      D: 'Incorreta. A VRH pode ser administrada no mesmo dia das vacinas parenterais sem qualquer perda de eficácia.',
    },
  },
  {
    id: 'ped-imun-021',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Calendário dos 3 e 5 Meses - Vacina Meningocócica C Conjugada',
    isRevisao: false,
    enunciado:
      'Lactente de 3 meses de vida comparece à UBS para receber a imunização de rotina indicada para essa faixa etária pelo Programa Nacional de Imunizações (PNI) do Ministério da Saúde. Qual é a vacina preconizada no calendário básico aos 3 meses de vida e qual é o seu esquema recomendado de reforços na infância e adolescência?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Vacina Meningocócica C conjugada aos 3 e 5 meses de vida, com primeiro reforço aos 12 meses (podendo ser feito até 4 anos); e dose de reforço na adolescência aos 11 a 14 anos com a vacina Meningocócica ACWY conjugada.',
      },
      {
        id: 'B',
        texto:
          'Vacina Tríplice Viral associada à vacina contra Febre Amarela aos 3 e 5 meses com reforço aos 6 anos.',
      },
      {
        id: 'C',
        texto:
          'Vacina Meningocócica B recombinante aos 3, 5 e 7 meses sem necessidade de reforço aos 12 meses.',
      },
      {
        id: 'D',
        texto:
          'Vacina contra Varicela isolada com 3 doses semestrais consecutivas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'No calendário básico de vacinação da criança do Programa Nacional de Imunizações (PNI/MS):\n- Aos 3 meses e aos 5 meses de idade: administra-se a Vacina Meningocócica C conjugada (esquema primário de duas doses com intervalo de 60 dias);\n- Aos 12 meses (1 ano): administra-se uma dose de reforço da vacina Meningocócica C conjugada (podendo ser aplicada até os 4 anos e 11 meses em crianças com atraso);\n- Na adolescência (faixa etária de 11 a 14 anos): o PNI preconiza uma dose da vacina Meningocócica ACWY conjugada (quadrivalente), garantindo proteção ampliada contra os sorogrupos A, C, W e Y e reduzindo a taxa de carreadores orofaríngeos entre adolescentes.',
    comentariosAlternativas: {
      A: 'Correta. Meningocócica C aos 3 e 5 meses, reforço aos 12 meses e dose na adolescência (11 a 14 anos) com a MenACWY.',
      B: 'Incorreta. Tríplice viral e febre amarela são vacinas de vírus atenuados aplicadas a partir dos 9 e 12 meses, nunca aos 3 meses.',
      C: 'Incorreta. A vacina MenB não integra o calendário básico universal do SUS no PNI.',
      D: 'Incorreta. A varicela é administrada aos 15 meses (Tetraviral) e aos 4 anos no PNI.',
    },
  },
  {
    id: 'ped-imun-022',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Pneumocócica 10-valente - Esquema Básico e Reforço',
    isRevisao: false,
    enunciado:
      'A vacina Pneumocócica 10-valente conjugada (VPC10) foi introduzida no calendário básico de vacinação da criança pelo Ministério da Saúde com grande impacto na redução da morbimortalidade por Doença Pneumocócica Invasiva (DPI), pneumonia bacteriana e otite média aguda por Streptococcus pneumoniae. Qual é o esquema posológico recomendado pelo PNI para a vacina Pneumo 10 em crianças imunocompetentes?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Esquema de 2 doses (aos 2 e aos 4 meses de vida), com uma dose de reforço recomendada aos 12 meses de idade (podendo ser administrada até os 4 anos e 11 meses).',
      },
      {
        id: 'B',
        texto:
          'Esquema de 3 doses mensais no primeiro trimestre (aos 1, 2 e 3 meses), sem necessidade de reforço após o primeiro ano de vida.',
      },
      {
        id: 'C',
        texto:
          'Dose única administrada aos 6 meses de vida, exclusivamente por via oral.',
      },
      {
        id: 'D',
        texto:
          'Esquema de 4 doses aplicadas anualmente dos 1 aos 4 anos de idade.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O esquema adotado pelo Programa Nacional de Imunizações (PNI) do Ministério da Saúde para a vacina Pneumocócica 10-valente conjugada (VPC10) é o esquema "2 + 1":\n- 1ª dose: aos 2 meses de vida;\n- 2ª dose: aos 4 meses de vida (intervalo mínimo de 30 dias);\n- Dose de reforço: aos 12 meses de vida (preferencialmente entre 12 e 14 meses, podendo ser resgatada até os 4 anos, 11 meses e 29 dias).\nA conjugação dos polissacarídeos capsulares à proteína carreadora permite que a vacina induza resposta imune T-dependente, gerando memória imunológica duradoura mesmo em lactentes menores de 2 anos.',
    comentariosAlternativas: {
      A: 'Correta. O esquema do PNI é 2 doses (2 e 4 meses) + reforço aos 12 meses (esquema 2 + 1).',
      B: 'Incorreta. O esquema não prevê dose ao 1 mês nem elimina o reforço fundamental dos 12 meses.',
      C: 'Incorreta. A VPC10 é injetável por via intramuscular profunda e requer esquema primário com reforço.',
      D: 'Incorreta. O esquema pediátrico se inicia precocemente aos 2 meses de vida.',
    },
  },
  {
    id: 'ped-imun-023',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'CRIE e Prematuridade Extrema - Vacinas Especiais aos 2 Meses',
    isRevisao: false,
    enunciado:
      'Lactente nascido prematuro extremo com 26 semanas de idade gestacional e peso ao nascer de 820 g permanece internado na Unidade de Terapia Intensiva Neonatal (UTIN), estável hemodinamicamente, em ar ambiente e em ganho de peso. Hoje o bebê completa 2 meses de idade CRONOLÓGICA (sua idade gestacional corrigida é de 34 semanas). De acordo com as diretrizes do Ministério da Saúde / CRIE e da Sociedade Brasileira de Pediatria, qual é a conduta correta para a vacinação do segundo mês desse paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Vacinar imediatamente de acordo com a IDADE CRONOLÓGICA (2 meses); prematuros com peso de nascimento < 1.000 g ou idade gestacional < 31 semanas têm indicação formal no CRIE de receber a vacina pentavalente acelular / hexavalente acelular e a vacina Pneumocócica 13-valente (VPC13), além da VIP; a vacina oral de rotavírus deve ser adiada até a alta.',
      },
      {
        id: 'B',
        texto:
          'Aguardar que a criança atinja a idade corrigida de 2 meses (o que ocorreria somente aos 5 meses de idade cronológica) para iniciar qualquer vacinação.',
      },
      {
        id: 'C',
        texto:
          'Aplicar a vacina Pentavalente de células inteiras comum e administrar a vacina de rotavírus dentro da incubadora da UTI.',
      },
      {
        id: 'D',
        texto:
          'Prematuros abaixo de 1.000 g não devem receber vacinas injetáveis antes de completarem 1 ano de vida devido ao risco de choque hipotensivo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Regras fundamentais na imunização de recém-nascidos prematuros:\n1) A vacinação deve ser realizada estritamente conforme a IDADE CRONOLÓGICA (idade de nascimento), e NUNCA pela idade gestacional corrigida (com exceção única da BCG que requer peso ≥ 2.000 g);\n2) Indicações do CRIE para prematuros extremos (idade gestacional < 31 semanas ou peso ao nascer < 1.000 g): têm direito à vacina acelular (DTPa / Hexavalente acelular) para evitar apneia e eventos cardiorrespiratórios pós-DTPw, e à Vacina Pneumocócica 13-valente conjugada (VPC13) em substituição à VPC10;\n3) A vacina oral de rotavírus deve ser adiada enquanto o prematuro estiver internado na UTIN para prevenir a transmissão nosocomial do vírus vacinal.',
    comentariosAlternativas: {
      A: 'Correta. Vacina-se pela idade cronológica; no CRIE o prematuro extremo recebe vacina acelular, VPC13 e VIP, adiando o rotavírus para a alta.',
      B: 'Incorreta. Nunca se calcula calendário vacinal por idade gestacional corrigida.',
      C: 'Incorreta. A DTPw aumenta risco de apneia em prematuros extremos e o rotavírus não deve ser dado na UTIN.',
      D: 'Incorreta. Prematuros são o grupo mais vulnerável a coqueluche e pneumococo grave; a imunização precoce é salvadora.',
    },
  },
  {
    id: 'ped-imun-024',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Febre Amarela - Idade de Início e Interferência Vacinal',
    isRevisao: false,
    enunciado:
      'Em relação à vacina contra a Febre Amarela (vírus vivo atenuado) no calendário básico do Programa Nacional de Imunizações (PNI) do Ministério da Saúde para crianças em todo o território nacional, assinale a opção que indica a idade correta da primeira dose e a regra de coadministração com outras vacinas de vírus atenuados:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A 1ª dose é indicada aos 9 meses de vida, com dose de reforço aos 4 anos; em crianças menores de 2 anos de idade, NÃO deve ser administrada simultaneamente com a vacina Tríplice Viral (SCR), devendo-se respeitar um intervalo mínimo de 30 dias entre elas para evitar interferência imunológica com redução da eficácia da rubéola/febre amarela.',
      },
      {
        id: 'B',
        texto:
          'A 1ª dose é feita aos 2 meses de vida, concomitantemente com a vacina Pentavalente, sem necessidade de qualquer reforço posterior.',
      },
      {
        id: 'C',
        texto:
          'A vacina é contraindicada em todo o território brasileiro desde a declaração de zona livre de febre amarela.',
      },
      {
        id: 'D',
        texto:
          'Deve ser aplicada obrigatoriamente misturada na mesma seringa da vacina contra catapora aos 6 meses de vida.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O esquema da vacina de Febre Amarela no PNI/MS é universal para todo o Brasil:\n- 1ª dose aos 9 meses de idade;\n- Dose de reforço aos 4 anos de idade.\nRegra crítica de imunologia pediátrica: quando duas vacinas de vírus vivos atenuados parenterais (como Febre Amarela e Tríplice Viral - Sarampo, Caxumba e Rubéola) forem administradas em crianças menores de 2 anos de idade, elas NÃO DEVEM SER APLICADAS SIMULTANEAMENTE. Estudos clínicos demonstraram interferência antigênica mútua com redução significativa nas taxas de soroconversão para os componentes da rubéola e da própria febre amarela. Nesses casos, o PNI preconiza respeitar um intervalo mínimo de 30 dias (mínimo de 15 dias) entre a Febre Amarela (aos 9 meses) e a Tríplice Viral (aos 12 meses).',
    comentariosAlternativas: {
      A: 'Correta. 1ª dose aos 9 meses, reforço aos 4 anos e intervalo obrigatório de 30 dias com a Tríplice Viral em menores de 2 anos.',
      B: 'Incorreta. A febre amarela não pode ser administrada aos 2 meses pelo risco elevado de encefalite vacinal por imaturidade de barreira hematoencefálica.',
      C: 'Incorreta. A vacinação contra febre amarela é universal em todo o território brasileiro desde a expansão de área com recomendação.',
      D: 'Incorreta. Não se mistura vacinas na mesma seringa e a varicela não é dada aos 6 meses.',
    },
  },
  {
    id: 'ped-imun-025',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Síntese do Primeiro Semestre - Atualização de Calendário em Atraso',
    isRevisao: false,
    enunciado:
      'Lactente de 6 meses de vida, sem história patológica pregressa, é trazido pela primeira vez à Unidade Básica de Saúde pela avó. A carteira de vacinação comprova que a criança recebeu apenas a vacina BCG e a vacina contra Hepatite B ao nascer na maternidade, estando sem nenhuma vacina aplicada desde então. A criança encontra-se afebril e em bom estado nutricional. Considerando as regras de atualização vacinal em atraso preconizadas pelo PNI, quais vacinas devem ser administradas na visita de hoje para o início imediato do esquema do primeiro semestre?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar a 1ª dose da Pentavalente (IM), a 1ª dose da VIP (IM) e a 1ª dose da Pneumocócica 10-valente (IM); a vacina oral contra Rotavírus (VRH) NÃO deve ser administrada por ter ultrapassado a idade máxima limite de 3 meses e 15 dias.',
      },
      {
        id: 'B',
        texto:
          'Administrar a vacina oral contra Rotavírus imediatamente associada à Tríplice Viral e à vacina Meningocócica C.',
      },
      {
        id: 'C',
        texto:
          'Aplicar apenas a vacina contra febre amarela e aguardar completar 1 ano para aplicar as vacinas atrasadas.',
      },
      {
        id: 'D',
        texto:
          'Reiniciar a vacina BCG e aplicar a vacina DTP acelular em dose quadruplicada.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Na atualização de esquemas em atraso em lactentes de 6 meses que não receberam nenhuma vacina aos 2, 3 e 4 meses:\n1) Pentavalente (DTPw-Hib-HepB): iniciar a 1ª dose hoje (as doses subsequentes serão agendadas com intervalo mínimo de 30 a 60 dias);\n2) Poliomielite (VIP): iniciar a 1ª dose hoje injetável;\n3) Pneumocócica 10-valente: iniciar a 1ª dose hoje;\n4) Rotavírus Humano Atenuado (VRH): CONTRAINDICADA/PERDIDA, pois a idade máxima permitida para iniciar a 1ª dose da vacina de rotavírus é 3 meses e 15 dias (105 dias). Como o lactente tem 6 meses, não se pode aplicar a vacina de rotavírus;\n5) Meningocócica C: será agendada na sequência (com intervalo oportuno). Essa questão consolida a regra de ouro das idades limites do PNI.',
    comentariosAlternativas: {
      A: 'Correta. Inicia-se 1ª dose de Penta, VIP e Pneumo 10; a vacina de rotavírus não pode ser administrada porque excedeu 3 meses e 15 dias.',
      B: 'Incorreta. A vacina de rotavírus é contraindicada por idade e a tríplice viral só é aplicada a partir dos 12 meses.',
      C: 'Incorreta. Febre amarela é feita aos 9 meses; as vacinas primárias devem ser iniciadas imediatamente.',
      D: 'Incorreta. A BCG já foi aplicada e comprovada, não devendo ser repetida.',
    },
  },
  {
    id: 'ped-imun-026',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Pneumocócica 10-valente - Espectro e Proteção contra Doença Invasiva',
    isRevisao: false,
    enunciado:
      'Lactente de 5 meses de vida, com esquema vacinal rigorosamente em dia para a idade (tendo recebido as duas primeiras doses da vacina Pneumocócica 10-valente conjugada aos 2 e 4 meses), é atendido em consulta pediátrica. O pai questiona sobre quais patologias e desfechos clínicos graves a vacina previne especificamente. De acordo com os fundamentos imunológicos e epidemiológicos da vacina Pneumocócica 10-valente conjugada (VPC10) adotada pelo PNI, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A vacina induz imunidade humoral duradoura e memória imunológica T-dependente, reduzindo expressivamente as taxas de Doença Pneumocócica Invasiva (meningite pneumocócica, bacteremia oculta e sepse), além de pneumonias comunitárias bacterianas e otites médias agudas causadas pelos 10 sorotipos vacinais.',
      },
      {
        id: 'B',
        texto:
          'Por ser composta exclusivamente por polissacarídeos livres não conjugados, a vacina não previne meningite em menores de 2 anos de idade, conferindo apenas proteção superficial de mucosa nasal.',
      },
      {
        id: 'C',
        texto:
          'A VPC10 protege exclusivamente contra infecções respiratórias virais provocadas pelo vírus sincicial respiratório e metapneumovírus.',
      },
      {
        id: 'D',
        texto:
          'A vacina erradica todos os 90 sorotipos conhecidos de pneumococo, tornando desnecessária a vigilância etiológica de cepas de substituição na comunidade.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A vacina Pneumocócica 10-valente conjugada (VPC10) contém polissacarídeos capsulares de 10 sorotipos de Streptococcus pneumoniae (1, 4, 5, 6B, 7F, 9V, 14, 18C, 19F e 23F) conjugados a proteínas carreadoras (proteína D do Haemophilus influenzae não tipável, toxoide tetânico e toxoide diftérico). Essa conjugação converte a resposta imune de T-independente em T-dependente, conferindo avidez e memória imunológica mesmo em lactentes < 2 anos. Seu maior objetivo e impacto reside na prevenção de Doença Pneumocócica Invasiva (DPI: meningite, bacteremia e sepse), além de reduções substanciais nas hospitalizações por pneumonia consolidativa e episódios de otite média aguda.',
    comentariosAlternativas: {
      A: 'Correta. A VPC10 previne DPI (meningite, sepse, bacteremia), pneumonia bacteriana e OMA pelos sorotipos vacinais.',
      B: 'Incorreta. A vacina é conjugada a proteínas carreadoras, sendo altamente eficaz e imunogênica em menores de 2 anos.',
      C: 'Incorreta. O pneumococo é uma bactéria (Streptococcus pneumoniae), não tendo ação antiviral direta sobre VSR.',
      D: 'Incorreta. Cobre 10 sorotipos específicos; fenômenos de substituição por sorotipos não cobertos (ex.: 19A, 3, 6C) continuam sob monitorização.',
    },
  },
  {
    id: 'ped-imun-027',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Pneumocócica 13-valente (VPC13) no CRIE - Grupos de Alto Risco',
    isRevisao: false,
    enunciado:
      'Lactente de 2 meses de vida foi diagnosticado no teste do pezinho com Anemia Falciforme (padrão eletroforético HbFS / homozigose SS). A criança está assintomática e iniciando profilaxia diária com penicilina oral. De acordo com o Manual do Centro de Referência para Imunobiológicos Especiais (CRIE) do Ministério da Saúde, qual vacina pneumocócica conjugada está formalmente indicada para essa criança e qual a justificativa clínica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Vacina Pneumocócica 13-valente conjugada (VPC13), pois a Doença Falciforme cursa com asplenia funcional precoce e risco de sepse pneumocócica fulminante, justificando a cobertura ampliada incluindo os sorotipos 3, 6A e 19A.',
      },
      {
        id: 'B',
        texto:
          'Vacina Pneumocócica 23-valente polissacarídica (VPP23) imediatamente aos 2 meses em substituição a qualquer vacina conjugada.',
      },
      {
        id: 'C',
        texto:
          'Contraindicar qualquer vacina pneumocócica pelo risco de desencadear crises álgicas vaso-oclusivas induzidas por anticorpos.',
      },
      {
        id: 'D',
        texto:
          'Manter exclusivamente a vacina Pneumo 10 comum da rede básica, visto que a hemoglobina S neutraliza naturalmente a cápsula do pneumococo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Pacientes com Doença Falciforme sofrem infartos esplênicos de repetição que levam precocemente à asplenia funcional (perda da capacidade fagocitária e opsonizante do baço), tornando-os até 400 vezes mais vulneráveis a bacteremia fulminante e óbito por bactérias encapsuladas, em especial o Streptococcus pneumoniae. Por isso, o Ministério da Saúde disponibiliza no CRIE a Vacina Pneumocócica 13-valente conjugada (VPC13) para crianças com asplenia anatômica ou funcional, nefropatias crônicas, cardiopatias congênitas, fístula liquórica, implante coclear e imunodeficiências. A VPC13 agrega cobertura aos sorotipos 3, 6A e 19A (cepas altamente virulentas e associadas a resistência antimicrobiana).',
    comentariosAlternativas: {
      A: 'Correta. Portadores de hemoglobinopatias/asplenia funcional têm indicação da VPC13 no CRIE pelo risco extremo de sepse por pneumococo.',
      B: 'Incorreta. A VPP23 não é imunogênica em menores de 2 anos e só é aplicada a partir dos 24 meses como reforço sequencial.',
      C: 'Incorreta. A vacinação antipneumocócica precoce e a profilaxia com penicilina são as intervenções que mais salvaram vidas na doença falciforme.',
      D: 'Incorreta. A rede do CRIE garante a VPC13 para ampliar a proteção contra sorotipos não cobertos pela VPC10.',
    },
  },
  {
    id: 'ped-imun-028',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Pneumocócica 23-valente (VPP23) - Uso Sequencial no CRIE',
    isRevisao: false,
    enunciado:
      'Criança de 2 anos e 3 meses de vida, portadora de síndrome nefrótica córtico-dependente, completou com sucesso o esquema primário de imunização pneumocócica com a vacina conjugada VPC13 aos 2, 4, 6 e 12 meses de vida no CRIE. O nefrologista pediátrico encaminha o paciente para a aplicação da Vacina Pneumocócica 23-valente polissacarídica (VPP23). Em relação ao uso da VPP23 nessa faixa etária e contexto clínico, assinale a opção correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A VPP23 está indicada a partir dos 2 anos de idade para ampliar o espectro sorotípico contra mais 11 sorotipos, devendo ser aplicada com intervalo mínimo de 8 semanas após a última dose da vacina pneumocócica conjugada.',
      },
      {
        id: 'B',
        texto:
          'A VPP23 é contraindicada em nefropatas crônicos pelo risco de necrose tubular tóxica decorrente de sua base polissacarídica.',
      },
      {
        id: 'C',
        texto:
          'A VPP23 deve ser repetida anualmente dos 2 aos 18 anos de idade para garantir a manutenção dos títulos de anticorpos protetores.',
      },
      {
        id: 'D',
        texto:
          'A VPP23 substitui a necessidade do reforço da vacina meningocócica e da vacina contra febre amarela.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Vacina Pneumocócica 23-valente (VPP23) é uma vacina polissacarídica não conjugada que induz resposta imune T-independente. Por não estimular células T auxiliares, ela tem baixíssima imunogenicidade em lactentes menores de 2 anos, sendo liberada estritamente A PARTIR DOS 2 ANOS DE IDADE para grupos de risco especial no CRIE (asplenia, nefropatias, cardiopatias, diabetes, pneumopatias, fístulas liquóricas, imunodeficiências). O protocolo preconiza o ESQUEMA SEQUENCIAL: primeiro administra-se a vacina conjugada (VPC13) para garantir memória imunológica celular; após um intervalo mínimo de 8 semanas (2 meses), aplica-se a VPP23 para expandir a cobertura sorotípica. Um único reforço da VPP23 é realizado 5 anos após a primeira dose.',
    comentariosAlternativas: {
      A: 'Correta. A VPP23 é indicada a partir de 2 anos para pacientes especiais no CRIE, com intervalo mínimo de 8 semanas após a VPC13.',
      B: 'Incorreta. Nefropatas crônicos (especialmente com síndrome nefrótica e perda urinária de imunoglobulinas) são prioritários para VPP23.',
      C: 'Incorreta. A VPP23 prevê apenas 1 revacinação (reforço) após 5 anos da primeira dose, para evitar o fenômeno de hiporresponsividade imunológica.',
      D: 'Incorreta. A VPP23 é estritamente antipneumocócica e não interfere nas demais vacinas.',
    },
  },
  {
    id: 'ped-imun-029',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Pneumocócica 15-valente (VPC15) - Avanços Biológicos',
    isRevisao: false,
    enunciado:
      'Nos últimos anos, foram aprovadas vacinas pneumocócicas conjugadas de espectro expandido, como a Vacina Pneumocócica 15-valente conjugada (VPC15). Em relação aos sorotipos adicionais incorporados na VPC15 que não estão presentes na vacina 13-valente (VPC13), quais são eles e qual a relevância clínica de sua cobertura na população pediátrica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sorotipos 22F e 33F, que figuram entre as causas emergentes mais frequentes de doença pneumocócica invasiva, empiema pleural e meningite em crianças após a introdução das vacinas conjugadas clássicas.',
      },
      {
        id: 'B',
        texto:
          'Sorotipos A e C da Neisseria meningitidis, integrando a proteção bacteriana meníngea e pneumocócica em frasco único.',
      },
      {
        id: 'C',
        texto:
          'Sorotipos recombinantes da Bordetella pertussis e toxina tetânica purificada.',
      },
      {
        id: 'D',
        texto:
          'Sorotipos entéricos do rotavírus humano cepa Wa e DS-1.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Vacina Pneumocócica 15-valente conjugada (VPC15) contém todos os 13 sorotipos da VPC13 (1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F e 23F) adicionados de dois novos sorotipos conjugados à proteína CRM197: os sorotipos 22F e 33F. Estudos de vigilância epidemiológica global e nacional demonstraram que os sorotipos 22F e 33F emergiram como importantes causas de Doença Pneumocócica Invasiva (DPI), meningite grave e derrames pleurais paraneumônicos complicados após o uso disseminado da VPC10 e VPC13. A vacina é intercambiável com a VPC13 no esquema básico infantil.',
    comentariosAlternativas: {
      A: 'Correta. Os dois sorotipos adicionais da VPC15 em relação à VPC13 são o 22F e o 33F, patógenos invasivos emergentes.',
      B: 'Incorreta. A VPC15 é exclusivamente antipneumocócica (Streptococcus pneumoniae) e não inclui antígenos de meningococo.',
      C: 'Incorreta. Não contém componentes de coqueluche ou tétano como antígenos primários alvos de proteção.',
      D: 'Incorreta. Rotavírus é vírus gastrointestinal, não correlacionado à VPC15.',
    },
  },
  {
    id: 'ped-imun-030',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Pneumocócica 10-valente - Resgate de Criança sem Vacinação Prévia',
    isRevisao: false,
    enunciado:
      'Criança de 18 meses de vida comparece à UBS pela primeira vez. A mãe relata que a criança nunca tomou nenhuma dose da vacina contra pneumococo. Ao exame: paciente hígido, sem comorbidades. De acordo com as normas de atualização de esquemas em atraso do Programa Nacional de Imunizações (PNI) para a vacina Pneumocócica 10-valente em crianças não vacinadas entre 12 meses e 4 anos e 11 meses de idade, qual é a conduta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar uma dose única da vacina Pneumocócica 10-valente conjugada, que é suficiente para conferir proteção adequada e finalizar o esquema nessa faixa etária.',
      },
      {
        id: 'B',
        texto:
          'Administrar obrigatoriamente 3 doses com intervalo de 30 dias entre elas, acrescidas de dois reforços semestrais.',
      },
      {
        id: 'C',
        texto:
          'Considerar a oportunidade perdida, visto que a vacina pneumocócica é formalmente contraindicada para qualquer criança acima de 12 meses.',
      },
      {
        id: 'D',
        texto:
          'Encaminhar para realização de biópsia óssea e teste genético antes de autorizar a vacina pneumocócica tardia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'De acordo com o Manual de Normas e Procedimentos para Vacinação do PNI/MS, quando uma criança entre 12 meses e 4 anos, 11 meses e 29 dias de idade não tiver comprovação prévia de nenhuma dose da vacina Pneumocócica 10-valente conjugada, ela deve receber uma DOSE ÚNICA da vacina. A maturação do sistema imune após o primeiro ano de vida confere uma capacidade de resposta humoral robusta a vacinas conjugadas, de modo que uma única dose gera níveis protetores de anticorpos e memória imunológica eficazes contra os sorotipos contidos na vacina.',
    comentariosAlternativas: {
      A: 'Correta. Crianças não vacinadas entre 12 meses e 4 anos e 11 meses recebem dose única da VPC10 no SUS para completar o esquema.',
      B: 'Incorreta. O esquema de múltiplas doses com reforço destina-se a lactentes que iniciam no primeiro ano de vida (< 12 meses).',
      C: 'Incorreta. A VPC10 pode ser administrada no PNI até os 4 anos, 11 meses e 29 dias.',
      D: 'Incorreta. Procedimento totalmente invasivo e sem respaldo médico.',
    },
  },
  {
    id: 'ped-imun-031',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Meningocócica C Conjugada - Imunidade de Rebanho e Eficácia de Mucosa',
    isRevisao: false,
    enunciado:
      'A introdução da vacina Meningocócica C conjugada aos 3 e 5 meses com reforço aos 12 meses no Programa Nacional de Imunizações (PNI) promoveu uma queda drástica na incidência de doença meningocócica não apenas entre as crianças vacinadas, mas também na população adulta não vacinada. Qual é o mecanismo biológico responsável por essa marcante proteção indireta ou "imunidade de rebanho" (imunidade coletiva)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A indução de anticorpos secretores e imunidade de mucosa na nasofaringe que elimina o estado de carreador orofaríngeo da Neisseria meningitidis nas crianças vacinadas, interrompendo a cadeia de transmissão respiratória do meningococo na comunidade.',
      },
      {
        id: 'B',
        texto:
          'A excreção urinária de anticorpos IgG liofilizados pela criança vacinada que esteriliza os lençóis freáticos e mananciais de água potável.',
      },
      {
        id: 'C',
        texto:
          'A mutação do meningococo tipo C em bactéria comensal saprófita desprovida de membrana externa e sem capacidade endotóxica.',
      },
      {
        id: 'D',
        texto:
          'A erradicação simultânea de todos os mosquitos flebotomíneos transmissores da bactéria nas habitações urbanas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diferentemente das antigas vacinas polissacarídicas puras (que apenas preveniam a doença invasiva individualmente, sem afetar o estado de portador), as vacinas MENINGOCÓCICAS CONJUGADAS a carreadores proteicos induzem imunidade celular vigorosa e produção de anticorpos funcionais de mucosa (IgA secretora e transudação de IgG na nasofaringe). Isso impede a aderência e a colonização da Neisseria meningitidis no epitélio nasofaríngeo, erradicando o estado de carreador orofaríngeo (portador assintomático). Ao reduzir os carreadores, interrompe-se a circulação da bactéria na população, protegendo indivíduos não vacinados por imunidade coletiva (efeito rebanho).',
    comentariosAlternativas: {
      A: 'Correta. As vacinas conjugadas reduzem a colonização nasofaríngea e eliminam carreadores assintomáticos, gerando efeito rebanho potente.',
      B: 'Incorreta. Anticorpos não são excretados na urina para purificar água potável.',
      C: 'Incorreta. O meningococo não perde sua membrana Gram-negativa nem se torna inofensivo; ele simplesmente deixa de ser transmitido.',
      D: 'Incorreta. A transmissão do meningococo é por gotículas respiratórias de pessoa a pessoa, sem qualquer vetor inseto.',
    },
  },
  {
    id: 'ped-imun-032',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Meningocócica ACWY na Adolescência - Racional Epidemiológico',
    isRevisao: false,
    enunciado:
      'Adolescente de 12 anos comparece ao posto de saúde acompanhado dos pais para revisão de caderneta vacinal. O profissional de enfermagem constata que o jovem recebeu as vacinas da infância adequadamente e oferece a vacina Meningocócica ACWY conjugada. A mãe indaga por que essa vacina está sendo recomendada exatamente nessa fase da adolescência se o filho já tomou vacina para meningite quando era bebê. Qual é a justificativa técnica oficial do Ministério da Saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Os adolescentes constituem a faixa etária com as maiores taxas de portadores assintomáticos (carreadores de nasofaringe) de Neisseria meningitidis na população; a vacinação dos 11 aos 14 anos com a vacina MenACWY amplia a proteção contra 4 sorogrupos e bloqueia a transmissão para lactentes e idosos.',
      },
      {
        id: 'B',
        texto:
          'A vacina tomada na infância perdeu todo o efeito e o adolescente contrairá meningite por falta de células de memória se não vacinar anualmente.',
      },
      {
        id: 'C',
        texto:
          'A vacina MenACWY é indicada apenas para adolescentes que praticam esportes aquáticos coletivos em piscinas aquecidas.',
      },
      {
        id: 'D',
        texto:
          'Trata-se de vacina experimental indicada para estimular a produção de hormônio do crescimento hipofisário na puberdade.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Programa Nacional de Imunizações (PNI) disponibiliza no calendário de rotina uma dose de reforço com a vacina Meningocócica ACWY conjugada para adolescentes de 11 a 14 anos de idade. O fundamento epidemiológico é duplo:\n1) Indivíduo: a imunidade conferida pela vacinação no primeiro ano de vida sofre queda progressiva de anticorpos bactericidas séricos com o passar dos anos, necessitando de um reforço nessa fase;\n2) Coletividade: os adolescentes e adultos jovens apresentam os maiores índices de taxas de colonização de nasofaringe (carreadores assintomáticos que chegam a 20-30% da população dessa idade), atuando como os principais reservatórios e transmissores do meningococo para os grupos vulneráveis (lactentes menores de 1 ano e idosos). A inclusão dos sorogrupos A, W e Y protege contra cepas graves emergentes (como o sorogrupo W de alta letalidade).',
    comentariosAlternativas: {
      A: 'Correta. Adolescentes são os maiores carreadores e transmissores comunitários; a MenACWY confere proteção individual ampliada e quebra a transmissão.',
      B: 'Incorreta. A vacina conjugada gera memória, mas títulos séricos declinam e novos sorogrupos (W e Y) requerem cobertura.',
      C: 'Incorreta. A transmissão se dá por via aérea/gotículas em ambientes fechados, não sendo restrita a piscinas.',
      D: 'Incorreta. A vacina é profilática contra infecção bacteriana e não tem nenhuma relação com hormônios do crescimento.',
    },
  },
  {
    id: 'ped-imun-033',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Meningite Meningocócica e CRIE - Deficiência de Complemento Terminal',
    isRevisao: false,
    enunciado:
      'Criança de 7 anos apresenta o segundo episódio de meningite bacteriana invasiva por Neisseria meningitidis em um intervalo de 18 meses. A investigação etiológica revela hipocomplementemia acentuada por Deficiência Congênita do Complexo de Ataque à Membrana do Complemento (frações C5 a C9). Além disso, está em avaliação para uso de Eculizumabe (anticorpo monoclonal anti-C5). De acordo com as diretrizes do CRIE, quais imunobiológicos especiais contra a doença meningocócica devem ser rigorosamente administrados a esse paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Vacina Meningocócica ACWY conjugada associada à Vacina Meningocócica B recombinante (MenB), visto que pacientes com deficiência terminal de complemento ou em uso de inibidores de C5 têm risco milhares de vezes maior de infecções recorrentes e fatais por qualquer sorogrupo de Neisseria.',
      },
      {
        id: 'B',
        texto:
          'Contraindicar formalmente todas as vacinas meningocócicas devido à incapacidade biológica total de sintetizar anticorpos.',
      },
      {
        id: 'C',
        texto:
          'Administrar apenas a vacina de Febre Tifoide e a vacina contra Cólera oral por via intradérmica.',
      },
      {
        id: 'D',
        texto:
          'Manter apenas a vacina BCG com reforço trimestral por via subcutânea.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Complexo de Ataque à Membrana (MAC / frações C5b-9 do sistema complemento) é a principal via efetora de lise bacteriana contra bactérias do gênero Neisseria (Neisseria meningitidis e Neisseria gonorrhoeae). Indivíduos com deficiência congênita dos fatores terminais do complemento (C5, C6, C7, C8, C9), properdina, fator D ou em uso terapêutico de Eculizumabe / Ravulizumabe (que bloqueiam a clivagem do C5) apresentam risco de 1.000 a 10.000 vezes maior de meningococcemia fulminante recorrente. O CRIE disponibiliza proteção integral para esses pacientes com a vacina Meningocócica ACWY conjugada (com reforços periódicos a cada 3 a 5 anos) combinada à vacina Meningocócica B recombinante (MenB).',
    comentariosAlternativas: {
      A: 'Correta. Pacientes com defeito do MAC (C5-C9) ou em uso de anti-C5 têm indicação imperativa de MenACWY e MenB no CRIE.',
      B: 'Incorreta. Esses pacientes produzem anticorpos normalmente; a vacinação previne desfechos fatais.',
      C: 'Incorreta. Febre tifoide e cólera não conferem nenhuma proteção contra infecções meningocócicas.',
      D: 'Incorreta. A BCG é contraindicada por via subcutânea e não tem papel na prevenção de meningite meningocócica.',
    },
  },
  {
    id: 'ped-imun-034',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Febre Amarela - Calendário Oficial e Dose de Reforço',
    isRevisao: false,
    enunciado:
      'O Ministério da Saúde do Brasil padronizou a recomendação da vacina contra a Febre Amarela para todo o país. Uma criança recebeu a primeira dose aos 9 meses de vida de forma adequada. Ao completar 4 anos de idade, os pais comparecem à UBS para atualização da caderneta. De acordo com o calendário do PNI, qual é a orientação correta a respeito da vacina da Febre Amarela aos 4 anos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar a dose de reforço da vacina contra Febre Amarela aos 4 anos de idade.',
      },
      {
        id: 'B',
        texto:
          'Não vacinar; a dose administrada aos 9 meses confere imunidade permanente e vitalícia, sendo expressamente proibido qualquer reforço.',
      },
      {
        id: 'C',
        texto:
          'Realizar sorologia prévia por ELISA; se os anticorpos forem positivos, adiar a vacina por 50 anos.',
      },
      {
        id: 'D',
        texto:
          'Substituir a vacina de febre amarela por três doses consecutivas da vacina contra influenza.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Embora a OMS recomende dose única de vacina de febre amarela para a população geral adulta, estudos imunológicos brasileiros demonstraram que crianças vacinadas precocemente (aos 9 meses de vida) sofrem uma queda rápida e expressiva dos títulos de anticorpos protetores antes dos 4 anos de idade (provavelmente pela interferência de anticorpos maternos residuais e imaturidade imunológica). Por esse motivo, o Ministério da Saúde estabeleceu no calendário oficial do PNI:\n- 1ª dose aos 9 meses de idade;\n- 1 dose de REFORÇO aos 4 anos de idade (podendo ser realizada até os 4 anos, 11 meses e 29 dias).\nPara pessoas que receberam a 1ª dose a partir dos 5 anos de idade, uma dose única é considerada suficiente para a vida inteira.',
    comentariosAlternativas: {
      A: 'Correta. Crianças que tomaram a 1ª dose aos 9 meses devem receber obrigatoriamente a dose de reforço aos 4 anos no PNI.',
      B: 'Incorreta. A dose dos 9 meses não confere imunidade vitalícia duradoura em lactentes, exigindo o reforço aos 4 anos.',
      C: 'Incorreta. Não se realiza triagem sorológica na rotina do posto de saúde.',
      D: 'Incorreta. Influenza não substitui a proteção essencial contra o vírus da febre amarela.',
    },
  },
  {
    id: 'ped-imun-035',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Febre Amarela - Lactação em Lactentes Menores de 6 Meses',
    isRevisao: false,
    enunciado:
      'Mulher de 28 anos, puérpera de 2 meses, amamenta seu filho exclusivamente ao seio materno. Ela procura o centro de saúde pois precisará viajar emergencialmente a trabalho para uma área rural com transmissão ativa e surto documentado de febre amarela silvestre. Ela nunca foi vacinada contra a doença. Qual é a conduta correta em relação à vacinação contra a febre amarela da mãe e a manutenção do aleitamento materno?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A vacina é contraindicada na lactação de bebês menores de 6 meses; caso a vacinação materna seja estritamente indispensável, a mãe deve ser vacinada e o aleitamento materno suspenso temporariamente por 10 dias (com ordenha e descarte do leite), devido ao risco comprovado de transmissão viral pelo leite e encefalite vacinal grave no lactente.',
      },
      {
        id: 'B',
        texto:
          'A mãe pode ser vacinada e manter a amamentação habitual sem interrupções, pois o vírus da vacina não passa para o leite materno.',
      },
      {
        id: 'C',
        texto:
          'A mãe e o bebê de 2 meses devem ser vacinados simultaneamente no mesmo dia para garantir imunização mútua.',
      },
      {
        id: 'D',
        texto:
          'A amamentação deve ser suspensa de forma permanente e irreversível, prescrevendo-se fórmula infantil até os 2 anos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A vacina de febre amarela (cepa 17D) contém vírus vivo atenuado com capacidade de replicação. Está bem documentado na literatura médica brasileira e mundial que o vírus vacinal pode ser eliminado ativamente no leite materno e infectar o lactente, provocando Doença Neurotrópica Associada à Vacina (meningoencefalite grave) em crianças menores de 6 meses (cujo sistema imune e barreira hematoencefálica são imaturos). Portanto:\n- Mulheres amamentando lactentes < 6 meses NÃO DEVEM receber a vacina de febre amarela;\n- Se a exposição for INEVITÁVEL (viagem imperativa para área de alto risco): a mãe deve ser vacinada e o aleitamento materno DEVE SER SUSPENSO POR 10 DIAS (período de viremia e excreção no leite), devendo a mulher ordenhar e descartar o leite nesse intervalo e oferecer leite humano pasteurizado de banco de leite ou fórmula infantil, retomando a amamentação no 11º dia.',
    comentariosAlternativas: {
      A: 'Correta. Vacinação em lactantes com bebês < 6 meses exige suspensão temporária da amamentação por 10 dias para evitar encefalite viral no bebê.',
      B: 'Incorreta. O vírus vacinal é comprovadamente excretado no leite materno e já causou óbitos de lactentes por meningoencefalite.',
      C: 'Incorreta. A vacina de febre amarela é contraindicada para bebês menores de 6 meses pelo alto risco de encefalite.',
      D: 'Incorreta. A suspensão é temporária (apenas 10 dias), não definitiva.',
    },
  },
  {
    id: 'ped-imun-036',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Febre Amarela - Alergia Grave ao Ovo de Galinha',
    isRevisao: false,
    enunciado:
      'Criança de 9 meses é levada à UBS para receber a vacina contra Febre Amarela. Durante o interrogatório pré-vacinal, a mãe relata que aos 7 meses a criança ingeriu uma colher de ovo cozido e apresentou, em menos de 10 minutos, anafilaxia grave comprovada (angioedema de glote com estridor respiratório, urticária generalizada e choque hipotensivo), necessitando de adrenalina intramuscular e internação em UTI. De acordo com as diretrizes do Ministério da Saúde e do CRIE, qual é a conduta para a vacinação de febre amarela dessa criança?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A presença de história comprovada de anafilaxia grave ao ovo de galinha é CONTRAINDICAÇÃO FORMAL para a vacina de Febre Amarela na UBS; a criança deve ser encaminhada ao CRIE para avaliação alérgica e, se a vacinação for imprescindível, realizar teste cutâneo ou dessensibilização em ambiente hospitalar com suporte de terapia intensiva.',
      },
      {
        id: 'B',
        texto:
          'Aplicar a vacina normalmente na UBS, pois a vacina da febre amarela é produzida em cultura de células de rim de macaco sem traços de ovo.',
      },
      {
        id: 'C',
        texto:
          'Administrar a vacina diluída em suco de laranja por via oral para prevenir o choque anafilático.',
      },
      {
        id: 'D',
        texto:
          'Aplicar apenas meia dose da vacina associada a dipirona tópica no braço.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A vacina de febre amarela é cultivada em ovos embrionados de galinha e contém quantidades detectáveis de proteínas do ovo (ovoalbumina). Por isso, histórico de ANAFILAXIA GRAVE ao ovo de galinha (com choque, broncoespasmo ou angioedema) contraindica a vacinação rotineira em salas de vacina convencionais da atenção básica. Se a criança residir em área de altíssimo risco epidemiológico, ela deve ser avaliada no CRIE/Serviço de Alergia Pediátrica para realização de testes cutâneos (prick test com a vacina diluída) e aplicação sob protocolo de dessensibilização fracionada em ambiente hospitalar com vaga em UTI. Reações leves a ovo (apenas urticária discreta) permitem a vacinação sob observação por 30 minutos.',
    comentariosAlternativas: {
      A: 'Correta. Anafilaxia grave prévia a ovo contraindica aplicação na UBS comum e exige avaliação e protocolo especial no CRIE/hospital.',
      B: 'Incorreta. A vacina é produzida em embrião de galinha e contém traços significativos de ovoalbumina.',
      C: 'Incorreta. A vacina é estritamente injetável (subcutânea); via oral é ineficaz e perigosa.',
      D: 'Incorreta. Fracionamento empírico de dose não elimina o risco de anafilaxia mediada por IgE.',
    },
  },
  {
    id: 'ped-imun-037',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Febre Amarela - Doença Viscerotrópica Aguda (YEL-AVD)',
    isRevisao: false,
    enunciado:
      'Um dos eventos adversos mais graves e temidos da vacina contra a Febre Amarela é a Doença Viscerotrópica Aguda Associada à Vacina (YEL-AVD / DVA). A respeito dessa complicação vacinal rara, assinale a alternativa que descreve corretamente sua fisiopatologia e quadro clínico:',
    alternativas: [
      {
        id: 'A',
        texto:
          'É causada pela proliferação e disseminação descontrolada do vírus vacinal atenuado por múltiplos órgãos, mimetizando a febre amarela silvestre clássica com falência hepática fulminante, necrose centrolobular, coagulopatia de consumo, insuficiência renal e letalidade superior a 50%.',
      },
      {
        id: 'B',
        texto:
          'Trata-se de uma reação alérgica tipo IV cutânea benigna que desaparece espontaneamente com o uso de hidratantes tópicos.',
      },
      {
        id: 'C',
        texto:
          'Ocorre exclusivamente em crianças vacinadas com mais de 3 doses consecutivas de vacina inativada.',
      },
      {
        id: 'D',
        texto:
          'É provocada pela contaminação bacteriana da seringa no momento da injeção por Staphylococcus aureus.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Doença Viscerotrópica Aguda Associada à Vacina contra Febre Amarela (YEL-AVD) é uma complicação rara, mas de extrema gravidade (letalidade > 50-60%), que ocorre quase que exclusivamente após a primeira dose da vacina (primovacinados), habitualmente entre o 2º e o 7º dia pós-aplicação. Por mecanismos genéticos e imunes individuais do hospedeiro, o vírus vacinal 17D escapa do controle imune e replica maciçamente nas vísceras, causando um quadro clinicamente e patologicamente indistinguível da febre amarela silvestre "selvagem": febre alta, icterícia colestática grave, hemorragias digestivas maciças por CIVD, necrose hepática centrolobular aguda e choque distributivo/hipovolêmico. Fatores de risco conhecidos incluem timoma, miastenia gravis, doenças do timo e idade avançada (> 60 anos).',
    comentariosAlternativas: {
      A: 'Correta. YEL-AVD é a replicação visceral do vírus vacinal que causa insuficiência hepática e falência orgânica com altíssima letalidade.',
      B: 'Incorreta. É uma emergência médica de altíssima mortalidade, não uma reação cutânea branda.',
      C: 'Incorreta. Ocorre tipicamente em primovacinados (1ª dose) de vacina atenuada viva, e não de vacina inativada.',
      D: 'Incorreta. Trata-se de doença causada pelo próprio vírus vacinal atenuado e não por contaminação piogênica.',
    },
  },
  {
    id: 'ped-imun-038',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Febre Amarela e Tríplice Viral - Intervalo Obrigatório em Menores de 2 Anos',
    isRevisao: false,
    enunciado:
      'Lactente de 11 meses de vida não tomou a vacina contra Febre Amarela aos 9 meses por falta de imunobiológico no município na época. A mãe comparece hoje para receber a vacina da febre amarela e questiona se no próximo mês (quando a criança completar 12 meses) ela poderá tomar a vacina Tríplice Viral normalmente. O pediatra confirma que hoje será aplicada a vacina da Febre Amarela. Qual deve ser a orientação quanto à data de aplicação da vacina Tríplice Viral (SCR)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A vacina Tríplice Viral deve ser agendada para ser administrada respeitando um intervalo mínimo de 30 dias após a dose da Febre Amarela de hoje, para prevenir interferência imunológica com redução da resposta de anticorpos.',
      },
      {
        id: 'B',
        texto:
          'A vacina Tríplice Viral pode ser aplicada amanhã de manhã sem qualquer intervalo, pois as vacinas de vírus atenuados se potencializam.',
      },
      {
        id: 'C',
        texto:
          'A Tríplice Viral deve ser cancelada de forma permanente para qualquer criança que tenha tomado vacina de febre amarela no primeiro ano de vida.',
      },
      {
        id: 'D',
        texto:
          'Deve-se aguardar um intervalo de exatamente 12 meses entre a febre amarela e a tríplice viral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A regra de ouro da coadministração de vacinas de vírus vivos atenuados injetáveis em crianças menores de 2 anos de idade determina que:\n- Quando duas vacinas parenterais de vírus vivos atenuados (Febre Amarela e Tríplice Viral) NÃO forem administradas no mesmo dia, DEVE-SE RESPEITAR UM INTERVALO MÍNIMO DE 30 DIAS (mínimo absoluto de 15 dias) entre elas;\n- A administração em intervalos curtos (ex.: 5 a 10 dias) induz uma onda de interferon e citocinas inatas que neutraliza a replicação do segundo vírus vacinal antes que ele consiga montar uma resposta imune adaptativa humoral protetora, resultando em falha vacinal significativa (especialmente para o componente da rubéola e da febre amarela). Como o bebê tomou febre amarela com 11 meses, a tríplice viral deve ser marcada para pelo menos 30 dias depois (com 12 meses).',
    comentariosAlternativas: {
      A: 'Correta. Intervalo mínimo obrigatório de 30 dias entre duas vacinas de vírus atenuados parenterais não aplicadas no mesmo dia.',
      B: 'Incorreta. A aplicação com 24-48 horas de intervalo gera interferência por interferon com falha de resposta sorológica da segunda vacina.',
      C: 'Incorreta. A Tríplice Viral é essencial contra sarampo e deve ser aplicada normalmente após o intervalo de 30 dias.',
      D: 'Incorreta. O intervalo preconizado é de 30 dias, e não de 1 ano.',
    },
  },
  {
    id: 'ped-imun-039',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Tríplice Viral (SCR) - Calendário aos 12 Meses e Componentes',
    isRevisao: false,
    enunciado:
      'Lactente de 1 ano completo (12 meses) comparece à sala de vacinação da UBS para receber os imunobiológicos de rotina preconizados pelo Ministério da Saúde para essa idade. Quais são as três vacinas que compõem o calendário básico oficial do PNI aos 12 meses de vida em crianças hígidas?',
    alternativas: [
      {
        id: 'A',
        texto:
          '1ª dose da Tríplice Viral (Sarampo, Caxumba e Rubéola), dose de reforço da Pneumocócica 10-valente e dose de reforço da Meningocócica C conjugada.',
      },
      {
        id: 'B',
        texto:
          '1ª dose da Pentavalente, dose de reforço da VIP e vacina oral de rotavírus.',
      },
      {
        id: 'C',
        texto:
          'Vacina de Febre Amarela, Vacina Hepatite A e vacina contra papilomavírus humano (HPV).',
      },
      {
        id: 'D',
        texto:
          'Vacina DTP celular isolada, vacina BCG e vacina contra varicela monovalente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'No calendário oficial de vacinação da criança do Ministério da Saúde (PNI), o marco de 1 ano de vida (12 meses) é contemplado rigorosamente com 3 vacinas injetáveis:\n1) Tríplice Viral - SCR (1ª dose contra Sarampo, Caxumba e Rubéola - vírus vivos atenuados por via subcutânea);\n2) Pneumocócica 10-valente conjugada (dose de reforço do esquema 2 + 1 - via intramuscular);\n3) Meningocócica C conjugada (dose de reforço do esquema 2 + 1 - via intramuscular).\nA administração simultânea dessas 3 vacinas aos 12 meses em membros anatômicos distintos é perfeitamente segura e rotineira.',
    comentariosAlternativas: {
      A: 'Correta. Aos 12 meses o PNI preconiza Tríplice Viral (1ª dose) + reforços de Pneumo 10 e Meningo C.',
      B: 'Incorreta. Pentavalente e rotavírus são vacinas dos primeiros meses de vida; rotavírus é proibido aos 12 meses.',
      C: 'Incorreta. Hepatite A é aplicada aos 15 meses e HPV na adolescência (dos 9 aos 14 anos).',
      D: 'Incorreta. DTP e varicela entram no calendário a partir dos 15 meses.',
    },
  },
  {
    id: 'ped-imun-040',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Tríplice Viral (SCR) - Evento Adverso Febril e Exantemático Tardio',
    isRevisao: false,
    enunciado:
      'Lactente de 12 meses recebeu a primeira dose da vacina Tríplice Viral (SCR) há exatamente 8 dias. A mãe comparece aflita à UBS referindo que hoje a criança apresentou febre de 38,4 °C e surgimento de pequenas máculas rosadas discretas no tronco e pescoço, sem tosse, coriza, prostração ou conjuntivite. A criança está com apetite preservado e brincando ativamente. Diante do quadro clínico e da história vacinal, qual é o diagnóstico mais provável e a orientação a ser fornecida?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de evento adverso pós-vacinal esperado da Tríplice Viral (doença pós-vacinal branda autolimitada), decorrente da replicação do vírus vacinal atenuado do sarampo que ocorre classicamente entre o 5º e o 12º dia após a injeção; tranquilizar a mãe e orientar sintomáticos, pois o quadro regride espontaneamente em 2 a 3 dias e não é transmissível.',
      },
      {
        id: 'B',
        texto:
          'Trata-se de choque anafilático tardio com falência de órgãos; internar imediatamente em UTI e prescrever adrenalina venosa.',
      },
      {
        id: 'C',
        texto:
          'Trata-se de sarampo selvagem adquirido na sala de vacina; notificar e prescrever aciclovir oral em dose quadruplicada.',
      },
      {
        id: 'D',
        texto:
          'A criança desenvolveu meningococcemia bacteriana secundária; isolar e prescrever ceftriaxona por 14 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Por conter vírus vivos atenuados (especialmente a cepa atenuada do sarampo Schwarz ou Edmonston-Zagreb), a vacina Tríplice Viral (SCR) produz uma replicação viral benigna e subclínica essencial para a indução de resposta celular e humoral protetora. Entre o 5º e o 12º dia após a vacinação (pico em torno do 7º ao 10º dia), cerca de 5% a 15% das crianças primovacinadas podem apresentar febre moderada (38 a 39 °C) e cerca de 5% desenvolvem um exantema maculopapular morbiliforme discreto e fugaz. O estado geral é excelente e não há as manifestações catarrais graves do sarampo natural (não há conjuntivite purulenta nem tosse exaustiva). O quadro é benigno, dura de 1 a 3 dias, não transmite o vírus para outros contactantes e requer apenas manejo térmico sintomático.',
    comentariosAlternativas: {
      A: 'Correta. Evento adverso viral atenuado clássico aos 5-12 dias pós-SCR; curso benigno, autolimitado e sem risco de contágio.',
      B: 'Incorreta. Anafilaxia é imediata (minutos a poucas horas pós-injeção) e cursa com colapso respiratório/cardiovascular, não febre isolada no 8º dia.',
      C: 'Incorreta. Não é sarampo selvagem; aciclovir não tem atividade contra o vírus do sarampo (paramixovírus).',
      D: 'Incorreta. Não há petéquias, choque ou toxemia de sepse meningocócica.',
    },
  },
  {
    id: 'ped-imun-041',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Tríplice Viral e Alergia ao Ovo de Galinha - Falso Dogma',
    isRevisao: false,
    enunciado:
      'Lactente de 12 meses é levado à consulta pré-vacinal na UBS. A mãe relata que a criança apresentou urticária perioral e placas eritematosas após comer omelete aos 10 meses, com diagnóstico clínico de alergia à proteína do ovo de galinha mediada por IgE. A equipe da sala de vacina questiona se a vacina Tríplice Viral (SCR) pode ser aplicada. Qual é a recomendação oficial do Programa Nacional de Imunizações (PNI) e da Sociedade Brasileira de Pediatria (SBP) a esse respeito?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A vacina Tríplice Viral PODE e DEVE ser administrada normalmente na Unidade Básica de Saúde; a alergia ao ovo (mesmo moderada a grave) NÃO contraindica a vacina Tríplice Viral, pois os vírus do sarampo e caxumba são cultivados em culturas de fibroblastos de embrião de galinha e contêm apenas quantidades residuais insignificantes (picogramas) de ovoalbumina.',
      },
      {
        id: 'B',
        texto:
          'A vacina Tríplice Viral é formalmente contraindicada para qualquer criança com qualquer tipo de alergia alimentar.',
      },
      {
        id: 'C',
        texto:
          'A vacina só pode ser aplicada após a criança ser submetida a teste de provocação oral com clara de ovo crua no posto de saúde.',
      },
      {
        id: 'D',
        texto:
          'Deve-se aplicar apenas o componente da rubéola e suspender para sempre a vacinação contra o sarampo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Existe uma confusão histórica muito cobrada em provas de residência médica entre a vacina da Febre Amarela e a vacina Tríplice Viral (SCR):\n- A vacina de Febre Amarela é cultivada diretamente no líquido alantoideano de ovos embrionados de galinha, contendo teor proteico aviário suficiente para contraindicar o uso em anafilaxia grave a ovo em UBS comum;\n- A vacina Tríplice Viral (SCR), por outro lado, tem seus vírus do sarampo e da caxumba cultivados em culturas de FIBROBLASTOS DE EMBRIÃO DE GALINHA (e a rubéola em células diploides humanas). A quantidade de ovoalbumina presente é desprezível e indetectável (da ordem de picogramas), sendo incapaz de disparar degranulação de mastócitos. Portanto, o Ministério da Saúde, SBP, AAP e CDC afirmam categoricamente que CRIANÇAS COM ALERGIA AO OVO (inclusive anafilaxia) PODEM E DEVEM RECEBER A TRÍPLICE VIRAL na rede básica habitual, sem necessidade de testes cutâneos prévios ou dessensibilização.',
    comentariosAlternativas: {
      A: 'Correta. Alergia a ovo NÃO contraindica a vacina Tríplice Viral (vírus propagados em fibroblastos de embrião de galinha).',
      B: 'Incorreta. Alergia alimentar comum não contraindica imunização de rotina.',
      C: 'Incorreta. Teste de provocação alimentar oral é desnecessário e perigoso se feito fora de centro especializado.',
      D: 'Incorreta. Privar a criança do componente sarampo representaria gravíssimo risco epidemiológico.',
    },
  },
  {
    id: 'ped-imun-042',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Tríplice Viral - Profilaxia de Bloqueio Pós-Exposição ao Sarampo',
    isRevisao: false,
    enunciado:
      'Lactente de 7 meses de vida, saudável, reside na mesma casa que seu primo de 5 anos que foi diagnosticado clinicamente e laboratorialmente com Sarampo em fase catarral/exantemática há 24 horas. O lactente nunca recebeu nenhuma vacina contra sarampo. De acordo com as diretrizes de controle de surtos e bloqueio vacinal do Ministério da Saúde, qual é a conduta profilática pós-exposição imediata para esse lactente de 7 meses?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar a vacina Tríplice Viral (SCR) de bloqueio imediatamente (em até 72 horas do contato); essa dose é denominada "dose zero" e NÃO substitui nem anula a dose do calendário oficial de rotina agendada para os 12 meses de vida.',
      },
      {
        id: 'B',
        texto:
          'Administrar a vacina Tríplice Viral hoje e considerar o esquema vacinal contra o sarampo definitivamente encerrado e completo para a vida inteira.',
      },
      {
        id: 'C',
        texto:
          'A vacina Tríplice Viral é proibida para menores de 1 ano em qualquer hipótese, devendo-se prescrever apenas vitamina C oral.',
      },
      {
        id: 'D',
        texto:
          'Aguardar 14 dias para verificar se surgem manchas de Koplik antes de indicar qualquer imunobiológico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Em situações de surto comunitário de sarampo ou contato intradomiciliar com caso confirmado de sarampo, o Ministério da Saúde estabelece as regras de profilaxia pós-exposição:\n- Contatos suscetíveis imunocompetentes com idade ≥ 6 meses têm indicação de VACINAÇÃO DE BLOQUEIO com a vacina Tríplice Viral em até 72 HORAS após a exposição ao caso índice;\n- No lactente de 7 meses, a dose administrada é classificada como "DOSE ZERO". Como os anticorpos maternos residuais ainda podem circular e neutralizar parcialmente o vírus vacinal nessa faixa etária, a dose zero confere proteção imediata contra o contágio agudo, mas NÃO É COMPUTADA no esquema regular do PNI. Assim, a criança DEVERÁ receber normalmente a 1ª dose oficial da Tríplice Viral aos 12 meses (respeitando o intervalo mínimo de 30 dias) e o reforço aos 15 meses.',
    comentariosAlternativas: {
      A: 'Correta. Vacina de bloqueio até 72h em maiores de 6 meses; é a "dose zero" e não anula a dose regular de rotina dos 12 meses.',
      B: 'Incorreta. A dose administrada aos 7 meses não substitui o esquema oficial de 12 e 15 meses.',
      C: 'Incorreta. A vacina pode ser feita a partir dos 6 meses em situações de surto e bloqueio pós-exposição.',
      D: 'Incorreta. Esperar o aparecimento de sintomas perde a janela oportuna de bloqueio de 72 horas.',
    },
  },
  {
    id: 'ped-imun-043',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Tríplice Viral - Contraindicação na Gestação',
    isRevisao: false,
    enunciado:
      'Mulher de 22 anos comparece ao ambulatório de ginecologia e obstetrícia com teste imunológico de gravidez positivo (beta-hCG reagente) e ultrassonografia confirmando gestação tópica de 6 semanas. Durante a avaliação vacinal pré-natal, constata-se que a paciente nunca recebeu nenhuma dose da vacina Tríplice Viral (SCR). A respeito da indicação da vacina Tríplice Viral durante o período gestacional, qual é a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A vacina Tríplice Viral é FORMALMENTE CONTRAINDICADA na gestação por conter vírus vivos atenuados (especialmente pelo risco teórico teratogênico da rubéola); a gestante deve ser vacinada imediatamente no puerpério imediato (pós-parto).',
      },
      {
        id: 'B',
        texto:
          'A vacina deve ser aplicada de imediato por via intravenosa no primeiro trimestre para garantir anticorpos transplacentários precoces.',
      },
      {
        id: 'C',
        texto:
          'A vacina está liberada em qualquer idade gestacional desde que seja associada a suplementação de sulfato ferroso.',
      },
      {
        id: 'D',
        texto:
          'Caso a vacina tenha sido administrada inadvertidamente nas primeiras semanas de gestação, a interrupção da gravidez é mandatória por protocolo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A vacina Tríplice Viral (SCR) é uma vacina de VÍRUS VIVOS ATENUADOS e, como regra geral de biossegurança imunológica, é expressamente CONTRAINDICADA DURANTE TODA A GESTAÇÃO. O maior temor biológico fundamenta-se no risco teórico de o vírus vacinal atenuado da rubéola atravessar a barreira transplacentária e causar infecção congênita ou Síndrome da Rubéola Congênita (SRC). A conduta preconizada é postergar a vacinação para o puerpério imediato (logo após o parto ou antes da alta da maternidade), período em que a vacina é perfeitamente segura e compatível com a amamentação.\nImportante: se a vacina for aplicada inadvertidamente em uma mulher grávida ou que engravidou em até 30 dias após a dose, a paciente deve ser tranquilizada — estudos de vigilância com milhares de mulheres nunca registraram nenhum caso de Síndrome da Rubéola Congênita por vírus vacinal atenuado, sendo a vacinação inadvertida MOTIVO TOTALMENTE INSUFICIENTE para indicação de interrupção da gestação.',
    comentariosAlternativas: {
      A: 'Correta. Contraindicada na gestação por ser de vírus vivos; deve ser agendada para o pós-parto imediato.',
      B: 'Incorreta. A aplicação em gestantes é formalmente contraindicada.',
      C: 'Incorreta. A contraindicação independe do trimestre gestacional.',
      D: 'Incorreta. A vacinação inadvertida não justifica a interrupção da gravidez, pois o risco teratogênico real comprovou-se negligenciável.',
    },
  },
  {
    id: 'ped-imun-044',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Tetraviral (SCRV) aos 15 Meses - Pré-requisito de Dose Prévia',
    isRevisao: false,
    enunciado:
      'Criança de 15 meses de vida comparece à UBS para receber as vacinas dos 15 meses. Ao inspecionar o cartão de vacinas, o enfermeiro constata que a criança recebeu aos 12 meses a 1ª dose da vacina Tríplice Viral (SCR), a dose de reforço da Pneumocócica 10 e a dose de reforço da Meningocócica C. De acordo com as diretrizes do Programa Nacional de Imunizações (PNI), qual vacina deve ser utilizada aos 15 meses para a imunização contra o sarampo, caxumba, rubéola e varicela?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Vacina Tetraviral (SCRV - Sarampo, Caxumba, Rubéola e Varicela atenuadas), que funciona como a 2ª dose contra sarampo, caxumba e rubéola e a 1ª dose contra a varicela.',
      },
      {
        id: 'B',
        texto:
          'Vacina Pentavalente acelular associada à vacina de rotavírus oral.',
      },
      {
        id: 'C',
        texto:
          'Apenas a vacina contra varicela monovalente, devendo a tríplice viral ser repetida somente aos 10 anos de idade.',
      },
      {
        id: 'D',
        texto:
          'Vacina BCG reforço no braço esquerdo associada à vacina contra cólera.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Aos 15 meses de idade, a criança que já recebeu a 1ª dose da vacina Tríplice Viral (SCR) aos 12 meses tem indicação de receber a Vacina Tetraviral (SCRV - Sarampo, Caxumba, Rubéola e Varicela). A Tetraviral atua simultaneamente como:\n1) A 2ª dose do esquema contra sarampo, caxumba e rubéola (garantindo índices de soroconversão superiores a 99%);\n2) A 1ª dose do esquema contra a varicela (catapora).\nRegra técnica indispensável: a vacina Tetraviral SÓ pode ser aplicada se a criança tiver recebido PREVIAMENTE UMA DOSE de Tríplice Viral aos 12 meses com intervalo mínimo de 30 dias. Se a criança nunca tomou a Tríplice Viral, aplica-se a Tríplice Viral (SCR) e a vacina Varicela monovalente em injeções separadas, reduzindo o risco de convulsão febril.',
    comentariosAlternativas: {
      A: 'Correta. Aos 15 meses aplica-se a Tetraviral (SCRV), completando a 2ª dose da SCR e a 1ª dose da varicela.',
      B: 'Incorreta. Rotavírus é contraindicado nessa idade e a pentavalente primária é dos primeiros meses.',
      C: 'Incorreta. A segunda dose de sarampo/caxumba/rubéola é obrigatória aos 15 meses.',
      D: 'Incorreta. A BCG não tem reforço e cólera não integra o calendário infantil de rotina.',
    },
  },
  {
    id: 'ped-imun-045',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Varicela no PNI - Esquema de 2 Doses e Prevenção de Complicações',
    isRevisao: false,
    enunciado:
      'A vacinação contra a Varicela (catapora) foi progressivamente ampliada no Programa Nacional de Imunizações (PNI) do Ministério da Saúde. Uma mãe leva seu filho de 4 anos à unidade de saúde para a rotina de vacinas pré-escolares. O menino recebeu a vacina Tetraviral aos 15 meses de vida. Qual é o esquema recomendado pelo PNI para a vacina contra varicela aos 4 anos de idade e qual o seu objetivo?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar a 2ª dose da vacina contra Varicela (vacina monovalente varicela aos 4 anos), visando consolidar a proteção individual, prevenir surtos escolares e reduzir drasticamente complicações graves como infecções bacterianas invasivas e hospitalizações.',
      },
      {
        id: 'B',
        texto:
          'Contraindicar a vacina, pois a dose dos 15 meses garante imunidade estéril permanente, sendo a 2ª dose contraindicada pela OMS.',
      },
      {
        id: 'C',
        texto:
          'Administrar a vacina contra varicela apenas se a criança já tiver apresentado catapora clínica comprovada anteriormente.',
      },
      {
        id: 'D',
        texto:
          'Substituir a vacina de varicela por uma dose oral de sulfametoxazol profilático diário por 6 meses.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O esquema de imunização contra a Varicela no PNI/MS é composto por 2 doses:\n- 1ª dose: aos 15 meses de vida, administrada como componente da vacina Tetraviral (SCRV) ou Tríplice Viral + Varicela monovalente;\n- 2ª dose: aos 4 anos de idade (podendo ser realizada até os 6 anos, 11 meses e 29 dias), administrada como vacina Varicela monovalente isolada.\nA adoção do esquema com 2 doses foi um marco sanitário decisivo: enquanto uma única dose previne cerca de 80-85% dos casos de varicela em geral e quase 100% dos casos graves, a introdução da 2ª dose eleva a eficácia contra qualquer infecção para mais de 95-98%, prevenindo surtos de "varicela atenuada/breakthrough" em creches e escolas, além de erradicar complicações fatais como choque séptico estreptocócico e encefalite pós-varicela.',
    comentariosAlternativas: {
      A: 'Correta. Esquema oficial do PNI: 1ª dose aos 15 meses (Tetraviral) e 2ª dose aos 4 anos (Varicela monovalente).',
      B: 'Incorreta. A segunda dose é altamente necessária para evitar casos de falha vacinal primária e quebras de proteção escolar.',
      C: 'Incorreta. Quem já teve varicela documentada não necessita da vacina; a indicação prioritária é para quem nunca teve a doença.',
      D: 'Incorreta. Antibióticos profiláticos não substituem a vacina de varicela.',
    },
  },
  {
    id: 'ped-imun-046',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Tetraviral e Risco de Convulsão Febril na Primeira Dose',
    isRevisao: false,
    enunciado:
      'Estudos pós-comercialização e diretrizes do CDC e da SBP demonstram que a administração da vacina combinada Tetraviral (SCRV) como PRIMEIRA DOSE de imunização contra a varicela em crianças de 12 a 23 meses associa-se a um discreto aumento no risco de um evento adverso específico entre o 7º e o 10º dia pós-vacina, quando comparada à administração simultânea da Tríplice Viral (SCR) e da Varicela em injeções separadas no mesmo dia. Qual é esse evento adverso transitório?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Convulsão febril simples (aumento de aproximadamente 1 caso adicional para cada 2.300 a 3.000 crianças vacinadas).',
      },
      {
        id: 'B',
        texto:
          'Paralisia flácida aguda permanente por mielite transversa necrosante.',
      },
      {
        id: 'C',
        texto:
          'Síndrome hemolítico-urêmica com trombocitopenia refratária.',
      },
      {
        id: 'D',
        texto:
          'Insuficiência adrenal primária autoimune por anticorpos anti-21-hidroxilase.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Grandes estudos epidemiológicos comprovaram que a formulação combinada Tetraviral (SCRV), quando administrada como a primeira dose de vacina contra a varicela e sarampo, induz uma frequência discretamente maior de febre alta (≥ 39 °C) entre o 7º e o 10º dia pós-aplicação em relação à aplicação da Tríplice Viral e Varicela monovalente em seringas separadas. Essa hipertermia mais intensa associa-se a um pequeno aumento relativo no risco de CONVULSÃO FEBRIL simples (cerca de 1 caso extra a cada 2.300 a 3.000 vacinados). Por essa razão, o PNI optou por manter a Tríplice Viral isolada aos 12 meses e aplicar a Tetraviral somente aos 15 meses (quando a criança já possui anticorpos prévios contra o sarampo, atenuando a febre e o risco de convulsão).',
    comentariosAlternativas: {
      A: 'Correta. Discreto aumento de convulsão febril entre o 7º e 10º dia quando a Tetraviral é usada na primovacinação.',
      B: 'Incorreta. A Tetraviral não causa paralisia flácida aguda permanente.',
      C: 'Incorreta. SHU é complicação de infecções intestinais por E. coli produtora de toxina Shiga (STEC), sem relação vacinal.',
      D: 'Incorreta. Insuficiência adrenal primária não é evento adverso da Tetraviral.',
    },
  },
  {
    id: 'ped-imun-047',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Vacina Varicela - Lesões Cutâneas Pós-Vacinais Benignas',
    isRevisao: false,
    enunciado:
      'Criança de 15 meses recebeu a vacina Tetraviral (SCRV) há 14 dias. A mãe retorna ao pediatra relatando que notou o aparecimento de 5 pequenas lesões pápulo-vesiculares isoladas com conteúdo claro no abdome e dorso da criança, sem febre, prostração ou prurido intenso. O exame físico confirma vesículas tênues esparsas sobre base eritematosa mínima. A respeito desse quadro dermatológico pós-vacinal, assinale a conduta médica correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de erupção vesicular pós-vacinal benigna (doença vacinal leve), que acomete de 3 a 5% dos vacinados entre 1 e 4 semanas após a injeção por replicação do vírus vacinal atenuado Oka; orientar apenas higiene local, pois o quadro é autolimitado, raramente transmite e não requer aciclovir.',
      },
      {
        id: 'B',
        texto:
          'Trata-se de varicela hemorrágica maligna resistente; prescrever aciclovir venoso em regime de internação hospitalar imediata.',
      },
      {
        id: 'C',
        texto:
          'Indicar isolamento total em quarto de pressão negativa por 60 dias e realizar cauterização química das lesões com nitrato de prata.',
      },
      {
        id: 'D',
        texto:
          'Prescrever cefalexina em alta dose associada a corticoterapia oral para bloquear a disseminação bacteriana.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Cerca de 3% a 5% das crianças imunizadas com a vacina contra a Varicela (cepa atenuada Oka) desenvolvem uma erupção cutânea pápulo-vesicular branda (habitualmente com menos de 10 a 20 lesões) localizada próxima ao sítio de injeção ou esparsa no tronco, surgindo entre 1 e 4 semanas após a aplicação. As lesões são muito discretas, pouco dolorosas e raramente confluem. A transmissão do vírus vacinal a contactantes é extremamente rara (só ocorrendo se houver contato direto com o fluido vesicular ativo por indivíduo gravemente imunodeprimido). A conduta é estritamente expectante e de suporte higiênico, com involução espontânea em poucos dias, dispensando antivirais orais ou sistêmicos.',
    comentariosAlternativas: {
      A: 'Correta. Erupção vesicular atenuada esperada em 3-5% dos vacinados; autolimitada, benigna e sem indicação de antiviral.',
      B: 'Incorreta. Não há toxemia, febre ou sinais de sangramento que caracterizem varicela hemorrágica.',
      C: 'Incorreta. Conduta desproporcional; não há necessidade de isolamento especial nem cauterização de vesículas.',
      D: 'Incorreta. Trata-se de evento viral vacinal atenuado, sendo contraindicados antibióticos e corticoides.',
    },
  },
  {
    id: 'ped-imun-048',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Vacinas de Vírus Vivos e Uso Prévio de Imunoglobulinas / Sangue',
    isRevisao: false,
    enunciado:
      'Lactente de 11 meses de vida foi tratado com Imunoglobulina Humana Intravenosa (IGIV) na dose de 2 g/kg há 2 meses devido a diagnóstico de Doença de Kawasaki, evoluindo com excelente resposta e resolução completa. A criança completa 12 meses e a mãe a leva para receber as vacinas dos 12 meses (Tríplice Viral, Pneumo 10 e Meningo C). De acordo com as normas imunológicas do Ministério da Saúde sobre a interferência de hemoderivados e imunoglobulinas em vacinas de vírus atenuados, qual é a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar normalmente as vacinas inativadas (Pneumocócica 10 e Meningocócica C); porém ADIAR a vacina Tríplice Viral (SCR) até completar 11 meses após a infusão da IGIV em dose alta, pois os anticorpos transferidos passivamente neutralizam o vírus vacinal e impedem a imunização ativa.',
      },
      {
        id: 'B',
        texto:
          'Aplicar todas as vacinas normalmente hoje, inclusive a Tríplice Viral, pois a imunoglobulina potencializa o efeito das vacinas de vírus vivos.',
      },
      {
        id: 'C',
        texto:
          'Suspender definitivamente todas as vacinas vivas e inativadas para o resto da vida da criança.',
      },
      {
        id: 'D',
        texto:
          'Administrar a vacina Tríplice Viral com o triplo da dose subcutânea para sobrepujar a imunoglobulina sérica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A administração prévia de sangue total, concentrado de hemácias ou Imunoglobulina Humana Intravenosa (IGIV) transfere títulos maciços de anticorpos IgG doadores que persistem na circulação do paciente por semanas a meses. Esses anticorpos circulantes neutralizam os vírus vacinais atenuados das vacinas parenterais (Tríplice Viral e Varicela), impedindo a replicação viral necessária para a indução de resposta imune própria do hospedeiro (falha vacinal secundária). Por isso, as tabelas oficiais do PNI/MS e CDC preconizam intervalos de adiamento para vacinas de vírus vivos parenterais que variam de 3 a 11 meses (para a dose de 2 g/kg de IGIV do Kawasaki, o intervalo exigido é de 11 MESES). As vacinas inativadas (como Pneumo 10 e Meningo C) NÃO sofrem essa interferência e podem ser aplicadas nas datas habituais.',
    comentariosAlternativas: {
      A: 'Correta. Vacinas inativadas são mantidas normalmente; Tríplice Viral adiada por 11 meses após dose de 2 g/kg de IGIV.',
      B: 'Incorreta. A aplicação precoce resultaria em neutralização imediata dos vírus vacinais pelos anticorpos exógenos.',
      C: 'Incorreta. O adiamento é temporário e as vacinas inativadas são permitidas sem restrições.',
      D: 'Incorreta. Não se aumenta a dose de vacinas para compensar interferência de hemoderivados.',
    },
  },
  {
    id: 'ped-imun-049',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Vacinação em Contactante Domiciliar de Gestante',
    isRevisao: false,
    enunciado:
      'Lactente de 12 meses comparece à UBS para receber a vacina Tríplice Viral (SCR). Durante o atendimento, a mãe informa que está grávida de 8 semanas do segundo filho e expressa grande receio, pois ouviu de vizinhos que "crianças que tomam vacina de vírus vivo podem transmitir o vírus da rubéola para a mãe grávida e fazer o bebê nascer com malformações". Diante dessa dúvida comum na atenção primária, qual é a orientação médica correta baseada nas evidências científicas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tranquilizar a mãe e vacinar a criança imediatamente com a Tríplice Viral; as cepas vacinais atenuadas não são transmissíveis a contactantes suscetíveis e a vacinação do filho protege indiretamente a gestante ao reduzir o risco de introdução do sarampo e rubéola selvagens no domicílio.',
      },
      {
        id: 'B',
        texto:
          'A mãe está absolutamente certa; deve-se contraindicar a vacinação da criança até que a gestante dê à luz e complete o período de puerpério.',
      },
      {
        id: 'C',
        texto:
          'A criança deve ser vacinada e imediatamente afastada da residência materna por pelo menos 45 dias consecutivos.',
      },
      {
        id: 'D',
        texto:
          'Substituir a vacina Tríplice Viral por três injeções de penicilina benzatina na criança.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Essa é uma das dúvidas mais clássicas em salas de vacina e em provas de concurso. A presença de uma gestante no mesmo domicílio NÃO contraindica a administração de vacinas de vírus vivos atenuados (como Tríplice Viral, Varicela e Febre Amarela) em seus filhos ou outros contactantes domiciliares. O vírus atenuado da rubéola contido na vacina SCR não é transmitido por via respiratória para outras pessoas. Além disso, vacinar a criança de 12 meses é a melhor estratégia de proteção da gestante suscetível, pois elimina o risco de a criança contrair o sarampo ou a rubéola natural/selvagem na creche e transmiti-los para a mãe grávida.',
    comentariosAlternativas: {
      A: 'Correta. Contactantes de gestantes devem ser vacinados normalmente com a Tríplice Viral; não há transmissão viral e protege a mãe.',
      B: 'Incorreta. Não há transmissão secundária do vírus vacinal da SCR para contactantes.',
      C: 'Incorreta. Não há qualquer justificativa para afastar o lactente de sua mãe.',
      D: 'Incorreta. Penicilina é um antibiótico bacteriano sem qualquer ação preventiva sobre sarampo, rubéola ou caxumba.',
    },
  },
  {
    id: 'ped-imun-050',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Síntese do Calendário aos 15 Meses - Imunobiológicos Recomendados',
    isRevisao: false,
    enunciado:
      'Lactente hígido de 1 ano e 3 meses de vida (15 meses), com caderneta de vacinação perfeitamente em dia até o primeiro ano de vida, comparece à Unidade Básica de Saúde para receber as vacinas indicadas para o marco dos 15 meses de idade. De acordo com o calendário básico oficial de vacinação da criança do Programa Nacional de Imunizações (PNI) do Ministério da Saúde, quais são os quatro imunobiológicos preconizados para serem administrados nessa visita?',
    alternativas: [
      {
        id: 'A',
        texto:
          '1º reforço da DTP (tríplice bacteriana), 1º reforço da VIP (vacina inativada da poliomielite), vacina Tetraviral (SCRV) e 1ª dose da vacina contra Hepatite A (monovalente).',
      },
      {
        id: 'B',
        texto:
          '2ª dose da BCG, vacina oral de rotavírus, 1º reforço da febre amarela e vacina HPV.',
      },
      {
        id: 'C',
        texto:
          'Vacina Pneumocócica 23-valente, vacina contra cólera oral, vacina contra dengue e vacina antitetânica pura.',
      },
      {
        id: 'D',
        texto:
          'Apenas o reforço da vacina meningocócica C conjugada, sendo proibida qualquer outra aplicação antes dos 4 anos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O marco dos 15 meses de idade no calendário básico do Ministério da Saúde (PNI) contempla 4 imunobiológicos essenciais:\n1) DTP (tríplice bacteriana difteria, tétano e coqueluche celular) - 1º reforço (após o esquema primário da Pentavalente aos 2, 4 e 6 meses);\n2) VIP (vacina inativada da poliomielite injetável) - 1º reforço (atualização oficial do PNI 2024 em substituição à VOP);\n3) Tetraviral (SCRV - sarampo, caxumba, rubéola e varicela) - dose única correspondendo à 2ª dose de SCR e 1ª dose de varicela;\n4) Hepatite A monovalente inativada - dose única aos 15 meses (podendo ser realizada até os 4 anos, 11 meses e 29 dias).\nEssa questão fecha a sequência essencial do calendário de vacinação da primeira infância.',
    comentariosAlternativas: {
      A: 'Correta. Aos 15 meses o PNI preconiza DTP (1º reforço), VIP (1º reforço), Tetraviral e Hepatite A.',
      B: 'Incorreta. BCG não tem 2ª dose, rotavírus é contraindicado por idade e HPV é para adolescentes.',
      C: 'Incorreta. Pneumo 23 e cólera não compõem a rotina universal do calendário infantil aos 15 meses.',
      D: 'Incorreta. O reforço da Meningo C é feito aos 12 meses e aos 15 meses há 4 imunobiológicos previstos.',
    },
  },
  {
    id: 'ped-imun-051',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Reforços aos 4 Anos de Idade no Calendário Básico',
    isRevisao: false,
    enunciado:
      'Criança de 4 anos de vida, com histórico vacinal prévio completo e atualizado até os 15 meses de idade, é levada pela mãe à Unidade Básica de Saúde para a consulta de puericultura e atualização da caderneta. De acordo com o calendário nacional de vacinação do PNI do Ministério da Saúde (com as diretrizes vigentes que universalizaram o esquema injetável da poliomielite), quais vacinas a criança deve receber nessa consulta dos 4 anos?',
    alternativas: [
      {
        id: 'A',
        texto:
          '2º reforço da DTP (tríplice bacteriana), 2º reforço da VIP (vacina inativada da poliomielite injetável), dose de reforço da Febre Amarela e 2ª dose da vacina contra a Varicela (monovalente atenuada).',
      },
      {
        id: 'B',
        texto:
          'Apenas a VOP (gotinha da poliomielite bivalente) e a vacina contra hepatite B em dose dobrada.',
      },
      {
        id: 'C',
        texto:
          'Vacina Pentavalente, vacina Pneumocócica 10-valente e reforço da vacina BCG se não houver cicatriz visível.',
      },
      {
        id: 'D',
        texto:
          'Nenhuma vacina está indicada aos 4 anos de idade, devendo a criança retornar somente aos 9 anos para o início da vacinação contra o HPV.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Aos 4 anos de idade (ou entre 4 anos e 4 anos, 11 meses e 29 dias), o calendário oficial do PNI prevê quatro imunobiológicos de rotina para crianças com esquema primário prévio:\n1) DTP (tríplice bacteriana): 2º reforço (para consolidar a imunidade contra difteria, tétano e coqueluche);\n2) VIP (vacina inativada da poliomielite): 2º reforço injetável, marco da substituição definitiva das duas doses de reforço que outrora utilizavam a VOP oral;\n3) Febre Amarela: dose de reforço recomendada para crianças que receberam a primovacinação aos 9 meses de vida;\n4) Varicela (monovalente atenuada): 2ª dose (a 1ª dose foi realizada aos 15 meses sob a forma da Tetraviral - SCRV), reduzindo drasticamente o risco de falhas primárias e surtos na pré-escola.',
    comentariosAlternativas: {
      A: 'Correta. Aos 4 anos são recomendados os 2º reforços de DTP e VIP, o reforço da Febre Amarela e a 2ª dose da Varicela.',
      B: 'Incorreta. A VOP oral foi substituída pela VIP injetável e hepatite B não tem dose dobrada de rotina.',
      C: 'Incorreta. Pentavalente e Pneumo 10 são vacinas do primeiro ano de vida; BCG não se repete por falta de cicatriz.',
      D: 'Incorreta. O marco dos 4 anos possui reforços fundamentais para proteção individual e coletiva.',
    },
  },
  {
    id: 'ped-imun-052',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Hepatite A - Estratégias do PNI vs Sociedades Especializadas (SBP)',
    isRevisao: false,
    enunciado:
      'Durante uma consulta ambulatorial de pediatria geral, a mãe de uma menina de 15 meses indaga sobre a vacina contra Hepatite A. O pediatra explica as diferenças entre as recomendações do Programa Nacional de Imunizações (PNI) do Ministério da Saúde e as orientações da Sociedade Brasileira de Pediatria (SBP). Assinale a alternativa que descreve corretamente essas diretrizes vigentes no Brasil:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O PNI preconiza DOSE ÚNICA da vacina inativada contra Hepatite A aos 15 meses de vida (disponível até 4 anos, 11 meses e 29 dias), enquanto a SBP recomenda esquema de DUAS doses (a 1ª aos 12 meses e a 2ª aos 18 meses, com intervalo de 6 meses).',
      },
      {
        id: 'B',
        texto:
          'O PNI preconiza vacina de vírus vivo atenuado contra Hepatite A em três doses orais aos 2, 4 e 6 meses, enquanto a SBP contraindica a vacinação antes dos 10 anos.',
      },
      {
        id: 'C',
        texto:
          'A vacina de Hepatite A foi retirada do calendário infantil devido à erradicação completa do vírus no continente americano.',
      },
      {
        id: 'D',
        texto:
          'Tanto o PNI quanto a SBP preconizam apenas reforço decenal obrigatório na fase adulta sem nenhuma dose na primeira infância.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A vacina contra a Hepatite A disponibilizada pelo SUS no PNI é uma vacina inativada altamente imunogênica, recomendada em DOSE ÚNICA aos 15 meses de idade (podendo ser administrada até os 4 anos, 11 meses e 29 dias em crianças não vacinadas). Evidências epidemiológicas mostram que essa dose única confere excelente proteção populacional de longo prazo no contexto de saúde pública. Já a Sociedade Brasileira de Pediatria (SBP) e a Sociedade Brasileira de Imunizações (SBIm) recomendam o esquema clássico de DUAS doses para garantir imunogenicidade celular e humoral duradoura por décadas: a 1ª dose aos 12 meses e a 2ª dose aos 18 meses de vida (ou com intervalo mínimo de 6 meses após a primeira).',
    comentariosAlternativas: {
      A: 'Correta. PNI adota dose única aos 15 meses; SBP/SBIm orienta 2 doses (aos 12 e 18 meses).',
      B: 'Incorreta. A vacina é inativada, injetável intramuscular, e não oral aos 2, 4 e 6 meses.',
      C: 'Incorreta. O vírus da Hepatite A continua circulando e a vacina é fundamental na profilaxia de hepatite fulminante.',
      D: 'Incorreta. A primovacinação ocorre nos primeiros anos de vida e não exige reforço decenal.',
    },
  },
  {
    id: 'ped-imun-053',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Vacina HPV - Esquema de Dose Única no PNI para Meninos e Meninas',
    isRevisao: false,
    enunciado:
      'Uma adolescente de 12 anos comparece com o pai à Unidade de Saúde da Família para colocar as vacinas em dia. A enfermeira identifica que ela nunca recebeu nenhuma dose da vacina contra o Papilomavírus Humano (HPV). De acordo com a atualização normativa do Ministério da Saúde / PNI (instituída a partir de 2024, baseada nas recomendações da Organização Mundial da Saúde), qual é a conduta correta em relação ao esquema vacinal contra o HPV para essa adolescente imunocompetente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar a vacina HPV quadrivalente em DOSE ÚNICA, estratégia oficial adotada para meninas e meninos de 9 a 14 anos com alto nível de imunogenicidade e eficácia contra infecções persistentes e neoplasias associadas.',
      },
      {
        id: 'B',
        texto:
          'Administrar esquema obrigatório de 3 doses (0, 1 e 6 meses) apenas se a adolescente já tiver iniciado atividade sexual.',
      },
      {
        id: 'C',
        texto:
          'Contraindicar a vacina, pois ela só tem aprovação legal para meninos no Sistema Único de Saúde.',
      },
      {
        id: 'D',
        texto:
          'Prescrever 4 doses anuais consecutivas associadas à sorologia prévia de anticorpos anti-HPV.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Em consonância com as recomendações do Grupo Estratégico de Especialistas em Imunização (SAGE) da OMS, o Ministério da Saúde do Brasil atualizou a estratégia da vacina HPV recombinante quadrivalente (sorotipos 6, 11, 16 e 18), passando a adotar o ESQUEMA EM DOSE ÚNICA para meninas e meninos de 9 a 14 anos (14 anos, 11 meses e 29 dias). Evidências robustas demonstraram que uma única dose confere proteção imunológica comparável a regimes de duas doses contra os tipos oncogênicos mais prevalentes (16 e 18), facilitando a adesão, simplificando a logística e aumentando a cobertura vacinal para eliminação do câncer de colo uterino como problema de saúde pública.',
    comentariosAlternativas: {
      A: 'Correta. Dose única preconizada para meninos e meninas de 9 a 14 anos pelo PNI.',
      B: 'Incorreta. Esquema de 3 doses não é a rotina para imunocompetentes e a vacina deve preferencialmente ser aplicada antes do início sexual.',
      C: 'Incorreta. A vacina é indicada tanto para meninas quanto para meninos de 9 a 14 anos.',
      D: 'Incorreta. Não existe esquema de 4 doses e não se solicita sorologia prévia nem teste de HPV.',
    },
  },
  {
    id: 'ped-imun-054',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Vacina HPV em Pacientes Imunocomprometidos e Vítimas de Violência',
    isRevisao: false,
    enunciado:
      'Jovem de 16 anos, portador de infecção pelo HIV por transmissão vertical (em uso regular de TARV com contagem de linfócitos T CD4+ de 350 céls/mm³), comparece ao Centro de Referência para Imunobiológicos Especiais (CRIE). Ele nunca recebeu a vacina contra o HPV. Considerando as normas técnicas do PNI para populações especiais e imunossuprimidas, qual é a conduta vacinal indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar a vacina HPV quadrivalente no esquema especial de 3 DOSES (intervalo de 0, 2 e 6 meses), indicado para pessoas com imunodepressão (HIV/Aids, transplantados de órgãos sólidos ou medula óssea, oncológicos) na faixa etária de 9 a 45 anos.',
      },
      {
        id: 'B',
        texto:
          'Administrar dose única, pois não há nenhuma diferença de resposta humoral entre indivíduos imunocompetentes e imunocomprometidos.',
      },
      {
        id: 'C',
        texto:
          'Contraindicar formalmente a vacina, pois ela é formulada com vírus vivo atenuado recombinante e causa viremia grave em portadores de HIV.',
      },
      {
        id: 'D',
        texto:
          'Aguardar que a contagem de linfócitos T CD4+ atinja valor superior a 1.000 céls/mm³ antes de indicar a primeira dose.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A simplificação para dose única da vacina HPV NÃO se aplica a populações imunocomprometidas. De acordo com as diretrizes do Ministério da Saúde / CRIE, pessoas vivendo com HIV/Aids, transplantados de órgãos sólidos e de células-tronco hematopoéticas (medula óssea), pacientes com neoplasias malignas em quimioterapia/radioterapia e vítimas de violência sexual devem receber o ESQUEMA COMPLETO DE 3 DOSES (0, 2 e 6 meses), dos 9 aos 45 anos de idade (para ambos os sexos). A vacina é inativada (composta por partículas semelhantes a vírus - VLPs não replicantes, da proteína L1 do capsídeo), sendo perfeitamente segura e essencial para prevenir neoplasias e verrugas anogenitais, que possuem incidência e agressividade muito mais altas em imunossuprimidos.',
    comentariosAlternativas: {
      A: 'Correta. Imunocomprometidos mantêm o esquema clássico de 3 doses (0, 2 e 6 meses) dos 9 aos 45 anos.',
      B: 'Incorreta. A dose única não confere títulos de anticorpos sustentados em indivíduos imunodeprimidos.',
      C: 'Incorreta. A vacina HPV é inativada (recombinante/VLPs), sem risco de replicação ou doença infecciosa.',
      D: 'Incorreta. Não se exige CD4 > 1.000 céls/mm³; a vacina deve ser aplicada o quanto antes independentemente do nível de CD4.',
    },
  },
  {
    id: 'ped-imun-055',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Vacina HPV - Sorotipos e Espectro de Proteção Oncogênica',
    isRevisao: false,
    enunciado:
      'A vacina contra o HPV disponibilizada no Programa Nacional de Imunizações (PNI) do SUS é a formulação recombinante quadrivalente. Assinale a alternativa que correlaciona corretamente os sorotipos contidos nessa vacina e o respectivo espectro de proteção clínica:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sorotipos 6 e 11 (prevenção de condilomas acuminados / verrugas anogenitais e papilomatose respiratória recorrente) e sorotipos 16 e 18 (prevenção de lesões pré-cancerosas e cânceres do colo uterino, vulva, vagina, ânus, pênis e orofaringe).',
      },
      {
        id: 'B',
        texto:
          'Sorotipos 1, 2, 3 e 4, responsáveis exclusivamente pela prevenção de verrugas plantares e vulgares das mãos.',
      },
      {
        id: 'C',
        texto:
          'Sorotipos 31, 33, 45 e 58, que agem curando o carcinoma invasor de colo uterino previamente instalado por lise tumoral direta.',
      },
      {
        id: 'D',
        texto:
          'Sorotipos 6 e 11 de alto risco oncogênico e sorotipos 16 e 18 de baixo risco benigno.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A vacina quadrivalente (Gardasil) contém VLPs dos tipos 6, 11, 16 e 18 do HPV:\n- Tipos 6 e 11: baixo risco oncogênico, mas responsáveis por cerca de 90% das verrugas anogenitais (condilomas acuminados) e pela papilomatose respiratória recorrente laringotraqueal;\n- Tipos 16 e 18: alto risco oncogênico, responsáveis por aproximadamente 70% dos cânceres cervicais invasores e uma fração expressiva de lesões malignas anais, vulvares, vaginais, penianas e de orofaringe.\nLembrar que a vacina é estritamente PROFILÁTICA e não terapêutica: ela não elimina infecções já estabelecidas nem cura lesões pré-neoplásicas existentes.',
    comentariosAlternativas: {
      A: 'Correta. Tipos 6/11 para verrugas anogenitais e 16/18 para neoplasias malignas anogenitais e de orofaringe.',
      B: 'Incorreta. Tipos 1, 2, 3 e 4 causam verrugas cutâneas comuns, sem relação com a vacina quadrivalente de HPV.',
      C: 'Incorreta. Esses tipos compõem a nonavalente (não presente no SUS universal) e a vacina nunca tem efeito curativo oncológico direto.',
      D: 'Incorreta. Houve inversão dos potenciais oncogênicos (16 e 18 são de alto risco; 6 e 11 de baixo risco).',
    },
  },
  {
    id: 'ped-imun-056',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Evento Pós-Vacinal Imediato - Síncope Vasovagal em Adolescentes',
    isRevisao: false,
    enunciado:
      'Adolescente de 13 anos, hígida, comparece à UBS para receber a vacina contra o HPV e a vacina Meningocócica ACWY. Imediatamente após a aplicação intramuscular da vacina contra o HPV no deltoide esquerdo, ainda em pé ao lado da bancada, ela relata sensação de calor, escurecimento visual, tontura e sofre perda súbita e transitória da consciência, caindo nos braços da acompanhante. Não houve rash, sibilos, estridor ou hipotensão prolongada; após 20 segundos em decúbito dorsal e elevação dos membros inferiores, ela recobra o nível de consciência espontaneamente, eupneica e corada. Assinale o diagnóstico e a conduta recomendada para prevenção desse evento:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síncope vasovagal (reação psicogênica relacionada ao estresse da injeção); comum em adolescentes e adultos jovens; para preveni-la e evitar traumatismos por quedas, recomenda-se vacinar adolescentes sentados e mantê-los sob observação em repouso por 15 minutos.',
      },
      {
        id: 'B',
        texto:
          'Choque anafilático grave mediado por IgE; conduta mandatória de administrar adrenalina intramuscular 1:1000 imediatamente e intubação orotraqueal.',
      },
      {
        id: 'C',
        texto:
          'Encefalite aguda desmielinizante causada pelo vírus vacinal; contraindicação definitiva de qualquer vacina para o resto da vida.',
      },
      {
        id: 'D',
        texto:
          'Arritmia cardíaca maligna por toxicidade direta da proteína L1; internação em UTI cardiológica pediátrica para implante de marca-passo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A síncope vasovagal (ou desmaio neurocardiogênico) é uma resposta mediada pelo sistema nervoso autônomo (hiperativação vagal com bradicardia e vasodilatação transitórias) decorrente de dor, ansiedade, medo de agulha ou estresse emocional no momento da imunização. É o evento adverso pós-vacinal imediato mais comum em adolescentes e adultos jovens. Caracteriza-se por pródromos de palidez, sudorese, vertigem e rápida recuperação após decúbito dorsal, sem comprometimento de vias aéreas ou manifestações cutâneas alérgicas (diferenciando-se da anafilaxia). As diretrizes da OMS e do PNI recomendam que todos os adolescentes sejam vacinados SENTADOS e permaneçam observados em repouso por 15 minutos após a injeção para evitar traumas secundários a quedas.',
    comentariosAlternativas: {
      A: 'Correta. Trata-se de síncope vasovagal; prevenção com vacinação sentada e observação de 15 minutos.',
      B: 'Incorreta. Não houve urticária, angioedema, estridor, broncoespasmo ou hipotensão refratária que caracterizem anafilaxia.',
      C: 'Incorreta. A vacina é inativada não replicante e não causa encefalite desmielinizante fulminante imediata.',
      D: 'Incorreta. O quadro foi transitório, puramente vagal, sem cardiopatia subjacente.',
    },
  },
  {
    id: 'ped-imun-057',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Vacina Meningocócica ACWY - Indicação e Fundamento Epidemiológico',
    isRevisao: false,
    enunciado:
      'O Ministério da Saúde inclui no calendário oficial da criança e do adolescente a vacina meningocócica conjugada quadrivalente (MenACWY). Qual é a faixa etária preconizada pelo PNI para a dose da vacina Meningocócica ACWY e qual é a principal justificativa epidemiológica para essa intervenção na adolescência?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Adolescentes de 11 a 14 anos (11 a 14 anos, 11 meses e 29 dias); justifica-se porque os adolescentes são os principais reservatórios e transmissores do meningococo na comunidade (elevada taxa de portadores nasofaríngeos assintomáticos), conferindo proteção direta e forte imunidade de rebanho.',
      },
      {
        id: 'B',
        texto:
          'Lactentes aos 2, 4 e 6 meses de vida com exclusividade; justifica-se porque adolescentes têm imunidade natural perpétua contra todos os sorogrupos da Neisseria meningitidis.',
      },
      {
        id: 'C',
        texto:
          'Exclusivamente adultos com mais de 60 anos; justifica-se pelo pico de incidência de meningite bacteriana nessa faixa etária geriátrica.',
      },
      {
        id: 'D',
        texto:
          'Apenas escolares com histórico confirmado de asplenia anatômica grave entre 6 e 8 anos de idade.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A vacina conjugada MenACWY protege contra quatro sorogrupos de Neisseria meningitidis (A, C, W e Y). No PNI, ela é administrada como DOSE DE REFORÇO ou dose única em adolescentes de 11 a 14 anos (11 anos até 14 anos, 11 meses e 29 dias). O fundamento epidemiológico baseia-se em dois pilares:\n1) Nessa fase da vida, os anticorpos bactericidas induzidos na infância pela vacina Meningo C sofrem declínio fisiológico;\n2) Os adolescentes possuem a maior taxa de colonização orofaríngea (portadores assintomáticos) de Neisseria meningitidis devido a comportamentos sociais (aglomerações, compartilhamento de utensílios, contato íntimo). A vacinação com antígenos conjugados reduz drasticamente o estado de carreador nasofaríngeo, promovendo potente proteção coletiva (efeito rebanho) sobre as faixas de maior vulnerabilidade clínica (lactentes e idosos).',
    comentariosAlternativas: {
      A: 'Correta. MenACWY aos 11-14 anos no PNI para proteção individual e redução do estado de portador com imunidade de rebanho.',
      B: 'Incorreta. Aos 2, 4 e 6 meses usa-se Pentavalente/VIP/Pneumo; MenC é aos 3 e 5 meses; e adolescentes não têm imunidade natural perpétua.',
      C: 'Incorreta. A MenACWY não é de rotina universal para idosos no calendário público.',
      D: 'Incorreta. A indicação no PNI é universal e populacional para todos os adolescentes de 11 a 14 anos.',
    },
  },
  {
    id: 'ped-imun-058',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Meningocócica ACWY em Adolescente Vacinado com Meningo C na Infância',
    isRevisao: false,
    enunciado:
      'Um jovem de 13 anos é levado ao posto de saúde para avaliação vacinal. A mãe apresenta o cartão com comprovação de que ele recebeu duas doses de vacina Meningocócica C conjugada aos 3 e 5 meses e a dose de reforço aos 12 meses de idade na infância. A mãe pergunta se ele ainda precisa tomar a vacina MenACWY oferecida para adolescentes. Qual é a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar a vacina MenACWY imediatamente; a dose na adolescência é recomendada mesmo para quem recebeu o esquema infantil completo com a Meningo C, pois amplia a proteção para outros sorogrupos epidemiologicamente relevantes (A, W e Y) e restabelece os títulos protetores contra o sorogrupo C.',
      },
      {
        id: 'B',
        texto:
          'Contraindicar a vacina MenACWY, pois a resposta imune prévia à vacina Meningo C causa anafilaxia se o paciente for reexposto ao antígeno.',
      },
      {
        id: 'C',
        texto:
          'Solicitar previamente punção lombar diagnóstica e bacterioscopia do líquor para comprovar ausência de meningococo.',
      },
      {
        id: 'D',
        texto:
          'Aplicar apenas a vacina de cólera oral e dispensar a vacina meningocócica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A diretriz técnica do Ministério da Saúde orienta claramente que todo adolescente entre 11 e 14 anos deve receber 1 dose da vacina Meningocócica ACWY conjugada, INDEPENDENTEMENTE de ter recebido o esquema básico ou reforço da vacina Meningocócica C no passado. Essa estratégia tem duplo benefício: serve como reforço para o sorogrupo C (cujos anticorpos protetores decaem após vários anos da vacinação do primeiro ano de vida) e agrega proteção contra os sorogrupos W e Y (que apresentaram aumento de incidência e letalidade em diversas regiões do Brasil na última década) e A.',
    comentariosAlternativas: {
      A: 'Correta. Deve receber a dose de MenACWY mesmo tendo recebido esquema completo de Meningo C na infância.',
      B: 'Incorreta. Não há risco de anafilaxia por reexposição antigênica nem contraindicação.',
      C: 'Incorreta. Punção lombar é exame invasivo indicado apenas em suspeita clínica de meningite aguda, nunca como triagem vacinal.',
      D: 'Incorreta. Conduta sem respaldo técnico; vacina de cólera não é de rotina e a MenACWY é prioritária.',
    },
  },
  {
    id: 'ped-imun-059',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Influenza em Pediatria - Regra da Primovacinação em Lactentes',
    isRevisao: false,
    enunciado:
      'Lactente de 7 meses de idade, previamente hígido e com vacinação em dia, é levado à UBS durante a Campanha Nacional de Vacinação contra a Influenza (Gripe). A mãe relata que é a primeira vez que o filho será vacinado contra a gripe na vida. De acordo com as diretrizes do Ministério da Saúde e da Sociedade Brasileira de Pediatria, como deve ser realizado o esquema vacinal contra a Influenza para esse paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar DUAS doses da vacina inativada contra Influenza na dose pediátrica recomendada, com intervalo mínimo de 30 dias entre elas, completando a primovacinação nessa temporada.',
      },
      {
        id: 'B',
        texto:
          'Administrar dose única imediatamente, dispensando qualquer dose subsequente em qualquer circunstância.',
      },
      {
        id: 'C',
        texto:
          'Contraindicar a vacina, pois ela só pode ser iniciada em crianças após os 2 anos de idade completos.',
      },
      {
        id: 'D',
        texto:
          'Administrar quatro doses semanais associadas a xarope de oseltamivir profilático contínuo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A vacinação contra a Influenza é indicada para todas as crianças a partir dos 6 meses de vida (no SUS, universal até 5 anos, 11 meses e 29 dias). Na PRIMOVACINAÇÃO (crianças de 6 meses até menores de 9 anos de idade que nunca receberam nenhuma dose de vacina contra a gripe na vida), o sistema imunológico virgem requer DUAS DOSES com intervalo mínimo de 30 dias (4 semanas) para que ocorra a ativação primária dos clones de linfócitos B e a subsequente maturação da afinidade dos anticorpos neutralizantes (anti-hemaglutinina). Crianças que já receberam pelo menos duas doses de vacina contra influenza em anos anteriores passam a receber apenas UMA dose anual nas campanhas subsequentes.',
    comentariosAlternativas: {
      A: 'Correta. Primovacinação em < 9 anos requer 2 doses com intervalo de 30 dias na primeira temporada.',
      B: 'Incorreta. Dose única isolada na primovacinação não gera proteção humoral suficiente em lactentes.',
      C: 'Incorreta. A idade mínima de indicação da vacina inativada de Influenza é 6 meses de vida.',
      D: 'Incorreta. Esquema estapafúrdio; não há quatro doses semanais nem uso profilático de antiviral.',
    },
  },
  {
    id: 'ped-imun-060',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Influenza - Esquema Anual Subsequente em Criança Prévio-Vacinada',
    isRevisao: false,
    enunciado:
      'Menino de 3 anos de idade comparece à UBS acompanhado da avó durante a campanha anual de vacinação contra a Influenza. Ao checar a caderneta de vacinação, o profissional de saúde verifica que o menino recebeu adequadamente duas doses da vacina da gripe aos 7 e 8 meses de vida e recebeu uma dose de reforço anual aos 2 anos. Qual é a conduta vacinal indicada para este ano?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar UMA dose única da vacina contra a Influenza da temporada atual, pois a primovacinação com duas doses já foi realizada em temporada anterior.',
      },
      {
        id: 'B',
        texto:
          'Repetir o esquema de duas doses com intervalo de 30 dias obrigatoriamente todos os anos até completar 10 anos.',
      },
      {
        id: 'C',
        texto:
          'Contraindicar a vacina, pois crianças que já tomaram vacina da gripe no passado têm imunidade vitalícia e não necessitam de novas doses.',
      },
      {
        id: 'D',
        texto:
          'Substituir a vacina da gripe por dose de reforço da vacina BCG.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Uma vez que a criança menor de 9 anos tenha completado a primovacinação (recebeu pelo menos 2 doses da vacina contra influenza no passado, na mesma temporada ou em temporadas diferentes), ela passa para o regime padrão anual de DOSE ÚNICA em cada campanha anual subsequente. A vacinação deve ser renovada anualmente porque os vírus influenza sofrem mutações antigênicas contínuas (deriva antigênica / "antigenic drift") nas proteínas de superfície (hemaglutinina e neuraminidase), exigindo que a composição das cepas vacinais (trivalente no SUS / quadrivalente no setor privado) seja atualizada anualmente pela OMS, além da queda natural dos títulos de anticorpos protetores após 6 a 12 meses.',
    comentariosAlternativas: {
      A: 'Correta. Criança já primovacinada recebe apenas uma dose única anual.',
      B: 'Incorreta. O esquema de duas doses é exclusivo para o primeiro ano de vacinação da criança virgem.',
      C: 'Incorreta. A imunidade contra o vírus Influenza decai com o tempo e os vírus sofrem mutações frequentes, exigindo reforço anual.',
      D: 'Incorreta. Não existe indicação de reforço da BCG para profilaxia de infecções respiratórias virais.',
    },
  },
  {
    id: 'ped-imun-061',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Vacina da Influenza e Alergia Grave a Ovo - Desmistificação',
    isRevisao: false,
    enunciado:
      'Criança de 2 anos com diagnóstico comprovado de anafilaxia mediada por IgE a proteínas do ovo (apresentou urticária generalizada, edema labial e sibilância após ingestão de ovo aos 10 meses) é levada à UBS. A mãe tem medo de vacinar o filho contra a gripe, pois foi informada por conhecidos de que a vacina é produzida em ovos embrionados e poderia matá-lo. Com base nas diretrizes do Ministério da Saúde, da Sociedade Brasileira de Imunizações (SBIm) e da Sociedade Americana de Alergia e Imunologia (AAAAI), qual é a recomendação médica correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A criança PODE e DEVE receber a vacina contra a Influenza normalmente na dose e via habituais; a quantidade de ovalbumina residual nas vacinas atuais é extremamente insignificante (nanogramas), sendo a vacinação segura mesmo para indivíduos com anafilaxia grave ao ovo, dispensando testes cutâneos prévios ou dessensibilização.',
      },
      {
        id: 'B',
        texto:
          'A anafilaxia ao ovo é contraindicação absoluta e permanente à vacina contra a gripe no Brasil e no mundo, sendo expressamente proibida sua aplicação.',
      },
      {
        id: 'C',
        texto:
          'A vacina só pode ser administrada após a criança comer três gemas de ovo cozidas na frente do médico para testar a refratariedade.',
      },
      {
        id: 'D',
        texto:
          'A criança deve receber a vacina diluída em 5 litros de soro fisiológico por via retal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Essa é uma das atualizações e pegadinhas mais clássicas de provas de residência médica. No passado, temia-se que a quantidade residual de ovalbumina pudesse desencadear reações anafiláticas em pessoas alérgicas a ovo. Entretanto, com a evolução das técnicas modernas de purificação, os teores residuais de proteína de ovo nas vacinas de influenza inativadas tornaram-se insignificantes (< 1 mcg/dose, geralmente nanogramas). Estudos clínicos robustos comprovaram a segurança da vacina em alérgicos graves. Tanto a OMS, o CDC, a SBIm quanto o Ministério da Saúde estabelecem que pessoas com história de alergia grave ao ovo (inclusive anafilaxia) PODEM ser vacinadas com a vacina contra Influenza sem restrições especiais, em qualquer sala de vacina convencional (com a estrutura padrão de primeiros socorros existente em qualquer serviço de saúde).',
    comentariosAlternativas: {
      A: 'Correta. Alergia a ovo (mesmo anafilaxia) não contraindica a vacina contra influenza atual.',
      B: 'Incorreta. Conceito antigo e superado; anafilaxia ao ovo NÃO é contraindicação.',
      C: 'Incorreta. Provocação oral com ovo em paciente com anafilaxia prévia oferece risco grave desnecessário.',
      D: 'Incorreta. Alternativa absurda; a vacina é aplicada por via intramuscular convencional.',
    },
  },
  {
    id: 'ped-imun-062',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Vacinação Contra a COVID-19 no Calendário Básico Infantil do PNI',
    isRevisao: false,
    enunciado:
      'A partir de 2024, o Ministério da Saúde do Brasil incorporou formalmente a vacina contra a COVID-19 no Calendário Nacional de Vacinação da Criança. Sobre os fundamentos técnicos e as recomendações de imunização contra a COVID-19 na população pediátrica no âmbito do SUS, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A vacinação contra a COVID-19 está incorporada ao calendário de rotina para crianças a partir dos 6 meses até menores de 5 anos de idade, visando prevenir hospitalizações por SRAG, óbitos e sequelas graves como a Síndrome Inflamatória Multissistêmica Pediátrica (SIM-P).',
      },
      {
        id: 'B',
        texto:
          'A vacina contra a COVID-19 só é permitida no Brasil para maiores de 18 anos devido à completa inexistência de complicações infecciosas ou hospitalizações por SARS-CoV-2 na infância.',
      },
      {
        id: 'C',
        texto:
          'O imunobiológico contra a COVID-19 não pode ser administrado simultaneamente com nenhuma outra vacina do calendário, exigindo isolamento de 90 dias entre quaisquer aplicações.',
      },
      {
        id: 'D',
        texto:
          'A vacina é administrada em dose única intranasal formulada exclusivamente com vírus vivo atenuado recombinante.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A inclusão da vacina contra a COVID-19 no Calendário Básico de Vacinação da Criança do PNI (a partir dos 6 meses de vida até 4 anos, 11 meses e 29 dias) baseou-se na carga de morbimortalidade provocada pelo SARS-CoV-2 na primeira infância, com milhares de internações por Síndrome Respiratória Aguda Grave (SRAG) e óbitos registrados nesse grupo etário, além do risco da temida Síndrome Inflamatória Multissistêmica Pediátrica (SIM-P). As formulações pediátricas aprovadas (plataformas de RNA mensageiro ou proteínas recombinantes atualizadas para as subvariantes circulantes) demonstraram elevado perfil de eficácia e segurança. Além disso, a vacina contra COVID-19 PODE ser administrada de forma simultânea com as demais vacinas do calendário infantil.',
    comentariosAlternativas: {
      A: 'Correta. Integrada ao PNI para crianças de 6 meses a < 5 anos com objetivo de mitigar formas graves e SIM-P.',
      B: 'Incorreta. A infecção na infância causa hospitalizações e óbitos, e a vacina é autorizada a partir de 6 meses.',
      C: 'Incorreta. Pode ser coadministrada com qualquer outra vacina do calendário em sítios anatômicos distintos.',
      D: 'Incorreta. As vacinas aprovadas para pediatria são injetáveis intramusculares (mRNA ou subunidade), não vivas atenuadas intranasais.',
    },
  },
  {
    id: 'ped-imun-063',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'COVID-19 em Crianças com Comorbidades e Imunossupressão',
    isRevisao: false,
    enunciado:
      'Lactente de 10 meses com cardiopatia congênita cianótica (Tetralogia de Fallot) em acompanhamento no ambulatório de cardiopediatria comparece à UBS. A mãe pergunta se ele tem prioridade para a vacinação contra COVID-19 e Influenza. Qual é a correta conduta e fundamentação técnico-científica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Lactentes com comorbidades crônicas graves (como cardiopatias congênitas, pneumopatias, nefropatias e imunossupressão) têm risco substancialmente aumentado de descompensação hemodinâmica e óbito por infecções respiratórias, sendo a imunização contra COVID-19 e Influenza prioritária e indicada.',
      },
      {
        id: 'B',
        texto:
          'Crianças com cardiopatias congênitas são proibidas de tomar qualquer vacina inativada, devendo permanecer sem vacinação até a correção cirúrgica definitiva.',
      },
      {
        id: 'C',
        texto:
          'Apenas a vacina da febre amarela está indicada para cardiopatas, sendo contraindicadas as vacinas respiratórias.',
      },
      {
        id: 'D',
        texto:
          'Deve-se aguardar a idade de 18 anos para administrar qualquer vacina em pacientes cardiopatas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Crianças portadoras de comorbidades pré-existentes — em especial cardiopatias congênitas com repercussão hemodinâmica ou cianose — compõem grupo de altíssimo risco para insuficiência respiratória grave, descompensação cardíaca aguda e óbito quando acometidas por vírus respiratórios como o SARS-CoV-2 (COVID-19) e o vírus Influenza. Por essa razão, a imunização ativa por meio das vacinas contra COVID-19 (a partir dos 6 meses de vida) e Influenza é altamente recomendada e considerada medida profilática de primeira linha. Ambas as vacinas são inativadas, seguras e não replicantes.',
    comentariosAlternativas: {
      A: 'Correta. Crianças cardiopatas têm indicação prioritária de vacinas contra vírus respiratórios inativadas.',
      B: 'Incorreta. Cardiopatias não contraindicam vacinas inativadas; pelo contrário, reforçam a sua necessidade.',
      C: 'Incorreta. Vacinas respiratórias são fundamentais; vacinas de vírus vivos (febre amarela) exigem cautela se houver descompensação.',
      D: 'Incorreta. Postergar vacinação em cardiopatas aumenta de forma inaceitável o risco de morte infecciosa prevenível.',
    },
  },
  {
    id: 'ped-imun-064',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Princípio Geral do Atraso Vacinal - Não Reiniciar Esquemas',
    isRevisao: false,
    enunciado:
      'Criança de 18 meses de vida é trazida pela mãe à UBS pela primeira vez desde o período neonatal. A caderneta de saúde comprova que a criança recebeu apenas a vacina BCG e a 1ª dose de Hepatite B ao nascer, e a 1ª dose de Pentavalente, VIP, Pneumo 10 e Rotavírus aos 2 meses de idade. Desde então, por mudança de cidade e vulnerabilidade social, a criança nunca mais foi levada a um posto de saúde. Diante de esquemas vacinais com atraso prolongado, qual é o princípio imunológico fundamental preconizado pelo Ministério da Saúde e pelos manuais internacionais de imunização?',
    alternativas: [
      {
        id: 'A',
        texto:
          '"Dose aplicada é dose contada": esquemas vacinais atrasados ou interrompidos JAMAIS devem ser reiniciados; deve-se apenas dar continuidade ao esquema do ponto em que parou, administrando as doses faltantes e respeitando os intervalos mínimos recomendados.',
      },
      {
        id: 'B',
        texto:
          'Como o atraso ultrapassou 12 meses, a memória imunológica foi totalmente perdida, sendo obrigatório reiniciar o esquema desde a 1ª dose de todas as vacinas.',
      },
      {
        id: 'C',
        texto:
          'Aplicar apenas a vacina de hepatite B e dispensar todas as outras, pois o sistema imune infantil atrofia após 1 ano sem estímulo.',
      },
      {
        id: 'D',
        texto:
          'Exigir que a criança fique em jejum por 48 horas antes de reiniciar o esquema completo em dose quadruplicada.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O princípio áureo da imunologia aplicada às salas de vacinas afirma: "NUNCA SE REINICIA ESQUEMA VACINAL ATRASADO". O sistema imune humano gera linfócitos T e B de memória que persistem por muitos anos (ou décadas), mesmo que o intervalo entre as doses tenha sido muito maior do que o aprazado inicialmente. Quando uma nova dose é aplicada após um intervalo prolongado, ela atua perfeitamente como estímulo booster (reforço secundário anamnóstico), elevando rapidamente os títulos de anticorpos protetores com elevada afinidade. Portanto, basta completar as doses faltantes, observando os intervalos mínimos recomendados e as faixas etárias limites específicas de cada vacina (ex.: rotavírus tem idade máxima).',
    comentariosAlternativas: {
      A: 'Correta. Regra fundamental da vacinação: esquemas atrasados não são reiniciados, apenas continuados/completados.',
      B: 'Incorreta. A memória imunológica permanece ativa e não se perde após meses de atraso.',
      C: 'Incorreta. O sistema imune não atrofia e as vacinas faltantes devem ser aplicadas.',
      D: 'Incorreta. Alternativa sem qualquer sentido clínico ou biológico.',
    },
  },
  {
    id: 'ped-imun-065',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Atraso Vacinal Grave em Criança Maior - Limites de Idade',
    isRevisao: false,
    enunciado:
      'Menino de 4 anos e 8 meses de vida comparece à UBS. A mãe relata que a criança nunca recebeu nenhuma vacina na vida (nem mesmo ao nascer). O médico e a equipe de enfermagem da sala de vacinas organizam o plano de atualização vacinal com base no calendário de crianças não vacinadas do Ministério da Saúde. Dentre as seguintes opções, qual imunobiológico é CONTRAINDICADO para esta criança estritamente em função da sua idade atual?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Vacina oral contra o Rotavírus Humano (VRH), cujo limite etário máximo para a primeira dose é de 3 meses e 15 dias e para a última dose é de 7 meses e 29 dias.',
      },
      {
        id: 'B',
        texto:
          'Vacina Tríplice Viral (SCR), que só pode ser administrada em idosos maiores de 70 anos.',
      },
      {
        id: 'C',
        texto:
          'Vacina contra a Febre Amarela, que só pode ser aplicada a partir dos 18 anos de vida.',
      },
      {
        id: 'D',
        texto:
          'Vacina inativada da Poliomielite (VIP), que é contraindicada após os 6 meses de vida.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A vacina oral contra o Rotavírus Humano (VRH atenuada) possui limites etários intransponíveis por razões de biossegurança (risco epidemiológico de invaginação intestinal se administrada tardiamente):\n- Limite para 1ª dose: 3 meses e 15 dias;\n- Limite para 2ª dose: 7 meses e 29 dias.\nSe a criança ultrapassar essa idade sem ter sido vacinada, a vacina do rotavírus NÃO PODE MAIS SER APLICADA. Por outro lado, para essa criança de 4 anos e 8 meses não vacinada, estão indicadas vacinas como Febre Amarela, Tríplice Viral, Hepatite B, VIP e DTP (esta última permitida até 6 anos, 11 meses e 29 dias).',
    comentariosAlternativas: {
      A: 'Correta. VRH tem limite máximo rigoroso de 7 meses e 29 dias; é formalmente contraindicada para maiores dessa idade.',
      B: 'Incorreta. A Tríplice Viral está formalmente indicada para essa criança de 4 anos.',
      C: 'Incorreta. A vacina de febre amarela é indicada na infância a partir dos 9 meses.',
      D: 'Incorreta. A VIP está indicada para atualização em qualquer idade infantil em esquemas primários.',
    },
  },
  {
    id: 'ped-imun-066',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Vias de Administração e Sítios Anatômicos em Lactentes e Crianças',
    isRevisao: false,
    enunciado:
      'Lactente de 6 meses de vida precisa receber três vacinas injetáveis intramusculares na mesma visita à UBS (Pentavalente, VIP e Pneumocócica 10-valente). A mãe questiona a técnica de aplicação e onde serão aplicadas tantas injeções. De acordo com as boas práticas em imunização do Ministério da Saúde e do Ministério da Saúde / PNI:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Em lactentes e crianças menores de 2 anos, o sítio anatômico de escolha para injeções intramusculares é a região anterolateral da coxa (músculo vasto lateral); quando houver mais de uma injeção no mesmo membro, deve-se manter uma distância mínima de 2,5 cm entre os locais de punção para permitir avaliação individualizada de eventuais reações locais.',
      },
      {
        id: 'B',
        texto:
          'Deve-se misturar o conteúdo das três vacinas dentro da mesma seringa para realizar apenas uma picada e evitar sofrimento.',
      },
      {
        id: 'C',
        texto:
          'Em menores de 2 anos, a via de escolha é exclusivamente o glúteo máximo (quadrante superior externo), sendo proibida a aplicação na coxa.',
      },
      {
        id: 'D',
        texto:
          'Não é permitido aplicar mais de uma vacina no mesmo dia em nenhuma hipótese, devendo-se agendar uma injeção a cada 45 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Em crianças menores de 2 anos de idade, o músculo vasto lateral da coxa (face anterolateral) é o local preferencial para injeções intramusculares devido à sua excelente massa muscular e ausência de troncos vasculonervosos nobres no trajeto da agulha. O músculo glúteo é formalmente DESACONSELHADO nessa faixa etária pelo risco de lesão do nervo ciático e pela menor espessura muscular / maior espessura de tecido adiposo superficial. Quando duas injeções precisam ser feitas no mesmo membro, deve-se respeitar um espaço de pelo menos 2,5 cm (cerca de 1 polegada) entre elas. Jamais se deve misturar vacinas não combinadas de fábrica na mesma seringa. A aplicação simultânea de múltiplas vacinas em locais anatômicos diferentes é segura e recomendada para garantir oportunidade vacinal.',
    comentariosAlternativas: {
      A: 'Correta. Vasto lateral da coxa é o sítio de escolha em < 2 anos; manter ≥ 2,5 cm entre injeções no mesmo membro.',
      B: 'Incorreta. Proibido misturar vacinas diferentes na mesma seringa (causa inativação e incompatibilidade química).',
      C: 'Incorreta. O uso do glúteo em lactentes é contraindicado pelo risco de lesão do nervo ciático.',
      D: 'Incorreta. A aplicação simultânea de múltiplas vacinas é recomendada e segura.',
    },
  },
  {
    id: 'ped-imun-067',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Falsas Contraindicações à Vacinação Infantil',
    isRevisao: false,
    enunciado:
      'Lactente de 4 meses de vida é levado à UBS para receber a 2ª dose das vacinas do calendário (Pentavalente, VIP, Pneumocócica 10 e Rotavírus). A mãe informa que a criança está há 2 dias com coriza hialina leve, tosse esporádica e registrou febre axilar de 37,5 °C há 12 horas, mas encontra-se ativa, mamando muito bem ao seio e com exame físico normal, exceto por leve secreção nasal. Ela está usando gotas de soro fisiológico nasal. Diante do quadro, qual é a conduta correta do médico da UBS?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Proceder à aplicação de todas as vacinas agendadas normalmente; infecções respiratórias altas leves (como resfriado comum), febrícula ou uso de medicações tópicas não constituem contraindicação à vacinação e adiar a imunização representa uma oportunidade vacinal perdida inaceitável.',
      },
      {
        id: 'B',
        texto:
          'Suspender todas as vacinas e aguardar 60 dias de observação domiciliar estrita em isolamento respiratório.',
      },
      {
        id: 'C',
        texto:
          'Contraindicar definitivamente todas as vacinas da infância por risco de óbito fulminante por tempestade inflamatória.',
      },
      {
        id: 'D',
        texto:
          'Aplicar apenas a vacina de rotavírus e encaminhar a criança para internação em UTI pediátrica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As falsas contraindicações à vacinação continuam sendo uma das principais causas de atraso vacinal e queda de coberturas no Brasil. De acordo com o Ministério da Saúde e a Organização Mundial da Saúde, NÃO são contraindicações para qualquer vacina:\n- Resfriado comum, coriza, tosse discreta, diarreia leve;\n- Febrícula ou febre baixa (< 38,0 °C - 38,5 °C);\n- Desnutrição leve ou moderada;\n- Icterícia neonatal fisiológica fisiológica ou prematuridade estável;\n- Uso de antibióticos orais ou corticoides tópicos/inalatórios;\n- História familiar de eventos adversos a vacinas ou alergias inespecíficas.\nApenas doenças febris agudas moderadas a graves e toxêmicas justificam o adiamento temporário da vacinação (para não mascarar a evolução da doença de base). Esse lactente está estável, ativo e deve ser vacinado imediatamente.',
    comentariosAlternativas: {
      A: 'Correta. Sintomas catarrais leves sem toxemia constituem falsa contraindicação; as vacinas devem ser aplicadas.',
      B: 'Incorreta. Adiar vacinas por resfriado comum gera atraso vacinal indevido e risco de infecções graves.',
      C: 'Incorreta. Não existe fundamento biológico para essa conduta.',
      D: 'Incorreta. A criança está estável e não requer internação em terapia intensiva.',
    },
  },
  {
    id: 'ped-imun-068',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Corticoterapia Sistêmica e Vacinas de Vírus Vivos Atenuados',
    isRevisao: false,
    enunciado:
      'Menino de 5 anos com asma persistente moderada utiliza dipropionato de beclometasona inalatório diariamente em dose profilática baixa e usou prednisolona oral na dose de 1 mg/kg/dia por apenas 3 dias devido a uma crise leve de broncoespasmo há 10 dias, com remissão completa dos sintomas respiratórios. A mãe o leva para receber uma dose em atraso da vacina de Febre Amarela e Varicela (ambas de vírus vivo atenuado). Considerando as regras de imunossupressão por corticoterapia do PNI / CRIE, qual é a orientação técnica correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A criança PODE receber as vacinas de vírus vivos atenuados normalmente; doses de corticoterapia por período curto (< 14 dias), doses baixas ou moderadas de corticoide sistêmico e o uso de corticoide inalatório ou tópico NÃO são imunossupressores e não contraindicam vacinas atenuadas.',
      },
      {
        id: 'B',
        texto:
          'As vacinas de vírus vivos estão contraindicadas para o resto da vida de qualquer paciente que tenha usado qualquer gota de corticoide inalatório.',
      },
      {
        id: 'C',
        texto:
          'A criança deve ser considerada imunodeprimida grave e deve receber transfusão de medula óssea antes de tomar qualquer vacina.',
      },
      {
        id: 'D',
        texto:
          'As vacinas vivas devem ser suspensas por no mínimo 5 anos consecutivos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A definição de corticoterapia imunossupressora que contraindica temporariamente vacinas de vírus vivos atenuados (como Tríplice Viral, Varicela, Febre Amarela e BCG) exige:\n- Dose de prednisona ou equivalente ≥ 2 mg/kg/dia (ou ≥ 20 mg/dia para quem pesa mais de 10 kg) por um período prolongado (≥ 14 dias consecutivos).\nNessas circunstâncias de alta dosagem prolongada, aguarda-se um intervalo de pelo menos 30 dias (1 mês) após a suspensão do corticoide para aplicar vacinas de vírus vivos.\nPor outro lado, NÃO são contraindicações:\n1) Corticoterapia por curto período (< 14 dias), qualquer que seja a dose;\n2) Corticoterapia em dias alternados ou doses baixas/fisiológicas de manutenção;\n3) Corticoterapia inalatória, tópica dérmica, ocular ou nasal. Portanto, a criança pode ser vacinada sem qualquer restrição.',
    comentariosAlternativas: {
      A: 'Correta. Corticoide por < 14 dias e corticoide inalatório não são imunossupressores e não impedem vacinas vivas.',
      B: 'Incorreta. Corticoide inalatório em doses habituais tem absorção sistêmica mínima e não contraindica vacinas.',
      C: 'Incorreta. A criança não é imunodeficiente e não necessita de transplante de medula.',
      D: 'Incorreta. Mesmo quando há imunossupressão de alta dose prolongada, o intervalo de segurança exigido é de 30 dias, e não 5 anos.',
    },
  },
  {
    id: 'ped-imun-069',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Vacinação do Prematuro e Idade Cronológica',
    isRevisao: false,
    enunciado:
      'Recém-nascido pré-termo de 28 semanas de idade gestacional encontra-se internado na Unidade de Cuidados Intermediários Neonatais (UCIN), clinicamente estável, em ganho ponderal consistente, com peso atual de 2.100 g e completando exatamente 2 meses de idade cronológica (60 dias de vida). A equipe multiprofissional discute a administração das vacinas habituais do segundo mês de vida. Assinale a conduta correta de acordo com as normas técnicas de imunização do recém-nascido prematuro:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar as vacinas Pentavalente, VIP e Pneumocócica 10-valente de acordo com a IDADE CRONOLÓGICA (2 meses) e na dose integral recomendada; porém POSTERGAR a vacina oral de Rotavírus enquanto o prematuro permanecer internado na unidade neonatal hospitalar para evitar a disseminação nosocomial do vírus vacinal a outros leitos.',
      },
      {
        id: 'B',
        texto:
          'Utilizar a idade gestacional corrigida em vez da idade cronológica, postergando todas as vacinas até que a criança atinja 40 semanas de idade corrigida.',
      },
      {
        id: 'C',
        texto:
          'Fracionar as doses de todas as vacinas pela metade devido ao menor peso e menor volemia do prematuro.',
      },
      {
        id: 'D',
        texto:
          'Contraindicar a vacina inativada da poliomielite (VIP) e administrar apenas a vacina oral viva de rotavírus dentro da incubadora.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A regra fundamental da vacinação em prematuros é: PREMATUROS DEVEM SER VACINADOS DE ACORDO COM A SUA IDADE CRONOLÓGICA (idade pós-natal real), sem descontar a prematuridade (sem usar a idade corrigida) e utilizando a DOSE INTEGRAL dos imunobiológicos (não se fraciona dose de vacina por peso ou prematuridade!).\nNo entanto, há uma particularidade crucial em relação à vacina do Rotavírus (VRH viva atenuada): crianças internadas em berçários ou UTIs/UCINs neonatais NÃO devem receber a vacina de rotavírus durante a internação hospitalar, pelo risco teórico de eliminação viral nas fezes e transmissão nosocomial a outros prematuros gravemente enfermos no mesmo ambiente. A vacina é administrada logo após a alta hospitalar, desde que ainda dentro da janela etária permitida (até 3 meses e 15 dias). As demais vacinas (Pentavalente, VIP, Pneumo) são inativadas e devem ser aplicadas na data certa.',
    comentariosAlternativas: {
      A: 'Correta. Vacina-se pela idade cronológica e dose integral; VRH adiada enquanto hospitalizado em ambiente coletivo.',
      B: 'Incorreta. Não se utiliza idade corrigida para calendário vacinal rotineiro; usa-se a idade cronológica.',
      C: 'Incorreta. Doses vacinais nunca devem ser fracionadas ou reduzidas para prematuros.',
      D: 'Incorreta. VIP é mandatória; VRH é a única contraindicada no leito de internação neonatal.',
    },
  },
  {
    id: 'ped-imun-070',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Segunda Dose da Vacina de Varicela aos 4 Anos no PNI',
    isRevisao: false,
    enunciado:
      'Uma menina de 4 anos de idade comparece à UBS para a consulta de puericultura. A enfermeira aplica as vacinas de rotina dessa idade, incluindo a segunda dose da vacina contra a Varicela (monovalente atenuada). A mãe relata que a filha já havia tomado a vacina Tetraviral aos 15 meses e pergunta por que motivo o Ministério da Saúde decidiu incluir essa segunda dose aos 4 anos no calendário. Qual é a resposta fundamentada correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A segunda dose da vacina contra a varicela corrige falhas vacinais primárias da primeira dose (cerca de 10 a 15% das crianças não soroconvertem ou mantêm títulos baixos após uma dose única), eleva a eficácia para mais de 98% contra qualquer forma de varicela e previne a ocorrência de surtos de catapora em creches e pré-escolas.',
      },
      {
        id: 'B',
        texto:
          'A primeira dose protege exclusivamente contra o vírus do herpes simples tipo 1, sendo a segunda dose a única voltada ao vírus varicela-zóster.',
      },
      {
        id: 'C',
        texto:
          'A segunda dose serve apenas para induzir febre terapêutica e curar infecções parasitárias intestinais crônicas.',
      },
      {
        id: 'D',
        texto:
          'O objetivo exclusivo é substituir a vacina contra a difteria e o tétano na infância.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Uma única dose da vacina contra a varicela (administrada aos 15 meses via Tetraviral) confere cerca de 80 a 85% de proteção contra qualquer forma clínica de varicela e > 95% contra formas graves/hospitalizações. No entanto, aproximadamente 10% a 15% dos vacinados em dose única ainda podem desenvolver formas atenuadas da doença ("breakthrough varicella") e sustentar surtos escolares. Por essa razão, a Organização Mundial da Saúde, a Sociedade Brasileira de Pediatria e o PNI consolidaram o ESQUEMA DE 2 DOSES: a primeira aos 15 meses (Tetraviral) e a segunda aos 4 anos de idade (Varicela monovalente). Com duas doses, a eficácia se aproxima de 100%, reduzindo a circulação comunitária e interrompendo surtos escolares.',
    comentariosAlternativas: {
      A: 'Correta. A 2ª dose aos 4 anos combate falhas primárias, atinge > 98% de proteção e previne surtos em pré-escolas.',
      B: 'Incorreta. A vacina é específica para o vírus Varicela-Zóster (VVZ), sem relação com herpes simples.',
      C: 'Incorreta. Afirmação sem qualquer base científica.',
      D: 'Incorreta. A vacina de varicela não substitui as vacinas contra difteria e tétano.',
    },
  },
  {
    id: 'ped-imun-071',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Vacina DTP - Limite Etário do Componente Pertussis de Célula Inteira',
    isRevisao: false,
    enunciado:
      'Um menino de 7 anos e 4 meses de idade comparece ao centro de saúde para atualizar a vacinação. O prontuário revela que ele nunca recebeu a dose de reforço da vacina tríplice bacteriana (DTP) prevista para os 4 anos. Diante da idade atual da criança, qual é a vacina preconizada pelo Ministério da Saúde para atualizar a proteção contra difteria e tétano e qual é a justificativa técnica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar a vacina dupla tipo adulto (dT); a vacina tríplice bacteriana com componente pertussis de célula inteira (DTP) só pode ser administrada até os 6 anos, 11 meses e 29 dias devido ao aumento significativo da reatogenicidade (febre alta, reações locais intensas e neurológicas) em crianças a partir de 7 anos.',
      },
      {
        id: 'B',
        texto:
          'Administrar a vacina DTP celular em dose tripla profunda para compensar o atraso acumulado.',
      },
      {
        id: 'C',
        texto:
          'Aplicar a vacina Pentavalente no glúteo esquerdo acompanhada de penicilina benzatina.',
      },
      {
        id: 'D',
        texto:
          'Contraindicar qualquer vacina antitetânica ou antidiftérica pelo resto da vida.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A vacina DTP (composta por toxoide diftérico em quantidade infantil "D", toxoide tetânico "T" e suspensão de células inteiras inativadas de Bordetella pertussis "P") possui um LIMITE RIGOROSO DE IDADE NO PNI: ela só pode ser administrada até os 6 anos, 11 meses e 29 dias de idade. A partir dos 7 anos completos, a administração do componente pertussis de célula inteira e das altas concentrações de toxoide diftérico infantil associa-se a taxas inaceitavelmente altas de reatogenicidade sistêmica e reações febris intensas. Portanto, a partir dos 7 anos, a atualização vacinal contra tétano e difteria na rede pública deve ser realizada com a vacina DUPLA ADULTO (dT - com teor reduzido de toxoide diftérico "d"), ou com dTpa (tríplice bacteriana acelular tipo adulto) na rede privada/CRIE se indicado.',
    comentariosAlternativas: {
      A: 'Correta. A partir dos 7 anos a DTP celular é contraindicada pela alta reatogenicidade; usa-se a dT (dupla adulto).',
      B: 'Incorreta. DTP celular é formalmente contraindicada para maiores de 7 anos e nunca se triplica a dose.',
      C: 'Incorreta. A vacina Pentavalente é restrita a menores de 7 anos pelo mesmo componente pertussis celular.',
      D: 'Incorreta. A proteção contra difteria e tétano deve ser atualizada com a dT a cada 10 anos.',
    },
  },
  {
    id: 'ped-imun-072',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Fim da VOP e Consolidação do Esquema 100% VIP no Brasil',
    isRevisao: false,
    enunciado:
      'Em 2024, o Brasil concluiu a substituição histórica das doses orais da vacina contra a poliomielite (VOPb - gotinha) pelo esquema exclusivo com a Vacina Inativada da Poliomielite (VIP - injetável) aos 2, 4 e 6 meses e nos dois reforços (aos 15 meses e aos 4 anos). Qual foi a principal justificativa sanitária e epidemiológica global para a extinção definitiva da vacina atenuada oral (VOP) no calendário oficial?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Eliminar definitivamente o risco de Poliomielite Associada à Vacina (VAPP) e o surgimento de poliovírus derivados da cepa vacinal (cVDPV), uma vez que a VIP é composta por vírus inativados (mortos) incapazes de sofrer reversão à neurovirulência.',
      },
      {
        id: 'B',
        texto:
          'A VIP cura a paralisia infantil em pacientes que já apresentam atrofia muscular congênita instalada.',
      },
      {
        id: 'C',
        texto:
          'A VOP foi descontinuada porque protegia apenas contra bactérias gram-positivas da cavidade oral.',
      },
      {
        id: 'D',
        texto:
          'A vacina oral foi suspensa porque tornava obrigatório o isolamento em câmara de vácuo hospitalar por 1 ano.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A vacina oral de poliovírus (VOP - cepas atenuadas Sabin) foi o pilar fundamental para a erradicação do poliovírus selvagem nas Américas (cujo último caso no Brasil ocorreu em 1989), pois induzia excelente imunidade secretora intestinal (IgA) e bloqueava a disseminação fecal-oral. Contudo, por conter vírus vivos atenuados com replicação no trato gastrointestinal, a VOP apresentava dois graves efeitos colaterais biológicos raros:\n1) Paralisia Flácida Associada à Vacina (VAPP) em vacinados ou seus contactantes imediatos;\n2) Em comunidades com baixa cobertura vacinal, o vírus vacinal eliminado nas fezes podia sofrer mutações cumulativas ao longo de meses/anos, revertendo à neurovirulência e originando poliovírus derivados da vacina circulantes (cVDPV).\nA transição para o esquema 100% VIP (vírus mortos/inativados Salk - tipos 1, 2 e 3) elimina 100% o risco de VAPP e cVDPV, sendo a etapa final mandatória para a erradicação mundial e sustentação da segurança biológica da poliomielite.',
    comentariosAlternativas: {
      A: 'Correta. O esquema exclusivo com VIP elimina o risco de VAPP e de poliovírus circulantes derivados da vacina (cVDPV).',
      B: 'Incorreta. Nenhuma vacina reverte paralisia flácida crônica já consolidada.',
      C: 'Incorreta. Poliovírus é um enterovírus de RNA e não tem relação com bactérias orais.',
      D: 'Incorreta. Justificativa absurda sem qualquer fundamento científico.',
    },
  },
  {
    id: 'ped-imun-073',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Reforço da Vacina Febre Amarela aos 4 Anos de Idade',
    isRevisao: false,
    enunciado:
      'Uma criança de 4 anos recebe na UBS uma dose de reforço da vacina contra a Febre Amarela. A mãe comenta ter ouvido na televisão que "a vacina da febre amarela confere proteção para a vida inteira com dose única" e pergunta por que seu filho precisa desse reforço aos 4 anos. O médico pediatra explica que:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A recomendação de dose única para a vida toda aplica-se a indivíduos vacinados a partir dos 2 anos de idade; no entanto, quando a primovacinação ocorre em lactentes menores de 2 anos (como aos 9 meses no PNI), os estudos demonstraram queda progressiva dos anticorpos neutralizantes, justificando uma dose de reforço aos 4 anos para manutenção da imunidade a longo prazo.',
      },
      {
        id: 'B',
        texto:
          'O reforço é necessário para que a criança possa viajar para o exterior exclusivamente como passageiro de navio.',
      },
      {
        id: 'C',
        texto:
          'A vacina aplicada aos 9 meses perde a eficácia se a criança tiver contato com picada de abelha.',
      },
      {
        id: 'D',
        texto:
          'O Ministério da Saúde exige que todas as pessoas de qualquer idade tomem a vacina da febre amarela a cada 6 meses.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Organização Mundial da Saúde (OMS) definiu em 2013 que uma dose única da vacina da Febre Amarela confere imunidade vitalícia para adultos e crianças primovacinadas após os 2 anos. Todavia, investigações imunológicas conduzidas no Brasil (especialmente por Bio-Manguinhos/Fiocruz) comprovaram que lactentes que recebem a primeira dose aos 9 meses de vida (fase de maturação do sistema imune e eventual interferência residual de anticorpos maternos) apresentam queda gradual dos títulos de anticorpos protetores com o passar dos anos, tornando-se suscetíveis na fase pré-escolar/escolar. Em razão dessa evidência, o Ministério da Saúde estabeleceu que todas as crianças que receberam a primovacinação antes dos 2 anos de vida devem receber UMA DOSE DE REFORÇO AOS 4 ANOS DE IDADE.',
    comentariosAlternativas: {
      A: 'Correta. Crianças primovacinadas < 2 anos (aos 9 meses) perdem títulos de anticorpos e necessitam do reforço aos 4 anos.',
      B: 'Incorreta. A indicação baseia-se em perfil de resposta imunológica e risco epidemiológico, não em viagens navais.',
      C: 'Incorreta. Picadas de insetos comuns não inativam anticorpos neutralizantes da febre amarela.',
      D: 'Incorreta. Não existe periodicidade semestral para a vacina de febre amarela.',
    },
  },
  {
    id: 'ped-imun-074',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Vacina contra a Dengue (Qdenga) no SUS - Esquema e Indicações',
    isRevisao: false,
    enunciado:
      'Com a incorporação da vacina contra a Dengue atenuada tetravalente (Qdenga) ao Sistema Único de Saúde (SUS), o Ministério da Saúde definiu critérios prioritários de operacionalização técnica. A respeito dessa vacina no contexto pediátrico e de saúde pública, assinale a opção correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A vacina é administrada em esquema de DUAS DOSES por via subcutânea, com intervalo de 3 meses (0 e 3 meses), indicada para a faixa prioritária de 10 a 14 anos no SUS, e pode ser administrada tanto em indivíduos soropositivos (com infecção prévia por dengue) quanto soronegativos (sem infecção prévia).',
      },
      {
        id: 'B',
        texto:
          'A vacina só pode ser aplicada após realização de sorologia IgG prévia obrigatória, sendo contraindicada para quem nunca teve dengue.',
      },
      {
        id: 'C',
        texto:
          'O esquema preconizado é de dose única oral disponibilizada universalmente para lactentes de 2 meses.',
      },
      {
        id: 'D',
        texto:
          'A vacina contra a dengue é composta por vírus mortos inativados e pode ser aplicada livremente em gestantes e imunodeprimidos graves.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A vacina contra a dengue incorporada ao SUS é a Qdenga (TAK-003, Takeda), uma vacina viva quimérica atenuada tetravalente contra os sorotipos 1, 2, 3 e 4 da dengue. Suas principais características epidemiológicas e normativas são:\n1) Esquema posológico: DUAS DOSES aplicadas por via subcutânea, com intervalo de 3 meses;\n2) População-alvo inicial no SUS: crianças e adolescentes de 10 a 14 anos (faixa etária que concentra grande taxa de internações por dengue fora dos idosos);\n3) Amplo espectro: independe de infecção prévia (indivíduos soronegativos e soropositivos podem receber);\n4) Contraindicações: por ser de vírus vivo atenuado, é formalmente contraindicada em gestantes, lactantes e pessoas com imunodeficiência primária ou adquirida grave.',
    comentariosAlternativas: {
      A: 'Correta. Esquema de 2 doses (intervalo de 3 meses), indicada dos 10 aos 14 anos no SUS, independente do status sorológico.',
      B: 'Incorreta. A Qdenga não requer teste sorológico prévio (diferente da antiga vacina Dengvaxia que exigia soropositividade).',
      C: 'Incorreta. É injetável subcutânea para adolescentes, não oral para lactentes de 2 meses.',
      D: 'Incorreta. É de vírus vivo atenuado, sendo contraindicada em gestantes e imunossuprimidos.',
    },
  },
  {
    id: 'ped-imun-075',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Cadeia de Frio e Conduta em Excursão Térmica na Sala de Vacina',
    isRevisao: false,
    enunciado:
      'Durante a abertura matinal de uma Unidade Básica de Saúde, a técnica de enfermagem constata que o termômetro de momento, máxima e mínima da câmara fria de vacinas acusa temperatura atual de +12 °C (máxima atingida de +13,5 °C) em virtude de uma queda de energia elétrica ocorrida durante o fim de semana. A faixa ideal preconizada pelo Manual de Rede de Frio do PNI é de +2 °C a +8 °C (ideal +5 °C). Diante dessa situação de excursão térmica, qual é a conduta técnica imediata e correta a ser adotada pela equipe de saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Fechar a câmara, restabelecer a refrigeração (ou transferir os imunobiológicos para caixas térmicas com gelo reciclado a +2 °C a +8 °C), NÃO descartar nem aplicar nenhuma vacina imediatamente, suspender a vacinação e notificar a instância de vigilância epidemiológica / central de imunobiológicos municipal com o relatório do tempo e temperatura para análise de termoestabilidade e liberação ou descarte oficial.',
      },
      {
        id: 'B',
        texto:
          'Descartar imediatamente todos os frascos de vacina no lixo comum infectante sem avisar ninguém e fechar o posto de saúde por 30 dias.',
      },
      {
        id: 'C',
        texto:
          'Aplicar todas as vacinas da câmara nos primeiros pacientes que chegarem à fila para "não perder o estoque".',
      },
      {
        id: 'D',
        texto:
          'Colocar os frascos de vacina dentro do congelador doméstico a -20 °C para recongelar rapidamente os imunobiológicos adsorvidos em alumínio.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A cadeia de frio é a engrenagem logística essencial para preservar a potência e a estabilidade dos imunobiológicos desde a fabricação até a administração. A temperatura preconizada de armazenamento em nível local (salas de vacina) situa-se estritamente entre +2 °C e +8 °C (com alvo em +5 °C). Havendo falha na cadeia de frio (excursão de temperatura acima de +8 °C ou congelamento acidental abaixo de +2 °C):\n1) Manter a câmara fechada ou transferir com urgência os lotes para caixas térmicas reguladas entre +2 °C e +8 °C;\n2) Interromper o uso das vacinas suspeitas (NÃO aplicar sob hipótese alguma);\n3) NÃO descartar sumariamente os produtos;\n4) Registrar detalhadamente a temperatura máxima/mínima alcançada e o tempo aproximado de exposição térmica e notificar formalmente a coordenação da Rede de Frio / Vigilância Epidemiológica. O setor de controle de qualidade avaliará a termoestabilidade das formulações (muitas vacinas inativadas suportam determinadas excursões sem perda de eficácia) para autorizar formalmente o uso ou o descarte regular.',
    comentariosAlternativas: {
      A: 'Correta. Manter refrigeração adequada, suspender uso temporariamente e notificar instância de vigilância para avaliação de termoestabilidade.',
      B: 'Incorreta. O descarte direto causa prejuízo financeiro e desabastecimento injustificados, pois várias vacinas mantêm termoestabilidade.',
      C: 'Incorreta. Prática perigosa e antiética; vacinas com potência comprometida não podem ser aplicadas em pacientes.',
      D: 'Incorreta. O congelamento inativa e desestabiliza vacinas adsorvidas em adjuvante de alumínio (Pentavalente, Hepatite B, DTP).',
    },
  },
  {
    id: 'ped-imun-076',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'CRIE - Profilaxia do VSR com Palivizumabe em Prematuros Extremos',
    isRevisao: false,
    enunciado:
      'Lactente de 5 meses de idade cronológica nasceu prematuro extremo com 27 semanas de idade gestacional e peso de 980 gramas, tendo permanecido em ventilação mecânica invasiva e recebido alta da UTI neonatal sem necessidade de suporte ventilatório domiciliar. A família reside no estado de São Paulo e o mês atual é março (início do período de sazonalidade regional do Vírus Sincicial Respiratório - VSR). A respeito da indicação de imunoprofilaxia passiva com Palivizumabe no SUS via CRIE, assinale a conduta médica correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Indicar formalmente o Palivizumabe na dose de 15 mg/kg por via intramuscular uma vez ao mês durante a sazonalidade do VSR (até um máximo de 5 doses), pois crianças nascidas com idade gestacional menor que 29 semanas (até 28 semanas e 6 dias) têm direito ao anticorpo no primeiro ano de vida.',
      },
      {
        id: 'B',
        texto:
          'O Palivizumabe é contraindicado, pois lactentes sem displasia broncopulmonar têm imunidade natural absoluta contra bronquiolite viral.',
      },
      {
        id: 'C',
        texto:
          'Administrar vacina de vírus vivo atenuado contra o VSR por via oral em dose única diária.',
      },
      {
        id: 'D',
        texto:
          'Indicar o Palivizumabe apenas se a criança já estiver intubada na UTI com diagnóstico confirmado de bronquiolite por PCR.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Palivizumabe é um anticorpo monoclonal humanizado (IgG1) dirigido contra a proteína de fusão (proteína F) do Vírus Sincicial Respiratório (VSR). Trata-se de imunoprofilaxia passiva (não é vacina!), que reduz hospitalizações por bronquiolite viral aguda grave e pneumonia por VSR. No Brasil, a Portaria do Ministério da Saúde / CRIE preconiza a disponibilização gratuita do Palivizumabe (15 mg/kg IM mensal, até 5 doses no período de sazonalidade regional) para os seguintes grupos prioritários:\n1) Crianças nascidas prematuras com idade gestacional < 29 semanas (até 28 semanas e 6 dias), no primeiro ano de vida (até 11 meses e 29 dias);\n2) Crianças com displasia broncopulmonar / doença pulmonar crônica da prematuridade que necessitaram de tratamento médico (oxigênio, diurético, corticoide ou broncodilatador) nos últimos 6 meses, até 2 anos de idade;\n3) Crianças com cardiopatia congênita hemodinamicamente significativa, até 2 anos de idade.\nO lactente da questão cumpre perfeitamente o critério de prematuridade < 29 semanas no primeiro ano de vida.',
    comentariosAlternativas: {
      A: 'Correta. Prematuro < 29 semanas tem indicação formal de Palivizumabe no 1º ano de vida (até 5 doses na sazonalidade).',
      B: 'Incorreta. A prematuridade extrema isolada (< 29 semanas) é critério formal independente de displasia.',
      C: 'Incorreta. Palivizumabe é um anticorpo monoclonal injetável IM, não vacina atenuada oral.',
      D: 'Incorreta. O Palivizumabe é profilático e não tem efeito terapêutico em infecções agudas já estabelecidas.',
    },
  },
  {
    id: 'ped-imun-077',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'CRIE - Palivizumabe em Cardiopatias Congênitas com Repercussão',
    isRevisao: false,
    enunciado:
      'Criança de 14 meses de idade possui diagnóstico de Cardiopatia Congênita com hiperfluxo pulmonar significativo e insuficiência cardíaca congestiva controlada com furosemida e espironolactona, aguardando cirurgia corretiva definitiva. A mãe procura o Centro de Referência para Imunobiológicos Especiais (CRIE) no início da sazonalidade do Vírus Sincicial Respiratório (VSR). Qual é a diretriz do Ministério da Saúde para o fornecimento do Palivizumabe neste caso?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A criança tem indicação formal de receber Palivizumabe durante a sazonalidade do VSR (até 5 doses mensais), pois o protocolo do Ministério da Saúde contempla crianças com cardiopatia congênita com repercussão hemodinâmica comprovada até os 2 anos de idade (23 meses e 29 dias).',
      },
      {
        id: 'B',
        texto:
          'O Palivizumabe é restrito exclusivamente a menores de 6 meses de vida, estando formalmente contraindicado no segundo ano de vida.',
      },
      {
        id: 'C',
        texto:
          'Cardiopatas congênitos só têm indicação se apresentarem malformação de membros associada.',
      },
      {
        id: 'D',
        texto:
          'Deve-se prescrever ribavirina oral profilática contínua por 12 meses em substituição ao anticorpo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As cardiopatias congênitas com repercussão hemodinâmica significativa (hipertensão pulmonar, insuficiência cardíaca em uso de medicamentos como diuréticos/inibidores da ECA, ou lesões cianóticas com hipoxemia) configuram elevado risco de descompensação cardiorrespiratória grave, choque e óbito quando infectadas pelo VSR. Por essa razão, o protocolo oficial do Ministério da Saúde (PNI/CRIE) e da Sociedade Brasileira de Pediatria contempla a profilaxia passiva com Palivizumabe (15 mg/kg IM a cada 30 dias na sazonalidade) para crianças com cardiopatia congênita com repercussão hemodinâmica ATÉ OS 2 ANOS DE IDADE (até 23 meses e 29 dias de vida). Crianças com cardiopatias corrigidas sem lesão residual ou sem repercussão hemodinâmica não preenchem critério.',
    comentariosAlternativas: {
      A: 'Correta. Cardiopatas com repercussão hemodinâmica têm indicação de Palivizumabe até 2 anos de idade.',
      B: 'Incorreta. Para cardiopatas e pneumopatas crônicos da prematuridade, o limite estende-se até os 2 anos (23m29d).',
      C: 'Incorreta. Malformações de membros não constituem critério clínico para Palivizumabe.',
      D: 'Incorreta. Ribavirina não é indicada como profilaxia ambulatorial de VSR no SUS.',
    },
  },
  {
    id: 'ped-imun-078',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'CRIE - Palivizumabe em Doença Pulmonar Crônica da Prematuridade',
    isRevisao: false,
    enunciado:
      'Lactente de 18 meses de vida nasceu com 30 semanas de idade gestacional e desenvolveu Displasia Broncopulmonar grave. Nos últimos 6 meses, necessitou de uso domiciliar contínuo de corticoide inalatório e broncodilatador de longa ação por frequentes episódios de sibilância e dependência intermitente de oxigênio. Com a aproximação do período sazonal de infecção pelo VSR em sua região, a conduta no CRIE é:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Prescrever e administrar o Palivizumabe durante a sazonalidade regional (15 mg/kg IM a cada 30 dias, até 5 doses), pois crianças com doença pulmonar crônica da prematuridade que necessitaram de tratamento nos 6 meses prévios à sazonalidade têm indicação até os 2 anos de idade.',
      },
      {
        id: 'B',
        texto:
          'Negar o Palivizumabe, pois a idade gestacional ao nascer foi superior a 28 semanas e 6 dias, o que anula qualquer outra indicação clínica.',
      },
      {
        id: 'C',
        texto:
          'Prescrever amoxicilina com clavulanato em dose profilática diária durante todo o outono e inverno.',
      },
      {
        id: 'D',
        texto:
          'Indicar infusão de plasma fresco congelado semanalmente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Displasia Broncopulmonar (ou Doença Pulmonar Crônica da Prematuridade) altera a arquitetura alveolar e a mecânica respiratória, predispondo à falência respiratória catastrófica pelo VSR. A norma do Ministério da Saúde é clara: crianças com pneumopatia crônica da prematuridade que tenham necessitado de intervenção médica (oxigenoterapia, broncodilatador, diurético ou corticoide) nos últimos 6 meses que antecedem a sazonalidade possuem indicação de Palivizumabe até completarem 2 anos de idade (23 meses e 29 dias). O critério de idade gestacional < 29 semanas aplica-se à prematuridade ISOLADA sem doença pulmonar; a presença de doença pulmonar crônica clinicamente ativa amplia o critério para crianças nascidas com qualquer idade gestacional.',
    comentariosAlternativas: {
      A: 'Correta. Crianças com doença pulmonar crônica da prematuridade em tratamento recente têm indicação até 2 anos.',
      B: 'Incorreta. O critério de 28 semanas e 6 dias é para prematuridade pura; com displasia pulmonar ativa a indicação vai até 2 anos.',
      C: 'Incorreta. Antibióticos não atuam contra infecções virais pelo VSR e não previnem bronquiolite.',
      D: 'Incorreta. Plasma fresco congelado não tem papel na profilaxia respiratória do VSR.',
    },
  },
  {
    id: 'ped-imun-079',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Crianças com Câncer / Leucemia - Contraindicações e Recomendações',
    isRevisao: false,
    enunciado:
      'Menino de 4 anos de vida, em tratamento quimioterápico para Leucemia Linfoide Aguda (LLA) na fase de manutenção, é levado à consulta ambulatorial. A mãe informa que a escola está exigindo a caderneta de vacinação atualizada, cobrando os reforços dos 4 anos (DTP, VIP, Febre Amarela e Varicela). Qual é a conduta médica correta para esse paciente imunocomprometido?',
    alternativas: [
      {
        id: 'A',
        texto:
          'CONTRAINDICAR formalmente as vacinas de vírus vivos atenuados (Febre Amarela e Varicela) devido ao risco gravíssimo de disseminação e replicação do vírus vacinal com doença potencialmente fatal; administrar vacinas inativadas com indicações especiais no CRIE (como pneumocócica conjugada, meningo conjugada e influenza inativada).',
      },
      {
        id: 'B',
        texto:
          'Administrar todas as vacinas da rotina dos 4 anos normalmente, pois a quimioterapia aumenta a permeabilidade imunológica aos vírus atenuados.',
      },
      {
        id: 'C',
        texto:
          'Vacinas inativadas são proibidas em portadores de neoplasia hematológica, sendo permitidas apenas vacinas atenuadas vivas.',
      },
      {
        id: 'D',
        texto:
          'Prescrever apenas a vacina oral contra a febre tifóide e dispensar as demais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Pacientes pediátricos com neoplasias malignas hematológicas (como LLA) em quimioterapia imunossupressora apresentam imunossupressão celular e humoral profunda. Nesses pacientes, VACINAS DE VÍRUS VIVOS OU BACTÉRIAS VIVAS ATENUADAS (Febre Amarela, Varicela, Tríplice Viral, BCG, Rotavírus, Dengue) são FORMALMENTE CONTRAINDICADAS, pois o organismo é incapaz de restringir a replicação viral da cepa vacinal, resultando em viremia fulminante, encefalite ou falência de múltiplos órgãos. Por outro lado, vacinas INATIVADAS (como Influenza inativada, COVID-19, Pneumocócicas conjugadas, Meningocócicas conjugadas, DTPa/dT, VIP e Hepatite B) podem ser administradas de acordo com as diretrizes do CRIE, embora a resposta humoral possa ser subótima. A revacinação com agentes atenuados só deve ser programada geralmente 3 a 6 meses após o término definitivo de toda a quimioterapia.',
    comentariosAlternativas: {
      A: 'Correta. Vacinas de vírus vivos são contraindicadas na quimioterapia; vacinas inativadas indicadas pelo CRIE.',
      B: 'Incorreta. Administrar vacinas vivas atenuadas em imunodeprimidos severos pode levar ao óbito por doença vacinal invasiva.',
      C: 'Incorreta. Vacinas inativadas são seguras (não replicam), enquanto as vivas atenuadas é que são contraindicadas.',
      D: 'Incorreta. Febre tifóide oral é de bactéria viva atenuada, sendo também contraindicada.',
    },
  },
  {
    id: 'ped-imun-080',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Vacinação em Crianças com HIV - Critérios Imunológicos de CD4',
    isRevisao: false,
    enunciado:
      'Lactente de 12 meses com infecção pelo HIV por transmissão vertical comparece com a cuidadora ao CRIE para avaliar a administração da vacina Tríplice Viral (SCR) e Varicela. O exame recente mostra carga viral indetectável e porcentagem de linfócitos T CD4+ de 28% (contagem absoluta de 1.100 céls/mm³), correspondendo à ausência de evidência de imunodeficiência para a faixa etária. De acordo com o Manual do CRIE do Ministério da Saúde:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A criança PODE e DEVE receber as vacinas Tríplice Viral e Varicela; crianças infectadas pelo HIV sem imunossupressão grave (percentual de linfócitos T CD4+ ≥ 15% em maiores de 12 meses) apresentam segurança e benefício comprovados na imunização com SCR e varicela para evitar o sarampo e varicela graves.',
      },
      {
        id: 'B',
        texto:
          'O diagnóstico de infecção pelo HIV contraindica absolutamente qualquer vacina em qualquer faixa etária, mesmo se o paciente for assintomático e com CD4 normal.',
      },
      {
        id: 'C',
        texto:
          'A vacina Tríplice Viral só pode ser aplicada se a contagem de CD4 estiver rigorosamente abaixo de 5% de linfócitos totais.',
      },
      {
        id: 'D',
        texto:
          'Deve-se aplicar a vacina da febre amarela com o dobro da dose e contraindicar a Tríplice Viral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A infecção pelo HIV não contraindica automaticamente todas as vacinas de vírus vivos atenuados. O critério determinante no PNI / CRIE é o GRAU DE IMUNOSSUPRESSÃO expresso pela porcentagem ou contagem de linfócitos T CD4+:\n- Em crianças entre 1 e 5 anos: se CD4+ ≥ 15% (sem imunossupressão grave), as vacinas Tríplice Viral (SCR) e Varicela são RECOMENDADAS e devem ser aplicadas em seringas e sítios separados, pois o sarampo e a catapora selvagens causam pneumonia e encefalite letais nesses pacientes;\n- Se CD4+ < 15% (imunossupressão grave), essas vacinas de vírus vivos são FORMALMENTE CONTRAINDICADAS pelo risco de doença vacinal grave.\nAtenção: a vacina BCG é contraindicada em crianças com HIV sintomáticas ou com imunossupressão, e a vacina da Febre Amarela exige CD4 seguro (≥ 35% até 5 anos) ou contraindicação.',
    comentariosAlternativas: {
      A: 'Correta. Criança HIV com CD4 ≥ 15% (28% no caso) não tem imunossupressão grave e deve receber SCR e Varicela.',
      B: 'Incorreta. Portadores de HIV podem e devem receber várias vacinas, inclusive algumas vivas se CD4 preservado.',
      C: 'Incorreta. CD4 < 5% denota imunossupressão extrema, situação em que vacinas vivas são rigorosamente proibidas.',
      D: 'Incorreta. Não se dobra a dose da vacina de febre amarela e SCR é prioridade.',
    },
  },
  {
    id: 'ped-imun-081',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Imunodeficiência Combinada Grave (SCID) e Vacina BCG Disseminada',
    isRevisao: false,
    enunciado:
      'Recém-nascido hígido ao nascimento recebeu a vacina BCG intradérmica na maternidade. Aos 3 meses de vida, abre quadro de diarreia intratável, candidíase oral refratária, pneumonia por Pneumocystis jirovecii e desenvolve úlcera no local da BCG que cresce progressivamente, associada a linfadenopatia axilar e supraclavicular bilateral supurada, hepatoesplenomegalia e lesões osteolíticas. A investigação imunológica confirma o diagnóstico de Imunodeficiência Combinada Grave (SCID - deficiência de linfócitos T e B). Esse evento adverso grave denomina-se:',
    alternativas: [
      {
        id: 'A',
        texto:
          'BCGose disseminada (doença sistêmica por Mycobacterium bovis atenuado); ocorre em portadores de erros inatos da imunidade celular grave (como SCID), justificando a importância da triagem neonatal ampliada (teste do pezinho com TRECs) antes da vacinação em famílias com histórico.',
      },
      {
        id: 'B',
        texto:
          'Reação normal esperada da evolução da pápula da vacina BCG em 100% dos lactentes saudáveis.',
      },
      {
        id: 'C',
        texto:
          'Tétano neonatal fulminante causado pelo adjuvante de hidróxido de alumínio da BCG.',
      },
      {
        id: 'D',
        texto:
          'Síndrome hemolítico-urêmica desencadeada pela proteína de membrana do vírus da pólio.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A BCGose disseminada é a complicação mais temida da vacina BCG. Ela decorre da incapacidade do sistema imunológico do hospedeiro (especialmente imunidade mediada por linfócitos T e macrófagos) de conter a multiplicação do Mycobacterium bovis vivo atenuado. O bacilo dissemina-se hematogenicamente e acomete linfonodos à distância, fígado, baço, pulmões e ossos, cursando com altíssima letalidade se não tratada precocemente com esquema antimicobacteriano quadruplo (isoniazida, rifampicina, etambutol e outros) e transplante de células-tronco hematopoéticas. O advento da triagem neonatal por TRECs (T-cell receptor excision circles) permite detectar recém-nascidos com SCID antes de receberem a vacina BCG na maternidade, salvando vidas.',
    comentariosAlternativas: {
      A: 'Correta. Trata-se de BCGose disseminada secundária a SCID por falência da imunidade celular T.',
      B: 'Incorreta. A evolução normal da BCG restringe-se a pápula/úlcera de até 10 mm e crosta local, sem doença sistêmica.',
      C: 'Incorreta. A BCG é bacteriana viva sem alumínio e não tem qualquer relação com o tétano.',
      D: 'Incorreta. Não há qualquer associação fisiopatológica com SHU ou poliovírus.',
    },
  },
  {
    id: 'ped-imun-082',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Esquemas no CRIE para Asplenia Anatômica ou Funcional',
    isRevisao: false,
    enunciado:
      'Escolar de 7 anos foi vítima de trauma abdominal fechado por colisão ciclística, sendo submetido a laparotomia exploradora com esplenectomia total de urgência devido a rotura esplênica grau V. No planejamento de alta hospitalar, o cirurgião pediátrico encaminha o paciente ao CRIE. Crianças com asplenia anatômica ou funcional (como na anemia falciforme) possuem vulnerabilidade imunológica crítica a sepse fulminante ("overwhelming post-splenectomy infection" - OPSI). Quais são os três agentes bacterianos capsulados prioritários contra os quais o esquema vacinal deve ser imediatamente otimizado no CRIE?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Streptococcus pneumoniae (pneumococo), Neisseria meningitidis (meningococo) e Haemophilus influenzae tipo b (Hib).',
      },
      {
        id: 'B',
        texto:
          'Clostridium tetani, Corynebacterium diphtheriae e Bordetella pertussis.',
      },
      {
        id: 'C',
        texto:
          'Escherichia coli enteropatogênica, Shigella flexneri e Entamoeba histolytica.',
      },
      {
        id: 'D',
        texto:
          'Treponema pallidum, Leptospira interrogans e Borrelia burgdorferi.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O baço desempenha papel crucial na resposta imune primária contra microrganismos polissacarídicos capsulados: atua na filtração mecânica de hemácias e patógenos opsonizados por anticorpos e complemento, além de conter a zona marginal rica em linfócitos B e macrófagos produtores de anticorpos IgM e properdina. Pacientes com asplenia anatômica (pós-esplenectomia cirúrgica) ou funcional (anemia falciforme com autoesplenectomia por infartos de repetição) apresentam risco centenas de vezes maior de infecções sistêmicas hiperagudas com coagulação intravascular disseminada e choque séptico fatal, causadas classicamente por bactérias capsuladas:\n1) Streptococcus pneumoniae (mais de 50% dos casos de sepse pós-esplenectomia);\n2) Neisseria meningitidis (sorogrupos A, B, C, W, Y);\n3) Haemophilus influenzae tipo b (Hib).\nO CRIE disponibiliza esquemas ampliados com VPC13/15 + VPP23, MenACWY, MenB e Hib adicional.',
    comentariosAlternativas: {
      A: 'Correta. As três bactérias capsuladas clássicas causadoras de sepse pós-esplenectomia são pneumococo, meningococo e Hib.',
      B: 'Incorreta. Tétano, difteria e coqueluche causam doença por exotoxinas ou infecção respiratória, não sepse fulminante pós-esplenectomia.',
      C: 'Incorreta. Enteropatógenos intestinais não dependem prioritariamente da depuração esplênica da zona marginal.',
      D: 'Incorreta. Espiroquetas têm mecanismos de patogênese distintos e não são preveníveis por vacinas de rotina.',
    },
  },
  {
    id: 'ped-imun-083',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Corticoterapia em Síndrome Nefrótica e Intervalo para Vacinas Vivas',
    isRevisao: false,
    enunciado:
      'Menina de 3 anos com Síndrome Nefrótica por Lesões Mínimas acabou de concluir um ciclo de corticoterapia de ataque com prednisona oral na dose de 2 mg/kg/dia por 6 semanas, alcançando remissão completa da proteinúria e desmame medicamentoso ontem. A mãe pergunta quando poderá levar a criança para aplicar as doses em atraso da vacina Tríplice Viral e Febre Amarela (vírus vivos atenuados). De acordo com os manuais de vacinação do PNI / CRIE e da Sociedade Brasileira de Pediatria, qual é o intervalo mínimo recomendado após o término da corticoterapia em dose imunossupressora?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Aguardar um intervalo mínimo de 30 dias (1 mês) após a suspensão completa do corticoide em dose imunossupressora para a administração de qualquer vacina de vírus vivo atenuado.',
      },
      {
        id: 'B',
        texto:
          'Aplicar as vacinas imediatamente no dia seguinte ao término do corticoide, pois a imunidade celular recupera-se em 12 horas.',
      },
      {
        id: 'C',
        texto:
          'Aguardar no mínimo 10 anos antes de qualquer vacina viva atenuada.',
      },
      {
        id: 'D',
        texto:
          'As vacinas vivas devem ser administradas diluídas em cortisona tópica retal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A definição clássica de corticoterapia imunossupressora em pediatria é o uso de prednisona (ou equivalente) em dose ≥ 2 mg/kg/dia (ou ≥ 20 mg/dia para crianças > 10 kg) por um período superior a 14 dias consecutivos (como no caso, que usou 2 mg/kg/dia por 6 semanas). Durante esse período e nas semanas seguintes, há inibição substancial da imunidade celular mediada por linfócitos T. Para garantir a segurança do paciente e evitar a replicação descontrolada dos vírus vacinais atenuados, o Ministério da Saúde (PNI/CRIE) e o CDC determinam que se aguarde um intervalo de segurança de no mínimo 30 DIAS (1 MÊS) após a descontinuação do tratamento para que as vacinas de vírus vivos atenuados (SCR, Febre Amarela, Varicela) possam ser aplicadas com segurança e plena eficácia.',
    comentariosAlternativas: {
      A: 'Correta. Intervalo mínimo de 30 dias após suspensão de corticoterapia imunossupressora prolongada para vacinas vivas.',
      B: 'Incorreta. A imunocompetência não se restabelece em 12 horas; há risco de replicação do vírus atenuado.',
      C: 'Incorreta. Não há necessidade de aguardar 10 anos; 30 dias são suficientes para restauração funcional.',
      D: 'Incorreta. Conduta sem respaldo farmacológico ou biológico.',
    },
  },
  {
    id: 'ped-imun-084',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Profilaxia da Raiva Humana - Acidente Leve por Cão Sadio e Observável',
    isRevisao: false,
    enunciado:
      'Menina de 6 anos é levada ao pronto atendimento após ser mordida na panturrilha direita pelo cão de estimação da vizinha enquanto brincavam no quintal. Ao exame: escoriação puntiforme superficial única em panturrilha, sem sangramento ativo, sem acometimento de fáscia ou músculo (classificado como ferimento leve em membro inferior). O cão é conhecido, tem tutor responsável, está clinicamente sadio, vacinado contra raiva e permanecerá confinado em domicílio. Considerando o Guia de Vigilância em Saúde do Ministério da Saúde para profilaxia da Raiva Humana, qual é a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Lavar exaustivamente o ferimento com água corrente e sabão; NÃO iniciar vacina nem soro antirrábico neste momento; colocar o cão agressor sob observação clínica veterinária estrita por 10 dias. Se o animal permanecer vivo e saudável até o 10º dia, encerra-se o caso sem necessidade de imunoprofilaxia.',
      },
      {
        id: 'B',
        texto:
          'Indicar eutanásia imediata do cão para biópsia cerebral e aplicar soro antirrábico (SAR) infiltrado na ferida.',
      },
      {
        id: 'C',
        texto:
          'Administrar 10 doses consecutivas de vacina de tecido nervoso tipo Fuenzalida & Palacios.',
      },
      {
        id: 'D',
        texto:
          'Aplicar apenas iodo tópico e proibir a criança de tomar banho por 30 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A profilaxia pós-exposição da Raiva Humana segue rigorosamente o fluxograma do Ministério da Saúde:\n1) Classificação do acidente: mordedura superficial na perna = ACIDENTE LEVE;\n2) Condição do animal: cão domiciliado, sadio e passível de observação = CÃO PASSÍVEL DE OBSERVAÇÃO POR 10 DIAS.\nConduta: Lavagem imediata e abundante com água e sabão (elimina grande parte dos vírions por dissolver o envelope lipídico do Lyssavirus). NÃO se inicia vacina nem soro de imediato. Observa-se o cão por 10 dias (período no qual o cão raivoso invariavelmente adoece e morre se estiver eliminando vírus pela saliva). Se o cão permanecer são e vivo ao final do 10º dia, o caso é encerrado definitivamente. Se durante os 10 dias o animal adoecer, morrer ou desaparecer, inicia-se de imediato o esquema de vacinação com 4 doses (D0, D3, D7 e D14).',
    comentariosAlternativas: {
      A: 'Correta. Lavagem local e observação do cão por 10 dias; animal sadio descarta transmissão e encerra o caso.',
      B: 'Incorreta. Não se sacrifica cão saudável e observável; soro não está indicado para ferimento leve.',
      C: 'Incorreta. As vacinas de tecido nervoso foram abolidas do Brasil devido ao risco de encefalomielite desmielinizante.',
      D: 'Incorreta. Conduta estapafúrdia; a ferida deve ser limpa e a higiene mantida.',
    },
  },
  {
    id: 'ped-imun-085',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Profilaxia da Raiva Humana - Acidente Grave por Cão Observável',
    isRevisao: false,
    enunciado:
      'Lactente de 1 ano e 8 meses sofreu mordedura na face (bochecha esquerda) com duas lacerações profundas provocadas pelo cão de sua própria casa durante uma refeição. O cão é domiciliado, saudável, sem sinais de raiva e pode ser mantido sob observação domiciliar. Considerando que mordeduras em face, cabeça e mãos constituem ACIDENTES GRAVES pelo risco iminente de inoculação próxima ao sistema nervoso central, qual é a conduta preconizada pelo Ministério da Saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Lavar a ferida abundantemente com água e sabão; INICIAR imediatamente a vacina antirrábica com 2 doses (uma no dia 0 e outra no dia 3) e colocar o cão em observação por 10 dias. Se o cão permanecer saudável até o 10º dia, suspende-se o restante do esquema e encerra-se o caso.',
      },
      {
        id: 'B',
        texto:
          'Apenas observar o animal por 10 dias sem aplicar nenhuma vacina na criança, mesmo com lesão profunda na face.',
      },
      {
        id: 'C',
        texto:
          'Administrar soro antirrábico em dose dobrada por via intratecal e intubação orotraqueal imediata.',
      },
      {
        id: 'D',
        texto:
          'Aguardar 60 dias para colher líquor e só vacinar se a criança apresentar hidrofobia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'No protocolo brasileiro de profilaxia da raiva:\n- Lesões em face, pescoço, mãos ou pés, ferimentos profundos ou múltiplos = ACIDENTE GRAVE;\n- Condição do animal: cão/gato sadio e passível de observação por 10 dias.\nComo o sítio da mordedura é a face (alta inervação e curta distância anatômica até o encéfalo, encurtando o período de incubação), NÃO é prudente aguardar os 10 dias sem proteção vacinal. A conduta oficial é: LAVAR A FERIDA + INICIAR VACINAÇÃO com 2 DOSES (D0 e D3) enquanto o animal é observado. Se no 10º dia o animal estiver vivo e saudável: SUSPENDE-SE a vacinação e encerra-se o caso. Caso o animal adoeça, morra ou fuja: completa-se o esquema até 4 doses (D7 e D14) e AVALIA-SE a administração de Soro Antirrábico (SAR) ou IGHAR.',
    comentariosAlternativas: {
      A: 'Correta. Acidente grave por animal observável: vacinar no D0 e D3 e observar 10 dias; suspender se animal sadio.',
      B: 'Incorreta. Ferimento em face não permite apenas observação isolada devido à velocidade de progressão retrógrada aos neurônios.',
      C: 'Incorreta. Soro antirrábico nunca é administrado por via intratecal (risco letal).',
      D: 'Incorreta. Quando surgem sintomas clínicos de hidrofobia/raiva a letalidade aproxima-se de 100%; o tratamento é preventivo.',
    },
  },
  {
    id: 'ped-imun-086',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Profilaxia da Raiva - Acidente Grave por Animal Não Observável',
    isRevisao: false,
    enunciado:
      'Escolar de 8 anos foi atacado na rua por um cão vadio desconhecido que apresentava salivação intensa e comportamento agressivo. O cão fugiu logo após o ataque e não pôde ser localizado. Ao exame: múltiplas lacerações profundas e sangrantes na mão direita e punho esquerdo (acidente grave por animal agressor desconhecido/não passível de observação). Qual é a conduta preconizada pelo Ministério da Saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Lavar imediatamente as feridas com água e sabão; prescrever e administrar esquema vacinal completo de 4 doses (D0, D3, D7 e D14) associado obrigatoriamente à IMUNIZAÇÃO PASSIVA com Soro Antirrábico (SAR) ou Imunoglobulina Humana Antirrábica (IGHAR), infiltrando o máximo possível do volume no interior e nas bordas das lesões.',
      },
      {
        id: 'B',
        texto:
          'Apenas suturar as feridas com fios inabsorvíveis sob tensão e prescrever cefalexina oral, dispensando soro e vacina.',
      },
      {
        id: 'C',
        texto:
          'Aplicar 1 dose única de vacina e liberar o paciente para retorno caso venha a latir ou uivar.',
      },
      {
        id: 'D',
        texto:
          'Aguardar o laudo anatomopatológico do cão antes de qualquer procedimento médico no paciente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Quando o acidente é GRAVE (múltiplas lesões profundas em mãos) e o animal é DESCONHECIDO, NÃO PASSÍVEL DE OBSERVAÇÃO ou claramente SUSPEITO de raiva, o risco é máximo e não há tempo a perder. A conduta mandatória do Ministério da Saúde é:\n1) Higienização rigorosa e imediata com água e sabão e antisséptico polividona;\n2) VACINAÇÃO COMPLETA: 4 doses em cultivo celular (dias 0, 3, 7 e 14) por via intramuscular no deltoide ou vasto lateral;\n3) IMUNIZAÇÃO PASSIVA IMEDIATA com Soro Antirrábico heterólogo (SAR - 40 UI/kg) ou Imunoglobulina Humana Antirrábica (IGHAR - 20 UI/kg):\n   - REGRA TÉCNICA DE ADMINISTRAÇÃO: Infiltrar a maior quantidade possível do soro/imunoglobulina localmente nas lesões e ao redor delas (para neutralização direta do vírus no sítio de inoculação); o restante do volume que não puder ser infiltrado deve ser administrado por via intramuscular em sítio anatômico diferente do utilizado para a vacina.\nEvitar suturas oclusivas precoces ou realizar apenas pontos de aproximação frouxos se necessário para hemostasia.',
    comentariosAlternativas: {
      A: 'Correta. Acidente grave por animal não observável requer 4 doses de vacina + SAR/IGHAR infiltrado localmente.',
      B: 'Incorreta. Sutura sem profilaxia antirrábica em lesão grave de cão vadio é conduta médica desastrosa e omissa.',
      C: 'Incorreta. Dose única não protege e os sinais neurológicos da raiva são irreversíveis e letais.',
      D: 'Incorreta. Como o animal fugiu, não há como esperar laudo de cão que não foi capturado.',
    },
  },
  {
    id: 'ped-imun-087',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Profilaxia da Raiva Humana - Exposição a Morcegos e Animais Silvestres',
    isRevisao: false,
    enunciado:
      'Durante a madrugada, a mãe acorda e encontra um morcego caído no chão do quarto de seu filho de 3 anos, próximo ao berço da criança. A criança dormia apenas de bermuda. Ao examinar a criança, o pediatra do pronto-socorro não identifica nenhuma marca evidente de dentes ou sangramento perceptível na pele. De acordo com o Guia de Vigilância em Saúde do Ministério da Saúde, qual é a conduta correta perante acidentes ou contatos com morcegos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'QUALQUER contato direto com morcegos (hematófagos, insetívoros ou frugívoros), mesmo sem lesão visível detectável ao exame físico, é classificado como ACIDENTE GRAVE com alto risco de transmissão; a conduta mandatória imediata é indicar profilaxia completa com VACINA (4 doses: D0, D3, D7 e D14) + SORO ANTIRRÁBICO (SAR) ou Imunoglobulina Antirrábica (IGHAR).',
      },
      {
        id: 'B',
        texto:
          'Como não há ferimento macroscópico visível, tranquilizar a mãe e dispensar a criança sem qualquer medicação ou vacina.',
      },
      {
        id: 'C',
        texto:
          'Manter o morcego confinado em gaiola na residência por 10 dias para observação clínica de seu apetite.',
      },
      {
        id: 'D',
        texto:
          'Indicar apenas lavagem com álcool a 70% e prescrever aciclovir oral por 7 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Os morcegos (qualquer espécie: quirópteros hematófagos, insetívoros, frugívoros) são os principais reservatórios e transmissores do vírus da raiva nas Américas atualmente. Seus dentes são minúsculos e afiadíssimos, capazes de perfurar a epiderme e inocular saliva com vírus da raiva durante o sono sem deixar sangramento visível ou dor sentida pelo paciente. Por essa razão, a diretriz epidemiológica do Ministério da Saúde e do CDC é categórica: QUALQUER CONTATO COM MORCEGO (incluindo acordar em ambiente onde um morcego estava presente ou manipulação direta) É CONSIDERADO ACIDENTE GRAVE COM INDICAÇÃO MANDATÓRIA DE VACINAÇÃO COMPLETA (4 DOSES: D0, D3, D7 e D14) ASSOCIADA A SORO ANTIRRÁBICO (SAR) OU IGHAR. Jamais se observa morcego por 10 dias (essa regra é exclusiva para cães e gatos domésticos!).',
    comentariosAlternativas: {
      A: 'Correta. Contato com morcego é sempre acidente grave: vacina em 4 doses + soro antirrábico / IGHAR mandatórios.',
      B: 'Incorreta. A mordedura de morcego frequentemente não deixa marcas visíveis, mas inocula vírus com desfecho letal.',
      C: 'Incorreta. Animais silvestres e morcegos NUNCA são submetidos a observação domiciliar de 10 dias.',
      D: 'Incorreta. Aciclovir atua contra Herpesvirus, sendo totalmente inerte contra o Lyssavirus rábico.',
    },
  },
  {
    id: 'ped-imun-088',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Esquema Atual de Vacinação Antirrábica no Brasil (4 Doses)',
    isRevisao: false,
    enunciado:
      'O Ministério da Saúde atualizou a recomendação do esquema de profilaxia pós-exposição da Raiva Humana com vacinas produzidas em cultivo celular ou embrião de galinha purificado. Assinale a alternativa que indica o número de doses e o cronograma habitual preconizado na profilaxia antirrábica pós-exposição em pacientes não previamente imunizados:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Quatro doses por via intramuscular, administradas rigorosamente nos dias 0, 3, 7 e 14 após a exposição.',
      },
      {
        id: 'B',
        texto:
          'Dez doses diárias consecutivas por via subcutânea periumbilical com reforços aos 30 e 90 dias.',
      },
      {
        id: 'C',
        texto:
          'Dose única no dia 0 acompanhada de vitamina C em megadose venosa.',
      },
      {
        id: 'D',
        texto:
          'Seis doses por via intradérmica no couro cabeludo aplicadas de 12 em 12 horas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Em consonância com as recomendações da Organização Mundial da Saúde (OMS), o Brasil adotou o esquema de profilaxia antirrábica pós-exposição utilizando 4 DOSES de vacinas de vírus inativados produzidos em cultura de células (células Vero ou fibroblastos de embrião de galinha). As quatro doses devem ser administradas por via intramuscular nos DIAS 0, 3, 7 E 14 (o chamado esquema Essen reduzido de 4 doses). Esse cronograma garante níveis protetores de anticorpos neutralizantes (títulos ≥ 0,5 UI/mL) com excelente tolerabilidade, menor número de visitas à sala de vacina e sem os riscos neurológicos das antigas vacinas de tecido cerebral de camundongo lactente (tipo Fuenzalida & Palacios), já banidas da prática médica.',
    comentariosAlternativas: {
      A: 'Correta. O esquema oficial do Ministério da Saúde consiste em 4 doses nos dias 0, 3, 7 e 14.',
      B: 'Incorreta. Esquema antigo da vacina Fuenzalida & Palacios, completamente desativado no SUS.',
      C: 'Incorreta. Dose única não confere títulos séricos protetores contra o vírus da raiva.',
      D: 'Incorreta. Alternativa fantasiosa sem respaldo em nenhum guia de imunização.',
    },
  },
  {
    id: 'ped-imun-089',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Profilaxia do Tétano - Ferimento Limpo e Esquema Vacinal em Dia',
    isRevisao: false,
    enunciado:
      'Menina de 5 anos de idade deu entrada na UPA com corte superficial e linear de 1,5 cm na face palmar da mão, decorrente de faca de cozinha limpa há 1 hora. Ao exame: corte limpo, bordas nítidas, sem sujidade, corpos estranhos ou tecidos desvitalizados. A mãe apresenta a caderneta de saúde da criança com comprovação de esquema básico completo (três doses de Pentavalente no primeiro ano) e o primeiro reforço de DTP aos 15 meses de vida e o segundo reforço de DTP realizado aos 4 anos de idade (há 1 ano). Qual é a conduta médica correta para profilaxia do tétano nesse caso?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Proceder à limpeza e assepsia local da ferida e sutura se indicada; NÃO é necessária nenhuma dose de vacina antitetânica nem imunoglobulina/soro antitetânico (SAT/IGHAT), pois a criança tem esquema vacinal completo e a última dose foi recebida há menos de 10 anos.',
      },
      {
        id: 'B',
        texto:
          'Administrar soro antitetânico heterólogo (SAT) 5.000 UI por via intramuscular profunda imediatamente.',
      },
      {
        id: 'C',
        texto:
          'Aplicar uma nova dose de DTP e prescrever penicilina profilática oral por 30 dias.',
      },
      {
        id: 'D',
        texto:
          'Encaminhar para desbridamento em centro cirúrgico sob anestesia geral e internação hospitalar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A profilaxia pós-exposição contra o Tétano acidental depende de duas variáveis fundamentais:\n1) Características do ferimento: corte com faca limpa, sem desvitalização = FERIMENTO LIMPO / BAIXO RISCO;\n2) Histórico vacinal prévio: 3 doses de Penta + reforços de DTP aos 15m e 4 anos = ESQUEMA COMPLETO (≥ 3 doses), com última dose há apenas 1 ano.\nDe acordo com a tabela oficial do Ministério da Saúde:\n- Pacientes com 3 ou mais doses de vacina antitetânica cujo último reforço ocorreu há MENOS DE 10 ANOS NÃO necessitam de vacina nem de soro/imunoglobulina em ferimentos limpos.\nO manejo restringe-se aos cuidados cirúrgicos convencionais: limpeza, assepsia e fechamento/curativo da ferida.',
    comentariosAlternativas: {
      A: 'Correta. Ferimento limpo em criança vacinada há menos de 10 anos: apenas cuidados locais, sem vacina e sem soro.',
      B: 'Incorreta. SAT é reservado para ferimentos graves em indivíduos não vacinados ou com história incerta.',
      C: 'Incorreta. Não há necessidade de reforço antes de 10 anos em ferimentos limpos, nem de antibioticoterapia profilática.',
      D: 'Incorreta. Ferimento limpo e linear simples dispensa centro cirúrgico e internação.',
    },
  },
  {
    id: 'ped-imun-090',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Profilaxia do Tétano - Ferimento Grave / Tetanogênico e Vacinação > 5 Anos',
    isRevisao: false,
    enunciado:
      'Menino de 10 anos deu entrada no pronto-socorro após pisar em um prego enferrujado e sujo de fezes bovinas enquanto brincava descalço em um sítio. Ao exame: ferimento puntiforme profundo na região plantar do pé direito, com retenção de sujidades e sangramento escasso (ferimento de alto risco / tetanogênico). A caderneta vacinal comprova 3 doses de Pentavalente no primeiro ano e os reforços de DTP aos 15 meses e aos 4 anos de idade. Portanto, o paciente possui esquema completo de vacinação, mas a última dose ocorreu há 6 anos. Qual é a conduta preconizada pelo Ministério da Saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Limpeza e desbridamento cuidadoso da ferida plantar associados à administração de UMA DOSE de vacina com toxoide tetânico (dT - dupla adulto), SEM necessidade de soro antitetânico ou imunoglobulina (SAT/IGHAT).',
      },
      {
        id: 'B',
        texto:
          'Administrar soro antitetânico (SAT) 20.000 UI por via intravenosa e contraindicar qualquer vacina.',
      },
      {
        id: 'C',
        texto:
          'Apenas prescrever dipirona se houver dor, pois quem tomou vacina aos 4 anos tem imunidade vitalícia absoluta mesmo em ferimentos graves com terra e fezes.',
      },
      {
        id: 'D',
        texto:
          'Indicar amputação profilática do membro inferior para evitar a progressão da toxina tetânica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Análise das variáveis da profilaxia antitetânica:\n1) Ferimento: perfurocortante profundo contaminado com terra e fezes = FERIMENTO DE ALTO RISCO / GRAVE (TETANOGÊNICO);\n2) Histórico vacinal: esquema completo (≥ 3 doses), mas a última dose foi recebida há 6 ANOS (ou seja, há mais de 5 anos e menos de 10 anos).\nDiretriz do Ministério da Saúde para ferimentos de alto risco em pacientes com 3 ou mais doses:\n- Se a última dose foi recebida há MENOS de 5 anos: nada a fazer;\n- Se a última dose foi recebida há MAIS de 5 anos: administrar 1 DOSE DE REFORÇO DA VACINA (em crianças ≥ 7 anos utiliza-se a vacina dT - dupla adulto);\n- O soro (SAT) ou imunoglobulina (IGHAT) NÃO está indicado para indivíduos com 3 ou mais doses prévias comprovadas, exceto em imunodeprimidos graves.',
    comentariosAlternativas: {
      A: 'Correta. Ferimento de alto risco com última dose há > 5 anos em vacinado: fazer reforço da vacina (dT); sem SAT/IGHAT.',
      B: 'Incorreta. SAT não é necessário para pessoas imunocompetentes com esquema básico completo prévio.',
      C: 'Incorreta. Em ferimentos de alto risco o prazo para revacinação encurta para 5 anos (e não 10 anos como nos ferimentos limpos).',
      D: 'Incorreta. Conduta cirúrgica despropositada e sem cabimento ético-médico.',
    },
  },
  {
    id: 'ped-imun-091',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Profilaxia do Tétano - Ferimento Grave em Criança com Esquema Incompleto',
    isRevisao: false,
    enunciado:
      'Criança de 2 anos e meio é levada à emergência após sofrer esmagamento grave da mão esquerda com fratura exposta contaminada com terra e graxa automotiva (ferimento grave de altíssimo risco tetanogênico). Ao analisar a caderneta, constata-se que a criança recebeu apenas uma única dose da vacina Pentavalente aos 2 meses de idade, estando com o esquema vacinal manifestamente incompleto e atrasado. Diante do quadro, qual é a conduta preconizada pelo Ministério da Saúde para a profilaxia do tétano?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Lavagem cirúrgica e desbridamento imediato dos tecidos desvitalizados; administrar a 2ª dose da vacina (Pentavalente ou DTP de acordo com o esquema) E administrar IMUNIZAÇÃO PASSIVA com Imunoglobulina Humana Antitetânica (IGHAT 250 UI) ou Soro Antitetânico (SAT 5.000 UI) em locais anatômicos e seringas separados.',
      },
      {
        id: 'B',
        texto:
          'Administrar apenas a vacina, pois o soro ou imunoglobulina antitetânica só podem ser usados após o surgimento do riso sardônico e do trismo.',
      },
      {
        id: 'C',
        texto:
          'Aplicar apenas soro antitetânico e proibir que a criança tome vacinas para o resto da vida.',
      },
      {
        id: 'D',
        texto:
          'Como o ferimento é grave, nada pode ser feito para prevenir o tétano além de repouso no escuro.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Este é o cenário de maior risco de tétano acidental:\n1) Ferimento: fratura exposta, esmagamento com terra e graxa = FERIMENTO GRAVE / TETANOGÊNICO;\n2) Situação vacinal: apenas 1 dose prévia (ou seja, < 3 doses / incerta / não vacinado).\nConduta obrigatória do Ministério da Saúde:\n- VACINAÇÃO IMEDIATA (iniciar ou continuar o esquema de vacinação com vacina contendo toxoide tetânico);\n- IMUNOPROFILAXIA PASSIVA IMEDIATA com Imunoglobulina Humana Antitetânica (IGHAT 250 UI IM - preferencial) ou Soro Antitetânico (SAT 5.000 UI IM).\nJustificativa: como a criança tem apenas 1 dose prévia, seu organismo não possui clones de memória suficientes para produzir anticorpos neutralizantes a tempo hábil através apenas do reforço vacinal; a IGHAT/SAT fornece anticorpos circulantes imediatos para neutralizar a tetanospasmina antes de sua fixação aos terminais axonais motores.',
    comentariosAlternativas: {
      A: 'Correta. Ferimento grave + esquema incompleto (< 3 doses) exige VACINA + IGHAT/SAT em sítios diferentes.',
      B: 'Incorreta. Trismo e riso sardônico são sinais de tétano já instalado, quando a toxina já migrou ao SNC.',
      C: 'Incorreta. O soro confere imunidade passiva efêmera (semanas); a vacina é indispensável para proteção duradoura.',
      D: 'Incorreta. Tétano é prevenível por imunoprofilaxia adequada associada a cuidados cirúrgicos precoces.',
    },
  },
  {
    id: 'ped-imun-092',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Profilaxia do Tétano em Pacientes Imunocomprometidos',
    isRevisao: false,
    enunciado:
      'Adolescente de 14 anos com diagnóstico de Linfoma de Hodgkin em quimioterapia imunossupressora ativa sofre ferimento lacerocontuso profundo no pé com prego enferrujado em terreno baldio (ferimento de alto risco tetanogênico). Ele apresenta cartão de vacinação com 5 doses prévias de vacina contendo toxoide tetânico na infância e reforço com dT aos 12 anos (há 2 anos). Considerando as particularidades imunológicas de pacientes imunodeprimidos, qual é a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar UMA DOSE de vacina com toxoide tetânico (dT) E administrar IMUNOGLOBULINA HUMANA ANTITETÂNICA (IGHAT 250 a 500 UI); pacientes com imunodepressão grave com ferimentos de alto risco tetanogênico devem receber imunoprofilaxia passiva independentemente do número de doses de vacinas prévias recebidas.',
      },
      {
        id: 'B',
        texto:
          'Não fazer nada, pois quem tomou vacina há 2 anos nunca pode ter tétano sob nenhuma hipótese clínica.',
      },
      {
        id: 'C',
        texto:
          'Contraindicar a imunoglobulina, pois ela neutraliza os efeitos antineoplásicos da quimioterapia oncológica.',
      },
      {
        id: 'D',
        texto:
          'Suspender a quimioterapia por 5 anos e aplicar três frascos de soro antirrábico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Existe uma EXCEÇÃO FUNDAMENTAL na tabela de profilaxia pós-exposição do tétano cobrada com frequência em bancas de alto nível (USP, ENARE, UNIFESP): pacientes portadores de imunodepressão grave (oncológicos em quimioterapia, transplantados, imunodeficiência congênita ou corticoterapia imunossupressora) que sofrem ferimentos de alto risco tetanogênico (sujos, profundos ou com tecidos desvitalizados) DEVEM RECEBER A IMUNOPROFILAXIA PASSIVA (IGHAT 250 a 500 UI) ASSOCIADA À VACINA, MESMO QUE POSSUAM ESQUEMA VACINAL COMPLETO E RECENTE. A razão é fisiopatológica: a imunossupressão grave compromete a capacidade de manter títulos protetores séricos de antitoxina tetânica e impede a resposta de memória secundária imediata ao estímulo antigênico.',
    comentariosAlternativas: {
      A: 'Correta. Imunodeprimidos com ferimento tetanogênico grave recebem vacina + IGHAT independentemente do tempo da última dose.',
      B: 'Incorreta. Em imunossuprimidos graves a resposta anamnóstica é insuficiente e títulos protetores podem estar exauridos.',
      C: 'Incorreta. A imunoglobulina antitetânica humana é segura e não interfere na ação quimioterápica.',
      D: 'Incorreta. Alternativa absurda sem qualquer lógica terapêutica.',
    },
  },
  {
    id: 'ped-imun-093',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Falsas Contraindicações - Uso de Antibióticos e Otite Leve',
    isRevisao: false,
    enunciado:
      'Lactente de 12 meses comparece à sala de vacinas da UBS para receber as vacinas dos 12 meses (Tríplice Viral, Pneumocócica 10-valente e Meningocócica C). A mãe relata que a criança está no 4º dia de tratamento com amoxicilina oral para Otite Média Aguda não complicada, mas já está afebril há mais de 48 horas, muito ativa, brincando e alimentando-se normalmente. A técnica de enfermagem tem dúvidas se pode aplicar as vacinas devido ao antibiótico. Qual é a orientação médica correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'As vacinas DEVEM ser administradas normalmente hoje; o uso de antibióticos comuns (como betalactâmicos) e a vigência de infecções leves em franca melhora clínica NÃO interferem na resposta imune vacinal e NÃO contraindicam vacinas inativadas nem vacinas de vírus vivos.',
      },
      {
        id: 'B',
        texto:
          'Suspender a vacinação até completar 90 dias após a última dose do antibiótico.',
      },
      {
        id: 'C',
        texto:
          'Os antibióticos matam os vírus da Tríplice Viral e anulam o efeito da vacina.',
      },
      {
        id: 'D',
        texto:
          'Aplicar apenas a vacina de hepatite B e suspender todas as outras em definitivo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O uso de antibióticos orais ou tópicos comuns (como amoxicilina, cefalexina, macrolídeos) é uma das FALSAS CONTRAINDICAÇÕES mais frequentes que geram oportunidades vacinais perdidas. Antibióticos agem sobre estruturas bacterianas (parede celular, ribossomos bacterianos) e não têm qualquer ação neutralizante ou antiviral sobre as cepas atenuadas das vacinas virais (como sarampo, caxumba e rubéola), tampouco interferem na capacidade de apresentação de antígenos das vacinas inativadas (Pneumo 10 e Meningo C). Se a criança está clinicamente estável, afebril e em bom estado geral, ela deve receber todas as vacinas agendadas no mesmo dia.',
    comentariosAlternativas: {
      A: 'Correta. Uso de antibióticos orais e infecções leves afebris não são contraindicações à vacinação.',
      B: 'Incorreta. Adiar por 90 dias gera vulnerabilidade inaceitável a doenças graves preveníveis.',
      C: 'Incorreta. Antibióticos antibacterianos não possuem nenhuma atividade antiviral.',
      D: 'Incorreta. Todas as três vacinas dos 12 meses (SCR, Pneumo e MenC) devem ser administradas.',
    },
  },
  {
    id: 'ped-imun-094',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Falsas Contraindicações - Desnutrição Infantil e Vacinação',
    isRevisao: false,
    enunciado:
      'Lactente de 9 meses vivendo em comunidade com vulnerabilidade social extrema é avaliado na puericultura. Ao exame antropométrico, constata-se escore-z de peso para idade de -2,4 DP e estatura para idade de -2,1 DP, diagnosticando desnutrição crônica moderada. A criança está afebril e sem sinais de sepse. O cartão vacinal mostra atraso generalizado e a mãe questiona se uma criança desnutrida pode "aguentar o peso das vacinas". Com base nas evidências científicas e normas do Ministério da Saúde / OMS:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A desnutrição leve ou moderada NÃO contraindica nenhuma vacina; pelo contrário, crianças desnutridas são muito mais suscetíveis a desfechos letais por sarampo, coqueluche e pneumonia pneumocócica, sendo a vacinação prioritária e urgente.',
      },
      {
        id: 'B',
        texto:
          'A criança deve ser proibida de tomar qualquer vacina até atingir o percentil 50 de peso e altura.',
      },
      {
        id: 'C',
        texto:
          'Apenas a vacina contra cólera oral é permitida em crianças desnutridas.',
      },
      {
        id: 'D',
        texto:
          'Deve-se fracionar todas as vacinas em doses diárias de microgramas diluídas em óleo mineral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A desnutrição infantil é uma FALSA CONTRAINDICAÇÃO formal à vacinação. Embora crianças gravemente desnutridas possam apresentar uma resposta de anticorpos discretamente menor que eutróficos, essa resposta humoral e celular ainda é suficiente para conferir proteção contra formas clínicas letais. A Organização Mundial da Saúde (OMS) destaca que as crianças desnutridas são justamente as que mais se beneficiam da imunização, pois o sarampo em crianças desnutridas historicamente cursa com taxas de mortalidade superiores a 10%, além de agravar a desnutrição pela enteropatia perdedora de proteínas. Portanto, a vacinação deve ser realizada imediatamente sem qualquer redução de dose.',
    comentariosAlternativas: {
      A: 'Correta. Desnutrição não contraindica vacinas e reforça a urgência da imunização preventiva.',
      B: 'Incorreta. Aguardar atingir o percentil 50 deixará a criança desprotegida exposta a infecções fatais.',
      C: 'Incorreta. Todas as vacinas do calendário infantil estão indicadas.',
      D: 'Incorreta. Nunca se fraciona dose de vacinas por estado nutricional.',
    },
  },
  {
    id: 'ped-imun-095',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Falsas Contraindicações - Prematuridade e Peso Neonatal',
    isRevisao: false,
    enunciado:
      'Recém-nascido prematuro nasceu de 33 semanas de idade gestacional com 1.700 gramas. Aos 28 dias de vida, encontra-se clinicamente estável no alojamento conjunto com a mãe, mamando ao seio materno em livre demanda e com peso atual de 2.150 gramas. O residente de pediatria programa a alta e prescreve a aplicação da vacina BCG e da vacina contra a Hepatite B antes da saída do hospital. A respeito dessa conduta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A conduta está correta; a vacina BCG pode ser administrada em prematuros a partir do momento em que atingem o peso de 2.000 gramas (2 kg) e a vacina contra hepatite B deve ser aplicada independentemente do peso ao nascer.',
      },
      {
        id: 'B',
        texto:
          'A conduta está incorreta; a vacina BCG é proibida para prematuros até que eles completem 5 anos de idade.',
      },
      {
        id: 'C',
        texto:
          'A conduta está incorreta; a vacina contra Hepatite B só pode ser feita se o prematuro pesar mais de 4.000 gramas.',
      },
      {
        id: 'D',
        texto:
          'Deve-se aplicar a vacina da febre amarela imediatamente na veia umbilical.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A vacina BCG intradérmica possui uma regra técnica bem definida quanto ao peso neonatal: ela deve ser adiada temporariamente em recém-nascidos prematuros ou com baixo peso enquanto pesarem menos de 2.000 gramas (< 2,0 kg), devido à espessura diminuta do tecido subcutâneo e derme, que dificulta a técnica intradérmica e aumenta o risco de ulcerações profundas. A partir do momento em que o lactente alcança 2.000 g e está clinicamente estável, a BCG DEVE ser aplicada. Já a vacina contra a Hepatite B é recomendada nas primeiras 12 a 24 horas de vida para TODOS os recém-nascidos, mesmo aqueles com peso < 2.000 g (apenas lembrando que, se nascer com < 2.000 g, a dose ao nascer não é computada no esquema primário, exigindo 3 doses subsequentes com a Pentavalente). Como o bebê já tem 2.150 g, ambas as vacinas devem ser aplicadas.',
    comentariosAlternativas: {
      A: 'Correta. Bebê atingiu peso ≥ 2.000 g e está estável; deve receber BCG e Hepatite B na alta.',
      B: 'Incorreta. A BCG é adiada apenas até atingir 2.000 g, não até os 5 anos.',
      C: 'Incorreta. Hepatite B pode ser feita com qualquer peso ao nascer.',
      D: 'Incorreta. Febre amarela é contraindicada no período neonatal e nenhuma vacina se faz em veia umbilical.',
    },
  },
  {
    id: 'ped-imun-096',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Vacina Meningocócica B Recombinante (4CMenB)',
    isRevisao: false,
    enunciado:
      'A doença meningocócica invasiva pelo sorogrupo B da Neisseria meningitidis destaca-se pela rápida evolução fulminante e elevada letalidade em lactentes. Diferente dos sorogrupos A, C, W e Y (cujas vacinas são conjugadas a partir do polissacarídeo capsular), a vacina contra o sorogrupo B (4CMenB) exigiu tecnologia de vacinologia reversa baseada em proteínas subcapsulares. Qual é a justificativa imunológica para o polissacarídeo da cápsula do meningococo B NÃO ter sido utilizado como antígeno vacinal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O polissacarídeo capsular do meningococo B é idêntico a resíduos de ácido polisiálico expressos em moléculas de adesão de células neurais humanas fetais (NCAM), apresentando tolerância imunológica (ausência de imunogenicidade) e risco potencial de indução de autoimunidade contra o sistema nervoso.',
      },
      {
        id: 'B',
        texto:
          'O meningococo B não possui cápsula polissacarídica em sua estrutura biológica natural.',
      },
      {
        id: 'C',
        texto:
          'O polissacarídeo da cápsula B se transforma espontaneamente em toxina botulínica quando entra em contato com o ar.',
      },
      {
        id: 'D',
        texto:
          'O sorogrupo B foi erradicado em 1950, sendo desnecessária a utilização de cápsulas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A cápsula polissacarídica do meningococo B é um homopolímero de ácido alfa-(2-8)-N-acetilneuramínico (ácido polisiálico). Essa exata estrutura molecular é expressa constitutivamente em tecidos neurais humanos (nas moléculas de adesão neural fetal humana - NCAM). Devido a esse mimetismo molecular, o sistema imune humano reconhece o polissacarídeo capsular B como "próprio", sendo incapaz de produzir anticorpos bactericidas (mecanismo de tolerância imunológica). Além disso, qualquer tentativa de estimular anticorpos contra esse polissacarídeo poderia deflagrar reações autoimunes cruzadas graves contra o encéfalo. Por essa razão, a vacina contra o meningococo B (Bexsero / 4CMenB) foi desenvolvida utilizando quatro proteínas subcapsulares de superfície recombinantes (fHbp, NadA, NHBA e vesículas de membrana externa PorA P1.4).',
    comentariosAlternativas: {
      A: 'Correta. Mimetismo molecular com ácido polisiálico do tecido neural humano impede uso da cápsula B.',
      B: 'Incorreta. O meningococo B possui sim cápsula de polissacarídeo (ácido siálico).',
      C: 'Incorreta. Não existe conversão em toxina botulínica.',
      D: 'Incorreta. O meningococo B continua sendo causa relevante de meningite e meningococcemia no Brasil e no mundo.',
    },
  },
  {
    id: 'ped-imun-097',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Revacinação Pós-Transplante de Medula Óssea (TCTH)',
    isRevisao: false,
    enunciado:
      'Criança de 6 anos foi submetida com sucesso a Transplante Alogênico de Células-Tronco Hematopoéticas (TCTH / Medula Óssea) por Aplasia Medular Grave. Ela havia recebido todas as vacinas do calendário infantil antes da doença. Atualmente, encontra-se no 12º mês pós-transplante, sem evidência de Doença do Enxerto contra o Hospedeiro (DECH / GVHD) e fora de terapia imunossupressora há 3 meses. A equipe do CRIE planeja a sua atualização vacinal. De acordo com as diretrizes internacionais e do Ministério da Saúde para pós-transplante:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O paciente pós-TMO perde a memória imunológica prévia transferida e humoral, devendo ser REIMUNIZADO do zero com novo ciclo vacinal completo (reiniciando vacinas inativadas a partir de 6 a 12 meses pós-transplante e vacinas de vírus vivos, como Tríplice Viral, somente após 24 meses se não houver GVHD ou imunossupressão ativa).',
      },
      {
        id: 'B',
        texto:
          'O paciente mantém memória imunológica permanente através das células-tronco transplantadas, nunca mais necessitando de nenhuma vacina na vida.',
      },
      {
        id: 'C',
        texto:
          'Deve-se aplicar a vacina BCG e a vacina de Febre Amarela no primeiro mês pós-TMO na veia jugular.',
      },
      {
        id: 'D',
        texto:
          'Apenas a vacina oral contra o rotavírus está autorizada para pacientes transplantados.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O regime de condicionamento mieloablativo (quimioterapia e/ou radioterapia de corpo total) associado à substituição do sistema hematopoético e imunológico por células do doador acarreta a perda progressiva e quase total dos títulos de anticorpos protetores e dos linfócitos de memória pré-existentes. O paciente pós-TCTH deve ser considerado imunologicamente VIRGEM (como um recém-nascido). Por isso, as diretrizes do CRIE e da Sociedade Internacional de TMO preconizam um CALENDÁRIO COMPLETO DE REVACINAÇÃO:\n- A partir do 6º ao 12º mês pós-TMO: iniciar vacinas inativadas (Pneumocócica conjugada 13/15 seguida de 23, Meningocócicas ACWY e B, Hib, VIP, dTpa, Hepatite B com 4 doses dobradas, Influenza e COVID-19);\n- A partir de 24 meses pós-TMO: vacinas de vírus vivos atenuados (Tríplice Viral e Varicela), CONTANTO QUE o paciente esteja sem GVHD ativa e sem uso de medicações imunossupressoras sistêmicas há pelo menos 8 a 12 meses.',
    comentariosAlternativas: {
      A: 'Correta. Paciente pós-TMO perde a imunidade prévia e deve ser revacinado integralmente (inativadas 6-12m e vivas após 24m).',
      B: 'Incorreta. A imunidade prévia é perdida após a mieloablação; não há proteção permanente.',
      C: 'Incorreta. Vacinas vivas são rigorosamente proibidas no primeiro mês pós-TMO pelo risco de morte por infecção vacinal.',
      D: 'Incorreta. Rotavírus vivo é formalmente contraindicado em imunossuprimidos e escolares de 6 anos.',
    },
  },
  {
    id: 'ped-imun-098',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Eventos Adversos da BCG - Linfadenite Regional Supurada',
    isRevisao: false,
    enunciado:
      'Lactente de 4 meses de vida recebeu a vacina BCG ao nascer no deltoide direito. A mãe comparece ao posto de saúde aflita, pois há 3 semanas surgiu um nódulo na axila direita da criança que cresceu progressivamente, tornou-se amolecido, hiperemiado e iniciou drenagem espontânea de secreção purulenta clara (fistulização) há 2 dias. O nódulo mede 3,5 cm de diâmetro. A criança não tem febre, está em ótimo estado geral, com ganho ponderal adequado e sem outras queixas. Assinale o diagnóstico e a conduta preconizada pelo Manual de Eventos Adversos do Ministério da Saúde:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Linfadenite regional supurada por BCG; a conduta recomendada pelo Ministério da Saúde para casos com supuração/fistulização ativa ou linfonodo fistulizado > 3 cm é o tratamento farmacológico com Isoniazida oral (10 mg/kg/dia, máximo de 300 mg/dia) por via oral até a regressão completa da lesão (geralmente por 3 a 6 meses), contraindicando-se a incisão cirúrgica ou esvaziamento ganglionar.',
      },
      {
        id: 'B',
        texto:
          'Linfoma de Burkitt axilar fulminante; encaminhar imediatamente para quimioterapia de alta dose em UTI oncológica.',
      },
      {
        id: 'C',
        texto:
          'Indicar incisão cirúrgica ampla em cruz com drenagem e curetagem agressiva sob anestesia geral.',
      },
      {
        id: 'D',
        texto:
          'Prescrever amoxicilina com clavulanato e suspender o aleitamento materno por 1 ano.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A linfadenite regional supurada axilar ou supraclavicular homolateral é um evento adverso da vacina BCG decorrente da disseminação local do Mycobacterium bovis atenuado, com frequência associada à aplicação subcutânea acidental (em vez de estritamente intradérmica) ou a hiper-reatividade individual. As diretrizes do Ministério da Saúde orientam:\n- Linfonodo regional não supurado < 3 cm: CONDUTA EXPECTANTE (apenas observação, sem punção, sem medicação);\n- Linfonodo supurado, com flutuação evidente, fistulizado ou com diâmetro ≥ 3 cm: TRATAMENTO COM ISONIAZIDA oral na dose de 10 mg/kg/dia (dose máxima de 300 mg/dia) até a completa cicatrização e regressão (normalmente de 3 a 6 meses).\nÉ expressamente CONTRAINDICADA a drenagem cirúrgica, incisão ou curetagem do linfonodo, pois o procedimento cirúrgico cria trajetos fistulosos crônicos de cicatrização extremamente difícil e retarda a cura.',
    comentariosAlternativas: {
      A: 'Correta. Linfadenite supurada/fistulizada por BCG: tratamento com isoniazida oral; evitar incisão cirúrgica.',
      B: 'Incorreta. A criança está sem toxemia e trata-se de complicação benigna típica pós-BCG.',
      C: 'Incorreta. Incisão ou curetagem cirúrgica é contraindicada pelo risco de fistulização crônica.',
      D: 'Incorreta. Amoxicilina não tem ação contra M. bovis e o aleitamento materno deve ser mantido.',
    },
  },
  {
    id: 'ped-imun-099',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Vigilância de Eventos Adversos - Síndrome de Guillain-Barré',
    isRevisao: false,
    enunciado:
      'Adolescente de 15 anos apresentou fraqueza muscular simétrica e progressiva de início em membros inferiores com evolução ascendente para membros superiores e arreflexia miotática global ao longo de 4 dias, sem febre atual ou perda esfincteriana. A eletroneuromiografia demonstra polirradiculoneuropatia desmielinizante inflamatória aguda compatível com Síndrome de Guillain-Barré (SGB). O paciente havia recebido a vacina contra a Influenza há 3 semanas. Em relação à vigilância de eventos adversos pós-vacinais e notificação epidemiológica:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de um evento adverso grave e de notificação compulsória imediata à vigilância epidemiológica; a janela epidemiológica de plausibilidade causal para Síndrome de Guillain-Barré pós-imunização compreende tipicamente o intervalo de 1 a 6 semanas (até 42 dias) pós-vacinação.',
      },
      {
        id: 'B',
        texto:
          'A vacina de influenza é a causa comprovada de 100% dos casos de neuropatias no mundo e deve ser banida de todos os países.',
      },
      {
        id: 'C',
        texto:
          'A notificação não é necessária, pois a Síndrome de Guillain-Barré é um evento corriqueiro sem relevância em saúde pública.',
      },
      {
        id: 'D',
        texto:
          'O tratamento da SGB pós-vacinal é exclusivamente cirúrgico com artrodese da coluna vertebral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Síndrome de Guillain-Barré (SGB) é uma polirradiculoneuropatia desmielinizante inflamatória autoimune caracterizada por fraqueza flácida ascendente e arreflexia. O risco atribuível após vacinas (especialmente Influenza) é extremamente raro (cerca de 1 a 2 casos para cada 1 milhão de doses aplicadas, risco dezenas de vezes menor do que a incidência de SGB secundária à própria infecção natural pelo vírus influenza selvagem ou Campylobacter jejuni). Na vigilância de eventos adversos pós-vacinação (VEAPV), qualquer quadro de SGB que ocorra dentro do intervalo de plausibilidade biológica (habitualmente entre 7 e 42 dias, ou 1 a 6 semanas após a vacina) é classificado como EVENTO ADVERSO GRAVE de notificação compulsória imediata para investigação da comissão técnica de causalidade.',
    comentariosAlternativas: {
      A: 'Correta. Evento adverso grave com janela de plausibilidade biológica de 1 a 6 semanas; notificação imediata mandatória.',
      B: 'Incorreta. A maioria dos casos de SGB decorre de infecções intestinais e respiratórias naturais prévias.',
      C: 'Incorreta. SGB após vacinação é evento adverso grave de notificação compulsória estrita.',
      D: 'Incorreta. O tratamento clínico de suporte da SGB é com Imunoglobulina Humana Intravenosa (IGIV) ou plasmaférese.',
    },
  },
  {
    id: 'ped-imun-100',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Imunização',
    subtema: 'Síntese da Imunização na Atenção Primária e Impacto em Saúde Pública',
    isRevisao: false,
    enunciado:
      'Um médico residente de Medicina de Família e Comunidade e Pediatria é convidado a proferir uma aula na Semana de Integração da Saúde sobre as conquistas históricas e os desafios contemporâneos do Programa Nacional de Imunizações (PNI) do Brasil. Ao estruturar os conceitos fundamentais sobre imunização na infância, qual proposição sintetiza com máxima exatidão os princípios técnicos, éticos e epidemiológicos da vacinação?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A vacinação infantil é a intervenção de saúde pública de maior custo-efetividade da história da medicina, capaz de reduzir drasticamente a morbimortalidade infantil e induzir imunidade de rebanho; na prática clínica, o profissional deve combater as falsas contraindicações, evitar o desperdício de oportunidades vacinais, garantir o cumprimento dos aprazamentos mínimos sem reiniciar esquemas e orientar a família com evidências científicas sólidas para combater a hesitação vacinal.',
      },
      {
        id: 'B',
        texto:
          'A vacinação só traz benefício estritamente individual para quem a recebe, sendo comprovadamente ineficaz na proteção comunitária de grupos vulneráveis ou imunodeprimidos.',
      },
      {
        id: 'C',
        texto:
          'Esquemas vacinais em atraso há mais de 60 dias devem ser sumariamente cancelados, pois a memória imunológica humana atrofia irreversivelmente.',
      },
      {
        id: 'D',
        texto:
          'Crianças com doenças crônicas ou respiratórias leves devem ser desaconselhadas a se vacinar para poupar os estoques governamentais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Esta questão sintetiza o encerramento do banco de 100 questões de Imunização em Pediatria. A imunização constitui o maior avanço sanitário e de saúde coletiva moderno: erradicou a varíola, eliminou o poliovírus selvagem das Américas e reduziu a mortalidade na infância por sarampo, tétano, meningites bacterianas e coqueluche em mais de 95%. Os quatro pilares práticos que todo médico deve dominar na atenção primária e em provas de residência médica são:\n1) Oportunidade vacinal: toda consulta médica é uma oportunidade para checar a caderneta e vacinar;\n2) Falsas contraindicações: desmistificar tosse leve, coriza, antibioticoterapia oral, desnutrição leve e alergias inespecíficas;\n3) Regra de ouro do aprazamento: "Dose dada é dose contada" (nunca se reiniciam esquemas atrasados, apenas completam-se as doses respeitando os intervalos mínimos);\n4) Imunidade coletiva (efeito rebanho): atingir altas coberturas vacinais homogêneas (≥ 95%) protege os lactentes jovens e indivíduos imunodeprimidos que não podem ser vacinados.',
    comentariosAlternativas: {
      A: 'Correta. Síntese perfeita dos princípios da imunização: máxima custo-efetividade, combate a falsas contraindicações e efeito rebanho.',
      B: 'Incorreta. A imunização confere expressivo benefício coletivo por meio da imunidade de rebanho.',
      C: 'Incorreta. A memória imunológica persiste por anos e esquemas atrasados nunca devem ser cancelados ou reiniciados.',
      D: 'Incorreta. Crianças com comorbidades crônicas são exatamente as que mais necessitam da proteção conferida pelas vacinas.',
    },
  },
];

