<template>
  <div class="logo-section">
    <RouterLink to="/">
      <div class="logo">
        <img
          src="../../assets/logotransp3.png"
          alt="Your Body and Mind Logo"
          class="logo-image"
        />
      </div>
    </RouterLink>
  </div>
  <div ref="sentinel" class="sentinel"></div>
  <!-- Spacer to prevent layout shift when nav becomes fixed -->
  <div v-if="isScrolled" class="nav-spacer"></div>
  <nav class="nav-links-container" :class="{ scrolled: isScrolled }">
    <div class="logo-text">Your Body and Mind</div>
    <div class="nav-links">
      <RouterLink to="/behandlingar">Behandlingar</RouterLink>
      <RouterLink to="/samtal">Samtal</RouterLink>
      <RouterLink to="/sandra">Om Sandra</RouterLink>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const sentinel = ref<HTMLElement | null>(null);
const isScrolled = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      isScrolled.value = !entry.isIntersecting;
    },
    {
      threshold: 0,
    },
  );
  if (sentinel.value) {
    observer.observe(sentinel.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
<style scoped>
.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5b042;
}

.logo {
  display: block;
}

.logo-image {
  height: 15rem;
  width: auto;
  display: block;
}

.sentinel {
  height: 1px;
}

.nav-links-container {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #131313;
  color: #bd9f61;
  font-weight: bold;
  font-family: "Bad Script", cursive;
  z-index: 1000;
  transition: box-shadow 0.3s ease;
}

/* Add shadow when nav is sticky and scrolled */
.nav-links-container.scrolled {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.nav-spacer {
  height: 80px; /* Approximate height of the nav bar */
}

.logo-text {
  font-size: 1.5rem;
  margin-right: 2rem;
  padding: 1rem 1rem;
  opacity: 0;
  transition: opacity 0.4s ease;
  white-space: nowrap;
}

/* Show logo-text when scrolled */
.nav-links-container.scrolled .logo-text {
  opacity: 1;
}

.nav-links {
  display: flex;
  justify-content: end;
  gap: 1rem;
  font-size: 1rem;
  padding: 1rem 1rem;
}

.nav-links a {
  text-decoration: none;
  color: #bd9f61;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #f5b042;
}
</style>
