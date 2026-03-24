import { svg } from '@opentiny/vue-common'
import ProjectIncome from '@opentiny/vue-theme-saas/svgs/project-income.svg'
import ProjectIncomeFilled from '@opentiny/vue-theme-saas/svgs/project-income-filled.svg'

const iconFn = () =>
  svg({ name: 'IconProjectIncome', component: ProjectIncome, filledComponent: ProjectIncomeFilled })()
iconFn.__flag = { 'svgName': 'project-income', 'hasFill': true }
export default iconFn
