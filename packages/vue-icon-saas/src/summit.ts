import { svg } from '@opentiny/vue-common'
import Summit from '@opentiny/vue-theme-saas/svgs/summit.svg'
import SummitFilled from '@opentiny/vue-theme-saas/svgs/summit-filled.svg'

const iconFn = () => svg({ name: 'IconSummit', component: Summit, filledComponent: SummitFilled })()
iconFn.__flag = { 'svgName': 'summit', 'hasFill': true }
export default iconFn
