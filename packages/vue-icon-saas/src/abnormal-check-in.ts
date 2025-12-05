import { svg } from '@opentiny/vue-common'
import AbnormalCheckIn from '@opentiny/vue-theme-saas/svgs/abnormal-check-in.svg'
import AbnormalCheckInFilled from '@opentiny/vue-theme-saas/svgs/abnormal-check-in-filled.svg'

export default () =>
  svg({ name: 'IconAbnormalCheckIn', component: AbnormalCheckIn, filledComponent: AbnormalCheckInFilled })()
