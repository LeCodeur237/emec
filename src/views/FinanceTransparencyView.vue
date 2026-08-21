<template>
  <main class="finance-page">
    <section class="finance-hero">
      <div class="finance-hero-bg" aria-hidden="true"></div>
      <div class="finance-hero-content">
        <nav class="breadcrumb" aria-label="Fil d'ariane">
          <router-link to="/">Accueil</router-link>
          <span>/</span>
          <span class="current">Finances</span>
        </nav>
        <p class="section-eyebrow">Finances & transparence</p>
        <h1>Une gestion conduite avec ordre, probité et responsabilité.</h1>
        <p>
          Le Régime Financier de l'EMEC encadre les ressources, les budgets, les charges,
          les contrôles et la discipline budgétaire des organes de l'Église.
        </p>
      </div>
    </section>

    <section class="finance-intro">
      <div>
        <p class="section-eyebrow">Régime Financier 2023</p>
        <h2>Un cadre pour prévoir, autoriser, exécuter et contrôler.</h2>
      </div>
      <p>
        Cette page présente les grands principes publics du Régime Financier. Les articles complets
        restent consultables dans les documents officiels, afin de conserver la précision du texte source.
      </p>
    </section>

    <section class="principles-section">
      <article class="principle-card" v-for="principle in principles" :key="principle.title">
        <span>{{ principle.reference }}</span>
        <h3>{{ principle.title }}</h3>
        <p>{{ principle.description }}</p>
      </article>
    </section>

    <section class="finance-grid-section">
      <div class="finance-copy">
        <p class="section-eyebrow">Ressources</p>
        <h2>Les ressources identifiées par le Régime Financier.</h2>
        <p>
          Les ressources de l'EMEC peuvent provenir des dîmes, offrandes, prémices,
          produits des œuvres lucratives, quêtes, contributions, dons, legs et recettes diverses.
        </p>
        <router-link
          class="official-link"
          :to="{ path: '/documents', query: { doc: 'regime-financier', search: 'Article 1' } }"
        >
          Lire le Régime Financier
        </router-link>
      </div>
      <div class="resource-list">
        <article v-for="resource in resources" :key="resource">{{ resource }}</article>
      </div>
    </section>

    <section class="budget-section">
      <div class="section-heading">
        <p class="section-eyebrow">Budgets</p>
        <h2>Chaque niveau fonctionne selon un budget annuel.</h2>
      </div>
      <div class="budget-grid">
        <article v-for="budget in budgets" :key="budget.title">
          <span>{{ budget.scope }}</span>
          <h3>{{ budget.title }}</h3>
          <p>{{ budget.description }}</p>
        </article>
      </div>
    </section>

    <section class="control-section">
      <div class="section-heading">
        <p class="section-eyebrow">Contrôle</p>
        <h2>Des mécanismes de suivi et de responsabilité.</h2>
      </div>
      <div class="control-grid">
        <article v-for="control in controls" :key="control.title">
          <span>{{ control.number }}</span>
          <h3>{{ control.title }}</h3>
          <p>{{ control.description }}</p>
        </article>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FinanceTransparencyView',
  data() {
    return {
      principles: [
        {
          reference: 'Articles 1-5',
          title: 'Budget annuel',
          description: "Les finances des organes de l'EMEC sont gérées dans le cadre de budgets annuels.",
        },
        {
          reference: 'Article 2',
          title: 'Principes bibliques',
          description: "La gestion s'appuie sur l'honnêteté, la probité, l'entraide, la solidarité et la charité.",
        },
        {
          reference: 'Titres V-VI',
          title: 'Contrôle et discipline',
          description: "Le texte prévoit des contrôles de gestion et un régime disciplinaire budgétaire en cas de violation.",
        },
      ],
      resources: [
        'Dîmes',
        'Offrandes',
        'Prémices',
        'Produits des œuvres lucratives',
        'Quêtes',
        "Contribution annuelle aux charges de l'EMEC",
        'Dons et legs',
        'Recettes diverses et en nature',
      ],
      budgets: [
        {
          scope: 'Local',
          title: "Budget de l'Assemblée Locale",
          description: 'Il encadre les ressources et charges du niveau local.',
        },
        {
          scope: 'Coordination',
          title: 'Budgets des Districts et Secteurs Ecclésiastiques',
          description: 'Ils soutiennent la coordination des subdivisions ecclésiales intermédiaires.',
        },
        {
          scope: 'Circonscription',
          title: 'Budget de la Circonscription Ecclésiastique',
          description: 'Il accompagne la gestion des activités au niveau de la circonscription.',
        },
        {
          scope: 'Mission',
          title: 'Budget du Champ Missionnaire',
          description: "Il accompagne l'activité évangélique conduite dans les zones ou pays concernés.",
        },
        {
          scope: 'National',
          title: 'Budget du Conseil Exécutif',
          description: "Il porte l'exécution des orientations nationales de l'EMEC.",
        },
        {
          scope: 'Formation',
          title: "Budget de l'ITBY",
          description: 'Il couvre les besoins liés à la formation biblique et ministérielle.',
        },
        {
          scope: 'Projets',
          title: 'Budgets des projets socio-économiques',
          description: 'Ils encadrent les activites porteuses de developpement et de ressources.',
        },
      ],
      controls: [
        {
          number: '01',
          title: 'Contrôle concomitant',
          description: "Un suivi pendant l'exécution permet de surveiller la conformité de la gestion.",
        },
        {
          number: '02',
          title: 'Contrôle a posteriori',
          description: "Des vérifications après exécution peuvent être inopinées, annoncées ou périodiques.",
        },
        {
          number: '03',
          title: 'Commissariat aux comptes',
          description: 'Le régime financier prévoit aussi un cadre de vérification comptable selon les compétences définies.',
        },
        {
          number: '04',
          title: 'Procédure disciplinaire',
          description: "Les fautes budgétaires peuvent faire l'objet d'une instruction et d'une décision par les organes compétents.",
        },
      ],
    };
  },
});
</script>

<style scoped>
.finance-page {
  background: var(--cream);
}

.finance-hero {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: flex-end;
  padding: 150px 8vw 86px;
  overflow: hidden;
  background: var(--black);
}

.finance-hero-bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(7, 26, 51, 0.9), rgba(7, 26, 51, 0.46)),
    url('/images/dons-003.png') center / cover;
  filter: brightness(0.82);
}

.finance-hero-content {
  position: relative;
  z-index: 1;
  max-width: 860px;
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

.breadcrumb .current,
.section-eyebrow {
  color: var(--gold);
}

.section-eyebrow {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.finance-hero h1,
.finance-intro h2,
.finance-copy h2,
.section-heading h2,
.principle-card h3,
.budget-grid h3,
.control-grid h3 {
  font-family: 'Playfair Display', serif;
}

.finance-hero h1 {
  font-size: clamp(40px, 5.8vw, 76px);
  line-height: 1;
  margin-bottom: 24px;
}

.finance-hero p:not(.section-eyebrow) {
  max-width: 760px;
  font-size: 18px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.76);
}

.finance-intro {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 52px;
  padding: 92px 8vw;
  background: #fff;
}

.finance-intro h2,
.finance-copy h2,
.section-heading h2 {
  font-size: clamp(32px, 4vw, 56px);
  line-height: 1.08;
  color: var(--text-dark);
}

.finance-intro p:not(.section-eyebrow),
.finance-copy p,
.principle-card p,
.budget-grid p,
.control-grid p {
  color: var(--text-mid);
  line-height: 1.82;
}

.principles-section {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  padding: 92px 8vw;
}

.principle-card,
.resource-list article,
.budget-grid article,
.control-grid article {
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.72);
  padding: 28px;
}

.principle-card span,
.budget-grid span,
.control-grid span {
  display: block;
  margin-bottom: 14px;
  color: var(--gold-dark);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.8px;
  text-transform: uppercase;
}

.principle-card h3,
.budget-grid h3,
.control-grid h3 {
  font-size: 25px;
  line-height: 1.15;
  color: var(--text-dark);
  margin-bottom: 12px;
}

.finance-grid-section {
  display: grid;
  grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1fr);
  gap: 64px;
  padding: 92px 8vw;
  background: var(--black);
  color: #fff;
}

.finance-copy h2 {
  color: #fff;
  margin-bottom: 18px;
}

.finance-copy p {
  color: rgba(255, 255, 255, 0.68);
  margin-bottom: 28px;
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

.resource-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.resource-list article {
  display: flex;
  align-items: center;
  min-height: 84px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.78);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.budget-section,
.control-section {
  padding: 92px 8vw;
}

.control-section {
  background: #fff;
}

.section-heading {
  max-width: 820px;
  margin-bottom: 42px;
}

.budget-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.control-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

@media (max-width: 1100px) {
  .budget-grid,
  .control-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .finance-intro,
  .finance-grid-section,
  .principles-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .finance-hero {
    min-height: 500px;
    padding: 130px 6vw 64px;
  }

  .finance-intro,
  .principles-section,
  .finance-grid-section,
  .budget-section,
  .control-section {
    padding: 72px 6vw;
  }

  .resource-list,
  .budget-grid,
  .control-grid {
    grid-template-columns: 1fr;
  }

  .official-link {
    width: 100%;
  }
}

/* Harmonisation visuelle des cartes */
.principle-card,
.resource-list article,
.budget-grid article,
.control-grid article {
  min-width: 0;
  box-sizing: border-box;
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
}

.principle-card:hover,
.budget-grid article:hover,
.control-grid article:hover {
  border-color: rgba(201, 168, 76, 0.5);
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-3px);
}
</style>
