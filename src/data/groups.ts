export interface GroupItem {
  slug: string;
  name: string;
  description: string;
  details: string;
  focus: string;
  vision: string;
  action: string;
  audience: string;
  image: string;
  alt: string;
  galleryImages?: string[];
  leaders?: GroupLeader[];
  externalUrl?: string;
  photosUrl?: string;
  isPrivate?: boolean;
}

export interface GroupLeader {
  name: string;
  role: string;
  image: string;
  period: string;
}

function makeGroupGallery(folder: string, count = 6) {
  return Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(3, '0');
    return `/images/${folder}/image-${number}.png`;
  });
}

function makeGroupLeaders(image: string): GroupLeader[] {
  return [
    { name: 'À renseigner', role: 'Responsable principal', image, period: '2024 - Aujourd\'hui' },
    { name: 'À renseigner', role: 'Responsable adjoint', image, period: '2024 - Aujourd\'hui' },
    { name: 'À renseigner', role: 'Coordination', image, period: '2024 - Aujourd\'hui' },
    { name: 'À renseigner', role: 'Encadrement spirituel', image, period: '2024 - Aujourd\'hui' },
    { name: 'À renseigner', role: 'Organisation', image, period: '2024 - Aujourd\'hui' },
    { name: 'À renseigner', role: 'Secrétariat', image, period: '2024 - Aujourd\'hui' },
  ];
}

export const groups: GroupItem[] = [
  {
    slug: 'hommes',
    name: 'Groupe National d\'Hommes Chrétiens Actifs',
    description: 'Un groupe d\'action et de réflexion dédié à l\'encadrement spirituel, familial et social des hommes chrétiens.',
    details: 'Le Groupe National d\'Hommes Chrétiens Actifs accompagne les hommes sur les plans spirituel, familial et social. Il encourage une foi responsable, une vie familiale équilibrée, un engagement actif dans l\'Église et un appui concret à l\'œuvre de Dieu, conformément à l\'esprit du Règlement Intérieur de l\'EMEC.',
    focus: 'Encadrer les hommes sur les plans spirituel, familial et social',
    vision: 'Voir des hommes affermis dans leur foi, responsables dans leur maison et disponibles pour soutenir l\'œuvre de Dieu avec maturité.',
    action: 'Rencontres d\'édification, réflexion, accompagnement fraternel, mobilisation dans les activités de l\'Église et appui matériel ou financier à l\'œuvre de Dieu.',
    audience: 'Hommes, pères, jeunes adultes',
    image: '/images/groupe-hommes.png',
    alt: 'Groupe d\'hommes de l\'EMEC',
    galleryImages: makeGroupGallery('hommes'),
    leaders: makeGroupLeaders('/images/groupe-hommes.png'),
  },
  {
    slug: 'femmes',
    name: 'Groupe National des Femmes Chrétiennes Actives',
    description: 'Un groupe d\'action et de réflexion pour l\'encadrement spirituel, familial et social des femmes chrétiennes.',
    details: 'Le Groupe National des Femmes Chrétiennes Actives accompagne les femmes dans leur vie spirituelle, familiale et sociale. Il favorise la formation, l\'entraide, la réflexion, le service et la contribution active des femmes à l\'œuvre de Dieu.',
    focus: 'Encadrer les femmes chrétiennes et soutenir leur engagement dans l\'œuvre',
    vision: 'Voir des femmes affermies dans la foi, utiles à leur famille, engagées dans l\'Église et capables de porter des actions concrètes au service de Dieu.',
    action: 'Temps de prière, formation, accompagnement, entraide, actions communautaires et appui matériel ou financier à l\'œuvre de Dieu.',
    audience: 'Femmes, mères, jeunes femmes',
    image: '/images/groupe-femmes.png',
    alt: 'Groupe de femmes de l\'EMEC',
    galleryImages: makeGroupGallery('femmes'),
    leaders: makeGroupLeaders('/images/groupe-femmes.png'),
  },
  {
    slug: 'jeunesse-pour-christ',
    name: 'La Jeunesse pour Christ',
    description: 'Le cadre d\'encadrement et d\'accompagnement des jeunes chrétiens pour le service évangélique et spirituel dans l\'Église.',
    details: 'La Jeunesse pour Christ est un groupe d\'action chargé d\'encadrer et d\'accompagner les jeunes chrétiens en vue du service évangélique et spirituel dans l\'Église. Elle aide les jeunes à grandir dans la Parole, à servir Christ avec sérieux et à participer à la mission de l\'EMEC dans leurs subdivisions ecclésiales.',
    focus: 'Encadrer les jeunes pour le service évangélique et spirituel',
    vision: 'Former une jeunesse consacrée à Christ, enracinée dans la foi et disponible pour servir l\'Église avec zèle, discipline et témoignage.',
    action: 'Rencontres d\'édification, rassemblements de jeunes, formation, évangélisation, accompagnement spirituel et mobilisation dans les activités de l\'Église.',
    audience: 'Jeunes et étudiants',
    image: '/images/groupe-jpc.png',
    alt: 'Jeunesse pour Christ à l\'EMEC',
    galleryImages: makeGroupGallery('jeunesse'),
    leaders: makeGroupLeaders('/images/groupe-jpc.png'),
    externalUrl: 'https://jpcemec.com/about',
    photosUrl: 'https://www.facebook.com/jpcnationaleemec',
  },
  {
    slug: 'ecodim',
    name: 'L\'École du Dimanche',
    description: 'Le groupe chargé de l\'encadrement, du suivi et de l\'imprégnation des enfants à la foi en vue du salut.',
    details: 'L\'École du Dimanche, en abrégé ECODIM, accompagne les enfants dans la découverte de la foi, l\'apprentissage de la Parole et la croissance spirituelle. Elle offre un cadre adapté pour leur encadrement, leur suivi et leur imprégnation biblique en vue du salut de leurs âmes.',
    focus: 'Encadrer les enfants et les imprégner à la foi chrétienne',
    vision: 'Voir les enfants connaître Christ, grandir dans la Parole et recevoir dès leur jeune âge des repères solides pour marcher avec Dieu.',
    action: 'Enseignements bibliques adaptés, suivi des enfants, activités d\'éveil spirituel, accompagnement et participation à la vie de l\'Église.',
    audience: 'Enfants et encadreurs',
    image: '/images/groupe-ecodim.png',
    alt: 'ECODIM de l\'EMEC',
    galleryImages: makeGroupGallery('ecodim'),
    leaders: makeGroupLeaders('/images/groupe-ecodim.png'),
  },
  {
    slug: 'intercession',
    name: 'Les Conquérants en Marche',
    description: 'Le groupe d\'action dont la mission essentielle est l\'intercession au sein de l\'Église.',
    details: 'Les Conquérants en Marche, en abrégé LESCEM, portent la mission essentielle de l\'intercession au sein de l\'Église. Ce service accompagne spirituellement la vie de l\'EMEC, soutient les programmes dans la prière et demeure exercé avec discrétion, discipline et fidélité.',
    focus: 'Assurer l\'intercession au sein de l\'Église',
    vision: 'Maintenir une couverture spirituelle constante sur l\'Église, les familles et les missions, dans la recherche de la volonté de Dieu.',
    action: 'Intercession, veilles, soutien spirituel des programmes et accompagnement dans la prière des besoins portés par l\'Église.',
    audience: 'Intercesseurs et croyants engagés',
    image: '/images/groupe-intercession.png',
    alt: 'Les Conquérants en Marche de l\'EMEC',
    isPrivate: true,
  },
  {
    slug: 'oeuvres-sociales',
    name: 'Groupe des Œuvres Sociales',
    description: 'Engagés à manifester l\'amour de Christ par des actions concrètes de compassion et de justice sociale.',
    details: 'Ce groupe exprime la compassion de Christ par des actions concrètes : entraide, accompagnement, assistance et mobilisation en faveur des personnes vulnérables. Il rend visible l\'amour de Dieu dans la société en répondant aux besoins réels des familles, des personnes isolées et des communautés fragilisées. Son service rappelle que l\'Évangile se prêche aussi par des actes de bonté, de justice et de solidarité.',
    focus: 'Servir les familles, soutenir les vulnérables et agir avec compassion',
    vision: 'Rendre visible l\'amour de Christ par une présence concrète auprès des personnes fragilisées, des familles et des communautés dans le besoin.',
    action: 'Collectes, assistance, visites, accompagnement, actions de solidarité et mobilisation de volontaires pour répondre aux besoins prioritaires.',
    audience: 'Volontaires et partenaires sociaux',
    image: '/images/groupe-sociale.png',
    alt: 'Groupe des œuvres sociales de l\'EMEC',
    externalUrl: 'https://www.dosc.egliseemec.org',
  },
];

export function findGroupBySlug(slug: string) {
  return groups.find((group) => group.slug === slug);
}
