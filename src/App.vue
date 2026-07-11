<template>
  <div v-if="isMobile">
    <div class="mobile-container">
      <NavbarMobile />
      <router-view />
      <FooterMobile />
    </div>
  </div>
  <div v-else>
    <div class="desktop-container">
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import useViewport from "./composables/composables.ts";
import NavbarMobile from "./components/mobile/NavbarMobile.vue";
import FooterMobile from "./components/mobile/FooterMobile.vue";
const { width } = useViewport();

const isMobile = computed(() => {
  return width.value < 768;
});
</script>
<style scoped></style>
