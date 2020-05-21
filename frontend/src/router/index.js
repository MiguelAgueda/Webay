import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import SignUp from '@/components/SignUp.vue';
import Login from '@/components/Login.vue';
import Ping from '@/components/Ping.vue';
import Listings from '@/components/Listings.vue';
import NewListing from '@/components/NewListing.vue';
import EditListing from '@/components/EditListing.vue';
import Forum from '@/components/Forum.vue';
import ReplyPage from '@/components/ReplyPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/ping',
    name: 'Ping',
    component: Ping,
  },
  {
    path: '/forum',
    component: Forum,
  },
  {
    path: '/ReplyPage',
    component: ReplyPage,
  },
  {
    path: '/listings',
    component: Listings,
  },
  {
    path: '/new_listing',
    component: NewListing,
  },
  {
    path: '/edit_listing',
    component: EditListing,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
