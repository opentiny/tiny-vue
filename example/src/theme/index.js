import { changeTheme, supportCssVars, enableCssVars } from '@opentiny/vue-theme-tool'
import theme from './cssvars'

if (!supportCssVars()) {
  enableCssVars().then(() => {
    changeTheme(theme)
  })
} else {
  changeTheme(theme)
}
