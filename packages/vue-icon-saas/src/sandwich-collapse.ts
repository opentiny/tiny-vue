import { svg } from '@opentiny/vue-common'
import SandwichCollapse from '@opentiny/vue-theme-saas/svgs/sandwich-collapse.svg'
import SandwichCollapseFilled from '@opentiny/vue-theme-saas/svgs/sandwich-collapse-filled.svg'

const iconFn = () =>
  svg({ name: 'IconSandwichCollapse', component: SandwichCollapse, filledComponent: SandwichCollapseFilled })()
iconFn.__flag = { 'svgName': 'sandwich-collapse', 'hasFill': true }
export default iconFn
