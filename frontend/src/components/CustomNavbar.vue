<template>
  <nav @mouseenter="this.showNavbar = true">
    <div class="logo-area">
      <router-link to="/"
        ><img src="../assets/images/LI-Logo.png" alt="Lara Flower Store Logo"
      /></router-link>
    </div>
    <div
      class="nav-bg"
      :class="{ hidden: !this.showNavbar, visible: this.showNavbar }"
    >
      <div class="links-area">
        <div class="nav-link">
          <div class="nav-link-bg"></div>
          <router-link to="/">início</router-link>
        </div>
        <div class="nav-link">
          <div class="nav-link-bg"></div>
          <router-link to="about">sobre</router-link>
        </div>
        <div class="nav-link">
          <div class="nav-link-bg"></div>
          <router-link to="products">produtos</router-link>
        </div>
        <div class="nav-link">
          <div class="nav-link-bg"></div>
          <router-link to="login">login</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CustomNavbar",
  data() {
    return {
      lastPos: window.scrollY || document.documentElement.scrollTop,
      showNavbar: true,
    };
  },
  created() {
    window.addEventListener("scroll", this.shouldShow);
  },
  unmounted() {
    window.removeEventListener("scroll", this.shouldShow);
  },
  methods: {
    shouldShow() {
      const currentPos = window.scrollY;
      const startAt = 400;
      if (currentPos > this.lastPos) {
        if (currentPos < startAt) {
          return;
        }
        this.showNavbar = false;
      } else if (currentPos < this.lastPos) {
        this.showNavbar = true;
      }
      this.lastPos = currentPos <= 0 ? 0 : currentPos;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles.scss";
nav {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: $navbarHeight;
  background-color: transparent;
}

.nav-bg {
  background-color: $secondaryColor;
  opacity: 1;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0 80px;
  width: 100%;
  height: 100%;
  transition: transform 0.4s ease;
}

.hidden {
  transform: translateY(-$navbarHeight);
}
.visible {
  transform: translateY(0);
}
.logo-area {
  z-index: 3;
  padding: 0 80px;
  top: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 200px;
  }
}
.links-area {
  flex: 4;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.nav-link {
  position: relative;
  margin: 0 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  .nav-link-bg {
    position: absolute;
    width: 0%;
    border: none;
    border-bottom: 1px $accentColor solid;
    transition: width 0.2s ease;
  }
  a {
    color: $primaryColor;
    text-decoration: none;
    padding: 2px 10px;
  }

  &:hover {
    .nav-link-bg {
      width: 100%;
    }
    a {
      color: $accentColor;
    }
  }
}
</style>
