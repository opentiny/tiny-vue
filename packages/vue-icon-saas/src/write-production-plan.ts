import { svg } from '@opentiny/vue-common'
import WriteProductionPlan from '@opentiny/vue-theme-saas/svgs/write-production-plan.svg'
import WriteProductionPlanFilled from '@opentiny/vue-theme-saas/svgs/write-production-plan-filled.svg'

const iconFn = () =>
  svg({ name: 'IconWriteProductionPlan', component: WriteProductionPlan, filledComponent: WriteProductionPlanFilled })()
iconFn.__flag = { 'svgName': 'write-production-plan', 'hasFill': true }
export default iconFn
