<template>
  <section>
    <ProductCard title="sad" />
    <ProductCard title="sad" />
    <ProductCard title="sad" />
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductArea",
  components: { ProductCard },
};
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}
</style>
