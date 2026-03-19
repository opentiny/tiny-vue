import { svg } from '@opentiny/vue-common'
import MobileCheckboxSelected from '@opentiny/vue-theme-saas/svgs/mobile-checkbox-selected.svg'

const iconFn = () =>
  svg({
    name: 'IconMobileCheckboxSelected',
    component: MobileCheckboxSelected,
    filledComponent: MobileCheckboxSelected
  })()

iconFn.__flag = { 'svgName': 'mobile-checkbox-selected', 'hasFill': false }
export default iconFn
