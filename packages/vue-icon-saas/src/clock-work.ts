import { svg } from '@opentiny/vue-common'
import ClockWork from '@opentiny/vue-theme-saas/svgs/clock-work.svg'
import ClockWorkFilled from '@opentiny/vue-theme-saas/svgs/clock-work-filled.svg'

const iconFn = () => svg({ name: 'IconClockWork', component: ClockWork, filledComponent: ClockWorkFilled })()
iconFn.__flag = { 'svgName': 'clock-work', 'hasFill': true }
export default iconFn
