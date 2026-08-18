<template>
  <main class="events-page">
    <section class="page-hero events-hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <nav class="breadcrumb" aria-label="Fil d'ariane">
          <router-link to="/">Accueil</router-link>
          <span>›</span>
          <span class="current">Événements</span>
        </nav>
        <h1>Événements EMEC<br /><em>vivre la foi ensemble.</em></h1>
        <p>
          Retrouvez les cultes spéciaux, campagnes, formations et temps forts de
          la vie de l'Église.
        </p>
      </div>
    </section>

    <section class="events-layout">
      <aside class="events-sidebar reveal" aria-label="Filtres des événements">
        <div class="search-box">
          <label for="event-search">Recherche</label>
          <input
            id="event-search"
            v-model="searchTerm"
            type="search"
            placeholder="Rechercher un événement..."
          />
        </div>

        <div class="category-box">
          <p>Catégories</p>
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            :class="{ active: selectedCategory === category }"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>

        <button
          class="filters-reset"
          type="button"
          :disabled="!hasActiveFilters"
          @click="resetFilters"
        >
          Réinitialiser les filtres
        </button>

        <div class="sidebar-card">
          <p class="sidebar-kicker">Programme régulier</p>
          <h3>Chaque semaine</h3>
          <p>
            Dimanche 9h00, mercredi 17h30, vendredi 17h30 au siège de l'EMEC.
          </p>
          <router-link to="/events#programmes">Voir les programmes</router-link>
        </div>
      </aside>

      <div class="events-content">
        <div class="events-heading reveal">
          <div>
            <p class="section-eyebrow">Agenda</p>
            <h2 class="section-title">Prochains rendez-vous.</h2>
          </div>
          <router-link class="programs-link" to="/events#programmes">Voir les programmes</router-link>
        </div>

        <div class="events-overview reveal" aria-label="Résumé des événements">
          <article>
            <strong>{{ events.length }}</strong>
            <span>rendez-vous</span>
          </article>
          <article>
            <strong>{{ categories.length - 1 }}</strong>
            <span>catégories</span>
          </article>
          <article>
            <strong>{{ programs.length }}</strong>
            <span>programmes réguliers</span>
          </article>
        </div>

        <div class="events-grid" v-if="filteredEvents.length">
          <article
            class="event-card reveal"
            v-for="event in paginatedEvents"
            :key="event.title"
          >
            <div class="event-card-date">
              <strong>{{ event.day }}</strong>
              <span>{{ event.month }}</span>
            </div>
            <div>
              <p class="event-category">{{ event.category }}</p>
              <h3>{{ event.title }}</h3>
              <p>{{ event.location }}</p>
              <p class="event-description">{{ event.description }}</p>
              <small>{{ event.time }}</small>
            </div>
          </article>
        </div>

        <nav
          class="events-pagination"
          v-if="totalPages > 1"
          aria-label="Pagination des événements"
        >
          <button
            type="button"
            :disabled="currentPage === 1"
            @click="goToPage(currentPage - 1)"
          >
            Précédent
          </button>
          <button
            v-for="page in paginationPages"
            :key="page"
            type="button"
            :class="{ active: currentPage === page }"
            :aria-current="currentPage === page ? 'page' : undefined"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
          <button
            type="button"
            :disabled="currentPage === totalPages"
            @click="goToPage(currentPage + 1)"
          >
            Suivant
          </button>
        </nav>

        <div class="empty-state" v-if="!filteredEvents.length">
          <h3>Aucun événement trouvé</h3>
          <p>Essayez une autre recherche ou une autre catégorie.</p>
        </div>
      </div>
    </section>

    <section class="weekly-programs" id="programmes">
      <div class="weekly-header reveal">
        <p class="section-eyebrow">Nos programmes</p>
        <h2 class="section-title">Vivre la foi avec nous chaque semaine.</h2>
      </div>
      <div class="weekly-grid">
        <article
          class="weekly-card reveal"
          v-for="program in programs"
          :key="program.id"
        >
          <p>{{ program.day }}</p>
          <h3>{{ program.title }}</h3>
          <span>{{ program.time }}</span>
        </article>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface EventItem {
  title: string;
  category: string;
  day: string;
  month: string;
  location: string;
  time: string;
  description: string;
}

interface ProgramItem {
  id: number;
  day: string;
  title: string;
  time: string;
}

export default defineComponent({
  name: "EventsView",
  data() {
    return {
      searchTerm: "",
      selectedCategory: "Tous",
      currentPage: 1,
      pageSize: 8,
      categories: [
        "Tous",
        "Culte",
        "Formation",
        "Évangélisation",
        "Prière",
        "Conférence",
      ],
      events: [
        {
          title: "Temps de prière et d'intercession",
          category: "Prière",
          day: "Ven.",
          month: "Chaque semaine",
          location: "EMEC Siège, Yaoundé",
          time: "17h30 - 20h00",
          description:
            "Un temps d'intercession, de restauration et de communion dans la présence de Dieu.",
        },
        {
          title: "Formation des disciples",
          category: "Formation",
          day: "Prog.",
          month: "Régulier",
          location: "EMEC Yaoundé",
          time: "Selon le calendrier",
          description:
            "Des temps d'enseignement pour être affermi dans la Parole et équipé pour servir avec maturité.",
        },
        {
          title: "Campagnes d'évangélisation",
          category: "Évangélisation",
          day: "Mission",
          month: "À annoncer",
          location: "Villes missionnaires de l'EMEC",
          time: "Selon programmation",
          description:
            "Des mobilisations missionnaires pour annoncer l'Évangile, prier avec les familles et servir les communautés.",
        },
        {
          title: "Culte de célébration",
          category: "Culte",
          day: "Dim.",
          month: "Chaque semaine",
          location: "EMEC Siège",
          time: "9h00 - 12h30",
          description:
            "Un rendez-vous hebdomadaire de louange, de Parole et de communion fraternelle.",
        },
      ] as EventItem[],
      programs: [
        {
          id: 1,
          day: "Dimanche",
          title: "Culte de Célébration",
          time: "9h00 — 12h30",
        },
        { id: 2, day: "Lundi", title: "École de Sion", time: "17h30 — 20h00" },
        {
          id: 3,
          day: "Mercredi",
          title: "Jour d'Enseignements",
          time: "17h30 — 20h00",
        },
        {
          id: 4,
          day: "Vendredi",
          title: "Jour de Prières",
          time: "17h30 — 20h00",
        },
      ] as ProgramItem[],
    };
  },
  computed: {
    filteredEvents(): EventItem[] {
      const query = this.searchTerm.trim().toLowerCase();
      return this.events.filter((event) => {
        const matchesCategory =
          this.selectedCategory === "Tous" ||
          event.category === this.selectedCategory;
        const matchesSearch =
          !query ||
          `${event.title} ${event.category} ${event.location}`
            .toLowerCase()
            .includes(query);
        return matchesCategory && matchesSearch;
      });
    },
    totalPages(): number {
      return Math.max(1, Math.ceil(this.filteredEvents.length / this.pageSize));
    },
    paginationPages(): number[] {
      return Array.from({ length: this.totalPages }, (_, index) => index + 1);
    },
    paginatedEvents(): EventItem[] {
      const safePage = Math.min(this.currentPage, this.totalPages);
      const start = (safePage - 1) * this.pageSize;
      return this.filteredEvents.slice(start, start + this.pageSize);
    },
    hasActiveFilters(): boolean {
      return Boolean(this.searchTerm.trim() || this.selectedCategory !== "Tous");
    },
  },
  watch: {
    searchTerm() {
      this.resetPagination();
    },
    selectedCategory() {
      this.resetPagination();
    },
  },
  methods: {
    resetPagination() {
      this.currentPage = 1;
    },
    goToPage(page: number) {
      this.currentPage = Math.min(Math.max(page, 1), this.totalPages);
    },
    resetFilters() {
      this.searchTerm = "";
      this.selectedCategory = "Tous";
      this.resetPagination();
    },
  },
  mounted() {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    reveals.forEach((el) => observer.observe(el));
  },
});
</script>

<style scoped>
.events-page {
  background: var(--cream);
  min-height: 100vh;
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
  background: url("/images/hero-2.jpg") center/cover no-repeat;
  filter: brightness(0.34);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 8, 4, 0.96) 0%,
    rgba(10, 8, 4, 0.34) 58%,
    rgba(10, 8, 4, 0.16) 100%
  );
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
  font-family: "Playfair Display", serif;
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
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.75;
}

.events-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 48px;
  padding: 96px 8vw;
  align-items: start;
  background:
    linear-gradient(135deg, rgba(201, 168, 76, 0.08), transparent 42%),
    var(--cream);
}

.events-sidebar {
  position: sticky;
  top: 96px;
  display: grid;
  gap: 20px;
}

.search-box,
.category-box,
.sidebar-card,
.event-card,
.empty-state {
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 6px;
}

.search-box,
.category-box,
.sidebar-card {
  padding: 24px;
}

.search-box label,
.category-box p,
.sidebar-kicker,
.event-category {
  display: block;
  color: var(--gold-dark);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.search-box input {
  width: 100%;
  min-height: 46px;
  border: 1px solid rgba(201, 168, 76, 0.28);
  border-radius: 4px;
  padding: 0 13px;
  outline: none;
  color: var(--text-dark);
}

.category-box {
  display: grid;
  gap: 8px;
}

.category-box button {
  border: 0;
  border-bottom: 1px solid rgba(201, 168, 76, 0.12);
  background: transparent;
  color: var(--text-mid);
  cursor: pointer;
  text-align: left;
  padding: 11px 0;
  font-size: 14px;
}

.category-box button.active,
.category-box button:hover {
  color: var(--gold-dark);
}

.filters-reset {
  min-height: 44px;
  border: 1px solid rgba(10, 10, 10, 0.22);
  border-radius: 4px;
  background: var(--black);
  color: #fff;
  cursor: pointer;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.6px;
  text-transform: uppercase;
}

.filters-reset:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}

.sidebar-card h3,
.empty-state h3 {
  font-family: "Playfair Display", serif;
  font-size: 24px;
  margin-bottom: 10px;
}

.sidebar-card p,
.event-card p,
.empty-state p {
  color: var(--text-mid);
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
  letter-spacing: 1.6px;
  text-transform: uppercase;
}

.events-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
}

.programs-link {
  display: inline-flex;
  flex: 0 0 auto;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border: 1px solid rgba(10, 10, 10, 0.22);
  color: var(--black);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.events-overview {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  margin-bottom: 28px;
  border: 1px solid rgba(201, 168, 76, 0.22);
  background: rgba(201, 168, 76, 0.22);
}

.events-overview article {
  background: rgba(255, 255, 255, 0.68);
  padding: 24px 20px;
}

.events-overview strong {
  display: block;
  color: var(--gold-dark);
  font-family: "Playfair Display", serif;
  font-size: clamp(34px, 3.8vw, 54px);
  line-height: 1;
  margin-bottom: 10px;
}

.events-overview span {
  color: var(--text-mid);
  font-size: 10px;
  letter-spacing: 2px;
  line-height: 1.5;
  text-transform: uppercase;
}

.event-card-date {
  background: var(--black);
  color: var(--gold);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.event-card-date strong {
  font-family: "Playfair Display", serif;
  font-size: 30px;
  line-height: 1;
}

.event-card-date span {
  margin-top: 8px;
  font-size: 10px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.event-card {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 14px;
  padding: 16px;
  min-height: 100%;
}

.event-card-date {
  min-height: 72px;
}

.event-card h3 {
  font-family: "Playfair Display", serif;
  font-size: 19px;
  line-height: 1.15;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.event-card small {
  display: inline-flex;
  margin-top: 12px;
  color: var(--gold-dark);
  font-size: 11px;
}

.event-description {
  margin-top: 10px;
  font-size: 13px;
}

.events-pagination {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 30px;
}

.events-pagination button {
  min-width: 42px;
  min-height: 42px;
  border: 1px solid rgba(201, 168, 76, 0.34);
  background: rgba(255, 255, 255, 0.72);
  color: var(--black);
  cursor: pointer;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.3px;
  padding: 0 14px;
  text-transform: uppercase;
}

.events-pagination button.active {
  background: var(--black);
  border-color: var(--black);
  color: #fff;
}

.events-pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.42;
}

.empty-state {
  padding: 38px;
}

.weekly-programs {
  background: var(--black);
  color: #fff;
  padding: 96px 8vw;
}

.weekly-header {
  margin-bottom: 44px;
}

.weekly-programs .section-eyebrow {
  color: var(--gold);
}

.weekly-programs .section-title {
  color: #fff;
}

.weekly-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.08);
}

.weekly-card {
  background: var(--black);
  border-top: 2px solid transparent;
  padding: 34px 28px;
  min-height: 190px;
}

.weekly-card:hover {
  border-top-color: var(--gold);
  background: #111008;
}

.weekly-card p {
  color: var(--gold);
  font-size: 10px;
  letter-spacing: 2.6px;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.weekly-card h3 {
  font-family: "Playfair Display", serif;
  font-size: 22px;
  line-height: 1.2;
  margin-bottom: 12px;
}

.weekly-card span {
  color: rgba(255, 255, 255, 0.52);
  font-size: 13px;
}

@media (max-width: 980px) {
  .events-layout,
  .events-overview,
  .weekly-grid {
    grid-template-columns: 1fr;
  }

  .events-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .events-heading {
    align-items: start;
    flex-direction: column;
  }

  .events-sidebar {
    position: static;
  }
}

@media (max-width: 1180px) and (min-width: 981px) {
  .events-grid,
  .weekly-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .hero-content {
    padding: 88px 6vw 46px;
  }

  .page-hero h1 {
    font-size: clamp(28px, 7vw, 42px);
  }

  .events-layout {
    padding-left: 6vw;
    padding-right: 6vw;
  }

  .event-card {
    grid-template-columns: 1fr;
  }

  .featured-event,
  .event-card,
  .weekly-card {
    padding: 24px;
  }

  .events-grid {
    grid-template-columns: 1fr;
  }
}
</style>
