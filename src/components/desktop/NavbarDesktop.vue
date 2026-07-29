<template>
  <div class="navbar-desktop" :class="{ scrolled: isScrolled }">
    <div class="navbar-links">
      <a href="#behandlingar" class="navbar-link">Behandlingar</a>

      <a href="#samtal" class="navbar-link">Samtal</a>
      <a href="#kontakt" class="navbar-link">Boka</a>
    </div>
    <div class="navbar-logo">
      <img
        v-if="isScrolled"
        src="../../assets/logoflowerblack.png"
        alt="Logo"
      />
      <img v-else src="../../assets/logoflower.png" alt="Logo" />
    </div>
    <div class="navbar-spacer"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
.navbar-desktop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 1000;
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
}

.navbar-desktop.scrolled {
  background-color: var(--color-background);
  box-shadow: var(--shadow-light);
}

.navbar-links {
  display: flex;
  gap: 20px;
  width: 33.33%;
  justify-content: flex-start;
}

.navbar-link {
  text-decoration: none;
  color: var(--color-text-dark);
  font-weight: bold;
  transition: color 0.3s ease;
}

.navbar-link:hover {
  color: var(--color-accent-gold);
}

.navbar-link.scrolled {
  color: var(--color-text-dark);
}

.navbar-logo {
  width: 33.33%;
  display: flex;
  justify-content: center;
}

.navbar-logo img {
  height: 5rem;
  transition: height 0.3s ease;
}

.navbar-spacer {
  width: 33.33%;
  display: flex;
  justify-content: flex-end;
}
</style>
