import { svg } from '@opentiny/vue-common'
import ProjectExpenses from '@opentiny/vue-theme-saas/svgs/project-expenses.svg'
import ProjectExpensesFilled from '@opentiny/vue-theme-saas/svgs/project-expenses-filled.svg'

export default () =>
  svg({ name: 'IconProjectExpenses', component: ProjectExpenses, filledComponent: ProjectExpensesFilled })()
