import { svg } from '@opentiny/vue-common'
import SimulcastChinese from '@opentiny/vue-theme-saas/svgs/simulcast-chinese.svg'
import SimulcastChineseFilled from '@opentiny/vue-theme-saas/svgs/simulcast-chinese-filled.svg'

const iconFn = () =>
  svg({ name: 'IconSimulcastChinese', component: SimulcastChinese, filledComponent: SimulcastChineseFilled })()
iconFn.__flag = { 'svgName': 'simulcast-chinese', 'hasFill': true }
export default iconFn
