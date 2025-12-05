import { svg } from '@opentiny/vue-common'
import ProjectBudgetCost from '@opentiny/vue-theme-saas/svgs/project-budget-cost.svg'
import ProjectBudgetCostFilled from '@opentiny/vue-theme-saas/svgs/project-budget-cost-filled.svg'

export default () =>
  svg({ name: 'IconProjectBudgetCost', component: ProjectBudgetCost, filledComponent: ProjectBudgetCostFilled })()
