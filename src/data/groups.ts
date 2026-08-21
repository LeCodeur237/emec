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
  motto?: string;
  officialReference?: string;
  highlights?: GroupHighlight[];
  galleryImages?: string[];
  leaders?: GroupLeader[];
  externalUrl?: string;
  photosUrl?: string;
  isPrivate?: boolean;
}

export interface GroupHighlight {
  title: string;
  description: string;
}

export interface GroupLeader {
  name: string;
  role: string;
  image: string;
  period: string;
}

function makeGroupGallery(folder: string, count = 0) {
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
    description: 'Un cadre d\'encadrement spirituel, familial et social pour les hommes chrétiens de l\'EMEC.',
    details: 'Le Groupe National d\'Hommes Chrétiens Actifs accompagne les hommes dans leur marche avec Dieu, leur responsabilité familiale, leur vie fraternelle et leur engagement dans l\'œuvre. Il aide les hommes à devenir des croyants stables, utiles à leur foyer, disponibles pour servir l\'Église et capables de soutenir les projets spirituels, matériels et sociaux.',
    focus: 'Encadrer les hommes sur les plans spirituel, familial et social',
    vision: 'Voir des hommes affermis dans la foi, responsables dans leur maison, solidaires entre eux et engagés dans le développement de l\'œuvre de Dieu.',
    action: 'Rencontres d\'édification, accompagnement fraternel, réflexion, mobilisation dans les activités de l\'Église, soutien aux projets et actions de solidarité.',
    audience: 'Hommes, pères, jeunes adultes',
    image: '/images/groupe-hommes.png',
    alt: 'Groupe d\'hommes de l\'EMEC',
    motto: 'Solidarité · Fraternité · Développement',
    officialReference: 'Règlement Intérieur EMEC · Articles 100-101',
    highlights: [
      { title: 'Encadrement', description: 'Fortifier les hommes dans la foi, la vie familiale, la responsabilité sociale et le service chrétien.' },
      { title: 'Renforcement', description: 'Accompagner les bureaux et les responsables pour une meilleure organisation des activités.' },
      { title: 'Développement', description: 'Soutenir les projets, microprojets et initiatives utiles au rayonnement de l\'œuvre.' },
      { title: 'Solidarité', description: 'Porter des actions d\'entraide et d\'assistance auprès des membres et des besoins prioritaires.' },
    ],
    galleryImages: makeGroupGallery('hommes'),
    leaders: makeGroupLeaders('/images/groupe-hommes.png'),
  },
  {
    slug: 'femmes',
    name: 'Groupe National des Femmes Chrétiennes Actives',
    description: 'Un groupe d\'action pour l\'encadrement spirituel, familial, social et économique des femmes chrétiennes.',
    details: 'Le Groupe National des Femmes Chrétiennes Actives rassemble les femmes de l\'EMEC autour de l\'Évangile, de la formation, du service, de l\'entraide et du développement. Il encourage chaque femme à grandir dans la foi, à être un modèle dans son foyer, à participer aux bonnes œuvres et à contribuer activement au relèvement des familles et de l\'Église.',
    focus: 'Former, encadrer et mobiliser les femmes chrétiennes actives',
    vision: 'Voir des femmes sauvées, affermies, utiles à leur famille, engagées dans l\'Église et capables de porter des actions concrètes au service de Dieu.',
    action: 'Évangélisation, retraites spirituelles, formation, accompagnement familial, bonnes œuvres, activités génératrices de revenus et actions de solidarité.',
    audience: 'Femmes, mères, jeunes femmes',
    image: '/images/groupe-femmes.png',
    alt: 'Groupe de femmes de l\'EMEC',
    motto: 'Salut · Soumission · Service',
    officialReference: 'Règlement Intérieur du GNFCA',
    highlights: [
      { title: 'Évangélisation', description: 'Répandre l\'Évangile et encourager les femmes à vivre une foi active et visible.' },
      { title: 'Famille', description: 'Conduire les femmes à être des repères de paix, de sagesse et de témoignage dans leur foyer.' },
      { title: 'Développement', description: 'Contribuer à la lutte contre la pauvreté par la formation, l\'entraide et les activités génératrices de revenus.' },
      { title: 'Bonnes œuvres', description: 'Promouvoir le service, la compassion, la solidarité et le soutien à l\'œuvre de Dieu.' },
    ],
    galleryImages: makeGroupGallery('femmes'),
    leaders: makeGroupLeaders('/images/groupe-femmes.png'),
  },
  {
    slug: 'jeunesse-pour-christ',
    name: 'La Jeunesse pour Christ',
    description: 'Le cadre d\'encadrement des jeunes chrétiens pour le service évangélique, spirituel et social.',
    details: 'La Jeunesse pour Christ est le groupe d\'action chargé d\'encadrer et d\'accompagner les jeunes chrétiens de l\'EMEC en vue du service évangélique et spirituel dans l\'Église, ainsi que du bénéfice de la société. Elle travaille à faire de chaque jeune un chrétien vivant, actif, productif, utile à lui-même, à sa famille et à l\'avancement de l\'œuvre du Seigneur.',
    focus: 'Encadrer les jeunes pour le service évangélique, spirituel et social',
    vision: 'Former une jeunesse sauvée, consacrée, active, productive, enracinée dans la foi et disponible pour servir Christ avec zèle et discipline.',
    action: 'Camps, séminaires, conférences, prières, études bibliques, évangélisation, sorties, concerts, activités sportives, actions de contact et initiatives productives conformes à l\'éthique chrétienne.',
    audience: 'Jeunes et étudiants',
    image: '/images/groupe-jpc.png',
    alt: 'Jeunesse pour Christ à l\'EMEC',
    motto: 'Sauvé pour servir',
    officialReference: 'Règlement Intérieur Jeunesse Pour Christ',
    highlights: [
      { title: 'Encadrement', description: 'Camps, séminaires, conférences, prières, visites, études bibliques et temps de partage.' },
      { title: 'Animation', description: 'Chant, musique, théâtre, poésie, arts, concerts, concours, excursions et activités sportives.' },
      { title: 'Contact', description: 'Campagnes d\'évangélisation, porte-à-porte, distribution de littérature, bonnes œuvres et actions de salubrité.' },
      { title: 'Production', description: 'Initiatives rentables et éthiques : littérature, commerce, construction, agriculture, élevage et projets utiles.' },
    ],
    galleryImages: makeGroupGallery('jeunesse', 9),
    leaders: makeGroupLeaders('/images/groupe-jpc.png'),
    externalUrl: 'https://jpcemec.com/about',
    photosUrl: 'https://www.facebook.com/jpcnationaleemec',
  },
  {
    slug: 'ecodim',
    name: 'L\'École du Dimanche',
    description: 'Le groupe chargé de conduire les enfants à Christ, de les instruire dans la Parole et de développer leurs talents.',
    details: 'L\'École du Dimanche, en abrégé ECODIM, est le cadre d\'encadrement des enfants de l\'EMEC. Elle accompagne les enfants de 3 à 15 ans dans la découverte de Jésus-Christ, l\'instruction biblique, la prière, les chants, la discipline chrétienne, la solidarité et le développement de leurs talents spirituels, sociaux et pratiques.',
    focus: 'Conduire les enfants à Christ et les instruire dans la voie du salut',
    vision: 'Voir les enfants connaître Jésus-Christ, grandir dans la Parole, éviter les dérives de la jeunesse et devenir utiles à l\'Église, à leur famille et à la société.',
    action: 'Cultes d\'enfants, enseignements bibliques, chants, prières, camps, festivals, causeries éducatives, visites, théâtre, concours, chorégraphies, activités manuelles et formation des moniteurs.',
    audience: 'Enfants de 3 à 15 ans, parents et moniteurs',
    image: '/images/groupe-ecodim.png',
    alt: 'ECODIM de l\'EMEC',
    motto: 'Conduire les enfants à Jésus-Christ',
    officialReference: 'Règlement Intérieur de l\'ECODIM',
    highlights: [
      { title: 'Tranches d\'âge', description: 'L\'encadrement couvre les enfants de 3 à 15 ans, avec des classes adaptées à leur maturité.' },
      { title: 'Formation biblique', description: 'Enseignements, chants, prières, témoignages et apprentissage progressif de la vie chrétienne.' },
      { title: 'Éveil des talents', description: 'Chorégraphie, théâtre, concours, activités manuelles et expression des dons des enfants.' },
      { title: 'Lien avec les familles', description: 'Visites, écoute, conseils, causeries éducatives et accompagnement avec les parents.' },
    ],
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
    motto: 'Service discret d\'intercession',
    officialReference: 'Groupe d\'action interne',
    highlights: [
      { title: 'Discrétion', description: 'Le groupe reste visible comme ministère de prière, mais ses détails internes ne sont pas publiés.' },
      { title: 'Soutien spirituel', description: 'Il accompagne les programmes, les familles, les serviteurs et les besoins de l\'œuvre dans la prière.' },
    ],
    isPrivate: true,
  },
  {
    slug: 'oeuvres-sociales',
    name: 'Direction des Œuvres Sociales et de la Compassion',
    description: 'Le cadre de compassion de l\'EMEC pour servir les vulnérables et manifester l\'amour de Christ par des actes concrets.',
    details: 'La Direction des Œuvres Sociales et de la Compassion exprime la compassion de Christ par des actions concrètes : entraide, accompagnement, assistance et mobilisation en faveur des personnes vulnérables. Elle rend visible l\'amour de Dieu dans la société en répondant aux besoins réels des familles, des personnes isolées et des communautés fragilisées.',
    focus: 'Servir les familles, soutenir les vulnérables et agir avec compassion',
    vision: 'Rendre visible l\'amour de Christ par une présence concrète auprès des personnes fragilisées, des familles et des communautés dans le besoin.',
    action: 'Collectes, assistance, visites, accompagnement, actions de solidarité et mobilisation de volontaires pour répondre aux besoins prioritaires.',
    audience: 'Volontaires et partenaires sociaux',
    image: '/images/groupe-sociale.png',
    alt: 'Œuvres sociales de l\'EMEC',
    motto: 'Compassion · Service · Solidarité',
    officialReference: 'Orientation sociale de l\'EMEC',
    highlights: [
      { title: 'Compassion', description: 'Agir auprès des familles, personnes isolées, malades, vulnérables et communautés fragilisées.' },
      { title: 'Mobilisation', description: 'Encourager les volontaires, partenaires et ressources utiles aux actions sociales.' },
    ],
    externalUrl: 'https://www.dosc.egliseemec.org',
  },
];

export function findGroupBySlug(slug: string) {
  return groups.find((group) => group.slug === slug);
}