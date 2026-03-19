import { svg } from '@opentiny/vue-common'
import SandwichExpand from '@opentiny/vue-theme-saas/svgs/sandwich-expand.svg'
import SandwichExpandFilled from '@opentiny/vue-theme-saas/svgs/sandwich-expand-filled.svg'

const iconFn = () =>
  svg({ name: 'IconSandwichExpand', component: SandwichExpand, filledComponent: SandwichExpandFilled })()
iconFn.__flag = { 'svgName': 'sandwich-expand', 'hasFill': true }
export default iconFn
