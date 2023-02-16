<template>
  <CustomNavbar />
  <main>
    <router-view></router-view>
  </main>
  <CustomFooter />
</template>

<script>
import CustomNavbar from "./components/CustomNavbar.vue";
import CustomFooter from "./components/CustomFooter.vue";

export default {
  name: "App",
  components: {
    CustomNavbar,
    CustomFooter,
  },
};
</script>

<style lang="scss">
@import "./styles.scss";

@font-face {
  font-family: "Italiana";
  src: local("Italiana"),
    url(./assets/fonts/Italiana-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Open-Sans";
  src: local("Open-Sans"),
    url("./assets/fonts/OpenSans-VariableFont_wdth\,wght.ttf")
      format("truetype");
}
html {
  background-color: $primaryColor;
}

* {
  font-family: Open-Sans, Helvetica, Arial, sans-serif;
  font-weight: normal;
  margin: 0;
  padding: 0;
  position: relative;
  box-sizing: border-box;
}

main {
  width: 100%;
  background-color: $primaryColor;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
