import { svg } from '@opentiny/vue-common'
import ProcessOverview from '@opentiny/vue-theme-saas/svgs/process-overview.svg'
import ProcessOverviewFilled from '@opentiny/vue-theme-saas/svgs/process-overview-filled.svg'

const iconFn = () =>
  svg({ name: 'IconProcessOverview', component: ProcessOverview, filledComponent: ProcessOverviewFilled })()
iconFn.__flag = { 'svgName': 'process-overview', 'hasFill': true }
export default iconFn
