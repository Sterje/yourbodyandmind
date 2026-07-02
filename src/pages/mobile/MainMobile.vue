<template>
  <div class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">Your Body and Mind</h1>
      <p class="hero-subtitle">Ayurvediska behandlingar och samtal</p>
      <div class="button-container">
        <router-link to="/behandlingar">
          <button class="button">Behandlingar</button>
        </router-link>
        <a
          href="https://www.bokadirekt.se/places/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195"
          target="_blank"
        >
          <button class="button">Boka tid</button>
        </a>
      </div>
    </div>
  </div>
  <div class="content-section">
    <div class="content-img">
      <img src="../../assets/Profilbild.jpg" alt="Profilbild" />
    </div>
    <p class="content-text">
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
  background-image: url("../../assets/hero.jpg");
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

.button-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.button-container a,
.button-container a:visited {
  text-decoration: none;
}

.button {
  background-color: #bd9f61;
  color: #ffffff;
  border: none;
  padding: 1rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 99px;
  transition: background-color 0.3s ease;
  width: 8rem;
  font-family: "Bad Script", cursive;
}

.content-text {
  font-size: 1rem;
  line-height: 1.5;
  text-align: left;
  padding: 0 1rem;
  color: #4a3b2c;
  font-family: "Arial", sans-serif;
  font-style: italic;
  margin-bottom: 2rem;
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
