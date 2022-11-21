import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import router from "./routers";
import Navbar from "./components/Navbar.vue";
import MainContent from "./components/mainContent.vue";
const app = createApp(App);
app.use(store);
app.use(BootstrapIconsPlugin);
app.use(router);
app.component("nav-bar", Navbar);
app.component("main-content", MainContent);

app.mount("#app");
