import { svg } from '@opentiny/vue-common'
import ExecutionPhase from '@opentiny/vue-theme-saas/svgs/execution-phase.svg'
import ExecutionPhaseFilled from '@opentiny/vue-theme-saas/svgs/execution-phase-filled.svg'

export default () =>
  svg({ name: 'IconExecutionPhase', component: ExecutionPhase, filledComponent: ExecutionPhaseFilled })()
