<template>
  <main class="media-page">
    <section class="page-hero media-hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <nav class="breadcrumb" aria-label="Fil d'ariane">
          <router-link to="/">Accueil</router-link>
          <span>›</span>
          <span class="current">Médiathèque</span>
        </nav>
        <h1>Actualités de l'EMEC<br /><em>et ressources pour grandir.</em></h1>
        <p>Retrouvez les nouvelles de l'Église, les annonces importantes, les témoignages et les ressources qui accompagnent la vie de notre communauté.</p>
      </div>
    </section>

    <section class="media-layout">
      <aside class="media-sidebar reveal" aria-label="Filtres de la médiathèque">
        <div class="search-box">
          <label for="media-search">Recherche</label>
          <input id="media-search" v-model="searchTerm" type="search" placeholder="Rechercher une actualité..." />
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

        <div class="sidebar-card books-card">
          <p class="sidebar-kicker">Livres</p>
          <h3>Bibliothèque EMEC</h3>
          <p>Découvrez les livres, enseignements et publications des auteurs de l'EMEC.</p>
          <a href="https://www.library.egliseemec.org" target="_blank" rel="noopener">Accéder aux livres</a>
        </div>
      </aside>

      <div class="media-content">
        <div class="media-heading reveal">
          <div>
            <p class="section-eyebrow">À la une</p>
            <h2 class="section-title">La vie de l'Église en mouvement.</h2>
          </div>
          <a class="library-link" href="https://www.library.egliseemec.org" target="_blank" rel="noopener">
            Voir la bibliothèque
          </a>
        </div>

        <div class="media-overview reveal" aria-label="Résumé de la médiathèque">
          <article>
            <strong>{{ newsItems.length }}</strong>
            <span>contenus disponibles</span>
          </article>
          <article>
            <strong>{{ categories.length - 1 }}</strong>
            <span>catégories</span>
          </article>
          <article>
            <strong>1</strong>
            <span>bibliothèque en ligne</span>
          </article>
        </div>

        <div class="news-grid" v-if="filteredNews.length">
          <article class="news-card reveal" v-for="news in paginatedNews" :key="news.title">
            <img :src="news.image" :alt="news.alt" loading="lazy" />
            <div class="news-body">
              <p class="news-date">{{ news.date }} · {{ news.category }}</p>
              <h3>{{ news.title }}</h3>
              <p>{{ news.description }}</p>
              <a :href="news.link" :target="news.external ? '_blank' : undefined" :rel="news.external ? 'noopener' : undefined">
                {{ news.external ? 'Ouvrir la ressource' : 'Lire l’actualité' }}
              </a>
            </div>
          </article>
        </div>

        <nav
          class="media-pagination"
          v-if="totalPages > 1"
          aria-label="Pagination de la médiathèque"
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

        <div class="empty-state" v-if="!filteredNews.length">
          <h3>Aucun contenu trouvé</h3>
          <p>Essayez une autre recherche ou une autre catégorie.</p>
        </div>

        <section class="library-section reveal">
          <div>
            <p class="section-eyebrow">Livres et ressources</p>
            <h2>Approfondir la Parole et nourrir la foi.</h2>
            <p>
              La bibliothèque EMEC rassemble les livres, publications et ressources
              destinés à accompagner la croissance spirituelle des croyants.
            </p>
          </div>
          <a href="https://www.library.egliseemec.org" target="_blank" rel="noopener">
            Accéder aux livres
          </a>
        </section>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface NewsItem {
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  external?: boolean;
}

export default defineComponent({
  name: 'MediaView',
  data() {
    return { 
      searchTerm: '',
      selectedCategory: 'Toutes',
      currentPage: 1,
      pageSize: 8,
      categories: ['Toutes', 'Actualités', 'Événements', 'Témoignages', 'Enseignements', 'Livres'],
      newsItems: [
        {
          title: "Missions et campagnes d'évangélisation",
          date: 'Calendrier missionnaire',
          category: 'Événements',
          description: "L'EMEC se mobilise pour annoncer l'Évangile, prier avec les familles et servir les villes où Dieu ouvre une porte.",
          image: '/images/home-3.jpg',
          alt: "Mission d'évangélisation EMEC",
          link: '/events',
        },
        {
          title: 'Temps de prière et de restauration',
          date: 'Chaque vendredi',
          category: 'Actualités',
          description: "Un rendez-vous hebdomadaire consacré à l'intercession, à la délivrance et à l'édification spirituelle.",
          image: '/images/home-2.jpg',
          alt: "Temps de prière à l'EMEC", 
          link: '/events',
        },
        {
          title: 'Formation des disciples',
          date: 'Programme régulier',
          category: 'Enseignements',
          description: 'Des enseignements bibliques pour affermir les croyants et les équiper pour leur appel.',
          image: '/images/home-10.jpg', 
          alt: 'Formation biblique EMEC',
          link: '/mandate',
        },
        {
          title: 'La grâce de Dieu en images',
          date: 'Galerie',
          category: 'Témoignages',
          description: "Un aperçu des cultes, rencontres et moments de communion vécus au sein de l'EMEC.",
          image: '/images/home-1.jpg', 
          alt: 'Galerie photo EMEC',
          link: '/#gallery',
        },
        {
          title: 'Livres et publications EMEC',
          date: 'Bibliothèque',
          category: 'Livres',
          description: "Des ressources pour approfondir la Parole et accompagner la croissance spirituelle.",
          image: '/images/mandate-1.jpg', 
          alt: 'Livres et ressources EMEC',
          link: 'https://www.library.egliseemec.org',
          external: true,
        },
      ] as NewsItem[],
    };
  },
  computed: {
    filteredNews(): NewsItem[] {
      const query = this.searchTerm.trim().toLowerCase();
      return this.newsItems.filter((item) => {
        const matchesCategory = this.selectedCategory === 'Toutes' || item.category === this.selectedCategory;
        const matchesSearch = !query || `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
      });
    },
    totalPages(): number {
      return Math.max(1, Math.ceil(this.filteredNews.length / this.pageSize));
    },
    paginationPages(): number[] {
      return Array.from({ length: this.totalPages }, (_, index) => index + 1);
    },
    paginatedNews(): NewsItem[] {
      const safePage = Math.min(this.currentPage, this.totalPages);
      const start = (safePage - 1) * this.pageSize;
      return this.filteredNews.slice(start, start + this.pageSize);
    },
    hasActiveFilters(): boolean {
      return Boolean(this.searchTerm.trim() || this.selectedCategory !== 'Toutes');
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
      this.searchTerm = '';
      this.selectedCategory = 'Toutes';
      this.resetPagination();
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
.media-page {
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
  background: url('/images/home-1.jpg') center/cover no-repeat;
  filter: brightness(0.34);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(7, 26, 51, 0.96) 0%, rgba(7, 26, 51, 0.34) 58%, rgba(7, 26, 51, 0.16) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 96px 5vw 56px;
  max-width: 850px;
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

.page-hero p:not(.current) {
  margin: 0 auto;
  max-width: 660px;
  color: rgba(255, 255, 255, 0.68);
  line-height: 1.75;
}

.media-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 48px;
  padding: 96px 8vw;
  align-items: start;
  background:
    linear-gradient(135deg, rgba(201, 168, 76, 0.08), transparent 42%),
    var(--cream);
}

.media-sidebar {
  position: sticky;
  top: 96px;
  display: grid;
  gap: 20px;
}

.search-box,
.category-box,
.sidebar-card {
  background: rgba(255, 255, 255, 0.76);
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
  font-family: 'Playfair Display', serif;
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

.media-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 34px;
}

.media-heading .section-title {
  max-width: 760px;
}

.library-link {
  display: inline-flex;
  flex: 0 0 auto;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border: 1px solid rgba(7, 26, 51, 0.22);
  color: var(--black);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.media-overview {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  margin-bottom: 28px;
  border: 1px solid rgba(201, 168, 76, 0.22);
  background: rgba(201, 168, 76, 0.22);
}

.media-overview article {
  background: rgba(255, 255, 255, 0.68);
  padding: 24px 20px;
}

.media-overview strong {
  display: block;
  color: var(--gold-dark);
  font-family: 'Playfair Display', serif;
  font-size: clamp(34px, 3.8vw, 54px);
  line-height: 1;
  margin-bottom: 10px;
}

.media-overview span {
  color: var(--text-mid);
  font-size: 10px;
  letter-spacing: 2px;
  line-height: 1.5;
  text-transform: uppercase;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.news-card {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 6px;
  overflow: hidden;
  min-height: 100%;
}

.news-card img {
  width: 100%;
  height: 148px;
  object-fit: cover;
}

.news-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 16px;
}

.news-date {
  color: var(--gold-dark);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.news-body h3 {
  font-family: 'Playfair Display', serif;
  font-size: 19px;
  line-height: 1.15;
  margin-bottom: 12px;
}

.news-body p,
.empty-state p {
  line-height: 1.75;
}

.news-body a {
  display: inline-flex;
  width: fit-content;
  margin-top: auto;
  min-height: 38px;
  align-items: center;
  padding: 0 13px;
  border: 1px solid rgba(201, 168, 76, 0.4);
  color: var(--black);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.media-pagination {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 30px;
}

.media-pagination button {
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

.media-pagination button.active {
  background: var(--black);
  border-color: var(--black);
  color: #fff;
}

.media-pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.42;
}

.library-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 28px;
  align-items: center;
  margin-top: 36px;
  border: 1px solid rgba(201, 168, 76, 0.24);
  background:
    linear-gradient(135deg, rgba(7, 26, 51, 0.9), rgba(7, 26, 51, 0.72)),
    url('/images/mandate-1.jpg') center/cover no-repeat;
  color: #fff;
  padding: 34px;
}

.library-section h2 {
  color: #fff;
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 3vw, 44px);
  line-height: 1.12;
  margin-bottom: 14px;
}

.library-section p:not(.section-eyebrow) {
  max-width: 720px;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.75;
}

.library-section a {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border: 1px solid rgba(201, 168, 76, 0.55);
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.empty-state {
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(201, 168, 76, 0.22);
  border-radius: 6px;
  padding: 38px;
}

.empty-state h3 {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  margin-bottom: 10px;
}

@media (max-width: 980px) {
  .media-layout,
  .media-overview,
  .library-section {
    grid-template-columns: 1fr;
  }

  .news-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .media-heading {
    align-items: start;
    flex-direction: column;
  }

  .media-sidebar {
    position: static;
  }
}

@media (max-width: 1180px) and (min-width: 981px) {
  .news-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .hero-content {
    padding: 88px 6vw 46px;
  }

  .page-hero h1 {
    font-size: clamp(28px, 7vw, 42px);
  }

  .media-layout {
    padding-left: 6vw;
    padding-right: 6vw;
  }

  .news-body {
    padding: 26px;
  }

  .news-grid {
    grid-template-columns: 1fr;
  }

  .news-card img {
    height: 210px;
  }
}
</style>
