<template>
  <footer class="footer-mobile">
    <p>Järnvägsgatan 6, 645 43 Strängnäs</p>
    <p>Telefon: 0793-356491</p>
    <p>
      Email:
      <a href="mailto:sandra@yourbodyandmind.se">sandra@yourbodyandmind.se</a>
    </p>
  </footer>
</template>
<script setup lang="ts"></script>
<style scoped>
.footer-mobile {
  background-color: #131313;
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
</style>
