<template>
  <img class="imgBg" :src="this.imgPath" :alt="this.title" :style="cssVars" />
  <div ref="el" class="card" @mousemove="moveCard" @mouseout="resetCard">
    <img class="card-img" :src="this.imgPath" :alt="this.title" />
    <span>{{ this.title }}</span>
  </div>
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
  data() {
    return { opacity: 0 };
  },
  computed: {
    cssVars() {
      return {
        "--opacity": this.opacity,
      };
    },
  },
  methods: {
    moveCard(event) {
      this.opacity = 1;

      const position = this.$refs.el.getBoundingClientRect();
      const x =
        event.pageX - window.scrollX - position.left - position.width / 2;
      const y =
        event.pageY - window.scrollY - position.top - position.height / 2;

      this.$refs.el.style.transform =
        "translate(" + x * 0.2 + "px, " + y * 0.3 + "px)";
      this.$refs.el.style.transition = "transform 0s ease-out";
    },

    resetCard() {
      this.opacity = 0;

      this.$refs.el.style.transform = "translate(0px, 0px)";
      this.$refs.el.style.transition = "transform 0.15s ease-out";
    },
  },
};
</script>

<style scoped lang="scss">
.imgBg {
  position: fixed;
  z-index: 0;
  opacity: var(--opacity);
  transition: all 0.4s linear;
  width: 125%;
  height: 110vh;
  bottom: -2vh;
  left: -10%;
  right: 10%;
  filter: blur(8px) saturate(0.4);
}
.card {
  z-index: 1;
  border: 1px solid red;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 600px;
  width: 450px;
  margin: 20px 50px 80px;
  transform: translate(0px, 0px);

  transition-property: transform;
  transition-duration: 0.1s;
  transition-timing-function: linear;

  &:hover {
    cursor: pointer;
  }
}
.card-img {
  height: 80%;
  width: 100%;
}
</style>
