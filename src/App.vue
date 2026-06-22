<template>
  <div v-if="isMobile" class="app-mobile">
    <NavbarMobile />
    <main class="main-wrapper">
      <MainMobile />
    </main>
    <FooterMobile />
  </div>
  <div v-else class="app-desktop">
    <h1>Your Body and Mind!</h1>
  </div>
</template>
<script setup lang="ts">
import FooterMobile from "./components/Mobile/FooterMobile.vue";
import NavbarMobile from "./components/NavbarMobile.vue";
import useViewPort from "./composables/composables";
import { computed } from "vue";
import MainMobile from "./pages/MainMobile.vue";

const { width } = useViewPort();

const isMobile = computed(() => {
  return width.value < 768; // Adjust the breakpoint as needed
});

// const isDesktop = computed(() => {
//   return width.value >= 768; // Adjust the breakpoint as needed
// });

// const isTablet = computed(() => {
//   return width.value >= 768 && width.value < 1024; // Adjust the breakpoints as needed
// });
</script>

<style scoped>
.app-mobile {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-wrapper {
  flex: 1;
  padding-top: 12rem;
}
</style>
