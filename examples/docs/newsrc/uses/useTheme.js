import TinyThemeTool from '@opentiny/vue-theme/theme-tool'
import { tinyAuroraTheme, tinySmbTheme } from '@opentiny/vue-theme/theme'
import { hooks } from '@opentiny/vue-common'

export function useTheme() {
  const theme = new TinyThemeTool()
  const currThemeLabel = hooks.ref('tiny-default-theme')
  const lastThemeKey = localStorage.getItem('tinyThemeToolkey')

  const THEME_MAP = {
    'tiny-aurora-theme': tinyAuroraTheme,
    'tiny-smb-theme': tinySmbTheme
  }

  const changeTheme = ({ vm }) => {
    localStorage.setItem('tinyThemeToolkey', vm.label)
    theme.changeTheme(THEME_MAP[vm.label])
    currThemeLabel.value = vm.label
    // 刷新页面保证对应的主题系统全局配置生效
    location.reload()
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
