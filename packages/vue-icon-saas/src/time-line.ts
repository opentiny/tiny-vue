import { svg } from '@opentiny/vue-common'
import TimeLine from '@opentiny/vue-theme-saas/svgs/time-line.svg'
import TimeLineFilled from '@opentiny/vue-theme-saas/svgs/time-line-filled.svg'

const iconFn = () => svg({ name: 'IconTimeLine', component: TimeLine, filledComponent: TimeLineFilled })()
iconFn.__flag = { 'svgName': 'time-line', 'hasFill': true }
export default iconFn
