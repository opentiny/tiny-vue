import { svg } from '@opentiny/vue-common'
import DailyVisits from '@opentiny/vue-theme-saas/svgs/daily-visits.svg'
import DailyVisitsFilled from '@opentiny/vue-theme-saas/svgs/daily-visits-filled.svg'

const iconFn = () => svg({ name: 'IconDailyVisits', component: DailyVisits, filledComponent: DailyVisitsFilled })()
iconFn.__flag = { 'svgName': 'daily-visits', 'hasFill': true }
export default iconFn
