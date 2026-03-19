import { svg } from '@opentiny/vue-common'
import ProcessPlanRequirements from '@opentiny/vue-theme-saas/svgs/process-plan-requirements.svg'
import ProcessPlanRequirementsFilled from '@opentiny/vue-theme-saas/svgs/process-plan-requirements-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconProcessPlanRequirements',
    component: ProcessPlanRequirements,
    filledComponent: ProcessPlanRequirementsFilled
  })()
iconFn.__flag = { 'svgName': 'process-plan-requirements', 'hasFill': true }
export default iconFn
