import { svg } from '@opentiny/vue-common'
import RuleBuilder from '@opentiny/vue-theme-saas/svgs/rule-builder.svg'
import RuleBuilderFilled from '@opentiny/vue-theme-saas/svgs/rule-builder-filled.svg'

const iconFn = () => svg({ name: 'IconRuleBuilder', component: RuleBuilder, filledComponent: RuleBuilderFilled })()
iconFn.__flag = { 'svgName': 'rule-builder', 'hasFill': true }
export default iconFn
