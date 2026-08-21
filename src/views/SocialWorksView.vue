<template>
  <main class="social-page">
    <section class="social-hero">
      <div class="social-hero-bg" aria-hidden="true"></div>
      <div class="social-hero-overlay" aria-hidden="true"></div>
      <div class="social-hero-content">
        <nav class="breadcrumb" aria-label="Fil d'ariane">
          <router-link to="/">Accueil</router-link>
          <span>/</span>
          <router-link to="/vision-2043">Vision 2043</router-link>
          <span>/</span>
          <span class="current">Œuvres sociales</span>
        </nav>
        <p class="section-eyebrow">DOSC</p>
        <h1>Servir les personnes, soutenir les familles, manifester la compassion.</h1>
        <p>
          La Direction des Œuvres Sociales et de la Compassion traduit l'appel social de l'EMEC
          en orientations concrètes : accompagner les vulnérables, soutenir les familles et organiser
          des réponses adaptées aux besoins de la communauté.
        </p>
      </div>
    </section>

    <section class="social-intro">
      <div>
        <p class="section-eyebrow">Fondement officiel</p>
        <h2>Une mission sociale au service de l'œuvre spirituelle.</h2>
      </div>
      <p>
        Les textes officiels prévoient un département des œuvres sociales et culturelles chargé de
        mettre en œuvre la vision sociale et culturelle de l'EMEC. Cette page présente une synthèse
        publique : elle ne remplace pas les documents officiels et ne confirme pas la réalisation effective
        des projets encore mentionnés comme orientations stratégiques.
      </p>
    </section>

    <section class="mission-section">
      <div class="section-heading">
        <p class="section-eyebrow">Champs d'action</p>
        <h2>Les priorités sociales à présenter au public.</h2>
      </div>
      <div class="mission-grid">
        <article v-for="mission in missions" :key="mission.title">
          <span>{{ mission.number }}</span>
          <h3>{{ mission.title }}</h3>
          <p>{{ mission.description }}</p>
        </article>
      </div>
    </section>

    <section class="orientation-section">
      <div class="orientation-copy">
        <p class="section-eyebrow">Vision 2043</p>
        <h2>Des orientations à formuler avec prudence.</h2>
        <p>
          Le document stratégique mentionne plusieurs pistes de développement social. Sur le site,
          elles doivent être présentées comme des orientations ou projets à développer, sauf validation
          officielle de leur état de réalisation.
        </p>
      </div>
      <div class="orientation-list">
        <article v-for="item in orientations" :key="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </section>

    <section class="works-section">
      <div class="section-heading">
        <p class="section-eyebrow">Œuvres sociales prévues par les textes</p>
        <h2>Des formes d'action que l'EMEC peut porter ou accompagner.</h2>
        <p>
          Selon les textes, ces œuvres peuvent être créées ou encadrées dans le cadre de la politique
          sociale de l'État et sous la supervision de l'EMEC.
        </p>
      </div>
      <div class="works-grid">
        <article v-for="work in works" :key="work">
          <span>{{ work }}</span>
        </article>
      </div>
    </section>

    <section class="social-note">
      <div>
        <p class="section-eyebrow">Distinction importante</p>
        <h2>Ne pas confondre orientation, programme et réalisation.</h2>
        <p>
          Les informations visibles sur le site doivent rester exactes : lorsqu'une action est seulement
          prévue par les textes ou le plan stratégique, elle est formulée comme une orientation. Lorsqu'un
          programme est confirmé par l'EMEC, il pourra être ajouté comme action réalisée avec date, lieu,
          responsable et preuve documentaire.
        </p>
      </div>
      <div class="social-actions">
        <a class="official-link" href="https://www.dosc.egliseemec.org" target="_blank" rel="noopener noreferrer">
          Ouvrir le site DOSC
        </a>
        <router-link
          class="outline-link"
          :to="{ path: '/documents', query: { doc: 'reglement-interieur', search: 'Article 76' } }"
        >
          Lire la base officielle
        </router-link>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SocialWorksView',
  data() {
    return {
      missions: [
        {
          number: '01',
          title: 'Personnes vulnérables',
          description: 'Accompagner les veuves, orphelins, indigents, personnes en situation de handicap et familles fragilisées.',
        },
        {
          number: '02',
          title: 'Troisième âge',
          description: 'Prévoir des actions d’attention, d’écoute et d’accompagnement envers les personnes âgées.',
        },
        {
          number: '03',
          title: 'Aumônerie et assistance',
          description: 'Soutenir les personnes malades, les prisonniers et d’autres nécessiteux par une présence spirituelle et sociale.',
        },
        {
          number: '04',
          title: 'Culture chrétienne',
          description: 'Valoriser le patrimoine culturel chrétien : littérature, musique, théâtre, expression artistique et mémoire communautaire.',
        },
      ],
      orientations: [
        {
          title: 'Réponse sociale structurée',
          description: 'Organiser les besoins, les bénéficiaires, les ressources et les équipes pour rendre l’action sociale plus lisible et suivie.',
        },
        {
          title: 'Infrastructures sociales',
          description: 'Le plan stratégique évoque des orphelinats, centres d’accueil, espaces pour personnes âgées et structures de référence comme pistes de développement.',
        },
        {
          title: 'Santé et entraide',
          description: 'Les mutuelles de santé, l’appui aux malades et la coordination avec les compétences médicales doivent être présentés comme des chantiers à confirmer.',
        },
        {
          title: 'Partenariats responsables',
          description: 'Les actions sociales peuvent mobiliser membres, professionnels, partenaires et volontaires, dans le respect de l’identité de l’EMEC.',
        },
      ],
      works: [
        'Établissements scolaires',
        'Centres de formation professionnelle',
        'Formations sanitaires',
        'Crèches',
        'Cantines et pensionnats',
        'Activités agro-pastorales',
        'Mutuelles',
        'Micro-finance encadrée',
      ],
    };
  },
});
</script>

<style scoped>
.social-page {
  background: var(--cream);
  color: var(--text-dark);
}

.social-hero {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 150px 8vw 86px;
  overflow: hidden;
  background: var(--black);
}

.social-hero-bg,
.social-hero-overlay {
  position: absolute;
  inset: 0;
}

.social-hero-bg {
  background: url('/images/dons-003.png') center/cover no-repeat;
  filter: brightness(0.42);
  transform: scale(1.03);
}

.social-hero-overlay {
  background: linear-gradient(to top, rgba(7, 26, 51, 0.98), rgba(7, 26, 51, 0.5), rgba(7, 26, 51, 0.18));
}

.social-hero-content {
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
.social-hero-content .section-eyebrow {
  color: var(--gold-light);
}

.social-hero h1 {
  max-width: 860px;
  margin: 0 0 22px;
  font-family: 'Playfair Display', serif;
  font-size: clamp(34px, 5vw, 64px);
  line-height: 1.05;
  color: #fff;
}

.social-hero p:not(.section-eyebrow) {
  max-width: 740px;
  margin: 0;
  color: rgba(255, 255, 255, 0.76);
  line-height: 1.75;
}

.social-intro,
.mission-section,
.orientation-section,
.works-section,
.social-note {
  width: min(1180px, 90vw);
  margin: 0 auto;
}

.social-intro {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 48px;
  padding: 92px 0 70px;
}

.social-intro h2,
.section-heading h2,
.orientation-copy h2,
.social-note h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(30px, 3vw, 46px);
  line-height: 1.14;
  color: var(--black);
}

.social-intro p:not(.section-eyebrow),
.section-heading p:not(.section-eyebrow),
.orientation-copy p,
.orientation-list p,
.mission-grid p,
.social-note p {
  color: var(--text-mid);
  line-height: 1.82;
}

.mission-section,
.works-section {
  padding: 72px 0;
}

.section-heading {
  max-width: 780px;
  margin-bottom: 34px;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.mission-grid article,
.orientation-list article,
.works-grid article {
  border: 1px solid rgba(7, 26, 51, 0.08);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.68);
  padding: 24px;
}

.mission-grid span {
  display: block;
  margin-bottom: 14px;
  color: var(--gold-dark);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 1.8px;
}

.mission-grid h3,
.orientation-list h3 {
  margin-bottom: 12px;
  color: var(--black);
  font-size: 19px;
}

.orientation-section {
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
  gap: 42px;
  padding: 78px 0;
  border-top: 1px solid rgba(7, 26, 51, 0.08);
  border-bottom: 1px solid rgba(7, 26, 51, 0.08);
}

.orientation-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.works-grid article {
  min-height: 92px;
  display: flex;
  align-items: center;
}

.works-grid span {
  color: var(--black);
  font-weight: 800;
  line-height: 1.45;
}

.social-note {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  align-items: center;
  padding: 70px 0 98px;
}

.social-note > div:first-child {
  max-width: 760px;
}

.social-actions {
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
  .social-intro,
  .orientation-section,
  .social-note {
    display: grid;
    grid-template-columns: 1fr;
  }

  .mission-grid,
  .works-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .social-actions {
    justify-content: flex-start;
  }
}

@media (max-width: 640px) {
  .social-hero-content,
  .social-intro,
  .mission-section,
  .orientation-section,
  .works-section,
  .social-note {
    width: min(92vw, 540px);
  }

  .social-hero-content {
    padding: 96px 0 54px;
  }

  .mission-grid,
  .orientation-list,
  .works-grid {
    grid-template-columns: 1fr;
  }

  .official-link,
  .outline-link {
    width: 100%;
  }
}

/* Harmonisation visuelle des cartes */
.mission-grid article,
.orientation-list article,
.works-grid article {
  min-width: 0;
  box-sizing: border-box;
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
}

.mission-grid article:hover,
.orientation-list article:hover,
.works-grid article:hover {
  border-color: rgba(201, 168, 76, 0.5);
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-3px);
}

@media (max-width: 640px) {
  .social-hero {
    padding: 130px 6vw 64px;
  }
}

@media (max-width: 640px) {
  .social-hero-content {
    width: 100%;
    padding: 0;
  }
}
</style>