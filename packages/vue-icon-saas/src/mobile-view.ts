import { svg } from '@opentiny/vue-common'
import MobileView from '@opentiny/vue-theme-saas/svgs/mobile-view.svg'

const iconFn = () => svg({ name: 'IconMobileView', component: MobileView, filledComponent: MobileView })()

iconFn.__flag = { 'svgName': 'mobile-view', 'hasFill': false }
export default iconFn
