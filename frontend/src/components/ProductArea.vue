<template>
  <section>
    <ProductCard
      :product="this.products[0]"
      imgPath="https://fastly.picsum.photos/id/998/1080/1080.jpg?hmac=CxN3J6oVjTmz4-k4Ss7_0nVim2J5DaT-adGDe-psuo4"
    />
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductArea",
  components: { ProductCard },
  props: {
    products: Array,
  },
};
</script>

<style scoped lang="scss">
section {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  padding: 200px 0 300px;
  overflow: hidden;
}
</style>
