<template>
  <img
    class="imgBg"
    :src="this.imgPath"
    :alt="this.product.name"
    :style="cssVars"
  />
  <div
    ref="el"
    class="card"
    @mousemove="moveCard"
    @mouseout="resetCard"
    :class="{ visible: this.isVisible }"
  >
    <div class="card-border-bg"></div>
    <img class="card-img" :src="this.imgPath" :alt="this.product.name" />
    <div class="card-title-area">
      <div class="card-price">
        <span>${{ this.product.price }}</span>
      </div>
      <span>{{ this.product.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      default() {
        return {
          id: 0,
          name: "Produto",
          description: "Descrição Produto",
          price: "999.99",
          stock: 99,
          created_at: "2023-01-30T07:59:39.000000Z",
          updated_at: "2023-01-30T07:59:39.000000Z",
        };
      },
    },
    imgPath: String,
  },
  data() {
    return { opacity: 0, isVisible: false };
  },
  created() {
    window.addEventListener("scroll", this.checkVisibility);
  },
  unmounted() {
    window.removeEventListener("scroll", this.checkVisibility);
  },
  computed: {
    cssVars() {
      return {
        "--opacity": this.opacity,
      };
    },
  },
  methods: {
    checkVisibility() {
      if (this.isVisible == true) {
        return;
      }
      const rect = this.$refs.el.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      this.isVisible = rect.top < viewportHeight * 0.85;
    },
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
@import "../styles.scss";
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
  opacity: 0;
  border-radius: 23px;
  background-color: $primaryColor;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 600px;
  width: 450px;
  margin: 20px 50px 80px;
  transform: translate(0px, 0px);
  box-shadow: -1px 4px 8px 4px rgba($color: #000000, $alpha: 0.25);

  transition-property: transform;
  transition-duration: 0.1s;
  transition-timing-function: linear;

  &:hover {
    cursor: pointer;

    .card-border-bg {
      width: calc(100% + 4px);
      height: calc(100% + 4px);
    }
  }
}

.visible {
  transition: opacity 0.6s ease;
  opacity: 1;
}

.card-border-bg {
  position: absolute;
  z-index: -1;
  width: 0%;
  height: 0%;
  border-radius: inherit;
  border: 5px solid $accentColor;
  transition: height 0.4s ease;
}

.card-title-area {
  background-color: $primaryColor;
  border-bottom-right-radius: 23px;
  border-bottom-left-radius: 23px;
  display: flex;
  position: relative;
  width: 100%;
  flex: 9;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > span {
    color: $secondaryColor;
    font-family: $bodyFont;
    font-size: 1.5rem;
  }
}
.card-price {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 8px;
  right: 0;
  top: -40px;
  height: 40px;
  min-width: 100px;
  border-top-left-radius: 9px;
  background-color: $accentColor;

  span {
    color: #ffffff;
    font-family: $bodyFont;
    font-weight: bold;
  }
}
.card-img {
  flex: 41;
  width: 100%;
  border-top-right-radius: 23px;
  border-top-left-radius: 23px;
}
</style>
