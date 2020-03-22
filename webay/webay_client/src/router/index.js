import Vue from 'vue';
import VueRouter from 'vue-router';
import Ping from '../components/Ping.vue';
import DBTest from '../components/DBTest.vue';
import CreateUser from '../components/CreateUser.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/dbTest',
    name: 'DBTest',
    component: DBTest,
  },
  {
    path: '/ping',
    name: 'Ping',
    component: Ping,
  },
  {
    path: '/createUser',
    name: 'CreateUser',
    component: CreateUser,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
