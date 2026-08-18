import documentsIndex from './official-documents/index.json';

export type OfficialDocumentBlockType =
  | 'paragraph'
  | 'preamble'
  | 'title'
  | 'chapter'
  | 'section'
  | 'annex'
  | 'article';

export interface OfficialDocumentBlock {
  type: OfficialDocumentBlockType;
  title?: string;
  text?: string;
  number?: number;
}

export interface OfficialDocumentMeta {
  slug: string;
  title: string;
  year: string;
  pages: number;
  articleCount: number;
  file: string;
  description: string;
  highlights: string[];
}

export interface OfficialDocument extends OfficialDocumentMeta {
  blocks: OfficialDocumentBlock[];
}

export const officialDocumentsIndex = documentsIndex as OfficialDocumentMeta[];

export function findOfficialDocumentMetaBySlug(slug: string) {
  return officialDocumentsIndex.find((document) => document.slug === slug);
}

export function isOfficialDocumentSlug(slug: string) {
  return Boolean(findOfficialDocumentMetaBySlug(slug));
}

export async function loadOfficialDocument(slug: string): Promise<OfficialDocument> {
  switch (slug) {
    case 'statuts':
      return (await import('./official-documents/statuts.json')).default as OfficialDocument;
    case 'reglement-interieur':
      return (await import('./official-documents/reglement-interieur.json')).default as OfficialDocument;
    case 'regime-financier':
      return (await import('./official-documents/regime-financier.json')).default as OfficialDocument;
    default:
      return (await import('./official-documents/statuts.json')).default as OfficialDocument;
  }
}
