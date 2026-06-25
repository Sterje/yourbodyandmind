<template>
  <div class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <!-- <h1 class="hero-title">Sandra</h1> -->
    </div>
  </div>
  <div class="content-card">
    <div class="content-title-container">
      <h2 class="content-title">Om Sandra</h2>
    </div>
    <p class="content-description">
      Jag är utbildad beteendevetare, ayuryogalärare och ayurvedisk
      massageterapeut med ett helhetsperspektiv på hälsa och välbefinnande. I
      mitt arbete utgår jag från att kropp och sinne är nära sammankopplade –
      när den ena delen får omsorg påverkas även den andra. Jag möter varje
      person med närvaro, respekt och lyhördhet. Min ambition är att skapa en
      trygg och rofylld stund där du får landa, släppa vardagens tempo och
      återknyta kontakten med dig själv.
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-section {
  position: relative;
  background-image: url("../assets/Profilbild2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 200px;
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
  background: rgba(0, 0, 0, 0.7);
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

.content-card {
  background-color: #ab670f;
  color: #ffe2ba;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.content-title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.content-title-container a {
  text-decoration: none;
  color: #ffffff;
  font-family: "Bad Script", cursive;
  font-size: 1rem;
}

.content-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  font-family: "Bad Script", cursive;
}

.content-description {
  font-size: 1rem;
  line-height: 1.5;
  font-family: "Arial", sans-serif;
}
</style>
