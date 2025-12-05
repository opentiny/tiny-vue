import { svg } from '@opentiny/vue-common'
import ProjectActualCost from '@opentiny/vue-theme-saas/svgs/project-actual-cost.svg'
import ProjectActualCostFilled from '@opentiny/vue-theme-saas/svgs/project-actual-cost-filled.svg'

export default () =>
  svg({ name: 'IconProjectActualCost', component: ProjectActualCost, filledComponent: ProjectActualCostFilled })()
