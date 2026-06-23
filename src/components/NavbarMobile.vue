<template>
  <nav class="navbar-mobile" :class="{ scrolled: isScrolled }">
    <div class="logo-container">
      <RouterLink to="/">
        <div class="logo">
          <img
            src="../assets/heroblack.png"
            alt="Your Body and Mind Logo"
            class="logo-image"
          />
        </div>
      </RouterLink>
      <div class="logo-text">
        <span>Your Body and Mind</span>
      </div>
    </div>
    <button
      class="hamburger"
      :class="{ active: isMenuOpen }"
      @click="toggleMenu"
      aria-label="Toggle menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div
      class="overlay"
      :class="{ active: isMenuOpen }"
      @click="closeMenu"
    ></div>

    <div class="menu-panel" :class="{ open: isMenuOpen }">
      <ul class="nav-links">
        <li>
          <router-link to="/behandlingar" @click="closeMenu"
            >Behandlingar</router-link
          >
        </li>
        <li><a href="#" @click="closeMenu">Samtal</a></li>
        <li><a href="#" @click="closeMenu">Sandra</a></li>
        <li>
          <a
            href="https://www.bokadirekt.se/places/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195"
            target="_blank"
            @click="closeMenu"
            >Boka</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Låser scroll när menyn är öppen för att förhindra bakgrundsinteraktion
watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    // Save current scroll position
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
  } else {
    // Restore scroll position
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }
});

// Hanterar scroll för att ändra navbarens utseende när användaren scrollar
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Lägg till och ta bort scroll-eventlyssnare
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar-mobile {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  padding-top: calc(1rem + env(safe-area-inset-top));
  background-color: #000000;
  color: #ffe969;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: padding 0.3s ease;
}

/* Scrolled state - smaller navbar */
.navbar-mobile.scrolled {
  padding: 0.5rem 1.5rem;
  padding-top: calc(0.5rem + env(safe-area-inset-top));
}

.logo-container {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 25px;
  /* Ensure container has height for text when scrolled */
}

.logo {
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: 10rem;
  opacity: 1;
}

/* Hide logo when scrolled */
.navbar-mobile.scrolled .logo {
  max-height: 0;
  opacity: 0;
  pointer-events: none;
  margin: 0;
}

.logo-image {
  height: 10rem;
  width: auto;
  display: block;
}

/* Logo text for scrolled state */
.logo-text {
  position: absolute;
  left: 0;
  transition: all 0.3s ease;
  opacity: 0;
  white-space: nowrap;
  font-family: "Bad Script", cursive;
  font-size: 1.5rem;
}

.logo-text span {
  color: #bd9f61;
  font-size: 1rem;
  font-weight: 600;
  line-height: 25px;
  /* Match hamburger menu height */
  display: block;
}

/* Show logo text when scrolled */
.navbar-mobile.scrolled .logo-text {
  opacity: 1;
}

/* Hamburger Icon */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002;
  position: relative;
}

.hamburger span {
  width: 100%;
  height: 3px;
  background-color: #bd9f61;
  border-radius: 3px;
  transition: all 0.3s ease;
  transform-origin: center;
}

/* Hamburger Animation */
.hamburger.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
  transform: translateX(-20px);
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  z-index: 999;
}

.overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Sliding Menu Panel */
.menu-panel {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  background-color: #131313;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1001;
  padding-top: calc(80px + env(safe-area-inset-top));
  padding-bottom: env(safe-area-inset-bottom);
  color: #bd9f61;
  font-family: "Arial", sans-serif;
}

.menu-panel.open {
  transform: translateX(0);
}

/* Navigation Links */
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.nav-links li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-links li a {
  display: block;
  color: #bd9f61;
  text-decoration: none;
  padding: 1.25rem 1.5rem;
  font-size: 1.1rem;
  transition:
    background-color 0.2s ease,
    padding-left 0.2s ease;
}

.nav-links li a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  padding-left: 2rem;
}
</style>
