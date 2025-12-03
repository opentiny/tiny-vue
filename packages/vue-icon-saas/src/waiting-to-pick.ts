import { svg } from '@opentiny/vue-common'
import WaitingToPick from '@opentiny/vue-theme-saas/svgs/waiting-to-pick.svg'
import WaitingToPickFilled from '@opentiny/vue-theme-saas/svgs/waiting-to-pick-filled.svg'

export default () =>
  svg({ name: 'IconWaitingToPick', component: WaitingToPick, filledComponent: WaitingToPickFilled })()
