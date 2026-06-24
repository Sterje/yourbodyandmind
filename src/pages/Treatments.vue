<template>
  <div class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">Behandlingar</h1>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.hero-section {
  position: relative;
  background-image: url("../assets/treatments.jpg");
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
  font-family: "Bad Script", cursive;
}

.hero-content h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
}
.hero-title {
  font-size: 2rem;
  font-weight: bold;
}
.hero-subtitle {
  font-size: 1.2rem;
}
</style>
