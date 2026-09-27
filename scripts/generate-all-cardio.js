/**
 * Script de geração das 100 questões clínicas de Cardiologia Pediátrica
 * Executa em Node.js e escreve diretamente no arquivo src/data/questoes.ts
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TARGET_FILE = path.resolve(__dirname, '../src/data/questoes.ts');

const questions = [];

function q({ id, subtopic, inst, year, statement, A, B, C, D, ans, comment, expA, expB, expC, expD }) {
  questions.push({
    id,
    specialty: 'Pediatria',
    topic: 'CARDIOLOGIA PEDIATRICA',
    subtopic,
    institution: inst,
    year,
    statement,
    options: [
      { letter: 'A', text: A },
      { letter: 'B', text: B },
      { letter: 'C', text: C },
      { letter: 'D', text: D },
    ],
    correctOption: ans,
    generalComment: comment,
    optionsExplanations: [
      { letter: 'A', text: A, isCorrect: ans === 'A', explanation: expA },
      { letter: 'B', text: B, isCorrect: ans === 'B', explanation: expB },
      { letter: 'C', text: C, isCorrect: ans === 'C', explanation: expC },
      { letter: 'D', text: D, isCorrect: ans === 'D', explanation: expD },
    ],
  });
}

// -------------------------------------------------------------
// SEÇÃO 1: COMUNICAÇÃO INTERVENTRICULAR (CIV) - 12 QUESTÕES
// -------------------------------------------------------------
q({
  id: 'ped-cardio-100-001',
  subtopic: 'Comunicação Interventricular (CIV)',
  inst: 'USP-SP',
  year: 2024,
  statement: 'Lactente de 2 meses é levado à consulta por cansaço durante as mamadas e sudorese cefálica profusa. Ao exame: taquipneico (FR: 62 irpm), acianótico, peso no percentil 3. Ausculta revela sopro holossistólico 4+/6+ rude em borda esternal esquerda baixa com frêmito palpável e sopro mesodiastólico suave em ápice. O ecocardiograma confirma CIV perimembranosa ampla. Qual é a causa do sopro mesodiastólico em ápice?',
  A: 'Hiperfluxo relativo através da valva mitral pelo aumento do retorno venoso pulmonar ao átrio esquerdo.',
  B: 'Estenose mitral congênita associada em valva em paraquedas.',
  C: 'Insuficiência tricúspide secundária ao aumento agudo da pressão sistólica ventricular direita.',
  D: 'Regurgitação da valva aórtica por prolapso da cúspide coronariana direita para a CIV.',
  ans: 'A',
  comment: 'Na CIV com grande shunt esquerda-direita, o sangue recircula pelos pulmões e retorna em grande volume para o átrio e ventrículo esquerdos. O aumento substancial do volume diastólico que atravessa o orifício valvar mitral anatomicamente normal gera estenose mitral funcional/relativa, audível como ruflar mesodiastólico no ápice.',
  expA: 'Correta. O hiperfluxo transvalvar mitral diastólico decorrente do retorno venoso pulmonar volumoso é a causa semiológica clássica do sopro mesodiastólico apical.',
  expB: 'Incorreta. A valva mitral é anatomicamente normal; a restrição é meramente funcional por hiperfluxo.',
  expC: 'Incorreta. A insuficiência tricúspide causaria sopro holossistólico em borda esternal esquerda inferior, não mesodiastólico em ápice.',
  expD: 'Incorreta. O prolapso de cúspide aórtica gera sopro protodiastólico aspirativo em foco aórtico, não ruflar mesodiastólico mitral.',
});

q({
  id: 'ped-cardio-100-002',
  subtopic: 'Comunicação Interventricular (CIV)',
  inst: 'UNICAMP',
  year: 2024,
  statement: 'Recém-nascido de 3 dias de vida, assintomático, apresenta ao exame auscultatório sopro holossistólico de alta frequência 2+/6+ em bordo esternal esquerdo inferior. O ecocardiograma revela CIV muscular trabecular pequena de 2 mm de diâmetro. Não há sobrecarga de câmaras. Qual é a conduta mais adequada?',
  A: 'Acompanhamento clínico ambulatorial periódico, pois a grande maioria das CIVs musculares pequenas fecha espontaneamente nos primeiros anos.',
  B: 'Indicação cirúrgica imediata com esternotomia para fechamento com retalho de pericárdio bovino.',
  C: 'Início de digitalização rápida associada a furosemida em dose plena para evitar cardiomegalia.',
  D: 'Restrição hídrica severa e cateterismo cardíaco intervencionista de urgência com prótese Amplatzer.',
  ans: 'A',
  comment: 'As CIVs musculares pequenas (doença de Roger) são lesões restritivas com gradiente elevado entre VE e VD sem sobrecarga hemodinâmica pulmonar. Cerca de 70-80% fecham espontaneamente nos primeiros anos de vida.',
  expA: 'Correta. CIVs musculares restritivas pequenas em assintomáticos possuem alta taxa de encerramento espontâneo.',
  expB: 'Incorreta. Cirurgia aberta é contraindicada em defeitos pequenos assintomáticos sem hipertensão pulmonar.',
  expC: 'Incorreta. Paciente assintomático não possui insuficiência cardíaca; diuréticos seriam iatrogênicos.',
  expD: 'Incorreta. Não há indicação de oclusão percutânea em lactente assintomático com microdefeito.',
});

q({
  id: 'ped-cardio-100-003',
  subtopic: 'Comunicação Interventricular (CIV)',
  inst: 'ENARE',
  year: 2024,
  statement: 'Menino de 4 anos com CIV perimembranosa subarterial (supracristal) é avaliado em consulta. Ecocardiograma revela shunt E-D moderado e discreto prolapso da cúspide aórtica coronariana direita com regurgitação aórtica leve de início recente. Qual é a conduta preconizada?',
  A: 'Indicação de correção cirúrgica do defeito para prevenir a progressão da insuficiência valvar aórtica.',
  B: 'Tratamento clínico expectante com reavaliação ecocardiográfica após os 12 anos de idade.',
  C: 'Início de vasodilatador IECA em dose alta e alta definitiva do ambulatório cirúrgico.',
  D: 'Valvoplastia aórtica percutânea por balão sem necessidade de fechar a CIV.',
  ans: 'A',
  comment: 'A CIV subarterial (supracristal) localiza-se logo abaixo das valvas semilunares. Pelo efeito Venturi da passagem de fluxo de alta velocidade, ocorre sucção e prolapso da cúspide aórtica com insuficiência aórtica progressiva (Síndrome de Laubry-Pezzi), tornando o fechamento cirúrgico mandatório.',
  expA: 'Correta. O risco de destruição valvar progressiva torna o fechamento cirúrgico da CIV infundibular mandatório ao surgir prolapso.',
  expB: 'Incorreta. A conduta expectante resultará em dano valvar grave com necessidade de prótese valvar futura.',
  expC: 'Incorreta. IECA não impede a tração mecânica hemodinâmica gerada sobre a cúspide aórtica desprovida de sustentação.',
  expD: 'Incorreta. A lesão primária é a insuficiência por prolapso, não estenose; balão pioraria a regurgitação.',
});

q({
  id: 'ped-cardio-100-004',
  subtopic: 'Comunicação Interventricular (CIV)',
  inst: 'UFRJ',
  year: 2023,
  statement: 'Lactente de 3 meses com CIV perimembranosa ampla evolui com taquipneia, hepatomegalia e interrupções nas mamadas. É prescrito furosemida, espironolactona e enalapril. Qual é o papel farmacológico do IECA nessa condição?',
  A: 'Reduzir a pós-carga sistêmica, favorecendo a ejeção do VE para a aorta e diminuindo a magnitude do shunt esquerda-direita.',
  B: 'Promover fechamento farmacológico anatômico das bordas fibrosas do septo interventricular.',
  C: 'Aumentar a contratilidade intrínseca do ventrículo direito via ativação beta-1 adrenérgica.',
  D: 'Diminuir a capacitância venosa pulmonar com elevação seletiva da pressão de átrio direito.',
  ans: 'A',
  comment: 'Ao promover vasodilatação arterial sistêmica e reduzir a pós-carga de VE, o IECA facilita a ejeção para a circulação sistêmica em detrimento da passagem anômala para o ventrículo direito e leito pulmonar.',
  expA: 'Correta. A diminuição da resistência sistêmica reduz o gradiente efetivo de desvio para o ventrículo direito.',
  expB: 'Incorreta. Fármacos não fecham orifícios de CIVs perimembranosas.',
  expC: 'Incorreta. IECAs são vasodilatadores, não inotrópicos positivos.',
  expD: 'Incorreta. O objetivo do IECA é desobstruir e esvaziar a vasculatura pulmonar reduzindo pressões de enchimento.',
});

q({
  id: 'ped-cardio-100-005',
  subtopic: 'Comunicação Interventricular (CIV)',
  inst: 'FMRP-USP',
  year: 2024,
  statement: 'Qual alteração no eletrocardiograma é mais característica de um lactente com CIV de grande magnitude antes da instalação de hipertensão pulmonar fixa irreversível?',
  A: 'Sobrecarga biventricular com complexos QRS amplos difásicos em precordiais médias (fenômeno de Katz-Wachtel).',
  B: 'Bloqueio atrioventricular de terceiro grau congênito com escape idioventricular lento.',
  C: 'Sobrecarga ventricular direita pura com onda S profunda exclusiva em V5 e V6.',
  D: 'Infradesnivelamento difuso do segmento ST com ondas T invertidas em todas as derivações.',
  ans: 'A',
  comment: 'Em lactentes com CIV grande e shunt E-D volumoso, o VD sofre sobrecarga de pressão/volume e o VE sofre sobrecarga volumétrica. O traçado clássico no ECG demonstra sobrecarga biventricular pelo sinal de Katz-Wachtel (QRS amplos difásicos em V2-V4).',
  expA: 'Correta. O fenômeno de Katz-Wachtel expressa a sobrecarga biventricular típica de grandes shunts interventriculares.',
  expB: 'Incorreta. BAVT congênito associa-se a lúpus neonatal materno (anti-Ro/SSA).',
  expC: 'Incorreta. SVD isolada surge apenas tardiamente na síndrome de Eisenmenger com atrofia relativa de VE.',
  expD: 'Incorreta. Isquemia difusa não é achado padrão de CIV isolada.',
});

q({
  id: 'ped-cardio-100-006',
  subtopic: 'Comunicação Interventricular (CIV)',
  inst: 'UERJ',
  year: 2023,
  statement: 'Criança de 8 meses com CIV ampla e desnutrição grave está programada para cirurgia corretiva. Durante o cateterismo para teste de vasorreatividade pulmonar, qual achado contraindica a cirurgia corretiva isolada?',
  A: 'Resistência vascular pulmonar fixa > 8 Wood units/m² não responsiva a vasodilatadores inalatórios, com shunt invertido D-E.',
  B: 'Relação de fluxo pulmonar/sistêmico (Qp/Qs) de 2,5 com pressão arterial pulmonar média responsiva a vasodilatadores.',
  C: 'Pressão de oclusão de artéria pulmonar de 12 mmHg com saturação venosa mista de 72%.',
  D: 'Gradiente transvalvar aórtico de 5 mmHg com fração de ejeção do ventrículo esquerdo de 64%.',
  ans: 'A',
  comment: 'A presença de doença vascular pulmonar obstrutiva avançada irreversível (RVP > 8 Wood units/m² fixa) caracteriza a Síndrome de Eisenmenger, contraindicando o fechamento isolado do defeito.',
  expA: 'Correta. RVP fixa alta e refratária demonstra arteriopatia plexogênica irreversível, contraindicando o fechamento do defeito.',
  expB: 'Incorreta. Qp/Qs de 2,5 com vasorreatividade preservada é excelente indicativo de indicação e sucesso cirúrgico.',
  expC: 'Incorreta. Pressão de capilar pulmonar normal e saturação adequada indicam boa reserva hemodinâmica.',
  expD: 'Incorreta. Ausência de gradiente aórtico e função de VE normal são condições favoráveis ao reparo.',
});

q({
  id: 'ped-cardio-100-007',
  subtopic: 'Comunicação Interventricular (CIV)',
  inst: 'SCMSP',
  year: 2024,
  statement: 'Qual é o tipo anatômico mais prevalente de Comunicação Interventricular na infância, correspondendo a cerca de 70 a 80% dos casos?',
  A: 'CIV perimembranosa.',
  B: 'CIV muscular apical.',
  C: 'CIV subarterial duplamente relacionada.',
  D: 'CIV do septo de entrada (inlet).',
  ans: 'A',
  comment: 'A CIV perimembranosa é a mais frequente, localizando-se no septo membranoso adjacente à valva tricúspide e valva aórtica, em íntimo contato com o feixe de His.',
  expA: 'Correta. A CIV perimembranosa responde pela grande maioria dos casos clínicos e cirúrgicos.',
  expB: 'Incorreta. CIVs musculares representam 10 a 20% das casuísticas.',
  expC: 'Incorreta. CIVs subarteriais perfazem cerca de 5 a 7%.',
  expD: 'Incorreta. CIVs de via de entrada são raras isoladamente e integram o defeito de septo AV.',
});

q({
  id: 'ped-cardio-100-008',
  subtopic: 'Comunicação Interventricular (CIV)',
  inst: 'SMS-SP',
  year: 2023,
  statement: 'No fechamento cirúrgico de uma CIV perimembranosa via atriotomia direita, qual estrutura do sistema de condução cardíaca corre maior risco de lesão iatrogênica na sutura da borda posteroinferior?',
  A: 'Feixe de His e nó atrioventricular.',
  B: 'Nó sinoatrial na crista terminal.',
  C: 'Feixe de Bachmann interatrial.',
  D: 'Ramo direito terminal na banda moderadora.',
  ans: 'A',
  comment: 'Na CIV perimembranosa, o feixe de His transita na borda posteroinferior do defeito. A sutura inadvertida nessa topografia pode gerar Bloqueio Atrioventricular Total (BAVT) pós-operatório.',
  expA: 'Correta. O feixe de condução AV corre na margem posteroinferior da CIV perimembranosa.',
  expB: 'Incorreta. O nó SA situa-se alto no átrio direito junto à veia cava superior.',
  expC: 'Incorreta. O feixe de Bachmann transita no septo interatrial superior.',
  expD: 'Incorreta. O ramo direito percorre a banda moderadora mais distalmente.',
});

q({
  id: 'ped-cardio-100-009',
  subtopic: 'Comunicação Interventricular (CIV)',
  inst: 'FAMERP',
  year: 2024,
  statement: 'Por que o sopro clássico de uma CIV de tamanho moderado costuma não ser audível nas primeiras 24 a 48 horas de vida do recém-nascido a termo, surgindo tipicamente entre a 2ª e a 6ª semana de vida?',
  A: 'Porque a resistência vascular pulmonar ainda está fisiologicamente elevada ao nascimento, igualando as pressões entre os ventrículos e impedindo turbilhonamento significativo.',
  B: 'Porque o forame oval patente fecha o orifício da CIV por aposição mecânica durante os primeiros dias.',
  C: 'Devido à persistência do canal arterial que gera refluxo aórtico contínuo e abafa qualquer ruído septal.',
  D: 'Pelo fechamento transitório do septo membranoso mediado por altas concentrações de prostaglandina materna.',
  ans: 'A',
  comment: 'Com o nascimento, a resistência vascular pulmonar cai gradualmente. Enquanto as pressões no VD e VE forem semelhantes, não há gradiente nem fluxo turbilhonado. Quando a RVP cai entre 2 e 6 semanas, surge o gradiente e o sopro holossistólico.',
  expA: 'Correta. A queda fisiológica progressiva da resistência vascular pulmonar pós-natal determina o surgimento do sopro.',
  expB: 'Incorreta. O forame oval comunica átrios e não tem aposição mecânica com o septo interventricular.',
  expC: 'Incorreta. A PCA não abafa o septo interventricular.',
  expD: 'Incorreta. Prostaglandinas atuam no canal arterial, sem ação oclusiva em septos musculares.',
});

q({
  id: 'ped-cardio-100-010',
  subtopic: 'Comunicação Interventricular (CIV)',
  inst: 'UFMG',
  year: 2023,
  statement: 'Qual manifestação clínica em lactente com CIV indica hiperfluxo pulmonar com hipertensão pulmonar hipercinética e indicação cirúrgica antes dos 6 meses de vida?',
  A: 'Taquipneia em repouso, sudorese fria às mamadas, baixo ganho ponderal e hiperfonese da 2ª bulha em foco pulmonar.',
  B: 'Cianose central isolada sem taquipneia associada a baqueteamento digital precoce.',
  C: 'Pulsos femorais impalpáveis com hipertensão arterial grave em membros superiores.',
  D: 'Episódios de dor torácica aos esforços com estalido de ejeção aórtico e sopro diastólico.',
  ans: 'A',
  comment: 'Os sinais clássicos de insuficiência cardíaca congestiva de alto fluxo em lactentes com CIV grande são taquidispneia, sudorese durante a alimentação, falha no ganho ponderal e hiperfonese de P2.',
  expA: 'Correta. Sintomas cardinais de ICC por hiperfluxo pulmonar volumoso na infância.',
  expB: 'Incorreta. Cianose precoce sem ICC aponta para cardiopatia congênita cianótica (ex: TGA, Fallot).',
  expC: 'Incorreta. Descrição clássica de Coarctação de Aorta.',
  expD: 'Incorreta. Sugestivo de estenose ou insuficiência aórtica em escolares.',
});

q({
  id: 'ped-cardio-100-011',
  subtopic: 'Comunicação Interventricular (CIV)',
  inst: 'PUC-PR',
  year: 2024,
  statement: 'Em um paciente portador de CIV perimembranosa pequena assintomática de 3 mm sem repercussão hemodinâmica, qual complicação infecciosa potencial requer orientação permanente de higiene oral rigorosa?',
  A: 'Endocardite Infecciosa provocada pelo fluxo de jato de alta velocidade que lesiona o endocárdio ventricular oposto.',
  B: 'Meningite meningocócica secundária à embolia séptica paradoxal interatrial.',
  C: 'Glomerulonefrite pós-estreptocócica decorrente de deposição de imunocomplexos no septo interventricular.',
  D: 'Abscesso esplênico primário por disseminação linfática retrógrada da artéria pulmonar.',
  ans: 'A',
  comment: 'Pequenos defeitos interventriculares geram jatos de alta velocidade que impactam a parede oposta do VD, desendotelizando a superfície e formando trombos plaquetários propensos à colonização bacteriana.',
  expA: 'Correta. A alta velocidade do jato em defeitos restritivos causa lesão endotelial por cisalhamento, propiciando endocardite infecciosa.',
  expB: 'Incorreta. Embolia paradoxal requer shunt direita-esquerda.',
  expC: 'Incorreta. GNPE decorre de imunocomplexos em capilares glomerulares renais.',
  expD: 'Incorreta. Disseminação de endocardite segue a via hematogênica sistêmica ou pulmonar.',
});

q({
  id: 'ped-cardio-100-012',
  subtopic: 'Comunicação Interventricular (CIV)',
  inst: 'IAMSPE',
  year: 2023,
  statement: 'Quando um paciente com CIV ampla atinge a adolescência com Síndrome de Eisenmenger estabelecida, o que ocorre tipicamente com o sopro holossistólico prévio da CIV?',
  A: 'O sopro holossistólico desaparece ou atenua-se expressivamente, pois o gradiente pressórico sistólico entre os ventrículos se anula.',
  B: 'O sopro torna-se contínuo em maquinária irradiando amplamente para o dorso.',
  C: 'O sopro transforma-se em um estalido protodiastólico isolado com redução drástica da segunda bulha cardíaca.',
  D: 'O sopro ganha timbre musical vibratório de alta intensidade grau 6/6 com frêmito em foco aórtico.',
  ans: 'A',
  comment: 'Na síndrome de Eisenmenger, a pressão no VD se iguala à do VE. Sem gradiente pressórico, o fluxo pelo orifício não é turbilhonado e o sopro desaparece, restando sinais de hipertensão pulmonar (hiperfonese extrema de P2).',
  expA: 'Correta. A equalização das pressões ventriculares elimina o gradiente turbilhonar.',
  expB: 'Incorreta. Sopro contínuo em maquinária é exclusivo da persistência do canal arterial.',
  expC: 'Incorreta. A segunda bulha torna-se intensamente hiperfonética e palpável.',
  expD: 'Incorreta. Sopro vibratório benigno é o sopro de Still.',
});

// -------------------------------------------------------------
// SEÇÃO 2: TETRALOGIA DE FALLOT - 12 QUESTÕES (13 a 24)
// -------------------------------------------------------------
q({
  id: 'ped-cardio-100-013',
  subtopic: 'Tetralogia de Fallot',
  inst: 'USP-RP',
  year: 2024,
  statement: 'Quais são os quatro componentes anatômicos clássicos que compõem a Tetralogia de Fallot?',
  A: 'Estenose pulmonar infundibular, Comunicação Interventricular (CIV), Dextroposição/cavalgamento da aorta e Hipertrofia do ventrículo direito.',
  B: 'Comunicação Interatrial (CIA), CIV, Valva AV única comum e Hipoplasia do arco aórtico.',
  C: 'Transposição das grandes artérias, Estenose aórtica subvalvar, CIV e Persistência do canal arterial.',
  D: 'Coarctação da aorta, Atresia tricúspide, Dextrocardia e Drenagem anômala de veias pulmonares.',
  ans: 'A',
  comment: 'A tétrade descrita por Étienne-Louis Fallot decorre do desvio anterior e cefálico do septo infundibular (conal), resultando em: 1) Estenose pulmonar (infundibular/valvar); 2) CIV ampla; 3) Dextroposição da aorta (cavalgamento septal); 4) Hipertrofia de VD (secundária à obstrução de via de saída).',
  expA: 'Correta. Define exatamente os 4 defeitos embriológicos e anatômicos clássicos da Tetralogia de Fallot.',
  expB: 'Incorreta. Essa composição caracteriza o Defeito do Septo Atrioventricular (DSAV).',
  expC: 'Incorreta. Trata-se de TGA com lesões associadas.',
  expD: 'Incorreta. Mistura elementos de cardiopatias univentriculares e obstrutivas esquerdas.',
});

q({
  id: 'ped-cardio-100-014',
  subtopic: 'Tetralogia de Fallot',
  inst: 'UNICAMP',
  year: 2024,
  statement: 'Lactente de 7 meses portador de Tetralogia de Fallot apresenta episódio súbito de irritabilidade, choro intenso, taquipneia profunda e cianose labial acentuada. O sopro sistólico prévio encontra-se quase inaudível. Qual é a conduta imediata prioritária?',
  A: 'Colocar a criança em posição genupeitoral (joelho-tórax), ofertar oxigênio e administrar morfina intramuscular ou subcutânea.',
  B: 'Administrar infusão rápida de bicarbonato de sódio a 8,4% e digoxina intravenosa imediata.',
  C: 'Realizar intubação orotraqueal imediata com hiperventilação mecânica agressiva.',
  D: 'Administrar furosemida intravenosa em alta dose associada a nitroprussiato de sódio.',
  ans: 'A',
  comment: 'Na crise hipercianótica do Fallot, o espasmo do infundíbulo pulmonar reduz criticamente o fluxo sanguíneo pulmonar e desvia sangue desoxigenado para a aorta. A posição genupeitoral aumenta a resistência vascular sistêmica (dobra artérias femorais), forçando sangue para os pulmões. A morfina acalma a criança e inibe o centro respiratório, quebrando o ciclo vicioso.',
  expA: 'Correta. Posição genupeitoral, oxigênio e morfina constituem o tripé inicial de resgate na crise de hipóxia do Fallot.',
  expB: 'Incorreta. Bicarbonato é reservado para acidose metabólica grave refratária; digoxina não relaxa infundíbulo.',
  expC: 'Incorreta. Intubação intempestiva pode piorar a vasoconstrição adrenérgica antes da sedação adequada.',
  expD: 'Incorreta. Vasodilatadores reduzem a resistência sistêmica, piorando o shunt direita-esquerda e agravando a hipóxia.',
});

q({
  id: 'ped-cardio-100-015',
  subtopic: 'Tetralogia de Fallot',
  inst: 'ENARE',
  year: 2024,
  statement: 'Durante uma crise de cianose em um paciente com Tetralogia de Fallot, por que a intensidade do sopro sistólico diminui ou desaparece?',
  A: 'Porque o sopro audível no Fallot decorre da estenose pulmonar; durante o espasmo infundibular quase não passa fluxo através da via de saída do VD.',
  B: 'Porque a CIV se fecha reflexamente durante a taquicardia extrema da crise hipoxêmica.',
  C: 'Devido à hipotensão arterial sistêmica súbita que anula a pressão na aorta ascendente.',
  D: 'Pelo fechamento espontâneo do canal arterial que sustentava a pressão intracardíaca.',
  ans: 'A',
  comment: 'O sopro do Fallot é exclusivamente o sopro ejetivo da estenose pulmonar (a CIV é ampla e não gera ruído turbilhonar audível). No espasmo infundibular, o orifício de saída para o pulmão fica quase totalmente ocluído; sem passagem de sangue pela artéria pulmonar, o sopro diminui ou some.',
  expA: 'Correta. O sopro reflete a passagem de fluxo pela via de saída de VD; a redução crítica do fluxo pulmonar no espasmo atenua o ruído.',
  expB: 'Incorreta. A CIV é ampla, não contrátil e não fecha espontaneamente na crise.',
  expC: 'Incorreta. A pressão da aorta não define o sopro estenótico pulmonar.',
  expD: 'Incorreta. O canal arterial geralmente já está fechado no lactente de vários meses com Fallot clássico.',
});

q({
  id: 'ped-cardio-100-016',
  subtopic: 'Tetralogia de Fallot',
  inst: 'USP-SP',
  year: 2023,
  statement: 'Qual é o aspecto radiológico característico da silhueta cardíaca na radiografia de tórax de um paciente com Tetralogia de Fallot clássica?',
  A: 'Coração em formato de bota ou tamanco holandês (coeur en sabot) com ponta cardíaca levantada e hipofluxo pulmonar (campos pleuro-pulmonares escuros).',
  B: 'Coração em formato de ovo deitado (egg-on-a-string) com mediastino superior estreito.',
  C: 'Cardiomegalia maciça ocupando todo o hemitórax com aspecto em garrafa ou moringa.',
  D: 'Aspecto de boneco de neve ou formato em 8 com circulação pulmonar hipercongestiva difusa.',
  ans: 'A',
  comment: 'A hipertrofia concêntrica do VD eleva o ápice cardíaco acima do diafragma, associada à escavação da artéria pulmonar hipoplásica, configurando o clássico coração em tamanco holandês (coeur en sabot), com campos pulmonares oligêmicos (escuros/claros de hipofluxo).',
  expA: 'Correta. Coeur en sabot com escavação do tronco pulmonar e hipofluxo periférico é a descrição clássica do Fallot.',
  expB: 'Incorreta. Ovo deitado com pedículo estreito é característico da Transposição das Grandes Artérias (TGA).',
  expC: 'Incorreta. Coração em moringa/garrafa é típico de Anomalia de Ebstein ou volumoso derrame pericárdico.',
  expD: 'Incorreta. Sinal do boneco de neve é patognomônico da DATVP supracardíaca.',
});

q({
  id: 'ped-cardio-100-017',
  subtopic: 'Tetralogia de Fallot',
  inst: 'SCMSP',
  year: 2024,
  statement: 'Menino de 3 anos com Tetralogia de Fallot não operada é observado correndo no parque e, ao sentir cansaço, agacha-se espontaneamente no chão (posição de cócoras / squatting). Qual é o benefício fisiológico dessa manobra?',
  A: 'Aumentar a resistência vascular sistêmica pela flexão das artérias femorais, reduzindo o shunt direita-esquerda e aumentando o fluxo de sangue aos pulmões.',
  B: 'Promover relaxamento imediato do diafragma facilitando a expansão da base pulmonar esquerda.',
  C: 'Diminuir o retorno venoso de sangue desoxigenado para o átrio direito, aliviando a sobrecarga de volume do VD.',
  D: 'Bloquear os barorreceptores carotídeos induzindo bradicardia reflexa e redução da fração de ejeção.',
  ans: 'A',
  comment: 'O agachamento (squatting) comprime as artérias femorais e ilíacas, elevando a pós-carga e a resistência vascular sistêmica (RVS). Com a RVS mais alta que a resistência da via de saída do VD, o shunt D-E na CIV diminui e mais sangue é impulsionado para a artéria pulmonar, melhorando a saturação arterial de oxigênio.',
  expA: 'Correta. O squatting eleva a RVS, forçando maior proporção do débito cardíaco a ultrapassar a estenose pulmonar.',
  expB: 'Incorreta. O benefício é predominantemente hemodinâmico vascular, não mecânico-ventilatório diafragmático.',
  expC: 'Incorreta. A posição de cócoras na verdade eleva ligeiramente o retorno venoso dos membros inferiores.',
  expD: 'Incorreta. A manobra não visa bradicardia, mas sim reversão do shunt intracardíaco.',
});

q({
  id: 'ped-cardio-100-018',
  subtopic: 'Tetralogia de Fallot',
  inst: 'UERJ',
  year: 2024,
  statement: 'Qual é o fármaco de escolha para a profilaxia farmacológica crônica de novas crises de hipóxia (crises hipercianóticas) em lactentes com Fallot enquanto aguardam a cirurgia definitiva?',
  A: 'Propranolol por via oral.',
  B: 'Enalapril por via oral.',
  C: 'Furosemida em dose contínua.',
  D: 'Amiodarona em dose de impregnação.',
  ans: 'A',
  comment: 'O betabloqueador (propranolol) atua relaxando a musculatura infundibular hipertrofiada da via de saída do ventrículo direito, reduzindo a hiper-reatividade adrenérgica ao estresse e prevenindo o espasmo infundibular que deflagra as crises hipercianóticas.',
  expA: 'Correta. O propranolol oral é a droga de escolha para prevenção de crises de cianose no pré-operatório do Fallot.',
  expB: 'Incorreta. IECA reduz a pós-carga sistêmica, o que pioraria o shunt D-E e agravaria a cianose.',
  expC: 'Incorreta. Diuréticos diminuem a pré-carga de VD, favorecendo o colapso e o espasmo infundibular.',
  expD: 'Incorreta. Amiodarona é antiarrítmico com múltiplos efeitos adversos, sem indicação profilática no Fallot.',
});

q({
  id: 'ped-cardio-100-019',
  subtopic: 'Tetralogia de Fallot',
  inst: 'UFRJ',
  year: 2023,
  statement: 'Em um recém-nascido com Tetralogia de Fallot com estenose pulmonar crítica e hipoxemia refratária grave nas primeiras semanas de vida, qual cirurgia paliativa é classicamente realizada para garantir fluxo pulmonar?',
  A: 'Anastomose sistêmico-pulmonar de Blalock-Taussig modificada (tubo de PTFE entre artéria subclávia e artéria pulmonar).',
  B: 'Bandeamento da artéria pulmonar para redução de hiperfluxo.',
  C: 'Cirurgia de Jatene com transposição dos grandes vasos.',
  D: 'Cirurgia de Glenn bidirecional término-lateral isolada.',
  ans: 'A',
  comment: 'O shunt de Blalock-Taussig modificado cria uma fístula sistêmico-pulmonar usando um enxerto de Gore-Tex (PTFE) entre a artéria subclávia e a artéria pulmonar ipsilateral, garantindo fluxo pulmonar até a correção cirúrgica total.',
  expA: 'Correta. O Blalock-Taussig modificado é o procedimento paliativo clássico para garantir suprimento sanguíneo pulmonar.',
  expB: 'Incorreta. O bandeamento é feito em cardiopatias de hiperfluxo (CIV ampla, DSAV), e o Fallot tem hipofluxo.',
  expC: 'Incorreta. Jatene é o tratamento cirúrgico definitivo da TGA.',
  expD: 'Incorreta. O Glenn é o segundo estágio de cirurgias univentriculares, realizado tipicamente após os 4-6 meses.',
});

q({
  id: 'ped-cardio-100-020',
  subtopic: 'Tetralogia de Fallot',
  inst: 'IAMSPE',
  year: 2024,
  statement: 'Qual microdeleção cromossômica está fortemente associada à Tetralogia de Fallot e outros defeitos conotrunciais, associando-se a hipocalcemia neonatal, dismorfismos faciais e imunodeficiência celular?',
  A: 'Deleção do cromossomo 22q11.2 (Síndrome de DiGeorge / velocardiofacial).',
  B: 'Trissomia do cromossomo 18 (Síndrome de Edwards).',
  C: 'Monossomia do cromossomo X (45,X0 / Síndrome de Turner).',
  D: 'Deleção do braço curto do cromossomo 5 (5p- / Síndrome de Cri-du-Chat).',
  ans: 'A',
  comment: 'A microdeleção 22q11.2 (Síndrome de DiGeorge) responde por cerca de 15% dos casos de Tetralogia de Fallot e decorre de falha no desenvolvimento do 3º e 4º arcos faríngeos, cursando com cardiopatia conotruncal, aplasia/hipoplasia de timo (imunodeficiência de células T) e de paratireoides (hipocalcemia neonatal convulsiva).',
  expA: 'Correta. A deleção 22q11.2 é a anomalia genética mais prevalente em cardiopatias de via de saída (conotrunciais).',
  expB: 'Incorreta. Edwards associa-se a sobreposição de dedos, pés em mata-borrão e CIV/estenose aórtica.',
  expC: 'Incorreta. Turner (45,X0) associa-se a Coarctação de Aorta e valva aórtica bicúspide.',
  expD: 'Incorreta. Cri-du-chat cursa com choro miado de gato e microcefalia, sem associação predominante com Fallot.',
});

q({
  id: 'ped-cardio-100-021',
  subtopic: 'Tetralogia de Fallot',
  inst: 'FMRP-USP',
  year: 2024,
  statement: 'No pós-operatório tardio da correção cirúrgica completa da Tetralogia de Fallot em adultos jovens, qual é a sequela hemodinâmica mais frequente que comumente exige implante percutâneo ou cirúrgico de valva pulmonar?',
  A: 'Insuficiência valvar pulmonar livre crônica com dilatação progressiva e disfunção do ventrículo direito.',
  B: 'Estenose mitral grave decorrente de calcificação fibroelástica distrófica.',
  C: 'Hipertensão arterial pulmonar pré-capilar suprassistêmica irreversível.',
  D: 'Regurgitação aórtica maciça decorrente de rotura do anel aórtico reconstruído.',
  ans: 'A',
  comment: 'A ampliação da via de saída do VD durante a correção do Fallot frequentemente envolve secção do anel pulmonar (retalho transanular), resultando em insuficiência pulmonar livre crônica. Ao longo de décadas, essa regurgitação crônica leva a dilatação progressiva do VD, arritmias ventriculares e morte súbita, exigindo troca valvar pulmonar programada.',
  expA: 'Correta. A insuficiência pulmonar crônica é a principal lesão residual tardia pós-correção de Fallot.',
  expB: 'Incorreta. A valva mitral não é abordada na cirurgia de Fallot.',
  expC: 'Incorreta. O Fallot tem hipofluxo pulmonar prévio; não desenvolve hipertensão pulmonar primária.',
  expD: 'Incorreta. A raiz da aorta pode sofrer dilatação leve, mas a regurgitação maciça é incomum comparada à pulmonar.',
});

q({
  id: 'ped-cardio-100-022',
  subtopic: 'Tetralogia de Fallot',
  inst: 'FAMERP',
  year: 2023,
  statement: 'Qual é o achado clássico da ausculta da segunda bulha cardíaca (B2) em um paciente com Tetralogia de Fallot típica?',
  A: 'Segunda bulha única e hiperfonética em foco pulmonar, correspondente exclusivamente ao componente aórtico audível (A2).',
  B: 'Desdobramento amplo e fixo de B2 sem variação respiratória.',
  C: 'Desdobramento paradoxal de B2 com fechamento aórtico atrasado após o pulmonar.',
  D: 'Bulha hipofonética em quatro tempos com galope protodiastólico atrial.',
  ans: 'A',
  comment: 'Na Tetralogia de Fallot, o componente pulmonar de B2 (P2) é muito abafado ou inaudível devido à estenose pulmonar acentuada e baixa pressão arterial pulmonar. Além disso, a aorta dextroposta está mais anteriorizada. Assim, ausculta-se uma segunda bulha única, constituída puramente pelo componente aórtico (A2).',
  expA: 'Correta. A segunda bulha é única porque P2 é inaudível devido à estenose acentuada.',
  expB: 'Incorreta. Desdobramento fixo de B2 é a marca semiológica da CIA.',
  expC: 'Incorreta. Desdobramento paradoxal ocorre no BRE grave ou estenose aórtica importante.',
  expD: 'Incorreta. Galope em 4 tempos ocorre na Anomalia de Ebstein.',
});

q({
  id: 'ped-cardio-100-023',
  subtopic: 'Tetralogia de Fallot',
  inst: 'SMS-SP',
  year: 2024,
  statement: 'Uma criança de 4 anos com Tetralogia de Fallot não operada apresenta hematócrito de 68% e hemoglobina de 22 g/dL. Apresenta cefaleia, letargia e déficits neurológicos motores focais súbitos à direita. Qual complicação deve ser prontamente suspeitada?',
  A: 'Abscesso cerebral piogênico ou acidente vascular cerebral isquêmico/trombótico decorrente de hiperviscosidade e shunt D-E.',
  B: 'Mielite transversa aguda pós-vacinal com bloqueio de condução espinhal.',
  C: 'Encefalopatia hipertensiva maligna por estenose de artéria renal associada.',
  D: 'Edema cerebral vasogênico decorrente de intoxicação digitálica crônica.',
  ans: 'A',
  comment: 'Pacientes com cardiopatias congênitas cianóticas de longa data desenvolvem policitemia secundária extrema por hipóxia tecidual crônica. O hematócrito elevado (> 65%) gera hiperviscosidade sanguínea e microtrombose venosa cerebral. Além disso, o shunt D-E desvia bactérias da circulação venosa sem a filtração fagocítica dos capilares pulmonares, predispondo a abscessos cerebrais piogênicos.',
  expA: 'Correta. Abscesso cerebral e AVC isquêmico por hiperviscosidade e shunt D-E são complicações clássicas da cianose crônica.',
  expB: 'Incorreta. Não há quadro espinhal sensitivo-motor bilateral compatível com mielite.',
  expC: 'Incorreta. O paciente é cianótico com circulação em paralelo parcial, não apresentando hipertensão maligna de base.',
  expD: 'Incorreta. A clínica focal neurológica com policitemia não é explicada por intoxicação digitálica.',
});

q({
  id: 'ped-cardio-100-024',
  subtopic: 'Tetralogia de Fallot',
  inst: 'PUC-Campinas',
  year: 2024,
  statement: 'Em que faixa etária é atualmente recomendada a correção cirúrgica total eletiva da Tetralogia de Fallot na maioria dos centros cardiopediátricos de excelência?',
  A: 'Entre 3 e 6 meses de vida.',
  B: 'Imediatamente nas primeiras 24 horas de vida de rotina para todos os casos.',
  C: 'Somente após os 10 anos de idade, aguardando o crescimento do anel pulmonar.',
  D: 'Aos 18 anos de idade, após o término da maturação óssea esquelética.',
  ans: 'A',
  comment: 'As diretrizes modernas preconizam o reparo cirúrgico primário eletivo precoce entre 3 e 6 meses de vida. Essa abordagem precoce previne a hipertrofia ventricular excessiva, reduz a incidência de crises hipercianóticas e protege a microvasculatura cerebral e miocárdica da hipóxia crônica.',
  expA: 'Correta. O reparo cirúrgico completo eletivo é realizado idealmente entre 3 e 6 meses de vida.',
  expB: 'Incorreta. Nas primeiras horas é reservado apenas para formas extremas com atresia pulmonar crítica.',
  expC: 'Incorreta. Postergar para os 10 anos causaria danos cerebrais, fibrose miocárdica e policitemia grave.',
  expD: 'Incorreta. Não se posterga cirurgia de cardiopatia congênita cianótica até a idade adulta.',
});

console.log(`Seções 1 e 2 geradas (${questions.length} questões). Continuando script...`);
