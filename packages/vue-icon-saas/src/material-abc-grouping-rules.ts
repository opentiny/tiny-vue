import { svg } from '@opentiny/vue-common'
import MaterialAbcGroupingRules from '@opentiny/vue-theme-saas/svgs/material-abc-grouping-rules.svg'
import MaterialAbcGroupingRulesFilled from '@opentiny/vue-theme-saas/svgs/material-abc-grouping-rules-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconMaterialAbcGroupingRules',
    component: MaterialAbcGroupingRules,
    filledComponent: MaterialAbcGroupingRulesFilled
  })()
iconFn.__flag = { 'svgName': 'material-abc-grouping-rules', 'hasFill': true }
export default iconFn
