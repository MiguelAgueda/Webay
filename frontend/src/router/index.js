import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import SignUp from '../components/SignUp.vue';
import Login from '../components/Login.vue';
import Ping from '../components/Ping.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/ping',
    name: 'Ping',
    component: Ping
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
