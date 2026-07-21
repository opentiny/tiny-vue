import { svg } from '@opentiny/vue-common'
import MobileRadioSelected from '@opentiny/vue-theme-saas/svgs/mobile-radio-selected.svg'

const iconFn = () =>
  svg({ name: 'IconMobileRadioSelected', component: MobileRadioSelected, filledComponent: MobileRadioSelected })()

iconFn.__flag = { 'svgName': 'mobile-radio-selected', 'hasFill': false }
export default iconFn
