import { svg } from '@opentiny/vue-common'
import InspectionPlan from '@opentiny/vue-theme-saas/svgs/inspection-plan.svg'
import InspectionPlanFilled from '@opentiny/vue-theme-saas/svgs/inspection-plan-filled.svg'

export default () =>
  svg({ name: 'IconInspectionPlan', component: InspectionPlan, filledComponent: InspectionPlanFilled })()
