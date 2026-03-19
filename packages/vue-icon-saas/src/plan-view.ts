import { svg } from '@opentiny/vue-common'
import PlanView from '@opentiny/vue-theme-saas/svgs/plan-view.svg'
import PlanViewFilled from '@opentiny/vue-theme-saas/svgs/plan-view-filled.svg'

const iconFn = () => svg({ name: 'IconPlanView', component: PlanView, filledComponent: PlanViewFilled })()
iconFn.__flag = { 'svgName': 'plan-view', 'hasFill': true }
export default iconFn
