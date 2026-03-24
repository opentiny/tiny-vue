import { svg } from '@opentiny/vue-common'
import Setting from '@opentiny/vue-theme-saas/svgs/setting.svg'
import SettingFilled from '@opentiny/vue-theme-saas/svgs/setting-filled.svg'

const iconFn = () => svg({ name: 'IconSetting', component: Setting, filledComponent: SettingFilled })()
iconFn.__flag = { 'svgName': 'setting', 'hasFill': true }
export default iconFn
