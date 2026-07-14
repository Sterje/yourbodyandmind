<template>
  <div class="samtal-wrapper">
    <div class="samtal-header">
      <h2 id="samtal">Samtal</h2>
    </div>
    <div class="samtal-container">
      <div class="samtal-title">
        <h3>Samtal</h3>
        <div class="buttons">
          <a
            href="https://www.bokadirekt.se/boka-tjanst/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195/vishesh-massagebehandling-3416007"
            target="_blank"
          >
            <button class="treatment-button">Boka</button>
          </a>
        </div>
      </div>
      <div class="samtal-text">
        <p>
          Mina samtal vänder sig till dig som känner att något behöver förändras
          – kanske står du inför ett vägskäl, upplever obalans, känner dig
          vilsen eller längtar efter att förstå dig själv på ett djupare plan.
          Oavsett om det handlar om arbete, relationer, livsbalans eller din
          personliga utveckling, utgår vi alltid från samma plats: där du är
          just nu. Samtalen ger utrymme att stanna upp, reflektera och skapa
          klarhet i det som är viktigt för dig. Tillsammans utforskar vi dina
          tankar, känslor och drivkrafter – med målet att du ska känna större
          trygghet, balans och mening i din vardag.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.samtal-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.samtal-header {
  width: 100%;
  max-width: 600px;
  font-family:
    Bad Script,
    cursive;

  color: #4a3b2c;
}

.samtal-container {
  width: 95%;
  padding: 20px;
  background-color: #f7be63;
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
  color: #4a3b2c;
  border-radius: 10px;
}

.samtal-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.treatment-button {
  padding: 10px 20px;
  background-color: #ffedd8;

  color: #4a3b2c;

  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.samtal-title h3 {
  font-size: 1.5rem;
}

.samtal-container .samtal-text p {
  font-size: 1rem;
  line-height: 1.5;
}

.samtal-header h2 {
  font-size: 2rem;
  text-align: center;
}
</style>
