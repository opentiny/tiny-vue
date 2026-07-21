import { svg } from '@opentiny/vue-common'
import MobileSuccessWhite from '@opentiny/vue-theme-saas/svgs/mobile-success-white.svg'

const iconFn = () =>
  svg({ name: 'IconMobileSuccessWhite', component: MobileSuccessWhite, filledComponent: MobileSuccessWhite })()

iconFn.__flag = { 'svgName': 'mobile-success-white', 'hasFill': false }
export default iconFn
