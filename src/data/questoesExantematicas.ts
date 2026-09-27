export interface RawExantematicasQuestion {
  id: string;
  grandeArea: 'Pediatria';
  especialidade: 'Pediatria';
  tema: string;
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

export const QUESTOES_EXANTEMATICAS: RawExantematicasQuestion[] = [
  {
    id: 'ped-exant-001',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Sarampo',
    isRevisao: false,
    enunciado:
      'Lactente de 11 meses é trazido à UPA com história de febre alta (39,2 °C) há 4 dias, acompanhada de tosse seca intensa, coriza hialina profusa e hiperemia conjuntival bilateral com fotofobia acentuada. Há 24 horas a mãe notou aparecimento de lesões avermelhadas que iniciaram na linha de implantação dos cabelos e na região retroauricular, progredindo de forma descendente para o pescoço e tronco. Ao exame físico: prostrado, febril, com exantema maculopapular avermelhado confluente em fronte e tronco superior, além de micropápulas esbranquiçadas milimétricas com halo eritematoso na mucosa jugal, na altura dos molares inferiores. A caderneta vacinal não está atualizada. Qual é o diagnóstico e a conduta recomendada pelo Ministério da Saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sarampo; notificação compulsória imediata, isolamento respiratório por aerossóis e suplementação terapêutica com Vitamina A em duas doses.',
      },
      {
        id: 'B',
        texto:
          'Rubéola; prescrição sintomática ambulatorial com anti-histamínicos orais e isolamento de contato simples.',
      },
      {
        id: 'C',
        texto:
          'Exantema súbito; tranquilização da família com conduta expectante, pois o exantema marca o fim do período de transmissibilidade.',
      },
      {
        id: 'D',
        texto:
          'Escarlatina; início imediato de Penicilina Benzatina intramuscular em dose única para prevenir sequelas renais e articulares.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O caso descreve o quadro clínico clássico de Sarampo (Morbillivirus): pródromos com febre alta associada à tríade clássica (tosse, coriza e conjuntivite com fotofobia) seguida por exantema maculopapular morbiliforme de distribuição craniocaudal com tendência à confluência. O sinal patognomônico visualizado na mucosa jugal é o Sinal de Koplik (manchas branco-azuladas milimétricas com halo eritematoso próximas aos molares). Pelo Ministério da Saúde e OMS, a conduta no caso suspeito inclui: notificação compulsória imediata (em até 24h), isolamento por aerossóis (gotículas/núcleos inalatórios) e administração obrigatória de Vitamina A (para reduzir gravidade, pneumonia e mortalidade).',
    comentariosAlternativas: {
      A: 'Correta. Sarampo com Koplik patognomônico; exige notificação imediata, isolamento por aerossóis e Vitamina A.',
      B: 'Incorreta. Na rubéola o quadro prodrômico é muito discreto, sem tosse intensa e com linfonodomegalia suboccipital/retroauricular proeminente.',
      C: 'Incorreta. No exantema súbito as manchas surgem no tronco APÓS a queda em crise da febre e a criança fica em bom estado geral.',
      D: 'Incorreta. Escarlatina tem faringite exsudativa estreptocócica e exantema micropapular em "lixa", sem conjuntivite ou tosse.',
    },
  },
  {
    id: 'ped-exant-002',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Sarampo - Complicações',
    isRevisao: false,
    enunciado:
      'Menino de 2 anos, não vacinado, com diagnóstico clínico de sarampo há 6 dias, retorna à emergência pediátrica por recusa alimentar, persistência da febre alta, piora do padrão respiratório e prostração intensa. Ao exame: taquipneico (FR: 58 irpm), com tiragem subcostal moderada e crepitações teleinspiratórias em base pulmonar direita. A oximetria de pulso em ar ambiente revela saturação de 91%. Qual é a complicação mais comum causadora de óbito associada ao sarampo na faixa etária pediátrica?',
    alternativas: [
      {
        id: 'A',
        texto: 'Panencefalite esclerosante subaguda (PEES).',
      },
      {
        id: 'B',
        texto:
          'Pneumonia bacteriana secundária por Streptococcus pneumoniae ou Staphylococcus aureus.',
      },
      {
        id: 'C',
        texto: 'Encefalomielite disseminada aguda desmielinizante (ADEM).',
      },
      {
        id: 'D',
        texto: 'Miocardite viral fulminante.',
      },
    ],
    respostaCorreta: 'B',
    comentario:
      'A pneumonia bacteriana secundária (superinfecção bacteriana por Streptococcus pneumoniae, Staphylococcus aureus ou Haemophilus influenzae) ou a pneumonia viral primária de células gigantes (Pneumonia de Hecht) é a complicação mais frequente responsável pela mortalidade global em crianças pequenas com sarampo, devido ao estado transitório de imunossupressão celular prolongada induzida pelo vírus. A otite média aguda é a complicação mais frequente em números absolutos, mas a pneumonia é a principal causa de óbito. A PEES é tardia (anos depois) e rara.',
    comentariosAlternativas: {
      A: 'Incorreta. A PEES é uma complicação neurológica crônica degenerativa tardia que surge de 7 a 10 anos após a primoinfecção.',
      B: 'Correta. O comprometimento pulmonar (pneumonia) é a complicação mais letal do sarampo em menores de 5 anos.',
      C: 'Incorreta. Encefalite é grave porém menos comum como causa primária de mortalidade global quando comparada à pneumonia.',
      D: 'Incorreta. Miocardite é complicação rara no sarampo.',
    },
  },
  {
    id: 'ped-exant-003',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Rubéola',
    isRevisao: false,
    enunciado:
      'Menina de 5 anos é levada ao centro de saúde apresentando febre baixa (37,8 °C) há 2 dias, dor de garganta leve e surgimento de exantema maculopapular róseo delicado, não confluente, que se iniciou na face e progrediu rapidamente para tronco e extremidades, já começando a clarear na face. Ao exame físico: bom estado geral, orofaringe revelando pequenas petéquias puntiformes no palato mole (Sinal de Forchheimer), associada a linfonodomegalia dolorosa suboccipital, pós-auricular e cervical posterior de consistência fibroelástica. O quadro é sugestivo de:',
    alternativas: [
      {
        id: 'A',
        texto: 'Rubéola (Togavírus).',
      },
      {
        id: 'B',
        texto: 'Sarampo (Paramixovírus).',
      },
      {
        id: 'C',
        texto: 'Escarlatina (Streptococcus pyogenes).',
      },
      {
        id: 'D',
        texto: 'Mononucleose infecciosa por Citomegalovírus.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A rubéola é causada por um Togavírus do gênero Rubivirus. Caracteriza-se por pródromos brandos ou oligossintomáticos com febre baixa, linfonodomegalias dolorosas retroauriculares, suboccipitais e cervicais posteriores (o achado clínico mais marcante e sugestivo) e exantema rubeoliforme (maculopapular puntiforme, róseo, não confluente e de evolução craniocaudal rápida em cerca de 3 dias). As petéquias no palato mole são denominadas Manchas de Forchheimer (presentes em até 20% dos casos, embora não sejam 100% patognomônicas).',
    comentariosAlternativas: {
      A: 'Correta. Rubéola: pródromos leves, linfonodos retroauriculares/suboccipitais palpáveis e Sinal de Forchheimer.',
      B: 'Incorreta. No sarampo a febre é muito alta, há tosse, conjuntivite com fotofobia e as lesões confluem intensamente.',
      C: 'Incorreta. Escarlatina tem febre alta, amigdalite pultácea e exantema micropapular áspero com sinais de Pastia e Filatov.',
      D: 'Incorreta. Mononucleose causa linfadenopatia generalizada, hepatoesplenomegalia e exantema surge tipicamente pós-amoxicilina.',
    },
  },
  {
    id: 'ped-exant-004',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Rubéola Congênita',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo apresenta baixo peso ao nascer (PIG) e lesões purpúricas disseminadas ("fácies em muffin de mirtilo" / blueberry muffin baby). O ecocardiograma transtorácico evidencia Persistência do Canal Arterial (PCA) e estenose de artéria pulmonar periférica. A fundoscopia revela catarata bilateral e retinopatia em "sal e pimenta", além de otoemissões acústicas demonstrando surdez neurossensorial bilateral. A infecção materna no primeiro trimestre foi causada por qual agente etiológico?',
    alternativas: [
      {
        id: 'A',
        texto: 'Vírus da Rubéola.',
      },
      {
        id: 'B',
        texto: 'Vírus Varicela-Zóster.',
      },
      {
        id: 'C',
        texto: 'Parvovírus B19.',
      },
      {
        id: 'D',
        texto: 'Herpes Vírus Humano tipo 6.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Síndrome da Rubéola Congênita (SRC) clássica é marcada pela tríade de Gregg: cardiopatia congênita (PCA e estenose pulmonar periférica), alterações oftalmológicas (catarata congênita com ausência do reflexo vermelho, microftalmia e coriorretinite em sal e pimenta) e surdez neurossensorial (a sequela mais comum e isolada). O aspecto de blueberry muffin resulta de hematopoiese cutânea extramedular.',
    comentariosAlternativas: {
      A: 'Correta. Tríade clássica de Gregg da rubéola congênita: catarata, surdez neurossensorial e cardiopatia (PCA/estenose pulmonar).',
      B: 'Incorreta. Varicela congênita produz cicatrizes cutâneas zosteriformes deprimidas e hipoplasia de extremidades.',
      C: 'Incorreta. Parvovírus B19 provoca aplasia medular pura transitória e hidropisia fetal não imune por anemia grave.',
      D: 'Incorreta. HHV-6 causa exantema súbito após o período neonatal e não cursa com a tríade de Gregg.',
    },
  },
  {
    id: 'ped-exant-005',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Varicela',
    isRevisao: false,
    enunciado:
      'Criança de 3 anos é levada ao pronto-atendimento com febre moderada (38,3 °C), inapetência e lesões cutâneas extremamente pruriginosas iniciadas há 3 dias. Ao exame dermatológico, o pediatra observa máculas eritematosas, pápulas, vesículas sobre base eritematosa contendo líquido límpido ("gotas de orvalho sobre pétalas de rosa"), pústulas e crostas hemáticas distribuídas de forma centrípeta no couro cabeludo, tronco e mucosas oral e conjuntival. A presença simultânea de múltiplos estágios evolutivos da lesão cutânea é descrita como:',
    alternativas: [
      {
        id: 'A',
        texto: 'Polimorfismo regional.',
      },
      {
        id: 'B',
        texto: 'Sinal de Darier.',
      },
      {
        id: 'C',
        texto: 'Fenômeno de Koebner.',
      },
      {
        id: 'D',
        texto: 'Sinal de Nikolsky.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A varicela (catapora), causada pelo Vírus Varicela-Zóster (VZV), tem como traço semiológico característico o polimorfismo regional: em uma mesma área corporal coexistem lesões em fases evolutivas distintas (máculas, pápulas, vesículas, pústulas e crostas). O exantema é centrípeto (mais denso no tronco, face e couro cabeludo do que em extremidades distais) e poupa palmas e plantas na maioria dos casos leves.',
    comentariosAlternativas: {
      A: 'Correta. O polimorfismo regional é a marca patognomônica da varicela, refletindo sucessivas ondas de viremia.',
      B: 'Incorreta. Sinal de Darier é a formação de urticária/edema após atrito em lesões de mastocitose/urticária pigmentosa.',
      C: 'Incorreta. Fenômeno de Koebner é o surgimento de lesões típicas em sítios de trauma mecânico na pele (psoríase, vitiligo).',
      D: 'Incorreta. Sinal de Nikolsky é o descolamento da epiderme ao atrito tangencial, visto no pênfigo e na síndrome da pele escaldada estafilocócica.',
    },
  },
  {
    id: 'ped-exant-006',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Varicela - Complicações',
    isRevisao: false,
    enunciado:
      'Menina de 4 anos com varicela há 5 dias é trazida à consulta médica porque, após melhora da febre inicial, apresentou reaquecimento febril (39 °C), aumento da dor cutânea e prostração. Ao exame, várias lesões do abdome apresentam eritema perilesional vivo > 4 cm, calor local, dor intensa à palpação e secreção purulenta drenando de crostas descoladas. O pediatra alerta para a complicação bacteriana mais comum da varicela. Trata-se de:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Infecção bacteriana secundária de pele e partes moles (impetigo, celulite ou erisipela) por Streptococcus pyogenes ou Staphylococcus aureus.',
      },
      {
        id: 'B',
        texto: 'Glomerulonefrite difusa aguda pós-infecciosa isolada.',
      },
      {
        id: 'C',
        texto: 'Artrite reativa estéril mediada por imunocomplexos circulantes.',
      },
      {
        id: 'D',
        texto: 'Fasciíte necrotizante idiopática não infecciosa.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A complicação mais comum da varicela na infância é a infecção secundária de pele e tecidos moles (impetigo, celulite, abcesso e até fasciíte necrotizante), desencadeada pela quebra da barreira cutânea pelo prurido intenso e contaminação por Streptococcus pyogenes (Streptococcus do Grupo A - GAS) ou Staphylococcus aureus. O reaparecimento da febre após o 3º-4º dia de varicela é sinal de alarme clássico para superinfecção bacteriana.',
    comentariosAlternativas: {
      A: 'Correta. A quebra da barreira epidérmica e o coçar levam a infecções bacterianas estafilocócicas e estreptocócicas secundárias.',
      B: 'Incorreta. A GNDA pode ocorrer semanas depois de piodermite, mas a celulite aguda local é a complicação imediata descrita.',
      C: 'Incorreta. Artrite reativa estéril não cursa com secreção purulenta na lesão e celulite extensa.',
      D: 'Incorreta. Fasciíte bacteriana é infecciosa e invasiva, não uma condição não infecciosa idiopática.',
    },
  },
  {
    id: 'ped-exant-007',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Varicela - Tratamento',
    isRevisao: false,
    enunciado:
      'Qual das seguintes crianças com varicela possui indicação formal de receber Aciclovir oral de acordo com as diretrizes da Sociedade Brasileira de Pediatria (SBP) e Ministério da Saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Lactente hígido de 8 meses com varicela típica não complicada no 2º dia de erupção.',
      },
      {
        id: 'B',
        texto:
          'Criança previamente saudável de 4 anos que frequenta creche e apresenta cerca de 50 lesões vesiculares.',
      },
      {
        id: 'C',
        texto:
          'Adolescente de 14 anos, no 1º dia de exantema, sem comorbidades prévias.',
      },
      {
        id: 'D',
        texto:
          'Criança de 5 anos vacinada com 1 dose que desenvolveu varicela modificada leve com 10 vesículas.',
      },
    ],
    respostaCorreta: 'C',
    comentario:
      'As indicações de Aciclovir oral na varicela (iniciado preferencialmente nas primeiras 24 a 72 horas) incluem indivíduos com maior risco de complicações: 1) Idade > 12 a 13 anos (adolescentes e adultos evoluem com quadros muito mais graves e risco aumentado de pneumonia por VZV); 2) Doenças cutâneas crônicas (ex.: dermatite atópica extensa); 3) Doença pulmonar crônica; 4) Uso de salicilatos crônico (risco de Síndrome de Reye); 5) Segundo caso no mesmo domicílio (carga viral inoculada mais intensa e maior gravidade); 6) Corticoterapia oral intermitente ou inalatória em dose moderada/alta. Imunodeprimidos e recém-nascidos exigem aciclovir intravenoso.',
    comentariosAlternativas: {
      A: 'Incorreta. Crianças sadias entre 3 meses e 12 anos sem fatores de risco recebem apenas tratamento sintomático.',
      B: 'Incorreta. Criança hígida de 4 anos não tem indicação rotineira de antiviral oral.',
      C: 'Correta. Pacientes com idade ≥ 13 anos têm indicação clássica de aciclovir oral pelo risco elevado de varicela grave e pneumonia.',
      D: 'Incorreta. Varicela modificada (“breakthrough”) é atenuada e benigna, não necessitando de antiviral.',
    },
  },
  {
    id: 'ped-exant-008',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Varicela - Profilaxia Pós-Exposição',
    isRevisao: false,
    enunciado:
      'Menino de 9 meses, hígido, sem vacinação prévia contra varicela (pois a vacina está no calendário aos 15 meses), teve contato íntimo e domiciliar há 48 horas com o irmão mais velho diagnosticado com catapora ativa em fase de vesículas. Qual é a conduta profilática pós-exposição recomendada pelo Ministério da Saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Vacinação de bloqueio contra varicela dentro de até 5 dias após o contato.',
      },
      {
        id: 'B',
        texto:
          'Prescrição preventiva de Aciclovir oral em dose profilática por 21 dias.',
      },
      {
        id: 'C',
        texto:
          'Aplicação de Imunoglobulina Humana Antivaricela-Zóster (IGHAVZ) em dose única intramuscular.',
      },
      {
        id: 'D',
        texto:
          'Conduta expectante e orientação aos pais de isolamento e monitoramento térmico, já que o paciente tem menos de 9 meses completos para vacina e não é imunodeprimido para receber imunoglobulina.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A profilaxia pós-exposição contra varicela segue regras rigorosas: 1) Vacina de bloqueio pós-exposição: indicada para contatos suscetíveis imunocompetentes com idade ≥ 9 meses, aplicada em até 72 horas (idealmente) a 120 horas (5 dias) após o contato infectante; 2) Imunoglobulina específica (IGHAVZ): reservada para contatos suscetíveis de alto risco para doença grave em até 96 horas (podendo estender-se até 10 dias pelo MS): imunodeprimidos, gestantes suscetíveis, recém-nascidos de mães com varicela iniciada de 5 dias antes a 2 dias após o parto, prematuros < 28 semanas ou prematuros ≥ 28 semanas de mães sem história de varicela.',
    comentariosAlternativas: {
      A: 'Correta. Aos 9 meses de idade o bebê pode receber a vacina de bloqueio contra varicela em até 72-120 horas após o contato íntimo.',
      B: 'Incorreta. O uso profilático empírico de aciclovir pós-exposição em crianças sadias não é recomendado pelas diretrizes.',
      C: 'Incorreta. A IGHAVZ é restrita a imunossuprimidos, gestantes suscetíveis e recém-nascidos com indicações formais.',
      D: 'Incorreta. A criança tem exatamente 9 meses completos e, portanto, tem indicação de vacina de bloqueio.',
    },
  },
  {
    id: 'ped-exant-009',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Eritema Infeccioso',
    isRevisao: false,
    enunciado:
      'Criança de 6 anos é atendida no ambulatório por apresentar eritema malar bilateral intenso, confluente e homogêneo, poupando a região perioral e fronte ("fácies de bofetada" ou "asa de borboleta"), sem outros sintomas sistêmicos no momento. Três dias depois, o eritema facial clareia e surgem lesões maculopapulares eritematosas em extremidades superiores e coxas que evoluem com clareamento central, conferindo um aspecto "reticulado", "em renda" ou "rendilhado". A mãe nota que o exantema piora e recidiva após banhos quentes e exposição solar. O agente etiológico responsável é o:',
    alternativas: [
      {
        id: 'A',
        texto: 'Parvovírus B19 (vírus DNA fita simples).',
      },
      {
        id: 'B',
        texto: 'Herpes Vírus Humano tipo 7 (HHV-7).',
      },
      {
        id: 'C',
        texto: 'Coxsackievírus A16.',
      },
      {
        id: 'D',
        texto: 'Vírus Epstein-Barr.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O caso descreve o Eritema Infeccioso (Quinta Doença), clássica infecção causada pelo Parvovírus B19. Sua evolução clínica trifásica é inconfundível: Fase 1: eritema malar vivo ("bochecha esbofeteada" / slapped cheek) com palidez perioral; Fase 2: exantema maculopapular em tronco e membros que clareia centralmente assumindo padrão rendilhado ou rendado; Fase 3: evanescência e recidivas desencadeadas por calor, esforço físico, estresse emocional e radiação solar. No momento em que o exantema surge, o paciente já não transmite mais o vírus.',
    comentariosAlternativas: {
      A: 'Correta. O Parvovírus B19 é o agente etiológico do eritema infeccioso, com sua clássica trifase e padrão rendilhado.',
      B: 'Incorreta. O HHV-7 está associado ao exantema súbito e pitiríase rósea.',
      C: 'Incorreta. Coxsackie A16 causa a síndrome mão-pé-boca com vesículas nas palmas, plantas e mucosa oral.',
      D: 'Incorreta. EBV causa mononucleose infecciosa com faringite exsudativa e esplenomegalia.',
    },
  },
  {
    id: 'ped-exant-010',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Parvovírus B19 - Complicações Hematológicas',
    isRevisao: false,
    enunciado:
      'Menino de 8 anos portador de Anemia Falciforme (HbSS) comparece à emergência pediátrica com palidez cutaneomucosa súbita (4+/4+), fraqueza acentuada, sopro sistólico funcional e dispneia leve aos esforços. Não há febre, dor óssea ou visceromegalia palpável. O hemograma demonstra: Hemoglobina: 4,1 g/dL (basal de 8,0 g/dL) e contagem de reticulócitos: 0,1% (reticulocitopenia grave com menos de 5.000 reticulócitos/mm³). A sorologia IgM para Parvovírus B19 resulta positiva. Qual é o diagnóstico fisiopatológico desta complicação?',
    alternativas: [
      {
        id: 'A',
        texto: 'Crise de aplasia eritroide pura transitória.',
      },
      {
        id: 'B',
        texto: 'Crise de sequestro esplênico agudo.',
      },
      {
        id: 'C',
        texto: 'Crise hemolítica aguda por deficiência de G6PD.',
      },
      {
        id: 'D',
        texto: 'Síndrome Torácica Aguda.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Parvovírus B19 possui tropismo biológico específico pelos precursores eritroides na medula óssea através do antígeno P (globosídeo), infectando e destruindo os proeritroblastos com parada temporária da hematopoiese eritroide por 7 a 10 dias. Em indivíduos normais com hemácias com meia-vida de 120 dias, essa parada passa despercebida. Porém, em portadores de anemias hemolíticas crônicas (anemia falciforme, esferocitose hereditária, talassemia), cuja sobrevida da hemácia é de apenas 10 a 20 dias, ocorre queda vertiginosa da hemoglobina associada a RETICULOCITOPENIA marcante (< 1%), configurando a clássica crise aplástica transitória.',
    comentariosAlternativas: {
      A: 'Correta. Crise de aplasia pura da série vermelha por lise dos proeritroblastos infectados pelo Parvovírus B19.',
      B: 'Incorreta. O sequestro esplênico cursa com esplenomegalia aguda rapidamente expansiva e reticulocitose compensatória.',
      C: 'Incorreta. Crise hemolítica cursa com icterícia acentuada, hiperbilirrubinemia indireta e reticulocitose exuberante.',
      D: 'Incorreta. Síndrome torácica aguda cursa com febre, tosse, dor torácica e novo infiltrado pulmonar à radiografia.',
    },
  },
  {
    id: 'ped-exant-011',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Exantema Súbito',
    isRevisao: false,
    enunciado:
      'Lactente de 10 meses é trazido ao pronto-socorro porque apresentou febre alta contínua (39,5 a 40 °C) durante 3 dias consecutivos, sem foco infeccioso evidente ao exame físico minucioso, exceto por leve irritabilidade quando febril e bom estado geral nos períodos afebris. No 4º dia, a febre cedeu abruptamente em crise e, cerca de 6 a 12 horas após a defervescência, surgiram máculas e pápulas rosadas de 2 a 3 mm que se iniciaram no tronco e pescoço, poupando face e extremidades, sem prurido. O diagnóstico é:',
    alternativas: [
      {
        id: 'A',
        texto: 'Exantema Súbito (Roséola Infantil).',
      },
      {
        id: 'B',
        texto: 'Sarampo atípico.',
      },
      {
        id: 'C',
        texto: 'Dengue clássica.',
      },
      {
        id: 'D',
        texto: 'Doença de Kawasaki incompleta.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Exantema Súbito (Roséola Infantil ou Sexta Doença) é causado principalmente pelo Herpes Vírus Humano tipo 6 (HHV-6) e menos frequentemente pelo HHV-7. É uma doença quase exclusiva de lactentes entre 6 meses e 2 anos. O curso clínico é inconfundível: febre muito alta (39,5-40 °C) de início súbito que dura de 3 a 5 dias com exame físico inespecífico; a febre cede subitamente em crise e IMEDIATAMENTE (ou horas depois) surge o exantema maculopapular róseo centrífugo que começa no tronco e se expande discretamente para membros e pescoço.',
    comentariosAlternativas: {
      A: 'Correta. Roséola Infantil / Exantema Súbito: exantema maculopapular de tronco que surge logo após a defervescência da febre alta.',
      B: 'Incorreta. No sarampo o exantema surge no ápice da febre e tem início facial/retroauricular.',
      C: 'Incorreta. Dengue causa mialgia, dor retro-orbitária, leucopenia e o exantema costuma ser pruriginoso e com ilhas de pele sã.',
      D: 'Incorreta. Kawasaki cursa com febre persistente por ≥ 5 dias, hiperemia conjuntival bilateral não purulenta, lábios fissurados e adenomegalia.',
    },
  },
  {
    id: 'ped-exant-012',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Exantema Súbito - Complicações',
    isRevisao: false,
    enunciado:
      'Qual é a manifestação neurológica paroxística mais comumente associada ao período febril prodrômico do Exantema Súbito em lactentes entre 6 e 18 meses de idade?',
    alternativas: [
      {
        id: 'A',
        texto: 'Crise epiléptica febril simples.',
      },
      {
        id: 'B',
        texto: 'Mielite transversa aguda.',
      },
      {
        id: 'C',
        texto: 'Ataxia cerebelar aguda.',
      },
      {
        id: 'D',
        texto: 'Paralisia flácida arrefléxica ascendente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Herpes Vírus Humano tipo 6 (HHV-6) é uma das causas infecciosas mais frequentemente implicadas na gênese de crises epilépticas febris simples na primeira infância (cerca de um terço de todas as convulsões febris nos primeiros dois anos de vida), tanto pela ascensão térmica rápida e de alta magnitude quanto pelo neurotropismo inerente ao vírus, que pode ser detectado no líquor durante a fase aguda sem necessariamente causar meningoencefalite bacteriana.',
    comentariosAlternativas: {
      A: 'Correta. A crise febril simples é a complicação aguda mais recorrente do exantema súbito devido à febre elevada e rápida elevação de temperatura.',
      B: 'Incorreta. Mielite transversa é complicação neurológica extremamente rara pós-infecciosa.',
      C: 'Incorreta. Ataxia cerebelar aguda é uma complicação pós-infecciosa típica da varicela.',
      D: 'Incorreta. A paralisia flácida e arreflexa descreve a síndrome de Guillain-Barré ou poliomielite.',
    },
  },
  {
    id: 'ped-exant-013',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Escarlatina',
    isRevisao: false,
    enunciado:
      'Menino de 6 anos é atendido com queixa de febre alta de início súbito, calafrios, vômitos e intensa dor de garganta há 24 horas. Ao exame físico: hiperemia amigdaliana importante com exsudato purulento confluente e petéquias no palato. Na ectoscopia, apresenta exantema micropapular eritematoso difuso que confere à pele uma textura áspera e rugosa semelhante a uma "lixa". Observa-se ainda palidez acentuada ao redor da boca em contraste com a face eritematosa e linhas purpúricas hiperemiadas nas dobras antecubitais que não desaparecem à digitopressão. A língua encontra-se hiperemiada com papilas hipertrofiadas ("língua em framboesa"). Esses sinais semiológicos clássicos descritos são, respectivamente:',
    alternativas: [
      {
        id: 'A',
        texto: 'Sinal de Filatov e Linhas de Pastia.',
      },
      {
        id: 'B',
        texto: 'Manchas de Koplik e Sinal de Darier.',
      },
      {
        id: 'C',
        texto: 'Sinal de Nikolsky e Fenômeno de Lúcio.',
      },
      {
        id: 'D',
        texto: 'Sinal de Forchheimer e Manchas de Janeway.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Escarlatina é uma complicação toxigênica da faringoamigdalite estreptocócica causada pelo Streptococcus pyogenes (Streptococcus beta-hemolítico do Grupo A) produtor de toxinas pirogênicas/eritrogênicas estreptocócicas (SpeA, SpeB, SpeC). Os achados semiológicos clássicos cobrados em todas as provas de residência incluem: 1) Pele em lixa (exantema micropapular difuso rugoso); 2) Sinal de Filatov (máscara de Filatov: rubor facial com palidez perioral nítida); 3) Sinal de Pastia ou Linhas de Pastia (acentuação do exantema nas dobras de flexão com linhas hemorrágicas que não desaparecem à digitopressão); 4) Língua em framboesa branca que descama para framboesa vermelha.',
    comentariosAlternativas: {
      A: 'Correta. Sinal de Filatov (palidez perioral) e Linhas de Pastia (hiperemia linear nas dobras articulares) são marcos da escarlatina.',
      B: 'Incorreta. Koplik é de sarampo e Darier é de mastocitose.',
      C: 'Incorreta. Nikolsky é de pênfigo/SSSS e Lúcio é de hanseníase virchowiana.',
      D: 'Incorreta. Forchheimer ocorre na rubéola e Janeway na endocardite bacteriana infecciosa.',
    },
  },
  {
    id: 'ped-exant-014',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Escarlatina - Tratamento e Sequelas',
    isRevisao: false,
    enunciado:
      'Para a criança de 6 anos com quadro clássico de escarlatina diagnosticado no item anterior, o tratamento antimicrobiano precoce e adequado visa prevenir qual das seguintes complicações tardias imunomediadas?',
    alternativas: [
      {
        id: 'A',
        texto: 'Febre Reumática aguda.',
      },
      {
        id: 'B',
        texto: 'Glomerulonefrite Difusa Aguda pós-estreptocócica (GNDA).',
      },
      {
        id: 'C',
        texto: 'Púrpura Trombocitopênica Imunológica crônica.',
      },
      {
        id: 'D',
        texto: 'Síndrome Nefrótica por Lesões Mínimas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A antibioticoterapia precoce com Penicilina Benzatina ou Amoxicilina na faringoamigdalite estreptocócica e na escarlatina tem o objetivo principal e comprovado de erradicar o Streptococcus pyogenes da orofaringe e PREVENIR A FEBRE REUMÁTICA AGUDA e suas graves sequelas cardíacas (cardite reumática e valvopatias). Atenção: o tratamento antibiótico NÃO previne a Glomerulonefrite Difusa Aguda (GNDA), que pode ocorrer independentemente do uso correto de antibióticos por ser uma doença mediada por deposição de imunocomplexos circulantes já formados.',
    comentariosAlternativas: {
      A: 'Correta. A antibioticoterapia previne com eficácia a Febre Reumática quando iniciada em até 9 dias do início dos sintomas.',
      B: 'Incorreta. O antibiótico NÃO previne a GNDA pós-estreptocócica (pegadinha clássica de bancas).',
      C: 'Incorreta. PTI não é complicação clássica associada à escarlatina prevenida por penicilina.',
      D: 'Incorreta. A doença de lesões mínimas é idiopática e não prevenida por antimicrobiano.',
    },
  },
  {
    id: 'ped-exant-015',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Escarlatina - Descamação',
    isRevisao: false,
    enunciado:
      'Cerca de 7 a 14 dias após o início do quadro de escarlatina tratado com amoxicilina, a mãe retorna com a criança referindo que a pele está "soltando em lâminas e escamas", principalmente nas pontas dos dedos das mãos e dos pés. Qual é a característica típica da descamação na escarlatina?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Descamação furfurácea no tronco e descamação lamelar ou laminar (em luva e bota) nas polpas digitais e extremidades.',
      },
      {
        id: 'B',
        texto:
          'Formação de crostas melicéricas aderentes amareladas não descamativas.',
      },
      {
        id: 'C',
        texto:
          'Necrólise epidérmica bolhosa extensa com desnudamento doloroso de mais de 30% da superfície corpórea.',
      },
      {
        id: 'D',
        texto:
          'Hiperceratose folicular pruriginosa disseminada sem desprendimento epidérmico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A fase de convalescença da escarlatina é marcada por descamação característica que ocorre na sequência da resolução do exantema micropapular: inicia-se no tronco e pescoço com aspecto furfuráceo/fareláceo fino e progride para as palmas, plantas e extremidades dos dedos das mãos e pés, onde adquire um padrão lamelar ou laminar ("em lâminas", "em escamas" ou "em dedo de luva"). Essa descamação pode persistir por várias semanas e é completamente benigna.',
    comentariosAlternativas: {
      A: 'Correta. A descamação da escarlatina é furfurácea em tronco e laminar/lamelar nas extremidades palmoplantares.',
      B: 'Incorreta. Crostas melicéricas são a marca do impetigo contagioso crostoso.',
      C: 'Incorreta. Necrólise de grandes faixas epidérmicas dolorosas caracteriza a Síndrome de Stevens-Johnson / NET.',
      D: 'Incorreta. A escarlatina não produz hiperceratose folicular permanente.',
    },
  },
  {
    id: 'ped-exant-016',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Doença Mão-Pé-Boca',
    isRevisao: false,
    enunciado:
      'Menino de 18 meses é atendido na UBS com sialorreia intensa, disfagia e recusa total de sólidos e líquidos há 2 dias, além de febre baixa (38,0 °C). Ao exame da cavidade oral: pequenas vesículas dolorosas que ulceraram rapidamente, com halo eritematoso, localizadas na mucosa labial, língua e palato anterior. No exame físico segmentar, observam-se pápulas eritematosas e vesículas elípticas de conteúdo acinzentado dispostas paralelamente às linhas de tensão da pele nas palmas das mãos, plantas dos pés e nádegas. Qual é o agente etiológico mais frequente?',
    alternativas: [
      {
        id: 'A',
        texto: 'Coxsackievírus A16 (família Picornaviridae, gênero Enterovirus).',
      },
      {
        id: 'B',
        texto: 'Herpes Vírus Simples tipo 1 (HSV-1).',
      },
      {
        id: 'C',
        texto: 'Vírus Epstein-Barr (EBV).',
      },
      {
        id: 'D',
        texto: 'Adenovírus sorotipo 7.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Doença Mão-Pé-Boca é uma enterovirose clássica da infância causada primordialmente pelo Coxsackievírus A16 e pelo Enterovírus A71 (associado a formas neurológicas e cardiopulmonares mais graves). Caracteriza-se por vesículas e úlceras orais dolorosas associadas a lesões vesiculobolhosas ovais com eixo longo paralelo às pregas cutâneas nas mãos, pés e área das fraldas/nádegas. O tratamento é de suporte com analgesia potente e hidratação oral fracionada.',
    comentariosAlternativas: {
      A: 'Correta. Coxsackie A16 é o agente clássico e mais comum da Síndrome Mão-Pé-Boca.',
      B: 'Incorreta. A gengivoestomatite herpética primária por HSV-1 causa gengivite hemorrágica difusa exuberante, sem lesões típicas em mãos, pés e nádegas.',
      C: 'Incorreta. O EBV não costuma provocar vesículas palmoplantares elípticas.',
      D: 'Incorreta. Adenovírus produz febre faringoconjuntival com conjuntivite folicular.',
    },
  },
  {
    id: 'ped-exant-017',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Doença de Kawasaki',
    isRevisao: false,
    enunciado:
      'Lactente de 14 meses é internado na enfermaria de pediatria com quadro de febre diária alta (39 a 40 °C) há 6 dias consecutivos, sem resposta a antimicrobianos empíricos. Ao exame físico: conjuntivite bulbar bilateral não exsudativa; queilite com eritema labial intenso, fissuras hemorrágicas e língua em morango; edema endurado e eritema marcante nas palmas das mãos e plantas dos pés; exantema polimórfico em tronco; e adenomegalia cervical anterior unilateral de 2,0 cm, dolorosa e não flutuante. A suspeita clínica primária é:',
    alternativas: [
      {
        id: 'A',
        texto: 'Doença de Kawasaki.',
      },
      {
        id: 'B',
        texto: 'Mononucleose infecciosa por EBV.',
      },
      {
        id: 'C',
        texto: 'Sarampo com infecção bacteriana secundária.',
      },
      {
        id: 'D',
        texto: 'Leucemia Linfoide Aguda com sepse neutropênica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O caso preenche rigorosamente todos os critérios diagnósticos clássicos da Doença de Kawasaki: Febre alta por ≥ 5 dias associada a pelo menos 4 dos seguintes 5 critérios principais: 1) Conjuntivite bulbar bilateral não exsudativa; 2) Alterações orais (lábios eritematosos e fissurados, língua em framboesa/morango, hiperemia da orofaringe); 3) Alterações de extremidades (eritema e edema indolor de mãos e pés na fase aguda); 4) Exantema polimórfico não vesicular; 5) Linfonodomegalia cervical geralmente unilateral (> 1,5 cm). Trata-se de uma vasculite sistêmica necrotizante de vasos de médio calibre.',
    comentariosAlternativas: {
      A: 'Correta. Preenche os critérios diagnósticos da Doença de Kawasaki clássica (febre ≥ 5 dias + 5 critérios presentes).',
      B: 'Incorreta. Mononucleose não cursa com conjuntivite limpa, eritema labial fissurado e edema indurado palmoplantar.',
      C: 'Incorreta. Sarampo não causa língua em morango, conjuntivite sem secreção e edema de extremidades.',
      D: 'Incorreta. LLA cursa com hepatoesplenomegalia maciça, dores ósseas intensas, pancitopenia e blastos no sangue.',
    },
  },
  {
    id: 'ped-exant-018',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Doença de Kawasaki - Tratamento e Complicações',
    isRevisao: false,
    enunciado:
      'Para a criança do caso anterior diagnosticada com Doença de Kawasaki no 6º dia de febre, qual é o tratamento medicamentoso de escolha que deve ser instituído com urgência para prevenir a formação de aneurismas das artérias coronárias?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Imunoglobulina Humana Intravenosa (IVIG) em dose única de 2 g/kg associada a Ácido Acetilsalicílico (AAS) em dose anti-inflamatória.',
      },
      {
        id: 'B',
        texto:
          'Pulsoterapia com Metilprednisolona intravenosa isolada sem antiplaquetários.',
      },
      {
        id: 'C',
        texto:
          'Ceftriaxona associada a Oxacilina por 14 dias para cobertura de endocardite bacteriana.',
      },
      {
        id: 'D',
        texto:
          'Anticoagulação plena imediata com Enoxaparina em dose terapêutica sem necessidade de imunoglobulina.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O tratamento padrão-ouro de primeira linha na fase aguda da Doença de Kawasaki (idealmente administrado nos primeiros 10 dias de febre) é a Imunoglobulina Humana Intravenosa (IVIG) na dose única de 2 g/kg infundida em 10 a 12 horas, associada ao Ácido Acetilsalicílico (AAS) em dose anti-inflamatória (30 a 50 mg/kg/dia, ou até 80-100 mg/kg/dia conforme diretrizes locais) até 48-72h afebril, seguido de dose antiplaquetária (3 a 5 mg/kg/dia) por 6 a 8 semanas. Essa conduta reduz a incidência de aneurismas coronarianos de 25% para menos de 4-5%.',
    comentariosAlternativas: {
      A: 'Correta. IVIG 2 g/kg em dose única + AAS reduzem drasticamente o risco de aneurismas de artérias coronárias.',
      B: 'Incorreta. Corticoterapia isolada não substitui a IVIG e pode estar associada a pior desfecho vascular quando usada isoladamente na fase inicial.',
      C: 'Incorreta. Kawasaki é uma vasculite imunomediada não infecciosa primária, não responsiva a antimicrobianos.',
      D: 'Incorreta. Anticoagulação plena é reservada para coronárias com aneurismas gigantes estabelecidos (> 8 mm / Z-score > 10).',
    },
  },
  {
    id: 'ped-exant-019',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Mononucleose Infecciosa',
    isRevisao: false,
    enunciado:
      'Adolescente de 15 anos procurou a emergência há 3 dias com febre, odinofagia intensa e astenia. Foi diagnosticada amigdalite bacteriana e prescrita Amoxicilina oral. Hoje retorna com piora clínica e aparecimento de um exantema maculopapular avermelhado confluente e pruriginoso disseminado pelo tronco e membros superiores. Ao exame físico atual: linfonodomegalias cervicais posteriores e axilares bilaterais volumosas, faringe com hipertrofia amigdaliana bilateral coberta por placas esbranquiçadas e baço palpável a 3 cm do rebordo costal esquerdo. O hemograma revela leucocitose com 62% de linfócitos, dos quais 24% são atípicos. Qual é a etiologia do quadro?',
    alternativas: [
      {
        id: 'A',
        texto: 'Vírus Epstein-Barr (EBV / HHV-4).',
      },
      {
        id: 'B',
        texto: 'Citomegalovírus congênito.',
      },
      {
        id: 'C',
        texto: 'Reação anafilactoide alérgica tipo I mediada por IgE contra a penicilina.',
      },
      {
        id: 'D',
        texto: 'Toxoplasma gondii.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O caso ilustra o fenômeno clássico da Mononucleose Infecciosa (doença do beijo), causada pelo Vírus Epstein-Barr (EBV): febre, faringoamigdalite exsudativa, linfadenopatia generalizada (notadamente cervical posterior) e esplenomegalia com linfocitose atípica > 10%. Quando pacientes com infecção aguda por EBV são tratados inadvertidamente com aminopenicilinas (como amoxicilina ou ampicilina), ocorre o surgimento de um exantema maculopapular exuberante em até 90% dos casos. Trata-se de uma reação imunomediada transitória mediada por imunocomplexos induzida pelo vírus, e NÃO de verdadeira alergia à penicilina mediada por IgE.',
    comentariosAlternativas: {
      A: 'Correta. Mononucleose por EBV: tríade clássica + esplenomegalia + linfócitos atípicos + exantema pós-amoxicilina.',
      B: 'Incorreta. CMV causa síndrome mononucleose-like, porém amigdalite exsudativa intensa é muito mais rara que no EBV.',
      C: 'Incorreta. Não é alergia verdadeira mediada por IgE (urticária imediata/anafilaxia), mas uma reação imune específica entre EBV e aminopenicilinas.',
      D: 'Incorreta. Toxoplasmose aguda causa linfadenopatia isolada, raramente amigdalite grave com exsudato volumoso.',
    },
  },
  {
    id: 'ped-exant-020',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Sarampo - Vitamina A',
    isRevisao: false,
    enunciado:
      'Uma criança de 18 meses internada com sarampo não complicado recebe a indicação de tratamento com Vitamina A. De acordo com os protocolos do Ministério da Saúde e da Organização Mundial da Saúde (OMS), qual é o esquema posológico correto de Vitamina A indicado para essa idade?',
    alternativas: [
      {
        id: 'A',
        texto:
          '200.000 UI por via oral, administradas em 2 doses (uma no momento do diagnóstico e outra no dia seguinte).',
      },
      {
        id: 'B',
        texto:
          '100.000 UI por via oral em dose única exclusiva.',
      },
      {
        id: 'C',
        texto:
          '50.000 UI por via intramuscular diariamente durante 7 dias consecutivos.',
      },
      {
        id: 'D',
        texto:
          'A suplementação de Vitamina A só é indicada em crianças desnutridas graves com sinais clínicos evidentes de xeroftalmia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A suplementação terapêutica de Vitamina A no sarampo é recomendada para TODOS os casos suspeitos ou confirmados, independentemente do estado nutricional prévio, para reduzir complicações oculares, pneumonias e mortalidade. O esquema é feito por via oral em 2 doses consecutivas (dia 0 e dia 1): 1) Crianças com idade ≥ 12 meses: 200.000 UI/dose; 2) Crianças de 6 a 11 meses: 100.000 UI/dose; 3) Lactentes < 6 meses: 50.000 UI/dose. Se houver sinais de xeroftalmia, uma terceira dose é repetida após 2 a 4 semanas.',
    comentariosAlternativas: {
      A: 'Correta. Crianças com idade ≥ 12 meses recebem 200.000 UI/dose em dois dias consecutivos.',
      B: 'Incorreta. 100.000 UI é a dose para a faixa etária de 6 a 11 meses.',
      C: 'Incorreta. A via preconizada é oral e são apenas duas doses iniciais, não 7 dias.',
      D: 'Incorreta. A Vitamina A é obrigatória para TODOS os pacientes com sarampo, e não apenas para quem tem carência clínica evidente.',
    },
  },
  {
    id: 'ped-exant-021',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Síndrome da Pele Escaldada Estafilocócica (SSSS)',
    isRevisao: false,
    enunciado:
      'Lactente de 11 meses apresenta irritabilidade extrema, dor cutânea difusa ao toque ("hiperestesia cutânea") e febre baixa há 24 horas. Ao exame físico: eritema perioral e periorbitário com formação de crostas radiais na face sem acometimento de mucosas intraorais. No tronco e flexuras, formam-se bolhas flácidas estéreis de conteúdo claro que se rompem com facilidade e a pele desliza facilmente quando submetida a atrito tangencial suave com o dedo indicador (Sinal de Nikolsky positivo). Qual é a toxina bacteriana responsável por clivar a desmogleína-1 na epiderme causando essa síndrome?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Toxinas esfoliativas A e B (ET-A e ET-B) produzidas pelo Staphylococcus aureus fago grupo II.',
      },
      {
        id: 'B',
        texto:
          'Toxina eritrogênica A (SpeA) produzida pelo Streptococcus pyogenes.',
      },
      {
        id: 'C',
        texto:
          'Toxina do choque tóxico 1 (TSST-1) produzida por enterococos.',
      },
      {
        id: 'D',
        texto:
          'Endotoxina lipopolissacarídica (LPS) da Neisseria meningitidis.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Síndrome da Pele Escaldada Estafilocócica (SSSS ou Doença de Ritter von Rittershain em neonatos) decorre da ação de toxinas esfoliativas (ET-A e ET-B) produzidas à distância por cepas de Staphylococcus aureus (geralmente do fago grupo II). Essas toxinas atuam como serinoproteases que clivam especificamente a desmogleína-1 (proteína de adesão dos desmossomos da camada granulosa da epiderme), provocando descolamento intraepidérmico subcórneo sem inflamação profunda e Sinal de Nikolsky positivo. As mucosas são poupadas e as bolhas são estéreis, pois a bactéria está alojada em outro foco (rinofaringe, conjuntiva ou coto umbilical).',
    comentariosAlternativas: {
      A: 'Correta. Toxinas esfoliativas estafilocócicas A e B que clivam a desmogleína-1 na camada granulosa.',
      B: 'Incorreta. SpeA é a toxina pirogênica do Streptococcus causadora de escarlatina.',
      C: 'Incorreta. TSST-1 estafilocócica é a toxina do choque tóxico, não clivadora de desmogleína.',
      D: 'Incorreta. O LPS meningocócico causa meningococcemia fulminante com púrpura fulminans necrosante.',
    },
  },
  {
    id: 'ped-exant-022',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Diagnóstico Diferencial: SSSS vs NET',
    isRevisao: false,
    enunciado:
      'No diagnóstico diferencial entre a Síndrome da Pele Escaldada Estafilocócica (SSSS) e a Necrólise Epidérmica Tóxica (NET / Síndrome de Lyell) em pediatria, qual elemento clínico-patológico é decisivo para afastar NET e favorecer o diagnóstico de SSSS?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ausência de acometimento de membranas mucosas (labial, conjuntival, genital) e clivagem intraepidérmica alta (camada granulosa) na SSSS.',
      },
      {
        id: 'B',
        texto:
          'Presença do sinal de Nikolsky exclusivamente na NET, sendo sempre ausente na SSSS.',
      },
      {
        id: 'C',
        texto:
          'Presença de febre alta apenas na SSSS, com hipotermia na NET.',
      },
      {
        id: 'D',
        texto:
          'A SSSS acomete unicamente adultos idosos hospitalizados em UTI.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Dois fatores cruciais diferenciam a SSSS da NET: 1) Acometimento de mucosas: Na NET (farmacodermia grave mediada por citotoxicidade de linfócitos T CD8+), o acometimento de pelo menos duas mucosas (oral, ocular, urogenital) é marcante, com erosões graves dolorosas e crostas hemorrágicas. Na SSSS, as mucosas estão completamente POUPADAS (pode haver apenas eritema periorificial com crostas labiais externas radiais); 2) Nível histológico da clivagem: A SSSS cliva a camada granulosa (alta, subcórnea), curando rapidamente sem cicatriz. A NET causa necrose de espessura total da epiderme com clivagem dermoepidérmica profunda na camada basal.',
    comentariosAlternativas: {
      A: 'Correta. Poupar mucosas e ter clivagem na granulosa diferencia a SSSS da gravíssima necrólise dermoepidérmica da NET.',
      B: 'Incorreta. O sinal de Nikolsky é positivo em AMBAS as condições.',
      C: 'Incorreta. Ambas podem cursar com instabilidade térmica e febre.',
      D: 'Incorreta. A SSSS acomete quase que exclusivamente recém-nascidos e lactentes < 5 anos pela imaturidade renal na depuração das toxinas.',
    },
  },
  {
    id: 'ped-exant-023',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Meningococcemia',
    isRevisao: false,
    enunciado:
      'Menina de 3 anos é trazida desacordada ao serviço de emergência pediátrica com história de febre súbita, vômitos e irritabilidade iniciados há apenas 8 horas. Ao exame físico: escala de coma de Glasgow 9, tempo de enchimento capilar de 5 segundos, extremidades frias, pulsos periféricos filiformes, FC: 185 bpm e PA: 65/35 mmHg. A ectoscopia revela múltiplas lesões petequiais e purpúricas que coalescem em placas violáceas com centro necrótico cinzento-ardósia e equimoses disseminadas em tronco e membros inferiores (Púrpura Fulminans). Qual é a conduta farmacológica prioritária que não deve ser adiada sob nenhuma hipótese?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Expansão volêmica rápida com cristaloides isotônicos e administração imediata de Ceftriaxona intravenosa (ou Penicilina Cristalina), sem aguardar punção lombar ou resultados de exames laboratoriais.',
      },
      {
        id: 'B',
        texto:
          'Realização mandatória de punção lombar na sala de emergência antes de qualquer infusão antimicrobiana para não negativar a bacterioscopia.',
      },
      {
        id: 'C',
        texto:
          'Coleta de líquor e início de Aciclovir intravenoso isolado com restrição hídrica rigorosa para prevenção de edema cerebral.',
      },
      {
        id: 'D',
        texto:
          'Biópsia de pele à beira do leito para imunofluorescência direta prévia ao antibiótico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O quadro descreve choque séptico por Meningococcemia / Púrpura Fulminans (infecção invasiva por Neisseria meningitidis). Trata-se de uma emergência médica hiperaguda com altíssima letalidade nas primeiras 24 horas. As prioridades são: ressuscitação hemodinâmica imediata (expansão com cristaloides, drogas vasoativas se necessário) e administração imediata de Ceftriaxona (100 mg/kg/dia IV) ou Penicilina Cristalina. A punção lombar é ABSOLUTAMENTE CONTRAINDICADA na vigência de instabilidade hemodinâmica e distúrbios da coagulação/púrpura fulminans.',
    comentariosAlternativas: {
      A: 'Correta. Expansão rápida e antibiótico parenteral na primeira hora ("golden hour") salvam a vida do paciente.',
      B: 'Incorreta. A punção lombar está contraindicada no choque descompensado e nunca deve atrasar a antibioticoterapia.',
      C: 'Incorreta. Não se trata de encefalite herpética primária; restrição hídrica no choque distributivo agravaria a hipoperfusão.',
      D: 'Incorreta. Biópsia de pele atrasaria inadmissivelmente a terapêutica de urgência.',
    },
  },
  {
    id: 'ped-exant-024',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Meningococcemia - Quimioprofilaxia de Contatos',
    isRevisao: false,
    enunciado:
      'Em relação ao caso de meningococcemia descrito no item anterior, qual é a conduta indicada para a quimioprofilaxia de contatos íntimos (familiares que coabitam e contactantes íntimos em creches) preconizada pelo Ministério da Saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Rifampicina oral por 2 dias (esquema de escolha), administrada preferencialmente nas primeiras 48 horas após a identificação do caso índice.',
      },
      {
        id: 'B',
        texto:
          'Amoxicilina oral por 10 dias consecutivos para todos os indivíduos da cidade.',
      },
      {
        id: 'C',
        texto:
          'Isolamento domiciliar restrito sem uso de medicamentos até que a cultura do caso índice seja concluída.',
      },
      {
        id: 'D',
        texto:
          'Aplicação de vacina meningocócica conjugada exclusivamente, dispensando quimioprofilaxia medicamentosa.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A quimioprofilaxia de contatos na infecção por Neisseria meningitidis tem como objetivo erradicar o estado de portador são nasofaríngeo e quebrar a cadeia de transmissão comunitária. Está indicada para contatos íntimos (residentes do mesmo domicílio, creche/escola com contato prolongado e profissionais de saúde que realizaram procedimentos com via aérea sem máscara N95/PFF2). O fármaco de primeira escolha no Brasil é a Rifampicina oral de 12/12h por 2 dias (adultos: 600 mg 12/12h; crianças ≥ 1 mês: 10 mg/kg 12/12h). Alternativas: Ceftriaxona IM dose única ou Ciprofloxacino oral dose única em adultos.',
    comentariosAlternativas: {
      A: 'Correta. Rifampicina por 2 dias para contatos íntimos iniciada precocemente é o padrão oficial do Ministério da Saúde.',
      B: 'Incorreta. Amoxicilina não erradica o estado de portador de meningococo da rinofaringe.',
      C: 'Incorreta. O atraso na quimioprofilaxia pode resultar em casos secundários fatais.',
      D: 'Incorreta. A vacina demora de 10 a 14 dias para gerar títulos de anticorpos protetores e não substitui a quimioprofilaxia imediata.',
    },
  },
  {
    id: 'ped-exant-025',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Diagnóstico Diferencial e Cronologia dos Exantemas',
    isRevisao: false,
    enunciado:
      'Associe a doença exantêmica da infância à sua respectiva correlação temporal típica entre a febre e o surgimento do exantema:\n\nI. Sarampo\nII. Exantema Súbito\nIII. Eritema Infeccioso\nIV. Varicela\n\n( ) O exantema surge exatamente quando a febre desaparece em crise.\n( ) O exantema surge de 3 a 5 dias após pródromos intensos, no auge da curva térmica.\n( ) As lesões polimórficas surgem concomitantemente aos picos febris em surtos sucessivos.\n( ) O exantema clássico surge de forma afebril ou após sintomas gerais leves prévios já resolvidos.\n\nA sequência correta de preenchimento dos parênteses, de cima para baixo, é:',
    alternativas: [
      {
        id: 'A',
        texto: 'II – I – IV – III.',
      },
      {
        id: 'B',
        texto: 'I – II – III – IV.',
      },
      {
        id: 'C',
        texto: 'II – IV – I – III.',
      },
      {
        id: 'D',
        texto: 'IV – I – II – III.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A correlação febre-exantema é um dos pontos mais cobrados nas provas de Residência Médica em Pediatria:\n- Exantema Súbito (II): febre alta por 3-4 dias que cai subitamente em crise e o exantema surge no momento da defervescência térmica.\n- Sarampo (I): pródromos catarrais intensos (tosse, coriza, conjuntivite) e o exantema morbiliforme surge no pico febril da doença.\n- Varicela (IV): cada onda de novas vesículas polimórficas costuma ser acompanhada por um pico febril (febre e exantema concomitantes).\n- Eritema Infeccioso (III): o exantema (fácies esbofeteada e aspecto rendilhado) é uma manifestação pós-infecciosa imunomediada; quando ele surge, o paciente já está habitualmente afebril e já não transmite mais o vírus.\nPortanto, a sequência correta é II – I – IV – III.',
    comentariosAlternativas: {
      A: 'Correta. Sequência: II (Exantema Súbito) – I (Sarampo) – IV (Varicela) – III (Eritema Infeccioso).',
      B: 'Incorreta. No sarampo o exantema não surge após a febre sumir, e sim no auge dela.',
      C: 'Incorreta. A varicela não tem exantema 3-5 dias após pródromos sem lesão.',
      D: 'Incorreta. A varicela tem febre concomitante aos surtos de vesículas.',
    },
  },
  {
    id: 'ped-exant-026',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Doença de Kawasaki - Critérios e Ecocardiograma',
    isRevisao: false,
    enunciado:
      'Lactente de 11 meses, sexo masculino, apresenta febre de 39,4 °C há 6 dias. Ao exame físico: hiperemia conjuntival bulbar bilateral sem exsudato purulento, lábios secos, hiperemiados e com fissuras sangrantes, além de língua em framboesa. Apresenta ainda exantema maculopapular polimórfico no tronco e região perineal, e edema endurado doloroso nas mãos e pés com eritema palmar. Não há linfonodomegalia palpável > 1,5 cm. Os exames laboratoriais revelam: Hemoglobina: 10,2 g/dL, Leucócitos: 18.500/mm³ com desvio à esquerda, Plaquetas: 540.000/mm³, PCR: 110 mg/L e VHS: 88 mm/1ª hora. Em relação à Doença de Kawasaki e seus critérios diagnósticos, assinale a conduta e análise corretas:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O diagnóstico clínico de Doença de Kawasaki está firmado (febre ≥ 5 dias + 4 critérios principais); deve-se iniciar prontamente Imunoglobulina Humana Intravenosa (2 g/kg) e AAS em dose anti-inflamatória, além de solicitar ecocardiograma transtorácico inicial.',
      },
      {
        id: 'B',
        texto:
          'O diagnóstico é descartado pela ausência de linfonodomegalia cervical > 1,5 cm, devendo-se aguardar hemoculturas e manter apenas antibioticoterapia empírica para sepse bacteriana.',
      },
      {
        id: 'C',
        texto:
          'O ecocardiograma deve ser realizado apenas na fase de convalescença (após a 6ª semana), momento em que os aneurismas coronarianos iniciam sua formação anatômica.',
      },
      {
        id: 'D',
        texto:
          'Trata-se de escarlatina atípica resistente a beta-lactâmicos, sendo indicada troca imediata para vancomicina intravenosa.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O diagnóstico clássico de Doença de Kawasaki exige febre por pelo menos 5 dias associada a 4 dos 5 critérios principais da AHA (American Heart Association): 1) Conjuntivite não exsudativa bilateral; 2) Alterações orais (eritema labial/fissuras, língua em morango); 3) Alterações de extremidades (eritema e edema indurado agudo); 4) Exantema polimórfico; 5) Linfonodomegalia cervical > 1,5 cm. No caso, a criança possui 4 critérios (conjuntivite, orofaringe, extremidades e exantema), mesmo sem adenomegalia. O tratamento com Imunoglobulina Intravenosa (IGIV 2 g/kg em infusão única de 10-12h) e AAS deve ser iniciado precocemente (preferencialmente até o 10º dia de doença) e o ecocardiograma deve ser solicitado imediatamente na admissão para servir de parâmetro basal das artérias coronárias e miocárdio.',
    comentariosAlternativas: {
      A: 'Correta. Critérios completos preenchidos (febre + 4 critérios); indicação imediata de IGIV 2 g/kg + AAS e ecocardiograma basal.',
      B: 'Incorreta. A linfonodomegalia é o critério menos frequente da Doença de Kawasaki (~50% dos casos) e sua ausência não exclui a síndrome.',
      C: 'Incorreta. O ecocardiograma basal deve ser feito no momento da suspeita/diagnóstico, repetido em 2 e 6 semanas.',
      D: 'Incorreta. Na escarlatina não há conjuntivite bulbar, edema indurado de extremidades e fissuras labiais sangrantes típicas.',
    },
  },
  {
    id: 'ped-exant-027',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Doença de Kawasaki Incompleta',
    isRevisao: false,
    enunciado:
      'Lactente de 5 meses apresenta febre diária de 38,8 °C há 7 dias sem foco evidente. Ao exame físico: irritabilidade desproporcional, hiperemia conjuntival bilateral sem secreção e eritema e descamação descamativa acentuada na região do períneo (área da fralda). Não há linfonodomegalia, queilite ou edema de extremidades perceptíveis. A investigação complementar evidencia: PCR: 82 mg/L, VHS: 74 mm/h, plaquetas: 620.000/mm³, piúria estéril no EAS (18 leucócitos/campo com urocultura negativa) e albumina sérica de 2,8 g/dL. O ecocardiograma revela ectasia da artéria coronária descendente anterior esquerda com Z-score de +2,6. O diagnóstico e conduta são:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Doença de Kawasaki Incompleta (Atípica); iniciar imediatamente Imunoglobulina Humana Intravenosa (2 g/kg) e AAS.',
      },
      {
        id: 'B',
        texto:
          'Infecção do trato urinário atípica por patógeno multirresistente; iniciar meropenem intravenoso.',
      },
      {
        id: 'C',
        texto:
          'Exantema súbito complicado com meningite asséptica; manter apenas antitérmicos e hidratação oral.',
      },
      {
        id: 'D',
        texto:
          'Artrite idiopática juvenil forma sistêmica; iniciar metotrexato e corticoterapia oral em altas doses.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Doença de Kawasaki Incompleta é comum em lactentes < 6 meses (grupo de maior risco para atraso diagnóstico e aneurismas coronarianos graves). De acordo com o algoritmo da AHA, em crianças com febre ≥ 5 dias e 2 ou 3 critérios clínicos, avaliam-se provas inflamatórias (PCR ≥ 30 mg/L ou VHS ≥ 40 mm/h) e critérios laboratoriais suplementares (anemia, plaquetose > 450.000 após o 7º dia, hipoalbuminemia ≤ 3,0 g/dL, piúria estéril ≥ 10 leucócitos/campo, elevação de transaminases). A confirmação definitiva ocorre pelo ecocardiograma demonstrando Z-score de artéria coronária > 2,5 ou aneurisma franco. A conduta é IGIV (2 g/kg) + AAS imediatamente.',
    comentariosAlternativas: {
      A: 'Correta. Trata-se de Kawasaki incompleto com confirmação ecocardiográfica de dilatação coronária (Z-score +2,6); exige IGIV e AAS.',
      B: 'Incorreta. A piúria é estéril (decorrente de uretrite asséptica típica da vasculite de Kawasaki), com urocultura negativa.',
      C: 'Incorreta. O exantema súbito tem defervescência térmica rápida no 3º-4º dia e não dilata coronárias nem cursa com inflamação tão intensa.',
      D: 'Incorreta. Na AIJ forma sistêmica a febre é tipicamente cotidiana com picos vespertinos ("febre em agulha"), associada a artrite franca.',
    },
  },
  {
    id: 'ped-exant-028',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Doença de Kawasaki - Fase Subaguda e Convalescença',
    isRevisao: false,
    enunciado:
      'Menino de 3 anos com Doença de Kawasaki foi tratado com IGIV no 7º dia de febre, com resposta clínica satisfatória e desaparecimento da febre. No 16º dia do início da doença (fase subaguda), a mãe retorna para reavaliação referindo que a criança está sem febre e com ótimo apetite, mas nota uma descamação na pele dos dedos das mãos e pés que se inicia na região periungueal. O hemograma de controle mostra 890.000 plaquetas/mm³. Qual é a principal complicação cardiovascular a ser monitorada ativamente nessa fase?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Aneurismas das artérias coronárias e trombose coronariana aguda.',
      },
      {
        id: 'B',
        texto: 'Coarctação da aorta pós-ductal adquirida.',
      },
      {
        id: 'C',
        texto: 'Estenose congênita da valva mitral por espessamento nodular.',
      },
      {
        id: 'D',
        texto: 'Rotura espontânea de seio de Valsalva ventricular.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A história natural da Doença de Kawasaki compreende 3 fases: 1) Aguda (dias 1 a 11): febre alta, inflamação exuberante e miocardite; 2) Subaguda (dias 11 a 25): resolução da febre, descamação periungueal e lamelar em extremidades e TROMBOCITOSE marcante (muitas vezes > 1.000.000/mm³). É exatamente nessa fase subaguda que o risco de desenvolvimento e rotura de ANEURISMAS CORONARIANOS e TROMBOSE com infarto agudo do miocárdio atinge seu pico máximo, exigindo manutenção de AAS em dose antiplaquetária e vigilância ecocardiográfica; 3) Convalescença (semana 6 a 8): normalização gradual das provas de fase aguda.',
    comentariosAlternativas: {
      A: 'Correta. A fase subaguda combina fraqueza da parede vascular inflamada e trombocitose maciça, elevando o risco de aneurismas e trombose.',
      B: 'Incorreta. Coarctação de aorta é uma cardiopatia congênita estrutural e não complicação de Kawasaki.',
      C: 'Incorreta. Estenose mitral reumática ocorre anos após febre reumática, não na fase aguda/subaguda de Kawasaki.',
      D: 'Incorreta. Rotura de seio de Valsalva é anomalia estrutural congênita não relacionada à vasculite infantil.',
    },
  },
  {
    id: 'ped-exant-029',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Doença de Kawasaki - Resistência a IGIV',
    isRevisao: false,
    enunciado:
      'Criança de 2 anos com Doença de Kawasaki clássica recebeu a infusão correta de Imunoglobulina Humana Intravenosa (2 g/kg) associada ao AAS no 5º dia de doença. Decorridas 48 horas do término da infusão da imunoglobulina, o paciente volta a apresentar febre axilar de 39,1 °C e piora da irritabilidade, mantendo PCR e VHS muito elevados. Diante do quadro de Doença de Kawasaki refratária/resistente à imunoglobulina, qual é a conduta preconizada pelas diretrizes internacionais?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar um segundo ciclo de Imunoglobulina Humana Intravenosa (2 g/kg) em dose única, podendo ser associada à pulsoterapia com metilprednisolona.',
      },
      {
        id: 'B',
        texto:
          'Suspender o AAS imediatamente e iniciar amoxicilina com clavulanato em dose dobrada por 21 dias.',
      },
      {
        id: 'C',
        texto:
          'Indicar intervenção cirúrgica cardíaca de emergência para revascularização miocárdica profilática.',
      },
      {
        id: 'D',
        texto:
          'Suspender qualquer terapia imunomoduladora e adotar postura estritamente expectante por 7 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Cerca de 10% a 20% dos pacientes com Doença de Kawasaki apresentam persistência ou recrudescência da febre após pelo menos 36 a 48 horas do término da primeira infusão de IGIV, sendo classificados como portadores de Doença de Kawasaki resistente à IGIV. Esse grupo tem maior risco de desenvolver lesões e aneurismas coronarianos graves. O tratamento de escolha para o Kawasaki refratário é a administração de um SEGUNDO CICLO DE IGIV (2 g/kg em dose única). Como alternativa ou adjuvância associada, indica-se pulsoterapia com corticosteroides (Metilprednisolona 30 mg/kg/dia por 3 dias) ou agentes biológicos anti-TNF-alfa (como o Infliximabe).',
    comentariosAlternativas: {
      A: 'Correta. Segunda dose de IGIV (2 g/kg) com ou sem corticosteroide é a estratégia de primeira linha na resistência à primeira infusão.',
      B: 'Incorreta. Kawasaki não é bacteriano e o AAS não deve ser suspenso nessa fase aguda.',
      C: 'Incorreta. Cirurgia só é indicada para estenoses coronárias isquêmicas tardias críticas não tratáveis clinicamente.',
      D: 'Incorreta. A ausência de tratamento eleva criticamente o risco de aneurismas gigantes e morte súbita.',
    },
  },
  {
    id: 'ped-exant-030',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Doença de Kawasaki - Vacinação Pós-IGIV',
    isRevisao: false,
    enunciado:
      'Lactente de 12 meses recebeu alta hospitalar após tratamento bem-sucedido de Doença de Kawasaki com Imunoglobulina Humana Intravenosa (2 g/kg). A mãe questiona na consulta de puerpério sobre a administração das vacinas de vírus vivos atenuados do calendário vacinal de 1 ano (Tríplice Viral e Varicela). Qual é a orientação correta quanto ao intervalo mínimo necessário entre o uso de IGIV em dose alta e a aplicação de vacinas de vírus atenuados?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Adiar as vacinas de vírus vivos atenuados (Tríplice Viral e Varicela) por 11 meses.',
      },
      {
        id: 'B',
        texto:
          'Aplicar as vacinas normalmente no dia seguinte à alta, pois a IGIV potencializa a resposta imune humoral.',
      },
      {
        id: 'C',
        texto:
          'Contraindicar de forma definitiva e permanente qualquer vacina de vírus atenuados ao longo de toda a vida da criança.',
      },
      {
        id: 'D',
        texto:
          'Aguardar apenas 14 dias após a alta para aplicação das vacinas sem necessidade de testes sorológicos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A administração de Imunoglobulina Humana Intravenosa (IGIV) em dose alta (2 g/kg, como na Doença de Kawasaki) transfere uma concentração maciça de anticorpos doadores que neutralizam a replicação dos vírus vacinais atenuados, impedindo a indução de resposta imune protetora pelo próprio organismo do paciente. Por isso, as diretrizes de imunizações (PNI/MS, SBP e CDC) preconizam aguardar um intervalo de 11 meses entre o uso da IGIV na dose de 2 g/kg e a administração de vacinas de vírus vivos atenuados parenterais (como Tríplice Viral - SCR e Varicela). As vacinas inativadas (DTP, Hepatite B, Poliomielite inativada, Pneumocócica) podem ser administradas sem necessidade de adiamento.',
    comentariosAlternativas: {
      A: 'Correta. Para a dose de 2 g/kg de imunoglobulina humana, o intervalo preconizado para vacinas de vírus atenuados é de 11 meses.',
      B: 'Incorreta. Os anticorpos passivos infundidos neutralizariam a cepa vacinal e tornariam a vacina ineficaz.',
      C: 'Incorreta. A contraindicação é estritamente temporária (11 meses) e não definitiva.',
      D: 'Incorreta. O intervalo de 14 dias é insuficiente, pois a meia-vida das IgG transferidas mantém títulos inibitórios por muitos meses.',
    },
  },
  {
    id: 'ped-exant-031',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Mononucleose Infecciosa - Faringoamigdalite e Linfadenopatia',
    isRevisao: false,
    enunciado:
      'Adolescente de 16 anos comparece à UBS com relato de febre há 10 dias (38,5 °C), dor de garganta intensa com disfagia, fadiga intensa e cefaleia. Ao exame físico: paciente prostrado, orofaringe com volumoso exsudato amigdaliano esbranquiçado confluente, petéquias na transição entre o palato duro e mole e edema periorbitário discreto (Sinal de Hoagland). À palpação cervical: múltiplos linfonodos aumentados de tamanho (2 a 3 cm), simétricos, móveis e dolorosos nas cadeias cervicais posteriores e anteriores. O abdome revela baço palpável a 2 cm abaixo do rebordo costal esquerdo. O teste rápido para Streptococcus do grupo A foi negativo. Qual é a hipótese diagnóstica mais provável e o exame confirmatório inicial?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Mononucleose Infecciosa por Vírus Epstein-Barr; pesquisa de anticorpos heterófilos (Monoteste) ou sorologia específica anti-VCA IgM.',
      },
      {
        id: 'B',
        texto:
          'Difteria faríngea; isolamento do Corynebacterium diphtheriae em meio de Loeffler.',
      },
      {
        id: 'C',
        texto:
          'Abscesso periamigdaliano bacteriano; punção aspirativa com agulha fina para drenagem imediata.',
      },
      {
        id: 'D',
        texto:
          'Leucemia Mieloide Aguda; biópsia de medula óssea com citogenética urgente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O quadro apresenta a tétrade clássica da Mononucleose Infecciosa (EBV): 1) Febre prolongada; 2) Faringoamigdalite exsudativa exuberante; 3) Linfadenopatia generalizada de predomínio cervical posterior; 4) Esplenomegalia (presente em 50% dos casos). O Sinal de Hoagland (edema periorbitário bilateral transitório no início do quadro) é um achado clássico altamente sugestivo de infecção aguda por EBV. Em adolescentes e adultos jovens, a pesquisa de anticorpos heterófilos (Monoteste ou reação de Paul-Bunnell-Davidsohn) é o teste inicial de triagem rápida, enquanto a sorologia com anticorpos IgM contra o antígeno do capsídeo viral (anti-VCA IgM) confirma a primoinfecção aguda.',
    comentariosAlternativas: {
      A: 'Correta. Mononucleose por EBV: febre + amigdalite exsudativa + adenomegalia cervical posterior + esplenomegalia e Sinal de Hoagland.',
      B: 'Incorreta. Difteria causa placas acinzentadas pseudomembranosas que sangram ao descolamento ("pescoço taurino") sem esplenomegalia.',
      C: 'Incorreta. Abscesso periamigdaliano é tipicamente unilateral, causa trismo severo e desvio medial da úvula.',
      D: 'Incorreta. Os sintomas sistêmicos infecciosos e linfócitos atípicos direcionam para mononucleose, sem sangramentos ou blastos leucêmicos.',
    },
  },
  {
    id: 'ped-exant-032',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Mononucleose Infecciosa - Linfocitose Atípica',
    isRevisao: false,
    enunciado:
      'Em relação aos achados hematológicos clássicos da Mononucleose Infecciosa causada pelo Vírus Epstein-Barr (EBV), assinale a afirmativa fisiopatológica e laboratorial correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O hemograma típico revela leucocitose com linfocitose absoluta (> 50% de linfócitos) e presença de mais de 10% de linfócitos atípicos (linfócitos T citotóxicos reativos ativados).',
      },
      {
        id: 'B',
        texto:
          'Os linfócitos atípicos observados na lâmina de sangue periférico são linfócitos B malignizados com inclusões citoplasmáticas nucleares patognomônicas.',
      },
      {
        id: 'C',
        texto:
          'Apresenta neutrofilia exuberante com granulações grosseiras e desvio escalonado até mieloblastos na grande maioria dos casos.',
      },
      {
        id: 'D',
        texto:
          'Cursa obrigatoriamente com aplasia medular completa de todas as séries celulares por citotoxicidade direta do vírus.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Na Mononucleose Infecciosa, o vírus Epstein-Barr infecta especificamente os linfócitos B humanos através do receptor CD21. Em resposta a essa proliferação viral, o sistema imunológico produz uma resposta celular maciça de Linfócitos T CD8+ citotóxicos e células Natural Killer (NK) para combater os linfócitos B infectados. Esses linfócitos T ativados adquirem alterações morfológicas características (tamanho aumentado, citoplasma abundante e basofílico que se molda aos eritrócitos circundantes), sendo chamados de "linfócitos atípicos" ou "células de Downey". O achado de > 10% de atipia linfocitária associado a linfocitose absoluta é um marco clássico da infecção pelo EBV.',
    comentariosAlternativas: {
      A: 'Correta. Linfocitose absoluta (> 50%) com atipia linfocitária > 10% composta por linfócitos T citotóxicos reativos.',
      B: 'Incorreta. Os linfócitos atípicos NÃO são malignos nem são linfócitos B; são linfócitos T reativos benéficos da resposta imune.',
      C: 'Incorreta. Ao contrário de infecções bacterianas com neutrofilia, a mononucleose cursa predominantemente com linfocitose.',
      D: 'Incorreta. A mononucleose não causa aplasia de medula rotineiramente; pode haver apenas trombocitopenia leve e autolimitada.',
    },
  },
  {
    id: 'ped-exant-033',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Mononucleose Infecciosa - Ruptura Esplênica e Atividade Física',
    isRevisao: false,
    enunciado:
      'Jovem de 17 anos atleta de rúgbi é diagnosticado com Mononucleose Infecciosa por EBV, apresentando baço palpável a 3 cm do rebordo costal esquerdo e discreta elevação de aminotransferases (ALT e AST 2 vezes o limite superior). O paciente deseja saber quando poderá retornar aos treinos de contato e jogos esportivos da equipe. Qual é a recomendação médica formal a ser dada ao paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Afastamento obrigatório de esportes de contato e exercícios vigorosos por um período mínimo de 3 a 4 semanas a partir do início dos sintomas, devido ao risco de rotura esplênica espontânea ou traumática potencialmente fatal.',
      },
      {
        id: 'B',
        texto:
          'Liberação imediata para treinos pesados com protetor abdominal de espuma rígida, desde que esteja afebril há 24 horas.',
      },
      {
        id: 'C',
        texto:
          'Esplenectomia profilática eletiva laparoscópica antes de retornar a qualquer prática esportiva competitiva.',
      },
      {
        id: 'D',
        texto:
          'Afastamento permanente e definitivo de qualquer modalidade esportiva aeróbica pelo risco de estenose crônica da veia porta.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A rotura esplênica (espontânea ou decorrente de trauma abdominal leve/moderado) é a complicação aguda mais temida e a principal causa de morte diretamente relacionada à Mononucleose Infecciosa em adolescentes e jovens sadios. Ela ocorre quase invariavelmente nas primeiras 3 a 4 semanas a partir do início dos sintomas, momento em que o baço sofre hiperplasia linfoide maciça com infiltrado mononuclear na cápsula e trabéculas, tornando a cápsula esplênica extremamente frágil e distendida. Por isso, a SBP e as sociedades internacionais recomendam suspender esportes de contato, levantamento de peso e atividades extenuantes por no mínimo 3 a 4 semanas (ou até a regressão clínica e ultrassonográfica comprovada da esplenomegalia).',
    comentariosAlternativas: {
      A: 'Correta. Restrição de esportes de contato por pelo menos 3 a 4 semanas para prevenir rotura esplênica aguda.',
      B: 'Incorreta. Protetores abdominais não eliminam o risco de aumento pressórico e rotura capsular durante treinos vigorosos.',
      C: 'Incorreta. Esplenectomia profilática é totalmente contraindicada; a esplenomegalia é autolimitada e regride com a cura do quadro.',
      D: 'Incorreta. O afastamento é transitório (cerca de 1 mês) e o paciente pode retomar todas as atividades normalmente após recuperação total.',
    },
  },
  {
    id: 'ped-exant-034',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Mononucleose Infecciosa - Uso de Corticosteroides',
    isRevisao: false,
    enunciado:
      'Em qual das seguintes situações clínicas o uso de corticosteroides sistêmicos (ex.: Prednisona ou Dexametasona) está estritamente indicado na abordagem terapêutica da Mononucleose Infecciosa na infância ou adolescência?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Obstrução iminente das vias aéreas superiores causada por hipertrofia amigdaliana volumosa e edema de faringe ("kissing tonsils").',
      },
      {
        id: 'B',
        texto:
          'Em todos os pacientes com diagnóstico sorológico confirmado de mononucleose, a fim de diminuir o tempo de febre.',
      },
      {
        id: 'C',
        texto:
          'Para prevenir a soroconversão e erradicar o vírus do estado de latência dos linfócitos B.',
      },
      {
        id: 'D',
        texto:
          'Exclusivamente na presença de exantema desencadeado por amoxicilina, associado a anti-histamínicos orais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A mononucleose infecciosa é uma afecção viral autolimitada e seu manejo habitual é puramente sintomático e de suporte (repouso, hidratação e analgésicos). O uso de corticosteroides sistêmicos NÃO é indicado de rotina (pois não altera a evolução viral e pode aumentar o risco de superinfecções bacterianas). O corticoide fica reservado para complicações específicas e graves com risco de morte: 1) Obstrução aguda de vias aéreas por hipertrofia linfoide das tonsilas palatinas/faríngeas ("tonsilas que se tocam"); 2) Anemia hemolítica autoimune grave; 3) Trombocitopenia imune grave com sangramentos ativos; 4) Complicações neurológicas severas (encefalite, síndrome de Guillain-Barré).',
    comentariosAlternativas: {
      A: 'Correta. A obstrução mecânica iminente de vias aéreas é a principal indicação emergencial de corticoterapia na mononucleose.',
      B: 'Incorreta. Não se usa corticoide de rotina na mononucleose leve ou não complicada.',
      C: 'Incorreta. Corticosteroides não erradicam o EBV nem impedem a latência viral.',
      D: 'Incorreta. O exantema pós-amoxicilina é autolimitado e regride espontaneamente com a suspensão do antibiótico.',
    },
  },
  {
    id: 'ped-exant-035',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Síndrome Mão-Pé-Boca - Enterovírus A71 e Complicações',
    isRevisao: false,
    enunciado:
      'Lactente de 16 meses é levado à emergência pediátrica com quadro clínico de Doença Mão-Pé-Boca (vesículas orais ulceradas dolorosas e pápulo-vesículas em palmas e plantas). No 3º dia de doença, a mãe nota que a criança desenvolveu tremores involuntários de extremidades, sobressaltos frequentes (mioclonias), marcha atáxica e taquicardia desproporcional à febre. Qual agente etiológico da Síndrome Mão-Pé-Boca está classicamente associado a essas manifestações neurológicas graves e risco de edema pulmonar neurogênico fulminante?',
    alternativas: [
      {
        id: 'A',
        texto: 'Enterovírus A71 (EV-A71).',
      },
      {
        id: 'B',
        texto: 'Coxsackievírus B3.',
      },
      {
        id: 'C',
        texto: 'Herpes Vírus Humano tipo 8.',
      },
      {
        id: 'D',
        texto: 'Parvovírus B19 subtipo 2.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Embora o Coxsackievírus A16 seja o agente mais comum das formas típicas e benignas da Doença Mão-Pé-Boca, o Enterovírus A71 (EV-A71) é notório por provocar surtos com alta neurovirulência e gravidade. O EV-A71 possui neurotropismo pelo tronco encefálico, podendo causar rombencefalite, mioclonias, convulsões, meningite asséptica, ataxia e colapso cardiopulmonar agudo mediado por edema pulmonar neurogênico de evolução fulminante. A detecção de mioclonias ou tremores em crianças com síndrome mão-pé-boca é sinal de alarme para complicação neurológica por EV-A71.',
    comentariosAlternativas: {
      A: 'Correta. O Enterovírus A71 causa complicações graves do SNC (encefalite de tronco e edema pulmonar neurogênico).',
      B: 'Incorreta. Coxsackie B é mais associado à pleurodinia (doença de Bornholm) e miocardite/pericardite neonatal.',
      C: 'Incorreta. HHV-8 causa o Sarcoma de Kaposi.',
      D: 'Incorreta. Parvovírus B19 não causa vesículas palmoplantares nem lesão de tronco encefálico.',
    },
  },
  {
    id: 'ped-exant-036',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Síndrome Mão-Pé-Boca - Coxsackie A6 e Onicomadese',
    isRevisao: false,
    enunciado:
      'Criança de 2 anos apresentou quadro exuberante de Doença Mão-Pé-Boca com lesões bolhosas extensas periorais, em tronco e extremidades. Quatro semanas após a recuperação completa das lesões cutâneas, os pais procuram o pediatra assustados porque várias unhas das mãos e dos pés da criança começaram a se descolar da base proximal e cair de forma indolor, sem sinais flogísticos periungueais. O fenômeno descrito e a cepa viral emergente frequentemente implicada são:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Onicomadese (desprendimento proximal da lâmina ungueal); cepa de Coxsackievírus A6.',
      },
      {
        id: 'B',
        texto:
          'Onicomicose fúngica aguda por Candida albicans; cepa de Enterovírus D68.',
      },
      {
        id: 'C',
        texto:
          'Panarício herpético recidivante; Herpes Vírus Simples tipo 2.',
      },
      {
        id: 'D',
        texto:
          'Paroníquia estafilocócica necrótica; Staphylococcus epidermidis.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A onicomadese (descolamento e queda indolor da lâmina ungueal a partir da matriz proximal da unha) e as linhas de Beau (depressões horizontais na lâmina ungueal) são alterações tardias bem documentadas que surgem de 4 a 8 semanas após a infecção por enterovírus, decorrentes de parada temporária da matriz ungueal durante a fase aguda da doença. Esse fenômeno e quadros atípicos mais extensos ("eczema coxsackium") têm sido amplamente associados a cepas variantes de Coxsackievírus A6 (CVA6). O curso é benigno e o crescimento ungueal regenera completamente a unha em alguns meses.',
    comentariosAlternativas: {
      A: 'Correta. A onicomadese é complicação tardia e benigna associada principalmente a infecções por Coxsackievírus A6.',
      B: 'Incorreta. Não se trata de infecção fúngica; não há necessidade de antifúngicos tópicos ou orais.',
      C: 'Incorreta. Panarício herpético é doloroso, inflamatório e localizado na polpa digital de um único dedo.',
      D: 'Incorreta. Não é uma infecção bacteriana supurativa (paroníquia requer eritema e drenagem de pus).',
    },
  },
  {
    id: 'ped-exant-037',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Síndrome Mão-Pé-Boca vs Herpangina',
    isRevisao: false,
    enunciado:
      'Lactente de 2 anos apresenta febre súbita de 39 °C, recusa alimentar importante e vômitos. À oroscopia, observam-se pequenas vesículas e úlceras esbranquiçadas com halo eritematoso localizadas exclusivamente nos pilares amigdalianos anteriores, úvula e palato mole posterior. Não há lesões na mucosa jugal, gengivas, língua, lábios, palmas ou plantas. A hipótese diagnóstica é:',
    alternativas: [
      {
        id: 'A',
        texto: 'Herpangina.',
      },
      {
        id: 'B',
        texto: 'Gengivoestomatite herpética primária.',
      },
      {
        id: 'C',
        texto: 'Síndrome Mão-Pé-Boca clássica.',
      },
      {
        id: 'D',
        texto: 'Faringoamigdalite estreptocócica pultácea.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Herpangina, também causada por enterovírus (como os Coxsackievírus do grupo A), distingue-se da gengivoestomatite herpética e da síndrome mão-pé-boca pela localização estrita de suas lesões na orofaringe posterior: pilares amigdalianos anteriores, úvula, palato mole posterior e parede posterior da faringe. Na herpangina, a cavidade oral anterior (gengivas, mucosa jugal, lábios e língua) é poupada e NÃO há lesões cutâneas periféricas em mãos e pés. A gengivoestomatite herpética, por sua vez, acomete preferencialmente a cavidade oral anterior com gengivite friável e sangrante.',
    comentariosAlternativas: {
      A: 'Correta. Herpangina: vesículas/úlceras estritamente confinadas à orofaringe posterior (úvula, palato mole e pilares amigdalianos).',
      B: 'Incorreta. Na gengivoestomatite por HSV-1 as lesões predominam na gengiva, lábios e cavidade anterior, sangrando com facilidade.',
      C: 'Incorreta. Na síndrome mão-pé-boca há vesículas concomitantes em mãos e pés, além de lesões na boca anterior e língua.',
      D: 'Incorreta. A faringoamigdalite estreptocócica cursa com exsudato purulento nas amígdalas, sem vesículas.',
    },
  },
  {
    id: 'ped-exant-038',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Escarlatina - Diagnóstico Clínico e Bacteriológico',
    isRevisao: false,
    enunciado:
      'Menina de 7 anos apresenta febre alta de início abrupto, calafrios, dor abdominal e odinofagia intensa há 24 horas. O exame da orofaringe mostra amígdalas hipertrofiadas, hiperemiadas e com pontos de exsudato purulento. Na pele, exantema micropapular eritematoso difuso que branqueia à pressão e confere aspereza ao toque ("lixa"). Foi realizado teste rápido imunocromatográfico para detecção de antígeno de Streptococcus pyogenes (Streptotest), com resultado positivo. Sobre o Streptococcus pyogenes causador da escarlatina, assinale a afirmação correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se do Streptococcus beta-hemolítico do Grupo A de Lancefield, que adquire a capacidade de produzir exotoxinas pirogênicas (eritrogênicas) através de conversão lisogênica mediada por bacteriófagos.',
      },
      {
        id: 'B',
        texto:
          'Trata-se de um bacilo Gram-negativo anaeróbio estrito esporulado produtor de endotoxina lipídica termoestável.',
      },
      {
        id: 'C',
        texto:
          'A infecção confere imunidade permanente definitiva contra todos os tipos de estreptococos e novos episódios de escarlatina são biologicamente impossíveis.',
      },
      {
        id: 'D',
        texto:
          'O teste rápido antigênico positivo dispensa tratamento antibiótico específico, visto que a escarlatina é sempre mediada por imunocomplexos virais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Streptococcus pyogenes é um coco Gram-positivo agrupado em cadeias curtas, classificado como estreptococo beta-hemolítico do Grupo A de Lancefield. As cepas causadoras de escarlatina expressam exotoxinas pirogênicas estreptocócicas (SpeA, SpeB e SpeC), codificadas por genes introduzidos no genoma bacteriano por bacteriófagos lisogênicos. Como existem diferentes tipos sorológicos dessas toxinas pirogênicas (A, B e C), um mesmo indivíduo pode apresentar mais de um episódio de escarlatina ao longo da vida se for infectado por uma cepa produtora de um tipo toxigênico diferente.',
    comentariosAlternativas: {
      A: 'Correta. Streptococcus beta-hemolítico do Grupo A com produção de exotoxinas eritrogênicas mediadas por bacteriófagos.',
      B: 'Incorreta. É um coco Gram-positivo em cadeias, não um bacilo Gram-negativo anaeróbio.',
      C: 'Incorreta. A imunidade antitoxina é tipo-específica; o indivíduo pode ter episódios futuros se exposto a toxinas pirogênicas antigênicas distintas.',
      D: 'Incorreta. A escarlatina é uma infecção bacteriana ativa tratada prioritariamente com penicilina ou amoxicilina.',
    },
  },
  {
    id: 'ped-exant-039',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Escarlatina - Escolha Antimicrobiana e Alergia à Penicilina',
    isRevisao: false,
    enunciado:
      'Uma criança de 8 anos com diagnóstico de escarlatina possui histórico comprovado de anafilaxia grave à Penicilina (urticária generalizada aguda com broncoespasmo e hipotensão aos 4 anos). Qual é a opção antimicrobiana oral de primeira linha recomendada para erradicar o Streptococcus pyogenes e prevenir a Febre Reumática nesse paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Azitromicina, Claritromicina ou Clindamicina.',
      },
      {
        id: 'B',
        texto:
          'Cefalexina em dose padrão de 50 mg/kg/dia.',
      },
      {
        id: 'C',
        texto:
          'Amoxicilina combinada com clavulanato de potássio.',
      },
      {
        id: 'D',
        texto:
          'Sulfametoxazol-Trimetoprima (Co-trimoxazol) por 10 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Em pacientes com alergia grave (anafilaxia, angioedema ou reação mediada por IgE) a penicilinas, todos os betalactâmicos (incluindo cefalosporinas) devem ser evitados. Nesses casos, os antimicrobianos recomendados pelas diretrizes da American Heart Association (AHA) e Sociedade Brasileira de Pediatria (SBP) são os macrolídeos orais (Azitromicina 12 mg/kg/dia por 5 dias ou Claritromicina 15 mg/kg/dia por 10 dias) ou a Clindamicina (20 mg/kg/dia dividida a cada 8h por 10 dias). O sulfametoxazol-trimetoprima (Bactrim) NÃO erradica o Streptococcus pyogenes da orofaringe e é contraindicado para tratar faringite estreptocócica e escarlatina.',
    comentariosAlternativas: {
      A: 'Correta. Macrolídeos (Azitromicina/Claritromicina) ou Clindamicina são escolhas de eleição em anafilaxia prévia a betalactâmicos.',
      B: 'Incorreta. Cefalosporinas são contraindicadas na presença de reações anafiláticas imediatas por risco de reatividade cruzada.',
      C: 'Incorreta. Amoxicilina é uma penicilina e causaria novo choque anafilático potencialmente fatal.',
      D: 'Incorreta. Sulfas não erradicam o estreptococo beta-hemolítico da orofaringe e não previnem a Febre Reumática.',
    },
  },
  {
    id: 'ped-exant-040',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Escarlatina vs Doença de Kawasaki',
    isRevisao: false,
    enunciado:
      'Tanto na Escarlatina quanto na Doença de Kawasaki, pode ser observado o achado característico da "língua em framboesa / morango". Qual conjunto de características clínicas permite diferenciar com precisão e rapidez a Doença de Kawasaki da Escarlatina na fase aguda?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Na Doença de Kawasaki há hiperemia conjuntival bulbar bilateral não exsudativa, eritema labial com fissuras sangrantes e edema indurado de mãos e pés, enquanto na Escarlatina predominam amigdalite pultácea purulenta e exantema micropapular em lixa com linhas de Pastia.',
      },
      {
        id: 'B',
        texto:
          'A Escarlatina não responde à penicilina, necessitando obrigatoriamente de imunoglobulina humana intravenosa.',
      },
      {
        id: 'C',
        texto:
          'Na Doença de Kawasaki o exantema é exclusivamente folicular pruriginoso e não há febre em nenhum momento.',
      },
      {
        id: 'D',
        texto:
          'O Sinal de Filatow ocorre apenas na Doença de Kawasaki, nunca sendo observado na Escarlatina.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A diferenciação entre Escarlatina e Doença de Kawasaki é uma das cobranças mais tradicionais em provas de pediatria:\n- Escarlatina: infecção bacteriana aguda da faringe com febre de início súbito, faringoamigdalite purulenta exsudativa, pele em lixa, Linhas de Pastia (flexuras) e Sinal de Filatov (máscara de Filatov com palidez perioral). Responde dramaticamente à penicilina em 24-48h.\n- Doença de Kawasaki: vasculite sistêmica com febre persistente ≥ 5 dias, conjuntivite bulbar bilateral sem pus, queilite com fissuras hemorrágicas nos lábios, edema indurado e eritema em mãos e pés e ausência de resposta a antibióticos comuns.',
    comentariosAlternativas: {
      A: 'Correta. Distinção semiológica clássica entre vasculite de Kawasaki e a síndrome toxigênica da Escarlatina estreptocócica.',
      B: 'Incorreta. A escarlatina responde com excelência à penicilina em 24 a 48 horas.',
      C: 'Incorreta. A febre alta e persistente (≥ 5 dias) é critério obrigatório da Doença de Kawasaki.',
      D: 'Incorreta. O Sinal de Filatow (palidez perioral) é sinal clássico da Escarlatina.',
    },
  },
  {
    id: 'ped-exant-041',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Doença de Kawasaki - Marcadores Laboratoriais',
    isRevisao: false,
    enunciado:
      'Qual das seguintes alterações laboratoriais é considerada típica e altamente associada à Doença de Kawasaki durante a transição da fase aguda para a fase subaguda (a partir da segunda semana de evolução)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Plaquetose acentuada (trombocitose frequentemente > 500.000 a 1.000.000/mm³).',
      },
      {
        id: 'B',
        texto:
          'Trombocitopenia grave (< 20.000/mm³) com tempo de protrombina alargado.',
      },
      {
        id: 'C',
        texto:
          'Hipogamaglobulinemia profunda de todas as subclasses de imunoglobulinas.',
      },
      {
        id: 'D',
        texto:
          'Normalização imediata do VHS e PCR nas primeiras 48 horas mesmo sem medicação.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Na Doença de Kawasaki, a contagem de plaquetas na primeira semana pode estar normal ou discretamente elevada, mas a partir do 7º ao 10º dia (início da fase subaguda) ocorre uma reação trombocitária reativa marcante mediada pela interleucina-6, elevando as plaquetas frequentemente para valores entre 500.000 e 1.000.000/mm³ (podendo ultrapassar 1,5 milhão em casos mais graves). A trombocitose maciça persiste por semanas e é um marcador inflamatório quase constante da fase subaguda de Kawasaki.',
    comentariosAlternativas: {
      A: 'Correta. A trombocitose acentuada na segunda/terceira semana é a alteração hematológica mais emblemática da Doença de Kawasaki.',
      B: 'Incorreta. A trombocitopenia é rara no início do Kawasaki e, quando presente, associa-se à síndrome de ativação macrofágica e pior prognóstico.',
      C: 'Incorreta. Ocorre intensa hipergamaglobulinemia policlonal inflamatória, e não hipogamaglobulinemia.',
      D: 'Incorreta. As provas de fase aguda (VHS e PCR) permanecem muito elevadas por 4 a 6 semanas se a doença não for tratada precocemente.',
    },
  },
  {
    id: 'ped-exant-042',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Doença de Kawasaki - Classificação dos Aneurismas Coronarianos',
    isRevisao: false,
    enunciado:
      'Em lactente com Doença de Kawasaki, o ecocardiograma com mapeamento de fluxo em cores realizado no 14º dia detecta dilatação luminal sacular na artéria coronária descendente anterior com diâmetro interno de 9 mm e escore Z (Z-score) de +11,5. De acordo com a classificação de aneurismas coronários da American Heart Association (AHA), essa lesão é classificada como:',
    alternativas: [
      {
        id: 'A',
        texto: 'Aneurisma coronariano gigante.',
      },
      {
        id: 'B',
        texto: 'Dilatação coronariana discreta e transitória.',
      },
      {
        id: 'C',
        texto: 'Aneurisma coronariano pequeno.',
      },
      {
        id: 'D',
        texto: 'Fístula arteriovenosa coronariana congênita.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A AHA classifica o acometimento coronariano na Doença de Kawasaki conforme o Z-score ajustado para a superfície corpórea e o diâmetro absoluto em milímetros:\n1) Sem envolvimento: Z-score < +2;\n2) Ectasia ou dilatação: Z-score entre +2 e < +2,5;\n3) Aneurisma pequeno: Z-score entre +2,5 e < +5 (ou diâmetro < 5 mm em crianças);\n4) Aneurisma médio: Z-score entre +5 e < +10 (e diâmetro absoluto entre 5 e < 8 mm);\n5) Aneurisma GIGANTE ou volumoso: Z-score ≥ +10 ou diâmetro interno luminal ≥ 8 mm.\nO aneurisma gigante confere o maior risco de trombose intracoronária aguda, estenose secundária, infarto do miocárdio e morte súbita, exigindo anticoagulação associada (ex.: Varfarina ou HBPM) além do AAS.',
    comentariosAlternativas: {
      A: 'Correta. Z-score ≥ 10 ou diâmetro interno luminal ≥ 8 mm define aneurisma gigante com alto risco trombótico.',
      B: 'Incorreta. Ectasia simples cursa com Z-score < 2,5 e resolução em poucos meses.',
      C: 'Incorreta. Aneurisma pequeno tem Z-score < 5 e diâmetro < 5 mm.',
      D: 'Incorreta. Trata-se de vasculite adquirida com aneurisma pós-inflamatório, e não fístula arteriovenosa.',
    },
  },
  {
    id: 'ped-exant-043',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Mononucleose Infecciosa - Anticorpos Específicos do EBV',
    isRevisao: false,
    enunciado:
      'Em uma criança de 3 anos com suspeita clínica de Mononucleose Infecciosa (febre prolongada, hepatoesplenomegalia e amigdalite exsudativa), o teste de triagem de anticorpos heterófilos (Monoteste) resultou negativo. Qual é a justificativa imunológica para esse resultado e qual painel sorológico específico confirma o diagnóstico na fase aguda?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Crianças com menos de 4 anos de idade apresentam alta taxa de resultados falso-negativos para anticorpos heterófilos (sensibilidade de apenas 10-30%); a confirmação requer a dosagem de anticorpos específicos anti-VCA IgM (antígeno do capsídeo viral) positivos.',
      },
      {
        id: 'B',
        texto:
          'O resultado negativo descarta de forma irrefutável qualquer infecção viral por herpesvírus na faixa etária pediátrica.',
      },
      {
        id: 'C',
        texto:
          'A dosagem isolada de anticorpos anti-EBNA (antígeno nuclear) é o único teste positivo na primeira semana de primoinfecção aguda.',
      },
      {
        id: 'D',
        texto:
          'A imunodeficiência de linfócitos T congênita impede a produção de anticorpos heterófilos em lactentes hígidos normais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Os anticorpos heterófilos (detectados pelo Monoteste ou reação de Paul-Bunnell) são anticorpos IgM inespecíficos que aglutinam hemácias de carneiro ou cavalo. Embora sejam muito sensíveis e específicos em adolescentes e adultos (> 85%), eles apresentam baixíssima sensibilidade em crianças menores de 4 anos (até 80-90% de resultados falso-negativos por imaturidade na síntese de anticorpos heterófilos). Portanto, em pré-escolares e lactentes, o diagnóstico laboratorial definitivo exige o painel sorológico específico de anticorpos contra o EBV: 1) Anti-VCA IgM: positivo na fase aguda (marcador definitivo de infecção recente); 2) Anti-VCA IgG: surge na fase aguda e persiste pela vida inteira; 3) Anti-EBNA IgG: só surge semanas a meses após o quadro (marcador de infecção pregressa).',
    comentariosAlternativas: {
      A: 'Correta. Crianças < 4 anos não produzem anticorpos heterófilos confiavelmente; anti-VCA IgM é o padrão-ouro na primoinfecção aguda.',
      B: 'Incorreta. O Monoteste negativo em pré-escolares nunca descarta a mononucleose.',
      C: 'Incorreta. Anti-EBNA IgG só surge tardiamente (2 a 4 meses após a infecção), indicando fase crônica/passada.',
      D: 'Incorreta. É uma imaturidade fisiológica do sistema imune infantil, e não imunodeficiência congênita.',
    },
  },
  {
    id: 'ped-exant-044',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Síndrome Mão-Pé-Boca - Manejo e Hidratação',
    isRevisao: false,
    enunciado:
      'Lactente de 15 meses é trazido à emergência por recusa alimentar completa há 36 horas, com choro inconsolável ao tentar engolir líquidos. Ao exame físico: mucosas secas, olhos encovados, saliva espessa, oligúria, além de múltiplas úlceras orais dolorosas na língua e lábios e vesículas em mãos e pés. Qual é a conduta médica prioritária e adequada para esse paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Hidratação endovenosa imediata com solução isotônica associada a analgesia escalonada potente e retorno gradual à oferta oral com líquidos frios e alimentos pastosos não ácidos.',
      },
      {
        id: 'B',
        texto:
          'Prescrição de Aciclovir intravenoso em alta dose por 14 dias para erradicar o enterovírus das mucosas.',
      },
      {
        id: 'C',
        texto:
          'Início imediato de Penicilina Cristalina intravenosa e bochechos com clorexidina alcoólica a 2%.',
      },
      {
        id: 'D',
        texto:
          'Cauterização química das úlceras orais com nitrato de prata sólido a 10% sob anestesia tópica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A principal complicação da Doença Mão-Pé-Boca na primeira infância é a DESIDRATAÇÃO aguda decorrente da disfagia e odinofagia graves provocadas pelas vesículas ulceradas na boca. Não existe antiviral específico contra enterovírus. A conduta primordial consiste em: 1) Correção rápida do déficit hídrico e desidratação (com hidratação venosa isotônica se houver desidratação moderada a grave com recusa oral persistente); 2) Analgesia sistêmica adequada (paracetamol, ibuprofeno ou analgésicos mais potentes); 3) Orientações alimentares: ofertar líquidos frios/gelados e alimentos pastosos e brandos, evitando alimentos ácidos, condimentados, quentes ou salgados que agravam a dor.',
    comentariosAlternativas: {
      A: 'Correta. Controle da dor e hidratação adequada constituem o pilar absoluto do manejo da síndrome mão-pé-boca com disfagia grave.',
      B: 'Incorreta. O Aciclovir atua na DNA polimerase dos herpesvírus e não tem qualquer atividade sobre enterovírus (vírus RNA).',
      C: 'Incorreta. Enterovirose não responde a penicilina e clorexidina alcoólica causa dor excruciante nas lesões de mucosa.',
      D: 'Incorreta. Cauterização com nitrato de prata é lesiva, agressiva e proscrita em úlceras virais pediátricas.',
    },
  },
  {
    id: 'ped-exant-045',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Escarlatina - Diagnóstico Diferencial de Faringites',
    isRevisao: false,
    enunciado:
      'Menino de 2 anos apresenta coriza nasal, tosse produtiva, conjuntivite discreta, febre baixa (37,9 °C) e hiperemia de orofaringe com pequenos pontos eritematosos e úlceras milimétricas. A mãe indaga se pode ser escarlatina e solicita amoxicilina imediata. O médico explica que o diagnóstico mais provável é de etiologia viral e que faringite estreptocócica e escarlatina são muito raras nessa faixa etária. Qual é o fundamento epidemiológico e imunológico dessa afirmação?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A faringite estreptocócica e a escarlatina acometem predominantemente crianças em idade escolar (5 a 15 anos); em menores de 3 anos a expressão de receptores celulares nasofaríngeos para o Streptococcus pyogenes é muito baixa e os quadros faríngeos com tosse e coriza são eminentemente virais.',
      },
      {
        id: 'B',
        texto:
          'Lactentes menores de 3 anos têm anticorpos maternos transplacentários protetores que duram até os 4 anos completos.',
      },
      {
        id: 'C',
        texto:
          'O Streptococcus pyogenes só sobrevive em meios biológicos de crianças com dentição permanente completa.',
      },
      {
        id: 'D',
        texto:
          'A escarlatina só ocorre em indivíduos que já tiveram varicela e sarampo previamente.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A faringoamigdalite bacteriana estreptocócica (GAS) e a Escarlatina têm seu pico epidemiológico bem estabelecido na faixa etária entre 5 e 15 anos (crianças em idade escolar). Em menores de 3 anos, o Streptococcus pyogenes raramente causa faringite clássica porque os tecidos da orofaringe nessa idade possuem menor densidade de receptores específicos para adesão do estreptococo e de suas proteínas de superfície (proteína M). Além disso, a presença de sintomas catarrais (tosse, coriza, conjuntivite, diarreia) possui alto valor preditivo negativo para infecção estreptocócica, apontando fortemente para viroses respiratórias agudas.',
    comentariosAlternativas: {
      A: 'Correta. A faringoamigdalite estreptocócica é rara em < 3 anos; sintomas de via aérea superior (tosse/coriza) indicam etiologia viral.',
      B: 'Incorreta. Anticorpos maternos transferidos na gestação decaem expressivamente entre 6 e 9 meses de vida.',
      C: 'Incorreta. A dentição nada tem a ver com a virulência estreptocócica.',
      D: 'Incorreta. Não existe interdependência causal entre varicela/sarampo e escarlatina.',
    },
  },
  {
    id: 'ped-exant-046',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Doença de Kawasaki - Diagnóstico Precoce e Prevenção de Sequelas',
    isRevisao: false,
    enunciado:
      'Sobre a "janela terapêutica ideal" para a administração de Imunoglobulina Humana Intravenosa (IGIV) na Doença de Kawasaki, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A administração da IGIV deve ocorrer preferencialmente até o 10º dia do início da febre para reduzir a taxa de lesões e aneurismas coronarianos de 20-25% para menos de 4-5%.',
      },
      {
        id: 'B',
        texto:
          'A IGIV é contraindicada nos primeiros 10 dias de febre, devendo ser aguardada a descamação dos dedos para sua infusão segura.',
      },
      {
        id: 'C',
        texto:
          'Após o 10º dia de febre, a IGIV perde toda a sua ação biológica e é expressamente proibida, mesmo que a criança permaneça febril com PCR elevado.',
      },
      {
        id: 'D',
        texto:
          'A IGIV tem apenas ação antipirética temporária, não demonstrando qualquer efeito na redução de lesões cardiovasculares.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O objetivo primário do tratamento da Doença de Kawasaki é prevenir aneurismas e ectasias de artérias coronárias. Ensaios clínicos consagrados demonstram que a administração de IGIV (2 g/kg) associada ao AAS nos primeiros 10 dias de doença reduz o risco de aneurismas de artérias coronárias de ~25% para < 5%. Observação clínica crucial: se o paciente for diagnosticado APÓS o 10º dia de febre, a IGIV AINDA DEVE SER ADMINISTRADA se houver persistência de febre sem outra causa explicável OU se houver evidência de inflamação sistêmica contínua (PCR/VHS elevados) ou aneurismas coronarianos já detectados no ecocardiograma.',
    comentariosAlternativas: {
      A: 'Correta. A janela dos primeiros 10 dias é o período crucial para prevenção máxima de danos coronarianos permanentes.',
      B: 'Incorreta. Atrasar a medicação até a fase descamativa aumenta criticamente a chance de sequelas cardíacas graves.',
      C: 'Incorreta. Pacientes após o 10º dia ainda devem receber IGIV se mantiverem febre ou provas de inflamação ativas.',
      D: 'Incorreta. A IGIV possui mecanismo anti-inflamatório e imunomodulador vascular comprovadamente protetor sobre as coronárias.',
    },
  },
  {
    id: 'ped-exant-047',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Mononucleose Infecciosa - Fatores Desencadeantes do Exantema',
    isRevisao: false,
    enunciado:
      'Adolescente de 14 anos com mononucleose infecciosa por EBV desenvolveu exantema máculopapular eritematoso difuso após receber amoxicilina. A mãe pergunta se o filho se tornou alérgico para sempre à penicilina e se nunca mais poderá receber derivados penicilínicos na vida. Qual é a orientação médica correta baseada na fisiopatologia da doença?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Não se trata de uma alergia verdadeira permanente mediada por IgE; é uma reação imunomediada transitória induzida pela interação biológica do vírus EBV com a aminopenicilina, não contraindicando o uso futuro de penicilinas após a cura completa da virose.',
      },
      {
        id: 'B',
        texto:
          'O adolescente desenvolveu alergia definitiva grave mediada por IgE e deverá portar bracelete de alerta médico para choque anafilático permanente.',
      },
      {
        id: 'C',
        texto:
          'O exantema é prova de resistência bacteriana secundária mediada por betalactamase de espectro estendido.',
      },
      {
        id: 'D',
        texto:
          'O quadro é uma forma precoce de Síndrome de Stevens-Johnson, exigindo internação imediata em centro de queimados.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O exantema associado ao uso de aminopenicilinas (como ampicilina e amoxicilina) na Mononucleose Infecciosa é um fenômeno imunoalérgico temporário resultante da hiperreatividade imune e da ativação maciça de linfócitos T promovidas pelo vírus Epstein-Barr em conjunto com a formação transitória de anticorpos humorais anti-aminopenicilina. Ele NÃO representa alergia verdadeira permanente mediada por IgE. Assim que a infecção por EBV se resolve, a imensa maioria desses pacientes (> 90%) tolera perfeitamente novas prescrições de penicilinas no futuro, sem necessidade de testes alérgicos de rotina.',
    comentariosAlternativas: {
      A: 'Correta. Reação imune transitória induzida pelo EBV que não impede o uso futuro de derivados de penicilina.',
      B: 'Incorreta. Não é uma hipersensibilidade tipo I mediada por IgE; não há risco aumentado de choque anafilático futuro.',
      C: 'Incorreta. A etiologia é viral e não bacteriana; o termo resistência a betalactamase não se aplica a reações cutâneas virais.',
      D: 'Incorreta. É um exantema maculopapular morbiliforme benigno sem descolamento de pele ou necrose epidérmica.',
    },
  },
  {
    id: 'ped-exant-048',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Síndrome Mão-Pé-Boca - Transmissibilidade e Isolamento',
    isRevisao: false,
    enunciado:
      'Sobre a transmissão e período de contágio do Coxsackievírus na Doença Mão-Pé-Boca em creches e escolas infantis, assinale a orientação epidemiológica correta aos cuidadores e educadores:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A transmissão ocorre por gotículas respiratórias e contato fecal-oral; a excreção viral nas fezes pode persistir por várias semanas após a resolução completa dos sintomas, reforçando a importância da higienização rigorosa das mãos e superfícies.',
      },
      {
        id: 'B',
        texto:
          'A transmissão é estritamente vetorial por picada de flebotomíneos, não havendo contágio entre pessoas.',
      },
      {
        id: 'C',
        texto:
          'Assim que as vesículas da pele desaparecem, o vírus é 100% erradicado do organismo e as fezes deixam imediatamente de ser infectantes.',
      },
      {
        id: 'D',
        texto:
          'O isolamento escolar domiciliar deve ser mantido obrigatoriamente por 60 dias ininterruptos após o término da febre.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Os enterovírus (incluindo o Coxsackievírus) possuem como principais vias de disseminação o contato fecal-oral (troca de fraldas, mãos contaminadas, fômites) e gotículas de secreções respiratórias/orais. A taxa de transmissão é máxima durante a primeira semana de sintomas (fase aguda com úlceras orais ativas e febre). No entanto, o vírus continua sendo eliminado e excretado nas fezes por 4 a 8 semanas após a recuperação clínica, o que explica os frequentes surtos secundários em creches quando a lavagem de mãos e a higiene de fraldários são negligenciadas. O retorno à escola é liberado assim que a criança estiver sem febre há 24h e com as lesões orais cicatrizadas.',
    comentariosAlternativas: {
      A: 'Correta. Eliminação fecal prolongada por semanas após a cura clínica requer lavagem frequente das mãos em creches.',
      B: 'Incorreta. Enterovírus não são transmitidos por artrópodes ou flebótomos.',
      C: 'Incorreta. A excreção fecal do vírus persiste por semanas a meses mesmo com a pele totalmente sã.',
      D: 'Incorreta. Afastar a criança por 60 dias é inexequível e desnecessário; o retorno ocorre após a resolução da fase aguda febril e melhora clínica.',
    },
  },
  {
    id: 'ped-exant-049',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Escarlatina - Sinais Patognomônicos e Provas Inflamatórias',
    isRevisao: false,
    enunciado:
      'Durante a semiologia dermatológica de um pré-escolar com suspeita de Escarlatina, o médico pesquisa linhas eritematopurpúricas que se intensificam nas pregas de flexão cutâneas (axilas, cotovelos e virilhas) decorrentes da fragilidade vascular induzida pela toxina estreptocócica. Essas linhas recebem a denominação epônima de:',
    alternativas: [
      {
        id: 'A',
        texto: 'Linhas de Pastia.',
      },
      {
        id: 'B',
        texto: 'Linhas de Blaschko.',
      },
      {
        id: 'C',
        texto: 'Linhas de Beau.',
      },
      {
        id: 'D',
        texto: 'Sinal de Köbner.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Sinal de Pastia (ou Linhas de Pastia) é um achado semiológico clássico da Escarlatina caracterizado pela confluência e acentuação linear hemorrágica do exantema micropapular nas áreas de dobras flexurais da pele (fossa antecubital, pregas axilares, região inguinal e pregas poplíteas). Ao contrário do exantema difuso do restante do corpo, as Linhas de Pastia NÃO desaparecem à digitopressão por decorrerem de dano capilar e microextravasamento eritrocitário decorrente das toxinas pirogênicas estreptocócicas. Podem permanecer visíveis mesmo após o desaparecimento do exantema generalizado.',
    comentariosAlternativas: {
      A: 'Correta. Linhas de Pastia: acentuação do exantema nas dobras de flexão resistente à digitopressão.',
      B: 'Incorreta. Linhas de Blaschko refletem vias embriológicas de migração celular cutânea observadas em mosaicismos genéticos.',
      C: 'Incorreta. Linhas de Beau são depressões transversais ungueais pós-estresse sistêmico grave.',
      D: 'Incorreta. Fenômeno de Köbner é o aparecimento de lesões isomórficas em áreas de trauma mecânico em psoríase e líquen plano.',
    },
  },
  {
    id: 'ped-exant-050',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Diagnóstico Diferencial Global das Doenças Exantemáticas',
    isRevisao: false,
    enunciado:
      'Uma questão de prova de residência médica resume as principais doenças exantemáticas pediátricas através de seus sinais semiológicos típicos. Correlacione a doença com seu respectivo achado marcante:\n\n1. Sarampo\n2. Rubéola\n3. Escarlatina\n4. Eritema Infeccioso\n5. Doença de Kawasaki\n\n( ) Sinal de Filatow (máscara de Filatow com palidez perioral).\n( ) Manchas de Koplik na mucosa jugal.\n( ) Fácies em "bochecha esbofeteada" e padrão rendilhado/reticulado.\n( ) Adenomegalia suboccipital dolorosa e Manchas de Forchheimer.\n( ) Hiperemia conjuntival bilateral não exsudativa e dilatação de artérias coronárias.\n\nA ordem correta de preenchimento, de cima para baixo, é:',
    alternativas: [
      {
        id: 'A',
        texto: '3 – 1 – 4 – 2 – 5.',
      },
      {
        id: 'B',
        texto: '1 – 3 – 4 – 2 – 5.',
      },
      {
        id: 'C',
        texto: '3 – 2 – 1 – 4 – 5.',
      },
      {
        id: 'D',
        texto: '2 – 1 – 5 – 4 – 3.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Revisão mnemônica definitiva das Doenças Exantemáticas para as provas de Residência Médica:\n- 3. Escarlatina: Sinal de Filatov (palidez perioral em contraste com rubor malar vivo) e Linhas de Pastia;\n- 1. Sarampo: Manchas de Koplik (patognomônicas na mucosa oral) e tosse/coriza/conjuntivite com fotofobia;\n- 4. Eritema Infeccioso: Sinal da bofetada facial e exantema rendilhado/reticulado recidivante ao calor;\n- 2. Rubéola: Linfonodomegalias suboccipitais/retroauriculares e petéquias no palato mole (Manchas de Forchheimer);\n- 5. Doença de Kawasaki: Vasculite com febre ≥ 5 dias, conjuntivite não purulenta, queilite e risco de aneurisma coronariano.\nPortanto, a sequência correta é 3 – 1 – 4 – 2 – 5.',
    comentariosAlternativas: {
      A: 'Correta. Associação perfeita dos 5 sinais patognomônicos/clássicos das doenças exantemáticas da infância.',
      B: 'Incorreta. Filatov é de escarlatina (3), não de sarampo (1).',
      C: 'Incorreta. Koplik é de sarampo (1) e Forchheimer é de rubéola (2).',
      D: 'Incorreta. Sequência cronológica e patológica incorreta.',
    },
  },
  {
    id: 'ped-exant-051',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Varicela - Polimorfismo Regional e Distribuição Centrípeta',
    isRevisao: false,
    enunciado:
      'Criança de 4 anos é atendida na UBS com queixa de febre moderada (38,2 °C) e lesões pruriginosas disseminadas há 3 dias. Ao exame dermatológico minucioso, observa-se que as lesões concentram-se predominantemente no tronco, face e couro cabeludo, com discreto acometimento das partes proximais dos membros e poupando palmas e plantas. Em uma mesma área cutânea do dorso, o pediatra identifica concomitantemente máculas eritematosas, pápulas, vesículas translúcidas ("gotas de orvalho sobre pétalas de rosa"), pústulas e crostas hemáticas. A respeito da distribuição e evolução clássica dessas lesões, assinale a afirmação correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Apresenta distribuição centrípeta com polimorfismo regional típico, decorrente de ondas sucessivas de viremia ao longo de vários dias.',
      },
      {
        id: 'B',
        texto:
          'Apresenta distribuição centrífuga monomórfica obrigatória, iniciando-se nas extremidades distais antes de atingir o couro cabeludo.',
      },
      {
        id: 'C',
        texto:
          'O acometimento inicial e predominante do couro cabeludo descarta categoricamente o Vírus Varicela-Zóster, sendo indicativo de escabiose secundária.',
      },
      {
        id: 'D',
        texto:
          'A presença de vesículas sobre base eritematosa contraindica o isolamento respiratório, pois a transmissão ocorre unicamente por contato direto com crostas secas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O exantema da varicela (catapora) é marcado por duas características semiológicas basilares: 1) Distribuição centrípeta (maior densidade de lesões na face, couro cabeludo e tronco, com menor envolvimento de extremidades distais); 2) Polimorfismo regional (coexistência simultânea de máculas, pápulas, vesículas límpidas, pústulas e crostas numa mesma região anatômica), resultante de múltiplos surtos de viremia que ocorrem em surtos espaçados ao longo de 3 a 5 dias. O couro cabeludo é precocemente e frequentemente acometido.',
    comentariosAlternativas: {
      A: 'Correta. Distribuição centrípeta (tronco/cabeça > membros distais) com polimorfismo regional decorrente das ondas virêmicas.',
      B: 'Incorreta. A distribuição é centrípeta (não centrífuga) e polimórfica (não monomórfica). A varíola apresentava lesões monomórficas centrífugas.',
      C: 'Incorreta. O acometimento do couro cabeludo e mucosas é um marco clássico que reforça o diagnóstico de varicela.',
      D: 'Incorreta. As crostas secas NÃO transmitem o vírus; a transmissão ocorre por aerossóis/gotículas e pelo líquido das vesículas ativas.',
    },
  },
  {
    id: 'ped-exant-052',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Varicela - Período de Transmissibilidade e Liberação Escolar',
    isRevisao: false,
    enunciado:
      'Menino de 5 anos desenvolveu varicela e está em isolamento domiciliar há 7 dias. A mãe comparece ao posto de saúde solicitando declaração médica para o retorno do filho às atividades na escola infantil. Ao examinar a criança, o médico constata que todas as lesões da pele, couro cabeludo e mucosas encontram-se exclusivamente na fase de crosta seca, sem nenhuma vesícula ou pústula úmida remanescente, e a criança está afebril há 48 horas. Qual é a conduta correta em relação ao período de transmissibilidade e liberação escolar?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Liberar o retorno escolar imediatamente, pois quando todas as lesões evoluem para crostas não há mais eliminação do vírus nem risco de contágio a terceiros.',
      },
      {
        id: 'B',
        texto:
          'Manter o isolamento obrigatório por mais 14 dias adicionais, pois as crostas descamativas continuam altamente infectantes por via aérea.',
      },
      {
        id: 'C',
        texto:
          'Exigir PCR sérico negativo para Vírus Varicela-Zóster antes de autorizar o contato com outras crianças da creche.',
      },
      {
        id: 'D',
        texto:
          'Indicar profilaxia domiciliar com aciclovir oral para todos os colegas de turma antes da liberação da criança.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O período de transmissibilidade da varicela estende-se desde 1 a 2 dias ANTES do surgimento das primeiras lesões cutâneas até que TODAS as lesões corporais tenham evoluído completamente para a fase de CROSTA seca (geralmente entre 5 e 7 dias após o início do exantema). As crostas secas não contêm vírus infectante viável. Portanto, constatada a ausência de vesículas ativas e que todas as lesões secaram em crostas, o paciente deixa de ser infectante e pode retornar com segurança às suas atividades escolares e sociais.',
    comentariosAlternativas: {
      A: 'Correta. Quando todas as lesões atingem o estágio de crostas, a transmissão cessa e a criança pode retornar à escola.',
      B: 'Incorreta. As crostas não transmitem o vírus varicela-zóster; a transmissão se dá por secreções respiratórias e fluido vesicular.',
      C: 'Incorreta. Não há qualquer indicação de PCR sérico para desisolamento em crianças imunocompetentes.',
      D: 'Incorreta. Não se faz aciclovir oral indiscriminado para contatos escolares de casos já convalescentes.',
    },
  },
  {
    id: 'ped-exant-053',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Varicela - Superinfecção Bacteriana e Choque Tóxico',
    isRevisao: false,
    enunciado:
      'Menina de 3 anos com varicela no 4º dia evolui com reaparecimento de febre elevada (39,8 °C), gemência, taquicardia persistente (FC: 170 bpm), tempo de enchimento capilar de 4 segundos e hipotensão arterial. No hemitórax direito, nota-se uma área de 10 cm com eritema violáceo, edema tenso, bolhas hemorrágicas e dor intensa desproporcional aos achados clínicos. Qual é a etiologia provável dessa complicação invasiva fulminante associada à varicela e a conduta imediata?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Infecção bacteriana invasiva necrotizante (fasciíte necrotizante / choque tóxico estreptocócico) por Streptococcus pyogenes (GAS); ressuscitação volêmica vigorosa, cobertura com Ceftriaxona/Oxacilina + Clindamicina e avaliação cirúrgica urgente para desbridamento.',
      },
      {
        id: 'B',
        texto:
          'Panencefalite esclerosante bacteriana; pulsoterapia com dexametasona e fenobarbital.',
      },
      {
        id: 'C',
        texto:
          'Evolução viral habitual e benigna da catapora que dispensa internação ou antimicrobianos sistêmicos.',
      },
      {
        id: 'D',
        texto:
          'Síndrome da imunodeficiência combinada grave; iniciar isolamento estéril definitivo e transfusão de plaquetas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A infecção de partes moles invasiva (fasciíte necrotizante e celulite extensa) e a Síndrome do Choque Tóxico Estreptocócico são complicações graves e potencialmente fatais da varicela, causadas pela invasão de Streptococcus pyogenes (Streptococcus do Grupo A - GAS) ou Staphylococcus aureus através das lesões de pele escoriadas pelo prurido. Sinais de alerta: dor intensa desproporcional ao exame, bolhas hemorrágicas, reaquecimento febril e choque séptico. A conduta exige ressuscitação hemodinâmica imediata, antibioticoterapia incluindo Clindamicina (pelo seu efeito supressor da síntese de toxinas bacterianas/efeito Eagle) e desbridamento cirúrgico de urgência dos tecidos necróticos.',
    comentariosAlternativas: {
      A: 'Correta. Fasciíte necrotizante por Streptococcus pyogenes pós-varicela; requer expansão volêmica, Clindamicina + betalactâmico e cirurgia rápida.',
      B: 'Incorreta. PEES é complicação neurológica tardia degenerativa do sarampo, não bacteriana aguda com choque.',
      C: 'Incorreta. A presença de hipotensão, má perfusão e dor excruciante configura emergência com risco iminente de óbito.',
      D: 'Incorreta. A quebra da barreira cutânea na varicela é o gatilho clássico em crianças previamente hígidas.',
    },
  },
  {
    id: 'ped-exant-054',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Varicela - Síndrome de Reye e Contraindicação do AAS',
    isRevisao: false,
    enunciado:
      'Lactente de 2 anos com quadro de varicela recebeu durante 4 dias consecutivos doses repetidas de ácido acetilsalicílico (AAS) prescritas inadvertidamente pelos pais para controle térmico. No 5º dia, a febre cede, porém a criança passa a apresentar vômitos incoercíveis em jato, agitação psicomotora intensa, letargia profunda progressiva que evolui rapidamente para coma. Os exames laboratoriais revelam: glicemia de 35 mg/dL (hipoglicemia severa), AST: 1.450 U/L, ALT: 1.820 U/L, tempo de protrombina muito alargado e hiperamonemia grave (amônia: 280 mcg/dL), SEM icterícia clínica visível (bilirrubina total normal). O diagnóstico provável é:',
    alternativas: [
      {
        id: 'A',
        texto: 'Síndrome de Reye.',
      },
      {
        id: 'B',
        texto: 'Hepatite autoimune tipo 1.',
      },
      {
        id: 'C',
        texto: 'Encefalite herpética primária por HSV-1.',
      },
      {
        id: 'D',
        texto: 'Doença de Wilson forma cerebelar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Síndrome de Reye é uma encefalopatia metabólica aguda associada à degeneração gordurosa microvesicular hepática (esteatose microvesicular sem icterícia), classicamente desencadeada pelo uso de salicilatos (AAS) durante infecções virais agudas na infância, principalmente Varicela e Influenza B. Caracteriza-se por vômitos intratáveis, hipoglicemia severa, elevação acentuada de aminotransferases (> 3 vezes o limite) e hiperamonemia maciça levando a edema cerebral hipertensivo e coma. Por esse motivo, o AAS é estritamente contraindicado para o manejo antitérmico na infância, especialmente em vigência de varicela e gripe.',
    comentariosAlternativas: {
      A: 'Correta. Síndrome de Reye: encefalopatia aguda + degeneração gordurosa hepática com hiperamonemia e hipoglicemia pós-AAS em varicela.',
      B: 'Incorreta. Hepatite autoimune cursa com icterícia importante, hipergamaglobulinemia e autoanticorpos (ANA/SMA).',
      C: 'Incorreta. Encefalite por HSV cursa com pleocitose liquórica e lesão em lobos temporais, sem a hiperamonemia e esteatose descritas.',
      D: 'Incorreta. Doença de Wilson manifesta-se tipicamente após os 5 a 6 anos com anéis de Kayser-Fleischer e ceruloplasmina baixa.',
    },
  },
  {
    id: 'ped-exant-055',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Varicela - Ataxia Cerebelar Aguda',
    isRevisao: false,
    enunciado:
      'Menino de 5 anos, que teve varicela típica autolimitada há cerca de 10 dias (com todas as lesões já cicatrizadas em crostas), é levado à emergência porque hoje acordou cambaleante, com incapacidade de se manter em pé sem apoio, marcha em base alargada, dismetria nos membros superiores ao tentar alcançar brinquedos e fala escandida. Não apresenta febre, cefaleia, rigidez de nuca ou rebaixamento do nível de consciência. A tomografia de crânio é normal. O diagnóstico neurológico pós-infeccioso mais provável é:',
    alternativas: [
      {
        id: 'A',
        texto: 'Ataxia cerebelar aguda pós-varicela (cerebelite aguda).',
      },
      {
        id: 'B',
        texto: 'Abscesso cerebelar bacteriano piogênico.',
      },
      {
        id: 'C',
        texto: 'Meduloblastoma de fossa posterior com efeito de massa.',
      },
      {
        id: 'D',
        texto: 'Miopatia inflamatória idiopática infantil.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A cerebelite aguda ou ataxia cerebelar aguda é a complicação neurológica benigna mais comum da varicela na infância (incidência de ~1 em cada 4.000 casos), ocorrendo tipicamente de 5 a 21 dias após o início do exantema. Possui etiologia autoimune pós-infecciosa desmielinizante transitória mediada contra antígenos cerebelares. Manifesta-se por ataxia de marcha súbita, dismetria, tremor intencional, nistagmo e fala escandida, mantendo o sensório e cognição preservados. O prognóstico é excelente, com regressão clínica completa e espontânea em algumas semanas a poucos meses na quase totalidade dos pacientes.',
    comentariosAlternativas: {
      A: 'Correta. A ataxia cerebelar aguda é a complicação do SNC mais comum da varicela infantil e tem curso autolimitado e favorável.',
      B: 'Incorreta. Abscesso causaria febre alta, sinais meníngeos, hipertensão intracraniana e imagem tomográfica focal evidente com anel de realce.',
      C: 'Incorreta. Neoplasias de fossa posterior têm início insidioso, progressivo e cursam com vômitos matinais e lesão tumoral na TC/RNM.',
      D: 'Incorreta. Miopatia cursa com fraqueza muscular proximal e elevação de CPK, sem ataxia cerebelar e fala escandida.',
    },
  },
  {
    id: 'ped-exant-056',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Profilaxia Pós-Exposição da Varicela - Vacina de Bloqueio',
    isRevisao: false,
    enunciado:
      'Criança de 2 anos, imunocompetente, sem histórico prévio de catapora e que não recebeu a vacina varicela (atraso vacinal), teve contato próximo e prolongado na creche há 60 horas com um colega de sala diagnosticado com varicela em fase vesicular ativa. Qual é a conduta profilática pós-exposição preconizada pelo Ministério da Saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar a vacina contra varicela imediatamente (bloqueio pós-exposição realizado em até 72 a 120 horas do contato).',
      },
      {
        id: 'B',
        texto:
          'Administrar Imunoglobulina Humana Antivaricela-Zóster (IGHAVZ) por via intramuscular profunda.',
      },
      {
        id: 'C',
        texto:
          'Prescrever Aciclovir oral profilático por 14 dias para erradicar a replicação primária nos linfonodos.',
      },
      {
        id: 'D',
        texto:
          'Contraindicar a vacinação pós-contato pelo risco de desencadear uma encefalite vacinal hiperreativa.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A vacina de bloqueio pós-exposição contra a varicela é recomendada para contatos suscetíveis imunocompetentes com idade ≥ 9 meses, desde que administrada idealmente em até 72 horas (podendo estender-se com eficácia comprovada até 120 horas / 5 dias) após o contato infectante. Ela previne o desenvolvimento da doença em até 70-90% dos casos ou atenua significativamente a gravidade dos sintomas caso a infecção ocorra. A imunoglobulina (IGHAVZ) é reservada exclusivamente para indivíduos de alto risco (imunodeprimidos, gestantes suscetíveis e neonatos com critérios de gravidade).',
    comentariosAlternativas: {
      A: 'Correta. Contato suscetível imunocompetente ≥ 9 meses tem indicação formal de vacina de bloqueio em até 72-120 horas.',
      B: 'Incorreta. A imunoglobulina não é indicada para crianças imunocompetentes hígidas sem comorbidades.',
      C: 'Incorreta. O aciclovir oral preventivo de rotina pós-exposição não é recomendado como substituto da vacina.',
      D: 'Incorreta. A vacinação pós-exposição é segura, eficaz e recomendada pelas sociedades científicas internacionais e MS.',
    },
  },
  {
    id: 'ped-exant-057',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Profilaxia Pós-Exposição da Varicela - Indicações da IGHAVZ',
    isRevisao: false,
    enunciado:
      'Menino de 6 anos com Leucemia Linfoide Aguda (LLA) em fase de quimioterapia de manutenção, sem história prévia de catapora e com sorologia IgG negativa para VZV, permaneceu durante 4 horas na mesma sala fechada com um primo que apresentou erupção vesicular típica de varicela no dia seguinte. O contato ocorreu há 48 horas. Qual é a conduta profilática pós-exposição indicada de urgência?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar Imunoglobulina Humana Específica Antivaricela-Zóster (IGHAVZ / VZIG) por via intramuscular em até 96 horas do contato.',
      },
      {
        id: 'B',
        texto:
          'Aplicar imediatamente duas doses da vacina de vírus vivos atenuados contra varicela com intervalo de 24 horas.',
      },
      {
        id: 'C',
        texto:
          'Prescrever apenas antitérmicos e aguardar o surgimento de vesículas para iniciar tratamento ambulatorial.',
      },
      {
        id: 'D',
        texto:
          'Indicar internação em UTI estéril e realizar exsanguinotransfusão profilática.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Pacientes imunodeprimidos suscetíveis (com leucemia, linfoma, quimioterapia citotóxica, corticoterapia em altas doses ou imunodeficiência primária celular) expostos à varicela têm alto risco de desenvolver varicela visceral disseminada grave, pneumonia necrotizante, encefalite e óbito. Neles, as vacinas de vírus vivos atenuados são formalmente CONTRAINDICADAS pelo risco de infecção vacinal fulminante. A conduta pós-exposição mandatória é a aplicação de Imunoglobulina Humana Antivaricela-Zóster (IGHAVZ), idealmente em até 96 horas (podendo ser administrada em até 10 dias de acordo com o Ministério da Saúde e CDC).',
    comentariosAlternativas: {
      A: 'Correta. Imunodeprimido suscetível tem indicação absoluta de IGHAVZ em até 96 horas (máximo 10 dias) para prevenir doença fatal.',
      B: 'Incorreta. A vacina de vírus vivos atenuados é contraindicada em pacientes com imunossupressão grave.',
      C: 'Incorreta. Esperar o surgimento dos sintomas em um leucêmico sem profilaxia passiva pode resultar em óbito rápido por disseminação visceral.',
      D: 'Incorreta. Exsanguinotransfusão não tem qualquer papel na profilaxia da varicela.',
    },
  },
  {
    id: 'ped-exant-058',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Profilaxia Pós-Exposição da Varicela - Varicela Neonatal',
    isRevisao: false,
    enunciado:
      'Puérpera dá à luz um recém-nascido a termo com peso adequado para a idade gestacional. Dois dias após o parto, surgem na mãe lesões vesiculares disseminadas características de varicela com febre. Sabendo-se que a erupção materna iniciou no 2º dia pós-parto, qual é a conduta mandatória para o recém-nascido em relação à profilaxia pós-exposição da varicela neonatal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar Imunoglobulina Humana Antivaricela-Zóster (IGHAVZ) ao recém-nascido imediatamente, visto que o início da varicela materna ocorreu na janela crítica (de 5 dias antes a 2 dias após o parto).',
      },
      {
        id: 'B',
        texto:
          'Aplicar a vacina de bloqueio contra varicela no recém-nascido nas primeiras 24 horas de vida.',
      },
      {
        id: 'C',
        texto:
          'Suspender o aleitamento materno de forma definitiva e não administrar nenhuma imunoglobulina ao bebê.',
      },
      {
        id: 'D',
        texto:
          'Apenas isolar o recém-nascido em berçário comum, pois a transmissão transplacentária já conferiu imunidade passiva materna protetora total.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A janela de maior perigo para Varicela Neonatal Grave ocorre quando a mãe desenvolve o exantema de 5 dias antes do parto até 2 dias após o parto. Nessa janela temporal específica, o feto/recém-nascido é exposto a uma alta carga de viremia transplacentária da mãe sem que tenha havido tempo hábil para a síntese e transferência transplacentária de anticorpos protetores IgG maternos, resultando em mortalidade neonatal de até 20 a 30% por falência de múltiplos órgãos. A indicação de IGHAVZ intramuscular para o recém-nascido é IMEDIATA e imperativa. O aleitamento materno pode ser mantido se não houver vesículas nas mamas.',
    comentariosAlternativas: {
      A: 'Correta. Início do exantema materno entre D-5 e D+2 do parto exige IGHAVZ imediata para o concepto.',
      B: 'Incorreta. A vacina contra varicela é de vírus vivos e só é licenciada para crianças a partir de 9 a 12 meses.',
      C: 'Incorreta. O leite materno não transmite o vírus se a mama estiver sem lesões ativas; a IGHAVZ é mandatória.',
      D: 'Incorreta. Não houve transferência de anticorpos protetores maternos nessa janela temporal estreita.',
    },
  },
  {
    id: 'ped-exant-059',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Profilaxia Pós-Exposição da Varicela - Prematuros',
    isRevisao: false,
    enunciado:
      'Em uma Unidade de Terapia Intensiva Neonatal (UTIN), uma técnica de enfermagem descobre estar com lesões vesiculares de varicela após ter prestado assistência direta a dois recém-nascidos hospitalizados há 48 horas: o bebê A (nascido com 26 semanas de idade gestacional, mãe com história comprovada de catapora na infância) e o bebê B (nascido com 33 semanas de idade gestacional, cuja mãe nunca teve catapora e é IgG negativa). Qual(is) bebê(s) tem(têm) indicação formal de receber Imunoglobulina Humana Antivaricela-Zóster (IGHAVZ)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ambos os bebês (A e B) possuem indicação formal de receber IGHAVZ.',
      },
      {
        id: 'B',
        texto:
          'Apenas o bebê B tem indicação, pois a mãe do bebê A já possuía anticorpos IgG.',
      },
      {
        id: 'C',
        texto:
          'Apenas o bebê A tem indicação, pois o bebê B nasceu com mais de 28 semanas.',
      },
      {
        id: 'D',
        texto:
          'Nenhum dos prematuros tem indicação de IGHAVZ antes de completarem 37 semanas de idade corrigida.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As indicações de IGHAVZ para recém-nascidos prematuros hospitalizados expostos à varicela são critérios clássicos de prova do Ministério da Saúde e CDC:\n1) Prematuros com idade gestacional < 28 semanas (ou peso de nascimento ≤ 1.000g): devem SEMPRE receber IGHAVZ, INDEPENDENTEMENTE do histórico sorológico materno (pois a transferência placentária ativa de IgG é insignificante antes de 28 semanas);\n2) Prematuros com idade gestacional ≥ 28 semanas: devem receber IGHAVZ se a mãe for SUSCETÍVEL (sem história clínica ou sorologia negativa para varicela).\nNo caso apresentado, o bebê A tem < 28 semanas (recebe sempre) e o bebê B tem ≥ 28 semanas com mãe suscetível (também recebe). Logo, ambos têm indicação absoluta.',
    comentariosAlternativas: {
      A: 'Correta. Prematuro < 28 semanas recebe sempre; prematuro ≥ 28 semanas de mãe suscetível também tem indicação de IGHAVZ.',
      B: 'Incorreta. O bebê A nasceu com 26 semanas; antes de 28 semanas quase não há passagem de IgG materna pela placenta.',
      C: 'Incorreta. O bebê B também precisa receber porque sua mãe é comprovadamente suscetível (IgG negativa).',
      D: 'Incorreta. A imunoglobulina deve ser aplicada o mais rápido possível após a exposição, sem esperar a maturidade.',
    },
  },
  {
    id: 'ped-exant-060',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Eritema Infeccioso - Fases Clínicas e Sinal da Bofetada',
    isRevisao: false,
    enunciado:
      'Escolar de 7 anos é trazido ao consultório pediátrico pela mãe devido ao aparecimento de eritema vermelho-vivo confluente e quente nas duas bochechas, com nítida palidez ao redor dos lábios ("aspecto de bochecha esbofeteada"). A criança está em excelente estado geral, afebril e assintomática no momento. A mãe refere apenas coriza leve há 5 dias. A respeito do curso natural dessa patologia (Eritema Infeccioso / Quinta Doença), qual é a evolução cutânea esperada para os próximos dias?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Clareamento gradual do eritema facial e surgimento de exantema maculopapular em superfícies extensoras de tronco e membros, que clareia no centro adquirindo aspecto reticulado ou rendilhado, com recidivas desencadeadas por calor e sol.',
      },
      {
        id: 'B',
        texto:
          'Evolução rápida das lesões faciais para vesículas umbilicadas e crostas melicéricas aderentes em polpa digital.',
      },
      {
        id: 'C',
        texto:
          'Progressão craniocaudal com descamação furfurácea em tronco e laminar em extremidades acompanhada de conjuntivite.',
      },
      {
        id: 'D',
        texto:
          'Formação de placas hemorrágicas purpúricas palpáveis disseminadas com insuficiência renal aguda anúrica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Eritema Infeccioso (Quinta Doença), causado pelo Parvovírus B19, apresenta uma evolução clínica cutânea trifásica clássica:\n- Fase 1: Eritema facial malar bilateral vermelho-brilhante homogêneo com palidez perioral nítida ("face esbofeteada" ou "slapped cheek"), durando 2 a 4 dias;\n- Fase 2: Exantema maculopapular eritematoso que surge 1 a 4 dias depois nas superfícies extensoras dos membros e tronco, com clareamento da porção central das lesões, configurando o padrão em "renda", "rendilhado" ou "reticulado";\n- Fase 3: Fase de recidivas ou evanescência, na qual o exantema pode desaparecer e recorrer por várias semanas mediante estímulos como banhos mornos/quentes, luz solar, esforço físico, atrito cutâneo e alterações emocionais.',
    comentariosAlternativas: {
      A: 'Correta. Sequência clássica do Eritema Infeccioso: face esbofeteada -> padrão rendilhado em membros -> recidivas por calor e sol.',
      B: 'Incorreta. O eritema infeccioso não produz vesículas, bolhas ou crostas melicéricas.',
      C: 'Incorreta. Descamação em lixa/laminar com conjuntivite caracteriza escarlatina e sarampo, não eritema infeccioso.',
      D: 'Incorreta. Lesões purpúricas com insuficiência renal descrevem a Síndrome Hemolítico-Urêmica ou vasculite por IgA grave.',
    },
  },
  {
    id: 'ped-exant-061',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Eritema Infeccioso - Transmissibilidade e Isolamento',
    isRevisao: false,
    enunciado:
      'A mãe do escolar de 7 anos com o típico exantema rendilhado do Eritema Infeccioso pergunta se deve manter a criança isolada em casa sem ir à escola para não contaminar os colegas da sala de aula. Qual é a orientação médica correta baseada na dinâmica de transmissão do Parvovírus B19?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A criança não precisa ser afastada da escola, pois no momento em que o exantema característico surge a viremia já cessou e a criança não é mais infectante.',
      },
      {
        id: 'B',
        texto:
          'O isolamento por contato e gotículas deve ser mantido rigorosamente até que o padrão rendilhado desapareça por completo sem novas recidivas térmicas.',
      },
      {
        id: 'C',
        texto:
          'A criança transmite o vírus apenas através das fezes, exigindo atestado de afastamento por 40 dias.',
      },
      {
        id: 'D',
        texto:
          'Deve ser internada em leito com pressão negativa até a negativação do anticorpo IgM específico.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Uma particularidade epidemiológica fundamental do Eritema Infeccioso (Parvovírus B19) frequentemente explorada em provas é a dissociação entre transmissibilidade e manifestações cutâneas. A excreção viral nas secreções respiratórias e a máxima viremia ocorrem durante a fase prodrômica inespecífica (dias antes do aparecimento do exantema). O exantema ("face esbofeteada" e padrão rendilhado) e as eventuais artralgias são manifestações imunomediadas secundárias à deposição de imunocomplexos e resposta celular, surgindo justamente quando os anticorpos específicos já neutralizaram o vírus. Assim, no momento em que o exantema é visível, a criança NÃO transmite mais o vírus e pode frequentar a escola normalmente.',
    comentariosAlternativas: {
      A: 'Correta. Quando surge o exantema imunomediado, o paciente já não elimina vírus e não requer afastamento escolar.',
      B: 'Incorreta. O padrão rendilhado pode recidivar por semanas ao calor sem significar qualquer contágio ativo.',
      C: 'Incorreta. A transmissão do Parvovírus B19 é predominantemente por via respiratória (gotículas) na fase prodrômica.',
      D: 'Incorreta. O quadro é totalmente benigno e não exige leito de pressão negativa nem internação.',
    },
  },
  {
    id: 'ped-exant-062',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Parvovírus B19 - Crise Aplástica em Doença Falciforme',
    isRevisao: false,
    enunciado:
      'Criança de 9 anos com Anemia Falciforme (homozigose HbSS) é admitida em estado grave com taquicardia extrema (FC: 145 bpm), palidez cutaneomucosa cérea generalizada e síncope ao levantar da cama. A mãe nega dores osteoarticulares ou febre nas últimas 24 horas. Exame físico: baço não palpável. O hemograma revela: Hemoglobina: 3,2 g/dL (basal de 7,8 g/dL), Leucócitos: 5.200/mm³, Plaquetas: 160.000/mm³ e Reticulócitos: 0% (zero absoluto). O mecanismo patogênico da infecção pelo Parvovírus B19 que culmina nessa crise aplástica transitória envolve:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ligação do vírus ao receptor eritroide do antígeno P (globosídeo), infectando e lisando diretamente os precursores eritroides na medula óssea com parada da eritropoiese.',
      },
      {
        id: 'B',
        texto:
          'Sequestro maciço agudo de hemácias no parênquima esplênico induzido por esplenomegalia hiper-reativa.',
      },
      {
        id: 'C',
        texto:
          'Produção de autoanticorpos quentes anti-Rh que causam hemólise intravascular acelerada com reticulocitose compensatória.',
      },
      {
        id: 'D',
        texto:
          'Oclusão microvascular isquêmica no baço provocando asplenia funcional irreversível imediata.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Parvovírus B19 tem um tropismo tecidual primário pelos progenitores eritroides humanos (BFU-E e CFU-E e proeritroblastos). O vírus utiliza o antígeno do grupo sanguíneo P (globosídeo eritrocitário) como seu receptor celular funcional para penetrar nas células precursoras, provocando parada mitótica e citólise direta dos eritroblastos. Em indivíduos hematologicamente normais (com sobrevida das hemácias de 120 dias), a interrupção da eritropoiese por cerca de 7 a 10 dias reduz discretamente a hemoglobina de forma subclínica. Contudo, em pacientes com anemias hemolíticas crônicas (como a Doença Falciforme, cuja meia-vida dos eritrócitos cai para 10-15 dias), a parada transitória da produção medular acarreta uma queda catastrófica dos níveis de hemoglobina com contagem de RETICULÓCITOS PRÓXIMA DE ZERO (crise aplástica pura da série vermelha).',
    comentariosAlternativas: {
      A: 'Correta. O vírus liga-se ao antígeno P dos precursores eritroides medulares, lisando-os e causando reticulocitopenia profunda.',
      B: 'Incorreta. Na crise de sequestro esplênico há aumento rápido do baço e reticulocitose intensa.',
      C: 'Incorreta. Na crise hemolítica autoimune os reticulócitos estariam marcadamente elevados em resposta à hemólise.',
      D: 'Incorreta. A asplenia funcional decorre de infartos esplênicos repetidos nos primeiros anos de vida e não tem reticulocitopenia de 0%.',
    },
  },
  {
    id: 'ped-exant-063',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Parvovírus B19 - Infecção Congênita e Hidropisia Fetal',
    isRevisao: false,
    enunciado:
      'Gestante primigesta de 22 semanas de idade gestacional, professora de educação infantil, procura o serviço de medicina fetal após ultrassonografia de rotina evidenciar ascite fetal volumosa, derrame pleural, edema subcutâneo generalizado e velocidade do pico sistólico da artéria cerebral média aumentada (> 1,5 MoM), indicando anemia fetal grave (hidropisia fetal não imune). A paciente refere que há 3 semanas apresentou quadro de artralgia simétrica em punhos e joelhos acompanhada de eritema cutâneo fugaz. A investigação sorológica confirma infecção aguda recente por Parvovírus B19 (IgM reagente). A fisiopatologia da hidropisia fetal causada por esse vírus fundamenta-se em:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Lise dos progenitores eritroides fetais nos sítios de hematopoiese com anemia fetal profunda, hipóxia tecidual, insuficiência cardíaca de alto débito e anasarca.',
      },
      {
        id: 'B',
        texto:
          'Malformação obstrutiva grave da via urinária fetal com estenose bilateral de junção ureteropélvica.',
      },
      {
        id: 'C',
        texto:
          'Fechamento prematuro do canal arterial induzido por inibição das prostaglandinas maternas.',
      },
      {
        id: 'D',
        texto:
          'Infecção bacteriana ascendente com corioamnionite purulenta e choque séptico materno.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A infecção materna primária pelo Parvovírus B19 durante a gestação (especialmente entre a 13ª e a 28ª semana) acarreta transmissão vertical transplacentária para o concepto em cerca de 30% dos casos. Como o fígado fetal e a medula óssea são locais de intensa e acelerada hematopoiese, o vírus infecta avidamente as células precursoras eritroides fetais e miócitos cardíacos, desencadeando: 1) Aplasia eritroide com anemia fetal grave; 2) Miocardite viral direta. A anemia profunda aliada à disfunção miocárdica culmina em insuficiência cardíaca congestiva de alto débito, hipertensão venosa sistêmica, anasarca fetal e extravasamento de líquido para terceiros espaços (hidropisia fetal não imune), diagnosticável pelo aumento da velocidade sistólica na artéria cerebral média fetal.',
    comentariosAlternativas: {
      A: 'Correta. Anemia fetal profunda por aplasia eritroide associada à miocardite viral gerando falência cardíaca e anasarca.',
      B: 'Incorreta. O vírus não induz uropatia obstrutiva congênita.',
      C: 'Incorreta. Fechamento prematuro do canal arterial ocorre por uso materno de AINEs no terceiro trimestre.',
      D: 'Incorreta. Trata-se de infecção viral transplacentária específica, não de corioamnionite bacteriana aguda.',
    },
  },
  {
    id: 'ped-exant-064',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Parvovírus B19 - Artrite e Artropatia no Adulto/Adolescente',
    isRevisao: false,
    enunciado:
      'Adolescente de 15 anos procura atendimento médico por apresentar dor e edema simétrico nas articulações interfalangianas proximais, metacarpofalângicas e punhos há 5 dias, com rigidez matinal de 20 minutos, sem febre atual. Refere que sua irmãzinha de 4 anos teve diagnóstico de eritema infeccioso com "bochecha esbofeteada" há duas semanas. O fator reumatoide e o FAN foram negativos. Qual é o curso clínico esperado dessa artropatia associada ao Parvovírus B19?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Curso agudo e benigno, autolimitado em 2 a 4 semanas na imensa maioria dos casos, sem provocar erosões articulares ou deformidades permanentes.',
      },
      {
        id: 'B',
        texto:
          'Evolução destrutiva irreversível semelhante à artrite reumatoide erosiva grave, necessitando de introdução precoce de imunobiológicos anti-TNF.',
      },
      {
        id: 'C',
        texto:
          'Progressão obrigatória para artrite séptica monoarticular de joelho com necessidade de artrotomia de urgência.',
      },
      {
        id: 'D',
        texto:
          'Desenvolvimento de calcificações periarticulares generalizadas e anquilose completa dos punhos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Enquanto nas crianças pequenas a manifestação clínica predominante do Parvovírus B19 é cutânea (o exantema em face esbofeteada e rendilhado), em adolescentes e adultos (especialmente mulheres) a manifestação clínica mais frequente é a artropatia aguda (artralgia ou artrite simétrica de pequenas articulações das mãos, punhos e joelhos, simulando o início de uma artrite reumatoide). Essa artropatia é imunomediada por deposição de imunocomplexos nas sinóvias. Seu curso é autolimitado (resolução espontânea em 1 a 3 semanas) e não erosivo, sem causar deformidades ou sequelas permanentes, respondendo bem a analgésicos e anti-inflamatórios comuns.',
    comentariosAlternativas: {
      A: 'Correta. Artropatia simétrica autolimitada em poucas semanas, não erosiva e com excelente prognóstico.',
      B: 'Incorreta. A artrite pelo Parvovírus B19 não é destrutiva nem crônica erosiva; não exige imunobiológicos.',
      C: 'Incorreta. Trata-se de poliartropatia estéril imunomediada simétrica, não de artrite séptica purulenta monoarticular.',
      D: 'Incorreta. Não produz anquilose nem calcificações distróficas articulares.',
    },
  },
  {
    id: 'ped-exant-065',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Exantema Súbito - Agentes Etiológicos e Faixa Etária',
    isRevisao: false,
    enunciado:
      'Em relação à etiologia e à epidemiologia clássica do Exantema Súbito (Roséola Infantil ou Sexta Doença), assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'É causado predominantemente pelo Herpes-vírus Humano tipo 6 (HHV-6, variante B) e, com menor frequência, pelo HHV-7, acometendo tipicamente lactentes entre 6 meses e 2 anos de vida.',
      },
      {
        id: 'B',
        texto:
          'É causado pelo Poxvírus da varíola humana, afetando quase que com exclusividade recém-nascidos prematuros na primeira semana de vida.',
      },
      {
        id: 'C',
        texto:
          'O agente etiológico principal é o vírus sincicial respiratório do grupo B, com pico de incidência em crianças maiores de 10 anos.',
      },
      {
        id: 'D',
        texto:
          'Decorre de reação tóxica a produtos de limpeza de contato direto, sem qualquer relação com vírus da família Herpesviridae.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Exantema Súbito (Roséola Infantil ou Sexta Doença) é causado principalmente pelo Herpes-vírus Humano tipo 6 (HHV-6), particularmente a variante B (responsável por mais de 90% dos casos primários), e em cerca de 10% dos casos pelo Herpes-vírus Humano tipo 7 (HHV-7). Pertencem à subfamília Betaherpesvirinae. Acomete quase que exclusivamente lactentes de 6 meses a 2 anos (pico entre 7 e 13 meses), período que coincide com a queda progressiva dos anticorpos maternos protetores transferidos por via transplacentária.',
    comentariosAlternativas: {
      A: 'Correta. HHV-6 (variante B) e HHV-7 são os agentes causais característicos da roséola em lactentes de 6 a 24 meses.',
      B: 'Incorreta. Não é causado por poxvírus e não afeta recém-nascidos na primeira semana (protegidos por anticorpos maternos).',
      C: 'Incorreta. O VSR causa bronquiolite aguda sibilante, não exantema súbito.',
      D: 'Incorreta. É uma doença infecciosa viral clássica e não dermatite de contato química.',
    },
  },
  {
    id: 'ped-exant-066',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Exantema Súbito - Cronologia da Febre e Exantema',
    isRevisao: false,
    enunciado:
      'Lactente de 9 meses é trazido à consulta ambulatorial. A mãe relata que o filho apresentou febre muito alta (39,5 a 40 °C) durante exatamente 3 dias inteiros, com irritabilidade durante os picos febris mas mantendo aceitação hídrica razoável. Hoje pela manhã, a temperatura axilar normalizou-se abruptamente (36,6 °C) e, poucas horas após a defervescência completa da febre, surgiram pequenas lesões máculopapulares róseas milimétricas não pruriginosas no tronco e pescoço. O médico nota as manchas de Nagayama na úvula e palato mole. Qual é a característica cronológica mais marcante e definidora do Exantema Súbito?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O exantema surge exatamente após a queda súbita da febre (em crise), com clareamento do tronco em direção periférica e melhora global do comportamento do lactente.',
      },
      {
        id: 'B',
        texto:
          'O exantema atinge seu ápice de intensidade no pico máximo da febre e permanece por mais de 30 dias com descamação laminar.',
      },
      {
        id: 'C',
        texto:
          'A febre se intensifica e atinge 41 °C somente após as lesões cutâneas coalescerem em placas bolhosas.',
      },
      {
        id: 'D',
        texto:
          'O exantema surge 14 dias antes de qualquer manifestação térmica ou respiratória.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A marca registrada e a pergunta mais tradicional sobre o Exantema Súbito nas provas de residência médica é a cronologia: "A febre vai embora e o exantema surge". O lactente apresenta febre contínua e muito alta (39 a 40 °C) por 3 a 5 dias, com exame físico quase normal (às vezes acompanhado de manchas eritematosas no palato mole chamadas Manchas de Nagayama). A febre cede abruptamente ("em crise") e, poucas horas depois, surgem as lesões maculopapulares rosadas que iniciam tipicamente no TRONCO e expandem-se para o pescoço e membros superiores, desaparecendo espontaneamente em 24 a 48 horas sem descamação nem sequelas.',
    comentariosAlternativas: {
      A: 'Correta. O exantema surge imediatamente após a cessação abrupta da febre alta, com resolução rápida e sem descamação.',
      B: 'Incorreta. No ápice da febre o paciente não tem exantema; e a roséola não dura 30 dias nem descama em lâminas.',
      C: 'Incorreta. A febre não piora após o exantema; a queda térmica é pré-requisito temporal característico.',
      D: 'Incorreta. O exantema é posterior à fase febril de 3 a 5 dias.',
    },
  },
  {
    id: 'ped-exant-067',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Exantema Súbito - Crise Febril Simples Associada',
    isRevisao: false,
    enunciado:
      'Lactente de 11 meses, previamente hígido, com febre de 39,8 °C no 2º dia de evolução sem foco identificado, apresenta episódio súbito de perda de consciência, olhar fixo para cima e abalos musculares clônicos generalizados e simétricos nos quatro membros com duração de 2 minutos, seguido de sono sonolento pós-ictal de 15 minutos, recuperando o sensório e padrão neurológico normais logo em seguida. Ao exame na emergência: temperatura de 39,2 °C, alerta, sem rigidez de nuca ou abaulamento de fontanela. No 4º dia, a febre cede em crise e surge exantema róseo em tronco. Em relação à crise convulsiva apresentada por esse paciente, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de uma crise epiléptica febril simples, evento agudo benigno comum associado à rápida ascensão térmica e ao neurotropismo do HHV-6, que não requer uso prolongado de anticonvulsivantes.',
      },
      {
        id: 'B',
        texto:
          'Trata-se de epilepsia mioclônica progressiva congênita grave, indicando início imediato de ácido valproico contínuo por 5 anos.',
      },
      {
        id: 'C',
        texto:
          'A crise convulsiva descarta o diagnóstico de exantema súbito, confirmando meningite pneumocócica invasiva.',
      },
      {
        id: 'D',
        texto:
          'Indica a presença de malformação arteriovenosa encefálica com sangramento subaracnóideo maciço.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Herpes-vírus Humano tipo 6 (HHV-6) é responsável por até um terço de todas as convulsões febris simples nos primeiros dois anos de vida. A crise epiléptica febril simples caracteriza-se por: 1) Crise generalizada tônico-clônica; 2) Duração curta (< 15 minutos); 3) Ocorrência única em 24 horas; 4) Recuperação completa sem déficit motor focal pós-ictal; 5) Febre associada sem infecção do SNC (sem sinais meníngeos). A combinação da rápida elevação térmica com a capacidade do HHV-6 de invadir temporariamente o SNC justifica essa frequência. A conduta é tranquilizar a família e orientar controle térmico; NÃO há indicação de drogas antiepilépticas contínuas.',
    comentariosAlternativas: {
      A: 'Correta. Crise febril simples benigna associada à infecção aguda por HHV-6 no lactente jovem, sem necessidade de anticonvulsivante contínuo.',
      B: 'Incorreta. Crise febril simples não é epilepsia congênita nem requer medicação de manutenção.',
      C: 'Incorreta. O HHV-6 é a causa mais comum de crise febril na faixa de 6 a 18 meses com exame físico normal.',
      D: 'Incorreta. O padrão clínico é de crise febril simples típica e não de rotura vascular intracraniana.',
    },
  },
  {
    id: 'ped-exant-068',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Exantema Súbito - Manchas de Nagayama',
    isRevisao: false,
    enunciado:
      'Durante a inspeção da orofaringe de um lactente de 10 meses na fase febril de uma roséola infantil (exantema súbito), o pediatra visualiza máculas e micropápulas eritematosas puntiformes no palato mole e na base da úvula. Esse sinal semiológico enantemático intraoral é conhecido na literatura pediátrica como:',
    alternativas: [
      {
        id: 'A',
        texto: 'Manchas de Nagayama.',
      },
      {
        id: 'B',
        texto: 'Manchas de Koplik.',
      },
      {
        id: 'C',
        texto: 'Sinal de Forchheimer.',
      },
      {
        id: 'D',
        texto: 'Nódulos de Osler.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As Manchas de Nagayama (descritas pelo pediatra japonês Tokutaro Nagayama) são pápulas e máculas eritematosas puntiformes observadas no palato mole e na úvula de até 60% dos pacientes com Exantema Súbito (HHV-6) no final do período prodrômico febril ou no momento da erupção cutânea.\nRevisão dos enantemas orais:\n- Manchas de Koplik: Sarampo (mucosa jugal oposta aos molares inferiores, aspecto de grãos de areia);\n- Sinal de Forchheimer: Rubéola (petéquias no palato mole);\n- Manchas de Nagayama: Exantema Súbito (palato mole e úvula);\n- Nódulos de Osler: Endocardite infecciosa bacteriana (polpas digitais).',
    comentariosAlternativas: {
      A: 'Correta. Manchas de Nagayama são as lesões eritematosas observadas no palato mole/úvula na roséola infantil.',
      B: 'Incorreta. Manchas de Koplik são de sarampo na mucosa jugal.',
      C: 'Incorreta. Sinal de Forchheimer é observado na rubéola.',
      D: 'Incorreta. Nódulos de Osler são manifestações periféricas de endocardite bacteriana.',
    },
  },
  {
    id: 'ped-exant-069',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Varicela Congênita vs Neonatal',
    isRevisao: false,
    enunciado:
      'Recém-nascido prematuro tardio apresenta cicatrizes cutâneas lineares zigzagueantes e deprimidas com aspecto cicatricial em trajeto metamérico no membro inferior esquerdo, acompanhadas de hipoplasia óssea ipsilateral, atrofia muscular e coriorretinite à fundoscopia. A mãe refere ter contraído catapora clínica grave na 14ª semana de gestação. O quadro descrito corresponde à:',
    alternativas: [
      {
        id: 'A',
        texto: 'Síndrome da Varicela Congênita.',
      },
      {
        id: 'B',
        texto: 'Varicela Neonatal adquirida intraparto.',
      },
      {
        id: 'C',
        texto: 'Síndrome da Rubéola Congênita com tríade de Gregg.',
      },
      {
        id: 'D',
        texto: 'Toxoplasmose congênita clássica com tétrade de Sabin.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Síndrome da Varicela Congênita (SVC) ocorre quando a infecção materna primária pelo Vírus Varicela-Zóster acontece na primeira metade da gestação (especialmente entre a 8ª e a 20ª semana). O vírus atinge o embrião/feto durante o período de organogênese neural e musculoesquelética, manifestando-se ao nascimento por: 1) Lesões cutâneas cicatriciais deprimidas de aspecto em "ziguezague" seguindo dermátomos específicos; 2) Hipoplasia e encurtamento de membros e atrofia muscular; 3) Anomalias oculares (coriorretinite, microftalmia e catarata); 4) Alterações do SNC (microcefalia, atrofia cortical). É diferente da Varicela Neonatal, que ocorre por transmissão no período periparto e produz vesículas ativas agudas.',
    comentariosAlternativas: {
      A: 'Correta. Lesões cutâneas cicatriciais metaméricas e hipoplasia de extremidades decorrentes de varicela materna no 1º/2º trimestre.',
      B: 'Incorreta. Varicela neonatal manifesta-se por vesículas agudas disseminadas após o nascimento decorrentes de infecção periparto.',
      C: 'Incorreta. A Síndrome da Rubéola Congênita cursa com cardiopatia congênita (PCA), surdez e catarata, sem hipoplasia de membro cicatricial.',
      D: 'Incorreta. Tétrade de Sabin na toxoplasmose: coriorretinite, hidrocefalia, calcificações intracranianas difusas e retardo mental.',
    },
  },
  {
    id: 'ped-exant-070',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Varicela - Tratamento em Imunodeprimidos com Aciclovir IV',
    isRevisao: false,
    enunciado:
      'Criança de 7 anos portadora de Síndrome Nefrótica em uso de corticoterapia em dose imunossupressora contínua (Prednisona 2 mg/kg/dia há 6 semanas) apresenta febre alta e primeiras vesículas de varicela no abdome. A conduta terapêutica imediata recomendada pelas diretrizes pediátricas é:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Internação hospitalar imediata e início de Aciclovir por via intravenosa (10 mg/kg a cada 8 horas ou 500 mg/m² a cada 8 horas) por 7 a 10 dias.',
      },
      {
        id: 'B',
        texto:
          'Prescrição de pomada dermatológica tópica de aciclovir a 5% sobre as vesículas e acompanhamento domiciliar.',
      },
      {
        id: 'C',
        texto:
          'Aumento imediato da dose do corticoide para evitar insuficiência adrenal secundária sem necessidade de antivirais.',
      },
      {
        id: 'D',
        texto:
          'Aplicação de vacina de varicela em dose dobrada para acelerar a produção de anticorpos neutralizantes.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Em crianças com imunossupressão significativa (como pacientes com síndrome nefrótica em uso de corticoterapia em dose imunossupressora ≥ 2 mg/kg/dia de prednisona por > 14 dias), o vírus varicela-zóster pode causar disseminação hematogênica multivisceral catastrófica (pneumonia varicelosa, hepatite fulminante, encefalite e coagulação intravascular disseminada). O aciclovir por via oral NÃO atinge níveis séricos suficientes nesse perfil de paciente. A indicação mandatória é INTERNAÇÃO HOSPITALAR e administração de ACICLOVIR INTRAVENOSO (10 mg/kg/dose a cada 8 horas em infusão lenta de 1 hora) por 7 a 10 dias, além de redução gradual da imunossupressão quando factível.',
    comentariosAlternativas: {
      A: 'Correta. Imunossuprimido com varicela ativa tem indicação absoluta de internação e Aciclovir IV para prevenir formas viscerais fatais.',
      B: 'Incorreta. O aciclovir tópico tem eficácia nula para prevenir a replicação viral sistêmica na varicela.',
      C: 'Incorreta. Manter ou aumentar corticoterapia sem antiviral pioraria drasticamente a viremia e a imunodepressão celular.',
      D: 'Incorreta. Vacinas de vírus vivos atenuados são formalmente contraindicadas em vigência de infecção aguda ativa e imunossupressão.',
    },
  },
  {
    id: 'ped-exant-071',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Eritema Infeccioso - Diagnóstico Diferencial com Lúpus',
    isRevisao: false,
    enunciado:
      'Adolescente de 13 anos é avaliada por eritema malar bilateral simétrico em "asa de borboleta" com palidez perioral e dores articulares difusas. A mãe teme que a filha tenha desenvolvido Lúpus Eritematoso Sistêmico (LES). O pediatra suspeita de Eritema Infeccioso pelo Parvovírus B19. Qual característica clínica ou laboratorial favorece fortemente a etiologia infecciosa aguda pelo Parvovírus B19 em detrimento de uma colagenose autoimune crônica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Surgimento subsequente de exantema rendilhado em membros, anticorpos IgM anti-Parvovírus B19 positivos e regressão completa dos sintomas articulares e cutâneos em poucas semanas sem nefrite ou consumo de complemento.',
      },
      {
        id: 'B',
        texto:
          'Presença obrigatória de proteinúria nefrótica superior a 50 mg/kg/dia e cilindros hemáticos na urina.',
      },
      {
        id: 'C',
        texto:
          'Detecção de anticorpos anti-DNA dupla fita nativo em títulos elevados e consumo progressivo de frações C3 e C4.',
      },
      {
        id: 'D',
        texto:
          'Necessidade perene de hidroxicloroquina contínua para evitar úlceras orais dolorosas permanentes.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Parvovírus B19 é apelidado de "grande imitador" de doenças reumatológicas na adolescência, pois o eritema malar ("bochecha esbofeteada") assemelha-se muito ao rash malar em asa de borboleta do Lúpus Eritematoso Sistêmico (LES), e as artralgias periféricas simulam colagenoses. No entanto, no eritema infeccioso: 1) Ocorre a clássica fase secundária com exantema rendilhado ou reticulado no tronco e membros; 2) A sorologia IgM para Parvovírus B19 é reagente; 3) O complemento sérico (C3/C4) permanece normal; 4) Não há nefrite (urina tipo 1 normal sem proteinúria/hematúria); 5) O curso é autolimitado com resolução espontânea em 2 a 4 semanas sem necessidade de imunossupressores.',
    comentariosAlternativas: {
      A: 'Correta. Padrão rendilhado subsequente, IgM reagente e resolução espontânea sem acometimento renal definem a etiologia viral benigna.',
      B: 'Incorreta. Proteinúria nefrótica e cilindros hemáticos indicam nefrite lúpica grave, típica do LES ativo.',
      C: 'Incorreta. Anti-dsDNA e hipocomplementemia são marcadores altamente específicos de LES em atividade.',
      D: 'Incorreta. Hidroxicloroquina é droga modificadora de curso no lúpus, desnecessária no eritema infeccioso autolimitado.',
    },
  },
  {
    id: 'ped-exant-072',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Exantema Súbito - Diagnóstico Laboratorial e Sorologia',
    isRevisao: false,
    enunciado:
      'Em um lactente de 8 meses atendido no 2º dia de febre alta sem foco (fase pré-exantemática do exantema súbito), o hemograma solicitado na triagem da emergência evidencia leucopenia com linfocitose relativa discreta. A mãe questiona sobre a realização de exames complementares confirmatórios. Qual é a conduta correta em relação ao diagnóstico laboratorial do Exantema Súbito na prática pediátrica ambulatorial?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O diagnóstico é essencialmente clínico e retrospectivo, baseado na defervescência abrupta da febre coincidente com o surgimento do exantema maculopapular em tronco, não se justificando a realização de sorologias ou PCR virais de rotina.',
      },
      {
        id: 'B',
        texto:
          'A biópsia de medula óssea é obrigatória em até 24 horas para pesquisa de corpúsculos virais intracelulares do HHV-6.',
      },
      {
        id: 'C',
        texto:
          'A dosagem diária de anticorpos heterófilos séricos deve ser mantida por 30 dias para afastar leucemia aguda.',
      },
      {
        id: 'D',
        texto:
          'A ressonância magnética de crânio com contraste é indicada para todos os pacientes antes do aparecimento do exantema.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Na prática clínica pediátrica, o diagnóstico do Exantema Súbito (Roséola Infantil) é eminentemente clínico e retrospectivo. Durante o período febril inicial, a febre alta sem foco evidente muitas vezes gera preocupação nos pais, mas a observação cuidadosa do bom estado geral nos períodos afebris e a ausência de sinais meníngeos orientam a conduta expectante. Quando a febre cede subitamente e o exantema maculopapular róseo de tronco surge poucas horas depois, o diagnóstico torna-se inquestionável. Testes sorológicos (IgM) ou PCR para HHV-6 e HHV-7 existem mas são reservados exclusivamente para pesquisa clínica ou pacientes imunodeprimidos graves com encefalite.',
    comentariosAlternativas: {
      A: 'Correta. O diagnóstico é clínico e retrospectivo pela clássica história natural; dispensa rotina sorológica ou invasiva.',
      B: 'Incorreta. Biópsia de medula óssea é totalmente descabida e injustificável em uma afecção viral benigna.',
      C: 'Incorreta. Anticorpos heterófilos são pesquisados na mononucleose (EBV) e não no exantema súbito.',
      D: 'Incorreta. Não há indicação de neuroimagem em lactente afebril sem déficit neurológico focal.',
    },
  },
  {
    id: 'ped-exant-073',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Profilaxia Pós-Exposição da Varicela - Gestante Suscetível',
    isRevisao: false,
    enunciado:
      'Gestante de 18 semanas de gestação, professora, tem contato íntimo intradomiciliar de mais de 4 horas com o sobrinho que está no 2º dia de varicela ativa com vesículas. A gestante refere nunca ter tido catapora na vida e sua sorologia IgG realizada no pré-natal é não reagente (gestante comprovadamente suscetível). O contato ocorreu há 72 horas. Qual é a conduta profilática pós-exposição preconizada pelo Ministério da Saúde e Febrasgo?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar Imunoglobulina Humana Antivaricela-Zóster (IGHAVZ) em dose única intramuscular profunda em até 96 horas (podendo estender-se até 10 dias) do contato infectante.',
      },
      {
        id: 'B',
        texto:
          'Administrar imediatamente a vacina de vírus vivos atenuados contra varicela para induzir resposta imune celular protetora.',
      },
      {
        id: 'C',
        texto:
          'Indicar interrupção terapêutica da gestação pelo risco inevitável de malformação congênita fetal universal.',
      },
      {
        id: 'D',
        texto:
          'Prescrever apenas loção de calamina e orientar a paciente a aguardar o término da gestação sem intervenções profiláticas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Gestantes suscetíveis expostas à varicela apresentam risco aumentado de desenvolver complicações graves da doença materna (especialmente pneumonia varicelosa com mortalidade de até 10 a 20%) e risco de Síndrome da Varicela Congênita para o feto quando a infecção ocorre nas primeiras 20 semanas de gestação. Como a vacina contra varicela é de vírus vivos atenuados, ela é TERMINANTEMENTE CONTRAINDICADA durante a gestação pelo risco teórico de infecção congênita vacinal. A indicação pós-exposição absoluta para a gestante suscetível é a administração de Imunoglobulina Específica (IGHAVZ) em até 96 horas (podendo ser estendida até 10 dias de acordo com o Ministério da Saúde).',
    comentariosAlternativas: {
      A: 'Correta. Gestante suscetível exposta tem indicação absoluta de imunoglobulina específica (IGHAVZ) em até 96h/10 dias.',
      B: 'Incorreta. A vacina é de vírus vivos atenuados e contraindicada em qualquer fase da gestação.',
      C: 'Incorreta. O risco de síndrome congênita é de cerca de 1 a 2% e não há indicação de interrupção da gravidez.',
      D: 'Incorreta. Omitir a imunoglobulina deixa a gestante vulnerável à pneumonia varicelosa grave e óbito fetal.',
    },
  },
  {
    id: 'ped-exant-074',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Diagnóstico Diferencial das Síndromes Vesiculares na Infância',
    isRevisao: false,
    enunciado:
      'Uma criança de 3 anos comparece ao pronto-atendimento com lesões vesiculares na pele. O médico assistente precisa diferenciar com rapidez três entidades clássicas que cursam com vesículas na infância: Varicela, Doença Mão-Pé-Boca e Gengivoestomatite Herpética Primária (HSV-1). Assinale a alternativa que correlaciona corretamente o padrão dermatológico com a respectiva doença:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A Varicela apresenta distribuição centrípeta com polimorfismo regional (couro cabeludo/tronco); a Doença Mão-Pé-Boca acomete preferencialmente extremidades distais (palmas, plantas) e nádegas além de mucosa oral; e a Gengivoestomatite Herpética concentra lesões vesiculares e ulceradas predominantemente na gengiva, lábios anteriores e língua com gengivorragia exuberante.',
      },
      {
        id: 'B',
        texto:
          'Na Varicela as lesões são fixas e monomórficas exclusivamente nas pernas; na Mão-Pé-Boca as vesículas poupam as mãos; e no Herpes Simples as vesículas concentram-se no couro cabeludo.',
      },
      {
        id: 'C',
        texto:
          'Apenas a Varicela pode provocar úlceras na mucosa oral, sendo as mucosas completamente poupadas na Mão-Pé-Boca e no Herpes Simples.',
      },
      {
        id: 'D',
        texto:
          'O polimorfismo regional é a marca patognomônica da Doença Mão-Pé-Boca, enquanto a Varicela se caracteriza por vesículas elípticas estritamente palmoplantares.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Síntese comparativa essencial das doenças exantemáticas vesiculares da infância:\n1) Varicela (VZV): Exantema centrípeto polimórfico (mácula, pápula, vesícula, pústula e crosta coexistindo na mesma região), acomete couro cabeludo, tronco e mucosas com prurido intenso;\n2) Doença Mão-Pé-Boca (Coxsackie A16 / EV-71): Vesículas elípticas de eixo paralelo às pregas cutâneas nas palmas das mãos, plantas dos pés, nádegas/área da fralda e úlceras orais dolorosas;\n3) Gengivoestomatite Herpética Primária (HSV-1): Infecção estomatológica aguda grave com vesículas que se rompem formando úlceras na cavidade oral anterior (gengivas edematosas friáveis e sangrantes, lábios periorais e dorso da língua), febre alta e sialorreia profusa.',
    comentariosAlternativas: {
      A: 'Correta. Descrição precisa e discriminativa da topografia e morfologia das três principais viroses vesiculares infantis.',
      B: 'Incorreta. Na varicela as lesões são polimórficas no tronco; na mão-pé-boca as mãos são o sítio clássico; herpes predomina na boca.',
      C: 'Incorreta. As três entidades acometem rotineiramente a mucosa oral com enantema doloroso.',
      D: 'Incorreta. O polimorfismo regional é a assinatura da varicela, e as vesículas elípticas são da doença mão-pé-boca.',
    },
  },
  {
    id: 'ped-exant-075',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Síntese Global das Doenças Exantemáticas Infantis',
    isRevisao: false,
    enunciado:
      'Durante uma sessão clínica de revisão para concursos médicos, quatro casos clínicos de doenças exantemáticas foram apresentados em sequência:\n\nCaso 1: Lactente de 10 meses com febre muito alta por 3 dias que desapareceu subitamente; logo após a febre sumir, surgiu exantema maculopapular rosado no tronco.\nCaso 2: Escolar de 6 anos com hiperemia facial intensa poupando a área perioral ("bochechas esbofeteadas"), seguida por exantema rendilhado em braços e pernas que piora com banho quente.\nCaso 3: Criança de 3 anos com máculas, vesículas ("gotas de orvalho sobre pétalas de rosa") e crostas em diferentes estágios evolutivos no tronco e couro cabeludo.\nCaso 4: Criança de 5 anos com febre alta, faringoamigdalite purulenta, exantema micropapular em lixa, palidez perioral (Filatov) e hiperemia nas pregas dos cotovelos (Pastia).\n\nOs diagnósticos corretos dos Casos 1, 2, 3 e 4 são, respectivamente:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Exantema Súbito (Roséola) | Eritema Infeccioso | Varicela | Escarlatina.',
      },
      {
        id: 'B',
        texto:
          'Sarampo | Rubéola | Síndrome Mão-Pé-Boca | Doença de Kawasaki.',
      },
      {
        id: 'C',
        texto:
          'Eritema Infeccioso | Exantema Súbito | Escarlatina | Varicela.',
      },
      {
        id: 'D',
        texto:
          'Doença de Kawasaki | Escarlatina | Mononucleose Infecciosa | Sarampo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Gabarito sintético indiscutível das principais doenças exantemáticas pediátricas:\n- Caso 1: Exantema Súbito (HHV-6/7): queda da febre em crise + exantema súbito de tronco no lactente;\n- Caso 2: Eritema Infeccioso (Parvovírus B19): face esbofeteada + padrão rendilhado/reticulado fotossensível e termoinduzido;\n- Caso 3: Varicela (VZV): polimorfismo regional centrípeto com vesículas e crostas simultâneas;\n- Caso 4: Escarlatina (Streptococcus pyogenes): faringoamigdalite purulenta + pele em lixa + Filatov + Pastia.\nA sequência exata e consagrada é: Exantema Súbito | Eritema Infeccioso | Varicela | Escarlatina.',
    comentariosAlternativas: {
      A: 'Correta. Associação fidedigna dos 4 quadros clínicos clássicos e mais cobrados na Pediatria das Residências Médicas.',
      B: 'Incorreta. Sarampo tem tosse/Koplik; Rubéola tem linfonodos suboccipitais; Kawasaki tem conjuntivite limpa.',
      C: 'Incorreta. Ordem diagnóstica dos casos 1 e 2 está invertida.',
      D: 'Incorreta. Todos os diagnósticos da alternativa estão incorretos em relação aos casos apresentados.',
    },
  },
  {
    id: 'ped-exant-076',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Sarampo - Pródromos e Sinal de Koplik',
    isRevisao: false,
    enunciado:
      'Lactente de 10 meses, não vacinado por hesitação familiar, é levado à Unidade de Pronto Atendimento com histórico de 4 dias de febre alta (39,5 °C), tosse produtiva intensa em acessos, coriza mucopurulenta profusa e conjuntivite bilateral com lacrimejamento e fotofobia exuberante. Há 12 horas surgiram lesões cutâneas avermelhadas na fronte e atrás das orelhas. Durante a oroscopia minuciosa, o pediatra visualiza micropápulas esbranquiçadas com halo eritematoso de cerca de 1 mm localizadas na mucosa jugal anterior, na altura do segundo molar inferior, assemelhando-se a grãos de areia sobre fundo vermelho. Em relação a esse enantema intraoral patognomônico e à patologia em questão, assinale a opção correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se das Manchas de Koplik, sinal patognomônico do Sarampo (Morbillivirus), que surge habitualmente 1 a 2 dias antes do exantema e desaparece precocemente nas primeiras 24 a 48 horas após a erupção cutânea.',
      },
      {
        id: 'B',
        texto:
          'Trata-se do Sinal de Forchheimer da Rubéola, caracterizado por petéquias puntiformes restritas ao palato duro e mole que persistem por até 30 dias.',
      },
      {
        id: 'C',
        texto:
          'Trata-se de candidíase oral pseudomembranosa aguda ("sapinho"), exigindo início imediato de nistatina oral líquida e descartando doenças virais exantemáticas.',
      },
      {
        id: 'D',
        texto:
          'Trata-se do Sinal de Filatow da Escarlatina, provocado por deposição de colônias bacterianas purulentas de Streptococcus pyogenes na mucosa vestibular.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'As Manchas de Koplik são consideradas o sinal semiológico patognomônico clássico do Sarampo (vírus da família Paramyxoviridae, gênero Morbillivirus). Elas consistem em pequenas lesões puntiformes branco-azuladas com base eritematosa na mucosa jugal, preferencialmente opostas aos molares inferiores. Surgem durante a fase prodrômica (1 a 2 dias antes do exantema craniocaudal), exatamente quando o paciente apresenta a tríade catarral intensa (tosse, coriza e conjuntivite com fotofobia), e desaparecem rapidamente dentro de 24 a 48 horas após a eclosão do exantema maculopapular. O achado permite confirmar o diagnóstico de sarampo antes mesmo da disseminação generalizada do exantema.',
    comentariosAlternativas: {
      A: 'Correta. Manchas de Koplik são patognomônicas do sarampo, surgem nos pródromos e desaparecem logo no início do exantema.',
      B: 'Incorreta. O Sinal de Forchheimer ocorre na rubéola e consiste em petéquias no palato mole, não manchas esbranquiçadas na mucosa jugal.',
      C: 'Incorreta. Placas de cândida são aderentes e difusas em língua/bochechas, sem a tríade catarral de tosse, coriza e fotofobia do sarampo.',
      D: 'Incorreta. O Sinal de Filatow é a palidez perioral em contraste com o rubor das bochechas na escarlatina.',
    },
  },
  {
    id: 'ped-exant-077',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Sarampo - Progressão Crânio-Caudal e Descamação Furfurácea',
    isRevisao: false,
    enunciado:
      'Criança de 3 anos com sarampo evolui no 5º dia de doença com exantema maculopapular avermelhado e aveludado que, após ter se iniciado na linha de implantação dos cabelos e região retroauricular, progrediu centrifugamente e de forma descendente, cobrindo face, pescoço, tronco e membros superiores e inferiores, atingindo agora as plantas dos pés. Na face e tronco superior, as lesões coalesceram intensamente formando placas eritematosas confluentes com áreas de pele sadia permeadas. A partir do 6º dia, a febre cede e as lesões cutâneas começam a clarear na mesma ordem em que surgiram. Qual é o padrão de descamação cutânea característico da fase de convalescença do sarampo?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Descamação furfurácea (farelácea ou em pó fino) associada a pigmentação castanho-acastanhada transitória, que poupa as regiões palmoplantares.',
      },
      {
        id: 'B',
        texto:
          'Descamação lamelar em lâminas espessas ("em dedo de luva") com necrose epidérmica profunda de extremidades.',
      },
      {
        id: 'C',
        texto:
          'Formação de crostas melicéricas aderentes e cicatrizes atróficas deprimidas e hipocrômicas permanentes.',
      },
      {
        id: 'D',
        texto:
          'Ausência absoluta de qualquer descamação, clareando sem nenhuma alteração da integridade da barreira córnea.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A evolução do exantema do sarampo é estritamente craniocaudal com tendência à confluência (morbiliforme). Na fase de declínio e convalescença (geralmente após o 6º a 7º dia), o exantema assume tonalidade acobreada/acastanhada e clareia na mesma sequência cronológica em que surgiu (da cabeça para os pés). O processo regenerativo da epiderme é marcado pela DESCAMAÇÃO FURFURÁCEA (farelácea, fina, como "farinha" ou pó), que acomete tronco e face e poupa palmas e plantas. Esse padrão contrasta nitidamente com a descamação lamelar/laminar em grandes lâminas (em luva e bota) observada na escarlatina e na Doença de Kawasaki.',
    comentariosAlternativas: {
      A: 'Correta. A descamação do sarampo é furfurácea/farelácea fina, com manchas acastanhadas residuais e sem acometimento palmoplantar.',
      B: 'Incorreta. Descamação em luva e bota lamelar é típica da escarlatina e da fase subaguda da Doença de Kawasaki.',
      C: 'Incorreta. Crostas melicéricas ocorrem no impetigo bacteriano; cicatrizes atróficas zosteriformes na varicela.',
      D: 'Incorreta. O sarampo cursa invariavelmente com descamação furfurácea visível.',
    },
  },
  {
    id: 'ped-exant-078',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Sarampo - Suplementação de Vitamina A pelo Ministério da Saúde',
    isRevisao: false,
    enunciado:
      'Lactente de 7 meses dá entrada no pronto-socorro infantil com diagnóstico clínico e laboratorial suspeito de sarampo. De acordo com as diretrizes e manuais técnicos do Ministério da Saúde do Brasil e da Organização Mundial da Saúde (OMS), qual é a recomendação formal referente à administração de Vitamina A para essa criança?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar Vitamina A na dose de 100.000 UI por via oral imediatamente (D0) e repetir a mesma dose no dia seguinte (D1), independentemente do estado nutricional prévio da criança.',
      },
      {
        id: 'B',
        texto:
          'Administrar dose única de 200.000 UI por via intramuscular profunda exclusivamente se houver desnutrição grave (escore Z de peso/idade < -3).',
      },
      {
        id: 'C',
        texto:
          'A suplementação de Vitamina A é formalmente contraindicada em lactentes menores de 9 meses devido ao risco iminente de fontanela abaulada e hipertensão intracraniana.',
      },
      {
        id: 'D',
        texto:
          'Prescrever Vitamina A 10.000 UI diariamente por via oral durante 60 dias consecutivos em nível ambulatorial.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O sarampo provoca uma depleção aguda e maciça das reservas corporais de vitamina A, danificando o epitélio respiratório e conjuntival e agravando a imunossupressão celular. Por isso, o Ministério da Saúde e a OMS preconizam o tratamento universal com Vitamina A para TODOS os casos de sarampo, em 2 doses consecutivas por via oral (no dia do diagnóstico [D0] e no dia seguinte [D1]):\n- Lactentes < 6 meses: 50.000 UI/dose oral em D0 e D1;\n- Crianças de 6 a 11 meses: 100.000 UI/dose oral em D0 e D1;\n- Crianças ≥ 12 meses e adultos: 200.000 UI/dose oral em D0 e D1.\nEssa intervenção reduz comprovadamente a morbimortalidade, a incidência de pneumonia grave, cegueira (xeroftalmia) e óbito por sarampo.',
    comentariosAlternativas: {
      A: 'Correta. Crianças de 6 a 11 meses recebem 100.000 UI por via oral em dois dias consecutivos (D0 e D1), sem necessidade de sinais de carência prévia.',
      B: 'Incorreta. 200.000 UI é a dose para maiores de 1 ano; e a indicação é universal, não restrita a desnutridos graves.',
      C: 'Incorreta. A Vitamina A é indicada e salva vidas em menores de 9 meses no sarampo.',
      D: 'Incorreta. O esquema padronizado mundialmente é de 2 doses de ataque consecutivas (D0 e D1), e não tratamento contínuo por 60 dias.',
    },
  },
  {
    id: 'ped-exant-079',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Profilaxia Pós-Exposição do Sarampo - Bloqueio Vacinal vs Imunoglobulina',
    isRevisao: false,
    enunciado:
      'Em um surto comunitário de sarampo, três contatos domiciliares suscetíveis (sem história de vacinação ou doença prévia) foram expostos há 48 horas a um caso índice bacilífero com exantema ativo: 1) Um lactente hígido de 8 meses; 2) Uma gestante de 26 semanas assintomática; 3) Uma criança de 4 anos portadora de imunodeficiência combinada grave. Segundo as normas de vigilância epidemiológica do Ministério da Saúde para profilaxia pós-exposição ao sarampo, qual é a conduta respectiva para cada um desses contatos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Lactente de 8 meses: vacina tríplice viral (bloqueio vacinal em até 72 horas); Gestante e Criança imunodeprimida: Imunoglobulina humana padrão (em até 6 dias do contato).',
      },
      {
        id: 'B',
        texto:
          'Lactente de 8 meses: Imunoglobulina humana específica; Gestante: vacina tríplice viral de alta potência; Criança imunodeprimida: conduta expectante.',
      },
      {
        id: 'C',
        texto:
          'Todos os três contatos devem receber exclusivamente a vacina tríplice viral no prazo máximo de 24 horas após o contato.',
      },
      {
        id: 'D',
        texto:
          'Nenhum contato deve receber profilaxia imunológica ativa ou passiva, preconizando-se apenas o isolamento por 21 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A profilaxia pós-exposição ao sarampo divide-se rigorosamente entre imunização ativa e passiva segundo o Ministério da Saúde:\n1) Vacina de bloqueio pós-exposição (Tríplice Viral): indicada para contatos suscetíveis imunocompetentes com idade a partir de 6 meses, desde que administrada em até 72 HORAS do contato infectante (o lactente de 8 meses recebe a "dose zero" de bloqueio);\n2) Imunoglobulina humana normal/padrão (imunoprofilaxia passiva): indicada para contatos suscetíveis de alto risco que possuem CONTRAINDICAÇÃO formal à vacina de vírus vivos atenuados (gestantes suscetíveis, imunodeprimidos graves e lactentes suscetíveis < 6 meses), desde que administrada em até 6 DIAS (144 horas) do contato.',
    comentariosAlternativas: {
      A: 'Correta. Vacina até 72h para o lactente hígido ≥ 6 meses; Imunoglobulina humana normal até 6 dias para a gestante e imunodeprimido.',
      B: 'Incorreta. A vacina tríplice viral é de vírus vivos atenuados e é absolutamente contraindicada para gestantes.',
      C: 'Incorreta. Criança com imunodeficiência combinada e gestantes não podem receber vacina de vírus atenuados.',
      D: 'Incorreta. A profilaxia pós-exposição é mandatória e eficaz na interrupção de cadeias de transmissão e prevenção de óbitos.',
    },
  },
  {
    id: 'ped-exant-080',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Sarampo - Panencefalite Esclerosante Subaguda (PEES)',
    isRevisao: false,
    enunciado:
      'Menino de 9 anos é levado ao neurologista pediátrico por apresentar declínio cognitivo progressivo, queda abrupta do rendimento escolar, alterações comportamentais com agressividade e, nas últimas semanas, mioclonias periódicas involuntárias repetitivas e ataxia de marcha progressiva. A investigação revela histórico de sarampo grave com necessidade de oxigenoterapia aos 11 meses de vida (não vacinado na época). A ressonância magnética de crânio demonstra desmielinização multifocal assimétrica da substância branca periventricular e o líquor evidencia níveis extremamente elevados de anticorpos IgG contra o vírus do sarampo com bandas oligoclonais. Trata-se da complicação neurológica tardia degenerativa conhecida como:',
    alternativas: [
      {
        id: 'A',
        texto: 'Panencefalite Esclerosante Subaguda (PEES).',
      },
      {
        id: 'B',
        texto: 'Encefalomielite Disseminada Aguda pós-infecciosa (ADEM).',
      },
      {
        id: 'C',
        texto: 'Ataxia telangiectasia congênita com atrofia cerebelar.',
      },
      {
        id: 'D',
        texto: 'Adrenoleucodistrofia ligada ao cromossomo X.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Panencefalite Esclerosante Subaguda (PEES ou Doença de Dawson) é uma complicação neurológica crônica, progressiva e fatal do sarampo, causada pela persistência de um vírus mutante defeituoso no parênquima cerebral. Ocorre tipicamente com um período de latência silenciosa de 6 a 10 anos após a primoinfecção natural pelo sarampo, acometendo preferencialmente indivíduos que contraíram o sarampo antes dos 2 anos de idade (devido à imaturidade do sistema imune durante a infecção primária). Caracteriza-se por declínio intelectual insidioso, espasmos mioclônicos periódicos sincrônicos, rigidez extrapiramidal, demência e óbito em 1 a 3 anos. O achado de títulos elevadíssimos de anticorpos anti-sarampo no líquor é diagnóstico.',
    comentariosAlternativas: {
      A: 'Correta. PEES é a encefalopatia crônica tardia degenerativa causada pela reativação/persistência de vírus mutante do sarampo anos após a infecção.',
      B: 'Incorreta. ADEM é uma complicação monofásica aguda/subaguda que surge dias a poucas semanas após infecções ou vacinas, respondendo a corticoterapia.',
      C: 'Incorreta. Ataxia telangiectasia tem defeito genético no gene ATM, com imunodeficiência e telangiectasias oculocutâneas.',
      D: 'Incorreta. Adrenoleucodistrofia decorre de acúmulo de ácidos graxos de cadeia muito longa com insuficiência adrenal associada.',
    },
  },
  {
    id: 'ped-exant-081',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Rubéola - Pródromos e Linfadenopatia Suboccipital',
    isRevisao: false,
    enunciado:
      'Menina de 6 anos é levada ao centro de saúde com queixa de febre baixa (37,8 °C) há 2 dias, leve adinamia e dor na região posterior do pescoço. Hoje pela manhã, os pais notaram o aparecimento de pequenas manchas rosadas e delicadas que começaram no rosto e já se espalharam para o peito e abdome, sem coceira. Ao exame físico: paciente em bom estado geral, eupnéica e afebril. À palpação de cadeias ganglionares, o médico identifica linfonodos aumentados de tamanho (1,5 a 2 cm), fibroelásticos e dolorosos nas regiões suboccipital, retroauricular (mastoídea) e cervical posterior. A oroscopia revela pequenas petéquias no palato mole (Sinal de Forchheimer). O achado clínico patognomônico e mais marcante que orienta a suspeita primária de Rubéola é:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A linfadenopatia dolorosa em cadeias suboccipital, pós-auricular e cervical posterior, que frequentemente precede o exantema em até 5 a 7 dias.',
      },
      {
        id: 'B',
        texto:
          'A tosse coqueluchoide intensa associada a conjuntivite purulenta com ceratite bacteriana.',
      },
      {
        id: 'C',
        texto:
          'O aparecimento súbito de bolhas hemorrágicas com descolamento epidérmico extenso nas nádegas.',
      },
      {
        id: 'D',
        texto:
          'A hepatomegalia dolorosa maciça que atinge a fossa ilíaca direita com icterícia colestática precoce.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O sinal clínico mais característico, marcante e distintivo da Rubéola pós-natal (causada por um vírus de RNA da família Matonaviridae / Togaviridae, gênero Rubivirus) é a linfadenopatia suboccipital, retroauricular (mastoídea) e cervical posterior. Esses linfonodos tornam-se aumentados, isolados, fibroelásticos e dolorosos à palpação, surgindo habitualmente até uma semana ANTES da erupção cutânea e podendo persistir por semanas após o clareamento do exantema. O exantema rubeoliforme é máculopapular róseo, delicado, não confluente e de evolução craniocaudal rápida (dura apenas cerca de 3 dias, sendo conhecida como "sarampo de 3 dias").',
    comentariosAlternativas: {
      A: 'Correta. A linfadenomegalia suboccipital e retroauricular é a marca semiológica primordial da rubéola.',
      B: 'Incorreta. Tosse intensa e conjuntivite exuberante com fotofobia são achados característicos do sarampo.',
      C: 'Incorreta. Rubéola não produz lesões bolhosas ou necrose cutânea.',
      D: 'Incorreta. Rubéola pós-natal não cursa com insuficiência hepática ou icterícia colestática grave.',
    },
  },
  {
    id: 'ped-exant-082',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Síndrome da Rubéola Congênita - Tríade de Gregg',
    isRevisao: false,
    enunciado:
      'Recém-nascido pré-termo tardio (36 semanas), pequeno para a idade gestacional (PIG), filho de mãe não vacinada que apresentou quadro febril com rash cutâneo fugaz e dor articular no primeiro trimestre de gravidez. Ao exame físico neonatal: microcefalia, reflexo vermelho do olho ausente bilateralmente com opacificação do cristalino (leucocoria), sopro sistólico contínuo ("em maquinaria") audível em borda esternal superior esquerda irradiado para dorso, e lesões purpúricas cutâneas difusas ("blueberry muffin baby"). O ecocardiograma confirma Persistência do Canal Arterial (PCA) e estenose periférica de artéria pulmonar. As otoemissões acústicas revelam ausência bilateral de respostas cocleares. Esse quadro clássico traduz a:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome da Rubéola Congênita com a Tríade clássica de Gregg (catarata congênita, cardiopatia congênita [PCA] e surdez neurossensorial).',
      },
      {
        id: 'B',
        texto:
          'Síndrome de Edwards (trissomia do cromossomo 18) com cardiopatia congênita complexa.',
      },
      {
        id: 'C',
        texto:
          'Toxoplasmose congênita clássica com a Tétrade de Sabin.',
      },
      {
        id: 'D',
        texto:
          'Citomegalovirose congênita assintomática isolada.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Síndrome da Rubéola Congênita (SRC) ocorre com maior frequência e gravidade quando a infecção materna primária se dá nas primeiras 12 a 16 semanas de gestação (primeiro trimestre). A clássica Tríade de Gregg é composta por: 1) Alterações oculares: catarata congênita (leucocoria com reflexo vermelho ausente), microftalmia e retinopatia em "sal e pimenta"; 2) Cardiopatia congênita estrutural: Persistência do Canal Arterial (PCA) com sopro contínuo em maquinaria e estenose periférica dos ramos da artéria pulmonar; 3) Surdez neurossensorial (a sequela isolada mais frequente). A hematopoiese extramedular dérmica produz o aspecto purpúrico nodular clássico de "muffin de mirtilo" (blueberry muffin baby).',
    comentariosAlternativas: {
      A: 'Correta. Tríade de Gregg da Rubéola Congênita: catarata congênita, PCA/estenose de artéria pulmonar e surdez neurossensorial.',
      B: 'Incorreta. Trissomia do 18 cursa com sobreposição de dedos das mãos, calcâneo proeminente em mata-borrão e micrognatia acentuada.',
      C: 'Incorreta. A Tétrade de Sabin da Toxoplasmose é: coriorretinite, hidrocefalia, calcificações intracranianas difusas e retardo mental.',
      D: 'Incorreta. CMV congênito sintomático cursa classicamente com calcificações periventriculares e microcefalia, raramente com PCA e catarata bilateral.',
    },
  },
  {
    id: 'ped-exant-083',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Rubéola Congênita - Excreção Viral e Isolamento',
    isRevisao: false,
    enunciado:
      'Um recém-nascido com diagnóstico laboratorial e clínico confirmado de Síndrome da Rubéola Congênita está internado no berçário de alto risco. A equipe multidisciplinar discute as precauções de isolamento e o tempo de transmissibilidade viral desse paciente para a comunidade e outros contactantes hospitalares. Qual é a orientação epidemiológica correta segundo o Ministério da Saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O lactente com rubéola congênita elimina grandes quantidades de vírus na urina e secreções respiratórias por períodos prolongados (frequentemente até 1 ano de vida), necessitando de precauções de contato estritas e afastamento de gestantes suscetíveis.',
      },
      {
        id: 'B',
        texto:
          'A eliminação viral cessa completamente no momento do clampeamento do cordão umbilical, dispensando qualquer precaução após o nascimento.',
      },
      {
        id: 'C',
        texto:
          'O vírus só é eliminado se a criança apresentar diarreia aquosa profusa com desidratação grave.',
      },
      {
        id: 'D',
        texto:
          'O isolamento é necessário apenas durante as primeiras 24 horas de vida, sendo liberado após o banho com clorexidina degermante.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diferentemente da rubéola pós-natal (cuja transmissibilidade dura cerca de 7 dias antes a 7 dias após o exantema), os recém-nascidos portadores de Síndrome da Rubéola Congênita (SRC) tornam-se portadores crônicos do vírus com excreção viral maciça e persistente através da orofaringe, secreções respiratórias e urina. Cerca de 85% dos conceptos com SRC excretam o vírus no primeiro mês de vida, 50% aos 6 meses e até 10% a 20% continuam eliminando o vírus ativo com 1 ano de idade. Por isso, são fontes altamente contagiosas de surtos hospitalares e comunitários, devendo permanecer sob isolamento de contato rigoroso e com proibição categórica de visita por gestantes.',
    comentariosAlternativas: {
      A: 'Correta. Crianças com SRC excretam vírus na nasofaringe e urina por até 1 ano ou mais, exigindo precauções estritas de contato.',
      B: 'Incorreta. A replicação viral e excreção persistem por meses a fio no organismo cronicamente infectado.',
      C: 'Incorreta. A transmissão se dá por secreções respiratórias e urina, independentemente de haver sintomas gastrintestinais.',
      D: 'Incorreta. 24 horas é insuficiente; a vigilância de culturas e precauções costuma ser mantida durante o primeiro ano de vida.',
    },
  },
  {
    id: 'ped-exant-084',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Meningococcemia - Púrpura Fulminante e Reconhecimento Imediato',
    isRevisao: false,
    enunciado:
      'Menino de 2 anos é admitido na sala vermelha da emergência em estado grave, prostrado, torporoso e com febre de 39,9 °C há 10 horas. Ao exame físico: taquipneico (FR: 56 irpm), taquicárdico (FC: 185 bpm), pulsos periféricos filiformes, tempo de enchimento capilar de 5 segundos e extremidades frias. Na ectoscopia dermatológica: lesões petequiais iniciais que confluíram rapidamente para placas purpúricas violáceas palpáveis ("púrpura fulminante") com áreas de necrose central e contornos irregulares distribuídas no abdome, coxas e membros inferiores. A mãe refere que as primeiras "pintas vermelhas" surgiram há apenas 3 horas e se multiplicaram vertiginosamente. Qual é o diagnóstico presuntivo mandatório e a conduta farmacológica imediata?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Doença Meningocócica invasiva com Meningococcemia / Púrpura Fulminante (Neisseria meningitidis); ressuscitação volêmica vigorosa imediata com cristaloide, coleta rápida de hemoculturas e administração imediata de Ceftriaxona intravenosa (sem aguardar punção lombar).',
      },
      {
        id: 'B',
        texto:
          'Púrpura de Henoch-Schönlein não complicada; prescrever repouso domiciliar e analgésicos orais.',
      },
      {
        id: 'C',
        texto:
          'Exantema súbito complicado com dermatite por estase venosa; prescrever banhos de permanganato de potássio.',
      },
      {
        id: 'D',
        texto:
          'Dengue com febre hemorrágica; contraindicar qualquer antibiótico e realizar punção liquórica de urgência antes de hidratar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Meningococcemia é uma emergência médica pediátrica com altíssima letalidade e evolução hiperaguda (horas). Causada pela bactéria Neisseria meningitidis (meningococo, um diplococo Gram-negativo), caracteriza-se por endotoxemia maciça, lesão endotelial disseminada, choque séptico distributivo e coagulação intravascular disseminada (CIVD) que se expressa dermatologicamente pela Púrpura Fulminante (lesões purpúricas e equimóticas palpáveis, extensas e com necrose tecidual isquêmica rápida). Em vigência de choque séptico e púrpura fulminante, a punção lombar é formalmente CONTRAINDICADA pela instabilidade hemodinâmica e risco de herniação. A conduta é: acesso venoso rápido, expansão volêmica com cristaloide isotônico e início imediato de Ceftriaxona ou Penicilina Cristalina intravenosa na primeira hora.',
    comentariosAlternativas: {
      A: 'Correta. Meningococcemia hiperaguda com choque e púrpura fulminante; exige ressuscitação e Ceftriaxona sem atraso para punção liquórica.',
      B: 'Incorreta. Henoch-Schönlein (vasculite por IgA) cursa com bom estado geral, plaquetas normais e sem choque hemodinâmico agudo.',
      C: 'Incorreta. Exantema súbito é maculopapular e ocorre em criança com ótimo estado geral após cessação da febre.',
      D: 'Incorreta. Atrasar antibiótico diante de púrpura fulminante por suspeita de dengue é erro crasso associado a desfecho fatal.',
    },
  },
  {
    id: 'ped-exant-085',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Meningococcemia - Síndrome de Waterhouse-Friderichsen',
    isRevisao: false,
    enunciado:
      'Lactente de 1 ano com quadro fulminante de meningococcemia evolui com choque séptico refratário a altas doses de volume e catecolaminas (noradrenalina e adrenalina), hipoglicemia refratária grave e hipotensão arterial intratável. Os exames laboratoriais revelam acidose metabólica importante, hiponatremia e hipercalemia marcantes. A necrópsia / tomografia demonstra necrose hemorrágica bilateral aguda das glândulas adrenais (suprarrenais). Essa catastrófica complicação endocrinológica é classicamente denominada:',
    alternativas: [
      {
        id: 'A',
        texto: 'Síndrome de Waterhouse-Friderichsen.',
      },
      {
        id: 'B',
        texto: 'Síndrome de Sheehan neonatal.',
      },
      {
        id: 'C',
        texto: 'Síndrome de Cushing iatrogênica aguda.',
      },
      {
        id: 'D',
        texto: 'Síndrome de Nelson adrenocortical.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Síndrome de Waterhouse-Friderichsen é a falência adrenal aguda hemorrágica bilateral decorrente de trombose microvascular maciça e isquemia das glândulas suprarrenais no contexto de sepse grave fulminante, principalmente associada à meningococcemia (Neisseria meningitidis). Manifesta-se por colapso cardiovascular intratável (choque refratário a vasopressores), insuficiência glicocorticoide e mineralocorticoide aguda com hipoglicemia severa, hiponatremia e hiperpotassemia. A reposição empírica de hidrocortisona em dose de estresse ("choque refratário a catecolaminas com suspeita de insuficiência adrenal relativa") é indicada nessas circunstâncias.',
    comentariosAlternativas: {
      A: 'Correta. Síndrome de Waterhouse-Friderichsen: apoplexia/necrose hemorrágica bilateral das adrenais secundária à meningococcemia fulminante.',
      B: 'Incorreta. Síndrome de Sheehan é a necrose isquêmica da hipófise anterior pós-hemorragia pós-parto materna.',
      C: 'Incorreta. Síndrome de Cushing decorre de excesso de cortisol, oposto da insuficiência adrenal descrita.',
      D: 'Incorreta. Síndrome de Nelson ocorre após adrenalectomia bilateral em adultos portadores de doença de Cushing.',
    },
  },
  {
    id: 'ped-exant-086',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Doença Meningocócica - Quimioprofilaxia de Contatos',
    isRevisao: false,
    enunciado:
      'Criança de 4 anos interna na UTI pediátrica com o diagnóstico confirmado de Doença Meningocócica invasiva por Neisseria meningitidis sorogrupo B. A autoridade sanitária local inicia a busca ativa dos contactantes que necessitam de quimioprofilaxia antimicrobiana para eliminação do estado de carreador orofaríngeo da bactéria. Qual das seguintes pessoas tem indicação formal de receber quimioprofilaxia segundo as diretrizes de vigilância do Ministério da Saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Os contatos domiciliares íntimos que dormem na mesma residência do paciente e os colegas de sala da creche com contato diário prolongado (≥ 4 horas diárias por pelo menos 5 dias na semana anterior).',
      },
      {
        id: 'B',
        texto:
          'Todos os alunos, professores, funcionários e vizinhos de todo o bairro residencial do paciente.',
      },
      {
        id: 'C',
        texto:
          'Apenas os profissionais de saúde que circularam pelo corredor do hospital usando máscara cirúrgica comum.',
      },
      {
        id: 'D',
        texto:
          'Ninguém tem indicação de quimioprofilaxia quando o sorogrupo isolado for o B, pois a Neisseria B não é transmissível por via aérea.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A quimioprofilaxia para Doença Meningocócica tem como objetivo erradicar a colonização orofaríngea de Neisseria meningitidis em indivíduos com alto risco de transmissão secundária. As indicações formais do Ministério da Saúde incluem:\n1) Contatos domiciliares íntimos que residem na mesma casa do caso índice;\n2) Colegas de creche e escola de educação infantil com exposição prolongada e contínua;\n3) Pessoas que tiveram contato íntimo direto com as secreções respiratórias orais do paciente (ex.: beijo na boca, respiração boca a boca);\n4) Profissionais de saúde SOMENTE se realizaram procedimentos invasivos de vias aéreas sem proteção adequada (intubação traqueal, aspiração de secreções ou ressuscitação sem máscara de barreira). O esquema de escolha é a Rifampicina oral de 12/12h por 2 dias (ou Ceftriaxona IM dose única ou Ciprofloxacino oral dose única em adultos).',
    comentariosAlternativas: {
      A: 'Correta. Contatos íntimos domiciliares e de creche com convivência prolongada têm indicação estrita de quimioprofilaxia com rifampicina.',
      B: 'Incorreta. Não se faz quimioprofilaxia comunitária ampliada para escolas inteiras ou bairros.',
      C: 'Incorreta. Profissionais que usaram EPI ou não tiveram contato direto desprotegido com aerossóis de vias aéreas não necessitam de profilaxia.',
      D: 'Incorreta. Todos os sorogrupos de meningococo (A, B, C, W, Y) são altamente contagiosos e exigem quimioprofilaxia nos contatos elegíveis.',
    },
  },
  {
    id: 'ped-exant-087',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Síndrome de Stevens-Johnson (SSJ) e Necrólise Epidérmica Tóxica (NET)',
    isRevisao: false,
    enunciado:
      'Menino de 8 anos iniciou uso de Carbamazepina há 18 dias para controle de crises epilépticas focais. Há 3 dias apresenta febre alta, odinofagia, conjuntivite bilateral com exsudato purulento e eritema cutâneo difuso. Hoje evolui com surgimento de máculas eritematosas em "alvo atípico", bolhas flácidas disseminadas que se rompem deixando extensas áreas de derme viva desnuda dolorosa, atingindo 8% da superfície corpórea, associada a estomatite erosiva hemorrágica labial crostosa exuberante e balanite erosiva com queixa de disúria intensa. A tração tangencial suave na pele aparentemente íntegra provoca o seu descolamento imediato (Sinal de Nikolsky positivo). O diagnóstico clínico e a conduta imediata são:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome de Stevens-Johnson (SSJ); suspensão imediata e definitiva da carbamazepina, internação em unidade de terapia intensiva ou de queimados, suporte hidroeletrolítico rigoroso e cuidados intensivos de pele e mucosas.',
      },
      {
        id: 'B',
        texto:
          'Exantema súbito atípico; dobrar a dose da carbamazepina para controlar a febre de origem neurológica central.',
      },
      {
        id: 'C',
        texto:
          'Escarlatina bolhosa resistente; iniciar penicilina benzatina associada a anti-histamínicos tópicos nas mucosas.',
      },
      {
        id: 'D',
        texto:
          'Herpes-zóster disseminado primário; prescrever pomada de aciclovir tópico nas lesões e liberar alta hospitalar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Síndrome de Stevens-Johnson (SSJ) e a Necrólise Epidérmica Tóxica (NET) são farmacodermias graves com risco de óbito, causadas por reação imunomediada citotóxica mediada por linfócitos T e granulisina, desencadeada comumente por anticonvulsivantes (carbamazepina, lamotrigina, fenitoína), alopurinol, sulfas e AINEs após 1 a 4 semanas de uso. Características definidoras da SSJ: 1) Pródromos febris e catarrais; 2) Lesões em alvo atípicas e bolhas flácidas com Sinal de Nikolsky positivo; 3) Acometimento grave e erosivo de pelo menos 2 superfícies mucosas (labial/oral, conjuntival, anogenital); 4) Desnudamento cutâneo < 10% da superfície corpórea (acima de 30% define NET, e 10-30% é a zona de sobreposição SSJ/NET). A primeira e mais crucial conduta é a SUSPENSÃO IMEDIATA da droga culpada e transferência para UTI/Centro de Tratamento de Queimados.',
    comentariosAlternativas: {
      A: 'Correta. SSJ com acometimento mucoso grave, < 10% de descolamento epidérmico e Nikolsky positivo; requer suspensão da droga e internação em UTI/CTQ.',
      B: 'Incorreta. Manter ou aumentar a dose da carbamazepina levaria à rápida evolução para NET com 100% de letalidade.',
      C: 'Incorreta. Escarlatina não causa bolhas com necrose epidérmica nem úlceras orogenitais sangrantes.',
      D: 'Incorreta. O quadro é uma emergência dermatológica toxigênica imune medicamentosa, não uma infecção por zóster.',
    },
  },
  {
    id: 'ped-exant-088',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Diagnóstico Diferencial: SSJ/NET vs SSSS (Pele Escaldada)',
    isRevisao: false,
    enunciado:
      'Tanto na Síndrome da Pele Escaldada Estafilocócica (SSSS) quanto na Necrólise Epidérmica Tóxica (NET), o médico encontra descolamento epidérmico com bolhas e Sinal de Nikolsky positivo. Qual elemento clínico e histopatológico é fundamental para diferenciar com segurança a Síndrome da Pele Escaldada Estafilocócica (SSSS) da Necrólise Epidérmica Tóxica (NET)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Na SSSS as mucosas (oral, ocular e genital) são estritamente POUPADAS e a clivagem histopatológica ocorre na camada granulosa subcórnea da epiderme por ação de toxina esfoliativa; já na NET há necrose transmural de toda a espessura da epiderme com ACOTIMENTO GRAVE e erosivo das mucosas.',
      },
      {
        id: 'B',
        texto:
          'Na NET não há Sinal de Nikolsky, enquanto na SSSS o sinal é obrigatoriamente negativo.',
      },
      {
        id: 'C',
        texto:
          'A SSSS acomete apenas idosos acamados e a NET ocorre exclusivamente em recém-nascidos prematuros.',
      },
      {
        id: 'D',
        texto:
          'A SSSS é desencadeada por sulfametoxazol e a NET é uma infecção direta provocada pelo vírus influenza B.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Essa é uma das distinções conceituais e práticas mais clássicas em concursos médicos:\n1) Síndrome da Pele Escaldada Estafilocócica (SSSS): mediada por exotoxinas esfoliativas (ET-A e ET-B) do Staphylococcus aureus. A clivagem ocorre na camada GRANULOSA intraepidérmica superficial (clivagem da desmogleína-1). AS MUCOSAS ESTÃO CLICINAMENTE POUPADAS e o descolamento é superficial, cicatrizando sem cicatrizes em cerca de 10 dias com antibioticoterapia antiestafilocócica (Oxacilina);\n2) Necrólise Epidérmica Tóxica (NET): farmacodermia imunocelular mediada por linfócitos T citotóxicos e granulisina. A clivagem ocorre na JUNÇÃO DERMOEPIDÉRMICA com necrose completa de TODA a espessura da epiderme (necrólise de espessura total). HÁ ACOMETIMENTO GRAVÍSSIMO DE MUCOSAS (labial, ocular com risco de simbléfaro e cegueira, e genital).',
    comentariosAlternativas: {
      A: 'Correta. SSSS poupa mucosas com clivagem na granulosa; NET acomete intensamente mucosas com necrose transmural da epiderme na membrana basal.',
      B: 'Incorreta. O Sinal de Nikolsky é positivo em ambas as condições.',
      C: 'Incorreta. SSSS é quase exclusiva de neonatos e pré-escolares (< 5 anos); NET pode acometer qualquer faixa etária exposta a fármacos.',
      D: 'Incorreta. As etiologias estão invertidas: SSSS é estafilocócica e NET é medicamentosa (sulfas, anticonvulsivantes).',
    },
  },
  {
    id: 'ped-exant-089',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Síndrome DRESS (Drug Reaction with Eosinophilia and Systemic Symptoms)',
    isRevisao: false,
    enunciado:
      'Adolescente de 14 anos iniciou tratamento com Fenitoína há 5 semanas devido a epilepsia pós-traumática. Há 6 dias apresenta febre alta diária (39 °C), mal-estar e surgimento de exantema máculopapular eritematoso difuso e confluente com edema facial e periorbitário marcante ("fácies em lua cheia" edemaciada). Ao exame: linfonodomegalia generalizada dolorosa em cadeias cervicais, axilares e inguinais (> 2 cm), além de hepatomegalia discreta. O hemograma revela leucocitose importante (24.000 leucócitos/mm³) com 22% de eosinófilos (eosinofilia absoluta de 5.280/mm³) e presença de linfócitos atípicos. As aminotransferases estão marcadamente alteradas (AST: 420 U/L e ALT: 510 U/L). O diagnóstico mais provável é:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome DRESS (Reação a Drogas com Eosinofilia e Sintomas Sistêmicos).',
      },
      {
        id: 'B',
        texto:
          'Mononucleose infecciosa por citomegalovírus sem relação com fármacos.',
      },
      {
        id: 'C',
        texto:
          'Escarlatina estafilocócica tóxica.',
      },
      {
        id: 'D',
        texto:
          'Febre Chikungunya forma crônica.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Síndrome DRESS (Drug Reaction with Eosinophilia and Systemic Symptoms / Reação a Drogas com Eosinofilia e Sintomas Sistêmicos) é uma farmacodermia grave com latência tipicamente longa (inicia-se de 2 a 8 semanas após a introdução da droga causadora, mais comumente anticonvulsivantes aromáticos como fenitoína, carbamazepina e fenobarbital, além de lamotrigina, alopurinol e sulfas). A tétrade clínica diagnóstica compreende: 1) Febre alta persistente; 2) Exantema maculopapular difuso associado a EDEMA FACIAL proeminente (achado clínico altamente sugestivo); 3) Linfadenopatia generalizada em múltiplas cadeias; 4) Acometimento de órgãos internos (sendo a HEPATITE medicamentosa a mais frequente, seguida de nefrite e pneumonite), com EOSINOFILIA marcante no sangue e linfocitose atípica (frequentemente associada à reativação de herpes-vírus como HHV-6 e EBV). A droga deve ser suspensa imediatamente e introduzida corticoterapia sistêmica.',
    comentariosAlternativas: {
      A: 'Correta. Síndrome DRESS: edema facial, eosinofilia acentuada, linfadenopatia generalizada e hepatite pós-anticonvulsivante (fenitoína).',
      B: 'Incorreta. CMV não causa eosinofilia tão massiva nem edema facial associado à introdução recente de anticonvulsivante.',
      C: 'Incorreta. Escarlatina não cursa com eosinofilia intensa, edema facial acentuado e hepatite grave.',
      D: 'Incorreta. Chikungunya causa poliartralgia inflamatória incapacitante, sem eosinofilia proeminente de 22%.',
    },
  },
  {
    id: 'ped-exant-090',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Sarampo - Fisiopatologia da Imunossupressão ("Amnésia Imunológica")',
    isRevisao: false,
    enunciado:
      'Uma das características biológicas mais temidas da infecção pelo vírus do Sarampo é a imunossupressão transitória e profunda que se instala durante e após o quadro clínico, podendo perdurar por vários meses e deixando a criança altamente suscetível a superinfecções bacterianas graves e reativação de infecções latentes. Qual é o mecanismo celular pelo qual o vírus do sarampo induz esse fenômeno de imunodeficiência adquirida secundária (frequentemente denominado "amnésia imunológica")?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Infecção e destruição seletiva de linfócitos T de memória e linfócitos B de memória através do receptor celular CD150 (SLAM), resultando no apagamento temporário do repertório imunológico adquirido previamente pela criança.',
      },
      {
        id: 'B',
        texto:
          'Inibição química direta da síntese de ácido fólico bacteriano nos enterócitos intestinais.',
      },
      {
        id: 'C',
        texto:
          'Lise de todas as plaquetas e megacariócitos com destruição vascular do endotélio hepático.',
      },
      {
        id: 'D',
        texto:
          'Paralisia seletiva dos receptores de dor periféricos sem afetar a produção de anticorpos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Morbillivirus do sarampo utiliza o receptor SLAM (Signaling Lymphocytic Activation Molecule ou CD150), expresso primordialmente em linfócitos B e T de memória, células dendríticas e monócitos, para entrar nas células do sistema imune do hospedeiro. Uma vez no interior celular, ele provoca apoptose maciça e reprogramação dessas células imunes. Esse fenômeno, demonstrado recentemente pela ciência e chamado de "amnésia imunológica", elimina entre 20% e 70% do repertório de anticorpos e células de memória que a criança havia construído ao longo da vida contra outros patógenos (pneumococo, Haemophilus, estafilococo, influenza), explicando por que crianças que se recuperam do sarampo têm risco aumentado de hospitalização e morte por outras infecções bacterianas e virais nos 2 a 3 anos subsequentes.',
    comentariosAlternativas: {
      A: 'Correta. Entrada pelo CD150 (SLAM) com depleção de células T e B de memória, causando a amnésia imunológica do sarampo.',
      B: 'Incorreta. Este é o mecanismo farmacológico das sulfas e do metotrexato, não do vírus do sarampo.',
      C: 'Incorreta. A destruição plaquetária não é o mecanismo de imunodeficiência celular adquirida.',
      D: 'Incorreta. O vírus afeta profundamente o sistema imunológico humoral e celular.',
    },
  },
  {
    id: 'ped-exant-091',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Rubéola - Diagnóstico Sorológico na Gestação',
    isRevisao: false,
    enunciado:
      'Gestante de 10 semanas de gestação realizou exames de rotina de pré-natal que revelaram: Sorologia para Rubéola com IgG reagente (título elevado) e IgM reagente. A paciente está assintomática e não recorda se recebeu a vacina na infância. Para esclarecer se trata-se de uma primoinfecção aguda com alto risco de transmissão vertical e teratogênese congênita versus IgM falso-positivo ou persistente de imunização pregressa, qual exame laboratorial complementar deve ser solicitado imediatamente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Teste de Avidez de IgG para Rubéola.',
      },
      {
        id: 'B',
        texto:
          'Biópsia de vilo corial para cultura em meio de Sabouraud.',
      },
      {
        id: 'C',
        texto:
          'Resssonância magnética nuclear de crânio materno contrastada com gadolínio.',
      },
      {
        id: 'D',
        texto:
          'Repetir apenas o hemograma completo após 60 dias sem intervir no pré-natal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A presença de IgM reagente para rubéola no primeiro trimestre de gravidez representa uma situação de angústia e gravidade devido ao risco de Síndrome da Rubéola Congênita (até 80-90% de acometimento fetal com malformações graves nas primeiras 12 semanas). No entanto, testes de IgM podem resultar falso-positivos por reações cruzadas (ex.: infecção por parvovírus, EBV ou fator reumatoide) ou por persistência prolongada de IgM pós-vacinal. O Teste de Avidez de IgG é o exame padrão-ouro para solucionar esse dilema:\n- ALTA AVIDEZ DE IgG (> 60-70% nas primeiras 12 a 16 semanas): confirma que os anticorpos foram produzidos há mais de 3 a 4 meses (infecção pregressa ou imunidade vacinal antiga), TRANQUILIZANDO a gestante quanto ao risco de rubéola congênita;\n- BAIXA AVIDEZ DE IgG (< 30-40%): indica infecção aguda recente adquirida durante a gravidez (primoinfecção), confirmando alto risco teratogênico.',
    comentariosAlternativas: {
      A: 'Correta. O teste de avidez de IgG define se a infecção é recente (baixa avidez) ou antiga/segura (alta avidez) no primeiro trimestre.',
      B: 'Incorreta. Sabouraud é meio de cultura para fungos.',
      C: 'Incorreta. RNM com gadolínio é contraindicada na gravidez e inútil para confirmação de virose sistêmica congênita.',
      D: 'Incorreta. Esperar 60 dias atrasa o diagnóstico fetal e o aconselhamento gestacional na janela crítica de embriogênese.',
    },
  },
  {
    id: 'ped-exant-092',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Síndrome do Choque Tóxico Estafilocócico (TSS)',
    isRevisao: false,
    enunciado:
      'Menina de 12 anos em uso de tampões higiênicos vaginais durante o período menstrual é levada à emergência pediátrica com febre alta súbita (40 °C), calafrios, vômitos profusos, diarreia aquosa e prostração intensa há 18 horas. Ao exame físico: extremamente hipocorada, PA: 70/40 mmHg (choque distributivo hipotensivo), tempo de enchimento capilar de 4 segundos e exantema macular eritematoso difuso homogêneo ("semelhante a uma queimadura solar"), que envolve o tronco, membros e atinge de forma marcante as palmas das mãos e plantas dos pés, acompanhado de hiperemia conjuntival bilateral e língua em framboesa. Qual é a toxina bacteriana causadora dessa síndrome do superantígeno?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Toxina da Síndrome do Choque Tóxico 1 (TSST-1), produzida por cepas de Staphylococcus aureus.',
      },
      {
        id: 'B',
        texto:
          'Toxina botulínica tipo A, produzida por Clostridium botulinum.',
      },
      {
        id: 'C',
        texto:
          'Toxina tetânica (tetanoespasmina), produzida por Clostridium tetani.',
      },
      {
        id: 'D',
        texto:
          'Endotoxina citopática do vírus varicela-zóster recombinante.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Síndrome do Choque Tóxico Estafilocócico (TSS) é desencadeada primordialmente pela Toxina da Síndrome do Choque Tóxico 1 (TSST-1) ou por enterotoxinas estafilocócicas produzidas por Staphylococcus aureus colonizador (historicamente associado ao uso prolongado de absorventes internos/tampões menstruais em adolescentes ou a infecções de sítio cirúrgico/queimaduras). A TSST-1 atua como um SUPERANTÍGENO: liga-se diretamente e simultaneamente à porção invariante da molécula de MHC de classe II nas células apresentadoras de antígeno e à cadeia V-beta do receptor de linfócitos T (TCR), dispensando o processamento antigênico convencional e ativando até 20% de todos os linfócitos T do organismo. Isso culmina em uma tempestade massiva de citocinas pró-inflamatórias (IL-1, IL-2, TNF-alfa, IFN-gama), provocando choque refratário, exantema tipo queimadura solar e falência de múltiplos órgãos.',
    comentariosAlternativas: {
      A: 'Correta. A TSST-1 atua como superantígeno estimulando uma liberação massiva de citocinas e choque com exantema eritrodérmico.',
      B: 'Incorreta. A toxina botulínica bloqueia a liberação de acetilcolina na placa motora, causando paralisia flácida descendente sem febre ou rash difuso.',
      C: 'Incorreta. A tetanospasmina bloqueia a liberação de GABA e glicina, provocando espasmos musculares dolorosos e trismo.',
      D: 'Incorreta. O VZV é um vírus e não produz endotoxinas bacterianas.',
    },
  },
  {
    id: 'ped-exant-093',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Varicela - Síndrome da Varicela Fetal / Congênita',
    isRevisao: false,
    enunciado:
      'Gestante suscetível contraiu varicela primária na 14ª semana de idade gestacional. Na ultrassonografia morfológica fetal realizada com 22 semanas, constata-se feto com restrição de crescimento intrauterino acentuada, hipoplasia e encurtamento ósseo unilateral acentuado do membro inferior esquerdo (membro hipoplásico com pé torto), atrofia cortical cerebral e microftalmia com cicatrizes coriorretinianas. Ao nascer, a criança exibe lesões cicatriciais deprimidas na pele com padrão zosteriforme (em trajeto de dermátomo). O diagnóstico é:',
    alternativas: [
      {
        id: 'A',
        texto: 'Síndrome da Varicela Congênita.',
      },
      {
        id: 'B',
        texto: 'Rubéola congênita grave.',
      },
      {
        id: 'C',
        texto: 'Síndrome de Patau (trissomia do 13).',
      },
      {
        id: 'D',
        texto: 'Toxoplasmose congênita pura.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Síndrome da Varicela Congênita ocorre quando a gestante suscetível adquire infecção primária pelo Vírus Varicela-Zóster (VZV) no primeiro ou segundo trimestre da gestação (especialmente entre a 8ª e a 20ª semana, com risco de transmissão e teratogênese em cerca de 1 a 2% das gestantes infectadas nessa época). As características patognomônicas descritas incluem:\n1) Lesões cutâneas cicatriciais lineares ou zosteriformes, deprimidas, semelhantes a queimaduras em dermátomos;\n2) Hipoplasia de extremidades com encurtamento de ossos longos, paralisia e atrofia muscular do membro;\n3) Alterações do sistema nervoso central (microcefalia, atrofia cortical, calcificações e convulsões);\n4) Lesões oculares (coriorretinite, catarata, microftalmia e atrofia óptica).\nEsse quadro não deve ser confundido com a varicela perinatal (adquirida ao redor do parto), que é uma infecção aguda disseminada.',
    comentariosAlternativas: {
      A: 'Correta. Síndrome da Varicela Congênita: cicatrizes zosteriformes deprimidas, hipoplasia de membros e lesões oculoneurológicas.',
      B: 'Incorreta. Rubéola congênita cursa com a tríade de Gregg (catarata, PCA e surdez), sem cicatrizes zosteriformes e hipoplasia de extremidades.',
      C: 'Incorreta. Trissomia 13 apresenta holoprosencefalia, polidactilia pós-axial e fenda labiopalatina bilateral.',
      D: 'Incorreta. Toxoplasmose congênita cursa com a tétrade de Sabin (coriorretinite, calcificações difusas e hidrocefalia), sem hipoplasia óssea.',
    },
  },
  {
    id: 'ped-exant-094',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Sarampo - Diagnóstico Laboratorial e Sorologia',
    isRevisao: false,
    enunciado:
      'Diante de um caso suspeito de Sarampo atendido em uma unidade sentinela de vigilância epidemiológica, quais são os exames laboratoriais preconizados pelo Ministério da Saúde do Brasil para a confirmação diagnóstica e quando devem ser coletadas as amostras biológicas ideais?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sorologia (dosagem de anticorpos IgM e IgG específicos) coletada no primeiro contato a partir do aparecimento do exantema e pesquisa viral por RT-PCR em swab combinado de nasofaringe/orofaringe e amostra de urina coletados idealmente até o 7º dia do início do exantema.',
      },
      {
        id: 'B',
        texto:
          'Exclusivamente biópsia de pele com imuno-histoquímica coletada após 40 dias de defervescência da febre.',
      },
      {
        id: 'C',
        texto:
          'Cultura bacteriana em meio de ágar chocolate das lesões descamativas em placa.',
      },
      {
        id: 'D',
        texto:
          'Mielograma urgente com imunofenotipagem de blastos para confirmação viral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Para a vigilância epidemiológica do Sarampo no Brasil, a confirmação laboratorial é obrigatória em todos os casos suspeitos e utiliza duas metodologias complementares:\n1) Diagnóstico molecular por RT-PCR (identificação direta do RNA viral e genotipagem): deve ser coletado preferencialmente nos primeiros 7 dias após o aparecimento do exantema (idealmente nas primeiras 72 horas), através de swab combinado de orofaringe e nasofaringe, além de amostra de urina (o vírus é excretado na urina por até 14 dias);\n2) Diagnóstico sorológico (ELISA): coleta de amostra de sangue para dosagem de anticorpos IgM e IgG específicos. A amostra de sangue deve ser colhida no primeiro contato com o paciente a partir do surgimento do exantema (de preferência entre o 1º e o 28º dia do rash). Uma segunda amostra (fase de convalescença) pode ser necessária para demonstrar soroconversão de IgG (aumento de 4 vezes nos títulos) caso a IgM inicial seja duvidosa.',
    comentariosAlternativas: {
      A: 'Correta. Protocolo oficial do MS: sorologia IgM/IgG e biologia molecular (RT-PCR em swab oronasofaríngeo e urina) na fase inicial.',
      B: 'Incorreta. A biópsia de pele não é recomendada nem necessária na rotina diagnóstica do sarampo.',
      C: 'Incorreta. O sarampo é causado por vírus (Paramyxoviridae) e não cresce em meios de cultura bacteriana.',
      D: 'Incorreta. Mielograma é invasivo e sem indicação em viroses exantemáticas típicas.',
    },
  },
  {
    id: 'ped-exant-095',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Varicela - Zóster na Infância',
    isRevisao: false,
    enunciado:
      'Menino de 4 anos, hígido, apresenta erupção unilateral constituída por vesículas agrupadas sobre base eritematosa acompanhadas de dor em queimação e hiperestesia local, estritamente limitadas ao dermátomo de T5 no hemitórax esquerdo, sem ultrapassar a linha média anterior ou posterior. A mãe relata que a criança teve varicela com 4 meses de idade (adquirida do irmão mais velho). Em relação ao Herpes-Zóster nessa faixa etária pediátrica, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de Herpes-Zóster, decorrente da reativação do Vírus Varicela-Zóster latente no gânglio da raiz dorsal sensitiva, cuja ocorrência em crianças é facilitada pela primoinfecção natural precoce no primeiro ano de vida (período de relativa imaturidade imunológica celular).',
      },
      {
        id: 'B',
        texto:
          'Indica obrigatoriamente a presença de infecção avançada pelo vírus HIV com contagem de linfócitos T CD4 < 50 células/mm³.',
      },
      {
        id: 'C',
        texto:
          'O Herpes-Zóster em crianças decorre de reinfecção exógena recente por gotículas respiratórias de outro doente e não de latência viral.',
      },
      {
        id: 'D',
        texto:
          'As vesículas do Herpes-Zóster são assépticas e a criança não é capaz de transmitir o vírus varicela a contatos suscetíveis.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Após a infecção primária da varicela, o Vírus Varicela-Zóster (VZV) migra por via retrógrada pelos nervos sensitivos e estabelece infecção latente para a vida inteira nos gânglios sensitivos das raízes dorsais e dos pares cranianos. Embora o Herpes-Zóster seja mais comum em idosos, ele pode acometer crianças imunocompetentes hígidas, especialmente aquelas que tiveram varicela no primeiro ano de vida ou in útero (quando a imunidade celular imatura favorece a latência com menor controle de reativação). A apresentação clínica pediátrica é mais branda do que no adulto, a dor pós-herpética é excepcional em crianças e o fluido vesicular ATIVO contém VZV infectante viável capaz de transmitir VARICELA para indivíduos suscetíveis por contato direto.',
    comentariosAlternativas: {
      A: 'Correta. Herpes-Zóster pediátrico é comum após varicela adquirida no primeiro ano de vida devido à imaturidade imune da primoinfecção.',
      B: 'Incorreta. Na imensa maioria dos casos de zóster em crianças que tiveram catapora antes de 1 ano, os pacientes são completamente imunocompetentes.',
      C: 'Incorreta. Zóster é reativação endógena de vírus latente nos gânglios, não infecção exógena recente por aerossol.',
      D: 'Incorreta. O líquido das vesículas contém vírus e pode transmitir catapora para indivíduos não imunizados.',
    },
  },
  {
    id: 'ped-exant-096',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Diagnóstico Diferencial: Manchas e Sinal Enantemático Intraoral',
    isRevisao: false,
    enunciado:
      'Associe corretamente os enantemas da cavidade oral descritos na Coluna 1 com as respectivas doenças exantemáticas listadas na Coluna 2:\n\nColuna 1:\n(1) Manchas de Koplik (micropápulas branco-azuladas na mucosa jugal oposta aos molares)\n(2) Sinal de Forchheimer (petéquias puntiformes no palato mole)\n(3) Manchas de Nagayama (pápulas e máculas eritematosas na úvula e palato mole)\n(4) Língua em framboesa/morango (papilas hipertrofiadas sobre fundo eritematoso brilhante)\n\nColuna 2:\n( ) Rubéola\n( ) Escarlatina\n( ) Sarampo\n( ) Exantema Súbito (Roséola)\n\nA sequência correta de preenchimento dos parênteses, de cima para baixo, é:',
    alternativas: [
      {
        id: 'A',
        texto: '2 - 4 - 1 - 3.',
      },
      {
        id: 'B',
        texto: '1 - 2 - 3 - 4.',
      },
      {
        id: 'C',
        texto: '3 - 1 - 4 - 2.',
      },
      {
        id: 'D',
        texto: '4 - 3 - 2 - 1.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Gabarito mnemônico indispensável para provas de Pediatria e Infectologia:\n1) Manchas de Koplik: patognomônicas do SARAMPO (mucosa jugal, grãos de areia);\n2) Sinal de Forchheimer: pequenas petéquias no palato mole na RUBÉOLA (também observadas na escarlatina);\n3) Manchas de Nagayama: pápulas/máculas eritematosas no palato mole e junção uvular no EXANTEMA SÚBITO (Roséola infantil);\n4) Língua em framboesa (ou morango branca que evolui para framboesa vermelha com papilas hipertróficas desnudadas): clássica da ESCARLATINA (e também da fase aguda da Doença de Kawasaki).\nCorrelacionando a Coluna 2:\n- Rubéola = 2;\n- Escarlatina = 4;\n- Sarampo = 1;\n- Exantema Súbito = 3.\nOrdem correta: 2 - 4 - 1 - 3.',
    comentariosAlternativas: {
      A: 'Correta. Correspondência exata e consagrada de todos os sinais enantemáticos orais.',
      B: 'Incorreta. Associação errônea dos sinais da coluna 1 com a coluna 2.',
      C: 'Incorreta. Ordem incorreta.',
      D: 'Incorreta. Ordem totalmente invertida.',
    },
  },
  {
    id: 'ped-exant-097',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Dengue com Sinais de Alarme na Infância',
    isRevisao: false,
    enunciado:
      'Menino de 8 anos reside em área com epidemia de arboviroses e apresenta febre alta, cefaleia retrorbitária e mialgias há 4 dias. No 5º dia, a febre cede (momento da defervescência), momento em que a criança desenvolve dor abdominal intensa e contínua, vômitos persistentes (4 episódios em 2 horas) e lipotimia ao assumir a posição ortostática. Na ectoscopia, apresenta exantema maculopapular eritematoso difuso pruriginoso com pequenas ilhas brancas de pele sã permeadas ("mar vermelho com ilhas brancas"). O hemograma revela hematócrito elevado de 48% (hemoconcentração) e plaquetas de 65.000/mm³. De acordo com a classificação de risco da Dengue do Ministério da Saúde, em qual grupo esse paciente se enquadra e qual é a conduta imediata?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Grupo C (Dengue com Sinais de Alarme); internação imediata em leito de internação/observação e hidratação venosa rápida com soro fisiológico a 10 mL/kg na primeira hora, reavaliando o hematócrito após a expansão.',
      },
      {
        id: 'B',
        texto:
          'Grupo A; hidratação estritamente oral no domicílio com soro de reidratação oral e liberação da família.',
      },
      {
        id: 'C',
        texto:
          'Grupo B; apenas coleta de hemograma em UBS sem necessidade de hidratação venosa imediata.',
      },
      {
        id: 'D',
        texto:
          'Trata-se de febre tifoide; prescrever ciprofloxacino oral e alta ambulatorial.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A infecção pelo vírus da Dengue (Flavivirus transmitido pelo Aedes aegypti) apresenta no período da defervescência (queda da febre entre o 3º e 6º dia) a sua janela de maior gravidade fisiopatológica devido ao extravasamento plasmático microvascular com aumento da permeabilidade capilar. O exantema característico é eritematoso, intensamente pruriginoso, com áreas poupadas de pele sã ("mar vermelho com ilhas brancas"). A presença de dor abdominal intensa e contínua, vômitos persistentes e lipotimia associados à hemoconcentração (aumento do hematócrito) define SINAIS DE ALARME (Grupo C do Ministério da Saúde). A conduta obrigatória é a INTERNAÇÃO HOSPITALAR IMEDIATA e hidratação intravenosa com solução cristaloide isotônica na dose de 10 mL/kg na primeira hora, seguida de reavaliação clínica e laboratorial contínua.',
    comentariosAlternativas: {
      A: 'Correta. Paciente com sinais de alarme (dor abdominal, vômitos e hemoconcentração) pertence ao Grupo C e requer hidratação venosa imediata.',
      B: 'Incorreta. Pacientes do grupo C não podem ser liberados para hidratação oral em casa sob risco de choque hipovolêmico grave.',
      C: 'Incorreta. Grupo B não possui sinais de alarme (apenas sangramento espontâneo de pele ou fatores de risco clínicos).',
      D: 'Incorreta. O quadro epidemiológico e hematológico é típico de dengue com sinais de alarme e choque iminente.',
    },
  },
  {
    id: 'ped-exant-098',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Síndrome Inflamatória Multissistêmica Pediátrica (SIM-P / MIS-C)',
    isRevisao: false,
    enunciado:
      'Criança de 6 anos é internada com febre alta há 5 dias associada a dor abdominal severa, diarreia, conjuntivite bulbar bilateral não purulenta, exantema polimórfico em tronco, edema de mãos e pés e hipotensão arterial com choque cardiogênico. O ecocardiograma revela disfunção ventricular esquerda moderada com fração de ejeção de 42% e dilatação difusa de artérias coronárias. Os exames laboratoriais mostram elevação astronômica de marcadores inflamatórios e cardíacos: Troponina T: elevada, BNP: 3.200 pg/mL, Dímero-D: 4.500 ng/mL, Ferritina: 1.800 ng/mL e PCR: 240 mg/L. A pesquisa de anticorpos IgG para SARS-CoV-2 resulta positiva e a família relata que todos tiveram COVID-19 há 4 semanas. O diagnóstico sindrômico e a terapia imunomoduladora preconizada são:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome Inflamatória Multissistêmica Pediátrica associada à COVID-19 (SIM-P / MIS-C); internação em UTI pediátrica, uso de Imunoglobulina Humana Intravenosa (2 g/kg) associada a Corticosteroide sistêmico em dose anti-inflamatória/pulsoterapia e suporte hemodinâmico inotrópico.',
      },
      {
        id: 'B',
        texto:
          'Apendicite aguda perfurada; indicação cirúrgica de laparotomia exploradora imediata sem necessidade de suporte circulatório.',
      },
      {
        id: 'C',
        texto:
          'Rubéola pós-infecciosa não complicada; tratamento ambulatorial com paracetamol e repouso.',
      },
      {
        id: 'D',
        texto:
          'Varicela congênita reativada; aciclovir oral e liberação para acompanhamento em UBS.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Síndrome Inflamatória Multissistêmica Pediátrica associada à COVID-19 (SIM-P, no Brasil; MIS-C, nos EUA) é uma afecção hiperinflamatória pós-infecciosa grave que surge tipicamente de 2 a 6 semanas após a infecção aguda (mesmo assintomática) pelo SARS-CoV-2. Compartilha características clínicas com a Doença de Kawasaki e com a Síndrome do Choque Tóxico, mas acomete crianças de faixa etária mais avançada (mediana de 6 a 10 anos) e cursa frequentemente com: 1) Sintomas gastrintestinais exuberantes (dor abdominal intensa simulando abdome agudo cirúrgico e diarreia); 2) Comprometimento miocárdico e choque cardiogênico precoce com elevação maciça de troponina e BNP; 3) Provas inflamatórias e marcadores trombóticos marcadamente elevados (Dímero-D, Ferritina e PCR); 4) Evidência de infecção prévia por SARS-CoV-2 (sorologia IgG positiva ou contato domiciliar). O tratamento de primeira linha exige IGIV (2 g/kg) combinada a corticosteroides sistêmicos (metilprednisolona).',
    comentariosAlternativas: {
      A: 'Correta. Caso típico de SIM-P pós-COVID-19 com choque cardiogênico; tratada com IGIV 2 g/kg + corticosteroide e suporte inotrópico em UTI.',
      B: 'Incorreta. Os sintomas mimetizam abdome agudo, mas a cardiopatia, dilatação de coronárias e choque hiperinflamatório confirmam SIM-P.',
      C: 'Incorreta. Rubéola é doença viral branda sem choque cardiogênico ou disfunção miocárdica com BNP elevado.',
      D: 'Incorreta. Não há vesículas e a fisiopatologia é hiperinflamatória secundária ao coronavírus.',
    },
  },
  {
    id: 'ped-exant-099',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Escabiose vs Doenças Exantemáticas Virais',
    isRevisao: false,
    enunciado:
      'Lactente de 8 meses apresenta há 3 semanas lesões pápulo-vesiculares e nódulos inflamatórios acastanhados intensamente pruriginosos (com piora noturna insuportável e irritabilidade), distribuídos nas pregas interdigitais das mãos, punhos, axilas, região periumbilical e nádegas. Ao examinar a criança, o pediatra nota acometimento marcante de palmas, plantas dos pés e couro cabeludo com algumas pústulas estéreis. A mãe e outros familiares que convivem na mesma casa também relatam prurido corporal intenso sem febre. Qual é a etiologia e o tratamento tópico de primeira escolha para esse lactente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Escabiose (Sarna humana) causada pelo ácaro Sarcoptes scabiei var. hominis; tratamento de escolha com Permetrina em loção ou creme a 5% aplicado no corpo inteiro (incluindo cabeça, pescoço, palmas e plantas nos lactentes) e lavado após 8 a 14 horas, repetido em 7 a 14 dias, associado ao tratamento simultâneo de todos os contactantes domiciliares.',
      },
      {
        id: 'B',
        texto:
          'Varicela atípica não pruriginosa; aciclovir venoso e isolamento por aerossóis.',
      },
      {
        id: 'C',
        texto:
          'Escarlatina neonatal; penicilina benzatina intramuscular em dose dobrada.',
      },
      {
        id: 'D',
        texto:
          'Doença Mão-Pé-Boca crônica; uso exclusivo de corticosteroide tópico de alta potência em todo o corpo por 6 meses.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Escabiose (sarna) é uma ectoparasitose causada pelo ácaro Sarcoptes scabiei variedade hominis, transmitida por contato interpessoal íntimo direto. Apresenta prurido intenso de predomínio noturno e distribuição clássica em dobras de flexão e espaços interdigitais. Uma pegadinha frequente de prova diz respeito à apresentação no LACTENTE (< 2 anos): enquanto em crianças maiores e adultos a cabeça e as palmas/plantas são poupadas, nos lactentes e bebês o couro cabeludo, face, palmas e plantas são FREQUENTEMENTE acometidos com vesículas e pústulas (acropustulose). O tratamento de escolha absoluto para lactentes a partir de 2 meses é a Permetrina a 5% tópica, aplicada do pescoço aos pés (e nos lactentes abrangendo também cabeça, couro cabeludo e face, evitando olhos e boca) por 8 a 14 horas, com reaplicação obrigatória após 7 a 14 dias para erradicar os ovos eclodidos, tratando OBRIGATORIAMENTE todos os coabitantes.',
    comentariosAlternativas: {
      A: 'Correta. Escabiose no lactente atinge couro cabeludo, palmas e plantas; a permetrina tópica a 5% é a droga de eleição.',
      B: 'Incorreta. A varicela é uma infecção viral aguda febril que dura 7 a 10 dias, e não infestação crônica de semanas.',
      C: 'Incorreta. Escarlatina não cursa com prurido noturno intratável, túneis interdigitais e pústulas palmoplantares em múltiplos familiares.',
      D: 'Incorreta. Corticosteroide tópico isolado agravaria o parasitismo (escabiose incógnita) e não erradica o ácaro.',
    },
  },
  {
    id: 'ped-exant-100',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Doenças Exantemáticas',
    subtema: 'Síntese Mnemônica Definitiva das Doenças Exantemáticas',
    isRevisao: false,
    enunciado:
      'Durante uma prova prática de Residência Médica, o examinador apresenta 4 lâminas clínicas com o traço semiológico patognomônico/mais marcante de cada doença exantemática pediátrica:\n\nCaso I: Exantema craniocaudal com confluência, febre alta, tosse intensa, conjuntivite com fotofobia e manchas puntiformes branco-azuladas na mucosa oral oposta aos molares.\nCaso II: Febre alta por 4 dias que cede subitamente em crise, sucedida imediatamente pelo surgimento de exantema maculopapular róseo no tronco em lactente de 9 meses.\nCaso III: Faringoamigdalite purulenta, exantema micropapular áspero em lixa, palidez perioral (Filatov) e hiperemia acentuada que não some à digitopressão nas dobras de flexão (Pastia).\nCaso IV: Eritema malar em face esbofeteada seguido por exantema rendilhado/reticulado em extremidades que clareia no centro e piora com exposição ao sol e banho morno.\n\nAssinale a alternativa que correlaciona correta e respectivamente os diagnósticos dos Casos I, II, III e IV:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sarampo | Exantema Súbito (Roséola) | Escarlatina | Eritema Infeccioso.',
      },
      {
        id: 'B',
        texto:
          'Rubéola | Sarampo | Doença de Kawasaki | Varicela.',
      },
      {
        id: 'C',
        texto:
          'Escarlatina | Eritema Infeccioso | Sarampo | Mononucleose Infecciosa.',
      },
      {
        id: 'D',
        texto:
          'Exantema Súbito | Doença de Kawasaki | Escarlatina | Rubéola.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A correlação correta e indispensável de cada caso clínico é:\n- Caso I: SARAMPO (Morbillivirus) -> tosse + coriza + conjuntivite com fotofobia + Manchas de Koplik + exantema morbiliforme craniocaudal;\n- Caso II: EXANTEMA SÚBITO ou Roséola Infantil (HHV-6/HHV-7) -> lactente jovem + febre alta de 3-5 dias que cai em crise + exantema súbito de tronco pós-defervescência;\n- Caso III: ESCARLATINA (Streptococcus pyogenes) -> faringite pultácea estreptocócica + pele em lixa + Sinal de Filatov (máscara perioral) + Linhas de Pastia (flexuras);\n- Caso IV: ERITEMA INFECCIOSO (Parvovírus B19) -> trifásico com face esbofeteada + padrão rendilhado/reticulado fotossensível e termoinduzido.',
    comentariosAlternativas: {
      A: 'Correta. Associação fidedigna dos 4 pilares clássicos e mais frequentes nas bancas examinadoras de Residência Médica.',
      B: 'Incorreta. Rubéola não tem Koplik; Sarampo não tem exantema pós-defervescência exclusiva de tronco.',
      C: 'Incorreta. Caso I é sarampo clássico, e não escarlatina.',
      D: 'Incorreta. A ordem diagnóstica está incorreta.',
    },
  },
];


