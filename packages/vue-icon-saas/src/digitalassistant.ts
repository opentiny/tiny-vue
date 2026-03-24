import { svg } from '@opentiny/vue-common'
import Digitalassistant from '@opentiny/vue-theme-saas/svgs/digitalassistant.svg'
import DigitalassistantFilled from '@opentiny/vue-theme-saas/svgs/digitalassistant-filled.svg'

const iconFn = () =>
  svg({ name: 'IconDigitalassistant', component: Digitalassistant, filledComponent: DigitalassistantFilled })()
iconFn.__flag = { 'svgName': 'digitalassistant', 'hasFill': true }
export default iconFn
