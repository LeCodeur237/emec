export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  position?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/images/home-1.jpg',
    alt: 'Moment de célébration à l\'EMEC',
    category: 'Cultes',
    position: 'center center',
  },
  {
    src: '/images/home-2.jpg',
    alt: 'Communauté EMEC réunie pour un programme',
    category: 'Communauté',
    position: '35% center',
  },
  {
    src: '/images/home-3.jpg',
    alt: 'Temps d\'adoration et de prière à l\'EMEC',
    category: 'Prière',
    position: '60% center',
  },
  {
    src: '/images/home-10.jpg',
    alt: 'Rencontre fraternelle de la famille EMEC',
    category: 'Communion',
    position: '75% center',
  },
  {
    src: '/images/hero-2.jpg',
    alt: 'Service et communion au sein de l\'EMEC',
    category: 'Service',
    position: '45% center',
  },
  {
    src: '/images/hero-3.jpg',
    alt: 'Famille EMEC rassemblée dans la joie',
    category: 'Famille',
    position: '25% center',
  },
  {
    src: '/images/mandate-evangile.png',
    alt: 'Annonce de l\'Évangile',
    category: 'Mandat',
  },
  {
    src: '/images/mandate-bapteme.png',
    alt: 'Baptême et engagement chrétien',
    category: 'Mandat',
  },
  {
    src: '/images/mandate-parole.png',
    alt: 'Enseignement biblique et formation',
    category: 'Formation',
  },
  {
    src: '/images/mandate-service.png',
    alt: 'Service et compassion',
    category: 'Service',
  },
  {
    src: '/images/groupe-hommes.png',
    alt: 'Groupe d\'hommes de l\'EMEC',
    category: 'Groupes',
  },
  {
    src: '/images/groupe-femmes.png',
    alt: 'Groupe de femmes de l\'EMEC',
    category: 'Groupes',
  },
  {
    src: '/images/groupe-jpc.png',
    alt: 'Jeunesse pour Christ à l\'EMEC',
    category: 'Groupes',
  },
  {
    src: '/images/groupe-ecodim.png',
    alt: 'ECODIM de l\'EMEC',
    category: 'Groupes',
  },
  {
    src: '/images/groupe-sociale.png',
    alt: 'Œuvres sociales de l\'EMEC',
    category: 'Actions sociales',
  },
];
