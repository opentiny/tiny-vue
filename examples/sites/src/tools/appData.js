import { reactive, computed, watchEffect } from 'vue'
import { useAutoStore } from './storage'
import { useMediaQuery } from './useMediaQuery'
import { ZH_CN_LANG, EN_US_LANG, LANG_KEY, LANG_PATH_MAP } from '../const'

const zhPath = LANG_PATH_MAP[ZH_CN_LANG]
const enPath = LANG_PATH_MAP[EN_US_LANG]
const appData = reactive({
  lang: useAutoStore('local', LANG_KEY, ZH_CN_LANG),
  theme: useAutoStore('local', '_theme', 'light'),
  bpState: useMediaQuery([640, 1024, 1280]).matches // 3点4区间， bp0,bp1,bp2,bp3
})
const isZhCn = computed(() => appData.lang === ZH_CN_LANG)
let appFn = {
  toggleLang() {
    let url = location.href
    if (appData.lang === ZH_CN_LANG) {
      url = location.href.replace(zhPath, enPath)
    } else {
      url = location.href.replace(enPath, zhPath)
    }
    appData.lang = appData.lang === ZH_CN_LANG ? EN_US_LANG : ZH_CN_LANG
    // router.push(url)
    location.replace(url)
  },
  toggleTheme() {
    appData.theme = appData.theme === 'light' ? 'dark' : 'light'
  }
}
// 减少页面处理
watchEffect(() => {
  document.body.classList.remove('theme-light', 'theme-dark')
  document.body.classList.add('theme-' + appData.theme)
})
// 为了和tiny-vue共享同一个响应变量
window.appData = appData
export { appData, appFn, isZhCn }
