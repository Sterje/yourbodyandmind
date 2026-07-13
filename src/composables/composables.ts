import { ref, onMounted, onUnmounted } from "vue";

const useViewport = () => {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  const onResize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => {
    // Ensure initial values are set correctly
    width.value = window.innerWidth;
    height.value = window.innerHeight;
    window.addEventListener("resize", onResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });

  return { width, height };
};

export default useViewport;
