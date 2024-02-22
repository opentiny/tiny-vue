import TinyThemeTool from '@opentiny/vue-theme/theme-tool'
import { tinyAuroraTheme, tinySmbTheme, tinyInfinityTheme } from '@opentiny/vue-theme/theme'
import { hooks } from '@opentiny/vue-common'
import { Notify } from '@opentiny/vue'

let isShowTip = false
function showTip() {
  Notify({
    type: 'info',
    title: '请注意',
    message: '主题切换成功，如有部分主题样式不生效，请尝试手动刷新页面即可',
    position: 'top-right',
    duration: 3000
  })
  isShowTip = true
}

export function useTheme() {
  const theme = new TinyThemeTool()
  const currThemeLabel = hooks.ref('tiny-default-theme')
  const lastThemeKey = localStorage.getItem('tinyThemeToolkey')

  const THEME_MAP = {
    'tiny-aurora-theme': tinyAuroraTheme,
    'tiny-smb-theme': tinySmbTheme,
    'tiny-infinity-theme': tinyInfinityTheme
  }

  const changeTheme = ({ vm }) => {
    localStorage.setItem('tinyThemeToolkey', vm.label)
    theme.changeTheme(THEME_MAP[vm.label])
    currThemeLabel.value = vm.label
    // 若部分主题样式切换不生效，第一次则提示用户需要手动刷新
    if (!isShowTip) {
      showTip()
    }
  }

  // 切换上次缓存的主题
  if (THEME_MAP[lastThemeKey]) {
    theme.changeTheme(THEME_MAP[lastThemeKey])
    currThemeLabel.value = lastThemeKey
  }

  return {
    changeTheme,
    currThemeLabel
  }
}
