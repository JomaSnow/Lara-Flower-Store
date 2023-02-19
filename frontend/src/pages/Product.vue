<template>
  <PageHeader />
  <CustomLoader v-if="loading" />
  <ProductArea
    v-if="!loading && products.length > 0"
    v-bind:products="products"
  />
  <CustomSpan :text="this.spanMsg" :isError="this.loadErr" />
</template>

<script>
import { getAllProducts } from "@/api/products_functions";
import PageHeader from "@/components/PageHeader.vue";
import ProductArea from "@/components/ProductArea.vue";
import CustomLoader from "@/components/CustomLoader.vue";
import CustomSpan from "@/components/CustomSpan.vue";

export default {
  name: "ProductPage",
  components: {
    PageHeader,
    ProductArea,
    CustomLoader,
    CustomSpan,
  },
  data() {
    return {
      products: [],
      loading: true,
      loadErr: false,
      spanMsg: "Carregando produtos...",
    };
  },
  mounted() {
    getAllProducts()
      .then((res) => {
        this.products = res;
        this.spanMsg = "Por enquanto isso é tudo.";
      })
      .catch((err) => {
        this.loadErr = true;
        this.spanMsg = err;
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>

<style scoped lang="scss"></style>
