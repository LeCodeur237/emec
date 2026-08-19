<template>
  <main class="governance-page">
    <section class="governance-hero">
      <div class="governance-hero-bg" aria-hidden="true"></div>
      <div class="governance-hero-content">
        <nav class="breadcrumb" aria-label="Fil d'ariane">
          <router-link to="/">Accueil</router-link>
          <span>/</span>
          <span class="current">Gouvernance</span>
        </nav>
        <p class="section-eyebrow">Organisation</p>
        <h1>Une gouvernance au service de la vision.</h1>
        <p>
          L'EMEC est organisée autour d'organes, de structures spécialisées, de départements
          et de subdivisions ecclésiales définis par ses textes officiels.
        </p>
      </div>
    </section>

    <section class="governance-intro">
      <div>
        <p class="section-eyebrow">Repère institutionnel</p>
        <h2>Comprendre comment l'EMEC est structurée.</h2>
      </div>
      <p>
        Cette page présente les principales composantes de gouvernance mentionnées dans les Statuts
        et le Règlement Intérieur. Les attributions détaillées, conditions et procédures restent
        consultables dans les documents officiels.
      </p>
    </section>

    <section class="organs-section">
      <div class="section-heading">
        <p class="section-eyebrow">Organes principaux</p>
        <h2>Les instances qui portent la marche de l'Église.</h2>
      </div>
      <div class="organs-grid">
        <article class="organ-card" v-for="organ in organs" :key="organ.title">
          <span>{{ organ.reference }}</span>
          <h3>{{ organ.title }}</h3>
          <p>{{ organ.description }}</p>
        </article>
      </div>
    </section>

    <section class="structure-section">
      <div class="structure-copy">
        <p class="section-eyebrow">Structures et services</p>
        <h2>Des équipes spécialisées pour accompagner la mission.</h2>
        <p>
          Les textes prévoient des structures spécialisées, des départements techniques et des cellules
          opérationnelles chargés d'appuyer la formation, l'évangélisation, les projets, la communication
          et le service social.
        </p>
        <router-link
          class="official-link"
          :to="{ path: '/documents', query: { doc: 'statuts', search: 'Article 11' } }"
        >
          Lire les textes officiels
        </router-link>
      </div>
      <div class="structure-list">
        <article v-for="item in structures" :key="item.title">
          <span>{{ item.type }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </section>

    <section class="levels-section">
      <div class="section-heading">
        <p class="section-eyebrow">Organisation ecclésiale</p>
        <h2>Du local au champ missionnaire.</h2>
      </div>
      <div class="levels-track">
        <article v-for="(level, index) in levels" :key="level.title">
          <strong>{{ String(index + 1).padStart(2, '0') }}</strong>
          <h3>{{ level.title }}</h3>
          <p>{{ level.description }}</p>
        </article>
      </div>
    </section>

    <section class="groups-section">
      <div class="section-heading">
        <p class="section-eyebrow">Groupes d'action chrétiens</p>
        <h2>Des cadres de service pour chaque génération.</h2>
        <p>
          Les groupes d'action chrétiens assurent un accompagnement spécifique des enfants, des jeunes,
          des femmes, des hommes et de l'intercession dans la vie de l'Église.
        </p>
      </div>
      <div class="groups-grid">
        <template v-for="group in actionGroups" :key="group.slug">
          <article v-if="group.isPrivate" class="governance-group-card governance-group-static">
            <div class="governance-group-image">
              <img :src="group.image" :alt="group.alt" loading="lazy" />
            </div>
            <div class="governance-group-body">
              <span>Groupe d'action</span>
              <h3>{{ group.name }}</h3>
              <p>{{ group.description }}</p>
            </div>
          </article>
          <router-link v-else class="governance-group-card" :to="`/groupes/${group.slug}`">
            <div class="governance-group-image">
              <img :src="group.image" :alt="group.alt" loading="lazy" />
            </div>
            <div class="governance-group-body">
              <span>Groupe d'action</span>
              <h3>{{ group.name }}</h3>
              <p>{{ group.description }}</p>
            </div>
          </router-link>
        </template>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { groups } from '../data/groups';

export default defineComponent({
  name: 'GovernanceView',
  data() {
    return {
      organs: [
        {
          title: 'Assemblée Générale',
          reference: 'Organe suprême',
          description: "Elle statue sur les grandes orientations, les rapports, les programmes, les projets et la vie institutionnelle de l'EMEC.",
        },
        {
          title: 'Conseil Exécutif',
          reference: "Organe d'exécution",
          description: "Il conduit la mise en œuvre des décisions, coordonne l'action nationale et porte la responsabilité administrative de l'Église.",
        },
        {
          title: 'CPRAD',
          reference: 'Organe consultatif et de surveillance',
          description: 'Le Conseil des Pasteurs Responsabilisés et Anciens Désignés accompagne, conseille et veille sur la marche ecclésiale.',
        },
      ],
      structures: [
        {
          type: 'Structure spécialisée',
          title: "Bureau National d'Évangélisation",
          description: "Il appuie la définition, l'organisation et le suivi des activités d'évangélisation.",
        },
        {
          type: 'Formation',
          title: 'Institut de Théologie Biblique de Yaoundé',
          description: 'Il participe à la formation biblique et ministérielle des serviteurs de Dieu.',
        },
        {
          type: 'Départements',
          title: 'Santé, éducation, missions, projets et œuvres sociales',
          description: "Ces départements soutiennent l'action de l'Église dans les domaines spirituels, sociaux, éducatifs et communautaires.",
        },
        {
          type: 'Cellules opérationnelles',
          title: 'Communication, informatique et traduction',
          description: "Elles accompagnent la circulation de l'information, les outils numériques et les besoins linguistiques de l'œuvre.",
        },
      ],
      levels: [
        {
          title: 'Assemblée Locale',
          description: 'La structure de base où les fidèles se rassemblent pour le culte, la formation, la communion et le service.',
        },
        {
          title: 'District Ecclésiastique',
          description: 'Un regroupement de plusieurs assemblées locales voisines pour la coordination ecclésiale de proximité.',
        },
        {
          title: 'Secteur Ecclésiastique',
          description: 'Un niveau de coordination regroupant plusieurs districts ecclésiastiques voisins.',
        },
        {
          title: 'Circonscription Ecclésiastique',
          description: 'Une subdivision plus large qui coordonne plusieurs secteurs ecclésiastiques.',
        },
        {
          title: 'Champ Missionnaire',
          description: "Un cadre d'activité évangélique dans certaines zones ou pays où l'œuvre missionnaire se déploie.",
        },
      ],
      actionGroups: groups.filter((group) => group.slug !== 'oeuvres-sociales'),
    };
  },
});
</script>

<style scoped>
.governance-page {
  background: var(--cream);
}

.governance-hero {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: flex-end;
  padding: 150px 8vw 86px;
  overflow: hidden;
  background: var(--black);
}

.governance-hero-bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.46)),
    url('/images/home-10.jpg') center / cover;
  filter: brightness(0.82);
}

.governance-hero-content {
  position: relative;
  z-index: 1;
  max-width: 820px;
  color: #fff;
}

.breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 22px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.breadcrumb a {
  color: rgba(255, 255, 255, 0.68);
}

.breadcrumb .current {
  color: var(--gold);
}

.section-eyebrow {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 16px;
}

.governance-hero h1,
.governance-intro h2,
.section-heading h2,
.structure-copy h2,
.organ-card h3,
.structure-list h3,
.levels-track h3,
.governance-group-card h3 {
  font-family: 'Playfair Display', serif;
}

.governance-hero h1 {
  font-size: clamp(40px, 5.8vw, 76px);
  line-height: 1;
  margin-bottom: 24px;
}

.governance-hero p:not(.section-eyebrow) {
  max-width: 720px;
  font-size: 18px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.76);
}

.governance-intro {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 52px;
  padding: 92px 8vw;
  background: #fff;
}

.governance-intro h2,
.section-heading h2,
.structure-copy h2 {
  font-size: clamp(32px, 4vw, 56px);
  line-height: 1.08;
  color: var(--text-dark);
}

.governance-intro p:not(.section-eyebrow),
.structure-copy p,
.organ-card p,
.structure-list p,
.levels-track p,
.section-heading p:not(.section-eyebrow),
.governance-group-card p {
  color: var(--text-mid);
  line-height: 1.82;
}

.organs-section,
.levels-section,
.groups-section {
  padding: 92px 8vw;
}

.section-heading {
  max-width: 820px;
  margin-bottom: 42px;
}

.section-heading p:not(.section-eyebrow) {
  max-width: 720px;
  margin-top: 16px;
}

.organs-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.organ-card,
.structure-list article,
.levels-track article {
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.72);
  padding: 28px;
}

.organ-card span,
.structure-list span,
.levels-track strong,
.governance-group-card span {
  display: block;
  margin-bottom: 14px;
  color: var(--gold-dark);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.8px;
  text-transform: uppercase;
}

.organ-card h3,
.structure-list h3,
.levels-track h3,
.governance-group-card h3 {
  font-size: 25px;
  line-height: 1.15;
  color: var(--text-dark);
  margin-bottom: 12px;
}

.structure-section {
  display: grid;
  grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1fr);
  gap: 64px;
  padding: 92px 8vw;
  background: var(--black);
  color: #fff;
}

.structure-copy {
  align-self: start;
  position: sticky;
  top: 96px;
}

.structure-copy h2 {
  color: #fff;
  margin-bottom: 18px;
}

.structure-copy p {
  color: rgba(255, 255, 255, 0.68);
  margin-bottom: 28px;
}

.structure-list {
  display: grid;
  gap: 16px;
}

.structure-list article {
  background: rgba(255, 255, 255, 0.06);
}

.structure-list h3 {
  color: #fff;
}

.structure-list p {
  color: rgba(255, 255, 255, 0.66);
}

.official-link {
  display: inline-flex;
  justify-content: center;
  border: 1px solid rgba(201, 168, 76, 0.48);
  border-radius: 4px;
  padding: 14px 18px;
  color: var(--gold-light);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.6px;
  text-transform: uppercase;
}

.official-link:hover {
  background: var(--gold);
  color: var(--black);
}

.levels-track {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}

.groups-section {
  background: var(--black);
  color: #fff;
}

.groups-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
}

.groups-section .section-heading h2 {
  color: #fff;
}

.groups-section .section-heading p:not(.section-eyebrow) {
  color: rgba(255, 255, 255, 0.68);
}

.governance-group-card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  color: inherit;
  text-decoration: none;
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 6px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.025));
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.governance-group-card:hover {
  transform: translateY(-5px);
  border-color: rgba(201, 168, 76, 0.5);
  background: linear-gradient(135deg, rgba(201, 168, 76, 0.12), rgba(255, 255, 255, 0.035));
}

.governance-group-static:hover {
  transform: none;
}

.governance-group-image {
  position: relative;
  aspect-ratio: 1.35 / 1;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
}

.governance-group-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 46%, rgba(10, 10, 10, 0.5));
}

.governance-group-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.governance-group-card:hover .governance-group-image img {
  transform: scale(1.04);
}

.governance-group-body {
  padding: 22px;
}

.governance-group-card span {
  color: var(--gold-light);
}

.governance-group-card h3 {
  color: #fff;
  margin-bottom: 12px;
}

.governance-group-card p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.72);
}

@media (max-width: 1180px) {
  .levels-track,
  .groups-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .governance-intro,
  .structure-section {
    grid-template-columns: 1fr;
  }

  .structure-copy {
    position: static;
  }

  .organs-grid,
  .levels-track,
  .groups-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 540px) {
  .governance-hero {
    min-height: 500px;
    padding: 130px 6vw 64px;
  }

  .governance-intro,
  .organs-section,
  .structure-section,
  .levels-section,
  .groups-section {
    padding: 72px 6vw;
  }

  .official-link {
    width: 100%;
  }
}
</style>
