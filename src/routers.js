import About from "./components/About.vue";
import Resume from "./components/Resume.vue";
import Portfolio from "./components/Portfolio.vue";
import Contact from "./components/Contact.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "About",
    component: About,
    path: "/about",
  },
  {
    name: "Resume",
    component: Resume,
    path: "/resume",
  },
  {
    name: "Portfolio",
    component: Portfolio,
    path: "/portfolio",
  },
  {
    name: "Contact",
    component: Contact,
    path: "/contact",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
