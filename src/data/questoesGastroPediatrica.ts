export interface RawGastroQuestion {
  id: string;
  grandeArea: 'Pediatria';
  especialidade: 'Pediatria';
  tema: 'Doenças Gastrointestinais';
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

export const QUESTOES_GASTRO_PEDIATRICA: RawGastroQuestion[] = [
  {
    id: 'ped-gas-001',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Classificação do Estado de Hidratação da OMS / Ministério da Saúde',
    isRevisao: false,
    enunciado:
      'Um lactente de 10 meses é levado à Unidade de Pronto Atendimento pelos pais com história de 6 evacuações líquidas volumosas nas últimas 18 horas e 2 episódios de vômitos. Ao exame físico: a criança encontra-se irritada e inquieta, chorando ativamente; os olhos estão fundos; a mãe relata ausência de lágrimas durante o choro; a mucosa oral está ressecada; ao ser ofertado um copo d’água, a criança bebe com avidez e sofreguidão (muita sede); o sinal da prega no abdome desaparece lentamente (entre 1 e 2 segundos); os pulsos periféricos são palpáveis e rápidos e o tempo de enchimento capilar é de 2 segundos. De acordo com o protocolo clínico de manejo da diarreia do Ministério da Saúde e da OMS, qual é a classificação do estado de hidratação deste paciente?',
    alternativas: [
      {
        id: 'A',
        texto: 'Sem desidratação (Eutrófico hidratado).',
      },
      {
        id: 'B',
        texto: 'Desidratação leve a moderada (antigo "com desidratação").',
      },
      {
        id: 'C',
        texto: 'Desidratação grave com choque hipovolêmico descompensado.',
      },
      {
        id: 'D',
        texto: 'Intoxicação hídrica por hiponatremia hipotônica.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Segundo as diretrizes da Organização Mundial da Saúde (OMS) e do Ministério da Saúde do Brasil, a criança é classificada como apresentando "Desidratação leve a moderada" (ou com desidratação) quando apresenta DOIS OU MAIS dos seguintes sinais: 1) Inquieto / irritado; 2) Olhos fundos; 3) Bebe com sofreguidão / ávido por água; 4) Sinal da prega desaparece lentamente (em menos de 2 segundos, mas não instantâneo). A presença de letargia, inconsciência, incapacidade de beber e sinal da prega muito lento (> 2 segundos) definiria desidratação grave, o que não ocorre neste caso.',
    comentariosAlternativas: {
      A: 'Incorreta. A criança apresenta olhos fundos, boca seca, sede ávida e irritabilidade, preenchendo critérios claros de desidratação.',
      B: 'Correta. Paciente irritado, com olhos fundos, lágrimas ausentes, boca seca, sede com sofreguidão e sinal da prega lento: critérios clássicos de desidratação leve a moderada.',
      C: 'Incorreta. Na desidratação grave o paciente está letárgico/comatoso, incapaz de beber, com sinal da prega > 2 segundos e choque circulatório.',
      D: 'Incorreta. O quadro decorre de perdas gastrointestinais agudas por diarreia aguda sem sinais de sobrecarga hídrica.',
    },
  },
  {
    id: 'ped-gas-002',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Critérios Clínicos de Desidratação Grave segundo a OMS',
    isRevisao: false,
    enunciado:
      'Uma menina de 18 meses com diarreia aguda aquosa profusa há 3 dias dá entrada na sala vermelha da emergência pediátrica. Qual dos seguintes conjuntos de sinais clínicos ao exame físico define formalmente a condição de DESIDRATAÇÃO GRAVE pela classificação do Ministério da Saúde / OMS, indicando início imediato de reidratação parenteral venosa?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Criança alerta, olhos normais, lágrimas presentes, boca úmida, bebe normalmente sem sede excessiva e sinal da prega desaparece instantaneamente.',
      },
      {
        id: 'B',
        texto:
          'Criança inquieta, olhos discretamente fundos, boca seca, bebe com sede voraz e sinal da prega desaparece em 1 segundo.',
      },
      {
        id: 'C',
        texto:
          'Criança letárgica ou inconsciente (comatosa), olhos muito fundos, incapacidade de beber líquidos (ou bebe muito mal/não consegue deglutir), sinal da prega que desaparece muito lentamente (mais de 2 segundos) e pulsos periféricos débeis ou filiformes.',
      },
      {
        id: 'D',
        texto:
          'Criança com febre de 38 °C e tosse leve com duas evacuações pastosas ao dia.',
      },
    ],
    respostaCorreta: 'C',
    comentario:
      'A classificação da OMS/MS estabelece que a "Desidratação Grave" requer a presença de DOIS OU MAIS dos seguintes sinais de alarme: 1) Letargia ou inconsciência; 2) Olhos muito fundos; 3) Não consegue beber ou bebe muito mal; 4) Sinal da prega desaparece muito lentamente (> 2 segundos). Além disso, a presença de extremidades frias, tempo de enchimento capilar > 3 segundos e pulsos filiformes ou ausentes sinaliza choque hipovolêmico compensado ou descompensado, impondo conduta imediata pelo Plano C (expansão venosa rápida).',
    comentariosAlternativas: {
      A: 'Incorreta. Este quadro descreve o paciente "Sem Desidratação" (Plano A).',
      B: 'Incorreta. Este quadro descreve a "Desidratação Leve a Moderada" (Plano B).',
      C: 'Correta. Critérios estritos e inequívocos de Desidratação Grave segundo o Ministério da Saúde e OMS (Plano C).',
      D: 'Incorreta. Sintomas respiratórios leves com febre baixa e fezes pastosas não caracterizam desidratação grave.',
    },
  },
  {
    id: 'ped-gas-003',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Plano A: Manejo Domiciliar e Pilares Fundamentais',
    isRevisao: false,
    enunciado:
      'Um lactente de 8 meses é atendido na UBS com história de 4 evacuações amolecidas e líquidas nas últimas 24 horas, sem sangue e sem vômitos. Ao exame: alerta, corado, hidratado, olhos normais com lágrimas, boca úmida, prega abdominal elástica com desaparecimento imediato, aceitando o seio materno avidamente. O médico classifica a criança como "Sem Desidratação" e prescreve o PLANO A. Quais são as orientações fundamentais obrigatórias que compõem o Plano A do Ministério da Saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Jejum oral absoluto por 24 horas para descansar a alça intestinal, suspensão imediata do aleitamento materno e prescrição de loperamida.',
      },
      {
        id: 'B',
        texto:
          'Aumentar a oferta de líquidos caseiros (água, chás, água de coco, sucos) ou SRO após cada evacuação líquida; manter a alimentação habitual e o aleitamento materno sem qualquer restrição; suplementar Sulfato de Zinco oral por 10 a 14 dias; e orientar detalhadamente os sinais de perigo para retorno imediato.',
      },
      {
        id: 'C',
        texto:
          'Internação hospitalar obrigatória com punção venosa periférica para hidratação parenteral com soro glicosado 5%.',
      },
      {
        id: 'D',
        texto:
          'Administração profilática de ciprofloxacino oral e racecadotril em gotas.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O PLANO A destina-se a prevenir a desidratação em crianças com diarreia aguda no ambiente domiciliar. Baseia-se em 4 regras de ouro do Ministério da Saúde e OMS: 1) Aumentar a ingestão de líquidos (oferecer líquidos caseiros apropriados como água, água de coco, caldos ou SRO após cada evacuação diarreica: 50 a 100 mL em menores de 1 ano; 100 a 200 mL em maiores de 1 ano); 2) Manter a alimentação habitual e o aleitamento materno (não diluir fórmulas, não suspender o leite materno); 3) Suplementar Zinco diariamente por 10 a 14 dias (10 mg/dia para menores de 6 meses; 20 mg/dia para maiores de 6 meses); 4) Orientar os sinais de perigo que exigem retorno urgente (piora da diarreia, vômitos repetidos, recusa de líquidos, febre alta, sangue nas fezes).',
    comentariosAlternativas: {
      A: 'Incorreta. Jejum oral agrava a atrofia dos enterócitos e o estado nutricional; loperamida é proscrita em crianças.',
      B: 'Correta. Os quatro pilares clássicos do Plano A: mais líquidos, dieta mantida, suplementação de zinco e sinais de alarme.',
      C: 'Incorreta. Crianças sem desidratação não necessitam de internação nem de hidratação venosa.',
      D: 'Incorreta. Antibióticos empíricos não são indicados para diarreia aquosa simples sem sangue em criança hidratada.',
    },
  },
  {
    id: 'ped-gas-004',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Suplementação de Sulfato de Zinco: Evidências e Posologia',
    isRevisao: false,
    enunciado:
      'Em relação à suplementação com Sulfato de Zinco oral recomendada pela Organização Mundial da Saúde (OMS) e Ministério da Saúde em todos os episódios de Doença Diarreica Aguda (DDA) na infância, qual é a justificativa biológica comprovada e a posologia estritamente padronizada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O zinco atua exclusivamente como antiespasmódico periférico bloqueando as contrações musculares lisas do cólon.',
      },
      {
        id: 'B',
        texto:
          'O zinco promove a regeneração da mucosa intestinal e proliferação dos enterócitos, melhora a absorção de água e eletrólitos e reforça a imunidade mucosal, reduzindo a duração e gravidade do episódio diarreico e a incidência de novos episódios de diarreia nos 2 a 3 meses subsequentes; a dose é de 10 mg/dia para lactentes < 6 meses e 20 mg/dia para crianças >= 6 meses, durante 10 a 14 dias.',
      },
      {
        id: 'C',
        texto:
          'O zinco deve ser administrado apenas se houver sangue nas fezes, na dose de 100 mg/dia por via intramuscular por 3 dias.',
      },
      {
        id: 'D',
        texto:
          'A suplementação de zinco foi banida pelas novas diretrizes por induzir toxicidade hepática grave.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O Zinco é um micronutriente essencial para a síntese proteica, integridade da barreira epitelial intestinal e funcionamento do sistema imune. Múltiplos ensaios clínicos demonstraram que a suplementação de zinco na diarreia aguda: 1) Reduz a duração do episódio diarreico em até 20%; 2) Diminui o volume e a frequência das evacuações líquidas; 3) Reduz a incidência de novos episódios de diarreia e pneumonia nos 2 a 3 meses subsequentes ao tratamento. A posologia preconizada pela OMS/MS é: Crianças < 6 meses: 10 mg de zinco elementar por dia por 10 a 14 dias; Crianças >= 6 meses: 20 mg de zinco elementar por dia por 10 a 14 dias.',
    comentariosAlternativas: {
      A: 'Incorreta. O zinco não tem ação paralisante de motilidade como a loperamida, atuando na reparação epitelial celular.',
      B: 'Correta. Fundamentação biológica precisa e posologia oficial da OMS e do Ministério da Saúde para o sulfato de zinco.',
      C: 'Incorreta. O zinco é indicado universalmente em diarreia aquosa ou disenteria, sempre por via oral nas doses corretas.',
      D: 'Incorreta. O zinco é preconizado mundialmente com elevadíssimo nível de evidência e segurança.',
    },
  },
  {
    id: 'ped-gas-005',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Plano B: Terapia de Reidratação Oral (TRO) na Unidade de Saúde',
    isRevisao: false,
    enunciado:
      'Um lactente de 11 meses (peso = 10 kg) é diagnosticado com Desidratação Leve a Moderada decorrente de gastroenterite viral aguda (olhos fundos, boca seca, sede excessiva e sinal da prega com retorno lento). O médico assistente indica o PLANO B na sala de hidratação oral da unidade de saúde. De acordo com o protocolo oficial do Ministério da Saúde, quais são os procedimentos e o volume a ser administrado durante a Terapia de Reidratação Oral (TRO)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar Solução de Reidratação Oral (SRO) por via venosa periférica rápida em 15 minutos.',
      },
      {
        id: 'B',
        texto:
          'Administrar Solução de Reidratação Oral (SRO) continuamente por via oral em pequenas alíquotas com colher, copo ou seringa (volume estimado de 50 a 100 mL/kg ao longo de 4 a 6 horas); manter exclusivamente o aleitamento materno e suspender outros alimentos durante a reidratação; reavaliar o paciente periodicamente.',
      },
      {
        id: 'C',
        texto:
          'Prescrever água pura sem eletrólitos à vontade e liberar imediatamente para o domicílio.',
      },
      {
        id: 'D',
        texto:
          'Oferecer refrigerante de cola sem gás associado a leite de vaca integral fervido.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O PLANO B é executado sob supervisão na unidade de saúde para tratar a desidratação leve a moderada por meio da Terapia de Reidratação Oral (TRO). As normas do Ministério da Saúde determinam: 1) Oferecer SRO em pequenas quantidades e frequentemente (usando colher, xícara ou seringa) para evitar distensão gástrica e êmese; 2) O volume inicial estimado situa-se entre 50 e 100 mL/kg para ser consumido em um período de 4 a 6 horas (para o paciente de 10 kg: 500 a 1.000 mL); 3) Manter o aleitamento materno sem interrupções; suspender os demais alimentos apenas durante as horas da fase de reidratação oral ativa; 4) Reavaliar continuamente os sinais de desidratação.',
    comentariosAlternativas: {
      A: 'Incorreta. A SRO é formulada estritamente para absorção enteral por via oral e jamais deve ser infundida por via venosa.',
      B: 'Correta. Protocolo do Plano B: administração supervisionada de SRO (50 a 100 mL/kg em 4 a 6 horas), manutenção do seio materno e suspensão transitória de outros alimentos.',
      C: 'Incorreta. Água pura em criança desidratada sem eletrólitos provoca hiponatremia dilucional e convulsões.',
      D: 'Incorreta. Refrigerantes possuem osmolaridade excessiva e baixo teor de sódio, piorando a diarreia osmótica.',
    },
  },
  {
    id: 'ped-gas-006',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Composição da SRO de Osmolaridade Reduzida da OMS',
    isRevisao: false,
    enunciado:
      'Desde 2002, a OMS e o UNICEF adotaram formalmente a nova fórmula da Solução de Reidratação Oral (SRO) com osmolaridade reduzida para o tratamento global da diarreia em crianças. Qual é a concentração de Sódio e a Osmolaridade total aproximada desta solução padronizada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sódio 90 mEq/L e Osmolaridade total de 311 mOsm/L.',
      },
      {
        id: 'B',
        texto:
          'Sódio 75 mEq/L e Osmolaridade total de 245 mOsm/L (com Glicose 75 mmol/L).',
      },
      {
        id: 'C',
        texto:
          'Sódio 150 mEq/L e Osmolaridade total de 450 mOsm/L.',
      },
      {
        id: 'D',
        texto:
          'Sódio 20 mEq/L e Osmolaridade total de 120 mOsm/L.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A SRO de osmolaridade reduzida recomendada pela OMS/UNICEF possui osmolaridade total de 245 mOsm/L (contra 311 mOsm/L da fórmula clássica anterior de 1975). Seus componentes são: Sódio: 75 mEq/L (ou mmol/L); Cloreto: 65 mEq/L; Glicose anidra: 75 mmol/L (13,5 g/L); Potássio: 20 mEq/L; Citrato trissódico di-hidratado: 10 mmol/L (2,9 g/L). A redução da osmolaridade e do sódio para 75 mEq/L aproveita o cotransporte ótimo sódio-glicose 1:1 no enterócito, reduz o débito fecal em cerca de 20%, diminui a frequência de vômitos em 30% e reduz a necessidade de hidratação intravenosa suplementar não programada em 33%.',
    comentariosAlternativas: {
      A: 'Incorreta. Esta é a fórmula clássica antiga da OMS de 1975, desenvolvida originalmente para o cólera asiático.',
      B: 'Correta. Composição exata da SRO de osmolaridade reduzida da OMS: Sódio 75 mEq/L, Glicose 75 mmol/L e osmolaridade total de 245 mOsm/L.',
      C: 'Incorreta. Solução hiperosmolar que causaria diarreia osmótica grave e hipernatremia.',
      D: 'Incorreta. Teores muito baixos de sódio são insuficientes para repor as perdas na diarreia secretora infantil.',
    },
  },
  {
    id: 'ped-gas-007',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Fisiologia do Cotransporte Sódio-Glicose (SGLT-1)',
    isRevisao: false,
    enunciado:
      'O sucesso terapêutico histórico da Terapia de Reidratação Oral (considerada pela revista The Lancet como um dos maiores avanços médicos do século XX) baseia-se em um mecanismo fisiológico celular intacto no enterócito durante a gastroenterite infecciosa. Qual é esse mecanismo molecular de absorção?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Absorção passiva transcelular de lipídios por micropinocitose.',
      },
      {
        id: 'B',
        texto:
          'Cotransporte ativo secundário acoplado de Sódio e Glicose carreado pela proteína SGLT-1 na membrana apical da borda em escova do enterócito, que arrasta água e eletrólitos para a circulação mesmo quando as vias secretoras mediadas por AMPc/GMPc estão ativadas por toxinas bacterianas ou vírus.',
      },
      {
        id: 'C',
        texto:
          'Secreção retrógrada forçada de potássio na luz colônica.',
      },
      {
        id: 'D',
        texto:
          'Inibição completa da bomba de sódio-potássio ATPase na membrana basolateral.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A base biofísica da SRO reside no cotransportador Sódio-Glicose tipo 1 (SGLT-1) localizado na membrana apical da borda em escova das vilosidades intestinais. O cotransporte transporta ativamente uma molécula de glicose para cada dois íons de sódio para o interior do enterócito. Esse transporte ativo é preservado na maioria das diarreias infecciosas virais (rotavírus, norovírus) e bacterianas secretoras (toxina colérica, ETEC), pois a via do SGLT-1 é independente das vias secretoras hiperativadas de AMP cíclico, GMP cíclico e cálcio. A entrada intracelular de sódio e glicose cria um gradiente osmótico que promove o influxo maciço de água através das junções comunicantes e aquaporinas, hidratando o paciente.',
    comentariosAlternativas: {
      A: 'Incorreta. A absorção de água depende do gradiente osmótico gerado por solutos (sódio e monossacarídeos) e não de pinocitose de gordura.',
      B: 'Correta. O cotransporte acoplado Sódio-Glicose via SGLT-1 intacto é o pilar fisiológico essencial da TRO.',
      C: 'Incorreta. A perda excessiva de potássio fecal é consequência da diarreia e deve ser reposta, não sendo o mecanismo da TRO.',
      D: 'Incorreta. A Na+/K+ ATPase basolateral precisa estar ativa para manter o gradiente eletroquímico de sódio intracelular baixo.',
    },
  },
  {
    id: 'ped-gas-008',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Gastróclise por Sonda Nasogástrica no Plano B',
    isRevisao: false,
    enunciado:
      'Uma menina de 1 ano com desidratação moderada está em sala de hidratação sob Plano B há 2 horas. A equipe de enfermagem comunica que a criança apresentou 4 episódios sucessivos de vômitos incoercíveis logo após a oferta da SRO com colher e recusa a ingestão oral, mantendo perda de peso na balança. De acordo com o protocolo do Ministério da Saúde para o manejo da falha de hidratação oral inicial, qual é a conduta intermediária indicada ANTES de transferir o paciente para o Plano C venoso?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Suspender qualquer hidratação e administrar prometazina intramuscular.',
      },
      {
        id: 'B',
        texto:
          'Indicar GASTRÓCLISE (administração contínua e lenta de SRO por Sonda Nasogástrica - SNG, em taxa inicial de 20 a 30 mL/kg/hora com seringa ou frasco de infusão gravitacional).',
      },
      {
        id: 'C',
        texto:
          'Encaminhar para laparotomia exploradora de urgência.',
      },
      {
        id: 'D',
        texto:
          'Oferecer gelatina e água açucarada gelada com canudo.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Segundo o Ministério da Saúde e OMS, a GASTRÓCLISE por Sonda Nasogástrica (SNG) é uma etapa fundamental do Plano B indicada nas seguintes situações de falha ou dificuldade na ingestão oral: 1) Vômitos persistentes ou frequentes (>= 3 a 4 episódios de vômitos por hora durante a TRO); 2) Recusa persistente de ingerir a SRO por boca; 3) Ausência de ganho de peso ou perda ponderal contínua após 2 horas de TRO bem conduzida; 4) Distensão abdominal leve sem íleo paralítico. A SRO é infundida de forma contínua em gotejamento lento (iniciando em 20 a 30 mL/kg/hora). Essa infusão gástrica contínua evita a distensão súbita do antro gástrico, reduz os vômitos e reidrata a maioria dos pacientes com sucesso, evitando punções venosas desnecessárias.',
    comentariosAlternativas: {
      A: 'Incorreta. Prometazina é formalmente contraindicada em menores de 2 anos pelo risco fatal de depressão respiratória e sedação.',
      B: 'Correta. Gastróclise por SNG (20-30 mL/kg/h) é a indicação clássica para vômitos persistentes na vigência do Plano B antes do Plano C venoso.',
      C: 'Incorreta. Vômitos na gastroenterite aguda em criança desidratada não indicam cirurgia de urgência sem evidência de abdome agudo.',
      D: 'Incorreta. Alimentos e líquidos hiperosmolares agravam a desidratação e o desequilíbrio eletrolítico.',
    },
  },
  {
    id: 'ped-gas-009',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Critérios de Alta do Plano B para o Plano A',
    isRevisao: false,
    enunciado:
      'Após 4 horas de hidratação oral supervisionada no Plano B, o lactente de 10 meses é reavaliado pelo médico. A criança encontra-se calma no colo materno, os olhos não estão mais fundos, a boca está úmida e com saliva abundante, as lágrimas reapareceram ao choro, a sede normalizou, o sinal da prega desaparece de forma instantânea e o paciente urinou duas vezes em fralda com urina clara. Qual é a conduta médica correta a partir deste momento?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Manter o paciente internado em jejum na enfermaria por 72 horas para observação.',
      },
      {
        id: 'B',
        texto:
          'Considerar a criança HIDRATADA e dar ALTA para o PLANO A domiciliar: orientar a administração de SRO/líquidos caseiros após cada evacuação líquida restante, retomar imediatamente a alimentação habitual e o aleitamento materno, prescrever Sulfato de Zinco por 10 a 14 dias e reforçar os sinais de perigo.',
      },
      {
        id: 'C',
        texto:
          'Puncionar veia para manter soro de manutenção venosa com cloreto de potássio.',
      },
      {
        id: 'D',
        texto:
          'Prescrever antimicrobiano profilático por 7 dias antes da liberação.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A reavaliação clínica é o elemento central do Plano B. Quando os sinais de desidratação desaparecem por completo (paciente calmo, olhos normais com lágrimas, boca úmida, sede normalizada, sinal da prega rápido, diurese restabelecida), a criança é considerada "Hidratada". A conduta indicada é transferi-la para o PLANO A e dar alta médica para o domicílio com orientações claras: continuar ofertando líquidos após cada evacuação diarreica, reintroduzir a alimentação habitual completa (não restringir alimentos nem fazer dietas hipocalóricas restritivas), manter aleitamento materno irrestrito, suplementar zinco por 10 a 14 dias e orientar os sinais de perigo.',
    comentariosAlternativas: {
      A: 'Incorreta. Manter criança hidratada em jejum no hospital é iatrogenia prejudicial à recuperação intestinal.',
      B: 'Correta. Critérios de hidratação atingidos: transição bem-sucedida do Plano B para o Plano A domiciliar.',
      C: 'Incorreta. Não há qualquer indicação de punção venosa em criança clinicamente hidratada e aceitando dieta oral.',
      D: 'Incorreta. Antibióticos profiláticos são contraindicados na diarreia aguda resolvida.',
    },
  },
  {
    id: 'ped-gas-010',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Plano C: Esquema de Expansão Rápida para Menores de 1 Ano',
    isRevisao: false,
    enunciado:
      'Um lactente de 7 meses (peso = 8 kg) com história de diarreia coleriforme aguda profusa dá entrada no pronto-socorro inconsciente, com olhos muito fundos, pulsos radiais impalpáveis, extremidades frias com tempo de enchimento capilar de 4 segundos e sinal da prega abdominal que permanece fixo por mais de 3 segundos. O médico estabelece o diagnóstico de Desidratação Grave com Choque Hipovolêmico e prescreve o PLANO C de reidratação parenteral venosa do Ministério da Saúde. Qual é o volume, a solução indicada e o tempo de infusão padronizado para esta criança MENOR DE 1 ANO?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Soro Glicosado 5%: 100 mL/kg infundido em 1 hora contínua.',
      },
      {
        id: 'B',
        texto:
          'Soro Fisiológico a 0,9% (ou Ringer Lactato): fase rápida de 30 mL/kg em 30 minutos, seguida por fase de manutenção de 70 mL/kg em 5 horas e 30 minutos (tempo total de 6 horas para infundir 100 mL/kg).',
      },
      {
        id: 'C',
        texto:
          'Água destilada pura na dose de 50 mL/kg em 12 horas.',
      },
      {
        id: 'D',
        texto:
          'Albumina humana a 20% exclusiva: 20 mL/kg em bolus rápido repetido 5 vezes.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O esquema de hidratação venosa rápida para Desidratação Grave (Plano C) do Ministério da Saúde do Brasil e da OMS utiliza Soro Fisiológico 0,9% (ou Ringer Lactato) e divide-se em duas etapas de acordo com a faixa etária: Para CRIANÇAS MENORES DE 1 ANO DE IDADE (volume total de 100 mL/kg em 6 horas): 1) 1ª fase (expansão inicial rápida): 30 mL/kg em 30 MINUTOS; 2) 2ª fase: 70 mL/kg em 5 HORAS E 30 MINUTOS. Para o lactente de 8 kg: 240 mL em 30 min, seguidos por 560 mL em 5h30min. Esse tempo mais prolongado (6h) em menores de 1 ano protege a vasculatura cerebral e o sistema cardiovascular do lactente contra sobrecarga de volume e edema cerebral.',
    comentariosAlternativas: {
      A: 'Incorreta. Soro glicosado a 5% puro não se mantém no espaço intravascular, expande o meio intracelular e causa edema cerebral hipotônico fatal no choque.',
      B: 'Correta. Protocolo oficial do Ministério da Saúde para < 1 ano: 30 mL/kg em 30 min + 70 mL/kg em 5h30min (total de 100 mL/kg em 6 horas) com cristaloides isotônicos.',
      C: 'Incorreta. Água destilada intravenosa causa hemólise intravascular maciça e óbito imediato.',
      D: 'Incorreta. O choque hipovolêmico por diarreia deve ser tratado com cristaloides isotônicos e não com albumina humana hiperoncótica.',
    },
  },
  {
    id: 'ped-gas-011',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Plano C: Esquema de Expansão Rápida para Maiores ou Iguais a 1 Ano',
    isRevisao: false,
    enunciado:
      'Uma criança de 3 anos de idade (peso = 15 kg) é admitida em estado comatoso com desidratação grave e choque hipovolêmico secundário a gastroenterite aguda. Imediatamente é puncionado acesso venoso calibroso e iniciado o PLANO C pelo Ministério da Saúde. Qual é o esquema cronológico e volumétrico correto de reidratação venosa para crianças com IDADE MAIOR OU IGUAL A 1 ANO?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Soro Fisiológico a 0,9% (ou Ringer Lactato): 30 mL/kg em 30 minutos, seguido de 70 mL/kg em 2 horas e 30 minutos (totalizando 100 mL/kg em um tempo total de 3 horas).',
      },
      {
        id: 'B',
        texto:
          'Soro Fisiológico a 0,9%: 100 mL/kg infundido lentamente em 24 horas contínuas.',
      },
      {
        id: 'C',
        texto:
          'Soro Glicosado 10% puro na velocidade de 50 gotas por minuto por 48 horas.',
      },
      {
        id: 'D',
        texto:
          'Sangue total isogrupo na dose de 50 mL/kg em 1 hora.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Para CRIANÇAS COM IDADE IGUAL OU SUPERIOR A 1 ANO (>= 1 ano), o Plano C do Ministério da Saúde / OMS prevê a infusão de 100 mL/kg de solução cristaloide isotônica (Soro Fisiológico 0,9% ou Ringer Lactato) em um tempo total mais curto, de apenas 3 HORAS: 1) 1ª fase (expansão rápida): 30 mL/kg em 30 MINUTOS; 2) 2ª fase: 70 mL/kg em 2 HORAS E 30 MINUTOS. Para a criança de 15 kg: 450 mL nos primeiros 30 minutos, seguidos por 1.050 mL nas próximas 2 horas e meia. Crianças maiores de 1 ano toleram uma infusão volêmica mais rápida para restauração hemodinâmica eficaz.',
    comentariosAlternativas: {
      A: 'Correta. Esquema exato do Ministério da Saúde para >= 1 ano: 30 mL/kg em 30 min + 70 mL/kg em 2h30min (total de 100 mL/kg em 3 horas).',
      B: 'Incorreta. Infundir em 24 horas perpetua o choque hipovolêmico e a acidose láctica levando a falência de múltiplos órgãos.',
      C: 'Incorreta. Soluções glicosadas hipotônicas sem sódio não restauram a volemia e agravam o choque e o edema cerebral.',
      D: 'Incorreta. Não há choque hemorrágico para indicação de hemotransfusão de sangue total.',
    },
  },
  {
    id: 'ped-gas-012',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Disenteria Bacilar: Agente e Quadro Clínico Clássico',
    isRevisao: false,
    enunciado:
      'Um menino de 4 anos é levado à emergência com febre alta súbita de 39,5 °C, cefaleia, prostração, anorexia e dor abdominal em cólica intensa, associada a episódios frequentes de tenesmo (dor e esforço retal para evacuar) e evacuação de fezes com pequeno volume contendo grande quantidade de MUCO, PUS e SANGUE VIVO VISÍVEL ("fezes disentéricas"). A microscopia fecal revela incontáveis leucócitos e hemácias por campo. Qual é o principal patógeno bacteriano invasor responsável pela grande maioria dos casos de disenteria clássica na infância no Brasil e no mundo?',
    alternativas: [
      {
        id: 'A',
        texto: 'Vibrio cholerae O1.',
      },
      {
        id: 'B',
        texto: 'Shigella spp. (especialmente Shigella sonnei e Shigella flexneri).',
      },
      {
        id: 'C',
        texto: 'Rotavírus humano grupo A.',
      },
      {
        id: 'D',
        texto: 'Giardia lamblia (trofozoítos).',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Disenteria é definida clinicamente pela presença de sangue visível a olho nu nas fezes, frequentemente acompanhada de muco, febre alta, dor abdominal em cólica e tenesmo retal. O principal agente etiológico bacteriano causador de disenteria em pediatria é a bactéria do gênero Shigella (notadamente Shigella flexneri nos países em desenvolvimento e Shigella sonnei nos países desenvolvidos). A Shigella possui baixíssimo inóculo infectante (menos de 10 a 100 bactérias são suficientes para causar infecção), invade ativamente os enterócitos do cólon, multiplica-se intracelularmente e causa inflamação purulenta intensa, microabscessos e ulcerações mucosas.',
    comentariosAlternativas: {
      A: 'Incorreta. Vibrio cholerae produz diarreia secretora aquosa volumosa em "água de arroz" com desidratação rápida e sem sangue nas fezes.',
      B: 'Correta. Shigella spp. é a causa clássica e mais prevalente de disenteria bacteriana aguda febril na infância.',
      C: 'Incorreta. Rotavírus causa gastroenterite aquosa não sanguinolenta com vômitos profusos, sem disenteria invasiva.',
      D: 'Incorreta. Giardia lamblia coloniza o duodeno/jejuno e cursa com fezes esteatorreicas espumosas e má absorção, sem sangue nem febre alta aguda.',
    },
  },
  {
    id: 'ped-gas-013',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Tratamento Antimicrobiano da Disenteria Pediátrica',
    isRevisao: false,
    enunciado:
      'De acordo com as diretrizes da Organização Mundial da Saúde (OMS) e do Ministério da Saúde para o tratamento da criança com DIARREIA COM SANGUE (Disenteria aguda), qual é a conduta antimicrobiana mandatória de primeira linha recomendada para erradicar a Shigella?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Não prescrever antibióticos em nenhuma circunstância, pois toda disenteria se cura apenas com dieta leve.',
      },
      {
        id: 'B',
        texto:
          'Iniciar antibioticoterapia empírica imediata com Ciprofloxacino por via oral (15 mg/kg/dose a cada 12 horas por 3 dias) ou, em pacientes internados/graves, Ceftriaxona parenteral (50 a 100 mg/kg/dia por 3 a 5 dias).',
      },
      {
        id: 'C',
        texto:
          'Sulfametoxazol-Trimetoprima (cotrimoxazol) oral como droga universal de escolha.',
      },
      {
        id: 'D',
        texto:
          'Metronidazol oral em dose única isolada.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Ao contrário da diarreia aquosa (onde antibióticos não têm indicação de rotina), toda criança com DIARREIA COM SANGUE (Disenteria) e comprometimento do estado geral deve receber antibioticoterapia empírica para Shigella, segundo as diretrizes da OMS e MS. O tratamento reduz a duração da febre e diarreia, diminui a excreção fecal do patógeno e previne complicações graves (perfuração cólica, megacólon tóxico, prolapso retal e desnutrição aguda grave). A droga de primeira escolha preconizada mundialmente é o Ciprofloxacino oral na dose de 15 mg/kg/dose 2x/dia (máximo 500 mg/dose) por 3 dias. Em crianças hospitalizadas impossibilitadas de ingerir medicação oral ou com toxemia grave, a Ceftriaxona parenteral por 3 a 5 dias é a alternativa preferencial.',
    comentariosAlternativas: {
      A: 'Incorreta. A disenteria requer tratamento antibiótico mandatório pelo risco de complicações infecciosas graves e disseminação epidêmica.',
      B: 'Correta. Ciprofloxacino oral (3 dias) ou Ceftriaxona venosa constituem os esquemas antimicrobianos preconizados pela OMS/MS para disenteria por Shigella.',
      C: 'Incorreta. Há taxas de resistência mundiais superiores a 70% a 90% para sulfametoxazol-trimetoprima e ampicilina contra Shigella.',
      D: 'Incorreta. Metronidazol é indicado para amebíase invasiva por Entamoeba histolytica quando a Shigella foi adequadamente tratada e houve persistência do quadro.',
    },
  },
  {
    id: 'ped-gas-014',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Contraindicação Absoluta de Antidiarreicos Opióides na Infância',
    isRevisao: false,
    enunciado:
      'A mãe de um menino de 3 anos com diarreia aguda autolimitada comprou por conta própria comprimidos de Cloridrato de Loperamida em uma farmácia e administrou à criança na tentativa de "cortar o desarranjo". Poucas horas depois, a criança evolui com sonolência profunda, distensão abdominal tensa exuberante, parada da eliminação de fezes e gases e vômitos biliosos. O raio-x simples de abdome revela níveis hidroaéreos difusos com dilatação difusa de alças intestinais sem mecônio ou fezes no reto (íleo paralítico). Por que medicamentos antidiarreicos inibidores da motilidade (como a loperamida e outros opioides) são FORMALMENTE PROSCRITOS em pediatria?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Porque a loperamida provoca hipermotilidade gástrica irreversível com diarreia crônica intratável.',
      },
      {
        id: 'B',
        texto:
          'Porque inibem o peristaltismo intestinal fisiológico (que é um mecanismo de defesa mecânico do organismo para expelir bactérias e toxinas), propiciando estase e supercrescimento bacteriano invasivo, dilatação colônica maciça, megacólon tóxico, íleo paralítico, perfuração intestinal, além de depressão do SNC e risco de óbito.',
      },
      {
        id: 'C',
        texto:
          'Porque causam hipocalcemia aguda por perda urinária forçada de cálcio.',
      },
      {
        id: 'D',
        texto:
          'Porque diminuem a absorção de ferro provocando anemia falciforme.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Medicamentos antimotilidade derivados opioides (como cloridrato de loperamida e difenoxilato) são FORMALMENTE CONTRAINDICADOS em crianças com diarreia aguda pelo Ministério da Saúde, SBP, AAP e OMS. O peristaltismo acelerado durante a gastroenterite funciona como um mecanismo protetor fisiológico de expulsão mecânica de toxinas e micro-organismos patogênicos. Os opioides paralisam a motilidade intestinal através de receptores mi-opioides nos plexos mioentéricos, gerando retenção maciça de fluidos na luz intestinal (perda de líquidos oculta em "terceiro espaço"), supercrescimento bacteriano invasivo, íleo paralítico, translocação bacteriana com sepse, megacólon tóxico e perfuração intestinal, além de toxicidade e depressão central (sedação e parada respiratória).',
    comentariosAlternativas: {
      A: 'Incorreta. A loperamida causa paralisia motora (hipomotilidade extrema/íleo paralítico) e não hipermotilidade.',
      B: 'Correta. Fisiopatologia precisa dos graves efeitos adversos que proíbem o uso de loperamida e antimotilidades na diarreia infantil.',
      C: 'Incorreta. Não há mecanismo de distúrbio do metabolismo do cálcio na toxicidade da loperamida.',
      D: 'Incorreta. Anemia falciforme é uma doença genética hereditária da hemoglobina e não efeito colateral farmacológico.',
    },
  },
  {
    id: 'ped-gas-015',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Síndrome Hemolítico-Urêmica (SHU): Fisiopatologia e Patógeno',
    isRevisao: false,
    enunciado:
      'Um menino de 3 anos apresentou episódio de diarreia sanguinolenta (colite hemorrágica) após ingestão de carne moída bovina malcozida em um churrasco. Seis dias após o início da diarreia, quando as fezes começavam a diminuir, a criança evolui subitamente com palidez cutânea intensa e súbita, icterícia leve com colúria, sonolência, petéquias em membros e diminuição acentuada do volume urinário (oligúria com anúria nas últimas 12 horas). Os exames laboratoriais revelam: Hemoglobina = 6,2 g/dL, presença de numerosos ESQUIZÓCITOS no esfregaço de sangue periférico, Plaquetas = 38.000/mm³, Ureia = 160 mg/dL e Creatinina = 3,4 mg/dL. Qual é o diagnóstico e o principal micro-organismo etiológico responsável?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Púrpura Trombocitopênica Imunológica (PTI) por vírus Epstein-Barr.',
      },
      {
        id: 'B',
        texto:
          'Síndrome Hemolítico-Urêmica (SHU típica pós-diarreica), desencadeada pela infecção por Escherichia coli produtora de Toxina Shiga (STEC / EHEC, sorotipo O157:H7).',
      },
      {
        id: 'C',
        texto:
          'Glomerulonefrite Difusa Aguda pós-estreptocócica por Streptococcus pyogenes.',
      },
      {
        id: 'D',
        texto:
          'Leucemia Mieloide Aguda primária.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Síndrome Hemolítico-Urêmica típica (SHU D+) é a principal causa de Injúria Renal Aguda dialítica na infância. É clássica complicação da colite infecciosa pela Escherichia coli entero-hemorrágica (EHEC / STEC, destacando-se o sorotipo O157:H7) ou por Shigella dysenteriae tipo 1. A bactéria libera a Toxina Shiga (Stx1 e Stx2), que ganha a circulação sistêmica e liga-se a receptores específicos Gb3 (globotriaosilceramida) densamente expressos nas células endoteliais dos capilares glomerulares renais e do cólon. A lesão e necrose endotelial ativam a cascata de coagulação, formando microtrombos plaquetários na microcirculação renal, fragmentando mecanicamente as hemácias (anemia hemolítica microangiopática com esquizócitos) e consumindo plaquetas (plaquetopenia), levando à necrose e insuficiência renal aguda oligúrica.',
    comentariosAlternativas: {
      A: 'Incorreta. Na PTI a plaquetopenia é imunomediada isolada, sem anemia hemolítica microangiopática com esquizócitos e sem insuficiência renal aguda.',
      B: 'Correta. Tríade patognomônica de Síndrome Hemolítico-Urêmica (anemia hemolítica microangiopática + plaquetopenia + IRA) pós-diarreia por STEC O157:H7.',
      C: 'Incorreta. A GNPE cursa com hematúria macroscópica ("urina cor de coca-cola"), hipertensão arterial e edema pós-faringite ou piodermite, sem anemia microangiopática com esquizócitos.',
      D: 'Incorreta. Leucemia cursa com blastos na medula e sangue periférico, hepatoesplenomegalia e adenopatias, sem esquizócitos e IRA súbita pós-diarreia por carne bovina.',
    },
  },
  {
    id: 'ped-gas-016',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Cuidados e Condutas Proibidas na Suspeita de SHU',
    isRevisao: false,
    enunciado:
      'No manejo inicial da criança com suspeita clínica e laboratorial de Síndrome Hemolítico-Urêmica típica (SHU) associada à E. coli produtora de toxina Shiga (STEC), assinale a opção que descreve condutas e intervenções FORMALMENTE CONTRAINDICADAS:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Monitorização rigorosa da diurese, balanço hídrico estrito e suporte dialítico se houver uremia grave ou hipercalemia.',
      },
      {
        id: 'B',
        texto:
          'Prescrição de antibioticoterapia (pois os antibióticos induzem lise bacteriana maciça com liberação de quantidades devastadoras de toxina Shiga na circulação, aumentando o risco e a gravidade da SHU) e Transfusão profilática de plaquetas na ausência de sangramentos ativos graves (pois as plaquetas infundidas "alimentam" a formação de novos microtrombos renais, agravando a isquemia glomerular).',
      },
      {
        id: 'C',
        texto:
          'Transfusão lenta e criteriosa de concentrado de hemácias desleucocitado se houver anemia sintomática grave descompensada.',
      },
      {
        id: 'D',
        texto:
          'Correção rigorosa de distúrbios hidroeletrolíticos e controle da hipertensão arterial sistêmica.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Conceito clássico de altíssima relevância clínica e em provas de Residência: 1) O uso de antibióticos na infecção por STEC (E. coli O157:H7) é CONTRAINDICADO, pois bactericidas lesam a parede bacteriana induzindo a hiperprodução e liberação maciça da toxina Shiga ligada ao fago para o lúmen intestinal, aumentando o risco relativo de evolução para SHU em até 2 a 3 vezes; 2) A transfusão de concentrado de plaquetas é CONTRAINDICADA mesmo com plaquetas baixas (< 20.000 ou 30.000/mm³), exceto em sangramentos ativos volumosos que ameacem a vida ou antes de procedimentos cirúrgicos invasivos, porque as plaquetas transfundidas formam novos trombos microvasculares ricos em fibrina/plaquetas no leito glomerular e cerebral ("jogar querosene na fogueira").',
    comentariosAlternativas: {
      A: 'Incorreta (conduta correta). Balanço hídrico rigoroso e diálise precoce se necessária são as pedras angulares do suporte na SHU.',
      B: 'Correta (condutas proibidas). Antibióticos e transfusão profilática de plaquetas são expressamente contraindicados na SHU.',
      C: 'Incorreta (conduta correta). A anemia hemolítica é grave e exige transfusão prudente de hemácias quando descompensada.',
      D: 'Incorreta (conduta correta). Controle pressórico e eletrolítico é essencial para proteção cardiovascular e renal.',
    },
  },
  {
    id: 'ped-gas-017',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Etiologia da Diarreia Viral: Rotavírus vs Norovírus',
    isRevisao: false,
    enunciado:
      'Com o impacto histórico da introdução da vacina monovalente oral contra rotavírus (VRH) no Programa Nacional de Imunizações (PNI) em 2006, houve uma queda dramática nas internações e óbitos infantis por diarreia grave no Brasil. Em relação ao cenário epidemiológico e microbiológico atual das gastroenterites virais na infância, assinale a afirmação correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O rotavírus foi completamente extinto do planeta e já não infecta seres humanos.',
      },
      {
        id: 'B',
        texto:
          'O Norovírus emergiu como o principal agente causador de surtos epidêmicos de gastroenterite aguda em creches, escolas, enfermarias e ambientes fechados em todas as faixas etárias, caracterizando-se por alta transmissibilidade, vômitos incoercíveis exuberantes ("winter vomiting disease") e diarreia aquosa de curta duração.',
      },
      {
        id: 'C',
        texto:
          'O Rotavírus acomete exclusivamente adolescentes acima de 16 anos.',
      },
      {
        id: 'D',
        texto:
          'As gastroenterites virais exigem compulsoriamente tratamento com aciclovir oral em dose alta.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Após a ampla cobertura vacinal contra o rotavírus, o Norovírus (membro da família Caliciviridae) ascendeu como o agente mais comum de surtos de gastroenterite viral não bacteriana no mundo, acometendo crianças e adultos. Caracteriza-se por dose infectante ínfima (menos de 10 a 20 partículas virais), estabilidade no ambiente, resistência a desinfetantes comuns e transmissão por gotículas de vômito, fômites e água/alimentos contaminados. O quadro clínico clássico envolve início abrupto com vômitos intensos e frequentes ("doença do vômito de inverno"), associados a febrícula, cólicas abdominais e diarreia aquosa autolimitada em 2 a 3 dias.',
    comentariosAlternativas: {
      A: 'Incorreta. O rotavírus ainda circula na população e infecta crianças não vacinadas ou por sorotipos heterólogos, não estando erradicado.',
      B: 'Correta. Norovírus consolidou-se como o patógeno viral líder em surtos institucionais de gastroenterite com vômitos marcantes.',
      C: 'Incorreta. O rotavírus acomete classicamente lactentes e pré-escolares nos primeiros 2 anos de vida.',
      D: 'Incorreta. Antivirais como aciclovir não atuam em vírus de RNA entéricos; o manejo é exclusivamente de suporte de hidratação.',
    },
  },
  {
    id: 'ped-gas-018',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Intolerância Secundária à Lactose Pós-Gastroenterite Viral',
    isRevisao: false,
    enunciado:
      'Um lactente de 6 meses teve diarreia aquosa por rotavírus há 10 dias. A mãe relata que a febre e o quadro inicial melhoraram, mas toda vez que a criança recebe fórmula infantil contendo leite de vaca, volta a evacuar fezes explosivas, líquidas, ácidas, espumosas e com cheiro acre e azedo, associadas a distensão abdominal, flatulência aumentada e hiperemia perianal em "queimadura de fogo" (dermatite amoniacal/ácida grave). Ao exame das fezes: pH fecal < 5,5 e substâncias redutoras nas fezes positivas. Qual é o diagnóstico e a conduta recomendada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Alergia à Proteína do Leite de Vaca (APLV) mediada por IgE de início hiperagudo.',
      },
      {
        id: 'B',
        texto:
          'Intolerância Secundária (transitória) à Lactose, provocada pela descamação e atrofia das vilosidades intestinais com perda da enzima lactase da borda em escova; a conduta é a substituição temporária da fórmula por fórmula isenta de lactose (ou fórmula hidrolisada) por 2 a 4 semanas até a regeneração do epitélio mucoso.',
      },
      {
        id: 'C',
        texto:
          'Galactosemia clássica congênita por deficiência de GALT.',
      },
      {
        id: 'D',
        texto:
          'Doença Celíaca fulminante refratária.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Intolerância Secundária à Lactose é uma complicação transitória relativamente comum após gastroenterites infecciosas virais (especialmente rotavírus) ou bacterianas que causam atrofia das vilosidades do intestino delgado. A enzima lactase localiza-se na porção mais apical das microvilosidades, sendo a primeira a ser perdida com a descamação dos enterócitos maduros e a última a se regenerar. A lactose não digerida permanece na luz cólica exercendo efeito osmótico (diarreia osmótica aquosa) e é fermentada pelas bactérias do cólon, produzindo gases (hidrogênio, metano) e ácidos graxos de cadeia curta. Isso resulta em fezes explosivas com pH ácido (< 5,5), substâncias redutoras nas fezes positivas e dermatite perianal escoriativa ácida. A conduta é utilizar fórmula sem lactose por 2 a 4 semanas.',
    comentariosAlternativas: {
      A: 'Incorreta. A APLV é uma reação imunomediada à proteína (caseína/betalactoglobulina) e não intolerância enzimática a carboidratos com pH ácido.',
      B: 'Correta. Quadro clínico e laboratorial clássico de intolerância transitória à lactose pós-diarreia viral com remissão após uso de fórmula sem lactose temporária.',
      C: 'Incorreta. Galactosemia é um erro inato do metabolismo que se manifesta logo nos primeiros dias de vida com sepse por E. coli, catarata e insuficiência hepática.',
      D: 'Incorreta. Doença celíaca é enteropatia autoimune desencadeada pela ingestão de glúten e não surge subitamente dias após rotavírus em lactente sob fórmula.',
    },
  },
  {
    id: 'ped-gas-019',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Invaginação Intestinal (Intussuscepção) Aguda no Lactente',
    isRevisao: false,
    enunciado:
      'Um lactente de 7 meses, previamente hígido e com ótimo ganho de peso, apresenta crises súbitas e paroxísticas de choro inconsolável e dor abdominal excruciante, fletindo as pernas sobre o abdome e empalidecendo intensamente. Entre as crises de dor (que duram cerca de 10 a 15 minutos), o bebê fica prostrado, sonolento e apático. Após algumas horas, apresenta vômitos inicialmente alimentares que se tornam biliosos e evacua fezes com aspecto característico de "geleia de morango" ou "groselha" (sangue vivo misturado a muco espesso). À palpação abdominal, o médico palpa uma massa tubular alongada com formato de "salsicha" no hipocôndrio direito, associada à sensação de vazio na fossa ilíaca direita (sinal de Dance). Qual é o diagnóstico e o exame confirmatório de escolha?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Doença Diarreica Aguda bacteriana simples; conduta é fezes com pesquisa de leucócitos.',
      },
      {
        id: 'B',
        texto:
          'Invaginação Intestinal Aguda (Intussuscepção ileocólica); o exame de imagem confirmatório padrão-ouro de primeira linha é a Ultrassonografia de Abdome, que evidencia o sinal do "alvo", "rosquinha" (corte transversal) ou "pseudorrim" (corte longitudinal).',
      },
      {
        id: 'C',
        texto:
          'Apendicite aguda perfurada; conduta é punção do saco de Douglas.',
      },
      {
        id: 'D',
        texto:
          'Volvo gástrico crônico por hérnia diafragmática congênita.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Invaginação Intestinal (Intussuscepção) é a causa mais comum de obstrução intestinal em crianças entre 3 meses e 3 anos de idade (pico entre 5 e 9 meses). A forma mais comum é a ileocólica (o íleo terminal invagina para o interior do ceco através da válvula ileocecal, frequentemente precipitada por hipertrofia de placas de Peyer pós-infecção viral prévia). A tétrade clássica inclui: 1) Crises paroxísticas intermitentes de cólica com choro e flexão de pernas; 2) Vômitos (tardiamente biliosos); 3) Massa abdominal em forma de salsicha palpável; 4) Fezes em "geleia de morango" (sangue e muco por isquemia e congestão venosa da alça invaginada). A ultrassonografia é o padrão-ouro com sensibilidade de quase 100%, mostrando o sinal do alvo/rosquinha.',
    comentariosAlternativas: {
      A: 'Incorreta. Fezes em geleia de morango com massa em salsicha e crises paroxísticas definem intussuscepção obstrutiva cirúrgica/radiológica.',
      B: 'Correta. Quadro clínico patognomônico de intussuscepção ileocólica com confirmação ultrassonográfica por sinal do alvo.',
      C: 'Incorreta. A apendicite é incomum em lactentes de 7 meses e cursa com febre alta e irritabilidade peritoneal progressiva contínua.',
      D: 'Incorreta. O volvo gástrico cursa com a tríade de Borchardt (vômitos improdutivos, dor epigástrica e impossibilidade de passar SNG).',
    },
  },
  {
    id: 'ped-gas-020',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Tratamento Não Cirúrgico da Invaginação Intestinal Não Complicada',
    isRevisao: false,
    enunciado:
      'Ainda no contexto do paciente de 7 meses com Invaginação Intestinal ileocólica confirmada por ultrassom, sem sinais de peritonite, sem perfuração livre ao raio-x e com evolução dos sintomas inferior a 24 horas. Qual é a abordagem terapêutica inicial preferencial recomendada pelas diretrizes pediátricas e cirúrgicas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Laparotomia exploradora imediata com ressecção de todo o cólon direito para todos os pacientes.',
      },
      {
        id: 'B',
        texto:
          'Redução não cirúrgica pneumática ou hidrostática (enema guiado por fluoroscopia ou ultrassonografia com ar, bário ou solução salina isotônica), que apresenta taxas de sucesso de 80% a 90% em casos precoces e não complicados.',
      },
      {
        id: 'C',
        texto:
          'Uso exclusivo de laxantes osmóticos em altas doses por via retal.',
      },
      {
        id: 'D',
        texto:
          'Conduta expectante domiciliar com reavaliação em 30 dias.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Na ausência de contraindicações formais (como peritonite bacteriana difusa, choque séptico instável ou pneumoperitônio/perfuração visível ao raio-x), o tratamento de primeira escolha da invaginação intestinal na infância é a REDUÇÃO NÃO CIRÚRGICA. Pode ser realizada por enema com ar (redução pneumática) ou enema líquido com solução salina (redução hidrostática), guiada por ultrassonografia contínua ou radioscopia/fluoroscopia. O procedimento atinge taxas de sucesso de desinvaginação de 80% a 90%, poupando a criança de laparotomia ou ressecção intestinal. A cirurgia fica reservada para falha da redução após 2 a 3 tentativas, presença de perfuração ou peritonite.',
    comentariosAlternativas: {
      A: 'Incorreta. A cirurgia primária não é indicada antes de tentar a redução não invasiva em casos precoces sem sofrimento peritonítico.',
      B: 'Correta. Redução pneumática ou hidrostática é o procedimento de primeira escolha comprovado em invaginação intestinal não complicada.',
      C: 'Incorreta. Laxantes podem precipitar perfuração e necrose isquêmica da alça invaginada.',
      D: 'Incorreta. A invaginação não reduzida evolui com necrose isquêmica transmural, perfuração, peritonite bacteriana fecal e óbito em menos de 24 a 48 horas.',
    },
  },
  {
    id: 'ped-gas-021',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Uso de Racecadotril e Probióticos na DDA Pediátrica',
    isRevisao: false,
    enunciado:
      'Em relação às terapias farmacológicas adjuvantes na Doença Diarreica Aguda (DDA) infantil, analise o mecanismo de ação do Racecadotril e a indicação de probióticos específicos de acordo com as diretrizes da Sociedade Brasileira de Pediatria (SBP) e ESPGHAN:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O racecadotril é um opioide que paralisa a musculatura intestinal provocando sonolência profunda.',
      },
      {
        id: 'B',
        texto:
          'O racecadotril é um inibidor seletivo da encefalinase periférica intestinal (antissecretor puro) que preserva as encefalinas endógenas, reduzindo a hipersecreção de água e eletrólitos na luz intestinal sem alterar o tempo de trânsito intestinal nem provocar distensão gasosa; probióticos específicos com evidência científica sólida (como Saccharomyces boulardii e Lactobacillus rhamnosus GG) podem ser considerados como adjuvantes para reduzir em cerca de 24 horas a duração da diarreia.',
      },
      {
        id: 'C',
        texto:
          'Todos os probióticos são idênticos em eficácia e substituem inteiramente a necessidade de SRO.',
      },
      {
        id: 'D',
        texto:
          'O racecadotril deve ser usado exclusivamente associado à quimioterapia.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O Racecadotril é um pró-fármaco que se converte em tiorfano, um inibidor seletivo e potente da enzima encefalinase da membrana dos enterócitos. A inibição da degradação das encefalinas endógenas intestinais reduz a hipersecreção de água e cloreto induzida por enterotoxinas ou vírus. Por não atuar nos receptores mi centrais, é um "antissecretor puro": não retarda o esvaziamento gástrico, não deprime o trânsito intestinal (não causa íleo nem supercrescimento bacteriano) e não atravessa significativamente a barreira hematoencefálica. Quanto aos probióticos, diretrizes da SBP e ESPGHAN indicam que apenas cepas específicas bem testadas em ensaios randomizados (como Lactobacillus rhamnosus GG e a levedura Saccharomyces boulardii) possuem evidência comprovada de reduzir a duração da diarreia em cerca de 1 dia.',
    comentariosAlternativas: {
      A: 'Incorreta. Este é o mecanismo da loperamida e não do racecadotril.',
      B: 'Correta. Descrição farmacodinâmica precisa do racecadotril como antissecretor puro e papel adjuvante de cepas comprovadas de probióticos.',
      C: 'Incorreta. A eficácia dos probióticos é estritamente cepa-dependente e a SRO permanece a base indispensável insubstituível.',
      D: 'Incorreta. O racecadotril é um medicamento adjuvante para gastroenterite aguda pediátrica.',
    },
  },
  {
    id: 'ped-gas-022',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Ondansetrona na DDA com Êmese Persistente',
    isRevisao: false,
    enunciado:
      'Um pré-escolar de 3 anos de idade com gastroenterite aguda e desidratação leve apresenta episódios repetidos de vômitos que dificultam a aceitação inicial da Solução de Reidratação Oral (SRO) no pronto atendimento. Sobre o uso de antieméticos na gastroenterite pediátrica, assinale a opção que reflete o consenso da Academia Americana de Pediatria (AAP) e da Sociedade Brasileira de Pediatria (SBP):',
    alternativas: [
      {
        id: 'A',
        texto:
          'Metoclopramida e prometazina são as drogas de primeira escolha por sua comprovada segurança extrapiramidal.',
      },
      {
        id: 'B',
        texto:
          'A Ondansetrona (antagonista seletivo dos receptores 5-HT3 de serotonina) em DOSE ÚNICA oral pode ser considerada em crianças com vômitos frequentes durante a diarreia aguda para facilitar o sucesso da Terapia de Reidratação Oral (TRO), diminuir a necessidade de hidratação venosa e reduzir as taxas de hospitalização imediata.',
      },
      {
        id: 'C',
        texto:
          'Os antieméticos devem ser prescritos para uso domiciliar a cada 4 horas por 7 dias consecutivos.',
      },
      {
        id: 'D',
        texto:
          'A ondansetrona é estritamente contraindicada na infância por induzir paralisia cerebral.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Antieméticos tradicionais que atuam bloqueando receptores dopaminérgicos centrais (como metoclopramida) ou receptores histamínicos (prometazina) possuem elevado risco de reações adversas neurológicas graves na infância, incluindo distonia aguda extrapiramidal, sonolência profunda e depressão respiratória, sendo desaconselhados na DDA. Em contraste, a Ondansetrona (bloqueador seletivo 5-HT3) administrada em DOSE ÚNICA oral (0,15 mg/kg ou esquemas por faixa de peso: 2 mg para 8-15 kg; 4 mg para 15-30 kg) demonstrou em múltiplos ensaios clínicos eficácia em reduzir episódios de vômitos nas primeiras horas, facilitar o sucesso da TRO oral e reduzir significativamente a necessidade de punção venosa e internação hospitalar. Não deve ser prescrita para uso domiciliar contínuo.',
    comentariosAlternativas: {
      A: 'Incorreta. Metoclopramida causa crises oculógiras e distonias extrapiramidais graves; prometazina causa depressão respiratória.',
      B: 'Correta. Uso criterioso de ondansetrona em dose única oral é respaldado pelas evidências modernas para viabilizar a TRO.',
      C: 'Incorreta. O uso contínuo ambulatorial não é recomendado, podendo aumentar o número de evacuações líquidas e mascarar outras patologias cirúrgicas.',
      D: 'Incorreta. A ondansetrona é segura e amplamente utilizada em pediatria na dose recomendada.',
    },
  },
  {
    id: 'ped-gas-023',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Diarreia Persistente na Infância: Definição e Riscos',
    isRevisao: false,
    enunciado:
      'Uma lactente de 14 meses é levada à consulta pediátrica com história de diarreia que se iniciou de forma aguda após um quadro gripal, mas que já se estende ininterruptamente há 18 dias consecutivos, com fezes líquidas diárias e estagnação da curva de crescimento pôndero-estatural. De acordo com a Organização Mundial da Saúde (OMS), qual é a definição temporal formal de "Diarreia Persistente" e qual é a principal preocupação clínica associada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Definida por diarreia que dura entre 3 e 5 dias; principal risco é surdez congênita.',
      },
      {
        id: 'B',
        texto:
          'Definida como um episódio diarreico que se inicia de forma aguda, mas que se prolonga por 14 DIAS OU MAIS de duração; a principal preocupação é o ciclo vicioso de má absorção de nutrientes, atrofia progressiva da mucosa intestinal e DESNUTRIÇÃO proteico-calórica aguda grave, que responde por uma proporção desproporcional de mortes por diarreia.',
      },
      {
        id: 'C',
        texto:
          'Definida exclusivamente por diarreia com sangue com mais de 60 dias.',
      },
      {
        id: 'D',
        texto:
          'Definida por uma única evacuação amolecida a cada 3 meses.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Organização Mundial da Saúde (OMS) categoriza a diarreia infantil em três grandes síndromes clínicas: 1) Diarreia Aguda Aquosa: dura menos de 14 dias (habitualmente 5 a 7 dias); 2) Disenteria: diarreia com sangue visível a olho nu; 3) Diarreia Persistente: episódio diarreico de etiologia presumivelmente infecciosa que se inicia de forma aguda e se PROLONGA POR 14 DIAS OU MAIS. Embora represente apenas 3% a 10% de todos os episódios de diarreia na infância, a diarreia persistente é responsável por até 35% a 50% de todas as mortes relacionadas à diarreia, devido à desnutrição calórico-proteica grave, atrofia das vilosidades intestinais e imunodeficiência secundária.',
    comentariosAlternativas: {
      A: 'Incorreta. Diarreia de 3 a 5 dias é a duração típica da diarreia aguda autolimitada banal.',
      B: 'Correta. Critério temporal exato da OMS: >= 14 dias de duração, associada a alto risco de desnutrição e mortalidade.',
      C: 'Incorreta. 14 dias é o marco temporal definidor, e não 60 dias.',
      D: 'Incorreta. Evacuações isoladas esporádicas não preenchem critério de diarreia contínua.',
    },
  },
  {
    id: 'ped-gas-024',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Exames Laboratoriais e Eletrólitos no Choque Hipovolêmico por DDA',
    isRevisao: false,
    enunciado:
      'Durante a ressuscitação volêmica parenteral de um lactente de 6 meses com desidratação grave no Plano C, a gasometria venosa e os eletrólitos colhidos na admissão revelam: pH = 7,18; pCO2 = 28 mmHg; Bicarbonato = 10 mEq/L; Base Excess = -15 mEq/L; Sódio = 132 mEq/L; Potássio = 3,0 mEq/L; Cloreto = 108 mEq/L; Lactato = 4,2 mmol/L. Qual é o distúrbio ácido-básico característico decorrente das perdas intestinais diarreicas e má perfusão tecidual e qual a conduta para sua correção?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Alcalose metabólica hipoclorêmica; infundir ácido clorídrico intravenoso.',
      },
      {
        id: 'B',
        texto:
          'Acidose metabólica com ânion gap misto (perda direta de bicarbonato nas fezes e acúmulo de ácido lático por má perfusão tecidual do choque); a conduta prioritária é a restauração adequada da volemia e perfusão tecidual com solução cristaloide isotônica (SF 0,9% ou Ringer Lactato), sendo a administração rotineira de bicarbonato de sódio desnecessária e desaconselhada.',
      },
      {
        id: 'C',
        texto:
          'Alcalose respiratória primária por hiperventilação pura sem alteração metabólica.',
      },
      {
        id: 'D',
        texto:
          'Acidose respiratória pura tratada com intubação e ventilação mandatória.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A diarreia aguda grave provoca classicamente ACIDOSE METABÓLICA por dois mecanismos complementares: 1) Perda maciça de bicarbonato e potássio no fluido diarréico intestinal distal (acidose hiperclorêmica com ânion gap normal); 2) Hipovolemia com choque, má perfusão tecidual e respiração anaeróbia, gerando hiperlactatemia (acidose lática com ânion gap elevado). O tratamento da acidose metabólica na desidratação diarreica é a RESTAURAÇÃO RÁPIDA DA VOLEMIA E PERFUSÃO TECIDUAL com cristaloides (Plano C). Com a melhora da perfusão, o lactato é metabolizado pelo fígado em bicarbonato e a função renal se restabelece, normalizando o pH. A infusão empírica de bicarbonato de sódio é contraindicada pelo risco de hipernatremia, hipocalcemia aguda, hipocalemia e acidose paradoxal no SNC.',
    comentariosAlternativas: {
      A: 'Incorreta. Alcalose metabólica hipoclorêmica ocorre em perdas gástricas ácidas (vômitos puros da estenose hipertrófica do piloro) e não na diarreia.',
      B: 'Correta. Acidose metabólica mista (perda fecal de bicarbonato + hiperlactatemia do choque) tratada com expansão volêmica isotônica sem bicarbonato de rotina.',
      C: 'Incorreta. A redução da pCO2 é uma compensação respiratória e não o distúrbio primário (que é acidose metabólica grave com HCO3 de 10).',
      D: 'Incorreta. O pH baixo com bicarbonato severamente deprimido confirma acidose de origem primariamente metabólica.',
    },
  },
  {
    id: 'ped-gas-025',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Caso Clínico Desafio Síntese: Manejo Integrado de Gastroenterite Aguda',
    isRevisao: false,
    enunciado:
      'Um lactente de 9 meses, pesando 9 kg, é levado à emergência pediátrica com história de diarreia aquosa profusa e febre há 36 horas. Ao exame físico: paciente prostrado, sonolento mas desperta ao estímulo doloroso; olhos encovados e ressecados; choro sem lágrimas; mucosa jugal seca; tenta beber água quando o copo é encostado nos lábios, mas tosse e engasga por deglutição ineficiente; sinal da prega no abdome retorna em 3 segundos; enchimento capilar de 4 segundos e pulsos periféricos finos. Qual é o diagnóstico exato, a classificação do estado de hidratação e a conduta imediata mandatória segundo os protocolos do Ministério da Saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sem desidratação; iniciar Plano A domiciliar com líquidos caseiros e sulfato de zinco.',
      },
      {
        id: 'B',
        texto:
          'Desidratação leve a moderada; indicar Plano B com SRO por sonda nasogástrica (gastróclise).',
      },
      {
        id: 'C',
        texto:
          'Desidratação Grave com sinais de choque hipovolêmico inicial; indicar PLANO C imediato com Soro Fisiológico a 0,9% (ou Ringer Lactato) por via intravenosa: fase rápida de 30 mL/kg (270 mL) em 30 minutos, seguida por fase de 70 mL/kg (630 mL) em 5 horas e 30 minutos (totalizando 900 mL em 6 horas por ser menor de 1 ano), mantendo monitorização contínua de sinais vitais.',
      },
      {
        id: 'D',
        texto:
          'Abdome agudo perfurativo; transferência imediata para centro cirúrgico para colostomia em alça.',
      },
    ],
    respostaCorreta: 'C',
    comentario:
      'O caso clínico sintetiza a tomada de decisão no paciente pediátrico grave. O lactente preenche critérios inequívocos de DESIDRATAÇÃO GRAVE (classificação da OMS e MS): 1) Sonolência/letargia com rebaixamento do sensório; 2) Olhos muito fundos e sem lágrimas; 3) Bebe mal / engasga (incapacidade de hidratação oral segura); 4) Sinal da prega > 2 segundos; 5) Sinais de choque hipovolêmico (enchimento capilar lentificado de 4s e pulsos finos). A conduta mandatória e urgente é o PLANO C venoso. Sendo menor de 1 ano de idade (9 meses), o esquema preconizado pelo Ministério da Saúde é: 100 mL/kg em 6 horas, divididos em: Fase 1: 30 mL/kg em 30 minutos (para 9 kg = 270 mL); Fase 2: 70 mL/kg em 5 horas e meia (para 9 kg = 630 mL). A tentativa de hidratação oral em paciente com sensório deprimido que engasga é contraindicada pelo risco fatal de broncoaspiração.',
    comentariosAlternativas: {
      A: 'Incorreta. Paciente com rebaixamento do nível de consciência, choque e sinal da prega > 2 segundos tem desidratação grave e morreria em domicílio.',
      B: 'Incorreta. O paciente apresenta critérios de desidratação grave com choque e má perfusão, exigindo acesso venoso e Plano C imediato.',
      C: 'Correta. Diagnóstico preciso de Desidratação Grave com choque e prescrição exata do Plano C venoso do Ministério da Saúde para menores de 1 ano.',
      D: 'Incorreta. Trata-se de choque hipovolêmico por perda hídrica fecal de gastroenterite e não perfuração com indicação cirúrgica.',
    },
  },
  {
    id: 'ped-gas-026',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Refluxo Gastroesofágico Fisiológico ("Regurgitador Feliz")',
    isRevisao: false,
    enunciado:
      'Um lactente de 3 meses, nascido a termo com peso adequado, em aleitamento materno exclusivo sob livre demanda, é levado à consulta de puericultura pelos pais. Eles relatam que o bebê regurgita leite materno sem esforço e sem náuseas praticamente após todas as mamadas (cerca de 5 a 8 episódios ao dia), sujando com frequência as próprias roupas e as dos pais. Ao exame físico: paciente ativo, calmo, sorridente, sem desconforto respiratório ou irritabilidade; o exame abdominal é normal e a curva pôndero-estatural demonstra excelente ganho ponderal (ganhou 35 g/dia no último mês, peso e comprimento no percentil 50). De acordo com os consensos da NASPGHAN, ESPGHAN e da Sociedade Brasileira de Pediatria (SBP), qual é o diagnóstico e a conduta recomendada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Estenose Hipertrófica do Piloro; encaminhar imediatamente para piloromiotomia a Fredet-Ramstedt.',
      },
      {
        id: 'B',
        texto:
          'Refluxo Gastroesofágico Fisiológico ("Regurgitador Feliz" / Happy Spitter); a conduta é conservadora e tranquilizadora: esclarecer aos pais a natureza benigna e autolimitada da condição (resolução na grande maioria dos casos até os 12 meses com a maturação do tônus do esfíncter esofágico inferior e postura ereta), orientar medidas posturais (manter o bebê ereto por 20 a 30 minutos após mamar sem compressão abdominal), sendo FORMALMENTE CONTRAINDICADA a solicitação de exames invasivos ou uso de inibidores de bomba de prótons (IBP) e procinéticos.',
      },
      {
        id: 'C',
        texto:
          'Doença do Refluxo Gastroesofágico grave; prescrever omeprazol 2 mg/kg/dia associado a domperidona.',
      },
      {
        id: 'D',
        texto:
          'Alergia grave mediada por IgE; suspender imediatamente o aleitamento materno e prescrever fórmula de soja.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O caso é clássico do "Regurgitador Feliz" (Happy Spitter), que define o Refluxo Gastroesofágico Fisiológico do lactente jovem. Decorre da imaturidade funcional fisiológica do esfíncter esofágico inferior (EEI), que apresenta relaxamentos transitórios frequentes, associada à dieta exclusivamente líquida de grande volume e permanência em decúbito dorsal. A marca patognomônica é a AUSÊNCIA COMPLETA de sinais de alarme ou complicações: o bebê cresce adequadamente, ganha peso no percentil normal, mama bem sem arqueamentos de dor, não apresenta irritabilidade excessiva, anemia ou sintomas respiratórios. A conduta é estritamente de suporte e tranquilização familiar, orientando postura verticalizada após mamadas. O uso de IBP (omeprazol), bloqueadores H2 ou procinéticos é contraindicado, pois não reduz as regurgitações e aumenta o risco de pneumonias e infecções gastrointestinais.',
    comentariosAlternativas: {
      A: 'Incorreta. Na estenose de piloro os vômitos são em jato, não biliosos, progressivos, acompanhados de perda de peso, desidratação e alcalose metabólica hipoclorêmica.',
      B: 'Correta. Diagnóstico de RGE fisiológico com conduta conservadora, medidas posturais e contraindicação formal a medicamentos inibidores de acidez.',
      C: 'Incorreta. Não há doença (DRGE) na ausência de sintomas de esofagite, déficit ponderal ou sofrimento; IBP não é indicado em RGE fisiológico.',
      D: 'Incorreta. O aleitamento materno deve ser estimulado e mantido; a fórmula de soja é formalmente contraindicada abaixo dos 6 meses de vida.',
    },
  },
  {
    id: 'ped-gas-027',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença do Refluxo Gastroesofágico (DRGE Patológica): Sinais Cardinais',
    isRevisao: false,
    enunciado:
      'Diferenciar o Refluxo Gastroesofágico Fisiológico da Doença do Refluxo Gastroesofágico (DRGE Patológica) é uma das competências clínicas mais cobradas na prática pediátrica. Qual dos seguintes achados clínicos caracteriza a DRGE na infância e exige intervenção diagnóstica e terapêutica direcionada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Regurgitação de leite sem esforço em lactente de 4 meses com ganho ponderal diário de 40 g.',
      },
      {
        id: 'B',
        texto:
          'Presença de complicações atribuíveis ao refluxo: esofagite péptica erosiva, choro inconsolável e arqueamento de tronco durante ou logo após as mamadas (recusa alimentar por odinofagia/dor retroesternal), déficit de ganho pôndero-estatural (falha de crescimento), anemia ferropriva inexplicada por sangramento digestivo oculto ou complicações respiratórias recorrentes (pneumonias aspirativas, broncoespasmo refratário e estridor laringomalácico agravado).',
      },
      {
        id: 'C',
        texto:
          'Evacuações amolecidas amareladas após cada mamada em bebê amamentado ao seio.',
      },
      {
        id: 'D',
        texto:
          'Presença de soluços esporádicos no primeiro mês de vida sem queda de saturação.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Segundo os consensos internacionais (NASPGHAN/ESPGHAN e SBP), o Refluxo Gastroesofágico (RGE) torna-se "DOENÇA" (DRGE) quando a passagem retrógrada do conteúdo gástrico para o esôfago leva a sintomas incômodos que afetam a qualidade de vida OU a complicações orgânicas documentadas. Entre as complicações mais relevantes estão: 1) Esofagite de refluxo (dor, irritabilidade, hematêmese, anemia ferropriva crônica); 2) Falha de crescimento / baixo ganho ponderal decorrente da perda calórica mecânica e recusa das mamadas; 3) Complicações respiratórias por microaspiração ou reflexo vasovagal (tosse crônica noturna, broncoespasmo/asma refratária a broncodilatadores, pneumonias aspirativas de repetição, apneias obstrutivas em lactentes jovens); 4) Síndrome de Sandifer.',
    comentariosAlternativas: {
      A: 'Incorreta. Este é o protótipo do lactente com RGE fisiológico ("regurgitador feliz") com excelente desenvolvimento.',
      B: 'Correta. Critérios de definição da DRGE patológica: presença inequívoca de complicações esofágicas, nutricionais ou extraesofágicas respiratórias.',
      C: 'Incorreta. Evacuações frequentes semilíquidas em lactente sob seio materno representam o reflexo gastrocólico fisiológico normal.',
      D: 'Incorreta. Soluços pós-mamada decorrem de distensão gástrica benigna transitória por ar deglutido.',
    },
  },
  {
    id: 'ped-gas-028',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Síndrome de Sandifer: Postura Distônica e Mecanismo Fisiopatológico',
    isRevisao: false,
    enunciado:
      'Um lactente de 5 meses é encaminhado ao neurologista pediátrico com suspeita diagnóstica de crises epilépticas focais motoras ou espasmos infantis. Os pais relatam episódios frequentes e estereotipados em que o bebê apresenta arqueamento súbito do tronco para trás (postura em opistótono), hiperextensão do pescoço e inclinação/torção espasmódica da cabeça para um dos lados, acompanhados de irritabilidade e choro. O pediatra atento nota que esses episódios ocorrem invariavelmente cerca de 15 a 30 minutos após as mamadas. O eletroencefalograma (EEG) em vigília e sono é rigorosamente normal. Qual é o diagnóstico e o significado fisiopatológico desse quadro?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome de West clássica com hipsarritmia interictal.',
      },
      {
        id: 'B',
        texto:
          'Síndrome de Sandifer; uma manifestação neurocomportamental reflexa atípica da DRGE com esofagite grave, na qual o arqueamento cervical e a postura em opistótono representam uma tentativa reflexa e mecânica do lactente de descomprimir o esôfago inferior, estirar a cárdia e aliviar a dor do espasmo esofágico e a queimação ácida.',
      },
      {
        id: 'C',
        texto:
          'Tétano neonatal por contaminação do coto umbilical.',
      },
      {
        id: 'D',
        texto:
          'Torcicolo congênito fibrótico muscular por parto distócico.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Síndrome de Sandifer é uma complicação extrapulmonar e neurocomportamental clássica da Doença do Refluxo Gastroesofágico associada à esofagite erosiva em lactentes e crianças pequenas. Caracteriza-se por movimentos paroxísticos de torcicolo espasmódico, hiperextensão cervical e arqueamento anormal do tronco em opistótono que surgem tipicamente no período pós-prandial imediato. A manobra postural é involuntária/reflexa e visa alongar o esôfago distal, diminuindo o contato da secreção cloridropéptica com a mucosa esofágica ulcerada e aliviando a dor epigástrica e retroesternal. É frequentemente confundida de forma errônea com crises convulsivas, distonias primárias ou espasmos infantis. O tratamento direcionado da DRGE com IBP e medidas antirrefluxo promove a remissão completa dos episódios posturais.',
    comentariosAlternativas: {
      A: 'Incorreta. A Síndrome de West cursa com espasmos em flexão/extensão agrupados ao despertar, atraso de DNPM e EEG com padrão patognomônico de hipsarritmia.',
      B: 'Correta. Síndrome de Sandifer típica: postura distônica espasmódica pós-prandial associada à dor de esofagite de refluxo com EEG normal.',
      C: 'Incorreta. Tétano neonatal manifesta-se nos primeiros dias de vida por trismo ("boca de peixe"), hipertonia generalizada e espasmos aos estímulos sonoros/luminosos.',
      D: 'Incorreta. O torcicolo muscular congênito decorre de nódulo/fibrose do esternocleidomastoideo permanente e não crises paroxísticas pós-prandiais.',
    },
  },
  {
    id: 'ped-gas-029',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Investigação Armada na DRGE: Papel da pH-metria e EDA',
    isRevisao: false,
    enunciado:
      'Em relação aos métodos diagnósticos complementares utilizados na avaliação da Doença do Refluxo Gastroesofágico (DRGE) e de suas complicações em pediatria, assinale a correlação tecnicamente correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A radiografia contrastada de esôfago, estômago e duodeno (EED / REED) é o exame padrão-ouro para quantificar e confirmar a DRGE.',
      },
      {
        id: 'B',
        texto:
          'A Endoscopia Digestiva Alta (EDA) com biópsias esofágicas é o método de escolha para o diagnóstico e estadiamento da esofagite de refluxo e para descartar outras afecções da mucosa esofágica (como esofagite eosinofílica e infecções); enquanto a pH-metria ou pH-impedanciometria esofágica de 24 horas é o método padrão para quantificar a exposição ácida e correlacionar refluxos (ácidos e não ácidos) com sintomas clínicos atípicos.',
      },
      {
        id: 'C',
        texto:
          'A ultrassonografia abdominal é o exame com maior sensibilidade mundial para graduar a intensidade da esofagite química.',
      },
      {
        id: 'D',
        texto:
          'A tomografia de tórax com contraste deve ser realizada semanalmente em todo lactente que regurgita.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Papel preciso dos exames na DRGE pediátrica: 1) Endoscopia Digestiva Alta (EDA) com biópsias: padrão-ouro para documentar dano mucoso (esofagite erosiva, estenose péptica, metaplasia de Barrett) e diferenciar a DRGE da Esofagite Eosinofílica (EoE - caracterizada por >= 15 eosinófilos por campo de grande aumento na biópsia); 2) pH-impedanciometria intraluminal esofágica multicanal de 24h: padrão-ouro para quantificar a frequência e a altura da exposição ácida e não ácida e calcular o índice de correlação sintomática (relação temporal entre eventos de refluxo e sintomas como tosse, apneia e arqueamentos); 3) REED (contraste baritado): NÃO diagnostica nem quantifica DRGE (refluxo de bário ocorre em indivíduos normais), servindo exclusivamente para avaliar alterações anatômicas estruturais (estenose, anel vascular, má-rotação intestinal, hérnia hiatal).',
    comentariosAlternativas: {
      A: 'Incorreta. O REED avalia anatomia e não quantifica refluxo fisiológico de patológico.',
      B: 'Correta. Correlação exata: EDA para lesão de mucosa/esofagite e biópsia, e pH-metria/impedanciometria para quantificação de exposição e correlação com sintomas.',
      C: 'Incorreta. Ultrassom não visualiza mucosa esofágica interna para graduar esofagite.',
      D: 'Incorreta. Exposição maciça e inútil à radiação ionizante.',
    },
  },
  {
    id: 'ped-gas-030',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Tratamento Farmacológico da DRGE: Inibidores da Bomba de Prótons (IBP)',
    isRevisao: false,
    enunciado:
      'Um lactente de 6 meses tem diagnóstico comprovado de Doença do Refluxo Gastroesofágico com esofagite erosiva moderada documentada por EDA e baixo ganho de peso. Qual é a classe farmacológica de primeira linha indicada para promover a cicatrização da mucosa esofágica e qual a orientação correta de administração?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Inibidores da Bomba de Prótons - IBP (como Omeprazol ou Esomeprazol na dose de 1 a 2 mg/kg/dia), administrados preferencialmente em dose única pela manhã, cerca de 30 a 60 minutos antes da primeira refeição/mamada do dia.',
      },
      {
        id: 'B',
        texto:
          'Metoclopramida oral em altas doses associada a xarope de codeína.',
      },
      {
        id: 'C',
        texto:
          'Corticoterapia oral sistêmica em pulsoterapia contínua.',
      },
      {
        id: 'D',
        texto:
          'Antibioticoterapia com amoxicilina oral por 6 meses ininterruptos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Os Inibidores da Bomba de Prótons (IBPs - Omeprazol, Esomeprazol, Lansoprazol) são os fármacos de primeira linha comprovadamente superiores aos bloqueadores H2 para a cicatrização da esofagite erosiva e alívio dos sintomas da DRGE na infância. A dose pediátrica habitual é de 1 a 2 mg/kg/dia (fracionada em 1 ou 2 tomadas). Farmacocineticamente, os IBPs ligam-se covalentemente e bloqueiam a bomba H+/K+ ATPase ativada; portanto, para máxima eficácia, devem ser administrados cerca de 30 a 60 minutos ANTES da primeira ingestão calórica matinal (pois a alimentação estimula a fusão das bombas à membrana canalicular do canalículo secretor das células parietais). O tempo de tratamento recomendado para cicatrização da esofagite é de 8 a 12 semanas, seguido de desmame gradual.',
    comentariosAlternativas: {
      A: 'Correta. IBPs (omeprazol/esomeprazol 1-2 mg/kg/dia) administrados 30 a 60 minutos antes da alimentação matinal são a terapia de primeira linha para esofagite por DRGE.',
      B: 'Incorreta. Metoclopramida tem alto risco de reações extrapiramidais e procinéticos não cicatrizam esofagite; codeína é contraindicada em crianças.',
      C: 'Incorreta. Corticoides não tratam DRGE comum e pioram a secreção ácida gástrica com risco de úlceras.',
      D: 'Incorreta. Antibióticos não têm ação na fisiopatologia da DRGE e induzem seleção bacteriana.',
    },
  },
  {
    id: 'ped-gas-031',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Esofagite Eosinofílica (EoE) vs DRGE: Diagnóstico Diferencial',
    isRevisao: false,
    enunciado:
      'Um menino de 9 anos com antecedentes pessoais de dermatite atópica grave, rinite alérgica e asma procura o gastroenterologista pediátrico com história de disfagia crônica para sólidos (sensação de entalo no peito), dor retroesternal diária e dois episódios de impactação alimentar aguda por carne bovina que necessitaram de desimpactação hospitalar. O paciente fez uso prévio de Omeprazol em dose alta por 12 semanas sem qualquer melhora clínica. A Endoscopia Digestiva Alta revela esôfago com anéis circulares concêntricos ("esôfago traquealizado" ou felino), sulcos lineares longitudinais e exsudatos pontilhados esbranquiçados. As biópsias do esôfago médio e distal revelam infiltrado inflamatório com pico de 35 eosinófilos por campo de grande aumento (CGA). Qual é o diagnóstico?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Doença do Refluxo Gastroesofágico péptica não complicada.',
      },
      {
        id: 'B',
        texto:
          'Esofagite Eosinofílica (EoE).',
      },
      {
        id: 'C',
        texto:
          'Megaesôfago chagásico com acalasia clássica por Trypanosoma cruzi.',
      },
      {
        id: 'D',
        texto:
          'Câncer epidermoide de esôfago inicial.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Esofagite Eosinofílica (EoE) é uma doença imunomediada antígeno-dependente crônica do esôfago, fortemente associada ao perfil atópico (asma, rinite, dermatite atópica). Em escolares e adolescentes, a manifestação clínica dominante é a DISFAGIA progressiva para alimentos sólidos e episódios de IMPACTAÇÃO ALIMENTAR na transição esofágica. Os achados endoscópicos clássicos incluem anéis cartilaginosos concêntricos ("esôfago felino" ou em aspecto de traqueia), sulcos longitudinais e placas exsudativas esbranquiçadas (microabscessos eosinofílicos). O critério histopatológico obrigatório é a presença de inflamação esofágica com corte de no mínimo >= 15 eosinófilos por campo de grande aumento (CGA) em biópsias do epitélio esofágico, refratária ou persistente a IBP isolado.',
    comentariosAlternativas: {
      A: 'Incorreta. Na DRGE comum, o número de eosinófilos na biópsia é baixo (< 10-15/CGA) e o paciente responde favoravelmente a IBP, sem aspecto de esôfago traquealizado.',
      B: 'Correta. Diagnóstico clássico de Esofagite Eosinofílica: história atópica + disfagia/impactação alimentar + anéis concêntricos na EDA + infiltrado >= 15 eosinófilos/CGA.',
      C: 'Incorreta. Acalasia cursa com ausência de relaxamento do EEI e aperistalse esofágica na manometria, sem os múltiplos anéis e o infiltrado com 35 eosinófilos/CGA.',
      D: 'Incorreta. Neoplasia esofágica é extremamente rara na faixa pediátrica escolar.',
    },
  },
  {
    id: 'ped-gas-032',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'APLV Não-IgE Mediada: Proctocolite Alérgica Induzida por Proteína Alimentar',
    isRevisao: false,
    enunciado:
      'Um lactente de 2 meses de vida, em aleitamento materno exclusivo desde o nascimento, é levado à consulta pediátrica porque a mãe notou a presença de pequenos filamentos e rajas de sangue vermelho-vivo misturados a muco nas fezes amareladas há 4 dias consecutivos. A mãe informa que a criança não tem febre, evacua sem esforço ou dor, mama vigorosamente ao seio materno, dorme bem e nunca apresentou vômitos. Ao exame físico: paciente em excelente estado geral, corado, hidratado, abdome flácido e indolor sem visceromegalias, ânus rigorosamente íntegro sem fissuras perianais ou escoriações e ganho de peso excelente no percentil 75. Qual é o diagnóstico provável e qual o mecanismo imunológico envolvido?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Doença de Crohn de início precoce com mutação no gene IL10.',
      },
      {
        id: 'B',
        texto:
          'Proctocolite Alérgica Induzida por Proteína Alimentar (manifestação clássica Não-IgE mediada da APLV transmitida através das proteínas intactas do leite de vaca ingerido pela nutriz e excretadas no leite materno).',
      },
      {
        id: 'C',
        texto:
          'Fissura anal traumática com sangramento mecânico.',
      },
      {
        id: 'D',
        texto:
          'Volvulus de intestino médio com necrose isquêmica transmural.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Proctocolite Alérgica Induzida por Proteína Alimentar é a forma clínica Não-IgE mediada mais prevalente de Alergia à Proteína do Leite de Vaca (APLV) nos primeiros meses de vida. Caracteriza-se pela ocorrência de fezes amolecidas contendo estrias de sangue vermelho-vivo e muco em um lactente jovem (tipicamente entre 1 e 6 meses de vida) em EXCELENTE ESTADO GERAL e com crescimento pôndero-estatural rigorosamente normal. Pode ocorrer em bebês sob fórmula infantil ou, com muita frequência, em bebês amamentados ao seio materno exclusivo, devido à passagem transmamária de traços de betalactoglobulina e caseína intactas oriundas da dieta da mãe. O exame proctológico descarta fissura anal e o abdome é inocente. A imunidade celular mediada por linfócitos T e eosinófilos no reto e sigmoide é a base da lesão mucosal superficial.',
    comentariosAlternativas: {
      A: 'Incorreta. Doença inflamatória intestinal é extremamente rara nessa idade precoce e cursa com febre, diarreia inflamatória crônica com queda ponderal e lesões perianais fistulosas.',
      B: 'Correta. Proctocolite alérgica não-IgE mediada clássica: bebê sob aleitamento materno com fezes com muco e sangue, ativo e com excelente ganho de peso.',
      C: 'Incorreta. O enunciado descreve explicitamente inspeção anal e perianal intacta sem nenhuma fissura.',
      D: 'Incorreta. O vólvulo de intestino médio é uma catástrofe cirúrgica hiperaguda que cursa com vômitos biliosos incoercíveis, choque e distensão grave.',
    },
  },
  {
    id: 'ped-gas-033',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Manejo Dietético da Proctocolite Alérgica no Lactente sob Seio Materno',
    isRevisao: false,
    enunciado:
      'Para o lactente de 2 meses do caso anterior com Proctocolite Alérgica confirmada clinicamente em aleitamento materno exclusivo, qual é a conduta nutricional e terapêutica correta indicada pela Sociedade Brasileira de Pediatria (SBP) e ESPGHAN?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Suspender imediatamente o aleitamento materno e prescrever fórmula de soja para a criança.',
      },
      {
        id: 'B',
        texto:
          'MANTER o aleitamento materno exclusivo e orientar DIETA DE EXCLUSÃO ESTREITA de todas as proteínas do leite de vaca e derivados para a NUTRIZ (mãe), com suplementação obrigatória de Carbonato/Citrato de Cálcio (1.000 a 1.200 mg/dia) e Vitamina D para a mãe durante o período da dieta.',
      },
      {
        id: 'C',
        texto:
          'Prescrever amoxicilina oral para a criança por 14 dias para erradicar a flora do cólon.',
      },
      {
        id: 'D',
        texto:
          'Iniciar corticoterapia oral em dose imunossupressora para o bebê.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A regra de ouro da nutrologia e alergologia pediátrica é que o Aleitamento Materno NUNCA deve ser interrompido diante da suspeita de proctocolite alérgica em lactente com ganho de peso preservado. A conduta correta é: 1) MANTER o seio materno exclusivo; 2) Instituir Dieta de Exclusão estrita de leite de vaca, produtos lácteos e alimentos que contenham traços de leite para a MÃE lactante; 3) Suplementar Cálcio elementar (1.000 a 1.200 mg/dia) e Vitamina D (600 a 800 UI/dia) para a nutriz durante todo o período da restrição láctea para prevenir perda de densidade mineral óssea materna. O sangue nas fezes do bebê costuma cessar progressivamente entre 72 horas e 1 a 2 semanas após a exclusão materna completa.',
    comentariosAlternativas: {
      A: 'Incorreta. Suspender o leite materno é um erro grave e priva o lactente de todos os benefícios biológicos; fórmulas de soja são contraindicadas em menores de 6 meses.',
      B: 'Correta. Preservação do aleitamento materno com dieta de exclusão de leite e derivados para a mãe e suplementação de cálcio e vitamina D materna.',
      C: 'Incorreta. Antibióticos não tratam processos alérgicos imunomediados e causam disbiose intestinal.',
      D: 'Incorreta. Proctocolite alérgica tem prognóstico benigno com resolução espontânea na infância e não exige corticoides sistêmicos no bebê.',
    },
  },
  {
    id: 'ped-gas-034',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Síndrome FPIES (Food Protein-Induced Enterocolitis Syndrome)',
    isRevisao: false,
    enunciado:
      'Um lactente de 4 meses recebe pela primeira vez uma mamadeira de fórmula infantil à base de leite de vaca. Cerca de 2 a 3 horas após a ingestão da fórmula, a criança evolui subitamente com vômitos profusos, incoercíveis e repetidos (mais de 6 episódios em 1 hora), tornando-se extremamente pálida, flácida, letárgica e hipotensa, necessitando de atendimento de emergência na sala de reanimação. Os exames de sangue colhidos revelam leucocitose neutrofílica importante com desvio à esquerda e acidose metabólica, mimetizando sepse grave. Após hidratação venosa rápida vigorosa na emergência, a criança recupera-se plenamente em poucas horas. A pesquisa de IgE específica sérica para leite de vaca e o Prick Test são RIGOROSAMENTE NEGATIVOS. Qual é a denominação clínica dessa grave manifestação Não-IgE mediada da APLV?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Choque anafilático clássico dependente de anticorpos IgE com degranulação mastocitária imediata.',
      },
      {
        id: 'B',
        texto:
          'Síndrome de Enterocolite Induzida por Proteína Alimentar (FPIES - Food Protein-Induced Enterocolitis Syndrome).',
      },
      {
        id: 'C',
        texto:
          'Estenose congênita do duodeno por pâncreas anular.',
      },
      {
        id: 'D',
        texto:
          'Deficiência primária de adesão leucocitária tipo 1.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Síndrome de Enterocolite Induzida por Proteína Alimentar (FPIES) é uma emergência pediátrica alérgica NÃO mediada por IgE, desencadeada predominantemente por leite de vaca ou soja (e mais tarde por arroz ou aveia). Caracteriza-se por uma reação imunológica celular tardia: 1 a 4 horas após a ingestão do antígeno proteico, o paciente apresenta vômitos repetitivos profusos em jato, seguidos por letargia profunda, hipotermia, palidez cinzenta e choque hipovolêmico descompensado por sequestro de fluidos na luz intestinal. Laboratorialmente há leucocitose marcante com neutrofilia que simula sepse bacteriana, com IgE específica e testes cutâneos totalmente negativos. O manejo agudo exige expansão volêmica cristaloide venosa imediata e ondansetrona intravenosa.',
    comentariosAlternativas: {
      A: 'Incorreta. Na anafilaxia clássica IgE-mediada o quadro é imediato (< 30-60 min) com urticária, angioedema, broncoespasmo e testes de IgE fortemente positivos.',
      B: 'Correta. Descrição fidedigna da FPIES aguda: vômitos profusos 2-3h pós-ingestão, letargia, choque hipovolêmico, neutrofilia e testes de IgE negativos.',
      C: 'Incorreta. Pâncreas anular cursa com vômitos biliosos neonatais desde o primeiro dia com sinal da dupla bolha ao raio-x.',
      D: 'Incorreta. LAD-1 cursa com queda tardia do cordão umbilical e infecções bacterianas graves sem pus.',
    },
  },
  {
    id: 'ped-gas-035',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Manifestações IgE-Mediadas da APLV vs Não-IgE Mediadas',
    isRevisao: false,
    enunciado:
      'As reações alérgicas à proteína do leite de vaca na infância são imunologicamente divididas em IgE-mediadas, Não-IgE mediadas e mistas. Qual das seguintes manifestações clínicas é o protótipo de uma reação alérgica estritamente MEDIADA POR IgE?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Urticária aguda com placas eritematosas pruriginosas e angioedema em lábios e pálpebras, surgindo de forma hiperaguda (dentro de 15 a 30 minutos) logo após a ingestão de algumas gotas de leite de vaca.',
      },
      {
        id: 'B',
        texto:
          'Proctocolite com pequenas estrias de sangue nas fezes em bebê assintomático de 2 meses.',
      },
      {
        id: 'C',
        texto:
          'Diarreia crônica com má absorção e atrofia vilositária que se instala após 3 semanas de uso contínuo de fórmula infantil.',
      },
      {
        id: 'D',
        texto:
          'Constipação intestinal crônica funcional com retenção fecal e fezes em cíbalos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As manifestações IgE-mediadas da APLV decorrem da desgranulação imediata de mastócitos e basófilos sensibilizados por anticorpos IgE específicos contra frações proteicas (caseína, alfa-lactalbumina, betalactoglobulina). Caracterizam-se por: 1) Início hiperagudo (minutos até no máximo 1 a 2 horas após a ingestão); 2) Sintomas mucocutâneos típicos (urticária aguda, eritema perioral, prurido labial, angioedema de face, lábios e pálpebras); 3) Sintomas respiratórios imediatos (tosse seca, estridor laríngeo, broncoespasmo, sibilância); 4) Anafilaxia e colapso circulatório. Em contraste, a proctocolite alérgica e a enteropatia são reações Não-IgE mediadas (celulares) com início insidioso após dias ou semanas.',
    comentariosAlternativas: {
      A: 'Correta. Manifestação IgE-mediada típica: urticária e angioedema de início hiperagudo (< 30 min) mediado por histamina.',
      B: 'Incorreta. Proctocolite é o modelo clássico de reação Não-IgE mediada celular da infância.',
      C: 'Incorreta. Enteropatia induzida por proteína é reação Não-IgE mediada tardia.',
      D: 'Incorreta. A constipação secundária à APLV é uma manifestação motora gastrointestinal Não-IgE mediada.',
    },
  },
  {
    id: 'ped-gas-036',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Fórmulas Hipoalergênicas: Fórmula Extensamente Hidrolisada vs Aminoácidos',
    isRevisao: false,
    enunciado:
      'Um lactente de 3 meses, alimentado exclusivamente com fórmula infantil comum de partida, é diagnosticado com APLV na forma de proctocolite alérgica com estrias de sangue nas fezes. A mãe não pode amamentar ao seio por razões médicas documentadas. De acordo com as diretrizes da Sociedade Brasileira de Pediatria (SBP) e ESPGHAN, qual é a fórmula de PRIMEIRA ESCOLHA para este lactente e quais as indicações formais da Fórmula à base de Aminoácidos Livres?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Primeira escolha: Leite de cabra pasteurizado integral; a fórmula de aminoácidos é indicada para prevenção primária em crianças saudáveis.',
      },
      {
        id: 'B',
        texto:
          'Primeira escolha: Fórmula com Proteína Extensamente Hidrolisada (FEH), tolerada por mais de 90% a 95% dos lactentes com APLV; a Fórmula à base de Aminoácidos Livres (FAA) fica reservada para casos de anafilaxia prévia grave, síndrome FPIES grave com choque, comprometimento nutricional grave com falha de crescimento e enteropatia perdedora de proteínas, ou refratariedade/falha clínica após 2 a 4 semanas de uso correto da FEH.',
      },
      {
        id: 'C',
        texto:
          'Primeira escolha: Fórmula infantil parcialmente hidrolisada (HA); aminoácidos são contraindicados pelo risco de sobrecarga renal.',
      },
      {
        id: 'D',
        texto:
          'Primeira escolha: Fórmula à base de soja enriquecida com metionina para qualquer idade a partir do nascimento.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'As diretrizes pediátricas internacionais e nacionais estabelecem a hierarquia estrita das fórmulas no tratamento da APLV: 1) Fórmula com Proteína Extensamente Hidrolisada (FEH - contendo peptídeos com peso molecular inferior a 1.500 a 3.000 Daltons): é a PRIMEIRA ESCOLHA terapêutica para a grande maioria dos lactentes com sintomas leves a moderados (proctocolite alérgica, esofagite, dermatite); 2) Fórmula de Aminoácidos Livres (FAA - elementos monoméricos individuais totalmente sintéticos, 100% não imunogênicos): indicada inicialmente apenas para: histórico de anafilaxia grave, síndrome FPIES grave com choque, atraso de crescimento acentuado com hipoalbuminemia/edema (enteropatia), ou quando o lactente persiste com sintomas/sangramento após uso da FEH (falha terapêutica). Fórmulas parcialmente hidrolisadas (HA) são preventivas para risco atópico e NUNCA devem ser usadas no tratamento da APLV instalada (possuem alérgenos intactos). Leite de cabra e ovelha possuem reatividade cruzada > 90% com leite de vaca e são proscritos.',
    comentariosAlternativas: {
      A: 'Incorreta. Leite de cabra possui reatividade cruzada de mais de 90% com leite de vaca e risco grave de anafilaxia.',
      B: 'Correta. FEH é a primeira escolha padrão; fórmula de aminoácidos é reservada para anafilaxia, FPIES, desnutrição grave ou falha da FEH.',
      C: 'Incorreta. Fórmula parcialmente hidrolisada (HA) mantém epitopos imunogênicos intactos e desencadeia choque e sangramento na APLV.',
      D: 'Incorreta. A fórmula de soja é formalmente contraindicada abaixo dos 6 meses de vida pelo risco de fitoestrógenos e alta taxa de co-sensibilização.',
    },
  },
  {
    id: 'ped-gas-037',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Fórmula de Soja na APLV: Contraindicação em Menores de 6 Meses',
    isRevisao: false,
    enunciado:
      'A utilização de fórmulas à base de proteína isolada de soja é comum na prática clínica ambulatorial, mas requer rigoroso respeito às faixas etárias e indicações clínicas. Por que a Sociedade Brasileira de Pediatria (SBP), a ESPGHAN e a Academia Americana de Pediatria (AAP) CONTRAINDICAM FORMALMENTE a prescrição de fórmulas de soja para lactentes com APLV com IDADE INFERIOR A 6 MESES?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Porque a soja estimula a proliferação de retrovírus oncogênicos no trato gastrointestinal do recém-nascido.',
      },
      {
        id: 'B',
        texto:
          'Devido à elevada taxa de co-sensibilização e reação alérgica cruzada à proteína da soja no intestino imaturo do lactente jovem (até 30% a 50% dos lactentes com APLV não-IgE mediada desenvolvem alergia secundária à soja), alto teor de fitatos que quelam cálcio, fósforo e ferro prejudicando a mineralização óssea, e presença de fitoestrógenos (isoflavonas) com potenciais efeitos endócrinos no desenvolvimento gonadal infantil.',
      },
      {
        id: 'C',
        texto:
          'Porque a soja não contém água em sua composição química após reconstituição.',
      },
      {
        id: 'D',
        texto:
          'Porque a proteína de soja induz hipertensão arterial pulmonar neonatal primária.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A contraindicação estrita da fórmula infantil de soja para menores de 6 meses de idade fundamenta-se em três pilares biológicos: 1) Alto índice de reatividade cruzada/co-sensibilização: o epitélio intestinal do lactente nos primeiros 6 meses é altamente permeável a macromoléculas; até 30% a 50% dos lactentes menores de 6 meses com APLV (especialmente com sintomas gastrointestinais Não-IgE mediados) desenvolvem alergia concorrente à proteína da soja; 2) Presença de Fitatos: ligam-se a cátions divalentes no lúmen intestinal, inibindo a absorção de ferro, zinco e cálcio, com prejuízo pôndero-estatural e da mineralização óssea; 3) Elevadas concentrações de Isoflavonas (fitoestrógenos): compostos com atividade semelhante ao estrogênio que podem interferir no eixo hipotálamo-hipófise-gonadal em fase crítica de maturação sexual.',
    comentariosAlternativas: {
      A: 'Incorreta. Não existe relação entre proteína de soja e indução retroviral oncológica.',
      B: 'Correta. Fundamentação científica completa: co-sensibilização alérgica intestinal, fitatos quelantes de minerais e risco endócrino por isoflavonas.',
      C: 'Incorreta. Fórmulas de soja reconstituídas em água purificada possuem hidratação normal.',
      D: 'Incorreta. A proteína vegetal purificada não tem relação patogênica com hipertensão pulmonar persistente do recém-nascido.',
    },
  },
  {
    id: 'ped-gas-038',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Teste de Provocação Oral (TPO): Padrão-Ouro Diagnóstico na APLV',
    isRevisao: false,
    enunciado:
      'Uma lactente de 8 meses com suspeita de APLV fez dieta de exclusão de leite de vaca por 4 semanas, apresentando remissão completa de todos os sintomas gastrointestinais e cutâneos que apresentava anteriormente. Para a confirmação diagnóstica definitiva da alergia e diferenciação com outras afecções transitórias, qual é o exame considerado PADRÃO-OURO pelas diretrizes internacionais e nacionais?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Biópsia retal seriada com dosagem de IgA salivar.',
      },
      {
        id: 'B',
        texto:
          'Teste de Provocação Oral (TPO) desencadeado com oferta controlada do alimento suspeito após o período de melhora com a dieta de exclusão, sob supervisão médica adequada.',
      },
      {
        id: 'C',
        texto:
          'Pesquisa de sangue oculto nas fezes após vacinação contra varicela.',
      },
      {
        id: 'D',
        texto:
          'Tomografia computadorizada de abdome com duplo contraste baritado.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O Teste de Provocação Oral (TPO), idealmente duplo-cego e placebo-controlado (ou aberto na prática clínica cotidiana), permanece o PADRÃO-OURO indiscutível para o diagnóstico definitivo de APLV (tanto nas formas IgE-mediadas quanto nas Não-IgE mediadas). Nenhum exame laboratorial isolado (seja dosagem de IgE específica sérica ou teste cutâneo Prick Test) é capaz de fechar o diagnóstico por si só, pois apenas indicam sensibilização alérgica e não a reatividade clínica real da mucosa. O TPO confirma a alergia quando os sintomas reaparecem com a reintrodução do leite de vaca após um período documentado de melhora com a dieta de exclusão (2 a 4 semanas). Em pacientes com história de anafilaxia prévia grave recente com risco de óbito, o TPO pode ser adiado ou dispensado.',
    comentariosAlternativas: {
      A: 'Incorreta. Biópsias retais são procedimentos invasivos desnecessários na rotina ambulatorial da APLV.',
      B: 'Correta. O Teste de Provocação Oral (TPO) é o padrão-ouro consagrado para confirmação diagnóstica da alergia alimentar.',
      C: 'Incorreta. Sangue oculto nas fezes é inespecífico e não estabelece o diagnóstico causal.',
      D: 'Incorreta. Imagem de abdome não tem utilidade no diagnóstico da alergia alimentar.',
    },
  },
  {
    id: 'ped-gas-039',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Intolerância à Lactose: Fisiopatologia e Tipos',
    isRevisao: false,
    enunciado:
      'A Intolerância à Lactose e a Alergia à Proteína do Leite de Vaca (APLV) são entidades clínicas frequentemente confundidas por pacientes e profissionais, embora apresentem bases fisiopatológicas completamente distintas. Sobre a Intolerância à Lactose na infância, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A intolerância à lactose decorre de uma reação inflamatória mediada por anticorpos IgE que induz anafilaxia com broncoespasmo.',
      },
      {
        id: 'B',
        texto:
          'A intolerância à lactose é um distúrbio metabólico/enzimático não imunológico decorrente da deficiência da enzima lactase (beta-galactosidase) na borda em escova dos enterócitos do intestino delgado, resultando na incapacidade de hidrolisar a lactose (dissacarídeo) em glicose e galactose; a forma primária do tipo adulto (hipolactasia primária) raramente se manifesta clinicamente antes dos 3 a 5 anos de idade.',
      },
      {
        id: 'C',
        texto:
          'A deficiência congênita de lactase afeta mais de 80% de todas as crianças brasileiras saudáveis no primeiro ano de vida.',
      },
      {
        id: 'D',
        texto:
          'O tratamento da intolerância à lactose exige dieta de exclusão de proteínas bovinas em fórmula de aminoácidos.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Intolerância à Lactose é uma disfunção NÃO IMUNOLÓGICA puramente digestiva. A lactose é um dissacarídeo composto por glicose e galactose que necessita da clivagem pela enzima lactase para ser absorvida. Tipos de deficiência: 1) Hipolactasia primária do tipo adulto: declínio geneticamente programado da expressão da lactase após o desmame; por ser um processo fisiológico gradual, seus sintomas raramente começam antes dos 3 a 5 anos de idade (sendo muito improvável em lactentes); 2) Intolerância secundária: lesão vilositária pós-infecciosa temporária em qualquer idade; 3) Deficiência congênita de lactase: condição autossômica recessiva excepcional e gravíssima em que o neonato não produz lactase desde o nascimento, desidratando nas primeiras horas de vida ao receber leite materno.',
    comentariosAlternativas: {
      A: 'Incorreta. Este é o mecanismo da APLV IgE-mediada; a intolerância à lactose não envolve anticorpos nem risco de anafilaxia.',
      B: 'Correta. Definição bioquímica precisa e aspecto epidemiológico fundamental: hipolactasia primária não surge no lactente jovem (< 3 a 5 anos).',
      C: 'Incorreta. A deficiência congênita é um erro genético excepcional no mundo; no primeiro ano a expressão de lactase é máxima para digerir o leite materno.',
      D: 'Incorreta. A intolerância à lactose envolve carboidrato (açúcar do leite), requerendo redução de lactose ou enzima exógena, e não fórmula de aminoácidos.',
    },
  },
  {
    id: 'ped-gas-040',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Diagnóstico Laboratorial da Intolerância à Lactose: Teste do Hidrogênio Expirado',
    isRevisao: false,
    enunciado:
      'Um escolar de 8 anos apresenta queixa de dor abdominal difusa em cólica, distensão epigástrica, ruídos hidroaéreos audíveis e diarreia explosiva com fezes ácidas cerca de 1 a 2 horas após ingerir leite ou sobremesas lácteas. O médico assistente solicita o Teste Respiratório do Hidrogênio Expirado com sobrecarga de lactose. Qual é o fundamento fisiológico deste exame e o critério laboratorial de positividade?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O teste baseia-se na produção renal de hidrogênio pela degradação da ureia sérica.',
      },
      {
        id: 'B',
        texto:
          'A lactose não digerida no intestino delgado atinge o cólon, onde é fermentada pelas bactérias anaeróbias colônicas da microbiota, gerando gás hidrogênio (H2), o qual é absorvido pela corrente sanguínea, transportado aos alvéolos pulmonares e eliminado na respiração; considera-se positivo um aumento na concentração de H2 expirado superior a 20 ppm (partes por milhão) em relação ao valor basal.',
      },
      {
        id: 'C',
        texto:
          'O teste mede o consumo de oxigênio pelas mitocôndrias cardíacas.',
      },
      {
        id: 'D',
        texto:
          'Considera-se positivo apenas quando o hidrogênio expirado cai a zero ppm.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O Teste Respiratório do Hidrogênio Expirado (Hydrogen Breath Test) com sobrecarga oral de lactose é o método padrão não invasivo de maior acurácia diagnóstica para má absorção de lactose em escolares e adolescentes. Fisiologia: células humanas não produzem gás hidrogênio; a única fonte de hidrogênio no organismo humano é a fermentação bacteriana colônica de carboidratos não absorvidos. Quando a lactose não é hidrolisada pela lactase jejunal, ela alcança o ceco e o cólon, onde as bactérias colônicas produzem H2, metano e ácidos graxos de cadeia curta. O H2 difunde-se pela circulação portal, alcança os pulmões e é exalado. Uma elevação de >= 20 ppm de hidrogênio sobre a linha de base em amostras respiratórias seriadas (30, 60, 90 e 120 minutos) confirma má absorção de lactose.',
    comentariosAlternativas: {
      A: 'Incorreta. O hidrogênio respiratório provém exclusivamente da fermentação bacteriana de açúcares no cólon.',
      B: 'Correta. Fundamento fisiopatológico exato: fermentação bacteriana colônica de carboidratos gerando aumento >= 20 ppm de H2 no ar expirado.',
      C: 'Incorreta. O teste não analisa metabolismo oxidativo mitocondrial cardíaco.',
      D: 'Incorreta. O critério é de aumento e não de queda do hidrogênio.',
    },
  },
  {
    id: 'ped-gas-041',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Diagnóstico Diferencial: Quadro Comparativo APLV vs Intolerância à Lactose',
    isRevisao: false,
    enunciado:
      'Uma mãe de um lactente de 3 meses chega ao pronto-socorro afirmando com convicção que o filho "nasceu com intolerância à lactose" porque apresenta cólicas intensas, sangue vivo nas fezes e erupções cutâneas no corpo. Em relação à comparação clínica e imunológica entre Alergia à Proteína do Leite de Vaca (APLV) e Intolerância à Lactose, assinale a afirmação correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A presença de sangramento gastrointestinal (rajas de sangue nas fezes) e lesões cutâneas (urticária, eczema atópico) NUNCA é provocada por intolerância à lactose; são manifestações patognomônicas de Alergia à Proteína do Leite de Vaca (APLV).',
      },
      {
        id: 'B',
        texto:
          'A intolerância à lactose causa comumente proptose ocular e anafilaxia com parada respiratória.',
      },
      {
        id: 'C',
        texto:
          'O leite materno humano não contém lactose, sendo a intolerância à lactose impossível no bebê amamentado.',
      },
      {
        id: 'D',
        texto:
          'O tratamento da APLV baseia-se na simples oferta de leite com teor reduzido de lactose comercial comum.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Ponto de confusão extremamente frequente na prática médica e muito cobrado em provas: A Intolerância à Lactose NÃO causa sangramento nas fezes (não há enterite ulcerativa ou proctite inflamatória invasiva) e NÃO causa manifestações cutâneas (urticária, dermatite, eczema) ou respiratórias, pois não possui base imune/alérgica. Se há sangue visível nas fezes, muco, vômitos tardios, eczema atópico ou reações anafiláticas, o diagnóstico é de ALERGIA À PROTEÍNA DO LEITE DE VACA (APLV). Outro detalhe importante: o leite materno é naturalmente riquíssimo em lactose (cerca de 7 g/dL, quase o dobro do leite de vaca), sendo a lactose fundamental para o desenvolvimento do cérebro infantil e absorção de cálcio.',
    comentariosAlternativas: {
      A: 'Correta. Sangue nas fezes e manifestações cutâneas são exclusivas da APLV, jamais decorrentes de intolerância à lactose.',
      B: 'Incorreta. Intolerância à lactose é puramente digestiva e não desencadeia reações anafiláticas sistêmicas.',
      C: 'Incorreta. O leite materno é a fonte natural mais rica em lactose entre os mamíferos (cerca de 7 g/100 mL).',
      D: 'Incorreta. O leite com lactose reduzida mantém intactas as proteínas alergênicas do leite de vaca (caseína e soro), desencadeando reações alérgicas graves na APLV.',
    },
  },
  {
    id: 'ped-gas-042',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'APLV e Constipação Intestinal Refratária',
    isRevisao: false,
    enunciado:
      'Um lactente de 10 meses apresenta constipação intestinal crônica severa desde a introdução de fórmula infantil de leite de vaca aos 6 meses. A criança evacua fezes endurecidas, ressecadas e volumosas a cada 4 a 5 dias, com dor e esforço extremo, necessitando de enemas frequentes. Já utilizou polietilenoglicol (PEG 4000) e lactulose em doses otimizadas sem qualquer sucesso clínico. Ao exame físico: crescimento pôndero-estatural no percentil 15, abdome distendido e fezes palpáveis no cólon esquerdo. O pediatra propõe um teste de exclusão alimentar com dieta isenta de proteína do leite de vaca por 4 semanas. Qual é a justificativa para essa conduta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A constipação refratária é uma complicação infecciosa da hepatite viral A crônica.',
      },
      {
        id: 'B',
        texto:
          'A constipação intestinal crônica refratária a laxativos osmóticos na primeira infância pode ser uma manifestação Não-IgE mediada atípica da APLV, decorrente de inflamação alérgica e infiltração eosinofílica da mucosa do reto e do plexo mioentérico, alterando a motilidade colônica retal e a sensibilidade do reflexo defecatório; até 30% a 50% dessas crianças melhoram espetacularmente com a exclusão do leite de vaca.',
      },
      {
        id: 'C',
        texto:
          'A proteína do leite de vaca precipita em pedras calcificadas de estruvita no cólon transverso.',
      },
      {
        id: 'D',
        texto:
          'O teste de exclusão serve exclusivamente para indicar laparotomia com ressecção retal imediata.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Estudos pediátricos clássicos (como os de Iacono et al.) demonstraram que a constipação crônica na infância, especialmente quando refratária a doses elevadas de laxantes osmóticos de primeira linha (PEG), pode ser uma apresentação clínica Não-IgE mediada da APLV. A infiltração inflamatória alérgica por eosinófilos e mastócitos na mucosa anal e retal provoca proctite com hipertonia do esfíncter anal interno, espasmo retal doloroso e dismotilidade, fazendo com que a criança retenha fezes ativamente para evitar a dor. Diante de constipação refratária em menores de 1 a 2 anos, um teste terapêutico de exclusão do leite de vaca por 2 a 4 semanas é formalmente respaldado pelas diretrizes da ESPGHAN e SBP.',
    comentariosAlternativas: {
      A: 'Incorreta. Hepatite A aguda não causa constipação crônica motora retal.',
      B: 'Correta. APLV como etiologia de constipação crônica refratária por inflamação e dismotilidade do reto/esfíncter anal interno.',
      C: 'Incorreta. O leite não forma cálculos de estruvita (que são urinários) na luz intestinal.',
      D: 'Incorreta. Trata-se de conduta clínica dietética não invasiva.',
    },
  },
  {
    id: 'ped-gas-043',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'História Natural e Tolerância Imunológica da APLV na Infância',
    isRevisao: false,
    enunciado:
      'Os pais de um menino de 1 ano com APLV na forma de proctocolite alérgica controlada com dieta de exclusão perguntam aflitos se a criança "terá essa alergia para sempre e nunca poderá comer alimentos com leite". De acordo com os estudos de coorte sobre a história natural da APLV na infância, qual é o prognóstico a longo prazo e a taxa esperada de aquisição de tolerância imunológica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A APLV é uma condição genética irreversível que persiste em 100% dos indivíduos até a vida adulta.',
      },
      {
        id: 'B',
        texto:
          'A história natural da APLV na infância é altamente favorável e a grande maioria das crianças adquire tolerância imunológica espontânea ao longo dos primeiros anos de vida: cerca de 50% toleram o leite ao redor de 1 ano, mais de 75% a 80% aos 3 anos e cerca de 90% adquirem tolerância completa até os 5 a 6 anos de idade (sendo a taxa de tolerância ainda mais rápida nas formas Não-IgE mediadas gastrointestinais).',
      },
      {
        id: 'C',
        texto:
          'Nenhuma criança atinge tolerância espontânea sem transplante de medula óssea alogênico.',
      },
      {
        id: 'D',
        texto:
          'A tolerância só ocorre se a criança for exposta diariamente a leite cru não pasteurizado.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A história natural da Alergia à Proteína do Leite de Vaca na primeira infância é extremamente benigna e caracterizada pela aquisição progressiva de tolerância oral. A maturação da barreira epitelial intestinal, o desenvolvimento da microbiota commensal saudável e a indução de células T reguladoras (Tregs) periféricas produtoras de IL-10 e TGF-beta conduzem à tolerância espontânea na esmagadora maioria dos casos: 50% aos 12 meses, 75% aos 3 anos e até 90% aos 5-6 anos de idade. As formas Não-IgE mediadas (como a proctocolite alérgica e a enteropatia) possuem resolução ainda mais rápida, remitindo comumente entre 12 e 18 meses de vida.',
    comentariosAlternativas: {
      A: 'Incorreta. A grande maioria das crianças cura-se da APLV antes da idade escolar, sendo a persistência em adultos minoritária.',
      B: 'Correta. Dados epidemiológicos precisos sobre a aquisição progressiva de tolerância oral da APLV na infância.',
      C: 'Incorreta. A tolerância é um fenômeno fisiológico espontâneo que não requer transplante ou terapias invasivas.',
      D: 'Incorreta. Expor a criança alérgica sem protocolo controlado pode precipitar reações anafiláticas e agravar o dano mucoso.',
    },
  },
  {
    id: 'ped-gas-044',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Refluxo Gastroesofágico e Apneia Obstrutiva no Neonato / Lactente Jovem',
    isRevisao: false,
    enunciado:
      'Um recém-nascido pré-termo tardio com 36 semanas de idade gestacional e 20 dias de vida apresenta episódios súbitos de engasgo, cianose perioral e apneia (pausa respiratória > 20 segundos com queda da frequência cardíaca para 80 bpm) cerca de 15 minutos após mamadeiras com leite materno ordenhado, quando colocado deitado no berço. O paciente não tem febre, exames laboratoriais infecciosos normais e raio-x de tórax sem alterações. A pH-impedanciometria intraluminal esofágica confirma refluxo laringofaríngeo extenso coincidente com os episódios de apneia. Qual é o mecanismo fisiopatológico que explica o reflexo de apneia obstrutiva induzido pelo refluxo em recém-nascidos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Bloqueio dos canais de sódio voltagem-dependentes no feixe de His cardíaco.',
      },
      {
        id: 'B',
        texto:
          'Ativação do Reflexo Quimiorreceptor Laríngeo (LCR - Laryngeal Chemoreflex) mediado pelo nervo vago e ramo laríngeo superior: o contato do ácido e líquido refluído com os quimiorreceptores na mucosa supraglótica e interaritenóidea deflagra laringoespasmo protetor reflexo, fechamento reflexo da fenda glótica, apneia central/obstrutiva e bradicardia vagal para prevenir a aspiração maciça para as vias aéreas inferiores.',
      },
      {
        id: 'C',
        texto:
          'Paralisia congênita permanente de ambos os nervos frênicos.',
      },
      {
        id: 'D',
        texto:
          'Colapso das cartilagens costais anteriores por escorbuto neonatal.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O Reflexo Quimiorreceptor Laríngeo (LCR - Laryngeal Chemoreflex) é um reflexo protetor primitivo hiper-reativo em recém-nascidos e lactentes jovens, especialmente prematuros. Quando o conteúdo refluído do estômago (líquido ácido ou não ácido) atinge a laringe posterior (refluxo laringofaríngeo), estimula quimiorreceptores e mecanorreceptores inervados pelo nervo laríngeo superior (ramo do vago). A resposta reflexa visceral imediata consiste em fechamento espasmódico das cordas vocais (laringoespasmo), cessação do movimento diafragmático (apneia) e hiperestimulação vagal com bradicardia intensa. Trata-se de uma tentativa biológica extrema de impedir a aspiração traqueobrônquica de ácido, que clinicamente se manifesta como evento aparentemente ameaçador à vida (BRUE / ALTE).',
    comentariosAlternativas: {
      A: 'Incorreta. A bradicardia decorre de efluxo vagal parassimpático reflexo central e não de canalopatia cardíaca.',
      B: 'Correta. Fisiopatologia precisa do reflexo quimiorreceptor laríngeo (LCR) mediado pelo vago desencadeando apneia obstrutiva e bradicardia.',
      C: 'Incorreta. A paralisia frênica cursa com insuficiência respiratória contínua e assimetria diafragmática ao raio-x pós-trauma de parto.',
      D: 'Incorreta. Escorbuto decorre de carência de vitamina C após meses sem a vitamina, sem relação com prematuro de 20 dias.',
    },
  },
  {
    id: 'ped-gas-045',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença Celíaca: Fisiopatologia, Genética e Marcadores Sorológicos',
    isRevisao: false,
    enunciado:
      'Uma menina de 2 anos é trazida à consulta com história de diarreia crônica com fezes volumosas e pálidas há 6 meses, distensão abdominal progressiva acentuada, emagrecimento importante com atrofia da musculatura glútea ("nádegas descaídas") e anorexia, que se iniciou alguns meses após a introdução de papinhas com cereais de trigo e aveia. A curva pôndero-estatural demonstra desaceleração do peso do percentil 50 para abaixo do percentil 3. Qual é o exame sorológico inicial de MAIOR sensibilidade e especificidade para o rastreamento diagnóstico de Doença Celíaca preconizado pela SBP e ESPGHAN?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Pesquisa de anticorpo Anti-Endomísio da classe IgM.',
      },
      {
        id: 'B',
        texto:
          'Dosagem de Anticorpo Antitransglutaminase Tecidual da classe IgA (anti-tTG IgA) associada à dosagem de IgA sérica total (para excluir deficiência seletiva de IgA concomitante).',
      },
      {
        id: 'C',
        texto:
          'Dosagem de Anticorpos Antigliadina não modificada da classe IgG.',
      },
      {
        id: 'D',
        texto:
          'Pesquisa de sangue oculto nas fezes após teste de Mantoux.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Doença Celíaca é uma enteropatia crônica autoimune desencadeada pela ingestão de glúten (proteínas presentes no trigo, centeio e cevada) em indivíduos geneticamente suscetíveis portadores de HLA-DQ2 ou HLA-DQ8. A transglutaminase tecidual (tTG) desamida a gliadina, gerando peptídeos imunogênicos que ativam linfócitos T e resposta autoimune com destruição das vilosidades intestinais. O teste sorológico inicial de escolha (maior sensibilidade e especificidade > 95% a 98%) é a dosagem do Anticorpo Antitransglutaminase Tecidual da classe IgA (anti-tTG IgA). Como a deficiência congênita de IgA é cerca de 10 a 15 vezes mais prevalente em celíacos (causando resultado falso-negativo no anti-tTG IgA), é OBRIGATÓRIA a dosagem simultânea da IgA sérica total; se houver deficiência de IgA, utiliza-se o teste baseado em IgG (como anti-tTG IgG ou peptídeos de gliadina desamidada IgG - DGP IgG).',
    comentariosAlternativas: {
      A: 'Incorreta. O anti-endomísio utilizado é da classe IgA e tem papel confirmatório, não IgM.',
      B: 'Correta. Rastreamento padrão-ouro inicial: anti-tTG IgA associado à dosagem de IgA sérica total para afastar deficiência de IgA.',
      C: 'Incorreta. Os anticorpos antigliadina nativa/antiga foram abandonados devido à baixa acurácia diagnóstica e falso-positivos.',
      D: 'Incorreta. Exame irrelevante e sem base imunológica para enteropatia celíaca.',
    },
  },
  {
    id: 'ped-gas-046',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Critérios ESPGHAN para Diagnóstico de Doença Celíaca sem Biópsia',
    isRevisao: false,
    enunciado:
      'As diretrizes atualizadas da ESPGHAN (2020) consolidaram uma abordagem que permite o diagnóstico definitivo de Doença Celíaca em crianças dispensando a realização de endoscopia e biópsia duodenal em situações clínicas e laboratoriais rigorosamente selecionadas. Quais são os critérios exigidos para dispensar a biópsia?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Qualquer título levemente positivo de anti-tTG IgA em criança assintomática.',
      },
      {
        id: 'B',
        texto:
          'Títulos séricos de anticorpo Antitransglutaminase Tecidual IgA (anti-tTG IgA) extremamente elevados, iguais ou superiores a 10 vezes o limite superior da normalidade (>= 10x LSN), confirmados por um resultado positivo de Anticorpo Anti-Endomísio IgA (EMA-IgA) em uma SEGUNDA amostra de sangue independente, com concordância e consentimento esclarecido da família.',
      },
      {
        id: 'C',
        texto:
          'Presença isolada de constipação funcional que melhora com ameixa.',
      },
      {
        id: 'D',
        texto:
          'A biópsia intestinal duodenal é obrigatória por lei em 100% dos seres humanos em qualquer situação.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O protocolo da ESPGHAN estabelece a abordagem "no-biopsy" (diagnóstico sem biópsia) em crianças que preenchem os seguintes critérios estritos: 1) Título de anticorpo antitransglutaminase tecidual IgA (anti-tTG IgA) igual ou superior a DEZ VEZES o limite superior da normalidade do ensaio laboratoral (>= 10x LSN); 2) Confirmação da positividade do anticorpo anti-endomísio da classe IgA (EMA-IgA) em uma SEGUNDA amostra de sangue coletada em momento distinto; 3) Consentimento informado dos pais após discussão com especialista. Quando esses critérios são preenchidos, o valor preditivo positivo para atrofia vilositária (Marsh 3) é praticamente de 100%, tornando a biópsia duodenal sob anestesia geral desnecessária.',
    comentariosAlternativas: {
      A: 'Incorreta. Títulos baixos (< 10x LSN) apresentam taxas de falso-positivo e obrigam a realização de biópsia duodenal.',
      B: 'Correta. Critérios de excelência da ESPGHAN: anti-tTG IgA >= 10x LSN confirmado por EMA-IgA em segunda amostra independente.',
      C: 'Incorreta. Constipação isolada que cede a fibras não é critério para doença celíaca.',
      D: 'Incorreta. As diretrizes modernas internacionais autorizam com segurança a via sem biópsia quando os critérios sorológicos extremos são atendidos.',
    },
  },
  {
    id: 'ped-gas-047',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Estenose Hipertrófica do Piloro: Epidemiologia e Distúrbio Metabólico Clássico',
    isRevisao: false,
    enunciado:
      'Um lactente do sexo masculino, primogênito, de 4 semanas de vida, é levado à emergência com história de vômitos que se iniciaram há 10 dias e tornaram-se progressivamente mais frequentes e explosivos em "jato", ocorrendo imediatamente após todas as mamadas. O vômito contém leite coagulado e é RIGOROSAMENTE NÃO BILIOSO (sem coloração esverdeada). A mãe relata que, logo após vomitar, o bebê chora querendo mamar novamente com muita fome. Ao exame: emagrecido, com olhos fundos, saliva escassa; à inspeção abdominal, observam-se ondas peristálticas visíveis transitando da esquerda para a direita no epigástrio (ondas de Kussmaul); à palpação profunda no quadrante superior direito, palpa-se uma massa ovalada móvel e firme com consistência cartilaginosa de 2 cm ("oliva pilórica"). A gasometria venosa e eletrólitos revelam o distúrbio metabólico clássico desta condição. Qual é o distúrbio metabólico e o diagnóstico?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Acidose metabólica hiperclorêmica com hipocalemia por diarreia secretora.',
      },
      {
        id: 'B',
        texto:
          'Alcalose Metabólica Hipoclorêmica e Hipocalêmica; decorrente de Estenose Hipertrófica do Piloro (EHP).',
      },
      {
        id: 'C',
        texto:
          'Acidose lática com hipercloremia por choque séptico.',
      },
      {
        id: 'D',
        texto:
          'Alcalose respiratória primária por hiperventilação de ansiedade.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Estenose Hipertrófica do Piloro (EHP) é uma afecção obstrutiva gástrica comum em lactentes entre a 2ª e a 8ª semana de vida (pico às 3 a 5 semanas), com nítido predomínio no sexo masculino (4:1), primogênitos e histórico familiar positivo ou uso precoce de macrolídeos (azitromicina/eritromicina). Caracteriza-se pela hipertrofia e hiperplasia das fibras musculares circulares do piloro, estenosando o canal pilórico. Os vômitos são em jato (explosivos), pós-prandiais, SEMPRE NÃO BILIOSOS (obstrução acima da ampola de Vater) e o bebê mantém voracidade e fome logo após vomitar. À palpação, a "oliva pilórica" é patognomônica. A perda continuada e maciça de ácido clorídrico (HCl) e água do suco gástrico pelos vômitos gera o clássico distúrbio metabólico: ALCALOSE METABÓLICA HIPOCLORÊMICA E HIPOCALÊMICA. O rim, para reter sódio e volemia, secreta prótons e potássio na urina (acidúria paradoxal).',
    comentariosAlternativas: {
      A: 'Incorreta. Vômitos gástricos perdem ácido clorídrico, levando à alcalose e não a acidose.',
      B: 'Correta. EHP clássica cursando com alcalose metabólica hipoclorêmica e hipocalêmica decorrente de vômitos gástricos puros em jato não biliosos.',
      C: 'Incorreta. Não há acidose lática infecciosa primária na estenose mecânica isolada.',
      D: 'Incorreta. O distúrbio é puramente metabólico por perda eletrolítica gástrica (depleção de íons H+ e Cl-).',
    },
  },
  {
    id: 'ped-gas-048',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Manejo Pré-Operatório e Cirúrgico da Estenose Hipertrófica do Piloro',
    isRevisao: false,
    enunciado:
      'No caso do lactente de 4 semanas com Estenose Hipertrófica do Piloro apresentando desidratação e alcalose metabólica hipoclorêmica importante (pH = 7,54; Cloreto = 82 mEq/L; Potássio = 2,8 mEq/L; Bicarbonato = 34 mEq/L), qual é a conduta pré-operatória mandatória antes de encaminhar o paciente para o centro cirúrgico para a piloromiotomia a Fredet-Ramstedt?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Encaminhar para cirurgia de emergência imediatamente, pois a cirurgia é curativa e o distúrbio metabólico deve ser ignorado.',
      },
      {
        id: 'B',
        texto:
          'A cirurgia de piloromiotomia NUNCA é uma emergência cirúrgica imediata; a conduta mandatória é a internação, jejum oral com passagem de SNG aberta para descompressão, e correção pré-operatória estrita da desidratação e dos distúrbios hidroeletrolíticos com infusão venosa de Soro Fisiológico a 0,9% adicionado de Cloreto de Potássio (após confirmação de diurese), até que o bicarbonato sérico, o cloreto e o pH estejam rigorosamente normalizados.',
      },
      {
        id: 'C',
        texto:
          'Infundir bicarbonato de sódio a 8,4% venoso rápido para neutralizar o potássio.',
      },
      {
        id: 'D',
        texto:
          'Oferecer mamadeiras de soro caseiro a cada 15 minutos até cessar o vômito.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Regra clássica da cirurgia pediátrica: A Estenose Hipertrófica do Piloro é uma emergência MÉDICA e NÃO uma emergência CIRÚRGICA. Operar uma criança com alcalose metabólica grave e hipocalemia acarreta risco inaceitável de apneia pós-operatória prolongada, depressão do centro respiratório, arritmias cardíacas graves e laringoespasmo sob anestesia geral. Portanto, o paciente deve receber ressuscitação clínica rigorosa: jejum, descompressão gástrica com sonda nasogástrica calibrosa aberta e hidratação parenteral com cristaloide isotônico (SF 0,9%) com glicose a 5% e cloreto de potássio (20 a 40 mEq/L) para repor volume e cloreto. Somente após a normalização laboratorial completa (Cloreto > 98-100 mEq/L, Bicarbonato < 26-28 mEq/L e débito urinário preservado) o paciente é liberado para a piloromiotomia extramucosa a Fredet-Ramstedt.',
    comentariosAlternativas: {
      A: 'Incorreta. Operar o paciente em alcalose metabólica severa gera parada cardiorrespiratória por anestesia e arritmias fatais.',
      B: 'Correta. Correção metabólica pré-operatória mandatória com reposição de sódio, cloreto e potássio antes da intervenção cirúrgica.',
      C: 'Incorreta. O paciente já está em alcalose metabólica grave; infundir bicarbonato agravaria a alcalose e causaria convulsões por hipocalcemia.',
      D: 'Incorreta. A via oral deve ser suspensa imediatamente devido à obstrução mecânica fixa do piloro.',
    },
  },
  {
    id: 'ped-gas-049',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença de Hirschsprung (Megacólon Aganglionar Congênito)',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo apresenta falha na eliminação de mecônio nas primeiras 48 horas de vida (eliminação atrasada de mecônio), associada a distensão abdominal progressiva e vômitos com aspecto bilioso esverdeado. Ao exame físico do períneo: ânus tópico; ao realizar o toque retal suave com o dedo enluvado, percebe-se um canal anal estreito e espástico sem fezes na ampola retal; ao retirar o dedo do examinador, ocorre uma eliminação explosiva e súbita de fezes líquidas com gases fétidos ("sinal do dedo de luva positivo" ou descompressão explosiva). O enema opaco demonstra uma zona de transição em cone na junção retossigmoide com dilatação afilada e calibre reduzido no reto. Qual é a etiologia e o exame padrão-ouro para o diagnóstico confirmatório?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Fibrose Cística com íleo meconial; diagnóstico por teste do pezinho ampliado.',
      },
      {
        id: 'B',
        texto:
          'Doença de Hirschsprung (Megacólon Aganglionar Congênito), decorrente da falha na migração craniocaudal das células da crista neural para a parede intestinal, com ausência dos plexos nervosos intramurais de Meissner (submucoso) e Auerbach (mioentérico); o exame confirmatório padrão-ouro é a Biópsia Retal por Sucção ou Cirúrgica demonstrando aganglionose e hipertrofia de fibras nervosas com coloração positiva para acetilcolinesterase.',
      },
      {
        id: 'C',
        texto:
          'Ânus imperfurado membranoso congênito; diagnóstico por ecocardiograma.',
      },
      {
        id: 'D',
        texto:
          'Gastroenterite por Salmonella entérica congênita.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Doença de Hirschsprung (Megacólon Aganglionar Congênito) decorre de uma anomalia na embriogênese caracterizada pela falha na migração das células ganglionares derivadas da crista neural ao longo do trato gastrointestinal (entre a 5ª e a 12ª semana de gestação). Isso resulta na ausência congênita de células ganglionares parassimpáticas nos plexos submucoso de Meissner e mioentérico de Auerbach, afetando invariavelmente o esfíncter anal interno e o reto (forma de segmento curto em 80% dos casos). O segmento aganglionar não relaxa (permanece espástico e estenosado), gerando obstrução intestinal baixa funcional. Os sinais cardinais no período neonatal são: atraso na eliminação de mecônio (> 48h em termo), distensão abdominal, vômitos biliosos e eliminação explosiva de fezes e gases ao toque retal. O padrão-ouro absoluto é a biópsia retal por sucção comprovando aganglionose e hipertrofia de fibras nervosas acetilcolinesterase-positivas.',
    comentariosAlternativas: {
      A: 'Incorreta. No íleo meconial da fibrose cística há mecônio espesso impactado no íleo terminal ("sinal do vidro moído" ou de Neuhauser) e microcólon total.',
      B: 'Correta. Doença de Hirschsprung típica: aganglionose congênita retal com biópsia retal como padrão-ouro e sinal de descompressão explosiva ao toque.',
      C: 'Incorreta. O ânus é anatomicamente patente e tópico, permitindo o toque retal.',
      D: 'Incorreta. O quadro decorre de obstrução mecânica funcional congênita e não infecção bacteriana adquirida.',
    },
  },
  {
    id: 'ped-gas-050',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Caso Clínico Desafio Síntese: Diagnóstico Diferencial de Vômitos e Diarreia no Lactente',
    isRevisao: false,
    enunciado:
      'Um lactente de 3 semanas de vida, do sexo masculino, é trazido ao pronto atendimento pediátrico por apresentar vômitos frequentes após as mamadas ao seio há 5 dias. A mãe relata que os vômitos ocorrem cerca de 15 minutos após mamar, não contêm bile (leite coagulado branco) e a criança chora após vomitar. Ao exame físico: o lactente está em ótimo estado geral, corado, hidratado, afebril, com turgor cutâneo preservado, choro com lágrimas abundantes, boca úmida; abdome é flácido, indolor, sem massas palpáveis; a curva pôndero-estatural demonstra peso de nascimento de 3.200 g e peso atual de 3.850 g (ganho ponderal de 32 g/dia). Os pais estão apreensivos temendo estenose hipertrófica de piloro ou refluxo grave que precise de cirurgia. Qual é o diagnóstico mais provável e a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Estenose Hipertrófica do Piloro incipiente; solicitar ultrassom abdominal com urgência e internar para cirurgia profilática.',
      },
      {
        id: 'B',
        texto:
          'Refluxo Gastroesofágico Fisiológico ("Regurgitador Feliz"); tranquilizar e orientar a família quanto à benignidade e história natural autolimitada da condição, manter aleitamento materno exclusivo sob livre demanda, orientar posição verticalizada após as mamadas (20 a 30 minutos) e desaconselhar formalmente o uso de exames complementares invasivos e inibidores de bomba de prótons.',
      },
      {
        id: 'C',
        texto:
          'Doença do Refluxo Gastroesofágico patológica grave; iniciar omeprazol e solicitar endoscopia digestiva alta.',
      },
      {
        id: 'D',
        texto:
          'Alergia à Proteína do Leite de Vaca; prescrever fórmula de aminoácidos imediatamente e suspender o seio materno.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Este caso clínico desafio sintetiza a avaliação pediátrica do lactente que regurgita/vomita. O lactente de 3 semanas apresenta regurgitações de leite materno sem esforço e não biliosas, mas encontra-se CLINICAMENTE HIDRATADO, VIGOROSO, EUTRÓFICO e com EXCELENTE GANHO PONDERAL (ganhou 650 g em 20 dias = 32,5 g/dia, muito acima da média esperada de 20 a 30 g/dia). Na Estenose Hipertrófica do Piloro o paciente apresenta perda ou estagnação de peso acentuada, vômitos em jato explosivos e sinais de desidratação com alcalose. Na DRGE patológica há sofrimento, esofagite ou déficit pôndero-estatural. Trata-se, portanto, de Refluxo Gastroesofágico Fisiológico ("regurgitador feliz"). A conduta médica ética e baseada em evidências é tranquilizar a família, reforçar a manutenção do aleitamento materno e orientar medidas posturais simples, sem medicalização ou exames invasivos.',
    comentariosAlternativas: {
      A: 'Incorreta. O ganho de peso excelente (32,5 g/dia) e o bom estado geral descartam estenose de piloro.',
      B: 'Correta. RGE fisiológico com ganho ponderal impecável: manejo conservador, sem IBP e sem exames invasivos.',
      C: 'Incorreta. Não há doença nem complicações que justifiquem IBP ou endoscopia em bebê que cresce acima do esperado.',
      D: 'Incorreta. Não há qualquer sinal de proctocolite ou alergia que justifique suspender o aleitamento materno.',
    },
  },
  {
    id: 'ped-gas-051',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Estenose Hipertrófica do Piloro',
    isRevisao: false,
    enunciado:
      'Lactente do sexo masculino, primogênito, com 4 semanas de vida, é levado à emergência pediátrica pela mãe com história de vômitos progressivos há 5 dias. A mãe relata que os episódios acontecem cerca de 10 a 20 minutos após quase todas as mamadas ao seio materno, com caráter explosivo e em jato, projetando-se a considerável distância. O conteúdo do vômito é composto exclusivamente por leite coalhado e secreção gástrica, sem coloração esverdeada ou amarelada biliosa. Logo após vomitar, o bebê chora desesperadamente demonstrando fome voraz e busca o peito com avidez. Ao exame físico: emagrecido, fontanela anterior deprimida, mucosas secas, turgor diminuído; abdome escavado com visualização de ondas peristálticas que caminham do hipocôndrio esquerdo em direção ao epigástrio (ondas de Kussmaul); à palpação profunda relaxada do quadrante superior direito, palpa-se nódulo ovoide, móvel e fibroelástico de cerca de 1,5 a 2,0 cm ("oliva pilórica"). Considerando a principal hipótese diagnóstica, qual é a alteração metabólica e hidroeletrolítica tipicamente esperada na gasometria venosa e ionograma deste paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Acidose metabólica hiperclorêmica com gap aniônico normal e hipercalemia.',
      },
      {
        id: 'B',
        texto:
          'Alcalose metabólica hipoclorêmica e hipocalêmica com elevação do bicarbonato sérico.',
      },
      {
        id: 'C',
        texto:
          'Acidose mista grave por acúmulo de ácido lático e hiponatremia hipercalêmica.',
      },
      {
        id: 'D',
        texto:
          'Alcalose respiratória compensada com níveis normais de cloreto e potássio séricos.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O caso clínico apresenta a descrição clássica e patognomônica da Estenose Hipertrófica do Piloro (EHP): lactente masculino, primogênito, na 4ª semana de vida, com vômitos em jato pós-prandiais não biliosos, avidez alimentar pós-êmese ("criança faminta"), ondas peristálticas gástricas visíveis e oliva pilórica palpável em hipocôndrio direito. A fisiopatologia metabólica da EHP decorre da perda maciça e sustentada de suco gástrico rico em ácido clorídrico (HCl) e íons potássio. Com a perda de H+ e Cl-, há retenção de íons bicarbonato no sangue, gerando Alcalose Metabólica Hipoclorêmica. Para compensar a perda volêmica e a desidratação, o rim ativa o sistema renina-angiotensina-aldosterona, retendo sódio no túbulo distal em troca da espoliação de potássio e de prótons (gerando hipocalemia e, em estágios avançados, acidúria paradoxal). Portanto, o perfil laboratorial característico da EHP é a Alcalose Metabólica Hipoclorêmica e Hipocalêmica.',
    comentariosAlternativas: {
      A: 'Incorreta. Na EHP não há acidose nem hipercloremia; o vômito gástrico elimina cloro e ácido clorídrico, cursando com hipocloremia e alcalose.',
      B: 'Correta. Perda contínua de ácido clorídrico (H+ e Cl-) e ativação da aldosterona para retenção de sódio com excreção renal de potássio culminam em alcalose metabólica hipoclorêmica e hipocalêmica.',
      C: 'Incorreta. Acidose láctica só surge tardiamente se houver choque hipovolêmico não compensado, mas o distúrbio primário e definidor é a alcalose metabólica.',
      D: 'Incorreta. O distúrbio é primordialmente metabólico decorrente de perdas digestivas gástricas altas, e não respiratório.',
    },
  },
  {
    id: 'ped-gas-052',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Estenose Hipertrófica do Piloro',
    isRevisao: false,
    enunciado:
      'Um lactente de 35 dias com diagnóstico clínico e ultrassonográfico de Estenose Hipertrófica do Piloro é admitido na unidade de emergência. A gasometria venosa revela: pH 7,54, pCO2 48 mmHg, HCO3- 38 mEq/L, Na+ 130 mEq/L, K+ 2,8 mEq/L e Cl- 82 mEq/L. O cirurgião pediátrico de sobreaviso é acionado e recomenda que a criança seja levada imediatamente à sala cirúrgica para a realização de piloromiotomia extramucosa de urgência. Diante desse cenário e das diretrizes pediátricas e cirúrgicas contemporâneas, qual deve ser a conduta médica correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Aceitar a indicação de cirurgia imediata, pois a desobstrução mecânica do canal pilórico é a única medida capaz de cessar a perda hidroeletrolítica.',
      },
      {
        id: 'B',
        texto:
          'Contraindicar a cirurgia imediata; a EHP não é uma emergência cirúrgica, mas sim uma emergência clínica, sendo mandatório suspender a via oral, instalar ressuscitação com fluidoterapia parenteral e repor cloreto e potássio até normalização metabólica antes do procedimento.',
      },
      {
        id: 'C',
        texto:
          'Realizar infusão rápida de bicarbonato de sódio a 8,4% para estabilizar a membrana miocárdica e liberar a anestesia geral de emergência.',
      },
      {
        id: 'D',
        texto:
          'Indicar passagem de sonda nasoenteral pós-pilórica guiada por radioscopia para iniciar alimentação hipercalórica contínua, descartando a cirurgia.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Uma das "pegadinhas" mais clássicas e importantes em Pediatria e Cirurgia Pediátrica é compreender que a Estenose Hipertrófica do Piloro NÃO é uma emergência cirúrgica, mas sim uma EMERGÊNCIA CLÍNICA/METABÓLICA. Submeter uma criança com alcalose metabólica hipoclorêmica grave (pH 7,54; HCO3- 38 mEq/L; Cl- 82 mEq/L) à indução anestésica e intervenção cirúrgica traz riscos elevadíssimos de arritmias cardíacas graves, laringoespasmo e hipoventilação pós-operatória prolongada com apneia (devido à depressão central do centro respiratório induzida pela alcalose grave). A conduta mandatória pré-operatória é: suspender dieta oral, passar sonda gástrica aberta para descompressão e iniciar fluidoterapia venosa com solução salina (SF 0,9%) e, após constatação de diurese, acrescentar cloreto de potássio (KCl) e glicose. A cirurgia (piloromiotomia de Fredet-Ramstedt) só deve ser agendada após o bicarbonato sérico estar < 26-28 mEq/L, o cloreto > 100 mEq/L e o paciente plenamente hidratado e com diurese restabelecida.',
    comentariosAlternativas: {
      A: 'Incorreta. A cirurgia com alcalose grave e hipocloremia eleva exponencialmente a mortalidade anestésica por apneia e parada cardiorrespiratória.',
      B: 'Correta. A estabilização hidroeletrolítica e acidobásica pré-operatória vigorosa é obrigatória; a EHP é uma urgência clínica/metabólica e uma cirurgia eletiva programada.',
      C: 'Incorreta. Administrar bicarbonato agravaria ainda mais a alcalose metabólica severa preexistente, podendo ser fatal.',
      D: 'Incorreta. A passagem de sonda pós-pilórica não resolve a hipertrofia mecânica do esfíncter pilórico, cujo tratamento definitivo curativo é cirúrgico.',
    },
  },
  {
    id: 'ped-gas-053',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Estenose Hipertrófica do Piloro',
    isRevisao: false,
    enunciado:
      'Lactente de 1 mês de vida com suspeita de Estenose Hipertrófica do Piloro é submetido à ultrassonografia de abdome superior, considerado o método de imagem de escolha para confirmação diagnóstica. Quais são os parâmetros ultrassonográficos comumente aceitos na literatura como critérios diagnósticos confirmatórios de hipertrofia da musculatura pilórica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Espessura do músculo pilórico >= 3,0 a 4,0 mm e comprimento do canal pilórico >= 14 a 16 mm.',
      },
      {
        id: 'B',
        texto:
          'Espessura do músculo pilórico < 2,0 mm e diâmetro transverso total do piloro < 8,0 mm.',
      },
      {
        id: 'C',
        texto:
          'Presença do sinal do alvo no cólon descendente com espessura da parede gástrica menor que 1,0 mm.',
      },
      {
        id: 'D',
        texto:
          'Comprimento do canal pilórico menor que 5 mm com refluxo livre de conteúdo gástrico para o esôfago.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A ultrassonografia de abdome superior é o exame padrão-ouro e de escolha para o diagnóstico da Estenose Hipertrófica do Piloro, apresentando sensibilidade e especificidade próximas a 100% nas mãos de operadores experientes. Os critérios ultrassonográficos diagnósticos clássicos e amplamente cobrados em provas de Pediatria e Cirurgia Pediátrica são: 1) Espessura da camada muscular pilórica (corte transversal) >= 3,0 mm (ou >= 4,0 mm na maioria dos protocolos rigorosos); 2) Comprimento do canal pilórico longitudinal >= 14 a 16 mm; 3) Diâmetro pilórico total transversal >= 10 a 14 mm; e ausência de esvaziamento gástrico após observação contínua.',
    comentariosAlternativas: {
      A: 'Correta. Critérios ultrassonográficos clássicos: espessura da musculatura pilórica >= 3 a 4 mm e comprimento do canal >= 14 a 16 mm.',
      B: 'Incorreta. Espessura menor que 2 mm é normal e descarta o diagnóstico de estenose hipertrófica do piloro.',
      C: 'Incorreta. O sinal do alvo no cólon é característico de intussuscepção intestinal, não de estenose pilórica.',
      D: 'Incorreta. O canal pilórico hipertrofiado é alongado (>= 14-16 mm) e não encurtado.',
    },
  },
  {
    id: 'ped-gas-054',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Estenose Hipertrófica do Piloro',
    isRevisao: false,
    enunciado:
      'Durante a avaliação clínica de um lactente de 4 semanas com desidratação e história de vômitos gástricos repetidos decorrentes de estenose pilórica hipertrófica, o pediatra solicita urinálise. O exame de urina revela pH urinário de 5,0 (urina ácida), apesar de a gasometria venosa demonstrar pH sérico de 7,52 com bicarbonato de 36 mEq/L (alcalose metabólica sistêmica grave). Qual mecanismo fisiopatológico renal explica a ocorrência dessa acidúria paradoxal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Infiltração tubular renal direta por complexos imunes derivados da degradação de caseína bovina.',
      },
      {
        id: 'B',
        texto:
          'Depleção intensa de volume e potássio que força o néfron distal a reabsorver sódio via aldosterona em troca da secreção obrigatória de íons hidrogênio (H+).',
      },
      {
        id: 'C',
        texto:
          'Defeito genético congênito na anidrase carbônica tipo II associado à hipertrofia congênita do piloro.',
      },
      {
        id: 'D',
        texto:
          'Destruição das células justaglomerulares renais por isquemia com incapacidade total de secretar amônia.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'O fenômeno da "Acidúria Paradoxal" na Estenose Hipertrófica do Piloro é um clássico da fisiologia médica e da nefrologia pediátrica. Inicialmente, na fase de alcalose, o rim excreta bicarbonato com sódio e potássio para tentar normalizar o pH sérico. No entanto, com a persistência dos vômitos, a hipovolemia torna-se crítica e o organismo prioriza a conservação de volume a qualquer custo. Ocorre ativação máxima do sistema renina-angiotensina-aldosterona (SRAA). No ducto coletor cortical, a aldosterona estimula a reabsorção de Na+ em troca da excreção de K+ ou H+. Como o paciente já desenvolveu hipocalemia severa decorrente das perdas gástricas e urinárias prévias, os estoques intracelulares de K+ esgotam-se. Para continuar captando Na+ e salvar o volume intravascular, o rim é forçado a secretar íons H+ na urina. Assim, a urina torna-se paradoxalmente ácida (acidúria paradoxal) em um paciente com alcalose metabólica sistêmica grave.',
    comentariosAlternativas: {
      A: 'Incorreta. Não há mecanismo imunomediado ou deposição de imunocomplexos na gênese da acidúria paradoxal.',
      B: 'Correta. A hipovolemia crítica ativa a aldosterona para salvar sódio; com a hipocalemia acentuada, o trocador tubular secreta prótons (H+), acidificando a urina.',
      C: 'Incorreta. Defeito na anidrase carbônica cursa com Acidose Tubular Renal proximal (tipo II) com acidose metabólica hiperclorêmica, o oposto deste quadro.',
      D: 'Incorreta. As células justaglomerulares estão hiperativadas secretando renina pela hipovolemia e hipoperfusão renal.',
    },
  },
  {
    id: 'ped-gas-055',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Estenose Hipertrófica do Piloro',
    isRevisao: false,
    enunciado:
      'Qual é o procedimento cirúrgico definitivo de escolha consagrado mundialmente para a correção da Estenose Hipertrófica do Piloro em lactentes?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Pilororrafia transversa com gastrectomia subtotal e reconstrução a Billroth I.',
      },
      {
        id: 'B',
        texto:
          'Piloromiotomia extramucosa longitudinal (procedimento de Fredet-Ramstedt).',
      },
      {
        id: 'C',
        texto:
          'Gastrojejunostomia em Y de Roux com exclusão piloroduodenal mecânica.',
      },
      {
        id: 'D',
        texto:
          'Antrectomia com vagotomia troncular e dilatação pneumática endoscópica seriada.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A cirurgia de escolha para a Estenose Hipertrófica do Piloro é a Piloromiotomia Extramucosa, descrita originalmente por Fredet e Ramstedt (procedimento de Fredet-Ramstedt). Essa técnica consiste em uma incisão longitudinal na serosa e na camada muscular hipertrofiada do piloro, estendendo-se do antro gástrico até o início do duodeno, divulsionando a musculatura até que a mucosa gástrica subjacente prolapse e se expanda livremente, desobstruindo o canal sem violar nem abrir a mucosa. Pode ser realizada por via aberta (incisão umbilical circunumbilical esteticamente favorável) ou por videolaparoscopia, com taxa de sucesso superior a 99% e retorno rápido da dieta.',
    comentariosAlternativas: {
      A: 'Incorreta. Gastrectomia com Billroth I é mutilante e usada para neoplasias gástricas em adultos, não tendo qualquer indicação em lactentes.',
      B: 'Correta. A piloromiotomia extramucosa longitudinal de Fredet-Ramstedt secciona apenas a muscular espessada, preservando a integridade da mucosa.',
      C: 'Incorreta. Gastrojejunostomia em Y de Roux é uma cirurgia bariátrica ou reconstrutiva esofagogástrica complexa.',
      D: 'Incorreta. Não se realiza vagotomia nem antrectomia em crianças com EHP; a patologia é puramente hipertrofia esfincteriana localizada.',
    },
  },
  {
    id: 'ped-gas-056',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Invaginação Intestinal Aguda',
    isRevisao: false,
    enunciado:
      'Lactente de 8 meses, previamente hígido e eutrófico, com história de resfriado comum há 1 semana, é trazido ao pronto-socorro pediátrico com crises agudas de dor abdominal paroxística. A mãe relata que o bebê apresenta episódios súbitos de choro agudo e inconsolável a cada 15 a 20 minutos, flexionando as pernas sobre o abdome e empalidecendo; entre as crises, o lactente fica sonolento e apático. Nas últimas duas horas, apresentou vômitos e eliminou pela fralda fezes avermelhadas e viscosas compostas por muco e sangue escuro ("aspecto de geleia de morango"). Ao exame físico: abdome discretamente distendido, palpando-se massa alongada e cilíndrica em formato de "salsicha" no quadrante superior direito, com fossa ilíaca direita anormalmente vazia (sinal de Dance). Qual é a principal hipótese diagnóstica e a etiologia mais provável nessa faixa etária?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Invaginação intestinal aguda íleo-cólica idiopática, associada à hiperplasia do tecido linfoide de placas de Peyer secundária à infecção viral.',
      },
      {
        id: 'B',
        texto:
          'Volvo de sigmoide congênito por má rotação primária do mesocólon esquerdo.',
      },
      {
        id: 'C',
        texto:
          'Doença inflamatória intestinal na forma de colite ulcerativa fulminante primária.',
      },
      {
        id: 'D',
        texto:
          'Hematoma de parede duodenal traumático por maus-tratos infantis não acidentais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O caso clínico traz a descrição clínica clássica da Invaginação Intestinal Aguda (Intussuscepção), a principal causa de abdome agudo obstrutivo em lactentes entre 5 meses e 3 anos (pico de incidência entre 6 e 9 meses). Na grande maioria dos lactentes dessa faixa etária (> 90%), a intussuscepção é dita "idiopática", do tipo íleo-cólica (prolapso do íleo terminal para o interior do ceco e cólon ascendente). O mecanismo desencadeante é a hipertrofia reacional das placas de Peyer no íleo terminal decorrente de infecção viral prévia recente (especialmente por Adenovírus ou Rotavírus), que atua como ponto de partida (lead point biológico) para o peristaltismo invaginar a alça intestinal. A tríade clássica (dor em cólica intermitente com flexão de pernas, massa abdominal em salsicha e fezes em geleia de morango/framboesa) sela a forte suspeita.',
    comentariosAlternativas: {
      A: 'Correta. Intussuscepção íleo-cólica idiopática secundária à hiperplasia de placas de Peyer pós-viral é a causa típica nesta faixa etária.',
      B: 'Incorreta. Vólvulo de sigmoide é extremamente raro em lactentes de 8 meses sem megacólon congênito/Chagas prévio.',
      C: 'Incorreta. DII com colite fulminante é excepcional abaixo de 1 ano e não cursa com episódios paroxísticos e massa em salsicha.',
      D: 'Incorreta. Não há histórico ou estigmas de trauma contuso; a evolução com resfriado prévio e crises paroxísticas é clássica de intussuscepção.',
    },
  },
  {
    id: 'ped-gas-057',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Invaginação Intestinal Aguda',
    isRevisao: false,
    enunciado:
      'Uma menina de 7 meses é atendida na emergência com suspeita clínica de intussuscepção intestinal. A criança está estável hemodinamicamente, afebril, e o abdome é depressível, sem sinais de peritonite. Qual é o exame de imagem complementar de primeira escolha mundialmente recomendado para confirmar o diagnóstico da intussuscepção intestinal pela sua alta sensibilidade e especificidade?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Radiografia simples de abdome em quatro posições com teste do ar retal.',
      },
      {
        id: 'B',
        texto:
          'Ultrassonografia de abdome total com transdutor linear de alta frequência.',
      },
      {
        id: 'C',
        texto:
          'Tomografia computadorizada de abdome com triplo contraste venoso e enteral.',
      },
      {
        id: 'D',
        texto:
          'Cintilografia abdominal com hemácias marcadas com Tecnécio-99m.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A Ultrassonografia abdominal é o método de imagem de primeira linha e de eleição indiscutível para o diagnóstico da invaginação intestinal na infância. Possui sensibilidade e especificidade que se aproximam de 98% a 100% nas mãos de radiologistas treinados, sendo um exame rápido, não invasivo, sem radiação ionizante e de baixo custo. Os achados ultrassonográficos característicos incluem: 1) No corte transversal: o "Sinal do Alvo" (Target sign) ou "Sinal da Rosquinha" (Donut sign), composto por anéis concêntricos hipoecoicos e hiperecoicos formados pelas camadas da alça intussuscepta e do intussuscipiente; 2) No corte longitudinal: o "Sinal do Pseudorrim" (Pseudokidney sign), decorrente da curvatura da alça invaginada circundada por mesentério e edema.',
    comentariosAlternativas: {
      A: 'Incorreta. A radiografia simples pode ser normal em fases iniciais ou mostrar apenas sinais inespecíficos de obstrução; não confirma o diagnóstico com a acurácia do USG.',
      B: 'Correta. USG de abdome é o padrão-ouro de imagem, demonstrando o sinal do alvo/rosquinha e pseudorrim com quase 100% de acurácia.',
      C: 'Incorreta. A TC emite alta dose de radiação ionizante e é absolutamente desnecessária como primeira escolha diagnóstica em lactentes com suspeita de intussuscepção.',
      D: 'Incorreta. A cintilografia com Tc-99m é indicada para pesquisa de mucosa gástrica ectópica em divertículo de Meckel, não para intussuscepção aguda.',
    },
  },
  {
    id: 'ped-gas-058',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Invaginação Intestinal Aguda',
    isRevisao: false,
    enunciado:
      'Lactente de 7 meses tem diagnóstico ultrassonográfico confirmado de invaginação intestinal íleo-cólica iniciado há 6 horas. O paciente encontra-se hidratado, eupneico, abdome sem sinais de peritonite ou defesa involuntária, e a radiografia de abdome em decúbito dorsal com raios horizontais afasta enfisema ou pneumoperitônio. Qual é o tratamento de escolha inicial recomendado para este paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Laparotomia exploradora mediana com ressecção intestinal e ileostomia terminal.',
      },
      {
        id: 'B',
        texto:
          'Redução não cirúrgica pneumática (insuflação de ar) ou hidrostática (soro fisiológico/contraste) guiada por imagem.',
      },
      {
        id: 'C',
        texto:
          'Prescrição de metoclopramida e antiespasmódicos orais associados a enema glicerinado simples.',
      },
      {
        id: 'D',
        texto:
          'Conduta expectante sob observação clínica por 48 horas, visto que a maioria dos casos regride espontaneamente.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Nos pacientes com invaginação intestinal que NÃO apresentam contraindicações formais (ou seja: ausência de choque séptico/hipovolêmico refratário, ausência de sinais de peritonite/abdome em tábua e ausência de pneumoperitônio/perfuração na radiografia), o tratamento de escolha inicial é a REDUÇÃO NÃO OPERATÓRIA (desinvaginação não cirúrgica), preferencialmente por redução pneumática com ar ou redução hidrostática com solução salina aquecida guiada por ultrassonografia contínua ou fluoroscopia. A redução pneumática com ar é altamente eficaz (taxas de sucesso entre 80% e 90%), possui menor risco de perfuração do que enemas baritados e permite alta hospitalar precoce. A cirurgia fica reservada para casos de peritonite, perfuração prévia, choque irreversível ou falha após tentativas adequadas de redução conservadora.',
    comentariosAlternativas: {
      A: 'Incorreta. Laparotomia com ressecção só é indicada se houver perfuração, peritonite, necrose transmural irreversível ou falha da redução não operatória.',
      B: 'Correta. Redução pneumática ou hidrostática guiada por imagem é a primeira escolha terapêutica, com taxa de sucesso superior a 80-90%.',
      C: 'Incorreta. Antiespasmódicos e pró-cinéticos são contraindicados na obstrução intestinal aguda e podem precipitar perfuração.',
      D: 'Incorreta. A intussuscepção ileocólica verdadeira não se resolve espontaneamente e leva invariavelmente à isquemia, necrose e óbito se deixada em observação.',
    },
  },
  {
    id: 'ped-gas-059',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Invaginação Intestinal Aguda',
    isRevisao: false,
    enunciado:
      'Uma criança de 5 anos de idade é trazida ao pronto-socorro com quadro clínico e ultrassonográfico de intussuscepção intestinal íleo-ileal. Ao contrário do padrão epidemiológico usual de lactentes entre 6 e 12 meses, essa criança tem idade atípica (> 3 anos). Qual é a principal implicação clínica e fisiopatológica de uma intussuscepção que se manifesta em crianças maiores de 3 a 4 anos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Indica infecção congênita tardia pelo citomegalovírus com destruição seletiva das células ganglionares mioentéricas.',
      },
      {
        id: 'B',
        texto:
          'Maior probabilidade de estar associada a um ponto de ancoragem anatômico patológico ("lead point"), como divertículo de Meckel, pólipo juvenil ou linfoma intestinal.',
      },
      {
        id: 'C',
        texto:
          'Trata-se invariavelmente de condição psicossomática associada a refluxo gastroesofágico emocional não medicado.',
      },
      {
        id: 'D',
        texto:
          'Dispensa investigação diagnóstica adicional, pois acima de 3 anos a redução espontânea é de 100%.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Enquanto mais de 90% a 95% das invaginações intestinais em lactentes de 5 a 12 meses são idiopáticas (secundárias à hiperplasia linfoide benigna das placas de Peyer), a ocorrência de intussuscepção em crianças com mais de 3 a 5 anos de idade (ou em lactentes com menos de 3 meses) deve obrigatoriamente levantar a suspeita de um ponto de ancoragem patológico anatômico ("lead point"). Os pontos anatômicos mais frequentes causadores de invaginação secundária são: Divertículo de Meckel, Pólipos intestinais (como na Síndrome de Peutz-Jeghers ou pólipo juvenil), Linfoma não-Hodgkin (linfoma de Burkitt ileal), Cistos de duplicação entérica e Hematomas de submucosa na Vasculite por IgA (Púrpura de Henoch-Schönlein). Nesses pacientes maiores, a abordagem cirúrgica é frequentemente necessária para ressecção da lesão de base.',
    comentariosAlternativas: {
      A: 'Incorreta. Citomegalovírus congênito não causa intussuscepção tardia nem destruição seletiva de plexos nervosos nesta apresentação.',
      B: 'Correta. Crianças maiores (> 3-4 anos) com intussuscepção apresentam alta frequência de lead point anatômico patológico (Meckel, pólipo, linfoma, cisto, hematoma submucoso).',
      C: 'Incorreta. A invaginação intestinal é uma afecção obstrutiva mecânica aguda com risco de isquemia de alça, sem componente psicossomático.',
      D: 'Incorreta. A taxa de redução espontânea não é de 100% e a presença de etiologia neoplásica ou malformativa exige rigorosa avaliação cirúrgica.',
    },
  },
  {
    id: 'ped-gas-060',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Invaginação Intestinal Aguda',
    isRevisao: false,
    enunciado:
      'Um menino de 9 meses é internado com invaginação intestinal. Durante a avaliação na sala de emergência, a criança evolui com piora súbita do estado geral, sonolência profunda, tempo de enchimento capilar de 4 segundos, taquicardia marcante e abdome difusamente tenso, rígido ("em tábua"), extremamente doloroso à palpação leve, com desaparecimento da macicez hepática. A radiografia de abdome em decúbito com raios horizontais confirma pneumoperitônio. Qual é a conduta terapêutica imediata mandatória?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tentativa de redução hidrostática com solução salina sob ultrassonografia contínua.',
      },
      {
        id: 'B',
        texto:
          'Ressuscitação volêmica parenteral agressiva, antibioticoterapia de amplo espectro venosa e laparotomia exploradora de urgência.',
      },
      {
        id: 'C',
        texto:
          'Passagem de sonda retal e lavagem colônica com glicerina 12% sob sedação leve.',
      },
      {
        id: 'D',
        texto:
          'Endoscopia digestiva alta com passagem de prótese autoexpansível transpilórica.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A presença de peritonite generalizada (abdome rígido em tábua, descompressão dolorosa), choque séptico/hipovolêmico ou pneumoperitônio (perfuração de víscera oca com ar livre na cavidade peritoneal) constitui CONTRAINDICAÇÃO ABSOLUTA à redução conservadora não cirúrgica (pneumática ou hidrostática). Nesses casos, tentar insuflar ar ou líquido sob pressão causaria extravasamento maciço de fezes para o peritônio e colapso circulatório imediato. A conduta mandatória é: estabilização clínica e suporte avançado de vida (ressuscitação com cristaloides, acesso venoso calibroso, correção hidroeletrolítica), início precoce de antibioticoterapia venosa cobrindo flora entérica mista (gram-negativos e anaeróbios) e encaminhamento IMEDIATO para LAPAROTOMIA EXPLORADORA DE URGÊNCIA para desinvaginação cirúrgica manual ou ressecção da alça necrótica/perfurada.',
    comentariosAlternativas: {
      A: 'Incorreta. A redução hidrostática ou pneumática é absolutamente contraindicada na presença de perfuração/pneumoperitônio ou peritonite.',
      B: 'Correta. Peritonite e pneumoperitônio impõem estabilização hemodinâmica imediata, antibióticos e laparotomia de urgência.',
      C: 'Incorreta. Lavagem retal sob pressão agravaria a peritonite fecal em abdome já perfurado.',
      D: 'Incorreta. A EDA não tem qualquer papel no tratamento da intussuscepção íleo-cólica aguda complicada.',
    },
  },
  {
    id: 'ped-gas-061',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Atresia de Esôfago',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo, peso de nascimento 3.100 g, filho de mãe com polidrâmnio diagnosticado no terceiro trimestre gestacional. Nos primeiros minutos de vida em sala de parto, o neonatologista observa salivação abundante, espumosa e constante pela boca e narinas ("sialorreia espumosa"), exigindo aspiração repetida das vias aéreas. Na primeira tentativa de amamentação ao seio materno, o bebê tosse intensamente, engasga, apresenta sufocamento e cianose perioral que melhora após cessar a mamada e aspirar a secreção orofaríngea. Suspeitando de atresia de esôfago, o médico tenta introduzir uma sonda nasogástrica de calibre 10 Fr, a qual encontra resistência mecânica e não progride além de 10 a 11 cm a partir da rima labial. Qual é a variante anatômica de atresia de esôfago mais comum na prática pediátrica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Atresia de esôfago isolada sem fístula traqueoesofágica (Tipo A de Vogt).',
      },
      {
        id: 'B',
        texto:
          'Atresia de esôfago proximal com fístula traqueoesofágica no coto superior (Tipo B de Vogt).',
      },
      {
        id: 'C',
        texto:
          'Atresia de esôfago proximal com fístula traqueoesofágica distal (Tipo C / III de Vogt).',
      },
      {
        id: 'D',
        texto:
          'Fístula traqueoesofágica isolada em "H" sem atresia de esôfago (Tipo E de Vogt).',
      },
    ],
    respostaCorreta: 'C',
    comentario:
      'A atresia de esôfago é uma das anomalias congênitas digestivas mais cobradas em concursos e provas de título. O tipo mais frequente de longe é a ATRESIA DE ESÔFAGO COM FÍSTULA TRAQUEOESOFÁGICA DISTAL (Classificação de Vogt Tipo C ou Ladd/Gross Tipo III), respondendo por cerca de 85% a 90% de todos os casos. Nessa anomalia, o esôfago proximal termina em um fundo cego (o que impede a deglutição da saliva fetal, causando polidrâmnio materno e sialorreia espumosa pós-parto, com parada da sonda a 10-12 cm), enquanto o coto esofágico distal comunica-se anormalmente com a traqueia ou brônquio principal através de uma fístula. A presença da fístula distal permite que o ar inspirado entre diretamente no estômago e no trato digestivo, levando à distensão gástrica e presença de ar abdominal ao raio-x.',
    comentariosAlternativas: {
      A: 'Incorreta. O Tipo A (atresia isolada sem fístula) representa cerca de 7% a 8% dos casos e caracteriza-se por abdome totalmente sem gás ("opaco").',
      B: 'Incorreta. O Tipo B (fístula apenas no coto proximal) é extremamente raro (< 1% dos casos).',
      C: 'Correta. A Atresia com fístula traqueoesofágica distal (Tipo C / III) é a variante anatômica mais prevalente, correspondendo a mais de 85% dos casos.',
      D: 'Incorreta. A fístula em "H" sem atresia (Tipo E) corresponde a cerca de 4% dos casos e costuma ter diagnóstico tardio com engasgos crônicos e pneumonias de repetição.',
    },
  },
  {
    id: 'ped-gas-062',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Atresia de Esôfago',
    isRevisao: false,
    enunciado:
      'Um recém-nascido com suspeita de atresia de esôfago é submetido à radiografia simples de tórax e abdome após a tentativa de passagem de sonda orogástrica radiopaca. A imagem radiográfica demonstra a ponta da sonda enovelada em fundo cego na altura da 3ª vértebra torácica e, no abdome, visualiza-se ampla câmara de ar gástrica e distribuição normal de ar nas alças intestinais. Qual é a interpretação fisiopatológica correta desse achado radiológico?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A presença de ar no estômago e nas alças intestinais confirma a existência de uma fístula traqueoesofágica comunicando a via aérea com o coto esofágico distal.',
      },
      {
        id: 'B',
        texto:
          'A presença de gás no abdome descarta o diagnóstico de atresia de esôfago e confirma refluxo gastroesofágico simples.',
      },
      {
        id: 'C',
        texto:
          'O ar gástrico demonstra que a atresia é do Tipo A (pura), tendo o ar chegado ao estômago por difusão cutânea transmural.',
      },
      {
        id: 'D',
        texto:
          'A sonda radiopaca progrediu normalmente e o enovelamento é um artefato decorrente da flexibilidade do material.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A radiografia simples tóraco-abdominal com sonda radiopaca parada no coto superior é o exame confirmatório da atresia de esôfago. A análise do compartimento abdominal é crucial para diferenciar os tipos anatômicos: como o coto proximal termina em fundo cego, o ar ambiente deglutido não consegue descer pelo esôfago. Logo, a ÚNICA via pela qual o ar inspirado pelo recém-nascido pode atingir o estômago e o restante do trato gastrointestinal é através de uma FÍSTULA que liga a via aérea (traqueia) ao coto esofágico DISTAL. Se houvesse atresia sem fístula distal (como na atresia pura / Tipo A), o abdome estaria completamente desprovido de gás (abdome "branco" ou opaco). Portanto, ar no estômago confirma a fístula traqueoesofágica distal (Tipo C).',
    comentariosAlternativas: {
      A: 'Correta. A presença de gás no estômago e intestino em paciente com parada proximal da sonda confirma a fístula traqueoesofágica distal.',
      B: 'Incorreta. O enovelamento da sonda a 10 cm associado aos engasgos e sialorreia confirma a atresia de esôfago.',
      C: 'Incorreta. No Tipo A (atresia pura), não há qualquer fístula e o abdome é completamente destituído de gás (abdome opaco).',
      D: 'Incorreta. A sonda que não ultrapassa 10-12 cm confirma obstrução esofágica anatômica.',
    },
  },
  {
    id: 'ped-gas-063',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Atresia de Esôfago',
    isRevisao: false,
    enunciado:
      'Em um neonato com atresia de esôfago confirmada, qual grupo de malformações congênitas associadas deve ser sistematicamente investigado antes do reparo cirúrgico definitivo devido ao consagrado acrônimo da Associação VACTERL?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Anomalias Vertebrais, Anorretais, Cardíacas, Traqueoesofágicas, Renais e de Membros (Limb).',
      },
      {
        id: 'B',
        texto:
          'Vasculite necrotizante, Agranulocitose, Catarata congênita, Tireoidite, Encefalite e Retinopatia.',
      },
      {
        id: 'C',
        texto:
          'Varizes esofágicas, Agenesia tímica, Coloboma de íris, Tetralogia de Fallot e Ectopia testicular.',
      },
      {
        id: 'D',
        texto:
          'Ventrículo único, Anencefalia, Cleft palatino, Trombocitopenia e Luxação congênita de quadril.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Cerca de 50% dos recém-nascidos portadores de atresia de esôfago apresentam outras malformações congênitas associadas. A associação mais clássica e frequentemente cobrada é o complexo VACTERL (ou VATER), um agrupamento não aleatório de anomalias que inclui: V = Vertebrais (hemivértebras, fusão vertebral); A = Anorretais (ânus imperfurado / malformação anorretal); C = Cardíacas (CIV, CIA, Tetralogia de Fallot, coarctação de aorta - principal fator determinante do prognóstico pré-operatório); TE = Fístula Traqueoesofágica e Atresia de esôfago; R = Renais e trato urinário (agenesia renal, hidronefrose, refluxo vesicoureteral); L = Membros ("Limb" - aplasia/hipoplasia de rádio, polidactilia). Por isso, todo recém-nascido com atresia de esôfago deve ser submetido a ecocardiograma com Doppler e ultrassonografia de rins e vias urinárias antes da cirurgia.',
    comentariosAlternativas: {
      A: 'Correta. VACTERL: Vertebral, Anal/anorretal, Cardíaca, Traqueoesofágica, Renal e Membros (Limb).',
      B: 'Incorreta. Vasculite e encefalite não fazem parte das anomalias congênitas estruturais do complexo VACTERL.',
      C: 'Incorreta. Esta descrição se assemelha a partes da síndrome CHARGE e DiGeorge, não à associação VACTERL.',
      D: 'Incorreta. Anencefalia é um defeito de fechamento de tubo neural incompatível com a sobrevida e não integra a definição do acrônimo.',
    },
  },
  {
    id: 'ped-gas-064',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Atresia de Esôfago',
    isRevisao: false,
    enunciado:
      'Qual é o manejo clínico inicial e pré-operatório correto de um recém-nascido nas primeiras horas de vida com atresia de esôfago e fístula traqueoesofágica distal enquanto aguarda a avaliação da cirurgia pediátrica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Jejum oral absoluto, posicionamento em decúbito elevado a 30°-45°, colocação de sonda de duplo lúmen no coto esofágico superior conectada à aspiração contínua (sonda de Replogle) e hidratação venosa.',
      },
      {
        id: 'B',
        texto:
          'Alimentação por gavagem enteral forçada com leite materno e decúbito ventral em Trendelenburg.',
      },
      {
        id: 'C',
        texto:
          'Intubação traqueal profilática imediata com ventilação mecânica sob alta pressão positiva em todos os casos.',
      },
      {
        id: 'D',
        texto:
          'Administração de contraste baritado espesso por via oral para mapear radiologicamente a extensão da fístula.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O manejo pré-operatório imediato do recém-nascido com atresia de esôfago objetiva prevenir a principal causa de mortalidade e morbidade: a PNEUMONIA QUÍMICA POR BRONCOASPIRAÇÃO (tanto da saliva retida no coto proximal quanto do refluxo de ácido gástrico que sobe pelo coto distal através da fístula traqueoesofágica). Os pilares do manejo são: 1) Jejum absoluto; 2) Posição em decúbito elevado (cabeceira a 30°-45°) para minimizar o refluxo do conteúdo gástrico para a traqueia pela fístula distal; 3) Aspiração contínua e suave do coto proximal com sonda de duplo lúmen (sonda de Replogle); 4) Hidratação venosa parenteral e glicemia de manutenção; 5) Evitar a todo custo ventilação mecânica por máscara ou sob pressão positiva desnecessária, pois o ar ventilará preferencialmente o estômago através da fístula de baixa resistência, causando distensão gástrica maciça e risco de ruptura gástrica. O bário é estritamente contraindicado pelo risco de aspiração pulmonar catastrófica.',
    comentariosAlternativas: {
      A: 'Correta. Medidas consagradas: jejum, decúbito elevado, aspiração contínua do coto superior (Replogle) e hidratação venosa.',
      B: 'Incorreta. A gavagem no coto cego causaria aspiração maciça e asfixia imediata.',
      C: 'Incorreta. Ventilação sob pressão positiva sem indicação absoluta de insuficiência respiratória insufla o estômago pela fístula traqueal, podendo levar à perfuração gástrica.',
      D: 'Incorreta. O sulfato de bário é terminantemente contraindicado na via aérea infantil pelo risco de pneumonia química grave e fibrose pulmonar.',
    },
  },
  {
    id: 'ped-gas-065',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Má Rotação Intestinal e Vólvulo',
    isRevisao: false,
    enunciado:
      'Um recém-nascido com 12 dias de vida, nascido a termo, em aleitamento materno exclusivo e com evolução neonatal prévia sem intercorrências, passa a apresentar subitamente recusa alimentar e vômitos incoercíveis de coloração verde-esmeralda (claramente biliosos). Nas últimas 4 horas, o recém-nascido tornou-se extremamente letárgico, pálido, com pulsos finos e abdome agudamente distendido e doloroso à palpação, com eliminação de pequena quantidade de sangue escuro pelo reto. Diante desse quadro clínico dramático, qual é a principal emergência cirúrgica pediátrica que deve ser suspeitada e tratada de imediato para evitar a necrose total do intestino médio?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Má rotação intestinal complicada com vólvulo de intestino médio.',
      },
      {
        id: 'B',
        texto:
          'Refluxo gastroesofágico fisiológico complicado por broncoespasmo agudo.',
      },
      {
        id: 'C',
        texto:
          'Enterocolite necrosante em estágio pré-patogênico com indicação de enema salino.',
      },
      {
        id: 'D',
        texto:
          'Icterícia fisiológica prolongada por deficiência transitória da glicuroniltransferase.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O axioma cirúrgico pediátrico mais sagrado afirma: TODO RECÉM-NASCIDO OU LACTENTE JOVEM COM VÔMITOS BILIOSOS TEM MÁ ROTAÇÃO INTESTINAL COM VÓLVULO DE INTESTINO MÉDIO ATÉ QUE SE PROVE O CONTRÁRIO! A má rotação intestinal resulta da interrupção da rotação embrionária habitual de 270° no sentido anti-horário da alça intestinal primitivo ao redor dos vasos mesentéricos superiores. Isso resulta em uma base mesentérica extremamente estreita (pedículo vascular curto), na qual todo o intestino médio (do duodeno distal à metade do cólon transverso) pode sofrer torção sobre si mesmo (vólvulo). A torção obstrui a veia e a artéria mesentéricas superiores, levando a infarto isquêmico transmural rápido de todo o intestino delgado e cólon direito. O quadro cursa com vômitos biliosos súbitos, choque séptico/hipovolêmico, acidose láctica e sangramento retal. É uma emergência cirúrgica com janela de tempo de poucas horas para evitar a perda intestinal completa (síndrome do intestino curto) ou óbito.',
    comentariosAlternativas: {
      A: 'Correta. Vômitos biliosos agudos em neonato com dor e choque caracterizam má rotação com vólvulo de intestino médio, emergência cirúrgica máxima.',
      B: 'Incorreta. O RGE fisiológico nunca apresenta vômitos biliosos, choque hemodinâmico ou hematoquezia.',
      C: 'Incorreta. A enterocolite necrosante é típica de prematuros extremos internados em UTIN sob estresse/fórmula, e enemas são contraindicados pelo risco de perfuração.',
      D: 'Incorreta. A icterícia fisiológica não cursa com vômitos biliosos, choque, abdome agudo nem sangramento intestinal.',
    },
  },
  {
    id: 'ped-gas-066',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Má Rotação Intestinal e Vólvulo',
    isRevisao: false,
    enunciado:
      'Em um neonato estável com suspeita de má rotação intestinal sem peritonite evidente, qual é o exame radiológico contrastado tradicionalmente considerado padrão-ouro para demonstrar a localização anatômica anormal da junção duodenojejunal (ângulo de Treitz)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Estudo radiológico contrastado do trato gastrointestinal alto (Seriografia Esôfago-Estômago-Duodeno / SEED).',
      },
      {
        id: 'B',
        texto:
          'Clister opaco baritado de duplo contraste para estudo da válvula ileocecal.',
      },
      {
        id: 'C',
        texto:
          'Ressonância magnética pélvica ponderada em T2 sem sedação.',
      },
      {
        id: 'D',
        texto:
          'Radiografia simples de tórax em posição póstero-anterior.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Seriografia do Trato Gastrointestinal Alto (SEED ou trânsito intestinal alto) é o exame padrão-ouro clássico para o diagnóstico de má rotação intestinal. Em condições normais, a junção duodenojejunal (ângulo de Treitz) situa-se à ESQUERDA da coluna vertebral e no mesmo nível ou acima do bulbo duodenal. Na má rotação intestinal, a junção duodenojejunal falha em cruzar a linha média, posicionando-se anormalmente à DIREITA da coluna vertebral e em posição mais baixa. Na presença de vólvulo associado, o SEED demonstra o aspecto típico em "saca-rolhas" (corkscrew sign) do duodeno e jejuno torcidos ao redor do pedículo mesentérico.',
    comentariosAlternativas: {
      A: 'Correta. A SEED é o exame de escolha para localizar o ângulo de Treitz (que se encontra anormalmente à direita da coluna na má rotação).',
      B: 'Incorreta. O enema opaco avalia a posição do ceco, mas a posição cecal é variável e pode estar normal em até 15-20% das más rotações, tornando o SEED superior.',
      C: 'Incorreta. A RM não é indicada na urgência obstrutiva neonatal pelo longo tempo de aquisição e dificuldades de monitorização.',
      D: 'Incorreta. A radiografia de tórax não permite avaliar o posicionamento da alça duodenal e do ângulo de Treitz.',
    },
  },
  {
    id: 'ped-gas-067',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Má Rotação Intestinal e Vólvulo',
    isRevisao: false,
    enunciado:
      'Ao realizar ultrassonografia abdominal com Doppler em um recém-nascido com vômitos biliosos agudos, qual achado ultrassonográfico vascular é altamente sugestivo de vólvulo de intestino médio?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sinal do redemoinho ("Whirlpool sign"), caracterizado pelo enrolamento espiralado da veia mesentérica superior e do mesentério ao redor da artéria mesentérica superior.',
      },
      {
        id: 'B',
        texto:
          'Fluxo retrógrado exclusivo na veia cava inferior com trombose portal bilateral.',
      },
      {
        id: 'C',
        texto:
          'Dilatação aneurismática congênita da artéria esplênica isolada sem acometimento venoso.',
      },
      {
        id: 'D',
        texto:
          'Espessamento isolado da muscular própria do reto superior a 10 mm.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Na ultrassonografia abdominal com Doppler colorido, o achado patognomônico do vólvulo de intestino médio é o "Sinal do Redemoinho" (Whirlpool sign). Esse sinal representa a rotação em espiral (sentido horário) dos vasos mesentéricos superiores (com a veia mesentérica superior e o mesentério enrolando-se ao redor do eixo da artéria mesentérica superior) e das alças intestinais envoltas pelo mesentério. Além disso, a ultrassonografia com Doppler frequentemente evidencia a inversão da relação anatômica habitual dos vasos mesentéricos (normalmente, a veia situa-se à direita da artéria; na má rotação, a veia comumente situa-se à esquerda ou anterior à artéria).',
    comentariosAlternativas: {
      A: 'Correta. O Sinal do Redemoinho (Whirlpool sign) ao Doppler dos vasos mesentéricos é altamente específico para o vólvulo de intestino médio.',
      B: 'Incorreta. Alterações na veia cava e trombose de porta não são os achados característicos da rotação vascular mesentérica.',
      C: 'Incorreta. Acometimento esplênico isolado não ocorre no vólvulo do intestino médio.',
      D: 'Incorreta. Espessamento retal não tem relação com o vólvulo dos vasos mesentéricos superiores.',
    },
  },
  {
    id: 'ped-gas-068',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Má Rotação Intestinal e Vólvulo',
    isRevisao: false,
    enunciado:
      'Qual é o procedimento cirúrgico clássico consagrado mundialmente para o tratamento de emergência da má rotação intestinal associada a vólvulo de intestino médio?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Procedimento de Ladd (desvolvulação no sentido anti-horário, secção das bridas anômalas de Ladd, alargamento da base do mesentério, posicionamento do intestino delgado à direita e cólon à esquerda, associado à apendicectomia profilática).',
      },
      {
        id: 'B',
        texto:
          'Operação de Kasai (portoenterostomia em Y de Roux com anastomose jejunal).',
      },
      {
        id: 'C',
        texto:
          'Procedimento de Soave com abaixamento endoanal transanal de cólon.',
      },
      {
        id: 'D',
        texto:
          'Piloromiotomia longitudinal extramucosa associada à fundoplicatura de Nissen.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O tratamento cirúrgico definitivo de urgência para a má rotação intestinal com ou sem vólvulo é o PROCEDIMENTO DE LADD (descrito por William Ladd em 1936). As etapas fundamentais do procedimento incluem: 1) Evisceração e desvolvulação do intestino médio no sentido ANTI-HORÁRIO (desfazendo a torção vascular); 2) Secção das bridas peritoneais anômalas (bridas de Ladd), que conectam o ceco mal posicionado à parede lateral direita e comprimem extrinsecamente o duodeno; 3) Alargamento da base estreita do mesentério para prevenir episódios futuros de torção vascular; 4) Posicionamento anatômico do intestino em não rotação (delgado acomodado à direita do abdome e cólon/ceco acomodados à esquerda); 5) Apendicectomia profilática (mandatória, pois o apêndice ficará em topografia anômala no quadrante superior esquerdo, o que geraria erros diagnósticos catastróficos caso ocorresse apendicite aguda no futuro).',
    comentariosAlternativas: {
      A: 'Correta. O Procedimento de Ladd reúne todos os passos obrigatórios de desvolvulação, liberação de bridas, alargamento mesentérico e apendicectomia profilática.',
      B: 'Incorreta. A cirurgia de Kasai é o tratamento cirúrgico para a atresia de vias biliares extra-hepáticas.',
      C: 'Incorreta. O procedimento de Soave é uma técnica de abaixamento de cólon para a Doença de Hirschsprung.',
      D: 'Incorreta. Piloromiotomia é cirurgia para estenose de piloro e fundoplicatura para DRGE.',
    },
  },
  {
    id: 'ped-gas-069',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Atresia Duodenal',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo, nascido com estigmas fenotípicos típicos de Síndrome de Down (fendas palpebrais oblíquas para cima, prega palmar única, hipotonia marcante). Nas primeiras 24 horas de vida, apresenta vômitos biliosos precoces sem distensão do abdome inferior (abdome plano/escavado). A radiografia simples de abdome revela o clássico "sinal da dupla bolha" (gás no estômago e no bulbo duodenal dilatados) com ausência completa de gás no restante do trato gastrointestinal distal. Qual é a principal anomalia congênita obstrutiva responsável por este quadro?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Atresia duodenal congênita (falha de recanalização do lúmen duodenal embrionário).',
      },
      {
        id: 'B',
        texto:
          'Estenose hipertrófica do piloro em fase incipiente.',
      },
      {
        id: 'C',
        texto:
          'Atresia ileal isolada com microcólon de desuso.',
      },
      {
        id: 'D',
        texto:
          'Invaginação intestinal íleo-ceco-cólica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Atresia Duodenal é uma das malformações digestivas congênitas mais clássicas, decorrente da falha de recanalização do lúmen duodenal epitelial por volta da 8ª à 10ª semana de gestação. Cerca de 30% a 40% dos recém-nascidos com atresia duodenal são portadores de Trissomia do 21 (Síndrome de Down). Como a grande maioria das atresias duodenais (> 80%) ocorre distalmente à ampola de Vater (pós-ampular), os vômitos são tipicamente BILIOSOS desde o primeiro dia de vida. Ao exame físico, o abdome superior pode ser levemente distendido, mas o abdome inferior é plano ou escavado (já que não há passagem de gás para o jejuno, íleo ou cólon). O achado radiológico patognomônico é o "Sinal da Dupla Bolha" (Double Bubble Sign), formado pela câmara gástrica e o coto duodenal proximal dilatados com níveis hidroaéreos e ausência completa de ar no restante do abdome.',
    comentariosAlternativas: {
      A: 'Correta. Atresia duodenal está fortemente ligada à Síndrome de Down e produz o clássico sinal da dupla bolha com ausência de ar distal.',
      B: 'Incorreta. Na EHP os vômitos são não biliosos, o início é após a 2ª-3ª semana de vida e não cursa com sinal da dupla bolha.',
      C: 'Incorreta. Na atresia ileal haveria distensão difusa com múltiplas alças distendidas e níveis hidroaéreos em escada no abdome.',
      D: 'Incorreta. Intussuscepção é rara nas primeiras 24 horas de vida em recém-nascidos e não produz o sinal da dupla bolha.',
    },
  },
  {
    id: 'ped-gas-070',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Íleo Meconial e Fibrose Cística',
    isRevisao: false,
    enunciado:
      'Neonato a termo, internado por distensão abdominal importante e incapacidade de eliminar mecônio nas primeiras 36 horas de vida. O abdome é tenso, com alças intestinais palpáveis de consistência em "massa de vidraceiro" ou emborrachadas. A radiografia simples de abdome demonstra dilatação de alças de intestino delgado sem níveis hidroaéreos evidentes e presença de aspecto granular mosqueado em bolhas de sabão / vidro moído (sinal de Neuhauser) no quadrante inferior direito. O enema opaco revela um microcólon difuso e tampões de mecônio espessado no íleo terminal. Qual patologia genética de herança autossômica recessiva é classicamente a causa subjacente dessa condição em mais de 80% a 90% dos casos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Fibrose Cística (Mucoviscidose), secundária a mutações no gene regulador da condutância transmembrana (CFTR).',
      },
      {
        id: 'B',
        texto:
          'Doença de Hirschsprung familial com acometimento isolado do reto distal.',
      },
      {
        id: 'C',
        texto:
          'Atrofia Muscular Espinhal tipo 1 por deleção do gene SMN1.',
      },
      {
        id: 'D',
        texto:
          'Distrofia Muscular de Duchenne ligada ao cromossomo X.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Íleo Meconial é a manifestação clínica mais precoce da Fibrose Cística (Mucoviscidose), ocorrendo em 15% a 20% de todos os pacientes com a doença, e cerca de 80% a 90% dos recém-nascidos que apresentam íleo meconial são portadores de Fibrose Cística. A ausência ou disfunção da proteína CFTR (canal de cloreto) leva à secreção de suco pancreático e intestinal pobre em água e íons bicarbonato, resultando em um mecônio anormalmente espesso, viscoso e desidratado que se impacta firmemente na luz do íleo distal, gerando obstrução mecânica completa. O exame radiológico revela ausência de níveis hidroaéreos típicos (pela viscosidade do mecônio impedindo a separação gás-líquido) e a imagem clássica em "vidro moído" ou "bolhas de sabão" de Neuhauser. O enema revela microcólon de desuso.',
    comentariosAlternativas: {
      A: 'Correta. O íleo meconial é a apresentação mais precoce da Fibrose Cística (mutação CFTR) e gera mecônio insolúvel e aderente.',
      B: 'Incorreta. Na Doença de Hirschsprung não há íleo meconial com aspecto em vidro moído nem microcólon em alças delgadas.',
      C: 'Incorreta. A AME cursa com hipotonia motora e atrofia bulbar, sem relação direta com alteração físico-química do mecônio.',
      D: 'Incorreta. Duchenne manifesta-se nos primeiros anos de vida com fraqueza muscular proximal e sinal de Gowers, sem repercussão obstrutiva neonatal.',
    },
  },
  {
    id: 'ped-gas-071',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Íleo Meconial e Fibrose Cística',
    isRevisao: false,
    enunciado:
      'Qual é a conduta terapêutica inicial de escolha em um recém-nascido com íleo meconial simples (sem sinais de perfuração, atresia associada, vólvulo ou peritonite meconial)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Laparotomia exploradora imediata com ressecção de todo o intestino delgado.',
      },
      {
        id: 'B',
        texto:
          'Enema evacuativo fluoroscópico com contraste hiperosmolar hidrossolúvel (como meglumina diatrizoato / Gastrografin) sob hidratação venosa vigorosa prévia.',
      },
      {
        id: 'C',
        texto:
          'Início precoce de alimentação enteral com fórmula rica em triglicerídeos de cadeia longa.',
      },
      {
        id: 'D',
        texto:
          'Administração retal de enema glicerinado a 100% aquecido sem monitorização radiológica.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'No íleo meconial não complicado (sem evidência de volvo, atresia, perfuração ou peritonite meconial), a conduta inicial de escolha é o tratamento não cirúrgico por meio de ENEMA TERAPÊUTICO COM CONTRASTE HIPEROSMOLAR HIDROSSOLÚVEL (como o Gastrografin), administrado lentamente por via retal sob controle fluoroscópico direto. A alta osmolaridade do contraste atrai líquido do espaço extracelular e intravascular para a luz intestinal, amolecendo e lubrificando a massa meconial aderida à parede ileal e estimulando o peristaltismo de evacuação. Como o contraste extrai grande volume de água para o lúmen intestinal, é CRUCIAL assegurar ressuscitação volêmica parenteral prévia e hidratação rigorosa para evitar choque hipovolêmico grave.',
    comentariosAlternativas: {
      A: 'Incorreta. A cirurgia é reservada para casos complicados (perfuração, volvo) ou após falha do enema hiperosmolar.',
      B: 'Correta. O enema hiperosmolar com Gastrografin sob fluoroscopia e hidratação vigorosa resolve a obstrução em até 70-80% dos casos não complicados.',
      C: 'Incorreta. Alimentar uma criança com obstrução intestinal mecânica completa provocaria vômitos, aspiração e piora da distensão.',
      D: 'Incorreta. O enema deve ser com contraste hidrossolúvel sob controle radiológico contínuo para avaliar progressão até o íleo terminal.',
    },
  },
  {
    id: 'ped-gas-072',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Divertículo de Meckel',
    isRevisao: false,
    enunciado:
      'Menino de 2 anos é trazido pela mãe à consulta médica com história de sangramento retal indolor de grande volume há 12 horas. As fezes apresentam coloração vermelho-escuro a vinhosa ("tijolo moído" / brick-red stools). A criança não refere dor abdominal, não apresenta febre, diarreia ou vômitos e alimenta-se normalmente. Ao exame físico: corado +/4+, hidratado, abdome flácido, indolor, sem visceromegalias ou massas palpáveis; ânus sem fissuras, hemorroidas ou prolapso. O hemograma demonstra anemia normocítica e normocrômica (Hb 9,2 g/dL). Qual é o exame complementar de primeira linha com maior acurácia diagnóstica para confirmar a principal suspeita clínica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Cintilografia abdominal com Tecnécio-99m pertecnetato (Meckel scan).',
      },
      {
        id: 'B',
        texto:
          'Colonoscopia total com biópsias seriadas da mucosa retal para exclusão de colite amebiana.',
      },
      {
        id: 'C',
        texto:
          'Ressonância magnética nuclear de encéfalo e medula espinhal.',
      },
      {
        id: 'D',
        texto:
          'Radiografia simples de abdome em decúbito ventral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A apresentação clínica de hemorragia digestiva baixa volumosa e completamente indolor (enterorragia com fezes em "tijolo moído" ou melena) em uma criança previamente hígida com menos de 2 a 3 anos de idade é o quadro clássico do DIVERTÍCULO DE MECKEL. O divertículo de Meckel é a anomalia congênita gastrointestinal mais frequente, decorrente do fechamento incompleto do ducto onfalomesentérico (vitelino). Em cerca de 50% dos divertículos sintomáticos, há presença de MUCOSA GÁSTRICA ECTÓPICA (ou pancreática). As células parietais do tecido gástrico ectópico produzem ácido clorídrico no interior do divertículo, causando ulceração péptica na mucosa ileal adjacente (que não possui proteção contra o ácido), levando a sangramento indolor súbito. O exame diagnóstico de escolha é a CINTILOGRAFIA COM PERTECNETATO DE TECNÉCIO-99m (Meckel Scan), pois o radiotraçador é avidamente captado pelas células mucossecretoras da mucosa gástrica ectópica, identificando o foco de sangramento na fossa ilíaca direita.',
    comentariosAlternativas: {
      A: 'Correta. A cintilografia com 99mTc-pertecnetato (Meckel scan) capta especificamente mucosa gástrica ectópica com sensibilidade superior a 85-90%.',
      B: 'Incorreta. A colonoscopia não atinge facilmente o íleo médio/distal e o sangramento é ileal por mucosa ectópica, não colônico.',
      C: 'Incorreta. Não há qualquer acometimento do sistema nervoso central nessa anomalia embriológica puramente digestiva.',
      D: 'Incorreta. A radiografia simples de abdome não tem resolução de contraste para visualizar divertículo de Meckel sem perfuração.',
    },
  },
  {
    id: 'ped-gas-073',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Divertículo de Meckel',
    isRevisao: false,
    enunciado:
      'A anatomia do Divertículo de Meckel é tradicionalmente memorizada no meio médico e cobrada em bancas de concursos pela consagrada "Regra dos 2". Quais são os componentes clássicos dessa regra mnemônica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ocorre em 2% da população, localiza-se a cerca de 2 pés (60 cm) da válvula ileocecal, mede aproximadamente 2 polegadas (5 cm) de comprimento, pode conter 2 tipos principais de tecido ectópico (gástrico e pancreático) e manifesta-se clinicamente com maior frequência antes dos 2 anos de idade.',
      },
      {
        id: 'B',
        texto:
          'Acomete 20% das meninas, localiza-se a 2 cm do piloro gástrico, mede 2 mm e necessita de 2 laparotomias exploradoras para ressecção.',
      },
      {
        id: 'C',
        texto:
          'Exige 2 anos de antibioticoterapia contínua, localiza-se no cólon sigmoide a 2 cm da borda anal e tem 2 dias de evolução natural.',
      },
      {
        id: 'D',
        texto:
          'Presente em 2 indivíduos a cada 2 milhões de habitantes, manifesta-se exclusivamente após os 20 anos de idade e tem 2 mm de espessura.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A clássica "Regra dos 2" do Divertículo de Meckel engloba: 1) Prevalência de aproximadamente 2% na população geral; 2) Proporção de 2 homens para 1 mulher acometida em casos sintomáticos; 3) Localização habitual no bordo antimesentérico a cerca de 2 pés (~60 cm) proximal à válvula ileocecal; 4) Comprimento médio de cerca de 2 polegadas (~5 cm); 5) Presença de 2 tipos comuns de mucosa heterotópica/ectópica (gástrica e pancreática); 6) Manifestação clínica mais comum antes dos 2 anos de idade (habitualmente como hemorragia digestiva indolor). O tratamento definitivo para divertículos sintomáticos é a ressecção cirúrgica (diverticulectomia ou ressecção segmentar de íleo com anastomose primária).',
    comentariosAlternativas: {
      A: 'Correta. A "Regra dos 2" clássica: 2% da população, 2 pés da válvula ileocecal, 2 polegadas de extensão, 2 tecidos ectópicos, sintomas antes dos 2 anos.',
      B: 'Incorreta. Localiza-se no íleo distal e não no piloro, acometendo preferencialmente meninos e com prevalência de 2%.',
      C: 'Incorreta. Divertículo de Meckel é uma malformação de delgado, sem indicação de antibioticoterapia prolongada.',
      D: 'Incorreta. Com prevalência de 2%, acomete 2 a cada 100 indivíduos, e não 2 em cada 2 milhões.',
    },
  },
  {
    id: 'ped-gas-074',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Diagnóstico Diferencial no Abdome Agudo Neonatal',
    isRevisao: false,
    enunciado:
      'Um recém-nascido com 18 horas de vida apresenta distensão abdominal e vômitos. O pediatra busca diferenciar clinicamente a topografia da obstrução intestinal (alta vs baixa). Qual conjunto de achados clínicos e radiológicos caracteriza tipicamente uma obstrução intestinal ALTA (duodenal ou jejunal alta) em contraste com uma obstrução BAIXA (ileal ou colônica)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Início precoce dos vômitos (primeiras horas de vida), distensão abdominal restrita ao epigástrio ou ausente, e radiografia com poucas bolhas gasosas e escassez ou ausência de gás no abdome inferior.',
      },
      {
        id: 'B',
        texto:
          'Início tardio dos vômitos (após o 5º dia), abdome difusamente em batráquio com dilatação maciça de mais de 20 alças e ausência completa de níveis hidroaéreos.',
      },
      {
        id: 'C',
        texto:
          'Ausência de vômitos, eliminação mecônio abundante e normal com diarreia aquosa copiosa imediata.',
      },
      {
        id: 'D',
        texto:
          'Surgimento isolado de icterícia colestática sem qualquer repercussão motora gastrointestinal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A semiologia da obstrução neonatal divide as lesões em altas (esôfago, estômago, duodeno e jejuno proximal) e baixas (jejuno distal, íleo, cólon e ânus/reto): 1) Obstruções Altas: caracterizam-se por vômitos muito precoces (primeiras horas de vida), distensão abdominal discreta ou restrita ao andar superior (epigástrio), abdome inferior plano/escavado e imagem radiográfica com poucas imagens gasosas (ex.: bolha única na atresia gástrica, dupla bolha na atresia duodenal, tripla bolha na atresia jejunal alta) com escassez de ar no abdome distal; 2) Obstruções Baixas: caracterizam-se por distensão abdominal exuberante e progressiva (abdome globoso), atraso na eliminação de mecônio (> 24-48 horas), vômitos mais tardios (frequentemente fecaloides) e radiografia revelando múltiplas alças distendidas com níveis hidroaéreos difusos.',
    comentariosAlternativas: {
      A: 'Correta. Obstruções altas cursam com vômitos precoces, distensão mínima ou confinada ao epigástrio e poucas bolhas aéreas proximais ao RX.',
      B: 'Incorreta. Múltiplas alças distendidas e distensão difusa caracterizam obstrução baixa (ileal ou cólica).',
      C: 'Incorreta. Na obstrução alta há vômitos precoces e incapacidade de tolerar alimentação.',
      D: 'Incorreta. Icterícia isolada não define síndrome obstrutiva mecânica intestinal.',
    },
  },
  {
    id: 'ped-gas-075',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Distúrbios Gastrointestinais Cirúrgicos',
    isRevisao: false,
    enunciado:
      'Lactente de 6 semanas, sexo masculino, dá entrada no pronto-socorro com história de vômitos não biliosos em jato há 2 semanas, acompanhados de emagrecimento progressivo e letargia. Os exames laboratoriais revelam: Na+ 126 mEq/L, K+ 2,7 mEq/L, Cl- 78 mEq/L, pH 7,56, HCO3- 40 mEq/L e ureia 65 mg/dL. A ultrassonografia confirma Estenose Hipertrófica do Piloro com espessura muscular de 4,8 mm e comprimento de 18 mm. Qual é a estratégia de ressuscitação hidroeletrolítica parenteral inicial recomendada para estabilizar este lactente antes da liberação cirúrgica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Infusão venosa de Solução Fisiológica a 0,9% (SF 0,9%) para restauração rápida da volemia e aporte de cloreto e sódio, seguida de solução com glicose e cloreto de sódio com adição de Cloreto de Potássio (KCl) após confirmação inequívoca de diurese efetiva.',
      },
      {
        id: 'B',
        texto:
          'Infusão imediata de Ringer Lactato contendo bicarbonato de sódio a 10% em bólus contínuo.',
      },
      {
        id: 'C',
        texto:
          'Administração exclusiva de água destilada pura via endovenosa associada a furosemida para induzir diurese forçada.',
      },
      {
        id: 'D',
        texto:
          'Transfusão maciça de concentrado de hemácias com plasma fresco congelado e diálise peritoneal de emergência.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O manejo pré-operatório da desidratação grave com alcalose hipoclorêmica e hipocalêmica na EHP exige um plano terapêutico metódico em duas etapas: 1) Expansão e restauração do volume intravascular: se houver sinais de desidratação grave ou choque, administra-se bólus de Solução Fisiológica a 0,9% (20 mL/kg). O SF 0,9% fornece alta concentração de cloro (154 mEq/L) e sódio (154 mEq/L), restaurando a perfusão tecidual e fornecendo os íons cloreto essenciais para que o túbulo renal proximal e distal consiga reabsorver cloreto e excretar o bicarbonato em excesso; 2) Manutenção e reposição de potássio: após restabelecimento da perfusão e CONFIRMAÇÃO DE DIURESE EFETIVA (regra de segurança para prevenir hipercalemia iatrogênica arritmogênica), inicia-se solução de manutenção (ex.: SF 0,45% a 0,9% em SG 5%) adicionando Cloreto de Potássio (KCl a 20 a 40 mEq/L). Essa hidratação corrige a hipocloremia, a hipocalemia e a alcalose, permitindo cirurgia segura sem apneia pós-anestésica.',
    comentariosAlternativas: {
      A: 'Correta. Expansão inicial com SF 0,9% para fornecer cloreto e sódio, seguida de manutenção com KCl somente após confirmação de diurese.',
      B: 'Incorreta. O Ringer Lactato contém lactato (que é metabolizado a bicarbonato) e tem menor concentração de cloro (109 mEq/L), além de bicarbonato agravar a alcalose grave.',
      C: 'Incorreta. Água destilada pura EV causa hemólise maciça imediata e choque letal; diuréticos espoliam ainda mais potássio e cloro.',
      D: 'Incorreta. Não há choque hemorrágico, coagulopatia nem falência anúrica terminal que justifiquem hemotransfusão ou diálise peritoneal.',
    },
  },
  {
    id: 'ped-gas-076',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Constipação Intestinal Funcional',
    isRevisao: false,
    enunciado:
      'Menino de 3 anos e 6 meses é trazido pela mãe à UBS com queixa de dificuldade persistente para evacuar há 4 meses. A mãe relata que o quadro começou após o treinamento de toalete ("desfralde"), que foi marcado por broncas frequentes e insistência dos pais. A criança evacua a cada 4 ou 5 dias fezes muito volumosas, ressecadas e endurecidas em formato de "pedras" cilíndricas que frequentemente entopem o vaso sanitário. Durante as tentativas de evacuação, a criança chora, grita de dor e foi observado sangramento vivo em pequena quantidade recobrindo a superfície do bolo fecal. Nos dias que antecedem a evacuação, a mãe observa que o menino contrai fortemente os glúteos, fica na ponta dos pés com as pernas esticadas e cruzadas e se esconde atrás do sofá ("dança da retenção"). Ao exame físico: abdome indolor com massa fecal palpável e indolor em fossa ilíaca esquerda; inspeção perianal com eritema e presença de fissura anal longitudinal rasa em comissura posterior. Qual é o mecanismo fisiopatológico primário que perpetua a constipação intestinal funcional na infância?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ciclo vicioso de dor à evacuação que induz comportamento de retenção fecal voluntária ou involuntária, levando ao acúmulo crônico e desidratação das fezes na ampola retal.',
      },
      {
        id: 'B',
        texto:
          'Ausência congênita de receptores de acetilcolina na camada circular da muscular própria de todo o cólon.',
      },
      {
        id: 'C',
        texto:
          'Mutação genética autossômica dominante no gene CFTR resultando em secreção maciça de suco pancreático.',
      },
      {
        id: 'D',
        texto:
          'Degeneração autoimune precoce dos neurônios simpáticos pós-ganglionares do plexo celíaco.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Mais de 95% dos casos de constipação na faixa etária pediátrica são de etiologia FUNCIONAL (sem causa orgânica subjacente). O mecanismo fisiopatológico central e mais cobrado em provas é o CICLO VICIOSO DA CONSTIPAÇÃO: 1) Um evento desencadeante (treinamento coercitivo de toalete, introdução de dieta pobre em fibras ou fissura anal prévia) causa evacuação dolorosa; 2) Para evitar a dor, a criança desenvolve ativamente um "comportamento retentivo" (contração voluntária do esfíncter anal externo e da musculatura glútea, ficando na ponta dos pés ou escondendo-se); 3) As fezes retidas na ampola retal têm sua água progressivamente reabsorvida pela mucosa colônica, tornando-se cada vez mais secas, duras, volumosas e compactadas (fecaloma); 4) A distensão crônica da ampola retal reduz a sensibilidade e o reflexo do reflexo da defecação (megarreto funcional); 5) A evacuação subsequente do bolo endurecido dilacera o anoderma, reativando ou agravando a fissura anal e a dor, perpetuando o ciclo.',
    comentariosAlternativas: {
      A: 'Correta. O ciclo de dor -> retenção fecal -> endurecimento do fecaloma -> perda de sensibilidade -> dor agravada é o motor da constipação funcional.',
      B: 'Incorreta. A ausência de inervação intrínseca com aganglionose é a base da Doença de Hirschsprung, uma causa orgânica.',
      C: 'Incorreta. Na Fibrose Cística há redução da secreção de água e bicarbonato com insuficiência exócrina pancreática, não aumento de secreção.',
      D: 'Incorreta. Não há degeneração simpática autoimune na constipação funcional, que é um distúrbio comportamental e funcional.',
    },
  },
  {
    id: 'ped-gas-077',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Constipação Intestinal Funcional',
    isRevisao: false,
    enunciado:
      'Uma menina de 6 anos é levada ao gastroenterologista pediátrico pela mãe, que se queixa de que a filha "passou a ter diarreia e sujar a calcinha várias vezes ao dia há 2 meses". A mãe relata que a criança sempre foi constipada desde os 2 anos de idade, mas agora perde pequenas quantidades de fezes amolecidas, semilíquidas e fétidas na roupa íntima, mesmo na escola, gerando constrangimento social severo. A mãe acredita que a filha "perdeu o controle dos esfíncteres por desobediência ou desenvolveu uma infecção intestinal crônica". Ao exame físico: abdome distendido com grande massa fecal endurecida palpável desde a pelve até o epigástrio. O toque retal demonstra ampola retal amplamente dilatada e completamente ocupada por fecaloma rochoso. Qual é o fenômeno clínico e o diagnóstico correto dessa condição?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Incontinência fecal por transbordamento / escape fecal involuntário ("soiling" ou encoprese retentiva) decorrente de fecaloma crônico impactado na constipação funcional grave.',
      },
      {
        id: 'B',
        texto:
          'Diarreia secretora invasiva por infecção crônica por Clostridioides difficile com formação de pseudomembranas.',
      },
      {
        id: 'C',
        texto:
          'Incompetência esfincteriana congênita primária associada à espinha bífida oculta.',
      },
      {
        id: 'D',
        texto:
          'Gastroenteropatia perdedora de proteínas autoimune com prolapso mucoso associado.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O caso clínico ilustra um motivo clássico e frequente de confusão diagnóstica em Pediatria: o ESCAPE FECAL INVOLUNTÁRIO (conhecido como "soiling" ou incontinência fecal retentiva / encoprese retentiva). Quando uma criança com constipação funcional grave desenvolve um grande fecaloma impactado na ampola retal, ocorre perda da percepção sensorial de repleção retal por relaxamento crônico do esfíncter anal interno. O conteúdo fecal proximal amolecido que continua descendo pelo cólon não consegue passar pelo bolo compacto endurecido e, em vez disso, escorre pelas bordas da massa fecal endurecida e extravasa de maneira involuntária pelo ânus, sujando a roupa íntima ("soiling"). Pais e profissionais desavisados com frequência interpretam essa perda como "diarreia" e chegam a prescrever antidiarréicos, agravando catastroficamente a impactação fecal. O achado do fecaloma ao exame físico e toque retal sela o diagnóstico.',
    comentariosAlternativas: {
      A: 'Correta. Trata-se de incontinência por transbordamento (soiling) causada por fecaloma volumoso em paciente com constipação funcional.',
      B: 'Incorreta. Não se trata de colite infecciosa por C. difficile; a presença de fecaloma impactado palpável e ampola cheia descartam essa hipótese.',
      C: 'Incorreta. A criança não apresenta disrafismo nem perda neurológica primária de tônus esfincteriano; a ampola está cheia de fezes duras.',
      D: 'Incorreta. Não há hipoalbuminemia, anasarca nem perda proteica entérica; o quadro é tipicamente retentivo.',
    },
  },
  {
    id: 'ped-gas-078',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Constipação Intestinal Funcional',
    isRevisao: false,
    enunciado:
      'De acordo com o Consenso Internacional de Roma IV para distúrbios gastrointestinais funcionais na infância, quais são os critérios clínicos para o diagnóstico de Constipação Intestinal Funcional em crianças com idade de desenvolvimento igual ou superior a 4 anos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Presença de pelo menos 2 critérios por pelo menos 1 mês: <= 2 evacuações por semana; >= 1 episódio de incontinência fecal por semana; histórico de postura retentiva excessiva; histórico de dor à evacuação ou fezes duras; presença de grande massa fecal no reto; histórico de fezes de grande calibre que podem entupir o vaso.',
      },
      {
        id: 'B',
        texto:
          'Obrigatoriedade de biópsia retal demonstrando perda de células ganglionares e ausência de evacuações por mais de 30 dias consecutivos.',
      },
      {
        id: 'C',
        texto:
          'Necessidade mandatória de dor epigástrica noturna que alivia com a ingestão de leite, associada a vômitos fecaloides recorrentes.',
      },
      {
        id: 'D',
        texto:
          'Presença exclusiva de sangramento retal indolor de grande volume associado a enteroscopia com pólipos múltiplos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Pelos Critérios de Roma IV para crianças com idade >= 4 anos, a Constipação Funcional é diagnosticada quando o paciente preenche pelo menos DOIS dos seguintes critérios, com frequência de pelo menos uma vez por semana durante no mínimo 1 mês (e critérios insuficientes para síndrome do intestino irritável): 1) Duas ou menos evacuações no vaso sanitário por semana; 2) Pelo menos um episódio de incontinência fecal (escape fecal/soiling) por semana; 3) Histórico de postura retentiva deliberada ou retenção fecal excessiva; 4) Histórico de evacuações dolorosas ou fezes endurecidas (Bristol 1 ou 2); 5) Presença de grande massa fecal no reto (fecaloma ao toque ou palpação); 6) Histórico de fezes de grande diâmetro que chegam a entupir o vaso sanitário.',
    comentariosAlternativas: {
      A: 'Correta. Preenchimento de pelo menos 2 dos 6 critérios de Roma IV por no mínimo 1 mês confirma a constipação funcional.',
      B: 'Incorreta. A constipação funcional não requer biópsia; a ausência de gânglios caracterizaria a Doença de Hirschsprung.',
      C: 'Incorreta. Dor epigástrica noturna que alivia com alimentos é sinal de úlcera péptica, não critério de Roma IV para constipação.',
      D: 'Incorreta. Sangramento indolor com pólipos indica polipose juvenil, patologia orgânica e não funcional.',
    },
  },
  {
    id: 'ped-gas-079',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Constipação Intestinal Funcional',
    isRevisao: false,
    enunciado:
      'Um menino de 5 anos é atendido na emergência pediátrica com dor abdominal em cólica e recusa alimentar. O exame físico evidencia abdome tenso e volumosa massa fecal impactada em fossa ilíaca esquerda e pelve, confirmada ao toque retal como fecaloma volumoso. Qual é a conduta farmacológica de primeira escolha preconizada pelas diretrizes internacionais (ESPGHAN/NASPGHAN) e da Sociedade Brasileira de Pediatria (SBP) para a fase de DESIMPACTAÇÃO FECAL na constipação funcional da criança?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Polietilenoglicol (PEG 3350 ou 4000 sem eletrólitos) por via oral na dose de 1,0 a 1,5 g/kg/dia por 3 a 6 dias consecutivos.',
      },
      {
        id: 'B',
        texto:
          'Óleo mineral em doses maciças associado a chá de sene e bisacodil venoso.',
      },
      {
        id: 'C',
        texto:
          'Passagem imediata de sonda nasogástrica para infusão contínua de água gelada por 48 horas.',
      },
      {
        id: 'D',
        texto:
          'Encaminhamento à sala cirúrgica para colostomia em alça de urgência sem qualquer tentativa de laxativos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O manejo da constipação intestinal funcional grave com fecaloma divide-se rigidamente em duas fases: 1) FASE DE DESIMPACTAÇÃO e 2) FASE DE MANUTENÇÃO. As diretrizes da ESPGHAN, NASPGHAN e SBP elegem o POLIETILENOGLICOL (PEG 3350 ou PEG 4000 sem eletrólitos) por via oral como a DROGA DE PRIMEIRA ESCOLHA para a desimpactação fecal. O PEG é um polímero osmótico de alto peso molecular que não é absorvido nem metabolizado pela flora cólica, retendo água estequiometricamente no interior da luz intestinal, amolecendo a massa fecal de forma indolor e eficaz. A dose de desimpactação é de 1,0 a 1,5 g/kg/dia (fracionada ou em tomada única diluída em água ou suco) durante 3 a 6 dias consecutivos. O PEG oral é tão eficaz quanto enemas retais, porém sem o trauma psicológico de procedimentos retais invasivos.',
    comentariosAlternativas: {
      A: 'Correta. PEG 4000/3350 oral na dose de 1,0 a 1,5 g/kg/dia por 3 a 6 dias é a primeira escolha padrão para desimpactação fecal indolor.',
      B: 'Incorreta. Óleo mineral tem risco de pneumonia lipoídica por aspiração (especialmente em menores de 1 ano ou com refluxo) e estimulantes antracênicos (sene) não são primeira linha.',
      C: 'Incorreta. Infusão de água gelada não tem fundamento e pode induzir choque térmico e hipotermia grave.',
      D: 'Incorreta. Constipação funcional com fecaloma é tratada clinicamente; colostomia é erro crasso de conduta.',
    },
  },
  {
    id: 'ped-gas-080',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Constipação Intestinal Funcional',
    isRevisao: false,
    enunciado:
      'Após a desimpactação fecal bem-sucedida com polietilenoglicol em um pré-escolar de 4 anos com constipação funcional, o pediatra planeja a FASE DE MANUTENÇÃO. Qual é a orientação farmacológica e comportamental correta a ser fornecida à família?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Suspender qualquer medicação imediatamente e orientar retorno apenas se o paciente ficar mais de 10 dias sem evacuar.',
      },
      {
        id: 'B',
        texto:
          'Manter laxativo osmótico (PEG 4000 na dose de 0,4 a 0,8 g/kg/dia) por período prolongado (no mínimo 2 a 6 meses), associado a treinamento de toalete com apoio firme para os pés no vaso sanitário, realizando desmame lento e gradual somente após meses de hábito evacuatório regular e indolor.',
      },
      {
        id: 'C',
        texto:
          'Substituir o PEG por enemas retais diários com clister glicerinado por 1 ano para evitar o risco de "preguiça intestinal" farmacológica.',
      },
      {
        id: 'D',
        texto:
          'Prescrever antibióticos profiláticos contínuos para esterilizar a microbiota colônica fermentadora.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'Um dos erros mais comuns no tratamento da constipação infantil é a interrupção precoce da medicação logo após a desimpactação. As diretrizes enfatizam que a FASE DE MANUTENÇÃO deve ser PROLONGADA, durando no MÍNIMO 2 a 6 meses (muitas vezes 1 ano ou mais). A droga de escolha na manutenção continua sendo o PEG (0,4 a 0,8 g/kg/dia, ajustado para obter 1 a 2 evacuações pastosas/amolecidas ao dia). O uso prolongado de PEG é completamente seguro, não causa atonia colônica nem dependência ("preguiça intestinal"), pois age por mecanismo físico-osmótico puro. A suspensão precoce antes da restauração da sensibilidade retal e da remodelação do megarreto dilatado resulta em recidiva em mais de 70-80% dos casos. Paralelamente, o treinamento de toalete com suporte para os pés (ângulo de 90° no quadril e joelho para retificar o feixe do músculo puborretal) e o reforço positivo são essenciais.',
    comentariosAlternativas: {
      A: 'Incorreta. Suspender precocemente o laxante garante recidiva quase imediata da retenção e do fecaloma.',
      B: 'Correta. Manutenção por pelo menos 2 a 6 meses com PEG (0,4-0,8 g/kg/dia) e apoio para os pés é indispensável para evitar recidiva.',
      C: 'Incorreta. Enemas diários crônicos causam trauma psicológico severo, fissuras retais e dependência mecânica indesejada.',
      D: 'Incorreta. Antibióticos não têm qualquer indicação na constipação funcional e levariam à disbiose e diarreia bacteriana.',
    },
  },
  {
    id: 'ped-gas-081',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença de Hirschsprung',
    isRevisao: false,
    enunciado:
      'Qual é o defeito embriológico e anatomopatológico primário responsável pelo desenvolvimento da Doença de Hirschsprung (Megacólon Aganglionar Congênito)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Falha na migração craniocaudal das células precursoras da crista neural vagal durante o desenvolvimento embrionário, culminando na ausência congênita de células ganglionares nos plexos mioentérico (Auerbach) e submucoso (Meissner) do segmento intestinal distal.',
      },
      {
        id: 'B',
        texto:
          'Duplicação congênita do plexo mioentérico com hiperplasia desorganizada de neurônios produtores de óxido nítrico.',
      },
      {
        id: 'C',
        texto:
          'Destruição autoimune pós-natal adquirida das células de Cajal desencadeada pela introdução de proteína heteróloga.',
      },
      {
        id: 'D',
        texto:
          'Isquemia mesentérica focal intrauterina tardia que necrosa exclusivamente a camada submucosa do ceco ascendente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Doença de Hirschsprung é uma neurocristopatia caracterizada pela ausência de células ganglionares parassimpáticas intramurais intrínsecas nos plexos mioentérico de Auerbach e submucoso de Meissner. Durante a embriogênese normal (entre a 5ª e a 12ª semana de gestação), as células derivadas da crista neural migram no sentido craniocaudal ao longo do trato gastrointestinal, do esôfago proximal até o reto distal. A interrupção ou falha prematura dessa migração faz com que o segmento distal (iniciando no ânus e estendendo-se por extensão variável no sentido cranial) fique desprovido de gânglios nervosos (aganglionose). Como esses neurônios intrínsecos são responsáveis pela síntese de óxido nítrico e VIP (que medeiam o relaxamento muscular), o segmento aganglionar permanece em contração espástica permanente, funcionando como uma verdadeira obstrução mecânica e funcional.',
    comentariosAlternativas: {
      A: 'Correta. Falha da migração das células da crista neural com ausência de gânglios em Auerbach e Meissner no reto/cólon distal é a definição anatomopatológica.',
      B: 'Incorreta. Há ausência (aganglionose) de neurônios e falta de óxido nítrico, gerando incapacidade de relaxamento esfincteriano.',
      C: 'Incorreta. Trata-se de uma anomalia embriogênica congênita da crista neural, e não de destruição autoimune adquirida pós-natal.',
      D: 'Incorreta. Atresias intestinais podem decorrer de acidentes vasculares intrauterinos, mas Hirschsprung decorre de falha de migração neurogênica.',
    },
  },
  {
    id: 'ped-gas-082',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença de Hirschsprung',
    isRevisao: false,
    enunciado:
      'Recém-nascido do sexo masculino, a termo, peso de nascimento 3.400 g, sem intercorrências no parto. Com 52 horas de vida, o bebê ainda não eliminou qualquer quantidade de mecônio, apesar de ter iniciado aleitamento materno. A mãe relata que o recém-nascido está nauseado, recusando o peito, e apresentou dois episódios de vômitos com secreção esverdeada (biliosa). Ao exame físico: recém-nascido ictérico zona II de Kramer, abdome intensamente distendido e timpânico com circulação colateral visível. Considerando os sinais de alerta no período neonatal, qual achado semiológico deve levantar imediata suspeita de Doença de Hirschsprung?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Atraso na eliminação de mecônio além de 48 horas de vida em recém-nascido a termo associado à distensão abdominal e vômitos biliosos.',
      },
      {
        id: 'B',
        texto:
          'Eliminação meconial precoce nos primeiros 30 minutos de vida acompanhada de diarreia colérica volumosa.',
      },
      {
        id: 'C',
        texto:
          'Presença isolada de icterícia colestática sem alteração da distensão ou da dinâmica intestinal.',
      },
      {
        id: 'D',
        texto:
          'Palpação de massa cilíndrica móvel em hipocôndrio direito com fossa ilíaca direita dolorosa.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O sinal de alerta clínico mais sensível e importante para o diagnóstico precoce da Doença de Hirschsprung é o ATRASO NA ELIMINAÇÃO DE MECÔNIO ALÉM DE 48 HORAS DE VIDA. Mais de 98% a 99% dos recém-nascidos a termo saudáveis eliminam mecônio nas primeiras 24 a 48 horas de vida (a grande maioria nas primeiras 24 horas). Na Doença de Hirschsprung, mais de 90% dos recém-nascidos afetados falham em eliminar mecônio nas primeiras 48 horas. A retenção meconial leva à distensão abdominal progressiva, inapetência e vômitos biliosos por estase intestinal alta. Todo recém-nascido a termo que não evacua em 48 horas deve ser obrigatoriamente investigado para afecções orgânicas obstrutivas colorretais, com destaque para a Doença de Hirschsprung.',
    comentariosAlternativas: {
      A: 'Correta. Atraso meconial > 48 horas em RN a termo com distensão e vômitos biliosos é a apresentação clássica de alerta para Hirschsprung.',
      B: 'Incorreta. A eliminação precoce descarta obstrução mecânica e aganglionose retal distal.',
      C: 'Incorreta. Icterícia neonatal isolada não é marcador específico de aganglionose congênita do cólon.',
      D: 'Incorreta. Massa em salsicha em hipocôndrio direito sugere intussuscepção intestinal em lactente de 6-9 meses, não Hirschsprung neonatal.',
    },
  },
  {
    id: 'ped-gas-083',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença de Hirschsprung',
    isRevisao: false,
    enunciado:
      'Ao realizar o exame físico minucioso e o toque retal em um lactente de 2 meses com suspeita de Doença de Hirschsprung que apresenta distensão abdominal crônica e falha de crescimento, qual achado semiológico é classicamente sugestivo de megacólon aganglionar e ajuda a diferenciá-lo da constipação funcional?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ampola retal completamente vazia de fezes associada à saída explosiva de fezes líquidas fétidas e gases sob alta pressão após a retirada do dedo examinador ("blast sign").',
      },
      {
        id: 'B',
        texto:
          'Ampola retal ampla e dilatada preenchida por grande fecaloma endurecido e rochoso.',
      },
      {
        id: 'C',
        texto:
          'Presença de hemorroidas externas trombosadas com prolapso mucoso total de 5 cm.',
      },
      {
        id: 'D',
        texto:
          'Tônus esfincteriano ausente com ânus totalmente entreaberto e perda contínua de urina.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O toque retal é uma manobra semiológica fundamental para o diagnóstico diferencial entre a Constipação Funcional e a Doença de Hirschsprung: 1) Na Constipação Funcional: a ampola retal está AMPLA, DILATADA e OCUPADA por fezes endurecidas ou fecaloma palpável logo acima da margem anal; 2) Na Doença de Hirschsprung: a ampola retal está TENSAMENTE ESPÁSTICA e VAZIA DE FEZES (pois a zona aganglionar contraída impede que o bolo fecal desça até o anoderma). Quando o dedo do examinador penetra o canal e dilata temporariamente o segmento aganglionar espástico até alcançar a zona dilatada a montante, a retirada do dedo é seguida por uma ELIMINAÇÃO EXPLOSIVA de fezes líquidas/fétidas e gases retidos sob grande pressão mecânica (o clássico "Blast sign" ou sinal da descompressão explosiva).',
    comentariosAlternativas: {
      A: 'Correta. Ampola retal vazia e saída explosiva de fezes e gases à retirada do dedo examinador (Blast sign) são típicos de Hirschsprung.',
      B: 'Incorreta. Ampola dilatada e cheia de fezes duras é a marca da constipação funcional crônica retentiva.',
      C: 'Incorreta. Hemorroidas trombosadas são extremamente incomuns em lactentes de 2 meses.',
      D: 'Incorreta. Tônus ausente e ânus entreaberto sugerem lesão medular lumbossacral (bexiga neurogênica e ânus flácido), não Hirschsprung.',
    },
  },
  {
    id: 'ped-gas-084',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença de Hirschsprung',
    isRevisao: false,
    enunciado:
      'Qual é o exame diagnóstico considerado PADRÃO-OURO absoluto e definitivo para confirmar o diagnóstico da Doença de Hirschsprung e determinar a ausência de células ganglionares?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Biópsia retal por sucção (ou a céu aberto) colhida a pelo menos 2 a 3 cm acima da linha pectínea, demonstrando ausência de células ganglionares nos plexos mioentérico/submucoso e hipertrofia de fibras nervosas colinérgicas acetilcolinesterase positivas.',
      },
      {
        id: 'B',
        texto:
          'Enema baritado de duplo contraste demonstrando presença de haustrações normais em todo o cólon.',
      },
      {
        id: 'C',
        texto:
          'Manometria anorretal demonstrando relaxamento transitório normal do esfíncter anal interno durante a insuflação de balão retal.',
      },
      {
        id: 'D',
        texto:
          'Dosagem de anticorpos antigliadina desamidada da classe IgA no soro e nas fezes.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O padrão-ouro definitivo para o diagnóstico de Doença de Hirschsprung é o EXAME HISTOPATOLÓGICO DA BIÓPSIA RETAL (preferencialmente realizada por sucção retal, que não requer anestesia geral e pode ser feita à beira do leito em neonatos e lactentes). A biópsia deve ser colhida rigorosamente a pelo menos 2 a 3 cm acima da linha pectínea (pois o canal anal distal normal possui fisiologicamente uma zona hipoganglionar de 1 a 2 cm). Os critérios histopatológicos confirmatórios incluem: 1) Ausência completa de células ganglionares (aganglionose) nos plexos de Meissner e Auerbach; 2) Presença de troncos nervosos espessados e hipertróficos na lâmina própria e submucosa; 3) Reação histoquímica fortemente positiva para acetilcolinesterase (AChE) e ausência de imunomarcação para calretinina nas fibras nervosas da mucosa.',
    comentariosAlternativas: {
      A: 'Correta. A biópsia retal demonstrando aganglionose e proliferação de fibras acetilcolinesterase positivas é o padrão-ouro confirmatório.',
      B: 'Incorreta. O enema opaco é um método de triagem/mapeamento da zona de transição, mas pode ter falso-negativo no período neonatal em até 20% dos casos.',
      C: 'Incorreta. Na Doença de Hirschsprung o reflexo inibitório retoanal (RIRA) está ausente (o esfíncter interno não relaxa à insuflação do balão).',
      D: 'Incorreta. Anticorpos antigliadina são marcadores de Doença Celíaca, não tendo qualquer papel em aganglionose congênita.',
    },
  },
  {
    id: 'ped-gas-085',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença de Hirschsprung',
    isRevisao: false,
    enunciado:
      'Um lactente de 3 meses com Doença de Hirschsprung ainda não operada dá entrada na UTI pediátrica com quadro agudo de prostração, febre alta (39,2 °C), abdome massivamente distendido e tenso, associado à eliminação frequente de fezes líquidas explosivas, fétidas e com sangue vivo, evoluindo para choque séptico. Qual é a complicação aguda mais temida e com maior potencial de letalidade associada à Doença de Hirschsprung?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Enterocolite associada à Doença de Hirschsprung (HAEC - Hirschsprung-Associated Enterocolitis).',
      },
      {
        id: 'B',
        texto:
          'Invaginação jejunoileal retrógrada com estenose da artéria celíaca.',
      },
      {
        id: 'C',
        texto:
          'Pseudocisto pancreático hemorrágico infectado por Helicobacter pylori.',
      },
      {
        id: 'D',
        texto:
          'Hepatite autoimune fulminante por translocação biliar retrógrada.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A ENTEROCOLITE ASSOCIADA À DOENÇA DE HIRSCHSPRUNG (HAEC) é a complicação mais grave e a principal causa de mortalidade em crianças portadoras de megacólon aganglionar congênito, podendo ocorrer tanto no período pré-operatório quanto no pós-operatório. É desencadeada pela estase fecal crônica, proliferação e disbiose bacteriana intensa no cólon dilatado, isquemia da mucosa por sobredistensão da parede e quebra da barreira imune epitelial. A clínica caracteriza-se pela instalação súbita de febre, distensão abdominal marcante, diarreia aquosa explosiva fétida ("diarreia paradoxal"), hematoquezia e rápida progressão para sepse, translocação bacteriana, megacólon tóxico, perfuração intestinal e choque refratário. O manejo exige ressuscitação volêmica vigorosa, antibioticoterapia venosa de amplo espectro cobrindo anaeróbios e gram-negativos e descompressão colônica mecânica por sonda retal irrigada com solução fisiológica morna.',
    comentariosAlternativas: {
      A: 'Correta. HAEC é a complicação mais grave e letal da Doença de Hirschsprung, exigindo suporte intensivo, antibióticos e descompressão colônica urgente.',
      B: 'Incorreta. A invaginação jejunoileal retrógrada não é a complicação clássica infecciosa e séptica do Hirschsprung.',
      C: 'Incorreta. H. pylori coloniza o estômago e não tem relação com febre, diarreia explosiva e choque em megacólon congênito.',
      D: 'Incorreta. A falência séptica na HAEC é decorrente de colite transmural bacteriana, não hepatite autoimune.',
    },
  },
  {
    id: 'ped-gas-086',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença Celíaca',
    isRevisao: false,
    enunciado:
      'A Doença Celíaca é uma enteropatia imunomediada desencadeada pela ingestão de glúten. Quais são as frações proteicas específicas presentes nos cereais que exercem toxicidade direta sobre a mucosa intestinal de indivíduos geneticamente suscetíveis?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Gliadina (trigo), Secalina (centeio) e Hordeína (cevada).',
      },
      {
        id: 'B',
        texto:
          'Caseína (trigo), Albumina (centeio) e Lactoglobulina (cevada).',
      },
      {
        id: 'C',
        texto:
          'Glutelina (arroz), Zeína (milho) e Linamarina (mandioca).',
      },
      {
        id: 'D',
        texto:
          'Betacaroteno (soja), Fasolina (feijão) e Queratina (aveia).',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O "glúten" é um complexo proteico insolúvel em água composto por prolaminas e gluteninas. As prolaminas são frações ricas em resíduos de prolina e glutamina que resistem à degradação pelas proteases gástricas e pancreáticas humanas. As frações tóxicas indutoras da resposta imune celular e humoral na Doença Celíaca são especificamente: 1) Gliadina (presente no TRIGO); 2) Secalina (presente no CENTEIO); e 3) Hordeína (presente na CEVADA). A aveia contém avenina, que em sua forma pura não é imunogênica para a esmagadora maioria dos celíacos, mas é frequentemente excluída por sofrer contaminação cruzada durante o cultivo, colheita e processamento industrial compartilhado com o trigo. Arroz, milho, batata e mandioca não contêm prolaminas tóxicas e são fontes de carboidratos seguras.',
    comentariosAlternativas: {
      A: 'Correta. Gliadina do trigo, secalina do centeio e hordeína da cevada são as três frações prolaminas indutoras clássicas da Doença Celíaca.',
      B: 'Incorreta. Caseína e lactoglobulina são proteínas do leite de vaca (relacionadas à APLV), não do glúten.',
      C: 'Incorreta. Arroz, milho e mandioca são alimentos seguros e isentos das frações prolaminas que ativam a doença celíaca.',
      D: 'Incorreta. Queratina é uma proteína animal estrutural de pele/cabelo e betacaroteno é um pigmento precursor de vitamina A.',
    },
  },
  {
    id: 'ped-gas-087',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença Celíaca',
    isRevisao: false,
    enunciado:
      'Quais são os alelos do Complexo Principal de Histocompatibilidade de classe II (HLA) cuja presença é indispensável para que ocorra a apresentação dos peptídeos do glúten deamidados aos linfócitos T CD4+ e o desencadeamento da Doença Celíaca?',
    alternativas: [
      {
        id: 'A',
        texto:
          'HLA-DQ2 e HLA-DQ8.',
      },
      {
        id: 'B',
        texto:
          'HLA-B27 e HLA-DR4.',
      },
      {
        id: 'C',
        texto:
          'HLA-A29 e HLA-B51.',
      },
      {
        id: 'D',
        texto:
          'HLA-B5701 e HLA-DR2.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A suscetibilidade genética à Doença Celíaca está intimamente associada aos heterodímeros HLA de classe II HLA-DQ2 (especificamente DQ2.5 codificado por DQA1*05:01 e DQB1*02:01, presente em cerca de 90% a 95% dos pacientes) e HLA-DQ8 (codificado por DQA1*03:01 e DQB1*03:02, presente nos demais 5% a 10%). A enzima tecidual transglutaminase 2 (tTG) deamida os resíduos de glutamina da gliadina em ácido glutâmico com carga negativa, o que aumenta dramaticamente a sua afinidade de ligação com as fendas das moléculas HLA-DQ2 e HLA-DQ8 nas células apresentadoras de antígenos. Essa ligação potente ativa linfócitos T auxiliares CD4+, desencadeando a liberação de citocinas inflamatórias (INF-gama, TNF-alfa, IL-15) que culminam na destruição dos enterócitos e atrofia vilositária. A ausência de HLA-DQ2 e DQ8 possui alto valor preditivo negativo (próximo a 100%), praticamente excluindo o diagnóstico de Doença Celíaca.',
    comentariosAlternativas: {
      A: 'Correta. HLA-DQ2 e HLA-DQ8 são os marcadores genéticos determinantes da suscetibilidade à Doença Celíaca.',
      B: 'Incorreta. HLA-B27 está ligado a espondiloartropatias soronegativas (espondilite anquilosante) e HLA-DR4 à artrite reumatoide.',
      C: 'Incorreta. HLA-B51 relaciona-se à Doença de Behçet e HLA-A29 à retinopatia de Birdshot.',
      D: 'Incorreta. HLA-B5701 está associado à hipersensibilidade ao abacavir no tratamento do HIV.',
    },
  },
  {
    id: 'ped-gas-088',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença Celíaca',
    isRevisao: false,
    enunciado:
      'Menina de 18 meses é levada ao pediatra pela mãe com queixa de mudança de comportamento e emagrecimento nos últimos 5 meses. A mãe relata que a criança mamou no peito até os 6 meses, momento em que foram introduzidas sopas com legumes, carnes e papas com farinha de trigo e biscoitos. Desde os 11 meses de vida, passou a apresentar fezes amolecidas, volumosas, brilhantes, fétidas e de coloração acinzentada (esteatorreia), com cerca de 3 a 5 evacuações diárias. A criança tornou-se irritadiça, com choro frequente, anorexia progressiva e perda de peso. Ao exame físico: descorada ++/4+, emagrecida com atrofia acentuada da musculatura glútea ("nádegas em bolsa vazia") e membros inferiores delgados, contrastando com abdome proeminente e distendido ("abdome em batráquio"). O peso caiu do percentil 50 para abaixo do percentil 3 nas curvas da OMS. Qual é a principal hipótese diagnóstica para este quadro clássico?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Doença Celíaca na forma clássica (gastrointestinal com síndrome de má absorção).',
      },
      {
        id: 'B',
        texto:
          'Fibrose Cística com acometimento cutâneo exclusivo sem insuficiência pancreática.',
      },
      {
        id: 'C',
        texto:
          'Intolerância secundária passageira à sacarose por deficiência congênita de lactase.',
      },
      {
        id: 'D',
        texto:
          'Estenose hipertrófica do piloro em apresentação tardia do segundo ano de vida.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O caso clínico apresenta a descrição seminal da FORMA CLÁSSICA da Doença Celíaca em lactentes e pré-escolares. Manifesta-se insidiosamente nos primeiros meses ou anos após a introdução de cereais contendo glúten na dieta (geralmente entre 9 e 24 meses de vida). Os sinais cardinais decorrem da síndrome de má absorção generalizada por atrofia do epitélio absortivo do intestino delgado proximal: diarreia crônica com fezes esteatorreicas (volumosas, pálidas, gordurosas e de odor fétido), distensão abdominal volumosa, hipotrofia e atrofia muscular acentuada (visível primariamente nos glúteos e raiz dos membros), emagrecimento com quebra da curva pôndero-estatural, palidez cutaneomucosa por anemia ferropriva carencial e alterações comportamentais marcantes (irritabilidade e apatia extrema).',
    comentariosAlternativas: {
      A: 'Correta. Esteatorreia crônica, atrofia glútea, abdome proeminente e quebra ponderal após introdução de trigo definem a forma clássica da Doença Celíaca.',
      B: 'Incorreta. A forma clássica com esteatorreia na fibrose cística cursa com insuficiência pancreática exócrina e sintomas respiratórios de repetição associados.',
      C: 'Incorreta. A intolerância à sacarose não causa atrofia muscular glútea grave nem quadro esteatorreico com síndrome de má absorção crônica dessa magnitude.',
      D: 'Incorreta. A estenose pilórica manifesta-se entre 2 e 8 semanas de vida com vômitos em jato não biliosos, não com diarreia crônica e atrofia glútea aos 18 meses.',
    },
  },
  {
    id: 'ped-gas-089',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença Celíaca',
    isRevisao: false,
    enunciado:
      'Uma criança de 4 anos é avaliada por baixa estatura de etiologia a esclarecer (estatura abaixo do percentil 1 na curva da OMS) e anemia microcítica e hipocrômica (Hb 8,5 g/dL; ferritina 6 ng/mL) refratária ao uso de sulfato ferroso oral em doses plenas há 4 meses. A mãe relata que a menina não apresenta diarreia, dor abdominal ou vômitos e evacua fezes formadas diariamente. O pediatra suspeita de Doença Celíaca na sua forma atípica (não clássica). Qual é o teste sorológico de triagem inicial recomendado pelas sociedades internacionais de gastroenterologia pediátrica (ESPGHAN/NASPGHAN) devido à sua altíssima sensibilidade e especificidade?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Dosagem do Anticorpo Antitransglutaminase Tecidual da classe IgA (anti-tTG IgA) associada à quantificação obrigatória da IgA Total sérica.',
      },
      {
        id: 'B',
        texto:
          'Dosagem isolada do Anticorpo Antigliadina nativa da classe IgM.',
      },
      {
        id: 'C',
        texto:
          'Pesquisa de sangue oculto nas fezes por método imunoquímico seriado por 7 dias.',
      },
      {
        id: 'D',
        texto:
          'Cultura quantitativa de aspirado jejunal para contagem de coliformes fecais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Doença Celíaca pode se manifestar sem qualquer sintoma gastrointestinal clássico (forma não clássica ou atípica), apresentando-se apenas com manifestações extraintestinais como baixa estatura isolada, puberdade atrasada, osteopenia precoce, aftas orais recorrentes, elevação inexplicada de transaminases e anemia ferropriva refratária ao ferro oral (uma vez que o ferro é absorvido predominantemente no duodeno, local de maior intensidade inflamatória e atrofia vilositária na DC). O teste de triagem laboratorial de escolha padrão-ouro para triagem diagnóstica inicial em qualquer idade é o ANTICORPO ANTITRANSGLUTAMINASE TECIDUAL RECOMBINANTE DA CLASSE IgA (anti-tTG IgA), cuja sensibilidade e especificidade ultrapassam 95% a 98%. É MANDATÓRIO dosar simultaneamente a IgA TOTAL sérica, pois os pacientes celíacos apresentam prevalência de Deficiência Seletiva de IgA de 10 a 15 vezes maior do que a população geral (cerca de 2% a 3% dos celíacos têm deficiência de IgA, o que geraria um resultado falso-negativo se apenas a classe IgA fosse mensurada).',
    comentariosAlternativas: {
      A: 'Correta. Anti-tTG IgA associado à IgA total sérica é a propedêutica sorológica inicial de primeira linha padrão no mundo inteiro.',
      B: 'Incorreta. Os testes de antigliadina nativa antiga caíram em desuso pela baixíssima especificidade e não se utiliza IgM.',
      C: 'Incorreta. Pesquisa de sangue oculto não faz diagnóstico etiológico de enteropatia autoimune mediada por glúten.',
      D: 'Incorreta. Aspirado jejunal é utilizado para investigar supercrescimento bacteriano do intestino delgado (SIBO), não doença celíaca.',
    },
  },
  {
    id: 'ped-gas-090',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença Celíaca',
    isRevisao: false,
    enunciado:
      'Um menino de 3 anos com suspeita de Doença Celíaca tem sua sorologia colhida. Os resultados revelam: IgA Total sérica de 2 mg/dL (valor de referência para a idade: 25 a 150 mg/dL - compatível com Deficiência Seletiva de IgA) e anti-tTG IgA não reagente (< 1 U/mL). Diante da constatação da deficiência congênita de IgA, qual exame sorológico alternativo deve ser solicitado para investigar corretamente a Doença Celíaca?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Anticorpos contra peptídeos de gliadina deamidada da classe IgG (anti-DGP IgG) ou Antitransglutaminase tecidual da classe IgG (anti-tTG IgG).',
      },
      {
        id: 'B',
        texto:
          'Anticorpos antimicrossomais da classe IgE associados a teste cutâneo de punctura imediato.',
      },
      {
        id: 'C',
        texto:
          'Anticorpos anticitoplasma de neutrófilos (p-ANCA) associados ao anti-Saccharomyces cerevisiae (ASCA).',
      },
      {
        id: 'D',
        texto:
          'Excluir imediatamente o diagnóstico de Doença Celíaca, visto que pacientes com deficiência de IgA são imunes à enteropatia por glúten.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Esta questão aborda um dos tópicos mais frequentes e refinados sobre Doença Celíaca em concursos médicos: o manejo diante da DEFICIÊNCIA SELETIVA DE IgA. Pacientes com deficiência de IgA não conseguem produzir anticorpos da classe IgA em títulos detectáveis; portanto, testes baseados em IgA (como anti-tTG IgA e anti-EMA IgA) apresentarão resultados falsamente negativos mesmo que o paciente tenha atrofia vilositária intestinal severa. Sempre que a IgA total for inferior ao limite inferior para a idade (ou < 20 mg/dL), as diretrizes da ESPGHAN e NASPGHAN determinam que o rastreamento DEVE ser realizado obrigatoriamente por meio de testes baseados na classe IgG: ANTICORPO ANTITRANSGLUTAMINASE TECIDUAL IgG (anti-tTG IgG) ou ANTICORPOS CONTRA PEPTÍDEOS DE GLIADINA DEAMIDADA IgG (anti-DGP IgG), os quais mantêm sensibilidade e especificidade altíssimas nessa subpopulação.',
    comentariosAlternativas: {
      A: 'Correta. Na deficiência de IgA, a triagem sorológica mandatória deve ser feita com anticorpos da classe IgG (anti-tTG IgG ou anti-DGP IgG).',
      B: 'Incorreta. IgE e testes cutâneos (prick test) avaliam alergia imediata ao trigo mediada por IgE, patologia distinta da enteropatia autoimune celíaca.',
      C: 'Incorreta. p-ANCA e ASCA são marcadores sorológicos auxiliares para retocolite ulcerativa e Doença de Crohn, não para Doença Celíaca.',
      D: 'Incorreta. Pacientes com deficiência de IgA têm risco cerca de 10 a 15 vezes MAIOR de desenvolver Doença Celíaca do que indivíduos normais.',
    },
  },
  {
    id: 'ped-gas-091',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença Celíaca',
    isRevisao: false,
    enunciado:
      'Escolar de 7 anos apresenta lesões cutâneas polimórficas, papulovesiculares e intensamente pruriginosas, com distribuição simétrica sobre os cotovelos, joelhos, nádegas e couro cabeludo. As escoriações por coçadura são frequentes, evoluindo com crostas. O dermatologista realiza biópsia de pele perilesional por imunofluorescência direta, que evidencia depósitos granulares patognomônicos de IgA nas papilas dérmicas, confirmando o diagnóstico de Dermatite Herpetiforme (Doença de Duhring-Brocq). Qual é a relação dessa patologia com o trato gastrointestinal e qual deve ser o manejo dietético obrigatório?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A Dermatite Herpetiforme é considerada a manifestação cutânea patognomônica da Doença Celíaca, estando associada à enteropatia por glúten no intestino delgado em quase 100% dos casos; o tratamento requer dieta estrita isenta de glúten por toda a vida.',
      },
      {
        id: 'B',
        texto:
          'É causada por reativação do Herpesvírus humano tipo 8 na derme, não tendo qualquer conexão imunológica ou dietética com glúten.',
      },
      {
        id: 'C',
        texto:
          'Trata-se de uma toxicodermia medicamentosa transitória induzida pelo uso de dipirona sódica, tratada com corticoides orais isolados.',
      },
      {
        id: 'D',
        texto:
          'Condição puramente cutânea decorrente de escabiose nodular crônica refratária à permetrina.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A DERMATITE HERPETIFORME (ou Doença de Duhring-Brocq) é a manifestação cutânea patognomônica e específica da Doença Celíaca. É caracterizada por vesículas extremamente pruriginosas agrupadas (daí a denominação "herpetiforme", embora não tenha qualquer relação com vírus herpes) que acometem simetricamente as superfícies extensoras (cotovelos, joelhos, nádegas e dorso). A imunofluorescência direta de pele normal adjacente à lesão demonstra depósitos granulares de IgA nas papilas dérmicas ligadas à transglutaminase epidérmica (eTG / transglutaminase 3). Virtualmente TODOS os pacientes com dermatite herpetiforme possuem enteropatia celíaca no intestino delgado (mesmo que assintomáticos do ponto de vista gastrointestinal). Portanto, o diagnóstico de dermatite herpetiforme confirma per se a Doença Celíaca, dispensando biópsia duodenal adicional. O pilar terapêutico definitivo e obrigatório é a DIETA ESTRITA E VITALÍCIA ISENTA DE GLÚTEN (a dapsona oral pode ser usada apenas no início para alívio rápido do prurido incapacitante).',
    comentariosAlternativas: {
      A: 'Correta. A dermatite herpetiforme é a manifestação cutânea da doença celíaca e exige dieta isenta de glúten por toda a vida.',
      B: 'Incorreta. Apesar do nome "herpetiforme", não há envolvimento de vírus herpes na etiopatogenia da afecção.',
      C: 'Incorreta. Não se trata de farmacodermia por dipirona e os corticoides tópicos ou sistêmicos não resolvem o defeito imunológico de base.',
      D: 'Incorreta. A escabiose decorre de infestação pelo Sarcoptes scabiei e apresenta túneis acarianos em áreas flexoras, sem depósitos de IgA.',
    },
  },
  {
    id: 'ped-gas-092',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença Celíaca',
    isRevisao: false,
    enunciado:
      'Segundo as diretrizes atualizadas da Sociedade Europeia de Gastroenterologia, Hepatologia e Nutrição Pediátrica (ESPGHAN), em quais condições clínicas e laboratoriais específicas é atualmente permitido firmar o diagnóstico definitivo de Doença Celíaca em crianças sem a necessidade de realizar biópsia duodenal (estratégia "no-biopsy approach")?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Níveis séricos de anticorpo anti-transglutaminase tecidual IgA (anti-tTG IgA) >= 10 vezes o limite superior da normalidade (>= 10x LSN), associados à confirmação da positividade do anticorpo anti-endomísio da classe IgA (EMA-IgA) em uma SEGUNDA amostra de sangue separada.',
      },
      {
        id: 'B',
        texto:
          'Qualquer título de anti-tTG IgA ligeiramente acima da referência, desde que o paciente apresente HLA-DQ2 positivo e diarreia autolimitada.',
      },
      {
        id: 'C',
        texto:
          'Presença exclusiva de teste rápido de fezes positivo para sangue oculto em paciente com familiares de segundo grau celíacos.',
      },
      {
        id: 'D',
        texto:
          'A biópsia duodenal é formalmente obrigatória em 100% dos casos pediátricos no mundo, sendo expressamente proibido o diagnóstico sem histopatologia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As diretrizes da ESPGHAN para o diagnóstico da Doença Celíaca em crianças e adolescentes consolidaram a abordagem diagnóstica "SEM BIÓPSIA" (no-biopsy approach), que é amplamente cobrada em concursos de ponta. Pelos critérios atualizados: 1) O paciente (com ou sem sintomas) deve apresentar níveis séricos de anti-tTG IgA iguais ou superiores a 10 VEZES o limite superior da normalidade do ensaio do laboratório (anti-tTG IgA >= 10x LSN); 2) Se esse critério for atingido, colhe-se uma SEGUNDA amostra de sangue separada e independente para testar o ANTICORPO ANTI-ENDOMÍSIO DA CLASSE IgA (EMA-IgA); 3) Se o EMA-IgA na segunda amostra for POSITIVO, o valor preditivo positivo para enteropatia celíaca Marsh 3 atinge praticamente 100%, permitindo firmar o diagnóstico definitivo de Doença Celíaca e iniciar a dieta isenta de glúten sem necessidade de endoscopia e biópsia duodenal. (Nas versões mais recentes da diretriz, a obrigatoriedade da presença de sintomas clínicos e o teste de HLA foram retirados desse algoritmo).',
    comentariosAlternativas: {
      A: 'Correta. Critérios no-biopsy da ESPGHAN: anti-tTG IgA >= 10x LSN + EMA-IgA positivo em segunda amostra independente de sangue.',
      B: 'Incorreta. Níveis baixos (< 10x LSN) exigem obrigatoriamente endoscopia com biópsias duodenais múltiplas para confirmação.',
      C: 'Incorreta. Sangue oculto fecal não tem especificidade diagnóstica e não substitui a avaliação sorológica ou histopatológica.',
      D: 'Incorreta. A abordagem sem biópsia é internacionalmente validada e aprovada para títulos muito elevados (>= 10x LSN).',
    },
  },
  {
    id: 'ped-gas-093',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença Celíaca',
    isRevisao: false,
    enunciado:
      'Uma criança com suspeita de Doença Celíaca é submetida à endoscopia digestiva alta com múltiplas biópsias da segunda e terceira porções duodenais e do bulbo duodenal. O laudo histopatológico emitido pelo patologista baseia-se na consagrada Classificação de Marsh-Oberhuber. Quais são as alterações histológicas elementares características da enteropatia celíaca que definem o estágio de Marsh tipo 3 (lesão destrutiva clássica)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Linfocitose intraepitelial aumentada (> 25 linfócitos intraepiteliais por 100 enterócitos), hiperplasia das criptas e atrofia das vilosidades intestinais (parcial, subtotal ou total).',
      },
      {
        id: 'B',
        texto:
          'Infiltração submucosa exclusiva por macrófagos espumosos PAS-positivos com bacilos álcool-ácido resistentes intactos.',
      },
      {
        id: 'C',
        texto:
          'Granulomas caseosos transmurais com necrose central confluente e invasão vascular por amebas.',
      },
      {
        id: 'D',
        texto:
          'Arquitetura vilositária intacta sem linfócitos associada à metaplasia gástrica pura do cólon transverso.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O padrão histopatológico de lesão duodenal na Doença Celíaca é categorizado internacionalmente pela Classificação de Marsh modificada por Oberhuber: 1) Marsh 0: Mucosa normal (pré-infiltrativa); 2) Marsh 1: Lesão Infiltrativa (arquitetura vilositária e críptica normais, mas com LINFOCITOSE INTRAEPITELIAL aumentada, definida por > 25 linfócitos T intraepiteliais para cada 100 enterócitos); 3) Marsh 2: Lesão Hiperplásica (linfocitose intraepitelial associada à HIPERPLASIA DE CRIPTAS com aumento do índice mitótico, sem atrofia de vilosidades); 4) Marsh 3: Lesão Destrutiva clássica (tríade: LINFOCITOSE INTRAEPITELIAL + HIPERPLASIA DE CRIPTAS + ATROFIA VILOSITÁRIA, subdividida em 3a para atrofia parcial, 3b para atrofia subtotal e 3c para atrofia total/plana). O achado de Marsh 3 sob consumo de dieta contendo glúten confirma o diagnóstico histológico de Doença Celíaca.',
    comentariosAlternativas: {
      A: 'Correta. Marsh 3 reúne linfocitose intraepitelial (> 25/100 enterócitos), hiperplasia de criptas e atrofia vilositária (parcial, subtotal ou total).',
      B: 'Incorreta. Macrófagos espumosos PAS-positivos são patognomônicos da Doença de Whipple (Tropheryma whipplei).',
      C: 'Incorreta. Granulomas caseosos caracterizam tuberculose intestinal e lesões amebianas, não Doença Celíaca.',
      D: 'Incorreta. A mucosa plana celíaca apresenta destruição vilositária acentuada com intensa infiltração inflamatória linfoide.',
    },
  },
  {
    id: 'ped-gas-094',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença Celíaca',
    isRevisao: false,
    enunciado:
      'Um adolescente de 13 anos com diagnóstico de Diabetes Mellitus Tipo 1 há 4 anos é submetido ao rastreamento sorológico anual recomendado pelas diretrizes da Sociedade Brasileira de Diabetes e da SBP. Encontra-se assintomático do ponto de vista digestivo, mas o anti-tTG IgA retorna fortemente positivo (85 U/mL; valor de referência < 10 U/mL) com IgA total normal. Quais outras condições clínicas, genéticas ou autoimunes representam grupos de alto risco para o desenvolvimento de Doença Celíaca e exigem rastreamento sorológico periódico, mesmo na ausência de sintomas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome de Down (Trissomia 21), Síndrome de Turner, Síndrome de Williams, Tireoidite Autoimune de Hashimoto e parentes de primeiro grau de indivíduos celíacos.',
      },
      {
        id: 'B',
        texto:
          'Neurofibromatose tipo 1, acondroplasia e osteogênese imperfeita exclusivamente.',
      },
      {
        id: 'C',
        texto:
          'Hipertensão arterial primária, dislipidemia familiar tipo IIa e asma induzida por exercício.',
      },
      {
        id: 'D',
        texto:
          'Hemofilia A congênita, fenilcetonúria tratada e estenose pulmonar congênita isolada.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Doença Celíaca apresenta forte associação imunogenética com determinadas síndromes cromossômicas e afecções autoimunes. As diretrizes internacionais estabelecem que o rastreio sorológico com anti-tTG IgA está formalmente indicado em grupos de alto risco, mesmo quando completamente assintomáticos. Esses grupos incluem: 1) Parentes de primeiro grau de pacientes celíacos (risco de 10% a 15%); 2) Diabetes Mellitus Tipo 1 (prevalência de 5% a 10%); 3) Doenças autoimunes da tireoide (Tireoidite de Hashimoto e Doença de Graves); 4) Hepatite autoimune; 5) Síndrome de Down (prevalência de 5% a 12%); 6) Síndrome de Turner; 7) Síndrome de Williams; e 8) Deficiência seletiva de IgA.',
    comentariosAlternativas: {
      A: 'Correta. Síndromes de Down, Turner, Williams, tireoidite autoimune, DM1 e parentes de 1º grau compõem o grupo de alto risco para DC.',
      B: 'Incorreta. Neurofibromatose e acondroplasia são desordens genéticas ósseas/neurológicas sem base autoimune ligada aos alelos HLA-DQ2/DQ8.',
      C: 'Incorreta. Hipertensão e asma de esforço não são doenças autoimunes associadas à enteropatia celíaca.',
      D: 'Incorreta. Hemofilia e fenilcetonúria não aumentam o risco de desenvolvimento de autoimunidade contra o glúten.',
    },
  },
  {
    id: 'ped-gas-095',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença Celíaca',
    isRevisao: false,
    enunciado:
      'Qual é o único tratamento comprovadamente eficaz, seguro e definitivo para os pacientes diagnosticados com Doença Celíaca?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Dieta estrita e vitalícia isenta de glúten, excluindo permanentemente da alimentação todos os alimentos que contenham trigo, centeio, cevada e seus derivados.',
      },
      {
        id: 'B',
        texto:
          'Imunossupressão oral contínua com azatioprina e pulsos mensais de metilprednisolona por 2 anos com dieta livre.',
      },
      {
        id: 'C',
        texto:
          'Ingestão diária de suplementos orais de enzima lactase associada à exclusão de carne vermelha e laticínios.',
      },
      {
        id: 'D',
        texto:
          'Dieta sem glúten apenas até a puberdade, momento em que o sistema imune amadurece e a dieta com farinha de trigo pode ser plenamente reintroduzida.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O único tratamento curativo e eficaz para a Doença Celíaca é a DIETA ISENTA DE GLÚTEN (DIG / Gluten-Free Diet) ESTRITA E POR TODA A VIDA. O glúten deve ser completamente eliminado da alimentação, o que significa banir qualquer consumo de TRIGO, CENTEIO, CEVADA e seus derivados (pães, massas, bolos, biscoitos, cerveja, etc.). Com a adesão estrita à dieta sem glúten, observa-se melhora dos sintomas clínicos (apetite, humor, cessação da diarreia) em poucos dias ou semanas, recuperação do crescimento estatural e da densidade óssea, normalização das deficiências nutricionais e ferro e, em meses a anos, regeneração completa da arquitetura da mucosa duodenal e negativação dos títulos de anticorpos séricos. A não adesão à dieta eleva consideravelmente o risco a longo prazo de desnutrição crônica, osteoporose grave, infertilidade, abortamento recorrente e neoplasias do trato gastrointestinal (com destaque para o Linfoma de Células T associado à enteropatia - EATL - e adenocarcinoma de intestino delgado). A doença é crônica e a tolerância ao glúten NUNCA é adquirida na puberdade.',
    comentariosAlternativas: {
      A: 'Correta. Dieta sem glúten estrita e por toda a vida é a pedra angular e única conduta terapêutica definitiva comprovada.',
      B: 'Incorreta. Imunossupressores só têm indicação em complicações raras de adultos como o Sprue Refratário tipo 2, jamais como conduta padrão na infância.',
      C: 'Incorreta. A lactase digere o açúcar lactose, não tendo qualquer efeito sobre as prolaminas proteicas do glúten.',
      D: 'Incorreta. A Doença Celíaca não tem "cura por amadurecimento puberal"; a reintrodução do glúten reativa imediatamente a resposta autoimune inflamatória e a atrofia vilositária.',
    },
  },
  {
    id: 'ped-gas-096',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença de Hirschsprung',
    isRevisao: false,
    enunciado:
      'Em relação à extensão anatômica do segmento aganglionar na Doença de Hirschsprung, qual é a forma de apresentação anatômica mais frequente na prática clínica pediátrica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Forma de segmento curto clássica, na qual a aganglionose se restringe ao reto distal e ao cólon sigmoide (cerca de 75% a 80% dos casos).',
      },
      {
        id: 'B',
        texto:
          'Aganglionose colônica total com extensão proximal até o ângulo esplênico.',
      },
      {
        id: 'C',
        texto:
          'Aganglionose intestinal total envolvendo esôfago, estômago e todo o intestino.',
      },
      {
        id: 'D',
        texto:
          'Aganglionose salteada ("skip lesions") com áreas normais intercaladas por pequenos focos doentes no ceco.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A classificação anatômica da Doença de Hirschsprung baseia-se na extensão proximal do segmento desprovido de células ganglionares: 1) FORMA CLÁSSICA / SEGMENTO CURTO (Short-segment): a aganglionose estende-se do ânus até o reto e cólon sigmoide distal, correspondendo a aproximadamente 75% a 80% de todos os casos (com forte predomínio masculino, cerca de 4:1); 2) FORMA DE SEGMENTO LONGO (Long-segment): a aganglionose ultrapassa o cólon sigmoide em direção proximal, podendo atingir o cólon descendente ou transverso (15% a 20% dos casos); 3) AGANGLIONOSE COLÔNICA TOTAL (Total Colonic Aganglionosis - Síndrome de Zuelzer-Wilson): ausência completa de gânglios em todo o cólon e até os últimos centímetros do íleo terminal (~5% dos casos); 4) Não existem "lesões salteadas" (skip lesions) na grande maioria dos pacientes, pois a migração embrionária das células da crista neural é estritamente contínua e craniocaudal.',
    comentariosAlternativas: {
      A: 'Correta. A forma clássica ou de segmento curto (restrita a reto e sigmoide) é a mais prevalente (75-80% dos pacientes).',
      B: 'Incorreta. Aganglionose total corresponde a apenas 5% a 8% de todos os pacientes.',
      C: 'Incorreta. Aganglionose intestinal total que acomete o trato digestivo superior é excepcionalíssima (< 1%).',
      D: 'Incorreta. A aganglionose é craniocaudal contínua e não cursa com lesões salteadas.',
    },
  },
  {
    id: 'ped-gas-097',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Constipação Intestinal Funcional',
    isRevisao: false,
    enunciado:
      'Qual dos seguintes achados na anamnese ou no exame físico de uma criança constipada é considerado um SINAL DE ALERTA ("red flag") que aponta fortemente para causa ORGÂNICA de constipação e OBRIGA a investigação especializada imediata?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Eliminação de mecônio com 60 horas de vida em recém-nascido a termo associada à falha de ganho de peso, vômitos biliosos e fosseta sacral com tufo piloso.',
      },
      {
        id: 'B',
        texto:
          'Evacuação dolorosa que iniciou imediatamente após o treinamento de toalete coercitivo em pré-escolar eutrófico.',
      },
      {
        id: 'C',
        texto:
          'Fezes em formato de pequenas bolinhas ressecadas que melhoram temporariamente com o aumento da ingesta de água.',
      },
      {
        id: 'D',
        texto:
          'Comportamento de retenção em que a criança se esconde atrás do móvel e cruza as pernas quando sente vontade de evacuar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A diferenciação entre Constipação Funcional e Constipação Orgânica é um tema clássico em pediatria. A grande maioria (> 95%) é funcional, mas o pediatra deve estar sempre atento aos SINAIS DE ALERTA ("Red Flags") que denunciam causas orgânicas graves (como Doença de Hirschsprung, fibrose cística, hipotireoidismo congênito, disrafismo espinhal / bexiga neurogênica ou anomalias anorretais). Os principais sinais de alerta são: 1) Atraso na eliminação de mecônio (> 48h de vida); 2) Início muito precoce da constipação (no primeiro mês de vida); 3) Déficit pondero-estatural associado (falha de crescimento / emagrecimento); 4) Vômitos biliosos recorrentes; 5) Febre e enterocolite com diarreia fétida e sangue; 6) Estigmas de disrafismo espinhal na região lumbossacral (tufo de pelos, fosseta sacral profunda, desvio da fenda glútea, hemangioma sacral); 7) Anormalidades neurológicas (hipotonia, reflexos tendíneos ausentes nos membros inferiores); 8) Posição anormal do orifício anal ou ânus imperfurado; 9) Ampola retal vazia ao toque com blast sign.',
    comentariosAlternativas: {
      A: 'Correta. Atraso meconial > 48h, baixo ganho ponderal, vômitos biliosos e tufo piloso sacral são bandeiras vermelhas absolutas de etiologia orgânica.',
      B: 'Incorreta. Início após treinamento de desfralde em criança eutrófica é a história clássica da constipação funcional.',
      C: 'Incorreta. Fezes em bolinhas ressecadas (Bristol 1) são típicas de constipação funcional.',
      D: 'Incorreta. A postura retentiva com cruzamento de pernas é o marcador comportamental definidor da constipação funcional.',
    },
  },
  {
    id: 'ped-gas-098',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença Celíaca',
    isRevisao: false,
    enunciado:
      'Um lactente de 14 meses que vinha recebendo alimentação livre com farinhas de trigo e apresentava queixa de diarreia crônica tem o diagnóstico de Doença Celíaca suspeitado. Antes de realizar a coleta de sangue para a dosagem de anticorpos e a realização da biópsia endoscópica, a mãe, por orientação de vizinhos, suspendeu completamente todos os alimentos com glúten da dieta do filho há 3 meses. A criança melhorou expressivamente dos sintomas digestivos. Diante dessa situação, qual é a orientação médica correta em relação à propedêutica diagnóstica da Doença Celíaca?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Os testes sorológicos e a biópsia duodenal podem apresentar resultados falso-negativos caso sejam realizados na vigência de dieta isenta de glúten prolongada; para confirmar o diagnóstico fidedigno, é mandatório reintroduzir o glúten na alimentação (teste de provocação com glúten) sob supervisão médica antes da investigação.',
      },
      {
        id: 'B',
        texto:
          'A melhora clínica após a suspensão do glúten é considerada o único teste diagnóstico necessário, dispensando qualquer exame laboratorial ou endoscópico para o resto da vida.',
      },
      {
        id: 'C',
        texto:
          'A biópsia duodenal permanece alterada com atrofia vilositária total por mais de 25 anos mesmo sem qualquer ingestão de glúten.',
      },
      {
        id: 'D',
        texto:
          'A dosagem de anti-tTG IgA eleva-se paradoxalmente após a exclusão do glúten, tornando o exame ainda mais sensível.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Um dos erros diagnósticos mais graves em gastroenterologia pediátrica é retirar o glúten da dieta ANTES da comprovação diagnóstica (sorológica ou histopatológica). Tanto a produção de anticorpos específicos (anti-tTG, anti-EMA, anti-DGP) quanto a lesão tecidual duodenal (atrofia vilositária e linfocitose) DEPENDEM DIRETAMENTE DA EXPOSIÇÃO ATIVA E CONTÍNUA AO GLÚTEN. Quando o glúten é retirado da alimentação por algumas semanas ou meses, os títulos de anticorpos caem rapidamente e a mucosa duodenal regenera-se, resultando em testes sorológicos e biópsias FALSO-NEGATIVOS. Se o paciente já estiver em dieta isenta de glúten e sem diagnóstico firmado, é OBRIGATÓRIO realizar a REINTRODUÇÃO DO GLÚTEN (Desafio / Provocação Oral com Glúten), ofertando alimentos contendo trigo diariamente (ao menos 2 a 10 g de glúten por dia) por um período de semanas a meses (geralmente no mínimo 6 a 12 semanas) antes de coletar a sorologia e realizar a endoscopia.',
    comentariosAlternativas: {
      A: 'Correta. Os anticorpos negativam e a mucosa cicatriza sem glúten; para diagnosticar fidedignamente, o glúten precisa ser reintroduzido antes dos testes.',
      B: 'Incorreta. O teste terapêutico empírico isolado não estabelece diagnóstico definitivo e rotula a criança indevidamente para uma dieta restritiva e cara para o resto da vida.',
      C: 'Incorreta. A mucosa duodenal regenera-se e recupera a arquitetura normal após a retirada do glúten na infância.',
      D: 'Incorreta. A concentração dos anticorpos cai exponencialmente e se normaliza quando o antígeno desencadeante é removido da dieta.',
    },
  },
  {
    id: 'ped-gas-099',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Doença de Hirschsprung',
    isRevisao: false,
    enunciado:
      'Qual exame complementar funcional, realizado por meio da inserção de um cateter com balão na ampola retal, pode auxiliar na triagem diagnóstica da Doença de Hirschsprung ao demonstrar a ausência do Relaxamento Inibitório Retoanal (RIRA)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Manometria anorretal.',
      },
      {
        id: 'B',
        texto:
          'Cintilografia de esvaziamento esofágico.',
      },
      {
        id: 'C',
        texto:
          'Eletromiografia facial periorbital.',
      },
      {
        id: 'D',
        texto:
          'pH-metria esofágica de duplo canal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A MANOMETRIA ANORRETAL é um exame funcional valioso no diagnóstico da Doença de Hirschsprung, particularmente em lactentes maiores e crianças com constipação crônica grave de difícil manejo. Em indivíduos normais, a distensão da ampola retal pela insuflação de um balão desencadeia o RELAXAMENTO REFLEXO DO ESFÍNCTER ANAL INTERNO (conhecido como Reflexo Inibitório Retoanal - RIRA). Esse relaxamento permite que o conteúdo retal entre em contato com os receptores sensoriais do canal anal para discriminar gás de fezes sólidas ou líquidas. Na Doença de Hirschsprung, devido à ausência das células ganglionares mioentéricas produtoras de óxido nítrico no plexo de Auerbach, o reflexo inibitório está AUSENTE (ou seja, a insuflação do balão não provoca relaxamento do esfíncter anal interno, mantendo a contração sustentada). A presença de um RIRA normal descarta de forma categórica a Doença de Hirschsprung.',
    comentariosAlternativas: {
      A: 'Correta. A manometria anorretal avalia a dinâmica esfincteriana e comprova a ausência do reflexo inibitório retoanal (RIRA) na aganglionose.',
      B: 'Incorreta. A cintilografia esofágica avalia a motilidade e o esvaziamento do esôfago, não a função anorretal.',
      C: 'Incorreta. A eletromiografia facial avalia ramos do nervo facial e placa motora, sem conexão com o esfíncter anal.',
      D: 'Incorreta. A pH-metria esofágica avalia refluxo gastroesofágico ácido.',
    },
  },
  {
    id: 'ped-gas-100',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Gastrointestinais',
    subtema: 'Síntese de Emergências e Distúrbios Digestivos Pediátricos',
    isRevisao: false,
    enunciado:
      'Uma questão de síntese clínica para prova de residência médica: correlacione corretamente a condição gastrointestinal pediátrica com seu respectivo achado clínico, laboratorial ou de imagem patognomônico:\n\nI. Estenose Hipertrófica do Piloro;\nII. Invaginação Intestinal Aguda;\nIII. Doença Celíaca Clássica;\nIV. Atresia de Esôfago com Fístula Distal (Tipo C).\n\n1. Sialorreia espumosa em sala de parto, parada de sonda a 10 cm e ar na câmara gástrica ao raio-x.\n2. Vômitos pós-prandiais não biliosos em jato, fome voraz e alcalose metabólica hipoclorêmica e hipocalêmica.\n3. Dor em cólica paroxística com flexão de pernas, massa em salsicha e sinal do alvo ao ultrassom.\n4. Esteatorreia crônica, atrofia glútea, distensão abdominal e títulos elevados de anti-tTG IgA com biópsia Marsh 3.\n\nAssinale a alternativa que apresenta a correspondência exata:',
    alternativas: [
      {
        id: 'A',
        texto:
          'I - 2; II - 3; III - 4; IV - 1.',
      },
      {
        id: 'B',
        texto:
          'I - 1; II - 4; III - 3; IV - 2.',
      },
      {
        id: 'C',
        texto:
          'I - 3; II - 2; III - 1; IV - 4.',
      },
      {
        id: 'D',
        texto:
          'I - 4; II - 1; III - 2; IV - 3.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Esta questão final sintetiza as quatro patologias digestivas mais cobradas em concursos médicos de Pediatria e Cirurgia Pediátrica:\n- I. Estenose Hipertrófica do Piloro: correlaciona-se com o item 2 (vômitos em jato não biliosos, lactente faminto, perda de HCl gástrico culminando em alcalose metabólica hipoclorêmica e hipocalêmica).\n- II. Invaginação Intestinal Aguda: correlaciona-se com o item 3 (dor paroxística com choro inconsolável e flexão de pernas sobre o abdome, massa palpável em salsicha no hipocôndrio direito e sinal do alvo/rosquinha ao ultrassom de abdome).\n- III. Doença Celíaca Clássica: correlaciona-se com o item 4 (esteatorreia crônica, atrofia muscular glútea marcante, abdome volumoso em batráquio, anticorpos anti-tTG IgA e biópsia Marsh 3 com atrofia vilositária).\n- IV. Atresia de Esôfago com Fístula Distal (Tipo C): correlaciona-se com o item 1 (sialorreia espumosa, engasgos com cianose na primeira mamada, parada mecânica da sonda orogástrica a 10-12 cm e presença de gás na câmara gástrica confirmando a fístula traqueoesofágica distal comunicando a via aérea ao estômago).\n\nPortanto, a correlação correta é I - 2; II - 3; III - 4; IV - 1.',
    comentariosAlternativas: {
      A: 'Correta. A correlação I-2, II-3, III-4 e IV-1 associa perfeitamente cada patologia ao seu achado patognomônico de prova.',
      B: 'Incorreta. Inverte estenose de piloro com atresia de esôfago e intussuscepção com doença celíaca.',
      C: 'Incorreta. Associa estenose de piloro à intussuscepção e atresia de esôfago à doença celíaca.',
      D: 'Incorreta. Mistura completamente as associações conceituais.',
    },
  },
];



