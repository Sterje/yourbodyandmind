<template>
  <div v-if="isMobile" class="mobile-view">
    <div class="mobile-container">
      <NavbarMobile />
      <StartPage />
      <FooterMobile />
    </div>
  </div>
  <div v-else class="desktop-view">
    <div class="desktop-container">
      <h1>Desktop Layout</h1>
      <p>Screen width: {{ width }}px</p>
      <p>This is the desktop version - coming soon!</p>
      <!-- You can add desktop components here later -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import useViewport from "./composables/composables.ts";
import NavbarMobile from "./components/mobile/NavbarMobile.vue";
import StartPage from "./pages/mobile/Start.vue";
import FooterMobile from "./components/mobile/FooterMobile.vue";
const { width } = useViewport();

const isMobile = computed(() => {
  return width.value < 768;
});
</script>
<style scoped>
* {
  scroll-behavior: smooth;
}

.desktop-view {
  padding: 40px;
  text-align: center;
}

.desktop-view h1 {
  color: var(--color-text-dark);
  margin-bottom: 20px;
}

.desktop-view p {
  color: var(--color-text-gray);
  font-size: 18px;
  margin: 10px 0;
}
</style>
