export interface ChurchLeader {
  name: string;
  responsibility: string;
  image: string;
  period: string;
}

export interface AdministrativeLeader {
  name: string;
  role: string;
  image: string;
  period: string;
}

export interface MeetingTime {
  day: string;
  hours: string;
}

export interface ChurchItem {
  slug: string;
  name: string;
  baptismName: string;
  city: string;
  address: string;
  neighborhood: string;
  locality: string;
  sector: string;
  district: string;
  circumscription: string;
  regional: string;
  region: string;
  status: string;
  description: string;
  pastorVision: string;
  meetingTimes: MeetingTime[];
  schedule: string;
  contact: string;
  image: string;
  alt: string;
  mapUrl: string;
  leaders: ChurchLeader[];
  administrativeLeaders: AdministrativeLeader[];
}

const defaultContact = "(+237) 699 76 54 35";
const defaultLeaderImage = "/images/fondateur.png";

function makeLeaders(): ChurchLeader[] {
  return [
    {
      name: "À renseigner",
      responsibility: "Pasteur responsable",
      image: defaultLeaderImage,
      period: "2024 - Aujourd'hui",
    },
    {
      name: "À renseigner",
      responsibility: "Ancien d'église",
      image: defaultLeaderImage,
      period: "2024 - Aujourd'hui",
    },
    {
      name: "À renseigner",
      responsibility: "Responsable administratif",
      image: defaultLeaderImage,
      period: "2024 - Aujourd'hui",
    },
  ];
}

function makeAdministrativeLeaders(): AdministrativeLeader[] {
  return [
    {
      name: "À renseigner",
      role: "Responsable Régional",
      image: defaultLeaderImage,
      period: "2024 - Aujourd'hui",
    },
    {
      name: "À renseigner",
      role: "Responsable Circonscription",
      image: defaultLeaderImage,
      period: "2024 - Aujourd'hui",
    },
    {
      name: "À renseigner",
      role: "Responsable Secteur",
      image: defaultLeaderImage,
      period: "2024 - Aujourd'hui",
    },
    {
      name: "À renseigner",
      role: "Responsable District",
      image: defaultLeaderImage,
      period: "2024 - Aujourd'hui",
    },
  ];
}

function makeChurch(
  slug: string,
  name: string,
  neighborhood: string,
  sector: string,
  district: string,
  circumscription: string,
  image: string,
): ChurchItem {
  const address = `${neighborhood}, Yaoundé`;
  return {
    slug,
    name,
    baptismName: "À renseigner",
    city: "Yaoundé",
    address,
    neighborhood,
    locality: neighborhood,
    sector,
    district,
    circumscription,
    regional: "Régional Centre",
    region: address,
    status: "Assemblée locale",
    description:
      "Une assemblée EMEC consacrée à l'adoration, à l'enseignement biblique, à la communion fraternelle et à l'accompagnement spirituel des familles.",
    pastorVision:
      "Conduire l'assemblée dans une foi vivante, former des disciples solides et faire de chaque famille un témoin de Christ dans sa localité.",
    meetingTimes: [
      { day: "Dimanche", hours: "09h00 - 12h30" },
      { day: "Mercredi", hours: "17h30 - 19h00" },
    ],
    schedule: "Dimanche 09h00 - 12h30",
    contact: defaultContact,
    image,
    alt: name,
    mapUrl: `https://maps.google.com/?q=${encodeURIComponent(`${name} ${address} Cameroun`)}`,
    leaders: makeLeaders(),
    administrativeLeaders: makeAdministrativeLeaders(),
  };
}

export const churches: ChurchItem[] = [
  makeChurch(
    "pk10",
    "Assemblée de PK10",
    "PK10",
    "Secteur Yaoundé Est",
    "District Yaoundé Est 1",
    "Circonscription Yaoundé Est",
    "/images/home-2.jpg",
  ),
  makeChurch(
    "ekounou",
    "Assemblée d'Ekounou",
    "Ekounou",
    "Secteur Yaoundé Est",
    "District Yaoundé Est 1",
    "Circonscription Yaoundé Est",
    "/images/home-3.jpg",
  ),
  makeChurch(
    "ndong",
    "Assemblée de Ndong",
    "Ndong",
    "Secteur Yaoundé Est",
    "District Yaoundé Est 2",
    "Circonscription Yaoundé Est",
    "/images/home-10.jpg",
  ),
  makeChurch(
    "mvan-1",
    "Assemblée de Mvan 1",
    "Mvan",
    "Secteur Yaoundé Sud",
    "District Yaoundé Sud 1",
    "Circonscription Yaoundé Sud",
    "/images/home-1.jpg",
  ),
  makeChurch(
    "mvan-2",
    "Assemblée de Mvan 2",
    "Mvan",
    "Secteur Yaoundé Sud",
    "District Yaoundé Sud 1",
    "Circonscription Yaoundé Sud",
    "/images/hero-2.jpg",
  ),
  makeChurch(
    "ahala",
    "Assemblée d'Ahala",
    "Ahala",
    "Secteur Yaoundé Sud",
    "District Yaoundé Sud 2",
    "Circonscription Yaoundé Sud",
    "/images/hero-3.jpg",
  ),
  makeChurch(
    "nkoabang",
    "Assemblée de Nkoabang",
    "Nkoabang",
    "Secteur Yaoundé Est",
    "District Yaoundé Est 2",
    "Circonscription Yaoundé Est",
    "/images/image-001.png",
  ),
  makeChurch(
    "leboudi",
    "Assemblée de Leboudi",
    "Leboudi",
    "Secteur Yaoundé Ouest",
    "District Yaoundé Ouest 1",
    "Circonscription Yaoundé Ouest",
    "/images/image-002.png",
  ),
  makeChurch(
    "nkolbisson",
    "Assemblée de Nkolbisson",
    "Nkolbisson",
    "Secteur Yaoundé Ouest",
    "District Yaoundé Ouest 1",
    "Circonscription Yaoundé Ouest",
    "/images/mandate-1.jpg",
  ),
];

export function findChurchBySlug(slug: string) {
  return churches.find((church) => church.slug === slug);
}
