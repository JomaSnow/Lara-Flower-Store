<template>
  <section>
    <PageTitle text="Produtos" />
  </section>
</template>

<script>
import PageTitle from "./PageTitle.vue";

export default {
  name: "PageHeader",
  components: {
    PageTitle,
  },
};
</script>

<style scoped lang="scss">
section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
  height: 130vh;
  position: relative;
}
</style>
