<template>
  <div class="hero-section-desktop">
    <div
      v-for="(image, index) in backgroundImages"
      :key="index"
      class="hero-background"
      :class="{ active: currentImageIndex === index }"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-img">
        <img src="../../assets/logotext.png" alt="Logo" />
      </div>
      <div class="hero-buttons">
        <a
          href="https://www.bokadirekt.se/places/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195"
          target="_blank"
        >
          <button class="hero-button">Boka</button>
        </a>
        <button class="hero-button" @click="isOpen = true">Läs mer</button>
      </div>
    </div>
  </div>
  <div id="about" class="hero-text">
    <div class="hero-text-img">
      <img src="../../assets/Profilbild.jpg" alt="Logo" />
      <p>
        Jag är utbildad beteendevetare, ayuryogalärare och ayurvedisk
        massageterapeut med ett helhetsperspektiv på hälsa och välbefinnande. I
        mitt arbete utgår jag från att kropp och sinne är nära sammankopplade –
        när den ena delen får omsorg påverkas även den andra. Jag möter varje
        person med närvaro, respekt och lyhördhet. Min ambition är att skapa en
        trygg och rofylld stund där du får landa, släppa vardagens tempo och
        återknyta kontakten med dig själv.
      </p>
    </div>
  </div>

  <div
    class="read-more-modal"
    :class="{ open: isOpen }"
    @click.self="closeModal"
  >
    <div class="modal-content">
      <div class="read-more-modal-header">
        <button class="close-btn" @click="closeModal" aria-label="Close modal">
          <span>&times;</span>
        </button>
      </div>
      <p>
        Ayurveda är en flera tusen år gammal metod för hälsa och välbefinnande
        och kan enkelt översättas till “kunskap om livet”. Med rötter i Indien
        är ayurveda en holistisk vetenskap som ser till både kropp, sinne och
        själ. Principen för ayurveda kan sammanfattas med orden “Förebyggande är
        bättre än bot”. Fokus ligger på att genom en sund livsstil med goda
        rutiner, diet och utrensning stärka sin hälsa så att sjukdomstillstånd
        inte uppstår En utvärtes behandling anses i Ayurveda vara lika effektiv
        som en invärtes behandling. Behandlingen görs i tystnad eftersom syftet
        är att skapa lugn och ro och stilla den mentala aktiviteten. I vilan
        efter behandlingen startar läkandet och kroppen självreparerande
        mekanismer aktiveras. Under några av behandlingarna får du även jobba
        lite med din andning för att bättre nå ett avslappnat tillstånd och för
        att tillgodogöra dig behandlingen bra. Alla behandlingar avslutas med 10
        min. vila som tillkommer till utsatt behandlingstid. Denna vila är
        viktig då mycket av återhämtningen i kroppen sker under vilan. OBS!
        Viktigt att tänka på när du bokat en behandling är att du efteråt ej är
        uppbokad på något annat. Så att du genom att gå hem kan ta det lugnt
        efter behandlingen kan tillgodogöra dig den till fullo.
        Grundspännings-nivå:n i kroppen sänks ganska rejält efter en exempelvis
        Abhyanga eller Vishesh. Och tempot som vi omger oss med, vet vi alla är
        högt. Så låt kroppen vila i lugn hemmamiljö efter behandling.
      </p>
    </div>
  </div>
  <TreatmentsDesktop />
  <ConversationDesktop />
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";

const isScrolled = ref(false);
const isOpen = ref(false);

import heroImage from "../../assets/hero.jpg";
import towelImage from "../../assets/hero-desktop-towel.png";
import TreatmentsDesktop from "../../components/desktop/TreatmentsDesktop.vue";
import ConversationDesktop from "../../components/desktop/ConversationDesktop.vue";

const backgroundImages = [heroImage, towelImage];
const currentImageIndex = ref(0);
let intervalId: number | null = null;

// Close modal function
const closeModal = () => {
  isOpen.value = false;
};

// Handle escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape" && isOpen.value) {
    closeModal();
  }
};

// Watch for modal state changes to lock/unlock body scroll
watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

onMounted(() => {
  intervalId = window.setInterval(() => {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % backgroundImages.length;
  }, 3000);

  window.addEventListener("keydown", handleEscape);
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  // Restore body scroll
  document.body.style.overflow = "";

  window.removeEventListener("keydown", handleEscape);
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};
</script>
<style scoped>
.hero-section-desktop {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 2s ease-in-out;
}

.hero-background.active {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-overlay-brown);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: var(--color-text-dark);
}

.hero-img img {
  width: 35rem;
  height: auto;
  margin-bottom: 20px;
}

.hero-buttons {
  margin-top: 20px;
}

.hero-button {
  width: 6rem;
  padding: 1rem;
  margin: 0 10px;
  background-color: var(--color-accent-gold);
  color: var(--color-text-dark);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.hero-text {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: var(--color-background-light);
  font-size: 2rem;
  color: var(--color-text-gray);
  font-family: Arial, sans-serif;
  font-style: italic;
  line-height: 1.3;
  overflow: auto;
}

.hero-text-img {
  margin-bottom: 10px;
}

.hero-text-img img {
  float: left;
  margin-right: 15px;
  width: 15rem;
  border-radius: 50%;
  object-fit: cover;
}

.read-more-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: var(--color-text-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
}

.read-more-modal.open {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  position: relative;
  max-width: 600px;
  padding: 20px;
  background-color: var(--color-background);
  border-radius: 10px;
  max-height: 80vh;
  overflow-y: auto;
}

.read-more-modal-header {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--color-text-dark);
  cursor: pointer;
  padding: 0 10px;
  line-height: 1;
  transition: opacity 0.2s ease;
}

.close-btn:hover {
  opacity: 0.7;
}

.read-more-modal p {
  margin: 0;
  padding-right: 30px;
  font-size: 1.2rem;
  line-height: 1.5;
}
</style>
