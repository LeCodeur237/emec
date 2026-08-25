<template>
  <section class="sermon-subscribe" id="predications">
      <div class="sermon-subscribe-copy">
        <p class="section-eyebrow">Prédications</p>
        <h2 class="section-title">Recevoir les prédications<br /><em>et grandir dans la Parole</em></h2>
        <p>
          Inscrivez-vous pour recevoir les messages, enseignements et exhortations de l'EMEC directement
          par email, afin de nourrir votre foi tout au long de la semaine.
        </p>
      </div>
      <form class="sermon-form" aria-label="Recevoir les prédications par email" @submit.prevent="submitNewsletter">
        <label for="footer-sermon-email">Adresse email</label>
        <div class="sermon-form-row">
          <input id="footer-sermon-email" v-model="newsletterEmail" type="email" name="email" placeholder="votre.email@example.com" required />
          <button class="btn-primary" type="submit" :disabled="newsletterSubmitting">
            {{ newsletterSubmitting ? "Inscription..." : "S'inscrire" }}
          </button>
        </div>
        <p v-if="newsletterStatus" class="newsletter-status success">{{ newsletterStatus }}</p>
        <p v-if="newsletterError" class="newsletter-status error">{{ newsletterError }}</p>
        <p>Nous envoyons uniquement des contenus spirituels liés aux prédications et enseignements de notre Communauté.</p>
      </form>
  </section>

  <footer id="contact">
      <div class="footer-grid">
        <div class="footer-brand">
          <router-link to="/" class="logo" aria-label="Accueil EMEC">
            <img src="/logo/emec-logo-white.png" alt="EMEC" />
          </router-link>
          <p>Église Messianique Évangélique du Cameroun — Un lieu de transformation, de restauration et de lumière.</p>
          <div class="social-links">
            <a href="https://web.facebook.com/profile.php?id=61590947668077" class="social-link" title="Facebook">f</a>
            <a href="https://www.youtube.com/@egliseemec" class="social-link" title="YouTube">▶</a>
            <a href="https://www.tiktok.com/@emec.eglise" class="social-link" title="TikTok">♪</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Église</h4>
          <ul>
            <li><router-link to="/about">À propos de nous</router-link></li>
            <li><router-link to="/gouvernance">Nos organes</router-link></li>
            <li><router-link to="/churches">Nos églises</router-link></li>
            <li><router-link to="/mandate">Notre mandat</router-link></li>
            <li><router-link to="/doctrine">Doctrine</router-link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Ressources</h4>
          <ul>
            <li><router-link to="/mediatheque">Centre des médias</router-link></li>
            <li><router-link to="/events">Événements</router-link></li>
            <li><router-link to="/documents">Documents officiels</router-link></li>
            <li><router-link to="/finances">Finances & transparence</router-link></li>
            <li><router-link to="/#don">Faire un don</router-link></li>
            <li><a href="https://www.messages.egliseemec.org" target="_blank" rel="noopener">Se connecter</a></li>
          </ul>
        </div>
        <div class="footer-col footer-contact">
          <h4>Contact</h4>
          <p><strong>Adresse</strong><br />Entrée OPEP, Minboman<br />Yaoundé, Cameroun</p>
          <br />
          <p><strong>Téléphone</strong><br />(+237) 699 76 54 35</p>
          <br />
          <p><strong>Horaires bureau</strong><br />Lun — Sam : 8h00 — 18h00</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 EMEC — Église Messianique Évangélique du Cameroun. Tous droits réservés.</p>
        <p>À la gloire de Dieu seul.</p>
      </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { subscribeNewsletter } from '../services/emecApi';

export default defineComponent({
  name: 'FooterSection',
  data() {
    return {
      newsletterEmail: '',
      newsletterSubmitting: false,
      newsletterStatus: '',
      newsletterError: '',
    };
  },
  methods: {
    async submitNewsletter() {
      this.newsletterSubmitting = true;
      this.newsletterStatus = '';
      this.newsletterError = '';

      try {
        await subscribeNewsletter(this.newsletterEmail);
        this.newsletterEmail = '';
        this.newsletterStatus = 'Inscription enregistree.';
      } catch {
        this.newsletterError = "L'inscription n'a pas pu etre enregistree.";
      } finally {
        this.newsletterSubmitting = false;
      }
    },
  },
});
</script>

<style scoped>
.sermon-subscribe {
  background: var(--black);
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}

.sermon-subscribe .section-eyebrow {
  color: var(--gold);
}

.sermon-subscribe .section-title {
  color: #fff;
}

.sermon-subscribe .section-title em {
  color: var(--gold-light);
}

.sermon-subscribe-copy p:not(.section-eyebrow) {
  margin-top: 22px;
  font-size: 16px;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.62);
  max-width: 580px;
}

.sermon-form {
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 6px;
  padding: 34px;
  background: rgba(255, 255, 255, 0.035);
}

.sermon-form label {
  display: block;
  margin-bottom: 12px;
  font-size: 10px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  color: var(--gold);
}

.sermon-form-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
}

.sermon-form input {
  width: 100%;
  min-height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  padding: 0 16px;
  outline: none;
}

.sermon-form input::placeholder {
  color: rgba(255, 255, 255, 0.35);
}

.sermon-form input:focus {
  border-color: var(--gold);
}

.sermon-form p {
  margin-top: 14px;
  font-size: 12px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.42);
}

.sermon-form .btn-primary:disabled {
  cursor: wait;
  opacity: 0.65;
}

.newsletter-status {
  border-radius: 4px;
  padding: 10px 12px;
}

.newsletter-status.success {
  background: rgba(36, 112, 82, 0.18);
  color: #bfe7d4;
}

.newsletter-status.error {
  background: rgba(180, 62, 62, 0.16);
  color: #ffd1d1;
}

footer {
  background: var(--black);
  color: #fff;
  padding: 96px 5vw 32px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 48px;
  margin-bottom: 64px;
}

.footer-brand .logo {
  display: inline-flex;
  margin-bottom: 24px;
}

.footer-brand img {
  height: 42px;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.8;
  max-width: 320px;
}

.social-links {
  display: flex;
  gap: 12px;
  margin-top: 28px;
}

.social-link {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-decoration: none;
  transition: background 0.3s;
}

.social-link:hover {
  background: var(--gold);
  color: var(--black);
}

.footer-col h4 {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  margin-bottom: 24px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  margin-bottom: 12px;
}

.footer-col a {
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-col a:hover {
  color: var(--gold);
}

.footer-contact p {
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.7;
}

.footer-contact strong {
  color: #fff;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 32px;
  text-align: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.7;
}

.footer-bottom p:first-child {
  margin-bottom: 8px;
}

@media (max-width: 1180px) {
  .sermon-subscribe {
    gap: 48px;
  }

  .footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .sermon-subscribe {
    grid-template-columns: 1fr;
    padding: 72px 6vw;
    gap: 48px;
  }

  .sermon-form-row {
    grid-template-columns: 1fr;
  }

  footer {
    padding: 72px 6vw 32px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 48px;
  }

  .footer-brand p {
    max-width: none;
  }
}

@media (max-width: 540px) {
  .sermon-subscribe {
    padding: 60px 6vw;
  }

  .sermon-form {
    padding: 24px;
  }

  .sermon-form .btn-primary {
    width: 100%;
  }

  footer {
    padding: 60px 6vw 24px;
  }
}

</style>
