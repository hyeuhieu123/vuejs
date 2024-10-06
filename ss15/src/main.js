// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";

const { createVuetify } = Vuetify;

const vuetify = createVuetify();
const app = createApp(App);
// createApp(App).mount("#app");
app.use(router).use(vuetify).mount("#app");
