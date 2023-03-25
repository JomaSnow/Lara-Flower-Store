<template>
  <div ref="cursor" class="cursor"></div>
</template>

<script>
export default {
  name: "CustomCursor",
  created() {
    window.addEventListener("mousemove", this.updatePosition);
  },
  unmounted() {
    window.removeEventListener("mousemove");
  },
  methods: {
    updatePosition(e) {
      this.$refs.cursor.style.top = e.pageY + "px";
      this.$refs.cursor.style.left = e.pageX + "px";
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles.scss";
.cursor {
  z-index: 999;
  width: 1.5rem;
  height: 1.5rem;
  background-color: $accentColor;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-35%, -15%);
  pointer-events: none;
  transition: all 0.2s ease-out;
}
</style>
