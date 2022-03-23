import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import NaoRegistrado from "../views/NaoRegistrado.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      public: true
    }
  },
  {
    path: "/naoregistrado",
    name: "nao-registrado",
    component: NaoRegistrado,
    meta: {
      public: true
    }
  },
  // {
  //   path: "/perfil",
  //   name: "perfil",
  //   component: perfil
  // },
];

const router = createRouter({
  history: createWebHistory('/alurageek'),
  routes,
});

router.beforeEach((routeTo, routeFrom, next) => {
  if (!routeTo.meta.public && !localStorage.getItem("usuario")) {
    return next({ path: "/naoregistrado" });
  }
  next();
});

export default router;
