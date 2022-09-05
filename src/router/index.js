import{createRouter, createWebHistory} from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 주메뉴 개수만큼 {}
    {
      path: '/',
      name: 'Home',
      component: ''
    }
  ]
});
export default router;