import { svg } from '@opentiny/vue-common'
import MobileErrorWhite from '@opentiny/vue-theme-saas/svgs/mobile-error-white.svg'

const iconFn = () =>
  svg({ name: 'IconMobileErrorWhite', component: MobileErrorWhite, filledComponent: MobileErrorWhite })()

iconFn.__flag = { 'svgName': 'mobile-error-white', 'hasFill': false }
export default iconFn
