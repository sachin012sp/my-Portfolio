<template>
  <div class="loading" v-if="!loading">
    <div class="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>

  <router-view></router-view>
  <nav-bar></nav-bar>
  <main-content></main-content>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading: false,
    };
  },

  methods: {
    loadingCube() {
      const that = this;
      setTimeout(function () {
        that.loading = true;
      }, 4000);
    },
  },
  mounted() {
    this.loadingCube();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:wght@300;400;700&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #111;
  color: #fff;
  position: relative;
  font-family: "Poppins", sans-serif;
}
.loading {
  width: 100%;
  min-height: 100%;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
}
.spinner {
  width: 44px;
  height: 44px;
  animation: spinner-y0fdc1 2s infinite ease;
  transform-style: preserve-3d;
}

.spinner > div {
  background-color: #009e66;
  height: 100%;
  position: absolute;
  width: 100%;
  border: 2px solid #62a58e;
}

.spinner div:nth-of-type(1) {
  transform: translateZ(-22px) rotateY(180deg);
}

.spinner div:nth-of-type(2) {
  transform: rotateY(-270deg) translateX(50%);
  transform-origin: top right;
}

.spinner div:nth-of-type(3) {
  transform: rotateY(270deg) translateX(-50%);
  transform-origin: center left;
}

.spinner div:nth-of-type(4) {
  transform: rotateX(90deg) translateY(-50%);
  transform-origin: top center;
}

.spinner div:nth-of-type(5) {
  transform: rotateX(-90deg) translateY(50%);
  transform-origin: bottom center;
}

.spinner div:nth-of-type(6) {
  transform: translateZ(22px);
}

@keyframes spinner-y0fdc1 {
  0% {
    transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
  }

  50% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
  }

  100% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
  }
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #111;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #111;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #262626;
}
::selection {
  color: #fff;
  background: #009e66;
}
</style>
