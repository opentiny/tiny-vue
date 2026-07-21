import { svg } from '@opentiny/vue-common'
import MobileCheckbox from '@opentiny/vue-theme-saas/svgs/mobile-checkbox.svg'

const iconFn = () => svg({ name: 'IconMobileCheckbox', component: MobileCheckbox, filledComponent: MobileCheckbox })()

iconFn.__flag = { 'svgName': 'mobile-checkbox', 'hasFill': false }
export default iconFn
