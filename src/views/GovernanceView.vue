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
          L'EMEC est organisée autour d'organes, de structures spécialisées, de départements,
          de cellules opérationnelles et de subdivisions ecclésiales définis par ses textes officiels.
        </p>
      </div>
    </section>

    <section class="governance-intro">
      <div>
        <p class="section-eyebrow">Repère institutionnel</p>
        <h2>Une organisation pensée pour porter l'œuvre avec ordre.</h2>
      </div>
      <p>
        Cette page présente les composantes publiques de gouvernance mentionnées dans les Statuts,
        le Règlement Intérieur et le document stratégique. Les conditions, procédures détaillées,
        votes, sanctions et dispositions internes restent consultables dans les documents officiels.
      </p>
    </section>

    <section class="reform-section">
      <div class="reform-copy">
        <p class="section-eyebrow">Réformes institutionnelles</p>
        <h2>Les textes de 2021 ont recentré la gouvernance autour de trois organes.</h2>
        <p>
          Les Statuts et le Règlement Intérieur adoptés en Assemblée Générale Extraordinaire
          des 23 et 24 juillet 2021 ont consolidé l'organisation de l'EMEC et ouvert la voie
          à une gestion plus structurée de l'œuvre.
        </p>
      </div>
      <div class="reform-grid">
        <article v-for="item in reforms" :key="item.title">
          <span>{{ item.number }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </section>

    <section class="organs-section">
      <div class="section-heading">
        <p class="section-eyebrow">Organes principaux</p>
        <h2>Les instances qui portent la marche de l'Église.</h2>
        <p>
          Ces organes assurent l'orientation, l'exécution, le conseil, la surveillance et la continuité
          institutionnelle de l'EMEC.
        </p>
      </div>
      <div class="organs-grid">
        <article class="organ-card" v-for="organ in organs" :key="organ.title">
          <span>{{ organ.reference }}</span>
          <h3>{{ organ.title }}</h3>
          <p>{{ organ.description }}</p>
          <ul>
            <li v-for="point in organ.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="structure-section">
      <div class="structure-copy">
        <p class="section-eyebrow">Structures et services</p>
        <h2>Des équipes spécialisées pour accompagner la mission.</h2>
        <p>
          Les textes et le plan stratégique prévoient des structures spécialisées, des départements
          techniques et des cellules opérationnelles chargés d'appuyer la formation, l'évangélisation,
          les projets, la communication, les œuvres sociales et le suivi des actions.
        </p>
        <div class="structure-actions">
          <router-link class="official-link" to="/vision-2043">Voir la Vision 2043</router-link>
          <router-link
            class="official-link muted"
            :to="{ path: '/documents', query: { doc: 'statuts', search: 'Article 11' } }"
          >
            Lire les textes officiels
          </router-link>
        </div>
      </div>
      <div class="structure-list">
        <article v-for="item in structures" :key="item.title">
          <span>{{ item.type }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </section>

    <section class="principles-section">
      <div class="section-heading">
        <p class="section-eyebrow">Bonne gouvernance</p>
        <h2>Une culture de planification, de rapport et d'évaluation.</h2>
        <p>
          Le document stratégique insiste sur la régularité du fonctionnement, la production de rapports,
          les supervisions, le contrôle interne, les bases de données et l'évaluation des actions.
        </p>
      </div>
      <div class="principles-grid">
        <article v-for="principle in principles" :key="principle.title">
          <strong>{{ principle.number }}</strong>
          <h3>{{ principle.title }}</h3>
          <p>{{ principle.description }}</p>
        </article>
      </div>
    </section>

    <section class="levels-section">
      <div class="section-heading">
        <p class="section-eyebrow">Organisation ecclésiale</p>
        <h2>Du local au champ missionnaire.</h2>
        <p>
          L'organisation territoriale permet de coordonner les assemblées, les responsables,
          les programmes et les groupes d'action selon les niveaux reconnus.
        </p>
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
          Les groupes d'action accompagnent les enfants, les jeunes, les femmes, les hommes et
          le service d'intercession dans la vie de l'Église. Certains détails internes ne sont pas publiés.
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
      reforms: [
        {
          number: '01',
          title: 'Conseil Exécutif renforcé',
          description: "La fusion des anciens cadres de conduite a recentré l'exécution nationale autour du Conseil Exécutif.",
        },
        {
          number: '02',
          title: 'CPRAD',
          description: 'Le Conseil des Pasteurs Responsabilisés et Anciens Désignés est présenté comme un organe consultatif et de surveillance.',
        },
        {
          number: '03',
          title: 'Départements et cellules',
          description: "Des départements techniques et cellules opérationnelles soutiennent les missions spécifiques de l'œuvre.",
        },
      ],
      organs: [
        {
          title: 'Assemblée Générale',
          reference: 'Organe suprême',
          description: "Elle porte les grandes orientations et donne le mandat institutionnel qui encadre la marche de l'EMEC.",
          points: ['Orientations majeures', 'Rapports et programmes', 'Vie institutionnelle'],
        },
        {
          title: 'Conseil Exécutif',
          reference: "Organe d'exécution",
          description: "Il conduit la mise en œuvre des décisions, coordonne l'action nationale et porte la responsabilité spirituelle, administrative et missionnaire.",
          points: ['Coordination nationale', 'Mise en œuvre des décisions', 'Suivi de la mission'],
        },
        {
          title: 'CPRAD',
          reference: 'Organe consultatif et de surveillance',
          description: "Il accompagne, conseille et veille sur la marche ecclésiale selon les textes officiels de l'EMEC.",
          points: ['Conseil', 'Surveillance', 'Accompagnement spirituel'],
        },
      ],
      structures: [
        {
          type: 'Structure spécialisée',
          title: "Bureau National d'Évangélisation",
          description: "Il appuie la définition, l'organisation, la mobilisation et le suivi des activités d'évangélisation.",
        },
        {
          type: 'Formation',
          title: 'Institut de Théologie Biblique de Yaoundé',
          description: 'Il participe à la formation biblique, spirituelle et ministérielle des serviteurs de Dieu.',
        },
        {
          type: 'Départements techniques',
          title: 'Missions, projets, œuvres sociales, santé et éducation',
          description: "Ces départements soutiennent l'action de l'Église dans les domaines spirituels, sociaux, éducatifs et communautaires.",
        },
        {
          type: 'Cellules opérationnelles',
          title: 'Communication, informatique, traduction et suivi',
          description: "Elles accompagnent la circulation de l'information, les outils numériques, les besoins linguistiques et le suivi des activités.",
        },
      ],
      principles: [
        {
          number: '01',
          title: 'Planification annuelle',
          description: 'Les organes, départements, cellules et subdivisions traduisent les orientations en plans opérationnels suivis dans le temps.',
        },
        {
          number: '02',
          title: 'Rapports réguliers',
          description: "La production de rapports permet de garder une mémoire des activités, d'évaluer les progrès et d'améliorer la coordination.",
        },
        {
          number: '03',
          title: 'Supervision et contrôle',
          description: 'Les supervisions, missions de suivi et contrôles internes renforcent la responsabilité et la redevabilité.',
        },
        {
          number: '04',
          title: 'Données et compétences',
          description: 'Les bases de données, la cartographie des compétences et la mobilisation des ressources humaines soutiennent la Vision 2043.',
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
    linear-gradient(90deg, rgba(7, 26, 51, 0.9), rgba(7, 26, 51, 0.46)),
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
  flex-wrap: wrap;
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
.reform-copy h2,
.section-heading h2,
.structure-copy h2,
.organ-card h3,
.reform-grid h3,
.principles-grid h3,
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

.governance-intro,
.reform-section,
.implementation-section {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 52px;
  padding: 92px 8vw;
  background: #fff;
}

.governance-intro h2,
.reform-copy h2,
.section-heading h2,
.structure-copy h2 {
  font-size: clamp(32px, 4vw, 56px);
  line-height: 1.08;
  color: var(--text-dark);
}

.governance-intro p:not(.section-eyebrow),
.reform-copy p,
.structure-copy p,
.organ-card p,
.reform-grid p,
.principles-grid p,
.structure-list p,
.levels-track p,
.section-heading p:not(.section-eyebrow),
.governance-group-card p {
  color: var(--text-mid);
  line-height: 1.82;
}

.reform-grid,
.principles-grid {
  display: grid;
  gap: 16px;
}

.reform-grid article,
.principles-grid article {
  border: 1px solid rgba(7, 26, 51, 0.08);
  border-radius: 6px;
  background: rgba(250, 247, 240, 0.74);
  padding: 24px;
}

.reform-grid span,
.principles-grid strong {
  display: block;
  margin-bottom: 12px;
  color: var(--gold-dark);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 1.8px;
  text-transform: uppercase;
}

.organs-section,
.levels-section,
.groups-section,
.principles-section {
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
.reform-grid h3,
.principles-grid h3,
.structure-list h3,
.levels-track h3,
.governance-group-card h3 {
  font-size: 25px;
  line-height: 1.15;
  color: var(--text-dark);
  margin-bottom: 12px;
}

.organ-card ul {
  display: grid;
  gap: 8px;
  margin-top: 20px;
  list-style: none;
}

.organ-card li {
  position: relative;
  padding-left: 18px;
  color: var(--text-mid);
  font-size: 14px;
  line-height: 1.6;
}

.organ-card li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.72em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
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

.structure-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
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

.official-link.muted {
  color: rgba(255, 255, 255, 0.72);
}

.official-link:hover {
  background: var(--gold);
  color: var(--black);
}

.principles-section {
  background: #fff;
}

.principles-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
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
  background: linear-gradient(180deg, transparent 46%, rgba(7, 26, 51, 0.5));
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
  .groups-grid,
  .principles-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .governance-intro,
  .reform-section,
  .structure-section {
    grid-template-columns: 1fr;
  }

  .structure-copy {
    position: static;
  }

  .organs-grid,
  .levels-track,
  .groups-grid,
  .principles-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 540px) {
  .governance-hero {
    min-height: 500px;
    padding: 130px 6vw 64px;
  }

  .governance-intro,
  .reform-section,
  .organs-section,
  .structure-section,
  .principles-section,
  .levels-section,
  .groups-section {
    padding: 72px 6vw;
  }

  .official-link {
    width: 100%;
  }
}

/* Harmonisation visuelle des cartes */
.organ-card,
.reform-grid article,
.principles-grid article,
.structure-list article,
.levels-track article,
.governance-group-card {
  min-width: 0;
  box-sizing: border-box;
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
}

.organ-card:hover,
.reform-grid article:hover,
.principles-grid article:hover,
.structure-list article:hover,
.levels-track article:hover {
  border-color: rgba(201, 168, 76, 0.5);
  transform: translateY(-3px);
}
</style>