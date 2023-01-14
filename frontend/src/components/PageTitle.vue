<template>
  <h1 id="titleElement">{{ this.title }}</h1>
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
  data() {
    return {
      title: this.text,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    for (let i = 0; i < 10; i++) {
      this.title = `${this.title} • ${this.title}`;
    }
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
  text-align: center;
}
</style>
