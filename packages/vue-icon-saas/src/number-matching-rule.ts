import { svg } from '@opentiny/vue-common'
import NumberMatchingRule from '@opentiny/vue-theme-saas/svgs/number-matching-rule.svg'
import NumberMatchingRuleFilled from '@opentiny/vue-theme-saas/svgs/number-matching-rule-filled.svg'

const iconFn = () =>
  svg({ name: 'IconNumberMatchingRule', component: NumberMatchingRule, filledComponent: NumberMatchingRuleFilled })()
iconFn.__flag = { 'svgName': 'number-matching-rule', 'hasFill': true }
export default iconFn
