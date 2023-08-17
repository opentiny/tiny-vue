import { watch, computed } from 'vue'
import TinyThemeTool from '@opentiny/vue-theme/theme-tool'
import { tinyAuroraTheme, tinySmbTheme, tinyInfinityTheme } from '@opentiny/vue-theme/theme'
import { hooks } from '@opentiny/vue-common'
import { Notify } from '@opentiny/vue'
import designSmbConfig from '@opentiny/vue-design-smb';
import designAuroraConfig from '@opentiny/vue-design-aurora';
import { appData } from './appData'

const CURRENT_THEME_KEY = 'tiny-current-theme'

const isEn = appData.lang === 'enUS'

const themeData = [
  { value: 'tiny-default-theme', label: isEn ? 'Default Theme' : '默认主题' },
  { value: 'tiny-infinity-theme', label: isEn ? 'Infinity Theme' : '无限主题' },
  { value: 'tiny-aurora-theme', label: isEn ? 'Aurora Theme' : 'Aurora 主题' },
  { value: 'tiny-smb-theme', label: isEn ? 'SMB Theme' : 'SMB 主题' }
]

const designConfigMap = {
  'tiny-default-theme': {},
  'tiny-infinity-theme': {},
  'tiny-aurora-theme': designAuroraConfig,
  'tiny-smb-theme': designSmbConfig
}
let isShowTip = false
function showTip() {
  Notify({
    type: 'info',
    title: '请注意',
    message: '主题切换成功，如有部分主题样式不生效，请尝试手动刷新页面即可',
    position: 'top-right',
    duration: 3000,
    verticalOffset: 200
  })
  isShowTip = true
}

export default function useTheme() {
  const theme = new TinyThemeTool()
  const lastThemeKey = localStorage.getItem(CURRENT_THEME_KEY)
  const currThemeLabel = hooks.ref(lastThemeKey || 'tiny-default-theme')
  const designConfig = computed(() => {
    return designConfigMap[currThemeLabel.value]
  })

  const THEME_MAP = {
    'tiny-aurora-theme': tinyAuroraTheme,
    'tiny-smb-theme': tinySmbTheme,
    'tiny-infinity-theme': tinyInfinityTheme
  }

  const changeTheme = (themeValue) => {
    currThemeLabel.value = themeValue
  }

  watch(
    () => currThemeLabel.value,
    (newVal) => {
      localStorage.setItem(CURRENT_THEME_KEY, newVal)
      theme.changeTheme(THEME_MAP[newVal])
      // 若部分主题样式切换不生效，第一次则提示用户需要手动刷新
      if (!isShowTip) {
        showTip()
      }
    }
  )

  // 切换上次缓存的主题
  if (THEME_MAP[lastThemeKey]) {
    theme.changeTheme(THEME_MAP[lastThemeKey])
  }

  // 返回拷贝，防止原始数据被修改
  const getThemeData = () => JSON.parse(JSON.stringify(themeData))

  return {
    getThemeData,
    changeTheme,
    currThemeLabel,
    designConfig
  }
}
