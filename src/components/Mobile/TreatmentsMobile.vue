<template>
  <div class="treatments-wrapper">
    <div class="treatments-header">
      <h2 id="behandlingar">Behandlingar</h2>
    </div>
    <div class="treatments-container">
      <div class="treatments-title">
        <h3>Vishesh</h3>
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
          Vishesh är en lite kraftigare helkroppsmassage där trycket ökar
          jämfört med abhyanga. Vishesh har abhyanga effekter men kan också lösa
          djupt liggande spänningar. Det ökade trycket i de svepande rörelserna
          stimulerar musklerna. Behandlingen förbättrar cirkulationen och frigör
          slaggämnen. Behandlingen inleds med massage av hela kroppen med varm
          olja och svepande rörelser för att värma upp kroppen inför själva
          Vishesh behandlingen. Avslappnande och skön för den som känner sig
          tung i kroppen. Observera att i behandlingstiden på 80 min ingår 10
          minuters vila.
        </p>
      </div>
    </div>
    <div class="treatments-container">
      <div class="treatments-title">
        <h3>Abhyanga</h3>

        <div class="buttons">
          <a
            href="https://www.bokadirekt.se/boka-tjanst/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195/abhyanga-massagebehandling-3419098"
            target="_blank"
          >
            <button class="treatment-button">Boka</button>
          </a>
        </div>
      </div>
      <div class="treatments-text">
        <p>
          Abhyanga är en mycket behaglig helkroppsmassage med varm sesamolja.
          Kroppen masseras systematiskt med ett relativt lätt tryck och lugna,
          svepande rörelser. Behandlingen börjar med att massera huvud, rygg,
          ansikte och framsida kropp, därefter baksida kropp och nacke. Avslutas
          med en vila på ca 10 min. Behandlingen stärker nervsystemet och är
          djupt avslappnande för kropp och sinne. Cirkulationen och vitaliteten
          ökar och muskler och leder mjukas upp. Värmen, oljan och rörelserna
          renar också kroppen från slaggprodukter. Abhyanga är speciellt
          välgörande vid vata- obalanser, stress och utmattning men passar alla
          doshor. Observera att i behandlingstiden ingår ca 10 min vila.
        </p>
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
  font-family:
    Bad Script,
    cursive;

  color: #4a3b2c;
}

.treatments-container {
  width: 95%;
  padding: 20px;
  background-color: #f7be63;
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
  color: #4a3b2c;
  border-radius: 10px;
}

.treatments-title {
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
}
</style>
