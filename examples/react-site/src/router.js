import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/views/layout/layout.vue';
import Components from '@/views/components/components.vue'
import DemoPage from '@/views/components/demoPage.vue'
import Docs from '@/views/docs/docs.vue'
import Overview from '@/views/overview.vue'

let routes = [
  // 组件总览
  {
    path: import.meta.env.VITE_CONTEXT + 'overview',
    component: Layout,
    name: 'overview',
    children: [{ path: '', component: Overview, meta: { title: '组件总览 | TinyVue' } }],
  },
  // 文档
  {
    path: import.meta.env.VITE_CONTEXT + 'docs/:docId',
    component: Layout,
    name: 'docs',
    children: [{ path: '', component: Docs }],
  },
  // 组件
  {
    path: import.meta.env.VITE_CONTEXT + 'components/:cmpId',
    component: Layout,
    name: 'components',
    children: [{ path: '', component: Components }],
  },
  //单组件示例
  {
    path: import.meta.env.VITE_CONTEXT + 'demoPage/:cmpId/:demoId',
    component: DemoPage,
    name: 'demoPage',
  },
  // 未匹配到目标地址时，进行路由重定向
  {
    path: '/:pathMatch(.*)*',
    redirect: { path: import.meta.env.VITE_CONTEXT + 'overview' },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 为浏览器添加title
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});
export { router };
