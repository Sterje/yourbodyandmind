<template>
  <div class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1>Your Body and Mind</h1>
      <p>Your journey to wellness starts here</p>
      <a
        href="https://www.bokadirekt.se/places/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195"
        target="_blank"
      >
        <button id="book-btn">Boka tid</button>
      </a>
    </div>
  </div>
  <div class="content-section">
    <div class="content-img">
      <img src="../assets/Profilbild.jpg" alt="Profilbild" />
    </div>
    <p class="content-text">
      Välkommen till Your Body and Mind! Vi erbjuder ayurvediska behandlingar
      och samtal för att främja ditt välbefinnande. Utforska våra tjänster och
      boka en tid för att börja din resa mot balans och harmoni.
    </p>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.hero-section {
  position: relative;
  background-image: url("../assets/hero.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  font-family: "Arial", sans-serif;
  line-height: 1.5;
}

/* Optional dark overlay for better text readability */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  padding: 2rem 1.5rem;
  max-width: 600px;
  color: #bd9f61;
}

.hero-content h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
}

#book-btn {
  background-color: #bd9f61;
  color: white;
  border: none;
  padding: 1.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 99px;
  transition: background-color 0.3s ease;
  width: 10rem;
  margin-top: 1.5rem;
}

.content-text {
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
  padding: 0 1rem;
  color: #bd9f61;
  font-family: "Arial", sans-serif;
  font-style: italic;
}

.content-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.content-img {
  margin-bottom: 1rem;
  justify-content: center;
  display: flex;
  align-items: center;
}

img {
  max-width: 90%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}
</style>
