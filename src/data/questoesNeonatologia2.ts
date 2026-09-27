export interface RawNeonatologia2Question {
  id: string;
  grandeArea: 'Pediatria';
  especialidade: 'Pediatria';
  tema: 'Neonatologia';
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

export const QUESTOES_NEONATOLOGIA_2: RawNeonatologia2Question[] = [
  {
    id: 'ped-neo2-001',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Sífilis Congênita Precoce: Manifestações Clínicas e Triagem Neonatal',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo (38 semanas), pequeno para a idade gestacional (peso de nascimento: 2.150 g), nasce de parto vaginal sem intercorrências imediatas. No alojamento conjunto, com 18 horas de vida, o neonato passa a apresentar coriza nasal serosanguinolenta abundante que dificulta a sucção ao seio materno, além de lesões bolhosas de conteúdo citrino e base eritematosa confluentes nas palmas das mãos e plantas dos pés (pênfigo sifilítico palmoplantar). Ao exame físico, observa-se hepatoesplenomegalia moderada e palidez cutâneo-mucosa discreta. A mãe realizou apenas 2 consultas de pré-natal e não apresentou cartão de gestante na admissão. Considerando o diagnóstico sindrômico e etiológico mais provável, qual o agente etiológico, o período de classificação dessa forma clínica e a conduta imediata preconizada pelo Ministério da Saúde?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Treponema pallidum; trata-se de Sífilis Congênita Precoce (< 2 anos de vida); a conduta inclui isolamento de contato nas primeiras 24 horas de tratamento efetivo, coleta imediata de VDRL sérico periférico do RN (não de cordão), punção lombar para líquor (VDRL, celularidade e bioquímica), hemograma completo e radiografia de ossos longos, com início de Penicilina Cristalina ou Procaína parenteral.',
      },
      {
        id: 'B',
        texto:
          'Toxoplasma gondii; trata-se de Toxoplasmose congênita aguda; a conduta é iniciar imediatamente Sulfadiazina + Pirimetamina + Ácido Folínico associado à corticoterapia oral para prevenção de coriorretinite.',
      },
      {
        id: 'C',
        texto:
          'Treponema pallidum; trata-se de Sífilis Congênita Tardia; a conduta imediata consiste em alta hospitalar com prescrição de Penicilina Benzatina em dose única ambulatorial no 7º dia de vida.',
      },
      {
        id: 'D',
        texto:
          'Citomegalovírus; trata-se de citomegalovirose congênita sintomática grave; a conduta prioritária é iniciar Ganciclovir intravenoso e suspender o aleitamento materno de forma definitiva.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A apresentação clínica descrita — restrição de crescimento intrauterino, rinite serossanguinolenta precoce e lesões vesicobolhosas palmoplantares (pênfigo palmoplantar ou sifilítico), associada à hepatoesplenomegalia — é clássica e patognomônica da Sífilis Congênita Precoce.\n\nAspectos fundamentais segundo as Diretrizes do Ministério da Saúde (MS/SVS):\n1. Classificação temporal: Sífilis Congênita Precoce manifesta-se nos primeiros 2 anos de vida (geralmente nos primeiros meses ou logo ao nascimento); a Sífilis Congênita Tardia manifesta-se após os 2 anos de idade (estigmas cicatriciais como fronte olímpica, nariz em sela, tíbia em lâmina de sabre, tríade de Hutchinson);\n2. Altamente infectante: o exsudato das lesões bolhosas e da rinite contém grande quantidade de espiroquetas viáveis; exige precauções de contato até 24 horas após o início da antibioticoterapia eficaz com penicilina;\n3. Investigação laboratorial completa mandatória: VDRL sérico periférico (amostra de sangue venoso do próprio RN, NUNCA sangue de cordão umbilical devido ao risco de contaminação com sangue materno e falso-positivo/falso-negativo), punção lombar para estudo liquórico (VDRL, citologia e proteínas), hemograma completo e radiografia de ossos longos;\n4. Tratamento: Penicilina Cristalina IV (50.000 UI/kg/dose 12/12h nos primeiros 7 dias e 8/8h após) por 10 dias, ou Penicilina Procaína IM por 10 dias caso a neurosífilis seja formalmente descartada com líquor normal.',
    comentariosAlternativas: {
      A: 'Correta. Rinite serossanguinolenta e pênfigo palmoplantar são manifestações patognomônicas da sífilis congênita precoce (< 2 anos). Exige VDRL periférico, líquor, raio-X de ossos longos e penicilina parenteral por 10 dias.',
      B: 'Incorreta. O pênfigo palmoplantar e a rinite serossanguinolenta não são achados de toxoplasmose congênita (esta cursa classicamente com tétrade de Sabin: coriorretinite, calcificações difusas, hidrocefalia e retardo).',
      C: 'Incorreta. Sífilis congênita tardia ocorre após 2 anos de idade. Além disso, RN sintomático jamais deve receber Penicilina Benzatina em dose única ambulatorial.',
      D: 'Incorreta. Trata-se de infecção por Treponema pallidum, e o tratamento padrão-ouro indiscutível é a penicilina parenteral.',
    },
  },
  {
    id: 'ped-neo2-002',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Critérios Diagnósticos de Sífilis Congênita: Títulos de VDRL Materno vs Neonatal',
    isRevisao: false,
    enunciado:
      'Uma puérpera de 22 anos, que não realizou pré-natal, dá à luz por parto vaginal um recém-nascido a termo, assintomático, com peso de 3.200 g e Apgar 9/10. O teste rápido treponêmico materno colhido no momento do parto foi reagente e o VDRL materno resultou com titulação de 1:4. Concomitantemente, foi coletado sangue venoso periférico do recém-nascido para realização de teste não treponêmico (VDRL sérico neonatal). De acordo com as diretrizes do Ministério da Saúde do Brasil, qual dos seguintes resultados do VDRL sérico do recém-nascido confirma, por si só (critério sorológico laboratorial estrito), a definição de caso de Sífilis Congênita, exigindo investigação completa e tratamento parenteral por 10 dias?',
    alternativas: [
      {
        id: 'A',
        texto: 'VDRL sérico periférico do RN igual a 1:4 (igual ao materno).',
      },
      {
        id: 'B',
        texto: 'VDRL sérico periférico do RN igual a 1:8 (uma diluição acima do materno).',
      },
      {
        id: 'C',
        texto:
          'VDRL sérico periférico do RN igual ou superior a 1:16 (pelo menos duas diluições acima do título de VDRL materno no momento do parto).',
      },
      {
        id: 'D',
        texto: 'VDRL sérico periférico do RN negativo com teste treponêmico IgG reagente.',
      },
    ],
    respostaCorreta: 'C',
    comentario:
      'Segundo o Manual Técnico de Diagnóstico e Manejo da Sífilis Congênita do Ministério da Saúde do Brasil, um dos critérios laboratoriais determinantes para definição de caso de sífilis congênita em recém-nascido de mãe com sífilis é a presença de teste não treponêmico (VDRL) em amostra de sangue periférico do RN com titulação MAIOR OU IGUAL A DUAS DILUIÇÕES em relação ao título materno colhido no parto.\n\nComo calcular as diluições:\n- Título materno: 1:4;\n- 1 diluição acima: 1:8 (multiplicação por 2);\n- 2 diluições acima: 1:16 (multiplicação por 4).\n\nPortanto, um VDRL neonatal de 1:16, 1:32 ou superior preenche o critério de titulação pelo menos 4 vezes maior (duas diluições acima) do que o título da mãe, comprovando a produção ativa endógena de anticorpos pelo feto/neonato em resposta à espiroquetemia, e não mera transferência passiva de anticorpos maternos IgG através da placenta.',
    comentariosAlternativas: {
      A: 'Incorreta. Título de 1:4 no RN pode representar apenas transferência placentária passiva de IgG materna se a mãe foi tratada adequadamente (embora nesta mãe não tratada a investigação seja indicada pela ausência de pré-natal, o critério laboratorial de 2 diluições requer >= 1:16).',
      B: 'Incorreta. 1:8 é apenas uma diluição de diferença (2x o título materno). O critério do MS exige diferença de pelo menos 2 diluições (>= 4x o título materno).',
      C: 'Correta. O critério formal estabelece título neonatal maior ou igual a duas diluições acima do materno (mãe 1:4 -> RN >= 1:16).',
      D: 'Incorreta. Anticorpos IgG treponêmicos atravessam a placenta livremente e permanecem positivos por até 18 meses, não definindo caso ativo de forma isolada.',
    },
  },
  {
    id: 'ped-neo2-003',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Adequabilidade do Tratamento Materno da Sífilis durante o Pré-Natal',
    isRevisao: false,
    enunciado:
      'Primigesta de 19 anos compareceu a 7 consultas de pré-natal em Unidade Básica de Saúde. Na 28ª semana de gestação, apresentou VDRL de 1:16. Foi prescrito e administrado o esquema com Penicilina G Benzatina na dose total de 7.200.000 UI (3 doses semanais de 2.400.000 UI por via intramuscular), tendo a última dose sido aplicada com 31 semanas de gestação. O parceiro sexual foi convocado, mas recusou o tratamento e não compareceu. O parto vaginal ocorreu a termo com 39 semanas (8 semanas após o término do tratamento materno). Ao nascimento, o concepto encontra-se saudável, assintomático, com exame físico normal e VDRL periférico não reagente. Segundo os critérios atuais de adequabilidade do tratamento materno do Ministério da Saúde do Brasil, como deve ser considerada essa gestante e qual a conduta para o recém-nascido?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Tratamento materno considerado ADEQUADO; o recém-nascido é assintomático com VDRL não reagente, dispensando punção lombar e raio-X de ossos longos, sendo indicada apenas a realização de seguimento ambulatorial rigoroso com VDRL sérico periódico.',
      },
      {
        id: 'B',
        texto:
          'Tratamento materno considerado INADEQUADO exclusivamente pela ausência de tratamento comprovado do parceiro sexual; o RN deve ser considerado com sífilis congênita e internado para 10 dias de Penicilina Cristalina intravenosa.',
      },
      {
        id: 'C',
        texto:
          'Tratamento materno considerado INADEQUADO; o RN deve receber alta imediata sem necessidade de seguimento por ter VDRL não reagente.',
      },
      {
        id: 'D',
        texto:
          'Tratamento materno ADEQUADO; porém todo RN filho de mãe com VDRL positivo no pré-natal deve obrigatoriamente realizar punção lombar e internação hospitalar por 14 dias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Desde a Nota Informativa nº 2-SEI/2017 e reafirmado nos manuais vigentes de 2021/2024 do Ministério da Saúde do Brasil, O TRATAMENTO DO PARCEIRO SEXUAL DEIXOU DE SER CRITÉRIO PARA DEFINIR INADEQUABILIDADE DO TRATAMENTO MATERNO para fins de definição de caso de sífilis congênita no RN.\n\nCritérios de Tratamento Materno Adequado:\n1. Esquema terapêutico com Penicilina G Benzatina apropriado para o estágio clínico da sífilis (primária/secundária/latente recente: 2.400.000 UI; latente tardia/indeterminada: 7.200.000 UI);\n2. Início do tratamento com intervalo mínimo de conclusão de pelo menos 30 dias antes do parto;\n3. Documentação de queda ou estabilidade em títulos baixos do teste não treponêmico (ausência de reinfecção/falha terapêutica);\n4. Intervalos corretos entre as doses (máximo de 7 a 9 dias entre cada aplicação semanal).\n\nNeste caso, a mãe realizou as 3 doses de Penicilina Benzatina, concluiu o tratamento 8 semanas antes do parto (> 30 dias) e o RN está assintomático com VDRL não reagente. O concepto não é classificado como caso de sífilis congênita que exija punção lombar ou tratamento parenteral por 10 dias, necessitando apenas de acompanhamento ambulatorial de puericultura com VDRL de controle aos 1, 3, 6, 12 e 18 meses.',
    comentariosAlternativas: {
      A: 'Correta. O tratamento do parceiro não mais define tratamento materno inadequado para fins de conduta neonatal. Mãe fez penicilina na dose correta, finalizou > 30 dias antes do parto e RN assintomático com VDRL não reagente deve realizar seguimento ambulatorial.',
      B: 'Incorreta. A regra que considerava o tratamento inadequado pela falta de tratamento do parceiro foi revogada pelo Ministério da Saúde em 2017.',
      C: 'Incorreta. O tratamento da mãe foi plenamente adequado e o seguimento ambulatorial é indispensável para confirmar a cura ou ausência de soroconversão tardia.',
      D: 'Incorreta. Punção lombar de rotina e internação são proscritas em RN assintomático com mãe tratada adequadamente e VDRL negativo.',
    },
  },
  {
    id: 'ped-neo2-004',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Alterações Radiológicas na Sífilis Congênita: Sinal de Wimberger e Periostite',
    isRevisao: false,
    enunciado:
      'Lactente com 28 dias de vida é levado à emergência pediátrica pela mãe com queixa de que a criança "chora muito ao trocar as fraldas e parou de movimentar a perna esquerda". Ao exame físico, o bebê mantém o membro inferior esquerdo imóvel, estendido e em rotação interna, chorando vigorosamente à mínima manipulação ou palpação da região do joelho e perna, sem sinais flogísticos externos (ausência de calor local ou hiperemia evidente). Apresenta ainda icterícia leve Zona II de Kramer e baço palpável a 2 cm do RCE. Foi realizada radiografia de membros inferiores que evidenciou desmineralização metafisária simétrica com erosão óssea lítica destrutiva na cortical ântero-medial da tíbia proximal bilateralmente, associada a espessamento periosteal (reação periosteal exuberante). Qual é o epônimo do sinal radiológico descrito e o nome da síndrome clínica clássica apresentada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sinal de Wimberger; Pseudoparalisia de Parrot (decorrente de osteocondrite dolorosa metafisária por Treponema pallidum).',
      },
      {
        id: 'B',
        texto:
          'Sinal de Barlow; Artrite séptica bacteriana do recém-nascido por Staphylococcus aureus.',
      },
      {
        id: 'C',
        texto:
          'Sinal de Ortolani; Displasia do desenvolvimento do quadril com fratura obstétrica oculta.',
      },
      {
        id: 'D',
        texto:
          'Linhas de Harris; Osteogênese imperfeita tipo II com múltiplas fraturas diafisárias.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O caso ilustra com precisão as manifestações osteoarticulares típicas da Sífilis Congênita Precoce:\n1. Pseudoparalisia de Parrot: limitação funcional e recusa voluntária em movimentar a extremidade afetada decorrente da dor intensa provocada pela osteocondrite metafisária e periostite subjacentes (o recém-nascido mantém o membro flácido e imóvel para evitar dor, mimetizando uma paralisia neurológica);\n2. Sinal de Wimberger: sinal radiológico considerado altamente característico e quase patognomônico da sífilis congênita, caracterizado por reabsorção óssea lítica / erosão focal na borda medial da metáfise proximal da tíbia, bilateral e simétrica;\n3. Outras alterações radiológicas ósseas: osteocondrite e bandas de desmineralização metafisárias, reação periosteal com periostite proliferativa exuberante nas diáfises de ossos longos (fêmur, tíbia, rádio, ulna).\n\nEssas lesões ósseas estão presentes em até 70-80% dos recém-nascidos com sífilis congênita sintomática e regridem completamente após o tratamento adequado com Penicilina Cristalina IV.',
    comentariosAlternativas: {
      A: 'Correta. A erosão medial metafisária tibial bilateral é o sinal de Wimberger e a impotência funcional por dor intensa é a pseudoparalisia de Parrot.',
      B: 'Incorreta. Barlow avalia instabilidade de quadril; na artrite séptica haveria sinais flogísticos agudos e derrame articular purulento.',
      C: 'Incorreta. Ortolani é manobra para luxação congênita do quadril.',
      D: 'Incorreta. Linhas de Harris indicam parada de crescimento ósseo e a osteogênese imperfeita cursa com ossos arqueados, fraturas diafisárias e escleras azuladas.',
    },
  },
  {
    id: 'ped-neo2-005',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Esquema Terapêutico e Manejo de Falhas/Atrasos de Dose na Sífilis Congênita',
    isRevisao: false,
    enunciado:
      'Recém-nascido com diagnóstico confirmado de sífilis congênita com acometimento do sistema nervoso central (VDRL liquórico reativo 1:2 com hiperproteinorraquia de 180 mg/dL) foi internado na Unidade Neonatal para tratamento com Penicilina G Cristalina por via intravenosa no esquema de 10 dias. No 6º dia de internação, houve perda do acesso venoso periférico durante a madrugada. Devido à extrema dificuldade de punção venosa periférica e atraso na colocação de cateter central, a criança ficou sem receber nenhuma dose de penicilina por um período consecutivo de 28 horas. De acordo com as diretrizes do Ministério da Saúde e consensos de infectologia pediátrica, qual é a conduta correta a ser adotada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Reiniciar o esquema completo de Penicilina G Cristalina por mais 10 dias ininterruptos, desconsiderando os 5 dias prévios de tratamento, pois qualquer interrupção superior a 24 horas quebra a eficácia do tratamento treponemicida no SNC.',
      },
      {
        id: 'B',
        texto:
          'Apenas administrar a dose atrasada em dobro e completar os 4 dias restantes para somar 10 dias totais acumulados.',
      },
      {
        id: 'C',
        texto:
          'Substituir imediatamente por Ceftriaxona intramuscular por mais 5 dias para atingir o tempo programado.',
      },
      {
        id: 'D',
        texto:
          'Suspender o tratamento parenteral e prescrever Penicilina G Benzatina em dose única intramuscular para finalização.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Na terapêutica da sífilis congênita (especialmente com envolvimento neurológico/neurosífilis ou quando não foi possível afastar o acometimento do SNC):\n1. A manutenção de níveis bactericidas constantes de penicilina no liquor e nos tecidos é essencial para erradicar o Treponema pallidum, que possui tempo de divisão celular longo (30 a 33 horas);\n2. Regra dos Atrasos de Dose:\n   - Se o atraso for menor que 24 horas: aplica-se a dose imediatamente assim que o acesso for restabelecido e prossegue-se com o esquema ajustando os horários subsequentes;\n   - Se a interrupção/atraso exceder 24 HORAS: O ESQUEMA DEVE SER OBRIGATORIAMENTE REINICIADO DESDE O PRIMEIRO DIA, cumprindo-se um novo ciclo completo de 10 dias consecutivos de Penicilina Cristalina IV;\n3. Não é permitido somar frações de dias antes e depois do intervalo nem utilizar doses dobradas;\n4. A penicilina benzatina não atinge níveis terapêuticos na barreira hematoencefálica, sendo contraindicada para neurosífilis.',
    comentariosAlternativas: {
      A: 'Correta. Atraso superior a 24 horas no tratamento da sífilis congênita invalida o ciclo anterior e exige o reinício do tratamento por 10 dias completos.',
      B: 'Incorreta. É vedado "compensar" com dose dobrada; o atraso de 28h (> 24h) exige reinício formal do ciclo de 10 dias.',
      C: 'Incorreta. Penicilina Cristalina é o fármaco de escolha absoluto; ceftriaxona é apenas alternativa de exceção em casos de desabastecimento nacional e não permite aproveitamento de ciclo interrompido por > 24h.',
      D: 'Incorreta. Penicilina benzatina não atinge concentrações liquóricas adequadas e jamais deve ser usada em neurosífilis.',
    },
  },
  {
    id: 'ped-neo2-006',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Parâmetros Liquóricos na Investigação de Neurosífilis Neonatal',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo, filho de mãe com sífilis diagnosticada no momento do parto (VDRL materno 1:32, não tratada na gestação), encontra-se assintomático ao exame físico e apresenta VDRL sérico periférico de 1:16. Na investigação complementar protocolar, a punção lombar atraumática revelou os seguintes parâmetros no líquido cefalorraquidiano (LCR): límpido, incolor; hemácias: 0/mm³; leucócitos: 38 células/mm³ (predomínio de 85% de linfomononucleares); proteínas totais: 190 mg/dL; glicorraquia: 55 mg/dL (glicemia sérica concomitante: 80 mg/dL); VDRL no LCR: não reagente. De acordo com as diretrizes do Ministério da Saúde para o manejo da sífilis congênita, qual a interpretação desse exame liquórico e qual o antibiótico de escolha mandatória?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Líquor alterado compatível com neurossífilis (pleocitose > 25 leucócitos/mm³ e hiperproteinorraquia > 150 mg/dL); o tratamento deve ser feito obrigatoriamente com Penicilina G Cristalina intravenosa na dose de 50.000 UI/kg/dose por 10 dias.',
      },
      {
        id: 'B',
        texto:
          'Líquor considerado normal para a faixa etária neonatal imediata; o recém-nascido pode ser tratado ambulatorialmente com Penicilina G Benzatina em dose única intramuscular.',
      },
      {
        id: 'C',
        texto:
          'Neurosífilis descartada pelo VDRL não reagente no LCR; a droga de escolha é Penicilina Procaína intramuscular por 10 dias.',
      },
      {
        id: 'D',
        texto:
          'Quadro de meningite fúngica congênita; iniciar Anfotericina B desoxicolato associada a Penicilina Cristalina.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Na avaliação do líquor no período neonatal imediato para pesquisa de neurosífilis congênita, os critérios diagnósticos do Ministério da Saúde estabelecem que o líquor é considerado ALTERADO se apresentar qualquer um dos seguintes parâmetros:\n1. VDRL reagente no LCR (qualquer titulação);\n2. Pleocitose: contagem de leucócitos > 25 células/mm³;\n3. Hiperproteinorraquia: concentração de proteínas totais > 150 mg/dL.\n\nImportante: A sensibilidade do VDRL no líquor não é de 100%. Por isso, a alteração citoquímica isolada (células > 25 ou proteínas > 150 mg/dL) em punção não hemorrágica é suficiente para classificar o paciente como portador de neurossífilis congênita!\n\nDiante de neurossífilis confirmada ou líquor alterado (ou mesmo se a punção lombar não puder ser realizada), o antibiótico MANDATÓRIO é a Penicilina G Cristalina por via intravenosa durante 10 dias. A Penicilina Procaína é permitida apenas em casos em que a neurosífilis foi cabalmente descartada (LCR comprovadamente normal).',
    comentariosAlternativas: {
      A: 'Correta. Células > 25/mm³ e proteínas > 150 mg/dL definem líquor alterado no período neonatal imediato, exigindo Penicilina G Cristalina IV por 10 dias.',
      B: 'Incorreta. Para o neonato imediato, limites normais são até 25 leucócitos/mm³ e proteínas até 150 mg/dL. Valores de 38 células e 190 mg/dL são francamente patológicos.',
      C: 'Incorreta. O VDRL tem sensibilidade subótima no LCR; a citoquímica alterada define neurosífilis e contraindica o uso isolado de Penicilina Procaína IM.',
      D: 'Incorreta. As alterações liquóricas descritas são decorrentes de neurossífilis congênita por Treponema pallidum.',
    },
  },
  {
    id: 'ped-neo2-007',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Seguimento Sorológico e Critérios de Cura da Sífilis Congênita',
    isRevisao: false,
    enunciado:
      'Lactente completou tratamento aos 10 dias de vida com Penicilina Cristalina IV para sífilis congênita (título de VDRL ao nascimento era de 1:32). Foi agendado seguimento ambulatorial com realização de testes não treponêmicos periódicos. Aos 3 meses de vida, o VDRL sérico periférico resultou em 1:8 e, aos 6 meses de vida, resultou em 1:2, negativando aos 9 meses. A criança mantém neurodesenvolvimento adequado e sem estigmas clínicos. Qual a interpretação correta da evolução sorológica e qual a conduta para confirmação de cura definitiva?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Evolução sorológica esperada e satisfatória, com queda de pelo menos 2 diluições em até 6 meses e negativação progressiva; a alta definitiva do seguimento sorológico ocorre após a negativação de dois exames não treponêmicos consecutivos entre 12 e 18 meses de vida.',
      },
      {
        id: 'B',
        texto:
          'Falha terapêutica; a persistência de qualquer reatividade aos 6 meses (1:2) indica necessidade imperiosa de reinternação para novo ciclo de 10 dias de Penicilina Cristalina.',
      },
      {
        id: 'C',
        texto:
          'A cura só poderia ser comprovada se o teste treponêmico (teste rápido ou FTA-ABS) também já estivesse completamente não reagente aos 3 meses de vida.',
      },
      {
        id: 'D',
        texto:
          'A criança pode receber alta imediata aos 6 meses, sem necessidade de novas consultas ou exames laboratoriais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O monitoramento da resposta ao tratamento da sífilis congênita baseia-se na curva descendente dos testes NÃO treponêmicos (VDRL sérico periférico):\n1. Cronograma de coleta: idealmente aos 1, 3, 6, 12 e 18 meses de vida (ou até a negativação comprovada);\n2. Resposta adequada esperada:\n   - Redução dos títulos em pelo menos 2 diluições (ex: de 1:32 para 1:8) até o 3º-6º mês de vida;\n   - Negativação sorológica da maioria dos pacientes até os 6 a 12 meses de vida;\n3. Critérios de retratamento (falha terapêutica / reinfecção):\n   - Aumento dos títulos em 2 ou mais diluições em relação ao exame anterior;\n   - Manutenção de títulos elevados estáveis por mais de 6 a 12 meses;\n   - Não negativação até os 18 meses de vida;\n4. Os testes treponêmicos (IgG) podem permanecer positivos por anos ("cicatriz sorológica") e não servem para controle de cura no primeiro ano e meio de vida.',
    comentariosAlternativas: {
      A: 'Correta. Queda de 1:32 para 1:8 (2 diluições) aos 3 meses e negativação progressiva representam resposta padrão excelente. O seguimento deve prosseguir até 12-18 meses.',
      B: 'Incorreta. Queda progressiva com título residual baixo (1:2 aos 6 meses) é compatível com declínio fisiológico esperado e não constitui falha de tratamento.',
      C: 'Incorreta. Testes treponêmicos avaliam IgG que atravessa a placenta e persiste por até 18 meses, sendo inadequados para acompanhamento de resposta terapêutica imediata.',
      D: 'Incorreta. O seguimento clínico-laboratorial e auditivo/oftalmológico deve se estender até pelo menos 18 a 24 meses.',
    },
  },
  {
    id: 'ped-neo2-008',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Estigmas da Sífilis Congênita Tardia (> 2 Anos)',
    isRevisao: false,
    enunciado:
      'Escolar de 8 anos é levado ao ambulatório de pediatria por dificuldade progressiva de aprendizado e queixa dos professores de que a criança não atende quando chamada. Ao exame físico minucioso, o pediatra constata: perda auditiva neurossensorial bilateral confirmada por audiometria, dentes incisivos centrais superiores deformados com chanfradura central semilunar (incisivos de Hutchinson) e ceratite intersticial com opacificação e neovascularização da córnea ao exame oftalmológico com lâmpada de fenda. Observa-se ainda fronte olímpica proeminente, nariz em sela e deformidade arqueada anterior da tíbia (tíbia em lâmina de sabre). Qual é o diagnóstico e o nome da tríade clínica clássica identificada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sífilis Congênita Tardia; Tríade de Hutchinson (dentes de Hutchinson, ceratite intersticial e surdez neurossensorial por acometimento do VIII par craniano).',
      },
      {
        id: 'B',
        texto:
          'Toxoplasmose Congênita Tardia; Tríade de Sabin (calcificações cranianas, hidrocefalia e atrofia óptica).',
      },
      {
        id: 'C',
        texto:
          'Rubéola Congênita Tardia; Tríade de Gregg (cardiopatia congênita, catarata e microcefalia).',
      },
      {
        id: 'D',
        texto:
          'Mucopolissacaridose tipo I; Síndrome de Hurler com disostose múltipla e opacidade de córnea.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Sífilis Congênita Tardia manifesta-se tipicamente após os 2 anos de idade em crianças não diagnosticadas ou tratadas inadequadamente no período neonatal. Decorre de inflamação crônica granulomatosa persistente mediada por hipersensibilidade tardia contra o Treponema pallidum e deformidades secundárias a lesões ósseas da fase precoce.\n\nA manifestação mais clássica cobrada em concursos é a TRÍADE DE HUTCHINSON:\n1. Dentes de Hutchinson (incisivos centrais superiores espaçados com entalhe em meia-lua na borda incisal);\n2. Ceratite intersticial (ceratite corneana bilateral, progressiva, que causa fotofobia, lacrimejamento e perda visual);\n3. Surdez neurossensorial (decorrente de labirintite e lesão do VIII par craniano/nervo vestibulococlear, frequentemente de início na idade escolar ou adolescência).\n\nOutros estigmas da sífilis congênita tardia:\n- Molares em amora (molares de Moon/Fournier com múltiplas cúspides pequenas rudimentares);\n- Tíbia em lâmina de sabre (arqueamento anterior da tíbia por periostite crônica);\n- Nariz em sela (destruição gomosa da cartilagem do septo nasal);\n- Fronte olímpica (proeminência dos ossos frontais);\n- Articulações de Clutton (sinovite e hidrartrose indolor, simétrica, principalmente nos joelhos).',
    comentariosAlternativas: {
      A: 'Correta. A tríade de Hutchinson (dentes chanfrados, ceratite intersticial e surdez do VIII par) associada a tíbia em sabre e fronte olímpica define a sífilis congênita tardia.',
      B: 'Incorreta. Tétrade de Sabin é da toxoplasmose (hidrocefalia, coriorretinite, calcificações difusas e retardo mental).',
      C: 'Incorreta. Tríade de Gregg é da rubéola congênita (catarata, PCA/estenose de artéria pulmonar e surdez neurossensorial).',
      D: 'Incorreta. Mucopolissacaridoses cursam com fáscies tosca, hepatoesplenomegalia maciça e disostose esquelética generalizada sem dentes de Hutchinson.',
    },
  },
  {
    id: 'ped-neo2-009',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Reação de Jarisch-Herxheimer no Tratamento da Sífilis Congênita',
    isRevisao: false,
    enunciado:
      'Neonato de 6 dias de vida, com sífilis congênita sintomática confirmada (hepatoesplenomegalia e pênfigo palmoplantar), iniciou a primeira dose de Penicilina G Cristalina intravenosa. Cerca de 4 a 6 horas após a infusão do antimicrobiano, o recém-nascido desenvolveu subitamente febre (temperatura axilar de 38,7 °C), taquicardia (FC: 185 bpm), taquipneia (FR: 68 irpm), vasodilatação periférica com rubor cutâneo e exacerbação transitória das lesões cutâneas prévias. Não foram observadas manifestações de anafilaxia (sem broncoespasmo ou edema de laringe/lábios). Qual o diagnóstico fisiopatológico desse evento e qual a conduta clínica recomendada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Reação de Jarisch-Herxheimer (decorrente da lise maciça de espiroquetas com liberação aguda de endotoxinas e citocinas pró-inflamatórias como TNF-alfa e IL-6); a conduta é manter o esquema com Penicilina Cristalina sem suspensão, administrando medidas de suporte térmico e antipiréticos.',
      },
      {
        id: 'B',
        texto:
          'Choque anafilático mediado por IgE contra a penicilina; a conduta imediata é suspender definitivamente a penicilina e iniciar Adrenalina IM e Ceftriaxona.',
      },
      {
        id: 'C',
        texto:
          'Sepse bacteriana nosocomial secundária superposta; a conduta é trocar a penicilina por Meropenem e Vancomicina.',
      },
      {
        id: 'D',
        texto:
          'Meningite treponêmica aguda fulminante refratária; a conduta é realizar punção ventricular de alívio e duplicar a dose da penicilina.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Reação de Jarisch-Herxheimer é uma resposta febril aguda inflamatória sistêmica desencadeada poucas horas (geralmente entre 2 e 8 horas) após a primeira dose de antibiótico treponemicida (penicilina) no tratamento de infecções causadas por espiroquetas (Treponema pallidum, Borrelia, Leptospira).\n\nFisiopatologia:\n- Ocorre rápida destruição e lise de grande quantidade de treponemas;\n- Liberação maciça de antígenos, lipopolissacarídeos e estímulo potente à produção de citocinas pró-inflamatórias (TNF-alfa, Interleucina-6 e Interleucina-8);\n- Manifesta-se com febre, calafrios, taquicardia, hipotensão transitória e exacerbação temporária das lesões cutâneas;\n\nConduta e conduta em provas:\n- NÃO É UMA REAÇÃO ALÉRGICA À PENICILINA;\n- O tratamento com Penicilina NÃO deve ser descontinuado nem trocado;\n- Manejo exclusivamente sintomático e de suporte (controle térmico com antitérmicos e hidratação);\n- Em neonatos com acometimento visceral grave ou prematuros, monitorização hemodinâmica rigorosa.',
    comentariosAlternativas: {
      A: 'Correta. A reação de Jarisch-Herxheimer ocorre pela liberação aguda de endotoxinas/citocinas após morte maciça dos treponemas. Não contraindica a penicilina; deve-se manter o esquema e manejar com suporte e antitérmicos.',
      B: 'Incorreta. Anafilaxia cursa com hipotensão, urticária, angioedema e broncoespasmo, e não com febre isolada e piora transitória das lesões sifilíticas.',
      C: 'Incorreta. O quadro tem início hiperagudo nas primeiras horas da penicilina, sendo típico de Jarisch-Herxheimer.',
      D: 'Incorreta. Não há indicação de punção ventricular nem de duplicar a dose.',
    },
  },
  {
    id: 'ped-neo2-010',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Toxoplasmose Congênita: Transmissão Vertical e Relação Idade Gestacional vs Gravidade',
    isRevisao: false,
    enunciado:
      'Durante uma reunião clínica do serviço de infectologia perinatal, discute-se a dinâmica da transmissão transplacentária do Toxoplasma gondii e os fatores que determinam a taxa de infecção congênita e o espectro de gravidade clínica das sequelas fetais. Qual das seguintes assertivas descreve com precisão a relação biológica entre a idade gestacional no momento da soroconversão aguda materna e o risco de infecção fetal e sua respectiva morbidade?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A taxa de transmissão vertical é MENOR no primeiro trimestre (cerca de 10 a 15%), porém as sequelas fetais são significativamente MAIS GRAVES (abortamento, morte fetal e formas clínicas graves com tétrade de Sabin); inversamente, no terceiro trimestre, a taxa de transmissão é a mais ELEVADA (60 a 80%), porém a grande maioria dos neonatos nasce ASSINTOMÁTICA ou com quadro subclínico.',
      },
      {
        id: 'B',
        texto:
          'A taxa de transmissão é máxima no primeiro trimestre (> 90%) devido à ausência de barreira placentária, enquanto no terceiro trimestre a placenta bloqueia 100% dos taquizoítos.',
      },
      {
        id: 'C',
        texto:
          'A gravidade das lesões cerebrais fetais independe da idade gestacional da infecção, sendo determinada unicamente pela presença de anticorpos IgM no líquido amniótico.',
      },
      {
        id: 'D',
        texto:
          'Mulheres com toxoplasmose crônica imunocompetentes prévia à gestação transmitem a doença ao feto em cerca de 50% dos casos a cada nova gravidez.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A transmissão vertical do Toxoplasma gondii segue uma clássica RELAÇÃO INVERSA entre taxa de transmissão e gravidade clínica:\n\n1. Primeiro Trimestre de Gestação:\n   - Fluxo sanguíneo placentário menor e vilosidades coriais em formação (barreira placentária mais densa);\n   - Taxa de transmissão transplacentária BAIXA (10% a 15%);\n   - Porém, a organogênese do SNC e ocular está em curso ativo. Se o parasita atravessar a placenta, o dano tecidual é DEVASTADOR, levando a abortamento espontâneo, óbito fetal intrauterino ou infecção congênita gravíssima com microcefalia, hidrocefalia severa e calcificações extensas;\n\n2. Terceiro Trimestre de Gestação:\n   - Grande vascularização placentária, membrana vilositária fina e alta área de superfície de troca;\n   - Taxa de transmissão transplacentária MUITO ALTA (60% a 80%);\n   - Entretanto, como a organogênese já está concluída, os neonatos infectados nascem quase sempre ASSINTOMÁTICOS ao exame físico sumário (cerca de 70-90% subclínicos ao nascer), mas com alto risco de desenvolver sequelas tardias (coriorretinite, déficits visuais e auditivos) se não tratados precocemente;\n\n3. Mães imunocompetentes com infecção crônica prévia à gestação NÃO transmitem toxoplasmose aos conceptos (a imunidade humoral e celular materna neutraliza a parasitemia). A transmissão só ocorre em gestantes com infecção primária adquirida durante a gestação ou, excepcionalmente, em gestantes com imunodeficiência grave (ex: HIV com CD4 muito baixo) por reativação.',
    comentariosAlternativas: {
      A: 'Correta. Relação clássica: infecção precoce (1º tri) tem baixa taxa de transmissão com alta gravidade fetal; infecção tardia (3º tri) tem alta taxa de transmissão com acometimento fetal subclínico/assintomático.',
      B: 'Incorreta. A transmissão no 1º trimestre é a mais baixa (10-15%) e no 3º trimestre é a mais alta (60-80%).',
      C: 'Incorreta. A gravidade clínica é fortemente dependente da época da gestação em que ocorreu a infecção materna.',
      D: 'Incorreta. Mulheres imunocompetentes com sorologia pré-gestacional IgG+ e IgM- não transmitem toxoplasmose ao feto.',
    },
  },
  {
    id: 'ped-neo2-011',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Tétrade de Sabin na Toxoplasmose Congênita',
    isRevisao: false,
    enunciado:
      'Recém-nascido com 5 dias de vida, filho de mãe que apresentou soroconversão para toxoplasmose no primeiro trimestre da gestação sem tratamento regular, é avaliado pelo pediatra na enfermaria de alto risco. O neonato apresenta perímetro cefálico no percentil > 97 para a idade gestacional, fontanela anterior tensa e abaulada com diástase de suturas cranianas cranioencefálicas. O fundo de olho sob dilatação pupilar revela lesão cicatricial esbranquiçada circundada por halo pigmentado negro na região macular da retina. A ultrassonografia transfontanelar e a tomografia de crânio mostram dilatação ventricular supratentorial acentuada secundária a estenose do aqueduto de Sylvius e múltiplos focos hiperdensos calcificados distribuídos difusamente pelo córtex cerebral, substância branca e núcleos da base. Qual é o diagnóstico e quais são os quatro componentes clássicos da síndrome identificada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Toxoplasmose Congênita; Tétrade de Sabin clássica: 1) Coriorretinite; 2) Hidrocefalia obstrutiva (por estenose do aqueduto de Sylvius); 3) Calcificações intracranianas difusas parenquimatosas; 4) Retardo mental / déficit neuropsicomotor.',
      },
      {
        id: 'B',
        texto:
          'Citomegalovirose Congênita; Tétrade de Sabin: 1) Calcificações periventriculares; 2) Microcefalia; 3) Surdez neurossensorial; 4) Hepatite aguda.',
      },
      {
        id: 'C',
        texto:
          'Sífilis Congênita; Tríade de Sabin: 1) Pênfigo palmoplantar; 2) Rinite; 3) Hidrocefalia comunicante; 4) Glaucoma.',
      },
      {
        id: 'D',
        texto:
          'Zika Congênita; Síndrome do Zika vírus: 1) Artrogripose; 2) Craniossinostose; 3) Hidranencefalia; 4) Catarata congênita.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A TÉTRADE DE SABIN é a manifestação clínica clássica e mais consagrada da Toxoplasmose Congênita sintomática grave:\n1. Coriorretinite (presente em 80-90% dos casos sintomáticos, com predileção típica pela região macular da retina, lesão necrotizante que deixa cicatriz atrófica hiperpigmentada);\n2. Hidrocefalia obstrutiva (geralmente decorrente da estenose inflamatória do aqueduto cerebral / aqueduto de Sylvius pela ependimite e necrose tecidual induzida pelo taquizoíto);\n3. Calcificações intracranianas DIFUSAS (espalhadas de forma aleatória pelo parênquima cerebral, substância branca, gânglios da base e córtex — diferencial crucial com o Citomegalovírus, cujas calcificações são estritamente PERIVENTRICULARES);\n4. Retardo mental / atraso grave do neurodesenvolvimento (déficit cognitivo e motor secundário à destruição do córtex cerebral).',
    comentariosAlternativas: {
      A: 'Correta. Tétrade de Sabin: coriorretinite macular, hidrocefalia obstrutiva, calcificações intracranianas difusas e retardo neuropsicomotor.',
      B: 'Incorreta. CMV cursa tipicamente com calcificações periventriculares e microcefalia, e não com a tétrade de Sabin.',
      C: 'Incorreta. Sabin não descreveu tríade em sífilis congênita.',
      D: 'Incorreta. Síndrome congênita do vírus Zika cursa com microcefalia grave com colapso do crânio, sobreposição de suturas e calcificações na junção córtico-subcortical.',
    },
  },
  {
    id: 'ped-neo2-012',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Esquema Tríplice no Tratamento da Toxoplasmose Congênita Neonatal',
    isRevisao: false,
    enunciado:
      'Recém-nascido de termo é diagnosticado com toxoplasmose congênita sintomática confirmada por IgM e IgA séricos reagentes e presença de calcificações intracranianas na ultrassonografia de crânio. Foi indicado o início do esquema clássico de tratamento padrão preconizado pelo Ministério da Saúde e pela Sociedade Brasileira de Pediatria para erradicação do Toxoplasma gondii e prevenção da progressão das lesões viscerais e oftalmológicas. Qual é a associação medicamentosa de primeira linha recomendada, qual o tempo de duração total do tratamento e qual fármaco deve ser obrigatoriamente associado para prevenir toxicidade medular hematológica?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Sulfadiazina + Pirimetamina + Ácido Folínico; o esquema tem duração de 12 meses (1 ano inteiro); o Ácido Folínico (folinato de cálcio) é mandatória para evitar a mielossupressão grave induzida pela inibição da enzima di-hidrofolato redutase.',
      },
      {
        id: 'B',
        texto:
          'Espiramicina em monoterapia contínua por 6 meses; não requer suplementação vitamínica por não apresentar efeitos colaterais.',
      },
      {
        id: 'C',
        texto:
          'Sulfametoxazol + Trimetoprima (Cotrimoxazol) por 21 dias associado a Vitamina B12 intramuscular mensal.',
      },
      {
        id: 'D',
        texto:
          'Clindamicina + Azitromicina intravenosa por 14 dias associada a Ácido Fólico em altas doses.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O tratamento padrão-ouro indiscutível da Toxoplasmose Congênita em todos os recém-nascidos e lactentes (sintomáticos ou subclínicos) consiste no esquema tríplice clássico:\n\n1. Componentes do Esquema:\n   - Sulfadiazina (100 mg/kg/dia dividida em 2 tomadas orais);\n   - Pirimetamina (1 mg/kg/dia VO em dose única, ajustada conforme a fase do protocolo);\n   - Ácido Folínico / Folinato de Cálcio (5 a 10 mg por via oral, 3 vezes por semana ou diariamente dependendo da dose de pirimetamina);\n\n2. Duração do Tratamento:\n   - 12 MESES COMPLETOS (1 ano inteiro), para erradicar formas proliferativas e minimizar reativações de cistos teciduais na retina e SNC;\n\n3. Papel do Ácido Folínico (Folinato de Cálcio):\n   - A pirimetamina é um potente inibidor da enzima di-hidrofolato redutase (impedindo a síntese de ácido tetraidrofólico tanto no parasita quanto na medula óssea do hospedeiro);\n   - A suplementação com ÁCIDO FOLÍNICO (já reduzido) protege as células precursoras hematopoiéticas humanas contra aplasia medular, leucopenia, neutropenia grave e anemia megaloblástica;\n   - ATENÇÃO: NÃO SE DEVE USAR ÁCIDO FÓLICO COMUM (o ácido fólico comum necessita da enzima bloqueada para ser convertido, não protegendo o paciente da mielotoxicidade e podendo antagonizar o efeito antiparasitário);\n\n4. Monitorização:\n   - Hemograma completo semanal ou quinzenal para vigilância de neutropenia.',
    comentariosAlternativas: {
      A: 'Correta. Esquema tríplice: Sulfadiazina + Pirimetamina + Ácido Folínico durante 12 meses. O ácido folínico é fundamental para prevenir a mielotoxicidade da pirimetamina.',
      B: 'Incorreta. Espiramicina não atravessa a barreira hematoencefálica nem a placenta de forma terapêutica no feto; é utilizada na gestante infectada para prevenir transmissão, mas é insuficiente para o RN.',
      C: 'Incorreta. O tempo de 21 dias e o cotrimoxazol não constituem o esquema de 1ª linha da toxoplasmose congênita neonatal (que dura 12 meses).',
      D: 'Incorreta. Clindamicina é opção de 2ª linha apenas em casos de toxicidade intolerável à sulfadiazina e ácido fólico comum é ineficaz.',
    },
  },
  {
    id: 'ped-neo2-013',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Indicação de Corticoterapia na Toxoplasmose Congênita',
    isRevisao: false,
    enunciado:
      'Lactente de 1 mês de vida com toxoplasmose congênita confirmada em uso regular do esquema com sulfadiazina, pirimetamina e ácido folínico é submetido a exame fundoscópico de rotina que revela coriorretinite macular em atividade inflamatória aguda (foco branco-amarelado elevado com exsudação vítrea e turvação intensa adjacente que ameaça a visão central). Além disso, a análise do líquido cefalorraquidiano evidenciou hiperproteinorraquia acentuada de 1.250 mg/dL. Diante desses achados clínicos e laboratoriais específicos, qual é a conduta farmacológica adjuvante formalmente indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Adicionar Prednisona ou Prednisolona oral na dose de 1 mg/kg/dia (dividida em 2 vezes ao dia), mantendo-a até a resolução da inflamação macular ativa ou redução da proteinorraquia para níveis inferiores a 1.000 mg/dL, com posterior desmame gradual.',
      },
      {
        id: 'B',
        texto:
          'Suspender a sulfadiazina e prescrever Dexametasona intratecal por punção lombar seriada diária.',
      },
      {
        id: 'C',
        texto:
          'Realizar vitrectomia anterior de urgência e aplicar colírio de ciprofloxacino.',
      },
      {
        id: 'D',
        texto:
          'Contraindicar formalmente qualquer uso de corticosteroide, pois a imunossupressão causará encefalite necrosante fatal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Na Toxoplasmose Congênita, a CORTICOTERAPIA SISTÊMICA (Prednisona ou Prednisolona 1 mg/kg/dia) tem INDICAÇÕES MUITO PRECISAS E ESTRITAS:\n\n1. Indicações formais de corticoide adjuvante:\n   a) Coriorretinite em atividade inflamatória aguda que ameace a mácula (risco iminente de perda visual central permanente);\n   b) Hiperproteinorraquia no LCR > 1.000 mg/dL (1 g/L), para prevenir bloqueio liquórico, aracnoidite e agravamento da hidrocefalia por depósito proteico obstrutivo;\n\n2. Regras de segurança no uso do corticoide:\n   - O corticosteroide NUNCA DEVE SER USADO EM MONOTERAPIA; deve sempre estar associado ao tratamento antiparasitário ativo (sulfadiazina + pirimetamina) para evitar replicação descontrolada dos taquizoítos;\n   - A duração é restrita: mantém-se até a estabilização/cicatrização da lesão oftalmológica aguda ou até a proteinorraquia cair para valores < 1.000 mg/dL, seguida de retirada gradual (desmame).',
    comentariosAlternativas: {
      A: 'Correta. Corticoterapia (prednisona 1 mg/kg/dia) está indicada em coriorretinite macular em atividade e proteinorraquia liquórica > 1.000 mg/dL, associada aos antiparasitários.',
      B: 'Incorreta. Corticosteroide intratecal e suspensão da sulfadiazina são condutas perigosas e incorretas.',
      C: 'Incorreta. Vitrectomia não é conduta inicial em lesão inflamatória aguda passível de resposta a corticoide e antiparasitário.',
      D: 'Incorreta. O corticoide é expressamente recomendado nessas duas situações pontuais quando protegido por terapia antiparasitária concomitante.',
    },
  },
  {
    id: 'ped-neo2-014',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico Sorológico Materno da Toxoplasmose: Teste de Avidez de IgG',
    isRevisao: false,
    enunciado:
      'Uma gestante primigesta de 10 semanas procura a primeira consulta pré-natal trazendo os resultados da triagem sorológica de primeiro trimestre: Toxoplasmose IgG reagente (título: 450 UI/mL) e Toxoplasmose IgM reagente (índice: 3,8). Diante da presença de IgM reagente no primeiro trimestre, para diferenciar entre infecção aguda recente adquirida na gravidez e persistência de IgM residual crônica ("IgM de longa duração"), qual exame complementar deve ser solicitado imediatamente e como interpretar um resultado com ALTA AVIDEZ de IgG?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Teste de Avidez de IgG; a constatação de ALTA AVIDEZ de IgG em gestação com menos de 16 semanas exclui infecção aguda adquirida na gestação (comprova infecção pré-concepcional adquirida há mais de 3 a 4 meses), dispensando tratamento com espiramicina e afastando risco de toxoplasmose congênita fetal.',
      },
      {
        id: 'B',
        texto:
          'Amniocentese imediata com biópsia vilositária; a alta avidez comprova replicação maciça do parasita na circulação materna.',
      },
      {
        id: 'C',
        texto:
          'Teste de Western-Blot para IgE; alta avidez indica infecção hiperaguda de menos de 15 dias de evolução, sendo mandatória a interrupção da gravidez.',
      },
      {
        id: 'D',
        texto:
          'Teste de Avidez de IgG; alta avidez significa ligação fraca dos anticorpos, confirmando infecção aguda recente das últimas semanas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Teste de Avidez de IgG é o exame de escolha para datar a infecção por Toxoplasma gondii no primeiro trimestre gestacional diante de um resultado IgG(+) e IgM(+):\n\nFisiopatologia do Teste de Avidez:\n- Nos estágios iniciais da infecção aguda (primeiras semanas a 3-4 meses), os anticorpos IgG produzidos ligam-se aos antígenos parasitários com baixa afinidade e baixa força de ligação (BAIXA AVIDEZ);\n- Com a maturação da resposta imune humoral, ocorre a hipermutação somática dos linfócitos B, aumentando a afinidade de ligação ao longo do tempo (ALTA AVIDEZ);\n- A transição de baixa para alta avidez demora no mínimo 12 a 16 semanas (3 a 4 meses).\n\nInterpretação Clínica (válida se realizada antes de 16 semanas de gestação):\n- ALTA AVIDEZ (< 16 semanas): Garante com segurança que a infecção foi adquirida há mais de 3 a 4 meses (ou seja, ANTES da concepção). O IgM presente trata-se de IgM residual/prolongado. O feto não está em risco e NÃO é necessário nenhum tratamento;\n- BAIXA AVIDEZ: Sugere infecção recente (adquirida nos últimos meses, potencialmente periconcepcional ou gestacional), exigindo início imediato de Espiramicina materna e investigação fetal com PCR no líquido amniótico após a 18ª semana.',
    comentariosAlternativas: {
      A: 'Correta. Alta avidez de IgG colhida com < 16 semanas afasta com segurança infecção adquirida durante a gestação, comprovando imunidade pregressa e excluindo risco congênito.',
      B: 'Incorreta. Amniocentese com 10 semanas é contraindicada pelo risco de abortamento e a alta avidez tranquiliza em vez de indicar infecção.',
      C: 'Incorreta. Alta avidez reflete maturação prolongada do anticorpo e exclui infecção hiperaguda.',
      D: 'Incorreta. Alta avidez significa força de ligação forte/madura (infecção antiga), e não fraca.',
    },
  },
  {
    id: 'ped-neo2-015',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico Laboratorial Neonatal da Toxoplasmose: IgM, IgA e Curva de IgG',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo, assintomático, filho de mãe com suspeita de toxoplasmose aguda no terceiro trimestre de gestação, é avaliado no alojamento conjunto. A sorologia do sangue venoso do próprio recém-nascido colhida com 72 horas de vida revelou: Toxoplasmose IgG reagente (título: 800 UI/mL, idêntico ao título materno), Toxoplasmose IgM não reagente e Toxoplasmose IgA não reagente. O exame físico, ultrassonografia transfontanelar e fundoscopia são normais. Sobre a interpretação diagnóstica e a conduta a ser adotada nesse neonato, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'O resultado de IgM e IgA negativos não exclui a infecção congênita (sensibilidade limitada); como o IgG do RN pode refletir apenas passagem transplacentária de anticorpos maternos, é obrigatório realizar seguimento sorológico seriado com dosagens mensais de IgG: a persistência de níveis estáveis ou elevação comprova infecção congênita, enquanto a queda progressiva até a negativação completa (geralmente até 9 a 12 meses) descarta a doença.',
      },
      {
        id: 'B',
        texto:
          'O diagnóstico de toxoplasmose congênita está descartado de forma definitiva pelo teste de IgM e IgA negativos, podendo o lactente receber alta definitiva sem novas avaliações.',
      },
      {
        id: 'C',
        texto:
          'O IgG positivo no RN em valor de 800 UI/mL por si só já fecha o diagnóstico de toxoplasmose congênita definitiva, devendo-se iniciar quimioterapia com sulfadiazina por 2 anos.',
      },
      {
        id: 'D',
        texto:
          'Deve-se coletar sangue de cordão umbilical imediatamente para confirmação de IgM, que apresenta acurácia diagnóstica superior ao sangue periférico do RN.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O diagnóstico sorológico da Toxoplasmose Congênita no recém-nascido possui particularidades críticas:\n1. Anticorpos IgG maternos atravessam livremente a barreira placentária por transporte ativo a partir da segunda metade da gestação. Por isso, a presença de IgG no neonato ao nascer é universal se a mãe for IgG positiva, não confirmando por si só que o feto está infectado;\n2. Anticorpos IgM e IgA fetais NÃO atravessam a placenta íntegra. Sua detecção no sangue do RN confirma o diagnóstico de infecção congênita. No entanto, a sensibilidade conjunta de IgM e IgA no neonato é de apenas 60% a 80% (falsos-negativos ocorrem frequentemente, principalmente quando a transmissão ocorre no final da gestação ou quando a mãe usou espiramicina/esquema tríplice);\n3. Conduta diante de IgM/IgA negativos:\n   - Não afasta toxoplasmose congênita!\n   - Acompanhamento da cinética de decaimento do IgG sérico do lactente;\n   - Se o RN não estiver infectado, o IgG materno transferido passivamente decai progressivamente de acordo com a sua meia-vida (cerca de 21 a 28 dias), negativando entre 9 e 12 meses de vida;\n   - Se o lactente estiver infectado, ele próprio passará a sintetizar seus próprios anticorpos IgG, demonstrando persistência ou aumento dos títulos no segundo semestre de vida.\n4. Sangue de cordão NUNCA deve ser utilizado para testes sorológicos devido ao elevado risco de contaminação por sangue materno.',
    comentariosAlternativas: {
      A: 'Correta. IgM e IgA negativos não excluem a doença devido à sensibilidade incompleta. A curva de declínio do IgG do neonato é o teste definitivo para demonstrar a depuração dos anticorpos maternos ou síntese própria fetal.',
      B: 'Incorreta. Até 20-40% dos recém-nascidos com toxoplasmose congênita comprovada nascem com IgM não reagente.',
      C: 'Incorreta. IgG positivo no nascimento reflete primariamente transferência de IgG materna.',
      D: 'Incorreta. Sangue de cordão umbilical é contraindicado por risco de falso-positivo decorrente de contaminação com sangue da mãe.',
    },
  },
  {
    id: 'ped-neo2-016',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico Diferencial das Calcificações Intracranianas Congênitas: Toxoplasmose vs Citomegalovírus',
    isRevisao: false,
    enunciado:
      'Dois recém-nascidos sintomáticos (RN "1" e RN "2") nascidos na mesma maternidade foram submetidos à neuroimagem (tomografia computadorizada de crânio) para elucidação diagnóstica de infecção congênita do grupo TORCH:\n- O exame do RN "1" demonstrou calcificações parenquimatosas puntiformes e nodulares distribuídas de forma randômica e difusa por todo o cérebro, nos gânglios da base e substância branca, associadas a hidrocefalia por obstrução do aqueduto;\n- O exame do RN "2" revelou microcefalia grave com perda de parênquima cerebral e calcificações densas localizadas de maneira estritamente periventricular, margeando a parede dos ventrículos laterais.\nCom base nos padrões clássicos de neuroimagem das infecções congênitas, quais são, respectivamente, as etiologias mais prováveis dos RNs "1" e "2"?',
    alternativas: [
      {
        id: 'A',
        texto:
          'RN 1: Toxoplasmose Congênita; RN 2: Citomegalovirose Congênita (CMV).',
      },
      {
        id: 'B',
        texto:
          'RN 1: Citomegalovirose Congênita (CMV); RN 2: Toxoplasmose Congênita.',
      },
      {
        id: 'C',
        texto:
          'RN 1: Sífilis Congênita; RN 2: Rubéola Congênita.',
      },
      {
        id: 'D',
        texto:
          'RN 1: Herpes Simples Vírus tipo 2; RN 2: Vírus Zika.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O padrão de distribuição anatômica das calcificações intracranianas na tomografia computadorizada de crânio é um dos diferenciais radiológicos mais clássicos da pediatria neonatal e bancas de residência médica:\n\n1. Toxoplasmose Congênita (RN 1):\n   - Calcificações DIFUSAS e espalhadas por todo o parênquima cerebral, córtex, substância branca profunda e núcleos da base;\n   - Frequentemente associada a HIDROCEFALIA e macrocrania (estenose inflamatória de aqueduto cerebral);\n\n2. Citomegalovírus - CMV Congênito (RN 2):\n   - O vírus tem trofismo específico pelas células da matriz germinativa subependimária periventricular;\n   - Produz calcificações estritamente PERIVENTRICULARES (delineando as paredes dos ventrículos laterais);\n   - Frequentemente associado a MICROCEFALIA, ventriculomegalia ex-vácuo e alterações de migração neuronal (lisencefalia e paquigiria);\n\n3. Vírus Zika:\n   - Calcificações na junção córtico-subcortical com colapso do crânio e excesso de dobras de pele no couro cabeludo.',
    comentariosAlternativas: {
      A: 'Correta. Toxoplasmose cursa com calcificações difusas espalhadas e hidrocefalia; CMV cursa com calcificações periventriculares características e microcefalia.',
      B: 'Incorreta. As atribuições estão invertidas.',
      C: 'Incorreta. Sífilis e rubéola raramente cursam com calcificações intracranianas radiológicas típicas nesse padrão.',
      D: 'Incorreta. Herpes neonatal cursa com encefalite hemorrágica necrótica aguda com predomínio temporal; o Zika causa calcificações na junção substância branca/cinzenta.',
    },
  },
  {
    id: 'ped-neo2-017',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Profilaxia e Prevenção Primária da Toxoplasmose na Gestante Suscetível',
    isRevisao: false,
    enunciado:
      'Uma gestante primigesta de 8 semanas realiza sua primeira rotina sorológica de pré-natal e apresenta: Toxoplasmose IgG não reagente e Toxoplasmose IgM não reagente. A paciente reside em casa com quintal e tem um gato de estimação filhote. Como gestante suscetível (soronegativa), quais orientações profiláticas higienodietéticas devem ser formalmente transmitidas pelo médico para prevenir a primoinfecção durante a gravidez?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Não ingerir carnes cruas ou malcozidas (consumir apenas carnes bem passadas ou previamente congeladas a -12 °C por pelo menos 48 horas); lavar rigorosamente frutas, verduras e legumes sob água corrente com desinfecção apropriada; utilizar luvas ao manipular terra ou jardinagem; delegar a outra pessoa a limpeza diária da caixa de areia do gato (ou realizá-la com luvas e máscara, higienizando-a diariamente com água fervente antes da esporulação dos oocistos); e repetir a sorologia a cada trimestre ou mensalmente.',
      },
      {
        id: 'B',
        texto:
          'Iniciar imediatamente quimioprofilaxia contínua com Espiramicina oral durante toda a gestação e doar o gato de estimação a um abrigo.',
      },
      {
        id: 'C',
        texto:
          'Indicar vacinação profilática imediata contra toxoplasmose para a mãe e para o gato doméstico.',
      },
      {
        id: 'D',
        texto:
          'Evitar apenas o contato com cães vacinados, permitindo consumo de carnes defumadas e carpaccio sem restrições.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A gestante soronegativa para toxoplasmose (IgG- e IgM-) é considerada SUSCETÍVEL à primoinfecção, devendo receber orientações higienodietéticas rigorosas para evitar o contato com cistos teciduais ou oocistos esporulados:\n\n1. Cuidados alimentares:\n   - Não consumir carnes cruas, malpassadas, embutidos artesanais, carpaccio ou charque cru (a carne deve atingir temperatura interna > 67 °C ou ser congelada a <= -12 °C por pelo menos 48 horas para destruir cistos de bradizoítos);\n   - Lavar meticulosamente verduras, hortaliças e frutas cruas com água potável corrente e solução clorada;\n   - Não consumir leite cru não pasteurizado de vacas ou cabras;\n   - Lavar facas e superfícies que entraram em contato com carne crua antes de utilizá-las com outros alimentos;\n\n2. Cuidados ambientais e com felinos (hospedeiros definitivos):\n   - Usar luvas ao manusear terra, jardinagem ou caixas de areia infantil;\n   - A caixa de areia do gato deve ser higienizada DIARIAMENTE (os oocistos eliminados nas fezes do felino demoram de 1 a 5 dias para esporular e se tornarem infectantes; logo, a limpeza diária impede a esporulação);\n   - A limpeza deve ser feita de preferência por outra pessoa; se a gestante for realizar, deve usar luvas descartáveis e máscara;\n   - Alimentar o gato exclusivamente com ração comercial ou comida cozida (impedindo a caça);\n\n3. Monitorização sorológica:\n   - Repetir a sorologia no 2º e 3º trimestres e no momento do parto para detecção imediata de eventual soroconversão aguda.',
    comentariosAlternativas: {
      A: 'Correta. Medidas clássicas e comprovadas para prevenção primária da toxoplasmose na gestante suscetível.',
      B: 'Incorreta. Espiramicina não é indicada para gestantes soronegativas não infectadas (não existe quimioprofilaxia primária medicamentosa) e não é necessário sacrificar ou doar o felino se houver manejo higiênico correto.',
      C: 'Incorreta. Não existe vacina humana ou felina aprovada contra o Toxoplasma gondii.',
      D: 'Incorreta. O cão não é hospedeiro definitivo; carnes cruas e embutidos são as fontes alimentares primárias de transmissão.',
    },
  },
  {
    id: 'ped-neo2-018',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico e Conduta Perinatal na Toxoplasmose Materna: Espiramicina vs Amniocentese',
    isRevisao: false,
    enunciado:
      'Gestante de 14 semanas apresenta sorologia com IgG reagente e IgM reagente. O teste de avidez de IgG realizado demonstrou BAIXA AVIDEZ de IgG. O médico assistente iniciou imediatamente Espiramicina na dose de 3 g/dia (1 g a cada 8 horas) para a gestante. Para avaliar se houve transmissão transplacentária e infecção fetal ativa, qual procedimento diagnóstico complementar invasivo está indicado, em qual idade gestacional ideal deve ser realizado e qual a conduta terapêutica caso o resultado seja POSITIVO para Toxoplasma gondii?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Amniocentese para pesquisa de PCR (reação em cadeia da polimerase) do Toxoplasma gondii no líquido amniótico; deve ser realizada preferencialmente a partir da 18ª semana de gestação (e pelo menos 4 semanas após a infecção materna presumida); se o PCR for positivo, a espiramicina deve ser substituída pelo esquema com Sulfadiazina + Pirimetamina + Ácido Folínico a partir de 18 a 20 semanas.',
      },
      {
        id: 'B',
        texto:
          'Cordocentese com 14 semanas para colheita de IgM fetal; se positivo, realizar abortamento terapêutico imediato.',
      },
      {
        id: 'C',
        texto:
          'Biópsia de vilo corial imediata; se positiva, manter a espiramicina em dose reduzida até o parto.',
      },
      {
        id: 'D',
        texto:
          'Ultrassonografia obstétrica seriada apenas, pois métodos moleculares em líquido amniótico são proscritos pelo alto risco infeccioso.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo da Toxoplasmose Aguda na Gestação:\n1. Diante da comprovação de infecção aguda materna (IgM reagente com baixa avidez de IgG no primeiro trimestre), inicia-se IMEDIATAMENTE a ESPIRAMICINA materna (3 g/dia):\n   - A espiramicina é um macrolídeo que se concentra fortemente na placenta, reduzindo em até 50-60% o risco de passagem transplacentária do parasita para o feto;\n   - A espiramicina NÃO trata o feto se ele já estiver infectado (baixa penetração transplacentária para o compartimento fetal);\n\n2. Confirmação de Infecção Fetal:\n   - AMNIOCENTESE com realização de PCR para Toxoplasma gondii no líquido amniótico;\n   - Momento ideal: A PARTIR DA 18ª SEMANA de idade gestacional (e no mínimo 4 semanas após a infecção materna aguda);\n   - Antes da 18ª semana, o volume de urina fetal que compõe o líquido amniótico é reduzido, gerando alto índice de exames falso-negativos;\n\n3. Conduta se o PCR no Líquido Amniótico for POSITIVO:\n   - Confirmação de infecção fetal ativa;\n   - SUBSTITUI-SE a espiramicina pelo esquema tríplice: SULFADIAZINA + PIRIMETAMINA + ÁCIDO FOLÍNICO a partir da 18ª-20ª semana de gestação até o final da gravidez, pois esses fármacos atravessam a placenta e tratam a infecção nos tecidos fetais.',
    comentariosAlternativas: {
      A: 'Correta. Amniocentese com PCR no líquido amniótico a partir de 18 semanas é o padrão-ouro. Se positivo, substitui-se a espiramicina pelo esquema fetal tríplice (sulfadiazina + pirimetamina + folínico).',
      B: 'Incorreta. Cordocentese foi substituída pela amniocentese por ser mais invasiva e associada a maior taxa de perdas fetais; o abortamento não é conduta recomendada.',
      C: 'Incorreta. Biópsia de vilo corial não diagnostica infecção fetal líquida com a mesma acurácia e a espiramicina não trata feto já infectado.',
      D: 'Incorreta. A PCR em líquido amniótico via amniocentese é segura e padrão internacional de investigação.',
    },
  },
  {
    id: 'ped-neo2-019',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Sífilis Congênita: Exame de Campo Escuro e Microscopia Direta de Lesões',
    isRevisao: false,
    enunciado:
      'Recém-nascido prematuro tardio (35 semanas) apresenta ao nascimento rinite serossanguinolenta profusa e exantema vesicobolhoso com descamação nas extremidades. Para confirmação diagnóstica etiológica rápida no próprio berçário, o pediatra realiza aspiração estéril do fluido de uma das bolhas intactas e coleta secreção nasal serossanguinolenta para visualização microscópica imediata. Qual exame laboratorial direto com microscópio óptico especializado permite a identificação imediata do Treponema pallidum vivo e quais características morfológicas e de motilidade são observadas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Microscopia em Campo Escuro (ou microscopia com iluminação de contraste de fase); visualizam-se espiroquetas finas e espiraladas brilhantes contra fundo escuro, com movimentação ativa de translação, rotação em saca-rolhas e flexão.',
      },
      {
        id: 'B',
        texto:
          'Coloração de Gram simples em microscopia comum; visualizam-se bacilos gram-positivos esporulados imóveis.',
      },
      {
        id: 'C',
        texto:
          'Coloração de Ziehl-Neelsen; visualizam-se bacilos álcool-ácido resistentes agrupados em cordas.',
      },
      {
        id: 'D',
        texto:
          'Imunofluorescência direta para fungos com branco de calcoflúor; visualizam-se pseudo-hifas septadas fluorescentes.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A visualização direta do Treponema pallidum por Microscopia em Campo Escuro (darkfield microscopy) é considerada o padrão de certeza definitiva para o diagnóstico da sífilis em lesões ativas exsudativas (cancro duro na sífilis primária, placas mucosas/condiloma plano na secundária, rinite e pênfigo palmoplantar na sífilis congênita):\n1. Princípio do Campo Escuro: os raios de luz oblíquos incidem sobre a espiroqueta sem entrar diretamente na objetiva; a refração da luz nas bactérias faz com que elas brilhem luminosas sobre um campo completamente escuro;\n2. Características de motilidade e morfologia típicas:\n   - Bactéria espiralada com espiras regulares e uniformes;\n   - Movimentos ativos de rotação em torno do seu próprio eixo longitudinal (movimento em "saca-rolhas");\n   - Movimento de translação e angulação suave/flexão em seu terço médio;\n3. O T. pallidum não é visualizado na coloração de Gram comum devido à sua espessura extremamente delgada (cerca de 0,1 a 0,2 micrômetros), situando-se abaixo do limite de resolução óptica comum.',
    comentariosAlternativas: {
      A: 'Correta. Campo escuro demonstra espiroquetas brilhantes móveis com rotação em saca-rolhas típica, confirmando infecção treponêmica ativa nas lesões cutaneomucosas exsudativas.',
      B: 'Incorreta. O Treponema pallidum não cora ao Gram comum.',
      C: 'Incorreta. Ziehl-Neelsen cora micobactérias (tuberculose).',
      D: 'Incorreta. Calcoflúor cora fungos e leveduras.',
    },
  },
  {
    id: 'ped-neo2-020',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Manifestações Renais e Hematológicas da Sífilis Congênita Precoce',
    isRevisao: false,
    enunciado:
      'Recém-nascido com 14 dias de vida com diagnóstico tardio de sífilis congênita por mãe não triada no pré-natal é admitido com anasarca (edema generalizado acentuado em face, membros e bolsa escrotal), ascite e palidez cutânea intensa. Os exames laboratoriais admissionais revelam: Hemoglobina: 7,2 g/dL, Plaquetas: 45.000/mm³, Leucócitos: 28.000/mm³ com desvio à esquerda e presença de eritroblastos; Bilirrubina Total: 6,8 mg/dL (com Bilirrubina Direta de 4,9 mg/dL); Albumina sérica: 1,8 g/dL; Urinálise com proteinúria maciça (4+/4+) e cilindros hialinos granulosos, sem hematúria significativa. Qual a glomerulopatia clássica e os mecanismos do acometimento hematológico causados pela sífilis congênita precoce?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome Nefrótica congênita secundária a Glomerulonefrite Membranosa por deposição de imunocomplexos treponêmicos na membrana basal glomerular; a anemia decorre de hemólise autoimune e supressão medular, acompanhada de plaquetopenia por sequestro esplênico/consumo periférico.',
      },
      {
        id: 'B',
        texto:
          'Síndrome Hemolítico-Urêmica típica com microangiopatia trombótica mediada pela toxina Shiga.',
      },
      {
        id: 'C',
        texto:
          'Nefropatia por IgA com glomerulonefrite proliferativa focal e púrpura anafilactoide.',
      },
      {
        id: 'D',
        texto:
          'Doença de lesões mínimas pura associada a linfoma de Hodgkin congênito.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Sífilis Congênita Precoce é uma doença inflamatória e infecciosa multissistêmica grave decorrente de espiroquetemia disseminada:\n1. Acometimento Renal:\n   - É uma das principais causas de Síndrome Nefrótica Secundária no período neonatal;\n   - Histopatologia: Glomerulonefrite Membranosa (ou membranoproliferativa) decorrente da deposição subepitelial de imunocomplexos solúveis circulantes contendo antígenos treponêmicos e anticorpos específicos;\n   - Cursa com proteinúria maciça na faixa nefrótica, hipoalbuminemia grave e anasarca (edema generalizado);\n   - Responde brilhantemente e de forma reversível ao tratamento com Penicilina Cristalina IV;\n2. Acometimento Hematológico:\n   - Anemia hemolítica (frequentemente com teste de Coombs direto positivo ou negativo por destruição mecânica/imune) com intensa resposta eritroblástica medular e reticulocitose;\n   - Plaquetopenia (trombocitopenia) decorrente de sequestro esplênico pela esplenomegalia e destruição inflamatória mediada por complexos imunes;\n   - Reação leucemoide (leucocitose importante com desvio escalonado);\n3. Acometimento Hepático:\n   - Icterícia colestática com predomínio de bilirrubina direta, hepatomegalia e elevação de transaminases.',
    comentariosAlternativas: {
      A: 'Correta. Síndrome nefrótica por glomerulonefrite membranosa por imunocomplexos treponêmicos associada a anemia hemolítica, plaquetopenia e colestase são marcas da sífilis congênita grave.',
      B: 'Incorreta. SHU pós-diarreica decorre de infecção entérica por E. coli produtora de Shiga-toxina.',
      C: 'Incorreta. Nefropatia por IgA cursa com hematúria macroscópica recorrente e é excepcional no neonato.',
      D: 'Incorreta. Lesões mínimas não são causadas por infecção treponêmica congênita.',
    },
  },
  {
    id: 'ped-neo2-021',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico de Caso no RN: Mãe Adequadamente Tratada mas com Elevação de Título',
    isRevisao: false,
    enunciado:
      'Uma puérpera de 26 anos recebeu tratamento para sífilis primária com Penicilina G Benzatina (dose total de 2.400.000 UI) com 16 semanas de gestação, documentando queda do VDRL de 1:32 para 1:4 na 24ª semana. Entretanto, no momento do parto vaginal a termo (39 semanas), a coleta do VDRL materno revelou elevação do título para 1:32 (aumento de 3 diluições em relação ao exame anterior). A paciente relata que o parceiro não se tratou e manteve relações sexuais desprotegidas durante o terceiro trimestre. O recém-nascido encontra-se hígido ao exame físico sumário. Qual a interpretação da sorologia materna e qual a conduta clínica imediata obrigatória para o neonato?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se de reinfecção materna evidente (aumento >= 2 diluições no VDRL após queda prévia); a mãe é considerada inadequadamente tratada no parto, e o recém-nascido deve ser classificado como caso suspeito de sífilis congênita, exigindo investigação completa (VDRL periférico, hemograma, líquor e raio-X de ossos longos) e tratamento parenteral por 10 dias.',
      },
      {
        id: 'B',
        texto:
          'A mãe é considerada curada de forma definitiva pelo tratamento realizado no segundo trimestre; o aumento de títulos representa apenas fenômeno pró-zona sem relevância clínica, liberando o RN sem investigação.',
      },
      {
        id: 'C',
        texto:
          'A mãe apresenta cicatriz sorológica estável; o RN necessita apenas de aplicação de Penicilina Benzatina em dose única e alta.',
      },
      {
        id: 'D',
        texto:
          'Deve-se aguardar 30 dias para repetir o VDRL da mãe antes de tomar qualquer conduta com o recém-nascido.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Critérios de Reinfecção Materna e Falha Terapêutica segundo o Ministério da Saúde:\n1. A gestante que apresentou resposta sorológica adequada prévia com queda de títulos, mas que no momento do parto apresenta elevação do título não treponêmico em 2 OU MAIS DILUIÇÕES (no caso, de 1:4 para 1:32 = elevação em 3 diluições: 1:8, 1:16, 1:32), é considerada com REINFECÇÃO ativa no periparto;\n2. Consequência para a classificação materna:\n   - O tratamento materno torna-se classificado como INADEQUADO para a proteção do feto no momento do nascimento, pois houve nova bacteremia por Treponema pallidum não tratada;\n3. Consequência para o recém-nascido:\n   - O recém-nascido DEVE ser enquadrado na definição de caso de Sífilis Congênita;\n   - Exige protocolo investigativo neonatal completo:\n     a) VDRL em sangue venoso periférico;\n     b) Hemograma completo;\n     c) Radiografia de ossos longos;\n     d) Punção lombar com análise de líquor (VDRL, células, proteínas);\n   - Tratamento com Penicilina Cristalina IV (se LCR alterado ou sintomático/não colhido) ou Penicilina Procaína IM (se LCR normal e assintomático) por 10 dias completos.',
    comentariosAlternativas: {
      A: 'Correta. Aumento >= 2 diluições comprova reinfecção materna. A gestante é considerada inadequadamente tratada e o RN deve ser completamente investigado e tratado por 10 dias.',
      B: 'Incorreta. O fenômeno pró-zona causa falsos-negativos em títulos excessivamente altos e não elevações documentadas de 1:4 para 1:32.',
      C: 'Incorreta. Não se trata de cicatriz sorológica, mas de reinfecção ativa não tratada no 3º trimestre.',
      D: 'Incorreta. O manejo do neonato sob risco de sífilis congênita ativa não pode ser postergado por 30 dias sob risco de complicações graves.',
    },
  },
  {
    id: 'ped-neo2-022',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico Diferencial Clínico e Sorológico: Sífilis vs Toxoplasmose Congênita',
    isRevisao: false,
    enunciado:
      'Uma equipe de residentes avalia dois lactentes no primeiro mês de vida com suspeita de infecção congênita grave:\n- Lactente "A" apresenta rinite mucossanguinolenta obstrutiva, pênfigo palmoplantar e raio-X de ossos longos com espessamento periosteal e sinal de Wimberger;\n- Lactente "B" apresenta macrocefalia progressiva por hidrocefalia, coriorretinite bilateral macular em "tiro de espingarda" e calcificações cerebrais parenquimatosas difusas na tomografia.\nConsiderando a clínica patognomônica e a conduta de escolha de cada um, assinale a opção que correlaciona corretamente o diagnóstico e a droga de escolha principal para cada paciente:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Lactente A: Sífilis Congênita Precoce, droga de escolha: Penicilina G Cristalina intravenosa; Lactente B: Toxoplasmose Congênita, drogas de escolha: Sulfadiazina + Pirimetamina + Ácido Folínico.',
      },
      {
        id: 'B',
        texto:
          'Lactente A: Toxoplasmose Congênita, droga de escolha: Espiramicina; Lactente B: Sífilis Congênita Precoce, droga de escolha: Ceftriaxona.',
      },
      {
        id: 'C',
        texto:
          'Lactente A: Citomegalovírus, droga de escolha: Ganciclovir; Lactente B: Rubéola Congênita, droga de escolha: Imunoglobulina venosa.',
      },
      {
        id: 'D',
        texto:
          'Lactente A: Sífilis Congênita Precoce, droga de escolha: Penicilina Benzatina oral; Lactente B: Herpes Congênito, droga de escolha: Aciclovir venoso.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Comparativo clássico entre as duas infecções congênitas fundamentais:\n\n1. Lactente A:\n   - Rinite serossanguinolenta + pênfigo palmoplantar + alterações ósseas de metáfise/periósteo (sinal de Wimberger) são manifestações exclusivas e patognomônicas da SÍFILIS CONGÊNITA PRECOCE;\n   - Fármaco de escolha: Penicilina G Cristalina por via intravenosa por 10 dias (ou Procaína IM se líquor normal);\n\n2. Lactente B:\n   - Macrocefalia com hidrocefalia obstrutiva + coriorretinite com atrofia macular + calcificações cerebrais difusas compõem a clássica Tétrade de Sabin da TOXOPLASMOSE CONGÊNITA;\n   - Fármacos de escolha: esquema tríplice clássico com Sulfadiazina + Pirimetamina + Ácido Folínico por 12 meses.',
    comentariosAlternativas: {
      A: 'Correta. Sífilis congênita precoce tratada com Penicilina Cristalina IV; toxoplasmose congênita tratada com sulfadiazina + pirimetamina + folínico.',
      B: 'Incorreta. Etiologias invertidas.',
      C: 'Incorreta. Nenhum dos dois pacientes apresenta achados exclusivos de CMV ou rubéola.',
      D: 'Incorreta. Não existe penicilina benzatina oral (é apenas injetável IM) e a clínica de B não é de infecção herpética.',
    },
  },
  {
    id: 'ped-neo2-023',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Toxicidade Hematológica da Pirimetamina e Manejo da Neutropenia',
    isRevisao: false,
    enunciado:
      'Lactente de 3 meses em uso regular de Sulfadiazina, Pirimetamina e Ácido Folínico para tratamento de toxoplasmose congênita comparece à consulta mensal de infectologia pediátrica. O hemograma de controle laboratorial revela: Hemoglobina: 10,8 g/dL, Leucócitos totais: 2.100/mm³ com contagem absoluta de neutrófilos (CAN) de 450/mm³ (neutropenia grave < 500/mm³) e Plaquetas: 190.000/mm³. A criança encontra-se afebril e sem sinais clínicos de infecção bacteriana ativa. De acordo com os protocolos de toxicidade farmacológica do tratamento da toxoplasmose congênita, qual é a conduta médica recomendada diante da neutropenia observada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Aumentar ou dobrar a dose diária de Ácido Folínico (folinato de cálcio) e suspender temporariamente a Pirimetamina até que a contagem absoluta de neutrófilos se recupere acima de 1.000/mm³, reiniciando-a posteriormente em dose ajustada sob monitorização hematológica semanal.',
      },
      {
        id: 'B',
        texto:
          'Substituir o ácido folínico por ácido fólico comum em altas doses e manter a pirimetamina inalterada.',
      },
      {
        id: 'C',
        texto:
          'Suspender definitivamente a sulfadiazina e manter a pirimetamina em dose dobrada.',
      },
      {
        id: 'D',
        texto:
          'Indicar transplante alogênico de medula óssea imediato por aplasia medular irreversível.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo da Toxicidade Hematológica da Pirimetamina:\n1. A pirimetamina é um antifolato que inibe a enzima di-hidrofolato redutase, podendo provocar supressão medular dose-dependente, manifestada classicamente por NEUTROPENIA (e menos comumente anemia megaloblástica e trombocitopenia);\n2. Conduta escalonada diante de neutropenia no tratamento da toxoplasmose:\n   - Neutropenia leve a moderada (CAN entre 500 e 1.000/mm³): aumenta-se a dose do ÁCIDO FOLÍNICO (folinato de cálcio) para 10 a 20 mg/dia e repete-se o hemograma em 7 dias;\n   - Neutropenia grave (CAN < 500/mm³): INTERROMPE-SE TEMPORARIAMENTE A PIRIMETAMINA, aumenta-se a dose do ácido folínico e monitora-se com hemogramas seriados até recuperação dos neutrófilos (> 1.000/mm³). Após a normalização, reintroduz-se a pirimetamina com a dose plena de ácido folínico protetor;\n3. Jamais substituir por ácido fólico convencional, pois ele é ineficaz para restaurar a síntese de tetraidrofolato diante do bloqueio enzimático pela pirimetamina.',
    comentariosAlternativas: {
      A: 'Correta. Neutropenia grave (CAN < 500/mm³) exige suspensão temporária da pirimetamina e elevação da dose do ácido folínico até recuperação medular.',
      B: 'Incorreta. Ácido fólico comum depende da di-hidrofolato redutase (bloqueada pela droga) e não reverte a mielotoxicidade.',
      C: 'Incorreta. A mielotoxicidade neutropênica é precipitada principalmente pela pirimetamina (bloqueio da via do folato), e não pela sulfadiazina isolada.',
      D: 'Incorreta. A toxicidade é farmacológica, dose-dependente e completamente reversível com a suspensão do antifolato e reposição de folinato de cálcio.',
    },
  },
  {
    id: 'ped-neo2-024',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Prevenção e Tratamento da Sífilis Congênita: Penicilina Benzatina em Situações Estritas',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo, 39 semanas, peso de nascimento 3.400 g, nasce de parto cesariano por indicação obstétrica prévia. A mãe realizou 9 consultas de pré-natal; teve diagnóstico de sífilis primária no 1º trimestre e foi tratada adequadamente com Penicilina Benzatina (última dose 5 meses antes do parto), documentando soroconversão com negativação do VDRL materno no segundo trimestre e persistência de VDRL não reagente no momento do parto. O recém-nascido encontra-se completamente assintomático, com exame físico normal. Foi coletado VDRL sérico periférico do RN que resultou NÃO REAGENTE. Os pais asseguram acompanhamento ambulatorial regular. Em conformidade com o algoritmo de conduta clínica do Ministério da Saúde para o neonato exposto à sífilis, qual a recomendação correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Não é necessário realizar exames complementares adicionais invasivos (dispensa punção lombar e radiografia de ossos longos) e não é indicado tratamento medicamentoso antimicrobiano no momento, recomendando-se apenas alta com seguimento clínico e sorológico ambulatorial periódico com VDRL de controle.',
      },
      {
        id: 'B',
        texto:
          'Realizar punção lombar mandatória e prescrever Penicilina Cristalina intravenosa por 10 dias.',
      },
      {
        id: 'C',
        texto:
          'Administrar obrigatoriamente Penicilina G Benzatina na dose de 50.000 UI/kg IM em dose única antes da alta para todos os filhos de mães que já tiveram sífilis no passado.',
      },
      {
        id: 'D',
        texto:
          'Internar a criança em isolamento respiratório por 14 dias com colírio de nitrato de prata.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Algoritmo do Ministério da Saúde para Neonato Exposto à Sífilis quando:\n1. Mãe foi ADEQUADAMENTE TRATADA durante a gestação (esquema com penicilina correto para a fase clínica, finalizado > 30 dias antes do parto e com resposta documentada de queda/negativação sorológica);\n2. Recém-nascido ASSINTOMÁTICO ao exame físico minucioso;\n3. VDRL sérico periférico do recém-nascido NÃO REAGENTE;\n\nConduta do Ministério da Saúde:\n- O recém-nascido NÃO tem diagnóstico de sífilis congênita;\n- NÃO necessita de punção lombar, hemograma ou radiografia de ossos longos;\n- NÃO necessita de nenhum tratamento com penicilina (nem cristalina, nem procaína, nem benzatina) se o seguimento ambulatorial for garantido;\n- Alta com seguimento em puericultura e controle sorológico ambulatorial aos 1, 3, 6, 12 e 18 meses com teste não treponêmico (VDRL).\n\n(Observação: caso a família não assegure seguimento ou resida em área remota sem garantia de retorno, o Ministério da Saúde permite a aplicação de 1 dose de Penicilina Benzatina profilática como estratégia de redução de dano, mas quando o seguimento é garantido, a conduta padrão é apenas o seguimento clínico-sorológico sem medicação).',
    comentariosAlternativas: {
      A: 'Correta. Mãe tratada adequadamente com cura sorológica, RN assintomático com VDRL não reagente e seguimento garantido: dispensa líquor, raio-X e penicilina, realizando-se apenas seguimento ambulatorial.',
      B: 'Incorreta. Punção lombar e internação por 10 dias seriam condutas desnecessárias e iatrogênicas diante de mãe tratada e RN saudável com VDRL negativo.',
      C: 'Incorreta. A penicilina benzatina não é obrigatória para todos os RNs assintomáticos de mães tratadas adequadamente quando o seguimento é garantido.',
      D: 'Incorreta. Não há indicação de isolamento respiratório nem de internação por 14 dias.',
    },
  },
  {
    id: 'ped-neo2-025',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Manejo Integrado de Sífilis e Toxoplasmose Congênita: Resumo das Diretrizes Ministeriais',
    isRevisao: false,
    enunciado:
      'Em uma prova prática de Residência Médica com estação simulada de Pediatria Neonatal, o candidato deve definir as condutas essenciais e farmacológicas em duas situações clínicas de infecções congênitas frequentes no Brasil:\n- Situação 1: Recém-nascido com VDRL sérico de 1:64 (mãe com VDRL de 1:8 no parto), apresentando hepatoesplenomegalia e punção lombar demonstrando líquor com VDRL reagente 1:1 e 42 leucócitos/mm³;\n- Situação 2: Recém-nascido de termo assintomático ao nascimento, cuja mãe apresentou soroconversão aguda para toxoplasmose no 3º trimestre sem tratamento, apresentando no RN IgM reagente específico para Toxoplasma gondii no sangue periférico e ultrassom transfontanelar normal.\nQual das opções sintetiza a conduta terapêutica farmacológica correta preconizada pelo Ministério da Saúde para ambas as situações?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Situação 1: Internação para Penicilina G Cristalina intravenosa na dose de 50.000 UI/kg/dose (12/12h nos primeiros 7 dias e 8/8h após) por 10 dias completos; Situação 2: Início imediato do esquema tríplice com Sulfadiazina + Pirimetamina + Ácido Folínico por via oral com duração total de 12 meses, associando seguimento oftalmológico, audiológico e neurológico periódico.',
      },
      {
        id: 'B',
        texto:
          'Situação 1: Aplicação ambulatorial de Penicilina G Benzatina em dose única; Situação 2: Observação clínica expectante sem antibióticos por se tratar de neonato assintomático com neuroimagem normal.',
      },
      {
        id: 'C',
        texto:
          'Situação 1: Penicilina G Procaína intramuscular por 7 dias; Situação 2: Espiramicina oral por 30 dias.',
      },
      {
        id: 'D',
        texto:
          'Situação 1: Ceftriaxona intramuscular em dose única; Situação 2: Sulfadiazina em monoterapia por 3 meses com alta imediata.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Síntese das Diretrizes Nacionais do Ministério da Saúde para Sífilis e Toxoplasmose Congênita:\n\n1. Situação 1 (Sífilis Congênita com Neurolúes/LCR alterado):\n   - O RN apresenta título de VDRL neonatal > 2 diluições acima do materno (1:64 vs 1:8, diferença de 3 diluições) e líquor alterado (pleocitose de 42 células e VDRL reagente);\n   - Classificação: Sífilis Congênita com Neurossífilis comprovada;\n   - Conduta mandatória: Internação hospitalar para PENICILINA G CRISTALINA por via intravenosa na dose de 50.000 UI/kg/dose (a cada 12 horas na primeira semana de vida e a cada 8 horas a partir do 8º dia) por 10 DIAS COMPLETOS. Se houver falha/atraso > 24 horas, o ciclo de 10 dias deve ser reiniciado;\n\n2. Situação 2 (Toxoplasmose Congênita Subclínica/Assintomática):\n   - Neonato assintomático com IgM reagente colhido em sangue venoso periférico próprio confirma infecção congênita por síntese fetal ativa de anticorpos;\n   - Mesmo sendo assintomático e com ultrassom normal, o RN infectado DEVE SER TRATADO para evitar o aparecimento tardio de sequelas graves (coriorretinite recidivante e perda auditiva/cognitiva na infância ou adolescência);\n   - Conduta mandatória: ESQUEMA TRÍPLICE com Sulfadiazina + Pirimetamina + Ácido Folínico por 12 MESES ININTERRUPTOS, com hemogramas regulares e avaliações oftalmológicas periódicas.',
    comentariosAlternativas: {
      A: 'Correta. Na neurossífilis congênita o tratamento é Penicilina Cristalina IV por 10 dias; na toxoplasmose congênita (mesmo assintomática) o tratamento de escolha é o esquema tríplice por 12 meses.',
      B: 'Incorreta. Neurossífilis não pode ser tratada com penicilina benzatina e a toxoplasmose congênita jamais deve ficar sem tratamento mesmo que assintomática ao nascer.',
      C: 'Incorreta. Procaína é contraindicada na presença de neurossífilis e espiramicina não é tratamento preconizado para o recém-nascido.',
      D: 'Incorreta. Ceftriaxona em dose única não trata sífilis congênita e monoterapia de sulfadiazina por 3 meses é ineficaz para toxoplasmose.',
    },
  },
  {
    id: 'ped-neo2-026',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Citomegalovírus Congênito: Apresentação Clínica e Diagnóstico Virológico Precoce',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo (38 semanas de idade gestacional), pequeno para a idade gestacional (peso de nascimento: 2.150 g, abaixo do percentil 3), filho de primípara de 19 anos que relata quadro gripal inespecífico no primeiro trimestre da gestação. Ao nascimento, o neonato apresenta microcefalia (perímetro cefálico: 30,5 cm, escore Z < -2), hepatoesplenomegalia marcante com fígado a 4 cm do rebordo costal direito e baço a 3 cm do rebordo costal esquerdo, além de múltiplas máculas e pápulas purpúricas eritêmato-azuladas distribuídas pela face, tronco e membros superiores (lesões em "blueberry muffin"). Exames laboratoriais iniciais mostram: hemoglobina: 11,2 g/dL, plaquetas: 38.000/mm³, bilirrubina total: 9,8 mg/dL (fração direta: 7,2 mg/dL), AST: 180 U/L e ALT: 145 U/L. Considerando a principal hipótese diagnóstica, qual é o exame padrão-ouro para confirmação etiológica imediata e o prazo máximo de coleta para assegurar a natureza congênita da infecção?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Pesquisa de DNA viral por PCR (Reação em Cadeia da Polimerase) em amostra de urina ou saliva, colhida obrigatoriamente antes de 21 dias de vida da criança.',
      },
      {
        id: 'B',
        texto:
          'Dosagem de anticorpos IgG e IgM específicos no soro do recém-nascido coletados a qualquer momento no primeiro ano de vida.',
      },
      {
        id: 'C',
        texto:
          'Sorologia materna por teste de avidez de IgG colhida no sangue periférico materno 60 dias após o parto.',
      },
      {
        id: 'D',
        texto:
          'Cultura viral estrita em secreção nasofaríngea coletada exclusivamente entre a 4ª e 8ª semanas de vida.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O caso clínico apresenta a tríade clássica e as manifestações de alarme de Citomegalovírus (CMV) congênito sintomático: restrição de crescimento intrauterino (PIG), microcefalia, hepatoesplenomegalia com icterícia colestática (hiperbilirrubinemia direta), plaquetopenia acentuada e as clássicas lesões cutâneas tipo "blueberry muffin baby" (decorrentes de eritropoiese extramedular cutânea residual).\n\nDiagnóstico Padrão-Ouro de CMV Congênito:\n- O método de escolha é a detecção do DNA viral de CMV por PCR (Polymerase Chain Reaction) em amostras de SALIVA ou URINA do recém-nascido;\n- Janela temporal estrita: A coleta DEVE ocorrer impreterivelmente ANTES DE 21 DIAS DE VIDA (idealmente nas primeiras 2 a 3 semanas);\n- Justificativa do limite de 21 dias: O CMV é altamente prevalente no leite materno e nas secreções do canal de parto. Se o PCR for realizado após a 3ª semana de vida (> 21 dias), um resultado positivo não permite distinguir se a infecção é verdadeiramente CONGÊNITA (transplacentária) ou ADQUIRIDA (perinatal por passagem no canal de parto ou pós-natal pela amamentação, as quais são geralmente benignas e autolimitadas no termo).\n- Importante: Se a saliva for utilizada, a coleta deve ser feita pelo menos 1 hora após a amamentação para evitar falso-positivo por contaminação de DNA viral presente no leite materno.',
    comentariosAlternativas: {
      A: 'Correta. PCR em urina ou saliva colhido antes de 21 dias de vida é o exame de escolha padrão-ouro para confirmar a infecção congênita por CMV.',
      B: 'Incorreta. A sorologia IgM tem baixa sensibilidade no neonato (muitos falsos-negativos) e IgG apenas reflete transferência transplacentária materna de anticorpos.',
      C: 'Incorreta. A sorologia materna não confirma acometimento fetal e o teste de avidez aos 60 dias pós-parto perde a acurácia para datação da infecção gestacional primária.',
      D: 'Incorreta. Cultura viral em secreção nasofaríngea não é a amostra de escolha e a janela temporal após 4 semanas não diferencia infecção congênita de pós-natal.',
    },
  },
  {
    id: 'ped-neo2-027',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Citomegalovírus Congênito: Padrão de Neuroimagem e Sequela Auditiva Prevalente',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo do sexo feminino, filho de mãe que apresentou primoinfecção no início da gestação, encontra-se internado na unidade neonatal por baixo peso ao nascer e microcefalia. A ultrassonografia transfontanelar e a tomografia computadorizada de crânio sem contraste revelam ventriculomegalia e calcificações encefálicas dispostas de maneira bem característica ao redor das paredes ventriculares. O teste de emissões otoacústicas evocadas (teste da orelhinha) apresentou resultado "falha" bilateralmente. Em relação às particularidades fisiopatológicas e prognósticas do citomegalovírus (CMV) congênito, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'As calcificações intracranianas típicas do CMV distribuem-se preferencialmente na região periventricular, e o CMV representa a principal causa não hereditária (infecciosa) de perda auditiva neurossensorial congênita e progressiva na infância.',
      },
      {
        id: 'B',
        texto:
          'O CMV causa tipicamente calcificações difusas espalhadas aleatoriamente por todo o parênquima cerebral, e a surdez associada é estritamente condutiva e sempre transitória.',
      },
      {
        id: 'C',
        texto:
          'A perda auditiva neurossensorial provocada pelo CMV está presente exclusivamente nos recém-nascidos sintomáticos graves, inexistindo risco de perda auditiva em neonatos assintomáticos ao nascimento.',
      },
      {
        id: 'D',
        texto:
          'As calcificações cerebrais do CMV acometem exclusivamente a junção córtico-subcortical, e a lesão auditiva regride espontaneamente em 100% dos casos após os 2 anos de idade sem necessidade de acompanhamento.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Aspectos centrais do Citomegalovírus Congênito:\n\n1. Padrão de Neuroimagem:\n   - O tropismo preferencial do citomegalovírus pelas células germinativas em divisão da zona subependimária (subventricular) resulta na formação de CALCIFICAÇÕES PERIVENTRICULARES (ao redor dos ventrículos laterais e 3º ventrículo);\n   - Esse achado diferencia o CMV da toxoplasmose congênita (na qual as calcificações são difusas pelo parênquima) e do vírus Zika (calcificações predominantemente na junção córtico-subcortical);\n\n2. Repercussão Auditiva:\n   - O CMV congênito é a CAUSA NÃO HEREDITÁRIA MAIS FREQUENTE de perda auditiva neurossensorial em crianças nos países desenvolvidos e em desenvolvimento;\n   - A perda auditiva decorre da replicação viral persistente na cóclea (estria vascular, células ciliadas e gânglio espiral), levando à lise celular e inflamação crônica;\n   - Característica clínica fundamental: a perda auditiva do CMV é frequentemente PROGRESSIVA e FLUTUANTE, podendo ter início tardio (meses ou anos após o parto). Inclusive, 10 a 15% dos recém-nascidos que nascem inteiramente ASSINTOMÁTICOS podem desenvolver déficit auditivo neurossensorial tardio durante a infância, exigindo acompanhamento audiológico seriado até pelo menos os 3 a 5 anos de idade.',
    comentariosAlternativas: {
      A: 'Correta. As calcificações do CMV são periventriculares e o vírus é a principal causa infecciosa não hereditária de surdez neurossensorial progressiva infantil.',
      B: 'Incorreta. Calcificações difusas pelo parênquima são típicas da toxoplasmose; no CMV a perda é neurossensorial permanente e progressiva, não condutiva nem transitória.',
      C: 'Incorreta. Crianças infectadas assintomáticas ao nascer têm risco significativo (10-15%) de desenvolver perda auditiva tardia/progressiva ao longo dos primeiros anos.',
      D: 'Incorreta. Calcificações na junção córtico-subcortical são típicas do Zika; o déficit auditivo pelo CMV não regride espontaneamente e requer reabilitação auditiva precoce.',
    },
  },
  {
    id: 'ped-neo2-028',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Citomegalovírus Congênito: Tratamento Antiviral e Monitorização de Toxicidade',
    isRevisao: false,
    enunciado:
      'Recém-nascido com 12 dias de vida encontra-se internado com confirmação de citomegalovírus congênito (PCR positivo em urina e saliva). O paciente apresenta microcefalia, alterações neurológicas leves (hipotonia axial), plaquetopenia de 62.000/mm³ e potencial evocado auditivo de tronco encefálico (BERA/PEATE) evidenciando perda auditiva neurossensorial bilateral de 50 dB. O infectopediatra indica início de terapia antiviral específica. De acordo com as diretrizes da Sociedade Brasileira de Pediatria e da Academia Americana de Pediatria (AAP), qual é o esquema terapêutico antiviral de primeira linha recomendado e o principal efeito adverso que requer monitorização hematológica rigorosa?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Valganciclovir oral na dose de 16 mg/kg/dose de 12/12 horas (ou Ganciclovir intravenoso 6 mg/kg/dose de 12/12h se via oral inviável) por 6 meses; monitorando rigorosamente neutropenia e mielotoxicidade com hemogramas seriados.',
      },
      {
        id: 'B',
        texto:
          'Aciclovir intravenoso na dose de 20 mg/kg/dose de 8/8 horas por 14 dias; monitorando insuficiência renal aguda por cristalúria.',
      },
      {
        id: 'C',
        texto:
          'Sulfadiazina associada a pirimetamina e ácido folínico por via oral por 12 meses; monitorando anemia aplástica.',
      },
      {
        id: 'D',
        texto:
          'Ganciclovir intravenoso administrado por apenas 7 dias seguido de suspensão definitiva, sem necessidade de acompanhamento laboratorial.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diretrizes Terapêuticas para Citomegalovírus (CMV) Congênito Sintomático:\n\n1. Indicação de Tratamento:\n   - Indicado para recém-nascidos com infecção congênita sintomática moderada a grave com acometimento do SNC (microcefalia, ventriculomegalia, calcificações, líquor alterado), perda auditiva neurossensorial documentada ou acometimento visceral grave;\n   - Benefício comprovado em ensaios clínicos: melhora significativa ou prevenção da progressão da perda auditiva neurossensorial e melhores escores de desenvolvimento neuropsicomotor aos 24 meses;\n\n2. Fármaco e Duração:\n   - Droga de primeira linha: VALGANCICLOVIR ORAL na dose de 16 mg/kg/dose, 2 vezes ao dia (a cada 12 horas);\n   - Se o neonato não tolerar a via oral ou tiver má absorção/enteropatia: Ganciclovir intravenoso (6 mg/kg/dose de 12/12h) na fase inicial, migrando para valganciclovir assim que estável;\n   - Duração do tratamento: 6 MESES COMPLETOS (evidenciado pelo estudo de Kimberlin et al., demonstrando clara superioridade do regime de 6 meses sobre o antigo regime de 6 semanas);\n\n3. Monitorização de Toxicidade:\n   - O principal efeito adverso dose-limitante é a MIELOTOXICIDADE, especialmente a NEUTROPENIA (neutrófilos < 500/mm³ ou < 1000/mm³), ocorrendo em cerca de 20 a 30% dos pacientes nos primeiros meses de uso;\n   - Conduta: Hemograma completo semanal nas primeiras 4 a 6 semanas e, posteriormente, a cada 2 a 4 semanas. Se neutropenia grave persistente, pode ser necessária redução de dose, suspensão temporária ou uso de G-CSF.',
    comentariosAlternativas: {
      A: 'Correta. Valganciclovir oral por 6 meses é a droga de escolha e o efeito adverso mais relevante é a neutropenia grave (mielossupressão).',
      B: 'Incorreta. O Aciclovir é o fármaco de escolha para o vírus Herpes Simples (HSV), sendo ineficaz nas doses convencionais contra o CMV.',
      C: 'Incorreta. Sulfadiazina + pirimetamina + folínico compõem o esquema específico para Toxoplasmose Congênita, sem ação no CMV.',
      D: 'Incorreta. Um curso de 7 dias de ganciclovir é insuficiente e ineficaz; o tempo preconizado pelas diretrizes atuais é de 6 meses.',
    },
  },
  {
    id: 'ped-neo2-029',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Citomegalovírus Congênito: Diagnóstico Retrospectivo em Criança com Perda Auditiva Tardia',
    isRevisao: false,
    enunciado:
      'Um lactente de 8 meses de vida, sem intercorrências perinatais registradas, é levado à consulta pediátrica porque os pais notaram que ele deixou de balbuciar e não se assusta com ruídos sonoros intensos. O exame físico e marcos motores são compatíveis com a idade. A avaliação audiológica detalhada com PEATE/BERA confirma perda auditiva neurossensorial bilateral profunda. O pediatra levanta a hipótese de citomegalovírus congênito com manifestação tardia. Sabendo que o paciente já tem mais de 21 dias de vida e que uma amostra de urina atual positiva para PCR de CMV não comprova que a infecção ocorreu no período intrauterino, qual estratégia diagnóstica preconizada permite confirmar retrospectivamente a infecção congênita por CMV?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Recuperação do cartão de triagem neonatal (Guthrie card / teste do pezinho) coletado na primeira semana de vida para realização de PCR para DNA de Citomegalovírus no sangue seco.',
      },
      {
        id: 'B',
        texto:
          'Coleta de sorologia para CMV materno atual e se IgG for positivo, confirma-se infecção congênita no lactente.',
      },
      {
        id: 'C',
        texto:
          'Realização de biópsia hepática no lactente para pesquisa de corpúsculos de inclusão em "olho de coruja".',
      },
      {
        id: 'D',
        texto:
          'Pesquisa de anticorpos IgA específicos para CMV no leite materno atual com teste de avidez.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diagnóstico Retrospectivo de CMV Congênito:\n- Quando uma criança apresenta perda auditiva neurossensorial inexplicada após o primeiro mês de vida, o Citomegalovírus congênito é uma das causas etiológicas primárias;\n- No entanto, a coleta de urina ou saliva após os 21 dias de vida com PCR positivo não consegue discriminar infecção congênita de infecção adquirida no pós-natal (pelo leite materno ou creche, extremamente comuns nessa faixa etária);\n- A técnica padrão-ouro e internacionalmente validada para o diagnóstico retrospectivo consiste na RECUPERAÇÃO DO CARTÃO DO TESTE DO PEZINHO (Guthrie card / dried blood spot - DBS), armazenado pelos serviços de triagem neonatal ou bancos biológicos desde a primeira semana de vida da criança (coletado rotineiramente entre o 3º e 5º dia de vida);\n- Extrai-se o DNA a partir do sangue seco do cartão e realiza-se a Reação em Cadeia da Polimerase (PCR) para o DNA do Citomegalovírus. A detecção do vírus no sangue colhido na primeira semana de vida comprova categoricamente a transmissão intrauterina (congênita).',
    comentariosAlternativas: {
      A: 'Correta. A pesquisa de PCR de CMV no sangue seco do cartão do teste do pezinho coletado nos primeiros dias de vida confirma retrospectivamente a infecção intrauterina.',
      B: 'Incorreta. Quase 80 a 90% das mulheres adultas no Brasil têm IgG positivo para CMV, o que não prova infecção congênita fetal.',
      C: 'Incorreta. Biópsia hepática é um procedimento invasivo desnecessário que não elucida a cronologia da infecção congênita em paciente assintomático do ponto de vista hepático.',
      D: 'Incorreta. Anticorpos IgA no leite materno são fisiológicos e não determinam se a criança se infectou intraútero ou após o parto.',
    },
  },
  {
    id: 'ped-neo2-030',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome da Rubéola Congênita: Tríade / Tétrade Clássica de Gregg e Cardiopatia Específica',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo, peso de 2.200 g, filho de mãe multípara não vacinada que apresentou quadro exantemático maculopapular febril com adenomegalia retroauricular e occipital durante a 8ª semana de gestação. Na avaliação em sala de parto e alojamento conjunto, o pediatra constata: reflexo vermelho ausente em ambos os olhos com leucocoria por opacificação bilateral do cristalino (catarata congênita), sopro contínuo em "maquinária" com irradiação para dorso mais audível no 2º espaço intercostal esquerdo (compatível com Persistência do Canal Arterial) e falha bilateral na triagem auditiva neonatal. Além disso, o mapeamento de retina revela padrão pontilhado em "sal e pimenta". Esse quadro clínico define com precisão a síndrome descrita por Gregg, causada por qual agente infeccioso e qual outra malformação cardiovascular congênita é classicamente descrita nessa condição?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Vírus da Rubéola; Estenose periférica de artéria pulmonar (hipoplasia/estenose de ramos pulmonares).',
      },
      {
        id: 'B',
        texto:
          'Toxoplasma gondii; Coarctação de aorta crítica com hipoplasia de arco.',
      },
      {
        id: 'C',
        texto:
          'Citomegalovírus; Transposição das grandes artérias com septo íntegro.',
      },
      {
        id: 'D',
        texto:
          'Treponema pallidum; Tetralogia de Fallot com estenose subpulmonar grave.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Síndrome da Rubéola Congênita (SRC) e a Tétrade Histórica de Norman Gregg:\n\n1. Manifestações Clássicas da SRC:\n   - Cardiopatia congênita (encontrada em até 50% dos neonatos infectados no 1º trimestre): as duas lesões patognomônicas são a PERSISTÊNCIA DO CANAL ARTERIAL (PCA) e a ESTENOSE PERIFÉRICA DA ARTÉRIA PULMONAR (estenose de ramos pulmonares);\n   - Alterações oculares: CATARATA CONGÊNITA (geralmente bilateral, opacificação do cristalino com ausência de reflexo vermelho/leucocoria), microftalmia e a clássica RETINOPATIA EM "SAL E PIMENTA" (pontilhamento fino de hiper e hipopigmentação que não afeta a acuidade visual);\n   - Surdez neurossensorial: a sequela mais comum e consistente da SRC, decorrente da destruição do órgão de Corti;\n   - Acometimento do SNC: microcefalia, déficit cognitivo e meningoencefalite crônica;\n\n2. Epidemiologia e Prevenção:\n   - O risco de malformações graves ultrapassa 80% quando a infecção materna ocorre nas primeiras 12 semanas de gravidez;\n   - Graças à ampla cobertura da vacina Tríplice Viral (SCR) no Brasil, o país recebeu em 2015 o certificado de eliminação da rubéola congênita, mas o tema permanece recorrente e prioritário em provas de residência médica pelo alto valor pedagógico e risco de reintrodução com queda nas coberturas vacinais.',
    comentariosAlternativas: {
      A: 'Correta. A síndrome de Gregg é causada pelo vírus da rubéola e suas cardiopatias patognomônicas são a PCA e a estenose de artéria pulmonar.',
      B: 'Incorreta. Toxoplasmose causa tétrade de Sabin (hidrocefalia, coriorretinite, calcificações difusas e retardo) e não causa catarata ou PCA típica.',
      C: 'Incorreta. CMV não causa catarata congênita primária nem estenose de artéria pulmonar como defeitos morfogênicos clássicos.',
      D: 'Incorreta. Sífilis congênita causa periostite, osteocondrite e rinite serossanguinolenta, não sendo causa morfogênica de Tetralogia de Fallot.',
    },
  },
  {
    id: 'ped-neo2-031',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome da Rubéola Congênita: Oftalmologia Pediátrica e Prevenção de Ambliopia',
    isRevisao: false,
    enunciado:
      'Durante a realização do Teste do Reflexo Vermelho (Teste do Olhinho) na maternidade em um recém-nascido de termo, o pediatra observa assimetria evidente: no olho direito o reflexo é vermelho-alaranjado homogêneo e brilhante, enquanto no olho esquerdo visualiza-se reflexo esbranquiçado (leucocoria) decorrente de opacidade do cristalino compatível com catarata congênita unilateral. A investigação etiológica confirmou infecção congênita por rubéola. Qual é a conduta oftalmológica e o prazo preconizado para a intervenção cirúrgica a fim de se evitar a ambliopia por deprivação visual irreversível?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Encaminhamento imediato ao oftalmopediatra para cirurgia de facectomia/lensectomia precoce, idealmente realizada antes de 6 a 8 semanas de vida.',
      },
      {
        id: 'B',
        texto:
          'Prescrição de colírio de corticosteroides e observação clínica expectante até a criança completar 7 anos de idade.',
      },
      {
        id: 'C',
        texto:
          'Aplicação de colírio de atropina a 1% diário até a adolescência, quando o cristalino poderá ser trocado com segurança.',
      },
      {
        id: 'D',
        texto:
          'Realização de fotocoagulação a laser de toda a retina antes de 24 horas de vida para dissolver o cristalino opaco.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Catarata Congênita e Prevenção da Ambliopia:\n- A catarata congênita (seja unilateral ou bilateral) representa uma emergência oftalmológica no período neonatal;\n- Fisiopatologia da Ambliopia de Privação: Nos primeiros meses de vida, o córtex visual occipital necessita de estímulo luminoso nítido e focalizado sobre a mácula para completar a sinaptogênese e o desenvolvimento da via óptica. A opacidade do cristalino impede a chegada de luz (deprivação sensorial);\n- Se a catarata não for removida cirurgicamente em tempo hábil, ocorre AMBLIOPIA GRAVE E IRREVERSÍVEL (o cérebro "ignora" permanentemente o olho afetado, resultando em cegueira funcional definitiva, mesmo que se opere mais tarde);\n- Janela de Oportunidade Cirúrgica: A cirurgia (remoção da catarata - facectomia/lensectomia) deve ser realizada idealmente nas primeiras 6 a 8 semanas de vida (e no máximo até 12 semanas), seguida de correção refrativa e oclusão terapêutica (tamponamento do olho bom) para reabilitar a visão.',
    comentariosAlternativas: {
      A: 'Correta. A cirurgia precoce (antes de 6 a 8 semanas de vida) é mandatória para restaurar o eixo visual e prevenir ambliopia por deprivação.',
      B: 'Incorreta. Corticosteroides não dissolvem catarata estrutural e aguardar até os 7 anos condenaria o olho à cegueira irreversível por ambliopia.',
      C: 'Incorreta. Atropina não desobstrui o cristalino opaco e aguardar a adolescência perde completamente o período crítico de plasticidade cerebral visual.',
      D: 'Incorreta. Fotocoagulação a laser é tratamento de retinopatia e não de catarata, além de não dissolver cristalino.',
    },
  },
  {
    id: 'ped-neo2-032',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome da Rubéola Congênita: Risco Gestacional e Profilaxia Vacinal Pós-Parto',
    isRevisao: false,
    enunciado:
      'Uma puérpera de 24 anos deu à luz um recém-nascido saudável em parto vaginal eutócico. Ao avaliar o cartão de vacinação da mãe durante o puerpério imediato na maternidade, a equipe constata que ela nunca recebeu nenhuma dose da vacina contra a rubéola e suas sorologias pré-natais demonstraram IgG e IgM não reagentes ao longo de toda a gestação. A mãe amamenta exclusivamente ao seio materno. De acordo com as diretrizes do Programa Nacional de Imunizações (PNI) do Ministério da Saúde, qual é a conduta vacinal correta em relação à vacina Tríplice Viral (Sarampo, Caxumba e Rubéola - SCR) para essa mulher?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar a vacina Tríplice Viral (SCR) imediatamente no puerpério antes da alta hospitalar, sendo a vacina plenamente compatível com o aleitamento materno e segura para o recém-nascido.',
      },
      {
        id: 'B',
        texto:
          'Contraindicar a vacinação por toda a duração da amamentação, devido ao risco de eliminação de vírus vacinal vivo no leite e contaminação do neonato.',
      },
      {
        id: 'C',
        texto:
          'Administrar apenas a vacina da febre amarela, pois a vacina de rubéola só pode ser aplicada após a menopausa.',
      },
      {
        id: 'D',
        texto:
          'Suspender o aleitamento materno por 60 dias caso a vacina tríplice viral seja aplicada na maternidade.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Imunização Materna e Prevenção da Síndrome da Rubéola Congênita (Diretrizes PNI/MS):\n\n1. Vacina Tríplice Viral (SCR - vírus vivos atenuados):\n   - É expressamente CONTRAINDICADA durante a gestação devido ao risco teórico de transmissão transplacentária da cepa atenuada do vírus ao feto (orienta-se evitar a gravidez por 30 dias após receber a vacina);\n   - No entanto, o PUERPÉRIO IMEDIATO representa a janela de ouro ("estratégia casulo") para vacinar todas as mulheres suscetíveis antes da alta da maternidade;\n   - A vacina SCR é PLENAMENTE COMPATÍVEL COM O ALEITAMENTO MATERNO. Embora pequenas frações do componente viral atenuado da rubéola possam ocasionalmente ser excretadas no leite, elas não causam doença sintomática grave no neonato;\n   - NÃO se deve suspender o aleitamento materno (a única vacina de vírus atenuado que impõe restrição ou suspensão temporária do aleitamento em nutrizes de bebês menores de 6 meses é a vacina contra Febre Amarela, pelo risco documentado de encefalite pelo vírus vacinal, o que NÃO se aplica à SCR).',
    comentariosAlternativas: {
      A: 'Correta. A vacinação com a tríplice viral no puerpério imediato é fortemente recomendada e totalmente compatível com a amamentação.',
      B: 'Incorreta. A lactação não é contraindicação para a vacina Tríplice Viral segundo o Ministério da Saúde e a OMS.',
      C: 'Incorreta. A mulher jovem em idade fértil é o principal público-alvo para garantir imunidade antes de uma futura gestação.',
      D: 'Incorreta. Não há qualquer necessidade de suspender ou interromper a amamentação após a aplicação da vacina SCR.',
    },
  },
  {
    id: 'ped-neo2-033',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Herpes Simples Neonatal: Apresentação Cutaneomucosa (SEM) e Risco de Progressão',
    isRevisao: false,
    enunciado:
      'Um recém-nascido de termo com 9 dias de vida é levado à emergência pediátrica devido ao aparecimento de pequenas lesões vesiculares agrupadas sobre base eritematosa no couro cabeludo, exatamente na região onde foi posicionado um eletrodo cefálico durante o trabalho de parto. A mãe não relatava história pregressa conhecida de herpes genital. O neonato apresenta-se alerta, afebril, corado, hidratado e com sucção vigorosa, sem sinais de irritabilidade ou convulsão. O exame oftalmológico com lâmpada de fenda não revelou ceratite dendrítica. Considerando a forma localizada em pele, olho e boca (SEM - Skin, Eye, Mouth) do vírus Herpes Simples Neonatal (HSV), qual é a conduta imediata mandatória?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Internação hospitalar imediata, coleta de PCR para HSV nas vesículas, sangue e líquor (punção lombar), e início imediato de Aciclovir intravenoso em altas doses (60 mg/kg/dia dividido em 3 doses de 8/8h).',
      },
      {
        id: 'B',
        texto:
          'Prescrição ambulatorial de pomada dermatológica de aciclovir tópico a 5% com retorno programado em 14 dias.',
      },
      {
        id: 'C',
        texto:
          'Alta hospitalar com orientação de higiene com água e sabão, pois a forma SEM tem resolução 100% espontânea sem qualquer risco de invasão do sistema nervoso central.',
      },
      {
        id: 'D',
        texto:
          'Administração de Ganciclovir por via oral em dose única diária por 3 dias e observação domiciliar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Herpes Simples Neonatal - Forma SEM (Pele, Olho e Boca):\n\n1. Formas Clínicas do HSV Neonatal (transmitido predominantemente durante o parto por contato com secreções maternas contendo HSV-1 ou HSV-2):\n   - Forma SEM (Skin, Eye, Mouth) - 45% dos casos: lesões vesiculares cutâneas, conjuntivite/ceratite e úlceras orais;\n   - Forma com Acometimento do SNC (Encefalite) - 30% dos casos;\n   - Forma Disseminada (Sepse-like) - 25% dos casos;\n\n2. Risco de Não Tratar a Forma SEM:\n   - Mais de 70% dos recém-nascidos com forma localizada SEM que não recebem antiviral sistêmico EV PROGRIDEM rapidamente para as formas graves: acometimento do SNC (encefalite necrotizante com alta taxa de déficit neurológico) ou doença disseminada (mortalidade > 80% sem tratamento);\n\n3. Conduta Obrigatória:\n   - INTERNAÇÃO IMEDIATA;\n   - Coleta de swab das vesículas para PCR de HSV, PCR no sangue e PUNÇÃO LOMBAR obrigatória (mesmo sem sinais neurológicos, para descartar invasão incipiente do SNC);\n   - ACICLOVIR INTRAVENOSO em altas doses: 60 mg/kg/dia (dividido em 20 mg/kg/dose a cada 8 horas por via IV infusão lenta em 1 hora) por 14 dias (na forma SEM pura) ou por 21 dias (se houver acometimento de SNC ou disseminado);\n   - NUNCA utilizar tratamento tópico exclusivo em neonatos.',
    comentariosAlternativas: {
      A: 'Correta. A conduta é internação, rastreamento do SNC com líquor e PCR, e aciclovir IV em dose plena (60 mg/kg/dia) para evitar progressão fatal.',
      B: 'Incorreta. Tratamento tópico é estritamente proscrito e insuficiente em neonatos, permitindo a disseminação sistêmica e cerebral do vírus.',
      C: 'Incorreta. Sem tratamento antiviral parenteral, a imensa maioria dos casos de SEM progride para encefalite ou sepse fulminante herpética.',
      D: 'Incorreta. Ganciclovir oral não é o fármaco para HSV e cursos curtos não têm eficácia no período neonatal.',
    },
  },
  {
    id: 'ped-neo2-034',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Herpes Simples Neonatal: Encefalite Herpética no Período Neonatal',
    isRevisao: false,
    enunciado:
      'Um recém-nascido com 13 dias de vida dá entrada na UTI Neonatal com quadro progressivo de letargia, recusa alimentar, instabilidade térmica (temperatura axilar de 35,6 °C alternada com picos de 38,2 °C) e episódios de crises convulsivas focais clônicas em hemicorpo direito. Não há vesículas ou lesões cutâneas observáveis em nenhuma região do corpo. A punção lombar demonstra: líquido cefalorraquidiano claro com 140 leucócitos/mm³ (predomínio de 85% de linfomononucleares), hemácias: 520/mm³, glicose: 48 mg/dL (glicemia: 90 mg/dL) e proteínas: 160 mg/dL. A ressonância magnética encefálica revela edema e hipersinal em T2/FLAIR acometendo os lobos temporais e frontais. Qual é o diagnóstico etiológico mais provável e o esquema terapêutico correspondente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Encefalite por Vírus Herpes Simples (HSV); Aciclovir intravenoso na dose de 20 mg/kg/dose a cada 8 horas (60 mg/kg/dia) com duração mínima de 21 dias.',
      },
      {
        id: 'B',
        texto:
          'Meningite por Streptococcus agalactiae; Ampicilina associada a amicacina por 7 dias.',
      },
      {
        id: 'C',
        texto:
          'Neurosífilis congênita; Penicilina G Benzatina em dose única intramuscular.',
      },
      {
        id: 'D',
        texto:
          'Encefalopatia hipóxico-isquêmica tardia; Fenobarbital oral em monoterapia sem antimicrobianos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Encefalite Herpética Neonatal:\n- Incidência e Cronologia: Manifesta-se tipicamente entre o 10º e o 21º dia de vida;\n- Ausência de Lesões de Pele: Em até 30 a 40% dos casos de herpes neonatal com envolvimento exclusivo do SNC NÃO HÁ LESÕES CUTÂNEAS ("herpes sine herpete"), o que exige alto índice de suspeição clínica diante de neonato com crises convulsivas e pleocitose liquórica com predomínio mononuclear e presença de hemácias no líquor (meningoencefalite necro-hemorrágica);\n- Neuroimagem: O acometimento dos lobos temporais e fronto-basais com hipersinal em T2/FLAIR e restrição à difusão é altamente sugestivo de encefalite herpética;\n- Tratamento Mandatório: ACICLOVIR INTRAVENOSO na dose de 60 mg/kg/dia (20 mg/kg/dose de 8/8 horas). Na presença de acometimento do SNC, o tempo de tratamento deve ser de pelo menos 21 DIAS COMPLETOS. Antes de suspender o antiviral, deve-se repetir a punção lombar para documentar a negativação do PCR viral no líquor; em seguida, recomenda-se terapia supressiva com aciclovir oral por 6 meses para prevenir recidivas neurológicas.',
    comentariosAlternativas: {
      A: 'Correta. O quadro clínico, os achados liquóricos e a neuroimagem em lobos temporais são clássicos de encefalite herpética, tratada com Aciclovir IV (60 mg/kg/dia) por 21 dias.',
      B: 'Incorreta. Meningite bacteriana cursa com predomínio acentuado de polimorfonucleares/neutrófilos e hipoglicorraquia grave, sem o tropismo temporal típico.',
      C: 'Incorreta. Neurossífilis requer Penicilina Cristalina IV por 10 dias e não cursa com esse padrão de encefalite aguda necrotizante.',
      D: 'Incorreta. A encefalopatia hipóxico-isquêmica instala-se nas primeiras horas pós-asfixia perinatal (primeiro dia de vida) e não no 13º dia com líquor inflamatório.',
    },
  },
  {
    id: 'ped-neo2-035',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Herpes Simples Neonatal: Forma Disseminada ("Sepse-Like") e Diagnóstico Precoce',
    isRevisao: false,
    enunciado:
      'Um recém-nascido de 7 dias de vida é admitido na unidade de terapia intensiva pediátrica em estado grave com choque refratário a volume e drogas vasoativas, sangramento ativo por punções venosas e tubo orotraqueal, distensão abdominal e icterícia intensa. Exames laboratoriais revelam: plaquetas: 18.000/mm³, INR: 3,8, fibrinogênio: 60 mg/dL, AST: 3.400 U/L, ALT: 2.850 U/L e radiografia de tórax com infiltrado intersticial difuso bilateral. Não foram identificadas vesículas em pele ou mucosas. A hemocultura bacteriana após 48h de incubação é negativa. Diante da falência hepática aguda, CIVD e suspeita de infecção herpética disseminada neonatal, qual conduta diagnóstica e farmacológica imediata deve ser adotada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Iniciar imediatamente Aciclovir intravenoso (60 mg/kg/dia) associado a suporte intensivo e colher PCR para HSV no sangue e secreções, ciente de que a ausência de vesículas cutâneas ocorre em parcela significativa dos casos disseminados.',
      },
      {
        id: 'B',
        texto:
          'Aguardar o aparecimento obrigatório de vesículas cutâneas para iniciar qualquer medicação antiviral específica.',
      },
      {
        id: 'C',
        texto:
          'Descartar infecção herpética, pois o vírus Herpes Simples nunca causa hepatite fulminante nem coagulopatia no período neonatal.',
      },
      {
        id: 'D',
        texto:
          'Prescrever apenas vitamina K e plasma fresco congelado, mantendo apenas oxacilina e gentamicina empíricas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Herpes Neonatal Disseminado:\n\n1. Gravidade e Apresentação:\n   - A forma disseminada do herpes neonatal manifesta-se tipicamente entre a 1ª e 2ª semanas de vida como um quadro de "sepse bacteriana símile" grave e fulminante;\n   - Cursa com insuficiência hepática aguda catastrófica (elevação dramática de transaminases em milhares de U/L), coagulopatia intravascular disseminada (CIVD), choque refratário e síndrome do desconforto respiratório/pneumonite viral;\n\n2. Ausência de Vesículas Cutâneas:\n   - Em mais de 20 a 30% dos recém-nascidos com forma disseminada NÃO HÁ VESÍCULAS CUTÂNEAS visíveis ao exame físico. Aguardar o surgimento de lesões cutâneas para instituir o tratamento antiviral resulta em mortalidade que se aproxima de 85 a 90%;\n\n3. Conduta Salvadora:\n   - Início IMEDIATO de ACICLOVIR INTRAVENOSO na dose de 60 mg/kg/dia dividido de 8 em 8 horas em conjunto com os antimicrobianos para sepse neonatal;\n   - Coleta de PCR para HSV em sangue periférico (que se mostra intensamente positivo devido à viremia), nasofaringe, conjuntiva e urina;\n   - Suporte hematológico (plasma fresco, crioprecipitado, plaquetas) e hemodinâmico intensivo.',
    comentariosAlternativas: {
      A: 'Correta. O início imediato de Aciclovir IV em altas doses é vital perante a suspeita de herpes disseminado, que frequentemente cursa sem vesículas cutâneas.',
      B: 'Incorreta. Aguardar lesões cutâneas é um erro fatal, pois 20-30% não apresentam vesículas e o atraso do antiviral eleva a mortalidade para mais de 80%.',
      C: 'Incorreta. O HSV é uma das causas clássicas de hepatite necrotizante fulminante e CIVD catastrófica no período neonatal.',
      D: 'Incorreta. Restringir a conduta a hemoderivados e antibacterianos sem cobrir HSV não trata o agente causador e resulta em óbito rápido.',
    },
  },
  {
    id: 'ped-neo2-036',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Herpes Simples Neonatal: Prevenção Perinatal e Manejo do Parto',
    isRevisao: false,
    enunciado:
      'Gestante secundigesta, com 39 semanas de idade gestacional, entra em trabalho de parto ativo com dilatação cervical de 4 cm e bolsa amniótica íntegra. Ao exame físico obstétrico com espéculo, identificam-se múltiplas vesículas dolorosas agrupadas e pequenas úlceras superficiais ativas na vulva e no intróito vaginal, sugestivas de lesão herpética genital em atividade. A paciente refere que é o primeiro episódio que apresenta na vida (primoinfecção herpética clínica). Qual é a via de parto indicada e a justificativa técnica para a decisão, conforme os protocolos do Ministério da Saúde e do Colégio Americano de Obstetras e Ginecologistas (ACOG)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Parto por cesariana imediata, pois a presença de lesões genitais ativas pelo HSV no momento do parto com bolsa íntegra ou rotura recente impõe indicação absoluta de cesárea para evitar a transmissão vertical durante a passagem pelo canal de parto.',
      },
      {
        id: 'B',
        texto:
          'Parto vaginal com aplicação de colírio de nitrato de prata e lavagem vaginal materna com iodopovidona.',
      },
      {
        id: 'C',
        texto:
          'Parto vaginal instrumentado com fórceps de alívio associado a episiotomia ampla para evitar que o feto toque as paredes da vagina.',
      },
      {
        id: 'D',
        texto:
          'Aguardar o parto normal espontâneo por 48 horas enquanto se administra uma dose de aciclovir oral na mãe, pois o vírus não atinge o neonato.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Prevenção da Transmissão Vertical do Herpes Simples no Parto:\n- A via de transmissão de mais de 85% dos casos de herpes neonatal ocorre durante a passagem do concepto pelo canal de parto infectado por secreções contendo partículas virais infectantes de HSV-1 ou HSV-2;\n- O risco de transmissão vertical atinge 30 a 50% na primoinfecção herpética materna ocorrida no final da gestação (pois não houve tempo para a síntese e transferência transplacentária protetora de anticorpos IgG maternos);\n- Diretriz Formal (MS e ACOG):\n  - Presença de LESÕES GENITAIS ATIVAS (vesículas, pústulas ou úlceras) ou PRÓDROMOS HERPÉTICOS (dor, queimação genital) no início do trabalho de parto em mulher com bolsa íntegra ou rotura prematura de membranas < 4 a 6 horas:\n  - INDICAÇÃO ABSOLUTA DE PARTO POR CESARIANA IMEDIATA;\n  - O parto cesárea reduz drasticamente a taxa de infecção neonatal pelo HSV;\n  - Procedimentos invasivos de monitorização fetal intraparto (como colocação de eletrodos cefálicos) ou fórceps são formalmente contraindicados pelo risco de inoculação do vírus na pele do feto.',
    comentariosAlternativas: {
      A: 'Correta. A presença de lesões genitais herpéticas ativas no momento do parto com bolsa íntegra ou com rotura recente impõe cesariana imediata.',
      B: 'Incorreta. Nitrato de prata e antissépticos tópicos não previnem a inoculação viral herpética no neonato durante a passagem vaginal.',
      C: 'Incorreta. Fórceps e procedimentos invasivos provocam microtraumatismos cutâneos no couro cabeludo do feto, facilitando diretamente a infecção grave.',
      D: 'Incorreta. Permitir o parto vaginal na vigência de lesões ativas expõe o neonato a um risco intolerável de infecção disseminada ou encefalite.',
    },
  },
  {
    id: 'ped-neo2-037',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome Congênita pelo Vírus Zika: Fenótipo Clássico e Excesso de Couro Cabeludo',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo, nascido no Nordeste do Brasil, filho de mãe que apresentou exantema pruriginoso associado a artralgia e hiperemia conjuntival no segundo mês de gestação. Ao nascimento, o exame somatométrico e neurológico revela: perímetro cefálico de 28,5 cm (escore Z < -3 desvios-padrão), caracterizando microcefalia grave com desproporção craniofacial evidente, calota craniana colapsada com proeminência do osso occipital e redundância marcante da pele do couro cabeludo com rugas e dobras cutâneas espessas na região occípito-parietal (aspecto de "couro cabeludo redundante"). O neonato apresenta hipertonia piramidal intensa, hiper-reflexia osteotendínea e crises de choro inconsolável. Esse fenótipo específico é característico da infecção intrauterina por qual patógeno?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Vírus Zika (Síndrome Congênita pelo Vírus Zika - SCZ).',
      },
      {
        id: 'B',
        texto:
          'Vírus Epstein-Barr.',
      },
      {
        id: 'C',
        texto:
          'Parvovírus B19.',
      },
      {
        id: 'D',
        texto:
          'Vírus Sincicial Respiratório.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fenótipo Patognomônico da Síndrome Congênita pelo Vírus Zika (SCZ):\n\n1. Aspectos Clínicos Distintivos:\n   - Microcefalia Grave: Perímetro cefálico com escore Z < -3 desvios-padrão para idade gestacional e sexo, resultante de grave parada no crescimento cerebral (microencefalia primária e destruição massiva de progenitores neurais);\n   - Desproporção Craniofacial: O viscerocrânio (face) desenvolve-se normalmente, enquanto o neurocrânio permanece diminuído, conferindo aspecto de fronte recuada e calota craniana colapsada;\n   - Rugas e Redundância do Couro Cabeludo (Cutis Gyrata / Cutis Redundans): O couro cabeludo continua crescendo normalmente na superfície, mas como a massa encefálica subjacente sofreu destruição e atrofia rápida, a pele "sobra" e forma dobras e rugas cutâneas conspícuas na região parietal e occipital;\n   - Manifestações Neurológicas: Hipertonia grave com espasticidade, clonus, hiper-reflexia, choro agudo e persistente (irritabilidade extrema por disfunção córtico-subcortical) e convulsões de início precoce.',
    comentariosAlternativas: {
      A: 'Correta. O vírus Zika causa o quadro patognomônico de microcefalia grave, calota colapsada e redundância do couro cabeludo na região occipital.',
      B: 'Incorreta. Epstein-Barr não é causa reconhecida de síndrome malformativa microcefálica congênita.',
      C: 'Incorreta. Parvovírus B19 causa aplasia eritroide fetal pura com hidropisia fetal não imune e anemia intrauterina grave, sem microcefalia dismórfica.',
      D: 'Incorreta. O VSR é agente de bronquiolite no período pós-natal e não causa embriopatia congênita.',
    },
  },
  {
    id: 'ped-neo2-038',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome Congênita pelo Vírus Zika: Artrogripose Múltipla Congênita',
    isRevisao: false,
    enunciado:
      'Um neonato portador de microcefalia congênita grave por vírus Zika é avaliado pelo pediatra neonatologista. Ao exame dos membros, observam-se contraturas articulares congênitas fixas e simétricas em múltiplos segmentos corporais: flexão permanente dos cotovelos e punhos, desvio ulnar dos dedos, luxação congênita bilateral de quadris e deformidade grave em pé torto congênito bilateral equinovaro irredutível. A fisiopatologia subjacente à ocorrência da artrogripose múltipla congênita na Síndrome Congênita pelo Vírus Zika decorre de qual mecanismo neurológico fundamental?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Destruição precoce dos motoneurônios do corno anterior da medula espinhal pelo vírus Zika intraútero, com perda de inervação motora e consequente acinesia/hipocinesia fetal prolongada.',
      },
      {
        id: 'B',
        texto:
          'Ausência congênita de síntese de colágeno tipo 1 com hiperelasticidade ligamentar espontânea.',
      },
      {
        id: 'C',
        texto:
          'Deposição primária de cristais de pirofosfato de cálcio nas cartilagens articulares neonatais.',
      },
      {
        id: 'D',
        texto:
          'Necrose isquêmica isolada das epífises ósseas distais por trombose arterial umbilical.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisiopatologia da Artrogripose na Síndrome Congênita pelo Vírus Zika:\n- A artrogripose múltipla congênita (contraturas articulares rígidas e fixas presentes ao nascer em duas ou mais articulações diferentes) é observada em cerca de 10% dos casos mais graves de SCZ;\n- Mecanismo Neurobiológico: O vírus Zika apresenta neurotropismo avassalador que não se restringe ao córtex cerebral; ele infecta e destrói diretamente os MOTONEURÔNIOS DO CORNO ANTERIOR DA MEDULA ESPINHAL fetal;\n- Com a perda dos neurônios motores inferiores precocemente durante o 1º e 2º trimestres da gestação, instala-se uma paresia/plegia muscular intrauterina que resulta em ACINESIA FETAL (ausência prolongada de movimentação dos membros no líquido amniótico);\n- Como a formação adequada das cápsulas, tendões e articulações depende diretamente da movimentação fetal contínua intraútero, a imobilidade motora prolongada leva a fibrose periarticular densa, anquilose e contraturas fixas (artrogripose).',
    comentariosAlternativas: {
      A: 'Correta. A destruição dos motoneurônios da medula espinhal com hipocinesia fetal severa é o mecanismo gerador da artrogripose congênita na SCZ.',
      B: 'Incorreta. Distúrbios do colágeno (como osteogênese imperfeita ou Ehlers-Danlos) causam hiperfrouxidão e fragilidade, não contraturas fixas neurogênicas.',
      C: 'Incorreta. Artropatia por cristais é afecção de idosos (pseudogota) e não ocorre em conceptos humanos.',
      D: 'Incorreta. Não se trata de necrose isquêmica óssea ou vascular, mas sim de atrofia neuromuscular neurogênica secundária a lesão medular viral.',
    },
  },
  {
    id: 'ped-neo2-039',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome Congênita pelo Vírus Zika: Padrão Tomográfico e Distúrbio de Migração Neuronal',
    isRevisao: false,
    enunciado:
      'A tomografia computadorizada de crânio sem contraste de um recém-nascido com suspeita de Síndrome Congênita pelo Vírus Zika revela alterações estruturais de alta especificidade: calcificações densas dispostas na junção córtico-subcortical (subcorticais), acentuada redução da espessura do córtex cerebral com ausência de sulcos e giros normais (padrão de lisencefalia / paquigiria), hipoplasia acentuada de tronco encefálico e cerebelo, associadas a dilatação ventricular supratentorial ex-vácuo. Em relação aos achados de imagem na infecção congênita por Zika, assinale a opção correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A topografia predominante das calcificações na junção córtico-subcortical e os defeitos graves de migração neuronal (lisencefalia/paquigiria) constituem a assinatura neuro-radiológica típica da agressão fetal pelo vírus Zika.',
      },
      {
        id: 'B',
        texto:
          'O vírus Zika induz exclusivamente calcificações nos gânglios da base, sem provocar distúrbios na rotação ou migração neuronal do córtex.',
      },
      {
        id: 'C',
        texto:
          'A ventriculomegalia observada decorre invariavelmente de estenose intrínseca do aqueduto de Sylvius com hipertensão intracraniana hipertensiva e fontanela tensa.',
      },
      {
        id: 'D',
        texto:
          'As lesões radiológicas da SCZ regridem integralmente em até 6 meses com restauração da espessura e dos giros corticais normais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Assinatura Neuro-Radiológica da Síndrome Congênita pelo Vírus Zika (SCZ):\n\n1. Calcificações na Junção Córtico-Subcortical:\n   - É o achado tomográfico mais característico e distintivo do Zika;\n   - Enquanto o CMV causa calcificações periventriculares e a toxoplasmose causa calcificações difusas desordenadas pelo parênquima, as calcificações do Zika concentram-se na fronteira entre a substância cinzenta e a substância branca subjacente (junção córtico-subcortical);\n\n2. Distúrbios Graves de Migração e Desenvolvimento Cortical:\n   - O vírus infecta diretamente as células-tronco e progenitores neurais radiais, impedindo a proliferação e migração dos neurônios para as camadas externas do córtex;\n   - Esse mecanismo resulta em lisencefalia (córtex liso, agiria) ou paquigiria (giros largos e rasos escassos) e polimicrogiria;\n\n3. Ventriculomegalia "Ex-Vácuo":\n   - A dilatação dos ventrículos na SCZ NÃO decorre de hipertensão liquórica obstrutiva, mas sim da perda maciça de massa encefálica circundante (atrofia cortical severa), ocupando o espaço deixado pelo parênquima destruído (dilatação ex-vácuo, com fontanela deprimida ou plana).',
    comentariosAlternativas: {
      A: 'Correta. As calcificações na junção córtico-subcortical e os defeitos de migração (lisencefalia/paquigiria) representam a marca radiológica do Zika congênito.',
      B: 'Incorreta. As calcificações são predominantemente subcorticais e os distúrbios de migração cortical são extremamente exuberantes na SCZ.',
      C: 'Incorreta. A ventriculomegalia é passiva (ex-vácuo) por atrofia do parênquima e não hipertensiva por estenose de aqueduto.',
      D: 'Incorreta. As lesões encefálicas do Zika são estruturais permanentes e irreversíveis, acarretando sequelas neuromotoras e cognitivas profundas por toda a vida.',
    },
  },
  {
    id: 'ped-neo2-040',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome Congênita pelo Vírus Zika: Lesões Oftalmológicas Maculares Distintivas',
    isRevisao: false,
    enunciado:
      'Um recém-nascido portador de microcefalia associada à infecção gestacional pelo vírus Zika é submetido ao exame de fundo de olho (mapeamento de retina) com oftalmopediatra no período neonatal. O reflexo vermelho é uniforme bilateralmente, descartando catarata. Entretanto, a oftalmoscopia binocular indireta revela lesão cicatricial na região macular caracterizada por área focal de atrofia coriorretiniana bem delimitada com escavação central e bordas exibindo deposição espessa de pigmento negro em forma de anel hiperpigmentado foveal. Qual é o significado clínico desse achado oftalmológico na Síndrome Congênita pelo Vírus Zika?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Trata-se da lesão macular cicatricial típica descrita na SCZ, frequentemente associada a palidez do nervo óptico, que compromete de forma permanente a acuidade visual central da criança.',
      },
      {
        id: 'B',
        texto:
          'Representa retinoblastoma bilateral estadiamento precoce, com indicação imediata de enucleação de ambos os globos oculares.',
      },
      {
        id: 'C',
        texto:
          'Constitui achado oftalmológico benigno e transitório que desaparece sem deixar sequelas visuais aos 30 dias de vida.',
      },
      {
        id: 'D',
        texto:
          'É uma alteração decorrente de toxicidade medicamentosa pelo uso de colírio de eritromicina profilático ao nascimento.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Alterações Oftalmológicas na Síndrome Congênita pelo Vírus Zika:\n- O acometimento ocular ocorre em mais de 30 a 50% das crianças com SCZ;\n- A lesão oftalmológica mais frequente e característica localiza-se na MÁCULA:\n  - Trata-se de uma ATROFIA CORIORRETINIANA FOCAL com áreas de despigmentação e denudação da coroide, circundada por um anel ou grumos grosseiros de hiperplasia pigmentar na fóvea;\n  - Ocorre também palidez do disco óptico (atrofia óptica) e hipoplasia do nervo óptico;\n- Repercussão Clínica: Como a mácula é responsável pela visão central, de alta resolução e cores, essa cicatriz resulta em grave comprometimento da acuidade visual central e estrabismo secundário;\n- Importante diferencial: Na SCZ o cristalino é tipicamente transparente (o teste do olhinho é vermelho, sem a catarata da rubéola) e a lesão é cicatricial inativa ao nascimento, sem exsudatos inflamatórios em farol de neblina (que caracterizam a lesão ativa da toxoplasmose).',
    comentariosAlternativas: {
      A: 'Correta. A atrofia coriorretiniana macular com halo pigmentar e atrofia óptica é a principal lesão oftalmológica do Zika, provocando perda visual central.',
      B: 'Incorreta. Retinoblastoma é neoplasia intraocular que se apresenta como massa tumoral esbranquiçada e leucocoria, e não atrofia macular congênita por Zika.',
      C: 'Incorreta. A lesão não é transitória nem inócua; é cicatricial e causa déficit permanente na visão central do paciente.',
      D: 'Incorreta. Pomadas profiláticas neonatais não causam necrose coriorretiniana macular profunda.',
    },
  },
  {
    id: 'ped-neo2-041',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico Diferencial TORCHS: Padrões Comparativos de Calcificações Intracranianas',
    isRevisao: false,
    enunciado:
      'Em uma discussão de casos clínicos da Residência de Pediatria, o preceptor projeta os exames de neuroimagem (tomografia computadorizada de crânio) de três recém-nascidos portadores de infecções congênitas distintas:\n- Paciente 1: Apresenta calcificações periventriculares delineando as paredes dos ventrículos laterais;\n- Paciente 2: Apresenta calcificações dispersas e difusas distribuídas aleatoriamente por todo o parênquima cerebral e gânglios da base;\n- Paciente 3: Apresenta calcificações concentradas predominantemente na junção córtico-subcortical associadas a lisencefalia.\nConsiderando a correlação anátomo-radiológica clássica dessas infecções, a qual patógeno corresponde com maior probabilidade cada paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Paciente 1: Citomegalovírus; Paciente 2: Toxoplasma gondii; Paciente 3: Vírus Zika.',
      },
      {
        id: 'B',
        texto:
          'Paciente 1: Toxoplasma gondii; Paciente 2: Citomegalovírus; Paciente 3: Vírus Herpes Simples.',
      },
      {
        id: 'C',
        texto:
          'Paciente 1: Treponema pallidum; Paciente 2: Vírus da Rubéola; Paciente 3: Citomegalovírus.',
      },
      {
        id: 'D',
        texto:
          'Paciente 1: Vírus Zika; Paciente 2: Parvovírus B19; Paciente 3: Toxoplasma gondii.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Quadro Comparativo Clássico de Neuroimagem no Grupo TORCHS (Tema de Alta Recorrência em Concursos):\n\n1. Citomegalovírus (CMV) -> CALCIFICAÇÕES PERIVENTRICULARES:\n   - O tropismo viral pela matriz germinativa periventricular e células subependimárias leva a necrose local e deposição de cálcio margeando os ventrículos laterais e 3º ventrículo;\n\n2. Toxoplasmose Congênita (Toxoplasma gondii) -> CALCIFICAÇÕES DIFUSAS NO PARÊNQUIMA:\n   - A proliferação dos taquizoítos provoca microfocos de encefalite necrosante multifocal espalhada desordenadamente pela substância branca, córtex cerebral e gânglios da base;\n\n3. Síndrome do Vírus Zika -> CALCIFICAÇÕES NA JUNÇÃO CÓRTICO-SUBCORTICAL:\n   - O ataque às células precursoras corticais gera calcificações na interface entre a substância cinzenta e a substância branca subjacente, associado a defeitos marcantes de migração (paquigiria, lisencefalia).',
    comentariosAlternativas: {
      A: 'Correta. Paciente 1 = CMV (periventricular); Paciente 2 = Toxoplasmose (difusa); Paciente 3 = Zika (junção córtico-subcortical).',
      B: 'Incorreta. Inverte o padrão clássico do CMV (que é periventricular) com a Toxoplasmose (que é difusa).',
      C: 'Incorreta. A sífilis congênita não costuma causar calcificações intracranianas típicas e a rubéola raramente apresenta calcificações exuberantes.',
      D: 'Incorreta. O Zika tem padrão subcortical e não periventricular, e parvovírus não causa calcificações difusas em parênquima.',
    },
  },
  {
    id: 'ped-neo2-042',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico Diferencial: Síndrome do Recém-Nascido "Blueberry Muffin"',
    isRevisao: false,
    enunciado:
      'Um recém-nascido pré-termo tardio (35 semanas) apresenta ao nascimento erupção cutânea disseminada caracterizada por múltiplas pápulas e nódulos violáceos e azul-avermelhados, não pruriginosos, de consistência firme à palpação, localizados no tronco, dorso e membros, configurando a clássica apresentação de "bebê blueberry muffin" (bebê bolo de mirtilo). O pediatra sabe que essa manifestação decorre de hematopoiese extramedular cutânea residual persistente. Dentre as opções abaixo, qual grupo contempla as principais causas infecciosas congênitas e neoplásicas que compõem o diagnóstico diferencial dessa condição?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Citomegalovírus, Rubéola congênita, Toxoplasmose congênita, Neuroblastoma congênito metastático e Leucemia congênita.',
      },
      {
        id: 'B',
        texto:
          'Doença da membrana hialina, taquipneia transitória do recém-nascido e hérnia diafragmática congênita.',
      },
      {
        id: 'C',
        texto:
          'Icterícia fisiológica, síndrome de Gilbert e estenose hipertrófica de piloro.',
      },
      {
        id: 'D',
        texto:
          'Deficiência de glicose-6-fosfato desidrogenase, síndrome de Down e fenda palatina isolada.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Síndrome do Bebê "Blueberry Muffin" (Bolo de Mirtilo):\n\n1. Fisiopatologia:\n   - Durante o início da vida fetal (até o 5º mês), a derme participa transitoriamente da hematopoiese fetal fisiológica;\n   - Diante de uma agressão intrauterina grave (estresse infeccioso grave com anemia hemolítica e trombocitopenia), ocorre a persistência ou reativação patológica da HEMATOPOIESE EXTRAMEDULAR CUTÂNEA na derme;\n   - As lesões correspondem histologicamente a ninhos dérmicos de células eritroides e mieloides em maturação, assumindo coloração vermelho-azulada ou purpúrica;\n\n2. Diagnóstico Diferencial Essencial:\n   - Causas Infecciosas (Grupo TORCHS): Citomegalovírus (atualmente a principal causa infecciosa), Rubéola congênita (descrição histórica inicial na epidemia de 1964) e Toxoplasmose congênita;\n   - Causas Hematológicas/Neoplásicas (Infiltração neoplásica primária da pele): Leucemia Congênita (geralmente Leucemia Mieloide Aguda) e Neuroblastoma Congênito com metástases cutâneas (Estágio MS / IV-S).',
    comentariosAlternativas: {
      A: 'Correta. As causas clássicas de blueberry muffin são as infecções do TORCHS (CMV, Rubéola, Toxoplasmose) e neoplasias congênitas (Leucemia congênita e Neuroblastoma).',
      B: 'Incorreta. São patologias respiratórias e anatômicas neonatais que não causam lesões cutâneas hematopoéticas.',
      C: 'Incorreta. Distúrbios benignos do metabolismo da bilirrubina e estenose pilórica não produzem lesões dermatológicas purpúricas.',
      D: 'Incorreta. Deficiência de G6PD e fenda palatina não geram nódulos azulados de eritropoiese extramedular.',
    },
  },
  {
    id: 'ped-neo2-043',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico Diferencial: Microcefalia versus Hidrocefalia nas Infecções Congênitas',
    isRevisao: false,
    enunciado:
      'O perímetro cefálico ao nascimento é um parâmetro antropométrico crucial na diferenciação clínica das infecções congênitas. Enquanto algumas afecções cursam tipicamente com parada do crescimento cerebral e microcefalia verdadeira, outras provocam processo inflamatório obstrutivo das vias liquóricas gerando hidrocefalia e macrocrania. Ao comparar a Toxoplasmose Congênita com a Síndrome do Vírus Zika e o Citomegalovírus Congênito, qual alternativa descreve corretamente o padrão habitual de perímetro cefálico e alteração volumétrica ventricular?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A Toxoplasmose congênita cursa classicamente com hidrocefalia obstrutiva hipertensiva (estenose do aqueduto de Sylvius com aumento do perímetro cefálico e fontanela tensa), enquanto o Vírus Zika e o CMV cursam tipicamente com microcefalia e ventriculomegalia passiva "ex-vácuo" por atrofia e perda de massa encefálica.',
      },
      {
        id: 'B',
        texto:
          'A Toxoplasmose cursa exclusivamente com microcefalia precoce com fechamento de suturas, enquanto o Vírus Zika induz hiperprodução liquórica primária e fontanela abaulada em 100% dos casos.',
      },
      {
        id: 'C',
        texto:
          'O CMV causa hidrocefalia congênita hipertensiva em todos os pacientes, sendo obrigatória a colocação de derivação ventrículo-peritoneal no 1º dia de vida.',
      },
      {
        id: 'D',
        texto:
          'Nenhuma infecção congênita altera a dinâmica ventricular ou o perímetro cefálico do neonato.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Macrocefalia/Hidrocefalia versus Microcefalia nas Infecções Congênitas:\n\n1. Toxoplasmose Congênita (Tétrade de Sabin):\n   - A multiplicação do parasita ependimário deflagra ependimite inflamatória necrosante com estenose ou obstrução mecânica do Aqueduto de Sylvius;\n   - Consequência: HIDROCEFALIA HIPERTENSIVA OBSTRUTIVA Supratentorial (ventrículos laterais e 3º ventrículo dilatados sob alta pressão), com MACROCEFALIA, fontanela anterior abaulada/tensa, diástase de suturas cranianas e necessidade frequente de neurocirurgia (derivação ventrículo-peritoneal - DVP);\n\n2. Síndrome do Vírus Zika e Citomegalovírus:\n   - O mecanismo primário é a interrupção da proliferação celular e a necrose massiva de progenitores córtico-subcorticais;\n   - Consequência: MICROCEFALIA (perímetro cefálico reduzido abaixo do percentil 3 ou escore Z < -2 a -3) e a ventriculomegalia observada na imagem é DILATAÇÃO PASSIVA EX-VÁCUO (espaço preenchido por líquido decorrente da falta de cérebro ao redor), com fontanela plana ou deprimida e calota óssea colapsada.',
    comentariosAlternativas: {
      A: 'Correta. A toxoplasmose cursa com hidrocefalia obstrutiva por estenose de aqueduto, ao passo que Zika e CMV provocam microcefalia com dilatação ventricular ex-vácuo.',
      B: 'Incorreta. A marca da toxoplasmose na tétrade de Sabin é a hidrocefalia (macrocefalia), e o Zika cursa com microcefalia severa e fontanela deprimida.',
      C: 'Incorreta. O CMV causa tipicamente microcefalia e calcificações periventriculares, raramente exigindo DVP.',
      D: 'Incorreta. Alterações do perímetro cefálico e dos ventrículos são os achados neurobiológicos mais marcantes desse grupo de doenças.',
    },
  },
  {
    id: 'ped-neo2-044',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico Diferencial TORCHS: Semiótica Oftalmológica Comparativa',
    isRevisao: false,
    enunciado:
      'A avaliação do fundo de olho e do segmento anterior ocular fornece pistas diagnósticas altamente específicas no diagnóstico diferencial das infecções congênitas no período neonatal. Correlacione a lesão oftalmológica descrita ao seu respectivo agente etiológico:\nI. Coriorretinite exsudativa necrosante em "farol de neblina" (lesão satélite ativa adjacente a cicatriz coriorretiniana com vítreo turvo);\nII. Catarata congênita com leucocoria e retinopatia com aspecto pontilhado fino em "sal e pimenta";\nIII. Cicatriz macular atrófica escavada com anel negro hiperpigmentado foveal e nervo óptico pálido;\nIV. Ceratoconjuntivite com vesículas perioculares e dendritos epiteliais na córnea.\nA correspondência etiológica correta para I, II, III e IV é, respectivamente:',
    alternativas: [
      {
        id: 'A',
        texto:
          'I: Toxoplasma gondii; II: Vírus da Rubéola; III: Vírus Zika; IV: Vírus Herpes Simples (HSV).',
      },
      {
        id: 'B',
        texto:
          'I: Vírus Herpes Simples; II: Treponema pallidum; III: Citomegalovírus; IV: Vírus da Rubéola.',
      },
      {
        id: 'C',
        texto:
          'I: Vírus da Rubéola; II: Vírus Zika; III: Toxoplasma gondii; IV: Citomegalovírus.',
      },
      {
        id: 'D',
        texto:
          'I: Citomegalovírus; II: Toxoplasma gondii; III: Vírus da Rubéola; IV: Vírus Zika.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Semiótica Oftalmológica Comparativa no Grupo TORCHS:\n\n1. Toxoplasmose Congênita (Toxoplasma gondii):\n   - Lesão patognomônica: CORIORRETINITE EXSUDATIVA, que na fase aguda exibe lesão esbranquiçada/amarelada com borramento vítreo por exsudação ("farol na neblina"), frequentemente multifocal ou satélite em polo posterior e mácula;\n\n2. Rubéola Congênita:\n   - CATARATA CONGÊNITA (opacificação do cristalino com reflexo vermelho ausente) e RETINOPATIA EM "SAL E PIMENTA" (pontilhado pigmentar difuso benigno sem acometimento vascular);\n\n3. Síndrome do Vírus Zika:\n   - LESÃO MACULAR ATROFICA CIRCUNSCRITA com anel de hiperplasia pigmentar peri-foveal e palidez/hipoplasia de papila (disco óptico);\n\n4. Herpes Simples Neonatal (HSV):\n   - CERATITE DENDRÍTICA / CERATOCONJUNTIVITE com úlceras dendríticas coradas pela fluoresceína e vesículas palpebrais herpéticas.',
    comentariosAlternativas: {
      A: 'Correta. A correlação I = Toxoplasmose, II = Rubéola, III = Zika e IV = HSV reproduz exatamente a semiologia oftalmológica de referência.',
      B: 'Incorreta. HSV não causa a imagem em farol de neblina típica da toxoplasmose e sífilis não gera catarata com sal e pimenta.',
      C: 'Incorreta. A rubéola não se apresenta como lesão exsudativa em farol de neblina e o Zika não se correlaciona à catarata congênita primária.',
      D: 'Incorreta. O CMV pode causar retinite necrosante hemorrágica ("pizza de queijo com molho de tomate"), mas I descreve a clássica lesão toxoplásmica.',
    },
  },
  {
    id: 'ped-neo2-045',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico Diferencial TORCHS: Malformações Cardíacas Estruturais',
    isRevisao: false,
    enunciado:
      'Durante a semiologia do aparelho cardiovascular na sala de parto e alojamento conjunto, a identificação de cardiopatia congênita estrutural clássica direciona a investigação etiológica das infecções congênitas. Qual dos agentes do grupo TORCHS é o único reconhecido por provocar malformações cardiovasculares embrionárias estruturais anatômicas típicas (especialmente Persistência do Canal Arterial e Estenose de Ramos Pulmonares) como parte integrante da sua síndrome malformativa primária?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Vírus da Rubéola.',
      },
      {
        id: 'B',
        texto:
          'Toxoplasma gondii.',
      },
      {
        id: 'C',
        texto:
          'Citomegalovírus.',
      },
      {
        id: 'D',
        texto:
          'Vírus Zika.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Cardiopatias Congênitas no Grupo TORCHS:\n- A RUBÉOLA é a clássica e notória infecção viral teratogênica capaz de interferir diretamente na organogênese vascular e septação cardíaca durante as primeiras 8 a 10 semanas de vida embrionária;\n- O vírus da rubéola infecta as células endoteliais dos vasos em desenvolvimento, provocando necrose focal, fragmentação da lâmina elástica e proliferação intimal obstrutiva;\n- Principais cardiopatias estruturais da Síndrome da Rubéola Congênita:\n  1. Persistência do Canal Arterial (PCA);\n  2. Estenose de artéria pulmonar (hipoplasia e estenoses periféricas dos ramos direito e esquerdo da pulmonar);\n  3. Comunicação Interventricular (CIV) e Estenose Aórtica (menos frequentes);\n- Por outro lado, Toxoplasma gondii, CMV e Vírus Zika atacam predominantemente tecidos em diferenciação celular (cérebro e retina), NÃO sendo causadores típicos de malformações estruturais congênitas primárias do coração.',
    comentariosAlternativas: {
      A: 'Correta. A rubéola congênita é a causa morfogênica de PCA e estenose de artéria pulmonar descrita na clássica síndrome de Gregg.',
      B: 'Incorreta. Toxoplasmose não interfere na organogênese dos arcos aórticos nem causa malformações cardíacas estruturais congênitas.',
      C: 'Incorreta. O citomegalovírus afeta cérebro, fígado e hematopoiese, sem associação teratogênica direta com cardiopatias congênitas clássicas.',
      D: 'Incorreta. O vírus Zika possui tropismo preferencial pelas células precursoras neurais, sem causar defeitos congênitos estruturais no coração.',
    },
  },
  {
    id: 'ped-neo2-046',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico Laboratorial Comparativo no Grupo TORCHS',
    isRevisao: false,
    enunciado:
      'Para confirmar laboratorialmente a infecção congênita em um recém-nascido sintomático com suspeita clínica de TORCHS, a escolha correta do método biológico e do espécime clínico é fundamental. Assinale a alternativa que correlaciona corretamente o patógeno congênito com o seu teste laboratorial padrão-ouro de escolha no neonato:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Citomegalovírus: PCR para DNA viral em urina ou saliva coletado antes de 21 dias de vida; Toxoplasmose: detecção de IgM e/ou IgA específicos no soro do recém-nascido e persistência de IgG além do 1º ano de vida; Herpes Simples: PCR para DNA de HSV nas lesões vesiculares, LCR e sangue periférico.',
      },
      {
        id: 'B',
        texto:
          'Citomegalovírus: VDRL no sangue do cordão umbilical; Toxoplasmose: hemocultura simples de sangue periférico; Herpes Simples: urocultura de jato médio.',
      },
      {
        id: 'C',
        texto:
          'Citomegalovírus: pesquisa de anticorpos IgG no líquido amniótico aos 6 meses; Toxoplasmose: coprocultura seriada para visualização de oocistos; Herpes Simples: teste tuberculínico PPD.',
      },
      {
        id: 'D',
        texto:
          'Citomegalovírus: biópsia de baço; Toxoplasmose: aspirado de medula óssea obrigatório; Herpes Simples: dosagem de proteína C reativa isolada.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Resumo dos Testes Diagnósticos Padrão-Ouro no Neonato para TORCHS:\n\n1. Citomegalovírus (CMV):\n   - Padrão-ouro: PCR para DNA de CMV em amostras de SALIVA ou URINA colhidas antes dos 21 dias de vida (janela que exclui contaminação pós-natal por leite materno);\n\n2. Toxoplasmose Congênita:\n   - Diagnóstico no RN: Pesquisa de anticorpos IgM e IgA específicos no soro venoso periférico do bebê (anticorpos IgM/IgA não ultrapassam a barreira placentária; sua presença indica produção imune ativa própria do concepto);\n   - Acompanhamento confirmatório: Monitoramento dos títulos de IgG até sua negativação ou persistência além dos 12 meses de vida (se persistir após 1 ano, comprova-se infecção congênita por produção endógena);\n\n3. Herpes Simples Neonatal (HSV):\n   - Padrão-ouro: Reação em Cadeia da Polimerase (PCR) para DNA de HSV-1 e HSV-2 em amostras de fluido de vesículas cutâneas, swab de mucosas (orofaringe, conjuntiva), sangue e líquor (LCR);\n\n4. Sífilis Congênita:\n   - Teste não treponêmico (VDRL sérico periférico) no RN em comparação com o materno no momento do parto (título >= 2 diluições maior no RN) e punção lombar.',
    comentariosAlternativas: {
      A: 'Correta. Sintetiza com exatidão os métodos padrão-ouro: PCR de CMV em urina/saliva (< 21 dias), IgM/IgA/persistência de IgG para toxoplasmose e PCR de HSV em lesões/líquor.',
      B: 'Incorreta. VDRL é teste para sífilis e não para CMV; toxoplasma é protozoário intracelular que não cresce em hemocultura simples.',
      C: 'Incorreta. Coprocultura não diagnostica toxoplasmose congênita em humanos e PPD diagnostica tuberculose.',
      D: 'Incorreta. Biópsia esplênica e aspirado medular são procedimentos invasivos descabidos na rotina de triagem de TORCHS.',
    },
  },
  {
    id: 'ped-neo2-047',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Farmacoterapia e Duração do Tratamento nas Infecções Congênitas',
    isRevisao: false,
    enunciado:
      'Um dos temas mais exigidos nas provas de Pediatria Neonatal é a duração e a escolha correta dos regimes farmacológicos nas infecções congênitas confirmadas. Correlacione a infecção congênita com a terapia farmacológica de escolha e sua duração preconizada pelo Ministério da Saúde e pelas sociedades científicas:\n1. Sífilis Congênita com neurossífilis;\n2. Toxoplasmose Congênita confirmada;\n3. Citomegalovírus Congênito sintomático;\n4. Encefalite por Herpes Simples Neonatal.\nQual alternativa apresenta a correlação correta de fármaco e duração para cada patologia?',
    alternativas: [
      {
        id: 'A',
        texto:
          '1: Penicilina G Cristalina IV por 10 dias; 2: Sulfadiazina + Pirimetamina + Ácido Folínico VO por 12 meses; 3: Valganciclovir VO por 6 meses; 4: Aciclovir IV por 21 dias.',
      },
      {
        id: 'B',
        texto:
          '1: Penicilina G Benzatina IM dose única; 2: Espiramicina VO por 14 dias; 3: Aciclovir VO por 1 ano; 4: Ganciclovir IV por 5 dias.',
      },
      {
        id: 'C',
        texto:
          '1: Ceftriaxona IV por 30 dias; 2: Azitromicina VO por 3 meses; 3: Oseltamivir VO por 7 dias; 4: Amoxicilina oral por 10 dias.',
      },
      {
        id: 'D',
        texto:
          '1: Penicilina G Cristalina IV por 12 meses; 2: Valganciclovir VO por 10 dias; 3: Sulfadiazina VO por 21 dias; 4: Aciclovir IV por 6 meses.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Quadro Farmacológico Fundamental das Infecções Congênitas:\n\n1. Sífilis Congênita (com acometimento neurológico/LCR alterado):\n   - PENICILINA G CRISTALINA intravenosa: 50.000 UI/kg/dose de 12/12h (1ª semana de vida) e 8/8h após;\n   - Duração: 10 DIAS COMPLETOS (se houver interrupção > 24h, reiniciar os 10 dias);\n\n2. Toxoplasmose Congênita:\n   - ESQUEMA TRÍPLICE: Sulfadiazina (100 mg/kg/dia) + Pirimetamina (1 mg/kg/dia) + Ácido Folínico (5 a 10 mg 3x/semana);\n   - Duração: 12 MESES ININTERRUPTOS (mesmo nos casos assintomáticos);\n\n3. Citomegalovírus Congênito Sintomático:\n   - VALGANCICLOVIR oral (16 mg/kg/dose de 12/12h);\n   - Duração: 6 MESES COMPLETOS;\n\n4. Herpes Simples Neonatal (Encefalite ou Disseminado):\n   - ACICLOVIR intravenoso (60 mg/kg/dia dividido de 8/8h);\n   - Duração: 21 DIAS (14 dias para a forma SEM localizada).',
    comentariosAlternativas: {
      A: 'Correta. Todas as drogas, vias e tempos de tratamento (10 dias, 12 meses, 6 meses e 21 dias) estão rigorosamente em consonância com as diretrizes.',
      B: 'Incorreta. Benzatina não trata neurossífilis, espiramicina não trata neonato com toxoplasmose e aciclovir não trata CMV.',
      C: 'Incorreta. Drogas e durações absurdas para o tratamento de infecções congênitas.',
      D: 'Incorreta. Inverte completamente os tempos e classes terapêuticas das respectivas doenças.',
    },
  },
  {
    id: 'ped-neo2-048',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome da Rubéola Congênita: Transmissão por Período Gestacional e Prevenção Epidemiológica',
    isRevisao: false,
    enunciado:
      'Uma médica residente de Pediatria prepara uma aula sobre infecções congênitas e compila dados sobre a relação entre o trimestre da gravidez em que ocorre a primoinfecção materna e o risco de malformações congênitas graves no concepto. Ao correlacionar o vírus da Rubéola e o Toxoplasma gondii, qual afirmativa expressa a dinâmica temporal correta de transmissão e gravidade?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Na Rubéola, a transmissão transplacentária e o risco de teratogênese grave são máximos no primeiro trimestre da gestação (especialmente nas primeiras 12 semanas), reduzindo-se acentuadamente após a 16ª-20ª semana; na Toxoplasmose, a taxa de transmissão vertical aumenta progressivamente do 1º para o 3º trimestre, porém a gravidade das sequelas fetais é inversamente proporcional, sendo máxima no 1º trimestre.',
      },
      {
        id: 'B',
        texto:
          'Tanto na rubéola quanto na toxoplasmose, a transmissão e a gravidade fetal são nulas no primeiro trimestre e atingem 100% de letalidade se adquiridas no momento do parto.',
      },
      {
        id: 'C',
        texto:
          'Na rubéola a infecção no 3º trimestre provoca a tétrade de Gregg completa em 95% dos fetos, enquanto a infecção no 1º trimestre é sempre inócua.',
      },
      {
        id: 'D',
        texto:
          'A placenta bloqueia completamente a passagem da rubéola durante o primeiro trimestre, ocorrendo transmissão exclusivamente no período periparto.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Dinâmica de Transmissão e Gravidade Gestacional:\n\n1. Vírus da Rubéola:\n   - O período crítico de maior risco de teratogênese é o PRIMEIRO TRIMESTRE (fase de organogênese embrionária);\n   - Se a infecção materna ocorre nas primeiras 8 a 12 semanas, a taxa de defeitos congênitos graves e abortamento ultrapassa 80 a 90%;\n   - A partir da 16ª a 20ª semana, o feto já completou a morfogênese e a taxa de malformações congênitas cai drasticamente (podendo ocorrer apenas surdez isolada ou déficit de crescimento);\n\n2. Toxoplasma gondii:\n   - A taxa de transmissão vertical é MENOR no 1º trimestre (cerca de 15 a 25%), devido à menor vascularização placentária e barreira mais espessa, mas quando o parasita ultrapassa a placenta, o dano fetal é MÁXIMO (morte fetal, aborto espontâneo ou Tétrade de Sabin clássica grave);\n   - Já no 3º trimestre, a transmissão é ALTA (60 a 80%) devido à grande área de troca feto-placentária, mas a infecção fetal resultante é geralmente SUBCLÍNICA ou leve ao nascimento.',
    comentariosAlternativas: {
      A: 'Correta. Descreve perfeitamente o comportamento biológico da rubéola (risco máximo de teratogênese no 1º trimestre) e da toxoplasmose (transmissão crescente, porém gravidade decrescente com o avançar da idade gestacional).',
      B: 'Incorreta. O primeiro trimestre é o período de maior agressão biológica e teratogênese tanto na rubéola quanto na toxoplasmose.',
      C: 'Incorreta. A infecção por rubéola no 3º trimestre raramente gera malformações anatômicas; a tétrade de Gregg decorre da agressão no 1º trimestre.',
      D: 'Incorreta. A placenta no 1º trimestre é amplamente permeável ao vírus da rubéola, causando vasculite nos vasos fetais.',
    },
  },
  {
    id: 'ped-neo2-049',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome Congênita pelo Vírus Zika: Diagnóstico Laboratorial e Sorologia no Neonato',
    isRevisao: false,
    enunciado:
      'Recém-nascido com microcefalia congênita (PC de 29 cm), sem calcificações periventriculares nem catarata, mas com alterações radiológicas de migração neuronal e calcificações córtico-subcorticais, nasce de mãe residente em área de transmissão ativa de arboviroses que apresentou quadro clínico compatível com Zika no 2º mês de gestação. De acordo com as diretrizes do Ministério da Saúde para investigação de casos suspeitos de Síndrome Congênita pelo Vírus Zika (SCZ), quais exames laboratoriais específicos devem ser solicitados na amostra de sangue do recém-nascido e qual método sorológico padrão é indicado para confirmar a presença de anticorpos neutralizantes específicos, descartando reação cruzada com dengue e febre amarela?',
    alternativas: [
      {
        id: 'A',
        texto:
          'RT-PCR para vírus Zika no sangue periférico e urina nas fases iniciais e sorologia IgM para Zika; quando houver dúvida diagnóstica por reação cruzada de anticorpos flavivirais, realiza-se o Teste de Neutralização por Redução de Placas (PRNT).',
      },
      {
        id: 'B',
        texto:
          'Urocultura simples e pesquisa de bacilos álcool-ácido resistentes (BAAR) no escarro induzido.',
      },
      {
        id: 'C',
        texto:
          'Teste rápido de lâmina com gota espessa para Plasmodium vivax e dosagem de amilase sérica.',
      },
      {
        id: 'D',
        texto:
          'Reação de Mantoux com PPD e dosagem de alfa-fetoproteína na urina de 24 horas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diagnóstico Laboratorial da Síndrome Congênita pelo Vírus Zika (Diretrizes Ministério da Saúde):\n\n1. Métodos Diretos (Moleculares):\n   - RT-PCR (Reverse Transcription Polymerase Chain Reaction) para detecção de RNA viral de Zika em sangue, líquor e urina do neonato;\n   - Embora a sensibilidade seja maior na fase de viremia ativa, nos casos de infecção congênita grave pode haver eliminação viral prolongada;\n\n2. Métodos Sorológicos e Reação Cruzada entre Flavivírus:\n   - Dosagem de anticorpos IgM específicos para Zika no sangue periférico e no LCR do recém-nascido (ELISA);\n   - Desafio Imunológico: Por ser um Flavivírus, o vírus Zika apresenta intensa REAÇÃO CRUZADA sorológica com outros flavivírus endêmicos no Brasil, como o vírus da Dengue e o vírus da Febre Amarela;\n   - Teste Padrão-Ouro Confirmatório de Alta Especificidade: Teste de Neutralização por Redução de Placas (PRNT - Plaque Reduction Neutralization Test), capaz de quantificar especificamente os anticorpos neutralizantes com alta acurácia e discriminar a infecção por Zika dos demais flavivírus.',
    comentariosAlternativas: {
      A: 'Correta. RT-PCR e sorologia IgM são os testes de triagem e o PRNT é o teste confirmatório padrão-ouro para afastar reações cruzadas.',
      B: 'Incorreta. Urocultura e BAAR são voltados para infecções bacterianas e tuberculose, sem valor para o diagnóstico do vírus Zika.',
      C: 'Incorreta. Gota espessa pesquisa malária, que não causa o fenótipo de SCZ.',
      D: 'Incorreta. PPD e alfa-fetoproteína não têm indicação no diagnóstico de arboviroses congênitas.',
    },
  },
  {
    id: 'ped-neo2-050',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Manejo Multidisciplinar e Reabilitação Auditiva Integrada no Grupo TORCHS',
    isRevisao: false,
    enunciado:
      'Lactente de 6 meses de vida, com diagnóstico estabelecido de Citomegalovírus congênito ao nascimento, completou tratamento antiviral com Valganciclovir por 6 meses com boa adesão e sem neutropenia grave. A avaliação audiológica seriada confirma surdez neurossensorial bilateral profunda sem ganho funcional após 3 meses de uso de Prótese Auditiva Individual (aparelho de amplificação sonora individual - AASI). Apresenta também atraso motor secundário à microcefalia, mantendo acompanhamento multiprofissional. Considerando as diretrizes de reabilitação e seguimento da Sociedade Brasileira de Pediatria e do Ministério da Saúde para lactentes com infecções congênitas e sequelas auditivas graves, qual intervenção médica e reabilitadora especializada está formalmente indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Encaminhamento precoce a serviço especializado de Otorrinolaringologia Pediátrica para avaliação e indicação de Implante Coclear, associado a fonoterapia intensiva e estimulação neuropsicomotora precoce.',
      },
      {
        id: 'B',
        texto:
          'Reinício de mais um ciclo de 12 meses de Valganciclovir oral, pois o antiviral é capaz de regenerar as células ciliadas mortas da cóclea.',
      },
      {
        id: 'C',
        texto:
          'Suspensão de qualquer intervenção auditiva ou fonoterapia até a criança atingir a idade de 10 anos para avaliação de alfabetização espontânea.',
      },
      {
        id: 'D',
        texto:
          'Indicação exclusiva de adenotonsilectomia cirúrgica bilateral para desobstrução mecânica da tuba auditiva.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Reabilitação Auditiva e Manejo Multidisciplinar no CMV e TORCHS:\n\n1. Indicação de Implante Coclear Precoce:\n   - Crianças com perda auditiva neurossensorial bilateral severa a profunda decorrente de infecção congênita por CMV que NÃO obtêm ganho funcional suficiente com AASI tradicional têm indicação formal de avaliação para IMPLANTE COCLEAR;\n   - Janela de Plasticidade Cerebral: O implante coclear deve ser realizado precocemente (idealmente por volta de 1 ano de vida, antes dos 2 a 3 anos), pois a estimulação precoce do córtex auditivo é indispensável para a aquisição da linguagem oral e desenvolvimento cognitivo;\n\n2. Limitações do Antiviral:\n   - O Valganciclovir administrado nos primeiros 6 meses impede a progressão da replicação viral e evita maiores perdas cocleares, mas NÃO É CAPAZ de regenerar mecanicamente células ciliadas cócleares ou gânglios espirais já lesados e fibrosados;\n   - Portanto, não se deve prescrever ciclos repetidos de antiviral para "tratar a sequela auditiva fixa";\n\n3. Abordagem Multiprofissional:\n   - Estimulação essencial com fonoterapia, fisioterapia motora, terapia ocupacional e apoio familiar dentro das redes de atenção à saúde da pessoa com deficiência do SUS.',
    comentariosAlternativas: {
      A: 'Correta. O implante coclear precoce associado à fonoterapia é a conduta indicada para perdas neurossensoriais profundas refratárias ao AASI.',
      B: 'Incorreta. Antivirais não regeneram células ciliadas danificadas e não há indicação de manter valganciclovir indefinidamente após os 6 meses.',
      C: 'Incorreta. Postergar a intervenção auditiva causa privação auditiva permanente do córtex e perda irreversível da capacidade de aquisição da linguagem.',
      D: 'Incorreta. Adenotonsilectomia é cirurgia para hipertrofia de amígdalas/adenoides com otite média com efusão (perda condutiva), não para perda neurossensorial coclear congênita.',
    },
  },
  {
    id: 'ped-neo2-051',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome do Desconforto Respiratório (SDR): Fisiopatologia e Tensão Superficial Alveolar',
    isRevisao: false,
    enunciado:
      'Um recém-nascido pré-termo de 29 semanas de idade gestacional, peso de nascimento de 1.180 g, evolui nos primeiros 30 minutos de vida com taquipneia progressiva, batimento de asas nasais, tiragem intercostal e subcostal acentuada e gemência expiratória audível sem estetoscópio. A oximetria de pulso revela saturação de oxigênio de 82% em ar ambiente. A fisiopatologia primária da Síndrome do Desconforto Respiratório (Doença da Membrana Hialina) decorre de qual mecanismo celular e biofísico?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Deficiência quantitativa e qualitativa de surfactante pulmonar sintetizado pelos pneumócitos tipo II, acarretando aumento da tensão superficial na interface ar-líquido alveolar e colapso alveolar expiratório progressivo (atelectasias difusas).',
      },
      {
        id: 'B',
        texto:
          'Hiperprodução e acúmulo patológico de muco espesso pelas células caliciformes brônquicas secundário a mutação congênita do canal CFTR.',
      },
      {
        id: 'C',
        texto:
          'Infiltração neutrofílica alveolar primária mediada por deposição de imunocomplexos circulantes com destruição irreversível dos capilares pulmonares.',
      },
      {
        id: 'D',
        texto:
          'Fechamento anatômico congênito prematuro do ducto arterioso com sobrecarga hidrostática aguda e edema pulmonar cardiogênico fulminante.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisiopatologia da Síndrome do Desconforto Respiratório (SDR / Doença da Membrana Hialina):\n\n1. Produção e Função do Surfactante Pulmonar:\n   - O surfactante pulmonar é uma mistura complexa de fosfolipídios (principalmente dipalmitoilfosfatidilcolina - DPPC) e apoproteínas específicas (SP-A, SP-B, SP-C e SP-D), sintetizado e armazenado nos corpos lamelares dos PNEUMÓCITOS TIPO II a partir da 20ª-24ª semana de gestação, atingindo maturidade biológica funcional após a 34ª-35ª semana;\n   - Função biofísica primordial: reduzir a tensão superficial alveolar na interface ar-líquido para valores próximos de zero ao final da expiração;\n   - De acordo com a Lei de Laplace ($P = 2T / r$), quanto menor o raio alveolar ($r$), maior a pressão de colapso necessária para mantê-lo aberto se a tensão superficial ($T$) for constante;\n\n2. Consequências da Deficiência de Surfactante no Prematuro:\n   - Tensão superficial persistentemente elevada;\n   - Colapso alveolar expiratório maciço e progressivo (atelectasias difusas e perda da Capacidade Residual Funcional - CRF);\n   - Queda drástica da complacência pulmonar ("pulmão rígido");\n   - Desigualdade da relação ventilação-perfusão (V/Q) com intenso SHUNT intrapulmonar da direita para a esquerda;\n   - Hipoxemia grave, hipercapnia e acidose mista;\n   - A isquemia e a lesão das células endoteliais e epiteliais levam ao extravasamento de plasma com fibrina para o lúmen alveolar, formando as clássicas "membranas hialinas".',
    comentariosAlternativas: {
      A: 'Correta. A imaturidade dos pneumócitos tipo II com falta de surfactante eleva a tensão superficial e causa atelectasia expiratória difusa.',
      B: 'Incorreta. Esse é o mecanismo da fibrose cística, que não se manifesta como desconforto respiratório precoce por colapso alveolar no prematuro extremo.',
      C: 'Incorreta. A SDR não decorre de mecanismo imunomediado por imunocomplexos, mas sim de imaturidade metabólica e biofísica pulmonar.',
      D: 'Incorreta. O canal arterial no prematuro com SDR tende a permanecer aberto (PCA patência) e não prematuramente fechado.',
    },
  },
  {
    id: 'ped-neo2-052',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome do Desconforto Respiratório: Fatores de Risco e o Papel do Diabetes Materno',
    isRevisao: false,
    enunciado:
      'Uma gestante portadora de Diabetes Mellitus pré-gestacional com controle glicêmico inadequado (hemoglobina glicada de 9,8%) dá à luz por cesariana eletiva sem trabalho de parto um concepto macrossômico de 35 semanas de idade gestacional (peso: 3.900 g). Pouco após o nascimento, o recém-nascido desenvolve quadro grave de desconforto respiratório com necessidade de oxigenoterapia em concentrações progressivamente crescentes e radiografia de tórax típica de doença da membrana hialina. Por que os filhos de mães diabéticas descompensadas apresentam risco aumentado de desenvolver Síndrome do Desconforto Respiratório mesmo em idades gestacionais mais avançadas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O hiperinsulinismo fetal provocado pela hiperglicemia materna crônica antagoniza os efeitos biológicos do cortisol sobre os pneumócitos tipo II, inibindo a expressão gênica e a síntese das proteínas e fosfolipídios do surfactante pulmonar.',
      },
      {
        id: 'B',
        texto:
          'A insulina fetal estimula diretamente a hipertrofia e fibrose precoce dos septos alveolares com destruição lítica de todos os alvéolos pulmonares.',
      },
      {
        id: 'C',
        texto:
          'O diabetes materno promove consumo enzimático acelerado do surfactante por ativação direta de amilases intrapulmonares fetais.',
      },
      {
        id: 'D',
        texto:
          'Filhos de mães diabéticas nascem invariavelmente sem árvore brônquica terminal desenvolvida, independente da idade gestacional.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Relação Fisiopatológica entre Diabetes Materno e Síndrome do Desconforto Respiratório (SDR):\n- O diabetes materno descompensado é um fator de risco clássico e independente para SDR neonatal;\n- Fisiopatologia (Hipótese de Pedersen):\n  1. A glicose materna atravessa livremente a barreira placentária por difusão facilitada, gerando HIPERGLICEMIA FETAL crônica;\n  2. A insulina materna NÃO atravessa a placenta. O pâncreas fetal responde à sobrecarga de glicose com hiperplasia das ilhotas pancreáticas e HIPERINSULINISMO FETAL acentuado;\n  3. O cortisol fetal é o principal hormônio endógeno responsável por estimular a transcrição gênica das proteínas do surfactante (SP-A e SP-B) e a atividade das enzimas que formam a dipalmitoilfosfatidilcolina nos pneumócitos tipo II;\n  4. Níveis elevados de insulina fetal atuam como um potente ANTAGONISTA BIOQUÍMICO DO CORTISOL a nível nuclear nos pneumócitos tipo II, bloqueando a síntese do surfactante pulmonar;\n- Consequência: O feto de mãe diabética pode comportar-se como se fosse várias semanas mais prematuro do ponto de vista respiratório, desenvolvendo SDR mesmo quando nasce entre 34 e 36 semanas (ou até a termo precoce), especialmente se o parto for cesárea eletiva sem o estresse do trabalho de parto.',
    comentariosAlternativas: {
      A: 'Correta. O hiperinsulinismo fetal bloqueia a ação estimuladora do cortisol sobre a maturação dos pneumócitos tipo II e a síntese do surfactante.',
      B: 'Incorreta. A insulina atua como fator de crescimento somático (macrossomia, organomegalia) e bloqueio da maturação bioquímica, não causando lise alveolar.',
      C: 'Incorreta. Amilases não degradam fosfolipídios de surfactante pulmonar.',
      D: 'Incorreta. A ramificação brônquica anatômica completa-se na fase pseudoglandular e canalicular, estando preservada no feto diabético.',
    },
  },
  {
    id: 'ped-neo2-053',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome do Desconforto Respiratório: Fatores Protetores e Maturação Pulmonar Acelerada',
    isRevisao: false,
    enunciado:
      'Em uma maternidade de alto risco, quatro gestantes entram em trabalho de parto prematuro espontâneo na 31ª semana de gestação. O neonatologista de plantão revisa os prontuários obstétricos para antecipar o risco respiratório dos neonatos. Dentre as condições maternas e fetais a seguir, qual está associada à maturação pulmonar fetal acelerada e menor incidência relativa de Síndrome do Desconforto Respiratório por promover estresse fetal crônico intraútero?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Insuficiência placentária crônica associada à pré-eclâmpsia materna grave com restrição de crescimento intrauterino (RCIU).',
      },
      {
        id: 'B',
        texto:
          'Cesariana eletiva sem contrações em gestação gemelar não complicada com ganho ponderal fetal no percentil 90.',
      },
      {
        id: 'C',
        texto:
          'Aloimunização materna pelo fator Rh com anemia hemolítica fetal aguda grave e hidropisia.',
      },
      {
        id: 'D',
        texto:
          'Diabetes gestacional descompensado com macrossomia fetal e polidrâmnio.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fatores que Modulam a Maturação Pulmonar e a Síntese de Surfactante:\n\n1. Fatores de Risco Aumentado para SDR (Inibem ou retardam a maturação):\n   - Prematuridade;\n   - Diabetes materno (hiperinsulinismo fetal antagoniza o cortisol);\n   - Cesariana eletiva sem trabalho de parto (ausência da descarga adrenérgica e de esteroides do parto);\n   - Sexo masculino (andrógenos retardam a síntese de surfactante);\n   - Asfixia perinatal e hipotermia (inativam o surfactante);\n   - Gestação múltipla e hidropisia fetal;\n\n2. Fatores "Protetores" / Aceleradores da Maturação Pulmonar (Estresse Crônico Intrauterino):\n   - Pré-eclâmpsia crônica e hipertensão arterial materna crônica;\n   - Restrição de Crescimento Intrauterino (RCIU) por insuficiência placentária crônica;\n   - Rotura Prematura de Membranas Ovulares (RPMO) prolongada (> 24-48 horas);\n   - Tabagismo materno crônico;\n   - Mecanismo biológico: O estresse hipóxico/isquêmico fetal crônico intrauterino estimula o eixo hipotálamo-hipófise-adrenal do feto, promovendo hipersecreção endógena antecipada de CORTISOL FETAL, o que acelera precocemente a diferenciação funcional dos pneumócitos tipo II e a síntese de surfactante.',
    comentariosAlternativas: {
      A: 'Correta. O estresse crônico induzido pela pré-eclâmpsia/RCIU eleva o cortisol fetal e acelera a maturação dos pneumócitos tipo II.',
      B: 'Incorreta. A cesárea eletiva sem trabalho de parto e a gemelaridade são fatores de risco reconhecidos para SDR.',
      C: 'Incorreta. Hidropisia fetal é causa de disfunção e imaturidade pulmonar grave com altíssimo risco de insuficiência respiratória.',
      D: 'Incorreta. O diabetes com macrossomia é o principal fator metabólico inibidor da maturação pulmonar fetal.',
    },
  },
  {
    id: 'ped-neo2-054',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome do Desconforto Respiratório: Fisiopatologia da Gemência Expiratória',
    isRevisao: false,
    enunciado:
      'Um prematuro de 30 semanas de gestação, pesando 1.350 g, encontra-se sob observação na incubadora aquecida da UTI Neonatal. Durante o exame físico respiratório, o médico observa que a cada ciclo expiratório o neonato emite um som audível (gemência expiratória). O plantonista explica aos internos que a gemência expiratória não é apenas um sinal de gravidade clínica, mas representa um mecanismo adaptativo fisiológico primordial. Qual é o papel biológico desse mecanismo respiratório na SDR?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ocorre o fechamento parcial das cordas vocais (glote) durante a expiração ativa, gerando uma pressão positiva expiratória final intrínseca (PEEP endógena) com o intuito de prevenir o colapso dos alvéolos instáveis e manter a capacidade residual funcional (CRF).',
      },
      {
        id: 'B',
        texto:
          'Representa a vibração mecânica de corpos estranhos aspirados no esôfago distal durante as incursões inspiratórias.',
      },
      {
        id: 'C',
        texto:
          'Resulta do relaxamento voluntário dos músculos intercostais que permite o esvaziamento completo e imediato de todo o ar pulmonar.',
      },
      {
        id: 'D',
        texto:
          'É causada por paralisia congênita permanente das pregas vocais decorrente de trauma de parto na laringe.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisiologia da Gemência Expiratória na Síndrome do Desconforto Respiratório:\n- A gemência expiratória (grunting) é um dos achados mais característicos e refinados da semiótica neonatal (pontuando 1 ou 2 no Boletim de Silverman-Andersen);\n- Mecanismo Fisiológico:\n  - O recém-nascido com deficiência de surfactante tem grande propensão ao colapso alveolar expiratório maciço (atelectasias a cada exalação);\n  - Para combater esse colapso, o bebê fecha parcialmente a sua glote (aduz as cordas vocais) durante a fase média e final da expiração contra a musculatura abdominal que se contrai;\n  - Esse fechamento glótico parcial retarda o fluxo aéreo expiratório e gera uma PRESSÃO POSITIVA EXPIRATÓRIA FINAL (PEEP intrínseca ou endógena);\n  - Essa PEEP endógena eleva a pressão transpulmonar, reabre alvéolos colapsados, evita a perda total de volume alveolar expiratório e preserva a Capacidade Residual Funcional (CRF), melhorando as trocas gasosas e atenuando a hipoxemia;\n  - O ruído emitido (gemido) é o som do ar sob pressão forçado a passar através da rima glótica semifechada.',
    comentariosAlternativas: {
      A: 'Correta. A gemência expiratória resulta do fechamento parcial da glote criando PEEP intrínseca para evitar o colapso alveolar expiratório e manter a CRF.',
      B: 'Incorreta. Não se relaciona a corpos estranhos no esôfago; é um mecanismo ativo laríngeo-respiratório.',
      C: 'Incorreta. O objetivo do neonato é justamente NÃO esvaziar completamente o pulmão para evitar o colabamento alveolar.',
      D: 'Incorreta. Não se trata de paralisia de pregas vocais, mas de um reflexo compensatório fisiológico ativo.',
    },
  },
  {
    id: 'ped-neo2-055',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome do Desconforto Respiratório: Padrão Radiológico Típico',
    isRevisao: false,
    enunciado:
      'Recém-nascido de 28 semanas de idade gestacional, internado na UTI Neonatal com 2 horas de vida por insuficiência respiratória progressiva, é submetido à radiografia de tórax no leito. O laudo radiológico descreve: "Campos pulmonares com redução volumétrica simétrica (visualizam-se 6 arcos costais posteriores), hipotransparência pulmonar homogênea com infiltrado reticulogranular fino difuso distribuído bilateralmente (aspecto em vidro fosco / vidro moído) associado a broncogramas aéreos evidentes que ultrapassam os limites da silhueta cardíaca". Qual é a patologia neonatal clássica que apresenta exatamente este padrão radiológico?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome do Desconforto Respiratório do Recém-Nascido (Doença da Membrana Hialina).',
      },
      {
        id: 'B',
        texto:
          'Taquipneia Transitória do Recém-Nascido.',
      },
      {
        id: 'C',
        texto:
          'Síndrome de Aspiração de Mecônio.',
      },
      {
        id: 'D',
        texto:
          'Enfisema Lobar Congênito.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Achados Radiológicos Clássicos da Síndrome do Desconforto Respiratório (SDR):\n\n1. Infiltrado Reticulogranular Fino Difuso ("Vidro Fosco" / "Vidro Moído"):\n   - Decorre da alternância microscópica entre microatelectasias alveolares difusas (pontos opacos densos) e bronquíolos terminais dilatados (áreas lúcidas);\n\n2. Broncogramas Aéreos Visíveis e Conspícuos:\n   - Ocorre porque os brônquios e bronquíolos maiores permanecem pérvios e cheios de ar, contrastando fortemente contra o parênquima alveolar adjacente densamente colapsado e atelectásico. Esses broncogramas frequentemente estendem-se além da silhueta cardíaca até a periferia pulmonar;\n\n3. Hipoinsuflação / Redução do Volume Pulmonar:\n   - Como não há surfactante para manter a CRF, o volume pulmonar diminui drasticamente, observando-se habitualmente menos de 7 a 8 arcos costais posteriores acima das cúpulas diafragmáticas;\n\n4. Apagamento das Bordas Cardíacas (Nos casos graves - Grau IV / "Pulmão Branco"):\n   - A opacificação completa dos campos pulmonares funde-se à silhueta cardíaca e do diafragma, impossibilitando a delimitação do mediastino.',
    comentariosAlternativas: {
      A: 'Correta. O padrão reticulogranular fino em vidro fosco com broncogramas aéreos e hipoinsuflação é patognomônico da Doença da Membrana Hialina.',
      B: 'Incorreta. A TTRN cursa com hiperinsuflação pulmonar, congestão peri-hilar e líquido na cisura interlobar (cisurite), sem redução volumétrica.',
      C: 'Incorreta. A aspiração meconial cursa com infiltrado grosseiro nodular irregular ("em algodão") alternado com áreas de hiperinsuflação e enfisema compensatório em RN a termo/pós-termo.',
      D: 'Incorreta. O enfisema lobar congênito apresenta hipertransparência e hiperinsuflação localizada em um lobo com desvio contralateral do mediastino.',
    },
  },
  {
    id: 'ped-neo2-056',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome do Desconforto Respiratório: Interpretação de Gasometria Arterial e Acidose Mista',
    isRevisao: false,
    enunciado:
      'Um recém-nascido prematuro de 27 semanas de gestação, com 3 horas de vida, sob CPAP nasal com PEEP de 5 cmH2O e FiO2 de 50%, apresenta piora do esforço respiratório com gemência contínua e tiragens graves. A gasometria arterial colhida através de punção radial revela: pH: 7,12; PaCO2: 68 mmHg; PaO2: 44 mmHg; HCO3-: 18 mEq/L; Base Excess (BE): -8,5 mEq/L; e Lactato sérico: 4,8 mmol/L. Como deve ser interpretado esse distúrbio acidobásico e qual a sua correlação clínica na SDR?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Acidose mista (respiratória e metabólica) grave com hipoxemia importante; o componente respiratório reflete retenção aguda de CO2 por hipoventilação alveolar e atelectasias difusas, enquanto o componente metabólico decorre de acidose lática secundária à hipóxia tecidual e excessivo trabalho muscular respiratório.',
      },
      {
        id: 'B',
        texto:
          'Alcalose respiratória pura compensada com retenção renal crônica de bicarbonato por insuficiência adrenal.',
      },
      {
        id: 'C',
        texto:
          'Acidose metabólica pura com hiperventilação compensatória extrema e eliminação excessiva de CO2 pelos pulmões.',
      },
      {
        id: 'D',
        texto:
          'Gasometria rigorosamente normal para a idade gestacional, sem necessidade de alteração de suporte ventilatório.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Interpretação da Gasometria Arterial na SDR Grave:\n- Parâmetros analisados:\n  - pH = 7,12 (Acidemia grave, valor de referência neonatal: 7,30 a 7,40);\n  - PaCO2 = 68 mmHg (Hipercapnia acentuada, VR: 40 a 50 mmHg -> Acidose Respiratória);\n  - PaO2 = 44 mmHg em FiO2 de 50% (Hipoxemia importante, PaO2 esperada > 50-60 mmHg com relação PaO2/FiO2 = 88 mmHg);\n  - HCO3- = 18 mEq/L e BE = -8,5 mEq/L (Consumo de bases -> Acidose Metabólica);\n  - Lactato = 4,8 mmol/L (Hiperlactatemia acentuada);\n- Diagnóstico do Distúrbio:\n  - ACIDOSE MISTA (Respiratória + Metabólica);\n- Fisiopatologia:\n  - O componente respiratório (hipercapnia) decorre da incapacidade do pulmão rígido e colapsado de ventilar adequadamente os alvéolos (hipoventilação alveolar global e aumento do espaço morto funcional);\n  - O componente metabólico decorre da hipoxemia tecidual celular associada à fadiga e sobrecarga extrema dos músculos respiratórios (diafragma e intercostais gastando grandes quantidades de energia em anaerobiose), gerando ácido lático;\n  - Este quadro clínico e gasométrico configura FALHA DO CPAP ISOLADO, indicando necessidade urgente de surfactante exógeno e possível suporte ventilatório invasivo.',
    comentariosAlternativas: {
      A: 'Correta. O pH baixo associado à PaCO2 elevada (componente respiratório) e bicarbonato/BE baixos com hiperlactatemia (componente metabólico) caracteriza acidose mista.',
      B: 'Incorreta. O pH é profundamente ácido (7,12), não alcalino.',
      C: 'Incorreta. A PaCO2 está aumentada em 68 mmHg, o que descarta hiperventilação ou acidose metabólica pura.',
      D: 'Incorreta. Trata-se de um distúrbio de extrema gravidade com risco iminente de parada cardiorrespiratória por fadiga.',
    },
  },
  {
    id: 'ped-neo2-057',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Prevenção da SDR: Corticoterapia Antenatal e Desfechos Neonatais',
    isRevisao: false,
    enunciado:
      'Uma gestante primigesta de 30 semanas de idade gestacional é internada com diagnóstico de trabalho de parto prematuro ativo (contrações regulares e dilatação cervical de 3 cm). Não há sinais de corioamnionite ou sofrimento fetal agudo. A equipe obstétrica prescreve tocolítico para inibição temporária do parto e administra corticoterapia antenatal para maturação pulmonar fetal. Conforme as diretrizes da FEBRASGO, Ministério da Saúde e OMS, qual é o esquema de corticoide preconizado de primeira linha e quais são os desfechos neonatais comprovadamente reduzidos por essa intervenção além da SDR?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Betametasona na dose de 12 mg por via intramuscular a cada 24 horas, em um total de 2 doses (ou Dexametasona 6 mg IM de 12/12h, 4 doses); reduz a incidência de SDR, Hemorragia Peri-Intraventricular (HPIV), Enterocolite Necrosante (ECN) e Mortalidade Neonatal global.',
      },
      {
        id: 'B',
        texto:
          'Prednisona oral 20 mg em dose única; reduz apenas a icterícia neonatal precoce sem impacto sobre a função pulmonar.',
      },
      {
        id: 'C',
        texto:
          'Hidrocortisona intravenosa administrada diariamente até o termo; previne exclusivamente a hérnia inguinal congênita.',
      },
      {
        id: 'D',
        texto:
          'Metilprednisolona em pulsoterapia intravenosa por 7 dias; aumenta a pressão arterial materna sem benefício para o feto.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Corticoterapia Antenatal para Maturação Fetal:\n\n1. Indicação:\n   - Toda gestante entre 24 e 34 semanas de idade gestacional (e em situações selecionadas até 36 semanas e 6 dias - prematuros tardios) com risco iminente de parto prematuro dentro dos próximos 7 dias;\n\n2. Fármacos e Esquemas Validados (atravessam eficazmente a placenta com baixa ligação proteica):\n   - BETAMETASONA: 12 mg IM a cada 24 horas, em 2 doses (total: 24 mg) - Esquema de escolha prioritário;\n   - DEXAMETASONA: 6 mg IM a cada 12 horas, em 4 doses (total: 24 mg) - Alternativa equivalente;\n\n3. Benefícios Sistêmicos Comprovados (Metanálises Cochrane):\n   - Redução de ~50% no risco de Síndrome do Desconforto Respiratório (SDR);\n   - Redução expressiva da incidência e gravidade da Hemorragia Peri-Intraventricular (HPIV) em ~45% (estabilização da matriz germinativa);\n   - Redução da incidência de Enterocolite Necrosante (ECN) em ~50% (maturação da barreira mucosa intestinal);\n   - Redução da Mortalidade Neonatal global em mais de 30%;\n   - Efeito máximo alcançado quando o nascimento ocorre entre 24 horas e 7 dias após o término do esquema.',
    comentariosAlternativas: {
      A: 'Correta. A Betametasona (2 doses de 12 mg) é a primeira linha e reduz drasticamente SDR, HPIV, ECN e mortalidade neonatal.',
      B: 'Incorreta. A prednisona sofre metabolismo placentário extenso pela enzima 11-beta-HSD2 e não atinge concentrações ativas no feto.',
      C: 'Incorreta. Hidrocortisona não é usada nessa indicação e não há relação com hérnia inguinal.',
      D: 'Incorreta. Pulsoterapia com metilprednisolona não é o protocolo de maturação pulmonar fetal.',
    },
  },
  {
    id: 'ped-neo2-058',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Prevenção da SDR: Ciclo de Resgate da Corticoterapia Antenatal',
    isRevisao: false,
    enunciado:
      'Gestante de 31 semanas com colo curto recebeu um ciclo completo de Betametasona com 27 semanas de gestação devido a ameaça de parto pré-termo que na ocasião foi revertida com sucesso. Hoje, 4 semanas após o ciclo inicial, a paciente é admitida em franco trabalho de parto pré-termo com rotura de membranas e dilatação de 5 cm. Considerando as recomendações atuais sobre o ciclo de resgate ("rescue course") de corticoide antenatal, assinale a conduta obstétrica correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administrar um único ciclo adicional de resgate de corticoide antenatal (Betametasona), pois o ciclo prévio ocorreu há mais de 14 dias e a gestação permanece abaixo de 34 semanas com risco iminente de parto em até 7 dias.',
      },
      {
        id: 'B',
        texto:
          'Contraindicar formalmente qualquer dose adicional, pois o efeito do corticoide administrado às 27 semanas dura até o termo sem qualquer declínio de eficácia.',
      },
      {
        id: 'C',
        texto:
          'Prescrever ciclos semanais repetidos contínuos de corticoide até o nascimento, independente de o parto ocorrer ou não.',
      },
      {
        id: 'D',
        texto:
          'Substituir a corticoterapia por infusão contínua de ocitocina em altas doses para acelerar o parto em 15 minutos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diretrizes sobre o Ciclo de Resgate de Corticoterapia Antenatal:\n\n1. O "Tempo de Ouro" do Corticoide:\n   - O efeito protetor máximo da corticoterapia antenatal ocorre quando o parto acontece entre 24 horas e 7 dias após o ciclo;\n   - Após 7 a 14 dias do término do ciclo inicial, os benefícios sobre a mecânica pulmonar começam a diminuir significativamente;\n\n2. Indicação do Ciclo de Resgate (Rescue Course):\n   - Está indicado UM ÚNICO ciclo adicional de resgate se:\n     1. A paciente tiver completado o primeiro ciclo há mais de 7 a 14 dias;\n     2. A idade gestacional atual ainda for < 34 semanas (ou até 33 semanas e 6 dias);\n     3. Houver novo episódio com risco concreto e iminente de parto prematuro nos próximos 7 dias;\n\n3. Cuidados / O que NÃO fazer:\n   - Múltiplos ciclos repetidos (mais de 2 ciclos ou ciclos semanais rotineiros) são FORMALMENTE PROSCRITOS, pois ensaios clínicos demonstraram que o uso repetitivo crônico de corticoides associa-se a redução do perímetro cefálico ao nascer, restrição de crescimento fetal e potenciais repercussões adversas no neurodesenvolvimento a longo prazo.',
    comentariosAlternativas: {
      A: 'Correta. Um único ciclo de resgate é recomendado quando o ciclo prévio ocorreu há mais de 7-14 dias e a gestação continua < 34 semanas com risco iminente.',
      B: 'Incorreta. O benefício do corticoide decai após 7 a 14 dias da primeira aplicação.',
      C: 'Incorreta. Ciclos repetidos semanais são prejudiciais ao crescimento e ao neurodesenvolvimento fetal (microcefalia e RCIU).',
      D: 'Incorreta. A conduta visa estabilizar o concepto e maturar os pulmões, e não acelerar o parto iatrogenicamente.',
    },
  },
  {
    id: 'ped-neo2-059',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Estabilização Inicial da SDR na Sala de Parto: CPAP Nasal Precoce',
    isRevisao: false,
    enunciado:
      'Recém-nascido de 30 semanas de gestação nasce de parto cesárea por pré-eclâmpsia materna. Ao nascer, apresenta choro fraco, porém respiração espontânea presente, frequência cardíaca de 130 bpm e esforço respiratório com retrações intercostais leves. É levado à mesa de reanimação sob calor radiante, posicionado em leve extensão cervical e envolto em saco plástico transparente. Conforme as diretrizes mais recentes da Sociedade Brasileira de Pediatria (SBP) e do Consenso Europeu de Manejo da SDR, qual é a conduta respiratória inicial recomendada em sala de parto?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Instalação imediata de CPAP nasal precoce em sala de parto com pressão expiratória de 5 a 6 cmH2O e fração inspirada de oxigênio (FiO2) inicial de 30%, evitando a intubação orotraqueal e a ventilação com pressão positiva invasiva desnecessárias.',
      },
      {
        id: 'B',
        texto:
          'Intubação orotraqueal imediata profilática e ventilação mecânica controlada por volume com pressão de pico de 30 cmH2O para todos os prematuros.',
      },
      {
        id: 'C',
        texto:
          'Inalação com broncodilatador beta-2 agonista em ar comprimido por 30 minutos sem nenhuma pressão positiva.',
      },
      {
        id: 'D',
        texto:
          'Administração de oxigênio a 100% puro em tenda facial sem qualquer monitorização de oximetria.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo Respiratório Inicial do Prematuro em Sala de Parto (Diretrizes SBP e Consenso Europeu):\n\n1. Paradoxo da Intubação Profilática vs CPAP Precoce:\n   - Historicamente, preconizava-se intubar e administrar surfactante profilático rotineiramente a todo recém-nascido prematuro extremo;\n   - Grandes ensaios clínicos randomizados multicêntricos (COIN, SUPPORT, CURPAP) demonstraram categoricamente que a INTUBAÇÃO DE ROTINA causa barotrauma, volutrauma e estresse inflamatório agudo nos pulmões imaturos, aumentando o risco de Displasia Broncopulmonar (DBP);\n\n2. Conduta Padrão Atual:\n   - Prematuro com respiração espontânea e FC > 100 bpm: NÃO deve ser intubado na sala de parto apenas pela prematuridade;\n   - A melhor estratégia é a aplicação de CPAP NASAL PRECOCE ainda em sala de parto com PEEP de 5 a 6 cmH2O (preferencialmente utilizando peça em T / ventilador mecânico neonatal com máscara ou pronga);\n   - Concentração inicial de oxigênio (FiO2): 30% para prematuros < 34 semanas (titulando conforme a oximetria de pulso no membro superior direito segundo a tabela de metas por minuto de vida da SBP);\n   - O CPAP precoce estabelece a CRF, recruta alvéolos colabados e poupa mais de 50% dos prematuros de necessitarem de via aérea invasiva.',
    comentariosAlternativas: {
      A: 'Correta. CPAP nasal precoce em sala de parto com PEEP de 5-6 cmH2O e FiO2 30% é a conduta preconizada para manter a CRF sem traumatizar a via aérea.',
      B: 'Incorreta. Intubação profilática de rotina em bebês com respiração espontânea é proscrita por elevar o risco de lesão pulmonar induzida por ventilador e DBP.',
      C: 'Incorreta. Beta-2 agonistas não têm indicação no recém-nascido com SDR por escassez de receptores brônquicos responsivos nessa fase da vida.',
      D: 'Incorreta. Oxigênio puro (100%) induz estresse oxidativo severo, lesão retiniana e cerebral em prematuros, devendo a FiO2 inicial ser de 30%.',
    },
  },
  {
    id: 'ped-neo2-060',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome do Desconforto Respiratório: Indicações Clínicas de Surfactante Exógeno',
    isRevisao: false,
    enunciado:
      'Um recém-nascido pré-termo de 28 semanas de idade gestacional encontra-se internado na UTI Neonatal com 2 horas de vida, recebendo suporte ventilatório não invasivo com CPAP nasal (PEEP de 6 cmH2O). Durante a evolução, a fração inspirada de oxigênio (FiO2) precisou ser progressivamente aumentada de 30% para 45% para sustentar a saturação de pulso na faixa alvo (91 a 95%), persistindo tiragens intercostais moderadas. A radiografia de tórax confirma doença da membrana hialina clássica. Considerando as diretrizes atuais do Consenso Europeu de SDR e da Sociedade Brasileira de Pediatria, qual é a conduta farmacológica e ventilatória indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Administração precoce de surfactante exógeno natural (como o poractanto alfa na dose de 200 mg/kg), pois o paciente em CPAP nasal ultrapassou o limiar de FiO2 >= 30-40% necessário para manter a oxigenação adequada.',
      },
      {
        id: 'B',
        texto:
          'Aguardar até a 24ª hora de vida e indicar surfactante apenas se a FiO2 ultrapassar 90% em acidose metabólica grave.',
      },
      {
        id: 'C',
        texto:
          'Suspender o CPAP nasal e colocar a criança em ar ambiente para estimular a produção endógena de surfactante pulmonar.',
      },
      {
        id: 'D',
        texto:
          'Administrar hidrocortisona por nebulização contínua e suspender o suporte respiratório.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Indicação de Surfactante Exógeno na Síndrome do Desconforto Respiratório:\n\n1. Critérios Atuais para Administração de Surfactante em Bebês em CPAP:\n   - As diretrizes modernas preconizam a ADMINISTRAÇÃO PRECOCE (idealmente nas primeiras 2 a 3 horas de vida, quanto antes melhor);\n   - Critério objetivo de falha de CPAP / limiar de indicação de surfactante:\n     - Prematuros < 28 semanas em CPAP com PEEP de pelo menos 6 cmH2O que necessitam de FiO2 > 30%;\n     - Prematuros >= 28 semanas em CPAP que necessitam de FiO2 > 30% a 40% para manter a saturação na faixa alvo (90-95%);\n\n2. Tipo de Surfactante e Dosagem:\n   - Os surfactantes de origem natural (bovino ou porcino) são amplamente superiores aos antigos produtos sintéticos sem apoproteínas;\n   - O PORACTANTO ALFA (origem suína) administrado na dose inicial de 200 mg/kg (2,5 mL/kg) demonstrou redução superior na mortalidade e menor necessidade de redoseamento em comparação com doses menores (100 mg/kg);\n   - Adiar a infusão de surfactante para quando a FiO2 estiver em níveis extremos (> 60-90%) associa-se a lesão inflamatória pulmonar estabelecida, maior incidência de hemorragia pulmonar e escape aéreo (pneumotórax).',
    comentariosAlternativas: {
      A: 'Correta. A necessidade de FiO2 >= 30-40% em CPAP com PEEP adequado é o critério formal para administração precoce de surfactante exógeno.',
      B: 'Incorreta. Aguardar até 24h ou FiO2 > 90% constitui conduta tardia e danosa, aumentando morbimortalidade e risco de pneumotórax.',
      C: 'Incorreta. Retirar o CPAP provocaria colapso alveolar maciço imediato com hipoxemia profunda e parada respiratória.',
      D: 'Incorreta. Corticosteroides inalatórios não substituem surfactante nem tratam o colapso por tensão superficial elevada na fase aguda.',
    },
  },
  {
    id: 'ped-neo2-061',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Manejo da SDR: Técnica Minimamente Invasiva de Surfactante (LISA / MIST)',
    isRevisao: false,
    enunciado:
      'Na UTI Neonatal, um prematuro de 29 semanas encontra-se em respiração espontânea sob CPAP nasal com PEEP de 6 cmH2O e necessita de administração de surfactante por atingir FiO2 de 35%. A equipe opta pela técnica LISA (Less Invasive Surfactant Administration) ou MIST (Minimally Invasive Surfactant Therapy). Em que consiste essa técnica e qual é sua principal vantagem em relação à intubação traqueal convencional?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Consiste na introdução de um cateter vascular fino ou cânula flexível através das cordas vocais sob laringoscopia direta com instilação do surfactante enquanto o recém-nascido é mantido em respiração espontânea contínua sob CPAP nasal, evitando a intubação orotraqueal e a ventilação mecânica com pressão positiva com balão ou ventilador.',
      },
      {
        id: 'B',
        texto:
          'Consiste na injeção do surfactante na veia umbilical periférica para atingir o pulmão por circulação retrógrada.',
      },
      {
        id: 'C',
        texto:
          'Consiste na instilação de surfactante diluído no leite materno através de sonda nasogástrica calibrosa.',
      },
      {
        id: 'D',
        texto:
          'Consiste na realização de traqueostomia cirúrgica de urgência sob anestesia geral no leito neonatal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Técnica LISA / MIST (Less Invasive Surfactant Administration / Minimally Invasive Surfactant Therapy):\n\n1. Como é Realizada:\n   - O prematuro é mantido em respiração espontânea recebendo suporte contínuo de CPAP nasal;\n   - Realiza-se laringoscopia direta sob analgesia/sedação suave (sem bloqueador neuromuscular para não cessar a respiração do bebê);\n   - Uma sonda fina e flexível (cateter de aspiração estéril ou cateter vascular 16-18G) é passada delicadamente através da glote entre as cordas vocais até a traqueia proximal;\n   - O laringoscópio é removido e a boca da criança é mantida fechada;\n   - O surfactante exógeno é instilado lentamente durante 1 a 3 minutos ao longo das inspirações espontâneas da própria criança;\n   - Ao término, o cateter fino é imediatamente retirado, mantendo a criança no CPAP nasal;\n\n2. Vantagens Comprovadas:\n   - Não necessita de cânula traqueal de grosso calibre;\n   - Evita a ventilação com pressão positiva por pressão ou volume (elimina volutrauma e barotrauma induzidos por ventilação mecânica invasiva);\n   - Melhora a distribuição anatômica do surfactante puxado pela própria pressão intratorácica negativa inspiratória do bebê;\n   - Ensaios clínicos demonstraram redução significativa na necessidade de ventilação mecânica posterior, menor taxa de Displasia Broncopulmonar (DBP) e menor mortalidade.',
    comentariosAlternativas: {
      A: 'Correta. A técnica LISA/MIST utiliza um cateter fino com o paciente mantido em respiração espontânea sob CPAP nasal, evitando intubação e ventilação mecânica.',
      B: 'Incorreta. O surfactante atua na superfície alveolar local na interface ar-líquido e não por via intravenosa.',
      C: 'Incorreta. O surfactante seria destruído pelo suco gástrico e não alcançaria a via aérea inferior.',
      D: 'Incorreta. Traqueostomia é proscrita e desnecessária para a administração de surfactante no recém-nascido.',
    },
  },
  {
    id: 'ped-neo2-062',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Manejo da SDR: Técnica INSURE (Intubação - Surfactante - Extubação)',
    isRevisao: false,
    enunciado:
      'Em um hospital regional sem disponibilidade de materiais específicos para técnica LISA, a equipe da UTI Neonatal decide tratar um recém-nascido de 31 semanas com falha de CPAP pela técnica INSURE (INtubate - SURfactant - Extubate). O neonato é intubado orotraquealmente, recebe surfactante exógeno por cânula traqueal e é ventilado com parâmetros moderados por alguns minutos. De acordo com as diretrizes da técnica INSURE, qual é o objetivo temporal para extubação desse paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Extubação rápida para suporte em CPAP nasal o mais precocemente possível (idealmente dentro de minutos a menos de 1 hora pós-procedimento), desde que a criança apresente esforço respiratório espontâneo regular e FiO2 controlada.',
      },
      {
        id: 'B',
        texto:
          'Manutenção obrigatória da intubação e ventilação mecânica invasiva contínua por no mínimo 14 dias.',
      },
      {
        id: 'C',
        texto:
          'Extubação exclusiva após completar 3 meses de vida e peso superior a 3 kg.',
      },
      {
        id: 'D',
        texto:
          'Permanência em ventilação invasiva até que o surfactante seja completamente eliminado pela tosse.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Técnica INSURE (INtubation - SURfactant - Extubation to CPAP):\n\n1. Conceito e Protocolo:\n   - Desenvolvida nos anos 1990 como uma das primeiras estratégias para evitar a permanência prolongada do prematuro na ventilação mecânica;\n   - Passos:\n     1. IN (Intubação orotraqueal planejada);\n     2. SUR (Administração do Surfactante exógeno por via endotraqueal);\n     3. E (Extubação imediata para CPAP nasal);\n\n2. Tempo Crítico de Extubação:\n   - O objetivo do método é extubar o paciente O MAIS RÁPIDO POSSÍVEL, idealmente dentro de poucos minutos a no máximo 1 hora após a instilação do surfactante;\n   - Condições para extubação: recém-nascido com esforço respiratório espontâneo eficaz, hemodinamicamente estável, com melhora da oxigenação (FiO2 < 30%) e sem necessidade de parâmetros de ventilação mecânica agressivos;\n   - A falha do INSURE (incapacidade de extubar ou necessidade de reintubação nas primeiras 72 horas) ocorre em cerca de 20-30% dos pacientes e correlaciona-se com acidose prévia, idade gestacional muito baixa (< 26-27 semanas) ou doença respiratória extremamente grave.',
    comentariosAlternativas: {
      A: 'Correta. O princípio do INSURE é a extubação o mais precoce possível (em minutos a menos de 1 hora) para retornar ao CPAP nasal.',
      B: 'Incorreta. Manter o neonato intubado por 14 dias anula o propósito do INSURE e gera lesão pulmonar induzida pelo ventilador.',
      C: 'Incorreta. Postergar a extubação até 3 meses causaria estenose subglótica e displasia broncopulmonar severa.',
      D: 'Incorreta. O surfactante não deve ser "eliminado pela tosse", mas sim incorporado aos alvéolos para restaurar a mecânica respiratória.',
    },
  },
  {
    id: 'ped-neo2-063',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Complicações da SDR: Persistência do Canal Arterial Pós-Surfactante',
    isRevisao: false,
    enunciado:
      'Um recém-nascido de 27 semanas de idade gestacional com SDR grave recebeu surfactante exógeno com 3 horas de vida, apresentando melhora rápida da complacência pulmonar e redução imediata da FiO2 de 50% para 25%. No entanto, com 36 horas de vida, o neonato volta a apresentar deterioração respiratória com aumento da necessidade de oxigênio (FiO2 de 45%), episódios de apneia e taquicardia persistente (FC: 175 bpm). Ao exame físico, nota-se precórdio hiperdinâmico, sopro sistólico contínuo rude mais audível em foco pulmonar e infraclavicular esquerdo, pulsos periféricos amplos e cheios ("em martelo d\'água") e hepatomegalia. Qual é a complicação hemodinâmica mais provável desencadeada após a melhora da resistência vascular pulmonar pelo surfactante?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Persistência do Canal Arterial (PCA) hemodinamicamente significativa com shunt da esquerda para a direita e hiperfluxo pulmonar volumétrico.',
      },
      {
        id: 'B',
        texto:
          'Coarctação de aorta crítica com fechamento ductal anatômico agudo.',
      },
      {
        id: 'C',
        texto:
          'Estenose aórtica congênita valvar grave com baixo débito coronariano.',
      },
      {
        id: 'D',
        texto:
          'Pneumotórax hipertensivo à direita com desvio do mediastino para a esquerda.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Interação Fisiopatológica entre Surfactante e Persistência do Canal Arterial (PCA):\n\n1. O Efeito do Surfactante na Resistência Vascular Pulmonar (RVP):\n   - Antes do surfactante, os pulmões estão atelectásicos, hipóxicos e acidóticos, o que mantém a Resistência Vascular Pulmonar muito elevada;\n   - Com a administração de surfactante exógeno, os alvéolos se expandem abruptamente, melhorando a oxigenação e o pH, o que deflagra uma QUEDA SÚBITA E INTENSA DA RESISTÊNCIA VASCULAR PULMONAR (RVP);\n\n2. Repercussão Hemodinâmica:\n   - Como a musculatura ductal do prematuro é imatura e insensível ao oxigênio, o Canal Arterial frequentemente permanece patente;\n   - Com a RVP agora muito baixa em relação à Resistência Vascular Sistêmica (RVS), estabelece-se um ENORME SHUNT DA ESQUERDA PARA A DIREITA (aorta -> artéria pulmonar);\n\n3. Achados Clínicos da PCA Hemodinamicamente Significativa:\n   - Hiperfluxo pulmonar (edema pulmonar secundário, piora ventilatória, necessidade de aumento da FiO2 e dos parâmetros respiratórios);\n   - Roubo de fluxo sistêmico (hipoperfusão mesentérica, renal e cerebral com risco de ECN e insuficiência renal);\n   - Sinais clínicos clássicos: precórdio hiperdinâmico, sopro sistólico/contínuo rude em borda esternal alta/dorso, pulsos periféricos cheios e amplos ("em martelo d\'água" / pulsos amplos por aumento da pressão de pulso com queda da pressão diastólica);\n   - Diagnóstico confirmatório: Ecocardiograma com Doppler.',
    comentariosAlternativas: {
      A: 'Correta. A queda da RVP após o surfactante amplifica o shunt esquerda-direita através do canal arterial patente, gerando hiperfluxo pulmonar e pulsos amplos.',
      B: 'Incorreta. Na coarctação aórtica com fechamento ductal os pulsos de membros inferiores são diminuídos ou impalpáveis, não amplos.',
      C: 'Incorreta. A estenose aórtica causa pulsos filiformes (parvus et tardus) e não o padrão de hiperdinamia com pulsos amplos.',
      D: 'Incorreta. O pneumotórax causaria assimetria de expansão e ausculta com hipotensão e pulsos finos, e não sopro contínuo com precórdio hipercinético.',
    },
  },
  {
    id: 'ped-neo2-064',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Taquipneia Transitória do Recém-Nascido: Fisiopatologia e Canais ENaC',
    isRevisao: false,
    enunciado:
      'Durante a vida intrauterina, os pulmões fetais estão preenchidos por líquido pulmonar produzido ativamente pelo epitélio alveolar. Na transição para a vida extrauterina, esse líquido precisa ser rapidamente eliminado para permitir as trocas gasosas gasosas. Na Taquipneia Transitória do Recém-Nascido (TTRN / Pulmão Úmido), ocorre uma falha na velocidade desse processo. Qual é o mecanismo biofísico e celular responsável pela absorção do líquido alveolar na transição neonatal e que se encontra retardado na TTRN?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ativação dos canais epiteliais de sódio (ENaC) na membrana apical dos pneumócitos estimulada pelo trabalho de parto e descarga de catecolaminas/cortisol, que transporta ativamente o sódio (seguido passivamente por água) para o interstício pulmonar através da bomba Na+/K+ ATPase basolateral.',
      },
      {
        id: 'B',
        texto:
          'Eliminação mecânica passiva de 100% do líquido alveolar exclusivamente através da compressão do tórax fetal durante a descida pelo canal de parto.',
      },
      {
        id: 'C',
        texto:
          'Secreção retrógrada contínua de cloro e água pelo canal CFTR mediada por histamina placentária materna.',
      },
      {
        id: 'D',
        texto:
          'Digestão enzimática proteolítica completa do líquido alveolar pelos macrófagos alveolares em menos de 10 segundos.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisiologia da Depuração do Líquido Pulmonar Fetal e a Fisiopatologia da TTRN:\n\n1. Dinâmica do Líquido Pulmonar Intraútero:\n   - Durante a gestação, o epitélio pulmonar secreta ativamente íons cloreto (Cl-) para o lúmen alveolar através de canais de cloro (como o CFTR), atraindo sódio e água, mantendo o pulmão preenchido por líquido essencial para o seu desenvolvimento anatômico;\n\n2. O Fenômeno de Transição no Trabalho de Parto (Switching):\n   - Dias e horas antes do parto e especialmente durante o TRABALHO DE PARTO ativo, ocorre uma elevação expressiva nas concentrações de CATECOLAMINAS (adrenalina/noradrenalina), CORTISOL e hormônios tireoidianos maternos e fetais;\n   - Esses mediadores ativam e aumentam a expressão dos CANAIS EPITELIAIS DE SÓDIO (ENaC - Epithelial Sodium Channels) na membrana apical dos pneumócitos tipo I e II;\n   - Os canais ENaC invertem o fluxo: começam a reabsorver ativamente o sódio do lúmen alveolar para dentro da célula epitelial;\n   - A bomba Na+/K+ ATPase na membrana basolateral bombeia esse sódio para o espaço intersticial;\n   - A água segue passivamente o gradiente osmótico do sódio em direção ao interstício, sendo rapidamente recolhida pelos capilares linfáticos e vasos sanguíneos pulmonares;\n\n3. Na Taquipneia Transitória do Recém-Nascido (TTRN):\n   - Quando o concepto nasce por CESARIANA ELETIVA SEM TRABALHO DE PARTO PRÉVIO, falta a descarga hormonal do estresse do parto;\n   - Os canais ENaC não são ativados com eficiência, resultando em RETARDO NA ABSORÇÃO DO LÍQUIDO ALVEOLAR, que fica retido nos alvéolos e interstício interlobar/perivascular.',
    comentariosAlternativas: {
      A: 'Correta. O transporte ativo de sódio via canais ENaC e bomba Na+/K+ ATPase estimulada por catecolaminas no trabalho de parto é o motor biofísico da depuração do líquido alveolar.',
      B: 'Incorreta. A compressão mecânica vaginal responde por apenas uma fração modesta (menos de 20-30%) da saída do líquido das vias aéreas superiores, sendo o processo biológico via ENaC o primordial.',
      C: 'Incorreta. O canal CFTR é o responsável pela secreção de líquido na vida fetal e sua inibição/reversão é necessária no parto.',
      D: 'Incorreta. Macrófagos não digerem líquido alveolar por fagocitose proteolítica.',
    },
  },
  {
    id: 'ped-neo2-065',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Taquipneia Transitória do Recém-Nascido: Perfil Epidemiológico e Fatores de Risco',
    isRevisao: false,
    enunciado:
      'Dentre os fatores de risco obstétricos e perinatais a seguir, qual reúne a combinação epidemiológica clássica mais fortemente associada ao desenvolvimento de Taquipneia Transitória do Recém-Nascido (TTRN)?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Nascimento por cesariana eletiva antes do início do trabalho de parto em recém-nascido a termo precoce (37 a 38 semanas) ou prematuro tardio (34 a 36 semanas), associado a diabetes gestacional ou asma materna.',
      },
      {
        id: 'B',
        texto:
          'Parto transpélvico eutócico domiciliar na 42ª semana com trabalho de parto prolongado de 18 horas e líquido meconial espesso.',
      },
      {
        id: 'C',
        texto:
          'Prematuridade extrema de 24 semanas nascido de parto vaginal espontâneo após corioamnionite febril.',
      },
      {
        id: 'D',
        texto:
          'Restrição de crescimento intrauterino extremo com feto de 39 semanas pesando 1.500 g e oligoâmnio acentuado.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Perfil Epidemiológico Clássico da Taquipneia Transitória do Recém-Nascido (TTRN):\n\n1. Principais Fatores de Risco:\n   - Cesariana Eletiva Agendada sem Trabalho de Parto Prévio (o principal e mais cobrado fator em provas de residência);\n   - Idade gestacional de Termo Precoce (37 a 38 semanas) ou Prematuro Tardio (34 a 36 semanas);\n   - Sexo masculino;\n   - Macrossomia fetal;\n   - Asma materna crônica (mecanismo associado a alterações de receptores beta-adrenérgicos);\n   - Diabetes materno (hiperinsulinismo também pode retardar a depuração de fluidos);\n   - Sedação materna ou uso excessivo de fluidos intravenosos na parturiente antes do nascimento;\n\n2. Fatores Ausentes no Perfil de TTRN:\n   - Trabalho de parto vaginal vigoroso (protege contra TTRN);\n   - Líquido meconial espesso (associa-se à Síndrome de Aspiração de Mecônio - SAM);\n   - Prematuridade extrema de 24 semanas (associa-se tipicamente à SDR/Membrana Hialina ou sepse precoce).',
    comentariosAlternativas: {
      A: 'Correta. Cesárea eletiva sem trabalho de parto em termo precoce ou prematuro tardio, com asma ou diabetes materna, é o quadro epidemiológico típico de TTRN.',
      B: 'Incorreta. Parto pós-termo (42 sem) com mecônio espesso é o cenário da Síndrome de Aspiração Meconial (SAM).',
      C: 'Incorreta. Prematuro extremo de 24 semanas com corioamnionite tem alta probabilidade de SDR e sepse congênita precoce.',
      D: 'Incorreta. RCIU e oligoâmnio crônico aceleram a maturação pulmonar e reduzem o risco de retenção líquida isolada.',
    },
  },
  {
    id: 'ped-neo2-066',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Taquipneia Transitória do Recém-Nascido: Quadro Clínico e Evolução Temporal Benigna',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo (38 semanas de idade gestacional), filho de mãe asmática que deu à luz por cesariana eletiva sem contrações prévias, inicia com 1 hora de vida quadro de polipneia acentuada com frequência respiratória mantida de 78 incursões por minuto. Ao exame físico na unidade de cuidados intermediários, apresenta tiragem subcostal leve, ausculta pulmonar com murmúrio vesicular universalmente presente sem estertores crepitantes e oximetria de pulso de 88% em ar ambiente que sobe para 95% com oferta de oxigênio em baixo fluxo por cateter nasal (FiO2 de 24 a 28%). O paciente permanece afebril, corado e reativo, sem gemência expiratória contínua. Em relação à evolução temporal e prognóstico habitual da TTRN, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'Apresenta curso clínico benigno e autolimitado, com resolução espontânea do desconforto respiratório habitualmente entre 24 e 72 horas de vida, à medida que os vasos linfáticos e capilares completam a depuração do líquido pulmonar remanescente.',
      },
      {
        id: 'B',
        texto:
          'Evolui invariavelmente para fibrose pulmonar progressiva fatal necessitando de transplante pulmonar neonatal em até 10 dias.',
      },
      {
        id: 'C',
        texto:
          'Associa-se a hipertensão pulmonar persistente refratária em mais de 90% dos casos, sendo obrigatória a intubação orotraqueal imediata com óxido nítrico inalatório.',
      },
      {
        id: 'D',
        texto:
          'O quadro clínico só desaparece após a realização de broncoscopia rígida terapêutica com aspiração do líquido alveolar.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Quadro Clínico e História Natural da Taquipneia Transitória do Recém-Nascido (TTRN):\n\n1. Sinais Clínicos:\n   - Início muito precoce, habitualmente nas primeiras 2 a 6 horas após o parto cesárea;\n   - A TAQUIPNEIA (FR > 60 irpm, frequentemente atingindo 80 a 100 irpm) é o sinal dominante e predominante;\n   - Desconforto respiratório leve a moderado: tiragens subcostais/intercostais discretas e batimento de asa nasal ocasional;\n   - A gemência expiratória profunda e mantida NÃO é típica da TTRN (quando presente, é muito discreta e fugaz nas primeiras horas);\n   - Baixa dependência de oxigênio: responde prontamente a baixas concentrações de O2 (FiO2 < 30 a 35%);\n\n2. Evolução e Prognóstico:\n   - O termo "TRANSITÓRIA" reflete com precisão sua natureza benigna e autolimitada;\n   - O pico do desconforto respiratório costuma ocorrer por volta de 6 a 12 horas de vida;\n   - Melhora clínica progressiva com resolução completa do quadro em 24 a 72 horas (raramente ultrapassando 4 a 5 dias);\n   - Não deixa sequelas anatômicas ou funcionais na mecânica pulmonar a longo prazo.',
    comentariosAlternativas: {
      A: 'Correta. A TTRN é um distúrbio benigno e autolimitado com resolução clínica espontânea habitual em 24 a 72 horas.',
      B: 'Incorreta. A TTRN não causa fibrose e não necessita de transplante; é uma retenção líquida puramente transitória.',
      C: 'Incorreta. Hipertensão pulmonar persistente (HPPN) é complicação rara de casos com hipoxemia grave mal conduzida, não ocorrendo na imensa maioria das TTRNs.',
      D: 'Incorreta. Broncoscopia rígida é um procedimento altamente invasivo e totalmente contraindicado na TTRN.',
    },
  },
  {
    id: 'ped-neo2-067',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Taquipneia Transitória do Recém-Nascido: Achados Radiológicos Patognomônicos',
    isRevisao: false,
    enunciado:
      'Um recém-nascido com 4 horas de vida, nascido por cesariana eletiva com 38 semanas, apresenta taquipneia de 82 irpm e discreta retração subcostal. A radiografia de tórax realizada no leito evidencia: campos pulmonares hiperinsuflados com retificação e rebaixamento das cúpulas diafragmáticas (visualizam-se 9 arcos costais posteriores), aumento simétrico da trama broncovascular hilo-fugal perivascular com congestão peri-hilar conferindo aspecto de "coração peludo" (coração felpudo), além de espessamento e nítida linha de densidade líquida preenchendo a pequena fissura interlobar horizontal (cisurite). Qual diagnóstico esse achado radiográfico confirma?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Taquipneia Transitória do Recém-Nascido (TTRN / Pulmão Úmido).',
      },
      {
        id: 'B',
        texto:
          'Doença da Membrana Hialina (SDR).',
      },
      {
        id: 'C',
        texto:
          'Agenesia pulmonar unilateral esquerda.',
      },
      {
        id: 'D',
        texto:
          'Hérnia diafragmática congênita de Bochdalek.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Semiótica Radiológica da Taquipneia Transitória do Recém-Nascido (TTRN):\n\n1. Hiperinsuflação Pulmonar:\n   - Como o líquido acumulado nos bronquíolos distais funciona como uma válvula mecânica parcial gerando aprisionamento aéreo, há HIPERINSUFLAÇÃO bilateral com retificação das cúpulas diafragmáticas e visualização de 8 a 9 (ou mais) arcos costais posteriores (ao contrário da SDR, que cursa com hipoinsuflação e < 7 arcos costais);\n\n2. Congestão Peri-hilar e Trama Vascular Proeminente ("Coração Peludo"):\n   - O excesso de líquido retido no interstício perivascular e peribronquial central projeta estrias radiopacas densas que irradiam dos hilos pulmonares para a periferia pulmonar, borrando os contornos da silhueta cardíaca (aspecto em "coração peludo" ou "coração felpudo");\n\n3. Cisurite (Líquido na Cisura Interlobar):\n   - É o sinal radiológico mais específico e clássico da TTRN;\n   - Visualiza-se uma linha radiopaca delgada e nítida de líquido demarcando a cisura horizontal interlobar (pequena fissura do pulmão direito);\n   - Podem ocorrer ainda pequenos derrames pleurais nos seios costofrênicos;',
    comentariosAlternativas: {
      A: 'Correta. A tétrade de hiperinsuflação, congestão peri-hilar ("coração peludo") e cisurite é clássica e patognomônica da TTRN.',
      B: 'Incorreta. A SDR cursa com hipoinsuflação pulmonar (< 7 arcos costais) e infiltrado reticulogranular fino com broncogramas aéreos, sem hiperinsuflação nem cisurite.',
      C: 'Incorreta. A agenesia pulmonar apresentaria hemitórax completamente opaco com desvio maciço do mediastino para o lado ipsilateral.',
      D: 'Incorreta. A hérnia diafragmática de Bochdalek exibe imagens císticas aéreas de alças intestinais no tórax com desvio contralateral e abdome escavado.',
    },
  },
  {
    id: 'ped-neo2-068',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Taquipneia Transitória do Recém-Nascido: Suporte Terapêutico e Contraindicação a Diuréticos',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo com diagnóstico clínico e radiológico confirmado de Taquipneia Transitória do Recém-Nascido encontra-se sob oxigenoterapia suplementar em baixo fluxo em berço aquecido na unidade neonatal. Durante a passagem de plantão, um interno sugere a prescrição de uma dose intravenosa de Furosemida (diurético de alça) com o intuito de "acelerar a drenagem do líquido acumulado no pulmão úmido". O neonatologista intervém e contraindica a conduta. Qual é o posicionamento das sociedades pediátricas e das revisões sistemáticas da Cochrane a respeito do uso de furosemida na TTRN?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O uso de furosemida é formalmente contraindicado e não recomendado, pois ensaios clínicos demonstraram que o diurético não acelera a reabsorção do líquido alveolar nem reduz o tempo de oxigenoterapia ou hospitalização, trazendo riscos adicionais de desidratação, hipovolemia e distúrbios hidroeletrolíticos.',
      },
      {
        id: 'B',
        texto:
          'A furosemida deve ser administrada em infusão contínua para todos os recém-nascidos com TTRN por pelo menos 3 semanas.',
      },
      {
        id: 'C',
        texto:
          'O uso de furosemida associada a espironolactona é o tratamento curativo primário padrão-ouro da TTRN.',
      },
      {
        id: 'D',
        texto:
          'A furosemida só é eficaz se for administrada por via inalatória diluída em solução salina hipertônica a 20%.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo Terapêutico da TTRN e a Contraindicação ao Uso de Diuréticos (Tema Frequente em Concursos):\n\n1. Por que NÃO USAR Furosemida na TTRN:\n   - Embora intuitivamente alguns pensem em "desidratar o pulmão úmido com diurético", a reabsorção do líquido alveolar depende exclusivamente do transporte iônico ativo celular através dos canais de sódio ENaC no epitélio alveolar;\n   - A Furosemida atua no túbulo renal (alça de Henle) e não estimula os canais ENaC pulmonares;\n   - Revisões sistemáticas rigorosas da Cochrane demonstraram que o uso de furosemida oral ou intravenosa NÃO REDUZ o tempo de taquipneia, NÃO ENCURTA a necessidade de oxigênio suplementar e NÃO DIMINUI a internação hospitalar;\n   - Pelo contrário: causa perda volêmica desnecessária, hemoconcentração, desidratação aguda e desequilíbrios hidroeletrolíticos potencialmente perigosos no período neonatal precoce;\n\n2. Tratamento Correto da TTRN:\n   - Suporte e observação criteriosa;\n   - Oxigenoterapia suplementar em concentrações baixas (cânula nasal ou halo se necessário) para manter saturação entre 91% e 95%;\n   - Suporte ventilatório com CPAP nasal de resgate apenas nos casos moderados a graves com esforço respiratório;\n   - Controle térmico e hídrico adequado (evitando sobrecarga hídrica venosa).',
    comentariosAlternativas: {
      A: 'Correta. A furosemida não tem eficácia comprovada na TTRN e expõe o neonato a riscos de hipovolemia e desidratação, sendo contraindicada.',
      B: 'Incorreta. Manter diurético de alça por 3 semanas em um recém-nascido de termo com afecção autolimitada de 3 dias é conduta danosa.',
      C: 'Incorreta. Diuréticos não são tratamento curativo de TTRN; a afecção se resolve pela drenagem fisiológica vascular e linfática.',
      D: 'Incorreta. Furosemida inalatória não é conduta preconizada e solução salina hipertônica a 20% causaria necrose osmótica da mucosa brônquica.',
    },
  },
  {
    id: 'ped-neo2-069',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Taquipneia Transitória do Recém-Nascido: Manejo Nutricional e Prevenção de Broncoaspiração',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo de 38 semanas, com 6 horas de vida, encontra-se internado por Taquipneia Transitória do Recém-Nascido. Apresenta taquipneia sustentada com frequência respiratória oscillando entre 84 e 92 irpm, com tiragem intercostal discreta e saturação de 94% em cateter nasal com oxigênio a 0,5 L/min. A mãe solicita autorização para amamentar a criança ao seio materno. Considerando as diretrizes pediátricas para alimentação do recém-nascido taquipneico e a prevenção da broncoaspiração, qual é a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Suspender a via oral (jejum) e iniciar hidratação venosa de manutenção com taxa de infusão de glicose (TIG) adequada enquanto a frequência respiratória permanecer acima de 80 irpm, pelo risco elevado de incoordenação entre sucção-deglutição-respiração e consequente broncoaspiração pulmonar.',
      },
      {
        id: 'B',
        texto:
          'Liberar imediatamente a amamentação irrestrita no seio materno, pois a taquipneia neonatal não interfere na deglutição.',
      },
      {
        id: 'C',
        texto:
          'Oferecer fórmula láctea hipercalórica por copinho a cada 1 hora em volume dobrado para compensar o gasto energético.',
      },
      {
        id: 'D',
        texto:
          'Indicar gastrostomia endoscópica percutânea de urgência nas primeiras 24 horas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo da Alimentação no Recém-Nascido com Taquipneia e Desconforto Respiratório:\n- A coordenação perfeita entre SUCÇÃO, DEGLUTIÇÃO e RESPIRAÇÃO exige que a frequência respiratória esteja em níveis seguros;\n- Quando a frequência respiratória é muito elevada, o tempo de pausa deglutitória encurta perigosamente, gerando alto risco de passagem de leite para a via aérea (broncoaspiração massiva, pneumonia aspirativa e laringoespasmo);\n\nProtocolo Clássico de Alimentação Neonatal Baseado na Frequência Respiratória (FR):\n1. FR < 60 irpm (sem desconforto): Alimentação por via oral habitual (seio materno prioritário ou copinho/mamadeira);\n2. FR entre 60 e 80 irpm (com desconforto leve a moderado): Suspender sucção direta ao seio; alimentar por SONDA OROGÁSTRICA (gavage) com leite materno ordenhado;\n3. FR > 80 irpm (ou desconforto respiratório moderado a grave em qualquer FR): SUSPENDER COMPLETAMENTE A VIA ORAL (JEJUM ABSOLUTO);\n   - Iniciar hidratação venosa de manutenção com soro glicosado a 10% em taxa de infusão de glicose (TIG) entre 4 a 6 mg/kg/minuto;\n   - Reiniciar dieta enteral gradativamente conforme a frequência respiratória for caindo abaixo de 80 e depois 60 irpm.',
    comentariosAlternativas: {
      A: 'Correta. FR > 80 irpm impõe suspensão da via oral e início de hidratação venosa pelo risco iminente de incoordenação e broncoaspiração.',
      B: 'Incorreta. Amamentar no seio com FR de quase 90 irpm acarreta grave risco de engasgo, aspiração pulmonar e asfixia.',
      C: 'Incorreta. Alimentar com copinho nessa frequência respiratória causa aspiração rápida de leite para a traqueia.',
      D: 'Incorreta. Gastrostomia é procedimento cirúrgico para afecções crônicas neurológicas e não tem qualquer cabimento na TTRN de resolução em 48-72h.',
    },
  },
  {
    id: 'ped-neo2-070',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico Diferencial: SDR versus Taquipneia Transitória do Recém-Nascido',
    isRevisao: false,
    enunciado:
      'Em uma discussão clínica sobre distúrbios respiratórios neonatais, o preceptor compara os dados de dois recém-nascidos internados na UTI:\n- Neonato 1: 29 semanas de gestação, parto prematuro sem corticoide prévio, iniciou com gemência contínua nas primeiras horas, raio-X com hipotransparência reticulogranular fina ("vidro fosco"), broncogramas aéreos e 6 arcos costais visíveis;\n- Neonato 2: 38 semanas de gestação, nascido por cesariana eletiva sem trabalho de parto, iniciou com taquipneia de 80 irpm e desconforto leve, raio-X com 9 arcos costais visíveis, congestão hilar e cisurite.\nQual alternativa estabelece com exatidão o diagnóstico e o pilar do tratamento farmacológico/ventilatório de cada paciente?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Neonato 1 tem Síndrome do Desconforto Respiratório (Doença da Membrana Hialina) e o pilar é CPAP nasal associado a surfactante exógeno precoce; Neonato 2 tem Taquipneia Transitória do Recém-Nascido (Pulmão Úmido) e o pilar é oxigenoterapia de suporte com observação clínica expectante.',
      },
      {
        id: 'B',
        texto:
          'Neonato 1 tem Taquipneia Transitória do Recém-Nascido tratada com furosemida; Neonato 2 tem Síndrome do Desconforto Respiratório tratada com antibióticos por 21 dias.',
      },
      {
        id: 'C',
        texto:
          'Ambos os neonatos são portadores de fibrose cística congênita com indicação de transplante pulmonar bilateral.',
      },
      {
        id: 'D',
        texto:
          'Neonato 1 tem hérnia diafragmática tratada com laparotomia imediata; Neonato 2 tem pneumonia bacteriana por estafilococo tratada com vancomicina.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Quadro Comparativo Clássico: SDR vs TTRN:\n\n1. Neonato 1 -> Síndrome do Desconforto Respiratório (SDR / Membrana Hialina):\n   - Idade gestacional típica: Prematuro (< 34 semanas);\n   - Quadro clínico: Desconforto respiratório moderado a grave de início precoce, com gemência expiratória marcante e cianose;\n   - Radiografia: Volume pulmonar reduzido (hipoinsuflação com 6 arcos costais), infiltrado reticulogranular fino em vidro fosco e broncogramas aéreos;\n   - Tratamento de escolha: CPAP nasal precoce + Surfactante exógeno natural;\n\n2. Neonato 2 -> Taquipneia Transitória do Recém-Nascido (TTRN / Pulmão Úmido):\n   - Idade gestacional típica: Termo precoce (37-38 sem) ou prematuro tardio (34-36 sem) nascido por cesárea eletiva sem trabalho de parto;\n   - Quadro clínico: Taquipneia importante (> 60-80 irpm) com desconforto leve a moderado, sem gemência intensa mantida;\n   - Radiografia: Hiperinsuflação pulmonar (9 arcos costais), congestão peri-hilar ("coração peludo") e cisurite;\n   - Tratamento de escolha: Medidas de suporte (oxigenoterapia em baixo fluxo se SatO2 < 91%, controle térmico, jejum se FR > 80) com resolução em 24 a 72 horas.',
    comentariosAlternativas: {
      A: 'Correta. Diferencia perfeitamente a SDR (prematuro, vidro fosco, CPAP + surfactante) da TTRN (termo em cesárea, cisurite/hiperinsuflação, suporte clínico).',
      B: 'Incorreta. Inverte os diagnósticos e sugere diuréticos, que são contraindicados na TTRN.',
      C: 'Incorreta. Fibrose cística não se manifesta com esses padrões de desconforto precoce por membrana hialina e pulmão úmido.',
      D: 'Incorreta. Não há qualquer dado de hérnia diafragmática ou de pneumonia estafilocócica nos casos descritos.',
    },
  },
  {
    id: 'ped-neo2-071',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Diagnóstico Diferencial: SDR versus Sepse Precoce por Streptococcus agalactiae (GBS)',
    isRevisao: false,
    enunciado:
      'Um recém-nascido prematuro de 32 semanas nasce de parto vaginal precipitado de mãe que não realizou nenhuma consulta de pré-natal e desconhece seu status de colonização por Streptococcus agalactiae (EGB/GBS). Com 2 horas de vida, o neonato evolui com gemência, batimento de asas de nariz, hipotensão arterial e instabilidade térmica. A radiografia de tórax revela infiltrado reticulogranular difuso com broncogramas aéreos, imagem absolutamente indistinguível da Síndrome do Desconforto Respiratório clássica. Diante do quadro clínico-radiológico e dos antecedentes maternos, qual é a conduta antimicrobiana imediata preconizada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Coletar hemoculturas e iniciar imediatamente antibioticoterapia empírica parenteral combinada com Ampicilina associada a um Aminoglicosídeo (Gentamicina ou Amicacina), pois a sepse precoce / pneumonia congênita por GBS é radiologicamente idêntica à SDR e tem alta letalidade no prematuro.',
      },
      {
        id: 'B',
        texto:
          'Prescrever apenas surfactante exógeno e dispensar o uso de antibióticos até que uma hemocultura de controle colhida após 7 dias seja positiva.',
      },
      {
        id: 'C',
        texto:
          'Administrar vancomicina oral associada a metronidazol por 30 dias em ambiente domiciliar.',
      },
      {
        id: 'D',
        texto:
          'Aguardar o resultado do teste rápido de urina para clamídia antes de qualquer prescrição medicamentosa.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Sobreposição Radiológica e Clínica entre SDR e Sepse Neonatal Precoce (Pneumonia por GBS):\n- Um dos axiomas mais importantes da neonatologia e das provas de residência médica:\n  "A pneumonia neonatal / sepse precoce por Streptococcus agalactiae (Streptococo do Grupo B - GBS) pode ser RADIOLOGICAMENTE E CLINICAMENTE INDISTINGUÍVEL da Doença da Membrana Hialina (SDR)";\n- Fisiopatologia:\n  - O GBS inibe a função do surfactante e provoca alveolite inflamatória com exsudação de fibrina, gerando infiltrado reticulogranular difuso, microatelectasias e broncogramas idênticos aos da SDR;\n- Conduta Mandatória:\n  - Em todo recém-nascido prematuro que desenvolve desconforto respiratório precoce sugestivo de SDR e cuja mãe apresenta fatores de risco para sepse (sem pré-natal, bolsa rota prolongada, sem profilaxia intraparto para GBS, febre intraparto), DEVE-SE COLETAR HEMOCULTURA e INICIAR ANTIBIOTICOTERAPIA EMPÍRICA IMEDIATA;\n  - Esquema de 1ª linha para sepse precoce: AMPICILINA (cobre Streptococcus agalactiae e Listeria monocytogenes) associada a GENTAMICINA ou AMICACINA (cobre enterobactérias Gram-negativas como Escherichia coli);\n  - A antibioticoterapia pode ser suspensa após 36 a 48 horas se as culturas forem negativas e o paciente estiver clinicamente estável.',
    comentariosAlternativas: {
      A: 'Correta. A pneumonia por GBS imita radiologicamente a SDR; mãe sem profilaxia impõe coleta de culturas e início imediato de Ampicilina + Gentamicina.',
      B: 'Incorreta. Postergar o antibiótico em neonato séptico com pneumonia por GBS resulta em choque séptico fulminante e óbito em poucas horas.',
      C: 'Incorreta. Vancomicina oral não é absorvida sistemicamente (usada apenas para colite pseudomembranosa) e metronidazol não cobre GBS neonatal.',
      D: 'Incorreta. Testes urinários de clamídia não têm aplicação nessa situação de emergência respiratória e sepse precoce bacteriana.',
    },
  },
  {
    id: 'ped-neo2-072',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Manejo Avançado da SDR: Critérios de Falha de CPAP e Indicação de Ventilação Invasiva',
    isRevisao: false,
    enunciado:
      'Um prematuro de 26 semanas com SDR encontra-se em suporte ventilatório com CPAP nasal (PEEP de 7 cmH2O) e já recebeu duas doses de surfactante exógeno por técnica minimamente invasiva. Com 18 horas de vida, o neonato apresenta deterioração clínica: esforço respiratório com Boletim de Silverman-Andersen = 8, necessidade de FiO2 progressiva de 65% para manter SpO2 em 89%, e múltiplos episódios de apneia acompanhados de bradicardia (FC < 80 bpm) refratários à estimulação tátil e ao citrato de cafeína. A gasometria arterial demonstra: pH: 7,10; PaCO2: 72 mmHg e PaO2: 42 mmHg. Qual é a conduta imediata indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Intubação orotraqueal imediata com fixação de cânula traqueal de calibre adequado e início de ventilação mecânica invasiva sincronizada, preferencialmente guiada por volume garantido.',
      },
      {
        id: 'B',
        texto:
          'Aumentar a PEEP do CPAP nasal para 18 cmH2O mantendo a criança em respiração espontânea na pronga.',
      },
      {
        id: 'C',
        texto:
          'Retirar o CPAP nasal e colocar a criança em berço comum sem suporte respiratório para evitar dependência do aparelho.',
      },
      {
        id: 'D',
        texto:
          'Administrar bicarbonato de sódio em bolus rápido intravenoso e aguardar 12 horas para nova gasometria.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Critérios de Falha de Suporte Não Invasivo (CPAP) na SDR e Indicação de Ventilação Mecânica Invasiva:\n\n1. Sinais Formais de Falha do CPAP:\n   - Hipoxemia refratária: Necessidade de FiO2 > 40% a 50% em CPAP com PEEP otimizada (6 a 8 cmH2O) para manter a saturação na faixa de 90-95%;\n   - Acidose respiratória grave descompensada: pH < 7,20 com PaCO2 > 65 a 70 mmHg decorrente de hipoventilação alveolar e fadiga muscular diafragmática;\n   - Apneias frequentes e recorrentes (> 2 a 3 episódios/hora) associadas a bradicardia significativa e/ou cianose, que não respondem à terapêutica com cafeína e estímulo tátil;\n   - Esforço respiratório extenuante persistente (Silverman-Andersen >= 6-7);\n\n2. Conduta Imediata:\n   - Diante da falha do CPAP e exaustão muscular iminente, a INTUBAÇÃO OROTRAQUEAL IMEDIATA É MANDATÓRIA;\n   - A modalidade ventilatória recomendada pelas diretrizes modernas é a ventilação sincronizada ciclada a tempo e limitada a pressão com Volume Garantido (VG), que estabiliza o volume corrente entre 4 a 5 mL/kg, reduzindo a volatilidade de pressões e prevenindo volutrauma/barotrauma.',
    comentariosAlternativas: {
      A: 'Correta. Acidose respiratória grave (pH 7,10 e pCO2 72), alta dependência de oxigênio (FiO2 65%) e apneias com bradicardia configuram falha formal de CPAP e indicação de IOT.',
      B: 'Incorreta. Uma PEEP de 18 cmH2O em CPAP nasal em prematuro causaria pneumotórax maciço imediato e impediria o retorno venoso.',
      C: 'Incorreta. Suspender o suporte em acidose grave e hipoxemia provocaria parada cardiorrespiratória e óbito imediato.',
      D: 'Incorreta. Bicarbonato em bolus piora a acidose respiratória intracelular ao gerar CO2 que não consegue ser eliminado pelo pulmão exausto.',
    },
  },
  {
    id: 'ped-neo2-073',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Farmacoterapia Respiratória Neonatal: Citrato de Cafeína na Prematuridade',
    isRevisao: false,
    enunciado:
      'Um recém-nascido pré-termo de 28 semanas de gestação, pesando 1.050 g, sob CPAP nasal com diagnóstico de SDR, recebe prescrição de Citrato de Cafeína nas primeiras 24 horas de vida. O médico residente questiona o preceptor sobre a fundamentação farmacológica dessa conduta precoce. De acordo com os ensaios clínicos randomizados (em especial o estudo multicêntrico CAP - Caffeine for Apnea of Prematurity), qual é o mecanismo de ação e os benefícios comprovados do uso precoce da cafeína no prematuro?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Atua como antagonista competitivo dos receptores centrais de adenosina (A1 e A2A), estimulando o centro respiratório bulbar, aumentando a sensibilidade ao CO2 e melhorando a contratilidade do diafragma; seu uso precoce reduz a incidência de apneia da prematuridade, encurta o tempo de ventilação mecânica e reduz significativamente a incidência de Displasia Broncopulmonar (DBP).',
      },
      {
        id: 'B',
        texto:
          'Atua como um potente vasodilatador pulmonar bactericida que elimina infecções congênitas por Mycoplasma hominis.',
      },
      {
        id: 'C',
        texto:
          'Trata-se de um hormônio peptídico que acelera o fechamento cirúrgico da fontanela anterior nas primeiras 48 horas.',
      },
      {
        id: 'D',
        texto:
          'É um sedativo hipnótico profundo que induz coma terapêutico para impedir movimentos respiratórios do neonato.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Farmacologia e Evidências do Citrato de Cafeína na Neonatologia (Estudo CAP):\n\n1. Farmacodinâmica e Mecanismo de Ação:\n   - A cafeína é uma metilxantina com excelente biodisponibilidade e meia-vida longa no neonato (mais de 30 a 100 horas);\n   - Mecanismo primário: antagonismo competitivo dos receptores de ADENOSINA (especialmente receptores A1 e A2A);\n   - Efeitos biológicos:\n     1. Estimulação direta dos neurônios do centro respiratório no bulbo e ponte;\n     2. Aumento da sensibilidade dos quimiorreceptores centrais ao dióxido de carbono (reduz o limiar de apneia pelo CO2);\n     3. Aumento da resposta ventilatória e volume minuto;\n     4. Melhora direta da contratilidade do músculo diafragma (prevenção de fadiga muscular);\n\n2. Evidências Clínicas Robustas (Estudo CAP - Schmidt et al.):\n   - Redução comprovada na frequência e gravidade das apneias da prematuridade;\n   - Facilitação da extubação traqueal e menor taxa de falha de extubação;\n   - REDUÇÃO SIGNIFICATIVA DA INCIDÊNCIA DE DISPLASIA BRONCOPULMONAR (DBP);\n   - Melhora do neurodesenvolvimento aos 18-21 meses (redução das taxas de paralisia cerebral e atraso motor);\n- Dose: Dose de ataque de 20 mg/kg de Citrato de Cafeína IV/VO (equivalente a 10 mg/kg de cafeína base), seguida de manutenção diária de 5 a 10 mg/kg/dia.',
    comentariosAlternativas: {
      A: 'Correta. A cafeína antagoniza receptores de adenosina, estimula o centro respiratório, melhora a força do diafragma e reduz DBP e tempo de ventilação.',
      B: 'Incorreta. Cafeína não é vasodilatador pulmonar nem antimicrobiano contra micoplasmas.',
      C: 'Incorreta. Não é hormônio e não tem efeito no fechamento de fontanelas.',
      D: 'Incorreta. A cafeína é um estimulante do sistema nervoso central e do drive respiratório, o oposto de um sedativo indutor de coma.',
    },
  },
  {
    id: 'ped-neo2-074',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Complicações da Ventilação na SDR: Síndromes de Escape Aéreo (Pneumotórax Neonatal)',
    isRevisao: false,
    enunciado:
      'Um recém-nascido prematuro de 28 semanas com SDR encontra-se intubado sob ventilação mecânica convencional na UTI Neonatal. Subitamente, com 14 horas de vida, apresenta deterioração catastrófica e abrupta: queda imediata da saturação de oxigênio para 65%, bradicardia (FC: 70 bpm), cianose generalizada e hipotensão arterial com palidez cutânea. Ao exame físico direcionado, observa-se hemitórax direito hiperexpansivo com diminuição acentuada do murmúrio vesicular à direita, desvio do ictus cardíaco para o hemitórax esquerdo e teste da transiluminação cutânea com fibra óptica intensamente positivo (hipertransiluminação) no hemitórax direito. Diante do quadro agudo de pneumotórax hipertensivo, qual é a conduta imediata que precede a radiografia confirmatória?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Punção descompressiva de alívio imediata com cateter intravenoso (18 a 22G) conectado a uma torneira de três vias e seringa com aspiração de ar (no 2º espaço intercostal na linha hemiclavicular direita ou 4º/5º espaço na linha axilar anterior), seguida de drenagem torácica em selo d\'água.',
      },
      {
        id: 'B',
        texto:
          'Encaminhar o paciente para tomografia computadorizada contrastada de tórax no setor de radiologia do hospital.',
      },
      {
        id: 'C',
        texto:
          'Aumentar imediatamente a pressão de pico do ventilador mecânico para 45 cmH2O para tentar expandir o pulmão colapsado.',
      },
      {
        id: 'D',
        texto:
          'Administrar analgésico por via oral e aguardar a reabsorção espontânea do gás por 48 horas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Emergência Neonatal: Pneumotórax Hipertensivo no Neonato Ventilado:\n\n1. Fisiopatologia e Risco:\n   - Prematuros com SDR possuem alvéolos com complacências muito heterogêneas (áreas atelectásicas duras ao lado de alvéolos com surfactante mais frouxos);\n   - A ventilação com pressão positiva pode provocar barotrauma/volutrauma focal com rotura de alvéolos hiperdistendidos;\n   - O ar disseca pela bainha perivascular (enfisema intersticial pulmonar) e rompe para o espaço pleural;\n   - Se o orifício atua como válvula unidirecional, o ar entra na cavidade pleural a cada ciclo inspiratório e não sai, gerando PNEUMOTÓRAX HIPERTENSIVO com colapso pulmonar, desvio contralateral do mediastino, compressão das veias cavas e parada cardíaca por choque obstrutivo;\n\n2. Diagnóstico Rápido:\n   - Piora súbita da SpO2 e bradicardia;\n   - Assimetria torácica, abafamento do murmúrio unilateral e desvio do ictus;\n   - Teste de Transiluminação Torácica com feixe de luz de alta intensidade (halo de luz amplo no hemitórax acometido);\n\n3. Conduta de Urgência:\n   - NÃO AGUARDAR RADIOGRAFIA em paciente instável com colapso hemodinâmico;\n   - PUNÇÃO DE ALÍVIO IMEDIATA (toracocentese descompressiva com jelco/cateter fino no 2º espaço intercostal linha média clavicular ou 4º-5º espaço intercostal linha axilar média/anterior);\n   - A saída rápida de ar sob pressão alivia a tensão mediastinal imediatamente;\n   - Drenagem torácica tubular fechada em selo d\'água subsequente.',
    comentariosAlternativas: {
      A: 'Correta. O pneumotórax hipertensivo com choque obstrutivo exige punção descompressiva imediata de alívio sem aguardar exames de imagem.',
      B: 'Incorreta. Transportar um prematuro instável para tomografia levaria ao óbito por parada cardíaca anóxica no trajeto.',
      C: 'Incorreta. Elevar a pressão do ventilador mecânico forçaria mais ar para dentro do pneumotórax, acelerando o óbito.',
      D: 'Incorreta. Um pneumotórax hipertensivo neonatal causa morte em minutos se não descomprimido ativamente.',
    },
  },
  {
    id: 'ped-neo2-075',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Caso Integrador de Emergência Respiratória Neonatal: Algoritmo Completo de Manejo da SDR',
    isRevisao: false,
    enunciado:
      'Um recém-nascido prematuro de 30 semanas de gestação, pesando 1.250 g, nasce em hospital secundário de parto cesárea de urgência por descolamento prematuro de placenta. A mãe não realizou corticoterapia antenatal. Em sala de parto, o neonato foi colocado em saco plástico, posicionado e apresentou respiração espontânea presente e frequência cardíaca de 125 bpm, sendo instalado CPAP nasal com PEEP de 5 cmH2O e FiO2 de 30%. Ao chegar à UTI Neonatal aos 45 minutos de vida, encontra-se taquipneico (FR: 72 irpm), com gemência expiratória audível sem estetoscópio, tiragem intercostal e subcostal evidentes e batimento de asa nasal (Boletim de Silverman-Andersen = 7). A FiO2 foi titulada para 40% para manter a saturação em 91%. A radiografia de tórax evidencia infiltrado reticulogranular difuso homogêneo bilateral com broncogramas aéreos e redução de volume pulmonar (6 arcos costais posteriores visíveis). Considerando as diretrizes contemporâneas da Sociedade Brasileira de Pediatria e do Consenso Europeu de Manejo da SDR, qual é a sequência de condutas clínicas, medicamentosas e de suporte mais indicada para este momento?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Otimizar o CPAP nasal para PEEP de 6 cmH2O, administrar surfactante exógeno natural por técnica minimamente invasiva (LISA/MIST) preservando a respiração espontânea, iniciar dose de ataque de Citrato de Cafeína, colher hemoculturas e iniciar antibioticoterapia empírica com Ampicilina e Gentamicina.',
      },
      {
        id: 'B',
        texto:
          'Suspender o CPAP nasal, realizar intubação orotraqueal imediata com fixação de cânula traqueal, manter parâmetros de ventilação mecânica elevados por 10 dias e administrar furosemida intravenosa.',
      },
      {
        id: 'C',
        texto:
          'Manter apenas oxigênio em tenda facial a 100%, prescrever nebulização com adrenalina a cada 1 hora e suspender qualquer suporte pressórico.',
      },
      {
        id: 'D',
        texto:
          'Aguardar evolução clínica expectante até 48 horas de vida sem nenhuma intervenção farmacológica para que o pulmão atinja maturação natural espontânea.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Sequência Integrada de Manejo da Síndrome do Desconforto Respiratório (SDR/Membrana Hialina):\n\n1. Avaliação do Caso:\n   - Prematuro de 30 semanas sem corticoide antenatal (altíssimo risco);\n   - SDR estabelecida com esforço respiratório importante (Silverman-Andersen = 7);\n   - Radiografia típica (vidro fosco + broncogramas aéreos + hipoinsuflação);\n   - Falha inicial do CPAP em FiO2 de 30% (necessidade de FiO2 >= 40% aos 45 minutos de vida);\n\n2. Pilares da Conduta Baseada em Evidências:\n   - Passo 1: Otimizar o suporte não invasivo aumentando a PEEP para 6 cmH2O (pressão recomendada para recrutamento alveolar seguro);\n   - Passo 2: Administração precoce de SURFACTANTE EXÓGENO NATURAL (na primeira hora de vida) preferencialmente por método minimamente invasivo (LISA / MIST) com cateter fino, mantendo o bebê em respiração espontânea no CPAP nasal, o que diminui lesão induzida por ventilador e displasia broncopulmonar;\n   - Passo 3: Início de CITRATO DE CAFEÍNA precoce nas primeiras 24 horas (ataque de 20 mg/kg) para estimular o centro respiratório, melhorar contratilidade diafragmática e facilitar o sucesso do CPAP;\n   - Passo 4: Coleta de hemoculturas e início empírico de AMPICILINA + GENTAMICINA, visto que sepse precoce / pneumonia congênita por GBS é indistinguível da SDR e a mãe teve parto de urgência sem rastreamento prévio.',
    comentariosAlternativas: {
      A: 'Correta. Sintetiza a melhor prática clínica contemporânea: otimização da PEEP (6 cmH2O), surfactante por LISA/MIST, cafeína precoce e rastreio de sepse.',
      B: 'Incorreta. Intubação desnecessária com ventilação mecânica agressiva associada a furosemida lesiona os pulmões e desidrata o prematuro.',
      C: 'Incorreta. Tenda de oxigênio a 100% não fornece pressão positiva expiratória (causará atelectasia total) e adrenalina inalatória não trata deficiência de surfactante.',
      D: 'Incorreta. A conduta expectante em prematuro com SDR grave levará a acidose mista refratária, choque e óbito precoce.',
    },
  },
  {
    id: 'ped-neo2-076',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome de Aspiração Meconial: Fatores de Risco e Fisiopatologia Intraútero',
    isRevisao: false,
    enunciado:
      'Um recém-nascido nasce de parto cesárea de emergência na 41ª semana e 5 dias de idade gestacional devido a sofrimento fetal agudo intraparto (desacelerações tardias tipo DIP II repetidas e bradicardia fetal mantida de 80 bpm). Ao romper a bolsa das águas no ato cirúrgico, constata-se líquido amniótico espesso com coloração em "purê de ervilhas". O neonato nasce cianótico, flácido e em apneia. Em relação à fisiopatologia da eliminação e aspiração do mecônio para a árvore brônquica durante a vida intrauterina, qual afirmativa descreve com precisão a sequência de eventos biológicos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A asfixia e a hipóxia fetal aguda provocam vasoconstrição esplâncnica e hiperperistaltismo intestinal com relaxamento reflexo do esfíncter anal fetal, culminando na eliminação precoce de mecônio no líquido amniótico; concomitantemente, a hipoxemia estimula os centros respiratórios bulbares fetais, desencadeando movimentos respiratórios ofegantes e profundos ("gasping"), que aspiram o líquido meconial espesso para a traqueia e vias aéreas distais antes mesmo do nascimento.',
      },
      {
        id: 'B',
        texto:
          'A eliminação de mecônio é um evento exclusivamente fisiológico e inócuo que ocorre em 100% dos fetos pré-termo extremos antes da 24ª semana de gestação por imaturidade neurológica.',
      },
      {
        id: 'C',
        texto:
          'O mecônio é aspirado exclusivamente após a secção mecânica do cordão umbilical e apenas nos conceptos com tônus em flexão preservado.',
      },
      {
        id: 'D',
        texto:
          'A presença de mecônio no líquido amniótico decorre de malformação congênita obstrutiva exclusiva do cólon terminal associada à agenesia anal.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisiopatologia da Síndrome de Aspiração Meconial (SAM):\n\n1. O Mecônio e a Idade Gestacional:\n   - O mecônio é composto por células epiteliais descamadas, bile, suco pancreático, muco e lanugem;\n   - A eliminação de mecônio intraútero é um fenômeno raríssimo no prematuro < 34 semanas (devido à imaturidade do peristaltismo colônico e tônus esfincteriano anal competente);\n   - É característico do concepto A TERMO ou PÓS-TERMO (>= 41-42 semanas), cuja motilina intestinal já está em níveis maduros;\n\n2. O Desencadeador: Sofrimento Fetal Agudo e Hipóxia:\n   - Diante de asfixia perinatal/insuficiência placentária aguda, a hipoxemia e a acidose deflagram uma resposta autonômica:\n     1. Aumento do peristaltismo intestinal e relaxamento reflexo do esfíncter anal externo, levando à passagem de mecônio para o líquido amniótico;\n     2. A acidose e a hipóxia estimulam os quimiorreceptores centrais e centros respiratórios no tronco encefálico do feto, convertendo as respirações fetais superficiais fisiológicas em MOVIMENTOS RESPIRATÓRIOS OFEGANTES E PROFUNDOS ("GASPING FETAL");\n     3. Como a glote se abre durante o gasping, o líquido amniótico densamente meconial é aspirado ativamente para dentro da traqueia e dos brônquios distais AINDA DENTRO DO ÚTERO.',
    comentariosAlternativas: {
      A: 'Correta. A hipóxia fetal gera relaxamento do esfíncter anal com eliminação meconial e movimentos de gasping que aspiram o mecônio para o pulmão intraútero.',
      B: 'Incorreta. A eliminação de mecônio é extremamente rara em prematuros extremos < 24 semanas e se relaciona a conceptos maduros ou pós-termo.',
      C: 'Incorreta. A aspiração meconial ocorre predominantemente intraútero durante o sofrimento fetal agudo antes de qualquer intervenção no cordão.',
      D: 'Incorreta. Agenesia anal (ânus imperfurado) impediria fisicamente a saída de mecônio para a cavidade amniótica.',
    },
  },
  {
    id: 'ped-neo2-077',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome de Aspiração Meconial: Tríade Fisiopatológica Pulmonar e Escape Aéreo',
    isRevisao: false,
    enunciado:
      'A Síndrome de Aspiração Meconial (SAM) deflagra uma agressão pulmonar multifacetada e complexa nos alvéolos e vias aéreas terminais do recém-nascido. Dentre as alterações fisiopatológicas que se instalam nas primeiras horas após a aspiração do mecônio, qual alternativa descreve com exatidão os três mecanismos combinados que geram a gravidade da doença respiratória e o elevado risco de escape aéreo (pneumotórax)?',
    alternativas: [
      {
        id: 'A',
        texto:
          '1. Obstrução mecânica das pequenas vias aéreas em mecanismo de válvula unidirecional com aprisionamento aéreo (air-trapping) e hiperinsuflação propensa a pneumotórax; 2. Pneumonite química inflamatória induzida por ácidos biliares, sais biliares e enzimas proteolíticas; 3. Inativação biológica secundária do surfactante alveolar.',
      },
      {
        id: 'B',
        texto:
          '1. Estenose laringotraqueal cicatricial congênita; 2. Proliferação maciça de fungos do gênero Aspergillus; 3. Ausência genética completa de vasos capilares pulmonares.',
      },
      {
        id: 'C',
        texto:
          '1. Bloqueio neuromuscular periférico autolimitado; 2. Calcificação óssea dos brônquios fontes; 3. Paralisia permanente do nervo frênico bilateral.',
      },
      {
        id: 'D',
        texto:
          '1. Atresia congênita de esôfago distal; 2. Formação primária de membrana hialina por falta de pneumócitos tipo II; 3. Trombose exclusiva de veias cavas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Tríade Fisiopatológica Pulmonar da Síndrome de Aspiração Meconial (SAM):\n\n1. Obstrução Mecânica das Vias Aéreas e Mecanismo de "Válvula Unidirecional" (Ball-Valve Effect):\n   - As partículas espessas de mecônio migram para os bronquíolos;\n   - Na inspiração, as vias aéreas se dilatam ligeiramente, permitindo a entrada de ar;\n   - Na expiração, as vias aéreas se estreitam e os tampões meconiais ocluem completamente o lúmen, impedindo a saída do ar;\n   - Consequência: APRISIONAMENTO AÉREO (Air-trapping) regional, hiperinsuflação alveolar acentuada e risco altíssimo de rotura alveolar com ESCAPE AÉREO (Pneumotórax e Pneumomediastino ocorrem em 10 a 20% dos casos de SAM);\n   - Nos alvéolos completamente obstruídos, ocorre reabsorção do gás e atelectasia distal, criando áreas alternadas de atelectasia e hiperinsuflação;\n\n2. Pneumonite Química Inflamatória:\n   - Os sais biliares, ácidos graxos livres e enzimas proteolíticas presentes no mecônio causam agressão tóxica direta ao epitélio alveolar, com necrose celular, liberação de citocinas pró-inflamatórias (IL-1, IL-6, TNF-alfa), edema intersticial e extravasamento de plasma exsudativo rico em proteínas;\n\n3. Inativação Secundária do Surfactante Pulmonar:\n   - O mecônio desloca e inativa diretamente a dipalmitoilfosfatidilcolina e as proteínas SP-A e SP-B do surfactante endógeno, elevando a tensão superficial e provocando colapso alveolar generalizado similar ao da membrana hialina.',
    comentariosAlternativas: {
      A: 'Correta. A tríade clássica da SAM compreende obstrução mecânica em válvula (com air-trapping e pneumotórax), pneumonite química tóxica e inativação do surfactante.',
      B: 'Incorreta. A SAM não é causada por Aspergillus nem por estenose laríngea congênita.',
      C: 'Incorreta. Mecônio não calcifica brônquios nem causa paralisia frênica direta.',
      D: 'Incorreta. A formação de membrana hialina primária por imaturidade de pneumócitos é a SDR do prematuro; na SAM o surfactante sofre inativação secundária tóxica.',
    },
  },
  {
    id: 'ped-neo2-078',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome de Aspiração Meconial: Padrão Radiológico Típico',
    isRevisao: false,
    enunciado:
      'Recém-nascido pós-termo (42 semanas completas de gestação), peso de 3.650 g, que necessitou de reanimação em sala de parto após nascimento com líquido amniótico meconial espesso, evolui com insuficiência respiratória grave com tiragens intensas, tórax em tonel hiperexpansivo e cianose. A radiografia de tórax no leito da UTI revela: "Infiltrados radiopacos grosseiros, heterogêneos, nodulares e assimétricos distribuídos por ambos os campos pulmonares (aspecto em flocos de algodão), intercalados com áreas focais de hiperinsuflação e zonas de atelectasia subsegmentar, associados a retificação das cúpulas diafragmáticas e aumento do diâmetro ântero-posterior do tórax". Qual afecção respiratória neonatal apresenta este padrão radiológico clássico?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Síndrome de Aspiração Meconial (SAM).',
      },
      {
        id: 'B',
        texto:
          'Doença da Membrana Hialina típica não complicada.',
      },
      {
        id: 'C',
        texto:
          'Taquipneia Transitória do Recém-Nascido não complicada.',
      },
      {
        id: 'D',
        texto:
          'Hipoplasia pulmonar bilateral isolada sem escape aéreo.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Semiótica Radiológica da Síndrome de Aspiração Meconial (SAM):\n\n1. Infiltrado Grosseiro Heterogêneo em "Flocos de Algodão":\n   - A aspiração de partículas meconiais dispersas e o processo exsudativo da pneumonite química geram opacidades nodulares e densidades algodonosas espessas, difusas, porém muito HETEROGÊNEAS e ASSIMÉTRICAS;\n\n2. Alternância entre Áreas de Hiperinsuflação e Atelectasias:\n   - Como alguns bronquíolos sofrem obstrução parcial (efeito de válvula com retenção gasosa) e outros sofrem obstrução mecânica completa (reabsorção de ar e atelectasia), o parênquima exibe mosaico típico com áreas hiperlúcidas hiperinsufladas ao lado de densidades atelectásicas;\n\n3. Tórax Hiperinsuflado / Retificação Diafragmática:\n   - Aumento conspícuo do diâmetro ântero-posterior (tórax "em tonel") e retificação das cúpulas diafragmáticas (visualizando-se 9 ou mais arcos costais posteriores);\n\n4. Vigilância Obrigatória de Complicações:\n   - Presença frequente de escape aéreo extra-alveolar: pneumotórax (hiperluz sem trama na periferia) e pneumomediastino (ar dissecando a silhueta do timo - sinal da "asa de anjo" ou sinal da vela náutica).',
    comentariosAlternativas: {
      A: 'Correta. As densidades grosseiras heterogêneas em flocos de algodão intercaladas com hiperinsuflação e atelectasias em neonato a termo/pós-termo definem a SAM.',
      B: 'Incorreta. A membrana hialina apresenta infiltrado reticulogranular fino homogêneo ("vidro moído") com redução de volume pulmonar em prematuros.',
      C: 'Incorreta. A TTRN cursa com congestão peri-hilar vascular simétrica, cisurite e hiperinsuflação limpa, sem infiltrado grosseiro em flocos.',
      D: 'Incorreta. A hipoplasia pulmonar exibe volumes torácicos diminutos com pulmões pequenos e hipoplásicos, sem hiperinsuflação em tonel.',
    },
  },
  {
    id: 'ped-neo2-079',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Manejo em Sala de Parto: Abordagem do Recém-Nascido Banhado em Mecônio Não Vigoroso',
    isRevisao: false,
    enunciado:
      'Uma gestante pós-termo (41 semanas e 3 dias) dá à luz por via vaginal um neonato com líquido amniótico meconial espesso. Imediatamente após a expulsão, o pediatra avalia o recém-nascido e constata: criança em apneia, hipotônica (flácida) e com frequência cardíaca de 80 bpm (recém-nascido não vigoroso banhado em mecônio). Conforme as diretrizes atualizadas do Programa de Reanimação Neonatal da Sociedade Brasileira de Pediatria (SBP) e da International Liaison Committee on Resuscitation (ILCOR), qual é a conduta prioritária e imediata na mesa de reanimação?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Levar o recém-nascido à mesa de reanimação sob calor radiante, posicionar a cabeça com leve extensão, aspirar boca e narinas apenas se houver obstrução mecânica e iniciar Ventilação com Pressão Positiva (VPP) com máscara facial no primeiro minuto de vida ("minuto de ouro"), NÃO sendo mais indicada a intubação traqueal de rotina para aspiração meconial prévia à ventilação.',
      },
      {
        id: 'B',
        texto:
          'Realizar intubação orotraqueal imediata obrigatória antes de qualquer estímulo e aspirar a traqueia repetidamente por 10 minutos até que o aspirado venha totalmente límpido, retardando a ventilação se necessário.',
      },
      {
        id: 'C',
        texto:
          'Estimular vigorosamente o dorso da criança com compressas frias por 5 minutos antes de iniciar qualquer suporte respiratório.',
      },
      {
        id: 'D',
        texto:
          'Realizar lavagem gástrica imediata com soro fisiológico a 0,9% antes de avaliar o padrão respiratório.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Mudança Histórica de Diretriz: Manejo do RN Não Vigoroso com Líquido Meconial (SBP / ILCOR):\n\n1. O que se fazia no passado (Conduta antiga e SUPERADA):\n   - Historicamente, todo RN não vigoroso banhado em mecônio era imediatamente intubado para aspiração traqueal direta com dispositivo intermediário antes de iniciar a ventilação mecânica;\n\n2. A Evidência Científica Atual:\n   - Ensaios clínicos randomizados multicêntricos demonstraram que a aspiração traqueal de rotina no RN deprimido NÃO REDUZ a incidência de SAM, NÃO REDUZ o risco de HPPN e NÃO REDUZ a mortalidade neonatal;\n   - Pelo contrário: a tentativa de intubação imediata por profissionais com variados graus de habilidade causava ATRASO CRÍTICO no início da ventilação com pressão positiva, agravando a hipoxemia profunda, a acidose e a bradicardia grave no primeiro minuto de vida ("minuto de ouro");\n\n3. Diretriz Atual da SBP e AHA:\n   - INDEPENDENTE da presença de mecônio fluido ou espesso, o foco primordial no RN não vigoroso (apneia, respiração irregular ou FC < 100 bpm) é RESTABELECER A VENTILAÇÃO EFICAZ IMEDIATA;\n   - Passos iniciais rápidos sob calor radiante em 30 segundos (aspirar boca e narinas se secreção abundante) e INICIAR VENTILAÇÃO COM PRESSÃO POSITIVA (VPP) COM MÁSCARA FACIAL no primeiro minuto de vida;\n   - A intubação traqueal fica reservada apenas se houver falha da VPP com máscara facial ou para aspiração se houver suspeita de obstrução traqueal mecânica persistente que impeça a expansão torácica na VPP.',
    comentariosAlternativas: {
      A: 'Correta. A diretriz contemporânea prioriza o início imediato da VPP no primeiro minuto de vida, abolindo a intubação de rotina para aspiração meconial prévia.',
      B: 'Incorreta. Conduta histórica obsoleta e danosa; retarda a ventilação no minuto de ouro e agrava a acidose hipóxica.',
      C: 'Incorreta. Compressas frias causam hipotermia e o estímulo tátil excessivo em neonato em apneia atrasa a VPP mandatória.',
      D: 'Incorreta. Lavagem gástrica não tem nenhuma prioridade na reanimação em sala de parto.',
    },
  },
  {
    id: 'ped-neo2-080',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Síndrome de Aspiração Meconial: Terapêutica com Surfactante Exógeno',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo de 40 semanas com diagnóstico de Síndrome de Aspiração Meconial grave encontra-se sob ventilação mecânica invasiva na UTI Neonatal, necessitando de parâmetros ventilatórios elevados e FiO2 de 80% para sustentar saturação de oxigênio em 90%. O neonatologista indica a administração de surfactante exógeno. Qual é o racional farmacológico e o benefício clínico comprovado do uso de surfactante na SAM grave?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O mecônio inativa intensamente o surfactante pulmonar endógeno e altera sua composição fosfolipídica; a reposição com surfactante exógeno (em bolus ou lavagem broncoalveolar com surfactante diluído) neutraliza essa inativação, melhora a complacência pulmonar, reduz a necessidade de suporte ventilatório invasivo e diminui a necessidade de oxigenação por membrana extracorpórea (ECMO).',
      },
      {
        id: 'B',
        texto:
          'O surfactante atua como antibacteriano bactericida de amplo espectro que elimina Clostridium difficile da traqueia.',
      },
      {
        id: 'C',
        texto:
          'O surfactante serve exclusivamente para dilatar as cartilagens costais sem qualquer efeito sobre os alvéolos pulmonares.',
      },
      {
        id: 'D',
        texto:
          'O uso de surfactante na SAM é formalmente proscrito pela OMS por causar fechamento agudo da laringe.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Indicação e Mecanismo do Surfactante Exógeno na Síndrome de Aspiração Meconial (SAM):\n\n1. Fisiopatologia da Inativação:\n   - Na SAM, o problema primordial não é a falta de síntese (como no prematuro), mas sim a INATIVAÇÃO SECUNDÁRIA MASSIVA DO SURFACTANTE NATIVO pelas substâncias químicas do mecônio (ácidos graxos livres, bilirrubina, colesterol e proteínas plasmáticas extravasadas);\n   - A inativação do surfactante gera microatelectasias difusas, perda grave da complacência pulmonar e aumento drástico do shunt intrapulmonar;\n\n2. Evidências Clínicas (Revisões Sistemáticas Cochrane):\n   - O uso de surfactante exógeno natural na SAM grave:\n     1. Promove melhora rápida da relação PaO2/FiO2 e do índice de oxigenação (IO);\n     2. Reduz o tempo de permanência em ventilação mecânica invasiva e hospitalização;\n     3. REDUZ SIGNIFICATIVAMENTE A NECESSIDADE DE ECMO (Extracorporeal Membrane Oxygenation);\n   - Modalidades terapêuticas: pode ser administrado em bolus convencional (100 a 150 mg/kg) ou através de lavagem bronco-alveolar com surfactante altamente diluído para remoção de debris meconiais.',
    comentariosAlternativas: {
      A: 'Correta. O surfactante restaura a função alveolar comprometida pela inativação meconial e diminui significativamente a necessidade de ECMO.',
      B: 'Incorreta. Surfactante é uma mistura de fosfolipídios e apoproteínas tensoativas, sem ação antibiótica contra Clostridium.',
      C: 'Incorreta. O surfactante atua na interface ar-líquido alveolar e não nas cartilagens costais.',
      D: 'Incorreta. O uso de surfactante exógeno na SAM grave é amplamente respaldado pela literatura internacional e sociedades de neonatologia.',
    },
  },
  {
    id: 'ped-neo2-081',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Hipertensão Pulmonar Persistente do Neonato: Fisiopatologia e Transição Circulatória',
    isRevisao: false,
    enunciado:
      'Durante a vida fetal normal, a Resistência Vascular Pulmonar (RVP) é extremamente elevada e apenas cerca de 10% do débito cardíaco atinge os pulmões. Ao nascer, com as primeiras respirações e a entrada de oxigênio nos alvéolos, a RVP cai abruptamente em mais de 80%, estabelecendo o fluxo pulmonar definitivo. Na Hipertensão Pulmonar Persistente do Neonato (HPPN), qual alteração hemodinâmica fundamental caracteriza a falha dessa transição circulatória normal?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Persistência patológica da resistência vascular pulmonar elevada (em níveis sistêmicos ou supra-sistêmicos), gerando hipofluxo pulmonar grave e desvio maciço de sangue desoxigenado da direita para a esquerda através do canal arterial patente (PCA) e/ou forame oval patente (FOP).',
      },
      {
        id: 'B',
        texto:
          'Queda excessiva e irreversível da resistência vascular sistêmica abaixo de zero com parada total da perfusão miocárdica.',
      },
      {
        id: 'C',
        texto:
          'Abertura anatômica anômala de múltiplos canais linfáticos para a aorta ascendente com estenose da veia porta.',
      },
      {
        id: 'D',
        texto:
          'Fechamento imediato do forame oval com inversão espontânea de todas as câmaras cardíacas esquerdas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fisiopatologia da Hipertensão Pulmonar Persistente do Neonato (HPPN):\n\n1. Transição Circulatória Normal ao Parto:\n   - No útero: RVP muito alta (arteríolas pulmonares contraídas pela hipóxia fetal fisiológica e mediadores vasoconstritores como endotelina-1 e tromboxano);\n   - No nascimento: Expansão pulmonar com ar, elevação da PaO2 alveolar e produção endotelial rápida de vasodilatadores potentes (ÓXIDO NÍTRICO e PROSTACICLINA - PGI2) desencadeiam queda abrupta da RVP;\n   - Com a RVP muito menor que a Resistência Vascular Sistêmica (RVS), o fluxo sanguíneo é direcionado para a circulação pulmonar;\n\n2. Falha na Transição (HPPN):\n   - Ocorre falha na queda normal da RVP (por vasoconstrição reativa decorrente de asfixia/acidose, hipoplasia pulmonar ou hipertrofia muscular da camada média das arteríolas pulmonares);\n   - A pressão na artéria pulmonar iguala ou ultrapassa a pressão na aorta sistêmica;\n   - Consequência Hemodinâmica Primordial: O sangue venoso desoxigenado que retorna ao átrio direito encontra grande resistência para entrar nos pulmões e desvia-se para o lado esquerdo através das comunicações fetais patentes (SHUNT DIREITA-ESQUERDA pelo Forame Oval e pelo Canal Arterial);\n   - Esse shunt D-E descarrega sangue escuro sem oxigênio diretamente na circulação sistêmica, provocando HIPOXEMIA PROFUNDA, cianose intensa e acidose tecidual.',
    comentariosAlternativas: {
      A: 'Correta. A RVP supra-sistêmica mantém o shunt extrapulmonar da direita para a esquerda pelo PCA e FOP, definindo a fisiopatologia da HPPN.',
      B: 'Incorreta. O distúrbio primário localiza-se na árvore vascular pulmonar e não em vasodilatação sistêmica nula.',
      C: 'Incorreta. Não há comunicação anômala linfático-aórtica nem estenose de veia porta na fisiopatologia da HPPN.',
      D: 'Incorreta. Na HPPN o forame oval e o canal arterial permanecem abertos funcionando como rotas de escape para o shunt direita-esquerda.',
    },
  },
  {
    id: 'ped-neo2-082',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'HPPN: Gradiente de Oximetria Pré-Ductal versus Pós-Ductal',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo com desconforto respiratório e cianose central é avaliado pelo neonatologista com monitorização simultânea por oximetria de pulso em dois sítios anatômicos distintos: no membro superior direito (MSD) e no membro inferior esquerdo (MIE). O oxímetro posicionado no MSD registra uma saturação de oxigênio de 94%, enquanto o oxímetro no MIE registra 81%, configurando uma diferença marcante de 13% entre os sítios. O que explica anatomicamente esse gradiente de saturação pré-ductal versus pós-ductal na Hipertensão Pulmonar Persistente do Neonato?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O sangue oxigenado ejetado pelo ventrículo esquerdo irriga a artéria subclávia direita (membro superior direito - território pré-ductal), enquanto o sangue desoxigenado proveniente do ventrículo direito é desviado em shunt da direita para a esquerda através do canal arterial patente para a aorta descendente distalmente à emergência dos vasos braquiocefálicos (membros inferiores - território pós-ductal).',
      },
      {
        id: 'B',
        texto:
          'Trata-se de um artefato técnico de posicionamento do sensor que ocorre sempre que o membro superior direito está em posição mais elevada que os membros inferiores.',
      },
      {
        id: 'C',
        texto:
          'Ocorre porque os membros inferiores consomem 10 vezes mais oxigênio por minuto do que a circulação cerebral e dos membros superiores.',
      },
      {
        id: 'D',
        texto:
          'O gradiente decorre de trombose aguda e oclusão mecânica completa de ambas as artérias femorais comuns.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fundamentação Anatômica do Gradiente Pré e Pós-Ductal na HPPN (Tema Obrigatório em Concursos):\n\n1. Anatomia Vascular do Arco Aórtico:\n   - O arco aórtico emite sequencialmente três grandes ramos:\n     1. Tronco braquiocefálico (que origina a artéria subclávia direita e a carótida comum direita);\n     2. Artéria carótida comum esquerda;\n     3. Artéria subclávia esquerda;\n   - A inserção do CANAL ARTERIAL (Ductus Arteriosus) na aorta ocorre LOGO APÓS a emergência da artéria subclávia esquerda, na transição para a aorta descendente;\n\n2. Território Pré-Ductal vs Pós-Ductal:\n   - Circulação PRÉ-DUCTAL: Membro Superior Direito (MSD) e cabeça/cérebro recebem sangue ejetado diretamente pelo ventrículo esquerdo (que recebe o sangue que passou pelos pulmões);\n   - Circulação PÓS-DUCTAL: Membros Inferiores (e abdome) recebem sangue da aorta descendente, que se localiza distalmente à inserção do canal arterial;\n\n3. O Mecanismo do Gradiente na HPPN:\n   - Na HPPN com shunt D-E pelo canal arterial, o sangue venoso desoxigenado que sai da artéria pulmonar entra na aorta descendente;\n   - Portanto, a aorta descendente recebe uma mistura rica em sangue desoxigenado;\n   - Critério Diagnóstico: Uma diferença na SpO2 > 5% a 10% (ou diferença na PaO2 > 15-20 mmHg) entre o MSD (pré-ductal) e os MMII (pós-ductal) comprova o shunt da direita para a esquerda pelo canal arterial e é um sinal semiótico altamente característico da HPPN (ou de cardiopatias congênitas ducto-dependentes com coarctação de aorta).',
    comentariosAlternativas: {
      A: 'Correta. O MSD é pré-ductal (sangue antes do canal) e os MMII são pós-ductais (sangue que recebeu o desvio venoso do canal arterial).',
      B: 'Incorreta. Não é artefato, mas sim um reflexo fiel da anatomia vascular do arco aórtico e do canal arterial.',
      C: 'Incorreta. O consumo metabólico tecidual basal é semelhante e não justificaria uma queda de 13% na saturação arterial de pulso.',
      D: 'Incorreta. A oximetria de pulso pós-ductal reflete sangue hipoxêmico pulsátil e não trombose oclusiva com ausência de pulso.',
    },
  },
  {
    id: 'ped-neo2-083',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'HPPN: Teste da Hiperóxia no Diagnóstico Diferencial da Cianose Neonatal',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo apresenta cianose central importante refratária com saturação de 78%. Para diferenciar entre doença parenquimatosa pulmonar, hipertensão pulmonar persistente do recém-nascido e cardiopatia congênita cianótica com fluxo pulmonar dependente de canal, a equipe neonatal realiza o Teste da Hiperóxia fornecendo oxigênio a 100% (FiO2 1,0) por 10 a 15 minutos em campânula/máscara e colhe gasometria arterial no membro superior direito. Qual padrão gasométrico de resposta de PaO2 é característico de uma Cardiopatia Congênita Cianótica com shunt anatômico fixo, diferenciando-a das afecções pulmonares puras?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A PaO2 arterial permanece significativamente baixa (habitualmente < 100 a 150 mmHg) mesmo sob oferta de oxigênio a 100%, demonstrando a presença de um shunt anatômico intracardíaco obrigatório fixo.',
      },
      {
        id: 'B',
        texto:
          'A PaO2 arterial ultrapassa imediatamente 450 mmHg, afastando qualquer hipótese de malformação cardiovascular.',
      },
      {
        id: 'C',
        texto:
          'Ocorre elevação instantânea do pH para 7,85 associada a hipocapnia extrema de 5 mmHg.',
      },
      {
        id: 'D',
        texto:
          'A PaO2 e a saturação caem obrigatoriamente para zero em todas as coletas gasométricas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'O Teste da Hiperóxia no Diagnóstico Diferencial da Cianose Neonatal:\n\n1. Princípio do Teste:\n   - Administra-se oxigênio a 100% (FiO2 = 1,0) por cerca de 10 a 15 minutos;\n   - Colhe-se gasometria arterial (preferencialmente na artéria radial direita - pré-ductal);\n\n2. Interpretação dos Padrões de Resposta da PaO2:\n   - Doença Pulmonar Parenquimatosa Pura (SDR, TTRN leve):\n     - Como os alvéolos são progressivamente recrutados e a barreira de difusão é vencida pelo alto gradiente de O2, a PaO2 arterial SOBE EXPRESSIVAMENTE, habitualmente ultrapassando 150 a 200 mmHg (frequentemente > 300-400 mmHg);\n   - Cardiopatia Congênita Cianótica com Shunt Anatômico Intracardíaco Fixo (ex: Transposição das Grandes Artérias, Atresia Pulmonar, Tetralogia de Fallot extrema):\n     - Como grande volume de sangue venoso não passa pelos alvéolos ventilados e é ejetado diretamente na aorta por uma via anatômica fixa, o oxigênio alveolar a 100% não consegue oxigenar esse sangue desviado;\n     - A PaO2 PERMANECE BAIXA (habitualmente < 100 mmHg ou no máximo 150 mmHg);\n   - Hipertensão Pulmonar Persistente do Neonato (HPPN):\n     - Apresenta resposta variável/lábil. Frequentemente a PaO2 permanece baixa (< 100-150 mmHg) devido ao intenso shunt extrapulmonar pelo canal arterial e forame oval, mas pode exibir resposta hiperóxica parcial ou oscilações abruptas com estímulos mínimos ("hipoxemia lábil").',
    comentariosAlternativas: {
      A: 'Correta. PaO2 persistentemente baixa (< 100-150 mmHg) sob FiO2 a 100% reflete shunt anatômico fixo característico de cardiopatia congênita cianótica.',
      B: 'Incorreta. Se a PaO2 ultrapassasse 450 mmHg, estaria confirmada a integridade vascular e doença pulmonar com boa reserva de difusão.',
      C: 'Incorreta. O teste avalia a PaO2 e a capacidade de oxigenação arterial, não provocando alcalose extrema descompensada.',
      D: 'Incorreta. A PaO2 nunca atinge zero em recém-nascidos vivos sob oxigenoterapia.',
    },
  },
  {
    id: 'ped-neo2-084',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'HPPN: Ecocardiograma com Doppler como Exame Confirmatório',
    isRevisao: false,
    enunciado:
      'Para confirmar o diagnóstico de Hipertensão Pulmonar Persistente do Neonato (HPPN) e afastar com segurança cardiopatias congênitas estruturais cianóticas (como a Transposição das Grandes Artérias e a Drenagem Anômala Total das Veias Pulmonares), o Ecocardiograma com Doppler é o exame de escolha padrão-ouro na UTI Neonatal. Quais são os achados ecocardiográficos clássicos que confirmam a presença de hipertensão pulmonar supra-sistêmica no recém-nascido?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Estimativa de Pressão Sistólica da Artéria Pulmonar (PSAP) elevada pelo refluxo tricúspide (igual ou superior à pressão arterial sistêmica), retificação ou abaulamento do septo interventricular para dentro do ventrículo esquerdo ("formato em D" do VE na sístole) e shunt bidirecional ou da direita para a esquerda pelo canal arterial e forame oval, com anatomia cardíaca estrutural normal.',
      },
      {
        id: 'B',
        texto:
          'Presença obrigatória de estenose aórtica bicúspide associada a atresia da valva mitral com hipertrofia do ventrículo esquerdo.',
      },
      {
        id: 'C',
        texto:
          'Shunt exclusivo da esquerda para a direita de alto fluxo com pressão pulmonar mensurada em zero mmHg.',
      },
      {
        id: 'D',
        texto:
          'Ausência completa de artérias pulmonares e agenesia do ventrículo direito.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Achados do Ecocardiograma com Doppler na HPPN:\n\n1. Confirmação Estrutural:\n   - O primeiro papel do ecocardiograma é EXCLUIR cardiopatia congênita anatômica cianótica ducto-dependente;\n\n2. Sinais Diretos e Indiretos de Hipertensão Pulmonar:\n   - Estimativa da Pressão Sistólica da Artéria Pulmonar (PSAP):\n     - Calculada pela velocidade máxima do jato de regurgitação tricúspide pela equação de Bernoulli ($PSAP = 4v^2 + PAD$);\n     - Na HPPN grave, a PSAP é igual ou superior (supra-sistêmica) à pressão arterial sistólica;\n   - Desvio do Septo Interventricular (Sinal do "Ventrículo Esquerdo em D"):\n     - Sob alta pressão no ventrículo direito, o septo interventricular é empurrado/abaulado para a cavidade do ventrículo esquerdo na sístole e diástole, achatando o VE e conferindo formato em letra "D";\n   - Direção dos Shunts Extrapulmonares:\n     - Doppler no Canal Arterial: fluxo com shunt bidirecional ou exclusivamente DA DIREITA PARA A ESQUERDA (artéria pulmonar -> aorta descendente);\n     - Doppler no Forame Oval: shunt da DIREITA PARA A ESQUERDA (átrio direito -> átrio esquerdo).',
    comentariosAlternativas: {
      A: 'Correta. A PSAP supra-sistêmica, a retificação do septo interventricular ("formato em D") e o shunt D-E pelo PCA/FOP confirmam a HPPN.',
      B: 'Incorreta. Essas anomalias compõem a Síndrome da Hipoplasia do Ventrículo Esquerdo, uma cardiopatia congênita estrutural.',
      C: 'Incorreta. A pressão pulmonar na HPPN é extremamente alta (supra-sistêmica) e o shunt característico é da direita para a esquerda.',
      D: 'Incorreta. Agenesia do ventrículo direito é uma malformação congênita anatômica grave e não a HPPN com anatomia íntegra.',
    },
  },
  {
    id: 'ped-neo2-085',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'HPPN: Terapia com Óxido Nítrico Inalatório (iNO)',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo com diagnóstico de HPPN grave confirmada por ecocardiograma apresenta hipoxemia refratária com Índice de Oxigenação (IO) de 28, a despeito de ventilação mecânica sincronizada otimizada e sedação adequada. O neonatologista prescreve o tratamento farmacológico de primeira linha padrão-ouro para vasodilatação pulmonar seletiva: Óxido Nítrico Inalatório (iNO). Qual é o mecanismo de ação do iNO, a dose inicial recomendada e sua principal vantagem sobre os vasodilatadores intravenosos sistêmicos?',
    alternativas: [
      {
        id: 'A',
        texto:
          'O iNO difunde-se exclusivamente para os alvéolos ventilados e relaxa a musculatura lisa arteriolar pulmonar adjacente via estimulação da guanilato ciclase solúvel e aumento de GMP cíclico (GMPc); sua dose inicial é de 20 partes por milhão (ppm); sua grande vantagem é ser um vasodilatador seletivo pulmonar que não provoca hipotensão arterial sistêmica, pois ao atingir a corrente sanguínea é imediatamente inativado pela hemoglobina gerando metemoglobina.',
      },
      {
        id: 'B',
        texto:
          'O iNO atua bloqueando receptores nicotínicos no esôfago; a dose é de 500 ppm; causa hipotensão sistêmica profunda e parada circulatória intencional.',
      },
      {
        id: 'C',
        texto:
          'O iNO é um anestésico geral inalatório administrado a 100 ppm que paralisa o diafragma por 14 dias.',
      },
      {
        id: 'D',
        texto:
          'O iNO só tem eficácia se administrado por via intramuscular diluído em óleo mineral.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Terapia com Óxido Nítrico Inalatório (iNO) na HPPN:\n\n1. Mecanismo de Ação e Seletividade Pulmonar:\n   - O Óxido Nítrico é um gás incolor que, ao ser introduzido no circuito do ventilador mecânico, atinge EXCLUSIVAMENTE os alvéolos ventilados;\n   - Difunde-se através do epitélio para as células musculares lisas das arteríolas pulmonares vizinhas;\n   - Ativa a enzima Guanilato Ciclase Solúvel, convertendo GTP em GMP cíclico (GMPc), o que reduz os níveis intracelulares de cálcio e provoca VASODILATAÇÃO PULMONAR INTENSA;\n   - Redistribui o fluxo sanguíneo preferencialmente para as áreas ventiladas, otimizando a relação ventilação/perfusão (V/Q) e diminuindo o shunt D-E;\n\n2. Ausência de Vasodilatação Sistêmica (O "Segredo" do iNO):\n   - Por que o iNO não causa vasodilatação e hipotensão sistêmica como nitroprussiato ou prostaciclina EV?\n   - Porque assim que o iNO atravessa o vaso capilar e entra no sangue, ele se liga com afinidade ultra-alta à HEMOGLOBINA (formando nitrosil-hemoglobina e metemoglobina), sendo INATIVADO EM FRAÇÃO DE SEGUNDOS;\n   - Logo, sua ação fica estritamente restrita à microcirculação pulmonar;\n\n3. Dose e Monitorização:\n   - Dose inicial padrão: 20 ppm (partes por milhão) - doses maiores (> 20-40 ppm) não trazem benefício adicional e aumentam o risco de toxicidade;\n   - Efeito adverso dose-dependente: METEMOGLOBINEMIA (monitorar níveis seriados de metemoglobina, mantendo-os < 2,5-5%) e formação de dióxido de nitrogênio (NO2) tóxico.',
    comentariosAlternativas: {
      A: 'Correta. O iNO age via GMPc na dose de 20 ppm e é um vasodilatador seletivo pulmonar inativado rapidamente pela hemoglobina, poupando a pressão sistêmica.',
      B: 'Incorreta. Doses de 500 ppm causariam intoxicação fatal por metemoglobinemia e lesão pulmonar por dióxido de nitrogênio.',
      C: 'Incorreta. O iNO não é anestésico geral e não paralisa a musculatura diafragmática.',
      D: 'Incorreta. O iNO é um gás inalatório de ação tópica alveolar e não pode ser administrado por via intramuscular.',
    },
  },
  {
    id: 'ped-neo2-086',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'HPPN: Suporte Hemodinâmico, Cálculo do Índice de Oxigenação e Indicação de ECMO',
    isRevisao: false,
    enunciado:
      'Na condução de um neonato com HPPN grave refratária, o cálculo do Índice de Oxigenação (IO) é a ferramenta matemática padronizada para monitorar a gravidade da insuficiência respiratória hipoxêmica e balizar a indicação de suporte com ECMO (Oxigenação por Membrana Extracorpórea). Como é calculada a fórmula do Índice de Oxigenação (IO) e qual valor de corte mantido por mais de 4 horas indica falha da terapêutica médica máxima com indicação formal de suporte por ECMO?',
    alternativas: [
      {
        id: 'A',
        texto:
          'IO = [Pressão Média de Vias Aéreas (MAP em cmH2O) x Fração Inspirada de Oxigênio (FiO2 em %) x 100] / PaO2 (em mmHg); valores de IO >= 40 mantidos indicam falha da terapêutica convencional e indicação formal de ECMO neonatal.',
      },
      {
        id: 'B',
        texto:
          'IO = Peso do paciente em gramas dividido pela frequência cardíaca; valores > 2 indicam ECMO imediata.',
      },
      {
        id: 'C',
        texto:
          'IO = Idade gestacional em semanas multiplicada pelo pH arterial; valores < 7 indicam ECMO.',
      },
      {
        id: 'D',
        texto:
          'IO = Nível de glicemia capilar dividido pela bilirrubina indireta; valores > 50 indicam ECMO.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Índice de Oxigenação (IO) e Critérios de Indicação de ECMO na HPPN Neonatal:\n\n1. Fórmula Matemática do Índice de Oxigenação (Oxygenation Index - OI):\n   $$\\text{IO} = \\frac{\\text{MAP} \\times \\text{FiO}_2 \\times 100}{\\text{PaO}_2}$$\n   - Onde:\n     - MAP = Pressão Média de Vias Aéreas (Mean Airway Pressure) mensurada em cmH2O;\n     - FiO2 = Fração inspirada de oxigênio expressa em número decimal ou porcentagem fracionada (ex: se FiO2 100%, usa-se 1,0 ou se mantido na fórmula $\\times 100$ usa-se porcentagem);\n     - PaO2 = Pressão parcial de oxigênio colhida na gasometria arterial pós-ductal/pré-ductal em mmHg;\n\n2. Estratificação de Gravidade pelo IO:\n   - IO < 15: Hipoxemia leve a moderada;\n   - IO entre 15 e 25: Insuficiência respiratória grave (indicação formal de iNO se IO > 15-20);\n   - IO entre 25 e 40: HPPN muito grave com alto risco de mortalidade;\n   - IO >= 40 (mantido em coletas gasométricas por 3 a 4 horas consecutivas): Mortalidade superior a 80% sob terapia médica convencional -> CRITÉRIO CLÁSSICO E FORMAL DE INDICAÇÃO DE ECMO NEONATAL (Oxigenação por Membrana Extracorpórea venoarterial ou venovenosa).',
    comentariosAlternativas: {
      A: 'Correta. A fórmula do IO correlaciona MAP, FiO2 e PaO2; um IO >= 40 persistente define a indicação clássica de ECMO neonatal.',
      B: 'Incorreta. O peso dividido pela frequência cardíaca não mensura oxigenação alveolar nem função pulmonar.',
      C: 'Incorreta. Não existe fórmula de IO baseada na multiplicação de idade gestacional por pH.',
      D: 'Incorreta. Glicemia e bilirrubina são marcadores metabólicos e hematológicos, não índices de oxigenação pulmonar.',
    },
  },
  {
    id: 'ped-neo2-087',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Infecções Neonatais: Sepse Precoce versus Sepse Tardia e Vias de Transmissão',
    isRevisao: false,
    enunciado:
      'A sepse neonatal é classificada cronológica e fisiopatologicamente em Sepse Precoce e Sepse Tardia. Essa distinção direciona os patógenos prováveis, a via de contaminação e o espectro antimicrobiano inicial. Em relação às características epidemiológicas e biológicas que diferenciam a Sepse Neonatal Precoce da Sepse Neonatal Tardia, assinale a afirmativa correta:',
    alternativas: [
      {
        id: 'A',
        texto:
          'A Sepse Precoce manifesta-se tipicamente nas primeiras 48 a 72 horas de vida, decorre de transmissão vertical materna (intraútero por via ascendente ou durante a passagem pelo canal de parto) e seus principais agentes são Streptococcus agalactiae (GBS) e Escherichia coli; já a Sepse Tardia manifesta-se habitualmente após 72 horas de vida, tem caráter nosocomial ou comunitário e é causada prevalentemente por Staphylococcus coagulase-negativa, Staphylococcus aureus e bacilos Gram-negativos hospitalares.',
      },
      {
        id: 'B',
        texto:
          'A Sepse Precoce ocorre exclusivamente aos 28 dias de vida e é transmitida pelo leite materno congelado contaminado por vírus da influenza.',
      },
      {
        id: 'C',
        texto:
          'A Sepse Tardia é causada invariavelmente por protozoários transmitidos pelo cordão umbilical no 1º minuto pós-parto.',
      },
      {
        id: 'D',
        texto:
          'Não há qualquer diferença temporal, bacteriana ou de via de transmissão entre as formas precoce e tardia.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diferenciação entre Sepse Neonatal Precoce e Tardia:\n\n1. Sepse Precoce (Early-Onset Sepsis):\n   - Marco temporal: Início dos sintomas clínicos nas primeiras 48 a 72 horas de vida (alguns consensos usam 48h, a maioria dos protocolos e provas adota até 72h);\n   - Mecanismo de transmissão: VERTICAL (infecção ascendente a partir do trato genital materno após rotura de membranas ou contato direto do concepto com a flora colonizadora vaginal durante o trabalho de parto);\n   - Patógenos mais frequentes:\n     1. Streptococcus agalactiae (Estreptococo do Grupo B - GBS);\n     2. Escherichia coli (predominante em prematuros de muito baixo peso);\n     3. Listeria monocytogenes (menos frequente, transmissão transplacentária);\n   - Apresentação clínica: frequentemente fulminante, com envolvimento respiratório proeminente (pneumonia congênita), choque séptico precoce e hipertensão pulmonar persistente;\n\n2. Sepse Tardia (Late-Onset Sepsis):\n   - Marco temporal: Início após 72 horas de vida (geralmente entre o 4º e o 90º dia de vida);\n   - Mecanismo de transmissão: HORIZONTAL (aquisição no ambiente hospitalar da UTI Neonatal - infecção relacionada à assistência à saúde através de cateteres venosos centrais, tubo traqueal, nutrição parenteral, ou no domicílio);\n   - Patógenos mais frequentes: Staphylococcus coagulase-negativa (Staphylococcus epidermidis - responsável por quase 50% dos casos em prematuros com acesso venoso central), Staphylococcus aureus, Klebsiella pneumoniae, Pseudomonas aeruginosa, Enterobacter spp. e Candida albicans.',
    comentariosAlternativas: {
      A: 'Correta. Diferencia perfeitamente a sepse precoce (< 48-72h, vertical, GBS/E. coli) da sepse tardia (> 72h, nosocomial/horizontal, estafilococos/Gram-negativos hospitalares).',
      B: 'Incorreta. Sepse precoce manifesta-se nas primeiras 48-72h de vida e não aos 28 dias, sendo bacteriana vertical e não viral.',
      C: 'Incorreta. A sepse tardia é causada por bactérias nosocomiais hospitalares e não por protozoários no primeiro minuto.',
      D: 'Incorreta. A distinção temporal, etiológica e terapêutica entre sepse precoce e tardia é um dos alicerces da infectologia neonatal.',
    },
  },
  {
    id: 'ped-neo2-088',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Sepse Neonatal Precoce: Fatores de Risco Maternos e Critérios de Gravidade',
    isRevisao: false,
    enunciado:
      'Uma puérpera dá à luz um recém-nascido a termo que com 6 horas de vida apresenta letargia, hipotermia (temperatura axilar de 35,4 °C) e gemência respiratória intermitente. O pediatra analisa o prontuário obstétrico da mãe em busca de fatores de risco maiores para sepse neonatal precoce. Dentre as condições maternas abaixo, qual configura critério clássico de Corioamnionite Clínica que confere o maior risco de infecção bacteriana invasiva ao concepto?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Presença de febre materna intraparto (temperatura axilar >= 38,0 °C) associada a taquicardia fetal sustentada (> 160 bpm), útero doloroso e líquido amniótico purulento ou fétido.',
      },
      {
        id: 'B',
        texto:
          'Náuseas matinais isoladas durante o primeiro trimestre gestacional já resolvidas há meses.',
      },
      {
        id: 'C',
        texto:
          'Bolsa rota ocorrida 30 minutos antes do período expulsivo em parturiente afebril.',
      },
      {
        id: 'D',
        texto:
          'Ganho ponderal materno de 10 kg ao longo de toda a gravidez com urocultura estéril.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Fatores de Risco para Sepse Neonatal Precoce e o Diagnóstico de Corioamnionite Materna:\n\n1. Corioamnionite Clínica Materna (Critérios de Gibbs):\n   - É o fator de risco individual de maior gravidade para sepse neonatal precoce fulminante;\n   - Diagnóstico: FEBRE MATERNA INTRAPARTO (temperatura axilar >= 38 °C ou temperatura oral >= 38,3 °C) acompanhada de pelo menos dois dos seguintes critérios:\n     1. Taquicardia fetal mantida (> 160 bpm por > 10 minutos);\n     2. Taquicardia materna (> 100 bpm);\n     3. Hipersensibilidade / dor à palpação do corpo uterino fora da contração;\n     4. Líquido amniótico com odor fétido ou aspecto purulento;\n     5. Leucocitose materna (> 15.000 células/mm³ com desvio à esquerda);\n\n2. Outros Fatores de Risco Maiores:\n   - Rotura Prematura de Membranas Ovulares (RPMO) >= 18 horas;\n   - Trabalho de parto prematuro inexplicado (< 37 semanas);\n   - Colonização materna por Streptococcus agalactiae (GBS) sem profilaxia antimicrobiana adequada;\n   - História de filho anterior com sepse por GBS;\n   - Bacteriúria por GBS na gestação atual (indicador de alta colonização genital materna).',
    comentariosAlternativas: {
      A: 'Correta. A febre materna associada a taquicardia fetal, dor uterina e líquido fétido define corioamnionite clínica, o maior fator de risco para sepse precoce.',
      B: 'Incorreta. Êmese no 1º trimestre é queixa fisiológica habitual que não tem relação com infecção bacteriana intraparto.',
      C: 'Incorreta. Rotura de bolsa com 30 minutos é fisiológica do parto e não eleva o risco infeccioso (o risco aumenta significativamente com RPMO >= 18h).',
      D: 'Incorreta. Ganho de peso adequado e urocultura negativa são marcadores de pré-natal saudável.',
    },
  },
  {
    id: 'ped-neo2-089',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Profilaxia Intraparto para GBS: Indicações e Diretrizes Clínicas',
    isRevisao: false,
    enunciado:
      'O rastreamento da colonização materna por Streptococcus agalactiae (Estreptococo do Grupo B - EGB/GBS) através de swab combinado vaginal e anorretal coletado entre a 35ª e 37ª semanas de gestação é uma das estratégias de maior impacto em saúde pública neonatal. Conforme as diretrizes do Ministério da Saúde e do CDC, em qual das situações obstétricas abaixo a Profilaxia Antimicrobiana Intraparto (IAP) NÃO está indicada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Gestante a termo em trabalho de parto cuja cultura de rastreamento para GBS vaginal/anorretal coletada há 2 semanas foi comprovadamente negativa, mesmo que a paciente apresente dilatação de 4 cm.',
      },
      {
        id: 'B',
        texto:
          'Gestante com cultura vaginal/anorretal positiva para GBS com 36 semanas, em trabalho de parto ativo.',
      },
      {
        id: 'C',
        texto:
          'Parturiente que teve filho anterior afetado por sepse neonatal invasiva comprovada por GBS.',
      },
      {
        id: 'D',
        texto:
          'Gestante que apresentou bacteriúria assintomática confirmada por GBS em qualquer trimestre da gestação atual.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Diretrizes de Profilaxia Antimicrobiana Intraparto (IAP) para Prevenção da Sepse por GBS:\n\n1. Situações em que a Profilaxia Intraparto ESTÁ FORMALMENTE INDICADA:\n   - Cultura anorretal/vaginal POSITIVA para GBS entre 35 e 37 semanas (válida por 5 semanas);\n   - Presença de BACTERIÚRIA por GBS na gestação atual (mesmo que tratada na época, pois denota intensa colonização do trato urogenital);\n   - Antecedente de FILHO ANTERIOR com infecção neonatal invasiva por GBS (sepse, pneumonia ou meningite);\n   - Gestante com status de GBS DESCONHECIDO no momento do parto na presença de QUALQUER um dos fatores de risco:\n     a) Trabalho de parto prematuro (< 37 semanas);\n     b) Rotura de membranas >= 18 horas;\n     c) Febre materna intraparto (temperatura axilar >= 38 °C);\n\n2. Situações em que a Profilaxia Intraparto NÃO ESTÁ INDICADA:\n   - Cultura para GBS NEGATIVA no pré-natal realizada nas últimas 5 semanas (mesmo que haja bolsa rota prolongada, a cultura negativa recente afasta a colonização na grande maioria dos casos);\n   - Cesariana eletiva programada com bolsa amniótica ÍNTEGRA realizada antes do início do trabalho de parto (mesmo em mães GBS positivas, pois não há contaminação fetal sem bolsa rota ou trabalho de parto).',
    comentariosAlternativas: {
      A: 'Correta. Gestante com cultura negativa para GBS colhida nas últimas 5 semanas NÃO tem indicação de profilaxia intraparto.',
      B: 'Incorreta. Cultura positiva é a principal indicação formal de profilaxia intraparto.',
      C: 'Incorreta. Antecedente de filho anterior com doença invasiva por GBS exige profilaxia mandatória em todas as gestações subsequentes sem necessidade de rastreio prévio.',
      D: 'Incorreta. Bacteriúria por GBS na gestação atual indica colonização maciça e impõe profilaxia intraparto mandatória.',
    },
  },
  {
    id: 'ped-neo2-090',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Profilaxia Intraparto para GBS: Esquemas Farmacológicos e Tempo Adequado',
    isRevisao: false,
    enunciado:
      'Uma gestante com 38 semanas, com rastreamento positivo para GBS, é admitida em trabalho de parto na maternidade. O obstetra prescreve a Profilaxia Antimicrobiana Intraparto (IAP). Qual é o antibiótico de primeira linha e o regime posológico recomendado, bem como o tempo mínimo de infusão antes do nascimento para que a profilaxia seja considerada "plenamente adequada"?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Penicilina G Cristalina intravenosa na dose de ataque de 5.000.000 UI, seguida de 2.500.000 UI a cada 4 horas até o clampeamento do cordão (ou Ampicilina 2 g IV de ataque seguida de 1 g a cada 4 horas); sendo considerada profilaxia adequada se a primeira dose for administrada pelo menos 4 horas antes do desprendimento fetal.',
      },
      {
        id: 'B',
        texto:
          'Ciprofloxacino oral em dose única administrado 15 minutos antes do nascimento.',
      },
      {
        id: 'C',
        texto:
          'Azitromicina intramuscular administrada diariamente por 3 semanas consecutivas.',
      },
      {
        id: 'D',
        texto:
          'Sulfametoxazol com trimetoprima por via retal imediatamente após o corte do cordão umbilical.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Esquemas de Profilaxia Antimicrobiana Intraparto (IAP) e Definição de Adequação:\n\n1. Antibiótico de Escolha (Primeira Linha):\n   - PENICILINA G CRISTALINA (Aquosa) por via INTRAVENOSA:\n     - Dose de ataque: 5.000.000 UI IV;\n     - Manutenção: 2.500.000 a 3.000.000 UI IV a cada 4 horas até o parto;\n   - Alternativa de primeira linha equivalente:\n     - AMPICILINA IV: 2 g de ataque, seguido de 1 g IV a cada 4 horas até o parto;\n\n2. Alternativas em Casos de Alergia Materna à Penicilina:\n   - Sem histórico de anafilaxia/angioedema (baixo risco): CEFAZOLINA IV (2 g de ataque, depois 1 g a cada 8h);\n   - Com histórico de anafilaxia (alto risco):\n     - Se cepa sensível testada em antibiograma: CLINDAMICINA IV (900 mg a cada 8h);\n     - Se cepa resistente à clindamicina ou suscetibilidade desconhecida: VANCOMICINA IV (20 mg/kg a cada 8h);\n\n3. Critério de "Profilaxia Adequada":\n   - A primeira dose do antibiótico intravenoso DEVE ser concluída pelo menos 4 HORAS ANTES do nascimento;\n   - Esse intervalo de 4 horas garante níveis bactericidas adequados no líquido amniótico e nos tecidos fetais;\n   - Antibióticos orais ou doses infundidas < 4 horas antes do nascimento são considerados profilaxia INADEQUADA.',
    comentariosAlternativas: {
      A: 'Correta. A Penicilina Cristalina (ou Ampicilina) IV iniciada pelo menos 4 horas antes do parto define o regime profilático adequado padrão-ouro.',
      B: 'Incorreta. Ciprofloxacino não é usado em gestantes para GBS e 15 minutos não confere proteção tecidual ao concepto.',
      C: 'Incorreta. Azitromicina não é a droga de escolha e profilaxia intraparto deve ser administrada em infusão parenteral venosa no parto.',
      D: 'Incorreta. Antibióticos após o parto não têm ação profilática intraútero e sulfas não tratam GBS.',
    },
  },
  {
    id: 'ped-neo2-091',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Abordagem do Recém-Nascido Exposto a Fatores de Risco Infecciosos',
    isRevisao: false,
    enunciado:
      'Um recém-nascido a termo nasce de parto normal após rotura prematura de membranas de 20 horas de duração. A mãe é GBS positiva e recebeu duas doses de Penicilina Cristalina intravenosa (a primeira dose foi realizada 5 horas antes do parto). Ao exame físico minucioso em alojamento conjunto com 2 horas de vida, o neonato apresenta-se ativo, reativo, com frequência cardíaca de 130 bpm, frequência respiratória de 46 irpm, afebril, eupnéico e com sucção vigorosa ao seio materno, sem qualquer sinal clínico de desconforto ou anormalidade. De acordo com as diretrizes do CDC e da Sociedade Brasileira de Pediatria para manejo do RN assintomático exposto ao GBS com profilaxia materna adequada, qual é a conduta correta?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Manter o recém-nascido em observação clínica rigorosa em alojamento conjunto por no mínimo 36 a 48 horas avaliando sinais vitais periodicamente, NÃO sendo indicada coleta de exames laboratoriais nem início de antibioticoterapia empírica, visto que o bebê está assintomático e a mãe recebeu profilaxia intraparto adequada.',
      },
      {
        id: 'B',
        texto:
          'Internar imediatamente na UTI neonatal para intubação orotraqueal e início de vancomicina profilática por 21 dias.',
      },
      {
        id: 'C',
        texto:
          'Coletar punção lombar mandatória e manter jejum absoluto com nutrição parenteral total por 7 dias.',
      },
      {
        id: 'D',
        texto:
          'Dar alta hospitalar precoce imediata com 6 horas de vida sem nenhuma monitorização de sinais vitais.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Algoritmo do Neonato Assintomático Exposto ao Streptococcus agalactiae (GBS):\n\n1. Análise dos Critérios:\n   - Mãe recebeu profilaxia adequada? SIM (Penicilina Cristalina IV iniciada 5 horas antes do parto, cumprindo o critério >= 4 horas);\n   - Mãe tinha corioamnionite? NÃO;\n   - Como está o recém-nascido ao exame físico? ASSINTOMÁTICO (exame físico rigorosamente normal);\n\n2. Conduta Padronizada (SBP / CDC / AAP):\n   - O recém-nascido assintomático de mãe com profilaxia intraparto adequada NÃO necessita de coleta de sangue (hemograma, PCR ou hemocultura);\n   - NÃO necessita de punção lombar;\n   - NÃO deve receber antibioticoterapia empírica;\n   - Conduta: OBSERVAÇÃO CLÍNICA HOSPITALAR por pelo menos 36 a 48 horas antes da alta, com aferição seriada de sinais vitais (temperatura, frequência cardíaca, frequência respiratória e perfusão periférica), pois mais de 90% dos casos sintomáticos de sepse precoce manifestam-se nas primeiras 48 horas de vida.',
    comentariosAlternativas: {
      A: 'Correta. Neonato assintomático com profilaxia materna adequada requer apenas observação clínica criteriosa por 36-48h no alojamento conjunto.',
      B: 'Incorreta. Medidas invasivas de UTI em bebê sadio são totalmente iatrogênicas e descabidas.',
      C: 'Incorreta. Punção lombar está formalmente contraindicada em neonatos assintomáticos com exame físico normal.',
      D: 'Incorreta. A alta antes de 36-48h é contraindicada pelo risco de o bebê desenvolver sepse em domicílio durante a janela crítica.',
    },
  },
  {
    id: 'ped-neo2-092',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Tratamento da Sepse Neonatal Precoce: Esquema Antimicrobiano Empírico de 1ª Linha',
    isRevisao: false,
    enunciado:
      'Um recém-nascido com 10 horas de vida apresenta quadro de sepse precoce sintomática caracterizado por gemência respiratória, instabilidade térmica, má perfusão periférica (tempo de enchimento capilar de 4 segundos) e distensão abdominal. A mãe apresentou febre intraparto de 38,4 °C e bolsa rota há 24 horas sem antibioticoterapia prévia. Após a coleta imediata de duas amostras de hemocultura, qual é o esquema antimicrobiano empírico parenteral de primeira linha preconizado pela Sociedade Brasileira de Pediatria e pela literatura internacional?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Ampicilina associada a um Aminoglicosídeo (preferencialmente Gentamicina ou Amicacina).',
      },
      {
        id: 'B',
        texto:
          'Vancomicina associada a Meropenem e Anfotericina B.',
      },
      {
        id: 'C',
        texto:
          'Ceftriaxona em monoterapia por via intramuscular.',
      },
      {
        id: 'D',
        texto:
          'Eritromicina oral associada a sulfadiazina.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Esquema Empírico de Primeira Linha para Sepse Neonatal Precoce:\n\n1. A Dupla de Escolha: AMPICILINA + AMINOGLICOSÍDEO (Gentamicina ou Amicacina):\n   - Esse esquema tradicional é o padrão-ouro mundial para sepse precoce devido a:\n     1. Excelente cobertura contra o Streptococcus agalactiae (GBS) e Listeria monocytogenes pela Ampicilina;\n     2. Excelente cobertura contra enterobactérias Gram-negativas entéricas (especialmente Escherichia coli) pelo Aminoglicosídeo;\n     3. Potente SINERGISMO bactericida entre a ampicilina (que lesa a parede celular bacteriana) e a gentamicina (que penetra facilmente no citoplasma para inibir a subunidade 30S do ribossomo);\n\n2. Por que NÃO USAR Ceftriaxona no Neonato (Pegadinha Clássica de Concursos)?\n   - A Ceftriaxona é FORMALMENTE CONTRAINDICADA no período neonatal precoce por dois motivos graves:\n     a) Desloca a bilirrubina ligada à albumina plasmática, aumentando o risco de Kernicterus (encefalopatia bilirrubínica) mesmo em níveis mais baixos de bilirrubina;\n     b) Forma precipitados insolúveis de ceftriaxona-cálcio em pulmões e rins quando infundida com soluções contendo cálcio (como gluconato de cálcio da nutrição parenteral);\n\n3. Por que não iniciar com Vancomicina e Meropenem de cara?\n   - Deve-se evitar o uso empírico indiscriminado de antibióticos de amplo espectro para prevenir seleção de bactérias multirresistentes na UTI neonatal, reservando-os para sepse tardia nosocomial comprovada ou choque séptico refratário.',
    comentariosAlternativas: {
      A: 'Correta. Ampicilina + Gentamicina é o esquema padrão-ouro para sepse precoce, cobrindo com sinergismo GBS, Listeria e E. coli.',
      B: 'Incorreta. Vancomicina + Meropenem é esquema para sepse nosocomial tardia multirresistente e não para sepse precoce comunitária/vertical de primeira linha.',
      C: 'Incorreta. Ceftriaxona é contraindicada em neonatos por deslocar bilirrubina da albumina (risco de kernicterus) e precipitar com cálcio.',
      D: 'Incorreta. Eritromicina oral e sulfas não têm espectro para bacteremia e choque séptico neonatal precoce.',
    },
  },
  {
    id: 'ped-neo2-093',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Meningite Bacteriana no Período Neonatal: Ajuste Terapêutico e Parâmetros Liquóricos',
    isRevisao: false,
    enunciado:
      'Um recém-nascido de termo com 18 horas de vida internado com sepse precoce apresenta episódio de crise convulsiva clônica focal em membro superior direito e fontanela anterior tensa. A punção lombar revela líquido cefalorraquidiano turvo com pleocitose de 1.850 leucócitos/mm³ (predomínio de 90% de polimorfonucleares), glicose no LCR de 8 mg/dL (glicemia concomitante: 85 mg/dL) e proteínas elevadas em 320 mg/dL. A bacterioscopia pelo método de Gram evidencia cocos Gram-positivos aos pares e em cadeias (compatíveis com Streptococcus agalactiae). Diante da confirmação de Meningite Bacteriana Neonatal por GBS, qual é a duração recomendada do tratamento parenteral e a dose da Ampicilina?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Manter a antibioticoterapia parenteral por no mínimo 14 a 21 dias com doses meningocêntricas dobradas de Ampicilina (300 mg/kg/dia divididos de acordo com a idade pós-natal), associando gentamicina nos primeiros dias até a negativação das culturas liquóricas de controle.',
      },
      {
        id: 'B',
        texto:
          'Suspender os antibióticos após 48 horas de vida e manter apenas hidratação oral exclusiva com chá de camomila.',
      },
      {
        id: 'C',
        texto:
          'Administrar penicilina benzatina intramuscular em dose única e conceder alta hospitalar imediata.',
      },
      {
        id: 'D',
        texto:
          'Realizar drenagem ventricular externa contínua sem nenhum tipo de antimicrobiano por 3 meses.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Manejo da Meningite Bacteriana Neonatal por Streptococcus agalactiae (GBS):\n\n1. Parâmetros Liquóricos da Meningite Bacteriana Neonatal:\n   - Pleocitose acentuada com franco predomínio de neutrófilos/polimorfonucleares (> 80-90%);\n   - Hipoglicorraquia grave (relação glicose LCR / glicose sérica < 0,5 ou < 0,33);\n   - Hiperproteinorraquia marcante (> 150-200 mg/dL);\n\n2. Doses Meningocêntricas:\n   - Como a barreira hematoencefálica inflamada impõe dificuldade para a penetração ótima dos antibióticos no LCR, a dose de AMPICILINA deve ser DOBRADA para níveis de SNC:\n   - Dose para meningite: 300 mg/kg/dia de Ampicilina (em vez dos habituais 100-150 mg/kg/dia para sepse comum sem meningite);\n\n3. Duração do Tratamento:\n   - Para meningite neonatal por bactérias Gram-positivas (GBS e Listeria): mínimo de 14 a 21 DIAS de tratamento parenteral pleno;\n   - (Para meningites por Gram-negativos entéricos como E. coli, preconiza-se no mínimo 21 dias ou 14 dias após a primeira cultura liquórica negativa);\n   - Punção lombar de controle após 48-72h de início do tratamento é indicada para documentar esterilização liquórica.',
    comentariosAlternativas: {
      A: 'Correta. A meningite por GBS exige doses meningocêntricas elevadas de ampicilina (300 mg/kg/dia) e duração mínima de 14 a 21 dias.',
      B: 'Incorreta. Suspender antibiótico precocemente causaria morte iminente por ventriculite e choque séptico.',
      C: 'Incorreta. A penicilina benzatina não atinge níveis terapêuticos no sistema nervoso central para tratar meningite.',
      D: 'Incorreta. Drenagem ventricular externa sem antibióticos não cura a infecção bacteriana e agrava o prognóstico.',
    },
  },
  {
    id: 'ped-neo2-094',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Displasia Broncopulmonar: Definição Contemporânea e Classificação de Gravidade',
    isRevisao: false,
    enunciado:
      'A Displasia Broncopulmonar (DBP) é a sequela pulmonar crônica mais prevalente em prematuros extremos sobreviventes à UTI Neonatal. De acordo com o consenso clássico do NICHD (National Institute of Child Health and Human Development) e atualizações dos workshops internacionais de neonatologia, como é definida a DBP e qual é o marco cronológico utilizado para avaliar a sua gravidade em recém-nascidos com idade gestacional inferior a 32 semanas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Definida pela necessidade de oxigênio suplementar (> 21%) por pelo menos 28 dias de vida, sendo a gravidade (leve, moderada ou grave) estratificada na avaliação realizada quando a criança atinge 36 semanas de Idade Pós-Menstrual (ou no momento da alta hospitalar, o que ocorrer primeiro).',
      },
      {
        id: 'B',
        texto:
          'Definida exclusivamente pela presença de tosse noturna aos 5 anos de idade sem histórico de prematuridade.',
      },
      {
        id: 'C',
        texto:
          'Definida pela necessidade de oxigênio por apenas 1 hora após o nascimento em recém-nascido a termo de 40 semanas.',
      },
      {
        id: 'D',
        texto:
          'Definida pelo aparecimento de tuberculose congênita com calcificações pleurais nas primeiras 24 horas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Definição e Classificação da Displasia Broncopulmonar (DBP) em Prematuros < 32 Semanas:\n\n1. Critério Diagnóstico Inicial:\n   - Uso contínuo de OXIGÊNIO SUPLEMENTAR (FiO2 > 21%) por no mínimo 28 DIAS DE VIDA cumulativos;\n\n2. Marco Cronológico de Classificação de Gravidade:\n   - A avaliação da gravidade é realizada quando o prematuro completa 36 SEMANAS DE IDADE PÓS-MENSTRUAL (IPM = Idade gestacional ao nascer + semanas de vida pós-natal) ou na alta hospitalar (o que ocorrer primeiro);\n\n3. Estratificação de Gravidade (Consenso NICHD):\n   - DBP Leve: Em ar ambiente com 36 semanas de IPM (não necessita mais de oxigênio com 36 sem);\n   - DBP Moderada: Necessita de oxigênio suplementar em concentração baixa (< 30%) com 36 semanas de IPM;\n   - DBP Grave: Necessita de oxigênio com FiO2 >= 30% e/ou suporte ventilatório com pressão positiva contínua (CPAP nasal, cânula de alto fluxo ou ventilação mecânica invasiva) com 36 semanas de IPM.',
    comentariosAlternativas: {
      A: 'Correta. A DBP requer dependência de oxigênio por >= 28 dias e é estadiada nas 36 semanas de Idade Pós-Menstrual.',
      B: 'Incorreta. Tosse aos 5 anos em termo é asma infantil e não displasia broncopulmonar da prematuridade.',
      C: 'Incorreta. O critério temporal exige pelo menos 28 dias contínuos de suporte de O2 e prematuridade.',
      D: 'Incorreta. A DBP não é causada por tuberculose congênita nem se relaciona a calcificações pleurais em 24h.',
    },
  },
  {
    id: 'ped-neo2-095',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Displasia Broncopulmonar: Fisiopatologia da "Nova DBP" e Simplificação Alveolar',
    isRevisao: false,
    enunciado:
      'A descrição clássica da Displasia Broncopulmonar feita por Northway em 1967 envolvia prematuros maiores com fibrose extensa e metaplasia epitelial induzida por alta pressão e toxicidade de oxigênio ("Antiga DBP"). Com o advento do surfactante exógeno e da ventilação protetora, o padrão histopatológico mudou radicalmente para a chamada "Nova Displasia Broncopulmonar". Qual é a alteração histopatológica primordial que define a "Nova DBP" em prematuros extremos < 28 semanas?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Interrupção/parada precoce no desenvolvimento da septação alveolar secundária com simplificação alveolar (alvéolos em menor número, volumosos e simplificados) associada a dismorfismo na vasculogênese e angiogênese capilar pulmonar.',
      },
      {
        id: 'B',
        texto:
          'Proliferação tumoral benigna massiva de células de Schwann nos brônquios lobares.',
      },
      {
        id: 'C',
        texto:
          'Destruição purulenta necrosante completa de ambos os pulmões por bacilos anaeróbios estritos.',
      },
      {
        id: 'D',
        texto:
          'Ossificação heterotópica completa de todas as cartilagens traqueais com perda das vias aéreas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'A Transição Histopatológica: "Antiga DBP" versus "Nova DBP":\n\n1. A "Antiga DBP" (Era Pré-Surfactante - Northway, 1967):\n   - Ocorria em prematuros maiores (30 a 34 semanas);\n   - Causada por barotrauma agressivo com altas pressões inspiratórias no ventilador e toxicidade extrema por oxigênio a 100%;\n   - Histopatologia: Fibrose parenquimatosa heterogênea densa, metaplasia escamosa epitelial brônquica e hipertrofia marcante do músculo liso das vias aéreas;\n\n2. A "Nova DBP" (Era Pós-Surfactante e UTI Moderna):\n   - Ocorre em prematuros extremos (24 a 28 semanas) que nascem durante a fase sacular ou canalicular tardia do desenvolvimento pulmonar, antes de iniciarem a alveolarização verdadeira (que ocorre da 32ª-36ª semana até os primeiros anos de vida);\n   - Mecanismo biológico primordial:\n     - PARADA NO DESENVOLVIMENTO / ARREST OF ALVEOLAR DEVELOPMENT;\n     - Interrupção da septação alveolar secundária;\n     - Consequência: Alvéolos escassos, simplificados e grandes (menor área de superfície de troca gasosa) com espessamento da matriz intersticial;\n     - Dismorfismo microvascular: Menor densidade de capilares pulmonares, com distribuição desordenada na parede alveolar;\n   - Não há fibrose exuberante; o problema central é uma PARADA DA MATURAÇÃO E CRESCIMENTO ALVEOLAR E VASCULAR.',
    comentariosAlternativas: {
      A: 'Correta. A "Nova DBP" caracteriza-se pela parada na septação alveolar (simplificação com alvéolos grandes e em menor número) e dismorfismo capilar.',
      B: 'Incorreta. Schwannomas são tumores neurais periféricos e não têm relação com a patogênese da DBP.',
      C: 'Incorreta. A DBP não é necrose purulenta anaeróbia, mas um distúrbio de desenvolvimento morfogênico tecidual.',
      D: 'Incorreta. Não ocorre ossificação da árvore respiratória.',
    },
  },
  {
    id: 'ped-neo2-096',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Prevenção da Displasia Broncopulmonar: Estratégias Ventilatórias e Nutricionais',
    isRevisao: false,
    enunciado:
      'A prevenção da Displasia Broncopulmonar exige um pacote de medidas terapêuticas protetoras multidisciplinares ("care bundle") instituídas desde a sala de parto. Dentre as estratégias a seguir, qual reúne intervenções respiratórias, medicamentosas e nutricionais comprovadamente eficazes na redução da incidência de DBP segundo a medicina baseada em evidências?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Utilização de CPAP nasal precoce em sala de parto, ventilação mecânica invasiva sincronizada com Volume Garantido (visando volumes correntes baixos de 4 a 5 mL/kg), titulação criteriosa de FiO2 com metas de saturação estritas (91 a 95%), administração precoce de Citrato de Cafeína e restrição hídrica cuidadosa evitando sobrecarga volêmica.',
      },
      {
        id: 'B',
        texto:
          'Intubação profilática de todos os prematuros com volume corrente elevado de 15 mL/kg associada a hiperoxigenação contínua a 100% por 30 dias.',
      },
      {
        id: 'C',
        texto:
          'Administração diária de antibióticos de amplo espectro por via venosa contínua associada a sobrecarga hídrica de 300 mL/kg/dia.',
      },
      {
        id: 'D',
        texto:
          'Proibição definitiva do uso de leite materno na UTI neonatal substituindo-o exclusivamente por glicose a 5%.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Pacote Preventivo Baseado em Evidências para Displasia Broncopulmonar (DBP):\n\n1. Estratégias Ventilatórias Protetoras:\n   - CPAP nasal precoce em sala de parto com PEEP 5-6 cmH2O (reduz a necessidade de intubação);\n   - Se intubação necessária: Extubação rápida precoce (INSURE/LISA) e uso de ventilação ciclada a tempo com VOLUME GARANTIDO (VG), regulando volume corrente entre 4 e 5 mL/kg (evita volutrauma e hipocapnia);\n   - Metas de Oximetria Estritas: Manter SpO2 entre 91% e 95% (evitando hiperóxia tóxica com SpO2 > 95-96% que deflagra estresse oxidativo e lesão celular);\n\n2. Estratégias Farmacológicas:\n   - Citrato de Cafeína iniciado precocemente nas primeiras 24 a 72 horas de vida (Estudo CAP);\n   - Uso de Vitamina A intramuscular profilática em prematuros de extremo baixo peso (auxilia na diferenciação epitelial alveolar);\n\n3. Estratégias Hídricas e Nutricionais:\n   - Controle hídrico restritivo/criterioso nos primeiros dias de vida (evitar sobrecarga que favorece a patência do canal arterial e edema pulmonar intersticial);\n   - Promoção do aleitamento materno (leite humano reduz o estresse oxidativo e a sepse tardia).',
    comentariosAlternativas: {
      A: 'Correta. CPAP precoce, volume garantido protetor (4-5 mL/kg), metas de SpO2 91-95%, cafeína e controle hídrico compõem o bundle preventivo de DBP.',
      B: 'Incorreta. Volume corrente de 15 mL/kg geraria volutrauma maciço e hiperóxia contínua a 100% destruiria os alvéolos por peroxidação lipídica.',
      C: 'Incorreta. Sobrecarga hídrica de 300 mL/kg causa edema pulmonar grave e PCA sintomático, fatores precipitantes maiores de DBP.',
      D: 'Incorreta. O leite materno é fortemente protetor contra a DBP e a privação nutricional atrasaria a regeneração alveolar.',
    },
  },
  {
    id: 'ped-neo2-097',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Corticoterapia Pós-Natal na DBP: Protocolo DART e Balanço Risco-Benefício',
    isRevisao: false,
    enunciado:
      'Um recém-nascido prematuro extremo de 25 semanas de gestação, atualmente com 28 dias de vida, permanece dependente de ventilação mecânica invasiva com parâmetros elevados, sem conseguir progredir para desmame e extubação após repetidas tentativas. O ecocardiograma descartou canal arterial patente e a radiografia revela áreas císticas com hiperinsuflação e espessamento broncovascular sugestivos de DBP em evolução. A equipe multiprofissional discute a administração de corticoterapia pós-natal sistêmica com Dexametasona em baixas doses (Protocolo DART). Qual é a principal indicação e o efeito adverso neurológico grave que restringe o uso de corticoides pós-natais exclusivamente para casos de alto risco ventilatório?',
    alternativas: [
      {
        id: 'A',
        texto:
          'A indicação é facilitar a extubação traqueal em prematuros criticamente dependentes do ventilador mecânico invasivo que falharam repetidamente no desmame; seu uso é restrito devido ao risco aumentado documentado de Paralisia Cerebral e atraso no neurodesenvolvimento a longo prazo associado ao uso precoce ou em altas doses de corticoides.',
      },
      {
        id: 'B',
        texto:
          'A indicação é a prevenção rotineira de DBP em todos os bebês prematuros no 1º dia de vida; não apresenta nenhum efeito adverso em longo prazo.',
      },
      {
        id: 'C',
        texto:
          'A indicação exclusiva é o tratamento de infecções fúngicas invasivas congênitas no sistema urinário.',
      },
      {
        id: 'D',
        texto:
          'O uso de dexametasona é proibido em qualquer idade da infância por causar atrofia óssea de 100% dos ossos em 2 horas.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Corticoterapia Pós-Natal Sistêmica na Displasia Broncopulmonar (Protocolo DART):\n\n1. O Dilema Histórico do Corticoide Pós-Natal:\n   - Nos anos 1990, a dexametasona pós-natal era amplamente prescrita de rotina em altas doses nas primeiras semanas de vida para prevenir ou tratar DBP;\n   - Estudos de seguimento a longo prazo demonstraram um aumento dramático na incidência de PARALISIA CEREBRAL (atraso motor, diplegia e tetraplegia espástica) e redução do volume cerebral em crianças expostas a esquemas precoces/prolongados de dexametasona;\n\n2. Diretrizes Atuais da Academia Americana de Pediatria e Sociedade Brasileira de Pediatria:\n   - O uso profilático precoce (< 7 dias de vida) é FORMALMENTE CONTRAINDICADO;\n   - O uso tardio (> 2 a 4 semanas de vida) deve ser reservado estritamente para o subgrupo de "alto risco" de dependência prolongada de ventilação mecânica (prematuros que não conseguem ser extubados e correm risco de morte por insuficiência respiratória crônica);\n\n3. O Protocolo DART (Dexamethasone: A Randomized Trial):\n   - Utiliza Dexametasona em BAIXAS DOSES regressivas ao longo de 10 DIAS (dose cumulativa total de apenas 0,89 mg/kg);\n   - Benefício: Potente ação anti-inflamatória, reduz o edema de via aérea, melhora a complacência pulmonar e permite a EXTUBAÇÃO BEM-SUCEDIDA na maioria dos pacientes dependentes, minimizando a toxicidade neurológica.',
    comentariosAlternativas: {
      A: 'Correta. A dexametasona em baixas doses (DART) é restrita para permitir a extubação em bebês ventilador-dependentes devido ao risco de paralisia cerebral.',
      B: 'Incorreta. O uso precoce de rotina no 1º dia é contraindicado por causar neurotoxicidade e lesão cerebral irreversível.',
      C: 'Incorreta. Corticosteroides não são antifúngicos; ao contrário, são imunossupressores que elevam o risco de candidíase invasiva.',
      D: 'Incorreta. O corticoide tem indicação precisa em casos refratários selecionados e não causa dissolução óssea aguda em horas.',
    },
  },
  {
    id: 'ped-neo2-098',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Complicações da DBP: Hipertensão Pulmonar Associada à Prematuridade Extrema',
    isRevisao: false,
    enunciado:
      'Um prematuro de 26 semanas de gestação, pesando 780 g ao nascer, atinge 36 semanas de idade pós-menstrual internado na UTI Neonatal com diagnóstico de Displasia Broncopulmonar grave, mantendo suporte com cânula nasal de alto fluxo e FiO2 de 35%. Nas últimas semanas, a equipe médica observa episódios frequentes de dessaturação abrupta e cianose sem causa pulmonar aparente nova, com aumento da intensidade da segunda bulha cardíaca (hiperfonese de B2 em foco pulmonar) e hepatomegalia. Qual complicação cardiovascular crônica frequente na DBP grave deve ser ativamente rastreada por ecocardiograma antes da alta hospitalar?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Hipertensão Pulmonar crônica associada à DBP com sobrecarga e hipertrofia de ventrículo direito (Cor Pulmonale).',
      },
      {
        id: 'B',
        texto:
          'Mixoma atrial esquerdo gigante pedunculado com oclusão mitral.',
      },
      {
        id: 'C',
        texto:
          'Prolapso de valva aórtica com calcificação difusa do miocárdio ventricular esquerdo.',
      },
      {
        id: 'D',
        texto:
          'Fístula arteriovenosa coronariana congênita traumática pós-parto.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Hipertensão Pulmonar Associada à Displasia Broncopulmonar (HP-DBP):\n\n1. Fisiopatologia e Incidência:\n   - Ocorre em 15 a 25% dos prematuros com DBP moderada a grave;\n   - Mecanismo: A parada no desenvolvimento alveolar é acompanhada por dismorfismo microvascular grave (menor densidade de leito vascular capilar pulmonar, hipertrofia da camada média das artérias pulmonares e perda da reatividade vasodilatadora), agravada por hipoxemia alveolar crônica intermitente;\n   - Esse leito vascular restrito eleva cronicamente a pós-carga do ventrículo direito;\n\n2. Manifestações Clínicas e Diagnóstico:\n   - Aumento da segunda bulha cardíaca (hiperfonese de B2);\n   - Crises súbitas de hipoxemia/dessaturação refratária desproporcionais;\n   - Sobrecarga e hipertrofia ventricular direita com evolução para Cor Pulmonale e insuficiência cardíaca direita (hepatomegalia, edema periférico);\n   - Rastreamento Mandatório: Todas as diretrizes (AHA/ATS e SBP) recomendam triagem ecocardiográfica seriada aos 36 semanas de IPM em todos os bebês com DBP moderada a grave para detecção precoce de HP antes da alta hospitalar;\n\n3. Manejo:\n   - Manter metas de oximetria estritas (evitar hipoxemia com SpO2 < 92-94%);\n   - Vasodilatadores pulmonares orais (ex.: Sildenafila - inibidor da fosfodiesterase-5) nos casos confirmados com acompanhamento conjunto da cardiologia pediátrica.',
    comentariosAlternativas: {
      A: 'Correta. A hipertensão pulmonar crônica associada à DBP com hipertrofia de ventrículo direito (cor pulmonale) é a principal complicação cardiovascular.',
      B: 'Incorreta. Mixoma atrial é tumor cardíaco raríssimo do adulto, não sendo complicação da DBP neonatal.',
      C: 'Incorreta. Prolapso aórtico com calcificação miocárdica não tem relação com a vasculopatia da DBP.',
      D: 'Incorreta. Fístula coronariana congênita é anomalia estrutural rara e não sequela vascular da prematuridade.',
    },
  },
  {
    id: 'ped-neo2-099',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Profilaxia contra o Vírus Sincicial Respiratório (VSR) em Lactentes com DBP: Palivizumabe',
    isRevisao: false,
    enunciado:
      'Lactente de 4 meses de idade cronológica (38 semanas de idade corrigida), portador de Displasia Broncopulmonar com uso domiciliar de oxigênio por cânula nasal em baixo fluxo (0,25 L/min), está em acompanhamento no ambulatório de seguimento de prematuros de alto risco (follow-up). A mãe questiona sobre a proteção contra infecções graves pelo Vírus Sincicial Respiratório (VSR) durante os meses de outono e inverno. Conforme as diretrizes do Ministério da Saúde e da Sociedade Brasileira de Pediatria, qual imunoprofilaxia passiva com anticorpo monoclonal está formalmente indicada e como deve ser administrada?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Palivizumabe na dose de 15 mg/kg por via intramuscular, administrado mensalmente em até 5 doses consecutivas durante o período de maior circulação sazonal do VSR no primeiro e no segundo ano de vida (se persistir com necessidade de tratamento nos últimos 6 meses).',
      },
      {
        id: 'B',
        texto:
          'Vacina de vírus vivo atenuado contra o VSR administrada por via oral em dose única diária por 6 meses.',
      },
      {
        id: 'C',
        texto:
          'Aplicação de imunoglobulina antitetânica associada a sulfadiazina oral.',
      },
      {
        id: 'D',
        texto:
          'Nebulização diária com ribavirina pura durante todos os dias do inverno.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Imunoprofilaxia contra o Vírus Sincicial Respiratório (VSR) com Palivizumabe (Diretrizes Ministério da Saúde / SBP):\n\n1. O Agente e a Vulnerabilidade do Lactente com DBP:\n   - O VSR é o principal agente etiológico de bronquiolite viral aguda e pneumonia viral na infância;\n   - Lactentes com DBP possuem área de troca gasosa reduzida, hiper-reatividade brônquica e baixa reserva cardiorrespiratória;\n   - A infecção pelo VSR em crianças com DBP cursa com taxa alarmante de hospitalização em UTI, necessidade de ventilação mecânica e alta letalidade;\n\n2. O Fármaco (Palivizumabe):\n   - É um anticorpo monoclonal humanizado (IgG1) dirigido contra o epítopo do sítio antigênico da proteína de fusão (proteína F) do VSR, impedindo a penetração e disseminação do vírus no epitélio respiratório;\n\n3. Indicações Disponíveis pelo SUS no Brasil:\n   1. Prematuros nascidos com idade gestacional <= 28 semanas e 6 dias, com idade < 1 ano no início do período sazonal;\n   2. Crianças menores de 2 anos de idade com DISPLASIA BRONCOPULMONAR (doença pulmonar crônica da prematuridade) que necessitaram de tratamento médico (oxigênio, broncodilatador, diurético ou corticoide) nos últimos 6 meses;\n   3. Crianças menores de 2 anos com CARDIOPATIA CONGÊNITA com repercussão hemodinâmica;\n- Posologia: 15 mg/kg por via INTRAMUSCULAR a cada 30 dias (máximo de 5 doses durante o período sazonal regional).',
    comentariosAlternativas: {
      A: 'Correta. Palivizumabe IM mensal (15 mg/kg, até 5 doses na sazonalidade) é a profilaxia padrão recomendada pelo Ministério da Saúde para lactentes com DBP.',
      B: 'Incorreta. Não existe vacina de vírus atenuado oral de uso rotineiro infantil contra o VSR.',
      C: 'Incorreta. A imunoglobulina antitetânica neutraliza a toxina do tétano e não confere proteção contra infecções por VSR.',
      D: 'Incorreta. Ribavirina inalatória profilática contínua é tóxica e ineficaz para profilaxia populacional domiciliar.',
    },
  },
  {
    id: 'ped-neo2-100',
    grandeArea: 'Pediatria',
    especialidade: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Caso Integrador de Emergência Neonatal: Síndrome de Aspiração Meconial e HPPN',
    isRevisao: false,
    enunciado:
      'Recém-nascido a termo pós-data (41 semanas e 4 dias de idade gestacional), com peso de nascimento de 3.850 g, nasce de parto cesárea de emergência por bradicardia fetal mantida e descolamento prematuro de placenta, com presença de líquido amniótico meconial espesso tipo "purê de ervilhas". Ao nascimento, apresentou apneia e bradicardia (FC: 70 bpm), sendo reanimado com passos iniciais e VPP com máscara sob calor radiante. Com 2 horas de vida na UTI Neonatal, encontra-se sob ventilação mecânica convencional com parâmetros elevados (MAP: 14 cmH2O, FiO2: 100%), apresentando cianose central intensa e persistente. A oximetria de pulso simultânea revela SpO2 de 89% no membro superior direito (pré-ductal) e 71% no membro inferior direito (pós-ductal), com gradiente de saturação de 18%. A gasometria arterial pós-ductal mostra: pH: 7,16, PaCO2: 56 mmHg, PaO2: 38 mmHg e HCO3-: 19 mEq/L (Índice de Oxigenação = 36,8). A radiografia de tórax evidencia infiltrados grosseiros heterogêneos nodulares em flocos de algodão intercalados com áreas de hiperinsuflação e retificação diafragmática. O ecocardiograma à beira do leito confirma hipertensão pulmonar supra-sistêmica com ventrículo esquerdo em "D", shunt exclusivamente da direita para a esquerda pelo canal arterial e forame oval, com anatomia cardíaca estrutural normal. Considerando a gravidade da associação entre Síndrome de Aspiração Meconial (SAM) e Hipertensão Pulmonar Persistente do Neonato (HPPN), qual é o plano terapêutico avançado e imediato mais adequado para salvar a vida deste recém-nascido?',
    alternativas: [
      {
        id: 'A',
        texto:
          'Iniciar imediatamente Óxido Nítrico Inalatório (iNO) na concentração de 20 ppm acoplado ao ventilador mecânico para promover vasodilatação pulmonar seletiva; administrar surfactante exógeno natural para tratar a inativação secundária provocada pelo mecônio; otimizar sedação/analgesia com infusão contínua para evitar dor e broncoespasmo; dar suporte hemodinâmico inotrópico para manter a pressão sistêmica acima da pressão pulmonar; e alertar precocemente o centro de referência em ECMO devido ao Índice de Oxigenação crítico próximo de 40.',
      },
      {
        id: 'B',
        texto:
          'Extubar imediatamente o paciente para deixá-lo chorar espontaneamente em ar ambiente sem oxigênio, pois o estresse do choro normaliza a pressão pulmonar em 5 minutos.',
      },
      {
        id: 'C',
        texto:
          'Prescrever apenas ampicilina com gentamicina por via oral e aguardar 48 horas para reavaliação.',
      },
      {
        id: 'D',
        texto:
          'Realizar toracotomia exploradora bilateral de emergência no leito para ressecção anatômica de ambos os lobos pulmonares inferiores.',
      },
    ],
    respostaCorreta: 'A',
    comentario:
      'Caso Integrador de Emergência Máxima Neonatal: SAM + HPPN com Risco Iminente de Óbito:\n\n1. Diagnóstico Clínico-Radiológico e Hemodinâmico Integrado:\n   - Conceito pós-termo (41 sem 4 dias) banhado em mecônio espesso com asfixia perinatal;\n   - SAM confirmada pela imagem radiológica clássica (infiltrado heterogêneo grosseiro em flocos de algodão com hiperinsuflação);\n   - HPPN grave comprovada pelo gradiente pré/pós-ductal acentuado de 18% (89% vs 71%) e ecocardiograma demonstrando PSAP supra-sistêmica, VE em "D" e shunt D-E;\n   - Hipoxemia refratária com Índice de Oxigenação (IO) crítico de 36,8 em FiO2 de 100% (MAP 14 x 100 / PaO2 38);\n\n2. Pilares da Terapêutica Intensiva Avançada:\n   - 1. Óxido Nítrico Inalatório (iNO a 20 ppm): Vasodilatador pulmonar seletivo de primeira linha que reduz a RVP sem derrubar a pressão arterial sistêmica;\n   - 2. Surfactante Exógeno Natural: Reverte a inativação tóxica do surfactante pelo mecônio e abre áreas atelectásicas, potencializando a penetração do iNO;\n   - 3. Sedação e Analgesia Profunda (ex.: Fentanil contínuo): Evita picos de vasoconstrição pulmonar desencadeados por agitação, dor e tosse contra o respirador;\n   - 4. Suporte Hemodinâmico (Dobutamina/Dopamina ou Milrinona): Manter a pressão arterial sistêmica discretamente elevada para atenuar o gradiente de shunt direita-esquerda;\n   - 5. Preparo e Alerta de ECMO: Como o IO está próximo de 40 (critério de falha máxima de suporte convencional), o centro de ECMO neonatal deve ser acionado imediatamente caso o paciente não responda ao iNO nas próximas 2 a 4 horas.',
    comentariosAlternativas: {
      A: 'Correta. Integra de maneira impecável as condutas salvadoras: iNO (20 ppm), surfactante exógeno, sedação contínua, suporte hemodinâmico e retaguarda de ECMO.',
      B: 'Incorreta. Extubar um neonato com IO de 37 e HPPN supra-sistêmica causaria parada cardíaca por anóxia em segundos.',
      C: 'Incorreta. O paciente está sob risco iminente de morte por falência respiratória hipoxêmica refratária, não se limitando a antibiótico oral.',
      D: 'Incorreta. Ressecção pulmonar é totalmente contraindicada e fatal.',
    },
  },
];



