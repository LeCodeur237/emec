<template>
  <main>
    <section class="hero">
      <div class="hero-bg" aria-hidden="true">
        <img
          v-for="(slide, index) in heroSlides"
          :key="slide.alt"
          :src="slide.src"
          :alt="slide.alt"
          :class="{ active: index === currentHeroIndex }"
          :style="{ objectPosition: slide.position }"
        />
      </div>
      <div class="hero-gradient"></div>
      <div class="hero-content">
        <h1>Un lieu de <em>transformation,</em><br />de restauration<br />et d'espÃ©rance.</h1>
        <p class="hero-sub">Une maison spirituelle oÃ¹ les vies sont bÃ¢ties, les familles restaurÃ©es et les disciples Ã©quipÃ©s pour servir Christ avec fidÃ©litÃ©.</p>
        <p class="hero-verse">Â« Mais vous, vous Ãªtes une race choisie, un sacerdoce royal, une nation sainte. Â» â€” 1 Pierre 2:9</p>
        <div class="hero-buttons">
          <router-link class="btn-primary" to="/#about">DÃ©couvrir l'EMEC</router-link>
          <router-link class="btn-outline" to="/contact">Rejoindre la famille</router-link>
        </div>
      </div>
    </section>

    <div class="ticker">
      <span class="ticker-label">Annonce</span>
      <div class="ticker-marquee">
        <div class="ticker-move">
          <template v-for="(announcement, index) in announcements" :key="`ann-${index}`">
            <span class="ticker-text">{{ announcement }}</span>
            <span class="ticker-divider" v-if="index < announcements.length - 1">â€¢</span>
          </template>
          <template v-for="(announcement, index) in announcements" :key="`ann-copy-${index}`">
            <span class="ticker-text">{{ announcement }}</span>
            <span class="ticker-divider" v-if="index < announcements.length - 1">â€¢</span>
          </template>
        </div>
      </div>
    </div>

    <section class="about" id="about">
      <div class="about-image reveal">
        <img src="/images/home-10.jpg" alt="CommunautÃ© EMEC en adoration" loading="lazy" />
        <div class="about-image-accent"></div>
        <div class="about-badge">FondÃ©e sur la Parole de Dieu</div>
      </div>
      <div class="about-text reveal">
        <p class="section-eyebrow">Qui sommes-nous</p>
        <h2 class="section-title">Une communautÃ© de <em>foi vivante</em> au cÅ“ur du Cameroun</h2>
        <p>L'Ã‰glise Messianique Ã‰vangÃ©lique du Cameroun (EMEC) est une communautÃ© chrÃ©tienne fondÃ©e sur la Parole de Dieu, la priÃ¨re, la communion fraternelle et le service. Elle rassemble des hommes, des femmes, des jeunes et des familles appelÃ©s Ã  connaÃ®tre Christ, grandir dans la foi et tÃ©moigner avec intÃ©gritÃ©.</p>
        <p>Sa mission est d'annoncer l'Ã‰vangile, former des disciples, implanter des assemblÃ©es et accompagner les vies dans leur marche avec Dieu. Ã€ travers l'enseignement, la priÃ¨re et les Å“uvres de compassion, l'EMEC porte l'espÃ©rance de Christ dans les familles, les villes et les gÃ©nÃ©rations.</p>
        <div class="about-verse">
          <blockquote>Â« Mais vous, vous Ãªtes une race choisie, un sacerdoce royal, une nation sainte, un peuple acquis, afin que vous annonciez les vertus de celui qui vous a appelÃ©s des tÃ©nÃ¨bres Ã  son admirable lumiÃ¨re. Â»</blockquote>
          <cite>1 Pierre 2:9</cite>
        </div>
        <div class="about-actions">
          <router-link class="btn-primary" to="/about">DÃ©couvrir qui nous sommes</router-link>
        </div>
        <div class="about-stats">
          <div class="stat-item">
            <div class="stat-number">30+</div>
            <div class="stat-label">AnnÃ©es de ministÃ¨re</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100+</div>
            <div class="stat-label">Villes atteintes</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">âˆž</div>
            <div class="stat-label">Vies transformÃ©es</div>
          </div>
        </div>
      </div>
    </section>

    <section class="programs" id="programs">
      <div class="reveal">
        <p class="section-eyebrow">Nos Programmes</p>
        <h2 class="section-title">Venez vivre votre foi<br />avec nous chaque semaine</h2>
      </div>
      <div class="programs-grid" v-if="programs.length">
        <article class="program-card reveal" v-for="program in programs" :key="program.id">
          <p class="program-day">{{ program.day }}</p>
          <h3 class="program-title">{{ program.title }}</h3>
          <p class="program-time">{{ program.time }}</p>
          <div class="program-number">{{ program.number }}</div>
        </article>
      </div>
      <div class="home-empty reveal" v-else>
        <h3>Aucun programme publie</h3>
        <p>Les programmes seront affiches ici depuis l'API.</p>
      </div>
    </section>

    <section class="mandate" id="mandate">
      <div class="mandate-intro reveal">
        <p class="section-eyebrow">Notre Mandat</p>
        <h2 class="section-title">AppelÃ©s Ã  <em>annoncer,</em> former et servir</h2>
        <div class="mandate-text">
          <p>Notre mandat est d'annoncer l'Ã‰vangile, de faire des disciples, de les baptiser, de les enseigner et de manifester l'amour de Dieu par la compassion, la justice et la paix, afin de glorifier Christ en toutes choses.</p>
        </div>
        <router-link class="btn-primary mandate-link" to="/mandate">En savoir plus</router-link>
      </div>
      <div class="mandate-cards reveal">
        <article class="mandate-card" v-for="item in mandateItems" :key="item.title">
          <div class="mandate-card-image">
            <img :src="item.image" :alt="item.alt" loading="lazy" />
          </div>
          <div class="mandate-card-body">
            <span class="mandate-card-kicker">{{ item.kicker }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </div>
      <div class="mandate-actions reveal">
        <router-link class="btn-primary" to="/mandate">Voir plus sur le mandat</router-link>
      </div>
    </section>

    <section class="pastor" id="pastor">
      <div class="pastor-visual reveal">
        <div class="pastor-image">
          <img src="/images/fondateur.png" alt="Feu ApÃ´tre Samuel Dalle Nyame" loading="lazy" />
          <div class="pastor-tag">
            <strong>Feu ApÃ´tre Samuel Dalle Nyame</strong>
            <span>ApÃ´tre fondateur</span>
          </div>
        </div>
        <div class="pastor-note">
          <span>HÃ©ritage</span>
          <p>Une vision transmise Ã  une gÃ©nÃ©ration appelÃ©e Ã  servir Christ avec fidÃ©litÃ©.</p>
        </div>
      </div>
      <div class="pastor-text reveal">
        <p class="section-eyebrow">HÃ©ritage du Visionnaire</p>
        <h2 class="section-title">Un homme de foi,<br />une vision <em>apostolique</em></h2>
        <div class="pastor-quote">
          <p>Â« Ma vision est de voir chaque membre de l'EMEC devenir un disciple mature de Christ, Ã©quipÃ© pour impacter positivement son environnement et glorifier Dieu. Â»</p>
        </div>
        <p>Feu l'ApÃ´tre Samuel Dalle Nyame fut le visionnaire et l'apÃ´tre fondateur associÃ© aux fondements de l'EMEC. AnimÃ© par une passion inÃ©branlable pour l'Ã‰vangile, il a portÃ© une conviction claire : Ã©tablir un lieu oÃ¹ la Parole de Dieu est prÃªchÃ©e avec puissance et oÃ¹ les vies sont transformÃ©es.</p>
        <p>Par la grÃ¢ce de Dieu, son ministÃ¨re a laissÃ© un hÃ©ritage spirituel profond, touchant d'innombrables vies Ã  travers le Cameroun et au-delÃ . L'engagement qu'il a incarnÃ© envers la mission, la formation des disciples et la compassion demeure au cÅ“ur des valeurs que l'EMEC continue de porter.</p>
        <ul class="pastor-legacy">
          <li>Une passion constante pour la Parole de Dieu.</li>
          <li>Une vision centrÃ©e sur la formation des disciples.</li>
          <li>Un hÃ©ritage de foi, de service et de compassion.</li>
        </ul>
        <router-link class="btn-primary" to="/about">DÃ©couvrir son hÃ©ritage</router-link>
      </div>
    </section>

    <section class="groups" id="groups">
      <div class="groups-header reveal">
        <p class="section-eyebrow">Nos Groupes</p>
        <h2 class="section-title">Rejoignez une communautÃ©<br /><em>qui vous accueille</em></h2>
      </div>
      <div class="groups-scroll reveal" v-if="groups.length">
        <div class="groups-track">
          <div class="groups-set">
            <template v-for="group in groups" :key="group.name">
              <a
                v-if="group.slug === 'oeuvres-sociales' && group.externalUrl"
                class="group-card"
                :href="group.externalUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="group-image">
                  <img :src="group.image" :alt="group.alt" loading="lazy" />
                </div>
                <h3 class="group-name">{{ group.name }}</h3>
                <p class="group-description">{{ group.description }}</p>
                <span class="group-more">Ouvrir le site</span>
              </a>
              <article v-else-if="group.isPrivate" class="group-card group-card-static">
                <div class="group-image">
                  <img :src="group.image" :alt="group.alt" loading="lazy" />
                </div>
                <h3 class="group-name">{{ group.name }}</h3>
                <p class="group-description">{{ group.description }}</p>
                <span class="group-more">Groupe discret</span>
              </article>
              <router-link v-else class="group-card" :to="`/groupes/${group.slug}`">
                <div class="group-image">
                  <img :src="group.image" :alt="group.alt" loading="lazy" />
                </div>
                <h3 class="group-name">{{ group.name }}</h3>
                <p class="group-description">{{ group.description }}</p>
                <span class="group-more">Voir les dÃ©tails</span>
              </router-link>
            </template>
          </div>
          <div class="groups-set" aria-hidden="true">
            <article class="group-card" v-for="group in groups" :key="`copy-${group.name}`">
              <div class="group-image">
                <img :src="group.image" :alt="group.alt" loading="lazy" />
              </div>
              <h3 class="group-name">{{ group.name }}</h3>
              <p class="group-description">{{ group.description }}</p>
              <span class="group-more">Voir les dÃ©tails</span>
            </article>
          </div>
        </div>
      </div>
      <div class="home-empty reveal" v-else>
        <h3>Aucun groupe publie</h3>
        <p>Les groupes actifs seront affiches ici depuis l'API.</p>
      </div>
    </section>

    <section class="events" id="events">
      <div class="events-header reveal">
        <div>
          <p class="section-eyebrow">Agenda</p>
          <h2 class="section-title events-title">Agenda et <em>temps forts</em></h2>
        </div>
        <router-link class="events-link" to="/events">Voir tout le calendrier â†’</router-link>
      </div>
      <div class="events-grid" v-if="events.length">
        <article class="event-card reveal" v-for="event in events" :key="event.title">
          <div class="event-date">{{ event.date }}</div>
          <div class="event-month">{{ event.month }}</div>
          <h3 class="event-title">{{ event.title }}</h3>
          <p class="event-location">{{ event.location }}</p>
        </article>
      </div>
      <div class="home-empty reveal" v-else>
        <h3>Aucun evenement publie</h3>
        <p>Les prochains rendez-vous seront affiches ici depuis l'API.</p>
      </div>
    </section>

    <section class="giving" id="don">
      <div class="giving-intro reveal">
        <p class="section-eyebrow">Faire un don</p>
        <h2 class="section-title">Soutenir l'Å“uvre<br /><em>avec foi et gÃ©nÃ©rositÃ©</em></h2>
        <p>
          Vos dons accompagnent l'Ã©vangÃ©lisation, les actions sociales, les programmes de formation
          et le service auprÃ¨s des familles. Merci de contribuer Ã  l'avancement de la mission.
        </p>
        <ul class="giving-impact">
          <li>Ã‰vangÃ©lisation et implantation</li>
          <li>Formation biblique et accompagnement</li>
          <li>Actions sociales auprÃ¨s des familles</li>
        </ul>
      </div>
      <div class="giving-options">
        <article class="giving-card reveal">
          <div class="giving-card-head">
            <div class="giving-provider orange-money">OM</div>
            <div>
              <p class="giving-label">Orange Money</p>
              <h3>Faire un don par OM</h3>
            </div>
          </div>
          <div class="giving-details">
            <div>
              <span>NumÃ©ro</span>
              <strong>+237 6 99 81 68 95</strong>
            </div>
            <div>
              <span>Nom du compte</span>
              <strong>NTAP RUBEN</strong>
            </div>
          </div>
        </article>
        <article class="giving-card reveal">
          <div class="giving-card-head">
            <div class="giving-provider mtn-money">MTN</div>
            <div>
              <p class="giving-label">MTN Mobile Money</p>
              <h3>Faire un don par MTN</h3>
            </div>
          </div>
          <div class="giving-details">
            <div>
              <span>NumÃ©ro</span>
              <strong>+237 678 660 638</strong>
            </div>
            <div>
              <span>Nom du compte</span>
              <strong>NTAP RUBEN</strong>
            </div>
          </div>
        </article>
      </div>
      <div class="giving-thumbs reveal" aria-label="AperÃ§u des actions soutenues par les dons">
        <img src="/images/dons-001.png" alt="Culte et Ã©vangÃ©lisation Ã  l'EMEC" loading="lazy" />
        <img src="/images/dons-002.png" alt="Service et compassion" loading="lazy" />
        <img src="/images/dons-003.png" alt="Formation et priÃ¨re" loading="lazy" />
        <img src="/images/dons-004.png" alt="Communion fraternelle" loading="lazy" />
        <img src="/images/dons-005.png" alt="Å’uvres sociales" loading="lazy" />
        <img src="/images/dons-006.png" alt="CommunautÃ© rassemblÃ©e" loading="lazy" />
      </div>
    </section>

    <section class="gallery-preview" id="gallery">
      <div class="gallery-copy reveal">
        <p class="section-eyebrow">En images</p>
        <h2 class="section-title gallery-title">La grÃ¢ce de Dieu en images</h2>
        <p>Un parcours Ã  travers nos cultes, nos temps de priÃ¨re, nos rencontres et les tÃ©moignages de la grÃ¢ce de Dieu au milieu de son peuple.</p>
        <router-link class="btn-primary gallery-link" to="/gallery">Voir la galerie</router-link>
      </div>
      <div class="gallery-stack reveal" aria-label="AperÃ§u de la galerie photos EMEC">
        <figure
          class="gallery-photo"
          v-for="(photo, index) in galleryPhotos"
          :key="photo.alt"
          :class="`gallery-photo-${index + 1}`"
        >
          <img :src="photo.src" :alt="photo.alt" :style="{ objectPosition: photo.position || 'center center' }" loading="lazy" />
        </figure>
      </div>
    </section>

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { galleryImages } from '../data/gallery';
import {
  fetchEvents,
  fetchGroups,
  fetchWeeklyPrograms,
} from '../services/emecApi';
import type { GroupItem } from '../data/groups';

interface Program {
  id: number;
  day: string;
  title: string;
  time: string;
  number: string;
}

interface EventItem {
  title: string;
  date: string;
  month: string;
  location: string;
}

interface MandateItem {
  kicker: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface GalleryPhoto {
  src: string;
  alt: string;
  position?: string;
}

interface HeroSlide {
  src: string;
  alt: string;
  position: string;
}

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      currentHeroIndex: 0,
      heroTimer: null as number | null,
      groups: [] as GroupItem[],
      heroSlides: [
        { src: '/images/home-1.jpg', alt: 'Culte de cÃ©lÃ©bration Ã  l\'EMEC', position: 'center center' },
        { src: '/images/hero-2.jpg', alt: 'CommunautÃ© EMEC en adoration', position: '35% center' },
        { src: '/images/hero-3.jpg', alt: 'Temps de priÃ¨re et de communion Ã  l\'EMEC', position: '70% center' },
      ] as HeroSlide[],
      programs: [] as Program[],
      events: [] as EventItem[],
      mandateItems: [
        {
          kicker: 'Annonce',
          title: 'Annoncer l\'Ã‰vangile',
          description: 'Porter la bonne nouvelle de JÃ©sus-Christ avec clartÃ©, foi et compassion, afin que chaque personne entende l\'appel du salut.',
          image: '/images/mandate-evangile.png',
          alt: 'Annonce de l\'Ã‰vangile Ã  l\'EMEC',
        },
        {
          kicker: 'BaptÃªme',
          title: 'Conduire au baptÃªme',
          description: 'Accompagner ceux qui confessent Christ dans cet acte d\'obÃ©issance, signe public d\'une vie nouvelle en JÃ©sus-Christ.',
          image: '/images/mandate-bapteme.png',
          alt: 'BaptÃªme et engagement chrÃ©tien Ã  l\'EMEC',
        },
        {
          kicker: 'Enseignement',
          title: 'Former par la Parole',
          description: 'Ã‰quiper les croyants par un enseignement biblique solide, pour faire grandir des disciples matures et enracinÃ©s.',
          image: '/images/mandate-parole.png',
          alt: 'Enseignement biblique et formation des disciples',
        },
        {
          kicker: 'Service',
          title: 'Servir avec compassion',
          description: 'Manifester l\'amour de Dieu par le service, l\'entraide et des actions concrÃ¨tes au bÃ©nÃ©fice des familles et des communautÃ©s.',
          image: '/images/mandate-service.png',
          alt: 'Service et compassion au sein de la communautÃ© EMEC',
        },
      ] as MandateItem[],
      announcements: [
        'Bienvenue Ã  l\'EMEC : une famille spirituelle fondÃ©e sur la Parole, la priÃ¨re et la mission.',
        'Retrouvez les cultes, enseignements et temps de priÃ¨re dans la page Ã‰vÃ©nements.',
      ] as string[],
      galleryPhotos: galleryImages.slice(0, 6) as GalleryPhoto[],
    };
  },
  mounted() {
    this.loadHomeData();

    this.heroTimer = window.setInterval(() => {
      this.currentHeroIndex = (this.currentHeroIndex + 1) % this.heroSlides.length;
    }, 5200);

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
  beforeUnmount() {
    if (this.heroTimer) {
      window.clearInterval(this.heroTimer);
    }
  },
  methods: {
    async loadHomeData() {
      try {
        const [apiGroups, apiPrograms, apiEvents] = await Promise.all([
          fetchGroups(),
          fetchWeeklyPrograms(),
          fetchEvents(),
        ]);

        if (apiGroups.length) {
          this.groups = apiGroups;
        }

        if (apiPrograms.length) {
          this.programs = apiPrograms.slice(0, 4).map((program, index) => ({
            ...program,
            number: String(index + 1).padStart(2, '0'),
          }));
        }

        if (apiEvents.length) {
          this.events = apiEvents.slice(0, 3).map((event) => ({
            title: event.title,
            date: event.day,
            month: event.month,
            location: `${event.location} Â· ${event.time}`,
          }));
        }
      } catch {
        this.groups = [];
        this.programs = [];
        this.events = [];
      }
    },
  },
});
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 680px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  filter: brightness(0.38);
}

.hero-bg img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1.04);
  transition: opacity 1.2s ease, transform 6s ease;
}

.hero-bg img.active {
  opacity: 1;
  transform: scale(1);
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(7, 26, 51, 0.85) 0%, rgba(7, 26, 51, 0.4) 50%, rgba(7, 26, 51, 0.7) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 0 10vw;
  max-width: 860px;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
  color: var(--gold);
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.hero h1 {
  font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 4.5vw, 64px);
    font-weight: 900;
    line-height: 1.08;
    color: #fff;
}

.hero h1 em {
  font-style: italic;
  color: var(--gold-light);
}

.hero-sub {
  margin-top: 24px;
  font-size: clamp(15px, 1.6vw, 18px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.72);
  max-width: 560px;
  font-weight: 300;
}

.hero-verse {
  margin-top: 20px;
  font-family: 'Libre Baskerville', serif;
  font-size: 13px;
  font-style: italic;
  color: var(--gold);
}

.hero-buttons {
  margin-top: 44px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-scroll {
  position: absolute;
  bottom: 40px;
  left: 10vw;
  display: flex;
  align-items: center;
  gap: 12px;
}

.hero-scroll .scroll-label {
  font-size: 11px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
}

.scroll-line {
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 0.45);
}

.ticker {
  background: var(--gold);
  padding: 11px 5vw;
  display: flex;
  align-items: center;
  gap: 20px;
  overflow: hidden;
}

.ticker-label {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--black);
  white-space: nowrap;
  background: rgba(7, 26, 51, 0.12);
  padding: 4px 10px;
  border-radius: 2px;
  flex-shrink: 0;
}

.ticker-marquee {
  flex: 1;
  overflow: hidden;
}

.ticker-move {
  display: inline-flex;
  align-items: center;
  gap: 24px;
  min-width: max-content;
  animation: ticker-scroll 20s linear infinite;
}

.ticker-text {
  font-size: 13px;
  color: var(--black);
  white-space: nowrap;
}

.ticker-divider {
  color: rgba(7, 26, 51, 0.45);
  white-space: nowrap;
}

@keyframes ticker-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.about {
  background: var(--cream);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.about-image {
  position: relative;
}

.about-image img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  border-radius: 4px;
}

.about-image-accent {
  position: absolute;
  bottom: -24px;
  right: -24px;
  width: 200px;
  height: 200px;
  border: 1px solid var(--gold);
  border-radius: 4px;
  opacity: 0.4;
  z-index: -1;
}

.about-badge {
  position: absolute;
  top: 32px;
  left: -32px;
  background: var(--black);
  color: var(--gold);
  font-family: 'Playfair Display', serif;
  font-size: 13px;
  font-style: italic;
  padding: 14px 20px;
  max-width: 160px;
  line-height: 1.4;
}

.about-text p {
  font-size: 16px;
  line-height: 1.85;
  color: rgba(7, 26, 51, 0.65);
  margin-bottom: 18px;
}

.about-verse {
  margin: 32px 0;
  padding: 24px 28px;
  border-left: 3px solid var(--gold);
  background: rgba(201, 168, 76, 0.06);
}

.about-verse blockquote {
  font-family: 'Libre Baskerville', serif;
  font-style: italic;
  color: rgba(7, 26, 51, 0.78);
  font-size: 17px;
  line-height: 1.7;
}

.about-verse cite {
  display: block;
  margin-top: 10px;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--gold);
  font-style: normal;
}

.about-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin: 28px 0 8px;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  border: 1px solid rgba(201, 168, 76, 0.2);
  border-radius: 2px;
}

.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 700;
  color: var(--gold-dark);
}

.stat-label {
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-top: 4px;
}

.programs {
  background: var(--black);
  color: #fff;
  position: relative;
  overflow: hidden;
}

.programs::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(7, 26, 51, 0.72), rgba(7, 26, 51, 0.82)),
    url('/images/home-3.jpg') center/cover no-repeat;
  opacity: 0.58;
  pointer-events: none;
}

.programs > * {
  position: relative;
  z-index: 1;
}

.programs .section-eyebrow,
.events .section-eyebrow {
  color: var(--gold);
}

.programs .section-title,
.events .section-title {
  color: #fff;
}

.programs-grid {
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1px;
  background: rgba(255, 255, 255, 0.07);
}

.program-card {
  background: var(--black);
  padding: 40px 32px;
  position: relative;
  overflow: hidden;
  transition: background 0.3s;
}

.program-card:hover {
  background: #111008;
}

.program-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s;
}

.program-card:hover::before {
  transform: scaleX(1);
}

.program-day {
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 20px;
}

.program-title {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  color: #fff;
  margin-bottom: 12px;
}

.program-time {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 0.5px;
}

.program-number {
  position: absolute;
  bottom: 20px;
  right: 24px;
  font-family: 'Playfair Display', serif;
  font-size: 64px;
  font-weight: 900;
  color: rgba(201, 168, 76, 0.04);
}

.mandate {
  background: #f0ebe0;
  display: block;
}

.mandate-intro {
  max-width: 760px;
}

.mandate-text p {
  font-size: 16px;
  line-height: 1.85; 
  color: rgba(7, 26, 51, 0.65);
  margin-bottom: 24px;
}

.mandate-link {
  display: inline-flex;
  margin-top: 8px;
}

.mandate-cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 56px;
}

.mandate-card {
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 4px;
  overflow: hidden;
  min-height: 100%;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.mandate-card:hover {
  transform: translateY(-4px);
  border-color: rgba(201, 168, 76, 0.48);
}

.mandate-card-image {
  aspect-ratio: 4 / 3;
  background: rgba(7, 26, 51, 0.08);
  overflow: hidden;
}

.mandate-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.mandate-card:hover .mandate-card-image img {
  transform: scale(1.04);
}

.mandate-card-body {
  padding: 24px 22px 26px;
}

.mandate-card-kicker {
  display: inline-flex;
  margin-bottom: 12px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold-dark);
}

.mandate-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 21px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 10px;
}

.mandate-card p {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-mid);
  margin: 0;
}

.mandate-actions {
  display: flex;
  justify-content: center;
  margin-top: 42px;
}

.pastor {
  background:
    linear-gradient(90deg, rgba(201, 168, 76, 0.08) 0 36%, transparent 36%),
    var(--cream);
  display: grid;
  grid-template-columns: minmax(320px, 0.92fr) minmax(0, 1fr);
  gap: 86px;
  align-items: center;
}

.pastor-visual {
  position: relative;
  padding: 26px 0 0 26px;
}

.pastor-visual::before {
  content: '';
  position: absolute;
  inset: 0 auto auto 0;
  width: 74%;
  height: 82%;
  border: 1px solid rgba(201, 168, 76, 0.45);
  z-index: 0;
}

.pastor-image {
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 6px;
  background: #e9dfca;
}

.pastor-image img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: center top;
  filter: grayscale(10%) contrast(1.02);
  display: block;
}

.pastor-tag {
  position: absolute;
  right: 24px;
  bottom: 24px;
  left: 24px;
  background: rgba(7, 26, 51, 0.84);
  color: #fff;
  padding: 18px 20px;
  backdrop-filter: blur(10px);
  border-left: 3px solid var(--gold);
}

.pastor-tag strong {
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  color: var(--gold-light);
  margin-bottom: 4px;
}

.pastor-tag span {
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.72);
}

.pastor-note {
  position: relative;
  z-index: 2;
  width: min(86%, 390px);
  margin: -42px 0 0 auto;
  padding: 22px 24px;
  background: #fff;
  border: 1px solid rgba(201, 168, 76, 0.24);
}

.pastor-note span {
  display: inline-flex;
  margin-bottom: 8px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold-dark);
}

.pastor-note p {
  margin: 0;
  font-family: 'Libre Baskerville', serif;
  font-size: 15px;
  line-height: 1.75;
  color: var(--text-dark);
}

.pastor-text p {
  font-size: 16px;
  line-height: 1.85;
  color: rgba(7, 26, 51, 0.65);
  margin-bottom: 18px;
}

.pastor-quote {
  margin: 32px 0;
  padding: 28px 0 28px 28px;
  border-left: 3px solid var(--gold);
  border-top: 1px solid rgba(201, 168, 76, 0.2);
  border-bottom: 1px solid rgba(201, 168, 76, 0.2);
}

.pastor-quote p {
  font-family: 'Libre Baskerville', serif;
  font-size: 18px;
  font-style: italic;
  line-height: 1.65;
  color: rgba(7, 26, 51, 0.78);
}

.pastor-legacy {
  display: grid;
  gap: 12px;
  list-style: none;
  margin: 28px 0 30px;
}

.pastor-legacy li {
  position: relative;
  padding-left: 24px;
  font-size: 14px;
  line-height: 1.65;
  color: var(--text-mid);
}

.pastor-legacy li::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 0;
  width: 8px;
  height: 8px;
  background: var(--gold);
  transform: rotate(45deg);
}

.groups {
  background: linear-gradient(180deg, rgba(7, 26, 51, 0.4) 0%, rgba(7, 26, 51, 0.6) 100%);
  padding: 80px 5vw;
}

.groups-header {
  margin-bottom: 56px;
}

.groups .section-eyebrow {
  color: var(--gold);
}

.groups .section-title {
  color: #fff;
}

.groups-scroll {
  max-width: 100%;
  overflow: hidden;
  padding: 8px 0 16px 0;
}

.groups-track {
  display: flex;
  width: max-content;
  animation: groups-marquee 42s linear infinite;
}

.groups-scroll:hover .groups-track,
.groups-scroll:focus-within .groups-track {
  animation-play-state: paused;
}

.groups-set {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 320px;
  gap: 28px;
  padding-right: 28px;
}

.groups-set[aria-hidden="true"] .group-card {
  cursor: default;
}

.group-card-static {
  cursor: default;
}

@keyframes groups-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.group-card {
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  min-width: 320px;
  color: inherit;
  font: inherit;
  text-align: left;
  text-decoration: none;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(201, 168, 76, 0.2);
  border-radius: 6px;
  padding: 12px 12px 28px;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.group-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(201, 168, 76, 0.08);
  transition: left 0.35s ease;
  z-index: 0;
}

.group-card:hover {
  background: linear-gradient(135deg, rgba(201, 168, 76, 0.1) 0%, rgba(201, 168, 76, 0.05) 100%);
  border-color: rgba(201, 168, 76, 0.4);
  transform: translateY(-6px);
}

.group-card-static:hover,
.groups-set[aria-hidden="true"] .group-card:hover {
  transform: none;
}

.group-card:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 4px;
}

.group-card:hover::before {
  left: 100%;
}

.group-image {
  position: relative;
  z-index: 1;
  aspect-ratio: 1.35 / 1;
  margin-bottom: 22px;
  overflow: hidden;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.06);
}

.group-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 48%, rgba(7, 26, 51, 0.48) 100%);
  pointer-events: none;
}

.group-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.45s ease;
}

.group-card:hover .group-image img {
  transform: scale(1.05);
}

.group-name {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #fff;
  position: relative;
  z-index: 1;
  padding: 0 14px;
}

.group-description {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
  position: relative;
  z-index: 1;
  padding: 0 14px;
}

.group-more {
  position: relative;
  z-index: 1;
  display: inline-flex;
  width: fit-content;
  margin: 20px 14px 0;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--gold-light);
}

.events {
  background: var(--black);
}

.events-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 56px;
}

.events-link {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  text-decoration: none;
  border-bottom: 1px solid rgba(201, 168, 76, 0.4);
  padding-bottom: 2px;
}

.events-title {
  color: #fff;
}

.events-title em {
  color: var(--gold-light);
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.home-empty {
  max-width: 720px;
  margin: 28px auto 0;
  padding: 34px;
  border: 1px solid rgba(201, 168, 76, 0.2);
  background: rgba(255, 255, 255, 0.04);
  text-align: center;
  color: rgba(255, 255, 255, 0.74);
}

.programs .home-empty {
  color: rgba(7, 26, 51, 0.72);
  background: rgba(7, 26, 51, 0.04);
}

.home-empty h3 {
  margin-bottom: 8px;
  color: inherit;
  font-family: 'Playfair Display', serif;
  font-size: 24px;
}

.home-empty p {
  margin: 0;
  font-size: 14px;
}

.event-card {
  background: #111008;
  border: 1px solid rgba(201, 168, 76, 0.12);
  padding: 32px;
  border-radius: 2px;
  transition: border-color 0.3s, transform 0.3s;
}

.event-card:hover {
  border-color: rgba(201, 168, 76, 0.4);
  transform: translateY(-4px);
}

.event-date {
  font-family: 'Playfair Display', serif;
  font-size: 42px;
  font-weight: 700;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 4px;
}

.event-month {
  font-size: 10px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 20px;
}

.event-title {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
}

.event-location {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
}

.giving {
  background:
    linear-gradient(135deg, rgba(201, 168, 76, 0.1), transparent 44%),
    var(--cream);
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 72px;
  align-items: center;
}

.giving-intro p:not(.section-eyebrow) {
  margin-top: 22px;
  font-size: 16px;
  line-height: 1.85;
  color: rgba(7, 26, 51, 0.65);
  max-width: 560px;
}

.giving-impact {
  display: grid;
  gap: 12px;
  margin-top: 30px;
  list-style: none;
}

.giving-impact li {
  position: relative;
  padding-left: 24px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-mid);
}

.giving-impact li::before {
  content: '';
  position: absolute;
  top: 9px;
  left: 0;
  width: 8px;
  height: 8px;
  background: var(--gold);
  transform: rotate(45deg);
}

.giving-thumbs {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 14px;
  margin-top: -20px;
}

.giving-thumbs img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  border-radius: 4px;
  border: 1px solid rgba(201, 168, 76, 0.28);
}

.giving-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.giving-card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(201, 168, 76, 0.26);
  border-radius: 6px;
  padding: 26px;
  position: relative;
  overflow: hidden;
}

.giving-card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  height: 4px;
  background: var(--gold);
}

.giving-card-head {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 18px;
  align-items: center;
  margin-bottom: 26px;
}

.giving-provider {
  width: 72px;
  height: 72px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;
}

.orange-money {
  background: #f26a21;
}

.mtn-money {
  background: #f2c200;
  color: var(--black);
}

.giving-label {
  font-size: 10px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  color: var(--gold-dark);
  margin-bottom: 8px;
}

.giving-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  line-height: 1.15;
  color: rgba(7, 26, 51, 0.78);
}

.giving-details {
  display: grid;
  gap: 1px;
  margin-top: auto;
  background: rgba(201, 168, 76, 0.18);
}

.giving-details div {
  background: rgba(250, 247, 240, 0.9);
  padding: 16px;
}

.giving-details span {
  display: block;
  margin-bottom: 7px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--gold-dark);
}

.giving-details strong {
  display: block;
  font-size: 17px;
  line-height: 1.45;
  color: var(--text-dark);
}

.gallery-preview {
  background: #fff;
  overflow: hidden;
  padding: 92px 5vw 110px;
}

.gallery-copy {
  padding-left: 5vw;
  margin-bottom: 80px;
}

.gallery-title {
  margin-bottom: 26px;
}

.gallery-copy p:not(.section-eyebrow) {
  font-size: 16px;
  line-height: 1.85;
  color: rgba(7, 26, 51, 0.65);
  max-width: 620px;
}

.gallery-link {
  margin-top: 34px;
}

.gallery-stack {
  position: relative;
  min-height: 420px;
  max-width: 1180px;
  margin: 0 auto;
}

.gallery-photo {
  position: absolute;
  margin: 0;
  width: min(31vw, 410px);
  aspect-ratio: 1.34 / 1;
  border-radius: 26px;
  overflow: hidden;
  background: var(--cream);
  box-shadow: 0 28px 70px rgba(7, 26, 51, 0.18);
  animation: gallery-float 7s ease-in-out infinite;
}

.gallery-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-photo-1 {
  left: 0;
  top: 46px;
  z-index: 5;
  transform: rotate(-3deg);
}

.gallery-photo-2 {
  left: 15%;
  top: 8px;
  z-index: 4;
  transform: rotate(2deg);
  animation-delay: -1.2s;
}

.gallery-photo-3 {
  left: 30%;
  top: 32px;
  z-index: 6;
  transform: rotate(-1deg);
  animation-delay: -2.4s;
}

.gallery-photo-4 {
  left: 45%;
  top: 0;
  z-index: 3;
  transform: rotate(3deg);
  animation-delay: -3.6s;
}

.gallery-photo-5 {
  left: 60%;
  top: 56px;
  z-index: 2;
  transform: rotate(-2deg);
  animation-delay: -4.8s;
}

.gallery-photo-6 {
  right: 0;
  top: 28px;
  z-index: 1;
  transform: rotate(2deg);
  animation-delay: -6s;
}

@keyframes gallery-float {
  0%,
  100% {
    translate: 0 0;
  }
  50% {
    translate: 0 -12px;
  }
}

@media (max-width: 1180px) and (min-width: 901px) {
  .mandate-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .giving-thumbs {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 0;
  }
}

@media (max-width: 900px) {
  .hero {
    height: auto;
    min-height: 620px;
    padding: 116px 0 72px;
  }

  .hero-content {
    padding: 0 6vw;
  }

  .hero-buttons {
    margin-top: 34px;
  }

  .about,
  .mandate,
  .pastor,
  .giving {
    grid-template-columns: 1fr;
  }

  .groups-scroll {
    margin-right: -6vw;
  }

  .groups-set {
    grid-auto-columns: 286px;
  }

  .programs-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .mandate-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .pastor {
    gap: 46px;
  }

  .pastor-visual {
    max-width: 620px;
  }

  .pastor-image img {
    height: 520px;
  }

  .events-grid {
    grid-template-columns: 1fr;
  }

  .giving-options {
    grid-template-columns: 1fr;
  }

  .giving-thumbs {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 0;
  }

  .gallery-copy {
    padding-left: 0;
    margin-bottom: 42px;
  }

  .gallery-stack {
    min-height: 640px;
  }

  .gallery-photo {
    width: min(78vw, 440px);
  }

  .gallery-photo-1 {
    left: 0;
    top: 0;
  }

  .gallery-photo-2 {
    left: 14vw;
    top: 112px;
  }

  .gallery-photo-3 {
    left: 2vw;
    top: 232px;
  }

  .gallery-photo-4 {
    left: 18vw;
    top: 352px;
  }

  .gallery-photo-5 {
    left: 4vw;
    right: auto;
    top: 472px;
  }

  .gallery-photo-6 {
    left: 18vw;
    right: auto;
    top: 592px;
  }

  .gallery-stack {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    min-height: 0;
  }

  .gallery-photo,
  .gallery-photo-1,
  .gallery-photo-2,
  .gallery-photo-3,
  .gallery-photo-4,
  .gallery-photo-5,
  .gallery-photo-6 {
    position: relative;
    inset: auto;
    left: auto;
    right: auto;
    top: auto;
    width: 100%;
    transform: none;
  }

}

@media (max-width: 540px) {
  .hero {
    min-height: 560px;
    padding: 106px 0 58px;
  }

  .hero h1 {
    font-size: clamp(32px, 10vw, 44px);
  }

  .hero-sub {
    font-size: 15px;
  }

  .programs-grid {
    grid-template-columns: 1fr;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }

  .mandate-cards {
    grid-template-columns: 1fr;
  }

  .pastor-visual {
    padding: 18px 0 0 18px;
  }

  .pastor-image img {
    height: 430px;
  }

  .pastor-note {
    width: calc(100% - 18px);
    margin-top: -24px;
  }

  .pastor-quote {
    padding-left: 20px;
  }

  .giving-provider {
    width: 72px;
    height: 72px;
  }

  .giving-thumbs {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .gallery-preview {
    padding: 72px 6vw 90px;
  }

  .gallery-stack {
    grid-template-columns: 1fr;
    min-height: 0;
  }

  .gallery-photo {
    border-radius: 18px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ticker-move,
  .groups-track,
  .gallery-photo,
  .hero-bg img {
    animation: none;
    transition: none;
  }

  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
