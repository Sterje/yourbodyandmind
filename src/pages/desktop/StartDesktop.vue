<template>
  <div class="hero-section-desktop">
    <div
      v-for="(image, index) in backgroundImages"
      :key="index"
      class="hero-background"
      :class="{ active: currentImageIndex === index }"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-img">
        <img src="../../assets/logotext.png" alt="Logo" />
      </div>
      <div class="hero-buttons">
        <a
          href="https://www.bokadirekt.se/places/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195"
          target="_blank"
        >
          <button class="hero-button">Boka</button>
        </a>
        <button class="hero-button">Läs mer</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

import heroImage from "../../assets/hero.jpg";
import towelImage from "../../assets/hero-desktop-towel.png";

const backgroundImages = [heroImage, towelImage];
const currentImageIndex = ref(0);
let intervalId: number | null = null;

onMounted(() => {
  intervalId = window.setInterval(() => {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % backgroundImages.length;
  }, 3000);
});

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  // Restore body scroll
  document.body.style.overflow = "";
});

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
.hero-section-desktop {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.hero-background.active {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-overlay-brown);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: var(--color-text-dark);
}

.hero-img img {
  max-width: 40rem;
  height: auto;
  margin-bottom: 20px;
}

.hero-buttons {
  margin-top: 20px;
}

.hero-button {
  width: 6rem;
  padding: 1rem;
  margin: 0 10px;
  background-color: var(--color-accent-gold);
  color: var(--color-text-dark);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
