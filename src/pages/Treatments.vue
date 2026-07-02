<template>
  <TreatmentsMobile v-if="isMobile" />
  <TreatmentsDesktop v-else />
</template>

<script setup lang="ts">
import { computed } from "vue";
import useViewPort from "../composables/composables";
import TreatmentsMobile from "./mobile/TreatmentsMobile.vue";
import TreatmentsDesktop from "./desktop/TreatmentsDesktop.vue";

const { width } = useViewPort();
const isMobile = computed(() => width.value < 768);
</script>
