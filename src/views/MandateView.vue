<template>
  <main class="mandate-page">
    <section class="page-hero mandate-hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <nav class="breadcrumb" aria-label="Fil d'ariane">
          <router-link to="/">Accueil</router-link>
          <span>/</span>
          <span class="current">Notre mandat</span>
        </nav>
        <h1>Notre mandat,<br /><em>annoncer Christ et former des disciples.</em></h1>
        <p>Une mission reçue du Seigneur : proclamer l'Évangile, conduire les croyants dans l'obéissance, enseigner la Parole et servir les communautés avec l'amour de Dieu.</p>
      </div>
    </section>

    <section class="mandate-intro">
      <div class="intro-copy reveal">
        <p class="section-eyebrow">Le Grand Mandat</p>
        <h2 class="section-title">Une mission simple, profonde et toujours actuelle.</h2>
        <p>
          Le mandat de l'EMEC s'inscrit dans l'ordre missionnaire confié par Jésus-Christ à son Église :
          annoncer la bonne nouvelle, faire des disciples, les accompagner dans la foi et les enseigner à marcher selon la Parole.
        </p>
      </div>
      <div class="intro-card reveal">
        <p>« Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit, et enseignez-leur à observer tout ce que je vous ai prescrit. »</p>
        <span>Matthieu 28 : 19–20</span>
      </div>
      <figure class="mandate-wide-image reveal">
        <img src="/images/mandate.png" alt="Le Grand Mandat de l'EMEC" loading="lazy" />
      </figure>
    </section>

    <section class="pillars-section" id="piliers">
      <div class="section-intro reveal">
        <p class="section-eyebrow">Nos engagements</p>
        <h2 class="section-title">Quatre piliers pour porter la mission.</h2>
      </div>
      <div class="pillars-grid">
        <article class="pillar-card reveal" v-for="item in pillars" :key="item.title">
          <div class="pillar-image">
            <img :src="item.image" :alt="item.alt" loading="lazy" />
            <span>{{ item.number }}</span>
          </div>
          <div class="pillar-body">
            <small>{{ item.tag }}</small>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="mission-note reveal">
      <blockquote>
        Notre mandat est d'annoncer l'Évangile, de faire des disciples, de les baptiser, de les enseigner et de manifester l'amour de Dieu par la compassion, la justice et la paix.
      </blockquote>
      <cite>La vision de l'EMEC</cite>
    </section>

    <section class="mandate-official reveal">
      <div>
        <p class="section-eyebrow">Fondement officiel</p>
        <h2>Une mission inscrite dans les textes de l'EMEC</h2>
        <p>
          Les Statuts rappellent que l'EMEC a pour objet de répandre l'Évangile, d'implanter des églises,
          de former les serviteurs de Dieu et de participer aux œuvres sociales. Le Règlement Intérieur
          précise la vision missionnaire, la profession de foi, la vie des membres et l'organisation du service.
        </p>
        <div class="official-points">
          <article>
            <span>01</span>
            <p>Répandre l'Évangile et conduire les personnes à la foi en Jésus-Christ.</p>
          </article>
          <article>
            <span>02</span>
            <p>Implanter des assemblées et structurer la vie spirituelle des communautés.</p>
          </article>
          <article>
            <span>03</span>
            <p>Former les serviteurs de Dieu et soutenir les œuvres sociales.</p>
          </article>
        </div>
      </div>
      <router-link
        class="official-link"
        :to="{ path: '/documents', query: { doc: 'statuts', search: 'Article 4' } }"
      >
        Lire les textes officiels
      </router-link>
    </section>

    <section class="final-cta reveal">
      <div>
        <p class="section-eyebrow">Participer</p>
        <h2>Prendre part à la mission</h2>
        <p>Rejoignez une communauté portée par la Parole, la prière et le service. Ensemble, annonçons Christ, formons des disciples et servons nos communautés.</p>
      </div>
      <div class="cta-actions">
        <router-link class="cta-card" to="/churches">
          <span>01</span>
          <div>
            <h3>Trouver une assemblée</h3>
            <p>Rejoindre un lieu de culte, de communion et d'accompagnement spirituel.</p>
          </div>
        </router-link>
        <router-link class="cta-card" to="/events">
          <span>02</span>
          <div>
            <h3>Participer</h3>
            <p>Découvrir les cultes, enseignements et temps de prière de la semaine.</p>
          </div>
        </router-link>
        <router-link class="cta-card" to="/documents">
          <span>03</span>
          <div>
            <h3>Lire les textes</h3>
            <p>Consulter les documents officiels qui encadrent la mission et l'organisation de l'EMEC.</p>
          </div>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface PillarItem {
  number: string;
  title: string;
  text: string;
  tag: string;
  image: string;
  alt: string;
}

export default defineComponent({
  name: 'MandateView',
  data() {
    return {
      pillars: [
        {
          number: '01',
          title: "Annoncer l'Évangile",
          text: 'Proclamer la bonne nouvelle du salut par Jésus-Christ et inviter chaque personne à rencontrer Dieu, recevoir Sa grâce et marcher dans la lumière de Sa Parole.',
          tag: 'Annonce',
          image: '/images/mandate-evangile.png',
          alt: "Annonce de l'Évangile à l'EMEC",
        },
        {
          number: '02',
          title: 'Conduire au baptême',
          text: "Accompagner les nouveaux disciples dans une foi publique, consciente et engagée, signe d'une vie transformée et consacrée à Christ.",
          tag: 'Baptême',
          image: '/images/mandate-bapteme.png',
          alt: "Baptême à l'EMEC",
        },
        {
          number: '03',
          title: 'Enseigner la Parole',
          text: 'Former des croyants matures, enracinés dans les Écritures, capables de discerner la volonté de Dieu et de vivre comme disciples dans leur génération.',
          tag: 'Enseignement',
          image: '/images/mandate-parole.png',
          alt: "Enseignement biblique à l'EMEC",
        },
        {
          number: '04',
          title: 'Servir avec compassion',
          text: "Manifester l'amour de Dieu par le service, l'entraide, la justice et des actions concrètes en faveur des familles et des communautés.",
          tag: 'Service',
          image: '/images/mandate-service.png',
          alt: "Service et compassion à l'EMEC",
        },
      ] as PillarItem[],
    };
  },
  mounted() {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
  }
});
</script>

<style scoped>
.mandate-page {
  background: var(--cream);
}

.page-hero {
  position: relative;
  min-height: 64vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: url('/images/mandate-1.jpg') center/cover no-repeat;
  filter: brightness(0.34);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(10, 8, 4, 0.96) 0%, rgba(10, 8, 4, 0.34) 58%, rgba(10, 8, 4, 0.16) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 96px 5vw 56px;
  max-width: 860px;
  text-align: center;
}

.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.breadcrumb a {
  color: rgba(255, 255, 255, 0.65);
}

.breadcrumb .current {
  color: var(--gold);
}

.page-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(34px, 4.5vw, 58px);
  font-weight: 900;
  line-height: 1.1;
  color: #fff;
  margin-bottom: 18px;
}

.page-hero h1 em {
  font-style: italic;
  color: var(--gold-light);
}

.page-hero p {
  margin: 0 auto;
  max-width: 650px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.75;
}

.mandate-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  padding: 96px 8vw;
  align-items: center;
  background:
    linear-gradient(135deg, rgba(201, 168, 76, 0.08), transparent 42%),
    var(--cream);
}

.intro-card {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-left: 4px solid var(--gold);
  border-radius: 6px;
  padding: 34px;
}

.intro-copy p:not(.section-eyebrow) {
  margin-top: 20px;
  max-width: 640px;
  color: var(--text-mid);
  line-height: 1.85;
}

.intro-card p {
  font-family: 'Libre Baskerville', serif;
  font-style: italic;
  color: rgba(0, 0, 0, 0.78);
  line-height: 1.9;
}

.intro-card span {
  display: block;
  margin-top: 18px;
  color: var(--gold-dark);
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.mandate-wide-image {
  grid-column: 1 / -1;
  margin: 0;
  overflow: hidden;
  border-radius: 6px;
  aspect-ratio: 2.7 / 1;
  background: var(--black);
}

.mandate-wide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(0.88);
}

.pillars-section {
  background: #fff;
  padding: 96px 8vw;
}

.section-intro {
  margin-bottom: 48px;
}
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.pillar-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(250, 247, 240, 0.72);
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 6px;
  overflow: hidden;
  min-height: 100%;
}

.pillar-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1.2 / 1;
}

.pillar-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(0.9);
  transition: transform 0.35s ease;
}

.pillar-card:hover .pillar-image img {
  transform: scale(1.04);
}

.pillar-image span {
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-flex;
  min-width: 40px;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  background: rgba(10, 10, 10, 0.82);
  color: var(--gold);
  font-family: 'Playfair Display', serif;
  font-size: 18px;
}

.pillar-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 22px;
}

.pillar-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  line-height: 1.16;
  margin-bottom: 14px;
}

.pillar-card p {
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.8;
}

.pillar-card small {
  display: inline-flex;
  margin-bottom: 12px;
  color: var(--gold-dark);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.mission-note {
  background: var(--black);
  color: #fff;
  text-align: center;
  padding: 96px 8vw;
  padding-top: 86px;
  padding-bottom: 86px;
}

.mission-note blockquote {
  max-width: 900px;
  margin: 0 auto;
  font-family: 'Playfair Display', serif;
  font-size: clamp(24px, 3vw, 42px);
  font-style: italic;
  line-height: 1.45;
}

.mission-note cite {
  display: block;
  margin-top: 26px;
  color: var(--gold);
  font-size: 11px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  font-style: normal;
}

.mandate-official {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 40px;
  align-items: end;
  background: #fff;
  padding: 72px 8vw;
  border-bottom: 1px solid rgba(201, 168, 76, 0.18);
}

.mandate-official h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(30px, 3.5vw, 48px);
  line-height: 1.1;
  color: var(--text-dark);
  margin-bottom: 16px;
}

.mandate-official p:not(.section-eyebrow) {
  max-width: 860px;
  color: var(--text-mid);
  line-height: 1.85;
}

.official-points {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 28px;
  max-width: 960px;
}

.official-points article {
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 6px;
  background: rgba(250, 247, 240, 0.72);
  padding: 18px;
}

.official-points span {
  display: block;
  margin-bottom: 10px;
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  color: rgba(201, 168, 76, 0.7);
}

.official-points p {
  margin: 0;
  color: var(--text-mid);
  font-size: 14px;
  line-height: 1.65;
}

.official-link {
  display: inline-flex;
  justify-content: center;
  border: 1px solid rgba(10, 10, 10, 0.24);
  border-radius: 4px;
  padding: 14px 18px;
  color: var(--black);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  white-space: nowrap;
}

.official-link:hover {
  border-color: var(--gold);
  color: var(--gold-dark);
}

.final-cta {
  background: var(--cream);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  padding: 96px 8vw;
  align-items: center;
}

.final-cta h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(32px, 4vw, 56px);
  line-height: 1.1;
  margin-bottom: 18px;
}

.final-cta p {
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.85;
}

.cta-actions {
  display: grid;
  gap: 16px;
}

.cta-card {
  display: grid;
  grid-template-columns: 54px 1fr;
  gap: 18px;
  align-items: start;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 6px;
  padding: 24px;
  color: inherit;
}

.cta-card span {
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--black);
  color: var(--gold);
  border-radius: 6px;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
}

.cta-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  margin-bottom: 6px;
}

@media (max-width: 1180px) and (min-width: 981px) {
  .pillars-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 980px) {
  .mandate-intro,
  .final-cta,
  .mandate-official,
  .official-points,
  .pillars-grid {
    grid-template-columns: 1fr;
  }

  .pillars-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .hero-content {
    padding: 88px 6vw 46px;
  }

  .page-hero h1 {
    font-size: clamp(28px, 7vw, 42px);
  }

  .pillar-card,
  .intro-card,
  .cta-card {
    padding: 26px;
  }

  .pillar-card {
    padding: 0;
  }

  .mandate-wide-image {
    aspect-ratio: 1.35 / 1;
  }

  .pillars-grid {
    grid-template-columns: 1fr;
  }

  .cta-card {
    grid-template-columns: 1fr;
  }

  .official-link {
    width: 100%;
  }
}
</style>
