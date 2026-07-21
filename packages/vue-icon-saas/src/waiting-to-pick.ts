import { svg } from '@opentiny/vue-common'
import WaitingToPick from '@opentiny/vue-theme-saas/svgs/waiting-to-pick.svg'
import WaitingToPickFilled from '@opentiny/vue-theme-saas/svgs/waiting-to-pick-filled.svg'

const iconFn = () =>
  svg({ name: 'IconWaitingToPick', component: WaitingToPick, filledComponent: WaitingToPickFilled })()
iconFn.__flag = { 'svgName': 'waiting-to-pick', 'hasFill': true }
export default iconFn
