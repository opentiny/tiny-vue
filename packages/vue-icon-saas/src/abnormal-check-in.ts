import { svg } from '@opentiny/vue-common'
import AbnormalCheckIn from '@opentiny/vue-theme-saas/svgs/abnormal-check-in.svg'
import AbnormalCheckInFilled from '@opentiny/vue-theme-saas/svgs/abnormal-check-in-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAbnormalCheckIn', component: AbnormalCheckIn, filledComponent: AbnormalCheckInFilled })()
iconFn.__flag = { 'svgName': 'abnormal-check-in', 'hasFill': true }
export default iconFn
