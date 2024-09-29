import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/contents/Home.vue';
import About from '../views/contents/About.vue';
import QnaList from '@/views/qna/QnaList.vue';
import QnaPost from '@/views/qna/QnaPost.vue';
import QnaDetail from '@/views/qna/QnaDetail.vue';
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
    path:'/api/v1/qna',
    name:'queryQnaController',
    component: QnaList
  },
  {
    path:'/api/v1/qna/:id',
    name: 'queryQnaDetail',
    component: QnaDetail
  },
  {
    path: '/api/v1/qna/post',
    name: 'queryQnaPost',
    component: QnaPost
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;