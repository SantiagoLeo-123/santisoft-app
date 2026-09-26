// Helper to handle and convert Google Drive URLs for embedded playback

// Mapping of official GO Google Drive IDs
export const GO_OFFICIAL_DRIVE_IDS: Record<string, string> = {
  'Anticoncepção': '1NAdDvXxWNxPDjpjfE57WSpv52SxVry5c',
  'Diagnósticos de Gravidez e Modificações do Organismo': '1d_OCrXjH-uwYAlZoCXoluYekJBIAcbyi',
  'Doenças Clínicas da Gestação': '1CPvkV_8svpVD_kNYRtPvdwYvX8Px2zbR',
  'Endocrinoginecologia e Infertilidade': '1xWFt7-79xlxGOFherNJeo_h_tN8_i_S6',
  'Fórcipe, Endometrite e Hemorragia Puerperal': '1rzfVaMnAQxV9RRPt-3o6sXxdHWmRPu4q',
  'Hemorragias na Primeira Metade': '1URlsIuQYWg9s7nEtj97R_UHa7dnklObs',
  'Hemorragias na Segunda Metade e DHP': '1ULZoEYlur3h3OKTRFey_OkzlfM3Pa5BM',
  'Neoplasias Ginecológicas': '1amDj4Z91efkZhjM-lwJzz30d94s_J6Ib',
  'Parto e Prematuridade': '1T-_xwlyLe3jbOIJb-K8vg0IAqRSHHRoi',
  'Pré-natal, Estática Fetal e Indução de Parto': '1rgiduo1BICWESZ7KJweOjRYJDI8yXvkU',
  'Sangramento Uterino Anormal e Endometriose': '1QSpTTDscZfRphnPbdPuFmQniieDdVRb7',
  'Sofrimento Fetal': '1f-s3T30HRFTlDs4g-me1GUhE_6MdwP9u',
  'Uroginecologia - Incontinência e Prolapso': '1uB_ZvKDrWb5q8n29b-ZTXiVXpuYA3RUU',
  'IST': '13TqD669KoNzlaEqY4bogRFkDLksZKnbY',
};

// Mapping of known curriculum drive file IDs for Pediatria and GO lessons
export const KNOWN_DRIVE_IDS: Record<string, string> = {
  // GO official IDs mapped by lesson name or slug
  ...GO_OFFICIAL_DRIVE_IDS,
  'go-01': '1NAdDvXxWNxPDjpjfE57WSpv52SxVry5c',
  'go-02': '1d_OCrXjH-uwYAlZoCXoluYekJBIAcbyi',
  'go-03': '1CPvkV_8svpVD_kNYRtPvdwYvX8Px2zbR',
  'go-04': '1xWFt7-79xlxGOFherNJeo_h_tN8_i_S6',
  'go-05': '1rzfVaMnAQxV9RRPt-3o6sXxdHWmRPu4q',
  'go-06': '1URlsIuQYWg9s7nEtj97R_UHa7dnklObs',
  'go-07': '1ULZoEYlur3h3OKTRFey_OkzlfM3Pa5BM',
  'go-08': '1amDj4Z91efkZhjM-lwJzz30d94s_J6Ib',
  'go-09': '1T-_xwlyLe3jbOIJb-K8vg0IAqRSHHRoi',
  'go-10': '1rgiduo1BICWESZ7KJweOjRYJDI8yXvkU',
  'go-11': '1QSpTTDscZfRphnPbdPuFmQniieDdVRb7',
  'go-12': '1f-s3T30HRFTlDs4g-me1GUhE_6MdwP9u',
  'go-13': '1uB_ZvKDrWb5q8n29b-ZTXiVXpuYA3RUU',
  'go-14': '13TqD669KoNzlaEqY4bogRFkDLksZKnbY',
  'go-ist': '13TqD669KoNzlaEqY4bogRFkDLksZKnbY',

  // Pediatria curriculum direct IDs
  'aulas-ped-01': '1avJORgPn_FEnENyqiapcgj2XsFwF2zBV',
  'aulas-ped-02': '12oqAtsiwl-HssEB0pGNCsSplXLjYHW1k',
  'aulas-ped-03': '1G48v3jMRSWFObFADTPUbhkqn1szomMoC',
  'aulas-ped-04': '1twV2Pn6-heypPWW9mWkd1QaYEUAq6oLr',
  'aulas-ped-05': '13c2npdUFzPeFf9ODvCZECu9R6TzbxjzX',
  'aulas-ped-06': '1mOuc7bA2ljk7f_q0MDDt5SkDHXCCJjsj',
  'aulas-ped-07': '1K08_YemumJVvA9dgvtKv2Mv4xy9EeILn',
  'aulas-ped-08': '1F7KuoL17uLsEYSUqk3Hqaika16a4CfZb',
  'aulas-ped-09': '1aQOxOLJEqVSA80U9j3UeoGVjqMnoe2RT',
  'aulas-ped-10': '1Bt7qIpkYhUARB9e5vGOkQve8Jr60jEXS',
  'aulas-ped-11': '1Bry1uf9pPJ08dJmUduHBk0kIma_I7AhJ',
  'aulas-ped-12': '1g8eI7QbmknoXz6hjK0pIGFnkBRvaN-1T',
  'aulas-ped-13': '1fdegMAtulj0HLIwbmyhvi-9VS2iLnfW6',
};

/**
 * Converts any Google Drive URL (like /view?usp=sharing) into /preview for iframe embed
 */
export function convertToEmbedDriveUrl(rawUrlOrId: string): string {
  if (!rawUrlOrId) return '';
  const trimmed = rawUrlOrId.trim();

  // If it's already an embed/preview URL
  if (trimmed.includes('/preview')) return trimmed;

  // If it ends with /view or /view?usp=...
  if (trimmed.includes('/view')) {
    return trimmed.replace(/\/view(\?.*)?$/, '/preview');
  }

  // Extract ID from full URL https://drive.google.com/file/d/ID/...
  const match = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }

  // If it's a bare Drive file ID
  if (/^[a-zA-Z0-9_-]{20,}$/.test(trimmed)) {
    return `https://drive.google.com/file/d/${trimmed}/preview`;
  }

  return trimmed;
}

/**
 * Returns external URL for opening in Google Drive in a new tab
 */
export function convertToExternalDriveUrl(rawUrlOrId: string): string {
  if (!rawUrlOrId) return '';
  const trimmed = rawUrlOrId.trim();

  if (trimmed.includes('/preview')) {
    return trimmed.replace(/\/preview(\?.*)?$/, '/view?usp=sharing');
  }

  const match = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return `https://drive.google.com/file/d/${match[1]}/view?usp=sharing`;
  }

  if (/^[a-zA-Z0-9_-]{20,}$/.test(trimmed)) {
    return `https://drive.google.com/file/d/${trimmed}/view?usp=sharing`;
  }

  return trimmed;
}

/**
 * Resolves the Drive embed and external URL for a lesson ID
 */
export function resolveLessonDriveUrls(
  lessonId: string,
  customUrls?: Record<string, string>,
  directDriveId?: string,
): { embedUrl: string; externalUrl: string; isCustom: boolean } {
  const custom = customUrls?.[lessonId];
  if (custom && custom.trim()) {
    return {
      embedUrl: convertToEmbedDriveUrl(custom),
      externalUrl: convertToExternalDriveUrl(custom),
      isCustom: true,
    };
  }

  if (directDriveId && directDriveId.trim()) {
    const id = directDriveId.trim();
    return {
      embedUrl: `https://drive.google.com/file/d/${id}/preview`,
      externalUrl: `https://drive.google.com/file/d/${id}/view?usp=sharing`,
      isCustom: false,
    };
  }

  const knownId = KNOWN_DRIVE_IDS[lessonId];
  if (knownId) {
    return {
      embedUrl: `https://drive.google.com/file/d/${knownId}/preview`,
      externalUrl: `https://drive.google.com/file/d/${knownId}/view?usp=sharing`,
      isCustom: false,
    };
  }

  // Default fallback sample video or general drive preview
  return {
    embedUrl: 'https://drive.google.com/file/d/1avJORgPn_FEnENyqiapcgj2XsFwF2zBV/preview',
    externalUrl: 'https://drive.google.com/file/d/1avJORgPn_FEnENyqiapcgj2XsFwF2zBV/view?usp=sharing',
    isCustom: false,
  };
}
