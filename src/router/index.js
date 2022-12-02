import Vue from "vue";
import Router from "vue-router";

import Inicio from "../views/Inicio.vue";
import Busqueda from "../views/Busqueda.vue";
import Ventas from "../views/ventas.vue";
import Total from "../views/total.vue";
import NotFound from "../views/notFound.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Inicio
  },
  {
    path: "/busqueda",
    component: Busqueda
  },
  {
    path: "/ventas",
    component: Ventas
  },
  {
    path: "/total",
    component: Total
  },
  {
    path: "*",
    component: NotFound
  }
];

const router = new Router({
  mode: "history",
  routes
});

export default router;
