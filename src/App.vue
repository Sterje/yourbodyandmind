<template>
  <div v-if="isMobile" class="app-mobile">
    <NavbarMobile />
    <main class="main-wrapper">
      <router-view />
    </main>
    <FooterMobile />
  </div>
  <div v-else class="app-desktop">
    <h1>Your Body and Mind!</h1>
    <p>Fungerar bäst på mobil för tillfället</p>
    <p>Järnvägsgatan 6, 645 43 Strängnäs</p>
    <p>Telefon: 0793-356491</p>
    <p>
      Email:
      <a href="mailto:sandra@yourbodyandmind.se">sandra@yourbodyandmind.se</a>
    </p>
  </div>
</template>
<script setup lang="ts">
import FooterMobile from "./components/Mobile/FooterMobile.vue";
import NavbarMobile from "./components/NavbarMobile.vue";
import useViewPort from "./composables/composables";
import { computed } from "vue";

const { width } = useViewPort();

const isMobile = computed(() => {
  return width.value < 768; // Adjust the breakpoint as needed
});
</script>

<style scoped>
.app-mobile {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  background-color: #7d460d;
}

.main-wrapper {
  flex: 1;
  padding-top: calc(12rem + env(safe-area-inset-top));
  background-color: #7d460d;
}

.app-desktop {
  padding: 2rem;
  min-height: 100dvh;
}
</style>
