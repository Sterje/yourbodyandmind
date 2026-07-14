<template>
  <footer class="footer-mobile">
    <p>Järnvägsgatan 6, 645 43 Strängnäs</p>
    <p>Telefon: 0793-356491</p>
    <p>
      E-post:
      <a href="mailto:sandra@yourbodyandmind.se">sandra@yourbodyandmind.se</a>
    </p>
    <div class="social-icons">
      <a
        href="https://www.facebook.com/Ayurvediskabehandlingar"
        target="_blank"
      >
        <FontAwesomeIcon :icon="faFacebook" />
      </a>
      <a
        href="https://www.instagram.com/ayurvediskabehandlingar/"
        target="_blank"
      >
        <FontAwesomeIcon :icon="faInstagram" />
      </a>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
</script>
<style scoped>
.footer-mobile {
  /* background-color: #56483a; */
  color: #626161;
  text-align: center;
  padding: 1rem 0;
  padding-bottom: calc(1rem + env(safe-area-inset-bottom));
  margin-top: auto;
  width: 100%;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  line-height: 1.5;
}

.footer-mobile a {
  color: #626161;
  text-decoration: none;
}

.social-icons {
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icons a {
  color: #626161;
  font-size: 2rem;
  transition: color 0.3s ease;
  margin-bottom: 1rem;
}
</style>
