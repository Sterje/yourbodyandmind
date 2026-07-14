<template>
  <div class="navbar-mobile" :class="{ scrolled: isScrolled }">
    <div class="logo">
      <img
        v-if="isScrolled"
        src="../../assets/logoflowerblack.png"
        alt="Logo"
      />
      <img v-else src="../../assets/logoflower.png" alt="Logo" />
    </div>
    <div
      class="hamburger-menu"
      :class="{ open: isMenuOpen }"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <!-- Overlay -->
  <div
    class="menu-overlay"
    :class="{ active: isMenuOpen }"
    @click="closeMenu"
  ></div>

  <div class="side-menu" :class="{ open: isMenuOpen }">
    <button class="close-btn" @click="closeMenu" aria-label="Close menu">
      <span>&times;</span>
    </button>
    <nav class="menu-content">
      <ul>
        <li><a href="#behandlingar" @click="closeMenu">Behandlingar</a></li>
        <li><a href="#samtal" @click="closeMenu">Samtal</a></li>
        <li>
          <a
            href="https://www.bokadirekt.se/places/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195"
            target="_blank"
            @click="closeMenu"
            >Boka</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  // Prevent body scroll when menu is open
  if (isMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = "";
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>
<style scoped>
.navbar-mobile {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
  transition:
    background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-mobile.scrolled {
  background: #ffedd8;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.logo {
  display: flex;
  align-items: center;
  position: relative;
}

.logo img {
  height: 50px;
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  z-index: 1001;
  position: relative;
}

.hamburger-menu span {
  display: block;
  height: 3px;
  background-color: #fff;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.navbar-mobile.scrolled .hamburger-menu span {
  background-color: #333;
}

.hamburger-menu.open span:nth-child(1) {
  transform: translateY(8.5px) rotate(45deg);
}

.hamburger-menu.open span:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.open span:nth-child(3) {
  transform: translateY(-8.5px) rotate(-45deg);
}

/* Menu Overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  z-index: 999;
}

.menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

.side-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  max-width: 300px;
  height: 100vh;
  background: #ffedd8;
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
}

.side-menu.open {
  transform: translateX(0);
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
  transition: all 0.3s ease;
}

.side-menu.open .close-btn {
  opacity: 1;
  transform: rotate(0) scale(1);
  transition-delay: 0.2s;
}

.close-btn span {
  font-size: 40px;
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

.menu-content {
  padding: 80px 30px 30px;
  height: 100%;
}

.menu-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-content li {
  margin-bottom: 25px;
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.3s ease;
}

.side-menu.open .menu-content li {
  opacity: 1;
  transform: translateX(0);
}

.side-menu.open .menu-content li:nth-child(1) {
  transition-delay: 0.1s;
}

.side-menu.open .menu-content li:nth-child(2) {
  transition-delay: 0.15s;
}

.side-menu.open .menu-content li:nth-child(3) {
  transition-delay: 0.2s;
}

.side-menu.open .menu-content li:nth-child(4) {
  transition-delay: 0.25s;
}

.menu-content a {
  text-decoration: none;
  color: #333;
  font-size: 24px;
  font-weight: 500;
  display: block;
  padding: 10px 0;
  transition: color 0.3s ease;
}

.menu-content a:hover {
  color: #666;
}
</style>
