<template>
  <div class="hero-section-mobile">
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
  <div class="hero-text">
    <div class="hero-text-img">
      <img src="../../assets/Profilbild.jpg" alt="Logo" />
      <p>
        Jag är utbildad beteendevetare, ayuryogalärare och ayurvedisk
        massageterapeut med ett helhetsperspektiv på hälsa och välbefinnande. I
        mitt arbete utgår jag från att kropp och sinne är nära sammankopplade –
        när den ena delen får omsorg påverkas även den andra. Jag möter varje
        person med närvaro, respekt och lyhördhet. Min ambition är att skapa en
        trygg och rofylld stund där du får landa, släppa vardagens tempo och
        återknyta kontakten med dig själv.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import heroImage from "../../assets/hero.jpg";
import towelImage from "../../assets/towel.png";

const backgroundImages = [heroImage, towelImage];
const currentImageIndex = ref(0);
let intervalId: number | null = null;

// Change the background image every 5 seconds
onMounted(() => {
  intervalId = window.setInterval(() => {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % backgroundImages.length;
  }, 5000);
});

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
});
</script>
<style scoped>
.hero-section-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 70dvh;
  text-align: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  z-index: 0;
}

.hero-background.active {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(179, 125, 32, 0.6);
  z-index: 1;
}

.hero-content {
  z-index: 2;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-section-mobile h1 {
  font-size: 24px;
  margin-bottom: 10px;
}
.hero-section-mobile p {
  font-size: 16px;
  color: #666;
}

.hero-text {
  padding: 20px;
  background-color: #ffefdd;
  font-size: 16px;
  color: #333;
  font-family: Arial, sans-serif;
  font-style: italic;
  line-height: 1.2;
}

.hero-text-img {
  margin-bottom: 10px;
}

.hero-text-img img {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.hero-img {
  width: 100%;
  margin-bottom: 20px;
}

.hero-img img {
  max-width: 90%;
  height: auto;
  object-fit: contain;
}

.hero-buttons {
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 20px;
}

.hero-button {
  padding: 1rem;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ffdf80;
  color: white;
  transition: background-color 0.3s ease;
  width: 6rem;
}
</style>
