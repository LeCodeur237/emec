<template>
  <nav :class="{ scrolled: isScrolled, open: isMenuOpen }" class="main-nav" id="mainNav">
    <router-link to="/" class="nav-logo" aria-label="Accueil EMEC">
      <img src="/logo/emec-logo-white.png" alt="EMEC" />
    </router-link>
    <button
      class="nav-toggle"
      type="button"
      :aria-expanded="isMenuOpen"
      aria-controls="primary-navigation"
      aria-label="Ouvrir le menu"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul class="nav-links" id="primary-navigation" :class="{ open: isMenuOpen }" @click="handleNavClick">
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/about">Qui sommes nous ?</router-link></li>
      <li class="nav-group">
        <button class="nav-parent" type="button" aria-haspopup="true">Institution</button>
        <ul class="nav-submenu">
          <li><router-link to="/gouvernance">Gouvernance</router-link></li>
          <li><router-link to="/doctrine">Doctrine</router-link></li>
          <li><router-link to="/finances">Finances</router-link></li>
          <li><router-link to="/documents">Documents officiels</router-link></li>
        </ul>
      </li>
      <li><router-link to="/churches">Nos églises</router-link></li>
      <li><router-link to="/mediatheque">Médiathèque</router-link></li>
      <li><router-link to="/mandate">Notre Mandat</router-link></li>
      <li><router-link to="/events">Événements</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li class="mobile-cta"><a href="https://www.messages.egliseemec.org" target="_blank" rel="noopener">Je veux suivre Christ</a></li>
    </ul>
    <a class="nav-cta" href="https://www.messages.egliseemec.org" target="_blank" rel="noopener">Je veux suivre Christ</a>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'NavigationBar',
  setup() {
    const isScrolled = ref(false);
    const isMenuOpen = ref(false);
    const route = useRoute();

    const updateScroll = () => {
      isScrolled.value = window.scrollY > 60;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const handleNavClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('a')) {
        closeMenu();
      }
    };

    onMounted(() => {
      updateScroll();
      window.addEventListener('scroll', updateScroll, { passive: true });
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', updateScroll);
    });

    watch(
      () => route.fullPath,
      () => closeMenu()
    );

    return { isScrolled, isMenuOpen, closeMenu, toggleMenu, handleNavClick };
  },
});
</script>
