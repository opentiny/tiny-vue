import { svg } from '@opentiny/vue-common'
import CancellationApplication from '@opentiny/vue-theme-saas/svgs/cancellation-application.svg'
import CancellationApplicationFilled from '@opentiny/vue-theme-saas/svgs/cancellation-application-filled.svg'

export default () =>
  svg({
    name: 'IconCancellationApplication',
    component: CancellationApplication,
    filledComponent: CancellationApplicationFilled
  })()
