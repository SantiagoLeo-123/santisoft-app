import type { SubjectArea } from '@/types';

export interface StudyWeek {
  week: number;
  title: string;
  topics: string[];
  areaId: string;
  moduleId?: string;
  lessonIds?: string[];
}

export interface CronogramaArea {
  areaId: string;
  areaName: string;
  weeks: StudyWeek[];
}

export const cronograma: CronogramaArea[] = [
  {
    areaId: 'clinica-medica',
    areaName: 'Clínica Médica',
    weeks: [
      {
        week: 1,
        title: 'Sistematização e Abordagem Geral',
        topics: [
          'Semiologia e propedêutica clínica',
          'Sinais vitais e exame físico dirigido',
          'Interpretação de exames laboratoriais',
        ],
        areaId: 'clinica-medica',
      },
      {
        week: 2,
        title: 'Cardiologia — Insuficiência e Coronariopatias',
        topics: [
          'Insuficiência Cardíaca: Diagnóstico e Classificação NYHA',
          'Doença Coronariana Aguda: Síndromes Isquêmicas',
          'Revisão de fluxogramas e fluxos de conduta',
        ],
        areaId: 'clinica-medica',
        moduleId: 'cardiologia',
        lessonIds: ['cardio-01', 'cardio-02'],
      },
      {
        week: 3,
        title: 'Cardiologia — Arritmias e Revisão',
        topics: [
          'Arritmias Cardíacas: Identificação no ECG',
          'Bradiarritmias e taquiarritmias',
          'Simulado de revisão cardiológica',
        ],
        areaId: 'clinica-medica',
        moduleId: 'cardiologia',
        lessonIds: ['cardio-03'],
      },
      {
        week: 4,
        title: 'Nefrologia — Síndromes Renais',
        topics: [
          'Síndrome Nefrítica: Glomerulonefrites e Abordagem',
          'Síndrome Nefrótica: Proteinúria e Manejo Clínico',
          'Interpretação de exame de urina e função renal',
        ],
        areaId: 'clinica-medica',
        moduleId: 'nefrologia',
        lessonIds: ['nefro-01', 'nefro-02'],
      },
      {
        week: 5,
        title: 'Nefrologia — Lesão Renal e Diálise',
        topics: [
          'Lesão Renal Aguda: Classificação RIFLE e Tratamento',
          'Indicações de diálise e manejo de complicações',
          'Simulado de revisão nefrológica',
        ],
        areaId: 'clinica-medica',
        moduleId: 'nefrologia',
        lessonIds: ['nefro-03'],
      },
      {
        week: 6,
        title: 'Pneumologia — DPOC e Asma',
        topics: [
          'DPOC: Exacerbações e Tratamento Farmacológico',
          'Asma: Classificação de Gravidade e Escada Terapêutica',
          'Gasometria arterial e interpretação',
        ],
        areaId: 'clinica-medica',
        moduleId: 'pneumologia',
        lessonIds: ['pneumo-01', 'pneumo-02'],
      },
      {
        week: 7,
        title: 'Pneumologia — Pneumonias e Revisão Geral',
        topics: [
          'Pneumonias Adquiridas na Comunidade: Estratificação',
          'Derrame pleural e empiema',
          'Simulado integrado de Clínica Médica',
        ],
        areaId: 'clinica-medica',
        moduleId: 'pneumologia',
        lessonIds: ['pneumo-03'],
      },
    ],
  },
  {
    areaId: 'cirurgia-geral',
    areaName: 'Cirurgia Geral',
    weeks: [
      {
        week: 1,
        title: 'Princípios de Cirurgia e Trauma',
        topics: [
          'ABCD do Trauma: Avaliação Primária passo a passo',
          'Triagem e suporte avançado de vida',
          'Indicações de cirurgia no trauma',
        ],
        areaId: 'cirurgia-geral',
        moduleId: 'trauma',
        lessonIds: ['trauma-01'],
      },
      {
        week: 2,
        title: 'Trauma Torácico e Abdominal',
        topics: [
          'Trauma Torácico: Pneumotórax e Hemotórax',
          'Trauma Abdominal: Indicações de Laparotomia',
          'Drenos e toracocentese de emergência',
        ],
        areaId: 'cirurgia-geral',
        moduleId: 'trauma',
        lessonIds: ['trauma-02', 'trauma-03'],
      },
      {
        week: 3,
        title: 'Abdome Agudo Cirúrgico',
        topics: [
          'Abdome Agudo: Diferencial entre patologias cirúrgicas',
          'Apêndice, vesícula e perfurações',
          'Exames de imagem no abdome agudo',
        ],
        areaId: 'cirurgia-geral',
        moduleId: 'abdomen-cirurgico',
        lessonIds: ['abd-cir-01'],
      },
      {
        week: 4,
        title: 'Hérnias e Colecistopatias',
        topics: [
          'Hérnias: Classificação e Indicações Operatórias',
          'Colecistite Aguda: Conduta e Complicações',
          'Simulado de revisão cirúrgica',
        ],
        areaId: 'cirurgia-geral',
        moduleId: 'abdomen-cirurgico',
        lessonIds: ['abd-cir-02', 'abd-cir-03'],
      },
    ],
  },
  {
    areaId: 'ginecologia-obstetricia',
    areaName: 'Ginecologia e Obstetrícia',
    weeks: [
      {
        week: 1,
        title: 'Ginecologia — Sangramentos e Neoplasias',
        topics: [
          'Sangramento Uterino Anormal: Investigação e Manejo',
          'Câncer de Colo Uterino: Rastreio e Conduta',
          'Exames de rastreio ginecológico',
        ],
        areaId: 'ginecologia-obstetricia',
        moduleId: 'gineco',
        lessonIds: ['gineco-01', 'gineco-02'],
      },
      {
        week: 2,
        title: 'Ginecologia — Endometriose e Revisão',
        topics: [
          'Endometriose: Diagnóstico e Tratamento',
          'Miomas uterinos e pólipos',
          'Simulado de revisão ginecológica',
        ],
        areaId: 'ginecologia-obstetricia',
        moduleId: 'gineco',
        lessonIds: ['gineco-03'],
      },
      {
        week: 3,
        title: 'Obstetrícia — Hipertensão na Gestação',
        topics: [
          'Hipertensão Gestacional: Pré-eclâmpsia e Eclâmpsia',
          'Síndrome HELLP e manejo de emergência',
          'Acompanhamento pré-natal de alto risco',
        ],
        areaId: 'ginecologia-obstetricia',
        moduleId: 'obstetricia',
        lessonIds: ['obst-01'],
      },
      {
        week: 4,
        title: 'Obstetrícia — Hemorragias e Prematuridade',
        topics: [
          'Hemorragia Pós-parto: Causas e Conduta de Emergência',
          'Parto Prematuro: Diagnóstico e Tocolíticos',
          'Simulado integrado de GO',
        ],
        areaId: 'ginecologia-obstetricia',
        moduleId: 'obstetricia',
        lessonIds: ['obst-02', 'obst-03'],
      },
    ],
  },
  {
    areaId: 'pediatria',
    areaName: 'Pediatria',
    weeks: [
      {
        week: 1,
        title: 'Pneumologia Pediátrica — Vias Aéreas Inferiores',
        topics: [
          'Bronquiolite: Diagnóstico e Critérios de Internação',
          'Pneumonia na Infância: Classificação e Antibioticoterapia',
          'Oxigenoterapia e suporte respiratório pediátrico',
        ],
        areaId: 'pediatria',
        moduleId: 'pneumo-ped',
        lessonIds: ['pneumo-ped-01', 'pneumo-ped-02'],
      },
      {
        week: 2,
        title: 'Pneumologia Pediátrica — Asma e Revisão',
        topics: [
          'Asma na Criança: Manejo e Educação aos Pais',
          'Broncodilatadores e corticoides na infância',
          'Simulado de revisão pneumológica pediátrica',
        ],
        areaId: 'pediatria',
        moduleId: 'pneumo-ped',
        lessonIds: ['pneumo-ped-03'],
      },
      {
        week: 3,
        title: 'Gastroenterologia Pediátrica — Desidratação',
        topics: [
          'Desidratação Aguda: Classificação e Reposição Hídrica',
          'Diarreia Aguda: Etiologias e Conduta',
          'Soro de reidratação oral vs. venosa',
        ],
        areaId: 'pediatria',
        moduleId: 'gastro-ped',
        lessonIds: ['gastro-ped-01', 'gastro-ped-02'],
      },
      {
        week: 4,
        title: 'Gastroenterologia Pediátrica — Dor Abdominal',
        topics: [
          'Dor Abdominal Recorrente: Abordagem Diferencial',
          'Constipação crônica e refluxo gastroesofágico',
          'Simulado integrado de Pediatria',
        ],
        areaId: 'pediatria',
        moduleId: 'gastro-ped',
        lessonIds: ['gastro-ped-03'],
      },
    ],
  },
  {
    areaId: 'medicina-preventiva',
    areaName: 'Medicina Preventiva e Social',
    weeks: [
      {
        week: 1,
        title: 'Rastreio e Prevenção Oncológica',
        topics: [
          'Rastreio de Câncer: Mama, Colo e Colorretal',
          'Indicações e intervalos de rastreio populacional',
          'Níveis de prevenção primária e secundária',
        ],
        areaId: 'medicina-preventiva',
        moduleId: 'rastreio',
        lessonIds: ['rastreio-01'],
      },
      {
        week: 2,
        title: 'Imunização e Risco Cardiovascular',
        topics: [
          'Vacinação no Adulto: Calendário e Indicações',
          'Fatores de Risco Cardiovascular: Estratificação SCORE',
          'Aconselhamento e mudança de estilo de vida',
        ],
        areaId: 'medicina-preventiva',
        moduleId: 'rastreio',
        lessonIds: ['rastreio-02', 'rastreio-03'],
      },
      {
        week: 3,
        title: 'Epidemiologia — Medidas e Estudos',
        topics: [
          'Medidas de Associação: Risco Relativo e Odds Ratio',
          'Tipos de Estudos: Caso-controle, Coorte e Ensaios',
          'Interpretação de intervalos de confiança',
        ],
        areaId: 'medicina-preventiva',
        moduleId: 'epidemiologia',
        lessonIds: ['epi-01', 'epi-02'],
      },
      {
        week: 4,
        title: 'Epidemiologia — Testes Diagnósticos e Revisão',
        topics: [
          'Validade de Testes Diagnósticos: Sensibilidade e Especificidade',
          'Valores preditivos e razão de verossimilhança',
          'Simulado integrado de Medicina Preventiva',
        ],
        areaId: 'medicina-preventiva',
        moduleId: 'epidemiologia',
        lessonIds: ['epi-03'],
      },
    ],
  },
];
