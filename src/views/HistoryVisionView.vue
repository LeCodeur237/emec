<template>
  <main class="history-page">
    <section class="history-hero">
      <div class="history-hero-bg" aria-hidden="true"></div>
      <div class="history-hero-overlay" aria-hidden="true"></div>
      <div class="history-hero-content">
        <nav class="breadcrumb" aria-label="Fil d'ariane">
          <router-link to="/">Accueil</router-link>
          <span>/</span>
          <router-link to="/about">Qui sommes-nous ?</router-link>
          <span>/</span>
          <span class="current">Histoire & Vision 2043</span>
        </nav>
        <p class="section-eyebrow">Histoire & Vision 2043</p>
        <h1>Une oeuvre née d'une vision, portée vers l'émergence spirituelle et sociale.</h1>
        <p>
          L'histoire de l'EMEC s'inscrit dans une marche de foi : annoncer Jésus-Christ,
          former des disciples, implanter des assemblées et servir la société sous la conduite du Saint-Esprit.
        </p>
      </div>
    </section>

    <section class="history-intro">
      <div class="history-intro-copy">
        <p class="section-eyebrow">Repères fondateurs</p>
        <h2>De la reconnaissance officielle à la dynamique 2043.</h2>
        <p>
          L'Église Messianique Évangélique du Cameroun est reconnue comme association religieuse
          par décret présidentiel en 1993. Son parcours reste attaché à l'héritage apostolique de
          feu l'Apôtre Samuel Dalle Nyame, dont la vision a contribué à établir une oeuvre centrée
          sur la Parole, la mission et la formation des serviteurs de Dieu.
        </p>
        <p>
          À l'approche du trentenaire de son existence légale, l'EMEC a engagé une réflexion nationale
          afin de poser les bases d'une communauté rayonnante sur les plans spirituel, social, matériel
          et financier à l'horizon 2043.
        </p>
      </div>
      <div class="history-intro-visual">
        <img src="/images/fondateur.png" alt="Feu Apôtre Samuel Dalle Nyame" loading="lazy" />
        <div>
          <span>Héritage apostolique</span>
          <strong>Parole · Mission · Service</strong>
        </div>
      </div>
    </section>

    <section class="timeline-section">
      <div class="section-heading">
        <p class="section-eyebrow">Chronologie</p>
        <h2>Les moments qui structurent la marche récente de l'EMEC.</h2>
      </div>
      <div class="timeline-grid">
        <article v-for="item in timeline" :key="item.year" class="timeline-card">
          <span>{{ item.year }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </section>

    <section class="vision-section">
      <div class="vision-statement">
        <p class="section-eyebrow">Vision globale</p>
        <h2>Une EMEC rayonnante en 2043.</h2>
        <p>
          L'EMEC travaille à devenir une oeuvre rayonnante sur le plan spirituel et matériel,
          avançant sous la bannière du Saint-Esprit, pour procurer le bonheur à ses membres
          et apporter sa contribution à l'édification d'une société prospère.
        </p>
      </div>
      <div class="vision-axis-grid">
        <article v-for="axis in axes" :key="axis.title" class="axis-card">
          <span>{{ axis.number }}</span>
          <h3>{{ axis.title }}</h3>
          <p>{{ axis.description }}</p>
        </article>
      </div>
    </section>

    <section class="phase-section">
      <div class="section-heading">
        <p class="section-eyebrow">Plan 2023-2043</p>
        <h2>Une progression par phases.</h2>
        <p>
          Le document stratégique prévoit une mise en oeuvre progressive, suivie par des planifications
          opérationnelles annuelles et des évaluations internes.
        </p>
      </div>
      <div class="phase-track">
        <article v-for="phase in phases" :key="phase.period" class="phase-card">
          <strong>{{ phase.period }}</strong>
          <h3>{{ phase.title }}</h3>
          <p>{{ phase.description }}</p>
        </article>
      </div>
    </section>

    <section class="history-official">
      <div>
        <p class="section-eyebrow">Sources officielles</p>
        <h2>Lire les textes dans leur contexte complet.</h2>
        <p>
          Cette page présente une synthèse publique. Les textes complets, les détails institutionnels,
          les procédures et les dispositions internes doivent rester consultables dans les documents officiels.
        </p>
      </div>
      <div class="history-actions">
        <router-link class="official-link" to="/vision-2043">Explorer la Vision 2043</router-link>
        <router-link class="outline-link" to="/documents">Consulter les documents officiels</router-link>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HistoryVisionView',
  data() {
    return {
      timeline: [
        {
          year: '1993',
          title: 'Reconnaissance officielle',
          description: "L'EMEC est reconnue par décret présidentiel comme association religieuse au Cameroun.",
        },
        {
          year: '2021',
          title: 'Refonte des textes',
          description: "Les Statuts et le Règlement Intérieur sont adoptés afin de renforcer l'organisation et la marche institutionnelle.",
        },
        {
          year: '2022',
          title: 'Séminaire de Belabo',
          description: "Les serviteurs et servantes de Dieu réfléchissent à la question : Quelle EMEC voulons-nous en 2043 ?",
        },
        {
          year: '2023-2043',
          title: 'Plan stratégique',
          description: "Une dynamique nationale est engagée pour soutenir l'émergence spirituelle, sociale, matérielle et financière de l'oeuvre.",
        },
      ],
      axes: [
        {
          number: '01',
          title: 'Rayonnement spirituel et missionnaire',
          description: "Former les serviteurs, renforcer l'évangélisation, ouvrir de nouveaux champs missionnaires et faire des disciples.",
        },
        {
          number: '02',
          title: 'Développement social, matériel et financier',
          description: "Structurer les projets, consolider le patrimoine, développer les oeuvres sociales et soutenir la mission par des ressources durables.",
        },
        {
          number: '03',
          title: 'Ressources humaines',
          description: "Identifier, former et mobiliser les compétences spirituelles, techniques et professionnelles utiles à la croissance de l'EMEC.",
        },
        {
          number: '04',
          title: 'Bonne gouvernance',
          description: "Renforcer la planification, les rapports, le suivi, l'évaluation et le respect des règles qui encadrent la vie de l'Église.",
        },
      ],
      phases: [
        { period: '2023 - 2027', title: 'Maturation et démarrage', description: 'Mettre en place les bases, les procédures, les inventaires et les premières actions structurantes.' },
        { period: '2028 - 2032', title: 'Développement', description: 'Déployer les projets prioritaires et consolider les capacités opérationnelles des organes.' },
        { period: '2033 - 2037', title: 'Consolidation', description: 'Stabiliser les acquis spirituels, sociaux, matériels et institutionnels.' },
        { period: '2038 - 2042', title: 'Renforcement', description: "Accroître l'impact, améliorer les dispositifs existants et préparer l'évaluation globale." },
        { period: '2042 - 2043', title: 'Évaluation générale', description: 'Mesurer les résultats du plan et préparer les orientations suivantes.' },
      ],
    };
  },
});
</script>

<style scoped>
.history-page {
  background: var(--cream);
  color: var(--text-dark);
}

.history-hero {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 150px 8vw 86px;
  overflow: hidden;
  background: var(--black);
}

.history-hero-bg,
.history-hero-overlay {
  position: absolute;
  inset: 0;
}

.history-hero-bg {
  background: url('/images/home-10.jpg') center/cover no-repeat;
  filter: brightness(0.42);
  transform: scale(1.03);
}

.history-hero-overlay {
  background: linear-gradient(to top, rgba(7, 26, 51, 0.98), rgba(7, 26, 51, 0.45), rgba(7, 26, 51, 0.18));
}

.history-hero-content {
  position: relative;
  z-index: 1;
  max-width: 880px;
  color: #fff;
}

.breadcrumb {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
  color: rgba(255, 255, 255, 0.55);
  font-size: 11px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
}

.breadcrumb a {
  color: rgba(255, 255, 255, 0.7);
}

.breadcrumb .current,
.history-hero-content .section-eyebrow {
  color: var(--gold-light);
}

.history-hero h1 {
  max-width: 860px;
  margin: 0 0 22px;
  font-family: 'Playfair Display', serif;
  font-size: clamp(34px, 5vw, 64px);
  line-height: 1.05;
  color: #fff;
}

.history-hero p:not(.section-eyebrow) {
  max-width: 720px;
  margin: 0;
  color: rgba(255, 255, 255, 0.76);
  line-height: 1.75;
}

.history-intro,
.timeline-section,
.vision-section,
.phase-section,
.history-official {
  width: min(1180px, 90vw);
  margin: 0 auto;
}

.history-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: 52px;
  align-items: center;
  padding: 96px 0 70px;
}

.history-intro-copy h2,
.section-heading h2,
.vision-statement h2,
.history-official h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(30px, 3vw, 46px);
  line-height: 1.14;
  color: var(--black);
  margin-bottom: 18px;
}

.history-intro-copy p:not(.section-eyebrow),
.section-heading p:not(.section-eyebrow),
.vision-statement p,
.history-official p {
  color: var(--text-mid);
  line-height: 1.85;
  margin-bottom: 14px;
}

.history-intro-visual {
  position: relative;
  min-height: 420px;
  border-radius: 6px;
  overflow: hidden;
  background: var(--black);
}

.history-intro-visual img {
  width: 100%;
  height: 100%;
  min-height: 420px;
  object-fit: cover;
  opacity: 0.88;
}

.history-intro-visual div {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
  padding: 18px;
  border-left: 3px solid var(--gold);
  background: rgba(7, 26, 51, 0.86);
  color: #fff;
}

.history-intro-visual span,
.axis-card span,
.timeline-card span,
.phase-card strong {
  display: block;
  margin-bottom: 8px;
  color: var(--gold);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.6px;
  text-transform: uppercase;
}

.history-intro-visual strong {
  font-size: 18px;
}

.timeline-section,
.phase-section {
  padding: 70px 0;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 32px;
}

.timeline-grid,
.vision-axis-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.timeline-card,
.axis-card,
.phase-card {
  border: 1px solid rgba(7, 26, 51, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.62);
  padding: 24px;
}

.timeline-card h3,
.axis-card h3,
.phase-card h3 {
  margin-bottom: 12px;
  color: var(--black);
  font-size: 18px;
}

.timeline-card p,
.axis-card p,
.phase-card p {
  color: var(--text-mid);
  line-height: 1.75;
}

.vision-section {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 36px;
  align-items: start;
  padding: 78px 0;
  border-top: 1px solid rgba(7, 26, 51, 0.08);
  border-bottom: 1px solid rgba(7, 26, 51, 0.08);
}

.vision-statement {
  position: sticky;
  top: 96px;
}

.phase-track {
  display: grid;
  grid-template-columns: repeat(5, minmax(220px, 1fr));
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 8px;
}

.history-official {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  align-items: center;
  padding: 64px 0 96px;
}

.history-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.official-link,
.outline-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.official-link {
  background: var(--black);
  color: #fff;
}

.outline-link {
  border: 1px solid rgba(7, 26, 51, 0.22);
  color: var(--black);
}

@media (max-width: 980px) {
  .history-intro,
  .vision-section,
  .history-official {
    grid-template-columns: 1fr;
    display: grid;
  }

  .timeline-grid,
  .vision-axis-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .vision-statement {
    position: static;
  }
}

@media (max-width: 640px) {
  .history-hero-content {
    width: min(92vw, 540px);
    padding: 96px 0 54px;
  }

  .history-intro,
  .timeline-section,
  .vision-section,
  .phase-section,
  .history-official {
    width: min(92vw, 540px);
  }

  .history-intro {
    padding-top: 68px;
  }

  .timeline-grid,
  .vision-axis-grid {
    grid-template-columns: 1fr;
  }

  .history-official {
    align-items: stretch;
  }

  .history-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.official-link,
.outline-link {
    width: 100%;
  }
}

/* Harmonisation visuelle des cartes */
.timeline-card,
.axis-card,
.phase-card {
  min-width: 0;
  min-height: 100%;
  box-sizing: border-box;
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
}

.timeline-card:hover,
.axis-card:hover,
.phase-card:hover {
  border-color: rgba(201, 168, 76, 0.5);
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-3px);
}

@media (max-width: 640px) {
  .history-hero {
    padding: 130px 6vw 64px;
  }
}

@media (max-width: 640px) {
  .history-hero-content {
    width: 100%;
    padding: 0;
  }
}
</style>

