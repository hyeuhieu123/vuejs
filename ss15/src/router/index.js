import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../components/views/Home.vue";
import AboutView from "../components/views/About.vue";
import ContactView from "../components/views/Contact.vue";
// import UserDetail from "@/components/views/UserDetail.vue";
// import Procduct from "@/components/views/Procduct.vue";
import ProductReview from "@/components/views/ProductReview.vue";
import Excercise01 from "@/components/Excercise01.vue";
import Excercise02 from "@/components/Excercise02.vue";
import Excercise03 from "@/components/Excercise03.vue";
import Excercise04 from "@/components/Excercise04.vue";
import Excercise05 from "@/components/Excercise05.vue";
// import Home from "@/components/bt06/Home.vue";
// import Contact from "@/components/bt06/Contact.vue";
import Home from "@/components/bt07/Home.vue";
// import Product from "@/components/bt07/Product.vue";
import Detail from "@/components/bt07/Detail.vue";

const routes = [
  // { path: "/", component: Excercise01 },
  // { path: "/", component: Home },
  // { path: "/", component: Home },
  // { path: "/product", component: Product },
  // { path: "/detail", component: Detail },
  { path: "/dashboard", component: Dasboard },
  { path: "/product", component: Product },
  { path: "/account", component: Account },

  // { path: "/contact", component: Contact },
  { path: "/about", component: AboutView },
  // { path: "/contact", component: Excercise02 },
  // { path: "/user/:id", component: UserDetail },
  {
    path: "/user",
    children: [{ path: "userDetail/:id", component: UserDetail }],
    component: ListUser,
  },
  { path: "/register", component: Excercise03 },
  { path: "/login", component: Excercise04 },
  { path: "/:pathMatch(.*)*", component: NotFound },
  // {
  //   path: "/product",
  //   component: Procduct,
  //   children: [
  //     {
  //       path: "review",
  //       component: ProductReview,
  //     },
  //   ],
  // },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
