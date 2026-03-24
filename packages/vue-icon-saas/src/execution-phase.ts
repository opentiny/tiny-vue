import { svg } from '@opentiny/vue-common'
import ExecutionPhase from '@opentiny/vue-theme-saas/svgs/execution-phase.svg'
import ExecutionPhaseFilled from '@opentiny/vue-theme-saas/svgs/execution-phase-filled.svg'

const iconFn = () =>
  svg({ name: 'IconExecutionPhase', component: ExecutionPhase, filledComponent: ExecutionPhaseFilled })()
iconFn.__flag = { 'svgName': 'execution-phase', 'hasFill': true }
export default iconFn
