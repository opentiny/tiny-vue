import { svg } from '@opentiny/vue-common'
import Mobile from '@opentiny/vue-theme-saas/svgs/mobile.svg'
import MobileFilled from '@opentiny/vue-theme-saas/svgs/mobile-filled.svg'

const iconFn = () => svg({ name: 'IconMobile', component: Mobile, filledComponent: MobileFilled })()
iconFn.__flag = { 'svgName': 'mobile', 'hasFill': true }
export default iconFn
