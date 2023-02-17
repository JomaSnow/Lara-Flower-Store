<template>
  <PageHeader />
  <ProductArea v-bind:products="products" />
</template>

<script>
import { getAllProducts } from "@/api/products_functions";
import PageHeader from "@/components/PageHeader.vue";
import ProductArea from "@/components/ProductArea.vue";

export default {
  name: "ProductPage",
  components: {
    PageHeader,
    ProductArea,
  },
  data() {
    return {
      products: [],
      loading: true,
    };
  },
  mounted() {
    getAllProducts().then((res) => {
      this.products = res;
      this.loading = false;
    });
  },
};
</script>

<style scoped lang="scss"></style>
