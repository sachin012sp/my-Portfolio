<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable prettier/prettier -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="../assets/bird.png" alt="Logo"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav" @click="chooseLink">
          <a class="nav-link"><router-link to="/about">About</router-link></a>
          <a class="nav-link"
            ><router-link to="/portfolio">Portfolio</router-link></a
          >
          <a class="nav-link"
            ><router-link to="/contact">Contact</router-link></a
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      navShow: false,
    };
  },
  methods: {
    chooseLink() {
      let nav = document.querySelector(".collapse");
      nav.classList.remove("show");
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:wght@300;400;700&display=swap");
nav {
  font-family: "Poppins", sans-serif;
}
.navbar-brand {
  color: #009e66;
}
.navbar-brand img {
  width: 200px;
  height: 100px;
}
.navbar {
  padding: 0 50px;
}

.navbar .navbar-nav .nav-link a {
  color: #e6e6e6;
  font-size: 15px;
  padding: 0;
  text-decoration: none;
}
.navbar .navbar-nav .nav-link:not(:last-child) {
  margin-right: 32px;
}
@media (max-width: 992px) {
  .navbar .navbar-nav .nav-link:not(:last-child) {
    margin-right: 0;
  }
}
button {
  background: white;
}

@media (max-width: 992px) {
  nav {
    position: relative;
  }
  .navbar-collapse {
    z-index: 999;
    position: absolute;
    top: 92px;
    right: 59px;
    background-color: #191919;
    padding: 8px 20px;
    width: 200px;
  }
  button[data-v-41458b80] {
    background: #009e66;
  }
}
@media (max-width: 405px) {
  nav {
    position: relative;
  }
  .navbar-collapse {
    z-index: 999;
    position: absolute;
    top: 163px;
    right: 36px;
    background-color: #191919;
    padding: 8px 20px;
    width: 200px;
  }
  .navbar > .container-fluid {
    justify-content: center;
  }
  .navbar-brand {
    margin-right: 0;
    padding-left: calc(var(--bs-gutter-x) * 0.5);
  }
}
</style>
