import { svg } from '@opentiny/vue-common'
import CheckProperties from '@opentiny/vue-theme-saas/svgs/check-properties.svg'
import CheckPropertiesFilled from '@opentiny/vue-theme-saas/svgs/check-properties-filled.svg'

const iconFn = () =>
  svg({ name: 'IconCheckProperties', component: CheckProperties, filledComponent: CheckPropertiesFilled })()
iconFn.__flag = { 'svgName': 'check-properties', 'hasFill': true }
export default iconFn
