<template>
  <div class="fade-divider"></div>
  <footer>
    <div class="nav-area">
      <router-link class="nav-link" to="/">início</router-link>
      <router-link class="nav-link" to="about">sobre</router-link>
      <router-link class="nav-link" to="products">produtos</router-link>
      <router-link class="nav-link" to="login">login</router-link>
    </div>
    <div class="socials">
      <div class="credits">
        <span>Projeto por João Duda.</span>
        <span>Siga nas redes sociais.</span>
      </div>
      <div class="icons">
        <a
          href="https://github.com/JomaSnow"
          target="_blank"
          rel="noopener noreferrer"
          ><div>
            <img
              src="../assets/images/github-mark-white.svg"
              alt="github logo"
            /></div
        ></a>
        <a
          href="https://www.instagram.com/jomasnow/"
          target="_blank"
          rel="noopener noreferrer"
          ><div>
            <img
              src="../assets/images/Instagram_Glyph_White.svg"
              alt="github logo"
            /></div
        ></a>
        <a
          href="https://twitter.com/jomasnow"
          target="_blank"
          rel="noopener noreferrer"
          ><div>
            <img src="../assets/images/Logo_white.svg" alt="github logo" /></div
        ></a>
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-marcos-schmaltz-duda-a15234257/"
          target="_blank"
          rel="noopener noreferrer"
          ><div>
            <img src="../assets/images/LI-In-Bug.png" alt="github logo" /></div
        ></a>
      </div>
      <span>&copy; 2023</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CustomFooter",
};
</script>

<style scoped lang="scss">
.fade-divider {
  margin: 150px 0 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}
footer {
  display: flex;
  flex-direction: row;
  background-color: black;
  padding: 0 0 40px;
}
.nav-area {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.socials {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-left: 2px white solid;
  align-items: center;
  flex: 1;
}
.credits {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icons {
  display: flex;
  width: 65%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.nav-link {
  padding: 0 0 0 80px;
  font-family: Italiana, serif;
  font-size: 110px;
  white-space: nowrap;
  text-decoration: none;
  color: white;
  border-bottom: 2px white solid;
  &:nth-last-child(1) {
    border-bottom: none;
  }
}
a {
  div {
    border-radius: 100%;
    border: 1px solid white;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;

    img {
      height: 80px;
      width: 80px;
      border-radius: inherit;
      object-fit: contain;
    }
  }
}
span {
  color: white;
  text-align: center;
  font-size: 18px;
}
</style>
