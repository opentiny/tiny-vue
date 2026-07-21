import { svg } from '@opentiny/vue-common'
import ProjectProjectplan from '@opentiny/vue-theme-saas/svgs/project-projectplan.svg'
import ProjectProjectplanFilled from '@opentiny/vue-theme-saas/svgs/project-projectplan-filled.svg'

const iconFn = () =>
  svg({ name: 'IconProjectProjectplan', component: ProjectProjectplan, filledComponent: ProjectProjectplanFilled })()
iconFn.__flag = { 'svgName': 'project-projectplan', 'hasFill': true }
export default iconFn
