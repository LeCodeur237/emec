<template>
  <main class="contact-page">
    <section class="page-hero contact-hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <nav class="breadcrumb" aria-label="Fil d'ariane">
          <router-link to="/">Accueil</router-link>
          <span>›</span>
          <span class="current">Contact</span>
        </nav>
        <h1>Nous contacter<br /><em>et rejoindre la famille EMEC.</em></h1>
        <p>Une question, un besoin de prière ou le désir de visiter une assemblée ? Nous serons heureux de vous orienter.</p>
      </div>
    </section>

    <section class="contact-layout">
      <aside class="contact-sidebar reveal">
        <div class="sidebar-card">
          <p class="sidebar-kicker">Adresse</p>
          <h3>EMEC Siège</h3>
          <p>Entrée OPEP, Minboman<br />Yaoundé, Cameroun</p>
          <a href="https://maps.google.com/?q=Minboman%20Yaounde%20Cameroun" target="_blank" rel="noopener">Voir l'itinéraire</a>
        </div>

        <div class="sidebar-card">
          <p class="sidebar-kicker">Téléphone</p>
          <h3>(+237) 699 76 54 35</h3>
          <p>Pour les renseignements, l'orientation ou l'accompagnement spirituel.</p>
        </div>

        <div class="sidebar-card">
          <p class="sidebar-kicker">Horaires bureau</p>
          <h3>Lun — Sam</h3>
          <p>8h00 — 18h00</p>
        </div>
      </aside>

      <div class="contact-content">
        <section class="contact-overview reveal">
          <div>
            <p class="section-eyebrow">Nous joindre</p>
            <h2 class="section-title">Une équipe disponible pour vous orienter.</h2>
            <p>
              Que ce soit pour visiter une assemblée, demander une prière, obtenir une
              information ou être accompagné spirituellement, l'EMEC reste à votre écoute.
            </p>
          </div>
          <img src="/images/home-10.jpg" alt="EMEC Siège à Yaoundé" loading="lazy" />
        </section>

        <section class="contact-form-section reveal">
          <div class="form-heading">
            <p class="section-eyebrow">Écrire à l'EMEC</p>
            <h2 class="section-title">Envoyer un message</h2>
          </div>
          <form class="contact-form" @submit.prevent>
            <div class="form-grid">
              <label>
                Nom complet
                <input type="text" name="name" placeholder="Votre nom" required />
              </label>
              <label>
                Téléphone
                <input type="tel" name="phone" placeholder="+237 ..." />
              </label>
            </div>
            <label>
              Adresse email
              <input type="email" name="email" placeholder="votre.email@example.com" required />
            </label>
            <label>
              Sujet
              <select name="subject">
                <option>Demande d'information</option>
                <option>Besoin de prière</option>
                <option>Visiter une assemblée</option>
                <option>Faire un don</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows="6" placeholder="Votre message..." required></textarea>
            </label>
            <button class="btn-primary" type="submit">Envoyer le message</button>
          </form>
        </section>

        <section class="contact-map reveal">
          <div class="map-heading">
            <p class="section-eyebrow">Localisation</p>
            <h2>Retrouver le siège</h2>
          </div>
          <iframe
            src="https://www.google.com/maps?q=Minboman%20Yaounde%20Cameroun&output=embed"
            title="Carte du siège EMEC à Minboman Yaoundé"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </section>

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactView',
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
  background: url('/images/home-10.jpg') center/cover no-repeat;
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
  max-width: 820px;
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
  color: var(--gold-light);
  font-style: italic;
}

.page-hero p {
  color: rgba(255, 255, 255, 0.68);
  line-height: 1.75;
}

.contact-layout {
  display: grid;
  padding: 96px 8vw;
  grid-template-columns: 300px 1fr;
  gap: 48px;
  align-items: start;
  background:
    linear-gradient(135deg, rgba(201, 168, 76, 0.12), transparent 38%),
    linear-gradient(180deg, #fff 0%, #faf7f0 100%);
}

.contact-sidebar {
  position: sticky;
  top: 96px;
  display: grid;
  gap: 18px;
}

.sidebar-card,
.contact-form-section,
.contact-map {
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 6px;
  padding: 24px;
}

.sidebar-kicker,
.contact-form label {
  display: block;
  color: var(--gold-dark);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.sidebar-card h3 {
  font-family: 'Playfair Display', serif;
  margin-bottom: 10px;
}

.sidebar-card p {
  line-height: 1.75;
}

.sidebar-card a {
  display: inline-flex;
  margin-top: 18px;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  border: 1px solid rgba(201, 168, 76, 0.4);
  color: var(--black);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.6px;
  text-transform: uppercase;
}

.contact-content {
  display: grid;
  gap: 28px;
}

.contact-overview {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.58fr);
  gap: 28px;
  align-items: stretch;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 6px;
  overflow: hidden;
}

.contact-overview > div {
  padding: 34px;
}

.contact-overview p:not(.section-eyebrow) {
  color: var(--text-mid);
  line-height: 1.85;
  max-width: 720px;
}

.contact-overview img {
  width: 100%;
  height: 100%;
  min-height: 300px;
  object-fit: cover;
  display: block;
}

.form-heading {
  margin-bottom: 30px;
}

.contact-form {
  display: grid;
  gap: 18px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  margin-top: 9px;
  border: 1px solid rgba(201, 168, 76, 0.28);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.92);
  padding: 13px;
  outline: none;
  resize: vertical;
  color: var(--text-dark);
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  border-color: var(--gold);
}

.contact-map {
  padding: 0;
  overflow: hidden;
}

.map-heading {
  padding: 28px 28px 22px;
}

.map-heading h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 3vw, 42px);
  color: var(--text-dark);
}

.contact-map iframe {
  width: 100%;
  height: 380px;
  border: 0;
  display: block;
}

@media (max-width: 980px) {
  .contact-layout,
  .contact-overview,
  .form-grid {
    grid-template-columns: 1fr;
  }

  .contact-sidebar {
    position: static;
  }

}

@media (max-width: 620px) {
  .hero-content {
    padding: 88px 6vw 46px;
  }

  .page-hero h1 {
    font-size: clamp(28px, 7vw, 42px);
  }

  .contact-layout {
    padding-left: 6vw;
    padding-right: 6vw;
  }

  .contact-overview > div {
    padding: 26px;
  }

  .contact-map iframe {
    height: 320px;
  }
}
</style>
