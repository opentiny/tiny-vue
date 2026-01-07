import { svg } from '@opentiny/vue-common'
import ProcessOverview from '@opentiny/vue-theme-saas/svgs/process-overview.svg'
import ProcessOverviewFilled from '@opentiny/vue-theme-saas/svgs/process-overview-filled.svg'

export default () =>
  svg({ name: 'IconProcessOverview', component: ProcessOverview, filledComponent: ProcessOverviewFilled })()
