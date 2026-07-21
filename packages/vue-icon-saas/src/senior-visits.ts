import { svg } from '@opentiny/vue-common'
import SeniorVisits from '@opentiny/vue-theme-saas/svgs/senior-visits.svg'
import SeniorVisitsFilled from '@opentiny/vue-theme-saas/svgs/senior-visits-filled.svg'

const iconFn = () => svg({ name: 'IconSeniorVisits', component: SeniorVisits, filledComponent: SeniorVisitsFilled })()
iconFn.__flag = { 'svgName': 'senior-visits', 'hasFill': true }
export default iconFn
