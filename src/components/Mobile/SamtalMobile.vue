<template>
  <div class="treatments-wrapper">
    <div class="treatments-header">
      <h2 id="samtal">Samtal</h2>
      <div class="treatments-container">
        <div class="treatments-title">
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
        <div class="treatments-text">
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
.treatments-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.treatments-header {
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  font-family:
    Bad Script,
    cursive;

  color: #4a3b2c;
}

.treatments-container {
  padding: 20px;
  background-color: #f7be63;
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
  color: #4a3b2c;
}

.treatments-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.treatment-button {
  padding: 10px 20px;
  background-color: #ffedd8;

  color: #4a3b2c;

  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.treatments-title h3 {
  font-size: 1.5rem;
}

.treatments-container .treatments-text p {
  font-size: 1rem;
  line-height: 1.5;
}

.treatments-header h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
}
</style>
