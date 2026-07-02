<template>
  <nav class="navbar-desktop">
    <div class="logo-container">
      <RouterLink to="/">
        <div class="logo">
          <img
            src="../../assets/logotransp3.png"
            alt="Your Body and Mind Logo"
            class="logo-image"
          />
        </div>
      </RouterLink>
    </div>
  </nav>
</template>
<script setup lang="ts"></script>
<style scoped>
.navbar-desktop {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* padding: 1rem 2rem; */
  background-color: #f5b042;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-image {
  height: 15rem;
  width: auto;
}
</style>
