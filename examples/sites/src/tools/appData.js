import { reactive, computed } from 'vue'
import { useAutoStore } from './storage'
import { useMediaQuery } from './useMediaQuery'
import { ZH_CN_LANG, LANG_KEY, LANG_PATH_MAP } from '../const'

const appData = reactive({
  lang: useAutoStore('local', LANG_KEY, ZH_CN_LANG),
  theme: useAutoStore('local', '_theme', 'light'),
  bpState: useMediaQuery([640, 1024, 1280]).matches // 3点4区间， bp0,bp1,bp2,bp3
})
const isZhCn = computed(() => appData.lang === ZH_CN_LANG)
const appFn = {
  toggleLang(name) {
    if (name !== appData.lang) {
      const oldLangPath = LANG_PATH_MAP[appData.lang] || 'zh-CN'
      const newLangPath = LANG_PATH_MAP[name] || 'en-US'

      appData.lang = name

      // 触发全局通信事件，由 App.vue 负责处理路由替换和 i18n 设置，彻底解耦并解决循环依赖
      window.dispatchEvent(
        new CustomEvent('tiny-toggle-lang', {
          detail: { name, oldLangPath, newLangPath }
        })
      )
    }
  },
  toggleTheme() {
    appData.theme = appData.theme === 'light' ? 'dark' : 'light'
  }
}
// 为了和tiny-vue共享同一个响应变量
window.appData = appData
window.appFn = appFn

export { appData, appFn, isZhCn }
