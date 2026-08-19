<template>
  <main class="church-detail-page">
    <section class="church-detail-hero" v-if="church">
      <div class="church-detail-bg" aria-hidden="true">
        <img :src="church.image" :alt="church.alt" />
      </div>
      <div class="church-detail-content">
        <router-link class="back-link" to="/churches">Retour aux assemblées</router-link>
        <p class="section-eyebrow">{{ church.status }}</p>
        <h1>{{ church.name }}</h1>
        <p>{{ church.description }}</p>
        <div class="hero-admin-leaders" aria-label="Responsables administratifs">
          <article
            v-for="leader in church.administrativeLeaders"
            :key="leader.role"
          >
            <img :src="leader.image" :alt="leader.name" />
            <div>
              <span>{{ leader.role }}</span>
              <strong>{{ leader.name }}</strong>
              <small>{{ leader.period }}</small>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="church-detail-layout" v-if="church">
      <div class="church-detail-main">
        <p class="section-eyebrow">Assemblée Locale</p>
        <h2>Informations de l'assemblée</h2>
        <p>
          Retrouvez les informations essentielles de cette assemblée : localisation,
          rattachement ecclésial, horaires de rassemblement et vision pastorale.
        </p>

        <div class="info-grid">
          <article>
            <span>Nom de baptême</span>
            <strong>{{ church.baptismName }}</strong>
          </article>
          <article>
            <span>Ville</span>
            <strong>{{ church.city }}</strong>
          </article>
          <article>
            <span>Quartier</span>
            <strong>{{ church.neighborhood }}</strong>
          </article>
          <article>
            <span>Localité</span>
            <strong>{{ church.locality }}</strong>
          </article>
          <article>
            <span>Secteur Ecclésiastique</span>
            <strong>{{ church.sector }}</strong>
          </article>
          <article>
            <span>District Ecclésiastique</span>
            <strong>{{ church.district }}</strong>
          </article>
          <article>
            <span>Circonscription Ecclésiastique</span>
            <strong>{{ church.circumscription }}</strong>
          </article>
          <article>
            <span>Champ Missionnaire</span>
            <strong>{{ church.missionField }}</strong>
          </article>
          <article>
            <span>Adresse</span>
            <strong>{{ church.address }}</strong>
          </article>
        </div>

        <div class="pastor-vision">
          <p class="section-eyebrow">Vision du pasteur</p>
          <blockquote>{{ church.pastorVision }}</blockquote>
        </div>
      </div>

      <aside class="church-contact-panel">
        <img :src="church.image" :alt="church.alt" loading="lazy" />
        <div>
          <span>Contact de l'assemblée</span>
          <strong>{{ church.contact }}</strong>
          <div class="meeting-list">
            <span>Horaires de rassemblement</span>
            <p v-for="meeting in church.meetingTimes" :key="`${meeting.day}-${meeting.hours}`">
              <strong>{{ meeting.day }}</strong>
              {{ meeting.hours }}
            </p>
          </div>
          <router-link to="/contact">Demander des informations</router-link>
        </div>
      </aside>
    </section>

    <section class="church-leaders-section" v-if="church">
      <div class="leaders-heading">
        <p class="section-eyebrow">Responsables</p>
        <h2>Équipe de conduite</h2>
        <button type="button" @click="isFormerLeadersOpen = true">
          Voir les anciens responsables
        </button>
      </div>

      <div class="church-leaders-grid">
        <article v-for="leader in church.leaders" :key="`${leader.name}-${leader.responsibility}`">
          <img :src="leader.image" :alt="leader.name" loading="lazy" />
          <div>
            <h3>{{ leader.name }}</h3>
            <p>{{ leader.responsibility }}</p>
            <span>{{ leader.period }}</span>
          </div>
        </article>
      </div>
    </section>

    <div
      class="former-leaders-modal"
      v-if="church && isFormerLeadersOpen"
      role="dialog"
      aria-modal="true"
      aria-label="Anciens responsables"
    >
      <button
        class="former-modal-backdrop"
        type="button"
        aria-label="Fermer"
        @click="isFormerLeadersOpen = false"
      ></button>
      <div class="former-modal-panel">
        <button
          class="former-modal-close"
          type="button"
          aria-label="Fermer"
          @click="isFormerLeadersOpen = false"
        >
          ×
        </button>
        <p class="section-eyebrow">Archives</p>
        <h2>Anciens responsables</h2>
        <p>
          Cette section recevra les anciens responsables de {{ church.name }} avec
          leurs photos, responsabilités et périodes de service après validation des archives locales.
        </p>
        <div class="former-empty">
          <h3>Archives en attente</h3>
          <p>Les données seront ajoutées lorsque les informations officielles de l'assemblée seront confirmées.</p>
        </div>
      </div>
    </div>

    <section class="church-map-section" v-if="church">
      <div class="map-heading">
        <p class="section-eyebrow">Localisation</p>
        <h2>Retrouver l'assemblée</h2>
      </div>
      <div class="map-frame">
        <iframe
          :src="mapEmbedUrl"
          :title="`Carte - ${church.name}`"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <a class="itinerary-link" :href="church.mapUrl" target="_blank" rel="noopener">
        Ouvrir l'itinéraire
      </a>
    </section>

    <section class="church-not-found" v-else>
      <p class="section-eyebrow">Nos églises</p>
      <h1>Assemblée introuvable</h1>
      <p>Le lien demandé n'existe pas ou l'assemblée n'est pas encore renseignée.</p>
      <router-link class="itinerary-link" to="/churches">Retour aux assemblées</router-link>
    </section>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { findChurchBySlug } from "../data/churches";

export default defineComponent({
  name: "ChurchDetailView",
  setup() {
    const route = useRoute();
    const isFormerLeadersOpen = ref(false);
    const church = computed(() => findChurchBySlug(String(route.params.slug || "")));
    const mapEmbedUrl = computed(() => {
      const query = church.value
        ? `${church.value.name} ${church.value.address} Cameroun`
        : "EMEC Cameroun";
      return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
    });

    return {
      church,
      mapEmbedUrl,
      isFormerLeadersOpen,
    };
  },
});
</script>

<style scoped>
.church-detail-page {
  background: var(--cream);
  min-height: 100vh;
}

.church-detail-hero {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: flex-end;
  padding: 150px 8vw 86px;
  overflow: hidden;
  background: var(--black);
}

.church-detail-bg {
  position: absolute;
  inset: 0;
}

.church-detail-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.36);
}

.church-detail-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(7, 26, 51, 0.88), rgba(7, 26, 51, 0.28));
}

.church-detail-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  color: #fff;
}

.back-link {
  display: inline-flex;
  margin-bottom: 28px;
  color: var(--gold-light);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.8px;
  text-transform: uppercase;
}

.section-eyebrow {
  color: var(--gold);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
  margin-bottom: 16px;
  text-transform: uppercase;
}

.church-detail-content h1,
.church-detail-main h2,
.map-heading h2,
.leaders-heading h2,
.former-modal-panel h2,
.church-not-found h1 {
  font-family: "Playfair Display", serif;
}

.church-detail-content h1 {
  font-size: clamp(42px, 6vw, 76px);
  line-height: 1;
  margin-bottom: 24px;
}

.church-detail-content p:not(.section-eyebrow) {
  max-width: 650px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 18px;
  line-height: 1.8;
}

.hero-admin-leaders {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-top: 32px;
  max-width: 920px;
}

.hero-admin-leaders article {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  border: 1px solid rgba(201, 168, 76, 0.28);
  background: rgba(7, 26, 51, 0.42);
  padding: 12px;
}

.hero-admin-leaders img {
  width: 52px;
  height: 52px;
  border: 2px solid rgba(201, 168, 76, 0.34);
  border-radius: 50%;
  object-fit: cover;
  flex: 0 0 auto;
}

.hero-admin-leaders div {
  min-width: 0;
}

.hero-admin-leaders span {
  display: block;
  color: var(--gold-light);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 1.2px;
  line-height: 1.35;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.hero-admin-leaders strong {
  display: block;
  color: #fff;
  font-size: 12px;
  line-height: 1.35;
}

.hero-admin-leaders small {
  display: block;
  color: rgba(255, 255, 255, 0.58);
  font-size: 11px;
  line-height: 1.35;
  margin-top: 3px;
}

.church-detail-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 0.42fr);
  gap: 48px;
  padding: 96px 8vw;
  align-items: start;
}

.church-detail-main h2 {
  color: var(--text-dark);
  font-size: clamp(32px, 4vw, 54px);
  line-height: 1.08;
  margin-bottom: 24px;
}

.church-detail-main > p:not(.section-eyebrow) {
  max-width: 760px;
  color: var(--text-mid);
  font-size: 17px;
  line-height: 1.9;
  margin-bottom: 34px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  background: rgba(201, 168, 76, 0.22);
  border: 1px solid rgba(201, 168, 76, 0.22);
}

.info-grid article {
  background: rgba(255, 255, 255, 0.72);
  padding: 24px;
}

.info-grid span,
.church-contact-panel span {
  display: block;
  color: var(--gold-dark);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.info-grid strong,
.church-contact-panel strong {
  display: block;
  color: var(--text-dark);
  font-size: 15px;
  line-height: 1.6;
}

.pastor-vision {
  margin-top: 34px;
  border-left: 3px solid var(--gold);
  background: rgba(255, 255, 255, 0.62);
  padding: 26px 28px;
}

.pastor-vision blockquote {
  color: var(--text-dark);
  font-family: "Playfair Display", serif;
  font-size: clamp(22px, 2.4vw, 34px);
  line-height: 1.35;
  margin: 0;
}

.church-contact-panel {
  border: 1px solid rgba(201, 168, 76, 0.24);
  background: rgba(255, 255, 255, 0.66);
}

.church-contact-panel img {
  width: 100%;
  aspect-ratio: 1.12 / 1;
  object-fit: cover;
  display: block;
}

.church-contact-panel div {
  padding: 24px;
}

.meeting-list {
  border-top: 1px solid rgba(201, 168, 76, 0.2);
  margin-top: 22px;
  padding-top: 22px;
}

.meeting-list p {
  color: var(--text-mid);
  line-height: 1.6;
  margin: 0 0 10px;
}

.meeting-list p strong {
  color: var(--text-dark);
  display: inline;
  margin-right: 8px;
}

.church-contact-panel a,
.itinerary-link {
  display: inline-flex;
  width: fit-content;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
  padding: 0 16px;
  border: 1px solid rgba(201, 168, 76, 0.42);
  color: var(--black);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.6px;
  text-transform: uppercase;
}

.church-leaders-section {
  padding: 0 8vw 96px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.48), rgba(250, 247, 240, 0)),
    var(--cream);
}

.leaders-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 30px;
  border-top: 1px solid rgba(201, 168, 76, 0.22);
  padding-top: 42px;
}

.leaders-heading h2 {
  color: var(--text-dark);
  font-size: clamp(30px, 3.8vw, 52px);
}

.leaders-heading button {
  min-height: 42px;
  border: 1px solid rgba(7, 26, 51, 0.22);
  background: rgba(255, 255, 255, 0.62);
  color: var(--black);
  cursor: pointer;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
  padding: 0 16px;
  text-transform: uppercase;
}

.church-leaders-grid {
  display: grid;
  grid-auto-columns: calc((100% - 64px) / 5);
  grid-auto-flow: column;
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 12px;
  scroll-snap-type: x proximity;
}

.church-leaders-grid article {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(201, 168, 76, 0.22);
  background: rgba(255, 255, 255, 0.72);
  padding: 24px 22px;
  text-align: center;
  scroll-snap-align: start;
}

.church-leaders-grid article::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gold);
}

.church-leaders-grid img {
  width: 104px;
  height: 104px;
  object-fit: cover;
  border: 4px solid rgba(201, 168, 76, 0.18);
  border-radius: 50%;
  display: block;
  margin: 0 auto 16px;
}

.church-leaders-grid article > div {
  padding: 0;
}

.church-leaders-grid h3 {
  color: var(--text-dark);
  font-family: "Playfair Display", serif;
  font-size: 21px;
  margin-bottom: 8px;
}

.church-leaders-grid p {
  color: var(--gold-dark);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.6px;
  line-height: 1.5;
  text-transform: uppercase;
  margin: 0 auto;
  max-width: 220px;
}

.church-leaders-grid span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  border: 1px solid rgba(201, 168, 76, 0.22);
  font-size: 12px;
  line-height: 1.4;
  margin-top: 14px;
  min-height: 30px;
  padding: 0 10px;
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
  max-width: 980px;
  max-height: calc(100vh - 56px);
  overflow: auto;
  border: 1px solid rgba(201, 168, 76, 0.28);
  background: var(--cream);
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
  cursor: pointer;
  font-size: 24px;
  line-height: 1;
}

.former-modal-panel h2 {
  color: var(--text-dark);
  font-size: clamp(32px, 4vw, 52px);
  margin-bottom: 18px;
}

.former-modal-panel p:not(.section-eyebrow),
.former-empty p {
  color: var(--text-mid);
  font-size: 16px;
  line-height: 1.8;
}

.former-empty {
  margin-top: 28px;
  border: 1px solid rgba(201, 168, 76, 0.22);
  background: rgba(255, 255, 255, 0.62);
  padding: 28px;
}

.former-empty h3 {
  color: var(--text-dark);
  font-family: "Playfair Display", serif;
  font-size: 24px;
  margin-bottom: 10px;
}

.church-map-section {
  padding: 0 8vw 104px;
}

.map-heading {
  margin-bottom: 28px;
}

.map-heading h2 {
  color: var(--text-dark);
  font-size: clamp(30px, 3.8vw, 52px);
}

.map-frame {
  overflow: hidden;
  border: 1px solid rgba(201, 168, 76, 0.24);
  background: #fff;
}

.map-frame iframe {
  width: 100%;
  height: 430px;
  border: 0;
  display: block;
}

.church-not-found {
  min-height: 70vh;
  padding: 180px 8vw 100px;
}

.church-not-found h1 {
  color: var(--text-dark);
  font-size: clamp(38px, 5vw, 64px);
  margin-bottom: 18px;
}

.church-not-found p:not(.section-eyebrow) {
  color: var(--text-mid);
  font-size: 17px;
  line-height: 1.8;
}

@media (max-width: 900px) {
  .church-detail-layout,
  .info-grid {
    grid-template-columns: 1fr;
  }

  .hero-admin-leaders {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .church-leaders-grid {
    grid-auto-columns: minmax(230px, 42vw);
  }

  .leaders-heading {
    align-items: start;
    flex-direction: column;
  }
}

@media (max-width: 540px) {
  .church-detail-hero {
    min-height: 500px;
    padding: 130px 6vw 64px;
  }

  .church-detail-layout,
  .church-leaders-section,
  .church-map-section,
  .church-not-found {
    padding-left: 6vw;
    padding-right: 6vw;
  }

  .map-frame iframe {
    height: 340px;
  }

  .hero-admin-leaders {
    grid-template-columns: 1fr;
  }

  .church-leaders-grid {
    grid-auto-columns: minmax(230px, 82vw);
  }
}
</style>
