<template>
  <div v-if="isMobile" class="mobile-view">
    <div class="mobile-container">
      <NavbarMobile />
      <StartMobile />
      <FooterMobile />
    </div>
  </div>
  <div v-else class="desktop-view">
    <div class="desktop-container">
      <NavbarDesktop />
      <StartPageDesktop />
      <FooterDesktop />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import useViewport from "./composables/composables.ts";
import NavbarMobile from "./components/mobile/NavbarMobile.vue";
import StartMobile from "./pages/mobile/StartMobile.vue";
import FooterMobile from "./components/mobile/FooterMobile.vue";
import NavbarDesktop from "./components/desktop/NavbarDesktop.vue";
import StartPageDesktop from "./pages/desktop/StartDesktop.vue";
import FooterDesktop from "./components/desktop/FooterDesktop.vue";
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
