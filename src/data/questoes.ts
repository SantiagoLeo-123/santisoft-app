import type { Question } from '@/types';
import { QUESTOES_EXANTEMATICAS } from './questoesExantematicas';
import { QUESTOES_IMUNIZACAO } from './questoesImunizacao';
import { QUESTOES_ITU_PEDIATRICA } from './questoesITUPediatrica';
import { QUESTOES_NEONATOLOGIA } from './questoesNeonatologia';
import { QUESTOES_NEONATOLOGIA_2 } from './questoesNeonatologia2';
import { QUESTOES_PUBERDADE } from './questoesPuberdade';
import { QUESTOES_IRA_BAIXA } from './questoesIRABaixa';
import { QUESTOES_ESTRIDOR } from './questoesEstridor';
import { QUESTOES_IVAS } from './questoesIVAS';
import { QUESTOES_GASTRO_PEDIATRICA } from './questoesGastroPediatrica';

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
}

export type RawQuestion = RawCardioQuestion;

export const TEMAS_PEDIATRIA = [
  "CARDIOLOGIA PEDIATRICA",
  "CRESCIMENTO E SEUS DISTURBIOS",
  "DOENÇAS EXANTEMATICAS",
  "IMUNIZAÇÕES",
  "ITU PEDIATRICO",
  "Neonatologia I (Icterícia Neonatal e Reanimação)",
  "Neonatologia II (Infecções Congênitas e Distúrbios Respiratórios)",
  "Puberdade e seus Distúrbios",
  "Infecções Respiratórias Inferiores",
  "IRA (Infecções de Vias Aéreas Inferiores)",
  "IRA com Estridor",
  "IRA Infecções de Vias Aéreas Superiores",
  "Doenças Gastrointestinais",
  "Aleitamento Materno e Suplementação com Micronutrientes"
];

// ============================================================================
// BANCO COM 100 QUESTÕES COMPLETAS DE CARDIOLOGIA PEDIÁTRICA
// Cobrindo CIV, Tetralogia de Fallot, Coarctação de Aorta, PCA, TGA,
// Doença de Kawasaki, Febre Reumática, TSV e Teste do Coraçãozinho.
// ============================================================================
export const QUESTOES_CARDIOLOGIA_PEDIATRICA_100: RawCardioQuestion[] = [
  {
    "id": "ped-cardio-100-001",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Lactente de 2 meses é levado à consulta por cansaço durante as mamadas e sudorese cefálica profusa. Ao exame: taquipneico (FR: 62 irpm), acianótico, peso no percentil 3. Ausculta revela sopro holossistólico 4+/6+ rude em borda esternal esquerda baixa com frêmito palpável e sopro mesodiastólico suave em ápice. O ecocardiograma confirma CIV perimembranosa ampla. Qual é a causa do sopro mesodiastólico em ápice?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Hiperfluxo relativo através da valva mitral pelo aumento do retorno venoso pulmonar ao átrio esquerdo."
      },
      {
        "id": "B",
        "texto": "Estenose mitral congênita associada em valva em paraquedas."
      },
      {
        "id": "C",
        "texto": "Insuficiência tricúspide secundária ao aumento agudo da pressão sistólica ventricular direita."
      },
      {
        "id": "D",
        "texto": "Regurgitação da valva aórtica por prolapso da cúspide coronariana direita para a CIV."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na CIV com grande shunt esquerda-direita, o sangue recircula pelos pulmões e retorna em grande volume para o átrio e ventrículo esquerdos. O aumento substancial do volume diastólico que atravessa o orifício valvar mitral anatomicamente normal gera estenose mitral funcional/relativa, audível como ruflar mesodiastólico no ápice.",
    "comentariosAlternativas": {
      "A": "Correta. O hiperfluxo transvalvar mitral diastólico decorrente do retorno venoso pulmonar volumoso é a causa semiológica clássica do sopro mesodiastólico apical.",
      "B": "Incorreta. A valva mitral é anatomicamente normal; a restrição é meramente funcional por hiperfluxo.",
      "C": "Incorreta. A insuficiência tricúspide causaria sopro holossistólico em borda esternal esquerda inferior, não mesodiastólico em ápice.",
      "D": "Incorreta. O prolapso de cúspide aórtica gera sopro protodiastólico aspirativo em foco aórtico, não ruflar mesodiastólico mitral."
    }
  },
  {
    "id": "ped-cardio-100-002",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Recém-nascido de 3 dias de vida, assintomático, apresenta ao exame auscultatório sopro holossistólico de alta frequência 2+/6+ em bordo esternal esquerdo inferior. O ecocardiograma revela CIV muscular trabecular pequena de 2 mm de diâmetro. Não há sobrecarga de câmaras. Qual é a conduta mais adequada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Acompanhamento clínico ambulatorial periódico, pois a grande maioria das CIVs musculares pequenas fecha espontaneamente nos primeiros anos."
      },
      {
        "id": "B",
        "texto": "Indicação cirúrgica imediata com esternotomia para fechamento com retalho de pericárdio bovino."
      },
      {
        "id": "C",
        "texto": "Início de digitalização rápida associada a furosemida em dose plena para evitar cardiomegalia."
      },
      {
        "id": "D",
        "texto": "Restrição hídrica severa e cateterismo cardíaco intervencionista de urgência com prótese Amplatzer."
      }
    ],
    "correta": "A",
    "comentarioGeral": "As CIVs musculares pequenas (doença de Roger) são lesões restritivas com gradiente elevado entre VE e VD sem sobrecarga hemodinâmica pulmonar. Cerca de 70-80% fecham espontaneamente nos primeiros anos de vida.",
    "comentariosAlternativas": {
      "A": "Correta. CIVs musculares restritivas pequenas em assintomáticos possuem alta taxa de encerramento espontâneo.",
      "B": "Incorreta. Cirurgia aberta é contraindicada em defeitos pequenos assintomáticos sem hipertensão pulmonar.",
      "C": "Incorreta. Paciente assintomático não possui insuficiência cardíaca; diuréticos seriam iatrogênicos.",
      "D": "Incorreta. Não há indicação de oclusão percutânea em lactente assintomático com microdefeito."
    }
  },
  {
    "id": "ped-cardio-100-003",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Menino de 4 anos com CIV perimembranosa subarterial (supracristal) é avaliado em consulta. Ecocardiograma revela shunt E-D moderado e discreto prolapso da cúspide aórtica coronariana direita com regurgitação aórtica leve de início recente. Qual é a conduta preconizada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Indicação de correção cirúrgica do defeito para prevenir a progressão da insuficiência valvar aórtica."
      },
      {
        "id": "B",
        "texto": "Tratamento clínico expectante com reavaliação ecocardiográfica após os 12 anos de idade."
      },
      {
        "id": "C",
        "texto": "Início de vasodilatador IECA em dose alta e alta definitiva do ambulatório cirúrgico."
      },
      {
        "id": "D",
        "texto": "Valvoplastia aórtica percutânea por balão sem necessidade de fechar a CIV."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A CIV subarterial (supracristal) localiza-se logo abaixo das valvas semilunares. Pelo efeito Venturi da passagem de fluxo de alta velocidade, ocorre sucção e prolapso da cúspide aórtica com insuficiência aórtica progressiva (Síndrome de Laubry-Pezzi), tornando o fechamento cirúrgico mandatório.",
    "comentariosAlternativas": {
      "A": "Correta. O risco de destruição valvar progressiva torna o fechamento cirúrgico da CIV infundibular mandatório ao surgir prolapso.",
      "B": "Incorreta. A conduta expectante resultará em dano valvar grave com necessidade de prótese valvar futura.",
      "C": "Incorreta. IECA não impede a tração mecânica hemodinâmica gerada sobre a cúspide aórtica desprovida de sustentação.",
      "D": "Incorreta. A lesão primária é a insuficiência por prolapso, não estenose; balão pioraria a regurgitação."
    }
  },
  {
    "id": "ped-cardio-100-004",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Lactente de 3 meses com CIV perimembranosa ampla evolui com taquipneia, hepatomegalia e interrupções nas mamadas. É prescrito furosemida, espironolactona e enalapril. Qual é o papel farmacológico do IECA nessa condição?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Reduzir a pós-carga sistêmica, favorecendo a ejeção do VE para a aorta e diminuindo a magnitude do shunt esquerda-direita."
      },
      {
        "id": "B",
        "texto": "Promover fechamento farmacológico anatômico das bordas fibrosas do septo interventricular."
      },
      {
        "id": "C",
        "texto": "Aumentar a contratilidade intrínseca do ventrículo direito via ativação beta-1 adrenérgica."
      },
      {
        "id": "D",
        "texto": "Diminuir a capacitância venosa pulmonar com elevação seletiva da pressão de átrio direito."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Ao promover vasodilatação arterial sistêmica e reduzir a pós-carga de VE, o IECA facilita a ejeção para a circulação sistêmica em detrimento da passagem anômala para o ventrículo direito e leito pulmonar.",
    "comentariosAlternativas": {
      "A": "Correta. A diminuição da resistência sistêmica reduz o gradiente efetivo de desvio para o ventrículo direito.",
      "B": "Incorreta. Fármacos não fecham orifícios de CIVs perimembranosas.",
      "C": "Incorreta. IECAs são vasodilatadores, não inotrópicos positivos.",
      "D": "Incorreta. O objetivo do IECA é desobstruir e esvaziar a vasculatura pulmonar reduzindo pressões de enchimento."
    }
  },
  {
    "id": "ped-cardio-100-005",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual alteração no eletrocardiograma é mais característica de um lactente com CIV de grande magnitude antes da instalação de hipertensão pulmonar fixa irreversível?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sobrecarga biventricular com complexos QRS amplos difásicos em precordiais médias (fenômeno de Katz-Wachtel)."
      },
      {
        "id": "B",
        "texto": "Bloqueio atrioventricular de terceiro grau congênito com escape idioventricular lento."
      },
      {
        "id": "C",
        "texto": "Sobrecarga ventricular direita pura com onda S profunda exclusiva em V5 e V6."
      },
      {
        "id": "D",
        "texto": "Infradesnivelamento difuso do segmento ST com ondas T invertidas em todas as derivações."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Em lactentes com CIV grande e shunt E-D volumoso, o VD sofre sobrecarga de pressão/volume e o VE sofre sobrecarga volumétrica. O traçado clássico no ECG demonstra sobrecarga biventricular pelo sinal de Katz-Wachtel (QRS amplos difásicos em V2-V4).",
    "comentariosAlternativas": {
      "A": "Correta. O fenômeno de Katz-Wachtel expressa a sobrecarga biventricular típica de grandes shunts interventriculares.",
      "B": "Incorreta. BAVT congênito associa-se a lúpus neonatal materno (anti-Ro/SSA).",
      "C": "Incorreta. SVD isolada surge apenas tardiamente na síndrome de Eisenmenger com atrofia relativa de VE.",
      "D": "Incorreta. Isquemia difusa não é achado padrão de CIV isolada."
    }
  },
  {
    "id": "ped-cardio-100-006",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Criança de 8 meses com CIV ampla e desnutrição grave está programada para cirurgia corretiva. Durante o cateterismo para teste de vasorreatividade pulmonar, qual achado contraindica a cirurgia corretiva isolada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Resistência vascular pulmonar fixa > 8 Wood units/m² não responsiva a vasodilatadores inalatórios, com shunt invertido D-E."
      },
      {
        "id": "B",
        "texto": "Relação de fluxo pulmonar/sistêmico (Qp/Qs) de 2,5 com pressão arterial pulmonar média responsiva a vasodilatadores."
      },
      {
        "id": "C",
        "texto": "Pressão de oclusão de artéria pulmonar de 12 mmHg com saturação venosa mista de 72%."
      },
      {
        "id": "D",
        "texto": "Gradiente transvalvar aórtico de 5 mmHg com fração de ejeção do ventrículo esquerdo de 64%."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A presença de doença vascular pulmonar obstrutiva avançada irreversível (RVP > 8 Wood units/m² fixa) caracteriza a Síndrome de Eisenmenger, contraindicando o fechamento isolado do defeito.",
    "comentariosAlternativas": {
      "A": "Correta. RVP fixa alta e refratária demonstra arteriopatia plexogênica irreversível, contraindicando o fechamento do defeito.",
      "B": "Incorreta. Qp/Qs de 2,5 com vasorreatividade preservada é excelente indicativo de indicação e sucesso cirúrgico.",
      "C": "Incorreta. Pressão de capilar pulmonar normal e saturação adequada indicam boa reserva hemodinâmica.",
      "D": "Incorreta. Ausência de gradiente aórtico e função de VE normal são condições favoráveis ao reparo."
    }
  },
  {
    "id": "ped-cardio-100-007",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o tipo anatômico mais prevalente de Comunicação Interventricular na infância, correspondendo a cerca de 70 a 80% dos casos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "CIV perimembranosa."
      },
      {
        "id": "B",
        "texto": "CIV muscular apical."
      },
      {
        "id": "C",
        "texto": "CIV subarterial duplamente relacionada."
      },
      {
        "id": "D",
        "texto": "CIV do septo de entrada (inlet)."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A CIV perimembranosa é a mais frequente, localizando-se no septo membranoso adjacente à valva tricúspide e valva aórtica, em íntimo contato com o feixe de His.",
    "comentariosAlternativas": {
      "A": "Correta. A CIV perimembranosa responde pela grande maioria dos casos clínicos e cirúrgicos.",
      "B": "Incorreta. CIVs musculares representam 10 a 20% das casuísticas.",
      "C": "Incorreta. CIVs subarteriais perfazem cerca de 5 a 7%.",
      "D": "Incorreta. CIVs de via de entrada são raras isoladamente e integram o defeito de septo AV."
    }
  },
  {
    "id": "ped-cardio-100-008",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "No fechamento cirúrgico de uma CIV perimembranosa via atriotomia direita, qual estrutura do sistema de condução cardíaca corre maior risco de lesão iatrogênica na sutura da borda posteroinferior?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Feixe de His e nó atrioventricular."
      },
      {
        "id": "B",
        "texto": "Nó sinoatrial na crista terminal."
      },
      {
        "id": "C",
        "texto": "Feixe de Bachmann interatrial."
      },
      {
        "id": "D",
        "texto": "Ramo direito terminal na banda moderadora."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na CIV perimembranosa, o feixe de His transita na borda posteroinferior do defeito. A sutura inadvertida nessa topografia pode gerar Bloqueio Atrioventricular Total (BAVT) pós-operatório.",
    "comentariosAlternativas": {
      "A": "Correta. O feixe de condução AV corre na margem posteroinferior da CIV perimembranosa.",
      "B": "Incorreta. O nó SA situa-se alto no átrio direito junto à veia cava superior.",
      "C": "Incorreta. O feixe de Bachmann transita no septo interatrial superior.",
      "D": "Incorreta. O ramo direito percorre a banda moderadora mais distalmente."
    }
  },
  {
    "id": "ped-cardio-100-009",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Por que o sopro clássico de uma CIV de tamanho moderado costuma não ser audível nas primeiras 24 a 48 horas de vida do recém-nascido a termo, surgindo tipicamente entre a 2ª e a 6ª semana de vida?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Porque a resistência vascular pulmonar ainda está fisiologicamente elevada ao nascimento, igualando as pressões entre os ventrículos e impedindo turbilhonamento significativo."
      },
      {
        "id": "B",
        "texto": "Porque o forame oval patente fecha o orifício da CIV por aposição mecânica durante os primeiros dias."
      },
      {
        "id": "C",
        "texto": "Devido à persistência do canal arterial que gera refluxo aórtico contínuo e abafa qualquer ruído septal."
      },
      {
        "id": "D",
        "texto": "Pelo fechamento transitório do septo membranoso mediado por altas concentrações de prostaglandina materna."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Com o nascimento, a resistência vascular pulmonar cai gradualmente. Enquanto as pressões no VD e VE forem semelhantes, não há gradiente nem fluxo turbilhonado. Quando a RVP cai entre 2 e 6 semanas, surge o gradiente e o sopro holossistólico.",
    "comentariosAlternativas": {
      "A": "Correta. A queda fisiológica progressiva da resistência vascular pulmonar pós-natal determina o surgimento do sopro.",
      "B": "Incorreta. O forame oval comunica átrios e não tem aposição mecânica com o septo interventricular.",
      "C": "Incorreta. A PCA não abafa o septo interventricular.",
      "D": "Incorreta. Prostaglandinas atuam no canal arterial, sem ação oclusiva em septos musculares."
    }
  },
  {
    "id": "ped-cardio-100-010",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual manifestação clínica em lactente com CIV indica hiperfluxo pulmonar com hipertensão pulmonar hipercinética e indicação cirúrgica antes dos 6 meses de vida?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Taquipneia em repouso, sudorese fria às mamadas, baixo ganho ponderal e hiperfonese da 2ª bulha em foco pulmonar."
      },
      {
        "id": "B",
        "texto": "Cianose central isolada sem taquipneia associada a baqueteamento digital precoce."
      },
      {
        "id": "C",
        "texto": "Pulsos femorais impalpáveis com hipertensão arterial grave em membros superiores."
      },
      {
        "id": "D",
        "texto": "Episódios de dor torácica aos esforços com estalido de ejeção aórtico e sopro diastólico."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Os sinais clássicos de insuficiência cardíaca congestiva de alto fluxo em lactentes com CIV grande são taquidispneia, sudorese durante a alimentação, falha no ganho ponderal e hiperfonese de P2.",
    "comentariosAlternativas": {
      "A": "Correta. Sintomas cardinais de ICC por hiperfluxo pulmonar volumoso na infância.",
      "B": "Incorreta. Cianose precoce sem ICC aponta para cardiopatia congênita cianótica (ex: TGA, Fallot).",
      "C": "Incorreta. Descrição clássica de Coarctação de Aorta.",
      "D": "Incorreta. Sugestivo de estenose ou insuficiência aórtica em escolares."
    }
  },
  {
    "id": "ped-cardio-100-011",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Em um paciente portador de CIV perimembranosa pequena assintomática de 3 mm sem repercussão hemodinâmica, qual complicação infecciosa potencial requer orientação permanente de higiene oral rigorosa?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Endocardite Infecciosa provocada pelo fluxo de jato de alta velocidade que lesiona o endocárdio ventricular oposto."
      },
      {
        "id": "B",
        "texto": "Meningite meningocócica secundária à embolia séptica paradoxal interatrial."
      },
      {
        "id": "C",
        "texto": "Glomerulonefrite pós-estreptocócica decorrente de deposição de imunocomplexos no septo interventricular."
      },
      {
        "id": "D",
        "texto": "Abscesso esplênico primário por disseminação linfática retrógrada da artéria pulmonar."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Pequenos defeitos interventriculares geram jatos de alta velocidade que impactam a parede oposta do VD, desendotelizando a superfície e formando trombos plaquetários propensos à colonização bacteriana.",
    "comentariosAlternativas": {
      "A": "Correta. A alta velocidade do jato em defeitos restritivos causa lesão endotelial por cisalhamento, propiciando endocardite infecciosa.",
      "B": "Incorreta. Embolia paradoxal requer shunt direita-esquerda.",
      "C": "Incorreta. GNPE decorre de imunocomplexos em capilares glomerulares renais.",
      "D": "Incorreta. Disseminação de endocardite segue a via hematogênica sistêmica ou pulmonar."
    }
  },
  {
    "id": "ped-cardio-100-012",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Quando um paciente com CIV ampla atinge a adolescência com Síndrome de Eisenmenger estabelecida, o que ocorre tipicamente com o sopro holossistólico prévio da CIV?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O sopro holossistólico desaparece ou atenua-se expressivamente, pois o gradiente pressórico sistólico entre os ventrículos se anula."
      },
      {
        "id": "B",
        "texto": "O sopro torna-se contínuo em maquinária irradiando amplamente para o dorso."
      },
      {
        "id": "C",
        "texto": "O sopro transforma-se em um estalido protodiastólico isolado com redução drástica da segunda bulha cardíaca."
      },
      {
        "id": "D",
        "texto": "O sopro ganha timbre musical vibratório de alta intensidade grau 6/6 com frêmito em foco aórtico."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na síndrome de Eisenmenger, a pressão no VD se iguala à do VE. Sem gradiente pressórico, o fluxo pelo orifício não é turbilhonado e o sopro desaparece, restando sinais de hipertensão pulmonar (hiperfonese extrema de P2).",
    "comentariosAlternativas": {
      "A": "Correta. A equalização das pressões ventriculares elimina o gradiente turbilhonar.",
      "B": "Incorreta. Sopro contínuo em maquinária é exclusivo da persistência do canal arterial.",
      "C": "Incorreta. A segunda bulha torna-se intensamente hiperfonética e palpável.",
      "D": "Incorreta. Sopro vibratório benigno é o sopro de Still."
    }
  },
  {
    "id": "ped-cardio-100-013",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Quais são os quatro componentes anatômicos clássicos que compõem a Tetralogia de Fallot?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Estenose pulmonar infundibular, Comunicação Interventricular (CIV), Dextroposição/cavalgamento da aorta e Hipertrofia do ventrículo direito."
      },
      {
        "id": "B",
        "texto": "Comunicação Interatrial (CIA), CIV, Valva AV única comum e Hipoplasia do arco aórtico."
      },
      {
        "id": "C",
        "texto": "Transposição das grandes artérias, Estenose aórtica subvalvar, CIV e Persistência do canal arterial."
      },
      {
        "id": "D",
        "texto": "Coarctação da aorta, Atresia tricúspide, Dextrocardia e Drenagem anômala de veias pulmonares."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A tétrade descrita por Étienne-Louis Fallot decorre do desvio anterior e cefálico do septo infundibular, resultando em estenose pulmonar, CIV ampla, dextroposição da aorta e hipertrofia de VD.",
    "comentariosAlternativas": {
      "A": "Correta. Define com exatidão os 4 defeitos anatômicos clássicos da Tetralogia de Fallot.",
      "B": "Incorreta. Essa composição caracteriza o Defeito do Septo Atrioventricular (DSAV).",
      "C": "Incorreta. Trata-se de TGA com lesões associadas.",
      "D": "Incorreta. Mistura elementos de cardiopatias univentriculares e obstrutivas esquerdas."
    }
  },
  {
    "id": "ped-cardio-100-014",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Lactente de 7 meses portador de Tetralogia de Fallot apresenta episódio súbito de irritabilidade, choro intenso, taquipneia profunda e cianose labial acentuada. O sopro sistólico prévio encontra-se quase inaudível. Qual é a conduta imediata prioritária?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Colocar a criança em posição genupeitoral (joelho-tórax), ofertar oxigênio e administrar morfina intramuscular ou subcutânea."
      },
      {
        "id": "B",
        "texto": "Administrar infusão rápida de bicarbonato de sódio a 8,4% e digoxina intravenosa imediata."
      },
      {
        "id": "C",
        "texto": "Realizar intubação orotraqueal imediata com hiperventilação mecânica agressiva."
      },
      {
        "id": "D",
        "texto": "Administrar furosemida intravenosa em alta dose associada a nitroprussiato de sódio."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na crise hipercianótica do Fallot, o espasmo infundibular reduz criticamente o fluxo pulmonar e desvia sangue desoxigenado para a aorta. A posição genupeitoral aumenta a resistência vascular sistêmica e a morfina acalma o lactente, quebrando o ciclo adrenérgico.",
    "comentariosAlternativas": {
      "A": "Correta. Posição genupeitoral, oxigênio e morfina constituem o tripé inicial de resgate na crise de hipóxia do Fallot.",
      "B": "Incorreta. Bicarbonato é reservado para acidose metabólica grave; digoxina não relaxa o infundíbulo.",
      "C": "Incorreta. Intubação intempestiva pode piorar a descarga adrenérgica antes da sedação adequada.",
      "D": "Incorreta. Vasodilatadores reduzem a resistência sistêmica, piorando o shunt direita-esquerda."
    }
  },
  {
    "id": "ped-cardio-100-015",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Durante uma crise de cianose em um paciente com Tetralogia de Fallot, por que a intensidade do sopro sistólico diminui ou desaparece?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Porque o sopro audível no Fallot decorre da estenose pulmonar; durante o espasmo infundibular quase não passa fluxo através da via de saída do VD."
      },
      {
        "id": "B",
        "texto": "Porque a CIV se fecha reflexamente durante a taquicardia extrema da crise hipoxêmica."
      },
      {
        "id": "C",
        "texto": "Devido à hipotensão arterial sistêmica súbita que anula a pressão na aorta ascendente."
      },
      {
        "id": "D",
        "texto": "Pelo fechamento espontâneo do canal arterial que sustentava a pressão intracardíaca."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O sopro do Fallot é exclusivamente o sopro ejetivo da estenose pulmonar. No espasmo infundibular, o orifício para o pulmão fica quase totalmente ocluído, diminuindo expressivamente o fluxo e abafando o sopro.",
    "comentariosAlternativas": {
      "A": "Correta. O sopro reflete a passagem pela via de saída de VD; a redução crítica do fluxo pulmonar no espasmo atenua o ruído.",
      "B": "Incorreta. A CIV é ampla, não contrátil e não fecha na crise.",
      "C": "Incorreta. A pressão da aorta não define o sopro estenótico pulmonar.",
      "D": "Incorreta. O canal arterial geralmente já está fechado no lactente de vários meses com Fallot."
    }
  },
  {
    "id": "ped-cardio-100-016",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o aspecto radiológico característico da silhueta cardíaca na radiografia de tórax de um paciente com Tetralogia de Fallot clássica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Coração em formato de bota ou tamanco holandês (coeur en sabot) com ponta cardíaca levantada e hipofluxo pulmonar (campos pleuro-pulmonares escuros)."
      },
      {
        "id": "B",
        "texto": "Coração em formato de ovo deitado (egg-on-a-string) com mediastino superior estreito."
      },
      {
        "id": "C",
        "texto": "Cardiomegalia maciça ocupando todo o hemitórax com aspecto em garrafa ou moringa."
      },
      {
        "id": "D",
        "texto": "Aspecto de boneco de neve ou formato em 8 com circulação pulmonar hipercongestiva difusa."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A hipertrofia concêntrica de VD eleva o ápice cardíaco acima do diafragma, associada à escavação da artéria pulmonar hipoplásica, configurando o coração em tamanco holandês (coeur en sabot) com campos oligêmicos.",
    "comentariosAlternativas": {
      "A": "Correta. Coeur en sabot com escavação do tronco pulmonar e hipofluxo periférico é a descrição clássica do Fallot.",
      "B": "Incorreta. Ovo deitado com pedículo estreito é característico da Transposição das Grandes Artérias (TGA).",
      "C": "Incorreta. Coração em moringa/garrafa é típico de Anomalia de Ebstein ou derrame pericárdico volumoso.",
      "D": "Incorreta. Sinal do boneco de neve é patognomônico da DATVP supracardíaca."
    }
  },
  {
    "id": "ped-cardio-100-017",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Menino de 3 anos com Tetralogia de Fallot não operada é observado correndo no parque e, ao sentir cansaço, agacha-se espontaneamente no chão (posição de cócoras / squatting). Qual é o benefício fisiológico dessa manobra?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aumentar a resistência vascular sistêmica pela flexão das artérias femorais, reduzindo o shunt direita-esquerda e aumentando o fluxo de sangue aos pulmões."
      },
      {
        "id": "B",
        "texto": "Promover relaxamento imediato do diafragma facilitando a expansão da base pulmonar esquerda."
      },
      {
        "id": "C",
        "texto": "Diminuir o retorno venoso de sangue desoxigenado para o átrio direito, aliviando a sobrecarga de volume do VD."
      },
      {
        "id": "D",
        "texto": "Bloquear os barorreceptores carotídeos induzindo bradicardia reflexa e redução da fração de ejeção."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O agachamento (squatting) comprime as artérias femorais e ilíacas, elevando a resistência vascular sistêmica. Com a RVS mais alta, o shunt D-E diminui e mais sangue atravessa a via pulmonar, melhorando a saturação.",
    "comentariosAlternativas": {
      "A": "Correta. O squatting eleva a RVS, forçando maior proporção do débito cardíaco a ultrapassar a estenose pulmonar.",
      "B": "Incorreta. O benefício é predominantemente hemodinâmico vascular, não ventilatório diafragmático.",
      "C": "Incorreta. A posição de cócoras eleva o retorno venoso dos membros inferiores.",
      "D": "Incorreta. A manobra não visa bradicardia, mas reversão do shunt intracardíaco."
    }
  },
  {
    "id": "ped-cardio-100-018",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o fármaco de escolha para a profilaxia farmacológica crônica de novas crises de hipóxia em lactentes com Fallot enquanto aguardam a cirurgia definitiva?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Propranolol por via oral."
      },
      {
        "id": "B",
        "texto": "Enalapril por via oral."
      },
      {
        "id": "C",
        "texto": "Furosemida em dose contínua."
      },
      {
        "id": "D",
        "texto": "Amiodarona em dose de impregnação."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O betabloqueador (propranolol) atua relaxando a musculatura infundibular hipertrofiada da via de saída do VD, reduzindo a hiper-reatividade adrenérgica ao estresse e prevenindo o espasmo infundibular.",
    "comentariosAlternativas": {
      "A": "Correta. O propranolol oral é a droga de escolha para prevenção de crises de cianose no pré-operatório do Fallot.",
      "B": "Incorreta. IECA reduz a pós-carga sistêmica, piorando o shunt D-E.",
      "C": "Incorreta. Diuréticos diminuem a pré-carga de VD, favorecendo o colapso e espasmo infundibular.",
      "D": "Incorreta. Amiodarona é antiarrítmico com múltiplos efeitos adversos, sem indicação profilática no Fallot."
    }
  },
  {
    "id": "ped-cardio-100-019",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Em um recém-nascido com Tetralogia de Fallot com estenose pulmonar crítica e hipoxemia refratária grave nas primeiras semanas de vida, qual cirurgia paliativa é classicamente realizada para garantir fluxo pulmonar?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Anastomose sistêmico-pulmonar de Blalock-Taussig modificada (tubo de PTFE entre artéria subclávia e artéria pulmonar)."
      },
      {
        "id": "B",
        "texto": "Bandeamento da artéria pulmonar para redução de hiperfluxo."
      },
      {
        "id": "C",
        "texto": "Cirurgia de Jatene com transposição dos grandes vasos."
      },
      {
        "id": "D",
        "texto": "Cirurgia de Glenn bidirecional término-lateral isolada."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O shunt de Blalock-Taussig modificado cria uma fístula sistêmico-pulmonar usando um enxerto de Gore-Tex entre a artéria subclávia e a artéria pulmonar ipsilateral, garantindo fluxo pulmonar até a correção total.",
    "comentariosAlternativas": {
      "A": "Correta. O Blalock-Taussig modificado é o procedimento paliativo clássico para garantir suprimento sanguíneo pulmonar.",
      "B": "Incorreta. O bandeamento é feito em cardiopatias de hiperfluxo (CIV ampla, DSAV), e o Fallot tem hipofluxo.",
      "C": "Incorreta. Jatene é o tratamento cirúrgico definitivo da TGA.",
      "D": "Incorreta. O Glenn é o segundo estágio de cirurgias univentriculares."
    }
  },
  {
    "id": "ped-cardio-100-020",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual microdeleção cromossômica está fortemente associada à Tetralogia de Fallot e outros defeitos conotrunciais, associando-se a hipocalcemia neonatal, dismorfismos faciais e imunodeficiência celular?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Deleção do cromossomo 22q11.2 (Síndrome de DiGeorge / velocardiofacial)."
      },
      {
        "id": "B",
        "texto": "Trissomia do cromossomo 18 (Síndrome de Edwards)."
      },
      {
        "id": "C",
        "texto": "Monossomia do cromossomo X (45,X0 / Síndrome de Turner)."
      },
      {
        "id": "D",
        "texto": "Deleção do braço curto do cromossomo 5 (5p- / Síndrome de Cri-du-Chat)."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A microdeleção 22q11.2 (Síndrome de DiGeorge) responde por cerca de 15% dos casos de Tetralogia de Fallot e decorre de falha no desenvolvimento do 3º e 4º arcos faríngeos, cursando com cardiopatia conotruncal, aplasia/hipoplasia de timo e paratireoides.",
    "comentariosAlternativas": {
      "A": "Correta. A deleção 22q11.2 é a anomalia genética mais prevalente em cardiopatias de via de saída (conotrunciais).",
      "B": "Incorreta. Edwards associa-se a sobreposição de dedos e pés em mata-borrão.",
      "C": "Incorreta. Turner (45,X0) associa-se a Coarctação de Aorta e valva aórtica bicúspide.",
      "D": "Incorreta. Cri-du-chat cursa com choro miado de gato e microcefalia, sem associação predominante com Fallot."
    }
  },
  {
    "id": "ped-cardio-100-021",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "No pós-operatório tardio da correção cirúrgica completa da Tetralogia de Fallot em adultos jovens, qual é a sequela hemodinâmica mais frequente que comumente exige reintervenção valvar pulmonar?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Insuficiência valvar pulmonar livre crônica com dilatação progressiva e disfunção do ventrículo direito."
      },
      {
        "id": "B",
        "texto": "Estenose mitral grave decorrente de calcificação fibroelástica distrófica."
      },
      {
        "id": "C",
        "texto": "Hipertensão arterial pulmonar pré-capilar suprassistêmica irreversível."
      },
      {
        "id": "D",
        "texto": "Regurgitação aórtica maciça decorrente de rotura do anel aórtico reconstruído."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A ampliação da via de saída do VD durante a correção do Fallot envolve frequentemente a colocação de retalho transanular, resultando em insuficiência pulmonar livre crônica, dilatação do VD e arritmias ventriculares tardias.",
    "comentariosAlternativas": {
      "A": "Correta. A insuficiência pulmonar crônica é a principal lesão residual tardia pós-correção de Fallot.",
      "B": "Incorreta. A valva mitral não é abordada na cirurgia de Fallot.",
      "C": "Incorreta. O Fallot tem hipofluxo pulmonar prévio; não desenvolve hipertensão pulmonar primária.",
      "D": "Incorreta. Regurgitação aórtica maciça é incomum comparada à pulmonar."
    }
  },
  {
    "id": "ped-cardio-100-022",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o achado clássico da ausculta da segunda bulha cardíaca (B2) em um paciente com Tetralogia de Fallot típica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Segunda bulha única e hiperfonética em foco pulmonar, correspondente exclusivamente ao componente aórtico audível (A2)."
      },
      {
        "id": "B",
        "texto": "Desdobramento amplo e fixo de B2 sem variação respiratória."
      },
      {
        "id": "C",
        "texto": "Desdobramento paradoxal de B2 com fechamento aórtico atrasado após o pulmonar."
      },
      {
        "id": "D",
        "texto": "Bulha hipofonética em quatro tempos com galope protodiastólico atrial."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O componente pulmonar de B2 (P2) é inaudível devido à estenose pulmonar acentuada e baixa pressão arterial pulmonar. Assim, ausculta-se uma segunda bulha única, constituída puramente pelo componente aórtico (A2).",
    "comentariosAlternativas": {
      "A": "Correta. A segunda bulha é única porque P2 é inaudível devido à estenose pulmonar acentuada.",
      "B": "Incorreta. Desdobramento fixo de B2 é a marca semiológica da CIA.",
      "C": "Incorreta. Desdobramento paradoxal ocorre no BRE grave ou estenose aórtica importante.",
      "D": "Incorreta. Galope em 4 tempos ocorre na Anomalia de Ebstein."
    }
  },
  {
    "id": "ped-cardio-100-023",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Criança de 4 anos com Tetralogia de Fallot não operada apresenta hematócrito de 68% e hemoglobina de 22 g/dL. Apresenta cefaleia, letargia e hemiparesia motora focal súbita à direita. Qual complicação deve ser prontamente suspeitada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Abscesso cerebral piogênico ou acidente vascular cerebral isquêmico decorrente de hiperviscosidade e shunt D-E."
      },
      {
        "id": "B",
        "texto": "Mielite transversa aguda pós-vacinal com bloqueio de condução espinhal."
      },
      {
        "id": "C",
        "texto": "Encefalopatia hipertensiva maligna por estenose de artéria renal associada."
      },
      {
        "id": "D",
        "texto": "Edema cerebral vasogênico decorrente de intoxicação digitálica crônica."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A hipóxia crônica estimula eritropoiese extrema (hematócrito > 65%), aumentando a viscosidade sanguínea e predispondo a microtrombose venosa cerebral. Além disso, o shunt D-E permite que êmbolos sépticos ultrapassem a barreira capilar pulmonar, alcançando o cérebro e formando abscessos.",
    "comentariosAlternativas": {
      "A": "Correta. Abscesso cerebral e AVC isquêmico por hiperviscosidade e shunt D-E são complicações clássicas da cianose crônica.",
      "B": "Incorreta. Não há quadro espinhal sensitivo-motor compatível com mielite.",
      "C": "Incorreta. O paciente não tem hipertensão arterial maligna sistêmica de base.",
      "D": "Incorreta. O quadro focal com policitemia não decorre de intoxicação digitálica."
    }
  },
  {
    "id": "ped-cardio-100-024",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Em que faixa etária é atualmente recomendada a correção cirúrgica total eletiva da Tetralogia de Fallot na maioria dos centros cardiopediátricos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Entre 3 e 6 meses de vida."
      },
      {
        "id": "B",
        "texto": "Imediatamente nas primeiras 24 horas de vida de rotina para todos os casos."
      },
      {
        "id": "C",
        "texto": "Somente após os 10 anos de idade, aguardando o crescimento do anel pulmonar."
      },
      {
        "id": "D",
        "texto": "Aos 18 anos de idade, após o término da maturação óssea esquelética."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O reparo cirúrgico primário eletivo precoce entre 3 e 6 meses previne a hipertrofia ventricular excessiva, reduz a incidência de crises hipercianóticas e protege o desenvolvimento neurocognitivo.",
    "comentariosAlternativas": {
      "A": "Correta. O reparo cirúrgico completo eletivo é realizado idealmente entre 3 e 6 meses de vida.",
      "B": "Incorreta. Nas primeiras 24h é reservado apenas para formas extremas com atresia pulmonar crítica.",
      "C": "Incorreta. Postergar para os 10 anos causaria danos cerebrais e fibrose miocárdica grave.",
      "D": "Incorreta. Não se posterga cirurgia de cardiopatia congênita cianótica até a idade adulta."
    }
  },
  {
    "id": "ped-cardio-100-025",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Lactente de 40 dias é levado à consulta ambulatorial. A mãe queixa-se de irritabilidade ocasional. Ao exame físico: corado, eupneico. Aferição pressórica revela PA em membro superior direito de 130/80 mmHg e em membros inferiores de 75/45 mmHg. Pulsos radiais são amplos, enquanto os pulsos femorais são filiformes, com nítido atraso de pulso femoro-radial. Ausculta revela sopro sistólico suave em região interescapular dorsal esquerda. Qual é o diagnóstico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Coarctação de Aorta."
      },
      {
        "id": "B",
        "texto": "Persistência do Canal Arterial."
      },
      {
        "id": "C",
        "texto": "Defeito do Septo Atrioventricular total."
      },
      {
        "id": "D",
        "texto": "Estenose valvar aórtica congênita crítica."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A disparidade de pulsos e de pressão arterial entre membros superiores (hipertensão) e inferiores (hipotensão e pulsos diminuídos/atrasados), associada a sopro interescapular dorsal, é o quadro patognomônico da Coarctação da Aorta.",
    "comentariosAlternativas": {
      "A": "Correta. Discrepância pressórica com gradiente MMSS > MMII e retardo femoro-radial define Coarctação de Aorta.",
      "B": "Incorreta. A PCA cursa com pulsos amplos em quatro membros e sopro contínuo infraclavicular.",
      "C": "Incorreta. DSAV cursa com insuficiência cardíaca e pulsos simétricos.",
      "D": "Incorreta. Estenose aórtica reduz os pulsos de forma difusa (parvus et tardus em 4 membros)."
    }
  },
  {
    "id": "ped-cardio-100-026",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual anomalia valvar congênita está mais frequentemente associada à Coarctação de Aorta, ocorrendo em cerca de 50 a 80% dos pacientes acometidos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Valva aórtica bicúspide."
      },
      {
        "id": "B",
        "texto": "Valva tricúspide com delaminação incompleta."
      },
      {
        "id": "C",
        "texto": "Valva mitral em paraquedas com orifício único."
      },
      {
        "id": "D",
        "texto": "Valva pulmonar quadricúspide estenótica."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A valva aórtica bicúspide é a malformação congênita associada mais prevalente na Coarctação de Aorta (50-80% dos casos), exigindo rastreio ecocardiográfico e vigilância a longo prazo para estenose, regurgitação e endocardite.",
    "comentariosAlternativas": {
      "A": "Correta. A valva aórtica bicúspide é encontrada na grande maioria dos pacientes com Coarctação de Aorta.",
      "B": "Incorreta. Alteração característica da Anomalia de Ebstein.",
      "C": "Incorreta. Faz parte do complexo de Shone.",
      "D": "Incorreta. Valva pulmonar quadricúspide é uma anomalia extremamente rara."
    }
  },
  {
    "id": "ped-cardio-100-027",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Neonato de 10 dias de vida evolui subitamente com choque cardiogênico grave, letargia, palidez acinzentada, anúria e acidose láctica profunda logo após o fechamento do canal arterial. A palpação revela ausência completa de pulsos femorais. Qual medida farmacológica inicial é mandatória?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Infusão contínua imediata de Prostaglandina E1 (Alprostadil)."
      },
      {
        "id": "B",
        "texto": "Indometacina intravenosa em bólus rápido para constrição ductal."
      },
      {
        "id": "C",
        "texto": "Furosemida em dose dobrada associada a carvedilol oral."
      },
      {
        "id": "D",
        "texto": "Bicarbonato de sódio contínuo sem drogas vasoativas."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na coarctação crítica neonatal justa-ductal, o fechamento espontâneo do canal arterial interrompe o fluxo para a aorta descendente, gerando choque obstrutivo e anúria. A infusão de Prostaglandina E1 (Alprostadil) reabre o canal e restabelece a perfusão sistêmica.",
    "comentariosAlternativas": {
      "A": "Correta. Prostaglandina E1 reabre o canal arterial, mantendo o fluxo distal até a cirurgia.",
      "B": "Incorreta. Indometacina fecha o canal, o que levaria o recém-nascido ao óbito.",
      "C": "Incorreta. Betabloqueadores e diuréticos em choque descompensado são deletérios.",
      "D": "Incorreta. Bicarbonato não desobstrui a circulação sistêmica interrompida."
    }
  },
  {
    "id": "ped-cardio-100-028",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual síndrome genética em meninas com baixa estatura, pescoço alado, tórax em escudo e amenorreia primária tem forte associação com Coarctação de Aorta (cerca de 15 a 20% dos casos)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Síndrome de Turner (cariótipo 45,X0)."
      },
      {
        "id": "B",
        "texto": "Síndrome de Down (Trissomia 21)."
      },
      {
        "id": "C",
        "texto": "Síndrome de Williams-Beuren (microdeleção 7q11.23)."
      },
      {
        "id": "D",
        "texto": "Síndrome de Marfan (mutação no gene FBN1)."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Síndrome de Turner (45,X0) possui íntima correlação com Coarctação de Aorta e valva aórtica bicúspide. Todas as pacientes com Turner devem realizar ecocardiograma ou angio-RNM de aorta ao diagnóstico.",
    "comentariosAlternativas": {
      "A": "Correta. A Coarctação de Aorta é a cardiopatia congênita típica da Síndrome de Turner.",
      "B": "Incorreta. Down associa-se a defeito do septo atrioventricular (DSAV) e CIV.",
      "C": "Incorreta. Williams associa-se à estenose aórtica supravalvar e estenose de ramos pulmonares.",
      "D": "Incorreta. Marfan associa-se à ectasia da raiz aórtica e prolapso mitral."
    }
  },
  {
    "id": "ped-cardio-100-029",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Na radiografia de tórax de um adolescente com Coarctação de Aorta de longa data, quais são os dois sinais clássicos visualizados na aorta e nos arcos costais?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sinal do 3 na aorta e erosões/entalhes nas bordas inferiores dos arcos costais posteriores (sinal de Roesler)."
      },
      {
        "id": "B",
        "texto": "Sinal do boneco de neve e hiperinsuflação pulmonar com retificação de cúpulas."
      },
      {
        "id": "C",
        "texto": "Sinal do duplo contorno atrial e escavação profunda do tronco da pulmonar."
      },
      {
        "id": "D",
        "texto": "Sinal da cimitarra e desvio do mediastino para a direita."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O sinal do 3 na aorta corresponde à constrição da coarctação com dilatação pré e pós-estenótica. O sinal de Roesler são entalhes/erosões no bordo inferior da 3ª à 8ª costelas produzidos pela pulsação hipertrófica das artérias intercostais colaterais.",
    "comentariosAlternativas": {
      "A": "Correta. Sinal do 3 e erosões costais de Roesler são patognomônicos da Coarctação aórtica.",
      "B": "Incorreta. Sinal do boneco de neve ocorre na DATVP.",
      "C": "Incorreta. Duplo contorno indica aumento de átrio esquerdo.",
      "D": "Incorreta. Sinal da cimitarra caracteriza a drenagem anômala parcial de veias pulmonares direitas."
    }
  },
  {
    "id": "ped-cardio-100-030",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Em um escolar de 8 anos com Coarctação de Aorta isolada nativa circunscrita com gradiente sistólico transcoarctação de 40 mmHg, qual é o tratamento intervencionista percutâneo de primeira linha amplamente aceito?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Angioplastia aórtica com implante de stent (endoprótese vascular)."
      },
      {
        "id": "B",
        "texto": "Atriosseptostomia com balão de Rashkind."
      },
      {
        "id": "C",
        "texto": "Fechamento percutâneo por dispositivo Amplatzer."
      },
      {
        "id": "D",
        "texto": "Trombectomia mecânica rotacional por aspiração."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Em crianças maiores (> 25-30 kg) e adolescentes com coarctação aórtica nativa, o implante de stent vascular expansível é a terapia de escolha, pois reduz as taxas de recoarctação e aneurismas pós-procedimento comparado à dilatação isolada por balão.",
    "comentariosAlternativas": {
      "A": "Correta. O implante de stent aórtico é a conduta padrão em crianças maiores e adolescentes.",
      "B": "Incorreta. Rashkind é manobra de mistura atrial para neonatos com TGA.",
      "C": "Incorreta. Amplatzer serve para ocluir comunicações (CIA, PCA), não para dilatar estenoses.",
      "D": "Incorreta. A coarctação é uma malformação congênita obstrutiva parietal, não um trombo intraluminal agudo."
    }
  },
  {
    "id": "ped-cardio-100-031",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual complicação cerebrovascular potencialmente fatal tem incidência aumentada em pacientes jovens com Coarctação de Aorta devido à associação congênita e à hipertensão crônica na circulação cefálica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ruptura de aneurisma sacular intracraniano no Polígono de Willis (hemorragia subaracnóidea)."
      },
      {
        "id": "B",
        "texto": "Trombose de seio sagital superior por hipercoagulabilidade congênita."
      },
      {
        "id": "C",
        "texto": "Arterite de Takayasu oclusiva do tronco braquiocefálico."
      },
      {
        "id": "D",
        "texto": "Malformação arteriovenosa da veia de Galeno com dilatação aneurismática."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Pacientes com Coarctação de Aorta apresentam risco aumentado (cerca de 5 a 10 vezes maior) de possuírem aneurismas saculares (\"berry aneurysms\") no Polígono de Willis, cujo risco de ruptura e hemorragia subaracnóidea é amplificado pela hipertensão arterial em território pré-coarctação.",
    "comentariosAlternativas": {
      "A": "Correta. Aneurismas saculares no polígono de Willis associam-se à Coarctação e podem romper causando HSA.",
      "B": "Incorreta. A Coarctação não induz trombofilia venosa primária.",
      "C": "Incorreta. Takayasu é vasculite inflamatória adquirida de grandes vasos.",
      "D": "Incorreta. Aneurisma de veia de Galeno é malformação vascular congênita neonatal específica."
    }
  },
  {
    "id": "ped-cardio-100-032",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "O que define a Coarctação de Aorta do tipo justaductal (a apresentação anatômica mais frequente)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O estreitamento aórtico localiza-se na transição entre o arco aórtico e a aorta descendente, imediatamente oposto à inserção do ligamento/canal arterial."
      },
      {
        "id": "B",
        "texto": "A obstrução ocorre na aorta abdominal abaixo do nascimento das artérias renais."
      },
      {
        "id": "C",
        "texto": "A estenose situa-se na aorta ascendente proximal, entre os óstios coronarianos."
      },
      {
        "id": "D",
        "texto": "Ocorre estenose concêntrica exclusiva do tronco celíaco e artéria mesentérica superior."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A vasta maioria das coarctações é do tipo justaductal: estreitamento do istmo aórtico localizado no nível do ducto/ligamento arterioso, logo abaixo da emergência da artéria subclávia esquerda.",
    "comentariosAlternativas": {
      "A": "Correta. O estreitamento justaductal no istmo aórtico é a localização anatômica clássica da coarctação.",
      "B": "Incorreta. Coarctação abdominal é rara (associada a neurofibromatose ou arterite).",
      "C": "Incorreta. Estenose de aorta ascendente caracteriza estenose supravalvar aórtica (Síndrome de Williams).",
      "D": "Incorreta. Não define coarctação da aorta torácica."
    }
  },
  {
    "id": "ped-cardio-100-033",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "No pós-operatório imediato da correção cirúrgica da Coarctação de Aorta, qual fenômeno vascular hipertensivo reflexo pode ocorrer nas primeiras 24 a 72 horas exigindo controle agressivo com vasodilatadores (ex: nitroprussiato de sódio ou esmolol)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Hipertensão arterial rebote paradoxal associada à síndrome pós-coarctectomia (arterite mesentérica reativa)."
      },
      {
        "id": "B",
        "texto": "Hipotensão profunda refratária com falência autonômica central."
      },
      {
        "id": "C",
        "texto": "Bloqueio sinoatrial agudo com síndrome bradi-taqui."
      },
      {
        "id": "D",
        "texto": "Trombocitopenia imune induzida por consumo plaquetário no leito aórtico."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A correção da coarctação restaura subitamente pressões pulsáteis elevadas aos leitos vasculares cronicamente subperfundidos abaixo da estenose. Ocorre estimulação de barorreceptores e do sistema renina-angiotensina com hipertensão paradoxal e risco de arterite mesentérica dolorosa (dor abdominal pós-coarctectomia).",
    "comentariosAlternativas": {
      "A": "Correta. A hipertensão paradoxal pós-operatória e arterite mesentérica reativa exigem controle pressórico rigoroso.",
      "B": "Incorreta. Ocorre hipertensão aguda de rebote, não hipotensão.",
      "C": "Incorreta. A inervação do nó sinoatrial não é lesada na abordagem do istmo aórtico torácico.",
      "D": "Incorreta. Não há trombocitopenia imune descrita como complicação padrão da coarctectomia."
    }
  },
  {
    "id": "ped-cardio-100-034",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Durante o exame físico de uma criança de 6 anos com sopro sistólico dorsal e suspeita de Coarctação de Aorta, qual gradiente de pressão arterial sistólica entre membro superior e membro inferior estabelece diagnóstico de relevância clínica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Diferença de pressão arterial sistólica maior que 20 mmHg a favor dos membros superiores."
      },
      {
        "id": "B",
        "texto": "Diferença de pressão menor que 5 mmHg com pulsos idênticos."
      },
      {
        "id": "C",
        "texto": "Pressão diastólica em membros inferiores superior em 40 mmHg à dos membros superiores."
      },
      {
        "id": "D",
        "texto": "Pressão sistólica igual a zero em ambos os membros superiores."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Em condições normais, a pressão arterial sistólica nos membros inferiores é igual ou ligeiramente maior (5 a 10 mmHg) que nos membros superiores. Uma PAS em MMSS superior à de MMII em mais de 20 mmHg é altamente diagnóstica de Coarctação aórtica significativa.",
    "comentariosAlternativas": {
      "A": "Correta. Gradiente sistólico MMSS > MMII superior a 20 mmHg confirma obstrução aórtica significativa.",
      "B": "Incorreta. Gradiente < 5 mmHg é normal.",
      "C": "Incorreta. Na coarctação a pressão em MMII é menor, não maior.",
      "D": "Incorreta. A pressão em MMSS é elevada na coarctação típica."
    }
  },
  {
    "id": "ped-cardio-100-035",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é a técnica cirúrgica clássica de escolha para a correção definitiva da Coarctação de Aorta em recém-nascidos e lactentes pequenos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ressecção do segmento coarctado com anastomose término-terminal estendida."
      },
      {
        "id": "B",
        "texto": "Implante de prótese mecânica tubular com troca da aorta torácica inteira."
      },
      {
        "id": "C",
        "texto": "Enxerto com retalho de Dacron sem ressecção da área estenosada."
      },
      {
        "id": "D",
        "texto": "Cerclagem externa com anel de silicone restritivo no arco aórtico."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A cirurgia padrão-ouro no lactente é a ressecção de todo o tecido ductal e segmento estenosado da aorta, seguida de anastomose término-terminal estendida (end-to-end), preservando o crescimento do vaso e minimizando o risco de recoarctação.",
    "comentariosAlternativas": {
      "A": "Correta. Ressecção com anastomose término-terminal estendida é a técnica consagrada em neonatos e lactentes.",
      "B": "Incorreta. Tubos rígidos não acompanham o crescimento da criança e são contraindicados em lactentes.",
      "C": "Incorreta. Retalhos protéticos simples têm maior taxa de formação tardia de aneurismas na parede oposta.",
      "D": "Incorreta. Cerclagem aumentaria a estenose em vez de tratá-la."
    }
  },
  {
    "id": "ped-cardio-100-036",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Recém-nascido pré-termo de 27 semanas e 950 g, no 5º dia de vida, apresenta piora ventilatória, precórdio hiperdinâmico, pulsos periféricos amplos e em martelo d'água e sopro contínuo em região infraclavicular esquerda. O ecocardiograma confirma PCA hemodinamicamente significativa com diâmetro de 2,8 mm. Qual é o mecanismo de ação dos fármacos de primeira linha (Ibuprofeno e Indometacina) no tratamento dessa condição?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Inibição da enzima ciclo-oxigenase (COX), bloqueando a síntese de prostaglandinas vasodilatadoras (especialmente PGE2) e promovendo a constrição do canal."
      },
      {
        "id": "B",
        "texto": "Bloqueio seletivo dos canais de cálcio do tipo L nas células musculares lisas ductais."
      },
      {
        "id": "C",
        "texto": "Estímulo direto dos receptores de óxido nítrico endotelial com vasoconstrição paradoxal."
      },
      {
        "id": "D",
        "texto": "Aumento da degradação hepática da bradicinina plasmática e do peptídeo natriurético."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O canal arterial é mantido pérvio na vida fetal por baixas tensões de oxigênio e altas concentrações de prostaglandinas (principalmente PGE2 sintetizada localmente e pela placenta). Os inibidores da COX (Ibuprofeno ou Indometacina) diminuem os níveis circulantes de PGE2, estimulando a contração muscular da túnica média e o fechamento do canal.",
    "comentariosAlternativas": {
      "A": "Correta. A inibição da síntese de prostaglandinas via bloqueio da COX é o mecanismo terapêutico clássico para fechar o canal no prematuro.",
      "B": "Incorreta. Bloqueadores de cálcio relaxam a musculatura vascular e manteriam o canal aberto.",
      "C": "Incorreta. Óxido nítrico é um potente vasodilatador pulmonar e ductal.",
      "D": "Incorreta. A via de fechamento ductal é mediada por prostaglandinas e oxigênio, não por degradação de bradicinina."
    }
  },
  {
    "id": "ped-cardio-100-037",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Em um prematuro extremo com PCA hemodinamicamente significativa, qual das seguintes condições clínicas constitui contraindicação formal ao uso de anti-inflamatórios inibidores da COX (Ibuprofeno ou Indometacina)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Enterocolite necrosante ativa ou sangramento gastrintestinal clinicamente evidente."
      },
      {
        "id": "B",
        "texto": "Dependência de oxigênio com necessidade de ventilação mecânica não invasiva (CPAP)."
      },
      {
        "id": "C",
        "texto": "Glicemia sérica de 85 mg/dL com fração de ejeção do VE de 65%."
      },
      {
        "id": "D",
        "texto": "Presença de sopro contínuo audível na ausculta cardíaca."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Inibidores da COX reduzem o fluxo sanguíneo esplâncnico e renal e inibem a agregação plaquetária. Suas contraindicações formais são: sangramento ativo significativo, trombocitopenia grave (< 50.000/mm³), enterocolite necrosante (ECN) suspeita ou confirmada, perfuração intestinal e insuficiência renal grave (anúria ou creatinina muito elevada).",
    "comentariosAlternativas": {
      "A": "Correta. Enterocolite necrosante e sangramento ativo são contraindicações absolutas aos AINEs.",
      "B": "Incorreta. Desconforto respiratório é indicação clássica para tratar a PCA.",
      "C": "Incorreta. Glicemia e fração de ejeção normais não contraindicam o tratamento.",
      "D": "Incorreta. O sopro é manifestação física da PCA, indicando a necessidade de avaliação e tratamento."
    }
  },
  {
    "id": "ped-cardio-100-038",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o nome semiológico clássico atribuído ao sopro contínuo que ocupa toda a sístole e diástole com reforço telessistólico, melhor audível no 1º e 2º espaços intercostais esquerdos infraclaviculares na Persistência do Canal Arterial?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sopro de Gibson (sopro em maquinária)."
      },
      {
        "id": "B",
        "texto": "Sopro de Austin Flint."
      },
      {
        "id": "C",
        "texto": "Sopro de Carey Coombs."
      },
      {
        "id": "D",
        "texto": "Sopro de Graham-Steell."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O sopro de Gibson é o clássico sopro contínuo em maquinária (ou em locomotiva). Ocorre porque a pressão na aorta é superior à pressão na artéria pulmonar tanto na sístole quanto na diástole, gerando fluxo contínuo e turbilhonado ao longo de todo o ciclo cardíaco.",
    "comentariosAlternativas": {
      "A": "Correta. O sopro em maquinária de Gibson é o sinal semiológico clássico da PCA.",
      "B": "Incorreta. Austin Flint é sopro mesodiastólico apical por regurgitação aórtica grave sobre o folheto mitral.",
      "C": "Incorreta. Carey Coombs é sopro mesodiastólico na cardite reumática ativa.",
      "D": "Incorreta. Graham-Steell é sopro diastólico de insuficiência pulmonar por hipertensão pulmonar grave."
    }
  },
  {
    "id": "ped-cardio-100-039",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Em recém-nascidos prematuros com PCA hemodinamicamente significativa que apresentam contraindicação formal ao uso de ibuprofeno e indometacina (como plaquetopenia grave ou sangramento ativo), qual fármaco intravenoso tem demonstrado eficácia comparável para o fechamento ductal com menor toxicidade gastrointestinal e renal?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Paracetamol (Acetaminofeno) intravenoso."
      },
      {
        "id": "B",
        "texto": "Alprostadil (Prostaglandina E1)."
      },
      {
        "id": "C",
        "texto": "Sildenafil intravenoso."
      },
      {
        "id": "D",
        "texto": "Captopril sublingual."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Paracetamol intravenoso atua inibindo a peroxidase na enzima prostaglandina H2 sintase (sítio diferente da COX inibida pelos AINEs clássicos). Vários ensaios clínicos demonstraram taxas de fechamento ductal similares às do ibuprofeno, com a grande vantagem de não inibir plaquetas nem causar vasoconstrição renal ou mesentérica, sendo excelente alternativa segura quando há contraindicação a AINEs.",
    "comentariosAlternativas": {
      "A": "Correta. O paracetamol IV é alternativa consagrada quando há contraindicação a inibidores da COX.",
      "B": "Incorreta. O Alprostadil mantém o canal aberto, o que agravaria o quadro.",
      "C": "Incorreta. O sildenafil é vasodilatador pulmonar e não fecha o canal.",
      "D": "Incorreta. Captopril não fecha o canal arterial."
    }
  },
  {
    "id": "ped-cardio-100-040",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o fenômeno hemodinâmico sistêmico gerado por uma PCA calibrosa no prematuro que predispõe ao desenvolvimento de enterocolite necrosante, insuficiência renal e hemorragia peri-intraventricular?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Roubo de fluxo diastólico sistêmico (\"diastolic steal\") decorrente do desvio maciço de sangue da aorta para a artéria pulmonar durante a diástole."
      },
      {
        "id": "B",
        "texto": "Hipertensão arterial sistólica fulminante com vasoespasmo coronariano reflexo."
      },
      {
        "id": "C",
        "texto": "Congestão venosa hepática com estase portal retrógrada pura."
      },
      {
        "id": "D",
        "texto": "Trombocitopenia dilucional extrema por sequestro esplênico maciço."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Como a resistência vascular pulmonar é baixa, ocorre um escoamento contínuo de sangue da aorta para o leito pulmonar, inclusive durante a diástole (\"roubo diastólico\"). Isso gera fluxo reverso na aorta descendente com hipoperfusão diastólica crítica nos órgãos abdominais (isquemia mesentérica -> ECN; isquemia renal) e flutuações no fluxo cerebral (predispondo a hemorragia intracraniana).",
    "comentariosAlternativas": {
      "A": "Correta. O roubo de fluxo diastólico da aorta para o pulmão hipoperfunde os leitos mesentérico, renal e cerebral.",
      "B": "Incorreta. A PCA não gera hipertensão sistólica fulminante, mas sim pressão de pulso ampla por queda da diastólica.",
      "C": "Incorreta. A fisiopatologia primária das lesões isquêmicas é o baixo débito diastólico sistêmico, não estase retrógrada isolada.",
      "D": "Incorreta. Não decorre de hiperesplenismo."
    }
  },
  {
    "id": "ped-cardio-100-041",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Em um lactente de 9 meses, hígido, no qual se ausculta sopro contínuo infraclavicular esquerdo e o ecocardiograma confirma PCA de 3 mm com dilatação de átrio e ventrículo esquerdos, qual é o método terapêutico definitivo de escolha?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Fechamento percutâneo por cateterismo intervencionista com implante de mola (coil) ou prótese oclusora (plug/Amplatzer)."
      },
      {
        "id": "B",
        "texto": "Ciclo de Indometacina intravenosa por 3 doses consecutivas."
      },
      {
        "id": "C",
        "texto": "Tratamento clínico com furosemida até a puberdade sem intervenção mecânica."
      },
      {
        "id": "D",
        "texto": "Transplante cardíaco pediátrico ortotópico precoce."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Fora do período neonatal imediato, o canal arterial perde a capacidade de resposta farmacológica aos inibidores da COX (pois o tecido ductal já não responde a prostaglandinas). O tratamento definitivo de escolha para lactentes e crianças é o fechamento percutâneo via cateterismo cardíaco com coils ou dispositivos oclusores dedicados (baixo risco e rápida recuperação).",
    "comentariosAlternativas": {
      "A": "Correta. O fechamento percutâneo por cateterismo é o método padrão-ouro e curativo em lactentes maiores.",
      "B": "Incorreta. Anti-inflamatórios são eficazes apenas no período neonatal imediato (especialmente em prematuros).",
      "C": "Incorreta. A PCA com sobrecarga de câmaras esquerdas requer oclusão mecânica para evitar dilatação e arritmias.",
      "D": "Incorreta. O transplante não tem qualquer cabimento em uma anomalia extracardíaca simples e perfeitamente corrigível."
    }
  },
  {
    "id": "ped-cardio-100-042",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o estímulo fisiológico mais potente responsável pelo desencadeamento do fechamento funcional do canal arterial nas primeiras horas de vida de um recém-nascido a termo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Elevação expressiva da pressão parcial de oxigênio arterial (PaO2) com a primeira ventilação pulmonar, associada à queda dos níveis de PGE2 após a remoção da placenta."
      },
      {
        "id": "B",
        "texto": "Aumento abrupto dos níveis circulantes de adenosina e óxido nítrico fetal."
      },
      {
        "id": "C",
        "texto": "Hipotermia fisiológica transitória pós-parto imediato."
      },
      {
        "id": "D",
        "texto": "Acidose metabólica decorrente do clampeamento do cordão umbilical."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Ao nascer, a expansão pulmonar eleva a PaO2 arterial de ~25-30 mmHg no feto para > 70-90 mmHg. O oxigênio atua diretamente sobre canais de potássio nas células musculares lisas ductais, promovendo influxo de cálcio e vasoconstrição. Concomitantemente, a eliminação da placenta e o clearance pulmonar reduzem abruptamente os níveis circulantes de PGE2, levando ao fechamento funcional.",
    "comentariosAlternativas": {
      "A": "Correta. A hiperóxia pós-natal e a queda das prostaglandinas materno-placentárias promovem o fechamento ductal.",
      "B": "Incorreta. Adenosina e óxido nítrico são vasodilatadores que mantêm o canal aberto.",
      "C": "Incorreta. A hipotermia neonatal na verdade retarda o fechamento ductal.",
      "D": "Incorreta. A acidose relaxa a musculatura ductal, impedindo a constrição eficaz."
    }
  },
  {
    "id": "ped-cardio-100-043",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Por que o canal arterial é anatomicamente essencial para a sobrevivência intrauterina do feto humano normal?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Desvia cerca de 90% do débito do ventrículo direito diretamente para a aorta descendente, contornando a vasculatura pulmonar fetal colapsada de alta resistência."
      },
      {
        "id": "B",
        "texto": "Garante o fluxo exclusivo de sangue oxigenado para as artérias coronárias a partir da veia umbilical."
      },
      {
        "id": "C",
        "texto": "Impede que o sangue do ventrículo esquerdo chegue ao cérebro fetal antes do terceiro trimestre."
      },
      {
        "id": "D",
        "texto": "Promove a oxigenação do sangue venoso fetal diretamente na luz da artéria pulmonar."
      }
    ],
    "correta": "A",
    "comentarioGeral": "No feto, os pulmões não realizam trocas gasosas e a resistência vascular pulmonar é muito elevada. O canal arterial conecta a artéria pulmonar principal à aorta descendente, permitindo que a maior parte do sangue ejetado pelo VD contorne os pulmões e siga em direção à placenta para oxigenação.",
    "comentariosAlternativas": {
      "A": "Correta. O canal desvia o débito do VD diretamente para a aorta descendente e placenta na circulação fetal.",
      "B": "Incorreta. O sangue oxigenado da veia umbilical vai preferencialmente ao átrio esquerdo via forame oval e irriga coronárias e cérebro.",
      "C": "Incorreta. O VE irriga cérebro e membros superiores via aorta ascendente.",
      "D": "Incorreta. A oxigenação fetal ocorre exclusivamente na placenta."
    }
  },
  {
    "id": "ped-cardio-100-044",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual achado no pulso arterial periférico é clássico da Persistência do Canal Arterial com repercussão hemodinâmica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pulsos amplos, céleres e hiperdinâmicos (pulsos em martelo d'água ou de Corrigan), com pressão arterial diastólica baixa e diferencial de pulso alargado."
      },
      {
        "id": "B",
        "texto": "Pulsos parvus et tardus (pequena amplitude e ascensão lenta) em quatro membros."
      },
      {
        "id": "C",
        "texto": "Assimetria isolada entre o membro superior direito e o esquerdo."
      },
      {
        "id": "D",
        "texto": "Pulso alternante associado a pulso paradoxal respiratório com colapso inspiratório."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O desvio maciço de sangue da aorta para o leito pulmonar durante a diástole faz a pressão arterial diastólica despencar. Como o volume sistólico do VE é elevado pelo hiperfluxo, a pressão sistólica se mantém ou eleva, resultando em pressão de pulso ampliada (diferencial aumentado) e pulsos amplos e hiperdinâmicos (martelo d'água).",
    "comentariosAlternativas": {
      "A": "Correta. Pulsos amplos em martelo d'água com pressão diastólica baixa são a marca semiológica periférica da PCA calibrosa.",
      "B": "Incorreta. Parvus et tardus é característico de estenose aórtica grave.",
      "C": "Incorreta. Assimetria de pulsos em MMSS aponta para anomalia de artéria subclávia ou arterite de Takayasu.",
      "D": "Incorreta. Pulso alternante ocorre na disfunção miocárdica terminal e pulso paradoxal no tamponamento cardíaco."
    }
  },
  {
    "id": "ped-cardio-100-045",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual síndrome congênita materna infecciosa tem na Persistência do Canal Arterial (PCA) e na Estenose de Ramos da Artéria Pulmonar as suas manifestações cardiovasculares mais clássicas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Síndrome da Rubéola Congênita (Tétrada de Gregg)."
      },
      {
        "id": "B",
        "texto": "Síndrome da Toxoplasmose Congênita (Tétrada de Sabin)."
      },
      {
        "id": "C",
        "texto": "Citomegalovirose congênita primária."
      },
      {
        "id": "D",
        "texto": "Sífilis congênita precoce."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Síndrome da Rubéola Congênita é historicamente marcada pela clássica Tétrade de Gregg: catarata congênita, surdez neurossensorial, microcefalia e cardiopatia congênita (especialmente PCA e estenose periférica de artérias pulmonares).",
    "comentariosAlternativas": {
      "A": "Correta. A Rubéola Congênita é o agente teratogênico infeccioso classicamente associado à PCA.",
      "B": "Incorreta. Toxoplasmose cursa com coriorretinite, hidrocefalia e calcificações cerebrais difusas (Tétrada de Sabin).",
      "C": "Incorreta. CMV cursa com calcificações periventriculares e microcefalia, sem associação direta com PCA.",
      "D": "Incorreta. Sífilis cursa com rinite serossanguinolenta, lesões palmo-plantares e osteocondrite."
    }
  },
  {
    "id": "ped-cardio-100-046",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Na evolução tardia de uma grande PCA não tratada que desenvolveu Síndrome de Eisenmenger, qual é a alteração peculiar e patognomônica da distribuição da cianose no exame físico (cianose diferencial)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Cianose presente exclusivamente nos membros inferiores e pés, enquanto os membros superiores e cabeça mantêm-se corados e com saturação de oxigênio normal."
      },
      {
        "id": "B",
        "texto": "Cianose intensa restrita ao hemicorpo direito com palidez no hemicorpo esquerdo."
      },
      {
        "id": "C",
        "texto": "Cianose exclusiva nos lábios e língua com pés normais e rosados."
      },
      {
        "id": "D",
        "texto": "Cianose alternante que muda de membro a cada batimento cardíaco."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na Síndrome de Eisenmenger decorrente de PCA, o shunt inverte da artéria pulmonar para a aorta descendente (direita-esquerda). Como o canal arterial desemboca na aorta distalmente à emergência dos vasos braquiocefálicos (subclávia esquerda, carótida e tronco braquiocefálico), o sangue desoxigenado irriga apenas a porção inferior do corpo, gerando a clássica cianose diferencial (membros superiores normais e membros inferiores cianóticos com baqueteamento digital nos pododáctilos).",
    "comentariosAlternativas": {
      "A": "Correta. A cianose diferencial (MMII cianóticos com MMSS rosados) é patognomônica da PCA com Eisenmenger.",
      "B": "Incorreta. A distribuição não respeita simetria lateral, mas sim proximal versus distal ao canal.",
      "C": "Incorreta. A cabeça recebe sangue oxigenado pré-ductal e permanece corada.",
      "D": "Incorreta. A cianose é fixa e anatômica, não alternante."
    }
  },
  {
    "id": "ped-cardio-100-047",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é a alteração anatômica que define a Transposição das Grandes Artérias (TGA completa ou D-TGA)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Discordância ventriculoarterial: a aorta emerge do ventrículo direito (com sangue desoxigenado) e o tronco da artéria pulmonar emerge do ventrículo esquerdo (com sangue oxigenado)."
      },
      {
        "id": "B",
        "texto": "Discordância atrioventricular pura com posicionamento invertido das valvas semilunares."
      },
      {
        "id": "C",
        "texto": "Conexão anômala da veia cava superior no átrio esquerdo associada a tronco arterioso único."
      },
      {
        "id": "D",
        "texto": "Atresia da valva aórtica com hipoplasia acentuada das artérias coronárias esquerdas."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na D-TGA clássica, as conexões atrioventriculares são concordantes (AD->VD e AE->VE), mas as conexões ventriculoarteriais são discordantes: a aorta nasce do VD e a artéria pulmonar nasce do VE, criando dois circuitos vasculares independentes e paralelos.",
    "comentariosAlternativas": {
      "A": "Correta. A discordância ventriculoarterial com dois circuitos fechados e paralelos é a definição da D-TGA.",
      "B": "Incorreta. Discordância AV combinada com discordância VA define a L-TGA (transposição corrigida).",
      "C": "Incorreta. Conexão venosa sistêmica anômala é outra entidade embriológica.",
      "D": "Incorreta. Atresia aórtica caracteriza a Síndrome do Coração Esquerdo Hipoplásico."
    }
  },
  {
    "id": "ped-cardio-100-048",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Recém-nascido a termo, masculino, peso 3.500 g, apresenta cianose central importante refratária com 4 horas de vida. O teste de hiperóxia (FiO2 a 100% por 10 minutos) mantém PaO2 de 38 mmHg e SatO2 de 64%. O ecocardiograma confirma TGA com septo interventricular íntegro e forame oval restritivo de 1,5 mm. Qual procedimento intervencionista de urgência está indicado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Atriosseptostomia por cateter-balão (procedimento de Rashkind)."
      },
      {
        "id": "B",
        "texto": "Valvoplastia aórtica percutânea por balão retrógrado."
      },
      {
        "id": "C",
        "texto": "Cerclagem bilateral dos ramos das artérias pulmonares."
      },
      {
        "id": "D",
        "texto": "Fechamento imediato do canal arterial com indometacina."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na TGA com septo intacto, a sobrevivência depende de mistura sanguínea eficaz entre os dois circuitos paralelos. Se o forame oval for restritivo, o sangue oxigenado do AE não consegue alcançar o AD e o VD. A atriosseptostomia com balão de Rashkind rompe a lâmina do septo interatrial na beira do leito (guiada por ecocardiograma), criando uma ampla CIA que permite a mistura vital de sangue até a cirurgia definitiva.",
    "comentariosAlternativas": {
      "A": "Correta. O procedimento de Rashkind cria comunicação interatrial para garantir mistura sanguínea e sobrevida imediata.",
      "B": "Incorreta. A valva aórtica não é primariamente estenótica na TGA.",
      "C": "Incorreta. Cerclagem de ramos pulmonares não resolve a falta de mistura intracardíaca.",
      "D": "Incorreta. Fechar o canal arterial provocaria colapso e óbito imediato do neonato."
    }
  },
  {
    "id": "ped-cardio-100-049",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o tratamento cirúrgico definitivo anatômico de escolha para a Transposição das Grandes Artérias com septo interventricular íntegro e em que período ideal ele deve ser realizado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Operação de Jatene (troca anatômica das artérias aorta e pulmonar com reimplante dos óstios coronarianos), idealmente nas primeiras 2 a 3 semanas de vida."
      },
      {
        "id": "B",
        "texto": "Cirurgia de Senning ou Mustard (inversão do fluxo no nível atrial com retalhos pericárdicos), realizada após os 2 anos de idade."
      },
      {
        "id": "C",
        "texto": "Operação de Glenn bidirecional isolada na primeira semana."
      },
      {
        "id": "D",
        "texto": "Operação de Fontan terminoterminal estagiada no primeiro mês."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A cirurgia de Jatene (arterial switch) é o padrão-ouro anatômico: a aorta é transposta para o VE (neoaorta), o tronco pulmonar para o VD (neopulmonar) e os botões coronarianos são reimplantados na neoaorta. Deve ser feita nas primeiras 2 a 3 semanas de vida, antes que o ventrículo esquerdo (exposto a pressões pulmonares baixas) perca sua massa muscular e não consiga mais suportar a circulação sistêmica.",
    "comentariosAlternativas": {
      "A": "Correta. A cirurgia de Jatene é o tratamento corretivo anatômico ideal nas primeiras 2-3 semanas de vida.",
      "B": "Incorreta. Senning/Mustard são cirurgias fisiológicas antigas com alta incidência de disfunção ventricular direita tardia.",
      "C": "Incorreta. Glenn é paliativo para circulação univentricular.",
      "D": "Incorreta. Fontan é a etapa final de fisiologia univentricular."
    }
  },
  {
    "id": "ped-cardio-100-050",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o aspecto radiológico característico da silhueta cardíaca e do mediastino superior na radiografia de tórax de um neonato com TGA?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aspecto de coração em ovo deitado na horizontal sobre o diafragma, com pedículo vascular mediastinal superior estreito (\"egg-on-a-string\")."
      },
      {
        "id": "B",
        "texto": "Coração em formato de bota holandesa com hipofluxo pulmonar periférico."
      },
      {
        "id": "C",
        "texto": "Cardiomegalia globular em moringa com área cardíaca ocupando 95% do tórax."
      },
      {
        "id": "D",
        "texto": "Aspecto de coração em boneco de neve com abaulamento acentuado do mediastino superior."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na TGA, a aorta situa-se anteriormente e paralela ao tronco pulmonar (em vez de cruzar em espiral), o que estreita a silhueta vascular mediastinal no RX anteroposterior. Associado à hipertrofia e dilatação do coração, gera a imagem clássica do \"ovo deitado apoiado sobre um barbante\" (egg on a string).",
    "comentariosAlternativas": {
      "A": "Correta. Egg-on-a-string (ovo deitado com pedículo estreito) e hiperfluxo pulmonar definem a radiologia da TGA.",
      "B": "Incorreta. Bota holandesa (coeur en sabot) é típica da Tetralogia de Fallot.",
      "C": "Incorreta. Coração em moringa caracteriza a Anomalia de Ebstein.",
      "D": "Incorreta. Boneco de neve é característico da DATVP supracardíaca."
    }
  },
  {
    "id": "ped-cardio-100-051",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o papel obrigatório da infusão contínua de Prostaglandina E1 (Alprostadil) na fase inicial de estabilização de um neonato com diagnóstico suspeito ou confirmado de TGA?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Manter a perviedade do canal arterial, permitindo um shunt bidirecional fundamental para a mistura de sangue oxigenado e desoxigenado entre os circuitos sistêmico e pulmonar."
      },
      {
        "id": "B",
        "texto": "Promover a dilatação coronariana seletiva impedindo a isquemia miocárdica induzida por bradicardia."
      },
      {
        "id": "C",
        "texto": "Fechar rapidamente a comunicação interatrial para evitar congestão venosa no átrio direito."
      },
      {
        "id": "D",
        "texto": "Estimular a hipertrofia rápida da parede livre do ventrículo esquerdo."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Prostaglandina E1 mantém o canal arterial amplamente aberto. Na TGA, o canal arterial funciona como uma das principais portas de mistura entre a aorta (circulação sistêmica) e a artéria pulmonar (circulação pulmonar), evitando anóxia tecidual fatal até a abordagem cirúrgica.",
    "comentariosAlternativas": {
      "A": "Correta. A PGE1 garante o canal arterial aberto para viabilizar a mistura de sangue entre os dois circuitos paralelos.",
      "B": "Incorreta. O objetivo central é manter o canal arterial pérvio, não dilatação coronariana isolada.",
      "C": "Incorreta. A CIA deve ser mantida aberta ou ampliada, nunca fechada na TGA neonatal.",
      "D": "Incorreta. Prostaglandinas não têm ação indutora de hipertrofia miocárdica de VE."
    }
  },
  {
    "id": "ped-cardio-100-052",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Por que o teste de hiperóxia (oferta de FiO2 a 100% por máscara por 10 minutos) é considerado negativo (ou seja, aponta fortemente para cardiopatia congênita cianótica com shunt intracardíaco fixo como na TGA) quando a PaO2 arterial não ultrapassa qual valor de corte?",
    "alternativas": [
      {
        "id": "A",
        "texto": "PaO2 permanece inferior a 150 mmHg (geralmente mantendo-se entre 30 e 60 mmHg)."
      },
      {
        "id": "B",
        "texto": "PaO2 ultrapassa obrigatoriamente 450 mmHg."
      },
      {
        "id": "C",
        "texto": "PaO2 atinge exatamente 600 mmHg em ar ambiente."
      },
      {
        "id": "D",
        "texto": "PaO2 diminui para zero imediatamente."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Em patologias pulmonares puras (SDR, aspiração meconial, taquipneia transitória), a oferta de O2 a 100% eleva a PaO2 para valores > 150-250 mmHg. Em cardiopatias cianóticas com circulação em paralelo (TGA) ou shunt D-E fixo, o sangue venoso desvia diretamente para a aorta sem passar pelos alvéolos oxigenados, mantendo a PaO2 teimosamente baixa (< 100-150 mmHg).",
    "comentariosAlternativas": {
      "A": "Correta. PaO2 < 150 mmHg sob FiO2 a 100% confirma teste de hiperóxia negativo (sugestivo de cardiopatia congênita cianótica).",
      "B": "Incorreta. PaO2 > 450 mmHg descarta shunt intracardíaco fixo significativo.",
      "C": "Incorreta. Em ar ambiente a PaO2 máxima ao nível do mar é ~100 mmHg.",
      "D": "Incorreta. A PaO2 nunca atinge zero fisiologicamente."
    }
  },
  {
    "id": "ped-cardio-100-053",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o perfil epidemiológico e físico clássico do recém-nascido com Transposição das Grandes Artérias simples ao nascimento?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Recém-nascido a termo, com peso adequado para a idade gestacional ou macrossômico (frequentemente filho de mãe com diabetes gestacional), do sexo masculino, que se apresenta cianótico porém inicialmente vigoroso e sem desconforto respiratório importante."
      },
      {
        "id": "B",
        "texto": "Prematuro extremo com peso < 1.000 g com graves malformações craniofaciais e membros ausentes."
      },
      {
        "id": "C",
        "texto": "Neonato hipotérmico, microcefálico com calcificações cerebrais periventriculares extensas."
      },
      {
        "id": "D",
        "texto": "Neonato feminino pós-termo anencefálico com tórax escavado."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O bebê com TGA simples é classicamente um RN a termo ou macrossômico (muitas vezes filho de mãe diabética), do sexo masculino (proporção 2-3:1), com peso excelente e bom escore de Apgar, que se apresenta cianótico \"confortável\" nas primeiras horas de vida (cianose sem taquipneia ou tiragens no início).",
    "comentariosAlternativas": {
      "A": "Correta. RN a termo, sexo masculino, peso normal/elevado, cianótico porém inicialmente sem desconforto evidente.",
      "B": "Incorreta. A TGA raramente se associa a anomalias extracardíacas sindrômicas em prematuros extremos.",
      "C": "Incorreta. Descrição clássica de infecção congênita por citomegalovírus.",
      "D": "Incorreta. Não há correlação com anencefalia."
    }
  },
  {
    "id": "ped-cardio-100-054",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Em um lactente de 2 meses com TGA simples que não foi diagnosticado no período neonatal e apresenta-se agora para avaliação cirúrgica tardia, por que a cirurgia de Jatene pode não ser mais factível em tempo único?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Porque a pressão e a resistência vascular pulmonar caíram após o nascimento, fazendo com que o ventrículo esquerdo (que ejeta para o pulmão na TGA) atrofie e descondicione, tornando-se incapaz de assumir a pressão sistêmica da aorta."
      },
      {
        "id": "B",
        "texto": "Porque as artérias coronárias obliteram-se fisiologicamente após a 4ª semana de vida."
      },
      {
        "id": "C",
        "texto": "Pelo fechamento congênito irreversível da valva tricúspide com fibroelastose."
      },
      {
        "id": "D",
        "texto": "Devido à ossificação precoce da raiz da artéria pulmonar principal."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na TGA simples, o VE está conectado à artéria pulmonar. Conforme a RVP cai nas primeiras semanas, o VE passa a ejetar contra pressões muito baixas (~20-25 mmHg), ocorrendo remodelamento com afilamento da parede livre (descondicionamento de VE). Se o VE for conectado subitamente à circulação sistêmica de alta pressão (Jatene tardio), ele entra em falência aguda.",
    "comentariosAlternativas": {
      "A": "Correta. O descondicionamento do ventrículo esquerdo pela queda da RVP impede que ele assuma o regime pressórico sistêmico sem preparo prévio.",
      "B": "Incorreta. As artérias coronárias permanecem pérvias ao longo de toda a vida.",
      "C": "Incorreta. A valva tricúspide conecta-se ao VD e não sofre atresia secundária.",
      "D": "Incorreta. Não ocorre ossificação da artéria pulmonar."
    }
  },
  {
    "id": "ped-cardio-100-055",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Como é chamado o procedimento cirúrgico estagiado de preparação do ventrículo esquerdo (\"retreinamento do VE\") em lactentes com TGA descondicionado, preparando-o para posterior cirurgia de Jatene?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Bandeamento da artéria pulmonar associado a um shunt sistêmico-pulmonar (Blalock-Taussig)."
      },
      {
        "id": "B",
        "texto": "Cirurgia de Fontan extracardíaca com conduto fenestrado."
      },
      {
        "id": "C",
        "texto": "Operação de Ross com autoenxerto valvar pulmonar."
      },
      {
        "id": "D",
        "texto": "Valvoplastia mitral com anel protético percutâneo."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Para retreinar o VE atrófico na TGA tardia, o cirurgião realiza o bandeamento da artéria pulmonar (constrição mecânica com fita para forçar o VE a trabalhar contra alta pós-carga e hipertrofiar em 1 a 2 semanas), frequentemente associado a um shunt de Blalock-Taussig para garantir oxigenação durante o processo.",
    "comentariosAlternativas": {
      "A": "Correta. O bandeamento da artéria pulmonar eleva a pós-carga de VE, induzindo hipertrofia muscular para posterior Jatene.",
      "B": "Incorreta. Fontan é para circulação univentricular.",
      "C": "Incorreta. Cirurgia de Ross substitui a valva aórtica doente pela pulmonar autóloga.",
      "D": "Incorreta. A valva mitral é anatomicamente normal."
    }
  },
  {
    "id": "ped-cardio-100-056",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Na cirurgia anatômica de Jatene para TGA, qual etapa técnica é a mais delicada e crucial para o sucesso da sobrevida do paciente e prevenção de isquemia miocárdica fatal?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Mobilização cuidadosa e reimplante dos botões das artérias coronárias da aorta nativa para a neoaorta."
      },
      {
        "id": "B",
        "texto": "Fechamento da veia ázigos retropleural com clipe de titânio."
      },
      {
        "id": "C",
        "texto": "Secção transversa da traqueia torácica para descompressão de vias aéreas."
      },
      {
        "id": "D",
        "texto": "Implante de marcapasso epicárdico definitivo de rotina em todos os casos."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O reimplante coronariano é o tempo cirúrgico mais complexo da operação de Jatene. As coronárias emergem do vaso que originalmente era a aorta (conectada ao VD) e precisam ser transferidas em pequenos botões parietais para a raiz da neoaorta sem torção, estenose ou acotovelamento (kinking), sob pena de infarto agudo e colapso miocárdico imediato.",
    "comentariosAlternativas": {
      "A": "Correta. A transferência meticulosa das artérias coronárias para a neoaorta é o passo determinante do prognóstico cirúrgico.",
      "B": "Incorreta. A veia ázigos não faz parte das grandes artérias transpostas.",
      "C": "Incorreta. A traqueia não é seccionada na cirurgia cardiovascular.",
      "D": "Incorreta. Marcapasso definitivo é reservado apenas para casos de bloqueio AV irreversível pós-operatório raro."
    }
  },
  {
    "id": "ped-cardio-100-057",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é a alteração auscultatória e semiológica comumente encontrada no recém-nascido com TGA simples (sem CIV ou estenose pulmonar associada)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ausculta com bulhas rítmicas e normofonéticas ou segunda bulha única hiperfonética, frequentemente sem sopros patológicos significativos nas primeiras horas de vida."
      },
      {
        "id": "B",
        "texto": "Sopro holossistólico 5+/6+ com frêmito em toda a borda esternal esquerda."
      },
      {
        "id": "C",
        "texto": "Sopro contínuo em maquinária audível até o dorso com pulsos em martelo d'água."
      },
      {
        "id": "D",
        "texto": "Sopro diastólico aspirativo 4+/6+ com clique de abertura mitral."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Um aspecto traiçoeiro da TGA simples com septo íntegro é a ausência de sopros cardíacos audíveis nas primeiras horas de vida. O neonato apresenta cianose grave progressiva, mas a ausculta cardíaca pode soar enganosamente normal (ou com B2 única proeminente porque a aorta anteriorizada fecha mais perto da parede torácica), o que atrasa o diagnóstico se o examinador depender de sopros.",
    "comentariosAlternativas": {
      "A": "Correta. A ausência de sopros é comum na TGA com septo íntegro, reforçando a importância da oximetria de pulso e ecocardiograma precoce.",
      "B": "Incorreta. Sopro holossistólico exuberante ocorreria se houvesse CIV ampla associada.",
      "C": "Incorreta. Sopro em maquinária requer grande PCA com gradiente.",
      "D": "Incorreta. Sopro diastólico aspirativo indica regurgitação aórtica, incomum no neonato com TGA nativa."
    }
  },
  {
    "id": "ped-cardio-100-058",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Lactente de 2 anos é trazido ao pronto-atendimento com febre alta diária (39-40 °C) há 6 dias, refratária a antitérmicos comuns. Ao exame: hiperemia conjuntival bulbar bilateral não exsudativa que poupa o limbo, lábios intensamente eritematosos e com fissuras sangrantes, língua em framboesa, exantema polimorfo maculopapular em tronco e linfonodomegalia cervical unilateral de 2,0 cm no trígono anterior. Qual é o diagnóstico e qual é o exame complementar complementar mandatório para estratificação de risco imediata?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Doença de Kawasaki; Ecocardiograma transtorácico com avaliação de artérias coronárias."
      },
      {
        "id": "B",
        "texto": "Escarlatina estreptocócica; Cultura de orofaringe em ágar sangue."
      },
      {
        "id": "C",
        "texto": "Mononucleose infecciosa por vírus Epstein-Barr; Sorologia anti-VCA IgM."
      },
      {
        "id": "D",
        "texto": "Adenovirose aguda sistêmica; PCR viral em secreção nasofaríngea."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O paciente preenche todos os critérios diagnósticos clássicos da Doença de Kawasaki: febre persistente por ≥ 5 dias associada a 4 critérios cardinais (conjuntivite não purulenta com halo límbico poupado, alterações orais típicas, exantema polimorfo e adenomegalia cervical aguda unilateral > 1,5 cm). O ecocardiograma transtorácico é o exame de eleição para avaliar a presença de ectasia ou aneurismas nas artérias coronárias.",
    "comentariosAlternativas": {
      "A": "Correta. Critérios clássicos completos de Doença de Kawasaki com indicação imediata de ecocardiograma.",
      "B": "Incorreta. A escarlatina não cursa com conjuntivite bilateral e responde rapidamente à penicilina.",
      "C": "Incorreta. Mononucleose cursa com esplenomegalia volumosa e linfadenopatia generalizada, não com acometimento coronariano.",
      "D": "Incorreta. Adenovírus causa conjuntivite exsudativa folicular, e não conjuntivite seca que poupa o limbo."
    }
  },
  {
    "id": "ped-cardio-100-059",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é a complicação mais grave e temida da Doença de Kawasaki, responsável pela principal causa de morbimortalidade cardiovascular adquirida na infância em países desenvolvidos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aneurismas e ectasias de artérias coronárias com risco de trombose, infarto agudo do miocárdio e morte súbita."
      },
      {
        "id": "B",
        "texto": "Glomerulonefrite proliferativa difusa com insuficiência renal crônica dialítica."
      },
      {
        "id": "C",
        "texto": "Hipertensão arterial pulmonar primária irreversível por vasculite plexiforme."
      },
      {
        "id": "D",
        "texto": "Cirrose hepática biliar secundária a colangite esclerosante autoimune."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Doença de Kawasaki é uma vasculite necrosante sistêmica de médios vasos com predileção pelas artérias coronárias. Sem o tratamento adequado na fase aguda, cerca de 20 a 25% dos pacientes não tratados desenvolvem aneurismas coronarianos, predispondo à trombose intraluminal, estenose coronária tardia, infarto agudo do miocárdio e ruptura de aneurismas gigantes.",
    "comentariosAlternativas": {
      "A": "Correta. O acometimento coronariano com formação de aneurismas é a complicação mais grave da doença.",
      "B": "Incorreta. Pode ocorrer piúria estéril transitória por uretrite, mas não glomerulonefrite crônica dialítica.",
      "C": "Incorreta. A circulação pulmonar não desenvolve hipertensão arterial plexogênica típica.",
      "D": "Incorreta. Pode haver hidropsia de vesícula biliar transitória, mas não cirrose biliar."
    }
  },
  {
    "id": "ped-cardio-100-060",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o esquema terapêutico padrão-ouro de primeira linha preconizado para o tratamento da Doença de Kawasaki na fase aguda com objetivo de reduzir drasticamente o risco de aneurismas coronarianos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Imunoglobulina Humana Intravenosa (IVIG) 2 g/kg em infusão única contínua associada a Ácido Acetilsalicílico (AAS)."
      },
      {
        "id": "B",
        "texto": "Prednisona oral isolada em dose imunossupressora por 6 meses sem imunoglobulina."
      },
      {
        "id": "C",
        "texto": "Penicilina G Benzatina intramuscular em dose única associada a metotrexato semanal."
      },
      {
        "id": "D",
        "texto": "Ciclofosfamida em pulsoterapia intravenosa mensal associada a varfarina oral."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O tratamento padrão-ouro consiste na infusão de Imunoglobulina Humana Intravenosa (IVIG) na dose de 2 g/kg em infusão única (ao longo de 10 a 12 horas) associada ao Ácido Acetilsalicílico (AAS) em dose anti-inflamatória (30 a 50 mg/kg/dia) até 48 a 72 horas afebril, seguido de dose antiplaquetária (3 a 5 mg/kg/dia). Essa conduta reduz a incidência de aneurismas de 25% para menos de 4 a 5%.",
    "comentariosAlternativas": {
      "A": "Correta. A associação de IVIG 2 g/kg em dose única com AAS é o padrão-ouro consagrado mundialmente.",
      "B": "Incorreta. Corticosteroide isolado não substitui a IVIG e no passado foi associado a maior fragilidade aneurismática quando usado isoladamente.",
      "C": "Incorreta. Penicilina é para infecção bacteriana/febre reumática; Kawasaki é vasculite autoimune.",
      "D": "Incorreta. Ciclofosfamida é reservada para vasculites ANCA-associadas graves refratárias."
    }
  },
  {
    "id": "ped-cardio-100-061",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Em que período ideal de tempo, contado a partir do primeiro dia do surgimento da febre, deve ser iniciada a Imunoglobulina Humana Intravenosa para alcançar a máxima eficácia na prevenção de aneurismas de coronária na Doença de Kawasaki?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Até o 10º dia do início dos sintomas (idealmente entre o 5º e o 10º dia)."
      },
      {
        "id": "B",
        "texto": "Exclusivamente nas primeiras 24 horas de febre."
      },
      {
        "id": "C",
        "texto": "Apenas após o 21º dia, quando surgem as alterações de descamação periungueal."
      },
      {
        "id": "D",
        "texto": "Entre o 30º e o 45º dia, durante a fase de convalescença da doença."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A janela de ouro para administração da IVIG situa-se nos primeiros 10 dias da doença (idealmente entre o 5º e o 10º dia), período de vasculite ativa em que a neutralização da cascata de citocinas endoteliais é mais eficaz. Após o 10º dia, a IVIG ainda está indicada se houver persistência de febre sem outra causa explicável ou evidência de aneurismas coronários com provas inflamatórias elevadas.",
    "comentariosAlternativas": {
      "A": "Correta. Administrar a IVIG até o 10º dia de febre previne de maneira máxima o dano vascular coronariano.",
      "B": "Incorreta. Antes do 5º dia raramente os critérios clínicos diagnósticos estão consolidados.",
      "C": "Incorreta. Após a 3ª semana a fase aguda inflamatória cedeu e os danos parietais já se estabeleceram.",
      "D": "Incorreta. Na fase de convalescença não há mais indicação de infusão de IVIG rotineira."
    }
  },
  {
    "id": "ped-cardio-100-062",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Menino de 11 meses de vida com diagnóstico de Doença de Kawasaki recebeu infusão de IVIG (2 g/kg) e AAS no 7º dia de doença. Decorridas 40 horas do término da infusão da IVIG, o paciente volta a apresentar febre de 38,8 °C com irritabilidade e PCR persistentemente elevado. Qual é a conduta preconizada para este quadro de Doença de Kawasaki Resistente (refratária)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Administrar uma segunda dose de Imunoglobulina Intravenosa (2 g/kg) ou pulsoterapia com metilprednisolona intravenosa."
      },
      {
        "id": "B",
        "texto": "Suspender todo o tratamento medicamentoso e manter observação expectante domiciliar."
      },
      {
        "id": "C",
        "texto": "Iniciar antibioticoterapia tripla de amplo espectro com vancomicina, meropenem e amicacina."
      },
      {
        "id": "D",
        "texto": "Realizar esternotomia de urgência para revascularização miocárdica cirúrgica com artéria torácica interna."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Define-se Doença de Kawasaki resistente (ou refratária) como a persistência ou recorrência da febre pelo menos 36 horas após o término da infusão da dose inicial de IVIG (ocorre em 10-20% dos pacientes). A conduta recomendada pelas diretrizes internacionais (AHA e SBP) é a administração de uma segunda infusão de IVIG (2 g/kg) ou pulsoterapia com corticosteroides (metilprednisolona 30 mg/kg/dia por 3 dias), podendo-se considerar antagonistas de TNF-alfa (infliximabe).",
    "comentariosAlternativas": {
      "A": "Correta. A segunda dose de IVIG (2 g/kg) ou pulsoterapia com corticoide é a conduta para casos refratários.",
      "B": "Incorreta. A conduta expectante eleva muito o risco de aneurismas gigantes de coronária.",
      "C": "Incorreta. Não se trata de infecção bacteriana secundária, mas sim de vasculite persistente mediada por citocinas.",
      "D": "Incorreta. Cirurgia de revascularização é restrita a infarto miocárdico estabelecido crônico por estenose obstrutiva."
    }
  },
  {
    "id": "ped-cardio-100-063",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Lactente de 5 meses apresenta febre persistente há 6 dias associada apenas a irritabilidade e eritema em área de fralda. Diante da suspeita de Doença de Kawasaki Incompleta (atípica), muito comum em menores de 6 meses de vida, quais alterações laboratoriais dão suporte ao diagnóstico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "PCR ≥ 3,0 mg/dL e/ou VHS ≥ 40 mm/h, associados a anemia para a idade, plaquetose > 450.000/mm³ após o 7º dia, hipoalbuminemia, elevação de ALT e piúria estéril."
      },
      {
        "id": "B",
        "texto": "Plaquetopenia grave < 20.000/mm³ associada a tempo de protrombina alargado e fibrinogênio indetectável."
      },
      {
        "id": "C",
        "texto": "Leucopenia intensa com linfocitose absoluta e redução drástica da ferritina sérica."
      },
      {
        "id": "D",
        "texto": "Hipercalcemia grave associada a hipofosfatemia e supressão total do paratormônio."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Lactentes menores de 6 meses têm alto risco de Kawasaki Incompleto (apresentam febre e menos de 4 critérios cardinais, com altíssimo risco de aneurismas coronários por atraso diagnóstico). Segundo o algoritmo da AHA, a presença de febre ≥ 5 dias com PCR ≥ 3 mg/dL ou VHS ≥ 40 mm/h associada a ≥ 3 achados laboratoriais adicionais (anemia, plaquetas > 450.000 após o 7º dia, albumina ≤ 3,0 g/dL, transaminases elevadas, leucócitos ≥ 15.000/mm³ ou piúria estéril ≥ 10 leucócitos/campo) autoriza o tratamento imediato com IVIG e AAS.",
    "comentariosAlternativas": {
      "A": "Correta. Conjunto de alterações laboratoriais preconizado pelo algoritmo de Kawasaki incompleto da AHA.",
      "B": "Incorreta. Plaquetose (aumento de plaquetas) é a regra na fase subaguda, não CIVD com plaquetopenia.",
      "C": "Incorreta. Ocorre leucocitose com desvio à esquerda e ferritina elevada por processo inflamatório sistêmico.",
      "D": "Incorreta. Distúrbios de cálcio não integram os critérios laboratoriais do algoritmo."
    }
  },
  {
    "id": "ped-cardio-100-064",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é a manifestação cutânea característica da fase subaguda da Doença de Kawasaki, que tipicamente surge entre a 2ª e a 3ª semana de doença, coincidindo com a resolução da febre e pico de plaquetose?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Descamação periungueal laminar nos dedos das mãos e dos pés, com progressão para palmas e plantas."
      },
      {
        "id": "B",
        "texto": "Erupção máculo-papular purpúrica palpável exclusiva em nádegas e membros inferiores."
      },
      {
        "id": "C",
        "texto": "Vesículas e bolhas flácidas com sinal de Nikolsky positivo por clivagem intraepidérmica."
      },
      {
        "id": "D",
        "texto": "Alopecia areata cicatricial irreversível no couro cabeludo occipital."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na fase subaguda da Doença de Kawasaki (10 a 25 dias do início), a febre cessa e surge a clássica descamação periungueal laminar em escamas ou em \"dedo de luva\", que se inicia na borda das unhas dos dedos das mãos e pés e pode estender-se para as palmas e plantas.",
    "comentariosAlternativas": {
      "A": "Correta. A descamação periungueal laminar é o marco clínico característico da fase subaguda.",
      "B": "Incorreta. Púrpura palpável em nádegas e MMII caracteriza a Vasculite por IgA (Púrpura de Henoch-Schönlein).",
      "C": "Incorreta. Bolhas com Nikolsky positivo sugerem Síndrome da Pele Escaldada Estafilocócica ou NET.",
      "D": "Incorreta. Alopecia cicatricial não faz parte da evolução da Doença de Kawasaki."
    }
  },
  {
    "id": "ped-cardio-100-065",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Um lactente de 1 ano recebeu Imunoglobulina Humana Intravenosa (2 g/kg) para tratamento de Doença de Kawasaki. A mãe solicita orientações sobre o calendário vacinal do Programa Nacional de Imunizações (PNI). Qual é a recomendação correta quanto à administração das vacinas de vírus vivos atenuados (ex: Tríplice Viral e Varicela)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Adiar a administração de vacinas de vírus vivos atenuados por um período de 11 meses após a infusão da IVIG em alta dose."
      },
      {
        "id": "B",
        "texto": "Aplicar as vacinas de vírus vivos normalmente no dia seguinte à alta hospitalar."
      },
      {
        "id": "C",
        "texto": "Contraindicar permanentemente qualquer tipo de vacina de vírus vivos atenuados por toda a vida."
      },
      {
        "id": "D",
        "texto": "Aguardar apenas 14 dias para aplicação de qualquer vacina do calendário oficial."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Imunoglobulina Humana Intravenosa em altas doses contém grande quantidade de anticorpos circulantes adquiridos de milhares de doadores. Esses anticorpos específicos neutralizam os vírus vacinais atenuados (como os do sarampo, caxumba, rubéola e varicela), impedindo a replicação viral necessária para gerar imunidade ativa protetora. Por isso, as diretrizes orientam postergar essas vacinas por 11 meses.",
    "comentariosAlternativas": {
      "A": "Correta. O intervalo de 11 meses é obrigatório após a dose de 2 g/kg de IVIG para garantir eficácia sorológica vacinal.",
      "B": "Incorreta. Os anticorpos passivos neutralizariam a vacina, resultando em ausência de proteção imunológica.",
      "C": "Incorreta. A contraindicação é temporária (11 meses), não permanente por toda a vida.",
      "D": "Incorreta. 14 dias é intervalo insuficiente; a meia-vida dos anticorpos transfundidos dura muitos meses."
    }
  },
  {
    "id": "ped-cardio-100-066",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Ao ecocardiograma de controle realizado na 6ª semana de evolução de um pré-escolar com Doença de Kawasaki, identifica-se um aneurisma coronariano classificado como \"aneurisma gigante\" na artéria coronária descendente anterior. Segundo os critérios da AHA, qual diâmetro luminal interno ou Z-score define um aneurisma gigante?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Diâmetro interno luminal ≥ 8 mm ou escore Z (Z-score) ≥ 10."
      },
      {
        "id": "B",
        "texto": "Diâmetro interno entre 3 e 4 mm com Z-score entre 2 e 2,5."
      },
      {
        "id": "C",
        "texto": "Diâmetro de 1,5 mm com Z-score menor que 1,0."
      },
      {
        "id": "D",
        "texto": "Apenas aneurismas que acometem a bifurcação da carótida interna com espessura > 12 mm."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Pela classificação da American Heart Association (AHA), as lesões coronarianas na Doença de Kawasaki são estratificadas pelo Z-score (ajustado para a superfície corpórea): sem envolvimento (Z < 2), dilatação/ectasia isolada (Z 2 a < 2,5), aneurisma pequeno (Z 2,5 a < 5), aneurisma médio (Z 5 a < 10 e diâmetro < 8 mm) e aneurisma gigante (diâmetro luminal interno ≥ 8 mm ou Z-score ≥ 10).",
    "comentariosAlternativas": {
      "A": "Correta. O aneurisma gigante é definido por diâmetro ≥ 8 mm ou Z-score ≥ 10.",
      "B": "Incorreta. Representa dilatação leve/ectasia.",
      "C": "Incorreta. Valores dentro da normalidade para a superfície corporal da infância.",
      "D": "Incorreta. A classificação coronariana da Kawasaki não utiliza medições de artéria carótida."
    }
  },
  {
    "id": "ped-cardio-100-067",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o esquema antitrombótico de manutenção preconizado para uma criança com Doença de Kawasaki que evoluiu com aneurisma coronariano gigante persistente (≥ 8 mm ou Z ≥ 10) para prevenção secundária de oclusão trombótica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Terapia combinada de antiagregação plaquetária (AAS em dose baixa) associada à anticoagulação oral plena com Varfarina (alvo de INR 2,0-3,0) ou Heparina de Baixo Peso Molecular."
      },
      {
        "id": "B",
        "texto": "Monoterapia exclusiva com paracetamol em gotas sob demanda."
      },
      {
        "id": "C",
        "texto": "Aspirina em dose anti-inflamatória plena contínua (100 mg/kg/dia) sem anticoagulantes pelo risco de sangramento."
      },
      {
        "id": "D",
        "texto": "Suspensão de qualquer medicamento após 8 semanas do início dos sintomas."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Em aneurismas coronários gigantes (≥ 8 mm), a lentificação do fluxo sanguíneo intraluminal, a lesão endotelial e o turbilhonamento criam altíssimo risco de trombose oclusiva aguda e infarto maciço. As diretrizes recomendam a associação de anticoagulação sistêmica (varfarina com RNI alvo entre 2,0 e 3,0 ou heparina de baixo peso molecular com anti-Xa 0,5 a 1,0 U/mL) com um antiagregante plaquetário em dose baixa (AAS 3 a 5 mg/kg/dia).",
    "comentariosAlternativas": {
      "A": "Correta. Anticoagulação plena associada a antiagregante é o esquema padrão para aneurismas gigantes.",
      "B": "Incorreta. Paracetamol não possui atividade antiagregante nem anticoagulante.",
      "C": "Incorreta. AAS em alta dose por tempo prolongado causa toxicidade gástrica/renal e não oferece anticoagulação eficaz.",
      "D": "Incorreta. Aneurismas gigantes requerem terapia antitrombótica crônica mantida indefinidamente."
    }
  },
  {
    "id": "ped-cardio-100-068",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual das seguintes manifestações clínicas permite diferenciar confiavelmente a Doença de Kawasaki da Escarlatina clássica no atendimento pediátrico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A presença de hiperemia conjuntival bilateral não purulenta que poupa a região periquerática (halo límbico), característica da Kawasaki e ausente na escarlatina."
      },
      {
        "id": "B",
        "texto": "A presença de febre alta, que é exclusiva da Doença de Kawasaki."
      },
      {
        "id": "C",
        "texto": "A presença de exantema no tronco, que ocorre apenas na escarlatina estreptocócica."
      },
      {
        "id": "D",
        "texto": "O achado de língua em framboesa, exclusivo de infecções fúngicas orais."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A conjuntivite bulbar bilateral não exsudativa com preservação do limbo esclero-corneano é um sinal cardeal da Doença de Kawasaki (presente em > 90% dos casos) e não faz parte do quadro clínico da escarlatina. A escarlatina apresenta faringite exsudativa, palidez perioral (sinal de Filatow) e reforço nas dobras (linhas de Pastia), além de responder em 24-48 horas à antibioticoterapia com penicilina.",
    "comentariosAlternativas": {
      "A": "Correta. A conjuntivite bilateral seca poupando o limbo é altamente distintiva da Doença de Kawasaki.",
      "B": "Incorreta. Ambas as condições cursam com febre alta.",
      "C": "Incorreta. Ambas apresentam exantema eritematoso difuso.",
      "D": "Incorreta. A língua em framboesa pode estar presente tanto na Doença de Kawasaki quanto na escarlatina."
    }
  },
  {
    "id": "ped-cardio-100-069",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o agente bacteriano causador da infecção primária que desencadeia a Febre Reumática aguda através de mimetismo molecular e qual sítio anatômico de infecção inicial tem capacidade exclusiva de deflagrá-la?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Streptococcus pyogenes (Streptococcus beta-hemolítico do grupo A de Lancefield); exclusivamente após faringoamigdalite aguda."
      },
      {
        "id": "B",
        "texto": "Streptococcus agalactiae (grupo B); exclusivamente após infecção urinária neonatal."
      },
      {
        "id": "C",
        "texto": "Staphylococcus aureus; após piodermite cutânea extensa ou impetigo bolhoso."
      },
      {
        "id": "D",
        "texto": "Streptococcus pneumoniae; após pneumonia lobar consolidativa com derrame pleural."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Febre Reumática aguda é uma sequela tardia autoimune decorrente de mimetismo molecular (anticorpos contra a proteína M da parede celular estreptocócica sofrem reação cruzada com antígenos miocárdicos, valvares, sinoviais e dos núcleos da base). Ela ocorre EXCLUSIVAMENTE após infecção estreptocócica de vias aéreas superiores (faringoamigdalite purulenta por Streptococcus pyogenes). Infecções cutâneas estreptocócicas (impetigo/piodermite) podem deflagrar Glomerulonefrite Difusa Aguda (GNPE), mas NUNCA Febre Reumática.",
    "comentariosAlternativas": {
      "A": "Correta. O S. pyogenes causando faringoamigdalite é o único agente e sítio que desencadeia a febre reumática.",
      "B": "Incorreta. O grupo B causa sepse e meningite neonatal, não febre reumática.",
      "C": "Incorreta. Estafilococos não causam febre reumática e infecções de pele não a deflagram.",
      "D": "Incorreta. O pneumococo causa pneumonia e otite, sem relação causal com febre reumática."
    }
  },
  {
    "id": "ped-cardio-100-070",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Segundo a revisão de 2015 dos Critérios de Jones adotada pela American Heart Association e Sociedade Brasileira de Pediatria, quais são os critérios maiores estabelecidos para populações de risco moderado a alto (como o Brasil)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Cardite (clínica ou subclínica pelo ecocardiograma), Artrite (monoartrite, poliartrite ou poliartralgia), Coreia de Sydenham, Eritema Marginado e Nódulos Subcutâneos."
      },
      {
        "id": "B",
        "texto": "Febre alta persistente, Plaquetose > 1.000.000/mm³, Conjuntivite purulenta e Esplenomegalia."
      },
      {
        "id": "C",
        "texto": "Insuficiência renal oligoanúrica, Hipocalcemia, Edema bipalpebral e Hematuria dismórfica."
      },
      {
        "id": "D",
        "texto": "Poliartrite simétrica deformante crônica de pequenas articulações com fator reumatoide positivo."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A revisão dos critérios de Jones (2015) estratificou as populações pelo risco endêmico. Em populações de moderado a alto risco (como no Brasil), o critério articular maior foi ampliado: aceita-se monoartrite, poliartrite ou mesmo poliartralgia como critério maior! Os cinco critérios maiores clássicos permanecem: Cardite (incluindo cardite subclínica ao eco), Artrite, Coreia de Sydenham, Eritema Marginado e Nódulos Subcutâneos.",
    "comentariosAlternativas": {
      "A": "Correta. Enumera os critérios maiores adaptados para populações de alto risco epidemiológico.",
      "B": "Incorreta. Critérios que lembram vasculites/Kawasaki ou sepse, não Jones.",
      "C": "Incorreta. Quadro clássico de síndrome nefrítica pós-estreptocócica (GNPE).",
      "D": "Incorreta. Caracteriza a Artrite Reumatoide Juvenil / Idiopática, e não a febre reumática que tem artrite migratória não deformante."
    }
  },
  {
    "id": "ped-cardio-100-071",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Em qual das seguintes manifestações clínicas da Febre Reumática NÃO é obrigatória a comprovação laboratorial de infecção estreptocócica prévia (cultura positiva, teste antigênico ou elevação de ASLO) para confirmar o diagnóstico da doença?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Coreia de Sydenham isolada ou Cardite reumática insidiosa de início arrastado."
      },
      {
        "id": "B",
        "texto": "Poliartrite migratória típica com febre alta."
      },
      {
        "id": "C",
        "texto": "Eritema marginado com intervalo PR alargado no ECG."
      },
      {
        "id": "D",
        "texto": "Nódulos subcutâneos associados a PCR e VHS elevados."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Como a Coreia de Sydenham e a Cardite insidiosa de evolução arrastada surgem tardiamente (frequentemente 2 a 6 meses após a faringite primária), os títulos de anticorpos estreptocócicos (como a ASLO) e as provas de atividade inflamatória podem já ter se normalizado completamente. Por essa razão, os Critérios de Jones estabelecem que a Coreia de Sydenham (após exclusão de outras causas como lúpus) e a Cardite insidiosa autorizam o diagnóstico de febre reumática SEM a necessidade de documentação de infecção estreptocócica prévia.",
    "comentariosAlternativas": {
      "A": "Correta. A Coreia de Sydenham e a Cardite insidiosa dispensam a comprovação laboratorial de ASLO elevada.",
      "B": "Incorreta. Quadros com artrite ocorrem precocemente (2-3 semanas) e exigem comprovação de ASLO/cultura.",
      "C": "Incorreta. Eritema marginado requer evidência laboratorial de estreptococo.",
      "D": "Incorreta. Nódulos subcutâneos ocorrem em surtos agudos associados a cardite, necessitando de confirmação estreptocócica."
    }
  },
  {
    "id": "ped-cardio-100-072",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é a valvopatia aguda mais frequentemente identificada na cardite reumática e qual achado auscultatório clássico pode acompanhar o sopro sistólico apical quando há regurgitação volumosa na fase ativa?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Insuficiência (regurgitação) mitral; acompanhada pelo sopro mesodiastólico apical de Carey Coombs."
      },
      {
        "id": "B",
        "texto": "Estenose mitral pura com abertura em estalido e ruflar diastólico persistente."
      },
      {
        "id": "C",
        "texto": "Estenose aórtica calcificada congênita com frêmito em fúrcula esternal."
      },
      {
        "id": "D",
        "texto": "Insuficiência pulmonar isolada associada ao sopro contínuo de Gibson."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na cardite reumática aguda (fase inflamatória ativa), a lesão valvar mais comum é a Insuficiência Mitral (sopro holossistólico regurgitativo de alta frequência no ápice que irradia para a axila). Em casos de refluxo mitral volumoso, o grande volume de sangue que regurgita para o AE retorna através da valva mitral na diástole seguinte gerando um hiperfluxo relativo, audível como um sopro mesodiastólico suave no ápice, denominado sopro de Carey Coombs.",
    "comentariosAlternativas": {
      "A": "Correta. A insuficiência mitral e o sopro de Carey Coombs são as marcas semiológicas da cardite aguda.",
      "B": "Incorreta. A estenose mitral é uma lesão cicatricial crônica que leva anos a décadas para se desenvolver.",
      "C": "Incorreta. Estenose aórtica calcificada é doença degenerativa ou congênita bicúspide.",
      "D": "Incorreta. Insuficiência pulmonar não é a lesão primária e sopro de Gibson é da PCA."
    }
  },
  {
    "id": "ped-cardio-100-073",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Menina de 10 anos é levada ao neurologista por alterações comportamentais, choro imotivado, fraqueza muscular, piora do rendimento escolar e movimentos rápidos, involuntários, involuntários e incoordenados em mãos e face, que cessam durante o sono. Ao exame: hipotonia generalizada, preensão manual intermitente (sinal da ordenha) e reflexos pendulares. Qual é a hipótese diagnóstica e qual é a conduta farmacológica sintomática?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Coreia de Sydenham (manifestação neurológica da Febre Reumática); Haloperidol ou Ácido Valproico associados a repouso e profilaxia com Penicilina Benzatina."
      },
      {
        "id": "B",
        "texto": "Síndrome de Tourette; Estimulantes adrenérgicos do SNC (metilfenidato)."
      },
      {
        "id": "C",
        "texto": "Doença de Huntington infantil; Terapia gênica com oligonucleotídeos antisense."
      },
      {
        "id": "D",
        "texto": "Epilepsia mioclônica juvenil; Lamotrigina isolada sem antibióticos."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Coreia de Sydenham (\"dança de São Vito\") é a manifestação neurológica exclusiva da Febre Reumática, decorrente de vasculite autoimune nos núcleos da base (núcleo caudado e putâmen). Caracteriza-se por movimentos coreiformes involuntários que desaparecem no sono, fraqueza muscular e labilidade emocional. Tem curso autolimitado (2 a 6 meses) e cura SEM sequelas neurológicas. O tratamento sintomático das crises incapacitantes é feito com bloqueadores dopaminérgicos (haloperidol) ou anticonvulsivantes (ácido valproico, carbamazepina), sendo imperativo iniciar profilaxia com Penicilina Benzatina.",
    "comentariosAlternativas": {
      "A": "Correta. Reconhece os sinais semiológicos da Coreia de Sydenham, o tratamento sintomático e a profilaxia secundária.",
      "B": "Incorreta. Tourette cursa com tiques motores e vocais estereotipados crônicos, e estimulantes pioram os tiques.",
      "C": "Incorreta. Huntington tem padrão autossômico dominante progressivo e demência.",
      "D": "Incorreta. A coreia não tem correlação com crises eletroencefalográficas de epilepsia mioclônica."
    }
  },
  {
    "id": "ped-cardio-100-074",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o tratamento anti-inflamatório de primeira escolha para a artrite pura (sem cardite moderada a grave associada) na fase aguda da Febre Reumática?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ácido Acetilsalicílico (AAS) em dose anti-inflamatória alta (80 a 100 mg/kg/dia dividida em 4 doses)."
      },
      {
        "id": "B",
        "texto": "Prednisona em altas doses (2 mg/kg/dia) associada a metilprednisolona venosa."
      },
      {
        "id": "C",
        "texto": "Infliximabe intravenoso associado a metotrexato subcutâneo semanal."
      },
      {
        "id": "D",
        "texto": "Paracetamol oral em baixas doses como monoterapia analgésica."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A artrite da febre reumática tem uma resposta extremamente rápida, dramática e quase patognomônica ao Ácido Acetilsalicílico (AAS) em dose de 80 a 100 mg/kg/dia (máx 4-6 g/dia): a dor, febre e sinais inflamatórios articulares costumam regredir por completo em 24 a 48 horas. Se o paciente persistir com queixas articulares após 72 horas de AAS em dose plena, o diagnóstico de febre reumática deve ser fortemente questionado. Corticosteroides são reservados para os casos com cardite moderada a grave.",
    "comentariosAlternativas": {
      "A": "Correta. O AAS em dose de 80-100 mg/kg/dia é o tratamento de eleição na artrite isolada.",
      "B": "Incorreta. Corticosteroides são reservados para cardite com insuficiência cardíaca ou cardiomegalia.",
      "C": "Incorreta. Biológicos anti-TNF são para artrite idiopática juvenil, não para o surto agudo de febre reumática.",
      "D": "Incorreta. Paracetamol tem fraca ação anti-inflamatória periférica."
    }
  },
  {
    "id": "ped-cardio-100-075",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Escolar de 8 anos apresenta cardite reumática com sopro holossistólico mitral moderado, cardiomegalia leve no RX de tórax e sinais incipientes de insuficiência cardíaca com dispneia aos esforços. Qual fármaco anti-inflamatório é o mais indicado para o controle da fase ativa da cardite?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Prednisona por via oral na dose de 1 a 2 mg/kg/dia por 2 a 4 semanas, seguida de desmame gradual."
      },
      {
        "id": "B",
        "texto": "AAS em dose baixa (3 mg/kg/dia) como antiagregante isolado."
      },
      {
        "id": "C",
        "texto": "Ibuprofeno em dose antipirética por 3 dias."
      },
      {
        "id": "D",
        "texto": "Colquicina associada a hidroxicloroquina oral."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na cardite reumática moderada a grave (evidenciada por cardiomegalia, disfunção ventricular ou insuficiência cardíaca clínica), os corticosteroides são a droga de escolha (Prednisona 1 a 2 mg/kg/dia por 2 a 4 semanas, com posterior desmame gradual). Eles diminuem o edema inflamatório miocárdico e o risco de insuficiência cardíaca refratária.",
    "comentariosAlternativas": {
      "A": "Correta. A corticoterapia com prednisona oral é o tratamento padrão na cardite com repercussão.",
      "B": "Incorreta. Dose antiplaquetária não possui qualquer efeito anti-inflamatório sobre a cardite ativa.",
      "C": "Incorreta. Ibuprofeno por 3 dias é subdose e tempo insuficiente para controlar a pancardite.",
      "D": "Incorreta. Colquicina e cloroquina não fazem parte do arsenal terapêutico da cardite reumática aguda."
    }
  },
  {
    "id": "ped-cardio-100-076",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o antibiótico de escolha e o intervalo preconizado para a profilaxia secundária da Febre Reumática na prevenção de novos surtos bacterianos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Penicilina G Benzatina por via intramuscular profunda aplicada a cada 21 dias."
      },
      {
        "id": "B",
        "texto": "Amoxicilina oral administrada 1 vez ao dia continuamente por 3 meses."
      },
      {
        "id": "C",
        "texto": "Ciprofloxacino oral a cada 12 horas por 1 ano."
      },
      {
        "id": "D",
        "texto": "Azitromicina intramuscular aplicada mensalmente."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A profilaxia secundária contínua é o pilar mais importante do tratamento da Febre Reumática para prevenir novas infecções pelo Streptococcus pyogenes e novos surtos com agravamento do dano valvar. A droga padrão-ouro é a Penicilina G Benzatina na dose de 600.000 UI (< 27 kg) ou 1.200.000 UI (≥ 27 kg) aplicada a cada 21 dias (intervalo de 21 dias é o recomendado no Brasil devido à perda de níveis séricos protetores na 4ª semana em áreas de alto risco).",
    "comentariosAlternativas": {
      "A": "Correta. Penicilina Benzatina intramuscular a cada 21 dias é o esquema de profilaxia secundária no Brasil.",
      "B": "Incorreta. A amoxicilina não é utilizada para profilaxia secundária contínua de longa duração.",
      "C": "Incorreta. Quinolonas não são indicadas para profilaxia estreptocócica.",
      "D": "Incorreta. Não existe formulação intramuscular de azitromicina para profilaxia mensal."
    }
  },
  {
    "id": "ped-cardio-100-077",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Jovem de 19 anos teve diagnóstico de Febre Reumática aos 12 anos cursando com artrite e coreia de Sydenham, SEM qualquer evidência de cardite clínica ou ecocardiográfica em todo o seguimento. Por quanto tempo a profilaxia secundária com Penicilina Benzatina deve ser mantida?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Até completar 21 anos de idade ou por 5 anos após o último surto (o que for mais longo)."
      },
      {
        "id": "B",
        "texto": "Por apenas 6 meses após o término dos movimentos coreiformes."
      },
      {
        "id": "C",
        "texto": "Indefinidamente por toda a vida."
      },
      {
        "id": "D",
        "texto": "Até completar 40 anos de idade obrigatoriamente."
      }
    ],
    "correta": "A",
    "comentarioGeral": "As diretrizes do Ministério da Saúde e SBP/AHA estabelecem os períodos de duração da profilaxia secundária com Penicilina Benzatina: 1) Febre reumática SEM cardite: até os 21 anos de idade ou por 5 anos após o último surto (o que durar mais tempo); 2) Febre reumática COM cardite prévia curada sem sequela valvar residual: até os 25 anos de idade ou por 10 anos após o último surto; 3) Febre reumática com sequela valvar crônica persistente ou prótese valvar: até os 40 anos de idade ou por toda a vida.",
    "comentariosAlternativas": {
      "A": "Correta. Paciente sem cardite: profilaxia até os 21 anos ou 5 anos do último surto.",
      "B": "Incorreta. 6 meses é tempo insuficiente; a taxa de recorrência após surto recente é altíssima.",
      "C": "Incorreta. Profilaxia vitalícia é reservada para sequela valvar grave ou exposição ocupacional extrema.",
      "D": "Incorreta. 40 anos é a meta para quem tem lesão valvar estrutural crônica."
    }
  },
  {
    "id": "ped-cardio-100-078",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Paciente de 24 anos com histórico de múltiplos surtos de Febre Reumática na infância apresenta sequela valvar crônica com insuficiência mitral moderada a grave e estenose mitral leve no ecocardiograma. Segundo as diretrizes vigentes, qual é a duração recomendada da profilaxia secundária com Penicilina Benzatina?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Até os 40 anos de idade ou por toda a vida (especialmente se houver alta exposição ao estreptococo)."
      },
      {
        "id": "B",
        "texto": "Pode ser suspensa imediatamente pois o paciente já completou 21 anos."
      },
      {
        "id": "C",
        "texto": "Apenas até os 25 anos de idade."
      },
      {
        "id": "D",
        "texto": "Por mais 1 ano a contar do último exame ecocardiográfico."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Em pacientes que desenvolveram lesão valvar residual permanente (cardiopatia reumática crônica) ou que foram submetidos a cirurgia de troca valvar / plastia, a profilaxia secundária deve ser estendida até os 40 anos de idade ou mantida por toda a vida, particularmente em indivíduos com risco contínuo de contato com crianças em idade escolar ou profissionais de saúde.",
    "comentariosAlternativas": {
      "A": "Correta. Em presença de sequela valvar crônica, o tempo de profilaxia se estende até os 40 anos ou por toda a vida.",
      "B": "Incorreta. Suspender aos 21 anos em paciente com sequela valvar causará novo surto com destruição valvar fatal.",
      "C": "Incorreta. Até 25 anos é a regra para cardite curada sem sequela residual.",
      "D": "Incorreta. O tempo mínimo é muito mais longo."
    }
  },
  {
    "id": "ped-cardio-100-079",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual das seguintes manifestações dermatológicas é considerada critério maior de Jones para o diagnóstico de Febre Reumática aguda, caracterizando-se por lesões maculares eritematosas, com bordas serpiginosas salientes e centro claro, não pruriginosas, de localização preferencial no tronco e membros proximais?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Eritema marginado de Leiner."
      },
      {
        "id": "B",
        "texto": "Eritema multiforme maior com lesões em alvo centrípetas."
      },
      {
        "id": "C",
        "texto": "Eritema nodoso em regiões pré-tibiais anteriores dolorosas."
      },
      {
        "id": "D",
        "texto": "Lúpus discoide com atrofia cicatricial e rolhões foliculares."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Eritema Marginado de Leiner é uma lesão cutânea típica da febre reumática (critério maior). É uma erupção macular eritematosa evanescente, não pruriginosa, que se expande centrifugamente deixando bordas avermelhadas serpiginosas com clareamento central. Localiza-se predominantemente no tronco e raiz de membros (poupa a face) e tem forte associação com a presença de cardite.",
    "comentariosAlternativas": {
      "A": "Correta. O eritema marginado é o critério maior dermatológico clássico da Febre Reumática.",
      "B": "Incorreta. Eritema multiforme cursa com lesões em alvo típicas e acometimento mucoso.",
      "C": "Incorreta. O eritema nodoso apresenta nódulos dolorosos em membros inferiores (comum em sarcoidose, tuberculose, DII).",
      "D": "Incorreta. Lúpus discoide é manifestação cutânea do LED."
    }
  },
  {
    "id": "ped-cardio-100-080",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Para um paciente com diagnóstico confirmado de Febre Reumática aguda com histórico comprovado e inequívoco de reação anafilática prévia à Penicilina (choque anafilático e broncoespasmo), qual é o esquema alternativo de escolha para a profilaxia secundária contínua?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sulfadiazina por via oral (500 mg/dia para peso ≤ 27 kg ou 1.000 mg/dia para > 27 kg) ou Eritromicina oral."
      },
      {
        "id": "B",
        "texto": "Cefalotina intravenosa a cada 21 dias."
      },
      {
        "id": "C",
        "texto": "Amoxicilina associada a clavulanato semanal."
      },
      {
        "id": "D",
        "texto": "Nenhum medicamento, orientando apenas evitar aglomerações urbanas."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Para pacientes com alergia comprovada e grave à penicilina (reação anafilática mediada por IgE), a Sulfadiazina oral diária é a primeira escolha para profilaxia secundária (500 mg/dia para ≤ 27 kg e 1 g/dia para > 27 kg). Caso o paciente também seja alérgico a sulfas ou apresente intolerância gástrica, a alternativa é a Eritromicina oral (250 mg 2 vezes ao dia). Cefalosporinas são contraindicadas se houve anafilaxia a penicilinas devido ao risco de reatividade cruzada.",
    "comentariosAlternativas": {
      "A": "Correta. A sulfadiazina oral diária (ou eritromicina) é a opção de eleição no paciente com anafilaxia à penicilina.",
      "B": "Incorreta. Cefalosporinas têm risco de reação cruzada anafilática em indivíduos com hipersensibilidade IgE à penicilina.",
      "C": "Incorreta. Amoxicilina é uma aminopenicilina, contraindicada pelo risco de anafilaxia.",
      "D": "Incorreta. Não prescrever profilaxia condena o cardiopata a novos surtos e morte por falência valvar."
    }
  },
  {
    "id": "ped-cardio-100-081",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Lactente de 2 meses de vida é trazido à emergência por recusa alimentar, palidez e irritabilidade há 12 horas. Ao exame: reativo, afebril, FR de 60 irpm, tempo de enchimento capilar de 2 segundos, pulsos palpáveis e PA normal para a idade. O monitor cardíaco exibe ritmo taquicárdico estritamente regular com frequência cardíaca mantida e invariável em 250 bpm. O ECG revela QRS estreito (< 0,08 s) sem ondas P sinusais visíveis. Diante da estabilidade hemodinâmica, qual é a primeira conduta terapêutica recomendada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aplicação de manobra vagal com bolsa de gelo sobre a face (reflexo do mergulho) por 10 a 15 segundos."
      },
      {
        "id": "B",
        "texto": "Cardioversão elétrica sincronizada com 2 J/kg sob sedação profunda."
      },
      {
        "id": "C",
        "texto": "Massagem compressiva bilateral dos globos oculares."
      },
      {
        "id": "D",
        "texto": "Infusão venosa lenta de verapamil na dose de 0,5 mg/kg."
      }
    ],
    "correta": "A",
    "comentarioGeral": "No paciente pediátrico com Taquicardia Supraventricular (TSV) hemodinamicamente estável, o primeiro passo é a realização de manobras vagais. Em lactentes e crianças pequenas, a técnica mais eficaz e segura é a aplicação de uma bolsa com água e gelo sobre a fronte e ponte nasal por 10 a 15 segundos (reflexo do mergulho ou \"diving reflex\"), sem ocluir a boca ou as narinas. A massagem ocular e carotídea são proscritas em crianças pelo risco de descolamento de retina e asfixia.",
    "comentariosAlternativas": {
      "A": "Correta. A aplicação de gelo na face é a manobra vagal de escolha e segura em lactentes estáveis.",
      "B": "Incorreta. Cardioversão elétrica é reservada para pacientes instáveis (com sinais de choque, má perfusão ou hipotensão).",
      "C": "Incorreta. A compressão ocular é perigosa e formalmente contraindicada em pediatria.",
      "D": "Incorreta. O verapamil é formalmente contraindicado em menores de 1 ano pelo risco de colapso cardiovascular fatal."
    }
  },
  {
    "id": "ped-cardio-100-082",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Como diferenciar clínica e eletrocardiograficamente uma Taquicardia Sinusal de uma Taquicardia Supraventricular (TSV) paroxística em um lactente de 3 meses febril e desidratado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A taquicardia sinusal raramente ultrapassa 220 bpm no lactente, varia sua frequência com o choro/repouso e exibe onda P sinusal precedente normal; a TSV apresenta FC fixa e invariável (geralmente > 220 bpm), início/término súbitos e ondas P ausentes ou anômalas."
      },
      {
        "id": "B",
        "texto": "A taquicardia sinusal apresenta QRS alargado acima de 0,16 segundos, enquanto a TSV sempre tem QRS com onda delta."
      },
      {
        "id": "C",
        "texto": "A taquicardia sinusal não se altera com a infusão de volume venoso, ao passo que a TSV reverte espontaneamente com soro oral."
      },
      {
        "id": "D",
        "texto": "A presença de febre exclui totalmente o diagnóstico de Taquicardia Supraventricular."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A diferenciação é essencial: a Taquicardia Sinusal é uma resposta fisiológica a gatilhos (febre, dor, hipovolemia, anemia); sua FC costuma ser < 220 bpm no lactente (< 180 na criança maior), varia a cada minuto dependendo do estresse/choro e possui onda P sinusal idêntica antes de cada QRS. Já a TSV paroxística é uma arritmia por reentrada: sua FC é fixa, extremamente rápida (> 220 bpm no lactente), sem qualquer variabilidade fisiológica respiratória ou comportamental, e as ondas P estão ocultas no QRS ou são retrógradas.",
    "comentariosAlternativas": {
      "A": "Correta. Detalha os critérios de frequência, variabilidade e morfologia de onda P que distinguem as duas entidades.",
      "B": "Incorreta. Ambas são arritmias com QRS estreito em condições habituais de condução.",
      "C": "Incorreta. A taquicardia sinusal desacelera com a reposição volêmica; a TSV decorre de circuito elétrico e independe de hidratação.",
      "D": "Incorreta. Crianças com TSV podem ter febre concomitante ou desencadeada por viroses."
    }
  },
  {
    "id": "ped-cardio-100-083",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Lactente com TSV sustentada de 240 bpm permaneceu em taquiarritmia após manobra vagal correta com gelo na face. O paciente permanece hemodinamicamente estável e já possui acesso venoso calibroso em fossa antecubital. Qual é o fármaco de escolha e a técnica de administração recomendada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Adenosina na dose inicial de 0,1 mg/kg em bólus intravenoso ultrarrápido seguido imediatamente de flush de soro fisiológico em torneirinha de 3 vias."
      },
      {
        "id": "B",
        "texto": "Digoxina intravenosa em infusão lenta contínua por 48 horas."
      },
      {
        "id": "C",
        "texto": "Amiodarona em bólus rápido intravenoso sem diluição."
      },
      {
        "id": "D",
        "texto": "Atropina intravenosa associada a adrenalina diluída."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Adenosina é a droga de primeira escolha na TSV por reentrada estável. A dose inicial é de 0,1 mg/kg (máximo de 6 mg na 1ª dose). Como sua meia-vida é ultracurta (< 10 segundos), ela deve ser administrada em bólus IV rápido em veia calibrosa o mais próximo possível do coração, utilizando a técnica de duas seringas com torneirinha de 3 vias (three-way stopcock): injeta-se a adenosina rapidamente e, no mesmo segundo, faz-se o flush vigoroso com 5 a 10 mL de soro fisiológico, elevando-se o membro do paciente.",
    "comentariosAlternativas": {
      "A": "Correta. Descreve a droga de escolha (adenosina), a dose pediátrica inicial (0,1 mg/kg) e a técnica do flush rápido com torneirinha.",
      "B": "Incorreta. A digoxina tem ação lenta e não é utilizada na reversão aguda emergencial da TSV.",
      "C": "Incorreta. A amiodarona em bólus rápido causa colapso cardiovascular grave e hipotensão severa.",
      "D": "Incorreta. Atropina e adrenalina são cronotrópicas positivas e agravariam drasticamente a taquicardia."
    }
  },
  {
    "id": "ped-cardio-100-084",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Criança de 1 ano com TSV sustentada há mais de 36 horas evolui para a sala de emergência com palidez cutânea acinzentada, sonolência, pulsos periféricos filiformes, tempo de enchimento capilar de 5 segundos e pressão arterial inaudível. Diante do quadro de INSTABILIDADE HEMODINÂMICA grave (choque descompensado), qual é a conduta prioritária imediata?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Cardioversão elétrica sincronizada imediata com carga de 0,5 a 1 J/kg (aumentando para 2 J/kg se refratária)."
      },
      {
        "id": "B",
        "texto": "Manobras vagais repetidas por 15 minutos até haver melhora da perfusão."
      },
      {
        "id": "C",
        "texto": "Tentativa seriada de até 3 doses de adenosina antes de qualquer choque elétrico."
      },
      {
        "id": "D",
        "texto": "Infusão venosa de 20 mL/kg de solução glicosada a 5% sem monitorização."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na presença de sinais de instabilidade hemodinâmica (hipotensão arterial, alteração do nível de consciência, choque cardiogênico ou má perfusão periférica grave), não se deve retardar o tratamento com manobras vagais ou esperar preparo de medicações: a conduta mandatória imediata pelas diretrizes do PALS (Pediatric Advanced Life Support) é a Cardioversão Elétrica Sincronizada com carga inicial de 0,5 a 1 J/kg, podendo ser aumentada para 2 J/kg se não houver reversão.",
    "comentariosAlternativas": {
      "A": "Correta. A cardioversão elétrica sincronizada imediata é a prioridade absoluta no paciente com TSV e choque/instabilidade.",
      "B": "Incorreta. Manobras vagais são contraindicadas como conduta isolada no choque com hipotensão pelo risco de parada cardiorrespiratória.",
      "C": "Incorreta. No paciente instável com choque descompensado, não se perde tempo aguardando doses seriadas de fármacos se o desfibrilador estiver pronto.",
      "D": "Incorreta. Não corrige o mecanismo da arritmia e pode gerar hiponatremia e edema cerebral."
    }
  },
  {
    "id": "ped-cardio-100-085",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual fármaco antiarrítmico é expressamente contraindicado para o tratamento de Taquicardia Supraventricular em lactentes menores de 1 ano de idade devido ao elevado risco de precipitar colapso hemodinâmico irreversível, hipotensão refratária e parada cardiorrespiratória em atividade elétrica sem pulso?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Verapamil intravenoso."
      },
      {
        "id": "B",
        "texto": "Adenosina intravenosa."
      },
      {
        "id": "C",
        "texto": "Amiodarona oral em dose ajustada."
      },
      {
        "id": "D",
        "texto": "Propranolol oral em manutenção."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Verapamil (bloqueador dos canais de cálcio não-di-hidropiridínico) é estritamente contraindicado por via intravenosa em crianças com menos de 1 ano de idade. O miocárdio do lactente é altamente dependente do influxo de cálcio transsarcolêmico para manter o tônus inotrópico e a contratilidade basal (pois o retículo sarcoplasmático ainda é imaturo). A administração de verapamil IV bloqueia a entrada de cálcio, desencadeando choque cardiogênico fatal e assistolia refratária a ressuscitação.",
    "comentariosAlternativas": {
      "A": "Correta. O verapamil IV é contraindicado em < 1 ano pelo risco documentado de colapso cardiovascular e óbito.",
      "B": "Incorreta. A adenosina é o fármaco de escolha e seguro em lactentes.",
      "C": "Incorreta. Amiodarona pode ser utilizada em situações de refratariedade com cuidados de infusão.",
      "D": "Incorreta. O propranolol é amplamente utilizado na profilaxia crônica de manutenção."
    }
  },
  {
    "id": "ped-cardio-100-086",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Após a reversão da TSV para ritmo sinusal em um menino de 7 anos, o eletrocardiograma de 12 derivações basal revela: intervalo PR curto (< 0,10 s), onda de pré-excitação com empastamento inicial no início do complexo QRS (onda delta) e complexo QRS com duração alargada. Qual é o diagnóstico correspondente a esse padrão eletrocardiográfico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Síndrome de Wolff-Parkinson-White (WPW)."
      },
      {
        "id": "B",
        "texto": "Bloqueio de ramo esquerdo completo congênito isolado."
      },
      {
        "id": "C",
        "texto": "Síndrome de Brugada tipo 1."
      },
      {
        "id": "D",
        "texto": "Taquicardia nodal reentrante atípica crônica."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A tríade eletrocardiográfica clássica da Síndrome de Wolff-Parkinson-White (WPW) é: 1) Intervalo PR curto (< 0,12 s em adultos e crianças maiores, ou < 0,08-0,10 s em lactentes); 2) Onda delta (empastamento ascendente do início do QRS decorrente da despolarização precoce ventricular pela via acessória); 3) Alargamento da duração total do complexo QRS. Ela decorre da persistência de uma via anômala de condução direta entre átrios e ventrículos (feixe de Kent).",
    "comentariosAlternativas": {
      "A": "Correta. A descrição reúne os três critérios cardinais patognomônicos do padrão eletrocardiográfico de Wolff-Parkinson-White.",
      "B": "Incorreta. O BRE isolado não cursa com intervalo PR encurtado.",
      "C": "Incorreta. Brugada cursa com supradesnivelamento côncavo de ST em \"sela de cavaleiro\" em V1-V2.",
      "D": "Incorreta. Na TRNAV o ECG em ritmo sinusal é rigorosamente normal (não há via acessória extranodal visível)."
    }
  },
  {
    "id": "ped-cardio-100-087",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Um adolescente de 14 anos com diagnóstico de Síndrome de Wolff-Parkinson-White procura a emergência com palpitações intensas e dispneia. O ECG revela uma taquiarritmia irregular com complexos QRS bizarros e de larguras variáveis, com frequências ventriculares que atingem 260 bpm, compatível com Fibrilação Atrial pré-excitada com condução anterógrada pela via acessória. Por que o uso de fármacos bloqueadores do nó atrioventricular (como verapamil, diltiazem ou digoxina) é estritamente PROIBIDO nessa situação?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Porque o bloqueio do nó AV desvia toda a condução dos múltiplos estímulos atriais desorganizados exclusivamente para a via acessória (feixe de Kent), precipitando taquicardia ventricular polimórfica ou fibrilação ventricular fatal."
      },
      {
        "id": "B",
        "texto": "Porque essas drogas provocam broncoespasmo grave mediado por histamina."
      },
      {
        "id": "C",
        "texto": "Porque aumentam o período refratário da via acessória, impedindo o retorno ao ritmo sinusal."
      },
      {
        "id": "D",
        "texto": "Porque degradam quimicamente as moléculas de heparina endógena aumentando o risco de AVC."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na FA pré-excitada em pacientes com WPW, centenas de impulsos elétricos caóticos originados nos átrios chegam aos ventrículos tanto pelo nó AV quanto pela via acessória. O nó AV funciona como um \"filtro fisiológico\" que bloqueia a maioria dos impulsos. Se forem administradas drogas bloqueadoras do nó AV (verapamil, digoxina, adenosina ou diltiazem), o nó AV é desligado e todos os impulsos atriais de alta frequência trafegam livremente pela via acessória (que tem período refratário curto), levando à degeneração imediata em Fibrilação Ventricular e parada cardíaca.",
    "comentariosAlternativas": {
      "A": "Correta. O bloqueio nodal favorece a condução anterógrada acelerada pela via acessória, podendo degenerar em fibrilação ventricular.",
      "B": "Incorreta. O risco principal não é broncoespasmo, mas arritmia ventricular fatal.",
      "C": "Incorreta. Elas não prolongam a refratariedade da via acessória, e sim bloqueiam o nó AV.",
      "D": "Incorreta. Não há qualquer interação farmacológica com heparina."
    }
  },
  {
    "id": "ped-cardio-100-088",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o procedimento de escolha para a cura definitiva da Taquicardia Supraventricular por reentrada atrioventricular ou nodal em crianças e adolescentes sintomáticos refratários ou que praticam esportes competitivos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Estudo eletrofisiológico intracardíaco com ablação por cateter da via anômala (por radiofrequência ou crioablação)."
      },
      {
        "id": "B",
        "texto": "Denervação simpática renal bilateral por via arterial percutânea."
      },
      {
        "id": "C",
        "texto": "Implante de marcapasso definitivo dupla-câmara epicárdico."
      },
      {
        "id": "D",
        "texto": "Simpatectomia torácica endoscópica esquerda isolada."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A ablação por cateter (utilizando energia de radiofrequência ou crioablação) é o tratamento de escolha para a cura definitiva das taquicardias supraventriculares por reentrada (WPW ou reentrada nodal). Apresenta taxas de sucesso superiores a 95% e baixo índice de complicações. É recomendada em crianças com episódios frequentes refratários ao tratamento farmacológico, naquelas que praticam esportes de alta performance ou com vias acessórias de alto risco de condução rápida.",
    "comentariosAlternativas": {
      "A": "Correta. A ablação por radiofrequência ou crioablação é a terapia curativa padrão-ouro.",
      "B": "Incorreta. Denervação renal é experimental para hipertensão arterial resistente no adulto.",
      "C": "Incorreta. Marcapasso trata bradiarritmias, não ablação de via rápida.",
      "D": "Incorreta. Simpatectomia é usada em canalopatias graves (Síndrome do QT Longo refratária), não na TSV comum."
    }
  },
  {
    "id": "ped-cardio-100-089",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Em escolares e adolescentes cooperativos com TSV hemodinamicamente estáveis, qual variante de manobra física vagal tem demonstrado maior taxa de reversão para o ritmo sinusal quando comparada à manobra de Valsalva convencional?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Manobra de Valsalva Modificada (expiração contra resistência de 40 mmHg em seringa por 15 segundos, seguida imediatamente por decúbito dorsal e elevação passiva dos membros inferiores a 45° por 15 segundos)."
      },
      {
        "id": "B",
        "texto": "Manobra de compressão bimanual das artérias carótidas por 1 minuto."
      },
      {
        "id": "C",
        "texto": "Manobra de hiperflexão cervical forçada com apneia inspiratória profunda."
      },
      {
        "id": "D",
        "texto": "Manobra de descompressão gástrica com sonda nasogástrica calibrosa."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O ensaio clínico REVERT comprovou a superioridade da Manobra de Valsalva Modificada em comparação à tradicional (taxa de reversão de 43% vs 17%). Consiste em: o paciente sentado sopra o êmbolo de uma seringa de 10-20 mL gerando pressão de 40 mmHg por 15 segundos; em seguida, o paciente é colocado imediatamente em decúbito dorsal e seus membros inferiores são elevados passivamente a 45° por mais 15 segundos. Isso otimiza o retorno venoso e o estímulo barorreceptor vagal sobre o nó AV.",
    "comentariosAlternativas": {
      "A": "Correta. A manobra de Valsalva modificada é o método físico mais eficaz e validado para reversão de TSV em adolescentes.",
      "B": "Incorreta. Massagem carotídea bilateral é formalmente contraindicada.",
      "C": "Incorreta. Flexão cervical não gera estímulo autonômico barorreflexo adequado.",
      "D": "Incorreta. Sondagem gástrica gera desconforto e estímulo adrenérgico deletério."
    }
  },
  {
    "id": "ped-cardio-100-090",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o fármaco betabloqueador oral de primeira escolha comumente utilizado para a profilaxia a longo prazo de recidivas de TSV em lactentes durante o primeiro ano de vida?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Propranolol por via oral."
      },
      {
        "id": "B",
        "texto": "Sotalol em dose de sobrecarga venosa rápida."
      },
      {
        "id": "C",
        "texto": "Atenolol em inalação contínua."
      },
      {
        "id": "D",
        "texto": "Carvedilol apenas se houver fração de ejeção supranormal (> 75%)."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Propranolol oral é o fármaco de primeira escolha clássico e mais amplamente prescrito para a profilaxia de episódios recorrentes de TSV em lactentes ao longo do primeiro ano de vida. Possui amplo perfil de segurança, atua reduzindo o tônus adrenérgico e retardando a condução no nó atrioventricular e no circuito reentrante.",
    "comentariosAlternativas": {
      "A": "Correta. O propranolol oral é a medicação padrão de manutenção na prevenção de novas crises de TSV no primeiro ano.",
      "B": "Incorreta. Sotalol requer vigilância estrita de intervalo QT em ambiente hospitalar, sendo droga de segunda linha.",
      "C": "Incorreta. Atenolol é administrado por via oral, não por inalação.",
      "D": "Incorreta. Carvedilol é usado no manejo da insuficiência cardíaca crônica com fração de ejeção reduzida."
    }
  },
  {
    "id": "ped-cardio-100-091",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Durante a infusão intravenosa em bólus rápido de adenosina para reversão de TSV em uma criança monitorizada, qual traçado eletrocardiográfico transitório com duração de 2 a 5 segundos é comum e esperado logo antes do retorno ao ritmo sinusal normal, devendo ser antecipado à equipe para evitar alarmes indevidos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pausa sinusal breve ou assistolia transitória transitória com posterior surgimento de onda P sinusal e ritmo regular."
      },
      {
        "id": "B",
        "texto": "Fibrilação ventricular persistente que exige desfibrilação com 4 J/kg."
      },
      {
        "id": "C",
        "texto": "Torsades de pointes refratária com necessidade de sulfato de magnésio."
      },
      {
        "id": "D",
        "texto": "Bloqueio de ramo bilateral irreversível com necessidade de marcapasso definitivo."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A adenosina liga-se aos receptores A1 no nó atrioventricular e no nó sinusal, ativando canais de potássio acoplados à proteína G e causando hiperpolarização celular imediata. O efeito é uma parada abrupta e transitória da condução elétrica nodal (assistolia ou pausa ventricular curta de 2 a 5 segundos) no monitor, seguida de recuperação espontânea do ritmo sinusal fisiológico.",
    "comentariosAlternativas": {
      "A": "Correta. A pausa transitória/assistolia de poucos segundos é o efeito fisiopatológico esperado da adenosina antes da reversão ao ritmo sinusal.",
      "B": "Incorreta. Degeneração para fibrilação ventricular é excepcional em crianças com corações normais.",
      "C": "Incorreta. A adenosina não prolonga o intervalo QT a ponto de induzir torsades de rotina.",
      "D": "Incorreta. O efeito bloqueador é ultracurto e desaparece em segundos pela rápida recaptação pelas hemácias e endotélio."
    }
  },
  {
    "id": "ped-cardio-100-092",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o período cronológico de vida preconizado pelo Ministério da Saúde e pela Sociedade Brasileira de Pediatria para a realização da oximetria de pulso para triagem neonatal de cardiopatias congênitas críticas (Teste do Coraçãozinho) em recém-nascidos assintomáticos com idade gestacional ≥ 35 semanas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Entre 24 e 48 horas de vida, sempre antes da alta hospitalar da maternidade."
      },
      {
        "id": "B",
        "texto": "Exclusivamente nos primeiros 10 minutos após o clampeamento do cordão umbilical."
      },
      {
        "id": "C",
        "texto": "Apenas entre o 7º e o 10º dia de vida na primeira consulta na Unidade Básica de Saúde."
      },
      {
        "id": "D",
        "texto": "No 28º dia de vida, coincidindo com o término do período neonatal."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Teste do Coraçãozinho deve ser realizado de rotina em todos os recém-nascidos aparentemente saudáveis com idade gestacional > 35 semanas entre 24 e 48 horas de vida (antes da alta da maternidade). Fazer antes de 24 horas eleva o número de resultados falso-positivos devido à instabilidade hemodinâmica transicional e shunt fisiológico pelo canal arterial; postergar para além de 48 horas aumenta o risco de o canal arterial se fechar no domicílio, levando a choque ou óbito por cardiopatia canal-dependente não diagnosticada.",
    "comentariosAlternativas": {
      "A": "Correta. A janela entre 24 e 48 horas de vida (antes da alta) é o período padrão recomendado pelas diretrizes.",
      "B": "Incorreta. Nos primeiros minutos de vida a saturação normal ainda é baixa e o shunt transicional gera falsos positivos.",
      "C": "Incorreta. Postergar para a UBS após o 7º dia expõe o recém-nascido a choque e morte domiciliar.",
      "D": "Incorreta. 28 dias é tardio demais para o rastreio neonatal de cardiopatias críticas."
    }
  },
  {
    "id": "ped-cardio-100-093",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Quais são os locais anatômicos exatos preconizados para a colocação do sensor de oximetria de pulso na realização do Teste do Coraçãozinho e qual é a justificativa anatômica para a escolha específica do membro superior direito?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Membro Superior Direito (pré-ductal) e em um dos Membros Inferiores (pós-ductal); o membro superior direito recebe sangue do tronco braquiocefálico que emerge da aorta antes do canal arterial."
      },
      {
        "id": "B",
        "texto": "Membro Superior Esquerdo e Membro Superior Direito simultaneamente; ambos recebem circulação exclusivamente pré-ductal."
      },
      {
        "id": "C",
        "texto": "Ambos os Membros Inferiores apenas; os membros inferiores concentram a maior pressão arterial sistólica do organismo."
      },
      {
        "id": "D",
        "texto": "Hálux esquerdo e lobo da orelha direita; ambos representam o território capilar cutâneo periférico terminal."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A aferição deve ser feita no Membro Superior Direito (MSD) e em um dos Membros Inferiores (MID ou MIE). O MSD é obrigatoriamente a referência pré-ductal porque o tronco braquiocefálico é o primeiro ramo do arco aórtico, originando-se proximalmente à inserção do canal arterial (ductus arteriosus). Já o membro superior esquerdo recebe a artéria subclávia esquerda, que pode ter origem próxima ou imediatamente pós-ductal.",
    "comentariosAlternativas": {
      "A": "Correta. MSD (pré-ductal) e um dos membros inferiores (pós-ductal) com justificativa anatômica precisa.",
      "B": "Incorreta. O membro superior esquerdo pode sofrer influência pós-ductal e não avalia o gradiente inferior.",
      "C": "Incorreta. Não permite a comparação entre território pré-ductal e pós-ductal.",
      "D": "Incorreta. O lobo da orelha não é sítio preconizado para o teste neonatal."
    }
  },
  {
    "id": "ped-cardio-100-094",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "De acordo com a Sociedade Brasileira de Pediatria e o Ministério da Saúde, quais são os critérios que definem um resultado NORMAL (teste negativo) no Teste do Coraçãozinho?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Saturação periférica de oxigênio (SpO2) maior ou igual a 95% em ambos os membros (MSD e MI) E diferença entre as duas medidas menor ou igual a 3% (diferença ≤ 3%)."
      },
      {
        "id": "B",
        "texto": "SpO2 maior que 85% em membros inferiores e maior que 90% em membros superiores, independentemente da diferença."
      },
      {
        "id": "C",
        "texto": "SpO2 de 100% no MSD e qualquer valor acima de 80% nos membros inferiores."
      },
      {
        "id": "D",
        "texto": "Diferença entre MSD e MI de exatamente 10% com SpO2 superior a 92% em ambos."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Teste do Coraçãozinho é considerado NORMAL (negativo) quando: 1) A saturação de oxigênio for ≥ 95% tanto no MSD (pré-ductal) quanto no membro inferior (pós-ductal); E 2) A diferença percentual entre a medida do MSD e a do membro inferior for menor ou igual a 3% (diferença ≤ 3%). Cumpridos esses dois critérios, o recém-nascido é liberado para a alta hospitalar habitual da maternidade.",
    "comentariosAlternativas": {
      "A": "Correta. SpO2 ≥ 95% em ambos os sítios e diferença absoluta ≤ 3% definem o teste normal.",
      "B": "Incorreta. Saturações abaixo de 95% são alteradas e exigem investigação.",
      "C": "Incorreta. Qualquer valor abaixo de 95% ou diferença > 3% torna o teste alterado.",
      "D": "Incorreta. Diferença de 10% é francamente patológica."
    }
  },
  {
    "id": "ped-cardio-100-095",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Recém-nascido a termo com 30 horas de vida, clinicamente assintomático, realiza o Teste do Coraçãozinho com o seguinte resultado: SpO2 em MSD = 96% e SpO2 em MID = 91% (diferença de 5 pontos percentuais). Qual é a conduta IMEDIATA recomendada pelas diretrizes oficiais?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Considerar o teste alterado preliminar, NÃO conceder alta hospitalar e repetir a aferição após 1 hora."
      },
      {
        "id": "B",
        "texto": "Conceder alta hospitalar imediata com encaminhamento para ecocardiograma ambulatorial em 30 dias."
      },
      {
        "id": "C",
        "texto": "Iniciar imediatamente infusão contínua de Prostaglandina E1 e intubação orotraqueal."
      },
      {
        "id": "D",
        "texto": "Encaminhar o paciente imediatamente para cateterismo cardíaco intervencionista de urgência."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Como a SpO2 no MID foi < 95% e a diferença entre pré e pós-ductal foi de 5% (≥ 4%), o teste é classificado como ALTERADO PRELIMINAR (ou duvidoso). A conduta mandatória nesse primeiro momento é manter o neonato na maternidade e REPETIR a oximetria de pulso após 1 hora (podendo ser repetida mais uma vez se persistir alterada). Apenas se persistir alterada na reavaliação o teste torna-se positivo e indica ecocardiograma.",
    "comentariosAlternativas": {
      "A": "Correta. A conduta padrão para o primeiro teste alterado é repetir o exame após 1 hora sem liberar a alta.",
      "B": "Incorreta. É formalmente proibido conceder alta hospitalar com teste de triagem alterado.",
      "C": "Incorreta. Prostaglandina imediata sem eco ou sinais clínicos de choque é conduta precipitada na primeira medida alterada.",
      "D": "Incorreta. Não há diagnóstico anatômico confirmado para indicar cateterismo."
    }
  },
  {
    "id": "ped-cardio-100-096",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Um recém-nascido com resultado preliminar alterado no Teste do Coraçãozinho é reavaliado após 1 hora, apresentando SpO2 em MSD = 93% e em MID = 89%. Como esse resultado é classificado e qual é a conduta mandatória?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Teste POSITIVO; o recém-nascido não deve receber alta hospitalar, deve permanecer monitorizado e realizar Ecocardiograma confirmatório antes da alta (em até 24 horas)."
      },
      {
        "id": "B",
        "texto": "Teste falso-positivo; o recém-nascido pode receber alta com puericultura de rotina."
      },
      {
        "id": "C",
        "texto": "Teste duvidoso permanente; repetir diariamente por 14 dias antes de solicitar exames de imagem."
      },
      {
        "id": "D",
        "texto": "Resultado normal para o período de transição neonatal; alta imediata."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Se após 1 hora da primeira aferição a SpO2 permanecer < 95% em qualquer um dos membros ou a diferença entre eles persistir ≥ 4% (ou > 3%), o Teste do Coraçãozinho é classificado definitivamente como POSITIVO. O recém-nascido NÃO PODE receber alta da maternidade e deve ser submetido obrigatoriamente a um Ecocardiograma transtorácico em até 24 horas para confirmação diagnóstica antes de qualquer liberação.",
    "comentariosAlternativas": {
      "A": "Correta. Teste positivo confirmado na repetição exige ecocardiograma antes da alta e monitorização rigorosa.",
      "B": "Incorreta. A persistência de hipoxemia não pode ser desprezada como falso-positivo.",
      "C": "Incorreta. Aguardar 14 dias causaria colapso cardiovascular por fechamento do canal arterial.",
      "D": "Incorreta. Valores abaixo de 95% em RN a termo com > 24h não são normais."
    }
  },
  {
    "id": "ped-cardio-100-097",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual é o principal objetivo do Teste do Coraçãozinho na triagem neonatal de maternidade?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Detectar precocemente Cardiopatias Congênitas Críticas canal-dependentes (de fluxo pulmonar ou sistêmico) antes que o fechamento fisiológico do canal arterial provoque choque cardiogênico, hipóxia grave ou morte súbita."
      },
      {
        "id": "B",
        "texto": "Diagnosticar precocemente arritmias ventriculares genéticas hereditárias como a Síndrome de Brugada."
      },
      {
        "id": "C",
        "texto": "Identificar trombose venosa profunda congênita de membros inferiores."
      },
      {
        "id": "D",
        "texto": "Rastrear insuficiência renal pré-renal funcional neonatal transitória."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O teste foi desenhado para detectar cardiopatias congênitas críticas canal-dependentes de fluxo sistêmico (ex: Síndrome do Coração Esquerdo Hipoplásico, Coarctação de Aorta grave, Interrupção do arco aórtico) ou de fluxo pulmonar (ex: Atresia pulmonar, Tetralogia de Fallot crítica), além da Transposição das Grandes Artérias. Nestas patologias, o recém-nascido parece inicialmente saudável enquanto o canal arterial está aberto, mas evolui para colapso fatal súbito ao receber alta.",
    "comentariosAlternativas": {
      "A": "Correta. Identificar cardiopatias congênitas críticas canal-dependentes antes do colapso pós-fechamento ductal.",
      "B": "Incorreta. A oximetria de pulso não é método para detecção de canalopatias arrítmicas.",
      "C": "Incorreta. Oximetria avalia saturação de hemoglobina arterial, não trombose venosa profunda.",
      "D": "Incorreta. Função renal é avaliada por débito urinário e creatinina sérica."
    }
  },
  {
    "id": "ped-cardio-100-098",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Qual das seguintes cardiopatias congênitas é uma limitação reconhecida do Teste do Coraçãozinho, podendo facilmente passar despercebida com oximetria de pulso normal (resultado falso-negativo do teste)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Comunicação Interventricular (CIV) pequena ou moderada restritiva sem repercussão hemodinâmica precoce."
      },
      {
        "id": "B",
        "texto": "Síndrome da Hipoplasia do Ventrículo Esquerdo com canal arterial fechando."
      },
      {
        "id": "C",
        "texto": "Transposição das Grandes Artérias simples com septo íntegro."
      },
      {
        "id": "D",
        "texto": "Atresia Pulmonar com septo interventricular íntegro."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Teste do Coraçãozinho tem excelente sensibilidade para cardiopatias com hipoxemia e shunts dependentes do canal arterial, mas NÃO detecta lesões acianóticas sem shunt direita-esquerda pelo canal arterial, tais como: CIVs pequenas/médias, CIAs tipo ostium secundum, estenose pulmonar leve ou coarctação de aorta leve. Essas lesões não geram hipoxemia pré ou pós-ductal nas primeiras 48 horas de vida.",
    "comentariosAlternativas": {
      "A": "Correta. A CIV restritiva pequena tem saturação de oxigênio normal em todos os membros, sendo falso-negativo na oximetria.",
      "B": "Incorreta. A hipoplasia de VE gera má perfusão sistêmica e dessaturação evidente no teste.",
      "C": "Incorreta. A TGA cursa com cianose acentuada detectada prontamente pelo teste.",
      "D": "Incorreta. Atresia pulmonar causa hipoxemia grave detectada pelo teste."
    }
  },
  {
    "id": "ped-cardio-100-099",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Ao realizar a oximetria de triagem neonatal, o pediatra encontra SpO2 no membro superior direito de 86% e SpO2 no membro inferior direito de 95% (oxigenação pós-ductal significativamente superior à pré-ductal). Qual cardiopatia congênita crítica associada a hipertensão pulmonar persistente neonatal explica esse fenômeno fisiopatológico de \"cianose diferencial reversa\"?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Transposição das Grandes Artérias (TGA) associada a persistência de hipertensão pulmonar ou coarctação de aorta."
      },
      {
        "id": "B",
        "texto": "Persistência isolada do canal arterial com shunt esquerda-direita maciço puro."
      },
      {
        "id": "C",
        "texto": "Tetralogia de Fallot com estenose subpulmonar leve e arco aórtico normal."
      },
      {
        "id": "D",
        "texto": "Comunicação interatrial ampla tipo ostium primum sem valvopatia associada."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O achado de SpO2 pós-ductal (membros inferiores) superior à SpO2 pré-ductal (membro superior direito) é denominado \"cianose diferencial reversa\". Na TGA, o ventrículo esquerdo ejeta sangue oxigenado na artéria pulmonar. Se houver hipertensão pulmonar ou coarctação de aorta, esse sangue oxigenado da artéria pulmonar é desviado pelo canal arterial para a aorta descendente, oxigenando os membros inferiores mais do que a aorta ascendente (que recebe sangue venoso desoxigenado do VD para o MSD).",
    "comentariosAlternativas": {
      "A": "Correta. A TGA associada à hipertensão pulmonar é a causa clássica da cianose diferencial reversa.",
      "B": "Incorreta. Na PCA simples, o sangue oxigenado vem da aorta e satura igualmente ou reduz o MI se houver shunt reverso.",
      "C": "Incorreta. No Fallot a saturação no MSD e MI é similar e reduzida.",
      "D": "Incorreta. A CIA não gera shunt pós-ductal preferencial em membros inferiores."
    }
  },
  {
    "id": "ped-cardio-100-100",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Em um recém-nascido prematuro limítrofe (35 semanas de gestação), qual das seguintes causas NÃO cardíacas é a causa mais comum de um Teste do Coraçãozinho alterado preliminar nas primeiras 24 a 48 horas de vida na maternidade?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Doenças respiratórias neonatais (como Taquipneia Transitória do Recém-Nascido ou Síndrome do Desconforto Respiratório) e Hipertensão Pulmonar Persistente do Neonato."
      },
      {
        "id": "B",
        "texto": "Hipercalcemia hipofisária congênita."
      },
      {
        "id": "C",
        "texto": "Estenose congênita do piloro hipertrófica."
      },
      {
        "id": "D",
        "texto": "Displasia do desenvolvimento do quadril bilateral."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Embora o teste seja voltado para cardiopatias congênitas críticas, causas pulmonares e transicionais são os principais fatores de teste alterado na maternidade: a Taquipneia Transitória do RN (TTRN), o desconforto respiratório do prematuro tardio, pneumonias congênitas e a Hipertensão Pulmonar Persistente do Neonato (HPPN) causam hipoxemia e shunts intrapulmonares e intercâmaras que alteram a oximetria de pulso, exigindo diagnóstico diferencial imediato.",
    "comentariosAlternativas": {
      "A": "Correta. Patologias respiratórias e HPPN são as principais causas extracardíacas de oximetria alterada na triagem neonatal.",
      "B": "Incorreta. Distúrbios eletrolíticos não geram hipoxemia arterial primária imediata sem colapso.",
      "C": "Incorreta. Estenose de piloro manifesta-se entre a 3ª e 6ª semana com vômitos em jato, não hipoxemia neonatal.",
      "D": "Incorreta. Afecção ortopédica que não interfere na saturação periférica de oxigênio."
    }
  }
];

// Subconjuntos exportados para retrocompatibilidade
export const QUESTOES_CARDIOLOGIA_PEDIATRICA = QUESTOES_CARDIOLOGIA_PEDIATRICA_100.slice(0, 6);
export const QUESTOES_CARDIOLOGIA_PEDIATRICA_PARTE_2 = QUESTOES_CARDIOLOGIA_PEDIATRICA_100.slice(6, 12);
export const QUESTOES_CARDIOLOGIA_PEDIATRICA_PARTE_3 = QUESTOES_CARDIOLOGIA_PEDIATRICA_100.slice(12, 18);

// ============================================================================
// BANCO COM 100 QUESTÕES COMPLETAS DE ITU PEDIÁTRICO
// Cobrindo Métodos de Coleta, Critérios Diagnósticos, Cistite vs Pielonefrite,
// Tratamento Antimicrobiano, Indicações de Internação, USG de Vias Urinárias,
// UCM e Graus de RVU, Cintilografia com DMSA, Manejo do RVU,
// Válvula de Uretra Posterior (VUP), Quimioprofilaxia e DTUI/Constipação.
// ============================================================================
export const QUESTOES_ITU_PEDIATRICO_100: RawCardioQuestion[] = [
  {
    "id": "ped-itu-001",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Métodos de coleta de urina",
    "enunciado": "Lactente feminina de 7 meses é trazida à UPA com febre de 38,8 °C há 48 horas, sem sintomas respiratórios ou gastrointestinais. Ao exame físico: irritada ao manuseio, hidratada, ausculta cardiopulmonar e otoscopia normais. A médica assistente solicita EAS e urocultura. A mãe questiona se não poderia usar o saco coletor adesivo. Qual é a orientação correta sobre o valor clínico e as limitações do saco coletor adesivo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A punção suprapúbica ou cateterismo vesical é mandatório para urocultura confirmatória, pois o saco coletor apresenta taxa de contaminação de até 50-70% (baixo VPP), sendo útil apenas quando a urina tipo 1 é totalmente normal para afastar ITU (alto VPN)."
      },
      {
        "id": "B",
        "texto": "O saco coletor é o método padrão-ouro para urocultura em lactentes, desde que trocado a cada 6 horas."
      },
      {
        "id": "C",
        "texto": "Se a cultura do saco coletor isolar mais de 10.000 UFC/mL de qualquer bactéria, o diagnóstico de pielonefrite está confirmado e dispensa novo exame."
      },
      {
        "id": "D",
        "texto": "O saco coletor adesivo possui alta especificidade e alto valor preditivo positivo, sendo contraindicado apenas em recém-nascidos prematuros."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O saco coletor plástico estéril tem uma taxa inaceitavelmente alta de contaminação por flora perineal e fecal (falso-positivo em 50 a 70% dos casos). No entanto, um sedimento urinário (EAS) completamente normal colhido por saco coletor (sem leucocitúria, sem bacteriúria e com nitrito negativo) tem excelente Valor Preditivo Negativo (VPN > 95%), permitindo afastar ITU. Qualquer urocultura positiva em saco coletor requer confirmação por método estéril (cateterismo vesical ou punção suprapúbica).",
    "comentariosAlternativas": {
      "A": "Correta. O saco coletor tem excelente valor preditivo negativo quando a urina é normal, mas não serve para firmar diagnóstico de ITU devido à altíssima taxa de contaminação.",
      "B": "Incorreta. O padrão-ouro de coleta estéril em não continentes é o cateterismo vesical ou a punção suprapúbica.",
      "C": "Incorreta. Urocultura em saco coletor não confirma diagnóstico de ITU em lactentes; necessita de amostra estéril.",
      "D": "Incorreta. O saco coletor possui baixo valor preditivo positivo e baixa especificidade para infecção verdadeira."
    }
  },
  {
    "id": "ped-itu-002",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Métodos de coleta de urina",
    "enunciado": "Menino de 4 meses com febre de 39 °C sem foco evidente é admitido para investigação. O médico decide realizar cateterismo vesical para coleta estéril de urina. Ao passar a sonda de alívio uretral com técnica asséptica rigorosa, são obtidos 4 mL de urina límpida. Qual é a principal vantagem do cateterismo vesical em comparação com a punção suprapúbica em lactentes menores de 6 meses?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Menor dependência de repleção vesical prévia volumosa no momento do procedimento e maior taxa de sucesso na primeira tentativa."
      },
      {
        "id": "B",
        "texto": "Ausência total de risco de contaminação bacteriana pela flora uretral distal."
      },
      {
        "id": "C",
        "texto": "Possibilidade de confirmação imediata da função de filtração glomerular renal."
      },
      {
        "id": "D",
        "texto": "Substituição definitiva da necessidade de urocultura quantitativa."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O cateterismo vesical de alívio é o método estéril mais amplamente utilizado em emergências pediátricas para lactentes que não controlam esfíncteres. Apresenta taxa de sucesso superior a 95% na primeira tentativa (mesmo com volumes vesicais pequenos), enquanto a punção suprapúbica sem guia ultrassonográfico tem taxa de sucesso inferior a 50% se a bexiga não estiver palpável ou com volume inferior a 10 mL.",
    "comentariosAlternativas": {
      "A": "Correta. O cateterismo vesical tem alta taxa de sucesso prático e exige menor volume vesical acumulado em comparação à punção suprapúbica às cegas.",
      "B": "Incorreta. Pode haver carreamento mínimo transitório de bactérias do meato uretral distal se a antissepsia for inadequada.",
      "C": "Incorreta. A coleta não afere diretamente a taxa de filtração glomerular.",
      "D": "Incorreta. A urocultura quantitativa continua sendo mandatória."
    }
  },
  {
    "id": "ped-itu-003",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Métodos de coleta de urina",
    "enunciado": "Lactente masculino de 2 meses de vida, com suspeita de pielonefrite aguda febril, apresenta fimose fisiológica acentuada com meato uretral puntiforme, impossibilitando a cateterização vesical. A bexiga encontra-se palpável a 2 cm acima da sínfise púbica. O pediatra opta por realizar punção suprapúbica (PSP). Qual marco anatômico e técnica de antissepsia são recomendados para a execução segura da PSP?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Punção realizada cerca de 1 a 2 cm acima da sínfise púbica na linha média, com agulha perpendicular de calibre fino (22 a 25G) aspirando continuamente."
      },
      {
        "id": "B",
        "texto": "Punção realizada 5 cm acima da cicatriz umbilical direcionada obliquamente para a fossa ilíaca direita."
      },
      {
        "id": "C",
        "texto": "Punção transretal profunda guiada por toque bimanual digital sob anestesia geral."
      },
      {
        "id": "D",
        "texto": "Incisão suprapúbica cirúrgica aberta de 3 cm sob anestesia inalatória obrigatória."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A punção suprapúbica (PSP) é o método estéril definitivo (padrão-ouro) em lactentes, pois a bexiga no lactente é um órgão intra-abdominal e não intrapélvico. Quando a bexiga está cheia (palpável ou confirmada por USG), punciona-se na linha média, 1 a 2 cm acima da sínfise púbica, com agulha 22G a 25G em ângulo de 90° (ou ligeiramente cefálico-caudal de 10-20°), aspirando até a saída de urina.",
    "comentariosAlternativas": {
      "A": "Correta. 1 a 2 cm acima da sínfise púbica na linha média em ângulo perpendicular aspirando urina.",
      "B": "Incorreta. Acima da cicatriz umbilical puncionaria alças intestinais ou vasos mesentéricos.",
      "C": "Incorreta. A via transretal é contaminada e provocaria peritonite bacteriana maciça.",
      "D": "Incorreta. A PSP é uma punção percutânea com agulha fina, não uma cirurgia aberta."
    }
  },
  {
    "id": "ped-itu-004",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Métodos de coleta de urina",
    "enunciado": "Menina de 5 anos, previamente hígida e com controle esfincteriano completo há 2 anos, queixa-se de disúria intensa, polaciúria e dor suprapúbica há 24 horas. Está afebril. Qual é o método de coleta de urina de primeira escolha e quais orientações de higiene devem ser fornecidas à mãe?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Jato médio espontâneo com higienização prévia da genitália externa com água e sabonete, afastamento dos grandes lábios e descarte da primeira porção da micção."
      },
      {
        "id": "B",
        "texto": "Punção suprapúbica obrigatória para evitar contaminação vulvar."
      },
      {
        "id": "C",
        "texto": "Cateterismo vesical com sonda de Folley de demora por 24 horas."
      },
      {
        "id": "D",
        "texto": "Coleta com saco coletor adesivo após banho de imersão de 30 minutos."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Em crianças com continência urinária adquirida (controle esfincteriano), o método de escolha é o Jato Médio espontâneo. Recomenda-se higiene perineal cuidadosa com água e sabão neutro (ou gaze úmida), separação dos grandes lábios, descarte do primeiro jato urinário (que lava a uretra distal) e coleta do jato intermediário em frasco estéril.",
    "comentariosAlternativas": {
      "A": "Correta. Jato médio espontâneo com higiene adequada e separação dos lábios é o padrão para crianças continentes.",
      "B": "Incorreta. Punção suprapúbica é procedimento invasivo desnecessário em crianças com controle esfincteriano.",
      "C": "Incorreta. Cateterismo de demora gera trauma e risco de infecção associada a dispositivo.",
      "D": "Incorreta. Saco coletor é proscrito para crianças com controle esfincteriano."
    }
  },
  {
    "id": "ped-itu-005",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Métodos de coleta de urina",
    "enunciado": "Lactente masculino de 8 meses sem controle esfincteriano chega com febre sem sinais localizatórios. A equipe de enfermagem colocou saco coletor adesivo às 08h da manhã. Às 11h30 (3 horas e meia depois), a mãe avisa que a criança finalmente urinou no saco. O médico deve orientar qual conduta em relação a essa amostra?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Descartar a amostra e não enviar para urocultura, pois sacos coletores mantidos por mais de 30 a 60 minutos apresentam proliferação bacteriana exuberante da pele e fezes, invalidando qualquer resultado microbiológico."
      },
      {
        "id": "B",
        "texto": "Enviar a amostra imediatamente, pois o tempo de permanência do saco plástico não interfere na flora bacteriana."
      },
      {
        "id": "C",
        "texto": "Adicionar álcool a 70% na bolsa plástica antes de enviar ao laboratório para matar os contaminantes de pele."
      },
      {
        "id": "D",
        "texto": "Iniciar antibioticoterapia profilática e enviar o saco para teste de biologia molecular."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Se a criança não urinar em 30 a 60 minutos após a aposição do saco coletor adesivo, este deve ser retirado, nova antissepsia realizada e outro saco afixado. Bolsas mantidas por mais de 1 hora funcionam como estufas de cultura para bactérias comensais da pele e flora fecal perineal, tornando a urocultura 100% contaminada e clinicamente inútil.",
    "comentariosAlternativas": {
      "A": "Correta. Bolsas adesivas mantidas por mais de 30 a 60 minutos proliferam bactérias da pele e devem ser descartadas.",
      "B": "Incorreta. O calor corporal e o tempo prolongado causam multiplicação maciça de contaminantes cutâneos.",
      "C": "Incorreta. O álcool esterilizaria a urina e destruiria qualquer patógeno verdadeiro, gerando falso-negativo.",
      "D": "Incorreta. Não se inicia antibiótico nem se valida amostra comprovadamente inadequada."
    }
  },
  {
    "id": "ped-itu-006",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Métodos de coleta de urina",
    "enunciado": "Recém-nascido a termo com 14 dias de vida apresenta febre de 38,5 °C, hipoatividade e sucção débil ao seio materno. Qual é o método de coleta de urina para EAS e urocultura preconizado pelas diretrizes da Sociedade Brasileira de Pediatria e Academia Americana de Pediatria no período neonatal?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Cateterismo vesical estéril ou Punção suprapúbica; o saco coletor adesivo é expressamente contraindicado para diagnóstico de ITU no neonato."
      },
      {
        "id": "B",
        "texto": "Saco coletor adesivo trocado a cada 12 horas com dosagem de proteína C reativa."
      },
      {
        "id": "C",
        "texto": "Espremedura direta de fralda descartável com seringa estéril."
      },
      {
        "id": "D",
        "texto": "Coleta em comadre hospitalar desinfetada com hipoclorito."
      }
    ],
    "correta": "A",
    "comentarioGeral": "No período neonatal (< 28 dias), qualquer ITU deve ser tratada como sepse bacteriana neonatal tardia e potencial pielonefrite com risco de bacteriemia. Por isso, a coleta de urina exige método asséptico seguro: Cateterismo vesical ou Punção suprapúbica. O saco coletor é proscrito no neonato, pois além de atrasar o diagnóstico com falsos positivos, a infecção verdadeira exige isolamento preciso para guiar terapia parenteral.",
    "comentariosAlternativas": {
      "A": "Correta. No neonato, apenas métodos estéreis diretos (cateterismo ou PSP) são aceitos para definir conduta.",
      "B": "Incorreta. O saco coletor é contraindicado no neonato febril.",
      "C": "Incorreta. Espremer fraldas é uma prática errônea com 100% de contaminação e perda de elementos figurados.",
      "D": "Incorreta. Comadres não são recipientes estéreis adequados para urocultura."
    }
  },
  {
    "id": "ped-itu-007",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Métodos de coleta de urina",
    "enunciado": "Em um lactente de 5 meses no qual foi realizada punção suprapúbica com saída de 10 mL de urina límpida, qual o valor de corte de unidades formadoras de colônias por mililitro (UFC/mL) na urocultura que define bacteriúria significativa e confirma o diagnóstico de ITU?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Qualquer crescimento bacteriano de um único uropatógeno Gram-negativo (ex: ≥ 1 UFC/mL ou > 1.000 UFC/mL em algumas diretrizes)."
      },
      {
        "id": "B",
        "texto": "Apenas se houver mais de 100.000 UFC/mL associado a nitrito fortemente positivo."
      },
      {
        "id": "C",
        "texto": "Exclusivamente se isoladas três bactérias diferentes com contagem superior a 50.000 UFC/mL cada."
      },
      {
        "id": "D",
        "texto": "Apenas se houver contagem maior que 1.000.000 UFC/mL e glicose urinária elevada."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Como a urina no interior da bexiga é fisiologicamente estéril e a agulha da punção suprapúbica não passa pela uretra nem tem contato com a flora da pele genital, o achado de QUALQUER número de colônias (≥ 1 UFC/mL de bacilo Gram-negativo ou > 1.000 UFC/mL para cocos Gram-positivos) em amostra monomicrobiana é diagnóstico definitivo de infecção do trato urinário.",
    "comentariosAlternativas": {
      "A": "Correta. Na punção suprapúbica, qualquer crescimento bacteriano de patógeno típico confirma ITU.",
      "B": "Incorreta. O corte de 100.000 UFC/mL é para jato médio ou saco coletor histórico.",
      "C": "Incorreta. Crescimento polimicrobiano indica contaminação acidental por punção de alça intestinal.",
      "D": "Incorreta. Contagem de 1 milhão é desnecessariamente restritiva e geraria subdiagnóstico grave."
    }
  },
  {
    "id": "ped-itu-008",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Métodos de coleta de urina",
    "enunciado": "Menino de 9 anos, sem comorbidades prévias, comparece ao ambulatório com queixa de disúria e urina turva há 2 dias. É realizada coleta de urina por jato médio. A mãe pergunta se a criança pode urinar a qualquer hora do dia ou se é obrigatória a primeira urina da manhã. Qual é a recomendação correta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A urina com retenção vesical prévia de pelo menos 2 a 4 horas (ou a primeira da manhã) é preferível porque permite tempo adequado para as bactérias desdobrarem os nitratos em nitritos e acumularem leucócitos."
      },
      {
        "id": "B",
        "texto": "Deve-se forçar a ingesta imediata de 2 litros de água para que a criança urine nos próximos 5 minutos."
      },
      {
        "id": "C",
        "texto": "A urina deve ser colhida somente após cateterismo uretral de urgência."
      },
      {
        "id": "D",
        "texto": "A amostra da tarde é inválida porque o hormônio antidiurético inibe o crescimento de E. coli."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Para a pesquisa de nitrito e análise citológica fidedigna no EAS/urina tipo 1, a urina deve ter permanecido retida na bexiga por pelo menos 2 a 4 horas (ou a primeira urina da manhã). O teste do nitrito baseia-se na enzima nitrato-redutase bacteriana, que requer tempo de incubação na bexiga para converter o nitrato alimentar em nitrito. Forçar ingesta hídrica excessiva dilui a urina e causa falsos-negativos para leucocitúria e bacteriúria.",
    "comentariosAlternativas": {
      "A": "Correta. Retenção vesical de 2 a 4 horas otimiza a conversão de nitrito e concentração celular.",
      "B": "Incorreta. Hiper-hidratação forçada dilui excessivamente a urina, mascarando leucocitúria e contagem de colônias.",
      "C": "Incorreta. Criança de 9 anos continente coleta perfeitamente por jato médio espontâneo.",
      "D": "Incorreta. O ADH não exerce efeito antimicrobiano sobre enterobactérias."
    }
  },
  {
    "id": "ped-itu-009",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Métodos de coleta de urina",
    "enunciado": "Lactente de 11 meses feminina é submetida a sondagem vesical de alívio por febre persistente. A urocultura revela crescimento de 2.000 UFC/mL de Lactobacillus sp. e Corynebacterium sp. com EAS revelando 2 leucócitos por campo e nitrito negativo. Como esse resultado microbiológico deve ser interpretado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Contaminação da amostra por flora comensal periuretral e perineal; não indica ITU e não requer tratamento antibiótico."
      },
      {
        "id": "B",
        "texto": "Pielonefrite atípica com indicação imediata de ceftriaxona venosa por 14 dias."
      },
      {
        "id": "C",
        "texto": "Infecção fúngica invasiva com necessidade urgente de anfotericina B."
      },
      {
        "id": "D",
        "texto": "Tuberculose urogenital congênita com indicação de esquema RIPE."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Lactobacillus e Corynebacterium são componentes normais da microbiota da pele e genitália externa. O crescimento polimicrobiano de bactérias não uropatogênicas em contagens baixas, associado a EAS estritamente normal (sem piúria), representa contaminação durante a passagem da sonda pelo vestíbulo vaginal. Não é ITU e não deve ser tratada com antibióticos.",
    "comentariosAlternativas": {
      "A": "Correta. Bactérias comensais polimicrobianas sem leucocitúria representam contaminação de amostra.",
      "B": "Incorreta. Não há qualquer evidência de pielonefrite; tratar geraria indução de resistência bacteriana.",
      "C": "Incorreta. Não foram isolados fungos.",
      "D": "Incorreta. O bacilo de Koch não cresce em cultura bacteriana comum de 24 horas."
    }
  },
  {
    "id": "ped-itu-010",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Critérios diagnósticos de ITU",
    "enunciado": "Lactente feminina de 9 meses com febre de 39,2 °C há 3 dias é submetida a cateterismo vesical para investigação. O EAS revela leucocitúria de 85.000/mL (18 leucócitos/campo) e nitrito positivo. De acordo com as diretrizes da Academia Americana de Pediatria (AAP) e da Sociedade Brasileira de Pediatria (SBP), qual contagem de colônias de um único uropatógeno na urocultura colhida por cateterismo vesical confirma o diagnóstico de ITU em lactentes febris?",
    "alternativas": [
      {
        "id": "A",
        "texto": "≥ 50.000 UFC/mL (ou ≥ 10.000 UFC/mL associada a EAS francamente alterado com piúria)."
      },
      {
        "id": "B",
        "texto": "Exatamente 1.000.000 UFC/mL sem necessidade de piúria no sedimento urinário."
      },
      {
        "id": "C",
        "texto": "Apenas contagens superiores a 500.000 UFC/mL com presença de leveduras."
      },
      {
        "id": "D",
        "texto": "≥ 100 UFC/mL exclusivamente se o paciente estiver afecioso e afebril."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Pelo consenso da AAP (American Academy of Pediatrics) e diretrizes da SBP, em amostras obtidas por cateterismo vesical de alívio, a presença de ≥ 50.000 UFC/mL de um único patógeno bacteriano confirma a ITU. Diretrizes europeias e da SBP admitem ainda que contagens entre 10.000 e 50.000 UFC/mL são diagnósticas quando acompanhadas de manifestações clínicas e piúria inequívoca no EAS.",
    "comentariosAlternativas": {
      "A": "Correta. ≥ 50.000 UFC/mL (ou ≥ 10.000 UFC/mL com piúria evidente) no cateterismo vesical define ITU confirmada.",
      "B": "Incorreta. O corte de 1.000.000 UFC/mL é excessivamente alto e atrasaria o tratamento de lactentes.",
      "C": "Incorreta. Leveduras não são uropatógenos bacterianos típicos em lactentes hígidos comunitários.",
      "D": "Incorreta. 100 UFC/mL em cateterismo é insuficiente para afastar contaminação incidental."
    }
  },
  {
    "id": "ped-itu-011",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Critérios diagnósticos de ITU",
    "enunciado": "Menina de 6 anos com disúria, polaciúria e urgência miccional colheu urina por jato médio após higienização cuidadosa. O EAS revelou 60 leucócitos por campo, hemácias 10/campo e nitrito positivo. A urocultura isolou Escherichia coli. Qual ponto de corte clássico de unidades formadoras de colônias por mililitro (UFC/mL) colhidas por jato médio define bacteriúria significativa segundo os critérios de Kass?",
    "alternativas": [
      {
        "id": "A",
        "texto": "≥ 100.000 UFC/mL."
      },
      {
        "id": "B",
        "texto": "≥ 10.000 UFC/mL em amostra mista polimicrobiana."
      },
      {
        "id": "C",
        "texto": "Qualquer contagem acima de 500 UFC/mL independentemente de sintomas."
      },
      {
        "id": "D",
        "texto": "Apenas contagens superiores a 1.000.000 UFC/mL."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O critério clássico de Kass estabelece que, na coleta de urina espontânea por jato médio em crianças continentes com sintomas urinários baixos, o isolamento de ≥ 100.000 UFC/mL (10^5 UFC/mL) de um único uropatógeno bacteriano define bacteriúria significativa e confirma o diagnóstico de ITU com 95% de probabilidade de infecção verdadeira.",
    "comentariosAlternativas": {
      "A": "Correta. O corte clássico para jato médio é de ≥ 100.000 UFC/mL de um único uropatógeno.",
      "B": "Incorreta. Amostras polimicrobianas em jato médio indicam contaminação pela flora vulvovaginal.",
      "C": "Incorreta. 500 UFC/mL em jato médio não é considerado bacteriúria significativa.",
      "D": "Incorreta. 1 milhão de colônias não é o valor de corte habitual."
    }
  },
  {
    "id": "ped-itu-012",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Critérios diagnósticos de ITU",
    "enunciado": "Na análise da fita reagente (dipstick urinário) durante a triagem de um lactente febril no pronto-socorro, observa-se teste da esterase leucocitária positivo e teste do nitrito negativo. Qual das seguintes justificativas explica CORRETAMENTE por que o teste do nitrito pode ser falso-negativo na presença de infecção urinária ativa na infância?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Infecção causada por uropatógenos que não produzem a enzima nitrato-redutase (como Enterococcus faecalis e Staphylococcus saprophyticus) ou esvaziamento vesical frequente do lactente sem tempo hábil (mínimo de 4 horas) para a conversão de nitrato em nitrito."
      },
      {
        "id": "B",
        "texto": "Presença excessiva de vitamina D na urina que inibe a reação enzimática cromogênica."
      },
      {
        "id": "C",
        "texto": "Uso concomitante de paracetamol que oxida o nitrito em gás nitrogênio livre."
      },
      {
        "id": "D",
        "texto": "O teste do nitrito só é ativado na presença de glicosúria maciça."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O teste do nitrito tem altíssima especificidade (> 98%), mas sensibilidade moderada (50-60%). As principais causas de falso-negativo são: 1) Lactentes esvaziam a bexiga com frequência (a cada 30-60 minutos), impedindo que as bactérias permaneçam tempo suficiente (mínimo de 4 horas) para metabolizar o nitrato da dieta em nitrito; 2) Bactérias Gram-positivas (Enterococcus, Staphylococcus) e Pseudomonas aeruginosa NÃO produzem nitrato-redutase; 3) Dieta com baixo teor de nitratos vegetais.",
    "comentariosAlternativas": {
      "A": "Correta. Esvaziamento vesical precoce e patógenos não produtores de nitrato-redutase geram nitrito falso-negativo.",
      "B": "Incorreta. Vitamina C (ácido ascórbico) pode interferir, mas não a vitamina D.",
      "C": "Incorreta. Paracetamol não metaboliza nitritos urinários em gás nitrogênio.",
      "D": "Incorreta. A reação do nitrito independe de glicose urinária."
    }
  },
  {
    "id": "ped-itu-013",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Critérios diagnósticos de ITU",
    "enunciado": "Menina de 8 anos realiza exames admissionais para atividade física escolar. O EAS de rotina mostra densidade 1.020, pH 6,0, ausência de leucócitos (leucócitos 2/campo) e nitrito negativo. A urocultura de jato médio solicitada inadvertidamente acusa crescimento de 100.000 UFC/mL de Escherichia coli com perfil multissensível. A paciente está absolutamente assintomática, com bom ganho ponderal e sem queixas urinárias. Qual é a conduta preconizada para este achado de Bacteriúria Assintomática?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Não prescrever antibioticoterapia e tranquilizar os familiares, pois o tratamento de bacteriúria assintomática na infância não previne pielonefrite e elimina cepas colonizadoras de baixa virulência, predispondo à recolonização por cepas mais agressivas."
      },
      {
        "id": "B",
        "texto": "Internar imediatamente para ceftriaxona intravenosa por 14 dias para erradicar o foco."
      },
      {
        "id": "C",
        "texto": "Prescrever ciprofloxacino oral em dose dobrada por 21 dias associado a sulfametoxazol."
      },
      {
        "id": "D",
        "texto": "Indicar nefrectomia parcial profilática para evitar hipertensão arterial."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Bacteriúria Assintomática (BA) é a colonização da urina por bactérias sem resposta inflamatória tecidual (sem piúria) e sem sintomas sistêmicos ou locais. Em crianças sem alterações urológicas graves, as evidências científicas comprovam que a BA é inofensiva e seu tratamento com antibióticos NÃO é recomendado, pois destrói cepas comensais de baixa virulência que competem contra cepas uropatogênicas virulentas, além de induzir resistência bacteriana.",
    "comentariosAlternativas": {
      "A": "Correta. Não tratar bacteriúria assintomática em crianças saudáveis é a recomendação universal.",
      "B": "Incorreta. Internação e ceftriaxona seriam conduta iatrogênica e prejudicial.",
      "C": "Incorreta. Ciprofloxacino é desnecessário e contraindicado sem indicação formal estrita.",
      "D": "Incorreta. Cirurgia mutiladora completamente descabida."
    }
  },
  {
    "id": "ped-itu-014",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Critérios diagnósticos de ITU",
    "enunciado": "Menino de 3 anos com febre alta há 4 dias e hiperemia conjuntival bilateral sem secreção apresenta EAS com piúria maciça (> 100 leucócitos/campo) e nitrito negativo. A urocultura colhida por cateterismo vesical antes de qualquer antibiótico resulta ESTÉRIL (sem crescimento bacteriano após 72 horas). Dentre os seguintes diagnósticos pediátricos, qual patologia inflamatória sistêmica cursa classicamente com piúria estéril por uretrite estéril?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Doença de Kawasaki."
      },
      {
        "id": "B",
        "texto": "Insuficiência adrenal primária por hiperplasia congênita."
      },
      {
        "id": "C",
        "texto": "Deficiência congênita de lactase intestinal."
      },
      {
        "id": "D",
        "texto": "Anemia ferropriva refratária."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A piúria estéril (leucocitúria importante com urocultura negativa em paciente que não usou antibióticos prévios) é uma manifestação clássica da Doença de Kawasaki, decorrente de uretrite descamativa estéril por vasculite. Outras causas de piúria estéril incluem: infecções virais (adenovírus), tuberculose urinária, apendicite aguda ou peritonite contígua à bexiga, nefropatias tubulointersticiais e uso prévio recente de antimicrobianos.",
    "comentariosAlternativas": {
      "A": "Correta. A Doença de Kawasaki cursa com piúria estéril típica por uretrite inflamatória.",
      "B": "Incorreta. Hiperplasia adrenal cursa com desidratação perdedora de sal e ambiguidade genital, não piúria estéril.",
      "C": "Incorreta. Deficiência de lactase cursa com diarreia osmótica ácida.",
      "D": "Incorreta. Anemia por privação de ferro não induz infiltrado leucocitário na urina."
    }
  },
  {
    "id": "ped-itu-015",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Critérios diagnósticos de ITU",
    "enunciado": "Um lactente de 6 meses é avaliado por ITU febril. A urocultura de cateterismo vesical isola Proteus mirabilis com contagem de 80.000 UFC/mL. O EAS revela pH urinário persistentemente alcalino (pH 8,0) e presença de cristais de fosfato triplo (estruvita). Qual propriedade enzimática característica do Proteus mirabilis é responsável por essa alteração do pH e predispõe à litíase urinária na infância?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Produção da enzima Urease, que hidrolisa a ureia em amônia e dióxido de carbono, alcalinizando a urina e precipitando cálculos de estruvita (cálculos coraliformes)."
      },
      {
        "id": "B",
        "texto": "Secreção de betalactamase de espectro ampliado que degrada citrato urinário em oxalato."
      },
      {
        "id": "C",
        "texto": "Síntese de lipase ácida que saponifica as gorduras dos túbulos coletores renais."
      },
      {
        "id": "D",
        "texto": "Liberação de toxina eritrogênica que destrói a camada de glicosaminoglicanos da bexiga."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Proteus mirabilis (e outras bactérias como Klebsiella e Morganella) produz Urease, uma enzima que cliva a ureia gerando amônia (NH3) e elevando o pH urinário (> 7,5 a 8,0). Em meio alcalino e rico em amônia, ocorre a precipitação de fosfato amônio-magnesiano e carbonato-apatita, formando cálculos de estruvita (que podem assumir configuração coraliforme ocupando a pelve renal).",
    "comentariosAlternativas": {
      "A": "Correta. A produção de urease eleva o pH urinário e precipita cristais de estruvita, predispondo a cálculos coraliformes.",
      "B": "Incorreta. ESBL é mecanismo de resistência a betalactâmicos, sem efeito no citrato.",
      "C": "Incorreta. Proteus não secreta lipases calcificantes tubulares.",
      "D": "Incorreta. Toxina eritrogênica é produzida pelo Streptococcus pyogenes."
    }
  },
  {
    "id": "ped-itu-016",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Critérios diagnósticos de ITU",
    "enunciado": "Qual é o microrganismo etiológico responsável por mais de 80 a 90% dos casos de infecção do trato urinário comunitária na infância tanto em lactentes quanto em crianças maiores?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Escherichia coli uropatogênica (UPEC)."
      },
      {
        "id": "B",
        "texto": "Pseudomonas aeruginosa."
      },
      {
        "id": "C",
        "texto": "Streptococcus agalactiae (Streptococcus do grupo B)."
      },
      {
        "id": "D",
        "texto": "Candida albicans."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Escherichia coli uropatogênica (UPEC) é de longe o agente mais frequente em ITU comunitária pediátrica (responsável por 80 a 90% dos episódios). Possui fatores de virulência específicos como as fímbrias P (que se ligam aos receptores de digalactosídeo no epitélio uroepitelial renal promovendo ascensão) e fímbrias tipo 1 (aderência à bexiga). Outros agentes menos comuns incluem Klebsiella, Proteus, Enterobacter e Enterococcus.",
    "comentariosAlternativas": {
      "A": "Correta. E. coli é o agente causador de 80-90% de todas as ITUs comunitárias pediátricas.",
      "B": "Incorreta. Pseudomonas é patógeno nosocomial ou relacionado a manipulação cirúrgica/cateteres crônicos.",
      "C": "Incorreta. EGB causa sepse/meningite neonatal precoce, raramente ITU comunitária isolada.",
      "D": "Incorreta. Candida causa ITU hospitalar em imunossuprimidos ou uso prolongado de antibióticos de amplo espectro."
    }
  },
  {
    "id": "ped-itu-017",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Critérios diagnósticos de ITU",
    "enunciado": "De acordo com a diretriz da Academia Americana de Pediatria (AAP), para o diagnóstico confiável de infecção do trato urinário em lactentes entre 2 e 24 meses de vida, exige-se a presença OBRIGATÓRIA de quais dois componentes diagnósticos simultâneos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Evidência de piúria no sedimento urinário (leucocitúria > 5-10 leucócitos/campo ou teste positivo para esterase leucocitária/nitrito) E urocultura positiva com crescimento de ≥ 50.000 UFC/mL de um único patógeno colhida por cateterismo vesical ou punção suprapúbica."
      },
      {
        "id": "B",
        "texto": "Apenas urocultura positiva isolada com qualquer contagem, mesmo com EAS completamente normal e ausência de leucócitos."
      },
      {
        "id": "C",
        "texto": "Apenas febre alta isolada associada a PCR sérico acima de 100 mg/L sem necessidade de urocultura."
      },
      {
        "id": "D",
        "texto": "Visualização de cilindros granulosos na ausência de crescimento bacteriano."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A diretriz da AAP de 2011/2016 estipula categoricamente que, para evitar sobrediagnóstico e tratamento desnecessário de bacteriúria assintomática com contaminação, o diagnóstico de ITU em lactentes exige AMBOS: 1) Resposta inflamatória urinária documentada (piúria no EAS ≥ 10 leucócitos/mm³ ou esterase/nitrito positivos); E 2) Urocultura quantitativa positiva com ≥ 50.000 UFC/mL de um único uropatógeno em urina colhida adequadamente por cateter ou PSP.",
    "comentariosAlternativas": {
      "A": "Correta. A exigência simultânea de piúria (inflamação) e urocultura ≥ 50.000 UFC/mL em método estéril é a definição formal da AAP.",
      "B": "Incorreta. Urocultura positiva com EAS normal representa colonização/bacteriúria assintomática ou contaminação.",
      "C": "Incorreta. PCR não substitui a confirmação microbiológica urinária.",
      "D": "Incorreta. Cilindros granulosos são inespecíficos de lesão tubular e não fecham diagnóstico bacteriano."
    }
  },
  {
    "id": "ped-itu-018",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Cistite vs Pielonefrite",
    "enunciado": "Como se manifesta clinicamente a Infecção do Trato Urinário em lactentes menores de 1 a 2 anos em comparação com crianças em idade escolar?",
    "alternativas": [
      {
        "id": "A",
        "texto": "No lactente, predomina a apresentação inespecífica e sistêmica (febre alta sem foco, irritabilidade, vômitos, recusa alimentar e baixo ganho ponderal); na criança maior, os sintomas são localizatórios do trato urinário inferior (disúria, polaciúria, urgência e dor suprapúbica)."
      },
      {
        "id": "B",
        "texto": "No lactente, o sinal patognomônico é a queixa espontânea de disúria intensa e hematúria macroscópica em 100% dos casos."
      },
      {
        "id": "C",
        "texto": "A criança maior nunca apresenta febre, mesmo em casos de abscesso perirrenal grave."
      },
      {
        "id": "D",
        "texto": "O lactente sempre apresenta bexigoma doloroso e retenção urinária aguda com anúria total."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Quanto mais jovem a criança, mais inespecíficos e enganosos são os sintomas de ITU. Lactentes não expressam disúria verbalmente e costumam abrir o quadro com febre sem foco aparente, irritabilidade, perda ponderal, recusa alimentar e vômitos (sinais de ITU alta/pielonefrite). Já pré-escolares e escolares queixam-se de sintomas clássicos do trato urinário baixo (disúria, polaciúria, queimação miccional, enurese secundária e dor suprapúbica).",
    "comentariosAlternativas": {
      "A": "Correta. Lactentes manifestam febre sem foco e sintomas sistêmicos inespecíficos, enquanto escolares expressam sintomas miccionais localizatórios.",
      "B": "Incorreta. Lactentes não relatam disúria e hematúria franca é incomum.",
      "C": "Incorreta. Pielonefrite e abscesso na criança maior causam febre alta com calafrios.",
      "D": "Incorreta. A retenção aguda com anúria não é a regra na ITU simples do lactente."
    }
  },
  {
    "id": "ped-itu-019",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Cistite vs Pielonefrite",
    "enunciado": "Qual achado microscópico específico no sedimento urinário (EAS/urina tipo 1) é patognomônico de acometimento inflamatório/infeccioso do parênquima renal (pielonefrite aguda), permitindo diferenciá-la categoricamente de uma cistite baixa isolada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Cilindros leucocitários."
      },
      {
        "id": "B",
        "texto": "Cristais de oxalato de cálcio bi-hidratados."
      },
      {
        "id": "C",
        "texto": "Células epiteliais pavimentosas em abundância."
      },
      {
        "id": "D",
        "texto": "Hemácias isomórficas íntegras em pequena quantidade."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Os cilindros são estruturas formadas exclusivamente na luz dos túbulos contorcidos distais e ductos coletores renais, a partir da precipitação da mucoproteína de Tamm-Horsfall. A presença de Cilindros Leucocitários demonstra que os leucócitos infiltraram o parênquima renal tubular e foram moldados na luz tubular, sendo patognomônicos de nefropatia tubulointersticial/pielonefrite aguda e ausentes na cistite não complicada.",
    "comentariosAlternativas": {
      "A": "Correta. Cilindros leucocitários comprovam origem parenquimatosa renal da infecção (pielonefrite).",
      "B": "Incorreta. Cristais de oxalato refletem supersaturação de solutos na urina, comuns na desidratação.",
      "C": "Incorreta. Células pavimentosas indicam descamação do meato e contaminação por secreção genital externa.",
      "D": "Incorreta. Hemácias isomórficas podem surgir tanto na cistite hemorrágica quanto em litíase."
    }
  },
  {
    "id": "ped-itu-020",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Cistite vs Pielonefrite",
    "enunciado": "Menino de 5 anos com febre de 39,5 °C com calafrios, vômitos e dor em flanco direito. Exames laboratoriais mostram Leucócitos de 22.000/mm³ com 12% de bastões, Proteína C Reativa (PCR) de 140 mg/L (VR < 5) e Procalcitonina de 3,8 ng/mL (VR < 0,5). EAS com piúria maciça e nitrito positivo. Em contrapartida, sua irmã de 7 anos apresenta apenas disúria e polaciúria sem febre, com PCR de 3 mg/L e hemograma normal. Como esses marcadores laboratoriais auxiliam na distinção clínica entre ITU alta e baixa?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A elevação acentuada de provas de fase aguda (PCR e procalcitonina) e leucocitose com desvio refletem invasão do parênquima renal com resposta inflamatória sistêmica na pielonefrite, enquanto a cistite restringe-se à mucosa vesical superficial sem ativação inflamatória sistêmica."
      },
      {
        "id": "B",
        "texto": "A procalcitonina eleva-se exclusivamente na cistite fúngica, mantendo-se normal na pielonefrite bacteriana."
      },
      {
        "id": "C",
        "texto": "A cistite não complicada cursa com leucocitose superior a 30.000/mm³ em virtude da alta vascularização do trígono vesical."
      },
      {
        "id": "D",
        "texto": "A PCR é sintetizada pelos podócitos glomerulares e excretada apenas na cistite aguda."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A pielonefrite aguda é uma infecção invasiva do parênquima renal rica em citocinas inflamatórias (IL-1, IL-6, TNF-alfa), gerando resposta de fase aguda sistêmica: leucocitose com neutrofilia e desvio à esquerda, além de elevação expressiva de PCR e Procalcitonina. Já a cistite aguda afeta apenas a camada urotelial da bexiga, sem gerar febre, leucocitose ou elevação significativa de PCR sérico.",
    "comentariosAlternativas": {
      "A": "Correta. PCR e procalcitonina marcam infecção sistêmica/invasão tecidual parenquimatosa na pielonefrite.",
      "B": "Incorreta. A procalcitonina é um marcador específico de infecções bacterianas invasivas.",
      "C": "Incorreta. A cistite não causa leucocitose sistêmica exuberante.",
      "D": "Incorreta. A PCR é sintetizada pelo fígado sob estímulo de IL-6, não pelos podócitos."
    }
  },
  {
    "id": "ped-itu-021",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Cistite vs Pielonefrite",
    "enunciado": "Qual é o nome da manobra semiológica propedêutica caracterizada pelo desencadeamento de dor aguda quando o examinador realiza a percussão com a borda ulnar da mão fechada sobre a loja renal posterior (ângulo costovertebral), típica de pielonefrite em crianças escolares e adolescentes?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sinal de Giordano (punhopercussão lombar dolorosa)."
      },
      {
        "id": "B",
        "texto": "Sinal de Blumberg (descompressão brusca dolorosa)."
      },
      {
        "id": "C",
        "texto": "Sinal de Murphy (interrupção inspiratória súbita)."
      },
      {
        "id": "D",
        "texto": "Sinal de Rovsing (dor na FID à palpação da FIE)."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Sinal de Giordano (ou punhopercussão lombar) é a manobra em que a percussão delicada com o punho fechado sobre o ângulo costovertebral desencadeia dor intensa, sinalizando distensão da cápsula renal secundária a processo inflamatório/infeccioso agudo do parênquima renal (pielonefrite aguda) ou litíase obstrutiva. O sinal de Blumberg aponta para peritonite, Murphy para colecistite e Rovsing para apendicite.",
    "comentariosAlternativas": {
      "A": "Correta. O sinal de Giordano é a punhopercussão lombar positiva, marco da pielonefrite aguda.",
      "B": "Incorreta. Blumberg é sinal de irritação peritoneal.",
      "C": "Incorreta. Murphy indica colecistite aguda calculosa.",
      "D": "Incorreta. Rovsing é sinal de apendicite aguda."
    }
  },
  {
    "id": "ped-itu-022",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Cistite vs Pielonefrite",
    "enunciado": "Por que a diferenciação entre Pielonefrite Aguda e Cistite é de crucial relevância prognóstica na infância a longo prazo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Porque episódios repetidos de pielonefrite podem causar destruição focal do parênquima renal com formação de cicatrizes renais permanentes, predispondo a hipertensão arterial crônica, proteinúria e doença renal do estágio terminal."
      },
      {
        "id": "B",
        "texto": "Porque a cistite não tratada evolui invariavelmente para estenose de artéria renal congênita."
      },
      {
        "id": "C",
        "texto": "Porque a pielonefrite aguda é uma alteração autolimitada que nunca deixa qualquer lesão anatômica permanente."
      },
      {
        "id": "D",
        "texto": "Porque a cistite é a principal causa de raquitismo dependente de vitamina D tipo 1."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A grande preocupação com a ITU alta (pielonefrite) na infância reside no fato de que a reação inflamatória intersticial purulenta leva a isquemia e fibrose com perda de néfrons, gerando as temidas Cicatrizes Renais (nefropatia de refluxo). Crianças com cicatrizes renais bilaterais extensas têm risco elevado de desenvolver hipertensão arterial secundária, pré-eclâmpsia no futuro e insuficiência renal crônica. A cistite isolada não afeta o parênquima e não causa cicatrizes renais.",
    "comentariosAlternativas": {
      "A": "Correta. Cicatrizes renais, hipertensão e doença renal crônica são sequelas diretas de pielonefrites.",
      "B": "Incorreta. A cistite não causa estenose de artéria renal (que decorre de displasia fibromuscular ou Takayasu).",
      "C": "Incorreta. Pielonefrite pode deixar cicatrizes anatômicas graves e irreversíveis.",
      "D": "Incorreta. Cistite não altera o metabolismo mineral de vitamina D."
    }
  },
  {
    "id": "ped-itu-023",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Cistite vs Pielonefrite",
    "enunciado": "Por qual razão farmacocinética fundamental o antimicrobiano NITROFURANTOÍNA é formalmente CONTRAINDICADO para o tratamento da Pielonefrite Aguda febril na infância, mesmo quando a urocultura acusa sensibilidade in vitro a essa droga?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Porque a nitrofurantoína atinge excelentes concentrações na luz da bexiga, mas apresenta níveis séricos e teciduais desprezíveis ou indetectáveis no parênquima renal."
      },
      {
        "id": "B",
        "texto": "Porque a droga induz necrose tubular aguda fulminante em mais de 90% dos pacientes com pielonefrite."
      },
      {
        "id": "C",
        "texto": "Porque a nitrofurantoína alcaliniza a urina, estimulando a multiplicação de Escherichia coli."
      },
      {
        "id": "D",
        "texto": "Porque ela só tem ação farmacológica contra vírus RNA envelopados."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Nitrofurantoína é rapidamente absorvida no trato gastrointestinal e quase totalmente eliminada por filtração glomerular e secreção tubular diretamente na urina, alcançando níveis terapêuticos elevados na bexiga (ideal para CISTITE). No entanto, seus níveis séricos e penetração no tecido parenquimatoso renal são praticamente nulos. Tratar pielonefrite com nitrofurantoína equivale a não tratar a infecção renal, levando à persistência bacteriana, bacteriemia, sepse e formação de cicatrizes renais.",
    "comentariosAlternativas": {
      "A": "Correta. Ausência de concentração tecidual e sérica no parênquima renal contraindica a nitrofurantoína na pielonefrite.",
      "B": "Incorreta. Não induz necrose tubular em 90%; o problema é a falta de concentração tecidual renal.",
      "C": "Incorreta. Ela não alcaliniza a urina.",
      "D": "Incorreta. É um antibacteriano sintético com ação contra bactérias Gram-negativas e algumas Gram-positivas."
    }
  },
  {
    "id": "ped-itu-024",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Cistite vs Pielonefrite",
    "enunciado": "Lactente de 10 meses é internado com diagnóstico de pielonefrite aguda. Durante a internação, a densidade urinária no EAS mantém-se persistentemente baixa (1.002 a 1.005), apesar de sinais de desidratação leve com sede ávida. Qual alteração fisiopatológica tubular transitória explica essa incapacidade de concentrar a urina durante a pielonefrite aguda?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Perda transitória da hipertonicidade da medula renal por inflamação dos túbulos coletores e alça de Henle, gerando defeito transitório de concentração urinária."
      },
      {
        "id": "B",
        "texto": "Supressão total irreversível da síntese hipotalâmica de vasopressina (ADH)."
      },
      {
        "id": "C",
        "texto": "Destruição congênita completa de todas as arteríolas aferentes glomerulares."
      },
      {
        "id": "D",
        "texto": "Excreção massiva de insulina ativa na luz da bexiga com diurese osmótica pura."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na pielonefrite aguda, a infiltração inflamatória e o edema local na medula renal e túbulos coletores prejudicam o mecanismo contracorrente da alça de Henle e a resposta à vasopressina. Como resultado, ocorre um defeito transitório na capacidade de concentrar a urina (isostenúria/hipostenúria com densidade < 1.010), que se recupera semanas após o tratamento eficaz da infecção.",
    "comentariosAlternativas": {
      "A": "Correta. O edema e infiltrado inflamatório medular causam defeito transitório na capacidade de concentração urinária.",
      "B": "Incorreta. A síntese de ADH no eixo hipotálamo-hipofisário está preservada.",
      "C": "Incorreta. Não há destruição congênita de arteríolas aferentes.",
      "D": "Incorreta. A glicemia e a insulina não estão desreguladas dessa forma."
    }
  },
  {
    "id": "ped-itu-025",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Cistite vs Pielonefrite",
    "enunciado": "Menina de 7 anos apresenta disúria, polaciúria e urgência miccional sem febre (temperatura axilar de 36,6 °C) e sem dor lombar. O abdome é indolor e flácido. O sedimento urinário revela 45 leucócitos/campo e nitrito positivo. Como esse quadro clínico deve ser classificado e qual é a duração habitual do tratamento antimicrobiano oral recomendado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Cistite aguda (infecção do trato urinário baixo); tratada com antimicrobiano oral por 3 a 5 dias."
      },
      {
        "id": "B",
        "texto": "Pielonefrite aguda grave; tratada com internação e ceftriaxona venosa por 21 dias."
      },
      {
        "id": "C",
        "texto": "Síndrome nefrítica aguda; tratada com pulsoterapia com metilprednisolona por 5 dias."
      },
      {
        "id": "D",
        "texto": "Bacteriúria assintomática crônica; não deve receber qualquer tipo de acompanhamento."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A presença de sintomas estritamente vesicais (disúria, polaciúria, urgência) sem febre e sem manifestações sistêmicas define Cistite Aguda (ITU baixa). Em meninas previamente saudáveis e continentes, cursos curtos de antimicrobianos orais (3 a 5 dias) com Nitrofurantoína, Cefalexina ou Cefuroxima são altamente eficazes para erradicar a infecção vesical e minimizar efeitos adversos e seleção de resistência.",
    "comentariosAlternativas": {
      "A": "Correta. Cistite aguda tratada por 3 a 5 dias com antibiótico oral ambulatorial.",
      "B": "Incorreta. Na ausência de febre e toxemia, não se classifica como pielonefrite nem se interna para antibioticoterapia venosa prolongada.",
      "C": "Incorreta. Não há hipertensão, edema nem hematúria dismórfica da síndrome nefrítica.",
      "D": "Incorreta. A paciente é francamente sintomática (disúria e polaciúria), o que afasta o conceito de bacteriúria assintomática."
    }
  },
  {
    "id": "ped-itu-026",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Tratamento antimicrobiano",
    "enunciado": "Menina de 6 anos, sem antecedentes mórbidos, apresenta disúria e polaciúria há 2 dias, afebril e em excelente estado geral. O EAS confirma piúria e nitrito positivo. Não há vômitos e a criança aceita líquidos normalmente. Qual é o antimicrobiano oral de primeira escolha e a duração recomendada para o tratamento dessa cistite não complicada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Nitrofurantoína por via oral (5 a 7 mg/kg/dia dividida em 4 doses) por 3 a 5 dias."
      },
      {
        "id": "B",
        "texto": "Ceftriaxona intravenosa (100 mg/kg/dia) em regime hospitalar por 14 dias."
      },
      {
        "id": "C",
        "texto": "Vancomicina oral associada a metronidazol por 21 dias consecutivos."
      },
      {
        "id": "D",
        "texto": "Ciprofloxacino intravenoso contínuo por 1 mês para profilaxia de bacteriemia."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Para a cistite aguda não complicada em crianças em idade escolar, a Nitrofurantoína por via oral (5 a 7 mg/kg/dia em 4 tomadas, durante 3 a 5 dias) é uma excelente escolha de primeira linha. Possui baixíssimas taxas de resistência entre cepas de E. coli, mínima perturbação da microbiota intestinal normal e excelente concentração na urina da bexiga.",
    "comentariosAlternativas": {
      "A": "Correta. A nitrofurantoína por 3 a 5 dias é opção de primeira linha ideal para cistite não complicada.",
      "B": "Incorreta. Ceftriaxona venosa internada é reservada para pielonefrite grave ou com toxemia, não para cistite simples.",
      "C": "Incorreta. Vancomicina oral trata colite por C. difficile, não age em ITU por enterobactérias.",
      "D": "Incorreta. Quinolonas são desnecessárias, caras e com risco de toxicidade musculoesquelética na infância."
    }
  },
  {
    "id": "ped-itu-027",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Tratamento antimicrobiano",
    "enunciado": "Lactente de 11 meses feminina apresenta febre de 38,7 °C há 24 horas. Está em bom estado geral, corada, hidratada, ativa e aceitando bem o aleitamento materno e a dieta complementar, sem vômitos. O EAS de cateterismo vesical mostra leucocitúria acentuada e nitrito positivo. A mãe é orientada e possui fácil acesso ao serviço de saúde. Qual conduta terapêutica antimicrobiana é recomendada segundo a Academia Americana de Pediatria (AAP)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Tratamento ambulatorial por via oral com Cefalosporina (como Cefuroxima axetil, Cefixima ou Cefalexina) ou Amoxicilina-Clavulanato por 7 a 10 dias, com reavaliação clínica obrigatória em 48 a 72 horas."
      },
      {
        "id": "B",
        "texto": "Internação obrigatória em UTI Pediátrica para infusão de Meropenem por 28 dias."
      },
      {
        "id": "C",
        "texto": "Prescrição de Nitrofurantoína oral por 3 dias em dose única diária."
      },
      {
        "id": "D",
        "texto": "Conduta expectante sem antibióticos até a liberação do resultado da urocultura em 5 dias."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Ensaios clínicos randomizados demonstraram que o tratamento oral ambulatorial da pielonefrite em lactentes maiores de 2 a 3 meses em bom estado geral, bem hidratados e sem vômitos é tão eficaz quanto a terapia parenteral inicial na prevenção de cicatrizes renais e cura clínica. As opções de primeira linha incluem cefalosporinas de 2ª ou 3ª geração oral (Cefuroxima, Cefixima), Cefalexina ou Amoxicilina-clavulanato por 7 a 10 dias, com reavaliação clínica cuidadosa em 48-72h.",
    "comentariosAlternativas": {
      "A": "Correta. Crianças sem toxemia e que toleram via oral podem ser tratadas com antibióticos orais ambulatoriais.",
      "B": "Incorreta. Meropenem em UTI é tratamento desproporcional para lactente hígido estável.",
      "C": "Incorreta. Nitrofurantoína não atinge níveis teciduais no parênquima renal e é contraindicada na pielonefrite.",
      "D": "Incorreta. Retardar o tratamento da pielonefrite aumenta o risco de dano renal permanente e cicatrizes."
    }
  },
  {
    "id": "ped-itu-028",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Tratamento antimicrobiano",
    "enunciado": "Por qual razão a Ampicilina ou a Amoxicilina isoladas (sem inibidor de betalactamase) NÃO são recomendadas como opções de primeira linha para o tratamento empírico de ITU comunitária na infância?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Devido às elevadíssimas taxas de resistência bacteriana da Escherichia coli comunitária (frequentemente superiores a 40-50%) decorrentes da produção de betalactamases clássicas plasmidiais."
      },
      {
        "id": "B",
        "texto": "Porque a amoxicilina não é absorvida pelo trato digestivo de crianças menores de 5 anos."
      },
      {
        "id": "C",
        "texto": "Porque a droga sofre inativação pela urina ácida em todos os indivíduos saudáveis."
      },
      {
        "id": "D",
        "texto": "Devido ao risco de precipitação de cristais intratubulares irreversíveis nos rins."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Mais de 40 a 50% das cepas de E. coli comunitárias no Brasil e no mundo são resistentes à ampicilina e à amoxicilina devido à ampla disseminação de betalactamases de espectro estreito (como TEM-1 e SHV-1). O uso dessas drogas em monoterapia empírica resulta em alta taxa de falha terapêutica, progressão de lesão renal e choque séptico.",
    "comentariosAlternativas": {
      "A": "Correta. A alta taxa de resistência comunitária da E. coli contra aminopenicilinas isoladas desaconselha seu uso empírico.",
      "B": "Incorreta. A amoxicilina tem excelente absorção oral em qualquer faixa etária.",
      "C": "Incorreta. A amoxicilina permanece ativa e estável em pH urinário fisiológico.",
      "D": "Incorreta. Aminopenicilinas não precipitam cristais intratubulares obstrutivos nas doses usuais."
    }
  },
  {
    "id": "ped-itu-029",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Tratamento antimicrobiano",
    "enunciado": "De acordo com as diretrizes internacionais da IDSA e SBP, qual é o limite máximo tolerável de resistência bacteriana local da Escherichia coli comunitária contra o Sulfametoxazol-Trimetoprima (SMX-TMP) para que essa combinação ainda possa ser utilizada de forma empírica segura no tratamento de ITU?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Taxa de resistência local inferior a 20%."
      },
      {
        "id": "B",
        "texto": "Taxa de resistência local de até 85%."
      },
      {
        "id": "C",
        "texto": "Apenas se a taxa de resistência for rigorosamente de 0%."
      },
      {
        "id": "D",
        "texto": "A resistência bacteriana não interfere na eficácia clínica do SMX-TMP."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Pelas diretrizes de infectologia pediátrica, o Sulfametoxazol-Trimetoprima só deve ser prescrito empiricamente se os dados epidemiológicos da comunidade local demonstrarem taxas de resistência da E. coli inferiores a 20%. Quando a taxa de resistência local ultrapassa 20% (como ocorre na maioria das cidades brasileiras, onde atinge 30-40%), o SMX-TMP não deve ser empregado empiricamente para tratar ITU aguda.",
    "comentariosAlternativas": {
      "A": "Correta. Taxa de resistência local abaixo de 20% é o limite preconizado pelas diretrizes.",
      "B": "Incorreta. Resistência de 85% levaria a falha terapêutica na grande maioria dos pacientes.",
      "C": "Incorreta. Não se exige 0%; 20% é a margem de segurança epidemiológica.",
      "D": "Incorreta. A resistência in vitro correlaciona-se diretamente com falha clínica e bacteriológica."
    }
  },
  {
    "id": "ped-itu-030",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Tratamento antimicrobiano",
    "enunciado": "Lactente de 3 meses é admitido no pronto-socorro com pielonefrite aguda febril e vômitos persistentes. A equipe decide iniciar Ceftriaxona por via intravenosa. Qual é a posologia diária habitual recomendada da Ceftriaxona para o tratamento de pielonefrite aguda na infância e sua principal vantagem posológica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "50 a 100 mg/kg/dia administrada em dose única diária (a cada 24 horas), facilitando a comodidade de administração e transição para hospital-dia."
      },
      {
        "id": "B",
        "texto": "10 mg/kg/dia fracionada em infusão contínua por bomba a cada 2 horas."
      },
      {
        "id": "C",
        "texto": "500 mg/kg/dia administrada exclusivamente a cada 4 horas."
      },
      {
        "id": "D",
        "texto": "1 mg/kg/dia por via subcutânea quinzenal."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Ceftriaxona é uma cefalosporina de 3ª geração de amplo espectro com excelente atividade contra enterobactérias uropatogênicas. Sua longa meia-vida plasmática permite a administração em dose única diária (50 a 100 mg/kg/dia uma vez ao dia, EV ou IM), tornando-a a droga parenteral de eleição em serviços de emergência pediátrica.",
    "comentariosAlternativas": {
      "A": "Correta. 50 a 100 mg/kg/dia uma vez ao dia (dose única) é a posologia padrão e prática da ceftriaxona.",
      "B": "Incorreta. Fracionamento a cada 2 horas é desnecessário e inviável.",
      "C": "Incorreta. 500 mg/kg/dia é dose tóxica extrema.",
      "D": "Incorreta. Dose subótima e via incorreta para infecção aguda."
    }
  },
  {
    "id": "ped-itu-031",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Tratamento antimicrobiano",
    "enunciado": "Durante a internação de uma criança de 2 anos com pielonefrite por bacilo Gram-negativo multirresistente, prescreve-se Amicacina intravenosa em regime de dose única diária (15 mg/kg/dia uma vez ao dia). Quais são as duas principais toxicidades farmacológicas dos aminoglicosídeos que exigem monitorização atenta da função renal e da audição?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Nefrotoxicidade (por acúmulo nas células tubulares proximais) e Ototoxicidade (coclear e vestibular)."
      },
      {
        "id": "B",
        "texto": "Cardiomiopatia dilatada aguda e insuficiência hepática fulminante."
      },
      {
        "id": "C",
        "texto": "Hipertensão intracraniana idiopática e cegueira cortical."
      },
      {
        "id": "D",
        "texto": "Anemia hemolítica autoimune e cetoacidose euglicêmica."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Os aminoglicosídeos (gentamicina, amicacina) são potentes bactericidas com efeito pós-antibiótico dependente da concentração de pico. As duas toxicidades clássicas e limitantes são: 1) Nefrotoxicidade (lesão tubular renal aguda, geralmente não oligúrica e reversível); 2) Ototoxicidade (lesão das células ciliadas da cóclea e do labirinto vestibular, frequentemente irreversível). O regime de dose única diária maximiza a eficácia bactericida e minimiza a toxicidade.",
    "comentariosAlternativas": {
      "A": "Correta. Nefrotoxicidade e ototoxicidade são os efeitos adversos clássicos dos aminoglicosídeos.",
      "B": "Incorreta. Aminoglicosídeos não causam cardiomiopatia dilatada nem falência hepática típica.",
      "C": "Incorreta. Não provocam hipertensão intracraniana idiopática.",
      "D": "Incorreta. Não induzem cetoacidose nem hemólise imune."
    }
  },
  {
    "id": "ped-itu-032",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Tratamento antimicrobiano",
    "enunciado": "Qual é o tempo total de tratamento antimicrobiano preconizado pelas diretrizes da AAP e Sociedade Brasileira de Pediatria para um episódio típico de Pielonefrite Aguda na infância que apresentou excelente e rápida resposta clínica (defervescência em 48 horas)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "7 a 10 dias (podendo estender-se até 14 dias em casos graves ou resposta mais lenta)."
      },
      {
        "id": "B",
        "texto": "Exatamente 3 dias em dose única."
      },
      {
        "id": "C",
        "texto": "Mínimo obrigatório de 60 dias de antibioticoterapia contínua parenteral."
      },
      {
        "id": "D",
        "texto": "Apenas 24 horas após a primeira dose."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A duração recomendada do tratamento para Pielonefrite Aguda na infância é de 7 a 10 dias (podendo chegar a 14 dias em crianças com resposta inicial lenta, uropatias obstrutivas complexas ou neonatos). Cursos inferiores a 7 dias associam-se a taxas inaceitáveis de recidiva precoce da infecção renal, enquanto cursos acima de 14 dias não agregam benefício clínico e ampliam a seleção de resistência.",
    "comentariosAlternativas": {
      "A": "Correta. 7 a 10 dias é o tempo padrão preconizado para tratamento de pielonefrite com boa resposta.",
      "B": "Incorreta. 3 dias é esquema para cistite baixa em crianças maiores, insuficiente para infecção do parênquima renal.",
      "C": "Incorreta. 60 dias é tempo excessivo e causaria indução de superbactérias.",
      "D": "Incorreta. 24 horas não erradica o foco parenquimatoso renal."
    }
  },
  {
    "id": "ped-itu-033",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Tratamento antimicrobiano",
    "enunciado": "Lactente de 8 meses com pielonefrite aguda foi internado e iniciado Ceftriaxona venosa empírica. No 3º dia de internação, a criança está afebril há 36 horas, ativa, mamando normalmente. O resultado definitivo da urocultura revela Escherichia coli (> 100.000 UFC/mL) sensível a ampicilina, cefalexina, cefuroxima, ciprofloxacino e ceftriaxona. Qual é a conduta farmacológica mais adequada (desescalonamento / terapia sequencial oral)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Transicionar para antibioticoterapia por via oral com Cefalexina ou Cefuroxima para completar o tempo total de 7 a 10 dias de tratamento, permitindo a alta hospitalar precoce."
      },
      {
        "id": "B",
        "texto": "Manter a Ceftriaxona intravenosa internado até o 21º dia para garantir esterilização tecidual."
      },
      {
        "id": "C",
        "texto": "Trocar imediatamente para Meropenem venoso por 14 dias pelo risco de resistência tardia."
      },
      {
        "id": "D",
        "texto": "Suspender todo o tratamento antibiótico imediatamente pois a criança já está afebril."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A terapia sequencial (troca de antibiótico venoso para via oral quando o paciente atinge estabilidade clínica, afebril por > 24-48 horas e com boa tolerância oral) é uma prática segura e padrão em pediatria (\"step-down therapy\"). Com o antibiograma disponível, faz-se o desescalonamento para uma cefalosporina oral de menor espectro (como Cefalexina ou Cefuroxima), completando 7 a 10 dias totais em casa.",
    "comentariosAlternativas": {
      "A": "Correta. Desescalonamento para via oral com cefalexina/cefuroxima para alta hospitalar e completar 7-10 dias.",
      "B": "Incorreta. Manter Ceftriaxona venosa desnecessariamente expõe a criança a infecções hospitalares e custos.",
      "C": "Incorreta. Escalonamento para carbapenêmico em bactéria sensível viola as regras de stewardship antimicrobiano.",
      "D": "Incorreta. Suspender precocemente no 3º dia causará recidiva da pielonefrite e formação de cicatrizes."
    }
  },
  {
    "id": "ped-itu-034",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Tratamento antimicrobiano",
    "enunciado": "Lactente de 1 ano com pielonefrite aguda confirmada por E. coli recebe Ceftriaxona intravenosa há 72 horas em dose correta, porém persiste com picos febris diários de 39,5 °C, irritabilidade e toxemia. Qual é a conduta prioritária imediata para esclarecer a causa dessa falha terapêutica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realizar Ultrassonografia de Rins e Vias Urinárias com urgência para investigar complicações supurativas (abscesso renal ou perirrenal, nefrite lobar aguda) ou uropatia obstrutiva congênita associada."
      },
      {
        "id": "B",
        "texto": "Adicionar paracetamol em dose dobrada e aguardar mais 5 dias sem novos exames."
      },
      {
        "id": "C",
        "texto": "Suspender a hidratação venosa e iniciar furosemida em altas doses."
      },
      {
        "id": "D",
        "texto": "Encaminhar para biópsia renal percutânea imediata sob anestesia geral."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A resposta clínica ao tratamento adequado da pielonefrite geralmente ocorre em 24 a 48 horas (queda da febre e melhora do estado geral). A persistência de febre alta após 48 a 72 horas de antibioticoterapia venosa adequada define falha terapêutica e exige investigação IMEDIATA com Ultrassonografia de urgência para afastar abscesso renal/perirrenal, nefrite focal aguda (lobar) ou uropatia obstrutiva (que exija drenagem urológica de emergência).",
    "comentariosAlternativas": {
      "A": "Correta. USG urgente é mandatória após 48-72h de febre refratária para pesquisar abscesso ou obstrução.",
      "B": "Incorreta. Ignorar a febre persistente atrasa o diagnóstico de complicações que podem necessitar de drenagem.",
      "C": "Incorreta. Diuréticos podem causar hipovolemia sem resolver a causa infecciosa.",
      "D": "Incorreta. Biópsia renal não tem indicação na pielonefrite aguda bacteriana."
    }
  },
  {
    "id": "ped-itu-035",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Indicações de internação hospitalar",
    "enunciado": "Recém-nascido com 18 dias de vida, a termo, apresenta febre de 38,4 °C, letargia, recusa alimentar e icterícia zona 3 de Kramer. O cateterismo vesical revela urina turva com 80 leucócitos/campo e bacteriúria. Diante da idade neonatal e risco iminente de urossepse, qual conduta e esquema antimicrobiano empírico inicial são os mais indicados?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Internação hospitalar obrigatória com rastreio de sepse neonatal tardia (incluindo hemoculturas e punção lombar) e início imediato de Ampicilina associada a Gentamicina (ou amicacina) por via intravenosa."
      },
      {
        "id": "B",
        "texto": "Tratamento ambulatorial com nitrofurantoína em suspensão oral por 7 dias."
      },
      {
        "id": "C",
        "texto": "Prescrição de ciprofloxacino oral domiciliar com retorno em 1 semana."
      },
      {
        "id": "D",
        "texto": "Apenas banho morno e observação domiciliar até o resultado da urocultura."
      }
    ],
    "correta": "A",
    "comentarioGeral": "No período neonatal (< 28-30 dias), a barreira hematológica e a imunidade celular são imaturas, e a ITU é frequentemente uma manifestação de bacteriemia sistêmica (urossepse) com risco de meningite concomitante. A internação hospitalar é mandatória em 100% dos recém-nascidos. O esquema clássico de primeira linha no período neonatal é Ampicilina associada a um Aminoglicosídeo (Gentamicina ou Amicacina), cobrindo Enterococcus faecalis, Listeria monocytogenes, Streptococcus agalactiae e bacilos Gram-negativos entéricos.",
    "comentariosAlternativas": {
      "A": "Correta. Internação mandatória com investigação completa de sepse tardia e Ampicilina + Gentamicina EV.",
      "B": "Incorreta. Nitrofurantoína é contraindicada em neonatos pelo risco de anemia hemolítica e não trata pielonefrite/sepse.",
      "C": "Incorreta. Tratamento ambulatorial é contraindicado no período neonatal febril.",
      "D": "Incorreta. Conduta omissiva que levaria a choque séptico neonatal fatal."
    }
  },
  {
    "id": "ped-itu-036",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Indicações de internação hospitalar",
    "enunciado": "Lactente de 7 meses é trazido à sala de emergência com história de febre alta há 48 horas. Ao exame físico: prostrado, gemente, tempo de enchimento capilar de 4 segundos, pulsos periféricos filiformes, taquicárdico (FC: 195 bpm) e PA no percentil 5. O sedimento urinário colhido por cateterismo revela piúria maciça e nitrito positivo. Qual é a conduta prioritária imediata?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Classificar como Choque Séptico de foco urinário (Urossepse), proceder à ressuscitação volêmica imediata com cristaloides isotônicos (20 mL/kg) em bólus e administrar Ceftriaxona intravenosa na primeira hora (hora de ouro)."
      },
      {
        "id": "B",
        "texto": "Prescrever amoxicilina oral e aguardar melhora do enchimento capilar na sala de espera."
      },
      {
        "id": "C",
        "texto": "Realizar lavagem gástrica descompressiva com carvão ativado."
      },
      {
        "id": "D",
        "texto": "Encaminhar ambulatorialmente para ecografia urológica antes de qualquer medicamento."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O paciente apresenta sinais clínicos evidentes de choque séptico descompensado/frio (tempo de enchimento capilar > 3 segundos, pulsos filiformes, taquicardia extrema e hipotensão limítrofe) secundário a pielonefrite aguda invasiva (urossepse). O manejo na \"hora de ouro\" exige: estabilização da via aérea e oxigênio, expansão volêmica vigorosa com solução cristaloide isotônica a 20 mL/kg e antibioticoterapia parenteral de amplo espectro (Ceftriaxona EV) iniciada na primeira hora.",
    "comentariosAlternativas": {
      "A": "Correta. Reconhece choque séptico de foco urinário e prioriza ressuscitação volêmica rápida e ceftriaxona na 1ª hora.",
      "B": "Incorreta. Conduta inaceitável que levaria a parada cardiorrespiratória por choque distributivo/hipovolêmico.",
      "C": "Incorreta. Não se trata de intoxicação exógena.",
      "D": "Incorreta. Não se retarda a ressuscitação e antibióticos para exames de imagem."
    }
  },
  {
    "id": "ped-itu-037",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Indicações de internação hospitalar",
    "enunciado": "Lactente de 5 meses é diagnosticada com pielonefrite aguda. A mãe relata que a criança apresentou 8 episódios de vômitos nas últimas 6 horas, não consegue reter nenhum líquido e vomitou imediatamente a primeira dose do antibiótico oral prescrito no posto. Ao exame: mucosas secas, olhos encovados, turgor diminuído da pele e perda ponderal de 7%. Qual é a indicação inequívoca de internação hospitalar neste caso?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Desidratação clínica moderada associada a intolerância à via oral por vômitos incoercíveis, impedindo a absorção segura de antimicrobianos orais."
      },
      {
        "id": "B",
        "texto": "Presença isolada de turgor pastoso sem qualquer relevância volêmica."
      },
      {
        "id": "C",
        "texto": "Apenas a constatação de febre axilar superior a 37,8 °C."
      },
      {
        "id": "D",
        "texto": "Necessidade de realizar tomografia computadorizada contrastada de corpo inteiro."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A intolerância à via oral decorrente de vômitos incoercíveis e a presença de desidratação clínica são critérios absolutos para internação hospitalar em crianças com ITU. Nessas condições, a absorção de antibióticos por via oral é errática ou impossível, e o risco de choque hipovolêmico sobreposto à infecção bacteriana exige hidratação venosa contínua e antimicrobianos parenterais.",
    "comentariosAlternativas": {
      "A": "Correta. Vômitos incoercíveis e desidratação impedem terapia oral e exigem internação e via parenteral.",
      "B": "Incorreta. A desidratação é clinicamente significativa (perda de 7% do peso corporal).",
      "C": "Incorreta. Febre isolada sem desidratação ou vômitos não obriga internação se a criança tolerar medicação oral.",
      "D": "Incorreta. TC de corpo inteiro não tem indicação na pielonefrite não complicada."
    }
  },
  {
    "id": "ped-itu-038",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Indicações de internação hospitalar",
    "enunciado": "Menino de 4 anos com diagnóstico prévio de Rim Único funcionante congênito (agenesia renal unilateral esquerda) apresenta febre de 39,2 °C, dor lombar direita intensa e urina turva com EAS evidenciando piúria e nitrito positivo. Creatinina sérica basal era 0,4 mg/dL e encontra-se agora em 1,3 mg/dL. Qual é a justificativa para a internação hospitalar imediata desta criança?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Paciente portador de Rim Único que desenvolveu Injúria Renal Aguda associada à pielonefrite, com alto risco de perda irreversível da massa nefronal funcionante remanescente."
      },
      {
        "id": "B",
        "texto": "Indicação exclusiva de hemodiálise de urgência imediata sem uso de antibióticos."
      },
      {
        "id": "C",
        "texto": "Apenas para realização de cistoscopia diagnóstica sob sedação contínua."
      },
      {
        "id": "D",
        "texto": "Risco de contaminação cruzada para os familiares no domicílio."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Crianças com anomalias estruturais complexas, nefropatias prévias, transplante renal ou rim único funcionante constituem um grupo de altíssimo risco na vigência de pielonefrite aguda. A elevação aguda da escória nitrogenada (creatinina de 0,4 para 1,3 mg/dL) confirma Injúria Renal Aguda (IRA) sobreposta. A internação hospitalar com antibioticoterapia parenteral rápida e monitorização estrita do débito urinário e da volemia é indispensável para proteger a função renal do rim solitário.",
    "comentariosAlternativas": {
      "A": "Correta. Rim único funcionante com perda aguda de função renal exige internação e terapia parenteral protetora.",
      "B": "Incorreta. Não há indicação de diálise imediata antes da ressuscitação e tratamento clínico da infecção.",
      "C": "Incorreta. Cistoscopia na fase aguda inflamatória não está indicada.",
      "D": "Incorreta. ITU por E. coli não é infecção de transmissão interpessoal respiratória."
    }
  },
  {
    "id": "ped-itu-039",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Indicações de internação hospitalar",
    "enunciado": "Em um lactente de 6 meses com ITU febril, qual das seguintes situações socioambientais constitui indicação formal de internação hospitalar mesmo na ausência de critérios clínicos de toxemia grave?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Vulnerabilidade social extrema com cuidadores que não demonstram compreensão do tratamento, ausência de recursos para aquisição de medicamentos e impossibilidade de retorno garantido para reavaliação em 48 horas."
      },
      {
        "id": "B",
        "texto": "Mãe primípara com nível superior completo e residência a 500 metros do hospital."
      },
      {
        "id": "C",
        "texto": "Criança que frequenta creche em período integral."
      },
      {
        "id": "D",
        "texto": "Família que possui convênio médico privado de cobertura nacional."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A avaliação pediátrica deve sempre incluir a esfera psicossocial. Mesmo que o lactente esteja clinicamente estável, a incapacidade dos cuidadores de administrar as doses corretas do antibiótico, a falta de acesso à medicação ou a impossibilidade de comparecer à reavaliação clínica obrigatória em 48 a 72 horas configuram \"internação social\". A negligência involuntária ou falha na administração domiciliar levaria à progressão para pielonefrite grave e bacteriemia.",
    "comentariosAlternativas": {
      "A": "Correta. Insegurança social e risco de não adesão ou perda de seguimento justificam internação protetora.",
      "B": "Incorreta. Família estruturada e próxima ao hospital favorece o tratamento ambulatorial seguro.",
      "C": "Incorreta. Frequentar creche não é critério de internação hospitalar.",
      "D": "Incorreta. Posse de plano de saúde não dita necessidade de admissão hospitalar."
    }
  },
  {
    "id": "ped-itu-040",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Indicações de internação hospitalar",
    "enunciado": "Lactente de 10 meses foi iniciado em Cefuroxima oral ambulatorial após diagnóstico de ITU febril. Retorna ao serviço após 60 horas de tratamento com piora do estado geral, sonolência intercalada com irritabilidade e persistência de febre de 39,8 °C. Qual é a conduta indicada diante desta falha do tratamento ambulatorial?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Internação hospitalar imediata, coleta de exames laboratoriais (hemograma, PCR, função renal, hemocultura), troca da antibioticoterapia para via intravenosa (ex: Ceftriaxona ou amicacina) e realização de ultrassonografia do trato urinário."
      },
      {
        "id": "B",
        "texto": "Aumentar a dose da cefuroxima oral e liberar para casa por mais 5 dias."
      },
      {
        "id": "C",
        "texto": "Orientar que a febre pode durar até 14 dias sem necessidade de qualquer alteração."
      },
      {
        "id": "D",
        "texto": "Prescrever apenas antitérmicos alternados a cada 2 horas sem exames adicionais."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A persistência de febre e a piora clínica após 48 a 72 horas de tratamento oral indicam falha terapêutica (por má adesão, vômitos, resistência bacteriana in vitro ou complicação supurativa como abscesso). A conduta obrigatória é a internação hospitalar imediata para transição para antibiótico parenteral de amplo espectro (Ceftriaxona), recoleta de culturas e ultrassonografia das vias urinárias.",
    "comentariosAlternativas": {
      "A": "Correta. Falha terapêutica após 48-72h exige internação, investigação laboratorial, USG e antibiótico parenteral.",
      "B": "Incorreta. Manter o mesmo antibiótico oral que falhou clinicamente agrava a infecção tecidual renal.",
      "C": "Incorreta. A febre da pielonefrite deve ceder em 48 a 72 horas com o tratamento correto.",
      "D": "Incorreta. Mascarar a infecção com antitérmicos não resolve a sepse subjacente."
    }
  },
  {
    "id": "ped-itu-041",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Indicações de internação hospitalar",
    "enunciado": "Menina de 3 anos portadora de Leucemia Linfoide Aguda (LLA) em fase de indução quimioterápica apresenta febre de 38,8 °C e disúria. O hemograma revela contagem absoluta de neutrófilos de 280/mm³ (neutropenia febril grave). O EAS revela bacteriúria e leucocitúria. Qual é a conduta mandatória para esta paciente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Internação hospitalar imediata em isolamento protetor com início urgente de antibioticoterapia intravenosa de amplo espectro antipseudomonas (como Cefepima ou Meropenem)."
      },
      {
        "id": "B",
        "texto": "Tratamento ambulatorial com nitrofurantoína por via oral por 3 dias."
      },
      {
        "id": "C",
        "texto": "Apenas suspensão temporária da quimioterapia sem antibióticos."
      },
      {
        "id": "D",
        "texto": "Coleta de urocultura e alta domiciliar com agendamento de retorno em 7 dias."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A presença de ITU em paciente pediátrico oncológico com neutropenia febril grave (neutrófilos < 500/mm³) constitui emergência médica máxima. A ausência de neutrófilos impede a contenção local do foco infeccioso, com risco de invasão vascular rápida e choque séptico fatal por Pseudomonas aeruginosa ou enterobactérias produtoras de ESBL. A internação imediata com betalactâmico antipseudomonas EV (Cefepima ou Piperacilina-Tazobactam) na primeira hora é obrigatória.",
    "comentariosAlternativas": {
      "A": "Correta. Neutropenia febril com foco urinário exige internação e cobertura antipseudomonas imediata.",
      "B": "Incorreta. A nitrofurantoína é totalmente inadequada para paciente neutropênico de alto risco.",
      "C": "Incorreta. Suspender antibiótico no neutropênico infectado culmina em óbito em poucas horas.",
      "D": "Incorreta. Liberar paciente neutropênico febril para casa é erro gravíssimo."
    }
  },
  {
    "id": "ped-itu-042",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Indicações de internação hospitalar",
    "enunciado": "Por qual motivo farmacológico clássico a CEFTRIAXONA deve ser evitada no período neonatal precoce (< 28 dias), especialmente em recém-nascidos com hiperbilirrubinemia indireta ou em uso de infusões contendo cálcio?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Risco de deslocamento da bilirrubina indireta de seus sítios de ligação à albumina sérica (aumentando o risco de kernicterus / encefalopatia bilirrubínica) e risco de precipitação de cristais insolúveis de ceftriaxona cálcica nos pulmões e rins."
      },
      {
        "id": "B",
        "texto": "Risco de hipotireoidismo congênito transitório por bloqueio da peroxidase tiroidiana."
      },
      {
        "id": "C",
        "texto": "Capacidade de induzir fechamento intrauterino tardio do forame oval com cianose maciça."
      },
      {
        "id": "D",
        "texto": "Efeito teratogênico sobre o desenvolvimento dos folículos pilosos cutâneos."
      }
    ],
    "correta": "A",
    "comentarioGeral": "No período neonatal imediato, a Ceftriaxona tem duas contraindicações formais: 1) Liga-se fortemente à albumina sérica, deslocando a bilirrubina não conjugada (indireta) e elevando a fração livre que atravessa a barreira hematoencefálica, predispondo ao Kernicterus; 2) Forma precipitados insolúveis de ceftriaxona-cálcio quando administrada concomitantemente com soluções venosas contendo cálcio (como gluconato de cálcio ou nutrição parenteral), podendo provocar embolia e lesão fatal em pulmões e rins. Por isso, prefere-se Cefotaxima ou Ampicilina + Gentamicina em neonatos.",
    "comentariosAlternativas": {
      "A": "Correta. Risco de kernicterus por deslocamento da bilirrubina e precipitação de sais de cálcio insolúveis.",
      "B": "Incorreta. Ceftriaxona não inibe a síntese de hormônios tireoidianos.",
      "C": "Incorreta. O forame oval não sofre fechamento por cefalosporinas.",
      "D": "Incorreta. Efeito teratogênico refere-se a exposição embriofetal, não uso pós-natal em folículos."
    }
  },
  {
    "id": "ped-itu-043",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Ultrassonografia de Rins e Vias Urinárias",
    "enunciado": "Lactente feminina de 5 meses apresenta seu primeiro episódio de ITU febril com urocultura confirmando E. coli > 100.000 UFC/mL. Respondeu rapidamente ao antibiótico oral, encontrando-se afebril e assintomática no 4º dia. Segundo as diretrizes da Sociedade Brasileira de Pediatria (SBP) e da Academia Americana de Pediatria (AAP), qual é o exame de imagem inicial mandatório indicado para todas as crianças entre 2 e 24 meses após o primeiro episódio de ITU febril?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ultrassonografia de Rins e Vias Urinárias (USG)."
      },
      {
        "id": "B",
        "texto": "Ressonância Magnética de abdome total com contraste paramagnético."
      },
      {
        "id": "C",
        "texto": "Uretrocistografia Miccional invasiva imediata na sala de emergência."
      },
      {
        "id": "D",
        "texto": "Arteriografia renal bilateral seletiva por punção femoral."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Ultrassonografia de Rins e Vias Urinárias (USG) é o método de imagem de primeira linha indicado para TODOS os lactentes e crianças de 2 a 24 meses após o primeiro episódio documentado de ITU febril. É um exame não invasivo, sem radiação ionizante e de baixo custo, cujo objetivo principal é identificar ou descartar anomalias anatômicas estruturais congênitas maiores (como hidronefrose, estenose de JUP, duplicidade pielocalicial, hipoplasia/agenesia renal e dilatações vesicais).",
    "comentariosAlternativas": {
      "A": "Correta. A USG de rins e vias urinárias é o exame de imagem inicial padrão para todas as crianças após a 1ª ITU febril.",
      "B": "Incorreta. Ressonância magnética exige anestesia geral e não é exame de triagem de primeira linha.",
      "C": "Incorreta. UCM é exame invasivo com indicações selecionadas, não o método inicial para todos de rotina imediata.",
      "D": "Incorreta. Arteriografia é exame invasivo vascular sem indicação em infecção comum."
    }
  },
  {
    "id": "ped-itu-044",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Ultrassonografia de Rins e Vias Urinárias",
    "enunciado": "Em um lactente de 8 meses com primeiro episódio de pielonefrite aguda que apresentou excelente resposta clínica, tornando-se afebril em 24 horas e mantendo bom estado geral, qual é o momento ideal para a realização da Ultrassonografia de Rins e Vias Urinárias?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realização ambulatorial eletiva após o término ou nas semanas seguintes à resolução do quadro agudo, evitando alterações transitórias de calibre pielocalicial induzidas pela infecção aguda."
      },
      {
        "id": "B",
        "texto": "Na sala de emergência nas primeiras 2 horas antes de iniciar o antibiótico."
      },
      {
        "id": "C",
        "texto": "Exclusivamente durante a vigência de febre máxima para sensibilizar o Doppler vascular."
      },
      {
        "id": "D",
        "texto": "Apenas após a puberdade aos 14 anos de idade."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Quando a criança evolui favoravelmente com pronta defervescência e sem sinais de gravidade, a USG não precisa ser feita na urgência. Recomenda-se realizá-la de forma eletiva ambulatorial após a resolução da fase aguda infecciosa (ou nos dias que antecedem a alta hospitalar). Isso evita falsos positivos de ectasia pielocalicial leve transitória decorrente do relaxamento muscular ureteral induzido por endotoxinas bacterianas na vigência da infecção ativa.",
    "comentariosAlternativas": {
      "A": "Correta. Em pacientes com boa resposta, a USG pode ser feita eletivamente após a fase aguda.",
      "B": "Incorreta. Não há necessidade de atrasar o tratamento ou sobrecarregar a emergência se a criança evolui bem.",
      "C": "Incorreta. Fazer no pico febril não traz benefícios e causa estresse desnecessário.",
      "D": "Incorreta. Postergar para a puberdade causaria perda irreparável da janela de detecção de malformações congênitas."
    }
  },
  {
    "id": "ped-itu-045",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Ultrassonografia de Rins e Vias Urinárias",
    "enunciado": "Em qual das seguintes situações clínicas em um lactente com ITU febril a realização da Ultrassonografia de Rins e Vias Urinárias deve ser realizada de forma URGENTE (nas primeiras 24 a 48 horas de admissão)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Presença de toxemia grave/choque séptico, elevação abrupta de escórias nitrogenadas com anúria, massa abdominal palpável ou ausência de defervescência clínica após 48 a 72 horas de antibiótico intravenoso adequado."
      },
      {
        "id": "B",
        "texto": "Lactente em excelente estado geral que defervesceu após a primeira dose de antitérmico."
      },
      {
        "id": "C",
        "texto": "Criança de 7 anos com cistite afebril que respondeu à nitrofurantoína em 24 horas."
      },
      {
        "id": "D",
        "texto": "Menina continente com urocultura isolando E. coli multissensível em uso de cefalexina há 2 dias sem queixas."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A USG deve ser realizada em caráter de emergência/urgência (nas primeiras 24-48h) se houver: 1) Choque séptico ou toxemia grave; 2) Massa abdominal ou globo vesical palpável; 3) Insuficiência renal aguda / anúria; 4) Infecção por agente atípico não-E. coli; ou 5) Falha na resposta clínica com febre persistente após 48-72h de antibioticoterapia correta (para excluir abscesso renal, pionefrose ou uropatia obstrutiva aguda que exijam nefrostomia ou drenagem).",
    "comentariosAlternativas": {
      "A": "Correta. Toxemia, massa palpável, insuficiência renal e febre refratária são indicações de USG de urgência.",
      "B": "Incorreta. Paciente estável com boa resposta realiza USG ambulatorial eletiva.",
      "C": "Incorreta. Cistite em escolar não exige USG de urgência.",
      "D": "Incorreta. Evolução favorável dispensa exames de urgência."
    }
  },
  {
    "id": "ped-itu-046",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Ultrassonografia de Rins e Vias Urinárias",
    "enunciado": "Apesar de ser o exame inicial de escolha, qual é a principal limitação diagnóstica da Ultrassonografia de Rins e Vias Urinárias na avaliação de crianças com infecção urinária?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Baixa sensibilidade para diagnosticar Refluxo Vesicoureteral (RVU) de graus leve a moderado (graus I a III) e baixa capacidade de detectar cicatrizes renais corticais focais iniciais."
      },
      {
        "id": "B",
        "texto": "Exposição excessiva da criança a altas doses de radiação ionizante gonadal."
      },
      {
        "id": "C",
        "texto": "Necessidade obrigatória de injeção intravenosa de contraste iodado nefrotóxico."
      },
      {
        "id": "D",
        "texto": "Incapacidade total de mensurar as dimensões dos rins em centímetros."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A USG é excelente para avaliar anatomia grosseira, diâmetro renal e hidronefrose acentuada. No entanto, uma USG completamente normal NÃO exclui Refluxo Vesicoureteral (RVU): ela falha em detectar até 70-80% dos RVU de graus I a III (pois o refluxo intermitente sem dilatação persistente não altera a ecogenicidade ou calibre ureteral). Além disso, a USG não possui sensibilidade para pequenas cicatrizes renais corticais, cuja detecção requer cintilografia com DMSA.",
    "comentariosAlternativas": {
      "A": "Correta. A USG normal não afasta RVU leve/moderado e não detecta com sensibilidade cicatrizes renais pequenas.",
      "B": "Incorreta. A ultrassonografia utiliza ondas sonoras mecânicas; não emite radiação ionizante.",
      "C": "Incorreta. A USG de rotina não utiliza contrastes iodados venosos.",
      "D": "Incorreta. A USG mede com altíssima precisão o comprimento e volume renal."
    }
  },
  {
    "id": "ped-itu-047",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Ultrassonografia de Rins e Vias Urinárias",
    "enunciado": "Durante a realização de USG em um lactente internado com pielonefrite febril no 2º dia de internação, o radiologista relata: \"Rim direito aumentado de volume em relação ao contralateral, com parênquima edemaciado e perda da diferenciação corticomedular habitual, sem dilatação de cálices\". Qual é o significado clínico desse achado ecográfico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Achado ecográfico compatível com processo inflamatório/infeccioso agudo do parênquima renal (pielonefrite aguda edematosa), sem evidência de abscesso organizado ou hidronefrose obstrutiva."
      },
      {
        "id": "B",
        "texto": "Diagnóstico definitivo de tumor de Wilms congênito bilateral com invasão de veia cava."
      },
      {
        "id": "C",
        "texto": "Doença renal policística autossômica recessiva terminal em estágio dialítico."
      },
      {
        "id": "D",
        "texto": "Trombose de artéria renal com infarto isquêmico irreversível de 100% do órgão."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na pielonefrite aguda, a infiltração leucocitária maciça e o edema celular provocam nefromegalia (aumento das dimensões renais) e obscurecimento da transição entre o córtex e a medula (perda da diferenciação corticomedular). Esse achado confirma o envolvimento parenquimatoso renal e descarta complicações obstrutivas ou coleções purulentas organizadas.",
    "comentariosAlternativas": {
      "A": "Correta. Nefromegalia com perda de diferenciação corticomedular traduz edema inflamatório agudo da pielonefrite.",
      "B": "Incorreta. Tumor de Wilms apresenta massa sólida heterogênea expansiva bem delimitada.",
      "C": "Incorreta. Rins policísticos exibem múltiplos cistos bilaterais e perda arquitetural difusa crônica.",
      "D": "Incorreta. Trombose arterial causa rim excluído sem fluxo ao Doppler colorido."
    }
  },
  {
    "id": "ped-itu-048",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Ultrassonografia de Rins e Vias Urinárias",
    "enunciado": "Lactente de 1 ano com ITU febril refratária após 72 horas de antibiótico venoso realiza ultrassonografia renal que evidencia uma área focal nodular hipoecoica, arredondada, mal definida, sem vascularização central ao Doppler, localizada no polo superior do rim esquerdo, medindo 1,5 cm. Qual é a hipótese diagnóstica e a conduta terapêutica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Nefrite Bacteriana Focal Aguda (nefronia lobar aguda) ou Abscesso Renal inicial; manter antibioticoterapia parenteral por tempo prolongado (2 a 3 semanas) com vigilância ecográfica."
      },
      {
        "id": "B",
        "texto": "Angiomiolipoma benigno; alta hospitalar imediata com alta ingesta hídrica."
      },
      {
        "id": "C",
        "texto": "Cisto renal simples congênito; não necessita de acompanhamento."
      },
      {
        "id": "D",
        "texto": "Carcinoma de células renais papilífero; nefrectomia radical de urgência."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Nefrite Bacteriana Focal Aguda (ou nefronia lobar) e o microabscesso renal representam estágios intermediários e avançados de infecção parenquimatosa supurativa não tratada ou refratária. Na USG, apresenta-se como massa focal hipoecoica ou com áreas centrais de liquefação sem fluxo ao Doppler. A conduta em coleções pequenas (< 3 cm) é a manutenção de antibioticoterapia parenteral prolongada (2 a 3 semanas), reservando drenagem percutânea para abscessos volumosos (> 3-5 cm) ou refratários.",
    "comentariosAlternativas": {
      "A": "Correta. Nefrite bacteriana focal/abscesso requer antibioticoterapia parenteral prolongada e seguimento.",
      "B": "Incorreta. Angiomiolipoma é hiperecoico e não decorre de infecção febril aguda refratária.",
      "C": "Incorreta. Cistos simples são anecoicos com reforço acústico posterior puro e sem febre.",
      "D": "Incorreta. Cirurgia radical mutiladora estaria totalmente errada para complicação infecciosa tratável."
    }
  },
  {
    "id": "ped-itu-049",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Ultrassonografia de Rins e Vias Urinárias",
    "enunciado": "Em uma menina de 7 anos com cistite aguda sintomática, a avaliação ultrassonográfica da bexiga em repleção revela espessamento difuso e irregular da parede vesical (> 3-4 mm) e presença de conteúdo ecogênico móvel em suspensão na urina (debris). O que esses achados indicam?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sinais ultrassonográficos inflamatórios compatíveis com cistite aguda (espessamento da mucosa vesical por edema e debris celulares inflamatórios na luz da bexiga)."
      },
      {
        "id": "B",
        "texto": "Achado patognomônico de bexiga neurogênica espástica descompensada."
      },
      {
        "id": "C",
        "texto": "Presença inequívoca de papilomatose vesical maligna disseminada."
      },
      {
        "id": "D",
        "texto": "Fibrose congênita do detrusor por esquistossomose urinária em fase terminal."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na cistite aguda, o processo inflamatório na mucosa urotelial gera hiperemia e edema difuso da parede da bexiga, visível na USG como espessamento parietal (> 3 mm com bexiga repleta). Os debris móveis em suspensão refletem o acúmulo de leucócitos (piúria), muco e descamação de células uroteliais na luz vesical.",
    "comentariosAlternativas": {
      "A": "Correta. Espessamento da parede vesical e debris intraluminais são os achados clássicos de cistite aguda na USG.",
      "B": "Incorreta. Bexiga neurogênica cursa com bexiga de esforço trabeculada com pseudodivertículos crônicos.",
      "C": "Incorreta. Papilomas vesicais são lesões sólidas vegetantes fixas raras na infância.",
      "D": "Incorreta. Esquistossomose causa calcificações lineares na parede vesical, endêmica em áreas específicas."
    }
  },
  {
    "id": "ped-itu-050",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Ultrassonografia de Rins e Vias Urinárias",
    "enunciado": "Lactente de 3 meses feminina com ITU de repetição realiza USG que identifica duplicação completa do sistema coletor à direita, com ureterohidronefrose acentuada do polo superior e presença de uma formação cística de parede fina no interior da bexiga na topografia do meato ureteral direito. Qual malformação congênita do trato urinário associada à duplicidade pielocalicial foi diagnosticada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ureterocele ectópica obstrutiva do polo superior."
      },
      {
        "id": "B",
        "texto": "Megabexiga congênita idiopática."
      },
      {
        "id": "C",
        "texto": "Fístula vesicovaginal adquirida."
      },
      {
        "id": "D",
        "texto": "Persistência de cloaca comum."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Ureterocele é a dilatação cística congênita da porção submucosa terminal intravesical do ureter. Associa-se classicamente à duplicidade pielocalicial completa, na qual o ureter que drena o polo renal superior desemboca de forma ectópica e estenótica na bexiga (regra de Weigert-Meyer), gerando ureterocele com hidronefrose obstrutiva e estase urinária que predispõem a ITUs graves de repetição.",
    "comentariosAlternativas": {
      "A": "Correta. Ureterocele do polo superior associada a sistema duplo é a anomalia clássica descrita.",
      "B": "Incorreta. Megabexiga é dilatação vesical global difusa, não lesão cística intravesical localizada.",
      "C": "Incorreta. Fístula causa perda urinária contínua pela vagina.",
      "D": "Incorreta. Persistência de cloaca é anomalia anorretal complexa associada a canal comum."
    }
  },
  {
    "id": "ped-itu-051",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Uretrocistografia Miccional e Refluxo Vesicoureteral",
    "enunciado": "Qual é o exame de imagem considerado padrão-ouro indiscutível para o diagnóstico definitivo, graduação anatômica e visualização direta do Refluxo Vesicoureteral (RVU) e da anatomia uretral na infância?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Uretrocistografia Miccional (UCM)."
      },
      {
        "id": "B",
        "texto": "Cintilografia renal dinâmica com DTPA."
      },
      {
        "id": "C",
        "texto": "Ultrassonografia renal com contraste microbolha isolada."
      },
      {
        "id": "D",
        "texto": "Urografia excretora intravenosa clássica."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Uretrocistografia Miccional (UCM) convencional com contraste radiológico instilado por sonda vesical retrógrada é o padrão-ouro anatômico para demonstrar o Refluxo Vesicoureteral (RVU). Ela permite visualizar o contraste refluindo da bexiga em direção aos ureteres e rins durante o enchimento e a micção, classificar a gravidade do RVU de grau I a V e avaliar com detalhes a uretra posterior masculina.",
    "comentariosAlternativas": {
      "A": "Correta. A Uretrocistografia Miccional (UCM) é o método padrão-ouro para o diagnóstico e estadiamento do RVU.",
      "B": "Incorreta. DTPA avalia função de excreção e filtração glomerular, não anatomia do refluxo em graus.",
      "C": "Incorreta. A ultrassonografia com contraste é modalidade alternativa especializada, mas o padrão radiológico ouro formal é a UCM.",
      "D": "Incorreta. A urografia excretora foi abandonada pela alta carga de radiação e baixa sensibilidade para refluxo."
    }
  },
  {
    "id": "ped-itu-052",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Uretrocistografia Miccional e Refluxo Vesicoureteral",
    "enunciado": "Lactente masculino de 9 meses apresentou o primeiro episódio de ITU febril. A ultrassonografia de vias urinárias realizada ambulatorialmente revelou: \"Rins de dimensões normais, sem hidronefrose, sem dilatações e bexiga com paredes finas\". A criança está assintomática em seguimento. Segundo as diretrizes da Academia Americana de Pediatria (AAP), qual é a conduta quanto à realização de Uretrocistografia Miccional (UCM) neste momento?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Não realizar a UCM rotineiramente no momento; manter acompanhamento clínico ambulatorial e indicar a UCM apenas se houver novo episódio de ITU febril (recidiva) ou se a USG inicial tivesse revelado hidronefrose ou outras anomalias estruturais."
      },
      {
        "id": "B",
        "texto": "Realizar a UCM imediatamente em todos os lactentes do sexo masculino, independentemente da USG."
      },
      {
        "id": "C",
        "texto": "Indicar cirurgia antirrefluxo preventiva sem necessidade de exames adicionais."
      },
      {
        "id": "D",
        "texto": "Prescrever quimioprofilaxia com ciprofloxacino por 5 anos contínuos."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A diretriz da AAP de 2011/2016 (adotada amplamente) estabelece que a Uretrocistografia Miccional (UCM) NÃO deve ser realizada de rotina após o primeiro episódio de ITU febril se a USG renal for completamente normal e a criança tiver respondido rapidamente ao antibiótico. A UCM fica indicada se: 1) A USG evidenciar hidronefrose, cicatrizes ou sinais de refluxo de alto grau; 2) Ocorrer um SEGUNDO episódio de ITU febril (recidiva); ou 3) O episódio agudo tiver sido atípico/grave (sepse, germe não-E. coli).",
    "comentariosAlternativas": {
      "A": "Correta. A UCM não é mandatória na 1ª ITU com USG normal; fica reservada para recidiva ou alterações no USG.",
      "B": "Incorreta. A conduta clássica de indicar UCM para todos na 1ª ITU foi superada pelas diretrizes atuais.",
      "C": "Incorreta. Cirurgia antirrefluxo requer documentação de refluxo de alto grau sintomático refratário.",
      "D": "Incorreta. Quimioprofilaxia empírica indiscriminada com ciprofloxacino é formalmente contraindicada."
    }
  },
  {
    "id": "ped-itu-053",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Uretrocistografia Miccional e Refluxo Vesicoureteral",
    "enunciado": "De acordo com a Classificação Internacional do Refluxo Vesicoureteral (Comitê Internacional de Estudo do Refluxo), como é classificado o Refluxo Vesicoureteral Grau I observado à UCM?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Refluxo retrógrado de contraste que atinge apenas o ureter, sem alcançar a pelve renal e sem provocar qualquer dilatação ureteral."
      },
      {
        "id": "B",
        "texto": "Refluxo que alcança a pelve renal e todos os cálices renais com dilatação ureteral maciça em sifão."
      },
      {
        "id": "C",
        "texto": "Refluxo acompanhado de destruição completa das papilas renais com hidronefrose gigante."
      },
      {
        "id": "D",
        "texto": "Estenose congênita do meato ureteral sem passagem de urina retrógrada."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Pela Classificação Internacional do RVU: Grau I: o contraste reflui apenas para o interior do ureter, sem chegar até a pelve renal e sem provocar dilatação da luz ureteral. É a forma mais leve de refluxo e apresenta altíssima taxa de resolução espontânea (> 80-90% nos primeiros anos de vida).",
    "comentariosAlternativas": {
      "A": "Correta. Grau I: refluxo restrito ao ureter, sem atingir a pelve renal e sem dilatação.",
      "B": "Incorreta. Refluxo com dilatação maciça corresponde aos graus IV e V.",
      "C": "Incorreta. Destruição papilar com grande dilatação caracteriza o grau V.",
      "D": "Incorreta. Descreve estenose anatômica, não a definição do refluxo retrógrado grau I."
    }
  },
  {
    "id": "ped-itu-054",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Uretrocistografia Miccional e Refluxo Vesicoureteral",
    "enunciado": "Lactente de 14 meses realiza UCM após segundo episódio de pielonefrite. O laudo radiológico descreve: \"Refluxo vesicoureteral bilateral que ascende por todo o ureter, preenchendo a pelve renal e todos os cálices renais, porém com calibres ureterais estritamente normais e preservação integral dos fórnices caliciais pontiagudos normais, sem qualquer dilatação\". Qual é o grau do Refluxo Vesicoureteral de acordo com o Comitê Internacional?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Refluxo Vesicoureteral Grau II."
      },
      {
        "id": "B",
        "texto": "Refluxo Vesicoureteral Grau I."
      },
      {
        "id": "C",
        "texto": "Refluxo Vesicoureteral Grau IV."
      },
      {
        "id": "D",
        "texto": "Refluxo Vesicoureteral Grau V."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Grau II da Classificação Internacional do RVU define-se pelo refluxo de contraste que atinge todo o trato urinário superior (ureter, pelve renal e cálices renais), porém SEM provocar qualquer dilatação (calibres normais de ureter e pelve) e com os fórnices caliciais mantendo sua angulação nítida e pontiaguda normal. Assim como o grau I, tem excelente taxa de resolução espontânea com o crescimento.",
    "comentariosAlternativas": {
      "A": "Correta. Grau II: refluxo atinge pelve e cálices, mas SEM dilatação e com fórnices preservados.",
      "B": "Incorreta. Grau I não atinge a pelve renal.",
      "C": "Incorreta. Grau IV apresenta dilatação acentuada e tortuosidade ureteral evidente.",
      "D": "Incorreta. Grau V apresenta dilatação extrema e perda completa das impressões papilares."
    }
  },
  {
    "id": "ped-itu-055",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Uretrocistografia Miccional e Refluxo Vesicoureteral",
    "enunciado": "Qual achado radiológico na UCM define o Refluxo Vesicoureteral Grau III?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Refluxo para o ureter, pelve e cálices com dilatação leve a moderada do ureter e da pelve renal, com fórnices caliciais ligeiramente rombos ou arredondados, sem tortuosidade significativa do ureter."
      },
      {
        "id": "B",
        "texto": "Refluxo com inversão completa da bexiga para a cavidade peritoneal."
      },
      {
        "id": "C",
        "texto": "Refluxo restrito à uretra bulbar sem ascensão ao trígono vesical."
      },
      {
        "id": "D",
        "texto": "Tortuosidade extrema com ureter em sifão e ausência de qualquer impressão papilar."
      }
    ],
    "correta": "A",
    "comentarioGeral": "No Grau III do RVU, o refluxo atinge ureter, pelve e cálices, acompanhando-se de dilatação leve a moderada do ureter (com mínima ou nenhuma tortuosidade) e discreto aplanamento/arredondamento dos fórnices caliciais (fórnices caliciais ligeiramente rombos), mantendo a maior parte das impressões papilares identificáveis.",
    "comentariosAlternativas": {
      "A": "Correta. Grau III: dilatação leve a moderada de ureter e pelve com fórnices caliciais discretamente rombos.",
      "B": "Incorreta. Não existe inversão peritoneal na classificação de RVU.",
      "C": "Incorreta. Refluxo uretrobulbar é fenômeno uretral, não refluxo vesicoureteral.",
      "D": "Incorreta. Tortuosidade extrema com perda papilar define o grau V."
    }
  },
  {
    "id": "ped-itu-056",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Uretrocistografia Miccional e Refluxo Vesicoureteral",
    "enunciado": "Menino de 2 anos com episódios repetidos de pielonefrite realiza Uretrocistografia Miccional. O exame exibe: dilatação moderada a acentuada do ureter com tortuosidade moderada, pelve renal francamente dilatada e perda quase completa do aspecto pontiagudo dos cálices, com a maioria das impressões papilares achatadas ou apagadas. Qual é a graduação desse refluxo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Refluxo Vesicoureteral Grau IV."
      },
      {
        "id": "B",
        "texto": "Refluxo Vesicoureteral Grau II."
      },
      {
        "id": "C",
        "texto": "Refluxo Vesicoureteral Grau I."
      },
      {
        "id": "D",
        "texto": "Refluxo Vesicoureteral Grau III."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Grau IV é caracterizado por dilatação moderada a importante do ureter com tortuosidade ureteral nítida, dilatação expressiva da pelve renal e apagamento evidente da morfologia papilar na maioria dos cálices renais. É classificado como refluxo de alto grau e tem baixa probabilidade de resolução espontânea rápida, com alto risco de cicatrizes renais.",
    "comentariosAlternativas": {
      "A": "Correta. Grau IV: dilatação acentuada, tortuosidade moderada e apagamento evidente das impressões papilares.",
      "B": "Incorreta. Grau II não tem dilatação nem tortuosidade.",
      "C": "Incorreta. Grau I limita-se ao ureter sem dilatação.",
      "D": "Incorreta. Grau III apresenta dilatação apenas leve/moderada com preservação parcial das papilas."
    }
  },
  {
    "id": "ped-itu-057",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Uretrocistografia Miccional e Refluxo Vesicoureteral",
    "enunciado": "Lactente de 6 meses com hidronefrose bilateral grave e ITU de repetição realiza UCM que evidencia dilatação maciça e grotesca dos ureteres bilaterais, com acentuada tortuosidade (ureteres em aspecto de serpentina/sifão), pelves renais imensamente dilatadas e perda absoluta de todas as impressões papilares caliciais. Qual é o grau dessa anomalia?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Refluxo Vesicoureteral Grau V."
      },
      {
        "id": "B",
        "texto": "Refluxo Vesicoureteral Grau III."
      },
      {
        "id": "C",
        "texto": "Refluxo Vesicoureteral Grau I."
      },
      {
        "id": "D",
        "texto": "Refluxo Vesicoureteral Grau II."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Grau V é a forma mais grave de Refluxo Vesicoureteral. Caracteriza-se por dilatação massiva e grotesca de todo o trato superior, ureter excessivamente tortuoso e alongado (\"em sifão\" ou serpentina) e cálices completamente balonados com destruição e perda total de qualquer impressão papilar. Associa-se frequentemente a displasia renal congênita e risco extremo de insuficiência renal crônica.",
    "comentariosAlternativas": {
      "A": "Correta. Grau V: dilatação maciça grotesca, extrema tortuosidade em serpentina e perda total das impressões papilares.",
      "B": "Incorreta. Grau III tem dilatação leve/moderada.",
      "C": "Incorreta. Grau I não atinge cálices.",
      "D": "Incorreta. Grau II não tem dilatação."
    }
  },
  {
    "id": "ped-itu-058",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Uretrocistografia Miccional e Refluxo Vesicoureteral",
    "enunciado": "Em que momento clínico deve ser agendada e realizada a Uretrocistografia Miccional (UCM) após a cura de um episódio de pielonefrite aguda em um lactente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aguardar a cura clínica completa e esterilização da urina confirmada por urocultura negativa (idealmente 2 a 6 semanas após o término da infecção), sob cobertura antibiótica profilática no dia do procedimento."
      },
      {
        "id": "B",
        "texto": "No primeiro dia de internação hospitalar no momento do pico febril de 40 °C."
      },
      {
        "id": "C",
        "texto": "Apenas após a criança completar 18 anos de idade."
      },
      {
        "id": "D",
        "texto": "Durante a infusão da primeira dose de ceftriaxona na sala de choque."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A UCM NUNCA deve ser realizada na vigência de infecção urinária ativa ou urina infectada, pois a cateterização vesical sob pressão pode introduzir bactérias no trato superior e deflagrar urossepse fulminante. Além disso, as toxinas bacterianas e a inflamação vesical geram relaxamento temporário da junção ureterovesical, produzindo refluxos falso-positivos. Deve-se aguardar a resolução clínica e urocultura estéril (geralmente 2 a 6 semanas após o tratamento), realizando quimioprofilaxia de cobertura no procedimento.",
    "comentariosAlternativas": {
      "A": "Correta. Aguardar esterilização da urina (2-6 semanas após o episódio) e realizar sob profilaxia de procedimento.",
      "B": "Incorreta. Fazer na vigência de febre e infecção ativa dissemina bactérias e causa choque séptico.",
      "C": "Incorreta. Postergar para 18 anos impede o tratamento e prevenção de cicatrizes na infância.",
      "D": "Incorreta. Na sala de choque a prioridade é a estabilização hemodinâmica."
    }
  },
  {
    "id": "ped-itu-059",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Uretrocistografia Miccional e Refluxo Vesicoureteral",
    "enunciado": "Por que a fase miccional da Uretrocistografia (aquisição radiográfica contínua durante o ato da micção plena) é de execução indispensável e obrigatória em meninos com suspeita de anomalia congênita urinária?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Porque é exclusivamente durante a micção que a uretra posterior masculina se distende, permitindo o diagnóstico diferencial com Válvula de Uretra Posterior (VUP), caracterizada por uretra prostática dilatada e parada abrupta do fluxo."
      },
      {
        "id": "B",
        "texto": "Para verificar se o menino apresenta refluxo de contraste para o apêndice ileocecal."
      },
      {
        "id": "C",
        "texto": "Apenas para avaliar a contratilidade dos músculos trapézio e peitoral maior."
      },
      {
        "id": "D",
        "texto": "Porque a uretra anterior do menino não tolera contraste durante a fase de enchimento."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A fase miccional na UCM em meninos é mandatória para avaliar a anatomia da uretra masculina. É somente quando o paciente urina ativamente que a uretra posterior atinge sua distensão funcional máxima. Na presença de Válvula de Uretra Posterior (VUP), observa-se o clássico sinal radiológico: dilatação e balonamento acentuados da uretra prostática posterior com afilamento abrupto ou parada de fluxo na uretra membranosa e bulbar.",
    "comentariosAlternativas": {
      "A": "Correta. A fase miccional permite avaliar a distensão da uretra posterior e diagnosticar VUP no menino.",
      "B": "Incorreta. O contraste urinário não atinge o apêndice cecal.",
      "C": "Incorreta. Músculos do tronco não têm relação com a anatomia uretral miccional.",
      "D": "Incorreta. A fase de enchimento é bem tolerada; a fase miccional complementa o diagnóstico dinâmico."
    }
  },
  {
    "id": "ped-itu-060",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Cintilografia Renal com DMSA",
    "enunciado": "Qual é o exame de medicina nuclear considerado padrão-ouro indiscutível para a avaliação da morfologia do córtex renal funcionante e detecção precisa de cicatrizes renais pós-pielonefrite na infância?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Cintilografia Renal Estática com Ácido Dimercaptossuccínico marcado com Tecnécio-99m (DMSA-99mTc)."
      },
      {
        "id": "B",
        "texto": "Cintilografia Dinâmica com DTPA marcado com Gálio-67."
      },
      {
        "id": "C",
        "texto": "PET-CT com fluordesoxiglicose (18F-FDG) de corpo inteiro."
      },
      {
        "id": "D",
        "texto": "Cintilografia óssea com pirofosfato de tecnécio."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Cintilografia Renal Estática com 99mTc-DMSA é o método mais sensível e específico (padrão-ouro) para quantificar a massa de parênquima renal funcionante e identificar cicatrizes corticais renais (nefropatia de refluxo). O DMSA é avidamente captado pelas células dos túbulos contorcidos proximais e retido no córtex renal, gerando uma imagem de alta definição da integridade cortical.",
    "comentariosAlternativas": {
      "A": "Correta. A cintilografia renal com 99mTc-DMSA é o padrão-ouro para avaliação do córtex renal e cicatrizes.",
      "B": "Incorreta. DTPA é radiofármaco dinâmico para taxa de filtração e drenagem, não para imagem cortical estática.",
      "C": "Incorreta. PET-FDG não é o método indicado para avaliação de cicatrizes na rotina nefropediátrica.",
      "D": "Incorreta. Cintilografia óssea avalia remodelação do esqueleto ósseo."
    }
  },
  {
    "id": "ped-itu-061",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Cintilografia Renal com DMSA",
    "enunciado": "Lactente de 11 meses realiza cintilografia renal com DMSA no 5º dia de internação hospitalar por pielonefrite aguda febril. O laudo descreve: \"Área focal de hipocaptação do radiofármaco no polo superior do rim esquerdo, sem alteração no contorno renal externo\". Qual é o significado fisiopatológico desse achado na fase aguda da infecção?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Área de isquemia microvascular e edema inflamatório intersticial agudo associada à infiltração leucocitária parenquimatosa (pielonefrite aguda ativa em evolução)."
      },
      {
        "id": "B",
        "texto": "Diagnóstico definitivo e irreversível de agenesia congênita do polo superior."
      },
      {
        "id": "C",
        "texto": "Presença de fístula arteriovenosa congênita de alto débito."
      },
      {
        "id": "D",
        "texto": "Necrose cortical tubular maciça que exige nefrectomia de urgência."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Quando realizado na fase aguda da infecção (primeiros 7 a 14 dias), o DMSA revela áreas de hipocaptação (frio) decorrentes da isquemia tecidual, vasoconstrição microvascular reflexa, edema intersticial e disfunção tubular temporária gerados pela invasão bacteriana (pielonefrite aguda). Esse achado comprova o acometimento do parênquima renal, mas ainda não pode ser denominado cicatriz permanente.",
    "comentariosAlternativas": {
      "A": "Correta. Hipocaptação na fase aguda traduz edema e isquemia inflamatória focal da pielonefrite.",
      "B": "Incorreta. Não se trata de agenesia congênita, mas de processo inflamatório agudo adquirido.",
      "C": "Incorreta. Fístula arteriovenosa apresenta achados vasculares característicos ao Doppler.",
      "D": "Incorreta. Não há necrose cortical generalizada nem indicação cirúrgica."
    }
  },
  {
    "id": "ped-itu-062",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Cintilografia Renal com DMSA",
    "enunciado": "Para confirmar com segurança se um episódio grave de pielonefrite aguda na infância evoluiu com formação de Cicatriz Renal Permanente (crônica) ou se houve regeneração completa do parênquima, qual é o intervalo de tempo mínimo recomendado após a infecção aguda para a realização da cintilografia renal com DMSA de controle?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pelo menos 4 a 6 meses após o término do tratamento do episódio agudo."
      },
      {
        "id": "B",
        "texto": "Apenas 48 horas após a última dose do antibiótico oral."
      },
      {
        "id": "C",
        "texto": "Exatamente 7 dias após o desaparecimento da febre."
      },
      {
        "id": "D",
        "texto": "Apenas após a puberdade aos 16 anos de idade."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O processo de resolução do edema inflamatório, remodelação tecidual e cicatrização renal após uma pielonefrite aguda leva vários meses. Estudos cintilográficos demonstram que cerca de metade das áreas de hipocaptação observadas na fase aguda desaparecem com restituição ad integrum. Portanto, para documentar cicatriz permanente (retração cortical definitiva com perda de função tubular local), a cintilografia com DMSA deve ser realizada após no mínimo 4 a 6 meses do episódio.",
    "comentariosAlternativas": {
      "A": "Correta. O intervalo de 4 a 6 meses é o tempo mínimo preconizado para diagnosticar cicatriz renal permanente.",
      "B": "Incorreta. Em 48 horas o edema inflamatório ainda persiste, gerando confusão diagnóstica.",
      "C": "Incorreta. 7 dias é fase subaguda precoce com disfunção tubular reversível ativa.",
      "D": "Incorreta. Postergar anos impede medidas protetoras precoces e vigilância de hipertensão."
    }
  },
  {
    "id": "ped-itu-063",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Cintilografia Renal com DMSA",
    "enunciado": "Na análise quantitativa da captação relativa do radiofármaco na cintilografia estática com DMSA, como é expressa a função renal diferencial normal de cada rim em uma criança?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Cada rim deve contribuir com 45% a 55% da função renal total (assimetria fisiológica aceitável de até 10%)."
      },
      {
        "id": "B",
        "texto": "O rim direito deve responder por 90% da função e o esquerdo por apenas 10%."
      },
      {
        "id": "C",
        "texto": "A captação normal exige 100% de captação em um rim e 0% no rim contralateral."
      },
      {
        "id": "D",
        "texto": "A captação do DMSA não permite qualquer quantificação percentual comparativa."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A cintilografia com DMSA calcula com precisão a contribuição percentual de cada rim para a massa renal total funcionante (função diferencial). Em condições normais, cada rim responde por aproximadamente metade da função global, sendo considerados normais valores entre 45% e 55% para cada rim. Uma função diferencial inferior a 40-45% em um rim denota perda significativa de massa parenquimatosa funcionante (hipoplasia, displasia ou dano cicatricial grave por pielonefrite).",
    "comentariosAlternativas": {
      "A": "Correta. A função normal de cada rim situa-se entre 45% e 55% da captação global.",
      "B": "Incorreta. Assimetria de 90/10 indica atrofia ou exclusão grave do rim hipocaptante.",
      "C": "Incorreta. Captação unilateral total indica rim único funcionante.",
      "D": "Incorreta. O cálculo quantitativo percentual é um dos pontos fortes do exame de DMSA."
    }
  },
  {
    "id": "ped-itu-064",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Cintilografia Renal com DMSA",
    "enunciado": "Qual é a diferença conceitual e de indicação clínica primária entre a Cintilografia Renal Estática com DMSA e a Cintilografia Renal Dinâmica com DTPA (ou MAG3)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O DMSA fixa-se nos túbulos proximais e avalia a integridade do parênquima/córtex renal e cicatrizes; o DTPA/MAG3 é filtrado/excretado continuamente na urina e avalia a dinâmica de drenagem, curvas de esvaziamento e presença de estenose obstrutiva (uropatia obstrutiva)."
      },
      {
        "id": "B",
        "texto": "O DMSA serve exclusivamente para avaliar litíase urinária de ácido úrico, enquanto o DTPA diagnostica cistite."
      },
      {
        "id": "C",
        "texto": "O DTPA avalia refluxo vesicoureteral retrógrado e o DMSA mede a pressão arterial na artéria renal."
      },
      {
        "id": "D",
        "texto": "Não há qualquer diferença, sendo radiofármacos idênticos com o mesmo alvo molecular."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O DMSA (ácido dimercaptossuccínico) é um exame estático: o traçador fixa-se no córtex e permanece retido nas células tubulares, sendo ideal para detectar defeitos parenquimatosos e cicatrizes renais. O DTPA (ou MAG3) é um exame dinâmico: o radiofármaco é filtrado pelos glomérulos e eliminado rapidamente na urina, gerando curvas renográficas de captação e excreção, sendo o método de eleição com estímulo de furosemida para diferenciar hidronefrose não obstrutiva de obstrução anatômica real (como estenose de JUP).",
    "comentariosAlternativas": {
      "A": "Correta. DMSA avalia parênquima/cicatrizes (estático) e DTPA/MAG3 avalia excreção/obstrução (dinâmico).",
      "B": "Incorreta. DMSA não avalia cálculos de ácido úrico.",
      "C": "Incorreta. Refluxo anatômico é avaliado por UCM e pressão de artéria renal não é aferida por cintilografia.",
      "D": "Incorreta. São radiofármacos completamente distintos com cinéticas e indicações diferentes."
    }
  },
  {
    "id": "ped-itu-065",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Cintilografia Renal com DMSA",
    "enunciado": "Uma menina de 12 anos em acompanhamento nefrológico apresenta cintilografia com DMSA evidenciando cicatrizes corticais bilaterais extensas e função renal diferencial de 30% à esquerda e 70% à direita, com taxa de filtração glomerular estimada em 65 mL/min/1,73m². Quais são as complicações clínicas a longo prazo para as quais essa paciente apresenta risco expressivo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Hipertensão arterial sistêmica secundária (renovascular/parenquimatosa), proteinúria secundária a hiperfiltração dos néfrons remanescentes, pré-eclâmpsia futura na gestação e progressão para doença renal crônica."
      },
      {
        "id": "B",
        "texto": "Diabetes mellitus tipo 1 descompensado e hipotireoidismo autoimune de Hashimoto."
      },
      {
        "id": "C",
        "texto": "Hemorragia digestiva alta por varizes de esôfago isoladas."
      },
      {
        "id": "D",
        "texto": "Fibrose cística com esteatorreia crônica e bronquiectasias difusas."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A nefropatia de refluxo com cicatrizes renais permanentes extensas provoca perda de néfrons. Os néfrons sobreviventes sofrem hipertrofia e hiperfiltração adaptativa com esclerose focal e proteinúria progressiva. A isquemia parenquimatosa focal ativa o sistema renina-angiotensina-aldosterona, causando hipertensão arterial secundária em até 10-20% das crianças afetadas, além de complicações obstétricas graves na vida reprodutiva e risco de falência renal crônica.",
    "comentariosAlternativas": {
      "A": "Correta. Hipertensão, proteinúria, pré-eclâmpsia e doença renal crônica são sequelas clássicas de cicatrizes bilaterais.",
      "B": "Incorreta. Cicatrizes renais não causam destruição autoimune de ilhotas pancreáticas ou da tireoide.",
      "C": "Incorreta. Varizes esofágicas decorrem de hipertensão portal hepática.",
      "D": "Incorreta. Fibrose cística é mutação no gene CFTR."
    }
  },
  {
    "id": "ped-itu-066",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Cintilografia Renal com DMSA",
    "enunciado": "Na abordagem investigativa de imagem de crianças após ITU febril, qual é o fundamento da estratégia diagnóstica denominada \"Abordagem Top-Down\" (de cima para baixo)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realizar a cintilografia com DMSA na fase aguda; se o DMSA for estritamente normal (confirmando que não houve envolvimento do parênquima renal), dispensa-se a Uretrocistografia Miccional invasiva, realizando UCM apenas nos pacientes com DMSA alterado (com risco real de refluxo de alto grau e cicatrizes)."
      },
      {
        "id": "B",
        "texto": "Realizar biópsia renal antes de qualquer exame de urina em todos os lactentes."
      },
      {
        "id": "C",
        "texto": "Iniciar obrigatoriamente por urografia excretora com contraste intravenoso."
      },
      {
        "id": "D",
        "texto": "Indicar cistectomia total precoce caso o DMSA revele rins normais."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A abordagem \"Top-Down\" propõe que o órgão nobre que realmente precisa ser protegido é o parênquima renal. Realiza-se o DMSA na fase aguda: se o DMSA estiver normal, o rim não foi afetado e o risco de refluxo de alto grau clinicamente relevante é mínimo, poupando a criança do desconforto, radiação e riscos da Uretrocistografia Miccional. A UCM fica restrita àqueles com DMSA alterado.",
    "comentariosAlternativas": {
      "A": "Correta. A abordagem Top-Down usa o DMSA para selecionar quais pacientes realmente necessitam de UCM.",
      "B": "Incorreta. Biópsia renal não é exame de triagem de ITU.",
      "C": "Incorreta. Urografia não é recomendada na rotina pediátrica atual.",
      "D": "Incorreta. Cistectomia é cirurgia oncológica de ressecção vesical."
    }
  },
  {
    "id": "ped-itu-067",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Cintilografia Renal com DMSA",
    "enunciado": "Por que o laudo de uma cintilografia com DMSA realizada no 3º dia de pielonefrite aguda febril que descreve hipocaptação focal NÃO deve utilizar o termo \"cicatriz renal definitiva\"?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Porque a hipocaptação na fase aguda reflete inflamação e edema tecidual transitório que pode regredir totalmente com a cura da infecção, sendo necessária uma cintilografia tardia após 6 meses para comprovar se houve ou não sequela permanente."
      },
      {
        "id": "B",
        "texto": "Porque o DMSA na fase aguda é 100% ineficaz e nunca detecta alterações renais."
      },
      {
        "id": "C",
        "texto": "Porque os rins de crianças menores de 2 anos não absorvem o tecnécio-99m."
      },
      {
        "id": "D",
        "texto": "Porque a cicatriz renal é um termo reservado exclusivamente para lesões traumáticas penetrantes por arma branca."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Na fase aguda da infecção bacteriana, o edema, a infiltração por neutrófilos e a isquemia reversível provocam disfunção transitória das células tubulares, impedindo a captação do DMSA naquele segmento. Em cerca de 40 a 60% dos casos, após o tratamento antimicrobiano adequado, o parênquima se recupera integralmente sem qualquer retração tecidual residual. Por isso, na fase aguda fala-se em \"defeito de captação compatível com pielonefrite aguda\", reservando \"cicatriz\" para defeitos persistentes após 6 meses.",
    "comentariosAlternativas": {
      "A": "Correta. O defeito agudo pode ser puramente inflamatório e reversível, exigindo controle após 6 meses.",
      "B": "Incorreta. O DMSA agudo é altamente sensível para documentar a presença de pielonefrite aguda.",
      "C": "Incorreta. O córtex de lactentes capta o DMSA de forma eficaz.",
      "D": "Incorreta. Cicatriz renal é a sequela clássica da pielonefrite bacteriana na nefropatia de refluxo."
    }
  },
  {
    "id": "ped-itu-068",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Manejo do Refluxo Vesicoureteral",
    "enunciado": "Lactente feminina de 10 meses assintomática apresenta diagnóstico de Refluxo Vesicoureteral unilateral Grau II na UCM. A ultrassonografia e a cintilografia com DMSA mostram rins normais e sem cicatrizes. Qual é a história natural do RVU de baixo grau (graus I e II) e qual é a conduta preconizada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Apresenta altíssima taxa de resolução espontânea com o crescimento somático da criança (> 80-90% de cura sem cirurgia); preconiza-se conduta conservadora expectante com vigilância clínica rigorosa e orientação familiar."
      },
      {
        "id": "B",
        "texto": "Evolui invariavelmente para atrofia renal irreversível em 6 meses se não for operada imediatamente."
      },
      {
        "id": "C",
        "texto": "Indicação obrigatória de nefrectomia parcial laparoscópica de urgência."
      },
      {
        "id": "D",
        "texto": "Internação contínua por 1 ano para cateterismo intermitente a cada 2 horas."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O mecanismo do RVU primário reside na brevidade congênita do túnel ureteral submucoso intravesical. Conforme a criança cresce e a bexiga se expande, o trajeto do ureter na parede vesical se alonga naturalmente, fortalecendo o mecanismo valvular antirrefluxo. No RVU de baixo grau (graus I e II), mais de 80 a 90% dos casos curam espontaneamente nos primeiros anos de vida. A conduta é conservadora, com orientações aos pais para diagnosticar rapidamente eventuais febres e vigilância clínica.",
    "comentariosAlternativas": {
      "A": "Correta. Alta taxa de resolução espontânea (> 80-90%) e conduta conservadora com vigilância clínica.",
      "B": "Incorreta. RVU de baixo grau não causa atrofia acelerada e raramente requer intervenção cirúrgica.",
      "C": "Incorreta. Cirurgia radical mutiladora é completamente descabida.",
      "D": "Incorreta. Cateterismo intermitente de rotina para RVU grau II assintomático é incorreto e deletério."
    }
  },
  {
    "id": "ped-itu-069",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Manejo do Refluxo Vesicoureteral",
    "enunciado": "Qual é o papel primário da quimioprofilaxia antimicrobiana contínua em lactentes com diagnóstico de Refluxo Vesicoureteral de alto grau (graus IV e V)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Manter a urina estéril para impedir que a bacteriúria atinja o parênquima renal sob alta pressão retrógrada, prevenindo novos episódios de pielonefrite aguda e a formação de novas cicatrizes renais."
      },
      {
        "id": "B",
        "texto": "Promover a dilatação farmacológica da junção ureterovesical facilitando a descida de cálculos."
      },
      {
        "id": "C",
        "texto": "Acelerar o fechamento cirúrgico da bexiga em crianças com extrofia cloacal."
      },
      {
        "id": "D",
        "texto": "Estimular a secreção de eritropoietina medular em até 500%."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O refluxo de urina estéril (sem bactérias) em um sistema de baixa pressão raramente lesa o parênquima renal. O dano grave e as cicatrizes ocorrem quando urina infectada reflui até os cálices e túbulos renais sob a alta pressão da contração vesical (\"nefropatia de refluxo\"). A quimioprofilaxia diária com dose baixa de antibiótico mantém a urina estéril, evitando que a bexiga funcione como vetor de pielonefrite até a resolução espontânea ou correção cirúrgica.",
    "comentariosAlternativas": {
      "A": "Correta. Manter a urina estéril e prevenir pielonefrites e cicatrizes renais permanentes.",
      "B": "Incorreta. A profilaxia não atua na dilatação da junção nem visa expulsar cálculos.",
      "C": "Incorreta. A profilaxia não trata defeitos de fechamento de parede como extrofia.",
      "D": "Incorreta. Antimicrobianos não possuem efeito estimulador direto sobre a eritropoietina."
    }
  },
  {
    "id": "ped-itu-070",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Manejo do Refluxo Vesicoureteral",
    "enunciado": "Qual é a intervenção cirúrgica clássica considerada padrão-ouro definitivo para a correção do Refluxo Vesicoureteral anatômico de alto grau em crianças, com taxas de sucesso curativo superiores a 95% a 98%?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ureterocistoneostomia (Reimplante Ureteral aberto ou laparoscópico/robótico, como as técnicas de Cohen ou Politano-Leadbetter)."
      },
      {
        "id": "B",
        "texto": "Transplante renal heterotópico em fossa ilíaca contralateral."
      },
      {
        "id": "C",
        "texto": "Bandeamento dos ramos principais das artérias renais."
      },
      {
        "id": "D",
        "texto": "Ressecção do músculo detrusor com colocação de esfíncter artificial."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A cirurgia de Reimplante Ureteral (ou ureterocistoneostomia), realizada por via aberta (técnica intravesical de Cohen ou extravesical de Lich-Gregoir) ou por via laparoscópica/robótica, consiste na criação cirúrgica de um novo túnel submucoso longo para o ureter dentro da parede vesical (relação comprimento/diâmetro de 5:1). Apresenta taxa de cura definitiva superior a 95-98%, sendo o padrão-ouro cirúrgico.",
    "comentariosAlternativas": {
      "A": "Correta. O reimplante ureteral (ureterocistoneostomia) é o padrão-ouro cirúrgico com > 95% de sucesso.",
      "B": "Incorreta. O transplante renal destina-se a doença renal terminal, não ao tratamento inicial de RVU.",
      "C": "Incorreta. Bandeamento de artérias renais não existe para tratar anomalias das vias urinárias.",
      "D": "Incorreta. Esfíncter artificial não trata a competência da junção ureterovesical."
    }
  },
  {
    "id": "ped-itu-071",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Manejo do Refluxo Vesicoureteral",
    "enunciado": "Menina de 3 anos com RVU unilateral Grau III persistente e duas infecções urinárias febris é candidata ao tratamento endoscópico por cistoscopia com injeção subureteral de copolímero de Dextranômero e Ácido Hialurônico (Deflux / técnica STING). Qual é o mecanismo de ação e as principais vantagens desse procedimento minimamente invasivo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A injeção do agente volumétrico sob a mucosa da porção terminal do ureter cria um suporte mecânico posterior firme (coxim submucoso) que coapta a luz ureteral e impede o refluxo retrógrado de urina, com baixíssima morbidade e sem necessidade de incisões abdominais."
      },
      {
        "id": "B",
        "texto": "O Deflux dissolve a parede da bexiga permitindo drenagem direta da urina para o retroperitônio."
      },
      {
        "id": "C",
        "texto": "A substância injetada esteriliza a urina para o resto da vida por liberação contínua de penicilina."
      },
      {
        "id": "D",
        "texto": "O procedimento paralisa totalmente o esfíncter uretral externo tornando a micção involuntária."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A técnica endoscópica de injeção subureteral (STING ou HIT) é um procedimento ambulatorial minimamente invasivo realizado por cistoscopia sob anestesia geral de curta duração. O cirurgião injeta um gel inerte e biocompatível (Dextranômero/Ácido Hialurônico - Deflux) imediatamente abaixo do óstio ureteral submucoso, elevando o assoalho ureteral e restaurando o mecanismo valvular. Apresenta taxa de sucesso de 75 a 85% e baixíssimo índice de complicações.",
    "comentariosAlternativas": {
      "A": "Correta. Cria suporte submucoso (coxim) que coapta o meato e impede refluxo por via endoscópica.",
      "B": "Incorreta. O agente não dissolve a parede da bexiga nem drena urina para o retroperitônio.",
      "C": "Incorreta. O Deflux é um agente volumétrico inerte, sem liberação de antimicrobianos.",
      "D": "Incorreta. O procedimento preserva integralmente a continência urinária e o esfíncter uretral."
    }
  },
  {
    "id": "ped-itu-072",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Manejo do Refluxo Vesicoureteral",
    "enunciado": "Qual das seguintes situações clínicas em uma criança com Refluxo Vesicoureteral em uso de quimioprofilaxia antibiótica regular representa indicação formal inequívoca para intervenção cirúrgica (reimplante ou injeção endoscópica)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ocorrência de novo episódio de Pielonefrite Aguda febril na vigência de profilaxia antimicrobiana correta (\"infecção de escape\" / breakthrough infection) ou surgimento documentado de novas cicatrizes corticais ao DMSA."
      },
      {
        "id": "B",
        "texto": "Presença isolada de um sedimento urinário com 5 leucócitos por campo em criança afebril e assintomática."
      },
      {
        "id": "C",
        "texto": "Ganho ponderal acelerado da criança no percentil 90."
      },
      {
        "id": "D",
        "texto": "Fechamento espontâneo do refluxo verificado na UCM de controle."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A ocorrência de pielonefrite febril na vigência de quimioprofilaxia correta (\"infecção de escape\" ou breakthrough UTI) demonstra que a proteção medicamentosa falhou e o parênquima renal está sob risco iminente de dano permanente adicional. Essa situação, assim como o aparecimento ou progressão de cicatrizes renais confirmadas ao DMSA, constitui indicação formal absoluta de correção cirúrgica antirrefluxo.",
    "comentariosAlternativas": {
      "A": "Correta. Infecção de escape sob profilaxia correta e surgimento de novas cicatrizes indicam cirurgia.",
      "B": "Incorreta. Leucocitúria assintomática isolada não autoriza cirurgia urológica.",
      "C": "Incorreta. Bom desenvolvimento pôndero-estatural é sinal de evolução favorável.",
      "D": "Incorreta. O fechamento espontâneo do RVU significa cura, dispensando cirurgia."
    }
  },
  {
    "id": "ped-itu-073",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Manejo do Refluxo Vesicoureteral",
    "enunciado": "Menina de 5 anos com RVU bilateral Grau III e ITUs de repetição apresenta histórico de urinar apenas 2 vezes ao dia, apresentar perdas urinárias na calcinha com manobras de contenção (cruzar as pernas) e defecar a cada 4 a 5 dias fezes ressecadas em cíbalos dolorosos (escala de Bristol 1). Por que o tratamento agressivo dessa Disfunção do Trato Urinário Inferior e da Constipação Intestinal é prioritário antes de qualquer decisão cirúrgica antirrefluxo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Porque a hiperatividade detrusora e o aumento das pressões intravesicais causadas pelo reto repleto perpetuam o refluxo vesicoureteral; o tratamento clínico da disfunção miccional e intestinal frequentemente cura ou melhora o refluxo e previne o insucesso da cirurgia."
      },
      {
        "id": "B",
        "texto": "Porque a constipação intestinal impede a anestesia geral devido à produção excessiva de gás hélio no cólon."
      },
      {
        "id": "C",
        "texto": "Porque o tratamento cirúrgico do RVU cura a constipação crônica em 100% das vezes."
      },
      {
        "id": "D",
        "texto": "Porque laxativos orais dissolvem o ureter defeituoso tornando a cirurgia desnecessária."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Existe uma íntima interação embriológica e funcional entre a bexiga e o reto (Síndrome de Eliminação Disfuncional / DTUI). O reto distendido por fezes empacotadas comprime a base da bexiga e o trígono, desencadeando contrações involuntárias do detrusor sob alta pressão, o que agrava o refluxo e facilita a ascensão de bactérias fecais. Se o cirurgião operar o RVU sem tratar a bexiga e o intestino, as altas pressões vesicais levarão à falha precoce da cirurgia antirrefluxo e a novas infecções.",
    "comentariosAlternativas": {
      "A": "Correta. O tratamento da disfunção miccional e da constipação reduz as pressões vesicais e pode curar o RVU sem cirurgia.",
      "B": "Incorreta. Justificativa absurda sobre gás hélio.",
      "C": "Incorreta. O reimplante ureteral não trata a incoordenação esfincteriana ou o intestino.",
      "D": "Incorreta. Laxativos regulam o trânsito intestinal e não destroem tecidos urológicos."
    }
  },
  {
    "id": "ped-itu-074",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Manejo do Refluxo Vesicoureteral",
    "enunciado": "Em meninos com Refluxo Vesicoureteral grave (graus IV ou V) e episódios repetidos de pielonefrite aguda na vigência de prepúcio com anel fótico e orifício estreito, qual procedimento cirúrgico urológico simples reduz drasticamente (em mais de 80 a 90%) o risco de novas ITUs?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Postectomia (Circuncisão)."
      },
      {
        "id": "B",
        "texto": "Orquidopexia bilateral de rotina."
      },
      {
        "id": "C",
        "texto": "Ressecção do colo vesical."
      },
      {
        "id": "D",
        "texto": "Secção bilateral dos nervos pudendos."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A superfície interna do prepúcio possui alta concentração de receptores para as fímbrias da Escherichia coli uropatogênica, funcionando como um grande reservatório de colonização bacteriana no menino. Estudos demonstram que a circuncisão (postectomia) reduz a taxa de colonização bacteriana periuretral e diminui em até 90% a incidência de infecções do trato urinário em meninos com uropatias predisponentes de alto risco (como RVU dilatante).",
    "comentariosAlternativas": {
      "A": "Correta. A postectomia elimina o reservatório prepucial de uropatógenos, reduzindo em ~90% o risco de ITU no menino com RVU.",
      "B": "Incorreta. Orquidopexia trata criptorquidia, sem relação com colonização bacteriana urinária.",
      "C": "Incorreta. Ressecção do colo vesical causaria incontinência urinária grave.",
      "D": "Incorreta. Denervação pudenda causaria incontinência fecal e urinária permanente."
    }
  },
  {
    "id": "ped-itu-075",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Manejo do Refluxo Vesicoureteral",
    "enunciado": "Após a realização de um Reimplante Ureteral cirúrgico ou injeção endoscópica de Deflux para tratamento de RVU, qual exame de imagem não invasivo e em que momento ele deve ser obrigatoriamente realizado para descartar Obstrução Iatrogênica da junção ureterovesical?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ultrassonografia de Rins e Vias Urinárias realizada entre 4 e 6 semanas de pós-operatório (para avaliar hidronefrose obstrutiva pós-operatória)."
      },
      {
        "id": "B",
        "texto": "Tomografia de crânio com contraste aos 6 meses."
      },
      {
        "id": "C",
        "texto": "Uretrocistografia miccional na sala de recuperação pós-anestésica."
      },
      {
        "id": "D",
        "texto": "Radiografia simples de ossos longos aos 10 dias."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A principal complicação precoce do reimplante ureteral ou da injeção de agentes de preenchimento é a estenose/obstrução da junção ureterovesical decorrente de edema excessivo, hematoma ou criação de um túnel submucoso demasiadamente apertado. Recomenda-se a realização de uma Ultrassonografia renal após 4 a 6 semanas para assegurar que não há ureterohidronefrose obstrutiva secundária à intervenção cirúrgica.",
    "comentariosAlternativas": {
      "A": "Correta. USG de controle pós-operatório (4-6 semanas) descarta estenose/obstrução iatrogênica da junção.",
      "B": "Incorreta. TC de crânio não tem correlação com complicações locais urológicas.",
      "C": "Incorreta. A UCM imediata na RPA é invasiva e contraindicada na ferida cirúrgica fresca.",
      "D": "Incorreta. Raio X de ossos longos não avalia vias urinárias."
    }
  },
  {
    "id": "ped-itu-076",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Válvula de Uretra Posterior (VUP)",
    "enunciado": "Qual é a anomalia congênita obstrutiva infravesical mais frequente do trato urinário inferior em pacientes do sexo masculino, representando uma das principais causas de doença renal crônica terminal na infância?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Válvula de Uretra Posterior (VUP)."
      },
      {
        "id": "B",
        "texto": "Estenose congênita do meato uretral anterior isolada."
      },
      {
        "id": "C",
        "texto": "Duplicação uretral completa em Y."
      },
      {
        "id": "D",
        "texto": "Divertículo congênito da uretra pendular."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Válvula de Uretra Posterior (VUP) é a causa mais comum de obstrução infravesical grave no recém-nascido e lactente do sexo masculino (incidência aproximada de 1 para cada 4.000 a 8.000 nascidos vivos masculinos). Consiste em pregas mucosas anômalas membranosas no nível do verumontanum na uretra prostática que agem como válvulas unidirecionais, impedindo a saída da urina da bexiga.",
    "comentariosAlternativas": {
      "A": "Correta. A Válvula de Uretra Posterior é a principal causa de obstrução infravesical congênita no sexo masculino.",
      "B": "Incorreta. Estenose de meato é mais comumente adquirida pós-postectomia ou trauma e causa obstrução distal menos grave.",
      "C": "Incorreta. Duplicação uretral é anomalia anatômica rara.",
      "D": "Incorreta. Divertículo uretral anterior é muito menos frequente do que a VUP."
    }
  },
  {
    "id": "ped-itu-077",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Válvula de Uretra Posterior (VUP)",
    "enunciado": "Gestante no 3º trimestre realiza ultrassonografia obstétrica morfológica que revela feto masculino com: bexiga fetal intensamente distendida com parede muscular espessada e trabeculada, uretra posterior dilatada gerando o clássico \"sinal do buraco de fechadura\" (keyhole sign), ureterohidronefrose bilateral e oligoâmnio acentuado. Qual diagnóstico fetal esses achados definem?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Válvula de Uretra Posterior (VUP) com obstrução do trato urinário inferior (LUTO)."
      },
      {
        "id": "B",
        "texto": "Cisto de colédoco intra-abdominal congênito."
      },
      {
        "id": "C",
        "texto": "Agenesia renal bilateral com feto viável."
      },
      {
        "id": "D",
        "texto": "Teratoma sacrococcígeo tipo 1."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A imagem ultrassonográfica da bexiga distendida com colo aberto e uretra prostática dilatada projeta o clássico aspecto do \"buraco de fechadura\" (keyhole sign), que associado a espessamento parietal da bexiga, hidronefrose bilateral e oligoidrâmnio em feto do sexo masculino é virtualmente patognomônico de Válvula de Uretra Posterior com Obstrução do Trato Urinário Inferior (LUTO - Lower Urinary Tract Obstruction).",
    "comentariosAlternativas": {
      "A": "Correta. Bexiga espessada, keyhole sign e hidronefrose bilateral no feto masculino definem VUP.",
      "B": "Incorreta. Cisto de colédoco situa-se no hipocôndrio direito na via biliar.",
      "C": "Incorreta. Na agenesia renal bilateral a bexiga não se enche (ausência de urina).",
      "D": "Incorreta. Teratoma sacrococcígeo é massa tumoral pélvica perineal extrínseca."
    }
  },
  {
    "id": "ped-itu-078",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Válvula de Uretra Posterior (VUP)",
    "enunciado": "Qual é a complicação extra-renal mais grave e potencialmente letal associada à presença de Válvula de Uretra Posterior grave com oligoidrâmnio acentuado e precoce durante a gestação?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Hipoplasia Pulmonar grave com insuficiência respiratória neonatal imediata refratária (Sequência de Potter)."
      },
      {
        "id": "B",
        "texto": "Cardiopatia congênita cianótica com transposição dos grandes vasos."
      },
      {
        "id": "C",
        "texto": "Atresia congênita de esôfago sem fístula traqueal."
      },
      {
        "id": "D",
        "texto": "Fechamento intrauterino precoce do ducto arterioso."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O líquido amniótico no segundo e terceiro trimestres é composto quase que exclusivamente por urina fetal. A obstrução uretral grave impede o esvaziamento da urina para a cavidade amniótica, gerando anidrâmnio/oligoâmnio severo. Como o líquido amniótico é fundamental para a expansão mecânica e desenvolvimento dos alvéolos e vias aéreas fetais, o oligoâmnio leva à Hipoplasia Pulmonar grave e deformidades esqueléticas/faciais (Sequência de Potter), sendo a hipoplasia pulmonar a principal causa de óbito neonatal na primeira hora de vida.",
    "comentariosAlternativas": {
      "A": "Correta. Oligoidrâmnio severo gera hipoplasia pulmonar grave na Sequência de Potter, causa de óbito neonatal.",
      "B": "Incorreta. VUP não altera a septação conotruncal cardiovascular primária.",
      "C": "Incorreta. Atresia de esôfago causa polidrâmnio, não oligoâmnio.",
      "D": "Incorreta. O canal arterial permanece aberto fisiologicamente sob estímulo de PGE2 placentária."
    }
  },
  {
    "id": "ped-itu-079",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Válvula de Uretra Posterior (VUP)",
    "enunciado": "Recém-nascido a termo do sexo masculino com 48 horas de vida apresenta recusa de mamadas, palidez e hipotermia. Ao exame físico: abdome distendido com bexiga palpável e tensa até a cicatriz umbilical (globo vesical firme permanente). Durante a micção espontânea, observa-se ausência de jato miccional contínuo vigoroso, apresentando apenas gotejamento intermitente e fraco (\"jato em gota a gota\"). Qual é a principal hipótese diagnóstica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Válvula de Uretra Posterior (VUP)."
      },
      {
        "id": "B",
        "texto": "Doença da membrana hialina pulmonar pura."
      },
      {
        "id": "C",
        "texto": "Encefalopatia hipóxico-isquêmica isolada."
      },
      {
        "id": "D",
        "texto": "Estenose hipertrófica congênita de piloro."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A tríade clássica do recém-nascido masculino com VUP ao nascimento consiste em: 1) Jato urinário anormal (fraco, fino, intermitente ou gotejamento em gotas); 2) Bexiga palpável, globosa e tensa que não esvazia após a micção (bexigoma permanente); 3) Sinais de uremia, acidose metabólica e sepse urinária secundária. Essa apresentação clínica exige intervenção descompressiva imediata.",
    "comentariosAlternativas": {
      "A": "Correta. Menino neonato com bexigoma tenso e jato urinário fraco em gotas define quadro clássico de VUP.",
      "B": "Incorreta. Membrana hialina decorre de prematuridade e déficit de surfactante em pulmões.",
      "C": "Incorreta. Não justifica o globo vesical e a obstrução do fluxo urinário.",
      "D": "Incorreta. Estenose de piloro cursa com vômitos em jato não biliosos após as primeiras semanas de vida."
    }
  },
  {
    "id": "ped-itu-080",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Válvula de Uretra Posterior (VUP)",
    "enunciado": "Qual é a conduta prioritária e emergencial imediata que deve ser tomada logo após o nascimento de um recém-nascido com forte suspeita ou diagnóstico confirmado de Válvula de Uretra Posterior com bexiga distendida e oligúria?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Descompressão vesical imediata por meio de cateterismo uretral de fino calibre (sonda de alívio ou Foley 6 a 8 Fr) associada à estabilização hidroeletrolítica e correção de acidose."
      },
      {
        "id": "B",
        "texto": "Furosemida intravenosa em alta dose em bólus rápido para forçar diurese."
      },
      {
        "id": "C",
        "texto": "Observação expectante domiciliar por 30 dias para avaliar o fechamento espontâneo da válvula."
      },
      {
        "id": "D",
        "texto": "Paracentese abdominal evacuadora de grande volume."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A prioridade absoluta e salvadora no neonato com suspeita de VUP é a DESCOMPRESSÃO VESICAL IMEDIATA. A passagem de uma sonda vesical de fino calibre (cateter uretral 6 ou 8 Fr) ultrapassa as válvulas membranosas e drena o reservatório vesical, aliviando a contrapressão retrógrada sobre os rins e ureteres, permitindo a recuperação da função renal, monitorização do débito urinário e prevenção de urossepse fulminante.",
    "comentariosAlternativas": {
      "A": "Correta. Descompressão vesical imediata com passagem de cateter uretral fino e estabilização metabólica.",
      "B": "Incorreta. Diuréticos em sistema obstrutivo não funcionam e provocam rotura de via urinária ou piora da hidronefrose.",
      "C": "Incorreta. A VUP é uma membrana anatômica que nunca involui espontaneamente; atraso gera óbito por insuficiência renal.",
      "D": "Incorreta. A distensão é vesical e não ascite livre volumosa."
    }
  },
  {
    "id": "ped-itu-081",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Válvula de Uretra Posterior (VUP)",
    "enunciado": "Qual achado radiológico patognomônico é visualizado na fase miccional da Uretrocistografia Miccional (UCM) em um menino com Válvula de Uretra Posterior?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Uretra posterior (prostática) marcadamente dilatada e elongada, com afilamento abrupto ou interrupção do fluxo de contraste na transição para a uretra bulbar/membranosa anterior afilada."
      },
      {
        "id": "B",
        "texto": "Ausência total de contraste no interior da bexiga por agenesia vesical completa."
      },
      {
        "id": "C",
        "texto": "Refluxo retrógrado exclusivo para as artérias umbilicais."
      },
      {
        "id": "D",
        "texto": "Dilatação aneurismática isolada da glande peniana."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O exame de escolha definitivo para o diagnóstico de VUP é a UCM. Na fase miccional com o paciente urinando, o contraste preenche a bexiga trabeculada e a uretra posterior: como as válvulas se opõem à saída do fluxo, a uretra prostática sofre dilatação e balonamento extremos, contrastando abruptamente com a uretra bulbar e anterior que permanece colapsada ou filamentosa distalmente às válvulas.",
    "comentariosAlternativas": {
      "A": "Correta. Uretra prostática amplamente dilatada com transição e afilamento abrupto na transição membranosa.",
      "B": "Incorreta. A bexiga enche-se normalmente e costuma estar espessada.",
      "C": "Incorreta. O contraste vesical não penetra no sistema arterial umbilical obliterado.",
      "D": "Incorreta. A anomalia é na uretra posterior profunda, não na glande."
    }
  },
  {
    "id": "ped-itu-082",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Válvula de Uretra Posterior (VUP)",
    "enunciado": "Qual é o tratamento cirúrgico definitivo padrão-ouro de primeira escolha para desobstrução da Válvula de Uretra Posterior em recém-nascidos e lactentes estáveis após descompressão inicial e uretra de calibre adequado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ablação (ou Fulguração) Endoscópica primária das válvulas por via transuretral sob visão direta com cistoscópio pediátrico."
      },
      {
        "id": "B",
        "texto": "Cistectomia radical com derivação urinária continente em bolsa ileal."
      },
      {
        "id": "C",
        "texto": "Ureterostomia cutânea alta definitiva em todos os casos."
      },
      {
        "id": "D",
        "texto": "Prostatectomia suprapúbica aberta com reconstrução do colo."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O tratamento de escolha e curativo definitivo da VUP é a Ablação Endoscópica Transuretral das válvulas. Utilizando um cistoscópio pediátrico de fino calibre sob visão direta, as lâminas mucosas anômalas da uretra posterior são incisadas/fulguradas (habitualmente nas posições de 5, 7 e 12 horas do mostrador do relógio) com gancho eletrocirúrgico, eletrodo ou laser, restaurando o calibre normal do lúmen uretral.",
    "comentariosAlternativas": {
      "A": "Correta. A ablação/fulguração endoscópica transuretral das válvulas é a cirurgia padrão-ouro curativa.",
      "B": "Incorreta. Cistectomia radical é cirurgia oncológica de mutilação vesical.",
      "C": "Incorreta. Derivações altas (vesicostomia/ureterostomia) são exceções reservadas para prematuros extremos ou falência endoscópica.",
      "D": "Incorreta. A próstata do neonato não deve ser ressecada cirurgicamente."
    }
  },
  {
    "id": "ped-itu-083",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Válvula de Uretra Posterior (VUP)",
    "enunciado": "Mesmo após a ablação cirúrgica bem sucedida da válvula com desobstrução uretral anatômica completa, muitos meninos com histórico de VUP persistem com disfunção miccional crônica, perda involuntária de urina e dilatação progressiva do trato superior (\"Síndrome da Bexiga da VUP\" / Valve Bladder Syndrome). Qual é a fisiopatologia dessa disfunção vesical residual?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Espessamento miogênico hipertrófico da parede vesical com depósito de colágeno, resultando em bexiga de baixa complacência, hiperatividade do detrusor e pressões intravesicais patologicamente elevadas com resíduo urinário permanente."
      },
      {
        "id": "B",
        "texto": "Denervação somática congênita do plexo celíaco gástrico."
      },
      {
        "id": "C",
        "texto": "Infecção crônica por citomegalovírus nos podócitos renais."
      },
      {
        "id": "D",
        "texto": "Fechamento congênito irreversível da junção ureteropélvica contralateral."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Durante toda a vida fetal, a bexiga contraiu-se contra uma obstrução fixa de alta resistência, gerando hipertrofia maciça do detrusor com proliferação de tecido conjuntivo e fibrose entre os feixes musculares. Essa bexiga desestruturada perde a complacência e exibe contrações não inibidas sob altíssima pressão (Valve Bladder Syndrome). Mesmo desobstruída a uretra, as pressões intravesicais permanecem altas, exigindo tratamento com anticolinérgicos (oxibutinina) ou cateterismo intermitente limpo.",
    "comentariosAlternativas": {
      "A": "Correta. Hipertrofia do detrusor com perda de complacência e hiperatividade pressórica caracteriza a bexiga da VUP.",
      "B": "Incorreta. O plexo celíaco inerva o trato digestivo superior, não a bexiga urinária.",
      "C": "Incorreta. Não se relaciona a citomegalovirose.",
      "D": "Incorreta. Não decorre de estenose de JUP contralateral."
    }
  },
  {
    "id": "ped-itu-084",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Válvula de Uretra Posterior (VUP)",
    "enunciado": "Qual é o principal determinante prognóstico para a função renal a longo prazo em um paciente tratado de Válvula de Uretra Posterior?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O grau de Displasia Renal Congênita associada desenvolvida durante a embriogênese sob alta pressão urinária e a dosagem do nadir da creatinina sérica no primeiro ano de vida (especialmente nadir < 0,8-1,0 mg/dL)."
      },
      {
        "id": "B",
        "texto": "A quantidade de dentes erupcionados no primeiro ano de vida."
      },
      {
        "id": "C",
        "texto": "A presença de icterícia fisiológica neonatal na primeira semana."
      },
      {
        "id": "D",
        "texto": "A presença de sopro cardíaco inocente de Still na primeira infância."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Cerca de um terço dos meninos com VUP evoluem para Doença Renal Crônica terminal na adolescência ou idade adulta jovem, mesmo com desobstrução uretral perfeita. Isso ocorre porque a obstrução precoce na vida embrionária induz Displasia Renal Obstrutiva (desorganização dos túbulos e glomérulos com perda congênita de néfrons). O melhor preditor prognóstico da reserva renal funcional é o menor valor de creatinina sérica atingido no primeiro ano de vida (o nadir da creatinina): se o nadir for < 0,8-1,0 mg/dL, o prognóstico renal é excelente.",
    "comentariosAlternativas": {
      "A": "Correta. O grau de displasia renal congênita e o nadir da creatinina no 1º ano são os grandes preditores de sobrevida renal.",
      "B": "Incorreta. Erupção dentária não interfere na função renal.",
      "C": "Incorreta. Icterícia fisiológica não tem correlação nefrológica.",
      "D": "Incorreta. Sopro inocente é variante normal cardiovascular."
    }
  },
  {
    "id": "ped-itu-085",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Quimioprofilaxia de ITU",
    "enunciado": "Qual é o princípio posológico e o melhor horário de administração da quimioprofilaxia antimicrobiana contínua em crianças com indicação formal de prevenção de ITU de repetição?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Utilização de aproximadamente 1/4 a 1/3 da dose terapêutica diária habitual, administrada em dose ÚNICA diária preferencialmente à NOITE (ao deitar), período em que o intervalo miccional é mais prolongado e o antibiótico permanece concentrado na bexiga por várias horas."
      },
      {
        "id": "B",
        "texto": "Dose máxima terapêutica dobrada administrada a cada 4 horas ininterruptamente por 2 anos."
      },
      {
        "id": "C",
        "texto": "Infusão intravenosa semanal contínua sob regime de internação domiciliar."
      },
      {
        "id": "D",
        "texto": "Administração exclusiva pela manhã em jejum associada a laxante diário."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A quimioprofilaxia antimicrobiana visa manter níveis bactericidas mínimos na urina vesical sem provocar toxicidade sistêmica nem suprimir a flora bacteriana intestinal normal. Utiliza-se 1/3 a 1/4 da dose diária de tratamento em tomada única à noite. O horário noturno ao deitar é estratégico porque a bexiga permanece cheia por 8 a 10 horas de sono, permitindo que o fármaco atue exatamente durante a estase fisiológica noturna.",
    "comentariosAlternativas": {
      "A": "Correta. 1/4 a 1/3 da dose terapêutica em dose única noturna ao deitar é o regime padrão.",
      "B": "Incorreta. Dose dobrada causaria toxicidade grave e rápida indução de resistência bacteriana.",
      "C": "Incorreta. A profilaxia é oral ambulatorial, não intravenosa invasiva de internação.",
      "D": "Incorreta. A tomada noturna é muito mais eficaz que a matinal devido ao tempo de estase vesical no sono."
    }
  },
  {
    "id": "ped-itu-086",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Quimioprofilaxia de ITU",
    "enunciado": "Lactente de 25 dias de vida com diagnóstico pré-natal de hidronefrose bilateral importante aguarda investigação anatômica com UCM. Diante da necessidade de iniciar quimioprofilaxia antimicrobiana nessa faixa etária (< 2 meses de vida), qual é o antimicrobiano oral de escolha?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Cefalexina por via oral (10 a 25 mg/kg/dia em dose única noturna) ou Amoxicilina."
      },
      {
        "id": "B",
        "texto": "Nitrofurantoína em suspensão oral contínua."
      },
      {
        "id": "C",
        "texto": "Sulfametoxazol-Trimetoprima em dose cheia."
      },
      {
        "id": "D",
        "texto": "Ciprofloxacino oral associado a doxiciclina."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Em recém-nascidos e lactentes com MENOS de 2 meses de vida, as opções profiláticas padrão são a Cefalexina (cefalosporina de 1ª geração em dose profilática de 10 a 25 mg/kg/dia à noite) ou a Amoxicilina. A Nitrofurantoína e o Sulfametoxazol-Trimetoprima são formalmente contraindicados abaixo dos 2 meses de idade devido ao risco de reações adversas metabólicas e hematológicas potencialmente fatais.",
    "comentariosAlternativas": {
      "A": "Correta. Cefalexina (ou amoxicilina) é a droga de escolha para quimioprofilaxia em menores de 2 meses.",
      "B": "Incorreta. Nitrofurantoína é contraindicada em menores de 1-2 meses pelo risco de anemia hemolítica.",
      "C": "Incorreta. SMX-TMP é contraindicado em menores de 2 meses pelo risco de kernicterus.",
      "D": "Incorreta. Quinolonas e tetraciclinas são contraindicadas na rotina profilática neonatal."
    }
  },
  {
    "id": "ped-itu-087",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Quimioprofilaxia de ITU",
    "enunciado": "Por qual razão farmacológica a NITROFURANTOÍNA é expressamente contraindicada para profilaxia ou tratamento de infecções urinárias em lactentes menores de 1 a 2 meses de vida?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Devido à imaturidade dos sistemas enzimáticos eritrocitários do neonato (em especial o sistema da glutationa e G6PD), o que predispõe à ocorrência de Anemia Hemolítica aguda grave induzida por estresse oxidativo."
      },
      {
        "id": "B",
        "texto": "Risco de necrose fulminante do timo mediastinal com imunodeficiência combinada."
      },
      {
        "id": "C",
        "texto": "Indução imediata de fechamento das suturas cranianas gerando cranioestenose universal."
      },
      {
        "id": "D",
        "texto": "Capacidade de causar esclerodermia sistêmica congênita irreversível."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Nos primeiros meses de vida, as hemácias dos neonatos apresentam instabilidade da glutationa e níveis imaturos de enzimas antioxidantes. A nitrofurantoína gera metabólitos reativos e estresse oxidativo que precipitam hemólise intravascular e meta-hemoglobinemia (anemia hemolítica grave), contraindicando seu uso estrito em menores de 1 a 2 meses de idade.",
    "comentariosAlternativas": {
      "A": "Correta. Imaturidade dos sistemas eritrocitários antioxidantes com risco de anemia hemolítica grave.",
      "B": "Incorreta. Não induz necrose tímica.",
      "C": "Incorreta. Não interfere na ossificação das suturas cranianas.",
      "D": "Incorreta. Não tem correlação com esclerodermia."
    }
  },
  {
    "id": "ped-itu-088",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Quimioprofilaxia de ITU",
    "enunciado": "Por que o SULFAMETOXAZOL-TRIMETOPRIMA (SMX-TMP) é contraindicado no período neonatal e nos primeiros 2 meses de vida para quimioprofilaxia de ITU?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Porque as sulfas competem com a bilirrubina não conjugada pelos sítios de ligação na albumina sérica, deslocando a fração livre de bilirrubina e aumentando o risco de Encefalopatia Bilirrubínica (Kernicterus), além da imaturidade hepática de glucuronidação neonatal."
      },
      {
        "id": "B",
        "texto": "Porque a droga bloqueia irreversivelmente a absorção intestinal de oxigênio gasoso."
      },
      {
        "id": "C",
        "texto": "Devido ao risco de alopecia total permanente em 100% dos recém-nascidos expostos."
      },
      {
        "id": "D",
        "texto": "Porque o trimetoprima provoca fibrose pulmonar cística congênita."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Sulfametoxazol desloca competitivamente a bilirrubina indireta dos sítios de ligação com a albumina plasmática. No neonato, cuja barreira hematoencefálica ainda é muito permeável, a elevação da bilirrubina livre circulante facilita sua impregnação nos núcleos da base do cérebro, desencadeando Kernicterus. Por essa razão, sulfas são rigorosamente contraindicadas em menores de 6 a 8 semanas (2 meses).",
    "comentariosAlternativas": {
      "A": "Correta. O deslocamento da bilirrubina da albumina eleva a bilirrubina livre e o risco de kernicterus.",
      "B": "Incorreta. A absorção de oxigênio é pulmonar e não intestinal.",
      "C": "Incorreta. Não causa alopecia universal congênita.",
      "D": "Incorreta. Trimetoprima atua na di-hidrofolato redutase bacteriana, sem relação com fibrose cística."
    }
  },
  {
    "id": "ped-itu-089",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Quimioprofilaxia de ITU",
    "enunciado": "Lactente de 7 meses, feminina, com diagnóstico confirmado de Refluxo Vesicoureteral bilateral Grau IV, necessita de quimioprofilaxia antimicrobiana contínua. Quais são as duas opções de primeira linha preconizadas pelas diretrizes internacionais e nacionais para crianças maiores de 2 meses?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Nitrofurantoína (1 a 2 mg/kg/dia em dose única noturna) OU Sulfametoxazol-Trimetoprima (2 mg/kg/dia de TMP em dose única noturna)."
      },
      {
        "id": "B",
        "texto": "Ciprofloxacino intravenoso semanal OU Vancomicina oral contínua."
      },
      {
        "id": "C",
        "texto": "Penicilina G Benzatina a cada 15 dias OU Amicacina oral diária."
      },
      {
        "id": "D",
        "texto": "Metronidazol oral associado a aciclovir profilático por 1 ano."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Para crianças acima de 2 meses de vida com indicação formal de quimioprofilaxia (como RVU dilatante de alto grau), as drogas padrão-ouro de primeira linha são a Nitrofurantoína (1 a 2 mg/kg/dia em dose única noturna) ou o Sulfametoxazol-Trimetoprima (2 mg/kg/dia com base no componente trimetoprima em dose noturna). A nitrofurantoína é particularmente vantajosa por não alterar a microbiota bacteriana fecal.",
    "comentariosAlternativas": {
      "A": "Correta. Nitrofurantoína (1-2 mg/kg/dia) ou SMX-TMP (2 mg/kg/dia de TMP) em dose única noturna.",
      "B": "Incorreta. Ciprofloxacino e vancomicina não são drogas de primeira linha para profilaxia ambulatorial.",
      "C": "Incorreta. Penicilina Benzatina é para febre reumática e amicacina não é absorvida por via oral.",
      "D": "Incorreta. Metronidazol e aciclovir não cobrem uropatógenos entéricos Gram-negativos."
    }
  },
  {
    "id": "ped-itu-090",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Quimioprofilaxia de ITU",
    "enunciado": "Qual das seguintes crianças apresenta indicação FORMAL estabelecida para o início de quimioprofilaxia antimicrobiana contínua segundo os consensos da Sociedade Brasileira de Pediatria e da Academia Americana de Pediatria?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Lactente de 4 meses com diagnóstico comprovado de Refluxo Vesicoureteral Grau IV à UCM enquanto aguarda avaliação cirúrgica especializada."
      },
      {
        "id": "B",
        "texto": "Menina de 6 anos que apresentou um único episódio de cistite afebril resolvida com 3 dias de nitrofurantoína."
      },
      {
        "id": "C",
        "texto": "Lactente de 1 ano com bacteriúria assintomática comprovada em urina de jato médio sem qualquer cicatriz."
      },
      {
        "id": "D",
        "texto": "Recém-nascido a termo com ultrassonografia pré e pós-natal rigorosamente normais."
      }
    ],
    "correta": "A",
    "comentarioGeral": "As indicações formais aceitas para quimioprofilaxia incluem: 1) Refluxo Vesicoureteral de alto grau (graus III, IV e V), especialmente em menores de 1 ano; 2) Crianças com episódios frequentes de ITU febril de repetição (≥ 2 a 3 episódios em 6 a 12 meses); 3) Presença de uropatias obstrutivas em programação de cirurgia; 4) Período pós-operatório imediato de reconstruções urológicas ou cistoscopia com manipulação. Não está indicada após episódio único de cistite nem em bacteriúria assintomática.",
    "comentariosAlternativas": {
      "A": "Correta. RVU de alto grau (grau IV) em lactente é indicação formal de quimioprofilaxia contínua.",
      "B": "Incorreta. Primeiro episódio de cistite baixa em escolar não tem qualquer indicação de profilaxia.",
      "C": "Incorreta. Bacteriúria assintomática não deve receber profilaxia.",
      "D": "Incorreta. Neonato saudável com exames normais não requer quimioprofilaxia."
    }
  },
  {
    "id": "ped-itu-091",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Quimioprofilaxia de ITU",
    "enunciado": "Por que os grandes ensaios clínicos randomizados multicêntricos (como o estudo RIVUR e PRIVENT) e as diretrizes recentes da AAP NÃO recomendam mais a quimioprofilaxia antimicrobiana de rotina para crianças após o primeiro episódio de ITU febril quando não há Refluxo Vesicoureteral ou quando há apenas RVU de baixo grau (graus I e II)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Porque a profilaxia contínua nesses casos não demonstrou redução significativa na incidência de cicatrizes renais permanentes e eleva substancialmente o risco de infecções futuras por cepas de Escherichia coli multirresistentes."
      },
      {
        "id": "B",
        "texto": "Porque os antibióticos orais causam fechamento precoce das cartilagens de crescimento."
      },
      {
        "id": "C",
        "texto": "Porque o primeiro episódio de ITU imuniza a criança contra qualquer uropatógeno bacteriano."
      },
      {
        "id": "D",
        "texto": "Porque a profilaxia causa atrofia congênita da bexiga em mais de 70% das crianças."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Evidências robustas demonstraram que o uso indiscriminado de antibióticos profiláticos contínuos em crianças sem refluxo ou com refluxo leve não reduz a formação de novas cicatrizes renais e seleciona bactérias multirresistentes da microbiota fecal. Quando essas crianças desenvolvem uma nova infecção, ela é causada por bactérias resistentes a cefalosporinas e ampicilinas, com maior morbidade.",
    "comentariosAlternativas": {
      "A": "Correta. Ausência de benefício na prevenção de cicatrizes e indução de resistência bacteriana fecal.",
      "B": "Incorreta. Antibióticos usuais de ITU não fecham cartilagens de crescimento.",
      "C": "Incorreta. Não existe imunidade protetora esterilizante duradoura contra uropatógenos.",
      "D": "Incorreta. A profilaxia não causa atrofia muscular vesical."
    }
  },
  {
    "id": "ped-itu-092",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Quimioprofilaxia de ITU",
    "enunciado": "Menino de 4 anos em uso de quimioprofilaxia prolongada com Nitrofurantoína há 10 meses devido a RVU grau IV desenvolve tosse seca persistente, taquipneia aos esforços e febrícula vespertina. A ausculta pulmonar revela crepitações tele-inspiratórias bilaterais e o RX de tórax exibe infiltrado intersticial bibasilar difuso. Qual efeito adverso pulmonar raro da nitrofurantoína deve ser suspeitado e qual é a conduta imediata?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pneumonite Intersticial induzida por Nitrofurantoína (toxicidade pulmonar por hipersensibilidade crônica); suspensão imediata da medicação e troca da profilaxia."
      },
      {
        "id": "B",
        "texto": "Asma brônquica alérgica induzida por esforço físico; aumentar a dose da nitrofurantoína para controlar a inflamação."
      },
      {
        "id": "C",
        "texto": "Metástase pulmonar difusa de rabdomiossarcoma de bexiga."
      },
      {
        "id": "D",
        "texto": "Tuberculose miliar primária adquirida por transmissão hídrica."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Nitrofurantoína em uso prolongado (meses a anos) pode causar reações adversas pulmonares raras, que variam de reações agudas de hipersensibilidade (febre, tosse, dispneia e eosinofilia) a pneumonite intersticial crônica com fibrose pulmonar insidiosa. A suspeita clínica impõe a SUSPENSÃO IMEDIATA da droga, que geralmente leva à reversão completa dos sintomas.",
    "comentariosAlternativas": {
      "A": "Correta. Pneumonite intersticial por nitrofurantoína exige suspensão imediata da droga e substituição.",
      "B": "Incorreta. Aumentar a nitrofurantoína agravaria a lesão pulmonar com risco de fibrose permanente.",
      "C": "Incorreta. O quadro clínico e radiológico é compatível com toxicidade medicamentosa pulmonar reversível.",
      "D": "Incorreta. Não há história de contato com TB e o quadro coincide com uso prolongado de nitrofurantoína."
    }
  },
  {
    "id": "ped-itu-093",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Disfunção do Trato Urinário Inferior e Constipação",
    "enunciado": "Qual é o conceito e a relevância clínica da Síndrome de Eliminação Disfuncional (ou Disfunção Vesical e Intestinal - BBD / Bladder and Bowel Dysfunction) em meninas com episódios repetidos de infecção do trato urinário?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A associação fisiopatológica e funcional entre constipação intestinal crônica e disfunção do trato urinário inferior (incontinência, urgência ou retenção), sendo a causa tratável mais comum de infecções urinárias recorrentes na infância."
      },
      {
        "id": "B",
        "texto": "Uma doença genética mitocondrial incurável transmitida exclusivamente pelo cromossomo Y."
      },
      {
        "id": "C",
        "texto": "Uma anomalia anatômica congênita que exige amputação cirúrgica do esfíncter anal."
      },
      {
        "id": "D",
        "texto": "A presença concomitante de ascite volumosa e insuficiência pancreática exócrina."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Disfunção Vesical e Intestinal (BBD ou Síndrome de Eliminação Disfuncional) descreve a coocorrência de constipação crônica e distúrbios miccionais (como hiperatividade detrusora, micção postergada ou incoordenação esfincteriana). Devido à proximidade anatômica e inervação parassimpática compartilhada (S2-S4), a disfunção de um órgão desestabiliza o outro, sendo o principal fator de risco não anatômico para ITUs de repetição em crianças com controle esfincteriano.",
    "comentariosAlternativas": {
      "A": "Correta. BBD é a associação fisiopatológica entre constipação e disfunção miccional, grande vilã de ITUs de repetição.",
      "B": "Incorreta. BBD é uma disfunção funcional adquirida e tratável, muito mais prevalente em meninas.",
      "C": "Incorreta. O esfíncter anal é anatômica e neurologicamente íntegro; não há indicação cirúrgica.",
      "D": "Incorreta. Não envolve ascite ou insuficiência pancreática."
    }
  },
  {
    "id": "ped-itu-094",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Disfunção do Trato Urinário Inferior e Constipação",
    "enunciado": "Como a constipação intestinal crônica (retenção fecal na ampola retal) atua diretamente como fator causal mecânico e funcional para o desenvolvimento de infecção do trato urinário de repetição?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O fecaloma ou fezes volumosas retidas na ampola retal comprimem a parede posterior da bexiga e o colo vesical, desencadeando contrações involuntárias do detrusor, obstrução funcional à saída da urina com esvaziamento incompleto (resíduo pós-miccional elevado) e proliferação bacteriana maciça no introito perineal."
      },
      {
        "id": "B",
        "texto": "As fezes acumuladas no cólon secretam endotoxinas que entram nos glomérulos renais por transporte ativo."
      },
      {
        "id": "C",
        "texto": "A constipação impede a síntese hepática de imunoglobulinas protetoras."
      },
      {
        "id": "D",
        "texto": "A ausência de evacuações eleva a concentração de cálcio na urina dissolvendo a mucosa vesical."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A ampola retal dilatada por fezes ressecadas projeta-se anteriormente contra a base da bexiga e colo vesical. Isso causa compressão mecânica do fluxo urinário e instabilidade do detrusor, resultando em estase urinária e resíduo pós-miccional aumentado (meio de cultura ideal para bactérias). Paralelamente, o ressecamento fecal e a higiene perineal prejudicada aumentam a carga e aderência de E. coli no vestíbulo vulvar.",
    "comentariosAlternativas": {
      "A": "Correta. Compressão mecânica vesical, resíduo pós-miccional aumentado e contaminação perineal explicam o mecanismo.",
      "B": "Incorreta. Não há transporte ativo glomerular de endotoxinas fecais.",
      "C": "Incorreta. A síntese de imunoglobulinas plasmáticas não é dependente da evacuação diária.",
      "D": "Incorreta. Não ocorre dissolução tecidual por hipercalcemia."
    }
  },
  {
    "id": "ped-itu-095",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Disfunção do Trato Urinário Inferior e Constipação",
    "enunciado": "Menina de 6 anos com ITUs de repetição é observada pela mãe realizando frequentemente uma postura corporal característica ao sentir vontade de urinar: agacha-se subitamente pressionando o calcanhar contra o períneo ou cruza as pernas com força e contrai as nádegas (\"Manobra de Vincent\"). Qual é o significado semiológico dessa manobra de contenção?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Reflete uma tentativa comportamental involuntária de conter a perda urinária causada por contrações não inibidas e súbitas do músculo detrusor (hiperatividade detrusora com urgência miccional)."
      },
      {
        "id": "B",
        "texto": "Sinal patognomônico de fratura de bacia pediátrica por estresse."
      },
      {
        "id": "C",
        "texto": "Movimento coreiforme involuntário secundário a febre reumática neurológica."
      },
      {
        "id": "D",
        "texto": "Manobra para aliviar a cólica biliar associada a colelitíase congênita."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A \"Manobra de Vincent\" (Vincent curtsey) é uma postura de contenção clássica adotada por crianças com hiperatividade detrusora / bexiga hiperativa. Quando a bexiga contrai involuntariamente gerando urgência miccional abrupta, a criança cruza as pernas, contrai o assoalho pélvico ou senta-se sobre o calcanhar para ocluir mecanicamente a uretra e impedir o escape involuntário de urina na roupa.",
    "comentariosAlternativas": {
      "A": "Correta. A manobra de Vincent é uma postura clássica de contenção para evitar perda por hiperatividade detrusora.",
      "B": "Incorreta. Não se relaciona a traumatismo esquelético da pelve.",
      "C": "Incorreta. A coreia cursa com movimentos descoordenados em membros superiores e face, não posturas de contenção.",
      "D": "Incorreta. Não tem correlação com afecções biliares."
    }
  },
  {
    "id": "ped-itu-096",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Disfunção do Trato Urinário Inferior e Constipação",
    "enunciado": "Segundo os Critérios de Roma IV para Constipação Funcional em crianças com idade de desenvolvimento de pelo menos 4 anos, a presença de pelo menos dois critérios ocorrendo pelo menos uma vez por semana durante o último mês firma o diagnóstico. Quais achados clínicos integram esses critérios?",
    "alternativas": [
      {
        "id": "A",
        "texto": "≤ 2 evacuações semanais; pelo menos 1 episódio de incontinência fecal por semana; histórico de postura retentiva excessiva; histórico de dor à evacuação ou fezes ressecadas/endurecidas; presença de grande massa fecal no reto; e histórico de fezes de grande calibre que entopem o vaso sanitário."
      },
      {
        "id": "B",
        "texto": "Presença de diarreia líquida profusa com sangue visível e esteatorreia diária."
      },
      {
        "id": "C",
        "texto": "Evacuação diária de fezes pastosas sem dor após cada mamada."
      },
      {
        "id": "D",
        "texto": "Apenas a constatação radiológica de pneumoperitônio maciço sob o diafragma."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Os Critérios de Roma IV para constipação intestinal funcional acima de 4 anos exigem pelo menos 2 dos seguintes itens: 1) ≤ 2 evacuações por semana no vaso sanitário; 2) Pelo menos um episódio de incontinência fecal (escape/soiling) por semana; 3) Postura de retenção excessiva deliberada; 4) Evacuações dolorosas ou fezes endurecidas; 5) Grande massa fecal no reto (fecaloma ao exame); 6) Fezes de diâmetro volumoso que chegam a entupir o vaso sanitário.",
    "comentariosAlternativas": {
      "A": "Correta. Enumera com rigor os critérios clínicos formais de Roma IV para constipação funcional na infância.",
      "B": "Incorreta. Diarreia sanguinolenta aponta para doença inflamatória intestinal ou colite infecciosa.",
      "C": "Incorreta. Padrão evacuatório perfeitamente normal e saudável.",
      "D": "Incorreta. Pneumoperitônio é sinal de perfuração de víscera oca, emergência cirúrgica."
    }
  },
  {
    "id": "ped-itu-097",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Disfunção do Trato Urinário Inferior e Constipação",
    "enunciado": "Qual é o pilar não farmacológico fundamental de primeira linha no manejo da Disfunção do Trato Urinário Inferior (DTUI) em crianças com controle esfincteriano e ITUs recorrentes, denominado \"Uroterapia Padrão\"?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Micções programadas com horário fixo a cada 2 a 3 horas pelo relógio (evitando retenção prolongada), ingesta hídrica hídrica adequada fracionada e postura miccional correta no vaso sanitário com apoio firme para os pés e relaxamento do assoalho pélvico."
      },
      {
        "id": "B",
        "texto": "Restrição hídrica absoluta a menos de 200 mL de água por dia para manter a bexiga colapsada."
      },
      {
        "id": "C",
        "texto": "Orientar a segurar a urina por pelo menos 12 horas consecutivas para treinar a elasticidade vesical."
      },
      {
        "id": "D",
        "texto": "Cateterismo vesical permanente com sonda de três vias por 6 meses."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Uroterapia Padrão é a terapia comportamental inicial indispensável para reeducar o trato urinário inferior. Consiste em: 1) Micções com horário programado (a cada 2 a 3 horas, sem esperar a bexiga encher ao extremo); 2) Ingesta hídrica regular ao longo do dia; 3) Postura adequada no vaso sanitário (uso de redutor de assento e apoio para os pés, permitindo que os joelhos fiquem a 90° e a musculatura do assoalho pélvico relaxe completamente durante a micção).",
    "comentariosAlternativas": {
      "A": "Correta. Micções programadas a cada 2-3h, hidratação regular e apoio nos pés com postura adequada.",
      "B": "Incorreta. A restrição hídrica torna a urina excessivamente concentrada e irritativa para o detrusor.",
      "C": "Incorreta. Reter a urina por 12 horas causa estase maciça e proliferação bacteriana exuberante.",
      "D": "Incorreta. Sondagem de demora é deletéria e contraindicada em crianças funcionais."
    }
  },
  {
    "id": "ped-itu-098",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Disfunção do Trato Urinário Inferior e Constipação",
    "enunciado": "No tratamento medicamentoso da constipação intestinal crônica associada à Síndrome de Eliminação Disfuncional na infância, qual fármaco laxativo osmótico é o padrão-ouro de primeira escolha para desimpactação fecal e terapia de manutenção?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Polietilenoglicol sem eletrólitos (PEG 4000 / Macrogol)."
      },
      {
        "id": "B",
        "texto": "Óleo mineral administrado por via inalatória."
      },
      {
        "id": "C",
        "texto": "Bisacodil em altas doses diárias contínuas por 5 anos."
      },
      {
        "id": "D",
        "texto": "Carvão vegetal ativado em suspensão concentrada."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Polietilenoglicol 4000 sem eletrólitos (PEG 4000 / Macrogol) é o laxativo osmótico de primeira linha consagrado pelas diretrizes internacionais (ESPGHAN e NASPGHAN). É insípido, inodoro, não absorvível, não fermentado por bactérias colônicas (não gera cólicas nem gases) e retém água na luz intestinal, amolecendo as fezes. Utiliza-se 1 a 1,5 g/kg/dia para desimpactação e 0,5 a 0,8 g/kg/dia na manutenção por vários meses.",
    "comentariosAlternativas": {
      "A": "Correta. O PEG 4000 é o laxativo de escolha de primeira linha com excelente eficácia e tolerabilidade.",
      "B": "Incorreta. Óleo mineral tem risco de pneumonia lipoídica se aspirado e é contraindicado em lactentes e crianças pequenas.",
      "C": "Incorreta. Laxativos estimulantes em uso contínuo crônico provocam dependência e atonia colônica.",
      "D": "Incorreta. O carvão ativado prende o intestino e inativa medicamentos."
    }
  },
  {
    "id": "ped-itu-099",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Disfunção do Trato Urinário Inferior e Constipação",
    "enunciado": "Menina de 7 anos mantém urgência miccional, incontinência urinária diurna e manobras de contenção evidentes mesmo após 3 meses de uroterapia comportamental bem conduzida e resolução completa da constipação intestinal. O estudo urodinâmico confirma Hiperatividade Detrusora com contrações involuntárias não inibidas. Qual classe farmacológica e fármaco de escolha estão indicados?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Anticolinérgico / Antimuscarínico (Cloridrato de Oxibutinina por via oral)."
      },
      {
        "id": "B",
        "texto": "Agonista colinérgico muscarínico (Betanecol em alta dose)."
      },
      {
        "id": "C",
        "texto": "Diurético de alça (Furosemida intravenosa contínua)."
      },
      {
        "id": "D",
        "texto": "Antipsicótico típico de alta potência (Haloperidol intramuscular)."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Oxibutinina é um potente agente anticolinérgico/antimuscarínico que bloqueia os receptores muscarínicos M2 e M3 no músculo detrusor da bexiga, inibindo as contrações involuntárias não inibidas e aumentando a capacidade vesical funcional e a complacência. É o tratamento farmacológico de escolha na bexiga hiperativa pediátrica refratária à uroterapia comportamental, devendo ser introduzido apenas após o tratamento efetivo da constipação (para evitar agravamento do quadro intestinal).",
    "comentariosAlternativas": {
      "A": "Correta. A oxibutinina (antimuscarínico) é a droga de escolha para hiperatividade detrusora infantil.",
      "B": "Incorreta. Betanecol estimula a contração do detrusor, o que agravaria dramaticamente a urgência e perdas.",
      "C": "Incorreta. Furosemida aumentaria a produção de urina, piorando os episódios de incontinência.",
      "D": "Incorreta. Antipsicóticos não têm indicação no manejo da bexiga hiperativa comum."
    }
  },
  {
    "id": "ped-itu-100",
    "especialidade": "Pediatria",
    "tema": "ITU PEDIATRICO",
    "subtema": "Disfunção do Trato Urinário Inferior e Constipação",
    "enunciado": "Criança de 8 anos com ITUs de repetição apresenta diagnóstico de \"Micção Disfuncional\" (incoordenação vésico-esfincteriana), caracterizada pela contração paradoxal involuntária da musculatura estriada do esfíncter uretral externo durante a fase de esvaziamento (micção interrompida com curvas urofluxométricas em platô/estaccato). Qual modalidade terapêutica não invasiva de reabilitação neuromuscular pélvica tem alto índice de sucesso para ensinar a criança a relaxar o assoalho pélvico durante a micção?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Biofeedback associado à Fisioterapia Pélvica / Treinamento dos Músculos do Assoalho Pélvico."
      },
      {
        "id": "B",
        "texto": "Fio de sutura permanente no meato uretral externo."
      },
      {
        "id": "C",
        "texto": "Eletroconvulsoterapia sob anestesia geral."
      },
      {
        "id": "D",
        "texto": "Denervação cirúrgica completa de todos os ramos da cauda equina."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Biofeedback guiado por eletromiografia de superfície perineal é a modalidade de reabilitação neuromuscular padrão-ouro para a micção disfuncional na infância. Através de jogos interativos em telas de computador estimulados pelos sensores de eletromiografia, a criança aprende de forma lúdica a reconhecer os músculos do assoalho pélvico e relaxar ativamente o esfíncter durante o ato miccional, restaurando o fluxo laminar e reduzindo a zero o resíduo pós-miccional e as recidivas de ITU.",
    "comentariosAlternativas": {
      "A": "Correta. O biofeedback com fisioterapia pélvica ensina o relaxamento esfincteriano ativo durante a micção.",
      "B": "Incorreta. Sutura no meato provocaria retenção urinária obstrutiva grave.",
      "C": "Incorreta. ECT não tem indicação em distúrbios miccionais funcionais periféricos.",
      "D": "Incorreta. Lesão da cauda equina causaria paralisia flácida e bexiga neurogênica arrefléxica permanente."
    }
  }
];

// ============================================================================
// BANCO COM 100 QUESTÕES COMPLETAS DE CRESCIMENTO E SEUS DISTÚRBIOS
// Cobrindo Velocidade de Crescimento, Curvas da OMS, Estatura-Alvo Parental,
// Idade Óssea (Greulich & Pyle), Variantes Normais (RCCP e BEF),
// Displasias Ósseas (Acondroplasia e Léri-Weill), Causas Cromossômicas e
// Sindrômicas (Turner, Noonan, Prader-Willi, Silver-Russell), RN PIG e Catch-up,
// Causas Endócrinas (DGH, Hipotireoidismo, Cushing), Doenças Crônicas
// (Celíaca, DRC, Crohn), Raquitismo e Alta Estatura (Marfan, Klinefelter, Gigantismo).
// ============================================================================
export const QUESTOES_CRESCIMENTO_100: RawCardioQuestion[] = [
  {
    "id": "ped-cresc-001",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Velocidade de Crescimento",
    "enunciado": "Lactente masculino de 12 meses de vida é trazido para consulta de puericultura de rotina. Ao nascimento, a termo, media 50 cm. Hoje, sua estatura aferida em estadiômetro horizontal infantil adequado é de 75 cm. O ganho estatural no primeiro ano foi de 25 cm. A mãe questiona se o crescimento está dentro da normalidade para a faixa etária. Com base no padrão fisiológico de velocidade de crescimento no primeiro ano de vida, assinale a orientação correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "O crescimento está estritamente normal, pois o ganho estatural fisiológico esperado no primeiro ano de vida é de aproximadamente 25 cm (cerca de 15 cm no 1º semestre e 10 cm no 2º semestre)."
      },
      {
        "id": "B",
        "texto": "O crescimento foi insuficiente, pois lactentes a termo devem crescer no mínimo 30 cm no primeiro ano de vida."
      },
      {
        "id": "C",
        "texto": "O crescimento foi excessivo e sugere síndrome de supercrescimento, já que o ganho estatural médio esperado para o primeiro ano é de 15 cm."
      },
      {
        "id": "D",
        "texto": "O crescimento não pode ser avaliado sem radiografia de punho esquerdo para idade óssea de urgência."
      }
    ],
    "correta": "A",
    "comentarioGeral": "No primeiro ano de vida, o ser humano experimenta a sua maior velocidade de crescimento pós-natal. Em média, um lactente a termo nasce com cerca de 50 cm e cresce 25 cm no primeiro ano de vida (atingindo cerca de 75 cm aos 12 meses): aproximadamente 15 cm no 1º semestre (cerca de 3 cm/mês no 1º trimestre e 2 cm/mês no 2º trimestre) e 10 cm no 2º semestre (cerca de 1,5 a 1,8 cm/mês).",
    "comentariosAlternativas": {
      "A": "Correta. O crescimento de 25 cm no primeiro ano reflete o ritmo de crescimento fisiológico humano mais acelerado da vida pós-natal.",
      "B": "Incorreta. O ganho médio esperado é de 25 cm/ano, e não 30 cm.",
      "C": "Incorreta. 15 cm é o ganho médio esperado apenas para o 1º semestre de vida, ou para o 2º ano de vida (12 a 15 cm/ano).",
      "D": "Incorreta. Não há qualquer indicação de idade óssea em um lactente com crescimento perfeitamente normal e saudável."
    }
  },
  {
    "id": "ped-cresc-002",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Velocidade de Crescimento",
    "enunciado": "Menina de 6 anos é acompanhada na unidade básica de saúde. Em consulta há 12 meses, media 112 cm. Na consulta atual, mede 118 cm. A criança não apresenta queixas clínicas, tem alimentação variada e bom rendimento escolar. Qual é a interpretação correta da velocidade de crescimento dessa paciente no período escolar?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Velocidade de crescimento diminuída (< 4 cm/ano), devendo-se solicitar rastreio para deficiência de hormônio de crescimento."
      },
      {
        "id": "B",
        "texto": "Velocidade de crescimento normal, pois na faixa pré-escolar e escolar (de 4 anos até o início da puberdade) a velocidade esperada é de 5 a 7 cm/ano."
      },
      {
        "id": "C",
        "texto": "Velocidade de crescimento acelerada (> 10 cm/ano), sendo obrigatória a investigação de puberdade precoce central."
      },
      {
        "id": "D",
        "texto": "A velocidade de crescimento só pode ser avaliada se calculada a cada trimestre com densitometria óssea."
      }
    ],
    "correta": "B",
    "comentarioGeral": "No período pré-escolar e escolar (dos 4 anos até o início da puberdade), o crescimento entra em uma fase de desaceleração estável, com velocidade média entre 5 e 7 cm por ano (mínimo aceitável em torno de 5 cm/ano). No caso apresentado, a criança cresceu 6 cm em 1 ano (118 - 112 = 6 cm/ano), padrão perfeitamente fisiológico.",
    "comentariosAlternativas": {
      "A": "Incorreta. A criança cresceu 6 cm/ano, o que é plenamente normal (5 a 7 cm/ano).",
      "B": "Correta. A velocidade de 6 cm/ano está dentro da faixa fisiológica de 5 a 7 cm/ano esperada para crianças em idade escolar antes do estirão puberal.",
      "C": "Incorreta. 6 cm/ano não configura velocidade acelerada; estirões > 8 a 10 cm/ano ocorrem na puberdade.",
      "D": "Incorreta. Velocidade de crescimento é avaliada por medições seriadas de estatura ao longo de um intervalo de 6 a 12 meses em estadiômetro vertical, sem necessidade de densitometria."
    }
  },
  {
    "id": "ped-cresc-003",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Velocidade de Crescimento",
    "enunciado": "Menina de 11 anos e 6 meses é levada ao pediatra pela mãe. Ao exame físico, encontra-se no estágio puberal M3P3 de Tanner e refere que nos últimos 12 meses cresceu 9,2 cm. Não teve menarca ainda. A mãe está preocupada com o crescimento acelerado. Qual é o diagnóstico e a conduta adequada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Trata-se de gigantismo hipofisário decorrente de adenoma secretor de GH; solicitar RM de sela túrcica imediatamente."
      },
      {
        "id": "B",
        "texto": "Trata-se de puberdade precoce periférica com esgotamento epifisário grave; iniciar análogo de GnRH em caráter de urgência."
      },
      {
        "id": "C",
        "texto": "Trata-se do pico do estirão puberal feminino (PHV - Peak Height Velocity), que ocorre caracteristicamente nos estágios M2-M3 de Tanner, com velocidade entre 8 e 10 cm/ano; conduta expectante e orientação sobre a proximidade da menarca."
      },
      {
        "id": "D",
        "texto": "Trata-se de hipotireoidismo descompensado com síndrome de Van Wyk-Grumbach; iniciar levotiroxina."
      }
    ],
    "correta": "C",
    "comentarioGeral": "Nas meninas, o estirão puberal é precoce em relação aos meninos, ocorrendo no início/meio da puberdade, predominantemente entre os estágios M2 e M3 de Tanner. O pico de velocidade de crescimento (PHV) feminino atinge cerca de 8 a 9 cm/ano (podendo chegar a 10 cm/ano) e precede a menarca por cerca de 1 a 1,5 anos. Após a menarca (que ocorre geralmente em M4), a velocidade desacelera drasticamente e o crescimento residual é em média de 4 a 6 cm até o fechamento epifisário definitivo.",
    "comentariosAlternativas": {
      "A": "Incorreta. O estirão de 9,2 cm/ano em M3 é perfeitamente fisiológico e não adenoma hipofisário.",
      "B": "Incorreta. Aos 11,5 anos em M3, a puberdade tem cronologia absolutamente normal (início fisiológico feminino entre 8 e 13 anos).",
      "C": "Correta. Em M2/M3 a menina atinge seu pico de velocidade de crescimento (cerca de 8 a 9 cm/ano), e a menarca ocorrerá em média cerca de 1 ano após esse pico.",
      "D": "Incorreta. A síndrome de Van Wyk-Grumbach cursa com puberdade precoce associada a parada ou atraso marcante de crescimento estatural (velocidade de crescimento muito baixa), e não estirão normal."
    }
  },
  {
    "id": "ped-cresc-004",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Velocidade de Crescimento",
    "enunciado": "Garoto de 13 anos e 8 meses encontra-se no estágio G4P4 de Tanner (volume testicular de 15 mL bilateralmente). Nos últimos 12 meses, cresceu 10,8 cm. Seus amigos já haviam crescido antes e a mãe pergunta por que o estirão dele ocorreu mais tarde do que o da irmã mais velha. Assinale a afirmativa fisiologicamente correta sobre o estirão puberal masculino:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Nos meninos, o estirão puberal ocorre precocemente em G1-G2 com velocidade de 5 cm/ano."
      },
      {
        "id": "B",
        "texto": "O estirão puberal masculino produz menor ganho estatural absoluto do que o estirão feminino."
      },
      {
        "id": "C",
        "texto": "O estirão masculino é dependente exclusivamente de progesterona e ocorre simultaneamente à pubarca precoce."
      },
      {
        "id": "D",
        "texto": "Nos meninos, o estirão puberal é tardio, atingindo seu pico de velocidade de crescimento (cerca de 10 a 12 cm/ano) nos estágios G3-G4 de Tanner, cerca de 1,5 a 2 anos mais tarde do que nas meninas."
      }
    ],
    "correta": "D",
    "comentarioGeral": "Ao contrário do sexo feminino (onde o pico de estirão ocorre precocemente em M2/M3), no sexo masculino o estirão de crescimento é um evento puberal tardio, ocorrendo nos estágios G3 e G4 de Tanner (volume testicular entre 12 e 15 mL), cerca de 1,5 a 2 anos mais tarde do que nas meninas. O pico de velocidade masculina é mais potente (10 a 12 cm/ano, vs 8 a 9 cm/ano nas meninas), o que explica, somado aos 2 anos a mais de crescimento pré-puberal, a diferença média de 13 cm de estatura final entre homens e mulheres.",
    "comentariosAlternativas": {
      "A": "Incorreta. Em G1/G2 o menino ainda não iniciou o estirão puberal.",
      "B": "Incorreta. O estirão masculino proporciona maior ganho estatural absoluto (cerca de 28 a 30 cm) do que o feminino (cerca de 23 a 25 cm).",
      "C": "Incorreta. O estirão depende do sinergismo entre esteroides sexuais (testosterona convertida em estradiol nas epífises pela aromatase) e o eixo GH/IGF-1.",
      "D": "Correta. O pico de velocidade masculino ocorre em estágios avançados (G3-G4), com velocidade de 10 a 12 cm/ano, conferindo maior estatura final."
    }
  },
  {
    "id": "ped-cresc-005",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Velocidade de Crescimento",
    "enunciado": "Em pediatria, qual é considerado o parâmetro isolado mais sensível e precoce para detectar desvios patológicos do crescimento estatural?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A velocidade de crescimento calculada em um intervalo mínimo de 6 a 12 meses."
      },
      {
        "id": "B",
        "texto": "A dosagem sérica isolada de hormônio do crescimento (GH) basal em jejum."
      },
      {
        "id": "C",
        "texto": "A idade cronológica comparada à idade dentária."
      },
      {
        "id": "D",
        "texto": "A medida isolada do perímetro cefálico no escolar."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A velocidade de crescimento calculada ao longo de um período mínimo de 6 meses (idealmente 12 meses) é o indicador mais precoce e sensível de falha ou desvio do crescimento. Uma criança pode ainda estar dentro dos limites estatísticos normais da curva (ex: entre percentis 15 e 50), mas se sua velocidade de crescimento for inferior ao percentil 25 para a idade e sexo (< 5 cm/ano no escolar), ela já apresenta um processo patológico ativo antes mesmo de cruzar os canais de crescimento para baixo.",
    "comentariosAlternativas": {
      "A": "Correta. A velocidade de crescimento reflete a dinâmica do crescimento no tempo e detecta desacelerações muito antes da queda visível de percentis absolutos.",
      "B": "Incorreta. O GH basal tem secreção pulsátil e níveis basais indetectáveis na maioria das crianças normais ao longo do dia, não tendo valor isolado.",
      "C": "Incorreta. A idade dentária sofre grande variação genética e não substitui a velocidade de crescimento.",
      "D": "Incorreta. O perímetro cefálico tem maior valor no lactente até os 2 anos de idade para acompanhar o crescimento cerebral, perdendo sensibilidade para estatura no escolar."
    }
  },
  {
    "id": "ped-cresc-006",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Velocidade de Crescimento",
    "enunciado": "Menino de 9 anos é trazido ao ambulatório porque a mãe nota que ele está crescendo menos que os colegas. O prontuário mostra que há 12 meses media 128 cm e hoje mede 131,5 cm (ganho de 3,5 cm/ano). Não iniciou puberdade (G1P1). Considerando a velocidade de crescimento esperada no período pré-puberal, qual é a conduta inicial recomendada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Tranquilizar a família, pois qualquer crescimento acima de 2 cm/ano é considerado normal no escolar."
      },
      {
        "id": "B",
        "texto": "Indicar que a velocidade está abaixo do limite fisiológico (< 5 cm/ano no escolar pré-puberal) e iniciar investigação clínica e laboratorial para causas de desaceleração do crescimento."
      },
      {
        "id": "C",
        "texto": "Iniciar imediatamente reposição de GH recombinante sem necessidade de exames."
      },
      {
        "id": "D",
        "texto": "Prescrever oxandrolona oral para estimular o apetite e acelerar a velocidade."
      }
    ],
    "correta": "B",
    "comentarioGeral": "No período pré-puberal (escolar dos 4 anos até a puberdade), o limite inferior normal da velocidade de crescimento é de 5 cm/ano (p25). Um ganho de 3,5 cm/ano representa desaceleração patológica do crescimento (falha de crescimento), exigindo investigação etiológica minuciosa (hemograma, função tireoidiana, função renal, parasitológico, rastreio de doença celíaca, idade óssea e IGF-1).",
    "comentariosAlternativas": {
      "A": "Incorreta. Crescimento de 3,5 cm/ano no escolar é patológico (< 5 cm/ano).",
      "B": "Correta. Velocidade < 5 cm/ano no período pré-puberal exige investigação detalhada para identificar a etiologia da falha de crescimento.",
      "C": "Incorreta. GH só tem indicação após diagnóstico etiológico e critérios formais preenchidos.",
      "D": "Incorreta. Andrógenos anabolizantes promovem avanço rápido da idade óssea e fechamento prematuro das epífises, comprometendo a estatura final."
    }
  },
  {
    "id": "ped-cresc-007",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Velocidade de Crescimento",
    "enunciado": "Qual é o ganho estatural médio esperado para uma criança saudável durante o segundo ano de vida (entre 12 e 24 meses)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Cerca de 25 cm/ano."
      },
      {
        "id": "B",
        "texto": "Cerca de 4 a 5 cm/ano."
      },
      {
        "id": "C",
        "texto": "Cerca de 12 a 15 cm/ano."
      },
      {
        "id": "D",
        "texto": "Cerca de 1 a 2 cm/ano."
      }
    ],
    "correta": "C",
    "comentarioGeral": "A velocidade de crescimento decai de forma contínua desde o nascimento: 1º ano: ~25 cm/ano; 2º ano: ~12 a 15 cm/ano; 3º ano: ~7 a 8 cm/ano; 4 anos até início da puberdade: ~5 a 7 cm/ano; Estirão puberal: ~8 a 12 cm/ano. Assim, no 2º ano o ganho médio é de 12 a 15 cm.",
    "comentariosAlternativas": {
      "A": "Incorreta. 25 cm/ano é o ganho do primeiro ano de vida.",
      "B": "Incorreta. 4 a 5 cm/ano é o limite inferior do período escolar pré-puberal.",
      "C": "Correta. No segundo ano de vida a criança cresce em média de 12 a 15 cm.",
      "D": "Incorreta. Ganho de 1 a 2 cm/ano representa parada quase total do crescimento."
    }
  },
  {
    "id": "ped-cresc-008",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Velocidade de Crescimento",
    "enunciado": "Menina de 13 anos, cuja menarca ocorreu há 18 meses, comparece para consulta. A mãe quer saber se ela ainda crescerá mais 15 cm como a prima que acabou de entrar na puberdade. Ao exame: M5P4, epífises em fase final de fusão. Qual é a resposta cientificamente respaldada sobre o crescimento pós-menarca?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A menarca marca o início do pico do estirão, momento em que a menina cresce mais 15 a 20 cm."
      },
      {
        "id": "B",
        "texto": "A menarca não tem qualquer correlação temporal com a desaceleração do crescimento estatural."
      },
      {
        "id": "C",
        "texto": "O crescimento pós-menarca cessa imediatamente em 24 horas devido ao fechamento súbito de todas as cartilagens."
      },
      {
        "id": "D",
        "texto": "Após a menarca, a velocidade de crescimento cai expressivamente e o ganho estatural residual médio é de apenas 4 a 6 cm até a fusão epifisária completa."
      }
    ],
    "correta": "D",
    "comentarioGeral": "A menarca é um marco puberal tardio no sexo feminino, ocorrendo habitualmente cerca de 1 a 1,5 anos após o pico do estirão de crescimento (PHV), no estágio M4 de Tanner. Sob a ação dos níveis elevados de estrógeno, ocorre a rápida senescência e ossificação das cartilagens de conjugação epifisárias. O ganho estatural pós-menarca é limitado, girando em média entre 4 e 6 cm (raramente ultrapassando 7 a 8 cm).",
    "comentariosAlternativas": {
      "A": "Incorreta. O pico do estirão ocorre antes da menarca, em M2-M3.",
      "B": "Incorreta. A menarca correlaciona-se intimamente com a desaceleração final e parada do crescimento estatural.",
      "C": "Incorreta. O fechamento não é imediato em 24 horas; ocorre ao longo de cerca de 1 a 2 anos após a primeira menstruação.",
      "D": "Correta. O crescimento residual médio pós-menarca é de 4 a 6 cm devido à ação do estradiol promovendo o fechamento epifisário."
    }
  },
  {
    "id": "ped-cresc-009",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Curvas da OMS e Avaliação Antropométrica",
    "enunciado": "Menino de 5 anos é levado à UBS para avaliação do desenvolvimento. Sua estatura atual aferida com técnica correta encontra-se no Escore-Z de Estatura para Idade (E/I) de -2,4 DP nos gráficos de referência da OMS 2006/2007. Segundo os critérios diagnósticos padronizados pelo Ministério da Saúde e pela Sociedade Brasileira de Pediatria (SBP), como se classifica a estatura dessa criança?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Baixa estatura para a idade."
      },
      {
        "id": "B",
        "texto": "Estatura adequada para a idade."
      },
      {
        "id": "C",
        "texto": "Muito baixa estatura para a idade."
      },
      {
        "id": "D",
        "texto": "Nanismo letal acondroplásico."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Pelas curvas da OMS adotadas pela SBP e Ministério da Saúde: Estatura/Idade ≥ Escore-Z -2: Estatura adequada para a idade; Escore-Z < -2 e ≥ -3: Baixa estatura para a idade (equivalente a percentil < 3 e ≥ 0,1); Escore-Z < -3: Muito baixa estatura para a idade (percentil < 0,1). No caso, com Escore-Z de -2,4 DP, classifica-se como Baixa estatura para a idade.",
    "comentariosAlternativas": {
      "A": "Correta. Escore-Z entre -2 e -3 DP define Baixa estatura para a idade.",
      "B": "Incorreta. Estatura adequada exige Escore-Z ≥ -2 DP.",
      "C": "Incorreta. Muito baixa estatura exige Escore-Z < -3 DP.",
      "D": "Incorreta. O diagnóstico de acondroplasia requer características clínicas de displasia óssea desproporcionada e confirmação genética ou radiológica, não sendo uma classificação antropométrica da OMS."
    }
  },
  {
    "id": "ped-cresc-010",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Curvas da OMS e Avaliação Antropométrica",
    "enunciado": "Menina de 3 anos e 6 meses tem sua caderneta de saúde analisada. Aos 12 meses, sua estatura encontrava-se no percentil 50 (Escore-Z 0). Aos 2 anos, caiu para o percentil 25. Aos 3 anos e meio, encontra-se no percentil 10. Embora ainda esteja acima do percentil 3, a mãe relata que ela parou de trocar o tamanho das calças. Qual é o conceito aplicado a essa evolução antropométrica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Crescimento perfeitamente fisiológico, pois qualquer estatura acima do percentil 3 dispensa preocupação clínica."
      },
      {
        "id": "B",
        "texto": "Desaceleração do crescimento com cruzamento descendente de canais de percentil (falha de crescimento), justificando investigação diagnóstica mesmo com estatura absoluta momentaneamente > -2 DP."
      },
      {
        "id": "C",
        "texto": "Erro de medição inevitável, sem relevância clínica."
      },
      {
        "id": "D",
        "texto": "Variante normal do tipo baixa estatura familiar sem necessidade de exames."
      }
    ],
    "correta": "B",
    "comentarioGeral": "Após os 2 anos de idade, a criança já encontrou seu canal genético de crescimento e deve manter uma trajetória paralela às linhas das curvas de percentil/escore-Z. A perda ou cruzamento descendente de canais de percentil (queda de 2 ou mais canais principais de percentil ou perda superior a 0,5 a 1 DP no Escore-Z) define falha de crescimento e indica desaceleração patológica da velocidade de crescimento, devendo ser investigada independentemente de a criança ainda estar acima do percentil 3.",
    "comentariosAlternativas": {
      "A": "Incorreta. A perda de canais é sinal de alarme precoce que antecede a baixa estatura em valor absoluto.",
      "B": "Correta. O cruzamento descendente de percentis após os 2 anos de idade indica desaceleração estatural patológica ativa e impõe investigação clínica.",
      "C": "Incorreta. A persistência da queda ao longo de sucessivas consultas não pode ser atribuída a simples erro de aferição.",
      "D": "Incorreta. Na baixa estatura familiar, a criança cresce paralelamente à curva, dentro de seu canal, sem queda progressiva de percentis."
    }
  },
  {
    "id": "ped-cresc-011",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Curvas da OMS e Avaliação Antropométrica",
    "enunciado": "Lactente masculino de 8 meses nasceu a termo, com peso de 3.200 g e comprimento de 50 cm (ambos no percentil 50). Desde os 4 meses, sua curva de comprimento vem desacelerando e hoje está no percentil 15, compatível com a estatura-alvo parental calculada (p15-p25). A criança é ativa, mama bem ao seio e não tem sintomas sistêmicos. Qual é o fenômeno fisiológico mais provável?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Deficiência congênita grave de GH com indicação de ressonância magnética imediata."
      },
      {
        "id": "B",
        "texto": "Síndrome de má absorção intestinal por doença celíaca precoce."
      },
      {
        "id": "C",
        "texto": "Canalização do crescimento (regulação do canal genético ou \"catch-down\" fisiológico), comum entre os 6 e 18 a 24 meses de vida."
      },
      {
        "id": "D",
        "texto": "Erro inato do metabolismo mitocondrial com acidose láctica."
      }
    ],
    "correta": "C",
    "comentarioGeral": "Ao nascimento e nos primeiros meses de vida, as dimensões antropométricas da criança refletem primariamente as condições do ambiente intrauterino e a nutrição materno-placentária. Entre os 6 e os 18-24 meses de vida, ocorre o fenômeno fisiológico de \"canalização do crescimento\" (regulação ao canal genético): crianças com potencial genético menor podem desacelerar (catch-down) até atingir seu canal familiar, enquanto crianças com pais altos nascidas menores aceleram (catch-up). Uma vez atingido o canal genético, o crescimento passa a ocorrer paralelo às curvas.",
    "comentariosAlternativas": {
      "A": "Incorreta. O quadro é perfeitamente típico da canalização fisiológica para o alvo genético.",
      "B": "Incorreta. A criança está assintomática, em aleitamento materno e sem diarreia, distensão ou perda ponderal desproporcional.",
      "C": "Correta. O alinhamento com a estatura-alvo familiar entre 6 e 24 meses representa o fenômeno de canalização genética.",
      "D": "Incorreta. Não há acidose, hipoglicemia, atraso neuromotor ou qualquer manifestação metabólica."
    }
  },
  {
    "id": "ped-cresc-012",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Curvas da OMS e Avaliação Antropométrica",
    "enunciado": "Segundo a distribuição gaussiana padrão utilizada nas curvas de crescimento da Organização Mundial da Saúde (OMS), a qual percentil aproxima-se o Escore-Z de -2 desvios-padrão (DP)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Percentil 50."
      },
      {
        "id": "B",
        "texto": "Percentil 10."
      },
      {
        "id": "C",
        "texto": "Percentil 0,1."
      },
      {
        "id": "D",
        "texto": "Percentil 2,3 (aproximadamente percentil 3)."
      }
    ],
    "correta": "D",
    "comentarioGeral": "Em uma curva de distribuição normal (gaussiana): Escore-Z 0 corresponde à mediana (Percentil 50); Escore-Z -1 DP corresponde aproximadamente ao Percentil 16; Escore-Z -2 DP corresponde exatamente ao Percentil 2,3 (arredondado clinicamente para Percentil 3); Escore-Z -3 DP corresponde ao Percentil 0,13 (aproximadamente Percentil 0,1). Por isso, define-se baixa estatura por E/I < percentil 3 ou Escore-Z < -2 DP.",
    "comentariosAlternativas": {
      "A": "Incorreta. Percentil 50 equivale a Escore-Z 0.",
      "B": "Incorreta. Percentil 10 equivale a Escore-Z de aproximadamente -1,28 DP.",
      "C": "Incorreta. Percentil 0,1 equivale a Escore-Z de -3 DP.",
      "D": "Correta. O Escore-Z de -2 DP corresponde estatisticamente ao percentil 2,28% (~ percentil 3)."
    }
  },
  {
    "id": "ped-cresc-013",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Curvas da OMS e Avaliação Antropométrica",
    "enunciado": "Criança de 2 anos e 3 meses apresenta Escore-Z de Estatura para Idade de -3,4 DP nos gráficos da OMS. Não há dismorfismos evidentes, mas os pais referem que a criança sempre foi a menor de qualquer grupo e o crescimento é estagnado. Como se classifica essa condição antropométrica e qual o significado prognóstico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Classifica-se como \"Muito baixa estatura para a idade\" (Escore-Z < -3 DP); afasta praticamente variantes normais e impõe ampla investigação etiológica (sindrômica, endócrina ou sistêmica)."
      },
      {
        "id": "B",
        "texto": "Classifica-se como variante normal de baixa estatura familiar, sem necessidade de investigação etiológica."
      },
      {
        "id": "C",
        "texto": "Classifica-se como estatura adequada limítrofe, recomendando-se reavaliação em 3 anos."
      },
      {
        "id": "D",
        "texto": "Classifica-se como gigantismo infantil mascarado por desidratação crônica."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Escore-Z de Estatura/Idade < -3 DP é um critério de grande gravidade clínica e epidemiológica (encontra-se abaixo do percentil 0,1, ou seja, menos de 1 em cada 1.000 crianças saudáveis tem essa estatura). Essa magnitude de déficit estatural afasta com quase 100% de certeza as variantes normais (baixa estatura familiar ou retardo constitucional) e quase invariavelmente decorre de patologia orgânica primária (doença genética, displasia óssea, síndrome cromossômica, endocrinopatia grave ou doença crônica consumptiva).",
    "comentariosAlternativas": {
      "A": "Correta. Escore-Z < -3 DP define Muito Baixa Estatura e exige investigação formal completa de causas patológicas.",
      "B": "Incorreta. Variantes normais raramente causam déficits abaixo de -2,5 ou -3 DP.",
      "C": "Incorreta. Escore-Z de -3,4 DP é um déficit gravíssimo, nunca considerado limítrofe normal.",
      "D": "Incorreta. Hipótese sem qualquer sentido biológico ou clínico."
    }
  },
  {
    "id": "ped-cresc-014",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Curvas da OMS e Avaliação Antropométrica",
    "enunciado": "Ao plotar o crescimento de uma criança de 4 anos com suspeita de baixa estatura, o pediatra avalia os índices antropométricos de Waterlow: Peso para Estatura (P/E) e Estatura para Idade (E/I). A criança apresenta E/I < 90% do padrão (baixa estatura/nanismo) com P/E normal (> 90%). Qual é a interpretação clínico-nutricional desse perfil?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Desnutrição aguda grave (emaciação recente / wasting)."
      },
      {
        "id": "B",
        "texto": "Desnutrição crônica pregressa / compensada (stunting / nanismo nutricional)."
      },
      {
        "id": "C",
        "texto": "Obesidade mórbida de causa neuroendócrina."
      },
      {
        "id": "D",
        "texto": "Edema nutricional por kwashiorkor agudo."
      }
    ],
    "correta": "B",
    "comentarioGeral": "Na classificação de Waterlow: Desnutrição aguda (emaciação / wasting): P/E diminuído (< 90%) com E/I normal (≥ 90%); Desnutrição crônica pregressa compensada (nanismo nutricional / stunting): E/I diminuída (< 90%) com P/E normal (≥ 90%) — a criança já adaptou seu peso à sua baixa estatura resultante de desnutrição crônica antiga; Desnutrição crônica agudizada: ambos diminuídos (E/I < 90% e P/E < 90%).",
    "comentariosAlternativas": {
      "A": "Incorreta. A desnutrição aguda cursa com P/E baixo e E/I preservada.",
      "B": "Correta. E/I comprometida com P/E normal reflete cronicidade com adaptação ponderal (nanismo nutricional).",
      "C": "Incorreta. P/E está normal, não havendo obesidade.",
      "D": "Incorreta. Kwashiorkor é forma grave aguda com edema bilateral e hepatomegalia."
    }
  },
  {
    "id": "ped-cresc-015",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Curvas da OMS e Avaliação Antropométrica",
    "enunciado": "Na avaliação da técnica antropométrica em pediatria, a partir de qual idade a criança deve ser medida obrigatoriamente na posição em pé (estatura / estadiômetro vertical), e não deitada (comprimento / estadiômetro horizontal)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A partir dos 6 meses de vida."
      },
      {
        "id": "B",
        "texto": "Apenas após os 5 anos de idade."
      },
      {
        "id": "C",
        "texto": "A partir dos 2 anos de idade (24 meses)."
      },
      {
        "id": "D",
        "texto": "Apenas após a puberdade."
      }
    ],
    "correta": "C",
    "comentarioGeral": "Pelas normas da OMS e da SBP: Menores de 2 anos (0 a 23 meses): afere-se o COMPRIMENTO deitado (decúbito dorsal) em estadiômetro horizontal infantil (antropômetro infantil de mesa com cabeceira fixa e cursor móvel nos pés). Crianças de 2 anos ou mais (≥ 24 meses): afere-se a ESTATURA em pé (posição ereta) em estadiômetro vertical de parede com encosto em 4 ou 5 pontos (calcanhares, panturrilhas, nádegas, dorso e occipício com a cabeça no plano de Frankfurt). Medir em pé diminui cerca de 0,7 cm em relação ao deitado por compressão fisiológica da gravidade sobre os discos intervertebrais.",
    "comentariosAlternativas": {
      "A": "Incorreta. Aos 6 meses mede-se rigorosamente deitado.",
      "B": "Incorreta. Aos 5 anos a criança já deve ser medida em pé há 3 anos.",
      "C": "Correta. O ponto de corte clássico e normativo da OMS é aos 2 anos de idade (24 meses).",
      "D": "Incorreta. Não tem correlação com a puberdade."
    }
  },
  {
    "id": "ped-cresc-016",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Curvas da OMS e Avaliação Antropométrica",
    "enunciado": "Uma criança de 3 anos tem Escore-Z de IMC para Idade (IMC/I) de +2,3 DP associado a Escore-Z de Estatura para Idade de -2,6 DP (baixa estatura com sobrepeso/obesidade). Esse padrão antropométrico clássico (estatura caindo enquanto o IMC/peso sobe) é fortemente sugestivo de:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Desnutrição proteico-calórica secundária a parasitose intestinal."
      },
      {
        "id": "B",
        "texto": "Doença celíaca clássica em fase ativa."
      },
      {
        "id": "C",
        "texto": "Baixa estatura constitucional simples sem necessidade de rastreio."
      },
      {
        "id": "D",
        "texto": "Etiologia endócrina da baixa estatura (como deficiência de GH, hipotireoidismo ou síndrome de Cushing)."
      }
    ],
    "correta": "D",
    "comentarioGeral": "A regra de ouro da propedêutica do crescimento é: Doenças desnutritivas/sistêmicas (celíaca, DII, cardiopatias, DRC, desnutrição): o PESO cai antes da altura (criança emagrece e depois para de crescer). Já nas endocrinopatias (deficiência de GH, hipotireoidismo grave e hipercortisolismo/Cushing): a ALTURA para de crescer, mas o PESO continua subindo ou se mantém (baixa estatura com ganho ponderal relativo ou obesidade).",
    "comentariosAlternativas": {
      "A": "Incorreta. Na desnutrição o peso é o primeiro parâmetro a declinar acentuadamente.",
      "B": "Incorreta. Na doença celíaca a má absorção causa perda ponderal e emaciação prévia ao atraso estatural.",
      "C": "Incorreta. Variantes constitucionais cursam com velocidade normal e proporção harmônica de peso e estatura.",
      "D": "Correta. O padrão de baixa estatura associada a sobrepeso/obesidade é o protótipo clínico das causas endócrinas de baixa estatura."
    }
  },
  {
    "id": "ped-cresc-017",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Curvas da OMS e Avaliação Antropométrica",
    "enunciado": "Menino de 7 anos apresenta velocidade de crescimento de 5,8 cm/ano, sem queixas clínicas. Sua curva de estatura encontra-se exatamente sobre a linha do percentil 10 desde os 2 anos de idade, paralela ao canal mediano. O pai mede 165 cm e a mãe 152 cm. Qual é a conduta médica correta para este paciente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Reconhecer que a criança tem velocidade de crescimento normal, canalizada e compatível com o percentil genético familiar, devendo manter acompanhamento clínico sem exames invasivos desnecessários."
      },
      {
        "id": "B",
        "texto": "Iniciar reposição de hormônio tireoidiano em dose suprafisiológica."
      },
      {
        "id": "C",
        "texto": "Solicitar teste de estímulo de GH com clonidina de urgência."
      },
      {
        "id": "D",
        "texto": "Encaminhar para cirurgia de alongamento ósseo femoral."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A criança tem velocidade de crescimento normal (5,8 cm/ano está dentro da faixa esperada de 5 a 7 cm/ano para escolares pré-puberais) e mantém seu canal estável no percentil 10, que é absolutamente congruente com a baixa estatura de seus pais (pai 165 cm e mãe 152 cm geram um alvo genético baixo, em torno de 165 cm). Trata-se de uma variante normal (Baixa Estatura Familiar), que não exige exames invasivos.",
    "comentariosAlternativas": {
      "A": "Correta. Velocidade normal (5,8 cm/ano) e estabilidade de canal compatível com o canal parental configuram variante normal que requer apenas seguimento clínico.",
      "B": "Incorreta. Não há hipotireoidismo e reposição desnecessária causa hipertireoidismo iatrogênico.",
      "C": "Incorreta. Velocidade normal e canal estável afastam deficiência de GH.",
      "D": "Incorreta. Indicação absurda para uma criança fisiologicamente saudável."
    }
  },
  {
    "id": "ped-cresc-018",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Estatura-Alvo Parental",
    "enunciado": "Menino de 6 anos é avaliado por baixa estatura. O pai mede 175 cm e a mãe mede 162 cm. Utilizando o método clássico de Tanner para o cálculo da estatura-alvo (canal genético parental), qual é o valor da estatura-alvo calculada e qual a faixa esperada de variação normal?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Alvo de 168,5 cm; variação esperada de 165 a 172 cm."
      },
      {
        "id": "B",
        "texto": "Alvo de 175 cm; variação esperada de 166,5 a 183,5 cm (+/- 8,5 cm)."
      },
      {
        "id": "C",
        "texto": "Alvo de 162 cm; variação esperada de 157 a 167 cm."
      },
      {
        "id": "D",
        "texto": "Alvo de 182 cm; variação esperada de 178 a 186 cm."
      }
    ],
    "correta": "B",
    "comentarioGeral": "Pela fórmula de Tanner: Para MENINOS: [Estatura do Pai + (Estatura da Mãe + 13)] / 2 = [175 + (162 + 13)] / 2 = [175 + 175] / 2 = 350 / 2 = 175 cm. A faixa de canal genético esperada admite uma variação de +/- 5 cm (ou +/- 8,5 cm, correspondente ao intervalo de confiança de aproximadamente 2 DP). Assim, para margem de +/- 8,5 cm, a faixa vai de 166,5 cm a 183,5 cm.",
    "comentariosAlternativas": {
      "A": "Incorreta. O cálculo de 168,5 cm seria a média aritmética simples sem a correção de +13 cm para o sexo masculino.",
      "B": "Correta. Para meninos soma-se 13 cm à altura materna: (175 + 162 + 13) / 2 = 175 cm (+/- 8,5 cm).",
      "C": "Incorreta. Este valor desconsidera a altura paterna e o bônus masculino de 13 cm.",
      "D": "Incorreta. Superestima o cálculo parental."
    }
  },
  {
    "id": "ped-cresc-019",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Estatura-Alvo Parental",
    "enunciado": "Menina de 7 anos é trazida para consulta. Seu pai mede 180 cm e sua mãe mede 165 cm. Qual é a estatura-alvo parental prevista para essa menina pelo método de Tanner?",
    "alternativas": [
      {
        "id": "A",
        "texto": "172,5 cm (+/- 8,5 cm)."
      },
      {
        "id": "B",
        "texto": "159,5 cm (+/- 8,5 cm)."
      },
      {
        "id": "C",
        "texto": "166 cm (+/- 8,5 cm)."
      },
      {
        "id": "D",
        "texto": "179 cm (+/- 8,5 cm)."
      }
    ],
    "correta": "C",
    "comentarioGeral": "Para MENINAS, a fórmula de Tanner subtrai 13 cm da altura paterna (ou subtrai 13 cm da soma das alturas): Alvo Menina = [(Estatura do Pai - 13) + Estatura da Mãe] / 2 = [(180 - 13) + 165] / 2 = [167 + 165] / 2 = 332 / 2 = 166 cm. Margem esperada: 166 +/- 8,5 cm (de 157,5 cm a 174,5 cm).",
    "comentariosAlternativas": {
      "A": "Incorreta. 172,5 cm é a média aritmética simples entre os pais [(180 + 165) / 2], sem o ajuste biológico de sexo.",
      "B": "Incorreta. Subtrai duas vezes o fator de correção.",
      "C": "Correta. Alvo Menina = [(180 - 13) + 165] / 2 = 166 cm (+/- 8,5 cm).",
      "D": "Incorreta. Corresponderia ao cálculo para meninos [(180 + 165 + 13) / 2 = 179 cm]."
    }
  },
  {
    "id": "ped-cresc-020",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Estatura-Alvo Parental",
    "enunciado": "Por que o cálculo da estatura-alvo parental utiliza o valor constante de 13 cm na fórmula matemática entre os sexos masculino e feminino?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Porque 13 cm é a diferença média de comprimento observada ao nascimento entre recém-nascidos do sexo masculino e feminino."
      },
      {
        "id": "B",
        "texto": "Porque 13 cm é a margem de erro permitida pelo estadiômetro de Harpenden."
      },
      {
        "id": "C",
        "texto": "Porque 13 cm é o ganho estatural fixo decorrente da ação da progesterona na puberdade feminina."
      },
      {
        "id": "D",
        "texto": "Porque 13 cm representa a diferença média histórica de estatura final adulta entre homens e mulheres na população mundial, decorrente do tempo adicional de crescimento pré-puberal e da maior intensidade do estirão masculino."
      }
    ],
    "correta": "D",
    "comentarioGeral": "A constante biológica de 13 cm (adicionada à mãe no cálculo do menino ou subtraída do pai no cálculo da menina) reflete a diferença média observada nas curvas populacionais mundiais entre a estatura adulta de homens e mulheres. Essa diferença decorre de dois fatores principais: 1) os meninos entram em puberdade cerca de 1,5 a 2 anos mais tarde do que as meninas, crescendo cerca de 8 a 10 cm a mais no período pré-puberal; 2) o estirão puberal masculino é mais vigoroso, gerando cerca de 3 a 5 cm a mais de ganho estatural do que o feminino.",
    "comentariosAlternativas": {
      "A": "Incorreta. Ao nascimento a diferença entre meninos e meninas é de menos de 1 cm em média (meninos ~50 cm, meninas ~49,5 cm).",
      "B": "Incorreta. O estadiômetro de Harpenden tem precisão milimétrica (< 0,1 cm), não erro de 13 cm.",
      "C": "Incorreta. A progesterona não tem esse efeito de ganho linear de 13 cm.",
      "D": "Correta. 13 cm é a diferença média populacional adulta entre homens e mulheres decorrente do atraso fisiológico de 2 anos na puberdade e do maior pico de velocidade masculino."
    }
  },
  {
    "id": "ped-cresc-021",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Estatura-Alvo Parental",
    "enunciado": "Menino de 8 anos apresenta estatura no percentil 3 da curva da OMS. O pai mede 190 cm e a mãe mede 175 cm. Sua velocidade de crescimento nos últimos 12 meses foi de 3,8 cm/ano. O cálculo de sua estatura-alvo é de 189 cm (percentil 90 da curva adulta). Como deve ser interpretado esse caso clínico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Criança com desaceleração patológica do crescimento e nítida discordância genética, crescendo muito abaixo do seu canal genético parental esperado; investigação obrigatória."
      },
      {
        "id": "B",
        "texto": "Criança normal, pois o percentil 3 ainda está dentro da faixa de normalidade estatística da população geral."
      },
      {
        "id": "C",
        "texto": "Baixa estatura familiar típica com excelente prognóstico estatural."
      },
      {
        "id": "D",
        "texto": "Hipercrescimento proporcional que se resolverá espontaneamente."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Este é o exemplo clássico de \"falsa normalidade estatística\": embora a estatura esteja no percentil 3, o canal genético da criança situa-se no percentil 90 (alvo de 189 cm). O desvio da criança em relação ao seu alvo genético ultrapassa 2 desvios-padrão para baixo, associado a velocidade de crescimento francamente patológica (3,8 cm/ano no escolar, quando o normal é ≥ 5 cm/ano). Trata-se de falha de crescimento com discordância genética gravíssima, exigindo investigação completa.",
    "comentariosAlternativas": {
      "A": "Correta. A discordância com o canal familiar (> 2 DP abaixo do alvo) e velocidade de 3,8 cm/ano (< 5 cm/ano) impõem investigação diagnóstica imediata.",
      "B": "Incorreta. Estar no p3 com pais no p90 e velocidade de 3,8 cm/ano é manifestamente patológico.",
      "C": "Incorreta. Na baixa estatura familiar os pais são baixos; aqui os pais são muito altos.",
      "D": "Incorreta. A criança apresenta déficit estatural em relação ao alvo e baixa velocidade, não hipercrescimento."
    }
  },
  {
    "id": "ped-cresc-022",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Estatura-Alvo Parental",
    "enunciado": "Menina de 5 anos mede 102 cm (percentil 10). Pai mede 164 cm e mãe mede 151 cm. Calculando o alvo genético: [(164 - 13) + 151] / 2 = 151 cm (percentil 10). A velocidade de crescimento é de 6 cm/ano e a idade óssea é igual à idade cronológica. Qual é o diagnóstico e a conduta recomendada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Deficiência grave de GH; indicar reposição de somatropina recombinante."
      },
      {
        "id": "B",
        "texto": "Baixa Estatura Familiar (BEF); tranquilizar os pais, manter acompanhamento de rotina da velocidade de crescimento."
      },
      {
        "id": "C",
        "texto": "Síndrome de Turner; solicitar cariótipo de urgência e laparotomia exploradora."
      },
      {
        "id": "D",
        "texto": "Hipotireoidismo congênito tardio; iniciar levotiroxina imediatamente."
      }
    ],
    "correta": "B",
    "comentarioGeral": "A paciente apresenta: 1) Estatura compatível com o canal parental (percentil 10 da criança coincide com o percentil 10 da estatura-alvo); 2) Velocidade de crescimento estritamente normal (6 cm/ano); 3) Idade óssea igual à idade cronológica (IO = IC); 4) Pais geneticamente baixos. Este conjunto fecha com precisão o diagnóstico de Baixa Estatura Familiar (variante normal do crescimento), não havendo qualquer necessidade de propedêutica invasiva ou medicação.",
    "comentariosAlternativas": {
      "A": "Incorreta. A velocidade de 6 cm/ano e canal familiar estável afastam deficiência de GH.",
      "B": "Correta. A convergência entre o canal da criança e o alvo parental associada a velocidade normal e IO = IC define Baixa Estatura Familiar.",
      "C": "Incorreta. Não há desaceleração, estigmas de Turner ou discordância genética.",
      "D": "Incorreta. Não há bócio, mixedema, constipação ou atraso de idade óssea."
    }
  },
  {
    "id": "ped-cresc-023",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Estatura-Alvo Parental",
    "enunciado": "Em qual das seguintes situações o cálculo da estatura-alvo parental pelo método clássico de Tanner perde sua precisão e confiabilidade clínica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Quando ambos os pais têm estaturas semelhantes entre os percentis 25 e 50."
      },
      {
        "id": "B",
        "texto": "Quando a criança nasce de parto cesárea eletiva."
      },
      {
        "id": "C",
        "texto": "Quando há grande discrepância estatural entre os pais (ex: pai no percentil 97 e mãe no percentil 3) ou quando um dos genitores teve crescimento comprometido por patologia crônica na infância."
      },
      {
        "id": "D",
        "texto": "Quando a criança é do sexo feminino."
      }
    ],
    "correta": "C",
    "comentarioGeral": "A fórmula de Tanner baseia-se na premissa de herança poligênica de pais saudáveis com estaturas relativamente homogêneas. O método perde confiabilidade quando: 1) Há grande disparidade estatural entre os pais (ex: pai muito alto e mãe muito baixa, o que gera uma \"média\" artificial que pode não representar a segregação alélica); 2) Um dos genitores teve sua estatura adulta reduzida por doença crônica na infância (desnutrição, doença celíaca, cardiopatia congênita, radioterapia) ou por displasia óssea.",
    "comentariosAlternativas": {
      "A": "Incorreta. Pais com alturas homogêneas aumentam a precisão do cálculo.",
      "B": "Incorreta. A via de parto não interfere no potencial genético parental.",
      "C": "Correta. Disparidade marcante entre os pais ou história de doença crônica comprometedora na infância de um dos pais invalida o potencial genético real.",
      "D": "Incorreta. A fórmula é perfeitamente calibrada para ambos os sexos através da constante de 13 cm."
    }
  },
  {
    "id": "ped-cresc-024",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Estatura-Alvo Parental",
    "enunciado": "Menino de 10 anos tem pai de 172 cm e mãe de 159 cm. Qual é o valor exato da estatura-alvo e os limites inferior e superior do canal genético considerando a faixa habitual de +/- 5 cm?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Alvo: 160 cm; Limites: 155 a 165 cm."
      },
      {
        "id": "B",
        "texto": "Alvo: 165,5 cm; Limites: 160,5 a 170,5 cm."
      },
      {
        "id": "C",
        "texto": "Alvo: 178,5 cm; Limites: 173,5 a 183,5 cm."
      },
      {
        "id": "D",
        "texto": "Alvo: 172 cm; Limites: 167 a 177 cm."
      }
    ],
    "correta": "D",
    "comentarioGeral": "Cálculo para menino: Alvo = [Estatura Pai + Estatura Mãe + 13] / 2 = [172 + 159 + 13] / 2 = 344 / 2 = 172 cm. Considerando a margem de variação fisiológica de +/- 5 cm: Limite inferior = 172 - 5 = 167 cm; Limite superior = 172 + 5 = 177 cm.",
    "comentariosAlternativas": {
      "A": "Incorreta. Subestima o cálculo em mais de 12 cm.",
      "B": "Incorreta. Este valor é a média simples sem somar 13 cm.",
      "C": "Incorreta. Superestima a altura dos pais.",
      "D": "Correta. Alvo de 172 cm com canal genético entre 167 e 177 cm."
    }
  },
  {
    "id": "ped-cresc-025",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Estatura-Alvo Parental",
    "enunciado": "Ao plotar a estatura-alvo parental calculada em um gráfico de crescimento da OMS para acompanhamento longitudinal, em qual idade do gráfico a faixa do canal genético deve ser assinalada para representar o prognóstico de altura adulta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aos 19 ou 20 anos de idade (final da curva de crescimento estatural)."
      },
      {
        "id": "B",
        "texto": "Aos 5 anos de idade."
      },
      {
        "id": "C",
        "texto": "Aos 2 anos de idade."
      },
      {
        "id": "D",
        "texto": "No ponto exato da idade cronológica atual da criança."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A estatura-alvo parental representa a predição da estatura final ADULTA esperada para a criança. Portanto, nos gráficos de crescimento da OMS/CDC que vão até os 19-20 anos, o ponto da estatura-alvo com sua respectiva faixa (+/- 5 a 8,5 cm) deve ser plotado no extremo direito da curva, aos 19-20 anos. A partir desse ponto, o examinador projeta visualmente se o canal atual de percentil em que a criança cresce caminha em direção a essa meta adulta.",
    "comentariosAlternativas": {
      "A": "Correta. A estatura-alvo prevê a altura adulta final e deve ser plotada aos 19-20 anos de idade.",
      "B": "Incorreta. Aos 5 anos a criança ainda não atingiu a puberdade nem o estirão final.",
      "C": "Incorreta. Aos 2 anos a criança ainda está em plena fase de infância inicial.",
      "D": "Incorreta. Plotar a altura adulta na idade atual faria parecer que a criança tem gigantismo grotesco."
    }
  },
  {
    "id": "ped-cresc-026",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Idade Óssea e Atlas de Greulich & Pyle",
    "enunciado": "Para a avaliação da maturação esquelética e determinação da idade óssea pelo método clássico de Greulich & Pyle, qual é a incidência radiológica internacionalmente padronizada e qual segmento anatômico deve ser radiografado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Radiografia de bacia e joelhos bilateral em incidência anteroposterior (AP)."
      },
      {
        "id": "B",
        "texto": "Radiografia simples de mão e punho esquerdos em incidência póstero-anterior (PA)."
      },
      {
        "id": "C",
        "texto": "Radiografia de crânio e coluna cervical em perfil estrito."
      },
      {
        "id": "D",
        "texto": "Ressonância magnética tridimensional do fêmur direito."
      }
    ],
    "correta": "B",
    "comentarioGeral": "O método de referência mundial para avaliação da idade óssea é o Atlas de Greulich & Pyle (1959), realizado através de uma radiografia simples da mão e punho esquerdos na incidência póstero-anterior (PA). A escolha do lado esquerdo foi padronizada para evitar discrepâncias causadas por microtraumas e hipertrofia osteogênica pelo uso preferencial da mão direita (mão dominante na maioria da população), além de oferecer múltiplos centros epifisários e carpais com mínima exposição à radiação ionizante.",
    "comentariosAlternativas": {
      "A": "Incorreta. Radiografias de bacia e joelho só têm utilidade em casos específicos de lactentes muito jovens ou displasias esqueléticas.",
      "B": "Correta. A radiografia de mão e punho esquerdos em PA é o padrão-ouro universal para determinação da idade óssea.",
      "C": "Incorreta. Crânio e coluna não são utilizados para estimativa de idade óssea habitual.",
      "D": "Incorreta. Método de altíssimo custo, desnecessário e não padronizado para idade óssea."
    }
  },
  {
    "id": "ped-cresc-027",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Idade Óssea e Atlas de Greulich & Pyle",
    "enunciado": "Menino de 11 anos tem estatura no percentil 3. Sua velocidade de crescimento nos últimos 12 meses foi de 5,2 cm/ano. Ao exame físico: G1P1, sem dismorfismos. A radiografia de punho esquerdo revela idade óssea compatível com 8 anos e 6 meses (atraso de 2,5 anos em relação à idade cronológica). A idade estatural da criança também é de aproximadamente 8 anos e meio. Qual é a principal implicação prognóstica desse atraso da idade óssea?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Prognóstico desfavorável, indicando que a criança parou de crescer e terá estatura adulta extremamente baixa."
      },
      {
        "id": "B",
        "texto": "Indicação imediata de fusão cirúrgica de epífises para impedir gigantismo."
      },
      {
        "id": "C",
        "texto": "Prognóstico favorável quanto à estatura final, pois a idade óssea atrasada indica que as cartilagens epifisárias permanecem abertas por mais tempo, permitindo um período prolongado de crescimento e estirão tardio."
      },
      {
        "id": "D",
        "texto": "O atraso da idade óssea não guarda qualquer relação com a estatura adulta."
      }
    ],
    "correta": "C",
    "comentarioGeral": "A idade óssea (IO) reflete a idade biológica do esqueleto e o tempo restante de crescimento antes da fusão epifisária definitiva. Quando a IO está atrasada em relação à idade cronológica (IO < IC) e acompanha a idade estatural (IO ≈ IE) com velocidade de crescimento normal, como no Retardo Constitucional do Crescimento e da Puberdade (RCCP), o prognóstico estatural é excelente: a criança entrará em puberdade mais tarde, suas cartilagens fecharão mais tarde e ela terá mais anos para crescer, alcançando uma estatura adulta normal dentro do seu canal genético.",
    "comentariosAlternativas": {
      "A": "Incorreta. O atraso epifisário preserva o potencial de crescimento futuro, não indicando parada.",
      "B": "Incorreta. Epifisiodese cirúrgica é utilizada para frear hipercrescimento, e não em baixa estatura.",
      "C": "Correta. Epífises abertas por mais tempo significam maior tempo de crescimento linear e excelente prognóstico estatural final.",
      "D": "Incorreta. A idade óssea é o parâmetro primordial para a predição da estatura adulta (tabelas de Bayley-Pinneau)."
    }
  },
  {
    "id": "ped-cresc-028",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Idade Óssea e Atlas de Greulich & Pyle",
    "enunciado": "Menina de 7 anos e 2 meses apresenta telarca bilateral há 6 meses, associada a pubarca e aceleração da velocidade de crescimento para 10 cm/ano. A radiografia de punho esquerdo mostra idade óssea de 10 anos e 6 meses (avanço de mais de 3 anos). Qual é a principal consequência clínica e fisiopatológica desse avanço acentuado da idade óssea?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A criança se tornará um adulto gigante, com altura muito superior ao canal parental."
      },
      {
        "id": "B",
        "texto": "Ausência total de impacto sobre o crescimento esquelético."
      },
      {
        "id": "C",
        "texto": "Desenvolvimento imediato de osteoporose pós-menopáusica na infância."
      },
      {
        "id": "D",
        "texto": "Fechamento prematuro das cartilagens de crescimento induzido pelos estrógenos, resultando em término precoce do crescimento e baixa estatura final na vida adulta."
      }
    ],
    "correta": "D",
    "comentarioGeral": "Os esteroides sexuais (especialmente o estradiol, que nos ossos é o principal mediador da fusão epifisária em ambos os sexos) estimulam fortemente o estirão no curto prazo, mas aceleram a senescência e ossificação das cartilagens de conjugação epifisárias. Na puberdade precoce, a idade óssea avança desproporcionalmente (IO >> IC). Isso causa uma falsa impressão inicial de que a criança é alta para a idade cronológica, mas as epífises se fundem precocemente, cessando o crescimento cedo e acarretando baixa estatura final grave.",
    "comentariosAlternativas": {
      "A": "Incorreta. O avanço epifisário precoce encurta a janela temporal de crescimento, impedindo a alta estatura adulta.",
      "B": "Incorreta. O impacto sobre a estatura adulta é a principal complicação da puberdade precoce não tratada.",
      "C": "Incorreta. Não ocorre osteoporose; pelo contrário, há mineralização e fechamento ósseo acelerado.",
      "D": "Correta. O estrogênio fecha precocemente as epífises, levando à perda irreparável de potencial estatural e baixa estatura na idade adulta."
    }
  },
  {
    "id": "ped-cresc-029",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Idade Óssea e Atlas de Greulich & Pyle",
    "enunciado": "Qual das seguintes alterações clínicas cursa tipicamente com idade óssea atrasada (IO < IC) de forma muito marcante (frequentemente com atraso superior a 3 ou 4 anos)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Hipotireoidismo primário congênito ou adquirido grave (Tireoidite de Hashimoto descompensada)."
      },
      {
        "id": "B",
        "texto": "Hiperplasia adrenal congênita não tratada."
      },
      {
        "id": "C",
        "texto": "Puberdade precoce central verdadeira."
      },
      {
        "id": "D",
        "texto": "Obesidade exógena simples na infância."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Os hormônios tireoidianos (T3 e T4) são estritamente necessários para a maturação, recrutamento e ossificação condrocitária nas epífises. No hipotireoidismo primário grave não tratado, a maturação óssea é quase paralisada, resultando em um dos atrasos de idade óssea mais acentuados da pediatria (IO muito menor que a IC, com disgenesia epifisária típica). Ao contrário, puberdade precoce, hiperplasia adrenal e obesidade exógena simples cursam com idade óssea avançada.",
    "comentariosAlternativas": {
      "A": "Correta. O hipotireoidismo é uma das causas clássicas de atraso profundo da idade óssea (IO << IC).",
      "B": "Incorreta. Andrógenos adrenais em excesso avançam a idade óssea.",
      "C": "Incorreta. Puberdade precoce avança a idade óssea (IO > IC).",
      "D": "Incorreta. Crianças com obesidade exógena costumam apresentar leve avanço da idade óssea (IO discretamente > IC) pela aromatização periférica."
    }
  },
  {
    "id": "ped-cresc-030",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Idade Óssea e Atlas de Greulich & Pyle",
    "enunciado": "Na radiografia de mão e punho esquerdos de um menino de 13 anos, a identificação da presença do osso sesamoide do polegar (no tendão do músculo adutor do polegar na articulação metacarpofalângica) tem qual significado no acompanhamento da puberdade?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Indica que as epífises já se fecharam completamente e não há mais crescimento residual."
      },
      {
        "id": "B",
        "texto": "Marca radiológica que sinaliza que o paciente atingiu ou está muito próximo do seu pico de velocidade de crescimento puberal (estirão)."
      },
      {
        "id": "C",
        "texto": "Sinal patognomônico de raquitismo resistente à vitamina D."
      },
      {
        "id": "D",
        "texto": "Indica que a idade óssea é inferior a 8 anos."
      }
    ],
    "correta": "B",
    "comentarioGeral": "O aparecimento do centro de ossificação do osso sesamoide do polegar na articulação metacarpofalângica do 1º quirodáctilo ocorre habitualmente por volta dos 11 anos nas meninas e 13 anos nos meninos (idade óssea). Esse marco radiológico tem grande utilidade clínica, pois se correlaciona intimamente com a proximidade imediata ou vigência do pico de velocidade de crescimento do estirão puberal.",
    "comentariosAlternativas": {
      "A": "Incorreta. O sesamoide surge no início/pico do estirão; o fechamento completo ocorre anos depois.",
      "B": "Correta. A ossificação do sesamoide do polegar é um excelente marcador biológico de aproximação ou início do pico do estirão puberal.",
      "C": "Incorreta. O sesamoide é uma estrutura anatômica fisiológica normal, não sinal de raquitismo.",
      "D": "Incorreta. O sesamoide surge tipicamente com idade óssea de 11 anos em meninas e 13 anos em meninos."
    }
  },
  {
    "id": "ped-cresc-031",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Idade Óssea e Atlas de Greulich & Pyle",
    "enunciado": "Em um laudo radiológico de idade óssea pelo método de Greulich & Pyle, qual intervalo de discrepância entre a Idade Óssea (IO) e a Idade Cronológica (IC) ainda é aceito como variação biológica fisiológica normal?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Qualquer diferença, mesmo de 1 mês, é obrigatoriamente patológica."
      },
      {
        "id": "B",
        "texto": "Até +/- 4 anos."
      },
      {
        "id": "C",
        "texto": "Até +/- 1 ano (ou 12 meses)."
      },
      {
        "id": "D",
        "texto": "A idade óssea deve ser sempre 2 anos superior à cronológica em todas as crianças."
      }
    ],
    "correta": "C",
    "comentarioGeral": "A maturação esquelética populacional tem distribuição normal. Considera-se compatível com a normalidade fisiológica (IO = IC) uma variação de até +/- 1 ano (12 meses) de diferença entre a idade óssea e a idade cronológica (em crianças acima de 2-3 anos; em menores de 1 ano, variações acima de 6 meses já merecem atenção). Diferenças superiores a 1,5 a 2 anos definem formalmente atraso ou avanço patológico da idade óssea.",
    "comentariosAlternativas": {
      "A": "Incorreta. Pequenas variações de alguns meses são inerentes à biologia humana e ao método do atlas.",
      "B": "Incorreta. 4 anos é uma discrepância gravíssima.",
      "C": "Correta. Uma variação de até +/- 1 ano entre a idade óssea e a cronológica é considerada fisiológica e esperada.",
      "D": "Incorreta. Não existe exigência de avanço sistemático."
    }
  },
  {
    "id": "ped-cresc-032",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Idade Óssea e Atlas de Greulich & Pyle",
    "enunciado": "Menino de 9 anos é avaliado por baixa estatura. Sua idade cronológica é 9 anos, sua idade estatural é 7 anos e sua idade óssea é de 9 anos e 2 meses (IO = IC). A velocidade de crescimento é de 5,5 cm/ano. O pai mede 163 cm e a mãe 150 cm. O diagnóstico mais provável e a justificativa pela idade óssea são:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Retardo Constitucional do Crescimento, pois a idade óssea está atrasada."
      },
      {
        "id": "B",
        "texto": "Disgenesia gonadal com cariótipo 45,X."
      },
      {
        "id": "C",
        "texto": "Deficiência de hormônio do crescimento (DGH), pois a idade óssea está avançada."
      },
      {
        "id": "D",
        "texto": "Baixa Estatura Familiar, pois a idade óssea é compatível com a idade cronológica (IO = IC), com velocidade de crescimento normal e pais baixos."
      }
    ],
    "correta": "D",
    "comentarioGeral": "A diferenciação clássica entre as duas grandes variantes normais do crescimento reside na Idade Óssea: 1) Baixa Estatura Familiar (BEF): IO = IC (idade óssea igual à cronológica), velocidade de crescimento normal, pais baixos; 2) Retardo Constitucional do Crescimento e da Puberdade (RCCP): IO < IC (idade óssea atrasada, acompanhando a idade estatural IE), estirão e puberdade atrasados, mas pais com altura normal e história de menarca/estirão tardios. No caso, com IO = 9 anos e 2 meses para IC de 9 anos (IO = IC) e pais baixos, o diagnóstico é de Baixa Estatura Familiar.",
    "comentariosAlternativas": {
      "A": "Incorreta. No RCCP a idade óssea é caracteristicamente atrasada (IO < IC), o que não ocorre aqui.",
      "B": "Incorreta. Trata-se de um menino fenotipicamente masculino normal, sem relação com síndrome de Turner.",
      "C": "Incorreta. Na DGH a idade óssea é atrasada e a velocidade de crescimento é muito baixa (< 4 cm/ano).",
      "D": "Correta. IO = IC com velocidade normal e canal compatível com o canal parental fecha o diagnóstico de Baixa Estatura Familiar."
    }
  },
  {
    "id": "ped-cresc-033",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Idade Óssea e Atlas de Greulich & Pyle",
    "enunciado": "Qual é o método clássico mais utilizado na prática clínica endocrinopediátrica para predizer a estatura final adulta a partir da idade óssea de Greulich & Pyle?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Tabelas e coeficientes de Bayley & Pinneau."
      },
      {
        "id": "B",
        "texto": "Escala de Glasgow modificada para pediatria."
      },
      {
        "id": "C",
        "texto": "Critérios de Jones para febre reumática."
      },
      {
        "id": "D",
        "texto": "Escore de Apgar expandido."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O método preditivo de estatura adulta mais consolidado na prática clínica pediátrica é o de Bayley & Pinneau (1952), que utiliza tabelas matemáticas com base na estatura atual e na porcentagem da estatura adulta já atingida conforme a idade óssea avaliada pelo atlas de Greulich & Pyle. Outros métodos incluem o de Tanner-Whitehouse (TW3) e o de Roche-Wainer-Thissen (RWT).",
    "comentariosAlternativas": {
      "A": "Correta. As tabelas de Bayley-Pinneau utilizam a idade óssea para projetar a porcentagem de crescimento remanescente e a estatura final adulta.",
      "B": "Incorreta. Glasgow avalia nível de consciência neurológico.",
      "C": "Incorreta. Critérios de Jones diagnosticam febre reumática.",
      "D": "Incorreta. Escore de Apgar avalia adaptação neonatal imediata nos primeiros minutos de vida."
    }
  },
  {
    "id": "ped-cresc-034",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Variantes Normais do Crescimento",
    "enunciado": "Garoto de 14 anos é levado ao consultório porque é o menor da turma do 9º ano e ainda não apresenta sinais de puberdade (estágio G1P1, testículos com 2 mL bilateralmente). Sua estatura encontra-se logo abaixo do percentil 3. A velocidade de crescimento nos últimos 12 meses foi de 5,1 cm/ano. O pai relata que era muito pequeno na escola e deu o estirão aos 17 anos no serviço militar; a mãe teve menarca aos 15 anos e ambos têm estaturas normais hoje (pai 176 cm e mãe 163 cm, alvo de 176 cm). A radiografia de punho esquerdo revela idade óssea de 11 anos e 6 meses (atrasada em relação à cronológica de 14 anos, mas perfeitamente compatível com a idade estatural). Qual é o diagnóstico mais provável?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Síndrome de Klinefelter (47,XXY)."
      },
      {
        "id": "B",
        "texto": "Retardo Constitucional do Crescimento e da Puberdade (RCCP)."
      },
      {
        "id": "C",
        "texto": "Baixa Estatura Familiar (BEF)."
      },
      {
        "id": "D",
        "texto": "Craniofaringioma com pan-hipopituitarismo agudo."
      }
    ],
    "correta": "B",
    "comentarioGeral": "O quadro reúne todos os critérios patognomônicos do Retardo Constitucional do Crescimento e da Puberdade (RCCP): 1) Menino na adolescência inicial com atraso puberal fisiológico; 2) Velocidade de crescimento mantida na faixa normal para o período pré-puberal (5,1 cm/ano); 3) Idade óssea atrasada (IO de 11,5 anos para IC de 14 anos) acompanhando a idade estatural (IO ≈ IE); 4) Pais com altura normal na vida adulta; 5) História familiar clássica de maturação tardia (pai com estirão tardio e mãe com menarca tardia); 6) Prognóstico de estatura final adulta plenamente normal.",
    "comentariosAlternativas": {
      "A": "Incorreta. A síndrome de Klinefelter cursa com alta estatura desproporcionada com membros longos e ginecomastia.",
      "B": "Correta. RCCP é a variante normal mais frequente no sexo masculino, caracterizada por atraso da IO, história familiar de estirão tardio e estatura adulta final normal.",
      "C": "Incorreta. Na Baixa Estatura Familiar, a idade óssea é igual à cronológica (IO = IC) e os pais são baixos.",
      "D": "Incorreta. Craniofaringioma cursa com parada do crescimento (velocidade < 3 cm/ano), cefaleia, alterações de campo visual e diabetes insipidus."
    }
  },
  {
    "id": "ped-cresc-035",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Variantes Normais do Crescimento",
    "enunciado": "Qual é o prognóstico de estatura final adulta de uma criança com diagnóstico confirmado de Retardo Constitucional do Crescimento e da Puberdade (RCCP)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Estatura final severamente comprometida, com nanismo na vida adulta."
      },
      {
        "id": "B",
        "texto": "Gigantismo desproporcionado com necessidade de bloqueio puberal precoce."
      },
      {
        "id": "C",
        "texto": "Estatura final normal, convergindo para o canal genético parental após um estirão puberal tardio."
      },
      {
        "id": "D",
        "texto": "Parada definitiva do crescimento aos 15 anos sem fechamento epifisário."
      }
    ],
    "correta": "C",
    "comentarioGeral": "No RCCP, o \"relógio biológico\" da criança funciona em ritmo mais lento. Como a idade óssea está atrasada, as cartilagens epifisárias permanecem abertas por mais tempo. A criança cresce por um período de tempo mais prolongado e o estirão puberal, embora atrase em relação aos pares de mesma idade cronológica, ocorre com pleno vigor, permitindo que o paciente atinja uma estatura final adulta normal, perfeitamente compatível com o canal parental.",
    "comentariosAlternativas": {
      "A": "Incorreta. O RCCP não causa baixa estatura na vida adulta.",
      "B": "Incorreta. A criança não se torna gigante; ela atinge a altura normal prevista para sua família.",
      "C": "Correta. A estatura adulta final no RCCP é normal e congruente com a estatura-alvo familiar.",
      "D": "Incorreta. A criança continua crescendo além dos 16-18 anos até o fechamento epifisário tardio."
    }
  },
  {
    "id": "ped-cresc-036",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Variantes Normais do Crescimento",
    "enunciado": "Menino de 14 anos e 8 meses apresenta diagnóstico firmado de Retardo Constitucional do Crescimento e da Puberdade. Encontra-se em G1P1, com idade óssea de 12 anos. O paciente vem sofrendo intenso isolamento social e recusa-se a ir à escola devido a bullying constante por ser tratado como uma criança de 10 anos. Diante do sofrimento psíquico evidente, qual intervenção terapêutica transitória pode ser indicada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Hormônio do crescimento recombinante em altíssima dose por 5 anos."
      },
      {
        "id": "B",
        "texto": "Inibidor de aromatase associado a análogo de GnRH em dose contínua."
      },
      {
        "id": "C",
        "texto": "Orquidectomia bilateral para elevar os níveis de LH e FSH."
      },
      {
        "id": "D",
        "texto": "Tratamento de estímulo (\"priming\") com baixas doses de testosterona de depósito intramuscular por curto período (3 a 6 meses)."
      }
    ],
    "correta": "D",
    "comentarioGeral": "No RCCP, a conduta padrão é expectante com apoio psicológico. Contudo, em meninos com idade cronológica ≥ 14 anos com atraso puberal persistente e sofrimento psicossocial grave documentado, pode-se realizar o \"priming\" androgênico transitório: uso de baixas doses de testosterona de depósito (ex: cipionato ou enantato de testosterona, 50 a 100 mg IM a cada 4 semanas por 3 a 6 meses). Essa conduta induz caracteres sexuais secundários iniciais, acelera a velocidade de crescimento e deflagra o eixo hipotálamo-hipófise-gonadal sem causar avanço desproporcional da idade óssea nem comprometer a estatura final.",
    "comentariosAlternativas": {
      "A": "Incorreta. GH não é indicado para RCCP, pois a secreção de GH é normal para a idade biológica.",
      "B": "Incorreta. O bloqueio com análogo de GnRH atrasaria ainda mais a puberdade.",
      "C": "Incorreta. Conduta absurda e mutiladora.",
      "D": "Correta. O priming com baixas doses de testosterona por 3 a 6 meses é uma conduta bem estabelecida e segura para alívio psicossocial no RCCP."
    }
  },
  {
    "id": "ped-cresc-037",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Variantes Normais do Crescimento",
    "enunciado": "Menina de 8 anos tem estatura no percentil 3, sem queixas. O pai mede 162 cm (percentil 3) e a mãe mede 150 cm (percentil 3). A estatura-alvo da paciente é de 150 cm (+/- 5 cm). Sua velocidade de crescimento no último ano foi de 5,6 cm/ano. O exame físico é totalmente normal. A radiografia de punho esquerdo evidencia idade óssea de 8 anos (IO = IC). Qual é a principal característica que diferencia este quadro de Baixa Estatura Familiar (BEF) em relação ao Retardo Constitucional (RCCP)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Na BEF a idade óssea é igual à idade cronológica (IO = IC) e a estatura adulta prevista é baixa (compatível com os pais), enquanto no RCCP a idade óssea é atrasada (IO < IC) e a estatura adulta prevista é normal."
      },
      {
        "id": "B",
        "texto": "Na BEF a idade óssea é atrasada em relação à cronológica, enquanto no RCCP ela é igual."
      },
      {
        "id": "C",
        "texto": "Na BEF a velocidade de crescimento é nula, enquanto no RCCP é de 15 cm/ano."
      },
      {
        "id": "D",
        "texto": "A BEF ocorre exclusivamente em indivíduos do sexo masculino."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A comparação clássica entre as duas variantes normais é fundamental: 1) Baixa Estatura Familiar: IO = IC, pais baixos, canal genético baixo, puberdade no tempo normal, estatura final baixa (porém congruente com os pais); 2) Retardo Constitucional (RCCP): IO < IC (atrasada, acompanhando a idade estatural), pais com altura normal, história de maturação familiar tardia, puberdade tardia, estatura final normal. Em ambos a velocidade de crescimento é normal.",
    "comentariosAlternativas": {
      "A": "Correta. BEF cursa com IO = IC e previsão de altura adulta baixa; RCCP cursa com IO < IC e previsão de altura adulta normal.",
      "B": "Incorreta. A afirmação inverte os achados de idade óssea.",
      "C": "Incorreta. Em ambas as variantes normais a velocidade de crescimento é estritamente normal (5 a 7 cm/ano no escolar).",
      "D": "Incorreta. A BEF acomete igualmente ambos os sexos."
    }
  },
  {
    "id": "ped-cresc-038",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Variantes Normais do Crescimento",
    "enunciado": "Qual é a velocidade de crescimento esperada em uma criança portadora de variante normal do crescimento, seja ela Baixa Estatura Familiar (BEF) ou Retardo Constitucional do Crescimento (RCCP)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Velocidade de crescimento diminuída (< 4 cm/ano), caracterizando falha crônica."
      },
      {
        "id": "B",
        "texto": "Velocidade de crescimento estritamente normal para a idade cronológica ou idade biológica (≥ 5 cm/ano no período escolar pré-puberal)."
      },
      {
        "id": "C",
        "texto": "Velocidade de crescimento muito acelerada (> 12 cm/ano) desde o período de lactente."
      },
      {
        "id": "D",
        "texto": "Velocidade flutuante e caótica com semanas de crescimento de 2 cm e semanas de perda de estatura."
      }
    ],
    "correta": "B",
    "comentarioGeral": "Por definição, uma \"variante normal do crescimento\" (BEF ou RCCP) NÃO cursa com velocidade de crescimento patológica. Uma velocidade de crescimento inferior a 5 cm/ano no escolar pré-puberal afasta variante normal e impõe investigação para causas patológicas de baixa estatura (endocrinopatias, doenças sistêmicas, desnutrição ou síndromes genéticas).",
    "comentariosAlternativas": {
      "A": "Incorreta. Velocidade < 4 cm/ano é patológica e exclui variantes normais.",
      "B": "Correta. A manutenção de velocidade de crescimento fisiologicamente normal (5 a 7 cm/ano) é o pilar que define as variantes normais.",
      "C": "Incorreta. Velocidades > 12 cm/ano fora do estirão puberal sugerem patologia de hipercrescimento.",
      "D": "Incorreta. O crescimento linear humano é estável e progressivo."
    }
  },
  {
    "id": "ped-cresc-039",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Variantes Normais do Crescimento",
    "enunciado": "Em um adolescente de 14 anos com Retardo Constitucional do Crescimento e da Puberdade (RCCP), qual é o principal diagnóstico diferencial patológico que deve ser considerado quando o atraso puberal persiste além dos 15-16 anos de idade?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Estenose aórtica congênita crítica."
      },
      {
        "id": "B",
        "texto": "Doença de Kawasaki atípica."
      },
      {
        "id": "C",
        "texto": "Deficiência congênita ou adquirida de hormônio do crescimento (DGH) e Hipogonadismo Hipogonadotrófico congênito (como na Síndrome de Kallmann)."
      },
      {
        "id": "D",
        "texto": "Tetralogia de Fallot compensada."
      }
    ],
    "correta": "C",
    "comentarioGeral": "O grande desafio clínico na adolescência é diferenciar o RCCP (atraso transitório funcional do eixo hipotálamo-hipófise-gonadal) do Hipogonadismo Hipogonadotrófico permanente (congênito, como na síndrome de Kallmann com anosmia, ou secundário a tumores do SNC como craniofaringioma) e da deficiência de GH. Se o paciente não iniciar puberdade espontânea até os 15-16 anos, impõe-se investigação detalhada (RM de crânio, dosagens de LH, FSH, testosterona, IGF-1 e testes de estímulo).",
    "comentariosAlternativas": {
      "A": "Incorreta. Estenose aórtica é cardiopatia anatômica congênita.",
      "B": "Incorreta. Kawasaki é vasculite febril aguda da primeira infância.",
      "C": "Correta. O hipogonadismo hipogonadotrófico e a deficiência de GH são os principais diagnósticos diferenciais do atraso puberal persistente.",
      "D": "Incorreta. Fallot é cardiopatia cianogênica."
    }
  },
  {
    "id": "ped-cresc-040",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Variantes Normais do Crescimento",
    "enunciado": "Menina de 6 anos tem estatura no percentil 3, sem qualquer dismorfismo. Seus pais são primos de primeiro grau; o pai mede 158 cm e a mãe 147 cm. A criança nasceu a termo com peso e comprimento adequados e sempre cresceu paralelamente ao percentil 3, com ganho de 5,5 cm no último ano. A idade óssea é de 6 anos. A mãe solicita prescrição de hormônio do crescimento (rhGH) para que a filha fique mais alta que a média da família. Qual é a conduta ética e tecnicamente correta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Prescrever rhGH imediatamente, pois qualquer criança no percentil 3 tem indicação aprovada em bula."
      },
      {
        "id": "B",
        "texto": "Encaminhar para cirurgia de alongamento ortopédico dos quatro membros."
      },
      {
        "id": "C",
        "texto": "Indicar tireoidectomia profilática para induzir estirão compensatório."
      },
      {
        "id": "D",
        "texto": "Esclarecer que a criança apresenta Baixa Estatura Familiar (variante normal do crescimento), não havendo deficiência hormonal nem indicação médica ou aprovação legal para uso de rhGH; manter seguimento pediátrico de rotina."
      }
    ],
    "correta": "D",
    "comentarioGeral": "A Baixa Estatura Familiar não é uma doença, mas sim a expressão biológica saudável de um conjunto poligênico herdado de pais geneticamente baixos. A criança tem velocidade normal, idade óssea normal e exame físico normal. O uso de hormônio de crescimento não é indicado nem aprovado para baixa estatura familiar com velocidade normal, trazendo riscos de efeitos adversos metabólicos e custo financeiro sem benefício ético comprovado.",
    "comentariosAlternativas": {
      "A": "Incorreta. Baixa estatura familiar não é indicação formal de rhGH.",
      "B": "Incorreta. Cirurgias invasivas de alongamento não têm indicação em variantes normais.",
      "C": "Incorreta. A tireoidectomia causaria hipotireoidismo grave e parada do crescimento.",
      "D": "Correta. Orientar a família sobre a variante normal e a ausência de indicação para rhGH é a conduta médica ética e correta."
    }
  },
  {
    "id": "ped-cresc-041",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Variantes Normais do Crescimento",
    "enunciado": "Qual é o padrão evolutivo típico da curva de crescimento de uma criança com Retardo Constitucional do Crescimento e da Puberdade (RCCP) nos primeiros 3 anos de vida?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pode apresentar uma desaceleração fisiológica transitória entre os 12 e 36 meses, fixando-se em um canal inferior (frequentemente p3 a p10), onde passa a crescer com velocidade normal paralela à curva durante toda a fase escolar, até apresentar o atraso do estirão puberal."
      },
      {
        "id": "B",
        "texto": "Cresce no percentil 97 até os 2 anos e depois para completamente de crescer."
      },
      {
        "id": "C",
        "texto": "Apresenta perda ponderal grave com queda para Escore-Z de peso < -5 DP."
      },
      {
        "id": "D",
        "texto": "Nasce invariavelmente com nanismo e microcefalia ao parto."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O padrão bifásico clássico do RCCP inclui: 1) Um período inicial nos primeiros 1 a 3 anos em que o crescimento desacelera suavemente até encontrar seu canal biológico próprio (geralmente próximo ao p3 ou logo abaixo dele); 2) Estabilização na fase escolar, onde a criança cresce com velocidade rigorosamente normal paralela às curvas; 3) Atraso do estirão na adolescência, quando os colegas aceleram e o paciente parece \"ficar para trás\", seguido de estirão tardio e normalização na vida adulta.",
    "comentariosAlternativas": {
      "A": "Correta. A desaceleração inicial precoce seguida de paralelismo na infância e estirão tardio é a história natural típica do RCCP.",
      "B": "Incorreta. O RCCP não cursa com percentil 97 inicial e parada súbita.",
      "C": "Incorreta. No RCCP o peso é proporcional à estatura, sem desnutrição grave.",
      "D": "Incorreta. O comprimento ao nascer é habitualmente normal."
    }
  },
  {
    "id": "ped-cresc-042",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Variantes Normais do Crescimento",
    "enunciado": "Uma criança pode apresentar a sobreposição de ambas as variantes normais do crescimento (Baixa Estatura Familiar associada a Retardo Constitucional do Crescimento)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Não, são condições geneticamente incompatíveis e mutuamente excludentes."
      },
      {
        "id": "B",
        "texto": "Sim, a criança pode herdar o potencial genético baixo de seus pais (BEF) e simultaneamente o padrão familiar de maturação tardia (RCCP); nesses casos, a estatura situa-se abaixo do percentil 3 e a idade óssea é atrasada, atingindo na vida adulta a estatura baixa prevista para sua família."
      },
      {
        "id": "C",
        "texto": "Sim, e essa associação invariavelmente se transforma em síndrome de Down na adolescência."
      },
      {
        "id": "D",
        "texto": "Apenas se a criança for portadora de diabetes mellitus tipo 1."
      }
    ],
    "correta": "B",
    "comentarioGeral": "A sobreposição de BEF e RCCP é relativamente comum na prática clínica pediátrica: a criança herda pais geneticamente baixos (canal de BEF) e também herda a cronologia de puberdade tardia (RCCP). Nesses pacientes, a estatura na infância fica abaixo do percentil 3, a idade óssea é atrasada e o estirão é tardio, alcançando no final da maturação a estatura adulta baixa esperada para o canal de seus pais.",
    "comentariosAlternativas": {
      "A": "Incorreta. As duas variantes podem coexistir perfeitamente no mesmo indivíduo.",
      "B": "Correta. A coexistência de BEF e RCCP é bem conhecida e combina idade óssea atrasada com meta final baixa compatível com os pais.",
      "C": "Incorreta. A síndrome de Down é uma aneuploidia congênita (trissomia 21) presente desde a concepção.",
      "D": "Incorreta. Não há qualquer correlação com diabetes mellitus."
    }
  },
  {
    "id": "ped-cresc-043",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Baixa Estatura Desproporcionada e Displasias Ósseas",
    "enunciado": "Na avaliação propedêutica de uma criança com suspeita de displasia esquelética, qual medida antropométrica divide o corpo em Segmento Superior (SS) e Segmento Inferior (SI)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A distância da ponta do nariz até o umbigo."
      },
      {
        "id": "B",
        "texto": "A medida da circunferência da cintura dividida pela prega triciptal."
      },
      {
        "id": "C",
        "texto": "A medida do Segmento Inferior (do topo da sínfise púbica até o chão, em pé) subtraída da Estatura total para obtenção do Segmento Superior."
      },
      {
        "id": "D",
        "texto": "A distância entre o acrômio direito e o maléolo lateral esquerdo."
      }
    ],
    "correta": "C",
    "comentarioGeral": "A avaliação das proporções corporais exige a divisão corporal em Segmento Inferior (SI) e Segmento Superior (SS). O Segmento Inferior é medido com o paciente descalço em pé, medindo-se a distância vertical do bordo superior da sínfise púbica até o chão. O Segmento Superior (SS) é obtido subtraindo-se o Segmento Inferior da Estatura total: SS = Estatura - SI. A relação SS/SI permite diagnosticar se a baixa estatura é proporcional (variantes normais, causas endócrinas e sistêmicas) ou desproporcionada (displasias esqueléticas).",
    "comentariosAlternativas": {
      "A": "Incorreta. O nariz e o umbigo não são marcos anatômicos para proporções esqueléticas.",
      "B": "Incorreta. Essa medida avalia adiposidade e risco cardiovascular, não proporções ósseas.",
      "C": "Correta. O SI mede da sínfise púbica ao chão; o SS é obtido subtraindo o SI da estatura total (SS = Estatura - SI).",
      "D": "Incorreta. Medida sem padronização anatômica."
    }
  },
  {
    "id": "ped-cresc-044",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Baixa Estatura Desproporcionada e Displasias Ósseas",
    "enunciado": "Qual é o comportamento fisiológico normal da relação Segmento Superior / Segmento Inferior (SS/SI) desde o nascimento até a idade adulta em crianças saudáveis?",
    "alternativas": [
      {
        "id": "A",
        "texto": "É de 0,5 ao nascimento e sobe para 2,5 no adulto."
      },
      {
        "id": "B",
        "texto": "A relação SS/SI não sofre qualquer alteração decorrente do crescimento."
      },
      {
        "id": "C",
        "texto": "Mantém-se constante e fixa em 1,0 durante todas as etapas da vida intrauterina e pós-natal."
      },
      {
        "id": "D",
        "texto": "É de cerca de 1,7 ao nascimento (tronco longo e membros curtos), decresce para cerca de 1,3 aos 3 anos, atinge 1,0 entre os 7 e 10 anos (quando membros e tronco se equivalem) e estabiliza em torno de 0,9 a 1,0 no adulto."
      }
    ],
    "correta": "D",
    "comentarioGeral": "Ao nascer, o bebê apresenta cabeça e tronco proporcionalmente maiores do que os membros inferiores, com relação SS/SI em torno de 1,7. Ao longo da infância, os membros inferiores crescem a uma taxa proporcionalmente maior do que o tronco, de modo que a relação SS/SI decai continuamente: aos 3 anos é de cerca de 1,3; entre os 7 e 10 anos atinge o equilíbrio de 1,0 (SS = SI); no adulto normal situa-se entre 0,9 e 1,0. Se em uma criança de 8 anos a relação for de 1,6 (muito aumentada), significa membros inferiores curtos (displasia óssea com membros curtos).",
    "comentariosAlternativas": {
      "A": "Incorreta. A relação decresce com o crescimento relativo das pernas, não aumenta.",
      "B": "Incorreta. É um dos pilares antropométricos da endocrinologia pediátrica.",
      "C": "Incorreta. A relação sofre intensa dinâmica com a idade.",
      "D": "Correta. A evolução fisiológica da relação SS/SI vai de 1,7 no recém-nascido a 1,0 entre 7-10 anos e ~0,95 no adulto."
    }
  },
  {
    "id": "ped-cresc-045",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Baixa Estatura Desproporcionada e Displasias Ósseas",
    "enunciado": "Lactente de 4 meses é trazido para consulta. Ao exame, apresenta encurtamento marcante dos quatro membros, com maior comprometimento dos segmentos proximais (braços e coxas / padrão rizomélico), macrocefalia relativa com fronte olímpica proeminente, hipoplasia do terço médio da face com base nasal deprimida, mãos curtas e largas com separação entre o terceiro e quarto dedos (\"mão em tridente\") e cifose tóraco-lombar. Os pais têm estatura normal e o pai tem 48 anos. Qual é a principal hipótese diagnóstica e a base genética dessa condição?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Acondroplasia (mutação no gene FGFR3 com ganho de função)."
      },
      {
        "id": "B",
        "texto": "Osteogênese imperfeita tipo I (mutação do colágeno tipo 1)."
      },
      {
        "id": "C",
        "texto": "Mucopolissacaridose tipo I (síndrome de Hurler)."
      },
      {
        "id": "D",
        "texto": "Síndrome de Turner (45,X)."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A acondroplasia é a displasia óssea não letal mais frequente no ser humano. Tem herança autossômica dominante, sendo que cerca de 80% dos casos decorrem de mutações novas (de novo), fortemente associadas à idade paterna avançada (> 35-40 anos). A mutação pontual quase universal no gene FGFR3 (frequentemente Gly380Arg) causa ativação constitutiva (ganho de função) do receptor FGFR3, que atua como inibidor tônico da proliferação condrocitária nas placas de crescimento epifisárias. O fenótipo clássico inclui membros curtos rizomélicos, macrocefalia com bossa frontal, hipoplasia mediofacial e mão em tridente.",
    "comentariosAlternativas": {
      "A": "Correta. Acondroplasia: encurtamento rizomélico, macrocefalia, mão em tridente e mutação com ganho de função no gene FGFR3 associada à idade paterna avançada.",
      "B": "Incorreta. Osteogênese imperfeita cursa com ossos frágeis, fraturas frequentes e escleras azuladas.",
      "C": "Incorreta. Mucopolissacaridose cursa com fácies grosseira, opacidade de córnea e hepatoesplenomegalia.",
      "D": "Incorreta. A síndrome de Turner causa baixa estatura proporcional em meninas, sem membros rizomélicos ou mão em tridente."
    }
  },
  {
    "id": "ped-cresc-046",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Baixa Estatura Desproporcionada e Displasias Ósseas",
    "enunciado": "No lactente portador de acondroplasia, qual é a complicação anatômica grave decorrente do estreitamento da base do crânio que exige rastreio rigoroso por neuroimagem (TC/RM) nos primeiros meses de vida devido ao risco de morte súbita?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Agenesia completa do corpo caloso."
      },
      {
        "id": "B",
        "texto": "Estenose crítica do forame magno com compressão da transição bulbomedular e risco de apneia central do sono."
      },
      {
        "id": "C",
        "texto": "Fechamento prematuro da sutura sagital isolada (escafocefalia simples)."
      },
      {
        "id": "D",
        "texto": "Aneurisma congênito da artéria basilar."
      }
    ],
    "correta": "B",
    "comentarioGeral": "Na acondroplasia, a ossificação endocondral da base do crânio é gravemente comprometida, resultando em um forame magno anormalmente pequeno e estenosado. Isso gera compressão crônica da transição craniocervical / medula oblonga superior, causando apneia central, hiper-reflexia, hipotonia grave e risco aumentado de morte súbita do lactente (morte no berço). O rastreio com polissonografia e neuroimagem (TC/RM da transição craniocervical) é formalmente indicado pela Academia Americana de Pediatria e pela SBP.",
    "comentariosAlternativas": {
      "A": "Incorreta. Não é a complicação ameaçadora clássica da base do crânio.",
      "B": "Correta. A estenose de forame magno com compressão bulbomedular é a complicação mais letal do primeiro ano de vida na acondroplasia.",
      "C": "Incorreta. A macrocefalia decorre de hidrocefalia comunicante ou megalencefalia, e não cranioestenose isolada.",
      "D": "Incorreta. Aneurismas basilares não fazem parte da história natural da doença."
    }
  },
  {
    "id": "ped-cresc-047",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Baixa Estatura Desproporcionada e Displasias Ósseas",
    "enunciado": "Como se denominam os três padrões anatômicos de encurtamento dos membros nas displasias esqueléticas de acordo com o segmento ósseo primordialmente acometido?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Axial, Apendicular e Visceral."
      },
      {
        "id": "B",
        "texto": "Proximal, Cortical e Medular."
      },
      {
        "id": "C",
        "texto": "Rizomélico (raiz do membro: fêmur/úmero), Mesomélico (meio do membro: rádio/ulna e tíbia/fíbula) e Acromélico (extremidades: mãos e pés)."
      },
      {
        "id": "D",
        "texto": "Osteoclástico, Osteoblástico e Condrocítico."
      }
    ],
    "correta": "C",
    "comentarioGeral": "A semiologia das displasias esqueléticas classifica o encurtamento dos membros em três tipos anatômicos: 1) Rizomélico: compromete o segmento proximal / raiz do membro (braço/úmero e coxa/fêmur), clássico da Acondroplasia; 2) Mesomélico: compromete o segmento intermediário (antebraço/rádio-ulna e perna/tíbia-fíbula), clássico da Discondrosteose de Léri-Weill; 3) Acromélico: compromete as extremidades distais (mãos e pés), visto na Acromesomelia.",
    "comentariosAlternativas": {
      "A": "Incorreta. Termos não correspondem à classificação de encurtamento de membros.",
      "B": "Incorreta. São divisões histológicas/anatômicas do tecido ósseo.",
      "C": "Correta. Rizomélico (raiz), Mesomélico (intermediário) e Acromélico (mãos/pés) são os termos semiológicos corretos.",
      "D": "Incorreta. São termos relacionados às linhagens celulares ósseas."
    }
  },
  {
    "id": "ped-cresc-048",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Baixa Estatura Desproporcionada e Displasias Ósseas",
    "enunciado": "Menina de 10 anos é encaminhada por baixa estatura desproporcionada. Ao exame: antebraços curtos com desvio ulnar das mãos e proeminência dorsal dolorosa da cabeça da ulna em ambos os punhos (Deformidade de Madelung). A mãe apresenta alterações físicas semelhantes e baixa estatura. O exame genético-molecular demonstra mutação em heterozigose no gene SHOX. Qual é o diagnóstico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Raquitismo hipofosfatêmico ligado ao X."
      },
      {
        "id": "B",
        "texto": "Acondroplasia clássica."
      },
      {
        "id": "C",
        "texto": "Síndrome de Marfan."
      },
      {
        "id": "D",
        "texto": "Discondrosteose de Léri-Weill."
      }
    ],
    "correta": "D",
    "comentarioGeral": "A Discondrosteose de Léri-Weill é uma displasia esquelética autossômica dominante causada por mutações com perda de função ou deleções do gene SHOX (Short Stature Homeobox, localizado na região pseudoautossômica PAR1 dos cromossomos sexuais X e Y). Caracteriza-se por encurtamento mesomélico dos membros (antebraços e pernas curtos) e pela Deformidade de Madelung bilateral (subluxação dorsal e arqueamento da ulna distal decorrente de parada prematura da placa fisária radial medial). Pacientes com deficiência de SHOX têm indicação formal de tratamento com rhGH aprovada pela FDA e ANVISA.",
    "comentariosAlternativas": {
      "A": "Incorreta. O raquitismo hipofosfatêmico causa deformidades em varo/valgo e rosário raquítico, não a deformidade de Madelung por gene SHOX.",
      "B": "Incorreta. Acondroplasia decorre de mutação no FGFR3 e cursa com membros rizomélicos.",
      "C": "Incorreta. A síndrome de Marfan cursa com alta estatura e membros muito longos (dolicostenomelia).",
      "D": "Correta. A tríade de encurtamento mesomélico, Deformidade de Madelung e mutação no gene SHOX define a Discondrosteose de Léri-Weill."
    }
  },
  {
    "id": "ped-cresc-049",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Baixa Estatura Desproporcionada e Displasias Ósseas",
    "enunciado": "Em um paciente com acondroplasia, qual é a conduta farmacológica mais recente que atua diretamente na via fisiopatológica do FGFR3, recentemente aprovada para promover melhora do crescimento ósseo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Vosoritida (análogo do peptídeo natriurético tipo C - CNP), que inibe a cascata proliferativa negativa ativada pelo FGFR3 mutado."
      },
      {
        "id": "B",
        "texto": "Altas doses de vitamina D parenteral."
      },
      {
        "id": "C",
        "texto": "Metformina em dose plena associada a insulina glargina."
      },
      {
        "id": "D",
        "texto": "Bisfosfonatos intravenosos diários."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Vosoritida é uma inovação terapêutica recente aprovada pelas principais agências regulatórias (FDA, EMA e ANVISA). Trata-se de um análogo recombinante do peptídeo natriurético tipo C (CNP). O CNP liga-se ao seu receptor específico (NPR-B) e antagoniza a via de sinalização intracelular downstream ativada constitutivamente pelo FGFR3 (via MAPK/ERK), liberando a placa de crescimento epifisária para proliferar e promovendo ganho estatural linear em crianças com acondroplasia com epífises abertas.",
    "comentariosAlternativas": {
      "A": "Correta. A Vosoritida é o primeiro fármaco modificador da doença na acondroplasia, atuando como agonista do receptor de CNP que bloqueia a hiperativação do FGFR3.",
      "B": "Incorreta. A vitamina D não tem papel terapêutico na acondroplasia e doses excessivas causam intoxicação e nefrocalcinose.",
      "C": "Incorreta. Fármacos hipoglicemiantes sem indicação em displasias ósseas.",
      "D": "Incorreta. Bisfosfonatos são usados na osteogênese imperfeita para reduzir fraturas, não na acondroplasia."
    }
  },
  {
    "id": "ped-cresc-050",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Baixa Estatura Desproporcionada e Displasias Ósseas",
    "enunciado": "Qual é o achado radiológico característico observado na radiografia simples da coluna lombar de uma criança com acondroplasia, que a diferencia de outras etiologias de baixa estatura?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aumento progressivo da distância interpeduncular lombar no sentido craniocaudal."
      },
      {
        "id": "B",
        "texto": "Estreitamento progressivo da distância interpeduncular lombar no sentido craniocaudal (de L1 a L5), associado a ossos ilíacos quadrados e estreitamento da incisura isquiática."
      },
      {
        "id": "C",
        "texto": "Vértebras em borboleta em múltiplos níveis cervicais."
      },
      {
        "id": "D",
        "texto": "Escoliose congênita grave por hemivértebra isolada."
      }
    ],
    "correta": "B",
    "comentarioGeral": "Na coluna normal, a distância entre os pedículos vertebrais (distância interpeduncular) alarga-se progressivamente no sentido craniocaudal (de L1 até L5) para acomodar a cauda equina. Na acondroplasia, ocorre a inversão patológica desse padrão: há um estreitamento progressivo da distância interpeduncular de L1 para L5. Na bacia, os ossos ilíacos são pequenos e arredondados/quadrados (\"orelhas de elefante\") com incisura isquiática estreita e teto acetabular horizontal.",
    "comentariosAlternativas": {
      "A": "Incorreta. O aumento progressivo é o padrão anatômico fisiológico normal.",
      "B": "Correta. O estreitamento caudal da distância interpeduncular lombar é o sinal radiológico clássico da acondroplasia na coluna.",
      "C": "Incorreta. Vértebra em borboleta é típica da síndrome de Alagille.",
      "D": "Incorreta. Hemivértebra é anomalia isolada de segmentação vertebral."
    }
  },
  {
    "id": "ped-cresc-051",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Cromossômicas e Sindrômicas",
    "enunciado": "Menina de 8 anos é trazida pela mãe com queixa de baixa estatura. Ao exame: estatura no percentil < 3 (Escore-Z de -2,7 DP), velocidade de crescimento de 3,6 cm/ano nos últimos 12 meses. O exame físico não revela estigmas evidentes além de implantação discretamente baixa de cabelos na nuca e palato ligeiramente ogival. Não há sopros cardíacos. Diante de uma menina com desaceleração inexplicada do crescimento, qual é a conduta diagnóstica obrigatória preconizada pela Sociedade Brasileira de Pediatria (SBP)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Solicitar TC de crânio com contraste para pesquisar craniofaringioma."
      },
      {
        "id": "B",
        "texto": "Aguardar até os 15 anos para verificar se haverá menarca espontânea antes de qualquer exame."
      },
      {
        "id": "C",
        "texto": "Solicitar cariótipo de sangue periférico com contagem estendida de metáfases (mínimo 30) para pesquisa formal de Síndrome de Turner e seus mosaicismos."
      },
      {
        "id": "D",
        "texto": "Prescrever sulfato ferroso e encaminhar para psicoterapia infantil."
      }
    ],
    "correta": "C",
    "comentarioGeral": "A regra de ouro da endocrinologia pediátrica é mandatória: TODA MENINA COM BAIXA ESTATURA INEXPLICADA OU DESACELERAÇÃO DO CRESCIMENTO DEVE REALIZAR CARIÓTIPO, mesmo na ausência completa de estigmas fenotípicos clássicos de Turner. Até 30% a 50% das meninas com Síndrome de Turner (especialmente as formas em mosaico como 45,X/46,XX ou anomalias estruturais do X) apresentam a baixa estatura como ÚNICA manifestação clínica na infância. A contagem de pelo menos 30 a 50 metáfases é essencial para excluir mosaicismos de baixo grau.",
    "comentariosAlternativas": {
      "A": "Incorreta. O cariótipo é o exame primordial e obrigatório para qualquer menina com baixa estatura.",
      "B": "Incorreta. Aguardar até os 15 anos atrasa irreversivelmente a janela de oportunidade de tratamento com rhGH.",
      "C": "Correta. O cariótipo com contagem de metáfases é mandatório em qualquer menina com baixa estatura inexplicada para rastrear Turner.",
      "D": "Incorreta. Não há qualquer evidência de anemia ferropriva primária justificando a conduta."
    }
  },
  {
    "id": "ped-cresc-052",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Cromossômicas e Sindrômicas",
    "enunciado": "Qual é o mecanismo genético responsável pela baixa estatura desproporcional ou proporcional observada na quase totalidade das pacientes com Síndrome de Turner (45,X)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Duplicação do gene FGFR3 no cromossomo 4."
      },
      {
        "id": "B",
        "texto": "Deleção do cromossomo 22q11.2."
      },
      {
        "id": "C",
        "texto": "Mutações no receptor de vasopressina V2 no túbulo coletor."
      },
      {
        "id": "D",
        "texto": "Haploinsuficiência do gene SHOX (Short Stature Homeobox), localizado na região pseudoautossômica PAR1 do braço curto do cromossomo X."
      }
    ],
    "correta": "D",
    "comentarioGeral": "O gene SHOX (Short Stature Homeobox) está localizado na região pseudoautossômica PAR1 dos cromossomos sexuais X e Y (escapa da inativação do X). Para um crescimento esquelético normal, são necessárias duas cópias ativas do gene SHOX (uma em cada cromossomo sexual: XX ou XY). Na síndrome de Turner clássica (45,X), a perda de um cromossomo sexual acarreta a perda de uma das cópias do gene SHOX (haploinsuficiência), sendo esta a causa primária da baixa estatura.",
    "comentariosAlternativas": {
      "A": "Incorreta. FGFR3 mutado é a causa da acondroplasia.",
      "B": "Incorreta. A deleção 22q11.2 causa a síndrome de DiGeorge / velocardiofacial.",
      "C": "Incorreta. O receptor V2 está associado ao diabetes insipidus nefrogênico.",
      "D": "Correta. A haploinsuficiência do gene SHOX na região PAR1 do cromossomo X é a base molecular da baixa estatura na síndrome de Turner."
    }
  },
  {
    "id": "ped-cresc-053",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Cromossômicas e Sindrômicas",
    "enunciado": "Menina de 10 anos tem diagnóstico citogenético de Síndrome de Turner (45,X). Em relação ao manejo do crescimento e desenvolvimento puberal nessa paciente, qual é a conduta terapêutica padronizada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Uso de hormônio do crescimento recombinante (rhGH) em doses suprafisiológicas a partir do momento da desaceleração estatural, seguido de indução puberal com baixas doses de estrógeno aos 11-12 anos e posterior adição de progesterona após sangramento ou 2 anos de estrogenioterapia."
      },
      {
        "id": "B",
        "texto": "Contraindicação absoluta ao uso de rhGH devido ao risco de fechamento prematuro das cartilagens."
      },
      {
        "id": "C",
        "texto": "Uso exclusivo de testosterona oral em altas doses para masculinizar a genitália."
      },
      {
        "id": "D",
        "texto": "Ooforoplastia laparoscópica de urgência para retirada de cistos foliculares."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O protocolo padrão para Turner inclui: 1) Início de rhGH em doses suprafisiológicas (0,045 a 0,050 mg/kg/dia) precocemente (a partir dos 2-4 anos ou assim que houver desaceleração estatural) para otimizar o ganho de altura antes da puberdade; 2) Indução puberal fisiológica com baixas doses de estradiol transdérmico por volta dos 11-12 anos (mimetizando a cronologia normal de puberdade sem fechar precocemente as epífises), com escalonamento gradual da dose; 3) Adição de progestágeno cíclico após cerca de 2 anos de estrógeno ou após sangramento de escape, para proteção endometrial.",
    "comentariosAlternativas": {
      "A": "Correta. Protocolo padrão: rhGH em doses elevadas para crescimento linear + indução puberal estrogênica gradual com posterior progestágeno.",
      "B": "Incorreta. O rhGH é a terapia de escolha comprovada e aprovada para Turner.",
      "C": "Incorreta. A indução é estrogênica, respeitando o fenótipo feminino.",
      "D": "Incorreta. Na síndrome de Turner as gônadas são fitas fibrosas disgenéticas (streak gonads), sem cistos foliculares funcionantes."
    }
  },
  {
    "id": "ped-cresc-054",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Cromossômicas e Sindrômicas",
    "enunciado": "Menino de 6 anos apresenta baixa estatura, pescoço curto e alado (pterygium colli), hipertelorismo ocular, ptose palpebral bilateral, tórax com pectus carinatum superior e excavatum inferior, criptorquidia unilateral e sopro sistólico ejetivo rude em foco pulmonar 3+/6+. O ecocardiograma confirma estenose valvar pulmonar com espessamento displásico. O cariótipo de sangue periférico é 46,XY. Qual é o diagnóstico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Síndrome de Turner masculina."
      },
      {
        "id": "B",
        "texto": "Síndrome de Noonan."
      },
      {
        "id": "C",
        "texto": "Síndrome de Down."
      },
      {
        "id": "D",
        "texto": "Acondroplasia grave."
      }
    ],
    "correta": "B",
    "comentarioGeral": "A síndrome de Noonan é uma rasopatia com herança autossômica dominante (frequentemente mutações nos genes PTPN11, SOS1, RAF1 ou KRAS da via RAS-MAPK), que acomete igualmente indivíduos de ambos os sexos e cursa com CARIÓTIPO NORMAL (46,XY ou 46,XX). Compartilha estigmas físicos semelhantes aos de Turner (pescoço alado, baixa estatura, hipertelorismo, orelhas baixas), mas tem como cardiopatia mais clássica a Estenose Valvar Pulmonar (coração direito) e/ou miocardiopatia hipertrófica, além de criptorquidia frequente nos meninos.",
    "comentariosAlternativas": {
      "A": "Incorreta. O termo \"Turner masculina\" é obsoleto e incorreto; a patologia é a Síndrome de Noonan (cariótipo 46,XY normal).",
      "B": "Correta. Síndrome de Noonan: fenótipo Turner-like, estenose pulmonar, pectus excavatum/carinatum, criptorquidia e cariótipo 46,XY normal.",
      "C": "Incorreta. Down cursa com trissomia 21 e defeito de septo atrioventricular total (DSAV).",
      "D": "Incorreta. Não há encurtamento rizomélico de membros nem mutação de FGFR3."
    }
  },
  {
    "id": "ped-cresc-055",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Cromossômicas e Sindrômicas",
    "enunciado": "Qual é a cardiopatia congênita mais frequente na Síndrome de Turner (45,X), e qual é a mais clássica da Síndrome de Noonan, respectivamente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Estenose pulmonar na Turner; Comunicação interatrial na Noonan."
      },
      {
        "id": "B",
        "texto": "Tetralogia de Fallot na Turner; Transposição das Grandes Artérias na Noonan."
      },
      {
        "id": "C",
        "texto": "Coarctação de Aorta e Valva Aórtica Bicúspide na Turner; Estenose Valvar Pulmonar e Miocardiopatia Hipertrófica na Noonan."
      },
      {
        "id": "D",
        "texto": "Truncus arteriosus em ambas."
      }
    ],
    "correta": "C",
    "comentarioGeral": "A diferenciação cardiovascular é clássica de prova: Síndrome de Turner afeta primariamente o CORAÇÃO ESQUERDO: valva aórtica bicúspide (em até 30-50%) e coarctação de aorta (em 10-15%), com risco aumentado de dissecção aórtica. Já a Síndrome de Noonan acomete primariamente o CORAÇÃO DIREITO e o miocárdio: estenose valvar pulmonar com displasia valvar (50-60%) e miocardiopatia hipertrófica (20-30%).",
    "comentariosAlternativas": {
      "A": "Incorreta. A estenose pulmonar é da Noonan, não de Turner.",
      "B": "Incorreta. Fallot e TGA não são as lesões marcadoras dessas duas síndromes.",
      "C": "Correta. Turner: valva aórtica bicúspide / coarctação de aorta (lado esquerdo); Noonan: estenose pulmonar / cardiomiopatia hipertrófica.",
      "D": "Incorreta. Truncus arteriosus é típico da microdeleção 22q11.2."
    }
  },
  {
    "id": "ped-cresc-056",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Cromossômicas e Sindrômicas",
    "enunciado": "Lactente masculino nasceu com hipotonia grave generalizada (\"bebê frouxo\"), reflexos de sucção e deglutição quase ausentes, necessitando de alimentação por sonda enteral por 2 meses, associada a criptorquidia bilateral e micropênis. A partir dos 2 anos e meio de idade, a hipotonia melhorou, mas a criança desenvolveu apetite voraz e incontrolável (hiperfagia compulsiva), escondendo comida, com ganho ponderal acelerado e desaceleração do crescimento estatural (baixa estatura com obesidade mórbida). Apresenta mãos e pés pequenos. Qual é o diagnóstico e o teste genético indicado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Síndrome de Down; cariótipo por banda G."
      },
      {
        "id": "B",
        "texto": "Hipotireoidismo congênito isolado por bócio simples."
      },
      {
        "id": "C",
        "texto": "Acondroplasia; dosagem de cálcio e fósforo."
      },
      {
        "id": "D",
        "texto": "Síndrome de Prader-Willi; teste de metilação do DNA da região 15q11-q13 (MS-MLPA ou PCR específico)."
      }
    ],
    "correta": "D",
    "comentarioGeral": "A síndrome de Prader-Willi tem um quadro bifásico patognomônico: 1) Fase 1 (neonatal/lactente): hipotonia profunda com letargia, choro fraco, hiporreflexia e falha de sucção com dificuldade para ganhar peso (failure to thrive), associada a hipogonadismo (micropênis e criptorquidia); 2) Fase 2 (a partir dos 2-3 anos): hiperfagia compulsiva insaciável com obsessão por comida, levando a obesidade precoce e grave, baixa estatura por disfunção do eixo GH, atraso cognitivo, fronte estreita, olhos amendoados e mãos e pés pequenos. Decorre de perda de expressão de genes de origem paterna na região 15q11-q13 (deleção paterna em 70% ou dissomia uniparental materna em 25-30%). O teste padrão-ouro de triagem inicial é o estudo de metilação da região 15q11-q13.",
    "comentariosAlternativas": {
      "A": "Incorreta. Down não tem esse padrão bifásico de hiperfagia insaciável.",
      "B": "Incorreta. Hipotireoidismo congênito é detectado no teste do pezinho e não causa essa hiperfagia compulsiva.",
      "C": "Incorreta. Acondroplasia não cursa com hiperfagia nem hipotonia neonatal grave com sonda.",
      "D": "Correta. Síndrome de Prader-Willi: hipotonia neonatal precoce seguida de hiperfagia, obesidade e baixa estatura; diagnóstico por metilação em 15q11-q13."
    }
  },
  {
    "id": "ped-cresc-057",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Cromossômicas e Sindrômicas",
    "enunciado": "Qual é o papel comprovado do hormônio do crescimento recombinante (rhGH) no manejo terapêutico de crianças com Síndrome de Prader-Willi?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O rhGH melhora a estatura final, promove aumento da massa magra, redução da massa gorda corporal e melhora da força muscular e do tônus, sendo aprovado formalmente para essa síndrome."
      },
      {
        "id": "B",
        "texto": "Nenhum, o uso de rhGH é formalmente contraindicado em todas as fases da síndrome."
      },
      {
        "id": "C",
        "texto": "O rhGH serve exclusivamente para curar a hiperfagia e cessar o apetite da criança."
      },
      {
        "id": "D",
        "texto": "O rhGH é utilizado apenas se houver hipoglicemia cetótica associada a diabetes tipo 2."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A Síndrome de Prader-Willi é uma das indicações formais e aprovadas de tratamento com rhGH. Devido a uma disfunção hipotalâmica intrínseca, essas crianças têm deficiência relativa de GH e uma composição corporal patológica (excesso de gordura e acentuada sarcopenia com fraqueza muscular). O tratamento com rhGH aumenta a estatura final, reduz a massa adiposa, aumenta a massa muscular e melhora significativamente o desenvolvimento motor e o gasto calórico basal. (Nota: deve-se sempre realizar polissonografia antes do início para descartar apneia obstrutiva do sono grave).",
    "comentariosAlternativas": {
      "A": "Correta. O rhGH melhora a composição corporal (aumenta massa magra, diminui gordura) e a estatura na síndrome de Prader-Willi.",
      "B": "Incorreta. O rhGH é uma das terapias mais benéficas e consagradas na síndrome de Prader-Willi.",
      "C": "Incorreta. O rhGH não cura a hiperfagia hipotalâmica compulsiva.",
      "D": "Incorreta. A indicação independe de hipoglicemia."
    }
  },
  {
    "id": "ped-cresc-058",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Cromossômicas e Sindrômicas",
    "enunciado": "Criança de 4 anos é avaliada por baixa estatura severa (Escore-Z de -3,8 DP). Nasceu a termo pesando 1.800 g e medindo 42 cm (PIG grave com restrição de crescimento intrauterino). Não apresentou catch-up growth. Ao exame físico: fácies triangular com queixo afilado e fronte ampla, cantos da boca voltados para baixo (\"boca de carpa\"), assimetria corporal evidente (membro inferior e hemitórax direitos menores que os esquerdos) e clinodactilia do 5º quirodáctilo. Qual é o diagnóstico mais provável?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Acondroplasia."
      },
      {
        "id": "B",
        "texto": "Síndrome de Silver-Russell."
      },
      {
        "id": "C",
        "texto": "Síndrome de Klinefelter."
      },
      {
        "id": "D",
        "texto": "Síndrome de Marfan."
      }
    ],
    "correta": "B",
    "comentarioGeral": "A síndrome de Silver-Russell é caracterizada por: 1) RCIU grave com nascimento PIG acentuado e falha completa de crescimento compensatório (sem catch-up); 2) Baixa estatura grave pós-natal proporcional; 3) Assimetria corporal (hemi-hipotrofia ou hemi-hipertrofia de membros ou tronco); 4) Fácies triangular com fronte ampla e queixo pontiagudo; 5) Clinodactilia do 5º dedo. A base molecular mais frequente envolve a hipometilação do centro de imprinting 1 em 11p15 (em cerca de 50%) ou dissomia uniparental materna do cromossomo 7 (mUPD7 em cerca de 10%). Tem indicação formal de rhGH.",
    "comentariosAlternativas": {
      "A": "Incorreta. Acondroplasia tem membros curtos rizomélicos, sem assimetria corporal ou fácies triangular.",
      "B": "Correta. Síndrome de Silver-Russell: PIG grave sem catch-up + fácies triangular + assimetria corporal.",
      "C": "Incorreta. Klinefelter causa alta estatura na puberdade com ginecomastia.",
      "D": "Incorreta. Marfan cursa com alta estatura e membros muito longos."
    }
  },
  {
    "id": "ped-cresc-059",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Cromossômicas e Sindrômicas",
    "enunciado": "Menina de 12 anos com diagnóstico de Síndrome de Turner realiza ecocardiograma de rotina e ressonância magnética cardíaca. Os exames mostram aorta bivalvular com dilatação da raiz aórtica. Qual é a principal complicação cardiovascular potencialmente letal que deve ser prevenida com rigoroso controle da pressão arterial nessa paciente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Estenose mitral congênita em paraquedas."
      },
      {
        "id": "B",
        "texto": "Mixoma de átrio esquerdo."
      },
      {
        "id": "C",
        "texto": "Dissecção e rotura da aorta torácica."
      },
      {
        "id": "D",
        "texto": "Tromboembolismo pulmonar maciço de repetição."
      }
    ],
    "correta": "C",
    "comentarioGeral": "A dissecção e rotura aórtica é uma das principais causas de mortalidade prematura em pacientes com síndrome de Turner. A fragilidade intrínseca da parede vascular (necrose cística da camada média), somada à alta prevalência de valva aórtica bicúspide, coarctação de aorta e hipertensão arterial sistêmica, eleva exponencialmente o estresse de cisalhamento sobre a aorta ascendente. O monitoramento do diâmetro da raiz aórtica indexado à superfície corporal (ASI - Aortic Size Index) e o controle rigoroso da pressão arterial com betabloqueadores/IECA são cruciais.",
    "comentariosAlternativas": {
      "A": "Incorreta. A lesão mais comum é valva aórtica bicúspide, e não mitral em paraquedas.",
      "B": "Incorreta. Mixomas são tumores benignos sem associação com Turner (associados ao complexo de Carney).",
      "C": "Correta. A dilatação e dissecção aguda de aorta representam a complicação mais letal na história natural de Turner.",
      "D": "Incorreta. O risco primordial é a dissecção aórtica."
    }
  },
  {
    "id": "ped-cresc-060",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Recém-Nascido PIG e Catch-up Growth",
    "enunciado": "Qual é o critério antropométrico padronizado internacionalmente e adotado pela SBP para definir um recém-nascido como Pequeno para a Idade Gestacional (PIG)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Apgar de 1º minuto menor que 5."
      },
      {
        "id": "B",
        "texto": "Peso ao nascer fixo < 2.500 g independentemente de ter nascido com 28 ou 41 semanas de gestação."
      },
      {
        "id": "C",
        "texto": "Comprimento ao nascer estritamente entre os percentis 25 e 75."
      },
      {
        "id": "D",
        "texto": "Peso e/ou comprimento ao nascer inferior ao percentil 10 (ou Escore-Z < -2 DP) para a idade gestacional e sexo nas curvas de crescimento intrauterino adequadas (como Fenton ou Intergrowth-21st)."
      }
    ],
    "correta": "D",
    "comentarioGeral": "Pela definição consensual da Sociedade Brasileira de Pediatria, da OMS e das sociedades de endocrinologia pediátrica, o recém-nascido é considerado Pequeno para a Idade Gestacional (PIG ou SGA - Small for Gestational Age) quando seu peso e/ou comprimento de nascimento encontram-se abaixo do percentil 10 (critério epidemiológico) ou abaixo do Escore-Z de -2 DP (critério estatístico rigoroso) para a respectiva idade gestacional e sexo nas curvas de referência fetal/neonatal.",
    "comentariosAlternativas": {
      "A": "Incorreta. O Apgar avalia vitalidade e asfixia neonatal imediata, não adequação antropométrica fetal.",
      "B": "Incorreta. Peso < 2.500 g define \"Baixo Peso ao Nascer\" (conceito estático que inclui prematuros com peso adequado para a idade gestacional).",
      "C": "Incorreta. Percentil 25 a 75 define Adequado para a Idade Gestacional (AIG).",
      "D": "Correta. Peso e/ou comprimento < p10 ou < -2 DP para a idade gestacional define o concepto PIG."
    }
  },
  {
    "id": "ped-cresc-061",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Recém-Nascido PIG e Catch-up Growth",
    "enunciado": "Em relação à história natural do crescimento de crianças nascidas Pequenas para a Idade Gestacional (PIG), qual proporção delas realiza o crescimento de recuperação compensatório espontâneo (catch-up growth) até os 2 anos de vida?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aproximadamente 85% a 90%."
      },
      {
        "id": "B",
        "texto": "Apenas 5% a 10%."
      },
      {
        "id": "C",
        "texto": "100% de todas as crianças, sem exceções."
      },
      {
        "id": "D",
        "texto": "Nenhuma criança PIG é capaz de recuperar o crescimento sem reposição hormonal obrigatória imediata no berçário."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Cerca de 85% a 90% dos recém-nascidos PIG apresentam crescimento de recuperação acelerado espontâneo (catch-up growth), que ocorre predominantemente nos primeiros 6 a 12 meses de vida e se consolida até os 2 anos de idade (em prematuros muito extremos esse prazo pode se estender até os 4 anos). No entanto, cerca de 10% a 15% das crianças nascidas PIG não realizam o catch-up espontâneo e permanecem com baixa estatura (Escore-Z < -2 DP).",
    "comentariosAlternativas": {
      "A": "Correta. 85% a 90% dos nascidos PIG recuperam o crescimento espontaneamente até os 2 anos de vida.",
      "B": "Incorreta. A esmagadora maioria realiza catch-up espontâneo (cerca de 85% a 90%).",
      "C": "Incorreta. Cerca de 10% a 15% não fazem catch-up e persistem com baixa estatura crônica.",
      "D": "Incorreta. O catch-up é fisiológico e não se usa hormônio no berçário."
    }
  },
  {
    "id": "ped-cresc-062",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Recém-Nascido PIG e Catch-up Growth",
    "enunciado": "Menino de 3 anos e 6 meses foi nascido a termo, com peso de 2.100 g e comprimento de 43 cm (PIG grave simétrico por insuficiência placentária crônica materna). Desde então, vem sendo acompanhado regularmente. Sua curva de crescimento mostra estatura atual no Escore-Z de -2,8 DP, com velocidade de crescimento normal para a idade, porém sem apresentar crescimento compensatório (falha de catch-up growth aos 3 anos e meio). Exames gerais (hemograma, TSH, T4 livre, eletrólitos, função renal e anticorpos celíacos) são normais. Qual é a conduta médica indicada e respaldada pelos consensos internacionais?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aguardar passivamente até os 18 anos sem qualquer intervenção."
      },
      {
        "id": "B",
        "texto": "Indicar tratamento com hormônio do crescimento recombinante (rhGH), pois a criança nascida PIG que não recuperou o crescimento até os 2 a 4 anos preenche critério formal aprovado de terapia com rhGH."
      },
      {
        "id": "C",
        "texto": "Iniciar dieta hipercalórica com 200% das necessidades energéticas para forçar o ganho rápido de peso."
      },
      {
        "id": "D",
        "texto": "Prescrever hormônio tireoidiano em dose triplicada."
      }
    ],
    "correta": "B",
    "comentarioGeral": "A falha de crescimento de recuperação (catch-up growth) em crianças nascidas PIG é uma indicação formal e consolidada de tratamento com rhGH, aprovada pela FDA (2001), EMA (2003) e ANVISA. Os critérios de indicação são: 1) História neonatal de PIG comprovada; 2) Idade ≥ 2 anos (nos EUA) ou ≥ 4 anos (na Europa); 3) Estatura atual persistente no Escore-Z < -2,5 ou -2,0 DP; 4) Exclusão de outras causas orgânicas. O tratamento com rhGH promove ganho estatural substancial, permitindo que a maioria atinja a estatura dentro do canal genético parental.",
    "comentariosAlternativas": {
      "A": "Incorreta. Deixar sem tratamento condena a criança a uma baixa estatura adulta definitiva desnecessária.",
      "B": "Correta. Criança nascida PIG sem catch-up aos 2-4 anos tem indicação formal e aprovada de tratamento com rhGH.",
      "C": "Incorreta. Sobrecarregar a dieta de um PIG sem catch-up causa ganho excessivo de massa gorda, acentuando o risco precoce de síndrome metabólica.",
      "D": "Incorreta. Se o perfil tireoidiano é normal, levotiroxina causa tireotoxicose iatrogênica."
    }
  },
  {
    "id": "ped-cresc-063",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Recém-Nascido PIG e Catch-up Growth",
    "enunciado": "A teoria da \"Programação Fetal\" (Hipótese de Barker) correlaciona o nascimento de crianças Pequenas para a Idade Gestacional (PIG) com alterações fisiopatológicas a longo prazo. Qual é o principal risco metabólico associado ao indivíduo nascido PIG na vida adulta, especialmente se submetido a ganho ponderal rápido e precoce na infância?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Desenvolvimento exclusivo de raquitismo hipofosfatêmico."
      },
      {
        "id": "B",
        "texto": "Hipotensão arterial crônica e magreza constitucional incurável."
      },
      {
        "id": "C",
        "texto": "Risco aumentado de obesidade central, resistência à insulina, diabetes mellitus tipo 2, dislipidemia mista e doença cardiovascular isquêmica prematura (Síndrome Metabólica)."
      },
      {
        "id": "D",
        "texto": "Proteção absoluta contra qualquer evento aterosclerótico coronariano."
      }
    ],
    "correta": "C",
    "comentarioGeral": "A hipótese de Barker postula que, diante de um ambiente intrauterino adverso com desnutrição fetal, o feto desenvolve o \"fenótipo poupador\" (thrifty phenotype), alterando permanentemente a expressão de genes metabólicos para maximizar o armazenamento de energia e resistir à fome. Quando essa criança nasce e é exposta a um ambiente pós-natal com abundância calórica, ocorre um ganho rápido de peso que sobrecarrega tecidos periféricos metabolicamente programados para a escassez, culminando em resistência insulínica severa, obesidade visceral, hipertensão, dislipidemia aterogênica e DM2 na vida adulta.",
    "comentariosAlternativas": {
      "A": "Incorreta. Raquitismo decorre de distúrbios da mineralização óssea (vitamina D/fósforo), sem relação com a hipótese de Barker.",
      "B": "Incorreta. O risco é de hipertensão e obesidade, e não hipotensão e magreza.",
      "C": "Correta. A hipótese de Barker estabelece a ligação entre nascimento PIG e predisposição a síndrome metabólica e DCV.",
      "D": "Incorreta. O risco aterosclerótico é significativamente elevado, não reduzido."
    }
  },
  {
    "id": "ped-cresc-064",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Recém-Nascido PIG e Catch-up Growth",
    "enunciado": "Qual é a diferença conceitual fundamental entre \"Recém-Nascido Pequeno para a Idade Gestacional (PIG)\" e \"Restrição de Crescimento Intrauterino (RCIU)\"?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Não há diferença, são termos estritamente sinônimos que expressam o mesmo conceito."
      },
      {
        "id": "B",
        "texto": "PIG refere-se exclusivamente a recém-nascidos pós-termo (> 42 semanas)."
      },
      {
        "id": "C",
        "texto": "PIG só acomete fetos do sexo feminino, enquanto RCIU acomete exclusivamente fetos masculinos."
      },
      {
        "id": "D",
        "texto": "PIG é um conceito antropométrico estático de nascimento (peso/comprimento < p10 ao nascer), ao passo que RCIU é um processo dinâmico patológico fetal intrauterino demonstrado por queda seriada de percentis fetais na ultrassonografia obstétrica."
      }
    ],
    "correta": "D",
    "comentarioGeral": "PIG é uma classificação estritamente antropométrica no momento do nascimento: a criança nasceu com peso e/ou comprimento abaixo do percentil 10 (ou < -2 DP) para a idade gestacional. Uma criança pode ser constitucionalmente pequena (pais geneticamente pequenos) e ser PIG sem ter tido qualquer doença na gestação. Por outro lado, RCIU (Restrição de Crescimento Intrauterino) é um diagnóstico fetal dinâmico e patológico: o feto tinha potencial genético para percentil 70 e, por insuficiência placentária, desceu para o percentil 20 (teve restrição de crescimento fetal, mas nasceu no percentil 20, ou seja, AIG e não PIG).",
    "comentariosAlternativas": {
      "A": "Incorreta. Os termos não são sinônimos.",
      "B": "Incorreta. PIG pode ocorrer em qualquer idade gestacional (pré-termo, termo ou pós-termo).",
      "C": "Incorreta. Ambos acometem qualquer sexo biológico.",
      "D": "Correta. PIG é classificação antropométrica estática ao nascer; RCIU é um processo dinâmico patológico fetal pré-natal."
    }
  },
  {
    "id": "ped-cresc-065",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Recém-Nascido PIG e Catch-up Growth",
    "enunciado": "Menina de 7 anos nascida PIG grave sem catch-up growth desenvolveu pubarca precoce aos 6 anos de idade, com odor axilar adulto e aceleração do ganho de peso. Os exames evidenciam elevação isolada de DHEA-S (sulfato de desidroepiandrosterona) com 17-OH-progesterona normal e idade óssea compatível com a cronológica. Qual é a associação clínica comum em meninas nascidas PIG?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Adrenarca precoce exagerada, que frequentemente se associa a risco posterior aumentado de Síndrome dos Ovários Policísticos (SOP) na adolescência."
      },
      {
        "id": "B",
        "texto": "Carcinoma de córtex adrenal metastático fulminante."
      },
      {
        "id": "C",
        "texto": "Deficiência congênita de 21-hidroxilase na forma perdedora de sal."
      },
      {
        "id": "D",
        "texto": "Craniofaringioma calcificado intraselar."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Meninas nascidas PIG apresentam risco aumentado de apresentar adrenarca precoce exagerada (elevação prematura de andrógenos adrenais como DHEA-S sem ativação do eixo hipófise-ovariano). Essa condição é mediada por hiperinsulinemia compensatória secundária à resistência insulínica, que estimula as enzimas esteroidogênicas adrenais (citocromo P450c17). Na adolescência, essas meninas têm incidência significativamente maior de anovulação crônica, hiperandrogenismo e Síndrome dos Ovários Policísticos (SOP).",
    "comentariosAlternativas": {
      "A": "Correta. Adrenarca precoce e posterior SOP na adolescência são complicações metabólicas clássicas da programação fetal em meninas PIG.",
      "B": "Incorreta. A virilização seria rápida, com níveis monstruosos de DHEA-S e sinais de massa abdominal palpável.",
      "C": "Incorreta. A 17-OHP normal afasta a forma clássica de hiperplasia adrenal congênita.",
      "D": "Incorreta. Craniofaringioma não causa elevação de DHEA-S nem pubarca precoce isolada."
    }
  },
  {
    "id": "ped-cresc-066",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Recém-Nascido PIG e Catch-up Growth",
    "enunciado": "Em prematuros nascidos com idade gestacional < 32 semanas e classificados como PIG graves, até qual idade cronológica a literatura pediátrica e os consensos de crescimento recomendam aguardar a possibilidade de crescimento de recuperação espontâneo antes de firmar a falha definitiva de catch-up growth?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Até os 6 meses de vida."
      },
      {
        "id": "B",
        "texto": "Até os 4 anos de idade."
      },
      {
        "id": "C",
        "texto": "Até os 12 meses de vida."
      },
      {
        "id": "D",
        "texto": "Até os 18 anos de idade."
      }
    ],
    "correta": "B",
    "comentarioGeral": "Embora na maioria dos nascidos a termo o catch-up growth esteja praticamente concluído aos 2 anos de vida, em recém-nascidos muito prematuros (< 32 semanas) ou prematuros extremos (< 28 semanas) com morbidades neonatais complexas (displasia broncopulmonar, enterocolite necrosante, sepse neonatal tardia), a recuperação pode ser mais lenta e arrastada, podendo ocorrer até os 4 anos de idade. Por isso, a diretriz europeia (EMA) preconiza os 4 anos como idade de corte formal para indicação de rhGH.",
    "comentariosAlternativas": {
      "A": "Incorreta. 6 meses é tempo insuficiente para prematuros extremos.",
      "B": "Correta. Em prematuros extremos, aguarda-se até os 4 anos de idade para confirmação de falha de catch-up.",
      "C": "Incorreta. Muitos prematuros realizam catch-up substancial no segundo e terceiro anos.",
      "D": "Incorreta. Aos 18 anos as cartilagens já estão fechadas."
    }
  },
  {
    "id": "ped-cresc-067",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Recém-Nascido PIG e Catch-up Growth",
    "enunciado": "Qual é o impacto do tratamento com hormônio de crescimento recombinante (rhGH) sobre a sensibilidade à insulina e o perfil glicêmico em crianças nascidas PIG sem catch-up, e qual monitoramento laboratorial é mandatório durante a terapia?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O rhGH é um potente sensibilizador de insulina, causando hipoglicemias intratáveis e exigindo aporte contínuo de glicose."
      },
      {
        "id": "B",
        "texto": "O rhGH não tem qualquer ação metabólica sobre o metabolismo de carboidratos."
      },
      {
        "id": "C",
        "texto": "O rhGH tem efeito contrainsulínico fisiológico e pode acentuar a resistência à insulina prévia da criança PIG; é mandatório monitorar periodicamente glicemia de jejum, hemoglobina glicada e IGF-1 sérico."
      },
      {
        "id": "D",
        "texto": "O tratamento induz diabetes insipidus nefrogênico com poliúria grave."
      }
    ],
    "correta": "C",
    "comentarioGeral": "O GH é um hormônio contrainsulínico clássico: estimula a lipólise e inibe a captação periférica de glicose mediada por insulina no músculo esquelético e tecido adiposo. Como crianças nascidas PIG já possuem risco intrínseco de resistência insulínica basal (pela programação fetal de Barker), o uso de rhGH pode aumentar temporariamente os níveis de insulina e agravar a resistência insulínica. O rastreio periódico de glicemia de jejum, HbA1c e dosagem de IGF-1 (para evitar sobredose suprafisiológica com IGF-1 > +2 DP) é mandatório durante todo o acompanhamento.",
    "comentariosAlternativas": {
      "A": "Incorreta. O GH tem ação hiperglicemiante contrainsulínica, e não hipoglicemiante.",
      "B": "Incorreta. O GH tem profundo impacto metabólico lipolítico e glicídico.",
      "C": "Correta. O efeito contrainsulínico do rhGH exige monitoramento glicêmico e de IGF-1 durante a terapia em nascidos PIG.",
      "D": "Incorreta. O GH não interfere nos canais de aquaporina nem causa diabetes insipidus."
    }
  },
  {
    "id": "ped-cresc-068",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Endócrinas de Baixa Estatura",
    "enunciado": "Recém-nascido masculino a termo apresenta episódios repetidos de hipoglicemia grave sintomática com convulsões nas primeiras 48 horas de vida, além de icterícia colestática prolongada sem atresia de vias biliares. Ao exame físico detalhado, observa-se comprimento normal ao nascer, micropênis verdadeiro (comprimento peniano esticado de 1,5 cm) e testículos tópicos normais. Qual é a principal suspeita clínica e qual deficiência hormonal congênita explica conjuntamente o micropênis e as hipoglicemias graves?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Acondroplasia grave com compressão medular."
      },
      {
        "id": "B",
        "texto": "Hipotireoidismo primário por ectopia tireoidiana isolada."
      },
      {
        "id": "C",
        "texto": "Doença celíaca clássica congênita."
      },
      {
        "id": "D",
        "texto": "Deficiência congênita de hormônio do crescimento (DGH) e/ou Pan-hipopituitarismo congênito."
      }
    ],
    "correta": "D",
    "comentarioGeral": "No período neonatal, a deficiência congênita de GH isolada ou associada ao hipopituitarismo múltiplo (deficiência combinada de GH, ACTH e gonadotrofinas LH/FSH) não costuma alterar o comprimento ao nascer (o crescimento fetal independe de GH, sendo mediado por insulina e IGF-2). Contudo, manifesta-se classicamente pela tríade: 1) Hipoglicemias graves e refratárias de jejum (por ausência do efeito contrainsulínico do GH e do cortisol); 2) Micropênis no sexo masculino (< 2,5 cm no RN a termo, dependente da ação das gonadotrofinas e do GH no 2º e 3º trimestres fetais); 3) Icterícia colestática neonatal prolongada idiopática.",
    "comentariosAlternativas": {
      "A": "Incorreta. Acondroplasia cursa com membros curtos rizomélicos e não cursa com hipoglicemias nem micropênis.",
      "B": "Incorreta. Hipotireoidismo primário isolado não causa micropênis nem hipoglicemias refratárias com convulsões dessa gravidade.",
      "C": "Incorreta. Doença celíaca exige introdução de glúten na dieta, não se manifestando em recém-nascido.",
      "D": "Correta. Hipoglicemia neonatal grave associada a micropênis e colestase é a apresentação clássica do hipopituitarismo congênito / deficiência de GH."
    }
  },
  {
    "id": "ped-cresc-069",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Endócrinas de Baixa Estatura",
    "enunciado": "Por que a dosagem sérica basal isolada de Hormônio do Crescimento (GH) em jejum NÃO tem valor diagnóstico para confirmar ou afastar a deficiência de GH (DGH) em crianças com baixa estatura?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Porque a secreção fisiológica do GH pela hipófise anterior é estritamente pulsátil, com picos associados ao sono de ondas lentas, permanecendo com níveis basais muito baixos ou indetectáveis na maior parte do dia em crianças normais."
      },
      {
        "id": "B",
        "texto": "Porque o GH se liga irreversivelmente à albumina e não pode ser dosado no sangue periférico."
      },
      {
        "id": "C",
        "texto": "Porque o GH só é secretado após os 18 anos de vida."
      },
      {
        "id": "D",
        "texto": "Porque o GH é destruído pelo ácido clorídrico no estômago antes de atingir o sangue."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O GH é secretado pelos somatotrofos da adeno-hipófise em pulsos episódicos (cerca de 6 a 8 picos ao dia, principalmente durante o sono de ondas lentas / sono profundo NREM estágios 3 e 4). Nos intervalos entre os picos (na maior parte do dia e em jejum matinal), os níveis séricos basais de GH em crianças saudáveis são habitualmente muito baixos ou totalmente indetectáveis (< 0,05 a 0,1 ng/mL). Assim, um GH basal indetectável pode ocorrer em qualquer criança normal, sendo obrigatórios testes de estímulo farmacológico para avaliar a capacidade secretória hipofisária.",
    "comentariosAlternativas": {
      "A": "Correta. A secreção pulsátil e os níveis basais indetectáveis em crianças saudáveis inviabilizam o uso do GH basal isolado para diagnóstico.",
      "B": "Incorreta. O GH circula ligado à GHBP (Growth Hormone Binding Protein), não à albumina, e é perfeitamente mensurável por imunoensaios.",
      "C": "Incorreta. O GH é secretado e atua ativamente desde a infância precoce.",
      "D": "Incorreta. O GH é um hormônio hipofisário secretado diretamente na circulação sistêmica, sem passar pelo trato gastrointestinal."
    }
  },
  {
    "id": "ped-cresc-070",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Endócrinas de Baixa Estatura",
    "enunciado": "Menino de 7 anos apresenta baixa estatura grave (Escore-Z de -3,1 DP), velocidade de crescimento de 2,8 cm/ano, face de boneca (fronte olímpica, raiz nasal deprimida e bochechas proeminentes com adiposidade facial), voz aguda e micropênis. A idade óssea é de 4 anos. A dosagem de IGF-1 e IGFBP-3 encontra-se abaixo do percentil 3 (< -2 DP). Para o diagnóstico laboratorial definitivo de deficiência de GH (DGH), qual é o protocolo padrão preconizado pelos consensos da SBP e da Growth Hormone Research Society?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realização de ressonância magnética nuclear de crânio isolada, sem exames laboratoriais."
      },
      {
        "id": "B",
        "texto": "Realização de dois testes de estímulo farmacológico independentes de secreção de GH (com clonidina, glucagon, insulina ou L-dopa), confirmando-se a deficiência se o pico máximo de GH for inferior a 5 ou 7 ng/mL em ambos."
      },
      {
        "id": "C",
        "texto": "Dosagem de GH na urina de 24 horas por 7 dias seguidos."
      },
      {
        "id": "D",
        "texto": "Biópsia a céu aberto da glândula hipófise."
      }
    ],
    "correta": "B",
    "comentarioGeral": "O protocolo diagnóstico padrão-ouro para deficiência de GH (DGH) na infância exige: 1) Quadro clínico e auxológico compatível (baixa estatura com velocidade de crescimento subnormal); 2) IGF-1 e IGFBP-3 baixos (< -2 DP); 3) Realização de DOIS testes de estímulo farmacológico provocativos da secreção de GH (utilizando agentes como clonidina, glucagon, teste de tolerância à insulina/ITT ou L-dopa). O diagnóstico de DGH exige falha de pico secretório de GH (pico < 5 a 7-10 ng/mL, dependendo do imunoensaio e protocolo) em AMBOS os testes de estímulo, minimizando falsos-positivos.",
    "comentariosAlternativas": {
      "A": "Incorreta. A RM é exame de imagem complementar obrigatório após a confirmação laboratorial, mas não substitui os testes de estímulo.",
      "B": "Correta. A confirmação de DGH exige falha de resposta de pico em dois testes de estímulo farmacológico independentes.",
      "C": "Incorreta. O GH urinário não é validado clinicamente para diagnóstico de DGH.",
      "D": "Incorreta. Biópsia hipofisária é um procedimento de altíssimo risco e contraindicado para DGH."
    }
  },
  {
    "id": "ped-cresc-071",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Endócrinas de Baixa Estatura",
    "enunciado": "Uma vez confirmado o diagnóstico laboratorial de deficiência de hormônio do crescimento (DGH) em uma criança, qual exame de imagem é MANDATÓRIO para a investigação anatômica etiológica e exclusão de tumores da linha média?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Tomografia computadorizada simples de tórax."
      },
      {
        "id": "B",
        "texto": "Cintilografia de corpo inteiro com iodo-131."
      },
      {
        "id": "C",
        "texto": "Ressonância Magnética (RM) de encéfalo com foco em sela túrcica e hipotálamo, com cortes finos e contraste paramagnético."
      },
      {
        "id": "D",
        "texto": "Ultrassonografia de abdome total com doppler de artérias renais."
      }
    ],
    "correta": "C",
    "comentarioGeral": "A Ressonância Magnética (RM) de sela túrcica e hipotálamo com contraste é o exame anatômico indispensável e obrigatório em toda criança com confirmação laboratorial de deficiência de GH. Ela permite: 1) Diagnosticar causas congênitas estruturais da haste e glândula hipofisária (tríade da interrupção da haste hipofisária: ausência de haste, sela túrcica rasa/hipoplasia de adeno-hipófise e neuro-hipófise ectópica na eminência média); 2) Excluir formalmente neoplasias compressivas adquiridas da região selar e supraselar, principalmente o craniofaringioma e o germinoma.",
    "comentariosAlternativas": {
      "A": "Incorreta. TC de tórax avalia pulmões e mediastino, não a hipófise.",
      "B": "Incorreta. Cintilografia com I-131 é usada no câncer diferenciado de tireoide.",
      "C": "Correta. A RM de sela túrcica e hipotálamo com cortes finos é mandatória para identificar anomalias anatômicas congênitas ou neoplasias como o craniofaringioma.",
      "D": "Incorreta. USG de abdome não avalia o sistema nervoso central."
    }
  },
  {
    "id": "ped-cresc-072",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Endócrinas de Baixa Estatura",
    "enunciado": "Menino de 9 anos vinha crescendo normalmente até os 7 anos, quando sua velocidade de crescimento caiu drasticamente para 1,5 cm/ano. Nos últimos 6 meses, passou a apresentar cefaleia holocraniana matinal progressiva, vômitos em jato, poliúria intensa com polidipsia (ingesta de 5 litros de água/dia) e perda de campo visual periférico (hemianopsia bitemporal). A radiografia de crânio mostra calcificações na região supraselar. Qual é o diagnóstico mais provável?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Tireoidite de Hashimoto."
      },
      {
        "id": "B",
        "texto": "Doença de Addison primária."
      },
      {
        "id": "C",
        "texto": "Retardo Constitucional do Crescimento e da Puberdade."
      },
      {
        "id": "D",
        "texto": "Craniofaringioma."
      }
    ],
    "correta": "D",
    "comentarioGeral": "O craniofaringioma é o tumor benigno de origem embrionária (derivado de remanescentes da bolsa de Rathke) mais comum da região selar/supraselar na infância. Seu quadro clássico inclui: 1) Desaceleração grave ou parada do crescimento (por deficiência adquirida de GH/pan-hipopituitarismo); 2) Sinais de hipertensão intracraniana (cefaleia matinal e vômitos); 3) Diabetes insipidus central precoce (poliúria e polidipsia por compressão hipotalâmica); 4) Defeitos visuais por compressão do quiasma óptico (hemianopsia bitemporal); 5) Calcificações supraselares clássicas vistas na TC/RM.",
    "comentariosAlternativas": {
      "A": "Incorreta. Hashimoto não causa hemianopsia bitemporal nem diabetes insipidus com calcificações selares.",
      "B": "Incorreta. Addison cursa com hiperpigmentação e hipotensão, sem massa supraselar.",
      "C": "Incorreta. No RCCP a velocidade é normal e não há cefaleia ou distúrbios visuais.",
      "D": "Correta. A tríade de parada de crescimento + diabetes insipidus + hemianopsia bitemporal com calcificações selares é patognomônica de craniofaringioma."
    }
  },
  {
    "id": "ped-cresc-073",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Endócrinas de Baixa Estatura",
    "enunciado": "Menina de 8 anos apresenta parada do crescimento estatural nos últimos 2 anos (velocidade de 2,2 cm/ano) acompanhada de ganho progressivo de peso, constipação intestinal crônica, letargia, intolerância ao frio, pele seca e amarelada, mixedema palpebral e aumento indolor e difuso da tireoide (bócio). A idade óssea é de 4 anos e meio (gravemente atrasada). Os exames mostram TSH de 145 mUI/L, T4 livre de 0,2 ng/dL e anticorpo anti-TPO fortemente positivo. Qual é o diagnóstico e o efeito esperado do tratamento com levotiroxina sobre a velocidade de crescimento?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Tireoidite de Hashimoto (hipotireoidismo primário adquirido); a reposição com levotiroxina promoverá um vigoroso crescimento de recuperação (catch-up growth) acelerado, com normalização da velocidade de crescimento."
      },
      {
        "id": "B",
        "texto": "Hipertireoidismo primário por Doença de Graves; o tratamento com metimazol causará nanismo definitivo."
      },
      {
        "id": "C",
        "texto": "Doença celíaca clássica; o início da levotiroxina é contraindicado."
      },
      {
        "id": "D",
        "texto": "Deficiência isolada de GH; a levotiroxina não terá efeito algum."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A tireoidite de Hashimoto é a principal causa de hipotireoidismo adquirido na infância. O hormônio tireoidiano é indispensável para a proliferação condrocitária e ossificação epifisária; sua deficiência crônica leva à parada do crescimento linear associada a ganho de peso, atraso profundo da idade óssea e bócio. A introdução de reposição com levotiroxina sódica em dose adequada corrige o hipometabolismo e deflagra um espetacular \"catch-up growth\" (crescimento compensatório acelerado), recuperando o canal genético se a intervenção for precoce.",
    "comentariosAlternativas": {
      "A": "Correta. Hipotireoidismo primário por tireoidite de Hashimoto; o tratamento com levotiroxina desencadeia vigoroso catch-up growth.",
      "B": "Incorreta. O quadro é de hipotireoidismo (TSH muito elevado e T4L baixo), e não Graves.",
      "C": "Incorreta. O diagnóstico é de hipotireoidismo autoimune, exigindo reposição imediata de levotiroxina.",
      "D": "Incorreta. O hipotireoidismo primário tratado restabelece o crescimento sem necessidade de GH."
    }
  },
  {
    "id": "ped-cresc-074",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Endócrinas de Baixa Estatura",
    "enunciado": "Menina de 9 anos com hipotireoidismo primário grave e de longa data não tratado apresenta parada de crescimento estatural associada paradoxalmente a telarca e sangramento vaginal cíclico precoce, sem pubarca (ausência de pelos pubianos). A ressonância de crânio mostra aumento volumétrico homogêneo da hipófise simulando macroadenoma. Como se denomina essa condição e qual é o seu mecanismo fisiopatológico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Síndrome de Turner em mosaico com hiperplasia adrenal."
      },
      {
        "id": "B",
        "texto": "Síndrome de Van Wyk-Grumbach, decorrente de hiperestimulação do receptor de FSH nos ovários pelas concentrações extremamente elevadas de TSH sérico (homologia estrutural de subunidades) associada à hiperplasia reativa de tireotrofos por excesso de TRH."
      },
      {
        "id": "C",
        "texto": "Craniofaringioma com metástase ovariana."
      },
      {
        "id": "D",
        "texto": "Tumor secretor de LH de células da teca ovariana."
      }
    ],
    "correta": "B",
    "comentarioGeral": "A síndrome de Van Wyk-Grumbach é uma entidade clássica da endocrinologia pediátrica que ocorre em crianças com hipotireoidismo primário grave e crônico não tratado: 1) A falta crônica de T4/T3 eleva maciçamente o TRH hipotalâmico, o que induz hiperplasia difusa dos tireotrofos na hipófise anterior, mimetizando um adenoma hipofisário na RM; 2) O TSH extremamente elevado, pela homologia molecular de sua subunidade alfa com o FSH e pela reatividade cruzada nos receptores de FSH ovarianos, estimula o desenvolvimento folicular ovariano e produção de estrógenos, causando telarca, sangramento uterino disfuncional e cistos ovarianos, porém SEM pubarca (já que a adrenal não foi ativada); 3) Toda essa manifestação de puberdade precoce paradoxal com parada de crescimento regride completamente apenas com a reposição de levotiroxina.",
    "comentariosAlternativas": {
      "A": "Incorreta. Não é Turner nem hiperplasia adrenal.",
      "B": "Correta. Síndrome de Van Wyk-Grumbach: hipotireoidismo grave de longa data + puberdade precoce periférica paradoxal com sangramento vaginal + hiperplasia hipofisária reversível com levotiroxina.",
      "C": "Incorreta. Não se trata de neoplasia maligna metastática.",
      "D": "Incorreta. A patologia primária é a falência tireoidiana com TSH maciçamente elevado."
    }
  },
  {
    "id": "ped-cresc-075",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Endócrinas de Baixa Estatura",
    "enunciado": "Menino de 10 anos portador de asma grave vem utilizando prednisona oral contínua há 18 meses por prescrição inadvertida sem desmame. Ao exame físico: velocidade de crescimento de 1,2 cm/ano (estagnação estatural), ganho ponderal de 9 kg no período, fácies arredondada e pletórica (\"em lua cheia\"), gibosidade dorsal (\"giba de búfalo\"), obesidade centrípeta com membros finos, estrias violáceas largas (> 1 cm) em abdome e coxas e PA de 138x92 mmHg (> p99). Qual é o diagnóstico e o mecanismo da parada de crescimento?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Deficiência congênita de 21-hidroxilase."
      },
      {
        "id": "B",
        "texto": "Feocromocitoma bilateral; as catecolaminas fecham imediatamente as cartilagens epifisárias."
      },
      {
        "id": "C",
        "texto": "Síndrome de Cushing exógena; os glicocorticoides em excesso inibem a secreção hipofisária de GH, antagonizam a ação periférica do IGF-1 e exercem efeito antianabólico direto inibitório sobre a placa de crescimento epifisária."
      },
      {
        "id": "D",
        "texto": "Baixa estatura familiar associada a efeito rebote da asma."
      }
    ],
    "correta": "C",
    "comentarioGeral": "A síndrome de Cushing exógena (iatrogênica) é a causa mais comum de hipercortisolismo na infância, secundária ao uso crônico e indiscriminado de corticosteroides orais, tópicos de alta potência ou injetáveis. O excesso de glicocorticoides é um dos mais potentes inibidores biológicos do crescimento estatural humano: 1) Inibe a secreção pulsátil de GH na hipófise; 2) Bloqueia a transcrição e sinalização periférica de IGF-1 nos condrócitos; 3) Induz apoptose e inibe a proliferação condrocitária diretamente nas placas de crescimento epifisárias, além de causar catabolismo proteico com osteopenia, obesidade troncular e estrias violáceas largas.",
    "comentariosAlternativas": {
      "A": "Incorreta. A hiperplasia adrenal cursa com virilização precoce, perda de sal e avanço de idade óssea com estirão precoce inicial.",
      "B": "Incorreta. Feocromocitoma secreta catecolaminas causando sudorese, palpitações e perda de peso, e não obesidade com estrias violáceas.",
      "C": "Correta. Síndrome de Cushing exógena por uso prolongado de corticoide com ação inibitória direta sobre as placas de crescimento e o eixo GH/IGF-1.",
      "D": "Incorreta. A criança desenvolveu síndrome de Cushing iatrogênica clássica."
    }
  },
  {
    "id": "ped-cresc-076",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Causas Endócrinas de Baixa Estatura",
    "enunciado": "Quais são os exames laboratoriais de triagem inicial recomendados para confirmar o hipercortisolismo endógeno em uma criança com baixa estatura associada a ganho de peso e estrias violáceas suspeita de Síndrome de Cushing?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Cortisol sérico matinal basal isolado em jejum."
      },
      {
        "id": "B",
        "texto": "Biópsia renal percutânea ecoguiada."
      },
      {
        "id": "C",
        "texto": "Dosagem de renina plasmática e aldosterona em repouso."
      },
      {
        "id": "D",
        "texto": "Cortisol livre urinário de 24 horas (duas coletas), dosagem de cortisol salivar noturno (às 23h) e/ou teste de supressão noturna com dose baixa de dexametasona (1 mg overnight ou teste clássico de Liddle 1)."
      }
    ],
    "correta": "D",
    "comentarioGeral": "O cortisol sérico matinal isolado NÃO serve para triagem de Cushing, pois tanto indivíduos normais quanto pacientes com Cushing têm cortisol elevado às 8h da manhã. O diagnóstico exige demonstrar a PERDA DO RITMO CIRCADIANO ou hipersecreção persistente através de testes consagrados: 1) Cortisol salivar noturno (coletado às 23h-24h, que em normais é indetectável, mas no Cushing permanece elevado); 2) Cortisol livre urinário de 24 horas (CLU); 3) Teste de supressão com dose baixa de dexametasona (overnight 1 mg ou com dose ajustada por peso em crianças: falha de supressão para < 1,8 mcg/dL confirma hipercortisolismo).",
    "comentariosAlternativas": {
      "A": "Incorreta. O cortisol matinal é alto fisiologicamente pelo pico circadiano matinal normal.",
      "B": "Incorreta. Procedimento invasivo sem qualquer papel no diagnóstico de hipercortisolismo.",
      "C": "Incorreta. Avalia hiperaldosteronismo primário, não Cushing.",
      "D": "Correta. A tríade de triagem para Cushing inclui CLU de 24h, cortisol salivar noturno às 23h e teste de supressão com dexametasona."
    }
  },
  {
    "id": "ped-cresc-077",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Doenças Sistêmicas e Crônicas",
    "enunciado": "Lactente de 16 meses é levado ao pediatra com perda ponderal progressiva e estagnação do crescimento nos últimos 6 meses. A mãe relata que a criança mamou no peito exclusivo até os 6 meses, momento em que foram introduzidas papas e biscoitos de trigo. Desde os 10 meses, passou a apresentar fezes pastosas, volumosas, brilhantes e fétidas, distensão abdominal progressiva, emagrecimento com perda da musculatura glútea (\"nádegas caídas em saco vazio\") e irritabilidade. O peso caiu do percentil 50 para < p3 e o comprimento agora está no percentil 3. Qual é a principal hipótese diagnóstica e a conduta inicial?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Doença celíaca clássica; solicitar anticorpo antitransglutaminase tecidual IgA (anti-tTG IgA) e dosagem de IgA total sérica."
      },
      {
        "id": "B",
        "texto": "Deficiência primária de GH; iniciar GH recombinante de urgência."
      },
      {
        "id": "C",
        "texto": "Acondroplasia tardia; solicitar radiografia de bacia."
      },
      {
        "id": "D",
        "texto": "Tolerância normal ao desmame; orientar aumento da ingesta de pão e massas."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O quadro clínico é o protótipo da forma clássica da Doença Celíaca na primeira infância: surge habitualmente meses após a introdução de alimentos contendo glúten (trigo, centeio, cevada), manifestando-se por diarreia crônica malabsortiva (fezes esteatorreicas volumosas), distensão abdominal, atrofia marcante da musculatura glútea e dos membros, anorexia, irritabilidade e a clássica sequência de desnutrição crônica: o PESO despenca primeiro e, subsequentemente, o COMPRIMENTO/ESTATURA desacelera e estagna. O rastreio inicial padrão-ouro é o anticorpo anti-transglutaminase tecidual recombinante da classe IgA (anti-tTG IgA) acompanhado da dosagem de IgA total sérica.",
    "comentariosAlternativas": {
      "A": "Correta. Doença celíaca clássica pós-introdução de glúten com atrofia glútea e má absorção; triagem com anti-tTG IgA e IgA total.",
      "B": "Incorreta. Na deficiência de GH o peso é preservado e não há diarreia crônica ou desnutrição grave.",
      "C": "Incorreta. Acondroplasia é displasia óssea congênita sem relação com diarreia ou glúten.",
      "D": "Incorreta. Continuar aumentando o glúten agravaria a síndrome de má absorção grave e o risco de crise celíaca."
    }
  },
  {
    "id": "ped-cresc-078",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Doenças Sistêmicas e Crônicas",
    "enunciado": "Menino de 9 anos é encaminhado para investigação de baixa estatura (Escore-Z de -2,4 DP) com desaceleração da velocidade de crescimento (3,5 cm/ano). Ele NÃO apresenta diarreia, dor abdominal, vômitos ou qualquer queixa gastrointestinal. O exame físico é inocente, exceto pela palidez cutânea moderada. O hemograma revela anemia ferropriva refratária a sulfato ferroso oral. Por que o rastreio sorológico para Doença Celíaca é MANDATÓRIO na propedêutica de baixa estatura mesmo sem sintomas digestivos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Porque a doença celíaca é causada por um tumor hipofisário que destrói os somatotrofos."
      },
      {
        "id": "B",
        "texto": "Porque a forma atípica/monossintomática da doença celíaca pode ter como ÚNICA manifestação clínica na infância e adolescência a baixa estatura isolada e/ou anemia ferropriva refratária."
      },
      {
        "id": "C",
        "texto": "Porque o glúten age como agonista direto da somatostatina no fêmur."
      },
      {
        "id": "D",
        "texto": "O rastreio para celíaca é contraindicado se não houver diarreia crônica associada."
      }
    ],
    "correta": "B",
    "comentarioGeral": "Nas crianças maiores e adolescentes, a Doença Celíaca frequentemente se manifesta sob a forma ATÍPICA (ou não clássica/monossintomática), em que os sintomas digestivos floridos estão completamente ausentes. Nesses pacientes, a BAIXA ESTATURA ISOLADA e/ou a ANEMIA FERROPRIVA refratária ao tratamento oral podem ser a única manifestação da enteropatia autoimune mediada pelo glúten. Por essa razão, todas as diretrizes internacionais (ESPGHAN, SBP) preconizam a triagem sorológica com anti-tTG IgA como obrigatória no algoritmo de investigação da baixa estatura.",
    "comentariosAlternativas": {
      "A": "Incorreta. Doença celíaca é uma enteropatia autoimune intestinal, sem relação com tumor hipofisário.",
      "B": "Correta. A baixa estatura isolada ou anemia refratária pode ser a única manifestação da doença celíaca na infância.",
      "C": "Incorreta. Fisiopatologia inventada sem embasamento.",
      "D": "Incorreta. A ausência de diarreia não exclui a doença celíaca (forma atípica silenciosa)."
    }
  },
  {
    "id": "ped-cresc-079",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Doenças Sistêmicas e Crônicas",
    "enunciado": "Ao solicitar a triagem sorológica para doença celíaca em uma criança com baixa estatura, o pediatra solicita anti-tTG IgA e dosagem sérica de IgA total. A dosagem de IgA total resulta indetectável (< 5 mg/dL). Por que a dosagem de IgA total é indispensável nessa avaliação e qual é a conduta diagnóstica subsequente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A dosagem de IgA é irrelevante; o resultado indetectável confirma que a criança não tem doença celíaca."
      },
      {
        "id": "B",
        "texto": "A deficiência de IgA exige transplante de medula óssea imediato."
      },
      {
        "id": "C",
        "texto": "A deficiência seletiva de IgA é 10 a 15 vezes mais prevalente em portadores de doença celíaca do que na população geral e causa falsos-negativos nos testes baseados em IgA; a conduta é solicitar testes baseados em anticorpos da classe IgG (como anti-tTG IgG ou anticorpo contra peptídeo de gliadina desamidada - anti-DGP IgG)."
      },
      {
        "id": "D",
        "texto": "Deve-se iniciar imunoglobulina intravenosa em altas doses antes de repetir o teste."
      }
    ],
    "correta": "C",
    "comentarioGeral": "A deficiência seletiva de IgA é a imunodeficiência primária mais comum (1 em 600 na população geral), mas em celíacos sua prevalência sobe para 1 em cada 40 indivíduos. Se uma criança tiver deficiência de IgA, ela não consegue produzir anticorpos da classe IgA em quantidade detectável; logo, o anti-tTG IgA será FALSO-NEGATIVO. Por isso, a diretriz internacional determina que toda triagem sorológica de celíaca DEVE dosar a IgA total sérica concomitante. Se houver deficiência de IgA, deve-se obrigatoriamente utilizar anticorpos baseados na classe IgG (anti-DGP IgG ou anti-tTG IgG).",
    "comentariosAlternativas": {
      "A": "Incorreta. Se a IgA total é indetectável, o teste de anti-tTG IgA será falsamente negativo.",
      "B": "Incorreta. Deficiência seletiva de IgA não exige transplante de medula.",
      "C": "Correta. A deficiência de IgA causa falso-negativo no anti-tTG IgA, impondo o uso de sorologia da classe IgG (anti-DGP IgG ou anti-tTG IgG).",
      "D": "Incorreta. Imunoglobulina IV introduz anticorpos exógenos de doadores e confunde a sorologia diagnóstica."
    }
  },
  {
    "id": "ped-cresc-080",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Doenças Sistêmicas e Crônicas",
    "enunciado": "Menino de 11 anos apresenta atraso puberal (G1P1) e desaceleração do crescimento estatural há 2 anos, tendo caído do percentil 50 para o percentil 10. Apresenta episódios ocasionais de febre baixa vespertina, dor abdominal periumbilical vaga após as refeições e artrite em tornozelo direito. A velocidade de crescimento é de 2,5 cm/ano. O exame perianal minucioso revela a presença de uma fissura anal profunda indolor e um plicoma cutâneo sentinela exuberante. Qual é o diagnóstico provável e qual exame de triagem não invasivo nas fezes corrobora essa hipótese?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Febre reumática pura; cultura de orofaringe."
      },
      {
        "id": "B",
        "texto": "Apendicite aguda flegmonosa; enema opaco de urgência."
      },
      {
        "id": "C",
        "texto": "Retardo constitucional simples; dosagem de prolactina."
      },
      {
        "id": "D",
        "texto": "Doença de Crohn pediátrica; dosagem de Calprotectina fecal."
      }
    ],
    "correta": "D",
    "comentarioGeral": "A Doença de Crohn pediátrica é uma causa clássica e traiçoeira de falha de crescimento e atraso puberal na infância e adolescência: em até 10% a 20% das crianças, a baixa estatura e o atraso puberal PRECEDEM o surgimento de diarreia evidente ou dores abdominais graves por meses ou anos. A presença de manifestações perianais (plicomas exuberantes, fissuras indolores ou fístulas), artrite periférica e inflamação sistêmica crônica reforçam a suspeita. As citocinas inflamatórias (IL-6 e TNF-alfa) causam resistência hepática direta ao GH, bloqueando a síntese de IGF-1. A Calprotectina fecal é o biomarcador não invasivo de escolha para demonstrar inflamação transmural da mucosa intestinal.",
    "comentariosAlternativas": {
      "A": "Incorreta. Febre reumática aguda não causa fissuras perianais nem parada de crescimento crônica.",
      "B": "Incorreta. Apendicite aguda é quadro cirúrgico agudo de horas/dias, não causa desaceleração de 2 anos.",
      "C": "Incorreta. No RCCP a velocidade é normal e não há fissura perianal, artrite ou febre.",
      "D": "Correta. Doença de Crohn pediátrica apresentando-se com desaceleração estatural, lesão perianal e artrite; calprotectina fecal é o marcador de triagem."
    }
  },
  {
    "id": "ped-cresc-081",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Doenças Sistêmicas e Crônicas",
    "enunciado": "Qual é a regra fisiopatológica fundamental que diferencia o padrão antropométrico das doenças sistêmicas/desnutritivas (como doença celíaca, cardiopatia congênita, DII e DRC) em relação às endocrinopatias primárias (como deficiência de GH, hipotireoidismo e Cushing)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Nas doenças sistêmicas e desnutritivas, o PESO cai antes e de forma mais acentuada do que a ESTATURA; nas endocrinopatias, a ESTATURA para de crescer enquanto o PESO continua aumentando ou se mantém (baixa estatura com sobrepeso/obesidade)."
      },
      {
        "id": "B",
        "texto": "Nas doenças sistêmicas a estatura cai anos antes do peso; nas endocrinopatias o peso despenca primeiro."
      },
      {
        "id": "C",
        "texto": "Não existe qualquer diferença no comportamento do peso e da altura entre essas etiologias."
      },
      {
        "id": "D",
        "texto": "Tanto as doenças sistêmicas quanto as endocrinopatias cursam com emaciação terminal imediata."
      }
    ],
    "correta": "A",
    "comentarioGeral": "Esta é uma das regras mais cobradas e aplicadas na prática médica pediátrica: 1) Doenças sistêmicas, crônicas e desnutrição: há um déficit de energia e substratos plásticos e/ou aumento do gasto calórico catabólico. Como consequência, o PESO despenca primeiro (a criança emagrece); se a injúria for crônica e persistente, a criança passa a economizar energia e a ESTATURA desacelera secundariamente; 2) Doenças endócrinas primárias (DGH, hipotireoidismo, Cushing): não há carência de calorias, mas sim falta de sinalização anabólica esquelética; a ESTATURA para de crescer, mas as calorias continuam sendo estocadas como tecido adiposo, resultando em baixa estatura associada a ganho de peso (IMC elevado).",
    "comentariosAlternativas": {
      "A": "Correta. Doenças sistêmicas: o peso cai antes da estatura; Endocrinopatias: a estatura para enquanto o peso sobe ou se mantém.",
      "B": "Incorreta. A afirmação inverte completamente a dinâmica fisiopatológica.",
      "C": "Incorreta. A dissociação entre peso e estatura é a chave do raciocínio diagnóstico.",
      "D": "Incorreta. Endocrinopatias clássicas cursam com preservação ou aumento ponderal."
    }
  },
  {
    "id": "ped-cresc-082",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Doenças Sistêmicas e Crônicas",
    "enunciado": "Criança de 6 anos com Doença Renal Crônica (DRC) estágio 4 secundária a uropatia obstrutiva congênita apresenta baixa estatura grave (Escore-Z de -3,2 DP). Quais são os principais fatores fisiopatológicos que explicam a grave falha de crescimento na criança com DRC?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Excesso de vitamina D e hipercalcemia suprimindo a formação óssea."
      },
      {
        "id": "B",
        "texto": "Acidose metabólica crônica, osteodistrofia renal com hiperparatireoidismo secundário, desnutrição proteico-calórica e estado de resistência periférica ao hormônio do crescimento (GH) induzido pela uremia crônica."
      },
      {
        "id": "C",
        "texto": "Hipersecreção de testosterona pelos rins."
      },
      {
        "id": "D",
        "texto": "Mutação do gene FGFR3 induzida pela uremia."
      }
    ],
    "correta": "B",
    "comentarioGeral": "A falha de crescimento na DRC pediátrica é multifatorial e complexa: 1) A acidose metabólica crônica inibe a secreção de GH, induz degradação proteica muscular e desmineralização óssea; 2) A uremia crônica e as toxinas urêmicas provocam um estado de RESISTÊNCIA PERIFÉRICA ao GH e ao IGF-1 (downregulation dos receptores e acúmulo de IGFBPs inibitórias que não são depuradas pelo rim); 3) Distúrbio mineral e ósseo da DRC (DMO-DRC / osteodistrofia renal por retenção de fósforo, deficiência de 1,25-di-hidroxivitamina D e hiperparatireoidismo secundário); 4) Anemia crônica, hiporexia e desnutrição. O tratamento inclui correção da acidose com bicarbonato, quelantes de fósforo, calcitriol e rhGH.",
    "comentariosAlternativas": {
      "A": "Incorreta. Na DRC há deficiência de 1-alfa-hidroxilação renal (falta de calcitriol) e hipocalcemia/hiperfosfatemia.",
      "B": "Correta. Acidose, osteodistrofia, uremia com resistência ao GH e desnutrição explicam o déficit estatural na DRC.",
      "C": "Incorreta. O rim não secreta testosterona.",
      "D": "Incorreta. FGFR3 é uma mutação congênita da acondroplasia, não causada por uremia."
    }
  },
  {
    "id": "ped-cresc-083",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Doenças Sistêmicas e Crônicas",
    "enunciado": "Qual é o papel aprovado do hormônio do crescimento recombinante (rhGH) no manejo da baixa estatura de crianças portadoras de Doença Renal Crônica (DRC)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O rhGH é contraindicado formalmente na DRC pelo risco de nefrosclerose imediata."
      },
      {
        "id": "B",
        "texto": "O rhGH só pode ser administrado após o transplante renal bem-sucedido."
      },
      {
        "id": "C",
        "texto": "O rhGH tem indicação formal e aprovada para crianças com DRC com baixa estatura e velocidade diminuída após a correção dos distúrbios hidroeletrolíticos e nutricionais, mesmo na fase pré-dialítica, superando o estado de resistência urêmica ao GH."
      },
      {
        "id": "D",
        "texto": "O rhGH atua curando a insuficiência renal e normalizando a creatinina sérica."
      }
    ],
    "correta": "C",
    "comentarioGeral": "O tratamento com rhGH na DRC pediátrica é uma indicação consagrada e aprovada mundialmente. Como a uremia causa um estado de resistência periférica ao GH (os receptores estão dessensibilizados e as IGFBPs estão elevadas), o uso de doses farmacológicas suprafisiológicas de rhGH supera esse bloqueio urêmico, ativando as placas de crescimento e promovendo expressivo ganho estatural antes do transplante renal. A indicação exige que a acidose, o fósforo, o cálcio e o estado nutricional já tenham sido previamente otimizados.",
    "comentariosAlternativas": {
      "A": "Incorreta. O rhGH é amplamente indicado e seguro na DRC pediátrica.",
      "B": "Incorreta. O rhGH é utilizado exatamente antes do transplante para recuperar a estatura.",
      "C": "Correta. O rhGH supera a resistência urêmica e promove aceleração do crescimento em crianças com DRC com déficit estatural.",
      "D": "Incorreta. O rhGH estimula o crescimento esquelético, não regenera néfrons esclerosados."
    }
  },
  {
    "id": "ped-cresc-084",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Doenças Sistêmicas e Crônicas",
    "enunciado": "Menino de 5 anos com cardiopatia congênita acianogênica com hiperfluxo pulmonar (grande Comunicação Interventricular - CIV ampla não corrigida) apresenta Escore-Z de Estatura/Idade de -2,5 DP e Peso/Idade de -3,1 DP. Qual é o mecanismo primário do déficit pôndero-estatural nessa criança cardiopata?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Fechamento congênito prematuro de todas as epífises."
      },
      {
        "id": "B",
        "texto": "Ausência total de secreção de GH por necrose hipofisária isquêmica."
      },
      {
        "id": "C",
        "texto": "Intoxicação por cálcio iônico."
      },
      {
        "id": "D",
        "texto": "Hipermetabolismo acentuado por aumento do trabalho cardíaco e respiratório associado a baixa ingesta calórica por cansaço nas mamadas/refeições."
      }
    ],
    "correta": "D",
    "comentarioGeral": "Cardiopatias congênitas com hiperfluxo pulmonar e insuficiência cardíaca congestiva (como CIV ampla, PCA volumoso, defeitos do septo atrioventricular) são causas clássicas de desnutrição e baixa estatura na infância inicial: 1) Aumento drástico do gasto calórico diário (hipermetabolismo) pelo trabalho mecânico miocárdico e esforço respiratório crônico (taquipneia contínua); 2) Ingesta calórica insuficiente por fadiga rápida, sudorese e dispneia durante a alimentação; 3) Má absorção relativa por congestão venosa das alças intestinais. A correção cirúrgica da cardiopatia remove esse hipermetabolismo e promove catch-up ponderal e estatural.",
    "comentariosAlternativas": {
      "A": "Incorreta. As epífises permanecem abertas e recuperam o crescimento após a cirurgia cardíaca.",
      "B": "Incorreta. Não há necrose hipofisária (síndrome de Sheehan é obstétrica em adultas).",
      "C": "Incorreta. Não há intoxicação por cálcio.",
      "D": "Correta. Hipermetabolismo pelo trabalho cardiorrespiratório somado à baixa ingesta por fadiga alimentar causa desnutrição e baixa estatura secundária."
    }
  },
  {
    "id": "ped-cresc-085",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Raquitismo Carencial e Hipofosfatêmico",
    "enunciado": "Lactente de 14 meses é levado à consulta por atraso na marcha e deformidade nas pernas. História: amamentação exclusiva ao seio materno até hoje, sem fórmulas infantis, sem uso de suplementos vitamínicos profiláticos e com restrição domiciliar estrita (sem banho de sol). Ao exame físico: fontanela anterior ampla e aberta (3x3 cm), proeminência nodular palpável nas junções costocondrais bilateralmente (\"rosário raquítico\"), alargamento evidente dos punhos e tornozelos e arqueamento pronunciado das pernas em varo (genu varo). Qual é o diagnóstico fisiopatológico e o exame radiológico inicial de escolha?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Raquitismo carencial por deficiência de vitamina D; radiografia de punhos e joelhos em AP."
      },
      {
        "id": "B",
        "texto": "Acondroplasia clássica; radiografia de crânio."
      },
      {
        "id": "C",
        "texto": "Escorbuto infantil por carência de vitamina C; tomografia de tórax."
      },
      {
        "id": "D",
        "texto": "Osteogênese imperfeita tipo II; ressonância magnética dos membros."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O quadro clínico reúne as manifestações patognomônicas do raquitismo carencial ativo da primeira infância: 1) Fatores de risco clássicos (aleitamento materno exclusivo sem suplementação diária de 400-600 UI de vitamina D e privação de radiação solar UV-B); 2) Sinais esqueléticos decorrentes de falha de mineralização da matriz osteoide na placa epifisária: alargamento metafisário de punhos e tornozelos, rosário raquítico (proeminência das junções costocondrais), fontanela anterior ampla com atraso de fechamento e deformidade em arqueamento dos membros inferiores com a sustentação de peso (genu varo). A radiografia de punho e joelho em AP é o exame de imagem inicial padrão para demonstrar o alargamento e desfiamento metafisário.",
    "comentariosAlternativas": {
      "A": "Correta. Raquitismo carencial por deficiência de vitamina D em lactente em aleitamento exclusivo sem suplementação; avaliação radiológica com punhos e joelhos.",
      "B": "Incorreta. Acondroplasia é congênita, cursa com membros curtos rizomélicos e não decorre de carência vitamínica.",
      "C": "Incorreta. Escorbuto (deficiência de vitamina C) cursa com manifestações hemorrágicas gengivais e dor óssea intensa por hematomas subperiósteos (pseudoparalisia de Parrot).",
      "D": "Incorreta. Osteogênese imperfeita tipo II é forma perinatal letal com múltiplas fraturas intraútero."
    }
  },
  {
    "id": "ped-cresc-086",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Raquitismo Carencial e Hipofosfatêmico",
    "enunciado": "Quais são as alterações radiológicas clássicas visualizadas nas metáfises dos ossos longos (como rádio e ulna distais no punho) na fase ativa do raquitismo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Esclerose cortical intensa e hiperdensidade homogênea de toda a diáfise."
      },
      {
        "id": "B",
        "texto": "Alargamento da placa de crescimento, perda da linha de mineralização provisória, concavidade em forma de \"taça\" (cupping) e aspecto desfiado ou espiculado em \"pincel\" (fraying) da borda metafisária."
      },
      {
        "id": "C",
        "texto": "Ausência total de cartilagem de crescimento com fechamento epifisário aos 12 meses."
      },
      {
        "id": "D",
        "texto": "Fraturas patológicas em galho verde exclusivas da diáfise média."
      }
    ],
    "correta": "B",
    "comentarioGeral": "No raquitismo ativo, os condrócitos hipertróficos continuam proliferando na fise, mas a matriz osteoide não consegue ser mineralizada com hidroxiapatita de cálcio e fósforo. Isso gera um acúmulo patológico de osteoide desorganizado e amolecido, que sob estresse mecânico se alarga lateralmente. Na radiografia, isso se traduz pela tétrade clássica: 1) Aumento da distância entre a epífise e a diáfise (alargamento radiológico da fise); 2) Perda da nitidez da linha de mineralização; 3) Escavação metafisária em \"taça\" (cupping); 4) Bordas metafisárias desfiadas e irregulares com aspecto em \"pincel\" (fraying).",
    "comentariosAlternativas": {
      "A": "Incorreta. O raquitismo cursa com osteopenia e desmineralização, e não esclerose densa (típica da osteopetrose).",
      "B": "Correta. A concavidade em taça (cupping) e as bordas desfiadas em pincel (fraying) com alargamento metafisário são os sinais radiológicos patognomônicos do raquitismo.",
      "C": "Incorreta. As cartilagens estão alargadas e abertas, nunca fechadas prematuramente.",
      "D": "Incorreta. Embora possam ocorrer pseudofraturas (zonas de Looser), as alterações metafisárias em taça e pincel são a marca do raquitismo."
    }
  },
  {
    "id": "ped-cresc-087",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Raquitismo Carencial e Hipofosfatêmico",
    "enunciado": "Qual é o perfil laboratorial sérico clássico encontrado em um lactente com Raquitismo Carencial por deficiência de vitamina D em fase de descompensação estabelecida?",
    "alternativas": [
      {
        "id": "A",
        "texto": "25(OH)Vitamina D elevada (> 100 ng/mL), com hipocalciúria grave."
      },
      {
        "id": "B",
        "texto": "25(OH)Vitamina D normal, Cálcio elevado, Fósforo elevado, Fosfatase Alcalina suprimida e PTH indetectável."
      },
      {
        "id": "C",
        "texto": "25(OH)Vitamina D muito baixa (< 12 a 20 ng/mL), Cálcio sérico normal ou baixo, Fósforo sérico baixo, Fosfatase Alcalina (FA) MUITO elevada e PTH (paratormônio) marcadamente elevado."
      },
      {
        "id": "D",
        "texto": "Elevação exclusiva de ácido úrico sem qualquer alteração mineral."
      }
    ],
    "correta": "C",
    "comentarioGeral": "A cascata laboratorial do raquitismo carencial tem lógica fisiopatológica perfeita: 1) A carência de vitamina D derruba os níveis de 25-hidroxivitamina D [25(OH)D < 20 ng/mL, frequentemente < 12 ng/mL]; 2) Sem calcitriol suficiente, a absorção intestinal de cálcio despenca, tendendo à hipocalcemia; 3) A hipocalcemia estimula imediatamente as paratireoides a secretarem maciçamente PTH (hiperparatireoidismo secundário); 4) O PTH elevado atua nos rins induzindo fosfatúria maciça (promovendo hipofosfatemia marcante) e retira cálcio do osso, normalizando ou mantendo o cálcio sérico no limite inferior; 5) A tentativa osteoblástica desesperada de mineralizar a matriz não calcificada eleva exponencialmente a Fosfatase Alcalina (FA), que é o melhor marcador sérico de atividade da doença.",
    "comentariosAlternativas": {
      "A": "Incorreta. Na deficiência carencial a 25(OH)D está severamente diminuída.",
      "B": "Incorreta. Esse perfil sugeriria intoxicação por vitamina D com hipercalcemia e supressão de PTH.",
      "C": "Correta. 25(OH)D baixa + hipofosfatemia + fosfatase alcalina muito elevada + PTH elevado (com cálcio normal/baixo) compõem o perfil típico do raquitismo carencial.",
      "D": "Incorreta. O raquitismo é um distúrbio do metabolismo de cálcio e fósforo, não de ácido úrico."
    }
  },
  {
    "id": "ped-cresc-088",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Raquitismo Carencial e Hipofosfatêmico",
    "enunciado": "Menino de 2 anos e meio apresenta arqueamento progressivo e severo das pernas em varo com rotação interna da tíbia, baixa estatura desproporcionada por encurtamento de membros inferiores e alargamento de punhos. O histórico alimentar é excelente, com ingesta adequada de laticínios e suplementação vitamínica regular. O perfil laboratorial revela: Cálcio sérico de 9,6 mg/dL (normal), Fósforo sérico de 1,8 mg/dL (MUITO BAIXO), Fosfatase Alcalina de 1.450 U/L (muito elevada), PTH normal e 25(OH)Vitamina D de 38 ng/mL (normal). O teste de urina revela perda renal isolada maciça de fosfato com baixa reabsorção tubular de fosfato (TRP < 85%). Qual é o diagnóstico e o defeito genético subjacente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Raquitismo carencial de vitamina D por erro alimentar."
      },
      {
        "id": "B",
        "texto": "Acondroplasia com mutação no FGFR3."
      },
      {
        "id": "C",
        "texto": "Hipotireoidismo primário por tireoidite autoimune."
      },
      {
        "id": "D",
        "texto": "Raquitismo Hipofosfatêmico Ligado ao X (XLH), decorrente de mutação no gene PHEX com hipersecreção do hormônio fosfatúrico FGF23."
      }
    ],
    "correta": "D",
    "comentarioGeral": "O Raquitismo Hipofosfatêmico Ligado ao X (XLH) é a forma hereditária mais frequente de raquitismo (herança dominante ligada ao X). É causado por mutações inativadoras no gene PHEX (no cromossomo X), o que resulta em perda da regulação e consequente hipersecreção crônica do hormônio FGF23 (Fator de Crescimento de Fibroblasto 23) pelos osteócitos. O excesso de FGF23 atua nos túbulos renais: 1) Inibe os cotransportadores de sódio-fósforo (NaPi-IIa e NaPi-IIc), causando perda maciça de fósforo na urina e hipofosfatemia severa intratável; 2) Inibe a enzima 1-alfa-hidroxilase renal, impedindo a conversão de 25(OH)D em calcitriol ativo. Como consequência, o cálcio é normal, a 25(OH)D é normal, mas o fósforo é extremamente baixo com FA muito alta.",
    "comentariosAlternativas": {
      "A": "Incorreta. A 25(OH)D é normal (38 ng/mL) e o paciente recebe suplementação adequada, afastando a causa carencial.",
      "B": "Incorreta. Acondroplasia não altera fósforo, cálcio ou fosfatase alcalina séricos.",
      "C": "Incorreta. Não cursa com hipofosfatemia isolada nem fosfatúria maciça.",
      "D": "Correta. Raquitismo Hipofosfatêmico Ligado ao X (mutação no gene PHEX com excesso de FGF23 promovendo fosfatúria renal com cálcio normal e fósforo muito baixo)."
    }
  },
  {
    "id": "ped-cresc-089",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Raquitismo Carencial e Hipofosfatêmico",
    "enunciado": "Qual é a terapia farmacológica moderna com anticorpo monoclonal humano aprovada para o tratamento específico do Raquitismo Hipofosfatêmico Ligado ao X (XLH), que neutraliza diretamente o FGF23 circulante?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Burosumabe (anticorpo monoclonal IgG1 humano anti-FGF23)."
      },
      {
        "id": "B",
        "texto": "Infliximabe (anti-TNF alfa)."
      },
      {
        "id": "C",
        "texto": "Rituximabe (anti-CD20)."
      },
      {
        "id": "D",
        "texto": "Trastuzumabe (anti-HER2)."
      }
    ],
    "correta": "A",
    "comentarioGeral": "O Burosumabe é um anticorpo monoclonal humano totalmente recombinante da classe IgG1 direcionado contra o FGF23 circulante. Ele se liga ao FGF23 e neutraliza sua atividade biológica, restaurando a reabsorção tubular renal de fosfato e a síntese renal de 1,25-di-hidroxivitamina D (calcitriol). Essa terapia modificadora da doença normaliza os níveis séricos de fósforo, melhora a mineralização da placa de crescimento, corrige deformidades ósseas e promove recuperação da velocidade de crescimento estatural em crianças com XLH.",
    "comentariosAlternativas": {
      "A": "Correta. Burosumabe é o anticorpo monoclonal específico anti-FGF23 aprovado para Raquitismo Hipofosfatêmico Ligado ao X.",
      "B": "Incorreta. Infliximabe trata doenças inflamatórias intestinais e artrite reumatoide.",
      "C": "Incorreta. Rituximabe depele linfócitos B em linfomas e doenças autoimunes.",
      "D": "Incorreta. Trastuzumabe trata câncer de mama HER2-positivo."
    }
  },
  {
    "id": "ped-cresc-090",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Raquitismo Carencial e Hipofosfatêmico",
    "enunciado": "Qual é a recomendação oficial da Sociedade Brasileira de Pediatria (SBP) e do Ministério da Saúde para a suplementação profilática universal de vitamina D em lactentes em aleitamento materno exclusivo a termo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Não é necessária qualquer suplementação se a mãe se alimentar bem."
      },
      {
        "id": "B",
        "texto": "Administrar 400 UI/dia de vitamina D por via oral a partir da primeira semana de vida até os 12 meses; e 600 UI/dia no segundo ano de vida (dos 12 aos 24 meses)."
      },
      {
        "id": "C",
        "texto": "Administrar uma megadose única de 600.000 UI intramuscular ao nascimento e nenhuma outra dose."
      },
      {
        "id": "D",
        "texto": "Administrar 10.000 UI/dia por via venosa contínua."
      }
    ],
    "correta": "B",
    "comentarioGeral": "Pelo consenso da Sociedade Brasileira de Pediatria (SBP, 2016/2021) e da Academia Americana de Pediatria (AAP), o leite materno humano, embora seja o alimento mais perfeito para a espécie humana, possui concentrações relativamente baixas de vitamina D (cerca de 20 a 60 UI/litro). Devido às restrições contemporâneas de exposição solar desprotegida pelo risco de neoplasias cutâneas futuras, recomenda-se a suplementação profilática universal: 400 UI/dia de vitamina D (colecalciferol) iniciando na primeira semana de vida até completar 12 meses; a partir dos 12 meses até os 24 meses de vida, a dose recomendada é de 600 UI/dia.",
    "comentariosAlternativas": {
      "A": "Incorreta. O leite humano não supre as necessidades de vitamina D sem exposição solar intensa, havendo alto risco de raquitismo sem suplementação.",
      "B": "Correta. 400 UI/dia no primeiro ano e 600 UI/dia no segundo ano de vida é a diretriz oficial da SBP.",
      "C": "Incorreta. Megadoses neonatais rotineiras aumentam o risco de hipercalcemia e nefrocalcinose.",
      "D": "Incorreta. Dose tóxica diária inaceitável."
    }
  },
  {
    "id": "ped-cresc-091",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Raquitismo Carencial e Hipofosfatêmico",
    "enunciado": "Como se denomina o amolecimento patológico dos ossos da calota craniana (parietais e occipital), que à palpação digital cede com facilidade e retorna elásticamente com sensação comparada à compressão de uma \"bola de pingue-pongue\", sinal precoce de raquitismo em lactentes jovens?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Plagiocefalia posicional."
      },
      {
        "id": "B",
        "texto": "Craniossinostose coronal."
      },
      {
        "id": "C",
        "texto": "Craniotabes raquítico."
      },
      {
        "id": "D",
        "texto": "Hiperostose cortical infantil."
      }
    ],
    "correta": "C",
    "comentarioGeral": "O Craniotabes é um dos sinais clínicos mais precoces de raquitismo ativo no lactente pequeno (geralmente nos primeiros meses de vida). Caracteriza-se pelo amolecimento das tábuas ósseas do crânio nas regiões parietal e occipital posterior (ao longo da sutura lambdoide). À palpação suave com as pontas dos dedos, o osso adelgaçado deprime-se sob a pressão digital e rebate elasticamente, produzindo uma sensação tátil idêntica à de pressionar uma bola de celuloide/pingue-pongue.",
    "comentariosAlternativas": {
      "A": "Incorreta. Plagiocefalia posicional é assimetria craniana por apoio postural vicioso sem amolecimento elástico.",
      "B": "Incorreta. Craniossinostose é fusão prematura das suturas com fechamento ósseo precoce rígido.",
      "C": "Correta. Craniotabes é o termo semiótico clássico para o amolecimento raquítico da calota craniana.",
      "D": "Incorreta. Hiperostose infantil (doença de Caffey) cursa com espessamento ósseo mandibular e diafisário doloroso."
    }
  },
  {
    "id": "ped-cresc-092",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Raquitismo Carencial e Hipofosfatêmico",
    "enunciado": "Qual é o tratamento inicial preconizado para um lactente de 15 meses diagnosticado com Raquitismo Carencial ativo grave por deficiência de vitamina D?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Cirurgia ortopédica de osteotomia corretiva imediata das duas tíbias."
      },
      {
        "id": "B",
        "texto": "Uso de bisfosfonatos intravenosos diários sem vitamina D."
      },
      {
        "id": "C",
        "texto": "Aporte exclusivo de vitamina C intravenosa e suspensão de laticínios."
      },
      {
        "id": "D",
        "texto": "Administração de Vitamina D (Colecalciferol) em dose de ataque (2.000 UI/dia por via oral por 8 a 12 semanas ou dose cumulativa equivalente), associada obrigatoriamente a aporte adequado de Cálcio elementar oral (cerca de 500 mg/dia) para prevenir a síndrome da \"fome óssea\" (hipocalcemia aguda pós-tratamento)."
      }
    ],
    "correta": "D",
    "comentarioGeral": "O tratamento do raquitismo carencial ativo visa restabelecer rapidamente os estoques corporais de colecalciferol: administra-se vitamina D3 (2.000 UI/dia por via oral durante cerca de 2 a 3 meses, ou doses escalonadas conformes peso/idade) até a normalização radiológica e da fosfatase alcalina, passando em seguida para a dose de manutenção (400 a 600 UI/dia). É MANDATÓRIO associar cálcio elementar oral (30 a 50 mg/kg/dia ou ~500 mg/dia), pois a rápida remineralização óssea (\"hungry bone syndrome\" / fome óssea) drena maciçamente o cálcio circulante para o esqueleto; sem aporte de cálcio, o paciente pode evoluir com hipocalcemia aguda grave, tetania e convulsões.",
    "comentariosAlternativas": {
      "A": "Incorreta. Deformidades raquíticas leves a moderadas remodelam espontaneamente após a mineralização; cirurgia é contraindicada na fase ativa.",
      "B": "Incorreta. Bisfosfonatos inibem a reabsorção óssea e não corrigem a mineralização epifisária.",
      "C": "Incorreta. Vitamina C não trata raquitismo de cálcio e vitamina D.",
      "D": "Correta. Colecalciferol terapêutico associado a cálcio elementar para prevenir hipocalcemia por fome óssea é o padrão de tratamento."
    }
  },
  {
    "id": "ped-cresc-093",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Alta Estatura e Síndromes de Hipercrescimento",
    "enunciado": "Adolescente de 15 anos é encaminhado ao ambulatório de cardiologia após avaliação de alta estatura. Ele mede 194 cm e sua envergadura braquial é de 208 cm (relação envergadura/estatura = 1,07). Apresenta dedos das mãos excessivamente longos e afilados (aracnodactilia), sinal do punho (Walker-Murdoch) e sinal do polegar (Steinberg) fortemente positivos, tórax com pectus excavatum acentuado e palato ogival. O oftalmologista relata subluxação súpera-temporal bilateral do cristalino (ectopia lentis). Qual é o diagnóstico e qual complicação cardiovascular ameaçadora da vida deve ser precocemente rastreada e prevenida nessa síndrome?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Síndrome de Marfan; dilatação progressiva da raiz da aorta com risco iminente de dissecção e rotura aórtica aguda."
      },
      {
        "id": "B",
        "texto": "Síndrome de Turner; coarctação da aorta."
      },
      {
        "id": "C",
        "texto": "Acondroplasia; estenose do forame magno."
      },
      {
        "id": "D",
        "texto": "Síndrome de Down; comunicação interventricular."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A síndrome de Marfan é uma desordem autossômica dominante do tecido conjuntivo causada por mutações no gene FBN1 (Fibrilina-1 no cromossomo 15q21.1), que codifica uma glicoproteína essencial das microfibrilas da matriz extracelular. A tríade clássica envolve: 1) Esqueleto: alta estatura com dolicostenomelia (envergadura/estatura > 1,05), aracnodactilia (sinais de Steinberg e Walker-Murdoch positivos), pectus excavatum/carinatum; 2) Olhos: subluxação do cristalino (ectopia lentis, tipicamente superior/temporal); 3) Sistema Cardiovascular (principal determinante da sobrevida): necrose cística da média aórtica com dilatação progressiva da raiz aórtica (aneurisma de seio de Valsalva), insuficiência aórtica e dissecção/rotura aórtica aguda.",
    "comentariosAlternativas": {
      "A": "Correta. Síndrome de Marfan (mutação no gene FBN1): aracnodactilia, envergadura > estatura, ectopia lentis e risco de dissecção/rotura de raiz aórtica.",
      "B": "Incorreta. Síndrome de Turner ocorre em meninas e cursa com baixa estatura (não alta estatura de 194 cm).",
      "C": "Incorreta. Acondroplasia cursa com baixa estatura extrema e membros curtos.",
      "D": "Incorreta. Down cursa com trissomia 21 e baixa estatura, sem ectopia lentis ou dolicostenomelia."
    }
  },
  {
    "id": "ped-cresc-094",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Alta Estatura e Síndromes de Hipercrescimento",
    "enunciado": "Qual é o fundamento genético e molecular da Síndrome de Marfan?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Mutação inativadora no gene FGFR3 no cromossomo 4."
      },
      {
        "id": "B",
        "texto": "Mutação com perda de função ou dominante negativa no gene FBN1 (Fibrilina-1), localizado no cromossomo 15q21.1, gerando enfraquecimento das microfibrilas elásticas e hiperativação da sinalização do TGF-beta tecidual."
      },
      {
        "id": "C",
        "texto": "Trissomia livre do cromossomo 18 (Síndrome de Edwards)."
      },
      {
        "id": "D",
        "texto": "Monossomia do cromossomo X (45,X)."
      }
    ],
    "correta": "B",
    "comentarioGeral": "A base molecular da síndrome de Marfan reside em mutações no gene FBN1 (15q21.1), que codifica a fibrilina-1. Além da desestruturação mecânica das microfibrilas elásticas da parede aórtica e ligamentos, a deficiência de fibrilina-1 impede o sequestro adequado do fator de crescimento transformador beta (TGF-beta) na matriz extracelular, causando hiperativação crônica e desregulada da cascata pró-inflamatória e proteolítica do TGF-beta. Isso explica a eficácia de bloqueadores dos receptores de angiotensina II (como a Losartana), que antagonizam a via do TGF-beta.",
    "comentariosAlternativas": {
      "A": "Incorreta. FGFR3 mutado é a causa da acondroplasia.",
      "B": "Correta. A mutação no gene FBN1 com desregulação do TGF-beta é a etiologia molecular da Síndrome de Marfan.",
      "C": "Incorreta. Edwards é trissomia 18 e cursa com anomalias congênitas múltiplas e alta letalidade neonatal.",
      "D": "Incorreta. 45,X é o cariótipo de Turner."
    }
  },
  {
    "id": "ped-cresc-095",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Alta Estatura e Síndromes de Hipercrescimento",
    "enunciado": "No paciente pediátrico ou adolescente com Síndrome de Marfan, qual fármaco cardiovascular é consagrado em diretrizes para retardar a taxa de dilatação da raiz aórtica e reduzir o estresse mecânico de cisalhamento sobre a parede aórtica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Digitálicos intravenosos em infusão contínua."
      },
      {
        "id": "B",
        "texto": "Anti-inflamatórios não esteroidais em dose máxima."
      },
      {
        "id": "C",
        "texto": "Betabloqueadores (como atenolol ou propranolol) e/ou Bloqueadores dos Receptores de Angiotensina II (como a losartana, que atenua a sinalização anômala de TGF-beta)."
      },
      {
        "id": "D",
        "texto": "Hormônio do crescimento recombinante em dose suprafisiológica."
      }
    ],
    "correta": "C",
    "comentarioGeral": "A farmacoterapia na síndrome de Marfan é voltada para proteger a aorta: 1) Betabloqueadores (atenolol/propranolol/metoprolol) reduzem a frequência cardíaca e a força de ejeção ventricular esquerda (dP/dt), diminuindo a onda de choque sistólica contra a raiz aórtica fragilizada; 2) Bloqueadores dos Receptores de Angiotensina (BRAs, como a Losartana) atuam não apenas como anti-hipertensivos, mas especificamente bloqueiam a cascata proliferativa tecidual de TGF-beta, desacelerando a dilatação do anel aórtico. A cirurgia profilática de troca de raiz aórtica é indicada quando o diâmetro atinge limites críticos (ex: 50 mm no adulto, ou ajustado pela superfície corporal em crianças).",
    "comentariosAlternativas": {
      "A": "Incorreta. Digitálicos são inotrópicos positivos que aumentam o estresse sobre a aorta.",
      "B": "Incorreta. AINES não impedem a progressão da dilatação aórtica.",
      "C": "Correta. Betabloqueadores e BRAs (losartana) são a base farmacológica para retardar o aneurisma aórtico no Marfan.",
      "D": "Incorreta. O rhGH é contraindicado, pois aumentaria ainda mais a alta estatura e o estresse mecânico esquelético."
    }
  },
  {
    "id": "ped-cresc-096",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Alta Estatura e Síndromes de Hipercrescimento",
    "enunciado": "Adolescente do sexo masculino de 16 anos é levado ao endocrinologista por alta estatura desproporcionada (Escore-Z de +2,3 DP) com pernas excessivamente longas em relação ao tronco. Ao exame físico: ginecomastia bilateral indolor e testículos bilateralmente pequenos, medindo apenas 3 mL de volume cada (consistência firme/endurecida), associado a escassa pilosidade facial e corporal. O histórico escolar revela histórico de dificuldades no aprendizado da leitura e linguagem. O perfil laboratorial evidencia: FSH de 42 mUI/mL (muito elevado), LH de 26 mUI/mL (muito elevado) e Testosterona total de 110 ng/dL (baixa). Qual é a principal hipótese diagnóstica e o cariótipo esperado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Síndrome de Turner (45,X)."
      },
      {
        "id": "B",
        "texto": "Adenoma hipofisário secretor de prolactina."
      },
      {
        "id": "C",
        "texto": "Puberdade precoce central verdadeira."
      },
      {
        "id": "D",
        "texto": "Síndrome de Klinefelter (47,XXY)."
      }
    ],
    "correta": "D",
    "comentarioGeral": "A síndrome de Klinefelter é a aneuploidia cromossômica sexual mais comum no sexo masculino (1 em cada 600 nascidos vivos masculinos), decorrente da presença de um cromossomo X supranumerário (cariótipo 47,XXY clássico em 80-90%). Apresenta-se tipicamente na adolescência por: 1) Alta estatura desproporcionada: membros inferiores longos (a presença de três cópias do gene SHOX, duas na região PAR1 do X e uma no Y, promove crescimento ósseo linear excessivo); 2) Hipogonadismo hipergonadotrófico: hialinização e fibrose progressiva dos túbulos seminíferos com falência das células de Leydig, gerando testículos pequenos e duros (< 4 mL), testosterona baixa e FSH/LH marcadamente elevados; 3) Ginecomastia puberal pelo aumento da relação estrógeno/andrógeno; 4) Azoospermia e infertilidade; 5) Atraso de fala e dificuldades de linguagem na infância.",
    "comentariosAlternativas": {
      "A": "Incorreta. Turner ocorre em meninas e cursa com baixa estatura (45,X).",
      "B": "Incorreta. Prolactinoma isolado não explica o cromossomo X extra nem a hialinização testicular primária.",
      "C": "Incorreta. Na puberdade precoce os testículos são aumentados e a testosterona é alta, com idade óssea avançada e baixa estatura final precoce.",
      "D": "Correta. Síndrome de Klinefelter (47,XXY): alta estatura com pernas longas, testículos pequenos e firmes, ginecomastia, FSH/LH elevados e testosterona baixa."
    }
  },
  {
    "id": "ped-cresc-097",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Alta Estatura e Síndromes de Hipercrescimento",
    "enunciado": "Por que os pacientes com Síndrome de Klinefelter (47,XXY) apresentam alta estatura desproporcionada com pernas notavelmente longas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Devido à dosagem tripla do gene SHOX (duas cópias nos cromossomos X e uma cópia no cromossomo Y, já que o gene SHOX escapa da inativação do X), somada ao atraso na fusão epifisária pela deficiência de testosterona e estrógeno."
      },
      {
        "id": "B",
        "texto": "Devido à hipersecreção maciça de GH por um adenoma hipofisário congênito obrigatório."
      },
      {
        "id": "C",
        "texto": "Porque o cromossomo Y duplicado produz osteocalcina em excesso."
      },
      {
        "id": "D",
        "texto": "Por destruição autoimune de todas as epífises ósseas."
      }
    ],
    "correta": "A",
    "comentarioGeral": "A alta estatura desproporcionada do Klinefelter tem duas explicações fisiopatológicas primorosas: 1) O gene SHOX (responsável pelo crescimento esquelético) localiza-se na região pseudoautossômica PAR1 e escapa da inativação habitual do cromossomo X de Lyon. Um homem normal tem 2 cópias (X e Y). O homem Klinefelter 47,XXY tem TRÊS cópias ativas do gene SHOX, promovendo superexpressão genética e maior crescimento dos ossos longos dos membros; 2) O hipogonadismo com menor produção de estradiol (o hormônio responsável pelo fechamento epifisário) retarda a fusão das cartilagens de crescimento, prolongando o crescimento linear das pernas.",
    "comentariosAlternativas": {
      "A": "Correta. Efeito de dosagem gênica (três cópias do gene SHOX) associado ao atraso na fusão epifisária por hipogonadismo explica as pernas longas no Klinefelter.",
      "B": "Incorreta. Não decorre de adenoma hipofisário secretor de GH.",
      "C": "Incorreta. O cariótipo tem um único cromossomo Y (XXY), não Y duplicado.",
      "D": "Incorreta. As epífises são normais, apenas permanecem abertas por mais tempo."
    }
  },
  {
    "id": "ped-cresc-098",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Alta Estatura e Síndromes de Hipercrescimento",
    "enunciado": "Garoto de 12 anos apresenta velocidade de crescimento impressionante de 14 cm/ano antes de entrar em puberdade plena. Mede 198 cm (Escore-Z de Estatura > +4 DP). Apresenta macrocefalia com mandíbula proeminente (prognatismo), pés e mãos gigantes com aumento das partes moles (sapatos apertando rapidamente), cefaleia e sudorese profusa. Os exames mostram IGF-1 extremamente elevado (> +4 DP) e o teste oral de tolerância à glicose (TOTG) com 75 g de dextrosol evidencia falha de supressão do GH sérico (todos os valores de GH > 8 ng/mL). A ressonância magnética revela macroadenoma hipofisário expansivo de 2,2 cm. Qual é o diagnóstico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Alta estatura constitucional simples."
      },
      {
        "id": "B",
        "texto": "Gigantismo hipofisário por adenoma somatotrófico secretor de GH."
      },
      {
        "id": "C",
        "texto": "Síndrome de Turner variante alta."
      },
      {
        "id": "D",
        "texto": "Acondroplasia descompensada."
      }
    ],
    "correta": "B",
    "comentarioGeral": "O Gigantismo hipofisário é uma doença rara decorrente da hipersecreção crônica e autônoma de Hormônio do Crescimento (GH) por um adenoma hipofisário somatotrófico que surge ANTES do fechamento das cartilagens epifisárias de crescimento na infância ou adolescência. Caracteriza-se por crescimento linear vertical aceleradíssimo e descontrolado, levando a estaturas gigantescas, associado a crescimento acral de partes moles (pés, mãos, mandíbula). O diagnóstico laboratorial é confirmado pela elevação marcante de IGF-1 e pela ausência de supressão do GH sérico para < 0,4 a 1,0 ng/mL durante o teste de sobrecarga oral com glicose (TOTG). A RM confirma o macroadenoma.",
    "comentariosAlternativas": {
      "A": "Incorreta. A velocidade de 14 cm/ano pré-puberal e o adenoma hipofisário excluem variante constitucional normal.",
      "B": "Correta. Gigantismo hipofisário por adenoma somatotrófico com hipersecreção de GH e falha de supressão no TOTG.",
      "C": "Incorreta. Turner causa baixa estatura.",
      "D": "Incorreta. Acondroplasia causa baixa estatura rizomélica extrema."
    }
  },
  {
    "id": "ped-cresc-099",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Alta Estatura e Síndromes de Hipercrescimento",
    "enunciado": "Qual é o teste funcional padrão-ouro para confirmar a hipersecreção autônoma de GH no diagnóstico de Gigantismo ou Acromegalia?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Teste de estímulo com clonidina oral."
      },
      {
        "id": "B",
        "texto": "Dosagem de cortisol salivar noturno."
      },
      {
        "id": "C",
        "texto": "Teste de supressão do GH com sobrecarga oral de glicose (TOTG com 75 g de glicose anidra)."
      },
      {
        "id": "D",
        "texto": "Gasometria arterial com cálculo do ânion gap."
      }
    ],
    "correta": "C",
    "comentarioGeral": "Em indivíduos saudáveis, a hiperglicemia aguda induzida pela ingesta de glicose inibe imediatamente a secreção hipofisária de GH (o GH sérico cai para níveis indetectáveis ou inferiores a 0,4-1,0 ng/mL aos 30, 60, 90 e 120 minutos do TOTG). Em pacientes com adenomas somatotróficos secretores de GH (Gigantismo/Acromegalia), a secreção tumoral é totalmente autônoma e insensível ao feedback negativo da glicemia, ocorrendo FALHA DE SUPRESSÃO (o GH permanece persistentemente elevado durante todo o TOTG).",
    "comentariosAlternativas": {
      "A": "Incorreta. O teste com clonidina é de ESTÍMULO, usado para pesquisar DEFICIÊNCIA de GH, e não hipersecreção.",
      "B": "Incorreta. Cortisol salivar avalia síndrome de Cushing.",
      "C": "Correta. O teste de supressão com TOTG é o padrão-ouro confirmatório para excesso autônomo de GH.",
      "D": "Incorreta. Gasometria avalia equilíbrio ácido-base."
    }
  },
  {
    "id": "ped-cresc-100",
    "especialidade": "Pediatria",
    "tema": "CRESCIMENTO E SEUS DISTURBIOS",
    "subtema": "Alta Estatura e Síndromes de Hipercrescimento",
    "enunciado": "Menino de 8 anos tem estatura no percentil 97. O pai mede 196 cm e a mãe mede 182 cm. A estatura-alvo parental calculada é de 195,5 cm (percentil 97). Sua velocidade de crescimento é de 6,2 cm/ano (estritamente normal para a idade escolar). O exame físico é harmônico e completamente normal, sem qualquer dismorfismo, com envergadura proporcional à estatura e idade óssea compatível com a idade cronológica (IO = IC). Qual é a interpretação clínica correta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Síndrome de Sotos com indicação de craniotomia descompressiva."
      },
      {
        "id": "B",
        "texto": "Síndrome de Marfan clássica."
      },
      {
        "id": "C",
        "texto": "Gigantismo hipofisário que exige ressecção transesfenoidal imediata."
      },
      {
        "id": "D",
        "texto": "Alta Estatura Familiar (variante normal do crescimento); a criança está crescendo dentro do seu canal genético saudável determinado por pais altos, sem necessidade de exames invasivos."
      }
    ],
    "correta": "D",
    "comentarioGeral": "Assim como existe a Baixa Estatura Familiar, existe a Alta Estatura Familiar (variante normal do crescimento): a criança apresenta estatura acima do percentil 97 (ou Escore-Z > +2 DP), porém com velocidade de crescimento fisiologicamente normal (5 a 7 cm/ano), proporções corporais perfeitamente normais (relação SS/SI e envergadura adequadas), idade óssea compatível com a cronológica (IO = IC) e congruência total com a estatura de pais saudáveis e geneticamente altos (pai 196 cm e mãe 182 cm). Não há doença, neoplasia ou síndrome genética, sendo indicada apenas a tranquilização da família e o acompanhamento pediátrico de puericultura.",
    "comentariosAlternativas": {
      "A": "Incorreta. A síndrome de Sotos cursa com macrocefalia marcante, fronte proeminente, atraso neuropsicomotor e mutação no gene NSD1.",
      "B": "Incorreta. Não há aracnodactilia, envergadura aumentada ou ectopia de cristalino.",
      "C": "Incorreta. A velocidade normal de 6,2 cm/ano e ausência de sinais acrais afastam gigantismo.",
      "D": "Correta. Alta Estatura Familiar: variante normal com velocidade normal, proporcionalidade esquelética, IO = IC e alvo familiar congruente."
    }
  }
];

// Mapeamento das 100 questões de Cardio para a interface Question do simulado
const cardioPediatricaAsQuestions: Question[] = QUESTOES_CARDIOLOGIA_PEDIATRICA_100.map((q) => ({
  id: q.id,
  specialty: 'Pediatria',
  topic: 'CARDIOLOGIA PEDIATRICA',
  subtopic: q.subtema || 'CARDIOLOGIA PEDIATRICA',
  institution: 'Residência Médica / Medcurso',
  year: 2024,
  statement: q.enunciado,
  options: q.alternativas.map((alt) => ({
    letter: alt.id as 'A' | 'B' | 'C' | 'D',
    text: alt.texto,
  })),
  correctOption: q.correta as 'A' | 'B' | 'C' | 'D',
  generalComment: q.comentarioGeral,
  optionsExplanations: q.alternativas.map((alt) => ({
    letter: alt.id as 'A' | 'B' | 'C' | 'D',
    text: alt.texto,
    isCorrect: alt.id === q.correta,
    explanation: q.comentariosAlternativas[alt.id as keyof typeof q.comentariosAlternativas] || '',
  })),
}));

// Mapeamento das 100 questões de ITU para a interface Question do simulado
const ituPediatricoAsQuestions: Question[] = QUESTOES_ITU_PEDIATRICO_100.map((q) => ({
  id: q.id,
  specialty: 'Pediatria',
  topic: 'ITU PEDIATRICO',
  subtopic: q.subtema || 'ITU PEDIATRICO',
  institution: 'Residência Médica / SBP',
  year: 2024,
  statement: q.enunciado,
  options: q.alternativas.map((alt) => ({
    letter: alt.id as 'A' | 'B' | 'C' | 'D',
    text: alt.texto,
  })),
  correctOption: q.correta as 'A' | 'B' | 'C' | 'D',
  generalComment: q.comentarioGeral,
  optionsExplanations: q.alternativas.map((alt) => ({
    letter: alt.id as 'A' | 'B' | 'C' | 'D',
    text: alt.texto,
    isCorrect: alt.id === q.correta,
    explanation: q.comentariosAlternativas[alt.id as keyof typeof q.comentariosAlternativas] || '',
  })),
}));

// Mapeamento das 100 questões de Crescimento para a interface Question do simulado
const crescimentoPediatricoAsQuestions: Question[] = QUESTOES_CRESCIMENTO_100.map((q) => ({
  id: q.id,
  specialty: 'Pediatria',
  topic: 'CRESCIMENTO E SEUS DISTURBIOS',
  subtopic: q.subtema || 'CRESCIMENTO E SEUS DISTURBIOS',
  institution: 'Residência Médica / SBP',
  year: 2024,
  statement: q.enunciado,
  options: q.alternativas.map((alt) => ({
    letter: alt.id as 'A' | 'B' | 'C' | 'D',
    text: alt.texto,
  })),
  correctOption: q.correta as 'A' | 'B' | 'C' | 'D',
  generalComment: q.comentarioGeral,
  optionsExplanations: q.alternativas.map((alt) => ({
    letter: alt.id as 'A' | 'B' | 'C' | 'D',
    text: alt.texto,
    isCorrect: alt.id === q.correta,
    explanation: q.comentariosAlternativas[alt.id as keyof typeof q.comentariosAlternativas] || '',
  })),
}));

// Questões estáticas base das demais especialidades (Clínica Médica, Cirurgia, Ginecologia, Preventiva)
const baseStaticQuestions: Question[] = [
  // --- CLÍNICA MÉDICA ---
  {
    id: 'q-cm-01',
    specialty: 'Clínica Médica',
    topic: 'Cardiologia',
    subtopic: 'Insuficiência Cardíaca',
    institution: 'USP-SP',
    year: 2024,
    statement:
      'Homem de 62 anos, hipertenso e diabético de longa data, procura a emergência com queixa de dispneia progressiva aos esforços há 3 meses, com piora súbita há 4 dias, associada a ortopneia e dispneia paroxística noturna. Ao exame físico: PA 148x92 mmHg, FC 98 bpm, FR 24 irpm, SatO2 91% em ar ambiente. Ausculta cardíaca com ritmo regular em 3 tempos (B3 presente). Ausculta pulmonar com estertores crepitantes bilaterais até terço médio. Turgência jugular a 45º e edema de membros inferiores 2+/4+. O ecocardiograma transtorácico evidencia fração de ejeção do ventrículo esquerdo (FEVE) de 32%, com dilatação importante de câmaras esquerdas. Qual das seguintes associações medicamentosas é a mais indicada para redução inequívoca de mortalidade a longo prazo neste paciente após estabilização clínica?',
    options: [
      {
        letter: 'A',
        text: 'Inibidor da ECA/BRA ou Espironolactona associados a Furosemida e Digoxina.',
      },
      {
        letter: 'B',
        text: 'Bloqueador dos receptores de angiotensina-neprilisina (ou IECA/BRA), Betabloqueador (carvedilol, succinato de metoprolol ou bisoprolol), Antagonista do receptor mineralocorticoide (espironolactona) e Inibidor de SGLT2.',
      },
      {
        letter: 'C',
        text: 'Anlodipino, Hidroclorotiazida, Propranolol e Nitroglicerina sublingual.',
      },
      {
        letter: 'D',
        text: 'Verapamil, Enalapril, Furosemida venosa em dose dobrada e AAS.',
      },
    ],
    correctOption: 'B',
    generalComment:
      'Trata-se de um paciente com Insuficiência Cardíaca com Fração de Ejeção Reduzida (ICFER - FEVE 32%) sintomática (NYHA III/IV). As diretrizes atuais consagram o "quarteto fantástico" como terapia médica otimizada padrão-ouro com impacto comprovado em redução de mortalidade e hospitalização: 1) Inibidor de SRAA (preferencialmente Sacubitril/Valsartana ou IECA/BRA); 2) Betabloqueador comprovado (carvedilol, succinato de metoprolol ou bisoprolol); 3) Antagonista de mineralocorticoide (espironolactona); 4) Inibidor de SGLT2 (dapagliflozina ou empagliflozina). Diuréticos de alça como a furosemida aliviam sintomas congestivos, mas não reduzem mortalidade isoladamente.',
    optionsExplanations: [
      {
        letter: 'A',
        text: 'Inibidor da ECA/BRA ou Espironolactona associados a Furosemida e Digoxina.',
        isCorrect: false,
        explanation:
          'Incorreta. Furosemida e digoxina não apresentam impacto comprovado na redução de mortalidade geral na ICFER. A digoxina pode reduzir reinternações, mas não prolonga sobrevida. Além disso, omite betabloqueadores e inibidores de SGLT2.',
      },
      {
        letter: 'B',
        text: 'Bloqueador dos receptores de angiotensina-neprilisina (ou IECA/BRA), Betabloqueador (carvedilol, succinato de metoprolol ou bisoprolol), Antagonista do receptor mineralocorticoide (espironolactona) e Inibidor de SGLT2.',
        isCorrect: true,
        explanation:
          'Correta! Representa os 4 pilares farmacológicos com nível de evidência I-A para redução de mortalidade e remodelamento ventricular na IC com fração de ejeção reduzida.',
      },
      {
        letter: 'C',
        text: 'Anlodipino, Hidroclorotiazida, Propranolol e Nitroglicerina sublingual.',
        isCorrect: false,
        explanation:
          'Incorreta. O propranolol não é um betabloqueador aprovado para ICFER (apenas carvedilol, succinato de metoprolol e bisoprolol). O anlodipino não tem benefício sobre mortalidade na IC.',
      },
      {
        letter: 'D',
        text: 'Verapamil, Enalapril, Furosemida venosa em dose dobrada e AAS.',
        isCorrect: false,
        explanation:
          'Incorreta. Bloqueadores dos canais de cálcio não-di-hidropiridínicos (verapamil e diltiazem) são contraindicados na ICFER por seu potente efeito inotrópico negativo.',
      },
    ],
  },
  {
    id: 'q-cm-02',
    specialty: 'Clínica Médica',
    topic: 'Endocrinologia',
    subtopic: 'Cetoacidose Diabética',
    institution: 'UNICAMP',
    year: 2024,
    statement:
      'Mulher de 21 anos, com diagnóstico prévio de Diabetes Mellitus tipo 1, é admitida na sala de emergência torporosa, taquipneica com padrão respiratório de Kussmaul e hálito cetônico pronunciado. Glicemia capilar no acolhimento: 480 mg/dL. Gasometria arterial: pH 7,10, HCO3- 9 mEq/L, pCO2 22 mmHg. Eletrólitos séricos: Na+ 132 mEq/L, K+ 3,1 mEq/L, Cl- 98 mEq/L. Cetonúria 4+/4+. Diante dos parâmetros laboratoriais apresentados, qual é a conduta prioritária imediata em relação ao manejo da insulinoterapia?',
    options: [
      {
        letter: 'A',
        text: 'Postergar o início da insulina regular, iniciar hidratação venosa vigorosa e reposição de cloreto de potássio; iniciar insulina apenas quando o potássio sérico for superior a 3,3 mEq/L.',
      },
      {
        letter: 'B',
        text: 'Administrar imediatamente bólus de insulina regular 0,1 U/kg seguido de infusão contínua a 0,1 U/kg/h, pois a glicemia é a prioridade crítica.',
      },
      {
        letter: 'C',
        text: 'Infundir bicarbonato de sódio a 8,4% imediatamente com insulina NPH subcutânea.',
      },
      {
        letter: 'D',
        text: 'Administrar insulina glargina intramuscular associada a gluconato de cálcio a 10%.',
      },
    ],
    correctOption: 'A',
    generalComment:
      'Na Cetoacidose Diabética (CAD), a regra mais crítica de segurança é checar o potássio sérico ANTES de iniciar a insulina. A insulina promove entrada rápida de potássio para o meio intracelular. Se o K+ estiver < 3,3 mEq/L, iniciar insulina pode precipitar hipocalemia grave e arritmias ventriculares letais ou parada cardiorrespiratória. A conduta imperativa é suspender/postergar a insulina, hidratar com SF 0,9% e repor potássio (20 a 30 mEq de KCl por litro de solução) até que o K+ atinja valor seguro (> 3,3 mEq/L).',
    optionsExplanations: [
      {
        letter: 'A',
        text: 'Postergar o início da insulina regular, iniciar hidratação venosa vigorosa e reposição de cloreto de potássio; iniciar insulina apenas quando o potássio sérico for superior a 3,3 mEq/L.',
        isCorrect: true,
        explanation:
          'Correta! Salva a vida do paciente ao evitar arritmias cardíacas malignas secundárias à hipocalemia induzida pela insulina.',
      },
      {
        letter: 'B',
        text: 'Administrar imediatamente bólus de insulina regular 0,1 U/kg seguido de infusão contínua a 0,1 U/kg/h, pois a glicemia é a prioridade crítica.',
        isCorrect: false,
        explanation:
          'Incorreta. Fazer insulina com K+ de 3,1 mEq/L pode provocar hipocalemia severa fatal. A reposição de potássio precede a insulina.',
      },
      {
        letter: 'C',
        text: 'Infundir bicarbonato de sódio a 8,4% imediatamente com insulina NPH subcutânea.',
        isCorrect: false,
        explanation:
          'Incorreta. O bicarbonato só é cogitado se pH < 6,9. Além disso, a insulina na emergência da CAD é regular venosa em bomba, e o bicarbonato pioraria ainda mais a hipocalemia.',
      },
      {
        letter: 'D',
        text: 'Administrar insulina glargina intramuscular associada a gluconato de cálcio a 10%.',
        isCorrect: false,
        explanation:
          'Incorreta. A via de escolha na fase aguda é a endovenosa contínua com insulina regular. Não há indicação de gluconato de cálcio.',
      },
    ],
  },
  {
    id: 'q-cm-03',
    specialty: 'Clínica Médica',
    topic: 'Pneumologia',
    subtopic: 'Pneumonia Adquirida na Comunidade',
    institution: 'USP-RP',
    year: 2024,
    statement:
      'Homem de 68 anos, hipertenso, procura o pronto-atendimento com tosse produtiva com expectoração amarelada, febre aferida em 38,7 ºC e dor torácica ventilatório-dependente em base direita há 3 dias. Ao exame físico: lúcido e orientado, PA 115x75 mmHg, FC 92 bpm, FR 32 irpm, SatO2 93% em ar ambiente. Ausculta pulmonar: estertores crepitantes e aumento do frêmito toracovocal em base pulmonar direita. Ureia sérica: 56 mg/dL (VR < 40 mg/dL). Radiografia de tórax evidencia consolidação alveolar no lobo inferior direito. Utilizando o escore prognóstico CURB-65, qual é a pontuação obtida e a conduta de local de tratamento mais apropriada?',
    options: [
      {
        letter: 'A',
        text: 'CURB-65 = 2 pontos (Idade ≥ 65 e FR ≥ 30 irpm); considerar internação hospitalar em enfermaria.',
      },
      {
        letter: 'B',
        text: 'CURB-65 = 3 pontos (Idade ≥ 65, FR ≥ 30 irpm e Ureia > 50 mg/dL); indicar internação hospitalar formal para tratamento com antibioticoterapia combinada.',
      },
      {
        letter: 'C',
        text: 'CURB-65 = 1 ponto (apenas Idade ≥ 65); tratamento ambulatorial seguro com Amoxicilina.',
      },
      {
        letter: 'D',
        text: 'CURB-65 = 4 pontos; indicação imediata de internação em Unidade de Terapia Intensiva (UTI).',
      },
    ],
    correctOption: 'B',
    generalComment:
      'O escore CURB-65 avalia 5 critérios (1 ponto cada): C = Confusão mental (ausente = 0); U = Ureia > 50 mg/dL (56 mg/dL = 1); R = Frequência Respiratória ≥ 30 irpm (32 irpm = 1); B = Pressão arterial Sistólica < 90 ou Diastólica ≤ 60 (115x75 = 0); 65 = Idade ≥ 65 anos (68 anos = 1). Portanto, o paciente totaliza 3 pontos (U + R + 65). Pacientes com CURB-65 ≥ 3 têm mortalidade elevada (> 15%) e têm indicação mandatória de internação hospitalar (enfermaria com vigilância estrita ou considerar UTI se critérios maiores/menores de ATS/IDSA presentes), com início de antibioticoterapia parenteral combinada (betalactâmico + macrolídeo ou quinolona respiratória).',
    optionsExplanations: [
      {
        letter: 'A',
        text: 'CURB-65 = 2 pontos (Idade ≥ 65 e FR ≥ 30 irpm); considerar internação hospitalar em enfermaria.',
        isCorrect: false,
        explanation:
          'Incorreta. Esqueceu de pontuar a ureia sérica > 50 mg/dL (paciente tem 56 mg/dL), somando 3 pontos.',
      },
      {
        letter: 'B',
        text: 'CURB-65 = 3 pontos (Idade ≥ 65, FR ≥ 30 irpm e Ureia > 50 mg/dL); indicar internação hospitalar formal para tratamento com antibioticoterapia combinada.',
        isCorrect: true,
        explanation:
          'Correta! Ureia > 50 (1) + FR ≥ 30 (1) + Idade ≥ 65 (1) = 3 pontos. Conduta: internação hospitalar.',
      },
      {
        letter: 'C',
        text: 'CURB-65 = 1 ponto (apenas Idade ≥ 65); tratamento ambulatorial seguro com Amoxicilina.',
        isCorrect: false,
        explanation:
          'Incorreta. O paciente apresenta taquipneia acentuada e uremia, acumulando 3 pontos no escore.',
      },
      {
        letter: 'D',
        text: 'CURB-65 = 4 pontos; indicação imediata de internação em Unidade de Terapia Intensiva (UTI).',
      },
    ],
  },

  // --- PEDIATRIA ---
  {
    id: 'q-ped-01',
    specialty: 'Pediatria',
    topic: 'Infectologia Pediátrica',
    subtopic: 'Lactente Febril e Meningite',
    institution: 'UNICAMP',
    year: 2024,
    statement:
      'Lactente de 11 meses é trazido à UPA pela mãe com história de febre alta (39,2 ºC) há 24 horas, recusa alimentar importante, irritabilidade ao manuseio e dois episódios de vômitos em jato nas últimas 4 horas. Não há tosse, coriza ou diarreia prévias. Carteira vacinal atrasada. Ao exame: letárgico, fontanela anterior abaulada e tensa à palpação, tempo de enchimento capilar de 2 segundos, sinais de Kernig e Brudzinski positivos. Sem petéquias ou sufusões hemorrágicas na pele. Diante da principal suspeita diagnóstica, qual é a conduta imediata mais adequada?',
    options: [
      {
        letter: 'A',
        text: 'Realizar hemoculturas e punção lombar imediatas (sem necessidade de TC prévia), iniciando antibioticoterapia empírica com Ceftriaxona associada a Dexametasona antes ou junto da primeira dose.',
      },
      {
        letter: 'B',
        text: 'Solicitar tomografia de crânio com urgência antes de qualquer punção lombar devido ao risco iminente de herniação uncal.',
      },
      {
        letter: 'C',
        text: 'Iniciar hidratação venosa vigorosa, sintomáticos e observar por 24 horas aguardando o resultado do painel viral respiratório.',
      },
      {
        letter: 'D',
        text: 'Prescrever amoxicilina por via oral em dose dobrada e liberar para seguimento ambulatorial com retorno em 48h.',
      },
    ],
    correctOption: 'A',
    generalComment:
      'O quadro clínico é clássico de meningite bacteriana aguda em lactente (febre, irritabilidade, vômitos, fontanela abaulada e sinais meníngeos positivos). Em lactentes com fontanela aberta e sem sinais de hipertensão intracraniana focal (como anisocoria, papiledema ou déficit neurológico focal), a punção lombar não deve ser retardada por tomografia computadorizada. O início precoce de Ceftriaxona e dexametasona reduz sequelas neurológicas e perda auditiva.',
    optionsExplanations: [
      {
        letter: 'A',
        text: 'Realizar hemoculturas e punção lombar imediatas (sem necessidade de TC prévia), iniciando antibioticoterapia empírica com Ceftriaxona associada a Dexametasona antes ou junto da primeira dose.',
        isCorrect: true,
        explanation:
          'Correta! A punção liquórica imediata define o diagnóstico e permite identificação do patógeno. A TC prévia só seria indicada na presença de coma profundo, sinais focais ou papiledema.',
      },
      {
        letter: 'B',
        text: 'Solicitar tomografia de crânio com urgência antes de qualquer punção lombar devido ao risco iminente de herniação uncal.',
        isCorrect: false,
        explanation:
          'Incorreta. Em lactentes sem déficits focais neurológicos ou papiledema, a fontanela aberta atua na descompressão fisiológica e a TC não deve retardar o tratamento.',
      },
      {
        letter: 'C',
        text: 'Iniciar hidratação venosa vigorosa, sintomáticos e observar por 24 horas aguardando o resultado do painel viral respiratório.',
        isCorrect: false,
        explanation:
          'Incorreta. Trata-se de emergência médica. Postergar o tratamento de meningite bacteriana traz altíssimo risco de óbito ou graves sequelas neurológicas permanentes.',
      },
      {
        letter: 'D',
        text: 'Prescrever amoxicilina por via oral em dose dobrada e liberar para seguimento ambulatorial com retorno em 48h.',
        isCorrect: false,
        explanation:
          'Incorreta. Meningite bacteriana exige internação hospitalar e antibioticoterapia parenteral em doses plenas meningíticas.',
      },
    ],
  },
  {
    id: 'q-ped-02',
    specialty: 'Pediatria',
    topic: 'Neonatologia',
    subtopic: 'Reanimação Neonatal em Sala de Parto',
    institution: 'SBP / ENARE',
    year: 2024,
    statement:
      'Recém-nascido a termo (39 semanas de idade gestacional), parto cesáreo indicado por desproporção cefalopélvica, líquido amniótico claro com grumos. Ao nascimento, o bebê não chora, encontra-se apneico e hipotônico. É levado imediatamente à mesa de reanimação sob fonte de calor radiante, posicionado com leve extensão do pescoço, vias aéreas pérvias e secado, em tempo total de 30 segundos de passos iniciais. Na reavaliação imediata aos 30 segundos de vida: mantém respiração irregular e FC auscultada pelo estetoscópio precordial de 72 bpm. De acordo com as Diretrizes da Sociedade Brasileira de Pediatria (SBP), qual é a conduta prioritária neste exato momento?',
    options: [
      {
        letter: 'A',
        text: 'Iniciar Ventilação com Pressão Positiva (VPP) com máscara facial e balão autoinflável em ar ambiente (O2 a 21%) na frequência de 40 a 60 movimentos por minuto, monitorando SatO2 e FC.',
      },
      {
        letter: 'B',
        text: 'Iniciar compressões torácicas imediatas associadas a oxigênio a 100%, pois a FC é inferior a 80 bpm.',
      },
      {
        letter: 'C',
        text: 'Administrar adrenalina endotraqueal imediatamente em bólus de 0,1 mL/kg.',
      },
      {
        letter: 'D',
        text: 'Administrar oxigênio inalatório em fluxo livre a 10 L/min próximo à narina do recém-nascido e aguardar mais 60 segundos.',
      },
    ],
    correctOption: 'A',
    generalComment:
      'Segundo as Diretrizes de Reanimação Neonatal da SBP (Diretriz do Minuto de Ouro), se após os passos iniciais nos primeiros 30 segundos de vida o recém-nascido a termo mantiver FC < 100 bpm, respiração irregular ou apneia, a conduta imperativa e mais eficaz é iniciar Ventilação com Pressão Positiva (VPP) com balão autoinflável e máscara em ar ambiente (FiO2 21%) dentro do "Minuto de Ouro" (até 60 segundos de vida). Compressões torácicas só são indicadas se, após 30 segundos de VPP efetiva com técnica correta (geralmente sob via aérea avançada), a FC permanecer abaixo de 60 bpm.',
    optionsExplanations: [
      {
        letter: 'A',
        text: 'Iniciar Ventilação com Pressão Positiva (VPP) com máscara facial e balão autoinflável em ar ambiente (O2 a 21%) na frequência de 40 a 60 movimentos por minuto, monitorando SatO2 e FC.',
        isCorrect: true,
        explanation:
          'Correta! A VPP com ar ambiente é a intervenção isolada mais importante para a reversão da asfixia perinatal no RN a termo com FC < 100 bpm.',
      },
      {
        letter: 'B',
        text: 'Iniciar compressões torácicas imediatas associadas a oxigênio a 100%, pois a FC é inferior a 80 bpm.',
        isCorrect: false,
        explanation:
          'Incorreta. A massagem cardíaca só tem indicação se a FC persistir abaixo de 60 bpm após VPP efetiva com cânula traqueal.',
      },
      {
        letter: 'C',
        text: 'Administrar adrenalina endotraqueal imediatamente em bólus de 0,1 mL/kg.',
        isCorrect: false,
        explanation:
          'Incorreta. Adrenalina é reservada para situações refratárias extremas após massagem cardíaca com ventilação com O2 a 100%.',
      },
      {
        letter: 'D',
        text: 'Administrar oxigênio inalatório em fluxo livre a 10 L/min próximo à narina do recém-nascido e aguardar mais 60 segundos.',
        isCorrect: false,
        explanation:
          'Incorreta. O oxigênio inalatório não ventila um pulmão apneico e atrasa a intervenção vital no minuto de ouro.',
      },
    ],
  },
  {
    id: 'q-ped-03',
    specialty: 'Pediatria',
    topic: 'Doenças Exantemáticas',
    subtopic: 'Diagnóstico Diferencial dos Exantemas',
    institution: 'USP-SP',
    year: 2024,
    statement:
      'Menina de 3 anos é trazida pela mãe ao ambulatório com quadro de febre alta contínua (38,8 ºC a 39,5 ºC) há 4 dias, sem foco infeccioso aparente, acompanhada de irritabilidade. Hoje pela manhã, a febre cessou subitamente em crise. Poucas horas após o desaparecimento da febre, a mãe notou o surgimento de um exantema maculopapular róseo, não pruriginoso, que teve início no tronco e no pescoço, disseminando-se discretamente para a face e raiz dos membros. A criança agora está ativa, afebril, alimentando-se bem. Qual é o diagnóstico mais provável e o agente etiológico?',
    options: [
      {
        letter: 'A',
        text: 'Exantema Súbito (Roséola Infantil); Herpes-vírus humano tipo 6 (HHV-6).',
      },
      {
        letter: 'B',
        text: 'Eritema Infeccioso; Parvovírus B19.',
      },
      {
        letter: 'C',
        text: 'Sarampo; Morbillivirus da família Paramyxoviridae.',
      },
      {
        letter: 'D',
        text: 'Escarlatina; Streptococcus pyogenes (Streptococcus beta-hemolítico do grupo A).',
      },
    ],
    correctOption: 'A',
    generalComment:
      'A história clínica de febre alta contínua e inexplicada que desaparece subitamente em crise (lise), momento no qual surge um exantema maculopapular centrífugo não pruriginoso de início troncular em uma criança de 6 meses a 3 anos, é patognomônica de Exantema Súbito (Roséola Infantil), causado principalmente pelo Herpes-vírus humano tipo 6 (HHV-6). O curso é benigno e autolimitado.',
    optionsExplanations: [
      {
        letter: 'A',
        text: 'Exantema Súbito (Roséola Infantil); Herpes-vírus humano tipo 6 (HHV-6).',
        isCorrect: true,
        explanation:
          'Correta! O exantema surge exatamente quando a febre cessa (característica única do exantema súbito).',
      },
      {
        letter: 'B',
        text: 'Eritema Infeccioso; Parvovírus B19.',
        isCorrect: false,
        explanation:
          'Incorreta. O eritema infeccioso cursa tipicamente com a face esbofeteada inicial, seguida de exantema rendilhado fotossensível, sem o padrão clássico de febre em lise do exantema súbito.',
      },
      {
        letter: 'C',
        text: 'Sarampo; Morbillivirus da família Paramyxoviridae.',
        isCorrect: false,
        explanation:
          'Incorreta. No sarampo a febre atinge seu pico durante o aparecimento do exantema craniocaudal com descamação furfurácea, associado a conjuntivite e manchas de Koplik.',
      },
      {
        letter: 'D',
        text: 'Escarlatina; Streptococcus pyogenes (Streptococcus beta-hemolítico do grupo A).',
        isCorrect: false,
        explanation:
          'Incorreta. A escarlatina exige faringoamigdalite purulenta prévia, pele em lixa, sinal de Filatov e sinal de Pastia.',
      },
    ],
  },
  {
    id: 'q-ped-04',
    specialty: 'Pediatria',
    topic: 'Aleitamento Materno',
    subtopic: 'Aleitamento Materno',
    institution: 'USP-SP',
    year: 2024,
    statement:
      'Mãe primípara de recém-nascido a termo de 10 dias procura a UBS com queixa de dor intensa aos mamilos durante as mamadas e fissuras mamárias bilaterais. Relata que o bebê mama frequentemente (a cada 1 hora), mas parece nunca ficar satisfeito. Ao observar a mamada, o médico nota: boca do bebê pouco aberta, lábios para dentro (invertidos), bochechas encovadas durante a sucção, queixo distante da mama e pega apenas no mamilo. Diante desse quadro clínico, qual é a orientação prioritária?',
    options: [
      {
        letter: 'A',
        text: 'Corrigir a técnica de pega e posicionamento: boca bem aberta abrangendo aréola, lábio inferior evertido, queixo tocando a mama e abdome do bebê encostado ao da mãe.',
      },
      {
        letter: 'B',
        text: 'Suspender a amamentação na mama fissurada por 48 horas e introduzir fórmula infantil em mamadeira ortodôntica.',
      },
      {
        letter: 'C',
        text: 'Prescrever pomada de corticoide de alta potência e pomada cicatrizante antes de cada mamada.',
      },
      {
        letter: 'D',
        text: 'Indicar uso de bicos de silicone protetores de mamilo para diminuir o atrito mecânico da sucção.',
      },
    ],
    correctOption: 'A',
    generalComment:
      'A principal causa de dor, fissura mamária e mamadas ineficazes com recém-nascido insatisfeito é a pega inadequada do mamilo em vez da aréola. A conduta padrão-ouro é a correção da técnica de posicionamento e pega: boca amplamente aberta em "peixinho", lábio inferior evertido, queixo encostado na mama, mais aréola visível acima do que abaixo da boca e barriga do bebê voltada para a barriga da mãe (ventre com ventre). Bicos artificiais e interrupção da amamentação são contraindicados pelo risco de confusão de bicos e desmame precoce.',
    optionsExplanations: [
      {
        letter: 'A',
        text: 'Corrigir a técnica de pega e posicionamento: boca bem aberta abrangendo aréola, lábio inferior evertido, queixo tocando a mama e abdome do bebê encostado ao da mãe.',
        isCorrect: true,
        explanation:
          'Correta! A correção da pega alivia a dor imediatamente e assegura a extração eficiente do leite posterior rico em gordura.',
      },
      {
        letter: 'B',
        text: 'Suspender a amamentação na mama fissurada por 48 horas e introduzir fórmula infantil em mamadeira ortodôntica.',
        isCorrect: false,
        explanation:
          'Incorreta. Suspender o aleitamento e introduzir mamadeira leva a ingurgitamento, mastite e desmame precoce por confusão de bicos.',
      },
      {
        letter: 'C',
        text: 'Prescrever pomada de corticoide de alta potência e pomada cicatrizante antes de cada mamada.',
        isCorrect: false,
        explanation:
          'Incorreta. Pomadas podem ser deglutidas pelo lactente e não corrigem a causa primária da fissura, que é o trauma mecânico da pega incorreta.',
      },
      {
        letter: 'D',
        text: 'Indicar uso de bicos de silicone protetores de mamilo para diminuir o atrito mecânico da sucção.',
        isCorrect: false,
        explanation:
          'Incorreta. Bicos de silicone interferem na dinâmica correta de ordenha e podem causar diminuição da produção de leite materno.',
      },
    ],
  },
  {
    id: 'q-ped-05',
    specialty: 'Pediatria',
    topic: 'Imunização',
    subtopic: 'Imunização',
    institution: 'ENARE',
    year: 2024,
    statement:
      'Lactente de 2 meses de vida é levado à sala de vacinação da UBS para receber as imunizações previstas no Calendário Nacional de Vacinação do Programa Nacional de Imunizações (PNI) do Ministério da Saúde. Quais são as vacinas indicadas rotineiramente para esta consulta dos 2 meses de idade?',
    options: [
      {
        letter: 'A',
        text: 'Pentavalente (DTP/Hib/HB), VIP (Vacina Inativada Poliomielite), Pneumocócica 10-valente (conjugada) e Rotavírus humano (VORH).',
      },
      {
        letter: 'B',
        text: 'BCG, Hepatite B monovalente, Meningocócica C conjugada e Febre Amarela.',
      },
      {
        letter: 'C',
        text: 'DTP celular isolada, VOP (gotinha de pólio oral), Tríplice Viral e Varicela.',
      },
      {
        letter: 'D',
        text: 'Pentavalente, Pneumocócica 23-valente, Hepatite A inativada e HPV.',
      },
    ],
    correctOption: 'A',
    generalComment:
      'No Calendário Básico de Vacinação da Criança do Ministério da Saúde (PNI), aos 2 meses de vida a criança deve receber as seguintes primeiras doses: 1ª dose da Pentavalente (difteria, tétano, coqueluche, Haemophilus influenzae tipo b e hepatite B); 1ª dose da VIP (poliomielite inativada parenteral); 1ª dose da Pneumocócica 10-valente conjugada; e 1ª dose da vacina oral contra Rotavírus Humano (VORH).',
    optionsExplanations: [
      {
        letter: 'A',
        text: 'Pentavalente (DTP/Hib/HB), VIP (Vacina Inativada Poliomielite), Pneumocócica 10-valente (conjugada) e Rotavírus humano (VORH).',
        isCorrect: true,
        explanation:
          'Correta! Representa exatamente o quarteto de vacinas recomendado pelo PNI aos 2 meses de idade.',
      },
      {
        letter: 'B',
        text: 'BCG, Hepatite B monovalente, Meningocócica C conjugada e Febre Amarela.',
        isCorrect: false,
        explanation:
          'Incorreta. BCG e Hepatite B são feitas ao nascer; Meningo C aos 3 meses e Febre Amarela aos 9 meses.',
      },
      {
        letter: 'C',
        text: 'DTP celular isolada, VOP (gotinha de pólio oral), Tríplice Viral e Varicela.',
        isCorrect: false,
        explanation:
          'Incorreta. A VOP foi substituída pela VIP injetável em todas as doses primárias; Tríplice viral é aos 12 meses.',
      },
      {
        letter: 'D',
        text: 'Pentavalente, Pneumocócica 23-valente, Hepatite A inativada e HPV.',
        isCorrect: false,
        explanation:
          'Incorreta. Pneumo 23 não é para lactente hígido; Hepatite A é aos 15 meses e HPV a partir dos 9 anos.',
      },
    ],
  },
  {
    id: 'q-ped-06',
    specialty: 'Pediatria',
    topic: 'Diarreia Aguda e Desidratação na Infância',
    subtopic: 'Diarreia Aguda e Desidratação na Infância',
    institution: 'UNICAMP',
    year: 2024,
    statement:
      'Menino de 1 ano e 4 meses apresenta quadro de diarreia aquosa (6 episódios ao dia) e vômitos há 2 dias. Ao exame físico na UPA: criança irritada, inquieta, olhos encovados, ausência de lágrimas ao chorar, boca e língua secas, sede intensa (bebe a solução de reidratação oral avidamente), sinal da prega desaparece lentamente (menos de 2 segundos) e pulsos cheios. De acordo com o Ministério da Saúde e OMS, qual é a classificação do estado de hidratação e o plano de conduta indicado?',
    options: [
      {
        letter: 'A',
        text: 'Desidratação (com algum grau de desidratação); instituir Plano B com Terapia de Reidratação Oral (SRO) na unidade de saúde até a reidratação completa, associado a Sulfato de Zinco por 10 a 14 dias.',
      },
      {
        letter: 'B',
        text: 'Desidratação grave com choque hipovolêmico; instituir Plano C com expansão venosa imediata com Soro Fisiológico a 100 mL/kg.',
      },
      {
        letter: 'C',
        text: 'Sem desidratação; instituir Plano A domiciliar com aumento de líquidos caseiros e manter alimentação habitual.',
      },
      {
        letter: 'D',
        text: 'Desidratação leve; prescrever antibiótico empírico (Ciprofloxacino) e antidiarréico inibidor da motilidade (Loperamida).',
      },
    ],
    correctOption: 'A',
    generalComment:
      'O Ministério da Saúde classifica a desidratação na diarreia aguda em 3 categorias: 1) Sem desidratação -> Plano A (domiciliar); 2) Desidratação (ou com algum grau de desidratação) -> Plano B (Terapia de Reidratação Oral na unidade com SRO administrada continuamente pelo cuidador em copinho ou colher); 3) Desidratação grave -> Plano C (expansão parenteral venosa). A presença de irritabilidade, olhos fundos, sede sôfrega e sinal da prega positivo caracteriza o Plano B. O sulfato de zinco reduz a gravidade, a duração e a recorrência de novos episódios diarreicos.',
    optionsExplanations: [
      {
        letter: 'A',
        text: 'Desidratação (com algum grau de desidratação); instituir Plano B com Terapia de Reidratação Oral (SRO) na unidade de saúde até a reidratação completa, associado a Sulfato de Zinco por 10 a 14 dias.',
        isCorrect: true,
        explanation:
          'Correta! A criança apresenta os sinais clássicos de desidratação (Plano B), devendo reidratar com SRO na unidade de saúde.',
      },
      {
        letter: 'B',
        text: 'Desidratação grave com choque hipovolêmico; instituir Plano C com expansão venosa imediata com Soro Fisiológico a 100 mL/kg.',
        isCorrect: false,
        explanation:
          'Incorreta. Não há letargia/coma, pulsos filiformes ou tempo de enchimento capilar > 3 segundos que definam desidratação grave (Plano C).',
      },
      {
        letter: 'C',
        text: 'Sem desidratação; instituir Plano A domiciliar com aumento de líquidos caseiros e manter alimentação habitual.',
        isCorrect: false,
        explanation:
          'Incorreta. A criança já possui sinais evidentes de perda hídrica que contraindicam a alta domiciliar imediata.',
      },
      {
        letter: 'D',
        text: 'Desidratação leve; prescrever antibiótico empírico (Ciprofloxacino) e antidiarréico inibidor da motilidade (Loperamida).',
        isCorrect: false,
        explanation:
          'Incorreta. Loperamida e outros inibidores da motilidade são contraindicados em pediatria pelo risco de íleo paralítico e enterite necrosante.',
      },
    ],
  },

  // --- CIRURGIA ---
  {
    id: 'q-cir-01',
    specialty: 'Cirurgia',
    topic: 'Abdome Agudo',
    subtopic: 'Apendicite Aguda',
    institution: 'UFRJ',
    year: 2024,
    statement:
      'Jovem de 22 anos, previamente hígido, procura o pronto-atendimento com dor periumbilical de início há 18 horas, contínua e em aperto, que nas últimas 6 horas migrou e se fixou na fossa ilíaca direita (FID). Relata inapetência (anorexia) desde o início do quadro e febrícula (37,8 ºC). Ao exame abdominal: abdome plano, ruídos hidroaéreos diminuídos, dor intensa à palpação profunda no ponto de McBurney com descompressão brusca positiva (Sinal de Blumberg positivo) e dor na FID à palpação do quadrante inferior esquerdo (Sinal de Rovsing positivo). Hemograma com 14.800 leucócitos/mm³ e 8% de bastões. Qual é o diagnóstico mais provável e a conduta recomendada?',
    options: [
      {
        letter: 'A',
        text: 'Apendicite aguda; indicar apendicectomia (laparoscópica ou convencional), não sendo obrigatório exame de imagem adicional diante do quadro clínico-laboratorial típico em homem jovem.',
      },
      {
        letter: 'B',
        text: 'Diverticulite aguda de cólon direito; prescrever antibioticoterapia ambulatorial com ciprofloxacino e metronidazol.',
      },
      {
        letter: 'C',
        text: 'Gastroenterite aguda bacteriana; solicitar coprocultura e prescrever probióticos e hidratação oral.',
      },
      {
        letter: 'D',
        text: 'Linfadenite mesentérica; realizar colonoscopia de urgência para confirmação.',
      },
    ],
    correctOption: 'A',
    generalComment:
      'O caso ilustra a clássica cronologia de Murphy da apendicite aguda: dor periumbilical visceral inicial seguida de migração para fossa ilíaca direita (somática), anorexia e febre baixa. Os sinais de Blumberg e Rovsing confirmam a peritonite localizada. Em homens adultos jovens com história e exame físico típicos (Escore de Alvarado ≥ 7), o diagnóstico é predominantemente clínico e a indicação cirúrgica imediata previne perfuração e peritonite.',
    optionsExplanations: [
      {
        letter: 'A',
        text: 'Apendicite aguda; indicar apendicectomia (laparoscópica ou convencional), não sendo obrigatório exame de imagem adicional diante do quadro clínico-laboratorial típico em homem jovem.',
        isCorrect: true,
        explanation:
          'Correta! Em homens jovens com apresentação clínica clássica de apendicite e sinais de peritonite localizada, a cirurgia é indicada prontamente.',
      },
      {
        letter: 'B',
        text: 'Diverticulite aguda de cólon direito; prescrever antibioticoterapia ambulatorial com ciprofloxacino e metronidazol.',
        isCorrect: false,
        explanation:
          'Incorreta. Diverticulite de cólon direito é muito mais rara no Ocidente e ocorre em faixa etária mais avançada.',
      },
      {
        letter: 'C',
        text: 'Gastroenterite aguda bacteriana; solicitar coprocultura e prescrever probióticos e hidratação oral.',
        isCorrect: false,
        explanation:
          'Incorreta. Gastroenterite aguda cursa com diarreia e cólicas difusas, sem peritonismo localizado na FID.',
      },
      {
        letter: 'D',
        text: 'Linfadenite mesentérica; realizar colonoscopia de urgência para confirmação.',
        isCorrect: false,
        explanation:
          'Incorreta. A colonoscopia é contraindicada na suspeita de abdome agudo inflamatório pelo risco de perfuração.',
      },
    ],
  },
  {
    id: 'q-cir-02',
    specialty: 'Cirurgia',
    topic: 'Trauma',
    subtopic: 'Atendimento Inicial e Trauma Torácico (ATLS)',
    institution: 'UNICAMP',
    year: 2024,
    statement:
      'Homem de 28 anos é trazido pelo resgate à sala de trauma após colisão moto contra anteparo em alta velocidade. Na admissão: via aérea pérvia com colar cervical instalado; dispneia severa com FR 38 irpm, SatO2 84% em máscara com reservatório; hemitórax direito com timpanismo acentuado à percussão, ausência completa de murmúrio vesicular e desvio da traqueia para o lado esquerdo; turgência jugular exuberante visível. Sinais vitais: PA 72x40 mmHg, FC 136 bpm, extremidades frias e sudoreicas. De acordo com a 10ª edição do ATLS (Advanced Trauma Life Support), qual é a conduta imediata mandatória?',
    options: [
      {
        letter: 'A',
        text: 'Descompressão torácica imediata com agulha calibrosa no 5º espaço intercostal, na linha axilar média ou anterior do hemitórax direito, seguida de drenagem pleural em selo d’água.',
      },
      {
        letter: 'B',
        text: 'Solicitar radiografia de tórax e tomografia de corpo inteiro com urgência para confirmar a hipótese diagnóstica antes de qualquer procedimento invasivo.',
      },
      {
        letter: 'C',
        text: 'Realizar intubação orotraqueal imediata com ventilação sob pressão positiva vigorosa.',
      },
      {
        letter: 'D',
        text: 'Pericardiocentese subxifoidiana de urgência com agulha para alívio do tamponamento cardíaco.',
      },
    ],
    correctOption: 'A',
    generalComment:
      'O quadro de hipotensão, taquicardia, ausência de MV unilateral com timpanismo, desvio traqueal contralateral e turgência jugular fecha o diagnóstico clínico inequívoco de Pneumotórax Hipertensivo à direita. O pneumotórax hipertensivo é um diagnóstico exclusivamente clínico que NUNCA deve aguardar exame de imagem. Pelo ATLS 10ª edição, a descompressão imediata com agulha no adulto é recomendada no 5º espaço intercostal na linha axilar média (ou linha axilar anterior), seguida de drenagem em selo d’água no mesmo hemitórax.',
    optionsExplanations: [
      {
        letter: 'A',
        text: 'Descompressão torácica imediata com agulha calibrosa no 5º espaço intercostal, na linha axilar média ou anterior do hemitórax direito, seguida de drenagem pleural em selo d’água.',
        isCorrect: true,
        explanation:
          'Correta! O ATLS 10ª edição atualizou o local de punção no adulto para o 5º EIC entre as linhas axilar anterior e média, aliviando de pronto o colapso hemodinâmico.',
      },
      {
        letter: 'B',
        text: 'Solicitar radiografia de tórax e tomografia de corpo inteiro com urgência para confirmar a hipótese diagnóstica antes de qualquer procedimento invasivo.',
        isCorrect: false,
        explanation:
          'Incorreta. Radiografia de tórax é expressamente contraindicada no pneumotórax hipertensivo; o atraso para imagem leva à parada cardíaca por atividade elétrica sem pulso (AESP).',
      },
      {
        letter: 'C',
        text: 'Realizar intubação orotraqueal imediata com ventilação sob pressão positiva vigorosa.',
        isCorrect: false,
        explanation:
          'Incorreta. A ventilação com pressão positiva sem drenar o pneumotórax hipertensivo agrava o choque e precipita a PCR.',
      },
      {
        letter: 'D',
        text: 'Pericardiocentese subxifoidiana de urgência com agulha para alívio do tamponamento cardíaco.',
        isCorrect: false,
        explanation:
          'Incorreta. No tamponamento o murmúrio vesicular é simétrico e preservado; os achados de desvio de traqueia e timpanismo confirmam pneumotórax.',
      },
    ],
  },

  // --- GINECOLOGIA E OBSTETRÍCIA ---
  {
    id: 'q-go-01',
    specialty: 'Ginecologia e Obstetrícia',
    topic: 'Obstetrícia',
    subtopic: 'Hemorragias da Segunda Metade da Gravidez',
    institution: 'ENARE',
    year: 2024,
    statement:
      'Gestante de 34 anos, secundigesta, primípara, com idade gestacional de 33 semanas e pré-natal irregular, dá entrada no centro obstétrico trazida pelo SAMU com queixa de dor abdominal intensa de início súbito há 1 hora, acompanhada de sangramento vaginal vermelho-escuro em moderada quantidade. Ao exame obstétrico: PA 165x105 mmHg, FC 102 bpm. Altura uterina de 34 cm, tônus uterino acentuadamente aumentado (hipertonia / útero em tábua) com dor extrema à palpação. Batimentos cardiofetais (BCF) audíveis a 100 bpm (bradicardia fetal persistente). Toque vaginal: colo com 2 cm de dilatação, bolsa íntegra e tensa. Diante do quadro, qual é o diagnóstico e a conduta obstétrica imediata?',
    options: [
      {
        letter: 'A',
        text: 'Descolamento prematuro de placenta (DPP); estabilização materna e cesariana de emergência pela via mais rápida.',
      },
      {
        letter: 'B',
        text: 'Placenta prévia centro-total; realizar ultrassonografia transvaginal e aguardar evolução espontânea em repouso.',
      },
      {
        letter: 'C',
        text: 'Rotura uterina iminente (Síndrome de Bandl-Frommel); realizar tocolise imediata com sulfato de magnésio.',
      },
      {
        letter: 'D',
        text: 'Rotura de vasa prévia; realizar amniotomia precoce e aguardar parto normal.',
      },
    ],
    correctOption: 'A',
    generalComment:
      'A tríade de sangramento vaginal vermelho-escuro + dor abdominal súbita intensa + hipertonia uterina ("útero lenhoso/em tábua"), frequentemente associada a síndrome hipertensiva da gestação e sofrimento fetal agudo (bradicardia fetal a 100 bpm), é patognomônica de Descolamento Prematuro de Placenta (DPP). Na presença de sofrimento fetal agudo com feto viável, a interrupção imediata da gestação pela via mais rápida (cesariana de emergência) associada à reposição volêmica é mandatória.',
    optionsExplanations: [
      {
        letter: 'A',
        text: 'Descolamento prematuro de placenta (DPP); estabilização materna e cesariana de emergência pela via mais rápida.',
        isCorrect: true,
        explanation:
          'Correta! O DPP com feto vivo e bradicardiforme exige interrupção imediata por via cirúrgica rápida para salvar mãe e concepto.',
      },
      {
        letter: 'B',
        text: 'Placenta prévia centro-total; realizar ultrassonografia transvaginal e aguardar evolução espontânea em repouso.',
        isCorrect: false,
        explanation:
          'Incorreta. Na placenta prévia o sangramento é vermelho-vivo, indolor e o útero é normotônico e indolor.',
      },
      {
        letter: 'C',
        text: 'Rotura uterina iminente (Síndrome de Bandl-Frommel); realizar tocolise imediata com sulfato de magnésio.',
        isCorrect: false,
        explanation:
          'Incorreta. A paciente não possui cicatriz prévia nem anel de Bandl visível de trabalho de parto obstruído.',
      },
      {
        letter: 'D',
        text: 'Rotura de vasa prévia; realizar amniotomia precoce e aguardar parto normal.',
        isCorrect: false,
        explanation:
          'Incorreta. A rotura de vasa prévia surge imediatamente após a ruptura das membranas com sangue fetal maciço e sem hipertonia materna.',
      },
    ],
  },
  {
    id: 'q-go-02',
    specialty: 'Ginecologia e Obstetrícia',
    topic: 'Ginecologia',
    subtopic: 'Rastreamento e Lesões Precursoras de Câncer de Colo Uterino',
    institution: 'USP-SP',
    year: 2024,
    statement:
      'Mulher de 32 anos comparece à Unidade Básica de Saúde para checar o resultado do seu exame citopatológico de colo uterino (Papanicolau) de rotina. Não apresenta queixas ginecológicas e o exame físico especular foi normal. O laudo citopatológico descreve: "Amostra satisfatória; Lesão Intraepitelial de Alto Grau (HSIL / NIC II-III)". De acordo com as Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero do Ministério da Saúde / INCA, qual é a conduta recomendada?',
    options: [
      {
        letter: 'A',
        text: 'Encaminhar imediatamente para colposcopia; se confirmada lesão suspeita, realizar biópsia dirigida ou considerar método de ver e tratar (EZT).',
      },
      {
        letter: 'B',
        text: 'Repetir a coleta de citopatologia oncótica em 6 meses na própria UBS.',
      },
      {
        letter: 'C',
        text: 'Prescrever creme vaginal de estrogênio conjugado por 3 semanas e colher nova citologia.',
      },
      {
        letter: 'D',
        text: 'Indicar histerectomia total abdominal imediata com linfadenectomia pélvica bilateral.',
      },
    ],
    correctOption: 'A',
    generalComment:
      'Diante de um resultado citológico de HSIL (Lesão Intraepitelial de Alto Grau), o risco subjacente de neoplasia intraepitelial cervical grau 2/3 (NIC 2/3) ou mesmo de carcinoma invasor inicial é expressivo. As diretrizes do Ministério da Saúde e do INCA determinam o encaminhamento imediato para colposcopia. Na colposcopia, se a junção escamocolunar (JEC) for totalmente visível e a lesão for compatível com NIC 2+, pode-se proceder à biópsia ou à exérese da zona de transformação (EZT) sob abordagem de ver e tratar.',
    optionsExplanations: [
      {
        letter: 'A',
        text: 'Encaminhar imediatamente para colposcopia; se confirmada lesão suspeita, realizar biópsia dirigida ou considerar método de ver e tratar (EZT).',
        isCorrect: true,
        explanation:
          'Correta! HSIL exige colposcopia direta e imediata, não sendo admitida conduta expectante com repetição de exame.',
      },
      {
        letter: 'B',
        text: 'Repetir a coleta de citopatologia oncótica em 6 meses na própria UBS.',
        isCorrect: false,
        explanation:
          'Incorreta. Repetição em 6 meses é indicada para ASC-US em mulheres ≥ 30 anos ou LSIL em mulheres ≥ 25 anos, jamais para lesão de alto grau (HSIL).',
      },
      {
        letter: 'C',
        text: 'Prescrever creme vaginal de estrogênio conjugado por 3 semanas e colher nova citologia.',
        isCorrect: false,
        explanation:
          'Incorreta. Essa conduta é utilizada para atrofia genital que dificulta a interpretação de células glandulares ou ASC-US em mulheres pós-menopausadas.',
      },
      {
        letter: 'D',
        text: 'Indicar histerectomia total abdominal imediata com linfadenectomia pélvica bilateral.',
        isCorrect: false,
        explanation:
          'Incorreta. Conduta cirúrgica radical desproporcional sem confirmação histológica de câncer invasor.',
      },
    ],
  },

  // --- PREVENTIVA ---
  {
    id: 'q-prev-01',
    specialty: 'Preventiva',
    topic: 'Epidemiologia',
    subtopic: 'Estudos Epidemiológicos e Medidas de Associação',
    institution: 'SUS-SP',
    year: 2024,
    statement:
      'Pesquisadores pretendem investigar se a exposição crônica ao tabagismo materno durante a gestação aumenta o risco de sibilância recorrente nos primeiros 3 anos de vida dos recém-nascidos. Para isso, selecionaram um grupo de gestantes fumantes e outro grupo similar de gestantes não fumantes atendidas em um centro obstétrico, acompanhando prospectivamente todas as crianças desde o nascimento até completarem 3 anos de idade, avaliando novos episódios de sibilância. Qual é o delineamento epidemiológico adotado e a medida de associação principal a ser calculada?',
    options: [
      {
        letter: 'A',
        text: 'Estudo de Coorte prospectivo; medida de associação principal: Risco Relativo (RR).',
      },
      {
        letter: 'B',
        text: 'Estudo de Caso-Controle; medida de associação principal: Odds Ratio (Razão de Chances).',
      },
      {
        letter: 'C',
        text: 'Estudo Transversal (Seccional); medida de associação principal: Razão de Prevalência.',
      },
      {
        letter: 'D',
        text: 'Ensaio Clínico Randomizado; medida de associação principal: Número Necessário para Tratar (NNT).',
      },
    ],
    correctOption: 'A',
    generalComment:
      'O estudo parte de indivíduos sem o desfecho (recém-nascidos sem sibilância), classificados de acordo com a exposição (mães fumantes vs. não fumantes), e os acompanha longitudinalmente para verificar a incidência de novos casos da doença. Essa é a definição de um Estudo de Coorte. Sendo um estudo de incidência, a principal medida de associação é o Risco Relativo (RR = Incidência nos expostos / Incidência nos não expostos).',
    optionsExplanations: [
      {
        letter: 'A',
        text: 'Estudo de Coorte prospectivo; medida de associação principal: Risco Relativo (RR).',
        isCorrect: true,
        explanation:
          'Correta! Parte da exposição em direção ao desfecho, permitindo o cálculo direto da incidência e do Risco Relativo (RR).',
      },
      {
        letter: 'B',
        text: 'Estudo de Caso-Controle; medida de associação principal: Odds Ratio (Razão de Chances).',
        isCorrect: false,
        explanation:
          'Incorreta. O estudo de caso-controle parte dos doentes (casos) e não doentes (controles) para investigar a exposição passada (retrospectivo), calculando o Odds Ratio.',
      },
      {
        letter: 'C',
        text: 'Estudo Transversal (Seccional); medida de associação principal: Razão de Prevalência.',
        isCorrect: false,
        explanation:
          'Incorreta. O estudo transversal analisa exposição e desfecho simultaneamente no mesmo instante, medindo prevalência.',
      },
      {
        letter: 'D',
        text: 'Ensaio Clínico Randomizado; medida de associação principal: Número Necessário para Tratar (NNT).',
        isCorrect: false,
        explanation:
          'Incorreta. Seria antiético submeter gestantes ao tabagismo intencionalmente de forma randomizada.',
      },
    ],
  },
  {
    id: 'q-prev-02',
    specialty: 'Preventiva',
    topic: 'SUS e Saúde Coletiva',
    subtopic: 'Princípios Doutrinários e Organizacionais do SUS',
    institution: 'ENARE',
    year: 2024,
    statement:
      'Uma equipe de Saúde da Família (eSF) identifica em seu território adscrito que uma comunidade ribeirinha possui maiores dificuldades geográficas de locomoção, menor cobertura vacinal e piores indicadores de mortalidade materno-infantil em relação à população urbana central do município. Para mitigar essa disparidade, a equipe decide instituir uma unidade básica de saúde fluvial com cronograma ampliado de visitas e alocação preferencial de insumos diagnósticos e vacinas para aquela população mais vulnerável. Essa ação da equipe traduz com fidelidade a aplicação de qual princípio do Sistema Único de Saúde (SUS)?',
    options: [
      {
        letter: 'A',
        text: 'Equidade (tratar desigualmente os desiguais, na medida de sua desigualdade, para diminuir disparidades).',
      },
      {
        letter: 'B',
        text: 'Igualdade formal (oferecer exatamente a mesma quantidade de recursos a todos os cidadãos, independentemente da necessidade).',
      },
      {
        letter: 'C',
        text: 'Centralização político-administrativa.',
      },
      {
        letter: 'D',
        text: 'Privatização complementar.',
      },
    ],
    correctOption: 'A',
    generalComment:
      'O princípio doutrinário da Equidade do SUS reconhece que as pessoas e grupos sociais possuem necessidades de saúde distintas e vulnerabilidades desiguais. A equidade preconiza ofertar "mais a quem mais precisa", investindo recursos adicionais onde a carência e o risco são maiores, com o objetivo de reduzir injustiças sociais e desigualdades no acesso à saúde.',
    optionsExplanations: [
      {
        letter: 'A',
        text: 'Equidade (tratar desigualmente os desiguais, na medida de sua desigualdade, para diminuir disparidades).',
        isCorrect: true,
        explanation:
          'Correta! Alocar mais recursos e esforços para as populações em maior vulnerabilidade é a essência do princípio da Equidade.',
      },
      {
        letter: 'B',
        text: 'Igualdade formal (oferecer exatamente a mesma quantidade de recursos a todos os cidadãos, independentemente da necessidade).',
        isCorrect: false,
        explanation:
          'Incorreta. Tratar igualmente situações desiguais perpetua e aprofunda as injustiças sociais em saúde.',
      },
      {
        letter: 'C',
        text: 'Centralização político-administrativa.',
        isCorrect: false,
        explanation:
          'Incorreta. O SUS rege-se pela DESCENTRALIZAÇÃO político-administrativa com direção única em cada esfera de governo.',
      },
      {
        letter: 'D',
        text: 'Privatização complementar.',
        isCorrect: false,
        explanation:
          'Incorreta. A participação do setor privado no SUS ocorre de forma complementar (art. 199 da CF), tendo preferência entidades filantrópicas e sem fins lucrativos.',
      },
    ],
  },
];

// Mapeamento das questões de Doenças Exantemáticas para a interface Question do simulado
const exantematicasAsQuestions: Question[] = QUESTOES_EXANTEMATICAS.map((q) => ({
  id: q.id,
  specialty: 'Pediatria',
  topic: 'DOENÇAS EXANTEMATICAS',
  subtopic: q.subtema || 'Doenças Exantemáticas',
  institution: 'Residência Médica / SBP',
  year: 2024,
  statement: q.enunciado,
  options: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
  })),
  correctOption: q.respostaCorreta,
  generalComment: q.comentario,
  optionsExplanations: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
    isCorrect: alt.id === q.respostaCorreta,
    explanation:
      q.comentariosAlternativas?.[alt.id] ||
      (alt.id === q.respostaCorreta
        ? `Correta. ${q.comentario}`
        : 'Incorreta de acordo com as diretrizes e fisiopatologia clínica.'),
  })),
}));

// Mapeamento das questões de Imunização para a interface Question do simulado
const imunizacaoAsQuestions: Question[] = QUESTOES_IMUNIZACAO.map((q) => ({
  id: q.id,
  specialty: 'Pediatria',
  topic: 'IMUNIZAÇÕES',
  subtopic: q.subtema || 'Imunização',
  institution: 'Residência Médica / SBP',
  year: 2024,
  statement: q.enunciado,
  options: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
  })),
  correctOption: q.respostaCorreta,
  generalComment: q.comentario,
  optionsExplanations: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
    isCorrect: alt.id === q.respostaCorreta,
    explanation:
      q.comentariosAlternativas?.[alt.id] ||
      (alt.id === q.respostaCorreta
        ? `Correta. ${q.comentario}`
        : 'Incorreta de acordo com as diretrizes e fisiopatologia clínica.'),
  })),
}));

// Mapeamento das questões inéditas de ITU Pediátrica para a interface Question do simulado
const ituPediatricaNovasAsQuestions: Question[] = QUESTOES_ITU_PEDIATRICA.map((q) => ({
  id: `ituped-${q.id}`,
  specialty: 'Pediatria',
  topic: 'ITU PEDIATRICO',
  subtopic: q.subtema || 'Infecção do Trato Urinário',
  institution: 'Residência Médica / SBP',
  year: 2024,
  statement: q.enunciado,
  options: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
  })),
  correctOption: q.respostaCorreta,
  generalComment: q.comentario,
  optionsExplanations: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
    isCorrect: alt.id === q.respostaCorreta,
    explanation:
      q.comentariosAlternativas?.[alt.id] ||
      (alt.id === q.respostaCorreta
        ? `Correta. ${q.comentario}`
        : 'Incorreta de acordo com as diretrizes e fisiopatologia clínica.'),
  })),
}));

// Mapeamento das questões de Neonatologia para a interface Question do simulado
const neonatologiaAsQuestions: Question[] = QUESTOES_NEONATOLOGIA.map((q) => ({
  id: `neo-${q.id}`,
  specialty: 'Pediatria',
  topic: 'Neonatologia I (Icterícia Neonatal e Reanimação)',
  subtopic: q.subtema || 'Reanimação Neonatal em Sala de Parto',
  institution: 'Residência Médica / SBP',
  year: 2024,
  statement: q.enunciado,
  options: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
  })),
  correctOption: q.respostaCorreta,
  generalComment: q.comentario,
  optionsExplanations: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
    isCorrect: alt.id === q.respostaCorreta,
    explanation:
      q.comentariosAlternativas?.[alt.id] ||
      (alt.id === q.respostaCorreta
        ? `Correta. ${q.comentario}`
        : 'Incorreta de acordo com as diretrizes e fisiopatologia clínica.'),
  })),
}));

// Mapeamento das questões de Neonatologia 2 para a interface Question do simulado
const neonatologia2AsQuestions: Question[] = QUESTOES_NEONATOLOGIA_2.map((q) => ({
  id: `neo2-${q.id}`,
  specialty: 'Pediatria',
  topic: 'Neonatologia II (Infecções Congênitas e Distúrbios Respiratórios)',
  subtopic: q.subtema || 'Infecções Congênitas: Sífilis e Toxoplasmose',
  institution: 'Residência Médica / MS / SBP',
  year: 2024,
  statement: q.enunciado,
  options: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
  })),
  correctOption: q.respostaCorreta,
  generalComment: q.comentario,
  optionsExplanations: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
    isCorrect: alt.id === q.respostaCorreta,
    explanation:
      q.comentariosAlternativas?.[alt.id] ||
      (alt.id === q.respostaCorreta
        ? `Correta. ${q.comentario}`
        : 'Incorreta de acordo com as diretrizes e fisiopatologia clínica.'),
  })),
}));

// Mapeamento das questões de Puberdade e seus Distúrbios para a interface Question
const puberdadeAsQuestions: Question[] = QUESTOES_PUBERDADE.map((q) => ({
  id: `pub-${q.id}`,
  specialty: 'Pediatria',
  topic: 'Puberdade e seus Distúrbios',
  subtopic: q.subtema || 'Fisiologia do Eixo HHG e Classificação de Tanner',
  institution: 'Residência Médica / SBP / Enare',
  year: 2024,
  statement: q.enunciado,
  options: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
  })),
  correctOption: q.respostaCorreta,
  generalComment: q.comentario,
  optionsExplanations: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
    isCorrect: alt.id === q.respostaCorreta,
    explanation:
      q.comentariosAlternativas?.[alt.id] ||
      (alt.id === q.respostaCorreta
        ? `Correta. ${q.comentario}`
        : 'Incorreta de acordo com as diretrizes e fisiopatologia clínica.'),
  })),
}));

// Mapeamento das questões de Infecções Respiratórias Inferiores para a interface Question
const iraBaixaAsQuestions: Question[] = QUESTOES_IRA_BAIXA.map((q) => ({
  id: `irab-${q.id}`,
  specialty: 'Pediatria',
  topic: 'Infecções Respiratórias Inferiores',
  subtopic: q.subtema || 'Bronquiolite Viral Aguda',
  institution: 'Residência Médica / SBP / Enare',
  year: 2024,
  statement: q.enunciado,
  options: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
  })),
  correctOption: q.respostaCorreta,
  generalComment: q.comentario,
  optionsExplanations: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
    isCorrect: alt.id === q.respostaCorreta,
    explanation:
      q.comentariosAlternativas?.[alt.id] ||
      (alt.id === q.respostaCorreta
        ? `Correta. ${q.comentario}`
        : 'Incorreta de acordo com as diretrizes e evidências clínicas.'),
  })),
}));

// Unifica todas as questões sem duplicatas
// Mapeamento das questões de IRA com Estridor para a interface Question
const estridorAsQuestions: Question[] = QUESTOES_ESTRIDOR.map((q) => ({
  id: `est-${q.id}`,
  specialty: 'Pediatria',
  topic: 'IRA com Estridor',
  subtopic: q.subtema,
  statement: q.enunciado,
  options: q.alternativas.map((alt) => ({
    id: alt.id,
    label: alt.id,
    text: alt.texto,
  })),
  correctOption: q.respostaCorreta,
  generalComment: q.comentario,
  optionsExplanations: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
    isCorrect: alt.id === q.respostaCorreta,
    explanation:
      q.comentariosAlternativas?.[alt.id] ||
      (alt.id === q.respostaCorreta
        ? `Correta. ${q.comentario}`
        : 'Incorreta de acordo com as diretrizes e evidências clínicas.'),
  })),
}));

// Mapeamento das questões de IRA Infecções de Vias Aéreas Superiores para a interface Question
const ivasAsQuestions: Question[] = QUESTOES_IVAS.map((q) => ({
  id: `ivas-${q.id}`,
  specialty: 'Pediatria',
  topic: 'IRA Infecções de Vias Aéreas Superiores',
  subtopic: q.subtema,
  statement: q.enunciado,
  options: q.alternativas.map((alt) => ({
    id: alt.id,
    label: alt.id,
    text: alt.texto,
  })),
  correctOption: q.respostaCorreta,
  generalComment: q.comentario,
  optionsExplanations: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
    isCorrect: alt.id === q.respostaCorreta,
    explanation:
      q.comentariosAlternativas?.[alt.id] ||
      (alt.id === q.respostaCorreta
        ? `Correta. ${q.comentario}`
        : 'Incorreta de acordo com as diretrizes e evidências clínicas.'),
  })),
}));

// Mapeamento das questões de Doenças Gastrointestinais para a interface Question
const gastroPediatricaAsQuestions: Question[] = QUESTOES_GASTRO_PEDIATRICA.map((q) => ({
  id: `gas-${q.id}`,
  specialty: 'Pediatria',
  topic: 'Doenças Gastrointestinais',
  subtopic: q.subtema,
  statement: q.enunciado,
  options: q.alternativas.map((alt) => ({
    id: alt.id,
    label: alt.id,
    text: alt.texto,
  })),
  correctOption: q.respostaCorreta,
  generalComment: q.comentario,
  optionsExplanations: q.alternativas.map((alt) => ({
    letter: alt.id,
    text: alt.texto,
    isCorrect: alt.id === q.respostaCorreta,
    explanation:
      q.comentariosAlternativas?.[alt.id] ||
      (alt.id === q.respostaCorreta
        ? `Correta. ${q.comentario}`
        : 'Incorreta de acordo com as diretrizes e evidências clínicas.'),
  })),
}));

const idsSet = new Set<string>();
const allCombined: Question[] = [];

for (const q of [
  ...cardioPediatricaAsQuestions,
  ...ituPediatricoAsQuestions,
  ...crescimentoPediatricoAsQuestions,
  ...exantematicasAsQuestions,
  ...imunizacaoAsQuestions,
  ...ituPediatricaNovasAsQuestions,
  ...neonatologiaAsQuestions,
  ...neonatologia2AsQuestions,
  ...puberdadeAsQuestions,
  ...iraBaixaAsQuestions,
  ...estridorAsQuestions,
  ...ivasAsQuestions,
  ...gastroPediatricaAsQuestions,
  ...baseStaticQuestions,
]) {
  if (!idsSet.has(q.id)) {
    idsSet.add(q.id);
    allCombined.push(q);
  }
}

export const questoesData: Question[] = allCombined;
export {
  QUESTOES_EXANTEMATICAS,
  QUESTOES_IMUNIZACAO,
  QUESTOES_ITU_PEDIATRICA,
  QUESTOES_NEONATOLOGIA,
  QUESTOES_NEONATOLOGIA_2,
  QUESTOES_PUBERDADE,
  QUESTOES_IRA_BAIXA,
  QUESTOES_ESTRIDOR,
  QUESTOES_IVAS,
  QUESTOES_GASTRO_PEDIATRICA,
};
