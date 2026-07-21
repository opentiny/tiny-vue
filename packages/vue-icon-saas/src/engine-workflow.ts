import { svg } from '@opentiny/vue-common'
import EngineWorkflow from '@opentiny/vue-theme-saas/svgs/engine-workflow.svg'
import EngineWorkflowFilled from '@opentiny/vue-theme-saas/svgs/engine-workflow-filled.svg'

const iconFn = () =>
  svg({ name: 'IconEngineWorkflow', component: EngineWorkflow, filledComponent: EngineWorkflowFilled })()
iconFn.__flag = { 'svgName': 'engine-workflow', 'hasFill': true }
export default iconFn
