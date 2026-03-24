import { svg } from '@opentiny/vue-common'
import MobileRadio from '@opentiny/vue-theme-saas/svgs/mobile-radio.svg'
import MobileRadioFilled from '@opentiny/vue-theme-saas/svgs/mobile-radio-filled.svg'

const iconFn = () => svg({ name: 'IconMobileRadio', component: MobileRadio, filledComponent: MobileRadioFilled })()
iconFn.__flag = { 'svgName': 'mobile-radio', 'hasFill': true }
export default iconFn
