<template>
  <main class="strategy-page">
    <section class="strategy-hero">
      <div class="strategy-hero-bg" aria-hidden="true"></div>
      <div class="strategy-hero-overlay" aria-hidden="true"></div>
      <div class="strategy-hero-content">
        <nav class="breadcrumb" aria-label="Fil d'ariane">
          <router-link to="/">Accueil</router-link>
          <span>/</span>
          <router-link to="/histoire-vision-2043">Histoire & Vision 2043</router-link>
          <span>/</span>
          <span class="current">Vision stratégique</span>
        </nav>
        <p class="section-eyebrow">Vision stratégique 2043</p>
        <h1>Transformer la vision en actions mesurables.</h1>
        <p>
          Le plan stratégique 2023-2043 organise la marche de l'EMEC autour d'axes clairs :
          rayonnement spirituel, développement durable, ressources humaines et gouvernance.
        </p>
      </div>
    </section>

    <section class="strategy-summary">
      <article class="summary-card" v-for="item in summary" :key="item.value">
        <span>{{ item.value }}</span>
        <p>{{ item.label }}</p>
      </article>
    </section>

    <section class="strategy-intro">
      <div>
        <p class="section-eyebrow">Orientation générale</p>
        <h2>Une Église rayonnante, structurée et utile à la société.</h2>
      </div>
      <p>
        La Vision 2043 ne se limite pas à une aspiration spirituelle. Elle relie l'annonce de l'Évangile,
        la formation des serviteurs, l'implantation missionnaire, le développement social, la gestion du
        patrimoine, la mobilisation des compétences et la culture du suivi-évaluation.
      </p>
    </section>

    <section class="axis-section">
      <article class="axis-panel" v-for="axis in axes" :key="axis.number">
        <div class="axis-panel-head">
          <span>{{ axis.number }}</span>
          <div>
            <p class="section-eyebrow">{{ axis.kicker }}</p>
            <h2>{{ axis.title }}</h2>
            <p>{{ axis.description }}</p>
          </div>
        </div>
        <div class="axis-grid">
          <article v-for="objective in axis.objectives" :key="objective.title" class="objective-card">
            <h3>{{ objective.title }}</h3>
            <p>{{ objective.description }}</p>
          </article>
        </div>
      </article>
    </section>

    <section class="projects-section">
      <div class="section-heading">
        <p class="section-eyebrow">Projets structurants</p>
        <h2>Des chantiers à présenter comme vision et orientations.</h2>
        <p>
          Ces éléments viennent du document stratégique. Ils doivent être formulés publiquement comme des
          orientations ou projets à développer, sauf confirmation de leur réalisation effective.
        </p>
      </div>
      <div class="projects-grid">
        <article v-for="project in projects" :key="project.title" class="project-card">
          <img :src="project.image" :alt="project.title" loading="lazy" />
          <div>
            <span>{{ project.scope }}</span>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="implementation-section">
      <div class="implementation-copy">
        <p class="section-eyebrow">Mise en œuvre</p>
        <h2>Planifier, exécuter, suivre, évaluer.</h2>
        <p>
          Le document stratégique insiste sur des planifications opérationnelles annuelles par organe,
          avec suivi des activités, production de rapports, évaluations internes et décisions correctives.
        </p>
      </div>
      <div class="implementation-steps">
        <article v-for="step in implementation" :key="step.title">
          <strong>{{ step.number }}</strong>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </article>
      </div>
    </section>

    <section class="strategy-official">
      <div>
        <p class="section-eyebrow">Lecture officielle</p>
        <h2>Une synthèse publique, pas un remplacement du document stratégique.</h2>
        <p>
          Les chiffres détaillés, tableaux logiques, responsabilités internes et procédures doivent rester
          dans les documents officiels. Cette page sert à rendre la vision compréhensible pour les visiteurs.
        </p>
      </div>
      <div class="strategy-actions">
        <router-link class="official-link" to="/oeuvres-sociales">Œuvres sociales</router-link>
        <router-link class="outline-link" to="/documents">Documents officiels</router-link>
        <router-link class="outline-link" to="/histoire-vision-2043">Retour à l'histoire</router-link>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StrategyVisionView',
  data() {
    return {
      summary: [
        { value: '2023-2043', label: 'Période couverte par le plan stratégique' },
        { value: '4', label: 'Axes majeurs de transformation' },
        { value: '5', label: 'Phases de maturation, développement et évaluation' },
      ],
      axes: [
        {
          number: '01',
          kicker: 'Rayonnement spirituel et missionnaire',
          title: "Assurer la croissance spirituelle et l'expansion missionnaire.",
          description: "Cet axe porte la formation, l'évangélisation, la croissance qualitative des fidèles et l'ouverture de nouveaux champs missionnaires.",
          objectives: [
            { title: 'Formation des serviteurs', description: "Renforcer la formation biblique, spirituelle et académique des serviteurs de Dieu et rendre l'école biblique plus compétitive." },
            { title: 'Évangélisation structurée', description: "Organiser les bureaux d'évangélisation, soutenir les campagnes et mobiliser les porteurs de bonne nouvelle." },
            { title: 'Champs missionnaires', description: "Identifier les zones à atteindre, former les missionnaires et accompagner l'ouverture de nouveaux champs au Cameroun et au-delà." },
          ],
        },
        {
          number: '02',
          kicker: 'Développement durable',
          title: 'Consolider les ressources sociales, matérielles et financières.',
          description: "Cet axe vise une gestion moderne du patrimoine, la mobilisation de fonds propres et une réponse sociale mieux structurée.",
          objectives: [
            { title: 'Patrimoine et investissements', description: "Inventorier, sécuriser et orienter les investissements de l'EMEC avec des procédures de gestion modernes." },
            { title: 'Centres missionnaires', description: "Préparer des espaces structurants pour la formation, l'administration, les cultes, l'accueil, la santé et la communication." },
            { title: 'Réponse sociale', description: "Organiser l'accompagnement des personnes vulnérables, des malades, des prisonniers, des orphelins et des serviteurs." },
          ],
        },
        {
          number: '03',
          kicker: 'Ressources humaines',
          title: 'Identifier et mobiliser les compétences de l’EMEC.',
          description: "Le plan appelle à mieux connaître les compétences disponibles et à développer une politique de ressources humaines utile à la mission.",
          objectives: [
            { title: 'Cartographie des compétences', description: "Constituer un fichier exploitable des compétences spirituelles, techniques et professionnelles au service de l'oeuvre." },
            { title: 'Développement des capacités', description: "Former, recycler et responsabiliser les personnes qui portent les départements, cellules, groupes et projets." },
            { title: 'Prise en charge', description: "Améliorer progressivement l'encadrement social et administratif des serviteurs engagés dans la mission." },
          ],
        },
        {
          number: '04',
          kicker: 'Bonne gouvernance',
          title: 'Faire fonctionner l’œuvre avec ordre et responsabilité.',
          description: "Cet axe renforce les réunions régulières, les rapports, les missions de contrôle, le suivi-évaluation et la redevabilité.",
          objectives: [
            { title: 'Fonctionnement des organes', description: "Assurer la régularité des réunions, la complétude des postes et la coordination des organes de l'EMEC." },
            { title: 'Suivi et rapports', description: "Produire des rapports d'activités, organiser des supervisions et suivre la mise en oeuvre des décisions." },
            { title: 'Culture de planification', description: "Introduire une logique de plan annuel, de données fiables, d'auto-évaluation et d'amélioration continue." },
          ],
        },
      ],
      projects: [
        {
          scope: 'Centre national',
          title: 'Centre missionnaire national',
          description: "Auditorium, administration, institut biblique, écoles, santé, accueil et médias font partie des composantes citées comme horizon de développement.",
          image: '/images/mandate-1.jpg',
        },
        {
          scope: 'Circonscriptions',
          title: 'Centres missionnaires locaux',
          description: "Chaque circonscription est appelée à disposer d'un cadre opérationnel pour soutenir les réunions, l'administration et l'accueil missionnaire.",
          image: '/images/home-3.jpg',
        },
        {
          scope: 'Action sociale',
          title: 'Réponse sociale structurée',
          description: "Le plan mentionne l'encadrement des personnes vulnérables, l'action auprès des malades, des prisonniers, des orphelins et des familles.",
          image: '/images/dons-003.png',
        },
      ],
      implementation: [
        { number: '01', title: 'Planifier', description: 'Traduire les axes en plans annuels par organe, département, cellule ou subdivision.' },
        { number: '02', title: 'Exécuter', description: 'Mettre en œuvre les actions retenues avec des responsabilités claires et des moyens adaptés.' },
        { number: '03', title: 'Suivre', description: 'Collecter les données, produire les rapports et vérifier l’avancement des activités.' },
        { number: '04', title: 'Évaluer', description: 'Mesurer les résultats, corriger les écarts et préparer les décisions suivantes.' },
      ],
    };
  },
});
</script>

<style scoped>
.strategy-page {
  background: var(--cream);
  color: var(--text-dark);
}

.strategy-hero {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 150px 8vw 86px;
  overflow: hidden;
  background: var(--black);
}

.strategy-hero-bg,
.strategy-hero-overlay {
  position: absolute;
  inset: 0;
}

.strategy-hero-bg {
  background: url('/images/home-3.jpg') center/cover no-repeat;
  filter: brightness(0.4);
  transform: scale(1.03);
}

.strategy-hero-overlay {
  background: linear-gradient(to top, rgba(7, 26, 51, 0.98), rgba(7, 26, 51, 0.5), rgba(7, 26, 51, 0.18));
}

.strategy-hero-content {
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
  color: rgba(255, 255, 255, 0.72);
}

.breadcrumb .current,
.strategy-hero-content .section-eyebrow {
  color: var(--gold-light);
}

.strategy-hero h1 {
  max-width: 840px;
  margin: 0 0 22px;
  font-family: 'Playfair Display', serif;
  font-size: clamp(34px, 5vw, 64px);
  line-height: 1.05;
  color: #fff;
}

.strategy-hero p:not(.section-eyebrow) {
  max-width: 720px;
  margin: 0;
  color: rgba(255, 255, 255, 0.76);
  line-height: 1.75;
}

.strategy-summary,
.strategy-intro,
.axis-section,
.projects-section,
.implementation-section,
.strategy-official {
  width: min(1180px, 90vw);
  margin: 0 auto;
}

.strategy-summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: -48px;
  position: relative;
  z-index: 2;
}

.summary-card {
  min-height: 130px;
  padding: 24px;
  border-radius: 6px;
  background: #fff;
  border: 1px solid rgba(7, 26, 51, 0.08);
}

.summary-card span {
  display: block;
  margin-bottom: 12px;
  color: var(--gold-dark);
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 900;
}

.summary-card p,
.strategy-intro p,
.axis-panel-head p:not(.section-eyebrow),
.objective-card p,
.section-heading p:not(.section-eyebrow),
.project-card p,
.implementation-copy p,
.implementation-steps p,
.strategy-official p {
  color: var(--text-mid);
  line-height: 1.78;
}

.strategy-intro {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 48px;
  padding: 82px 0 64px;
  align-items: start;
}

.strategy-intro h2,
.axis-panel-head h2,
.section-heading h2,
.implementation-copy h2,
.strategy-official h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(30px, 3vw, 46px);
  line-height: 1.14;
  color: var(--black);
}

.axis-section {
  display: grid;
  gap: 26px;
  padding: 30px 0 76px;
}

.axis-panel {
  padding: 30px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(7, 26, 51, 0.08);
}

.axis-panel-head {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 24px;
  margin-bottom: 24px;
}

.axis-panel-head > span {
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--black);
  color: var(--gold-light);
  font-weight: 900;
}

.axis-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.objective-card {
  min-height: 190px;
  padding: 22px;
  border-radius: 6px;
  background: #fff;
  border: 1px solid rgba(7, 26, 51, 0.08);
}

.objective-card h3,
.project-card h3,
.implementation-steps h3 {
  margin-bottom: 10px;
  color: var(--black);
  font-size: 18px;
}

.projects-section {
  padding: 76px 0;
  border-top: 1px solid rgba(7, 26, 51, 0.08);
}

.section-heading {
  max-width: 780px;
  margin-bottom: 32px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.project-card {
  overflow: hidden;
  border-radius: 6px;
  background: #fff;
  border: 1px solid rgba(7, 26, 51, 0.08);
}

.project-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.project-card div {
  padding: 22px;
}

.project-card span {
  display: block;
  margin-bottom: 8px;
  color: var(--gold-dark);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 1.4px;
  text-transform: uppercase;
}

.implementation-section {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 36px;
  padding: 76px 0;
}

.implementation-steps {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.implementation-steps article {
  padding: 24px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(7, 26, 51, 0.08);
}

.implementation-steps strong {
  display: block;
  margin-bottom: 14px;
  color: var(--gold-dark);
  font-size: 13px;
  letter-spacing: 1.4px;
}

.strategy-official {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  align-items: center;
  padding: 64px 0 96px;
}

.strategy-actions {
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
  .strategy-summary,
  .strategy-intro,
  .axis-grid,
  .projects-grid,
  .implementation-section,
  .strategy-official {
    grid-template-columns: 1fr;
  }

  .strategy-official {
    display: grid;
  }

  .strategy-actions {
    justify-content: flex-start;
  }
}

@media (max-width: 640px) {
  .strategy-hero-content,
  .strategy-summary,
  .strategy-intro,
  .axis-section,
  .projects-section,
  .implementation-section,
  .strategy-official {
    width: min(92vw, 540px);
  }

  .strategy-summary {
    margin-top: -28px;
  }

  .axis-panel {
    padding: 22px;
  }

  .axis-panel-head {
    grid-template-columns: 1fr;
  }

  .implementation-steps {
    grid-template-columns: 1fr;
  }

  .official-link,
  .outline-link {
    width: 100%;
  }
}

/* Harmonisation visuelle des cartes */
.summary-card,
.axis-panel,
.objective-card,
.project-card,
.implementation-steps article {
  min-width: 0;
  box-sizing: border-box;
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
}

.summary-card:hover,
.axis-panel:hover,
.objective-card:hover,
.project-card:hover,
.implementation-steps article:hover {
  border-color: rgba(201, 168, 76, 0.5);
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-3px);
}

@media (max-width: 640px) {
  .strategy-hero {
    padding: 130px 6vw 64px;
  }
}

@media (max-width: 640px) {
  .strategy-hero-content {
    width: 100%;
    padding: 0;
  }
}
</style>