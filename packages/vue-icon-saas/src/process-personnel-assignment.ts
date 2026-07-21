import { svg } from '@opentiny/vue-common'
import ProcessPersonnelAssignment from '@opentiny/vue-theme-saas/svgs/process-personnel-assignment.svg'
import ProcessPersonnelAssignmentFilled from '@opentiny/vue-theme-saas/svgs/process-personnel-assignment-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconProcessPersonnelAssignment',
    component: ProcessPersonnelAssignment,
    filledComponent: ProcessPersonnelAssignmentFilled
  })()
iconFn.__flag = { 'svgName': 'process-personnel-assignment', 'hasFill': true }
export default iconFn
