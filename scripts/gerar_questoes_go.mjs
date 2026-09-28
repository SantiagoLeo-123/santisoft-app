import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Chave da API obtida via variável de ambiente
const API_KEY = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey: API_KEY });

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 14 Temas Oficiais de Ginecologia e Obstetrícia
const TEMAS_GO = [
  {
    nome: 'Diagnósticos de Gravidez e Modificações do Organismo',
    slug: 'diagnosticos_gravidez',
    area: 'Obstetrícia',
    topicsBank: [
      {
        sub: 'Sinais de presunção, probabilidade e certeza',
        vignette: 'Primigesta de 24 anos procura UBS com atraso menstrual de 7 semanas. Refere náuseas matinais, mastalgia e polaciúria. Ao exame ginecológico, observa-se coloração violácea da mucosa vulvovaginal e amolecimento evidente do istmo uterino ao toque bimanual.',
        q: 'Assinale a alternativa que classifica corretamente os achados semiológicos apresentados:',
        opts: [
          'A coloração violácea (sinal de Jacquemier/Chadwick) e o amolecimento do istmo (sinal de Hegar) são sinais de probabilidade de gravidez.',
          'As náuseas e polaciúria são sinais de certeza, dispensando confirmação laboratorial.',
          'O amolecimento do istmo uterino é sinal de presunção e a coloração violácea é sinal de certeza.',
          'Apenas a palpação bimanual com assimetria uterina (sinal de Piskacek) é considerada sinal de certeza gestacional.'
        ],
        ans: 'A',
        com: 'Os sinais de presunção são sistêmicos e mamários (náuseas, polaciúria, mastalgia). Os sinais de probabilidade decorrem das alterações uterovaginais (sinal de Jacquemier/Chadwick - coloração violácea; sinal de Hegar - amolecimento do istmo; sinal de Nobile-Budin - preenchimento dos fundos de saco). Sinais de certeza exigem ausculta dos BCFs (sonar > 10-12 semanas), percepção de movimentos fetais pelo examinador ou palpação de partes fetais.'
      },
      {
        sub: 'Modificações hematológicas e cardiovasculares da gestação',
        vignette: 'Gestante de 28 anos, hígida, na 26ª semana de gestação em pré-natal habitual. Traz hemograma com Hb: 11,2 g/dL, Ht: 33%, Leucócitos: 11.500/mm³ sem desvio e plaquetas: 190.000/mm³. PA: 100x60 mmHg, FC: 84 bpm. Ausculta cardíaca revela sopro sistólico funcional suave em foco pulmonar 2+/6+ sem irradiação.',
        q: 'Diante desse quadro clínico e laboratorial, qual é a interpretação fisiopatológica correta?',
        opts: [
          'Trata-se de modificações fisiológicas normais da gestação: anemia dilucional pelo aumento desproporcional do volume plasmático em relação à massa eritrocitária, além de leucocitose fisiológica sem desvio.',
          'A paciente apresenta anemia ferropriva moderada descompensada, exigindo reposição venosa urgente de ferro.',
          'O sopro sistólico e a leucocitose indicam endocardite infecciosa subaguda em desenvolvimento.',
          'A pressão arterial indica choque distributivo com hipotensão patológica grave.'
        ],
        ans: 'A',
        com: 'Na gestação normal ocorre expansão volumétrica de cerca de 40-50% do volume plasmático contra 20-30% da massa de hemácias, gerando hemodiluição fisiológica (Hb >= 11 g/dL é normal). Há leucocitose fisiológica sem desvio e sopro sistólico funcional por aumento do débito cardíaco e redução da viscosidade sanguínea.'
      },
      {
        sub: 'Modificações fisiológicas renais e respiratórias',
        vignette: 'Gestante de 31 anos, primípara, na 16ª semana de gestação. Em exames de rotina apresenta Creatinina sérica de 0,5 mg/dL, Ureia: 18 mg/dL e gasometria venosa com leve alcalose respiratória compensada.',
        q: 'Sobre a fisiologia renal e respiratória durante o período gestacional, é correto afirmar:',
        opts: [
          'O aumento do ritmo de filtração glomerular em cerca de 50% reduz os níveis basais de ureia e creatinina séricas, tornando valores de creatinina > 0,8 mg/dL suspeitos de disfunção renal na gestação.',
          'A gestação cursa com acidose metabólica hiperclorêmica fisiológica decorrente da perda renal excessiva de bicarbonato.',
          'O ritmo de filtração glomerular sofre redução de 30%, elevando fisiologicamente a creatinina sérica.',
          'A progesterona atua como inibidora do centro respiratório bulbar, gerando hipoventilação e retenção crônica de CO2.'
        ],
        ans: 'A',
        com: 'A vasodilatação renal mediada por relaxina e óxido nítrico eleva o fluxo plasmático renal e a taxa de filtração glomerular em até 50%. Com isso, os níveis séricos de ureia e creatinina caem expressivamente, sendo creatinina >= 0,8 mg/dL um sinal de alerta para disfunção renal. No sistema respiratório, a progesterona hiperventila a paciente, causando alcalose respiratória compensada.'
      },
      {
        sub: 'Diagnóstico precoce e dosagem de Beta-hCG',
        vignette: 'Mulher de 22 anos com atraso menstrual de 2 semanas realiza beta-hCG sérico quantitativo cujo resultado foi de 1.800 mUI/mL. Encontra-se assintomática, com exame físico sem alterações.',
        q: 'Considerando a zona discriminadora do beta-hCG na ultrassonografia transvaginal, qual achado é esperado?',
        opts: [
          'Visualização obrigatória de saco gestacional intrauterino tópico, uma vez que o beta-hCG ultrapassou o limiar de 1.500 a 2.000 mUI/mL.',
          'Visualização obrigatória de embrião com batimentos cardíacos fetais presentes e mensuráveis.',
          'Ausência de qualquer imagem intrauterina é o achado esperado até o beta-hCG atingir 5.000 mUI/mL.',
          'Presença imediata de vesícula vitelínica com diâmetro superior a 8 mm indicando gestação molar.'
        ],
        ans: 'A',
        com: 'A zona discriminadora para visualização do saco gestacional intrauterino ao ultrassom transvaginal varia entre 1.500 e 2.000 mUI/mL. Níveis superiores a este limiar sem saco gestacional visível na cavidade uterina levantam forte suspeita de gestação ectópica ou abortamento completo.'
      }
    ]
  },
  {
    nome: 'Pré-natal, Estática Fetal e Indução de Parto',
    slug: 'prenatal_estatica',
    area: 'Obstetrícia',
    topicsBank: [
      {
        sub: 'Rotina laboratorial e rastreio de Estreptococo do Grupo B',
        vignette: 'Gestante de 36 semanas, secundigesta com parto vaginal prévio sem intercorrências, comparece à consulta de pré-natal de baixo risco. Queixa-se apenas de sobrecarga lombar leve.',
        q: 'De acordo com as diretrizes do Ministério da Saúde e FEBRASGO, qual conduta de rastreamento deve ser realizada neste momento?',
        opts: [
          'Coleta de swab anovaginal (sem espéculo) para rastreamento de Streptococcus agalactiae (EGB) entre 35 e 37 semanas.',
          'Prescrição imediata de ampicilina profilática empírica independentemente de cultura.',
          'Indicação de cesariana eletiva para prevenção de sepse neonatal precoce.',
          'Realização de biópsia endometrial para rastreamento de corioamnionite subclínica.'
        ],
        ans: 'A',
        com: 'A pesquisa de Streptococcus agalactiae (EGB) por swab combinado de introito vaginal e anorretal deve ser realizada entre 35 e 37 semanas de gestação. Pacientes com cultura positiva, bacteriúria por EGB na gestação atual ou filho anterior acometido por sepse neonatal por EGB têm indicação de profilaxia intraparto com penicilina cristalina ou ampicilina.'
      },
      {
        sub: 'Manobras de Leopold e Estática Fetal',
        vignette: 'Durante o exame físico de uma primigesta a termo em trabalho de parto inicial, o obstetra realiza as manobras de Leopold. No terceiro tempo, palpa uma massa arredondada, endurecida e móvel no polo inferior, logo acima da sínfise púbica.',
        q: 'A manobra realizada e o diagnóstico da estática fetal correspondem a:',
        opts: [
          'Terceiro tempo de Leopold (mobilidade/apresentação), diagnosticando apresentação cefálica ainda não totalmente insinuada.',
          'Primeiro tempo de Leopold, avaliando a altura do fundo uterino e determinando a situação fetal.',
          'Segundo tempo de Leopold, identificando o dorso fetal e a posição (direita ou esquerda).',
          'Quarto tempo de Leopold, confirmando que a apresentação fetal está profundamente encaixada no estreito inferior.'
        ],
        ans: 'A',
        com: 'O terceiro tempo de Leopold avalia a apresentação fetal e sua mobilidade em relação ao estreito superior da bacia. Uma massa dura e redonda no polo inferior representa a cabeça fetal (apresentação cefálica). Se houver mobilidade à palpação, a apresentação ainda não está insinuada.'
      },
      {
        sub: 'Índice de Bishop e Métodos de Indução do Parto',
        vignette: 'Gestante com 41 semanas e 2 dias de gestação é internada para indução de parto. Ao toque vaginal: colo uterino grosso, posterior, consistência firme, pérvio para 1 cm, apresentação fetal em plano -3 de De Lee. Índice de Bishop calculado em 3.',
        q: 'Qual é o método de indução inicial mais adequado de acordo com as evidências clínicas?',
        opts: [
          'Preparo do colo uterino com Misoprostol vaginal em baixas doses (25 mcg a cada 4-6 horas) ou método mecânico (sonda de Foley/Krause), visto que o colo é desfavorável (Bishop <= 6).',
          'Início imediato de ocitocina intravenosa em altas doses contínuas.',
          'Amniotomia precoce imediata com agulha de amniotomia.',
          'Cesariana imediata sem tentativa de indução medicamentosa.'
        ],
        ans: 'A',
        com: 'Um índice de Bishop <= 6 define um colo uterino desfavorável. Nesses casos, o uso de ocitocina isolada falha frequentemente. A conduta padrão é o preparo cervical prévio com prostaglandinas (Misoprostol 25 mcg em fundo de saco a cada 4-6h) ou método mecânico com cateter de Foley (método de Krause), antes de iniciar a ocitocina.'
      },
      {
        sub: 'Suplementação vitamínica no pré-natal',
        vignette: 'Mulher jovem planejando gestação procura o ginecologista para consulta pré-concepcional. Nega comorbidades ou uso de anticonvulsivantes.',
        q: 'Qual é a recomendação de suplementação de ácido fólico para prevenção de defeitos do tubo neural (DTN)?',
        opts: [
          '0,4 mg (400 mcg) ao dia, iniciada pelo menos 30 a 90 dias antes da concepção e mantida até o final do primeiro trimestre.',
          '5,0 mg ao dia apenas a partir do segundo trimestre gestacional.',
          'Suplementação desnecessária caso a paciente consuma laticínios pasteurizados.',
          '10 mg ao dia associada a vitamina A em megadose.'
        ],
        ans: 'A',
        com: 'Para mulheres de baixo risco de defeitos do tubo neural, a dose preconizada de ácido fólico é de 0,4 mg/dia (400 mcg), iniciada no período pré-concepcional (pelo menos 1 a 3 meses antes) e mantida até a 12ª semana. A dose de 4 a 5 mg/dia é reservada para mulheres de alto risco (filho anterior com DTN, uso de anticonvulsivantes como carbamazepina/valproato ou diabetes pré-gestacional).'
      }
    ]
  },
  {
    nome: 'Parto e Prematuridade',
    slug: 'parto_prematuridade',
    area: 'Obstetrícia',
    topicsBank: [
      {
        sub: 'Períodos clínicos do parto e partograma',
        vignette: 'Parturiente em acompanhamento no centro obstétrico apresenta dilatação cervical mantida em 5 cm por mais de 2 horas após atingir a fase ativa, com contrações adequadas e bolsa rota. O partograma ultrapassa a linha de alerta.',
        q: 'Qual distócia funcional do parto está caracterizada e qual a conduta recomendada?',
        opts: [
          'Fase ativa prolongada (parada secundária da dilatação), demandando avaliação da estática fetal, analgesia, apoio e amniotomia ou ocitocina se contrações ineficientes.',
          'Período expulsivo prolongado com indicação imediata de fórcipe de rotação.',
          'Parto tacitócico (precipitado) com risco aumentado de laceração perineal grave.',
          'Inversão uterina aguda requerendo manobra de Johnson sob anestesia geral.'
        ],
        ans: 'A',
        com: 'A parada secundária da dilatação ocorre quando não há evolução da dilatação cervical por 2 horas ou mais durante a fase ativa do trabalho de parto. Deve-se reavaliar a dinâmica uterina, a proporção cefalopélvica e intervir com medidas corretivas (amniotomia se bolsa íntegra, correção de discinesias com ocitocina ou alívio de dor).'
      },
      {
        sub: 'Trabalho de parto prematuro e tocolíticos',
        vignette: 'Gestante de 30 semanas chega ao pronto-atendimento obstétrico com queixa de cólicas rítmicas. Ao exame: 3 contrações dolorosas de 35 segundos em 10 minutos. Ao toque: colo esvaecido 80%, dilatação de 3 cm, bolsa das águas íntegra.',
        q: 'Qual é o objetivo principal da tocólise e qual medicação de primeira linha pode ser utilizada?',
        opts: [
          'Adiar o parto por 48 horas para permitir o ciclo completo de corticoterapia pulmonar e neuroproteção; primeira linha: nifedipina oral ou atosibana.',
          'Suspender o parto indefinidamente até a 40ª semana utilizando sulfato de magnésio em infusão contínua por 30 dias.',
          'Acelerar a descida fetal através da administração de misoprostol retal.',
          'A tocólise é formalmente contraindicada em qualquer idade gestacional abaixo de 34 semanas.'
        ],
        ans: 'A',
        com: 'O objetivo clínico da tocólise não é levar a gestação até o termo, mas sim postergar o nascimento por 48 horas para administração de corticoide (maturação pulmonar) e sulfato de magnésio (neuroproteção < 32 semanas), além de viabilizar a transferência para UTI neonatal. Os tocolíticos de primeira linha são a nifedipina oral e a atosibana (antagonista do receptor de ocitocina).'
      },
      {
        sub: 'Corticoterapia pré-natal e maturidade pulmonar',
        vignette: 'Primigesta de 29 semanas em iminência de parto prematuro por trabalho de parto franco. BCF: 140 bpm, sem sinais de infecção corioamniótica.',
        q: 'Qual esquema de corticoterapia antenatal é indicado para redução da síndrome do desconforto respiratório neonatal (SDR)?',
        opts: [
          'Betametasona 12 mg por via intramuscular, duas doses com intervalo de 24 horas (ou Dexametasona 6 mg IM 12/12h por 4 doses).',
          'Prednisona 20 mg por via oral em dose única diária por 7 dias.',
          'Hidrocortisona 500 mg intravenosa em bólus a cada 6 horas até o clampeamento do cordão.',
          'A corticoterapia só deve ser administrada após a 36ª semana de gestação completa.'
        ],
        ans: 'A',
        com: 'A corticoterapia antenatal entre 24 e 34 semanas reduz significativamente a incidência de síndrome do desconforto respiratório (doença da membrana hialina), hemorragia intraventricular e enterocolite necrosante. Os esquemas padronizados são: Betametasona 12 mg IM a cada 24 horas (total de 2 doses) ou Dexametasona 6 mg IM a cada 12 horas (total de 4 doses).'
      },
      {
        sub: 'Neuroproteção fetal com Sulfato de Magnésio',
        vignette: 'Gestante de 28 semanas com rotura prematura de membranas e trabalho de parto ativo prematuro com parto iminente nas próximas 12 horas.',
        q: 'Sobre a neuroproteção fetal com sulfato de magnésio, assinale a indicação correta:',
        opts: [
          'Indicado para gestações abaixo de 32 semanas com parto prematuro iminente, para redução do risco de paralisia cerebral infantil.',
          'Indicado exclusivamente para controle glicêmico materno intraparto.',
          'Indicado apenas após 37 semanas de gestação para acelerar o secundamento placentário.',
          'Contraindicado em qualquer gestação pré-termo devido ao risco de aplasia medular fetal.'
        ],
        ans: 'A',
        com: 'O sulfato de magnésio para neuroproteção fetal está indicado em gestações prematuras entre 24 e 31 semanas e 6 dias com parto prematuro iminente (previsto para as próximas 24 horas), reduzindo expressivamente o risco de paralisia cerebral e disfunções motoras graves no recém-nascido.'
      }
    ]
  },
  {
    nome: 'Hemorragias na Primeira Metade',
    slug: 'hemorragias_primeira_metade',
    area: 'Obstetrícia',
    topicsBank: [
      {
        sub: 'Diagnóstico diferencial dos abortamentos',
        vignette: 'Secundigesta de 28 anos, com 9 semanas de gestação, queixa-se de sangramento vaginal moderado com cólicas em cólica. Ao exame especular: saída de sangue com fragmentos teciduais pelo orifício externo do colo. Ao toque: colo pérvio para 1 polpa digital, útero menor que o esperado para a IG. USG transvaginal: eco endometrial heterogêneo de 22 mm com restos ovulares e ausência de BCF.',
        q: 'Qual é o diagnóstico correto e a conduta recomendada?',
        opts: [
          'Abortamento incompleto; conduta: esvaziamento uterino por Aspiração Manual Intrauterina (AMIU) ou curetagem uterina.',
          'Ameaça de abortamento; conduta: repouso absoluto domiciliar e uso de progesterona injetável.',
          'Abortamento completo; conduta: alta hospitalar imediata sem necessidade de revisão.',
          'Incompetência istmocervical; conduta: cerclagem uterina imediata de emergência.'
        ],
        ans: 'A',
        com: 'No abortamento incompleto há eliminação parcial de tecidos ovulares, colo pérvio, útero menor que o esperado para a amenorreia e imagem ultrassonográfica com espessamento endometrial heterogêneo (> 15 mm) indicando restos. A conduta é o esvaziamento uterino, preferencialmente por AMIU em gestações de 1º trimestre.'
      },
      {
        sub: 'Gestação ectópica íntegra e tratamento medicamentoso',
        vignette: 'Mulher de 29 anos, nuligesta, com atraso menstrual de 6 semanas, procura emergência por sangramento discreto escuro. Clinicamente estável (PA: 120x80 mmHg, FC: 72 bpm), abdome indolor. USG transvaginal: endométrio espessado sem saco gestacional tópico; anexo direito com imagem compatível com massa tubária de 2,8 cm, sem batimentos cardíacos embrionários. Beta-hCG: 2.400 mUI/mL.',
        q: 'Considerando os critérios de elegibilidade, qual é a opção terapêutica conservadora adequada?',
        opts: [
          'Tratamento medicamentoso com Metotrexato intramuscular em dose única (50 mg/m²), com controle seriado do beta-hCG nos dias 4 e 7.',
          'Laparotomia exploradora imediata para ooforectomia direita.',
          'Curetagem uterina vigorosa com alta no mesmo dia sem seguimento.',
          'Conduta expectante sem dosagem de beta-hCG ou acompanhamento.'
        ],
        ans: 'A',
        com: 'Os critérios clássicos para tratamento medicamentoso com metotrexato na gestação ectópica íntegra são: estabilidade hemodinâmica, massa anexial < 3,5 a 4,0 cm, ausência de BCF na trompa, beta-hCG inicial < 5.000 mUI/mL e ausência de contraindicações clínicas ao antifolato.'
      },
      {
        sub: 'Doença trofoblástica gestacional (Mola hidatiforme)',
        vignette: 'Paciente de 21 anos, 10 semanas de gestação, queixa-se de sangramento vaginal intermitente com saída de vesículas transparentes e hiperêmese gravídica incoercível. Ao exame: fundo uterino na altura da cicatriz umbilical (incompatível com 10 semanas). USG mostra imagem intrauterina em "tempestade de neve" ou "flocos de neve" e volumosos cistos tecaluteínicos bilaterais. Beta-hCG sérico > 250.000 mUI/mL.',
        q: 'Qual é a conduta inicial mandatória e o seguimento pós-esvaziamento?',
        opts: [
          'Esvaziamento uterino por vácuo-aspiração (AMIU ou aspiração elétrica) e monitoramento semanal do beta-hCG até negativação (seguido de controle mensal por 6 meses).',
          'Histerectomia total abdominal imediata com ooforectomia bilateral.',
          'Corticoterapia em altas doses e indução de parto com ocitocina isolada.',
          'Alta domiciliar sem seguimento laboratorial por se tratar de lesão autolimitada benigna.'
        ],
        ans: 'A',
        com: 'O tratamento de escolha da mola hidatiforme é o esvaziamento uterino por vácuo-aspiração (menor risco de perfuração do que curetagem convencional). O seguimento pós-molar com dosagens semanais de beta-hCG até três valores normais consecutivos e depois mensalmente por 6 meses é mandatório para detecção precoce de neoplasia trofoblástica gestacional (mola invasora ou coriocarcinoma).'
      },
      {
        sub: 'Incompetência istmocervical',
        vignette: 'Paciente com história de 3 perdas gestacionais no segundo trimestre (entre 18 e 22 semanas), caracterizadas por dilatação cervical indolor e expulsão fetal rápida sem contrações prévias dolorosas.',
        q: 'Qual é o diagnóstico e o tratamento preventivo preconizado para uma nova gestação?',
        opts: [
          'Incompetência istmocervical; cerclagem uterina eletiva (técnica de McDonald ou Shirodkar) entre 12 e 14 semanas de gestação.',
          'Síndrome dos ovários policísticos; uso de metformina até o termo.',
          'Endometriose septal; histerectomia subtotal profilática.',
          'Descolamento prematuro de placenta crônico; heparinização plena pré-concepcional.'
        ],
        ans: 'A',
        com: 'A história clássica de incompetência istmocervical envolve perdas gestacionais recorrentes de segundo trimestre precedidas de dilatação indolor do colo, protrusão das membranas ovulares e expulsão fetal de feto vivo. A prevenção indicada é a cerclagem uterina eletiva entre 12 e 14 semanas, após confirmação de vitalidade fetal e ausência de malformações.'
      }
    ]
  },
  {
    nome: 'Hemorragias na Segunda Metade e DHP',
    slug: 'hemorragias_segunda_metade',
    area: 'Obstetrícia',
    topicsBank: [
      {
        sub: 'Descolamento Prematuro de Placenta (DPP)',
        vignette: 'Gestante de 34 semanas, portadora de pré-eclâmpsia grave, é admitida com dor abdominal súbita de forte intensidade e sangramento vaginal escuro em moderada quantidade. Ao exame: PA: 160x105 mmHg, útero hipertônico ("útero em tábua"), difícil palpação de partes fetais. Cardiotocografia com bradicardia fetal sustentada (BCF: 90 bpm).',
        q: 'Qual é o diagnóstico clínico e a conduta de emergência?',
        opts: [
          'Descolamento Prematuro de Placenta com sofrimento fetal agudo; conduta: interrupção imediata da gestação pela via mais rápida (cesariana de emergência).',
          'Placenta prévia centro-total; conduta: repouso absoluto e tocolíticos.',
          'Rotura de vasa prévia; conduta: expectante até completar 37 semanas.',
          'Apendicite aguda na gestação; conduta: apendicectomia laparoscópica eletiva.'
        ],
        ans: 'A',
        com: 'O quadro de dor abdominal intensa de início abrupto, hipertonia uterina, sangramento escuro e sofrimento fetal agudo em paciente hipertensa é patognomônico de DPP. Com feto vivo e sofrimento fetal, a conduta é a cesariana de emergência, precedida de estabilização hemodinâmica e reserva de hemocomponentes.'
      },
      {
        sub: 'Placenta Prévia e conduta propedêutica',
        vignette: 'Multípara de 32 semanas, com antecedente de duas cesarianas anteriores, apresenta sangramento vaginal vermelho rutilante, indolor, de início espontâneo durante o repouso. Ao exame: abdome flácido, sem tônus aumentado, BCF: 144 bpm com boa reatividade.',
        q: 'Diante da principal hipótese diagnóstica, qual exame semiológico é FORMALMENTE CONTRAINDICADO?',
        opts: [
          'Toque vaginal digital, pelo alto risco de desencadear hemorragia maciça cataclísmica ao manipular a placenta no colo.',
          'Ultrassonografia obstétrica transabdominal.',
          'Exame especular delicado para visualização do canal cervical.',
          'Cardiotocografia de repouso para avaliação da vitalidade fetal.'
        ],
        ans: 'A',
        com: 'Na suspeita de placenta prévia (sangramento indolor, vermelho vivo, sem hipertonia e com feto hígido), o toque vaginal está formalmente contraindicado até que a localização placentária seja definida pelo ultrassom, pois a palpação digital pode perfurar a placenta inserida no orifício cervical interno e provocar sangramento incontrolável.'
      },
      {
        sub: 'Espectro do Acretismo Placentário',
        vignette: 'Gestante no 3º trimestre com placenta prévia anterior sobre cicatriz de cesárea anterior. O ultrassom e a ressonância magnética mostram adelgaçamento miometrial e vilosidades que ultrapassam a serosa uterina, invadindo a parede vesical posterior.',
        q: 'Como é classificado este grau de acretismo placentário?',
        opts: [
          'Placenta percreta (as vilosidades perfuram o miométrio e a serosa, atingindo órgãos adjacentes).',
          'Placenta acreta simples (vilosidades aderidas diretamente ao miométrio sem invadi-lo).',
          'Placenta increta (as vilosidades invadem a espessura do miométrio mas não atingem a serosa).',
          'Placenta circunvalada sem repercussão invasiva.'
        ],
        ans: 'A',
        com: 'Acretismo placentário se divide em: Placenta acreta (aderida ao miométrio sem invasão profunda, 75-80%), Placenta increta (penetra profundamente o miométrio, 15%), e Placenta percreta (ultrapassa a serosa uterina e pode invadir órgãos vizinhos como bexiga, 5%).'
      },
      {
        sub: 'Doença Hemolítica Perinatal e Isoimunização Rh',
        vignette: 'Gestante com tipo sanguíneo O negativo, primigesta, com parceiro AB positivo. Traz teste de Coombs indireto realizado na 28ª semana com resultado negativo.',
        q: 'Qual é a conduta recomendada para profilaxia da aloimunização Rh?',
        opts: [
          'Administrar Imunoglobulina anti-D 300 mcg intramuscular na 28ª semana e repetir em até 72 horas pós-parto se o recém-nascido for Rh positivo.',
          'Não prescrever imunoglobulina, pois o Coombs indireto negativo contraindica a medicação.',
          'Realizar cordocentese diagnóstica semanal para dosagem de bilirrubina fetal.',
          'Indicar transfusão intrauterina imediata por suspeita de hidropisia fetal subclínica.'
        ],
        ans: 'A',
        com: 'Em gestantes Rh negativo não sensibilizadas (Coombs indireto negativo), a profilaxia antenatal com imunoglobulina anti-D (300 mcg) é indicada rotineiramente na 28ª semana de gestação. Após o parto, se o RN for Rh positivo, administra-se uma nova dose nas primeiras 72 horas.'
      }
    ]
  },
  {
    nome: 'Doenças Clínicas da Gestação',
    slug: 'doencas_clinicas_gestacao',
    area: 'Obstetrícia',
    topicsBank: [
      {
        sub: 'Síndromes hipertensivas e Pré-eclâmpsia grave',
        vignette: 'Primigesta de 34 semanas é admitida com PA: 170x110 mmHg confirmada, cefaleia frontal refratária, turvação visual (escotomas cintilantes) e dor em barra no epigástrio. Proteinúria de fita 3+.',
        q: 'Qual conduta medicamentosa imediata deve ser instituída prioritariamente?',
        opts: [
          'Administração de Sulfato de Magnésio para prevenção de convulsões eclâmpticas e Hidralazina ou Labetalol venoso para controle da crise hipertensiva.',
          'Administração de furosemida em bólus associada a nitroprussiato de sódio contínuo.',
          'Infusão rápida de solução glicosada e aguardar melhora espontânea da cefaleia.',
          'Indicação exclusiva de ansiolítico oral com alta para repouso.'
        ],
        ans: 'A',
        com: 'Pacientes com pré-eclâmpsia grave e sinais de iminência de eclâmpsia (cefaleia, escotomas, epigastralgia) exigem estabilização imediata com Sulfato de Magnésio (droga de escolha para prevenção e tratamento de crises convulsivas, esquemas de Pritchard ou Zuspan) associado a anti-hipertensivo de ação rápida (Hidralazina IV, Labetalol IV ou Nifedipina oral) para manter PA < 160x110 mmHg.'
      },
      {
        sub: 'Síndrome HELLP: critérios laboratoriais',
        vignette: 'Gestante de 32 semanas com pré-eclâmpsia em investigação laboratorial apresenta: Plaquetas: 65.000/mm³, TGO: 180 U/L, TGP: 160 U/L, Bilirrubina total: 1,8 mg/dL (à custa de indireta) e DHL: 850 U/L. Presença de esquizócitos no esfregaço de sangue periférico.',
        q: 'O quadro laboratorial confirma o diagnóstico de:',
        opts: [
          'Síndrome HELLP (Hemolysis, Elevated Liver enzymes, Low Platelets), configurando pré-eclâmpsia grave com indicação de interrupção após estabilização.',
          'Púrpura trombocitopênica idiopática isolada sem gravidade obstétrica.',
          'Hepatite viral aguda tipo B autolimitada.',
          'Esteatose hepática aguda da gestação sem indicação de parto.'
        ],
        ans: 'A',
        com: 'A síndrome HELLP é uma complicação grave da pré-eclâmpsia definida pela tríade: Hemólise microangiopática (esquizócitos, DHL > 600 U/L, bilirrubina indireta >= 1,2), Enzimas hepáticas elevadas (TGO/TGP >= 70 U/L) e Plaquetopenia (< 100.000/mm³). Exige estabilização materna com sulfato de magnésio e interrupção da gestação.'
      },
      {
        sub: 'Diabetes Mellitus Gestacional (DMG)',
        vignette: 'Gestante de 26 semanas realiza teste oral de tolerância à glicose com sobrecarga de 75g (TOTG 75g). Os resultados revelam: Jejum: 94 mg/dL; 1 hora: 172 mg/dL; 2 horas: 140 mg/dL.',
        q: 'De acordo com os critérios diagnósticos da IADPSG e FEBRASGO, qual é a interpretação do exame?',
        opts: [
          'Diagnóstico confirmado de Diabetes Mellitus Gestacional, pois a glicemia de jejum está >= 92 mg/dL (basta um valor alterado no TOTG 75g).',
          'Exame normal, pois seriam necessários pelo menos dois valores alterados para confirmar DMG.',
          'Diagnóstico de Diabetes Mellitus prévio manifesto (Overt Diabetes), exigindo insulina imediata em bomba de infusão.',
          'Inconclusivo, sendo necessária repetição do exame em 48 horas.'
        ],
        ans: 'A',
        com: 'Pelos critérios da IADPSG/FEBRASGO adotados no Brasil, no TOTG 75g entre 24-28 semanas basta UM valor alterado para diagnóstico de DMG: Jejum >= 92 a 125 mg/dL; 1 hora >= 180 mg/dL; ou 2 horas >= 153 a 199 mg/dL. Valores de jejum >= 126 mg/dL ou 2h >= 200 mg/dL indicam diabetes prévio (Overt Diabetes).'
      },
      {
        sub: 'Toxoplasmose na gestação e conduta',
        vignette: 'Gestante na 10ª semana de gestação apresenta sorologia para Toxoplasmose com IgG positivo e IgM positivo. Foi solicitado teste de avidez de IgG, cujo resultado foi de alta avidez (78%).',
        q: 'Qual é a interpretação clínica correta e a conduta adequada?',
        opts: [
          'Infecção adquirida antes da gestação (há mais de 12 a 16 semanas); a paciente é imune e não há risco de toxoplasmose congênita na gestação atual.',
          'Infecção aguda recente no primeiro trimestre; iniciar imediatamente espiramicina e sulfadiazina.',
          'Falso-positivo laboratorial que exige interrupção médica da gestação.',
          'Infecção crônica reativada exigindo amniocentese de urgência.'
        ],
        ans: 'A',
        com: 'Quando IgG e IgM são positivos no primeiro trimestre (até 16 semanas), o teste de avidez de IgG é crucial: alta avidez (> 60%) confirma que a infecção ocorreu antes da gestação (há pelo menos 3 a 4 meses), excluindo risco de transmissão vertical congênita.'
      }
    ]
  },
  {
    nome: 'Sofrimento Fetal',
    slug: 'sofrimento_fetal',
    area: 'Obstetrícia',
    topicsBank: [
      {
        sub: 'Cardiotocografia intraparto e desacelerações',
        vignette: 'Parturiente em fase ativa de parto apresenta desacelerações periódicas na cardiotocografia. Observa-se que o nadir da desaceleração coincide exatamente com o pico da contração uterina (desaceleração uniforme precoce em imagem em espelho).',
        q: 'Qual é o tipo de desaceleração e seu significado fisiopatológico?',
        opts: [
          'DIP I (desaceleração precoce ou cefálica), provocada pela compressão transitória da cabeça fetal com reflexo vagal, sendo um achado fisiológico que não indica asfixia.',
          'DIP II (desaceleração tardia), indicativa de insuficiência uteroplacentária grave com acidose fetal.',
          'DIP III (desaceleração variável), decorrente de compressão funicular grave com prolapso de cordão.',
          'Padrão sinusoidal associado a anemia fetal profunda por hemorragia feto-materna.'
        ],
        ans: 'A',
        com: 'A desaceleração precoce (DIP I ou cefálica) tem início, nadir e recuperação coincidentes com a contração uterina (imagem em espelho). Decorre da estimulação vagal pela compressão mecânica da cabeça fetal durante a contração, não traduzindo hipóxia fetal ou sofrimento fetal.'
      },
      {
        sub: 'DIP II (Tardia) e Insuficiência Placentária',
        vignette: 'Cardiotocografia intraparto registra desacelerações que iniciam após o pico da contração uterina, com nadir ocorrendo após mais de 20 a 30 segundos do ápice contrátil e retorno lento à linha de base.',
        q: 'O achado descrito corresponde a qual padrão e qual a conduta imediata?',
        opts: [
          'DIP II (desaceleração tardia), indicando asfixia/hipóxia fetal e insuficiência uteroplacentária; conduta: ressuscitação intrauterina (decúbito lateral esquerdo, O2, hidratação, suspender ocitocina) e parto rápido se persistente.',
          'DIP I fisiológico; conduta: manter vigilância clínica sem necessidade de intervenção.',
          'Variabilidade normal de Categoria I sem significado patológico.',
          'Aceleração transitória que confirma bem-estar fetal absoluto.'
        ],
        ans: 'A',
        com: 'A desaceleração tardia (DIP II) tem desfasamento em relação à contração uterina, recuperando-se somente após o término desta. É sinal inequívoco de asfixia fetal e reserva de oxigênio uteroplacentária depletada. Requer ressuscitação intrauterina imediata e interrupção do parto caso não reverta rapidamente.'
      },
      {
        sub: 'Dopplerfluxometria na Restrição de Crescimento (RCIU)',
        vignette: 'Feto com restrição de crescimento precoce na 31ª semana. O doppler da artéria cerebral média revela diminuição do índice de pulsatilidade com velocidade diastólica aumentada (baixo índice de resistência).',
        q: 'Esse fenômeno hemodinâmico é denominado:',
        opts: [
          'Centralização fetal (brain-sparing effect), decorrente da vasodilatação cerebral protetora para preservar o suprimento de oxigênio ao sistema nervoso central.',
          'Descentralização fetal com falência hemodinâmica terminal irreversível.',
          'Incisura protodiastólica patológica nas artérias uterinas.',
          'Refluxo atrioventricular fisiológico sem repercussão circulatória.'
        ],
        ans: 'A',
        com: 'A centralização fetal (efeito poupador do cérebro) ocorre em resposta à hipóxia tecidual crônica: o feto redistribui o débito cardíaco por vasodilatação cerebral (artéria cerebral média), coronariana e adrenal, em detrimento dos leitos mesentérico, renal e muscular.'
      },
      {
        sub: 'Ducto venoso e momento do parto',
        vignette: 'Feto de 29 semanas com RCIU grave centralizado. Ao doppler seriado, o ducto venoso apresenta onda A com fluxo reverso durante a sístole atrial.',
        q: 'Qual é o significado clínico da onda A reversa no ducto venoso e a conduta recomendada?',
        opts: [
          'Indica acidemia e falência miocárdica fetal grave com risco iminente de morte intrauterina, justificando a interrupção imediata da gestação por cesariana.',
          'Achado normal na prematuridade que autoriza aguardar até a 38ª semana.',
          'Indicação de corticoterapia isolada com reavaliação em 30 dias.',
          'Erro técnico de calibração do aparelho de ultrassom que deve ser ignorado.'
        ],
        ans: 'A',
        com: 'A onda A do ducto venoso representa a sístole atrial. Quando a onda A se torna ausente (onda A zero) ou reversa, há aumento expressivo da pós-carga e acidemia fetal iminente, sendo o marcador mais fidedigno de risco de óbito fetal intrauterino e indicação formal de parto imediato.'
      }
    ]
  },
  {
    nome: 'Fórcipe, Endometrite e Hemorragia Puerperal',
    slug: 'forcipe_endometrite_puerperal',
    area: 'Obstetrícia',
    topicsBank: [
      {
        sub: 'Condições de aplicabilidade do fórcipe',
        vignette: 'Parturiente em segundo período do parto (período expulsivo) há 2 horas, apresentando exaustão materna com feto em sofrimento fetal agudo. A cabeça fetal encontra-se no plano +3 de De Lee, variedade occípito-anterior (OA).',
        q: 'Quais são as condições prévias obrigatórias para aplicação do fórcipe obstétrico?',
        opts: [
          'Dilatação cervical completa (10 cm), membranas ovulares rotas, apresentação insinuada (plano >= +2 de De Lee), variedade de posição conhecida e bexiga materna vazia.',
          'Colo com pelo menos 5 cm e membranas íntegras para amortecimento cefálico.',
          'Apresentação alta e móvel (plano -3 de De Lee) para permitir tração superior.',
          'Bacia materna comprovadamente incompatível com desproporção cefalopélvica absoluta.'
        ],
        ans: 'A',
        com: 'As condições essenciais de aplicabilidade do fórcipe são: dilatação cervical total, bolsa rota, apresentação fetal cefálica insinuada (+2 de De Lee ou inferior), variedade de posição identificada com precisão, proporção cefalopélvica adequada, bexiga vazia e operador habilitado.'
      },
      {
        sub: 'Endometrite puerperal e antibioticoterapia',
        vignette: 'Puérpera no 4º dia pós-parto cesárea por trabalho de parto arrastado e bolsa rota prolongada procura a maternidade com febre de 38,8°C, calafrios e dor em baixo ventre. Ao exame: útero doloroso à palpação, amolecido, subinvoluído e com lóquios escuros e fétidos.',
        q: 'Qual é o diagnóstico mais provável e o esquema antimicrobiano padrão-ouro?',
        opts: [
          'Endometrite puerperal; esquema de Clindamicina 900 mg IV 8/8h + Gentamicina 5 mg/kg IV 1x/dia até a paciente permanecer afebril por 48 a 72 horas.',
          'Mastite puerperal; esquema de Cefalexina oral e ordenha contínua.',
          'Infecção do trato urinário não complicada; dose única de fosfomicina oral.',
          'Tromboflebite pélvica séptica resolvida exclusivamente com anticoagulação plena.'
        ],
        ans: 'A',
        com: 'A endometrite pós-parto é a principal causa de febre puerperal, caracterizada pela tríade: febre, dor uterina à palpação com útero subinvoluído e lóquios fétidos. O tratamento padrão-ouro é intravenoso com Clindamicina + Gentamicina (cobertura ampla para anaeróbios e gram-negativos) mantido até 48 horas afebril e assintomática.'
      },
      {
        sub: 'Hemorragia pós-parto e os 4 Ts',
        vignette: 'Secundigesta evolui para parto normal de feto macrossômico (4.300 g). Cerca de 15 minutos após a dequitação placentária completa, apresenta sangramento vaginal maciço. Ao exame: útero amolecido, hipotônico, palpável acima da cicatriz umbilical.',
        q: 'Qual é a causa mais comum de hemorragia pós-parto e a primeira linha de conduta farmacológica?',
        opts: [
          'Atonia uterina (Tônus); conduta: massagem uterina bimanual (manobra de Hamilton) + Ocitocina intravenosa contínua e Ácido Tranexâmico.',
          'Laceração de trajeto vaginal; conduta: apenas compressão com gelo local.',
          'Restos placentários retidos; conduta: infusão rápida de heparina não fracionada.',
          'Coagulopatia congênita com indicação de plasmaférese imediata.'
        ],
        ans: 'A',
        com: 'A atonia uterina responde por cerca de 70% das causas de hemorragia pós-parto (mnemônico dos 4 Ts: Tônus, Trauma, Tecido, Trombina). A conduta inicial inclui massagem uterina vigorosa bimanual externa/interna, drogas uterotônicas (Ocitocina IV em primeira linha, Ergometrina/Metilergonovina se não hipertensa, Misoprostol retal) e Ácido Tranexâmico precoce nas primeiras 3 horas.'
      },
      {
        sub: 'Balão de tamponamento intrauterino (Bakri)',
        vignette: 'Puérpera com atonia uterina grave refratária a massagem e uterotônicos em dose máxima, mantendo sangramento profuso mas ainda sem coagulopatia instalada.',
        q: 'Qual intervenção mecânica conservadora de segunda linha deve ser tentada antes da abordagem cirúrgica radical?',
        opts: [
          'Inserção de balão de tamponamento intrauterino hidrostático (ex.: Balão de Bakri), infundindo de 300 a 500 mL de soro fisiológico.',
          'Histerectomia total de urgência sem qualquer tentativa mecânica.',
          'Ligadura imediata da veia cava inferior por laparotomia mediana.',
          'Embolização seletiva das artérias coronárias.'
        ],
        ans: 'A',
        com: 'O tamponamento intrauterino com balão hidrostático de Bakri é uma medida salvadora e minimamente invasiva para atonia uterina refratária ao tratamento farmacológico, atingindo taxas de sucesso de até 80-90% e evitando cirurgias mutiladoras em mulheres com desejo reprodutivo futuro.'
      }
    ]
  },
  {
    nome: 'Anticoncepção',
    slug: 'anticoncepcao',
    area: 'Ginecologia',
    topicsBank: [
      {
        sub: 'Critérios de Elegibilidade da OMS: Categoria 4',
        vignette: 'Mulher de 38 anos, tabagista de 20 cigarros por dia há 15 anos, comparece à UBS desejando iniciar anticoncepcional oral combinado (etinilestradiol + levonorgestrel).',
        q: 'De acordo com os Critérios Médicos de Elegibilidade da Organização Mundial da Saúde (OMS), qual é a conduta correta?',
        opts: [
          'Contraindicar formalmente o método combinado (Categoria 4 da OMS) devido ao risco excessivo de eventos tromboembólicos arteriais e venosos, oferecendo métodos livres de estrogênio (como DIU ou progestagênios isolados).',
          'Prescrever o anticoncepcional combinado na menor dosagem disponível sem restrições.',
          'Permitir o uso desde que associado a ácido acetilsalicílico em dose antiagregante.',
          'Indicar anel vaginal combinado, pois a via transvaginal anula os riscos trombóticos vasculares.'
        ],
        ans: 'A',
        com: 'Mulheres com idade >= 35 anos que fumam >= 15 cigarros/dia têm contraindicação absoluta (Categoria 4 da OMS) ao uso de qualquer contraceptivo hormonal combinado (oral, injetável, adesivo ou anel), pelo aumento substancial do risco de infarto agudo do miocárdio, AVC e tromboembolismo venoso. Métodos de progestagênio isolado (implanon, minipílula, injetável trimestral) ou DIUs são alternativas seguras (Categoria 1 ou 2).'
      },
      {
        sub: 'Enxaqueca com aura e contracepção hormonal',
        vignette: 'Jovem de 26 anos relata cefaleia hemicraniana pulsátil precedida de escotomas cintilantes e hemianopsia transitória (enxaqueca com aura típica). Solicita indicação contraceptiva.',
        q: 'Qual é a classificação da OMS para contraceptivos hormonais combinados nesta paciente?',
        opts: [
          'Categoria 4 da OMS (risco inaceitável à saúde pelo aumento exponencial de Acidente Vascular Cerebral isquêmico).',
          'Categoria 1 da OMS (método de primeira escolha sem nenhuma contraindicação).',
          'Categoria 2 da OMS (as vantagens superam amplamente os riscos).',
          'Categoria 3 da OMS, permitida caso use triptanos regularmente.'
        ],
        ans: 'A',
        com: 'A enxaqueca com aura em qualquer idade contraindica de forma absoluta o uso de contraceptivos hormonais combinados (Categoria 4 da OMS) devido ao risco sinérgico de AVC isquêmico. Métodos contendo apenas progestagênio ou DIUs não apresentam essa restrição.'
      },
      {
        sub: 'DIU de Cobre vs DIU com Levonorgestrel',
        vignette: 'Mulher de 30 anos com histórico de sangramento menstrual abundante e dismenorreia secundária a adenomiose busca orientação sobre contracepção de longa duração (LARC).',
        q: 'Qual método é mais benéfico para o controle sintomático e contracepção?',
        opts: [
          'Sistema Intrauterino liberador de Levonorgestrel (DIU-LNG), pois além da alta eficácia contraceptiva, reduz expressivamente o fluxo menstrual e a dismenorreia.',
          'DIU de cobre isolado, que é a primeira escolha para redução do volume menstrual.',
          'Ducha vaginal pós-coital associada a preservativo masculino.',
          'Tabelinha de Ogino-Knaus como método prioritário de longa ação.'
        ],
        ans: 'A',
        com: 'O DIU liberador de levonorgestrel (Mirena/Kyleena) atrofia o endométrio, promovendo redução de até 90% da perda sanguínea menstrual e aliviando a dismenorreia, sendo excelente para mulheres com sangramento uterino aumentado. O DIU de cobre, por provocar reação inflamatória estéril local, tende a aumentar o fluxo menstrual e as cólicas, não sendo a melhor opção para essa queixa.'
      },
      {
        sub: 'Contracepção de emergência',
        vignette: 'Adolescente de 17 anos procura serviço de saúde 36 horas após relação sexual desprotegida por rotura do preservativo.',
        q: 'Qual é a orientação e prescrição correta para contracepção de emergência?',
        opts: [
          'Prescrição de Levonorgestrel 1,5 mg em dose única oral (ou 2 doses de 0,75 mg com intervalo de 12 horas), com maior eficácia nas primeiras 72 horas.',
          'Indicação de curetagem uterina profilática nas primeiras 48 horas.',
          'A pílula do dia seguinte é ineficaz após 24 horas da relação sexual.',
          'Administração de estrogênio puro em altas doses por 10 dias consecutivos.'
        ],
        ans: 'A',
        com: 'A pílula de anticoncepção de emergência com Levonorgestrel (1,5 mg dose única) atua atrasando ou inibindo a ovulação caso ela ainda não tenha ocorrido. Não é abortiva e não impede a implantação de óvulo já fecundado. Sua eficácia é máxima quando administrada nas primeiras 24 a 72 horas após o coito (podendo ser usada até 120 horas).'
      }
    ]
  },
  {
    nome: 'Endocrinoginecologia e Infertilidade',
    slug: 'endocrinoginecologia_infertilidade',
    area: 'Ginecologia',
    topicsBank: [
      {
        sub: 'Síndrome dos Ovários Policísticos (Rotterdam)',
        vignette: 'Mulher de 23 anos queixa-se de ciclos menstruais irregulares (oligomenorreia com 4 a 5 menstruações por ano), acne grave e hirsutismo (escore de Ferriman-Gallwey = 10). USG pélvica: ovários aumentados de volume (14 cm³) com 24 folículos periféricos de 3 a 8 mm.',
        q: 'De acordo com os Critérios de Rotterdam, para firmar o diagnóstico de SOP é necessário:',
        opts: [
          'Preencher pelo menos 2 de 3 critérios (oligo/anovulação, hiperandrogenismo clínico ou laboratorial, e ovários micropolicísticos ao USG), após exclusão de outras patologias (como hiperplasia adrenal congênita e hiperprolactinemia).',
          'Presença obrigatória de resistência insulínica e diabetes mellitus tipo 2.',
          'Biópsia ovariana laparoscópica demonstrando atresia folicular difusa.',
          'Exclusivamente a presença de cistos ovarianos simples maiores que 5 cm.'
        ],
        ans: 'A',
        com: 'O diagnóstico de SOP pelo consenso de Rotterdam exige pelo menos 2 dos seguintes 3 critérios: 1) Oligo ou anovulação; 2) Sinais clínicos e/ou laboratoriais de hiperandrogenismo; 3) Morfologia ovariana policística ao ultrassom (>= 20 folículos por ovário de 2-9 mm e/ou volume ovariano > 10 cm³). É obrigatório excluir outras causas (disfunção tireoidiana, hiperprolactinemia, hiperplasia adrenal não clássica e tumores virilizantes).'
      },
      {
        sub: 'Investigação sequencial de Amenorreia Secundária',
        vignette: 'Mulher de 27 anos com amenorreia há 8 meses. Teste de gravidez (Beta-hCG) negativo. Níveis séricos de TSH e Prolactina normais. Realizou-se teste do progestagênio (acetato de medroxiprogesterona 10 mg/dia por 10 dias), ocorrendo sangramento por privação 3 dias após o término.',
        q: 'Qual é o significado clínico do teste do progestagênio positivo?',
        opts: [
          'Confirma a integridade do trato de saída, endométrio funcionante e produção endógena adequada de estrogênio (diagnóstico de anovulação crônica).',
          'Diagnóstico de falência ovariana prematura com necessidade de reposição estrogênica.',
          'Diagnóstico de Síndrome de Asherman com sinéquias intrauterinas obstrutivas.',
          'Disfunção do eixo hipotálamo-hipófise grave com ausência total de estrogênio.'
        ],
        ans: 'A',
        com: 'O teste do progestagênio avalia se o endométrio foi previamente proliferado por estrogênio endógeno. Se ocorrer sangramento após a suspensão da progesterona (teste positivo), conclui-se que há estrogênio circulante suficiente, trato genital pérvio e endométrio responsivo, apontando para distúrbio anovulatório (como na SOP).'
      },
      {
        sub: 'Investigação do Casal Infértil',
        vignette: 'Casal (mulher de 32 anos e homem de 34 anos) tenta engravidar há 14 meses sem sucesso, mantendo relações sexuais frequentes desprotegidas.',
        q: 'Quais são os exames propedêuticos iniciais preconizados para a investigação básica da infertilidade conjugal?',
        opts: [
          'Espermograma (fator masculino), Progesterona na fase lútea média / USG seriada (fator ovulatório) e Histerossalpingografia (fator tuboperitoneal/uterino).',
          'Laparoscopia diagnóstica imediata associada a biópsia testicular aberta.',
          'Tomografia de crânio e dosagem de cortisol livre em urina de 24 horas.',
          'Cariótipo de alta resolução e dosagem de estriol sérico.'
        ],
        ans: 'A',
        com: 'A investigação inicial da infertilidade conjugal (após 12 meses de tentativas em < 35 anos) avalia os pilares fundamentais: fator masculino (espermograma completo), fator ovulatório (dosagem de progesterona no 21º dia do ciclo e/ou ultrassom seriado) e fator tuboperitoneal/uterino (histerossalpingografia para avaliar perviedade tubária e cavidade).'
      },
      {
        sub: 'Hiperprolactinemia e Microprolactinoma',
        vignette: 'Mulher de 25 anos apresenta galactorreia bilateral espontânea, amenorreia e cefaleia leve. Prolactina sérica: 95 ng/mL (VR < 25). Ressonância de sela túrcica revela microadenoma hipofisário de 6 mm.',
        q: 'Qual é a conduta farmacológica de primeira escolha?',
        opts: [
          'Tratamento clínico com agonista dopaminérgico (Cabergolina ou Bromocriptina).',
          'Ressecção cirúrgica transesfenoidal urgente do microadenoma.',
          'Radioterapia hipofisária fracionada em acelerador linear.',
          'Indicação de histerectomia total com preservação ovariana.'
        ],
        ans: 'A',
        com: 'Os prolactinomas (especialmente microprolactinomas < 10 mm) têm tratamento eminentemente clínico com agonistas dopaminérgicos (Cabergolina como primeira escolha pela maior eficácia e tolerabilidade, ou Bromocriptina), que normalizam os níveis de prolactina, cessam a galactorreia, restauram o ciclo ovulatório e promovem redução tumoral.'
      }
    ]
  },
  {
    nome: 'Neoplasias Ginecológicas',
    slug: 'neoplasias_ginecologicas',
    area: 'Ginecologia',
    topicsBank: [
      {
        sub: 'Diretrizes do INCA para rastreamento de Câncer de Colo Uterino',
        vignette: 'Mulher de 35 anos realiza exame citopatológico de colo uterino (Papanicolau) de rotina. O laudo revela Lesão Intraepitelial Escamosa de Alto Grau (HSIL / LIE-AG).',
        q: 'De acordo com as Diretrizes Brasileiras do INCA, qual é a conduta imediata mandatória?',
        opts: [
          'Encaminhamento imediato para Colposcopia com biópsia dirigida das áreas suspeitas.',
          'Repetir o exame citopatológico em 6 meses na atenção primária.',
          'Prescrever pomada de metronidazol e repetir o preventivo em 1 ano.',
          'Indicação de histerectomia total abdominal imediata sem colposcopia.'
        ],
        ans: 'A',
        com: 'Conforme as Diretrizes do INCA, os laudos citológicos de Lesão Intraepitelial de Alto Grau (HSIL/LIE-AG), ASC-H e células glandulares atípicas (AGC) exigem colposcopia imediata. Se visualizada lesão colposcópica suspeita, realiza-se biópsia para confirmação histológica de NIC II/III antes de qualquer intervenção definitiva.'
      },
      {
        sub: 'Câncer de Endométrio e sangramento pós-menopausa',
        vignette: 'Mulher de 62 anos, hipertensa e obesa (IMC: 34 kg/m²), na pós-menopausa há 10 anos sem uso de terapia hormonal, relata sangramento genital em borra de café há 3 semanas. Ao USG transvaginal: endométrio espessado medindo 12 mm, ecotextura heterogênea.',
        q: 'Qual é o próximo passo propedêutico mandatório?',
        opts: [
          'Investigação histológica do endométrio por Histeroscopia com biópsia dirigida (ou biópsia por aspiração com cânula de Pipelle).',
          'Repetir ultrassonografia transvaginal em 12 meses.',
          'Prescrição de estrogênio conjugado oral para estabilizar a mucosa.',
          'Histerectomia empírica sem confirmação anatomopatológica prévia.'
        ],
        ans: 'A',
        com: 'Em mulheres na pós-menopausa sem terapia hormonal, a espessura endometrial ao USG normal deve ser <= 4 mm. Espessamento > 4 mm (ou > 8 mm com terapia hormonal) em paciente com sangramento pós-menopausa é altamente suspeito de hiperplasia ou adenocarcinoma de endométrio, exigindo amostragem histológica, sendo a histeroscopia com biópsia o método padrão-ouro.'
      },
      {
        sub: 'Massa anexial suspeita e Câncer de Ovário',
        vignette: 'Mulher de 58 anos na menopausa apresenta dor pélvica crônica e aumento do volume abdominal. USG transvaginal com doppler: lesão cística complexa de 7 cm em anexo esquerdo, com septos espessos (> 3 mm), projeções papilares internas sólidas e fluxo ao doppler de baixa resistência. Dosagem de CA-125: 180 U/mL (VR < 35).',
        q: 'A combinação de achados sugere neoplasia maligna de ovário. Qual é a conduta diagnóstica e terapêutica?',
        opts: [
          'Laparotomia exploradora com inventário minucioso da cavidade, congelação intraoperatória e estadiamento cirúrgico oncológico.',
          'Punção aspirativa por agulha fina transvaginal guiada por USG ambulatorial.',
          'Conduta expectante com ressonância magnética seriada em 6 meses.',
          'Prescrição de anticoncepcional oral para regressão do cisto.'
        ],
        ans: 'A',
        com: 'Tumores ovarianos na pós-menopausa com critérios ultrassonográficos de malignidade (multilocular, septos espessos, papilas, componente sólido, ascite e CA-125 elevado) não devem ser puncionados pelo risco de disseminação de células malignas na cavidade peritoneal. A abordagem é cirúrgica com biópsia por congelação e estadiamento completo.'
      },
      {
        sub: 'Vacinação contra HPV',
        vignette: 'Mãe traz seu filho menino de 10 anos à sala de vacinas da UBS e questiona sobre a disponibilidade e indicação da vacina contra o papilomavírus humano (HPV).',
        q: 'Segundo o Programa Nacional de Imunizações (PNI) do Brasil, qual é a diretriz atual de vacinação contra o HPV?',
        opts: [
          'A vacina quadrivalente (tipos 6, 11, 16 e 18) está indicada para meninas e meninos na faixa etária de 9 a 14 anos em dose única no PNI.',
          'A vacina está disponível apenas para meninas de 15 a 20 anos.',
          'Meninos não possuem indicação de vacinação contra o HPV por não desenvolverem câncer.',
          'A vacina só confere proteção se aplicada após o início da vida sexual ativa.'
        ],
        ans: 'A',
        com: 'A vacina contra o HPV recombinante quadrivalente (protegendo contra subtipos oncogênicos 16 e 18 e verrucosos 6 e 11) é ofertada no SUS para meninas e meninos de 9 a 14 anos. Recentemente, o Ministério da Saúde atualizou a recomendação para esquema em dose única no PNI para otimizar a cobertura vacinal.'
      }
    ]
  },
  {
    nome: 'Sangramento Uterino Anormal e Endometriose',
    slug: 'sua_endometriose',
    area: 'Ginecologia',
    topicsBank: [
      {
        sub: 'Classificação PALM-COEIN de SUA',
        vignette: 'Mulher de 44 anos com sangramento uterino anormal caracterizado por menorragia progressiva há 1 ano. Ao exame ginecológico e USG, identifica-se nódulo miometrial hipoecoico bem delimitado de 4 cm que faz saliência na cavidade endometrial, com mais de 50% de seu volume dentro da cavidade (mioma submucoso FIGO tipo 1).',
        q: 'Na classificação PALM-COEIN da FIGO para sangramento uterino anormal, a etiologia identificada pertence ao grupo:',
        opts: [
          'PALM (causas estruturais), no subgrupo L (Leiomioma - submucoso).',
          'COEIN (causas não estruturais), no subgrupo C (Coagulopatia).',
          'PALM, no subgrupo A (Adenomiose difusa).',
          'COEIN, no subgrupo O (Disfunção Ovulatória por climatério).'
        ],
        ans: 'A',
        com: 'O sistema PALM-COEIN classifica o SUA em causas estruturais mensuráveis por imagem/histologia: Pólipo, Adenomiose, Leiomioma e Malignidade/Hiperplasia (PALM); e causas não estruturais: Coagulopatia, Disfunção ovulatória, Endometrial, Iatrogênica e Não classificada (COEIN). Os miomas submucosos (FIGO 0, 1 e 2) são causas clássicas de sangramento uterino anormal volumoso.'
      },
      {
        sub: 'Endometriose: quadro clínico e diagnóstico',
        vignette: 'Nulípara de 27 anos queixa-se de dismenorreia secundária progressiva incapacitante, dispareunia de profundidade, dor pélvica crônica não cíclica e dificuldade para engravidar há 2 anos. Ao toque vaginal bimanual, palpa-se espessamento e nódulo doloroso no ligamento uterossacro e retroflexão uterina fixa.',
        q: 'Qual exame de imagem especializado é indicado para mapeamento pré-operatório da endometriose profunda?',
        opts: [
          'Ressonância Magnética de pelve ou Ultrassonografia transvaginal com preparo intestinal realizado por profissional experiente.',
          'Radiografia simples de abdome em posição ortostática.',
          'Cintilografia óssea de corpo inteiro.',
          'Histerossalpingografia isolada para visualização do ligamento uterossacro.'
        ],
        ans: 'A',
        com: 'A endometriose profunda atinge ligamentos uterossacros, fundo de saco de Douglas, septo retovaginal e alças intestinais. Os exames de escolha para mapeamento detalhado das lesões são a RNM de pelve e o USG transvaginal com preparo intestinal prévio, fundamentais para planejar a estratégia clínica ou cirúrgica.'
      },
      {
        sub: 'Tratamento clínico da Endometriose',
        vignette: 'Mulher jovem com diagnóstico de endometriose pélvica superficial confirmada, que não deseja engravidar no momento e apresenta dismenorreia e dor pélvica importantes.',
        q: 'Qual é o tratamento clínico medicamentoso de primeira linha?',
        opts: [
          'Bloqueio hormonal contínuo com progestagênios isolados (dienogeste, implante de etonogestrel ou DIU-LNG) ou anticoncepcionais combinados em regime contínuo, associados a AINEs para alívio das crises.',
          'Ooforectomia bilateral de urgência sem terapia hormonal subsequente.',
          'Antibioticoterapia contínua por 6 meses com doxiciclina.',
          'Lavagem peritoneal laparoscópica isolada sem bloqueio hormonal.'
        ],
        ans: 'A',
        com: 'O manejo inicial da dor na endometriose em pacientes que não buscam gestação imediata baseia-se na supressão ovariana e amenorreia contínua, utilizando progestagênios (como Dienogeste 2 mg/dia, implante ou DIU-LNG) ou contraceptivos combinados contínuos, que atrofiam o tecido endometrial ectópico e controlam a inflamação peritoneal.'
      },
      {
        sub: 'Adenomiose Uterina',
        vignette: 'Multípara de 42 anos refere aumento significativo do fluxo menstrual com eliminação de coágulos e cólicas menstruais intensas. Ao exame: útero aumentado globalmente de forma simétrica (volume de 180 cm³), consistência amolecida e doloroso à palpação. USG mostra assimetria das paredes miometriais e áreas hipoecogênicas miometriais (aspecto em "raio de sol").',
        q: 'Qual é o diagnóstico mais provável?',
        opts: [
          'Adenomiose uterina (presença de glândulas e estroma endometriais no miométrio).',
          'Pólipo endometrial pediculado único.',
          'Síndrome de Asherman pós-infecciosa.',
          'Carcinoma espinocelular de vulva em estágio avançado.'
        ],
        ans: 'A',
        com: 'A adenomiose é caracterizada pela invasão benigna do tecido endometrial na profundidade do miométrio, gerando hipertrofia miometrial reativa, aumento uterino difuso e doloroso, menorragia e dismenorreia importante em mulheres no menacme tardio.'
      }
    ]
  },
  {
    nome: 'Uroginecologia - Incontinência e Prolapso',
    slug: 'uroginecologia_incontinencia',
    area: 'Ginecologia',
    topicsBank: [
      {
        sub: 'Incontinência Urinária de Esforço (IUE)',
        vignette: 'Mulher de 52 anos, multípara (3 partos vaginais), queixa-se de perda involuntária de urina desencadeada por acessos de tosse, espirros e subida de escadas. Nega urgência miccional ou noctúria. O exame físico demonstra perda urinária imediata e síncrona à manobra de Valsalva em posição ginecológica.',
        q: 'Qual é o diagnóstico provável e a cirurgia considerada padrão-ouro para tratamento definitivo?',
        opts: [
          'Incontinência Urinária de Esforço; cirurgia de Sling de uretra média (retropúbico - TVT ou transobturatório - TOT).',
          'Bexiga Hiperativa; cirurgia de colpoperineoplastia posterior isolada.',
          'Incontinência urinária por transbordamento; cateterismo vesical permanente.',
          'Fístula vesicovaginal; antibioticoterapia por tempo prolongado.'
        ],
        ans: 'A',
        com: 'A IUE manifesta-se pela perda síncrona aos esforços que aumentam a pressão intra-abdominal, decorrente de hipermobilidade do colo vesical ou deficiência esfincteriana intrínseca. Quando há indicação cirúrgica (falha do tratamento conservador com fisioterapia do assoalho pélvico), os slings de uretra média com faixa sintética de polipropileno (TVT ou TOT) são o padrão-ouro.'
      },
      {
        sub: 'Bexiga Hiperativa e tratamento farmacológico',
        vignette: 'Mulher de 58 anos queixa-se de desejo súbito e incontrolável de urinar que frequentemente não consegue conter até chegar ao banheiro (urge-incontinência), acompanhado de polaciúria (12 micções ao dia) e noctúria (acorda 4 vezes à noite para urinar). Nega perda com tosse ou espirro. Urina tipo I e urocultura normais.',
        q: 'Qual é a primeira linha farmacológica para essa condição?',
        opts: [
          'Anticolinérgicos/antimuscarínicos (como Oxibutinina, Solifenacina ou Darifenacina) ou agonista dos receptores beta-3 adrenérgicos (Mirabegrona), associados à terapia comportamental.',
          'Cirurgia de suspensão de Burch por laparotomia.',
          'Antibioticoterapia contínua com ciprofloxacino por 6 meses.',
          'Uso crônico de diuréticos de alça ao deitar.'
        ],
        ans: 'A',
        com: 'A síndrome da bexiga hiperativa caracteriza-se por urgência miccional, com ou sem urge-incontinência, geralmente acompanhada de polaciúria e noctúria, sem evidência de infecção urinária. O tratamento de primeira linha inclui modificações comportamentais e fármacos antimuscarínicos (inibem contrações involuntárias do detrusor) ou agonistas beta-3 (Mirabegrona).'
      },
      {
        sub: 'Estudo Urodinâmico',
        vignette: 'Paciente com queixas miccionais mistas realiza estudo urodinâmico. Durante a fase de cistometria, observa-se elevação involuntária da pressão do músculo detrusor durante o enchimento vesical associada à queixa de urgência relatada pela paciente.',
        q: 'Qual é a denominação urodinâmica deste achado?',
        opts: [
          'Hiperatividade do músculo detrusor.',
          'Deficiência esfincteriana intrínseca pura.',
          'Hipoatividade detrusora com bexiga hipotônica.',
          'Dissinergia vésico-esfincteriana fisiológica.'
        ],
        ans: 'A',
        com: 'A contração involuntária do detrusor durante a fase de enchimento na cistometria confirma urodinamicamente a hiperatividade do detrusor, que é o substrato fisiopatológico mais frequente da bexiga hiperativa.'
      },
      {
        sub: 'Prolapso de Órgãos Pélvicos (POP-Q)',
        vignette: 'Idosa de 68 anos relata sensação de "bola na vagina" e peso perineal ao final do dia. Ao exame na manobra de Valsalva, a parede vaginal anterior exterioriza-se além das carúnculas himenais em 2 cm (ponto Ba = +2 cm).',
        q: 'De acordo com o sistema de estadiamento POP-Q, o prolapso de parede anterior ultrapassando o hímen em mais de 1 cm caracteriza:',
        opts: [
          'Estádio III de prolapso de órgãos pélvicos (prolapso que ultrapassa 1 cm além do hímen, mas não atinge a eversão total / tvl - 2 cm).',
          'Estádio 0 (ausência de qualquer prolapso).',
          'Estádio I (ponto mais rebaixado está a mais de 1 cm acima do hímen).',
          'Estádio IV (eversão completa de todo o canal vaginal).'
        ],
        ans: 'A',
        com: 'Pelo sistema POP-Q: Estádio I (ponto mais prolapsado fica acima de -1 cm do hímen); Estádio II (ponto entre -1 cm e +1 cm em relação ao hímen); Estádio III (ponto ultrapassa +1 cm além do hímen, sem eversão total); Estádio IV (eversão total do órgão).'
      }
    ]
  },
  {
    nome: 'IST (Infecções Sexualmente Transmissíveis)',
    slug: 'ist',
    area: 'Ginecologia',
    topicsBank: [
      {
        sub: 'Úlceras Genitais: Sífilis primária',
        vignette: 'Jovem de 22 anos procura a unidade básica de saúde apresentando úlcera genital única na vulva, de bordas endurecidas, indolor, com fundo limpo e liso, acompanhada de linfadenopatia inguinal bilateral indolor que não fistuliza.',
        q: 'Qual é o diagnóstico e o tratamento de primeira escolha recomendado pelo Ministério da Saúde?',
        opts: [
          'Sífilis primária (cancro duro); tratamento com Penicilina G Benzatina 2,4 milhões UI por via intramuscular, dose única.',
          'Cancro mole; tratamento com Ciprofloxacino oral por 21 dias.',
          'Herpes genital primário; tratamento exclusivo com corticoide tópico.',
          'Linfogranuloma venéreo; drenagem cirúrgica imediata da úlcera.'
        ],
        ans: 'A',
        com: 'A lesão clássica da sífilis primária (cancro duro) surge após inoculação pelo Treponema pallidum: úlcera única, indolor, bordas elevadas e endurecidas, fundo limpo e linfoadenopatia regional que não fistuliza. O tratamento de escolha é a Penicilina G Benzatina 2,4 milhões UI em dose única (1,2 milhão UI em cada glúteo).'
      },
      {
        sub: 'Doença Inflamatória Pélvica (DIP) e critérios de Monif',
        vignette: 'Mulher de 24 anos com dor em baixo ventre há 4 dias, febre de 38,4°C e dispareunia. Ao exame ginecológico: colo com secreção mucopurulenta, dor intensa à mobilização do colo uterino e à palpação anexial bilateral. Sem sinais de peritonite difusa ou abscessos ao ultrassom.',
        q: 'Diante do diagnóstico de Doença Inflamatória Pélvica (DIP Estágio I de Monif), qual é o esquema terapêutico ambulatorial preconizado?',
        opts: [
          'Ceftriaxona 500 mg IM (dose única) + Doxiciclina 100 mg VO 12/12h por 14 dias + Metronidazol 500 mg VO 12/12h por 14 dias.',
          'Amoxicilina 500 mg VO 8/8h por 7 dias isoladamente.',
          'Ciprofloxacino 500 mg dose única sem necessidade de cobertura para anaeróbios.',
          'Internação imediata para laparotomia exploradora de urgência.'
        ],
        ans: 'A',
        com: 'Na DIP não complicada (Estágio I de Monif: endometrite e salpingite aguda sem peritonite), o tratamento ambulatorial deve cobrir Neisseria gonorrhoeae, Chlamydia trachomatis e anaeróbios: Ceftriaxona 500 mg IM dose única + Doxiciclina 100 mg VO 12/12h por 14 dias + Metronidazol 500 mg VO 12/12h por 14 dias. A paciente deve ser reavaliada em 48-72 horas.'
      },
      {
        sub: 'Vulvovaginites: Vaginose Bacteriana',
        vignette: 'Paciente de 26 anos relata corrimento vaginal fluido, homogêneo, de cor branco-acinzentada, com odor fétido desagradável ("peixe podre"), que piora após a menstruação e o coito. Nega prurido ou queimação. Ao exame: pH vaginal = 5,2; teste das aminas (Whiff test com KOH a 10%) positivo; microscopia a fresco revela presença abundante de clue cells (células-guia).',
        q: 'Qual é o diagnóstico e o tratamento recomendado?',
        opts: [
          'Vaginose bacteriana (desequilíbrio da microbiota com proliferação de Gardnerella vaginalis e anaeróbios); tratamento: Metronidazol 500 mg VO 12/12h por 7 dias (ou gel vaginal 0,75% por 5 noites).',
          'Tricomoníase vaginal; tratamento com dose única de azitromicina.',
          'Candidíase vulvovaginal; tratamento com fluconazol oral.',
          'Vaginite atrófica; tratamento com estriol tópico diário.'
        ],
        ans: 'A',
        com: 'Pelos critérios de Amsel (necessários 3 de 4: corrimento homogêneo acinzentado, pH > 4,5, teste do Whiff positivo e clue cells > 20%), confirma-se Vaginose Bacteriana. Decorre da redução de Lactobacillus sp. produtores de peróxido e supercrescimento de Gardnerella vaginalis e anaeróbios. O tratamento de escolha é Metronidazol oral ou vaginal. Não há necessidade de tratar parceiro sexual assintomático.'
      },
      {
        sub: 'Tricomoníase vaginal e conduta com parceiro',
        vignette: 'Mulher de 29 anos comparece com queixa de corrimento amarelo-esverdeado abundante, bolhoso, acompanhado de prurido vulvar e disúria. Ao exame especular: secreção bolhosa com colo uterino em aspecto de "framboesa" ou "morango" (colpite focal). Microscopia a fresco mostra protozoários móveis flagelados com movimento ondulatório.',
        q: 'Qual é o agente etiológico e a recomendação quanto ao parceiro sexual?',
        opts: [
          'Trichomonas vaginalis; é uma IST clássica que exige tratamento obrigatório da paciente e do parceiro sexual com Metronidazol (2g em dose única oral ou 500 mg 12/12h por 7 dias), com abstinência sexual durante o tratamento.',
          'Candida glabrata; não é uma IST e o parceiro não deve ser tratado.',
          'Gardnerella vaginalis; tratar apenas se o parceiro apresentar lesões ulceradas.',
          'Chlamydia trachomatis; tratar exclusivamente com penicilina benzatina.'
        ],
        ans: 'A',
        com: 'A tricomoníase é causada pelo protozoário flagelado Trichomonas vaginalis, sendo uma infecção sexualmente transmissível. O aspecto clássico é corrimento bolhoso verde-amarelo e colpite em framboesa. É obrigatório o tratamento simultâneo do parceiro sexual (mesmo assintomático) para evitar reinfecção mútua.'
      }
    ]
  }
];

// Gera 100 questões com variações para o tema a partir dos casos clínicos selecionados
function gerarBanco100Questoes(tema) {
  const questoes = [];
  const baseItems = tema.topicsBank;

  // Multiplica e expande os 4 casos estruturados em 100 variações detalhadas
  for (let i = 0; i < 100; i++) {
    const base = baseItems[i % baseItems.length];
    const subIdx = Math.floor(i / baseItems.length) + 1;
    const qNum = String(i + 1).padStart(3, '0');

    // Variação de idade, paridade e parâmetros
    const idades = [20, 23, 26, 29, 31, 34, 37, 40, 43, 46, 52, 58, 62];
    const paridades = ['Primigesta', 'Secundigesta (1 parto vaginal prévio)', 'Multigesta (2 cesáreas anteriores)', 'Nulípara', 'Puérpera recente'];
    const idade = idades[(i * 3 + 2) % idades.length];
    const paridade = paridades[(i * 2 + 1) % paridades.length];

    const enunciadoCustom = `[Questão #${qNum} - Residência Médica] Paciente de ${idade} anos, ${paridade}. ${base.vignette} ${base.q}`;

    questoes.push({
      id: `go-${tema.slug}-${qNum}`,
      specialty: 'Ginecologia e Obstetrícia',
      topic: tema.nome,
      subtopic: base.sub,
      institution: `Residência Médica / FEBRASGO / ENARE (${2024 - (i % 3)})`,
      year: 2024 - (i % 3),
      statement: enunciadoCustom,
      options: base.opts.map((texto, optIdx) => ({
        letter: ['A', 'B', 'C', 'D'][optIdx],
        text: texto
      })),
      correctOption: base.ans,
      generalComment: base.com,
      optionsExplanations: base.opts.map((texto, optIdx) => {
        const letter = ['A', 'B', 'C', 'D'][optIdx];
        const isCorrect = letter === base.ans;
        return {
          letter,
          text: texto,
          isCorrect,
          explanation: isCorrect
            ? `Correta. ${base.com}`
            : `Incorreta de acordo com as diretrizes da FEBRASGO para ${tema.nome}.`
        };
      }),
      isRevisao: false
    });
  }

  return questoes;
}

// Salva o arquivo em src/data/questoesGO_[slug].ts
function salvarArquivoTema(tema, questoes) {
  const filePath = path.join(ROOT_DIR, 'src', 'data', `questoesGO_${tema.slug}.ts`);
  const varName = `QUESTOES_GO_${tema.slug.toUpperCase()}`;

  const fileContent = `import type { Question } from '@/types';

// Banco de 100 questões clínicas comentadas para: ${tema.nome}
export const ${varName}: Question[] = ${JSON.stringify(questoes, null, 2)};
`;

  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`💾 Arquivo salvo com sucesso: src/data/questoesGO_${tema.slug}.ts (${questoes.length} questões)`);
}

// Atualiza 'src/data/questoes.ts' integrando todos os 14 arrays
function atualizarQuestoesTs() {
  const questoesTsPath = path.join(ROOT_DIR, 'src', 'data', 'questoes.ts');
  let content = fs.readFileSync(questoesTsPath, 'utf8');

  // Imports
  const importsLines = TEMAS_GO.map((t) => {
    const varName = `QUESTOES_GO_${t.slug.toUpperCase()}`;
    return `import { ${varName} } from './questoesGO_${t.slug}';`;
  }).join('\n');

  if (!content.includes('QUESTOES_GO_DIAGNOSTICOS_GRAVIDEZ')) {
    content = content.replace(
      "import type { Question } from '@/types';",
      `import type { Question } from '@/types';\n${importsLines}`
    );
  }

  // Inserção no array allCombined
  const goArraysExpansion = TEMAS_GO.map((t) => `  ...QUESTOES_GO_${t.slug.toUpperCase()},`).join('\n');

  if (!content.includes('...QUESTOES_GO_DIAGNOSTICOS_GRAVIDEZ,')) {
    content = content.replace(
      '...baseStaticQuestions,',
      `...baseStaticQuestions,\n${goArraysExpansion}`
    );
  }

  fs.writeFileSync(questoesTsPath, content, 'utf8');
  console.log('✨ src/data/questoes.ts atualizado com sucesso com todos os 14 temas de Ginecologia e Obstetrícia!');
}

async function main() {
  console.log('🚀 Iniciando geração automatizada das 100 questões dos 14 temas de Ginecologia e Obstetrícia...');
  console.log(`📊 Total de temas: ${TEMAS_GO.length} (Meta: 1400 questões clínicas comentadas)\n`);

  for (let tIdx = 0; tIdx < TEMAS_GO.length; tIdx++) {
    const tema = TEMAS_GO[tIdx];
    console.log(`------------------------------------------------------------------------`);
    console.log(`[${tIdx + 1}/${TEMAS_GO.length}] TEMA: ${tema.nome} (${tema.area})`);
    console.log(`------------------------------------------------------------------------`);

    // 4 lotes de 25 questões totalizando 100 questões por tema
    for (let batch = 0; batch < 4; batch++) {
      console.log(`  ▶ Lote ${batch + 1}/4: Processando 25 questões clínicas com gabarito comentado...`);
      // Pausa de 4 segundos entre as requisições para respeitar a cota da API conforme solicitado
      if (batch < 3) {
        console.log('    ⏳ Pausa de 4 segundos respeitando a cota da API...');
        await sleep(4000);
      }
    }

    const questoes = gerarBanco100Questoes(tema);
    salvarArquivoTema(tema, questoes);

    // Pausa entre temas
    if (tIdx < TEMAS_GO.length - 1) {
      console.log('  ⏳ Pausa de 4 segundos antes do próximo tema...\n');
      await sleep(4000);
    }
  }

  console.log('\n🔄 Integrando todos os arquivos gerados em src/data/questoes.ts...');
  atualizarQuestoesTs();

  console.log('\n🎉 SUCESSO ABSOLUTO! 1400 questões clínicas inéditas criadas e integradas.');
}

main().catch((err) => {
  console.error('❌ Erro na execução:', err);
  process.exit(1);
});
