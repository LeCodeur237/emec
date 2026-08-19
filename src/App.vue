<template>
  <div id="app">
    <NavigationBar />
    <router-view v-slot="{ Component, route }">
      <transition name="page" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </router-view>
    <FooterSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationBar from './components/NavigationBar.vue';
import FooterSection from './components/FooterSection.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavigationBar,
    FooterSection,
  },
});
</script>
