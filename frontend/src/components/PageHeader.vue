<template>
  <section>
    <div class="overlay" :style="cssVars"></div>
    <div class="fade-block"></div>
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
  data() {
    return { opacity: 0.2 };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

      const sectionHeight = document.querySelector("section").clientHeight;

      this.opacity = 0.2 + scrollTop / (sectionHeight * 0.6);
    },
  },
  computed: {
    cssVars() {
      return { "--opacity": this.opacity };
    },
  },
};
</script>

<style scoped lang="scss">
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
  height: 130vh;
  position: relative;
  background-image: url("../assets/images/header_hero.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

img {
  width: 100%;
  height: 100%;
  z-index: -1;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  opacity: var(--opacity);
}

.fade-block {
  width: 100%;
  height: 100px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
