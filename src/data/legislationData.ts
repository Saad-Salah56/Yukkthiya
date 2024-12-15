export interface LegislationDocument {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
}

export const legislationDocuments: LegislationDocument[] = [
  {
    id: 'penal-code',
    title: 'Penal Code',
    description: 'The Penal Code of Sri Lanka',
    pdfUrl: '/pdfs/4c03e2af2.pdf'
  }
];