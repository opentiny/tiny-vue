import { svg } from '@opentiny/vue-common'
import RequestPlan from '@opentiny/vue-theme-saas/svgs/request-plan.svg'
import RequestPlanFilled from '@opentiny/vue-theme-saas/svgs/request-plan-filled.svg'

const iconFn = () => svg({ name: 'IconRequestPlan', component: RequestPlan, filledComponent: RequestPlanFilled })()
iconFn.__flag = { 'svgName': 'request-plan', 'hasFill': true }
export default iconFn
