<template>
  <div class="navbar-desktop" :class="{ scrolled: isScrolled }">
    <div class="navbar-links">
      <a href="#behandlingar" class="navbar-link">Behandlingar</a>

      <a href="#samtal" class="navbar-link">Samtal</a>
      <a
        href="https://www.bokadirekt.se/places/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195"
        target="_blank"
        class="navbar-link"
        >Boka</a
      >
    </div>
    <div class="navbar-logo">
      <img
        v-if="isScrolled"
        src="../../assets/logoflowerblack.png"
        alt="Logo"
      />
      <img v-else src="../../assets/logoflower.png" alt="Logo" />
    </div>
    <div class="navbar-spacer">
      <div class="contact-wrapper">
        <button class="navbar-contact-button" @click="toggleContactModal">
          Kontakt
        </button>
        <div v-if="isContactModalOpen" class="contact-modal">
          <div class="contact-modal-arrow"></div>
          <div class="contact-modal-content">
            <h3>Kontakta mig</h3>
            <p><strong>Email:</strong> sandra@yourbodyandmind.se</p>
            <p>
              <strong>Telefon:</strong><br />
              <a href="tel:0793356491">0793-356491</a>
            </p>
            <p>
              <strong>Adress:</strong><br />Järnvägsgatan 6<br />645 43
              Strängnäs
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isContactModalOpen = ref(false);

const toggleContactModal = () => {
  isContactModalOpen.value = !isContactModalOpen.value;
};

// Close modal when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest(".contact-wrapper")) {
    isContactModalOpen.value = false;
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", handleClickOutside);
});
</script>
<style scoped>
.navbar-desktop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 1000;
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
}

.navbar-desktop.scrolled {
  background-color: var(--color-background);
  box-shadow: var(--shadow-light);
}

.navbar-links {
  display: flex;
  gap: 20px;
  width: 33.33%;
  justify-content: flex-start;
}

.navbar-link {
  text-decoration: none;
  color: #ffefdd;
  font-weight: bold;
  position: relative;
  transition: color 0.3s ease;
}

/* Change link color when navbar is scrolled */
.navbar-desktop.scrolled .navbar-link {
  color: var(--color-text-gray);
}

/* animated underline on hover */
.navbar-link:hover {
  color: var(--color-accent-gold);
}
.navbar-link::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--color-accent-gold);
  bottom: -4px;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.navbar-link:hover::after {
  transform: scaleX(1);
}

.navbar-logo {
  width: 33.33%;
  display: flex;
  justify-content: center;
}

.navbar-logo img {
  height: 5rem;
  transition: height 0.3s ease;
}

.navbar-spacer {
  width: 33.33%;
  display: flex;
  justify-content: flex-end;
}

.contact-wrapper {
  position: relative;
}

.navbar-contact-button {
  width: 6rem;
  background-color: var(--color-accent-gold);
  color: var(--color-text-dark);
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.3s ease;
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

.navbar-contact-button:hover {
  opacity: 0.8;
}

.contact-modal {
  position: absolute;
  top: calc(100% + 15px);
  right: 0;
  background-color: var(--color-background);
  border: 2px solid var(--color-accent-gold);
  border-radius: 10px;
  padding: 20px;
  min-width: 280px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Speech bubble arrow pointing up */
.contact-modal-arrow {
  position: absolute;
  top: -10px;
  right: 20px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid var(--color-accent-gold);
}

.contact-modal-arrow::after {
  content: "";
  position: absolute;
  top: 2px;
  left: -8px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid var(--color-background);
}

.contact-modal-content h3 {
  margin: 0 0 15px 0;
  color: var(--color-accent-gold);
  font-size: 1.3rem;
}

.contact-modal-content p {
  margin: 8px 0;
  color: var(--color-text-dark);
  font-size: 1rem;
  line-height: 1.5;
}

.contact-modal-content strong {
  color: var(--color-accent-gold);
}
</style>
