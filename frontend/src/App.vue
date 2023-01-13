<template>
  <Product />
</template>

<script>
import Product from "./pages/Product.vue";

export default {
  name: "App",
  components: {
    Product,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Italiana";
  src: local("Italiana"),
    url(./assets/fonts/Italiana-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Open-Sans";
  src: local("Open-Sans"),
    url("./assets/fonts/OpenSans-VariableFont_wdth\,wght.ttf")
      format("truetype");
}

* {
  font-family: Open-Sans, Helvetica, Arial, sans-serif;
  font-weight: normal;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
