import { svg } from '@opentiny/vue-common'
import PickingRules from '@opentiny/vue-theme-saas/svgs/picking-rules.svg'
import PickingRulesFilled from '@opentiny/vue-theme-saas/svgs/picking-rules-filled.svg'

const iconFn = () => svg({ name: 'IconPickingRules', component: PickingRules, filledComponent: PickingRulesFilled })()
iconFn.__flag = { 'svgName': 'picking-rules', 'hasFill': true }
export default iconFn
