<template>
  <h1 id="titleElement">{{ text }}</h1>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    text: {
      type: String,
      default: "Título",
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const titleElement = document.querySelector("#titleElement");

      var scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

      titleElement.style.transform =
        "translate(" + -scrollTop * 1.5 + "px, " + scrollTop / 4 + "px)";
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles.scss";
#titleElement {
  position: absolute;
  font-family: Italiana, serif;
  font-size: 200px;
  white-space: nowrap;
}
</style>
