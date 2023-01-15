<template>
  <div
    class="card"
    @mousemove.prevent="moveCard"
    @mouseout.prevent="resetCard"
  ></div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    title: {
      type: String,
      default: "Card",
    },
    imgPath: String,
  },
  methods: {
    moveCard(event) {
      const position = event.target.getBoundingClientRect();
      const x =
        event.pageX - window.scrollX - position.left - position.width / 2;
      const y =
        event.pageY - window.scrollY - position.top - position.height / 2;

      event.target.style.transform =
        "translate(" + x * 0.1 + "px, " + y * 0.1 + "px)";
    },

    resetCard(event) {
      event.target.style.transform = "translate(0px, 0px)";
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: saddlebrown;
  height: 600px;
  width: 450px;
  margin: 20px 50px 80px;
  transform: translate(0px, 0px);

  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  /* transition-timing-function: ease-out; */
}
</style>
