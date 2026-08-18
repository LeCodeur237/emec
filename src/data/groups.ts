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
    name: 'Groupe d\'Hommes',
    description: 'Un espace de fraternité pour les hommes croyants, marqué par l\'enseignement, la prière et l\'encouragement mutuel dans la foi.',
    details: 'Ce groupe accompagne les hommes dans leur croissance spirituelle, leur responsabilité familiale et leur engagement au service de Dieu. C\'est un cadre de fraternité, d\'enseignement et d\'édification où les hommes apprennent à marcher avec droiture, à porter leur maison dans la prière et à devenir des modèles de foi, de caractère et de service dans l\'Église comme dans la société.',
    focus: 'Former des hommes solides, responsables et enracinés dans la foi',
    vision: 'Voir des hommes affermis dans leur identité en Christ, capables de conduire leur maison avec sagesse et de servir l\'œuvre de Dieu avec fidélité.',
    action: 'Rencontres fraternelles, temps d\'enseignement, prières ciblées, accompagnement mutuel et mobilisation dans les activités de l\'Église.',
    audience: 'Hommes, pères, jeunes adultes',
    image: '/images/groupe-hommes.png',
    alt: 'Groupe d\'hommes de l\'EMEC',
    galleryImages: makeGroupGallery('hommes'),
    leaders: makeGroupLeaders('/images/groupe-hommes.png'),
  },
  {
    slug: 'femmes',
    name: 'Groupes de Femmes',
    description: 'Une communauté de femmes animées par le zèle du ministère, le soutien fraternel et la croissance spirituelle ensemble.',
    details: 'Les groupes de femmes sont des espaces de prière, d\'écoute, de formation et de service. Ils encouragent les femmes à grandir dans leur relation avec Dieu, à soutenir les familles, à développer leurs dons et à porter des œuvres utiles à la communauté. Ces rencontres nourrissent la communion fraternelle, la maturité spirituelle et l\'engagement concret dans la maison de Dieu.',
    focus: 'Encourager, former, restaurer et servir avec sagesse',
    vision: 'Élever des femmes de foi, équilibrées et influentes, qui bâtissent leur foyer, soutiennent l\'Église et portent la grâce de Dieu dans leur environnement.',
    action: 'Temps de prière, partage biblique, accompagnement, actions sociales, entraide et mobilisation autour des besoins des familles.',
    audience: 'Femmes, mères, jeunes femmes',
    image: '/images/groupe-femmes.png',
    alt: 'Groupe de femmes de l\'EMEC',
    galleryImages: makeGroupGallery('femmes'),
    leaders: makeGroupLeaders('/images/groupe-femmes.png'),
  },
  {
    slug: 'jeunesse-pour-christ',
    name: 'La Jeunesse pour Christ',
    description: 'Un mouvement dynamique de jeunes engagés, cherchant à servir Christ avec passion et à impacter leur génération.',
    details: 'La Jeunesse pour Christ rassemble les jeunes autour de la Parole, de la louange, de la prière et des projets d\'impact. Elle aide chaque jeune à construire une identité solide en Christ, à résister aux influences destructrices et à découvrir sa place dans le service. C\'est un mouvement de réveil, de formation et de témoignage pour une génération consacrée à Dieu.',
    focus: 'Équiper une génération consacrée, créative et missionnaire',
    vision: 'Former une jeunesse passionnée pour Christ, stable dans la foi, capable d\'influencer sa génération par la pureté, l\'excellence et le témoignage.',
    action: 'Rencontres de jeunes, louange, enseignements pratiques, projets d\'impact, évangélisation, encadrement et développement des talents.',
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
    name: 'L\'ECODIM',
    description: 'Un groupe de disciples matures engagés dans le service, l\'enseignement et le témoignage de la puissance de Dieu.',
    details: 'L\'ECODIM accompagne les disciples dans la connaissance biblique, la discipline spirituelle et le témoignage chrétien. C\'est un cadre de formation progressive où l\'on apprend à comprendre la Parole, à vivre les principes du Royaume et à servir l\'Église avec fidélité. Sa vocation est de faire grandir des croyants équilibrés, enracinés et capables de transmettre à leur tour.',
    focus: 'Former des disciples enracinés, équilibrés et utiles au ministère',
    vision: 'Bâtir des disciples solides, instruits dans la Parole, capables de vivre l\'Évangile avec cohérence et de transmettre fidèlement ce qu\'ils ont reçu.',
    action: 'Parcours bibliques, enseignements structurés, exercices spirituels, accompagnement des disciples et préparation au service.',
    audience: 'Disciples et serviteurs',
    image: '/images/groupe-ecodim.png',
    alt: 'ECODIM de l\'EMEC',
    galleryImages: makeGroupGallery('ecodim'),
    leaders: makeGroupLeaders('/images/groupe-ecodim.png'),
  },
  {
    slug: 'intercession',
    name: 'Groupe d\'Intercession',
    description: 'Un groupe de priants engagés dans l\'intercession fervente pour l\'Église, les familles et les nations.',
    details: 'Le groupe d\'intercession porte dans la prière les familles, l\'Église, les villes et les nations. Il entretient une vie de veille spirituelle et soutient les programmes de l\'EMEC par une prière constante. Les intercesseurs se tiennent devant Dieu avec persévérance afin de couvrir l\'œuvre, discerner les charges spirituelles et accompagner les temps forts de l\'Église.',
    focus: 'Prier avec persévérance pour l\'Église, les familles et les nations',
    vision: 'Maintenir une couverture spirituelle constante sur l\'Église, les familles et les nations, en recherchant la volonté de Dieu avec discernement.',
    action: 'Réunions de prière, veilles, intercession pour les programmes, accompagnement spirituel des besoins et mobilisation dans les temps forts.',
    audience: 'Intercesseurs et croyants engagés',
    image: '/images/groupe-intercession.png',
    alt: 'Groupe d\'intercession de l\'EMEC',
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
    externalUrl: 'https://www.oeuvres-sociales.egliseemec.org',
  },
];

export function findGroupBySlug(slug: string) {
  return groups.find((group) => group.slug === slug);
}
