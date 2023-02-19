<template>
  <span :class="{ 'error-text': this.isError }">{{ this.text }}</span>
</template>

<script>
export default {
  name: "CustomSpan",
  props: {
    text: {
      type: String,
      default: "Carregando...",
    },
    isError: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles.scss";

span {
  color: $secondaryColor;
  font-size: 1.4rem;
  font-family: $bodyFont;
  text-align: center;
  margin: 0 0 300px 0;
}

.error-text {
  color: $accentColor;
}
</style>
