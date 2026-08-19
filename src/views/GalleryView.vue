<template>
  <main>
    <section class="gallery-hero">
      <div class="gallery-hero-bg" aria-hidden="true">
        <img src="/images/home-1.jpg" alt="" />
      </div>
      <div class="gallery-hero-content">
        <p class="section-eyebrow">Galerie</p>
        <h1>La vie de l'EMEC en images</h1>
        <p>
          Retrouvez ici les cultes, les temps de prière, les programmes, les groupes,
          les actions sociales et les moments forts de la famille EMEC.
        </p>
      </div>
    </section>

    <section class="gallery-page">
      <div class="gallery-page-header">
        <p class="section-eyebrow">Toutes les images</p>
        <h2>Parcourir la galerie</h2>
      </div>

      <div class="gallery-grid">
        <button
          class="gallery-card"
          type="button"
          v-for="(image, index) in images"
          :key="image.src"
          @click="openImage(index)"
        >
          <img :src="image.src" :alt="image.alt" :style="{ objectPosition: image.position || 'center center' }" loading="lazy" />
          <span>{{ image.category }}</span>
        </button>
      </div>
    </section>

    <div class="image-viewer" v-if="selectedImage" role="dialog" aria-modal="true" :aria-label="selectedImage.alt">
      <button class="viewer-backdrop" type="button" aria-label="Fermer" @click="closeViewer"></button>
      <div class="viewer-panel">
        <button class="viewer-close" type="button" aria-label="Fermer" @click="closeViewer">×</button>
        <button class="viewer-nav viewer-prev" type="button" aria-label="Image précédente" @click="showPrevious">‹</button>
        <img :src="selectedImage.src" :alt="selectedImage.alt" />
        <button class="viewer-nav viewer-next" type="button" aria-label="Image suivante" @click="showNext">›</button>
        <div>
          <span>{{ selectedImage.category }}</span>
          <h2>{{ selectedImage.alt }}</h2>
          <p>{{ selectedIndex + 1 }} / {{ images.length }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { galleryImages, type GalleryImage } from '../data/gallery';

export default defineComponent({
  name: 'GalleryView',
  setup() {
    const selectedIndex = ref<number | null>(null);
    const selectedImage = computed<GalleryImage | null>(() =>
      selectedIndex.value === null ? null : galleryImages[selectedIndex.value]
    );

    const openImage = (index: number) => {
      selectedIndex.value = index;
    };

    const closeViewer = () => {
      selectedIndex.value = null;
    };

    const showPrevious = () => {
      if (selectedIndex.value === null) return;
      selectedIndex.value = (selectedIndex.value - 1 + galleryImages.length) % galleryImages.length;
    };

    const showNext = () => {
      if (selectedIndex.value === null) return;
      selectedIndex.value = (selectedIndex.value + 1) % galleryImages.length;
    };

    return {
      images: galleryImages,
      selectedImage,
      selectedIndex,
      openImage,
      closeViewer,
      showPrevious,
      showNext,
    };
  },
});
</script>

<style scoped>
.gallery-hero {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: flex-end;
  padding: 150px 8vw 86px;
  overflow: hidden;
  background: var(--black);
}

.gallery-hero-bg {
  position: absolute;
  inset: 0;
}

.gallery-hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.35);
}

.gallery-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(7, 26, 51, 0.88), rgba(7, 26, 51, 0.36));
}

.gallery-hero-content {
  position: relative;
  z-index: 1;
  max-width: 780px;
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

.gallery-hero h1,
.gallery-page-header h2 {
  font-family: 'Playfair Display', serif;
}

.gallery-hero h1 {
  font-size: clamp(42px, 6vw, 78px);
  line-height: 1;
  margin-bottom: 24px;
}

.gallery-hero p:not(.section-eyebrow) {
  max-width: 660px;
  font-size: 18px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.76);
}

.gallery-page {
  padding: 92px 8vw 110px;
  background: var(--cream);
}

.gallery-page-header {
  margin-bottom: 40px;
}

.gallery-page-header h2 {
  font-size: clamp(34px, 4vw, 58px);
  line-height: 1.08;
  color: var(--text-dark);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.gallery-card {
  position: relative;
  border: 1px solid rgba(201, 168, 76, 0.24);
  background: #fff;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 1 / 0.72;
}

.gallery-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.45s ease;
}

.gallery-card:hover img {
  transform: scale(1.04);
}

.gallery-card span {
  position: absolute;
  left: 14px;
  bottom: 14px;
  padding: 8px 10px;
  background: rgba(7, 26, 51, 0.78);
  color: var(--gold-light);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.6px;
  text-transform: uppercase;
}

.image-viewer {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 28px;
}

.viewer-backdrop {
  position: absolute;
  inset: 0;
  border: 0;
  background: rgba(7, 26, 51, 0.82);
  cursor: pointer;
}

.viewer-panel {
  position: relative;
  z-index: 1;
  width: min(1120px, 100%);
  max-height: calc(100vh - 56px);
  background: var(--black);
  color: #fff;
  overflow: auto;
}

.viewer-panel img {
  width: 100%;
  max-height: 72vh;
  object-fit: contain;
  display: block;
  background: #050505;
}

.viewer-panel div {
  padding: 24px 28px 28px;
}

.viewer-panel span {
  display: block;
  margin-bottom: 8px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--gold);
}

.viewer-panel h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(24px, 3vw, 38px);
}

.viewer-panel p {
  margin-top: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.58);
}

.viewer-close {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  width: 40px;
  height: 40px;
  border: 0;
  background: var(--gold);
  color: var(--black);
  font-size: 26px;
  cursor: pointer;
}

.viewer-nav {
  position: absolute;
  top: 42%;
  z-index: 2;
  width: 46px;
  height: 58px;
  border: 0;
  background: rgba(201, 168, 76, 0.92);
  color: var(--black);
  font-size: 42px;
  line-height: 1;
  cursor: pointer;
}

.viewer-prev {
  left: 14px;
}

.viewer-next {
  right: 14px;
}

@media (max-width: 1180px) and (min-width: 901px) {
  .gallery-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 540px) {
  .gallery-hero {
    min-height: 500px;
    padding: 130px 6vw 64px;
  }

  .gallery-page {
    padding: 72px 6vw 90px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .image-viewer {
    padding: 14px;
  }

  .viewer-nav {
    top: auto;
    bottom: 88px;
    width: 42px;
    height: 48px;
    font-size: 34px;
  }
}
</style>
