import Vue from "vue";
import VueRouter from "vue-router";
import Blog from "../views/Blog.vue";
import Categories from "../views/Categories.vue";


Vue.use(VueRouter);

const routes = [
  {
      path : "/",
      name : "Blog",
      component : Blog
  },
  {
    path : "/categories",
    name : "Categories",
    component : Categories
},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
