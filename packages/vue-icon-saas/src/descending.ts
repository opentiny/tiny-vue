import { svg } from '@opentiny/vue-common'
import Descending from '@opentiny/vue-theme-saas/svgs/descending.svg'
import DescendingFilled from '@opentiny/vue-theme-saas/svgs/descending-filled.svg'

const iconFn = () => svg({ name: 'IconDescending', component: Descending, filledComponent: DescendingFilled })()
iconFn.__flag = { 'svgName': 'descending', 'hasFill': true }
export default iconFn
