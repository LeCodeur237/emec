<template>
  <main>
    <section class="group-hero" v-if="group">
      <div class="group-hero-bg" aria-hidden="true">
        <img :src="group.image" :alt="group.alt" />
      </div>
      <div class="group-hero-content">
        <router-link class="back-link" to="/#groups">Retour aux groupes</router-link>
        <p class="section-eyebrow">Nos Groupes</p>
        <h1>{{ group.name }}</h1>
        <p>{{ group.description }}</p>
      </div>
    </section>

    <section class="group-detail" v-if="group">
      <div class="group-detail-copy">
        <p class="section-eyebrow">Vie de groupe</p>
        <h2>Un cadre pour grandir, servir et marcher ensemble</h2>
        <p>{{ group.details }}</p>
        <p>
          À travers ce groupe, l'EMEC encourage chaque membre à trouver une famille spirituelle,
          à développer ses dons et à participer activement à la mission de l'Église.
        </p>
        <div class="group-pillars">
          <article>
            <span>Vie de groupe</span>
            <p>{{ group.details }}</p>
          </article>
          <article>
            <span>Objectif</span>
            <p>{{ group.focus }}</p>
          </article>
          <article>
            <span>Vision</span>
            <p>{{ group.vision }}</p>
          </article>
          <article>
            <span>Action</span>
            <p>{{ group.action }}</p>
          </article>
        </div>
        <div class="group-actions">
          <a
            v-if="group.externalUrl"
            class="btn-primary"
            :href="group.externalUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            En savoir plus
          </a>
          <router-link v-else class="btn-primary" to="/contact">Contacter l'EMEC</router-link>
          <router-link class="btn-outline dark" to="/#groups">Voir les autres groupes</router-link>
          <router-link
            class="btn-outline dark"
            :to="{ path: '/documents', query: { doc: 'reglement-interieur', search: 'CHAPITRE IX' } }"
          >
            Base officielle
          </router-link>
        </div>
      </div>

      <aside class="group-detail-side">
        <img :src="group.image" :alt="group.alt" />
        <div class="group-info">
          <div>
            <span>Objectif</span>
            <strong>{{ group.focus }}</strong>
          </div>
          <div>
            <span>Pour qui ?</span>
            <strong>{{ group.audience }}</strong>
          </div>
        </div>
      </aside>
    </section>

    <section class="group-leaders" v-if="group?.leaders?.length">
      <div class="leaders-header">
        <p class="section-eyebrow">Dirigeants</p>
        <h2>Les responsables du groupe</h2>
        <p>Une équipe engagée accompagne la vie du groupe, veille à son organisation et soutient les membres dans leur marche avec Dieu.</p>
        <button class="leaders-archive-link" type="button" @click="isFormerLeadersOpen = true">Voir les anciens dirigeants</button>
      </div>
      <div class="leaders-grid">
        <article class="leader-card" v-for="leader in group.leaders" :key="`${leader.role}-${leader.name}`">
          <img :src="leader.image" :alt="leader.name" loading="lazy" />
          <div>
            <h3>{{ leader.name }}</h3>
            <p>{{ leader.role }}</p>
            <span>{{ leader.period }}</span>
          </div>
        </article>
      </div>
    </section>

    <div class="former-leaders-modal" v-if="group && isFormerLeadersOpen" role="dialog" aria-modal="true" aria-label="Anciens dirigeants">
      <button class="former-modal-backdrop" type="button" aria-label="Fermer" @click="isFormerLeadersOpen = false"></button>
      <div class="former-modal-panel">
        <button class="former-modal-close" type="button" aria-label="Fermer" @click="isFormerLeadersOpen = false">×</button>
        <p class="section-eyebrow">Archives</p>
        <h2>Anciens dirigeants</h2>
        <p class="former-modal-intro">
          Les anciens dirigeants de {{ group.name }} seront listés ici avec leurs photos, postes et périodes de service.
        </p>
        <div class="former-empty">
          <h3>Archives à renseigner</h3>
          <p>Les informations seront ajoutées après validation des noms, des années de service et des images.</p>
        </div>
      </div>
    </div>

    <section class="group-gallery" v-if="group">
      <div class="gallery-heading">
        <div>
          <p class="section-eyebrow">En images</p>
          <h2>La vie des groupes en mouvement</h2>
        </div>
        <a
          v-if="group.photosUrl"
          class="gallery-more-link"
          :href="group.photosUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir plus de photos
        </a>
      </div>
      <div class="gallery-marquee" aria-label="Images des groupes EMEC">
        <div class="gallery-track">
          <figure v-for="(image, index) in imageLoop" :key="`${image}-${index}`">
            <img :src="image" :alt="`${group.name} - image ${index + 1}`" loading="lazy" />
            <figcaption>{{ group.name }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="related-groups" v-if="group">
      <div class="related-header">
        <p class="section-eyebrow">Explorer</p>
        <h2>Autres groupes de l'EMEC</h2>
      </div>
      <div class="related-grid">
        <template v-for="item in relatedGroups" :key="item.slug">
          <a
            v-if="item.externalUrl"
            class="related-card"
            :href="item.externalUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="item.image" :alt="item.alt" loading="lazy" />
            <div>
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </a>
          <article v-else-if="item.isPrivate" class="related-card related-card-static">
            <img :src="item.image" :alt="item.alt" loading="lazy" />
            <div>
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </article>
          <router-link v-else class="related-card" :to="`/groupes/${item.slug}`">
            <img :src="item.image" :alt="item.alt" loading="lazy" />
            <div>
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </router-link>
        </template>
      </div>
    </section>

    <section class="group-not-found" v-else>
      <p class="section-eyebrow">Nos Groupes</p>
      <h1>Groupe introuvable</h1>
      <p>Le groupe demandé n'existe pas ou son lien a changé.</p>
      <router-link class="btn-primary" to="/#groups">Retour aux groupes</router-link>
    </section>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { findGroupBySlug, groups } from '../data/groups';

export default defineComponent({
  name: 'GroupDetailView',
  setup() {
    const route = useRoute();
    const isFormerLeadersOpen = ref(false);
    const group = computed(() => findGroupBySlug(String(route.params.slug || '')));
    const relatedGroups = computed(() => groups.filter((item) => item.slug !== group.value?.slug));
    const imageLoop = computed(() => {
      const images = group.value?.galleryImages?.length ? group.value.galleryImages : group.value ? [group.value.image] : [];
      return [...images, ...images];
    });

    return {
      group,
      relatedGroups,
      imageLoop,
      isFormerLeadersOpen,
    };
  },
});
</script>

<style scoped>
.group-hero {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: flex-end;
  padding: 150px 8vw 86px;
  overflow: hidden;
  background: var(--black);
}

.group-hero-bg {
  position: absolute;
  inset: 0;
}

.group-hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.38);
}

.group-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(7, 26, 51, 0.86), rgba(7, 26, 51, 0.34));
}

.group-hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  color: #fff;
}

.back-link {
  display: inline-flex;
  margin-bottom: 28px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--gold-light);
}

.section-eyebrow {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 16px;
}

.group-hero h1,
.group-detail h2,
.related-header h2,
.group-not-found h1 {
  font-family: 'Playfair Display', serif;
  color: inherit;
}

.group-hero h1 {
  font-size: clamp(42px, 6vw, 78px);
  line-height: 1;
  margin-bottom: 24px;
}

.group-hero p:not(.section-eyebrow) {
  max-width: 650px;
  font-size: 18px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.76);
}

.group-detail {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.72fr);
  gap: 72px;
  padding: 96px 8vw;
  background: var(--cream);
}

.group-detail-copy h2 {
  max-width: 760px;
  font-size: clamp(34px, 4vw, 54px);
  line-height: 1.08;
  color: var(--text-dark);
  margin-bottom: 28px;
}

.group-detail-copy p:not(.section-eyebrow) {
  max-width: 760px;
  font-size: 17px;
  line-height: 1.9;
  color: var(--text-mid);
  margin-bottom: 22px;
}

.group-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.group-pillars {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 36px;
}

.group-pillars article {
  border: 1px solid rgba(201, 168, 76, 0.22);
  background: rgba(255, 255, 255, 0.56);
  padding: 22px;
}

.group-pillars span {
  display: block;
  margin-bottom: 10px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold-dark);
}

.group-pillars p {
  font-size: 14px;
  line-height: 1.75;
  color: var(--text-mid);
  margin: 0;
}

.btn-outline.dark {
  color: var(--black);
  border-color: rgba(7, 26, 51, 0.28);
}

.group-detail-side {
  align-self: start;
  border: 1px solid rgba(201, 168, 76, 0.24);
  background: rgba(255, 255, 255, 0.56);
}

.group-detail-side img {
  width: 100%;
  aspect-ratio: 1.12 / 1;
  object-fit: cover;
  display: block;
}

.group-info {
  display: grid;
  gap: 1px;
  background: rgba(201, 168, 76, 0.16);
}

.group-info div {
  padding: 24px;
  background: rgba(250, 247, 240, 0.96);
}

.group-info span {
  display: block;
  margin-bottom: 8px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold-dark);
}

.group-info strong {
  display: block;
  font-size: 15px;
  line-height: 1.65;
  color: var(--text-dark);
}

.group-leaders {
  padding: 86px 8vw 96px;
  background: #fff;
}

.leaders-header {
  max-width: 760px;
  margin-bottom: 38px;
}

.leaders-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(30px, 3.8vw, 52px);
  line-height: 1.08;
  color: var(--text-dark);
  margin-bottom: 16px;
}

.leaders-header p:not(.section-eyebrow) {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-mid);
}

.leaders-archive-link {
  display: inline-flex;
  margin-top: 22px;
  padding: 12px 18px;
  border: 1px solid rgba(7, 26, 51, 0.2);
  background: transparent;
  color: var(--black);
  cursor: pointer;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  text-decoration: none;
}

.leaders-archive-link:hover {
  border-color: var(--gold);
  color: var(--gold-dark);
}

.leaders-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 14px;
}

.leader-card {
  border: 1px solid rgba(201, 168, 76, 0.22);
  background: var(--cream);
  overflow: hidden;
}

.leader-card img {
  width: 100%;
  aspect-ratio: 1 / 1.05;
  object-fit: cover;
  display: block;
}

.leader-card div {
  padding: 18px 14px;
}

.leader-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.leader-card p {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--gold-dark);
  line-height: 1.45;
}

.leader-card span {
  display: block;
  margin-top: 10px;
  font-size: 12px;
  line-height: 1.45;
  color: var(--text-muted);
}

.former-leaders-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 28px 4vw;
}

.former-modal-backdrop {
  position: absolute;
  inset: 0;
  border: 0;
  background: rgba(7, 26, 51, 0.72);
  cursor: pointer;
}

.former-modal-panel {
  position: relative;
  z-index: 1;
  width: 100%;
  height: calc(100vh - 56px);
  max-height: calc(100vh - 56px);
  overflow: auto;
  background: var(--cream);
  border: 1px solid rgba(201, 168, 76, 0.28);
  padding: 52px;
}

.former-modal-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 38px;
  height: 38px;
  border: 0;
  background: var(--black);
  color: #fff;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
}

.former-modal-panel h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(32px, 4vw, 52px);
  color: var(--text-dark);
  margin-bottom: 18px;
}

.former-modal-intro {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-mid);
  margin-bottom: 28px;
}

.former-empty {
  border: 1px solid rgba(201, 168, 76, 0.24);
  background: rgba(255, 255, 255, 0.58);
  padding: 28px;
}

.former-empty h3 {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  color: var(--text-dark);
  margin-bottom: 10px;
}

.former-empty p {
  font-size: 15px;
  line-height: 1.75;
  color: var(--text-mid);
}

.group-gallery {
  padding: 86px 0;
  background: var(--black);
  color: #fff;
  overflow: hidden;
}

.gallery-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 22px;
  padding: 0 8vw;
  margin-bottom: 38px;
}

.gallery-heading h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(30px, 3.8vw, 52px);
  color: #fff;
}

.gallery-more-link {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(201, 168, 76, 0.5);
  padding: 13px 18px;
  color: var(--gold-light);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}

.gallery-more-link:hover {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--black);
}

.gallery-marquee {
  width: 100%;
  overflow: hidden;
}

.gallery-track {
  display: flex;
  width: max-content;
  gap: 24px;
  padding-right: 24px;
  animation: group-gallery-marquee 42s linear infinite;
}

.gallery-marquee:hover .gallery-track,
.gallery-marquee:focus-within .gallery-track {
  animation-play-state: paused;
}

.gallery-track figure {
  width: min(34vw, 390px);
  min-width: 300px;
  margin: 0;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(201, 168, 76, 0.24);
  background: rgba(255, 255, 255, 0.05);
}

.gallery-track img {
  width: 100%;
  aspect-ratio: 1.42 / 1;
  object-fit: cover;
  display: block;
  filter: brightness(0.86);
}

.gallery-track figcaption {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 16px;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  color: #fff;
  text-shadow: 0 2px 12px rgba(7, 26, 51, 0.45);
}

@keyframes group-gallery-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.related-groups {
  padding: 86px 8vw 104px;
  background: #fff;
}

.related-header {
  margin-bottom: 34px;
}

.related-header h2 {
  font-size: clamp(30px, 3.6vw, 48px);
  color: var(--text-dark);
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 22px;
}

.related-card {
  display: grid;
  border: 1px solid rgba(201, 168, 76, 0.2);
  background: var(--cream);
  color: inherit;
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.related-card:hover {
  transform: translateY(-4px);
  border-color: rgba(201, 168, 76, 0.48);
}

.related-card-static:hover {
  transform: none;
}

.related-card img {
  width: 100%;
  aspect-ratio: 1.45 / 1;
  object-fit: cover;
  display: block;
}

.related-card div {
  padding: 22px;
}

.related-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 21px;
  color: var(--text-dark);
  margin-bottom: 10px;
}

.related-card p {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-mid);
}

@media (max-width: 1180px) and (min-width: 901px) {
  .leaders-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .related-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.group-not-found {
  min-height: 70vh;
  padding: 180px 8vw 100px;
  background: var(--cream);
}

.group-not-found h1 {
  font-size: clamp(38px, 5vw, 64px);
  color: var(--text-dark);
  margin-bottom: 18px;
}

.group-not-found p:not(.section-eyebrow) {
  font-size: 17px;
  color: var(--text-mid);
  margin-bottom: 28px;
}

@media (max-width: 900px) {
  .group-detail {
    grid-template-columns: 1fr;
  }

  .group-detail {
    gap: 42px;
  }

  .group-detail-side {
    max-width: 620px;
  }

  .related-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .leaders-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 540px) {
  .group-hero {
    min-height: 500px;
    padding: 130px 6vw 64px;
  }

  .group-detail,
  .group-leaders,
  .group-gallery,
  .related-groups,
  .group-not-found {
    padding-left: 6vw;
    padding-right: 6vw;
  }

  .group-gallery {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  .gallery-heading {
    align-items: flex-start;
    flex-direction: column;
    padding: 0;
  }

  .group-pillars,
  .leaders-grid,
  .related-grid {
    grid-template-columns: 1fr;
  }

  .gallery-track figure {
    min-width: 78vw;
  }

  .group-actions .btn-primary,
  .group-actions .btn-outline {
    width: 100%;
    justify-content: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gallery-track {
    animation: none;
  }
}
</style>
