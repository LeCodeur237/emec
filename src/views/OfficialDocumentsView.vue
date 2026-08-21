<template>
  <main>
    <section class="documents-hero">
      <div class="documents-hero-bg" aria-hidden="true"></div>
      <div class="documents-hero-content">
        <p class="section-eyebrow">Textes officiels</p>
        <h1>Les fondements administratifs de l'EMEC</h1>
        <p>
          Retrouvez les textes officiels de l'Église Messianique Évangélique du Cameroun,
          les documents déjà consultables par article et les références complémentaires à publier après validation.
        </p>
      </div>
    </section>

    <section class="documents-page">
      <div class="documents-intro">
        <p class="section-eyebrow">Base documentaire</p>
        <h2>Consulter les documents de référence</h2>
        <p>
          Les textes principaux sont disponibles en lecture en ligne. Les documents complémentaires analysés sont présentés
          sous forme de résumés publics afin de ne pas exposer de fichier interne sans validation préalable.
        </p>
      </div>


      <section class="complementary-documents">
        <div class="documents-section-heading">
          <p class="section-eyebrow">Documents complémentaires</p>
          <h2>Références analysées à intégrer progressivement</h2>
          <p>
            Ces documents enrichissent le contenu du site. Leur publication complète doit être validée avant
            téléchargement public ; pour le moment, seuls les résumés utiles aux visiteurs sont affichés.
          </p>
        </div>
        <div class="complementary-grid">
          <article v-for="document in complementaryDocuments" :key="document.title" class="complementary-card">
            <div class="complementary-card-head">
              <span>{{ document.type }}</span>
              <strong>{{ document.status }}</strong>
            </div>
            <h3>{{ document.title }}</h3>
            <p>{{ document.description }}</p>
            <ul>
              <li v-for="item in document.highlights" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <div class="documents-section-heading reader-documents-heading">
        <p class="section-eyebrow">Lecture en ligne</p>
        <h2>Documents déjà structurés par article</h2>
        <p>Ces textes sont disponibles avec recherche, lecture article par article et téléchargement des PDF sources.</p>
      </div>

      <div class="documents-grid">
        <button
          class="document-card"
          type="button"
          v-for="document in documents"
          :key="document.slug"
          :class="{ active: document.slug === activeMeta.slug }"
          @click="selectDocument(document.slug)"
        >
          <div class="document-card-head">
            <span>{{ document.year }}</span>
            <strong>{{ document.pages }} pages · {{ document.articleCount }} articles</strong>
          </div>
          <h3>{{ document.title }}</h3>
          <p>{{ document.description }}</p>
          <ul>
            <li v-for="item in document.highlights" :key="item">{{ item }}</li>
          </ul>
          <span class="document-select">Lire ce document</span>
        </button>
      </div>

      <div class="reader-panel">
        <aside class="reader-sidebar">
          <div class="reader-sidebar-head">
            <p class="section-eyebrow">Lecture</p>
            <h2>{{ activeMeta.title }}</h2>
            <p>{{ activeMeta.year }} · {{ activeMeta.pages }} pages · {{ activeMeta.articleCount }} articles</p>
          </div>

          <label class="reader-search" for="document-search">
            <span>Rechercher</span>
            <input
              id="document-search"
              v-model="searchQuery"
              type="search"
              placeholder="Article, organe, budget, membre..."
            />
          </label>

          <nav class="document-tabs" aria-label="Documents officiels">
            <button
              type="button"
              v-for="document in documents"
              :key="`tab-${document.slug}`"
              :class="{ active: document.slug === activeMeta.slug }"
              @click="selectDocument(document.slug)"
            >
              {{ document.title }}
            </button>
          </nav>

          <div class="reader-downloads">
            <a class="btn-primary" :href="activeMeta.file" target="_blank" rel="noopener noreferrer">Ouvrir le PDF</a>
            <a class="btn-outline dark" :href="activeMeta.file" download>Télécharger</a>
          </div>

          <div class="reader-summary">
            <span>{{ filteredBlocks.length }} résultats affichés</span>
            <strong v-if="searchQuery.trim()">Recherche : "{{ searchQuery.trim() }}"</strong>
          </div>
        </aside>

        <div class="reader-content">
          <div class="reader-empty" v-if="isLoading">
            <p class="section-eyebrow">Chargement</p>
            <h3>Lecture du document...</h3>
            <p>Le contenu complet est chargé uniquement lorsque vous ouvrez ce document.</p>
          </div>

          <div class="reader-empty" v-else-if="!filteredBlocks.length">
            <p class="section-eyebrow">Aucun résultat</p>
            <h3>Aucun contenu trouvé</h3>
            <p>Essayez avec un autre mot-clé ou consultez le document complet.</p>
          </div>

          <template v-else>
            <article
              v-for="(block, index) in filteredBlocks"
              :key="`${activeMeta.slug}-${block.type}-${block.number || index}`"
              :class="['reader-block', `reader-block-${block.type}`]"
            >
              <p v-if="block.type === 'title'" class="reader-title">{{ block.title }}</p>
              <h3 v-else-if="block.type === 'chapter'">{{ block.title }}</h3>
              <h4 v-else-if="block.type === 'section'">{{ block.title }}</h4>
              <h4 v-else-if="block.type === 'annex'">{{ block.title }}</h4>
              <p v-else-if="block.type === 'paragraph'">{{ block.text }}</p>
              <div v-else-if="block.type === 'article'" class="reader-article">
                <span>Article {{ block.number }}</span>
                <p>{{ cleanArticleText(block) }}</p>
              </div>
            </article>
          </template>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  findOfficialDocumentMetaBySlug,
  isOfficialDocumentSlug,
  loadOfficialDocument,
  officialDocumentsIndex,
  type OfficialDocument,
  type OfficialDocumentBlock,
} from '../data/officialDocuments';

interface ComplementaryDocumentMeta {
  title: string;
  type: string;
  status: string;
  description: string;
  highlights: string[];
}

const complementaryDocuments: ComplementaryDocumentMeta[] = [
  {
    title: 'Document stratégique révisé Août 2024',
    type: 'Vision 2043',
    status: 'Résumé public',
    description: "Document de référence pour la vision 2023-2043 : rayonnement spirituel, développement social et matériel, ressources humaines et gouvernance.",
    highlights: ['Vision 2043', 'Axes stratégiques', 'Phases 2023-2043', 'Suivi-évaluation'],
  },
  {
    title: 'Règlement Intérieur de la Jeunesse Pour Christ',
    type: 'Groupe d\'action',
    status: 'Publication à valider',
    description: "Texte d'encadrement de la JPC : mission, devise, activités, organisation et accompagnement des jeunes chrétiens.",
    highlights: ['Sauvé pour servir', 'Encadrement des jeunes', 'Activités de contact', 'Production éthique'],
  },
  {
    title: 'Règlement Intérieur de l’ECODIM',
    type: 'Groupe d\'action',
    status: 'Publication à valider',
    description: "Document relatif à l'encadrement des enfants de 3 à 15 ans, à l'instruction biblique et au développement des talents.",
    highlights: ['Enfants de 3 à 15 ans', 'Instruction biblique', 'Camps et festivals', 'Moniteurs'],
  },
  {
    title: 'Règlement Intérieur du GNFCA',
    type: 'Groupe d\'action',
    status: 'Publication à valider',
    description: "Texte d'organisation des Femmes Chrétiennes Actives : évangélisation, famille, bonnes œuvres, formation et développement.",
    highlights: ['Salut · Soumission · Service', 'Bonnes œuvres', 'AGR', 'Famille'],
  },
  {
    title: 'Règlement Intérieur du Groupe d’Hommes',
    type: 'Groupe d\'action',
    status: 'Publication à valider',
    description: "Document utile pour enrichir la présentation des hommes chrétiens actifs, avec prudence car il concerne un cadre local spécifique.",
    highlights: ['Encadrement des hommes', 'Solidarité', 'Fraternité', 'Développement'],
  },
];

export default defineComponent({
  name: 'OfficialDocumentsView',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const defaultSlug = officialDocumentsIndex[0]?.slug || 'statuts';
    const routeSlug = typeof route.query.doc === 'string' ? route.query.doc : defaultSlug;
    const activeSlug = ref(isOfficialDocumentSlug(routeSlug) ? routeSlug : defaultSlug);
    const searchQuery = ref('');
    const activeDocument = ref<OfficialDocument | null>(null);
    const isLoading = ref(false);
    const loadRequestId = ref(0);

    if (typeof route.query.search === 'string') {
      searchQuery.value = route.query.search;
    }

    const activeMeta = computed(() => findOfficialDocumentMetaBySlug(activeSlug.value) || officialDocumentsIndex[0]);

    const filteredBlocks = computed(() => {
      const query = searchQuery.value.trim().toLowerCase();
      const blocks = activeDocument.value?.blocks || [];

      if (!query) {
        return blocks;
      }

      return blocks.filter((block) => {
        const content = [block.title, block.text, block.number ? `article ${block.number}` : '']
          .filter(Boolean)
          .join(' ')
          .toLowerCase();

        return content.includes(query);
      });
    });

    const selectDocument = (slug: string) => {
      activeSlug.value = slug;
      searchQuery.value = '';
      router.replace({ path: '/documents', query: { doc: slug } });
    };

    const loadActiveDocument = async (slug: string) => {
      const requestId = loadRequestId.value + 1;
      loadRequestId.value = requestId;
      isLoading.value = true;

      const document = await loadOfficialDocument(slug);
      if (loadRequestId.value === requestId) {
        activeDocument.value = document;
        isLoading.value = false;
      }
    };

    const cleanArticleText = (block: OfficialDocumentBlock) => {
      if (!block.text || !block.number) return block.text || '';
      return block.text.replace(new RegExp(`^Article\\s*${block.number}\\s*[:.]?\\s*`, 'i'), '').trim();
    };

    watch(
      () => route.query,
      (query) => {
        const nextSlug = typeof query.doc === 'string' && isOfficialDocumentSlug(query.doc) ? query.doc : defaultSlug;
        activeSlug.value = nextSlug;
        searchQuery.value = typeof query.search === 'string' ? query.search : '';
      }
    );

    watch(activeSlug, (slug) => loadActiveDocument(slug), { immediate: true });

    return {
      documents: officialDocumentsIndex,
      complementaryDocuments,
      activeMeta,
      activeDocument,
      filteredBlocks,
      searchQuery,
      isLoading,
      selectDocument,
      cleanArticleText,
    };
  },
});
</script>

<style scoped>
.documents-hero {
  position: relative;
  min-height: 540px;
  display: flex;
  align-items: flex-end;
  padding: 150px 8vw 82px;
  overflow: hidden;
  background: var(--black);
}

.documents-hero-bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(7, 26, 51, 0.92), rgba(7, 26, 51, 0.52)),
    url('/images/home-10.jpg') center / cover;
  filter: brightness(0.78);
}

.documents-hero-content {
  position: relative;
  z-index: 1;
  max-width: 820px;
  color: #fff;
}

.section-eyebrow {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 16px;
}

.documents-hero h1,
.documents-intro h2,
.document-card h3,
.reader-sidebar h2,
.reader-content h3,
.reader-empty h3 {
  font-family: 'Playfair Display', serif;
}

.documents-hero h1 {
  font-size: clamp(38px, 5.5vw, 72px);
  line-height: 1;
  margin-bottom: 24px;
}

.documents-hero p:not(.section-eyebrow) {
  max-width: 720px;
  font-size: 18px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.76);
}

.documents-page {
  padding: 96px 8vw 112px;
  background: var(--cream);
}

.documents-intro {
  max-width: 820px;
  margin-bottom: 44px;
}

.documents-intro h2 {
  font-size: clamp(32px, 4vw, 56px);
  line-height: 1.08;
  color: var(--text-dark);
  margin-bottom: 18px;
}

.documents-intro p:not(.section-eyebrow) {
  font-size: 16px;
  line-height: 1.85;
  color: var(--text-mid);
}

.documents-section-heading {
  max-width: 820px;
  margin-bottom: 30px;
}

.documents-section-heading h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 3vw, 44px);
  line-height: 1.12;
  color: var(--text-dark);
  margin-bottom: 14px;
}

.documents-section-heading p:not(.section-eyebrow) {
  color: var(--text-mid);
  line-height: 1.82;
}

.complementary-documents {
  margin: 0 0 58px;
  padding: clamp(28px, 4vw, 46px);
  border: 1px solid rgba(7, 26, 51, 0.08);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.46);
  box-sizing: border-box;
}

.complementary-documents .documents-section-heading {
  margin-bottom: 28px;
}

.complementary-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.complementary-card {
  min-width: 0;
  border: 1px solid rgba(7, 26, 51, 0.08);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.72);
  padding: clamp(20px, 2vw, 26px);
  box-sizing: border-box;
}

.complementary-card-head {
  display: grid;
  gap: 8px;
  margin-bottom: 18px;
}

.complementary-card-head span,
.complementary-card-head strong {
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1.4px;
  text-transform: uppercase;
}

.complementary-card-head span {
  color: var(--gold-dark);
}

.complementary-card-head strong {
  color: var(--text-muted);
}

.complementary-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  line-height: 1.16;
  color: var(--text-dark);
  margin-bottom: 12px;
  overflow-wrap: anywhere;
}

.complementary-card p {
  color: var(--text-mid);
  font-size: 14px;
  line-height: 1.75;
  margin-bottom: 18px;
}

.complementary-card ul {
  display: grid;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.complementary-card li {
  color: var(--text-mid);
  font-size: 12px;
  line-height: 1.5;
}

.reader-documents-heading {
  margin-top: 12px;
}

.documents-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin-bottom: 52px;
}

.document-card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  text-align: left;
  border: 1px solid rgba(201, 168, 76, 0.24);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.68);
  padding: 28px;
  color: inherit;
  cursor: pointer;
  transition: border-color 0.25s ease, background 0.25s ease;
}

.document-card.active,
.document-card:hover {
  border-color: rgba(201, 168, 76, 0.72);
  background: #fff;
}

.document-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 28px;
}

.document-card-head span,
.document-card-head strong,
.document-select {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.8px;
  text-transform: uppercase;
}

.document-card-head span,
.document-select {
  color: var(--gold-dark);
}

.document-card-head strong {
  color: var(--text-muted);
  text-align: right;
}

.document-card h3 {
  font-size: 28px;
  line-height: 1.12;
  color: var(--text-dark);
  margin-bottom: 16px;
}

.document-card p {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-mid);
  margin-bottom: 22px;
}

.document-card ul {
  display: grid;
  gap: 10px;
  list-style: none;
  margin: 0 0 28px;
  padding: 0;
}

.document-card li {
  position: relative;
  padding-left: 18px;
  font-size: 13px;
  line-height: 1.55;
  color: var(--text-mid);
}

.document-card li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 7px;
  height: 7px;
  background: var(--gold);
  transform: rotate(45deg);
}

.document-select {
  margin-top: auto;
}

.reader-panel {
  display: grid;
  grid-template-columns: minmax(280px, 0.34fr) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
}

.reader-sidebar {
  position: sticky;
  top: 92px;
  border: 1px solid rgba(201, 168, 76, 0.24);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.72);
  padding: 26px;
}

.reader-sidebar-head {
  margin-bottom: 24px;
}

.reader-sidebar h2 {
  font-size: 28px;
  line-height: 1.12;
  color: var(--text-dark);
  margin-bottom: 10px;
}

.reader-sidebar p:not(.section-eyebrow) {
  font-size: 13px;
  line-height: 1.6;
  color: var(--text-muted);
}

.reader-search {
  display: grid;
  gap: 10px;
  margin-bottom: 22px;
}

.reader-search span {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold-dark);
}

.reader-search input {
  width: 100%;
  min-height: 48px;
  border: 1px solid rgba(7, 26, 51, 0.14);
  border-radius: 4px;
  background: #fff;
  color: var(--text-dark);
  padding: 0 14px;
  outline: none;
}

.reader-search input:focus {
  border-color: var(--gold);
}

.document-tabs {
  display: grid;
  gap: 8px;
  margin-bottom: 22px;
}

.document-tabs button {
  width: 100%;
  border: 1px solid rgba(7, 26, 51, 0.12);
  border-radius: 4px;
  background: transparent;
  padding: 12px 14px;
  text-align: left;
  color: var(--text-mid);
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
}

.document-tabs button.active,
.document-tabs button:hover {
  border-color: var(--gold);
  color: var(--black);
  background: rgba(201, 168, 76, 0.1);
}

.reader-downloads {
  display: grid;
  gap: 10px;
  margin-bottom: 22px;
}

.reader-downloads .btn-primary,
.reader-downloads .btn-outline {
  width: 100%;
  justify-content: center;
}

.btn-outline.dark {
  color: var(--black);
  border-color: rgba(7, 26, 51, 0.26);
}

.reader-summary {
  display: grid;
  gap: 6px;
  border-top: 1px solid rgba(7, 26, 51, 0.1);
  padding-top: 18px;
}

.reader-summary span,
.reader-summary strong {
  font-size: 12px;
  line-height: 1.5;
  color: var(--text-muted);
}

.reader-content {
  display: grid;
  gap: 14px;
}

.reader-block {
  border: 1px solid rgba(201, 168, 76, 0.18);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.72);
  padding: 22px;
}

.reader-block-title {
  background: var(--black);
  color: #fff;
  border-color: var(--black);
}

.reader-title {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold-light);
}

.reader-block-chapter {
  background: rgba(201, 168, 76, 0.13);
}

.reader-content h3 {
  font-size: clamp(24px, 3vw, 38px);
  line-height: 1.12;
  color: var(--text-dark);
}

.reader-content h4 {
  font-size: 16px;
  line-height: 1.5;
  color: var(--gold-dark);
  text-transform: uppercase;
  letter-spacing: 1.4px;
}

.reader-block p,
.reader-article p {
  font-size: 15px;
  line-height: 1.85;
  color: var(--text-mid);
}

.reader-article {
  display: grid;
  gap: 12px;
}

.reader-article span {
  width: max-content;
  border-radius: 4px;
  background: var(--black);
  color: var(--gold);
  padding: 7px 10px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.6px;
  text-transform: uppercase;
}

.reader-empty {
  border: 1px solid rgba(201, 168, 76, 0.24);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.72);
  padding: 32px;
}

.reader-empty h3 {
  font-size: 30px;
  color: var(--text-dark);
  margin-bottom: 12px;
}

.reader-empty p:not(.section-eyebrow) {
  font-size: 15px;
  line-height: 1.75;
  color: var(--text-mid);
}

@media (max-width: 1100px) {
  .complementary-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .documents-grid {
    grid-template-columns: 1fr;
  }

  .reader-panel {
    grid-template-columns: 1fr;
  }

  .reader-sidebar {
    position: static;
  }
}
@media (max-width: 620px) {
  .complementary-documents {
    padding: 22px 16px;
    margin-bottom: 44px;
  }

  .complementary-grid {
    grid-template-columns: 1fr;
  }

  .complementary-card {
    padding: 20px;
  }

  .documents-hero {
    min-height: 500px;
    padding: 130px 6vw 64px;
  }

  .documents-page {
    padding: 72px 6vw 90px;
  }

  .document-card,
  .reader-sidebar,
  .reader-block,
  .reader-empty {
    padding: 22px;
  }

  .document-card-head {
    align-items: flex-start;
    flex-direction: column;
  }
}

/* Harmonisation visuelle des cartes */
.complementary-card,
.document-card {
  min-width: 0;
  min-height: 100%;
  box-sizing: border-box;
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
}

.complementary-card:hover,
.document-card:hover {
  transform: translateY(-3px);
}
</style>
