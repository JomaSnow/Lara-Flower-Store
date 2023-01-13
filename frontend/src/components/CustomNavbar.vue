<template>
  <nav></nav>
</template>

<script>
export default {
  name: "CustomNavbar",
};
</script>

<style scoped lang="scss">
@import "../styles.scss";
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $navbarHeight;
  background-color: lightgray;
  opacity: 0.6;
  display: flex;
}
</style>
