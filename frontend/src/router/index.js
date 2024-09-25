import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/contents/Home.vue';
import About from '../views/contents/About.vue';
<<<<<<< Updated upstream
import BizDetail from '../views/contents/biz_detail/BizDetail.vue';
import BusinessEvents from '../views/contents/biz_detail/BusinessEvents.vue';
import BusinessReviews from '../views/contents/biz_detail/BusinessReviews.vue';
import BusinessQA from '../views/contents/biz_detail/BusinessQA.vue';
=======
import RequestWrite from '@/components/request/RequestWrite.vue';
>>>>>>> Stashed changes

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
<<<<<<< Updated upstream
    path: '/api/v1/companies/:id',
    name: 'BizDetail',
    component: BizDetail
  },
  {
    path: '/business/:id/events',
    name: 'BusinessEvents',
    component: BusinessEvents
  },
  {
    path: '/business/:id/reviews',
    name: 'BusinessReviews',
    component: BusinessReviews
  },
  {
    path: '/business/:id/qa',
    name: 'BusinessQA',
    component: BusinessQA
=======
    path: '/request',
    name: 'request',
    component: RequestWrite,
>>>>>>> Stashed changes
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;