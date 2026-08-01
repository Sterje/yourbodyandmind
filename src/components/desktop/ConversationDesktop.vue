<template>
  <div class="conversation-wrapper">
    <div class="conversation-header">
      <h2 id="samtal">Samtal</h2>
    </div>
    <div class="conversation-container">
      <div class="conversation-card">
        <div class="conversation-title">
          <h3>Samtal</h3>

          <div class="buttons">
            <a
              href="https://www.bokadirekt.se/places/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195"
              target="_blank"
            >
              <button class="conversation-button">Boka</button>
            </a>
          </div>
        </div>
        <div class="conversation-text">
          <p>
            Mina samtal vänder sig till dig som känner att något behöver
            förändras – kanske står du inför ett vägskäl, upplever obalans,
            känner dig vilsen eller längtar efter att förstå dig själv på ett
            djupare plan. Oavsett om det handlar om arbete, relationer,
            livsbalans eller din personliga utveckling, utgår vi alltid från
            samma plats: där du är just nu. Samtalen ger utrymme att stanna upp,
            reflektera och skapa klarhet i det som är viktigt för dig.
            Tillsammans utforskar vi dina tankar, känslor och drivkrafter – med
            målet att du ska känna större trygghet, balans och mening i din
            vardag.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.conversation-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.conversation-header {
  width: 100%;
  font-family:
    Bad Script,
    cursive;

  color: var(--color-text-brown);
}

.conversation-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
  color: var(--color-text-brown);
  border-radius: 10px;
}

.conversation-card {
  width: 50%;
  padding: 20px;
  background-color: var(--color-accent-gold);
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
  color: var(--color-text-brown);
  border-radius: 10px;
}

.conversation-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.conversation-button {
  padding: 10px 20px;
  background-color: var(--color-background);

  color: var(--color-text-brown);

  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.conversation-title h3 {
  font-size: 1.5rem;
}

.conversation-card .conversation-text p {
  font-size: 1rem;
  line-height: 1.5;
  text-align: start;
}

.conversation-header h2 {
  font-size: 2rem;
  text-align: center;
}
</style>
