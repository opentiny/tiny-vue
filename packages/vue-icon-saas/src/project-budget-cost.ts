import { svg } from '@opentiny/vue-common'
import ProjectBudgetCost from '@opentiny/vue-theme-saas/svgs/project-budget-cost.svg'
import ProjectBudgetCostFilled from '@opentiny/vue-theme-saas/svgs/project-budget-cost-filled.svg'

const iconFn = () =>
  svg({ name: 'IconProjectBudgetCost', component: ProjectBudgetCost, filledComponent: ProjectBudgetCostFilled })()
iconFn.__flag = { 'svgName': 'project-budget-cost', 'hasFill': true }
export default iconFn
