<template>
  <main class="churches-page">
    <section class="page-hero churches-hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <nav class="breadcrumb" aria-label="Fil d'ariane">
          <router-link to="/">Accueil</router-link>
          <span>›</span>
          <span class="current">Nos églises</span>
        </nav>
        <h1>Une même famille,<br /><em>plusieurs adresses.</em></h1>
        <p>
          Trouvez une assemblée EMEC, consultez les informations utiles et
          rejoignez une communauté près de vous.
        </p>
      </div>
    </section>

    <section class="churches-layout">
      <aside class="churches-sidebar reveal" aria-label="Filtres des églises">
        <div class="search-box">
          <label for="church-search">Recherche</label>
          <input
            id="church-search"
            v-model="searchQuery"
            type="search"
            placeholder="Ville, assemblée, quartier..."
          />
        </div>

        <div class="category-box">
          <p>Villes</p>
          <button
            v-for="city in cities"
            :key="city"
            type="button"
            :class="{ active: selectedCity === city }"
            @click="selectedCity = city"
          >
            {{ city }}
          </button>
        </div>

        <div class="category-box">
          <p>Localités</p>
          <button
            v-for="locality in localities"
            :key="locality"
            type="button"
            :class="{ active: selectedLocality === locality }"
            @click="selectedLocality = locality"
          >
            {{ locality }}
          </button>
        </div>

        <div class="category-box">
          <p>Secteurs Ecclésiastiques</p>
          <button
            v-for="sector in sectors"
            :key="sector"
            type="button"
            :class="{ active: selectedSector === sector }"
            @click="selectedSector = sector"
          >
            {{ sector }}
          </button>
        </div>

        <div class="category-box">
          <p>Districts Ecclésiastiques</p>
          <button
            v-for="district in districts"
            :key="district"
            type="button"
            :class="{ active: selectedDistrict === district }"
            @click="selectedDistrict = district"
          >
            {{ district }}
          </button>
        </div>

        <div class="category-box">
          <p>Circonscriptions Ecclésiastiques</p>
          <button
            v-for="circumscription in circumscriptions"
            :key="circumscription"
            type="button"
            :class="{ active: selectedCircumscription === circumscription }"
            @click="selectedCircumscription = circumscription"
          >
            {{ circumscription }}
          </button>
        </div>

        <div class="category-box">
          <p>Champs Missionnaires</p>
          <button
            v-for="missionField in missionFields"
            :key="missionField"
            type="button"
            :class="{ active: selectedMissionField === missionField }"
            @click="selectedMissionField = missionField"
          >
            {{ missionField }}
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
          <p class="sidebar-kicker">Besoin d'aide ?</p>
          <h3>Être orienté</h3>
          <p>
            Contactez l'EMEC pour trouver l'assemblée la plus proche ou recevoir
            les horaires actualisés.
          </p>
          <router-link to="/contact">Nous contacter</router-link>
        </div>
      </aside>

      <div class="churches-content">
        <div class="churches-heading reveal">
          <div>
            <p class="section-eyebrow">Nos adresses</p>
            <h2 class="section-title">
              Une famille, plusieurs lieux de communion.
            </h2>
            <p>
              Chaque assemblée EMEC est un espace d'adoration, de formation et
              d'accompagnement pour les familles. Recherchez une ville ou une zone
              pour trouver l'adresse la plus proche.
            </p>
          </div>
        </div>

        <div
          class="churches-stats reveal"
          aria-label="Statistiques des églises EMEC"
        >
          <div>
            <strong>{{ churches.length }}</strong>
            <span>assemblées locales</span>
          </div>
          <div>
            <strong>{{ cityCount }}</strong>
            <span>villes représentées</span>
          </div>
          <div>
            <strong>1</strong>
            <span>famille en Christ</span>
          </div>
        </div>

        <section class="churches-official reveal">
          <div>
            <p class="section-eyebrow">Organisation ecclésiale</p>
            <h2>Chaque assemblée s'inscrit dans une structure officielle.</h2>
            <p>
              Les textes de l'EMEC situent l'Assemblée Locale dans une organisation progressive :
              District Ecclésiastique, Secteur Ecclésiastique, Circonscription Ecclésiastique,
              puis Champ Missionnaire.
            </p>
            <div class="official-levels" aria-label="Niveaux officiels de l'organisation ecclésiale">
              <span v-for="level in officialLevels" :key="level">{{ level }}</span>
            </div>
          </div>
          <router-link :to="{ path: '/documents', query: { doc: 'statuts', search: 'Article 14' } }">Consulter les textes</router-link>
        </section>

        <div class="churches-grid" v-if="filteredChurches.length">
          <article
            class="church-card reveal"
            v-for="church in paginatedChurches"
            :key="church.name"
          >
            <img :src="church.image" :alt="church.alt" loading="lazy" />
            <div>
              <p class="church-status">{{ church.status }}</p>
              <h3>{{ church.name }}</h3>
              <p>{{ church.address }}</p>
              <div class="church-meta">
                <span>{{ church.locality }}</span>
                <span>{{ church.sector }}</span>
                <span>{{ church.district }}</span>
                <span>{{ church.circumscription }}</span>
                <span>{{ church.missionField }}</span>
              </div>
              <router-link :to="`/churches/${church.slug}`">Voir plus</router-link>
            </div>
          </article>
        </div>

        <nav
          class="churches-pagination"
          v-if="totalPages > 1"
          aria-label="Pagination des assemblées"
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

        <div class="empty-state" v-if="!filteredChurches.length">
          <h3>Aucune assemblée trouvée</h3>
          <p>Essayez une autre recherche ou une autre zone.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { churches, type ChurchItem } from "../data/churches";
import { fetchChurches } from "../services/emecApi";

export default defineComponent({
  name: "ChurchesView",
  data() {
    return {
      searchQuery: "",
      selectedCity: "Toutes",
      selectedLocality: "Toutes",
      selectedSector: "Tous",
      selectedDistrict: "Tous",
      selectedCircumscription: "Toutes",
      selectedMissionField: "Tous",
      currentPage: 1,
      pageSize: 8,
      churches,
      officialLevels: [
        "Assemblée Locale",
        "District Ecclésiastique",
        "Secteur Ecclésiastique",
        "Circonscription Ecclésiastique",
        "Champ Missionnaire",
      ],
    };
  },
  computed: {
    cities(): string[] {
      return ["Toutes", ...Array.from(new Set(this.churches.map((church) => church.city))).sort()];
    },
    localities(): string[] {
      return ["Toutes", ...Array.from(new Set(this.churches.map((church) => church.locality))).sort()];
    },
    sectors(): string[] {
      return ["Tous", ...Array.from(new Set(this.churches.map((church) => church.sector))).sort()];
    },
    districts(): string[] {
      return ["Tous", ...Array.from(new Set(this.churches.map((church) => church.district))).sort()];
    },
    circumscriptions(): string[] {
      return ["Toutes", ...Array.from(new Set(this.churches.map((church) => church.circumscription))).sort()];
    },
    missionFields(): string[] {
      return ["Tous", ...Array.from(new Set(this.churches.map((church) => church.missionField))).sort()];
    },
    hasActiveFilters(): boolean {
      return Boolean(
        this.searchQuery.trim() ||
          this.selectedCity !== "Toutes" ||
          this.selectedLocality !== "Toutes" ||
          this.selectedSector !== "Tous" ||
          this.selectedDistrict !== "Tous" ||
          this.selectedCircumscription !== "Toutes" ||
          this.selectedMissionField !== "Tous",
      );
    },
    cityCount(): number {
      return new Set(this.churches.map((church) => church.city)).size;
    },
    filteredChurches(): ChurchItem[] {
      const query = this.searchQuery.trim().toLowerCase();
      return this.churches.filter((church) => {
        const matchesCity =
          this.selectedCity === "Toutes" || church.city === this.selectedCity;
        const matchesLocality =
          this.selectedLocality === "Toutes" || church.locality === this.selectedLocality;
        const matchesSector =
          this.selectedSector === "Tous" || church.sector === this.selectedSector;
        const matchesDistrict =
          this.selectedDistrict === "Tous" || church.district === this.selectedDistrict;
        const matchesCircumscription =
          this.selectedCircumscription === "Toutes" ||
          church.circumscription === this.selectedCircumscription;
        const matchesMissionField =
          this.selectedMissionField === "Tous" || church.missionField === this.selectedMissionField;
        const matchesSearch =
          !query ||
          `${church.name} ${church.baptismName} ${church.city} ${church.neighborhood} ${church.locality} ${church.region} ${church.address} ${church.contact} ${church.sector} ${church.district} ${church.circumscription} ${church.missionField}`
            .toLowerCase()
            .includes(query);
        return matchesCity && matchesLocality && matchesSector && matchesDistrict && matchesCircumscription && matchesMissionField && matchesSearch;
      });
    },
    totalPages(): number {
      return Math.max(1, Math.ceil(this.filteredChurches.length / this.pageSize));
    },
    paginationPages(): number[] {
      return Array.from({ length: this.totalPages }, (_, index) => index + 1);
    },
    paginatedChurches(): ChurchItem[] {
      const safePage = Math.min(this.currentPage, this.totalPages);
      const start = (safePage - 1) * this.pageSize;
      return this.filteredChurches.slice(start, start + this.pageSize);
    },
  },
  watch: {
    searchQuery() {
      this.resetPagination();
    },
    selectedCity() {
      this.resetPagination();
    },
    selectedLocality() {
      this.resetPagination();
    },
    selectedSector() {
      this.resetPagination();
    },
    selectedDistrict() {
      this.resetPagination();
    },
    selectedCircumscription() {
      this.resetPagination();
    },
    selectedMissionField() {
      this.resetPagination();
    },
  },
  methods: {
    async loadChurches() {
      try {
        const apiChurches = await fetchChurches();
        if (apiChurches.length) {
          this.churches = apiChurches;
        }
      } catch {
        this.churches = churches;
      }
    },
    initReveal() {
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
    resetPagination() {
      this.currentPage = 1;
    },
    goToPage(page: number) {
      this.currentPage = Math.min(Math.max(page, 1), this.totalPages);
    },
    resetFilters() {
      this.searchQuery = "";
      this.selectedCity = "Toutes";
      this.selectedLocality = "Toutes";
      this.selectedSector = "Tous";
      this.selectedDistrict = "Tous";
      this.selectedCircumscription = "Toutes";
      this.selectedMissionField = "Tous";
      this.resetPagination();
    },
  },
  mounted() {
    this.loadChurches();
    this.initReveal();
  },
});
</script>

<style scoped>
.churches-page {
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
  background: url("/images/home-3.jpg") center/cover no-repeat;
  filter: brightness(0.34);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(7, 26, 51, 0.96) 0%,
    rgba(7, 26, 51, 0.34) 58%,
    rgba(7, 26, 51, 0.16) 100%
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
  font-style: italic;
  color: var(--gold-light);
}

.page-hero p {
  margin: 0 auto;
  max-width: 620px;
  color: rgba(255, 255, 255, 0.68);
  line-height: 1.75;
}

.churches-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 48px;
  padding: 96px 8vw;
  align-items: start;
  background:
    linear-gradient(135deg, rgba(201, 168, 76, 0.1), transparent 44%),
    var(--cream);
}

.churches-sidebar {
  position: sticky;
  top: 96px;
  display: grid;
  gap: 20px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  padding-right: 4px;
}

.search-box,
.category-box,
.sidebar-card {
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 6px;
  padding: 24px;
}

.search-box label,
.category-box p,
.sidebar-kicker {
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
}

.search-box input:focus {
  border-color: var(--gold);
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
  border: 1px solid rgba(7, 26, 51, 0.22);
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

.sidebar-card h3 {
  font-family: "Playfair Display", serif;
  font-size: 23px;
  margin-bottom: 10px;
}

.sidebar-card p:not(.sidebar-kicker) {
  color: var(--text-mid);
  line-height: 1.75;
}

.sidebar-card a {
  display: inline-flex;
  margin-top: 18px;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  background: var(--black);
  color: #fff;
  border: 1px solid rgba(201, 168, 76, 0.36);
  font-size: 11px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
}

.churches-heading {
  margin-bottom: 36px;
}

.churches-heading p:not(.section-eyebrow) {
  max-width: 760px;
  margin-top: 18px;
  color: var(--text-mid);
  line-height: 1.85;
}

.churches-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1px;
  background: rgba(201, 168, 76, 0.22);
  border: 1px solid rgba(201, 168, 76, 0.22);
  margin-bottom: 34px;
}

.churches-stats div {
  background: var(--cream);
  padding: 28px 20px;
}

.churches-stats strong {
  display: block;
  font-family: "Playfair Display", serif;
  font-size: clamp(38px, 4vw, 60px);
  line-height: 1;
  color: var(--gold-dark);
  margin-bottom: 10px;
}

.churches-stats span {
  color: var(--text-mid);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1.6;
}

.churches-official {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 28px;
  align-items: end;
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.72);
  padding: 28px;
  margin-bottom: 34px;
}

.churches-official h2 {
  font-family: "Playfair Display", serif;
  font-size: clamp(26px, 3vw, 38px);
  line-height: 1.12;
  color: var(--text-dark);
  margin-bottom: 12px;
}

.churches-official p:not(.section-eyebrow) {
  max-width: 780px;
  color: var(--text-mid);
  line-height: 1.8;
}

.official-levels {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.official-levels span {
  border: 1px solid rgba(201, 168, 76, 0.26);
  color: var(--gold-dark);
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 1.2px;
  line-height: 1.4;
  padding: 7px 8px;
  text-transform: uppercase;
}

.churches-official a {
  display: inline-flex;
  justify-content: center;
  border: 1px solid rgba(7, 26, 51, 0.24);
  border-radius: 4px;
  padding: 14px 18px;
  color: var(--black);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  white-space: nowrap;
}

.churches-official a:hover {
  border-color: var(--gold);
  color: var(--gold-dark);
}

.church-status {
  color: var(--gold-dark);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.church-card p,
.empty-state p {
  color: var(--text-mid);
  line-height: 1.75;
}

.church-card a {
  display: inline-flex;
  width: fit-content;
  min-height: 36px;
  align-items: center;
  padding: 0 12px;
  color: var(--black);
  border: 1px solid rgba(201, 168, 76, 0.4);
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.churches-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.church-card {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 6px;
  padding: 0;
  overflow: hidden;
}

.church-card img {
  width: 100%;
  height: 148px;
  object-fit: cover;
  display: block;
}

.church-card > div {
  padding: 16px;
}

.church-card h3 {
  font-family: "Playfair Display", serif;
  font-size: 19px;
  margin: 8px 0 8px;
  line-height: 1.15;
}

.church-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}

.church-meta span {
  border: 1px solid rgba(201, 168, 76, 0.24);
  color: var(--gold-dark);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 1.4;
  padding: 5px 6px;
  text-transform: uppercase;
}

.church-card a {
  margin-top: 14px;
}

.churches-pagination {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 34px;
}

.churches-pagination button {
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

.churches-pagination button.active {
  background: var(--black);
  border-color: var(--black);
  color: #fff;
}

.churches-pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.42;
}

.empty-state {
  background: #fff;
  border: 1px solid rgba(201, 168, 76, 0.16);
  border-radius: 8px;
  padding: 38px;
}

.empty-state h3 {
  font-family: "Playfair Display", serif;
  font-size: 24px;
  margin-bottom: 10px;
}

@media (max-width: 980px) {
  .churches-layout {
    grid-template-columns: 1fr;
  }

  .churches-official {
    grid-template-columns: 1fr;
  }

  .churches-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .churches-sidebar {
    position: static;
    max-height: none;
    overflow: visible;
    padding-right: 0;
  }
}

@media (max-width: 1180px) and (min-width: 981px) {
  .churches-grid {
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

  .churches-layout {
    padding-left: 6vw;
    padding-right: 6vw;
  }

  .churches-official a {
    width: 100%;
  }

  .churches-stats {
    grid-template-columns: 1fr;
  }

  .churches-grid {
    grid-template-columns: 1fr;
  }

  .church-card img {
    height: 210px;
    min-height: 0;
  }
}
</style>
