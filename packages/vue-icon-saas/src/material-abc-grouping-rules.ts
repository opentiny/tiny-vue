import { svg } from '@opentiny/vue-common'
import MaterialAbcGroupingRules from '@opentiny/vue-theme-saas/svgs/material-abc-grouping-rules.svg'
import MaterialAbcGroupingRulesFilled from '@opentiny/vue-theme-saas/svgs/material-abc-grouping-rules-filled.svg'

export default () =>
  svg({
    name: 'IconMaterialAbcGroupingRules',
    component: MaterialAbcGroupingRules,
    filledComponent: MaterialAbcGroupingRulesFilled
  })()
