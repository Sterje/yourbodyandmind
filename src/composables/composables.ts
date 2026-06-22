import { ref, onUnmounted } from "vue";

const useViewPort = () => {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  const onResize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  window.addEventListener("resize", onResize);

  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });

  return { width, height };
};

export default useViewPort;
