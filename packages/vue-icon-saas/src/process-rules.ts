import { svg } from '@opentiny/vue-common'
import ProcessRules from '@opentiny/vue-theme-saas/svgs/process-rules.svg'
import ProcessRulesFilled from '@opentiny/vue-theme-saas/svgs/process-rules-filled.svg'

const iconFn = () => svg({ name: 'IconProcessRules', component: ProcessRules, filledComponent: ProcessRulesFilled })()
iconFn.__flag = { 'svgName': 'process-rules', 'hasFill': true }
export default iconFn
