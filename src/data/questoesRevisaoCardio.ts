export interface RawCardioQuestion {
  id: string;
  especialidade: string;
  tema: string;
  subtema?: string;
  enunciado: string;
  alternativas: { id: string; texto: string }[];
  correta: string;
  comentarioGeral: string;
  comentariosAlternativas: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  isRevisao?: boolean;
}

export const QUESTOES_REVISAO_CARDIOLOGIA_PEDIATRICA_30: RawCardioQuestion[] = [
  {
    "id": "ped-cardio-rev-01",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Tetralogia de Fallot - Crise Hipoxêmica",
    "isRevisao": true,
    "enunciado": "Lactente de 7 meses, portador de Tetralogia de Fallot ainda sem correção cirúrgica, é admitido no pronto-socorro após episódio de choro vigoroso. A mãe relata que a criança 'ficou roxa como nunca antes' e respirando muito rápido. Ao exame físico: agitação psicomotora intensa, cianose labial e de extremidades acentuada (SatO2: 64%), taquipneia sem tiragens significativas e desaparecimento do sopro ejetivo sistólico áspero previamente auscultado em foco pulmonar. Qual é o mecanismo fisiopatológico primário responsável pelo quadro e a conduta farmacológica imediata indicada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Espasmo do infundíbulo muscular subpulmonar com aumento agudo do shunt direita-esquerda pela CIV; administrar morfina e betabloqueador (esmolol ou propranolol)."
      },
      {
        "id": "B",
        "texto": "Fechamento abrupto do canal arterial pérvio; iniciar infusão contínua imediata de Prostaglandina E1 (alprostadil)."
      },
      {
        "id": "C",
        "texto": "Insuficiência cardíaca esquerda descompensada por sobrecarga volumétrica; administrar furosemida venosa e dobutamina."
      },
      {
        "id": "D",
        "texto": "Broncoespasmo agudo com aprisionamento aéreo grave; administrar nebulização com salbutamol e corticoide sistêmico."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A crise hipoxêmica da Tetralogia de Fallot decorre de espasmo da musculatura infundibular subpulmonar ou queda da resistência vascular sistêmica (RVS), gerando aumento súbito do desvio de sangue desoxigenado do ventrículo direito para a aorta através da CIV (shunt D->E). Com a redução crítica do fluxo pulmonar, o sopro ejetivo pulmonar diminui ou desaparece. O tratamento visa acalmar a criança, aumentar a RVS (posição genupeitoral/cócoras) e aliviar o espasmo infundibular com sedação/analgesia (morfina 0,1-0,2 mg/kg) e betabloqueadores (como esmolol ou propranolol), além de oxigênio e expansão volêmica.",
    "comentariosAlternativas": {
      "A": "Correta. A hiperreatividade infundibular subpulmonar obstrui criticamente o trato de saída do VD, desviando o sangue venoso pela CIV à aorta, sendo a morfina e o betabloqueador os pilares farmacológicos.",
      "B": "Incorreta. Aos 7 meses de vida, o canal arterial fisiológico já se encontra obliterado; a crise de Fallot típica é desencadeada por espasmo infundibular, choro, dor ou desidratação.",
      "C": "Incorreta. Na Tetralogia de Fallot com hipofluxo pulmonar não ocorre congestão pulmonar ou falência de VE; inotrópicos como dobutamina são contraindicados porque aumentam a contratilidade e pioram o espasmo infundibular.",
      "D": "Incorreta. A taquipneia é hiperpneia de origem central pelo estímulo hipóxico e acidose metabólica grave, e não quadro obstrutivo broncoespástico."
    }
  },
  {
    "id": "ped-cardio-rev-02",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Tetralogia de Fallot - Anatomia e Radiologia",
    "isRevisao": true,
    "enunciado": "Criança de 3 anos de idade, sem acompanhamento prévio regular, comparece à UBS com queixa de cansaço fácil aos esforços e hábito frequente de agachar-se durante as brincadeiras (posição de cócoras). Ao exame físico, apresenta baqueteamento digital (dedos em baqueta de tambor e unhas em vidro de relógio), cianose perioral aos esforços e sopro sistólico ejetivo 3+/6+ em borda esternal esquerda média/alta. A radiografia de tórax evidencia área cardíaca normal com ponta arredondada e levantada acima do diafragma, escavação do arco médio pulmonar e hipotrama vascular pulmonar. O diagnóstico anatômico e o achado radiológico descritos correspondem a:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Tetralogia de Fallot; aspecto radiológico em 'tamanco holandês' (cœur en sabot)."
      },
      {
        "id": "B",
        "texto": "Transposição das Grandes Artérias; aspecto radiológico em 'ovo deitado'."
      },
      {
        "id": "C",
        "texto": "Drenagem Anômala Total das Veias Pulmonares; sinal do 'boneco de neve' ou 'em oito'."
      },
      {
        "id": "D",
        "texto": "Coarctação de Aorta; sinal do '3' na aorta e sinal de Roesler nas costelas."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Tetralogia de Fallot é a cardiopatia congênita cianótica mais frequente após o primeiro ano de vida. Caracteriza-se por 4 anomalias: estenose subpulmonar/infundibular, defeito do septo interventricular (CIV), cavalgamento da aorta sobre o septo (< 50%) e hipertrofia ventricular direita secundária. Na radiografia de tórax, a hipertrofia do VD eleva o ápice cardíaco e a hipoplasia do tronco da artéria pulmonar escava o arco médio, gerando a clássica silhueta em tamanco holandês ('cœur en sabot') com hipofluxo pulmonar.",
    "comentariosAlternativas": {
      "A": "Correta. A descrição de ápice levantado pelo VD hipertrofiado e arco pulmonar escavado compõe a clássica imagem em tamanco holandês da Tetralogia de Fallot.",
      "B": "Incorreta. Na TGA há pedículo vascular estreito e área cardíaca ovalada ('ovo deitado'), com hiperfluxo pulmonar e manifestação neonatal hiperaguda.",
      "C": "Incorreta. O sinal do 'boneco de neve' ou '8' é característico da DATVP supracardíaca, decorrente da veia vertical esquerda dilatada e veia cava superior alargada.",
      "D": "Incorreta. O sinal do 3 e erosões costais (Roesler) são típicos de Coarctação de Aorta em crianças maiores e adultos, uma cardiopatia acianótica com estenose do istmo aórtico."
    }
  },
  {
    "id": "ped-cardio-rev-03",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Comunicação Interventricular (CIV) - Fisiopatologia e Clínica",
    "isRevisao": true,
    "enunciado": "Lactente de 2 meses de vida, nascido a termo, previamente assintomático na maternidade, é levado à consulta pediátrica com queixa de interrupção frequente das mamadas por cansaço, sudorese excessiva em fronte durante a alimentação e ganho de peso insuficiente no último mês (Z-score de P/I caiu de 0 para -2,2). Ao exame: taquipneico (FR: 64 irpm), com tiragem subcostal leve, acianótico. Ausculta cardíaca revela ritmo regular em 3 tempos (B3), sopro holossistólico 3+/6+ rude em borda esternal esquerda baixa e sopro mesodiastólico suave em foco mitral. Fígado palpável a 3,5 cm do RCD. Qual fenômeno fisiopatológico explica o início dos sintomas especificamente nesta faixa etária?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Queda fisiológica progressiva da resistência vascular pulmonar (RVP), aumentando a magnitude do shunt esquerda-direita através da CIV e o hiperfluxo pulmonar."
      },
      {
        "id": "B",
        "texto": "Fechamento anatômico do forame oval, que até então desviava o excesso de pressão do ventrículo direito para o átrio esquerdo."
      },
      {
        "id": "C",
        "texto": "Disfunção sistólica primária do ventrículo esquerdo decorrente de isquemia subendocárdica por coronariopatia congênita anômala."
      },
      {
        "id": "D",
        "texto": "Elevação patológica da pressão arterial sistêmica secundária à maturação do sistema renina-angiotensina-aldosterona."
      }
    ],
    "correta": "A",
    "comentarioGeral": "No feto e no recém-nascido imediato, a resistência vascular pulmonar (RVP) é elevada devido à espessa camada muscular das arteríolas pulmonares. Por isso, nos primeiros dias de vida, a CIV perimembranosa não apresenta grande shunt E->D. Entre 4 e 8 semanas de vida ocorre o afinamento da camada média das arteríolas com queda fisiológica acentuada da RVP. Com isso, o gradiente pressórico sistêmico-pulmonar aumenta brutalmente, gerando enorme shunt esquerda-direita, hiperfluxo pulmonar e consequente insuficiência cardíaca congestiva hiperdinâmica com déficit de ganho ponderal.",
    "comentariosAlternativas": {
      "A": "Correta. A queda fisiológica da RVP entre 4 e 8 semanas desmascara o defeito interventricular amplo, permitindo hiperfluxo pulmonar maciço e congestão venocapilar com ICC.",
      "B": "Incorreta. O forame oval não impede o shunt interventricular; o fator determinante da magnitude do shunt E->D na CIV é a relação entre a resistência vascular pulmonar e a sistêmica.",
      "C": "Incorreta. Na CIV o miocárdio é intrinsecamente são; a falência cardíaca é decorrente de sobrecarga volumétrica pulmonar e de câmaras esquerdas, e não de isquemia coronariana.",
      "D": "Incorreta. A ativação do SRAA é uma consequência compensatória da queda do débito sistêmico efetivo pela ICC, e não a causa primária do surgimento dos sintomas aos 2 meses."
    }
  },
  {
    "id": "ped-cardio-rev-04",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "CIV - Síndrome de Eisenmenger",
    "isRevisao": true,
    "enunciado": "Adolescente de 14 anos, que nunca realizou cirurgia cardíaca prévia e tinha histórico de sopro cardíaco na infância sem acompanhamento, procura atendimento com queixa de fadiga progressiva, dispneia aos médios esforços e episódios de síncope ao subir escadas. Ao exame físico: cianose central (lábios e língua) e periférica, baqueteamento digital acentuado em mãos e pés, impulsão paraesternal esquerda vigorosa à palpação pré-cordial. À ausculta cardíaca: ausência de sopro holossistólico audível, presença de hiperfonese metálica marcante da segunda bulha cardíaca em foco pulmonar (P2 acentuado) e estalido de ejeção pulmonar. O ecocardiograma revela CIV ampla com fluxo bidirecional e predomínio de shunt direita-esquerda. Esse quadro clínico-hemodinâmico representa:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Síndrome de Eisenmenger, caracterizada por hipertensão arterial pulmonar fixa e irreversível por remodelamento plexogênico da vasculatura pulmonar."
      },
      {
        "id": "B",
        "texto": "Fechamento espontâneo fibrótico da CIV associado a estenose aórtica subvalvar congênita tardia."
      },
      {
        "id": "C",
        "texto": "Insuficiência tricúspide reumática aguda com regurgitação maciça e hipertensão venosa sistêmica isolada."
      },
      {
        "id": "D",
        "texto": "Cor triatriatum sinister com estenose da membrana intra-atrial esquerda e baixo débito cardíaco."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Síndrome de Eisenmenger é o estágio final da doença vascular pulmonar obstrutiva secundária a um defeito congênito com hiperfluxo sistêmico-pulmonar não corrigido (como CIV, PCA ou CIA amplos). O hiperfluxo crônico sob alta pressão causa hipertrofia da camada média, proliferação intimal e lesões plexiformes irreversíveis nas arteríolas pulmonares. Quando a RVP se iguala ou ultrapassa a RVS, o shunt inverte tornando-se direita-esquerda, surgindo cianose, eritrocitose e baqueteamento digital. O sopro da CIV desaparece pelo desaparecimento do gradiente de pressão entre os ventrículos, e B2 torna-se hiperfonética e metálica pelo fechamento pulmonar sob altíssima pressão.",
    "comentariosAlternativas": {
      "A": "Correta. A inversão do shunt interventricular provocada por arteriopatia pulmonar plexiforme irreversível, com desaparecimento do sopro e hiperfonese de P2, define a Síndrome de Eisenmenger.",
      "B": "Incorreta. Não houve fechamento espontâneo; a lesão continua presente, porém sem sopro devido à equalização pressórica entre os ventrículos.",
      "C": "Incorreta. A insuficiência tricúspide não causa shunt reverso nem cianose central com baqueteamento desse padrão sem cardiopatia congênita subjacente.",
      "D": "Incorreta. Cor triatriatum sinister gera estenose pulmonar venosa pós-capilar (como estenose mitral), sem shunt direita-esquerda primário com desaparecimento de sopro de CIV."
    }
  },
  {
    "id": "ped-cardio-rev-05",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Persistência do Canal Arterial (PCA) no Prematuro",
    "isRevisao": true,
    "enunciado": "Recém-nascido prematuro de 27 semanas de idade gestacional, peso de nascimento 850g, no 4º dia de vida sob ventilação mecânica por doença da membrana hialina, começa a apresentar dependência crescente de FiO2, episódios de apneia descompensada, pulsos periféricos amplos e saltones (em 'martelo d'água'), precórdio hiperdinâmico e sopro sistólico contínuo audível em região infraclavicular esquerda e dorso. A radiografia de tórax evidencia cardiomegalia e congestão venocapilar pulmonar acentuada. O ecocardiograma à beira do leito confirma canal arterial amplo com fluxo transductal exclusivo esquerda-direita e repercussão hemodinâmica. Qual é a conduta farmacológica de primeira linha indicada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Inibidores da ciclo-oxigenase (ibuprofeno intravenoso ou oral, ou indometacina), visando bloquear a síntese de prostaglandinas e promover a vasoconstrição ductal."
      },
      {
        "id": "B",
        "texto": "Infusão contínua de Prostaglandina E1 (alprostadil) em dose de manutenção para manter a perfusão sistêmica."
      },
      {
        "id": "C",
        "texto": "Administração imediata de citrato de cafeína em dose dobrada associada a furosemida em infusão contínua."
      },
      {
        "id": "D",
        "texto": "Bloqueador dos canais de cálcio (anlodipino) para reduzir a pós-carga do ventrículo esquerdo."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A persistência do canal arterial hemodinamicamente significativo no prematuro de extremo baixo peso desvia sangue da aorta para o leito pulmonar de baixa resistência ('roubo ductal'), causando hiperfluxo pulmonar, edema pulmonar, piora dos parâmetros ventilatórios e hipoperfusão sistêmica de órgãos vitais (risco aumentado de enterocolite necrosante e hemorragia peri-intraventricular). O tônus ductal é mantido patente principalmente pelas prostaglandinas vasodilatadoras circulantes (PGE2 e PGI2). Assim, o tratamento de escolha para o fechamento farmacológico são os inibidores da síntese de prostaglandinas (AINEs, principalmente ibuprofeno intravenoso/oral ou indometacina; paracetamol IV também é alternativa validada).",
    "comentariosAlternativas": {
      "A": "Correta. Ibuprofeno e indometacina inibem a COX, reduzindo a concentração sérica de prostaglandinas e promovendo a contração e obliteração da musculatura lisa ductal.",
      "B": "Incorreta. A Prostaglandina E1 (alprostadil) promove a ABERTURA do canal arterial; está indicada nas cardiopatias canal-dependentes, e seria desastrosa em um PCA hemodinamicamente significativo com hiperfluxo pulmonar.",
      "C": "Incorreta. A cafeína estimula o centro respiratório nas apneias da prematuridade, mas não atua no fechamento ductal; furosemida estimula produção de prostaglandinas renais e pode impedir o fechamento ductal.",
      "D": "Incorreta. Bloqueadores de canais de cálcio não têm papel no fechamento do canal arterial e são contraindicados pelo alto risco de choque cardiogênico e hipotensão profunda no prematuro."
    }
  },
  {
    "id": "ped-cardio-rev-06",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "PCA no Lactente a Termo e Exame Físico",
    "isRevisao": true,
    "enunciado": "Lactente de 5 meses, nascida a termo, é avaliada em consulta de puericultura. Encontra-se assintomática, com crescimento e desenvolvimento adequados. Durante a ausculta cardíaca, o pediatra identifica um sopro rude e contínuo, que se estende por toda a sístole e diástole, com pico no final da sístole e início da diástole, mais audível no 1º e 2º espaços intercostais esquerdos na linha hemiclavicular (região infraclavicular esquerda), associado a frêmito palpável na mesma topografia. A pressão arterial revela PA de 100x40 mmHg (pressão de pulso alargada). Como é denominado semiologicamente esse sopro e qual a conduta definitiva recomendada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sopro em maquinaria (ou de Gibson); o fechamento percutâneo por cateterismo intervencionista com dispositivo/mola (coil ou plug) é o tratamento de escolha habitual."
      },
      {
        "id": "B",
        "texto": "Sopro de Still; trata-se de sopro inocente da infância que dispensa seguimento ou exames adicionais."
      },
      {
        "id": "C",
        "texto": "Sopro de Carey Coombs; indica cardite mitral ativa e exige corticoterapia e profilaxia secundária."
      },
      {
        "id": "D",
        "texto": "Ruflar de Graham Steell; indica hipertensão arterial pulmonar primária descompensada exigindo transplante cardíaco."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O sopro contínuo em maquinaria (sopro de Gibson) é o achado auscultatório patognomônico da persistência do canal arterial (PCA). O gradiente pressórico contínuo entre a aorta e a artéria pulmonar durante todo o ciclo cardíaco (sístole e diástole) gera fluxo contínuo turbilhonar através do ducto pérvio. O escape diastólico aórtico para a artéria pulmonar reduz a pressão arterial diastólica, causando pressão de pulso aumentada (pressão divergente) e pulsos amplos. No lactente a termo com PCA persistente além do período neonatal, o tratamento padrão é o fechamento percutâneo por via hemodinâmica com molas ou oclusores específicos.",
    "comentariosAlternativas": {
      "A": "Correta. O sopro de Gibson em maquinaria é patognomônico de PCA, e o fechamento percutâneo por oclusor/prótese é o método de escolha com excelente eficácia e baixa morbidade.",
      "B": "Incorreta. O sopro de Still é mesossistólico, de baixa intensidade (1 a 2+/6+), com timbre vibratório ou musical em borda esternal média/baixa, sem irradiação ou frêmito.",
      "C": "Incorreta. O sopro de Carey Coombs é um ruflar mesodiastólico apical decorrente de valvite mitral aguda na Febre Reumática.",
      "D": "Incorreta. O sopro de Graham Steell é um sopro protodiastólico aspirativo de regurgitação pulmonar de alta pressão, decorrente de dilatação do anel pulmonar por hipertensão pulmonar severa."
    }
  },
  {
    "id": "ped-cardio-rev-07",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Coarctação de Aorta Crítica Neonatal",
    "isRevisao": true,
    "enunciado": "Recém-nascido do sexo masculino, com 8 dias de vida, com alta da maternidade sem intercorrências e amamentado exclusivamente ao seio, é trazido à emergência em estado grave. A mãe relata que há 18 horas a criança ficou subitamente hipoativa, pálida, gemente e recusando o seio materno. Ao exame físico: choque grave, cianose mista, perfusão periférica lentificada (tempo de enchimento capilar de 5 segundos), extremidades inferiores frias. Pressão arterial em MSD: 88x50 mmHg; PA em membros inferiores indetectável. Pulsos braquiais e radiais são palpáveis, porém os pulsos femorais, poplíteos e pediosos são totalmente impalpáveis. Gasometria arterial revela acidose metabólica profunda com hiperlactatemia (pH 7,08, HCO3 9 mEq/L, lactato 8,5 mmol/L). Diante da principal hipótese diagnóstica, qual medicamento deve ser administrado imediatamente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Alprostadil (Prostaglandina E1 venosa em infusão contínua)."
      },
      {
        "id": "B",
        "texto": "Bicarbonato de sódio em bólus repetidos até normalização do pH."
      },
      {
        "id": "C",
        "texto": "Dopamina em dose vasopressora associada a noradrenalina."
      },
      {
        "id": "D",
        "texto": "Furosemida em dose alta associada a espironolactona."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Trata-se de uma Coarctação de Aorta (CoAo) crítica neonatal, uma cardiopatia congênita canal-dependente de fluxo sistêmico. Na vida fetal e nos primeiros dias de vida, o canal arterial pérvio permite que o sangue passe do tronco pulmonar ou aorta proximal para a aorta descendente, contornando a região justaductal estenosada da coarctação e mantendo a perfusão do hemicorpo inferior. Quando o canal arterial sofre fechamento espontâneo (habitualmente entre o 3º e 10º dia de vida), a pós-carga do VE aumenta criticamente e o fluxo sistêmico para a aorta descendente cessa quase por completo, culminando em colapso circulatório, anúria, pulsos femorais abolidos e choque cardiogênico com acidose láctica severa. A reabertura farmacológica imediata do canal arterial com Prostaglandina E1 (PGE1 - alprostadil) restabelece a perfusão distal e salva a vida do neonato.",
    "comentariosAlternativas": {
      "A": "Correta. O alprostadil reabre o canal arterial, permitindo que o débito cardíaco ultrapasse a obstrução aórtica severa e restaure a perfusão do hemicorpo inferior, revertendo a hipoperfusão e o choque.",
      "B": "Incorreta. O bicarbonato de sódio trata temporariamente o número do pH mas não resolve a causa subjacente; sem desobstrução mecânica da circulação distal com PGE1, o paciente evoluirá para óbito.",
      "C": "Incorreta. Aminas vasopressoras aumentam a resistência vascular periférica e a pós-carga já crítica do ventrículo esquerdo, piorando a isquemia e a falência miocárdica sem abrir o canal.",
      "D": "Incorreta. Diuréticos agravam o choque cardiogênico hipovolêmico sistêmico distal e a insuficiência renal pré-renal já instalada."
    }
  },
  {
    "id": "ped-cardio-rev-08",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Coarctação de Aorta na Infância e Adolescência",
    "isRevisao": true,
    "enunciado": "Menino de 9 anos de idade é submetido a exame físico de rotina para liberação de prática esportiva escolar. Queixa-se apenas de cefaleia holocraniana ocasional e dor muscular em panturrilhas aos esforços (claudicação intermitente). Ao exame físico, a aferição da pressão arterial revela: MSD = 148x88 mmHg, MSE = 146x86 mmHg, MID = 94x60 mmHg e MIE = 92x58 mmHg (diferença de pressão sistólica superior a 50 mmHg entre membros superiores e inferiores). Pulsos femorais filiformes e atrasados em relação aos pulsos radiais (retardo pulso radial-femoral). À ausculta cardíaca, identifica-se sopro mesossistólico interescapular em dorso e clique de ejeção aórtico. A radiografia de tórax revela o sinal do '3' na silhueta aórtica e erosões da margem inferior do 3º ao 8º arcos costais posteriores bilaterais (sinal de Roesler). Qual é o diagnóstico e a anomalia cardíaca congênita mais frequentemente associada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Coarctação de Aorta; valva aórtica bicúspide."
      },
      {
        "id": "B",
        "texto": "Estenose pulmonar supravalvar; comunicação interatrial."
      },
      {
        "id": "C",
        "texto": "Arterite de Takayasu; aneurisma de aorta abdominal."
      },
      {
        "id": "D",
        "texto": "Doença de Kawasaki crônica; aneurisma de artéria coronária direita."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Coarctação de Aorta na criança maior e adolescente manifesta-se tipicamente com hipertensão arterial em membros superiores e gradiente pressórico marcante entre MMSS e MMII (> 20 mmHg de diferença sistólica), acompanhado de pulsos femorais diminuídos e atrasados (retardo radiofemoral). O sinal de Roesler decorre da erosão óssea na borda inferior das costelas pela dilatação e tortuosidade crônica das artérias intercostais colaterais que desviam fluxo da artéria subclávia para a aorta descendente distal à coarctação. A valva aórtica bicúspide é a anomalia congênita associada mais comum, presente em mais de 50-80% dos pacientes com CoAo.",
    "comentariosAlternativas": {
      "A": "Correta. A apresentação com hipertensão em MMSS, hipotensão em MMII, claudicação, sinal de Roesler e sinal do 3 é clássica de Coarctação de Aorta, que se associa fortemente com valva aórtica bicúspide.",
      "B": "Incorreta. A estenose pulmonar supravalvar não causa hipertensão de membros superiores nem gradiente pressórico radiofemoral; está associada à síndrome de Williams.",
      "C": "Incorreta. Embora a arterite de Takayasu possa acometer grandes vasos, é uma vasculite inflamatória sistêmica rara que costuma cursar com assimetria entre os próprios membros superiores e elevação intensa de VHS/PCR.",
      "D": "Incorreta. A doença de Kawasaki é uma vasculite necrotizante de artérias de médio calibre (especialmente coronárias), e não causa estenose focal do istmo aórtico congênita com sinal de Roesler."
    }
  },
  {
    "id": "ped-cardio-rev-09",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Transposição das Grandes Artérias (TGA)",
    "isRevisao": true,
    "enunciado": "Recém-nascido a termo, peso de 3.600g, filho de mãe com diabetes gestacional, apresenta cianose central intensa desde as primeiras horas de vida (SatO2: 60% em ar ambiente). Foi realizado teste de hiperóxia com oferta de oxigênio a 100% por halo durante 15 minutos, e a gasometria arterial revelou PaO2 de 35 mmHg (sem aumento apreciável). O recém-nascido está confortável, sem taquipneia significativa ou tiragens, e a ausculta cardíaca revela segunda bulha única e hiperfonética, sem sopros audíveis evidentes. A radiografia de tórax evidencia cardiomegalia leve a moderada com pedículo vascular estreito e silhueta cardíaca ovalada ('aspecto em ovo deitado'), acompanhada de hiperfluxo pulmonar. Qual é o diagnóstico mais provável e a cirurgia corretiva anatômica de escolha?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Transposição das Grandes Artérias (TGA); cirurgia de Jatene (troca arterial / switch arterial) nas primeiras 2 a 3 semanas de vida."
      },
      {
        "id": "B",
        "texto": "Tetralogia de Fallot com atresia pulmonar; anastomose sistêmico-pulmonar de Blalock-Taussig modificada."
      },
      {
        "id": "C",
        "texto": "Atresia tricúspide com estenose pulmonar; cirurgia estagiada com Glenn bidirecional aos 6 meses."
      },
      {
        "id": "D",
        "texto": "Anomalia total de drenagem venosa pulmonar obstrutiva; reimplante cirúrgico de emergência da veia vertical no átrio direito."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Transposição das Grandes Artérias (TGA simples com septo íntegro) é a cardiopatia congênita cianótica mais comum do período neonatal. A aorta origina-se do ventrículo direito e o tronco pulmonar origina-se do ventrículo esquerdo, criando duas circulações paralelas e independentes incompatíveis com a vida sem comunicação entre elas (forame oval e/ou canal arterial). Cursa com cianose neonatal grave refratária a O2 (teste de hiperóxia negativo com PaO2 < 100-150 mmHg), 'bebê azul confortável' (cianose desproporcional ao desconforto respiratório) e radiografia com silhueta em 'ovo deitado' com mediastino estreito. O tratamento definitivo de escolha é a cirurgia de Jatene (switch arterial com reimplante das artérias coronárias), que deve ser realizada idealmente nas primeiras 2 a 3 semanas de vida enquanto o VE mantém massa muscular apta a sustentar a circulação sistêmica.",
    "comentariosAlternativas": {
      "A": "Correta. A TGA gera duas circulações em paralelo com cianose refratária imediata e silhueta em ovo deitado; a correção anatômica preconizada é a cirurgia de Jatene no período neonatal precoce.",
      "B": "Incorreta. A Tetralogia de Fallot cursa com hipofluxo pulmonar e imagem em tamanco holandês; a cirurgia de Jatene não se aplica a Fallot.",
      "C": "Incorreta. A atresia tricúspide cursa com hipofluxo pulmonar e sobrecarga de VE (eixo do QRS desviado para a esquerda no ECG neonatal), e requer correção univentricular (Fontan).",
      "D": "Incorreta. A DATVP obstrutiva cursa com desconforto respiratório neonatal extremo, congestão pulmonar grave em vidro fosco e coração de tamanho pequeno ou normal, e não com bebê confortável com coração em ovo deitado."
    }
  },
  {
    "id": "ped-cardio-rev-10",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Comunicação Interatrial (CIA)",
    "isRevisao": true,
    "enunciado": "Escolar de 6 anos de idade, assintomática e com desenvolvimento pôndero-estatural normal, é levada ao pediatra para avaliação de rotina. Ao exame físico pré-cordial, nota-se impulsão discreta de borda esternal esquerda. À ausculta cardíaca, ouve-se um sopro sistólico ejetivo 2+/6+ suave no 2º espaço intercostal esquerdo (foco pulmonar) e um desdobramento constante e amplo da segunda bulha cardíaca, que não varia com as fases da respiração (desdobramento fixo de B2). Não há sopros diastólicos nem cianose. Qual é a anomalia congênita subjacente e o mecanismo do sopro e do desdobramento fixo de B2?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Comunicação Interatrial (CIA tipo ostium secundum); o sopro resulta do hiperfluxo sistólico relativo através da valva pulmonar anatomicamente normal, e o desdobramento fixo de B2 decorre do atraso do componente P2 pelo prolongamento da ejeção do VD com volume equalizado nas fases respiratórias."
      },
      {
        "id": "B",
        "texto": "Comunicação Interventricular pequena; o sopro decorre da turbulência através do orifício septal ventricular e o desdobramento de B2 ocorre por estenose mitral concomitante."
      },
      {
        "id": "C",
        "texto": "Estenose pulmonar valvar grave; o sopro decorre da fusão das cúspides pulmonares e B2 apresenta fechamento aórtico paradoxal."
      },
      {
        "id": "D",
        "texto": "Tetralogia de Fallot acianótica; o sopro decorre da insuficiência da valva tricúspide com sobrecarga biventricular."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Comunicação Interatrial (CIA), sendo o tipo 'ostium secundum' o mais comum (cerca de 70-80%), é uma cardiopatia acianótica com shunt esquerda-direita no plano atrial. Como o gradiente pressórico entre os átrios é muito baixo, a passagem de sangue pelo septo interatrial não gera sopro audível. O sopro auscultado é sistólico ejetivo em foco pulmonar, produzido exclusivamente pelo hiperfluxo volumétrico transvalvar pulmonar relativo. O desdobramento fixo e amplo de B2 é o sinal semiológico patognomônico da CIA: o excesso de volume no átrio direito retarda o esvaziamento e fechamento da valva pulmonar (atraso de P2), e as variações respiratórias habituais do retorno venoso são amortecidas pela equalização volumétrica transatrial.",
    "comentariosAlternativas": {
      "A": "Correta. Na CIA, o defeito septal em si é silencioso; o sopro ejetivo pulmonar vem do hiperfluxo através do orifício pulmonar, e o atraso permanente de P2 gera o desdobramento amplo e fixo de B2.",
      "B": "Incorreta. A CIV gera sopro holossistólico em borda esternal esquerda baixa produzido no próprio orifício da CIV, e não cursa com desdobramento fixo de B2.",
      "C": "Incorreta. Na estenose pulmonar valvar grave há clique de ejeção que varia com a respiração, B2 inaudível ou com P2 muito fraco/tardio, e o sopro é áspero com frêmito.",
      "D": "Incorreta. Fallot cursa com B2 única (componente pulmonar inaudível) e estenose infundibular evidente, não apresentando desdobramento fixo com sopro ejetivo suave de hiperfluxo puro."
    }
  },
  {
    "id": "ped-cardio-rev-11",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Defeito do Septo Atrioventricular (DSAV) e Síndrome de Down",
    "isRevisao": true,
    "enunciado": "Lactente de 3 meses, com diagnóstico genético de Trissomia do cromossomo 21 (Síndrome de Down), apresenta taquipneia crônica (FR: 60 irpm), tiragem subcostal e dificuldade para completar as mamadas, associada a estagnação da curva ponderal. Ao exame físico: precórdio hiperdinâmico, sopro holossistólico 3+/6+ irradiado para a axila e sopro sistólico rude em borda esternal esquerda, segunda bulha hiperfonética em foco pulmonar e hepatomegalia a 4 cm do rebordo costal direito. O eletrocardiograma demonstra desvio acentuado do eixo elétrico de QRS para a esquerda (entre -30° e -90°, hemibloqueio anterior esquerdo) e sobrecarga biventricular. Qual é a cardiopatia congênita mais fortemente associada à Síndrome de Down e qual a conduta terapêutica recomendada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Defeito do Septo Atrioventricular Total (DSAV total / canal arterial AV comum); correção cirúrgica precoce (entre 3 e 6 meses de vida) para prevenir o desenvolvimento de doença vascular pulmonar obstrutiva irreversível."
      },
      {
        "id": "B",
        "texto": "Transposição das Grandes Artérias; acompanhamento clínico expectante até os 2 anos de idade para fechamento espontâneo dos septos."
      },
      {
        "id": "C",
        "texto": "Coarctação de Aorta pré-ductal; dilatação com balão por via percutânea aos 5 anos de idade."
      },
      {
        "id": "D",
        "texto": "Tetralogia de Fallot sem CIV; transplante cardíaco de urgência antes dos 30 dias de vida."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Defeito do Septo Atrioventricular (DSAV), na sua forma completa ou parcial, é a cardiopatia congênita mais prevalente na Síndrome de Down (presente em cerca de 40-50% dos portadores com cardiopatia). Caracteriza-se por CIA tipo ostium primum, CIV de via de entrada e valva atrioventricular única comum com regurgitação valvar associada. Cursa com shunt esquerda-direita volumoso em ambos os níveis atrioventriculares e ICC precoce. Pacientes com trissomia 21 têm hiperreatividade e tendência acelerada a desenvolver hipertensão pulmonar fixa e plexogênica (Eisenmenger precoce). Por isso, a correção cirúrgica completa (fechamento dos defeitos septais e divisão da valva em dois aparelhos valvares competentes) deve ser realizada precocemente, idealmente entre 3 e 6 meses de vida.",
    "comentariosAlternativas": {
      "A": "Correta. O DSAV total é a cardiopatia clássica da Trissomia 21, caracterizada no ECG por desvio do eixo para o quadrante superior esquerdo; a correção precoce previne a hipertensão pulmonar irreversível.",
      "B": "Incorreta. A TGA não é a lesão típica da trissomia 21 e nunca fecha espontaneamente; a conduta expectante levaria à morte.",
      "C": "Incorreta. A Coarctação de Aorta é a cardiopatia prototípica da Síndrome de Turner (45,X), e não da Síndrome de Down.",
      "D": "Incorreta. A Tetralogia de Fallot possui obrigatoriamente CIV por definição anatômica ('sem CIV' não existe), e não tem indicação primária de transplante cardíaco."
    }
  },
  {
    "id": "ped-cardio-rev-12",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Teste do Coraçãozinho (Oximetria de Pulso)",
    "isRevisao": true,
    "enunciado": "Recém-nascido a termo, com 30 horas de vida, aparentemente saudável e em alojamento conjunto, é submetido à triagem neonatal por oximetria de pulso (Teste do Coraçãozinho). A monitorização foi realizada conforme o protocolo do Ministério da Saúde e da Sociedade Brasileira de Pediatria. O primeiro teste aferiu SatO2 em membro superior direito (MSD) de 96% e em membro inferior direito (MID) de 91% (diferença de 5%). Qual é a conduta correta a ser adotada de imediato?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Considerar o teste duvidoso/suspeito, manter o recém-nascido em observação e repetir a aferição no MSD e no membro inferior em 1 hora."
      },
      {
        "id": "B",
        "texto": "Liberar o recém-nascido para alta hospitalar com encaminhamento para consulta ambulatorial em 30 dias, pois a SatO2 no MSD foi superior a 95%."
      },
      {
        "id": "C",
        "texto": "Iniciar imediatamente infusão contínua de adrenalina intravenosa e intubação orotraqueal em sala de parto."
      },
      {
        "id": "D",
        "texto": "Realizar cateterismo cardíaco intervencionista de urgência imediatamente, sem necessidade de ecocardiograma prévio."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Teste do Coraçãozinho (triagem de cardiopatias congênitas críticas) deve ser realizado em todo recém-nascido a termo ou prematuro tardio assintomático, entre 24 e 48 horas de vida, antes da alta da maternidade. A oximetria de pulso é aferida no membro superior direito (medida pré-ductal) e em um dos membros inferiores (medida pós-ductal). O resultado é NORMAL se SatO2 ≥ 95% em ambos os locais E a diferença entre eles for ≤ 3%. Se a SatO2 for < 95% em qualquer sítio OU a diferença for ≥ 3%, o teste é considerado ALTERADO/SUSPEITO: a conduta obrigatória é repetir o teste em 1 hora. Se a alteração persistir na segunda aferição, o teste é considerado POSITIVO, exigindo ecocardiograma em até 24 horas antes da alta hospitalar.",
    "comentariosAlternativas": {
      "A": "Correta. Diferença de SatO2 ≥ 3% entre MSD e MI requer obrigatoriamente a repetição do exame em 1 hora; persistindo alterado, indica-se ecocardiograma.",
      "B": "Incorreta. A presença de diferença de 5% entre o MSD e o membro inferior é sinal de fluxo ductal anômalo (ex: coarctação de aorta ou interrupção do arco aórtico), impedindo a alta da maternidade.",
      "C": "Incorreta. A criança está estável em alojamento conjunto; intubação e adrenalina são medidas de ressuscitação em parada ou colapso, totalmente desnecessárias e danosas aqui.",
      "D": "Incorreta. O ecocardiograma transtorácico é o método diagnóstico não invasivo de escolha antes de qualquer consideração de intervenção hemodinâmica invasiva."
    }
  },
  {
    "id": "ped-cardio-rev-13",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Febre Reumática Aguda - Critérios de Jones",
    "isRevisao": true,
    "enunciado": "Menino de 10 anos é trazido ao pronto-atendimento com dor e inchaço no joelho direito há 3 dias, que melhorou com o repouso, mas que hoje 'pulou' para o tornozelo esquerdo, apresentando calor, rubor e grande limitação funcional. A mãe relata quadro de amigdalite com febre alta tratada há 3 semanas com anti-inflamatório caseiro por 2 dias. Ao exame físico: artrite evidente em tornozelo esquerdo. Ausculta cardíaca revela FC de 110 bpm e sopro holossistólico 3+/6+ regurgitativo em ápice, com irradiação para a axila esquerda (sopro de insuficiência mitral). Exames laboratoriais: VHS: 85 mm/1ª hora, PCR: 48 mg/L e título de Antiestreptolisina O (ASLO): 800 UI/mL (valor de referência até 200 UI/mL). Com base nos critérios de Jones modificados (2015) para populações de risco moderado a alto, qual é a classificação correta desse episódio?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Primeiro surto de Febre Reumática Aguda confirmado, preenchendo 2 manifestações maiores (poliartrite migratória e cardite clínica), além de comprovação de infecção estreptocócica prévia (ASLO elevado)."
      },
      {
        "id": "B",
        "texto": "Artrite idiopática juvenil na forma oligoarticular, não preenchendo critérios para febre reumática devido à ausência de coreia de Sydenham."
      },
      {
        "id": "C",
        "texto": "Artrite séptica bacteriana associada a endocardite infecciosa estafilocócica subaguda por contiguidade."
      },
      {
        "id": "D",
        "texto": "Doença de Lyme com artrite de grandes articulações e bloqueio atrioventricular de primeiro grau isolado."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Pelos critérios de Jones revisados pela American Heart Association (2015), o diagnóstico do primeiro surto de Febre Reumática requer evidência de infecção prévia por Streptococcus pyogenes do grupo A (ASLO elevado ou cultura de orofaringe positiva) associada a: 2 critérios maiores OU 1 critério maior + 2 menores. Os critérios maiores incluem: Cardite (clínica ou subclínica ao ecocardiograma), Artrite (em populações de risco moderado/alto como o Brasil, aceita-se poliartrite, monoartrite ou poliartralgia), Coreia de Sydenham, Nódulos subcutâneos e Eritema marginado. O paciente apresenta 2 critérios maiores (artrite migratória de grandes articulações e cardite clínica com sopro de insuficiência mitral) com ASLO francamente positivo, confirmando febre reumática aguda.",
    "comentariosAlternativas": {
      "A": "Correta. Há comprovação de infecção estreptocócica recente (ASLO alto após faringoamigdalite) somada a dois critérios maiores clássicos: poliartrite migratória e cardite com insuficiência mitral.",
      "B": "Incorreta. A AIJ oligoarticular cursa com artrite crônica e persistente (duração > 6 semanas), sem caráter migratório de resolução rápida, e não se associa a cardite valvar mitral nem ASLO positivo.",
      "C": "Incorreta. A artrite migratória que acomete sequencialmente diferentes grandes articulações com rápida resposta a salicilatos/AINEs é típica de febre reumática, diferindo da monoartrite purulenta fixa da artrite séptica.",
      "D": "Incorreta. A doença de Lyme é transmitida por carrapatos (Borrelia burgdorferi), é rara no Brasil e não se manifesta após faringite estreptocócica documentada com ASLO elevado."
    }
  },
  {
    "id": "ped-cardio-rev-14",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Febre Reumática - Manejo da Cardite e Profilaxia Secundária",
    "isRevisao": true,
    "enunciado": "Após a confirmação diagnóstica de febre reumática com cardite moderada (insuficiência mitral com regurgitação volumosa ao ecocardiograma e discreta cardiomegalia, sem choque), o médico assistente planeja o esquema terapêutico da fase aguda e a profilaxia secundária a longo prazo. Quais são, respectivamente, a droga de escolha para o controle anti-inflamatório da cardite na fase aguda e o regime preconizado de profilaxia secundária para prevenção de novos surtos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Prednisona oral (1 a 2 mg/kg/dia por 2 a 4 semanas, com desmame gradual subsequente); Penicilina G Benzatina intramuscular a cada 21 dias até os 25 anos de idade ou até 10 anos após o último surto (o que for mais longo)."
      },
      {
        "id": "B",
        "texto": "Ácido acetilsalicílico em dose antiagregante isolada; Penicilina oral diariamente durante 6 meses."
      },
      {
        "id": "C",
        "texto": "Indometacina venosa contínua por 48 horas; Amoxicilina oral dose única antes de procedimentos dentários apenas."
      },
      {
        "id": "D",
        "texto": "Imunoglobulina humana intravenosa em dose única de 2 g/kg; Azitromicina semanal por 1 ano."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na fase aguda da febre reumática, a presença de cardite moderada a grave exige corticoterapia sistêmica (Prednisona 1 a 2 mg/kg/dia, dose máxima de 60-80 mg/dia, por 2 a 4 semanas, seguida de desmame gradual nas semanas seguintes com transição/sobreposição com AAS para prevenir efeito rebote). O AAS em altas doses (80-100 mg/kg/dia) é reservado para artrite isolada ou cardite muito leve. Para a profilaxia secundária (prevenção de novas infecções estreptocócicas que desencadeiam novos surtos e agravam as lesões valvares), a droga de escolha é a Penicilina G Benzatina a cada 21 dias (600.000 UI para peso ≤ 27 kg e 1.200.000 UI para peso > 27 kg). Em pacientes com cardite e sequela valvar residual leve, a profilaxia deve ser mantida até os 25 anos de idade ou 10 anos após o último surto (o que for mais longo); se lesão residual moderada/severa ou cirurgia valvar, até os 40 anos ou por toda a vida.",
    "comentariosAlternativas": {
      "A": "Correta. A corticoterapia é a terapia padrão para cardite reumática moderada/grave, e a Penicilina Benzatina a cada 21 dias até 25 anos (ou 10 anos pós-surto) é a profilaxia secundária formal com lesão valvar resolvida/leve.",
      "B": "Incorreta. AAS em dose antiagregante é ineficaz para cardite ativa; profilaxia por apenas 6 meses deixaria a criança desprotegida na fase de maior risco de recorrência.",
      "C": "Incorreta. AINEs não são a droga de escolha para cardite moderada com dilatação de câmaras; a amoxicilina apenas antes de procedimentos odontológicos é profilaxia de endocardite infecciosa, e não profilaxia secundária de febre reumática.",
      "D": "Incorreta. A IVIG 2 g/kg é o tratamento da Doença de Kawasaki, não tendo indicação na febre reumática aguda."
    }
  },
  {
    "id": "ped-cardio-rev-15",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Doença de Kawasaki - Critérios Clínicos Clássicos",
    "isRevisao": true,
    "enunciado": "Criança de 2 anos e 4 meses é trazida ao pronto-atendimento com febre diária alta (39°C a 40°C) há 6 dias consecutivos, irritabilidade acentuada e sem resposta a antibiótico oral prescrito há 48 horas. Ao exame físico minucioso, encontram-se: injeção conjuntival bulbar bilateral não exsudativa, lábios eritematosos e fissurados com língua 'em framboesa', linfonodomegalia cervical anterior direita de 2,0 cm de diâmetro (unilateral, dolorosa, não supurativa), exantema maculopapular polimorfo em tronco e edema endurecido com eritema marcante em palmas das mãos e plantas dos pés. Não há conjuntivite purulenta nem vesículas. Com base nas diretrizes da American Heart Association, qual é o diagnóstico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Doença de Kawasaki clássica (completa), com febre persistente por ≥ 5 dias acompanhada de 5 critérios clínicos principais."
      },
      {
        "id": "B",
        "texto": "Escarlatina estreptocócica sem indicação de internação."
      },
      {
        "id": "C",
        "texto": "Mononucleose infecciosa por vírus Epstein-Barr com hepatite aguda."
      },
      {
        "id": "D",
        "texto": "Eritema infeccioso por Parvovírus B19 em fase de exantema rendilhado."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Doença de Kawasaki é uma vasculite sistêmica aguda de artérias de médio calibre, acometendo principalmente menores de 5 anos de idade. O diagnóstico da forma clássica/completa exige febre alta por pelo menos 5 dias associada a pelo menos 4 dos 5 critérios clínicos principais: 1) Injeção conjuntival bilateral não purulenta; 2) Alterações orofaríngeas (eritema labial, fissuras, língua em framboesa, hiperemia de faringe); 3) Linfadenopatia cervical aguda não purulenta, habitualmente unilateral e com diâmetro > 1,5 cm; 4) Exantema polimorfo (não vesicular); 5) Alterações de extremidades (eritema e edema endurecido de mãos e pés na fase aguda; descamação periungueal na fase subaguda). O paciente preenche febre há 6 dias e todos os 5 critérios principais.",
    "comentariosAlternativas": {
      "A": "Correta. Febre persistente ≥ 5 dias somada a injeção conjuntival sem exsudato, alterações orais, adenomegalia unilateral > 1,5 cm, exantema e edema de mãos/pés fecha o diagnóstico de Kawasaki completo.",
      "B": "Incorreta. A escarlatina não cursa com injeção conjuntival não exsudativa, edema endurecido palmoplantar nem irritabilidade com febre refratária típica de Kawasaki, além de responder prontamente à penicilina.",
      "C": "Incorreta. A mononucleose cursa tipicamente com faringite exsudativa pseudomembranosa, adenopatia cervical bilateral generalizada e esplenomegalia, sem as alterações orais e periféricas do Kawasaki.",
      "D": "Incorreta. O eritema infeccioso (Parvovírus B19) cursa com fácies de 'bofetada' seguido de exantema rendilhado em extremidades, geralmente em criança em bom estado geral e afebril no momento do exantema."
    }
  },
  {
    "id": "ped-cardio-rev-16",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Doença de Kawasaki - Tratamento e Prevenção de Aneurismas",
    "isRevisao": true,
    "enunciado": "Menina de 3 anos de idade, com diagnóstico confirmado de Doença de Kawasaki no 7º dia de evolução da febre, é internada na enfermaria de pediatria. O ecocardiograma inicial demonstra ectasia discreta da artéria coronária esquerda (Z-score: +2,3), sem trombos. Qual é a conduta farmacológica padrão-ouro que deve ser iniciada de imediato com o objetivo primário de reduzir a incidência de dilatações e aneurismas coronarianos de 25% para menos de 4%?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Imunoglobulina Humana Intravenosa (IVIG) na dose de 2 g/kg em infusão contínua única por 10 a 12 horas associada a Ácido Acetilsalicílico (AAS) em dose anti-inflamatória (30 a 50 mg/kg/dia)."
      },
      {
        "id": "B",
        "texto": "Prednisona em pulsoterapia venosa isolada por 5 dias consecutivos, sem indicação de derivados do ácido salicílico."
      },
      {
        "id": "C",
        "texto": "Enoxaparina subcutânea em dose plena de anticoagulação associada a varfarina oral com alvo de RNI entre 2,5 e 3,5."
      },
      {
        "id": "D",
        "texto": "Metilprednisolona venosa associada a azitromicina oral por 14 dias para erradicação do foco infeccioso bacteriano."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O tratamento padrão-ouro estabelecido internacionalmente para a Doença de Kawasaki na fase aguda (idealmente dentro dos primeiros 10 dias de febre) consiste na administração precoce de Imunoglobulina Humana Intravenosa (IVIG) na dose única de 2 g/kg (infundida ao longo de 10-12 horas) associada ao Ácido Acetilsalicílico (AAS) em dose anti-inflamatória (30 a 50 mg/kg/dia dividida a cada 6 horas; algumas diretrizes usam 80 a 100 mg/kg/dia). Essa associação promove rápida remissão da febre e reduz dramaticamente o risco de desenvolvimento de aneurismas coronarianos de até 25% para menos de 4%. Após 48 a 72 horas afebril, a dose de AAS é reduzida para a faixa antiplaquetária (3 a 5 mg/kg/dia em tomada única matinal) por 6 a 8 semanas, período no qual se realiza ecocardiograma de controle.",
    "comentariosAlternativas": {
      "A": "Correta. A infusão de IVIG 2 g/kg em dose única somada a AAS anti-inflamatório é a conduta salvadora padrão que reduz exponencialmente a formação de aneurismas coronarianos.",
      "B": "Incorreta. Corticoides em monoterapia isolada foram historicamente associados a maior taxa de rotura/aneurisma e nunca substituem a IVIG na fase aguda inicial.",
      "C": "Incorreta. A anticoagulação plena com enoxaparina/varfarina só tem indicação na presença de aneurismas coronarianos gigantes (Z-score ≥ 10 ou diâmetro absoluto ≥ 8 mm) ou com trombos murais documentados.",
      "D": "Incorreta. A etiologia da doença de Kawasaki é imune-vasculítica inflamatória e não uma infecção bacteriana ativa que responda a macrolídeos."
    }
  },
  {
    "id": "ped-cardio-rev-17",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Doença de Kawasaki Incompleta no Lactente Jovem",
    "isRevisao": true,
    "enunciado": "Lactente do sexo masculino, com 4 meses de idade, apresenta febre diária de 39°C há 8 dias consecutivos, acompanhada de irritabilidade intensa e choro inconsolável. Não há tosse, coriza, diarreia ou vômitos. Ao exame físico: apenas hiperemia conjuntival bilateral leve e discreta vermelhidão labial, sem outros sinais ao exame. O exame de urina colhido por cateterismo vesical revelou leucocitúria de 85.000 leucócitos/mL com urocultura estéril (piúria estéril). Exames de sangue: PCR: 96 mg/L, VHS: 88 mm/h, albumina sérica: 2,6 g/dL, transaminases discretamente elevadas e plaquetas de 650.000/mm³ (trombocitose reativa). Considerando o algoritmo da AHA para casos suspeitos de Kawasaki incompleto, qual é o próximo passo fundamental?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Solicitar ecocardiograma transtorácico de urgência e, se confirmado acometimento coronariano ou diante de alta suspeita com provas inflamatórias fortemente positivas, iniciar tratamento imediato com IVIG e AAS."
      },
      {
        "id": "B",
        "texto": "Interromper a investigação e iniciar antibioticoterapia empírica parenteral para meningite bacteriana com ceftriaxona e vancomicina."
      },
      {
        "id": "C",
        "texto": "Realizar biópsia de gânglio mesentérico para afastar linfoma não-Hodgkin infantil de células T."
      },
      {
        "id": "D",
        "texto": "Aguardar a resolução espontânea da febre em regime ambulatorial, uma vez que o lactente não possui os 4 critérios maiores obrigatórios."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Em lactentes com menos de 6 meses de vida, a Doença de Kawasaki frequentemente se apresenta de forma INCOMPLETA ou ATÍPICA, com poucos sinais clínicos clássicos, mas com altíssimo risco de aneurismas de coronárias (faixa etária de maior risco de dano coronariano grave). As diretrizes da AHA preconizam que todo lactente com febre inexplicada por 7 dias ou mais associada a provas de atividade inflamatória elevadas (PCR ≥ 30 mg/L ou VHS ≥ 40 mm/h) deve ser investigado ativamente para Kawasaki incompleto, avaliando-se critérios laboratoriais complementares (anemia normocítica, plaquetas > 450.000 após o 7º dia, albumina ≤ 3,0 g/dL, ALT elevada, leucócitos ≥ 15.000, piúria estéril ≥ 10 leucócitos/campo) e ecocardiograma de urgência. Se houver 3 ou mais alterações laboratoriais ou eco positivo, o tratamento com IVIG (2 g/kg) deve ser prontamente instituído.",
    "comentariosAlternativas": {
      "A": "Correta. A presença de febre prolongada, PCR/VHS elevados, hipoalbuminemia, trombocitose e piúria estéril impõe ecocardiograma e início rápido de IVIG para prevenir sequelas coronarianas fatais.",
      "B": "Incorreta. O lactente não tem sinais meníngeos nem clínica de sepse com hipotensão bacteriana; o quadro indolente febril com marcadores laboratoriais específicos aponta fortemente para vasculite de Kawasaki.",
      "C": "Incorreta. Procedimento invasivo totalmente desprovido de indicação, retardando o tratamento tempo-dependente da vasculite coronariana.",
      "D": "Incorreta. Conduta omissiva perigosa; lactentes com Kawasaki incompleto têm o maior índice de aneurismas gigantes e morte súbita se não tratados nos primeiros 10 dias."
    }
  },
  {
    "id": "ped-cardio-rev-18",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Taquicardia Supraventricular (TSV) no Lactente",
    "isRevisao": true,
    "enunciado": "Lactente de 1 mês e meio de vida é levado à emergência por estar muito irritado, gemendo e recusando as mamadas há 6 horas. A mãe notou que o coração do bebê 'parece que vai sair pela boca'. Ao exame físico: acordado, reativo, com palidez cutânea e tempo de enchimento capilar de 2 segundos. Pressão arterial: 76x44 mmHg (estável). A monitorização eletrocardiográfica revela frequência cardíaca fixa de 260 batimentos por minuto, ritmo regular, com complexos QRS estreitos (< 0,08s) e ausência de ondas P precedendo os complexos. O médico aplica manobra vagal com bolsa de gelo sobre a face por 15 segundos, sem reversão do ritmo. Qual é a droga de escolha e a forma correta de administração para a reversão imediata da arritmia neste paciente estável?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Adenosina na dose de 0,1 mg/kg em bólus intravenoso ultrarrápido (em 1 a 2 segundos) em acesso venoso periférico calibroso proximal, seguida imediatamente por um 'flush' rápido de soro fisiológico a 0,9%."
      },
      {
        "id": "B",
        "texto": "Verapamil na dose de 0,2 mg/kg em infusão lenta de 10 minutos."
      },
      {
        "id": "C",
        "texto": "Amiodarona na dose de 15 mg/kg em infusão contínua por bomba de seringa durante 4 horas."
      },
      {
        "id": "D",
        "texto": "Digoxina oral em dose de ataque calculada para 24 horas."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Taquicardia Supraventricular (TSV) por reentrada é a arritmia cardíaca sintomática mais comum da infância e da faixa etária neonatal/lactente. No lactente, a FC na TSV costuma oscilar entre 220 e 300 bpm (monomórfica e fixa), com QRS estreito e sem ondas P sinusais visíveis. Em pacientes clinicamente ESTÁVEIS (com boa perfusão periférica e PA normal), a abordagem inicial preconiza manobras vagais (em lactentes, compressas de gelo envolvidas em plástico colocadas sobre a fronte/face por 10 a 15 segundos — nunca compressão do globo ocular). Na falha da manobra vagal, a droga de primeira escolha é a ADENOSINA na dose inicial de 0,1 mg/kg (máximo 6 mg na 1ª dose). Devido à meia-vida ultracurta da adenosina (< 10 segundos), ela deve ser administrada em bólus venoso ultrarrápido seguida imediatamente por um flush vigoroso de 5 a 10 mL de soro fisiológico (técnica da torneirinha de 3 vias). Se refratário, pode-se dobrar para 0,2 mg/kg (máximo 12 mg). Se o paciente estivesse instável (choque, má perfusão, alteração de consciência), a indicação imediata seria cardioversão elétrica sincronizada (0,5 a 1 J/kg).",
    "comentariosAlternativas": {
      "A": "Correta. A adenosina intravenosa em bólus ultrarrápido acompanhada de flush de SF 0,9% é a conduta farmacológica padrão ouro de 1ª linha na TSV com estabilidade hemodinâmica.",
      "B": "Incorreta. O verapamil (bloqueador dos canais de cálcio não di-hidropiridínico) é FORMALMENTE CONTRAINDICADO em lactentes menores de 1 ano de vida, pois causa colapso cardiovascular profundo e assistolia refratária.",
      "C": "Incorreta. A amiodarona é droga de segunda linha para arritmias ventriculares ou TSVs refratárias a múltiplas doses de adenosina e cardioversão elétrica, não sendo a primeira escolha em paciente estável.",
      "D": "Incorreta. A digoxina tem início de ação muito lento (horas) e não é indicada para a reversão aguda de taquiarritmia paroxística na emergência."
    }
  },
  {
    "id": "ped-cardio-rev-19",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Síndrome de Wolff-Parkinson-White (WPW)",
    "isRevisao": true,
    "enunciado": "Após a reversão bem-sucedida de um episódio de taquicardia paroxística com adenosina em um menino de 7 anos, o eletrocardiograma de 12 derivações em ritmo sinusal revela: frequência cardíaca de 80 bpm, intervalo PR encurtado (90 ms), complexo QRS com alargamento inicial em rampa ascendente (empastamento da onda R denominado 'onda delta') e duração do complexo QRS discretamente aumentada para a faixa etária. O paciente relata episódios recorrentes de batedeira no peito de início súbito que cessam abruptamente. Qual é a base eletrofisiológica dessa síndrome e qual fármaco intravenoso é formalmente contraindicado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Presença de uma via anômala acessória átrio-ventricular com condução atrioventricular pré-excitada (feixe de Kent); bloqueadores do nó AV que prolongam o período refratário nodal (como verapamil e diltiazem) são contraindicados em ritmos pré-excitados com fibrilação atrial por risco de indução de fibrilação ventricular."
      },
      {
        "id": "B",
        "texto": "Displasia arritmogênica do ventrículo direito; betabloqueadores são contraindicados por risco de assistolia."
      },
      {
        "id": "C",
        "texto": "Canalopatia pura de canais de sódio tipo Brugada; adenosina é contraindicada em doses subsequentes."
      },
      {
        "id": "D",
        "texto": "Retardo fisiológico da condução no feixe de His com escape juncional idioventricular; contraindica-se sulfato de magnésio."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Síndrome de Wolff-Parkinson-White (WPW) é uma síndrome de pré-excitação ventricular causada pela persistência congênita de uma via de condução atrioventricular anômala (feixe acessório ou feixe de Kent) que contorna o retardo fisiológico normal do nó atrioventricular. A tríade eletrocardiográfica clássica em ritmo sinusal é composta por: 1) Intervalo PR curto (< 120 ms em crianças maiores e < 90-100 ms em lactentes); 2) Onda delta (empastamento inicial do QRS que expressa a despolarização precoce ventricular pela via anômala rápida); 3) Alargamento do QRS com alterações secundárias de repolarização ventricular. Se um paciente com via acessória apresentar fibrilação atrial (FA pré-excitada), os bloqueadores do nó AV (como verapamil, diltiazem, betabloqueadores ou digoxina) bloqueiam a condução pelo nó AV e direcionam os estímulos caóticos atriais exclusivamente para o feixe acessório (que tem período refratário muito curto), podendo disparar fibrilação ventricular fatal.",
    "comentariosAlternativas": {
      "A": "Correta. O feixe anômalo de Kent causa pré-excitação ventricular e onda delta; bloqueadores de nó AV em taquiarritmias pré-excitadas facilitam a condução anterógrada pela via anômala, arriscando fibrilação ventricular.",
      "B": "Incorreta. Na displasia arritmogênica do VD há onda épsilon ao final do QRS nas precordiais direitas e inversão de onda T em V1-V3, não correspondendo ao traçado com PR curto e onda delta.",
      "C": "Incorreta. A Síndrome de Brugada cursa com supradesnivelamento do segmento ST em sela ou tenda de V1 a V3 e bloqueio incompleto do ramo direito, e não com PR curto e onda delta.",
      "D": "Incorreta. O quadro descrito é a definição clássica de pré-excitação ventricular com feixe de Kent (WPW) e o magnésio não é contraindicado na síndrome."
    }
  },
  {
    "id": "ped-cardio-rev-20",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Bloqueio Atrioventricular Total (BAVT) Congênito",
    "isRevisao": true,
    "enunciado": "Recém-nascido com 1 dia de vida, filho de mãe com diagnóstico de Lúpus Eritematoso Sistêmico (LES) com anticorpos anti-Ro/SSA e anti-La/SSB fortemente reagentes, nasce a termo e apresenta bradicardia persistente desde o período intrauterino. Ao exame na sala de parto: reativo, acianótico, mas com frequência cardíaca mantida entre 48 e 52 bpm. O eletrocardiograma demonstra dissociação atrioventricular completa, com ondas P regulares a 140 bpm independentes de complexos QRS regulares a 50 bpm (ritmo de escape juncional estreito). Qual é o mecanismo de dano cardíaco fetal induzido pelos anticorpos maternos e a terapêutica definitiva necessária se houver sintomas ou frequência ventricular criticamente baixa?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Passagem transplacentária de autoanticorpos maternos anti-Ro/SSA e anti-La/SSB que se ligam ao sistema de condução cardíaco fetal, provocando inflamação, necrose e fibrose irreversível do nó atrioventricular; o implante de marca-passo definitivo é o tratamento de escolha."
      },
      {
        "id": "B",
        "texto": "Depósito de imunocomplexos nas artérias coronárias fetais gerando infarto transmural da parede livre do ventrículo direito; necessita de trombólise sistêmica imediata."
      },
      {
        "id": "C",
        "texto": "Toxicidade direta da heparina utilizada pela mãe gerando parada sinusal; requer suspensão de anticoagulantes e uso de atropina contínua."
      },
      {
        "id": "D",
        "texto": "Agenesia congênita das câmaras esquerdas com atresia mitral associada; indicação de transplante cardíaco nas primeiras 24 horas."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Bloqueio Atrioventricular Total (BAVT) congênito com coração estruturalmente normal é a manifestação mais temida do Lúpus Neonatal. Decorre da transferência transplacentária passiva de autoanticorpos maternos IgG anti-Ro/SSA (e anti-La/SSB), que reagem contra antígenos presentes nas células do nó atrioventricular e feixe de His do feto entre a 16ª e 24ª semanas de gestação. Essa ligação anticorpo-antígeno desencadeia uma reação inflamatória miocárdica com consequente necrose, calcificação e substituição do sistema de condução cardíaco por tecido fibrótico cicatricial irreversível. O feto/neonato manifesta bradicardia importante e dissociação atrioventricular no ECG. O tratamento definitivo para neonatos sintomáticos ou com FC média < 50-55 bpm, pausas ventriculares ou disfunção ventricular é o implante de marca-passo cardíaco definitivo.",
    "comentariosAlternativas": {
      "A": "Correta. Os anticorpos maternos anti-Ro/SSA causam destruição inflamatória e fibrose irreversível do nó AV fetal, exigindo implante de marca-passo definitivo conforme os critérios de FC e débito.",
      "B": "Incorreta. O lúpus neonatal não causa infarto transmural por aterotrombose coronariana nem tem indicação de trombólise.",
      "C": "Incorreta. A heparina materna não atravessa a barreira placentária e não causa toxicidade nodal fetal; além disso, a atropina não reverte um nó AV fibrosado.",
      "D": "Incorreta. No BAVT congênito autoimune isolado, a anatomia das câmaras e valvas é tipicamente normal, estando a lesão restrita ao sistema de condução atrioventricular."
    }
  },
  {
    "id": "ped-cardio-rev-21",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Anomalia de Ebstein",
    "isRevisao": true,
    "enunciado": "Recém-nascido a termo apresenta cianose e sopro cardíaco à admissão. A história gestacional revela que a mãe é portadora de transtorno afetivo bipolar e manteve uso contínuo de carbonato de lítio durante todo o primeiro trimestre da gravidez. O exame físico revela hepatomegalia e sopro holossistólico regurgitativo suave em borda esternal esquerda baixa. O eletrocardiograma mostra ondas P gigantes (P 'em tenda' sugerindo imenso aumento do átrio direito) e bloqueio completo de ramo direito. A radiografia de tórax evidencia cardiomegalia extrema com silhueta globular massiva, assemelhando-se a um 'coração em moringa' ou 'balão de água', com campos pulmonares oligoêmicos. Qual anomalia congênita tricuspídea e ventricular está descrita?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Anomalia de Ebstein, caracterizada pelo adosçamento e deslocamento apical das cúspides septal e posterior da valva tricúspide com atrialização de porção substancial do ventrículo direito."
      },
      {
        "id": "B",
        "texto": "Atresia tricúspide clássica com hipoplasia do átrio direito e ausência total de tecido valvar."
      },
      {
        "id": "C",
        "texto": "Tetralogia de Fallot com dilatação idiopática das artérias pulmonares."
      },
      {
        "id": "D",
        "texto": "Síndrome do coração esquerdo hipoplásico com fístula arteriovenosa coronariana."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Anomalia de Ebstein é uma malformação congênita da valva tricúspide e do ventrículo direito caracterizada pela falha de delaminação das cúspides septal e posterior da valva tricúspide, que permanecem aderidas ao miocárdio e são deslocadas para o interior da cavidade do VD (deslocamento apical do orifício funcional da tricúspide). Isso divide o VD em duas partes: uma proximal 'atrializada' (composta por parede ventricular delgada funcionalmente incorporada ao átrio direito gigante) e um VD verdadeiro distal reduzido. Isso gera insuficiência tricúspide volumosa, dilatação monstruosa do átrio direito (ondas P pontiagudas e gigantes no ECG) e a clássica silhueta radiológica de coração em moringa ou garrafa de água ('coração balão'), ocupando quase todo o tórax com hipofluxo pulmonar. Há conhecida associação teratogênica com o uso de carbonato de lítio pela gestante no 1º trimestre, e alta prevalência de vias acessórias de pré-excitação (WPW).",
    "comentariosAlternativas": {
      "A": "Correta. O deslocamento apical dos folhetos tricuspídeos, a atrialização do VD e a cardiomegalia em moringa após exposição ao lítio são patognomônicos da Anomalia de Ebstein.",
      "B": "Incorreta. Na atresia tricúspide não há orifício ou valva tricúspide; o ventrículo direito é hipoplásico e o ECG mostra sobrecarga de ventrículo esquerdo (eixo desviado para esquerda), sem a enorme cardiomegalia em moringa.",
      "C": "Incorreta. A Tetralogia de Fallot cursa com coração de tamanho normal ou discretamente aumentado com aspecto em tamanco holandês, e não com dilatação cardíaca massiva preenchendo o tórax.",
      "D": "Incorreta. A SHCE não se caracteriza por valva tricúspide deslocada apicalmente nem coração em moringa globular com ondas P gigantes por regurgitação tricúspide."
    }
  },
  {
    "id": "ped-cardio-rev-22",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Drenagem Anômala Total das Veias Pulmonares (DATVP)",
    "isRevisao": true,
    "enunciado": "Recém-nascido a termo, com 6 horas de vida, apresenta quadro de desconforto respiratório grave, taquidispneia intensa, gemência e cianose central profunda refratária à oxigenoterapia (SatO2 de 55% mesmo sob CPAP com FiO2 100%). Não se auscultam sopros cardíacos significativos; a segunda bulha é única e hiperfonética. A radiografia de tórax revela coração de tamanho normal a reduzido e infiltrado reticulonodular difuso bilateral com padrão de congestão venocapilar e edema pulmonar alveolar grave ('vidro fosco pulmonar'). O ecocardiograma revela que as quatro veias pulmonares convergem em um coletor comum retrocardíaco que drena através de uma veia vertical descendente na circulação portal subdiafragmática, com obstrução grave ao fluxo. Qual é o diagnóstico e a conduta imediata?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Drenagem Anômala Total das Veias Pulmonares (DATVP) forma infracardíaca obstrutiva; trata-se de emergência cirúrgica neonatal absoluta exigindo anastomose imediata do coletor venoso pulmonar ao átrio esquerdo."
      },
      {
        "id": "B",
        "texto": "Taquipneia transitória do recém-nascido; conduta puramente expectante com suspensão de oxigênio."
      },
      {
        "id": "C",
        "texto": "Pneumonia congênita por Streptococcus agalactiae; antibioticoterapia empírica e suporte clínico sem necessidade de cirurgia cardíaca."
      },
      {
        "id": "D",
        "texto": "Doença da membrana hialina precoce; administração de três doses de surfactante exógeno traqueal."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Drenagem Anômala Total das Veias Pulmonares (DATVP) do tipo infracardíaco é a forma clássica de cardiopatia congênita com obstrução venosa pulmonar grave e emergência cirúrgica neonatal hiperaguda. Como as veias pulmonares drenam abaixo do diafragma (na veia porta, ducto venoso ou veia cava inferior), a passagem pelo parênquima hepático ou a constrição do ducto venoso obstrui criticamente o retorno venoso pulmonar. Isso gera hipertensão venocapilar pulmonar brutal, edema pulmonar fulminante e choque hipoxêmico nas primeiras horas de vida. O coração é pequeno ou normal (pois as câmaras esquerdas não recebem sangue das veias pulmonares, dependendo exclusivamente de um forame oval restritivo para encher o VE) e a radiografia mostra um pulmão 'branco' congesto. O reparo cirúrgico de emergência para anastomosar o coletor de veias pulmonares à parede posterior do átrio esquerdo é a única medida capaz de evitar a morte.",
    "comentariosAlternativas": {
      "A": "Correta. A DATVP obstrutiva infracardíaca cursa com edema pulmonar catastrófico, coração pequeno no RX e cianose refratária, constituindo uma das maiores emergências cirúrgicas da neonatologia.",
      "B": "Incorreta. A taquipneia transitória é um quadro autolimitado e benigno de reabsorção retardada de líquido pulmonar no prematuro tardio/termo nascido por cesárea, sem cianose grave refratária a FiO2 100%.",
      "C": "Incorreta. Embora a imagem radiológica de congestão/infiltrado possa mimetizar sepse/pneumonia, o quadro de edema pulmonar obstrutivo decorre da anomalia anatômica vascular cardiovascular, não sendo resolvido com antimicrobianos.",
      "D": "Incorreta. A membrana hialina é doença de prematuros extremos com deficiência de surfactante; em um recém-nascido a termo com eco mostrando drenagem anômala, o surfactante é inútil."
    }
  },
  {
    "id": "ped-cardio-rev-23",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Síndrome do Coração Esquerdo Hipoplásico (SHCE)",
    "isRevisao": true,
    "enunciado": "Recém-nascido com 48 horas de vida, portador de Síndrome do Coração Esquerdo Hipoplásico (SHCE), encontra-se em leito de UTI neonatal sob infusão contínua de Prostaglandina E1 (alprostadil). A gasometria arterial demonstra pH 7,38, PaCO2 40 mmHg, PaO2 42 mmHg e SatO2 sistêmica de 78%. O médico residente propõe aumentar a oferta de oxigênio inalado instalando uma máscara com reservatório a 10 L/min com objetivo de 'elevar a saturação para 98%'. O médico diarista da UTI contraindica formalmente essa conduta. Por que a hiperóxia com altos níveis de oxigênio é potencialmente deletéria e contraindicada na circulação univentricular paralela da SHCE?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O oxigênio é um potente vasodilatador pulmonar; sua administração em altas concentrações reduz a resistência vascular pulmonar (RVP), desviando fluxo sanguíneo excessivo para os pulmões e provocando 'roubo' da perfusão sistêmica e coronariana retrógrada com consequente choque cardiogênico e isquemia tecidual."
      },
      {
        "id": "B",
        "texto": "O oxigênio estimula o fechamento anatômico precoce da comunicação interatrial não restritiva, provocando hemorragia alveolar maciça."
      },
      {
        "id": "C",
        "texto": "A hiperóxia provoca vasoconstrição cerebral que induz convulsões neonatais generalizadas imediatas refratárias a fenobarbital."
      },
      {
        "id": "D",
        "texto": "A SatO2 acima de 85% inativa a molécula de alprostadil por oxidação enzimática plasmática precoce."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na Síndrome do Coração Esquerdo Hipoplásico (SHCE), o ventrículo direito é o único ventrículo funcional capaz de ejetar sangue para as circulações pulmonar e sistêmica, as quais funcionam em paralelo. O fluxo de sangue para a aorta e coronárias depende inteiramente do fluxo canal-dependente da artéria pulmonar para a aorta descendente através do canal arterial mantido pérvio por PGE1, com fluxo retrógrado para o arco aórtico. A distribuição do débito cardíaco do VD entre o pulmão e o corpo é regulada pelo balanço entre a Resistência Vascular Pulmonar (RVP) e a Resistência Vascular Sistêmica (RVS). O oxigênio é o mais potente vasodilatador arteriolar pulmonar conhecido. Administrar oxigênio em excesso provoca queda abrupta da RVP, fazendo com que a imensa maioria do débito cardíaco seja direcionada para os pulmões (hiperfluxo pulmonar maciço), desabando a perfusão sistêmica retrógrada e coronariana ('roubo sistêmico'). Isso precipita colapso circulatório, isquemia miocárdica, anúria e acidose metabólica. O alvo de saturação fisiológico seguro na SHCE pré-operatória é entre 75% e 85%.",
    "comentariosAlternativas": {
      "A": "Correta. A vasodilatação pulmonar induzida pelo excesso de O2 reduz a RVP e causa 'roubo' sistêmico grave, privando os órgãos nobres e as coronárias de fluxo sob dependência de canal.",
      "B": "Incorreta. O oxigênio não fecha a comunicação interatrial; a CIA na SHCE é imprescindível para descomprimir o átrio esquerdo.",
      "C": "Incorreta. Embora a hipocapnia acentuada possa diminuir o fluxo cerebral, o mecanismo primário e fatal do oxigênio na SHCE é a alteração da hemodinâmica pulmonar versus sistêmica.",
      "D": "Incorreta. A prostaglandina E1 não é inativada por ligação ao oxigênio gasoso; seu metabolismo ocorre fisiologicamente nos pulmões."
    }
  },
  {
    "id": "ped-cardio-rev-24",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Estenose Aórtica Valvar Congênita Crítica",
    "isRevisao": true,
    "enunciado": "Recém-nascido a termo do sexo masculino desenvolve taquipneia progressiva, palidez cutânea e má perfusão no 3º dia de vida. Ao exame físico: pulsos periféricos finos, filiformes e de amplitude simetricamente reduzida nos quatro membros (pulsos radiais e femorais igualmente débeis). À ausculta cardíaca, presença de ritmo de galope (B3), sopro mesossistólico ejetivo áspero 3+/6+ em foco aórtico e borda esternal direita alta com irradiação para as carótidas, acompanhado de frêmito sistólico supraesternal. O fígado é palpável a 3,5 cm do rebordo costal direito. O ecocardiograma confirma valva aórtica espessada, fusionada, com abertura crítica em cúpula e gradiente de pico transvalvar aórtico elevado com disfunção sistólica de VE. Qual é o diagnóstico e a intervenção terapêutica transcateter de primeira escolha?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Estenose aórtica congênita valvar crítica do recém-nascido; valvoplastia aórtica percutânea com balão."
      },
      {
        "id": "B",
        "texto": "Coarctação de aorta simples; angioplastia com implante de stent recoberto."
      },
      {
        "id": "C",
        "texto": "Comunicação interatrial ampla; oclusão percutânea com prótese de Amplatzer."
      },
      {
        "id": "D",
        "texto": "Persistência do canal arterial restritivo; ligadura cirúrgica do canal por toracotomia esquerda."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A estenose aórtica congênita crítica no período neonatal cursa com obstrução severa à via de saída do ventrículo esquerdo, culminando em insuficiência cardíaca congestiva retrógrada e baixo débito cardíaco anterógrado grave. Ao contrário da coarctação de aorta (na qual os pulsos de membros superiores são amplos e os femorais são débeis ou ausentes), na estenose aórtica valvar os pulsos são simetricamente diminuídos em todas as quatro extremidades (pulsus parvus et tardus simétrico). O sopro é sistólico ejetivo rude em base com irradiação cervical. O manejo inicial na presença de baixo débito requer suporte com PGE1 para manter o canal arterial e garantir fluxo sistêmico e coronariano, e a desobstrução mecânica da valva aórtica por meio da valvoplastia aórtica com cateter-balão é o procedimento intervencionista de escolha para alívio imediato da estenose.",
    "comentariosAlternativas": {
      "A": "Correta. A descrição de sopro ejetivo em base com irradiação cervical, pulsos débeis em 4 membros e gradiente aórtico com disfunção de VE define estenose aórtica crítica, tratada preferencialmente por valvoplastia com balão.",
      "B": "Incorreta. Na coarctação de aorta há disparidade evidente de pulsos e pressões entre os membros superiores e inferiores, e não diminuição homogênea em todos os 4 membros.",
      "C": "Incorreta. A CIA não cursa com sopro aórtico rude com frêmito supraesternal nem pulsos diminuídos em 4 membros com disfunção do VE.",
      "D": "Incorreta. A ligadura do canal arterial em um neonato com estenose aórtica crítica privaria o corpo do fluxo sistêmico de escape, precipitando óbito imediato."
    }
  },
  {
    "id": "ped-cardio-rev-25",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Estenose Pulmonar Valvar Congênita",
    "isRevisao": true,
    "enunciado": "Criança de 4 anos é avaliada em ambulatório de cardiologia pediátrica devido a sopro cardíaco detectado na creche. Ela é totalmente assintomática, com bom ganho de peso e estatura. Ao exame físico: acianótica, eupneica. À ausculta: presença de clique de abertura valvar sistólico precoce em foco pulmonar (que diminui de intensidade durante a inspiração), seguido por um sopro sistólico ejetivo áspero 3+/6+ no 2º espaço intercostal esquerdo (foco pulmonar) com irradiação para dorso e campos pulmonares. O componente pulmonar da segunda bulha (P2) é abafado e atrasado. A radiografia de tórax evidencia área cardíaca normal, mas com dilatação proeminente do tronco da artéria pulmonar (dilatação pós-estenótica) com vascularização pulmonar periférica preservada. O ecocardiograma confirma estenose pulmonar valvar com gradiente de pico de 65 mmHg. Qual é o diagnóstico e o procedimento terapêutico de escolha?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Estenose pulmonar valvar moderada a severa; valvoplastia pulmonar percutânea por cateter-balão."
      },
      {
        "id": "B",
        "texto": "Tetralogia de Fallot com hipofluxo; correção intracardíaca cirúrgica imediata com patch transanular."
      },
      {
        "id": "C",
        "texto": "Estenose subaórtica por membrana fibrosa; ressecção cirúrgica por esternotomia mediana."
      },
      {
        "id": "D",
        "texto": "Hipertensão arterial pulmonar idiopática; início de sildenafila e bosentana oral."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A estenose pulmonar valvar congênita decorre da fusão das comissuras da valva pulmonar, resultando em valva em cúpula móvel com orifício estenosado. Os achados auscultatórios típicos incluem um clique de ejeção pulmonar (único clique do lado direito que diminui ou desaparece na inspiração pelo enchimento do VD), seguido por um sopro sistólico ejetivo áspero em foco pulmonar que irradia para dorso, e desdobramento amplo de B2 com P2 abafado/atrasado. A dilatação pós-estenótica do tronco da artéria pulmonar na radiografia resulta do impacto do jato sanguíneo turbilhonar em alta velocidade contra a parede do vaso. Para pacientes sintomáticos ou assintomáticos com gradiente de pico transvalvar ≥ 50-60 mmHg, a valvoplastia pulmonar por cateter-balão é o tratamento de escolha, com excelente taxa de sucesso e durabilidade a longo prazo.",
    "comentariosAlternativas": {
      "A": "Correta. O clique ejetivo com sopro em foco pulmonar, dilatação pós-estenótica do tronco pulmonar e gradiente > 60 mmHg definem estenose pulmonar valvar tratada com valvoplastia percutânea com balão.",
      "B": "Incorreta. Na Tetralogia de Fallot a estenose é infundibular/subvalvar associada a CIV, com cianose e silhueta radiológica em tamanco holandês, e não dilatação pós-estenótica do tronco com septo íntegro.",
      "C": "Incorreta. A estenose subaórtica produz sopro em foco aórtico, ausência de clique pulmonar que varia com a respiração e dilatação de aorta ascendente (e não de artéria pulmonar).",
      "D": "Incorreta. A HAP cursa com hiperfonese marcante de P2, ausência de dilatação isolada do tronco pulmonar com gradiente valvar e sopro regurgitativo tricúspide ou pulmonar, sem clique sistólico estenótico valvar."
    }
  },
  {
    "id": "ped-cardio-rev-26",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Miocardite Viral Aguda na Infância",
    "isRevisao": true,
    "enunciado": "Menino de 2 anos e 6 meses é admitido na emergência com quadro de tosse seca, prostração, vômitos e recusa alimentar há 3 dias. A mãe relata que a criança apresentou quadro de 'resfriado comum com febre baixa' há 10 dias, com melhora transitória, mas agora piorou subitamente com respiração curta e gemência. Ao exame físico: taquipneico (FR: 58 irpm), pálido, com pulso periférico fino e extremidades frias. A frequência cardíaca é de 170 bpm, desproporcional à temperatura corporal (36,8°C). Ausculta cardíaca revela bulhas hipofonéticas com presença de ritmo de galope em três tempos (terceira bulha - B3) e sopro sistólico regurgitativo suave em ápice. Ausculta pulmonar com estertores crepitantes discretos em bases. Fígado palpável a 4 cm do rebordo costal direito, doloroso. Radiografia de tórax evidencia cardiomegalia global importante com congestão venocapilar pulmonar bilateral. A dosagem sérica de Troponina I ultrassensível e de NT-proBNP encontra-se marcadamente elevada. Qual é o diagnóstico mais provável?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Miocardite viral aguda (frequente etiologia por enterovírus/coxsackievírus, parvovírus B19 ou adenovírus)."
      },
      {
        "id": "B",
        "texto": "Bronquiolite viral aguda clássica com hiperinsuflação pulmonar isolada."
      },
      {
        "id": "C",
        "texto": "Cardiopatia congênita acianótica do tipo comunicação interatrial pequena sem repercussão."
      },
      {
        "id": "D",
        "texto": "Choque anafilático secundário a alergia à proteína do leite de vaca."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Miocardite Viral Aguda é a causa mais frequente de insuficiência cardíaca de início agudo em crianças previamente hígidas. É frequentemente precedida por um pródromo viral inespecífico de vias aéreas superiores ou gastrointestinal (Enterovírus como Coxsackie B, Adenovírus, Parvovírus B19, HHV-6). Dias a semanas após, a invasão viral direta somada à resposta imunológica inflamatória miocárdica causa necrose e disfunção contrátil biventricular. Os sinais clínicos cardinais incluem taquicardia inexplicada desproporcional à temperatura, ritmo de galope (B3), bulhas abafadas, hepatomegalia congestiva e edema pulmonar. A radiografia revela cardiomegalia marcante com congestão e os biomarcadores cardíacos (Troponina e BNP/NT-proBNP) encontram-se significativamente elevados, confirmando agressão miocárdica aguda.",
    "comentariosAlternativas": {
      "A": "Correta. A história pós-viral com taquicardia desproporcional, galope ventricular, cardiomegalia, hepatomegalia e elevação de troponina e BNP compõe o quadro clássico de miocardite aguda.",
      "B": "Incorreta. A bronquiolite causa sibilância difusa, taquipneia por obstrução de pequenas vias aéreas e hiperinsuflação com diafragma retificado, sem cardiomegalia com elevação de troponina e galope.",
      "C": "Incorreta. Uma CIA pequena é assintomática e não causa choque cardiogênico agudo com troponina elevada e ritmo de galope após resfriado.",
      "D": "Incorreta. A anafilaxia cursa com manifestações alérgicas cutâneas agudas (urticária, angioedema), estridor laríngeo ou broncoespasmo imediato após alérgeno, e não cardiomegalia crônica pós-viral com disfunção de VE."
    }
  },
  {
    "id": "ped-cardio-rev-27",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Cardiomiopatia Hipertrófica do Filho de Mãe Diabética",
    "isRevisao": true,
    "enunciado": "Recém-nascido a termo, peso de 4.350g (GIG), filho de mãe com diabetes mellitus gestacional com controle glicêmico inadequado durante a gestação, apresenta taquipneia transitória nas primeiras horas de vida. O pediatra ausculta um sopro sistólico ejetivo áspero 2+/6+ em borda esternal esquerda média. O ecocardiograma revela hipertrofia miocárdica biventricular desproporcional acentuada, com espessamento predominante do septo interventricular e gradiente obstrutivo dinâmico na via de saída do ventrículo esquerdo (obstrução subaórtica dinâmica). A fração de ejeção é de 78%. Qual é o mecanismo etiopatogênico da cardiopatia e qual classe de medicamentos é FORMALMENTE CONTRAINDICADA?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Hiperinsulinismo fetal estimulado pela hiperglicemia materna crônica, com deposição excessiva de glicogênio e gordura no miocárdio e hipertrofia celular mediada pela insulina; inotrópicos positivos (como dobutamina e digitálicos) são formalmente contraindicados por aumentarem a contratilidade miocárdica e agravarem a obstrução mecânica da via de saída do VE."
      },
      {
        "id": "B",
        "texto": "Mutação no gene da fibrilina-1 com adelgaçamento de grandes vasos; betabloqueadores são contraindicados."
      },
      {
        "id": "C",
        "texto": "Deposição de cálcio intraventricular por hipoparatireoidismo congênito materno; cálcio venoso é contraindicado."
      },
      {
        "id": "D",
        "texto": "Persistência do padrão de circulação fetal de alta resistência vascular; vasodilatadores como sildenafila são contraindicados."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A cardiomiopatia hipertrófica transitória do recém-nascido de mãe diabética decorre do hiperinsulinismo fetal. A glicose materna atravessa a barreira placentária livremente por difusão facilitada, enquanto a insulina materna não a ultrapassa. A hiperglicemia crônica estimula o pâncreas fetal a secretar grandes quantidades de insulina, que atua como um potente hormônio anabólico e fator de crescimento celular, promovendo lipogênese, síntese proteica e deposição de glicogênio nos miócitos cardíacos, com hipertrofia biventricular e septal assimétrica marcante. Em casos com obstrução dinâmica da via de saída do VE, fármacos inotrópicos positivos (digitálicos, dobutamina) são FORMALMENTE CONTRAINDICADOS, pois o aumento da contratilidade estreita ainda mais a via de saída, exacerbando a obstrução e reduzindo o débito cardíaco. O manejo consiste em hidratação adequada, betabloqueadores (como propranolol) se houver obstrução sintomática grave e acompanhamento clínico, com regressão espontânea da hipertrofia nos primeiros 6 a 12 meses de vida conforme os níveis de insulina se normalizam.",
    "comentariosAlternativas": {
      "A": "Correta. O hiperinsulinismo fetal gera hipertrofia septal exuberante; inotrópicos positivos aumentam a força contrátil diminuindo o orifício da via de saída do VE, sendo contraindicados.",
      "B": "Incorreta. A mutação da fibrilina-1 (FBN1) é a causa da Síndrome de Marfan, uma doença genética do tecido conjuntivo com dissecção aórtica e ectopia lentis, e não a cardiopatia do filho de mãe diabética.",
      "C": "Incorreta. A fisiopatologia da hipertrofia neonatal do feto de mãe diabética é hormonal/metabólica mediada por hiperinsulinemia fetal e não tem relação com hipoparatireoidismo materno.",
      "D": "Incorreta. O distúrbio não é vasculopatia pulmonar pura e o problema reside na obstrução dinâmica intraventricular esquerda, e não na circulação pulmonar periférica."
    }
  },
  {
    "id": "ped-cardio-rev-28",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Síndrome do QT Longo Congênito",
    "isRevisao": true,
    "enunciado": "Menina de 11 anos de idade apresenta episódio súbito de síncope enquanto realizava natação na escola. Foi retirada da piscina inconsciente e recuperou a consciência espontaneamente após cerca de 1 minuto, sem confusão pós-ictal. Os pais relatam que o irmão mais velho faleceu de morte súbita inexplicada aos 13 anos durante uma partida de futebol. Ao exame clínico em repouso: exame cardiovascular e neurológico normais. O eletrocardiograma de repouso demonstra intervalo QT corrigido pela fórmula de Bazzet (QTc) de 510 ms (valor de referência normal: < 440 ms em crianças e < 460 ms no sexo feminino), com morfologia entalhada da onda T. O ecocardiograma é estruturalmente normal. Qual é o diagnóstico, a arritmia ventricular potencialmente fatal associada e o tratamento farmacológico inicial indicado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Síndrome do QT Longo congênito (provável tipo 1 ou 2); risco de Torsades de Pointes (taquicardia ventricular polimórfica); tratamento de primeira linha com betabloqueadores sem atividade simpatomimética intrínseca (como nadolol ou propranolol)."
      },
      {
        "id": "B",
        "texto": "Síndrome de Wolff-Parkinson-White com condução ortodrômica; risco de flutter atrial; tratamento com flecainida oral."
      },
      {
        "id": "C",
        "texto": "Síncope vasovagal neurocardiogênica benigna da adolescência; risco nulo de arritmias; tratamento com aumento da ingestão de sal e água isoladamente."
      },
      {
        "id": "D",
        "texto": "Cardiopatia congênita cianótica não diagnosticada; risco de bloqueio de ramo esquerdo; tratamento com marcapasso epicárdico."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Síndrome do QT Longo Congênito (SQTL) é uma canalopatia cardíaca genética causada por mutações em genes que codificam subunidades de canais iônicos cardíacos de potássio ou sódio (sendo o tipo 1, LQTS1 por mutação no KCNQ1, tipicamente deflagrado por esforço físico, especialmente natação). O prolongamento do potencial de ação miocárdico e da repolarização ventricular gera dispersão transmural da refratariedade e pós-despolarizações precoces, predispondo à ocorrência de Torsades de Pointes (taquicardia ventricular polimórfica helicoidal), que pode degenerar em fibrilação ventricular e morte súbita. O achado de QTc > 480-500 ms com história de síncope por esforço e morte súbita familiar preenche o escore de Schwartz para alta probabilidade de SQTL. O tratamento farmacológico de escolha são os betabloqueadores orais (especialmente o nadolol ou propranolol), que reduzem significativamente os eventos cardíacos arrítmicos. O cardioversor desfibrilador implantável (CDI) está indicado para sobreviventes de PCR ou síncope recorrente em vigência de betabloqueador.",
    "comentariosAlternativas": {
      "A": "Correta. O QTc > 500 ms associado a síncope induzida por natação e histórico familiar de morte súbita define Síndrome do QT Longo, sujeita a Torsades de Pointes e tratada com betabloqueador.",
      "B": "Incorreta. Na WPW o intervalo PR é curto e o QRS é empastado por onda delta; a alteração aqui é puramente do intervalo QT/onda T com PR normal.",
      "C": "Incorreta. Síncopes durante o esforço físico (natação) acompanhadas de QTc > 500 ms e histórico de morte súbita familiar nunca são vasovagais benignas, exigindo proteção imediata contra arritmia ventricular.",
      "D": "Incorreta. O ecocardiograma é absolutamente normal e não há cianose; trata-se de doença puramente elétrica (canalopatia) e não estrutural."
    }
  },
  {
    "id": "ped-cardio-rev-29",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Truncus Arteriosus e Síndrome de DiGeorge",
    "isRevisao": true,
    "enunciado": "Recém-nascido a termo com 5 dias de vida apresenta taquipneia, cianose leve a moderada e sudorese durante as mamadas. O exame físico evidencia pulsos periféricos amplos e saltones em todos os 4 membros, precórdio hiperdinâmico, estalido ejetivo precoce e sopro sistólico com componente diastólico curto em borda esternal esquerda. O ecocardiograma revela um vaso arterial calibroso único emergindo da base dos dois ventrículos, cavalgando sobre uma comunicação interventricular ampla, do qual se originam a aorta ascendente e ambas as artérias pulmonares antes dos vasos braquiocefálicos. No 7º dia de vida, a criança desenvolve abalos mioclônicos e convulsão, sendo diagnosticada hipocalcemia grave (cálcio ionizável: 0,65 mmol/L). A radiografia de tórax evidencia ausência da sombra tímica habitual (hipoplasia/aplasia de timo). Qual é a cardiopatia congênita descrita e a síndrome genética cromossômica associada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Truncus Arteriosus (Tronco Arterial Comum); Síndrome de microdeleção 22q11.2 (Síndrome de DiGeorge / Velocardiofacial)."
      },
      {
        "id": "B",
        "texto": "Tetralogia de Fallot; Trissomia do cromossomo 18 (Síndrome de Edwards)."
      },
      {
        "id": "C",
        "texto": "Transposição das grandes artérias; Monossomia do cromossomo X (Síndrome de Turner)."
      },
      {
        "id": "D",
        "texto": "Coarctação de aorta; Trissomia do cromossomo 13 (Síndrome de Patau)."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Truncus Arteriosus (Tronco Arterial Comum) resulta da falha embrionária de septação do cone e do tronco arterial em aorta e artéria pulmonar pelo septo conotruncal espiralado. Um vaso único cavalgando uma CIV ampla dá origem às artérias coronárias, artérias pulmonares e arco aórtico. A pressão diastólica sistêmica cai pelo desvio livre de sangue para o leito pulmonar de baixa resistência, explicando os pulsos amplos em martelo d'água. Entre 30% e 40% dos casos de Truncus Arteriosus (assim como a Tetralogia de Fallot e a interrupção do arco aórtico) estão intimamente associados à Síndrome de DiGeorge (síndrome da microdeleção 22q11.2). Esta decorre do defeito de desenvolvimento do 3º e 4º arcos faríngeos e bolsas branquiais, gerando anomalias conotruncais cardíacas, hipoplasia/aplasia tímica com imunodeficiência de células T e hipoplasia/aplasia das paratireoides com hipocalcemia neonatal grave e convulsões.",
    "comentariosAlternativas": {
      "A": "Correta. A emergência de vaso único sobre CIV associada a aplasia de timo e hipocalcemia neonatal fecha com precisão o diagnóstico de Truncus Arteriosus no contexto da Síndrome de DiGeorge (del 22q11.2).",
      "B": "Incorreta. Na Tetralogia de Fallot há dois grandes vasos distintos (aorta e pulmonar) com estenose pulmonar anatômica evidente, e a síndrome de Edwards cursa com micrognatia, sobreposição de dedos da mão e pés em mata-borrão.",
      "C": "Incorreta. Na TGA há dois vasos transpostos independentes saindo dos ventrículos invertidos; a Síndrome de Turner (45,X) associa-se caracteristicamente com coarctação de aorta e valva aórtica bicúspide.",
      "D": "Incorreta. A coarctação de aorta acomete o istmo aórtico e não forma tronco arterial único; a Síndrome de Patau (trissomia 13) cursa com holoprosencefalia, lábio leporino com fenda palatina e polidactilia."
    }
  },
  {
    "id": "ped-cardio-rev-30",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "subtema": "Hipertensão Arterial Pediátrica e Causas Secundárias",
    "isRevisao": true,
    "enunciado": "Criança de 5 anos de idade, previamente hígida, é levada ao pediatra para puericultura. Na consulta, a aferição da pressão arterial pelo método auscultatório com manguito de tamanho apropriado revela PA de 124x82 mmHg. Sabendo que, para a idade, sexo feminino e percentil de estatura 50, o percentil 90 da PA é 102x64 mmHg e o percentil 95 é 106x68 mmHg (e p95 + 12 mmHg = 118x80 mmHg), a PA foi confirmada em 3 consultas médicas distintas em níveis de 122x80 a 126x84 mmHg. Qual é a classificação dessa hipertensão arterial e qual grupo de causas etiológicas responde por mais de 80% a 90% dos casos de hipertensão arterial mantida nesta faixa etária?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Hipertensão Arterial Estágio 2; causas secundárias (predominantemente doença parenquimatosa renal e renovascular)."
      },
      {
        "id": "B",
        "texto": "Pressão Arterial Normal; variação constitucional do desenvolvimento puberal precoce."
      },
      {
        "id": "C",
        "texto": "Hipertensão Essencial Primária; distúrbio genético idiopático puro associado ao consumo excessivo de carboidratos."
      },
      {
        "id": "D",
        "texto": "Hipertensão do avental branco isolada; dispensa qualquer investigação complementar diagnóstica."
      }
    ],
    "correta": "A",
    "comentarioGeral": "De acordo com as diretrizes da Sociedade Brasileira de Pediatria e da American Academy of Pediatrics (AAP), a pressão arterial em crianças de 1 a 13 anos é classificada com base em tabelas de percentis por idade, sexo e percentil de estatura: 1) PA Normal: < percentil 90; 2) PA Elevada: ≥ percentil 90 até < percentil 95 (ou 120/< 80 mmHg); 3) Hipertensão Estágio 1: ≥ percentil 95 até < percentil 95 + 12 mmHg (ou 130-139/80-89 mmHg); 4) Hipertensão Estágio 2: ≥ percentil 95 + 12 mmHg (ou ≥ 140/90 mmHg). Como a PA da paciente (124x82 mmHg) ultrapassa o limiar de p95 + 12 mmHg (118x80 mmHg), classifica-se como Hipertensão Estágio 2. Em crianças com menos de 6 anos de idade, mais de 80% a 90% dos casos de hipertensão arterial decorrem de CAUSAS SECUNDÁRIAS, sendo as doenças renais parenquimatosas (como glomerulonefrites, refluxo vesicoureteral com cicatriz renal e rins policísticos) e renovasculares (estenose de artéria renal, displasia fibromuscular) as causas mais prevalentes, seguidas por causas cardíacas (coarctação de aorta) e endócrinas.",
    "comentariosAlternativas": {
      "A": "Correta. A PA está acima do p95 + 12 mmHg (Hipertensão Estágio 2), e em crianças pré-escolares (< 6 anos) a imensa maioria dos casos decorre de causas secundárias, principalmente renais e renovasculares.",
      "B": "Incorreta. Valores de 124x82 mmHg estão muito acima do percentil 95 para 5 anos, configurando hipertensão arterial grave confirmada em 3 ocasiões.",
      "C": "Incorreta. A hipertensão essencial (primária) torna-se comum apenas na adolescência em indivíduos obesos; em pré-escolares de 5 anos a hipertensão essencial é rara e deve ser diagnóstico de exclusão.",
      "D": "Incorreta. Valores em faixa de Estágio 2 confirmados em múltiplas ocasiões exigem investigação laboratorial e por imagem imediata de lesão de órgão-alvo e etiologia secundária."
    }
  }
];
