<template>
  <MainMobile v-if="isMobile" />
  <MainDesktop v-else />
</template>

<script setup lang="ts">
import { computed } from "vue";
import useViewPort from "../composables/composables";
import MainMobile from "./mobile/MainMobile.vue";
import MainDesktop from "./desktop/MainDesktop.vue";

const { width } = useViewPort();
const isMobile = computed(() => width.value < 768);
</script>
