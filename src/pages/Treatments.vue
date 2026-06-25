<template>
  <div class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">Behandlingar</h1>
    </div>
  </div>
  <div class="content-card">
    <div class="content-title-container">
      <h2 class="content-title">Vishesh Massage</h2>
      <button class="book-button">
        <a
          href="https://www.bokadirekt.se/boka-tjanst/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195/vishesh-massagebehandling-3416007"
          target="_blank"
          >Boka</a
        >
      </button>
    </div>
    <p class="content-description">
      Vishesh är en lite kraftigare helkroppsmassage där trycket ökar jämfört
      med abhyanga. Vishesh har abhyanga effekter men kan också lösa djupt
      liggande spänningar. Det ökade trycket i de svepande rörelserna stimulerar
      musklerna. Behandlingen förbättrar cirkulationen och frigör slaggämnen.
      Behandlingen inleds med massage av hela kroppen med varm olja och svepande
      rörelser för att värma upp kroppen inför själva Vishesh behandlingen.
      Avslappnande och skön för den som känner sig tung i kroppen. Observera att
      i behandlingstiden på 80 min ingår 10 minuters vila.
    </p>
  </div>
  <div class="content-card">
    <div class="content-title-container">
      <h2 class="content-title">Abhyanga Massage</h2>
      <button class="book-button">
        <a
          href="https://www.bokadirekt.se/boka-tjanst/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195/abhyanga-massagebehandling-3419098"
          target="_blank"
          >Boka</a
        >
      </button>
    </div>
    <p class="content-description">
      Abhyanga är en mycket behaglig helkroppsmassage med varm sesamolja.
      Kroppen masseras systematiskt med ett relativt lätt tryck och lugna,
      svepande rörelser. Behandlingen börjar med att massera huvud, rygg,
      ansikte och framsida kropp, därefter baksida kropp och nacke. Avslutas med
      en vila på ca 10 min. Behandlingen stärker nervsystemet och är djupt
      avslappnande för kropp och sinne. Cirkulationen och vitaliteten ökar och
      muskler och leder mjukas upp. Värmen, oljan och rörelserna renar också
      kroppen från slaggprodukter. Abhyanga är speciellt välgörande vid vata-
      obalanser, stress och utmattning men passar alla doshor. Observera att i
      behandlingstiden ingår ca 10 min vila.
    </p>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.hero-section {
  position: relative;
  background-image: url("../assets/treatments3.jpg");
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
  /* background-color: #56483a; */
  background-color: #f7be63;
  /* color: #ffe2ba; */
  color: #4a3b2c;
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

.book-button {
  background-color: #f5b042;
  color: white;
  border: none;
  padding: 0.3rem 1.6rem;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content-description {
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: "Arial", sans-serif;
}
</style>
