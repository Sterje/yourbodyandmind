<template>
  <SandraMobile v-if="isMobile" />
  <SandraDesktop v-else />
</template>

<script setup lang="ts">
import { computed } from "vue";
import useViewPort from "../composables/composables";
import SandraMobile from "./mobile/SandraMobile.vue";
import SandraDesktop from "./desktop/SandraDesktop.vue";

const { width } = useViewPort();
const isMobile = computed(() => width.value < 768);
</script>
