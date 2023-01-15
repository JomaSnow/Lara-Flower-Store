<template>
  <main>
    <!-- <CustomNavbar /> -->
    <PageHeader />
    <ProductArea />
    <CustomFooter />
  </main>
</template>

<script>
// import CustomNavbar from "@/components/CustomNavbar.vue";
import PageHeader from "@/components/PageHeader.vue";
import ProductArea from "@/components/ProductArea.vue";
import CustomFooter from "@/components/CustomFooter.vue";

export default {
  name: "ProductPage",
  components: {
    // CustomNavbar,
    PageHeader,
    ProductArea,
    CustomFooter,
  },
};
</script>

<style scoped lang="scss">
@import "../styles.scss";
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
