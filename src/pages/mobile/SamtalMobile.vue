<template>
  <div class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">Samtal</h1>
    </div>
  </div>
  <div class="content-card">
    <div class="content-title-container">
      <h2 class="content-title">Samtal</h2>
    </div>
    <p class="content-description">
      Mina samtal vänder sig till dig som känner att något behöver förändras –
      kanske står du inför ett vägskäl, upplever obalans, känner dig vilsen
      eller längtar efter att förstå dig själv på ett djupare plan. Oavsett om
      det handlar om arbete, relationer, livsbalans eller din personliga
      utveckling, utgår vi alltid från samma plats: där du är just nu. Samtalen
      ger utrymme att stanna upp, reflektera och skapa klarhet i det som är
      viktigt för dig. Tillsammans utforskar vi dina tankar, känslor och
      drivkrafter – med målet att du ska känna större trygghet, balans och
      mening i din vardag.
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-section {
  width: 100%;
  position: relative;
  background-image: url("../../assets/Profilbild2.jpg");
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
  background-color: #f7be63;
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
  color: #4a3b2c;
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
