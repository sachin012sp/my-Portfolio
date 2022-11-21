<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <div class="close">
      <router-link to="/">
        <button
          type="button"
          class="btn-close btn-close-white"
          aria-label="Close"
        ></button>
      </router-link>
    </div>
    <div class="description">
      <p class="text-white-50">Showcasing some of my best work</p>
      <h2>Portfolio</h2>
      <div class="animated-bar"></div>
    </div>
    <div class="projects">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 col-xs-12"
            v-for="project in projects"
            :key="project.live"
          >
            <div class="project">
              <!-- <img src="../assets/Myprojects/Bondi.png" alt="" /> -->
              <img :src="require('../assets/Myprojects/' + project.image)" />
              <div class="icons">
                <a :href="project.live" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                      d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"
                    />
                  </svg>
                </a>
                <a :href="project.source" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Portfolio",
  data() {
    return {
      projects: [
        {
          image: "Bondi.png",
          live: "https://lidyaboshra.github.io/Bondi_Template/",
          source: "https://github.com/Lidyaboshra/Bondi_Template",
        },
        {
          image: "ecommerce-product-page-main.png",
          live: "https://lidyaboshra.github.io/ecommerce-product-page-main/",
          source:
            "https://github.com/Lidyaboshra/ecommerce-product-page-main/tree/gh-pages",
        },
        {
          image: "ecommerce-template.png",
          live: "https://lidyaboshra.github.io/Ecommerce-Website/",
          source:
            "https://github.com/Lidyaboshra/Ecommerce-Website/tree/gh-pages",
        },
        {
          image: "FAQ-accordion-card.png",
          live: "https://lidyaboshra.github.io/FAQ_accordion_card/",
          source: "https://github.com/Lidyaboshra/FAQ_accordion_card",
        },
        {
          image: "ThirdTemplate.png",
          live: "https://lidyaboshra.github.io/Html_Css_Template3/",
          source: "https://github.com/Lidyaboshra/Html_Css_Template3",
        },
        {
          image: "Template-Two.png",
          live: "https://lidyaboshra.github.io/Html_Css_Template2/",
          source: "https://github.com/Lidyaboshra/Html_Css_Template2",
        },
        {
          image: "Frontend-Mentor-Job-Listings.png",
          live: "https://lidyaboshra.github.io/Job_listings_with_filtering/",
          source: "https://github.com/Lidyaboshra/Job_listings_with_filtering",
        },
        {
          image: "Todo.png",
          live: "https://lidyaboshra.github.io/ToDo_App/",
          source: "https://github.com/Lidyaboshra/ToDo_App",
        },
        {
          image: "Interactive-rating.png",
          live: "https://lidyaboshra.github.io/Interactive_rating/",
          source: "https://github.com/Lidyaboshra/Interactive_rating",
        },
      ],
    };
  },
};
</script>
<style scoped>
section {
  z-index: 999;
  background-color: #111;
  width: 100%;
  position: absolute;
  min-height: 100vh;
  user-select: none;
}

.close {
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  background-color: #111;
  z-index: 99;
}
.close button {
  font-size: 25px;
  opacity: 1;
  margin: 23px 70px;
}
.description {
  margin-bottom: 83px;
  text-align: center;
  margin-top: 90px;
}
.description p {
  font-size: 14px;
  margin-bottom: 17px;
}
.description h2 {
  font-size: 46px;
  margin-bottom: 37px;
  font-weight: 700;
  letter-spacing: -0.25px;
  line-height: 100%;
  color: #f0f0f0;
}
.animated-bar {
  content: "";
  display: block;
  height: 4px;
  left: 0;
  margin: 0 auto 0 auto;
  position: relative;
  right: 0;
  width: 75px;
  background-color: #009e66;
}
.animated-bar::before,
.animated-bar::after {
  animation: barAnimation 3s infinite linear;
  background-color: #101010;
  content: "";
  height: 100%;
  position: absolute;
  top: 0;
  width: 4px;
  left: 8px;
}

@keyframes barAnimation {
  100% {
    left: 100%;
  }
}
.projects {
  margin-bottom: 50px;
}
.projects .project {
  margin-bottom: 30px;
  margin-right: 30px;
  width: 400px;
  height: 250px;
  background-color: #161616;
  position: relative;
  transition: 0.3s;
}

.projects .project:hover {
  content: "";
  background-color: rgb(34 33 33);
  width: 400px;
  height: 250px;
}
.projects .project img {
  width: 400px;
  height: 250px;
  position: relative;
  left: 50px;
  top: 60%;
  transform: translate(-50px, -150px);
  transition: 0.3s;
  object-fit: cover;
}
.projects .project:hover img {
  position: relative;
  content: "";
  filter: brightness(0.5);
  width: 300px;
  height: 185px;
  position: absolute;
  left: 0;
  top: 68%;
  transform: translate(-32px, -137px);
}
@media (max-width: 1399px) {
  .projects .project,
  .projects .project:hover,
  .projects .project img {
    width: 100%;
  }
  .projects .project:hover img {
    width: 200px;
  }
}

.projects .project .icons {
  width: 50px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-8px, -60px);
}
.projects .project .icons svg {
  margin-bottom: 50px;
  width: 30px;
  height: 30px;
  fill: #009e66;
  cursor: pointer;
  display: none;
}
.projects .project:hover svg {
  display: block;
}
</style>
