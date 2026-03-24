import { svg } from '@opentiny/vue-common'
import Ascending from '@opentiny/vue-theme-saas/svgs/ascending.svg'
import AscendingFilled from '@opentiny/vue-theme-saas/svgs/ascending-filled.svg'

const iconFn = () => svg({ name: 'IconAscending', component: Ascending, filledComponent: AscendingFilled })()
iconFn.__flag = { 'svgName': 'ascending', 'hasFill': true }
export default iconFn
