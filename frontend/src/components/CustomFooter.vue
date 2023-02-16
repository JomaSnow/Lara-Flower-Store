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
              alt="instagram logo"
            /></div
        ></a>
        <a
          href="https://twitter.com/jomasnow"
          target="_blank"
          rel="noopener noreferrer"
          ><div>
            <img
              src="../assets/images/Logo_white.svg"
              alt="twitter logo"
            /></div
        ></a>
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-marcos-schmaltz-duda-a15234257/"
          target="_blank"
          rel="noopener noreferrer"
          ><div>
            <img src="../assets/images/linkedin.svg" alt="linkedin logo" /></div
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
@import "../styles.scss";
.fade-divider {
  margin: 0;
  width: 100%;
  height: 300px;
  background-color: $primaryColor;
  background: linear-gradient(
    180deg,
    rgba(43, 49, 28, 0) 0%,
    rgba(43, 49, 28, 1) 80%
  );
}
footer {
  z-index: 10;
  display: flex;
  flex-direction: row;
  background-color: $secondaryColor;
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
  border-left: 2px $primaryColor solid;
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
  color: $accentColor;
  border-bottom: 2px $primaryColor solid;
  &:nth-last-child(1) {
    border-bottom: none;
  }
  &:hover {
    background-color: $accentColor;
    color: $primaryColor;
  }
}
a {
  div {
    border-radius: 100%;
    border: 1px solid $primaryColor;
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
  &:hover {
    div {
      border: 1px solid $accentColor;
    }
    img {
      filter: brightness(0) saturate(100%) invert(46%) sepia(25%)
        saturate(1012%) hue-rotate(314deg) brightness(91%) contrast(87%);
    }
  }
}
span {
  color: $primaryColor;
  text-align: center;
  font-size: 18px;
}
</style>
