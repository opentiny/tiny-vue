import { watch, computed } from 'vue'
import { hooks } from '@opentiny/vue-common'
import designSaasConfig from '@opentiny/vue-design-saas'
import designSMBConfig from '@opentiny/vue-design-smb'
import { router } from '@/router'
import { appData } from './appData'
import { CURRENT_THEME_KEY, DEFAULT_THEME, AURORA_THEME, OLD_THEME, themeToolValuesMap } from '../const'
import glaciers from '@/assets/images/glaciers.png'
import glaciersIcon from '@/assets/images/glaciers-icon.png'

import oceanic from '@/assets/images/oceanic.png'
import oceanicIcon from '@/assets/images/oceanic-icon.png'

import starrySky from '@/assets/images/starry-sky.png'
import starrySkyIcon from '@/assets/images/starry-sky-icon.png'
import TinyThemeTool from '@opentiny/vue-theme/theme-tool'

const isEn = appData.lang === 'enUS'

const themeData = [
  {
    value: [DEFAULT_THEME],
    label: isEn ? 'Star Theme' : '星空主题',
    tips: isEn ? 'Leading, Innovative, Reliable' : '领先、创新、信赖',
    icon: starrySkyIcon,
    bgImage: starrySky
  },
  {
    value: [OLD_THEME],
    label: isEn ? 'Default Theme' : '冰川主题',
    tips: isEn ? 'Accurate, Efficient, Distinct' : '精准、高效、清晰',
    icon: glaciersIcon,
    bgImage: glaciers
  },
  {
    value: [AURORA_THEME],
    label: isEn ? 'Ocean Theme' : '海洋主题',
    tips: isEn ? 'Simple, Agile, Delightful' : '简约、敏捷、愉悦',
    icon: oceanicIcon,
    bgImage: oceanic
  }
]

const currentThemeKey = hooks.ref(DEFAULT_THEME)

watch(
  () => currentThemeKey.value,
  (newVal) => {
    localStorage.setItem(CURRENT_THEME_KEY, newVal)
  }
)

const designConfig = computed(() => {
  if (import.meta.env.VITE_TINY_THEME === 'saas') {
    return designSaasConfig
  }
  if (router.currentRoute.value.params.theme === 'smb-theme') {
    return designSMBConfig
  }

  return {}
})

const changeTheme = (themeKey) => {
  router.push({
    params: {
      theme: themeKey
    },
    hash: router?.currentRoute.value.hash
  })
}

// 返回拷贝，防止原始数据被修改
const getThemeData = () => JSON.parse(JSON.stringify(themeData))

let initWatchRoute = false
let loadedTheme = false
const watchRoute = () => {
  if (initWatchRoute) {
    return
  }
  initWatchRoute = true
  watch(
    () => router.currentRoute.value.params.theme,
    (val) => {
      if (!loadedTheme && themeToolValuesMap[val]) {
        currentThemeKey.value = val
        const themeTool = new TinyThemeTool()
        themeTool.changeTheme(themeToolValuesMap[val])
        loadedTheme = true
      }
    }
  )
}

export default function useTheme() {
  !initWatchRoute && watchRoute()
  return {
    getThemeData,
    changeTheme,
    currentThemeKey,
    designConfig,
    defaultTheme: DEFAULT_THEME
  }
}
