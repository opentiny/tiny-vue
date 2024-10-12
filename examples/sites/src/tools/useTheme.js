import { watch, computed } from 'vue'
import TinyThemeTool from '@opentiny/vue-theme/theme-tool'
import { hooks } from '@opentiny/vue-common'
import designSmbConfig from '@opentiny/vue-design-smb'
import designSaasConfig from '@opentiny/vue-design-saas'
import { router } from '@/router'
import { appData } from './appData'
import {
  THEME_ROUTE_MAP,
  CURRENT_THEME_KEY,
  DEFAULT_THEME,
  AURORA_THEME,
  SMB_THEME,
  INFINITY_THEME,
  getKeyByValue
} from '../const'
import glaciers from '@/assets/images/glaciers.png'
import glaciersIcon from '@/assets/images/glaciers-icon.png'

import infinitely from '@/assets/images/Infinitely.png'
import infinitelyIcon from '@/assets/images/Infinitely-icon.png'

import oceanic from '@/assets/images/oceanic.png'
import oceanicIcon from '@/assets/images/oceanic-icon.png'

import starrySky from '@/assets/images/starry-sky.png'
import starrySkyIcon from '@/assets/images/starry-sky-icon.png'

const themeMap = {
  [DEFAULT_THEME]: null,
  [AURORA_THEME]: null,
  [SMB_THEME]: null,
  [INFINITY_THEME]: null
}

const isEn = appData.lang === 'enUS'

const themeData = [
  {
    value: [DEFAULT_THEME],
    label: isEn ? 'Default Theme' : '冰川主题',
    tips: isEn ? 'Accurate, Efficient, Distinct' : '精准、高效、清晰',
    icon: glaciersIcon,
    bgImage: glaciers
  },
  {
    value: [SMB_THEME],
    label: isEn ? 'Star Theme' : '星空主题',
    tips: isEn ? 'Leading, Innovative, Reliable' : '领先、创新、信赖',
    icon: starrySkyIcon,
    bgImage: starrySky
  },
  {
    value: [AURORA_THEME],
    label: isEn ? 'Ocean Theme' : '海洋主题',
    tips: isEn ? 'Simple, Agile, Delightful' : '简约、敏捷、愉悦',
    icon: oceanicIcon,
    bgImage: oceanic
  },
  {
    value: [INFINITY_THEME],
    label: isEn ? 'Infinity Theme' : '无限主题',
    tips: isEn ? 'Creative, Scientific, Efficient' : '创造、科学、高效',
    icon: infinitelyIcon,
    bgImage: infinitely
  }
]

const designConfigMap = {
  [DEFAULT_THEME]: designSmbConfig,
  [INFINITY_THEME]: designSmbConfig,
  [AURORA_THEME]: designSmbConfig,
  [SMB_THEME]: designSmbConfig
}

const theme = new TinyThemeTool()

const defaultThemeKey = DEFAULT_THEME
const currentThemeKey = hooks.ref(defaultThemeKey)

watch(
  () => currentThemeKey.value,
  (newVal) => {
    localStorage.setItem(CURRENT_THEME_KEY, newVal)
    theme.changeTheme(themeMap[newVal])
  }
)

const designConfig = computed(() => {
  if (import.meta.env.VITE_TINY_THEME === 'saas') {
    return designSaasConfig
  }
  return designConfigMap[currentThemeKey.value]
})

const changeTheme = (themeKey) => {
  router.push({
    params: {
      theme: THEME_ROUTE_MAP[themeKey]
    },
    hash: router?.currentRoute.value.hash
  })
}

// 返回拷贝，防止原始数据被修改
const getThemeData = () => JSON.parse(JSON.stringify(themeData))

let initWatchRoute = false
const watchRoute = () => {
  if (initWatchRoute) {
    return
  }
  initWatchRoute = true
  watch(
    () => router.currentRoute.value.params.theme,
    (val) => {
      const themeKey = getKeyByValue(THEME_ROUTE_MAP, val)
      currentThemeKey.value = themeKey || defaultThemeKey
    }
  )
}

export default function useTheme() {
  watchRoute()
  return {
    getThemeData,
    changeTheme,
    currentThemeKey,
    designConfig,
    defaultTheme: THEME_ROUTE_MAP[defaultThemeKey]
  }
}
