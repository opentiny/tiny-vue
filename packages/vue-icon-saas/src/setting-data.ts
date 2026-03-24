import { svg } from '@opentiny/vue-common'
import SettingData from '@opentiny/vue-theme-saas/svgs/setting-data.svg'
import SettingDataFilled from '@opentiny/vue-theme-saas/svgs/setting-data-filled.svg'

const iconFn = () => svg({ name: 'IconSettingData', component: SettingData, filledComponent: SettingDataFilled })()
iconFn.__flag = { 'svgName': 'setting-data', 'hasFill': true }
export default iconFn
