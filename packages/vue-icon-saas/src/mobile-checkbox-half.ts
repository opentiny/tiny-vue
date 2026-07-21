import { svg } from '@opentiny/vue-common'
import MobileCheckboxHalf from '@opentiny/vue-theme-saas/svgs/mobile-checkbox-half.svg'
import MobileCheckboxHalfFilled from '@opentiny/vue-theme-saas/svgs/mobile-checkbox-half-filled.svg'

const iconFn = () =>
  svg({ name: 'IconMobileCheckboxHalf', component: MobileCheckboxHalf, filledComponent: MobileCheckboxHalfFilled })()
iconFn.__flag = { 'svgName': 'mobile-checkbox-half', 'hasFill': true }
export default iconFn
