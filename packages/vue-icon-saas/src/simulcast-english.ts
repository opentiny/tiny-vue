import { svg } from '@opentiny/vue-common'
import SimulcastEnglish from '@opentiny/vue-theme-saas/svgs/simulcast-english.svg'
import SimulcastEnglishFilled from '@opentiny/vue-theme-saas/svgs/simulcast-english-filled.svg'

const iconFn = () =>
  svg({ name: 'IconSimulcastEnglish', component: SimulcastEnglish, filledComponent: SimulcastEnglishFilled })()
iconFn.__flag = { 'svgName': 'simulcast-english', 'hasFill': true }
export default iconFn
