export const cardioRevPart1 = [
  {
    id: "ped-cardio-rev-01",
    especialidade: "Pediatria",
    tema: "CARDIOLOGIA PEDIATRICA",
    subtema: "Tetralogia de Fallot - Crise Hipoxêmica",
    isRevisao: true,
    enunciado: "Lactente de 7 meses, portador de Tetralogia de Fallot ainda sem correção cirúrgica, é admitido no pronto-socorro após episódio de choro vigoroso. A mãe relata que a criança 'ficou roxa como nunca antes' e respirando muito rápido. Ao exame físico: agitação psicomotora intensa, cianose labial e de extremidades acentuada (SatO2: 64%), taquipneia sem tiragens significativas e desaparecimento do sopro ejetivo sistólico áspero previamente auscultado em foco pulmonar. Qual é o mecanismo fisiopatológico primário responsável pelo quadro e a conduta farmacológica imediata indicada?",
    alternativas: [
      { id: "A", texto: "Espasmo do infundíbulo muscular subpulmonar com aumento agudo do shunt direita-esquerda pela CIV; administrar morfina e betabloqueador (esmolol ou propranolol)." },
      { id: "B", texto: "Fechamento abrupto do canal arterial pérvio; iniciar infusão contínua imediata de Prostaglandina E1 (alprostadil)." },
      { id: "C", texto: "Insuficiência cardíaca esquerda descompensada por sobrecarga volumétrica; administrar furosemida venosa e dobutamina." },
      { id: "D", texto: "Broncoespasmo agudo com aprisionamento aéreo grave; administrar nebulização com salbutamol e corticoide sistêmico." }
    ],
    correta: "A",
    comentarioGeral: "A crise hipoxêmica da Tetralogia de Fallot decorre de espasmo da musculatura infundibular subpulmonar ou queda da resistência vascular sistêmica (RVS), gerando aumento súbito do desvio de sangue desoxigenado do ventrículo direito para a aorta através da CIV (shunt D->E). Com a redução crítica do fluxo pulmonar, o sopro ejetivo pulmonar diminui ou desaparece. O tratamento visa acalmar a criança, aumentar a RVS (posição genupeitoral/cócoras) e aliviar o espasmo infundibular com sedação/analgesia (morfina 0,1-0,2 mg/kg) e betabloqueadores (como esmolol ou propranolol), além de oxigênio e expansão volêmica.",
    comentariosAlternativas: {
      A: "Correta. A hiperreatividade infundibular subpulmonar obstrui criticamente o trato de saída do VD, desviando o sangue venoso pela CIV à aorta, sendo a morfina e o betabloqueador os pilares farmacológicos.",
      B: "Incorreta. Aos 7 meses de vida, o canal arterial fisiológico já se encontra obliterado; a crise de Fallot típica é desencadeada por espasmo infundibular, choro, dor ou desidratação.",
      C: "Incorreta. Na Tetralogia de Fallot com hipofluxo pulmonar não ocorre congestão pulmonar ou falência de VE; inotrópicos como dobutamina são contraindicados porque aumentam a contratilidade e pioram o espasmo infundibular.",
      D: "Incorreta. A taquipneia é hiperpneia de origem central pelo estímulo hipóxico e acidose metabólica grave, e não quadro obstrutivo broncoespástico."
    }
  },
  {
    id: "ped-cardio-rev-02",
    especialidade: "Pediatria",
    tema: "CARDIOLOGIA PEDIATRICA",
    subtema: "Tetralogia de Fallot - Anatomia e Radiologia",
    isRevisao: true,
    enunciado: "Criança de 3 anos de idade, sem acompanhamento prévio regular, comparece à UBS com queixa de cansaço fácil aos esforços e hábito frequente de agachar-se durante as brincadeiras (posição de cócoras). Ao exame físico, apresenta baqueteamento digital (dedos em baqueta de tambor e unhas em vidro de relógio), cianose perioral aos esforços e sopro sistólico ejetivo 3+/6+ em borda esternal esquerda média/alta. A radiografia de tórax evidencia área cardíaca normal com ponta arredondada e levantada acima do diafragma, escavação do arco médio pulmonar e hipotrama vascular pulmonar. O diagnóstico anatômico e o achado radiológico descritos correspondem a:",
    alternativas: [
      { id: "A", texto: "Tetralogia de Fallot; aspecto radiológico em 'tamanco holandês' (cœur en sabot)." },
      { id: "B", texto: "Transposição das Grandes Artérias; aspecto radiológico em 'ovo deitado'." },
      { id: "C", texto: "Drenagem Anômala Total das Veias Pulmonares; sinal do 'boneco de neve' ou 'em oito'." },
      { id: "D", texto: "Coarctação de Aorta; sinal do '3' na aorta e sinal de Roesler nas costelas." }
    ],
    correta: "A",
    comentarioGeral: "A Tetralogia de Fallot é a cardiopatia congênita cianótica mais frequente após o primeiro ano de vida. Caracteriza-se por 4 anomalias: estenose subpulmonar/infundibular, defeito do septo interventricular (CIV), cavalgamento da aorta sobre o septo (< 50%) e hipertrofia ventricular direita secundária. Na radiografia de tórax, a hipertrofia do VD eleva o ápice cardíaco e a hipoplasia do tronco da artéria pulmonar escava o arco médio, gerando a clássica silhueta em tamanco holandês ('cœur en sabot') com hipofluxo pulmonar.",
    comentariosAlternativas: {
      A: "Correta. A descrição de ápice levantado pelo VD hipertrofiado e arco pulmonar escavado compõe a clássica imagem em tamanco holandês da Tetralogia de Fallot.",
      B: "Incorreta. Na TGA há pedículo vascular estreito e área cardíaca ovalada ('ovo deitado'), com hiperfluxo pulmonar e manifestação neonatal hiperaguda.",
      C: "Incorreta. O sinal do 'boneco de neve' ou '8' é característico da DATVP supracardíaca, decorrente da veia vertical esquerda dilatada e veia cava superior alargada.",
      D: "Incorreta. O sinal do 3 e erosões costais (Roesler) são típicos de Coarctação de Aorta em crianças maiores e adultos, uma cardiopatia acianótica com estenose do istmo aórtico."
    }
  },
  {
    id: "ped-cardio-rev-03",
    especialidade: "Pediatria",
    tema: "CARDIOLOGIA PEDIATRICA",
    subtema: "Comunicação Interventricular (CIV) - Fisiopatologia e Clínica",
    isRevisao: true,
    enunciado: "Lactente de 2 meses de vida, nascido a termo, previamente assintomático na maternidade, é levado à consulta pediátrica com queixa de interrupção frequente das mamadas por cansaço, sudorese excessiva em fronte durante a alimentação e ganho de peso insuficiente no último mês (Z-score de P/I caiu de 0 para -2,2). Ao exame: taquipneico (FR: 64 irpm), com tiragem subcostal leve, acianótico. Ausculta cardíaca revela ritmo regular em 3 tempos (B3), sopro holossistólico 3+/6+ rude em borda esternal esquerda baixa e sopro mesodiastólico suave em foco mitral. Fígado palpável a 3,5 cm do RCD. Qual fenômeno fisiopatológico explica o início dos sintomas especificamente nesta faixa etária?",
    alternativas: [
      { id: "A", texto: "Queda fisiológica progressiva da resistência vascular pulmonar (RVP), aumentando a magnitude do shunt esquerda-direita através da CIV e o hiperfluxo pulmonar." },
      { id: "B", texto: "Fechamento anatômico do forame oval, que até então desviava o excesso de pressão do ventrículo direito para o átrio esquerdo." },
      { id: "C", texto: "Disfunção sistólica primária do ventrículo esquerdo decorrente de isquemia subendocárdica por coronariopatia congênita anômala." },
      { id: "D", texto: "Elevação patológica da pressão arterial sistêmica secundária à maturação do sistema renina-angiotensina-aldosterona." }
    ],
    correta: "A",
    comentarioGeral: "No feto e no recém-nascido imediato, a resistência vascular pulmonar (RVP) é elevada devido à espessa camada muscular das arteríolas pulmonares. Por isso, nos primeiros dias de vida, a CIV perimembranosa não apresenta grande shunt E->D. Entre 4 e 8 semanas de vida ocorre o afinamento da camada média das arteríolas com queda fisiológica acentuada da RVP. Com isso, o gradiente pressórico sistêmico-pulmonar aumenta brutalmente, gerando enorme shunt esquerda-direita, hiperfluxo pulmonar e consequente insuficiência cardíaca congestiva hiperdinâmica com déficit de ganho ponderal.",
    comentariosAlternativas: {
      A: "Correta. A queda fisiológica da RVP entre 4 e 8 semanas desmascara o defeito interventricular amplo, permitindo hiperfluxo pulmonar maciço e congestão venocapilar com ICC.",
      B: "Incorreta. O forame oval não impede o shunt interventricular; o fator determinante da magnitude do shunt E->D na CIV é a relação entre a resistência vascular pulmonar e a sistêmica.",
      C: "Incorreta. Na CIV o miocárdio é intrinsecamente são; a falência cardíaca é decorrente de sobrecarga volumétrica pulmonar e de câmaras esquerdas, e não de isquemia coronariana.",
      D: "Incorreta. A ativação do SRAA é uma consequência compensatória da queda do débito sistêmico efetivo pela ICC, e não a causa primária do surgimento dos sintomas aos 2 meses."
    }
  },
  {
    id: "ped-cardio-rev-04",
    especialidade: "Pediatria",
    tema: "CARDIOLOGIA PEDIATRICA",
    subtema: "CIV - Síndrome de Eisenmenger",
    isRevisao: true,
    enunciado: "Adolescente de 14 anos, que nunca realizou cirurgia cardíaca prévia e tinha histórico de sopro cardíaco na infância sem acompanhamento, procura atendimento com queixa de fadiga progressiva, dispneia aos médios esforços e episódios de síncope ao subir escadas. Ao exame físico: cianose central (lábios e língua) e periférica, baqueteamento digital acentuado em mãos e pés, impulsão paraesternal esquerda vigorosa à palpação pré-cordial. À ausculta cardíaca: ausência de sopro holossistólico audível, presença de hiperfonese metálica marcante da segunda bulha cardíaca em foco pulmonar (P2 acentuado) e estalido de ejeção pulmonar. O ecocardiograma revela CIV ampla com fluxo bidirecional e predomínio de shunt direita-esquerda. Esse quadro clínico-hemodinâmico representa:",
    alternativas: [
      { id: "A", texto: "Síndrome de Eisenmenger, caracterizada por hipertensão arterial pulmonar fixa e irreversível por remodelamento plexogênico da vasculatura pulmonar." },
      { id: "B", texto: "Fechamento espontâneo fibrótico da CIV associado a estenose aórtica subvalvar congênita tardia." },
      { id: "C", texto: "Insuficiência tricúspide reumática aguda com regurgitação maciça e hipertensão venosa sistêmica isolada." },
      { id: "D", texto: "Cor triatriatum sinister com estenose da membrana intra-atrial esquerda e baixo débito cardíaco." }
    ],
    correta: "A",
    comentarioGeral: "A Síndrome de Eisenmenger é o estágio final da doença vascular pulmonar obstrutiva secundária a um defeito congênito com hiperfluxo sistêmico-pulmonar não corrigido (como CIV, PCA ou CIA amplos). O hiperfluxo crônico sob alta pressão causa hipertrofia da camada média, proliferação intimal e lesões plexiformes irreversíveis nas arteríolas pulmonares. Quando a RVP se iguala ou ultrapassa a RVS, o shunt inverte tornando-se direita-esquerda, surgindo cianose, eritrocitose e baqueteamento digital. O sopro da CIV desaparece pelo desaparecimento do gradiente de pressão entre os ventrículos, e B2 torna-se hiperfonética e metálica pelo fechamento pulmonar sob altíssima pressão.",
    comentariosAlternativas: {
      A: "Correta. A inversão do shunt interventricular provocada por arteriopatia pulmonar plexiforme irreversível, com desaparecimento do sopro e hiperfonese de P2, define a Síndrome de Eisenmenger.",
      B: "Incorreta. Não houve fechamento espontâneo; a lesão continua presente, porém sem sopro devido à equalização pressórica entre os ventrículos.",
      C: "Incorreta. A insuficiência tricúspide não causa shunt reverso nem cianose central com baqueteamento desse padrão sem cardiopatia congênita subjacente.",
      D: "Incorreta. Cor triatriatum sinister gera estenose pulmonar venosa pós-capilar (como estenose mitral), sem shunt direita-esquerda primário com desaparecimento de sopro de CIV."
    }
  },
  {
    id: "ped-cardio-rev-05",
    especialidade: "Pediatria",
    tema: "CARDIOLOGIA PEDIATRICA",
    subtema: "Persistência do Canal Arterial (PCA) no Prematuro",
    isRevisao: true,
    enunciado: "Recém-nascido prematuro de 27 semanas de idade gestacional, peso de nascimento 850g, no 4º dia de vida sob ventilação mecânica por doença da membrana hialina, começa a apresentar dependência crescente de FiO2, episódios de apneia descompensada, pulsos periféricos amplos e saltones (em 'martelo d'água'), precórdio hiperdinâmico e sopro sistólico contínuo audível em região infraclavicular esquerda e dorso. A radiografia de tórax evidencia cardiomegalia e congestão venocapilar pulmonar acentuada. O ecocardiograma à beira do leito confirma canal arterial amplo com fluxo transductal exclusivo esquerda-direita e repercussão hemodinâmica. Qual é a conduta farmacológica de primeira linha indicada?",
    alternativas: [
      { id: "A", texto: "Inibidores da ciclo-oxigenase (ibuprofeno intravenoso ou oral, ou indometacina), visando bloquear a síntese de prostaglandinas e promover a vasoconstrição ductal." },
      { id: "B", texto: "Infusão contínua de Prostaglandina E1 (alprostadil) em dose de manutenção para manter a perfusão sistêmica." },
      { id: "C", texto: "Administração imediata de citrato de cafeína em dose dobrada associada a furosemida em infusão contínua." },
      { id: "D", texto: "Bloqueador dos canais de cálcio (anlodipino) para reduzir a pós-carga do ventrículo esquerdo." }
    ],
    correta: "A",
    comentarioGeral: "A persistência do canal arterial hemodinamicamente significativo no prematuro de extremo baixo peso desvia sangue da aorta para o leito pulmonar de baixa resistência ('roubo ductal'), causando hiperfluxo pulmonar, edema pulmonar, piora dos parâmetros ventilatórios e hipoperfusão sistêmica de órgãos vitais (risco aumentado de enterocolite necrosante e hemorragia peri-intraventricular). O tônus ductal é mantido patente principalmente pelas prostaglandinas vasodilatadoras circulantes (PGE2 e PGI2). Assim, o tratamento de escolha para o fechamento farmacológico são os inibidores da síntese de prostaglandinas (AINEs, principalmente ibuprofeno intravenoso/oral ou indometacina; paracetamol IV também é alternativa validada).",
    comentariosAlternativas: {
      A: "Correta. Ibuprofeno e indometacina inibem a COX, reduzindo a concentração sérica de prostaglandinas e promovendo a contração e obliteração da musculatura lisa ductal.",
      B: "Incorreta. A Prostaglandina E1 (alprostadil) promove a ABERTURA do canal arterial; está indicada nas cardiopatias canal-dependentes, e seria desastrosa em um PCA hemodinamicamente significativo com hiperfluxo pulmonar.",
      C: "Incorreta. A cafeína estimula o centro respiratório nas apneias da prematuridade, mas não atua no fechamento ductal; furosemida estimula produção de prostaglandinas renais e pode impedir o fechamento ductal.",
      D: "Incorreta. Bloqueadores de canais de cálcio não têm papel no fechamento do canal arterial e são contraindicados pelo alto risco de choque cardiogênico e hipotensão profunda no prematuro."
    }
  },
  {
    id: "ped-cardio-rev-06",
    especialidade: "Pediatria",
    tema: "CARDIOLOGIA PEDIATRICA",
    subtema: "PCA no Lactente a Termo e Exame Físico",
    isRevisao: true,
    enunciado: "Lactente de 5 meses, nascida a termo, é avaliada em consulta de puericultura. Encontra-se assintomática, com crescimento e desenvolvimento adequados. Durante a ausculta cardíaca, o pediatra identifica um sopro rude e contínuo, que se estende por toda a sístole e diástole, com pico no final da sístole e início da diástole, mais audível no 1º e 2º espaços intercostais esquerdos na linha hemiclavicular (região infraclavicular esquerda), associado a frêmito palpável na mesma topografia. A pressão arterial revela PA de 100x40 mmHg (pressão de pulso alargada). Como é denominado semiologicamente esse sopro e qual a conduta definitiva recomendada?",
    alternativas: [
      { id: "A", texto: "Sopro em maquinaria (ou de Gibson); o fechamento percutâneo por cateterismo intervencionista com dispositivo/mola (coil ou plug) é o tratamento de escolha habitual." },
      { id: "B", texto: "Sopro de Still; trata-se de sopro inocente da infância que dispensa seguimento ou exames adicionais." },
      { id: "C", texto: "Sopro de Carey Coombs; indica cardite mitral ativa e exige corticoterapia e profilaxia secundária." },
      { id: "D", texto: "Ruflar de Graham Steell; indica hipertensão arterial pulmonar primária descompensada exigindo transplante cardíaco." }
    ],
    correta: "A",
    comentarioGeral: "O sopro contínuo em maquinaria (sopro de Gibson) é o achado auscultatório patognomônico da persistência do canal arterial (PCA). O gradiente pressórico contínuo entre a aorta e a artéria pulmonar durante todo o ciclo cardíaco (sístole e diástole) gera fluxo contínuo turbilhonar através do ducto pérvio. O escape diastólico aórtico para a artéria pulmonar reduz a pressão arterial diastólica, causando pressão de pulso aumentada (pressão divergente) e pulsos amplos. No lactente a termo com PCA persistente além do período neonatal, o tratamento padrão é o fechamento percutâneo por via hemodinâmica com molas ou oclusores específicos.",
    comentariosAlternativas: {
      A: "Correta. O sopro de Gibson em maquinaria é patognomônico de PCA, e o fechamento percutâneo por oclusor/prótese é o método de escolha com excelente eficácia e baixa morbidade.",
      B: "Incorreta. O sopro de Still é mesossistólico, de baixa intensidade (1 a 2+/6+), com timbre vibratório ou musical em borda esternal média/baixa, sem irradiação ou frêmito.",
      C: "Incorreta. O sopro de Carey Coombs é um ruflar mesodiastólico apical decorrente de valvite mitral aguda na Febre Reumática.",
      D: "Incorreta. O sopro de Graham Steell é um sopro protodiastólico aspirativo de regurgitação pulmonar de alta pressão, decorrente de dilatação do anel pulmonar por hipertensão pulmonar severa."
    }
  },
  {
    id: "ped-cardio-rev-07",
    especialidade: "Pediatria",
    tema: "CARDIOLOGIA PEDIATRICA",
    subtema: "Coarctação de Aorta Crítica Neonatal",
    isRevisao: true,
    enunciado: "Recém-nascido do sexo masculino, com 8 dias de vida, com alta da maternidade sem intercorrências e amamentado exclusivamente ao seio, é trazido à emergência em estado grave. A mãe relata que há 18 horas a criança ficou subitamente hipoativa, pálida, gemente e recusando o seio materno. Ao exame físico: choque grave, cianose mista, perfusão periférica lentificada (tempo de enchimento capilar de 5 segundos), extremidades inferiores frias. Pressão arterial em MSD: 88x50 mmHg; PA em membros inferiores indetectável. Pulsos braquiais e radiais são palpáveis, porém os pulsos femorais, poplíteos e pediosos são totalmente impalpáveis. Gasometria arterial revela acidose metabólica profunda com hiperlactatemia (pH 7,08, HCO3 9 mEq/L, lactato 8,5 mmol/L). Diante da principal hipótese diagnóstica, qual medicamento deve ser administrado imediatamente?",
    alternativas: [
      { id: "A", texto: "Alprostadil (Prostaglandina E1 venosa em infusão contínua)." },
      { id: "B", texto: "Bicarbonato de sódio em bólus repetidos até normalização do pH." },
      { id: "C", texto: "Dopamina em dose vasopressora associada a noradrenalina." },
      { id: "D", texto: "Furosemida em dose alta associada a espironolactona." }
    ],
    correta: "A",
    comentarioGeral: "Trata-se de uma Coarctação de Aorta (CoAo) crítica neonatal, uma cardiopatia congênita canal-dependente de fluxo sistêmico. Na vida fetal e nos primeiros dias de vida, o canal arterial pérvio permite que o sangue passe do tronco pulmonar ou aorta proximal para a aorta descendente, contornando a região justaductal estenosada da coarctação e mantendo a perfusão do hemicorpo inferior. Quando o canal arterial sofre fechamento espontâneo (habitualmente entre o 3º e 10º dia de vida), a pós-carga do VE aumenta criticamente e o fluxo sistêmico para a aorta descendente cessa quase por completo, culminando em colapso circulatório, anúria, pulsos femorais abolidos e choque cardiogênico com acidose láctica severa. A reabertura farmacológica imediata do canal arterial com Prostaglandina E1 (PGE1 - alprostadil) restabelece a perfusão distal e salva a vida do neonato.",
    comentariosAlternativas: {
      A: "Correta. O alprostadil reabre o canal arterial, permitindo que o débito cardíaco ultrapasse a obstrução aórtica severa e restaure a perfusão do hemicorpo inferior, revertendo a hipoperfusão e o choque.",
      B: "Incorreta. O bicarbonato de sódio trata temporariamente o número do pH mas não resolve a causa subjacente; sem desobstrução mecânica da circulação distal com PGE1, o paciente evoluirá para óbito.",
      C: "Incorreta. Aminas vasopressoras aumentam a resistência vascular periférica e a pós-carga já crítica do ventrículo esquerdo, piorando a isquemia e a falência miocárdica sem abrir o canal.",
      D: "Incorreta. Diuréticos agravam o choque cardiogênico hipovolêmico sistêmico distal e a insuficiência renal pré-renal já instalada."
    }
  },
  {
    id: "ped-cardio-rev-08",
    especialidade: "Pediatria",
    tema: "CARDIOLOGIA PEDIATRICA",
    subtema: "Coarctação de Aorta na Infância e Adolescência",
    isRevisao: true,
    enunciado: "Menino de 9 anos de idade é submetido a exame físico de rotina para liberação de prática esportiva escolar. Queixa-se apenas de cefaleia holocraniana ocasional e dor muscular em panturrilhas aos esforços (claudicação intermitente). Ao exame físico, a aferição da pressão arterial revela: MSD = 148x88 mmHg, MSE = 146x86 mmHg, MID = 94x60 mmHg e MIE = 92x58 mmHg (diferença de pressão sistólica superior a 50 mmHg entre membros superiores e inferiores). Pulsos femorais filiformes e atrasados em relação aos pulsos radiais (retardo pulso radial-femoral). À ausculta cardíaca, identifica-se sopro mesossistólico interescapular em dorso e clique de ejeção aórtico. A radiografia de tórax revela o sinal do '3' na silhueta aórtica e erosões da margem inferior do 3º ao 8º arcos costais posteriores bilaterais (sinal de Roesler). Qual é o diagnóstico e a anomalia cardíaca congênita mais frequentemente associada?",
    alternativas: [
      { id: "A", texto: "Coarctação de Aorta; valva aórtica bicúspide." },
      { id: "B", texto: "Estenose pulmonar supravalvar; comunicação interatrial." },
      { id: "C", texto: "Arterite de Takayasu; aneurisma de aorta abdominal." },
      { id: "D", texto: "Doença de Kawasaki crônica; aneurisma de artéria coronária direita." }
    ],
    correta: "A",
    comentarioGeral: "A Coarctação de Aorta na criança maior e adolescente manifesta-se tipicamente com hipertensão arterial em membros superiores e gradiente pressórico marcante entre MMSS e MMII (> 20 mmHg de diferença sistólica), acompanhado de pulsos femorais diminuídos e atrasados (retardo radiofemoral). O sinal de Roesler decorre da erosão óssea na borda inferior das costelas pela dilatação e tortuosidade crônica das artérias intercostais colaterais que desviam fluxo da artéria subclávia para a aorta descendente distal à coarctação. A valva aórtica bicúspide é a anomalia congênita associada mais comum, presente em mais de 50-80% dos pacientes com CoAo.",
    comentariosAlternativas: {
      A: "Correta. A apresentação com hipertensão em MMSS, hipotensão em MMII, claudicação, sinal de Roesler e sinal do 3 é clássica de Coarctação de Aorta, que se associa fortemente com valva aórtica bicúspide.",
      B: "Incorreta. A estenose pulmonar supravalvar não causa hipertensão de membros superiores nem gradiente pressórico radiofemoral; está associada à síndrome de Williams.",
      C: "Incorreta. Embora a arterite de Takayasu possa acometer grandes vasos, é uma vasculite inflamatória sistêmica rara que costuma cursar com assimetria entre os próprios membros superiores e elevação intensa de VHS/PCR.",
      D: "Incorreta. A doença de Kawasaki é uma vasculite necrotizante de artérias de médio calibre (especialmente coronárias), e não causa estenose focal do istmo aórtico congênita com sinal de Roesler."
    }
  },
  {
    id: "ped-cardio-rev-09",
    especialidade: "Pediatria",
    tema: "CARDIOLOGIA PEDIATRICA",
    subtema: "Transposição das Grandes Artérias (TGA)",
    isRevisao: true,
    enunciado: "Recém-nascido a termo, peso de 3.600g, filho de mãe com diabetes gestacional, apresenta cianose central intensa desde as primeiras horas de vida (SatO2: 60% em ar ambiente). Foi realizado teste de hiperóxia com oferta de oxigênio a 100% por halo durante 15 minutos, e a gasometria arterial revelou PaO2 de 35 mmHg (sem aumento apreciável). O recém-nascido está confortável, sem taquipneia significativa ou tiragens, e a ausculta cardíaca revela segunda bulha única e hiperfonética, sem sopros audíveis evidentes. A radiografia de tórax evidencia cardiomegalia leve a moderada com pedículo vascular estreito e silhueta cardíaca ovalada ('aspecto em ovo deitado'), acompanhada de hiperfluxo pulmonar. Qual é o diagnóstico mais provável e a cirurgia corretiva anatômica de escolha?",
    alternativas: [
      { id: "A", texto: "Transposição das Grandes Artérias (TGA); cirurgia de Jatene (troca arterial / switch arterial) nas primeiras 2 a 3 semanas de vida." },
      { id: "B", texto: "Tetralogia de Fallot com atresia pulmonar; anastomose sistêmico-pulmonar de Blalock-Taussig modificada." },
      { id: "C", texto: "Atresia tricúspide com estenose pulmonar; cirurgia estagiada com Glenn bidirecional aos 6 meses." },
      { id: "D", texto: "Anomalia total de drenagem venosa pulmonar obstrutiva; reimplante cirúrgico de emergência da veia vertical no átrio direito." }
    ],
    correta: "A",
    comentarioGeral: "A Transposição das Grandes Artérias (TGA simples com septo íntegro) é a cardiopatia congênita cianótica mais comum do período neonatal. A aorta origina-se do ventrículo direito e o tronco pulmonar origina-se do ventrículo esquerdo, criando duas circulações paralelas e independentes incompatíveis com a vida sem comunicação entre elas (forame oval e/ou canal arterial). Cursa com cianose neonatal grave refratária a O2 (teste de hiperóxia negativo com PaO2 < 100-150 mmHg), 'bebê azul confortável' (cianose desproporcional ao desconforto respiratório) e radiografia com silhueta em 'ovo deitado' com mediastino estreito. O tratamento definitivo de escolha é a cirurgia de Jatene (switch arterial com reimplante das artérias coronárias), que deve ser realizada idealmente nas primeiras 2 a 3 semanas de vida enquanto o VE mantém massa muscular apta a sustentar a circulação sistêmica.",
    comentariosAlternativas: {
      A: "Correta. A TGA gera duas circulações em paralelo com cianose refratária imediata e silhueta em ovo deitado; a correção anatômica preconizada é a cirurgia de Jatene no período neonatal precoce.",
      B: "Incorreta. A Tetralogia de Fallot cursa com hipofluxo pulmonar e imagem em tamanco holandês; a cirurgia de Jatene não se aplica a Fallot.",
      C: "Incorreta. A atresia tricúspide cursa com hipofluxo pulmonar e sobrecarga de VE (eixo do QRS desviado para a esquerda no ECG neonatal), e requer correção univentricular (Fontan).",
      D: "Incorreta. A DATVP obstrutiva cursa com desconforto respiratório neonatal extremo, congestão pulmonar grave em vidro fosco e coração de tamanho pequeno ou normal, e não com bebê confortável com coração em ovo deitado."
    }
  },
  {
    id: "ped-cardio-rev-10",
    especialidade: "Pediatria",
    tema: "CARDIOLOGIA PEDIATRICA",
    subtema: "Comunicação Interatrial (CIA)",
    isRevisao: true,
    enunciado: "Escolar de 6 anos de idade, assintomática e com desenvolvimento pôndero-estatural normal, é levada ao pediatra para avaliação de rotina. Ao exame físico pré-cordial, nota-se impulsão discreta de borda esternal esquerda. À ausculta cardíaca, ouve-se um sopro sistólico ejetivo 2+/6+ suave no 2º espaço intercostal esquerdo (foco pulmonar) e um desdobramento constante e amplo da segunda bulha cardíaca, que não varia com as fases da respiração (desdobramento fixo de B2). Não há sopros diastólicos nem cianose. Qual é a anomalia congênita subjacente e o mecanismo do sopro e do desdobramento fixo de B2?",
    alternativas: [
      { id: "A", texto: "Comunicação Interatrial (CIA tipo ostium secundum); o sopro resulta do hiperfluxo sistólico relativo através da valva pulmonar anatomicamente normal, e o desdobramento fixo de B2 decorre do atraso do componente P2 pelo prolongamento da ejeção do VD com volume equalizado nas fases respiratórias." },
      { id: "B", texto: "Comunicação Interventricular pequena; o sopro decorre da turbulência através do orifício septal ventricular e o desdobramento de B2 ocorre por estenose mitral concomitante." },
      { id: "C", texto: "Estenose pulmonar valvar grave; o sopro decorre da fusão das cúspides pulmonares e B2 apresenta fechamento aórtico paradoxal." },
      { id: "D", texto: "Tetralogia de Fallot acianótica; o sopro decorre da insuficiência da valva tricúspide com sobrecarga biventricular." }
    ],
    correta: "A",
    comentarioGeral: "A Comunicação Interatrial (CIA), sendo o tipo 'ostium secundum' o mais comum (cerca de 70-80%), é uma cardiopatia acianótica com shunt esquerda-direita no plano atrial. Como o gradiente pressórico entre os átrios é muito baixo, a passagem de sangue pelo septo interatrial não gera sopro audível. O sopro auscultado é sistólico ejetivo em foco pulmonar, produzido exclusivamente pelo hiperfluxo volumétrico transvalvar pulmonar relativo. O desdobramento fixo e amplo de B2 é o sinal semiológico patognomônico da CIA: o excesso de volume no átrio direito retarda o esvaziamento e fechamento da valva pulmonar (atraso de P2), e as variações respiratórias habituais do retorno venoso são amortecidas pela equalização volumétrica transatrial.",
    comentariosAlternativas: {
      A: "Correta. Na CIA, o defeito septal em si é silencioso; o sopro ejetivo pulmonar vem do hiperfluxo através do orifício pulmonar, e o atraso permanente de P2 gera o desdobramento amplo e fixo de B2.",
      B: "Incorreta. A CIV gera sopro holossistólico em borda esternal esquerda baixa produzido no próprio orifício da CIV, e não cursa com desdobramento fixo de B2.",
      C: "Incorreta. Na estenose pulmonar valvar grave há clique de ejeção que varia com a respiração, B2 inaudível ou com P2 muito fraco/tardio, e o sopro é áspero com frêmito.",
      D: "Incorreta. Fallot cursa com B2 única (componente pulmonar inaudível) e estenose infundibular evidente, não apresentando desdobramento fixo com sopro ejetivo suave de hiperfluxo puro."
    }
  },
  {
    id: "ped-cardio-rev-11",
    especialidade: "Pediatria",
    tema: "CARDIOLOGIA PEDIATRICA",
    subtema: "Defeito do Septo Atrioventricular (DSAV) e Síndrome de Down",
    isRevisao: true,
    enunciado: "Lactente de 3 meses, com diagnóstico genético de Trissomia do cromossomo 21 (Síndrome de Down), apresenta taquipneia crônica (FR: 60 irpm), tiragem subcostal e dificuldade para completar as mamadas, associada a estagnação da curva ponderal. Ao exame físico: precórdio hiperdinâmico, sopro holossistólico 3+/6+ irradiado para a axila e sopro sistólico rude em borda esternal esquerda, segunda bulha hiperfonética em foco pulmonar e hepatomegalia a 4 cm do rebordo costal direito. O eletrocardiograma demonstra desvio acentuado do eixo elétrico de QRS para a esquerda (entre -30° e -90°, hemibloqueio anterior esquerdo) e sobrecarga biventricular. Qual é a cardiopatia congênita mais fortemente associada à Síndrome de Down e qual a conduta terapêutica recomendada?",
    alternativas: [
      { id: "A", texto: "Defeito do Septo Atrioventricular Total (DSAV total / canal arterial AV comum); correção cirúrgica precoce (entre 3 e 6 meses de vida) para prevenir o desenvolvimento de doença vascular pulmonar obstrutiva irreversível." },
      { id: "B", texto: "Transposição das Grandes Artérias; acompanhamento clínico expectante até os 2 anos de idade para fechamento espontâneo dos septos." },
      { id: "C", texto: "Coarctação de Aorta pré-ductal; dilatação com balão por via percutânea aos 5 anos de idade." },
      { id: "D", texto: "Tetralogia de Fallot sem CIV; transplante cardíaco de urgência antes dos 30 dias de vida." }
    ],
    correta: "A",
    comentarioGeral: "O Defeito do Septo Atrioventricular (DSAV), na sua forma completa ou parcial, é a cardiopatia congênita mais prevalente na Síndrome de Down (presente em cerca de 40-50% dos portadores com cardiopatia). Caracteriza-se por CIA tipo ostium primum, CIV de via de entrada e valva atrioventricular única comum com regurgitação valvar associada. Cursa com shunt esquerda-direita volumoso em ambos os níveis atrioventriculares e ICC precoce. Pacientes com trissomia 21 têm hiperreatividade e tendência acelerada a desenvolver hipertensão pulmonar fixa e plexogênica (Eisenmenger precoce). Por isso, a correção cirúrgica completa (fechamento dos defeitos septais e divisão da valva em dois aparelhos valvares competentes) deve ser realizada precocemente, idealmente entre 3 e 6 meses de vida.",
    comentariosAlternativas: {
      A: "Correta. O DSAV total é a cardiopatia clássica da Trissomia 21, caracterizada no ECG por desvio do eixo para o quadrante superior esquerdo; a correção precoce previne a hipertensão pulmonar irreversível.",
      B: "Incorreta. A TGA não é a lesão típica da trissomia 21 e nunca fecha espontaneamente; a conduta expectante levaria à morte.",
      C: "Incorreta. A Coarctação de Aorta é a cardiopatia prototípica da Síndrome de Turner (45,X), e não da Síndrome de Down.",
      D: "Incorreta. A Tetralogia de Fallot possui obrigatoriamente CIV por definição anatômica ('sem CIV' não existe), e não tem indicação primária de transplante cardíaco."
    }
  },
  {
    id: "ped-cardio-rev-12",
    especialidade: "Pediatria",
    tema: "CARDIOLOGIA PEDIATRICA",
    subtema: "Teste do Coraçãozinho (Oximetria de Pulso)",
    isRevisao: true,
    enunciado: "Recém-nascido a termo, com 30 horas de vida, aparentemente saudável e em alojamento conjunto, é submetido à triagem neonatal por oximetria de pulso (Teste do Coraçãozinho). A monitorização foi realizada conforme o protocolo do Ministério da Saúde e da Sociedade Brasileira de Pediatria. O primeiro teste aferiu SatO2 em membro superior direito (MSD) de 96% e em membro inferior direito (MID) de 91% (diferença de 5%). Qual é a conduta correta a ser adotada de imediato?",
    alternativas: [
      { id: "A", texto: "Considerar o teste duvidoso/suspeito, manter o recém-nascido em observação e repetir a aferição no MSD e no membro inferior em 1 hora." },
      { id: "B", texto: "Liberar o recém-nascido para alta hospitalar com encaminhamento para consulta ambulatorial em 30 dias, pois a SatO2 no MSD foi superior a 95%." },
      { id: "C", texto: "Iniciar imediatamente infusão contínua de adrenalina intravenosa e intubação orotraqueal em sala de parto." },
      { id: "D", texto: "Realizar cateterismo cardíaco intervencionista de urgência imediatamente, sem necessidade de ecocardiograma prévio." }
    ],
    correta: "A",
    comentarioGeral: "O Teste do Coraçãozinho (triagem de cardiopatias congênitas críticas) deve ser realizado em todo recém-nascido a termo ou prematuro tardio assintomático, entre 24 e 48 horas de vida, antes da alta da maternidade. A oximetria de pulso é aferida no membro superior direito (medida pré-ductal) e em um dos membros inferiores (medida pós-ductal). O resultado é NORMAL se SatO2 ≥ 95% em ambos os locais E a diferença entre eles for ≤ 3%. Se a SatO2 for < 95% em qualquer sítio OU a diferença for ≥ 3%, o teste é considerado ALTERADO/SUSPEITO: a conduta obrigatória é repetir o teste em 1 hora. Se a alteração persistir na segunda aferição, o teste é considerado POSITIVO, exigindo ecocardiograma em até 24 horas antes da alta hospitalar.",
    comentariosAlternativas: {
      A: "Correta. Diferença de SatO2 ≥ 3% entre MSD e MI requer obrigatoriamente a repetição do exame em 1 hora; persistindo alterado, indica-se ecocardiograma.",
      B: "Incorreta. A presença de diferença de 5% entre o MSD e o membro inferior é sinal de fluxo ductal anômalo (ex: coarctação de aorta ou interrupção do arco aórtico), impedindo a alta da maternidade.",
      C: "Incorreta. A criança está estável em alojamento conjunto; intubação e adrenalina são medidas de ressuscitação em parada ou colapso, totalmente desnecessárias e danosas aqui.",
      D: "Incorreta. O ecocardiograma transtorácico é o método diagnóstico não invasivo de escolha antes de qualquer consideração de intervenção hemodinâmica invasiva."
    }
  },
  {
    id: "ped-cardio-rev-13",
    especialidade: "Pediatria",
    tema: "CARDIOLOGIA PEDIATRICA",
    subtema: "Febre Reumática Aguda - Critérios de Jones",
    isRevisao: true,
    enunciado: "Menino de 10 anos é trazido ao pronto-atendimento com dor e inchaço no joelho direito há 3 dias, que melhorou com o repouso, mas que hoje 'pulou' para o tornozelo esquerdo, apresentando calor, rubor e grande limitação funcional. A mãe relata quadro de amigdalite com febre alta tratada há 3 semanas com anti-inflamatório caseiro por 2 dias. Ao exame físico: artrite evidente em tornozelo esquerdo. Ausculta cardíaca revela FC de 110 bpm e sopro holossistólico 3+/6+ regurgitativo em ápice, com irradiação para a axila esquerda (sopro de insuficiência mitral). Exames laboratoriais: VHS: 85 mm/1ª hora, PCR: 48 mg/L e título de Antiestreptolisina O (ASLO): 800 UI/mL (valor de referência até 200 UI/mL). Com base nos critérios de Jones modificados (2015) para populações de risco moderado a alto, qual é a classificação correta desse episódio?",
    alternativas: [
      { id: "A", texto: "Primeiro surto de Febre Reumática Aguda confirmado, preenchendo 2 manifestações maiores (poliartrite migratória e cardite clínica), além de comprovação de infecção estreptocócica prévia (ASLO elevado)." },
      { id: "B", texto: "Artrite idiopática juvenil na forma oligoarticular, não preenchendo critérios para febre reumática devido à ausência de coreia de Sydenham." },
      { id: "C", texto: "Artrite séptica bacteriana associada a endocardite infecciosa estafilocócica subaguda por contiguidade." },
      { id: "D", texto: "Doença de Lyme com artrite de grandes articulações e bloqueio atrioventricular de primeiro grau isolado." }
    ],
    correta: "A",
    comentarioGeral: "Pelos critérios de Jones revisados pela American Heart Association (2015), o diagnóstico do primeiro surto de Febre Reumática requer evidência de infecção prévia por Streptococcus pyogenes do grupo A (ASLO elevado ou cultura de orofaringe positiva) associada a: 2 critérios maiores OU 1 critério maior + 2 menores. Os critérios maiores incluem: Cardite (clínica ou subclínica ao ecocardiograma), Artrite (em populações de risco moderado/alto como o Brasil, aceita-se poliartrite, monoartrite ou poliartralgia), Coreia de Sydenham, Nódulos subcutâneos e Eritema marginado. O paciente apresenta 2 critérios maiores (artrite migratória de grandes articulações e cardite clínica com sopro de insuficiência mitral) com ASLO francamente positivo, confirmando febre reumática aguda.",
    comentariosAlternativas: {
      A: "Correta. Há comprovação de infecção estreptocócica recente (ASLO alto após faringoamigdalite) somada a dois critérios maiores clássicos: poliartrite migratória e cardite com insuficiência mitral.",
      B: "Incorreta. A AIJ oligoarticular cursa com artrite crônica e persistente (duração > 6 semanas), sem caráter migratório de resolução rápida, e não se associa a cardite valvar mitral nem ASLO positivo.",
      C: "Incorreta. A artrite migratória que acomete sequencialmente diferentes grandes articulações com rápida resposta a salicilatos/AINEs é típica de febre reumática, diferindo da monoartrite purulenta fixa da artrite séptica.",
      D: "Incorreta. A doença de Lyme é transmitida por carrapatos (Borrelia burgdorferi), é rara no Brasil e não se manifesta após faringite estreptocócica documentada com ASLO elevado."
    }
  },
  {
    id: "ped-cardio-rev-14",
    especialidade: "Pediatria",
    tema: "CARDIOLOGIA PEDIATRICA",
    subtema: "Febre Reumática - Manejo da Cardite e Profilaxia Secundária",
    isRevisao: true,
    enunciado: "Após a confirmação diagnóstica de febre reumática com cardite moderada (insuficiência mitral com regurgitação volumosa ao ecocardiograma e discreta cardiomegalia, sem choque), o médico assistente planeja o esquema terapêutico da fase aguda e a profilaxia secundária a longo prazo. Quais são, respectivamente, a droga de escolha para o controle anti-inflamatório da cardite na fase aguda e o regime preconizado de profilaxia secundária para prevenção de novos surtos?",
    alternativas: [
      { id: "A", texto: "Prednisona oral (1 a 2 mg/kg/dia por 2 a 4 semanas, com desmame gradual subsequente); Penicilina G Benzatina intramuscular a cada 21 dias até os 25 anos de idade ou até 10 anos após o último surto (o que for mais longo)." },
      { id: "B", texto: "Ácido acetilsalicílico em dose antiagregante isolada; Penicilina oral diariamente durante 6 meses." },
      { id: "C", texto: "Indometacina venosa contínua por 48 horas; Amoxicilina oral dose única antes de procedimentos dentários apenas." },
      { id: "D", texto: "Imunoglobulina humana intravenosa em dose única de 2 g/kg; Azitromicina semanal por 1 ano." }
    ],
    correta: "A",
    comentarioGeral: "Na fase aguda da febre reumática, a presença de cardite moderada a grave exige corticoterapia sistêmica (Prednisona 1 a 2 mg/kg/dia, dose máxima de 60-80 mg/dia, por 2 a 4 semanas, seguida de desmame gradual nas semanas seguintes com transição/sobreposição com AAS para prevenir efeito rebote). O AAS em altas doses (80-100 mg/kg/dia) é reservado para artrite isolada ou cardite muito leve. Para a profilaxia secundária (prevenção de novas infecções estreptocócicas que desencadeiam novos surtos e agravam as lesões valvares), a droga de escolha é a Penicilina G Benzatina a cada 21 dias (600.000 UI para peso ≤ 27 kg e 1.200.000 UI para peso > 27 kg). Em pacientes com cardite e sequela valvar residual leve, a profilaxia deve ser mantida até os 25 anos de idade ou 10 anos após o último surto (o que for mais longo); se lesão residual moderada/severa ou cirurgia valvar, até os 40 anos ou por toda a vida.",
    comentariosAlternativas: {
      A: "Correta. A corticoterapia é a terapia padrão para cardite reumática moderada/grave, e a Penicilina Benzatina a cada 21 dias até 25 anos (ou 10 anos pós-surto) é a profilaxia secundária formal com lesão valvar resolvida/leve.",
      B: "Incorreta. AAS em dose antiagregante é ineficaz para cardite ativa; profilaxia por apenas 6 meses deixaria a criança desprotegida na fase de maior risco de recorrência.",
      C: "Incorreta. AINEs não são a droga de escolha para cardite moderada com dilatação de câmaras; a amoxicilina apenas antes de procedimentos odontológicos é profilaxia de endocardite infecciosa, e não profilaxia secundária de febre reumática.",
      D: "Incorreta. A IVIG 2 g/kg é o tratamento da Doença de Kawasaki, não tendo indicação na febre reumática aguda."
    }
  },
  {
    id: "ped-cardio-rev-15",
    especialidade: "Pediatria",
    tema: "CARDIOLOGIA PEDIATRICA",
    subtema: "Doença de Kawasaki - Critérios Clínicos Clássicos",
    isRevisao: true,
    enunciado: "Criança de 2 anos e 4 meses é trazida ao pronto-atendimento com febre diária alta (39°C a 40°C) há 6 dias consecutivos, irritabilidade acentuada e sem resposta a antibiótico oral prescrito há 48 horas. Ao exame físico minucioso, encontram-se: injeção conjuntival bulbar bilateral não exsudativa, lábios eritematosos e fissurados com língua 'em framboesa', linfonodomegalia cervical anterior direita de 2,0 cm de diâmetro (unilateral, dolorosa, não supurativa), exantema maculopapular polimorfo em tronco e edema endurecido com eritema marcante em palmas das mãos e plantas dos pés. Não há conjuntivite purulenta nem vesículas. Com base nas diretrizes da American Heart Association, qual é o diagnóstico?",
    alternativas: [
      { id: "A", texto: "Doença de Kawasaki clássica (completa), com febre persistente por ≥ 5 dias acompanhada de 5 critérios clínicos principais." },
      { id: "B", texto: "Escarlatina estreptocócica sem indicação de internação." },
      { id: "C", texto: "Mononucleose infecciosa por vírus Epstein-Barr com hepatite aguda." },
      { id: "D", texto: "Eritema infeccioso por Parvovírus B19 em fase de exantema rendilhado." }
    ],
    correta: "A",
    comentarioGeral: "A Doença de Kawasaki é uma vasculite sistêmica aguda de artérias de médio calibre, acometendo principalmente menores de 5 anos de idade. O diagnóstico da forma clássica/completa exige febre alta por pelo menos 5 dias associada a pelo menos 4 dos 5 critérios clínicos principais: 1) Injeção conjuntival bilateral não purulenta; 2) Alterações orofaríngeas (eritema labial, fissuras, língua em framboesa, hiperemia de faringe); 3) Linfadenopatia cervical aguda não purulenta, habitualmente unilateral e com diâmetro > 1,5 cm; 4) Exantema polimorfo (não vesicular); 5) Alterações de extremidades (eritema e edema endurecido de mãos e pés na fase aguda; descamação periungueal na fase subaguda). O paciente preenche febre há 6 dias e todos os 5 critérios principais.",
    comentariosAlternativas: {
      A: "Correta. Febre persistente ≥ 5 dias somada a injeção conjuntival sem exsudato, alterações orais, adenomegalia unilateral > 1,5 cm, exantema e edema de mãos/pés fecha o diagnóstico de Kawasaki completo.",
      B: "Incorreta. A escarlatina não cursa com injeção conjuntival não exsudativa, edema endurecido palmoplantar nem irritabilidade com febre refratária típica de Kawasaki, além de responder prontamente à penicilina.",
      C: "Incorreta. A mononucleose cursa tipicamente com faringite exsudativa pseudomembranosa, adenopatia cervical bilateral generalizada e esplenomegalia, sem as alterações orais e periféricas do Kawasaki.",
      D: "Incorreta. O eritema infeccioso (Parvovírus B19) cursa com fácies de 'bofetada' seguido de exantema rendilhado em extremidades, geralmente em criança em bom estado geral e afebril no momento do exantema."
    }
  }
];
