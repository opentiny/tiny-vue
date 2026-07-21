import { svg } from '@opentiny/vue-common'
import ConmentRefresh from '@opentiny/vue-theme-saas/svgs/conment-refresh.svg'
import ConmentRefreshFilled from '@opentiny/vue-theme-saas/svgs/conment-refresh-filled.svg'

const iconFn = () =>
  svg({ name: 'IconConmentRefresh', component: ConmentRefresh, filledComponent: ConmentRefreshFilled })()
iconFn.__flag = { 'svgName': 'conment-refresh', 'hasFill': true }
export default iconFn
