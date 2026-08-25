<template>
  <main class="contact-page">
    <section class="contact-hero">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="hero-overlay" aria-hidden="true"></div>
      <div class="hero-content">
        <nav class="breadcrumb" aria-label="Fil d'ariane">
          <router-link to="/">Accueil</router-link>
          <span>/</span>
          <span class="current">Contact</span>
        </nav>
        <p class="section-eyebrow">Contact</p>
        <h1>Nous sommes disponibles pour vous orienter.</h1>
        <p>
          Pour une visite, une demande de prière, une information ou un accompagnement spirituel,
          contactez l'EMEC ou retrouvez le siège à Yaoundé.
        </p>
      </div>
    </section>

    <section class="contact-main">
      <div class="contact-heading reveal">
        <p class="section-eyebrow">Nous joindre</p>
        <h2>Un point d'accueil clair pour vos demandes.</h2>
        <p>
          Les informations essentielles sont regroupées ici afin de faciliter votre orientation vers le siège,
          une assemblée locale ou une équipe d'accompagnement.
        </p>
      </div>

      <div class="contact-info-grid reveal" aria-label="Informations de contact EMEC">
        <article class="contact-info-card">
          <span>Adresse</span>
          <h3>EMEC Siège</h3>
          <p>Entrée OPEP, Minboman<br />Yaoundé, Cameroun</p>
          <a href="https://maps.google.com/?q=Minboman%20Yaounde%20Cameroun" target="_blank" rel="noopener">Voir l'itinéraire</a>
        </article>
        <article class="contact-info-card">
          <span>Téléphone</span>
          <h3>(+237) 699 76 54 35</h3>
          <p>Pour les renseignements, l'orientation et les demandes d'accompagnement spirituel.</p>
        </article>
        <article class="contact-info-card">
          <span>Horaires bureau</span>
          <h3>Lundi - Samedi</h3>
          <p>8h00 - 18h00<br />Accueil, orientation et informations pratiques.</p>
        </article>
      </div>

      <div class="contact-workspace">
        <section class="contact-form-section reveal">
          <div class="form-heading">
            <p class="section-eyebrow">Écrire à l'EMEC</p>
            <h2>Envoyer un message</h2>
            <p>Votre message sera orienté vers l'équipe concernée.</p>
          </div>
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-grid">
              <label>
                Nom complet
                <input v-model="form.name" type="text" name="name" placeholder="Votre nom" required />
              </label>
              <label>
                Téléphone
                <input v-model="form.phone" type="tel" name="phone" placeholder="+237 ..." />
              </label>
            </div>
            <label>
              Adresse email
              <input v-model="form.email" type="email" name="email" placeholder="votre.email@example.com" required />
            </label>
            <label>
              Sujet
              <select v-model="form.subject" name="subject">
                <option>Demande d'information</option>
                <option>Besoin de prière</option>
                <option>Visiter une assemblée</option>
                <option>Faire un don</option>
              </select>
            </label>
            <label>
              Message
              <textarea v-model="form.message" name="message" rows="6" placeholder="Votre message..." required></textarea>
            </label>
            <p v-if="formStatus" class="form-status success">{{ formStatus }}</p>
            <p v-if="formError" class="form-status error">{{ formError }}</p>
            <button class="btn-primary" type="submit" :disabled="submitting">
              {{ submitting ? "Envoi en cours..." : "Envoyer le message" }}
            </button>
          </form>
        </section>

        <aside class="contact-map-card reveal">
          <div class="map-visual">
            <img src="/images/home-10.jpg" alt="Communauté EMEC réunie" loading="lazy" />
          </div>
          <div class="map-heading">
            <p class="section-eyebrow">Localisation</p>
            <h2>Retrouver le siège</h2>
            <p>Utilisez la carte pour vous orienter vers Minboman, Yaoundé.</p>
          </div>
          <iframe
            src="https://www.google.com/maps?q=Minboman%20Yaounde%20Cameroun&output=embed"
            title="Carte du siège EMEC à Minboman Yaoundé"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </aside>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { submitContact } from '../services/emecApi';

export default defineComponent({
  name: 'ContactView',
  data() {
    return {
      submitting: false,
      formStatus: '',
      formError: '',
      form: {
        name: '',
        phone: '',
        email: '',
        subject: "Demande d'information",
        message: '',
      },
    };
  },
  methods: {
    async submitForm() {
      this.submitting = true;
      this.formStatus = '';
      this.formError = '';

      try {
        await submitContact({
          name: this.form.name,
          phone: this.form.phone || undefined,
          email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
        });

        this.formStatus = 'Votre message a bien ete envoye.';
        this.form = {
          name: '',
          phone: '',
          email: '',
          subject: "Demande d'information",
          message: '',
        };
      } catch {
        this.formError = "Le message n'a pas pu etre envoye. Veuillez reessayer.";
      } finally {
        this.submitting = false;
      }
    },
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
  },
});
</script>

<style scoped>
.contact-page {
  background: var(--cream);
  color: var(--text-dark);
}

.contact-hero {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: flex-end;
  padding: 150px 8vw 86px;
  overflow: hidden;
  background: var(--black);
}

.hero-bg,
.hero-overlay {
  position: absolute;
  inset: 0;
}

.hero-bg {
  background: url('/images/home-10.jpg') center/cover no-repeat;
  filter: brightness(0.42);
  transform: scale(1.03);
}

.hero-overlay {
  background: linear-gradient(90deg, rgba(7, 26, 51, 0.94), rgba(7, 26, 51, 0.48));
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 850px;
  color: #fff;
}

.breadcrumb {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 22px;
  color: rgba(255, 255, 255, 0.54);
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

.contact-hero h1,
.contact-heading h2,
.contact-info-card h3,
.form-heading h2,
.map-heading h2 {
  font-family: 'Playfair Display', serif;
}

.contact-hero h1 {
  max-width: 820px;
  font-size: clamp(40px, 5.8vw, 76px);
  line-height: 1;
  margin-bottom: 24px;
}

.contact-hero p:not(.section-eyebrow) {
  max-width: 720px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 18px;
  line-height: 1.8;
}

.contact-main {
  padding: 96px 8vw 112px;
}

.contact-heading {
  max-width: 840px;
  margin-bottom: 38px;
}

.contact-heading h2,
.form-heading h2,
.map-heading h2 {
  color: var(--text-dark);
  font-size: clamp(30px, 3.4vw, 50px);
  line-height: 1.1;
  margin-bottom: 16px;
}

.contact-heading p:not(.section-eyebrow),
.contact-info-card p,
.form-heading p,
.map-heading p {
  color: var(--text-mid);
  line-height: 1.82;
}

.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 34px;
}

.contact-info-card,
.contact-form-section,
.contact-map-card {
  min-width: 0;
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.74);
  box-sizing: border-box;
}

.contact-info-card {
  display: flex;
  min-height: 220px;
  flex-direction: column;
  padding: 28px;
}

.contact-info-card span,
.contact-form label {
  display: block;
  color: var(--gold-dark);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.contact-info-card h3 {
  color: var(--text-dark);
  font-size: 25px;
  line-height: 1.16;
  margin: 14px 0 12px;
}

.contact-info-card a {
  display: inline-flex;
  width: fit-content;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  padding: 0 15px;
  border: 1px solid rgba(201, 168, 76, 0.42);
  border-radius: 4px;
  color: var(--black);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.4px;
  text-transform: uppercase;
}

.contact-workspace {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(340px, 0.95fr);
  gap: 28px;
  align-items: start;
}

.contact-form-section {
  padding: clamp(28px, 4vw, 42px);
}

.form-heading {
  margin-bottom: 28px;
}

.contact-form {
  display: grid;
  gap: 18px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  margin-top: 10px;
  border: 1px solid rgba(7, 26, 51, 0.12);
  border-radius: 5px;
  background: #fff;
  box-sizing: border-box;
  color: var(--text-dark);
  font: inherit;
  outline: none;
  padding: 14px;
  resize: vertical;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  border-color: rgba(201, 168, 76, 0.7);
}

.contact-form .btn-primary {
  width: fit-content;
  border: 0;
  cursor: pointer;
}

.contact-form .btn-primary:disabled {
  cursor: wait;
  opacity: 0.65;
}

.form-status {
  border-radius: 5px;
  font-size: 13px;
  line-height: 1.55;
  margin: 0;
  padding: 12px 14px;
}

.form-status.success {
  background: rgba(36, 112, 82, 0.1);
  color: #247052;
}

.form-status.error {
  background: rgba(154, 48, 48, 0.1);
  color: #9a3030;
}

.contact-map-card {
  overflow: hidden;
}

.map-visual img {
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.map-heading {
  padding: 30px 30px 24px;
}

.contact-map-card iframe {
  display: block;
  width: 100%;
  height: 360px;
  border: 0;
}

.contact-info-card,
.contact-form-section,
.contact-map-card {
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
}

.contact-info-card:hover,
.contact-form-section:hover,
.contact-map-card:hover {
  border-color: rgba(201, 168, 76, 0.5);
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-3px);
}

@media (max-width: 1100px) {
  .contact-info-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-workspace {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .contact-hero {
    min-height: 500px;
    padding: 130px 6vw 64px;
  }

  .contact-main {
    padding: 72px 6vw 90px;
  }

  .contact-info-grid,
  .form-grid {
    grid-template-columns: 1fr;
  }

  .contact-info-card,
  .contact-form-section {
    padding: 24px;
  }

  .contact-form .btn-primary,
  .contact-info-card a {
    width: 100%;
  }

  .map-heading {
    padding: 24px;
  }

  .contact-map-card iframe {
    height: 320px;
  }
}
</style>
