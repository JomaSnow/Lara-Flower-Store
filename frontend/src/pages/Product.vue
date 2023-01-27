<template>
  <PageHeader />
  <ProductArea />
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import ProductArea from "@/components/ProductArea.vue";

export default {
  name: "ProductPage",
  components: {
    PageHeader,
    ProductArea,
  },
};
</script>

<style scoped lang="scss"></style>
