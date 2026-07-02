<template>
  <div class="main-desktop">
    <div class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">Your Body and Mind</h1>
        <p class="hero-subtitle">Ayurvediska behandlingar och samtal</p>
        <div class="hero-buttons">
          <a
            href="https://www.bokadirekt.se/places/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195"
            target="_blank"
          >
            <button class="hero-button">Boka tid</button>
          </a>
        </div>
      </div>
    </div>
    <div class="content-section-container">
      <div class="content-section">
        <div class="content-img">
          <img src="../../assets/Profilbild.jpg" alt="Profilbild" />
        </div>
        <div class="content-text">
          <p>
            Jag är utbildad beteendevetare, ayuryogalärare och ayurvedisk
            massageterapeut med ett helhetsperspektiv på hälsa och
            välbefinnande.<br />
            I mitt arbete utgår jag från att kropp och sinne är nära
            sammankopplade – när den ena delen får omsorg påverkas även den
            andra. Jag möter varje person med närvaro, respekt och lyhördhet.
            Min ambition är att skapa en trygg och rofylld stund där du får
            landa, släppa vardagens tempo och återknyta kontakten med dig själv.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Add your desktop-specific logic here
</script>

<style scoped>
.main-desktop {
  max-width: 100%;
  margin: 0 auto;
}

.hero-section {
  position: relative;
  background-image: url("../../assets/hero.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

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

.hero-title {
  position: relative;
  z-index: 2;
  color: #bd9f61;
  font-family: "Bad Script", cursive;
  font-size: 3rem;
  text-align: center;
}

.hero-subtitle {
  position: relative;
  z-index: 2;
  color: #bd9f61;
  font-family: "Bad Script", cursive;
  font-size: 1.5rem;
  text-align: center;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.hero-buttons button {
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
.content-section-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  padding: 2rem;
  font-family: "arial", sans-serif;
}

.content-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1000px;
  padding: 2rem;
  font-family: "arial", sans-serif;
}

.content-img {
  justify-content: center;
  display: flex;
  align-items: center;
}

img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.content-text {
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: left;
  padding: 0 1rem;
  max-width: 800px;
  height: fit-content;
  border-radius: 8px;
  font-style: italic;
  color: #4a3b2c;
}
</style>
