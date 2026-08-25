import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import MandateView from '../views/MandateView.vue';
import ChurchesView from '../views/ChurchesView.vue';
import ChurchDetailView from '../views/ChurchDetailView.vue';
import MediaView from '../views/MediaView.vue';
import EventsView from '../views/EventsView.vue';
import ContactView from '../views/ContactView.vue';
import GroupDetailView from '../views/GroupDetailView.vue';
import GalleryView from '../views/GalleryView.vue';
import OfficialDocumentsView from '../views/OfficialDocumentsView.vue';
import GovernanceView from '../views/GovernanceView.vue';
import FinanceTransparencyView from '../views/FinanceTransparencyView.vue';
import DoctrineView from '../views/DoctrineView.vue';
import HistoryVisionView from '../views/HistoryVisionView.vue';
import StrategyVisionView from '../views/StrategyVisionView.vue';
import SocialWorksView from '../views/SocialWorksView.vue';

const SITE_URL = 'https://egliseemec.org';
const DEFAULT_TITLE = 'EMEC | Église Messianique Évangélique du Cameroun';
const DEFAULT_DESCRIPTION =
  "Site officiel de l'Église Messianique Évangélique du Cameroun : cultes, programmes, mandat, événements, médiathèque et contact.";
const DEFAULT_IMAGE = `${SITE_URL}/images/home-2.jpg`;

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: DEFAULT_TITLE,
      description: "Bienvenue à l'EMEC, une communauté de foi vivante au Cameroun : cultes, programmes, dons, galerie et prédications.",
      image: `${SITE_URL}/images/home-1.jpg`,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: {
      title: "Qui sommes-nous ? | EMEC",
      description: "Découvrez l'histoire, l'identité, les valeurs, l'héritage spirituel et le Conseil Exécutif de l'EMEC.",
      image: `${SITE_URL}/images/home-10.jpg`,
    },
  },
  {
    path: '/histoire-vision-2043',
    name: 'HistoryVision',
    component: HistoryVisionView,
    meta: {
      title: 'Histoire et Vision 2043 | EMEC',
      description: "Découvrez l'histoire de l'EMEC, son héritage apostolique, le séminaire de Belabo et la Vision 2043.",
      image: `${SITE_URL}/images/home-10.jpg`,
    },
  },
  {
    path: '/vision-2043',
    name: 'StrategyVision',
    component: StrategyVisionView,
    meta: {
      title: 'Vision stratégique 2043 | EMEC',
      description: "Comprendre les axes stratégiques 2023-2043 de l'EMEC : mission, développement, ressources humaines et gouvernance.",
      image: `${SITE_URL}/images/home-3.jpg`,
    },
  },
  {
    path: '/churches',
    name: 'Churches',
    component: ChurchesView,
    meta: {
      title: 'Nos églises | EMEC',
      description: "Trouvez une assemblée EMEC, consultez les adresses, les informations pratiques et les lieux de communion.",
      image: `${SITE_URL}/images/home-3.jpg`,
    },
  },
  {
    path: '/churches/:slug',
    name: 'ChurchDetail',
    component: ChurchDetailView,
    meta: {
      title: 'Assemblée EMEC | Nos églises',
      description: "Consultez les informations pratiques d'une assemblée EMEC : adresse, secteur, circonscription, contact et itinéraire.",
      image: `${SITE_URL}/images/home-3.jpg`,
    },
  },
  {
    path: '/mediatheque',
    name: 'Mediatheque',
    component: MediaView,
    meta: {
      title: 'Médiathèque et actualités | EMEC',
      description: "Suivez les actualités de l'EMEC, les événements, témoignages, enseignements et ressources de la bibliothèque.",
      image: `${SITE_URL}/images/home-1.jpg`,
    },
  },
  {
    path: '/mandate',
    name: 'Mandate',
    component: MandateView,
    meta: {
      title: 'Notre mandat | EMEC',
      description: "Le mandat de l'EMEC : annoncer l'Évangile, baptiser, enseigner, former des disciples et servir avec compassion.",
      image: `${SITE_URL}/images/mandate-1.jpg`,
    },
  },
  {
    path: '/events',
    name: 'Events',
    component: EventsView,
    meta: {
      title: 'Événements | EMEC',
      description: "Retrouvez les prochains événements, cultes spéciaux, formations, campagnes d'évangélisation et programmes hebdomadaires de l'EMEC.",
      image: `${SITE_URL}/images/hero-2.jpg`,
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: {
      title: 'Contact | EMEC',
      description: "Contactez l'EMEC à Yaoundé : adresse, téléphone, horaires, formulaire de contact et itinéraire vers le siège.",
      image: `${SITE_URL}/images/home-10.jpg`,
    },
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: GalleryView,
    meta: {
      title: 'Galerie photos | EMEC',
      description: "Parcourez les images de l'EMEC : cultes, prières, groupes, programmes, actions sociales et moments de communion.",
      image: `${SITE_URL}/images/home-1.jpg`,
    },
  },
  {
    path: '/oeuvres-sociales',
    name: 'SocialWorks',
    component: SocialWorksView,
    meta: {
      title: 'Œuvres sociales et compassion | EMEC',
      description: "Découvrez la vision sociale de l'EMEC, la DOSC et les orientations de compassion prévues par les textes officiels.",
      image: `${SITE_URL}/images/dons-003.png`,
    },
  },
  {
    path: '/documents',
    name: 'OfficialDocuments',
    component: OfficialDocumentsView,
    meta: {
      title: 'Documents officiels | EMEC',
      description: "Consultez les Statuts, le Règlement Intérieur, le Régime Financier et les références complémentaires analysées de l'EMEC.",
      image: `${SITE_URL}/images/home-10.jpg`,
    },
  },
  {
    path: '/gouvernance',
    name: 'Governance',
    component: GovernanceView,
    meta: {
      title: 'Gouvernance | EMEC',
      description: "Découvrez l'organisation de l'EMEC : Assemblée Générale, Conseil Exécutif, CPRAD, structures spécialisées, départements et subdivisions ecclésiales.",
      image: `${SITE_URL}/images/home-10.jpg`,
    },
  },
  {
    path: '/finances',
    name: 'FinanceTransparency',
    component: FinanceTransparencyView,
    meta: {
      title: 'Finances et transparence | EMEC',
      description: "Comprendre le cadre financier de l'EMEC : ressources, budgets, contrôle et responsabilité selon le Régime Financier.",
      image: `${SITE_URL}/images/dons-003.png`,
    },
  },
  {
    path: '/doctrine',
    name: 'Doctrine',
    component: DoctrineView,
    meta: {
      title: 'Doctrine et profession de foi | EMEC',
      description: "Découvrez les quinze points de doctrine de l'EMEC issus de sa profession de foi.",
      image: `${SITE_URL}/images/mandate-parole.png`,
    },
  },
  {
    path: '/groupes/:slug',
    name: 'GroupDetail',
    component: GroupDetailView,
    meta: {
      title: 'Nos groupes | EMEC',
      description: "Découvrez les groupes de l'EMEC : hommes, femmes, jeunesse, ECODIM, intercession et œuvres sociales.",
      image: `${SITE_URL}/images/home-2.jpg`,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0, behavior: 'smooth' };
  },
});

function setMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

router.afterEach((to) => {
  if (typeof document === 'undefined') return;

  const title = String(to.meta.title || DEFAULT_TITLE);
  const description = String(to.meta.description || DEFAULT_DESCRIPTION);
  const image = String(to.meta.image || DEFAULT_IMAGE);
  const url = `${SITE_URL}${to.path === '/' ? '/' : to.path}`;

  document.title = title;
  setMeta('robots', 'index, follow');
  setMeta('description', description);
  setMeta('og:site_name', 'EMEC', 'property');
  setMeta('og:type', 'website', 'property');
  setMeta('og:title', title, 'property');
  setMeta('og:description', description, 'property');
  setMeta('og:url', url, 'property');
  setMeta('og:image', image, 'property');
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  setMeta('twitter:image', image);
  setMeta('twitter:url', url);
  setCanonical(url);
});

export default router;
