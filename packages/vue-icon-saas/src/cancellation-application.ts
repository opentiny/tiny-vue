import { svg } from '@opentiny/vue-common'
import CancellationApplication from '@opentiny/vue-theme-saas/svgs/cancellation-application.svg'
import CancellationApplicationFilled from '@opentiny/vue-theme-saas/svgs/cancellation-application-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconCancellationApplication',
    component: CancellationApplication,
    filledComponent: CancellationApplicationFilled
  })()
iconFn.__flag = { 'svgName': 'cancellation-application', 'hasFill': true }
export default iconFn
