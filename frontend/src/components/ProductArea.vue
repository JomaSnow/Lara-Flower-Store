<template>
  <section>
    <ProductCard
      title="sad"
      imgPath="https://i.picsum.photos/id/491/1080/1080.jpg?hmac=sbOs1W6aVQp2zOfsBd83HSaOOcoecGP4jvfWK_Yx7uI"
    />
    <ProductCard
      title="sad"
      imgPath="https://i.picsum.photos/id/335/1080/1080.jpg?hmac=CnZ6yjqZf07B84U_0-HQzMIar3qd454CYl3VWMcbbMo"
    />
    <ProductCard
      title="sad"
      imgPath="https://i.picsum.photos/id/427/1080/1080.jpg?hmac=PLOPDGWH-r46QJfWdvySql51VA507HztungCXCbu0xs"
    />
    <ProductCard
      title="sad"
      imgPath="https://i.picsum.photos/id/126/1080/1080.jpg?hmac=8M0vN_90Z0fwoiXrIA8JD0lJ4B6hoZWH--RgeqOm9zo"
    />
    <ProductCard
      title="sad"
      imgPath="https://i.picsum.photos/id/491/1080/1080.jpg?hmac=sbOs1W6aVQp2zOfsBd83HSaOOcoecGP4jvfWK_Yx7uI"
    />
    <ProductCard
      title="sad"
      imgPath="https://i.picsum.photos/id/335/1080/1080.jpg?hmac=CnZ6yjqZf07B84U_0-HQzMIar3qd454CYl3VWMcbbMo"
    />
    <ProductCard
      title="sad"
      imgPath="https://i.picsum.photos/id/427/1080/1080.jpg?hmac=PLOPDGWH-r46QJfWdvySql51VA507HztungCXCbu0xs"
    />
    <ProductCard
      title="sad"
      imgPath="https://i.picsum.photos/id/126/1080/1080.jpg?hmac=8M0vN_90Z0fwoiXrIA8JD0lJ4B6hoZWH--RgeqOm9zo"
    />
    <ProductCard
      title="sad"
      imgPath="https://i.picsum.photos/id/491/1080/1080.jpg?hmac=sbOs1W6aVQp2zOfsBd83HSaOOcoecGP4jvfWK_Yx7uI"
    />
    <ProductCard
      title="sad"
      imgPath="https://i.picsum.photos/id/335/1080/1080.jpg?hmac=CnZ6yjqZf07B84U_0-HQzMIar3qd454CYl3VWMcbbMo"
    />
    <ProductCard
      title="sad"
      imgPath="https://i.picsum.photos/id/427/1080/1080.jpg?hmac=PLOPDGWH-r46QJfWdvySql51VA507HztungCXCbu0xs"
    />
    <ProductCard
      title="sad"
      imgPath="https://i.picsum.photos/id/126/1080/1080.jpg?hmac=8M0vN_90Z0fwoiXrIA8JD0lJ4B6hoZWH--RgeqOm9zo"
    />
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
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  padding: 200px 0 0;
  overflow: hidden;
}
</style>
