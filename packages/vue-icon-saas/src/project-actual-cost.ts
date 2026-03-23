import { svg } from '@opentiny/vue-common'
import ProjectActualCost from '@opentiny/vue-theme-saas/svgs/project-actual-cost.svg'
import ProjectActualCostFilled from '@opentiny/vue-theme-saas/svgs/project-actual-cost-filled.svg'

const iconFn = () =>
  svg({ name: 'IconProjectActualCost', component: ProjectActualCost, filledComponent: ProjectActualCostFilled })()
iconFn.__flag = { 'svgName': 'project-actual-cost', 'hasFill': true }
export default iconFn
