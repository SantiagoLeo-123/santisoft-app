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
 * Extracts a clean Google Drive file ID from any URL or raw ID,
 * stripping parameters like /view, /edit, /preview, ?usp=sharing, etc.
 */
export function extractDriveFileId(rawUrlOrId: string): string {
  if (!rawUrlOrId) return '';
  const trimmed = rawUrlOrId.trim();

  // Match /file/d/([a-zA-Z0-9_-]+)
  const fileDMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileDMatch) return fileDMatch[1];

  // Match ?id=([a-zA-Z0-9_-]+) or &id=([a-zA-Z0-9_-]+)
  const idQueryMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idQueryMatch) return idQueryMatch[1];

  // Match /d/([a-zA-Z0-9_-]+)
  const dMatch = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (dMatch) return dMatch[1];

  // If already bare ID (20+ chars)
  if (/^[a-zA-Z0-9_-]{20,}$/.test(trimmed)) {
    return trimmed;
  }

  // Fallback: strip query params and /view, /edit, /preview
  const clean = trimmed
    .replace(/[?#].*$/, '')
    .replace(/\/(preview|view|edit)(\/.*)?$/, '');
  const segments = clean.split('/');
  const last = segments[segments.length - 1];
  if (last && /^[a-zA-Z0-9_-]{15,}$/.test(last)) {
    return last;
  }

  return trimmed;
}

/**
 * Converts any Google Drive URL or ID into a clean /preview embed URL:
 * https://drive.google.com/file/d/${id}/preview
 */
export function convertToEmbedDriveUrl(rawUrlOrId: string): string {
  if (!rawUrlOrId) return '';
  const id = extractDriveFileId(rawUrlOrId);
  if (id && !id.startsWith('http://') && !id.startsWith('https://')) {
    return `https://drive.google.com/file/d/${id}/preview`;
  }
  return rawUrlOrId.trim();
}

/**
 * Returns external URL for opening cleanly in Google Drive:
 * https://drive.google.com/file/d/${id}/view
 */
export function convertToExternalDriveUrl(rawUrlOrId: string): string {
  if (!rawUrlOrId) return '';
  const id = extractDriveFileId(rawUrlOrId);
  if (id && !id.startsWith('http://') && !id.startsWith('https://')) {
    return `https://drive.google.com/file/d/${id}/view`;
  }
  return rawUrlOrId.trim();
}

/**
 * Resolves the Drive embed and external URL for a lesson ID
 */
export function resolveLessonDriveUrls(
  lessonId: string,
  customUrls?: Record<string, string>,
  directDriveId?: string,
): { embedUrl: string; externalUrl: string; isCustom: boolean; driveId: string } {
  let fileId = '';

  const custom = customUrls?.[lessonId];
  if (custom && custom.trim()) {
    fileId = extractDriveFileId(custom);
    return {
      embedUrl: `https://drive.google.com/file/d/${fileId}/preview`,
      externalUrl: `https://drive.google.com/file/d/${fileId}/view`,
      isCustom: true,
      driveId: fileId,
    };
  }

  if (directDriveId && directDriveId.trim()) {
    fileId = extractDriveFileId(directDriveId);
    return {
      embedUrl: `https://drive.google.com/file/d/${fileId}/preview`,
      externalUrl: `https://drive.google.com/file/d/${fileId}/view`,
      isCustom: false,
      driveId: fileId,
    };
  }

  const knownId = KNOWN_DRIVE_IDS[lessonId];
  if (knownId) {
    fileId = extractDriveFileId(knownId);
    return {
      embedUrl: `https://drive.google.com/file/d/${fileId}/preview`,
      externalUrl: `https://drive.google.com/file/d/${fileId}/view`,
      isCustom: false,
      driveId: fileId,
    };
  }

  // Default fallback sample video or general drive preview
  const defaultId = '1avJORgPn_FEnENyqiapcgj2XsFwF2zBV';
  return {
    embedUrl: `https://drive.google.com/file/d/${defaultId}/preview`,
    externalUrl: `https://drive.google.com/file/d/${defaultId}/view`,
    isCustom: false,
    driveId: defaultId,
  };
}
