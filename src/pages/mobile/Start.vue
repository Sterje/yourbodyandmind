<template>
  <div id="home" class="hero-section-mobile">
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
        <button class="hero-button" @click="openModal">Läs mer</button>
      </div>
    </div>
  </div>

  <!-- Bottom Sheet Modal -->
  <div
    class="modal-overlay"
    :class="{ active: isModalOpen }"
    @click="closeModal"
  ></div>
  <div class="bottom-sheet" :class="{ open: isModalOpen }" :style="sheetStyle">
    <div
      class="sheet-header"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <div class="sheet-handle"></div>
      <button class="close-btn" @click="closeModal" aria-label="Close">
        <span>&times;</span>
      </button>
    </div>
    <div class="sheet-content">
      <h2>Om Ayurveda</h2>
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
  <TreatmentsMobile />
  <SamtalMobile />
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import TreatmentsMobile from "../../components/mobile/TreatmentsMobile.vue";
import heroImage from "../../assets/hero.jpg";
import towelImage from "../../assets/towel.png";
import SamtalMobile from "../../components/mobile/SamtalMobile.vue";

const backgroundImages = [heroImage, towelImage];
const currentImageIndex = ref(0);
const isModalOpen = ref(false);
const dragY = ref(0);
const startY = ref(0);
const isDragging = ref(false);
let intervalId: number | null = null;

// Change the background image every 5 seconds
onMounted(() => {
  intervalId = window.setInterval(() => {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % backgroundImages.length;
  }, 3000);
});

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  // Restore body scroll
  document.body.style.overflow = "";
});

const openModal = () => {
  isModalOpen.value = true;
  document.body.style.overflow = "hidden";
  dragY.value = 0;
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = "";
  dragY.value = 0;
  isDragging.value = false;
};

// Touch handlers for swipe down to close
const onTouchStart = (e: TouchEvent) => {
  startY.value = e.touches[0].clientY;
  isDragging.value = true;
};

const onTouchMove = (e: TouchEvent) => {
  if (!isDragging.value) return;

  const currentY = e.touches[0].clientY;
  const diff = currentY - startY.value;

  // Only allow dragging down
  if (diff > 0) {
    dragY.value = diff;
    e.preventDefault();
  }
};

const onTouchEnd = () => {
  if (!isDragging.value) return;

  // If dragged down more than 100px, close the modal
  if (dragY.value > 100) {
    closeModal();
  } else {
    // Otherwise snap back
    dragY.value = 0;
  }

  isDragging.value = false;
};

// Computed style for the bottom sheet
const sheetStyle = computed(() => {
  if (isDragging.value && dragY.value > 0) {
    return {
      transform: `translateY(${dragY.value}px)`,
      transition: "none",
    };
  }
  return {};
});
</script>
<style scoped>
.hero-section-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 80dvh;
  text-align: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  z-index: 0;
}

.hero-background.active {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(179, 125, 32, 0.6);
  z-index: 1;
}

.hero-content {
  z-index: 2;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-section-mobile h1 {
  font-size: 24px;
  margin-bottom: 10px;
}
.hero-section-mobile p {
  font-size: 16px;
  color: #666;
}

.hero-text {
  padding: 20px;
  background-color: #ffefdd;
  font-size: 16px;
  color: #333;
  font-family: Arial, sans-serif;
  font-style: italic;
  line-height: 1.2;
}

.hero-text-img {
  margin-bottom: 10px;
}

.hero-text-img img {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.hero-img {
  width: 100%;
  margin-bottom: 20px;
}

.hero-img img {
  max-width: 90%;
  height: auto;
  object-fit: contain;
}

.hero-buttons {
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 20px;
}

.hero-button {
  padding: 1rem;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ffdf80;
  color: white;
  transition: background-color 0.3s ease;
  width: 6rem;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  z-index: 1998;
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffedd8;
  border-radius: 20px 20px 0 0;
  max-height: 90vh;
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1999;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  font-family: Arial, sans-serif;
}

.bottom-sheet.open {
  transform: translateY(0);
}

.sheet-header {
  position: sticky;
  top: 0;
  background: #ffedd8;
  padding: 15px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1;
  cursor: grab;
  user-select: none;
  touch-action: none;
}

.sheet-header:active {
  cursor: grabbing;
}

.sheet-handle {
  width: 40px;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  margin-bottom: 10px;
  transition: background-color 0.2s ease;
}

.sheet-header:active .sheet-handle {
  background-color: rgba(0, 0, 0, 0.5);
}

.close-btn {
  position: absolute;
  top: 5px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 2;
}

.close-btn span {
  font-size: 32px;
  color: #333;
  line-height: 1;
  display: block;
  font-weight: 300;
  transition: transform 0.2s ease;
}

.close-btn:hover span {
  transform: rotate(90deg);
  color: #666;
}

.sheet-content {
  padding: 30px 25px 40px;
  animation: slideUp 0.4s ease forwards;
  animation-delay: 0.1s;
  opacity: 0;
}

.bottom-sheet.open .sheet-content {
  animation: slideUp 0.3s ease forwards;
  animation-delay: 0.15s;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.sheet-content h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
}

.sheet-content p {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

.modal-buttons {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.modal-button {
  padding: 15px 40px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #ffdf80;
  color: white;
  transition: all 0.3s ease;
  font-weight: 500;
}

.modal-button:hover {
  background-color: #ffd666;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 223, 128, 0.4);
}
</style>
