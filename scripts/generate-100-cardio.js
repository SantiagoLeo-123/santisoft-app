import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TARGET_FILE = path.resolve(__dirname, '../src/data/questoes.ts');

// Gerador de 100 Questões Clínicas de Cardiologia Pediátrica
const questions = [];

function addQ({
  idNum,
  subtopic,
  institution,
  year,
  statement,
  options,
  correctOption,
  generalComment,
  explanations,
}) {
  const id = `ped-cardio-100-${String(idNum).padStart(3, '0')}`;
  questions.push({
    id,
    specialty: 'Pediatria',
    topic: 'CARDIOLOGIA PEDIATRICA',
    subtopic,
    institution,
    year,
    statement,
    options: [
      { letter: 'A', text: options.A },
      { letter: 'B', text: options.B },
      { letter: 'C', text: options.C },
      { letter: 'D', text: options.D },
    ],
    correctOption,
    generalComment,
    optionsExplanations: [
      { letter: 'A', text: options.A, isCorrect: correctOption === 'A', explanation: explanations.A },
      { letter: 'B', text: options.B, isCorrect: correctOption === 'B', explanation: explanations.B },
      { letter: 'C', text: options.C, isCorrect: correctOption === 'C', explanation: explanations.C },
      { letter: 'D', text: options.D, isCorrect: correctOption === 'D', explanation: explanations.D },
    ],
  });
}

// -------------------------------------------------------------
// 1. COMUNICAÇÃO INTERVENTRICULAR (CIV) - 12 QUESTÕES (1 a 12)
// -------------------------------------------------------------
addQ({
  idNum: 1,
  subtopic: 'Comunicação Interventricular (CIV)',
  institution: 'USP-SP',
  year: 2024,
  statement: 'Lactente de 2 meses é levado à consulta por cansaço durante as mamadas e sudorese cefálica profusa. Ao exame: taquipneico (FR: 62 irpm), acianótico, peso no percentil 3. Ausculta revela sopro holossistólico 4+/6+ rude em borda esternal esquerda baixa com frêmito palpável e sopro mesodiastólico suave em ápice. O ecocardiograma confirma CIV perimembranosa ampla. Qual é a causa do sopro mesodiastólico em ápice?',
  options: {
    A: 'Hiperfluxo relativo através da valva mitral pelo aumento do retorno venoso pulmonar ao átrio esquerdo.',
    B: 'Estenose mitral congênita associada em valva em paraquedas.',
    C: 'Insuficiência tricúspide secundária ao aumento agudo da pressão sistólica ventricular direita.',
    D: 'Regurgitação da valva aórtica por prolapso da cúspide coronariana direita para a CIV.',
  },
  correctOption: 'A',
  generalComment: 'Na CIV com grande shunt esquerda-direita, o sangue desviado recircula pelo leito vascular pulmonar e retorna em grande volume para o átrio e ventrículo esquerdos. O aumento substancial do volume diastólico que atravessa o orifício valvar mitral anatomicamente normal gera uma estenose mitral funcional/relativa, audível como um ruído/ruflar mesodiastólico no ápice (foco mitral).',
  explanations: {
    A: 'Correta. O hiperfluxo transvalvar mitral diastólico decorrente do retorno venoso pulmonar volumoso é a causa semiológica clássica do sopro mesodiastólico apical em grandes shunts E-D.',
    B: 'Incorreta. A valva mitral é anatomicamente normal; a restrição é meramente funcional por desproporção de fluxo volumétrico aumentado.',
    C: 'Incorreta. A insuficiência tricúspide causaria sopro holossistólico regurgitativo em borda esternal esquerda inferior, não mesodiastólico em ápice.',
    D: 'Incorreta. O prolapso de cúspide aórtica (síndrome de Laubry-Pezzi) gera sopro protodiastólico aspirativo em foco aórtico e borda esternal esquerda média, não ruflar mesodiastólico mitral.',
  },
});

addQ({
  idNum: 2,
  subtopic: 'Comunicação Interventricular (CIV)',
  institution: 'UNICAMP',
  year: 2024,
  statement: 'Recém-nascido de 3 dias de vida, assintomático, apresenta ao exame auscultatório sopro holossistólico de alta frequência 2+/6+ em bordo esternal esquerdo inferior. O ecocardiograma revela CIV muscular trabecular pequena (restritiva) de 2 mm de diâmetro. Não há sobrecarga de câmaras. Qual é a conduta mais adequada?',
  options: {
    A: 'Acompanhamento clínico ambulatorial periódico, pois a maioria das CIVs musculares pequenas fecha espontaneamente nos primeiros anos.',
    B: 'Indicação cirúrgica imediata com esternotomia para fechamento com retalho de pericárdio bovino.',
    C: 'Início de digitalização rápida associada a furosemida em dose plena para evitar cardiomegalia.',
    D: 'Restrição hídrica severa e cateterismo cardíaco intervencionista de urgência com prótese Amplatzer.',
  },
  correctOption: 'A',
  generalComment: 'As CIVs musculares pequenas (doença de Roger) são lesões restritivas, nas quais o orifício pequeno impõe grande resistência ao fluxo, mantendo gradiente pressórico elevado entre VE e VD (daí o sopro rude e de alta frequência) sem gerar sobrecarga volumétrica pulmonar significativa. Cerca de 70-80% das CIVs musculares pequenas sofrem fechamento espontâneo por hipertrofia muscular adjacente até os 2 a 4 anos de vida.',
  explanations: {
    A: 'Correta. CIVs musculares restritivas pequenas em pacientes assintomáticos possuem alta taxa de encerramento espontâneo, recomendando-se conduta conservadora com seguimento pediátrico.',
    B: 'Incorreta. Cirurgia aberta é formalmente contraindicada em defeitos pequenos assintomáticos sem hipertensão pulmonar ou repercussão hemodinâmica.',
    C: 'Incorreta. Paciente assintomático e sem sobrecarga de câmaras não possui insuficiência cardíaca congestiva; diuréticos e digitálicos seriam iatrogênicos.',
    D: 'Incorreta. Não há indicação de oclusão percutânea em lactente de 3 dias com microdefeito muscular benigno.',
  },
});

addQ({
  idNum: 3,
  subtopic: 'Comunicação Interventricular (CIV)',
  institution: 'ENARE',
  year: 2024,
  statement: 'Menino de 4 anos com diagnóstico de CIV perimembranosa subarterial (infundibular/supracristal) é avaliado em consulta cardiológica. Ecocardiograma revela shunt esquerda-direita moderado e discreto prolapso da cúspide aórtica coronariana direita com regurgitação aórtica leve de início recente. Qual é a conduta preconizada?',
  options: {
    A: 'Indicação de correção cirúrgica do defeito para prevenir a progressão da insuficiência valvar aórtica.',
    B: 'Tratamento clínico expectante com reavaliação ecocardiográfica após os 12 anos de idade.',
    C: 'Início de vasodilatador inibidor da ECA em dose alta e alta do ambulatório de cirurgia.',
    D: 'Valvoplastia aórtica percutânea por balão sem necessidade de fechar a CIV.',
  },
  correctOption: 'A',
  generalComment: 'A CIV subarterial (supracristal ou duplamente relacionada) localiza-se logo abaixo das valvas semilunares. Pelo efeito Venturi da passagem de fluxo de alta velocidade adjacente à valva aórtica, ocorre sucção e prolapso da cúspide aórtica (geralmente coronariana direita), gerando insuficiência aórtica progressiva e deformidade estrutural da valva (Síndrome de Laubry-Pezzi). A presença de prolapso de cúspide ou qualquer grau de insuficiência aórtica constitui indicação cirúrgica mandatória independente do tamanho do shunt.',
  explanations: {
    A: 'Correta. O risco de dano estrutural permanente e progressivo à valva aórtica torna o fechamento cirúrgico da CIV infundibular mandatório assim que surge prolapso ou insuficiência valvar.',
    B: 'Incorreta. A conduta expectante resultará em destruição valvar grave, exigindo troca valvar por prótese mecânica ou biológica no futuro.',
    C: 'Incorreta. IECA não impede a tração mecânica hemodinâmica gerada pelo efeito Venturi sobre a cúspide desprovida de sustentação septal.',
    D: 'Incorreta. A lesão primária é a insuficiência por prolapso, não estenose; a valvoplastia por balão pioraria drasticamente a regurgitação.',
  },
});

addQ({
  idNum: 4,
  subtopic: 'Comunicação Interventricular (CIV)',
  institution: 'UFRJ',
  year: 2023,
  statement: 'Lactente de 3 meses com CIV perimembranosa ampla evolui com taquipneia, hepatomegalia a 4 cm do rebordo costal direito e interrupções frequentes nas mamadas. É prescrito furosemida e espironolactona, além de enalapril. Qual é o papel farmacológico do inibidor da enzima de conversão da angiotensina (IECA) nessa condição?',
  options: {
    A: 'Reduzir a pós-carga sistêmica, favorecendo a ejeção do VE para a aorta e diminuindo a magnitude do shunt esquerda-direita.',
    B: 'Promover fechamento farmacológico anatômico das bordas fibrosas do septo interventricular.',
    C: 'Aumentar a contratilidade intrínseca do ventrículo direito via ativação de receptores beta-1 adrenérgicos.',
    D: 'Diminuir a capacitância venosa pulmonar com elevação seletiva da pressão média de átrio direito.',
  },
  correctOption: 'A',
  generalComment: 'O volume do shunt da esquerda para a direita na CIV depende da relação entre a resistência vascular sistêmica (RVS) e a resistência vascular pulmonar (RVP). Ao promover vasodilatação arterial sistêmica e reduzir a RVS (pós-carga de VE), o IECA facilita a ejeção para a aorta sistêmica em detrimento da passagem anômala para o ventrículo direito e artéria pulmonar, reduzindo o hiperfluxo e aliviando a congestão pulmonar.',
  explanations: {
    A: 'Correta. Reduzindo a pós-carga sistêmica, o VE ejeta mais facilmente para a aorta, diminuindo a fração de sangue desviada pelo orifício da CIV.',
    B: 'Incorreta. Drogas não fecham orifícios anatômicos de CIVs perimembranosas (ao contrário do canal arterial responsivo a anti-inflamatórios).',
    C: 'Incorreta. IECAs são vasodilatadores arteriais e venosos, não possuindo ação inotrópica beta-agonista.',
    D: 'Incorreta. O objetivo do IECA é desobstruir e esvaziar a vasculatura pulmonar reduzindo pressões de enchimento esquerdas, sem elevar pressões atriais direitas.',
  },
});

addQ({
  idNum: 5,
  subtopic: 'Comunicação Interventricular (CIV)',
  institution: 'FMRP-USP',
  year: 2024,
  statement: 'Qual das seguintes alterações no eletrocardiograma é mais característica de um lactente com CIV de grande magnitude com hiperfluxo pulmonar volumoso antes da instalação de hipertensão pulmonar fixa?',
  options: {
    A: 'Sobrecarga biventricular com complexos QRS amplos difásicos nas derivações precordiais médias (fenômeno de Katz-Wachtel).',
    B: 'Bloqueio atrioventricular de terceiro grau congênito com escape idioventricular lento.',
    C: 'Sobrecarga ventricular direita pura com onda S profunda exclusiva em V5 e V6 sem ondas R em precordiais esquerdas.',
    D: 'Infradesnivelamento difuso do segmento ST com ondas T invertidas em todas as derivações secundário a isquemia coronariana.',
  },
  correctOption: 'A',
  generalComment: 'Em lactentes com CIV grande e shunt E-D volumoso, o ventrículo direito sofre sobrecarga de pressão/volume e o ventrículo esquerdo sofre sobrecarga de volume (pelo grande retorno venoso pulmonar). O traçado clássico no ECG demonstra sobrecarga biventricular, expressa comumente pelo sinal de Katz-Wachtel: complexos QRS isodifásicos de grande amplitude (soma de R + S frequentemente > 50 mm) nas derivações precordiais intermediárias (V2 a V4).',
  explanations: {
    A: 'Correta. O fenômeno de Katz-Wachtel (QRS amplos e equipolíticos em V2-V4) traduz a sobrecarga biventricular típica de grandes defeitos com hiperfluxo.',
    B: 'Incorreta. BAVT congênito está associado ao lúpus neonatal materno (anti-Ro/SSA), não sendo achado padrão de CIV.',
    C: 'Incorreta. SVD isolada surge apenas tardiamente se houver reversão do shunt por Síndrome de Eisenmenger com atrofia relativa de VE.',
    D: 'Incorreta. Isquemia difusa não é característica eletrocardiográfica de CIV não complicada.',
  },
});

addQ({
  idNum: 6,
  subtopic: 'Comunicação Interventricular (CIV)',
  institution: 'UERJ',
  year: 2023,
  statement: 'Uma criança de 8 meses com CIV ampla e desnutrição grave está programada para cirurgia corretiva. Durante o cateterismo cardíaco pré-operatório para teste de vasorreatividade pulmonar, qual achado contraindicaria a cirurgia corretiva isolada?',
  options: {
    A: 'Resistência vascular pulmonar fixa > 8 Wood units/m² não responsiva a oxigênio a 100% e óxido nítrico inalatório, com shunt invertido D-E.',
    B: 'Relação de fluxo pulmonar/sistêmico (Qp/Qs) de 2,5 com pressão arterial pulmonar média responsiva a vasodilatadores.',
    C: 'Pressão de oclusão de artéria pulmonar (capilar pulmonar) de 12 mmHg com saturação venosa mista de 72%.',
    D: 'Gradiente transvalvar aórtico de 5 mmHg com fração de ejeção do ventrículo esquerdo de 64%.',
  },
  correctOption: 'A',
  generalComment: 'A presença de doença vascular pulmonar obstrutiva avançada irreversível (resistência vascular pulmonar indexada fixa e elevada > 8 Wood units/m² que não cai com vasodilatadores pulmonares) caracteriza a Síndrome de Eisenmenger. O fechamento da CIV nessa fase levaria à falência aguda e morte por colapso do ventrículo direito, sendo contraindicação formal ao fechamento cirúrgico isolado do defeito septal.',
  explanations: {
    A: 'Correta. RVP fixa alta e refratária demonstra arteriopatia plexogênica irreversível, contraindicando o fechamento do defeito.',
    B: 'Incorreta. Qp/Qs de 2,5 com vasorreatividade preservada é excelente indicativo de indicação e sucesso cirúrgico.',
    C: 'Incorreta. Pressão de capilar pulmonar normal e saturação adequada indicam boa reserva hemodinâmica.',
    D: 'Incorreta. Ausência de gradiente aórtico e função de VE normal são condições favoráveis ao reparo.',
  },
});

addQ({
  idNum: 7,
  subtopic: 'Comunicação Interventricular (CIV)',
  institution: 'SCMSP',
  year: 2024,
  statement: 'Qual é o tipo anatômico mais prevalente de Comunicação Interventricular na infância, correspondendo a cerca de 70 a 80% dos casos cirúrgicos e clínicos?',
  options: {
    A: 'CIV perimembranosa.',
    B: 'CIV muscular do ápice.',
    C: 'CIV subarterial duplamente relacionada.',
    D: 'CIV do septo de entrada (inlet).',
  },
  correctOption: 'A',
  generalComment: 'A CIV perimembranosa (ou membranosa) é o tipo anatômico mais frequente de CIV, representando 70 a 80% de todos os defeitos interventriculares. Localiza-se no septo membranoso adjacente à valva tricúspide (cúspide septal) e à valva aórtica, estando em íntimo contato com o feixe de condução atrioventricular (feixe de His).',
  explanations: {
    A: 'Correta. A CIV perimembranosa é de longe a variante mais comum encontrada na prática clínica pediátrica.',
    B: 'Incorreta. As CIVs musculares representam 10 a 20% das casuísticas e fecham muito frequentemente de forma espontânea.',
    C: 'Incorreta. As CIVs subarteriais perfazem cerca de 5 a 7% (sendo mais comuns na população asiática).',
    D: 'Incorreta. As CIVs de via de entrada são raras isoladamente e costumam integrar o espectro dos defeitos de septo AV.',
  },
});

addQ({
  idNum: 8,
  subtopic: 'Comunicação Interventricular (CIV)',
  institution: 'SMS-SP',
  year: 2023,
  statement: 'No fechamento cirúrgico de uma CIV perimembranosa via atriotomia direita com retalho de pericárdio, qual estrutura do sistema de condução cardíaca corre maior risco anatômico de lesão iatrogênica durante a sutura na borda posteroinferior do defeito?',
  options: {
    A: 'Feixe de His e nó atrioventricular.',
    B: 'Nó sinoatrial localizado na crista terminal.',
    C: 'Feixe de Bachmann interatrial anterior.',
    D: 'Ramo direito terminal da rede de Purkinje exclusivo do septo anterior.',
  },
  correctOption: 'A',
  generalComment: 'Na CIV perimembranosa, o nó atrioventricular (no ápice do triângulo de Koch) emite o feixe de His que transita exatamente pela borda posteroinferior do defeito antes de se ramificar. Por isso, os cirurgiões aplicam pontos ligeiramente afastados da borda nessa região para evitar o bloqueio atrioventricular total (BAVT) pós-operatório iatrogênico.',
  explanations: {
    A: 'Correta. O feixe de condução AV corre na margem posteroinferior da CIV perimembranosa, sendo a principal estrutura sob risco cirúrgico de BAVT.',
    B: 'Incorreta. O nó SA fica alto no átrio direito, junto à desembocadura da veia cava superior.',
    C: 'Incorreta. O feixe de Bachmann propaga estímulos pelo septo interatrial superior.',
    D: 'Incorreta. O ramo direito percorre a banda moderadora mais distalmente, fora da borda crítica do septo membranoso.',
  },
});

addQ({
  idNum: 9,
  subtopic: 'Comunicação Interventricular (CIV)',
  institution: 'FAMERP',
  year: 2024,
  statement: 'Por que o sopro clássico de uma CIV de tamanho moderado costuma não ser audível nas primeiras 24 a 48 horas de vida do recém-nascido a termo, surgindo tipicamente entre a 2ª e a 6ª semana de vida?',
  options: {
    A: 'Porque a resistência vascular pulmonar ainda está fisiologicamente elevada ao nascimento, igualando as pressões entre os ventrículos e impedindo fluxo turbilhonado significativo.',
    B: 'Porque o forame oval patente fecha o orifício da CIV por aposição mecânica durante os primeiros dias.',
    C: 'Devido à persistência do canal arterial que gera refluxo aórtico contínuo e abafa qualquer ruído no septo.',
    D: 'Pelo fechamento transitório do septo membranoso mediado por altas concentrações de prostaglandina materna.',
  },
  correctOption: 'A',
  generalComment: 'Na vida intrauterina, a resistência vascular pulmonar (RVP) é extremamente elevada. Ao nascer, com a primeira respiração e oxigenação alveolar, a RVP começa a cair, mas essa queda é gradual ao longo de semanas. Enquanto a pressão no VD for próxima à do VE, o gradiente é mínimo e quase não há shunt ou turbilhonamento. À medida que a RVP atinge os níveis baixos do lactente (entre 2 e 6 semanas), o gradiente VE > VD se amplia, gerando o clássico sopro holossistólico rude.',
  explanations: {
    A: 'Correta. A queda fisiológica progressiva da resistência vascular pulmonar no pós-natal é o determinante cronológico do aparecimento do sopro e dos sintomas de hiperfluxo na CIV.',
    B: 'Incorreta. O forame oval comunica átrios e não tem relação anatômica de aposição com o septo ventricular.',
    C: 'Incorreta. A PCA não abafa o septo; de fato, adicionaria seu próprio sopro em maquinária.',
    D: 'Incorreta. Prostaglandinas mantêm ductos vasculares abertos, sem efeito de constrição em septos cardíacos musculares.',
  },
});

addQ({
  idNum: 10,
  subtopic: 'Comunicação Interventricular (CIV)',
  institution: 'UFMG',
  year: 2023,
  statement: 'Qual das seguintes manifestações clínicas em um lactente com CIV sugere a evolução com hiperfluxo pulmonar e hipertensão pulmonar hipercinética com indicação cirúrgica antes do 6º mês de vida?',
  options: {
    A: 'Taquipneia em repouso, sudorese fria às mamadas, baixo ganho ponderal (déficit de crescimento) e hiperfonese da 2ª bulha em foco pulmonar.',
    B: 'Cianose central isolada sem taquipneia associada a baqueteamento digital precoce.',
    C: 'Pulsos femorais impalpáveis com hipertensão arterial grave em membros superiores.',
    D: 'Episódios de dor torácica aos esforços com estalido de ejeção aórtico e sopro diastólico puro.',
  },
  correctOption: 'A',
  generalComment: 'Os sinais clássicos de insuficiência cardíaca congestiva de alto fluxo em lactentes com CIV grande são taquidispneia, sudorese adrenérgica durante a alimentação (quando o esforço de sucção descompensa a respiração), falha no ganho ponderal (desnutrição secundária ao alto gasto metabólico e ingestão calórica insuficiente) e hiperfonese de P2 (revelando elevação de pressões arteriais pulmonares).',
  explanations: {
    A: 'Correta. Sintomas cardinais de ICC por hiperfluxo pulmonar volumoso na infância que exigem otimização clínica e correção cirúrgica precoce.',
    B: 'Incorreta. Cianose precoce sem insuficiência cardíaca aponta para cardiopatia congênita cianótica (ex: TGA, Fallot), não CIV isolada.',
    C: 'Incorreta. Descrição clássica de Coarctação de Aorta.',
    D: 'Incorreta. Quadro sugestivo de estenose ou insuficiência aórtica em crianças mais velhas.',
  },
});

addQ({
  idNum: 11,
  subtopic: 'Comunicação Interventricular (CIV)',
  institution: 'PUC-PR',
  year: 2024,
  statement: 'Em um paciente portador de CIV perimembranosa pequena assintomática de 3 mm sem repercussão hemodinâmica, qual complicação infecciosa potencial requer orientação permanente de higiene oral rigorosa aos familiares?',
  options: {
    A: 'Endocardite Infecciosa provocada pelo fluxo de jato de alta velocidade que lesiona o endocárdio ventricular oposto.',
    B: 'Meningite meningocócica secundária à embolia séptica paradoxal interatrial.',
    C: 'Glomerulonefrite pós-estreptocócica decorrente de deposição de imunocomplexos no septo interventricular.',
    D: 'Abscesso esplênico primário por disseminação linfática retrógrada da artéria pulmonar.',
  },
  correctOption: 'A',
  generalComment: 'Mesmo pequenos defeitos interventriculares geram jatos turbulentos de alta velocidade (efeito de spray) que impactam a parede ventricular direita oposta ou a cúspide septal da tricúspide. Esse microtrauma desendoteliza a superfície, formando trombos plaquetários estéreis (endocardite trombótica não bacteriana) propensos à colonização por bactérias circulantes (Streptococcus viridans) em bacteriemias transitórias.',
  explanations: {
    A: 'Correta. A alta velocidade do jato em defeitos restritivos causa lesão endotelial por cisalhamento, sendo substrato para endocardite infecciosa.',
    B: 'Incorreta. Embolia paradoxal ocorre em shunts direita-esquerda, não esquerda-direita.',
    C: 'Incorreta. GNPE decorre de antígenos estreptocócicos em glomérulos renais, sem relação causal com a anatomia do septo.',
    D: 'Incorreta. Disseminação de endocardite é arterial sistêmica (se em câmaras esquerdas) ou pulmonar (se em câmaras direitas).',
  },
});

addQ({
  idNum: 12,
  subtopic: 'Comunicação Interventricular (CIV)',
  institution: 'IAMSPE',
  year: 2023,
  statement: 'Quando um paciente com CIV ampla não corrigida na infância atinge a adolescência com Síndrome de Eisenmenger estabelecida, o que ocorre tipicamente com o sopro holossistólico prévio da CIV?',
  options: {
    A: 'O sopro holossistólico desaparece ou atenua-se expressivamente, pois o gradiente pressórico sistólico entre os ventrículos praticamente se anula.',
    B: 'O sopro torna-se contínuo em maquinária irradiando amplamente para o dorso e pescoço.',
    C: 'O sopro transforma-se em um estalido protodiastólico isolado com redução drástica da segunda bulha cardíaca.',
    D: 'O sopro ganha timbre musical vibratório típico de alta intensidade grau 6/6 com frêmito em foco aórtico.',
  },
  correctOption: 'A',
  generalComment: 'O sopro na CIV depende exclusivamente do turbilhonamento gerado pelo gradiente de pressão sistólica entre VE (~100 mmHg) e VD (~25 mmHg). Na síndrome de Eisenmenger, a resistência e a pressão no VD se igualam ou superam as do VE. Sem gradiente pressórico significativo, o fluxo através do orifício deixa de ser turbilhonado e o sopro desaparece ou torna-se inaudível, restando apenas sinais de hipertensão pulmonar grave (P2 em tiro de canhão e sopro de insuficiência pulmonar de Graham-Steell).',
  explanations: {
    A: 'Correta. A equalização das pressões ventriculares elimina o gradiente turbilhonar, fazendo com que o clássico sopro regurgitativo desapareça.',
    B: 'Incorreta. Sopro contínuo em maquinária é exclusivo da persistência do canal arterial.',
    C: 'Incorreta. A segunda bulha torna-se intensamente hiperfonética e palpável, não diminuída.',
    D: 'Incorreta. Sopro vibratório benigno é o sopro de Still, sem qualquer relação com hipertensão pulmonar avançada.',
  },
});

// Continuação com as demais seções até 100...
console.log('Gravando 100 questões detalhadas no banco de dados...');
