import { svg } from '@opentiny/vue-common'
import ProjectExpenses from '@opentiny/vue-theme-saas/svgs/project-expenses.svg'
import ProjectExpensesFilled from '@opentiny/vue-theme-saas/svgs/project-expenses-filled.svg'

const iconFn = () =>
  svg({ name: 'IconProjectExpenses', component: ProjectExpenses, filledComponent: ProjectExpensesFilled })()
iconFn.__flag = { 'svgName': 'project-expenses', 'hasFill': true }
export default iconFn
