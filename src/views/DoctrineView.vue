<template>
  <main class="doctrine-page">
    <section class="doctrine-hero">
      <div class="doctrine-hero-bg" aria-hidden="true"></div>
      <div class="doctrine-hero-content">
        <nav class="breadcrumb" aria-label="Fil d'ariane">
          <router-link to="/">Accueil</router-link>
          <span>/</span>
          <span class="current">Doctrine</span>
        </nav>
        <p class="section-eyebrow">Profession de foi</p>
        <h1>Une foi fondée sur les Saintes Écritures.</h1>
        <p>
          La profession de foi de l'EMEC présente quinze points doctrinaux qui clarifient
          son fondement biblique, sa pratique spirituelle et sa mission.
        </p>
      </div>
    </section>

    <section class="doctrine-intro">
      <div>
        <p class="section-eyebrow">Règlement Intérieur · Article 5</p>
        <h2>Les grandes lignes de notre confession.</h2>
      </div>
      <p>
        Cette page résume les quinze points de doctrine. Pour toute lecture officielle, il faut se
        référer au texte complet du Règlement Intérieur disponible dans les documents officiels.
      </p>
    </section>

    <section class="beliefs-section">
      <article class="belief-card" v-for="belief in beliefs" :key="belief.number">
        <span>{{ belief.number }}</span>
        <h3>{{ belief.title }}</h3>
        <p>{{ belief.description }}</p>
      </article>
    </section>

    <section class="doctrine-official">
      <div>
        <p class="section-eyebrow">Texte complet</p>
        <h2>Lire la profession de foi dans son contexte officiel.</h2>
        <p>
          Les références bibliques, les formulations complètes et les autres dispositions du Règlement
          Intérieur sont disponibles dans la page des documents officiels.
        </p>
      </div>
      <router-link
        class="official-link"
        :to="{ path: '/documents', query: { doc: 'reglement-interieur', search: 'Article 5' } }"
      >
        Consulter le Règlement Intérieur
      </router-link>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DoctrineView',
  data() {
    return {
      beliefs: [
        {
          number: '01',
          title: 'La Bible',
          description: 'La Bible est la Parole inspirée, infaillible et éternelle de Dieu, norme suprême en matière de foi et de pratique.',
        },
        {
          number: '02',
          title: 'Le seul vrai Dieu',
          description: 'Dieu est unique, vivant, tout-puissant, parfait en sainteté, vérité et amour, manifesté comme Père, Fils et Saint-Esprit.',
        },
        {
          number: '03',
          title: "La création et la chute de l'homme",
          description: "L'homme a été créé à l'image de Dieu, mais il est tombé dans le péché par la désobéissance.",
        },
        {
          number: '04',
          title: 'Jésus-Christ',
          description: 'Jésus-Christ est le Fils unique de Dieu, mort, ressuscité, élevé au ciel et unique médiateur entre Dieu et les hommes.',
        },
        {
          number: '05',
          title: 'Le salut',
          description: 'Le salut et la rédemption se trouvent dans la mort et la résurrection de Jésus-Christ, par la foi, la repentance et la conversion.',
        },
        {
          number: '06',
          title: "Le baptême d'eau",
          description: "Le baptême d'eau par immersion est ordonné à ceux qui croient en Jésus-Christ et confessent publiquement leur foi.",
        },
        {
          number: '07',
          title: 'Le baptême dans le Saint-Esprit',
          description: 'Le baptême dans le Saint-Esprit équipe le croyant de puissance pour le service.',
        },
        {
          number: '08',
          title: 'Les dons spirituels',
          description: "Dieu accorde des dons spirituels et des ministères pour l'utilité commune, l'édification et le perfectionnement des saints.",
        },
        {
          number: '09',
          title: 'Miracles et guérisons',
          description: 'Dieu opère des miracles et des guérisons et manifeste sa puissance au travers de ceux qui croient en lui.',
        },
        {
          number: '10',
          title: 'La sainteté de vie',
          description: 'La sainteté est la norme fixée par Dieu pour le croyant et concerne toute la vie.',
        },
        {
          number: '11',
          title: 'La libéralité',
          description: 'La pratique de la libéralité, des offrandes, de la dîme et des bonnes œuvres manifeste la foi du croyant.',
        },
        {
          number: '12',
          title: 'La Sainte-Cène',
          description: 'La Sainte-Cène, ordonnée par Jésus-Christ, est pratiquée avec le pain et la coupe.',
        },
        {
          number: '13',
          title: 'Le retour du Seigneur',
          description: "L'EMEC confesse l'enlèvement de l'Église, le retour visible de Christ, le jugement et l'accomplissement du Royaume.",
        },
        {
          number: '14',
          title: 'La vie éternelle',
          description: 'La vie éternelle est réservée aux justes, tandis que le châtiment éternel concerne ceux qui refusent le salut en Christ.',
        },
        {
          number: '15',
          title: 'La grande mission',
          description: "La grande mission de l'Église consiste à prêcher l'Évangile pour le salut des pécheurs.",
        },
      ],
    };
  },
});
</script>

<style scoped>
.doctrine-page {
  background: var(--cream);
}

.doctrine-hero {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: flex-end;
  padding: 150px 8vw 86px;
  overflow: hidden;
  background: var(--black);
}

.doctrine-hero-bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(7, 26, 51, 0.92), rgba(7, 26, 51, 0.48)),
    url('/images/mandate-parole.png') center / cover;
  filter: brightness(0.82);
}

.doctrine-hero-content {
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

.doctrine-hero h1,
.doctrine-intro h2,
.doctrine-official h2,
.belief-card h3 {
  font-family: 'Playfair Display', serif;
}

.doctrine-hero h1 {
  font-size: clamp(40px, 5.8vw, 76px);
  line-height: 1;
  margin-bottom: 24px;
}

.doctrine-hero p:not(.section-eyebrow) {
  max-width: 720px;
  font-size: 18px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.76);
}

.doctrine-intro {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 52px;
  padding: 92px 8vw;
  background: #fff;
}

.doctrine-intro h2,
.doctrine-official h2 {
  font-size: clamp(32px, 4vw, 56px);
  line-height: 1.08;
  color: var(--text-dark);
}

.doctrine-intro p:not(.section-eyebrow),
.doctrine-official p,
.belief-card p {
  color: var(--text-mid);
  line-height: 1.82;
}

.beliefs-section {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  padding: 92px 8vw;
}

.belief-card {
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.72);
  padding: 28px;
}

.belief-card span {
  display: block;
  margin-bottom: 18px;
  color: var(--gold-dark);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.8px;
  text-transform: uppercase;
}

.belief-card h3 {
  font-size: 25px;
  line-height: 1.15;
  color: var(--text-dark);
  margin-bottom: 12px;
}

.doctrine-official {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 42px;
  align-items: end;
  padding: 92px 8vw;
  background: var(--black);
  color: #fff;
}

.doctrine-official h2 {
  color: #fff;
  margin-bottom: 16px;
}

.doctrine-official p {
  max-width: 820px;
  color: rgba(255, 255, 255, 0.68);
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
  white-space: nowrap;
}

.official-link:hover {
  background: var(--gold);
  color: var(--black);
}

@media (max-width: 1100px) {
  .beliefs-section {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .doctrine-intro,
  .doctrine-official {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .doctrine-hero {
    min-height: 500px;
    padding: 130px 6vw 64px;
  }

  .doctrine-intro,
  .beliefs-section,
  .doctrine-official {
    padding: 72px 6vw;
  }

  .beliefs-section {
    grid-template-columns: 1fr;
  }

  .official-link {
    width: 100%;
  }
}

/* Harmonisation visuelle des cartes */
.belief-card {
  min-width: 0;
  min-height: 100%;
  box-sizing: border-box;
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
}

.belief-card:hover {
  border-color: rgba(201, 168, 76, 0.5);
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-3px);
}
</style>
