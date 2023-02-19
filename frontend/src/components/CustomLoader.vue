<template>
  <flower-spinner :animation-duration="2500" :size="70" color="#b9605b" />
</template>

<script>
import { FlowerSpinner } from "epic-spinners";
export default {
  name: "CustomLoader",
  components: {
    FlowerSpinner,
  },
};
</script>

<style scoped lang="scss">
@import "../styles.scss";
</style>
