import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/layout.vue'
import { LANG_KEY, LANG_PATH_MAP, ZH_CN_LANG } from './const'
import { $local } from './tools/storage'

const Components = () => import('@/views/components/components.vue')
const Docs = () => import('@/views/docs/docs.vue')
const Overview = () => import('@/views/overview.vue')
const Playground = () => import('../playground/App.vue')

const context = import.meta.env.VITE_CONTEXT

let routes = [
  // 演练场，无中英文
  {
    path: `${context}playground`,
    component: Playground
  },
  // 组件总览
  {
    path: `${context}:lang/overview`,
    component: Layout,
    children: [{ name: 'Overview', path: '', component: Overview, meta: { title: '组件总览 | TinyVue' } }]
  },
  // 文档
  {
    path: `${context}:lang/:theme/docs/:docId`,
    component: Layout,
    children: [{ name: 'Docs', path: '', component: Docs }]
  },
  // 组件
  {
    path: `${context}:lang/:theme/components/:cmpId`,
    component: Layout,
    children: [{ name: 'Components', path: '', component: Components }]
  },
  // 未匹配到目标地址时，进行路由重定向
  {
    path: '/:pathMatch(.*)*',
    redirect: () => {
      const lang = $local[LANG_KEY]
      const langPath = LANG_PATH_MAP[lang] || LANG_PATH_MAP[ZH_CN_LANG]
      return { path: `${context}${langPath}/overview` }
    }
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 为浏览器添加title
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})
export { router }
