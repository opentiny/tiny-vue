import { svg } from '@opentiny/vue-common'
import InspectionPlan from '@opentiny/vue-theme-saas/svgs/inspection-plan.svg'
import InspectionPlanFilled from '@opentiny/vue-theme-saas/svgs/inspection-plan-filled.svg'

const iconFn = () =>
  svg({ name: 'IconInspectionPlan', component: InspectionPlan, filledComponent: InspectionPlanFilled })()
iconFn.__flag = { 'svgName': 'inspection-plan', 'hasFill': true }
export default iconFn
