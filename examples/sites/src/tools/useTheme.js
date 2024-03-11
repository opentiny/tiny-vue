import { watch, computed } from 'vue'
import TinyThemeTool from '@opentiny/vue-theme/theme-tool'
import { tinyAuroraTheme, tinySmbTheme, tinyInfinityTheme } from '@opentiny/vue-theme/theme'
import { hooks } from '@opentiny/vue-common'
import designSmbConfig from '@opentiny/vue-design-smb'
import designAuroraConfig from '@opentiny/vue-design-aurora'
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

const themeMap = {
  [DEFAULT_THEME]: null,
  [AURORA_THEME]: tinyAuroraTheme,
  [SMB_THEME]: tinySmbTheme,
  [INFINITY_THEME]: tinyInfinityTheme
}

const isEn = appData.lang === 'enUS'

const themeData = [
  { value: [DEFAULT_THEME], label: isEn ? 'Default Theme' : '默认主题' },
  { value: [INFINITY_THEME], label: isEn ? 'Infinity Theme' : '无限主题' },
  { value: [AURORA_THEME], label: isEn ? 'Aurora Theme' : 'Aurora 主题' },
  { value: [SMB_THEME], label: isEn ? 'SMB Theme' : 'SMB 主题' }
]

const designConfigMap = {
  [DEFAULT_THEME]: {},
  [INFINITY_THEME]: {},
  [AURORA_THEME]: designAuroraConfig,
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
    }
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
